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
    r as reactExports,
    j as jsxRuntimeExports,
    f as cx,
    o as observable,
    u as untracked,
    R as React,
    g as client,
    h as cva,
    i as useSpring,
    k as animated,
    l as ReactDOM,
    m as runInAction,
    n as autorun,
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
    readOr(e, t, s = 'silent') {
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
function formatNumber$1(e, t) {
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
const intl$2 = {
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
    intl: asValue(intl$2),
}),
    define_import_meta_env_default.VITE_HOT_LIVE_SERVER &&
        resources.register('images', asFunction(() => new ImagesServerRedirectProvider()).singleton()));
const easings = {
    easeInCubic: (e) => e * e * e,
    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
};
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
                        function o(e) {
                            s([e, 'inside']);
                        }
                        return (
                            window.addEventListener(n, o),
                            r(),
                            () => {
                                (a(), window.removeEventListener(n, o), (e.listeners -= 1), r());
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
function pipe(e, t, s, r, n, a, o, i, l) {
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
            return o(a(n(r(s(t(e))))));
        case 8:
            return i(o(a(n(r(s(t(e)))))));
        case 9:
            return l(i(o(a(n(r(s(t(e))))))));
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
        o = { subscribersNotified: new SimpleEmitter() },
        i = engine.whenReady.then(() => {
            function e(e, t, s) {
                (s.forEach((s) => {
                    const r = a.get(s);
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
    function l() {
        try {
            const e = s(t);
            return r.split('.').reduce((e, t) => e[t], e);
        } catch (e) {
            throw new Error(`Failure get root of ${n}. Root id: ${t}. Context: ${r}`);
        }
    }
    const c = (e) => {
        const s = l();
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
    function u(e) {
        viewEnv.removeDataChangedCallback(e, t) ? a.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (s, n) => {
            const o = addModelObserver$1('string' == typeof n ? `${r}.${n}` : r, t, !0);
            return (a.set(o, s), e && s(c(n), []), o);
        },
        readByPath: c,
        readSafeByPath: (e) => {
            const t = l();
            return 'string' != typeof e || 0 === e.length
                ? t
                : e.split('.').reduce((e, t) => {
                      const s = null == e ? void 0 : e[t];
                      return 'function' == typeof s ? s.bind(e) : s;
                  }, t);
        },
        createCallback: (e, t) => {
            const s = c(t);
            return (...t) => {
                s(e(...t));
            };
        },
        createCallbackNoArgs: (e) => {
            const t = c(e);
            return () => {
                t();
            };
        },
        dispose: function () {
            if (0 === t || ids().includes(t)) for (const e of a.keys()) u(e);
            i.then((e) => e());
        },
        unsubscribe: u,
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
const clamp$1 = (e, t, s) => (s < e ? e : s > t ? t : s);
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
function addEventListener(e, t, s, r) {
    return (e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r));
}
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((o.prototype.append = function (e, t) {
                ((e = n(e)), (t = a(t)));
                var s = this.map[e];
                (s || ((s = []), (this.map[e] = s)), s.push(t));
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
            (u.call(d.prototype),
                u.call(_.prototype),
                (self.Headers = o),
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
                            function o() {
                                if (4 === a.readyState) {
                                    var e = 1223 === a.status ? 204 : a.status;
                                    if (e < 100 || e > 599) s(new TypeError('Network request failed'));
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
                                            n = 'response' in a ? a.response : a.responseText;
                                        t(new _(n, r));
                                    }
                                }
                            }
                            ('cors' === n.credentials && (a.withCredentials = !0),
                                (a.onreadystatechange = o),
                                self.usingActiveXhr ||
                                    ((a.onload = o),
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
        function o(e) {
            this.map = {};
            var t = this;
            e instanceof o
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
        function l(e) {
            return new fetch.Promise(function (t, s) {
                ((e.onload = function () {
                    t(e.result);
                }),
                    (e.onerror = function () {
                        s(e.error);
                    }));
            });
        }
        function c(e) {
            var t = new FileReader();
            return (t.readAsArrayBuffer(e), l(t));
        }
        function u() {
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
                          return this.blob().then(c);
                      }),
                      (this.text = function () {
                          var e,
                              t,
                              s = i(this);
                          if (s) return s;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (t = new FileReader()).readAsText(e), l(t));
                          if (this._bodyFormData) throw new Error('could not read FormData body as text');
                          return fetch.Promise.resolve(this._bodyText);
                      }))
                    : (this.text = function () {
                          var e = i(this);
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
            var r, n;
            if (
                ((t = t || {}),
                (this.url = e),
                (this.credentials = t.credentials || 'omit'),
                (this.headers = new o(t.headers)),
                (this.method = ((r = t.method || 'GET'), (n = r.toUpperCase()), s.indexOf(n) > -1 ? n : r)),
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
            var t = new o();
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
                (this.headers = t.headers instanceof o ? t.headers : new o(t.headers)),
                (this.url = t.url || ''));
        }
    })());
const keyCodes = { NONE: -1, ESCAPE: 27 };
function makeMapWithPrefix(e, t) {
    return e.reduce((e, s) => ({ ...e, [`${t}_${s}`.toUpperCase()]: `${t}${s}` }), {});
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
function map(e, t) {
    return Array.isArray(e) ? e.map(t) : e.map((e, s, r) => t(null == e ? void 0 : e.value, s, r));
}
function filterMap(e, t, s) {
    const r = [];
    for (let n = 0; n < e.length; n++) {
        const a = unsafeGet(e, n);
        t(a, n, e) && r.push(s(a, n, e));
    }
    return r;
}
function mapExists(e, t) {
    return filterMap(e, isNonNullable, t);
}
function takeAction(e) {
    return action((t) => {
        e.set(t);
    });
}
const createLayoutReadyInEffect$1 = (e) => {
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
const mouseButtons = { left: 0, wheel: 1, right: 2 };
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
        o = a.names[a.names.length - 1] ?? breakpoints.extraSmall,
        i = breakpointsByType[o],
        l = r.width.names,
        c = r.height.names,
        u = l[l.length - 1] ?? breakpoints.extraSmall,
        d = c[c.length - 1] ?? breakpoints.extraSmall,
        p = { width: breakpointsByType[u].width, height: breakpointsByType[d].height };
    return {
        mediaClass: generateMediaClasses(n, r),
        breakpoint: i,
        screenWidthRem: e,
        screenHeightRem: t,
        breaks: a.names,
        sides: p,
        mediaSize: i.width,
        mediaWidth: p.width,
        mediaHeight: p.height,
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
function throttle(e, t, s, r) {
    let n,
        a = !1,
        o = 0;
    function i() {
        n && clearTimeout(n);
    }
    function l(...l) {
        const c = this,
            u = Date.now() - o;
        function d() {
            ((o = Date.now()), s.apply(c, l));
        }
        a ||
            (r && !n && d(),
            i(),
            void 0 === r && u > e
                ? d()
                : !0 !== t &&
                  (n = setTimeout(
                      r
                          ? function () {
                                n = void 0;
                            }
                          : d,
                      void 0 === r ? e - u : e,
                  )));
    }
    return (
        'boolean' != typeof t && ((r = s), (s = t), (t = void 0)),
        (l.cancel = function () {
            (i(), (a = !0));
        }),
        l
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
function useUnmount(e) {
    reactExports.useEffect(() => e, []);
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
        o = useApi$2(),
        i = reactExports.useMemo(() => o[t].register(n, a), [o, t, n, a]);
    reactExports.useEffect(() => i, [i]);
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
function useCallbackOnEsc(e) {
    return useHandleKeydown(keyStringCodes.ESCAPE, e);
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
            (t(), (t = createLayoutReadyInEffect$1(e)));
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
function useThrottleCall(e, t = !1) {
    const s = reactExports.useRef(0),
        r = reactExports.useRef(0),
        n = reactExports.useRef(noop$1);
    return (
        reactExports.useEffect(
            () => () => {
                window.clearTimeout(s.current);
            },
            [],
        ),
        reactExports.useMemo(() => {
            if (e <= 0) return { call: (e) => e(), cancel: noop$1 };
            return {
                call: function (a) {
                    n.current = a;
                    const o = Date.now();
                    o - r.current < e ||
                        (t && (n.current(), (n.current = noop$1)),
                        (r.current = o),
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
    },
    parameters = ['top', 'left', 'width', 'height', 'bottom', 'right', 'x', 'y'];
function isEqual(e, t) {
    return parameters.every((s) => e[s] === t[s]);
}
const initialSize = { top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 };
function watchResizes(e, t) {
    let s = 0;
    const r = e.map(() => initialSize);
    function n() {
        let a = !1;
        for (let t = 0; t < e.length; t++) {
            const s = e[t],
                n = r[t],
                o = s.getBoundingClientRect();
            isEqual(o, n) || ((r[t] = o), (a = !0));
        }
        (a && t(r), (s = requestAnimationFrame(n)));
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
    displayedTooltips = new WeakMap(),
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
    const o = reactExports.useRef({ status: statuses.idle, resId: e, timeoutId: 0 }),
        [i, l] = reactExports.useMemo(() => {
            let i = null;
            function l() {
                r ||
                    ((o.current.status = statuses.await),
                    window.clearTimeout(o.current.timeoutId),
                    (o.current.timeoutId = window.setTimeout(c, a)));
            }
            function c() {
                ((o.current.status = statuses.display),
                    sendEvent$1.tooltip.open(e, t, s, n),
                    i && displayedTooltips.set(i, d));
            }
            function u() {
                if (
                    (window.clearTimeout(o.current.timeoutId),
                    o.current.status === statuses.display && sendEvent$1.tooltip.hide(e, t, s),
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
                hide: u,
                show: c,
                rerun: function () {
                    o.current.status !== statuses.idle && (r ? d.hide() : l());
                },
            };
            return [
                d,
                {
                    onMouseEnter: (e) => {
                        ((i = null == e ? void 0 : e.currentTarget), l());
                    },
                    onMouseLeave: r ? noop$1 : u,
                    onClick: r ? noop$1 : u,
                },
            ];
        }, [n, t, s, r, e, a]);
    return (
        reactExports.useEffect(() => {
            i.rerun();
        }, [i]),
        useUnmount(useEvent(i.hide)),
        l
    );
}
function useSimpleTooltip({ alert: e, body: t, header: s, note: r, hasHtmlContent: n, disabled: a }) {
    const o = resources.resolve('views');
    return useTooltip({
        disabled: a,
        contentId: o.read((e) =>
            n
                ? e.common.tooltip_window.simple_tooltip_content.SimpleTooltipHtmlContent('resId')
                : e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
        ),
        decoratorId: o.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
        args: reactExports.useMemo(() => ({ body: t, header: s, note: r, alert: e }), [e, t, s, r]),
    });
}
function useParamTooltip(e, t, s) {
    return useTooltip({
        ...s,
        disabled: null == s ? void 0 : s.disabled,
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
const nonConvertingTypes = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    primitives$1 = new Set(['number', 'string', 'boolean', 'bigint']),
    bindingsForbidden = new Set(['Dict']);
function cloneModel(e, { shallow: t = !0, depth: s = 0, maxDepth: r = 32 } = {}) {
    var n, a;
    const o = e,
        i = typeof e;
    if (s > r) throw new Error(`Too deeply nested to copy. Max is ${r}.`);
    if (nonConvertingTypes.has(i)) return o;
    if (null === o) return o;
    const l = { depth: s + 1, maxDepth: r };
    if (Array.isArray(o)) return o.map((e) => cloneModel(e, l));
    if ('object' === i) {
        const r = (null == (n = o.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, l));
        if ('CoherentArrayProxy' === r) return e.map((e) => cloneModel(e.value, l));
        if ('Dict' === r) return;
        if ('UNKNOWN' === r) return;
        if (r.includes(':ViewModel:') || 'Object' === r) {
            if (t && 0 === s) {
                const e = {};
                for (const t in o) {
                    const s = o[t];
                    primitives$1.has(typeof s) && (e[t] = s);
                }
                return e;
            }
            {
                const e = {};
                for (const t in o) {
                    const s = o[t],
                        r = (null == (a = null == o ? void 0 : o.constructor) ? void 0 : a.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(r) || (e[t] = cloneModel(s, l));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(o)) i[e] = cloneModel(o[e], l);
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
    const n = (n, a, o = DEFAULT_BOX_CONFIG) => {
            const i = observable.box(n(s(a)), o);
            return ('real' === t && e.subscribe((e) => r.push(() => i.set(n(e))), a), i);
        },
        a = (n, a) => {
            const o = new DLDict(s(n), a);
            return ('real' === t && e.subscribe((e, t) => r.push(() => o.update(e, t)), n), o);
        },
        o = (n, a) => {
            const o = observable.box(s(n) ?? a, DEFAULT_BOX_CONFIG);
            return ('real' === t && e.subscribe((e) => r.push(() => o.set(e)), n), o);
        };
    return {
        dict: a,
        dictRef: (e, t) => a(e, { cloneItem: !1, ...t }),
        arrayClone: (e) => n(cloneModel, e),
        array: o,
        object: o,
        transform: n,
        primitives: (n, a) => {
            const o = s(a);
            if (Array.isArray(n)) {
                const s = n.reduce((e, t) => ((e[t] = observable.box(o[t], {})), e), {});
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
                    i = Object.entries(s),
                    l = i.reduce((e, [t, s]) => ((e[s] = observable.box(o[t], {})), e), {});
                return (
                    'real' === t &&
                        e.subscribe((e) => {
                            r.push(() =>
                                i.forEach(([t, s]) => {
                                    l[s].set(e[t]);
                                }),
                            );
                        }, a),
                    l
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
                var o;
                const { mode: i, options: l, children: c, mocks: u } = a,
                    d = useMockContext(),
                    p = i ?? d.mode,
                    m = u ?? d.mocks,
                    _ = reactExports.useRef([]),
                    f = null == (o = null == r ? void 0 : r.useRequires) ? void 0 : o.call(r),
                    h = useEvent((n, o, i) => {
                        var l;
                        const c = 'real' !== n && i ? createMockInstance(i.getter, o) : create(o, { name: e }),
                            u = (e) => ('mocks' === n ? (null == i ? void 0 : i.getter(e, o)) : c.readByPath(e)),
                            d = (e) => _.current.push(e),
                            p = 'initial' in a && {
                                initial: null == (l = null == r ? void 0 : r.initial) ? void 0 : l.call(r, a.initial),
                            },
                            m = t({
                                ...p,
                                mode: n,
                                readByPath: u,
                                requires: f,
                                externalModel: c,
                                observableModel: createObservableModel(c, n, u),
                                cleanup: d,
                            }),
                            h = { ...p, mode: n, model: m, externalModel: c, cleanup: d, requires: f },
                            g = 'mocks' === n && (null == i ? void 0 : i.controls) ? i.controls(h) : {};
                        return {
                            model: m,
                            controls: { ...(null == s ? void 0 : s(h)), ...g },
                            externalModel: c,
                            mode: n,
                        };
                    }),
                    g = reactExports.useRef(!1),
                    [E, b] = reactExports.useState(p);
                reactExports.useEffect(() => {
                    b(p);
                }, [p]);
                const [x, y] = reactExports.useState(() => h(E, l, m));
                return (
                    reactExports.useEffect(() => {
                        g.current ? y(h(E, l, m)) : (g.current = !0);
                    }, [
                        h,
                        m,
                        E,
                        null == l ? void 0 : l.context,
                        null == l ? void 0 : l.initializer,
                        null == l ? void 0 : l.getRoot,
                        null == l ? void 0 : l.rootId,
                    ]),
                    reactExports.useEffect(
                        () => () => {
                            (x.externalModel.dispose(), _.current.forEach((e) => e()));
                        },
                        [x],
                    ),
                    jsxRuntimeExports.jsx(n.Provider, { value: x, children: c })
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
                    o = (null == (n = t.constructor) ? void 0 : n.name) ?? 'UNKNOWN';
                switch (!0) {
                    case o.includes('CoherentArrayProxy'):
                        return [...t.values()].map((t) => e(a.convertArrays ? t.value : t, a));
                    case 'Dict' === o:
                        return [...t.entries()].reduce((t, [s, r]) => ((t[s] = e(r, a)), t), { $$type: 'Dict' });
                    case 'UNKNOWN' === o:
                        return 'UNKNOWN_TYPE';
                    case o.includes('ViewModel'):
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
    const o = s ? MediaWrapper : React.Fragment,
        i = (null == (a = null == window ? void 0 : window.engine) ? void 0 : a.whenReady) ?? Promise.resolve();
    (n && engine.enableImmediateLayout(!0),
        await i,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client
            .createRoot(t)
            .render(jsxRuntimeExports.jsx(o, { children: jsxRuntimeExports.jsx(Provider, { children: e }) })),
        r && (initExternalPaddings$1(t), enableFullScreenModeSupported$1()));
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
        (e.S24x24 = 's24x24'),
        e
    ))(ImageSize$1 || {}),
    ValueTypes$1 = ((e) => (
        (e.MULTI = 'multi'),
        (e.CURRENCY = 'currency'),
        (e.PREMIUM_PLUS = 'premium_plus'),
        (e.NUMBER = 'number'),
        (e.STRING = 'string'),
        e
    ))(ValueTypes$1 || {}),
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
const multiValueTypes$1 = [
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
        RewardType$1.BonusX5,
        RewardType$1.CrewBonusX3,
        RewardType$1.EpicSelectToken,
        RewardType$1.Comp7TokenWeeklyReward,
        RewardType$1.DeluxeGift,
        RewardType$1.BattleBoosterGift,
        RewardType$1.OptionalDevice,
    ],
    currencyValueTypes$1 = [RewardType$1.Gold, RewardType$1.Credits, RewardType$1.Crystal, RewardType$1.FreeXp],
    numberValueTypes$1 = [RewardType$1.BattlePassPoints, RewardType$1.EquipCoin],
    premiumValueTypes$1 = [RewardType$1.PremiumPlus, RewardType$1.Premium],
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
    getRewardValueType$1 = (e) =>
        multiValueTypes$1.includes(e)
            ? ValueTypes$1.MULTI
            : currencyValueTypes$1.includes(e)
              ? ValueTypes$1.CURRENCY
              : numberValueTypes$1.includes(e)
                ? ValueTypes$1.NUMBER
                : premiumValueTypes$1.includes(e)
                  ? ValueTypes$1.PREMIUM_PLUS
                  : ValueTypes$1.STRING,
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
    getRewardImage = (e, t = ImageSize$1.Small) => {
        const { name: s, type: r, value: n, icon: a, item: o, dogTagType: i } = e,
            l = t === ImageSize$1.S24x24 ? ImageSize$1.Small : t,
            c = getSizeFolder(l);
        switch (s) {
            case 'basic':
            case 'plus':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${r}_${n}`;
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${s}_${n}`;
            case 'items':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${o}`;
            case 'blueprints':
            case 'blueprintsAny':
            case 'finalBlueprints':
                return `R.images.gui.maps.icons.blueprints.fragment.${l}.${a}`;
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
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${a}`;
            case 'crewBooks':
                return `R.images.gui.maps.icons.crewBooks.books.${l}.${a}`;
            case 'dogTagComponents':
                return getDogTypeImage(i, l, a);
            case 'dossier_badge':
                return `R.images.gui.maps.icons.quests.bonuses.badges.${c}.${a}`;
            case 'dossier_achievement':
                return `R.images.gui.maps.icons.achievement.${c}.${a}`;
            case 'xp':
            case 'xpFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.exp`;
            case 'creditsFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.credits`;
            case 'tankmenXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.tankmenXP`;
            case 'dailyXPFactor':
            case 'freeXPFactor':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.freeXP`;
            case 'premiumTank':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.vehicles`;
            case 'styleProgressToken':
                return `R.images.gui.maps.icons.quests.bonuses.${l}.style_3d`;
            case 'collectionItem':
                return `R.images.gui.maps.icons.collectionItems.${c}.${a}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${l}.${s}`;
        }
    },
    getRewardTooltipConfig = (e, t) => ({ args: e, contentId: t }),
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
        }
    },
    getFormattedValue = (e, t) => {
        const s = resources.resolve('intl');
        if (void 0 === e) return null;
        switch (t) {
            case ValueTypes$1.MULTI: {
                const t = Number(e);
                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
            }
            case ValueTypes$1.CURRENCY:
            case ValueTypes$1.NUMBER:
                return s.formatNumber(s.numberFormats[0] || 'integral', Number(e));
            case ValueTypes$1.PREMIUM_PLUS: {
                const t = Number(e);
                return isNaN(t) ? e : null;
            }
            default:
                return e;
        }
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
const clamp = (e, t, s) => (s < e ? e : s > t ? t : s),
    createLayoutReadyInEffect = (e) => {
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
                            o = internalMouse[t]((e) => s([e, 'outside']));
                        function i(e) {
                            s([e, 'inside']);
                        }
                        return (
                            window.addEventListener(a, i),
                            r(),
                            () => {
                                n && (o(), window.removeEventListener(a, i), (e.listeners -= 1), r(), (n = !1));
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
    env = { view: view };
function noop() {}
const useMount = (e) => {
    reactExports.useEffect(e, []);
};
function requestAnimationFrameLoop(e) {
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
const DEFAULT_NAME_KEYFRAME$1 = 'Point',
    THRESHOLD$1 = 0.02,
    VideoForwarded$1 = reactExports.forwardRef(function (
        {
            src: e,
            className: t,
            autoplay: s = !1,
            style: r,
            loop: n = !1,
            isPrebufferKeyframes: a,
            keyframesNameConfig: o,
            onClick: i,
            ...l
        },
        c,
    ) {
        const u = c,
            d = reactExports.useRef(null);
        return (
            useMount(() =>
                env.view.events.onDisplayChanged((e, t) => {
                    var s, r;
                    (t === displayStatus.hidden && (null == (s = d.current) || s.pause()),
                        t === displayStatus.shown && (null == (r = d.current) || r.play()));
                }),
            ),
            reactExports.useEffect(
                () =>
                    createLayoutReadyInEffect(() => {
                        const e = d.current;
                        if (!u || !e || !a) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps();
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  null == e || e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [a, u],
            ),
            reactExports.useEffect(() => {
                if (u && d.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: noop },
                        t = () => {
                            let t = 0;
                            const [s, r] = requestAnimationFrameLoop(() => {
                                if (d.current) {
                                    const { currentTime: s, duration: r } = d.current;
                                    if (
                                        (t !== s &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: s, duration: r })),
                                            (t = s)),
                                        d.current.paused || !u || !a)
                                    )
                                        return;
                                    const n = d.current.cohGetKeyframeTimestamps();
                                    n.forEach((t, r) => {
                                        s > n[r] - THRESHOLD$1 &&
                                            s < n[r] &&
                                            e.changeKeyframeHandlers.forEach((e) => {
                                                const s = Object.keys(o ?? {})[r];
                                                return e({
                                                    time: t,
                                                    name: `${o ? s : `${DEFAULT_NAME_KEYFRAME$1}_${r}`}`,
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
                        l = (e) => {
                            d.current && (d.current.currentTime = clamp(0, d.current.duration, e));
                        },
                        c = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.play();
                        },
                        p = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.pause();
                        },
                        m = () => {
                            (p(), l(0));
                        },
                        _ = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps()) ?? [];
                        },
                        f = (e) => {
                            (l(e), c());
                        },
                        h = (e) => {
                            (l(e), p());
                        },
                        g = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        E = (e, t) => {
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
                        (u.current = {
                            on: E,
                            off: b,
                            play: c,
                            pause: p,
                            stop: m,
                            cleanup: g,
                            getCurrentTime: n,
                            getDuration: i,
                            getCachedKeyframes: _,
                            goToAndPlay: f,
                            goToAndStop: h,
                            setCurrentTime: l,
                            domRef: d.current,
                            onChangeTime: s,
                            onKeyframes: r,
                        }),
                        () => {
                            (g(), (u.current = null));
                        }
                    );
                }
            }, [o, u, a]),
            reactExports.useEffect(() => {
                d.current && s && d.current.play();
            }, [s, n]),
            reactExports.useEffect(() => {
                if (d.current)
                    return () => {
                        d.current && d.current.pause();
                    };
            }, []),
            jsxRuntimeExports.jsx('video', { src: e, className: t, style: r, loop: n, ref: d, onClick: i, ...l })
        );
    }),
    Video$1 = reactExports.memo(VideoForwarded$1),
    base$m = 'Reward_d65e1e12',
    base__s24x24 = 'Reward_base__s24x24_954b5cee',
    base__s48x48 = 'Reward_base__s48x48_21f091ec',
    base__small$3 = 'Reward_base__small_3eddf28d',
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
    icon$3 = 'Reward_icon_e152f13b',
    overlay$2 = 'Reward_overlay_8cbe65c9',
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
    title$1 = 'Reward_title_fbcf4b5',
    timer = 'Reward_timer_22ba7b8b',
    styles$p = {
        base: base$m,
        base__s24x24: base__s24x24,
        base__s48x48: base__s48x48,
        base__small: base__small$3,
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
        icon: icon$3,
        overlay: overlay$2,
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
        title: title$1,
        timer: timer,
    },
    images = resources.resolve('images'),
    SIZE_MAP = new Map([
        [ImageSize$1.S24x24, ImageSize$1.Small],
        [ImageSize$1.S48x48, ImageSize$1.Small],
    ]),
    Reward = ({
        name: e,
        image: t,
        isPeriodic: s = !1,
        isFixedBoxSize: r = !0,
        size: n = ImageSize$1.Big,
        special: a,
        value: o,
        valueType: i,
        title: l,
        style: c,
        className: u,
        classNames: d,
        tooltipArgs: p,
        periodicIconTooltipArgs: m,
    }) => {
        const _ = SIZE_MAP.has(n) ? SIZE_MAP.get(n) : n,
            f = getBottomHighlight(n, a),
            h = getOverlay(a),
            g = getFormattedValue(o, i),
            E = useTooltip({
                contentId: (null == p ? void 0 : p.contentId) ?? 0,
                args: null == p ? void 0 : p.args,
                resId: null == p ? void 0 : p.resId,
                decoratorId: null == p ? void 0 : p.decoratorId,
            }),
            b = useSimpleTooltip({ header: null == m ? void 0 : m.header, body: null == m ? void 0 : m.body });
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$p.base, styles$p[`base__${n}`], !r && styles$p.base__dynamicBox, u),
            style: c,
            ...E,
            children: [
                jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [
                        jsxRuntimeExports.jsxs('div', {
                            className: cx(
                                styles$p.image,
                                r ? styles$p.image__fixedBox : styles$p[`image__${n}`],
                                null == d ? void 0 : d.image,
                            ),
                            children: [
                                f &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$p.highlight, null == d ? void 0 : d.highlight),
                                        style: {
                                            backgroundImage: `url(${images.readOrEmpty(`quests.bonuses.${_}.${f}_highlight`)})`,
                                        },
                                    }),
                                t &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$p.icon, null == d ? void 0 : d.rewardIcon),
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                h &&
                                    jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$p.overlay, null == d ? void 0 : d.overlay),
                                        style: {
                                            backgroundImage: `url(${images.readOrEmpty(`quests.bonuses.${_}.${h}_overlay`)})`,
                                        },
                                    }),
                            ],
                        }),
                        g &&
                            jsxRuntimeExports.jsx('div', {
                                className: cx(
                                    styles$p.info,
                                    styles$p[`info__${e}`],
                                    i === ValueTypes$1.MULTI && styles$p.info__multi,
                                    null == d ? void 0 : d.info,
                                ),
                                children: g,
                            }),
                        l && jsxRuntimeExports.jsx('div', { className: styles$p.title, children: l }),
                    ],
                }),
                s &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$p.timer, null == d ? void 0 : d.periodicIcon),
                        ...b,
                    }),
            ],
        });
    },
    NodeTypes = { Text: 1, Tag: 2, Var: 3 };
function parseArguments(e) {
    const t = [];
    let s = '',
        r = !1,
        n = !1,
        a = '';
    for (let o = 0; o < e.length; o++) {
        const i = e[o];
        ("'" !== i && '"' !== i) || n || r
            ? i === a && n
                ? ((n = !1), (s += i))
                : '(' !== i || n
                  ? ')' === i && r && !n
                      ? ((r = !1), (s += i))
                      : ' ' !== i || r || n
                        ? (s += i)
                        : s && (t.push(s), (s = ''))
                  : ((r = !0), (s += i))
            : ((n = !0), (a = i), (s += i));
    }
    return (s && t.push(s), t);
}
function parse(e, t) {
    const s = [],
        r = [];
    let n = '',
        a = !1,
        o = '',
        i = 0;
    for (let l = 0; l < e.length; l++) {
        const c = e[l];
        if (c === t.start[0] && e.slice(l, l + t.start.length) === t.start) {
            if (n) {
                if (r.length > 0) {
                    r[r.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
                } else s.push({ type: NodeTypes.Text, value: n });
                n = '';
            }
            ((a = !0), (l += t.start.length - 1));
        } else if (c === t.end[0] && e.slice(l, l + t.end.length) === t.end) {
            ((a = !1), (l += t.end.length - 1));
            const e = o.trim();
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
            o = '';
        } else a ? (o += c) : (n += c);
    }
    if (n)
        if (r.length) {
            r[r.length - 1].node.children.push({ type: NodeTypes.Text, value: n });
        } else s.push({ type: NodeTypes.Text, value: n });
    return s;
}
const COLORS =
        'blackReal, whiteReal, white, whiteOrange, whiteSpanish, par, parSecondary, parTertiary, infoRed, red, redDark, yellow, orange, cream, brown, greenBright, green, greenDark, blueBooster, blueTeamkiller, cred, gold, bond, prom',
    base$l = 'FormatText_db904f12',
    base__fullSize = 'FormatText_base__fullSize_a514958e',
    nowrap = 'FormatText_nowrap_ff69eca3',
    styles$o = { COLORS: COLORS, base: base$l, base__fullSize: base__fullSize, nowrap: nowrap },
    legacyColors = new Set((null == (_a = styles$o.COLORS) ? void 0 : _a.split(', ')) ?? []);
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
            t.push(split(r));
            continue;
        }
        const a = splitString(n.slice(1));
        (t.push(
            jsxRuntimeExports.jsxs(
                reactExports.Fragment,
                {
                    children: [
                        jsxRuntimeExports.jsxs('span', { className: styles$o.nowrap, children: [split(r), n[0]] }),
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
    split: split,
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
    for (const o of e)
        if (o.type === NodeTypes.Text) a(o.value);
        else if (o.type === NodeTypes.Var)
            null === s[o.name] || primitives.includes(typeof s[o.name])
                ? a(s[o.name] ?? `{{${o.name}}}`)
                : n.push(
                      jsxRuntimeExports.jsx(
                          reactExports.Fragment,
                          { children: s[o.name] },
                          `var-${o.name}-${o.instanceId}`,
                      ),
                  );
        else if (o.type === NodeTypes.Tag) {
            const e = render(o.children, t, s, !1),
                r = applyFunctions(resolveAttrsParams(o.attrs, s), e, t);
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
                inline: o,
                formatters: i,
                split: l,
                ...c
            } = e,
            u = reactExports.useMemo(
                () => (e.upgradeLegacy ? upgradeLegacy(e.text) : e.text),
                [e.text, e.upgradeLegacy],
            ),
            d = reactExports.useMemo(
                () => (e.formatters ? { ...defaultFormatters, ...e.formatters } : defaultFormatters),
                [e.formatters],
            ),
            p = reactExports.useMemo(() => parse(l ? `{{@ split}}${u}{{/}}` : u, t), [t, u, l]),
            m = reactExports.useMemo(() => render(p, d, e.params), [p, d, e.params]),
            _ = cx(styles$o.base, a && styles$o.base__fullSize, c.className);
        return e.inline
            ? (console.warn(
                  "[FormatText] using the 'inline' props causes memory leaks due to incorrect working of the 'cohinline' attribute in GF version 1.48.2.3. Can cause client crashes.",
                  "Use 'split' prop instead.",
              ),
              jsxRuntimeExports.jsx('p', {
                  ...c,
                  className: _,
                  ref: (e) => {
                      null == e || e.setAttribute('cohinline', 'true');
                  },
                  children: m,
              }))
            : jsxRuntimeExports.jsx('span', { ...c, className: _, children: m });
    });
function FormatString({ path: e, ...t }) {
    return jsxRuntimeExports.jsx(FormatText, { text: resources.resolve('strings').readOrEmpty(e), ...t });
}
const formatters = Object.fromEntries(Object.entries(defaultFormatters).map(([e]) => [e, (e) => e]));
function renderString(e, t = {}) {
    const s = parse(e, defaultBrackets);
    return String(render(s, formatters, t));
}
const base$k = 'RewardsList_b956755b',
    base__vertical$1 = 'RewardsList_base__vertical_59db3c9f',
    reward = 'RewardsList_reward_fc200613',
    reward__vertical = 'RewardsList_reward__vertical_5f09c6e0',
    boxRewardClassName = 'RewardsList_boxRewardClassName_882c908d',
    styles$n = {
        base: base$k,
        base__vertical: base__vertical$1,
        reward: reward,
        reward__vertical: reward__vertical,
        boxRewardClassName: boxRewardClassName,
    },
    sizeToDefault = { [ImageSize$1.S24x24]: ImageSize$1.Small, [ImageSize$1.S48x48]: ImageSize$1.Small };
function isSerializableReactNode(e) {
    return (
        !(null != e && !['string', 'number', 'boolean'].includes(typeof e)) ||
        (!reactExports.isValidElement(e) && !!Array.isArray(e) && e.every(isSerializableReactNode))
    );
}
reactExports.memo(function ({
    data: e,
    isFixedBoxSize: t,
    size: s = ImageSize$1.Big,
    isVertical: r = !1,
    count: n,
    classMix: a,
    rewardItemClassMix: o,
    boxRewardTooltip: i,
    boxRewardValue: l,
    boxRewardClassName: c,
    boxRewardClassNames: u,
}) {
    const d = resources.resolve('strings'),
        p = resources.resolve('images'),
        m =
            'number' == typeof n && n < e.length
                ? `${p.readOrEmpty(`quests.bonuses.${sizeToDefault[s] ?? s}.default`)}`
                : void 0,
        _ =
            l ||
            renderString(upgradeLegacy(d.readOrEmpty('tooltips.quests.awards.additional.bottom')), {
                count: e.length - (n || 0),
            });
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$n.base, r && styles$n.base__vertical, a),
        children:
            void 0 !== m
                ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                      children: [
                          e
                              .slice(0, n)
                              .map((e, n) =>
                                  jsxRuntimeExports.jsx(
                                      'div',
                                      {
                                          className: cx(styles$n.reward, r && styles$n.reward__vertical, o),
                                          children: jsxRuntimeExports.jsx(Reward, { size: s, isFixedBoxSize: t, ...e }),
                                      },
                                      n,
                                  ),
                              ),
                          jsxRuntimeExports.jsx('div', {
                              className: cx(styles$n.reward, r && styles$n.reward__vertical, o),
                              children: jsxRuntimeExports.jsx(Reward, {
                                  name: 'more',
                                  isFixedBoxSize: t,
                                  image: m,
                                  size: s,
                                  value: _,
                                  tooltipArgs: i,
                                  className: cx(styles$n.boxRewardClassName, c),
                                  classNames: u,
                              }),
                          }),
                      ],
                  })
                : e.map((e, n) =>
                      jsxRuntimeExports.jsx(
                          'div',
                          {
                              className: cx(styles$n.reward, r && styles$n.reward__vertical, o),
                              children: jsxRuntimeExports.jsx(Reward, { size: s, isFixedBoxSize: t, ...e }),
                          },
                          n,
                      ),
                  ),
    });
});
const base$j = 'MultilineOverflow_8834bd8e',
    content$4 = 'MultilineOverflow_content_b539970d',
    styles$m = { base: base$j, content: content$4 };
function isSerializableParams(e) {
    return !e || Object.values(e).every(isSerializableReactNode);
}
const MultilineOverflow = reactExports.forwardRef(function (
        {
            text: e,
            brackets: t,
            params: s,
            formatters: r,
            upgradeLegacy: n,
            split: a = !0,
            onMouseEnter: o,
            onMouseLeave: i,
            onClick: l,
            tooltipDisabled: c = !1,
            tooltip: u,
            className: d,
            classNames: p,
            ...m
        },
        _,
    ) {
        const f = reactExports.useRef(null),
            [h, g] = reactExports.useState(!1);
        reactExports.useEffect(() => {
            if (0 === e.length) return;
            const t = f.current;
            if (!t) return;
            const s = document.createElement('div');
            let r = noop$1;
            function n() {
                if (!t) return;
                (r(),
                    (s.style.visibility = 'hidden'),
                    (s.className = cx(styles$m.content, t.children[0].className)),
                    (s.innerHTML = ''),
                    t.appendChild(s));
                for (let r of t.children[0].childNodes.values()) {
                    if (r instanceof HTMLElement) {
                        const e = r.cloneNode(!0);
                        s.appendChild(e);
                    }
                    if (r.nodeType === Node.TEXT_NODE) {
                        const e = document.createTextNode(r.nodeValue ?? '');
                        s.appendChild(e);
                    }
                }
                const e = document.createElement('div');
                ((e.innerHTML = '...'),
                    s.appendChild(e),
                    (r = createLayoutReadyInEffect$1(() => {
                        var r, n;
                        const a = [];
                        for (let e = s.childNodes.length - 2; 0 !== e; e--) {
                            const r = s.childNodes[e];
                            if (r instanceof HTMLElement) {
                                if (r.offsetTop + r.offsetHeight <= t.offsetHeight) break;
                                a.push(r);
                            }
                        }
                        a.forEach((e) => e.remove());
                        const o = null == (r = s.lastChild) ? void 0 : r.previousSibling;
                        (0 === a.length
                            ? (null == (n = s.lastChild) || n.remove(), g(!1))
                            : o.offsetWidth + o.offsetLeft + e.offsetWidth > t.offsetWidth
                              ? (o.remove(), g(!0))
                              : g(!0),
                            (s.style.visibility = ''));
                    })));
            }
            const a = new ResizeObserver(n);
            return (
                a.observe(t),
                new DisposeBuilder()
                    .add(() => r())
                    .add(addEventListener(window, 'resize', n))
                    .add(a.disconnect.bind(a))
                    .add(s.remove.bind(s)).dispose
            );
        }, [_, e]);
        const E = isSerializableParams(s),
            b = useParamTooltip(
                'format_text',
                reactExports.useMemo(
                    () => ({
                        text: e,
                        params: E ? s : void 0,
                        split: a,
                        upgradeLegacy: n,
                        brackets: t,
                        resId: resources.resolve('views').read((e) => e.mono.tooltips.tooltips('resId')),
                    }),
                    [e, t, a, n, s, E],
                ),
            ),
            x = u ?? b;
        if (
            (reactExports.useEffect(() => {
                c || h || x.onMouseLeave();
            }, [h, x, u, c, E]),
            0 === e.length)
        )
            return null;
        return jsxRuntimeExports.jsx('div', {
            ...m,
            onMouseEnter: function (e) {
                (null == o || o(e), h && !c && x.onMouseEnter(e));
            },
            onClick: function (e) {
                (null == l || l(e), c || x.onClick());
            },
            onMouseLeave: function (e) {
                (null == i || i(e), c || x.onMouseLeave());
            },
            ref: assignRefs([_, f]),
            className: cx(styles$m.base, d, null == p ? void 0 : p.base),
            children: jsxRuntimeExports.jsx(FormatText, {
                text: e,
                brackets: t,
                params: s,
                upgradeLegacy: n,
                split: a,
                formatters: r,
                className: null == p ? void 0 : p.text,
                style: { visibility: 'hidden' },
            }),
        });
    }),
    themes$1 = { primary: 'primary', secondary: 'secondary', custom: 'custom' },
    sizes$3 = { extraSmall: 'extraSmall', small: 'small', medium: 'medium', large: 'large' };
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
            o = reactExports.forwardRef(function (e, t) {
                return reactExports.createElement(n, {
                    ...('function' == typeof n ? e : cleanProps(a, e)),
                    ref: t,
                    className: r(e),
                });
            });
        return ((o.displayName = e), s.cva && (o.cva = s.cva), o);
    }
    const o = cva(t, s),
        i = reactExports.forwardRef(function (t, s) {
            return jsxRuntimeExports.jsx('div', { 'data-name': e, ...cleanProps(a, t), ref: s, className: o(t) });
        });
    return ((i.displayName = e), s && (i.cva = s), i);
}
function cleanProps(e, t) {
    if (0 === e.length) return t;
    const s = { ...t };
    for (const r of e) delete s[r];
    return s;
}
const base$i = 'HeadlessButton_df8536fc',
    styles$l = { base: base$i },
    HeadlessButtonBase = defineStyledComponent('Button', { element: 'button', className: styles$l.base }),
    HeadlessButton = reactExports.forwardRef(function (
        { children: e, onClick: t, onMouseEnter: s, soundTarget: r, disabled: n = !1, silent: a = !1, ...o },
        i,
    ) {
        const l = useSounds();
        return jsxRuntimeExports.jsx(HeadlessButtonBase, {
            ...o,
            ref: i,
            onMouseEnter: function (e) {
                (n || a || l.play('mouse-enter', { target: r || 'Button', original: e }), null == s || s(e));
            },
            onClick: function (e) {
                n || (a || l.play('click', { target: r || 'Button', original: e }), null == t || t(e));
            },
            children: e,
        });
    }),
    background$3 = 'Button_background_98ebcfb8',
    border$3 = 'Button_border_7e6390d7',
    overlay$1 = 'Button_overlay_174632c8',
    base$h = 'Button_70871946',
    base__enabled$1 = 'Button_base__enabled_96634d40',
    base__disabled$1 = 'Button_base__disabled_b713e04a',
    content$3 = 'Button_content_298de63f',
    content__fontAligned = 'Button_content__fontAligned_66115778',
    styles$k = {
        background: background$3,
        border: border$3,
        overlay: overlay$1,
        base: base$h,
        base__enabled: base__enabled$1,
        base__disabled: base__disabled$1,
        'base__size-extraSmall': 'Button_base__size-extraSmall_d0cdb5ed',
        'base__size-small': 'Button_base__size-small_fc7095a4',
        'base__size-medium': 'Button_base__size-medium_814d61f0',
        'base__size-large': 'Button_base__size-large_83da852e',
        'base__theme-primary': 'Button_base__theme-primary_8ba55469',
        'base__theme-secondary': 'Button_base__theme-secondary_3fa4afc',
        content: content$3,
        content__fontAligned: content__fontAligned,
    },
    Button = reactExports.forwardRef(function (
        {
            children: e,
            size: t = sizes$3.large,
            theme: s = themes$1.primary,
            disabled: r = !1,
            silent: n = !1,
            autoAlignContent: a = !0,
            classNames: o,
            className: i,
            ...l
        },
        c,
    ) {
        return jsxRuntimeExports.jsxs(HeadlessButton, {
            ...l,
            ref: c,
            silent: n,
            disabled: r,
            className: cx(
                styles$k.base,
                styles$k[`base__size-${t}`],
                styles$k[`base__theme-${s}`],
                r ? styles$k.base__disabled : styles$k.base__enabled,
                i,
                null == o ? void 0 : o.base,
            ),
            onClick: function (e) {
                var t;
                r || null == (t = l.onClick) || t.call(l, e);
            },
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$k.background, null == o ? void 0 : o.background) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$k.border, null == o ? void 0 : o.border) }),
                jsxRuntimeExports.jsx('div', { className: cx(styles$k.overlay, null == o ? void 0 : o.overlay) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$k.content, a && styles$k.content__fontAligned, null == o ? void 0 : o.content),
                    children: e,
                }),
            ],
        });
    });
((Button.themes = themes$1), (Button.sizes = sizes$3));
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
        const o = (e, s) => {
            const [r, n] = t(e);
            return clamp$1(r, n, s);
        };
        return (i = {}) => {
            const { settings: l = defaultSettings } = i,
                [c, u] = reactExports.useState(!1),
                d = reactExports.useRef(null),
                p = reactExports.useRef(null),
                m = reactExports.useRef({ wrapper: 0, container: 0 }),
                _ = useEmitter(),
                f = useThrottle(
                    () => {
                        forceTriggerMouseMove$1();
                    },
                    [],
                    150,
                ),
                [h, g] = useSpring(() => ({
                    scrollPosition: 0,
                    onChange: (e) => {
                        const t = d.current;
                        t && (s(t, e), _.trigger('change', e));
                    },
                    onRest: (e) => _.trigger('rest', e),
                    onStart: (e) => _.trigger('start', e),
                    onPause: (e) => _.trigger('pause', e),
                })),
                E = reactExports.useCallback(
                    (e, t, s) => {
                        const r = h.scrollPosition.get(),
                            n = (h.scrollPosition.goal ?? 0) - r;
                        return o(e, t * s + n + r);
                    },
                    [h.scrollPosition],
                ),
                b = reactExports.useCallback(
                    function (e, { immediate: t = !1, reset: s = !0 } = {}) {
                        const r = d.current;
                        if (!r) return;
                        const n = o(r, e);
                        h.scrollPosition.goal !== n &&
                            g.start({
                                scrollPosition: n,
                                immediate: t,
                                reset: s,
                                config: l.animationConfig,
                                from: { scrollPosition: o(r, h.scrollPosition.get()) },
                                onChange: () => {
                                    a && f();
                                },
                            });
                    },
                    [h.scrollPosition, g, l.animationConfig, f],
                ),
                x = reactExports.useCallback(
                    function (e) {
                        const t = d.current,
                            s = p.current;
                        if (!t || !s) return;
                        const r = ((e, t) => {
                                switch (t.type) {
                                    case 'proportional':
                                        return n(e) / t.factor;
                                    case 'fixed':
                                        return t.value;
                                }
                            })(s, l.step),
                            a = E(t, e, r);
                        b(a);
                    },
                    [b, E, l.step],
                ),
                y = reactExports.useCallback(
                    function (e) {
                        c ||
                            (0 !== e.deltaY && x(r(e)),
                            d.current && _.trigger('mouseWheel', e, h.scrollPosition, t(d.current)));
                    },
                    [h.scrollPosition, x, _, c],
                ),
                v = reactExports.useCallback(
                    function () {
                        const e = d.current;
                        e && (b(o(e, h.scrollPosition.goal), { immediate: !0 }), _.trigger('resizeHandled'));
                    },
                    [b, h.scrollPosition.goal, _],
                );
            useRefResizeObserver(p, (e) => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const s = n(t);
                m.current.wrapper !== s && v();
            });
            const w = useEvent(function () {
                    const t = d.current;
                    if (!t) return;
                    const s = e(t),
                        r = p.current ? n(p.current) : 0;
                    if (m.current.container !== s || m.current.wrapper !== r) {
                        const e = o(t, h.scrollPosition.goal);
                        (e !== h.scrollPosition.goal && b(e, { immediate: !0 }),
                            (m.current.container = s),
                            (m.current.wrapper = r),
                            _.trigger('recalculateContent'));
                    }
                }),
                R = useSkipFrame();
            reactExports.useEffect(() => addEventListener(window, 'resize', () => R.run(v)), [v, R]);
            return reactExports.useMemo(
                () => ({
                    getWrapperSize: () => (p.current ? n(p.current) : void 0),
                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                    getBounds: () =>
                        d.current ? t(d.current) : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                    stepTimeout: l.step.clampedArrowStepTimeout,
                    settings: l,
                    clampPosition: o,
                    handleMouseWheel: y,
                    applyScroll: b,
                    applyStepTo: x,
                    contentRef: d,
                    wrapperRef: p,
                    scrollPosition: g,
                    animationScroll: h,
                    recalculateContent: w,
                    disabled: c,
                    setDisabled: u,
                    events: { on: _.on, off: _.off },
                }),
                [l, y, b, x, g, h, w, c, u, _.on, _.off],
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
function useScrollBounding(e, [t, s] = IGNORE_DEFAULT) {
    const [r, n] = reactExports.useState(!0),
        [a, o] = reactExports.useState(!0);
    return (
        reactExports.useEffect(() => {
            function r() {
                if (!e.contentRef.current) return;
                const r = e.animationScroll.scrollPosition.get(),
                    [a, i] = e.getBounds(),
                    l = r >= i - s;
                (n(r <= a + t), o(l));
            }
            return new DisposeBuilder()
                .add(createLayoutReadyInEffect$1(r))
                .add(e.events.on('resizeHandled', r))
                .add(e.events.on('recalculateContent', r))
                .add(e.events.on('change', r)).dispose;
        }, [e, t, s]),
        [r, a]
    );
}
const scrollOrientations = { horizontal: 'horizontal', vertical: 'vertical' },
    CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT = 100,
    MOUSE_BUTTON_LEFT = 0,
    background$2 = 'Thumb_background_7f3dd6ac',
    border$2 = 'Thumb_border_5749138b',
    innerBorder = 'Thumb_innerBorder_42bafd18',
    icon$2 = 'Thumb_icon_dca8bf26',
    base$g = 'Thumb_6ff3e706',
    base__vertical = 'Thumb_base__vertical_55a67c91',
    base__horizontal = 'Thumb_base__horizontal_27ca7ace',
    base__active$1 = 'Thumb_base__active_830942bb',
    styles$j = {
        background: background$2,
        border: border$2,
        innerBorder: innerBorder,
        icon: icon$2,
        base: base$g,
        base__vertical: base__vertical,
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
            const o = Math.min(1, n / a),
                i = 'horizontal' === e.direction ? 'width' : 'height';
            return ((s.style[i] = `${e.calculateSize(r, o)}px`), (s.style.display = 'flex'), o);
        }),
        [a, o] = useSpring(() => ({
            from: { ...e.styles.closed, '--bouncingCorrection': '0px' },
            easings: easings.easeInCubic,
            config: { duration: 200 },
        }));
    reactExports.useEffect(() => {
        s || e.dragging
            ? o.start({
                  to: e.styles.opened,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.add(styles$j.base__active);
                  },
              })
            : o.start({
                  to: e.styles.closed,
                  delay: 500,
                  onRest() {
                      var e;
                      null == (e = t.current) || e.classList.remove(styles$j.base__active);
                  },
              });
    }, [s, e.dragging, e.styles.closed, e.styles.opened, o]);
    const i = useEvent(function () {
            var s;
            const r = e.trackRef.current,
                n = t.current,
                a = e.railBeforeRef.current,
                i = e.railAfterRef.current,
                l = e.api.getWrapperSize(),
                c = e.api.getContainerSize();
            if (!(l && r && n && a && i && c)) return;
            const u = e.api.animationScroll.scrollPosition.get(),
                d = Math.min(1, l / c),
                p = clamp$1(0, 1, u / (c - l)),
                m = e.calculateSize(r, d),
                _ = (('horizontal' === e.direction ? r.offsetWidth : r.offsetHeight) - m) * p || 0,
                f = Math.round((2 * p - 1) * BOUNCING_OFFSET);
            (n.style.setProperty('--thumbOffset', `${_}px`),
                null == (s = e.onUpdate) || s.call(e, { thumbSize: m, thumbOffset: _, newBouncingCorrection: f }));
            const h = 0 === _ || e.isBoundThumb(_) ? 0 : f;
            return (
                o.start({
                    to: { '--bouncingCorrection': `${h}px` },
                    ...(0 === h ? { delay: 100, config: { duration: 100 } } : { immediate: !0 }),
                }),
                _
            );
        }),
        l = useSkipFrame(),
        c = useEvent(function () {
            n();
            const t = i();
            'number' == typeof t && updateDisabledStates(e, t);
        });
    reactExports.useEffect(() => l.run(c));
    const { api: u } = e;
    return (
        reactExports.useEffect(() => {
            function e() {
                l.run(c);
            }
            return (
                u.events.on('recalculateContent', e),
                u.events.on('rest', c),
                u.events.on('change', c),
                u.events.on('resizeHandled', e),
                () => {
                    (u.events.off('recalculateContent', e),
                        u.events.off('rest', c),
                        u.events.off('change', c),
                        u.events.off('resizeHandled', e));
                }
            );
        }, [u, l, c]),
        jsxRuntimeExports.jsxs(animated.div, {
            ref: assignRefs([t, e.thumbRef]),
            className: cx(styles$j.base, styles$j[`base__${e.direction}`], e.className),
            style: a,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$j.background }),
                jsxRuntimeExports.jsx('div', { className: styles$j.border }),
                jsxRuntimeExports.jsx('div', { className: styles$j.innerBorder }),
                jsxRuntimeExports.jsx('div', { className: styles$j.icon }),
            ],
        })
    );
}
const initBarDraggingState = { pending: !1, offset: 0 };
function useBarDragging(e, t, s, r, n) {
    const [a, o] = reactExports.useState(initBarDraggingState),
        i = useEvent(t),
        l = reactExports.useCallback(
            (t) => {
                (o(t), e.current && i({ type: t.pending ? 'dragStart' : 'dragEnd', dragElement: e.current }));
            },
            [i, e],
        );
    return (
        reactExports.useEffect(() => {
            if (!a.pending) return;
            const t = mouse.move(function ([t]) {
                    const o = s.contentRef.current;
                    if (!o) return;
                    const l = r.current,
                        c = e.current;
                    if (!o || !l || !c) return;
                    const u = n(t, a, { parent: l, thumb: c }),
                        d = u * (s.getContainerSize() ?? 0);
                    (s.scrollPosition.start({
                        scrollPosition: s.clampPosition(o, d),
                        reset: !0,
                        immediate: !0,
                        from: { scrollPosition: s.animationScroll.scrollPosition.get() },
                    }),
                        i({ type: 'dragging', dragElement: c, elementOffset: u, contentOffset: d }));
                }),
                o = mouse.up(() => {
                    l(initBarDraggingState);
                });
            return () => {
                (t(), o());
            };
        }, [s, a.offset, a.pending, i, l, e, r, a, n]),
        l
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
function useBarHandlers(e, t, s, r, n, a, o) {
    const i = useSounds(),
        l = n.stepTimeout || CLAMPED_ARROW_STEP_TIMEOUT_DEFAULT,
        [c, u] = useRepeatCallback((e) => n.applyStepTo(e), l, [n]);
    reactExports.useEffect(
        () => (document.addEventListener('mouseup', u, !0), () => document.removeEventListener('mouseup', u, !0)),
        [u],
    );
    const d = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (i.play('click', { target: 'Scroll:Back', original: e }), c(Direction.Next));
            },
            [c, i],
        ),
        p = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    (i.play('click', { target: 'Scroll:Forward', original: e }), c(Direction.Prev));
            },
            [c, i],
        ),
        m = reactExports.useCallback(
            (l) => {
                const c = e.current,
                    u = t.current,
                    m = s.current,
                    _ = r.current;
                if (!(c && u && m && _ && l.button === MOUSE_BUTTON_LEFT)) return;
                const f = getCoordinate(l, c, u, m, _, o),
                    h = f.thumb.start <= f.occurredEvent && f.occurredEvent <= f.thumb.end,
                    g =
                        (f.backButton.start <= f.occurredEvent && f.occurredEvent <= f.backButton.end) ||
                        (f.forwardButton.start <= f.occurredEvent && f.occurredEvent <= f.forwardButton.end);
                if (h) a({ pending: !0, offset: f.occurredEvent - f.thumb.start });
                else if (g) {
                    ((f.occurredEvent > f.thumb.start ? Direction.Prev : Direction.Next) === Direction.Next ? d : p)(l);
                } else {
                    const e = f.occurredEvent - f.bar.start,
                        t = f.thumb.end - f.thumb.start,
                        s = f.bar.end - f.bar.start,
                        r = n.getContainerSize();
                    if ('number' != typeof r || Number.isNaN(r)) return console.error('Incorrect container size');
                    const a = ((e - t / 2) / s) * r;
                    n.applyScroll(a);
                }
                i.play('click', { target: 'Scroll:' + (h ? 'thumb' : g ? 'button' : ''), original: l });
            },
            [e, t, s, r, i, o, a, d, p, n],
        ),
        _ = reactExports.useCallback(
            (e) => {
                e.target.classList.contains(DISABLE_CLASS) ||
                    i.play('mouse-enter', { target: 'Scroll:Bar', original: e });
            },
            [i],
        );
    return reactExports.useMemo(
        () => ({
            handleMouseBackDown: d,
            handleMouseEnter: _,
            handleMouseDownTrack: m,
            handleMouseForwardDown: p,
            handleMouseForwardUp: u,
            handleMouseBackUp: u,
        }),
        [d, _, m, p, u],
    );
}
const rail$1 = 'HorizontalBar_rail_37858d8f',
    base$f = 'HorizontalBar_4df27ac3',
    track$1 = 'HorizontalBar_track_649dc296',
    rail__left = 'HorizontalBar_rail__left_1a906b4e',
    rail__right = 'HorizontalBar_rail__right_cd24364e',
    button__right = 'HorizontalBar_button__right_e8f0aa2d',
    button__left = 'HorizontalBar_button__left_da330e13',
    button$1 = 'HorizontalBar_button_cbabd91',
    styles$i = {
        rail: rail$1,
        base: base$f,
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
        const s = reactExports.useRef(null),
            r = reactExports.useRef(null),
            n = reactExports.useRef(null),
            a = reactExports.useRef(null),
            o = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = reactExports.useRef(null),
            [c, u] = reactExports.useState(!1),
            { api: d } = useHorizontalScroll();
        useUpdateStatesBar({ baseRef: s, api: d });
        const p = useEvent(
                (e, t, { parent: s }) => (e.screenX - t.offset - s.getBoundingClientRect().x) / s.offsetWidth,
            ),
            m = useEvent((e) => e - (a.current.offsetWidth - o.current.offsetWidth) >= -0.5),
            _ = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? u(!0) : 'dragEnd' === e.type && u(!1), t(e)),
                [t],
            ),
            f = useBarDragging(o, _, d, a, p),
            h = useEvent(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: s }) => {
                const r = a.current,
                    n = i.current,
                    o = l.current;
                if (!r || !n || !o) return;
                const c = remToPx$1(THUMB_TO_RAIL_OFFSET$1);
                ((n.style.width = `${t - c + s}px`), (o.style.width = r.offsetWidth - e - t - c - s + 'px'));
            }),
            { handleMouseEnter: g, handleMouseDownTrack: E } = useBarHandlers(
                s,
                o,
                n,
                r,
                d,
                f,
                scrollOrientations.horizontal,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$i.base, e.base),
            ref: s,
            onWheel: d.handleMouseWheel,
            onMouseDown: E,
            onMouseEnter: g,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: r,
                    className: cx(styles$i.button, styles$i.button__left, e.leftButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: a,
                    className: cx(styles$i.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$i.rail, styles$i.rail__left, e.leftRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: c,
                            api: d,
                            calculateOffset: p,
                            calculateSize: calculateThumbSize$1,
                            direction: 'horizontal',
                            isBoundThumb: m,
                            railAfterRef: i,
                            railBeforeRef: l,
                            styles: THUMB_STYLES$1,
                            onUpdate: h,
                            thumbRef: o,
                            trackRef: a,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: l,
                            className: cx(styles$i.rail, styles$i.rail__right, e.rightRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$i.button, styles$i.button__right, e.rightButton),
                }),
            ],
        });
    }),
    base$e = 'HorizontalScroll_5b201d2b',
    wrapper$1 = 'HorizontalScroll_wrapper_abec8dee',
    defaultScrollArea = 'HorizontalScroll_defaultScrollArea_a5c0f45',
    styles$h = { base: base$e, wrapper: wrapper$1, defaultScrollArea: defaultScrollArea },
    DefaultScroll$1 = ({
        children: e,
        className: t,
        barClassNames: s,
        areaClassName: r,
        classNames: n,
        scrollClassName: a,
        onDrag: o,
    }) => {
        const { api: i } = useHorizontalScroll(),
            l = reactExports.useMemo(() => {
                const e = s || {};
                return { ...e, base: cx(styles$h.base, e.base) };
            }, [s]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$h.defaultScroll, t),
            onWheel: i.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$h.defaultScrollArea, r),
                    children: jsxRuntimeExports.jsx(Area$1, { className: a, classNames: n, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar$1, { onDrag: o, classNames: l }),
            ],
        });
    };
function Area$1({ className: e, classNames: t, children: s }) {
    const { api: r } = useHorizontalScroll();
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$h.base, e),
        children: jsxRuntimeExports.jsx('div', {
            className: cx(styles$h.wrapper, null == t ? void 0 : t.wrapper),
            onWheel: r.handleMouseWheel,
            ref: r.wrapperRef,
            children: jsxRuntimeExports.jsx('div', {
                className: cx(styles$h.content, null == t ? void 0 : t.content),
                ref: r.contentRef,
                children: s,
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
function useScrollByDragElements(e, t, s, r) {
    const {
            contentRef: n,
            wrapperRef: a,
            scrollPosition: o,
            clampPosition: i,
            animationScroll: l,
            events: c,
            disabled: u,
        } = e,
        [d, p] = reactExports.useState(INITIAL_DRAGGING_STATE),
        [m, _] = reactExports.useState(0),
        { gapBeforeStart: f } = r ?? {},
        h = useSkipFrame(),
        g = useEvent(() => {
            h.run(() => {
                const t = e.contentRef.current,
                    s = e.getWrapperSize(),
                    r = e.getContainerSize();
                t && s && r && !u && (t.style.cursor = r <= s ? 'auto' : 'dragging' === d.type ? 'move' : 'grab');
            });
        });
    return (
        reactExports.useEffect(() => {
            g();
        }, [d.type, g]),
        useResize(() => {
            g();
        }, [g]),
        reactExports.useEffect(() => {
            if ('pending' !== d.type) return;
            const e = n.current,
                s = a.current;
            if (null === e || null === s) return;
            const r = mouse.move(([e]) => {
                    const s = getScreenCoordinate(e, t);
                    (void 0 === f || Math.abs(m - s) > f) &&
                        p({ type: 'dragging', positionFrom: s, previousScrollPosition: l.scrollPosition.get() });
                }),
                o = mouse.up(() => p({ type: 'scrollComplete' }));
            return () => {
                (r(), o());
            };
        }, [l.scrollPosition, n, m, t, d, f, a]),
        reactExports.useEffect(() => {
            if ('dragging' !== d.type) return;
            const e = mouse.move(([e, r]) => {
                const c = n.current,
                    u = a.current;
                if ('outside' === r) return void p({ type: 'scrollComplete' });
                const m = getEventCoordinate(e, t);
                if (null === c || null === u || ('inside' === r && m < 0)) return;
                const _ = u.offsetLeft,
                    f = 'inside' === r ? m : m - _,
                    h = d.positionFrom - f,
                    g = d.previousScrollPosition + h;
                o.start({ scrollPosition: i(c, g), from: { scrollPosition: l.scrollPosition.get() }, ...s });
            });
            const r = mouse.up(function () {
                p({ type: 'scrollComplete' });
            });
            return () => {
                (e(), r());
            };
        }, [l.scrollPosition, i, n, d, o, a, s, t]),
        reactExports.useEffect(() => {
            if ('scrollComplete' !== d.type) return;
            const e = () => {
                p(INITIAL_DRAGGING_STATE);
            };
            return (e(), c.on('rest', e), () => c.off('rest', e));
        }, [l.scrollPosition, d.type, c]),
        reactExports.useEffect(() => {
            if (u) return;
            const e = n.current;
            if (!e) return;
            const s = (e) => {
                if (e.button !== mouseButtons.left) return;
                const s = getScreenCoordinate(e, t);
                (_(s),
                    p(
                        void 0 === f || f <= 0
                            ? { type: 'dragging', positionFrom: s, previousScrollPosition: l.scrollPosition.get() }
                            : { type: 'pending' },
                    ));
            };
            return (e.addEventListener('mousedown', s), () => e.removeEventListener('mousedown', s));
        }, [l.scrollPosition, n, u, t, f]),
        d
    );
}
function Base$8({ settings: e, children: t }) {
    const s = useApi$1({ settings: e }),
        r = reactExports.useMemo(() => ({ api: s }), [s]);
    return jsxRuntimeExports.jsx(Context$2.Provider, { value: r, children: t });
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
    base$d = 'VerticalBar_7187fa00',
    track = 'VerticalBar_track_ff482708',
    rail__top = 'VerticalBar_rail__top_ee531f43',
    rail__bottom = 'VerticalBar_rail__bottom_3eaa33b1',
    button__bottom = 'VerticalBar_button__bottom_6880f123',
    button__top = 'VerticalBar_button__top_b8383775',
    button = 'VerticalBar_button_7b0e4aca',
    styles$g = {
        rail: rail,
        base: base$d,
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
        const s = reactExports.useRef(null),
            r = reactExports.useRef(null),
            n = reactExports.useRef(null),
            a = reactExports.useRef(null),
            o = reactExports.useRef(null),
            i = reactExports.useRef(null),
            l = reactExports.useRef(null),
            [c, u] = reactExports.useState(!1),
            { api: d } = useVerticalScroll();
        useUpdateStatesBar({ baseRef: s, api: d });
        const p = useEvent((e) => e - (a.current.offsetHeight - o.current.offsetHeight) >= -0.5),
            m = useEvent(
                (e, t, { parent: s }) => (e.screenY - t.offset - s.getBoundingClientRect().y) / s.offsetHeight,
            ),
            _ = reactExports.useCallback(
                (e) => ('dragStart' === e.type ? u(!0) : 'dragEnd' === e.type && u(!1), t(e)),
                [t],
            ),
            f = useBarDragging(o, _, d, a, m),
            h = useEvent(({ thumbSize: e, thumbOffset: t, newBouncingCorrection: s }) => {
                const r = a.current,
                    n = i.current,
                    o = l.current;
                if (!r || !n || !o) return;
                const c = remToPx$1(THUMB_TO_RAIL_OFFSET);
                ((n.style.height = `${t - c + s}px`), (o.style.height = r.offsetHeight - e - t - c - s + 'px'));
            }),
            { handleMouseEnter: g, handleMouseDownTrack: E } = useBarHandlers(
                s,
                o,
                r,
                n,
                d,
                f,
                scrollOrientations.vertical,
            );
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$g.base, e.base),
            ref: s,
            onWheel: d.handleMouseWheel,
            onMouseDown: E,
            onMouseEnter: g,
            children: [
                jsxRuntimeExports.jsx('div', {
                    ref: r,
                    className: cx(styles$g.button, styles$g.button__top, e.topButton),
                }),
                jsxRuntimeExports.jsxs('div', {
                    ref: a,
                    className: cx(styles$g.track, e.track),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            ref: i,
                            className: cx(styles$g.rail, styles$g.rail__top, e.topRail),
                        }),
                        jsxRuntimeExports.jsx(Thumb, {
                            dragging: c,
                            api: d,
                            calculateOffset: m,
                            calculateSize: calculateThumbSize,
                            direction: 'vertical',
                            isBoundThumb: p,
                            railAfterRef: i,
                            railBeforeRef: l,
                            styles: THUMB_STYLES,
                            onUpdate: h,
                            thumbRef: o,
                            trackRef: a,
                        }),
                        jsxRuntimeExports.jsx('div', {
                            ref: l,
                            className: cx(styles$g.rail, styles$g.rail__bottom, e.bottomRail),
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', {
                    ref: n,
                    className: cx(styles$g.button, styles$g.button__bottom, e.bottomButton),
                }),
            ],
        });
    }),
    content$2 = 'VerticalScroll_content_62cb6120',
    defaultScroll = 'VerticalScroll_defaultScroll_c69fa70e',
    area = 'VerticalScroll_area_a3c0086a',
    styles$f = { content: content$2, defaultScroll: defaultScroll, area: area },
    DefaultScroll = ({
        children: e,
        className: t,
        barClassNames: s,
        areaClassName: r,
        scrollClassName: n,
        scrollClassNames: a,
        onDrag: o,
    }) => {
        const { api: i } = useVerticalScroll(),
            l = reactExports.useMemo(() => {
                const e = s || {};
                return { ...e, base: cx(styles$f.base, e.base) };
            }, [s]);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$f.defaultScroll, t),
            onWheel: i.handleMouseWheel,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$f.area, r),
                    children: jsxRuntimeExports.jsx(Area, { className: n, classNames: a, children: e }),
                }),
                jsxRuntimeExports.jsx(Bar, { onDrag: o, classNames: l }),
            ],
        });
    },
    Area = ({ className: e, classNames: t, children: s, ...r }) => {
        const { api: n } = useVerticalScroll();
        return (
            reactExports.useEffect(() =>
                createLayoutReadyInEffect$1(() => createLayoutReadyInEffect$1(n.recalculateContent)),
            ),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$f.base, null == t ? void 0 : t.wrapper, e),
                ref: n.wrapperRef,
                onWheel: n.handleMouseWheel,
                children: jsxRuntimeExports.jsx('div', {
                    ...r,
                    className: cx(styles$f.content, null == t ? void 0 : t.content),
                    ref: n.contentRef,
                    children: s,
                }),
            })
        );
    };
function Base$7({ children: e }) {
    const t = useApi(),
        s = reactExports.useMemo(() => ({ api: t }), [t]);
    return jsxRuntimeExports.jsx(Context$1.Provider, { value: s, children: e });
}
Area.Default = DefaultScroll;
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
            keyframesNameConfig: o,
            onClick: i,
            ...l
        },
        c,
    ) {
        const u = c,
            d = reactExports.useRef(null);
        return (
            useMount$1(() => {
                let e = !1;
                return events$1.onDisplayChanged((t, s) => {
                    const r = d.current;
                    r &&
                        (s === displayStatus$1.hidden
                            ? ((e = r.paused), r.pause())
                            : e || s !== displayStatus$1.shown || r.play());
                });
            }),
            useMount$1(() => {
                let e = !1;
                return onMinimize((t) => {
                    const s = d.current;
                    s && (t ? ((e = s.paused), s.pause()) : e || s.play());
                });
            }),
            reactExports.useEffect(
                () =>
                    createLayoutReadyInEffect$1(() => {
                        const e = d.current;
                        if (!u || !e || !a) return void ((null == e ? void 0 : e.cohFastSeek) && (e.cohFastSeek = !1));
                        const t = e.cohGetKeyframeTimestamps ? e.cohGetKeyframeTimestamps() : [];
                        t.length > 0
                            ? ((e.cohFastSeek = !0),
                              t.map((t) => {
                                  (null == e ? void 0 : e.cohPrebufferKeyframe) && e.cohPrebufferKeyframe(t);
                              }))
                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                    }),
                [a, u],
            ),
            reactExports.useEffect(() => {
                if (u && d.current) {
                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: noop$1 },
                        t = () => {
                            let t = 0;
                            const [s, r] = createLoop(() => {
                                if (d.current) {
                                    const { currentTime: s, duration: r } = d.current;
                                    if (
                                        (t !== s &&
                                            (e.changeTimeHandlers.forEach((e) => e({ currentTime: s, duration: r })),
                                            (t = s)),
                                        d.current.paused || !u || !a)
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
                                                const s = Object.keys(o ?? {})[r];
                                                return e({
                                                    time: t,
                                                    name: `${o ? s : `${DEFAULT_NAME_KEYFRAME}_${r}`}`,
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
                        l = (e) => {
                            d.current && (d.current.currentTime = clamp$1(0, d.current.duration, e));
                        },
                        c = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.play();
                        },
                        p = () => {
                            var e;
                            return null == (e = d.current) ? void 0 : e.pause();
                        },
                        m = () => {
                            (p(), l(0));
                        },
                        _ = () => {
                            var e;
                            return (null == (e = d.current) ? void 0 : e.cohGetKeyframeTimestamps)
                                ? d.current.cohGetKeyframeTimestamps()
                                : [];
                        },
                        f = (e) => {
                            (l(e), c());
                        },
                        h = (e) => {
                            (l(e), p());
                        },
                        g = () => {
                            var t;
                            ((e.changeTimeHandlers = []),
                                (e.changeKeyframeHandlers = []),
                                null == (t = e.changeTimeLoop) || t.call(e));
                        },
                        E = (e, t) => {
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
                        (u.current = {
                            on: E,
                            off: b,
                            play: c,
                            pause: p,
                            stop: m,
                            cleanup: g,
                            getCurrentTime: n,
                            getDuration: i,
                            getCachedKeyframes: _,
                            goToAndPlay: f,
                            goToAndStop: h,
                            setCurrentTime: l,
                            domRef: d.current,
                            onChangeTime: s,
                            onKeyframes: r,
                        }),
                        () => {
                            (g(), (u.current = null));
                        }
                    );
                }
            }, [o, u, a]),
            reactExports.useEffect(() => {
                d.current && s && d.current.play();
            }, [s, n]),
            useUnmount(() => {
                var e;
                null == (e = d.current) || e.pause();
            }),
            jsxRuntimeExports.jsx('video', { src: e, className: t, style: r, loop: n, ref: d, onClick: i, ...l })
        );
    }),
    Video = reactExports.memo(VideoForwarded);
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
    handleViewEvent = (e, t) => {
        const s = 'GFViewEventProxy';
        if (void 0 !== t) {
            const { args: r, ...n } = t;
            void 0 !== r
                ? viewEnv.handleViewEvent({ __Type: s, type: e, ...n, arguments: createViewEventArguments(r) })
                : viewEnv.handleViewEvent({ __Type: s, type: e, ...n });
        } else viewEnv.handleViewEvent({ __Type: s, type: e });
    },
    sendMoveEvent = (e) => handleViewEvent(ViewEventType.MOVE, { isMouseEvent: !0, on: e }),
    sendCloseEvent = () => handleViewEvent(ViewEventType.CLOSE),
    sendClosePopOverEvent = () => handleViewEvent(ViewEventType.POP_OVER, { on: !1 }),
    sendShowContextMenuEvent = (e, t, s = 0) => {
        handleViewEvent(ViewEventType.CONTEXT_MENU, {
            isMouseEvent: !0,
            contentID: e,
            on: !0,
            decoratorID: s,
            args: t,
        });
    },
    sendShowPopOverEvent = (e, t, s, r, n = R.invalid('resId'), a) => {
        const o = env.view.getViewGlobalPosition(),
            { x: i, y: l, width: c, height: u } = s.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(i) + o.x,
                y: env.view.pxToRem(l) + o.y,
                width: env.view.pxToRem(c),
                height: env.view.pxToRem(u),
            };
        handleViewEvent(ViewEventType.POP_OVER, {
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
        handleViewEvent: handleViewEvent,
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
    ))(ValueTypes || {});
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
                  : ValueTypes.STRING;
(ImageSize.Small, ImageSize.Big);
const undef = () => {};
function withResolvePath(e) {
    const t = e;
    return reactExports.forwardRef(function (e, s) {
        const r = useAdaptive(e, e.adaptive),
            { path: n, ...a } = r,
            o = r.images ?? resources.resolve('images'),
            i = { ...a, ref: s };
        {
            const e = n ? o.readOr(n, undef, 'warn') : void 0;
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
    Image = withResolvePath(
        reactExports.forwardRef(function (e, t) {
            if (e.unknown) {
                const {
                    repeat: s,
                    fit: r,
                    position: n,
                    width: a,
                    src: o,
                    height: i,
                    unselectable: l,
                    unknown: c,
                    unknownStyle: u = defaultUnknownStyle,
                    ...d
                } = e;
                return jsxRuntimeExports.jsx('div', {
                    ...d,
                    ref: t,
                    style: { width: e.width, height: e.height, ...u, ...e.style },
                });
            }
            const {
                repeat: s,
                fit: r,
                position: n,
                width: a,
                height: o,
                unknownStyle: i,
                unknown: l,
                unselectable: c,
                ...u
            } = e;
            return jsxRuntimeExports.jsx('div', {
                ...u,
                ref: t,
                style: {
                    backgroundImage: `url(${e.src})`,
                    backgroundRepeat: s ?? 'no-repeat',
                    backgroundSize: r ?? 'contain',
                    backgroundPosition: n ?? 'center center',
                    width: 'number' == typeof a ? `${a}rem` : a,
                    height: 'number' == typeof o ? `${o}rem` : o,
                    ...u.style,
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
            unknown: o,
            unknownStyle: i = defaultUnknownStyle,
            ...l
        } = e;
        return e.unknown
            ? jsxRuntimeExports.jsx('div', { ...l, style: { width: e.width, height: e.height, ...i } })
            : jsxRuntimeExports.jsx('img', { ...l, ref: t, src: n, width: s, height: r });
    }),
);
const sizes$2 = { small: 'small', medium: 'medium' },
    types$1 = { bubble: 'bubble', discount: 'discount' },
    imageSizes$2 = { [sizes$2.small]: 48, [sizes$2.medium]: 60 };
function getImagePath$1(e, t, s) {
    return e === types$1.bubble || e === types$1.discount ? `library.notification.${e}_${t}x${t}` : s;
}
function Icon$1({ className: e, size: t = sizes$2.small, type: s, imagePath: r }) {
    const n = imageSizes$2[t];
    return jsxRuntimeExports.jsx(Image, { width: n, height: n, path: getImagePath$1(s, n, r), className: e });
}
const base$c = 'Value_880359b5',
    base__small$2 = 'Value_base__small_533886b2',
    base__text = 'Value_base__text_3c091067',
    base__medium$2 = 'Value_base__medium_c1f8595d',
    value = 'Value_29975a5b',
    value__small = 'Value_value__small_f3df7ae5',
    value__medium = 'Value_value__medium_62a482c',
    styles$e = {
        base: base$c,
        base__small: base__small$2,
        base__text: base__text,
        base__medium: base__medium$2,
        value: value,
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
function Value({ classNames: e, size: t = sizes$2.small, value: s, maxValue: r = DEFAULT_MAX_VALUE }) {
    return jsxRuntimeExports.jsx('div', {
        className: cx(
            styles$e.base,
            styles$e[`base__${t}`],
            'string' == typeof s && styles$e.base__text,
            null == e ? void 0 : e.valueContainer,
        ),
        children: jsxRuntimeExports.jsx('div', {
            className: cx(styles$e.value, styles$e[`value__${t}`], null == e ? void 0 : e.value),
            children: getValue(s, r),
        }),
    });
}
const base$b = 'Bubble_df22310d',
    base__hidden = 'Bubble_base__hidden_1700314d',
    styles$d = { base: base$b, base__hidden: base__hidden },
    Bubble = {
        Root: defineStyledComponent('Bubble', styles$d.base, { variants: { hidden: { true: styles$d.base__hidden } } }),
        Value: Value,
        Icon: Icon$1,
    },
    contextInstance$1 = reactExports.createContext(null),
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
            function a(e) {
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
                open: () => a((e) => ({ ...e, opened: !0 })),
                close: () => a((e) => ({ ...e, opened: !1 })),
                toggle: () => a((e) => ({ ...e, opened: !e.opened })),
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
const border$1 = 'Popover_border_d0a76717',
    title = 'Popover_title_e4a0437a',
    subtitle = 'Popover_subtitle_1c7535c8',
    header = 'Popover_header_de23fc15',
    body = 'Popover_body_22163d58',
    divider = 'Popover_divider_46fe6f15',
    decoration = 'Popover_decoration_134219d5',
    close = 'Popover_close_ad4a9c7b',
    styles$c = {
        border: border$1,
        title: title,
        subtitle: subtitle,
        header: header,
        body: body,
        divider: divider,
        decoration: decoration,
        close: close,
    },
    Close = reactExports.forwardRef(({ className: e, children: t, ...s }, r) => {
        const n = usePopoverOptional(),
            a = useSounds(),
            o = useUpscale('ui_kit.close_button.icon_small', 'ui_kit.close_button.icon_medium');
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
                        a.play('close', { target: 'react-popover:close', original: e }),
                        null == n || n.close());
                },
                onMouseEnter: function (e) {
                    var t;
                    (null == (t = s.onMouseEnter) || t.call(s, e),
                        a.play('mouse-enter', { target: 'react-popover:close', original: e }));
                },
                ref: r,
                className: cx(styles$c.close, e),
                children: t ?? jsxRuntimeExports.jsx(Image, { path: o, width: 24, height: 24 }),
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
    closeByEscape: a = !0,
    ...o
}) {
    const i = usePopover(),
        l = React.useRef(null),
        c = reactExports.useMemo(() => (t ? (document.querySelector(t) ?? document.body) : document.body), [t]);
    reactExports.useEffect(() => {
        const e = l.current;
        if (!e) return;
        const t = document.querySelector(`[data-popover-trigger-id="${i.id}"]`),
            n = e.querySelector(`[data-popover-display-id="${i.id}"]`);
        if (!t || !n) return;
        const a = watchResizes([t, e, document.body], ([t, n, a]) => {
            if (!i.opened) return;
            const o = getUpdatedPosition(r, t, n, a);
            (updatePosition(s, o, t, n, a, e),
                runInAction(() => {
                    (i.trigger.setBounding(t), i.portal.setBounding(n), i.portal.setPosition(o));
                }));
        });
        return (a.start(), a.stop);
    }, [s, i.id, i.portal, i.trigger, r, i.opened]);
    const u = reactExports.useCallback(() => {
        const e = l.current;
        e &&
            document.activeElement &&
            document.activeElement instanceof HTMLElement &&
            e.contains(document.activeElement) &&
            document.activeElement.blur();
    }, []);
    (reactExports.useEffect(() => i.subscribe.onBeforeClose(u), [i.subscribe, u]),
        useHandleKeydown(a && i.opened ? keyCodes.ESCAPE : keyCodes.NONE, () => {
            i.close();
        }),
        reactExports.useEffect(() => {
            if (!i.opened) return;
            const e = l.current;
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
                      ...o,
                      ref: l,
                      style: {
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          pointerEvents: d.opacity.to((e) => (1 === e ? 'auto' : 'none')),
                          display: d.opacity.to((e) => (0 === e ? 'none' : 'block')),
                          ...o.style,
                      },
                      children: jsxRuntimeExports.jsx(animated.div, { style: d, children: e }),
                  }),
                  c,
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
    ((e = clamp$1(0, r.width - s.offsetWidth, e)),
        (t = clamp$1(0, r.height - s.offsetHeight, t)),
        (s.style.transform = `translate(${e}px, ${t}px)`));
}
function updatePosition(e, t, s, r, n, a) {
    const o = remToPx$1(FREE_SPACE);
    if ('top' === t) {
        const t = (r.width - s.width) * e;
        applyTransform(s.left - t, s.top - r.height - o, a, n);
    } else if ('bottom' === t) {
        const t = (r.width - s.width) * e;
        applyTransform(s.left - t, s.bottom + o, a, n);
    } else if ('left' === t) {
        const t = s.left - r.width - o,
            i = (r.height - s.height) * e;
        applyTransform(t, s.top - i, a, n);
    } else if ('right' === t) {
        const t = s.right + o,
            i = (r.height - s.height) * e;
        applyTransform(t, s.top - i, a, n);
    }
}
const base$a = 'PopoverTip_163a336f',
    arrow = 'PopoverTip_arrow_44c7d6a5',
    glow = 'PopoverTip_glow_da3f9be9',
    styles$b = {
        base: base$a,
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
    },
    verticals = [positions.top, positions.bottom],
    horizontals = [positions.left, positions.right],
    rotations = { top: 180, bottom: 0, left: 90, right: -90 },
    Tip = reactExports.forwardRef(({ size: e, ...t }, s) => {
        const r = reactExports.useRef(null),
            n = usePopoverOptional(),
            [a, o] = reactExports.useState(t.position),
            [i, l] = reactExports.useState(t.offset);
        return (
            reactExports.useEffect(() => {
                const e = r.current;
                if (e && n)
                    return autorun(() => {
                        const t = n.trigger.bounding.get(),
                            s = n.portal.bounding.get(),
                            r = n.portal.position.get();
                        if (!t || !r || !s) return;
                        const a = oppositePositions[r];
                        (o(a),
                            isVerticalPosition(a)
                                ? (l(`${Math.max(0, t.left - s.left)}px`),
                                  (e.style.width = `${Math.min(t.width, s.width)}px`))
                                : (l(`${Math.max(0, t.top - s.top)}px`),
                                  (e.style.height = `${Math.min(t.height, s.height)}px`)));
                    });
            }, [n]),
            jsxRuntimeExports.jsxs('div', {
                ...t,
                ref: assignRefs([s, r]),
                style: {
                    width: verticals.includes(a) ? e : '1rem',
                    height: horizontals.includes(a) ? e : '1rem',
                    top: horizontals.includes(a) ? i : 'auto',
                    bottom: 'bottom' === a ? '0' : 'auto',
                    left: verticals.includes(a) ? i : 'auto',
                    right: 'right' === a ? '0' : 'auto',
                    ...t.style,
                },
                className: cx(styles$b.base, t.flipped && styles$b[`base__flipped-${a}`], t.className),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$b.arrow, styles$b[`arrow__position-${a}`]),
                        style: { transform: `translate(-50%, -50%) rotate(${rotations[a]}deg)` },
                    }),
                    !1 === t.noGlow &&
                        jsxRuntimeExports.jsx('div', {
                            className: styles$b.glow,
                            style: { transform: `translate(-50%, -50%) rotate(${rotations[a]}deg)` },
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
const Title = defineStyledComponent('Title', styles$c.title),
    Subtitle = defineStyledComponent('Subtitle', styles$c.subtitle),
    Header = defineStyledComponent('Header', styles$c.header),
    Divider = defineStyledComponent('Divider', styles$c.divider),
    Body = defineStyledComponent('Body', styles$c.body),
    Decoration = defineStyledComponent('Decoration', styles$c.decoration),
    Display = reactExports.forwardRef((e, t) => {
        const s = usePopoverOptional();
        return jsxRuntimeExports.jsxs(Decoration, {
            ...e,
            ref: t,
            'data-popover-display-id': null == s ? void 0 : s.id,
            children: [jsxRuntimeExports.jsx('div', { className: styles$c.border }), e.children],
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
const base$9 = 'TruncateText_dcb41d92',
    styles$a = { base: base$9 },
    TruncatedText = reactExports.forwardRef(function ({ text: e, tooltipParams: t, className: s, ...r }, n) {
        const a = useSimpleTooltip({ header: null == t ? void 0 : t.header, body: (null == t ? void 0 : t.body) || e }),
            o = reactExports.useRef(null),
            [i, l] = reactExports.useState(!1);
        const c = reactExports.useCallback(() => {
            if (o.current) {
                const { scrollWidth: e, offsetWidth: t } = o.current;
                l(e > t);
            }
        }, []);
        return (
            reactExports.useEffect(() => {
                i || a.onMouseLeave();
            }, [i, a]),
            useLayoutReady(c, [c]),
            useResizeLayoutReady(c, [c]),
            useRefResizeObserver(o, c),
            jsxRuntimeExports.jsx('div', {
                ...r,
                ref: function (e) {
                    ((o.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                },
                className: cx(styles$a.base, s),
                ...(i ? a : {}),
                children: e,
            })
        );
    }),
    themes = { primary: 'primary', custom: 'custom' },
    sizes$1 = { small: 'small', medium: 'medium' },
    imageSizes$1 = { [sizes$1.small]: 16, [sizes$1.medium]: 20 },
    contextInstance = reactExports.createContext(null);
function useRadioButton() {
    const e = reactExports.useContext(contextInstance);
    if (!e) throw new Error('useRadioButton must be used within a RadioButton Provider');
    return e;
}
function useRadioButtonOptional() {
    return reactExports.useContext(contextInstance);
}
function useRadioButtonInstance({ value: e, onChange: t }) {
    return { value: e, onChange: t };
}
const background$1 = 'RadioButton_background_d016b9f3',
    border = 'RadioButton_border_6658f86a',
    base$8 = 'RadioButton_3fb28b85',
    base__enabled = 'RadioButton_base__enabled_7a0e90e6',
    label = 'RadioButton_label_33fbbd64',
    label__primary = 'RadioButton_label__primary_d55ea2ac',
    base__small$1 = 'RadioButton_base__small_24291fc7',
    base__medium$1 = 'RadioButton_base__medium_24291fc7',
    base__selected$2 = 'RadioButton_base__selected_24291fc7',
    icon$1 = 'RadioButton_icon_7e3b6696',
    input = 'RadioButton_input_52c34160',
    overlay = 'RadioButton_overlay_9ffdf66b',
    styles$9 = {
        background: background$1,
        border: border,
        base: base$8,
        base__enabled: base__enabled,
        label: label,
        label__primary: label__primary,
        base__small: base__small$1,
        base__medium: base__medium$1,
        base__selected: base__selected$2,
        icon: icon$1,
        input: input,
        overlay: overlay,
    };
function getImagePath(e, t, s) {
    return s && s === themes.primary ? `ui_kit.radio_button.point_${e}x${e}` : t;
}
function Icon({ size: e = sizes$1.medium, theme: t, className: s, iconPath: r, withoutScale: n }) {
    const a = 'number' == typeof e ? e : imageSizes$1[e],
        o = useUpscale(r, n ? r : `${r}_scale2`);
    return jsxRuntimeExports.jsx(Image, {
        width: a,
        height: a,
        path: getImagePath(a, o, t),
        className: cx(styles$9.icon, s),
    });
}
function Input({ theme: e = themes.primary, className: t, children: s }) {
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$9.input, t),
        children: [
            e === themes.primary &&
                jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                    children: [
                        jsxRuntimeExports.jsx('div', { className: styles$9.background }),
                        jsxRuntimeExports.jsx('div', { className: styles$9.border }),
                        jsxRuntimeExports.jsx('div', { className: styles$9.overlay }),
                    ],
                }),
            s,
        ],
    });
}
function Label({ theme: e, className: t, children: s }) {
    return jsxRuntimeExports.jsx('div', { className: cx(styles$9.label, styles$9[`label__${e}`], t), children: s });
}
const Base$6 = defineStyledComponent('Base', styles$9.base, {
    variants: {
        size: { [sizes$1.small]: styles$9.base__small, [sizes$1.medium]: styles$9.base__medium },
        selected: { true: styles$9.base__selected },
        enabled: { true: styles$9.base__enabled },
    },
});
function Root({
    selected: e,
    onClick: t,
    value: s,
    size: r = sizes$1.medium,
    disabled: n = !1,
    children: a,
    handleChange: o,
    ...i
}) {
    const l = useSounds(),
        c = useRadioButtonOptional(),
        u = e || s === (null == c ? void 0 : c.value);
    return jsxRuntimeExports.jsx(Base$6, {
        ...i,
        size: 'number' != typeof r ? r : void 0,
        selected: u,
        enabled: !n,
        onMouseEnter: function (e) {
            l.play('mouse-enter', { target: Base$6.displayName, original: e });
        },
        onClick: function (e) {
            (l.play('click', { target: Base$6.displayName, original: e }),
                null == t || t(e),
                o ? null == o || o(s) : null == c || c.onChange(s));
        },
        children: a,
    });
}
function RadioButton({
    children: e,
    value: t,
    theme: s = themes.primary,
    size: r = sizes$1.medium,
    iconPath: n = 'ui_kit.radio_button.pointer_20x20',
    withoutScale: a = !1,
    ...o
}) {
    const i = useRadioButtonOptional(),
        l = t === (null == i ? void 0 : i.value);
    return jsxRuntimeExports.jsxs(Root, {
        ...o,
        size: r,
        value: t,
        handleChange: null == i ? void 0 : i.onChange,
        selected: l,
        children: [
            jsxRuntimeExports.jsx(Input, {
                theme: s,
                children: jsxRuntimeExports.jsx(Icon, { theme: s, size: r, iconPath: n, withoutScale: a }),
            }),
            jsxRuntimeExports.jsx(Label, { theme: s, children: e }),
        ],
    });
}
function RadioButtonGroup({ children: e, ...t }) {
    return jsxRuntimeExports.jsx(contextInstance.Provider, { value: useRadioButtonInstance(t), children: e });
}
((RadioButton.Root = Root),
    (RadioButton.Group = RadioButtonGroup),
    (RadioButton.Icon = Icon),
    (RadioButton.Input = Input),
    (RadioButton.Label = Label),
    (RadioButton.themes = themes),
    (RadioButton.sizes = sizes$1),
    (RadioButton.use = useRadioButton));
const CardContext = reactExports.createContext(void 0);
function useCardContext() {
    const e = reactExports.useContext(CardContext);
    if (!e) throw new Error('Card context must be used only within its provider');
    return e;
}
function CardContextProvider({ selected: e, hover: t, disabled: s, multiple: r, status: n, children: a }) {
    const o = reactExports.useMemo(
        () => ({ selected: e, hover: t, disabled: s, multiple: r, status: n }),
        [s, t, r, e, n],
    );
    return jsxRuntimeExports.jsx(CardContext.Provider, { value: o, children: a });
}
const CardsWrapperContext = reactExports.createContext(null);
function useCardsWrapperContextOptional() {
    return reactExports.useContext(CardsWrapperContext);
}
const CardsWrapperContextProvider = CardsWrapperContext.Provider,
    base$7 = 'Content_8eaaf71a',
    content$1 = 'Content_ab8563af',
    disabledOverlay = 'Content_disabledOverlay_af87c441',
    base__multiple = 'Content_base__multiple_da09528a',
    base__disabled = 'Content_base__disabled_da09528a',
    base__hover$1 = 'Content_base__hover_da09528a',
    base__selectedHover$1 = 'Content_base__selectedHover_da09528a',
    base__selected$1 = 'Content_base__selected_da09528a',
    multipleCorner = 'Content_multipleCorner_151c26ee',
    styles$8 = {
        base: base$7,
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
    Base$5 = defineStyledComponent('Content', styles$8.base, {
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
                    return createLayoutReadyInEffect$1(() => {
                        if (s.current) {
                            const e = s.current.getBoundingClientRect(),
                                t = Math.round((MULTIPLE_CORNER_SIZE / e.width) * 100),
                                r = Math.round((MULTIPLE_CORNER_SIZE / e.height) * 100);
                            (s.current.style.setProperty('--corner-width', `${t}%`),
                                s.current.style.setProperty('--corner-height', `${r}%`));
                        }
                    });
            }),
            jsxRuntimeExports.jsxs(Base$5, {
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
    base$6 = 'Status_68bd9bc6',
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
    styles$7 = {
        base: base$6,
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
defineStyledComponent('Status', styles$7.base, {
    variants: { status: { done: styles$7.base__done, alert: styles$7.base__alert, locked: styles$7.base__locked } },
});
const SMALL_SIZE_BREAKPOINT = 100,
    tooltipEnabled = ({ header: e, body: t }) => Boolean(e && t),
    Status = ({ reason: e, classNames: t }) => {
        const s = reactExports.useRef(null),
            [r, n] = React.useState(!1),
            a = `base__${useCardContext().status}${r ? 'Small' : ''}`,
            o = React.useCallback(() => {
                var e;
                const t = null == (e = s.current) ? void 0 : e.getBoundingClientRect();
                t && n(t.width <= SMALL_SIZE_BREAKPOINT);
            }, [s]);
        useRefResizeObserver(s, o);
        const i = e
                ? {
                      header: strings.readOrEmpty(`tooltips.moduleFits.${e}.header`),
                      body: strings.readOrEmpty(`tooltips.moduleFits.${e}.text`),
                  }
                : {},
            l = useSimpleTooltip(i);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$7.base, styles$7[a], null == t ? void 0 : t.wrapper),
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
                    ...(tooltipEnabled(i) && l),
                    className: cx(styles$7.icon, null == t ? void 0 : t.icon),
                }),
            ],
        });
    },
    base$5 = 'Card_f0963ece',
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
        base: base$5,
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
    Base$4 = defineStyledComponent('Card', cardStyles.base, {
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
            onMouseOut: o,
            soundTarget: i,
            disabled: l = !1,
            className: c,
            classNames: u,
            ...d
        },
        p,
    ) {
        const [m, _] = reactExports.useState(!1),
            f = useSounds(),
            h = useCardsWrapperContextOptional(),
            g = n || l;
        return jsxRuntimeExports.jsx(Base$4, {
            ...d,
            ref: p,
            hover: m,
            disableMouse: n,
            active: t,
            className: cx(cardStyles.card, c, (null == h ? void 0 : h.enabled) && cardStyles.base__wrapped),
            children: jsxRuntimeExports.jsxs(CardContextProvider, {
                disabled: l,
                selected: d.selected ?? !1,
                multiple: d.multiple ?? !1,
                hover: m,
                status: s,
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(cardStyles.content, null == u ? void 0 : u.content),
                        onClick: function (e) {
                            g || f.play('click', { target: i || 'react-ui:card', original: e });
                        },
                        onMouseEnter: function (e) {
                            g || f.play('mouse-enter', { target: i || 'react-ui:card', original: e });
                        },
                        onMouseOver: function (e) {
                            g || (_(!0), null == a || a(e));
                        },
                        onMouseOut: function (e) {
                            g || (_(!1), null == o || o(e));
                        },
                        children: jsxRuntimeExports.jsx(MainContainer, { classNames: u, children: e }),
                    }),
                    jsxRuntimeExports.jsx('div', { className: cardStyles.centerBorder }),
                    s && jsxRuntimeExports.jsx(Status, { reason: r, classNames: null == u ? void 0 : u.status }),
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
        o = Point(t + r, s),
        i = Point(t + r, s + n),
        l = Point(t, s + n);
    return [
        [a, o],
        [o, i],
        [i, l],
        [l, a],
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
        o = s,
        i = -PADDING,
        l = -PADDING;
    for (e.splice(0, 1); e.length > 0; ) {
        const t = e.findIndex((e) => e[0].x === n.x && e[0].y === n.y);
        if (-1 === t) break;
        const s = e[t],
            c = n;
        (n.x <= o.x ? (l = PADDING) : (l === PADDING && (a.y -= 2 * PADDING), (l = -PADDING)),
            n.y >= o.y ? (i = PADDING) : (i === PADDING && (a.x -= 2 * PADDING), (i = -PADDING)),
            (n = { x: n.x + i, y: n.y + l }),
            r.push(n),
            (o = c),
            (a = n),
            (n = s[1]),
            e.splice(t, 1));
    }
    return (l === PADDING && i === PADDING && (a = { ...a, x: a.x - 2 * PADDING }), r.push(s), r);
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
        const o = `${s === LINE_THICKNESS ? VERTICAL : HORIZONTAL}-${s === LINE_THICKNESS ? Math.round(e) : Math.round(t)}-${n}`;
        this.lines.has(o) || this.lines.set(o, []);
        const i = { x: e - this.containerRect.x, y: t - this.containerRect.y, width: s, height: r, className: n };
        null == (a = this.lines.get(o)) || a.push(i);
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
    styles$6 = { lineInner: lineInner, lineOuter: lineOuter };
function buildLines(e, t, s) {
    const r = [],
        n = new LinesOptimizer(t);
    for (let a = 0; a < e.length; a++) {
        const t = e[a],
            o = t.getBoundingClientRect();
        if (0 === o.width || 0 === o.height)
            return void console.debug(
                `Card rect has zero size by one side: ${o.width}x${o.height} (${t.getAttribute('data-test-id')}) `,
            );
        (s !== borderTypes.none && r.push({ x: o.x, y: o.y, width: o.width, height: o.height }),
            n.addLine(o.x, o.y, o.width, LINE_THICKNESS, styles$6.lineInner),
            n.addLine(o.x, o.y + o.height, o.width, LINE_THICKNESS, styles$6.lineInner),
            n.addLine(o.x, o.y, LINE_THICKNESS, o.height, styles$6.lineInner),
            n.addLine(o.x + o.width, o.y, LINE_THICKNESS, o.height + OFFSET, styles$6.lineInner));
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
                    styles$6.lineOuter,
                );
            }
            t = e;
        });
    }
    return n.run();
}
const Lines = reactExports.memo(({ containerRef: e, generation: t, border: s, cardSelector: r }) => {
        const [n, a] = reactExports.useState([]),
            o = useEvent(() => {
                const t = e.current;
                if (!t) return;
                const n = t.getBoundingClientRect(),
                    o = buildLines(t.querySelectorAll(`.${r || cardStyles.card}`), n, s);
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
    base$4 = 'CardsWrapper_3b6cc4f6',
    card = 'CardsWrapper_card_c7fc9ee7',
    centerBorderCommon = 'CardsWrapper_centerBorderCommon_b4b27a11',
    outerBorderCommon = 'CardsWrapper_outerBorderCommon_f4887371',
    styles$5 = {
        base: base$4,
        card: card,
        centerBorderCommon: centerBorderCommon,
        outerBorderCommon: outerBorderCommon,
    },
    Base$3 = defineStyledComponent('CardsWrapper', styles$5.base),
    CardsWrapper = reactExports.forwardRef(function (
        {
            children: e,
            className: t,
            trashhold: s,
            border: r = borderTypes.contour,
            enabled: n = !0,
            cardSelector: a,
            ...o
        },
        i,
    ) {
        const l = reactExports.useRef([]),
            c = reactExports.useRef(null),
            [u, d] = reactExports.useState('');
        reactExports.useImperativeHandle(i, () => c.current);
        const p = reactExports.useCallback(
            (e) => {
                const t = c.current;
                if (!t) return;
                const s = t.querySelectorAll(`.${a || cardStyles.card}`);
                if (s.length > 0) {
                    const r = t.getBoundingClientRect(),
                        n = s.length;
                    n !== l.current.length && (l.current = Array.from(s));
                    const a = `${Math.round(r.width)}x${Math.round(r.height)}-${n}|${e}`;
                    d(a);
                } else d('');
            },
            [a],
        );
        (reactExports.useEffect(() => {
            p(s);
        }),
            useRefResizeObserver(
                c,
                reactExports.useCallback(() => p(), [p]),
            ));
        const m = reactExports.useMemo(() => ({ recalculate: p, enabled: n }), [p, n]);
        return jsxRuntimeExports.jsx(Base$3, {
            ...o,
            ref: c,
            children: jsxRuntimeExports.jsxs('div', {
                className: t,
                children: [
                    jsxRuntimeExports.jsx(CardsWrapperContextProvider, { value: m, children: e }),
                    jsxRuntimeExports.jsx(Lines, {
                        cardsRef: l,
                        containerRef: c,
                        border: r,
                        generation: u,
                        cardSelector: a,
                    }),
                ],
            }),
        });
    }),
    CardSingle = reactExports.forwardRef(({ className: e, classNames: t, ...s }, r) =>
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
    ),
    statusTypes = { done: 'done' },
    base$3 = 'CarouselScroll_3690a837',
    areaContent = 'CarouselScroll_areaContent_f5dd7772',
    styles$4 = { base: base$3, areaContent: areaContent },
    GAP_BEFORE_START = 5,
    draggingStates = { dragging: 'dragging', idle: 'idle' };
function CarouselScroll({
    api: e,
    children: t,
    className: s,
    areaClassNames: r,
    staticContent: n,
    disabled: a,
    onDraggingState: o,
}) {
    const { animationScroll: i, applyScroll: l, setDisabled: c } = e,
        u = useScrollByDragElements(e, dragDirections.horizontal, void 0, { gapBeforeStart: GAP_BEFORE_START });
    return (
        reactExports.useEffect(() => {
            null == o || o(u.type === draggingStates.dragging);
        }, [u.type, o]),
        reactExports.useEffect(() => {
            c(a);
        }, [a, c]),
        reactExports.useEffect(
            () =>
                createLayoutReadyInEffect$1(() => {
                    u.type === draggingStates.idle && i.scrollPosition.idle && l(i.scrollPosition.get());
                }),
            [i.scrollPosition, u, l],
        ),
        jsxRuntimeExports.jsx('div', {
            className: cx(styles$4.base, s),
            children: jsxRuntimeExports.jsxs(Area$1, {
                className: null == r ? void 0 : r.base,
                classNames: {
                    wrapper: cx(styles$4.areaWrapper, null == r ? void 0 : r.wrapper),
                    content: cx(styles$4.areaContent, null == r ? void 0 : r.content),
                },
                children: [t, n],
            }),
        })
    );
}
const directions = { horizontal: 'horizontal' },
    PERCENT_OF_VISIBLE_ELEMENTS = 1.5,
    SAFETY_FACTOR = 0.25;
function calculateRangeRows(e, t, s) {
    if (0 === t) return [0, 0];
    const r = e.animationScroll.scrollPosition.get(),
        n = e.getWrapperSize();
    if ('number' != typeof n || 0 === n) return [0, 0];
    const a = Math.ceil((n / s) * PERCENT_OF_VISIBLE_ELEMENTS),
        o = Math.max(0, Math.ceil(r / s) - Math.floor(a * SAFETY_FACTOR));
    return [o, Math.min(t, o + a)];
}
function DefaultWrapper(e) {
    return jsxRuntimeExports.jsx('div', { ...e });
}
function calculateRangeItems(e, t, s) {
    if (0 === t) return [0, 0];
    const r = e.animationScroll.scrollPosition.get(),
        n = e.getWrapperSize();
    if ('number' != typeof n || 0 === n || Number.isNaN(r)) return [0, 0];
    const a = Math.ceil((n / s) * PERCENT_OF_VISIBLE_ELEMENTS),
        o = clamp$1(0, t, Math.ceil(r / s) - Math.floor(a * SAFETY_FACTOR));
    return [o, Math.min(t, o + a)];
}
const initVisibleRange = [0, 0];
function useVisibleRange(e, t, s, r, n) {
    const [a, o] = reactExports.useState(initVisibleRange),
        i = reactExports.useRef(initVisibleRange),
        [l, c] = useOptionalTransition(s),
        u = usePrevious(l),
        d = useThrottleCall(t, !0),
        p = useEvent(() => {
            c(() => {
                const [e, t] = i.current;
                o((s) => {
                    const [r, n] = s;
                    return e === r && t === n ? s : [e, t];
                });
            });
        }),
        m = useEvent(() => {
            d.call(() => {
                const e = r();
                (i.current[0] === e[0] && i.current[1] === e[1]) || ((i.current = e), l || p());
            });
        });
    return (
        reactExports.useEffect(() => {
            u && !l && ((i.current[0] === a[0] && i.current[1] === a[1]) || p());
        }, [l, u, p, a]),
        reactExports.useLayoutEffect(
            () => (
                e.events.on('change', m),
                e.events.on('recalculateContent', m),
                e.events.on('resizeHandled', m),
                m(),
                () => {
                    (e.events.off('change', m),
                        e.events.off('recalculateContent', m),
                        e.events.off('resizeHandled', m));
                }
            ),
            [e.events, m, n],
        ),
        a
    );
}
const renderScrollDefault$1 = (e) => jsxRuntimeExports.jsx(DefaultScroll$1, { ...e });
function HorizontalList({
    totalElements: e,
    throttle: t = 0,
    api: s,
    elementWidth: r,
    wrappers: n,
    className: a,
    renderElement: o,
    asyncRenderEnabled: i = !1,
    renderScroll: l = renderScrollDefault$1,
}) {
    const c = useVisibleRange(s, t, i, () => calculateRangeItems(s, e, r), e),
        u = (null == n ? void 0 : n.Element) ?? reactExports.Fragment,
        d = (null == n ? void 0 : n.Content) ?? DefaultWrapper,
        [p, m] = c,
        _ = Math.min(e, m),
        f = clamp$1(0, _, p);
    return l(
        {
            className: a,
            children: jsxRuntimeExports.jsxs(d, {
                children: [
                    jsxRuntimeExports.jsx('div', { style: { width: p * r } }),
                    mapRange(f, Math.max(_, f), (e) => jsxRuntimeExports.jsx(u, { children: o(e) }, e)),
                    jsxRuntimeExports.jsx('div', { style: { width: Math.max(0, e - m) * r } }),
                ],
            }),
        },
        c,
    );
}
const renderScrollDefault = (e) => jsxRuntimeExports.jsx(DefaultScroll, { ...e });
function VerticalList({
    api: e,
    className: t,
    totalElements: s,
    elementHeight: r,
    itemsPerRow: n = 1,
    wrappers: a,
    throttle: o = 0,
    asyncRenderEnabled: i = !1,
    renderElement: l,
    renderScroll: c = renderScrollDefault,
}) {
    const u = Math.ceil(s / n),
        d = useVisibleRange(e, o, i, () => calculateRangeRows(e, u, r));
    reactExports.useEffect(e.recalculateContent, [e, d]);
    const [p, m] = d,
        _ = (null == a ? void 0 : a.Element) ?? reactExports.Fragment,
        f = (null == a ? void 0 : a.Content) ?? DefaultWrapper,
        h = Math.min(s, m * n),
        g = clamp$1(0, h, p * n);
    return c(
        {
            className: t,
            children: jsxRuntimeExports.jsxs(f, {
                children: [
                    jsxRuntimeExports.jsx('div', { style: { width: '100%', height: p * r } }),
                    mapRange(g, Math.max(g, h), (e) => jsxRuntimeExports.jsx(_, { children: l(e) }, e)),
                    jsxRuntimeExports.jsx('div', { style: { width: '100%', height: Math.max(0, u - m) * r } }),
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
const types = {
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
    currencyTypes = Object.values(types),
    sizes = {
        extraSmall: 'extraSmall',
        small: 'small',
        medium: 'medium',
        large: 'large',
        extraLarge: 'extraLarge',
        xxl: 'xxl',
    },
    imageSizes = {
        [sizes.extraSmall]: 16,
        [sizes.small]: 24,
        [sizes.medium]: 32,
        [sizes.large]: 48,
        [sizes.extraLarge]: 80,
        [sizes.xxl]: 96,
    },
    upscaledImageSizes = {
        [sizes.extraSmall]: 32,
        [sizes.small]: 48,
        [sizes.medium]: 32,
        [sizes.large]: 96,
        [sizes.extraLarge]: 80,
        [sizes.xxl]: 96,
    };
(sizes.extraSmall, sizes.small, sizes.medium, sizes.large, sizes.extraLarge, sizes.xxl);
const base$2 = 'Currency_72d4be39',
    base__reverse = 'Currency_base__reverse_f12e61b0',
    base__notEnough = 'Currency_base__notEnough_9a7842f',
    base__credits = 'Currency_base__credits_7b9ae721',
    base__gold = 'Currency_base__gold_d6e3cbc',
    base__freeXP = 'Currency_base__freeXP_d29d5a57',
    base__crystal = 'Currency_base__crystal_f830cb47',
    base__tankXP = 'Currency_base__tankXP_1707c68b',
    styles$3 = {
        base: base$2,
        base__reverse: base__reverse,
        base__notEnough: base__notEnough,
        base__credits: base__credits,
        base__gold: base__gold,
        base__freeXP: base__freeXP,
        base__crystal: base__crystal,
        base__tankXP: base__tankXP,
    },
    intl = resources.resolve('intl'),
    Base$2 = defineStyledComponent('Currency', styles$3.base, {
        variants: { reverse: { true: styles$3.base__reverse } },
    });
function formatCurrencyValue(e, t) {
    const s = t === types.gold ? 'gold' : 'integral';
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
    size: a = sizes.small,
    enough: o = !0,
    ...i
}) {
    const l = imageSizes[a],
        c = `${t}_${l}x${l}`,
        u = upscaledImageSizes[a],
        d = `${t}_${u}x${u}`,
        p = n || currencyTypes.includes(t),
        m = useUpscale(`library.currency.${c}`, `library.currency.${d}`);
    return jsxRuntimeExports.jsxs(Base$2, {
        ...i,
        className: cx(null == r ? void 0 : r.base, o ? styles$3[`base__${t}`] : styles$3.base__notEnough, s),
        children: [
            p &&
                jsxRuntimeExports.jsx(Image, {
                    width: l,
                    height: l,
                    path: n ?? m,
                    className: null == r ? void 0 : r.icon,
                }),
            formatCurrencyValue(e, t),
        ],
    });
}
((Currency.sizes = sizes), (Currency.types = types));
const Context = reactExports.createContext(void 0);
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
    styles$2 = {
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
            className: cx(styles$2.filled, styles$2[`filled__${n.size}`], e),
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(styles$2.wrapper, null == t ? void 0 : t.wrapper),
                children: [
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$2.fill, null == t ? void 0 : t.fill),
                        style: { width: 100 * n.percentage + '%' },
                    }),
                    jsxRuntimeExports.jsx('div', {
                        className: cx(styles$2.pattern, null == t ? void 0 : t.pattern),
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
        o = usePrevious(r),
        i = useEvent((t) => s(Math.min(t, e.maxValue)));
    (reactExports.useLayoutEffect(() => {
        i(e.value);
    }, [e.value, i]),
        reactExports.useLayoutEffect(() => {
            n(e.maxValue);
        }, [e.maxValue]));
    const l = useEvent((t) => {
        var s;
        return null == (s = e.onValueChange) ? void 0 : s.call(e, t);
    });
    reactExports.useEffect(() => {
        l(t);
    }, [l, t]);
    const c = useEvent((t) => {
        var s;
        return null == (s = e.onMaxValueChange) ? void 0 : s.call(e, t);
    });
    reactExports.useEffect(() => {
        c(r);
    }, [c, r]);
    const u = reactExports.useMemo(() => {
        if (void 0 !== a && void 0 !== o) return { value: a, maxValue: o, percentage: a / o };
    }, [a, o]);
    assert(r > 0, 'ProgressBar: maxValue must be greater than 0');
    const d = reactExports.useMemo(
        () => ({
            value: t,
            maxValue: r,
            setValue: i,
            setMaxValue: n,
            size: e.size,
            previous: u,
            percentage: t / r,
            animationEnabled: e.animationEnabled,
        }),
        [t, r, i, n, u, e.size, e.animationEnabled],
    );
    return jsxRuntimeExports.jsx(Context.Provider, { value: d, children: e.children });
}
const background = 'ProgressBar_background_b40cdfdf',
    base$1 = 'ProgressBar_27c2305c',
    base__small = 'ProgressBar_base__small_61ccd4be',
    base__medium = 'ProgressBar_base__medium_478d985a',
    base__full = 'ProgressBar_base__full_be7f12da',
    backgroundPattern = 'ProgressBar_backgroundPattern_7e932276',
    styles$1 = {
        background: background,
        base: base$1,
        base__small: base__small,
        base__medium: base__medium,
        base__full: base__full,
        backgroundPattern: backgroundPattern,
    },
    Base$1 = defineStyledComponent('ProgressBar', styles$1.base, {
        variants: { size: { small: styles$1.base__small, medium: styles$1.base__medium, full: styles$1.base__full } },
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
        children: jsxRuntimeExports.jsxs(Base$1, {
            size: e,
            className: t,
            children: [
                jsxRuntimeExports.jsx('div', { className: cx(styles$1.background, null == s ? void 0 : s.background) }),
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$1.backgroundPattern, null == s ? void 0 : s.backgroundPattern),
                }),
                jsxRuntimeExports.jsx(Filled, { className: r, classNames: n }),
                a.children,
            ],
        }),
    });
}
const base = 'Tooltip_6d997cee',
    decorator = 'Tooltip_decorator_b3486d4e',
    styles = { base: base, decorator: decorator },
    Base = defineStyledComponent('Base', styles.base),
    Decorator = defineStyledComponent('Decorator', styles.decorator),
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
export {
    useScrollBounding as $,
    Area as A,
    Base$7 as B,
    sounds$1 as C,
    usePopover as D,
    DefaultScroll as E,
    FormatText as F,
    sizes$3 as G,
    themes$1 as H,
    ImageSize$1 as I,
    JSXBuilder as J,
    RadioButton as K,
    sizes$1 as L,
    MultilineOverflow as M,
    Image as N,
    useSimpleTooltip as O,
    Popover as P,
    useTooltip as Q,
    Reward as R,
    Card as S,
    TruncatedText as T,
    UIProvider as U,
    Video$1 as V,
    CardsWrapper as W,
    useMedia as X,
    breakpointsByType as Y,
    mapRange as Z,
    identity as _,
    getRewardValueType$1 as a,
    CardSingle as a0,
    statusTypes as a1,
    Currency as a2,
    sizes$2 as a3,
    useHorizontalScroll as a4,
    useRem as a5,
    List as a6,
    CarouselScroll as a7,
    borderTypes as a8,
    Base$8 as a9,
    useHandleKeydown as aa,
    keyCodes as ab,
    Tooltip as ac,
    ProgressBar as ad,
    getRewardImage as b,
    Bar as c,
    Button as d,
    useCallbackOnEsc as e,
    useMount$1 as f,
    getRewardTooltipConfig as g,
    graphicsQuality as h,
    initializeModelWithContext as i,
    resize$1 as j,
    runView as k,
    enableFullScreenModeSupported$1 as l,
    mapExists as m,
    getRewardValueType as n,
    Video as o,
    map as p,
    initExternalPaddings$1 as q,
    resources as r,
    setSidePaddingsRem$1 as s,
    noop$1 as t,
    useSkipFrame as u,
    FormatString as v,
    Bubble as w,
    types$1 as x,
    defineStyledComponent as y,
    play as z,
};
