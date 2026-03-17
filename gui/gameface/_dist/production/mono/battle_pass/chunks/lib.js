var __defProp = Object.defineProperty,
    __defNormalProp = (e, t, r) =>
        t in e ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
    __publicField = (e, t, r) => __defNormalProp(e, 'symbol' != typeof t ? t + '' : t, r),
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
    g as computedFn,
    h as comparer$1,
    R as React,
    i as client$1,
    l as loadDefaultJapaneseParser,
    k as useSpring,
    m as cva,
    n as animated,
    p as ReactDOM,
    q as runInAction,
    s as autorun,
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
    const r = t.split('.');
    if (window.R && window.R.images) {
        const t = r[r.length - 1];
        if (!t) return;
        const s = r.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, e);
        if (!s) return;
        return 'function' == typeof s[t] ? s[t]() : void 0;
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
    readOr(e, t, r = 'silent') {
        const s = e.startsWith('R.images') ? e : concatWithPath(this.prefix, e),
            n = readFromR$2(e.startsWith('R.images') ? window : this.root, s);
        return void 0 === n ? ('silent' !== r && logBySeverity$1(`Resource not found: ${s}`, r), t()) : n;
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
    readOr(e, t, r = 'silent') {
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
    return window.formatters.getNumberFormat(t, numberFormats[e]);
}
function isRealFormat(e) {
    return e in realFormats;
}
function formatReal(e, t, r = 2) {
    return window.formatters.getRealFormat(t, realFormats[e], r);
}
function formatDateTime(e, t, r = !0) {
    return window.regionalDateTime.getRegionalDateTime(t, e, r);
}
const timeFormats = { full: DateTimeFormatsEnum.FullTime, short: DateTimeFormatsEnum.ShortTime },
    timeFormatList = Object.keys(timeFormats);
function formatTime(e, t, r = !0) {
    return window.regionalDateTime.getRegionalDateTime(t, e, r);
}
const intl$1 = {
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
function readFromR$1(e, t, r) {
    const s = e.split('.');
    if (window.R && window.R.strings) {
        const e = s[s.length - 1];
        if (!e) return;
        const n = s.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, r);
        if (!n) return;
        return 'function' == typeof n[e] ? (t ? n[e](t) : n[e]()) : void 0;
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
    readOr(e, t, r = 'silent') {
        const s = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            n = readFromR$1(s, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === n ? ('silent' !== r && logBySeverity$1(`Resource not found: ${s}`, r), t()) : n;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            r = readFromR$1(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === r) throw new Error(`Resource not found: ${t}`);
        return r;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, r, s = 'silent') {
        const n = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            a = readFromR$1(n, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === a ? ('silent' !== s && logBySeverity$1(`Resource not found: ${n}`, s), r()) : a;
    }
    pluralOrEmpty(e, t, r = 'warn') {
        return this.pluralOr(e, t, () => '', r);
    }
}
function readFromR(e, t) {
    const r = t.split('.');
    if (window.R && window.R.videos) {
        const t = r[r.length - 1];
        if (!t) return;
        const s = r.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, e);
        if (!s) return;
        return 'function' == typeof s[t] ? s[t]() : void 0;
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
    readOr(e, t, r = 'silent') {
        const s = e.startsWith('R.videos') ? e : concatWithPath(this.prefix, e),
            n = readFromR(e.startsWith('R.videos') ? window : this.root, s);
        return void 0 === n ? ('silent' !== r && logBySeverity$1(`Resource not found: ${e}`, r), t()) : n;
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
    intl: asValue(intl$1),
}),
    define_import_meta_env_default.VITE_HOT_LIVE_SERVER &&
        resources.register('images', asFunction(() => new ImagesServerRedirectProvider()).singleton()));
const easings = {
    easeInQuad: (e) => e * e,
    easeInCubic: (e) => e * e * e,
    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
    easeOutQuint: (e) => 1 + --e * e * e * e * e,
};
function curry2(e) {
    return function (t, r) {
        switch (arguments.length) {
            case 1:
                return function (r) {
                    return e(t, r);
                };
            case 2:
                return e(t, r);
        }
    };
}
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
function hours(e) {
    return { [typeId]: typeId, value: e, unit: 'hours' };
}
function days(e) {
    return { [typeId]: typeId, value: e, unit: 'days' };
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
const convert = (e, t) => {
        const r = toMillis(e),
            s = (0, fromMs[t])(r);
        return { [typeId]: typeId, value: s, unit: t };
    },
    add = curry2(function (e, t) {
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
    const r = toMillis(e);
    return t.map((e) => formats$1[e](r));
}
function getNumberFormat(e, t) {
    return window.systemLocale.getNumberFormat(e, t);
}
const HOURS_IN_DAY = 24,
    ONE_MINUTE = 60,
    ONE_HOUR = 60 * ONE_MINUTE,
    ONE_DAY = HOURS_IN_DAY * ONE_HOUR;
function getTimeUnits(e = 0) {
    let t = e;
    const r = Math.trunc(t / ONE_DAY);
    t -= r * ONE_DAY;
    const s = Math.trunc(t / ONE_HOUR);
    t -= s * ONE_HOUR;
    const n = Math.trunc(t / ONE_MINUTE);
    return ((t -= n * ONE_MINUTE), { days: r, hours: s, minutes: n, seconds: t });
}
function normalizeResource(e) {
    return e.replaceAll('-', '_');
}
const convertNbsp$1 = (e) => e.replace(/&nbsp;/g, ' ');
function format$1(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function getRegionalDateTime(e, t, r = !0) {
    return window.regionalDateTime.getRegionalDateTime(e, t, r);
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
    onMinimize = makeEngineEvent$1('clientMinimized'),
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
    function r() {
        e.enabled && setTrackMouseOutside$1(!0);
    }
    function s() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', r),
                  setTrackMouseOutside$1(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', r))
            : setTrackMouseOutside$1(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, r) => (
                (t[r] = (function (t) {
                    return (r) => {
                        e.listeners += 1;
                        const n = `mouse${t}`,
                            a = internalMouse$1[t]((e) => r([e, 'outside']));
                        function o(e) {
                            r([e, 'inside']);
                        }
                        return (
                            window.addEventListener(n, o),
                            s(),
                            () => {
                                (a(), window.removeEventListener(n, o), (e.listeners -= 1), s());
                            }
                        );
                    };
                })(r)),
                t
            ),
            {},
        ),
        disable() {
            ((e.enabled = !1), s());
        },
        enable() {
            ((e.enabled = !0), s());
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
const sounds$1 = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays$1 = Object.keys(sounds$1).reduce((e, t) => ((e[t] = () => playSound$2(sounds$1[t])), e), {}),
    play$1 = { ...plays$1, sound: playSound$2 },
    displayStatus$1 = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    createSubscribeHitTest = () => {
        const e = new Set(),
            t = (t, r) => {
                for (const s of e.values())
                    if (s(t)) {
                        r.value = !1;
                        break;
                    }
            };
        return (r) => (
            e.add(r),
            1 === e.size && (viewEnv.setHitTestEnabled(!0), engine.on('self.onHitTest', t)),
            () => {
                (e.delete(r), 0 === e.size && (viewEnv.setHitTestEnabled(!1), engine.off('self.onHitTest', t)));
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
        onExternalPaddingsUpdated: makeEngineEvent$1('self.onPaddingsUpdated'),
        children: {
            onAdded: makeEngineEvent$1('children.onAdded'),
            onLoaded: makeEngineEvent$1('children.onLoaded'),
            onRemoved: makeEngineEvent$1('children.onRemoved'),
            onAttached: makeEngineEvent$1('children.onAttached'),
            onTextureReady: makeEngineEvent$1('children.onTextureReady'),
            onRequestPosition: makeEngineEvent$1('children.requestPosition'),
        },
    },
    viewEventTypes$1 = { tooltip: 1, popover: 2, contextMenu: 4, move: 16, close: 32, minimize: 64 };
function serializeGlobalBoundingBox(e) {
    return { __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height };
}
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
        for (const [r, s] of Object.entries(e)) {
            const e = serializeEventArgument(s);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: r, ...e });
        }
        return t;
    },
    sendViewEvent$1 = (e, t) => {
        const r = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: s, ...n } = t;
            return void 0 !== s
                ? viewEnv.handleViewEvent({ __Type: r, type: e, ...n, arguments: createViewEventArguments$2(s) })
                : viewEnv.handleViewEvent({ __Type: r, type: e, ...n });
        }
        return viewEnv.handleViewEvent({ __Type: r, type: e });
    },
    openedTooltips = new Map(),
    openedContextMenus = new Map(),
    sendEvent$1 = {
        close(e) {
            sendViewEvent$1('popover' === e ? viewEventTypes$1.popover : viewEventTypes$1.close);
        },
        closeView() {
            sendViewEvent$1(viewEventTypes$1.close);
        },
        minimize() {
            sendViewEvent$1(viewEventTypes$1.minimize);
        },
        move(e) {
            sendViewEvent$1(viewEventTypes$1.move, { isMouseEvent: !0, on: e });
        },
        popover: {
            open({ contentID: e, decoratorID: t = 0, targetID: r, direction: s, boundingBox: n, args: a }) {
                sendViewEvent$1(viewEventTypes$1.popover, {
                    contentID: e,
                    decoratorID: t,
                    targetID: r,
                    direction: s,
                    bbox: serializeGlobalBoundingBox(n),
                    on: !0,
                    isMouseEvent: !0,
                    args: a,
                });
            },
            close() {
                sendViewEvent$1(viewEventTypes$1.popover, { on: !1 });
            },
        },
        tooltip: {
            open(e, t, r = 0, s) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, {
                    contentID: t,
                    decoratorID: r,
                    targetID: e,
                    isMouseEvent: !0,
                    on: !0,
                    args: s,
                }),
                    openedTooltips.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, r = 0) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, { contentID: t, decoratorID: r, targetID: e, on: !1 }),
                    openedTooltips.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(openedTooltips.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, r = 0, s) {
                (sendViewEvent$1(viewEventTypes$1.contextMenu, {
                    contentID: t,
                    decoratorID: r,
                    targetID: e,
                    isMouseEvent: !0,
                    on: !0,
                    args: s,
                }),
                    openedContextMenus.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, r = 0) {
                (sendViewEvent$1(viewEventTypes$1.contextMenu, {
                    contentID: t,
                    decoratorID: r,
                    targetID: e,
                    on: !1,
                    isMouseEvent: !1,
                }),
                    openedContextMenus.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(openedContextMenus.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
    };
function ids() {
    return window.subViews.ids();
}
const ALL_SIDES$1 = 15;
function addModelObserver$1(e, t, r) {
    return viewEnv.addDataChangedCallback(e, t, r);
}
function setSidePaddingsRem$1(e) {
    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, ALL_SIDES$1);
}
function resize$1(e, t, r = 'px') {
    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
}
function getScale$2() {
    return viewEnv.getScale();
}
function pxToRem$1(e) {
    return viewEnv.pxToRem(e);
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
        const { top: t, right: r, bottom: s, left: n } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${r}rem`),
            e.style.setProperty('--external-padding-bottom', `${s}rem`),
            e.style.setProperty('--external-padding-left', `${n}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
function getKeyNameFromKeyCode(e) {
    return window.systemInput.getKeyName(e);
}
function pipe(e, t, r, s, n, a, o, u, i) {
    switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return t(e);
        case 3:
            return r(t(e));
        case 4:
            return s(r(t(e)));
        case 5:
            return n(s(r(t(e))));
        case 6:
            return a(n(s(r(t(e)))));
        case 7:
            return o(a(n(s(r(t(e))))));
        case 8:
            return u(o(a(n(s(r(t(e)))))));
        case 9:
            return i(u(o(a(n(s(r(t(e))))))));
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
    { initializer: e = !0, rootId: t = 0, getRoot: r = getRootDefault, context: s = 'model' } = {},
    { name: n = 'DataLayer' } = {},
) {
    const a = new Map(),
        o = { subscribersNotified: new SimpleEmitter() },
        u = engine.whenReady.then(() => {
            function e(e, t, r) {
                (r.forEach((r) => {
                    const s = a.get(r);
                    void 0 !== s && s(e, t);
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
    function i() {
        try {
            const e = r(t);
            return s.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${n}. Root id: ${t}. Context: ${s}`);
        }
    }
    const l = (e) => {
        const r = i();
        if ('string' != typeof e || 0 === e.length) return r;
        try {
            return e.split('.').reduce((e, t) => {
                if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                const r = e[t];
                return 'function' == typeof r ? r.bind(e) : r;
            }, r);
        } catch (a) {
            throw new Error(`Failure readByPath in ${n}. Root id: ${t}. Context: ${s}:\n${a}\n`);
        }
    };
    function c(e) {
        viewEnv.removeDataChangedCallback(e, t) ? a.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (r, n) => {
            const o = addModelObserver$1('string' == typeof n ? `${s}.${n}` : s, t, !0);
            return (a.set(o, r), e && r(l(n), []), o);
        },
        readByPath: l,
        readSafeByPath: (e) => {
            const t = i();
            return 'string' != typeof e || 0 === e.length
                ? t
                : e.split('.').reduce((e, t) => {
                      const r = null == e ? void 0 : e[t];
                      return 'function' == typeof r ? r.bind(e) : r;
                  }, t);
        },
        createCallback: (e, t) => {
            const r = l(t);
            return (...t) => {
                r(e(...t));
            };
        },
        createCallbackNoArgs: (e) => {
            const t = l(e);
            return () => {
                t();
            };
        },
        dispose: function () {
            if (0 === t || ids().includes(t)) for (const e of a.keys()) c(e);
            u.then((e) => e());
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
    const r = cleanContext(t);
    return e ? (0 === r.length ? e : `${r}.${e}`) : r;
}
function resolvePath(e, t) {
    return t ? resolvePathContext(e, t.context) : e;
}
function createMockInstance(e, t) {
    return {
        subscribe: () => 0,
        readSafeByPath: e,
        readByPath: e,
        createCallback: (r, s) => {
            const n = e(resolvePath(s, t));
            return (...e) => {
                n(r(...e));
            };
        },
        createCallbackNoArgs: (r) => {
            const s = e(resolvePath(r, t));
            return () => {
                s();
            };
        },
        dispose: () => {},
        unsubscribe: () => {},
        events: { subscribersNotified: new SimpleEmitter() },
    };
}
const clamp$1 = (e, t, r) => (r < e ? e : r > t ? t : r);
function noop$1() {}
const emptyFunction$2 = noop$1;
function identity(e) {
    return e;
}
function constFalse() {
    return !1;
}
function isFunction(e) {
    return 'function' == typeof e;
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
function addEventListener(e, t, r, s) {
    return (e.addEventListener(t, r, s), () => e.removeEventListener(t, r, s));
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((o.prototype.append = function (e, t) {
                ((e = n(e)), (t = a(t)));
                var r = this.map[e];
                (r || ((r = []), (this.map[e] = r)), r.push(t));
            }),
                (o.prototype.delete = function (e) {
                    delete this.map[n(e)];
                }),
                (o.prototype.get = function (e) {
                    var t = this.map[n(e)];
                    return t ? t[0] : null;
                }),
                (o.prototype.getAll = function (e) {
                    return this.map[n(e)] || [];
                }),
                (o.prototype.has = function (e) {
                    return this.map.hasOwnProperty(n(e));
                }),
                (o.prototype.set = function (e, t) {
                    this.map[n(e)] = [a(t)];
                }),
                (o.prototype.forEach = function (e) {
                    var t = this;
                    Object.getOwnPropertyNames(this.map).forEach(function (r) {
                        e(r, t.map[r]);
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
                r = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'],
                s = !(
                    'undefined' == typeof window ||
                    !window.ActiveXObject ||
                    (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
                );
            (c.call(d.prototype),
                c.call(m.prototype),
                (self.Headers = o),
                (self.Request = d),
                (self.Response = m),
                (self.fetch = function (t, r) {
                    var n;
                    return (
                        (n = d.prototype.isPrototypeOf(t) && !r ? t : new d(t, r)),
                        new fetch.Promise(function (t, r) {
                            var a = (function () {
                                return s && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function o() {
                                if (4 === a.readyState) {
                                    var e = 1223 === a.status ? 204 : a.status;
                                    if (e < 100 || e > 599) r(new TypeError('Network request failed'));
                                    else {
                                        var s = {
                                                status: e,
                                                statusText: a.statusText,
                                                headers: p(a),
                                                url:
                                                    'responseURL' in a
                                                        ? a.responseURL
                                                        : /^X-Request-URL:/m.test(a.getAllResponseHeaders())
                                                          ? a.getResponseHeader('X-Request-URL')
                                                          : void 0,
                                            },
                                            n = 'response' in a ? a.response : a.responseText;
                                        t(new m(n, s));
                                    }
                                }
                            }
                            ('cors' === n.credentials && (a.withCredentials = !0),
                                (a.onreadystatechange = o),
                                self.usingActiveXhr ||
                                    ((a.onload = o),
                                    (a.onerror = function () {
                                        r(new TypeError('Network request failed'));
                                    })),
                                a.open(n.method, n.url, !0),
                                'responseType' in a && e && (a.responseType = 'blob'),
                                n.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        a.setRequestHeader(e, t);
                                    });
                                }),
                                a.send(void 0 === n._bodyInit ? null : n._bodyInit));
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
        function a(e) {
            return ('string' != typeof e && (e = e.toString()), e);
        }
        function o(e) {
            this.map = {};
            var t = this;
            e instanceof o
                ? e.forEach(function (e, r) {
                      r.forEach(function (r) {
                          t.append(e, r);
                      });
                  })
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (r) {
                      t.append(r, e[r]);
                  });
        }
        function u(e) {
            if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function i(e) {
            return new fetch.Promise(function (t, r) {
                ((e.onload = function () {
                    t(e.result);
                }),
                    (e.onerror = function () {
                        r(e.error);
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
                (this._initBody = function (r) {
                    if (((this._bodyInit = r), 'string' == typeof r)) this._bodyText = r;
                    else if (e && Blob.prototype.isPrototypeOf(r)) this._bodyBlob = r;
                    else if (t && FormData.prototype.isPrototypeOf(r)) this._bodyFormData = r;
                    else {
                        if (r) throw new Error('unsupported BodyInit type');
                        this._bodyText = '';
                    }
                }),
                e
                    ? ((this.blob = function () {
                          var e = u(this);
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
                              r = u(this);
                          if (r) return r;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), i(t));
                          if (this._bodyFormData) throw new Error('could not read FormData body as text');
                          return fetch.Promise.resolve(this._bodyText);
                      }))
                    : (this.text = function () {
                          var e = u(this);
                          return e || fetch.Promise.resolve(this._bodyText);
                      }),
                t &&
                    (this.formData = function () {
                        return this.text().then(_);
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
            var s, n;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new o(t.headers)),
                (this.method = ((s = t.method || 'GET'), (n = s.toUpperCase()), r.indexOf(n) > -1 ? n : s)),
                (this.mode = t.mode || null),
                (this.referrer = null),
                ('GET' === this.method || 'HEAD' === this.method) && t.body)
            )
                throw new TypeError('Body not allowed for GET or HEAD requests');
            this._initBody(t.body);
        }
        function _(e) {
            var t = new FormData();
            return (
                e
                    .trim()
                    .split('&')
                    .forEach(function (e) {
                        if (e) {
                            var r = e.split('='),
                                s = r.shift().replace(/\+/g, ' '),
                                n = r.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(s), decodeURIComponent(n));
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
                        var r = e.trim().split(':'),
                            s = r.shift().trim(),
                            n = r.join(':').trim();
                        t.append(s, n);
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
const keyCodes = {
    NONE: -1,
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
};
function makeMapWithPrefix(e, t) {
    return e.reduce((e, r) => ({ ...e, [`${t}_${r}`.toUpperCase()]: `${t}${r}` }), {});
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
class Iter {
    constructor(e) {
        (__publicField(this, 'iterable'), __publicField(this, 'index', 0), (this.iterable = e));
    }
    static range(e, t) {
        return new Iter({
            *[Symbol.iterator]() {
                for (let r = e; r < t; r++) yield r;
            },
        });
    }
    append(e) {
        const t = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const e of t) yield e;
                for (const t of e) yield t;
            },
        });
    }
    prepend(e) {
        const t = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const t of e) yield t;
                for (const e of t) yield e;
            },
        });
    }
    add(e) {
        const t = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const e of t) yield e;
                yield e;
            },
        });
    }
    preAdd(e) {
        const t = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                yield e;
                for (const e of t) yield e;
            },
        });
    }
    remove(e) {
        const t = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const r of t) r !== e && (yield r);
            },
        });
    }
    map(e) {
        const t = this,
            r = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const s of r) yield e(s, t.index++);
            },
        });
    }
    reverse() {
        const e = this.toArray();
        return new Iter({
            *[Symbol.iterator]() {
                for (let t = e.length - 1; t >= 0; t--) yield e[t];
            },
        });
    }
    head() {
        for (const e of this.iterable) return e;
    }
    filter(e) {
        const t = this,
            r = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const s of r) e(s, t.index++) && (yield s);
            },
        });
    }
    nonNullables() {
        const e = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const t of e) null != t && (yield t);
            },
        });
    }
    take(e) {
        const t = this,
            r = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const s of r) {
                    if (t.index++ >= e) break;
                    yield s;
                }
            },
        });
    }
    skip(e) {
        const t = this,
            r = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const s of r) t.index++ < e || (yield s);
            },
        });
    }
    chunk(e) {
        const t = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                let r = [];
                for (const s of t) (r.push(s), r.length >= e && (yield r, (r = [])));
                r.length > 0 && (yield r);
            },
        });
    }
    reduce(e, t) {
        let r = t;
        for (const s of this.iterable) r = e(r, s, this.index++);
        return r;
    }
    count() {
        let e = 0;
        for (const t of this.iterable) e++;
        return e;
    }
    get(e) {
        for (const t of this.iterable) {
            if (this.index === e) return ((this.index = 0), t);
            this.index++;
        }
    }
    toArray() {
        return [...this.iterable];
    }
}
function iter(e) {
    return new Iter(e);
}
function isNullable(e) {
    return null == e;
}
function isNonNullable(e) {
    return !1 === isNullable(e);
}
function get(e, t) {
    var r;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (r = e[t]) ? void 0 : r.value;
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
    return Array.isArray(e) ? e.map(t) : e.map((e, r, s) => t(null == e ? void 0 : e.value, r, s));
}
function every(e, t) {
    if (Array.isArray(e)) return e.every(t);
    for (let r = 0; r < e.length; r++) {
        if (!t(unsafeGet(e, r), r, e)) return !1;
    }
    return !0;
}
function some(e, t) {
    if (Array.isArray(e)) return e.some(t);
    for (let r = 0; r < e.length; r++) {
        if (t(unsafeGet(e, r), r, e)) return !0;
    }
    return !1;
}
function filter(e, t) {
    var r;
    if (Array.isArray(e)) return e.filter(t);
    const s = [];
    for (let n = 0; n < e.length; n++) {
        const a = null == (r = e[n]) ? void 0 : r.value;
        t(a, n, e) && s.push(a);
    }
    return s;
}
function lastIndexZero(e) {
    return Math.max(0, e.length - 1);
}
function slice(e, t = 0, r = e.length - 1) {
    return {
        [Symbol.iterator]() {
            let s = Math.max(t, 0);
            const n = Math.min(r, lastIndexZero(e));
            return {
                next: function () {
                    if (s > n) return { done: !0, value: null };
                    const t = e[s++];
                    return t ? { value: unwrapItem(t), done: !1 } : { done: !0, value: null };
                },
            };
        },
    };
}
function find(e, t) {
    for (let r = 0; r < e.length; r++) {
        const s = unwrapItem(e[r]);
        if (t(s, r, e)) return s;
    }
}
function filterMap(e, t, r) {
    const s = [];
    for (let n = 0; n < e.length; n++) {
        const a = unsafeGet(e, n);
        t(a, n, e) && s.push(r(a, n, e));
    }
    return s;
}
function mapFilter(e, t, r) {
    const s = [];
    for (let n = 0; n < e.length; n++) {
        const a = t(unsafeGet(e, n), n, e);
        r(a, n, e) && s.push(a);
    }
    return s;
}
function mapNonNullable(e, t) {
    return mapFilter(e, t, isNonNullable);
}
function findIndexLast(e, t) {
    for (let r = e.length - 1; r >= 0; r--) {
        if (t(unsafeGet(e, r), r, e)) return r;
    }
}
function join(e, t = ',') {
    let r = '';
    for (let s = 0; s < e.length; s++) {
        s > 0 && (r += t);
        const n = unsafeGet(e, s);
        r += null == n ? '' : String(n);
    }
    return r;
}
function reduce(e, t, r) {
    if (Array.isArray(e)) return e.reduce(t, r);
    let s = r;
    for (let n = 0; n < e.length; n++) {
        s = t(s, unsafeGet(e, n), n, e);
    }
    return s;
}
function sort(e, t) {
    return map(e, identity).sort(t);
}
function makeActions(e) {
    const t = {};
    for (const r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            const s = e[r];
            t[r] = action(s);
        }
    return t;
}
function takeAction(e) {
    return action((t) => {
        e.set(t);
    });
}
const createLayoutReadyInEffect$1 = (e) => {
        let t,
            r = null;
        return (
            (r = requestAnimationFrame(() => {
                r = requestAnimationFrame(() => {
                    ((r = null), (t = e()));
                });
            })),
            () => {
                ('function' == typeof t && t(), null !== r && cancelAnimationFrame(r));
            }
        );
    },
    createTimeoutInEffect$1 = (e, t) => {
        let r;
        const s = setTimeout(() => {
            r = e();
        }, t);
        return () => {
            ('function' == typeof r && r(), clearTimeout(s));
        };
    };
function assert(e, t) {
    e || console.error(t || 'Assertion failed');
}
function mapRange(e, t, r) {
    return 'function' == typeof t
        ? _mapRange(0, e, t)
        : (assert(void 0 !== r, 'fn must be defined'), _mapRange(e, t, r));
}
function _mapRange(e, t, r) {
    const s = new Array(t - e);
    for (let n = e; n < t; n++) s[n] = r(n);
    return s;
}
assert.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const ROMAN$1 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    ARABIC$1 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    ROMAN_SUBSET = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    ROMAN_FORBIDDEN_LANGUAGE_CODES$2 = ['ko', 'no'],
    IS_ROMAN_FORBIDDEN = ROMAN_FORBIDDEN_LANGUAGE_CODES$2.includes(resources.resolve('langCode'));
function arabicToRoman(e) {
    if (e <= 10) return ROMAN_SUBSET[e] ?? String(e);
    let t = '';
    for (let r = ARABIC$1.length - 1; r >= 0; r--) {
        let s = ARABIC$1[r];
        for (; void 0 !== s && e >= s; ) ((t += ROMAN$1[r]), (e -= s));
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
function int(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
}
const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz',
    NUMBERS_ALPHABET = '0123456789',
    createString =
        (e) =>
        (t, r = int(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)) => {
            const s = e.length;
            let n = r;
            let a = '';
            for (let o = 0; o < t; o++) {
                const t = Math.abs(Math.floor(((n = (9301 * n + 49297) % 233280), (n / 233280) * s)));
                a += e[t % e.length];
            }
            return a;
        };
function isValid(e) {
    return 'number' == typeof e && !Number.isNaN(e) && Number.isFinite(e);
}
const isNumber = isValid;
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
function deepEqual(e, t, r = -1) {
    return eq(e, t, r);
}
function eq(e, t, r, s, n) {
    if (e === t) return 0 !== e || 1 / Number(e) == 1 / Number(t);
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    const a = typeof e;
    if ('function' !== a && 'object' !== a && 'object' != typeof t) return !1;
    const o = toString.call(e);
    if (o !== toString.call(t)) return !1;
    switch (o) {
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
            r >= 0 && r++;
    }
    const u = unwrap(e),
        i = unwrap(t),
        l = Array.isArray(u) && Array.isArray(i);
    if (!l) {
        if ('object' != typeof u || 'object' != typeof i) return !1;
        const e = u.constructor,
            t = i.constructor;
        if (
            e !== t &&
            !(isFunction(e) && e instanceof e && isFunction(t) && t instanceof t) &&
            'constructor' in u &&
            'constructor' in i
        )
            return !1;
    }
    if (0 === r) return !1;
    (r < 0 && (r = -1), (n = n || []));
    let c = (s = s || []).length;
    for (; c--; ) if (s[c] === u) return n[c] === i;
    if ((s.push(e), n.push(t), l)) {
        if (((c = u.length), c !== i.length)) return !1;
        for (; c--; ) if (!eq(u[c], i[c], r - 1, s, n)) return !1;
    } else {
        const e = Object.keys(u);
        let t;
        if (((c = e.length), Object.keys(i).length !== c)) return !1;
        for (; c--; ) {
            if (((t = e[c]), void 0 === t))
                return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
            if (!Object.prototype.hasOwnProperty.call(i, t) || !eq(u[t], i[t], r - 1, s, n)) return !1;
        }
    }
    return (s.pop(), n.pop(), !0);
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
    mouseButtons = { left: 0, wheel: 1, right: 2 };
function splitChinese$1(e) {
    const t = [],
        r = e
            .replace(/&nbsp;/g, ' ')
            .replace(/ /g, ' ')
            .matchAll(/[(（《「]*["'][^'"]*["'][。，:;：；—！!？?》」•%)、]*|.*?(?=[(（《「]*["'])|.*/gsu);
    for (const [s] of r) {
        const e = s.matchAll(
            /[(（《「“‘'"]*[\u4E00-\u9FFF\u3400-\u4DBF%][。，:;：；—！!？?》」•%)、’”'"]*|[(（《「“‘'"]*[a-zA-Z0-9-.,]+[。，:;：；—！!？?》」•%)、’”'"]*|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
        );
        for (const [r] of e) t.push(r);
    }
    return t;
}
function splitJapanese(e) {
    const t = [],
        r = e
            .replace(/&nbsp;/g, ' ')
            .matchAll(
                /[【「(（『《]?[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF%](?:[。!?、…・ー—–!%?）)】」》』]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\u3040-\u30FF/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|\u00A0|[^\s]/gu,
            );
    for (const [s] of r) t.push(s);
    return t;
}
function splitKorean(e) {
    const t = [],
        r = e
            .replace(/&nbsp;/g, ' ')
            .matchAll(
                /\s+|\u00A0|[【「(（『《]?[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F%](?:[。!?、…・ー—–!%?）)】」》『]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|[^\s]/gu,
            );
    for (const [s] of r) t.push(s);
    return t;
}
function splitThai(e) {
    var t;
    const r = [],
        s = e
            .replace(/&nbsp;/g, ' ')
            .matchAll(
                /[【「(（『"《]?[\u0E00-\u0E7F%](?:[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E。!?,.:、…・/ー—–!%+?）)】」"》』]+)?|[「【(（『《"]?\d+(?:,\d{3})*(?:-\d+(?:,\d{3})*)?(?:\s*[a-zA-Z\u0E00-\u0E7F/%]+)?(?:[。.,，、:;：；!?）)】」"》・%)、]+)?|[「【(（『《"]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?"》】」）)』]+)?|[\u00A0 ]|[^\s]/gu,
            );
    for (const [n] of s)
        /^\s+$/.test(n)
            ? r.length
                ? (r[r.length - 1] += n)
                : r.push(n)
            : 1 === r.length && (null == (t = r[0]) ? void 0 : t.startsWith('  '))
              ? (r[0] = ' ' + n)
              : r.push(n);
    return r;
}
const splitters = {
    zh_cn: splitChinese$1,
    zh_sg: splitChinese$1,
    zh_tw: splitChinese$1,
    ja: splitJapanese,
    ko: splitKorean,
    th: splitThai,
};
function defaultSplit(e) {
    return e.split(' ');
}
const langsWithoutSpace = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko', 'th']);
function addSpaceAndMap(e, t, r) {
    return langsWithoutSpace.has(t)
        ? e.map(r)
        : e.map((e, t, s) => (t === s.length - 1 ? r(e, t, s) : r(`${e} `, t, s)));
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
    const r = t['width' === e ? 'height' : 'width'],
        s = new Set(t[e].classes),
        n = new Set(r.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || s.has(e)));
    return Array.from(new Set([...s, ...n])).join(' ');
}
function calculateMedia(e, t, r) {
    const s = BREAKPOINTS.reduce(
            (r, s) => (
                s.width <= e &&
                    (r.width.classes.push(s.className, `${s.className}Width`),
                    r.width.names.push(s.name),
                    (r.width.weight += 1)),
                s.height <= t &&
                    (r.height.classes.push(s.className, `${s.className}Height`),
                    r.height.names.push(s.name),
                    (r.height.weight += 1)),
                r
            ),
            { width: { classes: [], names: [], weight: 0 }, height: { classes: [], names: [], weight: 0 } },
        ),
        n = s.width.weight <= s.height.weight ? 'width' : 'height',
        a = s[n],
        o = a.names[a.names.length - 1] ?? breakpoints.extraSmall,
        u = breakpointsByType[o],
        i = s.width.names,
        l = s.height.names,
        c = i[i.length - 1] ?? breakpoints.extraSmall,
        d = l[l.length - 1] ?? breakpoints.extraSmall,
        _ = { width: breakpointsByType[c].width, height: breakpointsByType[d].height };
    return {
        mediaClass: generateMediaClasses(n, s),
        breakpoint: u,
        screenWidthRem: e,
        screenHeightRem: t,
        breaks: a.names,
        sides: _,
        mediaSize: u.width,
        mediaWidth: _.width,
        mediaHeight: _.height,
        upscale: r > 1,
    };
}
const getScale$1 = () => remToPx$1(1),
    calcMediaState = () => {
        const e = getSize$2('rem');
        return calculateMedia(e.width, e.height, getScale$1());
    };
function MediaProvider({ children: e }) {
    const [t, r] = reactExports.useState(calcMediaState);
    return (
        reactExports.useLayoutEffect(() => {
            function e() {
                r(calcMediaState);
            }
            e();
            const t = onResize$1(e),
                s = onRescale(e);
            return () => {
                (t(), s());
            };
        }, []),
        jsxRuntimeExports.jsx(MediaContext.Provider, { value: t, children: e })
    );
}
function useMedia() {
    return useMediaContext();
}
function MediaWrapperElement({ children: e, className: t, ...r }) {
    const { mediaClass: s, upscale: n } = useMedia();
    return jsxRuntimeExports.jsx('div', {
        className: cx(t, 'media-wrapper', s, n && 'media-upscale'),
        ...r,
        children: e,
    });
}
function MediaWrapper({ children: e, ...t }) {
    return jsxRuntimeExports.jsx(MediaProvider, {
        children: jsxRuntimeExports.jsx(MediaWrapperElement, { ...t, children: e }),
    });
}
function accumulate(e, t, r) {
    return r ? e.breaks.reduce((e, t) => (r[t] ? { ...e, ...r[t] } : e), t) : t;
}
function useAdaptive(e, t) {
    return accumulate(useMedia(), e, t);
}
function useUpscale(e, t) {
    return useMedia().upscale ? t : e;
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
            const r = onResize$1(e),
                s = onRescale(e);
            return () => {
                (r(), s());
            };
        }, []),
        e
    );
}
function throttle$1(e, t, r, s) {
    let n,
        a = !1,
        o = 0;
    function u() {
        n && clearTimeout(n);
    }
    function i(...i) {
        const l = this,
            c = Date.now() - o;
        function d() {
            ((o = Date.now()), r.apply(l, i));
        }
        a ||
            (s && !n && d(),
            u(),
            void 0 === s && c > e
                ? d()
                : !0 !== t &&
                  (n = setTimeout(
                      s
                          ? function () {
                                n = void 0;
                            }
                          : d,
                      void 0 === s ? e - c : e,
                  )));
    }
    return (
        'boolean' != typeof t && ((s = r), (r = t), (t = void 0)),
        (i.cancel = function () {
            (u(), (a = !0));
        }),
        i
    );
}
function useEmitter$1() {
    return reactExports.useMemo(() => {
        const e = {},
            t = (t) => (e[t] || (e[t] = new Set()), e[t]),
            r = (e, r) => {
                t(e).delete(r);
            };
        return {
            on: (e, s) => (t(e).add(s), () => r(e, s)),
            off: r,
            trigger: (e, ...r) => {
                for (const s of t(e).values()) s(...r);
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
function useUnmount(e) {
    reactExports.useEffect(() => e, []);
}
function useIsFirstRender() {
    const e = reactExports.useRef(!0);
    return (
        useMount$1(() => {
            e.current = !1;
        }),
        e.current
    );
}
const createApi = () => {
        const e = new Map();
        function t(t) {
            const r = e.get(t);
            if (r) return r;
            const s = new Stack();
            return (e.set(t, s), s);
        }
        function r(t, r) {
            const s = e.get(t);
            return !!s && s.remove(r);
        }
        return {
            handlers: e,
            obtain: t,
            register: function (e, s) {
                if (e === keyStringCodes.NONE) return constFalse;
                const n = t(e);
                return (n.includes(s) || n.push(s), () => r(e, s));
            },
            unregister: r,
            takeCurrent: function (t) {
                const r = e.get(t);
                if (!r) return;
                const s = r.peek();
                return s || void 0;
            },
        };
    },
    Context$4 = reactExports.createContext(void 0);
function useApi$2() {
    const e = reactExports.useContext(Context$4);
    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
    return e;
}
function useHandleKey(e, t, r, s = !1) {
    const n = normalizeKeyCode(e),
        a = useEvent$1((e) => {
            isEventHandled$1() || (r(e), setEventHandled$1(), s && e.stopPropagation());
        }),
        o = useApi$2(),
        u = reactExports.useMemo(() => o[t].register(n, a), [o, t, n, a]);
    reactExports.useEffect(() => u, [u]);
}
function useHandleKeydown(e, t, r = !1) {
    return useHandleKey(normalizeKeyCode(e), 'keydown', t, r);
}
function Provider(e) {
    const t = reactExports.useMemo(createApi, []),
        r = reactExports.useMemo(createApi, []);
    reactExports.useEffect(() => {
        function e(e) {
            var r;
            null == (r = t.takeCurrent(e.code)) || r(e);
        }
        function s(e) {
            var t;
            null == (t = r.takeCurrent(e.code)) || t(e);
        }
        return (
            window.addEventListener('keydown', e),
            window.addEventListener('keyup', s),
            () => {
                (window.removeEventListener('keydown', e), window.removeEventListener('keyup', s));
            }
        );
    }, [t, r]);
    const s = reactExports.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: r.register, unregister: r.unregister },
        }),
        [t, r],
    );
    return jsxRuntimeExports.jsx(Context$4.Provider, { value: s, children: e.children });
}
const defaultCallback = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function useKeydownListener(e = keyStringCodes.ESCAPE, t = defaultCallback, r = !1) {
    const s = normalizeKeyCode(e);
    reactExports.useEffect(() => {
        if (s !== keyStringCodes.NONE)
            return (window.addEventListener('keydown', e, r), () => window.removeEventListener('keydown', e, r));
        function e(e) {
            e.code !== s || isEventHandled$1() || (t(e), setEventHandled$1(), r && e.stopPropagation());
        }
    }, [t, s, r]);
}
function useCloseOnKeyPress(e = keyStringCodes.ESCAPE) {
    return useHandleKeydown(normalizeKeyCode(e), sendEvent$1.closeView, !0);
}
function useCallbackOnEsc(e) {
    return useHandleKeydown(keyStringCodes.ESCAPE, e);
}
function useCloseOnEsc() {
    return useCloseOnKeyPress(keyStringCodes.ESCAPE);
}
const useLayoutReady = (e, t) => {
        reactExports.useEffect(() => {
            let t,
                r = null;
            return (
                (r = requestAnimationFrame(() => {
                    r = requestAnimationFrame(() => {
                        ((r = null), (t = e()));
                    });
                })),
                () => {
                    ('function' == typeof t && t(), null !== r && cancelAnimationFrame(r));
                }
            );
        }, t);
    },
    useLoop = (e) => {
        const t = reactExports.useRef(0);
        reactExports.useEffect(() => () => cancelAnimationFrame(t.current), []);
        return [
            () => {
                const r = () => {
                    e() && (t.current = requestAnimationFrame(r));
                };
                r();
            },
            () => cancelAnimationFrame(t.current),
        ];
    };
function useRepeatCallback$1(e, t, r = []) {
    const s = reactExports.useRef(0),
        n = reactExports.useCallback(() => {
            (window.clearInterval(s.current), (s.current = 0));
        }, r || []);
    reactExports.useEffect(() => n, [n]);
    const a = (r ?? []).concat([t]);
    return [
        reactExports.useCallback((r) => {
            (0 !== s.current && n(), (s.current = window.setInterval(() => e(r, !0), t)), e(r, !1));
        }, a),
        n,
    ];
}
function useResize(e, t) {
    reactExports.useEffect(
        () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
        t,
    );
}
function useResizeLayoutReady(e, t) {
    reactExports.useEffect(() => {
        let t = () => {};
        const r = () => {
            (t(), (t = createLayoutReadyInEffect$1(e)));
        };
        return (
            window.addEventListener('resize', r),
            () => {
                (t(), window.removeEventListener('resize', r));
            }
        );
    }, t);
}
const useRefResizeObserver = (e, t, r = !0) => {
        const s = useEvent$1((e) => {
            const r = e[0];
            r && t(r);
        });
        reactExports.useEffect(() => {
            if (!e.current || !r) return;
            const t = new ResizeObserver((e) => s(e));
            return (
                t.observe(e.current),
                () => {
                    t.disconnect();
                }
            );
        }, [s, r, e]);
    },
    useScaleState = () => {
        const [e, t] = reactExports.useState(getScale$2());
        return (
            reactExports.useEffect(() => {
                const e = () => {
                    t(getScale$2());
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
function useThrottle$1(e, t, r) {
    const s = reactExports.useMemo(() => throttle$1(r, e), t);
    return (reactExports.useEffect(() => s.cancel, [s]), s);
}
const NO_TIMEOUT_ID = 0;
function useTimeout() {
    const e = reactExports.useRef(NO_TIMEOUT_ID);
    return (
        useUnmount(() => {
            window.clearTimeout(e.current);
        }),
        reactExports.useMemo(
            () => ({
                run: (t, r) => {
                    (window.clearTimeout(e.current),
                        (e.current = window.setTimeout(() => {
                            ((e.current = NO_TIMEOUT_ID), t());
                        }, r)));
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
function useThrottleCall(e, t = !1) {
    const r = reactExports.useRef(0),
        s = reactExports.useRef(0),
        n = reactExports.useRef(noop$1);
    return (
        reactExports.useEffect(
            () => () => {
                window.clearTimeout(r.current);
            },
            [],
        ),
        reactExports.useMemo(() => {
            if (e <= 0) return { call: (e) => e(), cancel: noop$1 };
            return {
                call: function (a) {
                    n.current = a;
                    const o = Date.now();
                    o - s.current < e ||
                        (t && (n.current(), (n.current = noop$1)),
                        (s.current = o),
                        (r.current = window.setTimeout(() => {
                            (n.current(), (r.current = 0));
                        }, e)));
                },
                cancel: function () {
                    (window.clearTimeout(r.current), (r.current = 0));
                },
            };
        }, [e, t])
    );
}
const justCall = (e) => e(),
    useOptionalTransition = (e) => {
        const t = reactExports.useTransition();
        return e ? t : [!1, justCall];
    };
function useTicker(e) {
    const { type: t, tick: r, limit: s } = e,
        n = e.autostart ?? !1,
        a = e.start ?? zero,
        [o, u] = reactExports.useState({ current: a, running: n }),
        i = reactExports.useRef(0);
    reactExports.useEffect(
        () => (
            (i.current = window.setInterval(() => {
                o.running
                    ? u((e) => {
                          const n = 'countdown' === t ? subtract(e.current, r) : add(e.current, r),
                              a = { ...e, current: n };
                          return (
                              isDuration(s) &&
                                  ('countdown' === t
                                      ? lt(subtract(n, r), s) && ((a.current = s), (a.running = !1))
                                      : gt(add(n, r), s) && ((a.current = s), (a.running = !1))),
                              a
                          );
                      })
                    : window.clearInterval(i.current);
            }, toMillis(r))),
            () => {
                window.clearInterval(i.current);
            }
        ),
        [s, r, o.running, t],
    );
    const l = reactExports.useMemo(
        () => ({
            start: () => u((e) => ({ ...e, isRunning: !0 })),
            stop: () => u((e) => ({ ...e, isRunning: !1 })),
            isRunning: () => o.running,
        }),
        [o.running],
    );
    return [o.current, l];
}
const parameters = ['top', 'left', 'width', 'height', 'bottom', 'right', 'x', 'y'];
function isEqual(e, t) {
    return parameters.every((r) => e[r] === t[r]);
}
const initialSize = { top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 };
function watchResizes(e, t) {
    let r = 0;
    const s = e.map(() => initialSize);
    function n() {
        let a = !1;
        for (let t = 0; t < e.length; t++) {
            const r = e[t],
                n = s[t],
                o = r.getBoundingClientRect();
            isEqual(o, n) || ((s[t] = o), (a = !0));
        }
        (a && t(s), (r = requestAnimationFrame(n)));
    }
    return {
        start() {
            n();
        },
        stop() {
            cancelAnimationFrame(r);
        },
    };
}
const displayedTooltips = new WeakMap(),
    DEFAULT_RES_ID = 0,
    statuses = { await: 'await', idle: 'idle', display: 'display' };
function useTooltip({
    resId: e = DEFAULT_RES_ID,
    contentId: t,
    decoratorId: r,
    disabled: s,
    args: n,
    showDelay: a = 400,
}) {
    const o = reactExports.useRef({ status: statuses.idle, resId: e, timeoutId: 0 }),
        [u, i] = reactExports.useMemo(() => {
            let u = null;
            function i() {
                s ||
                    ((o.current.status = statuses.await),
                    window.clearTimeout(o.current.timeoutId),
                    (o.current.timeoutId = window.setTimeout(l, a)));
            }
            function l() {
                ((o.current.status = statuses.display),
                    sendEvent$1.tooltip.open(e, t, r, n),
                    u && displayedTooltips.set(u, d));
            }
            function c() {
                if (
                    (window.clearTimeout(o.current.timeoutId),
                    o.current.status === statuses.display && sendEvent$1.tooltip.hide(e, t, r),
                    (o.current.status = statuses.idle),
                    u)
                ) {
                    displayedTooltips.delete(u);
                    let e = u.parentElement;
                    for (; e && !displayedTooltips.has(e); ) e = e.parentElement;
                    if (e) {
                        displayedTooltips.get(e).show();
                    }
                    u = null;
                }
            }
            const d = {
                hide: c,
                show: l,
                rerun: function () {
                    o.current.status !== statuses.idle && (s ? d.hide() : i());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((u = null == e ? void 0 : e.currentTarget), i());
                    },
                    onMouseLeave: s ? noop$1 : c,
                    onClick: s ? noop$1 : c,
                },
            ];
        }, [n, t, r, s, e, a]);
    return (
        reactExports.useEffect(() => {
            u.rerun();
        }, [u]),
        useUnmount(useEvent$1(u.hide)),
        i
    );
}
function useSimpleTooltip({ alert: e, body: t, header: r, note: s, hasHtmlContent: n, disabled: a }) {
    const o = resources.resolve('views');
    return useTooltip({
        disabled: a,
        contentId: o.read((e) =>
            n
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: o.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: reactExports.useMemo(() => ({ body: t, header: r, note: s, alert: e }), [e, t, r, s]),
    });
}
const NO_ARGS = [];
function useSpecialTooltip(e, t = NO_ARGS, r) {
    return useTooltip({
        ...r,
        disabled: null == r ? void 0 : r.disabled,
        contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
        args: reactExports.useMemo(
            () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == r ? void 0 : r.args) }),
            [t, e, null == r ? void 0 : r.args],
        ),
    });
}
function useParamTooltip(e, t, r) {
    return useTooltip({
        ...r,
        disabled: null == r ? void 0 : r.disabled,
        contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
        args: reactExports.useMemo(() => ({ type: e, params: JSON.stringify(t), resId: t.resId }), [t, e]),
    });
}
const ROMAN_FORBIDDEN_LANGUAGE_CODES$1 = ['ko', 'no'];
function useRomanForbidden() {
    const e = resources.resolve('strings');
    return ROMAN_FORBIDDEN_LANGUAGE_CODES$1.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
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
const Context$3 = reactExports.createContext(null);
function SoundsProvider({ severity: e = 'warn', overrides: t, silent: r = !1, children: s }) {
    const n = reactExports.useMemo(() => ({ ...soundConfig, ...t }), [t]),
        a = reactExports.useMemo(
            () => ({
                play: function (t, s) {
                    if (r) return;
                    const a = n[t];
                    a ? a(s) : logBySeverity(`There is no sound for event: ${t}`, e);
                },
                settings: { plays: n, severity: e, silent: r },
            }),
            [n, e, r],
        );
    return jsxRuntimeExports.jsx(Context$3.Provider, { value: a, children: s });
}
function useSounds() {
    const e = reactExports.useContext(Context$3);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
const RIGHT_KEY_CODE = 2;
function isRightClick(e) {
    return e.button === RIGHT_KEY_CODE;
}
function useContextMenu({ resId: e = 0, contentId: t, decoratorId: r, args: s, disabled: n, soundTarget: a }) {
    const o = useSounds(),
        [{ hide: u }, i] = reactExports.useMemo(() => {
            function u() {
                n || sendEvent$1.contextMenu.open(e, t, r, s);
            }
            return [
                {
                    hide: function () {
                        sendEvent$1.contextMenu.hide(e, t, r);
                    },
                    show: u,
                },
                {
                    onMouseDown: (e) => {
                        isRightClick(e) &&
                            (o.play('show-context-menu', {
                                target: a ?? 'react-toolkit:use_context_menu',
                                original: e,
                            }),
                            u());
                    },
                },
            ];
        }, [s, t, r, e, n, o, a]);
    return (reactExports.useEffect(() => u, [u]), i);
}
function useSpecialContextMenu(e, t, r) {
    return useContextMenu(
        reactExports.useMemo(
            () => ({
                ...r,
                contentId: resources.resolve('aliases').read((e) => e.common.contextMenu.Backport('resId')),
                disabled: null == r ? void 0 : r.disabled,
                args: { menuId: e, menuArgs: JSON.stringify(t), ...(null == r ? void 0 : r.args) },
            }),
            [t, e, r],
        ),
    );
}
const MS_IN_SECOND = 1e3,
    useCountdown = (e = 0, t, r = 0, s = noop$1) => {
        const [n, a] = reactExports.useState(e);
        return (
            reactExports.useEffect(() => {
                if (e > 0) {
                    a(e);
                    const n = Date.now(),
                        o = setInterval(() => {
                            const t = e - Math.floor((Date.now() - n) / MS_IN_SECOND);
                            null !== r && t <= r ? (a(r), s && s(), clearInterval(o)) : a(t);
                        }, t * MS_IN_SECOND);
                    return () => {
                        clearInterval(o);
                    };
                }
            }, [e, t, r, s]),
            n
        );
    };
function useExternalPaddings(e = 'px') {
    const [t, r] = reactExports.useState(viewEnv.getExternalPaddingsRem()),
        s = useEvent$1(() => r(viewEnv.getExternalPaddingsRem())),
        n = useScaleState();
    return (
        reactExports.useEffect(() => events$2.onExternalPaddingsUpdated(s), [s]),
        reactExports.useMemo(
            () => ({
                left: 'px' === e ? remToPx$1(t.left) : t.left,
                right: 'px' === e ? remToPx$1(t.right) : t.right,
                top: 'px' === e ? remToPx$1(t.top) : t.top,
                bottom: 'px' === e ? remToPx$1(t.bottom) : t.bottom,
            }),
            [e, n, t.left, t.right, t.top, t.bottom],
        )
    );
}
const nonConvertingTypes = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    primitives$1 = new Set(['number', 'string', 'boolean', 'bigint']),
    bindingsForbidden = new Set(['Dict']);
function cloneModel(e, { shallow: t = !0, depth: r = 0, maxDepth: s = 32 } = {}) {
    var n, a;
    const o = e,
        u = typeof e;
    if (r > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
    if (nonConvertingTypes.has(u)) return o;
    if (null === o) return o;
    const i = { depth: r + 1, maxDepth: s };
    if (Array.isArray(o)) return o.map((e) => cloneModel(e, i));
    if ('object' === u) {
        const s = (null == (n = o.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, i));
        if ('CoherentArrayProxy' === s) return e.map((e) => cloneModel(e.value, i));
        if ('Dict' === s) return;
        if ('UNKNOWN' === s) return;
        if (s.includes(':ViewModel:') || 'Object' === s) {
            if (t && 0 === r) {
                const e = {};
                for (const t in o) {
                    const r = o[t];
                    primitives$1.has(typeof r) && (e[t] = r);
                }
                return e;
            }
            {
                const e = {};
                for (const t in o) {
                    const r = o[t],
                        s = (null == (a = null == o ? void 0 : o.constructor) ? void 0 : a.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(s) || (e[t] = cloneModel(r, i));
                }
                return e;
            }
        }
        const u = {};
        for (const e of Object.keys(o)) u[e] = cloneModel(o[e], i);
        return u;
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
        const r = {},
            s = e.keys();
        for (let n = 0; n < s.length; n++) {
            const t = s[n];
            r[t] = observable.box(this.takeItem(e, t), MOBX_OPTIONS);
        }
        ((this._keys = observable.set(new Set(s))), (this._data = observable.box(r, MOBX_OPTIONS)));
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
        const r = this._data.get();
        for (let s = 0; s < t.length; s++) {
            const n = t[s],
                a = this.takeItem(e, n);
            n in r
                ? null === a
                    ? (delete r[n], this._keys.delete(n), this.set(r))
                    : r[n].set(a)
                : null !== a && ((r[n] = observable.box(a, MOBX_OPTIONS)), this._keys.add(n), this.set(r));
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
        for (const r of this.keys.values()) t.push(e(r));
        return t;
    }
    map(e) {
        const t = [],
            r = this._data.get();
        for (const s of this.keys.values()) t.push(e(r[s].get(), s));
        return t;
    }
    reduce(e, t) {
        let r = t;
        const s = this._data.get();
        for (const n of this.keys.values()) r = e(r, s[n].get(), n);
        return r;
    }
    takeItem(e, t) {
        const r = e.get(t);
        return this.options.cloneItem ? cloneModel(r, CLONE_OPTIONS) : r;
    }
    untrackedData() {
        return untracked(() => this._data.get());
    }
}
const mockContext = reactExports.createContext({ mode: 'real' }),
    useMockContext = () => reactExports.useContext(mockContext),
    DEFAULT_BOX_CONFIG = { equals: constFalse, deep: !1 };
function createObservableModel(e, t, r) {
    const s = [];
    e.events.subscribersNotified.on(
        action(() => {
            for (const e of s) e();
            s.splice(0, s.length);
        }),
    );
    const n = (n, a, o = DEFAULT_BOX_CONFIG) => {
            const u = observable.box(n(r(a)), o);
            return ('real' === t && e.subscribe((e) => s.push(() => u.set(n(e))), a), u);
        },
        a = (n, a) => {
            const o = new DLDict(r(n), a);
            return ('real' === t && e.subscribe((e, t) => s.push(() => o.update(e, t)), n), o);
        },
        o = (n, a) => {
            const o = observable.box(r(n) ?? a, DEFAULT_BOX_CONFIG);
            return ('real' === t && e.subscribe((e) => s.push(() => o.set(e)), n), o);
        };
    return {
        dict: a,
        dictRef: (e, t) => a(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => n(cloneModel, e),
        array: o,
        object: o,
        transform: n,
        primitives: (n, a) => {
            const o = r(a);
            if (Array.isArray(n)) {
                const r = n.reduce((e, t) => ((e[t] = observable.box(o[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            s.push(() =>
                                n.forEach((t) => {
                                    r[t].set(e[t]);
                                }),
                            );
                        }, a),
                    r
                );
            }
            {
                const r = n,
                    u = Object.entries(r),
                    i = u.reduce((e, [t, r]) => ((e[r] = observable.box(o[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            s.push(() =>
                                u.forEach(([t, r]) => {
                                    i[r].set(e[t]);
                                }),
                            );
                        }, a),
                    i
                );
            }
        },
    };
}
const initializeModelWithContext =
        (e = 'DataLayerProvider') =>
        (t, r, s) => {
            const n = reactExports.createContext(null);
            function a(a) {
                var o;
                const { mode: u, options: i, children: l, mocks: c } = a,
                    d = useMockContext(),
                    _ = u ?? d.mode,
                    p = c ?? d.mocks,
                    m = reactExports.useRef([]),
                    E = null == (o = null == s ? void 0 : s.useRequires) ? void 0 : o.call(s),
                    f = useEvent$1((n, o, u) => {
                        var i;
                        const l = 'real' !== n && u ? createMockInstance(u.getter, o) : create(o, { name: e }),
                            c = (e) => ('mocks' === n ? (null == u ? void 0 : u.getter(e, o)) : l.readByPath(e)),
                            d = (e) => m.current.push(e),
                            _ = 'initial' in a && {
                                initial: null == (i = null == s ? void 0 : s.initial) ? void 0 : i.call(s, a.initial),
                            },
                            p = t({
                                ..._,
                                mode: n,
                                readByPath: c,
                                requires: E,
                                externalModel: l,
                                observableModel: createObservableModel(l, n, c),
                                cleanup: d,
                            }),
                            f = { ..._, mode: n, model: p, externalModel: l, cleanup: d, requires: E },
                            b = 'mocks' === n && (null == u ? void 0 : u.controls) ? u.controls(f) : {};
                        return {
                            model: p,
                            controls: { ...(null == r ? void 0 : r(f)), ...b },
                            externalModel: l,
                            mode: n,
                            rootId: (null == o ? void 0 : o.rootId) ?? 0,
                        };
                    }),
                    b = reactExports.useRef(!1),
                    [x, g] = reactExports.useState(_);
                reactExports.useEffect(() => {
                    g(_);
                }, [_]);
                const [h, y] = reactExports.useState(() => f(x, i, p));
                return (
                    reactExports.useEffect(() => {
                        b.current ? y(f(x, i, p)) : (b.current = !0);
                    }, [
                        f,
                        p,
                        x,
                        null == i ? void 0 : i.context,
                        null == i ? void 0 : i.initializer,
                        null == i ? void 0 : i.getRoot,
                        null == i ? void 0 : i.rootId,
                    ]),
                    reactExports.useEffect(
                        () => () => {
                            (h.externalModel.dispose(), m.current.forEach((e) => e()));
                        },
                        [h],
                    ),
                    jsxRuntimeExports.jsx(n.Provider, { value: h, children: l })
                );
            }
            return (
                (a.displayName = e),
                [
                    a,
                    function () {
                        const e = reactExports.useContext(n);
                        if (!e) throw new Error(`hook useModel must be used within a ${a.displayName}.`);
                        return e;
                    },
                    { Context: n },
                ]
            );
        },
    computeds = {
        model: (e, t) => computedFn(e, { equals: constFalse, ...t }),
        primitive: computedFn,
        shallow: (e, t) => computedFn(e, { equals: comparer$1.shallow, ...t }),
        structural: (e, t) => computedFn(e, { equals: comparer$1.structural, ...t }),
    },
    assignRef = (e, t) => {
        e && ('function' == typeof e ? e(t) : (e.current = t));
    },
    assignRefs = (e) => (t) => {
        e.forEach((e) => assignRef(e, t));
    };
reactExports.forwardRef(function (e, t) {
    const r = reactExports.useRef(null);
    return (
        reactExports.useEffect(() => {
            const e = r.current;
            if (null !== e)
                return events$2.onHitTest((t) => {
                    const r = e.getBoundingClientRect();
                    return r.left <= t.x && t.x <= r.right && r.top <= t.y && t.y <= r.bottom;
                });
        }, []),
        jsxRuntimeExports.jsx('div', { ...e, ref: assignRefs([t, r]) })
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
            children: this.items.reduceRight((e, [t, r], s) => reactExports.createElement(t, { ...r, key: s }, e), e),
        });
    }
}
function injectShowModel() {
    const e = (t = window.model, { depth: r = 16, convertArrays: s = !0 } = {}) => {
        var n;
        if (r < 0)
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
                const a = { depth: r - 1, convertArrays: s },
                    o = (null == (n = t.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
                switch (!0) {
                    case o.includes('CoherentArrayProxy'):
                        return [...t.values()].map((t) => e(a.convertArrays ? t.value : t, a));
                    case 'Dict' === o:
                        return [...t.entries()].reduce((t, [r, s]) => ((t[r] = e(s, a)), t), { $$type: 'Dict' });
                    case 'UNKNOWN' === o:
                        return 'UNKNOWN_TYPE';
                    case o.includes('ViewModel'):
                    default: {
                        const r = {};
                        for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = e(t[s], a));
                        return r;
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
            for (const r of window.subViews.ids()) {
                const s = window.subViews.get(r);
                t[r] = {
                    id: r,
                    uid: s.uid,
                    path: s.path,
                    get model() {
                        return e(s.model);
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
    { root: t = document.getElementById('root'), withMedia: r = !0, fullScreen: s = !1, immediateLayout: n = !0 } = {},
) {
    var a;
    injectShowModel();
    const o = r ? MediaWrapper : React.Fragment,
        u = (null == (a = null == window ? void 0 : window.engine) ? void 0 : a.whenReady) ?? Promise.resolve();
    (n && engine.enableImmediateLayout(!0),
        await u,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client$1
            .createRoot(t)
            .render(jsxRuntimeExports.jsx(o, { children: jsxRuntimeExports.jsx(Provider, { children: e }) })),
        s && (initExternalPaddings$1(t), enableFullScreenModeSupported$1()));
}
var Alignment = ((e) => ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e))(Alignment || {});
function format(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
const convertNbsp = (e) => e.replace(/&nbsp;/g, ' '),
    addSeparatorToRight = (e, t, r) => {
        if (r % 2) {
            const r = e.pop();
            return [...e, r + t];
        }
        return [...e, t];
    },
    addSeparatorToLeft = (e, t, r) => {
        if (0 === r) return [t];
        if (r % 2) return [...e, ' ' === t ? ' ' : t];
        {
            const r = e.pop();
            return [...e, r + t];
        }
    },
    splitAndFormat = (e, t, r = 0) => e.split(t).reduce(0 === r ? addSeparatorToRight : addSeparatorToLeft, []),
    splitEuropean = (e, t = 0) => {
        let r = [];
        const s = new RegExp(
                '(?<=[a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10D0-\\u10FA\\u10FD-\\u10FF\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7F6\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB68\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u{10428}-\\u{1044F}\\u{104D8}-\\u{104FB}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{10CC0}-\\u{10CF2}\\u{118C0}-\\u{118DF}\\u{16E60}-\\u{16E7F}\\u{1D41A}-\\u{1D433}\\u{1D44E}-\\u{1D454}\\u{1D456}-\\u{1D467}\\u{1D482}-\\u{1D49B}\\u{1D4B6}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D4CF}\\u{1D4EA}-\\u{1D503}\\u{1D51E}-\\u{1D537}\\u{1D552}-\\u{1D56B}\\u{1D586}-\\u{1D59F}\\u{1D5BA}-\\u{1D5D3}\\u{1D5EE}-\\u{1D607}\\u{1D622}-\\u{1D63B}\\u{1D656}-\\u{1D66F}\\u{1D68A}-\\u{1D6A5}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6E1}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D71B}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D755}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D78F}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7C9}\\u{1D7CB}\\u{1DF00}-\\u{1DF09}\\u{1DF0B}-\\u{1DF1E}\\u{1E922}-\\u{1E943}])(\\x2D)(?=[a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10D0-\\u10FA\\u10FD-\\u10FF\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7F6\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB68\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u{10428}-\\u{1044F}\\u{104D8}-\\u{104FB}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{10CC0}-\\u{10CF2}\\u{118C0}-\\u{118DF}\\u{16E60}-\\u{16E7F}\\u{1D41A}-\\u{1D433}\\u{1D44E}-\\u{1D454}\\u{1D456}-\\u{1D467}\\u{1D482}-\\u{1D49B}\\u{1D4B6}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D4CF}\\u{1D4EA}-\\u{1D503}\\u{1D51E}-\\u{1D537}\\u{1D552}-\\u{1D56B}\\u{1D586}-\\u{1D59F}\\u{1D5BA}-\\u{1D5D3}\\u{1D5EE}-\\u{1D607}\\u{1D622}-\\u{1D63B}\\u{1D656}-\\u{1D66F}\\u{1D68A}-\\u{1D6A5}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6E1}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D71B}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D755}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D78F}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7C9}\\u{1D7CB}\\u{1DF00}-\\u{1DF09}\\u{1DF0B}-\\u{1DF1E}\\u{1E922}-\\u{1E943}])',
                'gu',
            ),
            n = convertNbsp(e);
        return (splitAndFormat(n, /( )/, t).forEach((e) => (r = r.concat(splitAndFormat(e, s, 0)))), r);
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
        const r = R.strings.settings.LANGUAGE_CODE().toLowerCase();
        if (CHINESE_LANGUAGE_CODES.includes(r)) return splitChinese(e);
        if ('ja' === r) {
            return loadDefaultJapaneseParser()
                .parse(e)
                .map((e) => convertNbsp(e));
        }
        return splitEuropean(e, t);
    },
    formatString = (e, t, r) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (r && e in r ? r[e] : splitWords(e, t))),
    base$M = 'Formattext_bb80854d',
    styles$T = { base: base$M },
    FormatText$1 = ({
        binding: e,
        text: t = '',
        classMix: r,
        alignment: s = Alignment.left,
        formatWithBrackets: n,
    }) => {
        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
        const a = n && e ? format(t, e) : t;
        return jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: a
                .split('\n')
                .map((t, n) =>
                    jsxRuntimeExports.jsx(
                        'div',
                        {
                            className: cx(styles$T.base, r),
                            children: formatString(t, s, e).map((e, t) =>
                                jsxRuntimeExports.jsx(reactExports.Fragment, { children: e }, `${t}-${e}`),
                            ),
                        },
                        `${t}-${n}`,
                    ),
                ),
        });
    };
var MOUSE_BUTTON_CODES = ((e) => (
    (e[(e.LEFT = 0)] = 'LEFT'),
    (e[(e.WHEEL = 1)] = 'WHEEL'),
    (e[(e.RIGHT = 2)] = 'RIGHT'),
    (e[(e.FOURTH = 3)] = 'FOURTH'),
    (e[(e.FIFTH = 4)] = 'FIFTH'),
    e
))(MOUSE_BUTTON_CODES || {});
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
const root$o = 'Cbutton_root_180a9717',
    base$L = 'Cbutton_24fc9a0c',
    base__main = 'Cbutton_base__main_2f199578',
    base__primary = 'Cbutton_base__primary_9da8a692',
    base__primaryGreen = 'Cbutton_base__primaryGreen_74301f4e',
    base__primaryRed = 'Cbutton_base__primaryRed_d184ac',
    base__secondary = 'Cbutton_base__secondary_22ff48c2',
    base__ghost = 'Cbutton_base__ghost_fd3acf91',
    base__extraSmall$1 = 'Cbutton_base__extraSmall_f64ebb9e',
    base__small$9 = 'Cbutton_base__small_a71bc2a9',
    base__medium$3 = 'Cbutton_base__medium_d82a1b14',
    base__large$1 = 'Cbutton_base__large_f02aee17',
    base__disabled$4 = 'Cbutton_base__disabled_96f239bb',
    back = 'Cbutton_back_ffaa618f',
    texture = 'Cbutton_texture_f462b307',
    state = 'Cbutton_state_bf8d0bab',
    base__focus = 'Cbutton_base__focus_180a9717',
    stateHighlightHover = 'Cbutton_stateHighlightHover_7e2b860e',
    stateHighlightActive = 'Cbutton_stateHighlightActive_f3d8fd6a',
    stateDisabled = 'Cbutton_stateDisabled_7b91392f',
    base__highlightActive = 'Cbutton_base__highlightActive_180a9717',
    content$7 = 'Cbutton_content_faaa9067',
    fadeInWithScale$o = 'Cbutton_fadeInWithScale_180a9717',
    slideUp$o = 'Cbutton_slideUp_180a9717',
    blink$o = 'Cbutton_blink_180a9717',
    scale$o = 'Cbutton_scale_180a9717',
    rotate$o = 'Cbutton_rotate_180a9717',
    windowIn$o = 'Cbutton_windowIn_180a9717',
    fadeOut$o = 'Cbutton_fadeOut_180a9717',
    fadeIn$o = 'Cbutton_fadeIn_180a9717',
    styles$S = {
        root: root$o,
        base: base$L,
        base__main: base__main,
        base__primary: base__primary,
        base__primaryGreen: base__primaryGreen,
        base__primaryRed: base__primaryRed,
        base__secondary: base__secondary,
        base__ghost: base__ghost,
        base__extraSmall: base__extraSmall$1,
        base__small: base__small$9,
        base__medium: base__medium$3,
        base__large: base__large$1,
        base__disabled: base__disabled$4,
        back: back,
        texture: texture,
        state: state,
        base__focus: base__focus,
        stateHighlightHover: stateHighlightHover,
        stateHighlightActive: stateHighlightActive,
        stateDisabled: stateDisabled,
        base__highlightActive: base__highlightActive,
        content: content$7,
        fadeInWithScale: fadeInWithScale$o,
        slideUp: slideUp$o,
        blink: blink$o,
        scale: scale$o,
        rotate: rotate$o,
        windowIn: windowIn$o,
        fadeOut: fadeOut$o,
        fadeIn: fadeIn$o,
    },
    Button$1 = ({
        children: e,
        size: t,
        disabled: r,
        mixClass: s,
        onMouseEnter: n,
        onMouseMove: a,
        onMouseDown: o,
        onMouseUp: u,
        onMouseLeave: i,
        onClick: l,
        isFocused: c = !1,
        type: d = ButtonType.primary,
        soundHover: _ = 'highlight',
        soundClick: p = 'play',
    }) => {
        const m = reactExports.useRef(null),
            [E, f] = reactExports.useState(c),
            [b, x] = reactExports.useState(!1);
        return (
            reactExports.useEffect(() => {
                function e(e) {
                    E && null !== m.current && !m.current.contains(e.target) && f(!1);
                }
                return (
                    document.addEventListener('mousedown', e),
                    () => {
                        document.removeEventListener('mousedown', e);
                    }
                );
            }, [E]),
            reactExports.useEffect(() => {
                f(c);
            }, [c]),
            jsxRuntimeExports.jsxs('div', {
                ref: m,
                className: cx(
                    styles$S.base,
                    styles$S[`base__${d}`],
                    r && styles$S.base__disabled,
                    t && styles$S[`base__${t}`],
                    E && styles$S.base__focus,
                    b && styles$S.base__highlightActive,
                    s,
                ),
                onMouseEnter: function (e) {
                    r || (null !== _ && playSound$1(_), n && n(e));
                },
                onMouseMove: function (e) {
                    a && a(e);
                },
                onMouseUp: function (e) {
                    r || (u && u(e), x(!1));
                },
                onMouseDown: function (e) {
                    if (r) return;
                    const t = e.button === MOUSE_BUTTON_CODES.LEFT;
                    (null !== p && t && playSound$1(p),
                        o && o(e),
                        c && (r || (m.current && (m.current.focus(), f(!0)))),
                        t && x(!0));
                },
                onMouseLeave: function (e) {
                    r || (i && i(e), x(!1));
                },
                onClick: function (e) {
                    r || (l && l(e));
                },
                children: [
                    d !== ButtonType.ghost &&
                        jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                                jsxRuntimeExports.jsx('div', { className: styles$S.back }),
                                jsxRuntimeExports.jsx('span', { className: styles$S.texture }),
                            ],
                        }),
                    jsxRuntimeExports.jsxs('span', {
                        className: cx(styles$S.state, styles$S.state__default),
                        children: [
                            jsxRuntimeExports.jsx('span', { className: styles$S.stateDisabled }),
                            jsxRuntimeExports.jsx('span', { className: styles$S.stateHighlightHover }),
                            jsxRuntimeExports.jsx('span', { className: styles$S.stateHighlightActive }),
                        ],
                    }),
                    jsxRuntimeExports.jsx('span', {
                        className: styles$S.content,
                        lang: R.strings.settings.LANGUAGE_CODE(),
                        children: e,
                    }),
                ],
            })
        );
    },
    CButton = Button$1,
    NodeTypes = { Text: 1, Tag: 2, Var: 3 };
function parseArguments(e) {
    const t = [];
    let r = '',
        s = !1,
        n = !1,
        a = '';
    for (let o = 0; o < e.length; o++) {
        const u = e[o];
        ("'" !== u && '"' !== u) || n || s
            ? u === a && n
                ? ((n = !1), (r += u))
                : '(' !== u || n
                  ? ')' === u && s && !n
                      ? ((s = !1), (r += u))
                      : ' ' !== u || s || n
                        ? (r += u)
                        : r && (t.push(r), (r = ''))
                  : ((s = !0), (r += u))
            : ((n = !0), (a = u), (r += u));
    }
    return (r && t.push(r), t);
}
function parse(e, t) {
    const r = [],
        s = [];
    let n = '',
        a = !1,
        o = '',
        u = 0;
    for (let i = 0; i < e.length; i++) {
        const l = e[i];
        if (l === t.start[0] && e.slice(i, i + t.start.length) === t.start) {
            if (n) {
                if (s.length > 0) {
                    s[s.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
                } else r.push({ type: NodeTypes.Text, value: n });
                n = '';
            }
            ((a = !0), (i += t.start.length - 1));
        } else if (l === t.end[0] && e.slice(i, i + t.end.length) === t.end) {
            ((a = !1), (i += t.end.length - 1));
            const e = o.trim();
            if (e.startsWith('@')) {
                const t = e.slice(1).trim(),
                    n = { type: NodeTypes.Tag, attrs: t.split('|'), instanceId: ++u, children: [] };
                if (s.length > 0) {
                    s[s.length - 1].node.children.push(n);
                } else r.push(n);
                s.push({ node: n, startIndex: r.length });
            } else if ('/' === e) s.length > 0 && s.pop();
            else {
                const t = { type: NodeTypes.Var, instanceId: ++u, name: e };
                if (s.length > 0) {
                    s[s.length - 1].node.children.push(t);
                } else r.push(t);
            }
            o = '';
        } else a ? (o += l) : (n += l);
    }
    if (n)
        if (s.length) {
            s[s.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
        } else r.push({ type: NodeTypes.Text, value: n });
    return r;
}
const COLORS =
        'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
    base$K = 'FormatText_db904f12',
    base__fullSize = 'FormatText_base__fullSize_a514958e',
    nowrap = 'FormatText_nowrap_ff69eca3',
    styles$R = { COLORS: COLORS, base: base$K, base__fullSize: base__fullSize, nowrap: nowrap },
    legacyColors = new Set((null == (_a = styles$R.COLORS) ? void 0 : _a.split(', ')) ?? []);
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
    for (let r = 0; r < e.length; r++) {
        const s = e[r],
            n = e[r + 1];
        if ('string' != typeof n || !startsWithPunctuationRe.test(n)) {
            t.push(split(s));
            continue;
        }
        const a = splitString(n.slice(1));
        (t.push(
            jsxRuntimeExports.jsxs(
                reactExports.Fragment,
                {
                    children: [
                        jsxRuntimeExports.jsxs('span', { className: styles$R.nowrap, children: [split(s), n[0]] }),
                        a,
                    ],
                },
                takeKey(),
            ),
        ),
            (r += 1));
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
            style: t.reduce((r, s) => {
                if (Array.isArray(s)) {
                    const [e, t] = s;
                    return ((r[e] = t), r);
                }
                return (console.warn(`Invalid argument ${s} in ${e}: ${t}`), r);
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
    const r = takeKey();
    return legacyColors.has(String(t))
        ? jsxRuntimeExports.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, r)
        : jsxRuntimeExports.jsx('span', { style: { color: `#${t}` }, children: e }, r);
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
function applyFunction(e, t, r, s) {
    const n = r.map((t) => {
            if ('string' != typeof t) return t;
            const r = t.trim();
            if (r.startsWith('(') && r.endsWith(')')) {
                const [t, ...n] = r.slice(1, -1).split(' ');
                return t ? applyFunction(e, t, n, s) : e;
            }
            return r.startsWith("'") && r.endsWith("'") ? r.slice(1, -1) : r;
        }),
        a = s[t];
    return a ? a(e, ...n) : (console.error(`Function ${t} is not registered`), e);
}
function applyFunctions(e, t, r) {
    return e.reduce((e, t) => {
        const [s, ...n] = parseArguments(t.trim());
        return s ? applyFunction(e, s, n, r) : e;
    }, t);
}
function isEnd(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function resolveAttrParams(e, t) {
    for (let r = 0; r < e.length; r++) {
        if ('$' === e[r]) {
            let s = r + 1;
            for (; s < e.length && !isEnd(e[s]); ) s++;
            const n = e.slice(r + 1, s),
                a = t[n];
            if (a) return resolveAttrParams(e.replace(`$${n}`, String(a)), t);
        }
    }
    return e;
}
function resolveAttrsParams(e, t) {
    const r = [];
    for (let s = 0; s < e.length; s++) r[s] = resolveAttrParams(e[s], t);
    return r;
}
const primitives = ['number', 'string', 'undefined'];
function render(e, t, r = {}, s = !0) {
    s && (keyId = 0);
    const n = [];
    function a(e) {
        if (primitives.includes(typeof e)) {
            const t = n.at(-1);
            if ('string' == typeof t) return void (n[n.length - 1] = t + e);
        }
        n.push(e);
    }
    for (const o of e)
        if (o.type === NodeTypes.Text) a(o.value);
        else if (o.type === NodeTypes.Var)
            null === r[o.name] || primitives.includes(typeof r[o.name])
                ? a(r[o.name] ?? `{{${o.name}}}`)
                : n.push(
                      jsxRuntimeExports.jsx(
                          reactExports.Fragment,
                          { children: r[o.name] },
                          `var-${o.name}-${o.instanceId}`,
                      ),
                  );
        else if (o.type === NodeTypes.Tag) {
            const e = render(o.children, t, r, !1),
                s = applyFunctions(resolveAttrsParams(o.attrs, r), e, t);
            n.push(s);
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
                text: r,
                params: s,
                upgradeLegacy: n,
                fullSize: a,
                inline: o,
                formatters: u,
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
            _ = reactExports.useMemo(() => parse(i ? `{{@ split}}${c}{{/}}` : c, t), [t, c, i]),
            p = reactExports.useMemo(() => render(_, d, e.params), [_, d, e.params]),
            m = cx(styles$R.base, a && styles$R.base__fullSize, l.className);
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
function FormatString({ path: e, ...t }) {
    return jsxRuntimeExports.jsx(FormatText, { text: resources.resolve('strings').readOrEmpty(e), ...t });
}
function FormatPluralString({ path: e, count: t, ...r }) {
    return jsxRuntimeExports.jsx(FormatText, { text: resources.resolve('strings').pluralOrEmpty(e, t), ...r });
}
const undef = () => {};
function withResolvePath(e) {
    const t = e;
    return reactExports.forwardRef(function (e, r) {
        const s = useAdaptive(e, e.adaptive),
            { path: n, ...a } = s,
            o = s.images ?? resources.resolve('images'),
            u = { ...a, ref: r };
        {
            const e = n ? o.readOr(n, undef, 'warn') : void 0;
            return e ? jsxRuntimeExports.jsx(t, { ...u, src: e }) : jsxRuntimeExports.jsx(t, { ...u, unknown: !0 });
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
    ResourceImage = reactExports.forwardRef(function (e, t) {
        if (!e.src) {
            const {
                repeat: r,
                fit: s,
                position: n,
                width: a,
                src: o,
                height: u,
                unselectable: i,
                unknownStyle: l = defaultUnknownStyle,
                ...c
            } = e;
            return jsxRuntimeExports.jsx('div', {
                ...c,
                ref: t,
                style: { width: e.width, height: e.height, ...l, ...e.style },
            });
        }
        const { repeat: r, fit: s, position: n, width: a, height: o, unknownStyle: u, unselectable: i, ...l } = e;
        return jsxRuntimeExports.jsx('div', {
            ...l,
            ref: t,
            style: {
                backgroundImage: `url(${e.src})`,
                backgroundRepeat: r ?? 'no-repeat',
                backgroundSize: s ?? 'contain',
                backgroundPosition: n ?? 'center center',
                width: 'number' == typeof a ? `${a}rem` : a,
                height: 'number' == typeof o ? `${o}rem` : o,
                ...l.style,
            },
        });
    }),
    Image = withResolvePath(
        reactExports.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: r,
                    fit: s,
                    position: n,
                    width: a,
                    src: o,
                    height: u,
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
                repeat: r,
                fit: s,
                position: n,
                width: a,
                height: o,
                unknownStyle: u,
                unknown: i,
                unselectable: l,
                ...c
            } = e;
            return jsxRuntimeExports.jsx('div', {
                ...c,
                ref: t,
                style: {
                    backgroundImage: `url(${e.src})`,
                    backgroundRepeat: r ?? 'no-repeat',
                    backgroundSize: s ?? 'contain',
                    backgroundPosition: n ?? 'center center',
                    width: 'number' == typeof a ? `${a}rem` : a,
                    height: 'number' == typeof o ? `${o}rem` : o,
                    ...c.style,
                },
            });
        }),
    );
withResolvePath(
    reactExports.forwardRef(function (e, t) {
        const {
            width: r,
            height: s,
            src: n,
            unselectable: a,
            unknown: o,
            unknownStyle: u = defaultUnknownStyle,
            ...i
        } = e;
        return e.unknown
            ? jsxRuntimeExports.jsx('div', { ...i, style: { width: e.width, height: e.height, ...u } })
            : jsxRuntimeExports.jsx('img', { ...i, ref: t, src: n, width: r, height: s });
    }),
);
const getFromCallStack = (e = 1) => {
    var t;
    const r = new Error().stack;
    let s,
        n = R.invalid('resId'),
        a = '';
    return (
        r &&
            ((a = (null == (t = r.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : t[0]) || ''),
            (s = r.split('\n')[e].split('.js')[0].split('/').pop() || ''),
            window.__feature && window.__feature !== s && window.subViews[s] && (n = window.subViews[s].id)),
        { callerUrl: a, caller: s, stack: r, resId: n }
    );
};
let ClickOutsideManager$1 =
    ((_b = class {
        constructor() {
            (__publicField(this, 'entries', []),
                __publicField(this, '_listenMouse', !1),
                __publicField(this, 'onMouseDown', (e) => {
                    this.entries.forEach(({ container: t, callback: r }) => {
                        let s = e.target;
                        do {
                            if (s === t) return;
                            s = s.parentNode;
                        } while (s);
                        r();
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
            const r = e,
                s = t;
            ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== s)),
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
    function r() {
        e.enabled && setTrackMouseOutside(!0);
    }
    function s() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', r))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', r))
            : setTrackMouseOutside(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, r) => (
                (t[r] = (function (t) {
                    return (r) => {
                        e.listeners += 1;
                        let n = !0;
                        const a = `mouse${t}`,
                            o = internalMouse[t]((e) => r([e, 'outside']));
                        function u(e) {
                            r([e, 'inside']);
                        }
                        return (
                            window.addEventListener(a, u),
                            s(),
                            () => {
                                n && (o(), window.removeEventListener(a, u), (e.listeners -= 1), s(), (n = !1));
                            }
                        );
                    };
                })(r)),
                t
            ),
            {},
        ),
        disable() {
            ((e.enabled = !1), s());
        },
        enable() {
            ((e.enabled = !0), s());
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
    engine.call('SetRTPCGlobal', e, t).catch((r) => {
        console.error(`setRTPC('${e}', '${t}'): `, r);
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
    for (let r = ARABIC.length - 1; r >= 0; r--) for (; e >= ARABIC[r]; ) ((t += ROMAN[r]), (e -= ARABIC[r]));
    return t;
}
const ROMAN_FORBIDDEN_LANGUAGE_CODES = ['ko', 'no'];
function getTextureUrl(e, t, r = 1) {
    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
}
function getBgUrl(e, t, r) {
    return `url(${getTextureUrl(e, t, r)})`;
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
            const r = 'GFValueProxy';
            switch (typeof t) {
                case 'number':
                    return { __Type: r, name: e, number: t };
                case 'boolean':
                    return { __Type: r, name: e, bool: t };
                default:
                    return { __Type: r, name: e, string: t.toString() };
            }
        }),
    sendViewEvent = (e, t) => {
        const r = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: s, ...n } = t;
            return void 0 !== s
                ? viewEnv.handleViewEvent({ __Type: r, type: e, ...n, arguments: createViewEventArguments$1(s) })
                : viewEnv.handleViewEvent({ __Type: r, type: e, ...n });
        }
        return viewEnv.handleViewEvent({ __Type: r, type: e });
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
function getBrowserTexturePath(e, t, r, s = 1) {
    return viewEnv.getWebBrowserTexturePath(e, t, r, s);
}
function addModelObserver(e, t, r) {
    return viewEnv.addDataChangedCallback(e, t, r);
}
function setSidePaddingsRem(e) {
    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, ALL_SIDES);
}
function getSize(e = 'px') {
    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
}
function resize(e, t, r = 'px') {
    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
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
        const { top: t, right: r, bottom: s, left: n } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${r}rem`),
            e.style.setProperty('--external-padding-bottom', `${s}rem`),
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
        addCallback(e, t, r = 0, s = !0) {
            void 0 === this._updateHandler &&
                (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
            const n = env.view.addModelObserver(e, r, s);
            return (
                n > 0
                    ? ((this._callbacks[n] = t),
                      r > 0 && (this._views[r] ? this._views[r].push(n) : (this._views[r] = [n])))
                    : console.error("Can't add callback for model:", e),
                n
            );
        }
        removeCallback(e, t = 0) {
            let r = !1;
            return (
                void 0 !== e &&
                    void 0 !== this._callbacks[e] &&
                    ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                r || console.error("Can't remove callback by id:", e),
                r
            );
        }
        _emmitDataChanged(e, t, r) {
            r.forEach((r) => {
                const s = this._callbacks[r];
                void 0 !== s && s(e, t);
            });
        }
    };
__publicField(_DataTracker, '__instance');
let DataTracker = _DataTracker;
function dumpViewModel(e) {
    const t = {};
    if ('object' != typeof e) return e;
    for (const r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            const s = Object.prototype.toString.call(e[r]);
            if (s.startsWith('[object CoherentArrayProxy]')) {
                const s = e[r];
                t[r] = [];
                for (let e = 0; e < s.length; e++) t[r].push({ value: dumpViewModel(s[e].value) });
            } else s.startsWith('[object class BW::WULF::ViewModel') ? (t[r] = dumpViewModel(e[r])) : (t[r] = e[r]);
        }
    return t;
}
const SystemLocale = {
        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
        getRealFormat: (e, t, r = 2) => systemLocale.getRealFormat(e, t, r),
        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
        toUpperCase: (e) => systemLocale.toUpperCase(e),
        toLowerCase: (e) => systemLocale.toUpperCase(e),
    },
    UserLocale = {
        getNumberFormat: (e) => userLocale.getNumberFormat(e),
        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
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
            const r = { __Type: 'GFValueProxy', name: e };
            switch (typeof t) {
                case 'number':
                    r.number = t;
                    break;
                case 'boolean':
                    r.bool = t;
                    break;
                default:
                    r.string = t.toString();
            }
            return r;
        }),
    handleViewEvent$1 = (e, t) => {
        const r = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: s, ...n } = t;
            void 0 !== s
                ? viewEnv.handleViewEvent({ __Type: r, type: e, ...n, arguments: createViewEventArguments(s) })
                : viewEnv.handleViewEvent({ __Type: r, type: e, ...n });
        } else viewEnv.handleViewEvent({ __Type: r, type: e });
    },
    sendMoveEvent = (e) => handleViewEvent$1(ViewEventType.MOVE, { isMouseEvent: !0, on: e }),
    sendCloseEvent = () => handleViewEvent$1(ViewEventType.CLOSE),
    sendClosePopOverEvent = () => handleViewEvent$1(ViewEventType.POP_OVER, { on: !1 }),
    sendShowContextMenuEvent = (e, t, r = 0) => {
        handleViewEvent$1(ViewEventType.CONTEXT_MENU, {
            isMouseEvent: !0,
            contentID: e,
            on: !0,
            decoratorID: r,
            args: t,
        });
    },
    sendShowPopOverEvent = (e, t, r, s, n = R.invalid('resId'), a) => {
        const o = env.view.getViewGlobalPosition(),
            { x: u, y: i, width: l, height: c } = r.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(u) + o.x,
                y: env.view.pxToRem(i) + o.y,
                width: env.view.pxToRem(l),
                height: env.view.pxToRem(c),
            };
        handleViewEvent$1(ViewEventType.POP_OVER, {
            isMouseEvent: !0,
            contentID: e,
            decoratorID: s || R.invalid('resId'),
            targetID: n,
            direction: t,
            bbox: makeGlobalBoundingBox(d),
            on: !0,
            args: a,
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
        const r = { __Type: 'GFValueProxy', name: e };
        switch (typeof t) {
            case 'number':
                r.number = t;
                break;
            case 'boolean':
                r.bool = t;
                break;
            case 'undefined':
                break;
            default:
                r.string = t.toString();
        }
        return r;
    });
}
const handleViewEvent = (e, t, r = {}, s = 0) => {
        viewEnv.handleViewEvent({
            __Type: 'GFViewEventProxy',
            type: ViewEventType.TOOLTIP,
            contentID: e,
            decoratorID: t,
            targetID: s,
            ...r,
        });
    },
    Tooltip$1 = ({
        children: e,
        contentId: t,
        args: r,
        onMouseEnter: s,
        onMouseLeave: n,
        onMouseDown: a,
        onClick: o,
        ignoreShowDelay: u = !1,
        ignoreMouseClick: i = !1,
        decoratorId: l = 0,
        isEnabled: c = !0,
        targetId: d = 0,
        onShow: _,
        onHide: p,
        ...m
    }) => {
        const E = reactExports.useRef({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
            f = reactExports.useMemo(() => d || getFromCallStack().resId, [d]),
            b = reactExports.useCallback(() => {
                (E.current.isVisible && E.current.timeoutId) ||
                    (handleViewEvent(t, l, { isMouseEvent: !0, on: !0, arguments: getViewEventArguments(r) }, f),
                    _ && _(),
                    (E.current.isVisible = !0));
            }, [t, l, r, f, _]),
            x = reactExports.useCallback(() => {
                if (E.current.isVisible || E.current.timeoutId) {
                    const e = E.current.timeoutId;
                    (e > 0 && (clearTimeout(e), (E.current.timeoutId = 0)),
                        handleViewEvent(t, l, { on: !1 }, f),
                        E.current.isVisible && p && p(),
                        (E.current.isVisible = !1));
                }
            }, [t, l, f, p]),
            g = reactExports.useCallback((e) => {
                E.current.isVisible &&
                    ((E.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                    (E.current.hideTimerId = window.setTimeout(() => {
                        const t = document.elementFromPoint(e.clientX, e.clientY);
                        t && !t.isSameNode(E.current.prevTarget) && x();
                    }, 200)));
            }, []);
        (reactExports.useEffect(() => {
            const e = E.current.hideTimerId;
            return (
                document.addEventListener('wheel', g, { capture: !0 }),
                () => {
                    (document.removeEventListener('wheel', g, { capture: !0 }), e && window.clearTimeout(e));
                }
            );
        }, []),
            reactExports.useEffect(() => {
                !1 === c && x();
            }, [c, x]),
            reactExports.useEffect(
                () => (
                    window.addEventListener('mouseleave', x),
                    () => {
                        (window.removeEventListener('mouseleave', x), x());
                    }
                ),
                [x],
            ));
        return c
            ? reactExports.cloneElement(e, {
                  onMouseEnter:
                      ((h = e.props.onMouseEnter),
                      (e) => {
                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                              (clearTimeout(E.current.timeoutId),
                              (E.current.timeoutId = window.setTimeout(b, u ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT)),
                              s && s(e),
                              h && h(e));
                      }),
                  onMouseLeave: ((e) => (t) => {
                      (x(), null == n || n(t), null == e || e(t));
                  })(e.props.onMouseLeave),
                  onClick: ((e) => (t) => {
                      (!1 === i && x(), null == o || o(t), null == e || e(t));
                  })(e.props.onClick),
                  onMouseDown: ((e) => (t) => {
                      (!1 === i && x(), null == a || a(t), null == e || e(t));
                  })(e.props.onMouseDown),
                  ...m,
              })
            : e;
        var h;
    },
    TooltipWrapper = ({ tooltipArgs: e, children: t }) =>
        e ? jsxRuntimeExports.jsx(Tooltip$1, { ...e, children: t }) : t,
    root$n = 'Paginationarrowbutton_root_7e61bd42',
    base$J = 'Paginationarrowbutton_9603d7f5',
    icon$c = 'Paginationarrowbutton_icon_51dba56d',
    icon__back$1 = 'Paginationarrowbutton_icon__back_693f6a12',
    icon__forward$1 = 'Paginationarrowbutton_icon__forward_5da20ed5',
    base__locked = 'Paginationarrowbutton_base__locked_7e61bd42',
    fadeInWithScale$n = 'Paginationarrowbutton_fadeInWithScale_7e61bd42',
    slideUp$n = 'Paginationarrowbutton_slideUp_7e61bd42',
    blink$n = 'Paginationarrowbutton_blink_7e61bd42',
    scale$n = 'Paginationarrowbutton_scale_7e61bd42',
    rotate$n = 'Paginationarrowbutton_rotate_7e61bd42',
    windowIn$n = 'Paginationarrowbutton_windowIn_7e61bd42',
    fadeOut$n = 'Paginationarrowbutton_fadeOut_7e61bd42',
    fadeIn$n = 'Paginationarrowbutton_fadeIn_7e61bd42',
    styles$Q = {
        root: root$n,
        base: base$J,
        icon: icon$c,
        icon__back: icon__back$1,
        icon__forward: icon__forward$1,
        base__locked: base__locked,
        fadeInWithScale: fadeInWithScale$n,
        slideUp: slideUp$n,
        blink: blink$n,
        scale: scale$n,
        rotate: rotate$n,
        windowIn: windowIn$n,
        fadeOut: fadeOut$n,
        fadeIn: fadeIn$n,
    };
var ArrowDirection = ((e) => ((e.Back = 'back'), (e.Forward = 'forward'), e))(ArrowDirection || {});
const PaginationArrowButton = ({ onClick: e, direction: t, isLocked: r, tooltipArgs: s, className: n }) => {
        const a = cx(styles$Q.icon, styles$Q[`icon__${t}`]),
            o = reactExports.useCallback(() => {
                r || (e(), playSound$1('play'));
            }, [e, r]),
            u = reactExports.useCallback(() => {
                r || playSound$1('highlight');
            }, [r]),
            i = cx(styles$Q.base, r && styles$Q.base__locked, n);
        return jsxRuntimeExports.jsx(TooltipWrapper, {
            tooltipArgs: s,
            children: jsxRuntimeExports.jsx('div', {
                className: i,
                children: jsxRuntimeExports.jsx('div', { className: a, onClick: o, onMouseEnter: u }),
            }),
        });
    },
    base$I = 'Paginationrender_7c84d97d',
    base__completed = 'Paginationrender_base__completed_738d6d59',
    base__inaccessible = 'Paginationrender_base__inaccessible_48314b99',
    base__selected$2 = 'Paginationrender_base__selected_6018b389',
    selectedImage = 'Paginationrender_selectedImage_a1492f5',
    styles$P = {
        base: base$I,
        base__completed: base__completed,
        base__inaccessible: base__inaccessible,
        base__selected: base__selected$2,
        selectedImage: selectedImage,
    },
    PaginationRender = ({
        className: e,
        index: t,
        onClick: r,
        isSelected: s,
        isCompleted: n,
        isInaccessible: a,
        tooltipArgs: o,
    }) => {
        const u = cx(
                styles$P.base,
                s && styles$P.base__selected,
                n && styles$P.base__completed,
                a && styles$P.base__inaccessible,
                e,
            ),
            i = reactExports.useCallback(() => {
                (r(t), playSound$1('yes1'));
            }, [t, r]),
            l = reactExports.useCallback(() => {
                playSound$1('highlight');
            }, []);
        return jsxRuntimeExports.jsx(TooltipWrapper, {
            tooltipArgs: o,
            children: jsxRuntimeExports.jsxs('div', {
                className: u,
                onClick: i,
                onMouseEnter: l,
                children: [s && jsxRuntimeExports.jsx('span', { className: styles$P.selectedImage }), t + 1],
            }),
        });
    },
    base$H = 'Paginationlist_891dda95',
    item = 'Paginationlist_item_ffe61403',
    item__last = 'Paginationlist_item__last_9bbe906a',
    styles$O = { base: base$H, item: item, item__last: item__last },
    PaginationList = ({ className: e, selectedStep: t, data: r, onChange: s }) => {
        const n = r.length - 1,
            a = cx(styles$O.base, e),
            o = reactExports.useCallback(
                (e) => {
                    s(e);
                },
                [s],
            );
        return jsxRuntimeExports.jsx('div', {
            className: a,
            children: r.map((e, r) =>
                jsxRuntimeExports.jsx(
                    PaginationRender,
                    {
                        onClick: o,
                        index: r,
                        className: cx(styles$O.item, r === n && styles$O.item__last),
                        isSelected: t === r,
                        ...e,
                    },
                    r,
                ),
            ),
        });
    },
    base$G = 'Pagination_d4b3e554',
    content$6 = 'Pagination_content_ff273982',
    list$1 = 'Pagination_list_15505166',
    styles$N = { base: base$G, content: content$6, list: list$1 },
    Pagination = ({ className: e, hasArrow: t, arrowOffset: r, selectedIndex: s, children: n }) => {
        r = r || 0;
        const a = reactExports.useMemo(
                () =>
                    n.map((e) => ({
                        isInaccessible: e.isInaccessible,
                        isCompleted: e.isCompleted,
                        tooltipArgs: e.tooltipArgs,
                    })),
                [n],
            ),
            o = n.length - 1,
            u = reactExports.useMemo(() => {
                const e = a.findIndex((e) => void 0 === e.isInaccessible && void 0 === e.isCompleted);
                return -1 === e ? 0 : e;
            }, [a]),
            [i, l] = reactExports.useState(s || u),
            c = reactExports.useCallback(
                (e) => {
                    l(e);
                },
                [l],
            ),
            d = reactExports.useCallback(() => {
                l(i - 1);
            }, [l, i]),
            _ = reactExports.useCallback(() => {
                l(i + 1);
            }, [l, i]),
            p = cx(styles$N.base, e),
            m = reactExports.useMemo(() => ({ marginLeft: r, marginRight: r }), [r]),
            E = 0 === i,
            f = i === o,
            b = reactExports.useMemo(() => (E ? void 0 : n[i - 1].tooltipArgs), [n, E, i]),
            x = reactExports.useMemo(() => (f ? void 0 : n[i + 1].tooltipArgs), [n, f, i]);
        return jsxRuntimeExports.jsxs('div', {
            className: p,
            children: [
                jsxRuntimeExports.jsxs('div', {
                    className: styles$N.content,
                    children: [
                        t &&
                            jsxRuntimeExports.jsx(PaginationArrowButton, {
                                onClick: d,
                                direction: ArrowDirection.Back,
                                isLocked: E,
                                tooltipArgs: b,
                            }),
                        jsxRuntimeExports.jsx('div', { style: m, children: n[i].render() }),
                        t &&
                            jsxRuntimeExports.jsx(PaginationArrowButton, {
                                onClick: _,
                                direction: ArrowDirection.Forward,
                                isLocked: f,
                                tooltipArgs: x,
                            }),
                    ],
                }),
                jsxRuntimeExports.jsx(PaginationList, {
                    className: styles$N.list,
                    selectedStep: i,
                    data: a,
                    onChange: c,
                }),
            ],
        });
    },
    root$m = 'Textbutton_root_599b35e4',
    base$F = 'Textbutton_b1283086',
    base__right$1 = 'Textbutton_base__right_78d4c03f',
    icon$b = 'Textbutton_icon_9ba4c60',
    icon__back = 'Textbutton_icon__back_599b35e4',
    icon__forward = 'Textbutton_icon__forward_4ef35d4d',
    icon__close = 'Textbutton_icon__close_b2af8bd5',
    icon__info = 'Textbutton_icon__info_6cbc7293',
    glow$3 = 'Textbutton_glow_1ddc70ba',
    caption = 'Textbutton_caption_4350685c',
    caption__back = 'Textbutton_caption__back_599b35e4',
    caption__forward = 'Textbutton_caption__forward_599b35e4',
    caption__close = 'Textbutton_caption__close_c29bdb5',
    caption__info = 'Textbutton_caption__info_ccd96b67',
    goto = 'Textbutton_goto_d2c81cbd',
    base__left$1 = 'Textbutton_base__left_599b35e4',
    shine = 'Textbutton_shine_527e4656',
    fadeInWithScale$m = 'Textbutton_fadeInWithScale_599b35e4',
    slideUp$m = 'Textbutton_slideUp_599b35e4',
    blink$m = 'Textbutton_blink_599b35e4',
    scale$m = 'Textbutton_scale_599b35e4',
    rotate$m = 'Textbutton_rotate_599b35e4',
    windowIn$m = 'Textbutton_windowIn_599b35e4',
    fadeOut$m = 'Textbutton_fadeOut_599b35e4',
    fadeIn$m = 'Textbutton_fadeIn_599b35e4',
    styles$M = {
        root: root$m,
        base: base$F,
        base__right: base__right$1,
        icon: icon$b,
        icon__back: icon__back,
        icon__forward: icon__forward,
        icon__close: icon__close,
        icon__info: icon__info,
        glow: glow$3,
        caption: caption,
        caption__back: caption__back,
        caption__forward: caption__forward,
        caption__close: caption__close,
        caption__info: caption__info,
        goto: goto,
        base__left: base__left$1,
        shine: shine,
        fadeInWithScale: fadeInWithScale$m,
        slideUp: slideUp$m,
        blink: blink$m,
        scale: scale$m,
        rotate: rotate$m,
        windowIn: windowIn$m,
        fadeOut: fadeOut$m,
        fadeIn: fadeIn$m,
    },
    TextButton = ({
        caption: e,
        onClick: t,
        goto: r,
        classNames: s,
        onMouseEnter: n,
        onMouseLeave: a,
        onMouseDown: o,
        onMouseUp: u,
        side: i = 'left',
        type: l = 'back',
        soundHover: c = 'highlight',
        soundClick: d = 'play',
        ..._
    }) => {
        const p = reactExports.useCallback(
                (e) => {
                    (null == n || n(e), env.sound.play.sound(c));
                },
                [n, c],
            ),
            m = reactExports.useCallback(
                (e) => {
                    null == a || a(e);
                },
                [a],
            ),
            E = reactExports.useCallback(
                (e) => {
                    (null == o || o(e), env.sound.play.sound(d));
                },
                [o, d],
            ),
            f = reactExports.useCallback(
                (e) => {
                    null == u || u(e);
                },
                [u],
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$M.base, styles$M[`base__${l}`], styles$M[`base__${i}`], null == s ? void 0 : s.base),
            onMouseEnter: p,
            onMouseLeave: m,
            onMouseDown: E,
            onMouseUp: f,
            onClick: t,
            ..._,
            children: [
                'info' !== l && jsxRuntimeExports.jsx('div', { className: styles$M.shine }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$M.icon,
                        styles$M[`icon__${l}`],
                        styles$M[`icon__${i}`],
                        null == s ? void 0 : s.icon,
                    ),
                    children: jsxRuntimeExports.jsx('div', {
                        className: cx(styles$M.glow, null == s ? void 0 : s.glow),
                    }),
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$M.caption, styles$M[`caption__${l}`], null == s ? void 0 : s.caption),
                    children: e,
                }),
                r &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$M.goto, null == s ? void 0 : s.goto),
                        children: r,
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
        const r = getNumberFormatType(t),
            s = SystemLocale.getNumberFormat(e, r);
        return void 0 !== e && void 0 !== s ? s : null;
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
    getSizeFolder = (e) => {
        switch (e) {
            case ImageSize$1.S600x450:
                return 'c_600x450';
            case ImageSize$1.S400x300:
                return 'c_400x300';
            case ImageSize$1.S296x222:
                return 'c_296x222';
            case ImageSize$1.S232x174:
                return 'c_232x174';
            case ImageSize$1.Big:
                return 'c_80x80';
            case ImageSize$1.Small:
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
    getDogTypeImage = (e, t, r) => {
        const s = DOG_TAG_FOLDER_NAMES[e];
        if (s) {
            const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                a = n.$dyn(r);
            return a ? `${a}` : `${n.$dyn(DOG_TAG_DEFAULT_ICON_NAME[e])}`;
        }
        return (
            console.error('Unreachable branch: add dogTagType and icon folder for corresponding icon matching'),
            ''
        );
    },
    getRewardImage = (e, t = ImageSize$1.Small) => {
        const { name: r, type: s, value: n, icon: a, item: o, dogTagType: u } = e,
            i = getSizeFolder(t);
        switch (r) {
            case 'basic':
            case 'plus':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}_${n}`;
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${n}`;
            case 'items':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
            case 'blueprints':
            case 'blueprintsAny':
            case 'finalBlueprints':
                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${a}`;
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
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
            case 'crewBooks':
                return `R.images.gui.maps.icons.crewBooks.books.${t}.${a}`;
            case 'dogTagComponents':
                return getDogTypeImage(u, t, a);
            case 'dossier_badge':
                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
            case 'dossier_achievement':
                return `R.images.gui.maps.icons.achievement.${i}.${a}`;
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
                return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
            case 'attachment':
                return `R.images.gui.maps.vehicles.attachments.${t}.${a}`;
            case 'statTracker':
                return `R.images.gui.maps.vehicles.statTrackers.${t}.${a}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
        }
    },
    getRewardTooltipConfig = (e, t, r) => {
        const s = t && { contentId: t };
        return {
            args: e,
            isEnabled: Boolean((e && e.tooltipId) || t),
            ignoreMouseClick: !0,
            ignoreShowDelay: !t,
            ...s,
            ...r,
        };
    },
    SIZES_WITH_BOTTOM_HIGHLIGHT = [ImageSize$1.Small, ImageSize$1.Big],
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
    clamp = (e, t, r) => (r < e ? e : r > t ? t : r),
    createLayoutReadyInEffect = (e) => {
        let t,
            r = null;
        return (
            (r = requestAnimationFrame(() => {
                r = requestAnimationFrame(() => {
                    ((r = null), (t = e()));
                });
            })),
            () => {
                ('function' == typeof t && t(), null !== r && cancelAnimationFrame(r));
            }
        );
    };
function noop() {}
const useMount = (e) => {
    reactExports.useEffect(e, []);
};
function requestAnimationFrameLoop(e) {
    let t = 0;
    return [
        function r() {
            (e(), (t = requestAnimationFrame(r)));
        },
        function () {
            cancelAnimationFrame(t);
        },
    ];
}
const DEFAULT_NAME_KEYFRAME$1 = 'Point',
    THRESHOLD$1 = 0.02,
    VideoForwarded$1 = reactExports.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: r = !1,
            style: s,
            loop: n = !1,
            isPrebufferKeyframes: a,
            keyframesNameConfig: o,
            onClick: u,
            ...i
        },
        l,
    ) {
        const c = l,
            d = reactExports.useRef(null);
        return (
            useMount(() =>
                env.view.events.onDisplayChanged((e, t) => {
                    var r, s;
                    (t === displayStatus.hidden && (null == (r = d.current) || r.pause()),
                        t === displayStatus.shown && (null == (s = d.current) || s.play()));
                }),
            ),
            reactExports.useEffect(
                () =>
                    createLayoutReadyInEffect(() => {
                        const e = d.current;
                        if (!c || !e || !a) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps();
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  null == e || e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [a, c],
            ),
            reactExports.useEffect(() => {
                if (c && d.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: noop },
                        t = () => {
                            let t = 0;
                            const [r, s] = requestAnimationFrameLoop(() => {
                                if (d.current) {
                                    const { currentTime: r, duration: s } = d.current;
                                    if (
                                        (t !== r &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: r, duration: s })),
                                            (t = r)),
                                        d.current.paused || !c || !a)
                                    )
                                        return;
                                    const n = d.current.cohGetKeyframeTimestamps();
                                    n.forEach((t, s) => {
                                        r > n[s] - THRESHOLD$1 &&
                                            r < n[s] &&
                                            e.changeKeyframeHandlers.forEach((e) => {
                                                const r = Object.keys(o ?? {})[s];
                                                return e({
                                                    time: t,
                                                    name: `${o ? r : `${DEFAULT_NAME_KEYFRAME$1}_${s}`}`,
                                                });
                                            });
                                    });
                                }
                            });
                            return (r(), s);
                        };
                    e.changeTimeLoop = t();
                    const r = (t) => (
                            e.changeTimeHandlers.push(t),
                            () => {
                                const { changeTimeHandlers: r } = e,
                                    s = r.indexOf(t);
                                s < 0
                                    ? console.warn("Can't unsubscribe changeTimeHandler, this reference was not found")
                                    : r.splice(s, 1);
                            }
                        ),
                        s = (t) => (
                            e.changeKeyframeHandlers.push(t),
                            () => {
                                const { changeKeyframeHandlers: r } = e,
                                    s = r.indexOf(t);
                                s < 0
                                    ? console.warn(
                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                      )
                                    : r.splice(s, 1);
                            }
                        ),
                        n = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.currentTime;
                        },
                        u = () => {
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
                        _ = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.pause();
                        },
                        p = () => {
                            (_(), i(0));
                        },
                        m = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps()) ?? [];
                        },
                        E = (e) => {
                            (i(e), l());
                        },
                        f = (e) => {
                            (i(e), _());
                        },
                        b = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        x = (e, t) => {
                            var r;
                            return (
                                null == (r = d.current) || r.addEventListener(e, t),
                                () => {
                                    var r;
                                    return null == (r = d.current) ? void 0 : r.removeEventListener(e, t);
                                }
                            );
                        },
                        g = (e, t) => {
                            var r;
                            return (
                                null == (r = d.current) || r.removeEventListener(e, t),
                                () => {
                                    var r;
                                    return null == (r = d.current) ? void 0 : r.removeEventListener(e, t);
                                }
                            );
                        };
                    return (
                        (c.current = {
                            on: x,
                            off: g,
                            play: l,
                            pause: _,
                            stop: p,
                            cleanup: b,
                            getCurrentTime: n,
                            getDuration: u,
                            getCachedKeyframes: m,
                            goToAndPlay: E,
                            goToAndStop: f,
                            setCurrentTime: i,
                            domRef: d.current,
                            onChangeTime: r,
                            onKeyframes: s,
                        }),
                        () => {
                            (b(), (c.current = null));
                        }
                    );
                }
            }, [o, c, a]),
            reactExports.useEffect(() => {
                d.current && r && d.current.play();
            }, [r, n]),
            reactExports.useEffect(() => {
                if (d.current)
                    return () => {
                        d.current && d.current.pause();
                    };
            }, []),
            jsxRuntimeExports.jsx('video', { src: e, className: t, style: s, loop: n, ref: d, onClick: u, ...i })
        );
    }),
    Video$1 = reactExports.memo(VideoForwarded$1),
    RouterContext = reactExports.createContext(void 0);
function useRouter() {
    const e = reactExports.useContext(RouterContext);
    if (!e) throw new Error('useRouter must be used within a RouterProvider');
    return e;
}
var define_process_env_default = {};
function removeLastSlash(e) {
    return e.endsWith('/') ? e.slice(0, -1) : e;
}
function ModelRouterProvider({ children: e, prefix: t = '', context: r, getRoot: s, initializer: n, rootId: a }) {
    const o = reactExports.useRef([]),
        u = reactExports.useRef(null),
        i = reactExports.useMemo(() => create({ context: r, getRoot: s, initializer: n, rootId: a }), [r, s, n, a]),
        l = reactExports.useCallback(
            (e) => {
                const t = i.subscribe(e);
                return () => i.unsubscribe(t);
            },
            [i],
        ),
        c = reactExports.useCallback(() => {
            const e = i.readByPath(),
                r = { location: removeLastSlash(t + e.route), params: e.params };
            return u.current && comparer.shallow(u.current, r) ? u.current : ((u.current = r), r);
        }, [i, t]),
        d = reactExports.useSyncExternalStore(l, c);
    reactExports.useEffect(() => i.dispose, [i]);
    const _ = reactExports.useMemo(() => {
        const e = [...o.current, d];
        return ((o.current = e), { ...d, history: e });
    }, [d]);
    define_process_env_default.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', _);
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
        m = reactExports.useMemo(() => ({ ..._, ...p }), [p, _]);
    return jsxRuntimeExports.jsx(RouterContext.Provider, { value: m, children: e });
}
var Size = ((e) => ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e))(Size || {}),
    AnimationType = ((e) => ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e))(AnimationType || {});
const root$l = 'Progressbar_root_27f917f7',
    base$E = 'Progressbar_a6e35bd7',
    base__small$8 = 'Progressbar_base__small_7338ff19',
    background$5 = 'Progressbar_background_27d9dd7c',
    background__small = 'Progressbar_background__small_7338ff19',
    lineWrapper = 'Progressbar_lineWrapper_fc5022a6',
    fadeInWithScale$l = 'Progressbar_fadeInWithScale_27f917f7',
    slideUp$l = 'Progressbar_slideUp_27f917f7',
    blink$l = 'Progressbar_blink_27f917f7',
    scale$l = 'Progressbar_scale_27f917f7',
    rotate$l = 'Progressbar_rotate_27f917f7',
    windowIn$l = 'Progressbar_windowIn_27f917f7',
    fadeOut$l = 'Progressbar_fadeOut_27f917f7',
    fadeIn$l = 'Progressbar_fadeIn_27f917f7',
    styles$L = {
        root: root$l,
        base: base$E,
        base__small: base__small$8,
        background: background$5,
        background__small: background__small,
        lineWrapper: lineWrapper,
        fadeInWithScale: fadeInWithScale$l,
        slideUp: slideUp$l,
        blink: blink$l,
        scale: scale$l,
        rotate: rotate$l,
        windowIn: windowIn$l,
        fadeOut: fadeOut$l,
        fadeIn: fadeIn$l,
    },
    ProgressBarBackground = ({ size: e = Size.Default }) => {
        const t = cx(styles$L.background, styles$L[`background__${e}`]);
        return jsxRuntimeExports.jsx('div', { className: t });
    },
    root$k = 'Progressbarblink_root_6fa3e54',
    base$D = 'Progressbarblink_c6146c1c',
    base__small$7 = 'Progressbarblink_base__small_9a4d3786',
    fadeInWithScale$k = 'Progressbarblink_fadeInWithScale_6fa3e54',
    slideUp$k = 'Progressbarblink_slideUp_6fa3e54',
    blink$k = 'Progressbarblink_blink_6fa3e54',
    scale$k = 'Progressbarblink_scale_6fa3e54',
    rotate$k = 'Progressbarblink_rotate_6fa3e54',
    windowIn$k = 'Progressbarblink_windowIn_6fa3e54',
    fadeOut$k = 'Progressbarblink_fadeOut_6fa3e54',
    fadeIn$k = 'Progressbarblink_fadeIn_6fa3e54',
    styles$K = {
        root: root$k,
        base: base$D,
        base__small: base__small$7,
        fadeInWithScale: fadeInWithScale$k,
        slideUp: slideUp$k,
        blink: blink$k,
        scale: scale$k,
        rotate: rotate$k,
        windowIn: windowIn$k,
        fadeOut: fadeOut$k,
        fadeIn: fadeIn$k,
    },
    ProgressBarBlink = ({ size: e }) => {
        const t = cx(styles$K.base, styles$K[`base__${e}`]);
        return jsxRuntimeExports.jsx('div', { className: t });
    },
    root$j = 'Progresslineimpose_root_577e82cf',
    base$C = 'Progresslineimpose_24e17c02',
    base__disabled$3 = 'Progresslineimpose_base__disabled_bcd461f4',
    base__finished = 'Progresslineimpose_base__finished_803677d6',
    base__withoutBounce$1 = 'Progresslineimpose_base__withoutBounce_df0aed59',
    pattern$2 = 'Progresslineimpose_pattern_491cb9c0',
    base__small$6 = 'Progresslineimpose_base__small_577e82cf',
    gradient = 'Progresslineimpose_gradient_513e2b1d',
    glow$2 = 'Progresslineimpose_glow_76f8072f',
    glow__left = 'Progresslineimpose_glow__left_c2e964b3',
    fadeInWithScale$j = 'Progresslineimpose_fadeInWithScale_577e82cf',
    slideUp$j = 'Progresslineimpose_slideUp_577e82cf',
    blink$j = 'Progresslineimpose_blink_577e82cf',
    scale$j = 'Progresslineimpose_scale_577e82cf',
    rotate$j = 'Progresslineimpose_rotate_577e82cf',
    windowIn$j = 'Progresslineimpose_windowIn_577e82cf',
    fadeOut$j = 'Progresslineimpose_fadeOut_577e82cf',
    fadeIn$j = 'Progresslineimpose_fadeIn_577e82cf',
    styles$J = {
        root: root$j,
        base: base$C,
        base__disabled: base__disabled$3,
        base__finished: base__finished,
        base__withoutBounce: base__withoutBounce$1,
        pattern: pattern$2,
        base__small: base__small$6,
        gradient: gradient,
        glow: glow$2,
        glow__left: glow__left,
        fadeInWithScale: fadeInWithScale$j,
        slideUp: slideUp$j,
        blink: blink$j,
        scale: scale$j,
        rotate: rotate$j,
        windowIn: windowIn$j,
        fadeOut: fadeOut$j,
        fadeIn: fadeIn$j,
    },
    ProgressLineImposeComponent = ({
        size: e,
        lineRef: t,
        disabled: r,
        baseStyles: s,
        isComplete: n,
        withoutBounce: a,
    }) => {
        const o = cx(
                styles$J.base,
                styles$J[`base__${e}`],
                r && styles$J.base__disabled,
                n && styles$J.base__finished,
                a && styles$J.base__withoutBounce,
            ),
            u = !r && !n;
        return jsxRuntimeExports.jsxs('div', {
            className: o,
            style: s,
            ref: t,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$J.pattern }),
                jsxRuntimeExports.jsx('div', { className: styles$J.gradient }),
                u && jsxRuntimeExports.jsx(ProgressBarBlink, { size: e }),
            ],
        });
    },
    ProgressLineImpose = reactExports.memo(ProgressLineImposeComponent),
    createTimeoutInEffect = (e, t) => {
        let r;
        const s = setTimeout(() => {
            r = e();
        }, t);
        return () => {
            ('function' == typeof r && r(), clearTimeout(s));
        };
    };
var GrowAnimationState = ((e) => ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e))(
        GrowAnimationState || {},
    ),
    SimpleAnimationState = ((e) => ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e))(SimpleAnimationState || {});
const base$B = 'Progressbardeltagrow_c42a7a2c',
    base__withoutBounce = 'Progressbardeltagrow_base__withoutBounce_8900411d',
    glow$1 = 'Progressbardeltagrow_glow_e08fafeb',
    styles$I = { base: base$B, base__withoutBounce: base__withoutBounce, glow: glow$1 },
    getGlowSideWithReverse = (e) => (e ? { left: 0 } : { right: 0 }),
    getBaseSideWithReverse = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
    getAnimationStyles = (e) => ({ transitionDuration: `${e}ms` }),
    ProgressBarDeltaGrowComponent = ({
        transitionDuration: e,
        transitionDelay: t,
        freezed: r,
        from: s,
        size: n,
        to: a,
        onEndAnimation: o,
        onChangeAnimationState: u,
        className: i,
    }) => {
        const l = a < s,
            [c, d] = reactExports.useState(GrowAnimationState.Idle),
            _ = c === GrowAnimationState.End,
            p = c === GrowAnimationState.Idle,
            m = c === GrowAnimationState.Grow,
            E = c === GrowAnimationState.Shrink,
            f = reactExports.useCallback(
                (e) => {
                    (d(e), u && u(e));
                },
                [u],
            ),
            b = reactExports.useCallback(
                (e, t) =>
                    createTimeoutInEffect(() => {
                        f(e);
                    }, t),
                [f],
            );
        reactExports.useEffect(() => {
            if (!r)
                return p
                    ? b(GrowAnimationState.Grow, t)
                    : m
                      ? b(GrowAnimationState.Shrink, e)
                      : E
                        ? b(GrowAnimationState.End, e)
                        : void (_ && o && o());
        }, [b, r, _, m, p, E, o, t, e]);
        const x = reactExports.useMemo(
                () => ({ width: '100%', ...getAnimationStyles(e), ...getGlowSideWithReverse(l) }),
                [l, e],
            ),
            g = reactExports.useMemo(
                () => ({ width: '0%', ...getAnimationStyles(e), ...getGlowSideWithReverse(l) }),
                [l, e],
            ),
            h = reactExports.useMemo(
                () => ({ width: '0%', ...getBaseSideWithReverse(l, s), ...getAnimationStyles(e) }),
                [s, l, e],
            ),
            y = reactExports.useMemo(
                () => ({ width: `${Math.abs(a - s)}%`, ...getBaseSideWithReverse(l, s), ...getAnimationStyles(e) }),
                [s, l, a, e],
            );
        if (_) return null;
        const v = cx(styles$I.base, i, l && 0 === a && styles$I.base__withoutBounce);
        return jsxRuntimeExports.jsx('div', {
            style: p ? h : y,
            className: v,
            children: jsxRuntimeExports.jsx('div', {
                style: E ? g : x,
                className: styles$I.glow,
                children: jsxRuntimeExports.jsx(ProgressBarBlink, { size: n }),
            }),
        });
    },
    ProgressBarDeltaGrow = reactExports.memo(ProgressBarDeltaGrowComponent),
    ProgressBarGrowLineComponent = ({
        to: e,
        size: t,
        from: r,
        lineRef: s,
        disabled: n,
        isComplete: a,
        animationSettings: o,
        onEndAnimation: u,
        onChangeAnimationState: i,
    }) => {
        const l = e < r,
            [c, d] = reactExports.useState(!1),
            _ = reactExports.useCallback(
                (e) => {
                    (e === GrowAnimationState.Shrink && d(!0), i && i(e));
                },
                [i],
            ),
            p = reactExports.useMemo(() => ({ width: `${r}%`, transitionProperty: 'none' }), [r]),
            m = reactExports.useMemo(
                () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                [o.line.duration, e],
            );
        return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [
                jsxRuntimeExports.jsx(ProgressLineImpose, {
                    size: t,
                    lineRef: s,
                    disabled: n,
                    isComplete: a,
                    withoutBounce: l && 0 === e,
                    baseStyles: c ? m : p,
                }),
                r >= 0 &&
                    jsxRuntimeExports.jsx(ProgressBarDeltaGrow, {
                        transitionDuration: o.delta.duration,
                        transitionDelay: o.delta.delay,
                        onChangeAnimationState: _,
                        freezed: o.freezed,
                        onEndAnimation: u,
                        from: r,
                        size: t,
                        to: e,
                        className: o.delta.className,
                    }),
            ],
        });
    },
    ProgressBarGrowLine = reactExports.memo(ProgressBarGrowLineComponent),
    base$A = 'Progressbardeltasimple_4b8901e3',
    delta = 'Progressbardeltasimple_delta_9a540ec7',
    styles$H = { base: base$A, delta: delta },
    ProgressBarDeltaSimpleComponent = ({
        transitionDuration: e,
        transitionDelay: t,
        freezed: r,
        from: s,
        size: n,
        to: a,
        onEndAnimation: o,
        onChangeAnimationState: u,
    }) => {
        const i = a < s,
            [l, c] = reactExports.useState(SimpleAnimationState.Idle),
            d = l === SimpleAnimationState.In,
            _ = l === SimpleAnimationState.End,
            p = l === SimpleAnimationState.Idle,
            m = reactExports.useCallback(
                (e) => {
                    (c(e), u && u(e));
                },
                [u],
            );
        (reactExports.useEffect(() => {
            if (p && !r) {
                return createTimeoutInEffect(() => {
                    m(SimpleAnimationState.In);
                }, t);
            }
        }, [m, r, p, t]),
            reactExports.useEffect(() => {
                if (d) {
                    return createTimeoutInEffect(() => {
                        (o && o(), m(SimpleAnimationState.End));
                    }, e + t);
                }
            }, [m, d, o, t, e]));
        const E = reactExports.useMemo(
                () => ({
                    width: '100%',
                    transitionDuration: `${e}ms`,
                    transitionDelay: `${t}ms`,
                    [i ? 'left' : 'right']: '0',
                }),
                [i, t, e],
            ),
            f = reactExports.useMemo(
                () => ({
                    width: '0%',
                    transitionDuration: `${e}ms`,
                    transitionDelay: `${t}ms`,
                    [i ? 'left' : 'right']: '0',
                }),
                [i, t, e],
            ),
            b = reactExports.useMemo(() => ({ width: `${Math.abs(s - a)}%`, left: `${i ? a : s}%` }), [s, i, a]);
        return _
            ? null
            : jsxRuntimeExports.jsx('div', {
                  className: styles$H.base,
                  style: b,
                  children: jsxRuntimeExports.jsx('div', {
                      style: p ? E : f,
                      className: styles$H.delta,
                      children: jsxRuntimeExports.jsx(ProgressBarBlink, { size: n }),
                  }),
              });
    },
    ProgressBarDeltaSimple = reactExports.memo(ProgressBarDeltaSimpleComponent),
    ProgressBarSimpleLineComponent = ({
        to: e,
        size: t,
        from: r,
        lineRef: s,
        disabled: n,
        isComplete: a,
        animationSettings: o,
        onChangeAnimationState: u,
        onEndAnimation: i,
    }) => {
        const l = reactExports.useMemo(
            () => ({
                width: `${e}%`,
                transitionDuration: `${o.line.duration}ms`,
                transitionDelay: `${o.line.delay}ms`,
            }),
            [o.line.delay, o.line.duration, e],
        );
        return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [
                jsxRuntimeExports.jsx(ProgressLineImpose, {
                    size: t,
                    lineRef: s,
                    disabled: n,
                    isComplete: a,
                    baseStyles: l,
                }),
                r >= 0 &&
                    jsxRuntimeExports.jsx(ProgressBarDeltaSimple, {
                        transitionDuration: o.delta.duration,
                        transitionDelay: o.delta.delay,
                        freezed: o.freezed,
                        from: r,
                        size: t,
                        to: e,
                        onChangeAnimationState: u,
                        onEndAnimation: i,
                    }),
            ],
        });
    },
    ProgressBarSimpleLine = reactExports.memo(ProgressBarSimpleLineComponent),
    WithAnimationLineComponent = ({ onComplete: e, onEndAnimation: t, ...r }) => {
        const [s, n] = reactExports.useState(!1),
            a = reactExports.useCallback(() => {
                const a = 100 === r.to;
                (a !== s && n(a), a && e && e(), t && t());
            }, [s, e, t, r.to]);
        switch (r.animationSettings.type) {
            case AnimationType.Simple:
                return jsxRuntimeExports.jsx(ProgressBarSimpleLine, { ...r, onEndAnimation: a, isComplete: s });
            case AnimationType.Growing:
                return jsxRuntimeExports.jsx(ProgressBarGrowLine, { ...r, onEndAnimation: a, isComplete: s });
            default:
                return null;
        }
    },
    WithAnimationLine = reactExports.memo(WithAnimationLineComponent),
    WithStackAnimationLineComponent = ({ onEndAnimation: e, ...t }) => {
        const r = reactExports.useRef({}),
            s = reactExports.useCallback(() => {
                ((r.current.from = void 0), e && e());
            }, [e]),
            n = 'number' == typeof r.current.from ? r.current.from : t.from;
        return (
            (r.current.from = n),
            reactExports.createElement(WithAnimationLine, {
                ...t,
                onEndAnimation: s,
                key: `${n}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                from: n,
            })
        );
    },
    WithStackAnimationLine = reactExports.memo(WithStackAnimationLineComponent),
    WithoutAnimationLine = ({ size: e, value: t, lineRef: r, disabled: s, onComplete: n }) => {
        const a = reactExports.useMemo(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
            o = 100 === t;
        return (
            reactExports.useEffect(() => {
                o && n && n();
            }, [o, n]),
            jsxRuntimeExports.jsx(ProgressLineImpose, {
                size: e,
                disabled: s,
                baseStyles: a,
                isComplete: o,
                lineRef: r,
            })
        );
    },
    ProgressBarLineComponent = ({
        size: e,
        value: t,
        lineRef: r,
        disabled: s,
        deltaFrom: n,
        additionalKey: a,
        animationSettings: o,
        onEndAnimation: u,
        onChangeAnimationState: i,
        onComplete: l,
    }) => {
        if (n === t)
            return jsxRuntimeExports.jsx(
                WithoutAnimationLine,
                { size: e, value: t, lineRef: r, disabled: s, onComplete: l },
                `${n}-${t}-${a}`,
            );
        const c = {
            from: n,
            to: t,
            size: e,
            additionalKey: a,
            lineRef: r,
            disabled: s,
            animationSettings: o,
            onComplete: l,
            onEndAnimation: u,
            onChangeAnimationState: i,
        };
        return o.withStack
            ? jsxRuntimeExports.jsx(WithStackAnimationLine, { ...c })
            : jsxRuntimeExports.jsx(WithAnimationLine, { ...c }, `${n}-${t}-${a}`);
    },
    ProgressBarLine = reactExports.memo(ProgressBarLineComponent),
    createSkin = (e) => {
        var t, r, s, n, a, o, u;
        return {
            '--progress-base': `url(${e.bgImageBase})`,
            '--progress-bg-height': (null == (t = e.bg) ? void 0 : t.height) ?? '12rem',
            '--progress-bg-height-small': (null == (r = e.bg) ? void 0 : r.heightSmall) ?? '2rem',
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
            '--progress-glow-width': (null == (s = e.glowSettings) ? void 0 : s.width) ?? '60rem',
            '--progress-glow-height': (null == (n = e.glowSettings) ? void 0 : n.height) ?? '100rem',
            '--progress-glow-small-width': (null == (a = e.glowSettings) ? void 0 : a.smallWidth) ?? '44rem',
            '--progress-glow-small-height': (null == (o = e.glowSettings) ? void 0 : o.smallHeight) ?? '43rem',
            '--progress-glow-mixBlendMode': (null == (u = e.glowSettings) ? void 0 : u.mixBlendMode) ?? 'lighten',
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
    Gray = {
        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
        line: {
            bgColorBase: 'rgba(200, 200, 200, 0.5)',
            bgColorDisabled: 'transparent',
            bgColorFinished: 'rgba(200, 200, 200, 0.5)',
        },
        pattern: {
            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
        },
        glow: 'R.images.gui.maps.icons.battlePass.progression.progress_glow_white',
        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
        delta: {
            color: '#fff',
            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
        },
    },
    BlueNoise = {
        line: {
            bgColorBase: 'rgba(191, 232, 255, 0.6)',
            bgColorDisabled: 'transparent',
            bgColorFinished: 'rgba(191, 232, 255, 0.6)',
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.08)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.16)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.24))',
        },
        pattern: {
            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_disabled',
            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
            size: '4rem 22rem',
            borderSize: '0',
            gradient: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
            gradientFinished: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
            mixBlendMode: 'normal',
        },
    };
(BlueNoise.line, BlueNoise.pattern);
const prepareDeltaFrom = (e, t, r) => {
    if ('number' == typeof r) {
        return (clamp(0, t, r) / t) * 100;
    }
    return e;
};
function useCalculatePercents(e, t, r) {
    return reactExports.useMemo(() => {
        const s = (clamp(0, t, e) / t) * 100;
        return { value: s, deltaFrom: prepareDeltaFrom(s, t, r) };
    }, [r, t, e]);
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
        size: r = Size.Default,
        animationSettings: s = defaultAnimationSettings,
        disabled: n = !1,
        withoutBackground: a = !1,
        value: o,
        deltaFrom: u,
        additionalKey: i,
        lineRef: l,
        onChangeAnimationState: c,
        onEndAnimation: d,
        onComplete: _,
        className: p,
    }) => {
        const m = useCalculatePercents(o, e, u);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$L.base, p, styles$L[`base__${r}`]),
            style: createSkin(t),
            children: [
                !a && jsxRuntimeExports.jsx(ProgressBarBackground, { size: r }),
                jsxRuntimeExports.jsx(ProgressBarLine, {
                    size: r,
                    lineRef: l,
                    disabled: n,
                    value: m.value,
                    deltaFrom: m.deltaFrom,
                    additionalKey: i,
                    animationSettings: s,
                    onEndAnimation: d,
                    onChangeAnimationState: c,
                    onComplete: _,
                }),
            ],
        });
    },
    ProgressBar$1 = reactExports.memo(ProgressBarComponent),
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
    SimpleTooltip = ({ children: e, body: t, header: r, note: s, alert: n, args: a, ...o }) => {
        const u = reactExports.useMemo(() => {
            const e = { ...a, body: t, header: r, note: s, alert: n };
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
        }, [n, t, r, s, a]);
        return jsxRuntimeExports.jsx(Tooltip$1, {
            contentId: getTooltipContentId(null == a ? void 0 : a.hasHtmlContent),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: u,
            ...o,
            children: e,
        });
    },
    DynamicTooltipWrapper = ({ children: e, tooltipArgs: t, className: r }) => {
        if (!t) return e;
        const s = jsxRuntimeExports.jsx('div', { className: r, children: e });
        if (t.header || t.body) return jsxRuntimeExports.jsx(SimpleTooltip, { ...t, children: s });
        const { contentId: n } = t;
        return n
            ? jsxRuntimeExports.jsx(Tooltip$1, { ...t, contentId: n, children: s })
            : jsxRuntimeExports.jsx(BackportTooltip, { ...t, children: s });
    },
    root$i = 'Reward_root_ab59d545',
    base$z = 'Reward_c5dc614c',
    base__s48x48 = 'Reward_base__s48x48_ab59d545',
    base__small$5 = 'Reward_base__small_69779e9c',
    base__s80x80 = 'Reward_base__s80x80_ab59d545',
    base__big$2 = 'Reward_base__big_4733a488',
    base__s128x100 = 'Reward_base__s128x100_fb15aafa',
    base__s180x135 = 'Reward_base__s180x135_16cc707b',
    base__s232x174 = 'Reward_base__s232x174_e32aac73',
    base__s296x222 = 'Reward_base__s296x222_c9fbf416',
    base__s400x300 = 'Reward_base__s400x300_76ba5081',
    base__s600x450 = 'Reward_base__s600x450_aba4634a',
    tooltipWrapper = 'Reward_tooltipWrapper_5c2caa5a',
    icon$a = 'Reward_icon_ae345d69',
    overlay$2 = 'Reward_overlay_ff0a7872',
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
    title$1 = 'Reward_title_50579ad9',
    timer = 'Reward_timer_98cb5bca',
    fadeInWithScale$i = 'Reward_fadeInWithScale_ab59d545',
    slideUp$i = 'Reward_slideUp_ab59d545',
    blink$i = 'Reward_blink_ab59d545',
    scale$i = 'Reward_scale_ab59d545',
    rotate$i = 'Reward_rotate_ab59d545',
    windowIn$i = 'Reward_windowIn_ab59d545',
    fadeOut$i = 'Reward_fadeOut_ab59d545',
    fadeIn$i = 'Reward_fadeIn_ab59d545',
    styles$G = {
        root: root$i,
        base: base$z,
        base__s48x48: base__s48x48,
        base__small: base__small$5,
        base__s80x80: base__s80x80,
        base__big: base__big$2,
        base__s128x100: base__s128x100,
        base__s180x135: base__s180x135,
        base__s232x174: base__s232x174,
        base__s296x222: base__s296x222,
        base__s400x300: base__s400x300,
        base__s600x450: base__s600x450,
        tooltipWrapper: tooltipWrapper,
        icon: icon$a,
        overlay: overlay$2,
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
        title: title$1,
        timer: timer,
        fadeInWithScale: fadeInWithScale$i,
        slideUp: slideUp$i,
        blink: blink$i,
        scale: scale$i,
        rotate: rotate$i,
        windowIn: windowIn$i,
        fadeOut: fadeOut$i,
        fadeIn: fadeIn$i,
    },
    Reward = ({
        name: e,
        image: t,
        isPeriodic: r = !1,
        size: s = ImageSize$1.Big,
        special: n,
        value: a,
        valueType: o,
        title: u,
        style: i,
        className: l,
        classNames: c,
        tooltipArgs: d,
        periodicIconTooltipArgs: _,
    }) => {
        const p = getBottomHighlight(s, n),
            m = getOverlay(n),
            E = getFormattedValue(a, o);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(
                styles$G.base,
                styles$G[`base__${s}`],
                NORMALIZE_OVERLAYS_LIST.includes(e) && styles$G.base__normalize,
                l,
            ),
            style: i,
            children: [
                jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                    tooltipArgs: d,
                    className: styles$G.tooltipWrapper,
                    children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                        children: [
                            jsxRuntimeExports.jsxs('div', {
                                className: cx(styles$G.image, null == c ? void 0 : c.image),
                                children: [
                                    p &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$G.highlight, null == c ? void 0 : c.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${s}.${p}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$G.icon, null == c ? void 0 : c.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    m &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$G.overlay, null == c ? void 0 : c.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${s}.${m}_overlay)`,
                                            },
                                        }),
                                ],
                            }),
                            E &&
                                jsxRuntimeExports.jsx('div', {
                                    className: cx(
                                        styles$G.info,
                                        styles$G[`info__${e}`],
                                        o === ValueTypes.MULTI && styles$G.info__multi,
                                        null == c ? void 0 : c.info,
                                    ),
                                    children: '1' == E ? null : E,
                                }),
                            u && jsxRuntimeExports.jsx('div', { className: styles$G.title, children: u }),
                        ],
                    }),
                }),
                r &&
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: _,
                        children: jsxRuntimeExports.jsx('div', {
                            className: cx(styles$G.timer, null == c ? void 0 : c.periodicIcon),
                        }),
                    }),
            ],
        });
    };
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
    const { paths: r, exact: s = !1 } = t,
        n = splitPath(e);
    for (const a of r) {
        const t = splitPath(a);
        if (s && n.length !== t.length) continue;
        const r = {};
        let o = !0;
        for (let e = 0; e < t.length; e++) {
            const s = t[e],
                a = n[e];
            if (!a) {
                o = !1;
                break;
            }
            if (s.startsWith(':')) {
                r[s.slice(1)] = a;
            } else if (s !== a) {
                o = !1;
                break;
            }
        }
        if (o) {
            const o = `/${n.slice(0, t.length).join('/')}`,
                u = e === o;
            if (s && !u) continue;
            return { params: r, exact: u, path: a, url: o };
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
function Switch({ children: e, route: t, fallback: r = null }) {
    const { location: s } = useRouter();
    let n;
    return (
        reactExports.Children.forEach(e, (e) => {
            if (!reactExports.isValidElement(e)) return void console.error('Switch children must be valid elements');
            const r = t ? `${t}${e.props.path}` : e.props.path;
            if (void 0 !== n) return;
            const a = matchPath(s, { paths: [r], exact: e.props.exact });
            a && (n = { child: e, match: a });
        }),
        n ? jsxRuntimeExports.jsx(SwitchContext.Provider, { value: { match: n.match }, children: n.child }) : r
    );
}
function Route({ component: e, exact: t }) {
    const { match: r } = useSwitch();
    return jsxRuntimeExports.jsx(ErrorBoundary, {
        children: jsxRuntimeExports.jsx(e, { path: r.path, location: r.url, params: r.params, exact: t ?? !1 }),
    });
}
var CurrencyType = ((e) => (
        (e.credits = 'credits'),
        (e.gold = 'gold'),
        (e.crystal = 'crystal'),
        (e.xp = 'xp'),
        (e.freeXP = 'freeXP'),
        (e.eliteXP = 'eliteXP'),
        (e.equipCoin = 'equipCoin'),
        e
    ))(CurrencyType || {}),
    StockBackgroundName = ((e) => ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'), e))(StockBackgroundName || {});
const root$h = 'Currency_root_3c6cfaf0',
    base$y = 'Currency_37b937ed',
    icon$9 = 'Currency_icon_7e0ceeb1',
    base__small$4 = 'Currency_base__small_3c6cfaf0',
    base__big$1 = 'Currency_base__big_3c6cfaf0',
    base__large = 'Currency_base__large_3c6cfaf0',
    base__extraLarge = 'Currency_base__extraLarge_3c6cfaf0',
    value$1 = 'Currency_value_cb375db',
    value__freeXP = 'Currency_value__freeXP_e27417ca',
    value__credits = 'Currency_value__credits_f58d71c4',
    value__gold = 'Currency_value__gold_b88421af',
    value__xp = 'Currency_value__xp_3c6cfaf0',
    value__crystal = 'Currency_value__crystal_3c6cfaf0',
    value__equipCoin = 'Currency_value__equipCoin_3c6cfaf0',
    value__eliteXP = 'Currency_value__eliteXP_f38577b9',
    value__notEnough = 'Currency_value__notEnough_1800dd2b',
    stock = 'Currency_stock_e14e627',
    stock__indent = 'Currency_stock__indent_cbef6f7b',
    stock__interactive = 'Currency_stock__interactive_ff7f7510',
    stockBackground = 'Currency_stockBackground_aab4a285',
    fadeInWithScale$h = 'Currency_fadeInWithScale_3c6cfaf0',
    slideUp$h = 'Currency_slideUp_3c6cfaf0',
    blink$h = 'Currency_blink_3c6cfaf0',
    scale$h = 'Currency_scale_3c6cfaf0',
    rotate$h = 'Currency_rotate_3c6cfaf0',
    windowIn$h = 'Currency_windowIn_3c6cfaf0',
    fadeOut$h = 'Currency_fadeOut_3c6cfaf0',
    fadeIn$h = 'Currency_fadeIn_3c6cfaf0',
    styles$F = {
        root: root$h,
        base: base$y,
        icon: icon$9,
        base__small: base__small$4,
        base__big: base__big$1,
        base__large: base__large,
        base__extraLarge: base__extraLarge,
        'icon__credits-small': 'Currency_icon__credits-small_76c23d6f',
        'icon__credits-big': 'Currency_icon__credits-big_bc8e9cb0',
        'icon__credits-large': 'Currency_icon__credits-large_dc13c524',
        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_ea333640',
        'icon__gold-small': 'Currency_icon__gold-small_ab0eb1b2',
        'icon__gold-big': 'Currency_icon__gold-big_67832e62',
        'icon__gold-large': 'Currency_icon__gold-large_fff11d66',
        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_ea93cc68',
        'icon__crystal-small': 'Currency_icon__crystal-small_b3d78291',
        'icon__crystal-big': 'Currency_icon__crystal-big_c8ee3685',
        'icon__crystal-large': 'Currency_icon__crystal-large_fcaa61ed',
        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_c177fcd7',
        'icon__xp-small': 'Currency_icon__xp-small_240d5c95',
        'icon__xp-big': 'Currency_icon__xp-big_a031c8d',
        'icon__xp-large': 'Currency_icon__xp-large_3e73c700',
        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_1b022c5',
        'icon__freeXP-small': 'Currency_icon__freeXP-small_5d068d1f',
        'icon__freeXP-big': 'Currency_icon__freeXP-big_a1963736',
        'icon__freeXP-large': 'Currency_icon__freeXP-large_c26792c',
        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_86c9b0dd',
        'icon__eliteXP-small': 'Currency_icon__eliteXP-small_4d5ce7c2',
        'icon__eliteXP-big': 'Currency_icon__eliteXP-big_ad799c',
        'icon__eliteXP-large': 'Currency_icon__eliteXP-large_3c9a1938',
        'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_262c07e7',
        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_5fbf8e4a',
        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_d34f9d8d',
        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_c3d88627',
        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_902046dc',
        value: value$1,
        value__freeXP: value__freeXP,
        value__credits: value__credits,
        value__gold: value__gold,
        value__xp: value__xp,
        value__crystal: value__crystal,
        value__equipCoin: value__equipCoin,
        value__eliteXP: value__eliteXP,
        value__notEnough: value__notEnough,
        stock: stock,
        stock__indent: stock__indent,
        stock__interactive: stock__interactive,
        stockBackground: stockBackground,
        fadeInWithScale: fadeInWithScale$h,
        slideUp: slideUp$h,
        blink: blink$h,
        scale: scale$h,
        rotate: rotate$h,
        windowIn: windowIn$h,
        fadeOut: fadeOut$h,
        fadeIn: fadeIn$h,
    },
    CurrencyComponent = ({
        isDiscount: e,
        isInteractiveDiscount: t,
        size: r,
        type: s,
        value: n,
        discountValue: a,
        showPlus: o,
        isEnough: u = !0,
        stockBackgroundName: i = StockBackgroundName.Red,
        className: l,
        classNames: c,
    }) =>
        jsxRuntimeExports.jsxs('span', {
            className: cx(styles$F.base, styles$F[`base__${r}`], l),
            children: [
                jsxRuntimeExports.jsxs('span', {
                    className: cx(
                        styles$F.value,
                        styles$F[`value__${s}`],
                        !u && styles$F.value__notEnough,
                        null == c ? void 0 : c.value,
                    ),
                    children: [
                        o && n > 0 && '+',
                        jsxRuntimeExports.jsx(FormatNumber, {
                            value: n,
                            format: s === CurrencyType.gold ? 'gold' : 'integral',
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('span', {
                    className: cx(styles$F.icon, styles$F[`icon__${s}-${r}`], null == c ? void 0 : c.icon),
                }),
                e &&
                    jsxRuntimeExports.jsxs('span', {
                        className: cx(
                            styles$F.stock,
                            a && styles$F.stock__indent,
                            t && styles$F.stock__interactive,
                            null == c ? void 0 : c.stock,
                        ),
                        children: [
                            jsxRuntimeExports.jsx('span', {
                                className: styles$F.stockBackground,
                                style: { backgroundImage: `url(R.images.gui.maps.icons.library.${i})` },
                            }),
                            Boolean(a) && a,
                        ],
                    }),
            ],
        }),
    Currency$1 = reactExports.memo(CurrencyComponent),
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
function useRepeatCallback(e, t, r = []) {
    const s = reactExports.useRef(0),
        n = reactExports.useCallback(() => {
            (window.clearInterval(s.current), (s.current = 0));
        }, r || []);
    reactExports.useEffect(() => n, [n]);
    const a = (r ?? []).concat([t]);
    return [
        reactExports.useCallback((r) => {
            (0 !== s.current && n(), (s.current = window.setInterval(() => e(r, !0), t)), e(r, !1));
        }, a),
        n,
    ];
}
const useCallbackEffect = (e, t = []) => {
        const r = reactExports.useRef(),
            s = reactExports.useCallback((...t) => {
                (r.current && r.current(), (r.current = e(...t)));
            }, t);
        return (
            reactExports.useEffect(
                () => () => {
                    r.current && r.current();
                },
                [s],
            ),
            s
        );
    },
    useEmitter = () => {
        const e = reactExports.useMemo(() => ({}), []),
            t = (t) => (e[t] || (e[t] = new Map()), e[t]),
            r = (e, r) => {
                t(e).set(r, r);
            },
            s = (e, r) => {
                t(e).delete(r);
            },
            n = (e, ...r) => {
                for (const s of t(e).values()) s(...r);
            };
        return reactExports.useMemo(() => ({ on: r, off: s, trigger: n }), []);
    };
function throttle(e, t, r, s) {
    let n,
        a = !1,
        o = 0;
    function u() {
        n && clearTimeout(n);
    }
    function i(...i) {
        const l = this,
            c = Date.now() - o;
        function d() {
            ((o = Date.now()), r.apply(l, i));
        }
        a ||
            (s && !n && d(),
            u(),
            void 0 === s && c > e
                ? d()
                : !0 !== t &&
                  (n = setTimeout(
                      s
                          ? function () {
                                n = void 0;
                            }
                          : d,
                      void 0 === s ? e - c : e,
                  )));
    }
    return (
        'boolean' != typeof t && ((s = r), (r = t), (t = void 0)),
        (i.cancel = function () {
            (u(), (a = !0));
        }),
        i
    );
}
function useThrottle(e, t, r) {
    const s = reactExports.useMemo(() => throttle(r, e), t);
    return (reactExports.useEffect(() => s.cancel, [s]), s);
}
var Direction$1 = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(Direction$1 || {});
const defaultSettings$1 = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    createApiHook$1 = ({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: r,
        getDirection: s,
        getWrapperSize: n,
        forceTriggerMouseMove: a,
    }) => {
        const o = (e, r) => {
            const [s, n] = t(e);
            return n <= s ? 0 : clamp(s, n, r);
        };
        return (u = {}) => {
            const { settings: i = defaultSettings$1 } = u,
                l = reactExports.useRef(null),
                c = reactExports.useRef(null),
                d = reactExports.useRef(!1),
                _ = useEmitter(),
                p = useThrottle(
                    () => {
                        a && a();
                    },
                    [],
                    150,
                ),
                [m, E] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = l.current;
                        t && (r(t, e), _.trigger('change', e), a && d.current && p());
                    },
                    onRest: (e) => _.trigger('rest', e),
                    onStart: (e) => _.trigger('start', e),
                    onPause: (e) => _.trigger('pause', e),
                })),
                f = reactExports.useCallback(
                    (e, t, r) => {
                        const s = m.scrollPosition.get(),
                            n = (m.scrollPosition.goal ?? 0) - s;
                        return o(e, t * r + n + s);
                    },
                    [m.scrollPosition],
                ),
                b = reactExports.useCallback(
                    (e, { immediate: t = !1, reset: r = !0 } = {}) => {
                        const s = l.current;
                        s &&
                            E.start({
                                scrollPosition: o(s, e),
                                immediate: t,
                                reset: r,
                                config: i.animationConfig,
                                from: { scrollPosition: o(s, m.scrollPosition.get()) },
                            });
                    },
                    [E, i.animationConfig, m.scrollPosition],
                ),
                x = reactExports.useCallback(
                    (e) => {
                        const t = l.current,
                            r = c.current;
                        if (!t || !r) return;
                        const s = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return n(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(r, i.step),
                            a = f(t, e, s);
                        b(a);
                    },
                    [b, f, i.step],
                ),
                g = reactExports.useCallback(
                    (e) => {
                        (0 !== e.deltaY && x(s(e)),
                            l.current && _.trigger('mouseWheel', e, m.scrollPosition, t(l.current)));
                    },
                    [m.scrollPosition, x, _],
                ),
                h = useCallbackEffect(
                    () =>
                        createLayoutReadyInEffect(() => {
                            const e = l.current;
                            e && (b(o(e, m.scrollPosition.goal), { immediate: !0 }), _.trigger('resizeHandled'));
                        }),
                    [b, m.scrollPosition.goal],
                ),
                y = useEvent(() => {
                    const e = l.current;
                    if (!e) return;
                    const t = o(e, m.scrollPosition.goal);
                    (t !== m.scrollPosition.goal && b(t, { immediate: !0 }), _.trigger('recalculateContent'));
                });
            (reactExports.useEffect(
                () => (
                    window.addEventListener('resize', h),
                    () => {
                        window.removeEventListener('resize', h);
                    }
                ),
                [h],
            ),
                reactExports.useEffect(() => {
                    const e = l.current;
                    if (!e || !a) return;
                    const t = () => {
                            d.current = !0;
                        },
                        r = () => {
                            d.current = !1;
                        };
                    return (
                        e.addEventListener('mouseenter', t),
                        e.addEventListener('mouseleave', r),
                        () => {
                            (e.removeEventListener('mouseenter', t), e.removeEventListener('mouseleave', r));
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
                    clampPosition: o,
                    handleMouseWheel: g,
                    applyScroll: b,
                    applyStepTo: x,
                    contentRef: l,
                    wrapperRef: c,
                    scrollPosition: E,
                    animationScroll: m,
                    recalculateContent: y,
                    events: { on: _.on, off: _.off },
                }),
                [m.scrollPosition, b, x, _.off, _.on, y, g, E, i.step.clampedArrowStepTimeout],
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
            e.style.transform = `translateX(-${0 | (t.value.scrollPosition ?? 0)}px)`;
        },
        getDirection: (e) => (e.deltaY > 1 ? Direction$1.Next : Direction$1.Prev),
        forceTriggerMouseMove: env.view.forceTriggerMouseMove,
    },
    useHorizontalScrollApi = createApiHook$1(DEFAULT_HORIZONTAL_API_CONTEXT),
    base$x = 'Horizontalbar_bdf22414',
    base__active$3 = 'Horizontalbar_base__active_5a3d92a0',
    leftButton = 'Horizontalbar_leftButton_ba80ec4f',
    rightButton = 'Horizontalbar_rightButton_847c1c78',
    track$3 = 'Horizontalbar_track_388b12f',
    thumb$1 = 'Horizontalbar_thumb_9d4dd30f',
    rail$3 = 'Horizontalbar_rail_b8667e3c',
    styles$E = {
        base: base$x,
        base__active: base__active$3,
        leftButton: leftButton,
        rightButton: rightButton,
        track: track$3,
        thumb: thumb$1,
        rail: rail$3,
    },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$2 = 100,
    DISABLE_CLASS$2 = 'disable',
    MIN_THUMB_SIZE$2 = 20,
    MOUSE_BUTTON_LEFT$2 = 0,
    initDraggingState$1 = { pending: !1, offset: 0 },
    getStepByRailClickDefault$1 = (e) => 0.9 * (e.getWrapperSize() ?? 0),
    isBoundThumb = (e, t, r) => r - (e.offsetWidth - t.offsetWidth) >= -0.5,
    emptyFunction$1 = () => {},
    calculateThumbSize$3 = (e, t) => Math.max(MIN_THUMB_SIZE$2, e.offsetWidth * t),
    BarFC$1 = ({
        api: e,
        classNames: t = {},
        getStepByRailClick: r = getStepByRailClickDefault$1,
        onDrag: s = emptyFunction$1,
    }) => {
        const n = reactExports.useRef(null),
            a = reactExports.useRef(null),
            o = reactExports.useRef(null),
            u = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = e.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$2,
            [c, d] = reactExports.useState(initDraggingState$1),
            _ = reactExports.useCallback(
                (e) => {
                    (d(e), i.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: i.current }));
                },
                [s],
            ),
            p = () => {
                const t = u.current,
                    r = i.current,
                    s = e.getWrapperSize(),
                    n = e.getContainerSize();
                if (!(s && t && r && n)) return;
                const l = e.animationScroll.scrollPosition.get(),
                    c = Math.min(1, s / n),
                    d = clamp(0, 1, l / (n - s)),
                    _ = (t.offsetWidth - calculateThumbSize$3(t, c)) * d;
                ((r.style.transform = `translateX(${0 | _}px)`),
                    ((e) => {
                        if (a.current && o.current && u.current && i.current) {
                            if (0 === e)
                                return (
                                    a.current.classList.add(DISABLE_CLASS$2),
                                    void o.current.classList.remove(DISABLE_CLASS$2)
                                );
                            if (isBoundThumb(u.current, i.current, e))
                                return (
                                    a.current.classList.remove(DISABLE_CLASS$2),
                                    void o.current.classList.add(DISABLE_CLASS$2)
                                );
                            (a.current.classList.remove(DISABLE_CLASS$2), o.current.classList.remove(DISABLE_CLASS$2));
                        }
                    })(_));
            },
            m = useEvent(() => {
                ((() => {
                    const t = i.current,
                        r = u.current,
                        s = e.getWrapperSize(),
                        a = e.getContainerSize();
                    if (!(a && t && s && r)) return;
                    const o = Math.min(1, s / a);
                    ((t.style.width = `${calculateThumbSize$3(r, o)}px`),
                        (t.style.display = 'flex'),
                        n.current &&
                            (1 !== o
                                ? n.current.classList.add(styles$E.base__active)
                                : n.current.classList.remove(styles$E.base__active)));
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
                        let r = emptyFunction$1;
                        const s = () => {
                            (r(), (r = createLayoutReadyInEffect(m)));
                        };
                        return (
                            e.events.on('recalculateContent', m),
                            e.events.on('rest', t),
                            e.events.on('change', t),
                            e.events.on('resizeHandled', s),
                            () => {
                                (r(),
                                    e.events.off('recalculateContent', m),
                                    e.events.off('rest', t),
                                    e.events.off('change', t),
                                    e.events.off('resizeHandled', s));
                            }
                        );
                    }),
                [e],
            ),
            reactExports.useEffect(() => {
                if (!c.pending) return;
                const t = env.client.events.mouse.move(([t, r]) => {
                        const n = e.contentRef.current,
                            a = e.wrapperRef.current;
                        if (!n || !a) return;
                        const o = u.current,
                            l = i.current;
                        if (!o || !l) return;
                        if ('inside' === r && t.clientX < 0) return;
                        const d = t.clientX - c.offset - o.getBoundingClientRect().x,
                            _ = (d / o.offsetWidth) * (e.getContainerSize() ?? 0);
                        (e.scrollPosition.start({
                            scrollPosition: e.clampPosition(n, _),
                            reset: !0,
                            immediate: !0,
                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                        }),
                            s({ type: 'dragging', thumb: l, thumbOffset: d, contentOffset: _ }));
                    }),
                    r = env.client.events.mouse.up(() => {
                        (t(), _(initDraggingState$1));
                    });
                return () => {
                    (t(), r());
                };
            }, [e, c.offset, c.pending, s, _]));
        const [E, f] = useRepeatCallback((t) => e.applyStepTo(t), l, [e]);
        reactExports.useEffect(
            () => (document.addEventListener('mouseup', f, !0), () => document.removeEventListener('mouseup', f, !0)),
            [f],
        );
        const b = (e) => {
            e.target.classList.contains(DISABLE_CLASS$2) || playSound$1('highlight');
        };
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$E.base, t.base),
            ref: n,
            onWheel: e.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$E.leftButton, t.leftButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS$2) ||
                            e.button !== MOUSE_BUTTON_LEFT$2 ||
                            (playSound$1('play'), E(Direction$1.Next));
                    },
                    onMouseUp: f,
                    ref: a,
                    onMouseEnter: b,
                }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$E.track, t.track),
                    onMouseDown: (t) => {
                        const s = i.current;
                        if (s && t.button === MOUSE_BUTTON_LEFT$2)
                            if ((playSound$1('play'), t.target === s))
                                _({ pending: !0, offset: t.screenX - s.getBoundingClientRect().x });
                            else {
                                ((t) => {
                                    const s = i.current,
                                        n = e.contentRef.current;
                                    if (!s || !n) return;
                                    const a = r(e);
                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                })(t.screenX > s.getBoundingClientRect().x ? Direction$1.Prev : Direction$1.Next);
                            }
                    },
                    ref: u,
                    onMouseEnter: b,
                    children: [
                        jsxRuntimeExports.jsx('div', { ref: i, className: cx(styles$E.thumb, t.thumb) }),
                        jsxRuntimeExports.jsx('div', { className: cx(styles$E.rail, t.rail) }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$E.rightButton, t.rightButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS$2) ||
                            e.button !== MOUSE_BUTTON_LEFT$2 ||
                            (playSound$1('play'), E(Direction$1.Prev));
                    },
                    onMouseUp: f,
                    ref: o,
                    onMouseEnter: b,
                }),
            ],
        });
    },
    Bar$3 = reactExports.memo(BarFC$1),
    base$w = 'Horizontalscroll_f316f2c6',
    wrapper$3 = 'Horizontalscroll_wrapper_a8daa0f5',
    defaultScrollArea$1 = 'Horizontalscroll_defaultScrollArea_a99fc00c',
    styles$D = { base: base$w, wrapper: wrapper$3, defaultScrollArea: defaultScrollArea$1 },
    DefaultScroll$3 = ({
        children: e,
        api: t,
        className: r,
        barClassNames: s,
        areaClassName: n,
        classNames: a,
        scrollClassName: o,
        getStepByRailClick: u,
        onDrag: i,
    }) => {
        const l = reactExports.useMemo(() => {
                const e = s || {};
                return { ...e, base: cx(styles$D.base, e.base) };
            }, [s]),
            c = reactExports.useMemo(() => ({ ...t, handleMouseWheel: () => {} }), [t]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$D.defaultScroll, r),
            onWheel: t.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$D.defaultScrollArea, n),
                    children: jsxRuntimeExports.jsx(Area$3, { className: o, api: c, classNames: a, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$3, { getStepByRailClick: u, api: t, onDrag: i, classNames: l }),
            ],
        });
    },
    Area$3 = ({ api: e, className: t, classNames: r, children: s }) => (
        reactExports.useEffect(() => createLayoutReadyInEffect(e.recalculateContent)),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$D.base, t),
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$D.wrapper, null == r ? void 0 : r.wrapper),
                onWheel: e.handleMouseWheel,
                ref: e.wrapperRef,
                children: jsxRuntimeExports.jsx('div', {
                    className: cx(styles$D.content, null == r ? void 0 : r.content),
                    ref: e.contentRef,
                    children: s,
                }),
            }),
        })
    );
((Area$3.Bar = Bar$3), (Area$3.Default = DefaultScroll$3));
const Horizontal = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                Area: Area$3,
                Bar: Bar$3,
                DefaultScroll: DefaultScroll$3,
                Direction: Direction$1,
                defaultSettings: defaultSettings$1,
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
        getDirection: (e) => (e.deltaY > 1 ? Direction$1.Next : Direction$1.Prev),
    },
    useVerticalScrollApi = createApiHook$1(DEFAULT_VERTICAL_API_CONTEXT),
    base$v = 'Verticalbar_89dc020b',
    base__active$2 = 'Verticalbar_base__active_1e0d5e44',
    topButton = 'Verticalbar_topButton_1ce852b9',
    bottomButton = 'Verticalbar_bottomButton_bc76d779',
    track$2 = 'Verticalbar_track_7532d39a',
    thumb = 'Verticalbar_thumb_264988ce',
    rail$2 = 'Verticalbar_rail_85a58f07',
    styles$C = {
        base: base$v,
        base__active: base__active$2,
        topButton: topButton,
        bottomButton: bottomButton,
        track: track$2,
        thumb: thumb,
        rail: rail$2,
    },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$1 = 100,
    DISABLE_CLASS$1 = 'disable',
    MIN_THUMB_SIZE$1 = 20,
    MOUSE_BUTTON_LEFT$1 = 0,
    emptyFunction = () => {},
    initDraggingState = { pending: !1, offset: 0 },
    getStepByRailClickDefault = (e) => 0.9 * (e.getWrapperSize() ?? 0),
    isBottomBoundThumb = (e, t, r) => r - (e.offsetHeight - t.offsetHeight) >= -0.5,
    handleContainer = (e, t) => {
        e.contentRef.current && t(e.contentRef.current);
    },
    calculateThumbSize$2 = (e, t) => Math.max(MIN_THUMB_SIZE$1, e.offsetHeight * t),
    BarFC = ({
        api: e,
        classNames: t = {},
        getStepByRailClick: r = getStepByRailClickDefault,
        onDrag: s = emptyFunction,
    }) => {
        const n = reactExports.useRef(null),
            a = reactExports.useRef(null),
            o = reactExports.useRef(null),
            u = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = e.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT$1,
            [c, d] = reactExports.useState(initDraggingState),
            _ = reactExports.useCallback(
                (e) => {
                    (d(e), i.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: i.current }));
                },
                [s],
            ),
            p = useEvent(() => {
                const t = i.current,
                    r = u.current,
                    s = e.getWrapperSize(),
                    a = e.getContainerSize();
                if (!(s && a && t && r)) return;
                const o = Math.min(1, s / a);
                return (
                    (t.style.height = `${calculateThumbSize$2(r, o)}px`),
                    (t.style.display = 'flex'),
                    n.current &&
                        (1 !== o
                            ? n.current.classList.add(styles$C.base__active)
                            : n.current.classList.remove(styles$C.base__active)),
                    o
                );
            }),
            m = useEvent(() => {
                const t = u.current,
                    r = i.current,
                    s = e.getWrapperSize(),
                    n = e.getContainerSize();
                if (!(s && t && r && n)) return;
                const l = e.animationScroll.scrollPosition.get(),
                    c = Math.min(1, s / n),
                    d = clamp(0, 1, l / (n - s)),
                    _ = (t.offsetHeight - calculateThumbSize$2(t, c)) * d;
                ((r.style.transform = `translateY(${0 | _}px)`),
                    ((e) => {
                        if (a.current && o.current && u.current && i.current) {
                            if (0 === Math.round(e))
                                return (
                                    a.current.classList.add(DISABLE_CLASS$1),
                                    void o.current.classList.remove(DISABLE_CLASS$1)
                                );
                            if (isBottomBoundThumb(u.current, i.current, e))
                                return (
                                    a.current.classList.remove(DISABLE_CLASS$1),
                                    void o.current.classList.add(DISABLE_CLASS$1)
                                );
                            (a.current.classList.remove(DISABLE_CLASS$1), o.current.classList.remove(DISABLE_CLASS$1));
                        }
                    })(_));
            }),
            E = useEvent(() => {
                handleContainer(e, () => {
                    (p(), m());
                });
            });
        (reactExports.useEffect(() => createLayoutReadyInEffect(E)),
            reactExports.useEffect(() => {
                const t = () => {
                    handleContainer(e, () => {
                        m();
                    });
                };
                let r = emptyFunction;
                const s = () => {
                    (r(), (r = createLayoutReadyInEffect(E)));
                };
                return (
                    e.events.on('recalculateContent', E),
                    e.events.on('rest', t),
                    e.events.on('change', t),
                    e.events.on('resizeHandled', s),
                    () => {
                        (r(),
                            e.events.off('recalculateContent', E),
                            e.events.off('rest', t),
                            e.events.off('change', t),
                            e.events.off('resizeHandled', s));
                    }
                );
            }, [e]),
            reactExports.useEffect(() => {
                if (!c.pending) return;
                const t = env.client.events.mouse.up(() => {
                        _(initDraggingState);
                    }),
                    r = env.client.events.mouse.move(([t]) => {
                        handleContainer(e, (r) => {
                            const n = u.current,
                                a = i.current,
                                o = e.getContainerSize();
                            if (!n || !a || !o) return;
                            const l = t.screenY - c.offset - n.getBoundingClientRect().y,
                                d = (l / n.offsetHeight) * o;
                            (e.scrollPosition.start({
                                scrollPosition: e.clampPosition(r, d),
                                reset: !0,
                                immediate: !0,
                                from: { scrollPosition: r.scrollTop },
                            }),
                                s({ type: 'dragging', thumb: a, thumbOffset: l, contentOffset: d }));
                        });
                    });
                return () => {
                    (t(), r());
                };
            }, [e, c.offset, c.pending, s, _]));
        const [f, b] = useRepeatCallback((t) => e.applyStepTo(t), l, [e]);
        reactExports.useEffect(
            () => (document.addEventListener('mouseup', b, !0), () => document.removeEventListener('mouseup', b, !0)),
            [b],
        );
        const x = (e) => {
            e.target.classList.contains(DISABLE_CLASS$1) || playSound$1('highlight');
        };
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$C.base, t.base),
            ref: n,
            onWheel: e.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$C.topButton, t.topButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS$1) ||
                            e.button !== MOUSE_BUTTON_LEFT$1 ||
                            (playSound$1('play'), f(Direction$1.Next));
                    },
                    ref: a,
                    onMouseEnter: x,
                }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$C.track, t.track),
                    onMouseDown: (t) => {
                        const s = i.current;
                        if (s && t.button === MOUSE_BUTTON_LEFT$1)
                            if ((playSound$1('play'), t.target === s))
                                _({ pending: !0, offset: t.screenY - s.getBoundingClientRect().y });
                            else {
                                ((t) => {
                                    i.current &&
                                        handleContainer(e, (s) => {
                                            if (!s) return;
                                            const n = r(e),
                                                a = e.clampPosition(s, s.scrollTop + n * t);
                                            e.applyScroll(a);
                                        });
                                })(t.screenY > s.getBoundingClientRect().y ? Direction$1.Prev : Direction$1.Next);
                            }
                    },
                    ref: u,
                    onMouseEnter: x,
                    children: [
                        jsxRuntimeExports.jsx('div', { ref: i, className: cx(styles$C.thumb, t.thumb) }),
                        jsxRuntimeExports.jsx('div', { className: cx(styles$C.rail, t.rail) }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$C.bottomButton, t.bottomButton),
                    onMouseDown: (e) => {
                        e.target.classList.contains(DISABLE_CLASS$1) ||
                            e.button !== MOUSE_BUTTON_LEFT$1 ||
                            (playSound$1('play'), f(Direction$1.Prev));
                    },
                    onMouseUp: b,
                    ref: o,
                    onMouseEnter: x,
                }),
            ],
        });
    },
    Bar$2 = reactExports.memo(BarFC),
    content$5 = 'Verticalscroll_content_848080fa',
    defaultScroll$1 = 'Verticalscroll_defaultScroll_5f9d259',
    area$1 = 'Verticalscroll_area_39a5f7ae',
    styles$B = { content: content$5, defaultScroll: defaultScroll$1, area: area$1 },
    DefaultScroll$2 = ({
        children: e,
        api: t,
        className: r,
        barClassNames: s,
        areaClassName: n,
        scrollClassName: a,
        scrollClassNames: o,
        getStepByRailClick: u,
        onDrag: i,
    }) => {
        const l = reactExports.useMemo(() => {
                const e = s || {};
                return { ...e, base: cx(styles$B.base, e.base) };
            }, [s]),
            c = reactExports.useMemo(() => ({ ...t, handleMouseWheel: () => {} }), [t]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$B.defaultScroll, r),
            onWheel: t.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$B.area, n),
                    children: jsxRuntimeExports.jsx(Area$2, { className: a, classNames: o, api: c, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$2, { getStepByRailClick: u, api: t, onDrag: i, classNames: l }),
            ],
        });
    },
    Area$2 = ({ className: e, classNames: t, children: r, api: s }) => (
        reactExports.useEffect(() => createLayoutReadyInEffect(s.recalculateContent)),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$B.base, e),
            ref: s.wrapperRef,
            onWheel: s.handleMouseWheel,
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$B.content, null == t ? void 0 : t.content),
                ref: s.contentRef,
                children: r,
            }),
        })
    );
Area$2.Default = DefaultScroll$2;
const Vertical = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                Area: Area$2,
                Bar: Bar$2,
                Default: DefaultScroll$2,
                useVerticalScrollApi: useVerticalScrollApi,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    Scroll = { Vertical: Vertical, Horizontal: Horizontal },
    themes = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    sizes$7 = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
function defineStyledComponent(e, t, r) {
    var s;
    const n =
            'object' == typeof t && 'cva' in t
                ? null == (s = t.cva)
                    ? void 0
                    : s.variants
                : null == r
                  ? void 0
                  : r.variants,
        a = n ? Object.keys(n) : [];
    if ('object' == typeof t) {
        const r = t,
            s = cva(r.className, r.cva),
            n = r.element,
            o = reactExports.forwardRef(function (e, t) {
                return reactExports.createElement(n, {
                    ...('function' == typeof n ? e : cleanProps(a, e)),
                    ref: t,
                    className: s(e),
                });
            });
        return ((o.displayName = e), r.cva && (o.cva = r.cva), o);
    }
    const o = cva(t, r),
        u = reactExports.forwardRef(function (t, r) {
            return jsxRuntimeExports.jsx('div', { 'data-name': e, ...cleanProps(a, t), ref: r, className: o(t) });
        });
    return ((u.displayName = e), r && (u.cva = r), u);
}
function cleanProps(e, t) {
    if (0 === e.length) return t;
    const r = { ...t };
    for (const s of e) delete r[s];
    return r;
}
const base$u = 'HeadlessButton_df8536fc',
    styles$A = { base: base$u },
    HeadlessButtonBase = defineStyledComponent('Button', { element: 'button', className: styles$A.base }),
    HeadlessButton = reactExports.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: r, soundTarget: s, disabled: n = !1, silent: a = !1, ...o },
        u,
    ) {
        const i = useSounds();
        return jsxRuntimeExports.jsx(HeadlessButtonBase, {
            ...o,
            ref: u,
            onMouseEnter: function (e) {
                (n || a || i.play('mouse-enter', { target: s || 'Button', original: e }), null == r || r(e));
            },
            onClick: function (e) {
                n || (a || i.play('click', { target: s || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    background$4 = 'Button_background_98ebcfb8',
    border$3 = 'Button_border_7e6390d7',
    overlay$1 = 'Button_overlay_174632c8',
    root$g = 'Button_root_6bcdc8c',
    base$t = 'Button_70871946',
    base__enabled$1 = 'Button_base__enabled_96634d40',
    base__disabled$2 = 'Button_base__disabled_b713e04a',
    content$4 = 'Button_content_298de63f',
    content__fontAligned = 'Button_content__fontAligned_66115778',
    fadeInWithScale$g = 'Button_fadeInWithScale_6bcdc8c',
    slideUp$g = 'Button_slideUp_6bcdc8c',
    blink$g = 'Button_blink_6bcdc8c',
    scale$g = 'Button_scale_6bcdc8c',
    rotate$g = 'Button_rotate_6bcdc8c',
    windowIn$g = 'Button_windowIn_6bcdc8c',
    fadeOut$g = 'Button_fadeOut_6bcdc8c',
    fadeIn$g = 'Button_fadeIn_6bcdc8c',
    styles$z = {
        background: background$4,
        border: border$3,
        overlay: overlay$1,
        root: root$g,
        base: base$t,
        base__enabled: base__enabled$1,
        base__disabled: base__disabled$2,
        'base__size-extraSmall': 'Button_base__size-extraSmall_d0cdb5ed',
        'base__size-small': 'Button_base__size-small_fc7095a4',
        'base__size-medium': 'Button_base__size-medium_814d61f0',
        'base__size-large': 'Button_base__size-large_83da852e',
        'base__theme-primary': 'Button_base__theme-primary_8ba55469',
        'base__theme-secondary': 'Button_base__theme-secondary_3fa4afc',
        content: content$4,
        content__fontAligned: content__fontAligned,
        fadeInWithScale: fadeInWithScale$g,
        slideUp: slideUp$g,
        blink: blink$g,
        scale: scale$g,
        rotate: rotate$g,
        windowIn: windowIn$g,
        fadeOut: fadeOut$g,
        fadeIn: fadeIn$g,
    },
    Button = reactExports.forwardRef(function (
        {
            children: e,
            size: t = sizes$7.large,
            theme: r = themes.primary,
            disabled: s = !1,
            silent: n = !1,
            autoAlignContent: a = !0,
            classNames: o,
            className: u,
            ...i
        },
        l,
    ) {
        return jsxRuntimeExports.jsxs(HeadlessButton, {
            ...i,
            ref: l,
            silent: n,
            disabled: s,
            className: cx(
                styles$z.base,
                styles$z[`base__size-${t}`],
                styles$z[`base__theme-${r}`],
                s ? styles$z.base__disabled : styles$z.base__enabled,
                u,
                null == o ? void 0 : o.base,
            ),
            onClick: function (e) {
                var t;
                s || null == (t = i.onClick) || t.call(i, e);
            },
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$z.background, null == o ? void 0 : o.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$z.border, null == o ? void 0 : o.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$z.overlay, null == o ? void 0 : o.overlay) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$z.content, a && styles$z.content__fontAligned, null == o ? void 0 : o.content),
                    children: e,
                }),
            ],
        });
    });
((Button.themes = themes), (Button.sizes = sizes$7));
const types$2 = {
        tankXP: 'tankXP',
        freeXP: 'freeXP',
        credits: 'credits',
        gold: 'gold',
        crystal: 'crystal',
        equipCoin: 'equipCoin',
        stpCoin: 'stpcoin',
        brCoin: 'brcoin',
        eliteXp: 'eliteXp',
        depot: 'depot',
        vehicle: 'vehicle',
        crew: 'crew',
        custom: 'custom',
        xp: 'xp',
        brProgressionToken: 'brProgressionToken',
        battlePassPoints: 'battlePassPoints',
    },
    currencyTypes = Object.values(types$2),
    discountTypes = { currency: 'currency', experience: 'experience' },
    sizes$6 = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    imageSizes = {
        [sizes$6.extraSmall]: 16,
        [sizes$6.small]: 24,
        [sizes$6.medium]: 32,
        [sizes$6.large]: 48,
        [sizes$6.extraLarge]: 80,
        [sizes$6.xxl]: 96,
    },
    upscaledImageSizes = {
        [sizes$6.extraSmall]: 32,
        [sizes$6.small]: 48,
        [sizes$6.medium]: 32,
        [sizes$6.large]: 96,
        [sizes$6.extraLarge]: 80,
        [sizes$6.xxl]: 96,
    },
    discountSizesConfig = {
        [sizes$6.extraSmall]: { width: '60rem', height: '36rem' },
        [sizes$6.small]: { width: '80rem', height: '48rem' },
        [sizes$6.medium]: { width: '80rem', height: '48rem' },
        [sizes$6.large]: { width: '106rem', height: '64rem' },
        [sizes$6.extraLarge]: { width: '140rem', height: '84rem' },
        [sizes$6.xxl]: { width: '140rem', height: '84rem' },
    },
    root$f = 'Currency_root_271064ec',
    base$s = 'Currency_72d4be39',
    base__reverse = 'Currency_base__reverse_f12e61b0',
    base__notEnough = 'Currency_base__notEnough_9a7842f',
    base__credits = 'Currency_base__credits_7b9ae721',
    base__gold$1 = 'Currency_base__gold_d6e3cbc',
    base__freeXP = 'Currency_base__freeXP_d29d5a57',
    base__crystal = 'Currency_base__crystal_f830cb47',
    base__tankXP = 'Currency_base__tankXP_1707c68b',
    fadeInWithScale$f = 'Currency_fadeInWithScale_271064ec',
    slideUp$f = 'Currency_slideUp_271064ec',
    blink$f = 'Currency_blink_271064ec',
    scale$f = 'Currency_scale_271064ec',
    rotate$f = 'Currency_rotate_271064ec',
    windowIn$f = 'Currency_windowIn_271064ec',
    fadeOut$f = 'Currency_fadeOut_271064ec',
    fadeIn$f = 'Currency_fadeIn_271064ec',
    styles$y = {
        root: root$f,
        base: base$s,
        base__reverse: base__reverse,
        base__notEnough: base__notEnough,
        base__credits: base__credits,
        base__gold: base__gold$1,
        base__freeXP: base__freeXP,
        base__crystal: base__crystal,
        base__tankXP: base__tankXP,
        fadeInWithScale: fadeInWithScale$f,
        slideUp: slideUp$f,
        blink: blink$f,
        scale: scale$f,
        rotate: rotate$f,
        windowIn: windowIn$f,
        fadeOut: fadeOut$f,
        fadeIn: fadeIn$f,
    },
    intl = resources.resolve('intl'),
    Base$9 = defineStyledComponent('Currency', styles$y.base, {
        variants: { reverse: { true: styles$y.base__reverse } },
    });
function formatCurrencyValue(e, t) {
    const r = t === types$2.gold ? 'gold' : 'integral';
    return Array.isArray(e)
        ? e.map((e) => ('number' == typeof e ? intl.formatNumber(r, e) : e))
        : 'number' == typeof e
          ? intl.formatNumber(r, e)
          : e;
}
function Currency({
    children: e,
    type: t,
    className: r,
    classNames: s,
    imagePath: n,
    size: a = sizes$6.small,
    enough: o = !0,
    ...u
}) {
    const i = imageSizes[a],
        l = `${t}_${i}x${i}`,
        c = upscaledImageSizes[a],
        d = `${t}_${c}x${c}`,
        _ = n || currencyTypes.includes(t),
        p = useUpscale(`library.currency.${l}`, `library.currency.${d}`);
    return jsxRuntimeExports.jsxs(Base$9, {
        ...u,
        className: cx(null == s ? void 0 : s.base, o ? styles$y[`base__${t}`] : styles$y.base__notEnough, r),
        children: [
            _ &&
                jsxRuntimeExports.jsx(Image, {
                    width: i,
                    height: i,
                    path: n ?? p,
                    className: null == s ? void 0 : s.icon,
                }),
            formatCurrencyValue(e, t),
        ],
    });
}
((Currency.sizes = sizes$6), (Currency.types = types$2));
const root$e = 'WithDiscount_root_60ee455a',
    base$r = 'WithDiscount_b8b3aa7f',
    discount = 'WithDiscount_discount_f7ce1b97',
    icon$8 = 'WithDiscount_icon_a6c57ca8',
    icon__extraSmall = 'WithDiscount_icon__extraSmall_97673105',
    icon__small$1 = 'WithDiscount_icon__small_60ee455a',
    icon__medium = 'WithDiscount_icon__medium_2877fd99',
    icon__large = 'WithDiscount_icon__large_6c06eeb7',
    icon__extraLarge = 'WithDiscount_icon__extraLarge_9d22aa45',
    icon__xxl = 'WithDiscount_icon__xxl_4080bb18',
    fadeInWithScale$e = 'WithDiscount_fadeInWithScale_60ee455a',
    slideUp$e = 'WithDiscount_slideUp_60ee455a',
    blink$e = 'WithDiscount_blink_60ee455a',
    scale$e = 'WithDiscount_scale_60ee455a',
    rotate$e = 'WithDiscount_rotate_60ee455a',
    windowIn$e = 'WithDiscount_windowIn_60ee455a',
    fadeOut$e = 'WithDiscount_fadeOut_60ee455a',
    fadeIn$e = 'WithDiscount_fadeIn_60ee455a',
    styles$x = {
        root: root$e,
        base: base$r,
        discount: discount,
        icon: icon$8,
        icon__extraSmall: icon__extraSmall,
        icon__small: icon__small$1,
        icon__medium: icon__medium,
        icon__large: icon__large,
        icon__extraLarge: icon__extraLarge,
        icon__xxl: icon__xxl,
        fadeInWithScale: fadeInWithScale$e,
        slideUp: slideUp$e,
        blink: blink$e,
        scale: scale$e,
        rotate: rotate$e,
        windowIn: windowIn$e,
        fadeOut: fadeOut$e,
        fadeIn: fadeIn$e,
    };
function WithDiscount({
    children: e,
    imagePath: t,
    size: r = sizes$6.small,
    customImageSize: s,
    type: n,
    enabled: a = !1,
    className: o,
    classNames: u,
}) {
    const i = s ?? discountSizesConfig[r];
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$x.base, null == u ? void 0 : u.base, o),
        children: [
            e,
            a &&
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$x.discount,
                        null == u ? void 0 : u.discount,
                        n === discountTypes.experience && styles$x.discount__experience,
                    ),
                    children: jsxRuntimeExports.jsx(Image, {
                        width: i.width,
                        height: i.height,
                        path: t ?? `library.currency.discount_${n}_${r === sizes$6.xxl ? sizes$6.extraLarge : r}`,
                        className: cx(styles$x.icon, null == u ? void 0 : u.icon, styles$x[`icon__${r}`]),
                    }),
                }),
        ],
    });
}
const background$3 = 'Checkbox_background_ae1fc797',
    border$2 = 'Checkbox_border_e1946121',
    overlay = 'Checkbox_overlay_de55e0a5',
    base$q = 'Checkbox_e00b9a0',
    base__enabled = 'Checkbox_base__enabled_5bfdfae9',
    label$2 = 'Checkbox_label_58a00a56',
    base__small$3 = 'Checkbox_base__small_70ef629e',
    base__medium$2 = 'Checkbox_base__medium_70ef629e',
    base__checked = 'Checkbox_base__checked_70ef629e',
    checkIcon = 'Checkbox_checkIcon_968885f3',
    check = 'Checkbox_check_8341731a',
    styles$w = {
        background: background$3,
        border: border$2,
        overlay: overlay,
        base: base$q,
        base__enabled: base__enabled,
        label: label$2,
        base__small: base__small$3,
        base__medium: base__medium$2,
        base__checked: base__checked,
        checkIcon: checkIcon,
        check: check,
    },
    Check = reactExports.forwardRef(function ({ classNames: e, children: t, ...r }, s) {
        return jsxRuntimeExports.jsxs('div', {
            ...r,
            ref: s,
            className: cx(styles$w.check, r.className, null == e ? void 0 : e.base),
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$w.background, null == e ? void 0 : e.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$w.border, null == e ? void 0 : e.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$w.overlay, null == e ? void 0 : e.overlay) }),
                t,
            ],
        });
    }),
    sizes$5 = { medium: 'medium', small: 'small' },
    Base$8 = defineStyledComponent('Checkbox', styles$w.base, {
        variants: {
            size: { [sizes$5.small]: styles$w.base__small, [sizes$5.medium]: styles$w.base__medium },
            checked: { true: styles$w.base__checked },
            state: { enabled: styles$w.base__enabled },
        },
    }),
    HeadlessCheckbox = reactExports.forwardRef(function (
        {
            checked: e,
            size: t = sizes$5.medium,
            disabled: r = !1,
            children: s,
            onMouseEnter: n,
            onClick: a,
            onCheckedChange: o,
            ...u
        },
        i,
    ) {
        const l = useSounds();
        return jsxRuntimeExports.jsx(Base$8, {
            ...u,
            ref: i,
            size: t,
            checked: e,
            state: r ? void 0 : 'enabled',
            onMouseEnter: function (e) {
                (l.play('mouse-enter', { target: Base$8.displayName, original: e }), null == n || n(e));
            },
            onClick: function (t) {
                (l.play('click', { target: Base$8.displayName, original: t }), null == a || a(t), o(!e));
            },
            children: s,
        });
    });
function Label({ className: e, children: t }) {
    return jsxRuntimeExports.jsx('div', { className: cx(styles$w.label, e), children: t });
}
const Checkbox = reactExports.forwardRef(function (
        { checked: e, classNames: t, children: r, checkPath: s = 'ui_kit.checkbox.icon_check', ...n },
        a,
    ) {
        return jsxRuntimeExports.jsxs(HeadlessCheckbox, {
            ...n,
            ref: a,
            checked: e,
            children: [
                jsxRuntimeExports.jsx(Check, {
                    className: null == t ? void 0 : t.check,
                    children: jsxRuntimeExports.jsx(Image, {
                        path: s,
                        className: cx(styles$w.checkIcon, null == t ? void 0 : t.checkIcon),
                    }),
                }),
                r && jsxRuntimeExports.jsx(Label, { className: null == t ? void 0 : t.label, children: r }),
            ],
        });
    }),
    Context$2 = reactExports.createContext(void 0);
function useHorizontalScroll() {
    const e = reactExports.useContext(Context$2);
    if (!e) throw new Error('useHorizontalScroll must be used within a Scroll.Horizontal.Base component');
    return e;
}
var Direction = ((e) => ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e))(Direction || {});
const defaultSettings = {
        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
        animationConfig: { tension: 170, friction: 26 },
    },
    createApiHook = ({
        getContainerSize: e,
        getBounds: t,
        setScrollPosition: r,
        getDirection: s,
        getWrapperSize: n,
        triggerMouseMoveOnUpdate: a = !1,
    }) => {
        const o = (e, r) => {
            const [s, n] = t(e);
            return clamp$1(s, n, r);
        };
        return (u = {}) => {
            const { settings: i = defaultSettings } = u,
                [l, c] = reactExports.useState(!1),
                d = reactExports.useRef(null),
                _ = reactExports.useRef(null),
                p = reactExports.useRef({ wrapper: 0, container: 0 }),
                m = useEmitter$1(),
                E = useThrottle$1(
                    () => {
                        forceTriggerMouseMove$1();
                    },
                    [],
                    150,
                ),
                [f, b] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = d.current;
                        t && (r(t, e), m.trigger('change', e));
                    },
                    onRest: (e) => m.trigger('rest', e),
                    onStart: (e) => m.trigger('start', e),
                    onPause: (e) => m.trigger('pause', e),
                })),
                x = reactExports.useCallback(
                    (e, t, r) => {
                        const s = f.scrollPosition.get(),
                            n = (f.scrollPosition.goal ?? 0) - s;
                        return o(e, t * r + n + s);
                    },
                    [f.scrollPosition],
                ),
                g = reactExports.useCallback(
                    function (e, { immediate: t = !1, reset: r = !0 } = {}) {
                        const s = d.current;
                        if (!s) return;
                        const n = o(s, e);
                        f.scrollPosition.goal !== n &&
                            b.start({
                                scrollPosition: n,
                                immediate: t,
                                reset: r,
                                config: i.animationConfig,
                                from: { scrollPosition: o(s, f.scrollPosition.get()) },
                                onChange: () => {
                                    a && E();
                                },
                            });
                    },
                    [f.scrollPosition, b, i.animationConfig, E],
                ),
                h = reactExports.useCallback(
                    function (e) {
                        const t = d.current,
                            r = _.current;
                        if (!t || !r) return;
                        const s = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return n(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(r, i.step),
                            a = x(t, e, s);
                        g(a);
                    },
                    [g, x, i.step],
                ),
                y = reactExports.useCallback(
                    function (e) {
                        l ||
                            (0 !== e.deltaY && h(s(e)),
                            d.current && m.trigger('mouseWheel', e, f.scrollPosition, t(d.current)));
                    },
                    [f.scrollPosition, h, m, l],
                ),
                v = reactExports.useCallback(
                    function () {
                        const e = d.current;
                        e && (g(o(e, f.scrollPosition.goal), { immediate: !0 }), m.trigger('resizeHandled'));
                    },
                    [g, f.scrollPosition.goal, m],
                );
            useRefResizeObserver(_, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const r = n(t);
                p.current.wrapper !== r && v();
            });
            const C = useEvent$1(function () {
                    const t = d.current;
                    if (!t) return;
                    const r = e(t),
                        s = _.current ? n(_.current) : 0;
                    if (p.current.container !== r || p.current.wrapper !== s) {
                        const e = o(t, f.scrollPosition.goal);
                        (e !== f.scrollPosition.goal && g(e, { immediate: !0 }),
                            (p.current.container = r),
                            (p.current.wrapper = s),
                            m.trigger('recalculateContent'));
                    }
                }),
                A = useSkipFrame();
            reactExports.useEffect(() => addEventListener(window, 'resize', () => A.run(v)), [v, A]);
            return reactExports.useMemo(
                () => ({
                    getWrapperSize: () => (_.current ? n(_.current) : void 0),
                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                    getBounds: () =>
                        d.current ? t(d.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: i.step.clampedArrowStepTimeout,
                    settings: i,
                    clampPosition: o,
                    handleMouseWheel: y,
                    applyScroll: g,
                    applyStepTo: h,
                    contentRef: d,
                    wrapperRef: _,
                    scrollPosition: b,
                    animationScroll: f,
                    recalculateContent: C,
                    disabled: l,
                    setDisabled: c,
                    events: { on: m.on, off: m.off },
                }),
                [i, y, g, h, b, f, C, l, c, m.on, m.off],
            );
        };
    },
    DEFAULT_HORIZONTAL_API_CONFIG = {
        getBounds: (e) => {
            var t;
            return [0, e.offsetWidth - ((null == (t = e.parentElement) ? void 0 : t.offsetWidth) ?? 0)];
        },
        getContainerSize: (e) => e.offsetWidth,
        getWrapperSize: (e) => e.offsetWidth,
        setScrollPosition: (e, t) => {
            e.style.transform = `translateX(-${0 | (t.value.scrollPosition ?? 0)}px)`;
        },
        getDirection: (e) => (e.deltaY > 1 ? Direction.Next : Direction.Prev),
        triggerMouseMoveOnUpdate: !0,
    },
    useApi$1 = createApiHook(DEFAULT_HORIZONTAL_API_CONFIG),
    IGNORE_DEFAULT = [2, 2];
function useScrollBounding(e, [t, r] = IGNORE_DEFAULT) {
    const [s, n] = reactExports.useState(!0),
        [a, o] = reactExports.useState(!0);
    return (
        reactExports.useEffect(() => {
            function s() {
                if (!e.contentRef.current) return;
                const s = e.animationScroll.scrollPosition.get(),
                    [a, u] = e.getBounds(),
                    i = s >= u - r;
                (n(s <= a + t), o(i));
            }
            return new DisposeBuilder()
                .add(createLayoutReadyInEffect$1(s))
                .add(e.events.on('resizeHandled', s))
                .add(e.events.on('recalculateContent', s))
                .add(e.events.on('change', s)).dispose;
        }, [e, t, r]),
        [s, a]
    );
}
const scrollOrientations = { horizontal: 'horizontal', vertical: 'vertical' },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT = 100,
    MOUSE_BUTTON_LEFT = 0,
    background$2 = 'Thumb_background_7f3dd6ac',
    border$1 = 'Thumb_border_5749138b',
    root$d = 'Thumb_root_830942bb',
    innerBorder = 'Thumb_innerBorder_42bafd18',
    icon$7 = 'Thumb_icon_dca8bf26',
    base$p = 'Thumb_6ff3e706',
    base__vertical = 'Thumb_base__vertical_55a67c91',
    base__horizontal = 'Thumb_base__horizontal_27ca7ace',
    base__active$1 = 'Thumb_base__active_830942bb',
    fadeInWithScale$d = 'Thumb_fadeInWithScale_830942bb',
    slideUp$d = 'Thumb_slideUp_830942bb',
    blink$d = 'Thumb_blink_830942bb',
    scale$d = 'Thumb_scale_830942bb',
    rotate$d = 'Thumb_rotate_830942bb',
    windowIn$d = 'Thumb_windowIn_830942bb',
    fadeOut$d = 'Thumb_fadeOut_830942bb',
    fadeIn$d = 'Thumb_fadeIn_830942bb',
    styles$v = {
        background: background$2,
        border: border$1,
        root: root$d,
        innerBorder: innerBorder,
        icon: icon$7,
        base: base$p,
        base__vertical: base__vertical,
        base__horizontal: base__horizontal,
        base__active: base__active$1,
        fadeInWithScale: fadeInWithScale$d,
        slideUp: slideUp$d,
        blink: blink$d,
        scale: scale$d,
        rotate: rotate$d,
        windowIn: windowIn$d,
        fadeOut: fadeOut$d,
        fadeIn: fadeIn$d,
    },
    BOUNCING_OFFSET = 2,
    MIN_THUMB_SIZE = 13,
    FORWARD_DISABLED = 'forwardDisabled',
    BACKWARD_DISABLED = 'backwardDisabled';
function updateDisabledStates(e, t) {
    if (!e.trackRef.current || !e.thumbRef.current) return;
    const r = e.trackRef.current.parentNode;
    if (r instanceof HTMLElement) {
        if (0 === t) return (r.classList.add(BACKWARD_DISABLED), void r.classList.remove(FORWARD_DISABLED));
        if (e.isBoundThumb(t)) return (r.classList.remove(BACKWARD_DISABLED), void r.classList.add(FORWARD_DISABLED));
        (r.classList.remove(BACKWARD_DISABLED), r.classList.remove(FORWARD_DISABLED));
    }
}
function Thumb(e) {
    const t = reactExports.useRef(null),
        [r, s] = reactExports.useState(!1),
        n = useEvent$1(function () {
            const r = t.current,
                s = e.trackRef.current,
                n = e.api.getWrapperSize(),
                a = e.api.getContainerSize();
            if (!(n && a && r && s)) return;
            const o = Math.min(1, n / a),
                u = 'horizontal' === e.direction ? 'width' : 'height';
            return ((r.style[u] = `${e.calculateSize(s, o)}px`), (r.style.display = 'flex'), o);
        }),
        [a, o] = useSpring(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: easings.easeInCubic,
            config: { duration: 200 },
        }));
    reactExports.useEffect(() => {
        r || e.dragging
            ? o.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(styles$v.base__active);
                  },
              })
            : o.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(styles$v.base__active);
                  },
              });
    }, [r, e.dragging, e.styles.closed, e.styles.opened, o]);
    const u = useEvent$1(function () {
            var r;
            const s = e.trackRef.current,
                n = t.current,
                a = e.railBeforeRef.current,
                u = e.railAfterRef.current,
                i = e.api.getWrapperSize(),
                l = e.api.getContainerSize();
            if (!(i && s && n && a && u && l)) return;
            const c = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, i / l),
                _ = clamp$1(0, 1, c / (l - i)),
                p = e.calculateSize(s, d),
                m = (('horizontal' === e.direction ? s.offsetWidth : s.offsetHeight) - p) * _ || 0,
                E = Math.round((2 * _ - 1) * BOUNCING_OFFSET);
            (n.style.setProperty('--thumbOffset', `${m}px`),
                null == (r = e.onUpdate) || r.call(e, { thumbSize: p, thumbOffset: m, newBouncingCorrection: E }));
            const f = 0 === m || e.isBoundThumb(m) ? 0 : E;
            return (
                o.start({
                    to: { '--bouncingCorrection': `${f}px` },
                    ...(0 === f ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                m
            );
        }),
        i = useSkipFrame(),
        l = useEvent$1(function () {
            n();
            const t = u();
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
            className: cx(styles$v.base, styles$v[`base__${e.direction}`], e.className),
            style: a,
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$v.background }),
                jsxRuntimeExports.jsx('div', { className: styles$v.border }),
                jsxRuntimeExports.jsx('div', { className: styles$v.innerBorder }),
                jsxRuntimeExports.jsx('div', { className: styles$v.icon }),
            ],
        })
    );
}
const initBarDraggingState = { pending: !1, offset: 0 };
function useBarDragging(e, t, r, s, n) {
    const [a, o] = reactExports.useState(initBarDraggingState),
        u = useEvent$1(t),
        i = reactExports.useCallback(
            (t) => {
                (o(t), e.current && u({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [u, e],
        );
    return (
        reactExports.useEffect(() => {
            if (!a.pending) return;
            const t = mouse$1.move(function ([t]) {
                    const o = r.contentRef.current;
                    if (!o) return;
                    const i = s.current,
                        l = e.current;
                    if (!o || !i || !l) return;
                    const c = n(t, a, { parent: i, thumb: l }),
                        d = c * (r.getContainerSize() ?? 0);
                    (r.scrollPosition.start({
                        scrollPosition: r.clampPosition(o, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: r.animationScroll.scrollPosition.get() },
                    }),
                        u({ type: 'dragging', dragElement: l, elementOffset: c, contentOffset: d }));
                }),
                o = mouse$1.up(() => {
                    i(initBarDraggingState);
                });
            return () => {
                (t(), o());
            };
        }, [r, a.offset, a.pending, u, i, e, s, a, n]),
        i
    );
}
const DISABLE_CLASS = 'disable',
    ACTIVE_CLASS = 'scroll-active';
function useUpdateStatesBar({ api: e, baseRef: t }) {
    const r = useSkipFrame(),
        s = useEvent$1(function () {
            const r = e.getWrapperSize(),
                s = e.getContainerSize();
            if (null === t.current || void 0 === s || void 0 === r) return;
            1 === Math.min(1, r / s || 1)
                ? t.current.classList.remove(ACTIVE_CLASS)
                : t.current.classList.add(ACTIVE_CLASS);
        });
    (reactExports.useEffect(() => r.run(s)),
        reactExports.useEffect(() => {
            function t() {
                r.run(s);
            }
            return (
                e.events.on('recalculateContent', t),
                e.events.on('resizeHandled', t),
                () => {
                    (e.events.off('recalculateContent', t), e.events.off('resizeHandled', t));
                }
            );
        }, [e, r, s]));
}
function getElementCoordinates(e, t) {
    const r = e.getBoundingClientRect(),
        s = t === scrollOrientations.horizontal ? r.x : r.y;
    return { start: s, end: t === scrollOrientations.horizontal ? s + r.width : s + r.height };
}
function getCoordinate(e, t, r, s, n, a) {
    return {
        occurredEvent: a === scrollOrientations.horizontal ? e.screenX : e.screenY,
        bar: getElementCoordinates(t, a),
        thumb: getElementCoordinates(r, a),
        backButton: getElementCoordinates(s, a),
        forwardButton: getElementCoordinates(n, a),
    };
}
function useBarHandlers(e, t, r, s, n, a, o) {
    const u = useSounds(),
        i = n.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT,
        [l, c] = useRepeatCallback$1((e) => n.applyStepTo(e), i, [n]);
    reactExports.useEffect(
        () => (document.addEventListener('mouseup', c, !0), () => document.removeEventListener('mouseup', c, !0)),
        [c],
    );
    const d = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (u.play('click', { target: 'Scroll:Back', original: e }), l(Direction.Next));
            },
            [l, u],
        ),
        _ = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (u.play('click', { target: 'Scroll:Forward', original: e }), l(Direction.Prev));
            },
            [l, u],
        ),
        p = reactExports.useCallback(
            (i) => {
                const l = e.current,
                    c = t.current,
                    p = r.current,
                    m = s.current;
                if (!(l && c && p && m && i.button === MOUSE_BUTTON_LEFT)) return;
                const E = getCoordinate(i, l, c, p, m, o),
                    f = E.thumb.start <= E.occurredEvent && E.occurredEvent <= E.thumb.end,
                    b =
                        (E.backButton.start <= E.occurredEvent && E.occurredEvent <= E.backButton.end) ||
                        (E.forwardButton.start <= E.occurredEvent && E.occurredEvent <= E.forwardButton.end);
                if (f) a({ pending: !0, offset: E.occurredEvent - E.thumb.start });
                else if (b) {
                    ((E.occurredEvent > E.thumb.start ? Direction.Prev : Direction.Next) === Direction.Next ? d : _)(i);
                } else {
                    const e = E.occurredEvent - E.bar.start,
                        t = E.thumb.end - E.thumb.start,
                        r = E.bar.end - E.bar.start,
                        s = n.getContainerSize();
                    if ('number' != typeof s || Number.isNaN(s)) return console.error('Incorrect container size');
                    const a = ((e - t / 2) / r) * s;
                    n.applyScroll(a);
                }
                u.play('click', { target: 'Scroll:' + (f ? 'thumb' : b ? 'button' : ''), original: i });
            },
            [e, t, r, s, u, o, a, d, _, n],
        ),
        m = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    u.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [u],
        );
    return reactExports.useMemo(
        () => ({
            handleMouseBackDown: d,
            handleMouseEnter: m,
            handleMouseDownTrack: p,
            handleMouseForwardDown: _,
            handleMouseForwardUp: c,
            handleMouseBackUp: c,
        }),
        [d, m, p, _, c],
    );
}
const rail$1 = 'HorizontalBar_rail_37858d8f',
    base$o = 'HorizontalBar_4df27ac3',
    track$1 = 'HorizontalBar_track_649dc296',
    rail__left = 'HorizontalBar_rail__left_1a906b4e',
    rail__right = 'HorizontalBar_rail__right_cd24364e',
    button__right = 'HorizontalBar_button__right_e8f0aa2d',
    button__left = 'HorizontalBar_button__left_da330e13',
    button$1 = 'HorizontalBar_button_cbabd91',
    styles$u = {
        rail: rail$1,
        base: base$o,
        track: track$1,
        rail__left: rail__left,
        rail__right: rail__right,
        button__right: button__right,
        button__left: button__left,
        button: button$1,
    },
    THUMB_TO_RAIL_OFFSET$1 = 5,
    THUMB_STYLES$1 = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    calculateThumbSize$1 = (e, t) => Math.max(remToPx$1(MIN_THUMB_SIZE), e.offsetWidth * t),
    Bar$1 = reactExports.memo(function ({ classNames: e = {}, onDrag: t = noop$1 }) {
        const r = reactExports.useRef(null),
            s = reactExports.useRef(null),
            n = reactExports.useRef(null),
            a = reactExports.useRef(null),
            o = reactExports.useRef(null),
            u = reactExports.useRef(null),
            i = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useHorizontalScroll();
        useUpdateStatesBar({ baseRef: r, api: d });
        const _ = useEvent$1(
                (e, t, { parent: r }) => (e.screenX - t.offset - r.getBoundingClientRect().x) / r.offsetWidth,
            ),
            p = useEvent$1((e) => e - (a.current.offsetWidth - o.current.offsetWidth) >= -0.5),
            m = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            E = useBarDragging(o, m, d, a, _),
            f = useEvent$1(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: r }) => {
                const s = a.current,
                    n = u.current,
                    o = i.current;
                if (!s || !n || !o) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET$1);
                ((n.style.width = `${t - l + r}px`), (o.style.width = s.offsetWidth - e - t - l - r + 'px'));
            }),
            { handleMouseEnter: b, handleMouseDownTrack: x } = useBarHandlers(
                r,
                o,
                n,
                s,
                d,
                E,
                scrollOrientations.horizontal,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$u.base, e.base),
            ref: r,
            onWheel: d.handleMouseWheel,
            onMouseDown: x,
            onMouseEnter: b,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: s,
                    className: cx(styles$u.button, styles$u.button__left, e.leftButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: a,
                    className: cx(styles$u.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: u,
                            className: cx(styles$u.rail, styles$u.rail__left, e.leftRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: l,
                            api: d,
                            calculateOffset: _,
                            calculateSize: calculateThumbSize$1,
                            direction: 'horizontal',
                            isBoundThumb: p,
                            railAfterRef: u,
                            railBeforeRef: i,
                            styles: THUMB_STYLES$1,
                            onUpdate: f,
                            thumbRef: o,
                            trackRef: a,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$u.rail, styles$u.rail__right, e.rightRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$u.button, styles$u.button__right, e.rightButton),
                }),
            ],
        });
    }),
    base$n = 'HorizontalScroll_5b201d2b',
    wrapper$2 = 'HorizontalScroll_wrapper_abec8dee',
    defaultScrollArea = 'HorizontalScroll_defaultScrollArea_a5c0f45',
    styles$t = { base: base$n, wrapper: wrapper$2, defaultScrollArea: defaultScrollArea },
    DefaultScroll$1 = ({
        children: e,
        className: t,
        barClassNames: r,
        areaClassName: s,
        classNames: n,
        scrollClassName: a,
        onDrag: o,
    }) => {
        const { api: u } = useHorizontalScroll(),
            i = reactExports.useMemo(() => {
                const e = r || {};
                return { ...e, base: cx(styles$t.base, e.base) };
            }, [r]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$t.defaultScroll, t),
            onWheel: u.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$t.defaultScrollArea, s),
                    children: jsxRuntimeExports.jsx(Area$1, { className: a, classNames: n, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$1, { onDrag: o, classNames: i }),
            ],
        });
    };
function Area$1({ className: e, classNames: t, children: r }) {
    const { api: s } = useHorizontalScroll();
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$t.base, e),
        children: jsxRuntimeExports.jsx('div', {
            className: cx(styles$t.wrapper, null == t ? void 0 : t.wrapper),
            onWheel: s.handleMouseWheel,
            ref: s.wrapperRef,
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$t.content, null == t ? void 0 : t.content),
                ref: s.contentRef,
                children: r,
            }),
        }),
    });
}
((Area$1.Bar = Bar$1), (Area$1.Default = DefaultScroll$1));
const dragDirections = { horizontal: 'horizontal', vertical: 'vertical' };
function getEventCoordinate(e, t) {
    switch (t) {
        case dragDirections.horizontal:
            return e.clientX;
        case dragDirections.vertical:
            return e.clientY;
        default:
            assert(!1, `Such drag direction ${t} is not supported`);
    }
}
function getScreenCoordinate(e, t) {
    switch (t) {
        case dragDirections.horizontal:
            return e.screenX;
        case dragDirections.vertical:
            return e.screenY;
        default:
            assert(!1, `Such drag direction ${t} is not supported`);
    }
}
const INITIAL_DRAGGING_STATE = { type: 'idle' };
function useScrollByDragElements(e, t, r, s) {
    const {
            contentRef: n,
            wrapperRef: a,
            scrollPosition: o,
            clampPosition: u,
            animationScroll: i,
            events: l,
            disabled: c,
        } = e,
        [d, _] = reactExports.useState(INITIAL_DRAGGING_STATE),
        [p, m] = reactExports.useState(0),
        { gapBeforeStart: E } = s ?? {},
        f = useSkipFrame(),
        b = useEvent$1(() => {
            f.run(() => {
                const t = e.contentRef.current,
                    r = e.getWrapperSize(),
                    s = e.getContainerSize();
                t && r && s && !c && (t.style.cursor = s <= r ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
            });
        });
    return (
        reactExports.useEffect(() => {
            b();
        }, [d.type, b]),
        useResize(() => {
            b();
        }, [b]),
        reactExports.useEffect(() => {
            if ('pending' !== d.type) return;
            const e = n.current,
                r = a.current;
            if (null === e || null === r) return;
            const s = mouse$1.move(([e]) => {
                    const r = getScreenCoordinate(e, t);
                    (void 0 === E || Math.abs(p - r) > E) &&
                        _({ type: 'dragging', positionFrom: r, previousScrollPosition: i.scrollPosition.get() });
                }),
                o = mouse$1.up(() => _({ type: 'scrollComplete' }));
            return () => {
                (s(), o());
            };
        }, [i.scrollPosition, n, p, t, d, E, a]),
        reactExports.useEffect(() => {
            if ('dragging' !== d.type) return;
            const e = mouse$1.move(([e, s]) => {
                const l = n.current,
                    c = a.current;
                if ('outside' === s) return void _({ type: 'scrollComplete' });
                const p = getEventCoordinate(e, t);
                if (null === l || null === c || ('inside' === s && p < 0)) return;
                const m = c.offsetLeft,
                    E = 'inside' === s ? p : p - m,
                    f = d.positionFrom - E,
                    b = d.previousScrollPosition + f;
                o.start({ scrollPosition: u(l, b), from: { scrollPosition: i.scrollPosition.get() }, ...r });
            });
            const s = mouse$1.up(function () {
                _({ type: 'scrollComplete' });
            });
            return () => {
                (e(), s());
            };
        }, [i.scrollPosition, u, n, d, o, a, r, t]),
        reactExports.useEffect(() => {
            if ('scrollComplete' !== d.type) return;
            const e = () => {
                _(INITIAL_DRAGGING_STATE);
            };
            return (e(), l.on('rest', e), () => l.off('rest', e));
        }, [i.scrollPosition, d.type, l]),
        reactExports.useEffect(() => {
            if (c) return;
            const e = n.current;
            if (!e) return;
            const r = (e) => {
                if (e.button !== mouseButtons.left) return;
                const r = getScreenCoordinate(e, t);
                (m(r),
                    _(
                        void 0 === E || E <= 0
                            ? { type: 'dragging', positionFrom: r, previousScrollPosition: i.scrollPosition.get() }
                            : { type: 'pending' },
                    ));
            };
            return (e.addEventListener('mousedown', r), () => e.removeEventListener('mousedown', r));
        }, [i.scrollPosition, n, c, t, E]),
        d
    );
}
function Base$7({ settings: e, children: t }) {
    const r = useApi$1({ settings: e }),
        s = reactExports.useMemo(() => ({ api: r }), [r]);
    return jsxRuntimeExports.jsx(Context$2.Provider, { value: s, children: t });
}
const Context$1 = reactExports.createContext(void 0);
function useVerticalScroll() {
    const e = reactExports.useContext(Context$1);
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
        getDirection: (e) => (e.deltaY > 1 ? Direction.Next : Direction.Prev),
    },
    useApi = createApiHook(DEFAULT_VERTICAL_API_CONFIG),
    rail = 'VerticalBar_rail_3d663c9',
    base$m = 'VerticalBar_7187fa00',
    track = 'VerticalBar_track_ff482708',
    rail__top = 'VerticalBar_rail__top_ee531f43',
    rail__bottom = 'VerticalBar_rail__bottom_3eaa33b1',
    button__bottom = 'VerticalBar_button__bottom_6880f123',
    button__top = 'VerticalBar_button__top_b8383775',
    button = 'VerticalBar_button_7b0e4aca',
    styles$s = {
        rail: rail,
        base: base$m,
        track: track,
        rail__top: rail__top,
        rail__bottom: rail__bottom,
        button__bottom: button__bottom,
        button__top: button__top,
        button: button,
    },
    THUMB_TO_RAIL_OFFSET = 5,
    THUMB_STYLES = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    calculateThumbSize = (e, t) => Math.max(remToPx$1(MIN_THUMB_SIZE), e.offsetHeight * t),
    Bar = reactExports.memo(function ({ classNames: e = {}, onDrag: t = noop$1 }) {
        const r = reactExports.useRef(null),
            s = reactExports.useRef(null),
            n = reactExports.useRef(null),
            a = reactExports.useRef(null),
            o = reactExports.useRef(null),
            u = reactExports.useRef(null),
            i = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useVerticalScroll();
        useUpdateStatesBar({ baseRef: r, api: d });
        const _ = useEvent$1((e) => e - (a.current.offsetHeight - o.current.offsetHeight) >= -0.5),
            p = useEvent$1(
                (e, t, { parent: r }) => (e.screenY - t.offset - r.getBoundingClientRect().y) / r.offsetHeight,
            ),
            m = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            E = useBarDragging(o, m, d, a, p),
            f = useEvent$1(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: r }) => {
                const s = a.current,
                    n = u.current,
                    o = i.current;
                if (!s || !n || !o) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET);
                ((n.style.height = `${t - l + r}px`), (o.style.height = s.offsetHeight - e - t - l - r + 'px'));
            }),
            { handleMouseEnter: b, handleMouseDownTrack: x } = useBarHandlers(
                r,
                o,
                s,
                n,
                d,
                E,
                scrollOrientations.vertical,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$s.base, e.base),
            ref: r,
            onWheel: d.handleMouseWheel,
            onMouseDown: x,
            onMouseEnter: b,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: s,
                    className: cx(styles$s.button, styles$s.button__top, e.topButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: a,
                    className: cx(styles$s.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: u,
                            className: cx(styles$s.rail, styles$s.rail__top, e.topRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: l,
                            api: d,
                            calculateOffset: p,
                            calculateSize: calculateThumbSize,
                            direction: 'vertical',
                            isBoundThumb: _,
                            railAfterRef: u,
                            railBeforeRef: i,
                            styles: THUMB_STYLES,
                            onUpdate: f,
                            thumbRef: o,
                            trackRef: a,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$s.rail, styles$s.rail__bottom, e.bottomRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$s.button, styles$s.button__bottom, e.bottomButton),
                }),
            ],
        });
    }),
    maskDirections = { top: 'top', bottom: 'bottom', both: 'both', none: 'none' },
    getMaskDirection = (e, t) =>
        e || t ? (e ? (t ? maskDirections.none : maskDirections.bottom) : maskDirections.top) : maskDirections.both,
    root$c = 'VerticalScroll_root_29606297',
    content$3 = 'VerticalScroll_content_62cb6120',
    content__top = 'VerticalScroll_content__top_b27098a4',
    content__bottom = 'VerticalScroll_content__bottom_d6604290',
    content__both = 'VerticalScroll_content__both_8d905712',
    defaultScroll = 'VerticalScroll_defaultScroll_c69fa70e',
    bar = 'VerticalScroll_bar_c5afe570',
    area = 'VerticalScroll_area_a3c0086a',
    fadeInWithScale$c = 'VerticalScroll_fadeInWithScale_29606297',
    slideUp$c = 'VerticalScroll_slideUp_29606297',
    blink$c = 'VerticalScroll_blink_29606297',
    scale$c = 'VerticalScroll_scale_29606297',
    rotate$c = 'VerticalScroll_rotate_29606297',
    windowIn$c = 'VerticalScroll_windowIn_29606297',
    fadeOut$c = 'VerticalScroll_fadeOut_29606297',
    fadeIn$c = 'VerticalScroll_fadeIn_29606297',
    styles$r = {
        root: root$c,
        content: content$3,
        content__top: content__top,
        content__bottom: content__bottom,
        content__both: content__both,
        defaultScroll: defaultScroll,
        bar: bar,
        area: area,
        fadeInWithScale: fadeInWithScale$c,
        slideUp: slideUp$c,
        blink: blink$c,
        scale: scale$c,
        rotate: rotate$c,
        windowIn: windowIn$c,
        fadeOut: fadeOut$c,
        fadeIn: fadeIn$c,
    },
    DefaultScroll = ({
        children: e,
        className: t,
        barClassNames: r,
        areaClassName: s,
        scrollClassName: n,
        scrollClassNames: a,
        onDrag: o,
    }) => {
        const { api: u } = useVerticalScroll(),
            i = reactExports.useMemo(() => {
                const e = r || {};
                return { ...e, base: cx(styles$r.base, e.base) };
            }, [r]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$r.defaultScroll, t),
            onWheel: u.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$r.area, s),
                    children: jsxRuntimeExports.jsx(Area, { className: n, classNames: a, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar, { onDrag: o, classNames: i }),
            ],
        });
    },
    Area = ({ className: e, classNames: t, children: r, ...s }) => {
        const { api: n } = useVerticalScroll();
        return (
            reactExports.useEffect(() =>
                createLayoutReadyInEffect$1(() => createLayoutReadyInEffect$1(n.recalculateContent)),
            ),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$r.base, null == t ? void 0 : t.wrapper, e),
                ref: n.wrapperRef,
                onWheel: n.handleMouseWheel,
                children: jsxRuntimeExports.jsx('div', {
                    ...s,
                    className: cx(styles$r.content, null == t ? void 0 : t.content),
                    ref: n.contentRef,
                    children: r,
                }),
            })
        );
    };
function MaskArea({ classNames: e, ...t }) {
    const { api: r } = useVerticalScroll(),
        [s, n] = useScrollBounding(r);
    return jsxRuntimeExports.jsx(Area, {
        ...t,
        classNames: {
            ...e,
            content: cx(styles$r[`content__${getMaskDirection(s, n)}`], null == e ? void 0 : e.content),
        },
    });
}
function Base$6({ children: e }) {
    const t = useApi(),
        r = reactExports.useMemo(() => ({ api: t }), [t]);
    return jsxRuntimeExports.jsx(Context$1.Provider, { value: r, children: e });
}
function checkOnBorder(e, [t, r]) {
    return Math.floor(e) === t || Math.ceil(e) === r;
}
Area.Default = DefaultScroll;
const DEFAULT_NAME_KEYFRAME = 'Point',
    THRESHOLD = 0.02;
function createLoop(e) {
    let t = 0;
    return [
        function r() {
            (e(), (t = requestAnimationFrame(r)));
        },
        function () {
            cancelAnimationFrame(t);
        },
    ];
}
const VideoForwarded = reactExports.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: r = !1,
            style: s,
            loop: n = !1,
            isPrebufferKeyframes: a,
            keyframesNameConfig: o,
            onClick: u,
            ...i
        },
        l,
    ) {
        const c = l,
            d = reactExports.useRef(null);
        return (
            useMount$1(() => {
                let e = !1;
                return events$2.onDisplayChanged((t, r) => {
                    const s = d.current;
                    s &&
                        (r === displayStatus$1.hidden
                            ? ((e = s.paused), s.pause())
                            : e || r !== displayStatus$1.shown || s.play());
                });
            }),
            useMount$1(() => {
                let e = !1;
                return onMinimize((t) => {
                    const r = d.current;
                    r && (t ? ((e = r.paused), r.pause()) : e || r.play());
                });
            }),
            reactExports.useEffect(
                () =>
                    createLayoutReadyInEffect$1(() => {
                        const e = d.current;
                        if (!c || !e || !a) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps ? e.cohGetKeyframeTimestamps() : [];
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  (null == e ? void 0 : e.cohPrebufferKeyframe) && e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [a, c],
            ),
            reactExports.useEffect(() => {
                if (c && d.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: noop$1 },
                        t = () => {
                            let t = 0;
                            const [r, s] = createLoop(() => {
                                if (d.current) {
                                    const { currentTime: r, duration: s } = d.current;
                                    if (
                                        (t !== r &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: r, duration: s })),
                                            (t = r)),
                                        d.current.paused || !c || !a)
                                    )
                                        return;
                                    const n = d.current.cohGetKeyframeTimestamps
                                        ? d.current.cohGetKeyframeTimestamps()
                                        : [];
                                    n.forEach((t, s) => {
                                        void 0 !== n[s] &&
                                            r > n[s] - THRESHOLD &&
                                            r < n[s] &&
                                            e.changeKeyframeHandlers.forEach((e) => {
                                                const r = Object.keys(o ?? {})[s];
                                                return e({
                                                    time: t,
                                                    name: `${o ? r : `${DEFAULT_NAME_KEYFRAME}_${s}`}`,
                                                });
                                            });
                                    });
                                }
                            });
                            return (r(), s);
                        };
                    e.changeTimeLoop = t();
                    const r = (t) => (
                            e.changeTimeHandlers.push(t),
                            () => {
                                const { changeTimeHandlers: r } = e,
                                    s = r.indexOf(t);
                                s < 0
                                    ? console.warn("Can't unsubscribe changeTimeHandler, this reference was not found")
                                    : r.splice(s, 1);
                            }
                        ),
                        s = (t) => (
                            e.changeKeyframeHandlers.push(t),
                            () => {
                                const { changeKeyframeHandlers: r } = e,
                                    s = r.indexOf(t);
                                s < 0
                                    ? console.warn(
                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                      )
                                    : r.splice(s, 1);
                            }
                        ),
                        n = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.currentTime;
                        },
                        u = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.duration;
                        },
                        i = (e) => {
                            d.current && (d.current.currentTime = clamp$1(0, d.current.duration, e));
                        },
                        l = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.play();
                        },
                        _ = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.pause();
                        },
                        p = () => {
                            (_(), i(0));
                        },
                        m = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps)
                                ? d.current.cohGetKeyframeTimestamps()
                                : [];
                        },
                        E = (e) => {
                            (i(e), l());
                        },
                        f = (e) => {
                            (i(e), _());
                        },
                        b = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        x = (e, t) => {
                            var r;
                            return (
                                null == (r = d.current) || r.addEventListener(e, t),
                                () => {
                                    var r;
                                    return null == (r = d.current) ? void 0 : r.removeEventListener(e, t);
                                }
                            );
                        },
                        g = (e, t) => {
                            var r;
                            return (
                                null == (r = d.current) || r.removeEventListener(e, t),
                                () => {
                                    var r;
                                    return null == (r = d.current) ? void 0 : r.removeEventListener(e, t);
                                }
                            );
                        };
                    return (
                        (c.current = {
                            on: x,
                            off: g,
                            play: l,
                            pause: _,
                            stop: p,
                            cleanup: b,
                            getCurrentTime: n,
                            getDuration: u,
                            getCachedKeyframes: m,
                            goToAndPlay: E,
                            goToAndStop: f,
                            setCurrentTime: i,
                            domRef: d.current,
                            onChangeTime: r,
                            onKeyframes: s,
                        }),
                        () => {
                            (b(), (c.current = null));
                        }
                    );
                }
            }, [o, c, a]),
            reactExports.useEffect(() => {
                d.current && r && d.current.play();
            }, [r, n]),
            useUnmount(() => {
                var e;
                null == (e = d.current) || e.pause();
            }),
            jsxRuntimeExports.jsx('video', { src: e, className: t, style: s, loop: n, ref: d, onClick: u, ...i })
        );
    }),
    Video = reactExports.memo(VideoForwarded),
    UNKNOWN_NATION = 'none',
    list = ['ussr', 'germany', 'usa', 'china', 'france', 'uk', 'japan', 'czech', 'sweden', 'poland', 'italy'],
    nationById = (e) => list[e] ?? UNKNOWN_NATION,
    LIGHT_TANK = 'lightTank',
    MEDIUM_TANK = 'mediumTank',
    HEAVY_TANK = 'heavyTank',
    SPG = 'SPG',
    AT_SPG = 'AT-SPG',
    types$1 = { lightTank: LIGHT_TANK, mediumTank: MEDIUM_TANK, heavyTank: HEAVY_TANK, SPG: SPG, 'AT-SPG': AT_SPG },
    typeValues = Object.values(types$1),
    isTypeValidValue = (e) => typeValues.includes(e);
function getVehicleImageKey(e) {
    const t = e.indexOf(':');
    return normalizeResource(t < 0 ? e.toLowerCase() : e.substring(t + 1).toLowerCase());
}
function isRentVehicle(e) {
    return e.rent.isRented;
}
const RUDY_PL = 51345,
    RUDY_USSR = 59393,
    RUDIES = [RUDY_USSR, RUDY_PL],
    sameTanksRemap = { [RUDY_PL]: RUDIES, [RUDY_USSR]: RUDIES },
    WITHOUT_ROLE = 'without_role',
    roles = {
        assault: 'assault',
        sniper: 'sniper',
        support: 'support',
        universal: 'universal',
        break: 'break',
        wheeled: 'wheeled',
        spg: 'spg',
    },
    mapRoleByKey = [
        WITHOUT_ROLE,
        roles.spg,
        roles.assault,
        roles.break,
        roles.universal,
        roles.support,
        roles.assault,
        roles.support,
        roles.universal,
        roles.sniper,
        roles.assault,
        roles.universal,
        roles.sniper,
        roles.support,
        roles.universal,
        roles.wheeled,
    ],
    getRoleByKey = (e) => mapRoleByKey[e] ?? WITHOUT_ROLE,
    atSpgRoles = [roles.assault, roles.universal, roles.sniper, roles.support],
    heavyTankRoles = [roles.assault, roles.break, roles.universal, roles.support],
    mediumTankRoles = [roles.assault, roles.support, roles.universal, roles.sniper],
    lightTankRoles = [roles.universal, roles.wheeled],
    vehicleState = { UNSUITABLE_TO_QUEUE: 'unsuitableToQueue' },
    formatters = Object.fromEntries(Object.entries(defaultFormatters).map(([e]) => [e, (e) => e]));
function renderString(e, t = {}) {
    const r = parse(e, defaultBrackets);
    return String(render(r, formatters, t));
}
function renderResolvedString(e, t = {}) {
    const r = resources.resolve('strings').readOrEmpty(e);
    return 0 === r.length ? r : renderString(r, t);
}
const contextInstance = reactExports.createContext(null),
    positions = { left: 'left', right: 'right', top: 'top', bottom: 'bottom' };
Object.values(positions);
const verticalPositions = ['top', 'bottom'],
    oppositePositions = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
function isVerticalPosition(e) {
    return verticalPositions.includes(e);
}
function usePopoverOptional() {
    return reactExports.useContext(contextInstance);
}
function usePopover() {
    const e = reactExports.useContext(contextInstance);
    if (!e) throw new Error('usePopover must be used within a Popover');
    return e;
}
const initialState = { opened: !1 };
function usePopoverInstance(e) {
    const [t, r] = reactExports.useState(initialState),
        s = reactExports.useMemo(() => {
            const t = observable.box(),
                s = { onBeforeOpen: new Set(), onBeforeClose: new Set() },
                n = { bounding: observable.box(), position: observable.box() };
            function a(e) {
                r((t) => {
                    const r = e(t);
                    return (
                        t.opened === r.opened ||
                            (r.opened ? s.onBeforeOpen.forEach((e) => e()) : s.onBeforeClose.forEach((e) => e())),
                        r
                    );
                });
            }
            return {
                id: e,
                open: () => a((e) => ({ ...e, opened: !0 })),
                close: () => a((e) => ({ ...e, opened: !1 })),
                toggle: () => a((e) => ({ ...e, opened: !e.opened })),
                subscribe: {
                    onBeforeOpen: (e) => (s.onBeforeOpen.add(e), () => s.onBeforeOpen.delete(e)),
                    onBeforeClose: (e) => (s.onBeforeClose.add(e), () => s.onBeforeClose.delete(e)),
                },
                portal: {
                    bounding: n.bounding,
                    setBounding: takeAction(n.bounding),
                    position: n.position,
                    setPosition: takeAction(n.position),
                },
                trigger: { bounding: t, setBounding: takeAction(t) },
            };
        }, [e]);
    return reactExports.useMemo(() => ({ ...s, ...t }), [s, t]);
}
const border = 'Popover_border_d0a76717',
    title = 'Popover_title_e4a0437a',
    subtitle = 'Popover_subtitle_1c7535c8',
    header = 'Popover_header_de23fc15',
    body = 'Popover_body_22163d58',
    divider = 'Popover_divider_46fe6f15',
    decoration = 'Popover_decoration_134219d5',
    close = 'Popover_close_ad4a9c7b',
    styles$q = {
        border: border,
        title: title,
        subtitle: subtitle,
        header: header,
        body: body,
        divider: divider,
        decoration: decoration,
        close: close,
    },
    Close = reactExports.forwardRef(({ className: e, children: t, ...r }, s) => {
        const n = usePopoverOptional(),
            a = useSounds(),
            o = useUpscale('ui_kit.close_button.icon_small', 'ui_kit.close_button.icon_medium');
        return (
            reactExports.useEffect(
                () =>
                    onResize$1(function () {
                        null == n || n.close();
                    }),
                [n],
            ),
            jsxRuntimeExports.jsx('div', {
                ...r,
                onClick: function (e) {
                    var t;
                    (null == (t = r.onClick) || t.call(r, e),
                        a.play('close', { target: 'react-popover:close', original: e }),
                        null == n || n.close());
                },
                onMouseEnter: function (e) {
                    var t;
                    (null == (t = r.onMouseEnter) || t.call(r, e),
                        a.play('mouse-enter', { target: 'react-popover:close', original: e }));
                },
                ref: s,
                className: cx(styles$q.close, e),
                children: t ?? jsxRuntimeExports.jsx(Image, { path: o, width: 24, height: 24 }),
            })
        );
    }),
    OPEN_ANIMATION_DURATION = 250,
    animationTransitions = {
        top: 'translate(0rem, 50rem) scale(0.9)',
        bottom: 'translate(0rem, -50rem) scale(0.9)',
        left: 'translate(50rem, 0rem) scale(0.9)',
        right: 'translate(-50rem, 0rem) scale(0.9)',
    },
    defaultPaddingsRem = { top: 0, bottom: 0, left: 0, right: 0 };
function Portal({
    children: e,
    target: t,
    pivot: r = 0,
    position: s = 'top',
    paddingsRem: n = {},
    lazy: a = !1,
    closeByEscape: o = !0,
    onBeforePositionChange: u = noop$1,
    freeSpaceRem: i = 8,
    ...l
}) {
    const c = usePopover(),
        d = React.useRef(null),
        [_, p] = reactExports.useState(),
        m = reactExports.useMemo(
            () => ({
                top: remToPx$1(n.top || defaultPaddingsRem.top),
                bottom: remToPx$1(n.bottom || defaultPaddingsRem.bottom),
                left: remToPx$1(n.left || defaultPaddingsRem.left),
                right: remToPx$1(n.right || defaultPaddingsRem.right),
            }),
            [n.bottom, n.top, n.left, n.right],
        ),
        E = remToPx$1(i),
        f = reactExports.useMemo(() => (t ? (document.querySelector(t) ?? document.body) : document.body), [t]);
    reactExports.useEffect(() => {
        const e = d.current;
        if (!e) return;
        const t = document.querySelector(`[data-popover-trigger-id="${c.id}"]`),
            n = e.querySelector(`[data-popover-display-id="${c.id}"]`);
        if (!t || !n) return;
        const a = watchResizes([t, e, document.body], ([t, n, a]) => {
            if (!c.opened) return void p(void 0);
            if (!1 === u(c, { callerBounding: t, containerBounding: n, bodyBounding: a })) return;
            const o = getUpdatedPosition(s, m, t, n, a);
            (p(o),
                updatePosition(r, E, o, m, t, n, a, e),
                runInAction(() => {
                    (c.trigger.setBounding(t), c.portal.setBounding(n), c.portal.setPosition(o));
                }));
        });
        return (a.start(), a.stop);
    }, [c, u, m, r, E, c.id, c.portal, c.trigger, s, c.opened]);
    const b = reactExports.useCallback(() => {
        const e = d.current;
        e &&
            document.activeElement &&
            document.activeElement instanceof HTMLElement &&
            e.contains(document.activeElement) &&
            document.activeElement.blur();
    }, []);
    (reactExports.useEffect(() => c.subscribe.onBeforeClose(b), [c.subscribe, b]),
        useHandleKeydown(o && c.opened ? keyCodes.ESCAPE : keyCodes.NONE, () => {
            c.close();
        }),
        reactExports.useEffect(() => {
            if (!c.opened) return;
            const e = d.current;
            if (!e) return;
            const t = e;
            function r(e) {
                const r = e.target;
                if (!(r instanceof HTMLElement)) return !1;
                const s = `[data-popover-trigger-id="${c.id}"]`,
                    n = `[data-popover-outside-click-whitelist-id="${c.id}"]`;
                return !(t === r || t.contains(r) || r.matches(s) || r.matches(n) || r.closest(s) || r.closest(n));
            }
            return new DisposeBuilder()
                .add(
                    addEventListener(document, 'click', (e) => {
                        r(e) && c.close();
                    }),
                )
                .add(
                    mouse$1.down(([e, t]) => {
                        if ('outside' === t) return c.close();
                        const s = e.button;
                        (s !== mouseButtons.right && s !== mouseButtons.wheel) || (r(e) && c.close());
                    }),
                ).dispose;
        }, [c]));
    const [x, g] = useSpring(() => ({
        from: { opacity: 0, transform: animationTransitions[s] },
        config: { easing: easings.easeInOutCubic, duration: OPEN_ANIMATION_DURATION },
    }));
    return (
        reactExports.useEffect(() => {
            if (!_) return;
            const e = { opacity: 0, transform: animationTransitions[_] };
            g.start({
                from: c.opened ? e : void 0,
                to: c.opened ? { opacity: 1, transform: 'translate(0rem, 0rem) scale(1)' } : e,
            });
        }, [g, _, c.opened]),
        !c.opened && a
            ? null
            : jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
                  children: ReactDOM.createPortal(
                      jsxRuntimeExports.jsx(animated.div, {
                          ...l,
                          ref: d,
                          style: {
                              position: 'absolute',
                              top: '0',
                              left: '0',
                              pointerEvents: x.opacity.to((e) => (1 === e ? 'auto' : 'none')),
                              display: x.opacity.to((e) => (0 !== e || c.opened ? 'block' : 'none')),
                              ...l.style,
                          },
                          children: jsxRuntimeExports.jsx(animated.div, { style: x, children: e }),
                      }),
                      f,
                  ),
              })
    );
}
function getUpdatedPosition(e, t, r, s, n) {
    return ('top' === e && r.top - s.height - t.top < 0) ||
        ('bottom' === e && r.bottom + s.height + t.bottom > n.height) ||
        ('left' === e && r.left - s.width - t.left < 0) ||
        ('right' === e && r.right + s.width + t.right > n.width)
        ? oppositePositions[e]
        : e;
}
function applyTransform(e, t, r, s, n) {
    ((e = clamp$1(r.left, n.width - s.offsetWidth - r.right, e)),
        (t = clamp$1(r.top, n.height - s.offsetHeight - r.bottom, t)),
        (s.style.transform = `translate(${e}px, ${t}px)`));
}
function updatePosition(e, t, r, s, n, a, o, u) {
    if ('top' === r) {
        const r = (a.width - n.width) * e;
        applyTransform(n.left - r, n.top - a.height - t, s, u, o);
    } else if ('bottom' === r) {
        const r = (a.width - n.width) * e;
        applyTransform(n.left - r, n.bottom + t, s, u, o);
    } else if ('left' === r) {
        const r = n.left - a.width - t,
            i = (a.height - n.height) * e;
        applyTransform(r, n.top - i, s, u, o);
    } else if ('right' === r) {
        const r = n.right + t,
            i = (a.height - n.height) * e;
        applyTransform(r, n.top - i, s, u, o);
    }
}
const root$b = 'PopoverTip_root_a48d88bb',
    base$l = 'PopoverTip_163a336f',
    arrow = 'PopoverTip_arrow_44c7d6a5',
    glow = 'PopoverTip_glow_da3f9be9',
    fadeInWithScale$b = 'PopoverTip_fadeInWithScale_a48d88bb',
    slideUp$b = 'PopoverTip_slideUp_a48d88bb',
    blink$b = 'PopoverTip_blink_a48d88bb',
    scale$b = 'PopoverTip_scale_a48d88bb',
    rotate$b = 'PopoverTip_rotate_a48d88bb',
    windowIn$b = 'PopoverTip_windowIn_a48d88bb',
    fadeOut$b = 'PopoverTip_fadeOut_a48d88bb',
    fadeIn$b = 'PopoverTip_fadeIn_a48d88bb',
    styles$p = {
        root: root$b,
        base: base$l,
        'base__flip-left': 'PopoverTip_base__flip-left_3cc0dadc',
        'base__flip-right': 'PopoverTip_base__flip-right_6a5605b6',
        'base__flip-top': 'PopoverTip_base__flip-top_6bcc69e1',
        'base__flip-bottom': 'PopoverTip_base__flip-bottom_416a1dc4',
        arrow: arrow,
        'arrow__position-top': 'PopoverTip_arrow__position-top_a95d47a6',
        'arrow__position-bottom': 'PopoverTip_arrow__position-bottom_9d75ac12',
        'arrow__position-left': 'PopoverTip_arrow__position-left_ca4ced33',
        'arrow__position-right': 'PopoverTip_arrow__position-right_9dc94f7a',
        glow: glow,
        fadeInWithScale: fadeInWithScale$b,
        slideUp: slideUp$b,
        blink: blink$b,
        scale: scale$b,
        rotate: rotate$b,
        windowIn: windowIn$b,
        fadeOut: fadeOut$b,
        fadeIn: fadeIn$b,
    },
    verticals = [positions.top, positions.bottom],
    horizontals = [positions.left, positions.right],
    rotations = { top: 180, bottom: 0, left: 90, right: -90 },
    Tip = reactExports.forwardRef(({ ...e }, t) => {
        const r = reactExports.useRef(null),
            s = usePopoverOptional(),
            [n, a] = reactExports.useState(e.size),
            [o, u] = reactExports.useState(e.position || (s && oppositePositions[s.portal.position.get()]) || 'bottom'),
            [i, l] = reactExports.useState(e.offset),
            c = useEvent$1((t, r, s) => {
                let n = o;
                if ((e.position || ((n = oppositePositions[s]), u(n)), !e.size)) {
                    const e = isVerticalPosition(n)
                        ? `${Math.min(t.width, r.width)}px`
                        : `${Math.min(t.height, r.height)}px`;
                    a(e);
                }
                if (!e.offset) {
                    const e = isVerticalPosition(n)
                        ? `${Math.max(0, t.left - r.left)}px`
                        : `${Math.max(0, t.top - r.top)}px`;
                    l(e);
                }
            });
        return (
            reactExports.useEffect(() => {
                if (r.current && s)
                    return autorun(() => {
                        const e = s.trigger.bounding.get(),
                            t = s.portal.bounding.get(),
                            r = s.portal.position.get();
                        e && r && t && c(e, t, r);
                    });
            }, [s, c]),
            jsxRuntimeExports.jsxs('div', {
                ...e,
                ref: assignRefs([t, r]),
                style: {
                    width: (verticals.includes(o) && n) || '1rem',
                    height: (horizontals.includes(o) && n) || '1rem',
                    top: (horizontals.includes(o) && i) || 'auto',
                    bottom: 'bottom' === o ? '0' : 'auto',
                    left: (verticals.includes(o) && i) || 'auto',
                    right: 'right' === o ? '0' : 'auto',
                    ...e.style,
                },
                className: cx(styles$p.base, e.flipped && styles$p[`base__flipped-${o}`], e.className),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$p.arrow, styles$p[`arrow__position-${o}`]),
                        style: { transform: `translate(-50%, -50%) rotate(${rotations[o]}deg)` },
                    }),
                    !1 === e.noGlow &&
                        jsxRuntimeExports.jsx('div', {
                            className: styles$p.glow,
                            style: { transform: `translate(-50%, -50%) rotate(${rotations[o]}deg)` },
                        }),
                ],
            })
        );
    });
function Trigger({ children: e }) {
    const t = usePopover();
    return e({ onClick: t.toggle, 'data-popover-trigger-id': t.id }, t);
}
Tip.positions = positions;
const Title = defineStyledComponent('Title', styles$q.title),
    Subtitle = defineStyledComponent('Subtitle', styles$q.subtitle),
    Header = defineStyledComponent('Header', styles$q.header),
    Divider = defineStyledComponent('Divider', styles$q.divider),
    Body = defineStyledComponent('Body', styles$q.body),
    Decoration = defineStyledComponent('Decoration', styles$q.decoration),
    Display = reactExports.forwardRef((e, t) => {
        const r = usePopoverOptional();
        return jsxRuntimeExports.jsxs(Decoration, {
            ...e,
            ref: t,
            'data-popover-display-id': null == r ? void 0 : r.id,
            children: [jsxRuntimeExports.jsx('div', { className: styles$q.border }), e.children],
        });
    });
function Popover(e) {
    const t = reactExports.useId();
    return jsxRuntimeExports.jsx(contextInstance.Provider, {
        value: usePopoverInstance(e.id ?? t),
        children: e.children,
    });
}
((Popover.Close = Close),
    (Popover.Title = Title),
    (Popover.Subtitle = Subtitle),
    (Popover.Header = Header),
    (Popover.Divider = Divider),
    (Popover.Body = Body),
    (Popover.Tip = Tip),
    (Popover.Display = Display),
    (Popover.use = usePopover),
    (Popover.Portal = Portal),
    (Popover.Trigger = Trigger));
const base$k = 'TruncateText_dcb41d92',
    styles$o = { base: base$k },
    TruncatedText = reactExports.forwardRef(function ({ text: e, tooltipParams: t, className: r, ...s }, n) {
        const a = useSimpleTooltip({ header: null == t ? void 0 : t.header, body: (null == t ? void 0 : t.body) || e }),
            o = reactExports.useRef(null),
            [u, i] = reactExports.useState(!1);
        const l = reactExports.useCallback(() => {
            if (o.current) {
                const { scrollWidth: e, offsetWidth: t } = o.current;
                i(e > t);
            }
        }, []);
        return (
            reactExports.useEffect(() => {
                u || a.onMouseLeave();
            }, [u, a]),
            useLayoutReady(l, [l]),
            useResizeLayoutReady(l, [l]),
            useRefResizeObserver(o, l),
            jsxRuntimeExports.jsx('div', {
                ...s,
                ref: function (e) {
                    ((o.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                className: cx(styles$o.base, r),
                ...(u ? a : {}),
                children: e,
            })
        );
    }),
    base$j = 'VehicleLevel_3c938122',
    styles$n = { base: base$j },
    numberTypes = { arabic: 'arabic', roman: 'roman' };
function getLevelType(e, t) {
    return e || (t ? numberTypes.arabic : numberTypes.roman);
}
const VehicleLevel = reactExports.forwardRef(function ({ value: e, numberType: t, ...r }, s) {
    const n = getLevelType(t, useRomanForbidden()) === numberTypes.roman ? arabicToRoman(e) : e;
    return jsxRuntimeExports.jsx('div', {
        ...r,
        'data-name': 'VehicleLevel',
        className: cx(styles$n.base, r.className),
        ref: s,
        children: n,
    });
});
VehicleLevel.numberTypes = numberTypes;
const MIN_LEVEL = 1,
    TYPE_PRESTIGE = 'prestige',
    directions$1 = { left: 'left', right: 'right' },
    lengths = { short: 'short', medium: 'medium', long: 'long' },
    iconLength = (e) => (e < 10 ? lengths.short : e < 100 ? lengths.medium : lengths.long),
    icon$6 = (e, t, r) => (t === TYPE_PRESTIGE ? TYPE_PRESTIGE : `${t}.${iconLength(e)}.c_${r}`),
    root$a = 'VehiclePrestigeLevel_root_4426b46c',
    base$i = 'VehiclePrestigeLevel_a750cce',
    icon$5 = 'VehiclePrestigeLevel_icon_ef024cc3',
    base__left = 'VehiclePrestigeLevel_base__left_4426b46c',
    level = 'VehiclePrestigeLevel_level_10f410ba',
    level__short = 'VehiclePrestigeLevel_level__short_d1939fb1',
    base__right = 'VehiclePrestigeLevel_base__right_4426b46c',
    level__medium = 'VehiclePrestigeLevel_level__medium_90aed80f',
    level__long = 'VehiclePrestigeLevel_level__long_26625167',
    base__iron = 'VehiclePrestigeLevel_base__iron_4426b46c',
    base__bronze = 'VehiclePrestigeLevel_base__bronze_4426b46c',
    base__silver = 'VehiclePrestigeLevel_base__silver_4426b46c',
    base__gold = 'VehiclePrestigeLevel_base__gold_4426b46c',
    base__enamel = 'VehiclePrestigeLevel_base__enamel_4426b46c',
    fadeInWithScale$a = 'VehiclePrestigeLevel_fadeInWithScale_4426b46c',
    slideUp$a = 'VehiclePrestigeLevel_slideUp_4426b46c',
    blink$a = 'VehiclePrestigeLevel_blink_4426b46c',
    scale$a = 'VehiclePrestigeLevel_scale_4426b46c',
    rotate$a = 'VehiclePrestigeLevel_rotate_4426b46c',
    windowIn$a = 'VehiclePrestigeLevel_windowIn_4426b46c',
    fadeOut$a = 'VehiclePrestigeLevel_fadeOut_4426b46c',
    fadeIn$a = 'VehiclePrestigeLevel_fadeIn_4426b46c',
    styles$m = {
        root: root$a,
        base: base$i,
        icon: icon$5,
        base__left: base__left,
        level: level,
        level__short: level__short,
        base__right: base__right,
        level__medium: level__medium,
        level__long: level__long,
        base__iron: base__iron,
        base__bronze: base__bronze,
        base__silver: base__silver,
        base__gold: base__gold,
        base__enamel: base__enamel,
        fadeInWithScale: fadeInWithScale$a,
        slideUp: slideUp$a,
        blink: blink$a,
        scale: scale$a,
        rotate: rotate$a,
        windowIn: windowIn$a,
        fadeOut: fadeOut$a,
        fadeIn: fadeIn$a,
    };
function PrestigeLevel({ level: e, grade: t, type: r, direction: s, classNames: n, ...a }) {
    return e < MIN_LEVEL
        ? null
        : jsxRuntimeExports.jsxs('div', {
              ...a,
              className: cx(
                  styles$m.base,
                  styles$m[`base__${r}`],
                  styles$m[`base__${s}`],
                  a.className,
                  null == n ? void 0 : n.base,
              ),
              children: [
                  jsxRuntimeExports.jsx(Image, {
                      path: `prestige.tab.${icon$6(e, r, t)}`,
                      className: cx(styles$m.icon, null == n ? void 0 : n.icon),
                  }),
                  r !== TYPE_PRESTIGE &&
                      jsxRuntimeExports.jsx('div', {
                          className: cx(
                              styles$m.level,
                              styles$m[`level__${iconLength(e)}`],
                              null == n ? void 0 : n.level,
                          ),
                          children: e,
                      }),
              ],
          });
}
PrestigeLevel.direction = directions$1;
const SvgAssaultX16X16 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M8 1L1 6.03876L3.67531 14H12.3247L15 6.03876L8 1ZM10.5 11.5H5.5L4 7L8 4L12 7L10.5 11.5Z',
                fill: '#FFB34D',
            }),
        ),
    SvgAssaultX24X24 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M12 3L3 9.58915L6.43968 20H17.5603L21 9.58915L12 3ZM15 17H9L7 11L12 7.5L17 11L15 17Z',
                fill: '#FFB34D',
            }),
        ),
    SvgAssaultX32X32 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M16.5914 5.76714C16.2395 5.50928 15.7611 5.50928 15.4092 5.76714L5.65573 12.9145C5.30611 13.1707 5.16135 13.623 5.29721 14.0346L9.02038 25.3139C9.15564 25.7237 9.53848 26.0005 9.96998 26.0005H22.0306C22.4621 26.0005 22.8449 25.7237 22.9802 25.3139L26.7033 14.0346C26.8392 13.623 26.6944 13.1707 26.3448 12.9145L16.5914 5.76714ZM20.2642 22.8457L19.5741 22.1309H12.3525L11.6378 22.8457L12.143 21.7858L9.97409 15.1188L8.97588 14.6382L10.3931 14.7615L15.7292 10.8919L15.9633 9.56094L16.2344 10.9042L21.5335 14.7615L22.9384 14.6259L21.9525 15.1188L19.7959 21.7489L20.2765 22.8333L20.2642 22.8457Z',
                fill: '#FFB34D',
            }),
        ),
    SvgAssaultX48X48 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 48, height: 48, viewBox: '0 0 48 48', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M24.591 8.43413C24.2391 8.17627 23.7607 8.17627 23.4088 8.43413L8.18991 19.5867C7.84029 19.8429 7.69553 20.2951 7.83139 20.7067L13.6434 38.3142C13.7786 38.7239 14.1615 39.0007 14.593 39.0007H33.4069C33.8384 39.0007 34.2212 38.7239 34.3565 38.3142L40.1685 20.7067C40.3043 20.2951 40.1596 19.8429 39.8099 19.5867L24.591 8.43413ZM30.3958 34.2685L29.3606 33.1964H18.5283L17.4561 34.2685L18.214 32.6788L14.9606 22.6783L13.4633 21.9573L15.5891 22.1422L23.5932 16.3378L23.9445 14.3414L24.3511 16.3563L32.2998 22.1422L34.4071 21.9388L32.9283 22.6783L29.6934 32.6233L30.4143 34.25L30.3958 34.2685Z',
                fill: '#FFB34D',
            }),
        ),
    SvgBreakX16X16 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', { d: 'M8 2L15 9H11L8 6L5 9H1L8 2Z', fill: '#FFB34D' }),
            reactExports.createElement('path', { d: 'M11 11L8 8L5 11V14L8 11L11 14V11Z', fill: '#FFB34D' }),
        ),
    SvgBreakX24X24 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', { d: 'M12 3L21 12H16L12 8L8 12H3L12 3Z', fill: '#FFB34D' }),
            reactExports.createElement('path', { d: 'M16 15L12 11L8 15V19L12 15L16 19V15Z', fill: '#FFB34D' }),
        ),
    SvgBreakX32X32 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M15.6464 5.35355C15.8417 5.15829 16.1583 5.15829 16.3536 5.35355L28 17H22.1988C22.0711 17 21.9483 16.9512 21.8555 16.8635L16.3433 11.6576C16.1506 11.4756 15.8494 11.4756 15.6567 11.6576L10.1445 16.8635C10.0517 16.9512 9.92888 17 9.80121 17H4L15.6464 5.35355Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M22 20.8738C22 20.7412 21.9473 20.614 21.8536 20.5203L16.3536 15.0203C16.1583 14.825 15.8417 14.825 15.6464 15.0203L10.1464 20.5203C10.0527 20.614 10 20.7412 10 20.8738V27L15.6464 21.3536C15.8417 21.1583 16.1583 21.1583 16.3536 21.3536L22 27V20.8738Z',
                fill: '#FFB34D',
            }),
        ),
    SvgBreakX48X48 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 48, height: 48, viewBox: '0 0 48 48', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M23.2929 8.70711C23.6834 8.31658 24.3166 8.31658 24.7071 8.70711L42 26H33.4142C33.149 26 32.8946 25.8946 32.7071 25.7071L24.7071 17.7071C24.3166 17.3166 23.6834 17.3166 23.2929 17.7071L15.2929 25.7071C15.1054 25.8946 14.851 26 14.5858 26H6L23.2929 8.70711Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M33 31.4142C33 31.149 32.8946 30.8946 32.7071 30.7071L24.7071 22.7071C24.3166 22.3166 23.6834 22.3166 23.2929 22.7071L15.2929 30.7071C15.1054 30.8946 15 31.149 15 31.4142V40L23.2929 31.7071C23.6834 31.3166 24.3166 31.3166 24.7071 31.7071L33 40V31.4142Z',
                fill: '#FFB34D',
            }),
        ),
    SvgSniperX16X16 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', { d: 'M9 8L10 9H14V7H10L9 8Z', fill: '#FFB34D' }),
            reactExports.createElement('path', { d: 'M7 8L6 9H2V7H6L7 8Z', fill: '#FFB34D' }),
            reactExports.createElement('path', { d: 'M8 9L7 10V14H9V10L8 9Z', fill: '#FFB34D' }),
            reactExports.createElement('path', { d: 'M8 7L7 6V2H9V6L8 7Z', fill: '#FFB34D' }),
        ),
    SvgSniperX24X24 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', { d: 'M10 3V8L12 10L14 8V3H10Z', fill: '#FFB34D' }),
            reactExports.createElement('path', { d: 'M10 21V16L12 14L14 16V21H10Z', fill: '#FFB34D' }),
            reactExports.createElement('path', { d: 'M8 14H3V10H8L10 12L8 14Z', fill: '#FFB34D' }),
            reactExports.createElement('path', { d: 'M21 14H16L14 12L16 10H21V14Z', fill: '#FFB34D' }),
        ),
    SvgSniperX32X32 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M16.0003 13L13 10V3.5C13 3.22386 13.2239 3 13.5 3H18.5C18.7761 3 19 3.22386 19 3.5V10L16.0003 13Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M16.0003 19L13 22V28.5C13 28.7761 13.2239 29 13.5 29H18.5C18.7761 29 19 28.7761 19 28.5V22L16.0003 19Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M22 13L19 16L22 19H28.5C28.7761 19 29 18.7761 29 18.5V13.5C29 13.2239 28.7761 13 28.5 13H22Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M13 15.9998L10 13H3.5C3.22386 13 3 13.2239 3 13.5L3.00005 18.5C3.00005 18.7761 3.22391 19 3.50005 19H10L13 15.9998Z',
                fill: '#FFB34D',
            }),
        ),
    SvgSniperX48X48 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 48, height: 48, viewBox: '0 0 48 48', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M24 20.5L20 16.4V7.7C20 7.3134 20.3134 7 20.7 7H27.3C27.6866 7 28 7.3134 28 7.7V16.4L24 20.5Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M24 27.5L20 31.6V40.3C20 40.6866 20.3134 41 20.7 41H27.3C27.6866 41 28 40.6866 28 40.3V31.6L24 27.5Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M31.4 20L27.5 24L31.4 28H40.3C40.6866 28 41 27.6866 41 27.3V20.7C41 20.3134 40.6866 20 40.3 20L31.4 20Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M20.5 24L16.6 20L7.7 20C7.3134 20 7 20.3134 7 20.7V27.3C7 27.6866 7.3134 28 7.7 28H16.6L20.5 24Z',
                fill: '#FFB34D',
            }),
        ),
    SvgSupportX16X16 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M3 5V8.40002L2.80001 8.10004L2.20001 9.00005H1V3H2.20001L2.80002 4.00001L3.40002 3H8.80006C9.61885 3 10.7815 4.12547 11.5618 5.00075C11.55 5.00025 11.5382 5 11.5263 5H6.47368L5.89474 6L5.31579 5H3ZM6.39951 11.9999H11.7996C13.0298 11.9999 15.3996 9.01318 15.3996 9.01318C15.3996 9.01318 13.1393 5.99989 11.7996 5.99989H6.39951L5.79951 6.9999L5.1995 5.99989H3.99949V11.9999H5.1995L5.79951 11.0999L6.39951 11.9999Z',
                fill: '#FFB34D',
            }),
        ),
    SvgSupportX24X24 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M6 8V12.2364L5.46667 13H4V6H5.46667L6.2 7.16667L6.93333 6H13.5333C14.712 6 16.4737 7.82156 17.3683 8.84226C16.7413 8.35641 16.1028 8 15.5789 8H10.4211L9.68421 9.16667L8.94737 8H6ZM10.9474 17H17.5789C19.0897 17 22 13.5155 22 13.5155C22 13.5155 19.2242 10 17.5789 10H10.9474L10.2105 11.1667L9.47368 10H8V17H9.47368L10.2105 15.95L10.9474 17Z',
                fill: '#FFB34D',
            }),
        ),
    SvgSupportX32X32 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M7 11.5V16.9014C6.84147 16.9014 6.68293 16.9756 6.58398 17.124L6.14843 17.7774C6.0557 17.9164 5.89959 18 5.73241 18H4.5C4.22386 18 4 17.7761 4 17.5V8.5C4 8.22386 4.22386 8 4.5 8H5.7169C5.89254 8 6.05529 8.09215 6.14565 8.24275L6.57125 8.95209C6.76546 9.27576 7.23455 9.27576 7.42875 8.95209L7.85435 8.24275C7.94471 8.09215 8.10746 8 8.2831 8H17C18.591 8 20.9608 10.5496 22.1919 12.0156C21.4185 11.4193 20.6452 11 20 11H13.2831C13.1075 11 12.9447 11.0921 12.8543 11.2428L12.4287 11.9521C12.2345 12.2758 11.7655 12.2758 11.5713 11.9521L11.1457 11.2428C11.0553 11.0921 10.8925 11 10.7169 11H7.5C7.22386 11 7 11.2239 7 11.5ZM13.2676 23H22C24.0503 23 28 18.0221 28 18.0221C28 18.0221 24.2329 13 22 13H13.2831C13.1075 13 12.9447 13.0921 12.8543 13.2428L12.4287 13.9521C12.2345 14.2758 11.7655 14.2758 11.5713 13.9521L11.1457 13.2428C11.0553 13.0921 10.8925 13 10.7169 13H9.5C9.22386 13 9 13.2239 9 13.5V22.5C9 22.7761 9.22386 23 9.5 23H10.7324C10.8996 23 11.0557 22.9164 11.1484 22.7774L11.584 22.124C11.7819 21.8272 12.2181 21.8272 12.416 22.124L12.8516 22.7774C12.9443 22.9164 13.1004 23 13.2676 23Z',
                fill: '#FFB34D',
            }),
        ),
    SvgSupportX48X48 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 48, height: 48, viewBox: '0 0 48 48', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M33.4476 34H20C19.6852 34 19.3889 33.8518 19.2 33.6L18.8 33.0667C18.4 32.5333 17.6 32.5333 17.2 33.0667L16.8 33.6C16.6111 33.8518 16.3148 34 16 34H15C14.4477 34 14 33.5523 14 33V21C14 20.4477 14.4477 20 15 20H16C16.3148 20 16.6111 20.1482 16.8 20.4L17.2007 20.9343C17.6005 21.4673 18.4 21.4677 18.8002 20.935L19.2 20.4029C19.3889 20.1515 19.685 20.0036 19.9995 20.0036H33.4476C36.797 20.0036 42 27.0332 42 27.0332C42 27.0332 36.5231 34 33.4476 34ZM18.8 16.9333C18.4 17.4667 17.6 17.4667 17.2 16.9333L16.8 16.4C16.6111 16.1482 16.3148 16 16 16H11C10.4477 16 10 16.4477 10 17V23.6667C10 23.883 9.92982 24.0936 9.8 24.2667L8.79646 25.6047C8.6096 25.8539 8.31733 26.0017 8.00591 26.0047L7.00945 26.0141C6.4535 26.0193 6 25.5701 6 25.0141V13C6 12.4477 6.44772 12 7 12H7.95334C8.29399 12 8.61121 12.1734 8.79511 12.4602L9.15823 13.0264C9.55171 13.6399 10.4483 13.6399 10.8418 13.0264L11.2049 12.4602C11.3888 12.1734 11.706 12 12.0467 12H25.0638C26.8964 12 29.3189 14.119 31.1094 16.0382L20.0021 16.0017C19.6861 16.0006 19.3883 16.1489 19.1988 16.4016L18.8 16.9333Z',
                fill: '#FFB34D',
            }),
        ),
    SvgUniversalX16X16 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M4.79109 7.99164C4.79109 6.22006 6.22841 4.79109 7.99164 4.79109C8.45961 4.79109 8.90251 4.89972 9.30362 5.07521L11.1504 2.90251C10.2312 2.33426 9.1532 2 7.99164 2C4.68245 2 2 4.68245 2 8C2 9.50418 2.55153 10.8747 3.47075 11.9276L5.32591 9.75487C4.99164 9.25348 4.79944 8.65181 4.79944 8L4.79109 7.99164ZM12.6295 4.18941L10.7493 6.38719C11.0251 6.86351 11.2006 7.40669 11.2006 8C11.2006 9.77159 9.76323 11.2006 8 11.2006C7.59053 11.2006 7.19777 11.117 6.83844 10.9749L4.96657 13.1727C5.86072 13.6992 6.88858 14 8 14C11.3175 14 14 11.3175 14 8C14 6.55432 13.4903 5.22563 12.6295 4.18941Z',
                fill: '#FFB34D',
            }),
        ),
    SvgUniversalX24X24 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M7.72145 11.9889C7.72145 9.62674 9.63788 7.72145 11.9889 7.72145C12.6128 7.72145 13.2033 7.8663 13.7382 8.10028L16.2006 5.20334C14.9749 4.44568 13.5376 4 11.9889 4C7.5766 4 4 7.5766 4 12C4 14.0056 4.73538 15.8329 5.961 17.2368L8.43454 14.3398C7.98886 13.6713 7.73259 12.8691 7.73259 12L7.72145 11.9889ZM18.1727 6.91922L15.6657 9.84958C16.0334 10.4847 16.2674 11.2089 16.2674 12C16.2674 14.3621 14.351 16.2674 12 16.2674C11.454 16.2674 10.9304 16.156 10.4513 15.9666L7.95543 18.8969C9.14763 19.5989 10.5181 20 12 20C16.4234 20 20 16.4234 20 12C20 10.0724 19.3203 8.30084 18.1727 6.91922Z',
                fill: '#FFB34D',
            }),
        ),
    SvgUniversalX32X32 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M10.6518 15.9861C10.6518 13.0334 13.0474 10.6518 15.9861 10.6518C16.766 10.6518 17.5042 10.8329 18.1727 11.1253L21.2507 7.50418C19.7187 6.5571 17.922 6 15.9861 6C10.4708 6 6 10.4708 6 16C6 18.507 6.91922 20.7911 8.45125 22.546L11.5432 18.9248C10.9861 18.0891 10.6657 17.0864 10.6657 16L10.6518 15.9861ZM23.7159 9.64902L20.5822 13.312C21.0418 14.1058 21.3343 15.0111 21.3343 16C21.3343 18.9526 18.9387 21.3343 16 21.3343C15.3175 21.3343 14.663 21.195 14.0641 20.9582L10.9443 24.6212C12.4345 25.4986 14.1476 26 16 26C21.5292 26 26 21.5292 26 16C26 13.5905 25.1504 11.376 23.7159 9.64902Z',
                fill: '#FFB34D',
            }),
        ),
    SvgUniversalX48X48 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 48, height: 48, viewBox: '0 0 48 48', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M15.9777 23.9791C15.9777 19.5501 19.571 15.9777 23.9791 15.9777C25.149 15.9777 26.2563 16.2493 27.2591 16.688L31.876 11.2563C29.578 9.83565 26.883 9 23.9791 9C15.7061 9 9 15.7061 9 24C9 27.7604 10.3788 31.1866 12.6769 33.8189L17.3148 28.3872C16.4791 27.1337 15.9986 25.6295 15.9986 24L15.9777 23.9791ZM35.5738 14.4735L30.8733 19.968C31.5627 21.1588 32.0014 22.5167 32.0014 24C32.0014 28.429 28.4081 32.0014 24 32.0014C22.9763 32.0014 21.9944 31.7925 21.0961 31.4373L16.4164 36.9318C18.6518 38.2479 21.2214 39 24 39C32.2939 39 39 32.2939 39 24C39 20.3858 37.7256 17.0641 35.5738 14.4735Z',
                fill: '#FFB34D',
            }),
        ),
    SvgWheeledX16X16 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M7 8C7 9.65685 5.65685 11 4 11C2.34315 11 1 9.65685 1 8C1 6.34315 2.34315 5 4 5C5.65685 5 7 6.34315 7 8Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z',
                fill: '#FFB34D',
            }),
        ),
    SvgWheeledX24X24 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M11 12C11 14.2091 9.20914 16 7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M21 12C21 14.2091 19.2091 16 17 16C14.7909 16 13 14.2091 13 12C13 9.79086 14.7909 8 17 8C19.2091 8 21 9.79086 21 12Z',
                fill: '#FFB34D',
            }),
        ),
    SvgWheeledX32X32 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M14 16C14 18.7614 11.7614 21 9 21C6.23858 21 4 18.7614 4 16C4 13.2386 6.23858 11 9 11C11.7614 11 14 13.2386 14 16Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M28 16C28 18.7614 25.7614 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z',
                fill: '#FFB34D',
            }),
        ),
    SvgWheeledX48X48 = (e) =>
        reactExports.createElement(
            'svg',
            { width: 48, height: 48, viewBox: '0 0 48 48', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            reactExports.createElement('path', {
                d: 'M21 24C21 28.4183 17.4183 32 13 32C8.58172 32 5 28.4183 5 24C5 19.5817 8.58172 16 13 16C17.4183 16 21 19.5817 21 24Z',
                fill: '#FFB34D',
            }),
            reactExports.createElement('path', {
                d: 'M43 24C43 28.4183 39.4183 32 35 32C30.5817 32 27 28.4183 27 24C27 19.5817 30.5817 16 35 16C39.4183 16 43 19.5817 43 24Z',
                fill: '#FFB34D',
            }),
        ),
    ROLE_TO_COMPONENT = {
        [`${roles.assault}_x16x16`]: SvgAssaultX16X16,
        [`${roles.break}_x16x16`]: SvgBreakX16X16,
        [`${roles.sniper}_x16x16`]: SvgSniperX16X16,
        [`${roles.support}_x16x16`]: SvgSupportX16X16,
        [`${roles.universal}_x16x16`]: SvgUniversalX16X16,
        [`${roles.wheeled}_x16x16`]: SvgWheeledX16X16,
        [`${roles.assault}_x24x24`]: SvgAssaultX24X24,
        [`${roles.break}_x24x24`]: SvgBreakX24X24,
        [`${roles.sniper}_x24x24`]: SvgSniperX24X24,
        [`${roles.support}_x24x24`]: SvgSupportX24X24,
        [`${roles.universal}_x24x24`]: SvgUniversalX24X24,
        [`${roles.wheeled}_x24x24`]: SvgWheeledX24X24,
        [`${roles.assault}_x32x32`]: SvgAssaultX32X32,
        [`${roles.break}_x32x32`]: SvgBreakX32X32,
        [`${roles.sniper}_x32x32`]: SvgSniperX32X32,
        [`${roles.support}_x32x32`]: SvgSupportX32X32,
        [`${roles.universal}_x32x32`]: SvgUniversalX32X32,
        [`${roles.wheeled}_x32x32`]: SvgWheeledX32X32,
        [`${roles.assault}_x48x48`]: SvgAssaultX48X48,
        [`${roles.break}_x48x48`]: SvgBreakX48X48,
        [`${roles.sniper}_x48x48`]: SvgSniperX48X48,
        [`${roles.support}_x48x48`]: SvgSupportX48X48,
        [`${roles.universal}_x48x48`]: SvgUniversalX48X48,
        [`${roles.wheeled}_x48x48`]: SvgWheeledX48X48,
    },
    root$9 = 'VehicleRole_root_741b56a9',
    base$h = 'VehicleRole_e70537d3',
    base__x16x16 = 'VehicleRole_base__x16x16_f444f190',
    base__x24x24$1 = 'VehicleRole_base__x24x24_cc02d077',
    base__x32x32$1 = 'VehicleRole_base__x32x32_2180a099',
    base__x48x48$1 = 'VehicleRole_base__x48x48_2a01e86c',
    icon$4 = 'VehicleRole_icon_7f7f6256',
    fadeInWithScale$9 = 'VehicleRole_fadeInWithScale_741b56a9',
    slideUp$9 = 'VehicleRole_slideUp_741b56a9',
    blink$9 = 'VehicleRole_blink_741b56a9',
    scale$9 = 'VehicleRole_scale_741b56a9',
    rotate$9 = 'VehicleRole_rotate_741b56a9',
    windowIn$9 = 'VehicleRole_windowIn_741b56a9',
    fadeOut$9 = 'VehicleRole_fadeOut_741b56a9',
    fadeIn$9 = 'VehicleRole_fadeIn_741b56a9',
    styles$l = {
        root: root$9,
        base: base$h,
        base__x16x16: base__x16x16,
        base__x24x24: base__x24x24$1,
        base__x32x32: base__x32x32$1,
        base__x48x48: base__x48x48$1,
        icon: icon$4,
        fadeInWithScale: fadeInWithScale$9,
        slideUp: slideUp$9,
        blink: blink$9,
        scale: scale$9,
        rotate: rotate$9,
        windowIn: windowIn$9,
        fadeOut: fadeOut$9,
        fadeIn: fadeIn$9,
    },
    sizes$4 = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48' },
    VehicleRole = reactExports.forwardRef(function ({ roleKey: e, size: t = sizes$4.x24x24, classNames: r, ...s }, n) {
        const a = ROLE_TO_COMPONENT[`${e}_${t}`];
        if (a)
            return jsxRuntimeExports.jsx('div', {
                ...s,
                ref: n,
                className: cx(styles$l.base, styles$l[`base__${t}`], null == r ? void 0 : r.base),
                children: jsxRuntimeExports.jsx(a, { className: cx(styles$l.icon, null == r ? void 0 : r.icon) }),
            });
        console.error(`Unknown vehicle role type ${e} with size ${t}`);
    });
VehicleRole.sizes = sizes$4;
const sizes$3 = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    upscaledSizes = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    mapTypes = {
        [types$1.lightTank]: 'light_tank',
        [types$1.mediumTank]: 'medium_tank',
        [types$1.heavyTank]: 'heavy_tank',
        [types$1.SPG]: 'spg',
        [types$1['AT-SPG']]: 'tank_destroyer',
    },
    root$8 = 'VehicleType_root_4e0d61e4',
    base$g = 'VehicleType_30b4aab0',
    base__x24x24 = 'VehicleType_base__x24x24_a3dc7aa3',
    base__x48x48 = 'VehicleType_base__x48x48_cb59f57a',
    base__x64x64 = 'VehicleType_base__x64x64_bb9b890',
    base__x96x96$1 = 'VehicleType_base__x96x96_919f9f92',
    base__premium__x24x24 = 'VehicleType_base__premium__x24x24_92335fef',
    base__premium__x48x48 = 'VehicleType_base__premium__x48x48_e19c5d21',
    base__premium__x64x64 = 'VehicleType_base__premium__x64x64_ba9a2a05',
    base__premium__x96x96 = 'VehicleType_base__premium__x96x96_d837a523',
    icon$3 = 'VehicleType_icon_b15d2628',
    fadeInWithScale$8 = 'VehicleType_fadeInWithScale_4e0d61e4',
    slideUp$8 = 'VehicleType_slideUp_4e0d61e4',
    blink$8 = 'VehicleType_blink_4e0d61e4',
    scale$8 = 'VehicleType_scale_4e0d61e4',
    rotate$8 = 'VehicleType_rotate_4e0d61e4',
    windowIn$8 = 'VehicleType_windowIn_4e0d61e4',
    fadeOut$8 = 'VehicleType_fadeOut_4e0d61e4',
    fadeIn$8 = 'VehicleType_fadeIn_4e0d61e4',
    styles$k = {
        root: root$8,
        base: base$g,
        base__x24x24: base__x24x24,
        base__x48x48: base__x48x48,
        base__x64x64: base__x64x64,
        base__x96x96: base__x96x96$1,
        base__premium__x24x24: base__premium__x24x24,
        base__premium__x48x48: base__premium__x48x48,
        base__premium__x64x64: base__premium__x64x64,
        base__premium__x96x96: base__premium__x96x96,
        icon: icon$3,
        fadeInWithScale: fadeInWithScale$8,
        slideUp: slideUp$8,
        blink: blink$8,
        scale: scale$8,
        rotate: rotate$8,
        windowIn: windowIn$8,
        fadeOut: fadeOut$8,
        fadeIn: fadeIn$8,
    },
    VehicleType = reactExports.forwardRef(function (
        { type: e, size: t = sizes$3.x48x48, premium: r = !1, fit: s = 'contain', ...n },
        a,
    ) {
        const o = useUpscale(sizes$3[t], upscaledSizes[t]);
        return jsxRuntimeExports.jsx(Image, {
            ...n,
            ref: a,
            fit: s,
            className: cx(styles$k.base, r ? styles$k[`base__premium__${t}`] : styles$k[`base__${t}`], n.className),
            path: `ui_kit.vehicle_type.${o}.${r ? 'premium_' : ''}${normalizeResource(mapTypes[e])}_${o}`,
        });
    });
((VehicleType.types = types$1), (VehicleType.sizes = sizes$3));
const base$f = 'VehicleInfo_1732f1f0',
    name = 'VehicleInfo_name_3989ca04',
    name__premium = 'VehicleInfo_name__premium_258b3b93',
    styles$j = { base: base$f, name: name, name__premium: name__premium },
    VehicleName = defineStyledComponent('VehicleName', styles$j.name, {
        variants: { premium: { true: styles$j.name__premium } },
    }),
    VehicleInfo = reactExports.forwardRef(function (e, t) {
        return jsxRuntimeExports.jsx('div', { ...e, ref: t, className: cx(styles$j.base, e.className) });
    });
((VehicleInfo.Prestige = PrestigeLevel),
    (VehicleInfo.Level = VehicleLevel),
    (VehicleInfo.Type = VehicleType),
    (VehicleInfo.Name = VehicleName),
    (VehicleInfo.Role = VehicleRole));
class ErrorHandler extends reactExports.Component {
    constructor() {
        (super(...arguments), __publicField(this, 'state', { failure: !1, error: null }));
    }
    static getDerivedStateFromError(e) {
        return (console.error(e), { failure: !0, error: e });
    }
    failure() {
        return jsxRuntimeExports.jsxs('div', {
            children: [
                jsxRuntimeExports.jsx('h1', { children: 'Something went wrong.' }),
                this.state.error && jsxRuntimeExports.jsx('pre', { children: this.state.error.toString() }),
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
const base__x120x96 = 'VehicleImage_base__x120x96_32ca06f1',
    base__x190x152 = 'VehicleImage_base__x190x152_41379c70',
    base__x380x304 = 'VehicleImage_base__x380x304_274f87fe',
    styles$i = { base__x120x96: base__x120x96, base__x190x152: base__x190x152, base__x380x304: base__x380x304 },
    sizes$2 = { x120x96: 'x120x96', x190x152: 'x190x152', x380x304: 'x380x304' },
    Base$5 = defineStyledComponent('VehicleImage', {
        element: Image,
        className: styles$i.base,
        cva: {
            variants: {
                size: {
                    [sizes$2.x120x96]: styles$i.base__x120x96,
                    [sizes$2.x190x152]: styles$i.base__x190x152,
                    [sizes$2.x380x304]: styles$i.base__x380x304,
                },
            },
        },
    });
function UnknownVehicleImage({ size: e = sizes$2.x380x304, ...t }) {
    return jsxRuntimeExports.jsx(Base$5, { ...t, size: e, path: `vehicle.${e}.tank_empty` });
}
const VehicleImage = reactExports.forwardRef(function (
    { size: e = sizes$2.x380x304, name: t, width: r, height: s, className: n, ...a },
    o,
) {
    const u = resources.resolve('images'),
        i = `vehicle.${e}.${getVehicleImageKey(t)}`;
    return u.has(i)
        ? jsxRuntimeExports.jsx(Base$5, { ...a, ref: o, size: e, className: n, path: i, width: r, height: s })
        : (console.warn(`Fail to retrieve icon maps/icons/vehicle/${e}/${getVehicleImageKey(t)}`),
          jsxRuntimeExports.jsx(UnknownVehicleImage, { size: e, className: n, width: r, height: s }));
});
function useCalculateLeftTime(e) {
    const [t, r] = reactExports.useState(e);
    (reactExports.useEffect(() => {
        r(e);
    }, [e]),
        reactExports.useEffect(() => {
            if (0 === t) return;
            const e = Math.min(t, 60),
                s = setTimeout(() => {
                    r((t) => Math.max(t - e, 0));
                }, 1e3 * e);
            return () => clearTimeout(s);
        }, [t]));
    const s = seconds(t);
    return greaterThan(s, days(1))
        ? convert(s, 'days')
        : greaterThan(s, hours(1))
          ? convert(s, 'hours')
          : greaterThan(s, seconds(1))
            ? hours(1)
            : hours(0);
}
((VehicleImage.UnknownVehicleImage = UnknownVehicleImage), (VehicleImage.size = sizes$2));
const base$e = 'IconCounter_33c660e9',
    styles$h = { base: base$e };
function IconCounter({ className: e }) {
    return jsxRuntimeExports.jsx('div', { className: cx(styles$h.base, e) });
}
const base$d = 'ShortCounter_d2d7b370',
    text = 'ShortCounter_text_ecf2e742',
    count = 'ShortCounter_count_d7a74fd8',
    styles$g = { base: base$d, text: text, count: count },
    ShortCounter = reactExports.forwardRef(function ({ time: e, wins: t, battles: r, classNames: s, ...n }, a) {
        const o = resources.resolve('intl'),
            u = useCalculateLeftTime(e),
            i = reactExports.useMemo(
                () =>
                    u.value > 0
                        ? { path: `hangar.rentalCounter.count.${u.unit}`, count: Math.ceil(u.value) }
                        : r > 0
                          ? { path: 'hangar.rentalCounter.count.battles', count: r }
                          : t > 0
                            ? { path: 'hangar.rentalCounter.count.wins', count: t }
                            : null,
                [u, t, r],
            );
        if (i)
            return jsxRuntimeExports.jsxs('div', {
                ...n,
                ref: a,
                className: cx(styles$g.base, null == s ? void 0 : s.base),
                children: [
                    jsxRuntimeExports.jsx(IconCounter, { className: null == s ? void 0 : s.icon }),
                    jsxRuntimeExports.jsx(FormatPluralString, {
                        className: cx(styles$g.text, null == s ? void 0 : s.text),
                        path: i.path,
                        count: i.count,
                        params: {
                            count: jsxRuntimeExports.jsxs('span', {
                                className: styles$g.count,
                                children: [o.formatNumber('integral', i.count), ' '],
                            }),
                        },
                    }),
                ],
            });
    }),
    RentalCounter = reactExports.forwardRef(function ({ className: e, ...t }, r) {
        return jsxRuntimeExports.jsx('div', { ...t, ref: r, className: e });
    });
function isSerializableReactNode(e) {
    return (
        !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
        (!reactExports.isValidElement(e) && !!Array.isArray(e) && e.every(isSerializableReactNode))
    );
}
RentalCounter.ShortCounter = ShortCounter;
const base$c = 'MultilineOverflow_8834bd8e',
    content$2 = 'MultilineOverflow_content_b539970d',
    styles$f = { base: base$c, content: content$2 };
function isSerializableParams(e) {
    return !e || Object.values(e).every(isSerializableReactNode);
}
const MultilineOverflow = reactExports.forwardRef(function (
        {
            text: e,
            brackets: t,
            params: r,
            formatters: s,
            upgradeLegacy: n,
            split: a = !0,
            onMouseEnter: o,
            onMouseLeave: u,
            onClick: i,
            tooltipDisabled: l = !1,
            tooltip: c,
            className: d,
            classNames: _,
            ...p
        },
        m,
    ) {
        const E = reactExports.useRef(null),
            [f, b] = reactExports.useState(!1);
        reactExports.useEffect(() => {
            if (0 === e.length) return;
            const t = E.current;
            if (!t) return;
            const r = document.createElement('div');
            let s = noop$1;
            function n() {
                if (!t) return;
                (s(),
                    (r.style.visibility = 'hidden'),
                    (r.className = cx(styles$f.content, t.children[0].className)),
                    (r.innerHTML = ''),
                    t.appendChild(r));
                for (let s of t.children[0].childNodes.values()) {
                    if (s instanceof HTMLElement) {
                        const e = s.cloneNode(!0);
                        r.appendChild(e);
                    }
                    if (s.nodeType === Node.TEXT_NODE) {
                        const e = document.createTextNode(s.nodeValue ?? '');
                        r.appendChild(e);
                    }
                }
                const e = document.createElement('div');
                ((e.innerHTML = '...'),
                    r.appendChild(e),
                    (s = createLayoutReadyInEffect$1(() => {
                        var s, n;
                        const a = [];
                        for (let e = r.childNodes.length - 2; 0 !== e; e--) {
                            const s = r.childNodes[e];
                            if (s instanceof HTMLElement) {
                                if (s.offsetTop + s.offsetHeight <= t.offsetHeight) break;
                                a.push(s);
                            }
                        }
                        a.forEach((e) => e.remove());
                        const o = null == (s = r.lastChild) ? void 0 : s.previousSibling;
                        (0 === a.length
                            ? (null == (n = r.lastChild) || n.remove(), b(!1))
                            : o.offsetWidth + o.offsetLeft + e.offsetWidth > t.offsetWidth
                              ? (o.remove(), b(!0))
                              : b(!0),
                            (r.style.visibility = ''));
                    })));
            }
            const a = new ResizeObserver(n);
            return (
                a.observe(t),
                new DisposeBuilder()
                    .add(() => s())
                    .add(addEventListener(window, 'resize', n))
                    .add(a.disconnect.bind(a))
                    .add(r.remove.bind(r)).dispose
            );
        }, [m, e]);
        const x = isSerializableParams(r),
            g = useParamTooltip(
                'format_text',
                reactExports.useMemo(
                    () => ({
                        text: e,
                        params: x ? r : void 0,
                        split: a,
                        upgradeLegacy: n,
                        brackets: t,
                        resId: resources.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [e, t, a, n, r, x],
                ),
            ),
            h = c ?? g;
        if (
            (reactExports.useEffect(() => {
                l || f || h.onMouseLeave();
            }, [f, h, c, l, x]),
            0 === e.length)
        )
            return null;
        return jsxRuntimeExports.jsx('div', {
            ...p,
            onMouseEnter: function (e) {
                (null == o || o(e), f && !l && h.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == i || i(e), l || h.onClick());
            },
            onMouseLeave: function (e) {
                (null == u || u(e), l || h.onMouseLeave());
            },
            ref: assignRefs([m, E]),
            className: cx(styles$f.base, d, null == _ ? void 0 : _.base),
            children: jsxRuntimeExports.jsx(FormatText, {
                text: e,
                brackets: t,
                params: r,
                upgradeLegacy: n,
                split: a,
                formatters: s,
                className: null == _ ? void 0 : _.text,
                style: { visibility: 'hidden' },
            }),
        });
    }),
    base$b = 'CarouselScroll_3690a837',
    areaContent = 'CarouselScroll_areaContent_f5dd7772',
    styles$e = { base: base$b, areaContent: areaContent },
    GAP_BEFORE_START = 5,
    draggingStates = { dragging: 'dragging', idle: 'idle' };
function CarouselScroll({
    api: e,
    children: t,
    className: r,
    areaClassNames: s,
    staticContent: n,
    disabled: a,
    onDraggingState: o,
}) {
    const { animationScroll: u, applyScroll: i, setDisabled: l } = e,
        c = useScrollByDragElements(e, dragDirections.horizontal, void 0, { gapBeforeStart: GAP_BEFORE_START });
    return (
        reactExports.useEffect(() => {
            null == o || o(c.type === draggingStates.dragging);
        }, [c.type, o]),
        reactExports.useEffect(() => {
            l(a);
        }, [a, l]),
        reactExports.useEffect(
            () =>
                createLayoutReadyInEffect$1(() => {
                    c.type === draggingStates.idle && u.scrollPosition.idle && i(u.scrollPosition.get());
                }),
            [u.scrollPosition, c, i],
        ),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$e.base, r),
            children: jsxRuntimeExports.jsxs(Area$1, {
                className: null == s ? void 0 : s.base,
                classNames: {
                    wrapper: cx(styles$e.areaWrapper, null == s ? void 0 : s.wrapper),
                    content: cx(styles$e.areaContent, null == s ? void 0 : s.content),
                },
                children: [t, n],
            }),
        })
    );
}
const directions = { horizontal: 'horizontal' },
    PERCENT_OF_VISIBLE_ELEMENTS = 1.5,
    SAFETY_FACTOR = 0.25;
function calculateRangeRows(e, t, r) {
    if (0 === t) return [0, 0];
    const s = e.animationScroll.scrollPosition.get(),
        n = e.getWrapperSize();
    if ('number' != typeof n || 0 === n) return [0, 0];
    const a = Math.ceil((n / r) * PERCENT_OF_VISIBLE_ELEMENTS),
        o = Math.max(0, Math.ceil(s / r) - Math.floor(a * SAFETY_FACTOR));
    return [o, Math.min(t, o + a)];
}
function DefaultWrapper(e) {
    return jsxRuntimeExports.jsx('div', { ...e });
}
function calculateRangeItems(e, t, r) {
    if (0 === t) return [0, 0];
    const s = e.animationScroll.scrollPosition.get(),
        n = e.getWrapperSize();
    if ('number' != typeof n || 0 === n || Number.isNaN(s)) return [0, 0];
    const a = Math.ceil((n / r) * PERCENT_OF_VISIBLE_ELEMENTS),
        o = clamp$1(0, t, Math.ceil(s / r) - Math.floor(a * SAFETY_FACTOR));
    return [o, Math.min(t, o + a)];
}
const initVisibleRange = [0, 0];
function useVisibleRange(e, t, r, s, n) {
    const [a, o] = reactExports.useState(initVisibleRange),
        u = reactExports.useRef(initVisibleRange),
        [i, l] = useOptionalTransition(r),
        c = usePrevious(i),
        d = useThrottleCall(t, !0),
        _ = useEvent$1(() => {
            l(() => {
                const [e, t] = u.current;
                o((r) => {
                    const [s, n] = r;
                    return e === s && t === n ? r : [e, t];
                });
            });
        }),
        p = useEvent$1(() => {
            d.call(() => {
                const e = s();
                (u.current[0] === e[0] && u.current[1] === e[1]) || ((u.current = e), i || _());
            });
        });
    return (
        reactExports.useEffect(() => {
            c && !i && ((u.current[0] === a[0] && u.current[1] === a[1]) || _());
        }, [i, c, _, a]),
        reactExports.useLayoutEffect(
            () => (
                e.events.on('change', p),
                e.events.on('recalculateContent', p),
                e.events.on('resizeHandled', p),
                p(),
                () => {
                    (e.events.off('change', p),
                        e.events.off('recalculateContent', p),
                        e.events.off('resizeHandled', p));
                }
            ),
            [e.events, p, n],
        ),
        a
    );
}
const renderScrollDefault$1 = (e) => jsxRuntimeExports.jsx(DefaultScroll$1, { ...e });
function HorizontalList({
    totalElements: e,
    throttle: t = 0,
    api: r,
    elementWidth: s,
    wrappers: n,
    className: a,
    renderElement: o,
    asyncRenderEnabled: u = !1,
    renderScroll: i = renderScrollDefault$1,
}) {
    const l = useVisibleRange(r, t, u, () => calculateRangeItems(r, e, s), e),
        c = (null == n ? void 0 : n.Element) ?? reactExports.Fragment,
        d = (null == n ? void 0 : n.Content) ?? DefaultWrapper,
        [_, p] = l,
        m = Math.min(e, p),
        E = clamp$1(0, m, _);
    return i(
        {
            className: a,
            children: jsxRuntimeExports.jsxs(d, {
                children: [
                    jsxRuntimeExports.jsx('div', { style: { width: _ * s } }),
                    mapRange(E, Math.max(m, E), (e) => jsxRuntimeExports.jsx(c, { children: o(e) }, e)),
                    jsxRuntimeExports.jsx('div', { style: { width: Math.max(0, e - p) * s } }),
                ],
            }),
        },
        l,
    );
}
const renderScrollDefault = (e) => jsxRuntimeExports.jsx(DefaultScroll, { ...e });
function VerticalList({
    api: e,
    className: t,
    totalElements: r,
    elementHeight: s,
    itemsPerRow: n = 1,
    wrappers: a,
    throttle: o = 0,
    asyncRenderEnabled: u = !1,
    renderElement: i,
    renderScroll: l = renderScrollDefault,
}) {
    const c = Math.ceil(r / n),
        d = useVisibleRange(e, o, u, () => calculateRangeRows(e, c, s));
    reactExports.useEffect(e.recalculateContent, [e, d]);
    const [_, p] = d,
        m = (null == a ? void 0 : a.Element) ?? reactExports.Fragment,
        E = (null == a ? void 0 : a.Content) ?? DefaultWrapper,
        f = Math.min(r, p * n),
        b = clamp$1(0, f, _ * n);
    return l(
        {
            className: t,
            children: jsxRuntimeExports.jsxs(E, {
                children: [
                    jsxRuntimeExports.jsx('div', { style: { width: '100%', height: _ * s } }),
                    mapRange(b, Math.max(b, f), (e) => jsxRuntimeExports.jsx(m, { children: i(e) }, e)),
                    jsxRuntimeExports.jsx('div', { style: { width: '100%', height: Math.max(0, c - p) * s } }),
                ],
            }),
        },
        d,
    );
}
function List(e) {
    return e.direction === directions.horizontal
        ? jsxRuntimeExports.jsx(HorizontalList, { ...e })
        : jsxRuntimeExports.jsx(VerticalList, { ...e });
}
List.displayName = 'VirtualList';
const CardContext = reactExports.createContext(void 0);
function useCardContext() {
    const e = reactExports.useContext(CardContext);
    if (!e) throw new Error('Card context must be used only within its provider');
    return e;
}
function CardContextProvider({ selected: e, hover: t, disabled: r, multiple: s, status: n, children: a }) {
    const o = reactExports.useMemo(
        () => ({ selected: e, hover: t, disabled: r, multiple: s, status: n }),
        [r, t, s, e, n],
    );
    return jsxRuntimeExports.jsx(CardContext.Provider, { value: o, children: a });
}
const CardsWrapperContext = reactExports.createContext(null);
function useCardsWrapperContextOptional() {
    return reactExports.useContext(CardsWrapperContext);
}
const CardsWrapperContextProvider = CardsWrapperContext.Provider,
    base$a = 'Content_8eaaf71a',
    content$1 = 'Content_ab8563af',
    disabledOverlay = 'Content_disabledOverlay_af87c441',
    base__multiple = 'Content_base__multiple_da09528a',
    base__disabled$1 = 'Content_base__disabled_da09528a',
    base__hover$1 = 'Content_base__hover_da09528a',
    base__selectedHover$1 = 'Content_base__selectedHover_da09528a',
    base__selected$1 = 'Content_base__selected_da09528a',
    multipleCorner = 'Content_multipleCorner_151c26ee',
    styles$d = {
        base: base$a,
        content: content$1,
        disabledOverlay: disabledOverlay,
        base__multiple: base__multiple,
        base__disabled: base__disabled$1,
        base__hover: base__hover$1,
        base__selectedHover: base__selectedHover$1,
        base__selected: base__selected$1,
        multipleCorner: multipleCorner,
    },
    MULTIPLE_CORNER_SIZE = 20,
    Base$4 = defineStyledComponent('Content', styles$d.base, {
        variants: {
            multiple: { true: styles$d.base__multiple },
            selected: { true: styles$d.base__selected },
            hover: { true: styles$d.base__hover },
            disabled: { true: styles$d.base__disabled },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: styles$d.base__selectedHover }],
    }),
    MainContainer = ({ children: e, classNames: t }) => {
        const r = React.useRef(null),
            s = useCardContext();
        return (
            React.useEffect(() => {
                if (s.multiple)
                    return createLayoutReadyInEffect$1(() => {
                        if (r.current) {
                            const e = r.current.getBoundingClientRect(),
                                t = Math.round((MULTIPLE_CORNER_SIZE / e.width) * 100),
                                s = Math.round((MULTIPLE_CORNER_SIZE / e.height) * 100);
                            (r.current.style.setProperty('--corner-width', `${t}%`),
                                r.current.style.setProperty('--corner-height', `${s}%`));
                        }
                    });
            }),
            jsxRuntimeExports.jsxs(Base$4, {
                multiple: s.multiple,
                selected: s.selected,
                hover: s.hover,
                disabled: s.disabled,
                children: [
                    s.multiple && jsxRuntimeExports.jsx('div', { className: styles$d.multipleCorner }),
                    jsxRuntimeExports.jsxs('div', {
                        ref: r,
                        className: cx(styles$d.content, null == t ? void 0 : t.mainContainerContent),
                        children: [
                            s.disabled && jsxRuntimeExports.jsx('div', { className: styles$d.disabledOverlay }),
                            e,
                        ],
                    }),
                ],
            })
        );
    },
    root$7 = 'Status_root_35b9a31c',
    base$9 = 'Status_68bd9bc6',
    icon$2 = 'Status_icon_cef4536',
    base__done = 'Status_base__done_35b9a31c',
    base__doneSmall = 'Status_base__doneSmall_35b9a31c',
    base__alert = 'Status_base__alert_35b9a31c',
    base__alertSmall = 'Status_base__alertSmall_35b9a31c',
    line = 'Status_line_8f933ea7',
    shadow = 'Status_shadow_fc30bf98',
    base__lockedSmall = 'Status_base__lockedSmall_35b9a31c',
    glowInner = 'Status_glowInner_f8eb475a',
    blur = 'Status_blur_5675b854',
    glowBig = 'Status_glowBig_5954041c',
    fadeInWithScale$7 = 'Status_fadeInWithScale_35b9a31c',
    slideUp$7 = 'Status_slideUp_35b9a31c',
    blink$7 = 'Status_blink_35b9a31c',
    scale$7 = 'Status_scale_35b9a31c',
    rotate$7 = 'Status_rotate_35b9a31c',
    windowIn$7 = 'Status_windowIn_35b9a31c',
    fadeOut$7 = 'Status_fadeOut_35b9a31c',
    fadeIn$7 = 'Status_fadeIn_35b9a31c',
    styles$c = {
        root: root$7,
        base: base$9,
        icon: icon$2,
        base__done: base__done,
        base__doneSmall: base__doneSmall,
        base__alert: base__alert,
        base__alertSmall: base__alertSmall,
        line: line,
        shadow: shadow,
        base__lockedSmall: base__lockedSmall,
        glowInner: glowInner,
        blur: blur,
        glowBig: glowBig,
        fadeInWithScale: fadeInWithScale$7,
        slideUp: slideUp$7,
        blink: blink$7,
        scale: scale$7,
        rotate: rotate$7,
        windowIn: windowIn$7,
        fadeOut: fadeOut$7,
        fadeIn: fadeIn$7,
    },
    strings = resources.resolve('strings');
defineStyledComponent('Status', styles$c.base, {
    variants: { status: { done: styles$c.base__done, alert: styles$c.base__alert, locked: styles$c.base__locked } },
});
const SMALL_SIZE_BREAKPOINT = 100,
    tooltipEnabled = ({ header: e, body: t }) => Boolean(e && t),
    Status = ({ reason: e, classNames: t }) => {
        const r = reactExports.useRef(null),
            [s, n] = React.useState(!1),
            a = `base__${useCardContext().status}${s ? 'Small' : ''}`,
            o = React.useCallback(() => {
                var e;
                const t = null == (e = r.current) ? void 0 : e.getBoundingClientRect();
                t && n(t.width <= SMALL_SIZE_BREAKPOINT);
            }, [r]);
        useRefResizeObserver(r, o);
        const u = e
                ? {
                      header: strings.readOrEmpty(`tooltips.moduleFits.${e}.header`),
                      body: strings.readOrEmpty(`tooltips.moduleFits.${e}.text`),
                  }
                : {},
            i = useSimpleTooltip(u);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$c.base, styles$c[a], null == t ? void 0 : t.wrapper),
            ref: r,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$c.glowBig }),
                jsxRuntimeExports.jsx('div', { className: styles$c.line }),
                jsxRuntimeExports.jsx('div', { className: styles$c.shadow }),
                jsxRuntimeExports.jsx('div', { className: styles$c.glowInner }),
                jsxRuntimeExports.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: styles$c.blur,
                    children: jsxRuntimeExports.jsx('g', {
                        children: jsxRuntimeExports.jsx('circle', { cx: '21', cy: '21', r: '3' }),
                    }),
                }),
                jsxRuntimeExports.jsx('div', {
                    ...(tooltipEnabled(u) && i),
                    className: cx(styles$c.icon, null == t ? void 0 : t.icon),
                }),
            ],
        });
    },
    base$8 = 'Card_f0963ece',
    base__wrapped = 'Card_base__wrapped_c6eb8737',
    base__disableMouse = 'Card_base__disableMouse_5cd80216',
    base__hover = 'Card_base__hover_f4c22d1c',
    base__selected = 'Card_base__selected_f4c22d1c',
    card$1 = 'Card_f7ddaa4a',
    content = 'Card_content_b6f6a22a',
    base__active = 'Card_base__active_f4c22d1c',
    base__activeHover = 'Card_base__activeHover_f4c22d1c',
    base__selectedHover = 'Card_base__selectedHover_f4c22d1c',
    centerBorder = 'Card_centerBorder_8a0f28ae',
    cardStyles = {
        base: base$8,
        base__wrapped: base__wrapped,
        base__disableMouse: base__disableMouse,
        base__hover: base__hover,
        base__selected: base__selected,
        card: card$1,
        content: content,
        base__active: base__active,
        base__activeHover: base__activeHover,
        base__selectedHover: base__selectedHover,
        centerBorder: centerBorder,
    },
    Base$3 = defineStyledComponent('Card', cardStyles.base, {
        variants: {
            active: { true: cardStyles.base__active },
            selected: { true: cardStyles.base__selected },
            hover: { true: cardStyles.base__hover },
            disableMouse: { true: cardStyles.base__disableMouse },
        },
        compoundVariants: [
            { hover: !0, active: !0, className: cardStyles.base__activeHover },
            { hover: !0, selected: !0, className: cardStyles.base__selectedHover },
        ],
    }),
    Card = reactExports.forwardRef(function (
        {
            children: e,
            active: t,
            status: r,
            statusReason: s,
            disableMouse: n,
            onMouseOver: a,
            onMouseOut: o,
            soundTarget: u,
            disabled: i = !1,
            className: l,
            classNames: c,
            ...d
        },
        _,
    ) {
        const [p, m] = reactExports.useState(!1),
            E = useSounds(),
            f = useCardsWrapperContextOptional(),
            b = n || i;
        return jsxRuntimeExports.jsx(Base$3, {
            ...d,
            ref: _,
            hover: p,
            disableMouse: n,
            active: t,
            className: cx(cardStyles.card, l, (null == f ? void 0 : f.enabled) && cardStyles.base__wrapped),
            children: jsxRuntimeExports.jsxs(CardContextProvider, {
                disabled: i,
                selected: d.selected ?? !1,
                multiple: d.multiple ?? !1,
                hover: p,
                status: r,
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(cardStyles.content, null == c ? void 0 : c.content),
                        onClick: function (e) {
                            b || E.play('click', { target: u || 'react-ui:card', original: e });
                        },
                        onMouseEnter: function (e) {
                            b || E.play('mouse-enter', { target: u || 'react-ui:card', original: e });
                        },
                        onMouseOver: function (e) {
                            b || (m(!0), null == a || a(e));
                        },
                        onMouseOut: function (e) {
                            b || (m(!1), null == o || o(e));
                        },
                        children: jsxRuntimeExports.jsx(MainContainer, { classNames: c, children: e }),
                    }),
                    jsxRuntimeExports.jsx('div', { className: cardStyles.centerBorder }),
                    r && jsxRuntimeExports.jsx(Status, { reason: s, classNames: null == c ? void 0 : c.status }),
                ],
            }),
        });
    }),
    LINE_THICKNESS = 1,
    OFFSET = 1,
    PADDING = 3,
    borderTypes = { none: 'none', contour: 'contour' },
    Point = (e, t) => ({ x: e, y: t });
function getRectangleEdges(e) {
    let { x: t, y: r, width: s, height: n } = e;
    const a = Point(t, r),
        o = Point(t + s, r),
        u = Point(t + s, r + n),
        i = Point(t, r + n);
    return [
        [a, o],
        [o, u],
        [u, i],
        [i, a],
    ];
}
function getEdgeKey(e) {
    const [t, r] = e;
    return t.x < r.x || (t.x === r.x && t.y < r.y) ? `${r.x},${r.y}-${t.x},${t.y}` : `${t.x},${t.y}-${r.x},${r.y}`;
}
function buildOuterEdgesAndCenter(e) {
    const t = e.flatMap(getRectangleEdges),
        r = new Map();
    return (
        t.forEach((e) => {
            const t = getEdgeKey(e);
            r.has(t) ? r.delete(t) : r.set(t, e);
        }),
        Array.from(r.values())
    );
}
function buildContourPath(e) {
    if (0 === e.length) return [];
    const t = e[0],
        r = { x: t[0].x - PADDING, y: t[0].y - PADDING },
        s = [r];
    let n = t[1],
        a = r,
        o = r,
        u = -PADDING,
        i = -PADDING;
    for (e.splice(0, 1); e.length > 0; ) {
        const t = e.findIndex((e) => e[0].x === n.x && e[0].y === n.y);
        if (-1 === t) break;
        const r = e[t],
            l = n;
        (n.x <= o.x ? (i = PADDING) : (i === PADDING && (a.y -= 2 * PADDING), (i = -PADDING)),
            n.y >= o.y ? (u = PADDING) : (u === PADDING && (a.x -= 2 * PADDING), (u = -PADDING)),
            (n = { x: n.x + u, y: n.y + i }),
            s.push(n),
            (o = l),
            (a = n),
            (n = r[1]),
            e.splice(t, 1));
    }
    return (i === PADDING && u === PADDING && (a = { ...a, x: a.x - 2 * PADDING }), s.push(r), s);
}
function buildContour(e, t) {
    return buildContourPath(buildOuterEdgesAndCenter(e));
}
const HORIZONTAL = 'H',
    VERTICAL = 'V';
class LinesOptimizer {
    constructor(e) {
        (__publicField(this, 'lines', new Map()), (this.containerRect = e));
    }
    addLine(e, t, r, s, n) {
        var a;
        const o = `${r === LINE_THICKNESS ? VERTICAL : HORIZONTAL}-${r === LINE_THICKNESS ? Math.round(e) : Math.round(t)}-${n}`;
        this.lines.has(o) || this.lines.set(o, []);
        const u = { x: e - this.containerRect.x, y: t - this.containerRect.y, width: r, height: s, className: n };
        null == (a = this.lines.get(o)) || a.push(u);
    }
    run() {
        const e = [];
        return (
            this.lines.forEach((t, r) => {
                const s = r.at(0) === HORIZONTAL,
                    n = t.sort((e, t) => (s ? e.x - t.x : e.y - t.y));
                let a = null;
                (n.forEach((t) => {
                    if (a)
                        if (s) {
                            const r = a.x + a.width,
                                s = t.x + t.width;
                            t.x >= a.x && t.x <= r ? (a = { ...a, width: Math.max(s, r) - a.x }) : (e.push(a), (a = t));
                        } else {
                            const r = a.y + a.height,
                                s = t.y + t.height;
                            t.y >= a.y && t.y <= r
                                ? (a = { ...a, height: Math.max(s, r) - a.y })
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
const lineInner = 'LinesBuilder_lineInner_a52dc157',
    lineOuter = 'LinesBuilder_lineOuter_c57514b2',
    styles$b = { lineInner: lineInner, lineOuter: lineOuter };
function buildLines(e, t, r) {
    const s = [],
        n = new LinesOptimizer(t);
    for (let a = 0; a < e.length; a++) {
        const t = e[a],
            o = t.getBoundingClientRect();
        if (0 === o.width || 0 === o.height)
            return void console.debug(
                `Card rect has zero size by one side: ${o.width}x${o.height} (${t.getAttribute('data-test-id')}) `,
            );
        (r !== borderTypes.none && s.push({ x: o.x, y: o.y, width: o.width, height: o.height }),
            n.addLine(o.x, o.y, o.width, LINE_THICKNESS, styles$b.lineInner),
            n.addLine(o.x, o.y + o.height, o.width, LINE_THICKNESS, styles$b.lineInner),
            n.addLine(o.x, o.y, LINE_THICKNESS, o.height, styles$b.lineInner),
            n.addLine(o.x + o.width, o.y, LINE_THICKNESS, o.height + OFFSET, styles$b.lineInner));
    }
    if (r !== borderTypes.none) {
        const e = buildContour(s);
        let t = null;
        e.forEach((e) => {
            if (t) {
                const r = t.y === e.y,
                    s = t,
                    a = e;
                n.addLine(
                    Math.min(s.x, a.x),
                    Math.min(s.y, a.y),
                    r ? Math.abs(a.x - s.x) : LINE_THICKNESS,
                    r ? LINE_THICKNESS : Math.abs(a.y - s.y) + OFFSET,
                    styles$b.lineOuter,
                );
            }
            t = e;
        });
    }
    return n.run();
}
const Lines = reactExports.memo(({ containerRef: e, generation: t, border: r, cardSelector: s }) => {
        const [n, a] = reactExports.useState([]),
            o = useEvent$1(() => {
                const t = e.current;
                if (!t) return;
                const n = t.getBoundingClientRect(),
                    o = buildLines(t.querySelectorAll(`.${s || cardStyles.card}`), n, r);
                a(o ?? []);
            });
        return (
            reactExports.useEffect(o, [o, t]),
            jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
                children: n.map((e, t) =>
                    jsxRuntimeExports.jsx(
                        'div',
                        { className: e.className, style: { left: e.x, top: e.y, width: e.width, height: e.height } },
                        t,
                    ),
                ),
            })
        );
    }),
    base$7 = 'CardsWrapper_3b6cc4f6',
    card = 'CardsWrapper_card_c7fc9ee7',
    centerBorderCommon = 'CardsWrapper_centerBorderCommon_b4b27a11',
    outerBorderCommon = 'CardsWrapper_outerBorderCommon_f4887371',
    styles$a = {
        base: base$7,
        card: card,
        centerBorderCommon: centerBorderCommon,
        outerBorderCommon: outerBorderCommon,
    },
    Base$2 = defineStyledComponent('CardsWrapper', styles$a.base);
(reactExports.forwardRef(function (
    {
        children: e,
        className: t,
        trashhold: r,
        border: s = borderTypes.contour,
        enabled: n = !0,
        cardSelector: a,
        ...o
    },
    u,
) {
    const i = reactExports.useRef([]),
        l = reactExports.useRef(null),
        [c, d] = reactExports.useState('');
    reactExports.useImperativeHandle(u, () => l.current);
    const _ = reactExports.useCallback(
        (e) => {
            const t = l.current;
            if (!t) return;
            const r = t.querySelectorAll(`.${a || cardStyles.card}`);
            if (r.length > 0) {
                const s = t.getBoundingClientRect(),
                    n = r.length;
                n !== i.current.length && (i.current = Array.from(r));
                const a = `${Math.round(s.width)}x${Math.round(s.height)}-${n}|${e}`;
                d(a);
            } else d('');
        },
        [a],
    );
    (reactExports.useEffect(() => {
        _(r);
    }),
        useRefResizeObserver(
            l,
            reactExports.useCallback(() => _(), [_]),
        ));
    const p = reactExports.useMemo(() => ({ recalculate: _, enabled: n }), [_, n]);
    return jsxRuntimeExports.jsx(Base$2, {
        ...o,
        ref: l,
        children: jsxRuntimeExports.jsxs('div', {
            className: t,
            children: [
                jsxRuntimeExports.jsx(CardsWrapperContextProvider, { value: p, children: e }),
                jsxRuntimeExports.jsx(Lines, {
                    cardsRef: i,
                    containerRef: l,
                    border: s,
                    generation: c,
                    cardSelector: a,
                }),
            ],
        }),
    });
}),
    reactExports.forwardRef(({ className: e, classNames: t, ...r }, s) =>
        jsxRuntimeExports.jsxs('div', {
            className: cx(styles$a.base, null == t ? void 0 : t.wrapper),
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$a.centerBorderCommon }),
                jsxRuntimeExports.jsx('div', { className: styles$a.outerBorderCommon }),
                jsxRuntimeExports.jsx(Card, {
                    className: cx(styles$a.card, e, null == t ? void 0 : t.card),
                    classNames: t,
                    ...r,
                    ref: s,
                }),
            ],
        }),
    ));
const statusTypes = { done: 'done', locked: 'locked' },
    Context = reactExports.createContext(void 0);
function useProgressBar() {
    const e = reactExports.useContext(Context);
    if (!e) throw new Error('useProgressBar must be used within a ProgressBar');
    return e;
}
const fill = 'Filled_fill_32930ca9',
    root$6 = 'Filled_root_94d1350d',
    filled = 'Filled_228d842a',
    wrapper$1 = 'Filled_wrapper_fac9294',
    filled__small = 'Filled_filled__small_94d1350d',
    pattern$1 = 'Filled_pattern_6ec8608d',
    filled__medium = 'Filled_filled__medium_94d1350d',
    fadeInWithScale$6 = 'Filled_fadeInWithScale_94d1350d',
    slideUp$6 = 'Filled_slideUp_94d1350d',
    blink$6 = 'Filled_blink_94d1350d',
    scale$6 = 'Filled_scale_94d1350d',
    rotate$6 = 'Filled_rotate_94d1350d',
    windowIn$6 = 'Filled_windowIn_94d1350d',
    fadeOut$6 = 'Filled_fadeOut_94d1350d',
    fadeIn$6 = 'Filled_fadeIn_94d1350d',
    styles$9 = {
        fill: fill,
        root: root$6,
        filled: filled,
        wrapper: wrapper$1,
        filled__small: filled__small,
        pattern: pattern$1,
        filled__medium: filled__medium,
        fadeInWithScale: fadeInWithScale$6,
        slideUp: slideUp$6,
        blink: blink$6,
        scale: scale$6,
        rotate: rotate$6,
        windowIn: windowIn$6,
        fadeOut: fadeOut$6,
        fadeIn: fadeIn$6,
    },
    Filled = reactExports.forwardRef(function ({ className: e, classNames: t, ...r }, s) {
        const n = useProgressBar();
        return jsxRuntimeExports.jsx('div', {
            ...r,
            ref: s,
            className: cx(styles$9.filled, styles$9[`filled__${n.size}`], e),
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(styles$9.wrapper, null == t ? void 0 : t.wrapper),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$9.fill, null == t ? void 0 : t.fill),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$9.pattern, null == t ? void 0 : t.pattern),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                ],
            }),
        });
    });
function ProgressBarProvider(e) {
    const [t, r] = reactExports.useState(Math.min(e.value, e.maxValue)),
        [s, n] = reactExports.useState(e.maxValue),
        a = usePrevious(t),
        o = usePrevious(s),
        u = useEvent$1((t) => r(Math.min(t, e.maxValue)));
    (reactExports.useLayoutEffect(() => {
        u(e.value);
    }, [e.value, u]),
        reactExports.useLayoutEffect(() => {
            n(e.maxValue);
        }, [e.maxValue]));
    const i = useEvent$1((t) => {
        var r;
        return null == (r = e.onValueChange) ? void 0 : r.call(e, t);
    });
    reactExports.useEffect(() => {
        i(t);
    }, [i, t]);
    const l = useEvent$1((t) => {
        var r;
        return null == (r = e.onMaxValueChange) ? void 0 : r.call(e, t);
    });
    reactExports.useEffect(() => {
        l(s);
    }, [l, s]);
    const c = reactExports.useMemo(() => {
        if (void 0 !== a && void 0 !== o) return { value: a, maxValue: o, percentage: a / o };
    }, [a, o]);
    assert(s > 0, 'ProgressBar: maxValue must be greater than 0');
    const d = reactExports.useMemo(
        () => ({
            value: t,
            maxValue: s,
            setValue: u,
            setMaxValue: n,
            size: e.size,
            previous: c,
            percentage: t / s,
            animationEnabled: e.animationEnabled,
        }),
        [t, s, u, n, c, e.size, e.animationEnabled],
    );
    return jsxRuntimeExports.jsx(Context.Provider, { value: d, children: e.children });
}
const background$1 = 'ProgressBar_background_b40cdfdf',
    base$6 = 'ProgressBar_27c2305c',
    base__small$2 = 'ProgressBar_base__small_61ccd4be',
    base__medium$1 = 'ProgressBar_base__medium_478d985a',
    base__full = 'ProgressBar_base__full_be7f12da',
    backgroundPattern = 'ProgressBar_backgroundPattern_7e932276',
    styles$8 = {
        background: background$1,
        base: base$6,
        base__small: base__small$2,
        base__medium: base__medium$1,
        base__full: base__full,
        backgroundPattern: backgroundPattern,
    },
    Base$1 = defineStyledComponent('ProgressBar', styles$8.base, {
        variants: { size: { small: styles$8.base__small, medium: styles$8.base__medium, full: styles$8.base__full } },
    });
function ProgressBar({
    size: e = 'medium',
    className: t,
    classNames: r,
    filledClassName: s,
    filledClassNames: n,
    ...a
}) {
    return jsxRuntimeExports.jsx(ProgressBarProvider, {
        size: e,
        ...a,
        children: jsxRuntimeExports.jsxs(Base$1, {
            size: e,
            className: t,
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$8.background, null == r ? void 0 : r.background) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$8.backgroundPattern, null == r ? void 0 : r.backgroundPattern),
                }),
                jsxRuntimeExports.jsx(Filled, { className: s, classNames: n }),
                a.children,
            ],
        }),
    });
}
const formats = { superCompact: 'superCompact', compact: 'compact', default: 'default', detailed: 'detailed' },
    sizes$1 = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48', x80x80: 'x80x80' },
    types = { accent: 'accent', cooldown: 'cooldown' },
    root$5 = 'FormattedValue_root_30bfaeef',
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
    fadeInWithScale$5 = 'FormattedValue_fadeInWithScale_30bfaeef',
    slideUp$5 = 'FormattedValue_slideUp_30bfaeef',
    blink$5 = 'FormattedValue_blink_30bfaeef',
    scale$5 = 'FormattedValue_scale_30bfaeef',
    rotate$5 = 'FormattedValue_rotate_30bfaeef',
    windowIn$5 = 'FormattedValue_windowIn_30bfaeef',
    fadeOut$5 = 'FormattedValue_fadeOut_30bfaeef',
    fadeIn$5 = 'FormattedValue_fadeIn_30bfaeef',
    styles$7 = {
        root: root$5,
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
        fadeInWithScale: fadeInWithScale$5,
        slideUp: slideUp$5,
        blink: blink$5,
        scale: scale$5,
        rotate: rotate$5,
        windowIn: windowIn$5,
        fadeOut: fadeOut$5,
        fadeIn: fadeIn$5,
    };
function FormattedValue({ size: e, preFormatted: t }) {
    var r;
    const s = [];
    for (let n = 0; n < t.items.length; ++n)
        (t.separator &&
            n > 0 &&
            s.push(
                jsxRuntimeExports.jsx(
                    'span',
                    { className: cx(styles$7.detailedSeparator, styles$7[`detailedSeparator__${e}`]) },
                    'separator',
                ),
            ),
            s.push(
                jsxRuntimeExports.jsx(
                    'span',
                    {
                        className: cx(styles$7.item, styles$7[`item__${e}`]),
                        children:
                            null == (r = t.items[n])
                                ? void 0
                                : r
                                      .split(' ')
                                      .map((t, r) =>
                                          jsxRuntimeExports.jsx(
                                              'span',
                                              { className: cx(styles$7.part, styles$7[`part__${e}`]), children: t },
                                              `part_${r}`,
                                          ),
                                      ),
                    },
                    `item_${n}`,
                ),
            ));
    return s;
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
    const [r, ...s] = e,
        n = s.join(COLON);
    return {
        separator: !0,
        items:
            Number(r) > 0
                ? [null == (t = LOCALE_FORMATTERS[DAYS_FORMAT]) ? void 0 : t.call(LOCALE_FORMATTERS, r), n]
                : [n],
    };
}
function defaultFormatter(e, t) {
    var r;
    let s = 0;
    const n = e.length - 1,
        a = FORMAT_PARTS[t],
        o = { separator: !1, items: [] };
    for (; s < n && !(Number(e[s]) > 0); ++s);
    return (
        a[s] === MINUTES_FORMAT && 0 === Number(e[s])
            ? (o.items = [
                  null == (r = LOCALE_FORMATTERS[MINUTES_FORMAT])
                      ? void 0
                      : r.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
              ])
            : (o.items = [s, s + 1].map((t) => {
                  var r;
                  return null == (r = LOCALE_FORMATTERS[a[t]]) ? void 0 : r.call(LOCALE_FORMATTERS, e[t]);
              })),
        o
    );
}
function compactFormatter(e, t) {
    var r, s;
    const n = e.length,
        a = FORMAT_PARTS[t],
        o = { separator: !1, items: [] };
    for (let u = 0; u < n; ++u)
        if (Number(e[u]) > 0)
            return ((o.items = [null == (r = LOCALE_FORMATTERS[a[u]]) ? void 0 : r.call(LOCALE_FORMATTERS, e[u])]), o);
    return (
        (o.items = [
            null == (s = LOCALE_FORMATTERS[MINUTES_FORMAT]) ? void 0 : s.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
        ]),
        o
    );
}
const formatValue = (e, t) => {
        var r;
        return null == (r = FORMATTER[t]) ? void 0 : r.call(FORMATTER, format$2(e, FORMAT_PARTS[t]), t);
    },
    root$4 = 'Timer_root_6ee5dd6c',
    base$5 = 'Timer_dac0a0aa',
    icon$1 = 'Timer_icon_a61415df',
    icon__x16x16 = 'Timer_icon__x16x16_5bab55e2',
    icon__accent = 'Timer_icon__accent_2cf70c3b',
    icon__cooldown = 'Timer_icon__cooldown_4a26d3f',
    icon__x24x24 = 'Timer_icon__x24x24_31571381',
    icon__x32x32 = 'Timer_icon__x32x32_807dde34',
    icon__x48x48 = 'Timer_icon__x48x48_ae779a9e',
    icon__x80x80 = 'Timer_icon__x80x80_251aafea',
    label$1 = 'Timer_label_1565f308',
    label__x16x16 = 'Timer_label__x16x16_e3ff224',
    label__x24x24 = 'Timer_label__x24x24_ca748cca',
    label__x32x32 = 'Timer_label__x32x32_13cccf38',
    label__x48x48 = 'Timer_label__x48x48_e3a9b542',
    label__x80x80 = 'Timer_label__x80x80_10a84ee6',
    label__accent = 'Timer_label__accent_ac7d4f7b',
    label__cooldown = 'Timer_label__cooldown_c2349ab9',
    fadeInWithScale$4 = 'Timer_fadeInWithScale_6ee5dd6c',
    slideUp$4 = 'Timer_slideUp_6ee5dd6c',
    blink$4 = 'Timer_blink_6ee5dd6c',
    scale$4 = 'Timer_scale_6ee5dd6c',
    rotate$4 = 'Timer_rotate_6ee5dd6c',
    windowIn$4 = 'Timer_windowIn_6ee5dd6c',
    fadeOut$4 = 'Timer_fadeOut_6ee5dd6c',
    fadeIn$4 = 'Timer_fadeIn_6ee5dd6c',
    styles$6 = {
        root: root$4,
        base: base$5,
        icon: icon$1,
        icon__x16x16: icon__x16x16,
        icon__accent: icon__accent,
        icon__cooldown: icon__cooldown,
        icon__x24x24: icon__x24x24,
        icon__x32x32: icon__x32x32,
        icon__x48x48: icon__x48x48,
        icon__x80x80: icon__x80x80,
        label: label$1,
        label__x16x16: label__x16x16,
        label__x24x24: label__x24x24,
        label__x32x32: label__x32x32,
        label__x48x48: label__x48x48,
        label__x80x80: label__x80x80,
        label__accent: label__accent,
        label__cooldown: label__cooldown,
        fadeInWithScale: fadeInWithScale$4,
        slideUp: slideUp$4,
        blink: blink$4,
        scale: scale$4,
        rotate: rotate$4,
        windowIn: windowIn$4,
        fadeOut: fadeOut$4,
        fadeIn: fadeIn$4,
    };
function Timer({
    start: e,
    limit: t = 0,
    tick: r = 1,
    size: s = sizes$1.x24x24,
    type: n = types.accent,
    format: a = formats.default,
    autostart: o = !0,
    className: u,
    classNames: i,
}) {
    const [l] = useTicker(
        reactExports.useMemo(
            () => ({
                type: 'countdown',
                start: isDuration(e) ? e : seconds(e),
                limit: isDuration(t) ? t : seconds(t),
                tick: isDuration(r) ? r : seconds(r),
                autostart: o,
            }),
            [o, t, e, r],
        ),
    );
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$6.base, u),
        children: [
            jsxRuntimeExports.jsx('div', {
                className: cx(
                    styles$6.icon,
                    styles$6[`icon__${s}`],
                    styles$6[`icon__${n}`],
                    null == i ? void 0 : i.icon,
                ),
            }),
            a !== formats.superCompact &&
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$6.label,
                        styles$6[`label__${s}`],
                        styles$6[`label__${n}`],
                        null == i ? void 0 : i.label,
                    ),
                    children: jsxRuntimeExports.jsx(FormattedValue, { size: s, preFormatted: formatValue(l, a) }),
                }),
        ],
    });
}
((Timer.format = formats), (Timer.size = sizes$1), (Timer.type = types));
const root$3 = 'Counter_root_f40ddf91',
    base$4 = 'Counter_dc10b86a',
    show = 'Counter_show_f40ddf91',
    base__big = 'Counter_base__big_6bd2877c',
    base__small$1 = 'Counter_base__small_631cb8e0',
    base__empty = 'Counter_base__empty_597c0ec1',
    base__animated = 'Counter_base__animated_79967f0f',
    base__hidden = 'Counter_base__hidden_2c06423a',
    hide = 'Counter_hide_f40ddf91',
    bg = 'Counter_bg_8a824820',
    value = 'Counter_value_193848f4',
    value__text = 'Counter_value__text_cf8d976a',
    base__pattern = 'Counter_base__pattern_f40ddf91',
    plus = 'Counter_plus_a2f9ccc6',
    pattern = 'Counter_pattern_b455ac5',
    fadeInWithScale$3 = 'Counter_fadeInWithScale_f40ddf91',
    slideUp$3 = 'Counter_slideUp_f40ddf91',
    blink$3 = 'Counter_blink_f40ddf91',
    scale$3 = 'Counter_scale_f40ddf91',
    rotate$3 = 'Counter_rotate_f40ddf91',
    windowIn$3 = 'Counter_windowIn_f40ddf91',
    fadeOut$3 = 'Counter_fadeOut_f40ddf91',
    fadeIn$3 = 'Counter_fadeIn_f40ddf91',
    styles$5 = {
        root: root$3,
        base: base$4,
        show: show,
        base__big: base__big,
        base__small: base__small$1,
        base__empty: base__empty,
        base__animated: base__animated,
        base__hidden: base__hidden,
        hide: hide,
        bg: bg,
        value: value,
        value__text: value__text,
        base__pattern: base__pattern,
        plus: plus,
        pattern: pattern,
        fadeInWithScale: fadeInWithScale$3,
        slideUp: slideUp$3,
        blink: blink$3,
        scale: scale$3,
        rotate: rotate$3,
        windowIn: windowIn$3,
        fadeOut: fadeOut$3,
        fadeIn: fadeIn$3,
    },
    Counter = ({
        value: e,
        isEmpty: t = !1,
        className: r,
        size: s = 'normal',
        fadeInAnimation: n = !1,
        hide: a = !1,
        maximumNumber: o = 99,
        ...u
    }) => {
        const i = t ? null : e,
            l = 'string' == typeof i;
        if ((i && !l && i < 0) || 0 === i) return null;
        const c = i && !l && i > o,
            d = cx(
                styles$5.base,
                styles$5[`base__${s}`],
                n && styles$5.base__animated,
                a && styles$5.base__hidden,
                !i && styles$5.base__pattern,
                t && styles$5.base__empty,
                r,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: d,
            ...u,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$5.bg }),
                jsxRuntimeExports.jsx('div', { className: styles$5.pattern }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$5.value, l && styles$5.value__text),
                    children: [
                        c ? o : i,
                        c && jsxRuntimeExports.jsx('span', { className: styles$5.plus, children: '+' }),
                    ],
                }),
            ],
        });
    },
    makeOptionalCaller =
        (e, t) =>
        (...r) => {
            if (e(...r)) return t(...r);
        },
    root$2 = 'Iconbutton_root_81e1e86b',
    base$3 = 'Iconbutton_4670fff1',
    base__hovered = 'Iconbutton_base__hovered_e242531a',
    base__disabled = 'Iconbutton_base__disabled_dc15052c',
    icon = 'Iconbutton_icon_a3c2367',
    icon__preview = 'Iconbutton_icon__preview_8d5c6527',
    icon__compare = 'Iconbutton_icon__compare_2797841f',
    icon__small = 'Iconbutton_icon__small_1ca760fc',
    icon__normal = 'Iconbutton_icon__normal_6c83ef9d',
    base__mouseDown = 'Iconbutton_base__mouseDown_81e1e86b',
    label = 'Iconbutton_label_bd93b7a9',
    label__small = 'Iconbutton_label__small_628c6c03',
    label__normal = 'Iconbutton_label__normal_252cb7af',
    base__visibleLabel = 'Iconbutton_base__visibleLabel_81e1e86b',
    fadeInWithScale$2 = 'Iconbutton_fadeInWithScale_81e1e86b',
    slideUp$2 = 'Iconbutton_slideUp_81e1e86b',
    blink$2 = 'Iconbutton_blink_81e1e86b',
    scale$2 = 'Iconbutton_scale_81e1e86b',
    rotate$2 = 'Iconbutton_rotate_81e1e86b',
    windowIn$2 = 'Iconbutton_windowIn_81e1e86b',
    fadeOut$2 = 'Iconbutton_fadeOut_81e1e86b',
    fadeIn$2 = 'Iconbutton_fadeIn_81e1e86b',
    styles$4 = {
        root: root$2,
        base: base$3,
        base__hovered: base__hovered,
        base__disabled: base__disabled,
        icon: icon,
        icon__preview: icon__preview,
        icon__compare: icon__compare,
        icon__small: icon__small,
        icon__normal: icon__normal,
        base__mouseDown: base__mouseDown,
        label: label,
        label__small: label__small,
        label__normal: label__normal,
        base__visibleLabel: base__visibleLabel,
        fadeInWithScale: fadeInWithScale$2,
        slideUp: slideUp$2,
        blink: blink$2,
        scale: scale$2,
        rotate: rotate$2,
        windowIn: windowIn$2,
        fadeOut: fadeOut$2,
        fadeIn: fadeIn$2,
    },
    IconButton = ({
        type: e,
        children: t,
        className: r,
        classNames: s,
        disabled: n = !1,
        isVisibleLabel: a = !1,
        soundHover: o = R.sounds.highlight(),
        soundClick: u = R.sounds.play(),
        size: i = 'normal',
        onClick: l,
        onMouseEnter: c,
        onMouseLeave: d,
        onMouseDown: _,
        onMouseUp: p,
        onFocus: m,
        onBlur: E,
        ...f
    }) => {
        const [b, x] = reactExports.useState(!1),
            [g, h] = reactExports.useState(!1),
            y = reactExports.useRef(null),
            v = () => !1 === n,
            C = (e) => v() && ((e) => e.button === MOUSE_BUTTON_CODES.LEFT)(e),
            A = makeOptionalCaller(v, (e) => {
                null == l || l(e);
            }),
            $ = makeOptionalCaller(C, (e) => {
                (x(!0), null == _ || _(e), u && playSound$1(u));
            }),
            F = makeOptionalCaller(C, (e) => {
                (x(!1), null == p || p(e));
            }),
            w = makeOptionalCaller(v, (e) => {
                (h(!0), null == c || c(e), o && playSound$1(o));
            }),
            D = makeOptionalCaller(v, (e) => {
                null == m || m(e);
            }),
            S = makeOptionalCaller(v, (e) => {
                null == E || E(e);
            });
        return jsxRuntimeExports.jsxs('div', {
            ref: y,
            className: cx(
                styles$4.base,
                n && styles$4.base__disabled,
                a && styles$4.base__visibleLabel,
                !n && b && styles$4.base__mouseDown,
                !n && g && styles$4.base__hovered,
                r,
            ),
            onClick: A,
            onMouseEnter: w,
            onMouseLeave: (e) => {
                (h(!1), x(!1), null == d || d(e));
            },
            onMouseDown: $,
            onMouseUp: F,
            onFocus: D,
            onBlur: S,
            ...f,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$4.icon,
                        styles$4[`icon__${i}`],
                        styles$4[`icon__${e}`],
                        null == s ? void 0 : s.icon,
                    ),
                }),
                t &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$4.label, styles$4[`label__${i}`], null == s ? void 0 : s.label),
                        children: t,
                    }),
            ],
        });
    },
    base$2 = 'Optimizedprogressbar_e894d6c',
    wrapper = 'Optimizedprogressbar_wrapper_70ce38b3',
    backgroundWrapper = 'Optimizedprogressbar_backgroundWrapper_405830ed',
    background = 'Optimizedprogressbar_background_74cf6541',
    styles$3 = { base: base$2, wrapper: wrapper, backgroundWrapper: backgroundWrapper, background: background },
    MAX_WIDTH = 8e3,
    getInitialApi = () => ({ update: () => {} }),
    getLeftOffset = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
    moveLine = ({ horizontalScrollPosition: e, leftOffset: t }, r, { container: s, line: n }) => {
        const a = Math.max(0, Math.floor(s.offsetWidth * r) - MAX_WIDTH),
            o = (e - getLeftOffset(s, t)) | 0,
            u = clamp(0, a, o);
        n.style.transform = `translateX(${u}px)`;
    },
    moveBackground = ({ horizontalScrollPosition: e, leftOffset: t }, r, s) => {
        const n = (e - getLeftOffset(r, t)) | 0,
            a = clamp(0, r.offsetWidth, n);
        s.style.transform = `translateX(${a}px)`;
    },
    OptimizedProgressBar = ({ api: e, value: t, maxValue: r = 100, theme: s = defaultTheme, className: n, ...a }) => {
        const o = reactExports.useRef(null),
            u = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = clamp(0, t, r) / r,
            c = reactExports.useCallback(
                (e) => {
                    (i.current && o.current && moveBackground(e, o.current, i.current),
                        u.current && o.current && moveLine(e, l, { line: u.current, container: o.current }));
                },
                [l],
            ),
            d = reactExports.useMemo(() => createSkin(s), [s]);
        return (
            (e.current.update = c),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$3.base, n),
                ref: o,
                children: jsxRuntimeExports.jsxs('div', {
                    className: styles$3.wrapper,
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            className: styles$3.backgroundWrapper,
                            children: jsxRuntimeExports.jsx('div', {
                                style: d,
                                className: styles$3.background,
                                ref: i,
                                children: jsxRuntimeExports.jsx(ProgressBarBackground, { size: a.size }),
                            }),
                        }),
                        jsxRuntimeExports.jsx(ProgressBar$1, {
                            ...a,
                            lineRef: u,
                            value: t,
                            theme: s,
                            maxValue: r,
                            withoutBackground: !0,
                        }),
                    ],
                }),
            })
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
            const r = 0 === e.indexOf('%') ? 2 : 1;
            return String(t[e.slice(r, -r)]);
        }),
    root$1 = 'CloseButton_root_987cb365',
    base$1 = 'CloseButton_7488a1b8',
    base__medium = 'CloseButton_base__medium_97d04067',
    base__small = 'CloseButton_base__small_c1b29bae',
    base__extraSmall = 'CloseButton_base__extraSmall_f52764c1',
    base__x96x96 = 'CloseButton_base__x96x96_8157b84d',
    base__x32x32 = 'CloseButton_base__x32x32_6466ea31',
    fadeInWithScale$1 = 'CloseButton_fadeInWithScale_987cb365',
    slideUp$1 = 'CloseButton_slideUp_987cb365',
    blink$1 = 'CloseButton_blink_987cb365',
    scale$1 = 'CloseButton_scale_987cb365',
    rotate$1 = 'CloseButton_rotate_987cb365',
    windowIn$1 = 'CloseButton_windowIn_987cb365',
    fadeOut$1 = 'CloseButton_fadeOut_987cb365',
    fadeIn$1 = 'CloseButton_fadeIn_987cb365',
    styles$2 = {
        root: root$1,
        base: base$1,
        base__medium: base__medium,
        base__small: base__small,
        base__extraSmall: base__extraSmall,
        base__x96x96: base__x96x96,
        base__x32x32: base__x32x32,
        fadeInWithScale: fadeInWithScale$1,
        slideUp: slideUp$1,
        blink: blink$1,
        scale: scale$1,
        rotate: rotate$1,
        windowIn: windowIn$1,
        fadeOut: fadeOut$1,
        fadeIn: fadeIn$1,
    },
    sizes = { medium: 'medium', small: 'small', extraSmall: 'extraSmall' },
    upscaleImageSizes = { [sizes.medium]: 'x96x96', [sizes.small]: sizes.medium, [sizes.extraSmall]: 'x32x32' };
function CloseButton({
    size: e = sizes.medium,
    hoverSound: t = sounds$1.highlight,
    clickSound: r = sounds$1.click,
    className: s,
    onHover: n,
    onClose: a,
}) {
    const o = useUpscale(styles$2[`base__${e}`], styles$2[`base__${upscaleImageSizes[e]}`]);
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$2.base, o, s),
        onMouseEnter: () => {
            (play$1.sound(t), null == n || n());
        },
        onClick: () => {
            (play$1.sound(r), a());
        },
    });
}
CloseButton.size = sizes;
const base = 'Tooltip_6d997cee',
    decorator = 'Tooltip_decorator_b3486d4e',
    styles$1 = { base: base, decorator: decorator },
    Base = defineStyledComponent('Base', styles$1.base),
    Decorator = defineStyledComponent('Decorator', styles$1.decorator),
    Tooltip = reactExports.forwardRef(function ({ children: e, ...t }, r) {
        const s = reactExports.useRef(null);
        return (
            useRefResizeObserver(s, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                resize$1(t.scrollWidth, t.scrollHeight);
                const r = window.getComputedStyle(t);
                setSidePaddingsRem$1({
                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                });
            }),
            jsxRuntimeExports.jsx(Base, {
                ...t,
                ref: function (e) {
                    ((s.current = e), 'function' == typeof r ? r(e) : r && (r.current = e));
                },
                children: e,
            })
        );
    });
Tooltip.Decorator = Decorator;
const root = 'Formattextwithcolortags_root_7219dca0',
    blackReal = 'Formattextwithcolortags_blackReal_55a1402e',
    whiteReal = 'Formattextwithcolortags_whiteReal_3cbb298b',
    white = 'Formattextwithcolortags_white_e509d98',
    whiteOrange = 'Formattextwithcolortags_whiteOrange_7338e183',
    whiteSpanish = 'Formattextwithcolortags_whiteSpanish_e4b7820a',
    par = 'Formattextwithcolortags_par_485c5228',
    parSecondary = 'Formattextwithcolortags_parSecondary_19563067',
    parTertiary = 'Formattextwithcolortags_parTertiary_f9aabcb9',
    red = 'Formattextwithcolortags_red_9f8bd43',
    redDark = 'Formattextwithcolortags_redDark_5f4161da',
    yellow = 'Formattextwithcolortags_yellow_cfb15b8d',
    orange = 'Formattextwithcolortags_orange_11869493',
    cream = 'Formattextwithcolortags_cream_12fdbea3',
    brown = 'Formattextwithcolortags_brown_e49e35ef',
    greenBright = 'Formattextwithcolortags_greenBright_93ef1ba5',
    green = 'Formattextwithcolortags_green_55b7d967',
    greenDark = 'Formattextwithcolortags_greenDark_2b347344',
    blueBooster = 'Formattextwithcolortags_blueBooster_837aca9f',
    blueTeamkiller = 'Formattextwithcolortags_blueTeamkiller_94b7ca24',
    cred = 'Formattextwithcolortags_cred_b30a4efa',
    gold = 'Formattextwithcolortags_gold_616e4d7',
    bond = 'Formattextwithcolortags_bond_b29091',
    prom = 'Formattextwithcolortags_prom_85aada4f',
    parNoWidth = 'Formattextwithcolortags_parNoWidth_bb0f73ce',
    fadeInWithScale = 'Formattextwithcolortags_fadeInWithScale_7219dca0',
    slideUp = 'Formattextwithcolortags_slideUp_7219dca0',
    blink = 'Formattextwithcolortags_blink_7219dca0',
    scale = 'Formattextwithcolortags_scale_7219dca0',
    rotate = 'Formattextwithcolortags_rotate_7219dca0',
    windowIn = 'Formattextwithcolortags_windowIn_7219dca0',
    fadeOut = 'Formattextwithcolortags_fadeOut_7219dca0',
    fadeIn = 'Formattextwithcolortags_fadeIn_7219dca0',
    styles = {
        root: root,
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
        parNoWidth: parNoWidth,
        fadeInWithScale: fadeInWithScale,
        slideUp: slideUp,
        blink: blink,
        scale: scale,
        rotate: rotate,
        windowIn: windowIn,
        fadeOut: fadeOut,
        fadeIn: fadeIn,
    },
    TAGGED_PHRASE_REGEXP = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
    COLOR_REGEXP = new RegExp('(?<=(?:%\\(|{))(.*?)(?=(?:_[Oo]pen|Start))'),
    WORDS_REGEXP = new RegExp('(?<=(?:_[Oo]pen|Start)(?:\\)s?|}))(.*?)(?=(?:%\\(|{))'),
    FormatTextWithColorTagsComponent = ({ text: e, binding: t, classMix: r }) => {
        const s = reactExports.useCallback((e) => ({ color: `#${e}` }), []),
            n = reactExports.useMemo(() => t || {}, [t]);
        let a = TAGGED_PHRASE_REGEXP.exec(e),
            o = e,
            u = 0;
        for (; a; ) {
            const r = a[0],
                i = COLOR_REGEXP.exec(r),
                l = WORDS_REGEXP.exec(r),
                c = a[1];
            if (i && l) {
                const e = i[0],
                    a = e + u++ + e;
                ((o = o.replace(r, `%(${a})`)),
                    (n[a] = styles[e]
                        ? jsxRuntimeExports.jsx('span', {
                              className: styles[e],
                              children: jsxRuntimeExports.jsx(FormatText$1, { text: c, binding: t }),
                          })
                        : jsxRuntimeExports.jsx('span', {
                              style: s(e),
                              children: jsxRuntimeExports.jsx(FormatText$1, { text: c, binding: t }),
                          })));
            }
            a = TAGGED_PHRASE_REGEXP.exec(e);
        }
        return jsxRuntimeExports.jsx(FormatText$1, { text: o, classMix: r, binding: n });
    },
    FormatTextWithColorTags = reactExports.memo(FormatTextWithColorTagsComponent);
export {
    sizes$7 as $,
    AnimationType as A,
    ButtonSize as B,
    CButton as C,
    clamp$1 as D,
    filterMap as E,
    FormatText as F,
    ImageSize$1 as G,
    useRouter as H,
    Image as I,
    JSXBuilder as J,
    useEvent$1 as K,
    Currency$1 as L,
    useHandleKeydown as M,
    noop$1 as N,
    Orange as O,
    Pagination as P,
    createLayoutReadyInEffect$1 as Q,
    Reward as R,
    Size as S,
    TextButton as T,
    UIProvider as U,
    Video$1 as V,
    useVerticalScrollApi as W,
    Scroll as X,
    useUpscale as Y,
    filter as Z,
    useAdaptive as _,
    FormatString as a,
    useTooltip as a$,
    sizes$6 as a0,
    Currency as a1,
    types$2 as a2,
    Button as a3,
    themes as a4,
    Checkbox as a5,
    easings as a6,
    some as a7,
    every as a8,
    getTimeUnits as a9,
    SimpleTooltip as aA,
    TruncatedText as aB,
    sizes$5 as aC,
    MaskArea as aD,
    Bar as aE,
    VehicleInfo as aF,
    isTypeValidValue as aG,
    WITHOUT_ROLE as aH,
    Popover as aI,
    Base$6 as aJ,
    usePopover as aK,
    useIsFirstRender as aL,
    useTimeout as aM,
    useSkipFrame as aN,
    OPEN_ANIMATION_DURATION as aO,
    useUnmount as aP,
    useExternalPaddings as aQ,
    isEqual as aR,
    usePrevious as aS,
    WithDiscount as aT,
    discountTypes as aU,
    useSounds as aV,
    useSimpleTooltip as aW,
    useSpecialTooltip as aX,
    defineStyledComponent as aY,
    VehicleImage as aZ,
    RentalCounter as a_,
    reduce as aa,
    useLoop as ab,
    Video as ac,
    types$1 as ad,
    identity as ae,
    atSpgRoles as af,
    lightTankRoles as ag,
    mediumTankRoles as ah,
    heavyTankRoles as ai,
    isRentVehicle as aj,
    nationById as ak,
    vehicleState as al,
    getRoleByKey as am,
    computeds as an,
    comparer as ao,
    getVehicleImageKey as ap,
    createString as aq,
    renderResolvedString as ar,
    LOWER_ALPHABET as as,
    NUMBERS_ALPHABET as at,
    sameTanksRemap as au,
    iter as av,
    sort as aw,
    isNumber as ax,
    makeActions as ay,
    mapNonNullable as az,
    breakpointsByType as b,
    emptyFunction$2 as b$,
    intl$1 as b0,
    directions$1 as b1,
    MultilineOverflow as b2,
    useSpecialContextMenu as b3,
    DisposeBuilder as b4,
    remToPx$1 as b5,
    useScrollBounding as b6,
    List as b7,
    CarouselScroll as b8,
    useHorizontalScroll as b9,
    getRewardValueType as bA,
    getRewardImage as bB,
    Tooltip$1 as bC,
    useLayoutReady as bD,
    getInitialApi as bE,
    OptimizedProgressBar as bF,
    useMount$1 as bG,
    useCountdown as bH,
    format$1 as bI,
    normalizeResource as bJ,
    formatPrintf as bK,
    getScale$2 as bL,
    Gray as bM,
    RewardType$1 as bN,
    useHorizontalScrollApi as bO,
    Switch as bP,
    Route as bQ,
    ModelRouterProvider as bR,
    initExternalPaddings$1 as bS,
    enableFullScreenModeSupported$1 as bT,
    CurrencyType as bU,
    pxToRem$1 as bV,
    BackportTooltip as bW,
    setEventHandled$1 as bX,
    findIndexLast as bY,
    CloseButton as bZ,
    Tooltip as b_,
    throttle$1 as ba,
    ErrorHandler as bb,
    ProgressBar as bc,
    statusTypes as bd,
    useScrollByDragElements as be,
    dragDirections as bf,
    Area$1 as bg,
    Bar$1 as bh,
    checkOnBorder as bi,
    Timer as bj,
    sizes$1 as bk,
    getRegionalDateTime as bl,
    DateTimeFormatsEnum as bm,
    VehicleLevel as bn,
    sizes$3 as bo,
    join as bp,
    FormatNumber as bq,
    Base$7 as br,
    Counter as bs,
    slice as bt,
    IconButton as bu,
    convertNbsp$1 as bv,
    MediaHeight as bw,
    MediaWidth as bx,
    unsafeGet as by,
    getRewardTooltipConfig as bz,
    constFalse as c,
    ResourceImage as c0,
    format as c1,
    ONE_DAY as c2,
    Specials as c3,
    FormatTextWithColorTags as c4,
    getNumberFormat as c5,
    defaultBrackets as d,
    FormatText$1 as e,
    find as f,
    get as g,
    useCloseOnEsc as h,
    initializeModelWithContext as i,
    runView as j,
    useScreenSize as k,
    useScaleState as l,
    map as m,
    createTimeoutInEffect$1 as n,
    useCallbackOnEsc as o,
    play$1 as p,
    ButtonType as q,
    resources as r,
    sendEvent$1 as s,
    toRoman as t,
    useMedia as u,
    useKeydownListener as v,
    keyCodes as w,
    defaultAnimationSettings as x,
    ProgressBar$1 as y,
    mapRange as z,
};
