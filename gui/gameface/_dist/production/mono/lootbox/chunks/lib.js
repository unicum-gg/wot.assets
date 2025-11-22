var __defProp = Object.defineProperty,
    __defNormalProp = (e, t, u) =>
        t in e ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : (e[t] = u),
    __publicField = (e, t, u) => __defNormalProp(e, 'symbol' != typeof t ? t + '' : t, u),
    _a,
    _b;
import {
    c as createContainer,
    a as asValue,
    b as asClass,
    d as asFunction,
    r as reactExports,
    j as jsxRuntimeExports,
    e as cx,
    o as observable,
    f as action,
    u as untracked,
    R as React,
    g as client$1,
    h as useSpring,
    i as animated,
    l as loadDefaultJapaneseParser,
} from './vendor.js';
const resources = createContainer();
function concatWithPath(e, t) {
    return e && e.length > 0 ? `${e}.${t}` : t;
}
function logBySeverity$1(e, t) {
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
function readFromR$2(e, t) {
    const u = t.split('.');
    if (window.R && window.R.images) {
        const t = u[u.length - 1];
        if (!t) return;
        const n = u.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, e);
        if (!n) return;
        return 'function' == typeof n[t] ? n[t]() : void 0;
    }
    throw new Error('R class with images field is not defined');
}
class ImagesRClassProvider {
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, u = 'silent') {
        const n = e.startsWith('R.images') ? e : concatWithPath(this.prefix, e),
            r = readFromR$2(e.startsWith('R.images') ? window : this.root, n);
        return void 0 === r ? ('silent' !== u && logBySeverity$1(`Resource not found: ${n}`, u), t()) : r;
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
var DateTimeFormatsEnum = ((e) => (
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
))(DateTimeFormatsEnum || {});
const numberFormats = { integral: 0, gold: 1 },
    realFormats = { fractional: 0, woZeroDigits: 1 },
    numberFormatList = Object.keys(numberFormats),
    realFormatList = Object.keys(realFormats);
function isNumberFormat(e) {
    return e in numberFormats;
}
function formatNumber(e, t) {
    return window.systemLocale.getNumberFormat(t, numberFormats[e]);
}
function isRealFormat(e) {
    return e in realFormats;
}
function formatReal(e, t) {
    return window.systemLocale.getRealFormat(t, realFormats[e]);
}
function formatDateTime(e, t, u = !0) {
    return window.regionalDateTime.getRegionalDateTime(t, e, u);
}
const timeFormats = { full: DateTimeFormatsEnum.FullTime, short: DateTimeFormatsEnum.ShortTime },
    timeFormatList = Object.keys(timeFormats);
function formatTime(e, t, u = !0) {
    return window.regionalDateTime.getRegionalDateTime(t, e, u);
}
const intl = {
    isNumberFormat: isNumberFormat,
    formatNumber: formatNumber,
    numberFormats: numberFormatList,
    isRealFormat: isRealFormat,
    formatReal: formatReal,
    realFormats: realFormatList,
    formatDateTime: formatDateTime,
    dateTimeFormats: DateTimeFormatsEnum,
    formatTime: formatTime,
    timeFormats: timeFormatList,
    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
};
class SoundsRClassProvider {
    play(e) {
        const t = window.R.sounds[e];
        'function' == typeof t
            ? engine.call('PlaySound', t.apply(window.R.sounds))
            : logBySeverity$1(`Sound not found: ${e}`, 'warn');
    }
}
function readFromR$1(e, t, u) {
    const n = e.split('.');
    if (window.R && window.R.strings) {
        const e = n[n.length - 1];
        if (!e) return;
        const r = n.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, u);
        if (!r) return;
        return 'function' == typeof r[e] ? (t ? r[e](t) : r[e]()) : void 0;
    }
    throw new Error('R class with strings field is not defined');
}
class StringsRClassProvider {
    constructor(e = window.R.strings, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, u = 'silent') {
        const n = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            r = readFromR$1(n, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === r ? ('silent' !== u && logBySeverity$1(`Resource not found: ${n}`, u), t()) : r;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            u = readFromR$1(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === u) throw new Error(`Resource not found: ${t}`);
        return u;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, u, n = 'silent') {
        const r = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            o = readFromR$1(r, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== n && logBySeverity$1(`Resource not found: ${r}`, n), u()) : o;
    }
    pluralOrEmpty(e, t, u = 'warn') {
        return this.pluralOr(e, t, () => '', u);
    }
}
function readFromR(e, t) {
    const u = t.split('.');
    if (window.R && window.R.videos) {
        const t = u[u.length - 1];
        if (!t) return;
        const n = u.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, e);
        if (!n) return;
        return 'function' == typeof n[t] ? n[t]() : void 0;
    }
    throw new Error('R class with videos field is not defined');
}
class VideosRClassProvider {
    constructor(e = window.R.videos, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, u = 'silent') {
        const n = e.startsWith('R.videos') ? e : concatWithPath(this.prefix, e),
            r = readFromR(e.startsWith('R.videos') ? window : this.root, n);
        return void 0 === r ? ('silent' !== u && logBySeverity$1(`Resource not found: ${e}`, u), t()) : r;
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
class ViewsRClassProvider {
    read(e) {
        return e(window.R.views);
    }
}
class AliasesRClassProvider {
    read(e) {
        return e(window.R.aliases);
    }
}
resources.register({
    strings: asFunction(() => new StringsRClassProvider()).singleton(),
    images: asFunction(() => new ImagesRClassProvider(window.R.images.gui.maps.icons)).singleton(),
    atlases: asFunction(() => new ImagesRClassProvider(window.R.atlases)).singleton(),
    videos: asFunction(() => new VideosRClassProvider(window.R.videos)).singleton(),
    views: asClass(ViewsRClassProvider).singleton(),
    aliases: asClass(AliasesRClassProvider).singleton(),
    sounds: asClass(SoundsRClassProvider).singleton(),
    langCode: asValue(R.strings.settings.LANGUAGE_CODE()),
    intl: asValue(intl),
});
const easings = {
        easeInCubic: (e) => e * e * e,
        easeOutCubic: (e) => --e * e * e + 1,
        easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    },
    HOURS_IN_DAY = 24,
    ONE_MINUTE = 60,
    ONE_HOUR = 60 * ONE_MINUTE,
    ONE_DAY = HOURS_IN_DAY * ONE_HOUR;
function getTimeUnits(e = 0) {
    let t = e;
    const u = Math.trunc(t / ONE_DAY);
    t -= u * ONE_DAY;
    const n = Math.trunc(t / ONE_HOUR);
    t -= n * ONE_HOUR;
    const r = Math.trunc(t / ONE_MINUTE);
    return ((t -= r * ONE_MINUTE), { days: u, hours: n, minutes: r, seconds: t });
}
function normalizeResource(e) {
    return e.replaceAll('-', '_');
}
const convertNbsp$1 = (e) => e.replace(/&nbsp;/g, ' ');
function format$1(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function makeEngineEvent$1(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function setTrackMouseOutside$1(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const onResize$1 = makeEngineEvent$1('clientResized'),
    onRescale = makeEngineEvent$1('self.onScaleUpdated'),
    internalMouse$1 = {
        down: makeEngineEvent$1('mousedown'),
        up: makeEngineEvent$1('mouseup'),
        move: makeEngineEvent$1('mousemove'),
    };
function initMouseEvents$1() {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && setTrackMouseOutside$1(!1);
    }
    function u() {
        e.enabled && setTrackMouseOutside$1(!0);
    }
    function n() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', u),
                  setTrackMouseOutside$1(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', u))
            : setTrackMouseOutside$1(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, u) => (
                (t[u] = (function (t) {
                    return (u) => {
                        e.listeners += 1;
                        const r = `mouse${t}`,
                            o = internalMouse$1[t]((e) => u([e, 'outside']));
                        function s(e) {
                            u([e, 'inside']);
                        }
                        return (
                            window.addEventListener(r, s),
                            n(),
                            () => {
                                (o(), window.removeEventListener(r, s), (e.listeners -= 1), n());
                            }
                        );
                    };
                })(u)),
                t
            ),
            {},
        ),
        disable() {
            ((e.enabled = !1), n());
        },
        enable() {
            ((e.enabled = !0), n());
        },
        enableOutside() {
            e.enabled && setTrackMouseOutside$1(!0);
        },
        disableOutside() {
            e.enabled && setTrackMouseOutside$1(!1);
        },
    };
}
const mouse$1 = initMouseEvents$1();
function getSize$2(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
function playSound$2(e) {
    engine.call('PlaySound', e);
}
const graphicsQuality$1 = {
        isLow: () => 1 === viewEnv.getGraphicsQuality(),
        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
        get: () => viewEnv.getGraphicsQuality(),
    },
    sounds$1 = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays$1 = Object.keys(sounds$1).reduce((e, t) => ((e[t] = () => playSound$2(sounds$1[t])), e), {}),
    play$1 = { ...plays$1, sound: playSound$2 },
    displayStatus$1 = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    createSubscribeHitTest = () => {
        const e = new Set(),
            t = (t, u) => {
                for (const n of e.values())
                    if (n(t)) {
                        u.value = !1;
                        break;
                    }
            };
        return (u) => (
            e.add(u),
            1 === e.size && (viewEnv.setHitTestEnabled(!0), engine.on('self.onHitTest', t)),
            () => {
                (e.delete(u), 0 === e.size && (viewEnv.setHitTestEnabled(!1), engine.off('self.onHitTest', t)));
            }
        );
    },
    events$2 = {
        onTextureFrozen: makeEngineEvent$1('self.onTextureFrozen'),
        onTextureReady: makeEngineEvent$1('self.onTextureReady'),
        onDomBuilt: makeEngineEvent$1('self.onDomBuilt'),
        onLoaded: makeEngineEvent$1('self.onLoaded'),
        onHitTest: createSubscribeHitTest(),
        onDisplayChanged: makeEngineEvent$1('self.onShowingStatusChanged'),
        onFocusUpdated: makeEngineEvent$1('self.onFocusChanged'),
        children: {
            onAdded: makeEngineEvent$1('children.onAdded'),
            onLoaded: makeEngineEvent$1('children.onLoaded'),
            onRemoved: makeEngineEvent$1('children.onRemoved'),
            onAttached: makeEngineEvent$1('children.onAttached'),
            onTextureReady: makeEngineEvent$1('children.onTextureReady'),
            onRequestPosition: makeEngineEvent$1('children.requestPosition'),
        },
    },
    viewEventTypes$1 = { tooltip: 1 };
function serializeEventArgument(e) {
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
const createViewEventArguments$2 = (e) => {
        const t = [];
        for (const [u, n] of Object.entries(e)) {
            const e = serializeEventArgument(n);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: u, ...e });
        }
        return t;
    },
    sendViewEvent$1 = (e, t) => {
        const u = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: n, ...r } = t;
            return void 0 !== n
                ? viewEnv.handleViewEvent({ __Type: u, type: e, ...r, arguments: createViewEventArguments$2(n) })
                : viewEnv.handleViewEvent({ __Type: u, type: e, ...r });
        }
        return viewEnv.handleViewEvent({ __Type: u, type: e });
    },
    openedTooltips = new Map(),
    sendEvent$1 = {
        tooltip: {
            open(e, t, u = 0, n) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, {
                    contentID: t,
                    decoratorID: u,
                    targetID: e,
                    isMouseEvent: !0,
                    on: !0,
                    args: n,
                }),
                    openedTooltips.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, u = 0) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, { contentID: t, decoratorID: u, targetID: e, on: !1 }),
                    openedTooltips.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(openedTooltips.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
    };
function ids() {
    return window.subViews.ids();
}
function addModelObserver$1(e, t, u) {
    return viewEnv.addDataChangedCallback(e, t, u);
}
function remToPx$1(e) {
    return viewEnv.remToPx(e);
}
function setEventHandled$1() {
    return viewEnv.setEventHandled();
}
function isEventHandled$1() {
    return viewEnv.isEventHandled();
}
function forceTriggerMouseMove$1() {
    viewEnv.forceTriggerMouseMove();
}
function enableFullScreenModeSupported$1() {
    viewEnv.setFullscreenModeSupported(!0);
}
function initExternalPaddings$1(e) {
    function t() {
        const { top: t, right: u, bottom: n, left: r } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${u}rem`),
            e.style.setProperty('--external-padding-bottom', `${n}rem`),
            e.style.setProperty('--external-padding-left', `${r}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
function getKeyNameFromKeyCode(e) {
    return window.systemInput.getKeyName(e);
}
function pipe(e, t, u, n, r, o, s, a, i) {
    switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return t(e);
        case 3:
            return u(t(e));
        case 4:
            return n(u(t(e)));
        case 5:
            return r(n(u(t(e))));
        case 6:
            return o(r(n(u(t(e)))));
        case 7:
            return s(o(r(n(u(t(e))))));
        case 8:
            return a(s(o(r(n(u(t(e)))))));
        case 9:
            return i(a(s(o(r(n(u(t(e))))))));
        default: {
            let e = arguments[0];
            for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
            return e;
        }
    }
}
Object.keys(displayStatus$1).reduce(
    (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === displayStatus$1[t]), e),
    {},
);
class SimpleEmitter {
    constructor() {
        __publicField(this, 'listeners', new Set());
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
const getRootDefault = (e) => (0 === e ? window : window.subViews.get(e));
function create(
    { initializer: e = !0, rootId: t = 0, getRoot: u = getRootDefault, context: n = 'model' } = {},
    { name: r = 'DataLayer' } = {},
) {
    const o = new Map(),
        s = { subscribersNotified: new SimpleEmitter() },
        a = engine.whenReady.then(() => {
            function e(e, t, u) {
                (u.forEach((u) => {
                    const n = o.get(u);
                    void 0 !== n && n(e, t);
                }),
                    s.subscribersNotified.emit());
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
    function i() {
        try {
            const e = u(t);
            return n.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${r}. Root id: ${t}. Context: ${n}`);
        }
    }
    const l = (e) => {
        const u = i();
        if ('string' != typeof e || 0 === e.length) return u;
        try {
            return e.split('.').reduce((e, t) => {
                if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                const u = e[t];
                return 'function' == typeof u ? u.bind(e) : u;
            }, u);
        } catch (o) {
            throw new Error(`Failure readByPath in ${r}. Root id: ${t}. Context: ${n}:\n${o}\n`);
        }
    };
    function c(e) {
        viewEnv.removeDataChangedCallback(e, t) ? o.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (u, r) => {
            const s = addModelObserver$1('string' == typeof r ? `${n}.${r}` : n, t, !0);
            return (o.set(s, u), e && u(l(r), []), s);
        },
        readByPath: l,
        readSafeByPath: (e) => {
            const t = i();
            return 'string' != typeof e || 0 === e.length
                ? t
                : e.split('.').reduce((e, t) => {
                      const u = null == e ? void 0 : e[t];
                      return 'function' == typeof u ? u.bind(e) : u;
                  }, t);
        },
        createCallback: (e, t) => {
            const u = l(t);
            return (...t) => {
                u(e(...t));
            };
        },
        createCallbackNoArgs: (e) => {
            const t = l(e);
            return () => {
                t();
            };
        },
        dispose: function () {
            if (0 === t || ids().includes(t)) for (const e of o.keys()) c(e);
            a.then((e) => e());
        },
        unsubscribe: c,
        events: s,
    };
}
function cleanContext(e) {
    if (e.startsWith('model')) {
        return e.split('.').slice(1).join('.');
    }
    return e;
}
function resolvePathContext(e, t) {
    if (!t) return e;
    const u = cleanContext(t);
    return e ? (0 === u.length ? e : `${u}.${e}`) : u;
}
function resolvePath(e, t) {
    return t ? resolvePathContext(e, t.context) : e;
}
function createMockInstance(e, t) {
    return {
        subscribe: () => 0,
        readSafeByPath: e,
        readByPath: e,
        createCallback: (u, n) => {
            const r = e(resolvePath(n, t));
            return (...e) => {
                r(u(...e));
            };
        },
        createCallbackNoArgs: (u) => {
            const n = e(resolvePath(u, t));
            return () => {
                n();
            };
        },
        dispose: () => {},
        unsubscribe: () => {},
        events: { subscribersNotified: new SimpleEmitter() },
    };
}
const clamp$1 = (e, t, u) => (u < e ? e : u > t ? t : u);
function noop$2() {}
function constFalse() {
    return !1;
}
function addEventListener(e, t, u, n) {
    return (e.addEventListener(t, u, n), () => e.removeEventListener(t, u, n));
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((s.prototype.append = function (e, t) {
                ((e = r(e)), (t = o(t)));
                var u = this.map[e];
                (u || ((u = []), (this.map[e] = u)), u.push(t));
            }),
                (s.prototype.delete = function (e) {
                    delete this.map[r(e)];
                }),
                (s.prototype.get = function (e) {
                    var t = this.map[r(e)];
                    return t ? t[0] : null;
                }),
                (s.prototype.getAll = function (e) {
                    return this.map[r(e)] || [];
                }),
                (s.prototype.has = function (e) {
                    return this.map.hasOwnProperty(r(e));
                }),
                (s.prototype.set = function (e, t) {
                    this.map[r(e)] = [o(t)];
                }),
                (s.prototype.forEach = function (e) {
                    var t = this;
                    Object.getOwnPropertyNames(this.map).forEach(function (u) {
                        e(u, t.map[u]);
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
                u = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'],
                n = !(
                    'undefined' == typeof window ||
                    !window.ActiveXObject ||
                    (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
                );
            (c.call(d.prototype),
                c.call(m.prototype),
                (self.Headers = s),
                (self.Request = d),
                (self.Response = m),
                (self.fetch = function (t, u) {
                    var r;
                    return (
                        (r = d.prototype.isPrototypeOf(t) && !u ? t : new d(t, u)),
                        new fetch.Promise(function (t, u) {
                            var o = (function () {
                                return n && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function s() {
                                if (4 === o.readyState) {
                                    var e = 1223 === o.status ? 204 : o.status;
                                    if (e < 100 || e > 599) u(new TypeError('Network request failed'));
                                    else {
                                        var n = {
                                                status: e,
                                                statusText: o.statusText,
                                                headers: p(o),
                                                url:
                                                    'responseURL' in o
                                                        ? o.responseURL
                                                        : /^X-Request-URL:/m.test(o.getAllResponseHeaders())
                                                          ? o.getResponseHeader('X-Request-URL')
                                                          : void 0,
                                            },
                                            r = 'response' in o ? o.response : o.responseText;
                                        t(new m(r, n));
                                    }
                                }
                            }
                            ('cors' === r.credentials && (o.withCredentials = !0),
                                (o.onreadystatechange = s),
                                self.usingActiveXhr ||
                                    ((o.onload = s),
                                    (o.onerror = function () {
                                        u(new TypeError('Network request failed'));
                                    })),
                                o.open(r.method, r.url, !0),
                                'responseType' in o && e && (o.responseType = 'blob'),
                                r.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        o.setRequestHeader(e, t);
                                    });
                                }),
                                o.send(void 0 === r._bodyInit ? null : r._bodyInit));
                        })
                    );
                }),
                (fetch.Promise = self.Promise),
                (self.fetch.polyfill = !0));
        }
        function r(e) {
            if (('string' != typeof e && (e = e.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)))
                throw new TypeError('Invalid character in header field name');
            return e.toLowerCase();
        }
        function o(e) {
            return ('string' != typeof e && (e = e.toString()), e);
        }
        function s(e) {
            this.map = {};
            var t = this;
            e instanceof s
                ? e.forEach(function (e, u) {
                      u.forEach(function (u) {
                          t.append(e, u);
                      });
                  })
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (u) {
                      t.append(u, e[u]);
                  });
        }
        function a(e) {
            if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function i(e) {
            return new fetch.Promise(function (t, u) {
                ((e.onload = function () {
                    t(e.result);
                }),
                    (e.onerror = function () {
                        u(e.error);
                    }));
            });
        }
        function l(e) {
            var t = new FileReader();
            return (t.readAsArrayBuffer(e), i(t));
        }
        function c() {
            return (
                (this.bodyUsed = !1),
                (this._initBody = function (u) {
                    if (((this._bodyInit = u), 'string' == typeof u)) this._bodyText = u;
                    else if (e && Blob.prototype.isPrototypeOf(u)) this._bodyBlob = u;
                    else if (t && FormData.prototype.isPrototypeOf(u)) this._bodyFormData = u;
                    else {
                        if (u) throw new Error('unsupported BodyInit type');
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
                              u = a(this);
                          if (u) return u;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), i(t));
                          if (this._bodyFormData) throw new Error('could not read FormData body as text');
                          return fetch.Promise.resolve(this._bodyText);
                      }))
                    : (this.text = function () {
                          var e = a(this);
                          return e || fetch.Promise.resolve(this._bodyText);
                      }),
                t &&
                    (this.formData = function () {
                        return this.text().then(E);
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
            var n, r;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new s(t.headers)),
                (this.method = ((n = t.method || 'GET'), (r = n.toUpperCase()), u.indexOf(r) > -1 ? r : n)),
                (this.mode = t.mode || null),
                (this.referrer = null),
                ('GET' === this.method || 'HEAD' === this.method) && t.body)
            )
                throw new TypeError('Body not allowed for GET or HEAD requests');
            this._initBody(t.body);
        }
        function E(e) {
            var t = new FormData();
            return (
                e
                    .trim()
                    .split('&')
                    .forEach(function (e) {
                        if (e) {
                            var u = e.split('='),
                                n = u.shift().replace(/\+/g, ' '),
                                r = u.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(n), decodeURIComponent(r));
                        }
                    }),
                t
            );
        }
        function p(e) {
            var t = new s();
            return (
                e
                    .getAllResponseHeaders()
                    .trim()
                    .split('\n')
                    .forEach(function (e) {
                        var u = e.trim().split(':'),
                            n = u.shift().trim(),
                            r = u.join(':').trim();
                        t.append(n, r);
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
                (this.headers = t.headers instanceof s ? t.headers : new s(t.headers)),
                (this.url = t.url || ''));
        }
    })());
const keyCodes = { SPACE: 32 };
function makeMapWithPrefix(e, t) {
    return e.reduce((e, u) => ({ ...e, [`${t}_${u}`.toUpperCase()]: `${t}${u}` }), {});
}
function makeMap(e) {
    return e.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {});
}
const keyStringCodes = {
    NONE: 'NONE',
    ...makeMap([
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
    ...makeMapWithPrefix(
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
    ...makeMapWithPrefix(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'Digit'),
    ...makeMapWithPrefix(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'NumPad'),
    ...makeMapWithPrefix(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 'F'),
    ...makeMapWithPrefix(['Multiply', 'Divide', 'Add', 'Subtract', 'Decimal'], 'Numpad'),
    ...makeMapWithPrefix(['Left', 'Right', 'Up', 'Down'], 'Arrow'),
    ...makeMapWithPrefix(['Up', 'Down'], 'Page'),
    ...makeMapWithPrefix(['Left', 'Right'], 'Bracket'),
};
function normalizeKeyCode(e) {
    return 'number' == typeof e ? getKeyNameFromKeyCode(e) : e;
}
function get(e, t) {
    var u;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
}
const unsafeGet = get;
function unwrapItem(e) {
    var t;
    return e &&
        'object' == typeof e &&
        'value' in e &&
        (null == (t = e.constructor) ? void 0 : t.name.includes('ArrayItem'))
        ? null == e
            ? void 0
            : e.value
        : e;
}
function map(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
}
function some(e, t) {
    if (Array.isArray(e)) return e.some(t);
    for (let u = 0; u < e.length; u++) {
        if (t(unsafeGet(e, u), u, e)) return !0;
    }
    return !1;
}
function push(e, t) {
    if (Array.isArray(e)) return (e.push(t), e);
    throw new Error('Mutate CoherentArrayProxy is not available');
}
function set(e, t, u) {
    if (Array.isArray(e)) return ((e[t] = u), e);
    throw new Error('Mutate CoherentArrayProxy is not available');
}
function lastIndex(e) {
    return e.length - 1;
}
function lastIndexZero(e) {
    return Math.max(0, e.length - 1);
}
function slice(e, t = 0, u = e.length - 1) {
    return {
        [Symbol.iterator]() {
            let n = Math.max(t, 0);
            const r = Math.min(u, lastIndexZero(e));
            return {
                next: function () {
                    if (n > r) return { done: !0, value: null };
                    const t = e[n++];
                    return t ? { value: unwrapItem(t), done: !1 } : { done: !0, value: null };
                },
            };
        },
    };
}
function find(e, t) {
    for (let u = 0; u < e.length; u++) {
        const n = unwrapItem(e[u]);
        if (t(n, u, e)) return n;
    }
}
function findIndex(e, t) {
    for (let u = 0; u < e.length; u++) {
        if (t(unsafeGet(e, u), u, e)) return u;
    }
}
function reduce(e, t, u) {
    if (Array.isArray(e)) return e.reduce(t, u);
    let n = u;
    for (let r = 0; r < e.length; r++) {
        n = t(n, unsafeGet(e, r), r, e);
    }
    return n;
}
const createLayoutReadyInEffect$1 = (e) => {
        let t,
            u = null;
        return (
            (u = requestAnimationFrame(() => {
                u = requestAnimationFrame(() => {
                    ((u = null), (t = e()));
                });
            })),
            () => {
                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
            }
        );
    },
    createTimeoutInEffect = (e, t) => {
        let u;
        const n = setTimeout(() => {
            u = e();
        }, t);
        return () => {
            ('function' == typeof u && u(), clearTimeout(n));
        };
    },
    ROMAN$1 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    ARABIC$1 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    ROMAN_SUBSET = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    ROMAN_FORBIDDEN_LANGUAGE_CODES$1 = ['ko', 'no'],
    IS_ROMAN_FORBIDDEN = ROMAN_FORBIDDEN_LANGUAGE_CODES$1.includes(resources.resolve('langCode'));
function arabicToRoman(e) {
    if (e <= 10) return ROMAN_SUBSET[e] ?? String(e);
    let t = '';
    for (let u = ARABIC$1.length - 1; u >= 0; u--) {
        let n = ARABIC$1[u];
        for (; void 0 !== n && e >= n; ) ((t += ROMAN$1[u]), (e -= n));
    }
    return t;
}
function toRoman(e) {
    return e <= 0
        ? (console.error('Arabic value must be greater than zero.'), String(e))
        : IS_ROMAN_FORBIDDEN
          ? String(e)
          : arabicToRoman(e);
}
class Stack {
    constructor() {
        __publicField(this, 'items', []);
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
const CHINESE_LANGUAGE_CODES$1 = new Set(['zh_cn', 'zh_sg', 'zh_tw']),
    JAPANESE_LANGUAGE_CODE = 'ja';
function splitChinese$1(e) {
    const t = [],
        u = e
            .replace(/&nbsp;/g, ' ')
            .replace(/ /g, ' ')
            .matchAll(/[(（《「]*["'][^'"]*["'][。，:;：；—！!？?》」•%)、]*|.*?(?=[(（《「]*["'])|.*/gsu);
    for (const [n] of u) {
        const e = n.matchAll(
            /[(（《「“‘'"]*[\u4E00-\u9FFF\u3400-\u4DBF%][。，:;：；—！!？?》」•%)、’”'"]*|[(（《「“‘'"]*[a-zA-Z0-9-.,]+[。，:;：；—！!？?》」•%)、’”'"]*|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
        );
        for (const [u] of e) t.push(u);
    }
    return t;
}
function splitJapanese(e) {
    const t = [],
        u = e
            .replace(/&nbsp;/g, ' ')
            .matchAll(
                /[【「(（『《]?[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF%](?:[。!?、…・ー—–!%?）)】」》』]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\u3040-\u30FF/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|\u00A0|[^\s]/gu,
            );
    for (const [n] of u) t.push(n);
    return t;
}
function addSpaceAndMap(e, t, u) {
    return CHINESE_LANGUAGE_CODES$1.has(t) || t === JAPANESE_LANGUAGE_CODE
        ? e.map(u)
        : e.map((e, t, n) => (t === n.length - 1 ? u(e, t, n) : u(`${e} `, t, n)));
}
function splitLocale(e, t) {
    return CHINESE_LANGUAGE_CODES$1.has(t)
        ? splitChinese$1(e)
        : t === JAPANESE_LANGUAGE_CODE
          ? splitJapanese(e)
          : e.split(' ');
}
const MediaContext = reactExports.createContext(void 0);
function useMediaContext() {
    const e = reactExports.useContext(MediaContext);
    if (!e) throw new Error('useMediaContext must be used within a MediaProvider');
    return e;
}
const breakpoints = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
    },
    breakpointsByType = {
        extraSmall: { weight: 0, name: breakpoints.extraSmall, className: 'mediaExtraSmall', width: 1280, height: 768 },
        small: { weight: 1, name: breakpoints.small, className: 'mediaSmall', width: 1366, height: 768 },
        medium: { weight: 2, name: breakpoints.medium, className: 'mediaMedium', width: 1600, height: 900 },
        large: { weight: 3, name: breakpoints.large, className: 'mediaLarge', width: 1920, height: 1080 },
        extraLarge: {
            weight: 4,
            name: breakpoints.extraLarge,
            className: 'mediaExtraLarge',
            width: 2560,
            height: 1440,
        },
    };
var MediaSize =
        ((MediaSize2 = MediaSize || {}),
        (MediaSize2[(MediaSize2.Small = breakpointsByType.small.width)] = 'Small'),
        (MediaSize2[(MediaSize2.Medium = breakpointsByType.medium.width)] = 'Medium'),
        (MediaSize2[(MediaSize2.Large = breakpointsByType.large.width)] = 'Large'),
        (MediaSize2[(MediaSize2.ExtraLarge = breakpointsByType.extraLarge.width)] = 'ExtraLarge'),
        MediaSize2),
    MediaSize2,
    MediaWidth =
        ((MediaWidth2 = MediaWidth || {}),
        (MediaWidth2[(MediaWidth2.Small = breakpointsByType.small.width)] = 'Small'),
        (MediaWidth2[(MediaWidth2.Medium = breakpointsByType.medium.width)] = 'Medium'),
        (MediaWidth2[(MediaWidth2.Large = breakpointsByType.large.width)] = 'Large'),
        (MediaWidth2[(MediaWidth2.ExtraLarge = breakpointsByType.extraLarge.width)] = 'ExtraLarge'),
        MediaWidth2),
    MediaWidth2,
    MediaHeight =
        ((MediaHeight2 = MediaHeight || {}),
        (MediaHeight2[(MediaHeight2.Small = breakpointsByType.small.height)] = 'Small'),
        (MediaHeight2[(MediaHeight2.Medium = breakpointsByType.medium.height)] = 'Medium'),
        (MediaHeight2[(MediaHeight2.Large = breakpointsByType.large.height)] = 'Large'),
        (MediaHeight2[(MediaHeight2.ExtraLarge = breakpointsByType.extraLarge.height)] = 'ExtraLarge'),
        MediaHeight2),
    MediaHeight2;
const BREAKPOINTS = Object.values(breakpointsByType);
function generateMediaClasses(e, t) {
    const u = t['width' === e ? 'height' : 'width'],
        n = new Set(t[e].classes),
        r = new Set(u.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || n.has(e)));
    return Array.from(new Set([...n, ...r])).join(' ');
}
function calculateMedia(e, t, u) {
    const n = BREAKPOINTS.reduce(
            (u, n) => (
                n.width <= e &&
                    (u.width.classes.push(n.className, `${n.className}Width`),
                    u.width.names.push(n.name),
                    (u.width.weight += 1)),
                n.height <= t &&
                    (u.height.classes.push(n.className, `${n.className}Height`),
                    u.height.names.push(n.name),
                    (u.height.weight += 1)),
                u
            ),
            { width: { classes: [], names: [], weight: 0 }, height: { classes: [], names: [], weight: 0 } },
        ),
        r = n.width.weight <= n.height.weight ? 'width' : 'height',
        o = n[r],
        s = o.names[o.names.length - 1] ?? breakpoints.extraSmall,
        a = breakpointsByType[s],
        i = n.width.names,
        l = n.height.names,
        c = i[i.length - 1] ?? breakpoints.extraSmall,
        d = l[l.length - 1] ?? breakpoints.extraSmall,
        E = { width: breakpointsByType[c].width, height: breakpointsByType[d].height };
    return {
        mediaClass: generateMediaClasses(r, n),
        breakpoint: a,
        screenWidthRem: e,
        screenHeightRem: t,
        breaks: o.names,
        sides: E,
        mediaSize: a.width,
        mediaWidth: E.width,
        mediaHeight: E.height,
        upscale: u > 1,
    };
}
const getScale$1 = () => remToPx$1(1),
    calcMediaState = () => {
        const e = getSize$2('rem');
        return calculateMedia(e.width, e.height, getScale$1());
    };
function MediaProvider({ children: e }) {
    const [t, u] = reactExports.useState(calcMediaState);
    return (
        reactExports.useLayoutEffect(() => {
            function e() {
                u(calcMediaState);
            }
            e();
            const t = onResize$1(e),
                n = onRescale(e);
            return () => {
                (t(), n());
            };
        }, []),
        jsxRuntimeExports.jsx(MediaContext.Provider, { value: t, children: e })
    );
}
function useMedia() {
    return useMediaContext();
}
function MediaWrapperElement({ children: e, className: t, ...u }) {
    const { mediaClass: n, upscale: r } = useMedia();
    return jsxRuntimeExports.jsx('div', {
        className: cx(t, 'media-wrapper', n, r && 'media-upscale'),
        ...u,
        children: e,
    });
}
function MediaWrapper({ children: e, ...t }) {
    return jsxRuntimeExports.jsx(MediaProvider, {
        children: jsxRuntimeExports.jsx(MediaWrapperElement, { ...t, children: e }),
    });
}
const usePrevious = (e) => {
    const t = reactExports.useRef();
    return (
        reactExports.useEffect(() => {
            t.current = e;
        }, [e]),
        t.current
    );
};
function useScreenSize() {
    const [e, t] = reactExports.useState(() => getSize$2('rem'));
    return (
        reactExports.useEffect(() => {
            function e() {
                t(getSize$2('rem'));
            }
            const u = onResize$1(e),
                n = onRescale(e);
            return () => {
                (u(), n());
            };
        }, []),
        e
    );
}
function throttle$1(e, t, u, n) {
    let r,
        o = !1,
        s = 0;
    function a() {
        r && clearTimeout(r);
    }
    function i(...i) {
        const l = this,
            c = Date.now() - s;
        function d() {
            ((s = Date.now()), u.apply(l, i));
        }
        o ||
            (n && !r && d(),
            a(),
            void 0 === n && c > e
                ? d()
                : !0 !== t &&
                  (r = setTimeout(
                      n
                          ? function () {
                                r = void 0;
                            }
                          : d,
                      void 0 === n ? e - c : e,
                  )));
    }
    return (
        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
        (i.cancel = function () {
            (a(), (o = !0));
        }),
        i
    );
}
function useEmitter$1() {
    return reactExports.useMemo(() => {
        const e = {},
            t = (t) => (e[t] || (e[t] = new Set()), e[t]),
            u = (e, u) => {
                t(e).delete(u);
            };
        return {
            on: (e, n) => (t(e).add(n), () => u(e, n)),
            off: u,
            trigger: (e, ...u) => {
                for (const n of t(e).values()) n(...u);
            },
        };
    }, []);
}
const STATIC_DEPS$1 = [];
function useEvent$1(e) {
    const t = reactExports.useRef(e);
    return (
        reactExports.useLayoutEffect(() => {
            t.current = e;
        }),
        reactExports.useCallback((...e) => (0, t.current)(...e), STATIC_DEPS$1)
    );
}
function useMount$1(e) {
    reactExports.useEffect(e, []);
}
function useUnmount$1(e) {
    reactExports.useEffect(() => e, []);
}
const createApi = () => {
        const e = new Map();
        function t(t) {
            const u = e.get(t);
            if (u) return u;
            const n = new Stack();
            return (e.set(t, n), n);
        }
        function u(t, u) {
            const n = e.get(t);
            return !!n && n.remove(u);
        }
        return {
            handlers: e,
            obtain: t,
            register: function (e, n) {
                if (e === keyStringCodes.NONE) return constFalse;
                const r = t(e);
                return (r.includes(n) || r.push(n), () => u(e, n));
            },
            unregister: u,
            takeCurrent: function (t) {
                const u = e.get(t);
                if (!u) return;
                const n = u.peek();
                return n || void 0;
            },
        };
    },
    Context$3 = reactExports.createContext(void 0);
function useApi$1() {
    const e = reactExports.useContext(Context$3);
    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
    return e;
}
function useHandleKey(e, t, u, n = !1) {
    const r = normalizeKeyCode(e),
        o = useEvent$1((e) => {
            isEventHandled$1() || (u(e), setEventHandled$1(), n && e.stopPropagation());
        }),
        s = useApi$1(),
        a = reactExports.useMemo(() => s[t].register(r, o), [s, t, r, o]);
    reactExports.useEffect(() => a, [a]);
}
function useHandleKeydown(e, t, u = !1) {
    return useHandleKey(normalizeKeyCode(e), 'keydown', t, u);
}
function Provider(e) {
    const t = reactExports.useMemo(createApi, []),
        u = reactExports.useMemo(createApi, []);
    reactExports.useEffect(() => {
        function e(e) {
            var u;
            null == (u = t.takeCurrent(e.code)) || u(e);
        }
        function n(e) {
            var t;
            null == (t = u.takeCurrent(e.code)) || t(e);
        }
        return (
            window.addEventListener('keydown', e),
            window.addEventListener('keyup', n),
            () => {
                (window.removeEventListener('keydown', e), window.removeEventListener('keyup', n));
            }
        );
    }, [t, u]);
    const n = reactExports.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: u.register, unregister: u.unregister },
        }),
        [t, u],
    );
    return jsxRuntimeExports.jsx(Context$3.Provider, { value: n, children: e.children });
}
const defaultCallback = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function useKeydownListener(e = keyStringCodes.ESCAPE, t = defaultCallback, u = !1) {
    const n = normalizeKeyCode(e);
    reactExports.useEffect(() => {
        if (n !== keyStringCodes.NONE)
            return (window.addEventListener('keydown', e, u), () => window.removeEventListener('keydown', e, u));
        function e(e) {
            e.code !== n || isEventHandled$1() || (t(e), setEventHandled$1(), u && e.stopPropagation());
        }
    }, [t, n, u]);
}
function useCallbackOnEsc(e) {
    return useHandleKeydown(keyStringCodes.ESCAPE, e);
}
const useLoop = (e) => {
    const t = reactExports.useRef(0);
    reactExports.useEffect(() => () => cancelAnimationFrame(t.current), []);
    return [
        () => {
            const u = () => {
                e() && (t.current = requestAnimationFrame(u));
            };
            u();
        },
        () => cancelAnimationFrame(t.current),
    ];
};
function useRepeatCallback$1(e, t, u = []) {
    const n = reactExports.useRef(0),
        r = reactExports.useCallback(() => window.clearInterval(n.current), u || []);
    reactExports.useEffect(() => r, [r]);
    const o = (u ?? []).concat([t]);
    return [
        reactExports.useCallback((u) => {
            ((n.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
        }, o),
        r,
    ];
}
const useRefResizeObserver = (e, t, u = !0) => {
        const n = useEvent$1((e) => {
            const u = e[0];
            u && t(u);
        });
        reactExports.useEffect(() => {
            if (!e.current || !u) return;
            const t = new ResizeObserver((e) => n(e));
            return (
                t.observe(e.current),
                () => {
                    t.disconnect();
                }
            );
        }, [n, u, e]);
    },
    NO_RAF_ID$1 = 0;
function useSkipFrame$1() {
    const e = reactExports.useRef(NO_RAF_ID$1);
    return (
        useUnmount$1(() => {
            window.cancelAnimationFrame(e.current);
        }),
        reactExports.useMemo(
            () => ({
                run: (t) => {
                    (window.cancelAnimationFrame(e.current),
                        (e.current = window.requestAnimationFrame(() => {
                            e.current = window.requestAnimationFrame(() => {
                                ((e.current = NO_RAF_ID$1), t());
                            });
                        })));
                },
                clear: () => {
                    (window.cancelAnimationFrame(e.current), (e.current = NO_RAF_ID$1));
                },
                get isRunning() {
                    return e.current !== NO_RAF_ID$1;
                },
            }),
            [],
        )
    );
}
function useThrottle$1(e, t, u) {
    const n = reactExports.useMemo(() => throttle$1(u, e), t);
    return (reactExports.useEffect(() => n.cancel, [n]), n);
}
const NO_TIMEOUT_ID = 0;
function useTimeout() {
    const e = reactExports.useRef(NO_TIMEOUT_ID);
    return (
        useUnmount$1(() => {
            window.clearTimeout(e.current);
        }),
        reactExports.useMemo(
            () => ({
                run: (t, u) => {
                    (window.clearTimeout(e.current),
                        (e.current = window.setTimeout(() => {
                            ((e.current = NO_TIMEOUT_ID), t());
                        }, u)));
                },
                clear: () => {
                    (window.clearTimeout(e.current), (e.current = NO_TIMEOUT_ID));
                },
                get isRunning() {
                    return e.current !== NO_TIMEOUT_ID;
                },
            }),
            [],
        )
    );
}
const displayedTooltips = new WeakMap(),
    DEFAULT_RES_ID = 0,
    statuses = { await: 'await', idle: 'idle', display: 'display' };
function useTooltip({
    resId: e = DEFAULT_RES_ID,
    contentId: t,
    decoratorId: u,
    disabled: n,
    args: r,
    showDelay: o = 400,
}) {
    const s = reactExports.useRef({ status: statuses.idle, resId: e, timeoutId: 0 }),
        [a, i] = reactExports.useMemo(() => {
            let a = null;
            function i() {
                n ||
                    ((s.current.status = statuses.await),
                    window.clearTimeout(s.current.timeoutId),
                    (s.current.timeoutId = window.setTimeout(l, o)));
            }
            function l() {
                ((s.current.status = statuses.display),
                    sendEvent$1.tooltip.open(e, t, u, r),
                    a && displayedTooltips.set(a, d));
            }
            function c() {
                if (
                    (window.clearTimeout(s.current.timeoutId),
                    s.current.status === statuses.display && sendEvent$1.tooltip.hide(e, t, u),
                    (s.current.status = statuses.idle),
                    a)
                ) {
                    displayedTooltips.delete(a);
                    let e = a.parentElement;
                    for (; e && !displayedTooltips.has(e); ) e = e.parentElement;
                    if (e) {
                        displayedTooltips.get(e).show();
                    }
                    a = null;
                }
            }
            const d = {
                hide: c,
                show: l,
                rerun: function () {
                    s.current.status !== statuses.idle && (n ? d.hide() : i());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((a = null == e ? void 0 : e.currentTarget), i());
                    },
                    onMouseLeave: n ? noop$2 : c,
                    onClick: n ? noop$2 : c,
                },
            ];
        }, [r, t, u, n, e, o]);
    return (
        reactExports.useEffect(() => {
            a.rerun();
        }, [a]),
        useUnmount$1(useEvent$1(a.hide)),
        i
    );
}
function useSimpleTooltip({ alert: e, body: t, header: u, note: n, hasHtmlContent: r, disabled: o }) {
    const s = resources.resolve('views');
    return useTooltip({
        disabled: o,
        contentId: s.read((e) =>
            r
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: s.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: reactExports.useMemo(() => ({ body: t, header: u, note: n, alert: e }), [e, t, u, n]),
    });
}
function useBackdropTooltip(e) {
    return useTooltip({
        ...e,
        contentId: resources
            .resolve('views')
            .read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
    });
}
const NO_ARGS = [];
function useSpecialTooltip(e, t = NO_ARGS, u) {
    return useTooltip({
        ...u,
        disabled: 'string' != typeof e || (null == u ? void 0 : u.disabled),
        contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
        args: reactExports.useMemo(
            () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == u ? void 0 : u.args) }),
            [t, e, null == u ? void 0 : u.args],
        ),
    });
}
function useWulfTooltip(e, t, u) {
    return useTooltip({
        ...u,
        disabled: 'string' != typeof e || (null == u ? void 0 : u.disabled),
        contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Wulf('resId')),
        args: reactExports.useMemo(
            () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == u ? void 0 : u.args) }),
            [t, e, null == u ? void 0 : u.args],
        ),
    });
}
function useParamTooltip(e, t, u) {
    return useTooltip({
        ...u,
        disabled: 'string' != typeof e || (null == u ? void 0 : u.disabled),
        contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
        args: reactExports.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
    });
}
const soundConfig = {
    click: createSoundPlay('play'),
    'hot-key': createSoundPlay('play'),
    'mouse-enter': createSoundPlay('highlight'),
    increaseAmount: createSoundPlay('cons_ammo_single_plus'),
    decreaseAmount: createSoundPlay('cons_ammo_single_minus'),
    increaseAmountRoll: createSoundPlay('cons_ammo_roll_plus'),
    decreaseAmountRoll: createSoundPlay('cons_ammo_roll_minus'),
    close: createSoundPlay('cancelcloseno'),
    'show-context-menu': createSoundPlay('tabb'),
};
function createSoundPlay(e) {
    return () => {
        play$1.sound(e);
    };
}
function logBySeverity(e, t) {
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
}
const Context$2 = reactExports.createContext(null);
function SoundsProvider({ severity: e = 'warn', overrides: t, silent: u = !1, children: n }) {
    const r = reactExports.useMemo(() => ({ ...soundConfig, ...t }), [t]),
        o = reactExports.useMemo(
            () => ({
                play: function (t, n) {
                    if (u) return;
                    const o = r[t];
                    o ? o(n) : logBySeverity(`There is no sound for event: ${t}`, e);
                },
                settings: { plays: r, severity: e, silent: u },
            }),
            [r, e, u],
        );
    return jsxRuntimeExports.jsx(Context$2.Provider, { value: o, children: n });
}
function useSounds() {
    const e = reactExports.useContext(Context$2);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const MS_IN_SECOND = 1e3,
    useCountdown = (e = 0, t, u = 0, n = noop$2) => {
        const [r, o] = reactExports.useState(e);
        return (
            reactExports.useEffect(() => {
                if (e > 0) {
                    o(e);
                    const r = Date.now(),
                        s = setInterval(() => {
                            const t = e - Math.floor((Date.now() - r) / MS_IN_SECOND);
                            null !== u && t <= u ? (o(u), n && n(), clearInterval(s)) : o(t);
                        }, t * MS_IN_SECOND);
                    return () => {
                        clearInterval(s);
                    };
                }
            }, [e, t, u, n]),
            r
        );
    },
    nonConvertingTypes = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    primitives$1 = new Set(['number', 'string', 'boolean', 'bigint']),
    bindingsForbidden = new Set(['Dict']);
function cloneModel(e, { shallow: t = !0, depth: u = 0, maxDepth: n = 32 } = {}) {
    var r, o;
    const s = e,
        a = typeof e;
    if (u > n) throw new Error(`Too deeply nested to copy. Max is ${n}.`);
    if (nonConvertingTypes.has(a)) return s;
    if (null === s) return s;
    const i = { depth: u + 1, maxDepth: n };
    if (Array.isArray(s)) return s.map((e) => cloneModel(e, i));
    if ('object' === a) {
        const n = (null == (r = s.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, i));
        if ('CoherentArrayProxy' === n) return e.map((e) => cloneModel(e.value, i));
        if ('Dict' === n) return;
        if ('UNKNOWN' === n) return;
        if (n.includes(':ViewModel:') || 'Object' === n) {
            if (t && 0 === u) {
                const e = {};
                for (const t in s) {
                    const u = s[t];
                    primitives$1.has(typeof u) && (e[t] = u);
                }
                return e;
            }
            {
                const e = {};
                for (const t in s) {
                    const u = s[t],
                        n = (null == (o = null == s ? void 0 : s.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(n) || (e[t] = cloneModel(u, i));
                }
                return e;
            }
        }
        const a = {};
        for (const e of Object.keys(s)) a[e] = cloneModel(s[e], i);
        return a;
    }
    return (console.error('Incorrect value to clone model', s), s);
}
const MOBX_OPTIONS = { deep: !1, equals: constFalse },
    DEFAULT_OPTIONS = { cloneItem: !0 },
    CLONE_OPTIONS = { shallow: !1 };
class DLDict {
    constructor(e, t = DEFAULT_OPTIONS) {
        (__publicField(this, '_data'),
            __publicField(this, '_keys'),
            __publicField(
                this,
                'set',
                action((e) => {
                    this._data.set(e);
                }),
            ),
            (this.options = t));
        const u = {},
            n = e.keys();
        for (let r = 0; r < n.length; r++) {
            const t = n[r];
            u[t] = observable.box(this.takeItem(e, t), MOBX_OPTIONS);
        }
        ((this._keys = observable.set(new Set(n))), (this._data = observable.box(u, MOBX_OPTIONS)));
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
        const u = this._data.get();
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                o = this.takeItem(e, r);
            r in u
                ? null === o
                    ? (delete u[r], this._keys.delete(r), this.set(u))
                    : u[r].set(o)
                : null !== o && ((u[r] = observable.box(o, MOBX_OPTIONS)), this._keys.add(r), this.set(u));
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
        for (const u of this.keys.values()) t.push(e(u));
        return t;
    }
    map(e) {
        const t = [],
            u = this._data.get();
        for (const n of this.keys.values()) t.push(e(u[n].get(), n));
        return t;
    }
    reduce(e, t) {
        let u = t;
        const n = this._data.get();
        for (const r of this.keys.values()) u = e(u, n[r].get(), r);
        return u;
    }
    takeItem(e, t) {
        const u = e.get(t);
        return this.options.cloneItem ? cloneModel(u, CLONE_OPTIONS) : u;
    }
    untrackedData() {
        return untracked(() => this._data.get());
    }
}
const mockContext = reactExports.createContext({ mode: 'real' }),
    useMockContext = () => reactExports.useContext(mockContext),
    DEFAULT_BOX_CONFIG = { equals: constFalse, deep: !1 };
function createObservableModel(e, t, u) {
    const n = [];
    e.events.subscribersNotified.on(
        action(() => {
            for (const e of n) e();
            n.splice(0, n.length);
        }),
    );
    const r = (r, o, s = DEFAULT_BOX_CONFIG) => {
            const a = observable.box(r(u(o)), s);
            return ('real' === t && e.subscribe((e) => n.push(() => a.set(r(e))), o), a);
        },
        o = (r, o) => {
            const s = new DLDict(u(r), o);
            return ('real' === t && e.subscribe((e, t) => n.push(() => s.update(e, t)), r), s);
        },
        s = (r, o) => {
            const s = observable.box(u(r) ?? o, DEFAULT_BOX_CONFIG);
            return ('real' === t && e.subscribe((e) => n.push(() => s.set(e)), r), s);
        };
    return {
        dict: o,
        dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => r(cloneModel, e),
        array: s,
        object: s,
        transform: r,
        primitives: (r, o) => {
            const s = u(o);
            if (Array.isArray(r)) {
                const u = r.reduce((e, t) => ((e[t] = observable.box(s[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            n.push(() =>
                                r.forEach((t) => {
                                    u[t].set(e[t]);
                                }),
                            );
                        }, o),
                    u
                );
            }
            {
                const u = r,
                    a = Object.entries(u),
                    i = a.reduce((e, [t, u]) => ((e[u] = observable.box(s[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            n.push(() =>
                                a.forEach(([t, u]) => {
                                    i[u].set(e[t]);
                                }),
                            );
                        }, o),
                    i
                );
            }
        },
    };
}
const initializeModelWithContext =
        (e = 'DataLayerProvider') =>
        (t, u, n) => {
            const r = reactExports.createContext(null);
            function o(o) {
                var s;
                const { mode: a, options: i, children: l, mocks: c } = o,
                    d = useMockContext(),
                    E = a ?? d.mode,
                    p = c ?? d.mocks,
                    m = reactExports.useRef([]),
                    A = null == (s = null == n ? void 0 : n.useRequires) ? void 0 : s.call(n),
                    f = useEvent$1((r, s, a) => {
                        var i;
                        const l = 'real' !== r && a ? createMockInstance(a.getter, s) : create(s, { name: e }),
                            c = (e) => ('mocks' === r ? (null == a ? void 0 : a.getter(e, s)) : l.readByPath(e)),
                            d = (e) => m.current.push(e),
                            E = 'initial' in o && {
                                initial: null == (i = null == n ? void 0 : n.initial) ? void 0 : i.call(n, o.initial),
                            },
                            p = t({
                                ...E,
                                mode: r,
                                readByPath: c,
                                requires: A,
                                externalModel: l,
                                observableModel: createObservableModel(l, r, c),
                                cleanup: d,
                            }),
                            f = { ...E, mode: r, model: p, externalModel: l, cleanup: d, requires: A },
                            F = 'mocks' === r && (null == a ? void 0 : a.controls) ? a.controls(f) : {};
                        return {
                            model: p,
                            controls: { ...(null == u ? void 0 : u(f)), ...F },
                            externalModel: l,
                            mode: r,
                        };
                    }),
                    F = reactExports.useRef(!1),
                    [h, g] = reactExports.useState(E);
                reactExports.useEffect(() => {
                    g(E);
                }, [E]);
                const [_, D] = reactExports.useState(() => f(h, i, p));
                return (
                    reactExports.useEffect(() => {
                        F.current ? D(f(h, i, p)) : (F.current = !0);
                    }, [
                        f,
                        p,
                        h,
                        null == i ? void 0 : i.context,
                        null == i ? void 0 : i.initializer,
                        null == i ? void 0 : i.getRoot,
                        null == i ? void 0 : i.rootId,
                    ]),
                    reactExports.useEffect(
                        () => () => {
                            (_.externalModel.dispose(), m.current.forEach((e) => e()));
                        },
                        [_],
                    ),
                    jsxRuntimeExports.jsx(r.Provider, { value: _, children: l })
                );
            }
            return (
                (o.displayName = e),
                [
                    o,
                    function () {
                        const e = reactExports.useContext(r);
                        if (!e) throw new Error(`hook useModel must be used within a ${o.displayName}.`);
                        return e;
                    },
                    { Context: r },
                ]
            );
        },
    assignRef = (e, t) => {
        e && ('function' == typeof e ? e(t) : (e.current = t));
    },
    assignRefs = (e) => (t) => {
        e.forEach((e) => assignRef(e, t));
    };
function injectShowModel() {
    const e = (t = window.model, { depth: u = 16, convertArrays: n = !0 } = {}) => {
        var r;
        if (u < 0)
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
                const o = { depth: u - 1, convertArrays: n },
                    s = (null == (r = t.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
                switch (!0) {
                    case s.includes('CoherentArrayProxy'):
                        return [...t.values()].map((t) => e(o.convertArrays ? t.value : t, o));
                    case 'Dict' === s:
                        return [...t.entries()].reduce((t, [u, n]) => ((t[u] = e(n, o)), t), { $$type: 'Dict' });
                    case 'UNKNOWN' === s:
                        return 'UNKNOWN_TYPE';
                    case s.includes('ViewModel'):
                    default: {
                        const u = {};
                        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = e(t[n], o));
                        return u;
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
            for (const u of window.subViews.ids()) {
                const n = window.subViews.get(u);
                t[u] = {
                    id: u,
                    uid: n.uid,
                    path: n.path,
                    get model() {
                        return e(n.model);
                    },
                };
            }
            return t;
        },
        showModel: e,
        showModelById: (t) => e(window.subViews.get(t).model),
    };
    window._debugs = t;
}
async function runView(
    e,
    { root: t = document.getElementById('root'), withMedia: u = !0, fullScreen: n = !1, immediateLayout: r = !0 } = {},
) {
    var o;
    injectShowModel();
    const s = u ? MediaWrapper : React.Fragment,
        a = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (r && engine.enableImmediateLayout(!0),
        await a,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client$1
            .createRoot(t)
            .render(jsxRuntimeExports.jsx(s, { children: jsxRuntimeExports.jsx(Provider, { children: e }) })),
        n && (initExternalPaddings$1(t), enableFullScreenModeSupported$1()));
}
reactExports.forwardRef(function (e, t) {
    const u = reactExports.useRef(null);
    return (
        reactExports.useEffect(() => {
            const e = u.current;
            if (null !== e)
                return events$2.onHitTest((t) => {
                    const u = e.getBoundingClientRect();
                    return u.left <= t.x && t.x <= u.right && u.top <= t.y && t.y <= u.bottom;
                });
        }, []),
        jsxRuntimeExports.jsx('div', { ...e, ref: assignRefs([t, u]) })
    );
});
const NodeTypes = { Text: 1, Tag: 2, Var: 3 };
function parseArguments(e) {
    const t = [];
    let u = '',
        n = !1,
        r = !1,
        o = '';
    for (let s = 0; s < e.length; s++) {
        const a = e[s];
        ("'" !== a && '"' !== a) || r || n
            ? a === o && r
                ? ((r = !1), (u += a))
                : '(' !== a || r
                  ? ')' === a && n && !r
                      ? ((n = !1), (u += a))
                      : ' ' !== a || n || r
                        ? (u += a)
                        : u && (t.push(u), (u = ''))
                  : ((n = !0), (u += a))
            : ((r = !0), (o = a), (u += a));
    }
    return (u && t.push(u), t);
}
function parse(e, t) {
    const u = [],
        n = [];
    let r = '',
        o = !1,
        s = '',
        a = 0;
    for (let i = 0; i < e.length; i++) {
        const l = e[i];
        if (l === t.start[0] && e.slice(i, i + t.start.length) === t.start) {
            if (r) {
                if (n.length > 0) {
                    n[n.length - 1].node.children.push({ type: NodeTypes.Text, value: r });
                } else u.push({ type: NodeTypes.Text, value: r });
                r = '';
            }
            ((o = !0), (i += t.start.length - 1));
        } else if (l === t.end[0] && e.slice(i, i + t.end.length) === t.end) {
            ((o = !1), (i += t.end.length - 1));
            const e = s.trim();
            if (e.startsWith('@')) {
                const t = e.slice(1).trim(),
                    r = { type: NodeTypes.Tag, attrs: t.split('|'), instanceId: ++a, children: [] };
                if (n.length > 0) {
                    n[n.length - 1].node.children.push(r);
                } else u.push(r);
                n.push({ node: r, startIndex: u.length });
            } else if ('/' === e) n.length > 0 && n.pop();
            else {
                const t = { type: NodeTypes.Var, instanceId: ++a, name: e };
                if (n.length > 0) {
                    n[n.length - 1].node.children.push(t);
                } else u.push(t);
            }
            s = '';
        } else o ? (s += l) : (r += l);
    }
    if (r)
        if (n.length) {
            n[n.length - 1].node.children.push({ type: NodeTypes.Text, value: r });
        } else u.push({ type: NodeTypes.Text, value: r });
    return u;
}
const COLORS =
        'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
    base$b = 'FormatText_db904f12',
    base__fullSize = 'FormatText_base__fullSize_a514958e',
    nowrap = 'FormatText_nowrap_ff69eca3',
    styles$d = { COLORS: COLORS, base: base$b, base__fullSize: base__fullSize, nowrap: nowrap },
    legacyColors = new Set((null == (_a = styles$d.COLORS) ? void 0 : _a.split(', ')) ?? []);
let keyId = 0;
function takeKey() {
    return ++keyId;
}
const startsWithPunctuationRe =
    /^[*"'ー.,、。，:;：；！？》」•%)(!?\u0EAF\u0E3B\u0E3F\u0E31\u0E32\u0E33\u0E47-\u0E4F\u0E5A-\u0E5F\u0E00-\u0E7F\u3000-\u303F\uFF00-\uFFEF\]]/u;
function splitString(e) {
    const t = resources.resolve('langCode');
    return addSpaceAndMap(
        splitLocale(e, t),
        t,
        (e, t) => e && jsxRuntimeExports.jsx('span', { children: e }, `${e}${t}`),
    );
}
function splitArray(e) {
    const t = [];
    for (let u = 0; u < e.length; u++) {
        const n = e[u],
            r = e[u + 1];
        if ('string' != typeof r || !startsWithPunctuationRe.test(r)) {
            t.push(split(n));
            continue;
        }
        const o = splitString(r.slice(1));
        (t.push(
            jsxRuntimeExports.jsxs(
                reactExports.Fragment,
                {
                    children: [
                        jsxRuntimeExports.jsxs('span', { className: styles$d.nowrap, children: [split(n), r[0]] }),
                        o,
                    ],
                },
                takeKey(),
            ),
        ),
            (u += 1));
    }
    return t;
}
function split(e) {
    return Array.isArray(e)
        ? splitArray(e)
        : 'string' == typeof e
          ? jsxRuntimeExports.jsx(reactExports.Fragment, { children: splitString(e) }, takeKey())
          : e;
}
function style(e, ...t) {
    return jsxRuntimeExports.jsx(
        'span',
        {
            style: t.reduce((u, n) => {
                if (Array.isArray(n)) {
                    const [e, t] = n;
                    return ((u[e] = t), u);
                }
                return (console.warn(`Invalid argument ${n} in ${e}: ${t}`), u);
            }, {}),
            children: e,
        },
        takeKey(),
    );
}
function className(e, ...t) {
    return jsxRuntimeExports.jsx(
        'span',
        { className: t.filter((e) => 'string' == typeof e && e.length > 0).join(' '), children: e },
        takeKey(),
    );
}
const color = (e, t) => ['color', t],
    fontSize = (e, t) => ['fontSize', t],
    fontWeight = (e, t) => ['fontWeight', t],
    textDecoration = (e, t) => ['textDecoration', t],
    bold = (e) => ['fontWeight', 'bold'];
function colorLegacy(e, t) {
    const u = takeKey();
    return legacyColors.has(String(t))
        ? jsxRuntimeExports.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, u)
        : jsxRuntimeExports.jsx('span', { style: { color: `#${t}` }, children: e }, u);
}
const defaultFormatters = {
    class: className,
    colorLegacy: colorLegacy,
    bold: bold,
    split: split,
    style: style,
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textDecoration: textDecoration,
};
function applyFunction(e, t, u, n) {
    const r = u.map((t) => {
            if ('string' != typeof t) return t;
            const u = t.trim();
            if (u.startsWith('(') && u.endsWith(')')) {
                const [t, ...r] = u.slice(1, -1).split(' ');
                return t ? applyFunction(e, t, r, n) : e;
            }
            return u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1) : u;
        }),
        o = n[t];
    return o ? o(e, ...r) : (console.error(`Function ${t} is not registered`), e);
}
function applyFunctions(e, t, u) {
    return e.reduce((e, t) => {
        const [n, ...r] = parseArguments(t.trim());
        return n ? applyFunction(e, n, r, u) : e;
    }, t);
}
function isEnd(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function resolveAttrParams(e, t) {
    for (let u = 0; u < e.length; u++) {
        if ('$' === e[u]) {
            let n = u + 1;
            for (; n < e.length && !isEnd(e[n]); ) n++;
            const r = e.slice(u + 1, n),
                o = t[r];
            if (o) return resolveAttrParams(e.replace(`$${r}`, String(o)), t);
        }
    }
    return e;
}
function resolveAttrsParams(e, t) {
    const u = [];
    for (let n = 0; n < e.length; n++) u[n] = resolveAttrParams(e[n], t);
    return u;
}
const primitives = ['number', 'string', 'undefined'];
function render(e, t, u = {}, n = !0) {
    n && (keyId = 0);
    const r = [];
    function o(e) {
        if (primitives.includes(typeof e)) {
            const t = r.at(-1);
            if ('string' == typeof t) return void (r[r.length - 1] = t + e);
        }
        r.push(e);
    }
    for (const s of e)
        if (s.type === NodeTypes.Text) o(s.value);
        else if (s.type === NodeTypes.Var)
            null === u[s.name] || primitives.includes(typeof u[s.name])
                ? o(u[s.name] ?? `{{${s.name}}}`)
                : r.push(
                      jsxRuntimeExports.jsx(
                          reactExports.Fragment,
                          { children: u[s.name] },
                          `var-${s.name}-${s.instanceId}`,
                      ),
                  );
        else if (s.type === NodeTypes.Tag) {
            const e = render(s.children, t, u, !1),
                n = applyFunctions(resolveAttrsParams(s.attrs, u), e, t);
            r.push(n);
        }
    return r;
}
function upgradeColorTag(e) {
    return e
        .replace(/%\(([a-zA-Z0-9]+)_(Open|Start)\)s(.+?)%\(\1_(Close|End)\)s/, "{{@ colorLegacy '$1'}}$3{{/}}")
        .replace(/\{([a-zA-Z0-9]+)_(Open|Start)\}(.+?)\{\1_(Close|End)\}/gi, "{{@ colorLegacy '$1'}}$3{{/}}");
}
function upgradeVariables(e) {
    return e
        .replace(/%\((\w+|\d)\)(?:s|d)?/gi, '{{$1}}')
        .replace(new RegExp('(?<!\\{)\\{(\\w+|\\d)\\}', 'g'), '{{$1}}');
}
function upgradeSymbols(e) {
    return e.replaceAll('&nbsp;', ' ').replaceAll('&zwnbsp;', '\ufeff');
}
function upgradeLegacy(e) {
    return pipe(e, upgradeSymbols, upgradeColorTag, upgradeVariables);
}
const defaultBrackets = { start: '{{', end: '}}' },
    FormatText$1 = reactExports.memo(function (e) {
        const {
                brackets: t = defaultBrackets,
                text: u,
                params: n,
                upgradeLegacy: r,
                fullSize: o,
                inline: s,
                formatters: a,
                split: i,
                ...l
            } = e,
            c = reactExports.useMemo(
                () => (e.upgradeLegacy ? upgradeLegacy(e.text) : e.text),
                [e.text, e.upgradeLegacy],
            ),
            d = reactExports.useMemo(
                () => (e.formatters ? { ...defaultFormatters, ...e.formatters } : defaultFormatters),
                [e.formatters],
            ),
            E = reactExports.useMemo(() => parse(i ? `{{@ split}}${c}{{/}}` : c, t), [t, c, i]),
            p = reactExports.useMemo(() => render(E, d, e.params), [E, d, e.params]),
            m = cx(styles$d.base, o && styles$d.base__fullSize, l.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              jsxRuntimeExports.jsx('p', {
                  ...l,
                  className: m,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: p,
              }))
            : jsxRuntimeExports.jsx('span', { ...l, className: m, children: p });
    });
function playSound$1(e) {
    engine.call('PlaySound', e).catch((t) => {
        console.error('[lib/sounds.js] playSound(', e, '): ', t);
    });
}
var ButtonType = ((e) => (
        (e.main = 'main'),
        (e.primary = 'primary'),
        (e.primaryGreen = 'primaryGreen'),
        (e.primaryRed = 'primaryRed'),
        (e.secondary = 'secondary'),
        (e.ghost = 'ghost'),
        e
    ))(ButtonType || {}),
    ButtonSize = ((e) => (
        (e.extraSmall = 'extraSmall'),
        (e.small = 'small'),
        (e.medium = 'medium'),
        (e.large = 'large'),
        e
    ))(ButtonSize || {});
const root$5 = 'Cbutton_root_180a9717',
    base$a = 'Cbutton_24fc9a0c',
    base__main$1 = 'Cbutton_base__main_2f199578',
    base__primary$1 = 'Cbutton_base__primary_9da8a692',
    base__primaryGreen = 'Cbutton_base__primaryGreen_74301f4e',
    base__primaryRed = 'Cbutton_base__primaryRed_d184ac',
    base__secondary = 'Cbutton_base__secondary_22ff48c2',
    base__ghost = 'Cbutton_base__ghost_fd3acf91',
    base__extraSmall = 'Cbutton_base__extraSmall_f64ebb9e',
    base__small$1 = 'Cbutton_base__small_a71bc2a9',
    base__medium$1 = 'Cbutton_base__medium_d82a1b14',
    base__large$1 = 'Cbutton_base__large_f02aee17',
    base__disabled$2 = 'Cbutton_base__disabled_96f239bb',
    back = 'Cbutton_back_ffaa618f',
    texture$1 = 'Cbutton_texture_f462b307',
    state = 'Cbutton_state_bf8d0bab',
    base__focus = 'Cbutton_base__focus_180a9717',
    stateHighlightHover = 'Cbutton_stateHighlightHover_7e2b860e',
    stateHighlightActive = 'Cbutton_stateHighlightActive_f3d8fd6a',
    stateDisabled = 'Cbutton_stateDisabled_7b91392f',
    base__highlightActive = 'Cbutton_base__highlightActive_180a9717',
    content$3 = 'Cbutton_content_faaa9067',
    fadeIn$5 = 'Cbutton_fadeIn_180a9717',
    styles$c = {
        root: root$5,
        base: base$a,
        base__main: base__main$1,
        base__primary: base__primary$1,
        base__primaryGreen: base__primaryGreen,
        base__primaryRed: base__primaryRed,
        base__secondary: base__secondary,
        base__ghost: base__ghost,
        base__extraSmall: base__extraSmall,
        base__small: base__small$1,
        base__medium: base__medium$1,
        base__large: base__large$1,
        base__disabled: base__disabled$2,
        back: back,
        texture: texture$1,
        state: state,
        base__focus: base__focus,
        stateHighlightHover: stateHighlightHover,
        stateHighlightActive: stateHighlightActive,
        stateDisabled: stateDisabled,
        base__highlightActive: base__highlightActive,
        content: content$3,
        fadeIn: fadeIn$5,
    },
    Button = ({
        children: e,
        size: t,
        disabled: u,
        mixClass: n,
        onMouseEnter: r,
        onMouseMove: o,
        onMouseDown: s,
        onMouseUp: a,
        onMouseLeave: i,
        onClick: l,
        isFocused: c = !1,
        type: d = ButtonType.primary,
        soundHover: E = 'highlight',
        soundClick: p = 'play',
    }) => {
        const m = reactExports.useRef(null),
            [A, f] = reactExports.useState(c),
            [F, h] = reactExports.useState(!1);
        return (
            reactExports.useEffect(() => {
                function e(e) {
                    A && null !== m.current && !m.current.contains(e.target) && f(!1);
                }
                return (
                    document.addEventListener('mousedown', e),
                    () => {
                        document.removeEventListener('mousedown', e);
                    }
                );
            }, [A]),
            reactExports.useEffect(() => {
                f(c);
            }, [c]),
            jsxRuntimeExports.jsxs('div', {
                ref: m,
                className: cx(
                    styles$c.base,
                    styles$c[`base__${d}`],
                    u && styles$c.base__disabled,
                    t && styles$c[`base__${t}`],
                    A && styles$c.base__focus,
                    F && styles$c.base__highlightActive,
                    n,
                ),
                onMouseEnter: function (e) {
                    u || (null !== E && playSound$1(E), r && r(e));
                },
                onMouseMove: function (e) {
                    o && o(e);
                },
                onMouseUp: function (e) {
                    u || (a && a(e), h(!1));
                },
                onMouseDown: function (e) {
                    u ||
                        (null !== p && playSound$1(p),
                        s && s(e),
                        c && (u || (m.current && (m.current.focus(), f(!0)))),
                        h(!0));
                },
                onMouseLeave: function (e) {
                    u || (i && i(e), h(!1));
                },
                onClick: function (e) {
                    u || (l && l(e));
                },
                children: [
                    d !== ButtonType.ghost &&
                        jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                                jsxRuntimeExports.jsx('div', { className: styles$c.back }),
                                jsxRuntimeExports.jsx('span', { className: styles$c.texture }),
                            ],
                        }),
                    jsxRuntimeExports.jsxs('span', {
                        className: cx(styles$c.state, styles$c.state__default),
                        children: [
                            jsxRuntimeExports.jsx('span', { className: styles$c.stateDisabled }),
                            jsxRuntimeExports.jsx('span', { className: styles$c.stateHighlightHover }),
                            jsxRuntimeExports.jsx('span', { className: styles$c.stateHighlightActive }),
                        ],
                    }),
                    jsxRuntimeExports.jsx('span', {
                        className: styles$c.content,
                        lang: R.strings.settings.LANGUAGE_CODE(),
                        children: e,
                    }),
                ],
            })
        );
    },
    CButton = Button;
function makeEngineEvent(e) {
    return (t) => (
        engine.on(e, t),
        () => {
            engine.off(e, t);
        }
    );
}
function setTrackMouseOutside(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const onResize = makeEngineEvent('clientResized'),
    onScaleUpdated = makeEngineEvent('self.onScaleUpdated'),
    on = (e, t) => engine.on(e, t),
    off = (e, t) => engine.off(e, t),
    internalMouse = {
        down: makeEngineEvent('mousedown'),
        up: makeEngineEvent('mouseup'),
        move: makeEngineEvent('mousemove'),
    };
function initMouseEvents() {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function t() {
        e.enabled && setTrackMouseOutside(!1);
    }
    function u() {
        e.enabled && setTrackMouseOutside(!0);
    }
    function n() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', u))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', u))
            : setTrackMouseOutside(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, u) => (
                (t[u] = (function (t) {
                    return (u) => {
                        e.listeners += 1;
                        let r = !0;
                        const o = `mouse${t}`,
                            s = internalMouse[t]((e) => u([e, 'outside']));
                        function a(e) {
                            u([e, 'inside']);
                        }
                        return (
                            window.addEventListener(o, a),
                            n(),
                            () => {
                                r && (s(), window.removeEventListener(o, a), (e.listeners -= 1), n(), (r = !1));
                            }
                        );
                    };
                })(u)),
                t
            ),
            {},
        ),
        disable() {
            ((e.enabled = !1), n());
        },
        enable() {
            ((e.enabled = !0), n());
        },
        enableOutside() {
            e.enabled && setTrackMouseOutside(!0);
        },
        disableOutside() {
            e.enabled && setTrackMouseOutside(!1);
        },
    };
}
const mouse = initMouseEvents(),
    events$1 = Object.freeze(
        Object.defineProperty(
            { __proto__: null, mouse: mouse, off: off, on: on, onResize: onResize, onScaleUpdated: onScaleUpdated },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    );
function playSound(e) {
    engine.call('PlaySound', e).catch((t) => {
        console.error(`playSound('${e}'): `, t);
    });
}
function setRTPC(e, t) {
    engine.call('SetRTPCGlobal', e, t).catch((u) => {
        console.error(`setRTPC('${e}', '${t}'): `, u);
    });
}
function getSize$1(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
function getMouseGlobalPosition(e = 'px') {
    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
}
const graphicsQuality = {
        isLow: () => 1 === viewEnv.getGraphicsQuality(),
        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
        get: () => viewEnv.getGraphicsQuality(),
    },
    client = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                events: events$1,
                getMouseGlobalPosition: getMouseGlobalPosition,
                getSize: getSize$1,
                graphicsQuality: graphicsQuality,
                playSound: playSound,
                setRTPC: setRTPC,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    sounds = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays = Object.keys(sounds).reduce((e, t) => ((e[t] = () => playSound(sounds[t])), e), {}),
    play = { ...plays, sound: playSound },
    sound = { play: play },
    ROMAN = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    ARABIC = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
function arabic2roman$1(e) {
    let t = '';
    for (let u = ARABIC.length - 1; u >= 0; u--) for (; e >= ARABIC[u]; ) ((t += ROMAN[u]), (e -= ARABIC[u]));
    return t;
}
const ROMAN_FORBIDDEN_LANGUAGE_CODES = ['ko', 'no'];
function getTextureUrl(e, t, u = 1) {
    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
}
function getBgUrl(e, t, u) {
    return `url(${getTextureUrl(e, t, u)})`;
}
ROMAN_FORBIDDEN_LANGUAGE_CODES.includes(R.strings.settings.LANGUAGE_CODE());
const children = Object.freeze(
        Object.defineProperty(
            { __proto__: null, getBgUrl: getBgUrl, getTextureUrl: getTextureUrl },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    displayStatus = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
    events = {
        onTextureFrozen: makeEngineEvent('self.onTextureFrozen'),
        onTextureReady: makeEngineEvent('self.onTextureReady'),
        onDomBuilt: makeEngineEvent('self.onDomBuilt'),
        onLoaded: makeEngineEvent('self.onLoaded'),
        onDisplayChanged: makeEngineEvent('self.onShowingStatusChanged'),
        onFocusUpdated: makeEngineEvent('self.onFocusChanged'),
        children: {
            onAdded: makeEngineEvent('children.onAdded'),
            onLoaded: makeEngineEvent('children.onLoaded'),
            onRemoved: makeEngineEvent('children.onRemoved'),
            onAttached: makeEngineEvent('children.onAttached'),
            onTextureReady: makeEngineEvent('children.onTextureReady'),
            onRequestPosition: makeEngineEvent('children.requestPosition'),
        },
    },
    viewEventTypes = { closePopover: 2, move: 16, close: 32, minimize: 64 },
    createViewEventArguments$1 = (e) =>
        Object.entries(e).map(([e, t]) => {
            const u = 'GFValueProxy';
            switch (typeof t) {
                case 'number':
                    return { __Type: u, name: e, number: t };
                case 'boolean':
                    return { __Type: u, name: e, bool: t };
                default:
                    return { __Type: u, name: e, string: t.toString() };
            }
        }),
    sendViewEvent = (e, t) => {
        const u = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: n, ...r } = t;
            return void 0 !== n
                ? viewEnv.handleViewEvent({ __Type: u, type: e, ...r, arguments: createViewEventArguments$1(n) })
                : viewEnv.handleViewEvent({ __Type: u, type: e, ...r });
        }
        return viewEnv.handleViewEvent({ __Type: u, type: e });
    },
    sendEvent = {
        close(e) {
            sendViewEvent('popover' === e ? viewEventTypes.closePopover : viewEventTypes.close);
        },
        minimize() {
            sendViewEvent(viewEventTypes.minimize);
        },
        move(e) {
            sendViewEvent(viewEventTypes.move, { isMouseEvent: !0, on: e });
        },
    },
    ALL_SIDES = 15;
function addPreloadTexture(e) {
    viewEnv.addPreloadTexture(e);
}
function setInputPaddingsRem(e) {
    viewEnv.setHitAreaPaddingsRem(e, e, e, e, ALL_SIDES);
}
function getBrowserTexturePath(e, t, u, n = 1) {
    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
}
function addModelObserver(e, t, u) {
    return viewEnv.addDataChangedCallback(e, t, u);
}
function setSidePaddingsRem(e) {
    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, ALL_SIDES);
}
function getSize(e = 'px') {
    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
}
function resize(e, t, u = 'px') {
    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
}
function getViewGlobalPosition(e = 'rem') {
    const t = viewEnv.getViewGlobalPositionRem();
    return 'rem' === e ? t : { x: remToPx(t.x), y: remToPx(t.y) };
}
function freezeTextureBeforeResize() {
    viewEnv.freezeTextureBeforeResize();
}
function getScale() {
    return viewEnv.getScale();
}
function pxToRem(e) {
    return viewEnv.pxToRem(e);
}
function remToPx(e) {
    return viewEnv.remToPx(e);
}
function setAnimateWindow(e, t) {
    viewEnv.setAnimateWindow(e, t);
}
function isFocused() {
    return viewEnv.isFocused();
}
function setEventHandled() {
    return viewEnv.setEventHandled();
}
function isEventHandled() {
    return viewEnv.isEventHandled();
}
function forceTriggerMouseMove() {
    viewEnv.forceTriggerMouseMove();
}
function getDisplayStatus() {
    return viewEnv.getShowingStatus();
}
const getFontNames = (() => {
        let e = [];
        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
    })(),
    arabic2roman = arabic2roman$1;
function getExternalPaddingsRem() {
    return viewEnv.getExternalPaddingsRem();
}
const displayStatusIs = Object.keys(displayStatus).reduce(
        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === displayStatus[t]), e),
        {},
    ),
    extraSize = {
        set: (e, t) => {
            viewEnv.setExtraSizeRem(e, t);
        },
        get: (e, t) => {
            viewEnv.getExtraSizeRem(e, t);
        },
    },
    whenTutorialReady = Promise.all([
        new Promise((e) => {
            window.isDomBuilt ? e() : events.onDomBuilt(e);
        }),
        engine.whenReady,
    ]);
function enableFullScreenModeSupported() {
    viewEnv.setFullscreenModeSupported(!0);
}
function initExternalPaddings(e) {
    function t() {
        const { top: t, right: u, bottom: n, left: r } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${u}rem`),
            e.style.setProperty('--external-padding-bottom', `${n}rem`),
            e.style.setProperty('--external-padding-left', `${r}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
const view = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                addModelObserver: addModelObserver,
                addPreloadTexture: addPreloadTexture,
                arabic2roman: arabic2roman,
                children: children,
                displayStatus: displayStatus,
                displayStatusIs: displayStatusIs,
                enableFullScreenModeSupported: enableFullScreenModeSupported,
                events: events,
                extraSize: extraSize,
                forceTriggerMouseMove: forceTriggerMouseMove,
                freezeTextureBeforeResize: freezeTextureBeforeResize,
                getBrowserTexturePath: getBrowserTexturePath,
                getDisplayStatus: getDisplayStatus,
                getExternalPaddingsRem: getExternalPaddingsRem,
                getFontNames: getFontNames,
                getScale: getScale,
                getSize: getSize,
                getViewGlobalPosition: getViewGlobalPosition,
                initExternalPaddings: initExternalPaddings,
                isEventHandled: isEventHandled,
                isFocused: isFocused,
                pxToRem: pxToRem,
                remToPx: remToPx,
                resize: resize,
                sendEvent: sendEvent,
                setAnimateWindow: setAnimateWindow,
                setEventHandled: setEventHandled,
                setInputPaddingsRem: setInputPaddingsRem,
                setSidePaddingsRem: setSidePaddingsRem,
                whenTutorialReady: whenTutorialReady,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    env = { view: view, client: client, sound: sound },
    root$4 = 'Textbutton_root_599b35e4',
    base$9 = 'Textbutton_b1283086',
    base__right = 'Textbutton_base__right_78d4c03f',
    icon$1 = 'Textbutton_icon_9ba4c60',
    icon__back = 'Textbutton_icon__back_599b35e4',
    icon__forward = 'Textbutton_icon__forward_4ef35d4d',
    icon__close = 'Textbutton_icon__close_b2af8bd5',
    icon__info = 'Textbutton_icon__info_6cbc7293',
    glow = 'Textbutton_glow_1ddc70ba',
    caption = 'Textbutton_caption_4350685c',
    caption__back = 'Textbutton_caption__back_599b35e4',
    caption__forward = 'Textbutton_caption__forward_599b35e4',
    caption__close = 'Textbutton_caption__close_c29bdb5',
    caption__info = 'Textbutton_caption__info_ccd96b67',
    goto = 'Textbutton_goto_d2c81cbd',
    base__left = 'Textbutton_base__left_599b35e4',
    shine = 'Textbutton_shine_527e4656',
    fadeIn$4 = 'Textbutton_fadeIn_599b35e4',
    styles$b = {
        root: root$4,
        base: base$9,
        base__right: base__right,
        icon: icon$1,
        icon__back: icon__back,
        icon__forward: icon__forward,
        icon__close: icon__close,
        icon__info: icon__info,
        glow: glow,
        caption: caption,
        caption__back: caption__back,
        caption__forward: caption__forward,
        caption__close: caption__close,
        caption__info: caption__info,
        goto: goto,
        base__left: base__left,
        shine: shine,
        fadeIn: fadeIn$4,
    },
    TextButton = ({
        caption: e,
        onClick: t,
        goto: u,
        classNames: n,
        onMouseEnter: r,
        onMouseLeave: o,
        onMouseDown: s,
        onMouseUp: a,
        side: i = 'left',
        type: l = 'back',
        soundHover: c = 'highlight',
        soundClick: d = 'play',
        ...E
    }) => {
        const p = reactExports.useCallback(
                (e) => {
                    (null == r || r(e), env.sound.play.sound(c));
                },
                [r, c],
            ),
            m = reactExports.useCallback(
                (e) => {
                    null == o || o(e);
                },
                [o],
            ),
            A = reactExports.useCallback(
                (e) => {
                    (null == s || s(e), env.sound.play.sound(d));
                },
                [s, d],
            ),
            f = reactExports.useCallback(
                (e) => {
                    null == a || a(e);
                },
                [a],
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$b.base, styles$b[`base__${l}`], styles$b[`base__${i}`], null == n ? void 0 : n.base),
            onMouseEnter: p,
            onMouseLeave: m,
            onMouseDown: A,
            onMouseUp: f,
            onClick: t,
            ...E,
            children: [
                'info' !== l && jsxRuntimeExports.jsx('div', { className: styles$b.shine }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$b.icon,
                        styles$b[`icon__${l}`],
                        styles$b[`icon__${i}`],
                        null == n ? void 0 : n.icon,
                    ),
                    children: jsxRuntimeExports.jsx('div', {
                        className: cx(styles$b.glow, null == n ? void 0 : n.glow),
                    }),
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$b.caption, styles$b[`caption__${l}`], null == n ? void 0 : n.caption),
                    children: e,
                }),
                u &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$b.goto, null == n ? void 0 : n.goto),
                        children: u,
                    }),
            ],
        });
    };
var RewardType$1 = ((e) => (
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
        (e.BattlePassTicket = 'lootBox_commonTicket'),
        (e.BattlePassTaler = 'bptaler'),
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
        (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
        (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
        (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
        (e.OptionalDevice = 'optionalDevice'),
        (e.EquipCoin = 'equipCoin'),
        (e.LootBox = 'lootBox'),
        (e.BrCoin = 'brcoin'),
        (e.Attachment = 'attachment'),
        e
    ))(RewardType$1 || {}),
    ImageSize$1 = ((e) => (
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
        e
    ))(ImageSize$1 || {}),
    ValueTypes = ((e) => (
        (e.MULTI = 'multi'),
        (e.CURRENCY = 'currency'),
        (e.PREMIUM_PLUS = 'premium_plus'),
        (e.NUMBER = 'number'),
        (e.STRING = 'string'),
        e
    ))(ValueTypes || {});
const Context$1 = reactExports.createContext(void 0);
function useHorizontalScroll() {
    const e = reactExports.useContext(Context$1);
    if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
    return e;
}
var Direction$1 = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(Direction$1 || {});
const defaultSettings$1 = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    createApiHook$1 = ({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: u,
        getDirection: n,
        getWrapperSize: r,
        triggerMouseMoveOnUpdate: o = !1,
    }) => {
        const s = (e, u) => {
            const [n, r] = t(e);
            return clamp$1(n, r, u);
        };
        return (a = {}) => {
            const { settings: i = defaultSettings$1 } = a,
                [l, c] = reactExports.useState(!1),
                d = reactExports.useRef(null),
                E = reactExports.useRef(null),
                p = reactExports.useRef({ wrapper: 0, container: 0 }),
                m = useEmitter$1(),
                A = useThrottle$1(
                    () => {
                        forceTriggerMouseMove$1();
                    },
                    [],
                    150,
                ),
                [f, F] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = d.current;
                        t && (u(t, e), m.trigger('change', e));
                    },
                    onRest: (e) => m.trigger('rest', e),
                    onStart: (e) => m.trigger('start', e),
                    onPause: (e) => m.trigger('pause', e),
                })),
                h = reactExports.useCallback(
                    (e, t, u) => {
                        const n = f.scrollPosition.get(),
                            r = (f.scrollPosition.goal ?? 0) - n;
                        return s(e, t * u + r + n);
                    },
                    [f.scrollPosition],
                ),
                g = reactExports.useCallback(
                    function (e, { immediate: t = !1, reset: u = !0 } = {}) {
                        const n = d.current;
                        if (!n) return;
                        const r = s(n, e);
                        f.scrollPosition.get() !== r &&
                            F.start({
                                scrollPosition: r,
                                immediate: t,
                                reset: u,
                                config: i.animationConfig,
                                from: { scrollPosition: s(n, f.scrollPosition.get()) },
                                onChange: () => {
                                    o && A();
                                },
                            });
                    },
                    [F, i.animationConfig, f.scrollPosition, A],
                ),
                _ = reactExports.useCallback(
                    function (e) {
                        const t = d.current,
                            u = E.current;
                        if (!t || !u) return;
                        const n = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return r(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(u, i.step),
                            o = h(t, e, n);
                        g(o);
                    },
                    [g, h, i.step],
                ),
                D = reactExports.useCallback(
                    function (e) {
                        l ||
                            (0 !== e.deltaY && _(n(e)),
                            d.current && m.trigger('mouseWheel', e, f.scrollPosition, t(d.current)));
                    },
                    [f.scrollPosition, _, m, l],
                ),
                C = reactExports.useCallback(
                    function () {
                        const e = d.current;
                        e && (g(s(e, f.scrollPosition.goal), { immediate: !0 }), m.trigger('resizeHandled'));
                    },
                    [g, f.scrollPosition.goal, m],
                );
            useRefResizeObserver(E, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const u = r(t);
                p.current.wrapper !== u && C();
            });
            const b = useEvent$1(function () {
                    const t = d.current;
                    if (!t) return;
                    const u = e(t),
                        n = E.current ? r(E.current) : 0;
                    if (p.current.container !== u || p.current.wrapper !== n) {
                        const e = s(t, f.scrollPosition.goal);
                        (e !== f.scrollPosition.goal && g(e, { immediate: !0 }),
                            (p.current.container = u),
                            (p.current.wrapper = n),
                            m.trigger('recalculateContent'));
                    }
                }),
                B = useSkipFrame$1();
            reactExports.useEffect(() => addEventListener(window, 'resize', () => B.run(C)), [C, B]);
            return reactExports.useMemo(
                () => ({
                    getWrapperSize: () => (E.current ? r(E.current) : void 0),
                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                    getBounds: () =>
                        d.current ? t(d.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: i.step.clampedArrowStepTimeout,
                    settings: i,
                    clampPosition: s,
                    handleMouseWheel: D,
                    applyScroll: g,
                    applyStepTo: _,
                    contentRef: d,
                    wrapperRef: E,
                    scrollPosition: F,
                    animationScroll: f,
                    recalculateContent: b,
                    disabled: l,
                    setDisabled: c,
                    events: { on: m.on, off: m.off },
                }),
                [i, D, g, _, F, f, b, l, c, m.on, m.off],
            );
        };
    },
    scrollOrientations = { horizontal: 'horizontal', vertical: 'vertical' },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$2 = 100,
    MOUSE_BUTTON_LEFT$2 = 0,
    root$3 = 'Thumb_root_830942bb',
    background$1 = 'Thumb_background_7f3dd6ac',
    border = 'Thumb_border_5749138b',
    innerBorder = 'Thumb_innerBorder_42bafd18',
    icon = 'Thumb_icon_dca8bf26',
    base$8 = 'Thumb_6ff3e706',
    base__vertical = 'Thumb_base__vertical_55a67c91',
    base__horizontal = 'Thumb_base__horizontal_27ca7ace',
    base__active$1 = 'Thumb_base__active_830942bb',
    fadeIn$3 = 'Thumb_fadeIn_830942bb',
    styles$a = {
        root: root$3,
        background: background$1,
        border: border,
        innerBorder: innerBorder,
        icon: icon,
        base: base$8,
        base__vertical: base__vertical,
        base__horizontal: base__horizontal,
        base__active: base__active$1,
        fadeIn: fadeIn$3,
    },
    BOUNCING_OFFSET = 2,
    MIN_THUMB_SIZE$2 = 13,
    FORWARD_DISABLED = 'forwardDisabled',
    BACKWARD_DISABLED = 'backwardDisabled';
function updateDisabledStates(e, t) {
    if (!e.trackRef.current || !e.thumbRef.current) return;
    const u = e.trackRef.current.parentNode;
    if (u instanceof HTMLElement) {
        if (0 === t) return (u.classList.add(BACKWARD_DISABLED), void u.classList.remove(FORWARD_DISABLED));
        if (e.isBoundThumb(t)) return (u.classList.remove(BACKWARD_DISABLED), void u.classList.add(FORWARD_DISABLED));
        (u.classList.remove(BACKWARD_DISABLED), u.classList.remove(FORWARD_DISABLED));
    }
}
function Thumb(e) {
    const t = reactExports.useRef(null),
        [u, n] = reactExports.useState(!1),
        r = useEvent$1(function () {
            const u = t.current,
                n = e.trackRef.current,
                r = e.api.getWrapperSize(),
                o = e.api.getContainerSize();
            if (!(r && o && u && n)) return;
            const s = Math.min(1, r / o),
                a = 'horizontal' === e.direction ? 'width' : 'height';
            return ((u.style[a] = `${e.calculateSize(n, s)}px`), (u.style.display = 'flex'), s);
        }),
        [o, s] = useSpring(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: easings.easeInCubic,
            config: { duration: 200 },
        }));
    reactExports.useEffect(() => {
        u || e.dragging
            ? s.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(styles$a.base__active);
                  },
              })
            : s.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(styles$a.base__active);
                  },
              });
    }, [u, e.dragging, e.styles.closed, e.styles.opened, s]);
    const a = useEvent$1(function () {
            var u;
            const n = e.trackRef.current,
                r = t.current,
                o = e.railBeforeRef.current,
                a = e.railAfterRef.current,
                i = e.api.getWrapperSize(),
                l = e.api.getContainerSize();
            if (!(i && n && r && o && a && l)) return;
            const c = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, i / l),
                E = clamp$1(0, 1, c / (l - i)),
                p = e.calculateSize(n, d),
                m = (('horizontal' === e.direction ? n.offsetWidth : n.offsetHeight) - p) * E || 0,
                A = Math.round((2 * E - 1) * BOUNCING_OFFSET);
            (r.style.setProperty('--thumbOffset', `${m}px`),
                null == (u = e.onUpdate) || u.call(e, { thumbSize: p, thumbOffset: m, newBouncingCorrection: A }));
            const f = 0 === m || e.isBoundThumb(m) ? 0 : A;
            return (
                s.start({
                    to: { '--bouncingCorrection': `${f}px` },
                    ...(0 === f ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                m
            );
        }),
        i = useSkipFrame$1(),
        l = useEvent$1(function () {
            r();
            const t = a();
            'number' == typeof t && updateDisabledStates(e, t);
        });
    reactExports.useEffect(() => i.run(l));
    const { api: c } = e;
    return (
        reactExports.useEffect(() => {
            function e() {
                i.run(l);
            }
            return (
                c.events.on('recalculateContent', e),
                c.events.on('rest', l),
                c.events.on('change', l),
                c.events.on('resizeHandled', e),
                () => {
                    (c.events.off('recalculateContent', e),
                        c.events.off('rest', l),
                        c.events.off('change', l),
                        c.events.off('resizeHandled', e));
                }
            );
        }, [c, i, l]),
        jsxRuntimeExports.jsxs(animated.div, {
            ref: assignRefs([t, e.thumbRef]),
            className: cx(styles$a.base, styles$a[`base__${e.direction}`], e.className),
            style: o,
            onMouseEnter: () => n(!0),
            onMouseLeave: () => n(!1),
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$a.background }),
                jsxRuntimeExports.jsx('div', { className: styles$a.border }),
                jsxRuntimeExports.jsx('div', { className: styles$a.innerBorder }),
                jsxRuntimeExports.jsx('div', { className: styles$a.icon }),
            ],
        })
    );
}
const initBarDraggingState = { pending: !1, offset: 0 };
function useBarDragging(e, t, u, n, r) {
    const [o, s] = reactExports.useState(initBarDraggingState),
        a = useEvent$1(t),
        i = reactExports.useCallback(
            (t) => {
                (s(t), e.current && a({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [a, e],
        );
    return (
        reactExports.useEffect(() => {
            if (!o.pending) return;
            const t = mouse$1.move(function ([t]) {
                    const s = u.contentRef.current;
                    if (!s) return;
                    const i = n.current,
                        l = e.current;
                    if (!s || !i || !l) return;
                    const c = r(t, o, { parent: i, thumb: l }),
                        d = c * (u.getContainerSize() ?? 0);
                    (u.scrollPosition.start({
                        scrollPosition: u.clampPosition(s, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                    }),
                        a({ type: 'dragging', dragElement: l, elementOffset: c, contentOffset: d }));
                }),
                s = mouse$1.up(() => {
                    i(initBarDraggingState);
                });
            return () => {
                (t(), s());
            };
        }, [u, o.offset, o.pending, a, i, e, n, o, r]),
        i
    );
}
const DISABLE_CLASS$2 = 'disable',
    ACTIVE_CLASS = 'scroll-active';
function useUpdateStatesBar({ api: e, baseRef: t }) {
    const u = useSkipFrame$1(),
        n = useEvent$1(function () {
            const u = e.getWrapperSize(),
                n = e.getContainerSize();
            if (null === t.current || void 0 === n || void 0 === u) return;
            1 === Math.min(1, u / n || 1)
                ? t.current.classList.remove(ACTIVE_CLASS)
                : t.current.classList.add(ACTIVE_CLASS);
        });
    (reactExports.useEffect(() => u.run(n)),
        reactExports.useEffect(() => {
            function t() {
                u.run(n);
            }
            return (
                e.events.on('recalculateContent', t),
                e.events.on('resizeHandled', t),
                () => {
                    (e.events.off('recalculateContent', t), e.events.off('resizeHandled', t));
                }
            );
        }, [e, u, n]));
}
function getElementCoordinates(e, t) {
    const u = e.getBoundingClientRect(),
        n = t === scrollOrientations.horizontal ? u.x : u.y;
    return { start: n, end: t === scrollOrientations.horizontal ? n + u.width : n + u.height };
}
function getCoordinate(e, t, u, n, r, o) {
    return {
        occurredEvent: o === scrollOrientations.horizontal ? e.screenX : e.screenY,
        bar: getElementCoordinates(t, o),
        thumb: getElementCoordinates(u, o),
        backButton: getElementCoordinates(n, o),
        forwardButton: getElementCoordinates(r, o),
    };
}
function useBarHandlers(e, t, u, n, r, o, s) {
    const a = useSounds(),
        i = r.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$2,
        [l, c] = useRepeatCallback$1((e) => r.applyStepTo(e), i, [r]);
    reactExports.useEffect(
        () => (document.addEventListener('mouseup', c, !0), () => document.removeEventListener('mouseup', c, !0)),
        [c],
    );
    const d = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS$2) ||
                    (a.play('click', { target: 'Scroll:Back', original: e }), l(Direction$1.Next));
            },
            [l, a],
        ),
        E = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS$2) ||
                    (a.play('click', { target: 'Scroll:Forward', original: e }), l(Direction$1.Prev));
            },
            [l, a],
        ),
        p = reactExports.useCallback(
            (i) => {
                const l = e.current,
                    c = t.current,
                    p = u.current,
                    m = n.current;
                if (!(l && c && p && m && i.button === MOUSE_BUTTON_LEFT$2)) return;
                const A = getCoordinate(i, l, c, p, m, s),
                    f = A.thumb.start <= A.occurredEvent && A.occurredEvent <= A.thumb.end,
                    F =
                        (A.backButton.start <= A.occurredEvent && A.occurredEvent <= A.backButton.end) ||
                        (A.forwardButton.start <= A.occurredEvent && A.occurredEvent <= A.forwardButton.end);
                if (f) o({ pending: !0, offset: A.occurredEvent - A.thumb.start });
                else if (F) {
                    ((A.occurredEvent > A.thumb.start ? Direction$1.Prev : Direction$1.Next) === Direction$1.Next
                        ? d
                        : E)(i);
                } else {
                    const e = A.occurredEvent - A.bar.start,
                        t = A.thumb.end - A.thumb.start,
                        u = A.bar.end - A.bar.start,
                        n = r.getContainerSize();
                    if ('number' != typeof n || Number.isNaN(n)) return console.error('Incorrect container size');
                    const o = ((e - t / 2) / u) * n;
                    r.applyScroll(o);
                }
                a.play('click', { target: 'Scroll:' + (f ? 'thumb' : F ? 'button' : ''), original: i });
            },
            [e, t, u, n, a, s, o, d, E, r],
        ),
        m = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS$2) ||
                    a.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [a],
        );
    return reactExports.useMemo(
        () => ({
            handleMouseBackDown: d,
            handleMouseEnter: m,
            handleMouseDownTrack: p,
            handleMouseForwardDown: E,
            handleMouseForwardUp: c,
            handleMouseBackUp: c,
        }),
        [d, m, p, E, c],
    );
}
const rail$3 = 'HorizontalBar_rail_37858d8f',
    base$7 = 'HorizontalBar_4df27ac3',
    track$3 = 'HorizontalBar_track_649dc296',
    rail__left = 'HorizontalBar_rail__left_1a906b4e',
    rail__right = 'HorizontalBar_rail__right_cd24364e',
    button__right = 'HorizontalBar_button__right_e8f0aa2d',
    button__left = 'HorizontalBar_button__left_da330e13',
    button$1 = 'HorizontalBar_button_cbabd91',
    styles$9 = {
        rail: rail$3,
        base: base$7,
        track: track$3,
        rail__left: rail__left,
        rail__right: rail__right,
        button__right: button__right,
        button__left: button__left,
        button: button$1,
    },
    THUMB_TO_RAIL_OFFSET$1 = 5,
    THUMB_STYLES$1 = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    calculateThumbSize$3 = (e, t) => Math.max(remToPx$1(MIN_THUMB_SIZE$2), e.offsetWidth * t);
reactExports.memo(function ({ classNames: e = {}, onDrag: t = noop$2 }) {
    const u = reactExports.useRef(null),
        n = reactExports.useRef(null),
        r = reactExports.useRef(null),
        o = reactExports.useRef(null),
        s = reactExports.useRef(null),
        a = reactExports.useRef(null),
        i = reactExports.useRef(null),
        [l, c] = reactExports.useState(!1),
        { api: d } = useHorizontalScroll();
    useUpdateStatesBar({ baseRef: u, api: d });
    const E = useEvent$1((e, t, { parent: u }) => (e.screenX - t.offset - u.getBoundingClientRect().x) / u.offsetWidth),
        p = useEvent$1((e) => e - (o.current.offsetWidth - s.current.offsetWidth) >= -0.5),
        m = reactExports.useCallback(
            (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
            [t],
        ),
        A = useBarDragging(s, m, d, o, E),
        f = useEvent$1(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: u }) => {
            const n = o.current,
                r = a.current,
                s = i.current;
            if (!n || !r || !s) return;
            const l = remToPx$1(THUMB_TO_RAIL_OFFSET$1);
            ((r.style.width = `${t - l + u}px`), (s.style.width = n.offsetWidth - e - t - l - u + 'px'));
        }),
        { handleMouseEnter: F, handleMouseDownTrack: h } = useBarHandlers(
            u,
            s,
            r,
            n,
            d,
            A,
            scrollOrientations.horizontal,
        );
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$9.base, e.base),
        ref: u,
        onWheel: d.handleMouseWheel,
        onMouseDown: h,
        onMouseEnter: F,
        children: [
            jsxRuntimeExports.jsx('div', {
                ref: n,
                className: cx(styles$9.button, styles$9.button__left, e.leftButton),
            }),
            jsxRuntimeExports.jsxs('div', {
                ref: o,
                className: cx(styles$9.track, e.track),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        ref: a,
                        className: cx(styles$9.rail, styles$9.rail__left, e.leftRail),
                    }),
                    jsxRuntimeExports.jsx(Thumb, {
                        dragging: l,
                        api: d,
                        calculateOffset: E,
                        calculateSize: calculateThumbSize$3,
                        direction: 'horizontal',
                        isBoundThumb: p,
                        railAfterRef: a,
                        railBeforeRef: i,
                        styles: THUMB_STYLES$1,
                        onUpdate: f,
                        thumbRef: s,
                        trackRef: o,
                    }),
                    jsxRuntimeExports.jsx('div', {
                        ref: i,
                        className: cx(styles$9.rail, styles$9.rail__right, e.rightRail),
                    }),
                ],
            }),
            jsxRuntimeExports.jsx('div', {
                ref: r,
                className: cx(styles$9.button, styles$9.button__right, e.rightButton),
            }),
        ],
    });
});
const Context = reactExports.createContext(void 0);
function useVerticalScroll() {
    const e = reactExports.useContext(Context);
    if (!e) throw new Error('useVerticalScroll must be used within a Scroll.Vertical.Base component');
    return e;
}
const DEFAULT_VERTICAL_API_CONFIG = {
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = Math.trunc(t.value.scrollPosition ?? 0);
        },
        getDirection: (e) => (e.deltaY > 1 ? Direction$1.Next : Direction$1.Prev),
    },
    useApi = createApiHook$1(DEFAULT_VERTICAL_API_CONFIG),
    rail$2 = 'VerticalBar_rail_3d663c9',
    base$6 = 'VerticalBar_7187fa00',
    track$2 = 'VerticalBar_track_ff482708',
    rail__top = 'VerticalBar_rail__top_ee531f43',
    rail__bottom = 'VerticalBar_rail__bottom_3eaa33b1',
    button__bottom = 'VerticalBar_button__bottom_6880f123',
    button__top = 'VerticalBar_button__top_b8383775',
    button = 'VerticalBar_button_7b0e4aca',
    styles$8 = {
        rail: rail$2,
        base: base$6,
        track: track$2,
        rail__top: rail__top,
        rail__bottom: rail__bottom,
        button__bottom: button__bottom,
        button__top: button__top,
        button: button,
    },
    THUMB_TO_RAIL_OFFSET = 5,
    THUMB_STYLES = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    calculateThumbSize$2 = (e, t) => Math.max(remToPx$1(MIN_THUMB_SIZE$2), e.offsetHeight * t),
    Bar$1 = reactExports.memo(function ({ classNames: e = {}, onDrag: t = noop$2 }) {
        const u = reactExports.useRef(null),
            n = reactExports.useRef(null),
            r = reactExports.useRef(null),
            o = reactExports.useRef(null),
            s = reactExports.useRef(null),
            a = reactExports.useRef(null),
            i = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useVerticalScroll();
        useUpdateStatesBar({ baseRef: u, api: d });
        const E = useEvent$1((e) => e - (o.current.offsetHeight - s.current.offsetHeight) >= -0.5),
            p = useEvent$1(
                (e, t, { parent: u }) => (e.screenY - t.offset - u.getBoundingClientRect().y) / u.offsetHeight,
            ),
            m = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            A = useBarDragging(s, m, d, o, p),
            f = useEvent$1(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: u }) => {
                const n = o.current,
                    r = a.current,
                    s = i.current;
                if (!n || !r || !s) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET);
                ((r.style.height = `${t - l + u}px`), (s.style.height = n.offsetHeight - e - t - l - u + 'px'));
            }),
            { handleMouseEnter: F, handleMouseDownTrack: h } = useBarHandlers(
                u,
                s,
                n,
                r,
                d,
                A,
                scrollOrientations.vertical,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$8.base, e.base),
            ref: u,
            onWheel: d.handleMouseWheel,
            onMouseDown: h,
            onMouseEnter: F,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$8.button, styles$8.button__top, e.topButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: o,
                    className: cx(styles$8.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: a,
                            className: cx(styles$8.rail, styles$8.rail__top, e.topRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: l,
                            api: d,
                            calculateOffset: p,
                            calculateSize: calculateThumbSize$2,
                            direction: 'vertical',
                            isBoundThumb: E,
                            railAfterRef: a,
                            railBeforeRef: i,
                            styles: THUMB_STYLES,
                            onUpdate: f,
                            thumbRef: s,
                            trackRef: o,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$8.rail, styles$8.rail__bottom, e.bottomRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: r,
                    className: cx(styles$8.button, styles$8.button__bottom, e.bottomButton),
                }),
            ],
        });
    }),
    content$2 = 'VerticalScroll_content_62cb6120',
    defaultScroll$1 = 'VerticalScroll_defaultScroll_c69fa70e',
    area$1 = 'VerticalScroll_area_a3c0086a',
    styles$7 = { content: content$2, defaultScroll: defaultScroll$1, area: area$1 },
    DefaultScroll$1 = ({
        children: e,
        className: t,
        barClassNames: u,
        areaClassName: n,
        scrollClassName: r,
        scrollClassNames: o,
        onDrag: s,
    }) => {
        const { api: a } = useVerticalScroll(),
            i = reactExports.useMemo(() => {
                const e = u || {};
                return { ...e, base: cx(styles$7.base, e.base) };
            }, [u]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$7.defaultScroll, t),
            onWheel: a.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$7.area, n),
                    children: jsxRuntimeExports.jsx(Area$1, { className: r, classNames: o, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$1, { onDrag: s, classNames: i }),
            ],
        });
    },
    Area$1 = ({ className: e, classNames: t, children: u, ...n }) => {
        const { api: r } = useVerticalScroll();
        return (
            reactExports.useEffect(() =>
                createLayoutReadyInEffect$1(() => createLayoutReadyInEffect$1(r.recalculateContent)),
            ),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$7.base, null == t ? void 0 : t.wrapper, e),
                ref: r.wrapperRef,
                onWheel: r.handleMouseWheel,
                children: jsxRuntimeExports.jsx('div', {
                    ...n,
                    className: cx(styles$7.content, null == t ? void 0 : t.content),
                    ref: r.contentRef,
                    children: u,
                }),
            })
        );
    };
function Base({ children: e }) {
    const t = useApi(),
        u = reactExports.useMemo(() => ({ api: t }), [t]);
    return jsxRuntimeExports.jsx(Context.Provider, { value: u, children: e });
}
Area$1.Default = DefaultScroll$1;
let ClickOutsideManager$1 =
    ((_b = class {
        constructor() {
            (__publicField(this, 'entries', []),
                __publicField(this, '_listenMouse', !1),
                __publicField(this, 'onMouseDown', (e) => {
                    this.entries.forEach(({ container: t, callback: u }) => {
                        let n = e.target;
                        do {
                            if (n === t) return;
                            n = n.parentNode;
                        } while (n);
                        u();
                    });
                }));
        }
        static get instance() {
            return (_b.__instance || (_b.__instance = new _b()), _b.__instance);
        }
        register(e, t) {
            (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
        }
        unregister(e, t) {
            const u = e,
                n = t;
            ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
                this.removeMouseListener());
        }
        addMouseListener() {
            this._listenMouse || (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
        }
        removeMouseListener() {
            this._listenMouse &&
                0 === this.entries.length &&
                (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
        }
    }),
    __publicField(_b, '__instance'),
    _b);
const _DataTracker = class e {
    constructor() {
        (__publicField(this, '_callbacks'),
            __publicField(this, '_updateHandler'),
            __publicField(this, '_views'),
            __publicField(this, 'clearViewCallbacks', (e) => {
                this._views[e] &&
                    (this._views[e].forEach((e) => {
                        delete this._callbacks[e];
                    }),
                    delete this._views[e]);
            }),
            (this._callbacks = {}),
            (this._views = {}),
            (this._updateHandler = void 0));
    }
    static get instance() {
        return (window.__dataTracker || (window.__dataTracker = new e()), window.__dataTracker);
    }
    clear() {
        (void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
            (this._callbacks = {}));
    }
    addCallback(e, t, u = 0, n = !0) {
        void 0 === this._updateHandler &&
            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
        const r = env.view.addModelObserver(e, u, n);
        return (
            r > 0
                ? ((this._callbacks[r] = t),
                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                : console.error("Can't add callback for model:", e),
            r
        );
    }
    removeCallback(e, t = 0) {
        let u = !1;
        return (
            void 0 !== e &&
                void 0 !== this._callbacks[e] &&
                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
            u || console.error("Can't remove callback by id:", e),
            u
        );
    }
    _emmitDataChanged(e, t, u) {
        u.forEach((u) => {
            const n = this._callbacks[u];
            void 0 !== n && n(e, t);
        });
    }
};
__publicField(_DataTracker, '__instance');
let DataTracker = _DataTracker;
function dumpViewModel(e) {
    const t = {};
    if ('object' != typeof e) return e;
    for (const u in e)
        if (Object.prototype.hasOwnProperty.call(e, u)) {
            const n = Object.prototype.toString.call(e[u]);
            if (n.startsWith('[object CoherentArrayProxy]')) {
                const n = e[u];
                t[u] = [];
                for (let e = 0; e < n.length; e++) t[u].push({ value: dumpViewModel(n[e].value) });
            } else n.startsWith('[object class BW::WULF::ViewModel') ? (t[u] = dumpViewModel(e[u])) : (t[u] = e[u]);
        }
    return t;
}
const SystemLocale = {
        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
        toUpperCase: (e) => systemLocale.toUpperCase(e),
        toLowerCase: (e) => systemLocale.toUpperCase(e),
    },
    UserLocale = {
        getNumberFormat: (e) => userLocale.getNumberFormat(e),
        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
    },
    RegionalDateTime = {
        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
    };
var ViewEventType = ((e) => (
    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
    (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
    (e[(e.POP_OVER = 2)] = 'POP_OVER'),
    (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
    (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
    (e[(e.MOVE = 16)] = 'MOVE'),
    (e[(e.CLOSE = 32)] = 'CLOSE'),
    (e[(e.MINIMIZE = 64)] = 'MINIMIZE'),
    e
))(ViewEventType || {});
const NumberFormatType = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
    RealFormatType = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
    TimeFormatType = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
    DateFormatType = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
var KEY_CODES = ((e) => (
    (e[(e.NONE = -1)] = 'NONE'),
    (e[(e.ALT = 165)] = 'ALT'),
    (e[(e.ENTER = 13)] = 'ENTER'),
    (e[(e.ESCAPE = 27)] = 'ESCAPE'),
    (e[(e.SPACE = 32)] = 'SPACE'),
    (e[(e.END = 35)] = 'END'),
    (e[(e.HOME = 36)] = 'HOME'),
    (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
    (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
    (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
    (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
    (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
    (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
    (e[(e.PLUS = 187)] = 'PLUS'),
    (e[(e.MINUS = 189)] = 'MINUS'),
    (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
    (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
    (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
    (e[(e.DELETE = 46)] = 'DELETE'),
    (e[(e.TAB = 9)] = 'TAB'),
    (e[(e.KEY_N = 78)] = 'KEY_N'),
    (e[(e.KEY_1 = 49)] = 'KEY_1'),
    (e[(e.KEY_2 = 50)] = 'KEY_2'),
    (e[(e.KEY_3 = 51)] = 'KEY_3'),
    (e[(e.KEY_4 = 52)] = 'KEY_4'),
    (e[(e.KEY_5 = 53)] = 'KEY_5'),
    (e[(e.KEY_6 = 54)] = 'KEY_6'),
    (e[(e.KEY_7 = 55)] = 'KEY_7'),
    (e[(e.KEY_8 = 56)] = 'KEY_8'),
    (e[(e.KEY_9 = 57)] = 'KEY_9'),
    e
))(KEY_CODES || {});
const makeGlobalBoundingBox = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
    onBindingsReady = async () =>
        !(!engine._BindingsReady || !engine._WindowLoaded) ||
        new Promise((e) => {
            engine.on('Ready', e);
        }),
    onLayoutReady = () =>
        new Promise((e) => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    e();
                });
            });
        }),
    createViewEventArguments = (e) =>
        Object.entries(e).map(([e, t]) => {
            const u = { __Type: 'GFValueProxy', name: e };
            switch (typeof t) {
                case 'number':
                    u.number = t;
                    break;
                case 'boolean':
                    u.bool = t;
                    break;
                default:
                    u.string = t.toString();
            }
            return u;
        }),
    handleViewEvent$1 = (e, t) => {
        const u = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: n, ...r } = t;
            void 0 !== n
                ? viewEnv.handleViewEvent({ __Type: u, type: e, ...r, arguments: createViewEventArguments(n) })
                : viewEnv.handleViewEvent({ __Type: u, type: e, ...r });
        } else viewEnv.handleViewEvent({ __Type: u, type: e });
    },
    sendMoveEvent = (e) => handleViewEvent$1(ViewEventType.MOVE, { isMouseEvent: !0, on: e }),
    sendCloseEvent = () => handleViewEvent$1(ViewEventType.CLOSE),
    sendClosePopOverEvent = () => handleViewEvent$1(ViewEventType.POP_OVER, { on: !1 }),
    sendShowContextMenuEvent = (e, t, u = 0) => {
        handleViewEvent$1(ViewEventType.CONTEXT_MENU, {
            isMouseEvent: !0,
            contentID: e,
            on: !0,
            decoratorID: u,
            args: t,
        });
    },
    sendShowPopOverEvent = (e, t, u, n, r = R.invalid('resId'), o) => {
        const s = env.view.getViewGlobalPosition(),
            { x: a, y: i, width: l, height: c } = u.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(a) + s.x,
                y: env.view.pxToRem(i) + s.y,
                width: env.view.pxToRem(l),
                height: env.view.pxToRem(c),
            };
        handleViewEvent$1(ViewEventType.POP_OVER, {
            isMouseEvent: !0,
            contentID: e,
            decoratorID: n || R.invalid('resId'),
            targetID: r,
            direction: t,
            bbox: makeGlobalBoundingBox(d),
            on: !0,
            args: o,
        });
    },
    isTooltipShown = () => viewEnv.isWindowShownByViewEvent(ViewEventType.TOOLTIP),
    isContextMenuShown = () => viewEnv.isWindowShownByViewEvent(ViewEventType.CONTEXT_MENU),
    isPopOverShown = () => viewEnv.isWindowShownByViewEvent(ViewEventType.POP_OVER),
    callOnEsc = (e, t) => {
        e.keyCode === KEY_CODES.ESCAPE && t();
    },
    closeOnEsc = (e) => {
        callOnEsc(e, sendCloseEvent);
    },
    addEscapeListener = (e) => {
        const t = (t) => callOnEsc(t, e);
        return (window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t));
    };
class ViewModel {
    constructor(path, watchingFields = []) {
        (__publicField(this, 'dataTracker'),
            __publicField(this, 'modelPath'),
            __publicField(this, 'callbacks'),
            __publicField(this, 'data'),
            __publicField(this, '_notifyObservers', () => {
                ((this.data = eval(this.modelPath)),
                    this.callbacks.forEach((e) => {
                        e(this.data);
                    }));
            }),
            (this.dataTracker = new DataTracker()),
            (this.modelPath = path),
            (this.callbacks = new Set()),
            onBindingsReady().then(() => {
                (this._addCallback(path),
                    watchingFields.forEach((e) => {
                        this._addCallback(path + '.' + e);
                    }),
                    this._notifyObservers());
            }));
    }
    subscribe(e) {
        (this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data));
    }
    unsubscribe(e) {
        this.callbacks.delete(e);
    }
    destroy() {
        (this.dataTracker.clear(), this.callbacks.clear());
    }
    _addCallback(e) {
        this.dataTracker.addCallback(e, this._notifyObservers);
    }
}
const ClickOutsideManager = ClickOutsideManager$1.instance,
    ViewEnvHelper = {
        DataTracker: DataTracker,
        ViewModel: ViewModel,
        ViewEventType: ViewEventType,
        NumberFormatType: NumberFormatType,
        RealFormatType: RealFormatType,
        TimeFormatType: TimeFormatType,
        DateFormatType: DateFormatType,
        makeGlobalBoundingBox: makeGlobalBoundingBox,
        sendMoveEvent: sendMoveEvent,
        sendCloseEvent: sendCloseEvent,
        sendClosePopOverEvent: sendClosePopOverEvent,
        sendShowContextMenuEvent: sendShowContextMenuEvent,
        sendShowPopOverEvent: sendShowPopOverEvent,
        addEscapeListener: addEscapeListener,
        closeOnEsc: closeOnEsc,
        handleViewEvent: handleViewEvent$1,
        onBindingsReady: onBindingsReady,
        onLayoutReady: onLayoutReady,
        isTooltipShown: isTooltipShown,
        isContextMenuShown: isContextMenuShown,
        isPopOverShown: isPopOverShown,
        dumpViewModel: dumpViewModel,
        ClickOutsideManager: ClickOutsideManager,
        SystemLocale: SystemLocale,
        UserLocale: UserLocale,
    };
function getNumberFormatType(e) {
    return 'gold' === e ? NumberFormatType.GOLD : NumberFormatType.INTEGRAL;
}
window.ViewEnvHelper = ViewEnvHelper;
const FormatNumber = ({ value: e, format: t = 'integral' }) => {
        const u = getNumberFormatType(t),
            n = SystemLocale.getNumberFormat(e, u);
        return void 0 !== e && void 0 !== n ? n : null;
    },
    multiValueTypes = [
        RewardType$1.Items,
        RewardType$1.Equipment,
        RewardType$1.Xp,
        RewardType$1.XpFactor,
        RewardType$1.Blueprints,
        RewardType$1.BlueprintsAny,
        RewardType$1.Goodies,
        RewardType$1.Berths,
        RewardType$1.Slots,
        RewardType$1.Tokens,
        RewardType$1.CrewSkins,
        RewardType$1.CrewBooks,
        RewardType$1.Customizations,
        RewardType$1.CreditsFactor,
        RewardType$1.TankmenXp,
        RewardType$1.TankmenXpFactor,
        RewardType$1.FreeXpFactor,
        RewardType$1.BattleToken,
        RewardType$1.LootBox,
        RewardType$1.PremiumUniversal,
        RewardType$1.NaturalCover,
        RewardType$1.BpCoin,
        RewardType$1.BattlePassSelectToken,
        RewardType$1.BattlaPassFinalAchievement,
        RewardType$1.BattleBadge,
        RewardType$1.BattlePassTicket,
        RewardType$1.BonusX5,
        RewardType$1.CrewBonusX3,
        RewardType$1.EpicSelectToken,
        RewardType$1.Comp7TokenWeeklyReward,
        RewardType$1.DeluxeGift,
        RewardType$1.ModernizedDevicesT1Gift,
        RewardType$1.ModernizedDevicesT2Gift,
        RewardType$1.ModernizedDevicesT3Gift,
        RewardType$1.BattleBoosterGift,
        RewardType$1.OptionalDevice,
        RewardType$1.Attachment,
    ],
    currencyValueTypes = [RewardType$1.Gold, RewardType$1.Credits, RewardType$1.Crystal, RewardType$1.FreeXp],
    numberValueTypes = [RewardType$1.BattlePassPoints, RewardType$1.EquipCoin],
    premiumValueTypes = [RewardType$1.PremiumPlus, RewardType$1.Premium],
    getRewardValueType = (e) =>
        multiValueTypes.includes(e)
            ? ValueTypes.MULTI
            : currencyValueTypes.includes(e)
              ? ValueTypes.CURRENCY
              : numberValueTypes.includes(e)
                ? ValueTypes.NUMBER
                : premiumValueTypes.includes(e)
                  ? ValueTypes.PREMIUM_PLUS
                  : ValueTypes.STRING;
(ImageSize$1.Small, ImageSize$1.Big);
const getFormattedValue = (e, t) => {
        if (void 0 === e) return null;
        switch (t) {
            case ValueTypes.MULTI: {
                const t = Number(e);
                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
            }
            case ValueTypes.CURRENCY:
            case ValueTypes.NUMBER:
                return jsxRuntimeExports.jsx(FormatNumber, { format: 'integral', value: Number(e) });
            case ValueTypes.PREMIUM_PLUS: {
                const t = Number(e);
                return isNaN(t) ? e : null;
            }
            default:
                return e;
        }
    },
    createLayoutReadyInEffect = (e) => {
        let t,
            u = null;
        return (
            (u = requestAnimationFrame(() => {
                u = requestAnimationFrame(() => {
                    ((u = null), (t = e()));
                });
            })),
            () => {
                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
            }
        );
    },
    clamp = (e, t, u) => (u < e ? e : u > t ? t : u),
    STATIC_DEPS = [];
function useEvent(e) {
    const t = reactExports.useRef(e);
    return (
        reactExports.useLayoutEffect(() => {
            t.current = e;
        }),
        reactExports.useCallback((...e) => (0, t.current)(...e), STATIC_DEPS)
    );
}
function useRepeatCallback(e, t, u = []) {
    const n = reactExports.useRef(0),
        r = reactExports.useCallback(() => window.clearInterval(n.current), u || []);
    reactExports.useEffect(() => r, [r]);
    const o = (u ?? []).concat([t]);
    return [
        reactExports.useCallback((u) => {
            ((n.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
        }, o),
        r,
    ];
}
const useCallbackEffect = (e, t = []) => {
        const u = reactExports.useRef(),
            n = reactExports.useCallback((...t) => {
                (u.current && u.current(), (u.current = e(...t)));
            }, t);
        return (
            reactExports.useEffect(
                () => () => {
                    u.current && u.current();
                },
                [n],
            ),
            n
        );
    },
    useEmitter = () => {
        const e = reactExports.useMemo(() => ({}), []),
            t = (t) => (e[t] || (e[t] = new Map()), e[t]),
            u = (e, u) => {
                t(e).set(u, u);
            },
            n = (e, u) => {
                t(e).delete(u);
            },
            r = (e, ...u) => {
                for (const n of t(e).values()) n(...u);
            };
        return reactExports.useMemo(() => ({ on: u, off: n, trigger: r }), []);
    };
function throttle(e, t, u, n) {
    let r,
        o = !1,
        s = 0;
    function a() {
        r && clearTimeout(r);
    }
    function i(...i) {
        const l = this,
            c = Date.now() - s;
        function d() {
            ((s = Date.now()), u.apply(l, i));
        }
        o ||
            (n && !r && d(),
            a(),
            void 0 === n && c > e
                ? d()
                : !0 !== t &&
                  (r = setTimeout(
                      n
                          ? function () {
                                r = void 0;
                            }
                          : d,
                      void 0 === n ? e - c : e,
                  )));
    }
    return (
        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
        (i.cancel = function () {
            (a(), (o = !0));
        }),
        i
    );
}
function useThrottle(e, t, u) {
    const n = reactExports.useMemo(() => throttle(u, e), t);
    return (reactExports.useEffect(() => n.cancel, [n]), n);
}
var Direction = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(Direction || {});
const defaultSettings = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    createApiHook = ({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: u,
        getDirection: n,
        getWrapperSize: r,
        forceTriggerMouseMove: o,
    }) => {
        const s = (e, u) => {
            const [n, r] = t(e);
            return r <= n ? 0 : clamp(n, r, u);
        };
        return (a = {}) => {
            const { settings: i = defaultSettings } = a,
                l = reactExports.useRef(null),
                c = reactExports.useRef(null),
                d = reactExports.useRef(!1),
                E = useEmitter(),
                p = useThrottle(
                    () => {
                        o && o();
                    },
                    [],
                    150,
                ),
                [m, A] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = l.current;
                        t && (u(t, e), E.trigger('change', e), o && d.current && p());
                    },
                    onRest: (e) => E.trigger('rest', e),
                    onStart: (e) => E.trigger('start', e),
                    onPause: (e) => E.trigger('pause', e),
                })),
                f = reactExports.useCallback(
                    (e, t, u) => {
                        const n = m.scrollPosition.get(),
                            r = (m.scrollPosition.goal ?? 0) - n;
                        return s(e, t * u + r + n);
                    },
                    [m.scrollPosition],
                ),
                F = reactExports.useCallback(
                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                        const n = l.current;
                        n &&
                            A.start({
                                scrollPosition: s(n, e),
                                immediate: t,
                                reset: u,
                                config: i.animationConfig,
                                from: { scrollPosition: s(n, m.scrollPosition.get()) },
                            });
                    },
                    [A, i.animationConfig, m.scrollPosition],
                ),
                h = reactExports.useCallback(
                    (e) => {
                        const t = l.current,
                            u = c.current;
                        if (!t || !u) return;
                        const n = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return r(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(u, i.step),
                            o = f(t, e, n);
                        F(o);
                    },
                    [F, f, i.step],
                ),
                g = reactExports.useCallback(
                    (e) => {
                        (0 !== e.deltaY && h(n(e)),
                            l.current && E.trigger('mouseWheel', e, m.scrollPosition, t(l.current)));
                    },
                    [m.scrollPosition, h, E],
                ),
                _ = useCallbackEffect(
                    () =>
                        createLayoutReadyInEffect(() => {
                            const e = l.current;
                            e && (F(s(e, m.scrollPosition.goal), { immediate: !0 }), E.trigger('resizeHandled'));
                        }),
                    [F, m.scrollPosition.goal],
                ),
                D = useEvent(() => {
                    const e = l.current;
                    if (!e) return;
                    const t = s(e, m.scrollPosition.goal);
                    (t !== m.scrollPosition.goal && F(t, { immediate: !0 }), E.trigger('recalculateContent'));
                });
            (reactExports.useEffect(
                () => (
                    window.addEventListener('resize', _),
                    () => {
                        window.removeEventListener('resize', _);
                    }
                ),
                [_],
            ),
                reactExports.useEffect(() => {
                    const e = l.current;
                    if (!e || !o) return;
                    const t = () => {
                            d.current = !0;
                        },
                        u = () => {
                            d.current = !1;
                        };
                    return (
                        e.addEventListener('mouseenter', t),
                        e.addEventListener('mouseleave', u),
                        () => {
                            (e.removeEventListener('mouseenter', t), e.removeEventListener('mouseleave', u));
                        }
                    );
                }, [l]));
            return reactExports.useMemo(
                () => ({
                    getWrapperSize: () => (c.current ? r(c.current) : void 0),
                    getContainerSize: () => (l.current ? e(l.current) : void 0),
                    getBounds: () =>
                        l.current ? t(l.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: i.step.clampedArrowStepTimeout,
                    clampPosition: s,
                    handleMouseWheel: g,
                    applyScroll: F,
                    applyStepTo: h,
                    contentRef: l,
                    wrapperRef: c,
                    scrollPosition: A,
                    animationScroll: m,
                    recalculateContent: D,
                    events: { on: E.on, off: E.off },
                }),
                [m.scrollPosition, F, h, E.off, E.on, D, g, A, i.step.clampedArrowStepTimeout],
            );
        };
    },
    base$5 = 'Horizontalbar_ffd0f7ec',
    base__nonActive$1 = 'Horizontalbar_base__nonActive_b036f949',
    leftButton = 'Horizontalbar_leftButton_ba80ec4f',
    rightButton = 'Horizontalbar_rightButton_847c1c78',
    track$1 = 'Horizontalbar_track_388b12f',
    thumb$1 = 'Horizontalbar_thumb_9d4dd30f',
    rail$1 = 'Horizontalbar_rail_b8667e3c',
    styles$6 = {
        base: base$5,
        base__nonActive: base__nonActive$1,
        leftButton: leftButton,
        rightButton: rightButton,
        track: track$1,
        thumb: thumb$1,
        rail: rail$1,
    },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$1 = 100,
    DISABLE_CLASS$1 = 'disable',
    MIN_THUMB_SIZE$1 = 20,
    MOUSE_BUTTON_LEFT$1 = 0,
    initDraggingState$1 = { pending: !1, offset: 0 },
    getStepByRailClickDefault$1 = (e) => 0.9 * (e.getWrapperSize() ?? 0),
    isBoundThumb = (e, t, u) => u - (e.offsetWidth - t.offsetWidth) >= -0.5,
    emptyFunction$1 = () => {},
    calculateThumbSize$1 = (e, t) => Math.max(MIN_THUMB_SIZE$1, e.offsetWidth * t),
    BarFC$1 = ({
        api: e,
        classNames: t = {},
        getStepByRailClick: u = getStepByRailClickDefault$1,
        onDrag: n = emptyFunction$1,
    }) => {
        const r = reactExports.useRef(null),
            o = reactExports.useRef(null),
            s = reactExports.useRef(null),
            a = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = e.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$1,
            [c, d] = reactExports.useState(initDraggingState$1),
            E = reactExports.useCallback(
                (e) => {
                    (d(e), i.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: i.current }));
                },
                [n],
            ),
            p = () => {
                const t = a.current,
                    u = i.current,
                    n = e.getWrapperSize(),
                    r = e.getContainerSize();
                if (!(n && t && u && r)) return;
                const l = e.animationScroll.scrollPosition.get(),
                    c = Math.min(1, n / r),
                    d = clamp(0, 1, l / (r - n)),
                    E = (t.offsetWidth - calculateThumbSize$1(t, c)) * d;
                ((u.style.transform = `translateX(${0 | E}px)`),
                    ((e) => {
                        if (o.current && s.current && a.current && i.current) {
                            if (0 === e)
                                return (
                                    o.current.classList.add(DISABLE_CLASS$1),
                                    void s.current.classList.remove(DISABLE_CLASS$1)
                                );
                            if (isBoundThumb(a.current, i.current, e))
                                return (
                                    o.current.classList.remove(DISABLE_CLASS$1),
                                    void s.current.classList.add(DISABLE_CLASS$1)
                                );
                            (o.current.classList.remove(DISABLE_CLASS$1), s.current.classList.remove(DISABLE_CLASS$1));
                        }
                    })(E));
            },
            m = useEvent(() => {
                ((() => {
                    const t = i.current,
                        u = a.current,
                        n = e.getWrapperSize(),
                        o = e.getContainerSize();
                    if (!(o && t && n && u)) return;
                    const s = Math.min(1, n / o);
                    ((t.style.width = `${calculateThumbSize$1(u, s)}px`),
                        (t.style.display = 'flex'),
                        r.current &&
                            (1 === s
                                ? r.current.classList.add(styles$6.base__nonActive)
                                : r.current.classList.remove(styles$6.base__nonActive)));
                })(),
                    p());
            });
        (reactExports.useEffect(() => createLayoutReadyInEffect(m)),
            reactExports.useEffect(
                () =>
                    createLayoutReadyInEffect(() => {
                        const t = () => {
                            p();
                        };
                        let u = emptyFunction$1;
                        const n = () => {
                            (u(), (u = createLayoutReadyInEffect(m)));
                        };
                        return (
                            e.events.on('recalculateContent', m),
                            e.events.on('rest', t),
                            e.events.on('change', t),
                            e.events.on('resizeHandled', n),
                            () => {
                                (u(),
                                    e.events.off('recalculateContent', m),
                                    e.events.off('rest', t),
                                    e.events.off('change', t),
                                    e.events.off('resizeHandled', n));
                            }
                        );
                    }),
                [e],
            ),
            reactExports.useEffect(() => {
                if (!c.pending) return;
                const t = env.client.events.mouse.move(([t, u]) => {
                        const r = e.contentRef.current,
                            o = e.wrapperRef.current;
                        if (!r || !o) return;
                        const s = a.current,
                            l = i.current;
                        if (!s || !l) return;
                        if ('inside' === u && t.clientX < 0) return;
                        const d = t.clientX - c.offset - s.getBoundingClientRect().x,
                            E = (d / s.offsetWidth) * (e.getContainerSize() ?? 0);
                        (e.scrollPosition.start({
                            scrollPosition: e.clampPosition(r, E),
                            reset: !0,
                            immediate: !0,
                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                        }),
                            n({ type: 'dragging', thumb: l, thumbOffset: d, contentOffset: E }));
                    }),
                    u = env.client.events.mouse.up(() => {
                        (t(), E(initDraggingState$1));
                    });
                return () => {
                    (t(), u());
                };
            }, [e, c.offset, c.pending, n, E]));
        const [A, f] = useRepeatCallback((t) => e.applyStepTo(t), l, [e]);
        reactExports.useEffect(
            () => (document.addEventListener('mouseup', f, !0), () => document.removeEventListener('mouseup', f, !0)),
            [f],
        );
        const F = (e) => {
            e.target.classList.contains(DISABLE_CLASS$1) || playSound$1('highlight');
        };
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$6.base, t.base),
            ref: r,
            onWheel: e.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$6.leftButton, t.leftButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS$1) ||
                            e.button !== MOUSE_BUTTON_LEFT$1 ||
                            (playSound$1('play'), A(Direction.Next));
                    },
                    onMouseUp: f,
                    ref: o,
                    onMouseEnter: F,
                }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$6.track, t.track),
                    onMouseDown: (t) => {
                        const n = i.current;
                        if (n && t.button === MOUSE_BUTTON_LEFT$1)
                            if ((playSound$1('play'), t.target === n))
                                E({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                            else {
                                ((t) => {
                                    const n = i.current,
                                        r = e.contentRef.current;
                                    if (!n || !r) return;
                                    const o = u(e);
                                    e.applyScroll(e.animationScroll.scrollPosition.get() + o * t);
                                })(t.screenX > n.getBoundingClientRect().x ? Direction.Prev : Direction.Next);
                            }
                    },
                    ref: a,
                    onMouseEnter: F,
                    children: [
                        jsxRuntimeExports.jsx('div', { ref: i, className: cx(styles$6.thumb, t.thumb) }),
                        jsxRuntimeExports.jsx('div', { className: cx(styles$6.rail, t.rail) }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$6.rightButton, t.rightButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS$1) ||
                            e.button !== MOUSE_BUTTON_LEFT$1 ||
                            (playSound$1('play'), A(Direction.Prev));
                    },
                    onMouseUp: f,
                    ref: s,
                    onMouseEnter: F,
                }),
            ],
        });
    };
reactExports.memo(BarFC$1);
const DEFAULT_VERTICAL_API_CONTEXT = {
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = t.value.scrollPosition;
        },
        getDirection: (e) => (e.deltaY > 1 ? Direction.Next : Direction.Prev),
    },
    useVerticalScrollApi = createApiHook(DEFAULT_VERTICAL_API_CONTEXT),
    base$4 = 'Verticalbar_c665b078',
    base__nonActive = 'Verticalbar_base__nonActive_68055e33',
    topButton = 'Verticalbar_topButton_1ce852b9',
    bottomButton = 'Verticalbar_bottomButton_bc76d779',
    track = 'Verticalbar_track_7532d39a',
    thumb = 'Verticalbar_thumb_264988ce',
    rail = 'Verticalbar_rail_85a58f07',
    styles$5 = {
        base: base$4,
        base__nonActive: base__nonActive,
        topButton: topButton,
        bottomButton: bottomButton,
        track: track,
        thumb: thumb,
        rail: rail,
    },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT = 100,
    DISABLE_CLASS = 'disable',
    MIN_THUMB_SIZE = 20,
    MOUSE_BUTTON_LEFT = 0,
    emptyFunction = () => {},
    initDraggingState = { pending: !1, offset: 0 },
    getStepByRailClickDefault = (e) => 0.9 * (e.getWrapperSize() ?? 0),
    isBottomBoundThumb = (e, t, u) => u - (e.offsetHeight - t.offsetHeight) >= -0.5,
    handleContainer = (e, t) => {
        e.contentRef.current && t(e.contentRef.current);
    },
    calculateThumbSize = (e, t) => Math.max(MIN_THUMB_SIZE, e.offsetHeight * t),
    BarFC = ({
        api: e,
        classNames: t = {},
        getStepByRailClick: u = getStepByRailClickDefault,
        onDrag: n = emptyFunction,
    }) => {
        const r = reactExports.useRef(null),
            o = reactExports.useRef(null),
            s = reactExports.useRef(null),
            a = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = e.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT,
            [c, d] = reactExports.useState(initDraggingState),
            E = reactExports.useCallback(
                (e) => {
                    (d(e), i.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: i.current }));
                },
                [n],
            ),
            p = useEvent(() => {
                const t = i.current,
                    u = a.current,
                    n = e.getWrapperSize(),
                    o = e.getContainerSize();
                if (!(n && o && t && u)) return;
                const s = Math.min(1, n / o);
                return (
                    (t.style.height = `${calculateThumbSize(u, s)}px`),
                    (t.style.display = 'flex'),
                    r.current &&
                        (1 === s
                            ? r.current.classList.add(styles$5.base__nonActive)
                            : r.current.classList.remove(styles$5.base__nonActive)),
                    s
                );
            }),
            m = useEvent(() => {
                const t = a.current,
                    u = i.current,
                    n = e.getWrapperSize(),
                    r = e.getContainerSize();
                if (!(n && t && u && r)) return;
                const l = e.animationScroll.scrollPosition.get(),
                    c = Math.min(1, n / r),
                    d = clamp(0, 1, l / (r - n)),
                    E = (t.offsetHeight - calculateThumbSize(t, c)) * d;
                ((u.style.transform = `translateY(${0 | E}px)`),
                    ((e) => {
                        if (o.current && s.current && a.current && i.current) {
                            if (0 === Math.round(e))
                                return (
                                    o.current.classList.add(DISABLE_CLASS),
                                    void s.current.classList.remove(DISABLE_CLASS)
                                );
                            if (isBottomBoundThumb(a.current, i.current, e))
                                return (
                                    o.current.classList.remove(DISABLE_CLASS),
                                    void s.current.classList.add(DISABLE_CLASS)
                                );
                            (o.current.classList.remove(DISABLE_CLASS), s.current.classList.remove(DISABLE_CLASS));
                        }
                    })(E));
            }),
            A = useEvent(() => {
                handleContainer(e, () => {
                    (p(), m());
                });
            });
        (reactExports.useEffect(() => createLayoutReadyInEffect(A)),
            reactExports.useEffect(() => {
                const t = () => {
                    handleContainer(e, () => {
                        m();
                    });
                };
                let u = emptyFunction;
                const n = () => {
                    (u(), (u = createLayoutReadyInEffect(A)));
                };
                return (
                    e.events.on('recalculateContent', A),
                    e.events.on('rest', t),
                    e.events.on('change', t),
                    e.events.on('resizeHandled', n),
                    () => {
                        (u(),
                            e.events.off('recalculateContent', A),
                            e.events.off('rest', t),
                            e.events.off('change', t),
                            e.events.off('resizeHandled', n));
                    }
                );
            }, [e]),
            reactExports.useEffect(() => {
                if (!c.pending) return;
                const t = env.client.events.mouse.up(() => {
                        E(initDraggingState);
                    }),
                    u = env.client.events.mouse.move(([t]) => {
                        handleContainer(e, (u) => {
                            const r = a.current,
                                o = i.current,
                                s = e.getContainerSize();
                            if (!r || !o || !s) return;
                            const l = t.screenY - c.offset - r.getBoundingClientRect().y,
                                d = (l / r.offsetHeight) * s;
                            (e.scrollPosition.start({
                                scrollPosition: e.clampPosition(u, d),
                                reset: !0,
                                immediate: !0,
                                from: { scrollPosition: u.scrollTop },
                            }),
                                n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: d }));
                        });
                    });
                return () => {
                    (t(), u());
                };
            }, [e, c.offset, c.pending, n, E]));
        const [f, F] = useRepeatCallback((t) => e.applyStepTo(t), l, [e]);
        reactExports.useEffect(
            () => (document.addEventListener('mouseup', F, !0), () => document.removeEventListener('mouseup', F, !0)),
            [F],
        );
        const h = (e) => {
            e.target.classList.contains(DISABLE_CLASS) || playSound$1('highlight');
        };
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$5.base, t.base),
            ref: r,
            onWheel: e.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$5.topButton, t.topButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS) ||
                            e.button !== MOUSE_BUTTON_LEFT ||
                            (playSound$1('play'), f(Direction.Next));
                    },
                    ref: o,
                    onMouseEnter: h,
                }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$5.track, t.track),
                    onMouseDown: (t) => {
                        const n = i.current;
                        if (n && t.button === MOUSE_BUTTON_LEFT)
                            if ((playSound$1('play'), t.target === n))
                                E({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                            else {
                                ((t) => {
                                    i.current &&
                                        handleContainer(e, (n) => {
                                            if (!n) return;
                                            const r = u(e),
                                                o = e.clampPosition(n, n.scrollTop + r * t);
                                            e.applyScroll(o);
                                        });
                                })(t.screenY > n.getBoundingClientRect().y ? Direction.Prev : Direction.Next);
                            }
                    },
                    ref: a,
                    onMouseEnter: h,
                    children: [
                        jsxRuntimeExports.jsx('div', { ref: i, className: cx(styles$5.thumb, t.thumb) }),
                        jsxRuntimeExports.jsx('div', { className: cx(styles$5.rail, t.rail) }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$5.bottomButton, t.bottomButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS) ||
                            e.button !== MOUSE_BUTTON_LEFT ||
                            (playSound$1('play'), f(Direction.Prev));
                    },
                    onMouseUp: F,
                    ref: s,
                    onMouseEnter: h,
                }),
            ],
        });
    },
    Bar = reactExports.memo(BarFC),
    content$1 = 'Verticalscroll_content_848080fa',
    defaultScroll = 'Verticalscroll_defaultScroll_5f9d259',
    area = 'Verticalscroll_area_39a5f7ae',
    styles$4 = { content: content$1, defaultScroll: defaultScroll, area: area },
    DefaultScroll = ({
        children: e,
        api: t,
        className: u,
        barClassNames: n,
        areaClassName: r,
        scrollClassName: o,
        scrollClassNames: s,
        getStepByRailClick: a,
        onDrag: i,
    }) => {
        const l = reactExports.useMemo(() => {
                const e = n || {};
                return { ...e, base: cx(styles$4.base, e.base) };
            }, [n]),
            c = reactExports.useMemo(() => ({ ...t, handleMouseWheel: () => {} }), [t]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$4.defaultScroll, u),
            onWheel: t.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$4.area, r),
                    children: jsxRuntimeExports.jsx(Area, { className: o, classNames: s, api: c, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar, { getStepByRailClick: a, api: t, onDrag: i, classNames: l }),
            ],
        });
    },
    Area = ({ className: e, classNames: t, children: u, api: n }) => (
        reactExports.useEffect(() => createLayoutReadyInEffect(n.recalculateContent)),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$4.base, e),
            ref: n.wrapperRef,
            onWheel: n.handleMouseWheel,
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$4.content, null == t ? void 0 : t.content),
                ref: n.contentRef,
                children: u,
            }),
        })
    );
Area.Default = DefaultScroll;
const Vertical = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                Area: Area,
                Bar: Bar,
                Default: DefaultScroll,
                useVerticalScrollApi: useVerticalScrollApi,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    Scroll = { Vertical: Vertical };
var Alignment = ((e) => ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e))(Alignment || {});
function format(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function snakeToCamel(e) {
    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
}
const convertNbsp = (e) => e.replace(/&nbsp;/g, ' '),
    addSeparatorToRight = (e, t, u) => {
        if (u % 2) {
            const u = e.pop();
            return [...e, u + t];
        }
        return [...e, t];
    },
    addSeparatorToLeft = (e, t, u) => {
        if (0 === u) return [t];
        if (u % 2) return [...e, ' ' === t ? ' ' : t];
        {
            const u = e.pop();
            return [...e, u + t];
        }
    },
    splitAndFormat = (e, t, u = 0) => e.split(t).reduce(0 === u ? addSeparatorToRight : addSeparatorToLeft, []),
    splitEuropean = (e, t = 0) => {
        let u = [];
        const n = new RegExp(
                '(?<=[a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10D0-\\u10FA\\u10FD-\\u10FF\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7F6\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB68\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u{10428}-\\u{1044F}\\u{104D8}-\\u{104FB}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{10CC0}-\\u{10CF2}\\u{118C0}-\\u{118DF}\\u{16E60}-\\u{16E7F}\\u{1D41A}-\\u{1D433}\\u{1D44E}-\\u{1D454}\\u{1D456}-\\u{1D467}\\u{1D482}-\\u{1D49B}\\u{1D4B6}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D4CF}\\u{1D4EA}-\\u{1D503}\\u{1D51E}-\\u{1D537}\\u{1D552}-\\u{1D56B}\\u{1D586}-\\u{1D59F}\\u{1D5BA}-\\u{1D5D3}\\u{1D5EE}-\\u{1D607}\\u{1D622}-\\u{1D63B}\\u{1D656}-\\u{1D66F}\\u{1D68A}-\\u{1D6A5}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6E1}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D71B}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D755}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D78F}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7C9}\\u{1D7CB}\\u{1DF00}-\\u{1DF09}\\u{1DF0B}-\\u{1DF1E}\\u{1E922}-\\u{1E943}])(\\x2D)(?=[a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10D0-\\u10FA\\u10FD-\\u10FF\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7F6\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB68\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u{10428}-\\u{1044F}\\u{104D8}-\\u{104FB}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{10CC0}-\\u{10CF2}\\u{118C0}-\\u{118DF}\\u{16E60}-\\u{16E7F}\\u{1D41A}-\\u{1D433}\\u{1D44E}-\\u{1D454}\\u{1D456}-\\u{1D467}\\u{1D482}-\\u{1D49B}\\u{1D4B6}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D4CF}\\u{1D4EA}-\\u{1D503}\\u{1D51E}-\\u{1D537}\\u{1D552}-\\u{1D56B}\\u{1D586}-\\u{1D59F}\\u{1D5BA}-\\u{1D5D3}\\u{1D5EE}-\\u{1D607}\\u{1D622}-\\u{1D63B}\\u{1D656}-\\u{1D66F}\\u{1D68A}-\\u{1D6A5}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6E1}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D71B}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D755}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D78F}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7C9}\\u{1D7CB}\\u{1DF00}-\\u{1DF09}\\u{1DF0B}-\\u{1DF1E}\\u{1E922}-\\u{1E943}])',
                'gu',
            ),
            r = convertNbsp(e);
        return (splitAndFormat(r, /( )/, t).forEach((e) => (u = u.concat(splitAndFormat(e, n, 0)))), u);
    },
    splitChinese = (() => {
        const e = new RegExp(
            [
                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
            ]
                .map((e) => e.source)
                .join('|'),
            'gum',
        );
        return (t) =>
            t
                .replace(/&nbsp;/g, ' ')
                .replace(/ /g, ' ')
                .match(e);
    })(),
    CHINESE_LANGUAGE_CODES = ['zh_cn', 'zh_sg', 'zh_tw'],
    splitWords = (e, t = 0) => {
        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
        if (CHINESE_LANGUAGE_CODES.includes(u)) return splitChinese(e);
        if ('ja' === u) {
            return loadDefaultJapaneseParser()
                .parse(e)
                .map((e) => convertNbsp(e));
        }
        return splitEuropean(e, t);
    },
    formatString = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : splitWords(e, t))),
    base$3 = 'Formattext_bb80854d',
    styles$3 = { base: base$3 },
    FormatText = ({ binding: e, text: t = '', classMix: u, alignment: n = Alignment.left, formatWithBrackets: r }) => {
        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
        const o = r && e ? format(t, e) : t;
        return jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: o
                .split('\n')
                .map((t, r) =>
                    jsxRuntimeExports.jsx(
                        'div',
                        {
                            className: cx(styles$3.base, u),
                            children: formatString(t, n, e).map((e, t) =>
                                jsxRuntimeExports.jsx(reactExports.Fragment, { children: e }, `${t}-${e}`),
                            ),
                        },
                        `${t}-${r}`,
                    ),
                ),
        });
    },
    getFromCallStack = (e = 1) => {
        var t;
        const u = new Error().stack;
        let n,
            r = R.invalid('resId'),
            o = '';
        return (
            u &&
                ((o = (null == (t = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : t[0]) || ''),
                (n = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                window.__feature && window.__feature !== n && window.subViews[n] && (r = window.subViews[n].id)),
            { callerUrl: o, caller: n, stack: u, resId: r }
        );
    },
    SHOW_DELAY_MIN = 100,
    SHOW_DELAY_DEFAULT = 400;
function getViewEventArguments(e) {
    return Object.entries(e || {}).map(([e, t]) => {
        const u = { __Type: 'GFValueProxy', name: e };
        switch (typeof t) {
            case 'number':
                u.number = t;
                break;
            case 'boolean':
                u.bool = t;
                break;
            case 'undefined':
                break;
            default:
                u.string = t.toString();
        }
        return u;
    });
}
const handleViewEvent = (e, t, u = {}, n = 0) => {
        viewEnv.handleViewEvent({
            __Type: 'GFViewEventProxy',
            type: ViewEventType.TOOLTIP,
            contentID: e,
            decoratorID: t,
            targetID: n,
            ...u,
        });
    },
    Tooltip$1 = ({
        children: e,
        contentId: t,
        args: u,
        onMouseEnter: n,
        onMouseLeave: r,
        onMouseDown: o,
        onClick: s,
        ignoreShowDelay: a = !1,
        ignoreMouseClick: i = !1,
        decoratorId: l = 0,
        isEnabled: c = !0,
        targetId: d = 0,
        onShow: E,
        onHide: p,
        ...m
    }) => {
        const A = reactExports.useRef({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
            f = reactExports.useMemo(() => d || getFromCallStack().resId, [d]),
            F = reactExports.useCallback(() => {
                (A.current.isVisible && A.current.timeoutId) ||
                    (handleViewEvent(t, l, { isMouseEvent: !0, on: !0, arguments: getViewEventArguments(u) }, f),
                    E && E(),
                    (A.current.isVisible = !0));
            }, [t, l, u, f, E]),
            h = reactExports.useCallback(() => {
                if (A.current.isVisible || A.current.timeoutId) {
                    const e = A.current.timeoutId;
                    (e > 0 && (clearTimeout(e), (A.current.timeoutId = 0)),
                        handleViewEvent(t, l, { on: !1 }, f),
                        A.current.isVisible && p && p(),
                        (A.current.isVisible = !1));
                }
            }, [t, l, f, p]),
            g = reactExports.useCallback((e) => {
                A.current.isVisible &&
                    ((A.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                    (A.current.hideTimerId = window.setTimeout(() => {
                        const t = document.elementFromPoint(e.clientX, e.clientY);
                        t && !t.isSameNode(A.current.prevTarget) && h();
                    }, 200)));
            }, []);
        (reactExports.useEffect(() => {
            const e = A.current.hideTimerId;
            return (
                document.addEventListener('wheel', g, { capture: !0 }),
                () => {
                    (document.removeEventListener('wheel', g, { capture: !0 }), e && window.clearTimeout(e));
                }
            );
        }, []),
            reactExports.useEffect(() => {
                !1 === c && h();
            }, [c, h]),
            reactExports.useEffect(
                () => (
                    window.addEventListener('mouseleave', h),
                    () => {
                        (window.removeEventListener('mouseleave', h), h());
                    }
                ),
                [h],
            ));
        return c
            ? reactExports.cloneElement(e, {
                  onMouseEnter:
                      ((_ = e.props.onMouseEnter),
                      (e) => {
                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                              (clearTimeout(A.current.timeoutId),
                              (A.current.timeoutId = window.setTimeout(F, a ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT)),
                              n && n(e),
                              _ && _(e));
                      }),
                  onMouseLeave: ((e) => (t) => {
                      (h(), null == r || r(t), null == e || e(t));
                  })(e.props.onMouseLeave),
                  onClick: ((e) => (t) => {
                      (!1 === i && h(), null == s || s(t), null == e || e(t));
                  })(e.props.onClick),
                  onMouseDown: ((e) => (t) => {
                      (!1 === i && h(), null == o || o(t), null == e || e(t));
                  })(e.props.onMouseDown),
                  ...m,
              })
            : e;
        var _;
    },
    Slot = React.forwardRef((e, t) => {
        const { children: u, ...n } = e,
            r = React.Children.toArray(u),
            o = r.find(isSlottable);
        if (o) {
            const e = o.props.children,
                u = r.map((t) =>
                    t === o
                        ? React.Children.count(e) > 1
                            ? React.Children.only(null)
                            : React.isValidElement(e)
                              ? e.props.children
                              : null
                        : t,
                );
            return jsxRuntimeExports.jsx(SlotClone, {
                ...n,
                ref: t,
                children: React.isValidElement(e) ? React.cloneElement(e, void 0, u) : null,
            });
        }
        return jsxRuntimeExports.jsx(SlotClone, { ...n, ref: t, children: u });
    });
Slot.displayName = 'Slot';
const SlotClone = React.forwardRef((e, t) => {
    const { children: u, ...n } = e;
    if (React.isValidElement(u)) {
        const e = getElementRef(u),
            r = mergeProps(n, u.props);
        return (u.type !== React.Fragment && (r.ref = t ? assignRefs([t, e]) : e), React.cloneElement(u, r));
    }
    return (console.warn('Invalid children', u), null);
});
SlotClone.displayName = 'SlotClone';
const Slottable = ({ children: e }) => jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: e });
function isSlottable(e) {
    return React.isValidElement(e) && e.type === Slottable;
}
function mergeProps(e, t) {
    const u = { ...e, ...t };
    for (const n in t) {
        const r = e[n],
            o = t[n];
        n.startsWith('on')
            ? r && o
                ? (u[n] = (...e) => {
                      (o(...e), r(...e));
                  })
                : r && (u[n] = r)
            : 'style' === n
              ? (u[n] = { ...r, ...o })
              : 'className' === n && (u[n] = [r, o].filter(Boolean).join(' '));
    }
    return u;
}
function getElementRef(e) {
    return e.props.ref || e.ref;
}
function useParamTooltipApadter(e) {
    return useParamTooltip(e.type, e.args, e.params);
}
function useWulfTooltipAdapter(e) {
    return useWulfTooltip(e.tooltipId, e.args, e.params);
}
function useSpecialTooltipAdapter(e) {
    return useSpecialTooltip(e.tooltipId, e.args, e.params);
}
function createTooltipComponent(e, t) {
    function u({ asChild: t, params: u, disabled: n, ...r }) {
        const o = t ? Slot : 'div',
            s = e(n ? { ...u, disabled: n } : u);
        return jsxRuntimeExports.jsx(o, { ...r, ...s });
    }
    return ((u.displayName = t), u);
}
const Tooltip = createTooltipComponent(useTooltip, 'Tooltip');
(createTooltipComponent(useSimpleTooltip, 'SimpleTooltip'),
    createTooltipComponent(useParamTooltipApadter, 'ParamsTooltip'),
    createTooltipComponent(useWulfTooltipAdapter, 'WulfTooltip'),
    createTooltipComponent(useSpecialTooltipAdapter, 'SpecialTooltip'),
    createTooltipComponent(useBackdropTooltip, 'BackportTooltip'));
const getRegionalDateTime = RegionalDateTime.getRegionalDateTime,
    getFormattedDateTime = RegionalDateTime.getFormattedDateTime,
    DateTime = ({ datetime: e, format: t = DateTimeFormatsEnum.ShortDate, isConvertedToLocal: u = !0 }) =>
        Object.values(DateTimeFormatsEnum).includes(t) ? getRegionalDateTime(e, t, u) : getFormattedDateTime(e, t, u),
    DateTime$1 = reactExports.memo(DateTime),
    useMount = (e) => {
        reactExports.useEffect(e, []);
    },
    useUnmount = (e) => {
        reactExports.useEffect(() => e, []);
    },
    NO_RAF_ID = 0;
function useSkipFrame() {
    const e = reactExports.useRef(NO_RAF_ID);
    return (
        useUnmount(() => {
            window.cancelAnimationFrame(e.current);
        }),
        reactExports.useMemo(
            () => ({
                run: (t) => {
                    (window.cancelAnimationFrame(e.current),
                        (e.current = window.requestAnimationFrame(() => {
                            e.current = window.requestAnimationFrame(() => {
                                ((e.current = NO_RAF_ID), t());
                            });
                        })));
                },
                clear: () => {
                    (window.cancelAnimationFrame(e.current), (e.current = NO_RAF_ID));
                },
                get isRunning() {
                    return e.current !== NO_RAF_ID;
                },
            }),
            [],
        )
    );
}
const root$2 = 'Tooltipdecorator_root_a254689f',
    base$2 = 'Tooltipdecorator_ea72f443',
    decorator = 'Tooltipdecorator_decorator_3580e101',
    fadeIn$2 = 'Tooltipdecorator_fadeIn_a254689f',
    styles$2 = {
        root: root$2,
        base: base$2,
        'base__theme-default': 'Tooltipdecorator_base__theme-default_a254689f',
        decorator: decorator,
        fadeIn: fadeIn$2,
    },
    TooltipDecorator = React.forwardRef(function ({ children: e, className: t, theme: u = 'default', ...n }, r) {
        const o = useSkipFrame(),
            s = React.useRef(null);
        return (
            useMount(() => {
                o.run(() => {
                    const e = s.current;
                    if (!e) return;
                    const t = e.scrollWidth,
                        u = e.scrollHeight;
                    env.view.resize(t, u);
                    const n = window.getComputedStyle(e);
                    env.view.setSidePaddingsRem({
                        left: parseInt(n.getPropertyValue('padding-left'), 10),
                        top: parseInt(n.getPropertyValue('padding-top'), 10),
                        right: parseInt(n.getPropertyValue('padding-right'), 10),
                        bottom: parseInt(n.getPropertyValue('padding-bottom'), 10),
                    });
                });
            }),
            jsxRuntimeExports.jsx('div', {
                ...n,
                className: cx(styles$2.base, styles$2[`base__theme-${u}`], t),
                ref: function (e) {
                    ((s.current = e), 'function' == typeof r ? r(e) : r && (r.current = e));
                },
                children: jsxRuntimeExports.jsx('div', { className: styles$2.decorator, children: e }),
            })
        );
    });
var RewardType = ((e) => (
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
    ))(RewardType || {}),
    ImageSize = ((e) => (
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
    ))(ImageSize || {});
(RewardType.Items,
    RewardType.Equipment,
    RewardType.Xp,
    RewardType.XpFactor,
    RewardType.Blueprints,
    RewardType.BlueprintsAny,
    RewardType.Goodies,
    RewardType.Berths,
    RewardType.Slots,
    RewardType.Tokens,
    RewardType.CrewSkins,
    RewardType.CrewBooks,
    RewardType.Customizations,
    RewardType.CreditsFactor,
    RewardType.TankmenXp,
    RewardType.TankmenXpFactor,
    RewardType.FreeXpFactor,
    RewardType.BattleToken,
    RewardType.LootBox,
    RewardType.PremiumUniversal,
    RewardType.NaturalCover,
    RewardType.BpCoin,
    RewardType.BattlePassSelectToken,
    RewardType.BattlaPassFinalAchievement,
    RewardType.BattleBadge,
    RewardType.BonusX5,
    RewardType.CrewBonusX3,
    RewardType.EpicSelectToken,
    RewardType.Comp7TokenWeeklyReward,
    RewardType.DeluxeGift,
    RewardType.BattleBoosterGift,
    RewardType.OptionalDevice,
    RewardType.Gold,
    RewardType.Credits,
    RewardType.Crystal,
    RewardType.FreeXp,
    RewardType.BattlePassPoints,
    RewardType.EquipCoin,
    RewardType.PremiumPlus,
    RewardType.Premium,
    ImageSize.Small,
    ImageSize.Big);
const formatPrintf = (e, t) =>
    e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
        const u = 0 === e.indexOf('%') ? 2 : 1;
        return String(t[e.slice(u, -u)]);
    });
var MOUSE_BUTTON_CODES = ((e) => (
        (e[(e.LEFT = 0)] = 'LEFT'),
        (e[(e.WHEEL = 1)] = 'WHEEL'),
        (e[(e.RIGHT = 2)] = 'RIGHT'),
        (e[(e.FOURTH = 3)] = 'FOURTH'),
        (e[(e.FIFTH = 4)] = 'FIFTH'),
        e
    ))(MOUSE_BUTTON_CODES || {}),
    CheckboxSize = ((e) => (
        (e.small = 'small'),
        (e.medium = 'medium'),
        (e.large = 'large'),
        (e.extraLarge = 'extraLarge'),
        e
    ))(CheckboxSize || {}),
    CheckboxType = ((e) => ((e.primary = 'primary'), (e.main = 'main'), e))(CheckboxType || {}),
    Alignments = ((e) => ((e.Center = 'center'), (e.Bottom = 'bottom'), e))(Alignments || {});
const root$1 = 'Checkbox_root_9586ffe2',
    base$1 = 'Checkbox_34261bfc',
    base__disabled$1 = 'Checkbox_base__disabled_17a50356',
    base__center = 'Checkbox_base__center_d5b50633',
    base__bottom = 'Checkbox_base__bottom_864995b5',
    input = 'Checkbox_input_76b1340a',
    base__mouseDown = 'Checkbox_base__mouseDown_9586ffe2',
    base__small = 'Checkbox_base__small_9586ffe2',
    base__medium = 'Checkbox_base__medium_9586ffe2',
    base__large = 'Checkbox_base__large_9586ffe2',
    base__extraLarge = 'Checkbox_base__extraLarge_9586ffe2',
    alertOverlay = 'Checkbox_alertOverlay_8a153d73',
    base__alert = 'Checkbox_base__alert_9586ffe2',
    blink = 'Checkbox_blink_9586ffe2',
    base__checked = 'Checkbox_base__checked_9586ffe2',
    inputHoverOverlay = 'Checkbox_inputHoverOverlay_1f162a0d',
    highlight = 'Checkbox_highlight_801ca234',
    base__main = 'Checkbox_base__main_9586ffe2',
    base__primary = 'Checkbox_base__primary_9586ffe2',
    checkmark = 'Checkbox_checkmark_193f547b',
    fadeIn$1 = 'Checkbox_fadeIn_9586ffe2',
    label = 'Checkbox_label_53c1ae18',
    labelContent = 'Checkbox_labelContent_ce7b9889',
    styles$1 = {
        root: root$1,
        base: base$1,
        base__disabled: base__disabled$1,
        base__center: base__center,
        base__bottom: base__bottom,
        input: input,
        base__mouseDown: base__mouseDown,
        base__small: base__small,
        base__medium: base__medium,
        base__large: base__large,
        base__extraLarge: base__extraLarge,
        alertOverlay: alertOverlay,
        base__alert: base__alert,
        blink: blink,
        base__checked: base__checked,
        inputHoverOverlay: inputHoverOverlay,
        highlight: highlight,
        base__main: base__main,
        base__primary: base__primary,
        checkmark: checkmark,
        fadeIn: fadeIn$1,
        label: label,
        labelContent: labelContent,
    },
    Checkbox = ({
        id: e,
        isChecked: t = !1,
        isDisabled: u = !1,
        isAlert: n = !1,
        size: r = CheckboxSize.medium,
        type: o = CheckboxType.primary,
        soundHover: s = 'highlight',
        soundClick: a = 'play',
        onMouseEnter: i,
        onMouseLeave: l,
        onMouseUp: c,
        onMouseDown: d,
        onClick: E,
        onChange: p,
        onFocus: m,
        onBlur: A,
        text: f,
        contentStyles: F,
        children: h,
        alignment: g,
        ..._
    }) => {
        const [D, C] = reactExports.useState(!1),
            [b, B] = reactExports.useState(!1),
            y = reactExports.useCallback(
                (e) => {
                    u || (p && p(), E && E(e));
                },
                [u, p, E],
            ),
            v = reactExports.useCallback(
                (e) => {
                    const t = e.button === MOUSE_BUTTON_CODES.LEFT;
                    u || (t && C(!0), t && d && d(e), a && playSound$1(a));
                },
                [u, d, a],
            ),
            x = reactExports.useCallback(
                (e) => {
                    u || (C(!1), c && c(e));
                },
                [u, c],
            ),
            w = reactExports.useCallback(
                (e) => {
                    u || (i && i(e), s && playSound$1(s));
                },
                [u, i, s],
            ),
            T = reactExports.useCallback(
                (e) => {
                    u || (C(!1), l && l(e));
                },
                [u, l],
            ),
            S = reactExports.useCallback(
                (e) => {
                    u || (B(!0), m && m(e));
                },
                [u, m],
            ),
            R = reactExports.useCallback(
                (e) => {
                    u || (B(!1), A && A(e));
                },
                [u, A],
            ),
            $ = jsxRuntimeExports.jsx('div', {
                className: styles$1.label,
                children: jsxRuntimeExports.jsx('div', {
                    className: cx(styles$1.labelContent, 's-labelContent'),
                    style: F,
                    children: f || h,
                }),
            });
        return jsxRuntimeExports.jsxs('div', {
            id: e,
            className: cx(styles$1.base, styles$1[`base__${r}`], styles$1[`base__${o}`], {
                [styles$1.base__checked]: t,
                [styles$1.base__disabled]: u,
                [styles$1.base__mouseDown]: D,
                [styles$1.base__alert]: n,
                [styles$1.base__center]: g === Alignments.Center,
                [styles$1.base__bottom]: g === Alignments.Bottom,
            }),
            onClick: y,
            onMouseEnter: w,
            onMouseLeave: T,
            onMouseDown: v,
            onMouseUp: x,
            onFocus: S,
            onBlur: R,
            ..._,
            children: [
                jsxRuntimeExports.jsxs('div', {
                    className: styles$1.input,
                    children: [
                        jsxRuntimeExports.jsx('div', { className: styles$1.alertOverlay }),
                        jsxRuntimeExports.jsx('div', { className: styles$1.inputHoverOverlay }),
                        jsxRuntimeExports.jsx('div', { className: styles$1.highlight }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', { className: styles$1.checkmark }),
                ((f || h) && $) || null,
            ],
        });
    };
function noop$1() {}
function requestAnimationFrameLoop(e) {
    let t = 0;
    return [
        function u() {
            (e(), (t = requestAnimationFrame(u)));
        },
        function () {
            cancelAnimationFrame(t);
        },
    ];
}
const DEFAULT_NAME_KEYFRAME = 'Point',
    THRESHOLD = 0.02,
    VideoForwarded = reactExports.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: u = !1,
            style: n,
            loop: r = !1,
            isPrebufferKeyframes: o,
            keyframesNameConfig: s,
            onClick: a,
            ...i
        },
        l,
    ) {
        const c = l,
            d = reactExports.useRef(null);
        return (
            useMount(() =>
                env.view.events.onDisplayChanged((e, t) => {
                    var u, n;
                    (t === displayStatus.hidden && (null == (u = d.current) || u.pause()),
                        t === displayStatus.shown && (null == (n = d.current) || n.play()));
                }),
            ),
            reactExports.useEffect(
                () =>
                    createLayoutReadyInEffect(() => {
                        const e = d.current;
                        if (!c || !e || !o) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps();
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  null == e || e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [o, c],
            ),
            reactExports.useEffect(() => {
                if (c && d.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: noop$1 },
                        t = () => {
                            let t = 0;
                            const [u, n] = requestAnimationFrameLoop(() => {
                                if (d.current) {
                                    const { currentTime: u, duration: n } = d.current;
                                    if (
                                        (t !== u &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: u, duration: n })),
                                            (t = u)),
                                        d.current.paused || !c || !o)
                                    )
                                        return;
                                    const r = d.current.cohGetKeyframeTimestamps();
                                    r.forEach((t, n) => {
                                        u > r[n] - THRESHOLD &&
                                            u < r[n] &&
                                            e.changeKeyframeHandlers.forEach((e) => {
                                                const u = Object.keys(s ?? {})[n];
                                                return e({
                                                    time: t,
                                                    name: `${s ? u : `${DEFAULT_NAME_KEYFRAME}_${n}`}`,
                                                });
                                            });
                                    });
                                }
                            });
                            return (u(), n);
                        };
                    e.changeTimeLoop = t();
                    const u = (t) => (
                            e.changeTimeHandlers.push(t),
                            () => {
                                const { changeTimeHandlers: u } = e,
                                    n = u.indexOf(t);
                                n < 0
                                    ? console.warn("Can't unsubscribe changeTimeHandler, this reference was not found")
                                    : u.splice(n, 1);
                            }
                        ),
                        n = (t) => (
                            e.changeKeyframeHandlers.push(t),
                            () => {
                                const { changeKeyframeHandlers: u } = e,
                                    n = u.indexOf(t);
                                n < 0
                                    ? console.warn(
                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                      )
                                    : u.splice(n, 1);
                            }
                        ),
                        r = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.currentTime;
                        },
                        a = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.duration;
                        },
                        i = (e) => {
                            d.current && (d.current.currentTime = clamp(0, d.current.duration, e));
                        },
                        l = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.play();
                        },
                        E = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.pause();
                        },
                        p = () => {
                            (E(), i(0));
                        },
                        m = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps()) ?? [];
                        },
                        A = (e) => {
                            (i(e), l());
                        },
                        f = (e) => {
                            (i(e), E());
                        },
                        F = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        h = (e, t) => {
                            var u;
                            return (
                                null == (u = d.current) || u.addEventListener(e, t),
                                () => {
                                    var u;
                                    return null == (u = d.current) ? void 0 : u.removeEventListener(e, t);
                                }
                            );
                        },
                        g = (e, t) => {
                            var u;
                            return (
                                null == (u = d.current) || u.removeEventListener(e, t),
                                () => {
                                    var u;
                                    return null == (u = d.current) ? void 0 : u.removeEventListener(e, t);
                                }
                            );
                        };
                    return (
                        (c.current = {
                            on: h,
                            off: g,
                            play: l,
                            pause: E,
                            stop: p,
                            cleanup: F,
                            getCurrentTime: r,
                            getDuration: a,
                            getCachedKeyframes: m,
                            goToAndPlay: A,
                            goToAndStop: f,
                            setCurrentTime: i,
                            domRef: d.current,
                            onChangeTime: u,
                            onKeyframes: n,
                        }),
                        () => {
                            (F(), (c.current = null));
                        }
                    );
                }
            }, [s, c, o]),
            reactExports.useEffect(() => {
                d.current && u && d.current.play();
            }, [u, r]),
            reactExports.useEffect(() => {
                if (d.current)
                    return () => {
                        d.current && d.current.pause();
                    };
            }, []),
            jsxRuntimeExports.jsx('video', { src: e, className: t, style: n, loop: r, ref: d, onClick: a, ...i })
        );
    }),
    Video = reactExports.memo(VideoForwarded),
    BackportTooltip = ({ children: e, ...t }) =>
        jsxRuntimeExports.jsx(Tooltip$1, {
            contentId: R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
            ignoreShowDelay: !0,
            ...t,
            children: e,
        }),
    UB_SIMPLE_TOOLTIPS = R.views.common.tooltip_window.simple_tooltip_content,
    getTooltipContentId = (e) =>
        e ? UB_SIMPLE_TOOLTIPS.SimpleTooltipHtmlContent('resId') : UB_SIMPLE_TOOLTIPS.SimpleTooltipContent('resId'),
    SimpleTooltip = ({ children: e, body: t, header: u, note: n, alert: r, args: o, ...s }) => {
        const a = reactExports.useMemo(() => {
            const e = { ...o, body: t, header: u, note: n, alert: r };
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
        }, [r, t, u, n, o]);
        return jsxRuntimeExports.jsx(Tooltip$1, {
            contentId: getTooltipContentId(null == o ? void 0 : o.hasHtmlContent),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: a,
            ...s,
            children: e,
        });
    },
    DynamicTooltipWrapper = ({ children: e, tooltipArgs: t, className: u }) => {
        if (!t) return e;
        const n = jsxRuntimeExports.jsx('div', { className: u, children: e });
        if (t.header || t.body) return jsxRuntimeExports.jsx(SimpleTooltip, { ...t, children: n });
        const { contentId: r } = t;
        return r
            ? jsxRuntimeExports.jsx(Tooltip$1, { ...t, contentId: r, children: n })
            : jsxRuntimeExports.jsx(BackportTooltip, { ...t, children: n });
    };
var ToggleType = ((e) => ((e.Button = 'button'), (e.Slot = 'slot'), e))(ToggleType || {});
const root = 'Togglebutton_root_f4d0260c',
    base = 'Togglebutton_72662c06',
    base__button = 'Togglebutton_base__button_f4d0260c',
    base__active = 'Togglebutton_base__active_6663dd5a',
    base__slot = 'Togglebutton_base__slot_c531f740',
    base__disabled = 'Togglebutton_base__disabled_370b3eae',
    texture = 'Togglebutton_texture_35a0d55f',
    background = 'Togglebutton_background_ccc205c8',
    background__main = 'Togglebutton_background__main_a7196ff',
    background__primary = 'Togglebutton_background__primary_5f307128',
    background__primaryGreen = 'Togglebutton_background__primaryGreen_851a393c',
    background__primaryRed = 'Togglebutton_background__primaryRed_45a210f0',
    background__secondary = 'Togglebutton_background__secondary_b0f1e06b',
    background__ghost = 'Togglebutton_background__ghost_1d9696c3',
    content = 'Togglebutton_content_7f15f696',
    overlay = 'Togglebutton_overlay_c896566e',
    indicator = 'Togglebutton_indicator_f5be1a8b',
    fadeIn = 'Togglebutton_fadeIn_f4d0260c',
    styles = {
        root: root,
        base: base,
        base__button: base__button,
        base__active: base__active,
        base__slot: base__slot,
        base__disabled: base__disabled,
        texture: texture,
        background: background,
        background__main: background__main,
        background__primary: background__primary,
        background__primaryGreen: background__primaryGreen,
        background__primaryRed: background__primaryRed,
        background__secondary: background__secondary,
        background__ghost: background__ghost,
        content: content,
        overlay: overlay,
        indicator: indicator,
        fadeIn: fadeIn,
    },
    noop = () => {},
    ToggleButton = ({
        active: e = !1,
        className: t,
        children: u,
        toggleType: n = ToggleType.Button,
        toggleButtonType: r = ButtonType.secondary,
        onClick: o,
        disabled: s,
        soundClick: a = 'play',
        soundHover: i = 'highlight',
        onMouseEnter: l = noop,
        onMouseDown: c = noop,
        onMouseUp: d = noop,
        onMouseLeave: E = noop,
    }) => {
        const p = reactExports.useCallback(
                (t) => {
                    s || (playSound$1(a), o && o(t, e));
                },
                [o, s, e, a],
            ),
            m = reactExports.useCallback(
                (e) => {
                    s || (playSound$1(i), l && l(e));
                },
                [s, i, l],
            ),
            A = reactExports.useCallback(
                (e) => {
                    s || ((1 !== e.button && 2 !== e.button) || (null !== a && playSound$1(a)), c && c(e));
                },
                [c, s, a],
            ),
            f = cx(styles.base, t, styles[`base__${n}`], e && styles.base__active, s && styles.base__disabled);
        return jsxRuntimeExports.jsxs('div', {
            className: f,
            onClick: p,
            onMouseEnter: m,
            onMouseUp: s ? noop : d,
            onMouseDown: A,
            onMouseLeave: s ? noop : E,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles.content, children: u }),
                n === ToggleType.Button &&
                    jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [
                            jsxRuntimeExports.jsx('div', {
                                className: cx(styles.background, styles[`background__${r}`]),
                            }),
                            jsxRuntimeExports.jsx('div', { className: styles.texture }),
                        ],
                    }),
                jsxRuntimeExports.jsx('div', { className: styles.overlay }),
                jsxRuntimeExports.jsx('div', { className: styles.indicator }),
            ],
        });
    },
    ToggleButton$1 = React.memo(ToggleButton);
export {
    breakpointsByType as $,
    noop$2 as A,
    ButtonSize as B,
    CButton as C,
    DateTime$1 as D,
    TooltipDecorator as E,
    FormatText$1 as F,
    useCountdown as G,
    getTimeUnits as H,
    ImageSize$1 as I,
    format$1 as J,
    slice as K,
    lastIndex as L,
    formatPrintf as M,
    convertNbsp$1 as N,
    getSize$2 as O,
    graphicsQuality$1 as P,
    useThrottle$1 as Q,
    RewardType$1 as R,
    SoundsProvider as S,
    TextButton as T,
    useKeydownListener as U,
    ToggleButton$1 as V,
    ToggleType as W,
    keyCodes as X,
    useMedia as Y,
    createTimeoutInEffect as Z,
    CheckboxSize as _,
    getRewardValueType as a,
    unsafeGet as a0,
    easings as a1,
    useLoop as a2,
    Video as a3,
    useSimpleTooltip as a4,
    DynamicTooltipWrapper as a5,
    ClickOutsideManager as a6,
    Base as a7,
    useVerticalScroll as a8,
    useEvent$1 as a9,
    Area$1 as aa,
    Bar$1 as ab,
    toRoman as ac,
    MediaSize as ad,
    snakeToCamel as ae,
    useEmitter$1 as af,
    useTimeout as ag,
    useSkipFrame$1 as ah,
    useMount$1 as ai,
    normalizeResource as aj,
    Checkbox as ak,
    CheckboxType as al,
    useScreenSize as am,
    SoundsRClassProvider as an,
    concatWithPath as ao,
    logBySeverity$1 as ap,
    ImagesRClassProvider as aq,
    getFormattedValue as b,
    constFalse as c,
    useCallbackOnEsc as d,
    ButtonType as e,
    findIndex as f,
    get as g,
    find as h,
    initializeModelWithContext as i,
    resources as j,
    FormatText as k,
    Tooltip$1 as l,
    map as m,
    play$1 as n,
    Tooltip as o,
    push as p,
    some as q,
    runView as r,
    set as s,
    reduce as t,
    useTooltip as u,
    DateTimeFormatsEnum as v,
    useVerticalScrollApi as w,
    Scroll as x,
    usePrevious as y,
    createLayoutReadyInEffect$1 as z,
};
