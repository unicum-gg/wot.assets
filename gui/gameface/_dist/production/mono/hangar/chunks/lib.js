var __defProp = Object.defineProperty,
    __defNormalProp = (e, t, s) =>
        t in e ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s),
    __publicField = (e, t, s) => __defNormalProp(e, 'symbol' != typeof t ? t + '' : t, s),
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
    o as observable,
    u as untracked,
    g as computedFn,
    h as comparer$1,
    R as React,
    i as client,
    k as cva,
    m as useSpring,
    n as animated,
    p as ReactDOM,
    q as runInAction,
    s as autorun,
    t as reactDomExports,
    v as index,
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
    const s = t.split('.');
    if (window.R && window.R.images) {
        const t = s[s.length - 1];
        if (!t) return;
        const r = s.slice(0, -1).reduce((e, t) => {
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
    readOr(e, t, s = 'silent') {
        const r = concatWithPath(this.prefix, e),
            n = readFromR$2(this.root, r);
        return void 0 === n ? ('silent' !== s && logBySeverity$1(`Resource not found: ${r}`, s), t()) : n;
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
function formatNumber$1(e, t) {
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
function formatDateTime(e, t, s = !0) {
    return window.regionalDateTime.getRegionalDateTime(validateTimestamp(t), e, s);
}
const timeFormats = { full: DateTimeFormatsEnum.FullTime, short: DateTimeFormatsEnum.ShortTime },
    timeFormatList = Object.keys(timeFormats);
function formatTime(e, t, s = !0) {
    return window.regionalDateTime.getRegionalDateTime(validateTimestamp(t), e, s);
}
const systemFormat = { short: 0, full: 1 },
    system = {
        time: (e, t) => window.systemLocale.getTimeFormat(validateTimestamp(e), systemFormat[t]),
        date: (e, t) => window.systemLocale.getDateFormat(validateTimestamp(e), systemFormat[t]),
    },
    intl$2 = {
        isNumberFormat: isNumberFormat,
        formatNumber: formatNumber$1,
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
    const s = e.split('.');
    if (window.R && window.R.strings) {
        const e = s[s.length - 1];
        if (!e) return;
        const r = window.R.strings,
            n = s.slice(0, -1).reduce((e, t) => {
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
    readOr(e, t, s = 'silent') {
        const r = concatWithPath(this.prefix, e),
            n = readFromR$1(r);
        return void 0 === n ? ('silent' !== s && logBySeverity$1(`Resource not found: ${r}`, s), t()) : n;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = concatWithPath(this.prefix, e),
            s = readFromR$1(t);
        if (void 0 === s) throw new Error(`Resource not found: ${t}`);
        return s;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, s, r = 'silent') {
        const n = concatWithPath(this.prefix, e),
            o = readFromR$1(n, t);
        return void 0 === o ? ('silent' !== r && logBySeverity$1(`Resource not found: ${n}`, r), s()) : o;
    }
    pluralOrEmpty(e, t, s = 'warn') {
        return this.pluralOr(e, t, () => '', s);
    }
}
function readFromR(e, t) {
    const s = t.split('.');
    if (window.R && window.R.videos) {
        const t = s[s.length - 1];
        if (!t) return;
        const r = s.slice(0, -1).reduce((e, t) => {
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
    readOr(e, t, s = 'silent') {
        const r = readFromR(this.root, e);
        return void 0 === r ? ('silent' !== s && logBySeverity$1(`Resource not found: ${e}`, s), t()) : r;
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
    intl: asValue(intl$2),
});
const easings = {
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
            s = Math.pow;
        return e < 0.5 ? (1 - t(1 - s(2 * e, 2))) / 2 : (t(1 - s(-2 * e + 2, 2)) + 1) / 2;
    },
    reverseEaseInOutCirc: (e) => 1 - easings.easeInOutCirc(1 - e),
    easeOutBack(e) {
        const t = 1.70158;
        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
    },
    bezier: (e, t, s, r) => (n) =>
        (1 - n) * (1 - n) * (1 - n) * e + 3 * (1 - n) * (1 - n) * n * t + 3 * (1 - n) * n * n * s + n * n * n * r,
    cubicBezier: (e, t, s, r) => (n) => {
        const o = findTForX(n, e, s);
        return 3 * t * (1 - o) ** 2 * o + 3 * r * (1 - o) * o ** 2 + o ** 3;
    },
};
function bezierX(e, t, s) {
    return 3 * t * (1 - e) ** 2 * e + 3 * s * (1 - e) * e ** 2 + e ** 3;
}
function bezierXDerivative(e, t, s) {
    return 9 * t * (1 - e) ** 2 + 6 * (s - t) * (1 - e) * e + 3 * (1 - s) * e ** 2;
}
function findTForX(e, t, s, r = 1e-5) {
    let n = e;
    for (let o = 0; o < 8; o++) {
        const o = bezierX(n, t, s) - e;
        if (Math.abs(o) < r) return n;
        const a = bezierXDerivative(n, t, s);
        if (Math.abs(a) < r) break;
        n -= o / a;
    }
    return n;
}
function curry2(e) {
    return function (t, s) {
        switch (arguments.length) {
            case 1:
                return function (s) {
                    return e(t, s);
                };
            case 2:
                return e(t, s);
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
function minutes(e) {
    return { [typeId]: typeId, value: e, unit: 'minutes' };
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
function toSeconds(e) {
    const t = toMillis(e);
    return fromMs.seconds(t);
}
function toMinutes(e) {
    const t = toMillis(e);
    return fromMs.minutes(t);
}
function toHours(e) {
    const t = toMillis(e);
    return fromMs.hours(t);
}
function toDays(e) {
    const t = toMillis(e);
    return fromMs.days(t);
}
const convert = (e, t) => {
    const s = toMillis(e),
        r = (0, fromMs[t])(s);
    return { [typeId]: typeId, value: r, unit: t };
};
function now() {
    return millis(Date.now());
}
const add = curry2(function (e, t) {
        return millis(toMillis(e) + toMillis(t));
    }),
    subtract = curry2(function (e, t) {
        return millis(toMillis(e) - toMillis(t));
    }),
    compare = curry2(function (e, t) {
        return toMillis(e) - toMillis(t);
    }),
    greaterThan = curry2(function (e, t) {
        return toMillis(e) > toMillis(t);
    }),
    gt = greaterThan,
    greaterThanOrEqual = curry2(function (e, t) {
        return toMillis(e) >= toMillis(t);
    }),
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
    const s = toMillis(e);
    return t.map((e) => formats$1[e](s));
}
function getRealFormat(e, t) {
    return window.systemLocale.getRealFormat(e, t);
}
function toUpperCase(e) {
    return window.systemLocale.toUpperCase(e);
}
const MINUTES_IN_HOUR = 60,
    MS_IN_SECOND$1 = 1e3;
function normalizeResource(e) {
    return e.replaceAll('-', '_');
}
function format$1(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function capitalize(e) {
    return e ? toUpperCase(e.charAt(0)) + e.slice(1) : '';
}
function getRegionalDateTime(e, t, s = !0) {
    return window.regionalDateTime.getRegionalDateTime(e, t, s);
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
    function s() {
        e.enabled && setTrackMouseOutside$1(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', s),
                  setTrackMouseOutside$1(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', s))
            : setTrackMouseOutside$1(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, s) => (
                (t[s] = (function (t) {
                    return (s) => {
                        e.listeners += 1;
                        const n = `mouse${t}`,
                            o = internalMouse$1[t]((e) => s([e, 'outside']));
                        function a(e) {
                            s([e, 'inside']);
                        }
                        return (
                            window.addEventListener(n, a),
                            r(),
                            () => {
                                (o(), window.removeEventListener(n, a), (e.listeners -= 1), r());
                            }
                        );
                    };
                })(s)),
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
const mouse = initMouseEvents$1();
function getSize$1(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
function playSound$2(e) {
    engine.call('PlaySound', e);
}
function writeClipboard(e) {
    return window.engine.call('writeClipboard', e);
}
const sounds$1 = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays$1 = Object.keys(sounds$1).reduce((e, t) => ((e[t] = () => playSound$2(sounds$1[t])), e), {}),
    play$1 = { ...plays$1, sound: playSound$2 },
    displayStatus$1 = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    createSubscribeHitTest = () => {
        const e = new Set(),
            t = (t, s) => {
                for (const r of e.values())
                    if (r(t)) {
                        s.value = !1;
                        break;
                    }
            };
        return (s) => (
            e.add(s),
            1 === e.size && (viewEnv.setHitTestEnabled(!0), engine.on('self.onHitTest', t)),
            () => {
                (e.delete(s), 0 === e.size && (viewEnv.setHitTestEnabled(!1), engine.off('self.onHitTest', t)));
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
    viewEventTypes$1 = { tooltip: 1, popover: 2, contextMenu: 4 };
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
        for (const [s, r] of Object.entries(e)) {
            const e = serializeEventArgument(r);
            void 0 !== e && t.push({ __Type: 'GFValueProxy', name: s, ...e });
        }
        return t;
    },
    sendViewEvent$1 = (e, t) => {
        const s = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...n } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: s, type: e, ...n, arguments: createViewEventArguments$2(r) })
                : viewEnv.handleViewEvent({ __Type: s, type: e, ...n });
        }
        return viewEnv.handleViewEvent({ __Type: s, type: e });
    },
    openedTooltips = new Map(),
    sendEvent$1 = {
        popover: {
            open({ contentID: e, decoratorID: t = 0, targetID: s, direction: r, boundingBox: n, args: o }) {
                sendViewEvent$1(viewEventTypes$1.popover, {
                    contentID: e,
                    decoratorID: t,
                    targetID: s,
                    direction: r,
                    bbox: serializeGlobalBoundingBox(n),
                    on: !0,
                    isMouseEvent: !0,
                    args: o,
                });
            },
            close() {
                sendViewEvent$1(viewEventTypes$1.popover, { on: !1 });
            },
        },
        tooltip: {
            open(e, t, s = 0, r) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, {
                    contentID: t,
                    decoratorID: s,
                    targetID: e,
                    isMouseEvent: !0,
                    on: !0,
                    args: r,
                }),
                    openedTooltips.set(`${e}-${t}`, { targetID: e, contentID: t }));
            },
            hide(e, t, s = 0) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, { contentID: t, decoratorID: s, targetID: e, on: !1 }),
                    openedTooltips.delete(`${e}-${t}`));
            },
            hideAll() {
                const e = Array.from(openedTooltips.values());
                for (const t of e) this.hide(t.targetID, t.contentID);
            },
        },
        contextMenu: {
            open(e, t, s = 0, r) {
                sendViewEvent$1(viewEventTypes$1.contextMenu, {
                    contentID: t,
                    decoratorID: s,
                    targetID: e,
                    isMouseEvent: !0,
                    on: !0,
                    args: r,
                });
            },
            hide(e, t, s = 0) {
                sendViewEvent$1(viewEventTypes$1.contextMenu, {
                    contentID: t,
                    decoratorID: s,
                    targetID: e,
                    on: !1,
                    isMouseEvent: !1,
                });
            },
        },
    };
function ids() {
    return window.subViews.ids();
}
const events$1 = { added: { type: 'added' }, removed: { type: 'removed' } },
    subscribers = new Map();
function handleAddedChildren(e) {
    e.forEach((e) => {
        const t = subscribers.get(e);
        t && t.forEach((e) => e(events$1.added));
    });
}
function handleRemovedChildren(e) {
    e.forEach((e) => {
        const t = subscribers.get(e);
        t && t.forEach((e) => e(events$1.removed));
    });
}
const updateSubscribers = (() => {
    let e = !1;
    return function () {
        if (e && 0 === subscribers.size)
            return (
                engine.off('subViews.onAdded', handleAddedChildren),
                engine.off('subViews.onRemoved', handleRemovedChildren),
                void (e = !1)
            );
        !1 === e &&
            subscribers.size > 0 &&
            (engine.on('subViews.onAdded', handleAddedChildren),
            engine.on('subViews.onRemoved', handleRemovedChildren),
            (e = !0));
    };
})();
function takeOrInit(e) {
    const t = subscribers.get(e);
    if (t) return t;
    const s = new Set();
    return (subscribers.set(e, s), s);
}
function removeSubscriber(e, t) {
    const s = subscribers.get(e);
    s ? (s.delete(t), s.size || subscribers.delete(e), updateSubscribers()) : console.error(`No subscribers for ${e}`);
}
function subscribe(e, t) {
    return (
        takeOrInit(e).add(t),
        updateSubscribers(),
        () => {
            removeSubscriber(e, t);
        }
    );
}
function get$1(e) {
    return window.subViews.get(e);
}
const ALL_SIDES$1 = 15;
function addModelObserver$1(e, t, s) {
    return viewEnv.addDataChangedCallback(e, t, s);
}
function setSidePaddingsRem$1(e) {
    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, ALL_SIDES$1);
}
function resize$1(e, t, s = 'px') {
    return 'rem' === s ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
}
function getViewGlobalPosition$1(e = 'rem') {
    const t = viewEnv.getViewGlobalPositionRem();
    return 'rem' === e ? t : { x: remToPx$1(t.x), y: remToPx$1(t.y) };
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
Object.keys(displayStatus$1).reduce(
    (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === displayStatus$1[t]), e),
    {},
);
const windowShown = {
    tooltip: () => viewEnv.isWindowShownByViewEvent(1),
    popover: () => viewEnv.isWindowShownByViewEvent(2),
    contextMenu: () => viewEnv.isWindowShownByViewEvent(4),
};
function enableFullScreenModeSupported$1() {
    viewEnv.setFullscreenModeSupported(!0);
}
function setSkipFramesAllowed(e) {
    viewEnv.setSkipFramesAllowed(e);
}
function setContentReady(e) {
    viewEnv.setContentReady(e);
}
function initExternalPaddings$1(e) {
    function t() {
        const { top: t, right: s, bottom: r, left: n } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${s}rem`),
            e.style.setProperty('--external-padding-bottom', `${r}rem`),
            e.style.setProperty('--external-padding-left', `${n}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
function pipe(e, t, s, r, n, o, a, i, u) {
    switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return t(e);
        case 3:
            return s(t(e));
        case 4:
            return r(s(t(e)));
        case 5:
            return n(r(s(t(e))));
        case 6:
            return o(n(r(s(t(e)))));
        case 7:
            return a(o(n(r(s(t(e))))));
        case 8:
            return i(a(o(n(r(s(t(e)))))));
        case 9:
            return u(i(a(o(n(r(s(t(e))))))));
        default: {
            let e = arguments[0];
            for (let t = 1; t < arguments.length; t++) e = arguments[t](e);
            return e;
        }
    }
}
function compose(e, t, s, r, n, o, a, i, u) {
    switch (arguments.length) {
        case 1:
            return e;
        case 2:
            return function () {
                return t(e.apply(this, arguments));
            };
        case 3:
            return function () {
                return s(t(e.apply(this, arguments)));
            };
        case 4:
            return function () {
                return r(s(t(e.apply(this, arguments))));
            };
        case 5:
            return function () {
                return n(r(s(t(e.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return o(n(r(s(t(e.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return a(o(n(r(s(t(e.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return i(a(o(n(r(s(t(e.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return u(i(a(o(n(r(s(t(e.apply(this, arguments)))))))));
            };
    }
}
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
    { initializer: e = !0, rootId: t = 0, getRoot: s = getRootDefault, context: r = 'model' } = {},
    { name: n = 'DataLayer' } = {},
) {
    const o = new Map(),
        a = { subscribersNotified: new SimpleEmitter() },
        i = engine.whenReady.then(() => {
            function e(e, t, s) {
                (s.forEach((s) => {
                    const r = o.get(s);
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
    function u() {
        try {
            const e = s(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${n}. Root id: ${t}. Context: ${r}`);
        }
    }
    const l = (e) => {
        const s = u();
        if ('string' != typeof e || 0 === e.length) return s;
        try {
            return e.split('.').reduce((e, t) => {
                if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                const s = e[t];
                return 'function' == typeof s ? s.bind(e) : s;
            }, s);
        } catch (o) {
            throw new Error(`Failure readByPath in ${n}. Root id: ${t}. Context: ${r}:\n${o}\n`);
        }
    };
    function c(e) {
        viewEnv.removeDataChangedCallback(e, t) ? o.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (s, n) => {
            const a = addModelObserver$1('string' == typeof n ? `${r}.${n}` : r, t, !0);
            return (o.set(a, s), e && s(l(n), []), a);
        },
        readByPath: l,
        readSafeByPath: (e) => {
            const t = u();
            return 'string' != typeof e || 0 === e.length
                ? t
                : e.split('.').reduce((e, t) => {
                      const s = null == e ? void 0 : e[t];
                      return 'function' == typeof s ? s.bind(e) : s;
                  }, t);
        },
        createCallback: (e, t) => {
            const s = l(t);
            return (...t) => {
                s(e(...t));
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
            i.then((e) => e());
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
    const s = cleanContext(t);
    return e ? (0 === s.length ? e : `${s}.${e}`) : s;
}
function resolvePath(e, t) {
    return t ? resolvePathContext(e, t.context) : e;
}
function createMockInstance(e, t) {
    return {
        subscribe: () => 0,
        readSafeByPath: e,
        readByPath: e,
        createCallback: (s, r) => {
            const n = e(resolvePath(r, t));
            return (...e) => {
                n(s(...e));
            };
        },
        createCallbackNoArgs: (s) => {
            const r = e(resolvePath(s, t));
            return () => {
                r();
            };
        },
        dispose: () => {},
        unsubscribe: () => {},
        events: { subscribersNotified: new SimpleEmitter() },
    };
}
const clamp = (e, t, s) => (s < e ? e : s > t ? t : s);
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
function addEventListener(e, t, s, r) {
    return (e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r));
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((a.prototype.append = function (e, t) {
                ((e = n(e)), (t = o(t)));
                var s = this.map[e];
                (s || ((s = []), (this.map[e] = s)), s.push(t));
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
                    this.map[n(e)] = [o(t)];
                }),
                (a.prototype.forEach = function (e) {
                    var t = this;
                    Object.getOwnPropertyNames(this.map).forEach(function (s) {
                        e(s, t.map[s]);
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
                s = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'],
                r = !(
                    'undefined' == typeof window ||
                    !window.ActiveXObject ||
                    (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
                );
            (c.call(d.prototype),
                c.call(p.prototype),
                (self.Headers = a),
                (self.Request = d),
                (self.Response = p),
                (self.fetch = function (t, s) {
                    var n;
                    return (
                        (n = d.prototype.isPrototypeOf(t) && !s ? t : new d(t, s)),
                        new fetch.Promise(function (t, s) {
                            var o = (function () {
                                return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function a() {
                                if (4 === o.readyState) {
                                    var e = 1223 === o.status ? 204 : o.status;
                                    if (e < 100 || e > 599) s(new TypeError('Network request failed'));
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
                                            n = 'response' in o ? o.response : o.responseText;
                                        t(new p(n, r));
                                    }
                                }
                            }
                            ('cors' === n.credentials && (o.withCredentials = !0),
                                (o.onreadystatechange = a),
                                self.usingActiveXhr ||
                                    ((o.onload = a),
                                    (o.onerror = function () {
                                        s(new TypeError('Network request failed'));
                                    })),
                                o.open(n.method, n.url, !0),
                                'responseType' in o && e && (o.responseType = 'blob'),
                                n.headers.forEach(function (e, t) {
                                    t.forEach(function (t) {
                                        o.setRequestHeader(e, t);
                                    });
                                }),
                                o.send(void 0 === n._bodyInit ? null : n._bodyInit));
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
        function o(e) {
            return ('string' != typeof e && (e = e.toString()), e);
        }
        function a(e) {
            this.map = {};
            var t = this;
            e instanceof a
                ? e.forEach(function (e, s) {
                      s.forEach(function (s) {
                          t.append(e, s);
                      });
                  })
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (s) {
                      t.append(s, e[s]);
                  });
        }
        function i(e) {
            if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function u(e) {
            return new fetch.Promise(function (t, s) {
                ((e.onload = function () {
                    t(e.result);
                }),
                    (e.onerror = function () {
                        s(e.error);
                    }));
            });
        }
        function l(e) {
            var t = new FileReader();
            return (t.readAsArrayBuffer(e), u(t));
        }
        function c() {
            return (
                (this.bodyUsed = !1),
                (this._initBody = function (s) {
                    if (((this._bodyInit = s), 'string' == typeof s)) this._bodyText = s;
                    else if (e && Blob.prototype.isPrototypeOf(s)) this._bodyBlob = s;
                    else if (t && FormData.prototype.isPrototypeOf(s)) this._bodyFormData = s;
                    else {
                        if (s) throw new Error('unsupported BodyInit type');
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
                              s = i(this);
                          if (s) return s;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), u(t));
                          if (this._bodyFormData) throw new Error('could not read FormData body as text');
                          return fetch.Promise.resolve(this._bodyText);
                      }))
                    : (this.text = function () {
                          var e = i(this);
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
            var r, n;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new a(t.headers)),
                (this.method = ((r = t.method || 'GET'), (n = r.toUpperCase()), s.indexOf(n) > -1 ? n : r)),
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
                            var s = e.split('='),
                                r = s.shift().replace(/\+/g, ' '),
                                n = s.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(r), decodeURIComponent(n));
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
                        var s = e.trim().split(':'),
                            r = s.shift().trim(),
                            n = s.join(':').trim();
                        t.append(r, n);
                    }),
                t
            );
        }
        function p(e, t) {
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
const keyCodes = {
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
class Iter {
    constructor(e) {
        (__publicField(this, 'iterable'), __publicField(this, 'index', 0), (this.iterable = e));
    }
    static range(e, t) {
        return new Iter({
            *[Symbol.iterator]() {
                for (let s = e; s < t; s++) yield s;
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
                for (const s of t) s !== e && (yield s);
            },
        });
    }
    map(e) {
        const t = this,
            s = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const r of s) yield e(r, t.index++);
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
            s = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const r of s) e(r, t.index++) && (yield r);
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
            s = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const r of s) {
                    if (t.index++ >= e) break;
                    yield r;
                }
            },
        });
    }
    skip(e) {
        const t = this,
            s = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                for (const r of s) t.index++ < e || (yield r);
            },
        });
    }
    chunk(e) {
        const t = this.iterable;
        return new Iter({
            *[Symbol.iterator]() {
                let s = [];
                for (const r of t) (s.push(r), s.length >= e && (yield s, (s = [])));
                s.length > 0 && (yield s);
            },
        });
    }
    reduce(e, t) {
        let s = t;
        for (const r of this.iterable) s = e(s, r, this.index++);
        return s;
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
    var s;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (s = e[t]) ? void 0 : s.value;
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
function map$1(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, s, r) => t(null == e ? void 0 : e.value, s, r));
}
function toArray(e) {
    return Array.isArray(e) ? e : e.map((e) => (null == e ? void 0 : e.value));
}
function every(e, t) {
    if (Array.isArray(e)) return e.every(t);
    for (let s = 0; s < e.length; s++) {
        if (!t(unsafeGet(e, s), s, e)) return !1;
    }
    return !0;
}
function some(e, t) {
    if (Array.isArray(e)) return e.some(t);
    for (let s = 0; s < e.length; s++) {
        if (t(unsafeGet(e, s), s, e)) return !0;
    }
    return !1;
}
function filter$1(e, t) {
    var s;
    if (Array.isArray(e)) return e.filter(t);
    const r = [];
    for (let n = 0; n < e.length; n++) {
        const o = null == (s = e[n]) ? void 0 : s.value;
        t(o, n, e) && r.push(o);
    }
    return r;
}
function lastIndexZero(e) {
    return Math.max(0, e.length - 1);
}
function slice(e, t = 0, s = e.length - 1) {
    return {
        [Symbol.iterator]() {
            let r = Math.max(t, 0);
            const n = Math.min(s, lastIndexZero(e));
            return {
                next: function () {
                    if (r > n) return { done: !0, value: null };
                    const t = e[r++];
                    return t ? { value: unwrapItem(t), done: !1 } : { done: !0, value: null };
                },
            };
        },
    };
}
function find(e, t) {
    for (let s = 0; s < e.length; s++) {
        const r = unwrapItem(e[s]);
        if (t(r, s, e)) return r;
    }
}
function filterMap(e, t, s) {
    const r = [];
    for (let n = 0; n < e.length; n++) {
        const o = unsafeGet(e, n);
        t(o, n, e) && r.push(s(o, n, e));
    }
    return r;
}
function mapFilter(e, t, s) {
    const r = [];
    for (let n = 0; n < e.length; n++) {
        const o = t(unsafeGet(e, n), n, e);
        s(o, n, e) && r.push(o);
    }
    return r;
}
function mapExists(e, t) {
    return filterMap(e, isNonNullable, t);
}
function mapNonNullable(e, t) {
    return mapFilter(e, t, isNonNullable);
}
function findIndex(e, t) {
    for (let s = 0; s < e.length; s++) {
        if (t(unsafeGet(e, s), s, e)) return s;
    }
}
function findIndexLast(e, t) {
    for (let s = e.length - 1; s >= 0; s--) {
        if (t(unsafeGet(e, s), s, e)) return s;
    }
}
function reduce(e, t, s) {
    if (Array.isArray(e)) return e.reduce(t, s);
    let r = s;
    for (let n = 0; n < e.length; n++) {
        r = t(r, unsafeGet(e, n), n, e);
    }
    return r;
}
function sort(e, t) {
    return map$1(e, identity).sort(t);
}
function forEach(e, t) {
    for (let s = 0; s < e.length; s++) {
        t(unsafeGet(e, s), s, e);
    }
}
const groupMapBy = (e, t, s) => {
    if (void 0 === s) return (s) => groupMapBy(e, t, s);
    const r = {};
    return (
        forEach(s, (s) => {
            r[s[e]] = t(s);
        }),
        r
    );
};
function insertBefore(e, t, s) {
    if (void 0 === s || s >= e.length) return [...toArray(e), t];
    if (s <= 0) return [t, ...toArray(e)];
    return [...slice(e, 0, s - 1), t, ...slice(e, s)];
}
function makeActions(e) {
    const t = {};
    for (const s in e)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
            const r = e[s];
            t[s] = action(r);
        }
    return t;
}
function takeAction(e) {
    return action((t) => {
        e.set(t);
    });
}
function chunks(e, t) {
    const s = [],
        r = Math.ceil(e.length / t);
    for (let n = 0; n < r; n++) {
        const r = [];
        for (let s = 0; s < t; s++) {
            const o = e[n * t + s];
            o && r.push(o);
        }
        s.push(r);
    }
    return s;
}
function readByPath(e, t) {
    const s = e.split('.');
    let r = t;
    for (const n of s) r = null == r ? void 0 : r[n];
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
    return Object.entries(e).reduce((e, [t, s]) => ((e[t] = toPrimitive(s)), e), {});
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
const createLayoutReadyInEffect = (e) => {
    let t,
        s = null;
    return (
        (s = requestAnimationFrame(() => {
            s = requestAnimationFrame(() => {
                ((s = null), (t = e()));
            });
        })),
        () => {
            ('function' == typeof t && t(), null !== s && cancelAnimationFrame(s));
        }
    );
};
function assert(e, t) {
    e || console.error(t || 'Assertion failed');
}
function mapRange(e, t, s) {
    return 'function' == typeof t
        ? _mapRange(0, e, t)
        : (assert(void 0 !== s, 'fn must be defined'), _mapRange(e, t, s));
}
function _mapRange(e, t, s) {
    const r = new Array(t - e);
    for (let n = e; n < t; n++) r[n] = s(n);
    return r;
}
function delay(e) {
    return new Promise((t) => setTimeout(t, e));
}
function isNone(e) {
    return null == e;
}
function none() {}
function make(e) {
    return e;
}
function map(e, t) {
    return 1 === arguments.length ? (t) => map(e, t) : isNone(t) ? t : make(e(t));
}
function filter(e, t) {
    return 1 === arguments.length ? (t) => filter(e, t) : isNone(t) || !e(t) ? none() : t;
}
assert.log = function (e, t) {
    e || console.error(t || 'Assertion failed');
};
const ROMAN$1 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    ARABIC$1 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
    ROMAN_SUBSET = [void 0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
    ROMAN_FORBIDDEN_LANGUAGE_CODES$2 = ['ko', 'no'];
function arabicToRoman(e) {
    if (e <= 10) return ROMAN_SUBSET[e] ?? String(e);
    let t = '';
    for (let s = ARABIC$1.length - 1; s >= 0; s--) {
        let r = ARABIC$1[s];
        for (; void 0 !== r && e >= r; ) ((t += ROMAN$1[s]), (e -= r));
    }
    return t;
}
function int(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
}
ROMAN_FORBIDDEN_LANGUAGE_CODES$2.includes(resources.resolve('langCode'));
const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz',
    NUMBERS_ALPHABET = '0123456789',
    createString =
        (e) =>
        (t, s = int(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)) => {
            const r = e.length;
            let n = s;
            let o = '';
            for (let a = 0; a < t; a++) {
                const t = Math.abs(Math.floor(((n = (9301 * n + 49297) % 233280), (n / 233280) * r)));
                o += e[t % e.length];
            }
            return o;
        };
function isValid(e) {
    return 'number' == typeof e && !Number.isNaN(e) && Number.isFinite(e);
}
function roundTo(e, t, s) {
    return Math.floor(e / t) * t;
}
const PERCENT_100 = 100;
function parse$1(e) {
    switch (typeof e) {
        case 'string':
            return parseFloat(e);
        case 'number':
            return e;
        default:
            return;
    }
}
function parseValid(e) {
    const t = parse$1(e);
    return isValid(t) ? t : void 0;
}
function calcPercent(e, t) {
    return (PERCENT_100 * e) / t;
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
function deepEqual(e, t, s = -1) {
    return eq(e, t, s);
}
function eq(e, t, s, r, n) {
    if (e === t) return 0 !== e || 1 / Number(e) == 1 / Number(t);
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    const o = typeof e;
    if ('function' !== o && 'object' !== o && 'object' != typeof t) return !1;
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
            s >= 0 && s++;
    }
    const i = unwrap(e),
        u = unwrap(t),
        l = Array.isArray(i) && Array.isArray(u);
    if (!l) {
        if ('object' != typeof i || 'object' != typeof u) return !1;
        const e = i.constructor,
            t = u.constructor;
        if (
            e !== t &&
            !(isFunction(e) && e instanceof e && isFunction(t) && t instanceof t) &&
            'constructor' in i &&
            'constructor' in u
        )
            return !1;
    }
    if (0 === s) return !1;
    (s < 0 && (s = -1), (n = n || []));
    let c = (r = r || []).length;
    for (; c--; ) if (r[c] === i) return n[c] === u;
    if ((r.push(e), n.push(t), l)) {
        if (((c = i.length), c !== u.length)) return !1;
        for (; c--; ) if (!eq(i[c], u[c], s - 1, r, n)) return !1;
    } else {
        const e = Object.keys(i);
        let t;
        if (((c = e.length), Object.keys(u).length !== c)) return !1;
        for (; c--; ) {
            if (((t = e[c]), void 0 === t))
                return (console.error('Error: met undefined in object during deepEqual comparison'), !1);
            if (!Object.prototype.hasOwnProperty.call(u, t) || !eq(i[t], u[t], s - 1, r, n)) return !1;
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
    mouseButtons = { left: 0, wheel: 1, right: 2 },
    CHINESE_LANGUAGE_CODES = new Set(['zh_cn', 'zh_sg', 'zh_tw']);
function splitChinese(e) {
    const t = [],
        s = e
            .replace(/&nbsp;/g, ' ')
            .replace(/ /g, ' ')
            .matchAll(
                /[\u4E00-\u9FFF\u3400-\u4DBF][。，: ; ：；！？《》「」•)、]?|[a-zA-Z0-9]+[.,!?]?|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
            );
    for (const [r] of s) t.push(r);
    return t;
}
function addSpaceAndMap(e, t, s) {
    return CHINESE_LANGUAGE_CODES.has(t)
        ? e.map(s)
        : e.map((e, t, r) => (t === r.length - 1 ? s(e, t, r) : s(`${e} `, t, r)));
}
function splitLocale(e, t) {
    return CHINESE_LANGUAGE_CODES.has(t)
        ? splitChinese(e)
        : 'ja' === t
          ? loadDefaultJapaneseParser()
                .parse(e)
                .map((e) => e.replace(/&nbsp;/g, ' '))
          : e.split(' ');
}
const readKey = (e, t) => e[t],
    MediaContext = reactExports.createContext(void 0);
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
    const s = t['width' === e ? 'height' : 'width'],
        r = new Set(t[e].classes),
        n = new Set(s.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || r.has(e)));
    return Array.from(new Set([...r, ...n])).join(' ');
}
function calculateMedia(e, t, s) {
    const r = BREAKPOINTS.reduce(
            (s, r) => (
                r.width <= e &&
                    (s.width.classes.push(r.className, `${r.className}Width`),
                    s.width.names.push(r.name),
                    (s.width.weight += 1)),
                r.height <= t &&
                    (s.height.classes.push(r.className, `${r.className}Height`),
                    s.height.names.push(r.name),
                    (s.height.weight += 1)),
                s
            ),
            { width: { classes: [], names: [], weight: 0 }, height: { classes: [], names: [], weight: 0 } },
        ),
        n = r.width.weight <= r.height.weight ? 'width' : 'height',
        o = r[n],
        a = o.names[o.names.length - 1] ?? breakpoints.extraSmall,
        i = breakpointsByType[a],
        u = r.width.names,
        l = r.height.names,
        c = u[u.length - 1] ?? breakpoints.extraSmall,
        d = l[l.length - 1] ?? breakpoints.extraSmall,
        _ = { width: breakpointsByType[c].width, height: breakpointsByType[d].height };
    return {
        mediaClass: generateMediaClasses(n, r),
        breakpoint: i,
        screenWidthRem: e,
        screenHeightRem: t,
        breaks: o.names,
        sides: _,
        mediaSize: i.width,
        mediaWidth: _.width,
        mediaHeight: _.height,
        upscale: s > 1,
    };
}
const getScale$1 = () => remToPx$1(1),
    calcMediaState = () => {
        const e = getSize$1('rem');
        return calculateMedia(e.width, e.height, getScale$1());
    };
function MediaProvider({ children: e }) {
    const [t, s] = reactExports.useState(calcMediaState);
    return (
        reactExports.useLayoutEffect(() => {
            function e() {
                s(calcMediaState);
            }
            e();
            const t = onResize(e),
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
function MediaWrapperElement({ children: e, className: t, ...s }) {
    const { mediaClass: r, upscale: n } = useMedia();
    return jsxRuntimeExports.jsx('div', {
        className: cx(t, 'media-wrapper', r, n && 'media-upscale'),
        ...s,
        children: e,
    });
}
function MediaWrapper({ children: e, ...t }) {
    return jsxRuntimeExports.jsx(MediaProvider, {
        children: jsxRuntimeExports.jsx(MediaWrapperElement, { ...t, children: e }),
    });
}
function accumulate(e, t, s) {
    return s ? e.breaks.reduce((e, t) => (s[t] ? { ...e, ...s[t] } : e), t) : t;
}
function useAdaptive(e, t) {
    return accumulate(useMedia(), e, t);
}
const UPSCALE = 'upscale';
function useUpscale(e, t) {
    return useMedia().upscale ? t : e;
}
function useAdaptiveWidth(e, t) {
    const s = useMedia();
    return t
        ? Object.values(breakpointsByType).reduce(
              (e, r) => (t[r.name] && s.sides.width >= r.width ? { ...e, ...t[r.name] } : e),
              e,
          )
        : e;
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
function updateViewHeight(e, t, s, r) {
    (resize$1(e, t + viewEnv.remToPx(r + s), 'px'), setSidePaddingsRem$1({ top: s, bottom: r, right: 0, left: 0 }));
}
function useSyncSizeTexture(e, t) {
    const s = reactExports.useRef(null),
        r = reactExports.useRef(null),
        n = reactExports.useCallback(() => {
            var n, o;
            const a = s.current;
            if (!a) return null;
            const i = null == (n = r.current) ? void 0 : n.height,
                u = null == (o = r.current) ? void 0 : o.width,
                l = a.offsetHeight,
                c = getSize$1('px').width;
            (l === i && c === u) || (updateViewHeight(c, l, e, t), (r.current = { height: l, width: c }));
        }, [t, e]);
    return (useRefResizeObserver(s, n), reactExports.useEffect(() => (n(), onResize(n)), [n]), s);
}
function throttle(e, t, s, r) {
    let n,
        o = !1,
        a = 0;
    function i() {
        n && clearTimeout(n);
    }
    function u(...u) {
        const l = this,
            c = Date.now() - a;
        function d() {
            ((a = Date.now()), s.apply(l, u));
        }
        o ||
            (r && !n && d(),
            i(),
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
        'boolean' != typeof t && ((r = s), (s = t), (t = void 0)),
        (u.cancel = function () {
            (i(), (o = !0));
        }),
        u
    );
}
function debounce(e, t, s) {
    return void 0 === s ? throttle(e, t, !1) : throttle(e, s, !1 !== t);
}
function useDebounce(e, t, s) {
    const r = reactExports.useMemo(() => debounce(s, e), t);
    return (reactExports.useEffect(() => r.cancel, [r]), r);
}
function useEmitter() {
    return reactExports.useMemo(() => {
        const e = {},
            t = (t) => (e[t] || (e[t] = new Set()), e[t]),
            s = (e, s) => {
                t(e).delete(s);
            };
        return {
            on: (e, r) => (t(e).add(r), () => s(e, r)),
            off: s,
            trigger: (e, ...s) => {
                for (const r of t(e).values()) r(...s);
            },
        };
    }, []);
}
function useEmitterSubscribe(e, t, s) {
    return reactExports.useEffect(() => {
        if (s) return e.on(t, s);
    }, [e, t, s]);
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
const useInterval = (e, t) => {
    const s = reactExports.useRef(e);
    ((s.current = e),
        reactExports.useEffect(() => {
            if (void 0 === t) return;
            const e = window.setInterval(() => {
                s.current();
            }, t);
            return () => clearInterval(e);
        }, [t]));
};
function useMount(e) {
    reactExports.useEffect(e, []);
}
function useUnmount(e) {
    reactExports.useEffect(() => e, []);
}
function useIsFirstRender() {
    const e = reactExports.useRef(!0);
    return (
        useMount(() => {
            e.current = !1;
        }),
        e.current
    );
}
const useInsideEvent = () => {
        const e = reactExports.useRef(null);
        return [
            useEvent((t) => {
                const s = e.current;
                return s && ((t.target instanceof Node && s.contains(t.target)) || s === t.target);
            }),
            e,
        ];
    },
    createApi = () => {
        const e = new Map();
        function t(t) {
            const s = e.get(t);
            if (s) return s;
            const r = new Stack();
            return (e.set(t, r), r);
        }
        function s(t, s) {
            const r = e.get(t);
            return !!r && r.remove(s);
        }
        return {
            handlers: e,
            obtain: t,
            register: function (e, r) {
                if (e === keyCodes.NONE) return constFalse;
                const n = t(e);
                return (n.includes(r) || n.push(r), () => s(e, r));
            },
            unregister: s,
            takeCurrent: function (t) {
                const s = e.get(t);
                if (!s) return;
                const r = s.peek();
                return r || void 0;
            },
        };
    },
    Context$6 = reactExports.createContext(void 0);
function useApi$2() {
    const e = reactExports.useContext(Context$6);
    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
    return e;
}
function useHandleKey(e, t, s, r) {
    const n = useEvent((e) => {
            isEventHandled$1() || (s(e), setEventHandled$1());
        }),
        o = useApi$2(),
        a = reactExports.useMemo(() => o[t].register(e, n), [o, t, e, n]);
    reactExports.useEffect(() => a, [a]);
}
function useHandleKeyup(e, t, s) {
    return useHandleKey(e, 'keyup', t);
}
function useHandleKeydown(e, t, s) {
    return useHandleKey(e, 'keydown', t);
}
function Provider$1(e) {
    const t = reactExports.useMemo(createApi, []),
        s = reactExports.useMemo(createApi, []);
    reactExports.useEffect(() => {
        function e(e) {
            const s = t.takeCurrent(e.keyCode);
            s && s(e);
        }
        function r(e) {
            const t = s.takeCurrent(e.keyCode);
            t && t(e);
        }
        return (
            window.addEventListener('keydown', e),
            window.addEventListener('keyup', r),
            () => {
                (window.removeEventListener('keydown', e), window.removeEventListener('keyup', r));
            }
        );
    }, [t, s]);
    const r = reactExports.useMemo(
        () => ({
            keydown: { register: t.register, unregister: t.unregister },
            keyup: { register: s.register, unregister: s.unregister },
        }),
        [t, s],
    );
    return jsxRuntimeExports.jsx(Context$6.Provider, { value: r, children: e.children });
}
const useLayoutReady = (e, t) => {
    reactExports.useEffect(() => {
        let t,
            s = null;
        return (
            (s = requestAnimationFrame(() => {
                s = requestAnimationFrame(() => {
                    ((s = null), (t = e()));
                });
            })),
            () => {
                ('function' == typeof t && t(), null !== s && cancelAnimationFrame(s));
            }
        );
    }, t);
};
function useRepeatCallback(e, t, s = []) {
    const r = reactExports.useRef(0),
        n = reactExports.useCallback(() => window.clearInterval(r.current), s || []);
    reactExports.useEffect(() => n, [n]);
    const o = (s ?? []).concat([t]);
    return [
        reactExports.useCallback((s) => {
            ((r.current = window.setInterval(() => e(s, !0), t)), e(s, !1));
        }, o),
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
        const s = () => {
            (t(), (t = createLayoutReadyInEffect(e)));
        };
        return (
            window.addEventListener('resize', s),
            () => {
                (t(), window.removeEventListener('resize', s));
            }
        );
    }, t);
}
const useResizeState = (e, t) => {
        const [s, r] = reactExports.useState(e);
        return (
            reactExports.useLayoutEffect(() => {
                const t = () => r(e);
                return (t(), window.addEventListener('resize', t), () => window.removeEventListener('resize', t));
            }, t),
            s
        );
    },
    useRefResizeObserver = (e, t, s = !0) => {
        const r = useEvent((e) => {
            const s = e[0];
            s && t(s);
        });
        reactExports.useEffect(() => {
            if (!e.current || !s) return;
            const t = new ResizeObserver((e) => r(e));
            return (
                t.observe(e.current),
                () => {
                    t.disconnect();
                }
            );
        }, [r, s, e]);
    },
    useScaleState$1 = () => {
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
                                (t(), (e.current = NO_RAF_ID));
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
function useThrottle(e, t, s) {
    const r = reactExports.useMemo(() => throttle(s, e), t);
    return (reactExports.useEffect(() => r.cancel, [r]), r);
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
                run: (t, s) => {
                    (window.clearTimeout(e.current),
                        (e.current = window.setTimeout(() => {
                            ((e.current = NO_TIMEOUT_ID), t());
                        }, s)));
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
    const s = reactExports.useRef(0),
        r = reactExports.useRef(0),
        n = reactExports.useRef(noop);
    return (
        reactExports.useEffect(
            () => () => {
                window.clearTimeout(s.current);
            },
            [],
        ),
        reactExports.useMemo(() => {
            if (e <= 0) return { call: (e) => e(), cancel: noop };
            return {
                call: function (o) {
                    n.current = o;
                    const a = Date.now();
                    a - r.current < e ||
                        (t && (n.current(), (n.current = noop)),
                        (r.current = a),
                        (s.current = window.setTimeout(() => {
                            (n.current(), (s.current = 0));
                        }, e)));
                },
                cancel: function () {
                    (window.clearTimeout(s.current), (s.current = 0));
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
    const { type: t, tick: s, limit: r } = e,
        n = e.autostart ?? !1,
        o = e.start ?? zero,
        [a, i] = reactExports.useState({ current: o, running: n }),
        u = reactExports.useRef(0);
    reactExports.useEffect(
        () => (
            (u.current = window.setInterval(() => {
                a.running
                    ? i((e) => {
                          const n = 'countdown' === t ? subtract(e.current, s) : add(e.current, s),
                              o = { ...e, current: n };
                          return (
                              isDuration(r) &&
                                  ('countdown' === t
                                      ? lt(subtract(n, s), r) && ((o.current = r), (o.running = !1))
                                      : gt(add(n, s), r) && ((o.current = r), (o.running = !1))),
                              o
                          );
                      })
                    : window.clearInterval(u.current);
            }, toMillis(s))),
            () => {
                window.clearInterval(u.current);
            }
        ),
        [r, s, a.running, t],
    );
    const l = reactExports.useMemo(
        () => ({
            start: () => i((e) => ({ ...e, isRunning: !0 })),
            stop: () => i((e) => ({ ...e, isRunning: !1 })),
            isRunning: () => a.running,
        }),
        [a.running],
    );
    return [a.current, l];
}
const parameters = ['top', 'left', 'width', 'height', 'bottom', 'right', 'x', 'y'];
function isEqual(e, t) {
    return parameters.every((s) => e[s] === t[s]);
}
const initialSize = { top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 };
function watchResizes(e, t) {
    let s = 0;
    const r = e.map(() => initialSize);
    function n() {
        let o = !1;
        for (let t = 0; t < e.length; t++) {
            const s = e[t],
                n = r[t],
                a = s.getBoundingClientRect();
            isEqual(a, n) || ((r[t] = a), (o = !0));
        }
        (o && t(r), (s = requestAnimationFrame(n)));
    }
    return {
        start() {
            n();
        },
        stop() {
            cancelAnimationFrame(s);
        },
    };
}
const useRem = (e, t) => useResizeState(() => remToPx$1(e), t),
    directions$2 = { left: 0, right: 1, top: 2, bottom: 3 };
function useEnvPopover({
    resId: e = 0,
    triggerPaddings: t,
    contentId: s,
    decoratorId: r,
    direction: n = 'top',
    args: o,
}) {
    const [{ hide: a }, i] = reactExports.useMemo(() => {
        function a(a) {
            const i = getViewGlobalPosition$1('px'),
                { x: u, y: l, width: c, height: d } = a.getBoundingClientRect(),
                _ = remToPx$1(Math.trunc((null == t ? void 0 : t.x) ?? 2)),
                m = remToPx$1(Math.trunc((null == t ? void 0 : t.y) ?? 2)),
                p = {
                    x: pxToRem$1(u + i.x - _),
                    y: pxToRem$1(l + i.y - m),
                    width: pxToRem$1(c + _),
                    height: pxToRem$1(d + m),
                };
            sendEvent$1.popover.open({
                boundingBox: p,
                targetID: e,
                contentID: s,
                decoratorID: r,
                args: o,
                direction: directions$2[n],
            });
        }
        function i() {
            sendEvent$1.popover.close();
        }
        function u(e) {
            windowShown.popover() ? i() : a(e);
        }
        return [
            { hide: i, show: a, toggle: u },
            {
                onClick: (e) => {
                    u(e.currentTarget);
                },
                hide: i,
            },
        ];
    }, [o, s, r, n, e, null == t ? void 0 : t.x, null == t ? void 0 : t.y]);
    return (reactExports.useEffect(() => a, [a]), i);
}
function useSpecialPopover(e, t, s) {
    return useEnvPopover(
        reactExports.useMemo(
            () => ({
                ...s,
                contentId: resources.resolve('aliases').read((e) => e.common.popOver.Backport('resId')),
                decoratorId: resources
                    .resolve('views')
                    .read((e) => e.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId')),
                args: { popoverId: e, popoverArgs: void 0, ...(null == s ? void 0 : s.args) },
            }),
            [t, e, s],
        ),
    );
}
function useTooltip({ resId: e = 0, contentId: t, decoratorId: s, disabled: r, args: n, showDelay: o = 400 }) {
    const a = useTimeout(),
        i = reactExports.useRef({ display: !1, resId: e }),
        [{ hide: u, getCurrentState: l }, c] = reactExports.useMemo(() => {
            function u() {
                r || ((i.current.display = !0), sendEvent$1.tooltip.open(e, t, s, n));
            }
            function l() {
                (a.clear(), sendEvent$1.tooltip.hide(e, t, s), (i.current.display = !1));
            }
            return [
                { hide: l, show: u, getCurrentState: () => i.current },
                {
                    onMouseEnter: () => {
                        a.run(u, o);
                    },
                    onMouseLeave: l,
                    onClick: l,
                },
            ];
        }, [n, t, s, r, e, o, a]);
    return (
        useUnmount(() => {
            const e = l().resId;
            l().display && void 0 !== e && ids().includes(e) && u();
        }),
        c
    );
}
function useSimpleTooltip({ alert: e, body: t, header: s, note: r, hasHtmlContent: n }) {
    return useTooltip(
        reactExports.useMemo(() => {
            const o = resources.resolve('views');
            return {
                contentId: o.read((e) =>
                    n
                        ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                        : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                ),
                decoratorId: o.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
                args: { body: t, header: s, note: r, alert: e },
            };
        }, [e, t, s, r, n]),
    );
}
function useBackdropTooltip(e) {
    const t = resources.resolve('views');
    return useTooltip(
        reactExports.useMemo(
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
const NO_ARGS = [];
function useSpecialTooltip(e, t = NO_ARGS, s) {
    return useTooltip(
        reactExports.useMemo(
            () => ({
                ...s,
                disabled: 'string' != typeof e || (null == s ? void 0 : s.disabled),
                contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Backport('resId')),
                args: { tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == s ? void 0 : s.args) },
            }),
            [t, e, s],
        ),
    );
}
function useWulfTooltip(e, t, s) {
    return useTooltip(
        reactExports.useMemo(
            () => ({
                ...s,
                disabled: 'string' != typeof e || (null == s ? void 0 : s.disabled),
                contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Wulf('resId')),
                args: { tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == s ? void 0 : s.args) },
            }),
            [t, e, s],
        ),
    );
}
function useParamTooltip(e, t, s) {
    return useTooltip(
        reactExports.useMemo(
            () => ({
                ...s,
                disabled: null == s ? void 0 : s.disabled,
                contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Param('resId')),
                args: { type: e, params: JSON.stringify(t), resId: t.resId },
            }),
            [t, e, s],
        ),
    );
}
const ROMAN_FORBIDDEN_LANGUAGE_CODES$1 = ['ko', 'no'];
function useRomanForbidden() {
    const e = resources.resolve('strings');
    return ROMAN_FORBIDDEN_LANGUAGE_CODES$1.includes(e.readOrEmpty('settings.LANGUAGE_CODE'));
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
function createTargetOverrides(e, t) {
    return Object.entries(e).reduce(
        (e, [t, s]) => (
            (e[t] = (e) => {
                var r;
                e && e.target in s ? play$1.sound(s[e.target]) : null == (r = soundConfig[t]) || r.call(soundConfig, e);
            }),
            e
        ),
        {},
    );
}
function createMultipleTargetOverrides(e, t) {
    return createTargetOverrides(
        e.reduce((e, t) => {
            for (const [s, r] of Object.entries(t))
                if (e[s])
                    for (const [t, n] of Object.entries(r))
                        (t in e[s] &&
                            console.warn(
                                `sounds-provider: Target "${t}" present in multiple override configs and will be overridden. This warning probably means you are doing something wrong.`,
                            ),
                            (e[s][t] = n));
                else e[s] = r;
            return e;
        }, {}),
    );
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
const Context$5 = reactExports.createContext(null);
function SoundsProvider({ severity: e = 'warn', overrides: t, silent: s = !1, children: r }) {
    const n = reactExports.useMemo(() => ({ ...soundConfig, ...t }), [t]),
        o = reactExports.useMemo(
            () => ({
                play: function (t, r) {
                    if (s) return;
                    const o = n[t];
                    o ? o(r) : logBySeverity(`There is no sound for event: ${t}`, e);
                },
                settings: { plays: n, severity: e, silent: s },
            }),
            [n, e, s],
        );
    return jsxRuntimeExports.jsx(Context$5.Provider, { value: o, children: r });
}
function useSounds() {
    const e = reactExports.useContext(Context$5);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
function useSoundsOptional() {
    return reactExports.useContext(Context$5);
}
const RIGHT_KEY_CODE = 2;
function isRightClick(e) {
    return e.button === RIGHT_KEY_CODE;
}
function useContextMenu({ resId: e = 0, contentId: t, decoratorId: s, args: r, disabled: n, soundTarget: o }) {
    const a = useSounds(),
        [{ hide: i }, u] = reactExports.useMemo(() => {
            function i() {
                n || sendEvent$1.contextMenu.open(e, t, s, r);
            }
            return [
                {
                    hide: function () {
                        sendEvent$1.contextMenu.hide(e, t, s);
                    },
                    show: i,
                },
                {
                    onMouseDown: (e) => {
                        isRightClick(e) &&
                            (a.play('show-context-menu', {
                                target: o ?? 'react-toolkit:use_context_menu',
                                original: e,
                            }),
                            i());
                    },
                },
            ];
        }, [r, t, s, e, n, a, o]);
    return (reactExports.useEffect(() => i, [i]), u);
}
function useSpecialContextMenu(e, t, s) {
    return useContextMenu(
        reactExports.useMemo(
            () => ({
                ...s,
                contentId: resources.resolve('aliases').read((e) => e.common.contextMenu.Backport('resId')),
                disabled: null == s ? void 0 : s.disabled,
                args: { menuId: e, menuArgs: JSON.stringify(t), ...(null == s ? void 0 : s.args) },
            }),
            [t, e, s],
        ),
    );
}
function useClickOutside(e, t = !0) {
    const s = reactExports.useRef(null);
    return (
        reactExports.useEffect(() => {
            if (!t) return;
            const r = (t) => {
                s.current && !s.current.contains(t.target) && e();
            };
            return (document.addEventListener('mousedown', r), () => document.removeEventListener('mousedown', r));
        }, [e, t]),
        s
    );
}
const nonConvertingTypes = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    primitives$1 = new Set(['number', 'string', 'boolean', 'bigint']),
    bindingsForbidden = new Set(['Dict']);
function cloneModel(e, { shallow: t = !0, depth: s = 0, maxDepth: r = 32 } = {}) {
    var n, o;
    const a = e,
        i = typeof e;
    if (s > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (nonConvertingTypes.has(i)) return a;
    if (null === a) return a;
    const u = { depth: s + 1, maxDepth: r };
    if (Array.isArray(a)) return a.map((e) => cloneModel(e, u));
    if ('object' === i) {
        const r = (null == (n = a.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, u));
        if ('CoherentArrayProxy' === r) return e.map((e) => cloneModel(e.value, u));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === s) {
                const e = {};
                for (const t in a) {
                    const s = a[t];
                    primitives$1.has(typeof s) && (e[t] = s);
                }
                return e;
            }
            {
                const e = {};
                for (const t in a) {
                    const s = a[t],
                        r = (null == (o = null == a ? void 0 : a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(r) || (e[t] = cloneModel(s, u));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(a)) i[e] = cloneModel(a[e], u);
        return i;
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
        const s = {},
            r = e.keys();
        for (let n = 0; n < r.length; n++) {
            const t = r[n];
            s[t] = observable.box(this.takeItem(e, t), MOBX_OPTIONS);
        }
        ((this._keys = observable.set(new Set(r))), (this._data = observable.box(s, MOBX_OPTIONS)));
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
        const s = this._data.get();
        for (let r = 0; r < t.length; r++) {
            const n = t[r],
                o = this.takeItem(e, n);
            n in s
                ? null === o
                    ? (delete s[n], this._keys.delete(n), this.set(s))
                    : s[n].set(o)
                : null !== o && ((s[n] = observable.box(o, MOBX_OPTIONS)), this._keys.add(n), this.set(s));
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
        for (const s of this.keys.values()) t.push(e(s));
        return t;
    }
    map(e) {
        const t = [],
            s = this._data.get();
        for (const r of this.keys.values()) t.push(e(s[r].get(), r));
        return t;
    }
    reduce(e, t) {
        let s = t;
        const r = this._data.get();
        for (const n of this.keys.values()) s = e(s, r[n].get(), n);
        return s;
    }
    takeItem(e, t) {
        const s = e.get(t);
        return this.options.cloneItem ? cloneModel(s, CLONE_OPTIONS) : s;
    }
    untrackedData() {
        return untracked(() => this._data.get());
    }
}
const mockContext = reactExports.createContext({ mode: 'real' }),
    useMockContext = () => reactExports.useContext(mockContext);
function createSimpleGetter(e) {
    return (t, s) => {
        const r = resolvePath(t, s);
        return r ? readByPath(r, e) : e;
    };
}
const DEFAULT_BOX_CONFIG = { equals: constFalse, deep: !1 };
function createObservableModel(e, t, s) {
    const r = [];
    e.events.subscribersNotified.on(
        action(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const n = (n, o, a = DEFAULT_BOX_CONFIG) => {
            const i = observable.box(n(s(o)), a);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(n(e))), o), i);
        },
        o = (n, o) => {
            const a = new DLDict(s(n), o);
            return ('real' === t && e.subscribe((e, t) => r.push(() => a.update(e, t)), n), a);
        },
        a = (n, o) => {
            const a = observable.box(s(n) ?? o, DEFAULT_BOX_CONFIG);
            return ('real' === t && e.subscribe((e) => r.push(() => a.set(e)), n), a);
        };
    return {
        dict: o,
        dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => n(cloneModel, e),
        array: a,
        object: a,
        transform: n,
        primitives: (n, o) => {
            const a = s(o);
            if (Array.isArray(n)) {
                const s = n.reduce((e, t) => ((e[t] = observable.box(a[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                n.forEach((t) => {
                                    s[t].set(e[t]);
                                }),
                            );
                        }, o),
                    s
                );
            }
            {
                const s = n,
                    i = Object.entries(s),
                    u = i.reduce((e, [t, s]) => ((e[s] = observable.box(a[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                i.forEach(([t, s]) => {
                                    u[s].set(e[t]);
                                }),
                            );
                        }, o),
                    u
                );
            }
        },
    };
}
const initializeModelWithContext =
        (e = 'DataLayerProvider') =>
        (t, s, r) => {
            const n = reactExports.createContext(null);
            function o(o) {
                var a;
                const { mode: i, options: u, children: l, mocks: c } = o,
                    d = useMockContext(),
                    _ = i ?? d.mode,
                    m = c ?? d.mocks,
                    p = reactExports.useRef([]),
                    x = null == (a = null == r ? void 0 : r.useRequires) ? void 0 : a.call(r),
                    f = useEvent((n, a, i) => {
                        var u;
                        const l = 'real' !== n && i ? createMockInstance(i.getter, a) : create(a, { name: e }),
                            c = (e) => ('mocks' === n ? (null == i ? void 0 : i.getter(e, a)) : l.readByPath(e)),
                            d = (e) => p.current.push(e),
                            _ = 'initial' in o && {
                                initial: null == (u = null == r ? void 0 : r.initial) ? void 0 : u.call(r, o.initial),
                            },
                            m = t({
                                ..._,
                                mode: n,
                                readByPath: c,
                                requires: x,
                                externalModel: l,
                                observableModel: createObservableModel(l, n, c),
                                cleanup: d,
                            }),
                            f = { ..._, mode: n, model: m, externalModel: l, cleanup: d, requires: x },
                            E = 'mocks' === n && (null == i ? void 0 : i.controls) ? i.controls(f) : {};
                        return {
                            model: m,
                            controls: { ...(null == s ? void 0 : s(f)), ...E },
                            externalModel: l,
                            mode: n,
                        };
                    }),
                    E = reactExports.useRef(!1),
                    [h, b] = reactExports.useState(_);
                reactExports.useEffect(() => {
                    b(_);
                }, [_]);
                const [g, y] = reactExports.useState(() => f(h, u, m));
                return (
                    reactExports.useEffect(() => {
                        E.current ? y(f(h, u, m)) : (E.current = !0);
                    }, [
                        f,
                        m,
                        h,
                        null == u ? void 0 : u.context,
                        null == u ? void 0 : u.initializer,
                        null == u ? void 0 : u.getRoot,
                        null == u ? void 0 : u.rootId,
                    ]),
                    reactExports.useEffect(
                        () => () => {
                            (g.externalModel.dispose(), p.current.forEach((e) => e()));
                        },
                        [g],
                    ),
                    jsxRuntimeExports.jsx(n.Provider, { value: g, children: l })
                );
            }
            return (
                (o.displayName = e),
                [
                    o,
                    function () {
                        const e = reactExports.useContext(n);
                        if (!e) throw new Error(`hook useModel must be used within a ${o.displayName}.`);
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
    const s = reactExports.useRef(null);
    return (
        reactExports.useEffect(() => {
            const e = s.current;
            if (null !== e)
                return events$2.onHitTest((t) => {
                    const s = e.getBoundingClientRect();
                    return s.left <= t.x && t.x <= s.right && s.top <= t.y && t.y <= s.bottom;
                });
        }, []),
        jsxRuntimeExports.jsx('div', { ...e, ref: assignRefs([t, s]) })
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
            children: this.items.reduceRight((e, [t, s], r) => reactExports.createElement(t, { ...s, key: r }, e), e),
        });
    }
}
function injectShowModel() {
    const e = (t = window.model, { depth: s = 16, convertArrays: r = !0 } = {}) => {
        var n;
        if (s < 0)
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
                const o = { depth: s - 1, convertArrays: r },
                    a = (null == (n = t.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
                switch (!0) {
                    case a.includes('CoherentArrayProxy'):
                        return [...t.values()].map((t) => e(o.convertArrays ? t.value : t, o));
                    case 'Dict' === a:
                        return [...t.entries()].reduce((t, [s, r]) => ((t[s] = e(r, o)), t), { $$type: 'Dict' });
                    case 'UNKNOWN' === a:
                        return 'UNKNOWN_TYPE';
                    case a.includes('ViewModel'):
                    default: {
                        const s = {};
                        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (s[r] = e(t[r], o));
                        return s;
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
            for (const s of window.subViews.ids()) {
                const r = window.subViews.get(s);
                t[s] = {
                    id: s,
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
async function runView(e, { root: t = document.getElementById('root'), withMedia: s = !0, fullScreen: r = !1 } = {}) {
    var n;
    injectShowModel();
    const o = s ? MediaWrapper : React.Fragment,
        a = (null == (n = null == window ? void 0 : window.engine) ? void 0 : n.whenReady) ?? Promise.resolve();
    (await a,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client
            .createRoot(t)
            .render(jsxRuntimeExports.jsx(o, { children: jsxRuntimeExports.jsx(Provider$1, { children: e }) })),
        r && (initExternalPaddings$1(t), enableFullScreenModeSupported$1()));
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
const undef = () => {};
function withResolvePath(e) {
    const t = e;
    return reactExports.forwardRef(function (e, s) {
        const r = useAdaptive(e, e.adaptive),
            { path: n, ...o } = r,
            a = r.images ?? resources.resolve('images'),
            i = { ...o, ref: s };
        {
            const e = n ? a.readOr(n, undef, 'warn') : void 0;
            return e ? jsxRuntimeExports.jsx(t, { ...i, src: e }) : jsxRuntimeExports.jsx(t, { ...i, unknown: !0 });
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
                    repeat: s,
                    fit: r,
                    position: n,
                    width: o,
                    src: a,
                    height: i,
                    unselectable: u,
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
                repeat: s,
                fit: r,
                position: n,
                width: o,
                height: a,
                unknownStyle: i,
                unknown: u,
                unselectable: l,
                ...c
            } = e;
            return jsxRuntimeExports.jsx('div', {
                ...c,
                ref: t,
                style: {
                    backgroundImage: `url(${e.src})`,
                    backgroundRepeat: s ?? 'no-repeat',
                    backgroundSize: r ?? 'contain',
                    backgroundPosition: n ?? 'center center',
                    width: 'number' == typeof o ? `${o}rem` : o,
                    height: 'number' == typeof a ? `${a}rem` : a,
                    ...c.style,
                },
            });
        }),
    );
function Atlas(e) {
    const t = e.config.frames[e.icon];
    if (!t) return (console.error(`Error in Atlas: Frame for icon "${e.icon}" not found in path "${e.path}"`), null);
    const { icon: s, width: r = `${t.w}px`, height: n = `${t.h}px`, ...o } = e;
    return jsxRuntimeExports.jsx(Image$1, {
        fit: `${e.config.meta.size.w}px ${e.config.meta.size.h}px`,
        position: `${-t.x}px ${-t.y}px`,
        width: r,
        height: n,
        ...o,
    });
}
function defineStyledComponent(e, t, s) {
    var r;
    const n =
            'object' == typeof t && 'cva' in t
                ? null == (r = t.cva)
                    ? void 0
                    : r.variants
                : null == s
                  ? void 0
                  : s.variants,
        o = n ? Object.keys(n) : [];
    if ('object' == typeof t) {
        const s = t,
            r = cva(s.className, s.cva),
            n = s.element,
            a = reactExports.forwardRef(function (e, t) {
                return reactExports.createElement(n, {
                    ...('function' == typeof n ? e : cleanProps(o, e)),
                    ref: t,
                    className: r(e),
                });
            });
        return ((a.displayName = e), s.cva && (a.cva = s.cva), a);
    }
    const a = cva(t, s),
        i = reactExports.forwardRef(function (t, s) {
            return jsxRuntimeExports.jsx('div', { 'data-name': e, ...cleanProps(o, t), ref: s, className: a(t) });
        });
    return ((i.displayName = e), s && (i.cva = s), i);
}
function cleanProps(e, t) {
    if (0 === e.length) return t;
    const s = { ...t };
    for (const r of e) delete s[r];
    return s;
}
withResolvePath(
    reactExports.forwardRef(function (e, t) {
        const {
            width: s,
            height: r,
            src: n,
            unselectable: o,
            unknown: a,
            unknownStyle: i = defaultUnknownStyle,
            ...u
        } = e;
        return e.unknown
            ? jsxRuntimeExports.jsx('div', { ...u, style: { width: e.width, height: e.height, ...i } })
            : jsxRuntimeExports.jsx('img', { ...u, ref: t, src: n, width: s, height: r });
    }),
);
const sizes$i = { small: 'small', medium: 'medium' },
    NodeTypes = { Text: 1, Tag: 2, Var: 3 };
function parseArguments(e) {
    const t = [];
    let s = '',
        r = !1,
        n = !1,
        o = '';
    for (let a = 0; a < e.length; a++) {
        const i = e[a];
        ("'" !== i && '"' !== i) || n || r
            ? i === o && n
                ? ((n = !1), (s += i))
                : '(' !== i || n
                  ? ')' === i && r && !n
                      ? ((r = !1), (s += i))
                      : ' ' !== i || r || n
                        ? (s += i)
                        : s && (t.push(s), (s = ''))
                  : ((r = !0), (s += i))
            : ((n = !0), (o = i), (s += i));
    }
    return (s && t.push(s), t);
}
function parse(e, t) {
    const s = [],
        r = [];
    let n = '',
        o = !1,
        a = '',
        i = 0;
    for (let u = 0; u < e.length; u++) {
        const l = e[u];
        if (l === t.start[0] && e.slice(u, u + t.start.length) === t.start) {
            if (n) {
                if (r.length > 0) {
                    r[r.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
                } else s.push({ type: NodeTypes.Text, value: n });
                n = '';
            }
            ((o = !0), (u += t.start.length - 1));
        } else if (l === t.end[0] && e.slice(u, u + t.end.length) === t.end) {
            ((o = !1), (u += t.end.length - 1));
            const e = a.trim();
            if (e.startsWith('@')) {
                const t = e.slice(1).trim(),
                    n = { type: NodeTypes.Tag, attrs: t.split('|'), instanceId: ++i, children: [] };
                if (r.length > 0) {
                    r[r.length - 1].node.children.push(n);
                } else s.push(n);
                r.push({ node: n, startIndex: s.length });
            } else if ('/' === e) r.length > 0 && r.pop();
            else {
                const t = { type: NodeTypes.Var, instanceId: ++i, name: e };
                if (r.length > 0) {
                    r[r.length - 1].node.children.push(t);
                } else s.push(t);
            }
            a = '';
        } else o ? (a += l) : (n += l);
    }
    if (n)
        if (r.length) {
            r[r.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
        } else s.push({ type: NodeTypes.Text, value: n });
    return s;
}
const COLORS =
        'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
    base$S = 'FormatText_db904f12',
    base__fullSize = 'FormatText_base__fullSize_a514958e',
    styles$11 = { COLORS: COLORS, base: base$S, base__fullSize: base__fullSize },
    legacyColors = new Set((null == (_a = styles$11.COLORS) ? void 0 : _a.split(', ')) ?? []);
let keyId = 0;
function takeKey() {
    return ++keyId;
}
function split$1(e) {
    if (Array.isArray(e)) return e.map(split$1);
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
            style: t.reduce((s, r) => {
                if (Array.isArray(r)) {
                    const [e, t] = r;
                    return ((s[e] = t), s);
                }
                return (console.warn(`Invalid argument ${r} in ${e}: ${t}`), s);
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
    const s = takeKey();
    return legacyColors.has(String(t))
        ? jsxRuntimeExports.jsx('span', { className: `FormatText_colorLegacy__${t}`, children: e }, s)
        : jsxRuntimeExports.jsx('span', { style: { color: `#${t}` }, children: e }, s);
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
function applyFunction(e, t, s, r) {
    const n = s.map((t) => {
            if ('string' != typeof t) return t;
            const s = t.trim();
            if (s.startsWith('(') && s.endsWith(')')) {
                const [t, ...n] = s.slice(1, -1).split(' ');
                return t ? applyFunction(e, t, n, r) : e;
            }
            return s.startsWith("'") && s.endsWith("'") ? s.slice(1, -1) : s;
        }),
        o = r[t];
    return o ? o(e, ...n) : (console.error(`Function ${t} is not registered`), e);
}
function applyFunctions(e, t, s) {
    return e.reduce((e, t) => {
        const [r, ...n] = parseArguments(t.trim());
        return r ? applyFunction(e, r, n, s) : e;
    }, t);
}
function isEnd(e) {
    return !((e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z') || (e >= '0' && e <= '9') || '_' === e);
}
function resolveAttrParams(e, t) {
    for (let s = 0; s < e.length; s++) {
        if ('$' === e[s]) {
            let r = s + 1;
            for (; r < e.length && !isEnd(e[r]); ) r++;
            const n = e.slice(s + 1, r),
                o = t[n];
            if (o) return resolveAttrParams(e.replace(`$${n}`, String(o)), t);
        }
    }
    return e;
}
function resolveAttrsParams(e, t) {
    const s = [];
    for (let r = 0; r < e.length; r++) s[r] = resolveAttrParams(e[r], t);
    return s;
}
const primitives = ['number', 'string', 'undefined'];
function render(e, t, s = {}, r = !0) {
    r && (keyId = 0);
    const n = [];
    function o(e) {
        if (primitives.includes(typeof e)) {
            const t = n.at(-1);
            if ('string' == typeof t) return void (n[n.length - 1] = t + e);
        }
        n.push(e);
    }
    for (const a of e)
        if (a.type === NodeTypes.Text) o(a.value);
        else if (a.type === NodeTypes.Var)
            null === s[a.name] || primitives.includes(typeof s[a.name])
                ? o(s[a.name] ?? `{{${a.name}}}`)
                : n.push(
                      jsxRuntimeExports.jsx(
                          reactExports.Fragment,
                          { children: s[a.name] },
                          `var-${a.name}-${a.instanceId}`,
                      ),
                  );
        else if (a.type === NodeTypes.Tag) {
            const e = render(a.children, t, s, !1),
                r = applyFunctions(resolveAttrsParams(a.attrs, s), e, t);
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
                text: s,
                params: r,
                upgradeLegacy: n,
                fullSize: o,
                inline: a,
                formatters: i,
                split: u,
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
            _ = reactExports.useMemo(() => parse(u ? `{{@ split}}${c}{{/}}` : c, t), [t, c, u]),
            m = reactExports.useMemo(() => render(_, d, e.params), [_, d, e.params]),
            p = cx(styles$11.base, o && styles$11.base__fullSize, l.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              jsxRuntimeExports.jsx('p', {
                  ...l,
                  className: p,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: m,
              }))
            : jsxRuntimeExports.jsx('span', { ...l, className: p, children: m });
    });
function FormatString({ path: e, ...t }) {
    return jsxRuntimeExports.jsx(FormatText, { text: resources.resolve('strings').readOrEmpty(e), ...t });
}
function FormatPluralString({ path: e, count: t, ...s }) {
    return jsxRuntimeExports.jsx(FormatText, { text: resources.resolve('strings').pluralOrEmpty(e, t), ...s });
}
const base$R = 'Value_880359b5',
    base__small$8 = 'Value_base__small_533886b2',
    base__text = 'Value_base__text_3c091067',
    base__medium$6 = 'Value_base__medium_c1f8595d',
    value$1 = 'Value_29975a5b',
    value__small = 'Value_value__small_f3df7ae5',
    value__medium = 'Value_value__medium_62a482c',
    styles$10 = {
        base: base$R,
        base__small: base__small$8,
        base__text: base__text,
        base__medium: base__medium$6,
        value: value$1,
        value__small: value__small,
        value__medium: value__medium,
    },
    intl$1 = resources.resolve('intl'),
    DEFAULT_MAX_VALUE = 99;
function formatNumber(e, t) {
    return e > t
        ? jsxRuntimeExports.jsx(FormatString, { path: 'common.valuePlus', params: { value: t } })
        : intl$1.formatNumber('integral', e);
}
function getValue(e, t) {
    return 'number' == typeof e ? formatNumber(e, t) : e;
}
function Value({ classNames: e, size: t = sizes$i.small, value: s, maxValue: r = DEFAULT_MAX_VALUE }) {
    return jsxRuntimeExports.jsx('div', {
        className: cx(
            styles$10.base,
            styles$10[`base__${t}`],
            'string' == typeof s && styles$10.base__text,
            null == e ? void 0 : e.valueContainer,
        ),
        children: jsxRuntimeExports.jsx('div', {
            className: cx(styles$10.value, styles$10[`value__${t}`], null == e ? void 0 : e.value),
            children: getValue(s, r),
        }),
    });
}
const base$Q = 'Bubble_df22310d',
    base__hidden$1 = 'Bubble_base__hidden_1700314d',
    styles$$ = { base: base$Q, base__hidden: base__hidden$1 },
    Bubble = {
        Root: defineStyledComponent('Bubble', styles$$.base, { variants: { hidden: { true: styles$$.base__hidden } } }),
        Value: Value,
    },
    Context$4 = reactExports.createContext(void 0);
function useHorizontalScroll() {
    const e = reactExports.useContext(Context$4);
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
        setScrollPosition: s,
        getDirection: r,
        getWrapperSize: n,
        triggerMouseMoveOnUpdate: o = !1,
    }) => {
        const a = (e, s) => {
            const [r, n] = t(e);
            return clamp(r, n, s);
        };
        return (i = {}) => {
            const { settings: u = defaultSettings } = i,
                [l, c] = reactExports.useState(!1),
                d = reactExports.useRef(null),
                _ = reactExports.useRef(null),
                m = reactExports.useRef({ wrapper: 0, container: 0 }),
                p = useEmitter(),
                x = useThrottle(
                    () => {
                        forceTriggerMouseMove$1();
                    },
                    [],
                    150,
                ),
                [f, E] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = d.current;
                        t && (s(t, e), p.trigger('change', e));
                    },
                    onRest: (e) => p.trigger('rest', e),
                    onStart: (e) => p.trigger('start', e),
                    onPause: (e) => p.trigger('pause', e),
                })),
                h = reactExports.useCallback(
                    (e, t, s) => {
                        const r = f.scrollPosition.get(),
                            n = (f.scrollPosition.goal ?? 0) - r;
                        return a(e, t * s + n + r);
                    },
                    [f.scrollPosition],
                ),
                b = reactExports.useCallback(
                    function (e, { immediate: t = !1, reset: s = !0 } = {}) {
                        const r = d.current;
                        r &&
                            E.start({
                                scrollPosition: a(r, e),
                                immediate: t,
                                reset: s,
                                config: u.animationConfig,
                                from: { scrollPosition: a(r, f.scrollPosition.get()) },
                                onChange: () => {
                                    o && x();
                                },
                            });
                    },
                    [E, u.animationConfig, f.scrollPosition, x],
                ),
                g = reactExports.useCallback(
                    function (e) {
                        const t = d.current,
                            s = _.current;
                        if (!t || !s) return;
                        const r = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return n(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(s, u.step),
                            o = h(t, e, r);
                        b(o);
                    },
                    [b, h, u.step],
                ),
                y = reactExports.useCallback(
                    function (e) {
                        l ||
                            (0 !== e.deltaY && g(r(e)),
                            d.current && p.trigger('mouseWheel', e, f.scrollPosition, t(d.current)));
                    },
                    [f.scrollPosition, g, p, l],
                ),
                v = useSkipFrame(),
                C = reactExports.useCallback(
                    function () {
                        return v.run(() => {
                            const e = d.current;
                            e && (b(a(e, f.scrollPosition.goal), { immediate: !0 }), p.trigger('resizeHandled'));
                        });
                    },
                    [v, b, f.scrollPosition.goal, p],
                );
            useRefResizeObserver(_, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const s = n(t);
                m.current.wrapper !== s && C();
            });
            const $ = useEvent(function () {
                const t = d.current;
                if (!t) return;
                const s = e(t),
                    r = _.current ? n(_.current) : 0;
                if (m.current.container !== s || m.current.wrapper !== r) {
                    const e = a(t, f.scrollPosition.goal);
                    (e !== f.scrollPosition.goal && b(e, { immediate: !0 }),
                        (m.current.container = s),
                        (m.current.wrapper = r),
                        p.trigger('recalculateContent'));
                }
            });
            reactExports.useEffect(
                () => (
                    window.addEventListener('resize', C),
                    () => {
                        window.removeEventListener('resize', C);
                    }
                ),
                [C],
            );
            return reactExports.useMemo(
                () => ({
                    getWrapperSize: () => (_.current ? n(_.current) : void 0),
                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                    getBounds: () =>
                        d.current ? t(d.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: u.step.clampedArrowStepTimeout,
                    settings: u,
                    clampPosition: a,
                    handleMouseWheel: y,
                    applyScroll: b,
                    applyStepTo: g,
                    contentRef: d,
                    wrapperRef: _,
                    scrollPosition: E,
                    animationScroll: f,
                    recalculateContent: $,
                    disabled: l,
                    setDisabled: c,
                    events: { on: p.on, off: p.off },
                }),
                [u, y, b, g, E, f, $, l, c, p.on, p.off],
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
            e.style.transform = `translateX(-${Math.trunc(t.value.scrollPosition ?? 0)}px)`;
        },
        getDirection: (e) => (e.deltaY > 1 ? Direction.Next : Direction.Prev),
        triggerMouseMoveOnUpdate: !0,
    },
    useApi$1 = createApiHook(DEFAULT_HORIZONTAL_API_CONFIG),
    scrollOrientations = { horizontal: 'horizontal', vertical: 'vertical' },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT = 100,
    MOUSE_BUTTON_LEFT = 0,
    background$8 = 'Thumb_background_7f3dd6ac',
    border$8 = 'Thumb_border_5749138b',
    innerBorder = 'Thumb_innerBorder_42bafd18',
    icon$d = 'Thumb_icon_dca8bf26',
    base$P = 'Thumb_6ff3e706',
    base__vertical$1 = 'Thumb_base__vertical_55a67c91',
    base__horizontal = 'Thumb_base__horizontal_27ca7ace',
    base__active$2 = 'Thumb_base__active_830942bb',
    styles$_ = {
        background: background$8,
        border: border$8,
        innerBorder: innerBorder,
        icon: icon$d,
        base: base$P,
        base__vertical: base__vertical$1,
        base__horizontal: base__horizontal,
        base__active: base__active$2,
    },
    BOUNCING_OFFSET = 2,
    MIN_THUMB_SIZE = 13,
    FORWARD_DISABLED = 'forwardDisabled',
    BACKWARD_DISABLED = 'backwardDisabled';
function updateDisabledStates(e, t) {
    if (!e.trackRef.current || !e.thumbRef.current) return;
    const s = e.trackRef.current.parentNode;
    if (s instanceof HTMLElement) {
        if (0 === t) return (s.classList.add(BACKWARD_DISABLED), void s.classList.remove(FORWARD_DISABLED));
        if (e.isBoundThumb(t)) return (s.classList.remove(BACKWARD_DISABLED), void s.classList.add(FORWARD_DISABLED));
        (s.classList.remove(BACKWARD_DISABLED), s.classList.remove(FORWARD_DISABLED));
    }
}
function Thumb$1(e) {
    const t = reactExports.useRef(null),
        [s, r] = reactExports.useState(!1),
        n = useEvent(function () {
            const s = t.current,
                r = e.trackRef.current,
                n = e.api.getWrapperSize(),
                o = e.api.getContainerSize();
            if (!(n && o && s && r)) return;
            const a = Math.min(1, n / o),
                i = 'horizontal' === e.direction ? 'width' : 'height';
            return ((s.style[i] = `${e.calculateSize(r, a)}px`), (s.style.display = 'flex'), a);
        }),
        [o, a] = useSpring(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: easings.easeInCubic,
            config: { duration: 200 },
        }));
    reactExports.useEffect(() => {
        s || e.dragging
            ? a.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(styles$_.base__active);
                  },
              })
            : a.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(styles$_.base__active);
                  },
              });
    }, [s, e.dragging, e.styles.closed, e.styles.opened, a]);
    const i = useEvent(function () {
            var s;
            const r = e.trackRef.current,
                n = t.current,
                o = e.railBeforeRef.current,
                i = e.railAfterRef.current,
                u = e.api.getWrapperSize(),
                l = e.api.getContainerSize();
            if (!(u && r && n && o && i && l)) return;
            const c = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, u / l),
                _ = clamp(0, 1, c / (l - u)),
                m = e.calculateSize(r, d),
                p = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - m) * _ || 0,
                x = Math.round((2 * _ - 1) * BOUNCING_OFFSET);
            (n.style.setProperty('--thumbOffset', `${p}px`),
                null == (s = e.onUpdate) || s.call(e, { thumbSize: m, thumbOffset: p, newBouncingCorrection: x }));
            const f = 0 === p || e.isBoundThumb(p) ? 0 : x;
            return (
                a.start({
                    to: { '--bouncingCorrection': `${f}px` },
                    ...(0 === f ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                p
            );
        }),
        u = useSkipFrame(),
        l = useEvent(function () {
            n();
            const t = i();
            'number' == typeof t && updateDisabledStates(e, t);
        });
    reactExports.useEffect(() => u.run(l));
    const { api: c } = e;
    return (
        reactExports.useEffect(() => {
            function e() {
                u.run(l);
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
        }, [c, u, l]),
        jsxRuntimeExports.jsxs(animated.div, {
            ref: assignRefs([t, e.thumbRef]),
            className: cx(styles$_.base, styles$_[`base__${e.direction}`], e.className),
            style: o,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$_.background }),
                jsxRuntimeExports.jsx('div', { className: styles$_.border }),
                jsxRuntimeExports.jsx('div', { className: styles$_.innerBorder }),
                jsxRuntimeExports.jsx('div', { className: styles$_.icon }),
            ],
        })
    );
}
const initBarDraggingState = { pending: !1, offset: 0 };
function useBarDragging(e, t, s, r, n) {
    const [o, a] = reactExports.useState(initBarDraggingState),
        i = useEvent(t),
        u = reactExports.useCallback(
            (t) => {
                (a(t), e.current && i({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [i, e],
        );
    return (
        reactExports.useEffect(() => {
            if (!o.pending) return;
            const t = mouse.move(function ([t]) {
                    const a = s.contentRef.current;
                    if (!a) return;
                    const u = r.current,
                        l = e.current;
                    if (!a || !u || !l) return;
                    const c = n(t, o, { parent: u, thumb: l }),
                        d = c * (s.getContainerSize() ?? 0);
                    (s.scrollPosition.start({
                        scrollPosition: s.clampPosition(a, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: s.animationScroll.scrollPosition.get() },
                    }),
                        i({ type: 'dragging', dragElement: l, elementOffset: c, contentOffset: d }));
                }),
                a = mouse.up(() => {
                    u(initBarDraggingState);
                });
            return () => {
                (t(), a());
            };
        }, [s, o.offset, o.pending, i, u, e, r, o, n]),
        u
    );
}
const DISABLE_CLASS = 'disable',
    ACTIVE_CLASS = 'scroll-active';
function useUpdateStatesBar({ api: e, baseRef: t }) {
    const s = useSkipFrame(),
        r = useEvent(function () {
            const s = e.getWrapperSize(),
                r = e.getContainerSize();
            if (null === t.current || void 0 === r || void 0 === s) return;
            1 === Math.min(1, s / r || 1)
                ? t.current.classList.remove(ACTIVE_CLASS)
                : t.current.classList.add(ACTIVE_CLASS);
        });
    (reactExports.useEffect(() => s.run(r)),
        reactExports.useEffect(() => {
            function t() {
                s.run(r);
            }
            return (
                e.events.on('recalculateContent', t),
                e.events.on('resizeHandled', t),
                () => {
                    (e.events.off('recalculateContent', t), e.events.off('resizeHandled', t));
                }
            );
        }, [e, s, r]));
}
function getElementCoordinates(e, t) {
    const s = e.getBoundingClientRect(),
        r = t === scrollOrientations.horizontal ? s.x : s.y;
    return { start: r, end: t === scrollOrientations.horizontal ? r + s.width : r + s.height };
}
function getCoordinate(e, t, s, r, n, o) {
    return {
        occurredEvent: o === scrollOrientations.horizontal ? e.screenX : e.screenY,
        bar: getElementCoordinates(t, o),
        thumb: getElementCoordinates(s, o),
        backButton: getElementCoordinates(r, o),
        forwardButton: getElementCoordinates(n, o),
    };
}
function useBarHandlers(e, t, s, r, n, o, a) {
    const i = useSounds(),
        u = n.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT,
        [l, c] = useRepeatCallback((e) => n.applyStepTo(e), u, [n]);
    reactExports.useEffect(
        () => (document.addEventListener('mouseup', c, !0), () => document.removeEventListener('mouseup', c, !0)),
        [c],
    );
    const d = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (i.play('click', { target: 'Scroll:Back', original: e }), l(Direction.Next));
            },
            [l, i],
        ),
        _ = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (i.play('click', { target: 'Scroll:Forward', original: e }), l(Direction.Prev));
            },
            [l, i],
        ),
        m = reactExports.useCallback(
            (u) => {
                const l = e.current,
                    c = t.current,
                    m = s.current,
                    p = r.current;
                if (!(l && c && m && p && u.button === MOUSE_BUTTON_LEFT)) return;
                const x = getCoordinate(u, l, c, m, p, a),
                    f = x.thumb.start <= x.occurredEvent && x.occurredEvent <= x.thumb.end,
                    E =
                        (x.backButton.start <= x.occurredEvent && x.occurredEvent <= x.backButton.end) ||
                        (x.forwardButton.start <= x.occurredEvent && x.occurredEvent <= x.forwardButton.end);
                if (f) o({ pending: !0, offset: x.occurredEvent - x.thumb.start });
                else if (E) {
                    ((x.occurredEvent > x.thumb.start ? Direction.Prev : Direction.Next) === Direction.Next ? d : _)(u);
                } else {
                    const e = x.occurredEvent - x.bar.start,
                        t = x.thumb.end - x.thumb.start,
                        s = x.bar.end - x.bar.start,
                        r = n.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const o = ((e - t / 2) / s) * r;
                    n.applyScroll(o);
                }
                i.play('click', { target: 'Scroll:' + (f ? 'thumb' : E ? 'button' : ''), original: u });
            },
            [e, t, s, r, i, a, o, d, _, n],
        ),
        p = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    i.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [i],
        );
    return reactExports.useMemo(
        () => ({
            handleMouseBackDown: d,
            handleMouseEnter: p,
            handleMouseDownTrack: m,
            handleMouseForwardDown: _,
            handleMouseForwardUp: c,
            handleMouseBackUp: c,
        }),
        [d, p, m, _, c],
    );
}
const rail$1 = 'HorizontalBar_rail_37858d8f',
    base$O = 'HorizontalBar_4df27ac3',
    track$1 = 'HorizontalBar_track_649dc296',
    rail__left = 'HorizontalBar_rail__left_1a906b4e',
    rail__right = 'HorizontalBar_rail__right_cd24364e',
    button__right = 'HorizontalBar_button__right_e8f0aa2d',
    button__left = 'HorizontalBar_button__left_da330e13',
    button$3 = 'HorizontalBar_button_cbabd91',
    styles$Z = {
        rail: rail$1,
        base: base$O,
        track: track$1,
        rail__left: rail__left,
        rail__right: rail__right,
        button__right: button__right,
        button__left: button__left,
        button: button$3,
    },
    THUMB_TO_RAIL_OFFSET$1 = 5,
    THUMB_STYLES$1 = { closed: { height: '3rem', top: '4rem' }, opened: { height: '11rem', top: '0rem' } },
    calculateThumbSize$1 = (e, t) => Math.max(remToPx$1(MIN_THUMB_SIZE), e.offsetWidth * t),
    Bar$1 = reactExports.memo(function ({ classNames: e = {}, onDrag: t = noop }) {
        const s = reactExports.useRef(null),
            r = reactExports.useRef(null),
            n = reactExports.useRef(null),
            o = reactExports.useRef(null),
            a = reactExports.useRef(null),
            i = reactExports.useRef(null),
            u = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useHorizontalScroll();
        useUpdateStatesBar({ baseRef: s, api: d });
        const _ = useEvent(
                (e, t, { parent: s }) => (e.screenX - t.offset - s.getBoundingClientRect().x) / s.offsetWidth,
            ),
            m = useEvent((e) => e - (o.current.offsetWidth - a.current.offsetWidth) >= -0.5),
            p = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            x = useBarDragging(a, p, d, o, _),
            f = useEvent(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: s }) => {
                const r = o.current,
                    n = i.current,
                    a = u.current;
                if (!r || !n || !a) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET$1);
                ((n.style.width = `${t - l + s}px`), (a.style.width = r.offsetWidth - e - t - l - s + 'px'));
            }),
            { handleMouseEnter: E, handleMouseDownTrack: h } = useBarHandlers(
                s,
                a,
                n,
                r,
                d,
                x,
                scrollOrientations.horizontal,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$Z.base, e.base),
            ref: s,
            onWheel: d.handleMouseWheel,
            onMouseDown: h,
            onMouseEnter: E,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: r,
                    className: cx(styles$Z.button, styles$Z.button__left, e.leftButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: o,
                    className: cx(styles$Z.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$Z.rail, styles$Z.rail__left, e.leftRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb$1, {
                            dragging: l,
                            api: d,
                            calculateOffset: _,
                            calculateSize: calculateThumbSize$1,
                            direction: 'horizontal',
                            isBoundThumb: m,
                            railAfterRef: i,
                            railBeforeRef: u,
                            styles: THUMB_STYLES$1,
                            onUpdate: f,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: u,
                            className: cx(styles$Z.rail, styles$Z.rail__right, e.rightRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$Z.button, styles$Z.button__right, e.rightButton),
                }),
            ],
        });
    }),
    base$N = 'HorizontalScroll_5b201d2b',
    wrapper$2 = 'HorizontalScroll_wrapper_abec8dee',
    defaultScrollArea = 'HorizontalScroll_defaultScrollArea_a5c0f45',
    styles$Y = { base: base$N, wrapper: wrapper$2, defaultScrollArea: defaultScrollArea },
    DefaultScroll$1 = ({
        children: e,
        className: t,
        barClassNames: s,
        areaClassName: r,
        classNames: n,
        scrollClassName: o,
        onDrag: a,
    }) => {
        const { api: i } = useHorizontalScroll(),
            u = reactExports.useMemo(() => {
                const e = s || {};
                return { ...e, base: cx(styles$Y.base, e.base) };
            }, [s]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$Y.defaultScroll, t),
            onWheel: i.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$Y.defaultScrollArea, r),
                    children: jsxRuntimeExports.jsx(Area$1, { className: o, classNames: n, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$1, { onDrag: a, classNames: u }),
            ],
        });
    };
function Area$1({ className: e, classNames: t, children: s }) {
    const { api: r } = useHorizontalScroll();
    return (
        reactExports.useEffect(() => createLayoutReadyInEffect(() => createLayoutReadyInEffect(r.recalculateContent))),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$Y.base, e),
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$Y.wrapper, null == t ? void 0 : t.wrapper),
                onWheel: r.handleMouseWheel,
                ref: r.wrapperRef,
                children: jsxRuntimeExports.jsx('div', {
                    className: cx(styles$Y.content, null == t ? void 0 : t.content),
                    ref: r.contentRef,
                    children: s,
                }),
            }),
        })
    );
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
function useScrollByDragElements(e, t, s, r) {
    const {
            contentRef: n,
            wrapperRef: o,
            scrollPosition: a,
            clampPosition: i,
            animationScroll: u,
            events: l,
            disabled: c,
        } = e,
        [d, _] = reactExports.useState(INITIAL_DRAGGING_STATE),
        [m, p] = reactExports.useState(0),
        { gapBeforeStart: x } = r ?? {},
        f = useSkipFrame(),
        E = useEvent(() => {
            f.run(() => {
                const t = e.contentRef.current,
                    s = e.getWrapperSize(),
                    r = e.getContainerSize();
                t && s && r && !c && (t.style.cursor = r <= s ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
            });
        });
    return (
        reactExports.useEffect(() => {
            E();
        }, [d.type, E]),
        useResize(() => {
            E();
        }, [E]),
        reactExports.useEffect(() => {
            if ('pending' !== d.type) return;
            const e = n.current,
                s = o.current;
            if (null === e || null === s) return;
            const r = mouse.move(([e]) => {
                    const s = getScreenCoordinate(e, t);
                    (void 0 === x || Math.abs(m - s) > x) &&
                        _({ type: 'dragging', positionFrom: s, previousScrollPosition: u.scrollPosition.get() });
                }),
                a = mouse.up(() => _({ type: 'scrollComplete' }));
            return () => {
                (r(), a());
            };
        }, [u.scrollPosition, n, m, t, d, x, o]),
        reactExports.useEffect(() => {
            if ('dragging' !== d.type) return;
            const e = mouse.move(([e, r]) => {
                const l = n.current,
                    c = o.current;
                if ('outside' === r) return void _({ type: 'scrollComplete' });
                const m = getEventCoordinate(e, t);
                if (null === l || null === c || ('inside' === r && m < 0)) return;
                const p = c.offsetLeft,
                    x = 'inside' === r ? m : m - p,
                    f = d.positionFrom - x,
                    E = d.previousScrollPosition + f;
                a.start({ scrollPosition: i(l, E), from: { scrollPosition: u.scrollPosition.get() }, ...s });
            });
            const r = mouse.up(function () {
                _({ type: 'scrollComplete' });
            });
            return () => {
                (e(), r());
            };
        }, [u.scrollPosition, i, n, d, a, o, s, t]),
        reactExports.useEffect(() => {
            if ('scrollComplete' !== d.type) return;
            const e = () => {
                _(INITIAL_DRAGGING_STATE);
            };
            return (e(), l.on('rest', e), () => l.off('rest', e));
        }, [u.scrollPosition, d.type, l]),
        reactExports.useEffect(() => {
            if (c) return;
            const e = n.current;
            if (!e) return;
            const s = (e) => {
                if (e.button !== mouseButtons.left) return;
                const s = getScreenCoordinate(e, t);
                (p(s),
                    _(
                        void 0 === x || x <= 0
                            ? { type: 'dragging', positionFrom: s, previousScrollPosition: u.scrollPosition.get() }
                            : { type: 'pending' },
                    ));
            };
            return (e.addEventListener('mousedown', s), () => e.removeEventListener('mousedown', s));
        }, [u.scrollPosition, n, c, t, x]),
        d
    );
}
function Base$q({ settings: e, children: t }) {
    const s = useApi$1({ settings: e }),
        r = reactExports.useMemo(() => ({ api: s }), [s]);
    return jsxRuntimeExports.jsx(Context$4.Provider, { value: r, children: t });
}
const Context$3 = reactExports.createContext(void 0);
function useVerticalScroll() {
    const e = reactExports.useContext(Context$3);
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
    base$M = 'VerticalBar_7187fa00',
    track = 'VerticalBar_track_ff482708',
    rail__top = 'VerticalBar_rail__top_ee531f43',
    rail__bottom = 'VerticalBar_rail__bottom_3eaa33b1',
    button__bottom = 'VerticalBar_button__bottom_6880f123',
    button__top = 'VerticalBar_button__top_b8383775',
    button$2 = 'VerticalBar_button_7b0e4aca',
    styles$X = {
        rail: rail,
        base: base$M,
        track: track,
        rail__top: rail__top,
        rail__bottom: rail__bottom,
        button__bottom: button__bottom,
        button__top: button__top,
        button: button$2,
    },
    THUMB_TO_RAIL_OFFSET = 5,
    THUMB_STYLES = { closed: { width: '3rem', left: '3rem' }, opened: { width: '9rem', left: '0rem' } },
    calculateThumbSize = (e, t) => Math.max(remToPx$1(MIN_THUMB_SIZE), e.offsetHeight * t),
    Bar = reactExports.memo(function ({ classNames: e = {}, onDrag: t = noop }) {
        const s = reactExports.useRef(null),
            r = reactExports.useRef(null),
            n = reactExports.useRef(null),
            o = reactExports.useRef(null),
            a = reactExports.useRef(null),
            i = reactExports.useRef(null),
            u = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useVerticalScroll();
        useUpdateStatesBar({ baseRef: s, api: d });
        const _ = useEvent((e) => e - (o.current.offsetHeight - a.current.offsetHeight) >= -0.5),
            m = useEvent(
                (e, t, { parent: s }) => (e.screenY - t.offset - s.getBoundingClientRect().y) / s.offsetHeight,
            ),
            p = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            x = useBarDragging(a, p, d, o, m),
            f = useEvent(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: s }) => {
                const r = o.current,
                    n = i.current,
                    a = u.current;
                if (!r || !n || !a) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET);
                ((n.style.height = `${t - l + s}px`), (a.style.height = r.offsetHeight - e - t - l - s + 'px'));
            }),
            { handleMouseEnter: E, handleMouseDownTrack: h } = useBarHandlers(
                s,
                a,
                r,
                n,
                d,
                x,
                scrollOrientations.vertical,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$X.base, e.base),
            ref: s,
            onWheel: d.handleMouseWheel,
            onMouseDown: h,
            onMouseEnter: E,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: r,
                    className: cx(styles$X.button, styles$X.button__top, e.topButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: o,
                    className: cx(styles$X.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$X.rail, styles$X.rail__top, e.topRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb$1, {
                            dragging: l,
                            api: d,
                            calculateOffset: m,
                            calculateSize: calculateThumbSize,
                            direction: 'vertical',
                            isBoundThumb: _,
                            railAfterRef: i,
                            railBeforeRef: u,
                            styles: THUMB_STYLES,
                            onUpdate: f,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: u,
                            className: cx(styles$X.rail, styles$X.rail__bottom, e.bottomRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$X.button, styles$X.button__bottom, e.bottomButton),
                }),
            ],
        });
    }),
    content$c = 'VerticalScroll_content_62cb6120',
    defaultScroll = 'VerticalScroll_defaultScroll_c69fa70e',
    area = 'VerticalScroll_area_a3c0086a',
    styles$W = { content: content$c, defaultScroll: defaultScroll, area: area },
    DefaultScroll = ({
        children: e,
        className: t,
        barClassNames: s,
        areaClassName: r,
        scrollClassName: n,
        scrollClassNames: o,
        onDrag: a,
    }) => {
        const { api: i } = useVerticalScroll(),
            u = reactExports.useMemo(() => {
                const e = s || {};
                return { ...e, base: cx(styles$W.base, e.base) };
            }, [s]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$W.defaultScroll, t),
            onWheel: i.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$W.area, r),
                    children: jsxRuntimeExports.jsx(Area, { className: n, classNames: o, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar, { onDrag: a, classNames: u }),
            ],
        });
    },
    Area = ({ className: e, classNames: t, children: s, ...r }) => {
        const { api: n } = useVerticalScroll();
        return (
            reactExports.useEffect(() =>
                createLayoutReadyInEffect(() => createLayoutReadyInEffect(n.recalculateContent)),
            ),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$W.base, null == t ? void 0 : t.wrapper, e),
                ref: n.wrapperRef,
                onWheel: n.handleMouseWheel,
                children: jsxRuntimeExports.jsx('div', {
                    ...r,
                    className: cx(styles$W.content, null == t ? void 0 : t.content),
                    ref: n.contentRef,
                    children: s,
                }),
            })
        );
    };
function Base$p({ children: e }) {
    const t = useApi(),
        s = reactExports.useMemo(() => ({ api: t }), [t]);
    return jsxRuntimeExports.jsx(Context$3.Provider, { value: s, children: e });
}
Area.Default = DefaultScroll;
const IGNORE_DEFAULT = [2, 2];
function useScrollBounding(e, [t, s] = IGNORE_DEFAULT) {
    const [r, n] = reactExports.useState(!0),
        [o, a] = reactExports.useState(!0);
    return (
        reactExports.useEffect(() => {
            function r() {
                const r = e.animationScroll.scrollPosition.get(),
                    [o, i] = e.getBounds(),
                    u = r >= i - s;
                (n(r <= o + t), a(u));
            }
            return new DisposeBuilder()
                .add(createLayoutReadyInEffect(r))
                .add(e.events.on('resizeHandled', r))
                .add(e.events.on('recalculateContent', r))
                .add(e.events.on('change', r)).dispose;
        }, [e, t, s]),
        [r, o]
    );
}
const themes$1 = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    sizes$h = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
    base$L = 'HeadlessButton_df8536fc',
    styles$V = { base: base$L },
    HeadlessButtonBase = defineStyledComponent('Button', { element: 'button', className: styles$V.base }),
    HeadlessButton = reactExports.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: s, soundTarget: r, disabled: n = !1, silent: o = !1, ...a },
        i,
    ) {
        const u = useSounds();
        return jsxRuntimeExports.jsx(HeadlessButtonBase, {
            ...a,
            ref: i,
            onMouseEnter: function (e) {
                (n || o || u.play('mouse-enter', { target: r || 'Button', original: e }), null == s || s(e));
            },
            onClick: function (e) {
                n || (o || u.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    background$7 = 'Button_background_98ebcfb8',
    border$7 = 'Button_border_7e6390d7',
    overlay$4 = 'Button_overlay_174632c8',
    base$K = 'Button_70871946',
    base__enabled$1 = 'Button_base__enabled_96634d40',
    base__disabled$6 = 'Button_base__disabled_b713e04a',
    content$b = 'Button_content_298de63f',
    content__fontAligned$1 = 'Button_content__fontAligned_66115778',
    styles$U = {
        background: background$7,
        border: border$7,
        overlay: overlay$4,
        base: base$K,
        base__enabled: base__enabled$1,
        base__disabled: base__disabled$6,
        'base__size-extraSmall': 'Button_base__size-extraSmall_d0cdb5ed',
        'base__size-small': 'Button_base__size-small_fc7095a4',
        'base__size-medium': 'Button_base__size-medium_814d61f0',
        'base__size-large': 'Button_base__size-large_83da852e',
        'base__theme-primary': 'Button_base__theme-primary_8ba55469',
        'base__theme-secondary': 'Button_base__theme-secondary_3fa4afc',
        content: content$b,
        content__fontAligned: content__fontAligned$1,
    },
    Button$1 = reactExports.forwardRef(function (
        {
            children: e,
            size: t = sizes$h.large,
            theme: s = themes$1.primary,
            disabled: r = !1,
            silent: n = !1,
            autoAlignContent: o = !0,
            classNames: a,
            className: i,
            ...u
        },
        l,
    ) {
        return jsxRuntimeExports.jsxs(HeadlessButton, {
            ...u,
            ref: l,
            silent: n,
            disabled: r,
            className: cx(
                styles$U.base,
                styles$U[`base__size-${t}`],
                styles$U[`base__theme-${s}`],
                r ? styles$U.base__disabled : styles$U.base__enabled,
                i,
                null == a ? void 0 : a.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = u.onClick) || t.call(u, e);
            },
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$U.background, null == a ? void 0 : a.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$U.border, null == a ? void 0 : a.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$U.overlay, null == a ? void 0 : a.overlay) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$U.content, o && styles$U.content__fontAligned, null == a ? void 0 : a.content),
                    children: e,
                }),
            ],
        });
    });
function NotLoaded() {
    return null;
}
function LazyModel(e) {
    if (useLazyModel(e.id)) return e.children;
    return (e.fallback || NotLoaded)();
}
function useLazyModel(e) {
    const [t, s] = reactExports.useState(!1);
    return (
        reactExports.useEffect(
            () => (
                s(ids().includes(e)),
                subscribe(e, (e) => {
                    s('added' === e.type);
                })
            ),
            [e],
        ),
        t
    );
}
((Button$1.themes = themes$1), (Button$1.sizes = sizes$h));
const LIGHT_TANK = 'lightTank',
    MEDIUM_TANK = 'mediumTank',
    HEAVY_TANK = 'heavyTank',
    SPG = 'SPG',
    AT_SPG = 'AT-SPG',
    types$4 = { lightTank: LIGHT_TANK, mediumTank: MEDIUM_TANK, heavyTank: HEAVY_TANK, SPG: SPG, 'AT-SPG': AT_SPG },
    typeValues = Object.values(types$4),
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
    roles$1 = {
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
        roles$1.spg,
        roles$1.assault,
        roles$1.break,
        roles$1.universal,
        roles$1.support,
        roles$1.assault,
        roles$1.support,
        roles$1.universal,
        roles$1.sniper,
        roles$1.assault,
        roles$1.universal,
        roles$1.sniper,
        roles$1.support,
        roles$1.universal,
        roles$1.wheeled,
    ],
    getRoleByKey = (e) => mapRoleByKey[e] ?? WITHOUT_ROLE,
    atSpgRoles = [roles$1.assault, roles$1.universal, roles$1.sniper, roles$1.support],
    heavyTankRoles = [roles$1.assault, roles$1.break, roles$1.universal, roles$1.support],
    mediumTankRoles = [roles$1.assault, roles$1.support, roles$1.universal, roles$1.sniper],
    lightTankRoles = [roles$1.universal, roles$1.wheeled],
    vehicleState = { UNSUITABLE_TO_QUEUE: 'unsuitableToQueue' },
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
function ModelRouterProvider({ children: e, prefix: t = '', context: s, getRoot: r, initializer: n, rootId: o }) {
    const a = reactExports.useRef([]),
        i = reactExports.useRef(null),
        u = reactExports.useMemo(() => create({ context: s, getRoot: r, initializer: n, rootId: o }), [s, r, n, o]),
        l = reactExports.useCallback(
            (e) => {
                const t = u.subscribe(e);
                return () => u.unsubscribe(t);
            },
            [u],
        ),
        c = reactExports.useCallback(() => {
            const e = u.readByPath(),
                s = { location: removeLastSlash(t + e.route), params: e.params };
            return i.current && comparer.shallow(i.current, s) ? i.current : ((i.current = s), s);
        }, [u, t]),
        d = reactExports.useSyncExternalStore(l, c);
    reactExports.useEffect(() => u.dispose, [u]);
    const _ = reactExports.useMemo(() => {
        const e = [...a.current, d];
        return ((a.current = e), { ...d, history: e });
    }, [d]);
    define_process_env_default.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', _);
    const m = reactExports.useMemo(() => {
            const e = u.createCallback(
                    (e, t) => (
                        define_process_env_default.PUBLIC_ROUTER_DEBUG && console.log('➡️ Going to', e, t),
                        { route: e, ...(Boolean(t) && { params: JSON.stringify(t) }) }
                    ),
                    'navigateTo',
                ),
                t = u.createCallbackNoArgs('navigateBack');
            return {
                push: e,
                replace: e,
                goBack: define_process_env_default.PUBLIC_ROUTER_DEBUG
                    ? () => {
                          (console.log('🗺️ Route back'), t());
                      }
                    : t,
            };
        }, [u]),
        p = reactExports.useMemo(() => ({ ..._, ...m }), [m, _]);
    return jsxRuntimeExports.jsx(RouterContext.Provider, { value: p, children: e });
}
const DEFAULT_NAME_KEYFRAME = 'Point',
    THRESHOLD = 0.02;
function createLoop(e) {
    let t = 0;
    return [
        function s() {
            (e(), (t = requestAnimationFrame(s)));
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
            autoplay: s = !1,
            style: r,
            loop: n = !1,
            isPrebufferKeyframes: o,
            keyframesNameConfig: a,
            onClick: i,
            ...u
        },
        l,
    ) {
        const c = l,
            d = reactExports.useRef(null);
        return (
            useMount(() => {
                let e = !1;
                return events$2.onDisplayChanged((t, s) => {
                    const r = d.current;
                    r &&
                        (s === displayStatus$1.hidden
                            ? ((e = r.paused), r.pause())
                            : e || s !== displayStatus$1.shown || r.play());
                });
            }),
            useMount(() => {
                let e = !1;
                return onMinimize((t) => {
                    const s = d.current;
                    s && (t ? ((e = s.paused), s.pause()) : e || s.play());
                });
            }),
            reactExports.useEffect(
                () =>
                    createLayoutReadyInEffect(() => {
                        const e = d.current;
                        if (!c || !e || !o) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps ? e.cohGetKeyframeTimestamps() : [];
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  (null == e ? void 0 : e.cohPrebufferKeyframe) && e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [o, c],
            ),
            reactExports.useEffect(() => {
                if (c && d.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: noop },
                        t = () => {
                            let t = 0;
                            const [s, r] = createLoop(() => {
                                if (d.current) {
                                    const { currentTime: s, duration: r } = d.current;
                                    if (
                                        (t !== s &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: s, duration: r })),
                                            (t = s)),
                                        d.current.paused || !c || !o)
                                    )
                                        return;
                                    const n = d.current.cohGetKeyframeTimestamps
                                        ? d.current.cohGetKeyframeTimestamps()
                                        : [];
                                    n.forEach((t, r) => {
                                        void 0 !== n[r] &&
                                            s > n[r] - THRESHOLD &&
                                            s < n[r] &&
                                            e.changeKeyframeHandlers.forEach((e) => {
                                                const s = Object.keys(a ?? {})[r];
                                                return e({
                                                    time: t,
                                                    name: `${a ? s : `${DEFAULT_NAME_KEYFRAME}_${r}`}`,
                                                });
                                            });
                                    });
                                }
                            });
                            return (s(), r);
                        };
                    e.changeTimeLoop = t();
                    const s = (t) => (
                            e.changeTimeHandlers.push(t),
                            () => {
                                const { changeTimeHandlers: s } = e,
                                    r = s.indexOf(t);
                                r < 0
                                    ? console.warn("Can't unsubscribe changeTimeHandler, this reference was not found")
                                    : s.splice(r, 1);
                            }
                        ),
                        r = (t) => (
                            e.changeKeyframeHandlers.push(t),
                            () => {
                                const { changeKeyframeHandlers: s } = e,
                                    r = s.indexOf(t);
                                r < 0
                                    ? console.warn(
                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                      )
                                    : s.splice(r, 1);
                            }
                        ),
                        n = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.currentTime;
                        },
                        i = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.duration;
                        },
                        u = (e) => {
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
                        m = () => {
                            (_(), u(0));
                        },
                        p = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps)
                                ? d.current.cohGetKeyframeTimestamps()
                                : [];
                        },
                        x = (e) => {
                            (u(e), l());
                        },
                        f = (e) => {
                            (u(e), _());
                        },
                        E = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        h = (e, t) => {
                            var s;
                            return (
                                null == (s = d.current) || s.addEventListener(e, t),
                                () => {
                                    var s;
                                    return null == (s = d.current) ? void 0 : s.removeEventListener(e, t);
                                }
                            );
                        },
                        b = (e, t) => {
                            var s;
                            return (
                                null == (s = d.current) || s.removeEventListener(e, t),
                                () => {
                                    var s;
                                    return null == (s = d.current) ? void 0 : s.removeEventListener(e, t);
                                }
                            );
                        };
                    return (
                        (c.current = {
                            on: h,
                            off: b,
                            play: l,
                            pause: _,
                            stop: m,
                            cleanup: E,
                            getCurrentTime: n,
                            getDuration: i,
                            getCachedKeyframes: p,
                            goToAndPlay: x,
                            goToAndStop: f,
                            setCurrentTime: u,
                            domRef: d.current,
                            onChangeTime: s,
                            onKeyframes: r,
                        }),
                        () => {
                            (E(), (c.current = null));
                        }
                    );
                }
            }, [a, c, o]),
            reactExports.useEffect(() => {
                d.current && s && d.current.play();
            }, [s, n]),
            useUnmount(() => {
                var e;
                null == (e = d.current) || e.pause();
            }),
            jsxRuntimeExports.jsx('video', { src: e, className: t, style: r, loop: n, ref: d, onClick: i, ...u })
        );
    }),
    Video = reactExports.memo(VideoForwarded),
    textOverlay = 'GradientText_textOverlay_2d67fbb8',
    base$J = 'GradientText_5009d812',
    styles$T = { textOverlay: textOverlay, base: base$J },
    GradientText = reactExports.forwardRef(function ({ classNames: e, children: t }, s) {
        return jsxRuntimeExports.jsxs('div', {
            ref: s,
            className: cx(styles$T.base, null == e ? void 0 : e.base),
            children: [
                jsxRuntimeExports.jsx('div', { className: null == e ? void 0 : e.text, children: t }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$T.textOverlay, null == e ? void 0 : e.textOverlay),
                    children: t,
                }),
            ],
        });
    }),
    types$3 = {
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
    currencyTypes = Object.values(types$3),
    discountTypes = { currency: 'currency', experience: 'experience' },
    sizes$g = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    imageSizes$1 = {
        [sizes$g.extraSmall]: 16,
        [sizes$g.small]: 24,
        [sizes$g.medium]: 32,
        [sizes$g.large]: 48,
        [sizes$g.extraLarge]: 80,
        [sizes$g.xxl]: 96,
    },
    upscaledImageSizes = {
        [sizes$g.extraSmall]: 32,
        [sizes$g.small]: 48,
        [sizes$g.medium]: 32,
        [sizes$g.large]: 96,
        [sizes$g.extraLarge]: 80,
        [sizes$g.xxl]: 96,
    },
    discountSizesConfig = {
        [sizes$g.extraSmall]: { width: '60rem', height: '36rem' },
        [sizes$g.small]: { width: '80rem', height: '48rem' },
        [sizes$g.medium]: { width: '80rem', height: '48rem' },
        [sizes$g.large]: { width: '106rem', height: '64rem' },
        [sizes$g.extraLarge]: { width: '140rem', height: '84rem' },
        [sizes$g.xxl]: { width: '140rem', height: '84rem' },
    },
    base$I = 'Currency_72d4be39',
    base__reverse = 'Currency_base__reverse_f12e61b0',
    base__notEnough = 'Currency_base__notEnough_9a7842f',
    base__credits = 'Currency_base__credits_7b9ae721',
    base__gold$1 = 'Currency_base__gold_d6e3cbc',
    base__freeXP = 'Currency_base__freeXP_d29d5a57',
    base__crystal = 'Currency_base__crystal_f830cb47',
    base__tankXP = 'Currency_base__tankXP_1707c68b',
    styles$S = {
        base: base$I,
        base__reverse: base__reverse,
        base__notEnough: base__notEnough,
        base__credits: base__credits,
        base__gold: base__gold$1,
        base__freeXP: base__freeXP,
        base__crystal: base__crystal,
        base__tankXP: base__tankXP,
    },
    intl = resources.resolve('intl'),
    Base$o = defineStyledComponent('Currency', styles$S.base, {
        variants: { reverse: { true: styles$S.base__reverse } },
    });
function formatCurrencyValue(e, t) {
    const s = t === types$3.gold ? 'gold' : 'integral';
    return Array.isArray(e)
        ? e.map((e) => ('number' == typeof e ? intl.formatNumber(s, e) : e))
        : 'number' == typeof e
          ? intl.formatNumber(s, e)
          : e;
}
function Currency({
    children: e,
    type: t,
    className: s,
    classNames: r,
    imagePath: n,
    size: o = sizes$g.small,
    enough: a = !0,
    ...i
}) {
    const u = imageSizes$1[o],
        l = `${t}_${u}x${u}`,
        c = upscaledImageSizes[o],
        d = `${t}_${c}x${c}`,
        _ = n || currencyTypes.includes(t),
        m = useUpscale(`library.currency.${l}`, `library.currency.${d}`);
    return jsxRuntimeExports.jsxs(Base$o, {
        ...i,
        className: cx(null == r ? void 0 : r.base, a ? styles$S[`base__${t}`] : styles$S.base__notEnough, s),
        children: [
            _ &&
                jsxRuntimeExports.jsx(Image$1, {
                    width: u,
                    height: u,
                    path: n ?? m,
                    className: null == r ? void 0 : r.icon,
                }),
            formatCurrencyValue(e, t),
        ],
    });
}
((Currency.sizes = sizes$g), (Currency.types = types$3));
const base$H = 'WithDiscount_b8b3aa7f',
    discount = 'WithDiscount_discount_f7ce1b97',
    icon$c = 'WithDiscount_icon_a6c57ca8',
    icon__extraSmall = 'WithDiscount_icon__extraSmall_97673105',
    icon__small = 'WithDiscount_icon__small_60ee455a',
    icon__medium = 'WithDiscount_icon__medium_2877fd99',
    icon__large = 'WithDiscount_icon__large_6c06eeb7',
    icon__extraLarge = 'WithDiscount_icon__extraLarge_9d22aa45',
    icon__xxl = 'WithDiscount_icon__xxl_4080bb18',
    styles$R = {
        base: base$H,
        discount: discount,
        icon: icon$c,
        icon__extraSmall: icon__extraSmall,
        icon__small: icon__small,
        icon__medium: icon__medium,
        icon__large: icon__large,
        icon__extraLarge: icon__extraLarge,
        icon__xxl: icon__xxl,
    };
function WithDiscount({
    children: e,
    imagePath: t,
    size: s = sizes$g.small,
    customImageSize: r,
    type: n,
    enabled: o = !1,
    className: a,
    classNames: i,
}) {
    const u = r ?? discountSizesConfig[s];
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$R.base, null == i ? void 0 : i.base, a),
        children: [
            e,
            o &&
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$R.discount,
                        null == i ? void 0 : i.discount,
                        n === discountTypes.experience && styles$R.discount__experience,
                    ),
                    children: jsxRuntimeExports.jsx(Image$1, {
                        width: u.width,
                        height: u.height,
                        path: t ?? `library.currency.discount_${n}_${s === sizes$g.xxl ? sizes$g.extraLarge : s}`,
                        className: cx(styles$R.icon, null == i ? void 0 : i.icon, styles$R[`icon__${s}`]),
                    }),
                }),
        ],
    });
}
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
    const { paths: s, exact: r = !1 } = t,
        n = splitPath(e);
    for (const o of s) {
        const t = splitPath(o);
        if (r && n.length !== t.length) continue;
        const s = {};
        let a = !0;
        for (let e = 0; e < t.length; e++) {
            const r = t[e],
                o = n[e];
            if (!o) {
                a = !1;
                break;
            }
            if (r.startsWith(':')) {
                s[r.slice(1)] = o;
            } else if (r !== o) {
                a = !1;
                break;
            }
        }
        if (a) {
            const a = `/${n.slice(0, t.length).join('/')}`,
                i = e === a;
            if (r && !i) continue;
            return { params: s, exact: i, path: o, url: a };
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
function Switch({ children: e, route: t, fallback: s = null }) {
    const { location: r } = useRouter();
    let n;
    return (
        reactExports.Children.forEach(e, (e) => {
            if (!reactExports.isValidElement(e)) return void console.error('Switch children must be valid elements');
            const s = t ? `${t}${e.props.path}` : e.props.path;
            if (void 0 !== n) return;
            const o = matchPath(r, { paths: [s], exact: e.props.exact });
            o && (n = { child: e, match: o });
        }),
        n ? jsxRuntimeExports.jsx(SwitchContext.Provider, { value: { match: n.match }, children: n.child }) : s
    );
}
function Route({ path: e, component: t, exact: s }) {
    const { match: r } = useSwitch();
    return jsxRuntimeExports.jsx(ErrorBoundary, {
        children: jsxRuntimeExports.jsx(t, { path: r.path, location: r.url, params: r.params, exact: s ?? !1 }),
    });
}
const base$G = 'TruncateText_dcb41d92',
    styles$Q = { base: base$G },
    TruncatedText = reactExports.forwardRef(function ({ text: e, tooltipParams: t, className: s, ...r }, n) {
        const o = useSimpleTooltip({ header: null == t ? void 0 : t.header, body: (null == t ? void 0 : t.body) || e }),
            a = reactExports.useRef(null),
            [i, u] = reactExports.useState(!1);
        const l = reactExports.useCallback(() => {
            if (a.current) {
                const { scrollWidth: e, offsetWidth: t } = a.current;
                u(e > t);
            }
        }, []);
        return (
            reactExports.useEffect(() => {
                i || o.onMouseLeave();
            }, [i, o]),
            useLayoutReady(l, [l]),
            useResizeLayoutReady(l, [l]),
            useRefResizeObserver(a, l),
            jsxRuntimeExports.jsx('div', {
                ...r,
                ref: function (e) {
                    ((a.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                className: cx(styles$Q.base, s),
                ...(i ? o : {}),
                children: e,
            })
        );
    }),
    sizes$f = { x24x24: '24x24', x32x32: '32x32', x48x48: '48x48' },
    paths$1 = {
        [sizes$f.x24x24]: 'library.gray_eye_24x24',
        [sizes$f.x32x32]: 'library.gray_eye_32x32',
        [sizes$f.x48x48]: 'library.gray_eye_48x48',
    },
    sizesConfig$4 = {
        [sizes$f.x24x24]: { width: '24rem', height: '24rem' },
        [sizes$f.x32x32]: { width: '32rem', height: '32rem' },
        [sizes$f.x48x48]: { width: '48rem', height: '48rem' },
    },
    Base$n = defineStyledComponent('PlayerInfoAnonymizer', { element: Image$1 }),
    AnonymizerIcon = reactExports.forwardRef(function (
        {
            size: e,
            path: t = paths$1[e],
            width: s = sizesConfig$4[e].width,
            height: r = sizesConfig$4[e].height,
            className: n,
            ...o
        },
        a,
    ) {
        return jsxRuntimeExports.jsx(Base$n, { ...o, ref: a, path: t, width: s, height: r, className: n });
    });
AnonymizerIcon.sizes = sizes$f;
const base$F = 'PlayerInfo_89eea88b',
    badge = 'PlayerInfo_badge_9f134a01',
    name$1 = 'PlayerInfo_name_120449f9',
    name__medium = 'PlayerInfo_name__medium_4066d463',
    name__big = 'PlayerInfo_name__big_4119f7ab',
    clanTag = 'PlayerInfo_clanTag_120449f9',
    clanTag__medium = 'PlayerInfo_clanTag__medium_4066d463',
    clanTag__big = 'PlayerInfo_clanTag__big_4119f7ab',
    stripe = 'PlayerInfo_stripe_65882a8f',
    stripe__medium = 'PlayerInfo_stripe__medium_cc0a2a19',
    stripe__big = 'PlayerInfo_stripe__big_ccbc3007',
    stripeBadge = 'PlayerInfo_stripeBadge_605bfd0a',
    styles$P = {
        base: base$F,
        badge: badge,
        name: name$1,
        name__medium: name__medium,
        name__big: name__big,
        clanTag: clanTag,
        clanTag__medium: clanTag__medium,
        clanTag__big: clanTag__big,
        stripe: stripe,
        stripe__medium: stripe__medium,
        stripe__big: stripe__big,
        stripeBadge: stripeBadge,
    },
    sizes$e = { x24x24: '24x24', x48x48: '48x48', x80x80: '80x80' },
    sizesConfig$3 = {
        [sizes$e.x24x24]: { width: '24rem', height: '24rem' },
        [sizes$e.x48x48]: { width: '48rem', height: '48rem' },
        [sizes$e.x80x80]: { width: '80rem', height: '80rem' },
    },
    Base$m = defineStyledComponent('PlayerInfoBadge', { element: Image$1 }),
    Badge = reactExports.forwardRef(function (
        {
            size: e,
            badgeId: t,
            path: s = `library.badges.c_${e}.badge_${t}`,
            width: r = sizesConfig$3[e].width,
            height: n = sizesConfig$3[e].height,
            className: o,
            ...a
        },
        i,
    ) {
        return jsxRuntimeExports.jsx(Base$m, {
            ...a,
            ref: i,
            path: s,
            width: r,
            height: n,
            className: cx(styles$P.badge, o),
        });
    });
function ClanTag({ size: e, className: t, children: s, ...r }) {
    return jsxRuntimeExports.jsx('div', {
        ...r,
        className: cx(styles$P.clanTag, e && styles$P[`clanTag__${e}`], t),
        children: s,
    });
}
Badge.sizes = sizes$e;
const sizes$d = { x64x28: '64x28', x34x16: '34x16', x26x16: '26x16', x10x10: '10x10' },
    paths = {
        [sizes$d.x10x10]: 'library.premium_igr_ico',
        [sizes$d.x26x16]: 'library.premium_igr_small',
        [sizes$d.x34x16]: 'library.premium_small',
        [sizes$d.x64x28]: 'library.premium_igr_big',
    },
    sizesConfig$2 = {
        [sizes$d.x10x10]: { width: '10rem', height: '10rem' },
        [sizes$d.x26x16]: { width: '26rem', height: '16rem' },
        [sizes$d.x34x16]: { width: '34rem', height: '16rem' },
        [sizes$d.x64x28]: { width: '64rem', height: '28rem' },
    },
    Base$l = defineStyledComponent('PlayerInfoIgr', { element: Image$1 }),
    IgrIcon = reactExports.forwardRef(function (
        {
            size: e,
            path: t = paths[e],
            width: s = sizesConfig$2[e].width,
            height: r = sizesConfig$2[e].height,
            className: n,
            ...o
        },
        a,
    ) {
        return jsxRuntimeExports.jsx(Base$l, { ...o, ref: a, path: t, width: s, height: r, className: n });
    });
function Name({ size: e, className: t, children: s }) {
    return jsxRuntimeExports.jsx('div', { className: cx(styles$P.name, e && styles$P[`name__${e}`], t), children: s });
}
IgrIcon.sizes = sizes$d;
const sizes$c = { default: 'default', regular: 'regular', medium: 'medium', big: 'big' },
    stripeFolders = {
        [sizes$c.default]: 'c_64x24',
        [sizes$c.regular]: 'c_68x28',
        [sizes$c.medium]: 'c_68x28',
        [sizes$c.big]: 'c_100x40',
    },
    badgeFolders = {
        [sizes$c.default]: 'c_24x24',
        [sizes$c.regular]: 'c_32x32',
        [sizes$c.medium]: 'c_48x48',
        [sizes$c.big]: 'c_80x80',
    },
    sizesConfig$1 = {
        [sizes$c.default]: { width: '24rem', height: '24rem', marginLeft: '-15rem' },
        [sizes$c.regular]: { width: '32rem', height: '32rem', marginLeft: '-19rem' },
        [sizes$c.medium]: { width: '48rem', height: '48rem', marginLeft: '-32rem' },
        [sizes$c.big]: { width: '80rem', height: '80rem', marginLeft: '-25rem' },
    },
    Base$k = defineStyledComponent('StripeBadgeIcon', { element: Image$1 }),
    StripeBadgeIcon = reactExports.forwardRef(function (
        {
            size: e = sizes$c.default,
            badgeId: t,
            stripeExists: s,
            path: r = `library.badges.${badgeFolders[e]}.badge_${t}`,
            width: n = sizesConfig$1[e].width,
            height: o = sizesConfig$1[e].height,
            className: a,
            ...i
        },
        u,
    ) {
        const l = sizesConfig$1[e];
        return jsxRuntimeExports.jsx(Base$k, {
            ...i,
            ref: u,
            path: r,
            width: n,
            height: o,
            style: s ? { marginLeft: l.marginLeft } : void 0,
            className: a,
        });
    }),
    sizesConfig = {
        [sizes$c.default]: { width: '64rem', height: '24rem' },
        [sizes$c.regular]: { width: '68rem', height: '24rem' },
        [sizes$c.medium]: { width: '68rem', height: '28rem' },
        [sizes$c.big]: { width: '100rem', height: '40rem' },
    },
    Base$j = defineStyledComponent('StripeIcon', { element: Image$1 }),
    StripeIcon = reactExports.forwardRef(function (
        {
            size: e = sizes$c.default,
            badgeId: t,
            stripeExists: s,
            path: r = `library.badges.strips.${stripeFolders[e]}.strip_${t}`,
            width: n = sizesConfig[e].width,
            height: o = sizesConfig[e].height,
            className: a,
            ...i
        },
        u,
    ) {
        return s
            ? jsxRuntimeExports.jsx(Base$j, {
                  ...i,
                  ref: u,
                  path: r,
                  width: n,
                  height: o,
                  className: cx(styles$P.stripeBadge, a),
              })
            : null;
    }),
    Base$i = defineStyledComponent('PlayerInfoStripe', styles$P.stripe),
    Stripe = reactExports.forwardRef(function (
        { size: e = sizes$c.default, badgeId: t, classNames: s, className: r, ...n },
        o,
    ) {
        const a = resources.resolve('images'),
            i = stripeFolders[e],
            u = a.has(`library.badges.strips.${i}.strip_${t}`);
        return jsxRuntimeExports.jsxs(Base$i, {
            ...n,
            ref: o,
            className: cx(u && styles$P[`stripe__${e}`], r),
            children: [
                jsxRuntimeExports.jsx(StripeIcon, {
                    size: e,
                    badgeId: t,
                    stripeExists: u,
                    className: null == s ? void 0 : s.stripe,
                }),
                jsxRuntimeExports.jsx(StripeBadgeIcon, {
                    size: e,
                    badgeId: t,
                    stripeExists: u,
                    className: null == s ? void 0 : s.badge,
                }),
            ],
        });
    });
Stripe.sizes = sizes$c;
const Base$h = defineStyledComponent('AccountInfo', styles$P.base),
    Wrapper = defineStyledComponent('AccountInfoWrapper', styles$P.base),
    PlayerInfo = reactExports.forwardRef((e, t) => jsxRuntimeExports.jsx(Base$h, { ref: t, ...e }));
((PlayerInfo.Name = Name),
    (PlayerInfo.ClanTag = ClanTag),
    (PlayerInfo.Badge = Badge),
    (PlayerInfo.IgrIcon = IgrIcon),
    (PlayerInfo.AnonymizerIcon = AnonymizerIcon),
    (PlayerInfo.Stripe = Stripe),
    (PlayerInfo.Wrapper = Wrapper));
const UNKNOWN_NATION = 'none',
    list = ['ussr', 'germany', 'usa', 'china', 'france', 'uk', 'japan', 'czech', 'sweden', 'poland', 'italy'],
    nationById = (e) => list[e] ?? UNKNOWN_NATION,
    formatters = Object.fromEntries(Object.entries(defaultFormatters).map(([e]) => [e, (e) => e]));
function renderString(e, t = {}) {
    const s = parse(e, defaultBrackets);
    return String(render(s, formatters, t));
}
function renderResolvedString(e, t = {}) {
    const s = resources.resolve('strings').readOrEmpty(e);
    return 0 === s.length ? s : renderString(s, t);
}
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
    styles$O = { base__x120x96: base__x120x96, base__x190x152: base__x190x152, base__x380x304: base__x380x304 },
    sizes$b = { x120x96: 'x120x96', x190x152: 'x190x152', x380x304: 'x380x304' },
    Base$g = defineStyledComponent('VehicleImage', {
        element: Image$1,
        className: styles$O.base,
        cva: {
            variants: {
                size: {
                    [sizes$b.x120x96]: styles$O.base__x120x96,
                    [sizes$b.x190x152]: styles$O.base__x190x152,
                    [sizes$b.x380x304]: styles$O.base__x380x304,
                },
            },
        },
    });
function UnknownVehicleImage({ size: e = sizes$b.x380x304, ...t }) {
    return jsxRuntimeExports.jsx(Base$g, { ...t, size: e, path: `vehicle.${e}.tank_empty` });
}
const VehicleImage = reactExports.forwardRef(function (
    { size: e = sizes$b.x380x304, name: t, width: s, height: r, className: n, ...o },
    a,
) {
    const i = resources.resolve('images'),
        u = `vehicle.${e}.${getVehicleImageKey(t)}`;
    return i.has(u)
        ? jsxRuntimeExports.jsx(Base$g, { ...o, ref: a, size: e, className: n, path: u, width: s, height: r })
        : (console.warn(`Fail to retrieve icon maps/icons/vehicle/${e}/${getVehicleImageKey(t)}`),
          jsxRuntimeExports.jsx(UnknownVehicleImage, { size: e, className: n, width: s, height: r }));
});
function useCalculateLeftTime(e) {
    const [t, s] = reactExports.useState(e);
    (reactExports.useEffect(() => {
        s(e);
    }, [e]),
        reactExports.useEffect(() => {
            if (0 === t) return;
            const e = Math.min(t, 60),
                r = setTimeout(() => {
                    s((t) => Math.max(t - e, 0));
                }, 1e3 * e);
            return () => clearTimeout(r);
        }, [t]));
    const r = seconds(t);
    return greaterThan(r, days(1))
        ? convert(r, 'days')
        : greaterThan(r, hours(1))
          ? convert(r, 'hours')
          : greaterThan(r, seconds(1))
            ? hours(1)
            : hours(0);
}
((VehicleImage.UnknownVehicleImage = UnknownVehicleImage), (VehicleImage.size = sizes$b));
const base$E = 'IconCounter_33c660e9',
    styles$N = { base: base$E };
function IconCounter({ className: e }) {
    return jsxRuntimeExports.jsx('div', { className: cx(styles$N.base, e) });
}
const base$D = 'ShortCounter_d2d7b370',
    text = 'ShortCounter_text_ecf2e742',
    count = 'ShortCounter_count_d7a74fd8',
    styles$M = { base: base$D, text: text, count: count },
    ShortCounter = reactExports.forwardRef(function ({ time: e, wins: t, battles: s, classNames: r, ...n }, o) {
        const a = resources.resolve('intl'),
            i = useCalculateLeftTime(e),
            u = reactExports.useMemo(
                () =>
                    i.value > 0
                        ? { path: `hangar.rentalCounter.count.${i.unit}`, count: Math.ceil(i.value) }
                        : s > 0
                          ? { path: 'hangar.rentalCounter.count.battles', count: s }
                          : t > 0
                            ? { path: 'hangar.rentalCounter.count.wins', count: t }
                            : null,
                [i, t, s],
            );
        if (u)
            return jsxRuntimeExports.jsxs('div', {
                ...n,
                ref: o,
                className: cx(styles$M.base, null == r ? void 0 : r.base),
                children: [
                    jsxRuntimeExports.jsx(IconCounter, { className: null == r ? void 0 : r.icon }),
                    jsxRuntimeExports.jsx(FormatPluralString, {
                        className: cx(styles$M.text, null == r ? void 0 : r.text),
                        path: u.path,
                        count: u.count,
                        params: {
                            count: jsxRuntimeExports.jsxs('span', {
                                className: styles$M.count,
                                children: [a.formatNumber('integral', u.count), ' '],
                            }),
                        },
                    }),
                ],
            });
    }),
    RentalCounter = reactExports.forwardRef(function ({ className: e, ...t }, s) {
        return jsxRuntimeExports.jsx('div', { ...t, ref: s, className: e });
    });
RentalCounter.ShortCounter = ShortCounter;
const base$C = 'VehicleLevel_3c938122',
    styles$L = { base: base$C },
    numberTypes = { arabic: 'arabic', roman: 'roman' };
function getLevelType(e, t) {
    return e || (t ? numberTypes.arabic : numberTypes.roman);
}
const VehicleLevel = reactExports.forwardRef(function ({ value: e, numberType: t, ...s }, r) {
    const n = getLevelType(t, useRomanForbidden()) === numberTypes.roman ? arabicToRoman(e) : e;
    return jsxRuntimeExports.jsx('div', {
        ...s,
        'data-name': 'VehicleLevel',
        className: cx(styles$L.base, s.className),
        ref: r,
        children: n,
    });
});
VehicleLevel.numberTypes = numberTypes;
const MIN_LEVEL = 1,
    TYPE_PRESTIGE = 'prestige',
    directions$1 = { left: 'left', right: 'right' },
    lengths = { short: 'short', medium: 'medium', long: 'long' },
    iconLength = (e) => (e < 10 ? lengths.short : e < 100 ? lengths.medium : lengths.long),
    icon$b = (e, t, s) => (t === TYPE_PRESTIGE ? TYPE_PRESTIGE : `${t}.${iconLength(e)}.c_${s}`),
    base$B = 'VehiclePrestigeLevel_a750cce',
    icon$a = 'VehiclePrestigeLevel_icon_ef024cc3',
    base__left$1 = 'VehiclePrestigeLevel_base__left_4426b46c',
    level$1 = 'VehiclePrestigeLevel_level_10f410ba',
    level__short = 'VehiclePrestigeLevel_level__short_d1939fb1',
    base__right$1 = 'VehiclePrestigeLevel_base__right_4426b46c',
    level__medium = 'VehiclePrestigeLevel_level__medium_90aed80f',
    level__long = 'VehiclePrestigeLevel_level__long_26625167',
    base__iron = 'VehiclePrestigeLevel_base__iron_4426b46c',
    base__bronze = 'VehiclePrestigeLevel_base__bronze_4426b46c',
    base__silver = 'VehiclePrestigeLevel_base__silver_4426b46c',
    base__gold = 'VehiclePrestigeLevel_base__gold_4426b46c',
    base__enamel = 'VehiclePrestigeLevel_base__enamel_4426b46c',
    styles$K = {
        base: base$B,
        icon: icon$a,
        base__left: base__left$1,
        level: level$1,
        level__short: level__short,
        base__right: base__right$1,
        level__medium: level__medium,
        level__long: level__long,
        base__iron: base__iron,
        base__bronze: base__bronze,
        base__silver: base__silver,
        base__gold: base__gold,
        base__enamel: base__enamel,
    };
function PrestigeLevel({ level: e, grade: t, type: s, direction: r, classNames: n, ...o }) {
    return e < MIN_LEVEL
        ? null
        : jsxRuntimeExports.jsxs('div', {
              ...o,
              className: cx(
                  styles$K.base,
                  styles$K[`base__${s}`],
                  styles$K[`base__${r}`],
                  o.className,
                  null == n ? void 0 : n.base,
              ),
              children: [
                  jsxRuntimeExports.jsx(Image$1, {
                      path: `prestige.tab.${icon$b(e, s, t)}`,
                      className: cx(styles$K.icon, null == n ? void 0 : n.icon),
                  }),
                  s !== TYPE_PRESTIGE &&
                      jsxRuntimeExports.jsx('div', {
                          className: cx(
                              styles$K.level,
                              styles$K[`level__${iconLength(e)}`],
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
        [`${roles$1.assault}_x16x16`]: SvgAssaultX16X16,
        [`${roles$1.break}_x16x16`]: SvgBreakX16X16,
        [`${roles$1.sniper}_x16x16`]: SvgSniperX16X16,
        [`${roles$1.support}_x16x16`]: SvgSupportX16X16,
        [`${roles$1.universal}_x16x16`]: SvgUniversalX16X16,
        [`${roles$1.wheeled}_x16x16`]: SvgWheeledX16X16,
        [`${roles$1.assault}_x24x24`]: SvgAssaultX24X24,
        [`${roles$1.break}_x24x24`]: SvgBreakX24X24,
        [`${roles$1.sniper}_x24x24`]: SvgSniperX24X24,
        [`${roles$1.support}_x24x24`]: SvgSupportX24X24,
        [`${roles$1.universal}_x24x24`]: SvgUniversalX24X24,
        [`${roles$1.wheeled}_x24x24`]: SvgWheeledX24X24,
        [`${roles$1.assault}_x32x32`]: SvgAssaultX32X32,
        [`${roles$1.break}_x32x32`]: SvgBreakX32X32,
        [`${roles$1.sniper}_x32x32`]: SvgSniperX32X32,
        [`${roles$1.support}_x32x32`]: SvgSupportX32X32,
        [`${roles$1.universal}_x32x32`]: SvgUniversalX32X32,
        [`${roles$1.wheeled}_x32x32`]: SvgWheeledX32X32,
        [`${roles$1.assault}_x48x48`]: SvgAssaultX48X48,
        [`${roles$1.break}_x48x48`]: SvgBreakX48X48,
        [`${roles$1.sniper}_x48x48`]: SvgSniperX48X48,
        [`${roles$1.support}_x48x48`]: SvgSupportX48X48,
        [`${roles$1.universal}_x48x48`]: SvgUniversalX48X48,
        [`${roles$1.wheeled}_x48x48`]: SvgWheeledX48X48,
    },
    base$A = 'VehicleRole_e70537d3',
    base__x16x16 = 'VehicleRole_base__x16x16_f444f190',
    base__x24x24$1 = 'VehicleRole_base__x24x24_cc02d077',
    base__x32x32 = 'VehicleRole_base__x32x32_2180a099',
    base__x48x48$1 = 'VehicleRole_base__x48x48_2a01e86c',
    icon$9 = 'VehicleRole_icon_7f7f6256',
    styles$J = {
        base: base$A,
        base__x16x16: base__x16x16,
        base__x24x24: base__x24x24$1,
        base__x32x32: base__x32x32,
        base__x48x48: base__x48x48$1,
        icon: icon$9,
    },
    sizes$a = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48' },
    VehicleRole = reactExports.forwardRef(function ({ roleKey: e, size: t = sizes$a.x24x24, classNames: s, ...r }, n) {
        const o = ROLE_TO_COMPONENT[`${e}_${t}`];
        if (o)
            return jsxRuntimeExports.jsx('div', {
                ...r,
                ref: n,
                className: cx(styles$J.base, styles$J[`base__${t}`], null == s ? void 0 : s.base),
                children: jsxRuntimeExports.jsx(o, { className: cx(styles$J.icon, null == s ? void 0 : s.icon) }),
            });
        console.error(`Unknown vehicle role type ${e} with size ${t}`);
    });
VehicleRole.sizes = sizes$a;
const sizes$9 = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    upscaledSizes = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    mapTypes = {
        [types$4.lightTank]: 'light_tank',
        [types$4.mediumTank]: 'medium_tank',
        [types$4.heavyTank]: 'heavy_tank',
        [types$4.SPG]: 'spg',
        [types$4['AT-SPG']]: 'tank_destroyer',
    },
    base$z = 'VehicleType_30b4aab0',
    base__x24x24 = 'VehicleType_base__x24x24_a3dc7aa3',
    base__x48x48 = 'VehicleType_base__x48x48_cb59f57a',
    base__x64x64 = 'VehicleType_base__x64x64_bb9b890',
    base__x96x96 = 'VehicleType_base__x96x96_919f9f92',
    base__premium__x24x24 = 'VehicleType_base__premium__x24x24_92335fef',
    base__premium__x48x48 = 'VehicleType_base__premium__x48x48_e19c5d21',
    base__premium__x64x64 = 'VehicleType_base__premium__x64x64_ba9a2a05',
    base__premium__x96x96 = 'VehicleType_base__premium__x96x96_d837a523',
    icon$8 = 'VehicleType_icon_b15d2628',
    styles$I = {
        base: base$z,
        base__x24x24: base__x24x24,
        base__x48x48: base__x48x48,
        base__x64x64: base__x64x64,
        base__x96x96: base__x96x96,
        base__premium__x24x24: base__premium__x24x24,
        base__premium__x48x48: base__premium__x48x48,
        base__premium__x64x64: base__premium__x64x64,
        base__premium__x96x96: base__premium__x96x96,
        icon: icon$8,
    },
    VehicleType = reactExports.forwardRef(function (
        { type: e, size: t = sizes$9.x48x48, premium: s = !1, fit: r = 'contain', ...n },
        o,
    ) {
        const a = useUpscale(sizes$9[t], upscaledSizes[t]);
        return jsxRuntimeExports.jsx(Image$1, {
            ...n,
            ref: o,
            fit: r,
            className: cx(styles$I.base, s ? styles$I[`base__premium__${t}`] : styles$I[`base__${t}`], n.className),
            path: `ui_kit.vehicle_type.${a}.${s ? 'premium_' : ''}${normalizeResource(mapTypes[e])}_${a}`,
        });
    });
((VehicleType.types = types$4), (VehicleType.sizes = sizes$9));
const base$y = 'VehicleInfo_1732f1f0',
    name = 'VehicleInfo_name_3989ca04',
    name__premium = 'VehicleInfo_name__premium_258b3b93',
    styles$H = { base: base$y, name: name, name__premium: name__premium },
    VehicleName = defineStyledComponent('VehicleName', styles$H.name, {
        variants: { premium: { true: styles$H.name__premium } },
    }),
    VehicleInfo = reactExports.forwardRef(function (e, t) {
        return jsxRuntimeExports.jsx('div', { ...e, ref: t, className: cx(styles$H.base, e.className) });
    });
((VehicleInfo.Prestige = PrestigeLevel),
    (VehicleInfo.Level = VehicleLevel),
    (VehicleInfo.Type = VehicleType),
    (VehicleInfo.Name = VehicleName),
    (VehicleInfo.Role = VehicleRole));
const base$x = 'CarouselScroll_3690a837',
    areaContent = 'CarouselScroll_areaContent_f5dd7772',
    styles$G = { base: base$x, areaContent: areaContent },
    GAP_BEFORE_START = 5,
    draggingStates = { dragging: 'dragging', idle: 'idle' };
function CarouselScroll({
    api: e,
    children: t,
    className: s,
    areaClassNames: r,
    staticContent: n,
    disabled: o,
    onDraggingState: a,
}) {
    const { animationScroll: i, applyScroll: u, setDisabled: l } = e,
        c = useScrollByDragElements(e, dragDirections.horizontal, void 0, { gapBeforeStart: GAP_BEFORE_START });
    return (
        reactExports.useEffect(() => {
            null == a || a(c.type === draggingStates.dragging);
        }, [c.type, a]),
        reactExports.useEffect(() => {
            l(o);
        }, [o, l]),
        reactExports.useEffect(
            () =>
                createLayoutReadyInEffect(() => {
                    c.type === draggingStates.idle && i.scrollPosition.idle && u(i.scrollPosition.get());
                }),
            [i.scrollPosition, c, u],
        ),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$G.base, s),
            children: jsxRuntimeExports.jsxs(Area$1, {
                className: null == r ? void 0 : r.base,
                classNames: {
                    wrapper: cx(styles$G.areaWrapper, null == r ? void 0 : r.wrapper),
                    content: cx(styles$G.areaContent, null == r ? void 0 : r.content),
                },
                children: [t, n],
            }),
        })
    );
}
const directions = { horizontal: 'horizontal' },
    PERCENT_OF_VISIBLE_ELEMENTS = 2.5,
    SAFETY_FACTOR = 0.5;
function calculateRangeRows(e, t, s) {
    if (0 === t) return [0, 0];
    const r = e.animationScroll.scrollPosition.get(),
        n = e.getWrapperSize();
    if ('number' != typeof n || 0 === n) return [0, 0];
    const o = Math.ceil((n / s) * PERCENT_OF_VISIBLE_ELEMENTS),
        a = Math.max(0, Math.ceil(r / s) - Math.floor(o * SAFETY_FACTOR));
    return [a, Math.min(t, a + o)];
}
function DefaultWrapper(e) {
    return jsxRuntimeExports.jsx('div', { ...e });
}
function calculateRangeItems(e, t, s) {
    if (0 === t) return [0, 0];
    const r = e.animationScroll.scrollPosition.get(),
        n = e.getWrapperSize();
    if ('number' != typeof n || 0 === n) return [0, 0];
    const o = Math.ceil((n / s) * PERCENT_OF_VISIBLE_ELEMENTS),
        a = clamp(0, t, Math.ceil(r / s) - Math.floor(o * SAFETY_FACTOR));
    return [a, Math.min(t, a + o)];
}
const initVisibleRange = [0, 0];
function useVisibleRange(e, t, s, r, n) {
    const [o, a] = reactExports.useState(initVisibleRange),
        i = reactExports.useRef(initVisibleRange),
        [u, l] = useOptionalTransition(s),
        c = usePrevious(u),
        d = useThrottleCall(t, !0),
        _ = useSkipFrame(),
        m = useEvent(() => {
            l(() => {
                const [e, t] = i.current;
                a((s) => {
                    const [r, n] = s;
                    return e === r && t === n ? s : [e, t];
                });
            });
        }),
        p = useEvent(() => {
            d.call(() => {
                const e = r();
                (i.current[0] === e[0] && i.current[1] === e[1]) || ((i.current = e), u || m());
            });
        });
    return (
        reactExports.useEffect(() => {
            c && !u && ((i.current[0] === o[0] && i.current[1] === o[1]) || m());
        }, [u, c, m, o]),
        reactExports.useLayoutEffect(
            () => (
                e.events.on('change', p),
                e.events.on('recalculateContent', p),
                e.events.on('resizeHandled', p),
                _.run(p),
                () => {
                    (e.events.off('change', p),
                        e.events.off('recalculateContent', p),
                        e.events.off('resizeHandled', p));
                }
            ),
            [e.events, p, _, n],
        ),
        o
    );
}
const renderScrollDefault$1 = (e) => jsxRuntimeExports.jsx(DefaultScroll$1, { ...e });
function HorizontalList({
    totalElements: e,
    throttle: t = 0,
    api: s,
    elementWidth: r,
    wrappers: n,
    className: o,
    renderElement: a,
    asyncRenderEnabled: i = !1,
    renderScroll: u = renderScrollDefault$1,
}) {
    const l = useVisibleRange(s, t, i, () => calculateRangeItems(s, e, r), e),
        c = (null == n ? void 0 : n.Element) ?? reactExports.Fragment,
        d = (null == n ? void 0 : n.Content) ?? DefaultWrapper,
        [_, m] = l,
        p = Math.min(e, m),
        x = clamp(0, p, _);
    return u(
        {
            className: o,
            children: jsxRuntimeExports.jsxs(d, {
                children: [
                    jsxRuntimeExports.jsx('div', { style: { width: _ * r } }),
                    mapRange(x, Math.max(p), (e) => jsxRuntimeExports.jsx(c, { children: a(e) }, e)),
                    jsxRuntimeExports.jsx('div', { style: { width: Math.max(0, e - m) * r } }),
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
    totalElements: s,
    elementHeight: r,
    itemsPerRow: n = 1,
    wrappers: o,
    throttle: a = 0,
    asyncRenderEnabled: i = !1,
    renderElement: u,
    renderScroll: l = renderScrollDefault,
}) {
    const c = Math.ceil(s / n),
        d = useVisibleRange(e, a, i, () => calculateRangeRows(e, c, r));
    reactExports.useEffect(e.recalculateContent, [e, d]);
    const [_, m] = d,
        p = (null == o ? void 0 : o.Element) ?? reactExports.Fragment,
        x = (null == o ? void 0 : o.Content) ?? DefaultWrapper,
        f = Math.min(s, m * n),
        E = clamp(0, f, _ * n);
    return l(
        {
            className: t,
            children: jsxRuntimeExports.jsxs(x, {
                children: [
                    jsxRuntimeExports.jsx('div', { style: { width: '100%', height: _ * r } }),
                    mapRange(E, f, (e) => jsxRuntimeExports.jsx(p, { children: u(e) }, e)),
                    jsxRuntimeExports.jsx('div', { style: { width: '100%', height: Math.max(0, c - m) * r } }),
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
const keyValue = {
        [keyCodes.NONE]: 'NONE',
        [keyCodes.ALT]: 'ALT',
        [keyCodes.ENTER]: 'ENTER',
        [keyCodes.ESCAPE]: 'ESCAPE',
        [keyCodes.SPACE]: 'SPACE',
        [keyCodes.END]: 'END',
        [keyCodes.HOME]: 'HOME',
        [keyCodes.ARROW_LEFT]: 'ARROW LEFT',
        [keyCodes.ARROW_UP]: 'ARROW UP',
        [keyCodes.ARROW_RIGHT]: 'ARROW RIGHT',
        [keyCodes.ARROW_DOWN]: 'ARROW DOWN',
        [keyCodes.NUM_PLUS]: 'NUM PLUS',
        [keyCodes.NUM_MINUS]: 'NUM MINUS',
        [keyCodes.PLUS]: 'PLUS',
        [keyCodes.MINUS]: 'MINUS',
        [keyCodes.PAGE_UP]: 'PAGE UP',
        [keyCodes.PAGE_DOWN]: 'PAGE DOWN',
        [keyCodes.BACKSPACE]: 'BACKSPACE',
        [keyCodes.DELETE]: 'DELETE',
        [keyCodes.TAB]: 'TAB',
        [keyCodes.A]: 'A',
        [keyCodes.D]: 'D',
        [keyCodes.B]: 'B',
        [keyCodes.C]: 'C',
        [keyCodes.V]: 'V',
        [keyCodes.X]: 'X',
        [keyCodes.Z]: 'Z',
        [keyCodes.W]: 'W',
        [keyCodes.E]: 'E',
        [keyCodes.N]: 'N',
        [keyCodes.KEY_1]: 'KEY 1',
        [keyCodes.KEY_2]: 'KEY 2',
        [keyCodes.KEY_3]: 'KEY 3',
        [keyCodes.KEY_4]: 'KEY 4',
        [keyCodes.KEY_5]: 'KEY 5',
        [keyCodes.KEY_6]: 'KEY 6',
        [keyCodes.KEY_7]: 'KEY 7',
        [keyCodes.KEY_8]: 'KEY 8',
        [keyCodes.KEY_9]: 'KEY 9',
    },
    background$6 = 'KeyButton_background_8a852f95',
    border$6 = 'KeyButton_border_b1c50f01',
    base$w = 'KeyButton_8fd343f8',
    content$a = 'KeyButton_content_895f3727',
    styles$F = { background: background$6, border: border$6, base: base$w, content: content$a },
    StyledBase = defineStyledComponent('KeyButton', styles$F.base);
function Base$f({ children: e, onClick: t, onMouseEnter: s, soundTarget: r, silent: n, ...o }) {
    const a = useSounds();
    return jsxRuntimeExports.jsx(StyledBase, {
        ...o,
        onMouseEnter: function (e) {
            (n || a.play('mouse-enter', { target: r ?? 'KeyButton', original: e }), null == s || s(e));
        },
        onClick: function (e) {
            (n || a.play('click', { target: r ?? 'KeyButton', original: e }), null == t || t(e));
        },
        children: e,
    });
}
const KeyButtonContext = reactExports.createContext(void 0);
function useKeyButtonContext() {
    const e = reactExports.useContext(KeyButtonContext);
    if (!e) throw new Error('useKeyButtonContext must be used within KeyButtonContext');
    return e;
}
function KeyButtonProvider({ keyCode: e, onActive: t, children: s }) {
    useHandleKeyup(e, t);
    const r = reactExports.useMemo(() => ({ keyCode: e, onActive: t }), [e, t]);
    return jsxRuntimeExports.jsx(KeyButtonContext.Provider, { value: r, children: s });
}
function Code() {
    const { keyCode: e } = useKeyButtonContext();
    return keyValue[e];
}
const KeyButton = function ({ keyCode: e, onActive: t, silent: s = !1, classNames: r, children: n, ...o }) {
    return jsxRuntimeExports.jsx(KeyButtonProvider, {
        keyCode: e,
        onActive: t,
        children: jsxRuntimeExports.jsxs(Base$f, {
            ...o,
            silent: s,
            className: cx(styles$F.base, null == r ? void 0 : r.base),
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$F.background, null == r ? void 0 : r.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$F.border, null == r ? void 0 : r.border) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$F.content, null == r ? void 0 : r.content),
                    children: n,
                }),
            ],
        }),
    });
};
KeyButton.Code = Code;
const contextInstance$1 = reactExports.createContext(null),
    positions = { left: 'left', right: 'right', top: 'top', bottom: 'bottom' };
Object.values(positions);
const verticalPositions = ['top', 'bottom'],
    oppositePositions = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
function isVerticalPosition(e) {
    return verticalPositions.includes(e);
}
function usePopoverOptional() {
    return reactExports.useContext(contextInstance$1);
}
function usePopover() {
    const e = reactExports.useContext(contextInstance$1);
    if (!e) throw new Error('usePopover must be used within a Popover');
    return e;
}
const initialState = { opened: !1 };
function usePopoverInstance(e) {
    const [t, s] = reactExports.useState(initialState),
        r = reactExports.useMemo(() => {
            const t = observable.box(),
                r = { onBeforeOpen: new Set(), onBeforeClose: new Set() },
                n = { bounding: observable.box(), position: observable.box() };
            function o(e) {
                s((t) => {
                    const s = e(t);
                    return (
                        t.opened === s.opened ||
                            (s.opened ? r.onBeforeOpen.forEach((e) => e()) : r.onBeforeClose.forEach((e) => e())),
                        s
                    );
                });
            }
            return {
                id: e,
                open: () => o((e) => ({ ...e, opened: !0 })),
                close: () => o((e) => ({ ...e, opened: !1 })),
                toggle: () => o((e) => ({ ...e, opened: !e.opened })),
                subscribe: {
                    onBeforeOpen: (e) => (r.onBeforeOpen.add(e), () => r.onBeforeOpen.delete(e)),
                    onBeforeClose: (e) => (r.onBeforeClose.add(e), () => r.onBeforeClose.delete(e)),
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
    return reactExports.useMemo(() => ({ ...r, ...t }), [r, t]);
}
const border$5 = 'Popover_border_d0a76717',
    title$1 = 'Popover_title_e4a0437a',
    subtitle = 'Popover_subtitle_1c7535c8',
    header$1 = 'Popover_header_de23fc15',
    body = 'Popover_body_22163d58',
    divider = 'Popover_divider_46fe6f15',
    decoration$1 = 'Popover_decoration_134219d5',
    close = 'Popover_close_ad4a9c7b',
    styles$E = {
        border: border$5,
        title: title$1,
        subtitle: subtitle,
        header: header$1,
        body: body,
        divider: divider,
        decoration: decoration$1,
        close: close,
    },
    Close = reactExports.forwardRef(({ className: e, children: t, ...s }, r) => {
        const n = usePopoverOptional(),
            o = useSounds(),
            a = useUpscale('ui_kit.close_button.icon_small', 'ui_kit.close_button.icon_medium');
        return (
            reactExports.useEffect(
                () =>
                    onResize(function () {
                        null == n || n.close();
                    }),
                [n],
            ),
            jsxRuntimeExports.jsx('div', {
                ...s,
                onClick: function (e) {
                    var t;
                    (null == (t = s.onClick) || t.call(s, e),
                        o.play('close', { target: 'react-popover:close', original: e }),
                        null == n || n.close());
                },
                onMouseEnter: function (e) {
                    var t;
                    (null == (t = s.onMouseEnter) || t.call(s, e),
                        o.play('mouse-enter', { target: 'react-popover:close', original: e }));
                },
                ref: r,
                className: cx(styles$E.close, e),
                children: t ?? jsxRuntimeExports.jsx(Image$1, { path: a, width: 24, height: 24 }),
            })
        );
    }),
    FREE_SPACE = 8,
    animationTransitions = {
        top: 'translate(0rem, -50rem) scale(0.9)',
        bottom: 'translate(0rem, 50rem) scale(0.9)',
        left: 'translate(-50rem, 0rem) scale(0.9)',
        right: 'translate(50rem, 0rem) scale(0.9)',
    };
function Portal({
    children: e,
    target: t,
    pivot: s = 0,
    position: r = 'top',
    lazy: n = !1,
    closeByEscape: o = !0,
    ...a
}) {
    const i = usePopover(),
        u = React.useRef(null),
        l = reactExports.useMemo(() => (t ? (document.querySelector(t) ?? document.body) : document.body), [t]);
    reactExports.useEffect(() => {
        const e = u.current;
        if (!e) return;
        const t = document.querySelector(`[data-popover-trigger-id="${i.id}"]`),
            n = e.querySelector(`[data-popover-display-id="${i.id}"]`);
        if (!t || !n) return;
        const o = watchResizes([t, e, document.body], ([t, n, o]) => {
            if (!i.opened) return;
            const a = getUpdatedPosition(r, t, n, o);
            (updatePosition(s, a, t, n, o, e),
                runInAction(() => {
                    (i.trigger.setBounding(t), i.portal.setBounding(n), i.portal.setPosition(a));
                }));
        });
        return (o.start(), o.stop);
    }, [s, i.id, i.portal, i.trigger, r, i.opened]);
    const c = reactExports.useCallback(() => {
        const e = u.current;
        e &&
            document.activeElement &&
            document.activeElement instanceof HTMLElement &&
            e.contains(document.activeElement) &&
            document.activeElement.blur();
    }, []);
    (reactExports.useEffect(() => i.subscribe.onBeforeClose(c), [i.subscribe, c]),
        useHandleKeydown(o && i.opened ? keyCodes.ESCAPE : keyCodes.NONE, () => {
            i.close();
        }),
        reactExports.useEffect(() => {
            if (!i.opened) return;
            const e = u.current;
            if (!e) return;
            const t = e;
            function s(e) {
                const s = e.target;
                return (
                    s instanceof HTMLElement &&
                    !(
                        t === s ||
                        t.contains(s) ||
                        s.closest(`[data-popover-trigger-id="${i.id}"]`) ||
                        s.closest(`[data-popover-outside-click-whitelist-id="${i.id}"]`)
                    )
                );
            }
            return new DisposeBuilder()
                .add(
                    addEventListener(document, 'click', (e) => {
                        s(e) && i.close();
                    }),
                )
                .add(
                    mouse.down(([e, t]) => {
                        if ('outside' === t) return i.close();
                        const r = e.button;
                        (r !== mouseButtons.right && r !== mouseButtons.wheel) || (s(e) && i.close());
                    }),
                ).dispose;
        }, [i]));
    const d = useSpring({
        opacity: i.opened ? 1 : 0,
        transform: i.opened ? 'translate(0rem, 0rem) scale(1)' : animationTransitions[r],
        config: { easing: easings.easeInOutCubic, duration: 250 },
    });
    return !i.opened && n
        ? null
        : jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
              children: ReactDOM.createPortal(
                  jsxRuntimeExports.jsx(animated.div, {
                      ...a,
                      ref: u,
                      style: {
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          pointerEvents: d.opacity.to((e) => (1 === e ? 'auto' : 'none')),
                          display: d.opacity.to((e) => (0 === e ? 'none' : 'block')),
                          ...a.style,
                      },
                      children: jsxRuntimeExports.jsx(animated.div, { style: d, children: e }),
                  }),
                  l,
              ),
          });
}
function getUpdatedPosition(e, t, s, r) {
    return ('top' === e && t.top - s.height < 0) ||
        ('bottom' === e && t.bottom + s.height > r.height) ||
        ('left' === e && t.left - s.width < 0) ||
        ('right' === e && t.right + s.width > r.width)
        ? oppositePositions[e]
        : e;
}
function applyTransform(e, t, s, r) {
    ((e = clamp(0, r.width - s.offsetWidth, e)),
        (t = clamp(0, r.height - s.offsetHeight, t)),
        (s.style.transform = `translate(${e}px, ${t}px)`));
}
function updatePosition(e, t, s, r, n, o) {
    const a = remToPx$1(FREE_SPACE);
    if ('top' === t) {
        const t = (r.width - s.width) * e;
        applyTransform(s.left - t, s.top - r.height - a, o, n);
    } else if ('bottom' === t) {
        const t = (r.width - s.width) * e;
        applyTransform(s.left - t, s.bottom + a, o, n);
    } else if ('left' === t) {
        const t = s.left - r.width - a,
            i = (r.height - s.height) * e;
        applyTransform(t, s.top - i, o, n);
    } else if ('right' === t) {
        const t = s.right + a,
            i = (r.height - s.height) * e;
        applyTransform(t, s.top - i, o, n);
    }
}
const base$v = 'PopoverTip_163a336f',
    arrow$1 = 'PopoverTip_arrow_44c7d6a5',
    glow$1 = 'PopoverTip_glow_da3f9be9',
    styles$D = {
        base: base$v,
        'base__flip-left': 'PopoverTip_base__flip-left_3cc0dadc',
        'base__flip-right': 'PopoverTip_base__flip-right_6a5605b6',
        'base__flip-top': 'PopoverTip_base__flip-top_6bcc69e1',
        'base__flip-bottom': 'PopoverTip_base__flip-bottom_416a1dc4',
        arrow: arrow$1,
        'arrow__position-top': 'PopoverTip_arrow__position-top_a95d47a6',
        'arrow__position-bottom': 'PopoverTip_arrow__position-bottom_9d75ac12',
        'arrow__position-left': 'PopoverTip_arrow__position-left_ca4ced33',
        'arrow__position-right': 'PopoverTip_arrow__position-right_9dc94f7a',
        glow: glow$1,
    },
    verticals = [positions.top, positions.bottom],
    horizontals = [positions.left, positions.right],
    rotations = { top: 180, bottom: 0, left: 90, right: -90 },
    Tip = reactExports.forwardRef(({ size: e, ...t }, s) => {
        const r = reactExports.useRef(null),
            n = usePopoverOptional(),
            [o, a] = reactExports.useState(t.position),
            [i, u] = reactExports.useState(t.offset);
        return (
            reactExports.useEffect(() => {
                const e = r.current;
                if (e && n)
                    return autorun(() => {
                        const t = n.trigger.bounding.get(),
                            s = n.portal.bounding.get(),
                            r = n.portal.position.get();
                        if (!t || !r || !s) return;
                        const o = oppositePositions[r];
                        (a(o),
                            isVerticalPosition(o)
                                ? (u(`${Math.max(0, t.left - s.left)}px`),
                                  (e.style.width = `${Math.min(t.width, s.width)}px`))
                                : (u(`${Math.max(0, t.top - s.top)}px`),
                                  (e.style.height = `${Math.min(t.height, s.height)}px`)));
                    });
            }, [n]),
            jsxRuntimeExports.jsxs('div', {
                ...t,
                ref: assignRefs([s, r]),
                style: {
                    width: verticals.includes(o) ? e : '1rem',
                    height: horizontals.includes(o) ? e : '1rem',
                    top: horizontals.includes(o) ? i : 'auto',
                    bottom: 'bottom' === o ? '0' : 'auto',
                    left: verticals.includes(o) ? i : 'auto',
                    right: 'right' === o ? '0' : 'auto',
                    ...t.style,
                },
                className: cx(styles$D.base, t.flipped && styles$D[`base__flipped-${o}`], t.className),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$D.arrow, styles$D[`arrow__position-${o}`]),
                        style: { transform: `translate(-50%, -50%) rotate(${rotations[o]}deg)` },
                    }),
                    !1 === t.noGlow &&
                        jsxRuntimeExports.jsx('div', {
                            className: styles$D.glow,
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
const Title = defineStyledComponent('Title', styles$E.title),
    Subtitle = defineStyledComponent('Subtitle', styles$E.subtitle),
    Header = defineStyledComponent('Header', styles$E.header),
    Divider = defineStyledComponent('Divider', styles$E.divider),
    Body = defineStyledComponent('Body', styles$E.body),
    Decoration$1 = defineStyledComponent('Decoration', styles$E.decoration),
    Display = reactExports.forwardRef((e, t) => {
        const s = usePopoverOptional();
        return jsxRuntimeExports.jsxs(Decoration$1, {
            ...e,
            ref: t,
            'data-popover-display-id': null == s ? void 0 : s.id,
            children: [jsxRuntimeExports.jsx('div', { className: styles$E.border }), e.children],
        });
    });
function Popover(e) {
    const t = reactExports.useId();
    return jsxRuntimeExports.jsx(contextInstance$1.Provider, {
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
const Slot$1 = React.forwardRef((e, t) => {
    const { children: s, ...r } = e,
        n = React.Children.toArray(s),
        o = n.find(isSlottable);
    if (o) {
        const e = o.props.children,
            s = n.map((t) =>
                t === o
                    ? React.Children.count(e) > 1
                        ? React.Children.only(null)
                        : React.isValidElement(e)
                          ? e.props.children
                          : null
                    : t,
            );
        return jsxRuntimeExports.jsx(SlotClone, {
            ...r,
            ref: t,
            children: React.isValidElement(e) ? React.cloneElement(e, void 0, s) : null,
        });
    }
    return jsxRuntimeExports.jsx(SlotClone, { ...r, ref: t, children: s });
});
Slot$1.displayName = 'Slot';
const SlotClone = React.forwardRef((e, t) => {
    const { children: s, ...r } = e;
    if (React.isValidElement(s)) {
        const e = getElementRef(s),
            n = mergeProps(r, s.props);
        return (s.type !== React.Fragment && (n.ref = t ? assignRefs([t, e]) : e), React.cloneElement(s, n));
    }
    return (console.warn('Invalid children', s), null);
});
SlotClone.displayName = 'SlotClone';
const Slottable = ({ children: e }) => jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: e });
function isSlottable(e) {
    return React.isValidElement(e) && e.type === Slottable;
}
function mergeProps(e, t) {
    const s = { ...e, ...t };
    for (const r in t) {
        const n = e[r],
            o = t[r];
        r.startsWith('on')
            ? n && o
                ? (s[r] = (...e) => {
                      (o(...e), n(...e));
                  })
                : n && (s[r] = n)
            : 'style' === r
              ? (s[r] = { ...n, ...o })
              : 'className' === r && (s[r] = [n, o].filter(Boolean).join(' '));
    }
    return s;
}
function getElementRef(e) {
    return e.props.ref || e.ref;
}
function Sprite(e) {
    var t;
    const s = null == (t = e.sprite.frames[e.icon]) ? void 0 : t.frame;
    return s
        ? jsxRuntimeExports.jsx(Image$1, {
              ...e,
              path: e.path,
              fit: `${e.sprite.meta.size.w}rem ${e.sprite.meta.size.h}rem`,
              position: `${-s.x}rem ${-s.y}rem`,
              width: s.w,
              height: s.h,
              className: e.className,
          })
        : (console.error(`Error in Sprite: Frame for icon "${e.icon}" not found in path "${e.path}"`), null);
}
function useHoverState(e) {
    const [t, s] = reactExports.useState(!1);
    return [t ? `${e}_hover` : e, s];
}
const states = { default: 'default', alert: 'alert', error: 'error', done: 'done' },
    messageTypes = { alert: 'alert', error: 'error' },
    types$2 = {
        text: 'text',
        password: 'password',
        number: 'number',
        htmlNumber: 'htmlNumber',
        email: 'email',
        integer: 'integer',
    },
    sizes$8 = { medium: 'medium', large: 'large' },
    icons = { search: 'search' },
    defaultConfig = { type: types$2.text, size: sizes$8.medium, state: states.default, disabled: !1 },
    placeholderVisibility = { focusedOrValue: 'focusedOrValue', value: 'value' },
    contextInstance = reactExports.createContext(null);
function useInput() {
    const e = reactExports.useContext(contextInstance);
    if (!e) throw new Error('useInput must be used within an Input');
    return e;
}
function useInputInstance({ value: e, size: t, type: s, state: r, disabled: n }) {
    const o = reactExports.useRef(null),
        [a, i] = reactExports.useState(!1),
        u = useEvent((e) => {
            var t;
            if (!o.current) return;
            const s =
                null == (t = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')) ? void 0 : t.set;
            if (s) {
                s.call(o.current, e);
                const t = new Event('input', { bubbles: !0 });
                o.current.dispatchEvent(t);
            }
        }),
        l = n ?? defaultConfig.disabled,
        c = usePrevious(l);
    return (
        reactExports.useLayoutEffect(() => {
            var e;
            !c && l && (null == (e = o.current) || e.blur());
        }, [l, c]),
        reactExports.useLayoutEffect(() => {
            var e, t;
            a
                ? (null == (e = o.current) || e.blur(),
                  setTimeout(() => {
                      var e;
                      return null == (e = o.current) ? void 0 : e.focus();
                  }))
                : null == (t = o.current) || t.blur();
        }, [a]),
        reactExports.useMemo(
            () => ({
                value: e,
                size: t ?? defaultConfig.size,
                type: s ?? defaultConfig.type,
                state: r ?? defaultConfig.state,
                disabled: l,
                focused: a,
                setFocused: i,
                inputRef: o,
                setValue: u,
                clear: () => u(''),
                focus: () => i(!0),
            }),
            [l, a, u, t, r, s, e],
        )
    );
}
const decoration = 'Input_decoration_b561de7a',
    icon$7 = 'Input_icon_ed3c6a4a',
    clearButton = 'Input_clearButton_d26b0bd5',
    decoration__focused = 'Input_decoration__focused_494bd5d6',
    decoration__alertState = 'Input_decoration__alertState_a3c7d971',
    decoration__errorState = 'Input_decoration__errorState_a889ba00',
    decoration__doneState = 'Input_decoration__doneState_273150be',
    decoration__disabled = 'Input_decoration__disabled_74e25c08',
    fieldWrapper = 'Input_fieldWrapper_a4454e66',
    field__mediumSize = 'Input_field__mediumSize_7a1efba0',
    placeholder__mediumSize = 'Input_placeholder__mediumSize_2b8cbadc',
    field__largeSize = 'Input_field__largeSize_2b4f0b27',
    placeholder__largeSize = 'Input_placeholder__largeSize_6dbe7ba2',
    field = 'Input_field_7f2a0d1d',
    field__focused = 'Input_field__focused_5a0a7a6c',
    field__disabled = 'Input_field__disabled_15b2ae5c',
    placeholder = 'Input_placeholder_6ec6c232',
    placeholder__disabled = 'Input_placeholder__disabled_58b85003',
    message = 'Input_message_d4aa42ca',
    message__visible = 'Input_message__visible_a76c109c',
    message__alertType = 'Input_message__alertType_34d13f9f',
    message__errorType = 'Input_message__errorType_c0d7caba',
    message__mediumSize = 'Input_message__mediumSize_a2972578',
    message__largeSize = 'Input_message__largeSize_a5a35f73',
    icon__focused = 'Input_icon__focused_a76c109c',
    icon__mediumSize = 'Input_icon__mediumSize_f7d15078',
    icon__largeSize = 'Input_icon__largeSize_b80deb39',
    icon__searchIcon = 'Input_icon__searchIcon_494bd5d6',
    icon__upscale = 'Input_icon__upscale_494bd5d6',
    clearButton__mediumSize = 'Input_clearButton__mediumSize_d43f0915',
    clearButton__largeSize = 'Input_clearButton__largeSize_240e111e',
    clearButton__visible = 'Input_clearButton__visible_8d3756eb',
    clearButton__upscale = 'Input_clearButton__upscale_494bd5d6',
    styles$C = {
        decoration: decoration,
        icon: icon$7,
        clearButton: clearButton,
        decoration__focused: decoration__focused,
        decoration__alertState: decoration__alertState,
        decoration__errorState: decoration__errorState,
        decoration__doneState: decoration__doneState,
        decoration__disabled: decoration__disabled,
        fieldWrapper: fieldWrapper,
        field__mediumSize: field__mediumSize,
        placeholder__mediumSize: placeholder__mediumSize,
        field__largeSize: field__largeSize,
        placeholder__largeSize: placeholder__largeSize,
        field: field,
        field__focused: field__focused,
        field__disabled: field__disabled,
        placeholder: placeholder,
        placeholder__disabled: placeholder__disabled,
        message: message,
        message__visible: message__visible,
        message__alertType: message__alertType,
        message__errorType: message__errorType,
        message__mediumSize: message__mediumSize,
        message__largeSize: message__largeSize,
        icon__focused: icon__focused,
        icon__mediumSize: icon__mediumSize,
        icon__largeSize: icon__largeSize,
        icon__searchIcon: icon__searchIcon,
        icon__upscale: icon__upscale,
        clearButton__mediumSize: clearButton__mediumSize,
        clearButton__largeSize: clearButton__largeSize,
        clearButton__visible: clearButton__visible,
        clearButton__upscale: clearButton__upscale,
    },
    soundPlayEventTarget$1 = 'Input:ClearButton',
    ClearButton = reactExports.forwardRef(function ({ className: e, children: t, ...s }, r) {
        const n = useSounds(),
            { value: o, clear: a, size: i, disabled: u, focus: l } = useInput(),
            c = useUpscale(void 0, styles$C.clearButton__upscale);
        return jsxRuntimeExports.jsx('button', {
            ...s,
            type: 'button',
            ref: r,
            className: cx(
                styles$C.clearButton,
                o && !u && styles$C.clearButton__visible,
                styles$C[`clearButton__${i}Size`],
                c,
                e,
            ),
            onMouseEnter: function (e) {
                var t;
                (n.play('mouse-enter', { target: soundPlayEventTarget$1, original: e }),
                    null == (t = s.onMouseEnter) || t.call(s, e));
            },
            onClick: function (e) {
                var t;
                (n.play('close', { target: soundPlayEventTarget$1, original: e }),
                    e.stopPropagation(),
                    o && a(),
                    l(),
                    null == (t = s.onClick) || t.call(s, e));
            },
            children: t,
        });
    }),
    soundPlayEventTarget = 'Input:Decoration',
    Decoration = reactExports.forwardRef(function ({ className: e, children: t, ...s }, r) {
        const n = useSounds(),
            { state: o, disabled: a, focused: i, focus: u } = useInput();
        return jsxRuntimeExports.jsx('div', {
            ...s,
            ref: r,
            className: cx(
                styles$C.decoration,
                styles$C[`decoration__${o}State`],
                a && styles$C.decoration__disabled,
                i && styles$C.decoration__focused,
                e,
            ),
            onMouseEnter: function (e) {
                var t;
                (n.play('mouse-enter', { target: soundPlayEventTarget, original: e }),
                    null == (t = s.onMouseEnter) || t.call(s, e));
            },
            onClick: function (e) {
                var t;
                (n.play('click', { target: soundPlayEventTarget, original: e }),
                    u(),
                    null == (t = s.onClick) || t.call(s, e));
            },
            children: t,
        });
    }),
    allowSeparators = new Set([',', '.']);
function findFirstSeparatorIndex(e) {
    for (let t = 0; t < e.length; t++) {
        const s = e[t];
        if (allowSeparators.has(s)) return t;
    }
}
function cleanInputNumber(e) {
    const t = e.replace(/[^0-9,.]/g, '');
    if ('0' === t) return t;
    const s = t.replace(/^0+(?!\b)/, '').replace(/(,|\.){2,}/g, '$1'),
        r = findFirstSeparatorIndex(s);
    if (void 0 === r) return s;
    {
        const e = s.slice(0, r),
            t = s.slice(r + 1),
            n = e.replace(/[,.]/g, ''),
            o = t.replace(/[,.]/g, '');
        return `${0 === n.length ? '0' : n}.${o}`;
    }
}
function cleanInputInteger(e) {
    return e.replace(/[^0-9]/g, '').replace(/^0+(?!\b)/, '');
}
const Placeholder = reactExports.forwardRef(function (
        { visibility: e = placeholderVisibility.focusedOrValue, className: t, children: s, ...r },
        n,
    ) {
        const { focused: o, value: a, size: i, disabled: u } = useInput();
        if (!{ focusedOrValue: o || a, value: a }[e])
            return jsxRuntimeExports.jsx('div', {
                ...r,
                ref: n,
                className: cx(
                    styles$C.placeholder,
                    u && styles$C.placeholder__disabled,
                    styles$C[`placeholder__${i}Size`],
                    t,
                ),
                children: s,
            });
    }),
    typeToHtmlType = {
        text: 'text',
        password: 'password',
        number: 'text',
        email: 'email',
        htmlNumber: 'number',
        integer: 'text',
    },
    Field = reactExports.forwardRef(function (
        { className: e, classNames: t, wrapperRef: s, placeholderRef: r, placeholderVisibility: n, children: o, ...a },
        i,
    ) {
        const { type: u, value: l, disabled: c, size: d, inputRef: _, focused: m, setFocused: p } = useInput();
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$C.fieldWrapper, null == t ? void 0 : t.wrapper),
            ref: s,
            children: [
                jsxRuntimeExports.jsx('input', {
                    ...a,
                    'data-name': 'Input',
                    ref: assignRefs([i, _]),
                    value: l,
                    disabled: c,
                    type: typeToHtmlType[u] ?? u,
                    className: cx(
                        styles$C.field,
                        styles$C[`field__${d}Size`],
                        m && styles$C.field__focused,
                        c && styles$C.field__disabled,
                        e,
                    ),
                    onChange: function (e) {
                        var t, s;
                        if (c) return (e.preventDefault(), void (null == (t = _.current) || t.blur()));
                        const { value: r } = e.target;
                        (u === types$2.number
                            ? (e.target.value = cleanInputNumber(r))
                            : u === types$2.integer && (e.target.value = cleanInputInteger(r)),
                            null == (s = a.onChange) || s.call(a, e));
                    },
                    onFocus: function (e) {
                        var t;
                        (p(!0), null == (t = a.onFocus) || t.call(a, e));
                    },
                    onBlur: function (e) {
                        var t;
                        (p(!1), null == (t = a.onBlur) || t.call(a, e));
                    },
                    onDoubleClick: function (e) {
                        var t, s;
                        (null == (t = _.current) || t.select(), null == (s = a.onDoubleClick) || s.call(a, e));
                    },
                }),
                'string' == typeof o || 'number' == typeof o
                    ? jsxRuntimeExports.jsx(Placeholder, {
                          className: null == t ? void 0 : t.placeholder,
                          ref: r,
                          visibility: n,
                          children: o,
                      })
                    : o,
            ],
        });
    }),
    iconsSet = new Set(Object.values(icons)),
    Icon = reactExports.forwardRef(function ({ className: e, icon: t, children: s, ...r }, n) {
        const { size: o, focused: a } = useInput(),
            i = useUpscale(void 0, styles$C.icon__upscale);
        return jsxRuntimeExports.jsx('div', {
            ...r,
            ref: n,
            className: cx(
                styles$C.icon,
                styles$C[`icon__${o}Size`],
                a && styles$C.icon__focused,
                t && iconsSet.has(t) && styles$C[`icon__${t}Icon`],
                i,
                e,
            ),
            style: t && !iconsSet.has(t) ? { '--background-image': `url(${t})` } : void 0,
            children: s,
        });
    }),
    Message = reactExports.forwardRef(function (
        { className: e, type: t = messageTypes.alert, visible: s = !0, children: r, ...n },
        o,
    ) {
        const { size: a } = useInput();
        return jsxRuntimeExports.jsx('div', {
            ...n,
            ref: o,
            className: cx(
                styles$C.message,
                s && styles$C.message__visible,
                styles$C[`message__${t}Type`],
                styles$C[`message__${a}Size`],
                e,
            ),
            children: r,
        });
    });
function Provider({ children: e, ...t }) {
    return jsxRuntimeExports.jsx(contextInstance.Provider, { value: useInputInstance(t), children: e });
}
const Input = reactExports.forwardRef(function ({ value: e, state: t, disabled: s, type: r, size: n, ...o }, a) {
    return jsxRuntimeExports.jsx(Provider, {
        value: e,
        type: r,
        size: n,
        state: t,
        disabled: s,
        children: jsxRuntimeExports.jsx(Decoration, { children: jsxRuntimeExports.jsx(Field, { ...o, ref: a }) }),
    });
});
((Input.types = types$2),
    (Input.messageTypes = messageTypes),
    (Input.sizes = sizes$8),
    (Input.states = states),
    (Input.icons = icons),
    (Input.Provider = Provider),
    (Input.Decoration = Decoration),
    (Input.Field = Field),
    (Input.Placeholder = Placeholder),
    (Input.Message = Message),
    (Input.Icon = Icon),
    (Input.ClearButton = ClearButton));
const toggleThemes = { primary: 'primary', custom: 'custom' },
    toggleSizes = { extraSmall: 'extraSmall', small: 'small', medium: 'medium' },
    base$u = 'Toggle_cdf77db0',
    base__fullSizeContent = 'Toggle_base__fullSizeContent_1b52d9ec',
    base__activated = 'Toggle_base__activated_d584e080',
    base__disabled$5 = 'Toggle_base__disabled_b564a69b',
    background$5 = 'Toggle_background_78cd67c0',
    border$4 = 'Toggle_border_3d0d0d39',
    bulb = 'Toggle_bulb_fe6d0fba',
    overlay$3 = 'Toggle_overlay_e2999686',
    content$9 = 'Toggle_content_b9cbf871',
    styles$B = {
        base: base$u,
        'base__size-small': 'Toggle_base__size-small_b76142a1',
        'base__size-medium': 'Toggle_base__size-medium_a0d408f5',
        base__fullSizeContent: base__fullSizeContent,
        'base__theme-primary': 'Toggle_base__theme-primary_3e3de333',
        base__activated: base__activated,
        base__disabled: base__disabled$5,
        background: background$5,
        border: border$4,
        bulb: bulb,
        overlay: overlay$3,
        content: content$9,
    },
    Base$e = defineStyledComponent('Toggle', styles$B.base, {
        variants: {
            theme: { [toggleThemes.primary]: styles$B['base__theme-primary'], [toggleThemes.custom]: void 0 },
            size: {
                [toggleSizes.extraSmall]: styles$B['base__size-extraSmall'],
                [toggleSizes.small]: styles$B['base__size-small'],
                [toggleSizes.medium]: styles$B['base__size-medium'],
            },
            activated: { true: styles$B.base__activated },
            disabled: { true: styles$B.base__disabled },
        },
        defaultVariants: { theme: toggleThemes.primary, size: toggleSizes.extraSmall },
    }),
    ToggleBase = reactExports.forwardRef(function (e, t) {
        const s = useSounds();
        return jsxRuntimeExports.jsx(Base$e, {
            ...e,
            ref: t,
            onMouseEnter: function (t) {
                var r;
                (s.play('mouse-enter', { target: Base$e.displayName, original: t }),
                    null == (r = e.onMouseEnter) || r.call(e, t));
            },
            onClick: function (t) {
                var r;
                (s.play('click', { target: Base$e.displayName, original: t }), null == (r = e.onClick) || r.call(e, t));
            },
            children: e.children,
        });
    }),
    Toggle = reactExports.forwardRef(function (
        {
            children: e,
            size: t = toggleSizes.extraSmall,
            theme: s = toggleThemes.primary,
            fullSizeContent: r,
            classNames: n,
            className: o,
            ...a
        },
        i,
    ) {
        return jsxRuntimeExports.jsxs(ToggleBase, {
            ...a,
            ref: i,
            size: t,
            theme: s,
            className: cx(o, r && styles$B.base__fullSizeContent, null == n ? void 0 : n.base),
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$B.border, null == n ? void 0 : n.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$B.background, null == n ? void 0 : n.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$B.bulb, null == n ? void 0 : n.bulb) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$B.overlay, null == n ? void 0 : n.overlay) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$B.content, null == n ? void 0 : n.content),
                    children: e,
                }),
            ],
        });
    });
((Toggle.themes = toggleThemes), (Toggle.sizes = toggleSizes));
const base$t = 'AnimatedDetails_c70d3863',
    styles$A = { base: base$t },
    AnimatedDetails = reactExports.forwardRef(function (
        { opened: e, children: t, className: s, animationSettings: r = {}, ...n },
        o,
    ) {
        const a = React.useRef(null),
            i = React.useRef(null),
            [u, l] = useSpring(() => ({ height: 0, opacity: 0 })),
            c = useEvent((e, t) => {
                l.start({
                    height: t ? e : 0,
                    opacity: t ? 1 : 0,
                    config: { duration: 350, easing: t ? easings.reverseEaseInOutCirc : easings.easeInOutCirc },
                    ...r,
                });
            });
        return (
            React.useEffect(() => {
                const t = i.current;
                if (!t) return;
                let s = noop;
                if (e) {
                    const e = new ResizeObserver(() => c(t.offsetHeight, !0));
                    (e.observe(t), (s = e.disconnect.bind(e)));
                }
                const r = createLayoutReadyInEffect(() => {
                    c(t.offsetHeight, e);
                });
                return () => {
                    (r(), s());
                };
            }, [c, e]),
            jsxRuntimeExports.jsx(animated.div, {
                ...n,
                ref: assignRefs([o, a]),
                className: cx(styles$A.base, s),
                style: { ...n.style, ...u },
                children: jsxRuntimeExports.jsx('div', { ref: i, children: t }),
            })
        );
    }),
    Context$2 = reactExports.createContext(void 0);
function useAccordion() {
    const e = reactExports.useContext(Context$2);
    if (!e) throw new Error('useAccordion should have Accordion provider');
    return e;
}
const arrow = 'Arrow_f1570a91',
    arrow__opened = 'Arrow_arrow__opened_134476cd',
    styles$z = { arrow: arrow, arrow__opened: arrow__opened },
    images$1 = resources.resolve('images'),
    Arrow = reactExports.forwardRef(function (e, t) {
        const { opened: s } = useAccordion();
        return jsxRuntimeExports.jsx('div', {
            ...e,
            ref: t,
            style: { backgroundImage: `url(${images$1.readOrEmpty('library.arrow_accordion')})`, ...e.style },
            className: cx(styles$z.arrow, s && styles$z.arrow__opened, e.className),
        });
    }),
    content$8 = 'Details_content_a5a56462',
    content__opened = 'Details_content__opened_cc21f43f',
    styles$y = { content: content$8, content__opened: content__opened },
    Details = reactExports.forwardRef(function (e, t) {
        const { opened: s } = useAccordion();
        return jsxRuntimeExports.jsx('div', {
            ...e,
            ref: t,
            className: cx(styles$y.content, s && styles$y.content__opened, e.className),
        });
    }),
    headerWrapper = 'Summary_headerWrapper_d7c7115',
    background$4 = 'Summary_background_48ba2ab7',
    background__scrollable = 'Summary_background__scrollable_a41402ee',
    header = 'Summary_header_789c868e',
    styles$x = {
        headerWrapper: headerWrapper,
        background: background$4,
        background__scrollable: background__scrollable,
        header: header,
    },
    Summary = reactExports.forwardRef(function ({ children: e, scrollable: t, background: s, ...r }, n) {
        return jsxRuntimeExports.jsxs('div', {
            ...r,
            ref: n,
            className: cx(styles$x.headerWrapper, r.className),
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$x.background, t && styles$x.background__scrollable, s),
                }),
                jsxRuntimeExports.jsx('div', { className: styles$x.header, children: e }),
            ],
        });
    }),
    base$s = 'Accordion_2b56632',
    styles$w = { base: base$s },
    Accordion = reactExports.forwardRef(function ({ opened: e, ...t }, s) {
        return jsxRuntimeExports.jsx(Context$2.Provider, {
            value: { opened: e },
            children: jsxRuntimeExports.jsx('div', {
                ...t,
                'data-name': 'Accordion',
                ref: s,
                className: cx(styles$w.base, t.className),
            }),
        });
    });
function playSound$1(e) {
    engine.call('PlaySound', e).catch((t) => {
        console.error('[lib/sounds.js] playSound(', e, '): ', t);
    });
}
((Accordion.Summary = Summary),
    (Accordion.Details = Details),
    (Accordion.AnimatedDetails = AnimatedDetails),
    (Accordion.Arrow = Arrow));
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
const base$r = 'Cbutton_24fc9a0c',
    base__main = 'Cbutton_base__main_2f199578',
    base__primary = 'Cbutton_base__primary_9da8a692',
    base__primaryGreen = 'Cbutton_base__primaryGreen_74301f4e',
    base__primaryRed = 'Cbutton_base__primaryRed_d184ac',
    base__secondary = 'Cbutton_base__secondary_22ff48c2',
    base__ghost = 'Cbutton_base__ghost_fd3acf91',
    base__extraSmall = 'Cbutton_base__extraSmall_f64ebb9e',
    base__small$7 = 'Cbutton_base__small_a71bc2a9',
    base__medium$5 = 'Cbutton_base__medium_d82a1b14',
    base__large = 'Cbutton_base__large_f02aee17',
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
    styles$v = {
        base: base$r,
        base__main: base__main,
        base__primary: base__primary,
        base__primaryGreen: base__primaryGreen,
        base__primaryRed: base__primaryRed,
        base__secondary: base__secondary,
        base__ghost: base__ghost,
        base__extraSmall: base__extraSmall,
        base__small: base__small$7,
        base__medium: base__medium$5,
        base__large: base__large,
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
    },
    Button = ({
        children: e,
        size: t,
        disabled: s,
        mixClass: r,
        onMouseEnter: n,
        onMouseMove: o,
        onMouseDown: a,
        onMouseUp: i,
        onMouseLeave: u,
        onClick: l,
        isFocused: c = !1,
        type: d = ButtonType.primary,
        soundHover: _ = 'highlight',
        soundClick: m = 'play',
    }) => {
        const p = reactExports.useRef(null),
            [x, f] = reactExports.useState(c),
            [E, h] = reactExports.useState(!1);
        return (
            reactExports.useEffect(() => {
                function e(e) {
                    x && null !== p.current && !p.current.contains(e.target) && f(!1);
                }
                return (
                    document.addEventListener('mousedown', e),
                    () => {
                        document.removeEventListener('mousedown', e);
                    }
                );
            }, [x]),
            reactExports.useEffect(() => {
                f(c);
            }, [c]),
            jsxRuntimeExports.jsxs('div', {
                ref: p,
                className: cx(
                    styles$v.base,
                    styles$v[`base__${d}`],
                    s && styles$v.base__disabled,
                    t && styles$v[`base__${t}`],
                    x && styles$v.base__focus,
                    E && styles$v.base__highlightActive,
                    r,
                ),
                onMouseEnter: function (e) {
                    s || (null !== _ && playSound$1(_), n && n(e));
                },
                onMouseMove: function (e) {
                    o && o(e);
                },
                onMouseUp: function (e) {
                    s || (i && i(e), h(!1));
                },
                onMouseDown: function (e) {
                    s ||
                        (null !== m && playSound$1(m),
                        a && a(e),
                        c && (s || (p.current && (p.current.focus(), f(!0)))),
                        h(!0));
                },
                onMouseLeave: function (e) {
                    s || (u && u(e), h(!1));
                },
                onClick: function (e) {
                    s || (l && l(e));
                },
                children: [
                    d !== ButtonType.ghost &&
                        jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                                jsxRuntimeExports.jsx('div', { className: styles$v.back }),
                                jsxRuntimeExports.jsx('span', { className: styles$v.texture }),
                            ],
                        }),
                    jsxRuntimeExports.jsxs('span', {
                        className: cx(styles$v.state, styles$v.state__default),
                        children: [
                            jsxRuntimeExports.jsx('span', { className: styles$v.stateDisabled }),
                            jsxRuntimeExports.jsx('span', { className: styles$v.stateHighlightHover }),
                            jsxRuntimeExports.jsx('span', { className: styles$v.stateHighlightActive }),
                        ],
                    }),
                    jsxRuntimeExports.jsx('span', {
                        className: styles$v.content,
                        lang: R.strings.settings.LANGUAGE_CODE(),
                        children: e,
                    }),
                ],
            })
        );
    },
    CButton = Button,
    base$q = 'Error_741eaf3c',
    alertIcon = 'Error_alertIcon_e771a05c',
    errorCaption = 'Error_errorCaption_89c19a4f',
    button$1 = 'Error_button_2d8a41b6',
    styles$u = { base: base$q, alertIcon: alertIcon, errorCaption: errorCaption, button: button$1 },
    Error$1 = ({ errorBtnClickHandler: e, errorBtnLabel: t, errorMessage: s }) =>
        jsxRuntimeExports.jsxs('div', {
            className: styles$u.base,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$u.alertIcon }),
                jsxRuntimeExports.jsx('div', { className: styles$u.errorCaption, children: s }),
                jsxRuntimeExports.jsx(CButton, {
                    size: ButtonSize.medium,
                    mixClass: styles$u.button,
                    onClick: e,
                    children: t,
                }),
            ],
        }),
    base$p = 'Spinner_9ec19f90',
    caption$1 = 'Spinner_caption_a44b585',
    gear = 'Spinner_gear_13ca7433',
    logo = 'Spinner_logo_22e624b',
    styles$t = { base: base$p, caption: caption$1, gear: gear, logo: logo },
    Spinner = ({ message: e, className: t, classNames: s }) =>
        jsxRuntimeExports.jsxs('div', {
            className: cx(styles$t.base, t),
            children: [
                e &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$t.caption, null == s ? void 0 : s.caption),
                        children: e,
                    }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$t.gear, null == s ? void 0 : s.gear) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$t.logo, null == s ? void 0 : s.logo) }),
            ],
        }),
    base$o = 'Waiting_f97f6e4b',
    blackOverlay = 'Waiting_blackOverlay_e659a6de',
    styles$s = { base: base$o, blackOverlay: blackOverlay },
    Waiting = ({
        errorBtnClickHandler: e,
        message: t = '',
        isError: s = !1,
        errorMessage: r = '',
        errorBtnLabel: n = R.strings.dialogs.disconnected.cancel(),
        overlayAlpha: o = '0.8',
    }) => {
        const a = reactExports.createRef();
        return (
            reactExports.useEffect(() => {
                const e = a.current;
                e && o && (e.style.opacity = o);
            }, [a, o]),
            jsxRuntimeExports.jsxs('div', {
                className: styles$s.base,
                children: [
                    jsxRuntimeExports.jsx('div', { className: styles$s.blackOverlay, ref: a }),
                    s
                        ? jsxRuntimeExports.jsx(Error$1, { errorBtnLabel: n, errorMessage: r, errorBtnClickHandler: e })
                        : jsxRuntimeExports.jsx(Spinner, { message: t }),
                ],
            })
        );
    },
    strings$1 = resources.resolve('strings'),
    emptyHandler = () => null,
    LoaderComponent = () =>
        jsxRuntimeExports.jsx(Waiting, {
            errorBtnClickHandler: emptyHandler,
            message: strings$1.readOrEmpty('waiting.loading'),
            overlayAlpha: '0.5',
        }),
    Loader = reactExports.memo(LoaderComponent),
    SwitcherContext = reactExports.createContext(void 0);
function useSwitcherContext() {
    const e = reactExports.useContext(SwitcherContext);
    if (!e) throw new Error('useSwitcherChecked must be used within SwitcherCheckedContext');
    return e;
}
const background$3 = 'Switcher_background_a88161d0',
    border$3 = 'Switcher_border_a19f907',
    overlay$2 = 'Switcher_overlay_de650936',
    selectedOverlay$1 = 'Switcher_selectedOverlay_959b7a8f',
    selectedItemBackground = 'Switcher_selectedItemBackground_f3f7ed7e',
    selectedItemBorder = 'Switcher_selectedItemBorder_7a1a3dd5',
    base$n = 'Switcher_825add0a',
    base__disabled$3 = 'Switcher_base__disabled_863a5f47',
    content$6 = 'Switcher_content_c83e02e5',
    content__fontAligned = 'Switcher_content__fontAligned_9342bb29',
    item = 'Switcher_item_ecea23cf',
    selectedOverlay__moved = 'Switcher_selectedOverlay__moved_beb6c80b',
    selectedItem = 'Switcher_selectedItem_c6995287',
    selectedItem__moved = 'Switcher_selectedItem__moved_5f74b720',
    selectedItemContent = 'Switcher_selectedItemContent_34994102',
    styles$r = {
        background: background$3,
        border: border$3,
        overlay: overlay$2,
        selectedOverlay: selectedOverlay$1,
        selectedItemBackground: selectedItemBackground,
        selectedItemBorder: selectedItemBorder,
        base: base$n,
        base__disabled: base__disabled$3,
        'base__size-small': 'Switcher_base__size-small_df4dee40',
        'base__size-medium': 'Switcher_base__size-medium_d287fe48',
        content: content$6,
        content__fontAligned: content__fontAligned,
        'base__type-horizontal': 'Switcher_base__type-horizontal_9ba1e4f',
        item: item,
        'base__type-vertical': 'Switcher_base__type-vertical_9ba1e4f',
        selectedOverlay__moved: selectedOverlay__moved,
        selectedItem: selectedItem,
        selectedItem__moved: selectedItem__moved,
        selectedItemContent: selectedItemContent,
    };
function SelectedItem({ children: e, classNames: t }) {
    const { checked: s } = useSwitcherContext();
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$r.selectedOverlay, s && styles$r.selectedOverlay__moved, null == t ? void 0 : t.base),
        children: jsxRuntimeExports.jsxs('div', {
            className: cx(styles$r.selectedItem, s && styles$r.selectedItem__moved, null == t ? void 0 : t.item),
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$r.selectedItemBackground, null == t ? void 0 : t.background),
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$r.selectedItemBorder, null == t ? void 0 : t.border),
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$r.selectedItemContent, null == t ? void 0 : t.content),
                    children: e,
                }),
            ],
        }),
    });
}
const sizes$7 = { small: 'small', medium: 'medium' },
    types$1 = { vertical: 'vertical', horizontal: 'horizontal' },
    Base$d = defineStyledComponent('Button', styles$r.base, {
        variants: {
            type: {
                [types$1.horizontal]: styles$r['base__type-horizontal'],
                [types$1.vertical]: styles$r['base__type-vertical'],
            },
            size: { [sizes$7.small]: styles$r['base__size-small'], [sizes$7.medium]: styles$r['base__size-medium'] },
            state: { disabled: styles$r.base__disabled },
        },
        defaultVariants: { type: types$1.vertical, size: sizes$7.small },
    }),
    Item = defineStyledComponent('ButtonItem', styles$r.item),
    Switcher$1 = reactExports.forwardRef(function (
        {
            type: e = types$1.vertical,
            checked: t,
            onMouseEnter: s,
            onSwitch: r,
            onClick: n,
            size: o = sizes$7.small,
            disabled: a = !1,
            autoAlignContent: i = !1,
            classNames: u,
            className: l,
            children: c,
            ...d
        },
        _,
    ) {
        const [m, p, x] = c,
            f = useSounds();
        const E = reactExports.useMemo(() => ({ checked: t }), [t]);
        return jsxRuntimeExports.jsx(SwitcherContext.Provider, {
            value: E,
            children: jsxRuntimeExports.jsxs(Base$d, {
                ...d,
                ref: _,
                type: e,
                size: o,
                state: a ? 'disabled' : void 0,
                className: cx(l, null == u ? void 0 : u.base),
                onMouseEnter: function (e) {
                    (f.play('mouse-enter', { target: Base$d.displayName, original: e }), null == s || s(e));
                },
                onClick: function (e) {
                    (f.play('click', { target: Base$d.displayName, original: e }), r(!t), null == n || n(e));
                },
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$r.background, null == u ? void 0 : u.background),
                    }),
                    jsxRuntimeExports.jsx('div', { className: cx(styles$r.border, null == u ? void 0 : u.border) }),
                    jsxRuntimeExports.jsx('div', { className: cx(styles$r.overlay, null == u ? void 0 : u.overlay) }),
                    jsxRuntimeExports.jsxs('div', {
                        className: cx(
                            styles$r.content,
                            i && styles$r.content__fontAligned,
                            null == u ? void 0 : u.content,
                        ),
                        children: [m, p, x],
                    }),
                ],
            }),
        });
    });
((Switcher$1.Item = Item),
    (Switcher$1.SelectedItem = SelectedItem),
    (Switcher$1.types = types$1),
    (Switcher$1.sizes = sizes$7));
const context = reactExports.createContext(null);
function useDragAndDrop() {
    const e = reactExports.useContext(context);
    return (assert(null !== e, 'DragAndDropContext is null'), e);
}
const sizes$6 = {
        s24x24: 's24x24',
        s48x48: 's48x48',
        s64x64: 's64x64',
        s80x80: 's80x80',
        s180x135: 's180x135',
        s232x174: 's232x174',
        s296x222: 's296x222',
        s360x270: 's360x270',
        s400x300: 's400x300',
        s600x450: 's600x450',
    },
    overlayTypes = {
        builtInEquipment: 'built_in_equipment',
        trophy: 'trophy',
        experimental: 'experimental',
        improved: 'improved',
        directiveBooster: 'directive_booster',
        directiveSubstitute: 'directive_substitute',
        custom: 'custom',
        none: 'none',
    },
    overlayTypesWithoutLevel = [
        overlayTypes.improved,
        overlayTypes.directiveBooster,
        overlayTypes.directiveSubstitute,
        overlayTypes.builtInEquipment,
    ],
    imageSizes = {
        [sizes$6.s24x24]: { width: 24, height: 24 },
        [sizes$6.s48x48]: { width: 48, height: 48 },
        [sizes$6.s64x64]: { width: 64, height: 64 },
        [sizes$6.s80x80]: { width: 80, height: 80 },
        [sizes$6.s180x135]: { width: 180, height: 135 },
        [sizes$6.s232x174]: { width: 232, height: 174 },
        [sizes$6.s296x222]: { width: 296, height: 222 },
        [sizes$6.s360x270]: { width: 360, height: 270 },
        [sizes$6.s400x300]: { width: 400, height: 300 },
        [sizes$6.s600x450]: { width: 600, height: 450 },
    },
    Base$c = defineStyledComponent('LoadoutItem', { element: Image$1 });
function getItemSizeFolderName(e) {
    switch (e) {
        case sizes$6.s80x80:
        case sizes$6.s64x64:
            return 'big';
        case sizes$6.s48x48:
            return 'small';
        default:
            return e;
    }
}
const LoadoutItem = reactExports.forwardRef(function (
    {
        name: e,
        path: t,
        overlayPath: s,
        size: r,
        overlayType: n = overlayTypes.none,
        level: o,
        classNames: a,
        className: i,
        width: u,
        height: l,
        ...c
    },
    d,
) {
    const _ =
            t ||
            (r === sizes$6.s24x24
                ? `vehParams.tooltips.bonuses.${e}`
                : `quests.bonuses.${getItemSizeFolderName(r)}.${e}`),
        m = (() => {
            if (s) return s;
            if (n === overlayTypes.custom) return void console.error('custom overlay passed without image source path');
            if (n === overlayTypes.none) return;
            const e = r === sizes$6.s64x64 ? sizes$6.s80x80 : r;
            return overlayTypesWithoutLevel.includes(n)
                ? `components.loadout_item.overlays.${e}.${n}`
                : o
                  ? `components.loadout_item.overlays.${e}.${n}_${o}_level`
                  : void console.error('Item level is not provided, but required!');
        })(),
        p = imageSizes[r];
    return jsxRuntimeExports.jsx(Base$c, {
        ...c,
        ref: d,
        path: _,
        width: u ?? p.width,
        height: l ?? p.height,
        className: cx(i, null == a ? void 0 : a.item),
        children:
            n !== overlayTypes.none && m && jsxRuntimeExports.jsx(Image$1, { path: m, width: '100%', height: '100%' }),
    });
});
((LoadoutItem.sizes = sizes$6), (LoadoutItem.overlayTypes = overlayTypes));
const selectedOverlay = 'Slot_selectedOverlay_5b63484a',
    disabledOverlay$1 = 'Slot_disabledOverlay_4d0ab64b',
    content$5 = 'Slot_content_dbf98123',
    slot = 'Slot_e5fcbf90',
    slot__hovered = 'Slot_slot__hovered_f72e51c4',
    slot__disabled = 'Slot_slot__disabled_ba2d5d0e',
    slot__small = 'Slot_slot__small_2d3a3a74',
    slot__medium = 'Slot_slot__medium_42bbdb11',
    slot__extraLarge = 'Slot_slot__extraLarge_d8070c25',
    content__disabled = 'Slot_content__disabled_1d609e12',
    emptyContent = 'Slot_emptyContent_ba97d4d8',
    styles$q = {
        selectedOverlay: selectedOverlay,
        disabledOverlay: disabledOverlay$1,
        content: content$5,
        slot: slot,
        slot__hovered: slot__hovered,
        slot__disabled: slot__disabled,
        slot__small: slot__small,
        slot__medium: slot__medium,
        slot__extraLarge: slot__extraLarge,
        content__disabled: content__disabled,
        emptyContent: emptyContent,
    },
    sizes$5 = { small: 'small', medium: 'medium', large: 'large', extraLarge: 'extraLarge' },
    Content$1 = defineStyledComponent('SlotContent'),
    Base$b = defineStyledComponent('Slot', styles$q.slot, {
        variants: {
            size: {
                [sizes$5.small]: styles$q.slot__small,
                [sizes$5.medium]: styles$q.slot__medium,
                [sizes$5.large]: styles$q.slot__large,
                [sizes$5.extraLarge]: styles$q.slot__extraLarge,
            },
            hovered: { true: styles$q.slot__hovered },
            selected: { true: styles$q.slot__selected },
            disabled: { true: styles$q.slot__disabled },
        },
    }),
    EmptySlot = defineStyledComponent('EmptySlot', styles$q.emptyContent),
    Slot = reactExports.forwardRef(function (
        {
            children: e,
            size: t,
            disabled: s = !1,
            hovered: r = !1,
            selected: n = !1,
            classNames: o,
            className: a,
            dataDropItem: i,
            ...u
        },
        l,
    ) {
        return jsxRuntimeExports.jsxs(Base$b, {
            ...u,
            ref: l,
            size: t,
            selected: n,
            disabled: s,
            hovered: r && !s,
            className: cx(null == o ? void 0 : o.slot, a),
            children: [
                n &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$q.selectedOverlay, null == o ? void 0 : o.selectedOverlay),
                    }),
                s &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$q.disabledOverlay, null == o ? void 0 : o.disabledOverlay),
                    }),
                jsxRuntimeExports.jsx(Content$1, {
                    className: cx(styles$q.content, s && styles$q.content__disabled, null == o ? void 0 : o.content),
                    'data-drop-item': i,
                    children: e || jsxRuntimeExports.jsx(EmptySlot, { className: null == o ? void 0 : o.emptyContent }),
                }),
            ],
        });
    });
((Slot.sizes = sizes$5), (Slot.Empty = EmptySlot));
const DragArea = reactExports.forwardRef(({ children: e, ...t }, s) => {
        const r = reactExports.useRef(null),
            n = useDragAndDrop();
        return (
            reactExports.useEffect(() => {
                if (!r.current) return;
                const e = r.current;
                return (
                    n.setupDragArea(e),
                    () => {
                        n.setupDragArea(null);
                    }
                );
            }, [n]),
            jsxRuntimeExports.jsx('div', { ...t, ref: assignRefs([r, s]), children: e })
        );
    }),
    DropArea = reactExports.forwardRef(({ children: e, ...t }, s) => {
        const r = reactExports.useRef(null),
            n = useDragAndDrop();
        return (
            reactExports.useEffect(() => {
                if (!r.current) return;
                const e = r.current;
                return n.registerDropArea(e);
            }, [n]),
            jsxRuntimeExports.jsx('div', { ...t, ref: assignRefs([r, s]), children: e })
        );
    });
function VirtualItem(e) {
    return 'container' in e ? reactDomExports.createPortal(e.children, e.container ?? document.body) : e.children;
}
function DragAndDrop({ children: e, needClamp: t = !0, onStart: s, onMove: r, onOver: n, onDrop: o }) {
    const a = useEmitter(),
        i = reactExports.useRef(new Set()),
        u = reactExports.useMemo(
            () =>
                observable.object({
                    virtualItem: null,
                    dropAreas: [],
                    dragArea: null,
                    realItem: null,
                    overArea: null,
                    overElement: null,
                    offsetPoint: { x: 0, y: 0 },
                    startPoint: { x: 0, y: 0 },
                    currentPosition: { x: 0, y: 0 },
                }),
            [],
        );
    (useEmitterSubscribe(a, 'onStart', s),
        useEmitterSubscribe(a, 'onMove', r),
        useEmitterSubscribe(a, 'onOver', n),
        useEmitterSubscribe(a, 'onDrop', o),
        reactExports.useEffect(
            () => () => {
                i.current.forEach((e) => e());
            },
            [],
        ));
    const l = reactExports.useMemo(() => {
        function e(e, s) {
            const r = u.dragArea ?? document.body,
                n = pxToRem$1(e.clientX - u.startPoint.x),
                o = pxToRem$1(e.clientY - u.startPoint.y);
            return t
                ? (function (e, t, s, r) {
                      const n = e.getBoundingClientRect(),
                          o = t.getBoundingClientRect(),
                          a = n.left - (u.startPoint.x - u.offsetPoint.x),
                          i = n.top - (u.startPoint.y - u.offsetPoint.y);
                      return { x: clamp(a, n.width - o.width + a, s), y: clamp(i, n.height - o.height + i, r) };
                  })(r, s, n, o)
                : { x: n, y: o };
        }
        function s(t) {
            const s = u.virtualItem;
            if (s) {
                const { x: r, y: n } = e(t, s);
                (runInAction(() => {
                    s && ((s.style.transform = `translate(${r}px, ${n}px)`), (u.currentPosition = { x: r, y: n }));
                }),
                    a.trigger('onMove', t, u));
            }
        }
        function r() {
            (i.current.forEach((e) => e()),
                runInAction(() => {
                    u.virtualItem &&
                        ((u.virtualItem = null),
                        (u.overArea = null),
                        (u.realItem = null),
                        (u.overElement = null),
                        (u.currentPosition = { x: 0, y: 0 }));
                }));
        }
        function n(e) {
            const t = u.virtualItem,
                s = e.target,
                n = u.dropAreas.find((e) => e === s || e.contains(s)) ?? null;
            (r(), a.trigger('onDrop', e, n, t, u));
        }
        function o(e) {
            const t = e.target;
            (t instanceof HTMLElement &&
                runInAction(() => {
                    u.overElement = t;
                    const e = u.dropAreas.find((e) => e === t || e.contains(t)) ?? null;
                    u.overArea = e;
                }),
                a.trigger('onOver', e, u));
        }
        return {
            get item() {
                return u.virtualItem;
            },
            get state() {
                return u;
            },
            setupDragArea: action((e) => {
                u.dragArea = e;
            }),
            registerDropArea: action(
                (e) => (
                    u.dropAreas.push(e),
                    () => {
                        const t = u.dropAreas.indexOf(e);
                        -1 !== t && u.dropAreas.splice(t, 1);
                    }
                ),
            ),
            start(e) {
                const t = e.currentTarget,
                    l = t.getAttribute('data-drop-item'),
                    c = t.getAttribute('data-drop-area');
                if (t instanceof HTMLElement && null !== l && null !== c) {
                    const d = document.createElement('div');
                    (d.setAttribute('data-drop-item', l), d.setAttribute('data-drop-area', c));
                    const _ = find(u.dropAreas, (e) => e.getAttribute('data-drop-area') === c),
                        m = t.getBoundingClientRect();
                    (s(e.nativeEvent),
                        runInAction(() => {
                            (r(),
                                (u.realItem = t),
                                (u.virtualItem = d),
                                (u.overArea = _ ?? null),
                                (u.offsetPoint = { x: e.clientX - m.left, y: e.clientY - m.top }),
                                (u.startPoint = { x: e.clientX, y: e.clientY }));
                        }),
                        a.trigger('onStart', e, u, t));
                    const p = document.body;
                    (p.addEventListener('mousemove', s),
                        p.addEventListener('mouseup', n),
                        p.addEventListener('mouseover', o),
                        i.current.add(() => {
                            (p.removeEventListener('mousemove', s),
                                p.removeEventListener('mouseup', n),
                                p.removeEventListener('mouseover', o));
                        }));
                }
            },
            reset: r,
            emitter: a,
        };
    }, [a, u, t]);
    return jsxRuntimeExports.jsx(context.Provider, { value: l, children: e });
}
((DragAndDrop.DragArea = DragArea), (DragAndDrop.DropArea = DropArea), (DragAndDrop.VirtualItem = VirtualItem));
const LEARNING_STATE = 'learning',
    IRRELEVANT_STATE = 'irrelevant',
    roles = { commander: 'commander', driver: 'driver', gunner: 'gunner', loader: 'loader', radioman: 'radioman' },
    perkStates = { learning: LEARNING_STATE, irrelevant: IRRELEVANT_STATE };
function fromVehicleBonusModel(e) {
    return {
        equipment: e.equipment,
        brotherhood: e.brotherhood,
        optionalDevices: e.optDevices,
        commander: e.commander,
        battleBooster: e.battleBooster,
    };
}
function fromNativeVehicleModel(e) {
    return { shortName: e.shortName, nation: e.nation, type: e.type, tier: e.tier };
}
function fromPerkModel(e) {
    return { name: e.name, state: e.state };
}
function fromBonusPerkModel(e) {
    return {
        role: e.role,
        newCount: e.newCount,
        trainingProgress: e.trainingProgress,
        skills: map$1(e.skills, fromPerkModel),
    };
}
function fromVehicleBonusDetailModel(e) {
    return { name: e.name, type: e.type, bonus: e.bonus };
}
function fromModel(e) {
    return {
        id: e.id,
        level: e.level,
        maxLevelAchieved: e.maxLevelAchieved,
        crewSkinId: e.crewSkinId,
        customizedSkin: e.customizedSkin,
        newPerksCount: e.newPerksCount,
        newBonusPerksCount: e.newBonusPerksCount,
        trainingProgress: e.trainingProgress,
        quickTraining: e.quickTraining,
        perks: map$1(e.perks, fromPerkModel),
        bonusPerks: map$1(e.bonusSkills, fromBonusPerkModel),
        fullName: e.fullName,
        role: e.role,
        tankmanSuitable: e.tankmanSuitable,
        insideNativeTank: e.isInNativeTank,
        replaceLocked: e.lockedByVehicle,
        nativeVehicle: fromNativeVehicleModel(e.nativeVehicle),
        skillsEfficiency: { level: e.skillsEfficiency, amount: e.skillsEfficiencyXP },
        currentVehicleSkillsEfficiency: e.currentVehicleSkillsEfficiency,
        vehicleBonus: fromVehicleBonusModel(e.vehicleBonus),
        vehicleBonusDetails: map$1(e.vehicleBonusDetails, fromVehicleBonusDetailModel),
    };
}
const background$2 = 'Checkbox_background_ae1fc797',
    border$2 = 'Checkbox_border_e1946121',
    overlay$1 = 'Checkbox_overlay_de55e0a5',
    base$m = 'Checkbox_e00b9a0',
    base__enabled = 'Checkbox_base__enabled_5bfdfae9',
    label$1 = 'Checkbox_label_58a00a56',
    base__small$6 = 'Checkbox_base__small_70ef629e',
    base__medium$4 = 'Checkbox_base__medium_70ef629e',
    base__checked = 'Checkbox_base__checked_70ef629e',
    checkIcon = 'Checkbox_checkIcon_968885f3',
    check = 'Checkbox_check_8341731a',
    styles$p = {
        background: background$2,
        border: border$2,
        overlay: overlay$1,
        base: base$m,
        base__enabled: base__enabled,
        label: label$1,
        base__small: base__small$6,
        base__medium: base__medium$4,
        base__checked: base__checked,
        checkIcon: checkIcon,
        check: check,
    },
    Check = reactExports.forwardRef(function ({ classNames: e, children: t, ...s }, r) {
        return jsxRuntimeExports.jsxs('div', {
            ...s,
            ref: r,
            className: cx(styles$p.check, s.className, null == e ? void 0 : e.base),
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$p.background, null == e ? void 0 : e.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$p.border, null == e ? void 0 : e.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$p.overlay, null == e ? void 0 : e.overlay) }),
                t,
            ],
        });
    }),
    sizes$4 = { medium: 'medium', small: 'small' },
    Base$a = defineStyledComponent('Checkbox', styles$p.base, {
        variants: {
            size: { [sizes$4.small]: styles$p.base__small, [sizes$4.medium]: styles$p.base__medium },
            checked: { true: styles$p.base__checked },
            state: { enabled: styles$p.base__enabled },
        },
    }),
    HeadlessCheckbox = reactExports.forwardRef(function (
        {
            checked: e,
            size: t = sizes$4.medium,
            disabled: s = !1,
            children: r,
            onMouseEnter: n,
            onClick: o,
            onCheckedChange: a,
            ...i
        },
        u,
    ) {
        const l = useSounds();
        return jsxRuntimeExports.jsx(Base$a, {
            ...i,
            ref: u,
            size: t,
            checked: e,
            state: s ? void 0 : 'enabled',
            onMouseEnter: function (e) {
                (l.play('mouse-enter', { target: Base$a.displayName, original: e }), null == n || n(e));
            },
            onClick: function (t) {
                (l.play('click', { target: Base$a.displayName, original: t }), null == o || o(t), a(!e));
            },
            children: r,
        });
    });
function Label({ className: e, children: t }) {
    return jsxRuntimeExports.jsx('div', { className: cx(styles$p.label, e), children: t });
}
const Checkbox = reactExports.forwardRef(function (
        { checked: e, classNames: t, children: s, checkPath: r = 'ui_kit.checkbox.icon_check', ...n },
        o,
    ) {
        return jsxRuntimeExports.jsxs(HeadlessCheckbox, {
            ...n,
            ref: o,
            checked: e,
            children: [
                jsxRuntimeExports.jsx(Check, {
                    className: null == t ? void 0 : t.check,
                    children: jsxRuntimeExports.jsx(Image$1, {
                        path: r,
                        className: cx(styles$p.checkIcon, null == t ? void 0 : t.checkIcon),
                    }),
                }),
                s && jsxRuntimeExports.jsx(Label, { className: null == t ? void 0 : t.label, children: s }),
            ],
        });
    }),
    base$l = 'SceneWrapper_52fcfc1e',
    base__down = 'SceneWrapper_base__down_4ece5089',
    base__moveSpaceDisabled = 'SceneWrapper_base__moveSpaceDisabled_1b1cd939',
    styles$o = { base: base$l, base__down: base__down, base__moveSpaceDisabled: base__moveSpaceDisabled },
    MOUSE_BUTTONS_LEFT$1 = 1,
    DELTA_Z = 600;
function SceneWrapper({
    children: e,
    moveSpace: t,
    onMouseOver3dScene: s,
    onDragStateChange: r,
    moveSpaceEnabled: n = !0,
    className: o,
    ...a
}) {
    const [i, u] = reactExports.useState(!1),
        [l, c] = reactExports.useState(!1),
        [d, _] = reactExports.useState({ x: 0, y: 0 }),
        m = reactExports.useRef(null);
    (reactExports.useEffect(() => {
        function e() {
            (u(!1), c(!1));
        }
        return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
    }, []),
        reactExports.useEffect(
            () => () => {
                s({ isOver3dScene: !1 });
            },
            [s],
        ));
    const p = useEvent((e) => (null == r ? void 0 : r(e)));
    function x(e) {
        if (!m.current) return;
        const { left: t, right: s, top: r, bottom: n } = m.current.getBoundingClientRect();
        return !(e.clientX < t || e.clientY < r || e.clientX > s || e.clientY > n);
    }
    function f(e) {
        return e.buttons === MOUSE_BUTTONS_LEFT$1 && x(e) && n;
    }
    return (
        reactExports.useEffect(() => {
            p(i && l);
        }, [i, p, l]),
        jsxRuntimeExports.jsx('div', {
            ...a,
            ref: m,
            className: cx(styles$o.base, i && styles$o.base__down, !n && styles$o.base__moveSpaceDisabled, o),
            onMouseDown: function (e) {
                (e.preventDefault(), f(e) && (u(!0), c(!0), _({ x: e.clientX, y: e.clientY })));
            },
            onMouseMove: function (e) {
                if ((e.preventDefault(), i && l)) {
                    if (!x(e)) return;
                    const s = e.clientX !== d.x ? e.clientX - d.x : 0,
                        r = e.clientY !== d.y ? e.clientY - d.y : 0;
                    (_({ x: e.clientX, y: e.clientY }), t({ dx: s, dy: r, dz: 0 }));
                }
            },
            onMouseUp: function () {
                u(!1);
            },
            onWheel: function (e) {
                if ((e.preventDefault(), !n || !x(e))) return;
                const s = e.deltaY < 0;
                t({ dx: 0, dy: 0, dz: s ? -DELTA_Z : DELTA_Z });
            },
            onMouseOver: function (e) {
                (s({ isOver3dScene: !0 }), f(e) && (u(!0), _({ x: e.clientX, y: e.clientY })));
            },
            onMouseOut: function () {
                (s({ isOver3dScene: !1 }), u(!1));
            },
            children: e,
        })
    );
}
function isEmptyObject(e) {
    for (const t in e) return !1;
    return !0;
}
const useResizeObserver = (e, t, s = !0) => {
        const r = reactExports.useCallback(
            (e) => {
                const s = e[0];
                t && t(s);
            },
            [t],
        );
        reactExports.useEffect(() => {
            if (!e.current || !s) return;
            const t = new index((e) => r(e));
            return (
                t.observe(e.current),
                () => {
                    t.disconnect();
                }
            );
        }, [r, s, e]);
    },
    getFromCallStack = (e = 1) => {
        var t;
        const s = new Error().stack;
        let r,
            n = R.invalid('resId'),
            o = '';
        return (
            s &&
                ((o = (null == (t = s.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : t[0]) || ''),
                (r = s.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                window.__feature && window.__feature !== r && window.subViews[r] && (n = window.subViews[r].id)),
            { callerUrl: o, caller: r, stack: s, resId: n }
        );
    };
let ClickOutsideManager$1 =
    ((_b = class {
        constructor() {
            (__publicField(this, 'entries', []),
                __publicField(this, '_listenMouse', !1),
                __publicField(this, 'onMouseDown', (e) => {
                    this.entries.forEach(({ container: t, callback: s }) => {
                        let r = e.target;
                        do {
                            if (r === t) return;
                            r = r.parentNode;
                        } while (r);
                        s();
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
            const s = e,
                r = t;
            ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== s || t !== r)),
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
    function s() {
        e.enabled && setTrackMouseOutside(!0);
    }
    function r() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', t),
                  document.body.removeEventListener('mouseleave', s))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', t),
                  document.body.addEventListener('mouseleave', s))
            : setTrackMouseOutside(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (t, s) => (
                (t[s] = (function (t) {
                    return (s) => {
                        e.listeners += 1;
                        let n = !0;
                        const o = `mouse${t}`,
                            a = internalMouse[t]((e) => s([e, 'outside']));
                        function i(e) {
                            s([e, 'inside']);
                        }
                        return (
                            window.addEventListener(o, i),
                            r(),
                            () => {
                                n && (a(), window.removeEventListener(o, i), (e.listeners -= 1), r(), (n = !1));
                            }
                        );
                    };
                })(s)),
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
function playSound(e) {
    engine.call('PlaySound', e).catch((t) => {
        console.error(`playSound('${e}'): `, t);
    });
}
initMouseEvents();
const sounds = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays = Object.keys(sounds).reduce((e, t) => ((e[t] = () => playSound(sounds[t])), e), {}),
    play = { ...plays, sound: playSound },
    sound = { play: play },
    ROMAN = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    ARABIC = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
function arabic2roman$1(e) {
    let t = '';
    for (let s = ARABIC.length - 1; s >= 0; s--) for (; e >= ARABIC[s]; ) ((t += ROMAN[s]), (e -= ARABIC[s]));
    return t;
}
const ROMAN_FORBIDDEN_LANGUAGE_CODES = ['ko', 'no'];
function getTextureUrl(e, t, s = 1) {
    return viewEnv.getChildTexturePath(e, t.width, t.height, s);
}
function getBgUrl(e, t, s) {
    return `url(${getTextureUrl(e, t, s)})`;
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
            const s = 'GFValueProxy';
            switch (typeof t) {
                case 'number':
                    return { __Type: s, name: e, number: t };
                case 'boolean':
                    return { __Type: s, name: e, bool: t };
                default:
                    return { __Type: s, name: e, string: t.toString() };
            }
        }),
    sendViewEvent = (e, t) => {
        const s = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...n } = t;
            return void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: s, type: e, ...n, arguments: createViewEventArguments$1(r) })
                : viewEnv.handleViewEvent({ __Type: s, type: e, ...n });
        }
        return viewEnv.handleViewEvent({ __Type: s, type: e });
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
function getBrowserTexturePath(e, t, s, r = 1) {
    return viewEnv.getWebBrowserTexturePath(e, t, s, r);
}
function addModelObserver(e, t, s) {
    return viewEnv.addDataChangedCallback(e, t, s);
}
function setSidePaddingsRem(e) {
    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, ALL_SIDES);
}
function getSize(e = 'px') {
    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
}
function resize(e, t, s = 'px') {
    return 'rem' === s ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
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
        const { top: t, right: s, bottom: r, left: n } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${s}rem`),
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
    env = { view: view, sound: sound },
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
        addCallback(e, t, s = 0, r = !0) {
            void 0 === this._updateHandler &&
                (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
            const n = env.view.addModelObserver(e, s, r);
            return (
                n > 0
                    ? ((this._callbacks[n] = t),
                      s > 0 && (this._views[s] ? this._views[s].push(n) : (this._views[s] = [n])))
                    : console.error("Can't add callback for model:", e),
                n
            );
        }
        removeCallback(e, t = 0) {
            let s = !1;
            return (
                void 0 !== e &&
                    void 0 !== this._callbacks[e] &&
                    ((s = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                s || console.error("Can't remove callback by id:", e),
                s
            );
        }
        _emmitDataChanged(e, t, s) {
            s.forEach((s) => {
                const r = this._callbacks[s];
                void 0 !== r && r(e, t);
            });
        }
    };
__publicField(_DataTracker, '__instance');
let DataTracker = _DataTracker;
function dumpViewModel(e) {
    const t = {};
    if ('object' != typeof e) return e;
    for (const s in e)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
            const r = Object.prototype.toString.call(e[s]);
            if (r.startsWith('[object CoherentArrayProxy]')) {
                const r = e[s];
                t[s] = [];
                for (let e = 0; e < r.length; e++) t[s].push({ value: dumpViewModel(r[e].value) });
            } else r.startsWith('[object class BW::WULF::ViewModel') ? (t[s] = dumpViewModel(e[s])) : (t[s] = e[s]);
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
        getTimeFormat: (e, t, s) => userLocale.getTimeFormat(e, t, void 0 === s || s),
        getTimeString: (e, t, s) => userLocale.getTimeString(e, t, void 0 === s || s),
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
            const s = { __Type: 'GFValueProxy', name: e };
            switch (typeof t) {
                case 'number':
                    s.number = t;
                    break;
                case 'boolean':
                    s.bool = t;
                    break;
                default:
                    s.string = t.toString();
            }
            return s;
        }),
    handleViewEvent$1 = (e, t) => {
        const s = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...n } = t;
            void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: s, type: e, ...n, arguments: createViewEventArguments(r) })
                : viewEnv.handleViewEvent({ __Type: s, type: e, ...n });
        } else viewEnv.handleViewEvent({ __Type: s, type: e });
    },
    sendMoveEvent = (e) => handleViewEvent$1(ViewEventType.MOVE, { isMouseEvent: !0, on: e }),
    sendCloseEvent = () => handleViewEvent$1(ViewEventType.CLOSE),
    sendClosePopOverEvent = () => handleViewEvent$1(ViewEventType.POP_OVER, { on: !1 }),
    sendShowContextMenuEvent = (e, t, s = 0) => {
        handleViewEvent$1(ViewEventType.CONTEXT_MENU, {
            isMouseEvent: !0,
            contentID: e,
            on: !0,
            decoratorID: s,
            args: t,
        });
    },
    sendShowPopOverEvent = (e, t, s, r, n = R.invalid('resId'), o) => {
        const a = env.view.getViewGlobalPosition(),
            { x: i, y: u, width: l, height: c } = s.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(i) + a.x,
                y: env.view.pxToRem(u) + a.y,
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
window.ViewEnvHelper = ViewEnvHelper;
const SHOW_DELAY_MIN = 100,
    SHOW_DELAY_DEFAULT = 400;
function getViewEventArguments(e) {
    return Object.entries(e || {}).map(([e, t]) => {
        const s = { __Type: 'GFValueProxy', name: e };
        switch (typeof t) {
            case 'number':
                s.number = t;
                break;
            case 'boolean':
                s.bool = t;
                break;
            case 'undefined':
                break;
            default:
                s.string = t.toString();
        }
        return s;
    });
}
const handleViewEvent = (e, t, s = {}, r = 0) => {
        viewEnv.handleViewEvent({
            __Type: 'GFViewEventProxy',
            type: ViewEventType.TOOLTIP,
            contentID: e,
            decoratorID: t,
            targetID: r,
            ...s,
        });
    },
    Tooltip$1 = ({
        children: e,
        contentId: t,
        args: s,
        onMouseEnter: r,
        onMouseLeave: n,
        onMouseDown: o,
        onClick: a,
        ignoreShowDelay: i = !1,
        ignoreMouseClick: u = !1,
        decoratorId: l = 0,
        isEnabled: c = !0,
        targetId: d = 0,
        onShow: _,
        onHide: m,
        ...p
    }) => {
        const x = reactExports.useRef({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
            f = reactExports.useMemo(() => d || getFromCallStack().resId, [d]),
            E = reactExports.useCallback(() => {
                (x.current.isVisible && x.current.timeoutId) ||
                    (handleViewEvent(t, l, { isMouseEvent: !0, on: !0, arguments: getViewEventArguments(s) }, f),
                    _ && _(),
                    (x.current.isVisible = !0));
            }, [t, l, s, f, _]),
            h = reactExports.useCallback(() => {
                if (x.current.isVisible || x.current.timeoutId) {
                    const e = x.current.timeoutId;
                    (e > 0 && (clearTimeout(e), (x.current.timeoutId = 0)),
                        handleViewEvent(t, l, { on: !1 }, f),
                        x.current.isVisible && m && m(),
                        (x.current.isVisible = !1));
                }
            }, [t, l, f, m]),
            b = reactExports.useCallback((e) => {
                x.current.isVisible &&
                    ((x.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                    (x.current.hideTimerId = window.setTimeout(() => {
                        const t = document.elementFromPoint(e.clientX, e.clientY);
                        t && !t.isSameNode(x.current.prevTarget) && h();
                    }, 200)));
            }, []);
        (reactExports.useEffect(() => {
            const e = x.current.hideTimerId;
            return (
                document.addEventListener('wheel', b, { capture: !0 }),
                () => {
                    (document.removeEventListener('wheel', b, { capture: !0 }), e && window.clearTimeout(e));
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
                      ((g = e.props.onMouseEnter),
                      (e) => {
                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                              (clearTimeout(x.current.timeoutId),
                              (x.current.timeoutId = window.setTimeout(E, i ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT)),
                              r && r(e),
                              g && g(e));
                      }),
                  onMouseLeave: ((e) => (t) => {
                      (h(), null == n || n(t), null == e || e(t));
                  })(e.props.onMouseLeave),
                  onClick: ((e) => (t) => {
                      (!1 === u && h(), null == a || a(t), null == e || e(t));
                  })(e.props.onClick),
                  onMouseDown: ((e) => (t) => {
                      (!1 === u && h(), null == o || o(t), null == e || e(t));
                  })(e.props.onMouseDown),
                  ...p,
              })
            : e;
        var g;
    },
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
    SimpleTooltip = ({ children: e, body: t, header: s, note: r, alert: n, args: o, ...a }) => {
        const i = reactExports.useMemo(() => {
            const e = { ...o, body: t, header: s, note: r, alert: n };
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
        }, [n, t, s, r, o]);
        return jsxRuntimeExports.jsx(Tooltip$1, {
            contentId: getTooltipContentId(null == o ? void 0 : o.hasHtmlContent),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: i,
            ...a,
            children: e,
        });
    },
    DynamicTooltipWrapper = ({ children: e, tooltipArgs: t, className: s }) => {
        if (!t) return e;
        const r = jsxRuntimeExports.jsx('div', { className: s, children: e });
        if (t.header || t.body) return jsxRuntimeExports.jsx(SimpleTooltip, { ...t, children: r });
        const { contentId: n } = t;
        return n
            ? jsxRuntimeExports.jsx(Tooltip$1, { ...t, contentId: n, children: r })
            : jsxRuntimeExports.jsx(BackportTooltip, { ...t, children: r });
    };
function format(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function snakeToCamel(e) {
    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
}
const convertNbsp = (e) => e.replace(/&nbsp;/g, ' '),
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
    styles$n = { noBreakWrapper: noBreakWrapper, lineBreak: lineBreak, newLine: newLine, word: word },
    createStyle = (e) => ({ color: `#${e}` }),
    getWordBlock = ({ elementList: e, textBlock: t, key: s }) => {
        const r = t.colorTag;
        return r
            ? colors[r]
                ? React.createElement(
                      'span',
                      { key: s, 'data-block-type': t.blockType, className: cx(styles$n.word, colors[r]) },
                      e,
                  )
                : React.createElement(
                      'span',
                      { key: s, 'data-block-type': t.blockType, className: styles$n.word, style: createStyle(r) },
                      e,
                  )
            : React.createElement('span', { key: s, 'data-block-type': t.blockType, className: styles$n.word }, e);
    },
    getLineBreak = ({ key: e }) =>
        React.createElement('span', { key: e, 'data-block-type': BlockType.LineBreak, className: styles$n.lineBreak }),
    getNewLine = ({ elementList: e, key: t }) =>
        React.createElement('span', { key: t, 'data-block-type': BlockType.NewLine, className: styles$n.newLine }, e),
    getNoBreakWrapper = ({ elementList: e, key: t }) =>
        React.createElement(
            'span',
            { key: t, 'data-block-type': BlockType.NoBreakWrapper, className: styles$n.noBreakWrapper },
            e,
        ),
    getBinding = ({ elementList: e, textBlock: t, key: s }) =>
        React.createElement(
            'span',
            { key: s, 'data-block-type': t.blockType },
            e.map((e) => React.createElement(React.Fragment, { key: s }, e)),
        ),
    RENDER_MAP = {
        [BlockType.Word]: getWordBlock,
        [BlockType.NoBreakSymbol]: getWordBlock,
        [BlockType.Binding]: getBinding,
        [BlockType.LineBreak]: getLineBreak,
        [BlockType.NewLine]: getNewLine,
        [BlockType.NoBreakWrapper]: getNoBreakWrapper,
    },
    renderChildList = (e, t, s) => {
        const r = [];
        return (
            e.childList.forEach((n, o) => {
                const a = `${s}_${o}`;
                if (isTextBlock(n)) {
                    const e = n,
                        t = e.blockType,
                        s = RENDER_MAP[t],
                        o = renderChildList(e, s, a);
                    r.push(...o);
                } else r.push(t({ elementList: [n], textBlock: e, key: a }));
            }),
            r
        );
    },
    renderTextBlock = (e, t) => {
        const s = [],
            r = e.blockType,
            n = RENDER_MAP[r],
            o = renderChildList(e, n, t);
        return (
            r === BlockType.NoBreakWrapper ? s.push(n({ elementList: o, textBlock: e, key: `${t}` })) : s.push(...o),
            s
        );
    },
    convertTextBlocksToJsxList = (e) => {
        const t = [];
        return (
            e.forEach((e, s) => {
                t.push(...renderTextBlock(e, s));
            }),
            t
        );
    },
    split = (e, t, s, r) => {
        let n = t.exec(e),
            o = 0;
        for (; n; ) (o !== n.index && s(e.slice(o, n.index)), r(n), (o = t.lastIndex), (n = t.exec(e)));
        o !== e.length && s(e.slice(o));
    },
    thaiGraphemeRegex = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
    splitThaiGraphemes = (e) => e.match(thaiGraphemeRegex) || [],
    splitNewLines = (e) => {
        const t = [{ blockType: BlockType.LineBreak, colorTag: '', childList: [e.charAt(0)] }];
        for (let s = 0; s < e.length - 1; s++)
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
        const s = /[\s\u002d]/g;
        let r = s.exec(e);
        if (!r) return [e];
        const n = [];
        let o = 0;
        for (; r; ) {
            const a = t.justifyContent === Alignment.FlexEnd ? r.index : s.lastIndex;
            (n.push(e.slice(o, a)), (o = a), (r = s.exec(e)));
        }
        return (o !== e.length && n.push(e.slice(o)), n);
    },
    splitByWordsMethod = IS_SPLIT_BY_SYMBOL ? splitWordsCustom : splitWords,
    splitSpecialSymbols = (e, t = '', s) => {
        const r = [];
        return (
            split(
                e,
                /(\n+|[\xa0\ufeff]+)/g,
                (e) => {
                    r.push({ blockType: BlockType.Word, colorTag: t, childList: splitByWordsMethod(e, s) });
                },
                (e) => {
                    const s = e[0],
                        n = SYMBOL_MAP[s.charAt(0)];
                    n === BlockType.LineBreak
                        ? r.push(...splitNewLines(s))
                        : r.push({ blockType: n, colorTag: t, childList: [s] });
                },
            ),
            r
        );
    },
    splitBinding = (e, t, s = '', r) => {
        const n = [];
        return (
            split(
                e,
                /(?:%\(|{)(.*?)[)}][sd]?/g,
                (e) => {
                    n.push(...splitSpecialSymbols(e, s, r));
                },
                (e) => {
                    const o = e[1],
                        a = void 0 === t[o] ? e[0] : t[o];
                    'string' == typeof a || 'number' == typeof a
                        ? n.push(...splitSpecialSymbols(String(a), s, r))
                        : n.push({ blockType: BlockType.Binding, colorTag: s, childList: [a] });
                },
            ),
            n
        );
    },
    splitColorTags = (e, t, s) => {
        const r = [];
        return (
            split(
                e,
                /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                (e) => {
                    r.push(...splitBinding(e, t, '', s));
                },
                (e) => {
                    r.push(...splitBinding(e[2] + e[3], t, e[1], s));
                },
            ),
            r
        );
    },
    wrapNoBreak = (e, t) => {
        if (!e) return [t];
        const s = [],
            r = { ...t, childList: t.childList.splice(0, 1) };
        if (e.blockType === BlockType.NoBreakWrapper) (e.childList.push(r), s.push(e));
        else {
            const t = { ...e, childList: e.childList.splice(-1) };
            (e.childList.length > 0 && s.push(e),
                s.push({ blockType: BlockType.NoBreakWrapper, colorTag: '', childList: [t, r] }));
        }
        return (t.childList.length > 0 && s.push(t), s);
    },
    processTextBlocks = (e) => {
        const t = [];
        let s = !1;
        return (
            e.forEach((e) => {
                if (e.blockType === BlockType.NoBreakSymbol) ((s = !0), t.push(...wrapNoBreak(t.pop(), e)));
                else (s ? t.push(...wrapNoBreak(t.pop(), e)) : t.push(e), (s = !1));
            }),
            t
        );
    },
    getJsxElementsList = (e, t = {}, s) => {
        if (!e) return [];
        const r = convertZwnbsp(convertNbsp(e)),
            n = processTextBlocks(splitColorTags(r, t, s));
        return convertTextBlocksToJsxList(n);
    },
    isVerticalOverflow = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
    getPositionDiff = (e, t) => e.offsetLeft + e.offsetWidth - t,
    isElementAvailableForTruncation = (e, t, s) => {
        if (!e || !e.textContent) return [!1, 0];
        if (e.offsetLeft > t) return [!1, 0];
        const r = getPositionDiff(e, t),
            n = e.textContent.length,
            o = e.offsetWidth / n,
            a = Math.ceil(r / o);
        if (r > 0) {
            const r = Math.floor((t - e.offsetLeft) / o);
            return r >= s ? [!0, s + a] : [!1, r];
        }
        const i = Math.max(s + a, 0);
        return n < i ? [!1, 0] : [!0, i];
    },
    truncateElement = (e, t, s, r, n, o) => {
        let a = -1,
            i = null;
        for (let u = s; u >= 0; u--) {
            const s = e[u],
                l = Number(e[u].getAttribute(BLOCK_TYPE));
            if (l === BlockType.LineBreak || l === BlockType.NewLine || l === BlockType.Binding) continue;
            const c = s.textContent || '';
            if (!(s.childElementCount > 1)) {
                const [e, l] = isElementAvailableForTruncation(s, r, n);
                if (!e) {
                    l > 0 && (n -= l);
                    continue;
                }
                const d = c.slice(0, c.length - l) + o,
                    _ = t[u];
                ((i = React.cloneElement(_, _.props, d)), (a = u));
                break;
            }
            {
                const e = s.children,
                    l = t[u],
                    d = l.props.children,
                    [_, m] = truncateElement(e, d, e.length - 1, r, n, o);
                if (!(_ < 0)) {
                    const e = d.slice(0, _);
                    ((i = React.cloneElement(l, l.props, e, m)), (a = u));
                    break;
                }
                n -= c.length;
            }
        }
        return [a, i];
    },
    searchLastInHeight = (e, t) => {
        let s = 0,
            r = e.length - 1;
        for (; r - s >= 0; ) {
            const n = s + Math.ceil(0.5 * (r - s));
            isVerticalOverflow(e[n], t) ? (r = n - 1) : (s = n + 1);
        }
        return s - 1;
    },
    truncateJsxElements = (e, t, s, r = TRUNCATE_IDENTIFY) => {
        const n = [...t],
            o = e.current;
        if (!o) return [n, !1];
        const a = s.height,
            i = s.width,
            u = o.lastElementChild;
        if (!isVerticalOverflow(u, a) && getPositionDiff(u, i) <= 0) return [n, !1];
        const l = o.children,
            c = searchLastInHeight(l, a);
        if (c < 0) return [n, !1];
        const [d, _] = truncateElement(l, n, c, i, r.length, r);
        return (_ && (n.splice(d, 1, _), n.splice(d + 1)), [n, !0]);
    },
    base$k = 'Extendedtext_34df2a2c',
    base__zeroPadding = 'Extendedtext_base__zeroPadding_bd1dbfd0',
    base__isTruncationAvailable = 'Extendedtext_base__isTruncationAvailable_21b9eaa',
    truncated = 'Extendedtext_truncated_6b4a3b66',
    truncated__hide = 'Extendedtext_truncated__hide_a75f6d91',
    unTruncated = 'Extendedtext_unTruncated_6ec70ccb',
    tooltip = 'Extendedtext_tooltip_7c24081e',
    styles$m = {
        base: base$k,
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
        onSizeChanged: s,
        binding: r,
        isTooltipEnable: n = !1,
        isTruncationAvailable: o = !1,
        customTooltipArgs: a,
        targetId: i,
        justifyContent: u = Alignment.FlexStart,
        alignContent: l = Alignment.FlexStart,
        truncateIdentify: c = TRUNCATE_IDENTIFY,
    }) => {
        const d = reactExports.useRef(null),
            _ = reactExports.useRef({ height: 0, width: 0 }),
            [m, p] = reactExports.useState({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
            x = reactExports.useMemo(() => getJsxElementsList(e, r, { justifyContent: u }), [r, u, e]),
            f = reactExports.useMemo(() => {
                if (n && m.isTruncated && (!r || !Object.values(r).find((e) => 'object' == typeof e)))
                    return {
                        args: { text: e, ...a, stringifyKwargs: r ? JSON.stringify(r) : '' },
                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                        targetId: i,
                    };
            }, [r, n, i, e, a, m.isTruncated]),
            E = reactExports.useCallback(
                (e) => {
                    ((_.current.width = e.contentRect.width), (_.current.height = e.contentRect.height));
                    const [t, r] = truncateJsxElements(d, x, _.current, c);
                    (p({ elementList: t, isTruncated: r, isTruncateFinished: !0 }), s && s(r));
                },
                [s, c, x],
            ),
            h = reactExports.useMemo(() => ({ justifyContent: u, alignContent: l }), [l, u]);
        return (
            useResizeObserver(d, E, o),
            jsxRuntimeExports.jsxs('div', {
                className: cx(styles$m.base, t, styles$m.base__zeroPadding, o && styles$m.base__isTruncationAvailable),
                style: h,
                children: [
                    jsxRuntimeExports.jsx('div', { className: styles$m.unTruncated, ref: d, children: x }),
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: f,
                        className: cx(
                            styles$m.tooltip,
                            styles$m[`tooltip__justify-${u}`],
                            styles$m[`tooltip__align-${l}`],
                        ),
                        children: jsxRuntimeExports.jsx('div', {
                            className: cx(styles$m.truncated, !m.isTruncateFinished && o && styles$m.truncated__hide),
                            style: h,
                            children: m.isTruncateFinished && o ? m.elementList : x,
                        }),
                    }),
                ],
            })
        );
    },
    ExtendedText = React.memo(ExtendedTextComponent),
    formats = { superCompact: 'superCompact', compact: 'compact', default: 'default', detailed: 'detailed' },
    sizes$3 = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48', x80x80: 'x80x80' },
    types = { accent: 'accent', cooldown: 'cooldown' },
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
    styles$l = {
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
    var s;
    const r = [];
    for (let n = 0; n < t.items.length; ++n)
        (t.separator &&
            n > 0 &&
            r.push(
                jsxRuntimeExports.jsx(
                    'span',
                    { className: cx(styles$l.detailedSeparator, styles$l[`detailedSeparator__${e}`]) },
                    'separator',
                ),
            ),
            r.push(
                jsxRuntimeExports.jsx(
                    'span',
                    {
                        className: cx(styles$l.item, styles$l[`item__${e}`]),
                        children:
                            null == (s = t.items[n])
                                ? void 0
                                : s
                                      .split(' ')
                                      .map((t, s) =>
                                          jsxRuntimeExports.jsx(
                                              'span',
                                              { className: cx(styles$l.part, styles$l[`part__${e}`]), children: t },
                                              `part_${s}`,
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
    const [s, ...r] = e,
        n = r.join(COLON);
    return {
        separator: !0,
        items:
            Number(s) > 0
                ? [null == (t = LOCALE_FORMATTERS[DAYS_FORMAT]) ? void 0 : t.call(LOCALE_FORMATTERS, s), n]
                : [n],
    };
}
function defaultFormatter(e, t) {
    var s;
    let r = 0;
    const n = e.length - 1,
        o = FORMAT_PARTS[t],
        a = { separator: !1, items: [] };
    for (; r < n && !(Number(e[r]) > 0); ++r);
    return (
        o[r] === MINUTES_FORMAT && 0 === Number(e[r])
            ? (a.items = [
                  null == (s = LOCALE_FORMATTERS[MINUTES_FORMAT])
                      ? void 0
                      : s.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
              ])
            : (a.items = [r, r + 1].map((t) => {
                  var s;
                  return null == (s = LOCALE_FORMATTERS[o[t]]) ? void 0 : s.call(LOCALE_FORMATTERS, e[t]);
              })),
        a
    );
}
function compactFormatter(e, t) {
    var s, r;
    const n = e.length,
        o = FORMAT_PARTS[t],
        a = { separator: !1, items: [] };
    for (let i = 0; i < n; ++i)
        if (Number(e[i]) > 0)
            return ((a.items = [null == (s = LOCALE_FORMATTERS[o[i]]) ? void 0 : s.call(LOCALE_FORMATTERS, e[i])]), a);
    return (
        (a.items = [
            null == (r = LOCALE_FORMATTERS[MINUTES_FORMAT]) ? void 0 : r.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
        ]),
        a
    );
}
const formatValue = (e, t) => {
        var s;
        return null == (s = FORMATTER[t]) ? void 0 : s.call(FORMATTER, format$2(e, FORMAT_PARTS[t]), t);
    },
    base$j = 'Timer_dac0a0aa',
    icon$6 = 'Timer_icon_a61415df',
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
    styles$k = {
        base: base$j,
        icon: icon$6,
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
    tick: s = 1,
    size: r = sizes$3.x24x24,
    type: n = types.accent,
    format: o = formats.default,
    autostart: a = !0,
    className: i,
    classNames: u,
}) {
    const [l] = useTicker(
        reactExports.useMemo(
            () => ({
                type: 'countdown',
                start: isDuration(e) ? e : seconds(e),
                limit: isDuration(t) ? t : seconds(t),
                tick: isDuration(s) ? s : seconds(s),
                autostart: a,
            }),
            [a, t, e, s],
        ),
    );
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$k.base, i),
        children: [
            jsxRuntimeExports.jsx('div', {
                className: cx(
                    styles$k.icon,
                    styles$k[`icon__${r}`],
                    styles$k[`icon__${n}`],
                    null == u ? void 0 : u.icon,
                ),
            }),
            o !== formats.superCompact &&
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$k.label,
                        styles$k[`label__${r}`],
                        styles$k[`label__${n}`],
                        null == u ? void 0 : u.label,
                    ),
                    children: jsxRuntimeExports.jsx(FormattedValue, { size: r, preFormatted: formatValue(l, o) }),
                }),
        ],
    });
}
((Timer.format = formats), (Timer.size = sizes$3), (Timer.type = types));
const Context$1 = reactExports.createContext(void 0);
function useProgressBar() {
    const e = reactExports.useContext(Context$1);
    if (!e) throw new Error('useProgressBar must be used within a ProgressBar');
    return e;
}
const fill = 'Filled_fill_32930ca9',
    filled = 'Filled_228d842a',
    wrapper$1 = 'Filled_wrapper_fac9294',
    filled__small = 'Filled_filled__small_94d1350d',
    pattern$2 = 'Filled_pattern_6ec8608d',
    filled__medium = 'Filled_filled__medium_94d1350d',
    styles$j = {
        fill: fill,
        filled: filled,
        wrapper: wrapper$1,
        filled__small: filled__small,
        pattern: pattern$2,
        filled__medium: filled__medium,
    },
    Filled = reactExports.forwardRef(function ({ className: e, classNames: t, ...s }, r) {
        const n = useProgressBar();
        return jsxRuntimeExports.jsx('div', {
            ...s,
            ref: r,
            className: cx(styles$j.filled, styles$j[`filled__${n.size}`], e),
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(styles$j.wrapper, null == t ? void 0 : t.wrapper),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$j.fill, null == t ? void 0 : t.fill),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$j.pattern, null == t ? void 0 : t.pattern),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                ],
            }),
        });
    });
function ProgressBarProvider(e) {
    const [t, s] = reactExports.useState(Math.min(e.value, e.maxValue)),
        [r, n] = reactExports.useState(e.maxValue),
        o = usePrevious(t),
        a = usePrevious(r),
        i = useEvent((t) => s(Math.min(t, e.maxValue)));
    (reactExports.useLayoutEffect(() => {
        i(e.value);
    }, [e.value, i]),
        reactExports.useLayoutEffect(() => {
            n(e.maxValue);
        }, [e.maxValue]));
    const u = useEvent((t) => {
        var s;
        return null == (s = e.onValueChange) ? void 0 : s.call(e, t);
    });
    reactExports.useEffect(() => {
        u(t);
    }, [u, t]);
    const l = useEvent((t) => {
        var s;
        return null == (s = e.onMaxValueChange) ? void 0 : s.call(e, t);
    });
    reactExports.useEffect(() => {
        l(r);
    }, [l, r]);
    const c = reactExports.useMemo(() => {
        if (void 0 !== o && void 0 !== a) return { value: o, maxValue: a, percentage: o / a };
    }, [o, a]);
    assert(r > 0, 'initMaxValue must be greater than 0');
    const d = reactExports.useMemo(
        () => ({
            value: t,
            maxValue: r,
            setValue: i,
            setMaxValue: n,
            size: e.size,
            previous: c,
            percentage: t / r,
            animationEnabled: e.animationEnabled,
        }),
        [t, r, i, n, c, e.size, e.animationEnabled],
    );
    return jsxRuntimeExports.jsx(Context$1.Provider, { value: d, children: e.children });
}
const background$1 = 'ProgressBar_background_b40cdfdf',
    base$i = 'ProgressBar_27c2305c',
    base__small$5 = 'ProgressBar_base__small_61ccd4be',
    base__medium$3 = 'ProgressBar_base__medium_478d985a',
    base__full$1 = 'ProgressBar_base__full_be7f12da',
    backgroundPattern$2 = 'ProgressBar_backgroundPattern_7e932276',
    styles$i = {
        background: background$1,
        base: base$i,
        base__small: base__small$5,
        base__medium: base__medium$3,
        base__full: base__full$1,
        backgroundPattern: backgroundPattern$2,
    },
    Base$9 = defineStyledComponent('ProgressBar', styles$i.base, {
        variants: { size: { small: styles$i.base__small, medium: styles$i.base__medium, full: styles$i.base__full } },
    });
function ProgressBar({ size: e = 'medium', className: t, classNames: s, filledClassNames: r, ...n }) {
    return jsxRuntimeExports.jsx(ProgressBarProvider, {
        size: e,
        ...n,
        children: jsxRuntimeExports.jsxs(Base$9, {
            size: e,
            className: t,
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$i.background, null == s ? void 0 : s.background) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$i.backgroundPattern, null == s ? void 0 : s.backgroundPattern),
                }),
                jsxRuntimeExports.jsx(Filled, { classNames: r }),
                n.children,
            ],
        }),
    });
}
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
const multiValueTypes = [
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
        RewardType.BonusX5,
        RewardType.CrewBonusX3,
        RewardType.EpicSelectToken,
        RewardType.Comp7TokenWeeklyReward,
        RewardType.DeluxeGift,
        RewardType.BattleBoosterGift,
        RewardType.OptionalDevice,
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
    getDogTypeImage = (e, t, s) => {
        const r = DOG_TAG_FOLDER_NAMES[e];
        if (r) {
            const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                o = n.$dyn(s);
            return !o && DOG_TAG_DEFAULT_ICON_NAME[e] ? `${n.$dyn(DOG_TAG_DEFAULT_ICON_NAME[e])}` : `${o}`;
        }
        return (
            console.error('Unreachable branch: add dogTagType and icon folder for corresponding icon matching'),
            ''
        );
    },
    getRewardImage = (e, t = ImageSize.Small) => {
        const { name: s, type: r, value: n, icon: o, item: a, dogTagType: i } = e,
            u = t === ImageSize.S24x24 ? ImageSize.Small : t,
            l = getSizeFolder(u);
        switch (s) {
            case 'basic':
            case 'plus':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}_${n}`;
            case 'items':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
            case 'blueprints':
            case 'blueprintsAny':
            case 'finalBlueprints':
                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${o}`;
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
                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
            case 'crewBooks':
                return `R.images.gui.maps.icons.crewBooks.books.${u}.${o}`;
            case 'dogTagComponents':
                return getDogTypeImage(i, u, o);
            case 'dossier_badge':
                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${o}`;
            case 'dossier_achievement':
                return `R.images.gui.maps.icons.achievement.${l}.${o}`;
            case 'xp':
            case 'xpFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
            case 'creditsFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
            case 'tankmenXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
            case 'dailyXPFactor':
            case 'freeXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
            case 'premiumTank':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
            case 'styleProgressToken':
                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
            case 'collectionItem':
                return `R.images.gui.maps.icons.collectionItems.${l}.${o}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
        }
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
        }
    },
    getFormattedValue = (e, t) => {
        const s = resources.resolve('intl');
        if (void 0 === e) return null;
        switch (t) {
            case ValueTypes.MULTI: {
                const t = Number(e);
                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
            }
            case ValueTypes.CURRENCY:
            case ValueTypes.NUMBER:
                return s.formatNumber(s.numberFormats[0] || 'integral', Number(e));
            case ValueTypes.PREMIUM_PLUS: {
                const t = Number(e);
                return isNaN(t) ? e : null;
            }
            default:
                return e;
        }
    },
    formatPrintf = (e, t) =>
        e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
            const s = 0 === e.indexOf('%') ? 2 : 1;
            return String(t[e.slice(s, -s)]);
        }),
    base$h = 'Reward_d65e1e12',
    base__s24x24 = 'Reward_base__s24x24_954b5cee',
    base__s48x48 = 'Reward_base__s48x48_21f091ec',
    base__small$4 = 'Reward_base__small_3eddf28d',
    base__s80x80 = 'Reward_base__s80x80_21f091ec',
    base__big$1 = 'Reward_base__big_e23f2c77',
    base__s128x100 = 'Reward_base__s128x100_1e08e04b',
    base__s180x135 = 'Reward_base__s180x135_93fc57c',
    base__s232x174 = 'Reward_base__s232x174_2904ea89',
    base__s296x222 = 'Reward_base__s296x222_52f0615b',
    base__s400x300 = 'Reward_base__s400x300_a8627e1b',
    base__s600x450 = 'Reward_base__s600x450_e27f3852',
    base__dynamicBox = 'Reward_base__dynamicBox_45d7782b',
    tooltipWrapper = 'Reward_tooltipWrapper_75b925a5',
    icon$5 = 'Reward_icon_e152f13b',
    overlay = 'Reward_overlay_8cbe65c9',
    highlight = 'Reward_highlight_f1cd08e0',
    image = 'Reward_image_1cbfa020',
    image__s24x24 = 'Reward_image__s24x24_954b5cee',
    image__s48x48 = 'Reward_image__s48x48_21f091ec',
    image__small = 'Reward_image__small_3eddf28d',
    image__s80x80 = 'Reward_image__s80x80_21f091ec',
    image__big = 'Reward_image__big_e23f2c77',
    image__s128x100 = 'Reward_image__s128x100_1e08e04b',
    image__s180x135 = 'Reward_image__s180x135_93fc57c',
    image__s232x174 = 'Reward_image__s232x174_2904ea89',
    image__s296x222 = 'Reward_image__s296x222_52f0615b',
    image__s400x300 = 'Reward_image__s400x300_a8627e1b',
    image__s600x450 = 'Reward_image__s600x450_e27f3852',
    image__fixedBox = 'Reward_image__fixedBox_e45bdd8a',
    info = 'Reward_info_81cb3342',
    info__multi = 'Reward_info__multi_465d34bd',
    info__credits = 'Reward_info__credits_1643219',
    info__gold = 'Reward_info__gold_c751be5d',
    info__crystal = 'Reward_info__crystal_18ccfdd0',
    info__premiumTank = 'Reward_info__premiumTank_7862152',
    title = 'Reward_title_fbcf4b5',
    timer = 'Reward_timer_22ba7b8b',
    styles$h = {
        base: base$h,
        base__s24x24: base__s24x24,
        base__s48x48: base__s48x48,
        base__small: base__small$4,
        base__s80x80: base__s80x80,
        base__big: base__big$1,
        base__s128x100: base__s128x100,
        base__s180x135: base__s180x135,
        base__s232x174: base__s232x174,
        base__s296x222: base__s296x222,
        base__s400x300: base__s400x300,
        base__s600x450: base__s600x450,
        base__dynamicBox: base__dynamicBox,
        tooltipWrapper: tooltipWrapper,
        icon: icon$5,
        overlay: overlay,
        highlight: highlight,
        image: image,
        image__s24x24: image__s24x24,
        image__s48x48: image__s48x48,
        image__small: image__small,
        image__s80x80: image__s80x80,
        image__big: image__big,
        image__s128x100: image__s128x100,
        image__s180x135: image__s180x135,
        image__s232x174: image__s232x174,
        image__s296x222: image__s296x222,
        image__s400x300: image__s400x300,
        image__s600x450: image__s600x450,
        image__fixedBox: image__fixedBox,
        info: info,
        info__multi: info__multi,
        info__credits: info__credits,
        info__gold: info__gold,
        info__crystal: info__crystal,
        info__premiumTank: info__premiumTank,
        title: title,
        timer: timer,
    },
    images = resources.resolve('images'),
    SIZE_MAP = new Map([
        [ImageSize.S24x24, ImageSize.Small],
        [ImageSize.S48x48, ImageSize.Small],
    ]),
    Reward = ({
        name: e,
        image: t,
        isPeriodic: s = !1,
        isFixedBoxSize: r = !0,
        size: n = ImageSize.Big,
        special: o,
        value: a,
        valueType: i,
        title: u,
        style: l,
        className: c,
        classNames: d,
        tooltipArgs: _,
        periodicIconTooltipArgs: m,
    }) => {
        const p = SIZE_MAP.has(n) ? SIZE_MAP.get(n) : n,
            x = getBottomHighlight(n, o),
            f = getOverlay(o),
            E = getFormattedValue(a, i),
            h = useTooltip({
                contentId: (null == _ ? void 0 : _.contentId) ?? 0,
                args: null == _ ? void 0 : _.args,
                resId: null == _ ? void 0 : _.resId,
            }),
            b = useSimpleTooltip({ header: null == m ? void 0 : m.header, body: null == m ? void 0 : m.body });
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$h.base, styles$h[`base__${n}`], !r && styles$h.base__dynamicBox, c),
            style: l,
            ...h,
            children: [
                jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [
                        jsxRuntimeExports.jsxs('div', {
                            className: cx(
                                styles$h.image,
                                r ? styles$h.image__fixedBox : styles$h[`image__${n}`],
                                null == d ? void 0 : d.image,
                            ),
                            children: [
                                x &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$h.highlight, null == d ? void 0 : d.highlight),
                                        style: {
                                            backgroundImage: `url(${images.readOrEmpty(`quests.bonuses.${p}.${x}_highlight`)})`,
                                        },
                                    }),
                                t &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$h.icon, null == d ? void 0 : d.rewardIcon),
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                f &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$h.overlay, null == d ? void 0 : d.overlay),
                                        style: {
                                            backgroundImage: `url(${images.readOrEmpty(`quests.bonuses.${p}.${f}_overlay`)})`,
                                        },
                                    }),
                            ],
                        }),
                        E &&
                            jsxRuntimeExports.jsx('div', {
                                className: cx(
                                    styles$h.info,
                                    styles$h[`info__${e}`],
                                    i === ValueTypes.MULTI && styles$h.info__multi,
                                    null == d ? void 0 : d.info,
                                ),
                                children: E,
                            }),
                        u && jsxRuntimeExports.jsx('div', { className: styles$h.title, children: u }),
                    ],
                }),
                s &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$h.timer, null == d ? void 0 : d.periodicIcon),
                        ...b,
                    }),
            ],
        });
    },
    base$g = 'RewardsList_b956755b',
    base__vertical = 'RewardsList_base__vertical_59db3c9f',
    reward = 'RewardsList_reward_fc200613',
    reward__vertical = 'RewardsList_reward__vertical_5f09c6e0',
    boxRewardClassName = 'RewardsList_boxRewardClassName_882c908d',
    styles$g = {
        base: base$g,
        base__vertical: base__vertical,
        reward: reward,
        reward__vertical: reward__vertical,
        boxRewardClassName: boxRewardClassName,
    };
reactExports.memo(function ({
    data: e,
    isFixedBoxSize: t,
    size: s = ImageSize.Big,
    isVertical: r = !1,
    count: n,
    classMix: o,
    rewardItemClassMix: a,
    boxRewardTooltip: i,
    boxRewardValue: u,
    boxRewardClassName: l,
    boxRewardClassNames: c,
}) {
    const d = resources.resolve('strings'),
        _ = resources.resolve('images'),
        m = s === ImageSize.S24x24 ? ImageSize.Small : s,
        p = n && n < e.length ? `${_.readOrEmpty(`quests.bonuses.${m}.default`)}` : '',
        x =
            u ||
            formatPrintf(d.readOrEmpty('tooltips.quests.awards.additional.bottom'), { count: e.length - (n || 0) }),
        f = cx(styles$g.base, r && styles$g.base__vertical, o),
        E = cx(styles$g.reward, r && styles$g.reward__vertical, a);
    return jsxRuntimeExports.jsx('div', {
        className: f,
        children: p
            ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: [
                      e
                          .slice(0, n)
                          .map((e, r) =>
                              jsxRuntimeExports.jsx(
                                  'div',
                                  {
                                      className: E,
                                      children: jsxRuntimeExports.jsx(Reward, { size: s, isFixedBoxSize: t, ...e }),
                                  },
                                  r,
                              ),
                          ),
                      jsxRuntimeExports.jsx('div', {
                          className: E,
                          children: jsxRuntimeExports.jsx(Reward, {
                              name: 'more',
                              isFixedBoxSize: t,
                              image: p,
                              size: s,
                              value: x,
                              tooltipArgs: i,
                              className: cx(styles$g.boxRewardClassName, l),
                              classNames: c,
                          }),
                      }),
                  ],
              })
            : e.map((e, r) =>
                  jsxRuntimeExports.jsx(
                      'div',
                      { className: E, children: jsxRuntimeExports.jsx(Reward, { size: s, isFixedBoxSize: t, ...e }) },
                      r,
                  ),
              ),
    });
});
const TabsContext = reactExports.createContext(null);
function useTabsContext() {
    const e = reactExports.useContext(TabsContext);
    return (assert(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
function Content({ children: e, keyOverride: t }) {
    const s = useTabsContext();
    return jsxRuntimeExports.jsx(reactExports.Fragment, { children: e(s.active) }, t ?? s.active);
}
const themes = { primary: 'primary', custom: 'custom' },
    sizes$2 = { large: 'large', medium: 'medium', small: 'small' },
    outerBorderImage = 'HorizontalTabs_outerBorderImage_8085e49e',
    mainBorderImage = 'HorizontalTabs_mainBorderImage_558d1c3f',
    base$f = 'HorizontalTabs_69e3c6f3',
    outerBorder = 'HorizontalTabs_outerBorder_3255d0c5',
    mainBorder = 'HorizontalTabs_mainBorder_61e34c2c',
    content$4 = 'HorizontalTabs_content_1ae3c4bd',
    styles$f = {
        outerBorderImage: outerBorderImage,
        mainBorderImage: mainBorderImage,
        base: base$f,
        'base__size-small': 'HorizontalTabs_base__size-small_75fae891',
        'base__size-medium': 'HorizontalTabs_base__size-medium_afc0934f',
        'base__size-large': 'HorizontalTabs_base__size-large_12c75e24',
        outerBorder: outerBorder,
        'base__theme-primary': 'HorizontalTabs_base__theme-primary_5e3af03e',
        mainBorder: mainBorder,
        content: content$4,
    },
    Base$8 = defineStyledComponent('Tabs', styles$f.base, {
        variants: {
            size: {
                [sizes$2.large]: styles$f['base__size-large'],
                [sizes$2.medium]: styles$f['base__size-medium'],
                [sizes$2.small]: styles$f['base__size-small'],
            },
            theme: { [themes.primary]: styles$f['base__theme-primary'], [themes.custom]: void 0 },
        },
    }),
    Switcher = reactExports.forwardRef(function ({ children: e, classNames: t, ...s }, r) {
        const n = useTabsContext();
        return jsxRuntimeExports.jsx(Base$8, {
            ...s,
            ref: r,
            className: cx(s.className, null == t ? void 0 : t.base),
            size: n.size,
            theme: n.theme,
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(styles$f.outerBorder, null == t ? void 0 : t.outerBorder),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$f.outerBorderImage, null == t ? void 0 : t.outerBorderImage),
                    }),
                    jsxRuntimeExports.jsxs('div', {
                        className: cx(styles$f.mainBorder, null == t ? void 0 : t.mainBorder),
                        children: [
                            jsxRuntimeExports.jsx('div', {
                                className: cx(styles$f.mainBorderImage, null == t ? void 0 : t.mainBorderImage),
                            }),
                            jsxRuntimeExports.jsx('div', {
                                className: cx(styles$f.content, null == t ? void 0 : t.content),
                                children: e,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    border$1 = 'Tab_border_a63aeb3f',
    background = 'Tab_background_4c9b3eb9',
    backgroundPattern$1 = 'Tab_backgroundPattern_417be4b5',
    innerBorderImage = 'Tab_innerBorderImage_adadda5f',
    base$e = 'Tab_f59c2b00',
    content$3 = 'Tab_content_b3f6c22b',
    base__active$1 = 'Tab_base__active_0',
    base__inactive = 'Tab_base__inactive_0',
    styles$e = {
        border: border$1,
        background: background,
        backgroundPattern: backgroundPattern$1,
        innerBorderImage: innerBorderImage,
        base: base$e,
        'base__theme-primary': 'Tab_base__theme-primary_90fd5ee',
        content: content$3,
        'base__size-small': 'Tab_base__size-small_0',
        'base__size-medium': 'Tab_base__size-medium_0',
        'base__size-large': 'Tab_base__size-large_0',
        base__active: base__active$1,
        base__inactive: base__inactive,
    },
    Base$7 = defineStyledComponent('Tab', styles$e.base, {
        variants: {
            size: {
                [sizes$2.large]: styles$e['base__size-large'],
                [sizes$2.medium]: styles$e['base__size-medium'],
                [sizes$2.small]: styles$e['base__size-small'],
            },
            theme: { [themes.primary]: styles$e['base__theme-primary'], [themes.custom]: void 0 },
            state: { active: styles$e.base__active, inactive: styles$e.base__inactive },
        },
        defaultVariants: { size: sizes$2.medium, theme: themes.primary },
    }),
    HeadlessTab = reactExports.forwardRef(function (
        { theme: e, size: t, tabId: s, active: r, children: n, onClick: o, onMouseEnter: a, ...i },
        u,
    ) {
        const l = useSounds();
        return jsxRuntimeExports.jsx(Base$7, {
            ...i,
            ref: u,
            theme: e,
            size: t,
            state: r === s ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (r !== s && l.play('mouse-enter', { target: Base$7.displayName, original: e }), null == a || a(e));
            },
            onClick: function (e) {
                (r !== s && l.play('click', { target: Base$7.displayName, original: e }), null == o || o(e));
            },
            children: n,
        });
    });
function Tab({ tabId: e, classNames: t, className: s, children: r, ...n }) {
    const o = useTabsContext();
    return jsxRuntimeExports.jsxs(HeadlessTab, {
        'data-test-id': `${e}Tab`,
        ...n,
        tabId: e,
        theme: o.theme,
        size: o.size,
        active: o.active,
        className: cx(null == t ? void 0 : t.base, s),
        onClick: (t) => {
            var s;
            (null == (s = n.onClick) || s.call(n, t), o.change(e));
        },
        children: [
            jsxRuntimeExports.jsx('div', { className: cx(styles$e.background, null == t ? void 0 : t.background) }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$e.backgroundPattern, null == t ? void 0 : t.backgroundPattern),
            }),
            jsxRuntimeExports.jsx('div', { className: cx(styles$e.border, null == t ? void 0 : t.border) }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$e.innerBorderImage, null == t ? void 0 : t.borderImage),
            }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$e.content, null == t ? void 0 : t.content),
                children: r,
            }),
        ],
    });
}
function Tabs({ active: e, theme: t, size: s, children: r, onActiveChange: n }) {
    const [o, a] = reactExports.useState(e),
        i = reactExports.useRef(e),
        u = reactExports.useMemo(() => ({ active: o, theme: t, size: s, change: a }), [o, s, t]);
    return (
        reactExports.useLayoutEffect(() => {
            a(e);
        }, [e]),
        reactExports.useEffect(() => {
            i.current !== o && ((i.current = o), null == n || n(o));
        }, [o, n]),
        jsxRuntimeExports.jsx(TabsContext.Provider, { value: u, children: r })
    );
}
((Tabs.Switcher = Switcher), (Tabs.Tab = Tab), (Tabs.Content = Content));
const sizes$1 = { small: 'small', medium: 'medium', full: 'full' },
    BASE_COMPONENT_NAME = 'Slider',
    Context = reactExports.createContext(void 0);
function useSlider() {
    const e = reactExports.useContext(Context);
    if (!e) throw new Error('useSlider must be used within a Slider');
    return e;
}
const MOUSE_BUTTONS_LEFT = 1;
function SliderProvider({ step: e, limit: t, size: s, baseRef: r, disabled: n, children: o, onValueChange: a }) {
    const { value: i, percentage: u, maxValue: l, setValue: c } = useProgressBar(),
        [d, _] = reactExports.useState(!1),
        m = useSounds(),
        p = useEvent(function (t) {
            if (r.current && t >= 0) {
                const s = r.current.getBoundingClientRect(),
                    n = (t - s.left) / s.width,
                    o = Math.max(0, Math.min(1, n));
                return Math.round((o * l) / e) * e;
            }
            return i;
        }),
        x = useEvent((e, t, s, r = BASE_COMPONENT_NAME) => {
            t > e
                ? m.play('increaseAmount', { target: r, original: s })
                : t < e && m.play('decreaseAmount', { target: r, original: s });
        }),
        f = useEvent((e) => {
            const s = clamp(0, t, e);
            return (c(s), null == a || a(s), s);
        }),
        E = useEvent(function () {
            _(!0);
        }),
        h = useEvent((e) => {
            if (e.buttons === MOUSE_BUTTONS_LEFT) {
                const t = f(p(e.clientX));
                x(i, t, e);
            }
        });
    reactExports.useEffect(() => {
        if (d)
            return (
                window.addEventListener('mousemove', h),
                window.addEventListener('mouseup', e),
                document.body.addEventListener('mouseleave', e),
                () => {
                    (window.removeEventListener('mousemove', h),
                        window.removeEventListener('mouseup', e),
                        document.body.removeEventListener('mouseleave', e));
                }
            );
        function e() {
            _(!1);
        }
    }, [d, h]);
    const b = useEvent(function (t) {
            const s = f(i + e * Math.sign(t.deltaY));
            x(i, s, t);
        }),
        g = useEvent(function (e, t) {
            ((t = f(t)), x(i, t, e, 'Controls'));
        }),
        y = useEvent(function (e) {
            const t = f(p(e.clientX));
            x(i, t, e);
        }),
        v = reactExports.useMemo(
            () => ({
                size: s,
                step: e,
                limit: t,
                baseRef: r,
                calculateValue: p,
                handleDragStart: E,
                value: i,
                maxValue: l,
                percentage: u,
                disabled: n,
                changeValue: f,
                handleWheel: b,
                handleControlClick: g,
                handleSliderClick: y,
            }),
            [e, t, s, r, p, E, f, i, l, u, n, b, g, y],
        );
    return jsxRuntimeExports.jsx(Context.Provider, { value: v, children: o });
}
const base$d = 'Controls_9c96becc',
    button = 'Controls_button_1d659791',
    button__plus = 'Controls_button__plus_f8015a9d',
    button__disabled = 'Controls_button__disabled_ebe779af',
    styles$d = { base: base$d, button: button, button__plus: button__plus, button__disabled: button__disabled },
    Base$6 = defineStyledComponent('Controls', styles$d.base),
    Controls = reactExports.forwardRef(function ({ classNames: e, ...t }, s) {
        const { step: r, value: n, disabled: o, handleWheel: a, handleControlClick: i, limit: u } = useSlider();
        return o
            ? null
            : jsxRuntimeExports.jsxs(Base$6, {
                  ...t,
                  ref: s,
                  onWheel: a,
                  children: [
                      jsxRuntimeExports.jsx(Image$1, {
                          path: 'ui.progressbar.minus',
                          width: '24rem',
                          height: '24rem',
                          className: cx(
                              styles$d.button,
                              n <= 0 && styles$d.button__disabled,
                              null == e ? void 0 : e.button,
                              null == e ? void 0 : e.minusButton,
                          ),
                          onClick: (e) => i(e, n - r),
                      }),
                      jsxRuntimeExports.jsx(Image$1, {
                          path: 'ui.progressbar.plus',
                          width: '24rem',
                          height: '24rem',
                          className: cx(
                              styles$d.button,
                              styles$d.button__plus,
                              n >= u && styles$d.button__disabled,
                              null == e ? void 0 : e.button,
                              null == e ? void 0 : e.plusButton,
                          ),
                          onClick: (e) => i(e, n + r),
                      }),
                  ],
              });
    }),
    base$c = 'InteractiveArea_8d75e351',
    styles$c = { base: base$c },
    InteractiveArea = reactExports.forwardRef(function ({ className: e, onClick: t, onMouseDown: s, ...r }, n) {
        const { disabled: o, handleDragStart: a, handleWheel: i, handleSliderClick: u } = useSlider();
        return o
            ? null
            : jsxRuntimeExports.jsx('div', {
                  ...r,
                  ref: n,
                  className: cx(styles$c.base, e),
                  onClick: (e) => {
                      (u(e), null == t || t(e));
                  },
                  onMouseDown: (e) => {
                      (a(e), null == s || s(e));
                  },
                  onWheel: i,
              });
    }),
    base$b = 'LimitationArea_2c45b7ff',
    base__disabled$2 = 'LimitationArea_base__disabled_fc664e1d',
    wrapper = 'LimitationArea_wrapper_d530fcbf',
    base__small$3 = 'LimitationArea_base__small_87cf0441',
    pattern$1 = 'LimitationArea_pattern_33f143bb',
    base__medium$2 = 'LimitationArea_base__medium_87cf0441',
    styles$b = {
        base: base$b,
        base__disabled: base__disabled$2,
        wrapper: wrapper,
        base__small: base__small$3,
        pattern: pattern$1,
        base__medium: base__medium$2,
    },
    LimitationArea = reactExports.forwardRef(function ({ className: e, classNames: t, ...s }, r) {
        const { limit: n, size: o, maxValue: a, disabled: i } = useSlider();
        if (n <= 0) return null;
        const u = n / a;
        return jsxRuntimeExports.jsx('div', {
            ...s,
            ref: r,
            className: cx(styles$b.base, styles$b[`base__${o}`], i && styles$b.base__disabled, e),
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$b.wrapper, null == t ? void 0 : t.wrapper),
                children: jsxRuntimeExports.jsx('div', {
                    className: cx(styles$b.pattern, null == t ? void 0 : t.pattern),
                    style: { width: u >= 1 ? '100%' : 100 * u + '%' },
                }),
            }),
        });
    }),
    base$a = 'Thumb_94183346',
    base__small$2 = 'Thumb_base__small_ecf8adad',
    thumb = 'Thumb_caea3cfd',
    base__medium$1 = 'Thumb_base__medium_830942bb',
    grip = 'Thumb_grip_b0aabe58',
    base__full = 'Thumb_base__full_830942bb',
    content$2 = 'Thumb_content_efe659d0',
    styles$a = {
        base: base$a,
        base__small: base__small$2,
        thumb: thumb,
        base__medium: base__medium$1,
        grip: grip,
        base__full: base__full,
        content: content$2,
    },
    Base$5 = defineStyledComponent('Base', styles$a.base, {
        variants: { size: { small: styles$a.base__small, medium: styles$a.base__medium, full: styles$a.base__full } },
    }),
    Thumb = reactExports.forwardRef(function (
        { className: e, classNames: t, buttonClassNames: s, onMouseDown: r, ...n },
        o,
    ) {
        const { size: a, disabled: i, percentage: u, handleDragStart: l, handleWheel: c } = useSlider();
        return jsxRuntimeExports.jsx(Base$5, {
            ...n,
            size: a,
            children: jsxRuntimeExports.jsx(Button$1, {
                ref: o,
                disabled: i,
                theme: 'primary',
                className: cx(styles$a.thumb, null == t ? void 0 : t.thumb, styles$a[`thumb__${a}`], e),
                classNames: { ...s, content: cx(styles$a.content, null == s ? void 0 : s.content) },
                style: { left: 100 * u + '%' },
                onMouseDown: (e) => {
                    (l(e), null == r || r(e));
                },
                onWheel: c,
                children: jsxRuntimeExports.jsx('div', { className: cx(styles$a.grip, null == t ? void 0 : t.grip) }),
            }),
        });
    }),
    hover = 'Slider_hover_9553506b',
    base$9 = 'Slider_2f883184',
    base__disabled$1 = 'Slider_base__disabled_913c9ec5',
    base__small$1 = 'Slider_base__small_263edf46',
    base__medium = 'Slider_base__medium_263edf46',
    filledPattern = 'Slider_filledPattern_23bea505',
    filledPattern__active = 'Slider_filledPattern__active_cb8375a5',
    backgroundPattern = 'Slider_backgroundPattern_8ea0dcf1',
    border = 'Slider_border_4aa39164',
    styles$9 = {
        hover: hover,
        base: base$9,
        base__disabled: base__disabled$1,
        base__small: base__small$1,
        base__medium: base__medium,
        filledPattern: filledPattern,
        filledPattern__active: filledPattern__active,
        backgroundPattern: backgroundPattern,
        border: border,
    },
    Base$4 = defineStyledComponent(BASE_COMPONENT_NAME, styles$9.base, {
        variants: { size: { small: styles$9.base__small, medium: styles$9.base__medium, full: styles$9.base__full } },
    }),
    DEFAULT_SLIDER_STEP = 1,
    Slider = reactExports.forwardRef(function (
        {
            value: e,
            size: t = sizes$1.medium,
            maxValue: s,
            limit: r = s,
            step: n = DEFAULT_SLIDER_STEP,
            children: o,
            className: a,
            classNames: i,
            progressBar: u,
            disabled: l,
            filledClassNames: c,
            onValueChange: d,
            ..._
        },
        m,
    ) {
        const p = reactExports.useRef(null),
            x = useSounds();
        return jsxRuntimeExports.jsxs(Base$4, {
            className: cx(l && styles$9.base__disabled, a),
            ref: assignRefs([m, p]),
            size: t,
            onMouseEnter: function (e) {
                x.play('mouse-enter', { target: Base$4.displayName, original: e });
            },
            children: [
                !l && jsxRuntimeExports.jsx('div', { className: cx(styles$9.hover, null == i ? void 0 : i.hover) }),
                jsxRuntimeExports.jsx(ProgressBar, {
                    value: e,
                    size: t,
                    maxValue: s,
                    className: null == u ? void 0 : u.className,
                    classNames: {
                        ...i,
                        backgroundPattern: cx(styles$9.backgroundPattern, null == i ? void 0 : i.backgroundPattern),
                        border: cx(styles$9.border, null == i ? void 0 : i.border),
                    },
                    filledClassNames: {
                        pattern: cx(
                            styles$9.filledPattern,
                            !l && styles$9.filledPattern__active,
                            null == c ? void 0 : c.pattern,
                        ),
                        ...c,
                    },
                    ..._,
                    children: jsxRuntimeExports.jsx(SliderProvider, {
                        disabled: l,
                        limit: r,
                        step: n,
                        baseRef: p,
                        size: t,
                        onValueChange: d,
                        children: o,
                    }),
                }),
            ],
        });
    });
((Slider.sizes = sizes$1),
    (Slider.LimitationArea = LimitationArea),
    (Slider.InteractiveArea = InteractiveArea),
    (Slider.Thumb = Thumb),
    (Slider.Controls = Controls));
const CardContext = reactExports.createContext(void 0);
function useCardContext() {
    const e = reactExports.useContext(CardContext);
    if (!e) throw new Error('Card context must be used only within its provider');
    return e;
}
function CardContextProvider({ selected: e, hover: t, disabled: s, multiple: r, status: n, children: o }) {
    const a = reactExports.useMemo(
        () => ({ selected: e, hover: t, disabled: s, multiple: r, status: n }),
        [s, t, r, e, n],
    );
    return jsxRuntimeExports.jsx(CardContext.Provider, { value: a, children: o });
}
const CardsWrapperContext = reactExports.createContext(null);
function useCardsWrapperContext() {
    const e = reactExports.useContext(CardsWrapperContext);
    if (!e) throw new Error('CardsWrapper context must be used only within its provider');
    return e;
}
function useCardsWrapperContextOptional() {
    return reactExports.useContext(CardsWrapperContext);
}
const CardsWrapperContextProvider = CardsWrapperContext.Provider,
    base$8 = 'Content_8eaaf71a',
    content$1 = 'Content_ab8563af',
    disabledOverlay = 'Content_disabledOverlay_af87c441',
    base__multiple = 'Content_base__multiple_da09528a',
    base__disabled = 'Content_base__disabled_da09528a',
    base__hover$1 = 'Content_base__hover_da09528a',
    base__selectedHover$1 = 'Content_base__selectedHover_da09528a',
    base__selected$1 = 'Content_base__selected_da09528a',
    multipleCorner = 'Content_multipleCorner_151c26ee',
    styles$8 = {
        base: base$8,
        content: content$1,
        disabledOverlay: disabledOverlay,
        base__multiple: base__multiple,
        base__disabled: base__disabled,
        base__hover: base__hover$1,
        base__selectedHover: base__selectedHover$1,
        base__selected: base__selected$1,
        multipleCorner: multipleCorner,
    },
    MULTIPLE_CORNER_SIZE = 20,
    Base$3 = defineStyledComponent('Content', styles$8.base, {
        variants: {
            multiple: { true: styles$8.base__multiple },
            selected: { true: styles$8.base__selected },
            hover: { true: styles$8.base__hover },
            disabled: { true: styles$8.base__disabled },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: styles$8.base__selectedHover }],
    }),
    MainContainer = ({ children: e, classNames: t }) => {
        const s = React.useRef(null),
            r = useCardContext();
        return (
            React.useEffect(() => {
                if (r.multiple)
                    return createLayoutReadyInEffect(() => {
                        if (s.current) {
                            const e = s.current.getBoundingClientRect(),
                                t = Math.round((MULTIPLE_CORNER_SIZE / e.width) * 100),
                                r = Math.round((MULTIPLE_CORNER_SIZE / e.height) * 100);
                            (s.current.style.setProperty('--corner-width', `${t}%`),
                                s.current.style.setProperty('--corner-height', `${r}%`));
                        }
                    });
            }),
            jsxRuntimeExports.jsxs(Base$3, {
                multiple: r.multiple,
                selected: r.selected,
                hover: r.hover,
                disabled: r.disabled,
                children: [
                    r.multiple && jsxRuntimeExports.jsx('div', { className: styles$8.multipleCorner }),
                    jsxRuntimeExports.jsxs('div', {
                        ref: s,
                        className: cx(styles$8.content, null == t ? void 0 : t.mainContainerContent),
                        children: [
                            r.disabled && jsxRuntimeExports.jsx('div', { className: styles$8.disabledOverlay }),
                            e,
                        ],
                    }),
                ],
            })
        );
    },
    base$7 = 'Status_68bd9bc6',
    icon$4 = 'Status_icon_cef4536',
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
    styles$7 = {
        base: base$7,
        icon: icon$4,
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
    },
    strings = resources.resolve('strings');
defineStyledComponent('Status', styles$7.base, {
    variants: { status: { done: styles$7.base__done, alert: styles$7.base__alert, locked: styles$7.base__locked } },
});
const SMALL_SIZE_BREAKPOINT = 100,
    tooltipEnabled = ({ header: e, body: t }) => Boolean(e && t),
    Status = ({ reason: e, classNames: t }) => {
        const s = reactExports.useRef(null),
            [r, n] = React.useState(!1),
            o = `base__${useCardContext().status}${r ? 'Small' : ''}`,
            a = React.useCallback(() => {
                var e;
                const t = null == (e = s.current) ? void 0 : e.getBoundingClientRect();
                t && n(t.width <= SMALL_SIZE_BREAKPOINT);
            }, [s]);
        useRefResizeObserver(s, a);
        const i = e
                ? {
                      header: strings.readOrEmpty(`tooltips.moduleFits.${e}.header`),
                      body: strings.readOrEmpty(`tooltips.moduleFits.${e}.text`),
                  }
                : {},
            u = useSimpleTooltip(i);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$7.base, styles$7[o], null == t ? void 0 : t.wrapper),
            ref: s,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$7.glowBig }),
                jsxRuntimeExports.jsx('div', { className: styles$7.line }),
                jsxRuntimeExports.jsx('div', { className: styles$7.shadow }),
                jsxRuntimeExports.jsx('div', { className: styles$7.glowInner }),
                jsxRuntimeExports.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: styles$7.blur,
                    children: jsxRuntimeExports.jsx('g', {
                        children: jsxRuntimeExports.jsx('circle', { cx: '21', cy: '21', r: '3' }),
                    }),
                }),
                jsxRuntimeExports.jsx('div', {
                    ...(tooltipEnabled(i) && u),
                    className: cx(styles$7.icon, null == t ? void 0 : t.icon),
                }),
            ],
        });
    },
    base$6 = 'Card_f0963ece',
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
        base: base$6,
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
    Base$2 = defineStyledComponent('Card', cardStyles.base, {
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
            status: s,
            statusReason: r,
            disableMouse: n,
            onMouseOver: o,
            onMouseOut: a,
            soundTarget: i,
            disabled: u = !1,
            className: l,
            classNames: c,
            ...d
        },
        _,
    ) {
        const [m, p] = reactExports.useState(!1),
            x = useSounds(),
            f = useCardsWrapperContextOptional(),
            E = n || u;
        return jsxRuntimeExports.jsx(Base$2, {
            ...d,
            ref: _,
            hover: m,
            disableMouse: n,
            active: t,
            className: cx(cardStyles.card, l, (null == f ? void 0 : f.enabled) && cardStyles.base__wrapped),
            children: jsxRuntimeExports.jsxs(CardContextProvider, {
                disabled: u,
                selected: d.selected ?? !1,
                multiple: d.multiple ?? !1,
                hover: m,
                status: s,
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(cardStyles.content, null == c ? void 0 : c.content),
                        onClick: function (e) {
                            E || x.play('click', { target: i || 'react-ui:card', original: e });
                        },
                        onMouseEnter: function (e) {
                            E || x.play('mouse-enter', { target: i || 'react-ui:card', original: e });
                        },
                        onMouseOver: function (e) {
                            E || (p(!0), null == o || o(e));
                        },
                        onMouseOut: function (e) {
                            E || (p(!1), null == a || a(e));
                        },
                        children: jsxRuntimeExports.jsx(MainContainer, { classNames: c, children: e }),
                    }),
                    jsxRuntimeExports.jsx('div', { className: cardStyles.centerBorder }),
                    s && jsxRuntimeExports.jsx(Status, { reason: r, classNames: null == c ? void 0 : c.status }),
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
    let { x: t, y: s, width: r, height: n } = e;
    const o = Point(t, s),
        a = Point(t + r, s),
        i = Point(t + r, s + n),
        u = Point(t, s + n);
    return [
        [o, a],
        [a, i],
        [i, u],
        [u, o],
    ];
}
function getEdgeKey(e) {
    const [t, s] = e;
    return t.x < s.x || (t.x === s.x && t.y < s.y) ? `${s.x},${s.y}-${t.x},${t.y}` : `${t.x},${t.y}-${s.x},${s.y}`;
}
function buildOuterEdgesAndCenter(e) {
    const t = e.flatMap(getRectangleEdges),
        s = new Map();
    return (
        t.forEach((e) => {
            const t = getEdgeKey(e);
            s.has(t) ? s.delete(t) : s.set(t, e);
        }),
        Array.from(s.values())
    );
}
function buildContourPath(e) {
    if (0 === e.length) return [];
    const t = e[0],
        s = { x: t[0].x - PADDING, y: t[0].y - PADDING },
        r = [s];
    let n = t[1],
        o = s,
        a = s,
        i = -PADDING,
        u = -PADDING;
    for (e.splice(0, 1); e.length > 0; ) {
        const t = e.findIndex((e) => e[0].x === n.x && e[0].y === n.y);
        if (-1 === t) break;
        const s = e[t],
            l = n;
        (n.x <= a.x ? (u = PADDING) : (u === PADDING && (o.y -= 2 * PADDING), (u = -PADDING)),
            n.y >= a.y ? (i = PADDING) : (i === PADDING && (o.x -= 2 * PADDING), (i = -PADDING)),
            (n = { x: n.x + i, y: n.y + u }),
            r.push(n),
            (a = l),
            (o = n),
            (n = s[1]),
            e.splice(t, 1));
    }
    return (u === PADDING && i === PADDING && (o = { ...o, x: o.x - 2 * PADDING }), r.push(s), r);
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
    addLine(e, t, s, r, n) {
        var o;
        const a = `${s === LINE_THICKNESS ? VERTICAL : HORIZONTAL}-${s === LINE_THICKNESS ? Math.round(e) : Math.round(t)}-${n}`;
        this.lines.has(a) || this.lines.set(a, []);
        const i = { x: e - this.containerRect.x, y: t - this.containerRect.y, width: s, height: r, className: n };
        null == (o = this.lines.get(a)) || o.push(i);
    }
    run() {
        const e = [];
        return (
            this.lines.forEach((t, s) => {
                const r = s.at(0) === HORIZONTAL,
                    n = t.sort((e, t) => (r ? e.x - t.x : e.y - t.y));
                let o = null;
                (n.forEach((t) => {
                    if (o)
                        if (r) {
                            const s = o.x + o.width,
                                r = t.x + t.width;
                            t.x >= o.x && t.x <= s ? (o = { ...o, width: Math.max(r, s) - o.x }) : (e.push(o), (o = t));
                        } else {
                            const s = o.y + o.height,
                                r = t.y + t.height;
                            t.y >= o.y && t.y <= s
                                ? (o = { ...o, height: Math.max(r, s) - o.y })
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
const lineInner = 'LinesBuilder_lineInner_a52dc157',
    lineOuter = 'LinesBuilder_lineOuter_c57514b2',
    styles$6 = { lineInner: lineInner, lineOuter: lineOuter };
function buildLines(e, t, s) {
    const r = [],
        n = new LinesOptimizer(t);
    for (let o = 0; o < e.length; o++) {
        const t = e[o],
            a = t.getBoundingClientRect();
        if (0 === a.width || 0 === a.height)
            return void console.debug(
                `Card rect has zero size by one side: ${a.width}x${a.height} (${t.getAttribute('data-test-id')}) `,
            );
        (s !== borderTypes.none && r.push({ x: a.x, y: a.y, width: a.width, height: a.height }),
            n.addLine(a.x, a.y, a.width, LINE_THICKNESS, styles$6.lineInner),
            n.addLine(a.x, a.y + a.height, a.width, LINE_THICKNESS, styles$6.lineInner),
            n.addLine(a.x, a.y, LINE_THICKNESS, a.height, styles$6.lineInner),
            n.addLine(a.x + a.width, a.y, LINE_THICKNESS, a.height + OFFSET, styles$6.lineInner));
    }
    if (s !== borderTypes.none) {
        const e = buildContour(r);
        let t = null;
        e.forEach((e) => {
            if (t) {
                const s = t.y === e.y,
                    r = t,
                    o = e;
                n.addLine(
                    Math.min(r.x, o.x),
                    Math.min(r.y, o.y),
                    s ? Math.abs(o.x - r.x) : LINE_THICKNESS,
                    s ? LINE_THICKNESS : Math.abs(o.y - r.y) + OFFSET,
                    styles$6.lineOuter,
                );
            }
            t = e;
        });
    }
    return n.run();
}
const Lines = reactExports.memo(({ containerRef: e, generation: t, border: s, cardSelector: r }) => {
        const [n, o] = reactExports.useState([]),
            a = useEvent(() => {
                const t = e.current;
                if (!t) return;
                const n = t.getBoundingClientRect(),
                    a = buildLines(t.querySelectorAll(`.${r || cardStyles.card}`), n, s);
                o(a ?? []);
            });
        return (
            reactExports.useEffect(a, [a, t]),
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
    base$5 = 'CardsWrapper_3b6cc4f6',
    card = 'CardsWrapper_card_c7fc9ee7',
    centerBorderCommon = 'CardsWrapper_centerBorderCommon_b4b27a11',
    outerBorderCommon = 'CardsWrapper_outerBorderCommon_f4887371',
    styles$5 = {
        base: base$5,
        card: card,
        centerBorderCommon: centerBorderCommon,
        outerBorderCommon: outerBorderCommon,
    },
    Base$1 = defineStyledComponent('CardsWrapper', styles$5.base),
    CardsWrapper = reactExports.forwardRef(function (
        {
            children: e,
            className: t,
            trashhold: s,
            border: r = borderTypes.contour,
            enabled: n = !0,
            cardSelector: o,
            ...a
        },
        i,
    ) {
        const u = reactExports.useRef([]),
            l = reactExports.useRef(null),
            [c, d] = reactExports.useState('');
        reactExports.useImperativeHandle(i, () => l.current);
        const _ = reactExports.useCallback(
            (e) => {
                const t = l.current;
                if (!t) return;
                const s = t.querySelectorAll(`.${o || cardStyles.card}`);
                if (s.length > 0) {
                    const r = t.getBoundingClientRect(),
                        n = s.length;
                    n !== u.current.length && (u.current = Array.from(s));
                    const o = `${Math.round(r.width)}x${Math.round(r.height)}-${n}|${e}`;
                    d(o);
                } else d('');
            },
            [o],
        );
        (reactExports.useEffect(() => {
            _(s);
        }),
            useRefResizeObserver(
                l,
                reactExports.useCallback(() => _(), [_]),
            ));
        const m = reactExports.useMemo(() => ({ recalculate: _, enabled: n }), [_, n]);
        return jsxRuntimeExports.jsx(Base$1, {
            ...a,
            ref: l,
            children: jsxRuntimeExports.jsxs('div', {
                className: t,
                children: [
                    jsxRuntimeExports.jsx(CardsWrapperContextProvider, { value: m, children: e }),
                    jsxRuntimeExports.jsx(Lines, {
                        cardsRef: u,
                        containerRef: l,
                        border: r,
                        generation: c,
                        cardSelector: o,
                    }),
                ],
            }),
        });
    });
reactExports.forwardRef(({ className: e, classNames: t, ...s }, r) =>
    jsxRuntimeExports.jsxs('div', {
        className: cx(styles$5.base, null == t ? void 0 : t.wrapper),
        children: [
            jsxRuntimeExports.jsx('div', { className: styles$5.centerBorderCommon }),
            jsxRuntimeExports.jsx('div', { className: styles$5.outerBorderCommon }),
            jsxRuntimeExports.jsx(Card, {
                className: cx(styles$5.card, e, null == t ? void 0 : t.card),
                classNames: t,
                ...s,
                ref: r,
            }),
        ],
    }),
);
const statusTypes = { done: 'done', alert: 'alert' },
    base$4 = 'Tooltip_6d997cee',
    decorator = 'Tooltip_decorator_b3486d4e',
    styles$4 = { base: base$4, decorator: decorator },
    Base = defineStyledComponent('Base', styles$4.base),
    Decorator = defineStyledComponent('Decorator', styles$4.decorator),
    Tooltip = reactExports.forwardRef(function ({ children: e, ...t }, s) {
        const r = reactExports.useRef(null);
        return (
            useRefResizeObserver(r, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                resize$1(t.scrollWidth, t.scrollHeight);
                const s = window.getComputedStyle(t);
                setSidePaddingsRem$1({
                    top: parseInt(s.getPropertyValue('padding-top'), 10),
                    left: parseInt(s.getPropertyValue('padding-left'), 10),
                    right: parseInt(s.getPropertyValue('padding-right'), 10),
                    bottom: parseInt(s.getPropertyValue('padding-bottom'), 10),
                });
            }),
            jsxRuntimeExports.jsx(Base, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof s ? s(e) : s && (s.current = e));
                },
                children: e,
            })
        );
    });
Tooltip.Decorator = Decorator;
const grades = { gold: 'gold', enamel: 'enamel', prestige: 'prestige' },
    sizes = { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', xxl: 'xxl' },
    sizesEmblems = { xs: '48x48', sm: '72x72', md: '115x84', lg: '170x124', xl: '400x300', xxl: '600x450' },
    sizesFonts = { xs: '6x12', sm: '9x19', md: '16x33', lg: '23x48', xl: '53x120', xxl: '77x176' };
function icon$3(e, t, s) {
    return t === grades.prestige ? `.c_${sizesEmblems[s]}.${t}` : `.c_${sizesEmblems[s]}.${t}.c_${e}`;
}
const icon$2 = 'VehiclePrestigeEmblem_icon_940474a9',
    base$3 = 'VehiclePrestigeEmblem_24849b0a',
    base__xs = 'VehiclePrestigeEmblem_base__xs_678b197f',
    base__sm = 'VehiclePrestigeEmblem_base__sm_f0368fa3',
    base__md = 'VehiclePrestigeEmblem_base__md_63f722e6',
    base__lg = 'VehiclePrestigeEmblem_base__lg_69373327',
    base__xl = 'VehiclePrestigeEmblem_base__xl_3144948a',
    base__xxl = 'VehiclePrestigeEmblem_base__xxl_fec732e8',
    level = 'VehiclePrestigeEmblem_level_8cc4a042',
    levelIcon__xs = 'VehiclePrestigeEmblem_levelIcon__xs_d11b6645',
    levelIcon__sm = 'VehiclePrestigeEmblem_levelIcon__sm_900b8c7f',
    levelIcon__md = 'VehiclePrestigeEmblem_levelIcon__md_914fcef3',
    levelIcon__lg = 'VehiclePrestigeEmblem_levelIcon__lg_2fd402cc',
    levelIcon__xl = 'VehiclePrestigeEmblem_levelIcon__xl_8c7e5b4d',
    levelIcon__xxl = 'VehiclePrestigeEmblem_levelIcon__xxl_f852cb4e',
    styles$3 = {
        icon: icon$2,
        base: base$3,
        base__xs: base__xs,
        base__sm: base__sm,
        base__md: base__md,
        base__lg: base__lg,
        base__xl: base__xl,
        base__xxl: base__xxl,
        level: level,
        levelIcon__xs: levelIcon__xs,
        levelIcon__sm: levelIcon__sm,
        levelIcon__md: levelIcon__md,
        levelIcon__lg: levelIcon__lg,
        levelIcon__xl: levelIcon__xl,
        levelIcon__xxl: levelIcon__xxl,
    };
function Level({ level: e, type: t, size: s, classNames: r, ...n }) {
    const o = e.toString().split('');
    return jsxRuntimeExports.jsx('div', {
        ...n,
        className: styles$3.level,
        children: o.map((e, n) =>
            jsxRuntimeExports.jsx(
                Image$1,
                {
                    className: cx(styles$3.levelIcon, styles$3[`levelIcon__${s}`], null == r ? void 0 : r.levelIcon),
                    path: `prestige.emblemFont.c_${sizesFonts[s]}.${t === grades.enamel ? grades.gold : t}.c_${e}`,
                },
                n,
            ),
        ),
    });
}
const PrestigeEmblem = reactExports.forwardRef(function (
    { level: e, grade: t, type: s, size: r, classNames: n, ...o },
    a,
) {
    return jsxRuntimeExports.jsxs('div', {
        ...o,
        ref: a,
        className: cx(styles$3.base, styles$3[`base__${r}`], null == n ? void 0 : n.base),
        children: [
            jsxRuntimeExports.jsx(Image$1, {
                path: `prestige.emblem${icon$3(t, s, r)}`,
                className: cx(styles$3.icon, null == n ? void 0 : n.icon),
            }),
            s !== grades.prestige &&
                jsxRuntimeExports.jsx(Level, {
                    level: e,
                    type: s,
                    size: r,
                    classNames: { levelIcon: null == n ? void 0 : n.level },
                }),
        ],
    });
});
PrestigeEmblem.sizes = sizes;
const base$2 = 'Counter_dc10b86a',
    show = 'Counter_show_f40ddf91',
    base__big = 'Counter_base__big_6bd2877c',
    base__small = 'Counter_base__small_631cb8e0',
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
    styles$2 = {
        base: base$2,
        show: show,
        base__big: base__big,
        base__small: base__small,
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
    },
    Counter = ({
        value: e,
        isEmpty: t,
        className: s,
        size: r = 'normal',
        fadeInAnimation: n = !1,
        hide: o = !1,
        maximumNumber: a = 99,
        ...i
    }) => {
        const u = t ? null : e,
            l = 'string' == typeof u;
        if ((u && !l && u < 0) || 0 === u) return null;
        const c = u && !l && u > a,
            d = cx(
                styles$2.base,
                styles$2[`base__${r}`],
                n && styles$2.base__animated,
                o && styles$2.base__hidden,
                !u && styles$2.base__pattern,
                t && styles$2.base__empty,
                s,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: d,
            ...i,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$2.bg }),
                jsxRuntimeExports.jsx('div', { className: styles$2.pattern }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$2.value, l && styles$2.value__text),
                    children: [
                        c ? a : u,
                        c && jsxRuntimeExports.jsx('span', { className: styles$2.plus, children: '+' }),
                    ],
                }),
            ],
        });
    },
    DAYS_IN_WEEK = 7,
    HOURS_IN_DAY = 24,
    MS_IN_SECOND = 1e3,
    ONE_MINUTE = 60,
    ONE_HOUR = 60 * ONE_MINUTE,
    ONE_DAY = HOURS_IN_DAY * ONE_HOUR;
function getTimeUnits(e = 0) {
    let t = e;
    const s = Math.trunc(t / ONE_DAY);
    t -= s * ONE_DAY;
    const r = Math.trunc(t / ONE_HOUR);
    t -= r * ONE_HOUR;
    const n = Math.trunc(t / ONE_MINUTE);
    return ((t -= n * ONE_MINUTE), { days: s, hours: r, minutes: n, seconds: t });
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
    defaultOnFinish = () => {},
    useCountdown$1 = (e = 0, t, s = 0, r = defaultOnFinish) => {
        const [n, o] = reactExports.useState(e);
        return (
            reactExports.useEffect(() => {
                if (e > 0) {
                    o(e);
                    const n = Date.now(),
                        a = setInterval(
                            () => {
                                const t = e - Math.floor((Date.now() - n) / MS_IN_SECOND);
                                null !== s && t <= s ? (o(s), r && r(), clearInterval(a)) : o(t);
                            },
                            (t || (e > 2 * ONE_MINUTE ? ONE_MINUTE : 1)) * MS_IN_SECOND,
                        );
                    return () => {
                        clearInterval(a);
                    };
                }
            }, [e, t, s, r]),
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
const base$1 = 'Countdown_99fa8328',
    icon$1 = 'Countdown_icon_b50ebafb',
    description = 'Countdown_description_91ad95d2',
    styles$1 = { base: base$1, icon: icon$1, description: description },
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
        const s = 2 === t ? IMAGES.big : IMAGES;
        switch (e) {
            case CountdownIcon.Timer:
                return s.clock();
            case CountdownIcon.Countdown:
                return s.hourglass();
            case CountdownIcon.Cooldown:
                return s.lock();
        }
    },
    Countdown = ({
        duration: e,
        icon: t = CountdownIcon.Timer,
        style: s = CountdownStyle.Description,
        onTimeReached: r,
        refreshRate: n,
        className: o = '',
        classNames: a = {},
    }) => {
        const i = n ?? (s !== CountdownStyle.Description ? 1 : void 0),
            u = useCountdown(e, i),
            l = useScaleState();
        r && r[u] && r[u]();
        const c = formatTimeUnits(getTimeUnits(u), s);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$1.base, o),
            children: [
                t !== CountdownIcon.None &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$1.icon, a.icon),
                        style: { backgroundImage: `url('${getIcon(t, l)}')` },
                    }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$1.description, a.text), children: c }),
            ],
        });
    },
    Countdown$1 = reactExports.memo(Countdown),
    base = 'Textbutton_b1283086',
    base__right = 'Textbutton_base__right_78d4c03f',
    icon = 'Textbutton_icon_9ba4c60',
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
    styles = {
        base: base,
        base__right: base__right,
        icon: icon,
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
        goto: s,
        classNames: r,
        onMouseEnter: n,
        onMouseLeave: o,
        onMouseDown: a,
        onMouseUp: i,
        side: u = 'left',
        type: l = 'back',
        soundHover: c = 'highlight',
        soundClick: d = 'play',
        ..._
    }) => {
        const m = reactExports.useCallback(
                (e) => {
                    (null == n || n(e), env.sound.play.sound(c));
                },
                [n, c],
            ),
            p = reactExports.useCallback(
                (e) => {
                    null == o || o(e);
                },
                [o],
            ),
            x = reactExports.useCallback(
                (e) => {
                    (null == a || a(e), env.sound.play.sound(d));
                },
                [a, d],
            ),
            f = reactExports.useCallback(
                (e) => {
                    null == i || i(e);
                },
                [i],
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles.base, styles[`base__${l}`], styles[`base__${u}`], null == r ? void 0 : r.base),
            onMouseEnter: m,
            onMouseLeave: p,
            onMouseDown: x,
            onMouseUp: f,
            onClick: t,
            ..._,
            children: [
                'info' !== l && jsxRuntimeExports.jsx('div', { className: styles.shine }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles.icon, styles[`icon__${l}`], styles[`icon__${u}`], null == r ? void 0 : r.icon),
                    children: jsxRuntimeExports.jsx('div', { className: cx(styles.glow, null == r ? void 0 : r.glow) }),
                }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles.caption, styles[`caption__${l}`], null == r ? void 0 : r.caption),
                    children: e,
                }),
                s &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles.goto, null == r ? void 0 : r.goto),
                        children: s,
                    }),
            ],
        });
    };
export {
    roundTo as $,
    Area$1 as A,
    Button$1 as B,
    sizes$i as C,
    Bubble as D,
    useSyncSizeTexture as E,
    UIProvider as F,
    runView as G,
    isTypeValidValue as H,
    intl$2 as I,
    JSXBuilder as J,
    GradientText as K,
    LazyModel as L,
    easings as M,
    defineStyledComponent as N,
    useTimeout as O,
    some as P,
    MS_IN_SECOND$1 as Q,
    MINUTES_IN_HOUR as R,
    toMinutes as S,
    useTooltip as T,
    UPSCALE as U,
    Video as V,
    seconds as W,
    sort as X,
    Image$1 as Y,
    FormatString as Z,
    filterMap as _,
    useSpecialContextMenu as a,
    useHoverState as a$,
    types$3 as a0,
    sizes$g as a1,
    Currency as a2,
    useLazyModel as a3,
    useMedia as a4,
    createLayoutReadyInEffect as a5,
    map$1 as a6,
    TruncatedText as a7,
    compose as a8,
    subtract as a9,
    comparer as aA,
    getVehicleImageKey as aB,
    sameTanksRemap as aC,
    iter as aD,
    makeActions as aE,
    mapNonNullable as aF,
    WithDiscount as aG,
    discountTypes as aH,
    VehicleImage as aI,
    get as aJ,
    RentalCounter as aK,
    VehicleInfo as aL,
    directions$1 as aM,
    DisposeBuilder as aN,
    useScrollBounding as aO,
    List as aP,
    CarouselScroll as aQ,
    keyCodes as aR,
    useHandleKeydown as aS,
    useSkipFrame as aT,
    ErrorHandler as aU,
    KeyButton as aV,
    Sprite as aW,
    assert as aX,
    writeClipboard as aY,
    usePopover as aZ,
    HeadlessButton as a_,
    now as aa,
    toDays as ab,
    days as ac,
    toHours as ad,
    hours as ae,
    minutes as af,
    toSeconds as ag,
    map as ah,
    filter as ai,
    useWulfTooltip as aj,
    PlayerInfo as ak,
    useRouter as al,
    matchPath as am,
    createTargetOverrides as an,
    ModelRouterProvider as ao,
    types$4 as ap,
    roles$1 as aq,
    identity as ar,
    atSpgRoles as as,
    lightTankRoles as at,
    mediumTankRoles as au,
    heavyTankRoles as av,
    nationById as aw,
    isRentVehicle as ax,
    vehicleState as ay,
    getRoleByKey as az,
    useAdaptive as b,
    assignRefs as b$,
    Slot$1 as b0,
    useVerticalScroll as b1,
    Area as b2,
    Popover as b3,
    MediaWrapperElement as b4,
    Base$p as b5,
    Bar as b6,
    Slottable as b7,
    Toggle as b8,
    toggleSizes as b9,
    mouseButtons as bA,
    isNonNullable as bB,
    Slot as bC,
    LoadoutItem as bD,
    get$1 as bE,
    useEvent as bF,
    debounce as bG,
    groupMapBy as bH,
    toArray as bI,
    fromModel as bJ,
    useThrottle as bK,
    normalizeResource as bL,
    useDebounce as bM,
    useInsideEvent as bN,
    useParamTooltip as bO,
    createSoundPlay as bP,
    SoundsProvider as bQ,
    Loader as bR,
    Checkbox as bS,
    sizes$4 as bT,
    useMount as bU,
    useClickOutside as bV,
    insertBefore as bW,
    UnknownVehicleImage as bX,
    forceTriggerMouseMove$1 as bY,
    parseValid as bZ,
    addEventListener as b_,
    toggleThemes as ba,
    DefaultScroll as bb,
    VehicleType as bc,
    VehicleRole as bd,
    VehicleLevel as be,
    Input as bf,
    placeholderVisibility as bg,
    useInput as bh,
    useBackdropTooltip as bi,
    every as bj,
    findIndexLast as bk,
    findIndex as bl,
    Accordion as bm,
    reduce as bn,
    useHandleKeyup as bo,
    mapExists as bp,
    Switcher$1 as bq,
    find as br,
    filter$1 as bs,
    breakpoints as bt,
    overlayTypes as bu,
    sizes$6 as bv,
    useDragAndDrop as bw,
    useScaleState$1 as bx,
    mouse as by,
    DragAndDrop as bz,
    computeds as c,
    NUMBERS_ALPHABET as c$,
    createSimpleGetter as c0,
    createMockControls as c1,
    SceneWrapper as c2,
    isEmptyObject as c3,
    useEmitter as c4,
    useSoundsOptional as c5,
    breakpointsByType as c6,
    onRescale as c7,
    Timer as c8,
    ExtendedText as c9,
    statusTypes as cA,
    useCardsWrapperContext as cB,
    CardsWrapper as cC,
    Tabs as cD,
    themes as cE,
    sizes$2 as cF,
    setContentReady as cG,
    Switch as cH,
    Route as cI,
    createMultipleTargetOverrides as cJ,
    initExternalPaddings$1 as cK,
    enableFullScreenModeSupported$1 as cL,
    setSkipFramesAllowed as cM,
    greaterThan as cN,
    convert as cO,
    sizes$a as cP,
    WITHOUT_ROLE as cQ,
    PrestigeEmblem as cR,
    sizes as cS,
    grades as cT,
    Tooltip as cU,
    sizes$9 as cV,
    perkStates as cW,
    roles as cX,
    createString as cY,
    renderResolvedString as cZ,
    LOWER_ALPHABET as c_,
    calcPercent as ca,
    delay as cb,
    useIsFirstRender as cc,
    ProgressBar as cd,
    DateTimeFormatsEnum as ce,
    FormatText as cf,
    getRegionalDateTime as cg,
    mapFilter as ch,
    ImageSize as ci,
    capitalize as cj,
    sizes$3 as ck,
    formats as cl,
    Reward as cm,
    getRewardValueType as cn,
    getRewardImage as co,
    formatPrintf as cp,
    forEach as cq,
    chunks as cr,
    imageSizes$1 as cs,
    currencyTypes as ct,
    sizes$1 as cu,
    Slider as cv,
    getRealFormat as cw,
    useCardContext as cx,
    readKey as cy,
    Card as cz,
    usePrevious as d,
    renderString as d0,
    upgradeLegacy as d1,
    compare as d2,
    greaterThanOrEqual as d3,
    CountdownStyle as d4,
    Counter as d5,
    TextButton as d6,
    Countdown$1 as d7,
    fromMs as d8,
    snakeToCamel as d9,
    play$1 as da,
    useInterval as e,
    remToPx$1 as f,
    getViewGlobalPosition$1 as g,
    useHorizontalScroll as h,
    initializeModelWithContext as i,
    useLayoutReady as j,
    useUnmount as k,
    useRem as l,
    Base$q as m,
    noop as n,
    useSounds as o,
    pxToRem$1 as p,
    useAdaptiveWidth as q,
    resources as r,
    sizes$h as s,
    themes$1 as t,
    useSimpleTooltip as u,
    useUpscale as v,
    Atlas as w,
    useSpecialPopover as x,
    useSpecialTooltip as y,
    mapRange as z,
};
