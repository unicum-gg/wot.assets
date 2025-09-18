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
    l as loadDefaultJapaneseParser,
    r as reactExports,
    j as jsxRuntimeExports,
    f as cx,
    u as useSpring,
    o as observable,
    g as untracked,
    R as React,
    h as client$1,
    i as loadDefaultJapaneseParser$1,
    k as cva,
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
        const r = u.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, e);
        if (!r) return;
        return 'function' == typeof r[t] ? r[t]() : void 0;
    }
    throw new Error('R class with images field is not defined');
}
class ImagesRClassProvider {
    constructor(e, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, u = 'silent') {
        const r = concatWithPath(this.prefix, e),
            n = readFromR$2(this.root, r);
        return void 0 === n ? ('silent' !== u && logBySeverity$1(`Resource not found: ${r}`, u), t()) : n;
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
function validateTimestamp(e) {
    return Number.isFinite(e)
        ? e < 0
            ? (console.error(`Negative timestamp (${e}) is not allowed. Clamping to 0.`), 0)
            : e > Number.MAX_SAFE_INTEGER
              ? (console.error(`Number(${e}) is bigger than MAX_SAFE_INTEGER. Clamping to ${Number.MAX_SAFE_INTEGER}.`),
                Number.MAX_SAFE_INTEGER)
              : e
        : (console.error(`Incorrect value to convert. Value is ${e}. Expected a finite number.`), 0);
}
function formatDateTime(e, t, u = !0) {
    return window.regionalDateTime.getRegionalDateTime(validateTimestamp(t), e, u);
}
const timeFormats = { full: DateTimeFormatsEnum.FullTime, short: DateTimeFormatsEnum.ShortTime },
    timeFormatList = Object.keys(timeFormats);
function formatTime(e, t, u = !0) {
    return window.regionalDateTime.getRegionalDateTime(validateTimestamp(t), e, u);
}
const systemFormat = { short: 0, full: 1 },
    system = {
        time: (e, t) => window.systemLocale.getTimeFormat(validateTimestamp(e), systemFormat[t]),
        date: (e, t) => window.systemLocale.getDateFormat(validateTimestamp(e), systemFormat[t]),
    },
    intl = {
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
        system: system,
    };
class SoundsRClassProvider {
    play(e) {
        const t = window.R.sounds[e];
        'function' == typeof t
            ? engine.call('PlaySound', t.apply(window.R.sounds))
            : logBySeverity$1(`Sound not found: ${e}`, 'warn');
    }
}
function readFromR$1(e, t) {
    const u = e.split('.');
    if (window.R && window.R.strings) {
        const e = u[u.length - 1];
        if (!e) return;
        const r = window.R.strings,
            n = u.slice(0, -1).reduce((e, t) => {
                if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
            }, r);
        if (!n) return;
        return 'function' == typeof n[e] ? (t ? n[e](t) : n[e]()) : void 0;
    }
    throw new Error('R class with strings field is not defined');
}
class StringsRClassProvider {
    constructor(e) {
        this.prefix = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, u = 'silent') {
        const r = concatWithPath(this.prefix, e),
            n = readFromR$1(r);
        return void 0 === n ? ('silent' !== u && logBySeverity$1(`Resource not found: ${r}`, u), t()) : n;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = concatWithPath(this.prefix, e),
            u = readFromR$1(t);
        if (void 0 === u) throw new Error(`Resource not found: ${t}`);
        return u;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, u, r = 'silent') {
        const n = concatWithPath(this.prefix, e),
            s = readFromR$1(n, t);
        return void 0 === s ? ('silent' !== r && logBySeverity$1(`Resource not found: ${n}`, r), u()) : s;
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
        const r = u.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, e);
        if (!r) return;
        return 'function' == typeof r[t] ? r[t]() : void 0;
    }
    throw new Error('R class with videos field is not defined');
}
class VideosRClassProvider {
    constructor(e = window.R.videos) {
        this.root = e;
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, u = 'silent') {
        const r = readFromR(this.root, e);
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
function curry2(e) {
    return function (t, u) {
        switch (arguments.length) {
            case 1:
                return function (u) {
                    return e(t, u);
                };
            case 2:
                return e(t, u);
        }
    };
}
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
const typeId = Symbol('Duration');
function isDuration(e) {
    return 'object' == typeof e && null !== e && e[typeId] === typeId;
}
function millis(e) {
    return { [typeId]: typeId, value: e, unit: 'millis' };
}
const zero = millis(0);
function seconds(e) {
    return { [typeId]: typeId, value: e, unit: 'seconds' };
}
const toMs = {
        millis: (e) => e,
        seconds: (e) => 1e3 * e,
        minutes: (e) => 1e3 * e * 60,
        hours: (e) => 1e3 * e * 60 * 60,
        days: (e) => 1e3 * e * 60 * 60 * 24,
        weeks: (e) => 1e3 * e * 60 * 60 * 24 * 7,
    },
    fromMs = {
        millis: (e) => e,
        seconds: (e) => e / 1e3,
        minutes: (e) => e / 1e3 / 60,
        hours: (e) => e / 1e3 / 60 / 60,
        days: (e) => e / 1e3 / 60 / 60 / 24,
        weeks: (e) => e / 1e3 / 60 / 60 / 24 / 7,
    };
function toMillis(e) {
    return (0, toMs[e.unit])(e.value);
}
const add = curry2(function (e, t) {
        return millis(toMillis(e) + toMillis(t));
    }),
    subtract = curry2(function (e, t) {
        return millis(toMillis(e) - toMillis(t));
    }),
    greaterThan = curry2(function (e, t) {
        return toMillis(e) > toMillis(t);
    }),
    gt = greaterThan,
    lessThan = curry2(function (e, t) {
        return toMillis(e) < toMillis(t);
    }),
    lt = lessThan,
    formats$1 = {
        DD: (e) => Math.floor(fromMs.days(e)).toString().padStart(2, '0'),
        D: (e) => Math.floor(fromMs.days(e)).toString(),
        WW: (e) => Math.floor(fromMs.weeks(e)).toString().padStart(2, '0'),
        W: (e) => Math.floor(fromMs.weeks(e)).toString(),
        hh: (e) =>
            Math.floor(fromMs.hours(e) % 24)
                .toString()
                .padStart(2, '0'),
        mm: (e) =>
            Math.floor(fromMs.minutes(e) % 60)
                .toString()
                .padStart(2, '0'),
        ss: (e) =>
            Math.floor(fromMs.seconds(e) % 60)
                .toString()
                .padStart(2, '0'),
        h: (e) => Math.floor(fromMs.hours(e) % 24).toString(),
        m: (e) => Math.floor(fromMs.minutes(e) % 60).toString(),
        s: (e) => Math.floor(fromMs.seconds(e) % 60).toString(),
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
function format$2(e, t) {
    const u = toMillis(e);
    return t.map((e) => formats$1[e](u));
}
function format$1(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function getRegionalDateTime$1(e, t, u = !0) {
    return window.regionalDateTime.getRegionalDateTime(e, t, u);
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
    function r() {
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
                        const n = `mouse${t}`,
                            s = internalMouse$1[t]((e) => u([e, 'outside']));
                        function a(e) {
                            u([e, 'inside']);
                        }
                        return (
                            window.addEventListener(n, a),
                            r(),
                            () => {
                                (s(), window.removeEventListener(n, a), (e.listeners -= 1), r());
                            }
                        );
                    };
                })(u)),
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
function getMouseGlobalPosition$1(e = 'px') {
    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
}
function playSound$2(e) {
    engine.call('PlaySound', e);
}
initMouseEvents$1();
const sounds$1 = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays$1 = Object.keys(sounds$1).reduce((e, t) => ((e[t] = () => playSound$2(sounds$1[t])), e), {}),
    play$1 = { ...plays$1, sound: playSound$2 },
    displayStatus$1 = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    createSubscribeHitTest = () => {
        const e = new Set(),
            t = (t, u) => {
                for (const r of e.values())
                    if (r(t)) {
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
        for (const [u, r] of Object.entries(e)) {
            const e = serializeEventArgument(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: u, ...e });
        }
        return t;
    },
    sendViewEvent$1 = (e, t) => {
        const u = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...n } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: u, type: e, ...n, arguments: createViewEventArguments$2(r) })
                : viewEnv.handleViewEvent({ __Type: u, type: e, ...n });
        }
        return viewEnv.handleViewEvent({ __Type: u, type: e });
    },
    openedTooltips = new Map(),
    sendEvent$1 = {
        tooltip: {
            open(e, t, u = 0, r) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, {
                    contentID: t,
                    decoratorID: u,
                    targetID: e,
                    isMouseEvent: !0,
                    on: !0,
                    args: r,
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
function enableFullScreenModeSupported$1() {
    viewEnv.setFullscreenModeSupported(!0);
}
function initExternalPaddings$1(e) {
    function t() {
        const { top: t, right: u, bottom: r, left: n } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${u}rem`),
            e.style.setProperty('--external-padding-bottom', `${r}rem`),
            e.style.setProperty('--external-padding-left', `${n}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
function pipe(e, t, u, r, n, s, a, o, i) {
    switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return t(e);
        case 3:
            return u(t(e));
        case 4:
            return r(u(t(e)));
        case 5:
            return n(r(u(t(e))));
        case 6:
            return s(n(r(u(t(e)))));
        case 7:
            return a(s(n(r(u(t(e))))));
        case 8:
            return o(a(s(n(r(u(t(e)))))));
        case 9:
            return i(o(a(s(n(r(u(t(e))))))));
        default: {
            let e = arguments[0];
            for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
            return e;
        }
    }
}
function compose(e, t, u, r, n, s, a, o, i) {
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
                return r(u(t(e.apply(this, arguments))));
            };
        case 5:
            return function () {
                return n(r(u(t(e.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return s(n(r(u(t(e.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return a(s(n(r(u(t(e.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return o(a(s(n(r(u(t(e.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return i(o(a(s(n(r(u(t(e.apply(this, arguments)))))))));
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
var define_process_env_default$1 = {};
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
        getRoot: u = 'true' === define_process_env_default$1.PUBLIC_DEBUG_MODEL_ACCESS
            ? compose(getRootDefault, makeLoggerProxy)
            : getRootDefault,
        context: r = 'model',
    } = {},
    { name: n = 'DataLayer' } = {},
) {
    const s = new Map(),
        a = { subscribersNotified: new SimpleEmitter() },
        o = engine.whenReady.then(() => {
            function e(e, t, u) {
                (u.forEach((u) => {
                    const r = s.get(u);
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
    function i() {
        try {
            const e = u(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${n}. Root id: ${t}. Context: ${r}`);
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
        } catch (s) {
            throw new Error(`Failure readByPath in ${n}. Root id: ${t}. Context: ${r}:\n${s}\n`);
        }
    };
    function c(e) {
        viewEnv.removeDataChangedCallback(e, t) ? s.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (u, n) => {
            const a = addModelObserver$1('string' == typeof n ? `${r}.${n}` : r, t, !0);
            return (s.set(a, u), e && u(l(n), []), a);
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
            if (0 === t || ids().includes(t)) for (const e of s.keys()) c(e);
            o.then((e) => e());
        },
        unsubscribe: c,
        events: a,
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
        createCallback: (u, r) => {
            const n = e(resolvePath(r, t));
            return (...e) => {
                n(u(...e));
            };
        },
        createCallbackNoArgs: (u) => {
            const r = e(resolvePath(u, t));
            return () => {
                r();
            };
        },
        dispose: () => {},
        unsubscribe: () => {},
        events: { subscribersNotified: new SimpleEmitter() },
    };
}
function noop() {}
function identity(e) {
    return e;
}
function constFalse() {
    return !1;
}
function isFunction(e) {
    return 'function' == typeof e;
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((a.prototype.append = function (e, t) {
                ((e = n(e)), (t = s(t)));
                var u = this.map[e];
                (u || ((u = []), (this.map[e] = u)), u.push(t));
            }),
                (a.prototype.delete = function (e) {
                    delete this.map[n(e)];
                }),
                (a.prototype.get = function (e) {
                    var t = this.map[n(e)];
                    return t ? t[0] : null;
                }),
                (a.prototype.getAll = function (e) {
                    return this.map[n(e)] || [];
                }),
                (a.prototype.has = function (e) {
                    return this.map.hasOwnProperty(n(e));
                }),
                (a.prototype.set = function (e, t) {
                    this.map[n(e)] = [s(t)];
                }),
                (a.prototype.forEach = function (e) {
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
                r = !(
                    'undefined' == typeof window ||
                    !window.ActiveXObject ||
                    (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
                );
            (c.call(d.prototype),
                c.call(E.prototype),
                (self.Headers = a),
                (self.Request = d),
                (self.Response = E),
                (self.fetch = function (t, u) {
                    var n;
                    return (
                        (n = d.prototype.isPrototypeOf(t) && !u ? t : new d(t, u)),
                        new fetch.Promise(function (t, u) {
                            var s = (function () {
                                return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function a() {
                                if (4 === s.readyState) {
                                    var e = 1223 === s.status ? 204 : s.status;
                                    if (e < 100 || e > 599) u(new TypeError('Network request failed'));
                                    else {
                                        var r = {
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
                                            n = 'response' in s ? s.response : s.responseText;
                                        t(new E(n, r));
                                    }
                                }
                            }
                            ('cors' === n.credentials && (s.withCredentials = !0),
                                (s.onreadystatechange = a),
                                self.usingActiveXhr ||
                                    ((s.onload = a),
                                    (s.onerror = function () {
                                        u(new TypeError('Network request failed'));
                                    })),
                                s.open(n.method, n.url, !0),
                                'responseType' in s && e && (s.responseType = 'blob'),
                                n.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        s.setRequestHeader(e, t);
                                    });
                                }),
                                s.send(void 0 === n._bodyInit ? null : n._bodyInit));
                        })
                    );
                }),
                (fetch.Promise = self.Promise),
                (self.fetch.polyfill = !0));
        }
        function n(e) {
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
        function o(e) {
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
                          var e = o(this);
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
                              u = o(this);
                          if (u) return u;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), i(t));
                          if (this._bodyFormData) throw new Error('could not read FormData body as text');
                          return fetch.Promise.resolve(this._bodyText);
                      }))
                    : (this.text = function () {
                          var e = o(this);
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
            var r, n;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new a(t.headers)),
                (this.method = ((r = t.method || 'GET'), (n = r.toUpperCase()), u.indexOf(n) > -1 ? n : r)),
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
                            var u = e.split('='),
                                r = u.shift().replace(/\+/g, ' '),
                                n = u.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(r), decodeURIComponent(n));
                        }
                    }),
                t
            );
        }
        function p(e) {
            var t = new a();
            return (
                e
                    .getAllResponseHeaders()
                    .trim()
                    .split('\n')
                    .forEach(function (e) {
                        var u = e.trim().split(':'),
                            r = u.shift().trim(),
                            n = u.join(':').trim();
                        t.append(r, n);
                    }),
                t
            );
        }
        function E(e, t) {
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
const keyCodes = { NONE: -1, ESCAPE: 27 };
function isNullable(e) {
    return null == e;
}
function isNonNullable(e) {
    return !1 === isNullable(e);
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
    return Array.isArray(e) ? e.map(t) : e.map((e, u, r) => t(null == e ? void 0 : e.value, u, r));
}
function some(e, t) {
    if (Array.isArray(e)) return e.some(t);
    for (let u = 0; u < e.length; u++) {
        if (t(unsafeGet(e, u), u, e)) return !0;
    }
    return !1;
}
function filter(e, t) {
    var u;
    if (Array.isArray(e)) return e.filter(t);
    const r = [];
    for (let n = 0; n < e.length; n++) {
        const s = null == (u = e[n]) ? void 0 : u.value;
        t(s, n, e) && r.push(s);
    }
    return r;
}
function find(e, t) {
    for (let u = 0; u < e.length; u++) {
        const r = unwrapItem(e[u]);
        if (t(r, u, e)) return r;
    }
}
function includes(e, t) {
    for (let u = 0; u < e.length; u++) {
        if (unsafeGet(e, u) === t) return !0;
    }
    return !1;
}
function filterMap(e, t, u) {
    const r = [];
    for (let n = 0; n < e.length; n++) {
        const s = unsafeGet(e, n);
        t(s, n, e) && r.push(u(s, n, e));
    }
    return r;
}
function mapExists(e, t) {
    return filterMap(e, isNonNullable, t);
}
function findIndex(e, t) {
    for (let u = 0; u < e.length; u++) {
        if (t(unsafeGet(e, u), u, e)) return u;
    }
}
function reduce(e, t, u) {
    if (Array.isArray(e)) return e.reduce(t, u);
    let r = u;
    for (let n = 0; n < e.length; n++) {
        r = t(r, unsafeGet(e, n), n, e);
    }
    return r;
}
function makeActions(e) {
    const t = {};
    for (const u in e)
        if (Object.prototype.hasOwnProperty.call(e, u)) {
            const r = e[u];
            t[u] = action(r);
        }
    return t;
}
function readByPath(e, t) {
    const u = e.split('.');
    let r = t;
    for (const n of u) r = null == r ? void 0 : r[n];
    return r;
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
    },
    createTimeoutInEffect$1 = (e, t) => {
        let u;
        const r = setTimeout(() => {
            u = e();
        }, t);
        return () => {
            ('function' == typeof u && u(), clearTimeout(r));
        };
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
    const r = new Array(t - e);
    for (let n = e; n < t; n++) r[n] = u(n);
    return r;
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
function deepEqual(e, t, u = -1) {
    return eq(e, t, u);
}
function eq(e, t, u, r, n) {
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
            u >= 0 && u++;
    }
    const o = unwrap(e),
        i = unwrap(t),
        l = Array.isArray(o) && Array.isArray(i);
    if (!l) {
        if ('object' != typeof o || 'object' != typeof i) return !1;
        const e = o.constructor,
            t = i.constructor;
        if (
            e !== t &&
            !(isFunction(e) && e instanceof e && isFunction(t) && t instanceof t) &&
            'constructor' in o &&
            'constructor' in i
        )
            return !1;
    }
    if (0 === u) return !1;
    (u < 0 && (u = -1), (n = n || []));
    let c = (r = r || []).length;
    for (; c--; ) if (r[c] === o) return n[c] === i;
    if ((r.push(e), n.push(t), l)) {
        if (((c = o.length), c !== i.length)) return !1;
        for (; c--; ) if (!eq(o[c], i[c], u - 1, r, n)) return !1;
    } else {
        const e = Object.keys(o);
        let t;
        if (((c = e.length), Object.keys(i).length !== c)) return !1;
        for (; c--; ) {
            if (((t = e[c]), void 0 === t))
                return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
            if (!Object.prototype.hasOwnProperty.call(i, t) || !eq(o[t], i[t], u - 1, r, n)) return !1;
        }
    }
    return (r.pop(), n.pop(), !0);
}
function unwrap(e) {
    return e instanceof Map || e instanceof Set ? Array.from(e.entries()) : e;
}
function identityComparer(e, t) {
    return e === t;
}
function structuralComparer(e, t) {
    return deepEqual(e, t);
}
function shallowComparer(e, t) {
    return deepEqual(e, t, 1);
}
function sameValueComparer(e, t) {
    return Object.is(e, t);
}
const comparer = {
        identity: identityComparer,
        structural: structuralComparer,
        sameValue: sameValueComparer,
        shallow: shallowComparer,
    },
    CHINESE_LANGUAGE_CODES$1 = new Set(['zh_cn', 'zh_sg', 'zh_tw']);
function splitChinese$1(e) {
    const t = [],
        u = e
            .replace(/&nbsp;/g, ' ')
            .replace(/ /g, ' ')
            .matchAll(
                /[\u4E00-\u9FFF\u3400-\u4DBF][。，: ; ：；！？《》「」•)、]?|[a-zA-Z0-9]+[.,!?]?|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
            );
    for (const [r] of u) t.push(r);
    return t;
}
function addSpaceAndMap(e, t, u) {
    return CHINESE_LANGUAGE_CODES$1.has(t)
        ? e.map(u)
        : e.map((e, t, r) => (t === r.length - 1 ? u(e, t, r) : u(`${e} `, t, r)));
}
function splitLocale(e, t) {
    return CHINESE_LANGUAGE_CODES$1.has(t)
        ? splitChinese$1(e)
        : 'ja' === t
          ? loadDefaultJapaneseParser()
                .parse(e)
                .map((e) => e.replace(/&nbsp;/g, ' '))
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
        r = new Set(t[e].classes),
        n = new Set(u.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...n])).join(' ');
}
function calculateMedia(e, t, u) {
    const r = BREAKPOINTS.reduce(
            (u, r) => (
                r.width <= e &&
                    (u.width.classes.push(r.className, `${r.className}Width`),
                    u.width.names.push(r.name),
                    (u.width.weight += 1)),
                r.height <= t &&
                    (u.height.classes.push(r.className, `${r.className}Height`),
                    u.height.names.push(r.name),
                    (u.height.weight += 1)),
                u
            ),
            { width: { classes: [], names: [], weight: 0 }, height: { classes: [], names: [], weight: 0 } },
        ),
        n = r.width.weight <= r.height.weight ? 'width' : 'height',
        s = r[n],
        a = s.names[s.names.length - 1] ?? breakpoints.extraSmall,
        o = breakpointsByType[a],
        i = r.width.names,
        l = r.height.names,
        c = i[i.length - 1] ?? breakpoints.extraSmall,
        d = l[l.length - 1] ?? breakpoints.extraSmall,
        m = { width: breakpointsByType[c].width, height: breakpointsByType[d].height };
    return {
        mediaClass: generateMediaClasses(n, r),
        breakpoint: o,
        screenWidthRem: e,
        screenHeightRem: t,
        breaks: s.names,
        sides: m,
        mediaSize: o.width,
        mediaWidth: m.width,
        mediaHeight: m.height,
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
                r = onRescale(e);
            return () => {
                (t(), r());
            };
        }, []),
        jsxRuntimeExports.jsx(MediaContext.Provider, { value: t, children: e })
    );
}
function useMedia() {
    return useMediaContext();
}
function MediaWrapperElement({ children: e, className: t, ...u }) {
    const { mediaClass: r, upscale: n } = useMedia();
    return jsxRuntimeExports.jsx('div', {
        className: cx(t, 'media-wrapper', r, n && 'media-upscale'),
        ...u,
        children: e,
    });
}
function MediaWrapper({ children: e, ...t }) {
    return jsxRuntimeExports.jsx(MediaProvider, {
        children: jsxRuntimeExports.jsx(MediaWrapperElement, { ...t, children: e }),
    });
}
function accumulate(e, t, u) {
    return u ? e.breaks.reduce((e, t) => (u[t] ? { ...e, ...u[t] } : e), t) : t;
}
function useAdaptive(e, t) {
    return accumulate(useMedia(), e, t);
}
const usePrevious = (e) => {
        const t = reactExports.useRef();
        return (
            reactExports.useEffect(() => {
                t.current = e;
            }, [e]),
            t.current
        );
    },
    STATIC_DEPS$1 = [];
function useEvent$1(e) {
    const t = reactExports.useRef(e);
    return (
        reactExports.useLayoutEffect(() => {
            t.current = e;
        }),
        reactExports.useCallback((...e) => (0, t.current)(...e), STATIC_DEPS$1)
    );
}
function useUnmount(e) {
    reactExports.useEffect(() => e, []);
}
const createApi = () => {
        const e = new Map();
        function t(t) {
            const u = e.get(t);
            if (u) return u;
            const r = new Stack();
            return (e.set(t, r), r);
        }
        function u(t, u) {
            const r = e.get(t);
            return !!r && r.remove(u);
        }
        return {
            handlers: e,
            obtain: t,
            register: function (e, r) {
                if (e === keyCodes.NONE) return constFalse;
                const n = t(e);
                return (n.includes(r) || n.push(r), () => u(e, r));
            },
            unregister: u,
            takeCurrent: function (t) {
                const u = e.get(t);
                if (!u) return;
                const r = u.peek();
                return r || void 0;
            },
        };
    },
    Context$2 = reactExports.createContext(void 0);
function useApi() {
    const e = reactExports.useContext(Context$2);
    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
    return e;
}
function useHandleKey(e, t, u, r) {
    const n = useEvent$1((e) => {
            isEventHandled$1() || (u(e), setEventHandled$1());
        }),
        s = useApi(),
        a = reactExports.useMemo(() => s[t].register(e, n), [s, t, e, n]);
    reactExports.useEffect(() => a, [a]);
}
function useHandleKeydown(e, t, u) {
    return useHandleKey(e, 'keydown', t);
}
function Provider(e) {
    const t = reactExports.useMemo(createApi, []),
        u = reactExports.useMemo(createApi, []);
    reactExports.useEffect(() => {
        function e(e) {
            const u = t.takeCurrent(e.keyCode);
            u && u(e);
        }
        function r(e) {
            const t = u.takeCurrent(e.keyCode);
            t && t(e);
        }
        return (
            window.addEventListener('keydown', e),
            window.addEventListener('keyup', r),
            () => {
                (window.removeEventListener('keydown', e), window.removeEventListener('keyup', r));
            }
        );
    }, [t, u]);
    const r = reactExports.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: u.register, unregister: u.unregister },
        }),
        [t, u],
    );
    return jsxRuntimeExports.jsx(Context$2.Provider, { value: r, children: e.children });
}
const defaultCallback = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function useKeydownListener(e = keyCodes.ESCAPE, t = defaultCallback, u = !1) {
    reactExports.useEffect(() => {
        if (e !== keyCodes.NONE)
            return (
                window.addEventListener('keydown', r, u),
                () => {
                    window.removeEventListener('keydown', r, u);
                }
            );
        function r(r) {
            if (r.keyCode === e) {
                if (isEventHandled$1()) return;
                (t(r), setEventHandled$1(), u && r.stopPropagation());
            }
        }
    }, [t, e, u]);
}
function useCallbackOnEsc(e) {
    useHandleKeydown(keyCodes.ESCAPE, e);
}
const useMouseCoordinatesSprings = (e) => {
        const t = reactExports.useCallback(
                (t) => {
                    if (!e.current) return;
                    const { width: u, height: r } = e.current.getBoundingClientRect();
                    return 0 !== t.clientX && 0 !== t.clientY && t.clientX <= u - 2 && t.clientY <= r - 2;
                },
                [e],
            ),
            u = useSpring(() => ({ ...getMouseGlobalPosition$1('px') }), []);
        return (
            reactExports.useEffect(() => {
                const e = (e) => {
                    if (!t(e)) return;
                    const [, r] = u;
                    r.start({ x: e.clientX, y: e.clientY });
                };
                return (
                    document.addEventListener('mousemove', e),
                    () => {
                        document.removeEventListener('mousemove', e);
                    }
                );
            }, [t, u]),
            u
        );
    },
    NO_TIMEOUT_ID = 0;
function useTimeout() {
    const e = reactExports.useRef(NO_TIMEOUT_ID);
    return (
        useUnmount(() => {
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
const usePreloadImagesState = (e, t) => {
    const [u, r] = reactExports.useState('pending');
    return (
        reactExports.useLayoutEffect(() => {
            let t = 0,
                u = 0;
            const n = () => {
                t + u === e.length && r(0 === t ? 'success' : 'error');
            };
            e.forEach((e) => {
                const r = new Image();
                ((r.src = e),
                    r.addEventListener('load', () => {
                        (u++, n());
                    }),
                    r.addEventListener('error', () => {
                        (t++, n());
                    }));
            });
        }, [e, t]),
        u
    );
};
function useTicker(e) {
    const { type: t, tick: u, limit: r } = e,
        n = e.autostart ?? !1,
        s = e.start ?? zero,
        [a, o] = reactExports.useState({ current: s, running: n }),
        i = reactExports.useRef(0);
    reactExports.useEffect(
        () => (
            (i.current = window.setInterval(() => {
                a.running
                    ? o((e) => {
                          const n = 'countdown' === t ? subtract(e.current, u) : add(e.current, u),
                              s = { ...e, current: n };
                          return (
                              isDuration(r) &&
                                  ('countdown' === t
                                      ? lt(subtract(n, u), r) && ((s.current = r), (s.running = !1))
                                      : gt(add(n, u), r) && ((s.current = r), (s.running = !1))),
                              s
                          );
                      })
                    : window.clearInterval(i.current);
            }, toMillis(u))),
            () => {
                window.clearInterval(i.current);
            }
        ),
        [r, u, a.running, t],
    );
    const l = reactExports.useMemo(
        () => ({
            start: () => o((e) => ({ ...e, isRunning: !0 })),
            stop: () => o((e) => ({ ...e, isRunning: !1 })),
            isRunning: () => a.running,
        }),
        [a.running],
    );
    return [a.current, l];
}
function useTooltip({ resId: e = 0, contentId: t, decoratorId: u, disabled: r, args: n, showDelay: s = 400 }) {
    const a = useTimeout(),
        o = reactExports.useRef({ display: !1, resId: e }),
        [{ hide: i, getCurrentState: l }, c] = reactExports.useMemo(() => {
            function i() {
                r || ((o.current.display = !0), sendEvent$1.tooltip.open(e, t, u, n));
            }
            function l() {
                (a.clear(), sendEvent$1.tooltip.hide(e, t, u), (o.current.display = !1));
            }
            return [
                { hide: l, show: i, getCurrentState: () => o.current },
                {
                    onMouseEnter: () => {
                        a.run(i, s);
                    },
                    onMouseLeave: l,
                    onClick: l,
                },
            ];
        }, [n, t, u, r, e, s, a]);
    return (
        useUnmount(() => {
            const e = l().resId;
            l().display && void 0 !== e && ids().includes(e) && i();
        }),
        c
    );
}
function useSimpleTooltip({ alert: e, body: t, header: u, note: r, hasHtmlContent: n }) {
    return useTooltip(
        reactExports.useMemo(() => {
            const s = resources.resolve('views');
            return {
                contentId: s.read((e) =>
                    n
                        ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                        : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                ),
                decoratorId: s.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
                args: { body: t, header: u, note: r, alert: e },
            };
        }, [e, t, u, r, n]),
    );
}
const NO_ARGS = [];
function useSpecialTooltip(e, t = NO_ARGS, u) {
    return useTooltip(
        reactExports.useMemo(
            () => ({
                ...u,
                disabled: null == u ? void 0 : u.disabled,
                contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
                args: { tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == u ? void 0 : u.args) },
            }),
            [t, e, u],
        ),
    );
}
const soundConfig = {
    click: createSoundPlay('play'),
    'mouse-enter': createSoundPlay('highlight'),
    increaseAmount: createSoundPlay('cons_ammo_roll_plus'),
    decreaseAmount: createSoundPlay('cons_ammo_roll_minus'),
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
const Context$1 = reactExports.createContext(null);
function SoundsProvider({ severity: e = 'warn', overrides: t, silent: u = !1, children: r }) {
    const n = reactExports.useMemo(() => ({ ...soundConfig, ...t }), [t]),
        s = reactExports.useMemo(
            () => ({
                play: function (t, r) {
                    if (u) return;
                    const s = n[t];
                    s ? s(r) : logBySeverity(`There is no sound for event: ${t}`, e);
                },
                settings: { plays: n, severity: e, silent: u },
            }),
            [n, e, u],
        );
    return jsxRuntimeExports.jsx(Context$1.Provider, { value: s, children: r });
}
function useSounds() {
    const e = reactExports.useContext(Context$1);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const nonConvertingTypes = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    primitives$1 = new Set(['number', 'string', 'boolean', 'bigint']),
    bindingsForbidden = new Set(['Dict']);
function cloneModel(e, { shallow: t = !0, depth: u = 0, maxDepth: r = 32 } = {}) {
    var n, s;
    const a = e,
        o = typeof e;
    if (u > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (nonConvertingTypes.has(o)) return a;
    if (null === a) return a;
    const i = { depth: u + 1, maxDepth: r };
    if (Array.isArray(a)) return a.map((e) => cloneModel(e, i));
    if ('object' === o) {
        const r = (null == (n = a.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, i));
        if ('CoherentArrayProxy' === r) return e.map((e) => cloneModel(e.value, i));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === u) {
                const e = {};
                for (const t in a) {
                    const u = a[t];
                    primitives$1.has(typeof u) && (e[t] = u);
                }
                return e;
            }
            {
                const e = {};
                for (const t in a) {
                    const u = a[t],
                        r = (null == (s = null == a ? void 0 : a.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(r) || (e[t] = cloneModel(u, i));
                }
                return e;
            }
        }
        const o = {};
        for (const e of Object.keys(a)) o[e] = cloneModel(a[e], i);
        return o;
    }
    return (console.error('Incorrect value to clone model', a), a);
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
            r = e.keys();
        for (let n = 0; n < r.length; n++) {
            const t = r[n];
            u[t] = observable.box(this.takeItem(e, t), MOBX_OPTIONS);
        }
        ((this._keys = observable.set(new Set(r))), (this._data = observable.box(u, MOBX_OPTIONS)));
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
        for (let r = 0; r < t.length; r++) {
            const n = t[r],
                s = this.takeItem(e, n);
            n in u
                ? null === s
                    ? (delete u[n], this._keys.delete(n), this.set(u))
                    : u[n].set(s)
                : null !== s && ((u[n] = observable.box(s, MOBX_OPTIONS)), this._keys.add(n), this.set(u));
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
        for (const r of this.keys.values()) t.push(e(u[r].get(), r));
        return t;
    }
    reduce(e, t) {
        let u = t;
        const r = this._data.get();
        for (const n of this.keys.values()) u = e(u, r[n].get(), n);
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
        const r = resolvePath(t, u);
        return r ? readByPath(r, e) : e;
    };
}
const DEFAULT_BOX_CONFIG = { equals: constFalse, deep: !1 };
function createObservableModel(e, t, u) {
    const r = [];
    e.events.subscribersNotified.on(
        action(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const n = (n, s, a = DEFAULT_BOX_CONFIG) => {
            const o = observable.box(n(u(s)), a);
            return ('real' === t && e.subscribe((e) => r.push(() => o.set(n(e))), s), o);
        },
        s = (n, s) => {
            const a = new DLDict(u(n), s);
            return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), n), a);
        },
        a = (n, s) => {
            const a = observable.box(u(n) ?? s, DEFAULT_BOX_CONFIG);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), n), a);
        };
    return {
        dict: s,
        dictRef: (e, t) => s(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => n(cloneModel, e),
        array: a,
        object: a,
        transform: n,
        primitives: (n, s) => {
            const a = u(s);
            if (Array.isArray(n)) {
                const u = n.reduce((e, t) => ((e[t] = observable.box(a[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                n.forEach((t) => {
                                    u[t].set(e[t]);
                                }),
                            );
                        }, s),
                    u
                );
            }
            {
                const u = n,
                    o = Object.entries(u),
                    i = o.reduce((e, [t, u]) => ((e[u] = observable.box(a[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                o.forEach(([t, u]) => {
                                    i[u].set(e[t]);
                                }),
                            );
                        }, s),
                    i
                );
            }
        },
    };
}
const initializeModelWithContext =
        (e = 'DataLayerProvider') =>
        (t, u, r) => {
            const n = reactExports.createContext(null);
            function s(s) {
                var a;
                const { mode: o, options: i, children: l, mocks: c } = s,
                    d = useMockContext(),
                    m = o ?? d.mode,
                    p = c ?? d.mocks,
                    E = reactExports.useRef([]),
                    _ = null == (a = null == r ? void 0 : r.useRequires) ? void 0 : a.call(r),
                    h = useEvent$1((n, a, o) => {
                        var i;
                        const l = 'real' !== n && o ? createMockInstance(o.getter, a) : create(a, { name: e }),
                            c = (e) => ('mocks' === n ? (null == o ? void 0 : o.getter(e, a)) : l.readByPath(e)),
                            d = (e) => E.current.push(e),
                            m = 'initial' in s && {
                                initial: null == (i = null == r ? void 0 : r.initial) ? void 0 : i.call(r, s.initial),
                            },
                            p = t({
                                ...m,
                                mode: n,
                                readByPath: c,
                                requires: _,
                                externalModel: l,
                                observableModel: createObservableModel(l, n, c),
                                cleanup: d,
                            }),
                            h = { ...m, mode: n, model: p, externalModel: l, cleanup: d, requires: _ },
                            g = 'mocks' === n && (null == o ? void 0 : o.controls) ? o.controls(h) : {};
                        return {
                            model: p,
                            controls: { ...(null == u ? void 0 : u(h)), ...g },
                            externalModel: l,
                            mode: n,
                        };
                    }),
                    g = reactExports.useRef(!1),
                    [f, A] = reactExports.useState(m);
                reactExports.useEffect(() => {
                    A(m);
                }, [m]);
                const [b, F] = reactExports.useState(() => h(f, i, p));
                return (
                    reactExports.useEffect(() => {
                        g.current ? F(h(f, i, p)) : (g.current = !0);
                    }, [
                        h,
                        p,
                        f,
                        null == i ? void 0 : i.context,
                        null == i ? void 0 : i.initializer,
                        null == i ? void 0 : i.getRoot,
                        null == i ? void 0 : i.rootId,
                    ]),
                    reactExports.useEffect(
                        () => () => {
                            (b.externalModel.dispose(), E.current.forEach((e) => e()));
                        },
                        [b],
                    ),
                    jsxRuntimeExports.jsx(n.Provider, { value: b, children: l })
                );
            }
            return (
                (s.displayName = e),
                [
                    s,
                    function () {
                        const e = reactExports.useContext(n);
                        if (!e) throw new Error(`hook useModel must be used within a ${s.displayName}.`);
                        return e;
                    },
                    { Context: n },
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
                return events$2.onHitTest((t) => {
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
            children: this.items.reduceRight((e, [t, u], r) => reactExports.createElement(t, { ...u, key: r }, e), e),
        });
    }
}
function injectShowModel() {
    const e = (t = window.model, { depth: u = 16, convertArrays: r = !0 } = {}) => {
        var n;
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
                const s = { depth: u - 1, convertArrays: r },
                    a = (null == (n = t.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
                switch (!0) {
                    case a.includes('CoherentArrayProxy'):
                        return [...t.values()].map((t) => e(s.convertArrays ? t.value : t, s));
                    case 'Dict' === a:
                        return [...t.entries()].reduce((t, [u, r]) => ((t[u] = e(r, s)), t), { $$type: 'Dict' });
                    case 'UNKNOWN' === a:
                        return 'UNKNOWN_TYPE';
                    case a.includes('ViewModel'):
                    default: {
                        const u = {};
                        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = e(t[r], s));
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
                const r = window.subViews.get(u);
                t[u] = {
                    id: u,
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
}
async function runView(e, { root: t = document.getElementById('root'), withMedia: u = !0, fullScreen: r = !1 } = {}) {
    var n;
    injectShowModel();
    const s = u ? MediaWrapper : React.Fragment,
        a = (null == (n = null == window ? void 0 : window.engine) ? void 0 : n.whenReady) ?? Promise.resolve();
    (await a,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client$1
            .createRoot(t)
            .render(jsxRuntimeExports.jsx(s, { children: jsxRuntimeExports.jsx(Provider, { children: e }) })),
        r && (initExternalPaddings$1(t), enableFullScreenModeSupported$1()));
}
var Alignment = ((e) => ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e))(Alignment || {});
function format(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function formatPrintf(e, t) {
    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
        const u = 0 === e.indexOf('%') ? 2 : 1;
        return String(t[e.slice(u, -u)]);
    });
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
        const r = new RegExp(
                '(?<=[a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10D0-\\u10FA\\u10FD-\\u10FF\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7F6\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB68\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u{10428}-\\u{1044F}\\u{104D8}-\\u{104FB}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{10CC0}-\\u{10CF2}\\u{118C0}-\\u{118DF}\\u{16E60}-\\u{16E7F}\\u{1D41A}-\\u{1D433}\\u{1D44E}-\\u{1D454}\\u{1D456}-\\u{1D467}\\u{1D482}-\\u{1D49B}\\u{1D4B6}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D4CF}\\u{1D4EA}-\\u{1D503}\\u{1D51E}-\\u{1D537}\\u{1D552}-\\u{1D56B}\\u{1D586}-\\u{1D59F}\\u{1D5BA}-\\u{1D5D3}\\u{1D5EE}-\\u{1D607}\\u{1D622}-\\u{1D63B}\\u{1D656}-\\u{1D66F}\\u{1D68A}-\\u{1D6A5}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6E1}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D71B}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D755}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D78F}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7C9}\\u{1D7CB}\\u{1DF00}-\\u{1DF09}\\u{1DF0B}-\\u{1DF1E}\\u{1E922}-\\u{1E943}])(\\x2D)(?=[a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10D0-\\u10FA\\u10FD-\\u10FF\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7F6\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB68\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u{10428}-\\u{1044F}\\u{104D8}-\\u{104FB}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{10CC0}-\\u{10CF2}\\u{118C0}-\\u{118DF}\\u{16E60}-\\u{16E7F}\\u{1D41A}-\\u{1D433}\\u{1D44E}-\\u{1D454}\\u{1D456}-\\u{1D467}\\u{1D482}-\\u{1D49B}\\u{1D4B6}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D4CF}\\u{1D4EA}-\\u{1D503}\\u{1D51E}-\\u{1D537}\\u{1D552}-\\u{1D56B}\\u{1D586}-\\u{1D59F}\\u{1D5BA}-\\u{1D5D3}\\u{1D5EE}-\\u{1D607}\\u{1D622}-\\u{1D63B}\\u{1D656}-\\u{1D66F}\\u{1D68A}-\\u{1D6A5}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6E1}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D71B}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D755}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D78F}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7C9}\\u{1D7CB}\\u{1DF00}-\\u{1DF09}\\u{1DF0B}-\\u{1DF1E}\\u{1E922}-\\u{1E943}])',
                'gu',
            ),
            n = convertNbsp(e);
        return (splitAndFormat(n, /( )/, t).forEach((e) => (u = u.concat(splitAndFormat(e, r, 0)))), u);
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
            return loadDefaultJapaneseParser$1()
                .parse(e)
                .map((e) => convertNbsp(e));
        }
        return splitEuropean(e, t);
    },
    formatString = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : splitWords(e, t)));
let ClickOutsideManager$1 =
    ((_a = class {
        constructor() {
            (__publicField(this, 'entries', []),
                __publicField(this, '_listenMouse', !1),
                __publicField(this, 'onMouseDown', (e) => {
                    this.entries.forEach(({ container: t, callback: u }) => {
                        let r = e.target;
                        do {
                            if (r === t) return;
                            r = r.parentNode;
                        } while (r);
                        u();
                    });
                }));
        }
        static get instance() {
            return (_a.__instance || (_a.__instance = new _a()), _a.__instance);
        }
        register(e, t) {
            (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
        }
        unregister(e, t) {
            const u = e,
                r = t;
            ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== r)),
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
    __publicField(_a, '__instance'),
    _a);
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
    function r() {
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
                        let n = !0;
                        const s = `mouse${t}`,
                            a = internalMouse[t]((e) => u([e, 'outside']));
                        function o(e) {
                            u([e, 'inside']);
                        }
                        return (
                            window.addEventListener(s, o),
                            r(),
                            () => {
                                n && (a(), window.removeEventListener(s, o), (e.listeners -= 1), r(), (n = !1));
                            }
                        );
                    };
                })(u)),
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
function playSound$1(e) {
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
                playSound: playSound$1,
                setRTPC: setRTPC,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    sounds = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays = Object.keys(sounds).reduce((e, t) => ((e[t] = () => playSound$1(sounds[t])), e), {}),
    play = { ...plays, sound: playSound$1 },
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
            const { args: r, ...n } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: u, type: e, ...n, arguments: createViewEventArguments$1(r) })
                : viewEnv.handleViewEvent({ __Type: u, type: e, ...n });
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
function getBrowserTexturePath(e, t, u, r = 1) {
    return viewEnv.getWebBrowserTexturePath(e, t, u, r);
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
        const { top: t, right: u, bottom: r, left: n } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${u}rem`),
            e.style.setProperty('--external-padding-bottom', `${r}rem`),
            e.style.setProperty('--external-padding-left', `${n}rem`));
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
        addCallback(e, t, u = 0, r = !0) {
            void 0 === this._updateHandler &&
                (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
            const n = env.view.addModelObserver(e, u, r);
            return (
                n > 0
                    ? ((this._callbacks[n] = t),
                      u > 0 && (this._views[u] ? this._views[u].push(n) : (this._views[u] = [n])))
                    : console.error("Can't add callback for model:", e),
                n
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
                const r = this._callbacks[u];
                void 0 !== r && r(e, t);
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
            const r = Object.prototype.toString.call(e[u]);
            if (r.startsWith('[object CoherentArrayProxy]')) {
                const r = e[u];
                t[u] = [];
                for (let e = 0; e < r.length; e++) t[u].push({ value: dumpViewModel(r[e].value) });
            } else r.startsWith('[object class BW::WULF::ViewModel') ? (t[u] = dumpViewModel(e[u])) : (t[u] = e[u]);
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
            const { args: r, ...n } = t;
            void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: u, type: e, ...n, arguments: createViewEventArguments(r) })
                : viewEnv.handleViewEvent({ __Type: u, type: e, ...n });
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
    sendShowPopOverEvent = (e, t, u, r, n = R.invalid('resId'), s) => {
        const a = env.view.getViewGlobalPosition(),
            { x: o, y: i, width: l, height: c } = u.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(o) + a.x,
                y: env.view.pxToRem(i) + a.y,
                width: env.view.pxToRem(l),
                height: env.view.pxToRem(c),
            };
        handleViewEvent$1(ViewEventType.POP_OVER, {
            isMouseEvent: !0,
            contentID: e,
            decoratorID: r || R.invalid('resId'),
            targetID: n,
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
const DAYS_IN_WEEK = 7,
    HOURS_IN_DAY = 24,
    MS_IN_SECOND = 1e3,
    ONE_MINUTE = 60,
    ONE_HOUR = 60 * ONE_MINUTE,
    ONE_DAY = HOURS_IN_DAY * ONE_HOUR,
    getRegionalDateTime = RegionalDateTime.getRegionalDateTime,
    getFormattedDateTime = RegionalDateTime.getFormattedDateTime;
function getTimeUnits(e = 0) {
    let t = e;
    const u = Math.trunc(t / ONE_DAY);
    t -= u * ONE_DAY;
    const r = Math.trunc(t / ONE_HOUR);
    t -= r * ONE_HOUR;
    const n = Math.trunc(t / ONE_MINUTE);
    return ((t -= n * ONE_MINUTE), { days: u, hours: r, minutes: n, seconds: t });
}
const getRoundedTimeUnitDescription = (e, t = !0) =>
        e.days > DAYS_IN_WEEK && t
            ? format(R.strings.common.duration.days(), { days: e.days })
            : e.days >= 1
              ? 0 === e.hours
                  ? format(R.strings.common.duration.days(), { days: e.days })
                  : `${format(R.strings.common.duration.days(), { days: e.days })} ${format(R.strings.common.duration.hours(), { hours: e.hours })}`
              : e.hours >= 1
                ? 0 === e.minutes
                    ? format(R.strings.common.duration.hours(), { hours: e.hours })
                    : `${format(R.strings.common.duration.hours(), { hours: e.hours })} ${format(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                : format(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }),
    DateTime = ({ datetime: e, format: t = DateTimeFormatsEnum.ShortDate, isConvertedToLocal: u = !0 }) =>
        Object.values(DateTimeFormatsEnum).includes(t) ? getRegionalDateTime(e, t, u) : getFormattedDateTime(e, t, u),
    DateTime$1 = reactExports.memo(DateTime),
    base$k = 'Formattext_bb80854d',
    styles$n = { base: base$k },
    FormatText$1 = ({
        binding: e,
        text: t = '',
        classMix: u,
        alignment: r = Alignment.left,
        formatWithBrackets: n,
    }) => {
        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
        const s = n && e ? format(t, e) : t;
        return jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: s
                .split('\n')
                .map((t, n) =>
                    jsxRuntimeExports.jsx(
                        'div',
                        {
                            className: cx(styles$n.base, u),
                            children: formatString(t, r, e).map((e, t) =>
                                jsxRuntimeExports.jsx(reactExports.Fragment, { children: e }, `${t}-${e}`),
                            ),
                        },
                        `${t}-${n}`,
                    ),
                ),
        });
    };
var IconSize = ((e) => ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'), e))(
    IconSize || {},
);
const root$b = 'Badge_root_8bc2e1a2',
    base$j = 'Badge_b4595e01',
    base__default$1 = 'Badge_base__default_6aaca100',
    base__x48$1 = 'Badge_base__x48_2b129eae',
    styles$m = {
        root: root$b,
        'header-h80': 'Badge_header-h80_36b6951b',
        'header-h56': 'Badge_header-h56_dda58498',
        'header-h40': 'Badge_header-h40_22881fda',
        'header-h32': 'Badge_header-h32_1df7f0db',
        'header-h28': 'Badge_header-h28_1d9547c1',
        'header-h26': 'Badge_header-h26_c241072d',
        'header-h24': 'Badge_header-h24_f50e592e',
        'header-h22': 'Badge_header-h22_7a406cb4',
        'header-h20': 'Badge_header-h20_9a545736',
        'header-h18': 'Badge_header-h18_870b2708',
        'header-h16': 'Badge_header-h16_9b6c25f9',
        'paragraph-p20': 'Badge_paragraph-p20_59b95cfb',
        'paragraph-p18': 'Badge_paragraph-p18_870b2708',
        'paragraph-p16': 'Badge_paragraph-p16_9b6c25f9',
        base: base$j,
        base__default: base__default$1,
        base__x48: base__x48$1,
    },
    badgeFolders = {
        [IconSize.default]: 'c_24x24',
        [IconSize.x48]: 'c_48x48',
        [IconSize.x80]: 'c_80x80',
        [IconSize.x220]: 'c_220x220',
    },
    Badge = ({ badgeID: e, size: t = IconSize.default, className: u }) => {
        const r = R.images.gui.maps.icons.library.badges.$dyn(badgeFolders[t]);
        return jsxRuntimeExports.jsx('div', {
            className: cx(styles$m.base, styles$m[`base__${t}`], u),
            style: { backgroundImage: `url(${r.$dyn(`badge_${e}`)})` },
        });
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
    getFromCallStack = (e = 1) => {
        var t;
        const u = new Error().stack;
        let r,
            n = R.invalid('resId'),
            s = '';
        return (
            u &&
                ((s = (null == (t = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : t[0]) || ''),
                (r = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                window.__feature && window.__feature !== r && window.subViews[r] && (n = window.subViews[r].id)),
            { callerUrl: s, caller: r, stack: u, resId: n }
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
const handleViewEvent = (e, t, u = {}, r = 0) => {
        viewEnv.handleViewEvent({
            __Type: 'GFViewEventProxy',
            type: ViewEventType.TOOLTIP,
            contentID: e,
            decoratorID: t,
            targetID: r,
            ...u,
        });
    },
    Tooltip = ({
        children: e,
        contentId: t,
        args: u,
        onMouseEnter: r,
        onMouseLeave: n,
        onMouseDown: s,
        onClick: a,
        ignoreShowDelay: o = !1,
        ignoreMouseClick: i = !1,
        decoratorId: l = 0,
        isEnabled: c = !0,
        targetId: d = 0,
        onShow: m,
        onHide: p,
        ...E
    }) => {
        const _ = reactExports.useRef({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
            h = reactExports.useMemo(() => d || getFromCallStack().resId, [d]),
            g = reactExports.useCallback(() => {
                (_.current.isVisible && _.current.timeoutId) ||
                    (handleViewEvent(t, l, { isMouseEvent: !0, on: !0, arguments: getViewEventArguments(u) }, h),
                    m && m(),
                    (_.current.isVisible = !0));
            }, [t, l, u, h, m]),
            f = reactExports.useCallback(() => {
                if (_.current.isVisible || _.current.timeoutId) {
                    const e = _.current.timeoutId;
                    (e > 0 && (clearTimeout(e), (_.current.timeoutId = 0)),
                        handleViewEvent(t, l, { on: !1 }, h),
                        _.current.isVisible && p && p(),
                        (_.current.isVisible = !1));
                }
            }, [t, l, h, p]),
            A = reactExports.useCallback((e) => {
                _.current.isVisible &&
                    ((_.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                    (_.current.hideTimerId = window.setTimeout(() => {
                        const t = document.elementFromPoint(e.clientX, e.clientY);
                        t && !t.isSameNode(_.current.prevTarget) && f();
                    }, 200)));
            }, []);
        (reactExports.useEffect(() => {
            const e = _.current.hideTimerId;
            return (
                document.addEventListener('wheel', A, { capture: !0 }),
                () => {
                    (document.removeEventListener('wheel', A, { capture: !0 }), e && window.clearTimeout(e));
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
                      ((b = e.props.onMouseEnter),
                      (e) => {
                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                              (clearTimeout(_.current.timeoutId),
                              (_.current.timeoutId = window.setTimeout(g, o ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT)),
                              r && r(e),
                              b && b(e));
                      }),
                  onMouseLeave: ((e) => (t) => {
                      (f(), null == n || n(t), null == e || e(t));
                  })(e.props.onMouseLeave),
                  onClick: ((e) => (t) => {
                      (!1 === i && f(), null == a || a(t), null == e || e(t));
                  })(e.props.onClick),
                  onMouseDown: ((e) => (t) => {
                      (!1 === i && f(), null == s || s(t), null == e || e(t));
                  })(e.props.onMouseDown),
                  ...E,
              })
            : e;
        var b;
    },
    UB_SIMPLE_TOOLTIPS = R.views.common.tooltip_window.simple_tooltip_content,
    getTooltipContentId = (e) =>
        e ? UB_SIMPLE_TOOLTIPS.SimpleTooltipHtmlContent('resId') : UB_SIMPLE_TOOLTIPS.SimpleTooltipContent('resId'),
    SimpleTooltip = ({ children: e, body: t, header: u, note: r, alert: n, args: s, ...a }) => {
        const o = reactExports.useMemo(() => {
            const e = { ...s, body: t, header: u, note: r, alert: n };
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
        }, [n, t, u, r, s]);
        return jsxRuntimeExports.jsx(Tooltip, {
            contentId: getTooltipContentId(null == s ? void 0 : s.hasHtmlContent),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: o,
            ...a,
            children: e,
        });
    },
    base$i = 'Textoverflow_3e47b075',
    styles$l = { base: base$i },
    TextOverflow = ({ content: e, classMix: t, className: u, ...r }) => {
        const n = reactExports.useRef(null),
            [s, a] = reactExports.useState(!0);
        return (
            reactExports.useEffect(() =>
                createLayoutReadyInEffect(() => {
                    const e = n.current;
                    e && e.offsetWidth >= e.scrollWidth && a(!1);
                }),
            ),
            jsxRuntimeExports.jsx(SimpleTooltip, {
                isEnabled: s,
                body: e,
                children: jsxRuntimeExports.jsx('div', {
                    ...r,
                    ref: n,
                    className: cx(styles$l.base, u, t),
                    children: e,
                }),
            })
        );
    },
    root$a = 'Playernickname_root_4dc1c796',
    base$h = 'Playernickname_23cd38ea',
    userName = 'Playernickname_userName_fcb876e7',
    igrIcon = 'Playernickname_igrIcon_3153f71e',
    base__default = 'Playernickname_base__default_4dc1c796',
    base__x48 = 'Playernickname_base__x48_4dc1c796',
    suffixBadgeWrapper = 'Playernickname_suffixBadgeWrapper_357391ed',
    suffixBadgeStripe = 'Playernickname_suffixBadgeStripe_9151ff4c',
    base__inverted = 'Playernickname_base__inverted_4dc1c796',
    suffixBadge = 'Playernickname_suffixBadge_1bf5fe7f',
    anonymizedIcon = 'Playernickname_anonymizedIcon_769a22b',
    styles$k = {
        root: root$a,
        'header-h80': 'Playernickname_header-h80_1de444d',
        'header-h56': 'Playernickname_header-h56_ff3c1fc5',
        'header-h40': 'Playernickname_header-h40_cd891eca',
        'header-h32': 'Playernickname_header-h32_f8031df1',
        'header-h28': 'Playernickname_header-h28_9c714d7',
        'header-h26': 'Playernickname_header-h26_1e91f64b',
        'header-h24': 'Playernickname_header-h24_395ae071',
        'header-h22': 'Playernickname_header-h22_41ed02fb',
        'header-h20': 'Playernickname_header-h20_7cc33c39',
        'header-h18': 'Playernickname_header-h18_9db969c7',
        'header-h16': 'Playernickname_header-h16_6fca5eb4',
        'paragraph-p20': 'Playernickname_paragraph-p20_65e42125',
        'paragraph-p18': 'Playernickname_paragraph-p18_9db969c7',
        'paragraph-p16': 'Playernickname_paragraph-p16_6fca5eb4',
        base: base$h,
        userName: userName,
        igrIcon: igrIcon,
        base__default: base__default,
        base__x48: base__x48,
        suffixBadgeWrapper: suffixBadgeWrapper,
        suffixBadgeStripe: suffixBadgeStripe,
        base__inverted: base__inverted,
        suffixBadge: suffixBadge,
        anonymizedIcon: anonymizedIcon,
    },
    UsernameAnonymizerComponent = ({ tooltipHeaderName: e }) => {
        const t = reactExports.useMemo(
                () => formatPrintf(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                [e],
            ),
            u = R.strings.tooltips.anonymizer.teamStats.body();
        return jsxRuntimeExports.jsx(SimpleTooltip, {
            header: t,
            body: u,
            children: jsxRuntimeExports.jsx('div', { className: styles$k.anonymizedIcon }),
        });
    },
    UsernameAnonymizer = reactExports.memo(UsernameAnonymizerComponent),
    suffixBadgeStripeFolders = { [IconSize.default]: 'c_64x24', [IconSize.x48]: 'c_68x28' },
    siffixBadgeFolders = { [IconSize.default]: 'c_48x48', [IconSize.x48]: 'c_48x48' },
    PlayerNickname = ({
        userName: e,
        clanAbbrev: t = '',
        igrType: u = 0,
        badge: r = { badgeID: '' },
        suffixBadge: n = { badgeID: '' },
        isInverted: s = !1,
        isFakeNameVisible: a = !1,
        isAnonymizerShown: o = !1,
        hiddenUserName: i = '',
        size: l = IconSize.default,
        userNameClassName: c = '',
        clanTagClassName: d = '',
    }) => {
        const m = R.images.gui.maps.icons.library.badges.strips.$dyn(suffixBadgeStripeFolders[l]),
            p = reactExports.useMemo(() => ({ backgroundImage: `url(${m.$dyn(`strip_${n.badgeID}`)})` }), [n, m]),
            E = R.images.gui.maps.icons.library.badges.$dyn(siffixBadgeFolders[l]),
            _ = reactExports.useMemo(() => ({ backgroundImage: `url(${E.$dyn(`badge_${n.badgeID}`)})` }), [n, E]),
            h = t ? `[${t}]` : '',
            g = cx(styles$k.base, styles$k[`base__${l}`], s && styles$k.base__inverted),
            f = cx(styles$k.userName, c),
            A = cx(styles$k.clanTag, d),
            b = e !== i,
            F = a ? `${i}${h}` : i,
            x = Boolean(r.badgeID) && reactExports.createElement(Badge, { size: l, ...r, key: 'badge' }),
            D = Date.now(),
            C = [
                x,
                [
                    jsxRuntimeExports.jsx(
                        'div',
                        { className: f, children: jsxRuntimeExports.jsx(TextOverflow, { content: e }, D) },
                        'userName',
                    ),
                    !a && Boolean(h) && jsxRuntimeExports.jsx('div', { className: A, children: h }, 'clanTag'),
                ],
                0 !== u && jsxRuntimeExports.jsx('div', { className: styles$k.igrIcon }, 'igrType'),
                Boolean(n.badgeID) &&
                    jsxRuntimeExports.jsxs(
                        'div',
                        {
                            className: styles$k.suffixBadgeWrapper,
                            children: [
                                jsxRuntimeExports.jsx('div', { className: styles$k.suffixBadgeStripe, style: p }),
                                jsxRuntimeExports.jsx('div', { className: styles$k.suffixBadge, style: _ }),
                            ],
                        },
                        'suffixBadge',
                    ),
                o && b && jsxRuntimeExports.jsx(UsernameAnonymizer, { tooltipHeaderName: F }, 'anonymizer'),
            ];
        return jsxRuntimeExports.jsx('div', { className: g, children: s ? C.reverse() : C });
    };
var Color = ((e) => (
    (e.Base = '#ced9d9'),
    (e.Killed = '#8c8c7e'),
    (e.Highlighted = '#feab34'),
    (e.KilledHighlighted = '#b58136'),
    (e.TeamKiller = '#09e2ff'),
    (e.KilledTeamKiller = '#0c8fa0'),
    (e.DetailedInfoPlayerBase = '#f2f2f7'),
    e
))(Color || {});
const getBasicThemesColor = ({ isPersonal: e, isSameSquad: t, isKilled: u }) =>
        e || t ? (u ? Color.KilledHighlighted : Color.Highlighted) : u ? Color.Killed : Color.Base,
    getPlayerThemesColor = ({ isTeamKiller: e, ...t }) =>
        e ? (t.isKilled ? Color.KilledTeamKiller : Color.TeamKiller) : getBasicThemesColor(t),
    ColorizedPlayerNickname = ({ isTeamKiller: e, isKilled: t, isPersonal: u, isSameSquad: r, ...n }) => {
        const s = getPlayerThemesColor({ isTeamKiller: e, isKilled: t, isPersonal: u, isSameSquad: r }),
            a = reactExports.useMemo(() => ({ color: s }), [s]);
        return jsxRuntimeExports.jsx('div', { style: a, children: jsxRuntimeExports.jsx(PlayerNickname, { ...n }) });
    },
    themes = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    sizes$1 = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function defineStyledComponent(e, t, u) {
    var r;
    const n =
            'object' == typeof t && 'cva' in t
                ? null == (r = t.cva)
                    ? void 0
                    : r.variants
                : null == u
                  ? void 0
                  : u.variants,
        s = n ? Object.keys(n) : [];
    if ('object' == typeof t) {
        const u = t,
            r = cva(u.className, u.cva),
            n = u.element,
            a = reactExports.forwardRef(function (e, t) {
                return reactExports.createElement(n, {
                    ...('function' == typeof n ? e : cleanProps(s, e)),
                    ref: t,
                    className: r(e),
                });
            });
        return ((a.displayName = e), u.cva && (a.cva = u.cva), a);
    }
    const a = cva(t, u),
        o = reactExports.forwardRef(function (t, u) {
            return jsxRuntimeExports.jsx('div', { 'data-name': e, ...cleanProps(s, t), ref: u, className: a(t) });
        });
    return ((o.displayName = e), u && (o.cva = u), o);
}
function cleanProps(e, t) {
    if (0 === e.length) return t;
    const u = { ...t };
    for (const r of e) delete u[r];
    return u;
}
const base$g = 'HeadlessButton_df8536fc',
    styles$j = { base: base$g },
    HeadlessButtonBase = defineStyledComponent('Button', { element: 'button', className: styles$j.base }),
    HeadlessButton = reactExports.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: u, soundTarget: r, disabled: n = !1, silent: s = !1, ...a },
        o,
    ) {
        const i = useSounds();
        return jsxRuntimeExports.jsx(HeadlessButtonBase, {
            ...a,
            ref: o,
            onMouseEnter: function (e) {
                (n || s || i.play('mouse-enter', { target: r || 'Button', original: e }), null == u || u(e));
            },
            onClick: function (e) {
                n || (s || i.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    root$9 = 'Button_root_6bcdc8c',
    background$2 = 'Button_background_98ebcfb8',
    border = 'Button_border_7e6390d7',
    overlay$1 = 'Button_overlay_174632c8',
    base$f = 'Button_70871946',
    base__enabled = 'Button_base__enabled_96634d40',
    base__disabled$2 = 'Button_base__disabled_b713e04a',
    content$2 = 'Button_content_298de63f',
    content__fontAligned = 'Button_content__fontAligned_66115778',
    styles$i = {
        root: root$9,
        background: background$2,
        border: border,
        overlay: overlay$1,
        'header-h80': 'Button_header-h80_f4a0905b',
        'header-h56': 'Button_header-h56_14cd0460',
        'header-h40': 'Button_header-h40_48fe802d',
        'header-h32': 'Button_header-h32_8c89ef0',
        'header-h28': 'Button_header-h28_51b0aefe',
        'header-h26': 'Button_header-h26_7e070603',
        'header-h24': 'Button_header-h24_9396dfde',
        'header-h22': 'Button_header-h22_f8c6ed1f',
        'header-h20': 'Button_header-h20_9fbded11',
        'header-h18': 'Button_header-h18_ae4207b5',
        'header-h16': 'Button_header-h16_123e0298',
        'paragraph-p20': 'Button_paragraph-p20_87475486',
        'paragraph-p18': 'Button_paragraph-p18_ae4207b5',
        'paragraph-p16': 'Button_paragraph-p16_123e0298',
        base: base$f,
        base__enabled: base__enabled,
        base__disabled: base__disabled$2,
        'base__size-extraSmall': 'Button_base__size-extraSmall_d0cdb5ed',
        'base__size-small': 'Button_base__size-small_fc7095a4',
        'base__size-medium': 'Button_base__size-medium_814d61f0',
        'base__size-large': 'Button_base__size-large_83da852e',
        'base__theme-primary': 'Button_base__theme-primary_8ba55469',
        'base__theme-secondary': 'Button_base__theme-secondary_3fa4afc',
        content: content$2,
        content__fontAligned: content__fontAligned,
    },
    Button$1 = reactExports.forwardRef(function (
        {
            children: e,
            size: t = sizes$1.large,
            theme: u = themes.primary,
            disabled: r = !1,
            silent: n = !1,
            autoAlignContent: s = !0,
            classNames: a,
            className: o,
            ...i
        },
        l,
    ) {
        return jsxRuntimeExports.jsxs(HeadlessButton, {
            ...i,
            ref: l,
            silent: n,
            disabled: r,
            className: cx(
                styles$i.base,
                styles$i[`base__size-${t}`],
                styles$i[`base__theme-${u}`],
                r ? styles$i.base__disabled : styles$i.base__enabled,
                o,
                null == a ? void 0 : a.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = i.onClick) || t.call(i, e);
            },
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$i.background, null == a ? void 0 : a.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$i.border, null == a ? void 0 : a.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$i.overlay, null == a ? void 0 : a.overlay) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$i.content, s && styles$i.content__fontAligned, null == a ? void 0 : a.content),
                    children: e,
                }),
            ],
        });
    });
((Button$1.themes = themes), (Button$1.sizes = sizes$1));
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
        (e.Stamp = 'stamp'),
        (e.WtEventLootbox = 'wtevent_lootBox'),
        (e.WtEventTicket = 'wtevent_ticket'),
        e
    ))(RewardType || {}),
    BonusNames = ((e) => (
        (e.Gold = 'gold'),
        (e.Credits = 'credits'),
        (e.Crystal = 'crystal'),
        (e.Premium = 'premium'),
        (e.PremiumPlus = 'premium_plus'),
        (e.Vehicles = 'vehicles'),
        (e.Customizations = 'customizations'),
        (e.Blueprints = 'blueprints'),
        (e.BlueprintsAny = 'blueprintsAny'),
        (e.BlueprintsFinal = 'finalBlueprints'),
        (e.Goodies = 'goodies'),
        (e.CrewSkins = 'crewSkins'),
        (e.Xp = 'xp'),
        (e.XpFactor = 'xpFactor'),
        (e.FreeXp = 'freeXP'),
        (e.FreeXPFactor = 'freeXPFactor'),
        (e.TankmenXP = 'tankmenXP'),
        (e.TankmenXPFactor = 'tankmenXPFactor'),
        (e.DailyXPFactor = 'dailyXPFactor'),
        (e.CreditsFactor = 'creditsFactor'),
        (e.Items = 'items'),
        (e.StrBonus = 'strBonus'),
        (e.Groups = 'groups'),
        (e.Berths = 'berths'),
        (e.Slots = 'slots'),
        (e.Meta = 'meta'),
        (e.Tokens = 'tokens'),
        (e.Dossier = 'dossier'),
        (e.OneOf = 'oneof'),
        (e.PremiumUniversal = 'premium_universal'),
        (e.BadgesGroup = 'badgesGroup'),
        (e.Entitlements = 'entitlements'),
        (e.RankedDailyBattles = 'rankedDailyBattles'),
        (e.RankedBonusBattles = 'rankedBonusBattles'),
        (e.BattlePassPoints = 'battlePassPoints'),
        (e.BattleBadge = 'dossier_badge'),
        (e.BattleAchievement = 'dossier_achievement'),
        (e.EquipCoin = 'equipCoin'),
        e
    ))(BonusNames || {}),
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
            r = SystemLocale.getNumberFormat(e, u);
        return void 0 !== e && void 0 !== r ? r : null;
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
        RewardType.Stamp,
        RewardType.WtEventLootbox,
        RewardType.WtEventTicket,
    ],
    currencyValueTypes = [RewardType.Gold, RewardType.Credits, RewardType.Crystal, RewardType.FreeXp],
    numberValueTypes = [RewardType.BattlePassPoints, RewardType.EquipCoin],
    premiumValueTypes = [RewardType.PremiumPlus, RewardType.Premium],
    getSizeFolder = (e) => {
        switch (e) {
            case ImageSize.S600x450:
                return 'c_600x450';
            case ImageSize.S400x300:
                return 'c_400x300';
            case ImageSize.S296x222:
                return 'c_296x222';
            case ImageSize.S232x174:
                return 'c_232x174';
            case ImageSize.Big:
                return 'c_80x80';
            case ImageSize.Small:
                return 'c_48x48';
            default:
                return e;
        }
    },
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
    DOG_TAG_FOLDER_NAMES = ['engravings', 'backgrounds'],
    DOG_TAG_DEFAULT_ICON_NAME = ['engraving', 'background'],
    getDogTypeImage = (e, t, u) => {
        const r = DOG_TAG_FOLDER_NAMES[e];
        if (r) {
            const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                s = n.$dyn(u);
            return s ? `${s}` : `${n.$dyn(DOG_TAG_DEFAULT_ICON_NAME[e])}`;
        }
        return (
            console.error('Unreachable branch: add dogTagType and icon folder for corresponding icon matching'),
            ''
        );
    },
    getRewardImage = (e, t = ImageSize.Small) => {
        const { name: u, type: r, value: n, icon: s, item: a, dogTagType: o } = e,
            i = getSizeFolder(t);
        switch (u) {
            case 'basic':
            case 'plus':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${n}`;
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${n}`;
            case 'items':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
            case 'blueprints':
            case 'blueprintsAny':
            case 'finalBlueprints':
                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
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
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
            case 'crewBooks':
                return `R.images.gui.maps.icons.crewBooks.books.${t}.${s}`;
            case 'dogTagComponents':
                return getDogTypeImage(o, t, s);
            case 'dossier_badge':
                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${s}`;
            case 'dossier_achievement':
                return `R.images.gui.maps.icons.achievement.${i}.${s}`;
            case 'xp':
            case 'xpFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
            case 'creditsFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
            case 'tankmenXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
            case 'dailyXPFactor':
            case 'freeXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
            case 'premiumTank':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
            case 'styleProgressToken':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
            case 'collectionItem':
                return `R.images.gui.maps.icons.collectionItems.${i}.${s}`;
            case 'attachment':
                return `R.images.gui.maps.vehicles.attachments.${t}.${s}`;
            case 'statTracker':
                return `R.images.gui.maps.vehicles.statTrackers.${t}.${s}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
        }
    },
    getRewardTooltipConfig = (e, t, u) => {
        const r = t && { contentId: t };
        return {
            args: e,
            isEnabled: Boolean((e && e.tooltipId) || t),
            ignoreMouseClick: !0,
            ignoreShowDelay: !t,
            ...r,
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
    };
var Size = ((e) => ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e))(Size || {}),
    AnimationType = ((e) => ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e))(AnimationType || {});
const root$8 = 'Progressbar_root_27f917f7',
    base$e = 'Progressbar_a6e35bd7',
    base__small$5 = 'Progressbar_base__small_7338ff19',
    background$1 = 'Progressbar_background_27d9dd7c',
    background__small = 'Progressbar_background__small_7338ff19',
    lineWrapper = 'Progressbar_lineWrapper_fc5022a6',
    styles$h = {
        root: root$8,
        'header-h80': 'Progressbar_header-h80_49e9da38',
        'header-h56': 'Progressbar_header-h56_8c86de3a',
        'header-h40': 'Progressbar_header-h40_d0a82faf',
        'header-h32': 'Progressbar_header-h32_26545424',
        'header-h28': 'Progressbar_header-h28_d157f4d7',
        'header-h26': 'Progressbar_header-h26_77f3fcfa',
        'header-h24': 'Progressbar_header-h24_43626531',
        'header-h22': 'Progressbar_header-h22_3322bbd2',
        'header-h20': 'Progressbar_header-h20_2e7e0be4',
        'header-h18': 'Progressbar_header-h18_15de4f8c',
        'header-h16': 'Progressbar_header-h16_2ecd22af',
        'paragraph-p20': 'Progressbar_paragraph-p20_a30e071b',
        'paragraph-p18': 'Progressbar_paragraph-p18_15de4f8c',
        'paragraph-p16': 'Progressbar_paragraph-p16_2ecd22af',
        base: base$e,
        base__small: base__small$5,
        background: background$1,
        background__small: background__small,
        lineWrapper: lineWrapper,
    },
    ProgressBarBackground = ({ size: e = Size.Default }) => {
        const t = cx(styles$h.background, styles$h[`background__${e}`]);
        return jsxRuntimeExports.jsx('div', { className: t });
    },
    root$7 = 'Progressbarblink_root_6fa3e54',
    base$d = 'Progressbarblink_c6146c1c',
    base__small$4 = 'Progressbarblink_base__small_9a4d3786',
    styles$g = {
        root: root$7,
        'header-h80': 'Progressbarblink_header-h80_dba16eaf',
        'header-h56': 'Progressbarblink_header-h56_4afbb50',
        'header-h40': 'Progressbarblink_header-h40_bdff5a60',
        'header-h32': 'Progressbarblink_header-h32_fb411b14',
        'header-h28': 'Progressbarblink_header-h28_bad3884',
        'header-h26': 'Progressbarblink_header-h26_787fe7af',
        'header-h24': 'Progressbarblink_header-h24_995cf036',
        'header-h22': 'Progressbarblink_header-h22_ddb18a85',
        'header-h20': 'Progressbarblink_header-h20_bca8f47c',
        'header-h18': 'Progressbarblink_header-h18_39bd10e8',
        'header-h16': 'Progressbarblink_header-h16_ce60e2e3',
        'paragraph-p20': 'Progressbarblink_paragraph-p20_d73f619b',
        'paragraph-p18': 'Progressbarblink_paragraph-p18_39bd10e8',
        'paragraph-p16': 'Progressbarblink_paragraph-p16_ce60e2e3',
        base: base$d,
        base__small: base__small$4,
    },
    ProgressBarBlink = ({ size: e }) => {
        const t = cx(styles$g.base, styles$g[`base__${e}`]);
        return jsxRuntimeExports.jsx('div', { className: t });
    },
    root$6 = 'Progresslineimpose_root_577e82cf',
    base$c = 'Progresslineimpose_24e17c02',
    base__disabled$1 = 'Progresslineimpose_base__disabled_bcd461f4',
    base__finished = 'Progresslineimpose_base__finished_803677d6',
    base__withoutBounce$1 = 'Progresslineimpose_base__withoutBounce_df0aed59',
    pattern$1 = 'Progresslineimpose_pattern_491cb9c0',
    base__small$3 = 'Progresslineimpose_base__small_577e82cf',
    gradient = 'Progresslineimpose_gradient_513e2b1d',
    glow$2 = 'Progresslineimpose_glow_76f8072f',
    glow__left = 'Progresslineimpose_glow__left_c2e964b3',
    styles$f = {
        root: root$6,
        'header-h80': 'Progresslineimpose_header-h80_b6ce096c',
        'header-h56': 'Progresslineimpose_header-h56_d3e8eb42',
        'header-h40': 'Progresslineimpose_header-h40_6729ef87',
        'header-h32': 'Progresslineimpose_header-h32_ba3e1074',
        'header-h28': 'Progresslineimpose_header-h28_2b5b153d',
        'header-h26': 'Progresslineimpose_header-h26_cc0d06ff',
        'header-h24': 'Progresslineimpose_header-h24_11fb5957',
        'header-h22': 'Progresslineimpose_header-h22_31c908fb',
        'header-h20': 'Progresslineimpose_header-h20_34c64376',
        'header-h18': 'Progresslineimpose_header-h18_b3de0e0e',
        'header-h16': 'Progresslineimpose_header-h16_8b63c052',
        'paragraph-p20': 'Progresslineimpose_paragraph-p20_3f73a47e',
        'paragraph-p18': 'Progresslineimpose_paragraph-p18_b3de0e0e',
        'paragraph-p16': 'Progresslineimpose_paragraph-p16_8b63c052',
        base: base$c,
        base__disabled: base__disabled$1,
        base__finished: base__finished,
        base__withoutBounce: base__withoutBounce$1,
        pattern: pattern$1,
        base__small: base__small$3,
        gradient: gradient,
        glow: glow$2,
        glow__left: glow__left,
    },
    ProgressLineImposeComponent = ({
        size: e,
        lineRef: t,
        disabled: u,
        baseStyles: r,
        isComplete: n,
        withoutBounce: s,
    }) => {
        const a = cx(
                styles$f.base,
                styles$f[`base__${e}`],
                u && styles$f.base__disabled,
                n && styles$f.base__finished,
                s && styles$f.base__withoutBounce,
            ),
            o = !u && !n;
        return jsxRuntimeExports.jsxs('div', {
            className: a,
            style: r,
            ref: t,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$f.pattern }),
                jsxRuntimeExports.jsx('div', { className: styles$f.gradient }),
                o && jsxRuntimeExports.jsx(ProgressBarBlink, { size: e }),
            ],
        });
    },
    ProgressLineImpose = reactExports.memo(ProgressLineImposeComponent),
    createTimeoutInEffect = (e, t) => {
        let u;
        const r = setTimeout(() => {
            u = e();
        }, t);
        return () => {
            ('function' == typeof u && u(), clearTimeout(r));
        };
    };
var GrowAnimationState = ((e) => ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e))(
        GrowAnimationState || {},
    ),
    SimpleAnimationState = ((e) => ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e))(SimpleAnimationState || {});
const base$b = 'Progressbardeltagrow_c42a7a2c',
    base__withoutBounce = 'Progressbardeltagrow_base__withoutBounce_8900411d',
    glow$1 = 'Progressbardeltagrow_glow_e08fafeb',
    styles$e = { base: base$b, base__withoutBounce: base__withoutBounce, glow: glow$1 },
    getGlowSideWithReverse = (e) => (e ? { left: 0 } : { right: 0 }),
    getBaseSideWithReverse = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
    getAnimationStyles = (e) => ({ transitionDuration: `${e}ms` }),
    ProgressBarDeltaGrowComponent = ({
        transitionDuration: e,
        transitionDelay: t,
        freezed: u,
        from: r,
        size: n,
        to: s,
        onEndAnimation: a,
        onChangeAnimationState: o,
        className: i,
    }) => {
        const l = s < r,
            [c, d] = reactExports.useState(GrowAnimationState.Idle),
            m = c === GrowAnimationState.End,
            p = c === GrowAnimationState.Idle,
            E = c === GrowAnimationState.Grow,
            _ = c === GrowAnimationState.Shrink,
            h = reactExports.useCallback(
                (e) => {
                    (d(e), o && o(e));
                },
                [o],
            ),
            g = reactExports.useCallback(
                (e, t) =>
                    createTimeoutInEffect(() => {
                        h(e);
                    }, t),
                [h],
            );
        reactExports.useEffect(() => {
            if (!u)
                return p
                    ? g(GrowAnimationState.Grow, t)
                    : E
                      ? g(GrowAnimationState.Shrink, e)
                      : _
                        ? g(GrowAnimationState.End, e)
                        : void (m && a && a());
        }, [g, u, m, E, p, _, a, t, e]);
        const f = reactExports.useMemo(
                () => ({ width: '100%', ...getAnimationStyles(e), ...getGlowSideWithReverse(l) }),
                [l, e],
            ),
            A = reactExports.useMemo(
                () => ({ width: '0%', ...getAnimationStyles(e), ...getGlowSideWithReverse(l) }),
                [l, e],
            ),
            b = reactExports.useMemo(
                () => ({ width: '0%', ...getBaseSideWithReverse(l, r), ...getAnimationStyles(e) }),
                [r, l, e],
            ),
            F = reactExports.useMemo(
                () => ({ width: `${Math.abs(s - r)}%`, ...getBaseSideWithReverse(l, r), ...getAnimationStyles(e) }),
                [r, l, s, e],
            );
        if (m) return null;
        const x = cx(styles$e.base, i, l && 0 === s && styles$e.base__withoutBounce);
        return jsxRuntimeExports.jsx('div', {
            style: p ? b : F,
            className: x,
            children: jsxRuntimeExports.jsx('div', {
                style: _ ? A : f,
                className: styles$e.glow,
                children: jsxRuntimeExports.jsx(ProgressBarBlink, { size: n }),
            }),
        });
    },
    ProgressBarDeltaGrow = reactExports.memo(ProgressBarDeltaGrowComponent),
    ProgressBarGrowLineComponent = ({
        to: e,
        size: t,
        from: u,
        lineRef: r,
        disabled: n,
        isComplete: s,
        animationSettings: a,
        onEndAnimation: o,
        onChangeAnimationState: i,
    }) => {
        const l = e < u,
            [c, d] = reactExports.useState(!1),
            m = reactExports.useCallback(
                (e) => {
                    (e === GrowAnimationState.Shrink && d(!0), i && i(e));
                },
                [i],
            ),
            p = reactExports.useMemo(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
            E = reactExports.useMemo(
                () => ({ width: `${e}%`, transitionDuration: `${a.line.duration}ms` }),
                [a.line.duration, e],
            );
        return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [
                jsxRuntimeExports.jsx(ProgressLineImpose, {
                    size: t,
                    lineRef: r,
                    disabled: n,
                    isComplete: s,
                    withoutBounce: l && 0 === e,
                    baseStyles: c ? E : p,
                }),
                u >= 0 &&
                    jsxRuntimeExports.jsx(ProgressBarDeltaGrow, {
                        transitionDuration: a.delta.duration,
                        transitionDelay: a.delta.delay,
                        onChangeAnimationState: m,
                        freezed: a.freezed,
                        onEndAnimation: o,
                        from: u,
                        size: t,
                        to: e,
                        className: a.delta.className,
                    }),
            ],
        });
    },
    ProgressBarGrowLine = reactExports.memo(ProgressBarGrowLineComponent),
    base$a = 'Progressbardeltasimple_4b8901e3',
    delta = 'Progressbardeltasimple_delta_9a540ec7',
    styles$d = { base: base$a, delta: delta },
    ProgressBarDeltaSimpleComponent = ({
        transitionDuration: e,
        transitionDelay: t,
        freezed: u,
        from: r,
        size: n,
        to: s,
        onEndAnimation: a,
        onChangeAnimationState: o,
    }) => {
        const i = s < r,
            [l, c] = reactExports.useState(SimpleAnimationState.Idle),
            d = l === SimpleAnimationState.In,
            m = l === SimpleAnimationState.End,
            p = l === SimpleAnimationState.Idle,
            E = reactExports.useCallback(
                (e) => {
                    (c(e), o && o(e));
                },
                [o],
            );
        (reactExports.useEffect(() => {
            if (p && !u) {
                return createTimeoutInEffect(() => {
                    E(SimpleAnimationState.In);
                }, t);
            }
        }, [E, u, p, t]),
            reactExports.useEffect(() => {
                if (d) {
                    return createTimeoutInEffect(() => {
                        (a && a(), E(SimpleAnimationState.End));
                    }, e + t);
                }
            }, [E, d, a, t, e]));
        const _ = reactExports.useMemo(
                () => ({
                    width: '100%',
                    transitionDuration: `${e}ms`,
                    transitionDelay: `${t}ms`,
                    [i ? 'left' : 'right']: '0',
                }),
                [i, t, e],
            ),
            h = reactExports.useMemo(
                () => ({
                    width: '0%',
                    transitionDuration: `${e}ms`,
                    transitionDelay: `${t}ms`,
                    [i ? 'left' : 'right']: '0',
                }),
                [i, t, e],
            ),
            g = reactExports.useMemo(() => ({ width: `${Math.abs(r - s)}%`, left: `${i ? s : r}%` }), [r, i, s]);
        return m
            ? null
            : jsxRuntimeExports.jsx('div', {
                  className: styles$d.base,
                  style: g,
                  children: jsxRuntimeExports.jsx('div', {
                      style: p ? _ : h,
                      className: styles$d.delta,
                      children: jsxRuntimeExports.jsx(ProgressBarBlink, { size: n }),
                  }),
              });
    },
    ProgressBarDeltaSimple = reactExports.memo(ProgressBarDeltaSimpleComponent),
    ProgressBarSimpleLineComponent = ({
        to: e,
        size: t,
        from: u,
        lineRef: r,
        disabled: n,
        isComplete: s,
        animationSettings: a,
        onChangeAnimationState: o,
        onEndAnimation: i,
    }) => {
        const l = reactExports.useMemo(
            () => ({
                width: `${e}%`,
                transitionDuration: `${a.line.duration}ms`,
                transitionDelay: `${a.line.delay}ms`,
            }),
            [a.line.delay, a.line.duration, e],
        );
        return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [
                jsxRuntimeExports.jsx(ProgressLineImpose, {
                    size: t,
                    lineRef: r,
                    disabled: n,
                    isComplete: s,
                    baseStyles: l,
                }),
                u >= 0 &&
                    jsxRuntimeExports.jsx(ProgressBarDeltaSimple, {
                        transitionDuration: a.delta.duration,
                        transitionDelay: a.delta.delay,
                        freezed: a.freezed,
                        from: u,
                        size: t,
                        to: e,
                        onChangeAnimationState: o,
                        onEndAnimation: i,
                    }),
            ],
        });
    },
    ProgressBarSimpleLine = reactExports.memo(ProgressBarSimpleLineComponent),
    WithAnimationLineComponent = ({ onComplete: e, onEndAnimation: t, ...u }) => {
        const [r, n] = reactExports.useState(!1),
            s = reactExports.useCallback(() => {
                const s = 100 === u.to;
                (s !== r && n(s), s && e && e(), t && t());
            }, [r, e, t, u.to]);
        switch (u.animationSettings.type) {
            case AnimationType.Simple:
                return jsxRuntimeExports.jsx(ProgressBarSimpleLine, { ...u, onEndAnimation: s, isComplete: r });
            case AnimationType.Growing:
                return jsxRuntimeExports.jsx(ProgressBarGrowLine, { ...u, onEndAnimation: s, isComplete: r });
            default:
                return null;
        }
    },
    WithAnimationLine = reactExports.memo(WithAnimationLineComponent),
    WithStackAnimationLineComponent = ({ onEndAnimation: e, ...t }) => {
        const u = reactExports.useRef({}),
            r = reactExports.useCallback(() => {
                ((u.current.from = void 0), e && e());
            }, [e]),
            n = 'number' == typeof u.current.from ? u.current.from : t.from;
        return (
            (u.current.from = n),
            reactExports.createElement(WithAnimationLine, {
                ...t,
                onEndAnimation: r,
                key: `${n}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                from: n,
            })
        );
    },
    WithStackAnimationLine = reactExports.memo(WithStackAnimationLineComponent),
    WithoutAnimationLine = ({ size: e, value: t, lineRef: u, disabled: r, onComplete: n }) => {
        const s = reactExports.useMemo(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
            a = 100 === t;
        return (
            reactExports.useEffect(() => {
                a && n && n();
            }, [a, n]),
            jsxRuntimeExports.jsx(ProgressLineImpose, {
                size: e,
                disabled: r,
                baseStyles: s,
                isComplete: a,
                lineRef: u,
            })
        );
    },
    ProgressBarLineComponent = ({
        size: e,
        value: t,
        lineRef: u,
        disabled: r,
        deltaFrom: n,
        additionalKey: s,
        animationSettings: a,
        onEndAnimation: o,
        onChangeAnimationState: i,
        onComplete: l,
    }) => {
        if (n === t)
            return jsxRuntimeExports.jsx(
                WithoutAnimationLine,
                { size: e, value: t, lineRef: u, disabled: r, onComplete: l },
                `${n}-${t}-${s}`,
            );
        const c = {
            from: n,
            to: t,
            size: e,
            additionalKey: s,
            lineRef: u,
            disabled: r,
            animationSettings: a,
            onComplete: l,
            onEndAnimation: o,
            onChangeAnimationState: i,
        };
        return a.withStack
            ? jsxRuntimeExports.jsx(WithStackAnimationLine, { ...c })
            : jsxRuntimeExports.jsx(WithAnimationLine, { ...c }, `${n}-${t}-${s}`);
    },
    ProgressBarLine = reactExports.memo(ProgressBarLineComponent),
    createSkin = (e) => {
        var t, u, r, n, s, a, o;
        return {
            '--progress-base': `url(${e.bgImageBase})`,
            '--progress-bg-height': (null == (t = e.bg) ? void 0 : t.height) ?? '12rem',
            '--progress-bg-height-small': (null == (u = e.bg) ? void 0 : u.heightSmall) ?? '2rem',
            '--progress-line-base': e.line.bgColorBase,
            '--progress-line-disabled': e.line.bgColorDisabled,
            '--progress-line-finished': e.line.bgColorFinished,
            '--progress-line-filter': e.line.filter ?? 'none',
            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
            '--progress-pattern-size': e.pattern.size ?? '3rem 10rem',
            '--progress-pattern-border-size': e.pattern.borderSize ?? '1rem',
            '--progress-pattern-gradient':
                e.pattern.gradient ?? 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
            '--progress-pattern-gradient-finished':
                e.pattern.gradientFinished ??
                'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
            '--progress-pattern-gradient-mixBlendMode': e.pattern.mixBlendMode ?? 'overlay',
            '--progress-glow': `url('${e.glow}')`,
            '--progress-glow-width': (null == (r = e.glowSettings) ? void 0 : r.width) ?? '60rem',
            '--progress-glow-height': (null == (n = e.glowSettings) ? void 0 : n.height) ?? '100rem',
            '--progress-glow-small-width': (null == (s = e.glowSettings) ? void 0 : s.smallWidth) ?? '44rem',
            '--progress-glow-small-height': (null == (a = e.glowSettings) ? void 0 : a.smallHeight) ?? '43rem',
            '--progress-glow-mixBlendMode': (null == (o = e.glowSettings) ? void 0 : o.mixBlendMode) ?? 'lighten',
            '--progress-glow-small': `url('${e.glowSmall}')`,
            '--progress-delta-color': e.delta.color,
            '--progress-delta-shadow': e.delta.shadow,
        };
    },
    Orange = {
        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
        pattern: {
            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
        },
        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
        delta: {
            color: '#ffc',
            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
        },
    },
    Blue = {
        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
        line: { bgColorBase: '#005aca', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
        pattern: {
            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_blue',
            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
        },
        glow: 'R.images.gui.maps.icons.components.progress_bar.glow_blue',
        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small_blue',
        delta: {
            color: '#c2ffff',
            shadow: '0 0 4px 1px #00e4ff66, 0 0 9px 1px #00c6ff66, 0 0 12px 2px #00a8ff66, 0 0 12px 4px #0b5aca66',
        },
    },
    clamp = (e, t, u) => (u < e ? e : u > t ? t : u),
    prepareDeltaFrom = (e, t, u) => {
        if ('number' == typeof u) {
            return (clamp(0, t, u) / t) * 100;
        }
        return e;
    };
function useCalculatePercents(e, t, u) {
    return reactExports.useMemo(() => {
        const r = (clamp(0, t, e) / t) * 100;
        return { value: r, deltaFrom: prepareDeltaFrom(r, t, u) };
    }, [u, t, e]);
}
const defaultTheme = Orange,
    defaultAnimationSettings = {
        freezed: !1,
        withStack: !1,
        type: AnimationType.Growing,
        delta: { duration: 500, delay: 0 },
        line: { duration: 500, delay: 0 },
    },
    ProgressBarComponent = ({
        maxValue: e = 100,
        theme: t = defaultTheme,
        size: u = Size.Default,
        animationSettings: r = defaultAnimationSettings,
        disabled: n = !1,
        withoutBackground: s = !1,
        value: a,
        deltaFrom: o,
        additionalKey: i,
        lineRef: l,
        onChangeAnimationState: c,
        onEndAnimation: d,
        onComplete: m,
        className: p,
    }) => {
        const E = useCalculatePercents(a, e, o);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$h.base, p, styles$h[`base__${u}`]),
            style: createSkin(t),
            children: [
                !s && jsxRuntimeExports.jsx(ProgressBarBackground, { size: u }),
                jsxRuntimeExports.jsx(ProgressBarLine, {
                    size: u,
                    lineRef: l,
                    disabled: n,
                    value: E.value,
                    deltaFrom: E.deltaFrom,
                    additionalKey: i,
                    animationSettings: r,
                    onEndAnimation: d,
                    onChangeAnimationState: c,
                    onComplete: m,
                }),
            ],
        });
    },
    ProgressBar$1 = reactExports.memo(ProgressBarComponent),
    BackportTooltip = ({ children: e, ...t }) =>
        jsxRuntimeExports.jsx(Tooltip, {
            contentId: R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
            ignoreShowDelay: !0,
            ...t,
            children: e,
        }),
    DynamicTooltipWrapper = ({ children: e, tooltipArgs: t, className: u }) => {
        if (!t) return e;
        const r = jsxRuntimeExports.jsx('div', { className: u, children: e });
        if (t.header || t.body) return jsxRuntimeExports.jsx(SimpleTooltip, { ...t, children: r });
        const { contentId: n } = t;
        return n
            ? jsxRuntimeExports.jsx(Tooltip, { ...t, contentId: n, children: r })
            : jsxRuntimeExports.jsx(BackportTooltip, { ...t, children: r });
    };
var MOUSE_BUTTON_CODES = ((e) => (
    (e[(e.LEFT = 0)] = 'LEFT'),
    (e[(e.WHEEL = 1)] = 'WHEEL'),
    (e[(e.RIGHT = 2)] = 'RIGHT'),
    (e[(e.FOURTH = 3)] = 'FOURTH'),
    (e[(e.FIFTH = 4)] = 'FIFTH'),
    e
))(MOUSE_BUTTON_CODES || {});
function playSound(e) {
    engine.call('PlaySound', e).catch((t) => {
        console.error('[lib/sounds.js] playSound(', e, '): ', t);
    });
}
const Sound = {
        playHighlight() {
            playSound('highlight');
        },
        playClick() {
            playSound('play');
        },
        playYes() {
            playSound('yes1');
        },
    },
    isRightClick = (e) => e.button === MOUSE_BUTTON_CODES.RIGHT,
    ContextMenu = ({
        children: e,
        contentID: t,
        decoratorID: u = 0,
        targetId: r = 0,
        args: n,
        isEnabled: s = !0,
        onMouseDown: a,
    }) => {
        const o = reactExports.useCallback(() => {
                (handleViewEvent$1(ViewEventType.CONTEXT_MENU, {
                    contentID: t,
                    decoratorID: u,
                    targetID: r,
                    isMouseEvent: !0,
                    on: !0,
                    args: n,
                }),
                    Sound.playYes());
            }, [n, t, u, r]),
            i = reactExports.useCallback(() => {
                handleViewEvent$1(ViewEventType.CONTEXT_MENU, {
                    contentID: t,
                    decoratorID: u,
                    targetID: r,
                    isMouseEvent: !1,
                    on: !1,
                });
            }, [t, u, r]),
            l = reactExports.useCallback(
                (e) => {
                    (a && a(e), isRightClick(e) && o());
                },
                [a, o],
            );
        return (
            reactExports.useEffect(() => {
                !1 === s && i();
            }, [s, i]),
            s ? reactExports.cloneElement(e, { onMouseDown: l }) : e
        );
    },
    BackportContextMenu = ({ children: e, ...t }) =>
        jsxRuntimeExports.jsx(ContextMenu, {
            ...t,
            contentID: R.views.common.BackportContextMenu('resId'),
            children: e,
        }),
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
    const r = reactExports.useRef(0),
        n = reactExports.useCallback(() => window.clearInterval(r.current), u || []);
    reactExports.useEffect(() => n, [n]);
    const s = (u ?? []).concat([t]);
    return [
        reactExports.useCallback((u) => {
            ((r.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
        }, s),
        n,
    ];
}
const useCallbackEffect = (e, t = []) => {
        const u = reactExports.useRef(),
            r = reactExports.useCallback((...t) => {
                (u.current && u.current(), (u.current = e(...t)));
            }, t);
        return (
            reactExports.useEffect(
                () => () => {
                    u.current && u.current();
                },
                [r],
            ),
            r
        );
    },
    useEmitter = () => {
        const e = reactExports.useMemo(() => ({}), []),
            t = (t) => (e[t] || (e[t] = new Map()), e[t]),
            u = (e, u) => {
                t(e).set(u, u);
            },
            r = (e, u) => {
                t(e).delete(u);
            },
            n = (e, ...u) => {
                for (const r of t(e).values()) r(...u);
            };
        return reactExports.useMemo(() => ({ on: u, off: r, trigger: n }), []);
    };
function throttle(e, t, u, r) {
    let n,
        s = !1,
        a = 0;
    function o() {
        n && clearTimeout(n);
    }
    function i(...i) {
        const l = this,
            c = Date.now() - a;
        function d() {
            ((a = Date.now()), u.apply(l, i));
        }
        s ||
            (r && !n && d(),
            o(),
            void 0 === r && c > e
                ? d()
                : !0 !== t &&
                  (n = setTimeout(
                      r
                          ? function () {
                                n = void 0;
                            }
                          : d,
                      void 0 === r ? e - c : e,
                  )));
    }
    return (
        'boolean' != typeof t && ((r = u), (u = t), (t = void 0)),
        (i.cancel = function () {
            (o(), (s = !0));
        }),
        i
    );
}
function useThrottle(e, t, u) {
    const r = reactExports.useMemo(() => throttle(u, e), t);
    return (reactExports.useEffect(() => r.cancel, [r]), r);
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
        getDirection: r,
        getWrapperSize: n,
        forceTriggerMouseMove: s,
    }) => {
        const a = (e, u) => {
            const [r, n] = t(e);
            return n <= r ? 0 : clamp(r, n, u);
        };
        return (o = {}) => {
            const { settings: i = defaultSettings } = o,
                l = reactExports.useRef(null),
                c = reactExports.useRef(null),
                d = reactExports.useRef(!1),
                m = useEmitter(),
                p = useThrottle(
                    () => {
                        s && s();
                    },
                    [],
                    150,
                ),
                [E, _] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = l.current;
                        t && (u(t, e), m.trigger('change', e), s && d.current && p());
                    },
                    onRest: (e) => m.trigger('rest', e),
                    onStart: (e) => m.trigger('start', e),
                    onPause: (e) => m.trigger('pause', e),
                })),
                h = reactExports.useCallback(
                    (e, t, u) => {
                        const r = E.scrollPosition.get(),
                            n = (E.scrollPosition.goal ?? 0) - r;
                        return a(e, t * u + n + r);
                    },
                    [E.scrollPosition],
                ),
                g = reactExports.useCallback(
                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                        const r = l.current;
                        r &&
                            _.start({
                                scrollPosition: a(r, e),
                                immediate: t,
                                reset: u,
                                config: i.animationConfig,
                                from: { scrollPosition: a(r, E.scrollPosition.get()) },
                            });
                    },
                    [_, i.animationConfig, E.scrollPosition],
                ),
                f = reactExports.useCallback(
                    (e) => {
                        const t = l.current,
                            u = c.current;
                        if (!t || !u) return;
                        const r = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return n(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(u, i.step),
                            s = h(t, e, r);
                        g(s);
                    },
                    [g, h, i.step],
                ),
                A = reactExports.useCallback(
                    (e) => {
                        (0 !== e.deltaY && f(r(e)),
                            l.current && m.trigger('mouseWheel', e, E.scrollPosition, t(l.current)));
                    },
                    [E.scrollPosition, f, m],
                ),
                b = useCallbackEffect(
                    () =>
                        createLayoutReadyInEffect(() => {
                            const e = l.current;
                            e && (g(a(e, E.scrollPosition.goal), { immediate: !0 }), m.trigger('resizeHandled'));
                        }),
                    [g, E.scrollPosition.goal],
                ),
                F = useEvent(() => {
                    const e = l.current;
                    if (!e) return;
                    const t = a(e, E.scrollPosition.goal);
                    (t !== E.scrollPosition.goal && g(t, { immediate: !0 }), m.trigger('recalculateContent'));
                });
            (reactExports.useEffect(
                () => (
                    window.addEventListener('resize', b),
                    () => {
                        window.removeEventListener('resize', b);
                    }
                ),
                [b],
            ),
                reactExports.useEffect(() => {
                    const e = l.current;
                    if (!e || !s) return;
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
                    getWrapperSize: () => (c.current ? n(c.current) : void 0),
                    getContainerSize: () => (l.current ? e(l.current) : void 0),
                    getBounds: () =>
                        l.current ? t(l.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: i.step.clampedArrowStepTimeout,
                    clampPosition: a,
                    handleMouseWheel: A,
                    applyScroll: g,
                    applyStepTo: f,
                    contentRef: l,
                    wrapperRef: c,
                    scrollPosition: _,
                    animationScroll: E,
                    recalculateContent: F,
                    events: { on: m.on, off: m.off },
                }),
                [E.scrollPosition, g, f, m.off, m.on, F, A, _, i.step.clampedArrowStepTimeout],
            );
        };
    },
    DEFAULT_HORIZONTAL_API_CONTEXT = {
        getBounds: (e) => {
            var t;
            return [0, e.offsetWidth - ((null == (t = e.parentElement) ? void 0 : t.offsetWidth) ?? 0)];
        },
        getContainerSize: (e) => e.offsetWidth,
        getWrapperSize: (e) => e.offsetWidth,
        setScrollPosition: (e, t) => {
            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
        },
        getDirection: (e) => (e.deltaY > 1 ? Direction.Next : Direction.Prev),
        forceTriggerMouseMove: env.view.forceTriggerMouseMove,
    },
    useHorizontalScrollApi = createApiHook(DEFAULT_HORIZONTAL_API_CONTEXT),
    base$9 = 'Horizontalbar_ffd0f7ec',
    base__nonActive$1 = 'Horizontalbar_base__nonActive_b036f949',
    leftButton = 'Horizontalbar_leftButton_ba80ec4f',
    rightButton = 'Horizontalbar_rightButton_847c1c78',
    track$1 = 'Horizontalbar_track_388b12f',
    thumb$1 = 'Horizontalbar_thumb_9d4dd30f',
    rail$1 = 'Horizontalbar_rail_b8667e3c',
    styles$c = {
        base: base$9,
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
        onDrag: r = emptyFunction$1,
    }) => {
        const n = reactExports.useRef(null),
            s = reactExports.useRef(null),
            a = reactExports.useRef(null),
            o = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = e.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$1,
            [c, d] = reactExports.useState(initDraggingState$1),
            m = reactExports.useCallback(
                (e) => {
                    (d(e), i.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: i.current }));
                },
                [r],
            ),
            p = () => {
                const t = o.current,
                    u = i.current,
                    r = e.getWrapperSize(),
                    n = e.getContainerSize();
                if (!(r && t && u && n)) return;
                const l = e.animationScroll.scrollPosition.get(),
                    c = Math.min(1, r / n),
                    d = clamp(0, 1, l / (n - r)),
                    m = (t.offsetWidth - calculateThumbSize$1(t, c)) * d;
                ((u.style.transform = `translateX(${0 | m}px)`),
                    ((e) => {
                        if (s.current && a.current && o.current && i.current) {
                            if (0 === e)
                                return (
                                    s.current.classList.add(DISABLE_CLASS$1),
                                    void a.current.classList.remove(DISABLE_CLASS$1)
                                );
                            if (isBoundThumb(o.current, i.current, e))
                                return (
                                    s.current.classList.remove(DISABLE_CLASS$1),
                                    void a.current.classList.add(DISABLE_CLASS$1)
                                );
                            (s.current.classList.remove(DISABLE_CLASS$1), a.current.classList.remove(DISABLE_CLASS$1));
                        }
                    })(m));
            },
            E = useEvent(() => {
                ((() => {
                    const t = i.current,
                        u = o.current,
                        r = e.getWrapperSize(),
                        s = e.getContainerSize();
                    if (!(s && t && r && u)) return;
                    const a = Math.min(1, r / s);
                    ((t.style.width = `${calculateThumbSize$1(u, a)}px`),
                        (t.style.display = 'flex'),
                        n.current &&
                            (1 === a
                                ? n.current.classList.add(styles$c.base__nonActive)
                                : n.current.classList.remove(styles$c.base__nonActive)));
                })(),
                    p());
            });
        (reactExports.useEffect(() => createLayoutReadyInEffect(E)),
            reactExports.useEffect(
                () =>
                    createLayoutReadyInEffect(() => {
                        const t = () => {
                            p();
                        };
                        let u = emptyFunction$1;
                        const r = () => {
                            (u(), (u = createLayoutReadyInEffect(E)));
                        };
                        return (
                            e.events.on('recalculateContent', E),
                            e.events.on('rest', t),
                            e.events.on('change', t),
                            e.events.on('resizeHandled', r),
                            () => {
                                (u(),
                                    e.events.off('recalculateContent', E),
                                    e.events.off('rest', t),
                                    e.events.off('change', t),
                                    e.events.off('resizeHandled', r));
                            }
                        );
                    }),
                [e],
            ),
            reactExports.useEffect(() => {
                if (!c.pending) return;
                const t = env.client.events.mouse.move(([t, u]) => {
                        const n = e.contentRef.current,
                            s = e.wrapperRef.current;
                        if (!n || !s) return;
                        const a = o.current,
                            l = i.current;
                        if (!a || !l) return;
                        if ('inside' === u && t.clientX < 0) return;
                        const d = t.clientX - c.offset - a.getBoundingClientRect().x,
                            m = (d / a.offsetWidth) * (e.getContainerSize() ?? 0);
                        (e.scrollPosition.start({
                            scrollPosition: e.clampPosition(n, m),
                            reset: !0,
                            immediate: !0,
                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                        }),
                            r({ type: 'dragging', thumb: l, thumbOffset: d, contentOffset: m }));
                    }),
                    u = env.client.events.mouse.up(() => {
                        (t(), m(initDraggingState$1));
                    });
                return () => {
                    (t(), u());
                };
            }, [e, c.offset, c.pending, r, m]));
        const [_, h] = useRepeatCallback((t) => e.applyStepTo(t), l, [e]);
        reactExports.useEffect(
            () => (document.addEventListener('mouseup', h, !0), () => document.removeEventListener('mouseup', h, !0)),
            [h],
        );
        const g = (e) => {
            e.target.classList.contains(DISABLE_CLASS$1) || playSound('highlight');
        };
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$c.base, t.base),
            ref: n,
            onWheel: e.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$c.leftButton, t.leftButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS$1) ||
                            e.button !== MOUSE_BUTTON_LEFT$1 ||
                            (playSound('play'), _(Direction.Next));
                    },
                    onMouseUp: h,
                    ref: s,
                    onMouseEnter: g,
                }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$c.track, t.track),
                    onMouseDown: (t) => {
                        const r = i.current;
                        if (r && t.button === MOUSE_BUTTON_LEFT$1)
                            if ((playSound('play'), t.target === r))
                                m({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                            else {
                                ((t) => {
                                    const r = i.current,
                                        n = e.contentRef.current;
                                    if (!r || !n) return;
                                    const s = u(e);
                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                })(t.screenX > r.getBoundingClientRect().x ? Direction.Prev : Direction.Next);
                            }
                    },
                    ref: o,
                    onMouseEnter: g,
                    children: [
                        jsxRuntimeExports.jsx('div', { ref: i, className: cx(styles$c.thumb, t.thumb) }),
                        jsxRuntimeExports.jsx('div', { className: cx(styles$c.rail, t.rail) }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$c.rightButton, t.rightButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS$1) ||
                            e.button !== MOUSE_BUTTON_LEFT$1 ||
                            (playSound('play'), _(Direction.Prev));
                    },
                    onMouseUp: h,
                    ref: a,
                    onMouseEnter: g,
                }),
            ],
        });
    },
    Bar$1 = reactExports.memo(BarFC$1),
    base$8 = 'Horizontalscroll_f316f2c6',
    wrapper$1 = 'Horizontalscroll_wrapper_a8daa0f5',
    defaultScrollArea = 'Horizontalscroll_defaultScrollArea_a99fc00c',
    styles$b = { base: base$8, wrapper: wrapper$1, defaultScrollArea: defaultScrollArea },
    DefaultScroll$1 = ({
        children: e,
        api: t,
        className: u,
        barClassNames: r,
        areaClassName: n,
        classNames: s,
        scrollClassName: a,
        getStepByRailClick: o,
        onDrag: i,
    }) => {
        const l = reactExports.useMemo(() => {
                const e = r || {};
                return { ...e, base: cx(styles$b.base, e.base) };
            }, [r]),
            c = reactExports.useMemo(() => ({ ...t, handleMouseWheel: () => {} }), [t]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$b.defaultScroll, u),
            onWheel: t.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$b.defaultScrollArea, n),
                    children: jsxRuntimeExports.jsx(Area$1, { className: a, api: c, classNames: s, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$1, { getStepByRailClick: o, api: t, onDrag: i, classNames: l }),
            ],
        });
    },
    Area$1 = ({ api: e, className: t, classNames: u, children: r }) => (
        reactExports.useEffect(() => createLayoutReadyInEffect(e.recalculateContent)),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$b.base, t),
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$b.wrapper, null == u ? void 0 : u.wrapper),
                onWheel: e.handleMouseWheel,
                ref: e.wrapperRef,
                children: jsxRuntimeExports.jsx('div', {
                    className: cx(styles$b.content, null == u ? void 0 : u.content),
                    ref: e.contentRef,
                    children: r,
                }),
            }),
        })
    );
((Area$1.Bar = Bar$1), (Area$1.Default = DefaultScroll$1));
const Horizontal = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                Area: Area$1,
                Bar: Bar$1,
                DefaultScroll: DefaultScroll$1,
                Direction: Direction,
                defaultSettings: defaultSettings,
                useHorizontalScrollApi: useHorizontalScrollApi,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    DEFAULT_VERTICAL_API_CONTEXT = {
        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
        getContainerSize: (e) => e.scrollHeight,
        getWrapperSize: (e) => e.offsetHeight,
        setScrollPosition: (e, t) => {
            e.scrollTop = t.value.scrollPosition;
        },
        getDirection: (e) => (e.deltaY > 1 ? Direction.Next : Direction.Prev),
    },
    useVerticalScrollApi = createApiHook(DEFAULT_VERTICAL_API_CONTEXT),
    base$7 = 'Verticalbar_c665b078',
    base__nonActive = 'Verticalbar_base__nonActive_68055e33',
    topButton = 'Verticalbar_topButton_1ce852b9',
    bottomButton = 'Verticalbar_bottomButton_bc76d779',
    track = 'Verticalbar_track_7532d39a',
    thumb = 'Verticalbar_thumb_264988ce',
    rail = 'Verticalbar_rail_85a58f07',
    styles$a = {
        base: base$7,
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
        onDrag: r = emptyFunction,
    }) => {
        const n = reactExports.useRef(null),
            s = reactExports.useRef(null),
            a = reactExports.useRef(null),
            o = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = e.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT,
            [c, d] = reactExports.useState(initDraggingState),
            m = reactExports.useCallback(
                (e) => {
                    (d(e), i.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: i.current }));
                },
                [r],
            ),
            p = useEvent(() => {
                const t = i.current,
                    u = o.current,
                    r = e.getWrapperSize(),
                    s = e.getContainerSize();
                if (!(r && s && t && u)) return;
                const a = Math.min(1, r / s);
                return (
                    (t.style.height = `${calculateThumbSize(u, a)}px`),
                    (t.style.display = 'flex'),
                    n.current &&
                        (1 === a
                            ? n.current.classList.add(styles$a.base__nonActive)
                            : n.current.classList.remove(styles$a.base__nonActive)),
                    a
                );
            }),
            E = useEvent(() => {
                const t = o.current,
                    u = i.current,
                    r = e.getWrapperSize(),
                    n = e.getContainerSize();
                if (!(r && t && u && n)) return;
                const l = e.animationScroll.scrollPosition.get(),
                    c = Math.min(1, r / n),
                    d = clamp(0, 1, l / (n - r)),
                    m = (t.offsetHeight - calculateThumbSize(t, c)) * d;
                ((u.style.transform = `translateY(${0 | m}px)`),
                    ((e) => {
                        if (s.current && a.current && o.current && i.current) {
                            if (0 === Math.round(e))
                                return (
                                    s.current.classList.add(DISABLE_CLASS),
                                    void a.current.classList.remove(DISABLE_CLASS)
                                );
                            if (isBottomBoundThumb(o.current, i.current, e))
                                return (
                                    s.current.classList.remove(DISABLE_CLASS),
                                    void a.current.classList.add(DISABLE_CLASS)
                                );
                            (s.current.classList.remove(DISABLE_CLASS), a.current.classList.remove(DISABLE_CLASS));
                        }
                    })(m));
            }),
            _ = useEvent(() => {
                handleContainer(e, () => {
                    (p(), E());
                });
            });
        (reactExports.useEffect(() => createLayoutReadyInEffect(_)),
            reactExports.useEffect(() => {
                const t = () => {
                    handleContainer(e, () => {
                        E();
                    });
                };
                let u = emptyFunction;
                const r = () => {
                    (u(), (u = createLayoutReadyInEffect(_)));
                };
                return (
                    e.events.on('recalculateContent', _),
                    e.events.on('rest', t),
                    e.events.on('change', t),
                    e.events.on('resizeHandled', r),
                    () => {
                        (u(),
                            e.events.off('recalculateContent', _),
                            e.events.off('rest', t),
                            e.events.off('change', t),
                            e.events.off('resizeHandled', r));
                    }
                );
            }, [e]),
            reactExports.useEffect(() => {
                if (!c.pending) return;
                const t = env.client.events.mouse.up(() => {
                        m(initDraggingState);
                    }),
                    u = env.client.events.mouse.move(([t]) => {
                        handleContainer(e, (u) => {
                            const n = o.current,
                                s = i.current,
                                a = e.getContainerSize();
                            if (!n || !s || !a) return;
                            const l = t.screenY - c.offset - n.getBoundingClientRect().y,
                                d = (l / n.offsetHeight) * a;
                            (e.scrollPosition.start({
                                scrollPosition: e.clampPosition(u, d),
                                reset: !0,
                                immediate: !0,
                                from: { scrollPosition: u.scrollTop },
                            }),
                                r({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: d }));
                        });
                    });
                return () => {
                    (t(), u());
                };
            }, [e, c.offset, c.pending, r, m]));
        const [h, g] = useRepeatCallback((t) => e.applyStepTo(t), l, [e]);
        reactExports.useEffect(
            () => (document.addEventListener('mouseup', g, !0), () => document.removeEventListener('mouseup', g, !0)),
            [g],
        );
        const f = (e) => {
            e.target.classList.contains(DISABLE_CLASS) || playSound('highlight');
        };
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$a.base, t.base),
            ref: n,
            onWheel: e.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$a.topButton, t.topButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS) ||
                            e.button !== MOUSE_BUTTON_LEFT ||
                            (playSound('play'), h(Direction.Next));
                    },
                    ref: s,
                    onMouseEnter: f,
                }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$a.track, t.track),
                    onMouseDown: (t) => {
                        const r = i.current;
                        if (r && t.button === MOUSE_BUTTON_LEFT)
                            if ((playSound('play'), t.target === r))
                                m({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                            else {
                                ((t) => {
                                    i.current &&
                                        handleContainer(e, (r) => {
                                            if (!r) return;
                                            const n = u(e),
                                                s = e.clampPosition(r, r.scrollTop + n * t);
                                            e.applyScroll(s);
                                        });
                                })(t.screenY > r.getBoundingClientRect().y ? Direction.Prev : Direction.Next);
                            }
                    },
                    ref: o,
                    onMouseEnter: f,
                    children: [
                        jsxRuntimeExports.jsx('div', { ref: i, className: cx(styles$a.thumb, t.thumb) }),
                        jsxRuntimeExports.jsx('div', { className: cx(styles$a.rail, t.rail) }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$a.bottomButton, t.bottomButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS) ||
                            e.button !== MOUSE_BUTTON_LEFT ||
                            (playSound('play'), h(Direction.Prev));
                    },
                    onMouseUp: g,
                    ref: a,
                    onMouseEnter: f,
                }),
            ],
        });
    },
    Bar = reactExports.memo(BarFC),
    content$1 = 'Verticalscroll_content_848080fa',
    defaultScroll = 'Verticalscroll_defaultScroll_5f9d259',
    area = 'Verticalscroll_area_39a5f7ae',
    styles$9 = { content: content$1, defaultScroll: defaultScroll, area: area },
    DefaultScroll = ({
        children: e,
        api: t,
        className: u,
        barClassNames: r,
        areaClassName: n,
        scrollClassName: s,
        scrollClassNames: a,
        getStepByRailClick: o,
        onDrag: i,
    }) => {
        const l = reactExports.useMemo(() => {
                const e = r || {};
                return { ...e, base: cx(styles$9.base, e.base) };
            }, [r]),
            c = reactExports.useMemo(() => ({ ...t, handleMouseWheel: () => {} }), [t]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$9.defaultScroll, u),
            onWheel: t.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$9.area, n),
                    children: jsxRuntimeExports.jsx(Area, { className: s, classNames: a, api: c, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar, { getStepByRailClick: o, api: t, onDrag: i, classNames: l }),
            ],
        });
    },
    Area = ({ className: e, classNames: t, children: u, api: r }) => (
        reactExports.useEffect(() => createLayoutReadyInEffect(r.recalculateContent)),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$9.base, e),
            ref: r.wrapperRef,
            onWheel: r.handleMouseWheel,
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$9.content, null == t ? void 0 : t.content),
                ref: r.contentRef,
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
    Scroll = { Vertical: Vertical, Horizontal: Horizontal },
    root$5 = 'Textbutton_root_599b35e4',
    base$6 = 'Textbutton_b1283086',
    base__right = 'Textbutton_base__right_78d4c03f',
    icon$3 = 'Textbutton_icon_9ba4c60',
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
    styles$8 = {
        root: root$5,
        'header-h80': 'Textbutton_header-h80_1fedc1b0',
        'header-h56': 'Textbutton_header-h56_4a298035',
        'header-h40': 'Textbutton_header-h40_d58ad437',
        'header-h32': 'Textbutton_header-h32_c991402',
        'header-h28': 'Textbutton_header-h28_a6f13dfb',
        'header-h26': 'Textbutton_header-h26_8df99232',
        'header-h24': 'Textbutton_header-h24_9686425c',
        'header-h22': 'Textbutton_header-h22_fe6dd87c',
        'header-h20': 'Textbutton_header-h20_733ba6d8',
        'header-h18': 'Textbutton_header-h18_bf2f5543',
        'header-h16': 'Textbutton_header-h16_2fd7373a',
        'paragraph-p20': 'Textbutton_paragraph-p20_2be4af3d',
        'paragraph-p18': 'Textbutton_paragraph-p18_bf2f5543',
        'paragraph-p16': 'Textbutton_paragraph-p16_2fd7373a',
        base: base$6,
        base__right: base__right,
        icon: icon$3,
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
    },
    TextButton = ({
        caption: e,
        onClick: t,
        goto: u,
        classNames: r,
        onMouseEnter: n,
        onMouseLeave: s,
        onMouseDown: a,
        onMouseUp: o,
        side: i = 'left',
        type: l = 'back',
        soundHover: c = 'highlight',
        soundClick: d = 'play',
        ...m
    }) => {
        const p = reactExports.useCallback(
                (e) => {
                    (null == n || n(e), env.sound.play.sound(c));
                },
                [n, c],
            ),
            E = reactExports.useCallback(
                (e) => {
                    null == s || s(e);
                },
                [s],
            ),
            _ = reactExports.useCallback(
                (e) => {
                    (null == a || a(e), env.sound.play.sound(d));
                },
                [a, d],
            ),
            h = reactExports.useCallback(
                (e) => {
                    null == o || o(e);
                },
                [o],
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$8.base, styles$8[`base__${l}`], styles$8[`base__${i}`], null == r ? void 0 : r.base),
            onMouseEnter: p,
            onMouseLeave: E,
            onMouseDown: _,
            onMouseUp: h,
            onClick: t,
            ...m,
            children: [
                'info' !== l && jsxRuntimeExports.jsx('div', { className: styles$8.shine }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$8.icon,
                        styles$8[`icon__${l}`],
                        styles$8[`icon__${i}`],
                        null == r ? void 0 : r.icon,
                    ),
                    children: jsxRuntimeExports.jsx('div', {
                        className: cx(styles$8.glow, null == r ? void 0 : r.glow),
                    }),
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$8.caption, styles$8[`caption__${l}`], null == r ? void 0 : r.caption),
                    children: e,
                }),
                u &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$8.goto, null == r ? void 0 : r.goto),
                        children: u,
                    }),
            ],
        });
    };
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
const RouterContext = reactExports.createContext(void 0);
function useRouter() {
    const e = reactExports.useContext(RouterContext);
    if (!e) throw new Error('useRouter must be used within a RouterProvider');
    return e;
}
var define_process_env_default = {};
function removeLastSlash(e) {
    return e.endsWith('/') ? e.slice(0, -1) : e;
}
function ModelRouterProvider({ children: e, prefix: t = '', context: u, getRoot: r, initializer: n, rootId: s }) {
    const a = reactExports.useRef([]),
        o = reactExports.useRef(null),
        i = reactExports.useMemo(() => create({ context: u, getRoot: r, initializer: n, rootId: s }), [u, r, n, s]),
        l = reactExports.useCallback(
            (e) => {
                const t = i.subscribe(e);
                return () => i.unsubscribe(t);
            },
            [i],
        ),
        c = reactExports.useCallback(() => {
            const e = i.readByPath(),
                u = { location: removeLastSlash(t + e.route), params: e.params };
            return o.current && comparer.shallow(o.current, u) ? o.current : ((o.current = u), u);
        }, [i, t]),
        d = reactExports.useSyncExternalStore(l, c);
    reactExports.useEffect(() => i.dispose, [i]);
    const m = reactExports.useMemo(() => {
        const e = [...a.current, d];
        return ((a.current = e), { ...d, history: e });
    }, [d]);
    define_process_env_default.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', m);
    const p = reactExports.useMemo(() => {
            const e = i.createCallback(
                    (e, t) => (
                        define_process_env_default.PUBLIC_ROUTER_DEBUG && console.log('➡️ Going to', e, t),
                        { route: e, ...(Boolean(t) && { params: JSON.stringify(t) }) }
                    ),
                    'navigateTo',
                ),
                t = i.createCallbackNoArgs('navigateBack');
            return {
                push: e,
                replace: e,
                goBack: define_process_env_default.PUBLIC_ROUTER_DEBUG
                    ? () => {
                          (console.log('🗺️ Route back'), t());
                      }
                    : t,
            };
        }, [i]),
        E = reactExports.useMemo(() => ({ ...m, ...p }), [p, m]);
    return jsxRuntimeExports.jsx(RouterContext.Provider, { value: E, children: e });
}
var ButtonType = ((e) => (
    (e.main = 'main'),
    (e.primary = 'primary'),
    (e.primaryGreen = 'primaryGreen'),
    (e.primaryRed = 'primaryRed'),
    (e.secondary = 'secondary'),
    (e.ghost = 'ghost'),
    e
))(ButtonType || {});
const root$4 = 'Cbutton_root_180a9717',
    base$5 = 'Cbutton_24fc9a0c',
    base__main = 'Cbutton_base__main_2f199578',
    base__primary = 'Cbutton_base__primary_9da8a692',
    base__primaryGreen = 'Cbutton_base__primaryGreen_74301f4e',
    base__primaryRed = 'Cbutton_base__primaryRed_d184ac',
    base__secondary = 'Cbutton_base__secondary_22ff48c2',
    base__ghost = 'Cbutton_base__ghost_fd3acf91',
    base__extraSmall = 'Cbutton_base__extraSmall_f64ebb9e',
    base__small$2 = 'Cbutton_base__small_a71bc2a9',
    base__medium$1 = 'Cbutton_base__medium_d82a1b14',
    base__large = 'Cbutton_base__large_f02aee17',
    base__disabled = 'Cbutton_base__disabled_96f239bb',
    back = 'Cbutton_back_ffaa618f',
    texture = 'Cbutton_texture_f462b307',
    state = 'Cbutton_state_bf8d0bab',
    base__focus = 'Cbutton_base__focus_180a9717',
    stateHighlightHover = 'Cbutton_stateHighlightHover_7e2b860e',
    stateHighlightActive = 'Cbutton_stateHighlightActive_f3d8fd6a',
    stateDisabled = 'Cbutton_stateDisabled_7b91392f',
    base__highlightActive = 'Cbutton_base__highlightActive_180a9717',
    content = 'Cbutton_content_faaa9067',
    styles$7 = {
        root: root$4,
        'header-h80': 'Cbutton_header-h80_f8c75a49',
        'header-h56': 'Cbutton_header-h56_c93fb9d4',
        'header-h40': 'Cbutton_header-h40_2dbca191',
        'header-h32': 'Cbutton_header-h32_946edbb1',
        'header-h28': 'Cbutton_header-h28_1ba7c4b9',
        'header-h26': 'Cbutton_header-h26_8e1c892d',
        'header-h24': 'Cbutton_header-h24_55877a2c',
        'header-h22': 'Cbutton_header-h22_6aecb9a1',
        'header-h20': 'Cbutton_header-h20_6b2d2538',
        'header-h18': 'Cbutton_header-h18_63362424',
        'header-h16': 'Cbutton_header-h16_cf4ba7d7',
        'paragraph-p20': 'Cbutton_paragraph-p20_f100256e',
        'paragraph-p18': 'Cbutton_paragraph-p18_63362424',
        'paragraph-p16': 'Cbutton_paragraph-p16_cf4ba7d7',
        base: base$5,
        base__main: base__main,
        base__primary: base__primary,
        base__primaryGreen: base__primaryGreen,
        base__primaryRed: base__primaryRed,
        base__secondary: base__secondary,
        base__ghost: base__ghost,
        base__extraSmall: base__extraSmall,
        base__small: base__small$2,
        base__medium: base__medium$1,
        base__large: base__large,
        base__disabled: base__disabled,
        back: back,
        texture: texture,
        state: state,
        base__focus: base__focus,
        stateHighlightHover: stateHighlightHover,
        stateHighlightActive: stateHighlightActive,
        stateDisabled: stateDisabled,
        base__highlightActive: base__highlightActive,
        content: content,
    },
    Button = ({
        children: e,
        size: t,
        disabled: u,
        mixClass: r,
        onMouseEnter: n,
        onMouseMove: s,
        onMouseDown: a,
        onMouseUp: o,
        onMouseLeave: i,
        onClick: l,
        isFocused: c = !1,
        type: d = ButtonType.primary,
        soundHover: m = 'highlight',
        soundClick: p = 'play',
    }) => {
        const E = reactExports.useRef(null),
            [_, h] = reactExports.useState(c),
            [g, f] = reactExports.useState(!1);
        return (
            reactExports.useEffect(() => {
                function e(e) {
                    _ && null !== E.current && !E.current.contains(e.target) && h(!1);
                }
                return (
                    document.addEventListener('mousedown', e),
                    () => {
                        document.removeEventListener('mousedown', e);
                    }
                );
            }, [_]),
            reactExports.useEffect(() => {
                h(c);
            }, [c]),
            jsxRuntimeExports.jsxs('div', {
                ref: E,
                className: cx(
                    styles$7.base,
                    styles$7[`base__${d}`],
                    u && styles$7.base__disabled,
                    t && styles$7[`base__${t}`],
                    _ && styles$7.base__focus,
                    g && styles$7.base__highlightActive,
                    r,
                ),
                onMouseEnter: function (e) {
                    u || (null !== m && playSound(m), n && n(e));
                },
                onMouseMove: function (e) {
                    s && s(e);
                },
                onMouseUp: function (e) {
                    u || (o && o(e), f(!1));
                },
                onMouseDown: function (e) {
                    u ||
                        (null !== p && playSound(p),
                        a && a(e),
                        c && (u || (E.current && (E.current.focus(), h(!0)))),
                        f(!0));
                },
                onMouseLeave: function (e) {
                    u || (i && i(e), f(!1));
                },
                onClick: function (e) {
                    u || (l && l(e));
                },
                children: [
                    d !== ButtonType.ghost &&
                        jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                                jsxRuntimeExports.jsx('div', { className: styles$7.back }),
                                jsxRuntimeExports.jsx('span', { className: styles$7.texture }),
                            ],
                        }),
                    jsxRuntimeExports.jsxs('span', {
                        className: cx(styles$7.state, styles$7.state__default),
                        children: [
                            jsxRuntimeExports.jsx('span', { className: styles$7.stateDisabled }),
                            jsxRuntimeExports.jsx('span', { className: styles$7.stateHighlightHover }),
                            jsxRuntimeExports.jsx('span', { className: styles$7.stateHighlightActive }),
                        ],
                    }),
                    jsxRuntimeExports.jsx('span', {
                        className: styles$7.content,
                        lang: R.strings.settings.LANGUAGE_CODE(),
                        children: e,
                    }),
                ],
            })
        );
    },
    CButton = Button;
class ErrorBoundary extends reactExports.Component {
    constructor() {
        (super(...arguments), __publicField(this, 'state', { failure: !1, error: null }));
    }
    static getDerivedStateFromError(e) {
        return { failure: !0, error: e };
    }
    render() {
        return this.state.failure
            ? jsxRuntimeExports.jsxs('div', {
                  children: [
                      jsxRuntimeExports.jsx('h1', { children: 'Something went wrong.' }),
                      this.state.error && jsxRuntimeExports.jsx('pre', { children: this.state.error.toString() }),
                  ],
              })
            : this.props.children;
    }
}
const splitPath = (e) => e.split('/').filter(Boolean);
function matchPath(e, t) {
    const { paths: u, exact: r = !1 } = t,
        n = splitPath(e);
    for (const s of u) {
        const t = splitPath(s);
        if (r && n.length !== t.length) continue;
        const u = {};
        let a = !0;
        for (let e = 0; e < t.length; e++) {
            const r = t[e],
                s = n[e];
            if (!s) {
                a = !1;
                break;
            }
            if (r.startsWith(':')) {
                u[r.slice(1)] = s;
            } else if (r !== s) {
                a = !1;
                break;
            }
        }
        if (a) {
            const a = `/${n.slice(0, t.length).join('/')}`,
                o = e === a;
            if (r && !o) continue;
            return { params: u, exact: o, path: s, url: a };
        }
    }
    return null;
}
const SwitchContext = reactExports.createContext(void 0);
function useSwitch() {
    const e = reactExports.useContext(SwitchContext);
    if (!e) throw new Error('useSwitch must be used within a SwitchProvider');
    return e;
}
function Switch({ children: e, route: t, fallback: u = null }) {
    const { location: r } = useRouter();
    let n;
    return (
        reactExports.Children.forEach(e, (e) => {
            if (!reactExports.isValidElement(e)) return void console.error('Switch children must be valid elements');
            const u = t ? `${t}${e.props.path}` : e.props.path;
            if (void 0 !== n) return;
            const s = matchPath(r, { paths: [u], exact: e.props.exact });
            s && (n = { child: e, match: s });
        }),
        n ? jsxRuntimeExports.jsx(SwitchContext.Provider, { value: { match: n.match }, children: n.child }) : u
    );
}
function Route({ path: e, component: t, exact: u }) {
    const { match: r } = useSwitch();
    return jsxRuntimeExports.jsx(ErrorBoundary, {
        children: jsxRuntimeExports.jsx(t, { path: r.path, location: r.url, params: r.params, exact: u ?? !1 }),
    });
}
const NodeTypes = { Text: 1, Tag: 2, Var: 3 };
function parseArguments(e) {
    const t = [];
    let u = '',
        r = !1,
        n = !1,
        s = '';
    for (let a = 0; a < e.length; a++) {
        const o = e[a];
        ("'" !== o && '"' !== o) || n || r
            ? o === s && n
                ? ((n = !1), (u += o))
                : '(' !== o || n
                  ? ')' === o && r && !n
                      ? ((r = !1), (u += o))
                      : ' ' !== o || r || n
                        ? (u += o)
                        : u && (t.push(u), (u = ''))
                  : ((r = !0), (u += o))
            : ((n = !0), (s = o), (u += o));
    }
    return (u && t.push(u), t);
}
function parse(e, t) {
    const u = [],
        r = [];
    let n = '',
        s = !1,
        a = '',
        o = 0;
    for (let i = 0; i < e.length; i++) {
        const l = e[i];
        if (l === t.start[0] && e.slice(i, i + t.start.length) === t.start) {
            if (n) {
                if (r.length > 0) {
                    r[r.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
                } else u.push({ type: NodeTypes.Text, value: n });
                n = '';
            }
            ((s = !0), (i += t.start.length - 1));
        } else if (l === t.end[0] && e.slice(i, i + t.end.length) === t.end) {
            ((s = !1), (i += t.end.length - 1));
            const e = a.trim();
            if (e.startsWith('@')) {
                const t = e.slice(1).trim(),
                    n = { type: NodeTypes.Tag, attrs: t.split('|'), instanceId: ++o, children: [] };
                if (r.length > 0) {
                    r[r.length - 1].node.children.push(n);
                } else u.push(n);
                r.push({ node: n, startIndex: u.length });
            } else if ('/' === e) r.length > 0 && r.pop();
            else {
                const t = { type: NodeTypes.Var, instanceId: ++o, name: e };
                if (r.length > 0) {
                    r[r.length - 1].node.children.push(t);
                } else u.push(t);
            }
            a = '';
        } else s ? (a += l) : (n += l);
    }
    if (n)
        if (r.length) {
            r[r.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
        } else u.push({ type: NodeTypes.Text, value: n });
    return u;
}
const COLORS =
        'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
    base$4 = 'FormatText_db904f12',
    base__fullSize = 'FormatText_base__fullSize_a514958e',
    styles$6 = { COLORS: COLORS, base: base$4, base__fullSize: base__fullSize },
    legacyColors = new Set((null == (_b = styles$6.COLORS) ? void 0 : _b.split(', ')) ?? []);
let keyId = 0;
function takeKey() {
    return ++keyId;
}
function split(e) {
    if (Array.isArray(e)) return e.map(split);
    if ('string' == typeof e) {
        const t = resources.resolve('langCode');
        return jsxRuntimeExports.jsx(
            reactExports.Fragment,
            {
                children: addSpaceAndMap(splitLocale(e, t), t, (e, t) =>
                    jsxRuntimeExports.jsx('span', { children: e }, `${e}${t}`),
                ),
            },
            takeKey(),
        );
    }
    return e;
}
function style(e, ...t) {
    return jsxRuntimeExports.jsx(
        'span',
        {
            style: t.reduce((u, r) => {
                if (Array.isArray(r)) {
                    const [e, t] = r;
                    return ((u[e] = t), u);
                }
                return (console.warn(`Invalid argument ${r} in ${e}: ${t}`), u);
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
function applyFunction(e, t, u, r) {
    const n = u.map((t) => {
            if ('string' != typeof t) return t;
            const u = t.trim();
            if (u.startsWith('(') && u.endsWith(')')) {
                const [t, ...n] = u.slice(1, -1).split(' ');
                return t ? applyFunction(e, t, n, r) : e;
            }
            return u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1) : u;
        }),
        s = r[t];
    return s ? s(e, ...n) : (console.error(`Function ${t} is not registered`), e);
}
function applyFunctions(e, t, u) {
    return e.reduce((e, t) => {
        const [r, ...n] = parseArguments(t.trim());
        return r ? applyFunction(e, r, n, u) : e;
    }, t);
}
function isEnd(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function resolveAttrParams(e, t) {
    for (let u = 0; u < e.length; u++) {
        if ('$' === e[u]) {
            let r = u + 1;
            for (; r < e.length && !isEnd(e[r]); ) r++;
            const n = e.slice(u + 1, r),
                s = t[n];
            if (s) return resolveAttrParams(e.replace(`$${n}`, String(s)), t);
        }
    }
    return e;
}
function resolveAttrsParams(e, t) {
    const u = [];
    for (let r = 0; r < e.length; r++) u[r] = resolveAttrParams(e[r], t);
    return u;
}
const primitives = ['number', 'string', 'undefined'];
function render(e, t, u = {}, r = !0) {
    r && (keyId = 0);
    const n = [];
    function s(e) {
        if (primitives.includes(typeof e)) {
            const t = n.at(-1);
            if ('string' == typeof t) return void (n[n.length - 1] = t + e);
        }
        n.push(e);
    }
    for (const a of e)
        if (a.type === NodeTypes.Text) s(a.value);
        else if (a.type === NodeTypes.Var)
            null === u[a.name] || primitives.includes(typeof u[a.name])
                ? s(u[a.name] ?? `{{${a.name}}}`)
                : n.push(
                      jsxRuntimeExports.jsx(
                          reactExports.Fragment,
                          { children: u[a.name] },
                          `var-${a.name}-${a.instanceId}`,
                      ),
                  );
        else if (a.type === NodeTypes.Tag) {
            const e = render(a.children, t, u, !1),
                r = applyFunctions(resolveAttrsParams(a.attrs, u), e, t);
            n.push(r);
        }
    return n;
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
                params: r,
                upgradeLegacy: n,
                fullSize: s,
                inline: a,
                formatters: o,
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
            m = reactExports.useMemo(() => parse(i ? `{{@ split}}${c}{{/}}` : c, t), [t, c, i]),
            p = reactExports.useMemo(() => render(m, d, e.params), [m, d, e.params]),
            E = cx(styles$6.base, s && styles$6.base__fullSize, l.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              jsxRuntimeExports.jsx('p', {
                  ...l,
                  className: E,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: p,
              }))
            : jsxRuntimeExports.jsx('span', { ...l, className: E, children: p });
    }),
    undef = () => {};
function withResolvePath(e) {
    const t = e;
    return reactExports.forwardRef(function (e, u) {
        const r = useAdaptive(e, e.adaptive),
            { path: n, ...s } = r,
            a = r.images ?? resources.resolve('images'),
            o = { ...s, ref: u };
        {
            const e = n ? a.readOr(n, undef, 'warn') : void 0;
            return e ? jsxRuntimeExports.jsx(t, { ...o, src: e }) : jsxRuntimeExports.jsx(t, { ...o, unknown: !0 });
        }
    });
}
const defaultUnknownStyle = {
        background:
            'linear-gradient(45deg, #ccc 25%, transparent 25%),\nlinear-gradient(-45deg, #ccc 25%, transparent 25%),\nlinear-gradient(45deg, transparent 75%, #ccc 75%),\nlinear-gradient(-45deg, transparent 75%, #ccc 75%)',
        backgroundSize: '20rem 20rem',
        backgroundPosition: '0 0, 0 10rem, 10rem -10rem, -10rem 0rem',
        backgroundColor: '#000',
    },
    Image$1 = withResolvePath(
        reactExports.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: u,
                    fit: r,
                    position: n,
                    width: s,
                    src: a,
                    height: o,
                    unselectable: i,
                    unknown: l,
                    unknownStyle: c = defaultUnknownStyle,
                    ...d
                } = e;
                return jsxRuntimeExports.jsx('div', {
                    ...d,
                    ref: t,
                    style: { width: e.width, height: e.height, ...c, ...e.style },
                });
            }
            const {
                repeat: u,
                fit: r,
                position: n,
                width: s,
                height: a,
                unknownStyle: o,
                unknown: i,
                unselectable: l,
                ...c
            } = e;
            return jsxRuntimeExports.jsx('div', {
                ...c,
                ref: t,
                style: {
                    backgroundImage: `url(${e.src})`,
                    backgroundRepeat: u ?? 'no-repeat',
                    backgroundSize: r ?? 'contain',
                    backgroundPosition: n ?? 'center center',
                    width: 'number' == typeof s ? `${s}rem` : s,
                    height: 'number' == typeof a ? `${a}rem` : a,
                    ...c.style,
                },
            });
        }),
    );
withResolvePath(
    reactExports.forwardRef(function (e, t) {
        const {
            width: u,
            height: r,
            src: n,
            unselectable: s,
            unknown: a,
            unknownStyle: o = defaultUnknownStyle,
            ...i
        } = e;
        return e.unknown
            ? jsxRuntimeExports.jsx('div', { ...i, style: { width: e.width, height: e.height, ...o } })
            : jsxRuntimeExports.jsx('img', { ...i, ref: t, src: n, width: u, height: r });
    }),
);
const root$3 = 'Reward_root_ab59d545',
    base$3 = 'Reward_c5dc614c',
    base__s48x48 = 'Reward_base__s48x48_ab59d545',
    base__small$1 = 'Reward_base__small_69779e9c',
    base__s80x80 = 'Reward_base__s80x80_ab59d545',
    base__big = 'Reward_base__big_4733a488',
    base__s128x100 = 'Reward_base__s128x100_fb15aafa',
    base__s180x135 = 'Reward_base__s180x135_16cc707b',
    base__s232x174 = 'Reward_base__s232x174_e32aac73',
    base__s296x222 = 'Reward_base__s296x222_c9fbf416',
    base__s400x300 = 'Reward_base__s400x300_76ba5081',
    base__s600x450 = 'Reward_base__s600x450_aba4634a',
    tooltipWrapper = 'Reward_tooltipWrapper_5c2caa5a',
    icon$2 = 'Reward_icon_ae345d69',
    overlay = 'Reward_overlay_946c9830',
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
    title = 'Reward_title_bb3559d',
    timer = 'Reward_timer_98cb5bca',
    styles$5 = {
        root: root$3,
        'header-h80': 'Reward_header-h80_810df0d3',
        'header-h56': 'Reward_header-h56_9d411621',
        'header-h40': 'Reward_header-h40_cc59c810',
        'header-h32': 'Reward_header-h32_d65d8193',
        'header-h28': 'Reward_header-h28_ab244e1d',
        'header-h26': 'Reward_header-h26_e549ef15',
        'header-h24': 'Reward_header-h24_38081412',
        'header-h22': 'Reward_header-h22_95cefcb3',
        'header-h20': 'Reward_header-h20_70ca24a2',
        'header-h18': 'Reward_header-h18_84bc19eb',
        'header-h16': 'Reward_header-h16_f385cd28',
        'paragraph-p20': 'Reward_paragraph-p20_c9d6dec7',
        'paragraph-p18': 'Reward_paragraph-p18_84bc19eb',
        'paragraph-p16': 'Reward_paragraph-p16_f385cd28',
        base: base$3,
        base__s48x48: base__s48x48,
        base__small: base__small$1,
        base__s80x80: base__s80x80,
        base__big: base__big,
        base__s128x100: base__s128x100,
        base__s180x135: base__s180x135,
        base__s232x174: base__s232x174,
        base__s296x222: base__s296x222,
        base__s400x300: base__s400x300,
        base__s600x450: base__s600x450,
        tooltipWrapper: tooltipWrapper,
        icon: icon$2,
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
        size: r = ImageSize.Big,
        special: n,
        value: s,
        valueType: a,
        title: o,
        style: i,
        className: l,
        classNames: c,
        tooltipArgs: d,
        periodicIconTooltipArgs: m,
    }) => {
        const p = getBottomHighlight(r, n),
            E = getOverlay(n),
            _ = getFormattedValue(s, a);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(
                styles$5.base,
                styles$5[`base__${r}`],
                NORMALIZE_OVERLAYS_LIST.includes(e) && styles$5.base__normalize,
                l,
            ),
            style: i,
            children: [
                jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                    tooltipArgs: d,
                    className: styles$5.tooltipWrapper,
                    children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [
                            jsxRuntimeExports.jsxs('div', {
                                className: cx(styles$5.image, null == c ? void 0 : c.image),
                                children: [
                                    p &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$5.highlight, null == c ? void 0 : c.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${p}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$5.icon, null == c ? void 0 : c.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    E &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$5.overlay, null == c ? void 0 : c.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_overlay)`,
                                            },
                                        }),
                                ],
                            }),
                            _ &&
                                jsxRuntimeExports.jsx('div', {
                                    className: cx(
                                        styles$5.info,
                                        styles$5[`info__${e}`],
                                        a === ValueTypes.MULTI && styles$5.info__multi,
                                        null == c ? void 0 : c.info,
                                    ),
                                    children: '1' == _ ? null : _,
                                }),
                            o && jsxRuntimeExports.jsx('div', { className: styles$5.title, children: o }),
                        ],
                    }),
                }),
                u &&
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: m,
                        children: jsxRuntimeExports.jsx('div', {
                            className: cx(styles$5.timer, null == c ? void 0 : c.periodicIcon),
                        }),
                    }),
            ],
        });
    },
    defaultOnFinish = () => {},
    useCountdown$1 = (e = 0, t, u = 0, r = defaultOnFinish) => {
        const [n, s] = reactExports.useState(e);
        return (
            reactExports.useEffect(() => {
                if (e > 0) {
                    s(e);
                    const n = Date.now(),
                        a = setInterval(
                            () => {
                                const t = e - Math.floor((Date.now() - n) / MS_IN_SECOND);
                                null !== u && t <= u ? (s(u), r && r(), clearInterval(a)) : s(t);
                            },
                            (t || (e > 2 * ONE_MINUTE ? ONE_MINUTE : 1)) * MS_IN_SECOND,
                        );
                    return () => {
                        clearInterval(a);
                    };
                }
            }, [e, t, u, r]),
            n
        );
    };
(DataTracker.instance, DataTracker.instance);
const useCountdown = useCountdown$1,
    useScaleState = () => {
        const [e, t] = reactExports.useState(env.view.getScale());
        return (
            reactExports.useEffect(() => {
                const e = () => {
                    t(env.view.getScale());
                };
                return (
                    window.addEventListener('resize', e),
                    () => {
                        window.removeEventListener('resize', e);
                    }
                );
            }, []),
            e
        );
    };
var CountdownIcon = ((e) => (
        (e.Timer = 'timer'),
        (e.Countdown = 'countdown'),
        (e.Cooldown = 'cooldown'),
        (e.None = 'none'),
        e
    ))(CountdownIcon || {}),
    CountdownStyle = ((e) => (
        (e.Description = 'description'),
        (e.Short = 'short'),
        (e.Long = 'long'),
        (e.Extended = 'extended'),
        e
    ))(CountdownStyle || {});
const base$2 = 'Countdown_99fa8328',
    icon$1 = 'Countdown_icon_b50ebafb',
    description = 'Countdown_description_91ad95d2',
    styles$4 = { base: base$2, icon: icon$1, description: description },
    formatUnit = (e) => e.toString().padStart(2, '0'),
    formatTimeUnits = (e, t) => {
        switch (t) {
            case CountdownStyle.Description:
                return getRoundedTimeUnitDescription(e);
            case CountdownStyle.Short:
                return `${formatUnit(e.minutes)}:${formatUnit(e.seconds)}`;
            case CountdownStyle.Long:
                return `${formatUnit(e.hours)}:${formatUnit(e.minutes)}:${formatUnit(e.seconds)}`;
            case CountdownStyle.Extended:
                return `${format(R.strings.common.duration.days(), { days: e.days })} | ${formatUnit(e.hours)}:${formatUnit(e.minutes)}:${formatUnit(e.seconds)}`;
        }
    },
    IMAGES = R.images.gui.maps.icons.components.countdown,
    getIcon = (e, t) => {
        const u = 2 === t ? IMAGES.big : IMAGES;
        switch (e) {
            case CountdownIcon.Timer:
                return u.clock();
            case CountdownIcon.Countdown:
                return u.hourglass();
            case CountdownIcon.Cooldown:
                return u.lock();
        }
    },
    Countdown = ({
        duration: e,
        icon: t = CountdownIcon.Timer,
        style: u = CountdownStyle.Description,
        onTimeReached: r,
        refreshRate: n,
        className: s = '',
        classNames: a = {},
    }) => {
        const o = n ?? (u !== CountdownStyle.Description ? 1 : void 0),
            i = useCountdown(e, o),
            l = useScaleState();
        r && r[i] && r[i]();
        const c = formatTimeUnits(getTimeUnits(i), u);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$4.base, s),
            children: [
                t !== CountdownIcon.None &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$4.icon, a.icon),
                        style: { backgroundImage: `url('${getIcon(t, l)}')` },
                    }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$4.description, a.text), children: c }),
            ],
        });
    },
    Countdown$1 = reactExports.memo(Countdown),
    Context = reactExports.createContext(void 0);
function useProgressBar() {
    const e = reactExports.useContext(Context);
    if (!e) throw new Error('useProgressBar must be used within a ProgressBar');
    return e;
}
const root$2 = 'Filled_root_94d1350d',
    fill = 'Filled_fill_32930ca9',
    filled = 'Filled_228d842a',
    wrapper = 'Filled_wrapper_fac9294',
    filled__small = 'Filled_filled__small_94d1350d',
    pattern = 'Filled_pattern_6ec8608d',
    filled__medium = 'Filled_filled__medium_94d1350d',
    styles$3 = {
        root: root$2,
        fill: fill,
        'header-h80': 'Filled_header-h80_66dc6e93',
        'header-h56': 'Filled_header-h56_75064f1',
        'header-h40': 'Filled_header-h40_4957179b',
        'header-h32': 'Filled_header-h32_8c897f84',
        'header-h28': 'Filled_header-h28_9db4941c',
        'header-h26': 'Filled_header-h26_7504809a',
        'header-h24': 'Filled_header-h24_748292c9',
        'header-h22': 'Filled_header-h22_626f663a',
        'header-h20': 'Filled_header-h20_6c0ca388',
        'header-h18': 'Filled_header-h18_551823ea',
        'header-h16': 'Filled_header-h16_d06e542',
        'paragraph-p20': 'Filled_paragraph-p20_a4d7545a',
        'paragraph-p18': 'Filled_paragraph-p18_551823ea',
        'paragraph-p16': 'Filled_paragraph-p16_d06e542',
        filled: filled,
        wrapper: wrapper,
        filled__small: filled__small,
        pattern: pattern,
        filled__medium: filled__medium,
    },
    Filled = reactExports.forwardRef(function ({ className: e, classNames: t, ...u }, r) {
        const n = useProgressBar();
        return jsxRuntimeExports.jsx('div', {
            ...u,
            ref: r,
            className: cx(styles$3.filled, styles$3[`filled__${n.size}`], e),
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(styles$3.wrapper, null == t ? void 0 : t.wrapper),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$3.fill, null == t ? void 0 : t.fill),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$3.pattern, null == t ? void 0 : t.pattern),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                ],
            }),
        });
    });
function ProgressBarProvider(e) {
    const [t, u] = reactExports.useState(Math.min(e.value, e.maxValue)),
        [r, n] = reactExports.useState(e.maxValue),
        s = usePrevious(t),
        a = usePrevious(r),
        o = useEvent$1((t) => u(Math.min(t, e.maxValue)));
    (reactExports.useLayoutEffect(() => {
        o(e.value);
    }, [e.value, o]),
        reactExports.useLayoutEffect(() => {
            n(e.maxValue);
        }, [e.maxValue]));
    const i = useEvent$1((t) => {
        var u;
        return null == (u = e.onValueChange) ? void 0 : u.call(e, t);
    });
    reactExports.useEffect(() => {
        i(t);
    }, [i, t]);
    const l = useEvent$1((t) => {
        var u;
        return null == (u = e.onMaxValueChange) ? void 0 : u.call(e, t);
    });
    reactExports.useEffect(() => {
        l(r);
    }, [l, r]);
    const c = reactExports.useMemo(() => {
        if (void 0 !== s && void 0 !== a) return { value: s, maxValue: a, percentage: s / a };
    }, [s, a]);
    assert(r > 0, 'initMaxValue must be greater than 0');
    const d = reactExports.useMemo(
        () => ({
            value: t,
            maxValue: r,
            setValue: o,
            setMaxValue: n,
            size: e.size,
            previous: c,
            percentage: t / r,
            animationEnabled: e.animationEnabled,
        }),
        [t, r, o, n, c, e.size, e.animationEnabled],
    );
    return jsxRuntimeExports.jsx(Context.Provider, { value: d, children: e.children });
}
const background = 'ProgressBar_background_b40cdfdf',
    base$1 = 'ProgressBar_27c2305c',
    base__small = 'ProgressBar_base__small_61ccd4be',
    base__medium = 'ProgressBar_base__medium_478d985a',
    base__full = 'ProgressBar_base__full_be7f12da',
    backgroundPattern = 'ProgressBar_backgroundPattern_7e932276',
    styles$2 = {
        background: background,
        base: base$1,
        base__small: base__small,
        base__medium: base__medium,
        base__full: base__full,
        backgroundPattern: backgroundPattern,
    },
    Base = defineStyledComponent('ProgressBar', styles$2.base, {
        variants: { size: { small: styles$2.base__small, medium: styles$2.base__medium, full: styles$2.base__full } },
    });
function ProgressBar({ size: e = 'medium', className: t, classNames: u, filledClassNames: r, ...n }) {
    return jsxRuntimeExports.jsx(ProgressBarProvider, {
        size: e,
        ...n,
        children: jsxRuntimeExports.jsxs(Base, {
            size: e,
            className: t,
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$2.background, null == u ? void 0 : u.background) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$2.backgroundPattern, null == u ? void 0 : u.backgroundPattern),
                }),
                jsxRuntimeExports.jsx(Filled, { classNames: r }),
                n.children,
            ],
        }),
    });
}
const formats = { superCompact: 'superCompact', compact: 'compact', default: 'default', detailed: 'detailed' },
    sizes = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48', x80x80: 'x80x80' },
    types = { accent: 'accent', cooldown: 'cooldown' },
    root$1 = 'FormattedValue_root_30bfaeef',
    item__x16x16 = 'FormattedValue_item__x16x16_9eb36ff5',
    item__x24x24 = 'FormattedValue_item__x24x24_9eb36ff5',
    item__x32x32 = 'FormattedValue_item__x32x32_bd66be3c',
    item__x48x48 = 'FormattedValue_item__x48x48_43bf6d1b',
    item__x80x80 = 'FormattedValue_item__x80x80_c03e8347',
    part__x16x16 = 'FormattedValue_part__x16x16_2186b32f',
    part__x24x24 = 'FormattedValue_part__x24x24_2186b32f',
    part__x32x32 = 'FormattedValue_part__x32x32_f9323fe3',
    part__x48x48 = 'FormattedValue_part__x48x48_bd002d69',
    part__x80x80 = 'FormattedValue_part__x80x80_dca9ec18',
    detailedSeparator = 'FormattedValue_detailedSeparator_30bfaeef',
    detailedSeparator__x16x16 = 'FormattedValue_detailedSeparator__x16x16_2b8550e4',
    detailedSeparator__x24x24 = 'FormattedValue_detailedSeparator__x24x24_2b8550e4',
    detailedSeparator__x32x32 = 'FormattedValue_detailedSeparator__x32x32_bc7822fa',
    detailedSeparator__x48x48 = 'FormattedValue_detailedSeparator__x48x48_4cb1e66b',
    detailedSeparator__x80x80 = 'FormattedValue_detailedSeparator__x80x80_2c1c84ee',
    styles$1 = {
        root: root$1,
        'header-h80': 'FormattedValue_header-h80_88ae46bd',
        'header-h56': 'FormattedValue_header-h56_c1278766',
        'header-h40': 'FormattedValue_header-h40_b1965bb8',
        'header-h32': 'FormattedValue_header-h32_9178f5fc',
        'header-h28': 'FormattedValue_header-h28_1dabbe56',
        'header-h26': 'FormattedValue_header-h26_ea806f98',
        'header-h24': 'FormattedValue_header-h24_4897bb47',
        'header-h22': 'FormattedValue_header-h22_12af6d83',
        'header-h20': 'FormattedValue_header-h20_7ad07491',
        'header-h18': 'FormattedValue_header-h18_8efd3640',
        'header-h16': 'FormattedValue_header-h16_f4396c4a',
        'paragraph-p20': 'FormattedValue_paragraph-p20_d2cab478',
        'paragraph-p18': 'FormattedValue_paragraph-p18_8efd3640',
        'paragraph-p16': 'FormattedValue_paragraph-p16_f4396c4a',
        item__x16x16: item__x16x16,
        item__x24x24: item__x24x24,
        item__x32x32: item__x32x32,
        item__x48x48: item__x48x48,
        item__x80x80: item__x80x80,
        part__x16x16: part__x16x16,
        part__x24x24: part__x24x24,
        part__x32x32: part__x32x32,
        part__x48x48: part__x48x48,
        part__x80x80: part__x80x80,
        detailedSeparator: detailedSeparator,
        detailedSeparator__x16x16: detailedSeparator__x16x16,
        detailedSeparator__x24x24: detailedSeparator__x24x24,
        detailedSeparator__x32x32: detailedSeparator__x32x32,
        detailedSeparator__x48x48: detailedSeparator__x48x48,
        detailedSeparator__x80x80: detailedSeparator__x80x80,
    };
function FormattedValue({ size: e, preFormatted: t }) {
    var u;
    const r = [];
    for (let n = 0; n < t.items.length; ++n)
        (t.separator &&
            n > 0 &&
            r.push(
                jsxRuntimeExports.jsx(
                    'span',
                    { className: cx(styles$1.detailedSeparator, styles$1[`detailedSeparator__${e}`]) },
                    'separator',
                ),
            ),
            r.push(
                jsxRuntimeExports.jsx(
                    'span',
                    {
                        className: cx(styles$1.item, styles$1[`item__${e}`]),
                        children:
                            null == (u = t.items[n])
                                ? void 0
                                : u
                                      .split(' ')
                                      .map((t, u) =>
                                          jsxRuntimeExports.jsx(
                                              'span',
                                              { className: cx(styles$1.part, styles$1[`part__${e}`]), children: t },
                                              `part_${u}`,
                                          ),
                                      ),
                    },
                    `item_${n}`,
                ),
            ));
    return r;
}
const STRING_RESOURCES = resources.resolve('strings'),
    COLON = ':',
    DAYS_FORMAT = 'D',
    HOURS_FORMAT = 'h',
    MINUTES_FORMAT = 'm',
    DEFAULT_MIN_VALUE = 1,
    FORMAT_PARTS = {
        [formats.compact]: [DAYS_FORMAT, HOURS_FORMAT, MINUTES_FORMAT],
        [formats.default]: [DAYS_FORMAT, HOURS_FORMAT, MINUTES_FORMAT],
        [formats.detailed]: [DAYS_FORMAT, 'hh', 'mm', 'ss'],
    },
    FORMATTER = {
        [formats.compact]: compactFormatter,
        [formats.default]: defaultFormatter,
        [formats.detailed]: detailedFormatter,
    },
    LOCALE_FORMATTERS = {
        [DAYS_FORMAT]: (e) =>
            format$1(
                STRING_RESOURCES.readOr('common.timer.days', () => DAYS_FORMAT.toLowerCase()),
                { days: e },
            ),
        [HOURS_FORMAT]: (e) =>
            format$1(
                STRING_RESOURCES.readOr('common.timer.hours', () => HOURS_FORMAT),
                { hours: e },
            ),
        [MINUTES_FORMAT]: (e) =>
            format$1(
                STRING_RESOURCES.readOr('common.timer.minutes', () => MINUTES_FORMAT),
                { minutes: e },
            ),
    };
function detailedFormatter(e) {
    var t;
    const [u, ...r] = e,
        n = r.join(COLON);
    return {
        separator: !0,
        items:
            Number(u) > 0
                ? [null == (t = LOCALE_FORMATTERS[DAYS_FORMAT]) ? void 0 : t.call(LOCALE_FORMATTERS, u), n]
                : [n],
    };
}
function defaultFormatter(e, t) {
    var u;
    let r = 0;
    const n = e.length - 1,
        s = FORMAT_PARTS[t],
        a = { separator: !1, items: [] };
    for (; r < n && !(Number(e[r]) > 0); ++r);
    return (
        s[r] === MINUTES_FORMAT && 0 === Number(e[r])
            ? (a.items = [
                  null == (u = LOCALE_FORMATTERS[MINUTES_FORMAT])
                      ? void 0
                      : u.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
              ])
            : (a.items = [r, r + 1].map((t) => {
                  var u;
                  return null == (u = LOCALE_FORMATTERS[s[t]]) ? void 0 : u.call(LOCALE_FORMATTERS, e[t]);
              })),
        a
    );
}
function compactFormatter(e, t) {
    var u, r;
    const n = e.length,
        s = FORMAT_PARTS[t],
        a = { separator: !1, items: [] };
    for (let o = 0; o < n; ++o)
        if (Number(e[o]) > 0)
            return ((a.items = [null == (u = LOCALE_FORMATTERS[s[o]]) ? void 0 : u.call(LOCALE_FORMATTERS, e[o])]), a);
    return (
        (a.items = [
            null == (r = LOCALE_FORMATTERS[MINUTES_FORMAT]) ? void 0 : r.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
        ]),
        a
    );
}
const formatValue = (e, t) => {
        var u;
        return null == (u = FORMATTER[t]) ? void 0 : u.call(FORMATTER, format$2(e, FORMAT_PARTS[t]), t);
    },
    root = 'Timer_root_6ee5dd6c',
    base = 'Timer_dac0a0aa',
    icon = 'Timer_icon_a61415df',
    icon__x16x16 = 'Timer_icon__x16x16_5bab55e2',
    icon__accent = 'Timer_icon__accent_2cf70c3b',
    icon__cooldown = 'Timer_icon__cooldown_4a26d3f',
    icon__x24x24 = 'Timer_icon__x24x24_31571381',
    icon__x32x32 = 'Timer_icon__x32x32_807dde34',
    icon__x48x48 = 'Timer_icon__x48x48_ae779a9e',
    icon__x80x80 = 'Timer_icon__x80x80_251aafea',
    label = 'Timer_label_1565f308',
    label__x16x16 = 'Timer_label__x16x16_e3ff224',
    label__x24x24 = 'Timer_label__x24x24_ca748cca',
    label__x32x32 = 'Timer_label__x32x32_13cccf38',
    label__x48x48 = 'Timer_label__x48x48_e3a9b542',
    label__x80x80 = 'Timer_label__x80x80_10a84ee6',
    label__accent = 'Timer_label__accent_ac7d4f7b',
    label__cooldown = 'Timer_label__cooldown_c2349ab9',
    styles = {
        root: root,
        'header-h80': 'Timer_header-h80_c9d42e58',
        'header-h56': 'Timer_header-h56_490973b5',
        'header-h40': 'Timer_header-h40_5de6bab',
        'header-h32': 'Timer_header-h32_d4ee2be3',
        'header-h28': 'Timer_header-h28_b9692cee',
        'header-h26': 'Timer_header-h26_bb21e32d',
        'header-h24': 'Timer_header-h24_b6b6bbf8',
        'header-h22': 'Timer_header-h22_ead39ced',
        'header-h20': 'Timer_header-h20_7a4d17e0',
        'header-h18': 'Timer_header-h18_b55f4a97',
        'header-h16': 'Timer_header-h16_af391325',
        'paragraph-p20': 'Timer_paragraph-p20_6a50f5b4',
        'paragraph-p18': 'Timer_paragraph-p18_b55f4a97',
        'paragraph-p16': 'Timer_paragraph-p16_af391325',
        base: base,
        icon: icon,
        icon__x16x16: icon__x16x16,
        icon__accent: icon__accent,
        icon__cooldown: icon__cooldown,
        icon__x24x24: icon__x24x24,
        icon__x32x32: icon__x32x32,
        icon__x48x48: icon__x48x48,
        icon__x80x80: icon__x80x80,
        label: label,
        label__x16x16: label__x16x16,
        label__x24x24: label__x24x24,
        label__x32x32: label__x32x32,
        label__x48x48: label__x48x48,
        label__x80x80: label__x80x80,
        label__accent: label__accent,
        label__cooldown: label__cooldown,
    };
function Timer({
    start: e,
    limit: t = 0,
    tick: u = 1,
    size: r = sizes.x24x24,
    type: n = types.accent,
    format: s = formats.default,
    autostart: a = !0,
    className: o,
    classNames: i,
}) {
    const [l] = useTicker(
        reactExports.useMemo(
            () => ({
                type: 'countdown',
                start: isDuration(e) ? e : seconds(e),
                limit: isDuration(t) ? t : seconds(t),
                tick: isDuration(u) ? u : seconds(u),
                autostart: a,
            }),
            [a, t, e, u],
        ),
    );
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles.base, o),
        children: [
            jsxRuntimeExports.jsx('div', {
                className: cx(styles.icon, styles[`icon__${r}`], styles[`icon__${n}`], null == i ? void 0 : i.icon),
            }),
            s !== formats.superCompact &&
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles.label,
                        styles[`label__${r}`],
                        styles[`label__${n}`],
                        null == i ? void 0 : i.label,
                    ),
                    children: jsxRuntimeExports.jsx(FormattedValue, { size: r, preFormatted: formatValue(l, s) }),
                }),
        ],
    });
}
((Timer.format = formats), (Timer.size = sizes), (Timer.type = types));
const getTimeUnitDescription = (e) =>
        e.days > 0
            ? format(R.strings.common.duration.days(), { days: e.days })
            : e.hours > 0
              ? format(R.strings.common.duration.hours(), { hours: e.hours })
              : e.minutes > 0
                ? format(R.strings.common.duration.minutes(), { minutes: e.minutes })
                : format(R.strings.common.duration.seconds(), { seconds: e.seconds }),
    Duration = ({ duration: e }) => {
        const t = e >= 0 ? getTimeUnitDescription(getTimeUnits(e)) : R.strings.common.duration.unlimited();
        return jsxRuntimeExports.jsx('span', { children: t });
    },
    Duration$1 = reactExports.memo(Duration);
export {
    Reward as $,
    initExternalPaddings$1 as A,
    Button$1 as B,
    ColorizedPlayerNickname as C,
    DateTime$1 as D,
    enableFullScreenModeSupported$1 as E,
    FormatText$1 as F,
    filter as G,
    breakpoints as H,
    resources as I,
    CButton as J,
    useRouter as K,
    FormatText as L,
    MediaSize as M,
    useSounds as N,
    useSimpleTooltip as O,
    ProgressBar$1 as P,
    useSpecialTooltip as Q,
    Image$1 as R,
    Size as S,
    Tooltip as T,
    UIProvider as U,
    createSimpleGetter as V,
    createMockControls as W,
    useMouseCoordinatesSprings as X,
    usePreloadImagesState as Y,
    useHorizontalScrollApi as Z,
    createTimeoutInEffect$1 as _,
    initializeModelWithContext as a,
    ImageSize as a0,
    getRewardImage as a1,
    GrowAnimationState as a2,
    constFalse as a3,
    unwrapItem as a4,
    get as a5,
    Countdown$1 as a6,
    Switch as a7,
    Route as a8,
    JSXBuilder as a9,
    ModelRouterProvider as aa,
    mapExists as ab,
    breakpointsByType as ac,
    useTimeout as ad,
    mapRange as ae,
    ValueTypes as af,
    RewardType as ag,
    BonusNames as ah,
    splitChinese$1 as ai,
    createLayoutReadyInEffect$1 as aj,
    createSoundPlay as ak,
    noop as al,
    getRegionalDateTime$1 as am,
    ProgressBar as an,
    Timer as ao,
    includes as ap,
    FormatNumber as aq,
    Duration$1 as ar,
    makeActions as b,
    DateTimeFormatsEnum as c,
    Blue as d,
    useMedia as e,
    find as f,
    DynamicTooltipWrapper as g,
    getRewardTooltipConfig as h,
    identity as i,
    getRewardValueType as j,
    useEvent$1 as k,
    getPlayerThemesColor as l,
    map as m,
    BackportContextMenu as n,
    findIndex as o,
    play$1 as p,
    useVerticalScrollApi as q,
    reduce as r,
    some as s,
    Scroll as t,
    useCallbackOnEsc as u,
    useKeydownListener as v,
    keyCodes as w,
    SimpleTooltip as x,
    TextButton as y,
    runView as z,
};
