var __defProp = Object.defineProperty,
    __defNormalProp = (e, u, t) =>
        u in e ? __defProp(e, u, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[u] = t),
    __publicField = (e, u, t) => __defNormalProp(e, 'symbol' != typeof u ? u + '' : u, t),
    _a;
import {
    c as createContainer,
    a as asFunction,
    b as asClass,
    d as asValue,
    r as reactExports,
    j as jsxRuntimeExports,
    e as classNames,
    o as observable,
    f as action,
    u as untracked,
    R as React,
    g as client$1,
    i as index,
    l as loadDefaultJapaneseParser,
} from './vendor.js';
const resources = createContainer();
function concatWithPath(e, u) {
    return e && e.length > 0 ? `${e}.${u}` : u;
}
function logBySeverity(e, u) {
    switch (u) {
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
            console.warn('Unknown severity log type:', u);
    }
}
function readFromR$2(e, u) {
    const t = u.split('.');
    if (window.R && window.R.images) {
        const u = t[t.length - 1];
        if (!u) return;
        const n = t.slice(0, -1).reduce((e, u) => {
            if ('object' == typeof (null == e ? void 0 : e[u])) return e[u];
        }, e);
        if (!n) return;
        return 'function' == typeof n[u] ? n[u]() : void 0;
    }
    throw new Error('R class with images field is not defined');
}
class ImagesRClassProvider {
    constructor(e, u) {
        ((this.root = e), (this.prefix = u));
    }
    read(e) {
        return this.readOr(e, () => {});
    }
    readOr(e, u, t = 'silent') {
        const n = concatWithPath(this.prefix, e),
            s = readFromR$2(this.root, n);
        return void 0 === s ? ('silent' !== t && logBySeverity(`Resource not found: ${n}`, t), u()) : s;
    }
    readOrEmpty(e, u = 'warn') {
        return this.readOr(e, () => '', u);
    }
    readOrThrow(e) {
        const u = this.read(e);
        if (void 0 === u) throw new Error(`Resource not found: ${this.prefix} ${e}`);
        return u;
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
    readOr(e, u, t = 'silent') {
        return this.read(e);
    }
    readOrEmpty(e, u = 'warn') {
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
function formatNumber(e, u) {
    return window.systemLocale.getNumberFormat(u, numberFormats[e]);
}
function isRealFormat(e) {
    return e in realFormats;
}
function formatReal(e, u) {
    return window.systemLocale.getRealFormat(u, realFormats[e]);
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
function formatDateTime(e, u, t = !0) {
    return window.regionalDateTime.getRegionalDateTime(validateTimestamp(u), e, t);
}
const timeFormats = { full: DateTimeFormatsEnum.FullTime, short: DateTimeFormatsEnum.ShortTime },
    timeFormatList = Object.keys(timeFormats);
function formatTime(e, u, t = !0) {
    return window.regionalDateTime.getRegionalDateTime(validateTimestamp(u), e, t);
}
const systemFormat = { short: 0, full: 1 },
    system = {
        time: (e, u) => window.systemLocale.getTimeFormat(validateTimestamp(e), systemFormat[u]),
        date: (e, u) => window.systemLocale.getDateFormat(validateTimestamp(e), systemFormat[u]),
    },
    intl$1 = {
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
        const u = window.R.sounds[e];
        'function' == typeof u
            ? engine.call('PlaySound', u.apply(window.R.sounds))
            : logBySeverity(`Sound not found: ${e}`, 'warn');
    }
}
function readFromR$1(e, u) {
    const t = e.split('.');
    if (window.R && window.R.strings) {
        const e = t[t.length - 1];
        if (!e) return;
        const n = window.R.strings,
            s = t.slice(0, -1).reduce((e, u) => {
                if ('object' == typeof (null == e ? void 0 : e[u])) return e[u];
            }, n);
        if (!s) return;
        return 'function' == typeof s[e] ? (u ? s[e](u) : s[e]()) : void 0;
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
    readOr(e, u, t = 'silent') {
        const n = concatWithPath(this.prefix, e),
            s = readFromR$1(n);
        return void 0 === s ? ('silent' !== t && logBySeverity(`Resource not found: ${n}`, t), u()) : s;
    }
    readOrEmpty(e, u = 'warn') {
        return this.readOr(e, () => '', u);
    }
    readOrThrow(e) {
        const u = concatWithPath(this.prefix, e),
            t = readFromR$1(u);
        if (void 0 === t) throw new Error(`Resource not found: ${u}`);
        return t;
    }
    plural(e, u) {
        return this.pluralOr(e, u, () => {});
    }
    pluralOr(e, u, t, n = 'silent') {
        const s = concatWithPath(this.prefix, e),
            o = readFromR$1(s, u);
        return void 0 === o ? ('silent' !== n && logBySeverity(`Resource not found: ${s}`, n), t()) : o;
    }
    pluralOrEmpty(e, u, t = 'warn') {
        return this.pluralOr(e, u, () => '', t);
    }
}
function readFromR(e, u) {
    const t = u.split('.');
    if (window.R && window.R.videos) {
        const u = t[t.length - 1];
        if (!u) return;
        const n = t.slice(0, -1).reduce((e, u) => {
            if ('object' == typeof (null == e ? void 0 : e[u])) return e[u];
        }, e);
        if (!n) return;
        return 'function' == typeof n[u] ? n[u]() : void 0;
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
    readOr(e, u, t = 'silent') {
        const n = readFromR(this.root, e);
        return void 0 === n ? ('silent' !== t && logBySeverity(`Resource not found: ${e}`, t), u()) : n;
    }
    readOrEmpty(e, u = 'warn') {
        return this.readOr(e, () => '', u);
    }
    readOrThrow(e) {
        const u = this.read(e);
        if (void 0 === u) throw new Error(`Resource not found: ${e}`);
        return u;
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
var define_import_meta_env_default = { BASE_URL: './', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 };
function getNumberFormat(e, u) {
    return window.systemLocale.getNumberFormat(e, u);
}
function normalizeResource(e) {
    return e.replaceAll('-', '_');
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
    intl: asValue(intl$1),
}),
    define_import_meta_env_default.VITE_HOT_LIVE_SERVER &&
        resources.register('images', asFunction(() => new ImagesServerRedirectProvider()).singleton()));
const convertNbsp$1 = (e) => e.replace(/&nbsp;/g, ' ');
function makeEngineEvent$1(e) {
    return (u) => (
        engine.on(e, u),
        () => {
            engine.off(e, u);
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
    function u() {
        e.enabled && setTrackMouseOutside$1(!1);
    }
    function t() {
        e.enabled && setTrackMouseOutside$1(!0);
    }
    function n() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', u),
                  document.body.removeEventListener('mouseleave', t),
                  setTrackMouseOutside$1(!1))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', u),
                  document.body.addEventListener('mouseleave', t))
            : setTrackMouseOutside$1(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (u, t) => (
                (u[t] = (function (u) {
                    return (t) => {
                        e.listeners += 1;
                        const s = `mouse${u}`,
                            o = internalMouse$1[u]((e) => t([e, 'outside']));
                        function r(e) {
                            t([e, 'inside']);
                        }
                        return (
                            window.addEventListener(s, r),
                            n(),
                            () => {
                                (o(), window.removeEventListener(s, r), (e.listeners -= 1), n());
                            }
                        );
                    };
                })(t)),
                u
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
function playSound$2(e) {
    engine.call('PlaySound', e);
}
initMouseEvents$1();
const sounds$1 = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays$1 = Object.keys(sounds$1).reduce((e, u) => ((e[u] = () => playSound$2(sounds$1[u])), e), {}),
    play$1 = { ...plays$1, sound: playSound$2 },
    displayStatus$1 = { notReady: 0, ready: 1, showing: 2, shown: 3, hiding: 4, hidden: 5 },
    createSubscribeHitTest = () => {
        const e = new Set(),
            u = (u, t) => {
                for (const n of e.values())
                    if (n(u)) {
                        t.value = !1;
                        break;
                    }
            };
        return (t) => (
            e.add(t),
            1 === e.size && (viewEnv.setHitTestEnabled(!0), engine.on('self.onHitTest', u)),
            () => {
                (e.delete(t), 0 === e.size && (viewEnv.setHitTestEnabled(!1), engine.off('self.onHitTest', u)));
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
    viewEventTypes$1 = { undefined: 0, tooltip: 1, popover: 2, contextMenu: 4, move: 16, close: 32, minimize: 64 };
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
        const u = [];
        for (const [t, n] of Object.entries(e)) {
            const e = serializeEventArgument(n);
            void 0 !== e && u.push({ __Type: 'GFValueProxy', name: t, ...e });
        }
        return u;
    },
    sendViewEvent$1 = (e, u) => {
        const t = 'GFViewEventProxy';
        if (void 0 !== u) {
            const { args: n, ...s } = u;
            return void 0 !== n
                ? viewEnv.handleViewEvent({ __Type: t, type: e, ...s, arguments: createViewEventArguments$2(n) })
                : viewEnv.handleViewEvent({ __Type: t, type: e, ...s });
        }
        return viewEnv.handleViewEvent({ __Type: t, type: e });
    },
    openedTooltips = new Map(),
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
            open({ contentID: e, decoratorID: u = 0, targetID: t, direction: n, boundingBox: s, args: o }) {
                sendViewEvent$1(viewEventTypes$1.popover, {
                    contentID: e,
                    decoratorID: u,
                    targetID: t,
                    direction: n,
                    bbox: serializeGlobalBoundingBox(s),
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
            open(e, u, t = 0, n) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, {
                    contentID: u,
                    decoratorID: t,
                    targetID: e,
                    isMouseEvent: !0,
                    on: !0,
                    args: n,
                }),
                    openedTooltips.set(`${e}-${u}`, { targetID: e, contentID: u }));
            },
            hide(e, u, t = 0) {
                (sendViewEvent$1(viewEventTypes$1.tooltip, { contentID: u, decoratorID: t, targetID: e, on: !1 }),
                    openedTooltips.delete(`${e}-${u}`));
            },
            hideAll() {
                const e = Array.from(openedTooltips.values());
                for (const u of e) this.hide(u.targetID, u.contentID);
            },
        },
        contextMenu: {
            open(e, u, t = 0, n) {
                sendViewEvent$1(viewEventTypes$1.contextMenu, {
                    contentID: u,
                    decoratorID: t,
                    targetID: e,
                    isMouseEvent: !0,
                    on: !0,
                    args: n,
                });
            },
            hide(e, u, t = 0) {
                sendViewEvent$1(viewEventTypes$1.contextMenu, {
                    contentID: u,
                    decoratorID: t,
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
function addModelObserver$1(e, u, t) {
    return viewEnv.addDataChangedCallback(e, u, t);
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
    function u() {
        const { top: u, right: t, bottom: n, left: s } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${u}rem`),
            e.style.setProperty('--external-padding-right', `${t}rem`),
            e.style.setProperty('--external-padding-bottom', `${n}rem`),
            e.style.setProperty('--external-padding-left', `${s}rem`));
    }
    (u(), engine.on('self.onPaddingsUpdated', () => u()));
}
Object.keys(displayStatus$1).reduce(
    (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === displayStatus$1[u]), e),
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
        this.listeners.forEach((u) => u(e));
    }
}
const getRootDefault = (e) => (0 === e ? window : window.subViews.get(e));
function create(
    { initializer: e = !0, rootId: u = 0, getRoot: t = getRootDefault, context: n = 'model' } = {},
    { name: s = 'DataLayer' } = {},
) {
    const o = new Map(),
        r = { subscribersNotified: new SimpleEmitter() },
        i = engine.whenReady.then(() => {
            function e(e, u, t) {
                (t.forEach((t) => {
                    const n = o.get(t);
                    void 0 !== n && n(e, u);
                }),
                    r.subscribersNotified.emit());
            }
            const u = [];
            return (
                engine.on('viewEnv.onDataChanged', e),
                u.push(() => engine.off('viewEnv.onDataChanged', e)),
                () => {
                    u.forEach((e) => e());
                }
            );
        });
    function a() {
        try {
            const e = t(u);
            return n.split('.').reduce((e, u) => e[u], e);
        } catch (e) {
            throw new Error(`Failure get root of ${s}. Root id: ${u}. Context: ${n}`);
        }
    }
    const l = (e) => {
        const t = a();
        if ('string' != typeof e || 0 === e.length) return t;
        try {
            return e.split('.').reduce((e, u) => {
                if (!(u in e)) throw new Error(`Key "${u}" doesn't exists in part of model`);
                const t = e[u];
                return 'function' == typeof t ? t.bind(e) : t;
            }, t);
        } catch (o) {
            throw new Error(`Failure readByPath in ${s}. Root id: ${u}. Context: ${n}:\n${o}\n`);
        }
    };
    function c(e) {
        viewEnv.removeDataChangedCallback(e, u) ? o.delete(e) : console.error("Can't remove callback by id:", e);
    }
    return {
        subscribe: (t, s) => {
            const r = addModelObserver$1('string' == typeof s ? `${n}.${s}` : n, u, !0);
            return (o.set(r, t), e && t(l(s), []), r);
        },
        readByPath: l,
        readSafeByPath: (e) => {
            const u = a();
            return 'string' != typeof e || 0 === e.length
                ? u
                : e.split('.').reduce((e, u) => {
                      const t = null == e ? void 0 : e[u];
                      return 'function' == typeof t ? t.bind(e) : t;
                  }, u);
        },
        createCallback: (e, u) => {
            const t = l(u);
            return (...u) => {
                t(e(...u));
            };
        },
        createCallbackNoArgs: (e) => {
            const u = l(e);
            return () => {
                u();
            };
        },
        dispose: function () {
            if (0 === u || ids().includes(u)) for (const e of o.keys()) c(e);
            i.then((e) => e());
        },
        unsubscribe: c,
        events: r,
    };
}
function cleanContext(e) {
    if (e.startsWith('model')) {
        return e.split('.').slice(1).join('.');
    }
    return e;
}
function resolvePathContext(e, u) {
    if (!u) return e;
    const t = cleanContext(u);
    return e ? (0 === t.length ? e : `${t}.${e}`) : t;
}
function resolvePath(e, u) {
    return u ? resolvePathContext(e, u.context) : e;
}
function createMockInstance(e, u) {
    return {
        subscribe: () => 0,
        readSafeByPath: e,
        readByPath: e,
        createCallback: (t, n) => {
            const s = e(resolvePath(n, u));
            return (...e) => {
                s(t(...e));
            };
        },
        createCallbackNoArgs: (t) => {
            const n = e(resolvePath(t, u));
            return () => {
                n();
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
('symbol' != typeof Symbol.dispose && Object.defineProperty(Symbol, 'dispose', { value: Symbol.for('dispose') }),
    'symbol' != typeof Symbol.asyncDispose &&
        Object.defineProperty(Symbol, 'asyncDispose', { value: Symbol.for('asyncDispose') }),
    (function () {
        if (!self.fetch) {
            ((r.prototype.append = function (e, u) {
                ((e = s(e)), (u = o(u)));
                var t = this.map[e];
                (t || ((t = []), (this.map[e] = t)), t.push(u));
            }),
                (r.prototype.delete = function (e) {
                    delete this.map[s(e)];
                }),
                (r.prototype.get = function (e) {
                    var u = this.map[s(e)];
                    return u ? u[0] : null;
                }),
                (r.prototype.getAll = function (e) {
                    return this.map[s(e)] || [];
                }),
                (r.prototype.has = function (e) {
                    return this.map.hasOwnProperty(s(e));
                }),
                (r.prototype.set = function (e, u) {
                    this.map[s(e)] = [o(u)];
                }),
                (r.prototype.forEach = function (e) {
                    var u = this;
                    Object.getOwnPropertyNames(this.map).forEach(function (t) {
                        e(t, u.map[t]);
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
                u = 'FormData' in self,
                t = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'],
                n = !(
                    'undefined' == typeof window ||
                    !window.ActiveXObject ||
                    (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
                );
            (c.call(d.prototype),
                c.call(A.prototype),
                (self.Headers = r),
                (self.Request = d),
                (self.Response = A),
                (self.fetch = function (u, t) {
                    var s;
                    return (
                        (s = d.prototype.isPrototypeOf(u) && !t ? u : new d(u, t)),
                        new fetch.Promise(function (u, t) {
                            var o = (function () {
                                return n && !/^(get|post|head|put|delete|options)$/i.test(this.method)
                                    ? ((this.usingActiveXhr = !0), new ActiveXObject('Microsoft.XMLHTTP'))
                                    : new XMLHttpRequest();
                            })();
                            function r() {
                                if (4 === o.readyState) {
                                    var e = 1223 === o.status ? 204 : o.status;
                                    if (e < 100 || e > 599) t(new TypeError('Network request failed'));
                                    else {
                                        var n = {
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
                                            s = 'response' in o ? o.response : o.responseText;
                                        u(new A(s, n));
                                    }
                                }
                            }
                            ('cors' === s.credentials && (o.withCredentials = !0),
                                (o.onreadystatechange = r),
                                self.usingActiveXhr ||
                                    ((o.onload = r),
                                    (o.onerror = function () {
                                        t(new TypeError('Network request failed'));
                                    })),
                                o.open(s.method, s.url, !0),
                                'responseType' in o && e && (o.responseType = 'blob'),
                                s.headers.forEach(function (e, u) {
                                    u.forEach(function (u) {
                                        o.setRequestHeader(e, u);
                                    });
                                }),
                                o.send(void 0 === s._bodyInit ? null : s._bodyInit));
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
        function o(e) {
            return ('string' != typeof e && (e = e.toString()), e);
        }
        function r(e) {
            this.map = {};
            var u = this;
            e instanceof r
                ? e.forEach(function (e, t) {
                      t.forEach(function (t) {
                          u.append(e, t);
                      });
                  })
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                      u.append(t, e[t]);
                  });
        }
        function i(e) {
            if (e.bodyUsed) return fetch.Promise.reject(new TypeError('Already read'));
            e.bodyUsed = !0;
        }
        function a(e) {
            return new fetch.Promise(function (u, t) {
                ((e.onload = function () {
                    u(e.result);
                }),
                    (e.onerror = function () {
                        t(e.error);
                    }));
            });
        }
        function l(e) {
            var u = new FileReader();
            return (u.readAsArrayBuffer(e), a(u));
        }
        function c() {
            return (
                (this.bodyUsed = !1),
                (this._initBody = function (t) {
                    if (((this._bodyInit = t), 'string' == typeof t)) this._bodyText = t;
                    else if (e && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                    else if (u && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                    else {
                        if (t) throw new Error('unsupported BodyInit type');
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
                              u,
                              t = i(this);
                          if (t) return t;
                          if (this._bodyBlob) return ((e = this._bodyBlob), (u = new FileReader()).readAsText(e), a(u));
                          if (this._bodyFormData) throw new Error('could not read FormData body as text');
                          return fetch.Promise.resolve(this._bodyText);
                      }))
                    : (this.text = function () {
                          var e = i(this);
                          return e || fetch.Promise.resolve(this._bodyText);
                      }),
                u &&
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
        function d(e, u) {
            var n, s;
            if (
                ((u = u || {}),
                (this.url = e),
                (this.credentials = u.credentials || 'omit'),
                (this.headers = new r(u.headers)),
                (this.method = ((n = u.method || 'GET'), (s = n.toUpperCase()), t.indexOf(s) > -1 ? s : n)),
                (this.mode = u.mode || null),
                (this.referrer = null),
                ('GET' === this.method || 'HEAD' === this.method) && u.body)
            )
                throw new TypeError('Body not allowed for GET or HEAD requests');
            this._initBody(u.body);
        }
        function E(e) {
            var u = new FormData();
            return (
                e
                    .trim()
                    .split('&')
                    .forEach(function (e) {
                        if (e) {
                            var t = e.split('='),
                                n = t.shift().replace(/\+/g, ' '),
                                s = t.join('=').replace(/\+/g, ' ');
                            u.append(decodeURIComponent(n), decodeURIComponent(s));
                        }
                    }),
                u
            );
        }
        function m(e) {
            var u = new r();
            return (
                e
                    .getAllResponseHeaders()
                    .trim()
                    .split('\n')
                    .forEach(function (e) {
                        var t = e.trim().split(':'),
                            n = t.shift().trim(),
                            s = t.join(':').trim();
                        u.append(n, s);
                    }),
                u
            );
        }
        function A(e, u) {
            (u || (u = {}),
                this._initBody(e),
                (this.type = 'default'),
                (this.url = null),
                (this.status = u.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = u.statusText),
                (this.headers = u.headers instanceof r ? u.headers : new r(u.headers)),
                (this.url = u.url || ''));
        }
    })());
const keyCodes = {
    NONE: -1,
    ALT: 18,
    ALT_GRAPH: 165,
    ALT_GRAPH_EU: 164,
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
    KEY_N: 78,
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
function map(e, u) {
    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
}
const ROMAN_FORBIDDEN_LANGUAGE_CODES$1 = ['ko', 'no'];
function int(e, u) {
    return Math.floor(Math.random() * (u - e + 1)) + e;
}
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
        const u = this.items.indexOf(e);
        return -1 !== u && (this.items.splice(u, 1), !0);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    toArray() {
        return this.items.slice();
    }
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
function generateMediaClasses(e, u) {
    const t = u['width' === e ? 'height' : 'width'],
        n = new Set(u[e].classes),
        s = new Set(t.classes.filter((e) => !(!e.endsWith('Width') && !e.endsWith('Height')) || n.has(e)));
    return Array.from(new Set([...n, ...s])).join(' ');
}
function calculateMedia(e, u, t) {
    const n = BREAKPOINTS.reduce(
            (t, n) => (
                n.width <= e &&
                    (t.width.classes.push(n.className, `${n.className}Width`),
                    t.width.names.push(n.name),
                    (t.width.weight += 1)),
                n.height <= u &&
                    (t.height.classes.push(n.className, `${n.className}Height`),
                    t.height.names.push(n.name),
                    (t.height.weight += 1)),
                t
            ),
            { width: { classes: [], names: [], weight: 0 }, height: { classes: [], names: [], weight: 0 } },
        ),
        s = n.width.weight <= n.height.weight ? 'width' : 'height',
        o = n[s],
        r = o.names[o.names.length - 1] ?? breakpoints.extraSmall,
        i = breakpointsByType[r],
        a = n.width.names,
        l = n.height.names,
        c = a[a.length - 1] ?? breakpoints.extraSmall,
        d = l[l.length - 1] ?? breakpoints.extraSmall,
        E = { width: breakpointsByType[c].width, height: breakpointsByType[d].height };
    return {
        mediaClass: generateMediaClasses(s, n),
        breakpoint: i,
        screenWidthRem: e,
        screenHeightRem: u,
        breaks: o.names,
        sides: E,
        mediaSize: i.width,
        mediaWidth: E.width,
        mediaHeight: E.height,
        upscale: t > 1,
    };
}
const getScale$1 = () => remToPx$1(1),
    calcMediaState = () => {
        const e = getSize$2('rem');
        return calculateMedia(e.width, e.height, getScale$1());
    };
function MediaProvider({ children: e }) {
    const [u, t] = reactExports.useState(calcMediaState);
    return (
        reactExports.useLayoutEffect(() => {
            function e() {
                t(calcMediaState);
            }
            e();
            const u = onResize$1(e),
                n = onRescale(e);
            return () => {
                (u(), n());
            };
        }, []),
        jsxRuntimeExports.jsx(MediaContext.Provider, { value: u, children: e })
    );
}
function useMedia() {
    return useMediaContext();
}
function MediaWrapperElement({ children: e, className: u, ...t }) {
    const { mediaClass: n, upscale: s } = useMedia();
    return jsxRuntimeExports.jsx('div', {
        className: classNames(u, 'media-wrapper', n, s && 'media-upscale'),
        ...t,
        children: e,
    });
}
function MediaWrapper({ children: e, ...u }) {
    return jsxRuntimeExports.jsx(MediaProvider, {
        children: jsxRuntimeExports.jsx(MediaWrapperElement, { ...u, children: e }),
    });
}
const STATIC_DEPS = [];
function useEvent(e) {
    const u = reactExports.useRef(e);
    return (
        reactExports.useLayoutEffect(() => {
            u.current = e;
        }),
        reactExports.useCallback((...e) => (0, u.current)(...e), STATIC_DEPS)
    );
}
const createApi = () => {
        const e = new Map();
        function u(u) {
            const t = e.get(u);
            if (t) return t;
            const n = new Stack();
            return (e.set(u, n), n);
        }
        function t(u, t) {
            const n = e.get(u);
            return !!n && n.remove(t);
        }
        return {
            handlers: e,
            obtain: u,
            register: function (e, n) {
                if (e === keyCodes.NONE) return constFalse;
                const s = u(e);
                return (s.includes(n) || s.push(n), () => t(e, n));
            },
            unregister: t,
            takeCurrent: function (u) {
                const t = e.get(u);
                if (!t) return;
                const n = t.peek();
                return n || void 0;
            },
        };
    },
    Context = reactExports.createContext(void 0);
function useApi() {
    const e = reactExports.useContext(Context);
    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
    return e;
}
function useHandleKey(e, u, t, n) {
    const s = useEvent((e) => {
            isEventHandled$1() || (t(e), setEventHandled$1());
        }),
        o = useApi(),
        r = reactExports.useMemo(() => o[u].register(e, s), [o, u, e, s]);
    reactExports.useEffect(() => r, [r]);
}
function useHandleKeydown(e, u, t) {
    return useHandleKey(e, 'keydown', u);
}
function Provider(e) {
    const u = reactExports.useMemo(createApi, []),
        t = reactExports.useMemo(createApi, []);
    reactExports.useEffect(() => {
        function e(e) {
            const t = u.takeCurrent(e.keyCode);
            t && t(e);
        }
        function n(e) {
            const u = t.takeCurrent(e.keyCode);
            u && u(e);
        }
        return (
            window.addEventListener('keydown', e),
            window.addEventListener('keyup', n),
            () => {
                (window.removeEventListener('keydown', e), window.removeEventListener('keyup', n));
            }
        );
    }, [u, t]);
    const n = reactExports.useMemo(
        () => ({
            keydown: { register: u.register, unregister: u.unregister },
            keyup: { register: t.register, unregister: t.unregister },
        }),
        [u, t],
    );
    return jsxRuntimeExports.jsx(Context.Provider, { value: n, children: e.children });
}
const defaultCallback = (e) => {
    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
};
function useKeydownListener(e = keyCodes.ESCAPE, u = defaultCallback, t = !1) {
    reactExports.useEffect(() => {
        if (e !== keyCodes.NONE)
            return (
                window.addEventListener('keydown', n, t),
                () => {
                    window.removeEventListener('keydown', n, t);
                }
            );
        function n(n) {
            if (n.keyCode === e) {
                if (isEventHandled$1()) return;
                (u(n), setEventHandled$1(), t && n.stopPropagation());
            }
        }
    }, [u, e, t]);
}
function useCallbackOnEsc(e) {
    useHandleKeydown(keyCodes.ESCAPE, e);
}
reactExports.createContext(null);
const nonConvertingTypes = new Set(['number', 'string', 'boolean', 'bigint', 'undefined', 'function']),
    primitives = new Set(['number', 'string', 'boolean', 'bigint']),
    bindingsForbidden = new Set(['Dict']);
function cloneModel(e, { shallow: u = !0, depth: t = 0, maxDepth: n = 32 } = {}) {
    var s, o;
    const r = e,
        i = typeof e;
    if (t > n) throw new Error(`Too deeply nested to copy. Max is ${n}.`);
    if (nonConvertingTypes.has(i)) return r;
    if (null === r) return r;
    const a = { depth: t + 1, maxDepth: n };
    if (Array.isArray(r)) return r.map((e) => cloneModel(e, a));
    if ('object' === i) {
        const n = (null == (s = r.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
        if (Array.isArray(e)) return e.map((e) => cloneModel(e, a));
        if ('CoherentArrayProxy' === n) return e.map((e) => cloneModel(e.value, a));
        if ('Dict' === n) return;
        if ('UNKNOWN' === n) return;
        if (n.includes(':ViewModel:') || 'Object' === n) {
            if (u && 0 === t) {
                const e = {};
                for (const u in r) {
                    const t = r[u];
                    primitives.has(typeof t) && (e[u] = t);
                }
                return e;
            }
            {
                const e = {};
                for (const u in r) {
                    const t = r[u],
                        n = (null == (o = null == r ? void 0 : r.constructor) ? void 0 : o.name) ?? 'UNKNOWN';
                    bindingsForbidden.has(n) || (e[u] = cloneModel(t, a));
                }
                return e;
            }
        }
        const i = {};
        for (const e of Object.keys(r)) i[e] = cloneModel(r[e], a);
        return i;
    }
    return (console.error('Incorrect value to clone model', r), r);
}
const MOBX_OPTIONS = { deep: !1, equals: constFalse },
    DEFAULT_OPTIONS = { cloneItem: !0 },
    CLONE_OPTIONS = { shallow: !1 };
class DLDict {
    constructor(e, u = DEFAULT_OPTIONS) {
        (__publicField(this, '_data'),
            __publicField(this, '_keys'),
            __publicField(
                this,
                'set',
                action((e) => {
                    this._data.set(e);
                }),
            ),
            (this.options = u));
        const t = {},
            n = e.keys();
        for (let s = 0; s < n.length; s++) {
            const u = n[s];
            t[u] = observable.box(this.takeItem(e, u), MOBX_OPTIONS);
        }
        ((this._keys = observable.set(new Set(n))), (this._data = observable.box(t, MOBX_OPTIONS)));
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
    update(e, u) {
        const t = this._data.get();
        for (let n = 0; n < u.length; n++) {
            const s = u[n],
                o = this.takeItem(e, s);
            s in t
                ? null === o
                    ? (delete t[s], this._keys.delete(s), this.set(t))
                    : t[s].set(o)
                : null !== o && ((t[s] = observable.box(o, MOBX_OPTIONS)), this._keys.add(s), this.set(t));
        }
    }
    entries() {
        return Object.entries(this._data.get());
    }
    values() {
        return Object.values(this._data.get());
    }
    get(e) {
        const u = this.untrackedData()[e];
        if (u) return u.get();
        this._data.get();
    }
    unsafeGet(e) {
        const u = this.get(e);
        if (void 0 === u) throw new Error(`Can't resolve ${e} in DLDict`);
        return u;
    }
    mapKeys(e) {
        const u = [];
        for (const t of this.keys.values()) u.push(e(t));
        return u;
    }
    map(e) {
        const u = [],
            t = this._data.get();
        for (const n of this.keys.values()) u.push(e(t[n].get(), n));
        return u;
    }
    reduce(e, u) {
        let t = u;
        const n = this._data.get();
        for (const s of this.keys.values()) t = e(t, n[s].get(), s);
        return t;
    }
    takeItem(e, u) {
        const t = e.get(u);
        return this.options.cloneItem ? cloneModel(t, CLONE_OPTIONS) : t;
    }
    untrackedData() {
        return untracked(() => this._data.get());
    }
}
const mockContext = reactExports.createContext({ mode: 'real' }),
    useMockContext = () => reactExports.useContext(mockContext),
    DEFAULT_BOX_CONFIG = { equals: constFalse, deep: !1 };
function createObservableModel(e, u, t) {
    const n = [];
    e.events.subscribersNotified.on(
        action(() => {
            for (const e of n) e();
            n.splice(0, n.length);
        }),
    );
    const s = (s, o, r = DEFAULT_BOX_CONFIG) => {
            const i = observable.box(s(t(o)), r);
            return ('real' === u && e.subscribe((e) => n.push(() => i.set(s(e))), o), i);
        },
        o = (s, o) => {
            const r = new DLDict(t(s), o);
            return ('real' === u && e.subscribe((e, u) => n.push(() => r.update(e, u)), s), r);
        },
        r = (s, o) => {
            const r = observable.box(t(s) ?? o, DEFAULT_BOX_CONFIG);
            return ('real' === u && e.subscribe((e) => n.push(() => r.set(e)), s), r);
        };
    return {
        dict: o,
        dictRef: (e, u) => o(e, { cloneItem: !1, ...u }),
        arrayClone: (e) => s(cloneModel, e),
        array: r,
        object: r,
        transform: s,
        primitives: (s, o) => {
            const r = t(o);
            if (Array.isArray(s)) {
                const t = s.reduce((e, u) => ((e[u] = observable.box(r[u], {})), e), {});
                return (
                    'real' === u &&
                        e.subscribe((e) => {
                            n.push(() =>
                                s.forEach((u) => {
                                    t[u].set(e[u]);
                                }),
                            );
                        }, o),
                    t
                );
            }
            {
                const t = s,
                    i = Object.entries(t),
                    a = i.reduce((e, [u, t]) => ((e[t] = observable.box(r[u], {})), e), {});
                return (
                    'real' === u &&
                        e.subscribe((e) => {
                            n.push(() =>
                                i.forEach(([u, t]) => {
                                    a[t].set(e[u]);
                                }),
                            );
                        }, o),
                    a
                );
            }
        },
    };
}
const initializeModelWithContext =
        (e = 'DataLayerProvider') =>
        (u, t, n) => {
            const s = reactExports.createContext(null);
            function o(o) {
                var r;
                const { mode: i, options: a, children: l, mocks: c } = o,
                    d = useMockContext(),
                    E = i ?? d.mode,
                    m = c ?? d.mocks,
                    A = reactExports.useRef([]),
                    p = null == (r = null == n ? void 0 : n.useRequires) ? void 0 : r.call(n),
                    F = useEvent((s, r, i) => {
                        var a;
                        const l = 'real' !== s && i ? createMockInstance(i.getter, r) : create(r, { name: e }),
                            c = (e) => ('mocks' === s ? (null == i ? void 0 : i.getter(e, r)) : l.readByPath(e)),
                            d = (e) => A.current.push(e),
                            E = 'initial' in o && {
                                initial: null == (a = null == n ? void 0 : n.initial) ? void 0 : a.call(n, o.initial),
                            },
                            m = u({
                                ...E,
                                mode: s,
                                readByPath: c,
                                requires: p,
                                externalModel: l,
                                observableModel: createObservableModel(l, s, c),
                                cleanup: d,
                            }),
                            F = { ...E, mode: s, model: m, externalModel: l, cleanup: d, requires: p },
                            D = 'mocks' === s && (null == i ? void 0 : i.controls) ? i.controls(F) : {};
                        return {
                            model: m,
                            controls: { ...(null == t ? void 0 : t(F)), ...D },
                            externalModel: l,
                            mode: s,
                        };
                    }),
                    D = reactExports.useRef(!1),
                    [g, _] = reactExports.useState(E);
                reactExports.useEffect(() => {
                    _(E);
                }, [E]);
                const [B, h] = reactExports.useState(() => F(g, a, m));
                return (
                    reactExports.useEffect(() => {
                        D.current ? h(F(g, a, m)) : (D.current = !0);
                    }, [
                        F,
                        m,
                        g,
                        null == a ? void 0 : a.context,
                        null == a ? void 0 : a.initializer,
                        null == a ? void 0 : a.getRoot,
                        null == a ? void 0 : a.rootId,
                    ]),
                    reactExports.useEffect(
                        () => () => {
                            (B.externalModel.dispose(), A.current.forEach((e) => e()));
                        },
                        [B],
                    ),
                    jsxRuntimeExports.jsx(s.Provider, { value: B, children: l })
                );
            }
            return (
                (o.displayName = e),
                [
                    o,
                    function () {
                        const e = reactExports.useContext(s);
                        if (!e) throw new Error(`hook useModel must be used within a ${o.displayName}.`);
                        return e;
                    },
                    { Context: s },
                ]
            );
        },
    assignRef = (e, u) => {
        e && ('function' == typeof e ? e(u) : (e.current = u));
    },
    assignRefs = (e) => (u) => {
        e.forEach((e) => assignRef(e, u));
    };
function injectShowModel() {
    const e = (u = window.model, { depth: t = 16, convertArrays: n = !0 } = {}) => {
        var s;
        if (t < 0)
            return (
                console.warn(
                    'Depth limit has been reached.\n                You can change the limit with second argument.\n                Use _showModel(model, { depth = <number> }) for this. 16 is default.',
                ),
                'Depth limit has been reached'
            );
        if (null === u) return null;
        switch (typeof u) {
            case 'number':
            case 'string':
            case 'boolean':
            case 'bigint':
            case 'undefined':
                return u;
            case 'function':
                return 'function';
            case 'object': {
                const o = { depth: t - 1, convertArrays: n },
                    r = (null == (s = u.constructor) ? void 0 : s.name) ?? 'UNKNOWN';
                switch (!0) {
                    case r.includes('CoherentArrayProxy'):
                        return [...u.values()].map((u) => e(o.convertArrays ? u.value : u, o));
                    case 'Dict' === r:
                        return [...u.entries()].reduce((u, [t, n]) => ((u[t] = e(n, o)), u), { $$type: 'Dict' });
                    case 'UNKNOWN' === r:
                        return 'UNKNOWN_TYPE';
                    case r.includes('ViewModel'):
                    default: {
                        const t = {};
                        for (const n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = e(u[n], o));
                        return t;
                    }
                }
            }
            default:
                return `Unknown: ${String(u)}`;
        }
    };
    window._showModel = e;
    const u = {
        subViews: function () {
            const u = {};
            for (const t of window.subViews.ids()) {
                const n = window.subViews.get(t);
                u[t] = {
                    id: t,
                    uid: n.uid,
                    path: n.path,
                    get model() {
                        return e(n.model);
                    },
                };
            }
            return u;
        },
        showModel: e,
        showModelById: (u) => e(window.subViews.get(u).model),
    };
    window._debugs = u;
}
async function runView(e, { root: u = document.getElementById('root'), withMedia: t = !0, fullScreen: n = !1 } = {}) {
    var s;
    injectShowModel();
    const o = t ? MediaWrapper : React.Fragment,
        r = (null == (s = null == window ? void 0 : window.engine) ? void 0 : s.whenReady) ?? Promise.resolve();
    (await r,
        document.documentElement.setAttribute('lang', resources.resolve('langCode')),
        client$1
            .createRoot(u)
            .render(jsxRuntimeExports.jsx(o, { children: jsxRuntimeExports.jsx(Provider, { children: e }) })),
        n && (initExternalPaddings$1(u), enableFullScreenModeSupported$1()));
}
reactExports.forwardRef(function (e, u) {
    const t = reactExports.useRef(null);
    return (
        reactExports.useEffect(() => {
            const e = t.current;
            if (null !== e)
                return events$2.onHitTest((u) => {
                    const t = e.getBoundingClientRect();
                    return t.left <= u.x && u.x <= t.right && t.top <= u.y && u.y <= t.bottom;
                });
        }, []),
        jsxRuntimeExports.jsx('div', { ...e, ref: assignRefs([u, t]) })
    );
});
const useResizeObserver = (e, u, t = !0) => {
        const n = reactExports.useCallback(
            (e) => {
                const t = e[0];
                u && u(t);
            },
            [u],
        );
        reactExports.useEffect(() => {
            if (!e.current || !t) return;
            const u = new index((e) => n(e));
            return (
                u.observe(e.current),
                () => {
                    u.disconnect();
                }
            );
        }, [n, t, e]);
    },
    getFromCallStack = (e = 1) => {
        var u;
        const t = new Error().stack;
        let n,
            s = R.invalid('resId'),
            o = '';
        return (
            t &&
                ((o = (null == (u = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : u[0]) || ''),
                (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                window.__feature && window.__feature !== n && window.subViews[n] && (s = window.subViews[n].id)),
            { callerUrl: o, caller: n, stack: t, resId: s }
        );
    };
let ClickOutsideManager$1 =
    ((_a = class {
        constructor() {
            (__publicField(this, 'entries', []),
                __publicField(this, '_listenMouse', !1),
                __publicField(this, 'onMouseDown', (e) => {
                    this.entries.forEach(({ container: u, callback: t }) => {
                        let n = e.target;
                        do {
                            if (n === u) return;
                            n = n.parentNode;
                        } while (n);
                        t();
                    });
                }));
        }
        static get instance() {
            return (_a.__instance || (_a.__instance = new _a()), _a.__instance);
        }
        register(e, u) {
            (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
        }
        unregister(e, u) {
            const t = e,
                n = u;
            ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
    return (u) => (
        engine.on(e, u),
        () => {
            engine.off(e, u);
        }
    );
}
function setTrackMouseOutside(e) {
    viewEnv.setTrackMouseOnStage(e);
}
const onResize = makeEngineEvent('clientResized'),
    onScaleUpdated = makeEngineEvent('self.onScaleUpdated'),
    on = (e, u) => engine.on(e, u),
    off = (e, u) => engine.off(e, u),
    internalMouse = {
        down: makeEngineEvent('mousedown'),
        up: makeEngineEvent('mouseup'),
        move: makeEngineEvent('mousemove'),
    };
function initMouseEvents() {
    const e = { listeners: 0, enabled: !0, initialized: !1 };
    function u() {
        e.enabled && setTrackMouseOutside(!1);
    }
    function t() {
        e.enabled && setTrackMouseOutside(!0);
    }
    function n() {
        e.enabled
            ? e.listeners < 1
                ? ((e.initialized = !1),
                  document.body.removeEventListener('mouseenter', u),
                  document.body.removeEventListener('mouseleave', t))
                : e.initialized ||
                  ((e.initialized = !0),
                  document.body.addEventListener('mouseenter', u),
                  document.body.addEventListener('mouseleave', t))
            : setTrackMouseOutside(!1);
    }
    return {
        ...['down', 'up', 'move'].reduce(
            (u, t) => (
                (u[t] = (function (u) {
                    return (t) => {
                        e.listeners += 1;
                        let s = !0;
                        const o = `mouse${u}`,
                            r = internalMouse[u]((e) => t([e, 'outside']));
                        function i(e) {
                            t([e, 'inside']);
                        }
                        return (
                            window.addEventListener(o, i),
                            n(),
                            () => {
                                s && (r(), window.removeEventListener(o, i), (e.listeners -= 1), n(), (s = !1));
                            }
                        );
                    };
                })(t)),
                u
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
function playSound$1(e) {
    engine.call('PlaySound', e).catch((u) => {
        console.error(`playSound('${e}'): `, u);
    });
}
function setRTPC(e, u) {
    engine.call('SetRTPCGlobal', e, u).catch((t) => {
        console.error(`setRTPC('${e}', '${u}'): `, t);
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
    intl = {
        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
    },
    sounds = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
    plays = Object.keys(sounds).reduce((e, u) => ((e[u] = () => playSound$1(sounds[u])), e), {}),
    play = { ...plays, sound: playSound$1 },
    sound = { play: play, setRTPC: setRTPC },
    ROMAN = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
    ARABIC = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
function arabic2roman$1(e) {
    let u = '';
    for (let t = ARABIC.length - 1; t >= 0; t--) for (; e >= ARABIC[t]; ) ((u += ROMAN[t]), (e -= ARABIC[t]));
    return u;
}
const ROMAN_FORBIDDEN_LANGUAGE_CODES = ['ko', 'no'];
function getTextureUrl(e, u, t = 1) {
    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
}
function getBgUrl(e, u, t) {
    return `url(${getTextureUrl(e, u, t)})`;
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
        Object.entries(e).map(([e, u]) => {
            const t = 'GFValueProxy';
            switch (typeof u) {
                case 'number':
                    return { __Type: t, name: e, number: u };
                case 'boolean':
                    return { __Type: t, name: e, bool: u };
                default:
                    return { __Type: t, name: e, string: u.toString() };
            }
        }),
    sendViewEvent = (e, u) => {
        const t = 'GFViewEventProxy';
        if (void 0 !== u) {
            const { args: n, ...s } = u;
            return void 0 !== n
                ? viewEnv.handleViewEvent({ __Type: t, type: e, ...s, arguments: createViewEventArguments$1(n) })
                : viewEnv.handleViewEvent({ __Type: t, type: e, ...s });
        }
        return viewEnv.handleViewEvent({ __Type: t, type: e });
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
function getBrowserTexturePath(e, u, t, n = 1) {
    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
}
function addModelObserver(e, u, t) {
    return viewEnv.addDataChangedCallback(e, u, t);
}
function setSidePaddingsRem(e) {
    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, ALL_SIDES);
}
function getSize(e = 'px') {
    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
}
function resize(e, u, t = 'px') {
    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
}
function getViewGlobalPosition(e = 'rem') {
    const u = viewEnv.getViewGlobalPositionRem();
    return 'rem' === e ? u : { x: remToPx(u.x), y: remToPx(u.y) };
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
function setAnimateWindow(e, u) {
    viewEnv.setAnimateWindow(e, u);
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
        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === displayStatus[u]), e),
        {},
    ),
    extraSize = {
        set: (e, u) => {
            viewEnv.setExtraSizeRem(e, u);
        },
        get: (e, u) => {
            viewEnv.getExtraSizeRem(e, u);
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
    function u() {
        const { top: u, right: t, bottom: n, left: s } = viewEnv.getExternalPaddingsRem();
        (e.style.setProperty('--external-padding-top', `${u}rem`),
            e.style.setProperty('--external-padding-right', `${t}rem`),
            e.style.setProperty('--external-padding-bottom', `${n}rem`),
            e.style.setProperty('--external-padding-left', `${s}rem`));
    }
    (u(), engine.on('self.onPaddingsUpdated', () => u()));
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
    env = { view: view, client: client, sound: sound, intl: intl },
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
        addCallback(e, u, t = 0, n = !0) {
            void 0 === this._updateHandler &&
                (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
            const s = env.view.addModelObserver(e, t, n);
            return (
                s > 0
                    ? ((this._callbacks[s] = u),
                      t > 0 && (this._views[t] ? this._views[t].push(s) : (this._views[t] = [s])))
                    : console.error("Can't add callback for model:", e),
                s
            );
        }
        removeCallback(e, u = 0) {
            let t = !1;
            return (
                void 0 !== e &&
                    void 0 !== this._callbacks[e] &&
                    ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                t || console.error("Can't remove callback by id:", e),
                t
            );
        }
        _emmitDataChanged(e, u, t) {
            t.forEach((t) => {
                const n = this._callbacks[t];
                void 0 !== n && n(e, u);
            });
        }
    };
__publicField(_DataTracker, '__instance');
let DataTracker = _DataTracker;
function dumpViewModel(e) {
    const u = {};
    if ('object' != typeof e) return e;
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            const n = Object.prototype.toString.call(e[t]);
            if (n.startsWith('[object CoherentArrayProxy]')) {
                const n = e[t];
                u[t] = [];
                for (let e = 0; e < n.length; e++) u[t].push({ value: dumpViewModel(n[e].value) });
            } else n.startsWith('[object class BW::WULF::ViewModel') ? (u[t] = dumpViewModel(e[t])) : (u[t] = e[t]);
        }
    return u;
}
const SystemLocale = {
        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
        toUpperCase: (e) => systemLocale.toUpperCase(e),
        toLowerCase: (e) => systemLocale.toUpperCase(e),
    },
    UserLocale = {
        getNumberFormat: (e) => userLocale.getNumberFormat(e),
        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
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
        Object.entries(e).map(([e, u]) => {
            const t = { __Type: 'GFValueProxy', name: e };
            switch (typeof u) {
                case 'number':
                    t.number = u;
                    break;
                case 'boolean':
                    t.bool = u;
                    break;
                default:
                    t.string = u.toString();
            }
            return t;
        }),
    handleViewEvent$1 = (e, u) => {
        const t = 'GFViewEventProxy';
        if (void 0 !== u) {
            const { args: n, ...s } = u;
            void 0 !== n
                ? viewEnv.handleViewEvent({ __Type: t, type: e, ...s, arguments: createViewEventArguments(n) })
                : viewEnv.handleViewEvent({ __Type: t, type: e, ...s });
        } else viewEnv.handleViewEvent({ __Type: t, type: e });
    },
    sendMoveEvent = (e) => handleViewEvent$1(ViewEventType.MOVE, { isMouseEvent: !0, on: e }),
    sendCloseEvent = () => handleViewEvent$1(ViewEventType.CLOSE),
    sendClosePopOverEvent = () => handleViewEvent$1(ViewEventType.POP_OVER, { on: !1 }),
    sendShowContextMenuEvent = (e, u, t = 0) => {
        handleViewEvent$1(ViewEventType.CONTEXT_MENU, {
            isMouseEvent: !0,
            contentID: e,
            on: !0,
            decoratorID: t,
            args: u,
        });
    },
    sendShowPopOverEvent = (e, u, t, n, s = R.invalid('resId'), o) => {
        const r = env.view.getViewGlobalPosition(),
            { x: i, y: a, width: l, height: c } = t.getBoundingClientRect(),
            d = {
                x: env.view.pxToRem(i) + r.x,
                y: env.view.pxToRem(a) + r.y,
                width: env.view.pxToRem(l),
                height: env.view.pxToRem(c),
            };
        handleViewEvent$1(ViewEventType.POP_OVER, {
            isMouseEvent: !0,
            contentID: e,
            decoratorID: n || R.invalid('resId'),
            targetID: s,
            direction: u,
            bbox: makeGlobalBoundingBox(d),
            on: !0,
            args: o,
        });
    },
    isTooltipShown = () => viewEnv.isWindowShownByViewEvent(ViewEventType.TOOLTIP),
    isContextMenuShown = () => viewEnv.isWindowShownByViewEvent(ViewEventType.CONTEXT_MENU),
    isPopOverShown = () => viewEnv.isWindowShownByViewEvent(ViewEventType.POP_OVER),
    callOnEsc = (e, u) => {
        e.keyCode === KEY_CODES.ESCAPE && u();
    },
    closeOnEsc = (e) => {
        callOnEsc(e, sendCloseEvent);
    },
    addEscapeListener = (e) => {
        const u = (u) => callOnEsc(u, e);
        return (window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u));
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
    return Object.entries(e || {}).map(([e, u]) => {
        const t = { __Type: 'GFValueProxy', name: e };
        switch (typeof u) {
            case 'number':
                t.number = u;
                break;
            case 'boolean':
                t.bool = u;
                break;
            case 'undefined':
                break;
            default:
                t.string = u.toString();
        }
        return t;
    });
}
const handleViewEvent = (e, u, t = {}, n = 0) => {
        viewEnv.handleViewEvent({
            __Type: 'GFViewEventProxy',
            type: ViewEventType.TOOLTIP,
            contentID: e,
            decoratorID: u,
            targetID: n,
            ...t,
        });
    },
    Tooltip = ({
        children: e,
        contentId: u,
        args: t,
        onMouseEnter: n,
        onMouseLeave: s,
        onMouseDown: o,
        onClick: r,
        ignoreShowDelay: i = !1,
        ignoreMouseClick: a = !1,
        decoratorId: l = 0,
        isEnabled: c = !0,
        targetId: d = 0,
        onShow: E,
        onHide: m,
        ...A
    }) => {
        const p = reactExports.useRef({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
            F = reactExports.useMemo(() => d || getFromCallStack().resId, [d]),
            D = reactExports.useCallback(() => {
                (p.current.isVisible && p.current.timeoutId) ||
                    (handleViewEvent(u, l, { isMouseEvent: !0, on: !0, arguments: getViewEventArguments(t) }, F),
                    E && E(),
                    (p.current.isVisible = !0));
            }, [u, l, t, F, E]),
            g = reactExports.useCallback(() => {
                if (p.current.isVisible || p.current.timeoutId) {
                    const e = p.current.timeoutId;
                    (e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                        handleViewEvent(u, l, { on: !1 }, F),
                        p.current.isVisible && m && m(),
                        (p.current.isVisible = !1));
                }
            }, [u, l, F, m]),
            _ = reactExports.useCallback((e) => {
                p.current.isVisible &&
                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                    (p.current.hideTimerId = window.setTimeout(() => {
                        const u = document.elementFromPoint(e.clientX, e.clientY);
                        u && !u.isSameNode(p.current.prevTarget) && g();
                    }, 200)));
            }, []);
        (reactExports.useEffect(() => {
            const e = p.current.hideTimerId;
            return (
                document.addEventListener('wheel', _, { capture: !0 }),
                () => {
                    (document.removeEventListener('wheel', _, { capture: !0 }), e && window.clearTimeout(e));
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
                      ((B = e.props.onMouseEnter),
                      (e) => {
                          (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                              (clearTimeout(p.current.timeoutId),
                              (p.current.timeoutId = window.setTimeout(D, i ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT)),
                              n && n(e),
                              B && B(e));
                      }),
                  onMouseLeave: ((e) => (u) => {
                      (g(), null == s || s(u), null == e || e(u));
                  })(e.props.onMouseLeave),
                  onClick: ((e) => (u) => {
                      (!1 === a && g(), null == r || r(u), null == e || e(u));
                  })(e.props.onClick),
                  onMouseDown: ((e) => (u) => {
                      (!1 === a && g(), null == o || o(u), null == e || e(u));
                  })(e.props.onMouseDown),
                  ...A,
              })
            : e;
        var B;
    },
    BackportTooltip = ({ children: e, ...u }) =>
        jsxRuntimeExports.jsx(Tooltip, {
            contentId: R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
            ignoreShowDelay: !0,
            ...u,
            children: e,
        }),
    UB_SIMPLE_TOOLTIPS = R.views.common.tooltip_window.simple_tooltip_content,
    getTooltipContentId = (e) =>
        e ? UB_SIMPLE_TOOLTIPS.SimpleTooltipHtmlContent('resId') : UB_SIMPLE_TOOLTIPS.SimpleTooltipContent('resId'),
    SimpleTooltip = ({ children: e, body: u, header: t, note: n, alert: s, args: o, ...r }) => {
        const i = reactExports.useMemo(() => {
            const e = { ...o, body: u, header: t, note: n, alert: s };
            for (const u in e) void 0 === e[u] && delete e[u];
            return e;
        }, [s, u, t, n, o]);
        return jsxRuntimeExports.jsx(Tooltip, {
            contentId: getTooltipContentId(null == o ? void 0 : o.hasHtmlContent),
            decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
            args: i,
            ...r,
            children: e,
        });
    },
    DynamicTooltipWrapper = ({ children: e, tooltipArgs: u, className: t }) => {
        if (!u) return e;
        const n = jsxRuntimeExports.jsx('div', { className: t, children: e });
        if (u.header || u.body) return jsxRuntimeExports.jsx(SimpleTooltip, { ...u, children: n });
        const { contentId: s } = u;
        return s
            ? jsxRuntimeExports.jsx(Tooltip, { ...u, contentId: s, children: n })
            : jsxRuntimeExports.jsx(BackportTooltip, { ...u, children: n });
    };
var Alignment$1 = ((e) => ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e))(Alignment$1 || {});
function format(e, u) {
    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
}
function formatPrintf(e, u) {
    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
        const t = 0 === e.indexOf('%') ? 2 : 1;
        return String(u[e.slice(t, -t)]);
    });
}
const convertNbsp = (e) => e.replace(/&nbsp;/g, ' '),
    convertZwnbsp = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
    addSeparatorToRight = (e, u, t) => {
        if (t % 2) {
            const t = e.pop();
            return [...e, t + u];
        }
        return [...e, u];
    },
    addSeparatorToLeft = (e, u, t) => {
        if (0 === t) return [u];
        if (t % 2) return [...e, ' ' === u ? ' ' : u];
        {
            const t = e.pop();
            return [...e, t + u];
        }
    },
    splitAndFormat = (e, u, t = 0) => e.split(u).reduce(0 === t ? addSeparatorToRight : addSeparatorToLeft, []),
    splitEuropean = (e, u = 0) => {
        let t = [];
        const n = new RegExp(
                '(?<=[a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10D0-\\u10FA\\u10FD-\\u10FF\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7F6\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB68\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u{10428}-\\u{1044F}\\u{104D8}-\\u{104FB}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{10CC0}-\\u{10CF2}\\u{118C0}-\\u{118DF}\\u{16E60}-\\u{16E7F}\\u{1D41A}-\\u{1D433}\\u{1D44E}-\\u{1D454}\\u{1D456}-\\u{1D467}\\u{1D482}-\\u{1D49B}\\u{1D4B6}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D4CF}\\u{1D4EA}-\\u{1D503}\\u{1D51E}-\\u{1D537}\\u{1D552}-\\u{1D56B}\\u{1D586}-\\u{1D59F}\\u{1D5BA}-\\u{1D5D3}\\u{1D5EE}-\\u{1D607}\\u{1D622}-\\u{1D63B}\\u{1D656}-\\u{1D66F}\\u{1D68A}-\\u{1D6A5}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6E1}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D71B}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D755}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D78F}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7C9}\\u{1D7CB}\\u{1DF00}-\\u{1DF09}\\u{1DF0B}-\\u{1DF1E}\\u{1E922}-\\u{1E943}])(\\x2D)(?=[a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F-\\u0293\\u0295-\\u02AF\\u0371\\u0373\\u0377\\u037B-\\u037D\\u0390\\u03AC-\\u03CE\\u03D0\\u03D1\\u03D5-\\u03D7\\u03D9\\u03DB\\u03DD\\u03DF\\u03E1\\u03E3\\u03E5\\u03E7\\u03E9\\u03EB\\u03ED\\u03EF-\\u03F3\\u03F5\\u03F8\\u03FB\\u03FC\\u0430-\\u045F\\u0461\\u0463\\u0465\\u0467\\u0469\\u046B\\u046D\\u046F\\u0471\\u0473\\u0475\\u0477\\u0479\\u047B\\u047D\\u047F\\u0481\\u048B\\u048D\\u048F\\u0491\\u0493\\u0495\\u0497\\u0499\\u049B\\u049D\\u049F\\u04A1\\u04A3\\u04A5\\u04A7\\u04A9\\u04AB\\u04AD\\u04AF\\u04B1\\u04B3\\u04B5\\u04B7\\u04B9\\u04BB\\u04BD\\u04BF\\u04C2\\u04C4\\u04C6\\u04C8\\u04CA\\u04CC\\u04CE\\u04CF\\u04D1\\u04D3\\u04D5\\u04D7\\u04D9\\u04DB\\u04DD\\u04DF\\u04E1\\u04E3\\u04E5\\u04E7\\u04E9\\u04EB\\u04ED\\u04EF\\u04F1\\u04F3\\u04F5\\u04F7\\u04F9\\u04FB\\u04FD\\u04FF\\u0501\\u0503\\u0505\\u0507\\u0509\\u050B\\u050D\\u050F\\u0511\\u0513\\u0515\\u0517\\u0519\\u051B\\u051D\\u051F\\u0521\\u0523\\u0525\\u0527\\u0529\\u052B\\u052D\\u052F\\u0560-\\u0588\\u10D0-\\u10FA\\u10FD-\\u10FF\\u13F8-\\u13FD\\u1C80-\\u1C88\\u1D00-\\u1D2B\\u1D6B-\\u1D77\\u1D79-\\u1D9A\\u1E01\\u1E03\\u1E05\\u1E07\\u1E09\\u1E0B\\u1E0D\\u1E0F\\u1E11\\u1E13\\u1E15\\u1E17\\u1E19\\u1E1B\\u1E1D\\u1E1F\\u1E21\\u1E23\\u1E25\\u1E27\\u1E29\\u1E2B\\u1E2D\\u1E2F\\u1E31\\u1E33\\u1E35\\u1E37\\u1E39\\u1E3B\\u1E3D\\u1E3F\\u1E41\\u1E43\\u1E45\\u1E47\\u1E49\\u1E4B\\u1E4D\\u1E4F\\u1E51\\u1E53\\u1E55\\u1E57\\u1E59\\u1E5B\\u1E5D\\u1E5F\\u1E61\\u1E63\\u1E65\\u1E67\\u1E69\\u1E6B\\u1E6D\\u1E6F\\u1E71\\u1E73\\u1E75\\u1E77\\u1E79\\u1E7B\\u1E7D\\u1E7F\\u1E81\\u1E83\\u1E85\\u1E87\\u1E89\\u1E8B\\u1E8D\\u1E8F\\u1E91\\u1E93\\u1E95-\\u1E9D\\u1E9F\\u1EA1\\u1EA3\\u1EA5\\u1EA7\\u1EA9\\u1EAB\\u1EAD\\u1EAF\\u1EB1\\u1EB3\\u1EB5\\u1EB7\\u1EB9\\u1EBB\\u1EBD\\u1EBF\\u1EC1\\u1EC3\\u1EC5\\u1EC7\\u1EC9\\u1ECB\\u1ECD\\u1ECF\\u1ED1\\u1ED3\\u1ED5\\u1ED7\\u1ED9\\u1EDB\\u1EDD\\u1EDF\\u1EE1\\u1EE3\\u1EE5\\u1EE7\\u1EE9\\u1EEB\\u1EED\\u1EEF\\u1EF1\\u1EF3\\u1EF5\\u1EF7\\u1EF9\\u1EFB\\u1EFD\\u1EFF-\\u1F07\\u1F10-\\u1F15\\u1F20-\\u1F27\\u1F30-\\u1F37\\u1F40-\\u1F45\\u1F50-\\u1F57\\u1F60-\\u1F67\\u1F70-\\u1F7D\\u1F80-\\u1F87\\u1F90-\\u1F97\\u1FA0-\\u1FA7\\u1FB0-\\u1FB4\\u1FB6\\u1FB7\\u1FBE\\u1FC2-\\u1FC4\\u1FC6\\u1FC7\\u1FD0-\\u1FD3\\u1FD6\\u1FD7\\u1FE0-\\u1FE7\\u1FF2-\\u1FF4\\u1FF6\\u1FF7\\u210A\\u210E\\u210F\\u2113\\u212F\\u2134\\u2139\\u213C\\u213D\\u2146-\\u2149\\u214E\\u2184\\u2C30-\\u2C5F\\u2C61\\u2C65\\u2C66\\u2C68\\u2C6A\\u2C6C\\u2C71\\u2C73\\u2C74\\u2C76-\\u2C7B\\u2C81\\u2C83\\u2C85\\u2C87\\u2C89\\u2C8B\\u2C8D\\u2C8F\\u2C91\\u2C93\\u2C95\\u2C97\\u2C99\\u2C9B\\u2C9D\\u2C9F\\u2CA1\\u2CA3\\u2CA5\\u2CA7\\u2CA9\\u2CAB\\u2CAD\\u2CAF\\u2CB1\\u2CB3\\u2CB5\\u2CB7\\u2CB9\\u2CBB\\u2CBD\\u2CBF\\u2CC1\\u2CC3\\u2CC5\\u2CC7\\u2CC9\\u2CCB\\u2CCD\\u2CCF\\u2CD1\\u2CD3\\u2CD5\\u2CD7\\u2CD9\\u2CDB\\u2CDD\\u2CDF\\u2CE1\\u2CE3\\u2CE4\\u2CEC\\u2CEE\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\uA641\\uA643\\uA645\\uA647\\uA649\\uA64B\\uA64D\\uA64F\\uA651\\uA653\\uA655\\uA657\\uA659\\uA65B\\uA65D\\uA65F\\uA661\\uA663\\uA665\\uA667\\uA669\\uA66B\\uA66D\\uA681\\uA683\\uA685\\uA687\\uA689\\uA68B\\uA68D\\uA68F\\uA691\\uA693\\uA695\\uA697\\uA699\\uA69B\\uA723\\uA725\\uA727\\uA729\\uA72B\\uA72D\\uA72F-\\uA731\\uA733\\uA735\\uA737\\uA739\\uA73B\\uA73D\\uA73F\\uA741\\uA743\\uA745\\uA747\\uA749\\uA74B\\uA74D\\uA74F\\uA751\\uA753\\uA755\\uA757\\uA759\\uA75B\\uA75D\\uA75F\\uA761\\uA763\\uA765\\uA767\\uA769\\uA76B\\uA76D\\uA76F\\uA771-\\uA778\\uA77A\\uA77C\\uA77F\\uA781\\uA783\\uA785\\uA787\\uA78C\\uA78E\\uA791\\uA793-\\uA795\\uA797\\uA799\\uA79B\\uA79D\\uA79F\\uA7A1\\uA7A3\\uA7A5\\uA7A7\\uA7A9\\uA7AF\\uA7B5\\uA7B7\\uA7B9\\uA7BB\\uA7BD\\uA7BF\\uA7C1\\uA7C3\\uA7C8\\uA7CA\\uA7D1\\uA7D3\\uA7D5\\uA7D7\\uA7D9\\uA7F6\\uA7FA\\uAB30-\\uAB5A\\uAB60-\\uAB68\\uAB70-\\uABBF\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFF41-\\uFF5A\\u{10428}-\\u{1044F}\\u{104D8}-\\u{104FB}\\u{10597}-\\u{105A1}\\u{105A3}-\\u{105B1}\\u{105B3}-\\u{105B9}\\u{105BB}\\u{105BC}\\u{10CC0}-\\u{10CF2}\\u{118C0}-\\u{118DF}\\u{16E60}-\\u{16E7F}\\u{1D41A}-\\u{1D433}\\u{1D44E}-\\u{1D454}\\u{1D456}-\\u{1D467}\\u{1D482}-\\u{1D49B}\\u{1D4B6}-\\u{1D4B9}\\u{1D4BB}\\u{1D4BD}-\\u{1D4C3}\\u{1D4C5}-\\u{1D4CF}\\u{1D4EA}-\\u{1D503}\\u{1D51E}-\\u{1D537}\\u{1D552}-\\u{1D56B}\\u{1D586}-\\u{1D59F}\\u{1D5BA}-\\u{1D5D3}\\u{1D5EE}-\\u{1D607}\\u{1D622}-\\u{1D63B}\\u{1D656}-\\u{1D66F}\\u{1D68A}-\\u{1D6A5}\\u{1D6C2}-\\u{1D6DA}\\u{1D6DC}-\\u{1D6E1}\\u{1D6FC}-\\u{1D714}\\u{1D716}-\\u{1D71B}\\u{1D736}-\\u{1D74E}\\u{1D750}-\\u{1D755}\\u{1D770}-\\u{1D788}\\u{1D78A}-\\u{1D78F}\\u{1D7AA}-\\u{1D7C2}\\u{1D7C4}-\\u{1D7C9}\\u{1D7CB}\\u{1DF00}-\\u{1DF09}\\u{1DF0B}-\\u{1DF1E}\\u{1E922}-\\u{1E943}])',
                'gu',
            ),
            s = convertNbsp(e);
        return (splitAndFormat(s, /( )/, u).forEach((e) => (t = t.concat(splitAndFormat(e, n, 0)))), t);
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
        return (u) =>
            u
                .replace(/&nbsp;/g, ' ')
                .replace(/ /g, ' ')
                .match(e);
    })(),
    CHINESE_LANGUAGE_CODES = ['zh_cn', 'zh_sg', 'zh_tw'],
    splitWords$1 = (e, u = 0) => {
        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
        if (CHINESE_LANGUAGE_CODES.includes(t)) return splitChinese(e);
        if ('ja' === t) {
            return loadDefaultJapaneseParser()
                .parse(e)
                .map((e) => convertNbsp(e));
        }
        return splitEuropean(e, u);
    },
    formatString = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : splitWords$1(e, u)));
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
    root$h = 'Colors_root_f72ccf75',
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
        root: root$h,
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
    root$g = 'Renderers_root_1b4c3a4c',
    noBreakWrapper = 'Renderers_noBreakWrapper_bd4985a8',
    lineBreak = 'Renderers_lineBreak_8503dd13',
    newLine = 'Renderers_newLine_9ec86e16',
    word = 'Renderers_word_188ad896',
    styles$g = { root: root$g, noBreakWrapper: noBreakWrapper, lineBreak: lineBreak, newLine: newLine, word: word },
    createStyle = (e) => ({ color: `#${e}` }),
    getWordBlock = ({ elementList: e, textBlock: u, key: t }) => {
        const n = u.colorTag;
        return n
            ? colors[n]
                ? React.createElement(
                      'span',
                      { key: t, 'data-block-type': u.blockType, className: classNames(styles$g.word, colors[n]) },
                      e,
                  )
                : React.createElement(
                      'span',
                      { key: t, 'data-block-type': u.blockType, className: styles$g.word, style: createStyle(n) },
                      e,
                  )
            : React.createElement('span', { key: t, 'data-block-type': u.blockType, className: styles$g.word }, e);
    },
    getLineBreak = ({ key: e }) =>
        React.createElement('span', { key: e, 'data-block-type': BlockType.LineBreak, className: styles$g.lineBreak }),
    getNewLine = ({ elementList: e, key: u }) =>
        React.createElement('span', { key: u, 'data-block-type': BlockType.NewLine, className: styles$g.newLine }, e),
    getNoBreakWrapper = ({ elementList: e, key: u }) =>
        React.createElement(
            'span',
            { key: u, 'data-block-type': BlockType.NoBreakWrapper, className: styles$g.noBreakWrapper },
            e,
        ),
    getBinding = ({ elementList: e, textBlock: u, key: t }) =>
        React.createElement(
            'span',
            { key: t, 'data-block-type': u.blockType },
            e.map((e) => React.createElement(React.Fragment, { key: t }, e)),
        ),
    RENDER_MAP = {
        [BlockType.Word]: getWordBlock,
        [BlockType.NoBreakSymbol]: getWordBlock,
        [BlockType.Binding]: getBinding,
        [BlockType.LineBreak]: getLineBreak,
        [BlockType.NewLine]: getNewLine,
        [BlockType.NoBreakWrapper]: getNoBreakWrapper,
    },
    renderChildList = (e, u, t) => {
        const n = [];
        return (
            e.childList.forEach((s, o) => {
                const r = `${t}_${o}`;
                if (isTextBlock(s)) {
                    const e = s,
                        u = e.blockType,
                        t = RENDER_MAP[u],
                        o = renderChildList(e, t, r);
                    n.push(...o);
                } else n.push(u({ elementList: [s], textBlock: e, key: r }));
            }),
            n
        );
    },
    renderTextBlock = (e, u) => {
        const t = [],
            n = e.blockType,
            s = RENDER_MAP[n],
            o = renderChildList(e, s, u);
        return (
            n === BlockType.NoBreakWrapper ? t.push(s({ elementList: o, textBlock: e, key: `${u}` })) : t.push(...o),
            t
        );
    },
    convertTextBlocksToJsxList = (e) => {
        const u = [];
        return (
            e.forEach((e, t) => {
                u.push(...renderTextBlock(e, t));
            }),
            u
        );
    },
    split = (e, u, t, n) => {
        let s = u.exec(e),
            o = 0;
        for (; s; ) (o !== s.index && t(e.slice(o, s.index)), n(s), (o = u.lastIndex), (s = u.exec(e)));
        o !== e.length && t(e.slice(o));
    },
    thaiGraphemeRegex = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
    splitThaiGraphemes = (e) => e.match(thaiGraphemeRegex) || [],
    splitNewLines = (e) => {
        const u = [{ blockType: BlockType.LineBreak, colorTag: '', childList: [e.charAt(0)] }];
        for (let t = 0; t < e.length - 1; t++)
            u.push({ blockType: BlockType.NewLine, colorTag: '', childList: [e.charAt(0)] });
        return u;
    },
    splitBySymbols = (e) => {
        const u = [];
        return (
            split(
                e,
                /\S\s+/g,
                (e) => {
                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === THAI_LANGUAGE_CODE
                        ? u.push(...splitThaiGraphemes(e))
                        : u.push(...e.split(''));
                },
                (e) => {
                    u.push(e[0]);
                },
            ),
            u
        );
    },
    splitWordsCustom = (e) => {
        const u = [];
        return (
            split(
                e,
                /[^a-zA-Z0-9]+/g,
                (e) => {
                    u.push(e);
                },
                (e) => {
                    u.push(...splitBySymbols(e[0]));
                },
            ),
            u
        );
    },
    splitWords = (e, u) => {
        const t = /[\s\u002d]/g;
        let n = t.exec(e);
        if (!n) return [e];
        const s = [];
        let o = 0;
        for (; n; ) {
            const r = u.justifyContent === Alignment.FlexEnd ? n.index : t.lastIndex;
            (s.push(e.slice(o, r)), (o = r), (n = t.exec(e)));
        }
        return (o !== e.length && s.push(e.slice(o)), s);
    },
    splitByWordsMethod = IS_SPLIT_BY_SYMBOL ? splitWordsCustom : splitWords,
    splitSpecialSymbols = (e, u = '', t) => {
        const n = [];
        return (
            split(
                e,
                /(\n+|[\xa0\ufeff]+)/g,
                (e) => {
                    n.push({ blockType: BlockType.Word, colorTag: u, childList: splitByWordsMethod(e, t) });
                },
                (e) => {
                    const t = e[0],
                        s = SYMBOL_MAP[t.charAt(0)];
                    s === BlockType.LineBreak
                        ? n.push(...splitNewLines(t))
                        : n.push({ blockType: s, colorTag: u, childList: [t] });
                },
            ),
            n
        );
    },
    splitBinding = (e, u, t = '', n) => {
        const s = [];
        return (
            split(
                e,
                /(?:%\(|{)(.*?)[)}][sd]?/g,
                (e) => {
                    s.push(...splitSpecialSymbols(e, t, n));
                },
                (e) => {
                    const o = e[1],
                        r = void 0 === u[o] ? e[0] : u[o];
                    'string' == typeof r || 'number' == typeof r
                        ? s.push(...splitSpecialSymbols(String(r), t, n))
                        : s.push({ blockType: BlockType.Binding, colorTag: t, childList: [r] });
                },
            ),
            s
        );
    },
    splitColorTags = (e, u, t) => {
        const n = [];
        return (
            split(
                e,
                /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                (e) => {
                    n.push(...splitBinding(e, u, '', t));
                },
                (e) => {
                    n.push(...splitBinding(e[2] + e[3], u, e[1], t));
                },
            ),
            n
        );
    },
    wrapNoBreak = (e, u) => {
        if (!e) return [u];
        const t = [],
            n = { ...u, childList: u.childList.splice(0, 1) };
        if (e.blockType === BlockType.NoBreakWrapper) (e.childList.push(n), t.push(e));
        else {
            const u = { ...e, childList: e.childList.splice(-1) };
            (e.childList.length > 0 && t.push(e),
                t.push({ blockType: BlockType.NoBreakWrapper, colorTag: '', childList: [u, n] }));
        }
        return (u.childList.length > 0 && t.push(u), t);
    },
    processTextBlocks = (e) => {
        const u = [];
        let t = !1;
        return (
            e.forEach((e) => {
                if (e.blockType === BlockType.NoBreakSymbol) ((t = !0), u.push(...wrapNoBreak(u.pop(), e)));
                else (t ? u.push(...wrapNoBreak(u.pop(), e)) : u.push(e), (t = !1));
            }),
            u
        );
    },
    getJsxElementsList = (e, u = {}, t) => {
        if (!e) return [];
        const n = convertZwnbsp(convertNbsp(e)),
            s = processTextBlocks(splitColorTags(n, u, t));
        return convertTextBlocksToJsxList(s);
    },
    isVerticalOverflow = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
    getPositionDiff = (e, u) => e.offsetLeft + e.offsetWidth - u,
    isElementAvailableForTruncation = (e, u, t) => {
        if (!e || !e.textContent) return [!1, 0];
        if (e.offsetLeft > u) return [!1, 0];
        const n = getPositionDiff(e, u),
            s = e.textContent.length,
            o = e.offsetWidth / s,
            r = Math.ceil(n / o);
        if (n > 0) {
            const n = Math.floor((u - e.offsetLeft) / o);
            return n >= t ? [!0, t + r] : [!1, n];
        }
        const i = Math.max(t + r, 0);
        return s < i ? [!1, 0] : [!0, i];
    },
    truncateElement = (e, u, t, n, s, o) => {
        let r = -1,
            i = null;
        for (let a = t; a >= 0; a--) {
            const t = e[a],
                l = Number(e[a].getAttribute(BLOCK_TYPE));
            if (l === BlockType.LineBreak || l === BlockType.NewLine || l === BlockType.Binding) continue;
            const c = t.textContent || '';
            if (!(t.childElementCount > 1)) {
                const [e, l] = isElementAvailableForTruncation(t, n, s);
                if (!e) {
                    l > 0 && (s -= l);
                    continue;
                }
                const d = c.slice(0, c.length - l) + o,
                    E = u[a];
                ((i = React.cloneElement(E, E.props, d)), (r = a));
                break;
            }
            {
                const e = t.children,
                    l = u[a],
                    d = l.props.children,
                    [E, m] = truncateElement(e, d, e.length - 1, n, s, o);
                if (!(E < 0)) {
                    const e = d.slice(0, E);
                    ((i = React.cloneElement(l, l.props, e, m)), (r = a));
                    break;
                }
                s -= c.length;
            }
        }
        return [r, i];
    },
    searchLastInHeight = (e, u) => {
        let t = 0,
            n = e.length - 1;
        for (; n - t >= 0; ) {
            const s = t + Math.ceil(0.5 * (n - t));
            isVerticalOverflow(e[s], u) ? (n = s - 1) : (t = s + 1);
        }
        return t - 1;
    },
    truncateJsxElements = (e, u, t, n = TRUNCATE_IDENTIFY) => {
        const s = [...u],
            o = e.current;
        if (!o) return [s, !1];
        const r = t.height,
            i = t.width,
            a = o.lastElementChild;
        if (!isVerticalOverflow(a, r) && getPositionDiff(a, i) <= 0) return [s, !1];
        const l = o.children,
            c = searchLastInHeight(l, r);
        if (c < 0) return [s, !1];
        const [d, E] = truncateElement(l, s, c, i, n.length, n);
        return (E && (s.splice(d, 1, E), s.splice(d + 1)), [s, !0]);
    },
    root$f = 'Extendedtext_root_56f425a9',
    base$f = 'Extendedtext_34df2a2c',
    base__zeroPadding = 'Extendedtext_base__zeroPadding_bd1dbfd0',
    base__isTruncationAvailable = 'Extendedtext_base__isTruncationAvailable_21b9eaa',
    truncated = 'Extendedtext_truncated_6b4a3b66',
    truncated__hide = 'Extendedtext_truncated__hide_a75f6d91',
    unTruncated = 'Extendedtext_unTruncated_6ec70ccb',
    tooltip = 'Extendedtext_tooltip_7c24081e',
    styles$f = {
        root: root$f,
        base: base$f,
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
        classMix: u,
        onSizeChanged: t,
        binding: n,
        isTooltipEnable: s = !1,
        isTruncationAvailable: o = !1,
        customTooltipArgs: r,
        targetId: i,
        justifyContent: a = Alignment.FlexStart,
        alignContent: l = Alignment.FlexStart,
        truncateIdentify: c = TRUNCATE_IDENTIFY,
    }) => {
        const d = reactExports.useRef(null),
            E = reactExports.useRef({ height: 0, width: 0 }),
            [m, A] = reactExports.useState({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
            p = reactExports.useMemo(() => getJsxElementsList(e, n, { justifyContent: a }), [n, a, e]),
            F = reactExports.useMemo(() => {
                if (s && m.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                    return {
                        args: { text: e, ...r, stringifyKwargs: n ? JSON.stringify(n) : '' },
                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                        targetId: i,
                    };
            }, [n, s, i, e, r, m.isTruncated]),
            D = reactExports.useCallback(
                (e) => {
                    ((E.current.width = e.contentRect.width), (E.current.height = e.contentRect.height));
                    const [u, n] = truncateJsxElements(d, p, E.current, c);
                    (A({ elementList: u, isTruncated: n, isTruncateFinished: !0 }), t && t(n));
                },
                [t, c, p],
            ),
            g = reactExports.useMemo(() => ({ justifyContent: a, alignContent: l }), [l, a]);
        return (
            useResizeObserver(d, D, o),
            jsxRuntimeExports.jsxs('div', {
                className: classNames(
                    styles$f.base,
                    u,
                    styles$f.base__zeroPadding,
                    o && styles$f.base__isTruncationAvailable,
                ),
                style: g,
                children: [
                    jsxRuntimeExports.jsx('div', { className: styles$f.unTruncated, ref: d, children: p }),
                    jsxRuntimeExports.jsx(DynamicTooltipWrapper, {
                        tooltipArgs: F,
                        className: classNames(
                            styles$f.tooltip,
                            styles$f[`tooltip__justify-${a}`],
                            styles$f[`tooltip__align-${l}`],
                        ),
                        children: jsxRuntimeExports.jsx('div', {
                            className: classNames(
                                styles$f.truncated,
                                !m.isTruncateFinished && o && styles$f.truncated__hide,
                            ),
                            style: g,
                            children: m.isTruncateFinished && o ? m.elementList : p,
                        }),
                    }),
                ],
            })
        );
    },
    ExtendedText = React.memo(ExtendedTextComponent),
    createLayoutReadyInEffect = (e) => {
        let u,
            t = null;
        return (
            (t = requestAnimationFrame(() => {
                t = requestAnimationFrame(() => {
                    ((t = null), (u = e()));
                });
            })),
            () => {
                ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
            }
        );
    },
    root$e = 'Textoverflow_root_97eb19e2',
    base$e = 'Textoverflow_3e47b075',
    styles$e = { root: root$e, base: base$e },
    TextOverflow = ({ content: e, classMix: u, className: t, ...n }) => {
        const s = reactExports.useRef(null),
            [o, r] = reactExports.useState(!0);
        return (
            reactExports.useEffect(() =>
                createLayoutReadyInEffect(() => {
                    const e = s.current;
                    e && e.offsetWidth >= e.scrollWidth && r(!1);
                }),
            ),
            jsxRuntimeExports.jsx(SimpleTooltip, {
                isEnabled: o,
                body: e,
                children: jsxRuntimeExports.jsx('div', {
                    ...n,
                    ref: s,
                    className: classNames(styles$e.base, t, u),
                    children: e,
                }),
            })
        );
    };
var Size = ((e) => ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e))(Size || {}),
    AnimationType = ((e) => ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e))(AnimationType || {});
const root$d = 'Progressbar_root_27f917f7',
    base$d = 'Progressbar_a6e35bd7',
    base__small$3 = 'Progressbar_base__small_7338ff19',
    background = 'Progressbar_background_27d9dd7c',
    background__small = 'Progressbar_background__small_7338ff19',
    lineWrapper = 'Progressbar_lineWrapper_fc5022a6',
    styles$d = {
        root: root$d,
        base: base$d,
        base__small: base__small$3,
        background: background,
        background__small: background__small,
        lineWrapper: lineWrapper,
    },
    ProgressBarBackground = ({ size: e = Size.Default }) => {
        const u = classNames(styles$d.background, styles$d[`background__${e}`]);
        return jsxRuntimeExports.jsx('div', { className: u });
    },
    root$c = 'Progressbarblink_root_6fa3e54',
    base$c = 'Progressbarblink_c6146c1c',
    base__small$2 = 'Progressbarblink_base__small_9a4d3786',
    styles$c = { root: root$c, base: base$c, base__small: base__small$2 },
    ProgressBarBlink = ({ size: e }) => {
        const u = classNames(styles$c.base, styles$c[`base__${e}`]);
        return jsxRuntimeExports.jsx('div', { className: u });
    },
    root$b = 'Progresslineimpose_root_577e82cf',
    base$b = 'Progresslineimpose_24e17c02',
    base__disabled$1 = 'Progresslineimpose_base__disabled_bcd461f4',
    base__finished = 'Progresslineimpose_base__finished_803677d6',
    base__withoutBounce$1 = 'Progresslineimpose_base__withoutBounce_df0aed59',
    pattern = 'Progresslineimpose_pattern_491cb9c0',
    base__small$1 = 'Progresslineimpose_base__small_577e82cf',
    gradient = 'Progresslineimpose_gradient_513e2b1d',
    glow$2 = 'Progresslineimpose_glow_76f8072f',
    glow__left = 'Progresslineimpose_glow__left_c2e964b3',
    styles$b = {
        root: root$b,
        base: base$b,
        base__disabled: base__disabled$1,
        base__finished: base__finished,
        base__withoutBounce: base__withoutBounce$1,
        pattern: pattern,
        base__small: base__small$1,
        gradient: gradient,
        glow: glow$2,
        glow__left: glow__left,
    },
    ProgressLineImposeComponent = ({
        size: e,
        lineRef: u,
        disabled: t,
        baseStyles: n,
        isComplete: s,
        withoutBounce: o,
    }) => {
        const r = classNames(
                styles$b.base,
                styles$b[`base__${e}`],
                t && styles$b.base__disabled,
                s && styles$b.base__finished,
                o && styles$b.base__withoutBounce,
            ),
            i = !t && !s;
        return jsxRuntimeExports.jsxs('div', {
            className: r,
            style: n,
            ref: u,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles$b.pattern }),
                jsxRuntimeExports.jsx('div', { className: styles$b.gradient }),
                i && jsxRuntimeExports.jsx(ProgressBarBlink, { size: e }),
            ],
        });
    },
    ProgressLineImpose = reactExports.memo(ProgressLineImposeComponent),
    createTimeoutInEffect = (e, u) => {
        let t;
        const n = setTimeout(() => {
            t = e();
        }, u);
        return () => {
            ('function' == typeof t && t(), clearTimeout(n));
        };
    };
var GrowAnimationState = ((e) => ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e))(
        GrowAnimationState || {},
    ),
    SimpleAnimationState = ((e) => ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e))(SimpleAnimationState || {});
const root$a = 'Progressbardeltagrow_root_981f0dfd',
    base$a = 'Progressbardeltagrow_c42a7a2c',
    base__withoutBounce = 'Progressbardeltagrow_base__withoutBounce_8900411d',
    glow$1 = 'Progressbardeltagrow_glow_e08fafeb',
    styles$a = { root: root$a, base: base$a, base__withoutBounce: base__withoutBounce, glow: glow$1 },
    getGlowSideWithReverse = (e) => (e ? { left: 0 } : { right: 0 }),
    getBaseSideWithReverse = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
    getAnimationStyles = (e) => ({ transitionDuration: `${e}ms` }),
    ProgressBarDeltaGrowComponent = ({
        transitionDuration: e,
        transitionDelay: u,
        freezed: t,
        from: n,
        size: s,
        to: o,
        onEndAnimation: r,
        onChangeAnimationState: i,
        className: a,
    }) => {
        const l = o < n,
            [c, d] = reactExports.useState(GrowAnimationState.Idle),
            E = c === GrowAnimationState.End,
            m = c === GrowAnimationState.Idle,
            A = c === GrowAnimationState.Grow,
            p = c === GrowAnimationState.Shrink,
            F = reactExports.useCallback(
                (e) => {
                    (d(e), i && i(e));
                },
                [i],
            ),
            D = reactExports.useCallback(
                (e, u) =>
                    createTimeoutInEffect(() => {
                        F(e);
                    }, u),
                [F],
            );
        reactExports.useEffect(() => {
            if (!t)
                return m
                    ? D(GrowAnimationState.Grow, u)
                    : A
                      ? D(GrowAnimationState.Shrink, e)
                      : p
                        ? D(GrowAnimationState.End, e)
                        : void (E && r && r());
        }, [D, t, E, A, m, p, r, u, e]);
        const g = reactExports.useMemo(
                () => ({ width: '100%', ...getAnimationStyles(e), ...getGlowSideWithReverse(l) }),
                [l, e],
            ),
            _ = reactExports.useMemo(
                () => ({ width: '0%', ...getAnimationStyles(e), ...getGlowSideWithReverse(l) }),
                [l, e],
            ),
            B = reactExports.useMemo(
                () => ({ width: '0%', ...getBaseSideWithReverse(l, n), ...getAnimationStyles(e) }),
                [n, l, e],
            ),
            h = reactExports.useMemo(
                () => ({ width: `${Math.abs(o - n)}%`, ...getBaseSideWithReverse(l, n), ...getAnimationStyles(e) }),
                [n, l, o, e],
            );
        if (E) return null;
        const C = classNames(styles$a.base, a, l && 0 === o && styles$a.base__withoutBounce);
        return jsxRuntimeExports.jsx('div', {
            style: m ? B : h,
            className: C,
            children: jsxRuntimeExports.jsx('div', {
                style: p ? _ : g,
                className: styles$a.glow,
                children: jsxRuntimeExports.jsx(ProgressBarBlink, { size: s }),
            }),
        });
    },
    ProgressBarDeltaGrow = reactExports.memo(ProgressBarDeltaGrowComponent),
    ProgressBarGrowLineComponent = ({
        to: e,
        size: u,
        from: t,
        lineRef: n,
        disabled: s,
        isComplete: o,
        animationSettings: r,
        onEndAnimation: i,
        onChangeAnimationState: a,
    }) => {
        const l = e < t,
            [c, d] = reactExports.useState(!1),
            E = reactExports.useCallback(
                (e) => {
                    (e === GrowAnimationState.Shrink && d(!0), a && a(e));
                },
                [a],
            ),
            m = reactExports.useMemo(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
            A = reactExports.useMemo(
                () => ({ width: `${e}%`, transitionDuration: `${r.line.duration}ms` }),
                [r.line.duration, e],
            );
        return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [
                jsxRuntimeExports.jsx(ProgressLineImpose, {
                    size: u,
                    lineRef: n,
                    disabled: s,
                    isComplete: o,
                    withoutBounce: l && 0 === e,
                    baseStyles: c ? A : m,
                }),
                t >= 0 &&
                    jsxRuntimeExports.jsx(ProgressBarDeltaGrow, {
                        transitionDuration: r.delta.duration,
                        transitionDelay: r.delta.delay,
                        onChangeAnimationState: E,
                        freezed: r.freezed,
                        onEndAnimation: i,
                        from: t,
                        size: u,
                        to: e,
                        className: r.delta.className,
                    }),
            ],
        });
    },
    ProgressBarGrowLine = reactExports.memo(ProgressBarGrowLineComponent),
    root$9 = 'Progressbardeltasimple_root_b0cd652c',
    base$9 = 'Progressbardeltasimple_4b8901e3',
    delta = 'Progressbardeltasimple_delta_9a540ec7',
    styles$9 = { root: root$9, base: base$9, delta: delta },
    ProgressBarDeltaSimpleComponent = ({
        transitionDuration: e,
        transitionDelay: u,
        freezed: t,
        from: n,
        size: s,
        to: o,
        onEndAnimation: r,
        onChangeAnimationState: i,
    }) => {
        const a = o < n,
            [l, c] = reactExports.useState(SimpleAnimationState.Idle),
            d = l === SimpleAnimationState.In,
            E = l === SimpleAnimationState.End,
            m = l === SimpleAnimationState.Idle,
            A = reactExports.useCallback(
                (e) => {
                    (c(e), i && i(e));
                },
                [i],
            );
        (reactExports.useEffect(() => {
            if (m && !t) {
                return createTimeoutInEffect(() => {
                    A(SimpleAnimationState.In);
                }, u);
            }
        }, [A, t, m, u]),
            reactExports.useEffect(() => {
                if (d) {
                    return createTimeoutInEffect(() => {
                        (r && r(), A(SimpleAnimationState.End));
                    }, e + u);
                }
            }, [A, d, r, u, e]));
        const p = reactExports.useMemo(
                () => ({
                    width: '100%',
                    transitionDuration: `${e}ms`,
                    transitionDelay: `${u}ms`,
                    [a ? 'left' : 'right']: '0',
                }),
                [a, u, e],
            ),
            F = reactExports.useMemo(
                () => ({
                    width: '0%',
                    transitionDuration: `${e}ms`,
                    transitionDelay: `${u}ms`,
                    [a ? 'left' : 'right']: '0',
                }),
                [a, u, e],
            ),
            D = reactExports.useMemo(() => ({ width: `${Math.abs(n - o)}%`, left: `${a ? o : n}%` }), [n, a, o]);
        return E
            ? null
            : jsxRuntimeExports.jsx('div', {
                  className: styles$9.base,
                  style: D,
                  children: jsxRuntimeExports.jsx('div', {
                      style: m ? p : F,
                      className: styles$9.delta,
                      children: jsxRuntimeExports.jsx(ProgressBarBlink, { size: s }),
                  }),
              });
    },
    ProgressBarDeltaSimple = reactExports.memo(ProgressBarDeltaSimpleComponent),
    ProgressBarSimpleLineComponent = ({
        to: e,
        size: u,
        from: t,
        lineRef: n,
        disabled: s,
        isComplete: o,
        animationSettings: r,
        onChangeAnimationState: i,
        onEndAnimation: a,
    }) => {
        const l = reactExports.useMemo(
            () => ({
                width: `${e}%`,
                transitionDuration: `${r.line.duration}ms`,
                transitionDelay: `${r.line.delay}ms`,
            }),
            [r.line.delay, r.line.duration, e],
        );
        return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [
                jsxRuntimeExports.jsx(ProgressLineImpose, {
                    size: u,
                    lineRef: n,
                    disabled: s,
                    isComplete: o,
                    baseStyles: l,
                }),
                t >= 0 &&
                    jsxRuntimeExports.jsx(ProgressBarDeltaSimple, {
                        transitionDuration: r.delta.duration,
                        transitionDelay: r.delta.delay,
                        freezed: r.freezed,
                        from: t,
                        size: u,
                        to: e,
                        onChangeAnimationState: i,
                        onEndAnimation: a,
                    }),
            ],
        });
    },
    ProgressBarSimpleLine = reactExports.memo(ProgressBarSimpleLineComponent),
    WithAnimationLineComponent = ({ onComplete: e, onEndAnimation: u, ...t }) => {
        const [n, s] = reactExports.useState(!1),
            o = reactExports.useCallback(() => {
                const o = 100 === t.to;
                (o !== n && s(o), o && e && e(), u && u());
            }, [n, e, u, t.to]);
        switch (t.animationSettings.type) {
            case AnimationType.Simple:
                return jsxRuntimeExports.jsx(ProgressBarSimpleLine, { ...t, onEndAnimation: o, isComplete: n });
            case AnimationType.Growing:
                return jsxRuntimeExports.jsx(ProgressBarGrowLine, { ...t, onEndAnimation: o, isComplete: n });
            default:
                return null;
        }
    },
    WithAnimationLine = reactExports.memo(WithAnimationLineComponent),
    WithStackAnimationLineComponent = ({ onEndAnimation: e, ...u }) => {
        const t = reactExports.useRef({}),
            n = reactExports.useCallback(() => {
                ((t.current.from = void 0), e && e());
            }, [e]),
            s = 'number' == typeof t.current.from ? t.current.from : u.from;
        return (
            (t.current.from = s),
            reactExports.createElement(WithAnimationLine, {
                ...u,
                onEndAnimation: n,
                key: `${s}-${u.to}-${null == u ? void 0 : u.additionalKey}`,
                from: s,
            })
        );
    },
    WithStackAnimationLine = reactExports.memo(WithStackAnimationLineComponent),
    WithoutAnimationLine = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: s }) => {
        const o = reactExports.useMemo(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
            r = 100 === u;
        return (
            reactExports.useEffect(() => {
                r && s && s();
            }, [r, s]),
            jsxRuntimeExports.jsx(ProgressLineImpose, {
                size: e,
                disabled: n,
                baseStyles: o,
                isComplete: r,
                lineRef: t,
            })
        );
    },
    ProgressBarLineComponent = ({
        size: e,
        value: u,
        lineRef: t,
        disabled: n,
        deltaFrom: s,
        additionalKey: o,
        animationSettings: r,
        onEndAnimation: i,
        onChangeAnimationState: a,
        onComplete: l,
    }) => {
        if (s === u)
            return jsxRuntimeExports.jsx(
                WithoutAnimationLine,
                { size: e, value: u, lineRef: t, disabled: n, onComplete: l },
                `${s}-${u}-${o}`,
            );
        const c = {
            from: s,
            to: u,
            size: e,
            additionalKey: o,
            lineRef: t,
            disabled: n,
            animationSettings: r,
            onComplete: l,
            onEndAnimation: i,
            onChangeAnimationState: a,
        };
        return r.withStack
            ? jsxRuntimeExports.jsx(WithStackAnimationLine, { ...c })
            : jsxRuntimeExports.jsx(WithAnimationLine, { ...c }, `${s}-${u}-${o}`);
    },
    ProgressBarLine = reactExports.memo(ProgressBarLineComponent),
    createSkin = (e) => {
        var u, t, n, s, o, r, i;
        return {
            '--progress-base': `url(${e.bgImageBase})`,
            '--progress-bg-height': (null == (u = e.bg) ? void 0 : u.height) ?? '12rem',
            '--progress-bg-height-small': (null == (t = e.bg) ? void 0 : t.heightSmall) ?? '2rem',
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
            '--progress-glow-width': (null == (n = e.glowSettings) ? void 0 : n.width) ?? '60rem',
            '--progress-glow-height': (null == (s = e.glowSettings) ? void 0 : s.height) ?? '100rem',
            '--progress-glow-small-width': (null == (o = e.glowSettings) ? void 0 : o.smallWidth) ?? '44rem',
            '--progress-glow-small-height': (null == (r = e.glowSettings) ? void 0 : r.smallHeight) ?? '43rem',
            '--progress-glow-mixBlendMode': (null == (i = e.glowSettings) ? void 0 : i.mixBlendMode) ?? 'lighten',
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
    clamp = (e, u, t) => (t < e ? e : t > u ? u : t),
    prepareDeltaFrom = (e, u, t) => {
        if ('number' == typeof t) {
            return (clamp(0, u, t) / u) * 100;
        }
        return e;
    };
function useCalculatePercents(e, u, t) {
    return reactExports.useMemo(() => {
        const n = (clamp(0, u, e) / u) * 100;
        return { value: n, deltaFrom: prepareDeltaFrom(n, u, t) };
    }, [t, u, e]);
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
        theme: u = defaultTheme,
        size: t = Size.Default,
        animationSettings: n = defaultAnimationSettings,
        disabled: s = !1,
        withoutBackground: o = !1,
        value: r,
        deltaFrom: i,
        additionalKey: a,
        lineRef: l,
        onChangeAnimationState: c,
        onEndAnimation: d,
        onComplete: E,
        className: m,
    }) => {
        const A = useCalculatePercents(r, e, i);
        return jsxRuntimeExports.jsxs('div', {
            className: classNames(styles$d.base, m, styles$d[`base__${t}`]),
            style: createSkin(u),
            children: [
                !o && jsxRuntimeExports.jsx(ProgressBarBackground, { size: t }),
                jsxRuntimeExports.jsx(ProgressBarLine, {
                    size: t,
                    lineRef: l,
                    disabled: s,
                    value: A.value,
                    deltaFrom: A.deltaFrom,
                    additionalKey: a,
                    animationSettings: n,
                    onEndAnimation: d,
                    onChangeAnimationState: c,
                    onComplete: E,
                }),
            ],
        });
    },
    ProgressBar = reactExports.memo(ProgressBarComponent);
function playSound(e) {
    engine.call('PlaySound', e).catch((u) => {
        console.error('[lib/sounds.js] playSound(', e, '): ', u);
    });
}
const TooltipWrapper = ({ tooltipArgs: e, children: u }) =>
        e ? jsxRuntimeExports.jsx(Tooltip, { ...e, children: u }) : u,
    root$8 = 'Paginationarrowbutton_root_7e61bd42',
    base$8 = 'Paginationarrowbutton_9603d7f5',
    icon$1 = 'Paginationarrowbutton_icon_51dba56d',
    icon__back$1 = 'Paginationarrowbutton_icon__back_693f6a12',
    icon__forward$1 = 'Paginationarrowbutton_icon__forward_5da20ed5',
    base__locked = 'Paginationarrowbutton_base__locked_7e61bd42',
    styles$8 = {
        root: root$8,
        base: base$8,
        icon: icon$1,
        icon__back: icon__back$1,
        icon__forward: icon__forward$1,
        base__locked: base__locked,
    };
var ArrowDirection = ((e) => ((e.Back = 'back'), (e.Forward = 'forward'), e))(ArrowDirection || {});
const PaginationArrowButton = ({ onClick: e, direction: u, isLocked: t, tooltipArgs: n, className: s }) => {
        const o = classNames(styles$8.icon, styles$8[`icon__${u}`]),
            r = reactExports.useCallback(() => {
                t || (e(), playSound('play'));
            }, [e, t]),
            i = reactExports.useCallback(() => {
                t || playSound('highlight');
            }, [t]),
            a = classNames(styles$8.base, t && styles$8.base__locked, s);
        return jsxRuntimeExports.jsx(TooltipWrapper, {
            tooltipArgs: n,
            children: jsxRuntimeExports.jsx('div', {
                className: a,
                children: jsxRuntimeExports.jsx('div', { className: o, onClick: r, onMouseEnter: i }),
            }),
        });
    },
    root$7 = 'Paginationrender_root_95b52368',
    base$7 = 'Paginationrender_7c84d97d',
    base__completed = 'Paginationrender_base__completed_738d6d59',
    base__inaccessible = 'Paginationrender_base__inaccessible_48314b99',
    base__selected = 'Paginationrender_base__selected_6018b389',
    selectedImage = 'Paginationrender_selectedImage_a1492f5',
    styles$7 = {
        root: root$7,
        base: base$7,
        base__completed: base__completed,
        base__inaccessible: base__inaccessible,
        base__selected: base__selected,
        selectedImage: selectedImage,
    },
    PaginationRender = ({
        className: e,
        index: u,
        onClick: t,
        isSelected: n,
        isCompleted: s,
        isInaccessible: o,
        tooltipArgs: r,
    }) => {
        const i = classNames(
                styles$7.base,
                n && styles$7.base__selected,
                s && styles$7.base__completed,
                o && styles$7.base__inaccessible,
                e,
            ),
            a = reactExports.useCallback(() => {
                (t(u), playSound('yes1'));
            }, [u, t]),
            l = reactExports.useCallback(() => {
                playSound('highlight');
            }, []);
        return jsxRuntimeExports.jsx(TooltipWrapper, {
            tooltipArgs: r,
            children: jsxRuntimeExports.jsxs('div', {
                className: i,
                onClick: a,
                onMouseEnter: l,
                children: [n && jsxRuntimeExports.jsx('span', { className: styles$7.selectedImage }), u + 1],
            }),
        });
    },
    root$6 = 'Paginationlist_root_f2ba61df',
    base$6 = 'Paginationlist_891dda95',
    item = 'Paginationlist_item_ffe61403',
    item__last = 'Paginationlist_item__last_9bbe906a',
    styles$6 = { root: root$6, base: base$6, item: item, item__last: item__last },
    PaginationList = ({ className: e, selectedStep: u, data: t, onChange: n }) => {
        const s = t.length - 1,
            o = classNames(styles$6.base, e),
            r = reactExports.useCallback(
                (e) => {
                    n(e);
                },
                [n],
            );
        return jsxRuntimeExports.jsx('div', {
            className: o,
            children: t.map((e, t) =>
                jsxRuntimeExports.jsx(
                    PaginationRender,
                    {
                        onClick: r,
                        index: t,
                        className: classNames(styles$6.item, t === s && styles$6.item__last),
                        isSelected: u === t,
                        ...e,
                    },
                    t,
                ),
            ),
        });
    },
    root$5 = 'Pagination_root_177c6724',
    base$5 = 'Pagination_d4b3e554',
    content$1 = 'Pagination_content_ff273982',
    list = 'Pagination_list_15505166',
    styles$5 = { root: root$5, base: base$5, content: content$1, list: list },
    Pagination = ({ className: e, hasArrow: u, arrowOffset: t, selectedIndex: n, children: s }) => {
        t = t || 0;
        const o = reactExports.useMemo(
                () =>
                    s.map((e) => ({
                        isInaccessible: e.isInaccessible,
                        isCompleted: e.isCompleted,
                        tooltipArgs: e.tooltipArgs,
                    })),
                [s],
            ),
            r = s.length - 1,
            i = reactExports.useMemo(() => {
                const e = o.findIndex((e) => void 0 === e.isInaccessible && void 0 === e.isCompleted);
                return -1 === e ? 0 : e;
            }, [o]),
            [a, l] = reactExports.useState(n || i),
            c = reactExports.useCallback(
                (e) => {
                    l(e);
                },
                [l],
            ),
            d = reactExports.useCallback(() => {
                l(a - 1);
            }, [l, a]),
            E = reactExports.useCallback(() => {
                l(a + 1);
            }, [l, a]),
            m = classNames(styles$5.base, e),
            A = reactExports.useMemo(() => ({ marginLeft: t, marginRight: t }), [t]),
            p = 0 === a,
            F = a === r,
            D = reactExports.useMemo(() => (p ? void 0 : s[a - 1].tooltipArgs), [s, p, a]),
            g = reactExports.useMemo(() => (F ? void 0 : s[a + 1].tooltipArgs), [s, F, a]);
        return jsxRuntimeExports.jsxs('div', {
            className: m,
            children: [
                jsxRuntimeExports.jsxs('div', {
                    className: styles$5.content,
                    children: [
                        u &&
                            jsxRuntimeExports.jsx(PaginationArrowButton, {
                                onClick: d,
                                direction: ArrowDirection.Back,
                                isLocked: p,
                                tooltipArgs: D,
                            }),
                        jsxRuntimeExports.jsx('div', { style: A, children: s[a].render() }),
                        u &&
                            jsxRuntimeExports.jsx(PaginationArrowButton, {
                                onClick: E,
                                direction: ArrowDirection.Forward,
                                isLocked: F,
                                tooltipArgs: g,
                            }),
                    ],
                }),
                jsxRuntimeExports.jsx(PaginationList, {
                    className: styles$5.list,
                    selectedStep: a,
                    data: o,
                    onChange: c,
                }),
            ],
        });
    },
    root$4 = 'Textbutton_root_599b35e4',
    base$4 = 'Textbutton_b1283086',
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
    styles$4 = {
        root: root$4,
        base: base$4,
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
        onClick: u,
        goto: t,
        classNames: n,
        onMouseEnter: s,
        onMouseLeave: o,
        onMouseDown: r,
        onMouseUp: i,
        side: a = 'left',
        type: l = 'back',
        soundHover: c = 'highlight',
        soundClick: d = 'play',
        ...E
    }) => {
        const m = reactExports.useCallback(
                (e) => {
                    (null == s || s(e), env.sound.play.sound(c));
                },
                [s, c],
            ),
            A = reactExports.useCallback(
                (e) => {
                    null == o || o(e);
                },
                [o],
            ),
            p = reactExports.useCallback(
                (e) => {
                    (null == r || r(e), env.sound.play.sound(d));
                },
                [r, d],
            ),
            F = reactExports.useCallback(
                (e) => {
                    null == i || i(e);
                },
                [i],
            );
        return jsxRuntimeExports.jsxs('div', {
            className: classNames(
                styles$4.base,
                styles$4[`base__${l}`],
                styles$4[`base__${a}`],
                null == n ? void 0 : n.base,
            ),
            onMouseEnter: m,
            onMouseLeave: A,
            onMouseDown: p,
            onMouseUp: F,
            onClick: u,
            ...E,
            children: [
                'info' !== l && jsxRuntimeExports.jsx('div', { className: styles$4.shine }),
                jsxRuntimeExports.jsx('div', {
                    className: classNames(
                        styles$4.icon,
                        styles$4[`icon__${l}`],
                        styles$4[`icon__${a}`],
                        null == n ? void 0 : n.icon,
                    ),
                    children: jsxRuntimeExports.jsx('div', {
                        className: classNames(styles$4.glow, null == n ? void 0 : n.glow),
                    }),
                }),
                jsxRuntimeExports.jsx('div', {
                    className: classNames(styles$4.caption, styles$4[`caption__${l}`], null == n ? void 0 : n.caption),
                    children: e,
                }),
                t &&
                    jsxRuntimeExports.jsx('div', {
                        className: classNames(styles$4.goto, null == n ? void 0 : n.goto),
                        children: t,
                    }),
            ],
        });
    },
    root$3 = 'Formattext_root_5d59be47',
    base$3 = 'Formattext_bb80854d',
    styles$3 = { root: root$3, base: base$3 },
    FormatText = ({
        binding: e,
        text: u = '',
        classMix: t,
        alignment: n = Alignment$1.left,
        formatWithBrackets: s,
    }) => {
        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
        const o = s && e ? format(u, e) : u;
        return jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: o
                .split('\n')
                .map((u, s) =>
                    jsxRuntimeExports.jsx(
                        'div',
                        {
                            className: classNames(styles$3.base, t),
                            children: formatString(u, n, e).map((e, u) =>
                                jsxRuntimeExports.jsx(reactExports.Fragment, { children: e }, `${u}-${e}`),
                            ),
                        },
                        `${u}-${s}`,
                    ),
                ),
        });
    };
var ButtonType = ((e) => (
    (e.main = 'main'),
    (e.primary = 'primary'),
    (e.primaryGreen = 'primaryGreen'),
    (e.primaryRed = 'primaryRed'),
    (e.secondary = 'secondary'),
    (e.ghost = 'ghost'),
    e
))(ButtonType || {});
const root$2 = 'Cbutton_root_180a9717',
    base$2 = 'Cbutton_24fc9a0c',
    base__main = 'Cbutton_base__main_2f199578',
    base__primary = 'Cbutton_base__primary_9da8a692',
    base__primaryGreen = 'Cbutton_base__primaryGreen_74301f4e',
    base__primaryRed = 'Cbutton_base__primaryRed_d184ac',
    base__secondary = 'Cbutton_base__secondary_22ff48c2',
    base__ghost = 'Cbutton_base__ghost_fd3acf91',
    base__extraSmall = 'Cbutton_base__extraSmall_f64ebb9e',
    base__small = 'Cbutton_base__small_a71bc2a9',
    base__medium = 'Cbutton_base__medium_d82a1b14',
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
    styles$2 = {
        root: root$2,
        base: base$2,
        base__main: base__main,
        base__primary: base__primary,
        base__primaryGreen: base__primaryGreen,
        base__primaryRed: base__primaryRed,
        base__secondary: base__secondary,
        base__ghost: base__ghost,
        base__extraSmall: base__extraSmall,
        base__small: base__small,
        base__medium: base__medium,
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
        size: u,
        disabled: t,
        mixClass: n,
        onMouseEnter: s,
        onMouseMove: o,
        onMouseDown: r,
        onMouseUp: i,
        onMouseLeave: a,
        onClick: l,
        isFocused: c = !1,
        type: d = ButtonType.primary,
        soundHover: E = 'highlight',
        soundClick: m = 'play',
    }) => {
        const A = reactExports.useRef(null),
            [p, F] = reactExports.useState(c),
            [D, g] = reactExports.useState(!1);
        return (
            reactExports.useEffect(() => {
                function e(e) {
                    p && null !== A.current && !A.current.contains(e.target) && F(!1);
                }
                return (
                    document.addEventListener('mousedown', e),
                    () => {
                        document.removeEventListener('mousedown', e);
                    }
                );
            }, [p]),
            reactExports.useEffect(() => {
                F(c);
            }, [c]),
            jsxRuntimeExports.jsxs('div', {
                ref: A,
                className: classNames(
                    styles$2.base,
                    styles$2[`base__${d}`],
                    t && styles$2.base__disabled,
                    u && styles$2[`base__${u}`],
                    p && styles$2.base__focus,
                    D && styles$2.base__highlightActive,
                    n,
                ),
                onMouseEnter: function (e) {
                    t || (null !== E && playSound(E), s && s(e));
                },
                onMouseMove: function (e) {
                    o && o(e);
                },
                onMouseUp: function (e) {
                    t || (i && i(e), g(!1));
                },
                onMouseDown: function (e) {
                    t ||
                        (null !== m && playSound(m),
                        r && r(e),
                        c && (t || (A.current && (A.current.focus(), F(!0)))),
                        g(!0));
                },
                onMouseLeave: function (e) {
                    t || (a && a(e), g(!1));
                },
                onClick: function (e) {
                    t || (l && l(e));
                },
                children: [
                    d !== ButtonType.ghost &&
                        jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                                jsxRuntimeExports.jsx('div', { className: styles$2.back }),
                                jsxRuntimeExports.jsx('span', { className: styles$2.texture }),
                            ],
                        }),
                    jsxRuntimeExports.jsxs('span', {
                        className: classNames(styles$2.state, styles$2.state__default),
                        children: [
                            jsxRuntimeExports.jsx('span', { className: styles$2.stateDisabled }),
                            jsxRuntimeExports.jsx('span', { className: styles$2.stateHighlightHover }),
                            jsxRuntimeExports.jsx('span', { className: styles$2.stateHighlightActive }),
                        ],
                    }),
                    jsxRuntimeExports.jsx('span', {
                        className: styles$2.content,
                        lang: R.strings.settings.LANGUAGE_CODE(),
                        children: e,
                    }),
                ],
            })
        );
    },
    CButton = Button;
var IconSize = ((e) => ((e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220'), e))(
    IconSize || {},
);
const root$1 = 'Badge_root_8bc2e1a2',
    base$1 = 'Badge_b4595e01',
    base__default$1 = 'Badge_base__default_6aaca100',
    base__x48$1 = 'Badge_base__x48_2b129eae',
    styles$1 = { root: root$1, base: base$1, base__default: base__default$1, base__x48: base__x48$1 },
    badgeFolders = {
        [IconSize.default]: 'c_24x24',
        [IconSize.x48]: 'c_48x48',
        [IconSize.x80]: 'c_80x80',
        [IconSize.x220]: 'c_220x220',
    },
    Badge = ({ badgeID: e, size: u = IconSize.default, className: t }) => {
        const n = R.images.gui.maps.icons.library.badges.$dyn(badgeFolders[u]);
        return jsxRuntimeExports.jsx('div', {
            className: classNames(styles$1.base, styles$1[`base__${u}`], t),
            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
        });
    },
    root = 'Playernickname_root_4dc1c796',
    base = 'Playernickname_23cd38ea',
    userName = 'Playernickname_userName_fcb876e7',
    igrIcon = 'Playernickname_igrIcon_3153f71e',
    base__default = 'Playernickname_base__default_4dc1c796',
    base__x48 = 'Playernickname_base__x48_4dc1c796',
    suffixBadgeWrapper = 'Playernickname_suffixBadgeWrapper_357391ed',
    suffixBadgeStripe = 'Playernickname_suffixBadgeStripe_9151ff4c',
    base__inverted = 'Playernickname_base__inverted_4dc1c796',
    suffixBadge = 'Playernickname_suffixBadge_1bf5fe7f',
    anonymizedIcon = 'Playernickname_anonymizedIcon_769a22b',
    styles = {
        root: root,
        base: base,
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
        const u = reactExports.useMemo(
                () => formatPrintf(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                [e],
            ),
            t = R.strings.tooltips.anonymizer.teamStats.body();
        return jsxRuntimeExports.jsx(SimpleTooltip, {
            header: u,
            body: t,
            children: jsxRuntimeExports.jsx('div', { className: styles.anonymizedIcon }),
        });
    },
    UsernameAnonymizer = reactExports.memo(UsernameAnonymizerComponent),
    suffixBadgeStripeFolders = { [IconSize.default]: 'c_64x24', [IconSize.x48]: 'c_68x28' },
    siffixBadgeFolders = { [IconSize.default]: 'c_48x48', [IconSize.x48]: 'c_48x48' },
    PlayerNickname = ({
        userName: e,
        clanAbbrev: u = '',
        igrType: t = 0,
        badge: n = { badgeID: '' },
        suffixBadge: s = { badgeID: '' },
        isInverted: o = !1,
        isFakeNameVisible: r = !1,
        isAnonymizerShown: i = !1,
        hiddenUserName: a = '',
        size: l = IconSize.default,
        userNameClassName: c = '',
        clanTagClassName: d = '',
    }) => {
        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(suffixBadgeStripeFolders[l]),
            m = reactExports.useMemo(() => ({ backgroundImage: `url(${E.$dyn(`strip_${s.badgeID}`)})` }), [s, E]),
            A = R.images.gui.maps.icons.library.badges.$dyn(siffixBadgeFolders[l]),
            p = reactExports.useMemo(() => ({ backgroundImage: `url(${A.$dyn(`badge_${s.badgeID}`)})` }), [s, A]),
            F = u ? `[${u}]` : '',
            D = classNames(styles.base, styles[`base__${l}`], o && styles.base__inverted),
            g = classNames(styles.userName, c),
            _ = classNames(styles.clanTag, d),
            B = e !== a,
            h = r ? `${a}${F}` : a,
            C = Boolean(n.badgeID) && reactExports.createElement(Badge, { size: l, ...n, key: 'badge' }),
            b = Date.now(),
            f = [
                C,
                [
                    jsxRuntimeExports.jsx(
                        'div',
                        { className: g, children: jsxRuntimeExports.jsx(TextOverflow, { content: e }, b) },
                        'userName',
                    ),
                    !r && Boolean(F) && jsxRuntimeExports.jsx('div', { className: _, children: F }, 'clanTag'),
                ],
                0 !== t && jsxRuntimeExports.jsx('div', { className: styles.igrIcon }, 'igrType'),
                Boolean(s.badgeID) &&
                    jsxRuntimeExports.jsxs(
                        'div',
                        {
                            className: styles.suffixBadgeWrapper,
                            children: [
                                jsxRuntimeExports.jsx('div', { className: styles.suffixBadgeStripe, style: m }),
                                jsxRuntimeExports.jsx('div', { className: styles.suffixBadge, style: p }),
                            ],
                        },
                        'suffixBadge',
                    ),
                i && B && jsxRuntimeExports.jsx(UsernameAnonymizer, { tooltipHeaderName: h }, 'anonymizer'),
            ];
        return jsxRuntimeExports.jsx('div', { className: D, children: o ? f.reverse() : f });
    };
export {
    ButtonType as B,
    CButton as C,
    ExtendedText as E,
    FormatText as F,
    MediaWrapper as M,
    ProgressBar as P,
    Size as S,
    TextOverflow as T,
    int as a,
    useCallbackOnEsc as b,
    TextButton as c,
    Pagination as d,
    constFalse as e,
    identity as f,
    SimpleTooltip as g,
    normalizeResource as h,
    initializeModelWithContext as i,
    PlayerNickname as j,
    keyCodes as k,
    getNumberFormat as l,
    map as m,
    noop as n,
    convertNbsp$1 as o,
    play$1 as p,
    runView as r,
    sendEvent$1 as s,
    useKeydownListener as u,
};
