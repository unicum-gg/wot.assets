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
    r as reactExports,
    j as jsxRuntimeExports,
    e as cx,
    o as observable,
    f as action,
    u as untracked,
    g as computedFn,
    h as comparer$1,
    R as React,
    i as client,
    k as cva,
    l as useSpring,
    m as animated,
    n as index,
    p as useLocalObservable,
    q as runInAction,
    s as useReactTable,
    t as getPaginationRowModel,
    v as getSortedRowModel,
    w as getCoreRowModel,
    x as observer,
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
            o = readFromR$1(n, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === o ? ('silent' !== s && logBySeverity$1(`Resource not found: ${n}`, s), r()) : o;
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
resources.register({
    strings: asFunction(() => new StringsRClassProvider()).singleton(),
    images: asFunction(() => new ImagesRClassProvider(window.R.images.gui.maps.icons)).singleton(),
    atlases: asFunction(() => new ImagesRClassProvider(window.R.atlases)).singleton(),
    videos: asFunction(() => new VideosRClassProvider(window.R.videos)).singleton(),
    views: asClass(ViewsRClassProvider).singleton(),
    aliases: asClass(AliasesRClassProvider).singleton(),
    sounds: asClass(SoundsRClassProvider).singleton(),
    langCode: asValue(R.strings.settings.LANGUAGE_CODE()),
    intl: asValue(intl$1),
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
            r = Math.pow;
        return e < 0.5 ? (1 - t(1 - r(2 * e, 2))) / 2 : (t(1 - r(-2 * e + 2, 2)) + 1) / 2;
    },
    reverseEaseInOutCirc: (e) => 1 - easings.easeInOutCirc(1 - e),
    easeOutBack(e) {
        const t = 1.70158;
        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
    },
    bezier: (e, t, r, s) => (n) =>
        (1 - n) * (1 - n) * (1 - n) * e + 3 * (1 - n) * (1 - n) * n * t + 3 * (1 - n) * n * n * r + n * n * n * s,
    cubicBezier: (e, t, r, s) => (n) => {
        const o = findTForX(n, e, r);
        return 3 * t * (1 - o) ** 2 * o + 3 * s * (1 - o) * o ** 2 + o ** 3;
    },
};
function bezierX(e, t, r) {
    return 3 * t * (1 - e) ** 2 * e + 3 * r * (1 - e) * e ** 2 + e ** 3;
}
function bezierXDerivative(e, t, r) {
    return 9 * t * (1 - e) ** 2 + 6 * (r - t) * (1 - e) * e + 3 * (1 - r) * e ** 2;
}
function findTForX(e, t, r, s = 1e-5) {
    let n = e;
    for (let o = 0; o < 8; o++) {
        const o = bezierX(n, t, r) - e;
        if (Math.abs(o) < s) return n;
        const a = bezierXDerivative(n, t, r);
        if (Math.abs(a) < s) break;
        n -= o / a;
    }
    return n;
}
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
    greaterThan = curry2(function (e, t) {
        return toMillis(e) > toMillis(t);
    }),
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
function format$1(e, t) {
    const r = toMillis(e);
    return t.map((e) => formats$1[e](r));
}
const HOURS_IN_DAY = 24,
    MS_IN_SECOND = 1e3,
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
function format(e, t) {
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
                            o = internalMouse$1[t]((e) => r([e, 'outside']));
                        function a(e) {
                            r([e, 'inside']);
                        }
                        return (
                            window.addEventListener(n, a),
                            s(),
                            () => {
                                (o(), window.removeEventListener(n, a), (e.listeners -= 1), s());
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
const mouse = initMouseEvents$1();
function getSize$1(e = 'px') {
    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
}
function playSound$1(e) {
    engine.call('PlaySound', e);
}
const sounds$1 = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays$1 = Object.keys(sounds$1).reduce((e, t) => ((e[t] = () => playSound$1(sounds$1[t])), e), {}),
    play = { ...plays$1, sound: playSound$1 },
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
    viewEventTypes$1 = { tooltip: 1, contextMenu: 4 };
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
function setContentReady(e) {
    viewEnv.setContentReady(e);
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
function pipe(e, t, r, s, n, o, a, u, i) {
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
            return o(n(s(r(t(e)))));
        case 7:
            return a(o(n(s(r(t(e))))));
        case 8:
            return u(a(o(n(s(r(t(e)))))));
        case 9:
            return i(u(a(o(n(s(r(t(e))))))));
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
    const o = new Map(),
        a = { subscribersNotified: new SimpleEmitter() },
        u = engine.whenReady.then(() => {
            function e(e, t, r) {
                (r.forEach((r) => {
                    const s = o.get(r);
                    void 0 !== s && s(e, t);
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
        } catch (o) {
            throw new Error(`Failure readByPath in ${n}. Root id: ${t}. Context: ${s}:\n${o}\n`);
        }
    };
    function c(e) {
        viewEnv.removeDataChangedCallback(e, t) ? o.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (r, n) => {
            const a = addModelObserver$1('string' == typeof n ? `${s}.${n}` : s, t, !0);
            return (o.set(a, r), e && r(l(n), []), a);
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
            if (0 === t || ids().includes(t)) for (const e of o.keys()) c(e);
            u.then((e) => e());
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
const clamp = (e, t, r) => (r < e ? e : r > t ? t : r);
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
function addEventListener(e, t, r, s) {
    return (e.addEventListener(t, r, s), () => e.removeEventListener(t, r, s));
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((a.prototype.append = function (e, t) {
                ((e = n(e)), (t = o(t)));
                var r = this.map[e];
                (r || ((r = []), (this.map[e] = r)), r.push(t));
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
                c.call(E.prototype),
                (self.Headers = a),
                (self.Request = d),
                (self.Response = E),
                (self.fetch = function (t, r) {
                    var n;
                    return (
                        (n = d.prototype.isPrototypeOf(t) && !r ? t : new d(t, r)),
                        new fetch.Promise(function (t, r) {
                            var o = (function () {
                                return s && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function a() {
                                if (4 === o.readyState) {
                                    var e = 1223 === o.status ? 204 : o.status;
                                    if (e < 100 || e > 599) r(new TypeError('Network request failed'));
                                    else {
                                        var s = {
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
                                        t(new E(n, s));
                                    }
                                }
                            }
                            ('cors' === n.credentials && (o.withCredentials = !0),
                                (o.onreadystatechange = a),
                                self.usingActiveXhr ||
                                    ((o.onload = a),
                                    (o.onerror = function () {
                                        r(new TypeError('Network request failed'));
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
                        return this.text().then(p);
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
                (this.headers = new a(t.headers)),
                (this.method = ((s = t.method || 'GET'), (n = s.toUpperCase()), r.indexOf(n) > -1 ? n : s)),
                (this.mode = t.mode || null),
                (this.referrer = null),
                ('GET' === this.method || 'HEAD' === this.method) && t.body)
            )
                throw new TypeError('Body not allowed for GET or HEAD requests');
            this._initBody(t.body);
        }
        function p(e) {
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
        function m(e) {
            var t = new a();
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
const keyCodes = { ESCAPE: 27, ARROW_LEFT: 37, ARROW_RIGHT: 39 };
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
function get(e, t) {
    var r;
    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (r = e[t]) ? void 0 : r.value;
}
function head(e) {
    return get(e, 0);
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
        const o = null == (r = e[n]) ? void 0 : r.value;
        t(o, n, e) && s.push(o);
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
function includes(e, t) {
    for (let r = 0; r < e.length; r++) {
        if (unsafeGet(e, r) === t) return !0;
    }
    return !1;
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
function forEach(e, t) {
    for (let r = 0; r < e.length; r++) {
        t(unsafeGet(e, r), r, e);
    }
}
const createLayoutReadyInEffect = (e) => {
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
function assert(e, t) {
    e || console.error(t || 'Assertion failed');
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
    for (let r = ARABIC$1.length - 1; r >= 0; r--) {
        let s = ARABIC$1[r];
        for (; void 0 !== s && e >= s; ) ((t += ROMAN$1[r]), (e -= s));
    }
    return t;
}
function isValid(e) {
    return 'number' == typeof e && !Number.isNaN(e) && Number.isFinite(e);
}
ROMAN_FORBIDDEN_LANGUAGE_CODES$2.includes(resources.resolve('langCode'));
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
    mouseButtons = { left: 0 },
    CHINESE_LANGUAGE_CODES = new Set(['zh_cn', 'zh_sg', 'zh_tw']),
    JAPANESE_LANGUAGE_CODE = 'ja';
function splitChinese(e) {
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
function addSpaceAndMap(e, t, r) {
    return CHINESE_LANGUAGE_CODES.has(t) || t === JAPANESE_LANGUAGE_CODE
        ? e.map(r)
        : e.map((e, t, s) => (t === s.length - 1 ? r(e, t, s) : r(`${e} `, t, s)));
}
function splitLocale(e, t) {
    return CHINESE_LANGUAGE_CODES.has(t)
        ? splitChinese(e)
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
        o = s[n],
        a = o.names[o.names.length - 1] ?? breakpoints.extraSmall,
        u = breakpointsByType[a],
        i = s.width.names,
        l = s.height.names,
        c = i[i.length - 1] ?? breakpoints.extraSmall,
        d = l[l.length - 1] ?? breakpoints.extraSmall,
        p = { width: breakpointsByType[c].width, height: breakpointsByType[d].height };
    return {
        mediaClass: generateMediaClasses(n, s),
        breakpoint: u,
        screenWidthRem: e,
        screenHeightRem: t,
        breaks: o.names,
        sides: p,
        mediaSize: u.width,
        mediaWidth: p.width,
        mediaHeight: p.height,
        upscale: r > 1,
    };
}
const getScale$1 = () => remToPx$1(1),
    calcMediaState = () => {
        const e = getSize$1('rem');
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
            const t = onResize(e),
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
function throttle(e, t, r, s) {
    let n,
        o = !1,
        a = 0;
    function u() {
        n && clearTimeout(n);
    }
    function i(...i) {
        const l = this,
            c = Date.now() - a;
        function d() {
            ((a = Date.now()), r.apply(l, i));
        }
        o ||
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
            (u(), (o = !0));
        }),
        i
    );
}
function useEmitter() {
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
        o = useEvent((e) => {
            isEventHandled$1() || (r(e), setEventHandled$1(), s && e.stopPropagation());
        }),
        a = useApi$2(),
        u = reactExports.useMemo(() => a[t].register(n, o), [a, t, n, o]);
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
};
function useRepeatCallback(e, t, r = []) {
    const s = reactExports.useRef(0),
        n = reactExports.useCallback(() => window.clearInterval(s.current), r || []);
    reactExports.useEffect(() => n, [n]);
    const o = (r ?? []).concat([t]);
    return [
        reactExports.useCallback((r) => {
            ((s.current = window.setInterval(() => e(r, !0), t)), e(r, !1));
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
        const r = () => {
            (t(), (t = createLayoutReadyInEffect(e)));
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
        const s = useEvent((e) => {
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
function useThrottle(e, t, r) {
    const s = reactExports.useMemo(() => throttle(r, e), t);
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
const displayedTooltips = new WeakMap(),
    DEFAULT_RES_ID = 0,
    statuses = { await: 'await', idle: 'idle', display: 'display' };
function useTooltip({
    resId: e = DEFAULT_RES_ID,
    contentId: t,
    decoratorId: r,
    disabled: s,
    args: n,
    showDelay: o = 400,
}) {
    const a = reactExports.useRef({ status: statuses.idle, resId: e, timeoutId: 0 }),
        [u, i] = reactExports.useMemo(() => {
            let u = null;
            function i() {
                s ||
                    ((a.current.status = statuses.await),
                    window.clearTimeout(a.current.timeoutId),
                    (a.current.timeoutId = window.setTimeout(l, o)));
            }
            function l() {
                ((a.current.status = statuses.display),
                    sendEvent$1.tooltip.open(e, t, r, n),
                    u && displayedTooltips.set(u, d));
            }
            function c() {
                if (
                    (window.clearTimeout(a.current.timeoutId),
                    a.current.status === statuses.display && sendEvent$1.tooltip.hide(e, t, r),
                    (a.current.status = statuses.idle),
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
                    a.current.status !== statuses.idle && (s ? d.hide() : i());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((u = null == e ? void 0 : e.currentTarget), i());
                    },
                    onMouseLeave: s ? noop : c,
                    onClick: s ? noop : c,
                },
            ];
        }, [n, t, r, s, e, o]);
    return (
        reactExports.useEffect(() => {
            u.rerun();
        }, [u]),
        useUnmount(useEvent(u.hide)),
        i
    );
}
function useSimpleTooltip({ alert: e, body: t, header: r, note: s, hasHtmlContent: n, disabled: o }) {
    const a = resources.resolve('views');
    return useTooltip({
        disabled: o,
        contentId: a.read((e) =>
            n
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: a.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: reactExports.useMemo(() => ({ body: t, header: r, note: s, alert: e }), [e, t, r, s]),
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
function useWulfTooltip(e, t, r) {
    return useTooltip({
        ...r,
        disabled: null == r ? void 0 : r.disabled,
        contentId: resources.resolve('aliases').read((e) => e.common.tooltip.Wulf('resId')),
        args: reactExports.useMemo(
            () => ({ tooltipId: e, tooltipArgs: JSON.stringify(t), ...(null == r ? void 0 : r.args) }),
            [t, e, null == r ? void 0 : r.args],
        ),
    });
}
function useParamTooltip(e, t, r) {
    return useTooltip({
        ...r,
        disabled: 'string' != typeof e || (null == r ? void 0 : r.disabled),
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
};
function createSoundPlay(e) {
    return () => {
        play.sound(e);
    };
}
function createTargetOverrides(e, t) {
    return Object.entries(e).reduce(
        (e, [t, r]) => (
            (e[t] = (e) => {
                var s;
                e && e.target in r ? play.sound(r[e.target]) : null == (s = soundConfig[t]) || s.call(soundConfig, e);
            }),
            e
        ),
        {},
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
const Context$3 = reactExports.createContext(null);
function SoundsProvider({ severity: e = 'warn', overrides: t, silent: r = !1, children: s }) {
    const n = reactExports.useMemo(() => ({ ...soundConfig, ...t }), [t]),
        o = reactExports.useMemo(
            () => ({
                play: function (t, s) {
                    if (r) return;
                    const o = n[t];
                    o ? o(s) : logBySeverity(`There is no sound for event: ${t}`, e);
                },
                settings: { plays: n, severity: e, silent: r },
            }),
            [n, e, r],
        );
    return jsxRuntimeExports.jsx(Context$3.Provider, { value: o, children: s });
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
function useContextMenu({ resId: e = 0, contentId: t, decoratorId: r, args: s, disabled: n, soundTarget: o }) {
    const a = useSounds(),
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
                            (a.play('show-context-menu', {
                                target: o ?? 'react-toolkit:use_context_menu',
                                original: e,
                            }),
                            u());
                    },
                },
            ];
        }, [s, t, r, e, n, a, o]);
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
const nonConvertingTypes = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    primitives$1 = new Set(['number', 'string', 'boolean', 'bigint']),
    bindingsForbidden = new Set(['Dict']);
function cloneModel(e, { shallow: t = !0, depth: r = 0, maxDepth: s = 32 } = {}) {
    var n, o;
    const a = e,
        u = typeof e;
    if (r > s) throw new Error(`Too deeply nested to copy. Max is ${s}.`);
    if (nonConvertingTypes.has(u)) return a;
    if (null === a) return a;
    const i = { depth: r + 1, maxDepth: s };
    if (Array.isArray(a)) return a.map((e) => cloneModel(e, i));
    if ('object' === u) {
        const s = (null == (n = a.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, i));
        if ('CoherentArrayProxy' === s) return e.map((e) => cloneModel(e.value, i));
        if ('Dict' === s) return;
        if ('UNKNOWN' === s) return;
        if (s.includes(':ViewModel:') || 'Object' === s) {
            if (t && 0 === r) {
                const e = {};
                for (const t in a) {
                    const r = a[t];
                    primitives$1.has(typeof r) && (e[t] = r);
                }
                return e;
            }
            {
                const e = {};
                for (const t in a) {
                    const r = a[t],
                        s = (null == (o = null == a ? void 0 : a.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(s) || (e[t] = cloneModel(r, i));
                }
                return e;
            }
        }
        const u = {};
        for (const e of Object.keys(a)) u[e] = cloneModel(a[e], i);
        return u;
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
                o = this.takeItem(e, n);
            n in r
                ? null === o
                    ? (delete r[n], this._keys.delete(n), this.set(r))
                    : r[n].set(o)
                : null !== o && ((r[n] = observable.box(o, MOBX_OPTIONS)), this._keys.add(n), this.set(r));
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
    const n = (n, o, a = DEFAULT_BOX_CONFIG) => {
            const u = observable.box(n(r(o)), a);
            return ('real' === t && e.subscribe((e) => s.push(() => u.set(n(e))), o), u);
        },
        o = (n, o) => {
            const a = new DLDict(r(n), o);
            return ('real' === t && e.subscribe((e, t) => s.push(() => a.update(e, t)), n), a);
        },
        a = (n, o) => {
            const a = observable.box(r(n) ?? o, DEFAULT_BOX_CONFIG);
            return ('real' === t && e.subscribe((e) => s.push(() => a.set(e)), n), a);
        };
    return {
        dict: o,
        dictRef: (e, t) => o(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => n(cloneModel, e),
        array: a,
        object: a,
        transform: n,
        primitives: (n, o) => {
            const a = r(o);
            if (Array.isArray(n)) {
                const r = n.reduce((e, t) => ((e[t] = observable.box(a[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            s.push(() =>
                                n.forEach((t) => {
                                    r[t].set(e[t]);
                                }),
                            );
                        }, o),
                    r
                );
            }
            {
                const r = n,
                    u = Object.entries(r),
                    i = u.reduce((e, [t, r]) => ((e[r] = observable.box(a[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            s.push(() =>
                                u.forEach(([t, r]) => {
                                    i[r].set(e[t]);
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
        (t, r, s) => {
            const n = reactExports.createContext(null);
            function o(o) {
                var a;
                const { mode: u, options: i, children: l, mocks: c } = o,
                    d = useMockContext(),
                    p = u ?? d.mode,
                    m = c ?? d.mocks,
                    E = reactExports.useRef([]),
                    _ = null == (a = null == s ? void 0 : s.useRequires) ? void 0 : a.call(s),
                    f = useEvent((n, a, u) => {
                        var i;
                        const l = 'real' !== n && u ? createMockInstance(u.getter, a) : create(a, { name: e }),
                            c = (e) => ('mocks' === n ? (null == u ? void 0 : u.getter(e, a)) : l.readByPath(e)),
                            d = (e) => E.current.push(e),
                            p = 'initial' in o && {
                                initial: null == (i = null == s ? void 0 : s.initial) ? void 0 : i.call(s, o.initial),
                            },
                            m = t({
                                ...p,
                                mode: n,
                                readByPath: c,
                                requires: _,
                                externalModel: l,
                                observableModel: createObservableModel(l, n, c),
                                cleanup: d,
                            }),
                            f = { ...p, mode: n, model: m, externalModel: l, cleanup: d, requires: _ },
                            h = 'mocks' === n && (null == u ? void 0 : u.controls) ? u.controls(f) : {};
                        return {
                            model: m,
                            controls: { ...(null == r ? void 0 : r(f)), ...h },
                            externalModel: l,
                            mode: n,
                        };
                    }),
                    h = reactExports.useRef(!1),
                    [g, x] = reactExports.useState(p);
                reactExports.useEffect(() => {
                    x(p);
                }, [p]);
                const [b, v] = reactExports.useState(() => f(g, i, m));
                return (
                    reactExports.useEffect(() => {
                        h.current ? v(f(g, i, m)) : (h.current = !0);
                    }, [
                        f,
                        m,
                        g,
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
    const r = reactExports.useRef(null);
    return (
        reactExports.useEffect(() => {
            const e = r.current;
            if (null !== e)
                return events$1.onHitTest((t) => {
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
                const o = { depth: r - 1, convertArrays: s },
                    a = (null == (n = t.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
                switch (!0) {
                    case a.includes('CoherentArrayProxy'):
                        return [...t.values()].map((t) => e(o.convertArrays ? t.value : t, o));
                    case 'Dict' === a:
                        return [...t.entries()].reduce((t, [r, s]) => ((t[r] = e(s, o)), t), { $$type: 'Dict' });
                    case 'UNKNOWN' === a:
                        return 'UNKNOWN_TYPE';
                    case a.includes('ViewModel'):
                    default: {
                        const r = {};
                        for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = e(t[s], o));
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
    var o;
    injectShowModel();
    const a = r ? MediaWrapper : React.Fragment,
        u = (null == (o = null == window ? void 0 : window.engine) ? void 0 : o.whenReady) ?? Promise.resolve();
    (n && engine.enableImmediateLayout(!0),
        await u,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client
            .createRoot(t)
            .render(jsxRuntimeExports.jsx(a, { children: jsxRuntimeExports.jsx(Provider, { children: e }) })),
        s && (initExternalPaddings$1(t), enableFullScreenModeSupported$1()));
}
const LIGHT_TANK = 'lightTank',
    MEDIUM_TANK = 'mediumTank',
    HEAVY_TANK = 'heavyTank',
    SPG = 'SPG',
    AT_SPG = 'AT-SPG',
    PREMIUM_TAG = 'premium',
    SPECIAL = 'special',
    COLLECTOR_VEHICLES_TAG = 'collectorVehicle',
    types$2 = { lightTank: LIGHT_TANK, mediumTank: MEDIUM_TANK, heavyTank: HEAVY_TANK, SPG: SPG, 'AT-SPG': AT_SPG },
    tags = { premium: PREMIUM_TAG, special: SPECIAL, collectorVehicle: COLLECTOR_VEHICLES_TAG },
    typeValues = Object.values(types$2),
    normilizeVehicleType = (e) => e.replace('-', '_'),
    isTypeValidValue = (e) => typeValues.includes(e);
function getVehicleImageKey(e) {
    const t = e.indexOf(':');
    return normalizeResource(t < 0 ? e.toLowerCase() : e.substring(t + 1).toLowerCase());
}
const WITHOUT_ROLE = 'without_role',
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
    vehicleState = {
        DAMAGED: 'damaged',
        EXPLODED: 'exploded',
        DESTROYED: 'destroyed',
        UNDAMAGED: 'undamaged',
        BATTLE: 'battle',
        IN_PREBATTLE: 'inPrebattle',
        LOCKED: 'locked',
        CREW_NOT_FULL: 'crewNotFull',
        AMMO_NOT_FULL: 'ammoNotFull',
        AMMO_NOT_FULL_EVENTS: 'ammoNotFullEvents',
        SERVER_RESTRICTION: 'serverRestriction',
        RENTAL_IS_OVER: 'rentalIsOver',
        IGR_RENTAL_IS_OVER: 'igrRentalIsOver',
        IN_PREMIUM_IGR_ONLY: 'inPremiumIgrOnly',
        GROUP_IS_NOT_READY: 'group_is_not_ready',
        NOT_PRESENT: 'notpresent',
        UNAVAILABLE: 'unavailable',
        UNSUITABLE_TO_QUEUE: 'unsuitableToQueue',
        UNSUITABLE_TO_UNIT: 'unsuitableToUnit',
        WILL_BE_UNLOCKED_IN_BATTLE: 'willBeUnlockedInBattle',
        DEAL_IS_OVER: 'dealIsOver',
        ROTATION_GROUP_UNLOCKED: 'rotationGroupUnlocked',
        ROTATION_GROUP_LOCKED: 'rotationGroupLocked',
        RENTABLE: 'rentable',
        RENTABLE_AGAIN: 'rentableAgain',
        DISABLED: 'disabled',
        SUBSCRIPTION_SUSPENDED: 'subscription_suspended',
        WOT_PLUS_EXCLUSIVE_VEHICLE_DISABLED: 'wot_plus_exclusive_vehicle_disabled',
    },
    stateValues = Object.values(vehicleState),
    isStateValidValue = (e) => stateValues.includes(e);
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
function ModelRouterProvider({ children: e, prefix: t = '', context: r, getRoot: s, initializer: n, rootId: o }) {
    const a = reactExports.useRef([]),
        u = reactExports.useRef(null),
        i = reactExports.useMemo(() => create({ context: r, getRoot: s, initializer: n, rootId: o }), [r, s, n, o]),
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
    const p = reactExports.useMemo(() => {
        const e = [...a.current, d];
        return ((a.current = e), { ...d, history: e });
    }, [d]);
    define_process_env_default.PUBLIC_ROUTER_DEBUG && console.log('🗺️ Route updated:', p);
    const m = reactExports.useMemo(() => {
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
        E = reactExports.useMemo(() => ({ ...p, ...m }), [m, p]);
    return jsxRuntimeExports.jsx(RouterContext.Provider, { value: E, children: e });
}
const NodeTypes = { Text: 1, Tag: 2, Var: 3 };
function parseArguments(e) {
    const t = [];
    let r = '',
        s = !1,
        n = !1,
        o = '';
    for (let a = 0; a < e.length; a++) {
        const u = e[a];
        ("'" !== u && '"' !== u) || n || s
            ? u === o && n
                ? ((n = !1), (r += u))
                : '(' !== u || n
                  ? ')' === u && s && !n
                      ? ((s = !1), (r += u))
                      : ' ' !== u || s || n
                        ? (r += u)
                        : r && (t.push(r), (r = ''))
                  : ((s = !0), (r += u))
            : ((n = !0), (o = u), (r += u));
    }
    return (r && t.push(r), t);
}
function parse(e, t) {
    const r = [],
        s = [];
    let n = '',
        o = !1,
        a = '',
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
            ((o = !0), (i += t.start.length - 1));
        } else if (l === t.end[0] && e.slice(i, i + t.end.length) === t.end) {
            ((o = !1), (i += t.end.length - 1));
            const e = a.trim();
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
            a = '';
        } else o ? (a += l) : (n += l);
    }
    if (n)
        if (s.length) {
            s[s.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
        } else r.push({ type: NodeTypes.Text, value: n });
    return r;
}
const COLORS =
        'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
    base$r = 'FormatText_db904f12',
    base__fullSize = 'FormatText_base__fullSize_a514958e',
    nowrap = 'FormatText_nowrap_ff69eca3',
    styles$w = { COLORS: COLORS, base: base$r, base__fullSize: base__fullSize, nowrap: nowrap },
    legacyColors = new Set((null == (_a = styles$w.COLORS) ? void 0 : _a.split(', ')) ?? []);
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
            t.push(split$1(s));
            continue;
        }
        const o = splitString(n.slice(1));
        (t.push(
            jsxRuntimeExports.jsxs(
                reactExports.Fragment,
                {
                    children: [
                        jsxRuntimeExports.jsxs('span', { className: styles$w.nowrap, children: [split$1(s), n[0]] }),
                        o,
                    ],
                },
                takeKey(),
            ),
        ),
            (r += 1));
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
    split: split$1,
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
        o = s[t];
    return o ? o(e, ...n) : (console.error(`Function ${t} is not registered`), e);
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
                o = t[n];
            if (o) return resolveAttrParams(e.replace(`$${n}`, String(o)), t);
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
            null === r[a.name] || primitives.includes(typeof r[a.name])
                ? o(r[a.name] ?? `{{${a.name}}}`)
                : n.push(
                      jsxRuntimeExports.jsx(
                          reactExports.Fragment,
                          { children: r[a.name] },
                          `var-${a.name}-${a.instanceId}`,
                      ),
                  );
        else if (a.type === NodeTypes.Tag) {
            const e = render(a.children, t, r, !1),
                s = applyFunctions(resolveAttrsParams(a.attrs, r), e, t);
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
                fullSize: o,
                inline: a,
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
            p = reactExports.useMemo(() => parse(i ? `{{@ split}}${c}{{/}}` : c, t), [t, c, i]),
            m = reactExports.useMemo(() => render(p, d, e.params), [p, d, e.params]),
            E = cx(styles$w.base, o && styles$w.base__fullSize, l.className);
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
                  children: m,
              }))
            : jsxRuntimeExports.jsx('span', { ...l, className: E, children: m });
    });
function FormatString({ path: e, ...t }) {
    return jsxRuntimeExports.jsx(FormatText, { text: resources.resolve('strings').readOrEmpty(e), ...t });
}
function FormatPluralString({ path: e, count: t, ...r }) {
    return jsxRuntimeExports.jsx(FormatText, { text: resources.resolve('strings').pluralOrEmpty(e, t), ...r });
}
const formatters = Object.fromEntries(Object.entries(defaultFormatters).map(([e]) => [e, (e) => e]));
function renderString(e, t = {}) {
    const r = parse(e, defaultBrackets);
    return String(render(r, formatters, t));
}
function renderResolvedString(e, t = {}) {
    const r = resources.resolve('strings').readOrEmpty(e);
    return 0 === r.length ? r : renderString(r, t);
}
const undef = () => {};
function withResolvePath(e) {
    const t = e;
    return reactExports.forwardRef(function (e, r) {
        const s = useAdaptive(e, e.adaptive),
            { path: n, ...o } = s,
            a = s.images ?? resources.resolve('images'),
            u = { ...o, ref: r };
        {
            const e = n ? a.readOr(n, undef, 'warn') : void 0;
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
    Image = withResolvePath(
        reactExports.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: r,
                    fit: s,
                    position: n,
                    width: o,
                    src: a,
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
                width: o,
                height: a,
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
                    width: 'number' == typeof o ? `${o}rem` : o,
                    height: 'number' == typeof a ? `${a}rem` : a,
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
            unselectable: o,
            unknown: a,
            unknownStyle: u = defaultUnknownStyle,
            ...i
        } = e;
        return e.unknown
            ? jsxRuntimeExports.jsx('div', { ...i, style: { width: e.width, height: e.height, ...u } })
            : jsxRuntimeExports.jsx('img', { ...i, ref: t, src: n, width: r, height: s });
    }),
);
const themes$1 = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
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
        o = n ? Object.keys(n) : [];
    if ('object' == typeof t) {
        const r = t,
            s = cva(r.className, r.cva),
            n = r.element,
            a = reactExports.forwardRef(function (e, t) {
                return reactExports.createElement(n, {
                    ...('function' == typeof n ? e : cleanProps(o, e)),
                    ref: t,
                    className: s(e),
                });
            });
        return ((a.displayName = e), r.cva && (a.cva = r.cva), a);
    }
    const a = cva(t, r),
        u = reactExports.forwardRef(function (t, r) {
            return jsxRuntimeExports.jsx('div', { 'data-name': e, ...cleanProps(o, t), ref: r, className: a(t) });
        });
    return ((u.displayName = e), r && (u.cva = r), u);
}
function cleanProps(e, t) {
    if (0 === e.length) return t;
    const r = { ...t };
    for (const s of e) delete r[s];
    return r;
}
const base$q = 'HeadlessButton_df8536fc',
    styles$v = { base: base$q },
    HeadlessButtonBase = defineStyledComponent('Button', { element: 'button', className: styles$v.base }),
    HeadlessButton = reactExports.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: r, soundTarget: s, disabled: n = !1, silent: o = !1, ...a },
        u,
    ) {
        const i = useSounds();
        return jsxRuntimeExports.jsx(HeadlessButtonBase, {
            ...a,
            ref: u,
            onMouseEnter: function (e) {
                (n || o || i.play('mouse-enter', { target: s || 'Button', original: e }), null == r || r(e));
            },
            onClick: function (e) {
                n || (o || i.play('click', { target: s || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    root$a = 'Button_root_6bcdc8c',
    background$3 = 'Button_background_98ebcfb8',
    border$2 = 'Button_border_7e6390d7',
    overlay$1 = 'Button_overlay_174632c8',
    base$p = 'Button_70871946',
    base__enabled = 'Button_base__enabled_96634d40',
    base__disabled = 'Button_base__disabled_b713e04a',
    content$4 = 'Button_content_298de63f',
    content__fontAligned = 'Button_content__fontAligned_66115778',
    styles$u = {
        root: root$a,
        background: background$3,
        border: border$2,
        overlay: overlay$1,
        base: base$p,
        base__enabled: base__enabled,
        base__disabled: base__disabled,
        'base__size-extraSmall': 'Button_base__size-extraSmall_d0cdb5ed',
        'base__size-small': 'Button_base__size-small_fc7095a4',
        'base__size-medium': 'Button_base__size-medium_814d61f0',
        'base__size-large': 'Button_base__size-large_83da852e',
        'base__theme-primary': 'Button_base__theme-primary_8ba55469',
        'base__theme-secondary': 'Button_base__theme-secondary_3fa4afc',
        content: content$4,
        content__fontAligned: content__fontAligned,
    },
    Button = reactExports.forwardRef(function (
        {
            children: e,
            size: t = sizes$7.large,
            theme: r = themes$1.primary,
            disabled: s = !1,
            silent: n = !1,
            autoAlignContent: o = !0,
            classNames: a,
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
                styles$u.base,
                styles$u[`base__size-${t}`],
                styles$u[`base__theme-${r}`],
                s ? styles$u.base__disabled : styles$u.base__enabled,
                u,
                null == a ? void 0 : a.base,
            ),
            onClick: function (e) {
                var t;
                s || null == (t = i.onClick) || t.call(i, e);
            },
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$u.background, null == a ? void 0 : a.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$u.border, null == a ? void 0 : a.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$u.overlay, null == a ? void 0 : a.overlay) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$u.content, o && styles$u.content__fontAligned, null == a ? void 0 : a.content),
                    children: e,
                }),
            ],
        });
    });
((Button.themes = themes$1), (Button.sizes = sizes$7));
const formats = { compact: 'compact', default: 'default', detailed: 'detailed' },
    STRING_RESOURCES = resources.resolve('strings'),
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
            format(
                STRING_RESOURCES.readOr('common.timer.days', () => DAYS_FORMAT.toLowerCase()),
                { days: e },
            ),
        [HOURS_FORMAT]: (e) =>
            format(
                STRING_RESOURCES.readOr('common.timer.hours', () => HOURS_FORMAT),
                { hours: e },
            ),
        [MINUTES_FORMAT]: (e) =>
            format(
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
        o = FORMAT_PARTS[t],
        a = { separator: !1, items: [] };
    for (; s < n && !(Number(e[s]) > 0); ++s);
    return (
        o[s] === MINUTES_FORMAT && 0 === Number(e[s])
            ? (a.items = [
                  null == (r = LOCALE_FORMATTERS[MINUTES_FORMAT])
                      ? void 0
                      : r.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
              ])
            : (a.items = [s, s + 1].map((t) => {
                  var r;
                  return null == (r = LOCALE_FORMATTERS[o[t]]) ? void 0 : r.call(LOCALE_FORMATTERS, e[t]);
              })),
        a
    );
}
function compactFormatter(e, t) {
    var r, s;
    const n = e.length,
        o = FORMAT_PARTS[t],
        a = { separator: !1, items: [] };
    for (let u = 0; u < n; ++u)
        if (Number(e[u]) > 0)
            return ((a.items = [null == (r = LOCALE_FORMATTERS[o[u]]) ? void 0 : r.call(LOCALE_FORMATTERS, e[u])]), a);
    return (
        (a.items = [
            null == (s = LOCALE_FORMATTERS[MINUTES_FORMAT]) ? void 0 : s.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
        ]),
        a
    );
}
const formatValue = (e, t) => {
        var r;
        return null == (r = FORMATTER[t]) ? void 0 : r.call(FORMATTER, format$1(e, FORMAT_PARTS[t]), t);
    },
    types$1 = {
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
    currencyTypes = Object.values(types$1),
    sizes$6 = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    imageSizes$1 = {
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
    };
(sizes$6.extraSmall, sizes$6.small, sizes$6.medium, sizes$6.large, sizes$6.extraLarge, sizes$6.xxl);
const root$9 = 'Currency_root_271064ec',
    base$o = 'Currency_72d4be39',
    base__reverse = 'Currency_base__reverse_f12e61b0',
    base__notEnough = 'Currency_base__notEnough_9a7842f',
    base__credits = 'Currency_base__credits_7b9ae721',
    base__gold$1 = 'Currency_base__gold_d6e3cbc',
    base__freeXP = 'Currency_base__freeXP_d29d5a57',
    base__crystal = 'Currency_base__crystal_f830cb47',
    base__tankXP = 'Currency_base__tankXP_1707c68b',
    styles$t = {
        root: root$9,
        base: base$o,
        base__reverse: base__reverse,
        base__notEnough: base__notEnough,
        base__credits: base__credits,
        base__gold: base__gold$1,
        base__freeXP: base__freeXP,
        base__crystal: base__crystal,
        base__tankXP: base__tankXP,
    },
    intl = resources.resolve('intl'),
    Base$9 = defineStyledComponent('Currency', styles$t.base, {
        variants: { reverse: { true: styles$t.base__reverse } },
    });
function formatCurrencyValue(e, t) {
    const r = t === types$1.gold ? 'gold' : 'integral';
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
    size: o = sizes$6.small,
    enough: a = !0,
    ...u
}) {
    const i = imageSizes$1[o],
        l = `${t}_${i}x${i}`,
        c = upscaledImageSizes[o],
        d = `${t}_${c}x${c}`,
        p = n || currencyTypes.includes(t),
        m = useUpscale(`library.currency.${l}`, `library.currency.${d}`);
    return jsxRuntimeExports.jsxs(Base$9, {
        ...u,
        className: cx(null == s ? void 0 : s.base, a ? styles$t[`base__${t}`] : styles$t.base__notEnough, r),
        children: [
            p &&
                jsxRuntimeExports.jsx(Image, {
                    width: i,
                    height: i,
                    path: n ?? m,
                    className: null == s ? void 0 : s.icon,
                }),
            formatCurrencyValue(e, t),
        ],
    });
}
((Currency.sizes = sizes$6), (Currency.types = types$1));
const root$8 = 'Discount_root_4a3faf4f',
    base$n = 'Discount_bbbebfd',
    percent = 'Discount_percent_b7ab402',
    styles$s = {
        root: root$8,
        base: base$n,
        'base__color-red': 'Discount_base__color-red_ce40ab53',
        'base__color-blue': 'Discount_base__color-blue_29162735',
        'base__size-medium': 'Discount_base__size-medium_50e2ae9a',
        'base__size-large': 'Discount_base__size-large_b6f874e0',
        percent: percent,
        'percent__size-medium': 'Discount_percent__size-medium_cc14676',
        'percent__color-red': 'Discount_percent__color-red_4a3faf4f',
        'percent__color-blue': 'Discount_percent__color-blue_4a3faf4f',
        'percent__size-large': 'Discount_percent__size-large_8384c978',
    },
    colors$1 = { blue: 'blue', red: 'red' },
    sizes$5 = { medium: 'medium', large: 'large' },
    StyledDiscount = defineStyledComponent('Discount', styles$s.base, {
        variants: {
            color: { [colors$1.blue]: styles$s['base__color-blue'], [colors$1.red]: styles$s['base__color-red'] },
            size: { [sizes$5.medium]: styles$s['base__size-medium'], [sizes$5.large]: styles$s['base__size-large'] },
        },
    }),
    Discount = React.forwardRef(function (
        { color: e = colors$1.red, className: t, classNames: r, size: s = sizes$5.large, ...n },
        o,
    ) {
        return jsxRuntimeExports.jsxs(StyledDiscount, {
            ...n,
            ref: o,
            color: e,
            size: s,
            className: cx(t, null == r ? void 0 : r.discount),
            children: [
                n.children,
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$s.percent,
                        styles$s[`percent__color-${e}`],
                        styles$s[`percent__size-${s}`],
                        null == r ? void 0 : r.percent,
                    ),
                }),
            ],
        });
    });
((Discount.colors = colors$1), (Discount.sizes = sizes$5));
const TabsContext = reactExports.createContext(null);
function useTabsContext() {
    const e = reactExports.useContext(TabsContext);
    return (assert(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
function Content({ children: e, keyOverride: t }) {
    const r = useTabsContext();
    return jsxRuntimeExports.jsx(reactExports.Fragment, { children: e(r.active) }, t ?? r.active);
}
const themes = { primary: 'primary', custom: 'custom' },
    sizes$4 = { large: 'large', medium: 'medium', small: 'small' },
    outerBorderImage = 'HorizontalTabs_outerBorderImage_8085e49e',
    mainBorderImage = 'HorizontalTabs_mainBorderImage_558d1c3f',
    base$m = 'HorizontalTabs_69e3c6f3',
    outerBorder = 'HorizontalTabs_outerBorder_3255d0c5',
    mainBorder = 'HorizontalTabs_mainBorder_61e34c2c',
    content$3 = 'HorizontalTabs_content_1ae3c4bd',
    styles$r = {
        outerBorderImage: outerBorderImage,
        mainBorderImage: mainBorderImage,
        base: base$m,
        'base__size-small': 'HorizontalTabs_base__size-small_75fae891',
        'base__size-medium': 'HorizontalTabs_base__size-medium_afc0934f',
        'base__size-large': 'HorizontalTabs_base__size-large_12c75e24',
        outerBorder: outerBorder,
        'base__theme-primary': 'HorizontalTabs_base__theme-primary_5e3af03e',
        mainBorder: mainBorder,
        content: content$3,
    },
    Base$8 = defineStyledComponent('Tabs', styles$r.base, {
        variants: {
            size: {
                [sizes$4.large]: styles$r['base__size-large'],
                [sizes$4.medium]: styles$r['base__size-medium'],
                [sizes$4.small]: styles$r['base__size-small'],
            },
            theme: { [themes.primary]: styles$r['base__theme-primary'], [themes.custom]: void 0 },
        },
    }),
    Switcher = reactExports.forwardRef(function ({ children: e, classNames: t, ...r }, s) {
        const n = useTabsContext();
        return jsxRuntimeExports.jsx(Base$8, {
            ...r,
            ref: s,
            className: cx(r.className, null == t ? void 0 : t.base),
            size: n.size,
            theme: n.theme,
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(styles$r.outerBorder, null == t ? void 0 : t.outerBorder),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$r.outerBorderImage, null == t ? void 0 : t.outerBorderImage),
                    }),
                    jsxRuntimeExports.jsxs('div', {
                        className: cx(styles$r.mainBorder, null == t ? void 0 : t.mainBorder),
                        children: [
                            jsxRuntimeExports.jsx('div', {
                                className: cx(styles$r.mainBorderImage, null == t ? void 0 : t.mainBorderImage),
                            }),
                            jsxRuntimeExports.jsx('div', {
                                className: cx(styles$r.content, null == t ? void 0 : t.content),
                                children: e,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    border$1 = 'Tab_border_a63aeb3f',
    background$2 = 'Tab_background_4c9b3eb9',
    backgroundPattern = 'Tab_backgroundPattern_417be4b5',
    innerBorderImage = 'Tab_innerBorderImage_adadda5f',
    base$l = 'Tab_f59c2b00',
    content$2 = 'Tab_content_b3f6c22b',
    base__active$1 = 'Tab_base__active_0',
    base__inactive = 'Tab_base__inactive_0',
    styles$q = {
        border: border$1,
        background: background$2,
        backgroundPattern: backgroundPattern,
        innerBorderImage: innerBorderImage,
        base: base$l,
        'base__theme-primary': 'Tab_base__theme-primary_90fd5ee',
        content: content$2,
        'base__size-small': 'Tab_base__size-small_0',
        'base__size-medium': 'Tab_base__size-medium_0',
        'base__size-large': 'Tab_base__size-large_0',
        base__active: base__active$1,
        base__inactive: base__inactive,
    },
    Base$7 = defineStyledComponent('Tab', styles$q.base, {
        variants: {
            size: {
                [sizes$4.large]: styles$q['base__size-large'],
                [sizes$4.medium]: styles$q['base__size-medium'],
                [sizes$4.small]: styles$q['base__size-small'],
            },
            theme: { [themes.primary]: styles$q['base__theme-primary'], [themes.custom]: void 0 },
            state: { active: styles$q.base__active, inactive: styles$q.base__inactive },
        },
        defaultVariants: { size: sizes$4.medium, theme: themes.primary },
    }),
    HeadlessTab = reactExports.forwardRef(function (
        { theme: e, size: t, tabId: r, active: s, children: n, onClick: o, onMouseEnter: a, ...u },
        i,
    ) {
        const l = useSounds();
        return jsxRuntimeExports.jsx(Base$7, {
            ...u,
            ref: i,
            theme: e,
            size: t,
            state: s === r ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (s !== r && l.play('mouse-enter', { target: Base$7.displayName, original: e }), null == a || a(e));
            },
            onClick: function (e) {
                (s !== r && l.play('click', { target: Base$7.displayName, original: e }), null == o || o(e));
            },
            children: n,
        });
    });
function Tab({ tabId: e, classNames: t, className: r, children: s, ...n }) {
    const o = useTabsContext();
    return jsxRuntimeExports.jsxs(HeadlessTab, {
        'data-test-id': `${e}Tab`,
        ...n,
        tabId: e,
        theme: o.theme,
        size: o.size,
        active: o.active,
        className: cx(null == t ? void 0 : t.base, r),
        onClick: (t) => {
            var r;
            (null == (r = n.onClick) || r.call(n, t), o.change(e));
        },
        children: [
            jsxRuntimeExports.jsx('div', { className: cx(styles$q.background, null == t ? void 0 : t.background) }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$q.backgroundPattern, null == t ? void 0 : t.backgroundPattern),
            }),
            jsxRuntimeExports.jsx('div', { className: cx(styles$q.border, null == t ? void 0 : t.border) }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$q.innerBorderImage, null == t ? void 0 : t.borderImage),
            }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$q.content, null == t ? void 0 : t.content),
                children: s,
            }),
        ],
    });
}
function Tabs({ active: e, theme: t, size: r, children: s, onActiveChange: n }) {
    const [o, a] = reactExports.useState(e),
        u = reactExports.useRef(e),
        i = reactExports.useMemo(() => ({ active: o, theme: t, size: r, change: a }), [o, r, t]);
    return (
        reactExports.useLayoutEffect(() => {
            a(e);
        }, [e]),
        reactExports.useEffect(() => {
            u.current !== o && ((u.current = o), null == n || n(o));
        }, [o, n]),
        jsxRuntimeExports.jsx(TabsContext.Provider, { value: i, children: s })
    );
}
((Tabs.Switcher = Switcher), (Tabs.Tab = Tab), (Tabs.Content = Content));
const base$k = 'TruncateText_dcb41d92',
    styles$p = { base: base$k },
    TruncatedText = reactExports.forwardRef(function ({ text: e, tooltipParams: t, className: r, ...s }, n) {
        const o = useSimpleTooltip({ header: null == t ? void 0 : t.header, body: (null == t ? void 0 : t.body) || e }),
            a = reactExports.useRef(null),
            [u, i] = reactExports.useState(!1);
        const l = reactExports.useCallback(() => {
            if (a.current) {
                const { scrollWidth: e, offsetWidth: t } = a.current;
                i(e > t);
            }
        }, []);
        return (
            reactExports.useEffect(() => {
                u || o.onMouseLeave();
            }, [u, o]),
            useLayoutReady(l, [l]),
            useResizeLayoutReady(l, [l]),
            useRefResizeObserver(a, l),
            jsxRuntimeExports.jsx('div', {
                ...s,
                ref: function (e) {
                    ((a.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                className: cx(styles$p.base, r),
                ...(u ? o : {}),
                children: e,
            })
        );
    }),
    sizes$3 = { small: 'small', medium: 'medium' },
    types = { bubble: 'bubble', discount: 'discount' },
    imageSizes = { [sizes$3.small]: 48, [sizes$3.medium]: 60 };
function getImagePath(e, t, r) {
    return e === types.bubble || e === types.discount ? `library.notification.${e}_${t}x${t}` : r;
}
function Icon({ className: e, size: t = sizes$3.small, type: r, imagePath: s }) {
    const n = imageSizes[t];
    return jsxRuntimeExports.jsx(Image, { width: n, height: n, path: getImagePath(r, n, s), className: e });
}
resources.resolve('intl');
const base$j = 'Bubble_df22310d',
    base__hidden = 'Bubble_base__hidden_1700314d',
    styles$o = { base: base$j, base__hidden: base__hidden },
    Bubble = {
        Root: defineStyledComponent('Bubble', styles$o.base, { variants: { hidden: { true: styles$o.base__hidden } } }),
        Icon: Icon,
    },
    base$i = 'IconCounter_33c660e9',
    styles$n = { base: base$i };
function IconCounter({ className: e }) {
    return jsxRuntimeExports.jsx('div', { className: cx(styles$n.base, e) });
}
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
const base$h = 'ShortCounter_d2d7b370',
    text = 'ShortCounter_text_ecf2e742',
    count = 'ShortCounter_count_d7a74fd8',
    styles$m = { base: base$h, text: text, count: count },
    ShortCounter = reactExports.forwardRef(function ({ time: e, wins: t, battles: r, classNames: s, ...n }, o) {
        const a = resources.resolve('intl'),
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
                ref: o,
                className: cx(styles$m.base, null == s ? void 0 : s.base),
                children: [
                    jsxRuntimeExports.jsx(IconCounter, { className: null == s ? void 0 : s.icon }),
                    jsxRuntimeExports.jsx(FormatPluralString, {
                        className: cx(styles$m.text, null == s ? void 0 : s.text),
                        path: i.path,
                        count: i.count,
                        params: {
                            count: jsxRuntimeExports.jsxs('span', {
                                className: styles$m.count,
                                children: [a.formatNumber('integral', i.count), ' '],
                            }),
                        },
                    }),
                ],
            });
    }),
    RentalCounter = reactExports.forwardRef(function ({ className: e, ...t }, r) {
        return jsxRuntimeExports.jsx('div', { ...t, ref: r, className: e });
    });
RentalCounter.ShortCounter = ShortCounter;
const base$g = 'VehicleLevel_3c938122',
    styles$l = { base: base$g },
    numberTypes = { arabic: 'arabic', roman: 'roman' };
function getLevelType(e, t) {
    return e || (t ? numberTypes.arabic : numberTypes.roman);
}
const VehicleLevel = reactExports.forwardRef(function ({ value: e, numberType: t, ...r }, s) {
    const n = getLevelType(t, useRomanForbidden()) === numberTypes.roman ? arabicToRoman(e) : e;
    return jsxRuntimeExports.jsx('div', {
        ...r,
        'data-name': 'VehicleLevel',
        className: cx(styles$l.base, r.className),
        ref: s,
        children: n,
    });
});
VehicleLevel.numberTypes = numberTypes;
const MIN_LEVEL = 1,
    TYPE_PRESTIGE = 'prestige',
    EMPTY_GRADE = -1,
    directions = { left: 'left', right: 'right' },
    lengths = { short: 'short', medium: 'medium', long: 'long' },
    iconLength = (e) => (e < 10 ? lengths.short : e < 100 ? lengths.medium : lengths.long),
    icon$7 = (e, t, r) => (t === TYPE_PRESTIGE ? TYPE_PRESTIGE : `${t}.${iconLength(e)}.c_${r}`),
    root$7 = 'VehiclePrestigeLevel_root_4426b46c',
    base$f = 'VehiclePrestigeLevel_a750cce',
    icon$6 = 'VehiclePrestigeLevel_icon_ef024cc3',
    base__left = 'VehiclePrestigeLevel_base__left_4426b46c',
    level$1 = 'VehiclePrestigeLevel_level_10f410ba',
    level__short = 'VehiclePrestigeLevel_level__short_d1939fb1',
    base__right = 'VehiclePrestigeLevel_base__right_4426b46c',
    level__medium = 'VehiclePrestigeLevel_level__medium_90aed80f',
    level__long = 'VehiclePrestigeLevel_level__long_26625167',
    base__iron = 'VehiclePrestigeLevel_base__iron_4426b46c',
    base__bronze = 'VehiclePrestigeLevel_base__bronze_4426b46c',
    base__silver = 'VehiclePrestigeLevel_base__silver_4426b46c',
    base__gold = 'VehiclePrestigeLevel_base__gold_4426b46c',
    base__enamel = 'VehiclePrestigeLevel_base__enamel_4426b46c',
    styles$k = {
        root: root$7,
        base: base$f,
        icon: icon$6,
        base__left: base__left,
        level: level$1,
        level__short: level__short,
        base__right: base__right,
        level__medium: level__medium,
        level__long: level__long,
        base__iron: base__iron,
        base__bronze: base__bronze,
        base__silver: base__silver,
        base__gold: base__gold,
        base__enamel: base__enamel,
    };
function PrestigeLevel({ level: e, grade: t, type: r, direction: s, classNames: n, ...o }) {
    return e < MIN_LEVEL || t === EMPTY_GRADE
        ? null
        : jsxRuntimeExports.jsxs('div', {
              ...o,
              className: cx(
                  styles$k.base,
                  styles$k[`base__${r}`],
                  styles$k[`base__${s}`],
                  o.className,
                  null == n ? void 0 : n.base,
              ),
              children: [
                  jsxRuntimeExports.jsx(Image, {
                      path: `prestige.tab.${icon$7(e, r, t)}`,
                      className: cx(styles$k.icon, null == n ? void 0 : n.icon),
                  }),
                  r !== TYPE_PRESTIGE &&
                      jsxRuntimeExports.jsx('div', {
                          className: cx(
                              styles$k.level,
                              styles$k[`level__${iconLength(e)}`],
                              null == n ? void 0 : n.level,
                          ),
                          children: e,
                      }),
              ],
          });
}
PrestigeLevel.direction = directions;
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
    root$6 = 'VehicleRole_root_741b56a9',
    base$e = 'VehicleRole_e70537d3',
    base__x16x16 = 'VehicleRole_base__x16x16_f444f190',
    base__x24x24$1 = 'VehicleRole_base__x24x24_cc02d077',
    base__x32x32 = 'VehicleRole_base__x32x32_2180a099',
    base__x48x48$1 = 'VehicleRole_base__x48x48_2a01e86c',
    icon$5 = 'VehicleRole_icon_7f7f6256',
    styles$j = {
        root: root$6,
        base: base$e,
        base__x16x16: base__x16x16,
        base__x24x24: base__x24x24$1,
        base__x32x32: base__x32x32,
        base__x48x48: base__x48x48$1,
        icon: icon$5,
    },
    sizes$2 = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48' },
    VehicleRole = reactExports.forwardRef(function ({ roleKey: e, size: t = sizes$2.x24x24, classNames: r, ...s }, n) {
        const o = ROLE_TO_COMPONENT[`${e}_${t}`];
        if (o)
            return jsxRuntimeExports.jsx('div', {
                ...s,
                ref: n,
                className: cx(styles$j.base, styles$j[`base__${t}`], null == r ? void 0 : r.base),
                children: jsxRuntimeExports.jsx(o, { className: cx(styles$j.icon, null == r ? void 0 : r.icon) }),
            });
        console.error(`Unknown vehicle role type ${e} with size ${t}`);
    });
VehicleRole.sizes = sizes$2;
const sizes$1 = { x24x24: 'x24x24', x48x48: 'x48x48', x64x64: 'x64x64', x96x96: 'x96x96' },
    upscaledSizes = { x24x24: 'x64x64', x48x48: 'x96x96', x64x64: 'x96x96', x96x96: 'x96x96' },
    mapTypes = {
        [types$2.lightTank]: 'light_tank',
        [types$2.mediumTank]: 'medium_tank',
        [types$2.heavyTank]: 'heavy_tank',
        [types$2.SPG]: 'spg',
        [types$2['AT-SPG']]: 'tank_destroyer',
    },
    root$5 = 'VehicleType_root_4e0d61e4',
    base$d = 'VehicleType_30b4aab0',
    base__x24x24 = 'VehicleType_base__x24x24_a3dc7aa3',
    base__x48x48 = 'VehicleType_base__x48x48_cb59f57a',
    base__x64x64 = 'VehicleType_base__x64x64_bb9b890',
    base__x96x96 = 'VehicleType_base__x96x96_919f9f92',
    base__premium__x24x24 = 'VehicleType_base__premium__x24x24_92335fef',
    base__premium__x48x48 = 'VehicleType_base__premium__x48x48_e19c5d21',
    base__premium__x64x64 = 'VehicleType_base__premium__x64x64_ba9a2a05',
    base__premium__x96x96 = 'VehicleType_base__premium__x96x96_d837a523',
    icon$4 = 'VehicleType_icon_b15d2628',
    styles$i = {
        root: root$5,
        base: base$d,
        base__x24x24: base__x24x24,
        base__x48x48: base__x48x48,
        base__x64x64: base__x64x64,
        base__x96x96: base__x96x96,
        base__premium__x24x24: base__premium__x24x24,
        base__premium__x48x48: base__premium__x48x48,
        base__premium__x64x64: base__premium__x64x64,
        base__premium__x96x96: base__premium__x96x96,
        icon: icon$4,
    },
    VehicleType = reactExports.forwardRef(function (
        { type: e, size: t = sizes$1.x48x48, premium: r = !1, fit: s = 'contain', ...n },
        o,
    ) {
        const a = useUpscale(sizes$1[t], upscaledSizes[t]);
        return jsxRuntimeExports.jsx(Image, {
            ...n,
            ref: o,
            fit: s,
            className: cx(styles$i.base, r ? styles$i[`base__premium__${t}`] : styles$i[`base__${t}`], n.className),
            path: `ui_kit.vehicle_type.${a}.${r ? 'premium_' : ''}${normalizeResource(mapTypes[e])}_${a}`,
        });
    });
((VehicleType.types = types$2), (VehicleType.sizes = sizes$1));
const base$c = 'VehicleInfo_1732f1f0',
    name = 'VehicleInfo_name_3989ca04',
    name__premium = 'VehicleInfo_name__premium_258b3b93',
    styles$h = { base: base$c, name: name, name__premium: name__premium },
    VehicleName = defineStyledComponent('VehicleName', styles$h.name, {
        variants: { premium: { true: styles$h.name__premium } },
    }),
    VehicleInfo = reactExports.forwardRef(function (e, t) {
        return jsxRuntimeExports.jsx('div', { ...e, ref: t, className: cx(styles$h.base, e.className) });
    });
((VehicleInfo.Prestige = PrestigeLevel),
    (VehicleInfo.Level = VehicleLevel),
    (VehicleInfo.Type = VehicleType),
    (VehicleInfo.Name = VehicleName),
    (VehicleInfo.Role = VehicleRole));
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
    for (const o of r) {
        const t = splitPath(o);
        if (s && n.length !== t.length) continue;
        const r = {};
        let a = !0;
        for (let e = 0; e < t.length; e++) {
            const s = t[e],
                o = n[e];
            if (!o) {
                a = !1;
                break;
            }
            if (s.startsWith(':')) {
                r[s.slice(1)] = o;
            } else if (s !== o) {
                a = !1;
                break;
            }
        }
        if (a) {
            const a = `/${n.slice(0, t.length).join('/')}`,
                u = e === a;
            if (s && !u) continue;
            return { params: r, exact: u, path: o, url: a };
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
            const o = matchPath(s, { paths: [r], exact: e.props.exact });
            o && (n = { child: e, match: o });
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
const Context$2 = reactExports.createContext(void 0);
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
        triggerMouseMoveOnUpdate: o = !1,
    }) => {
        const a = (e, r) => {
            const [s, n] = t(e);
            return clamp(s, n, r);
        };
        return (u = {}) => {
            const { settings: i = defaultSettings } = u,
                [l, c] = reactExports.useState(!1),
                d = reactExports.useRef(null),
                p = reactExports.useRef(null),
                m = reactExports.useRef({ wrapper: 0, container: 0 }),
                E = useEmitter(),
                _ = useThrottle(
                    () => {
                        forceTriggerMouseMove$1();
                    },
                    [],
                    150,
                ),
                [f, h] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = d.current;
                        t && (r(t, e), E.trigger('change', e));
                    },
                    onRest: (e) => E.trigger('rest', e),
                    onStart: (e) => E.trigger('start', e),
                    onPause: (e) => E.trigger('pause', e),
                })),
                g = reactExports.useCallback(
                    (e, t, r) => {
                        const s = f.scrollPosition.get(),
                            n = (f.scrollPosition.goal ?? 0) - s;
                        return a(e, t * r + n + s);
                    },
                    [f.scrollPosition],
                ),
                x = reactExports.useCallback(
                    function (e, { immediate: t = !1, reset: r = !0 } = {}) {
                        const s = d.current;
                        if (!s) return;
                        const n = a(s, e);
                        f.scrollPosition.get() !== n &&
                            h.start({
                                scrollPosition: n,
                                immediate: t,
                                reset: r,
                                config: i.animationConfig,
                                from: { scrollPosition: a(s, f.scrollPosition.get()) },
                                onChange: () => {
                                    o && _();
                                },
                            });
                    },
                    [h, i.animationConfig, f.scrollPosition, _],
                ),
                b = reactExports.useCallback(
                    function (e) {
                        const t = d.current,
                            r = p.current;
                        if (!t || !r) return;
                        const s = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return n(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(r, i.step),
                            o = g(t, e, s);
                        x(o);
                    },
                    [x, g, i.step],
                ),
                v = reactExports.useCallback(
                    function (e) {
                        l ||
                            (0 !== e.deltaY && b(s(e)),
                            d.current && E.trigger('mouseWheel', e, f.scrollPosition, t(d.current)));
                    },
                    [f.scrollPosition, b, E, l],
                ),
                A = reactExports.useCallback(
                    function () {
                        const e = d.current;
                        e && (x(a(e, f.scrollPosition.goal), { immediate: !0 }), E.trigger('resizeHandled'));
                    },
                    [x, f.scrollPosition.goal, E],
                );
            useRefResizeObserver(p, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const r = n(t);
                m.current.wrapper !== r && A();
            });
            const y = useEvent(function () {
                    const t = d.current;
                    if (!t) return;
                    const r = e(t),
                        s = p.current ? n(p.current) : 0;
                    if (m.current.container !== r || m.current.wrapper !== s) {
                        const e = a(t, f.scrollPosition.goal);
                        (e !== f.scrollPosition.goal && x(e, { immediate: !0 }),
                            (m.current.container = r),
                            (m.current.wrapper = s),
                            E.trigger('recalculateContent'));
                    }
                }),
                F = useSkipFrame();
            reactExports.useEffect(() => addEventListener(window, 'resize', () => F.run(A)), [A, F]);
            return reactExports.useMemo(
                () => ({
                    getWrapperSize: () => (p.current ? n(p.current) : void 0),
                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                    getBounds: () =>
                        d.current ? t(d.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: i.step.clampedArrowStepTimeout,
                    settings: i,
                    clampPosition: a,
                    handleMouseWheel: v,
                    applyScroll: x,
                    applyStepTo: b,
                    contentRef: d,
                    wrapperRef: p,
                    scrollPosition: h,
                    animationScroll: f,
                    recalculateContent: y,
                    disabled: l,
                    setDisabled: c,
                    events: { on: E.on, off: E.off },
                }),
                [i, v, x, b, h, f, y, l, c, E.on, E.off],
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
    scrollOrientations = { horizontal: 'horizontal', vertical: 'vertical' },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT = 100,
    MOUSE_BUTTON_LEFT = 0,
    root$4 = 'Thumb_root_830942bb',
    background$1 = 'Thumb_background_7f3dd6ac',
    border = 'Thumb_border_5749138b',
    innerBorder = 'Thumb_innerBorder_42bafd18',
    icon$3 = 'Thumb_icon_dca8bf26',
    base$b = 'Thumb_6ff3e706',
    base__vertical = 'Thumb_base__vertical_55a67c91',
    base__horizontal = 'Thumb_base__horizontal_27ca7ace',
    base__active = 'Thumb_base__active_830942bb',
    styles$g = {
        root: root$4,
        background: background$1,
        border: border,
        innerBorder: innerBorder,
        icon: icon$3,
        base: base$b,
        base__vertical: base__vertical,
        base__horizontal: base__horizontal,
        base__active: base__active,
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
        n = useEvent(function () {
            const r = t.current,
                s = e.trackRef.current,
                n = e.api.getWrapperSize(),
                o = e.api.getContainerSize();
            if (!(n && o && r && s)) return;
            const a = Math.min(1, n / o),
                u = 'horizontal' === e.direction ? 'width' : 'height';
            return ((r.style[u] = `${e.calculateSize(s, a)}px`), (r.style.display = 'flex'), a);
        }),
        [o, a] = useSpring(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: easings.easeInCubic,
            config: { duration: 200 },
        }));
    reactExports.useEffect(() => {
        r || e.dragging
            ? a.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(styles$g.base__active);
                  },
              })
            : a.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(styles$g.base__active);
                  },
              });
    }, [r, e.dragging, e.styles.closed, e.styles.opened, a]);
    const u = useEvent(function () {
            var r;
            const s = e.trackRef.current,
                n = t.current,
                o = e.railBeforeRef.current,
                u = e.railAfterRef.current,
                i = e.api.getWrapperSize(),
                l = e.api.getContainerSize();
            if (!(i && s && n && o && u && l)) return;
            const c = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, i / l),
                p = clamp(0, 1, c / (l - i)),
                m = e.calculateSize(s, d),
                E = (('horizontal' === e.direction ? s.offsetWidth : s.offsetHeight) - m) * p || 0,
                _ = Math.round((2 * p - 1) * BOUNCING_OFFSET);
            (n.style.setProperty('--thumbOffset', `${E}px`),
                null == (r = e.onUpdate) || r.call(e, { thumbSize: m, thumbOffset: E, newBouncingCorrection: _ }));
            const f = 0 === E || e.isBoundThumb(E) ? 0 : _;
            return (
                a.start({
                    to: { '--bouncingCorrection': `${f}px` },
                    ...(0 === f ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                E
            );
        }),
        i = useSkipFrame(),
        l = useEvent(function () {
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
            className: cx(styles$g.base, styles$g[`base__${e.direction}`], e.className),
            style: o,
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$g.background }),
                jsxRuntimeExports.jsx('div', { className: styles$g.border }),
                jsxRuntimeExports.jsx('div', { className: styles$g.innerBorder }),
                jsxRuntimeExports.jsx('div', { className: styles$g.icon }),
            ],
        })
    );
}
const initBarDraggingState = { pending: !1, offset: 0 };
function useBarDragging(e, t, r, s, n) {
    const [o, a] = reactExports.useState(initBarDraggingState),
        u = useEvent(t),
        i = reactExports.useCallback(
            (t) => {
                (a(t), e.current && u({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [u, e],
        );
    return (
        reactExports.useEffect(() => {
            if (!o.pending) return;
            const t = mouse.move(function ([t]) {
                    const a = r.contentRef.current;
                    if (!a) return;
                    const i = s.current,
                        l = e.current;
                    if (!a || !i || !l) return;
                    const c = n(t, o, { parent: i, thumb: l }),
                        d = c * (r.getContainerSize() ?? 0);
                    (r.scrollPosition.start({
                        scrollPosition: r.clampPosition(a, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: r.animationScroll.scrollPosition.get() },
                    }),
                        u({ type: 'dragging', dragElement: l, elementOffset: c, contentOffset: d }));
                }),
                a = mouse.up(() => {
                    i(initBarDraggingState);
                });
            return () => {
                (t(), a());
            };
        }, [r, o.offset, o.pending, u, i, e, s, o, n]),
        i
    );
}
const DISABLE_CLASS = 'disable',
    ACTIVE_CLASS = 'scroll-active';
function useUpdateStatesBar({ api: e, baseRef: t }) {
    const r = useSkipFrame(),
        s = useEvent(function () {
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
function getCoordinate(e, t, r, s, n, o) {
    return {
        occurredEvent: o === scrollOrientations.horizontal ? e.screenX : e.screenY,
        bar: getElementCoordinates(t, o),
        thumb: getElementCoordinates(r, o),
        backButton: getElementCoordinates(s, o),
        forwardButton: getElementCoordinates(n, o),
    };
}
function useBarHandlers(e, t, r, s, n, o, a) {
    const u = useSounds(),
        i = n.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT,
        [l, c] = useRepeatCallback((e) => n.applyStepTo(e), i, [n]);
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
        p = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (u.play('click', { target: 'Scroll:Forward', original: e }), l(Direction.Prev));
            },
            [l, u],
        ),
        m = reactExports.useCallback(
            (i) => {
                const l = e.current,
                    c = t.current,
                    m = r.current,
                    E = s.current;
                if (!(l && c && m && E && i.button === MOUSE_BUTTON_LEFT)) return;
                const _ = getCoordinate(i, l, c, m, E, a),
                    f = _.thumb.start <= _.occurredEvent && _.occurredEvent <= _.thumb.end,
                    h =
                        (_.backButton.start <= _.occurredEvent && _.occurredEvent <= _.backButton.end) ||
                        (_.forwardButton.start <= _.occurredEvent && _.occurredEvent <= _.forwardButton.end);
                if (f) o({ pending: !0, offset: _.occurredEvent - _.thumb.start });
                else if (h) {
                    ((_.occurredEvent > _.thumb.start ? Direction.Prev : Direction.Next) === Direction.Next ? d : p)(i);
                } else {
                    const e = _.occurredEvent - _.bar.start,
                        t = _.thumb.end - _.thumb.start,
                        r = _.bar.end - _.bar.start,
                        s = n.getContainerSize();
                    if ('number' != typeof s || Number.isNaN(s)) return console.error('Incorrect container size');
                    const o = ((e - t / 2) / r) * s;
                    n.applyScroll(o);
                }
                u.play('click', { target: 'Scroll:' + (f ? 'thumb' : h ? 'button' : ''), original: i });
            },
            [e, t, r, s, u, a, o, d, p, n],
        ),
        E = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    u.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [u],
        );
    return reactExports.useMemo(
        () => ({
            handleMouseBackDown: d,
            handleMouseEnter: E,
            handleMouseDownTrack: m,
            handleMouseForwardDown: p,
            handleMouseForwardUp: c,
            handleMouseBackUp: c,
        }),
        [d, E, m, p, c],
    );
}
const rail$1 = 'HorizontalBar_rail_37858d8f',
    base$a = 'HorizontalBar_4df27ac3',
    track$1 = 'HorizontalBar_track_649dc296',
    rail__left = 'HorizontalBar_rail__left_1a906b4e',
    rail__right = 'HorizontalBar_rail__right_cd24364e',
    button__right = 'HorizontalBar_button__right_e8f0aa2d',
    button__left = 'HorizontalBar_button__left_da330e13',
    button$1 = 'HorizontalBar_button_cbabd91',
    styles$f = {
        rail: rail$1,
        base: base$a,
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
    Bar$1 = reactExports.memo(function ({ classNames: e = {}, onDrag: t = noop }) {
        const r = reactExports.useRef(null),
            s = reactExports.useRef(null),
            n = reactExports.useRef(null),
            o = reactExports.useRef(null),
            a = reactExports.useRef(null),
            u = reactExports.useRef(null),
            i = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useHorizontalScroll();
        useUpdateStatesBar({ baseRef: r, api: d });
        const p = useEvent(
                (e, t, { parent: r }) => (e.screenX - t.offset - r.getBoundingClientRect().x) / r.offsetWidth,
            ),
            m = useEvent((e) => e - (o.current.offsetWidth - a.current.offsetWidth) >= -0.5),
            E = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            _ = useBarDragging(a, E, d, o, p),
            f = useEvent(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: r }) => {
                const s = o.current,
                    n = u.current,
                    a = i.current;
                if (!s || !n || !a) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET$1);
                ((n.style.width = `${t - l + r}px`), (a.style.width = s.offsetWidth - e - t - l - r + 'px'));
            }),
            { handleMouseEnter: h, handleMouseDownTrack: g } = useBarHandlers(
                r,
                a,
                n,
                s,
                d,
                _,
                scrollOrientations.horizontal,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$f.base, e.base),
            ref: r,
            onWheel: d.handleMouseWheel,
            onMouseDown: g,
            onMouseEnter: h,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: s,
                    className: cx(styles$f.button, styles$f.button__left, e.leftButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: o,
                    className: cx(styles$f.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: u,
                            className: cx(styles$f.rail, styles$f.rail__left, e.leftRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: l,
                            api: d,
                            calculateOffset: p,
                            calculateSize: calculateThumbSize$1,
                            direction: 'horizontal',
                            isBoundThumb: m,
                            railAfterRef: u,
                            railBeforeRef: i,
                            styles: THUMB_STYLES$1,
                            onUpdate: f,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$f.rail, styles$f.rail__right, e.rightRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$f.button, styles$f.button__right, e.rightButton),
                }),
            ],
        });
    }),
    base$9 = 'HorizontalScroll_5b201d2b',
    wrapper = 'HorizontalScroll_wrapper_abec8dee',
    defaultScrollArea = 'HorizontalScroll_defaultScrollArea_a5c0f45',
    styles$e = { base: base$9, wrapper: wrapper, defaultScrollArea: defaultScrollArea },
    DefaultScroll$1 = ({
        children: e,
        className: t,
        barClassNames: r,
        areaClassName: s,
        classNames: n,
        scrollClassName: o,
        onDrag: a,
    }) => {
        const { api: u } = useHorizontalScroll(),
            i = reactExports.useMemo(() => {
                const e = r || {};
                return { ...e, base: cx(styles$e.base, e.base) };
            }, [r]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$e.defaultScroll, t),
            onWheel: u.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$e.defaultScrollArea, s),
                    children: jsxRuntimeExports.jsx(Area$1, { className: o, classNames: n, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$1, { onDrag: a, classNames: i }),
            ],
        });
    };
function Area$1({ className: e, classNames: t, children: r }) {
    const { api: s } = useHorizontalScroll();
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$e.base, e),
        children: jsxRuntimeExports.jsx('div', {
            className: cx(styles$e.wrapper, null == t ? void 0 : t.wrapper),
            onWheel: s.handleMouseWheel,
            ref: s.wrapperRef,
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$e.content, null == t ? void 0 : t.content),
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
            wrapperRef: o,
            scrollPosition: a,
            clampPosition: u,
            animationScroll: i,
            events: l,
            disabled: c,
        } = e,
        [d, p] = reactExports.useState(INITIAL_DRAGGING_STATE),
        [m, E] = reactExports.useState(0),
        { gapBeforeStart: _ } = {},
        f = useSkipFrame(),
        h = useEvent(() => {
            f.run(() => {
                const t = e.contentRef.current,
                    r = e.getWrapperSize(),
                    s = e.getContainerSize();
                t && r && s && !c && (t.style.cursor = s <= r ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
            });
        });
    return (
        reactExports.useEffect(() => {
            h();
        }, [d.type, h]),
        useResize(() => {
            h();
        }, [h]),
        reactExports.useEffect(() => {
            if ('pending' !== d.type) return;
            const e = n.current,
                r = o.current;
            if (null === e || null === r) return;
            const s = mouse.move(([e]) => {
                    const r = getScreenCoordinate(e, t);
                    (void 0 === _ || Math.abs(m - r) > _) &&
                        p({ type: 'dragging', positionFrom: r, previousScrollPosition: i.scrollPosition.get() });
                }),
                a = mouse.up(() => p({ type: 'scrollComplete' }));
            return () => {
                (s(), a());
            };
        }, [i.scrollPosition, n, m, t, d, _, o]),
        reactExports.useEffect(() => {
            if ('dragging' !== d.type) return;
            const e = mouse.move(([e, s]) => {
                const l = n.current,
                    c = o.current;
                if ('outside' === s) return void p({ type: 'scrollComplete' });
                const m = getEventCoordinate(e, t);
                if (null === l || null === c || ('inside' === s && m < 0)) return;
                const E = c.offsetLeft,
                    _ = 'inside' === s ? m : m - E,
                    f = d.positionFrom - _,
                    h = d.previousScrollPosition + f;
                a.start({ scrollPosition: u(l, h), from: { scrollPosition: i.scrollPosition.get() }, ...r });
            });
            const s = mouse.up(function () {
                p({ type: 'scrollComplete' });
            });
            return () => {
                (e(), s());
            };
        }, [i.scrollPosition, u, n, d, a, o, r, t]),
        reactExports.useEffect(() => {
            if ('scrollComplete' !== d.type) return;
            const e = () => {
                p(INITIAL_DRAGGING_STATE);
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
                (E(r),
                    p(
                        void 0 === _ || _ <= 0
                            ? { type: 'dragging', positionFrom: r, previousScrollPosition: i.scrollPosition.get() }
                            : { type: 'pending' },
                    ));
            };
            return (e.addEventListener('mousedown', r), () => e.removeEventListener('mousedown', r));
        }, [i.scrollPosition, n, c, t, _]),
        d
    );
}
function Base$6({ settings: e, children: t }) {
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
    base$8 = 'VerticalBar_7187fa00',
    track = 'VerticalBar_track_ff482708',
    rail__top = 'VerticalBar_rail__top_ee531f43',
    rail__bottom = 'VerticalBar_rail__bottom_3eaa33b1',
    button__bottom = 'VerticalBar_button__bottom_6880f123',
    button__top = 'VerticalBar_button__top_b8383775',
    button = 'VerticalBar_button_7b0e4aca',
    styles$d = {
        rail: rail,
        base: base$8,
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
    Bar = reactExports.memo(function ({ classNames: e = {}, onDrag: t = noop }) {
        const r = reactExports.useRef(null),
            s = reactExports.useRef(null),
            n = reactExports.useRef(null),
            o = reactExports.useRef(null),
            a = reactExports.useRef(null),
            u = reactExports.useRef(null),
            i = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useVerticalScroll();
        useUpdateStatesBar({ baseRef: r, api: d });
        const p = useEvent((e) => e - (o.current.offsetHeight - a.current.offsetHeight) >= -0.5),
            m = useEvent(
                (e, t, { parent: r }) => (e.screenY - t.offset - r.getBoundingClientRect().y) / r.offsetHeight,
            ),
            E = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            _ = useBarDragging(a, E, d, o, m),
            f = useEvent(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: r }) => {
                const s = o.current,
                    n = u.current,
                    a = i.current;
                if (!s || !n || !a) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET);
                ((n.style.height = `${t - l + r}px`), (a.style.height = s.offsetHeight - e - t - l - r + 'px'));
            }),
            { handleMouseEnter: h, handleMouseDownTrack: g } = useBarHandlers(
                r,
                a,
                s,
                n,
                d,
                _,
                scrollOrientations.vertical,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$d.base, e.base),
            ref: r,
            onWheel: d.handleMouseWheel,
            onMouseDown: g,
            onMouseEnter: h,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: s,
                    className: cx(styles$d.button, styles$d.button__top, e.topButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: o,
                    className: cx(styles$d.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: u,
                            className: cx(styles$d.rail, styles$d.rail__top, e.topRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: l,
                            api: d,
                            calculateOffset: m,
                            calculateSize: calculateThumbSize,
                            direction: 'vertical',
                            isBoundThumb: p,
                            railAfterRef: u,
                            railBeforeRef: i,
                            styles: THUMB_STYLES,
                            onUpdate: f,
                            thumbRef: a,
                            trackRef: o,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$d.rail, styles$d.rail__bottom, e.bottomRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$d.button, styles$d.button__bottom, e.bottomButton),
                }),
            ],
        });
    }),
    content$1 = 'VerticalScroll_content_62cb6120',
    defaultScroll = 'VerticalScroll_defaultScroll_c69fa70e',
    area = 'VerticalScroll_area_a3c0086a',
    styles$c = { content: content$1, defaultScroll: defaultScroll, area: area },
    DefaultScroll = ({
        children: e,
        className: t,
        barClassNames: r,
        areaClassName: s,
        scrollClassName: n,
        scrollClassNames: o,
        onDrag: a,
    }) => {
        const { api: u } = useVerticalScroll(),
            i = reactExports.useMemo(() => {
                const e = r || {};
                return { ...e, base: cx(styles$c.base, e.base) };
            }, [r]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$c.defaultScroll, t),
            onWheel: u.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$c.area, s),
                    children: jsxRuntimeExports.jsx(Area, { className: n, classNames: o, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar, { onDrag: a, classNames: i }),
            ],
        });
    },
    Area = ({ className: e, classNames: t, children: r, ...s }) => {
        const { api: n } = useVerticalScroll();
        return (
            reactExports.useEffect(() =>
                createLayoutReadyInEffect(() => createLayoutReadyInEffect(n.recalculateContent)),
            ),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$c.base, null == t ? void 0 : t.wrapper, e),
                ref: n.wrapperRef,
                onWheel: n.handleMouseWheel,
                children: jsxRuntimeExports.jsx('div', {
                    ...s,
                    className: cx(styles$c.content, null == t ? void 0 : t.content),
                    ref: n.contentRef,
                    children: r,
                }),
            })
        );
    };
function Base$5({ children: e }) {
    const t = useApi(),
        r = reactExports.useMemo(() => ({ api: t }), [t]);
    return jsxRuntimeExports.jsx(Context$1.Provider, { value: r, children: e });
}
Area.Default = DefaultScroll;
const IGNORE_DEFAULT = [2, 2];
function useScrollBounding(e, [t, r] = IGNORE_DEFAULT) {
    const [s, n] = reactExports.useState(!0),
        [o, a] = reactExports.useState(!0);
    return (
        reactExports.useEffect(() => {
            function s() {
                if (!e.contentRef.current) return;
                const s = e.animationScroll.scrollPosition.get(),
                    [o, u] = e.getBounds(),
                    i = s >= u - r;
                (n(s <= o + t), a(i));
            }
            return new DisposeBuilder()
                .add(createLayoutReadyInEffect(s))
                .add(e.events.on('resizeHandled', s))
                .add(e.events.on('recalculateContent', s))
                .add(e.events.on('change', s)).dispose;
        }, [e, t, r]),
        [s, o]
    );
}
const base$7 = 'SceneWrapper_52fcfc1e',
    base__down = 'SceneWrapper_base__down_4ece5089',
    base__moveSpaceDisabled = 'SceneWrapper_base__moveSpaceDisabled_1b1cd939',
    styles$b = { base: base$7, base__down: base__down, base__moveSpaceDisabled: base__moveSpaceDisabled },
    MOUSE_BUTTONS_LEFT = 1,
    DELTA_Z = 600;
function SceneWrapper({
    children: e,
    moveSpace: t,
    onMouseOver3dScene: r,
    onDragStateChange: s,
    moveSpaceEnabled: n = !0,
    className: o,
    ...a
}) {
    const [u, i] = reactExports.useState(!1),
        [l, c] = reactExports.useState(!1),
        [d, p] = reactExports.useState({ x: 0, y: 0 }),
        m = reactExports.useRef(null);
    (reactExports.useEffect(() => {
        function e() {
            (i(!1), c(!1));
        }
        return (window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e));
    }, []),
        reactExports.useEffect(
            () => () => {
                r({ isOver3dScene: !1 });
            },
            [r],
        ));
    const E = useEvent((e) => (null == s ? void 0 : s(e)));
    function _(e) {
        if (!m.current) return;
        const { left: t, right: r, top: s, bottom: n } = m.current.getBoundingClientRect();
        return !(e.clientX < t || e.clientY < s || e.clientX > r || e.clientY > n);
    }
    function f(e) {
        return e.buttons === MOUSE_BUTTONS_LEFT && _(e) && n;
    }
    return (
        reactExports.useEffect(() => {
            E(u && l);
        }, [u, E, l]),
        jsxRuntimeExports.jsx('div', {
            ...a,
            ref: m,
            className: cx(styles$b.base, u && styles$b.base__down, !n && styles$b.base__moveSpaceDisabled, o),
            onMouseDown: function (e) {
                (e.preventDefault(), f(e) && (i(!0), c(!0), p({ x: e.clientX, y: e.clientY })));
            },
            onMouseMove: function (e) {
                if ((e.preventDefault(), u && l)) {
                    if (!_(e)) return;
                    const r = e.clientX !== d.x ? e.clientX - d.x : 0,
                        s = e.clientY !== d.y ? e.clientY - d.y : 0;
                    (p({ x: e.clientX, y: e.clientY }), t({ dx: r, dy: s, dz: 0 }));
                }
            },
            onMouseUp: function () {
                i(!1);
            },
            onWheel: function (e) {
                if ((e.preventDefault(), !n || !_(e))) return;
                const r = e.deltaY < 0;
                t({ dx: 0, dy: 0, dz: r ? -DELTA_Z : DELTA_Z });
            },
            onMouseOver: function (e) {
                (r({ isOver3dScene: !0 }), f(e) && (i(!0), p({ x: e.clientX, y: e.clientY })));
            },
            onMouseOut: function () {
                (r({ isOver3dScene: !1 }), i(!1));
            },
            children: e,
        })
    );
}
const base$6 = 'AnimatedDetails_c70d3863',
    styles$a = { base: base$6 },
    AnimatedDetails = reactExports.forwardRef(function (
        { opened: e, children: t, className: r, animationSettings: s = {}, ...n },
        o,
    ) {
        const a = React.useRef(null),
            u = React.useRef(null),
            [i, l] = useSpring(() => ({ height: 0, opacity: 0 })),
            c = useEvent((e, t) => {
                l.start({
                    height: t ? e : 0,
                    opacity: t ? 1 : 0,
                    config: { duration: 350, easing: t ? easings.reverseEaseInOutCirc : easings.easeInOutCirc },
                    ...s,
                });
            });
        return (
            React.useEffect(() => {
                const t = u.current;
                if (!t) return;
                let r = noop;
                if (e) {
                    const e = new ResizeObserver(() => c(t.offsetHeight, !0));
                    (e.observe(t), (r = e.disconnect.bind(e)));
                }
                const s = createLayoutReadyInEffect(() => {
                    c(t.offsetHeight, e);
                });
                return () => {
                    (s(), r());
                };
            }, [c, e]),
            jsxRuntimeExports.jsx(animated.div, {
                ...n,
                ref: assignRefs([o, a]),
                className: cx(styles$a.base, r),
                style: { ...n.style, ...i },
                children: jsxRuntimeExports.jsx('div', { ref: u, children: t }),
            })
        );
    }),
    Context = reactExports.createContext(void 0);
function useAccordion() {
    const e = reactExports.useContext(Context);
    if (!e) throw new Error('useAccordion should have Accordion provider');
    return e;
}
const arrow = 'Arrow_f1570a91',
    arrow__opened = 'Arrow_arrow__opened_134476cd',
    styles$9 = { arrow: arrow, arrow__opened: arrow__opened },
    images = resources.resolve('images'),
    Arrow = reactExports.forwardRef(function (e, t) {
        const { opened: r } = useAccordion();
        return jsxRuntimeExports.jsx('div', {
            ...e,
            ref: t,
            style: { backgroundImage: `url(${images.readOrEmpty('library.arrow_accordion')})`, ...e.style },
            className: cx(styles$9.arrow, r && styles$9.arrow__opened, e.className),
        });
    }),
    content = 'Details_content_a5a56462',
    content__opened = 'Details_content__opened_cc21f43f',
    styles$8 = { content: content, content__opened: content__opened },
    Details = reactExports.forwardRef(function (e, t) {
        const { opened: r } = useAccordion();
        return jsxRuntimeExports.jsx('div', {
            ...e,
            ref: t,
            className: cx(styles$8.content, r && styles$8.content__opened, e.className),
        });
    }),
    headerWrapper = 'Summary_headerWrapper_d7c7115',
    background = 'Summary_background_48ba2ab7',
    background__scrollable = 'Summary_background__scrollable_a41402ee',
    header$1 = 'Summary_header_789c868e',
    styles$7 = {
        headerWrapper: headerWrapper,
        background: background,
        background__scrollable: background__scrollable,
        header: header$1,
    },
    Summary = reactExports.forwardRef(function ({ children: e, scrollable: t, background: r, ...s }, n) {
        return jsxRuntimeExports.jsxs('div', {
            ...s,
            ref: n,
            className: cx(styles$7.headerWrapper, s.className),
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$7.background, t && styles$7.background__scrollable, r),
                }),
                jsxRuntimeExports.jsx('div', { className: styles$7.header, children: e }),
            ],
        });
    }),
    base$5 = 'Accordion_2b56632',
    styles$6 = { base: base$5 },
    Accordion = reactExports.forwardRef(function ({ opened: e, ...t }, r) {
        return jsxRuntimeExports.jsx(Context.Provider, {
            value: { opened: e },
            children: jsxRuntimeExports.jsx('div', {
                ...t,
                'data-name': 'Accordion',
                ref: r,
                className: cx(styles$6.base, t.className),
            }),
        });
    });
((Accordion.Summary = Summary),
    (Accordion.Details = Details),
    (Accordion.AnimatedDetails = AnimatedDetails),
    (Accordion.Arrow = Arrow));
const getFromCallStack = (e = 1) => {
    var t;
    const r = new Error().stack;
    let s,
        n = R.invalid('resId'),
        o = '';
    return (
        r &&
            ((o = (null == (t = r.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : t[0]) || ''),
            (s = r.split('\n')[e].split('.js')[0].split('/').pop() || ''),
            window.__feature && window.__feature !== s && window.subViews[s] && (n = window.subViews[s].id)),
        { callerUrl: o, caller: s, stack: r, resId: n }
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
                        const o = `mouse${t}`,
                            a = internalMouse[t]((e) => r([e, 'outside']));
                        function u(e) {
                            r([e, 'inside']);
                        }
                        return (
                            window.addEventListener(o, u),
                            s(),
                            () => {
                                n && (a(), window.removeEventListener(o, u), (e.listeners -= 1), s(), (n = !1));
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
        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
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
    sendShowPopOverEvent = (e, t, r, s, n = R.invalid('resId'), o) => {
        const a = env.view.getViewGlobalPosition(),
            { x: u, y: i, width: l, height: c } = r.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(u) + a.x,
                y: env.view.pxToRem(i) + a.y,
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
        onMouseDown: o,
        onClick: a,
        ignoreShowDelay: u = !1,
        ignoreMouseClick: i = !1,
        decoratorId: l = 0,
        isEnabled: c = !0,
        targetId: d = 0,
        onShow: p,
        onHide: m,
        ...E
    }) => {
        const _ = reactExports.useRef({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
            f = reactExports.useMemo(() => d || getFromCallStack().resId, [d]),
            h = reactExports.useCallback(() => {
                (_.current.isVisible && _.current.timeoutId) ||
                    (handleViewEvent(t, l, { isMouseEvent: !0, on: !0, arguments: getViewEventArguments(r) }, f),
                    p && p(),
                    (_.current.isVisible = !0));
            }, [t, l, r, f, p]),
            g = reactExports.useCallback(() => {
                if (_.current.isVisible || _.current.timeoutId) {
                    const e = _.current.timeoutId;
                    (e > 0 && (clearTimeout(e), (_.current.timeoutId = 0)),
                        handleViewEvent(t, l, { on: !1 }, f),
                        _.current.isVisible && m && m(),
                        (_.current.isVisible = !1));
                }
            }, [t, l, f, m]),
            x = reactExports.useCallback((e) => {
                _.current.isVisible &&
                    ((_.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                    (_.current.hideTimerId = window.setTimeout(() => {
                        const t = document.elementFromPoint(e.clientX, e.clientY);
                        t && !t.isSameNode(_.current.prevTarget) && g();
                    }, 200)));
            }, []);
        (reactExports.useEffect(() => {
            const e = _.current.hideTimerId;
            return (
                document.addEventListener('wheel', x, { capture: !0 }),
                () => {
                    (document.removeEventListener('wheel', x, { capture: !0 }), e && window.clearTimeout(e));
                }
            );
        }, []),
            reactExports.useEffect(() => {
                !1 === c && g();
            }, [c, g]),
            reactExports.useEffect(
                () => (
                    window.addEventListener('mouseleave', g),
                    () => {
                        (window.removeEventListener('mouseleave', g), g());
                    }
                ),
                [g],
            ));
        return c
            ? reactExports.cloneElement(e, {
                  onMouseEnter:
                      ((b = e.props.onMouseEnter),
                      (e) => {
                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                              (clearTimeout(_.current.timeoutId),
                              (_.current.timeoutId = window.setTimeout(h, u ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT)),
                              s && s(e),
                              b && b(e));
                      }),
                  onMouseLeave: ((e) => (t) => {
                      (g(), null == n || n(t), null == e || e(t));
                  })(e.props.onMouseLeave),
                  onClick: ((e) => (t) => {
                      (!1 === i && g(), null == a || a(t), null == e || e(t));
                  })(e.props.onClick),
                  onMouseDown: ((e) => (t) => {
                      (!1 === i && g(), null == o || o(t), null == e || e(t));
                  })(e.props.onMouseDown),
                  ...E,
              })
            : e;
        var b;
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
    SimpleTooltip = ({ children: e, body: t, header: r, note: s, alert: n, args: o, ...a }) => {
        const u = reactExports.useMemo(() => {
            const e = { ...o, body: t, header: r, note: s, alert: n };
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
        }, [n, t, r, s, o]);
        return jsxRuntimeExports.jsx(Tooltip$1, {
            contentId: getTooltipContentId(null == o ? void 0 : o.hasHtmlContent),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: u,
            ...a,
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
    const r = getNumberFormatType(t),
        s = SystemLocale.getNumberFormat(e, r);
    return void 0 !== e && void 0 !== s ? s : null;
};
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
    RewardType.Gold,
    RewardType.Credits,
    RewardType.Crystal,
    RewardType.FreeXp,
    RewardType.BattlePassPoints,
    RewardType.EquipCoin,
    RewardType.PremiumPlus,
    RewardType.Premium);
const getSizeFolder = (e) => {
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
    DOG_TAG_FOLDER_NAMES = ['engravings', 'backgrounds'],
    DOG_TAG_DEFAULT_ICON_NAME = ['engraving', 'background'],
    getDogTypeImage = (e, t, r) => {
        const s = DOG_TAG_FOLDER_NAMES[e];
        if (s) {
            const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                o = n.$dyn(r);
            return o ? `${o}` : `${n.$dyn(DOG_TAG_DEFAULT_ICON_NAME[e])}`;
        }
        return (
            console.error('Unreachable branch: add dogTagType and icon folder for corresponding icon matching'),
            ''
        );
    },
    getRewardImage = (e, t = ImageSize.Small) => {
        const { name: r, type: s, value: n, icon: o, item: a, dogTagType: u } = e,
            i = getSizeFolder(t);
        switch (r) {
            case 'basic':
            case 'plus':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}_${n}`;
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${n}`;
            case 'items':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
            case 'blueprints':
            case 'blueprintsAny':
            case 'finalBlueprints':
                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${o}`;
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
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
            case 'crewBooks':
                return `R.images.gui.maps.icons.crewBooks.books.${t}.${o}`;
            case 'dogTagComponents':
                return getDogTypeImage(u, t, o);
            case 'dossier_badge':
                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${o}`;
            case 'dossier_achievement':
                return `R.images.gui.maps.icons.achievement.${i}.${o}`;
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
                return `R.images.gui.maps.icons.collectionItems.${i}.${o}`;
            case 'attachment':
                return `R.images.gui.maps.vehicles.attachments.${t}.${o}`;
            case 'statTracker':
                return `R.images.gui.maps.vehicles.statTrackers.${t}.${o}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
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
    root$3 = 'Reward_root_ab59d545',
    base$4 = 'Reward_c5dc614c',
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
    icon$2 = 'Reward_icon_ae345d69',
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
    styles$5 = {
        root: root$3,
        base: base$4,
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
        isPeriodic: r = !1,
        size: s = ImageSize.Big,
        special: n,
        value: o,
        valueType: a,
        title: u,
        style: i,
        className: l,
        classNames: c,
        tooltipArgs: d,
        periodicIconTooltipArgs: p,
    }) => {
        const m = getBottomHighlight(s, n),
            E = getOverlay(n),
            _ = getFormattedValue(o, a);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(
                styles$5.base,
                styles$5[`base__${s}`],
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
                                    m &&
                                        jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$5.highlight, null == c ? void 0 : c.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${s}.${m}_highlight)`,
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
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${s}.${E}_overlay)`,
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
                                    children: _,
                                }),
                            u && jsxRuntimeExports.jsx('div', { className: styles$5.title, children: u }),
                        ],
                    }),
                }),
                r &&
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: p,
                        children: jsxRuntimeExports.jsx('div', {
                            className: cx(styles$5.timer, null == c ? void 0 : c.periodicIcon),
                        }),
                    }),
            ],
        });
    },
    grades = { gold: 'gold', enamel: 'enamel', prestige: 'prestige' },
    sizes = { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', xxl: 'xxl' },
    sizesEmblems = { xs: '48x48', sm: '72x72', md: '115x84', lg: '170x124', xl: '400x300', xxl: '600x450' },
    sizesFonts = { xs: '6x12', sm: '9x19', md: '16x33', lg: '23x48', xl: '53x120', xxl: '77x176' };
function icon$1(e, t, r) {
    return t === grades.prestige ? `.c_${sizesEmblems[r]}.${t}` : `.c_${sizesEmblems[r]}.${t}.c_${e}`;
}
const root$2 = 'VehiclePrestigeEmblem_root_9eca5e7f',
    icon = 'VehiclePrestigeEmblem_icon_940474a9',
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
    styles$4 = {
        root: root$2,
        icon: icon,
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
function Level({ level: e, type: t, size: r, classNames: s, ...n }) {
    const o = e.toString().split('');
    return jsxRuntimeExports.jsx('div', {
        ...n,
        className: styles$4.level,
        children: o.map((e, n) =>
            jsxRuntimeExports.jsx(
                Image,
                {
                    className: cx(styles$4.levelIcon, styles$4[`levelIcon__${r}`], null == s ? void 0 : s.levelIcon),
                    path: `prestige.emblemFont.c_${sizesFonts[r]}.${t === grades.enamel ? grades.gold : t}.c_${e}`,
                },
                n,
            ),
        ),
    });
}
const PrestigeEmblem = reactExports.forwardRef(function (
    { level: e, grade: t, type: r, size: s, classNames: n, ...o },
    a,
) {
    return jsxRuntimeExports.jsxs('div', {
        ...o,
        ref: a,
        className: cx(styles$4.base, styles$4[`base__${s}`], null == n ? void 0 : n.base),
        children: [
            jsxRuntimeExports.jsx(Image, {
                path: `prestige.emblem${icon$1(t, r, s)}`,
                className: cx(styles$4.icon, null == n ? void 0 : n.icon),
            }),
            r !== grades.prestige &&
                jsxRuntimeExports.jsx(Level, {
                    level: e,
                    type: r,
                    size: s,
                    classNames: { levelIcon: null == n ? void 0 : n.level },
                }),
        ],
    });
});
PrestigeEmblem.sizes = sizes;
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
            isPrebufferKeyframes: o,
            keyframesNameConfig: a,
            onClick: u,
            ...i
        },
        l,
    ) {
        const c = l,
            d = reactExports.useRef(null);
        return (
            useMount(() => {
                let e = !1;
                return events$1.onDisplayChanged((t, r) => {
                    const s = d.current;
                    s &&
                        (r === displayStatus$1.hidden
                            ? ((e = s.paused), s.pause())
                            : e || r !== displayStatus$1.shown || s.play());
                });
            }),
            useMount(() => {
                let e = !1;
                return onMinimize((t) => {
                    const r = d.current;
                    r && (t ? ((e = r.paused), r.pause()) : e || r.play());
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
                            const [r, s] = createLoop(() => {
                                if (d.current) {
                                    const { currentTime: r, duration: s } = d.current;
                                    if (
                                        (t !== r &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: r, duration: s })),
                                            (t = r)),
                                        d.current.paused || !c || !o)
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
                                                const r = Object.keys(a ?? {})[s];
                                                return e({
                                                    time: t,
                                                    name: `${a ? r : `${DEFAULT_NAME_KEYFRAME}_${s}`}`,
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
                        p = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.pause();
                        },
                        m = () => {
                            (p(), i(0));
                        },
                        E = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps)
                                ? d.current.cohGetKeyframeTimestamps()
                                : [];
                        },
                        _ = (e) => {
                            (i(e), l());
                        },
                        f = (e) => {
                            (i(e), p());
                        },
                        h = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        g = (e, t) => {
                            var r;
                            return (
                                null == (r = d.current) || r.addEventListener(e, t),
                                () => {
                                    var r;
                                    return null == (r = d.current) ? void 0 : r.removeEventListener(e, t);
                                }
                            );
                        },
                        x = (e, t) => {
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
                            on: g,
                            off: x,
                            play: l,
                            pause: p,
                            stop: m,
                            cleanup: h,
                            getCurrentTime: n,
                            getDuration: u,
                            getCachedKeyframes: E,
                            goToAndPlay: _,
                            goToAndStop: f,
                            setCurrentTime: i,
                            domRef: d.current,
                            onChangeTime: r,
                            onKeyframes: s,
                        }),
                        () => {
                            (h(), (c.current = null));
                        }
                    );
                }
            }, [a, c, o]),
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
    base$2 = 'Tooltip_6d997cee',
    decorator = 'Tooltip_decorator_b3486d4e',
    styles$3 = { base: base$2, decorator: decorator },
    Base$4 = defineStyledComponent('Base', styles$3.base),
    Decorator = defineStyledComponent('Decorator', styles$3.decorator),
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
            jsxRuntimeExports.jsx(Base$4, {
                ...t,
                ref: function (e) {
                    ((s.current = e), 'function' == typeof r ? r(e) : r && (r.current = e));
                },
                children: e,
            })
        );
    });
Tooltip.Decorator = Decorator;
const useResizeObserver = (e, t, r = !0) => {
        const s = reactExports.useCallback(
            (e) => {
                const r = e[0];
                t && t(r);
            },
            [t],
        );
        reactExports.useEffect(() => {
            if (!e.current || !r) return;
            const t = new index((e) => s(e));
            return (
                t.observe(e.current),
                () => {
                    t.disconnect();
                }
            );
        }, [s, r, e]);
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
    root$1 = 'Colors_root_f72ccf75',
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
        root: root$1,
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
    styles$2 = { noBreakWrapper: noBreakWrapper, lineBreak: lineBreak, newLine: newLine, word: word },
    createStyle = (e) => ({ color: `#${e}` }),
    getWordBlock = ({ elementList: e, textBlock: t, key: r }) => {
        const s = t.colorTag;
        return s
            ? colors[s]
                ? React.createElement(
                      'span',
                      { key: r, 'data-block-type': t.blockType, className: cx(styles$2.word, colors[s]) },
                      e,
                  )
                : React.createElement(
                      'span',
                      { key: r, 'data-block-type': t.blockType, className: styles$2.word, style: createStyle(s) },
                      e,
                  )
            : React.createElement('span', { key: r, 'data-block-type': t.blockType, className: styles$2.word }, e);
    },
    getLineBreak = ({ key: e }) =>
        React.createElement('span', { key: e, 'data-block-type': BlockType.LineBreak, className: styles$2.lineBreak }),
    getNewLine = ({ elementList: e, key: t }) =>
        React.createElement('span', { key: t, 'data-block-type': BlockType.NewLine, className: styles$2.newLine }, e),
    getNoBreakWrapper = ({ elementList: e, key: t }) =>
        React.createElement(
            'span',
            { key: t, 'data-block-type': BlockType.NoBreakWrapper, className: styles$2.noBreakWrapper },
            e,
        ),
    getBinding = ({ elementList: e, textBlock: t, key: r }) =>
        React.createElement(
            'span',
            { key: r, 'data-block-type': t.blockType },
            e.map((e) => React.createElement(React.Fragment, { key: r }, e)),
        ),
    RENDER_MAP = {
        [BlockType.Word]: getWordBlock,
        [BlockType.NoBreakSymbol]: getWordBlock,
        [BlockType.Binding]: getBinding,
        [BlockType.LineBreak]: getLineBreak,
        [BlockType.NewLine]: getNewLine,
        [BlockType.NoBreakWrapper]: getNoBreakWrapper,
    },
    renderChildList = (e, t, r) => {
        const s = [];
        return (
            e.childList.forEach((n, o) => {
                const a = `${r}_${o}`;
                if (isTextBlock(n)) {
                    const e = n,
                        t = e.blockType,
                        r = RENDER_MAP[t],
                        o = renderChildList(e, r, a);
                    s.push(...o);
                } else s.push(t({ elementList: [n], textBlock: e, key: a }));
            }),
            s
        );
    },
    renderTextBlock = (e, t) => {
        const r = [],
            s = e.blockType,
            n = RENDER_MAP[s],
            o = renderChildList(e, n, t);
        return (
            s === BlockType.NoBreakWrapper ? r.push(n({ elementList: o, textBlock: e, key: `${t}` })) : r.push(...o),
            r
        );
    },
    convertTextBlocksToJsxList = (e) => {
        const t = [];
        return (
            e.forEach((e, r) => {
                t.push(...renderTextBlock(e, r));
            }),
            t
        );
    },
    split = (e, t, r, s) => {
        let n = t.exec(e),
            o = 0;
        for (; n; ) (o !== n.index && r(e.slice(o, n.index)), s(n), (o = t.lastIndex), (n = t.exec(e)));
        o !== e.length && r(e.slice(o));
    },
    thaiGraphemeRegex = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
    splitThaiGraphemes = (e) => e.match(thaiGraphemeRegex) || [],
    splitNewLines = (e) => {
        const t = [{ blockType: BlockType.LineBreak, colorTag: '', childList: [e.charAt(0)] }];
        for (let r = 0; r < e.length - 1; r++)
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
        const r = /[\s\u002d]/g;
        let s = r.exec(e);
        if (!s) return [e];
        const n = [];
        let o = 0;
        for (; s; ) {
            const a = t.justifyContent === Alignment.FlexEnd ? s.index : r.lastIndex;
            (n.push(e.slice(o, a)), (o = a), (s = r.exec(e)));
        }
        return (o !== e.length && n.push(e.slice(o)), n);
    },
    splitByWordsMethod = IS_SPLIT_BY_SYMBOL ? splitWordsCustom : splitWords,
    splitSpecialSymbols = (e, t = '', r) => {
        const s = [];
        return (
            split(
                e,
                /(\n+|[\xa0\ufeff]+)/g,
                (e) => {
                    s.push({ blockType: BlockType.Word, colorTag: t, childList: splitByWordsMethod(e, r) });
                },
                (e) => {
                    const r = e[0],
                        n = SYMBOL_MAP[r.charAt(0)];
                    n === BlockType.LineBreak
                        ? s.push(...splitNewLines(r))
                        : s.push({ blockType: n, colorTag: t, childList: [r.replace(/\ufeff+/g, '')] });
                },
            ),
            s
        );
    },
    splitBinding = (e, t, r = '', s) => {
        const n = [],
            o = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
        return (
            split(
                o,
                /(?:%\(|{)(.*?)[)}][sd]?/g,
                (e) => {
                    n.push(...splitSpecialSymbols(e, r, s));
                },
                (e) => {
                    const o = e[1],
                        a = void 0 === t[o] ? e[0] : t[o];
                    'string' == typeof a || 'number' == typeof a
                        ? n.push(...splitSpecialSymbols(String(a), r, s))
                        : n.push({ blockType: BlockType.Binding, colorTag: r, childList: [a] });
                },
            ),
            n
        );
    },
    splitColorTags = (e, t, r) => {
        const s = [];
        return (
            split(
                e,
                /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                (e) => {
                    s.push(...splitBinding(e, t, '', r));
                },
                (e) => {
                    s.push(...splitBinding(e[2] + e[3], t, e[1], r));
                },
            ),
            s
        );
    },
    wrapNoBreak = (e, t) => {
        if (!e) return [t];
        const r = [],
            s = { ...t, childList: t.childList.splice(0, 1) };
        if (e.blockType === BlockType.NoBreakWrapper) (e.childList.push(s), r.push(e));
        else {
            const t = { ...e, childList: e.childList.splice(-1) };
            (e.childList.length > 0 && r.push(e),
                r.push({ blockType: BlockType.NoBreakWrapper, colorTag: '', childList: [t, s] }));
        }
        return (t.childList.length > 0 && r.push(t), r);
    },
    processTextBlocks = (e) => {
        const t = [];
        let r = !1;
        return (
            e.forEach((e) => {
                if (e.blockType === BlockType.NoBreakSymbol) ((r = !0), t.push(...wrapNoBreak(t.pop(), e)));
                else (r ? t.push(...wrapNoBreak(t.pop(), e)) : t.push(e), (r = !1));
            }),
            t
        );
    },
    getJsxElementsList = (e, t = {}, r) => {
        if (!e) return [];
        const s = convertZwnbsp(convertNbsp(e)),
            n = processTextBlocks(splitColorTags(s, t, r));
        return convertTextBlocksToJsxList(n);
    },
    isVerticalOverflow = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
    getPositionDiff = (e, t) => e.offsetLeft + e.offsetWidth - t,
    isElementAvailableForTruncation = (e, t, r) => {
        if (!e || !e.textContent) return [!1, 0];
        if (e.offsetLeft > t) return [!1, 0];
        const s = getPositionDiff(e, t),
            n = e.textContent.length,
            o = e.offsetWidth / n,
            a = Math.ceil(s / o);
        if (s > 0) {
            const s = Math.floor((t - e.offsetLeft) / o);
            return s >= r ? [!0, r + a] : [!1, s];
        }
        const u = Math.max(r + a, 0);
        return n < u ? [!1, 0] : [!0, u];
    },
    truncateElement = (e, t, r, s, n, o) => {
        let a = -1,
            u = null;
        for (let i = r; i >= 0; i--) {
            const r = e[i],
                l = Number(e[i].getAttribute(BLOCK_TYPE));
            if (l === BlockType.LineBreak || l === BlockType.NewLine || l === BlockType.Binding) continue;
            const c = r.textContent || '';
            if (!(r.childElementCount > 1)) {
                const [e, l] = isElementAvailableForTruncation(r, s, n);
                if (!e) {
                    l > 0 && (n -= l);
                    continue;
                }
                const d = c.slice(0, c.length - l) + o,
                    p = t[i];
                ((u = React.cloneElement(p, p.props, d)), (a = i));
                break;
            }
            {
                const e = r.children,
                    l = t[i],
                    d = l.props.children,
                    [p, m] = truncateElement(e, d, e.length - 1, s, n, o);
                if (!(p < 0)) {
                    const e = d.slice(0, p);
                    ((u = React.cloneElement(l, l.props, e, m)), (a = i));
                    break;
                }
                n -= c.length;
            }
        }
        return [a, u];
    },
    searchLastInHeight = (e, t) => {
        let r = 0,
            s = e.length - 1;
        for (; s - r >= 0; ) {
            const n = r + Math.ceil(0.5 * (s - r));
            isVerticalOverflow(e[n], t) ? (s = n - 1) : (r = n + 1);
        }
        return r - 1;
    },
    truncateJsxElements = (e, t, r, s = TRUNCATE_IDENTIFY) => {
        const n = [...t],
            o = e.current;
        if (!o) return [n, !1];
        const a = r.height,
            u = r.width,
            i = o.lastElementChild;
        if (!isVerticalOverflow(i, a) && getPositionDiff(i, u) <= 0) return [n, !1];
        const l = o.children,
            c = searchLastInHeight(l, a);
        if (c < 0) return [n, !1];
        const [d, p] = truncateElement(l, n, c, u, s.length, s);
        return (p && (n.splice(d, 1, p), n.splice(d + 1)), [n, !0]);
    },
    root = 'Extendedtext_root_56f425a9',
    base$1 = 'Extendedtext_34df2a2c',
    base__zeroPadding = 'Extendedtext_base__zeroPadding_bd1dbfd0',
    base__isTruncationAvailable = 'Extendedtext_base__isTruncationAvailable_21b9eaa',
    truncated = 'Extendedtext_truncated_6b4a3b66',
    truncated__hide = 'Extendedtext_truncated__hide_a75f6d91',
    unTruncated = 'Extendedtext_unTruncated_6ec70ccb',
    tooltip = 'Extendedtext_tooltip_7c24081e',
    styles$1 = {
        root: root,
        base: base$1,
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
        onSizeChanged: r,
        binding: s,
        isTooltipEnable: n = !1,
        isTruncationAvailable: o = !1,
        customTooltipArgs: a,
        targetId: u,
        justifyContent: i = Alignment.FlexStart,
        alignContent: l = Alignment.FlexStart,
        truncateIdentify: c = TRUNCATE_IDENTIFY,
    }) => {
        const d = reactExports.useRef(null),
            p = reactExports.useRef({ height: 0, width: 0 }),
            [m, E] = reactExports.useState({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
            _ = reactExports.useMemo(() => getJsxElementsList(e, s, { justifyContent: i }), [s, i, e]),
            f = reactExports.useMemo(() => {
                if (n && m.isTruncated && (!s || !Object.values(s).find((e) => 'object' == typeof e)))
                    return {
                        args: { text: e, ...a, stringifyKwargs: s ? JSON.stringify(s) : '' },
                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                        targetId: u,
                    };
            }, [s, n, u, e, a, m.isTruncated]),
            h = reactExports.useCallback(
                (e) => {
                    ((p.current.width = e.contentRect.width), (p.current.height = e.contentRect.height));
                    const [t, s] = truncateJsxElements(d, _, p.current, c);
                    (E({ elementList: t, isTruncated: s, isTruncateFinished: !0 }), r && r(s));
                },
                [r, c, _],
            ),
            g = reactExports.useMemo(() => ({ justifyContent: i, alignContent: l }), [l, i]);
        return (
            useResizeObserver(d, h, o),
            jsxRuntimeExports.jsxs('div', {
                className: cx(styles$1.base, t, styles$1.base__zeroPadding, o && styles$1.base__isTruncationAvailable),
                style: g,
                children: [
                    jsxRuntimeExports.jsx('div', { className: styles$1.unTruncated, ref: d, children: _ }),
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: f,
                        className: cx(
                            styles$1.tooltip,
                            styles$1[`tooltip__justify-${i}`],
                            styles$1[`tooltip__align-${l}`],
                        ),
                        children: jsxRuntimeExports.jsx('div', {
                            className: cx(styles$1.truncated, !m.isTruncateFinished && o && styles$1.truncated__hide),
                            style: g,
                            children: m.isTruncateFinished && o ? m.elementList : _,
                        }),
                    }),
                ],
            })
        );
    },
    ExtendedText = React.memo(ExtendedTextComponent),
    columnBehaviours = {
        static: 'static',
        screenResponsive: 'screenResponsive',
        contentResponsive: 'contentResponsive',
    };
Object.values(columnBehaviours);
const tableParts = { header: 'header', body: 'body', footer: 'footer' },
    tablePartValues = Object.values(tableParts),
    TableContext = reactExports.createContext(null);
function useTableContext() {
    const e = reactExports.useContext(TableContext);
    if (null === e) throw new Error('You can use the table hooks only with the table component');
    return e;
}
function TableProvider({
    children: e,
    columns: t,
    data: r,
    sorting: s,
    pagination: n,
    rowSelection: o,
    initialState: a,
    ...u
}) {
    const i = reactExports.useRef({ header: [], body: [], footer: [] }),
        l = reactExports.useRef(new Map()),
        c = reactExports.useRef(null),
        d = useLocalObservable(() => {
            const e = observable.array([]);
            return {
                updateAt: action((t, r) => {
                    e[t] = r;
                }),
                getAt: computeds.primitive((t) => e[t]),
            };
        }),
        p = reactExports.useCallback(
            function () {
                0 !== l.current.size &&
                    (runInAction(() => {
                        for (const [e, t] of l.current.entries()) d.updateAt(e, t);
                    }),
                    l.current.clear(),
                    (c.current = null));
            },
            [d],
        ),
        m = reactExports.useCallback(
            function (e, t) {
                (l.current.set(e, t), null === c.current && (c.current = requestAnimationFrame(p)));
            },
            [p],
        ),
        E = reactExports.useCallback(
            (e, r, s, n) => {
                if (void 0 === i.current) return;
                Array.isArray(i.current[e][s]) || (i.current[e][s] = new Array(t.length));
                const o = i.current[e][s];
                void 0 !== o && (o[n] = r);
            },
            [t.length],
        );
    (useUnmount(() => {
        null !== c.current && (cancelAnimationFrame(c.current), (c.current = null));
    }),
        reactExports.useLayoutEffect(
            () =>
                createLayoutReadyInEffect(function () {
                    const e = [...i.current.header, ...i.current.body, ...i.current.footer],
                        r = new Array(t.length).fill(0),
                        s = t.length;
                    for (let t = 0; t < e.length; t += 1) {
                        const n = e[t];
                        if (void 0 !== n)
                            for (let e = 0; e < s; e += 1) {
                                const t = n[e],
                                    s = (null == t ? void 0 : t.scrollWidth) ?? 0;
                                s > r[e] && (r[e] = s);
                            }
                        else console.warn(`Row is not found by index ${t}`);
                    }
                    for (let t = 0; t < s; t += 1) m(t, r[t]);
                }),
            [t.length, d, m],
        ));
    const _ = useReactTable({
            data: r,
            columns: t,
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: s ? getSortedRowModel() : void 0,
            getPaginationRowModel: n ? getPaginationRowModel() : void 0,
            initialState: a,
            state: { sorting: s, rowSelection: o, pagination: n },
            ...u,
        }),
        f = reactExports.useMemo(
            () => ({ table: _, cellRefs: i, columnSizes: d, handleCellRefsSet: E, scheduleColumnSizeUpdate: m }),
            [_, i, d, E, m],
        );
    return jsxRuntimeExports.jsx(TableContext.Provider, { value: f, children: e });
}
const base = 'Table_85be883a',
    row = 'Table_row_881b7550',
    header = 'Table_header_ef69bf65',
    footer = 'Table_footer_ef69bf65',
    body = 'Table_body_df2c1607',
    cell = 'Table_cell_7df9641e',
    sortable = 'Table_sortable_f63b3b4f',
    contentResponsiveCellWrapper = 'Table_contentResponsiveCellWrapper_ddee221c',
    styles = {
        base: base,
        row: row,
        header: header,
        footer: footer,
        body: body,
        cell: cell,
        sortable: sortable,
        contentResponsiveCellWrapper: contentResponsiveCellWrapper,
    },
    Base$3 = defineStyledComponent('ContentResponsiveTableCell', styles.cell),
    ContentResponsiveCell = observer(function (e) {
        var t;
        (assert(
            e.cell.minSize.endsWith('rem'),
            `minSize unit of the content_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ),
            assert(
                e.cell.maxSize.endsWith('rem'),
                `maxSize unit of the content_responsive_cell should be in rem for ${e.cell.column.id} column`,
            ));
        const { className: r, style: s, cell: n, ...o } = e,
            a = reactExports.useRef(null),
            u = n.column.getCanSort(),
            { cellRefs: i, columnSizes: l, handleCellRefsSet: c, scheduleColumnSizeUpdate: d } = useTableContext(),
            p = l.getAt(n.index);
        return (
            reactExports.useLayoutEffect(() => {
                var e, t;
                const r =
                    null == (t = null == (e = i.current) ? void 0 : e[n.tablePart][n.rowIndex]) ? void 0 : t[n.index];
                if (null == r)
                    return void console.warn(
                        `Ref is not assigned for content responsive cell at tablePart ${n.tablePart}, row index ${n.rowIndex}, cell index ${n.index}`,
                    );
                a.current = new ResizeObserver(function () {
                    var e;
                    let t = 0;
                    for (const r of tablePartValues)
                        for (const s of i.current[r]) {
                            const r = (null == (e = s[n.index]) ? void 0 : e.scrollWidth) ?? 0;
                            t = Math.max(t, r);
                        }
                    d(n.index, t);
                });
                return (
                    a.current.observe(r),
                    () => {
                        a.current && (a.current.disconnect(), (a.current = null));
                    }
                );
            }, [n.index, n.rowIndex, n.tablePart, d]),
            jsxRuntimeExports.jsx(
                Base$3,
                {
                    className: cx(
                        null == (t = n.column.columnDef.meta) ? void 0 : t.className,
                        u && tableParts.header === n.tablePart && styles.sortable,
                        r,
                    ),
                    style: {
                        ...s,
                        maxWidth: n.maxSize,
                        minWidth: n.minSize,
                        width: isNumber(p) ? p : 'auto',
                        opacity: isNumber(p) ? 1 : 0,
                    },
                    ...o,
                    children: jsxRuntimeExports.jsx('div', {
                        className: styles.contentResponsiveCellWrapper,
                        ref: reactExports.useCallback(
                            (e) => c(n.tablePart, e, n.rowIndex, n.index),
                            [n.tablePart, n.rowIndex, n.index, c],
                        ),
                        children: e.children,
                    }),
                },
                e.id,
            )
        );
    }),
    Base$2 = defineStyledComponent('ScreenResponsiveTableCell', styles.cell);
function ScreenResponsiveCell(e) {
    var t;
    (assert(
        e.cell.size.endsWith('%'),
        `Size unit of the screen_responsive_cell should be in percents for ${e.cell.column.id} column`,
    ),
        assert(
            e.cell.minSize.endsWith('rem'),
            `minSize unit of the screen_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ),
        assert(
            e.cell.maxSize.endsWith('rem'),
            `maxSize unit of the screen_responsive_cell should be in rem for ${e.cell.column.id} column`,
        ));
    const { className: r, style: s, cell: n, ...o } = e,
        [a, u] = reactExports.useState(!1),
        i = e.cell.column.getCanSort(),
        { handleCellRefsSet: l } = useTableContext();
    return (
        reactExports.useEffect(
            () =>
                createLayoutReadyInEffect(() => {
                    u(!0);
                }),
            [],
        ),
        jsxRuntimeExports.jsx(
            Base$2,
            {
                ref: reactExports.useCallback(
                    (e) => l(n.tablePart, e, n.rowIndex, n.index),
                    [n.tablePart, n.rowIndex, n.index, l],
                ),
                className: cx(
                    null == (t = n.column.columnDef.meta) ? void 0 : t.className,
                    i && tableParts.header === n.tablePart && styles.sortable,
                    r,
                ),
                style: { ...s, width: n.size, minWidth: n.minSize, maxWidth: n.maxSize, opacity: a ? 1 : 0 },
                ...o,
                children: e.children,
            },
            e.id,
        )
    );
}
const Base$1 = defineStyledComponent('StaticTableCell', styles.cell);
function StaticCell(e) {
    var t;
    assert(e.cell.size.endsWith('rem'), `Size unit is not correct for the ${e.cell.column.id} column`);
    const { className: r, style: s, cell: n, ...o } = e,
        [a, u] = reactExports.useState(!1),
        i = n.column.getCanSort(),
        { handleCellRefsSet: l } = useTableContext();
    return (
        reactExports.useEffect(
            () =>
                createLayoutReadyInEffect(() => {
                    u(!0);
                }),
            [],
        ),
        jsxRuntimeExports.jsx(Base$1, {
            ref: reactExports.useCallback(
                (e) => l(n.tablePart, e, n.rowIndex, n.index),
                [n.tablePart, n.rowIndex, n.index, l],
            ),
            className: cx(
                null == (t = n.column.columnDef.meta) ? void 0 : t.className,
                i && tableParts.header === n.tablePart && styles.sortable,
                r,
            ),
            style: { ...s, width: n.size, opacity: a ? 1 : 0 },
            ...o,
            children: e.children,
        })
    );
}
function Cell(e) {
    const t = e.cell.column.columnDef.meta;
    assert(void 0 !== t, `meta data is not provided in the table columns config for ${e.cell.column.id}`);
    const { cell: r, ...s } = e;
    switch (t.column.behaviour) {
        case columnBehaviours.static:
            return jsxRuntimeExports.jsx(StaticCell, { ...s, cell: { ...r, size: t.column.size } });
        case columnBehaviours.contentResponsive:
            return jsxRuntimeExports.jsx(ContentResponsiveCell, {
                ...s,
                cell: { ...r, minSize: t.column.minSize, maxSize: t.column.maxSize },
            });
        case columnBehaviours.screenResponsive:
            return jsxRuntimeExports.jsx(ScreenResponsiveCell, {
                ...s,
                cell: { ...r, size: t.column.size, minSize: t.column.minSize, maxSize: t.column.maxSize },
            });
        default:
            return (console.error(`Column behaviour for ${e.cell.column.id} is not provided`), null);
    }
}
const Base = defineStyledComponent('Table', styles.base),
    Header = defineStyledComponent('TableHeader', styles.header),
    Body = defineStyledComponent('TableBody', styles.body),
    Footer = defineStyledComponent('TableFooter', styles.footer),
    Row = defineStyledComponent('TableRow', styles.row),
    Table = reactExports.forwardRef(function (e, t) {
        return jsxRuntimeExports.jsx(Base, { ref: t, ...e, children: e.children });
    });
((Table.Header = Header),
    (Table.Body = Body),
    (Table.Footer = Footer),
    (Table.Row = Row),
    (Table.Cell = Cell),
    (Table.behaviours = columnBehaviours));
export {
    Bar as $,
    types$2 as A,
    Button as B,
    Currency as C,
    Discount as D,
    getRoleByKey as E,
    FormatString as F,
    useWulfTooltip as G,
    roles as H,
    Image as I,
    vehicleState as J,
    IconCounter as K,
    useVerticalScroll as L,
    MS_IN_SECOND as M,
    sizes$7 as N,
    Accordion as O,
    FormatText as P,
    themes$1 as Q,
    RentalCounter as R,
    splitLocale as S,
    Tabs as T,
    addSpaceAndMap as U,
    VehicleInfo as V,
    WITHOUT_ROLE as W,
    useScrollBounding as X,
    Area as Y,
    SceneWrapper as Z,
    Base$5 as _,
    isStateValidValue as a,
    Bar$1 as a$,
    SoundsProvider as a0,
    sort as a1,
    some as a2,
    filter as a3,
    includes as a4,
    defineStyledComponent as a5,
    useTooltip as a6,
    renderResolvedString as a7,
    mouse as a8,
    useSpecialContextMenu as a9,
    UIProvider as aA,
    ModelRouterProvider as aB,
    createSoundPlay as aC,
    runView as aD,
    resize$1 as aE,
    Tooltip as aF,
    ExtendedText as aG,
    normilizeVehicleType as aH,
    columnBehaviours as aI,
    useTableContext as aJ,
    Table as aK,
    tableParts as aL,
    TableProvider as aM,
    types$1 as aN,
    setSidePaddingsRem$1 as aO,
    head as aP,
    assert as aQ,
    ImagesRClassProvider as aR,
    getRewardImage as aS,
    ImageSize as aT,
    Reward as aU,
    Base$6 as aV,
    useHorizontalScroll as aW,
    useScrollByDragElements as aX,
    createLayoutReadyInEffect as aY,
    useEvent as aZ,
    Area$1 as a_,
    getVehicleImageKey as aa,
    useMedia as ab,
    getScale$2 as ac,
    remToPx$1 as ad,
    onRescale as ae,
    breakpoints as af,
    every as ag,
    get as ah,
    reduce as ai,
    slice as aj,
    tags as ak,
    isNumber as al,
    createTargetOverrides as am,
    easings as an,
    useRouter as ao,
    useSounds as ap,
    useIsFirstRender as aq,
    matchPath as ar,
    useHandleKeydown as as,
    setContentReady as at,
    themes as au,
    Switch as av,
    Route as aw,
    sizes$4 as ax,
    keyCodes as ay,
    JSXBuilder as az,
    isTypeValidValue as b,
    scrollOrientations as b0,
    PrestigeEmblem as b1,
    forEach as b2,
    Video as b3,
    usePrevious as b4,
    useTimeout as b5,
    DisposeBuilder as b6,
    useScaleState as b7,
    addEventListener as b8,
    sizes$6 as b9,
    useParamTooltip as ba,
    computeds as c,
    useAdaptive as d,
    DateTimeFormatsEnum as e,
    getTimeUnits as f,
    getRegionalDateTime as g,
    formatCurrencyValue as h,
    initializeModelWithContext as i,
    useUpscale as j,
    useBackdropTooltip as k,
    formatValue as l,
    map as m,
    noop as n,
    useSimpleTooltip as o,
    renderString as p,
    upgradeLegacy as q,
    resources as r,
    formats as s,
    seconds as t,
    useUnmount as u,
    useSpecialTooltip as v,
    TruncatedText as w,
    Bubble as x,
    types as y,
    sizes$3 as z,
};
