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
    e as action,
    r as reactExports,
    j as jsxRuntimeExports,
    f as cx,
    o as observable,
    u as untracked,
    R as React,
    g as client,
    h as cva,
    i as index,
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
class ImagesServerRedirectProvider {
    constructor(e) {
        (__publicField(this, 'prefix'),
            (this.EXT = e),
            (this.prefix = e ? `R.images.${e}.gui.maps.icons` : 'R.images.gui.maps.icons'));
    }
    has() {
        return !0;
    }
    read(e) {
        return `/${this.prefix}.${e}`;
    }
    readOr(e, t, u = 'silent') {
        return this.read(e);
    }
    readOrEmpty(e, t = 'warn') {
        return this.read(e);
    }
    readOrThrow(e) {
        return this.read(e);
    }
}
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
            s = readFromR$1(r, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === s ? ('silent' !== n && logBySeverity$1(`Resource not found: ${r}`, n), u()) : s;
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
var define_import_meta_env_default = {};
(resources.register({
    strings: asFunction(() => new StringsRClassProvider()).singleton(),
    images: asFunction(() => new ImagesRClassProvider(window.R.images.gui.maps.icons)).singleton(),
    atlases: asFunction(() => new ImagesRClassProvider(window.R.atlases)).singleton(),
    videos: asFunction(() => new VideosRClassProvider(window.R.videos)).singleton(),
    views: asClass(ViewsRClassProvider).singleton(),
    aliases: asClass(AliasesRClassProvider).singleton(),
    sounds: asClass(SoundsRClassProvider).singleton(),
    langCode: asValue(R.strings.settings.LANGUAGE_CODE()),
    intl: asValue(intl),
}),
    define_import_meta_env_default.VITE_HOT_LIVE_SERVER &&
        resources.register('images', asFunction(() => new ImagesServerRedirectProvider()).singleton()));
const HOURS_IN_DAY = 24,
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
function format(e, t) {
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
const onResize = makeEngineEvent$1('clientResized'),
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
                            s = internalMouse$1[t]((e) => u([e, 'outside']));
                        function o(e) {
                            u([e, 'inside']);
                        }
                        return (
                            window.addEventListener(r, o),
                            n(),
                            () => {
                                (s(), window.removeEventListener(r, o), (e.listeners -= 1), n());
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
function getSize$2(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
function playSound$1(e) {
    engine.call('PlaySound', e);
}
initMouseEvents$1();
const graphicsQuality = {
        isLow: () => 1 === viewEnv.getGraphicsQuality(),
        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
        get: () => viewEnv.getGraphicsQuality(),
    },
    sounds$1 = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays$1 = Object.keys(sounds$1).reduce((e, t) => ((e[t] = () => playSound$1(sounds$1[t])), e), {}),
    play = { ...plays$1, sound: playSound$1 },
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
    events$1 = {
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
function getSize$1(e = 'px') {
    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
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
function pipe(e, t, u, n, r, s, o, i, a) {
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
            return s(r(n(u(t(e)))));
        case 7:
            return o(s(r(n(u(t(e))))));
        case 8:
            return i(o(s(r(n(u(t(e)))))));
        case 9:
            return a(i(o(s(r(n(u(t(e))))))));
        default: {
            let e = arguments[0];
            for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
            return e;
        }
    }
}
function compose(e, t, u, n, r, s, o, i, a) {
    switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return function () {
                return t(e.apply(this, arguments));
            };
        case 3:
            return function () {
                return u(t(e.apply(this, arguments)));
            };
        case 4:
            return function () {
                return n(u(t(e.apply(this, arguments))));
            };
        case 5:
            return function () {
                return r(n(u(t(e.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return s(r(n(u(t(e.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return o(s(r(n(u(t(e.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return i(o(s(r(n(u(t(e.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return a(i(o(s(r(n(u(t(e.apply(this, arguments)))))))));
            };
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
var define_process_env_default = {};
function makeLoggerProxy(e, t = []) {
    return 'object' != typeof e || null === e
        ? e
        : new Proxy(e, {
              get: (e, u) => ('function' == typeof e[u] ? e[u].bind(e) : makeLoggerProxy(e[u], [...t, u])),
          });
}
const getRootDefault = (e) => (0 === e ? window : window.subViews.get(e));
function create(
    {
        initializer: e = !0,
        rootId: t = 0,
        getRoot: u = 'true' === define_process_env_default.PUBLIC_DEBUG_MODEL_ACCESS
            ? compose(getRootDefault, makeLoggerProxy)
            : getRootDefault,
        context: n = 'model',
    } = {},
    { name: r = 'DataLayer' } = {},
) {
    const s = new Map(),
        o = { subscribersNotified: new SimpleEmitter() },
        i = engine.whenReady.then(() => {
            function e(e, t, u) {
                (u.forEach((u) => {
                    const n = s.get(u);
                    void 0 !== n && n(e, t);
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
    function a() {
        try {
            const e = u(t);
            return n.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${r}. Root id: ${t}. Context: ${n}`);
        }
    }
    const l = (e) => {
        const u = a();
        if ('string' != typeof e || 0 === e.length) return u;
        try {
            return e.split('.').reduce((e, t) => {
                if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                const u = e[t];
                return 'function' == typeof u ? u.bind(e) : u;
            }, u);
        } catch (s) {
            throw new Error(`Failure readByPath in ${r}. Root id: ${t}. Context: ${n}:\n${s}\n`);
        }
    };
    function c(e) {
        viewEnv.removeDataChangedCallback(e, t) ? s.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (u, r) => {
            const o = addModelObserver$1('string' == typeof r ? `${n}.${r}` : n, t, !0);
            return (s.set(o, u), e && u(l(r), []), o);
        },
        readByPath: l,
        readSafeByPath: (e) => {
            const t = a();
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
            if (0 === t || ids().includes(t)) for (const e of s.keys()) c(e);
            i.then((e) => e());
        },
        unsubscribe: c,
        events: o,
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
function noop$1() {}
function identity(e) {
    return e;
}
function constFalse() {
    return !1;
}
class DisposeBuilder {
    constructor() {
        (__publicField(this, '_disposes', new Set()),
            __publicField(this, 'dispose', () => {
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
function addEventListener(e, t, u, n) {
    return (e.addEventListener(t, u, n), () => e.removeEventListener(t, u, n));
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((o.prototype.append = function (e, t) {
                ((e = r(e)), (t = s(t)));
                var u = this.map[e];
                (u || ((u = []), (this.map[e] = u)), u.push(t));
            }),
                (o.prototype.delete = function (e) {
                    delete this.map[r(e)];
                }),
                (o.prototype.get = function (e) {
                    var t = this.map[r(e)];
                    return t ? t[0] : null;
                }),
                (o.prototype.getAll = function (e) {
                    return this.map[r(e)] || [];
                }),
                (o.prototype.has = function (e) {
                    return this.map.hasOwnProperty(r(e));
                }),
                (o.prototype.set = function (e, t) {
                    this.map[r(e)] = [s(t)];
                }),
                (o.prototype.forEach = function (e) {
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
                (self.Headers = o),
                (self.Request = d),
                (self.Response = m),
                (self.fetch = function (t, u) {
                    var r;
                    return (
                        (r = d.prototype.isPrototypeOf(t) && !u ? t : new d(t, u)),
                        new fetch.Promise(function (t, u) {
                            var s = (function () {
                                return n && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function o() {
                                if (4 === s.readyState) {
                                    var e = 1223 === s.status ? 204 : s.status;
                                    if (e < 100 || e > 599) u(new TypeError('Network request failed'));
                                    else {
                                        var n = {
                                                status: e,
                                                statusText: s.statusText,
                                                headers: p(s),
                                                url:
                                                    'responseURL' in s
                                                        ? s.responseURL
                                                        : /^X-Request-URL:/m.test(s.getAllResponseHeaders())
                                                          ? s.getResponseHeader('X-Request-URL')
                                                          : void 0,
                                            },
                                            r = 'response' in s ? s.response : s.responseText;
                                        t(new m(r, n));
                                    }
                                }
                            }
                            ('cors' === r.credentials && (s.withCredentials = !0),
                                (s.onreadystatechange = o),
                                self.usingActiveXhr ||
                                    ((s.onload = o),
                                    (s.onerror = function () {
                                        u(new TypeError('Network request failed'));
                                    })),
                                s.open(r.method, r.url, !0),
                                'responseType' in s && e && (s.responseType = 'blob'),
                                r.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        s.setRequestHeader(e, t);
                                    });
                                }),
                                s.send(void 0 === r._bodyInit ? null : r._bodyInit));
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
        function s(e) {
            return ('string' != typeof e && (e = e.toString()), e);
        }
        function o(e) {
            this.map = {};
            var t = this;
            e instanceof o
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
        function i(e) {
            if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function a(e) {
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
            return (t.readAsArrayBuffer(e), a(t));
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
                              u = i(this);
                          if (u) return u;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), a(t));
                          if (this._bodyFormData) throw new Error('could not read FormData body as text');
                          return fetch.Promise.resolve(this._bodyText);
                      }))
                    : (this.text = function () {
                          var e = i(this);
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
                (this.headers = new o(t.headers)),
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
            var t = new o();
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
                (this.headers = t.headers instanceof o ? t.headers : new o(t.headers)),
                (this.url = t.url || ''));
        }
    })());
const keyCodes = { ENTER: 13, ESCAPE: 27, SPACE: 32 };
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
function find(e, t) {
    for (let u = 0; u < e.length; u++) {
        const n = unwrapItem(e[u]);
        if (t(n, u, e)) return n;
    }
}
function makeActions(e) {
    const t = {};
    for (const u in e)
        if (Object.prototype.hasOwnProperty.call(e, u)) {
            const n = e[u];
            t[u] = action(n);
        }
    return t;
}
function readByPath(e, t) {
    const u = e.split('.');
    let n = t;
    for (const r of u) n = null == n ? void 0 : n[r];
    return n;
}
function toPrimitive(e) {
    return Array.isArray(e)
        ? '<array>'
        : 'object' == typeof e
          ? '<object>'
          : 'function' == typeof e
            ? '<function>'
            : 'symbol' == typeof e
              ? '<symbol>'
              : e;
}
function shallowExtractPrimitives(e) {
    return Object.entries(e).reduce((e, [t, u]) => ((e[t] = toPrimitive(u)), e), {});
}
function createMockControls(...e) {
    return e.reduce(
        (e, t) => (
            (e[t] = (...e) =>
                e.length > 0
                    ? console.log('Call', t, 'with arguments', JSON.stringify(e.map(shallowExtractPrimitives), null, 2))
                    : console.log('Call', t, 'without arguments')),
            e
        ),
        {},
    );
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
};
function assert(e, t) {
    e || console.error(t || 'Assertion failed');
}
function mapRange(e, t, u) {
    return 'function' == typeof t
        ? _mapRange(0, e, t)
        : (assert(void 0 !== u, 'fn must be defined'), _mapRange(e, t, u));
}
function _mapRange(e, t, u) {
    const n = new Array(t - e);
    for (let r = e; r < t; r++) n[r] = u(r);
    return n;
}
assert.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const ROMAN_FORBIDDEN_LANGUAGE_CODES$1 = ['ko', 'no'];
ROMAN_FORBIDDEN_LANGUAGE_CODES$1.includes(resources.resolve('langCode'));
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
function splitChinese(e) {
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
function splitKorean(e) {
    const t = [],
        u = e
            .replace(/&nbsp;/g, ' ')
            .matchAll(
                /\s+|\u00A0|[【「(（『《]?[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F%](?:[。!?、…・ー—–!%?）)】」》『]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|[^\s]/gu,
            );
    for (const [n] of u) t.push(n);
    return t;
}
const splitters = { zh_cn: splitChinese, zh_sg: splitChinese, zh_tw: splitChinese, ja: splitJapanese, ko: splitKorean };
function defaultSplit(e) {
    return e.split(' ');
}
const langsWithoutSpace = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
function addSpaceAndMap(e, t, u) {
    return langsWithoutSpace.has(t)
        ? e.map(u)
        : e.map((e, t, n) => (t === n.length - 1 ? u(e, t, n) : u(`${e} `, t, n)));
}
function splitLocale(e, t) {
    return (splitters[t] ?? defaultSplit)(e);
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
        s = n[r],
        o = s.names[s.names.length - 1] ?? breakpoints.extraSmall,
        i = breakpointsByType[o],
        a = n.width.names,
        l = n.height.names,
        c = a[a.length - 1] ?? breakpoints.extraSmall,
        d = l[l.length - 1] ?? breakpoints.extraSmall,
        E = { width: breakpointsByType[c].width, height: breakpointsByType[d].height };
    return {
        mediaClass: generateMediaClasses(r, n),
        breakpoint: i,
        screenWidthRem: e,
        screenHeightRem: t,
        breaks: s.names,
        sides: E,
        mediaSize: i.width,
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
            const t = onResize(e),
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
function useUpscale(e, t) {
    return useMedia().upscale ? t : e;
}
const STATIC_DEPS = [];
function useEvent(e) {
    const t = reactExports.useRef(e);
    return (
        reactExports.useLayoutEffect(() => {
            t.current = e;
        }),
        reactExports.useCallback((...e) => (0, t.current)(...e), STATIC_DEPS)
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
    Context$1 = reactExports.createContext(void 0);
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
    return jsxRuntimeExports.jsx(Context$1.Provider, { value: n, children: e.children });
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
const displayedTooltips = new WeakMap(),
    DEFAULT_RES_ID = 0,
    statuses = { await: 'await', idle: 'idle', display: 'display' };
function useTooltip({
    resId: e = DEFAULT_RES_ID,
    contentId: t,
    decoratorId: u,
    disabled: n,
    args: r,
    showDelay: s = 400,
}) {
    const o = reactExports.useRef({ status: statuses.idle, resId: e, timeoutId: 0 }),
        [i, a] = reactExports.useMemo(() => {
            let i = null;
            function a() {
                n ||
                    ((o.current.status = statuses.await),
                    window.clearTimeout(o.current.timeoutId),
                    (o.current.timeoutId = window.setTimeout(l, s)));
            }
            function l() {
                ((o.current.status = statuses.display),
                    sendEvent$1.tooltip.open(e, t, u, r),
                    i && displayedTooltips.set(i, d));
            }
            function c() {
                if (
                    (window.clearTimeout(o.current.timeoutId),
                    o.current.status === statuses.display && sendEvent$1.tooltip.hide(e, t, u),
                    (o.current.status = statuses.idle),
                    i)
                ) {
                    displayedTooltips.delete(i);
                    let e = i.parentElement;
                    for (; e && !displayedTooltips.has(e); ) e = e.parentElement;
                    if (e) {
                        displayedTooltips.get(e).show();
                    }
                    i = null;
                }
            }
            const d = {
                hide: c,
                show: l,
                rerun: function () {
                    o.current.status !== statuses.idle && (n ? d.hide() : a());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((i = null == e ? void 0 : e.currentTarget), a());
                    },
                    onMouseLeave: n ? noop$1 : c,
                    onClick: n ? noop$1 : c,
                },
            ];
        }, [r, t, u, n, e, s]);
    return (
        reactExports.useEffect(() => {
            i.rerun();
        }, [i]),
        useUnmount$1(useEvent(i.hide)),
        a
    );
}
function useSimpleTooltip({ alert: e, body: t, header: u, note: n, hasHtmlContent: r, disabled: s }) {
    const o = resources.resolve('views');
    return useTooltip({
        disabled: s,
        contentId: o.read((e) =>
            r
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: o.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: reactExports.useMemo(() => ({ body: t, header: u, note: n, alert: e }), [e, t, u, n]),
    });
}
const NO_ARGS = [];
function useSpecialTooltip(e, t = NO_ARGS, u) {
    return useTooltip({
        ...u,
        disabled: null == u ? void 0 : u.disabled,
        contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
        args: reactExports.useMemo(
            () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == u ? void 0 : u.args) }),
            [t, e, null == u ? void 0 : u.args],
        ),
    });
}
function useParamTooltip(e, t, u) {
    return useTooltip({
        ...u,
        disabled: null == u ? void 0 : u.disabled,
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
    progressSimple: createSoundPlay('gui_hangar_progressbar_simple'),
    increaseDelta: createSoundPlay('gui_hangar_progressbar_delta_increase'),
    decreaseDelta: createSoundPlay('gui_hangar_progressbar_delta_decrease'),
    increaseDeltaMax: createSoundPlay('gui_hangar_progressbar_delta_max'),
    pointerGrab: createSoundPlay('gui_hangar_progressbar_pointer_grab'),
    pointerDrag: createSoundPlay('gui_hangar_progressbar_pointer_drag'),
};
function createSoundPlay(e) {
    return () => {
        play.sound(e);
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
const Context = reactExports.createContext(null);
function SoundsProvider({ severity: e = 'warn', overrides: t, silent: u = !1, children: n }) {
    const r = reactExports.useMemo(() => ({ ...soundConfig, ...t }), [t]),
        s = reactExports.useMemo(
            () => ({
                play: function (t, n) {
                    if (u) return;
                    const s = r[t];
                    s ? s(n) : logBySeverity(`There is no sound for event: ${t}`, e);
                },
                settings: { plays: r, severity: e, silent: u },
            }),
            [r, e, u],
        );
    return jsxRuntimeExports.jsx(Context.Provider, { value: s, children: n });
}
function useSounds() {
    const e = reactExports.useContext(Context);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const MS_IN_SECOND = 1e3,
    useCountdown = (e = 0, t, u = 0, n = noop$1) => {
        const [r, s] = reactExports.useState(e);
        return (
            reactExports.useEffect(() => {
                if (e > 0) {
                    s(e);
                    const r = Date.now(),
                        o = setInterval(() => {
                            const t = e - Math.floor((Date.now() - r) / MS_IN_SECOND);
                            null !== u && t <= u ? (s(u), n && n(), clearInterval(o)) : s(t);
                        }, t * MS_IN_SECOND);
                    return () => {
                        clearInterval(o);
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
    var r, s;
    const o = e,
        i = typeof e;
    if (u > n) throw new Error(`Too deeply nested to copy. Max is ${n}.`);
    if (nonConvertingTypes.has(i)) return o;
    if (null === o) return o;
    const a = { depth: u + 1, maxDepth: n };
    if (Array.isArray(o)) return o.map((e) => cloneModel(e, a));
    if ('object' === i) {
        const n = (null == (r = o.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, a));
        if ('CoherentArrayProxy' === n) return e.map((e) => cloneModel(e.value, a));
        if ('Dict' === n) return;
        if ('UNKNOWN' === n) return;
        if (n.includes(':ViewModel:') || 'Object' === n) {
            if (t && 0 === u) {
                const e = {};
                for (const t in o) {
                    const u = o[t];
                    primitives$1.has(typeof u) && (e[t] = u);
                }
                return e;
            }
            {
                const e = {};
                for (const t in o) {
                    const u = o[t],
                        n = (null == (s = null == o ? void 0 : o.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(n) || (e[t] = cloneModel(u, a));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(o)) i[e] = cloneModel(o[e], a);
        return i;
    }
    return (console.error('Incorrect value to clone model', o), o);
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
                s = this.takeItem(e, r);
            r in u
                ? null === s
                    ? (delete u[r], this._keys.delete(r), this.set(u))
                    : u[r].set(s)
                : null !== s && ((u[r] = observable.box(s, MOBX_OPTIONS)), this._keys.add(r), this.set(u));
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
    useMockContext = () => reactExports.useContext(mockContext);
function createSimpleGetter(e) {
    return (t, u) => {
        const n = resolvePath(t, u);
        return n ? readByPath(n, e) : e;
    };
}
const DEFAULT_BOX_CONFIG = { equals: constFalse, deep: !1 };
function createObservableModel(e, t, u) {
    const n = [];
    e.events.subscribersNotified.on(
        action(() => {
            for (const e of n) e();
            n.splice(0, n.length);
        }),
    );
    const r = (r, s, o = DEFAULT_BOX_CONFIG) => {
            const i = observable.box(r(u(s)), o);
            return ('real' === t && e.subscribe((e) => n.push(() => i.set(r(e))), s), i);
        },
        s = (r, s) => {
            const o = new DLDict(u(r), s);
            return ('real' === t && e.subscribe((e, t) => n.push(() => o.update(e, t)), r), o);
        },
        o = (r, s) => {
            const o = observable.box(u(r) ?? s, DEFAULT_BOX_CONFIG);
            return ('real' === t && e.subscribe((e) => n.push(() => o.set(e)), r), o);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => r(cloneModel, e),
        array: o,
        object: o,
        transform: r,
        primitives: (r, s) => {
            const o = u(s);
            if (Array.isArray(r)) {
                const u = r.reduce((e, t) => ((e[t] = observable.box(o[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            n.push(() =>
                                r.forEach((t) => {
                                    u[t].set(e[t]);
                                }),
                            );
                        }, s),
                    u
                );
            }
            {
                const u = r,
                    i = Object.entries(u),
                    a = i.reduce((e, [t, u]) => ((e[u] = observable.box(o[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            n.push(() =>
                                i.forEach(([t, u]) => {
                                    a[u].set(e[t]);
                                }),
                            );
                        }, s),
                    a
                );
            }
        },
    };
}
const initializeModelWithContext =
        (e = 'DataLayerProvider') =>
        (t, u, n) => {
            const r = reactExports.createContext(null);
            function s(s) {
                var o;
                const { mode: i, options: a, children: l, mocks: c } = s,
                    d = useMockContext(),
                    E = i ?? d.mode,
                    p = c ?? d.mocks,
                    m = reactExports.useRef([]),
                    h = null == (o = null == n ? void 0 : n.useRequires) ? void 0 : o.call(n),
                    _ = useEvent((r, o, i) => {
                        var a;
                        const l = 'real' !== r && i ? createMockInstance(i.getter, o) : create(o, { name: e }),
                            c = (e) => ('mocks' === r ? (null == i ? void 0 : i.getter(e, o)) : l.readByPath(e)),
                            d = (e) => m.current.push(e),
                            E = 'initial' in s && {
                                initial: null == (a = null == n ? void 0 : n.initial) ? void 0 : a.call(n, s.initial),
                            },
                            p = t({
                                ...E,
                                mode: r,
                                readByPath: c,
                                requires: h,
                                externalModel: l,
                                observableModel: createObservableModel(l, r, c),
                                cleanup: d,
                            }),
                            _ = { ...E, mode: r, model: p, externalModel: l, cleanup: d, requires: h },
                            A = 'mocks' === r && (null == i ? void 0 : i.controls) ? i.controls(_) : {};
                        return {
                            model: p,
                            controls: { ...(null == u ? void 0 : u(_)), ...A },
                            externalModel: l,
                            mode: r,
                        };
                    }),
                    A = reactExports.useRef(!1),
                    [f, F] = reactExports.useState(E);
                reactExports.useEffect(() => {
                    F(E);
                }, [E]);
                const [g, y] = reactExports.useState(() => _(f, a, p));
                return (
                    reactExports.useEffect(() => {
                        A.current ? y(_(f, a, p)) : (A.current = !0);
                    }, [
                        _,
                        p,
                        f,
                        null == a ? void 0 : a.context,
                        null == a ? void 0 : a.initializer,
                        null == a ? void 0 : a.getRoot,
                        null == a ? void 0 : a.rootId,
                    ]),
                    reactExports.useEffect(
                        () => () => {
                            (g.externalModel.dispose(), m.current.forEach((e) => e()));
                        },
                        [g],
                    ),
                    jsxRuntimeExports.jsx(r.Provider, { value: g, children: l })
                );
            }
            return (
                (s.displayName = e),
                [
                    s,
                    function () {
                        const e = reactExports.useContext(r);
                        if (!e) throw new Error(`hook useModel must be used within a ${s.displayName}.`);
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
reactExports.forwardRef(function (e, t) {
    const u = reactExports.useRef(null);
    return (
        reactExports.useEffect(() => {
            const e = u.current;
            if (null !== e)
                return events$1.onHitTest((t) => {
                    const u = e.getBoundingClientRect();
                    return u.left <= t.x && t.x <= u.right && u.top <= t.y && t.y <= u.bottom;
                });
        }, []),
        jsxRuntimeExports.jsx('div', { ...e, ref: assignRefs([t, u]) })
    );
});
class JSXBuilder {
    constructor() {
        __publicField(this, 'items', []);
    }
    add(e) {
        return (this.items.push([e, {}]), this);
    }
    addWithProps(e, t) {
        return (this.items.push([e, t]), this);
    }
    render(e) {
        return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
            children: this.items.reduceRight((e, [t, u], n) => reactExports.createElement(t, { ...u, key: n }, e), e),
        });
    }
}
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
                const s = { depth: u - 1, convertArrays: n },
                    o = (null == (r = t.constructor) ? void 0 : r.name) ?? 'UNKNOWN';
                switch (!0) {
                    case o.includes('CoherentArrayProxy'):
                        return [...t.values()].map((t) => e(s.convertArrays ? t.value : t, s));
                    case 'Dict' === o:
                        return [...t.entries()].reduce((t, [u, n]) => ((t[u] = e(n, s)), t), { $$type: 'Dict' });
                    case 'UNKNOWN' === o:
                        return 'UNKNOWN_TYPE';
                    case o.includes('ViewModel'):
                    default: {
                        const u = {};
                        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = e(t[n], s));
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
    var s;
    injectShowModel();
    const o = u ? MediaWrapper : React.Fragment,
        i = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (r && engine.enableImmediateLayout(!0),
        await i,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client
            .createRoot(t)
            .render(jsxRuntimeExports.jsx(o, { children: jsxRuntimeExports.jsx(Provider, { children: e }) })),
        n && (initExternalPaddings$1(t), enableFullScreenModeSupported$1()));
}
function ColorsProvider(e) {
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: e.children });
}
function UIProvider(e) {
    return jsxRuntimeExports.jsx(ColorsProvider, {
        children: jsxRuntimeExports.jsx(SoundsProvider, {
            overrides: e.soundsOverrides,
            severity: e.soundSeverity,
            silent: e.soundsOff,
            children: e.children,
        }),
    });
}
const themes = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    sizes$1 = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function defineStyledComponent(e, t, u) {
    var n;
    const r =
            'object' == typeof t && 'cva' in t
                ? null == (n = t.cva)
                    ? void 0
                    : n.variants
                : null == u
                  ? void 0
                  : u.variants,
        s = r ? Object.keys(r) : [];
    if ('object' == typeof t) {
        const u = t,
            n = cva(u.className, u.cva),
            r = u.element,
            o = reactExports.forwardRef(function (e, t) {
                return reactExports.createElement(r, {
                    ...('function' == typeof r ? e : cleanProps(s, e)),
                    ref: t,
                    className: n(e),
                });
            });
        return ((o.displayName = e), u.cva && (o.cva = u.cva), o);
    }
    const o = cva(t, u),
        i = reactExports.forwardRef(function (t, u) {
            return jsxRuntimeExports.jsx('div', { 'data-name': e, ...cleanProps(s, t), ref: u, className: o(t) });
        });
    return ((i.displayName = e), i);
}
function cleanProps(e, t) {
    if (0 === e.length) return t;
    const u = { ...t };
    for (const n of e) delete u[n];
    return u;
}
const base$7 = 'HeadlessButton_df8536fc',
    styles$8 = { base: base$7 },
    HeadlessButtonBase = defineStyledComponent('Button', { element: 'button', className: styles$8.base }),
    HeadlessButton = reactExports.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: u, soundTarget: n, disabled: r = !1, silent: s = !1, ...o },
        i,
    ) {
        const a = useSounds();
        return jsxRuntimeExports.jsx(HeadlessButtonBase, {
            ...o,
            ref: i,
            onMouseEnter: function (e) {
                (r || s || a.play('mouse-enter', { target: n || 'Button', original: e }), null == u || u(e));
            },
            onClick: function (e) {
                r || (s || a.play('click', { target: n || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    root$5 = 'Button_root_6bcdc8c',
    background = 'Button_background_98ebcfb8',
    border = 'Button_border_7e6390d7',
    overlay$1 = 'Button_overlay_174632c8',
    base$6 = 'Button_70871946',
    base__enabled = 'Button_base__enabled_96634d40',
    base__disabled = 'Button_base__disabled_b713e04a',
    content$1 = 'Button_content_298de63f',
    content__fontAligned = 'Button_content__fontAligned_66115778',
    styles$7 = {
        root: root$5,
        background: background,
        border: border,
        overlay: overlay$1,
        base: base$6,
        base__enabled: base__enabled,
        base__disabled: base__disabled,
        'base__size-extraSmall': 'Button_base__size-extraSmall_d0cdb5ed',
        'base__size-small': 'Button_base__size-small_fc7095a4',
        'base__size-medium': 'Button_base__size-medium_814d61f0',
        'base__size-large': 'Button_base__size-large_83da852e',
        'base__theme-primary': 'Button_base__theme-primary_8ba55469',
        'base__theme-secondary': 'Button_base__theme-secondary_3fa4afc',
        content: content$1,
        content__fontAligned: content__fontAligned,
    },
    Button = reactExports.forwardRef(function (
        {
            children: e,
            size: t = sizes$1.large,
            theme: u = themes.primary,
            disabled: n = !1,
            silent: r = !1,
            autoAlignContent: s = !0,
            classNames: o,
            className: i,
            ...a
        },
        l,
    ) {
        return jsxRuntimeExports.jsxs(HeadlessButton, {
            ...a,
            ref: l,
            silent: r,
            disabled: n,
            className: cx(
                styles$7.base,
                styles$7[`base__size-${t}`],
                styles$7[`base__theme-${u}`],
                n ? styles$7.base__disabled : styles$7.base__enabled,
                i,
                null == o ? void 0 : o.base,
            ),
            onClick: function (e) {
                var t;
                n || null == (t = a.onClick) || t.call(a, e);
            },
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$7.background, null == o ? void 0 : o.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$7.border, null == o ? void 0 : o.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$7.overlay, null == o ? void 0 : o.overlay) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$7.content, s && styles$7.content__fontAligned, null == o ? void 0 : o.content),
                    children: e,
                }),
            ],
        });
    });
((Button.themes = themes), (Button.sizes = sizes$1));
const NodeTypes = { Text: 1, Tag: 2, Var: 3 };
function parseArguments(e) {
    const t = [];
    let u = '',
        n = !1,
        r = !1,
        s = '';
    for (let o = 0; o < e.length; o++) {
        const i = e[o];
        ("'" !== i && '"' !== i) || r || n
            ? i === s && r
                ? ((r = !1), (u += i))
                : '(' !== i || r
                  ? ')' === i && n && !r
                      ? ((n = !1), (u += i))
                      : ' ' !== i || n || r
                        ? (u += i)
                        : u && (t.push(u), (u = ''))
                  : ((n = !0), (u += i))
            : ((r = !0), (s = i), (u += i));
    }
    return (u && t.push(u), t);
}
function parse(e, t) {
    const u = [],
        n = [];
    let r = '',
        s = !1,
        o = '',
        i = 0;
    for (let a = 0; a < e.length; a++) {
        const l = e[a];
        if (l === t.start[0] && e.slice(a, a + t.start.length) === t.start) {
            if (r) {
                if (n.length > 0) {
                    n[n.length - 1].node.children.push({ type: NodeTypes.Text, value: r });
                } else u.push({ type: NodeTypes.Text, value: r });
                r = '';
            }
            ((s = !0), (a += t.start.length - 1));
        } else if (l === t.end[0] && e.slice(a, a + t.end.length) === t.end) {
            ((s = !1), (a += t.end.length - 1));
            const e = o.trim();
            if (e.startsWith('@')) {
                const t = e.slice(1).trim(),
                    r = { type: NodeTypes.Tag, attrs: t.split('|'), instanceId: ++i, children: [] };
                if (n.length > 0) {
                    n[n.length - 1].node.children.push(r);
                } else u.push(r);
                n.push({ node: r, startIndex: u.length });
            } else if ('/' === e) n.length > 0 && n.pop();
            else {
                const t = { type: NodeTypes.Var, instanceId: ++i, name: e };
                if (n.length > 0) {
                    n[n.length - 1].node.children.push(t);
                } else u.push(t);
            }
            o = '';
        } else s ? (o += l) : (r += l);
    }
    if (r)
        if (n.length) {
            n[n.length - 1].node.children.push({ type: NodeTypes.Text, value: r });
        } else u.push({ type: NodeTypes.Text, value: r });
    return u;
}
const COLORS =
        'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
    base$5 = 'FormatText_db904f12',
    base__fullSize = 'FormatText_base__fullSize_a514958e',
    nowrap = 'FormatText_nowrap_ff69eca3',
    styles$6 = { COLORS: COLORS, base: base$5, base__fullSize: base__fullSize, nowrap: nowrap },
    legacyColors = new Set((null == (_a = styles$6.COLORS) ? void 0 : _a.split(', ')) ?? []);
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
            t.push(split$1(n));
            continue;
        }
        const s = splitString(r.slice(1));
        (t.push(
            jsxRuntimeExports.jsxs(
                reactExports.Fragment,
                {
                    children: [
                        jsxRuntimeExports.jsxs('span', { className: styles$6.nowrap, children: [split$1(n), r[0]] }),
                        s,
                    ],
                },
                takeKey(),
            ),
        ),
            (u += 1));
    }
    return t;
}
function split$1(e) {
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
    split: split$1,
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
        s = n[t];
    return s ? s(e, ...r) : (console.error(`Function ${t} is not registered`), e);
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
                s = t[r];
            if (s) return resolveAttrParams(e.replace(`$${r}`, String(s)), t);
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
    function s(e) {
        if (primitives.includes(typeof e)) {
            const t = r.at(-1);
            if ('string' == typeof t) return void (r[r.length - 1] = t + e);
        }
        r.push(e);
    }
    for (const o of e)
        if (o.type === NodeTypes.Text) s(o.value);
        else if (o.type === NodeTypes.Var)
            null === u[o.name] || primitives.includes(typeof u[o.name])
                ? s(u[o.name] ?? `{{${o.name}}}`)
                : r.push(
                      jsxRuntimeExports.jsx(
                          reactExports.Fragment,
                          { children: u[o.name] },
                          `var-${o.name}-${o.instanceId}`,
                      ),
                  );
        else if (o.type === NodeTypes.Tag) {
            const e = render(o.children, t, u, !1),
                n = applyFunctions(resolveAttrsParams(o.attrs, u), e, t);
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
    FormatText = reactExports.memo(function (e) {
        const {
                brackets: t = defaultBrackets,
                text: u,
                params: n,
                upgradeLegacy: r,
                fullSize: s,
                inline: o,
                formatters: i,
                split: a,
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
            E = reactExports.useMemo(() => parse(a ? `{{@ split}}${c}{{/}}` : c, t), [t, c, a]),
            p = reactExports.useMemo(() => render(E, d, e.params), [E, d, e.params]),
            m = cx(styles$6.base, s && styles$6.base__fullSize, l.className);
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
    }),
    root$4 = 'CloseButton_root_987cb365',
    base$4 = 'CloseButton_7488a1b8',
    base__medium = 'CloseButton_base__medium_97d04067',
    base__small$1 = 'CloseButton_base__small_c1b29bae',
    base__extraSmall = 'CloseButton_base__extraSmall_f52764c1',
    base__x96x96 = 'CloseButton_base__x96x96_8157b84d',
    base__x32x32 = 'CloseButton_base__x32x32_6466ea31',
    styles$5 = {
        root: root$4,
        base: base$4,
        base__medium: base__medium,
        base__small: base__small$1,
        base__extraSmall: base__extraSmall,
        base__x96x96: base__x96x96,
        base__x32x32: base__x32x32,
    },
    sizes = { medium: 'medium', small: 'small', extraSmall: 'extraSmall' },
    upscaleImageSizes = { [sizes.medium]: 'x96x96', [sizes.small]: sizes.medium, [sizes.extraSmall]: 'x32x32' };
function CloseButton({
    size: e = sizes.medium,
    hoverSound: t = sounds$1.highlight,
    clickSound: u = sounds$1.click,
    className: n,
    onHover: r,
    onClose: s,
}) {
    const o = useUpscale(styles$5[`base__${e}`], styles$5[`base__${upscaleImageSizes[e]}`]);
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$5.base, o, n),
        onMouseEnter: () => {
            (play.sound(t), null == r || r());
        },
        onClick: () => {
            (play.sound(u), s());
        },
    });
}
CloseButton.size = sizes;
const useResizeObserver = (e, t, u = !0) => {
        const n = reactExports.useCallback(
            (e) => {
                const u = e[0];
                t && t(u);
            },
            [t],
        );
        reactExports.useEffect(() => {
            if (!e.current || !u) return;
            const t = new index((e) => n(e));
            return (
                t.observe(e.current),
                () => {
                    t.disconnect();
                }
            );
        }, [n, u, e]);
    },
    getFromCallStack = (e = 1) => {
        var t;
        const u = new Error().stack;
        let n,
            r = R.invalid('resId'),
            s = '';
        return (
            u &&
                ((s = (null == (t = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : t[0]) || ''),
                (n = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                window.__feature && window.__feature !== n && window.subViews[n] && (r = window.subViews[n].id)),
            { callerUrl: s, caller: n, stack: u, resId: r }
        );
    };
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
const internalMouse = {
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
                        const s = `mouse${t}`,
                            o = internalMouse[t]((e) => u([e, 'outside']));
                        function i(e) {
                            u([e, 'inside']);
                        }
                        return (
                            window.addEventListener(s, i),
                            n(),
                            () => {
                                r && (o(), window.removeEventListener(s, i), (e.listeners -= 1), n(), (r = !1));
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
function playSound(e) {
    engine.call('PlaySound', e).catch((t) => {
        console.error(`playSound('${e}'): `, t);
    });
}
initMouseEvents();
const sounds = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays = Object.keys(sounds).reduce((e, t) => ((e[t] = () => playSound(sounds[t])), e), {}),
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
    env = { view: view },
    _DataTracker = class e {
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
    sendShowPopOverEvent = (e, t, u, n, r = R.invalid('resId'), s) => {
        const o = env.view.getViewGlobalPosition(),
            { x: i, y: a, width: l, height: c } = u.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(i) + o.x,
                y: env.view.pxToRem(a) + o.y,
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
            args: s,
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
window.ViewEnvHelper = ViewEnvHelper;
const SHOW_DELAY_MIN = 100,
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
    Tooltip = ({
        children: e,
        contentId: t,
        args: u,
        onMouseEnter: n,
        onMouseLeave: r,
        onMouseDown: s,
        onClick: o,
        ignoreShowDelay: i = !1,
        ignoreMouseClick: a = !1,
        decoratorId: l = 0,
        isEnabled: c = !0,
        targetId: d = 0,
        onShow: E,
        onHide: p,
        ...m
    }) => {
        const h = reactExports.useRef({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
            _ = reactExports.useMemo(() => d || getFromCallStack().resId, [d]),
            A = reactExports.useCallback(() => {
                (h.current.isVisible && h.current.timeoutId) ||
                    (handleViewEvent(t, l, { isMouseEvent: !0, on: !0, arguments: getViewEventArguments(u) }, _),
                    E && E(),
                    (h.current.isVisible = !0));
            }, [t, l, u, _, E]),
            f = reactExports.useCallback(() => {
                if (h.current.isVisible || h.current.timeoutId) {
                    const e = h.current.timeoutId;
                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                        handleViewEvent(t, l, { on: !1 }, _),
                        h.current.isVisible && p && p(),
                        (h.current.isVisible = !1));
                }
            }, [t, l, _, p]),
            F = reactExports.useCallback((e) => {
                h.current.isVisible &&
                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                    (h.current.hideTimerId = window.setTimeout(() => {
                        const t = document.elementFromPoint(e.clientX, e.clientY);
                        t && !t.isSameNode(h.current.prevTarget) && f();
                    }, 200)));
            }, []);
        (reactExports.useEffect(() => {
            const e = h.current.hideTimerId;
            return (
                document.addEventListener('wheel', F, { capture: !0 }),
                () => {
                    (document.removeEventListener('wheel', F, { capture: !0 }), e && window.clearTimeout(e));
                }
            );
        }, []),
            reactExports.useEffect(() => {
                !1 === c && f();
            }, [c, f]),
            reactExports.useEffect(
                () => (
                    window.addEventListener('mouseleave', f),
                    () => {
                        (window.removeEventListener('mouseleave', f), f());
                    }
                ),
                [f],
            ));
        return c
            ? reactExports.cloneElement(e, {
                  onMouseEnter:
                      ((g = e.props.onMouseEnter),
                      (e) => {
                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                              (clearTimeout(h.current.timeoutId),
                              (h.current.timeoutId = window.setTimeout(A, i ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT)),
                              n && n(e),
                              g && g(e));
                      }),
                  onMouseLeave: ((e) => (t) => {
                      (f(), null == r || r(t), null == e || e(t));
                  })(e.props.onMouseLeave),
                  onClick: ((e) => (t) => {
                      (!1 === a && f(), null == o || o(t), null == e || e(t));
                  })(e.props.onClick),
                  onMouseDown: ((e) => (t) => {
                      (!1 === a && f(), null == s || s(t), null == e || e(t));
                  })(e.props.onMouseDown),
                  ...m,
              })
            : e;
        var g;
    },
    BackportTooltip = ({ children: e, ...t }) =>
        jsxRuntimeExports.jsx(Tooltip, {
            contentId: R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
            ignoreShowDelay: !0,
            ...t,
            children: e,
        }),
    UB_SIMPLE_TOOLTIPS = R.views.common.tooltip_window.simple_tooltip_content,
    getTooltipContentId = (e) =>
        e ? UB_SIMPLE_TOOLTIPS.SimpleTooltipHtmlContent('resId') : UB_SIMPLE_TOOLTIPS.SimpleTooltipContent('resId'),
    SimpleTooltip = ({ children: e, body: t, header: u, note: n, alert: r, args: s, ...o }) => {
        const i = reactExports.useMemo(() => {
            const e = { ...s, body: t, header: u, note: n, alert: r };
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
        }, [r, t, u, n, s]);
        return jsxRuntimeExports.jsx(Tooltip, {
            contentId: getTooltipContentId(null == s ? void 0 : s.hasHtmlContent),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: i,
            ...o,
            children: e,
        });
    },
    DynamicTooltipWrapper = ({ children: e, tooltipArgs: t, className: u }) => {
        if (!t) return e;
        const n = jsxRuntimeExports.jsx('div', { className: u, children: e });
        if (t.header || t.body) return jsxRuntimeExports.jsx(SimpleTooltip, { ...t, children: n });
        const { contentId: r } = t;
        return r
            ? jsxRuntimeExports.jsx(Tooltip, { ...t, contentId: r, children: n })
            : jsxRuntimeExports.jsx(BackportTooltip, { ...t, children: n });
    },
    convertNbsp = (e) => e.replace(/&nbsp;/g, ' '),
    convertZwnbsp = (e) => e.replace(/&zwnbsp;/g, '\ufeff');
(() => {
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
})();
var BlockType = ((e) => (
        (e[(e.Word = 0)] = 'Word'),
        (e[(e.LineBreak = 1)] = 'LineBreak'),
        (e[(e.NewLine = 2)] = 'NewLine'),
        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
        (e[(e.Binding = 5)] = 'Binding'),
        e
    ))(BlockType || {}),
    Alignment = ((e) => ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'), e))(
        Alignment || {},
    );
const isTextBlock = (e) => void 0 !== e.childList,
    TRUNCATE_IDENTIFY = '...',
    BLOCK_TYPE = 'data-block-type',
    SYMBOL_MAP = { ' ': 3, '\ufeff': 3, '\n': 1 },
    THAI_LANGUAGE_CODE = 'th',
    SPLIT_BY_SYMBOL_LANGUAGE_CODES = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', THAI_LANGUAGE_CODE],
    IS_SPLIT_BY_SYMBOL = SPLIT_BY_SYMBOL_LANGUAGE_CODES.includes(R.strings.settings.LANGUAGE_CODE().toLowerCase()),
    root$3 = 'Colors_root_f72ccf75',
    blackReal = 'Colors_blackReal_d82460d6',
    whiteReal = 'Colors_whiteReal_195c4fc9',
    white = 'Colors_white_f65ff909',
    whiteOrange = 'Colors_whiteOrange_fe1307be',
    whiteSpanish = 'Colors_whiteSpanish_6c839fc3',
    par = 'Colors_par_c2d70a43',
    parSecondary = 'Colors_parSecondary_fc54d1eb',
    parTertiary = 'Colors_parTertiary_bd916d5b',
    red = 'Colors_red_871ce654',
    redDark = 'Colors_redDark_fa750314',
    yellow = 'Colors_yellow_a0599898',
    orange = 'Colors_orange_900d653e',
    cream = 'Colors_cream_58f5b8e5',
    brown = 'Colors_brown_f7996d65',
    greenBright = 'Colors_greenBright_485ee4dc',
    green = 'Colors_green_c091337d',
    greenDark = 'Colors_greenDark_232f113d',
    blueBooster = 'Colors_blueBooster_edd8a14b',
    blueTeamkiller = 'Colors_blueTeamkiller_377a3f7',
    cred = 'Colors_cred_75fadd7e',
    gold = 'Colors_gold_7149760b',
    bond = 'Colors_bond_6d725a61',
    prom = 'Colors_prom_4b004087',
    colors = {
        root: root$3,
        blackReal: blackReal,
        whiteReal: whiteReal,
        white: white,
        whiteOrange: whiteOrange,
        whiteSpanish: whiteSpanish,
        par: par,
        parSecondary: parSecondary,
        parTertiary: parTertiary,
        red: red,
        redDark: redDark,
        yellow: yellow,
        orange: orange,
        cream: cream,
        brown: brown,
        greenBright: greenBright,
        green: green,
        greenDark: greenDark,
        blueBooster: blueBooster,
        blueTeamkiller: blueTeamkiller,
        cred: cred,
        gold: gold,
        bond: bond,
        prom: prom,
    },
    noBreakWrapper = 'Renderers_noBreakWrapper_bd4985a8',
    lineBreak = 'Renderers_lineBreak_8503dd13',
    newLine = 'Renderers_newLine_9ec86e16',
    word = 'Renderers_word_188ad896',
    styles$4 = { noBreakWrapper: noBreakWrapper, lineBreak: lineBreak, newLine: newLine, word: word },
    createStyle = (e) => ({ color: `#${e}` }),
    getWordBlock = ({ elementList: e, textBlock: t, key: u }) => {
        const n = t.colorTag;
        return n
            ? colors[n]
                ? React.createElement(
                      'span',
                      { key: u, 'data-block-type': t.blockType, className: cx(styles$4.word, colors[n]) },
                      e,
                  )
                : React.createElement(
                      'span',
                      { key: u, 'data-block-type': t.blockType, className: styles$4.word, style: createStyle(n) },
                      e,
                  )
            : React.createElement('span', { key: u, 'data-block-type': t.blockType, className: styles$4.word }, e);
    },
    getLineBreak = ({ key: e }) =>
        React.createElement('span', { key: e, 'data-block-type': BlockType.LineBreak, className: styles$4.lineBreak }),
    getNewLine = ({ elementList: e, key: t }) =>
        React.createElement('span', { key: t, 'data-block-type': BlockType.NewLine, className: styles$4.newLine }, e),
    getNoBreakWrapper = ({ elementList: e, key: t }) =>
        React.createElement(
            'span',
            { key: t, 'data-block-type': BlockType.NoBreakWrapper, className: styles$4.noBreakWrapper },
            e,
        ),
    getBinding = ({ elementList: e, textBlock: t, key: u }) =>
        React.createElement(
            'span',
            { key: u, 'data-block-type': t.blockType },
            e.map((e) => React.createElement(React.Fragment, { key: u }, e)),
        ),
    RENDER_MAP = {
        [BlockType.Word]: getWordBlock,
        [BlockType.NoBreakSymbol]: getWordBlock,
        [BlockType.Binding]: getBinding,
        [BlockType.LineBreak]: getLineBreak,
        [BlockType.NewLine]: getNewLine,
        [BlockType.NoBreakWrapper]: getNoBreakWrapper,
    },
    renderChildList = (e, t, u) => {
        const n = [];
        return (
            e.childList.forEach((r, s) => {
                const o = `${u}_${s}`;
                if (isTextBlock(r)) {
                    const e = r,
                        t = e.blockType,
                        u = RENDER_MAP[t],
                        s = renderChildList(e, u, o);
                    n.push(...s);
                } else n.push(t({ elementList: [r], textBlock: e, key: o }));
            }),
            n
        );
    },
    renderTextBlock = (e, t) => {
        const u = [],
            n = e.blockType,
            r = RENDER_MAP[n],
            s = renderChildList(e, r, t);
        return (
            n === BlockType.NoBreakWrapper ? u.push(r({ elementList: s, textBlock: e, key: `${t}` })) : u.push(...s),
            u
        );
    },
    convertTextBlocksToJsxList = (e) => {
        const t = [];
        return (
            e.forEach((e, u) => {
                t.push(...renderTextBlock(e, u));
            }),
            t
        );
    },
    split = (e, t, u, n) => {
        let r = t.exec(e),
            s = 0;
        for (; r; ) (s !== r.index && u(e.slice(s, r.index)), n(r), (s = t.lastIndex), (r = t.exec(e)));
        s !== e.length && u(e.slice(s));
    },
    thaiGraphemeRegex = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
    splitThaiGraphemes = (e) => e.match(thaiGraphemeRegex) || [],
    splitNewLines = (e) => {
        const t = [{ blockType: BlockType.LineBreak, colorTag: '', childList: [e.charAt(0)] }];
        for (let u = 0; u < e.length - 1; u++)
            t.push({ blockType: BlockType.NewLine, colorTag: '', childList: [e.charAt(0)] });
        return t;
    },
    splitBySymbols = (e) => {
        const t = [];
        return (
            split(
                e,
                /\S\s+/g,
                (e) => {
                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === THAI_LANGUAGE_CODE
                        ? t.push(...splitThaiGraphemes(e))
                        : t.push(...e.split(''));
                },
                (e) => {
                    t.push(e[0]);
                },
            ),
            t
        );
    },
    splitWordsCustom = (e) => {
        const t = [];
        return (
            split(
                e,
                /[^a-zA-Z0-9]+/g,
                (e) => {
                    t.push(e);
                },
                (e) => {
                    t.push(...splitBySymbols(e[0]));
                },
            ),
            t
        );
    },
    splitWords = (e, t) => {
        const u = /[\s\u002d]/g;
        let n = u.exec(e);
        if (!n) return [e];
        const r = [];
        let s = 0;
        for (; n; ) {
            const o = t.justifyContent === Alignment.FlexEnd ? n.index : u.lastIndex;
            (r.push(e.slice(s, o)), (s = o), (n = u.exec(e)));
        }
        return (s !== e.length && r.push(e.slice(s)), r);
    },
    splitByWordsMethod = IS_SPLIT_BY_SYMBOL ? splitWordsCustom : splitWords,
    splitSpecialSymbols = (e, t = '', u) => {
        const n = [];
        return (
            split(
                e,
                /(\n+|[\xa0\ufeff]+)/g,
                (e) => {
                    n.push({ blockType: BlockType.Word, colorTag: t, childList: splitByWordsMethod(e, u) });
                },
                (e) => {
                    const u = e[0],
                        r = SYMBOL_MAP[u.charAt(0)];
                    r === BlockType.LineBreak
                        ? n.push(...splitNewLines(u))
                        : n.push({ blockType: r, colorTag: t, childList: [u.replace(/\ufeff+/g, '')] });
                },
            ),
            n
        );
    },
    splitBinding = (e, t, u = '', n) => {
        const r = [],
            s = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
        return (
            split(
                s,
                /(?:%\(|{)(.*?)[)}][sd]?/g,
                (e) => {
                    r.push(...splitSpecialSymbols(e, u, n));
                },
                (e) => {
                    const s = e[1],
                        o = void 0 === t[s] ? e[0] : t[s];
                    'string' == typeof o || 'number' == typeof o
                        ? r.push(...splitSpecialSymbols(String(o), u, n))
                        : r.push({ blockType: BlockType.Binding, colorTag: u, childList: [o] });
                },
            ),
            r
        );
    },
    splitColorTags = (e, t, u) => {
        const n = [];
        return (
            split(
                e,
                /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                (e) => {
                    n.push(...splitBinding(e, t, '', u));
                },
                (e) => {
                    n.push(...splitBinding(e[2] + e[3], t, e[1], u));
                },
            ),
            n
        );
    },
    wrapNoBreak = (e, t) => {
        if (!e) return [t];
        const u = [],
            n = { ...t, childList: t.childList.splice(0, 1) };
        if (e.blockType === BlockType.NoBreakWrapper) (e.childList.push(n), u.push(e));
        else {
            const t = { ...e, childList: e.childList.splice(-1) };
            (e.childList.length > 0 && u.push(e),
                u.push({ blockType: BlockType.NoBreakWrapper, colorTag: '', childList: [t, n] }));
        }
        return (t.childList.length > 0 && u.push(t), u);
    },
    processTextBlocks = (e) => {
        const t = [];
        let u = !1;
        return (
            e.forEach((e) => {
                if (e.blockType === BlockType.NoBreakSymbol) ((u = !0), t.push(...wrapNoBreak(t.pop(), e)));
                else (u ? t.push(...wrapNoBreak(t.pop(), e)) : t.push(e), (u = !1));
            }),
            t
        );
    },
    getJsxElementsList = (e, t = {}, u) => {
        if (!e) return [];
        const n = convertZwnbsp(convertNbsp(e)),
            r = processTextBlocks(splitColorTags(n, t, u));
        return convertTextBlocksToJsxList(r);
    },
    isVerticalOverflow = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
    getPositionDiff = (e, t) => e.offsetLeft + e.offsetWidth - t,
    isElementAvailableForTruncation = (e, t, u) => {
        if (!e || !e.textContent) return [!1, 0];
        if (e.offsetLeft > t) return [!1, 0];
        const n = getPositionDiff(e, t),
            r = e.textContent.length,
            s = e.offsetWidth / r,
            o = Math.ceil(n / s);
        if (n > 0) {
            const n = Math.floor((t - e.offsetLeft) / s);
            return n >= u ? [!0, u + o] : [!1, n];
        }
        const i = Math.max(u + o, 0);
        return r < i ? [!1, 0] : [!0, i];
    },
    truncateElement = (e, t, u, n, r, s) => {
        let o = -1,
            i = null;
        for (let a = u; a >= 0; a--) {
            const u = e[a],
                l = Number(e[a].getAttribute(BLOCK_TYPE));
            if (l === BlockType.LineBreak || l === BlockType.NewLine || l === BlockType.Binding) continue;
            const c = u.textContent || '';
            if (!(u.childElementCount > 1)) {
                const [e, l] = isElementAvailableForTruncation(u, n, r);
                if (!e) {
                    l > 0 && (r -= l);
                    continue;
                }
                const d = c.slice(0, c.length - l) + s,
                    E = t[a];
                ((i = React.cloneElement(E, E.props, d)), (o = a));
                break;
            }
            {
                const e = u.children,
                    l = t[a],
                    d = l.props.children,
                    [E, p] = truncateElement(e, d, e.length - 1, n, r, s);
                if (!(E < 0)) {
                    const e = d.slice(0, E);
                    ((i = React.cloneElement(l, l.props, e, p)), (o = a));
                    break;
                }
                r -= c.length;
            }
        }
        return [o, i];
    },
    searchLastInHeight = (e, t) => {
        let u = 0,
            n = e.length - 1;
        for (; n - u >= 0; ) {
            const r = u + Math.ceil(0.5 * (n - u));
            isVerticalOverflow(e[r], t) ? (n = r - 1) : (u = r + 1);
        }
        return u - 1;
    },
    truncateJsxElements = (e, t, u, n = TRUNCATE_IDENTIFY) => {
        const r = [...t],
            s = e.current;
        if (!s) return [r, !1];
        const o = u.height,
            i = u.width,
            a = s.lastElementChild;
        if (!isVerticalOverflow(a, o) && getPositionDiff(a, i) <= 0) return [r, !1];
        const l = s.children,
            c = searchLastInHeight(l, o);
        if (c < 0) return [r, !1];
        const [d, E] = truncateElement(l, r, c, i, n.length, n);
        return (E && (r.splice(d, 1, E), r.splice(d + 1)), [r, !0]);
    },
    root$2 = 'Extendedtext_root_56f425a9',
    base$3 = 'Extendedtext_34df2a2c',
    base__zeroPadding = 'Extendedtext_base__zeroPadding_bd1dbfd0',
    base__isTruncationAvailable = 'Extendedtext_base__isTruncationAvailable_21b9eaa',
    truncated = 'Extendedtext_truncated_6b4a3b66',
    truncated__hide = 'Extendedtext_truncated__hide_a75f6d91',
    unTruncated = 'Extendedtext_unTruncated_6ec70ccb',
    tooltip = 'Extendedtext_tooltip_7c24081e',
    styles$3 = {
        root: root$2,
        base: base$3,
        base__zeroPadding: base__zeroPadding,
        base__isTruncationAvailable: base__isTruncationAvailable,
        truncated: truncated,
        truncated__hide: truncated__hide,
        unTruncated: unTruncated,
        tooltip: tooltip,
        'tooltip__justify-flex-start': 'Extendedtext_tooltip__justify-flex-start_e5cbb138',
        'tooltip__justify-center': 'Extendedtext_tooltip__justify-center_f94c1d9b',
        'tooltip__justify-flex-end': 'Extendedtext_tooltip__justify-flex-end_3064a421',
        'tooltip__align-flex-start': 'Extendedtext_tooltip__align-flex-start_6ee44914',
        'tooltip__align-center': 'Extendedtext_tooltip__align-center_cfba61d0',
        'tooltip__align-flex-end': 'Extendedtext_tooltip__align-flex-end_b3a277de',
    },
    ExtendedTextComponent = ({
        text: e,
        classMix: t,
        onSizeChanged: u,
        binding: n,
        isTooltipEnable: r = !1,
        isTruncationAvailable: s = !1,
        customTooltipArgs: o,
        targetId: i,
        justifyContent: a = Alignment.FlexStart,
        alignContent: l = Alignment.FlexStart,
        truncateIdentify: c = TRUNCATE_IDENTIFY,
    }) => {
        const d = reactExports.useRef(null),
            E = reactExports.useRef({ height: 0, width: 0 }),
            [p, m] = reactExports.useState({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
            h = reactExports.useMemo(() => getJsxElementsList(e, n, { justifyContent: a }), [n, a, e]),
            _ = reactExports.useMemo(() => {
                if (r && p.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                    return {
                        args: { text: e, ...o, stringifyKwargs: n ? JSON.stringify(n) : '' },
                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                        targetId: i,
                    };
            }, [n, r, i, e, o, p.isTruncated]),
            A = reactExports.useCallback(
                (e) => {
                    ((E.current.width = e.contentRect.width), (E.current.height = e.contentRect.height));
                    const [t, n] = truncateJsxElements(d, h, E.current, c);
                    (m({ elementList: t, isTruncated: n, isTruncateFinished: !0 }), u && u(n));
                },
                [u, c, h],
            ),
            f = reactExports.useMemo(() => ({ justifyContent: a, alignContent: l }), [l, a]);
        return (
            useResizeObserver(d, A, s),
            jsxRuntimeExports.jsxs('div', {
                className: cx(styles$3.base, t, styles$3.base__zeroPadding, s && styles$3.base__isTruncationAvailable),
                style: f,
                children: [
                    jsxRuntimeExports.jsx('div', { className: styles$3.unTruncated, ref: d, children: h }),
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: _,
                        className: cx(
                            styles$3.tooltip,
                            styles$3[`tooltip__justify-${a}`],
                            styles$3[`tooltip__align-${l}`],
                        ),
                        children: jsxRuntimeExports.jsx('div', {
                            className: cx(styles$3.truncated, !p.isTruncateFinished && s && styles$3.truncated__hide),
                            style: f,
                            children: p.isTruncateFinished && s ? p.elementList : h,
                        }),
                    }),
                ],
            })
        );
    },
    ExtendedText = React.memo(ExtendedTextComponent);
var LogLevel = ((e) => (
    (e[(e.NonSet = 0)] = 'NonSet'),
    (e[(e.Debug = 10)] = 'Debug'),
    (e[(e.Info = 20)] = 'Info'),
    (e[(e.Warning = 30)] = 'Warning'),
    e
))(LogLevel || {});
const TOOLTIP_ACTION = 'tooltip_watched',
    TOOLTIP_TIME_LIMIT = 2,
    PROPERTIES_LIMIT = 200,
    MILLISECONDS = 1e3,
    METRICS_GROUP = 'metrics',
    getDate = () => Date.now(),
    addTimeSpent = (e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e),
    convertMetricsParams = ({ partnerID: e, item: t, parentScreen: u, itemState: n, info: r }) => ({
        item: t,
        partnerID: e || null,
        parent_screen: u || null,
        item_state: n || null,
        additional_info: r || null,
    }),
    _useLog = (e, t) => {
        const u = reactExports.useCallback(
            (u, n = LogLevel.Info, r) => {
                (r || (r = {}),
                    Object.keys(r).length >= PROPERTIES_LIMIT ||
                        window.uiLoggerModel.log({
                            feature: e,
                            group: t,
                            action: u,
                            logLevel: n,
                            params: JSON.stringify(r),
                        }));
            },
            [e, t],
        );
        return (e, t, n) => u(e, t, n);
    },
    _useLogTimeSpent = (e, t) => {
        const u = _useLog(e, t),
            n = reactExports.useRef(new Map()),
            r = reactExports.useRef(new Map()),
            s = reactExports.useCallback(
                (e) => {
                    if (!e) return;
                    const t = n.current.get(e);
                    (void 0 !== t && t > 0) || n.current.set(e, getDate());
                },
                [n],
            ),
            o = reactExports.useCallback(() => {
                (n.current.clear(), r.current.clear());
            }, [n, r]),
            i = reactExports.useCallback(
                (e) => {
                    e && void 0 !== n.current.get(e) && void 0 === r.current.get(e) && r.current.set(e, getDate());
                },
                [n, r],
            ),
            a = reactExports.useCallback(
                (e) => {
                    if (!e) return;
                    const t = n.current.get(e);
                    if (void 0 === t) return;
                    const u = r.current.get(e);
                    if (void 0 === u) return;
                    r.current.delete(e);
                    const s = getDate() - u;
                    n.current.set(e, t + s);
                },
                [n, r],
            ),
            l = reactExports.useCallback(
                (e, t = 0, s, o) => {
                    const i = n.current.get(e);
                    if (void 0 === i) return;
                    (void 0 !== r.current.get(e) && a(e), n.current.delete(e));
                    const l = (getDate() - i) / MILLISECONDS;
                    l <= t || ((o = addTimeSpent(o, l)), u(e, s, o));
                },
                [n, r, u, a],
            );
        return [(e) => s(e), (e, t, u, n) => l(e, t, u, n), () => o(), (e) => i(e), (e) => a(e)];
    },
    useMetricsLogTimeSpent = (e) => {
        const [t, u, n, r, s] = _useLogTimeSpent(e, METRICS_GROUP),
            o = reactExports.useCallback(
                (e) => {
                    const { action: t, timeLimit: n, logLevel: r } = e;
                    u(t, n, r, convertMetricsParams(e));
                },
                [u],
            );
        return [(e) => t(e), (e) => o(e), () => n(), (e) => r(e), (e) => s(e)];
    },
    useTooltipLogger = (e, t) => {
        const [u, n] = useMetricsLogTimeSpent(e),
            { action: r, timeLimit: s, ...o } = t;
        return reactExports.useMemo(
            () => ({
                onShow: () => u(r || TOOLTIP_ACTION),
                onHide: () => n({ action: r || TOOLTIP_ACTION, timeLimit: s || TOOLTIP_TIME_LIMIT, ...o }),
            }),
            [r, s, o, u, n],
        );
    };
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
        e
    ))(ImageSize || {}),
    ValueTypes = ((e) => (
        (e.MULTI = 'multi'),
        (e.CURRENCY = 'currency'),
        (e.PREMIUM_PLUS = 'premium_plus'),
        (e.NUMBER = 'number'),
        (e.STRING = 'string'),
        e
    ))(ValueTypes || {}),
    Specials = ((e) => (
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
    ))(Specials || {}),
    HighlightClasses = ((e) => ((e.BATTLE_BOOSTER = 'battleBooster'), e))(HighlightClasses || {}),
    OverlayClasses = ((e) => (
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
    ))(OverlayClasses || {});
const NORMALIZE_OVERLAYS_LIST = ['attachment'];
function getNumberFormatType(e) {
    return 'gold' === e ? NumberFormatType.GOLD : NumberFormatType.INTEGRAL;
}
const FormatNumber = ({ value: e, format: t = 'integral' }) => {
        const u = getNumberFormatType(t),
            n = SystemLocale.getNumberFormat(e, u);
        return void 0 !== e && void 0 !== n ? n : null;
    },
    multiValueTypes = [
        RewardType.Items,
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
        RewardType.BattlePassTicket,
        RewardType.BonusX5,
        RewardType.CrewBonusX3,
        RewardType.EpicSelectToken,
        RewardType.Comp7TokenWeeklyReward,
        RewardType.DeluxeGift,
        RewardType.ModernizedDevicesT1Gift,
        RewardType.ModernizedDevicesT2Gift,
        RewardType.ModernizedDevicesT3Gift,
        RewardType.BattleBoosterGift,
        RewardType.OptionalDevice,
        RewardType.Attachment,
    ],
    currencyValueTypes = [RewardType.Gold, RewardType.Credits, RewardType.Crystal, RewardType.FreeXp],
    numberValueTypes = [RewardType.BattlePassPoints, RewardType.EquipCoin],
    premiumValueTypes = [RewardType.PremiumPlus, RewardType.Premium],
    getRewardValueType = (e) =>
        multiValueTypes.includes(e)
            ? ValueTypes.MULTI
            : currencyValueTypes.includes(e)
              ? ValueTypes.CURRENCY
              : numberValueTypes.includes(e)
                ? ValueTypes.NUMBER
                : premiumValueTypes.includes(e)
                  ? ValueTypes.PREMIUM_PLUS
                  : ValueTypes.STRING,
    getRewardTooltipConfig = (e, t, u) => {
        const n = t && { contentId: t };
        return {
            args: e,
            isEnabled: Boolean((e && e.tooltipId) || t),
            ignoreMouseClick: !0,
            ignoreShowDelay: !t,
            ...n,
            ...u,
        };
    },
    SIZES_WITH_BOTTOM_HIGHLIGHT = [ImageSize.Small, ImageSize.Big],
    getBottomHighlight = (e, t) => {
        if (void 0 === t || !SIZES_WITH_BOTTOM_HIGHLIGHT.includes(e)) return null;
        switch (t) {
            case Specials.BATTLE_BOOSTER:
            case Specials.BATTLE_BOOSTER_REPLACE:
                return HighlightClasses.BATTLE_BOOSTER;
        }
    },
    getOverlay = (e) => {
        if (void 0 === e) return null;
        switch (e) {
            case Specials.BATTLE_BOOSTER:
                return OverlayClasses.BATTLE_BOOSTER;
            case Specials.BATTLE_BOOSTER_REPLACE:
                return OverlayClasses.BATTLE_BOOSTER_REPLACE;
            case Specials.BUILT_IN_EQUIPMENT:
                return OverlayClasses.BUILT_IN_EQUIPMENT;
            case Specials.EQUIPMENT_PLUS:
                return OverlayClasses.EQUIPMENT_PLUS;
            case Specials.EQUIPMENT_TROPHY_BASIC:
                return OverlayClasses.EQUIPMENT_TROPHY_BASIC;
            case Specials.EQUIPMENT_TROPHY_UPGRADED:
                return OverlayClasses.EQUIPMENT_TROPHY_UPGRADED;
            case Specials.EQUIPMENT_MODERNIZED_UPGRADED_1:
                return OverlayClasses.EQUIPMENT_MODERNIZED_UPGRADED_1;
            case Specials.EQUIPMENT_MODERNIZED_UPGRADED_2:
                return OverlayClasses.EQUIPMENT_MODERNIZED_UPGRADED_2;
            case Specials.EQUIPMENT_MODERNIZED_UPGRADED_3:
                return OverlayClasses.EQUIPMENT_MODERNIZED_UPGRADED_3;
            case Specials.PROGRESSION_STYLE_UPGRADED_1:
                return OverlayClasses.PROGRESSION_STYLE_UPGRADED_1;
            case Specials.PROGRESSION_STYLE_UPGRADED_2:
                return OverlayClasses.PROGRESSION_STYLE_UPGRADED_2;
            case Specials.PROGRESSION_STYLE_UPGRADED_3:
                return OverlayClasses.PROGRESSION_STYLE_UPGRADED_3;
            case Specials.PROGRESSION_STYLE_UPGRADED_4:
                return OverlayClasses.PROGRESSION_STYLE_UPGRADED_4;
            case Specials.PROGRESSION_STYLE_UPGRADED_5:
                return OverlayClasses.PROGRESSION_STYLE_UPGRADED_5;
            case Specials.PROGRESSION_STYLE_UPGRADED_6:
                return OverlayClasses.PROGRESSION_STYLE_UPGRADED_6;
            case Specials.ATTACHMENT_RARE:
                return OverlayClasses.ATTACHMENT_RARE;
            case Specials.ATTACHMENT_EPIC:
                return OverlayClasses.ATTACHMENT_EPIC;
            case Specials.ATTACHMENT_LEGENDARY:
                return OverlayClasses.ATTACHMENT_LEGENDARY;
        }
    },
    getFormattedValue = (e, t) => {
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
    root$1 = 'Reward_root_ab59d545',
    base$2 = 'Reward_c5dc614c',
    base__s48x48 = 'Reward_base__s48x48_ab59d545',
    base__small = 'Reward_base__small_69779e9c',
    base__s80x80 = 'Reward_base__s80x80_ab59d545',
    base__big = 'Reward_base__big_4733a488',
    base__s128x100 = 'Reward_base__s128x100_fb15aafa',
    base__s180x135 = 'Reward_base__s180x135_16cc707b',
    base__s232x174 = 'Reward_base__s232x174_e32aac73',
    base__s296x222 = 'Reward_base__s296x222_c9fbf416',
    base__s400x300 = 'Reward_base__s400x300_76ba5081',
    base__s600x450 = 'Reward_base__s600x450_aba4634a',
    tooltipWrapper = 'Reward_tooltipWrapper_5c2caa5a',
    icon = 'Reward_icon_ae345d69',
    overlay = 'Reward_overlay_ff0a7872',
    base__normalize = 'Reward_base__normalize_ab59d545',
    highlight = 'Reward_highlight_ac5e429a',
    image = 'Reward_image_d9c7ed84',
    info = 'Reward_info_29e76ef9',
    info__multi = 'Reward_info__multi_14b911c',
    info__credits = 'Reward_info__credits_a7e7bbe',
    info__gold = 'Reward_info__gold_c2d9d72c',
    info__bptaler = 'Reward_info__bptaler_ab59d545',
    info__crystal = 'Reward_info__crystal_ec55d024',
    info__premiumTank = 'Reward_info__premiumTank_67c21f6d',
    title = 'Reward_title_50579ad9',
    timer = 'Reward_timer_98cb5bca',
    styles$2 = {
        root: root$1,
        base: base$2,
        base__s48x48: base__s48x48,
        base__small: base__small,
        base__s80x80: base__s80x80,
        base__big: base__big,
        base__s128x100: base__s128x100,
        base__s180x135: base__s180x135,
        base__s232x174: base__s232x174,
        base__s296x222: base__s296x222,
        base__s400x300: base__s400x300,
        base__s600x450: base__s600x450,
        tooltipWrapper: tooltipWrapper,
        icon: icon,
        overlay: overlay,
        base__normalize: base__normalize,
        highlight: highlight,
        image: image,
        info: info,
        info__multi: info__multi,
        info__credits: info__credits,
        info__gold: info__gold,
        info__bptaler: info__bptaler,
        info__crystal: info__crystal,
        info__premiumTank: info__premiumTank,
        title: title,
        timer: timer,
    },
    Reward = ({
        name: e,
        image: t,
        isPeriodic: u = !1,
        size: n = ImageSize.Big,
        special: r,
        value: s,
        valueType: o,
        title: i,
        style: a,
        className: l,
        classNames: c,
        tooltipArgs: d,
        periodicIconTooltipArgs: E,
    }) => {
        const p = getBottomHighlight(n, r),
            m = getOverlay(r),
            h = getFormattedValue(s, o);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(
                styles$2.base,
                styles$2[`base__${n}`],
                NORMALIZE_OVERLAYS_LIST.includes(e) && styles$2.base__normalize,
                l,
            ),
            style: a,
            children: [
                jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                    tooltipArgs: d,
                    className: styles$2.tooltipWrapper,
                    children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [
                            jsxRuntimeExports.jsxs('div', {
                                className: cx(styles$2.image, null == c ? void 0 : c.image),
                                children: [
                                    p &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$2.highlight, null == c ? void 0 : c.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${p}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$2.icon, null == c ? void 0 : c.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    m &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$2.overlay, null == c ? void 0 : c.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_overlay)`,
                                            },
                                        }),
                                ],
                            }),
                            h &&
                                jsxRuntimeExports.jsx('div', {
                                    className: cx(
                                        styles$2.info,
                                        styles$2[`info__${e}`],
                                        o === ValueTypes.MULTI && styles$2.info__multi,
                                        null == c ? void 0 : c.info,
                                    ),
                                    children: h,
                                }),
                            i && jsxRuntimeExports.jsx('div', { className: styles$2.title, children: i }),
                        ],
                    }),
                }),
                u &&
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: E,
                        children: jsxRuntimeExports.jsx('div', {
                            className: cx(styles$2.timer, null == c ? void 0 : c.periodicIcon),
                        }),
                    }),
            ],
        });
    },
    getRegionalDateTime = RegionalDateTime.getRegionalDateTime,
    getFormattedDateTime = RegionalDateTime.getFormattedDateTime,
    DateTime = ({ datetime: e, format: t = DateTimeFormatsEnum.ShortDate, isConvertedToLocal: u = !0 }) =>
        Object.values(DateTimeFormatsEnum).includes(t) ? getRegionalDateTime(e, t, u) : getFormattedDateTime(e, t, u),
    DateTime$1 = reactExports.memo(DateTime);
function isSerializableReactNode(e) {
    return (
        !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
        (!reactExports.isValidElement(e) && !!Array.isArray(e) && e.every(isSerializableReactNode))
    );
}
const base$1 = 'MultilineOverflow_8834bd8e',
    content = 'MultilineOverflow_content_b539970d',
    styles$1 = { base: base$1, content: content };
function isSerializableParams(e) {
    return !e || Object.values(e).every(isSerializableReactNode);
}
const MultilineOverflow = reactExports.forwardRef(function (
        {
            text: e,
            brackets: t,
            params: u,
            formatters: n,
            upgradeLegacy: r,
            split: s = !0,
            onMouseEnter: o,
            onMouseLeave: i,
            onClick: a,
            tooltipDisabled: l = !1,
            tooltip: c,
            className: d,
            classNames: E,
            ...p
        },
        m,
    ) {
        const h = reactExports.useRef(null),
            [_, A] = reactExports.useState(!1);
        reactExports.useEffect(() => {
            if (0 === e.length) return;
            const t = h.current;
            if (!t) return;
            const u = document.createElement('div');
            let n = noop$1;
            function r() {
                if (!t) return;
                (n(),
                    (u.style.visibility = 'hidden'),
                    (u.className = cx(styles$1.content, t.children[0].className)),
                    (u.innerHTML = ''),
                    t.appendChild(u));
                for (let n of t.children[0].childNodes.values()) {
                    if (n instanceof HTMLElement) {
                        const e = n.cloneNode(!0);
                        u.appendChild(e);
                    }
                    if (n.nodeType === Node.TEXT_NODE) {
                        const e = document.createTextNode(n.nodeValue ?? '');
                        u.appendChild(e);
                    }
                }
                const e = document.createElement('div');
                ((e.innerHTML = '...'),
                    u.appendChild(e),
                    (n = createLayoutReadyInEffect$1(() => {
                        var n, r;
                        const s = [];
                        for (let e = u.childNodes.length - 2; 0 !== e; e--) {
                            const n = u.childNodes[e];
                            if (n instanceof HTMLElement) {
                                if (n.offsetTop + n.offsetHeight <= t.offsetHeight) break;
                                s.push(n);
                            }
                        }
                        s.forEach((e) => e.remove());
                        const o = null == (n = u.lastChild) ? void 0 : n.previousSibling;
                        (0 === s.length
                            ? (null == (r = u.lastChild) || r.remove(), A(!1))
                            : o.offsetWidth + o.offsetLeft + e.offsetWidth > t.offsetWidth
                              ? (o.remove(), A(!0))
                              : A(!0),
                            (u.style.visibility = ''));
                    })));
            }
            const s = new ResizeObserver(r);
            return (
                s.observe(t),
                new DisposeBuilder()
                    .add(() => n())
                    .add(addEventListener(window, 'resize', r))
                    .add(s.disconnect.bind(s))
                    .add(u.remove.bind(u)).dispose
            );
        }, [m, e]);
        const f = isSerializableParams(u),
            F = useParamTooltip(
                'format_text',
                reactExports.useMemo(
                    () => ({
                        text: e,
                        params: f ? u : void 0,
                        split: s,
                        upgradeLegacy: r,
                        brackets: t,
                        resId: resources.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [e, t, s, r, u, f],
                ),
            ),
            g = c ?? F;
        if (
            (reactExports.useEffect(() => {
                l || _ || g.onMouseLeave();
            }, [_, g, c, l, f]),
            0 === e.length)
        )
            return null;
        return jsxRuntimeExports.jsx('div', {
            ...p,
            onMouseEnter: function (e) {
                (null == o || o(e), _ && !l && g.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == a || a(e), l || g.onClick());
            },
            onMouseLeave: function (e) {
                (null == i || i(e), l || g.onMouseLeave());
            },
            ref: assignRefs([m, h]),
            className: cx(styles$1.base, d, null == E ? void 0 : E.base),
            children: jsxRuntimeExports.jsx(FormatText, {
                text: e,
                brackets: t,
                params: u,
                upgradeLegacy: r,
                split: s,
                formatters: n,
                className: null == E ? void 0 : E.text,
                style: { visibility: 'hidden' },
            }),
        });
    }),
    clamp = (e, t, u) => (u < e ? e : u > t ? t : u),
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
    };
function noop() {}
const useMount = (e) => {
        reactExports.useEffect(e, []);
    },
    useUnmount = (e) => {
        reactExports.useEffect(() => e, []);
    };
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
            isPrebufferKeyframes: s,
            keyframesNameConfig: o,
            onClick: i,
            ...a
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
                        if (!c || !e || !s) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps();
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  null == e || e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [s, c],
            ),
            reactExports.useEffect(() => {
                if (c && d.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: noop },
                        t = () => {
                            let t = 0;
                            const [u, n] = requestAnimationFrameLoop(() => {
                                if (d.current) {
                                    const { currentTime: u, duration: n } = d.current;
                                    if (
                                        (t !== u &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: u, duration: n })),
                                            (t = u)),
                                        d.current.paused || !c || !s)
                                    )
                                        return;
                                    const r = d.current.cohGetKeyframeTimestamps();
                                    r.forEach((t, n) => {
                                        u > r[n] - THRESHOLD &&
                                            u < r[n] &&
                                            e.changeKeyframeHandlers.forEach((e) => {
                                                const u = Object.keys(o ?? {})[n];
                                                return e({
                                                    time: t,
                                                    name: `${o ? u : `${DEFAULT_NAME_KEYFRAME}_${n}`}`,
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
                        i = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.duration;
                        },
                        a = (e) => {
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
                            (E(), a(0));
                        },
                        m = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps()) ?? [];
                        },
                        h = (e) => {
                            (a(e), l());
                        },
                        _ = (e) => {
                            (a(e), E());
                        },
                        A = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        f = (e, t) => {
                            var u;
                            return (
                                null == (u = d.current) || u.addEventListener(e, t),
                                () => {
                                    var u;
                                    return null == (u = d.current) ? void 0 : u.removeEventListener(e, t);
                                }
                            );
                        },
                        F = (e, t) => {
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
                            on: f,
                            off: F,
                            play: l,
                            pause: E,
                            stop: p,
                            cleanup: A,
                            getCurrentTime: r,
                            getDuration: i,
                            getCachedKeyframes: m,
                            goToAndPlay: h,
                            goToAndStop: _,
                            setCurrentTime: a,
                            domRef: d.current,
                            onChangeTime: u,
                            onKeyframes: n,
                        }),
                        () => {
                            (A(), (c.current = null));
                        }
                    );
                }
            }, [o, c, s]),
            reactExports.useEffect(() => {
                d.current && u && d.current.play();
            }, [u, r]),
            reactExports.useEffect(() => {
                if (d.current)
                    return () => {
                        d.current && d.current.pause();
                    };
            }, []),
            jsxRuntimeExports.jsx('video', { src: e, className: t, style: n, loop: r, ref: d, onClick: i, ...a })
        );
    }),
    Video = reactExports.memo(VideoForwarded),
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
const root = 'Tooltipdecorator_root_a254689f',
    base = 'Tooltipdecorator_ea72f443',
    decorator = 'Tooltipdecorator_decorator_3580e101',
    styles = {
        root: root,
        base: base,
        'base__theme-default': 'Tooltipdecorator_base__theme-default_a254689f',
        decorator: decorator,
    },
    TooltipDecorator = React.forwardRef(function ({ children: e, className: t, theme: u = 'default', ...n }, r) {
        const s = useSkipFrame(),
            o = React.useRef(null);
        return (
            useMount(() => {
                s.run(() => {
                    const e = o.current;
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
                className: cx(styles.base, styles[`base__theme-${u}`], t),
                ref: function (e) {
                    ((o.current = e), 'function' == typeof r ? r(e) : r && (r.current = e));
                },
                children: jsxRuntimeExports.jsx('div', { className: styles.decorator, children: e }),
            })
        );
    });
export {
    Alignment as A,
    Button as B,
    CloseButton as C,
    DynamicTooltipWrapper as D,
    ExtendedText as E,
    FormatText as F,
    getSize$1 as G,
    useMount$1 as H,
    ImageSize as I,
    JSXBuilder as J,
    ValueTypes as K,
    mapRange as L,
    MultilineOverflow as M,
    TooltipDecorator as N,
    useCountdown as O,
    ONE_MINUTE as P,
    format as Q,
    Reward as R,
    getTimeUnits as S,
    Tooltip as T,
    UIProvider as U,
    Video as V,
    useTooltipLogger as a,
    breakpointsByType as b,
    constFalse as c,
    getRewardValueType as d,
    useKeydownListener as e,
    find as f,
    getRewardTooltipConfig as g,
    DateTime$1 as h,
    initializeModelWithContext as i,
    DateTimeFormatsEnum as j,
    keyCodes as k,
    resources as l,
    map as m,
    useSounds as n,
    useSimpleTooltip as o,
    play as p,
    useSpecialTooltip as q,
    runView as r,
    makeActions as s,
    createSimpleGetter as t,
    useMedia as u,
    createMockControls as v,
    identity as w,
    noop$1 as x,
    graphicsQuality as y,
    get as z,
};
