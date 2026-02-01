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
    r as reactExports,
    j as jsxRuntimeExports,
    e as cx,
    o as observable,
    f as action,
    u as untracked,
    g as computedFn,
    h as comparer,
    R as React,
    i as client,
    k as cva,
    l as useSpring,
    m as animated,
    n as index,
    C as Controller,
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
    constructor(e = window.R.images, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, s = 'silent') {
        const r = e.startsWith('R.images') ? e : concatWithPath(this.prefix, e),
            n = readFromR$2(e.startsWith('R.images') ? window : this.root, r);
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
function formatNumber(e, t) {
    return window.systemLocale.getNumberFormat(t, numberFormats[e]);
}
function isRealFormat(e) {
    return e in realFormats;
}
function formatReal(e, t) {
    return window.systemLocale.getRealFormat(t, realFormats[e]);
}
function formatDateTime(e, t, s = !0) {
    return window.regionalDateTime.getRegionalDateTime(t, e, s);
}
const timeFormats = { full: DateTimeFormatsEnum.FullTime, short: DateTimeFormatsEnum.ShortTime },
    timeFormatList = Object.keys(timeFormats);
function formatTime(e, t, s = !0) {
    return window.regionalDateTime.getRegionalDateTime(t, e, s);
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
function readFromR$1(e, t, s) {
    const r = e.split('.');
    if (window.R && window.R.strings) {
        const e = r[r.length - 1];
        if (!e) return;
        const n = r.slice(0, -1).reduce((e, t) => {
            if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
        }, s);
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
    readOr(e, t, s = 'silent') {
        const r = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            n = readFromR$1(r, void 0, e.startsWith('R.strings') ? window : this.root);
        return void 0 === n ? ('silent' !== s && logBySeverity$1(`Resource not found: ${r}`, s), t()) : n;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
    readOrThrow(e) {
        const t = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            s = readFromR$1(t, void 0, e.startsWith('R.strings') ? window : this.root);
        if (void 0 === s) throw new Error(`Resource not found: ${t}`);
        return s;
    }
    plural(e, t) {
        return this.pluralOr(e, t, () => {});
    }
    pluralOr(e, t, s, r = 'silent') {
        const n = e.startsWith('R.strings') ? e : concatWithPath(this.prefix, e),
            a = readFromR$1(n, t, e.startsWith('R.strings') ? window : this.root);
        return void 0 === a ? ('silent' !== r && logBySeverity$1(`Resource not found: ${n}`, r), s()) : a;
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
    constructor(e = window.R.videos, t) {
        ((this.root = e), (this.prefix = t));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, t, s = 'silent') {
        const r = e.startsWith('R.videos') ? e : concatWithPath(this.prefix, e),
            n = readFromR(e.startsWith('R.videos') ? window : this.root, r);
        return void 0 === n ? ('silent' !== s && logBySeverity$1(`Resource not found: ${e}`, s), t()) : n;
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
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 + --e * e * e * e * e,
};
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
function format$1(e, t) {
    const s = toMillis(e);
    return t.map((e) => formats$1[e](s));
}
function toUpperCase(e) {
    return window.systemLocale.toUpperCase(e);
}
function normalizeResource(e) {
    return e.replaceAll('-', '_');
}
function format(e, t) {
    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
}
function capitalize(e) {
    return e ? toUpperCase(e.charAt(0)) + e.slice(1) : '';
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
                            a = internalMouse$1[t]((e) => s([e, 'outside']));
                        function u(e) {
                            s([e, 'inside']);
                        }
                        return (
                            window.addEventListener(n, u),
                            r(),
                            () => {
                                (a(), window.removeEventListener(n, u), (e.listeners -= 1), r());
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
function playSound$1(e) {
    engine.call('PlaySound', e);
}
const sounds$1 = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays$1 = Object.keys(sounds$1).reduce((e, t) => ((e[t] = () => playSound$1(sounds$1[t])), e), {}),
    play = { ...plays$1, sound: playSound$1 },
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
    viewEventTypes$1 = { tooltip: 1, close: 32 };
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
        closeView() {
            sendViewEvent$1(viewEventTypes$1.close);
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
    };
function ids() {
    return window.subViews.ids();
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
        const { top: t, right: s, bottom: r, left: n } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${t}rem`),
            e.style.setProperty('--external-padding-right', `${s}rem`),
            e.style.setProperty('--external-padding-bottom', `${r}rem`),
            e.style.setProperty('--external-padding-left', `${n}rem`));
    }
    (t(), engine.on('self.onPaddingsUpdated', () => t()));
}
function getKeyNameFromKeyCode(e) {
    return window.systemInput.getKeyName(e);
}
function pipe(e, t, s, r, n, a, u, o, i) {
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
            return a(n(r(s(t(e)))));
        case 7:
            return u(a(n(r(s(t(e))))));
        case 8:
            return o(u(a(n(r(s(t(e)))))));
        case 9:
            return i(o(u(a(n(r(s(t(e))))))));
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
    { initializer: e = !0, rootId: t = 0, getRoot: s = getRootDefault, context: r = 'model' } = {},
    { name: n = 'DataLayer' } = {},
) {
    const a = new Map(),
        u = { subscribersNotified: new SimpleEmitter() },
        o = engine.whenReady.then(() => {
            function e(e, t, s) {
                (s.forEach((s) => {
                    const r = a.get(s);
                    void 0 !== r && r(e, t);
                }),
                    u.subscribersNotified.emit());
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
            const e = s(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${n}. Root id: ${t}. Context: ${r}`);
        }
    }
    const l = (e) => {
        const s = i();
        if ('string' != typeof e || 0 === e.length) return s;
        try {
            return e.split('.').reduce((e, t) => {
                if (!(t in e)) throw new Error(`Key "${t}" doesn't exists in part of model`);
                const s = e[t];
                return 'function' == typeof s ? s.bind(e) : s;
            }, s);
        } catch (a) {
            throw new Error(`Failure readByPath in ${n}. Root id: ${t}. Context: ${r}:\n${a}\n`);
        }
    };
    function c(e) {
        viewEnv.removeDataChangedCallback(e, t) ? a.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (s, n) => {
            const u = addModelObserver$1('string' == typeof n ? `${r}.${n}` : r, t, !0);
            return (a.set(u, s), e && s(l(n), []), u);
        },
        readByPath: l,
        readSafeByPath: (e) => {
            const t = i();
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
            if (0 === t || ids().includes(t)) for (const e of a.keys()) c(e);
            o.then((e) => e());
        },
        unsubscribe: c,
        events: u,
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
function constFalse() {
    return !1;
}
function addEventListener(e, t, s, r) {
    return (e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r));
}
function makeMapWithPrefix(e, t) {
    return e.reduce((e, s) => ({ ...e, [`${t}_${s}`.toUpperCase()]: `${t}${s}` }), {});
}
function makeMap(e) {
    return e.reduce((e, t) => ({ ...e, [`${t}`.toUpperCase()]: t }), {});
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((u.prototype.append = function (e, t) {
                ((e = n(e)), (t = a(t)));
                var s = this.map[e];
                (s || ((s = []), (this.map[e] = s)), s.push(t));
            }),
                (u.prototype.delete = function (e) {
                    delete this.map[n(e)];
                }),
                (u.prototype.get = function (e) {
                    var t = this.map[n(e)];
                    return t ? t[0] : null;
                }),
                (u.prototype.getAll = function (e) {
                    return this.map[n(e)] || [];
                }),
                (u.prototype.has = function (e) {
                    return this.map.hasOwnProperty(n(e));
                }),
                (u.prototype.set = function (e, t) {
                    this.map[n(e)] = [a(t)];
                }),
                (u.prototype.forEach = function (e) {
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
                c.call(_.prototype),
                (self.Headers = u),
                (self.Request = d),
                (self.Response = _),
                (self.fetch = function (t, s) {
                    var n;
                    return (
                        (n = d.prototype.isPrototypeOf(t) && !s ? t : new d(t, s)),
                        new fetch.Promise(function (t, s) {
                            var a = (function () {
                                return r && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function u() {
                                if (4 === a.readyState) {
                                    var e = 1223 === a.status ? 204 : a.status;
                                    if (e < 100 || e > 599) s(new TypeError('Network request failed'));
                                    else {
                                        var r = {
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
                                        t(new _(n, r));
                                    }
                                }
                            }
                            ('cors' === n.credentials && (a.withCredentials = !0),
                                (a.onreadystatechange = u),
                                self.usingActiveXhr ||
                                    ((a.onload = u),
                                    (a.onerror = function () {
                                        s(new TypeError('Network request failed'));
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
        function u(e) {
            this.map = {};
            var t = this;
            e instanceof u
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
        function o(e) {
            if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function i(e) {
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
            return (t.readAsArrayBuffer(e), i(t));
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
                              s = o(this);
                          if (s) return s;
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
                (this.headers = new u(t.headers)),
                (this.method = ((r = t.method || 'GET'), (n = r.toUpperCase()), s.indexOf(n) > -1 ? n : r)),
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
                            var s = e.split('='),
                                r = s.shift().replace(/\+/g, ' '),
                                n = s.join('=').replace(/\+/g, ' ');
                            t.append(decodeURIComponent(r), decodeURIComponent(n));
                        }
                    }),
                t
            );
        }
        function p(e) {
            var t = new u();
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
        function _(e, t) {
            (t || (t = {}),
                this._initBody(e),
                (this.type = 'default'),
                (this.url = null),
                (this.status = t.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = t.statusText),
                (this.headers = t.headers instanceof u ? t.headers : new u(t.headers)),
                (this.url = t.url || ''));
        }
    })());
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
function map(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, s, r) => t(null == e ? void 0 : e.value, s, r));
}
function toArray(e) {
    return Array.isArray(e) ? e : e.map((e) => (null == e ? void 0 : e.value));
}
function find(e, t) {
    for (let s = 0; s < e.length; s++) {
        const r = unwrapItem(e[s]);
        if (t(r, s, e)) return r;
    }
}
function mapFilter(e, t, s) {
    const r = [];
    for (let n = 0; n < e.length; n++) {
        const a = t(unsafeGet(e, n), n, e);
        s(a, n, e) && r.push(a);
    }
    return r;
}
function mapNonNullable(e, t) {
    return mapFilter(e, t, isNonNullable);
}
function forEach(e, t) {
    for (let s = 0; s < e.length; s++) {
        t(unsafeGet(e, s), s, e);
    }
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
ROMAN_FORBIDDEN_LANGUAGE_CODES$2.includes(resources.resolve('langCode'));
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
        s = e
            .replace(/&nbsp;/g, ' ')
            .replace(/ /g, ' ')
            .matchAll(/[(（《「]*["'][^'"]*["'][。，:;：；—！!？?》」•%)、]*|.*?(?=[(（《「]*["'])|.*/gsu);
    for (const [r] of s) {
        const e = r.matchAll(
            /[(（《「“‘'"]*[\u4E00-\u9FFF\u3400-\u4DBF%][。，:;：；—！!？?》」•%)、’”'"]*|[(（《「“‘'"]*[a-zA-Z0-9-.,]+[。，:;：；—！!？?》」•%)、’”'"]*|\xa0|[^\u4E00-\u9FFF\u3400-\u4DBF\s]/gu,
        );
        for (const [s] of e) t.push(s);
    }
    return t;
}
function splitJapanese(e) {
    const t = [],
        s = e
            .replace(/&nbsp;/g, ' ')
            .matchAll(
                /[【「(（『《]?[\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF%](?:[。!?、…・ー—–!%?）)】」》』]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\u3040-\u30FF/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|\u00A0|[^\s]/gu,
            );
    for (const [r] of s) t.push(r);
    return t;
}
function splitKorean(e) {
    const t = [],
        s = e
            .replace(/&nbsp;/g, ' ')
            .matchAll(
                /\s+|\u00A0|[【「(（『《]?[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F%](?:[。!?、…・ー—–!%?）)】」》『]+)?|[「【(（『《]?\d+(?:,\d{3})*(?:\s*[a-zA-Z\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F/%]+)?(?:[。，、:;：；!?）)】」》・%)、]+)?|[「【(（『《]?[a-zA-Z0-9]+(?:[-/][a-zA-Z0-9]+)*(?:\s*[。!?、…・ー—–!?》】」）)』]+)?|[^\s]/gu,
            );
    for (const [r] of s) t.push(r);
    return t;
}
const splitters = { zh_cn: splitChinese, zh_sg: splitChinese, zh_tw: splitChinese, ja: splitJapanese, ko: splitKorean };
function defaultSplit(e) {
    return e.split(' ');
}
const langsWithoutSpace = new Set(['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'ko']);
function addSpaceAndMap(e, t, s) {
    return langsWithoutSpace.has(t)
        ? e.map(s)
        : e.map((e, t, r) => (t === r.length - 1 ? s(e, t, r) : s(`${e} `, t, r)));
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
        a = r[n],
        u = a.names[a.names.length - 1] ?? breakpoints.extraSmall,
        o = breakpointsByType[u],
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
        breaks: a.names,
        sides: m,
        mediaSize: o.width,
        mediaWidth: m.width,
        mediaHeight: m.height,
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
function useCallbackOnce(e, t = []) {
    const s = reactExports.useRef(!1);
    return reactExports.useCallback(() => {
        s.current || (e(), (s.current = !0));
    }, t);
}
function throttle(e, t, s, r) {
    let n,
        a = !1,
        u = 0;
    function o() {
        n && clearTimeout(n);
    }
    function i(...i) {
        const l = this,
            c = Date.now() - u;
        function d() {
            ((u = Date.now()), s.apply(l, i));
        }
        a ||
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
        'boolean' != typeof t && ((r = s), (s = t), (t = void 0)),
        (i.cancel = function () {
            (o(), (a = !0));
        }),
        i
    );
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
                if (e === keyStringCodes.NONE) return constFalse;
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
    Context$4 = reactExports.createContext(void 0);
function useApi$2() {
    const e = reactExports.useContext(Context$4);
    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
    return e;
}
function useHandleKey(e, t, s, r = !1) {
    const n = normalizeKeyCode(e),
        a = useEvent((e) => {
            isEventHandled$1() || (s(e), setEventHandled$1(), r && e.stopPropagation());
        }),
        u = useApi$2(),
        o = reactExports.useMemo(() => u[t].register(n, a), [u, t, n, a]);
    reactExports.useEffect(() => o, [o]);
}
function useHandleKeydown(e, t, s = !1) {
    return useHandleKey(normalizeKeyCode(e), 'keydown', t, s);
}
function Provider(e) {
    const t = reactExports.useMemo(createApi, []),
        s = reactExports.useMemo(createApi, []);
    reactExports.useEffect(() => {
        function e(e) {
            var s;
            null == (s = t.takeCurrent(e.code)) || s(e);
        }
        function r(e) {
            var t;
            null == (t = s.takeCurrent(e.code)) || t(e);
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
    return jsxRuntimeExports.jsx(Context$4.Provider, { value: r, children: e.children });
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
function useRepeatCallback(e, t, s = []) {
    const r = reactExports.useRef(0),
        n = reactExports.useCallback(() => {
            (window.clearInterval(r.current), (r.current = 0));
        }, s || []);
    reactExports.useEffect(() => n, [n]);
    const a = (s ?? []).concat([t]);
    return [
        reactExports.useCallback((s) => {
            (0 !== r.current && n(), (r.current = window.setInterval(() => e(s, !0), t)), e(s, !1));
        }, a),
        n,
    ];
}
const useRefResizeObserver = (e, t, s = !0) => {
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
function useThrottle(e, t, s) {
    const r = reactExports.useMemo(() => throttle(s, e), t);
    return (reactExports.useEffect(() => r.cancel, [r]), r);
}
function useTicker(e) {
    const { type: t, tick: s, limit: r } = e,
        n = e.autostart ?? !1,
        a = e.start ?? zero,
        [u, o] = reactExports.useState({ current: a, running: n }),
        i = reactExports.useRef(0);
    reactExports.useEffect(
        () => (
            (i.current = window.setInterval(() => {
                u.running
                    ? o((e) => {
                          const n = 'countdown' === t ? subtract(e.current, s) : add(e.current, s),
                              a = { ...e, current: n };
                          return (
                              isDuration(r) &&
                                  ('countdown' === t
                                      ? lt(subtract(n, s), r) && ((a.current = r), (a.running = !1))
                                      : gt(add(n, s), r) && ((a.current = r), (a.running = !1))),
                              a
                          );
                      })
                    : window.clearInterval(i.current);
            }, toMillis(s))),
            () => {
                window.clearInterval(i.current);
            }
        ),
        [r, s, u.running, t],
    );
    const l = reactExports.useMemo(
        () => ({
            start: () => o((e) => ({ ...e, isRunning: !0 })),
            stop: () => o((e) => ({ ...e, isRunning: !1 })),
            isRunning: () => u.running,
        }),
        [u.running],
    );
    return [u.current, l];
}
function useUntilTimer(e) {
    const { start: t, until: s, tick: r } = reactExports.useMemo(() => ({ ...e, start: e.start ?? now() }), [e]),
        [n, a] = reactExports.useState({ remaining: subtract(s, t), until: s, done: !1 });
    return (
        reactExports.useEffect(() => {
            let e = 0;
            const t = () => {
                const n = subtract(s, now()),
                    u = compare(n, r) <= 0;
                if ((a({ remaining: n, done: u, until: s }), u)) return;
                const o = toMillis(n);
                e = window.setTimeout(t, Math.min(toMillis(r), o));
            };
            return (
                t(),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [s, r]),
        n
    );
}
const displayedTooltips = new WeakMap(),
    DEFAULT_RES_ID = 0,
    statuses = { await: 'await', idle: 'idle', display: 'display' };
function useTooltip({
    resId: e = DEFAULT_RES_ID,
    contentId: t,
    decoratorId: s,
    disabled: r,
    args: n,
    showDelay: a = 400,
}) {
    const u = reactExports.useRef({ status: statuses.idle, resId: e, timeoutId: 0 }),
        [o, i] = reactExports.useMemo(() => {
            let o = null;
            function i() {
                r ||
                    ((u.current.status = statuses.await),
                    window.clearTimeout(u.current.timeoutId),
                    (u.current.timeoutId = window.setTimeout(l, a)));
            }
            function l() {
                ((u.current.status = statuses.display),
                    sendEvent$1.tooltip.open(e, t, s, n),
                    o && displayedTooltips.set(o, d));
            }
            function c() {
                if (
                    (window.clearTimeout(u.current.timeoutId),
                    u.current.status === statuses.display && sendEvent$1.tooltip.hide(e, t, s),
                    (u.current.status = statuses.idle),
                    o)
                ) {
                    displayedTooltips.delete(o);
                    let e = o.parentElement;
                    for (; e && !displayedTooltips.has(e); ) e = e.parentElement;
                    if (e) {
                        displayedTooltips.get(e).show();
                    }
                    o = null;
                }
            }
            const d = {
                hide: c,
                show: l,
                rerun: function () {
                    u.current.status !== statuses.idle && (r ? d.hide() : i());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((o = null == e ? void 0 : e.currentTarget), i());
                    },
                    onMouseLeave: r ? noop : c,
                    onClick: r ? noop : c,
                },
            ];
        }, [n, t, s, r, e, a]);
    return (
        reactExports.useEffect(() => {
            o.rerun();
        }, [o]),
        useUnmount(useEvent(o.hide)),
        i
    );
}
function useSimpleTooltip({ alert: e, body: t, header: s, note: r, hasHtmlContent: n, disabled: a }) {
    const u = resources.resolve('views');
    return useTooltip({
        disabled: a,
        contentId: u.read((e) =>
            n
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: u.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: reactExports.useMemo(() => ({ body: t, header: s, note: r, alert: e }), [e, t, s, r]),
    });
}
function useParamTooltip(e, t, s) {
    return useTooltip({
        ...s,
        disabled: 'string' != typeof e || (null == s ? void 0 : s.disabled),
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
const Context$3 = reactExports.createContext(null);
function SoundsProvider({ severity: e = 'warn', overrides: t, silent: s = !1, children: r }) {
    const n = reactExports.useMemo(() => ({ ...soundConfig, ...t }), [t]),
        a = reactExports.useMemo(
            () => ({
                play: function (t, r) {
                    if (s) return;
                    const a = n[t];
                    a ? a(r) : logBySeverity(`There is no sound for event: ${t}`, e);
                },
                settings: { plays: n, severity: e, silent: s },
            }),
            [n, e, s],
        );
    return jsxRuntimeExports.jsx(Context$3.Provider, { value: a, children: r });
}
function useSounds() {
    const e = reactExports.useContext(Context$3);
    if (!e) throw new Error('hook useSounds must be used within SoundsProvider');
    return e;
}
function useSoundsOptional() {
    return reactExports.useContext(Context$3);
}
const nonConvertingTypes = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    primitives$1 = new Set(['number', 'string', 'boolean', 'bigint']),
    bindingsForbidden = new Set(['Dict']);
function cloneModel(e, { shallow: t = !0, depth: s = 0, maxDepth: r = 32 } = {}) {
    var n, a;
    const u = e,
        o = typeof e;
    if (s > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (nonConvertingTypes.has(o)) return u;
    if (null === u) return u;
    const i = { depth: s + 1, maxDepth: r };
    if (Array.isArray(u)) return u.map((e) => cloneModel(e, i));
    if ('object' === o) {
        const r = (null == (n = u.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, i));
        if ('CoherentArrayProxy' === r) return e.map((e) => cloneModel(e.value, i));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === s) {
                const e = {};
                for (const t in u) {
                    const s = u[t];
                    primitives$1.has(typeof s) && (e[t] = s);
                }
                return e;
            }
            {
                const e = {};
                for (const t in u) {
                    const s = u[t],
                        r = (null == (a = null == u ? void 0 : u.constructor) ? void 0 : a.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(r) || (e[t] = cloneModel(s, i));
                }
                return e;
            }
        }
        const o = {};
        for (const e of Object.keys(u)) o[e] = cloneModel(u[e], i);
        return o;
    }
    return (console.error('Incorrect value to clone model', u), u);
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
                a = this.takeItem(e, n);
            n in s
                ? null === a
                    ? (delete s[n], this._keys.delete(n), this.set(s))
                    : s[n].set(a)
                : null !== a && ((s[n] = observable.box(a, MOBX_OPTIONS)), this._keys.add(n), this.set(s));
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
    useMockContext = () => reactExports.useContext(mockContext),
    DEFAULT_BOX_CONFIG = { equals: constFalse, deep: !1 };
function createObservableModel(e, t, s) {
    const r = [];
    e.events.subscribersNotified.on(
        action(() => {
            for (const e of r) e();
            r.splice(0, r.length);
        }),
    );
    const n = (n, a, u = DEFAULT_BOX_CONFIG) => {
            const o = observable.box(n(s(a)), u);
            return ('real' === t && e.subscribe((e) => r.push(() => o.set(n(e))), a), o);
        },
        a = (n, a) => {
            const u = new DLDict(s(n), a);
            return ('real' === t && e.subscribe((e, t) => r.push(() => u.update(e, t)), n), u);
        },
        u = (n, a) => {
            const u = observable.box(s(n) ?? a, DEFAULT_BOX_CONFIG);
            return ('real' === t && e.subscribe((e) => r.push(() => u.set(e)), n), u);
        };
    return {
        dict: a,
        dictRef: (e, t) => a(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => n(cloneModel, e),
        array: u,
        object: u,
        transform: n,
        primitives: (n, a) => {
            const u = s(a);
            if (Array.isArray(n)) {
                const s = n.reduce((e, t) => ((e[t] = observable.box(u[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                n.forEach((t) => {
                                    s[t].set(e[t]);
                                }),
                            );
                        }, a),
                    s
                );
            }
            {
                const s = n,
                    o = Object.entries(s),
                    i = o.reduce((e, [t, s]) => ((e[s] = observable.box(u[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                o.forEach(([t, s]) => {
                                    i[s].set(e[t]);
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
        (t, s, r) => {
            const n = reactExports.createContext(null);
            function a(a) {
                var u;
                const { mode: o, options: i, children: l, mocks: c } = a,
                    d = useMockContext(),
                    m = o ?? d.mode,
                    p = c ?? d.mocks,
                    _ = reactExports.useRef([]),
                    E = null == (u = null == r ? void 0 : r.useRequires) ? void 0 : u.call(r),
                    f = useEvent((n, u, o) => {
                        var i;
                        const l = 'real' !== n && o ? createMockInstance(o.getter, u) : create(u, { name: e }),
                            c = (e) => ('mocks' === n ? (null == o ? void 0 : o.getter(e, u)) : l.readByPath(e)),
                            d = (e) => _.current.push(e),
                            m = 'initial' in a && {
                                initial: null == (i = null == r ? void 0 : r.initial) ? void 0 : i.call(r, a.initial),
                            },
                            p = t({
                                ...m,
                                mode: n,
                                readByPath: c,
                                requires: E,
                                externalModel: l,
                                observableModel: createObservableModel(l, n, c),
                                cleanup: d,
                            }),
                            f = { ...m, mode: n, model: p, externalModel: l, cleanup: d, requires: E },
                            x = 'mocks' === n && (null == o ? void 0 : o.controls) ? o.controls(f) : {};
                        return {
                            model: p,
                            controls: { ...(null == s ? void 0 : s(f)), ...x },
                            externalModel: l,
                            mode: n,
                        };
                    }),
                    x = reactExports.useRef(!1),
                    [h, g] = reactExports.useState(m);
                reactExports.useEffect(() => {
                    g(m);
                }, [m]);
                const [b, y] = reactExports.useState(() => f(h, i, p));
                return (
                    reactExports.useEffect(() => {
                        x.current ? y(f(h, i, p)) : (x.current = !0);
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
                            (b.externalModel.dispose(), _.current.forEach((e) => e()));
                        },
                        [b],
                    ),
                    jsxRuntimeExports.jsx(n.Provider, { value: b, children: l })
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
        shallow: (e, t) => computedFn(e, { equals: comparer.shallow, ...t }),
        structural: (e, t) => computedFn(e, { equals: comparer.structural, ...t }),
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
                return events$1.onHitTest((t) => {
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
                const a = { depth: s - 1, convertArrays: r },
                    u = (null == (n = t.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
                switch (!0) {
                    case u.includes('CoherentArrayProxy'):
                        return [...t.values()].map((t) => e(a.convertArrays ? t.value : t, a));
                    case 'Dict' === u:
                        return [...t.entries()].reduce((t, [s, r]) => ((t[s] = e(r, a)), t), { $$type: 'Dict' });
                    case 'UNKNOWN' === u:
                        return 'UNKNOWN_TYPE';
                    case u.includes('ViewModel'):
                    default: {
                        const s = {};
                        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (s[r] = e(t[r], a));
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
async function runView(
    e,
    { root: t = document.getElementById('root'), withMedia: s = !0, fullScreen: r = !1, immediateLayout: n = !0 } = {},
) {
    var a;
    injectShowModel();
    const u = s ? MediaWrapper : React.Fragment,
        o = (null == (a = null == window ? void 0 : window.engine) ? void 0 : a.whenReady) ?? Promise.resolve();
    (n && engine.enableImmediateLayout(!0),
        await o,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client
            .createRoot(t)
            .render(jsxRuntimeExports.jsx(u, { children: jsxRuntimeExports.jsx(Provider, { children: e }) })),
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
const TabsContext = reactExports.createContext(null);
function useTabsContext() {
    const e = reactExports.useContext(TabsContext);
    return (assert(null !== e, 'You can use tabs hooks only with Tabs component'), e);
}
function Content({ children: e, keyOverride: t }) {
    const s = useTabsContext();
    return jsxRuntimeExports.jsx(reactExports.Fragment, { children: e(s.active) }, t ?? s.active);
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
        a = n ? Object.keys(n) : [];
    if ('object' == typeof t) {
        const s = t,
            r = cva(s.className, s.cva),
            n = s.element,
            u = reactExports.forwardRef(function (e, t) {
                return reactExports.createElement(n, {
                    ...('function' == typeof n ? e : cleanProps(a, e)),
                    ref: t,
                    className: r(e),
                });
            });
        return ((u.displayName = e), s.cva && (u.cva = s.cva), u);
    }
    const u = cva(t, s),
        o = reactExports.forwardRef(function (t, s) {
            return jsxRuntimeExports.jsx('div', { 'data-name': e, ...cleanProps(a, t), ref: s, className: u(t) });
        });
    return ((o.displayName = e), s && (o.cva = s), o);
}
function cleanProps(e, t) {
    if (0 === e.length) return t;
    const s = { ...t };
    for (const r of e) delete s[r];
    return s;
}
const themes$1 = { primary: 'primary', custom: 'custom' },
    sizes$3 = { large: 'large', medium: 'medium', small: 'small' },
    outerBorderImage = 'HorizontalTabs_outerBorderImage_8085e49e',
    mainBorderImage = 'HorizontalTabs_mainBorderImage_558d1c3f',
    base$k = 'HorizontalTabs_69e3c6f3',
    outerBorder = 'HorizontalTabs_outerBorder_3255d0c5',
    mainBorder = 'HorizontalTabs_mainBorder_61e34c2c',
    content$5 = 'HorizontalTabs_content_1ae3c4bd',
    styles$p = {
        outerBorderImage: outerBorderImage,
        mainBorderImage: mainBorderImage,
        base: base$k,
        'base__size-small': 'HorizontalTabs_base__size-small_75fae891',
        'base__size-medium': 'HorizontalTabs_base__size-medium_afc0934f',
        'base__size-large': 'HorizontalTabs_base__size-large_12c75e24',
        outerBorder: outerBorder,
        'base__theme-primary': 'HorizontalTabs_base__theme-primary_5e3af03e',
        mainBorder: mainBorder,
        content: content$5,
    },
    Base$8 = defineStyledComponent('Tabs', styles$p.base, {
        variants: {
            size: {
                [sizes$3.large]: styles$p['base__size-large'],
                [sizes$3.medium]: styles$p['base__size-medium'],
                [sizes$3.small]: styles$p['base__size-small'],
            },
            theme: { [themes$1.primary]: styles$p['base__theme-primary'], [themes$1.custom]: void 0 },
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
                className: cx(styles$p.outerBorder, null == t ? void 0 : t.outerBorder),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$p.outerBorderImage, null == t ? void 0 : t.outerBorderImage),
                    }),
                    jsxRuntimeExports.jsxs('div', {
                        className: cx(styles$p.mainBorder, null == t ? void 0 : t.mainBorder),
                        children: [
                            jsxRuntimeExports.jsx('div', {
                                className: cx(styles$p.mainBorderImage, null == t ? void 0 : t.mainBorderImage),
                            }),
                            jsxRuntimeExports.jsx('div', {
                                className: cx(styles$p.content, null == t ? void 0 : t.content),
                                children: e,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    border$2 = 'Tab_border_a63aeb3f',
    background$3 = 'Tab_background_4c9b3eb9',
    backgroundPattern$1 = 'Tab_backgroundPattern_417be4b5',
    innerBorderImage = 'Tab_innerBorderImage_adadda5f',
    base$j = 'Tab_f59c2b00',
    content$4 = 'Tab_content_b3f6c22b',
    base__active$2 = 'Tab_base__active_0',
    base__inactive = 'Tab_base__inactive_0',
    styles$o = {
        border: border$2,
        background: background$3,
        backgroundPattern: backgroundPattern$1,
        innerBorderImage: innerBorderImage,
        base: base$j,
        'base__theme-primary': 'Tab_base__theme-primary_90fd5ee',
        content: content$4,
        'base__size-small': 'Tab_base__size-small_0',
        'base__size-medium': 'Tab_base__size-medium_0',
        'base__size-large': 'Tab_base__size-large_0',
        base__active: base__active$2,
        base__inactive: base__inactive,
    },
    Base$7 = defineStyledComponent('Tab', styles$o.base, {
        variants: {
            size: {
                [sizes$3.large]: styles$o['base__size-large'],
                [sizes$3.medium]: styles$o['base__size-medium'],
                [sizes$3.small]: styles$o['base__size-small'],
            },
            theme: { [themes$1.primary]: styles$o['base__theme-primary'], [themes$1.custom]: void 0 },
            state: { active: styles$o.base__active, inactive: styles$o.base__inactive },
        },
        defaultVariants: { size: sizes$3.medium, theme: themes$1.primary },
    }),
    HeadlessTab = reactExports.forwardRef(function (
        { theme: e, size: t, tabId: s, active: r, children: n, onClick: a, onMouseEnter: u, ...o },
        i,
    ) {
        const l = useSounds();
        return jsxRuntimeExports.jsx(Base$7, {
            ...o,
            ref: i,
            theme: e,
            size: t,
            state: r === s ? 'active' : 'inactive',
            onMouseEnter: function (e) {
                (r !== s && l.play('mouse-enter', { target: Base$7.displayName, original: e }), null == u || u(e));
            },
            onClick: function (e) {
                (r !== s && l.play('click', { target: Base$7.displayName, original: e }), null == a || a(e));
            },
            children: n,
        });
    });
function Tab({ tabId: e, classNames: t, className: s, children: r, ...n }) {
    const a = useTabsContext();
    return jsxRuntimeExports.jsxs(HeadlessTab, {
        'data-test-id': `${e}Tab`,
        ...n,
        tabId: e,
        theme: a.theme,
        size: a.size,
        active: a.active,
        className: cx(null == t ? void 0 : t.base, s),
        onClick: (t) => {
            var s;
            (null == (s = n.onClick) || s.call(n, t), a.change(e));
        },
        children: [
            jsxRuntimeExports.jsx('div', { className: cx(styles$o.background, null == t ? void 0 : t.background) }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$o.backgroundPattern, null == t ? void 0 : t.backgroundPattern),
            }),
            jsxRuntimeExports.jsx('div', { className: cx(styles$o.border, null == t ? void 0 : t.border) }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$o.innerBorderImage, null == t ? void 0 : t.borderImage),
            }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$o.content, null == t ? void 0 : t.content),
                children: r,
            }),
        ],
    });
}
function Tabs({ active: e, theme: t, size: s, children: r, onActiveChange: n }) {
    const [a, u] = reactExports.useState(e),
        o = reactExports.useRef(e),
        i = reactExports.useMemo(() => ({ active: a, theme: t, size: s, change: u }), [a, s, t]);
    return (
        reactExports.useLayoutEffect(() => {
            u(e);
        }, [e]),
        reactExports.useEffect(() => {
            o.current !== a && ((o.current = a), null == n || n(a));
        }, [a, n]),
        jsxRuntimeExports.jsx(TabsContext.Provider, { value: i, children: r })
    );
}
((Tabs.Switcher = Switcher), (Tabs.Tab = Tab), (Tabs.Content = Content));
const base$i = 'CloseButton_7488a1b8',
    base__medium$1 = 'CloseButton_base__medium_97d04067',
    base__small$2 = 'CloseButton_base__small_c1b29bae',
    base__extraSmall = 'CloseButton_base__extraSmall_f52764c1',
    base__x96x96 = 'CloseButton_base__x96x96_8157b84d',
    base__x32x32 = 'CloseButton_base__x32x32_6466ea31',
    styles$n = {
        base: base$i,
        base__medium: base__medium$1,
        base__small: base__small$2,
        base__extraSmall: base__extraSmall,
        base__x96x96: base__x96x96,
        base__x32x32: base__x32x32,
    },
    sizes$2 = { medium: 'medium', small: 'small', extraSmall: 'extraSmall' },
    upscaleImageSizes = { [sizes$2.medium]: 'x96x96', [sizes$2.small]: sizes$2.medium, [sizes$2.extraSmall]: 'x32x32' };
function CloseButton({
    size: e = sizes$2.medium,
    hoverSound: t = sounds$1.highlight,
    clickSound: s = sounds$1.click,
    className: r,
    onHover: n,
    onClose: a,
}) {
    const u = useUpscale(styles$n[`base__${e}`], styles$n[`base__${upscaleImageSizes[e]}`]);
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$n.base, u, r),
        onMouseEnter: () => {
            (play.sound(t), null == n || n());
        },
        onClick: () => {
            (play.sound(s), a());
        },
    });
}
CloseButton.size = sizes$2;
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
        setScrollPosition: s,
        getDirection: r,
        getWrapperSize: n,
        triggerMouseMoveOnUpdate: a = !1,
    }) => {
        const u = (e, s) => {
            const [r, n] = t(e);
            return clamp(r, n, s);
        };
        return (o = {}) => {
            const { settings: i = defaultSettings } = o,
                [l, c] = reactExports.useState(!1),
                d = reactExports.useRef(null),
                m = reactExports.useRef(null),
                p = reactExports.useRef({ wrapper: 0, container: 0 }),
                _ = useEmitter(),
                E = useThrottle(
                    () => {
                        forceTriggerMouseMove$1();
                    },
                    [],
                    150,
                ),
                [f, x] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = d.current;
                        t && (s(t, e), _.trigger('change', e));
                    },
                    onRest: (e) => _.trigger('rest', e),
                    onStart: (e) => _.trigger('start', e),
                    onPause: (e) => _.trigger('pause', e),
                })),
                h = reactExports.useCallback(
                    (e, t, s) => {
                        const r = f.scrollPosition.get(),
                            n = (f.scrollPosition.goal ?? 0) - r;
                        return u(e, t * s + n + r);
                    },
                    [f.scrollPosition],
                ),
                g = reactExports.useCallback(
                    function (e, { immediate: t = !1, reset: s = !0 } = {}) {
                        const r = d.current;
                        if (!r) return;
                        const n = u(r, e);
                        f.scrollPosition.goal !== n &&
                            x.start({
                                scrollPosition: n,
                                immediate: t,
                                reset: s,
                                config: i.animationConfig,
                                from: { scrollPosition: u(r, f.scrollPosition.get()) },
                                onChange: () => {
                                    a && E();
                                },
                            });
                    },
                    [f.scrollPosition, x, i.animationConfig, E],
                ),
                b = reactExports.useCallback(
                    function (e) {
                        const t = d.current,
                            s = m.current;
                        if (!t || !s) return;
                        const r = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return n(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(s, i.step),
                            a = h(t, e, r);
                        g(a);
                    },
                    [g, h, i.step],
                ),
                y = reactExports.useCallback(
                    function (e) {
                        l ||
                            (0 !== e.deltaY && b(r(e)),
                            d.current && _.trigger('mouseWheel', e, f.scrollPosition, t(d.current)));
                    },
                    [f.scrollPosition, b, _, l],
                ),
                A = reactExports.useCallback(
                    function () {
                        const e = d.current;
                        e && (g(u(e, f.scrollPosition.goal), { immediate: !0 }), _.trigger('resizeHandled'));
                    },
                    [g, f.scrollPosition.goal, _],
                );
            useRefResizeObserver(m, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const s = n(t);
                p.current.wrapper !== s && A();
            });
            const F = useEvent(function () {
                    const t = d.current;
                    if (!t) return;
                    const s = e(t),
                        r = m.current ? n(m.current) : 0;
                    if (p.current.container !== s || p.current.wrapper !== r) {
                        const e = u(t, f.scrollPosition.goal);
                        (e !== f.scrollPosition.goal && g(e, { immediate: !0 }),
                            (p.current.container = s),
                            (p.current.wrapper = r),
                            _.trigger('recalculateContent'));
                    }
                }),
                v = useSkipFrame();
            reactExports.useEffect(() => addEventListener(window, 'resize', () => v.run(A)), [A, v]);
            return reactExports.useMemo(
                () => ({
                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                    getBounds: () =>
                        d.current ? t(d.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: i.step.clampedArrowStepTimeout,
                    settings: i,
                    clampPosition: u,
                    handleMouseWheel: y,
                    applyScroll: g,
                    applyStepTo: b,
                    contentRef: d,
                    wrapperRef: m,
                    scrollPosition: x,
                    animationScroll: f,
                    recalculateContent: F,
                    disabled: l,
                    setDisabled: c,
                    events: { on: _.on, off: _.off },
                }),
                [i, y, g, b, x, f, F, l, c, _.on, _.off],
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
    background$2 = 'Thumb_background_7f3dd6ac',
    border$1 = 'Thumb_border_5749138b',
    innerBorder = 'Thumb_innerBorder_42bafd18',
    icon$3 = 'Thumb_icon_dca8bf26',
    base$h = 'Thumb_6ff3e706',
    base__vertical$1 = 'Thumb_base__vertical_55a67c91',
    base__horizontal = 'Thumb_base__horizontal_27ca7ace',
    base__active$1 = 'Thumb_base__active_830942bb',
    styles$m = {
        background: background$2,
        border: border$1,
        innerBorder: innerBorder,
        icon: icon$3,
        base: base$h,
        base__vertical: base__vertical$1,
        base__horizontal: base__horizontal,
        base__active: base__active$1,
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
function Thumb(e) {
    const t = reactExports.useRef(null),
        [s, r] = reactExports.useState(!1),
        n = useEvent(function () {
            const s = t.current,
                r = e.trackRef.current,
                n = e.api.getWrapperSize(),
                a = e.api.getContainerSize();
            if (!(n && a && s && r)) return;
            const u = Math.min(1, n / a),
                o = 'horizontal' === e.direction ? 'width' : 'height';
            return ((s.style[o] = `${e.calculateSize(r, u)}px`), (s.style.display = 'flex'), u);
        }),
        [a, u] = useSpring(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: easings.easeInCubic,
            config: { duration: 200 },
        }));
    reactExports.useEffect(() => {
        s || e.dragging
            ? u.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(styles$m.base__active);
                  },
              })
            : u.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(styles$m.base__active);
                  },
              });
    }, [s, e.dragging, e.styles.closed, e.styles.opened, u]);
    const o = useEvent(function () {
            var s;
            const r = e.trackRef.current,
                n = t.current,
                a = e.railBeforeRef.current,
                o = e.railAfterRef.current,
                i = e.api.getWrapperSize(),
                l = e.api.getContainerSize();
            if (!(i && r && n && a && o && l)) return;
            const c = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, i / l),
                m = clamp(0, 1, c / (l - i)),
                p = e.calculateSize(r, d),
                _ = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - p) * m || 0,
                E = Math.round((2 * m - 1) * BOUNCING_OFFSET);
            (n.style.setProperty('--thumbOffset', `${_}px`),
                null == (s = e.onUpdate) || s.call(e, { thumbSize: p, thumbOffset: _, newBouncingCorrection: E }));
            const f = 0 === _ || e.isBoundThumb(_) ? 0 : E;
            return (
                u.start({
                    to: { '--bouncingCorrection': `${f}px` },
                    ...(0 === f ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                _
            );
        }),
        i = useSkipFrame(),
        l = useEvent(function () {
            n();
            const t = o();
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
            className: cx(styles$m.base, styles$m[`base__${e.direction}`], e.className),
            style: a,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$m.background }),
                jsxRuntimeExports.jsx('div', { className: styles$m.border }),
                jsxRuntimeExports.jsx('div', { className: styles$m.innerBorder }),
                jsxRuntimeExports.jsx('div', { className: styles$m.icon }),
            ],
        })
    );
}
const initBarDraggingState = { pending: !1, offset: 0 };
function useBarDragging(e, t, s, r, n) {
    const [a, u] = reactExports.useState(initBarDraggingState),
        o = useEvent(t),
        i = reactExports.useCallback(
            (t) => {
                (u(t), e.current && o({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [o, e],
        );
    return (
        reactExports.useEffect(() => {
            if (!a.pending) return;
            const t = mouse.move(function ([t]) {
                    const u = s.contentRef.current;
                    if (!u) return;
                    const i = r.current,
                        l = e.current;
                    if (!u || !i || !l) return;
                    const c = n(t, a, { parent: i, thumb: l }),
                        d = c * (s.getContainerSize() ?? 0);
                    (s.scrollPosition.start({
                        scrollPosition: s.clampPosition(u, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: s.animationScroll.scrollPosition.get() },
                    }),
                        o({ type: 'dragging', dragElement: l, elementOffset: c, contentOffset: d }));
                }),
                u = mouse.up(() => {
                    i(initBarDraggingState);
                });
            return () => {
                (t(), u());
            };
        }, [s, a.offset, a.pending, o, i, e, r, a, n]),
        i
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
function getCoordinate(e, t, s, r, n, a) {
    return {
        occurredEvent: a === scrollOrientations.horizontal ? e.screenX : e.screenY,
        bar: getElementCoordinates(t, a),
        thumb: getElementCoordinates(s, a),
        backButton: getElementCoordinates(r, a),
        forwardButton: getElementCoordinates(n, a),
    };
}
function useBarHandlers(e, t, s, r, n, a, u) {
    const o = useSounds(),
        i = n.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT,
        [l, c] = useRepeatCallback((e) => n.applyStepTo(e), i, [n]);
    reactExports.useEffect(
        () => (document.addEventListener('mouseup', c, !0), () => document.removeEventListener('mouseup', c, !0)),
        [c],
    );
    const d = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (o.play('click', { target: 'Scroll:Back', original: e }), l(Direction.Next));
            },
            [l, o],
        ),
        m = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (o.play('click', { target: 'Scroll:Forward', original: e }), l(Direction.Prev));
            },
            [l, o],
        ),
        p = reactExports.useCallback(
            (i) => {
                const l = e.current,
                    c = t.current,
                    p = s.current,
                    _ = r.current;
                if (!(l && c && p && _ && i.button === MOUSE_BUTTON_LEFT)) return;
                const E = getCoordinate(i, l, c, p, _, u),
                    f = E.thumb.start <= E.occurredEvent && E.occurredEvent <= E.thumb.end,
                    x =
                        (E.backButton.start <= E.occurredEvent && E.occurredEvent <= E.backButton.end) ||
                        (E.forwardButton.start <= E.occurredEvent && E.occurredEvent <= E.forwardButton.end);
                if (f) a({ pending: !0, offset: E.occurredEvent - E.thumb.start });
                else if (x) {
                    ((E.occurredEvent > E.thumb.start ? Direction.Prev : Direction.Next) === Direction.Next ? d : m)(i);
                } else {
                    const e = E.occurredEvent - E.bar.start,
                        t = E.thumb.end - E.thumb.start,
                        s = E.bar.end - E.bar.start,
                        r = n.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const a = ((e - t / 2) / s) * r;
                    n.applyScroll(a);
                }
                o.play('click', { target: 'Scroll:' + (f ? 'thumb' : x ? 'button' : ''), original: i });
            },
            [e, t, s, r, o, u, a, d, m, n],
        ),
        _ = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    o.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [o],
        );
    return reactExports.useMemo(
        () => ({
            handleMouseBackDown: d,
            handleMouseEnter: _,
            handleMouseDownTrack: p,
            handleMouseForwardDown: m,
            handleMouseForwardUp: c,
            handleMouseBackUp: c,
        }),
        [d, _, p, m, c],
    );
}
const rail$1 = 'HorizontalBar_rail_37858d8f',
    base$g = 'HorizontalBar_4df27ac3',
    track$1 = 'HorizontalBar_track_649dc296',
    rail__left = 'HorizontalBar_rail__left_1a906b4e',
    rail__right = 'HorizontalBar_rail__right_cd24364e',
    button__right = 'HorizontalBar_button__right_e8f0aa2d',
    button__left = 'HorizontalBar_button__left_da330e13',
    button$1 = 'HorizontalBar_button_cbabd91',
    styles$l = {
        rail: rail$1,
        base: base$g,
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
        const s = reactExports.useRef(null),
            r = reactExports.useRef(null),
            n = reactExports.useRef(null),
            a = reactExports.useRef(null),
            u = reactExports.useRef(null),
            o = reactExports.useRef(null),
            i = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useHorizontalScroll();
        useUpdateStatesBar({ baseRef: s, api: d });
        const m = useEvent(
                (e, t, { parent: s }) => (e.screenX - t.offset - s.getBoundingClientRect().x) / s.offsetWidth,
            ),
            p = useEvent((e) => e - (a.current.offsetWidth - u.current.offsetWidth) >= -0.5),
            _ = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            E = useBarDragging(u, _, d, a, m),
            f = useEvent(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: s }) => {
                const r = a.current,
                    n = o.current,
                    u = i.current;
                if (!r || !n || !u) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET$1);
                ((n.style.width = `${t - l + s}px`), (u.style.width = r.offsetWidth - e - t - l - s + 'px'));
            }),
            { handleMouseEnter: x, handleMouseDownTrack: h } = useBarHandlers(
                s,
                u,
                n,
                r,
                d,
                E,
                scrollOrientations.horizontal,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$l.base, e.base),
            ref: s,
            onWheel: d.handleMouseWheel,
            onMouseDown: h,
            onMouseEnter: x,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: r,
                    className: cx(styles$l.button, styles$l.button__left, e.leftButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: a,
                    className: cx(styles$l.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: o,
                            className: cx(styles$l.rail, styles$l.rail__left, e.leftRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: l,
                            api: d,
                            calculateOffset: m,
                            calculateSize: calculateThumbSize$1,
                            direction: 'horizontal',
                            isBoundThumb: p,
                            railAfterRef: o,
                            railBeforeRef: i,
                            styles: THUMB_STYLES$1,
                            onUpdate: f,
                            thumbRef: u,
                            trackRef: a,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$l.rail, styles$l.rail__right, e.rightRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$l.button, styles$l.button__right, e.rightButton),
                }),
            ],
        });
    }),
    base$f = 'HorizontalScroll_5b201d2b',
    wrapper$1 = 'HorizontalScroll_wrapper_abec8dee',
    defaultScrollArea = 'HorizontalScroll_defaultScrollArea_a5c0f45',
    styles$k = { base: base$f, wrapper: wrapper$1, defaultScrollArea: defaultScrollArea },
    DefaultScroll$1 = ({
        children: e,
        className: t,
        barClassNames: s,
        areaClassName: r,
        classNames: n,
        scrollClassName: a,
        onDrag: u,
    }) => {
        const { api: o } = useHorizontalScroll(),
            i = reactExports.useMemo(() => {
                const e = s || {};
                return { ...e, base: cx(styles$k.base, e.base) };
            }, [s]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$k.defaultScroll, t),
            onWheel: o.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$k.defaultScrollArea, r),
                    children: jsxRuntimeExports.jsx(Area$1, { className: a, classNames: n, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$1, { onDrag: u, classNames: i }),
            ],
        });
    };
function Area$1({ className: e, classNames: t, children: s }) {
    const { api: r } = useHorizontalScroll();
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$k.base, e),
        children: jsxRuntimeExports.jsx('div', {
            className: cx(styles$k.wrapper, null == t ? void 0 : t.wrapper),
            onWheel: r.handleMouseWheel,
            ref: r.wrapperRef,
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$k.content, null == t ? void 0 : t.content),
                ref: r.contentRef,
                children: s,
            }),
        }),
    });
}
function Base$6({ settings: e, children: t }) {
    const s = useApi$1({ settings: e }),
        r = reactExports.useMemo(() => ({ api: s }), [s]);
    return jsxRuntimeExports.jsx(Context$2.Provider, { value: r, children: t });
}
((Area$1.Bar = Bar$1), (Area$1.Default = DefaultScroll$1));
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
    base$e = 'VerticalBar_7187fa00',
    track = 'VerticalBar_track_ff482708',
    rail__top = 'VerticalBar_rail__top_ee531f43',
    rail__bottom = 'VerticalBar_rail__bottom_3eaa33b1',
    button__bottom = 'VerticalBar_button__bottom_6880f123',
    button__top = 'VerticalBar_button__top_b8383775',
    button = 'VerticalBar_button_7b0e4aca',
    styles$j = {
        rail: rail,
        base: base$e,
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
        const s = reactExports.useRef(null),
            r = reactExports.useRef(null),
            n = reactExports.useRef(null),
            a = reactExports.useRef(null),
            u = reactExports.useRef(null),
            o = reactExports.useRef(null),
            i = reactExports.useRef(null),
            [l, c] = reactExports.useState(!1),
            { api: d } = useVerticalScroll();
        useUpdateStatesBar({ baseRef: s, api: d });
        const m = useEvent((e) => e - (a.current.offsetHeight - u.current.offsetHeight) >= -0.5),
            p = useEvent(
                (e, t, { parent: s }) => (e.screenY - t.offset - s.getBoundingClientRect().y) / s.offsetHeight,
            ),
            _ = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? c(!0) : 'dragEnd' === e.type && c(!1), t(e)),
                [t],
            ),
            E = useBarDragging(u, _, d, a, p),
            f = useEvent(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: s }) => {
                const r = a.current,
                    n = o.current,
                    u = i.current;
                if (!r || !n || !u) return;
                const l = remToPx$1(THUMB_TO_RAIL_OFFSET);
                ((n.style.height = `${t - l + s}px`), (u.style.height = r.offsetHeight - e - t - l - s + 'px'));
            }),
            { handleMouseEnter: x, handleMouseDownTrack: h } = useBarHandlers(
                s,
                u,
                r,
                n,
                d,
                E,
                scrollOrientations.vertical,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$j.base, e.base),
            ref: s,
            onWheel: d.handleMouseWheel,
            onMouseDown: h,
            onMouseEnter: x,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: r,
                    className: cx(styles$j.button, styles$j.button__top, e.topButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: a,
                    className: cx(styles$j.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: o,
                            className: cx(styles$j.rail, styles$j.rail__top, e.topRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: l,
                            api: d,
                            calculateOffset: p,
                            calculateSize: calculateThumbSize,
                            direction: 'vertical',
                            isBoundThumb: m,
                            railAfterRef: o,
                            railBeforeRef: i,
                            styles: THUMB_STYLES,
                            onUpdate: f,
                            thumbRef: u,
                            trackRef: a,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$j.rail, styles$j.rail__bottom, e.bottomRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$j.button, styles$j.button__bottom, e.bottomButton),
                }),
            ],
        });
    }),
    content$3 = 'VerticalScroll_content_62cb6120',
    defaultScroll = 'VerticalScroll_defaultScroll_c69fa70e',
    area = 'VerticalScroll_area_a3c0086a',
    styles$i = { content: content$3, defaultScroll: defaultScroll, area: area },
    DefaultScroll = ({
        children: e,
        className: t,
        barClassNames: s,
        areaClassName: r,
        scrollClassName: n,
        scrollClassNames: a,
        onDrag: u,
    }) => {
        const { api: o } = useVerticalScroll(),
            i = reactExports.useMemo(() => {
                const e = s || {};
                return { ...e, base: cx(styles$i.base, e.base) };
            }, [s]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$i.defaultScroll, t),
            onWheel: o.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$i.area, r),
                    children: jsxRuntimeExports.jsx(Area, { className: n, classNames: a, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar, { onDrag: u, classNames: i }),
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
                className: cx(styles$i.base, null == t ? void 0 : t.wrapper, e),
                ref: n.wrapperRef,
                onWheel: n.handleMouseWheel,
                children: jsxRuntimeExports.jsx('div', {
                    ...r,
                    className: cx(styles$i.content, null == t ? void 0 : t.content),
                    ref: n.contentRef,
                    children: s,
                }),
            })
        );
    };
function Base$5({ children: e }) {
    const t = useApi(),
        s = reactExports.useMemo(() => ({ api: t }), [t]);
    return jsxRuntimeExports.jsx(Context$1.Provider, { value: s, children: e });
}
Area.Default = DefaultScroll;
const NodeTypes = { Text: 1, Tag: 2, Var: 3 };
function parseArguments(e) {
    const t = [];
    let s = '',
        r = !1,
        n = !1,
        a = '';
    for (let u = 0; u < e.length; u++) {
        const o = e[u];
        ("'" !== o && '"' !== o) || n || r
            ? o === a && n
                ? ((n = !1), (s += o))
                : '(' !== o || n
                  ? ')' === o && r && !n
                      ? ((r = !1), (s += o))
                      : ' ' !== o || r || n
                        ? (s += o)
                        : s && (t.push(s), (s = ''))
                  : ((r = !0), (s += o))
            : ((n = !0), (a = o), (s += o));
    }
    return (s && t.push(s), t);
}
function parse(e, t) {
    const s = [],
        r = [];
    let n = '',
        a = !1,
        u = '',
        o = 0;
    for (let i = 0; i < e.length; i++) {
        const l = e[i];
        if (l === t.start[0] && e.slice(i, i + t.start.length) === t.start) {
            if (n) {
                if (r.length > 0) {
                    r[r.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
                } else s.push({ type: NodeTypes.Text, value: n });
                n = '';
            }
            ((a = !0), (i += t.start.length - 1));
        } else if (l === t.end[0] && e.slice(i, i + t.end.length) === t.end) {
            ((a = !1), (i += t.end.length - 1));
            const e = u.trim();
            if (e.startsWith('@')) {
                const t = e.slice(1).trim(),
                    n = { type: NodeTypes.Tag, attrs: t.split('|'), instanceId: ++o, children: [] };
                if (r.length > 0) {
                    r[r.length - 1].node.children.push(n);
                } else s.push(n);
                r.push({ node: n, startIndex: s.length });
            } else if ('/' === e) r.length > 0 && r.pop();
            else {
                const t = { type: NodeTypes.Var, instanceId: ++o, name: e };
                if (r.length > 0) {
                    r[r.length - 1].node.children.push(t);
                } else s.push(t);
            }
            u = '';
        } else a ? (u += l) : (n += l);
    }
    if (n)
        if (r.length) {
            r[r.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
        } else s.push({ type: NodeTypes.Text, value: n });
    return s;
}
const COLORS =
        'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
    base$d = 'FormatText_db904f12',
    base__fullSize = 'FormatText_base__fullSize_a514958e',
    nowrap = 'FormatText_nowrap_ff69eca3',
    styles$h = { COLORS: COLORS, base: base$d, base__fullSize: base__fullSize, nowrap: nowrap },
    legacyColors = new Set((null == (_a = styles$h.COLORS) ? void 0 : _a.split(', ')) ?? []);
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
    for (let s = 0; s < e.length; s++) {
        const r = e[s],
            n = e[s + 1];
        if ('string' != typeof n || !startsWithPunctuationRe.test(n)) {
            t.push(split$1(r));
            continue;
        }
        const a = splitString(n.slice(1));
        (t.push(
            jsxRuntimeExports.jsxs(
                reactExports.Fragment,
                {
                    children: [
                        jsxRuntimeExports.jsxs('span', { className: styles$h.nowrap, children: [split$1(r), n[0]] }),
                        a,
                    ],
                },
                takeKey(),
            ),
        ),
            (s += 1));
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
        a = r[t];
    return a ? a(e, ...n) : (console.error(`Function ${t} is not registered`), e);
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
                a = t[n];
            if (a) return resolveAttrParams(e.replace(`$${n}`, String(a)), t);
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
    function a(e) {
        if (primitives.includes(typeof e)) {
            const t = n.at(-1);
            if ('string' == typeof t) return void (n[n.length - 1] = t + e);
        }
        n.push(e);
    }
    for (const u of e)
        if (u.type === NodeTypes.Text) a(u.value);
        else if (u.type === NodeTypes.Var)
            null === s[u.name] || primitives.includes(typeof s[u.name])
                ? a(s[u.name] ?? `{{${u.name}}}`)
                : n.push(
                      jsxRuntimeExports.jsx(
                          reactExports.Fragment,
                          { children: s[u.name] },
                          `var-${u.name}-${u.instanceId}`,
                      ),
                  );
        else if (u.type === NodeTypes.Tag) {
            const e = render(u.children, t, s, !1),
                r = applyFunctions(resolveAttrsParams(u.attrs, s), e, t);
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
                fullSize: a,
                inline: u,
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
            _ = cx(styles$h.base, a && styles$h.base__fullSize, l.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              jsxRuntimeExports.jsx('p', {
                  ...l,
                  className: _,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: p,
              }))
            : jsxRuntimeExports.jsx('span', { ...l, className: _, children: p });
    });
function FormatString({ path: e, ...t }) {
    return jsxRuntimeExports.jsx(FormatText, { text: resources.resolve('strings').readOrEmpty(e), ...t });
}
const undef = () => {};
function withResolvePath(e) {
    const t = e;
    return reactExports.forwardRef(function (e, s) {
        const r = useAdaptive(e, e.adaptive),
            { path: n, ...a } = r,
            u = r.images ?? resources.resolve('images'),
            o = { ...a, ref: s };
        {
            const e = n ? u.readOr(n, undef, 'warn') : void 0;
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
    Image = withResolvePath(
        reactExports.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: s,
                    fit: r,
                    position: n,
                    width: a,
                    src: u,
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
                repeat: s,
                fit: r,
                position: n,
                width: a,
                height: u,
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
                    backgroundRepeat: s ?? 'no-repeat',
                    backgroundSize: r ?? 'contain',
                    backgroundPosition: n ?? 'center center',
                    width: 'number' == typeof a ? `${a}rem` : a,
                    height: 'number' == typeof u ? `${u}rem` : u,
                    ...c.style,
                },
            });
        }),
    );
withResolvePath(
    reactExports.forwardRef(function (e, t) {
        const {
            width: s,
            height: r,
            src: n,
            unselectable: a,
            unknown: u,
            unknownStyle: o = defaultUnknownStyle,
            ...i
        } = e;
        return e.unknown
            ? jsxRuntimeExports.jsx('div', { ...i, style: { width: e.width, height: e.height, ...o } })
            : jsxRuntimeExports.jsx('img', { ...i, ref: t, src: n, width: s, height: r });
    }),
);
const themes = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    sizes$1 = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' },
    base$c = 'HeadlessButton_df8536fc',
    styles$g = { base: base$c },
    HeadlessButtonBase = defineStyledComponent('Button', { element: 'button', className: styles$g.base }),
    HeadlessButton = reactExports.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: s, soundTarget: r, disabled: n = !1, silent: a = !1, ...u },
        o,
    ) {
        const i = useSounds();
        return jsxRuntimeExports.jsx(HeadlessButtonBase, {
            ...u,
            ref: o,
            onMouseEnter: function (e) {
                (n || a || i.play('mouse-enter', { target: r || 'Button', original: e }), null == s || s(e));
            },
            onClick: function (e) {
                n || (a || i.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    background$1 = 'Button_background_98ebcfb8',
    border = 'Button_border_7e6390d7',
    overlay$1 = 'Button_overlay_174632c8',
    base$b = 'Button_70871946',
    base__enabled = 'Button_base__enabled_96634d40',
    base__disabled$1 = 'Button_base__disabled_b713e04a',
    content$2 = 'Button_content_298de63f',
    content__fontAligned = 'Button_content__fontAligned_66115778',
    styles$f = {
        background: background$1,
        border: border,
        overlay: overlay$1,
        base: base$b,
        base__enabled: base__enabled,
        base__disabled: base__disabled$1,
        'base__size-extraSmall': 'Button_base__size-extraSmall_d0cdb5ed',
        'base__size-small': 'Button_base__size-small_fc7095a4',
        'base__size-medium': 'Button_base__size-medium_814d61f0',
        'base__size-large': 'Button_base__size-large_83da852e',
        'base__theme-primary': 'Button_base__theme-primary_8ba55469',
        'base__theme-secondary': 'Button_base__theme-secondary_3fa4afc',
        content: content$2,
        content__fontAligned: content__fontAligned,
    },
    Button = reactExports.forwardRef(function (
        {
            children: e,
            size: t = sizes$1.large,
            theme: s = themes.primary,
            disabled: r = !1,
            silent: n = !1,
            autoAlignContent: a = !0,
            classNames: u,
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
                styles$f.base,
                styles$f[`base__size-${t}`],
                styles$f[`base__theme-${s}`],
                r ? styles$f.base__disabled : styles$f.base__enabled,
                o,
                null == u ? void 0 : u.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = i.onClick) || t.call(i, e);
            },
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$f.background, null == u ? void 0 : u.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$f.border, null == u ? void 0 : u.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$f.overlay, null == u ? void 0 : u.overlay) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$f.content, a && styles$f.content__fontAligned, null == u ? void 0 : u.content),
                    children: e,
                }),
            ],
        });
    });
((Button.themes = themes), (Button.sizes = sizes$1));
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
            a = '';
        return (
            s &&
                ((a = (null == (t = s.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : t[0]) || ''),
                (r = s.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                window.__feature && window.__feature !== r && window.subViews[r] && (n = window.subViews[r].id)),
            { callerUrl: a, caller: r, stack: s, resId: n }
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
                        const a = `mouse${t}`,
                            u = internalMouse[t]((e) => s([e, 'outside']));
                        function o(e) {
                            s([e, 'inside']);
                        }
                        return (
                            window.addEventListener(a, o),
                            r(),
                            () => {
                                n && (u(), window.removeEventListener(a, o), (e.listeners -= 1), r(), (n = !1));
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
    sendShowPopOverEvent = (e, t, s, r, n = R.invalid('resId'), a) => {
        const u = env.view.getViewGlobalPosition(),
            { x: o, y: i, width: l, height: c } = s.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(o) + u.x,
                y: env.view.pxToRem(i) + u.y,
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
        onMouseDown: a,
        onClick: u,
        ignoreShowDelay: o = !1,
        ignoreMouseClick: i = !1,
        decoratorId: l = 0,
        isEnabled: c = !0,
        targetId: d = 0,
        onShow: m,
        onHide: p,
        ..._
    }) => {
        const E = reactExports.useRef({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
            f = reactExports.useMemo(() => d || getFromCallStack().resId, [d]),
            x = reactExports.useCallback(() => {
                (E.current.isVisible && E.current.timeoutId) ||
                    (handleViewEvent(t, l, { isMouseEvent: !0, on: !0, arguments: getViewEventArguments(s) }, f),
                    m && m(),
                    (E.current.isVisible = !0));
            }, [t, l, s, f, m]),
            h = reactExports.useCallback(() => {
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
                        t && !t.isSameNode(E.current.prevTarget) && h();
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
                      ((b = e.props.onMouseEnter),
                      (e) => {
                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                              (clearTimeout(E.current.timeoutId),
                              (E.current.timeoutId = window.setTimeout(x, o ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT)),
                              r && r(e),
                              b && b(e));
                      }),
                  onMouseLeave: ((e) => (t) => {
                      (h(), null == n || n(t), null == e || e(t));
                  })(e.props.onMouseLeave),
                  onClick: ((e) => (t) => {
                      (!1 === i && h(), null == u || u(t), null == e || e(t));
                  })(e.props.onClick),
                  onMouseDown: ((e) => (t) => {
                      (!1 === i && h(), null == a || a(t), null == e || e(t));
                  })(e.props.onMouseDown),
                  ..._,
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
    SimpleTooltip = ({ children: e, body: t, header: s, note: r, alert: n, args: a, ...u }) => {
        const o = reactExports.useMemo(() => {
            const e = { ...a, body: t, header: s, note: r, alert: n };
            for (const t in e) void 0 === e[t] && delete e[t];
            return e;
        }, [n, t, s, r, a]);
        return jsxRuntimeExports.jsx(Tooltip$1, {
            contentId: getTooltipContentId(null == a ? void 0 : a.hasHtmlContent),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: o,
            ...u,
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
    styles$e = { noBreakWrapper: noBreakWrapper, lineBreak: lineBreak, newLine: newLine, word: word },
    createStyle = (e) => ({ color: `#${e}` }),
    getWordBlock = ({ elementList: e, textBlock: t, key: s }) => {
        const r = t.colorTag;
        return r
            ? colors[r]
                ? React.createElement(
                      'span',
                      { key: s, 'data-block-type': t.blockType, className: cx(styles$e.word, colors[r]) },
                      e,
                  )
                : React.createElement(
                      'span',
                      { key: s, 'data-block-type': t.blockType, className: styles$e.word, style: createStyle(r) },
                      e,
                  )
            : React.createElement('span', { key: s, 'data-block-type': t.blockType, className: styles$e.word }, e);
    },
    getLineBreak = ({ key: e }) =>
        React.createElement('span', { key: e, 'data-block-type': BlockType.LineBreak, className: styles$e.lineBreak }),
    getNewLine = ({ elementList: e, key: t }) =>
        React.createElement('span', { key: t, 'data-block-type': BlockType.NewLine, className: styles$e.newLine }, e),
    getNoBreakWrapper = ({ elementList: e, key: t }) =>
        React.createElement(
            'span',
            { key: t, 'data-block-type': BlockType.NoBreakWrapper, className: styles$e.noBreakWrapper },
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
            e.childList.forEach((n, a) => {
                const u = `${s}_${a}`;
                if (isTextBlock(n)) {
                    const e = n,
                        t = e.blockType,
                        s = RENDER_MAP[t],
                        a = renderChildList(e, s, u);
                    r.push(...a);
                } else r.push(t({ elementList: [n], textBlock: e, key: u }));
            }),
            r
        );
    },
    renderTextBlock = (e, t) => {
        const s = [],
            r = e.blockType,
            n = RENDER_MAP[r],
            a = renderChildList(e, n, t);
        return (
            r === BlockType.NoBreakWrapper ? s.push(n({ elementList: a, textBlock: e, key: `${t}` })) : s.push(...a),
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
            a = 0;
        for (; n; ) (a !== n.index && s(e.slice(a, n.index)), r(n), (a = t.lastIndex), (n = t.exec(e)));
        a !== e.length && s(e.slice(a));
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
        let a = 0;
        for (; r; ) {
            const u = t.justifyContent === Alignment.FlexEnd ? r.index : s.lastIndex;
            (n.push(e.slice(a, u)), (a = u), (r = s.exec(e)));
        }
        return (a !== e.length && n.push(e.slice(a)), n);
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
                        : r.push({ blockType: n, colorTag: t, childList: [s.replace(/\ufeff+/g, '')] });
                },
            ),
            r
        );
    },
    splitBinding = (e, t, s = '', r) => {
        const n = [],
            a = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
        return (
            split(
                a,
                /(?:%\(|{)(.*?)[)}][sd]?/g,
                (e) => {
                    n.push(...splitSpecialSymbols(e, s, r));
                },
                (e) => {
                    const a = e[1],
                        u = void 0 === t[a] ? e[0] : t[a];
                    'string' == typeof u || 'number' == typeof u
                        ? n.push(...splitSpecialSymbols(String(u), s, r))
                        : n.push({ blockType: BlockType.Binding, colorTag: s, childList: [u] });
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
            a = e.offsetWidth / n,
            u = Math.ceil(r / a);
        if (r > 0) {
            const r = Math.floor((t - e.offsetLeft) / a);
            return r >= s ? [!0, s + u] : [!1, r];
        }
        const o = Math.max(s + u, 0);
        return n < o ? [!1, 0] : [!0, o];
    },
    truncateElement = (e, t, s, r, n, a) => {
        let u = -1,
            o = null;
        for (let i = s; i >= 0; i--) {
            const s = e[i],
                l = Number(e[i].getAttribute(BLOCK_TYPE));
            if (l === BlockType.LineBreak || l === BlockType.NewLine || l === BlockType.Binding) continue;
            const c = s.textContent || '';
            if (!(s.childElementCount > 1)) {
                const [e, l] = isElementAvailableForTruncation(s, r, n);
                if (!e) {
                    l > 0 && (n -= l);
                    continue;
                }
                const d = c.slice(0, c.length - l) + a,
                    m = t[i];
                ((o = React.cloneElement(m, m.props, d)), (u = i));
                break;
            }
            {
                const e = s.children,
                    l = t[i],
                    d = l.props.children,
                    [m, p] = truncateElement(e, d, e.length - 1, r, n, a);
                if (!(m < 0)) {
                    const e = d.slice(0, m);
                    ((o = React.cloneElement(l, l.props, e, p)), (u = i));
                    break;
                }
                n -= c.length;
            }
        }
        return [u, o];
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
            a = e.current;
        if (!a) return [n, !1];
        const u = s.height,
            o = s.width,
            i = a.lastElementChild;
        if (!isVerticalOverflow(i, u) && getPositionDiff(i, o) <= 0) return [n, !1];
        const l = a.children,
            c = searchLastInHeight(l, u);
        if (c < 0) return [n, !1];
        const [d, m] = truncateElement(l, n, c, o, r.length, r);
        return (m && (n.splice(d, 1, m), n.splice(d + 1)), [n, !0]);
    },
    base$a = 'Extendedtext_34df2a2c',
    base__zeroPadding = 'Extendedtext_base__zeroPadding_bd1dbfd0',
    base__isTruncationAvailable = 'Extendedtext_base__isTruncationAvailable_21b9eaa',
    truncated = 'Extendedtext_truncated_6b4a3b66',
    truncated__hide = 'Extendedtext_truncated__hide_a75f6d91',
    unTruncated = 'Extendedtext_unTruncated_6ec70ccb',
    tooltip = 'Extendedtext_tooltip_7c24081e',
    styles$d = {
        base: base$a,
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
        isTruncationAvailable: a = !1,
        customTooltipArgs: u,
        targetId: o,
        justifyContent: i = Alignment.FlexStart,
        alignContent: l = Alignment.FlexStart,
        truncateIdentify: c = TRUNCATE_IDENTIFY,
    }) => {
        const d = reactExports.useRef(null),
            m = reactExports.useRef({ height: 0, width: 0 }),
            [p, _] = reactExports.useState({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
            E = reactExports.useMemo(() => getJsxElementsList(e, r, { justifyContent: i }), [r, i, e]),
            f = reactExports.useMemo(() => {
                if (n && p.isTruncated && (!r || !Object.values(r).find((e) => 'object' == typeof e)))
                    return {
                        args: { text: e, ...u, stringifyKwargs: r ? JSON.stringify(r) : '' },
                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                        targetId: o,
                    };
            }, [r, n, o, e, u, p.isTruncated]),
            x = reactExports.useCallback(
                (e) => {
                    ((m.current.width = e.contentRect.width), (m.current.height = e.contentRect.height));
                    const [t, r] = truncateJsxElements(d, E, m.current, c);
                    (_({ elementList: t, isTruncated: r, isTruncateFinished: !0 }), s && s(r));
                },
                [s, c, E],
            ),
            h = reactExports.useMemo(() => ({ justifyContent: i, alignContent: l }), [l, i]);
        return (
            useResizeObserver(d, x, a),
            jsxRuntimeExports.jsxs('div', {
                className: cx(styles$d.base, t, styles$d.base__zeroPadding, a && styles$d.base__isTruncationAvailable),
                style: h,
                children: [
                    jsxRuntimeExports.jsx('div', { className: styles$d.unTruncated, ref: d, children: E }),
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: f,
                        className: cx(
                            styles$d.tooltip,
                            styles$d[`tooltip__justify-${i}`],
                            styles$d[`tooltip__align-${l}`],
                        ),
                        children: jsxRuntimeExports.jsx('div', {
                            className: cx(styles$d.truncated, !p.isTruncateFinished && a && styles$d.truncated__hide),
                            style: h,
                            children: p.isTruncateFinished && a ? p.elementList : E,
                        }),
                    }),
                ],
            })
        );
    },
    ExtendedText = React.memo(ExtendedTextComponent),
    formats = { superCompact: 'superCompact', compact: 'compact', default: 'default', detailed: 'detailed' },
    sizes = { x16x16: 'x16x16', x24x24: 'x24x24', x32x32: 'x32x32', x48x48: 'x48x48', x80x80: 'x80x80' },
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
    styles$c = {
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
                    { className: cx(styles$c.detailedSeparator, styles$c[`detailedSeparator__${e}`]) },
                    'separator',
                ),
            ),
            r.push(
                jsxRuntimeExports.jsx(
                    'span',
                    {
                        className: cx(styles$c.item, styles$c[`item__${e}`]),
                        children:
                            null == (s = t.items[n])
                                ? void 0
                                : s
                                      .split(' ')
                                      .map((t, s) =>
                                          jsxRuntimeExports.jsx(
                                              'span',
                                              { className: cx(styles$c.part, styles$c[`part__${e}`]), children: t },
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
        a = FORMAT_PARTS[t],
        u = { separator: !1, items: [] };
    for (; r < n && !(Number(e[r]) > 0); ++r);
    return (
        a[r] === MINUTES_FORMAT && 0 === Number(e[r])
            ? (u.items = [
                  null == (s = LOCALE_FORMATTERS[MINUTES_FORMAT])
                      ? void 0
                      : s.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
              ])
            : (u.items = [r, r + 1].map((t) => {
                  var s;
                  return null == (s = LOCALE_FORMATTERS[a[t]]) ? void 0 : s.call(LOCALE_FORMATTERS, e[t]);
              })),
        u
    );
}
function compactFormatter(e, t) {
    var s, r;
    const n = e.length,
        a = FORMAT_PARTS[t],
        u = { separator: !1, items: [] };
    for (let o = 0; o < n; ++o)
        if (Number(e[o]) > 0)
            return ((u.items = [null == (s = LOCALE_FORMATTERS[a[o]]) ? void 0 : s.call(LOCALE_FORMATTERS, e[o])]), u);
    return (
        (u.items = [
            null == (r = LOCALE_FORMATTERS[MINUTES_FORMAT]) ? void 0 : r.call(LOCALE_FORMATTERS, DEFAULT_MIN_VALUE),
        ]),
        u
    );
}
const formatValue = (e, t) => {
        var s;
        return null == (s = FORMATTER[t]) ? void 0 : s.call(FORMATTER, format$1(e, FORMAT_PARTS[t]), t);
    },
    base$9 = 'Timer_dac0a0aa',
    icon$2 = 'Timer_icon_a61415df',
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
    styles$b = {
        base: base$9,
        icon: icon$2,
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
    size: r = sizes.x24x24,
    type: n = types.accent,
    format: a = formats.default,
    autostart: u = !0,
    className: o,
    classNames: i,
}) {
    const [l] = useTicker(
        reactExports.useMemo(
            () => ({
                type: 'countdown',
                start: isDuration(e) ? e : seconds(e),
                limit: isDuration(t) ? t : seconds(t),
                tick: isDuration(s) ? s : seconds(s),
                autostart: u,
            }),
            [u, t, e, s],
        ),
    );
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$b.base, o),
        children: [
            jsxRuntimeExports.jsx('div', {
                className: cx(
                    styles$b.icon,
                    styles$b[`icon__${r}`],
                    styles$b[`icon__${n}`],
                    null == i ? void 0 : i.icon,
                ),
            }),
            a !== formats.superCompact &&
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$b.label,
                        styles$b[`label__${r}`],
                        styles$b[`label__${n}`],
                        null == i ? void 0 : i.label,
                    ),
                    children: jsxRuntimeExports.jsx(FormattedValue, { size: r, preFormatted: formatValue(l, a) }),
                }),
        ],
    });
}
((Timer.format = formats), (Timer.size = sizes), (Timer.type = types));
const base$8 = 'Tooltip_6d997cee',
    decorator = 'Tooltip_decorator_b3486d4e',
    styles$a = { base: base$8, decorator: decorator },
    Base$4 = defineStyledComponent('Base', styles$a.base),
    Decorator = defineStyledComponent('Decorator', styles$a.decorator),
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
            jsxRuntimeExports.jsx(Base$4, {
                ...t,
                ref: function (e) {
                    ((r.current = e), 'function' == typeof s ? s(e) : s && (s.current = e));
                },
                children: e,
            })
        );
    });
Tooltip.Decorator = Decorator;
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
                a = n.$dyn(s);
            return !a && DOG_TAG_DEFAULT_ICON_NAME[e] ? `${n.$dyn(DOG_TAG_DEFAULT_ICON_NAME[e])}` : `${a}`;
        }
        return (
            console.error('Unreachable branch: add dogTagType and icon folder for corresponding icon matching'),
            ''
        );
    },
    getRewardImage = (e, t = ImageSize.Small) => {
        const { name: s, type: r, value: n, icon: a, item: u, dogTagType: o } = e,
            i = t === ImageSize.S24x24 ? ImageSize.Small : t,
            l = getSizeFolder(i);
        switch (s) {
            case 'basic':
            case 'plus':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.${r}_${n}`;
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.${s}_${n}`;
            case 'items':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.${u}`;
            case 'blueprints':
            case 'blueprintsAny':
            case 'finalBlueprints':
                return `R.images.gui.maps.icons.blueprints.fragment.${i}.${a}`;
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
                return `R.images.gui.maps.icons.quests.bonuses.${i}.${a}`;
            case 'crewBooks':
                return `R.images.gui.maps.icons.crewBooks.books.${i}.${a}`;
            case 'dogTagComponents':
                return getDogTypeImage(o, i, a);
            case 'dossier_badge':
                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
            case 'dossier_achievement':
                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
            case 'xp':
            case 'xpFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.exp`;
            case 'creditsFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.credits`;
            case 'tankmenXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.tankmenXP`;
            case 'dailyXPFactor':
            case 'freeXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.freeXP`;
            case 'premiumTank':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.vehicles`;
            case 'styleProgressToken':
                return `R.images.gui.maps.icons.quests.bonuses.${i}.style_3d`;
            case 'collectionItem':
                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${i}.${s}`;
        }
    },
    getRewardTooltipConfig = (e, t) => ({ args: e, contentId: t }),
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
    base$7 = 'Reward_d65e1e12',
    base__s24x24 = 'Reward_base__s24x24_954b5cee',
    base__s48x48 = 'Reward_base__s48x48_21f091ec',
    base__small$1 = 'Reward_base__small_3eddf28d',
    base__s80x80 = 'Reward_base__s80x80_21f091ec',
    base__big = 'Reward_base__big_e23f2c77',
    base__s128x100 = 'Reward_base__s128x100_1e08e04b',
    base__s180x135 = 'Reward_base__s180x135_93fc57c',
    base__s232x174 = 'Reward_base__s232x174_2904ea89',
    base__s296x222 = 'Reward_base__s296x222_52f0615b',
    base__s400x300 = 'Reward_base__s400x300_a8627e1b',
    base__s600x450 = 'Reward_base__s600x450_e27f3852',
    base__dynamicBox = 'Reward_base__dynamicBox_45d7782b',
    tooltipWrapper = 'Reward_tooltipWrapper_75b925a5',
    icon$1 = 'Reward_icon_e152f13b',
    overlay = 'Reward_overlay_8cbe65c9',
    highlight = 'Reward_highlight_f1cd08e0',
    image = 'Reward_image_810ec3a2',
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
    info = 'Reward_info_26d38c48',
    info__multi = 'Reward_info__multi_465d34bd',
    info__credits = 'Reward_info__credits_1643219',
    info__gold = 'Reward_info__gold_c751be5d',
    info__crystal = 'Reward_info__crystal_18ccfdd0',
    info__premiumTank = 'Reward_info__premiumTank_7862152',
    title = 'Reward_title_fbcf4b5',
    timer = 'Reward_timer_22ba7b8b',
    styles$9 = {
        base: base$7,
        base__s24x24: base__s24x24,
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
        base__dynamicBox: base__dynamicBox,
        tooltipWrapper: tooltipWrapper,
        icon: icon$1,
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
        special: a,
        value: u,
        valueType: o,
        title: i,
        style: l,
        className: c,
        classNames: d,
        tooltipArgs: m,
        periodicIconTooltipArgs: p,
    }) => {
        const _ = SIZE_MAP.has(n) ? SIZE_MAP.get(n) : n,
            E = getBottomHighlight(n, a),
            f = getOverlay(a),
            x = getFormattedValue(u, o),
            h = useTooltip({
                contentId: (null == m ? void 0 : m.contentId) ?? 0,
                args: null == m ? void 0 : m.args,
                resId: null == m ? void 0 : m.resId,
                decoratorId: null == m ? void 0 : m.decoratorId,
            }),
            g = useSimpleTooltip({ header: null == p ? void 0 : p.header, body: null == p ? void 0 : p.body });
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$9.base, styles$9[`base__${n}`], !r && styles$9.base__dynamicBox, c),
            style: l,
            ...h,
            children: [
                jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [
                        jsxRuntimeExports.jsxs('div', {
                            className: cx(
                                styles$9.image,
                                r ? styles$9.image__fixedBox : styles$9[`image__${n}`],
                                null == d ? void 0 : d.image,
                            ),
                            children: [
                                E &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$9.highlight, null == d ? void 0 : d.highlight),
                                        style: {
                                            backgroundImage: `url(${images.readOrEmpty(`quests.bonuses.${_}.${E}_highlight`)})`,
                                        },
                                    }),
                                t &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$9.icon, null == d ? void 0 : d.rewardIcon),
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                f &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$9.overlay, null == d ? void 0 : d.overlay),
                                        style: {
                                            backgroundImage: `url(${images.readOrEmpty(`quests.bonuses.${_}.${f}_overlay`)})`,
                                        },
                                    }),
                            ],
                        }),
                        x &&
                            jsxRuntimeExports.jsx('div', {
                                className: cx(
                                    styles$9.info,
                                    styles$9[`info__${e}`],
                                    o === ValueTypes.MULTI && styles$9.info__multi,
                                    null == d ? void 0 : d.info,
                                ),
                                children: x,
                            }),
                        i && jsxRuntimeExports.jsx('div', { className: styles$9.title, children: i }),
                    ],
                }),
                s &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$9.timer, null == d ? void 0 : d.periodicIcon),
                        ...g,
                    }),
            ],
        });
    },
    formatters = Object.fromEntries(Object.entries(defaultFormatters).map(([e]) => [e, (e) => e]));
function renderString(e, t = {}) {
    const s = parse(e, defaultBrackets);
    return String(render(s, formatters, t));
}
const base$6 = 'RewardsList_b956755b',
    base__vertical = 'RewardsList_base__vertical_59db3c9f',
    reward = 'RewardsList_reward_fc200613',
    reward__vertical = 'RewardsList_reward__vertical_5f09c6e0',
    boxRewardClassName = 'RewardsList_boxRewardClassName_882c908d',
    styles$8 = {
        base: base$6,
        base__vertical: base__vertical,
        reward: reward,
        reward__vertical: reward__vertical,
        boxRewardClassName: boxRewardClassName,
    },
    sizeToDefault = { [ImageSize.S24x24]: ImageSize.Small, [ImageSize.S48x48]: ImageSize.Small },
    Rewards = reactExports.memo(function ({
        data: e,
        isFixedBoxSize: t,
        size: s = ImageSize.Big,
        isVertical: r = !1,
        count: n,
        classMix: a,
        rewardItemClassMix: u,
        boxRewardTooltip: o,
        boxRewardValue: i,
        boxRewardClassName: l,
        boxRewardClassNames: c,
    }) {
        const d = resources.resolve('strings'),
            m = resources.resolve('images'),
            p =
                'number' == typeof n && n < e.length
                    ? `${m.readOrEmpty(`quests.bonuses.${sizeToDefault[s] ?? s}.default`)}`
                    : void 0,
            _ =
                i ||
                renderString(upgradeLegacy(d.readOrEmpty('tooltips.quests.awards.additional.bottom')), {
                    count: e.length - (n || 0),
                });
        return jsxRuntimeExports.jsx('div', {
            className: cx(styles$8.base, r && styles$8.base__vertical, a),
            children:
                void 0 !== p
                    ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                          children: [
                              e
                                  .slice(0, n)
                                  .map((e, n) =>
                                      jsxRuntimeExports.jsx(
                                          'div',
                                          {
                                              className: cx(styles$8.reward, r && styles$8.reward__vertical, u),
                                              children: jsxRuntimeExports.jsx(Reward, {
                                                  size: s,
                                                  isFixedBoxSize: t,
                                                  ...e,
                                              }),
                                          },
                                          n,
                                      ),
                                  ),
                              jsxRuntimeExports.jsx('div', {
                                  className: cx(styles$8.reward, r && styles$8.reward__vertical, u),
                                  children: jsxRuntimeExports.jsx(Reward, {
                                      name: 'more',
                                      isFixedBoxSize: t,
                                      image: p,
                                      size: s,
                                      value: _,
                                      tooltipArgs: o,
                                      className: cx(styles$8.boxRewardClassName, l),
                                      classNames: c,
                                  }),
                              }),
                          ],
                      })
                    : e.map((e, n) =>
                          jsxRuntimeExports.jsx(
                              'div',
                              {
                                  className: cx(styles$8.reward, r && styles$8.reward__vertical, u),
                                  children: jsxRuntimeExports.jsx(Reward, { size: s, isFixedBoxSize: t, ...e }),
                              },
                              n,
                          ),
                      ),
        });
    }),
    Context = reactExports.createContext(void 0);
function useProgressBar() {
    const e = reactExports.useContext(Context);
    if (!e) throw new Error('useProgressBar must be used within a ProgressBar');
    return e;
}
const fill = 'Filled_fill_32930ca9',
    filled = 'Filled_228d842a',
    wrapper = 'Filled_wrapper_fac9294',
    filled__small = 'Filled_filled__small_94d1350d',
    pattern = 'Filled_pattern_6ec8608d',
    filled__medium = 'Filled_filled__medium_94d1350d',
    styles$7 = {
        fill: fill,
        filled: filled,
        wrapper: wrapper,
        filled__small: filled__small,
        pattern: pattern,
        filled__medium: filled__medium,
    },
    Filled = reactExports.forwardRef(function ({ className: e, classNames: t, ...s }, r) {
        const n = useProgressBar();
        return jsxRuntimeExports.jsx('div', {
            ...s,
            ref: r,
            className: cx(styles$7.filled, styles$7[`filled__${n.size}`], e),
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(styles$7.wrapper, null == t ? void 0 : t.wrapper),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$7.fill, null == t ? void 0 : t.fill),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$7.pattern, null == t ? void 0 : t.pattern),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                ],
            }),
        });
    });
function ProgressBarProvider(e) {
    const [t, s] = reactExports.useState(Math.min(e.value, e.maxValue)),
        [r, n] = reactExports.useState(e.maxValue),
        a = usePrevious(t),
        u = usePrevious(r),
        o = useEvent((t) => s(Math.min(t, e.maxValue)));
    (reactExports.useLayoutEffect(() => {
        o(e.value);
    }, [e.value, o]),
        reactExports.useLayoutEffect(() => {
            n(e.maxValue);
        }, [e.maxValue]));
    const i = useEvent((t) => {
        var s;
        return null == (s = e.onValueChange) ? void 0 : s.call(e, t);
    });
    reactExports.useEffect(() => {
        i(t);
    }, [i, t]);
    const l = useEvent((t) => {
        var s;
        return null == (s = e.onMaxValueChange) ? void 0 : s.call(e, t);
    });
    reactExports.useEffect(() => {
        l(r);
    }, [l, r]);
    const c = reactExports.useMemo(() => {
        if (void 0 !== a && void 0 !== u) return { value: a, maxValue: u, percentage: a / u };
    }, [a, u]);
    assert(r > 0, 'ProgressBar: maxValue must be greater than 0');
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
    base$5 = 'ProgressBar_27c2305c',
    base__small = 'ProgressBar_base__small_61ccd4be',
    base__medium = 'ProgressBar_base__medium_478d985a',
    base__full = 'ProgressBar_base__full_be7f12da',
    backgroundPattern = 'ProgressBar_backgroundPattern_7e932276',
    styles$6 = {
        background: background,
        base: base$5,
        base__small: base__small,
        base__medium: base__medium,
        base__full: base__full,
        backgroundPattern: backgroundPattern,
    },
    Base$3 = defineStyledComponent('ProgressBar', styles$6.base, {
        variants: { size: { small: styles$6.base__small, medium: styles$6.base__medium, full: styles$6.base__full } },
    });
function ProgressBar({
    size: e = 'medium',
    className: t,
    classNames: s,
    filledClassName: r,
    filledClassNames: n,
    ...a
}) {
    return jsxRuntimeExports.jsx(ProgressBarProvider, {
        size: e,
        ...a,
        children: jsxRuntimeExports.jsxs(Base$3, {
            size: e,
            className: t,
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$6.background, null == s ? void 0 : s.background) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$6.backgroundPattern, null == s ? void 0 : s.backgroundPattern),
                }),
                jsxRuntimeExports.jsx(Filled, { className: r, classNames: n }),
                a.children,
            ],
        }),
    });
}
const delta = 'Delta_5c8185db',
    delta__increase = 'Delta_delta__increase_e6e76b0b',
    glow = 'Delta_glow_8e83fd7a',
    styles$5 = { delta: delta, delta__increase: delta__increase, glow: glow },
    Delta = reactExports.memo(
        reactExports.forwardRef(function (
            { initValue: e, initMaxValue: t, animationEnabled: s = !0, animationProps: r, classNames: n, ...a },
            u,
        ) {
            const o = reactExports.useRef(null),
                i = reactExports.useRef(null),
                l = useProgressBar(),
                c = reactExports.useMemo(() => {
                    if ('number' != typeof e || 'number' != typeof t) return;
                    assert(t > 0, 'initMaxValue must be greater than 0');
                    const s = Math.min(e, t);
                    return { value: s, maxValue: t, percentage: s / t };
                }, [e, t]),
                d = l.previous ?? c;
            return (
                reactExports.useEffect(() => {
                    const e = o.current,
                        t = i.current;
                    if (!e || !d || !t) return;
                    const n = l.percentage - d.percentage;
                    if (
                        ((e.style.left = 100 * Math.max(0, l.percentage - Math.max(0, n)) + '%'),
                        (e.style.width = 100 * Math.abs(n) + '%'),
                        e.classList.toggle(styles$5.delta__increase, n > 0),
                        (t.style.width = '100%'),
                        s && 0 != n)
                    ) {
                        const e = new Controller({
                            ...r,
                            from: { ...(null == r ? void 0 : r.from), width: 100 },
                            to: { ...(null == r ? void 0 : r.to), width: 0 },
                            onChange: (e, ...s) => {
                                var n;
                                ((t.style.width = `${e.value.width}%`),
                                    'function' == typeof (null == r ? void 0 : r.onChange) &&
                                        (null == (n = null == r ? void 0 : r.onChange) || n.call(r, e, ...s)));
                            },
                        });
                        return (
                            e.start(),
                            () => {
                                e.stop();
                            }
                        );
                    }
                }, [l.percentage, s, r, d]),
                jsxRuntimeExports.jsxs('div', {
                    ...a,
                    ref: assignRefs([u, o]),
                    className: cx(a.className, styles$5.delta),
                    children: [
                        d &&
                            jsxRuntimeExports.jsx('div', {
                                className: cx(styles$5.glow, null == n ? void 0 : n.glow),
                                ref: i,
                            }),
                        a.children,
                    ],
                })
            );
        }),
    ),
    CardContext = reactExports.createContext(void 0);
function useCardContext() {
    const e = reactExports.useContext(CardContext);
    if (!e) throw new Error('Card context must be used only within its provider');
    return e;
}
function CardContextProvider({ selected: e, hover: t, disabled: s, multiple: r, status: n, children: a }) {
    const u = reactExports.useMemo(
        () => ({ selected: e, hover: t, disabled: s, multiple: r, status: n }),
        [s, t, r, e, n],
    );
    return jsxRuntimeExports.jsx(CardContext.Provider, { value: u, children: a });
}
const CardsWrapperContext = reactExports.createContext(null);
function useCardsWrapperContextOptional() {
    return reactExports.useContext(CardsWrapperContext);
}
const CardsWrapperContextProvider = CardsWrapperContext.Provider,
    base$4 = 'Content_8eaaf71a',
    content$1 = 'Content_ab8563af',
    disabledOverlay = 'Content_disabledOverlay_af87c441',
    base__multiple = 'Content_base__multiple_da09528a',
    base__disabled = 'Content_base__disabled_da09528a',
    base__hover$1 = 'Content_base__hover_da09528a',
    base__selectedHover$1 = 'Content_base__selectedHover_da09528a',
    base__selected$1 = 'Content_base__selected_da09528a',
    multipleCorner = 'Content_multipleCorner_151c26ee',
    styles$4 = {
        base: base$4,
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
    Base$2 = defineStyledComponent('Content', styles$4.base, {
        variants: {
            multiple: { true: styles$4.base__multiple },
            selected: { true: styles$4.base__selected },
            hover: { true: styles$4.base__hover },
            disabled: { true: styles$4.base__disabled },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: styles$4.base__selectedHover }],
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
            jsxRuntimeExports.jsxs(Base$2, {
                multiple: r.multiple,
                selected: r.selected,
                hover: r.hover,
                disabled: r.disabled,
                children: [
                    r.multiple && jsxRuntimeExports.jsx('div', { className: styles$4.multipleCorner }),
                    jsxRuntimeExports.jsxs('div', {
                        ref: s,
                        className: cx(styles$4.content, null == t ? void 0 : t.mainContainerContent),
                        children: [
                            r.disabled && jsxRuntimeExports.jsx('div', { className: styles$4.disabledOverlay }),
                            e,
                        ],
                    }),
                ],
            })
        );
    },
    base$3 = 'Status_68bd9bc6',
    icon = 'Status_icon_cef4536',
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
    styles$3 = {
        base: base$3,
        icon: icon,
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
defineStyledComponent('Status', styles$3.base, {
    variants: { status: { done: styles$3.base__done, alert: styles$3.base__alert, locked: styles$3.base__locked } },
});
const SMALL_SIZE_BREAKPOINT = 100,
    tooltipEnabled = ({ header: e, body: t }) => Boolean(e && t),
    Status = ({ reason: e, classNames: t }) => {
        const s = reactExports.useRef(null),
            [r, n] = React.useState(!1),
            a = `base__${useCardContext().status}${r ? 'Small' : ''}`,
            u = React.useCallback(() => {
                var e;
                const t = null == (e = s.current) ? void 0 : e.getBoundingClientRect();
                t && n(t.width <= SMALL_SIZE_BREAKPOINT);
            }, [s]);
        useRefResizeObserver(s, u);
        const o = e
                ? {
                      header: strings.readOrEmpty(`tooltips.moduleFits.${e}.header`),
                      body: strings.readOrEmpty(`tooltips.moduleFits.${e}.text`),
                  }
                : {},
            i = useSimpleTooltip(o);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$3.base, styles$3[a], null == t ? void 0 : t.wrapper),
            ref: s,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$3.glowBig }),
                jsxRuntimeExports.jsx('div', { className: styles$3.line }),
                jsxRuntimeExports.jsx('div', { className: styles$3.shadow }),
                jsxRuntimeExports.jsx('div', { className: styles$3.glowInner }),
                jsxRuntimeExports.jsx('svg', {
                    width: '42',
                    height: '42',
                    viewBox: '0 0 42 42',
                    className: styles$3.blur,
                    children: jsxRuntimeExports.jsx('g', {
                        children: jsxRuntimeExports.jsx('circle', { cx: '21', cy: '21', r: '3' }),
                    }),
                }),
                jsxRuntimeExports.jsx('div', {
                    ...(tooltipEnabled(o) && i),
                    className: cx(styles$3.icon, null == t ? void 0 : t.icon),
                }),
            ],
        });
    },
    base$2 = 'Card_f0963ece',
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
        base: base$2,
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
    Base$1 = defineStyledComponent('Card', cardStyles.base, {
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
            onMouseOver: a,
            onMouseOut: u,
            soundTarget: o,
            disabled: i = !1,
            className: l,
            classNames: c,
            ...d
        },
        m,
    ) {
        const [p, _] = reactExports.useState(!1),
            E = useSounds(),
            f = useCardsWrapperContextOptional(),
            x = n || i;
        return jsxRuntimeExports.jsx(Base$1, {
            ...d,
            ref: m,
            hover: p,
            disableMouse: n,
            active: t,
            className: cx(cardStyles.card, l, (null == f ? void 0 : f.enabled) && cardStyles.base__wrapped),
            children: jsxRuntimeExports.jsxs(CardContextProvider, {
                disabled: i,
                selected: d.selected ?? !1,
                multiple: d.multiple ?? !1,
                hover: p,
                status: s,
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(cardStyles.content, null == c ? void 0 : c.content),
                        onClick: function (e) {
                            x || E.play('click', { target: o || 'react-ui:card', original: e });
                        },
                        onMouseEnter: function (e) {
                            x || E.play('mouse-enter', { target: o || 'react-ui:card', original: e });
                        },
                        onMouseOver: function (e) {
                            x || (_(!0), null == a || a(e));
                        },
                        onMouseOut: function (e) {
                            x || (_(!1), null == u || u(e));
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
    const a = Point(t, s),
        u = Point(t + r, s),
        o = Point(t + r, s + n),
        i = Point(t, s + n);
    return [
        [a, u],
        [u, o],
        [o, i],
        [i, a],
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
        a = s,
        u = s,
        o = -PADDING,
        i = -PADDING;
    for (e.splice(0, 1); e.length > 0; ) {
        const t = e.findIndex((e) => e[0].x === n.x && e[0].y === n.y);
        if (-1 === t) break;
        const s = e[t],
            l = n;
        (n.x <= u.x ? (i = PADDING) : (i === PADDING && (a.y -= 2 * PADDING), (i = -PADDING)),
            n.y >= u.y ? (o = PADDING) : (o === PADDING && (a.x -= 2 * PADDING), (o = -PADDING)),
            (n = { x: n.x + o, y: n.y + i }),
            r.push(n),
            (u = l),
            (a = n),
            (n = s[1]),
            e.splice(t, 1));
    }
    return (i === PADDING && o === PADDING && (a = { ...a, x: a.x - 2 * PADDING }), r.push(s), r);
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
        var a;
        const u = `${s === LINE_THICKNESS ? VERTICAL : HORIZONTAL}-${s === LINE_THICKNESS ? Math.round(e) : Math.round(t)}-${n}`;
        this.lines.has(u) || this.lines.set(u, []);
        const o = { x: e - this.containerRect.x, y: t - this.containerRect.y, width: s, height: r, className: n };
        null == (a = this.lines.get(u)) || a.push(o);
    }
    run() {
        const e = [];
        return (
            this.lines.forEach((t, s) => {
                const r = s.at(0) === HORIZONTAL,
                    n = t.sort((e, t) => (r ? e.x - t.x : e.y - t.y));
                let a = null;
                (n.forEach((t) => {
                    if (a)
                        if (r) {
                            const s = a.x + a.width,
                                r = t.x + t.width;
                            t.x >= a.x && t.x <= s ? (a = { ...a, width: Math.max(r, s) - a.x }) : (e.push(a), (a = t));
                        } else {
                            const s = a.y + a.height,
                                r = t.y + t.height;
                            t.y >= a.y && t.y <= s
                                ? (a = { ...a, height: Math.max(r, s) - a.y })
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
    styles$2 = { lineInner: lineInner, lineOuter: lineOuter };
function buildLines(e, t, s) {
    const r = [],
        n = new LinesOptimizer(t);
    for (let a = 0; a < e.length; a++) {
        const t = e[a],
            u = t.getBoundingClientRect();
        if (0 === u.width || 0 === u.height)
            return void console.debug(
                `Card rect has zero size by one side: ${u.width}x${u.height} (${t.getAttribute('data-test-id')}) `,
            );
        (s !== borderTypes.none && r.push({ x: u.x, y: u.y, width: u.width, height: u.height }),
            n.addLine(u.x, u.y, u.width, LINE_THICKNESS, styles$2.lineInner),
            n.addLine(u.x, u.y + u.height, u.width, LINE_THICKNESS, styles$2.lineInner),
            n.addLine(u.x, u.y, LINE_THICKNESS, u.height, styles$2.lineInner),
            n.addLine(u.x + u.width, u.y, LINE_THICKNESS, u.height + OFFSET, styles$2.lineInner));
    }
    if (s !== borderTypes.none) {
        const e = buildContour(r);
        let t = null;
        e.forEach((e) => {
            if (t) {
                const s = t.y === e.y,
                    r = t,
                    a = e;
                n.addLine(
                    Math.min(r.x, a.x),
                    Math.min(r.y, a.y),
                    s ? Math.abs(a.x - r.x) : LINE_THICKNESS,
                    s ? LINE_THICKNESS : Math.abs(a.y - r.y) + OFFSET,
                    styles$2.lineOuter,
                );
            }
            t = e;
        });
    }
    return n.run();
}
const Lines = reactExports.memo(({ containerRef: e, generation: t, border: s, cardSelector: r }) => {
        const [n, a] = reactExports.useState([]),
            u = useEvent(() => {
                const t = e.current;
                if (!t) return;
                const n = t.getBoundingClientRect(),
                    u = buildLines(t.querySelectorAll(`.${r || cardStyles.card}`), n, s);
                a(u ?? []);
            });
        return (
            reactExports.useEffect(u, [u, t]),
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
    base$1 = 'CardsWrapper_3b6cc4f6',
    card = 'CardsWrapper_card_c7fc9ee7',
    centerBorderCommon = 'CardsWrapper_centerBorderCommon_b4b27a11',
    outerBorderCommon = 'CardsWrapper_outerBorderCommon_f4887371',
    styles$1 = {
        base: base$1,
        card: card,
        centerBorderCommon: centerBorderCommon,
        outerBorderCommon: outerBorderCommon,
    },
    Base = defineStyledComponent('CardsWrapper', styles$1.base),
    CardsWrapper = reactExports.forwardRef(function (
        {
            children: e,
            className: t,
            trashhold: s,
            border: r = borderTypes.contour,
            enabled: n = !0,
            cardSelector: a,
            ...u
        },
        o,
    ) {
        const i = reactExports.useRef([]),
            l = reactExports.useRef(null),
            [c, d] = reactExports.useState('');
        reactExports.useImperativeHandle(o, () => l.current);
        const m = reactExports.useCallback(
            (e) => {
                const t = l.current;
                if (!t) return;
                const s = t.querySelectorAll(`.${a || cardStyles.card}`);
                if (s.length > 0) {
                    const r = t.getBoundingClientRect(),
                        n = s.length;
                    n !== i.current.length && (i.current = Array.from(s));
                    const a = `${Math.round(r.width)}x${Math.round(r.height)}-${n}|${e}`;
                    d(a);
                } else d('');
            },
            [a],
        );
        (reactExports.useEffect(() => {
            m(s);
        }),
            useRefResizeObserver(
                l,
                reactExports.useCallback(() => m(), [m]),
            ));
        const p = reactExports.useMemo(() => ({ recalculate: m, enabled: n }), [m, n]);
        return jsxRuntimeExports.jsx(Base, {
            ...u,
            ref: l,
            children: jsxRuntimeExports.jsxs('div', {
                className: t,
                children: [
                    jsxRuntimeExports.jsx(CardsWrapperContextProvider, { value: p, children: e }),
                    jsxRuntimeExports.jsx(Lines, {
                        cardsRef: i,
                        containerRef: l,
                        border: r,
                        generation: c,
                        cardSelector: a,
                    }),
                ],
            }),
        });
    });
function isEmptyObject(e) {
    for (const t in e) return !1;
    return !0;
}
reactExports.forwardRef(({ className: e, classNames: t, ...s }, r) =>
    jsxRuntimeExports.jsxs('div', {
        className: cx(styles$1.base, null == t ? void 0 : t.wrapper),
        children: [
            jsxRuntimeExports.jsx('div', { className: styles$1.centerBorderCommon }),
            jsxRuntimeExports.jsx('div', { className: styles$1.outerBorderCommon }),
            jsxRuntimeExports.jsx(Card, {
                className: cx(styles$1.card, e, null == t ? void 0 : t.card),
                classNames: t,
                ...s,
                ref: r,
            }),
        ],
    }),
);
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
            isPrebufferKeyframes: a,
            keyframesNameConfig: u,
            onClick: o,
            ...i
        },
        l,
    ) {
        const c = l,
            d = reactExports.useRef(null);
        return (
            useMount(() => {
                let e = !1;
                return events$1.onDisplayChanged((t, s) => {
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
                                        d.current.paused || !c || !a)
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
                                                const s = Object.keys(u ?? {})[r];
                                                return e({
                                                    time: t,
                                                    name: `${u ? s : `${DEFAULT_NAME_KEYFRAME}_${r}`}`,
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
                        o = () => {
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
                        m = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.pause();
                        },
                        p = () => {
                            (m(), i(0));
                        },
                        _ = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps)
                                ? d.current.cohGetKeyframeTimestamps()
                                : [];
                        },
                        E = (e) => {
                            (i(e), l());
                        },
                        f = (e) => {
                            (i(e), m());
                        },
                        x = () => {
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
                        g = (e, t) => {
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
                            off: g,
                            play: l,
                            pause: m,
                            stop: p,
                            cleanup: x,
                            getCurrentTime: n,
                            getDuration: o,
                            getCachedKeyframes: _,
                            goToAndPlay: E,
                            goToAndStop: f,
                            setCurrentTime: i,
                            domRef: d.current,
                            onChangeTime: s,
                            onKeyframes: r,
                        }),
                        () => {
                            (x(), (c.current = null));
                        }
                    );
                }
            }, [u, c, a]),
            reactExports.useEffect(() => {
                d.current && s && d.current.play();
            }, [s, n]),
            useUnmount(() => {
                var e;
                null == (e = d.current) || e.pause();
            }),
            jsxRuntimeExports.jsx('video', { src: e, className: t, style: r, loop: n, ref: d, onClick: o, ...i })
        );
    }),
    Video = reactExports.memo(VideoForwarded),
    base = 'VehicleLevel_3c938122',
    styles = { base: base },
    numberTypes = { arabic: 'arabic', roman: 'roman' };
function getLevelType(e, t) {
    return e || (t ? numberTypes.arabic : numberTypes.roman);
}
const VehicleLevel = reactExports.forwardRef(function ({ value: e, numberType: t, ...s }, r) {
    const n = getLevelType(t, useRomanForbidden()) === numberTypes.roman ? arabicToRoman(e) : e;
    return jsxRuntimeExports.jsx('div', {
        ...s,
        'data-name': 'VehicleLevel',
        className: cx(styles.base, s.className),
        ref: r,
        children: n,
    });
});
VehicleLevel.numberTypes = numberTypes;
export {
    useMedia as $,
    Area as A,
    Base$5 as B,
    CloseButton as C,
    millis as D,
    ExtendedText as E,
    FormatText as F,
    pipe as G,
    toSeconds as H,
    Image as I,
    JSXBuilder as J,
    subtract as K,
    now as L,
    Alignment as M,
    useSimpleTooltip as N,
    useParamTooltip as O,
    ProgressBar as P,
    Delta as Q,
    Rewards as R,
    Specials as S,
    Tabs as T,
    UIProvider as U,
    Card as V,
    cloneModel as W,
    add as X,
    useSounds as Y,
    useEvent as Z,
    easings as _,
    createLayoutReadyInEffect as a,
    toMillis as a0,
    forEach as a1,
    get as a2,
    assert as a3,
    isEmptyObject as a4,
    useEmitter as a5,
    useSoundsOptional as a6,
    find as a7,
    remToPx$1 as a8,
    usePrevious as a9,
    useMount as aa,
    useEmitterSubscribe as ab,
    Video as ac,
    useIsFirstRender as ad,
    logBySeverity$1 as ae,
    useTooltip as af,
    toArray as ag,
    getRewardTooltipConfig as ah,
    VehicleLevel as ai,
    normalizeResource as aj,
    Reward as ak,
    mapNonNullable as al,
    useHorizontalScroll as am,
    useSkipFrame as an,
    useCallbackOnce as ao,
    Area$1 as ap,
    Bar$1 as aq,
    Base$6 as ar,
    CardsWrapper as as,
    mapFilter as at,
    resources as b,
    createSoundPlay as c,
    FormatString as d,
    seconds as e,
    format$1 as f,
    useCallbackOnEsc as g,
    Bar as h,
    initializeModelWithContext as i,
    useCloseOnEsc as j,
    Button as k,
    sizes$1 as l,
    map as m,
    noop as n,
    capitalize as o,
    ImageSize as p,
    Tooltip as q,
    runView as r,
    sizes$3 as s,
    themes as t,
    useAdaptive as u,
    getRewardValueType as v,
    getRewardImage as w,
    Timer as x,
    computeds as y,
    useUntilTimer as z,
};
