import {
    j as jsxRuntimeExports,
    h as cx,
    p as observable,
    q as computedFn,
    s as action,
    r as reactExports,
    m as observer,
} from '../../../chunks/vendor.js';
import {
    p as play,
    i as initializeModelWithContext,
    m as map,
    e as constFalse,
    f as identity,
    g as SimpleTooltip,
    h as normalizeResource,
    C as CButton,
    B as ButtonType,
    j as PlayerNickname,
    l as getNumberFormat,
    E as ExtendedText,
    M as MediaWrapper,
    n as noop,
    o as convertNbsp,
    r as runView,
} from '../../../chunks/lib.js';
const LIGHT_TANK = 'lightTank',
    MEDIUM_TANK = 'mediumTank',
    HEAVY_TANK = 'heavyTank',
    SPG = 'SPG',
    AT_SPG = 'AT-SPG',
    PREMIUM_IGR_TAG = 'premiumIGR';
var ColumnEnum = ((e) => (
    (e.Kills = 'kills'),
    (e.Damage = 'damage'),
    (e.Assist = 'assist'),
    (e.Blocked = 'blocked'),
    (e.Place = 'place'),
    (e.Keys = 'keys'),
    e
))(ColumnEnum || {});
const root$d = 'SortHelper_root_af12aed1',
    base$d = 'SortHelper_a678300d',
    base__active = 'SortHelper_base__active_dbd69244',
    base__selected = 'SortHelper_base__selected_91fdc22c',
    arrow = 'SortHelper_arrow_50b86f5d',
    base__desc = 'SortHelper_base__desc_af12aed1',
    styles$d = {
        root: root$d,
        base: base$d,
        base__active: base__active,
        base__selected: base__selected,
        arrow: arrow,
        base__desc: base__desc,
    },
    VEHICLE_COLUMN = 'vehicle',
    DAMAGE_COLUMN = 'damage',
    SortHelper = ({
        onClick: e,
        className: t,
        isSelected: s,
        isEnabled: a,
        sortDirection: o,
        column: n,
        children: r,
    }) =>
        jsxRuntimeExports.jsxs('div', {
            className: cx(
                styles$d.base,
                a && styles$d.base__active,
                t,
                s && styles$d.base__selected,
                styles$d[`base__${SORT_DIRECTIONS[o]}`],
            ),
            onClick: () => {
                a && (e(n), play.click());
            },
            onMouseEnter: () => {
                a && play.highlight();
            },
            children: [r, s && a && jsxRuntimeExports.jsx('div', { className: styles$d.arrow })],
        }),
    VEHICLE_ORDER = [HEAVY_TANK, MEDIUM_TANK, LIGHT_TANK, SPG, AT_SPG];
var SORT_DIRECTIONS = ((e) => ((e[(e.desc = 1)] = 'desc'), (e[(e.asc = -1)] = 'asc'), e))(SORT_DIRECTIONS || {});
const [ModelProvider$1, useModel$1] = initializeModelWithContext()(
    ({ observableModel: e }) => {
        const t = observable.box(ColumnEnum.Place),
            s = observable.box(1),
            a = {
                root: e.object(),
                team: e.array('team', []),
                visibleColumns: e.array('columnSettings.visibleColumns'),
            },
            o = computedFn(
                () =>
                    map(a.team.get(), identity)
                        .slice()
                        .sort((e, a) => {
                            const o = String(t) === ColumnEnum.Place ? -1 * Number(s) : Number(s);
                            return String(t) === VEHICLE_COLUMN
                                ? e.vehicle.vehicleType === a.vehicle.vehicleType
                                    ? o *
                                      String(e.vehicle.vehicleShortName)
                                          .toLocaleLowerCase()
                                          .localeCompare(String(a.vehicle.vehicleShortName).toLocaleLowerCase())
                                    : o *
                                      (VEHICLE_ORDER.indexOf(e.vehicle.vehicleType) -
                                          VEHICLE_ORDER.indexOf(a.vehicle.vehicleType))
                                : o * (a.stats[t] - e.stats[t]);
                        }),
                { equals: constFalse },
            );
        return { ...a, sortBy: t, sortDirection: s, computes: { getSortedTeam: o } };
    },
    ({ externalModel: e, model: t }) => ({
        setSortBy: action((e) => {
            (e === t.sortBy.get() ? t.sortDirection.set(-1 * t.sortDirection.get()) : t.sortDirection.set(1),
                t.sortBy.set(e));
        }),
        sendFriendRequest: e.createCallback(
            (e, t, s) => ({ playerId: e, userName: t, clanAbbrev: s }),
            'onSendFriendRequest',
        ),
        sendPlatoonInvitation: e.createCallback((e, t) => ({ playerId: e, userName: t }), 'onSendPlatoonInvitation'),
        removeFromBlacklist: e.createCallback((e, t) => ({ playerId: e, userName: t }), 'onRemoveFromBlacklist'),
    }),
);
var TableType = ((e) => ((e.TabWindow = 'tabWindow'), (e.LeaderBoard = 'leaderBoard'), e))(TableType || {});
const TeamListTypeContext = reactExports.createContext(TableType.TabWindow),
    root$c = 'CellDecorator_root_b5c0999b',
    base$c = 'CellDecorator_8e41db2a',
    base__keys = 'CellDecorator_base__keys_63702f2a',
    base__actions = 'CellDecorator_base__actions_41861a9f',
    base__tabWindow$1 = 'CellDecorator_base__tabWindow_3990bbbe',
    base__currentPlayer$3 = 'CellDecorator_base__currentPlayer_eebdddd2',
    base__player = 'CellDecorator_base__player_36ffb241',
    base__stats = 'CellDecorator_base__stats_dab61779',
    base__buffs$1 = 'CellDecorator_base__buffs_3e76b04',
    base__damage = 'CellDecorator_base__damage_c1078d6a',
    base__vehicle = 'CellDecorator_base__vehicle_b5c0999b',
    base__vehicleIcon = 'CellDecorator_base__vehicleIcon_5adb1a68',
    base__bordered = 'CellDecorator_base__bordered_b3855552',
    border$1 = 'CellDecorator_border_a694fc4',
    children = 'CellDecorator_children_5e23ddc4',
    base__statsLarge = 'CellDecorator_base__statsLarge_b5c0999b',
    base__kills = 'CellDecorator_base__kills_b5c0999b',
    styles$c = {
        root: root$c,
        base: base$c,
        base__keys: base__keys,
        base__actions: base__actions,
        base__tabWindow: base__tabWindow$1,
        base__currentPlayer: base__currentPlayer$3,
        base__player: base__player,
        base__stats: base__stats,
        base__buffs: base__buffs$1,
        base__damage: base__damage,
        base__vehicle: base__vehicle,
        base__vehicleIcon: base__vehicleIcon,
        base__bordered: base__bordered,
        border: border$1,
        children: children,
        base__statsLarge: base__statsLarge,
        base__kills: base__kills,
    };
var CellStyleEnum = ((e) => (
    (e.Player = 'player'),
    (e.Stats = 'stats'),
    (e.Vehicle = 'vehicle'),
    (e.VehicleIcon = 'vehicleIcon'),
    (e.Keys = 'keys'),
    (e.Actions = 'actions'),
    (e.Damage = 'damage'),
    (e.Kills = 'kills'),
    e
))(CellStyleEnum || {});
const CellDecorator = ({ cellStyle: e, bordered: t = !1, isCurrentPlayer: s, children: a }) => {
        const o = reactExports.useContext(TeamListTypeContext);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(
                styles$c.base,
                styles$c[`base__${e}`],
                styles$c[`base__${o}`],
                s && styles$c.base__currentPlayer,
            ),
            lang: R.strings.settings.LANGUAGE_CODE(),
            children: [
                t && jsxRuntimeExports.jsx('div', { className: styles$c.border }),
                jsxRuntimeExports.jsx('div', { className: styles$c.children, children: a }),
            ],
        });
    },
    root$b = 'RowDecorator_root_aac40ec7',
    base$b = 'RowDecorator_7f8a82c4',
    base__currentPlayer$2 = 'RowDecorator_base__currentPlayer_5b1523a3',
    childrenWrapper = 'RowDecorator_childrenWrapper_f5dbe2f5',
    base__defaultText = 'RowDecorator_base__defaultText_aac40ec7',
    base__goldText = 'RowDecorator_base__goldText_aac40ec7',
    base__disable = 'RowDecorator_base__disable_aac40ec7',
    backgroundHelper = 'RowDecorator_backgroundHelper_54786082',
    base__goldBg = 'RowDecorator_base__goldBg_aac40ec7',
    backgroundHelper__header = 'RowDecorator_backgroundHelper__header_781eab89',
    styles$b = {
        root: root$b,
        base: base$b,
        base__currentPlayer: base__currentPlayer$2,
        childrenWrapper: childrenWrapper,
        base__defaultText: base__defaultText,
        base__goldText: base__goldText,
        base__disable: base__disable,
        backgroundHelper: backgroundHelper,
        base__goldBg: base__goldBg,
        backgroundHelper__header: backgroundHelper__header,
    },
    HeaderRowDecorator = ({ children: e }) =>
        jsxRuntimeExports.jsxs('div', {
            className: styles$b.base,
            children: [
                jsxRuntimeExports.jsx('div', {
                    className: cx(styles$b.backgroundHelper, styles$b.backgroundHelper__header),
                }),
                jsxRuntimeExports.jsx('div', { className: styles$b.childrenWrapper, children: e }),
            ],
        }),
    root$a = 'HeaderIcon_root_1ee11e98',
    base$a = 'HeaderIcon_d7f54b6b',
    base__hoverEnabled = 'HeaderIcon_base__hoverEnabled_1ee11e98',
    base__highlighted = 'HeaderIcon_base__highlighted_a21a50f4',
    base__squad_small = 'HeaderIcon_base__squad_small_1f596beb',
    base__buffs = 'HeaderIcon_base__buffs_f96ed88e',
    icon$2 = 'HeaderIcon_icon_35ac5787',
    styles$a = {
        root: root$a,
        base: base$a,
        base__hoverEnabled: base__hoverEnabled,
        base__highlighted: base__highlighted,
        base__squad_small: base__squad_small,
        base__buffs: base__buffs,
        icon: icon$2,
    };
var HeaderIconEnum = ((e) => (
    (e.Assist = 'assist'),
    (e.Blocked = 'blocked'),
    (e.Damage = 'damage'),
    (e.Kills = 'kills'),
    (e.SquadSmall = 'squad_small'),
    (e.Vehicle = 'vehicle'),
    (e.Souls = 'souls'),
    (e.Place = 'place'),
    (e.Keys = 'keys'),
    e
))(HeaderIconEnum || {});
const HeaderIcon = reactExports.memo(function ({
        icon: e,
        className: t,
        isHighlighted: s = !1,
        isHoverEnabled: a = !1,
    }) {
        return jsxRuntimeExports.jsx('div', {
            className: cx(
                styles$a.base,
                s && styles$a.base__highlighted,
                a && styles$a.base__hoverEnabled,
                styles$a[`base__${e}`],
                t,
            ),
            children: jsxRuntimeExports.jsx('div', {
                className: styles$a.icon,
                style: { backgroundImage: `url('${R.images.last_stand.gui.maps.icons.common.stats.c_32x32.$dyn(e)}')` },
            }),
        });
    }),
    root$9 = 'HeaderRow_root_29fa123c',
    base$9 = 'HeaderRow_9af02515',
    text = 'HeaderRow_text_9d3eddc1',
    text__tabWindow = 'HeaderRow_text__tabWindow_f2f594eb',
    cell = 'HeaderRow_cell_8a6dfec5',
    squad$1 = 'HeaderRow_squad_935f56a9',
    vehicle = 'HeaderRow_vehicle_50a27f90',
    border = 'HeaderRow_border_871a1365',
    upperLine = 'HeaderRow_upperLine_5d01e90e',
    iconBorder = 'HeaderRow_iconBorder_37a55ff9',
    actions = 'HeaderRow_actions_fd40145d',
    styles$9 = {
        root: root$9,
        base: base$9,
        text: text,
        text__tabWindow: text__tabWindow,
        cell: cell,
        squad: squad$1,
        vehicle: vehicle,
        border: border,
        upperLine: upperLine,
        iconBorder: iconBorder,
        actions: actions,
    },
    cellStyle = (e) => {
        switch (e) {
            case VEHICLE_COLUMN:
                return CellStyleEnum.VehicleIcon;
            case DAMAGE_COLUMN:
                return CellStyleEnum.Damage;
        }
        return CellStyleEnum.Stats;
    },
    tooltipContent = (e, t) => {
        const s = R.strings.last_stand_tooltips.teamList.$dyn(e),
            a = { header: '', body: '' };
        return (
            t === TableType.LeaderBoard
                ? ((a.header = s.$dyn('header')), (a.body = s.$dyn('body')))
                : (a.body = s.$dyn('header')),
            a
        );
    },
    HeaderRow = reactExports.memo(function ({
        visibleColumns: e,
        sortBy: t = ColumnEnum.Place,
        sortDirection: s,
        onSortChanged: a,
        tableType: o,
        sortEnabled: n,
    }) {
        const r = reactExports.useContext(TeamListTypeContext),
            i = reactExports.useCallback(
                (e) => {
                    a && a(e);
                },
                [a],
            ),
            l = e.map((e) => e);
        l.unshift(VEHICLE_COLUMN);
        const c = o === TableType.LeaderBoard;
        return jsxRuntimeExports.jsxs(HeaderRowDecorator, {
            children: [
                jsxRuntimeExports.jsx(CellDecorator, {
                    cellStyle: CellStyleEnum.Player,
                    children: jsxRuntimeExports.jsxs('div', {
                        className: styles$9.base,
                        children: [
                            jsxRuntimeExports.jsx(SimpleTooltip, {
                                body: R.strings.last_stand_tooltips.teamList.squad.header(),
                                children: jsxRuntimeExports.jsx('div', {
                                    children: jsxRuntimeExports.jsx(HeaderIcon, {
                                        icon: HeaderIconEnum.SquadSmall,
                                        className: styles$9.squad,
                                    }),
                                }),
                            }),
                            jsxRuntimeExports.jsx('div', {
                                className: styles$9.border,
                                children: jsxRuntimeExports.jsx('div', { className: styles$9.iconBorder }),
                            }),
                            jsxRuntimeExports.jsx(SimpleTooltip, {
                                body: R.strings.last_stand_tooltips.teamList.name.header(),
                                children: jsxRuntimeExports.jsx('span', {
                                    className: cx(styles$9.text, styles$9[`text__${r}`]),
                                    children: R.strings.last_stand_battle_results.teamList.teammates(),
                                }),
                            }),
                        ],
                    }),
                }),
                jsxRuntimeExports.jsxs(CellDecorator, {
                    cellStyle: CellStyleEnum.Actions,
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            className: styles$9.border,
                            children: jsxRuntimeExports.jsx('div', { className: styles$9.iconBorder }),
                        }),
                        jsxRuntimeExports.jsx(SimpleTooltip, {
                            header: R.strings.last_stand_tooltips.teamList.actions.header(),
                            body: R.strings.last_stand_tooltips.teamList.actions.body(),
                            children: jsxRuntimeExports.jsx('div', {
                                className: styles$9.actions,
                                children: R.strings.last_stand_battle_results.teamList.actions(),
                            }),
                        }),
                    ],
                }),
                l.map((e) =>
                    jsxRuntimeExports.jsx(
                        CellDecorator,
                        {
                            cellStyle: cellStyle(e),
                            bordered: !0,
                            children: jsxRuntimeExports.jsx(SimpleTooltip, {
                                ...tooltipContent(e, o),
                                children: jsxRuntimeExports.jsx('div', {
                                    className: cx(styles$9.cell, styles$9[`cell__${o}`]),
                                    children: jsxRuntimeExports.jsx(SortHelper, {
                                        isSelected: c && t === e,
                                        sortDirection: s,
                                        column: e,
                                        onClick: i,
                                        isEnabled: n,
                                        children: jsxRuntimeExports.jsx(HeaderIcon, {
                                            icon: e,
                                            isHighlighted: c && t === e,
                                            isHoverEnabled: c && t !== e,
                                            className: styles$9[`${e}`],
                                        }),
                                    }),
                                }),
                            }),
                        },
                        e,
                    ),
                ),
                jsxRuntimeExports.jsx('div', { className: styles$9.upperLine }),
            ],
        });
    }),
    root$8 = 'VehicleType_root_4e0d61e4',
    base$8 = 'VehicleType_7a98563c',
    base__c_24x24 = 'VehicleType_base__c_24x24_92335fef',
    base__c_38x38 = 'VehicleType_base__c_38x38_2a1f524c',
    base__c_48x48 = 'VehicleType_base__c_48x48_e19c5d21',
    base__c_83x74 = 'VehicleType_base__c_83x74_d3c76480',
    styles$8 = {
        root: root$8,
        base: base$8,
        base__c_24x24: base__c_24x24,
        base__c_38x38: base__c_38x38,
        base__c_48x48: base__c_48x48,
        base__c_83x74: base__c_83x74,
    };
var VehicleTypeSize = ((e) => (
        (e.C24x24 = 'c_24x24'),
        (e.C38x38 = 'c_38x38'),
        (e.C48x48 = 'c_48x48'),
        (e.C83x74 = 'c_83x74'),
        e
    ))(VehicleTypeSize || {}),
    VehicleTypeColor = ((e) => (
        (e.Silver = 'silver'),
        (e.Gray = 'gray'),
        (e.Elite = 'elite'),
        (e.WhiteSpanish = 'whitespanish'),
        (e.WhiteSpanishBright = 'whitespanish_bright'),
        e
    ))(VehicleTypeColor || {});
const VehicleType = reactExports.memo(function ({ type: e, color: t, className: s, size: a = 'c_24x24' }) {
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$8.base, styles$8[`base__${a}`], s),
        style: {
            backgroundImage: `url('R.images.last_stand.gui.maps.icons.vehicleTypes.flat.${t}.${a}.${normalizeResource(e)}')`,
        },
    });
});
var __webpack_modules__ = {
        859: (e, t, s) => {
            s.d(t, { O: () => J });
            var a = {};
            (s.r(a), s.d(a, { mouse: () => m, off: () => u, on: () => d, onResize: () => c, onScaleUpdated: () => _ }));
            var o = {};
            (s.r(o),
                s.d(o, {
                    events: () => a,
                    getMouseGlobalPosition: () => h,
                    getSize: () => y,
                    graphicsQuality: () => v,
                    playSound: () => p,
                    setRTPC: () => x,
                }));
            var n = {};
            (s.r(n), s.d(n, { getBgUrl: () => T, getTextureUrl: () => w }));
            var r = {};
            function i(e) {
                return (t) => (
                    engine.on(e, t),
                    () => {
                        engine.off(e, t);
                    }
                );
            }
            function l(e) {
                viewEnv.setTrackMouseOnStage(e);
            }
            (s.r(r),
                s.d(r, {
                    addModelObserver: () => D,
                    addPreloadTexture: () => N,
                    children: () => n,
                    displayStatus: () => f,
                    displayStatusIs: () => Z,
                    events: () => C,
                    extraSize: () => X,
                    forceTriggerMouseMove: () => K,
                    freezeTextureBeforeResize: () => A,
                    getBrowserTexturePath: () => I,
                    getDisplayStatus: () => z,
                    getFontNames: () => Y,
                    getScale: () => H,
                    getSize: () => M,
                    getViewGlobalPosition: () => B,
                    isEventHandled: () => G,
                    isFocused: () => W,
                    pxToRem: () => V,
                    remToPx: () => F,
                    resize: () => L,
                    sendEvent: () => $,
                    setAnimateWindow: () => q,
                    setEventHandled: () => U,
                    setInputPaddingsRem: () => k,
                    setSidePaddingsRem: () => O,
                    whenTutorialReady: () => Q,
                }));
            const c = i('clientResized'),
                _ = i('self.onScaleUpdated'),
                d = (e, t) => engine.on(e, t),
                u = (e, t) => engine.off(e, t),
                b = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') },
                m = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function s() {
                        e.enabled && l(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', s))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', s))
                            : l(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, s) => (
                            (t[s] = (function (t) {
                                return (s) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const n = `mouse${t}`,
                                        r = b[t]((e) => s([e, 'outside']));
                                    function i(e) {
                                        s([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        a(),
                                        () => {
                                            o &&
                                                (r(),
                                                window.removeEventListener(n, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(s)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
            function p(e) {
                engine.call('PlaySound', e).catch((t) => {
                    console.error(`playSound('${e}'): `, t);
                });
            }
            function x(e, t) {
                engine.call('SetRTPCGlobal', e, t).catch((s) => {
                    console.error(`setRTPC('${e}', '${t}'): `, s);
                });
            }
            function y(e = 'px') {
                return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
            }
            function h(e = 'px') {
                return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
            }
            const v = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                },
                E = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                R = Object.keys(E).reduce((e, t) => ((e[t] = () => p(E[t])), e), {}),
                g = { play: Object.assign({}, R, { sound: p }), setRTPC: x };
            function w(e, t, s = 1) {
                return viewEnv.getChildTexturePath(e, t.width, t.height, s);
            }
            function T(e, t, s) {
                return `url(${w(e, t, s)})`;
            }
            const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                C = {
                    onTextureFrozen: i('self.onTextureFrozen'),
                    onTextureReady: i('self.onTextureReady'),
                    onDomBuilt: i('self.onDomBuilt'),
                    onLoaded: i('self.onLoaded'),
                    onDisplayChanged: i('self.onShowingStatusChanged'),
                    onFocusUpdated: i('self.onFocusChanged'),
                    children: {
                        onAdded: i('children.onAdded'),
                        onLoaded: i('children.onLoaded'),
                        onRemoved: i('children.onRemoved'),
                        onAttached: i('children.onAttached'),
                        onTextureReady: i('children.onTextureReady'),
                        onRequestPosition: i('children.requestPosition'),
                    },
                },
                j = ['args'],
                S = (e, t) => {
                    const s = 'GFViewEventProxy';
                    if (void 0 !== t) {
                        const o = t.args,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var s = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        s[a] = e[a];
                                    }
                                return s;
                            })(t, j);
                        return void 0 !== o
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: s, type: e }, n, {
                                      arguments:
                                          ((a = o),
                                          Object.entries(a).map(([e, t]) => {
                                              const s = 'GFValueProxy';
                                              switch (typeof t) {
                                                  case 'number':
                                                      return { __Type: s, name: e, number: t };
                                                  case 'boolean':
                                                      return { __Type: s, name: e, bool: t };
                                                  default:
                                                      return { __Type: s, name: e, string: t.toString() };
                                              }
                                          })),
                                  }),
                              )
                            : viewEnv.handleViewEvent(Object.assign({ __Type: s, type: e }, n));
                    }
                    return viewEnv.handleViewEvent({ __Type: s, type: e });
                    var a;
                },
                $ = {
                    close(e) {
                        S('popover' === e ? 2 : 32);
                    },
                    minimize() {
                        S(64);
                    },
                    move(e) {
                        S(16, { isMouseEvent: !0, on: e });
                    },
                },
                P = 15;
            function N(e) {
                viewEnv.addPreloadTexture(e);
            }
            function k(e) {
                viewEnv.setHitAreaPaddingsRem(e, e, e, e, P);
            }
            function I(e, t, s, a = 1) {
                return viewEnv.getWebBrowserTexturePath(e, t, s, a);
            }
            function D(e, t, s) {
                return viewEnv.addDataChangedCallback(e, t, s);
            }
            function O(e) {
                viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, P);
            }
            function M(e = 'px') {
                return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
            }
            function L(e, t, s = 'px') {
                return 'rem' === s ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
            }
            function B(e = 'rem') {
                const t = viewEnv.getViewGlobalPositionRem();
                return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
            }
            function A() {
                viewEnv.freezeTextureBeforeResize();
            }
            function H() {
                return viewEnv.getScale();
            }
            function V(e) {
                return viewEnv.pxToRem(e);
            }
            function F(e) {
                return viewEnv.remToPx(e);
            }
            function q(e, t) {
                viewEnv.setAnimateWindow(e, t);
            }
            function W() {
                return viewEnv.isFocused();
            }
            function U() {
                return viewEnv.setEventHandled();
            }
            function G() {
                return viewEnv.isEventHandled();
            }
            function K() {
                viewEnv.forceTriggerMouseMove();
            }
            function z() {
                return viewEnv.getShowingStatus();
            }
            const Y = (() => {
                    let e = [];
                    return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                })(),
                Z = Object.keys(f).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === f[t]), e), {}),
                X = {
                    set: (e, t) => {
                        viewEnv.setExtraSizeRem(e, t);
                    },
                    get: (e, t) => {
                        viewEnv.getExtraSizeRem(e, t);
                    },
                },
                Q = Promise.all([
                    new Promise((e) => {
                        window.isDomBuilt ? e() : C.onDomBuilt(e);
                    }),
                    engine.whenReady,
                ]),
                J = { view: r, client: o, sound: g };
        },
        310: (e, t, s) => {
            s.d(t, { Z: () => n });
            var a = s(859);
            class o {
                constructor() {
                    ((this._callbacks = void 0),
                        (this._updateHandler = void 0),
                        (this._views = void 0),
                        (this.clearViewCallbacks = (e) => {
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
                    return (window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker);
                }
                clear() {
                    (void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                        (this._callbacks = {}));
                }
                addCallback(e, t, s = 0, o = !0) {
                    void 0 === this._updateHandler &&
                        (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                    const n = a.O.view.addModelObserver(e, s, o);
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
                        const a = this._callbacks[s];
                        void 0 !== a && a(e, t);
                    });
                }
            }
            o.__instance = void 0;
            const n = o;
        },
        421: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
            var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310),
                _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);
            class ViewModel {
                constructor(path, watchingFields = []) {
                    ((this.dataTracker = void 0),
                        (this.modelPath = void 0),
                        (this.callbacks = void 0),
                        (this.data = void 0),
                        (this._notifyObservers = () => {
                            ((this.data = eval(this.modelPath)),
                                this.callbacks.forEach((e) => {
                                    e(this.data);
                                }));
                        }),
                        (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                        (this.modelPath = path),
                        (this.callbacks = new Set()),
                        (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
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
            const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
        },
        461: (e, t, s) => {
            s.d(t, { B0: () => l, c9: () => w, ry: () => g });
            class a {
                constructor() {
                    ((this.entries = []),
                        (this._listenMouse = !1),
                        (this.onMouseDown = (e) => {
                            this.entries.forEach(({ container: t, callback: s }) => {
                                let a = e.target;
                                do {
                                    if (a === t) return;
                                    a = a.parentNode;
                                } while (a);
                                s();
                            });
                        }));
                }
                static get instance() {
                    return (a.__instance || (a.__instance = new a()), a.__instance);
                }
                register(e, t) {
                    (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                }
                unregister(e, t) {
                    const s = e,
                        a = t;
                    ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== s || t !== a)),
                        this.removeMouseListener());
                }
                addMouseListener() {
                    this._listenMouse ||
                        (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                }
                removeMouseListener() {
                    this._listenMouse &&
                        0 === this.entries.length &&
                        (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                }
            }
            a.__instance = void 0;
            const o = a;
            var n = s(310);
            const r = {
                    getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                    getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                    getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                    getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                    toUpperCase: (e) => systemLocale.toUpperCase(e),
                    toLowerCase: (e) => systemLocale.toUpperCase(e),
                },
                i = {
                    getNumberFormat: (e) => userLocale.getNumberFormat(e),
                    getTimeFormat: (e, t, s) => userLocale.getTimeFormat(e, t, void 0 === s || s),
                    getTimeString: (e, t, s) => userLocale.getTimeString(e, t, void 0 === s || s),
                };
            let l;
            var c;
            (((c = l || (l = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                (c[(c.MOVE = 16)] = 'MOVE'),
                (c[(c.CLOSE = 32)] = 'CLOSE'),
                (c[(c.MINIMIZE = 64)] = 'MINIMIZE'));
            const _ = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                b = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            let m, p;
            var x;
            (((x = m || (m = {}))[(x.NONE = -1)] = 'NONE'),
                (x[(x.ALT = 165)] = 'ALT'),
                (x[(x.ENTER = 13)] = 'ENTER'),
                (x[(x.ESCAPE = 27)] = 'ESCAPE'),
                (x[(x.SPACE = 32)] = 'SPACE'),
                (x[(x.END = 35)] = 'END'),
                (x[(x.HOME = 36)] = 'HOME'),
                (x[(x.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                (x[(x.ARROW_UP = 38)] = 'ARROW_UP'),
                (x[(x.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                (x[(x.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                (x[(x.NUM_PLUS = 107)] = 'NUM_PLUS'),
                (x[(x.NUM_MINUS = 109)] = 'NUM_MINUS'),
                (x[(x.PLUS = 187)] = 'PLUS'),
                (x[(x.MINUS = 189)] = 'MINUS'),
                (x[(x.PAGE_UP = 33)] = 'PAGE_UP'),
                (x[(x.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                (x[(x.BACKSPACE = 8)] = 'BACKSPACE'),
                (x[(x.DELETE = 46)] = 'DELETE'),
                (x[(x.TAB = 9)] = 'TAB'),
                (x[(x.KEY_N = 78)] = 'KEY_N'),
                (x[(x.KEY_1 = 49)] = 'KEY_1'),
                (x[(x.KEY_2 = 50)] = 'KEY_2'),
                (x[(x.KEY_3 = 51)] = 'KEY_3'),
                (x[(x.KEY_4 = 52)] = 'KEY_4'),
                (x[(x.KEY_5 = 53)] = 'KEY_5'),
                (x[(x.KEY_6 = 54)] = 'KEY_6'),
                (x[(x.KEY_7 = 55)] = 'KEY_7'),
                (x[(x.KEY_8 = 56)] = 'KEY_8'),
                (x[(x.KEY_9 = 57)] = 'KEY_9'),
                (function (e) {
                    ((e.ALT = 'Alt'),
                        (e.ALT_GRAPH = 'AltGraph'),
                        (e.CAPS_LOCK = 'CapsLock'),
                        (e.CONTROL = 'Control'),
                        (e.FN = 'Fn'),
                        (e.FN_LOCK = 'FnLock'),
                        (e.META = 'Meta'),
                        (e.NUM_LOCK = 'NumLock'),
                        (e.SCROLL_LOCK = 'ScrollLock'),
                        (e.SHIFT = 'Shift'),
                        (e.SYMBOL = 'Symbol'),
                        (e.SYMBOL_LOCK = 'SymbolLock'));
                })(p || (p = {})));
            var y = s(859);
            const h = ['args'];
            function v(e, t, s, a, o, n, r) {
                try {
                    var i = e[n](r),
                        l = i.value;
                } catch (c) {
                    return void s(c);
                }
                i.done ? t(l) : Promise.resolve(l).then(a, o);
            }
            const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                g = (function () {
                    var e,
                        t =
                            ((e = function* () {
                                return (
                                    !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                    new Promise((e) => {
                                        engine.on('Ready', e);
                                    })
                                );
                            }),
                            function () {
                                var t = this,
                                    s = arguments;
                                return new Promise(function (a, o) {
                                    var n = e.apply(t, s);
                                    function r(e) {
                                        v(n, a, o, r, i, 'next', e);
                                    }
                                    function i(e) {
                                        v(n, a, o, r, i, 'throw', e);
                                    }
                                    r(void 0);
                                });
                            });
                    return function () {
                        return t.apply(this, arguments);
                    };
                })(),
                w = (e, t) => {
                    const s = 'GFViewEventProxy';
                    if (void 0 !== t) {
                        const o = t.args,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var s = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        s[a] = e[a];
                                    }
                                return s;
                            })(t, h);
                        void 0 !== o
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: s, type: e }, n, {
                                      arguments:
                                          ((a = o),
                                          Object.entries(a).map(([e, t]) => {
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
                                          })),
                                  }),
                              )
                            : viewEnv.handleViewEvent(Object.assign({ __Type: s, type: e }, n));
                    } else viewEnv.handleViewEvent({ __Type: s, type: e });
                    var a;
                },
                T = () => w(l.CLOSE),
                f = (e, t) => {
                    e.keyCode === m.ESCAPE && t();
                };
            var C = s(421);
            const j = o.instance,
                S = {
                    DataTracker: n.Z,
                    ViewModel: C.Z,
                    ViewEventType: l,
                    NumberFormatType: _,
                    RealFormatType: d,
                    TimeFormatType: u,
                    DateFormatType: b,
                    makeGlobalBoundingBox: E,
                    sendMoveEvent: (e) => w(l.MOVE, { isMouseEvent: !0, on: e }),
                    sendCloseEvent: T,
                    sendClosePopOverEvent: () => w(l.POP_OVER, { on: !1 }),
                    sendShowContextMenuEvent: (e, t, s = 0) => {
                        w(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: s, args: t });
                    },
                    sendShowPopOverEvent: (e, t, s, a, o = R.invalid('resId'), n) => {
                        const r = y.O.view.getViewGlobalPosition(),
                            i = s.getBoundingClientRect(),
                            c = i.x,
                            _ = i.y,
                            d = i.width,
                            u = i.height,
                            b = {
                                x: y.O.view.pxToRem(c) + r.x,
                                y: y.O.view.pxToRem(_) + r.y,
                                width: y.O.view.pxToRem(d),
                                height: y.O.view.pxToRem(u),
                            };
                        w(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: o,
                            direction: t,
                            bbox: E(b),
                            on: !0,
                            args: n,
                        });
                    },
                    addEscapeListener: (e) => {
                        const t = (t) => f(t, e);
                        return (window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t));
                    },
                    closeOnEsc: (e) => {
                        f(e, T);
                    },
                    handleViewEvent: w,
                    onBindingsReady: g,
                    onLayoutReady: () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                    isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                    isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                    dumpViewModel: function e(t) {
                        const s = {};
                        if ('object' != typeof t) return t;
                        for (const a in t)
                            if (Object.prototype.hasOwnProperty.call(t, a)) {
                                const o = Object.prototype.toString.call(t[a]);
                                if (o.startsWith('[object CoherentArrayProxy]')) {
                                    const o = t[a];
                                    s[a] = [];
                                    for (let t = 0; t < o.length; t++) s[a].push({ value: e(o[t].value) });
                                } else
                                    o.startsWith('[object class BW::WULF::ViewModel')
                                        ? (s[a] = e(t[a]))
                                        : (s[a] = t[a]);
                            }
                        return s;
                    },
                    ClickOutsideManager: j,
                    SystemLocale: r,
                    UserLocale: i,
                };
            window.ViewEnvHelper = S;
        },
    },
    __webpack_module_cache__ = {};
function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var s = (__webpack_module_cache__[e] = { exports: {} });
    return (__webpack_modules__[e](s, s.exports, __webpack_require__), s.exports);
}
((__webpack_require__.d = (e, t) => {
    for (var s in t)
        __webpack_require__.o(t, s) &&
            !__webpack_require__.o(e, s) &&
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
}),
    (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (__webpack_require__.r = (e) => {
        ('undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 }));
    }));
var __webpack_exports__ = {};
(() => {
    __webpack_require__.d(__webpack_exports__, { x: () => a });
    var e = __webpack_require__(859),
        t = __webpack_require__(461);
    const s =
            ((o = {
                cloneElement: () => reactExports.cloneElement,
                memo: () => reactExports.memo,
                useCallback: () => reactExports.useCallback,
                useMemo: () => reactExports.useMemo,
                useRef: () => reactExports.useRef,
            }),
            (n = {}),
            __webpack_require__.d(n, o),
            n),
        a = (0, s.memo)(({ args: a, children: o, decoratorID: n = 0, isLeftClick: r, isDisabled: i = !1 }) => {
            const l = (0, s.useRef)(null),
                c = (0, s.useCallback)(() => {
                    ((0, t.c9)(t.B0.CONTEXT_MENU, {
                        contentID: R.views.common.BackportContextMenu('resId'),
                        decoratorID: n,
                        isMouseEvent: !1,
                        on: !0,
                        args: a,
                    }),
                        e.O.sound.play.yes1());
                }, [a, n]),
                _ = (0, s.useCallback)(
                    (e) => {
                        ((r && 0 === e.button) || (!r && 2 === e.button)) && !i && c();
                    },
                    [r, i, c],
                );
            return (0, s.useMemo)(() => (0, s.cloneElement)(o, { onMouseDown: _, ref: l }), [o, _]);
        });
    var o, n;
})();
var __webpack_exports__ContextMenu = __webpack_exports__.x;
const root$7 = 'InteractionControls_root_c9a30f9e',
    base$7 = 'InteractionControls_146f6573',
    control = 'InteractionControls_control_e0e0953c',
    button = 'InteractionControls_button_69089c04',
    icon$1 = 'InteractionControls_icon_54c40dd8',
    icon__addFriend = 'InteractionControls_icon__addFriend_382e2b7b',
    icon__friendSent = 'InteractionControls_icon__friendSent_41931811',
    icon__friendBlacklist = 'InteractionControls_icon__friendBlacklist_7a788b92',
    icon__friend = 'InteractionControls_icon__friend_a14815f9',
    icon__platoonCanMade = 'InteractionControls_icon__platoonCanMade_a89f038a',
    icon__platoonSent = 'InteractionControls_icon__platoonSent_af35adbd',
    icon__platoonDone = 'InteractionControls_icon__platoonDone_684bbfd2',
    icon__platoonUnavailable = 'InteractionControls_icon__platoonUnavailable_f10b79f3',
    icon__menu = 'InteractionControls_icon__menu_4472d150',
    styles$7 = {
        root: root$7,
        base: base$7,
        control: control,
        button: button,
        icon: icon$1,
        icon__addFriend: icon__addFriend,
        icon__friendSent: icon__friendSent,
        icon__friendBlacklist: icon__friendBlacklist,
        icon__friend: icon__friend,
        icon__platoonCanMade: icon__platoonCanMade,
        icon__platoonSent: icon__platoonSent,
        icon__platoonDone: icon__platoonDone,
        icon__platoonUnavailable: icon__platoonUnavailable,
        icon__menu: icon__menu,
    },
    stopPropagation = (e) => {
        (e.stopPropagation(), e.preventDefault());
    },
    pickFriendshipButtonState = (e, t, s) => (e ? 'blacklisted' : t ? 'requestSent' : s ? 'friend' : 'default'),
    FriendshipResources = {
        blacklisted: {
            icon: styles$7.icon__friendBlacklist,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.removeFromBlacklist(),
            isButton: !0,
            isDisabled: !1,
        },
        friend: {
            icon: styles$7.icon__friend,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.friend(),
            isButton: !0,
            isDisabled: !0,
        },
        requestSent: {
            icon: styles$7.icon__friendSent,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.inviteSent(),
            isButton: !1,
            isDisabled: !1,
        },
        default: {
            icon: styles$7.icon__addFriend,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.sendInvite(),
            isButton: !0,
            isDisabled: !1,
        },
    },
    pickPlatoonButtonState = (e, t, s) =>
        s ? 'platoonSent' : e && !t ? 'platoonCanMade' : t ? 'platoonDone' : 'platoonUnavailable',
    PlatoonResources = {
        platoonSent: {
            icon: styles$7.icon__platoonSent,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonSent(),
            isButton: !1,
            isDisabled: !1,
        },
        platoonDone: {
            icon: styles$7.icon__platoonDone,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonDone(),
            isButton: !0,
            isDisabled: !0,
        },
        platoonUnavailable: {
            icon: styles$7.icon__platoonUnavailable,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonUnavailable(),
            isButton: !1,
            isDisabled: !1,
        },
        platoonCanMade: {
            icon: styles$7.icon__platoonCanMade,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonCanMade(),
            isButton: !0,
            isDisabled: !1,
        },
    },
    InteractionControls = observer(
        ({
            className: e,
            isInFriendList: t,
            playerId: s,
            userName: a,
            clanAbbrev: o,
            vehicleCD: n,
            clientArenaIdx: r,
            isBlacklisted: i,
            isFriendRequestSent: l,
            isPlatoonRequestCanMade: c,
            isPlatoonRequestInSquad: _,
            isPlatoonRequestSent: d,
        }) => {
            const {
                    controls: { sendFriendRequest: u, removeFromBlacklist: b, sendPlatoonInvitation: m },
                } = useModel$1(),
                p = pickFriendshipButtonState(i, l, t),
                x = pickPlatoonButtonState(c, _, d),
                y = reactExports.useCallback(
                    (e) => {
                        (stopPropagation(e), 'blacklisted' === p && b(s, a), 'default' === p && u(s, a, o));
                    },
                    [u, b, p, s, a, o],
                ),
                h = reactExports.useCallback(
                    (e) => {
                        (stopPropagation(e), 'platoonCanMade' === x && m(s, a));
                    },
                    [m, x, s, a],
                ),
                v = reactExports.useMemo(() => ({ body: PlatoonResources[x].tooltipBody }), [x]),
                E = reactExports.useMemo(
                    () => ({ playerId: s, userName: a, clanAbbrev: o, clientArenaIdx: r, vehicleCD: n }),
                    [s, a, o, r, n],
                ),
                g = reactExports.useCallback((e) => {
                    stopPropagation(e);
                }, []);
            return jsxRuntimeExports.jsxs('div', {
                className: cx(styles$7.base, e),
                children: [
                    jsxRuntimeExports.jsx(SimpleTooltip, {
                        body: FriendshipResources[p].tooltipBody,
                        children: jsxRuntimeExports.jsx('div', {
                            className: styles$7.control,
                            children: FriendshipResources[p].isButton
                                ? jsxRuntimeExports.jsx(CButton, {
                                      mixClass: styles$7.button,
                                      disabled: FriendshipResources[p].isDisabled,
                                      onClick: y,
                                      children: jsxRuntimeExports.jsx('div', {
                                          className: cx(styles$7.icon, FriendshipResources[p].icon),
                                      }),
                                  })
                                : jsxRuntimeExports.jsx('div', {
                                      className: cx(styles$7.icon, FriendshipResources[p].icon),
                                  }),
                        }),
                    }),
                    jsxRuntimeExports.jsx(SimpleTooltip, {
                        ...v,
                        children: jsxRuntimeExports.jsx('div', {
                            className: styles$7.control,
                            children: PlatoonResources[x].isButton
                                ? jsxRuntimeExports.jsx(CButton, {
                                      mixClass: styles$7.button,
                                      disabled: PlatoonResources[x].isDisabled,
                                      onClick: h,
                                      children: jsxRuntimeExports.jsx('div', {
                                          className: cx(styles$7.icon, PlatoonResources[x].icon),
                                      }),
                                  })
                                : jsxRuntimeExports.jsx('div', {
                                      className: cx(styles$7.icon, PlatoonResources[x].icon),
                                  }),
                        }),
                    }),
                    jsxRuntimeExports.jsx(SimpleTooltip, {
                        body: R.strings.last_stand_tooltips.battleResult.interaction.menu(),
                        children: jsxRuntimeExports.jsx('div', {
                            children: jsxRuntimeExports.jsx(__webpack_exports__ContextMenu, {
                                args: E,
                                isLeftClick: !0,
                                children: jsxRuntimeExports.jsx('div', {
                                    className: styles$7.control,
                                    children: jsxRuntimeExports.jsx(CButton, {
                                        mixClass: styles$7.button,
                                        type: ButtonType.secondary,
                                        onClick: g,
                                        children: jsxRuntimeExports.jsx('div', {
                                            className: cx(styles$7.icon, styles$7.icon__menu),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                ],
            });
        },
    ),
    BOT_PLAYER_ID = 0,
    RowDecorator = reactExports.memo(function ({
        bgColor: e,
        textColor: t,
        children: s,
        playerId: a,
        userName: o,
        vehicleCD: n,
        isCurrentPlayer: r,
        clanAbbrev: i,
        clientArenaIdx: l,
        isAlive: c,
        isReady: _,
    }) {
        return jsxRuntimeExports.jsx(__webpack_exports__ContextMenu, {
            args: { playerId: a, userName: o, clanAbbrev: i, clientArenaIdx: l, vehicleCD: n },
            isDisabled: r,
            children: jsxRuntimeExports.jsxs('div', {
                className: cx(
                    styles$b.base,
                    e && styles$b[`base__${e}Bg`],
                    t && styles$b[`base__${t}Text`],
                    r && styles$b.base__currentPlayer,
                    (!_ || !c) && styles$b.base__disable,
                ),
                children: [
                    jsxRuntimeExports.jsx('div', { className: styles$b.backgroundHelper }),
                    jsxRuntimeExports.jsx('div', { className: styles$b.childrenWrapper, children: s }),
                ],
            }),
        });
    });
var TeamMemberBanType = ((e) => ((e.NotBanned = 'notBanned'), (e.Warned = 'warned'), (e.Banned = 'banned'), e))(
    TeamMemberBanType || {},
);
const root$6 = 'PlayerInfo_root_56d02918',
    base$6 = 'PlayerInfo_c13516d9',
    nickName = 'PlayerInfo_nickName_7b81bced',
    nickName__withSquad = 'PlayerInfo_nickName__withSquad_7cb67087',
    userName = 'PlayerInfo_userName_948f5015',
    userName__withBadge = 'PlayerInfo_userName__withBadge_a8d4a0ad',
    name = 'PlayerInfo_name_20d67aee',
    base__currentPlayer$1 = 'PlayerInfo_base__currentPlayer_56d02918',
    base__tabWindow = 'PlayerInfo_base__tabWindow_56d02918',
    clanTag = 'PlayerInfo_clanTag_c2c71134',
    squad = 'PlayerInfo_squad_e7a2ab25',
    squad__highContrast = 'PlayerInfo_squad__highContrast_e04ef72b',
    squad__defaultAlly = 'PlayerInfo_squad__defaultAlly_507bf2dc',
    banIcon = 'PlayerInfo_banIcon_fa60558c',
    banIcon__warned = 'PlayerInfo_banIcon__warned_1c18ebaa',
    banIcon__banned = 'PlayerInfo_banIcon__banned_732735b5',
    styles$6 = {
        root: root$6,
        base: base$6,
        nickName: nickName,
        nickName__withSquad: nickName__withSquad,
        userName: userName,
        userName__withBadge: userName__withBadge,
        name: name,
        base__currentPlayer: base__currentPlayer$1,
        base__tabWindow: base__tabWindow,
        clanTag: clanTag,
        squad: squad,
        squad__highContrast: squad__highContrast,
        squad__defaultAlly: squad__defaultAlly,
        banIcon: banIcon,
        banIcon__warned: banIcon__warned,
        banIcon__banned: banIcon__banned,
    },
    TABLE_TYPE_BADGE = { [TableType.TabWindow]: 'default', [TableType.LeaderBoard]: 'default' },
    PlayerInfo = ({ user: e, squadNum: t, isOwnSquad: s = !1, banType: a, isCurrentPlayer: o }) => {
        const n = reactExports.useContext(TeamListTypeContext),
            r = TABLE_TYPE_BADGE[n],
            i = R.images.last_stand.gui.maps.icons.common.teamList.squad.$dyn(r),
            l = t > 0;
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$6.base, styles$6[`base__${n}`], o && styles$6.base__currentPlayer),
            children: [
                l &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(
                            styles$6.squad,
                            styles$6[`squad__${r}`],
                            s && 'default' === r && styles$6.squad__defaultAlly,
                        ),
                        style: { backgroundImage: `url('${i.$dyn(s ? 'ally' : 'other')}')` },
                        children: t,
                    }),
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$6.nickName, l && styles$6.nickName__withSquad),
                    children: [
                        a !== TeamMemberBanType.NotBanned &&
                            jsxRuntimeExports.jsx(SimpleTooltip, {
                                ...() => {
                                    if (a === TeamMemberBanType.NotBanned) return { body: void 0, header: void 0 };
                                    const e = R.strings.last_stand_tooltips.teamList.$dyn(a);
                                    if (o) {
                                        return { body: e.$dyn('self').$dyn('body'), header: e.$dyn('header') };
                                    }
                                    return { body: e.$dyn('body'), header: e.$dyn('header') };
                                },
                                children: jsxRuntimeExports.jsx('div', {
                                    className: cx(styles$6.banIcon, styles$6[`banIcon__${a}`]),
                                }),
                            }),
                        jsxRuntimeExports.jsx('div', {
                            className: styles$6.name,
                            children: jsxRuntimeExports.jsx(PlayerNickname, {
                                ...e,
                                igrType: e.igrType,
                                badge: e.badge,
                                userNameClassName: cx(
                                    styles$6.userName,
                                    e.badge.badgeID && styles$6.userName__withBadge,
                                ),
                                suffixBadge: e.suffixBadge,
                                clanTagClassName: styles$6.clanTag,
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    root$5 = 'StatValueDecorator_root_5170dfab',
    base$5 = 'StatValueDecorator_49276f9',
    base__max = 'StatValueDecorator_base__max_9ad2cb6a',
    crown = 'StatValueDecorator_crown_94f6c06b',
    crown__gold = 'StatValueDecorator_crown__gold_702e5240',
    base__currentPlayer = 'StatValueDecorator_base__currentPlayer_5170dfab',
    crown__silver = 'StatValueDecorator_crown__silver_14f41da8',
    crown__bronze = 'StatValueDecorator_crown__bronze_60a3d8e7',
    amount = 'StatValueDecorator_amount_e1ea0d5c',
    styles$5 = {
        root: root$5,
        base: base$5,
        base__max: base__max,
        crown: crown,
        crown__gold: crown__gold,
        base__currentPlayer: base__currentPlayer,
        crown__silver: crown__silver,
        crown__bronze: crown__bronze,
        amount: amount,
    },
    CROWN_BY_PLACE = ['gold', 'silver', 'bronze'],
    StatValueDecorator = reactExports.memo(function ({
        current: e,
        isMax: t,
        column: s,
        tableType: a,
        isCrowned: o,
        isCurrentPlayer: n,
    }) {
        const r = getNumberFormat(e, 1);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$5.base, n && styles$5.base__currentPlayer, t && styles$5.base__max),
            children: [
                o &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(
                            styles$5.crown,
                            a === TableType.LeaderBoard &&
                                s === ColumnEnum.Place &&
                                styles$5[`crown__${CROWN_BY_PLACE[e - 1]}`],
                        ),
                    }),
                jsxRuntimeExports.jsx('span', { className: styles$5.amount, children: r }),
            ],
        });
    }),
    checkForTag = (e, t) => e.split(',').includes(t),
    root$4 = 'VehicleInfo_root_9c9aeed',
    base$4 = 'VehicleInfo_30590fa0',
    label$1 = 'VehicleInfo_label_5af110b',
    premiumIGR = 'VehicleInfo_premiumIGR_aca7dde6',
    styles$4 = { root: root$4, base: base$4, label: label$1, premiumIGR: premiumIGR },
    VehicleInfo = observer(({ vehicleShortName: e, vehicleType: t, color: s, tags: a }) =>
        jsxRuntimeExports.jsxs('div', {
            className: styles$4.base,
            children: [
                jsxRuntimeExports.jsx(VehicleType, { size: VehicleTypeSize.C38x38, color: s, type: t }),
                checkForTag(a, PREMIUM_IGR_TAG) && jsxRuntimeExports.jsx('div', { className: styles$4.premiumIGR }),
                jsxRuntimeExports.jsx(ExtendedText, {
                    text: e,
                    classMix: styles$4.label,
                    isTruncationAvailable: !0,
                    isTooltipEnable: !0,
                }),
            ],
        }),
    ),
    PlayerRow = observer(
        ({
            playerId: e,
            rowStyle: t,
            isCurrentPlayer: s,
            isOwnSquad: a,
            squadNum: o,
            user: n,
            vehicle: r,
            banType: i,
            stats: l,
            columnsMaxValue: c,
            visibleColumns: _,
            isReady: d,
            isPlatoonRequestSent: u,
            isInFriendList: b,
            isPlatoonRequestCanMade: m,
            isPlatoonRequestInSquad: p,
            isFriendRequestSent: x,
            isBlacklisted: y,
            tableType: h,
            isAlive: v,
        }) => {
            const { model: E } = useModel$1(),
                { clientArenaIdx: R, contextMenuPlayerId: g } = E.root.get(),
                w = (e) => {
                    switch (e) {
                        case VEHICLE_COLUMN:
                            return CellStyleEnum.VehicleIcon;
                        case DAMAGE_COLUMN:
                            return CellStyleEnum.Damage;
                    }
                    return CellStyleEnum.Stats;
                },
                T = e === BOT_PLAYER_ID || !s,
                f = s || a ? VehicleTypeColor.WhiteSpanishBright : VehicleTypeColor.Gray;
            return jsxRuntimeExports.jsxs(RowDecorator, {
                ...t,
                playerId: e,
                userName: n.userName,
                vehicleCD: r.vehicleCD,
                clanAbbrev: n.clanAbbrev,
                isCurrentPlayer: s,
                isReady: d,
                clientArenaIdx: R,
                contextMenuPlayerId: g,
                isAlive: h !== TableType.TabWindow || v,
                children: [
                    jsxRuntimeExports.jsx(CellDecorator, {
                        cellStyle: CellStyleEnum.Player,
                        isCurrentPlayer: s,
                        children: jsxRuntimeExports.jsx(PlayerInfo, {
                            user: n,
                            squadNum: o,
                            isOwnSquad: a,
                            banType: i,
                            isCurrentPlayer: s,
                        }),
                    }),
                    jsxRuntimeExports.jsx(CellDecorator, {
                        cellStyle: CellStyleEnum.Actions,
                        isCurrentPlayer: s,
                        children:
                            T &&
                            jsxRuntimeExports.jsx(InteractionControls, {
                                clientArenaIdx: R,
                                clanAbbrev: n.clanAbbrev,
                                vehicleCD: r.vehicleCD,
                                playerId: e,
                                userName: n.userName,
                                isBlacklisted: y,
                                isFriendRequestSent: x,
                                isInFriendList: b,
                                isPlatoonRequestCanMade: m,
                                isPlatoonRequestInSquad: p,
                                isPlatoonRequestSent: u,
                            }),
                    }),
                    jsxRuntimeExports.jsx(CellDecorator, {
                        cellStyle: CellStyleEnum.Vehicle,
                        children: jsxRuntimeExports.jsx(VehicleInfo, { ...r, color: f }),
                    }),
                    _.map((e) => {
                        const t = e === ColumnEnum.Place ? 1 === l[e] : c[e] === l[e] && l[e] > 0,
                            a = !l[ColumnEnum.Damage];
                        return jsxRuntimeExports.jsx(
                            CellDecorator,
                            {
                                cellStyle: w(e),
                                children: jsxRuntimeExports.jsx(StatValueDecorator, {
                                    tableType: h,
                                    column: e,
                                    current: l[e],
                                    isMax: t,
                                    isCrowned: !a && (e === ColumnEnum.Place ? l[e] < 4 : t),
                                    isCurrentPlayer: s,
                                }),
                            },
                            e,
                        );
                    }),
                ],
            });
        },
    );
var RowDecoratorBgColorEnum = ((e) => ((e.Default = 'default'), (e.Red = 'red'), (e.Gold = 'gold'), e))(
        RowDecoratorBgColorEnum || {},
    ),
    RowDecoratorTextColorEnum = ((e) => ((e.Default = 'default'), (e.Gold = 'gold'), e))(
        RowDecoratorTextColorEnum || {},
    );
const root$3 = 'TeamList_root_68eb33e8',
    base$3 = 'TeamList_1e6e4250',
    styles$3 = { root: root$3, base: base$3 },
    getRowStyle = (e) => ({
        bgColor: e.isCurrentPlayer ? RowDecoratorBgColorEnum.Gold : RowDecoratorBgColorEnum.Default,
        textColor:
            e.isCurrentPlayer || e.isOwnSquad ? RowDecoratorTextColorEnum.Gold : RowDecoratorTextColorEnum.Default,
    }),
    TeamList = observer(({ className: e, isSortable: t = !1, tableType: s = TableType.TabWindow }) => {
        const { model: a, controls: o } = useModel$1(),
            n = a.sortDirection.get(),
            r = a.sortBy.get(),
            i = a.computes.getSortedTeam(),
            l = map(a.visibleColumns.get(), identity),
            c = reactExports.useCallback(
                (e) => {
                    o.setSortBy(e);
                },
                [o],
            ),
            _ = {};
        return (
            l.forEach((e) => {
                const t = map(a.team.get(), (t) => t.stats[e]);
                _[e] = Math.max(...t);
            }),
            jsxRuntimeExports.jsx('div', {
                className: cx(styles$3.base, e),
                children: jsxRuntimeExports.jsxs(TeamListTypeContext.Provider, {
                    value: s,
                    children: [
                        jsxRuntimeExports.jsx(HeaderRow, {
                            visibleColumns: l,
                            sortEnabled: t,
                            onSortChanged: c,
                            sortBy: r,
                            sortDirection: n,
                            tableType: s,
                        }),
                        i.map((e) =>
                            reactExports.createElement(PlayerRow, {
                                ...e,
                                rowStyle: getRowStyle(e),
                                columnsMaxValue: _,
                                key: e.id,
                                visibleColumns: l,
                                isHoverEnabled: s === TableType.LeaderBoard,
                                tableType: s,
                            }),
                        ),
                    ],
                }),
            })
        );
    }),
    TeamStatsApp = (e) => jsxRuntimeExports.jsx(TeamList, { ...e }),
    TeamStats = reactExports.memo(function (e) {
        const { resId: t, ...s } = e,
            a = reactExports.useMemo(() => ({ rootId: t }), [t]);
        return jsxRuntimeExports.jsx(MediaWrapper, {
            children: jsxRuntimeExports.jsx(ModelProvider$1, {
                options: a,
                children: jsxRuntimeExports.jsx(TeamStatsApp, { ...s }),
            }),
        });
    }),
    [ModelProvider, useModel] = initializeModelWithContext()(({ observableModel: e }) => ({ root: e.object() }), noop),
    root$2 = 'Caption_root_4db09398',
    base$2 = 'Caption_12fb43ec',
    label = 'Caption_label_c380e02d',
    line = 'Caption_line_ac746f35',
    line__right = 'Caption_line__right_824dbbcc',
    styles$2 = { root: root$2, base: base$2, label: label, line: line, line__right: line__right };
function Caption({ className: e, text: t }) {
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$2.base, e),
        children: [
            jsxRuntimeExports.jsx('div', { className: styles$2.line }),
            jsxRuntimeExports.jsx('div', { className: styles$2.label, children: t }),
            jsxRuntimeExports.jsx('div', { className: cx(styles$2.line, styles$2.line__right) }),
        ],
    });
}
const root$1 = 'Header_root_65f475ba',
    base$1 = 'Header_ec75a40',
    container = 'Header_container_b357bdd0',
    container__right = 'Header_container__right_b7afed9a',
    title = 'Header_title_b5162666',
    subtitle = 'Header_subtitle_6cea72b9',
    icon = 'Header_icon_e7539829',
    styles$1 = {
        root: root$1,
        base: base$1,
        container: container,
        container__right: container__right,
        title: title,
        subtitle: subtitle,
        icon: icon,
    },
    Header = reactExports.memo(function ({ missionTitle: e, difficultyLevel: t }) {
        return jsxRuntimeExports.jsxs('div', {
            className: styles$1.base,
            children: [
                jsxRuntimeExports.jsxs('div', {
                    className: cx(styles$1.container, styles$1.container__right),
                    children: [
                        jsxRuntimeExports.jsx('div', {
                            className: styles$1.title,
                            children: R.strings.last_stand_battle.eventStats.eventName(),
                        }),
                        jsxRuntimeExports.jsx(ExtendedText, {
                            classMix: styles$1.subtitle,
                            text: R.strings.last_stand_battle.eventStats.difficulty(),
                            binding: { difficulty: R.strings.last_stand_lobby.difficult.$dyn(`level_${t}`) },
                        }),
                    ],
                }),
                jsxRuntimeExports.jsx('div', { className: styles$1.icon }),
                jsxRuntimeExports.jsxs('div', {
                    className: styles$1.container,
                    children: [
                        jsxRuntimeExports.jsx('div', { className: styles$1.title, children: e }),
                        jsxRuntimeExports.jsx('div', {
                            className: styles$1.subtitle,
                            children: R.strings.last_stand_battle.eventStats.globalTask(),
                        }),
                    ],
                }),
            ],
        });
    }),
    root = 'TabScreenApp_root_51e48dce',
    base = 'TabScreenApp_176a4b5a',
    overlay = 'TabScreenApp_overlay_85c6dabb',
    missionTask = 'TabScreenApp_missionTask_be0c52a3',
    content = 'TabScreenApp_content_9a52d88',
    tableCaption = 'TabScreenApp_tableCaption_c3a6b840',
    flare = 'TabScreenApp_flare_7a90819c',
    styles = {
        root: root,
        base: base,
        overlay: overlay,
        missionTask: missionTask,
        content: content,
        tableCaption: tableCaption,
        flare: flare,
    },
    TabScreenApp = observer(() => {
        const { model: e } = useModel(),
            { missionTitle: t, missionTask: s, difficultyLevel: a } = e.root.get();
        return jsxRuntimeExports.jsxs('div', {
            className: styles.base,
            children: [
                jsxRuntimeExports.jsx('div', { className: styles.overlay }),
                jsxRuntimeExports.jsx(Header, { missionTitle: t, difficultyLevel: a }),
                jsxRuntimeExports.jsxs('div', {
                    className: styles.content,
                    children: [
                        jsxRuntimeExports.jsxs('div', {
                            className: styles.missionTask,
                            children: [jsxRuntimeExports.jsx('div', { className: styles.flare }), convertNbsp(s)],
                        }),
                        jsxRuntimeExports.jsx(Caption, {
                            className: styles.tableCaption,
                            text: R.strings.last_stand_battle.eventStats.tableCaption(),
                        }),
                        jsxRuntimeExports.jsx(TeamStats, {
                            resId: R.aliases.last_stand.shared.TeamStats('resId'),
                            tableType: TableType.TabWindow,
                        }),
                    ],
                }),
            ],
        });
    });
runView(jsxRuntimeExports.jsx(ModelProvider, { children: jsxRuntimeExports.jsx(TabScreenApp, {}) }));
