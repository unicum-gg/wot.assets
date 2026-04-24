import {
    j as jsxRuntimeExports,
    q as cx,
    o as observable,
    s as computedFn,
    f as action,
    r as reactExports,
    e as clsx,
    p as observer,
} from '../../../chunks/vendor.js';
import {
    p as play,
    i as initializeModelWithContext,
    d as constFalse,
    m as map,
    H as HEAVY_TANK,
    M as MEDIUM_TANK,
    L as LIGHT_TANK,
    S as SPG,
    A as AT_SPG,
    e as identity,
    I as Image,
    f as SimpleTooltip,
    g as Tooltip,
    B as Button,
    h as PlayerNickname,
    j as getNumberFormat,
    k as normalizeResource,
    V as VehicleType,
    l as sizes,
    E as ExtendedText,
    o as PREMIUM_IGR_TAG,
    q as MediaWrapper,
    n as noop,
    t as convertNbsp,
    b as runView,
    U as UIProvider,
} from '../../../chunks/lib.js';
var ColumnEnum = ((e) => (
    (e.Kills = 'kills'),
    (e.Damage = 'damage'),
    (e.Assist = 'assist'),
    (e.Blocked = 'blocked'),
    (e.Place = 'place'),
    (e.Keys = 'keys'),
    e
))(ColumnEnum || {});
const root$7 = 'SortHelper_root_af12aed1',
    base$d = 'SortHelper_9d778842',
    base__active = 'SortHelper_base__active_dbd69244',
    base__selected = 'SortHelper_base__selected_123b8b20',
    line$1 = 'SortHelper_line_f7ffaa44',
    arrow = 'SortHelper_arrow_920be1c0',
    base__desc = 'SortHelper_base__desc_af12aed1',
    styles$e = {
        root: root$7,
        base: base$d,
        base__active: base__active,
        base__selected: base__selected,
        line: line$1,
        arrow: arrow,
        base__desc: base__desc,
    },
    VEHICLE_COLUMN = 'vehicle',
    DAMAGE_COLUMN = 'damage';
function SortHelper({
    onClick: e,
    className: t,
    isSelected: s,
    isEnabled: a,
    sortDirection: n,
    column: o,
    children: r,
}) {
    return jsxRuntimeExports.jsxs('div', {
        className: cx(
            styles$e.base,
            a && styles$e.base__active,
            t,
            s && styles$e.base__selected,
            styles$e[`base__${SORT_DIRECTIONS[n]}`],
        ),
        onClick: () => {
            a && (e(o), play.click());
        },
        onMouseEnter: () => {
            a && play.highlight();
        },
        children: [
            r,
            s && a && jsxRuntimeExports.jsx('div', { className: styles$e.arrow }),
            s && jsxRuntimeExports.jsx('div', { className: styles$e.line }),
        ],
    });
}
const VEHICLE_ORDER = [HEAVY_TANK, MEDIUM_TANK, LIGHT_TANK, SPG, AT_SPG];
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
            n = computedFn(
                () =>
                    map(a.team.get(), identity)
                        .slice()
                        .sort((e, a) => {
                            const n = String(t) === ColumnEnum.Place ? -1 * Number(s) : Number(s);
                            return String(t) === VEHICLE_COLUMN
                                ? e.vehicle.vehicleType === a.vehicle.vehicleType
                                    ? n *
                                      String(e.vehicle.vehicleShortName)
                                          .toLocaleLowerCase()
                                          .localeCompare(String(a.vehicle.vehicleShortName).toLocaleLowerCase())
                                    : n *
                                      (VEHICLE_ORDER.indexOf(e.vehicle.vehicleType) -
                                          VEHICLE_ORDER.indexOf(a.vehicle.vehicleType))
                                : n * (a.stats[t] - e.stats[t]);
                        }),
                { equals: constFalse },
            );
        return { ...a, sortBy: t, sortDirection: s, computes: { getSortedTeam: n } };
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
    root$6 = 'CellDecorator_root_b5c0999b',
    base$c = 'CellDecorator_8e41db2a',
    base__keys = 'CellDecorator_base__keys_a3370dfb',
    base__actions = 'CellDecorator_base__actions_6350e0fb',
    base__tabWindow$1 = 'CellDecorator_base__tabWindow_3990bbbe',
    base__currentPlayer$3 = 'CellDecorator_base__currentPlayer_4db8f1fd',
    base__player = 'CellDecorator_base__player_d5652c4a',
    base__stats = 'CellDecorator_base__stats_a3370dfb',
    base__buffs$1 = 'CellDecorator_base__buffs_3e76b04',
    base__damage = 'CellDecorator_base__damage_c1078d6a',
    base__vehicle = 'CellDecorator_base__vehicle_b5c0999b',
    base__vehicleIcon = 'CellDecorator_base__vehicleIcon_d2d1ac28',
    children = 'CellDecorator_children_e848d814',
    base__statsLarge = 'CellDecorator_base__statsLarge_b5c0999b',
    base__kills = 'CellDecorator_base__kills_b5c0999b',
    styles$d = {
        root: root$6,
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
function CellDecorator({ cellStyle: e, bordered: t = !1, isCurrentPlayer: s, children: a }) {
    const n = reactExports.useContext(TeamListTypeContext);
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$d.base, styles$d[`base__${e}`], styles$d[`base__${n}`], s && styles$d.base__currentPlayer),
        lang: R.strings.settings.LANGUAGE_CODE(),
        children: jsxRuntimeExports.jsx('div', { className: styles$d.children, children: a }),
    });
}
const divider$1 = 'Divider_80a19f4b',
    styles$c = { divider: divider$1 },
    Divider = reactExports.forwardRef(function ({ classNames: e, className: t, ...s }, a) {
        return jsxRuntimeExports.jsx('div', {
            ...s,
            ref: a,
            className: clsx(styles$c.divider, e?.base, t),
            children: jsxRuntimeExports.jsx(Image, {
                className: e?.image,
                width: '100%',
                height: '100%',
                path: 'post_battle.row_divider',
                fit: 'cover',
            }),
        });
    }),
    root$5 = 'RowDecorator_root_aac40ec7',
    base$b = 'RowDecorator_9c2cbad3',
    base__header = 'RowDecorator_base__header_abc85b28',
    base__currentPlayer$2 = 'RowDecorator_base__currentPlayer_c096c296',
    divider = 'RowDecorator_divider_1658ecef',
    headerDivider = 'RowDecorator_headerDivider_d597113e',
    childrenWrapper = 'RowDecorator_childrenWrapper_6deceacc',
    base__defaultText = 'RowDecorator_base__defaultText_aac40ec7',
    base__goldText = 'RowDecorator_base__goldText_aac40ec7',
    base__disable = 'RowDecorator_base__disable_aac40ec7',
    backgroundHelper = 'RowDecorator_backgroundHelper_8061f17f',
    base__goldBg = 'RowDecorator_base__goldBg_aac40ec7',
    styles$b = {
        root: root$5,
        base: base$b,
        base__header: base__header,
        base__currentPlayer: base__currentPlayer$2,
        divider: divider,
        headerDivider: headerDivider,
        childrenWrapper: childrenWrapper,
        base__defaultText: base__defaultText,
        base__goldText: base__goldText,
        base__disable: base__disable,
        backgroundHelper: backgroundHelper,
        base__goldBg: base__goldBg,
    };
function HeaderRowDecorator({ children: e }) {
    return jsxRuntimeExports.jsxs('div', {
        className: cx(styles$b.base, styles$b.base__header),
        children: [
            jsxRuntimeExports.jsx('div', { className: cx(styles$b.backgroundHelper) }),
            jsxRuntimeExports.jsx('div', { className: styles$b.childrenWrapper, children: e }),
            jsxRuntimeExports.jsx(Divider, { className: styles$b.headerDivider }),
        ],
    });
}
const root$4 = 'HeaderIcon_root_1ee11e98',
    base$a = 'HeaderIcon_d7f54b6b',
    base__hoverEnabled = 'HeaderIcon_base__hoverEnabled_1ee11e98',
    base__highlighted = 'HeaderIcon_base__highlighted_a21a50f4',
    base__squad_small = 'HeaderIcon_base__squad_small_63ecb0d8',
    base__buffs = 'HeaderIcon_base__buffs_f96ed88e',
    icon$2 = 'HeaderIcon_icon_35ac5787',
    styles$a = {
        root: root$4,
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
    root$3 = 'HeaderRow_root_29fa123c',
    base$9 = 'HeaderRow_9af02515',
    text = 'HeaderRow_text_f68ca11b',
    text__tabWindow = 'HeaderRow_text__tabWindow_f2f594eb',
    cell = 'HeaderRow_cell_8a6dfec5',
    squad$1 = 'HeaderRow_squad_935f56a9',
    vehicle = 'HeaderRow_vehicle_14e4dbf7',
    border = 'HeaderRow_border_871a1365',
    upperLine = 'HeaderRow_upperLine_648f954e',
    iconBorder = 'HeaderRow_iconBorder_37a55ff9',
    actions = 'HeaderRow_actions_a19b825a',
    styles$9 = {
        root: root$3,
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
            a = {
                contentId: R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                args: { header: '', body: '' },
            };
        return (
            t === TableType.LeaderBoard
                ? ((a.args.header = s.$dyn('header')), (a.args.body = s.$dyn('body')))
                : (a.args.body = s.$dyn('header')),
            a
        );
    },
    HeaderRow = reactExports.memo(function ({
        visibleColumns: e,
        sortBy: t = ColumnEnum.Place,
        sortDirection: s,
        onSortChanged: a,
        tableType: n,
        sortEnabled: o,
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
        const c = n === TableType.LeaderBoard;
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
                jsxRuntimeExports.jsx(CellDecorator, {
                    cellStyle: CellStyleEnum.Actions,
                    children: jsxRuntimeExports.jsx(SimpleTooltip, {
                        header: R.strings.last_stand_tooltips.teamList.actions.header(),
                        body: R.strings.last_stand_tooltips.teamList.actions.body(),
                        children: jsxRuntimeExports.jsx('div', {
                            className: styles$9.actions,
                            children: R.strings.last_stand_battle_results.teamList.actions(),
                        }),
                    }),
                }),
                l.map((e) =>
                    jsxRuntimeExports.jsx(
                        CellDecorator,
                        {
                            cellStyle: cellStyle(e),
                            bordered: !0,
                            children: jsxRuntimeExports.jsx(Tooltip, {
                                ...tooltipContent(e, n),
                                children: jsxRuntimeExports.jsx('div', {
                                    className: cx(styles$9.cell, styles$9[`cell__${n}`]),
                                    children: jsxRuntimeExports.jsx(SortHelper, {
                                        isSelected: c && t === e,
                                        sortDirection: s,
                                        column: e,
                                        onClick: i,
                                        isEnabled: o,
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
    });
var __webpack_modules__ = {
        859: (e, t, s) => {
            s.d(t, { O: () => J });
            var a = {};
            (s.r(a), s.d(a, { mouse: () => m, off: () => u, on: () => d, onResize: () => c, onScaleUpdated: () => _ }));
            var n = {};
            (s.r(n),
                s.d(n, {
                    events: () => a,
                    getMouseGlobalPosition: () => v,
                    getSize: () => y,
                    graphicsQuality: () => h,
                    playSound: () => p,
                    setRTPC: () => x,
                }));
            var o = {};
            (s.r(o), s.d(o, { getBgUrl: () => f, getTextureUrl: () => w }));
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
                    addModelObserver: () => k,
                    addPreloadTexture: () => N,
                    children: () => o,
                    displayStatus: () => T,
                    displayStatusIs: () => Z,
                    events: () => C,
                    extraSize: () => X,
                    forceTriggerMouseMove: () => z,
                    freezeTextureBeforeResize: () => A,
                    getBrowserTexturePath: () => D,
                    getDisplayStatus: () => K,
                    getFontNames: () => Y,
                    getScale: () => H,
                    getSize: () => M,
                    getViewGlobalPosition: () => B,
                    isEventHandled: () => G,
                    isFocused: () => W,
                    pxToRem: () => F,
                    remToPx: () => q,
                    resize: () => L,
                    sendEvent: () => $,
                    setAnimateWindow: () => V,
                    setEventHandled: () => U,
                    setInputPaddingsRem: () => I,
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
                    const n = ['down', 'up', 'move'].reduce(
                        (t, s) => (
                            (t[s] = (function (t) {
                                return (s) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const o = `mouse${t}`,
                                        r = b[t]((e) => s([e, 'outside']));
                                    function i(e) {
                                        s([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, i),
                                        a(),
                                        () => {
                                            n &&
                                                (r(),
                                                window.removeEventListener(o, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(s)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
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
            function v(e = 'px') {
                return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
            }
            const h = {
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
            function f(e, t, s) {
                return `url(${w(e, t, s)})`;
            }
            const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                        const n = t.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var s = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        s[a] = e[a];
                                    }
                                return s;
                            })(t, j);
                        return void 0 !== n
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: s, type: e }, o, {
                                      arguments:
                                          ((a = n),
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
                            : viewEnv.handleViewEvent(Object.assign({ __Type: s, type: e }, o));
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
            function I(e) {
                viewEnv.setHitAreaPaddingsRem(e, e, e, e, P);
            }
            function D(e, t, s, a = 1) {
                return viewEnv.getWebBrowserTexturePath(e, t, s, a);
            }
            function k(e, t, s) {
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
                return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
            }
            function A() {
                viewEnv.freezeTextureBeforeResize();
            }
            function H() {
                return viewEnv.getScale();
            }
            function F(e) {
                return viewEnv.pxToRem(e);
            }
            function q(e) {
                return viewEnv.remToPx(e);
            }
            function V(e, t) {
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
            function z() {
                viewEnv.forceTriggerMouseMove();
            }
            function K() {
                return viewEnv.getShowingStatus();
            }
            const Y = (() => {
                    let e = [];
                    return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                })(),
                Z = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
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
                J = { view: r, client: n, sound: g };
        },
        310: (e, t, s) => {
            s.d(t, { Z: () => o });
            var a = s(859);
            class n {
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
                    return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                }
                clear() {
                    (void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                        (this._callbacks = {}));
                }
                addCallback(e, t, s = 0, n = !0) {
                    void 0 === this._updateHandler &&
                        (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                    const o = a.O.view.addModelObserver(e, s, n);
                    return (
                        o > 0
                            ? ((this._callbacks[o] = t),
                              s > 0 && (this._views[s] ? this._views[s].push(o) : (this._views[s] = [o])))
                            : console.error("Can't add callback for model:", e),
                        o
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
            n.__instance = void 0;
            const o = n;
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
            const n = a;
            var o = s(310);
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
            const v = ['args'];
            function h(e, t, s, a, n, o, r) {
                try {
                    var i = e[o](r),
                        l = i.value;
                } catch (c) {
                    return void s(c);
                }
                i.done ? t(l) : Promise.resolve(l).then(a, n);
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
                                return new Promise(function (a, n) {
                                    var o = e.apply(t, s);
                                    function r(e) {
                                        h(o, a, n, r, i, 'next', e);
                                    }
                                    function i(e) {
                                        h(o, a, n, r, i, 'throw', e);
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
                        const n = t.args,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var s = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        s[a] = e[a];
                                    }
                                return s;
                            })(t, v);
                        void 0 !== n
                            ? viewEnv.handleViewEvent(
                                  Object.assign({ __Type: s, type: e }, o, {
                                      arguments:
                                          ((a = n),
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
                            : viewEnv.handleViewEvent(Object.assign({ __Type: s, type: e }, o));
                    } else viewEnv.handleViewEvent({ __Type: s, type: e });
                    var a;
                },
                f = () => w(l.CLOSE),
                T = (e, t) => {
                    e.keyCode === m.ESCAPE && t();
                };
            var C = s(421);
            const j = n.instance,
                S = {
                    DataTracker: o.Z,
                    ViewModel: C.Z,
                    ViewEventType: l,
                    NumberFormatType: _,
                    RealFormatType: d,
                    TimeFormatType: u,
                    DateFormatType: b,
                    makeGlobalBoundingBox: E,
                    sendMoveEvent: (e) => w(l.MOVE, { isMouseEvent: !0, on: e }),
                    sendCloseEvent: f,
                    sendClosePopOverEvent: () => w(l.POP_OVER, { on: !1 }),
                    sendShowContextMenuEvent: (e, t, s = 0) => {
                        w(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: s, args: t });
                    },
                    sendShowPopOverEvent: (e, t, s, a, n = R.invalid('resId'), o) => {
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
                            targetID: n,
                            direction: t,
                            bbox: E(b),
                            on: !0,
                            args: o,
                        });
                    },
                    addEscapeListener: (e) => {
                        const t = (t) => T(t, e);
                        return (window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t));
                    },
                    closeOnEsc: (e) => {
                        T(e, f);
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
                                const n = Object.prototype.toString.call(t[a]);
                                if (n.startsWith('[object CoherentArrayProxy]')) {
                                    const n = t[a];
                                    s[a] = [];
                                    for (let t = 0; t < n.length; t++) s[a].push({ value: e(n[t].value) });
                                } else
                                    n.startsWith('[object class BW::WULF::ViewModel')
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
            ((n = {
                cloneElement: () => reactExports.cloneElement,
                memo: () => reactExports.memo,
                useCallback: () => reactExports.useCallback,
                useMemo: () => reactExports.useMemo,
                useRef: () => reactExports.useRef,
            }),
            (o = {}),
            __webpack_require__.d(o, n),
            o),
        a = (0, s.memo)(({ args: a, children: n, decoratorID: o = 0, isLeftClick: r, isDisabled: i = !1 }) => {
            const l = (0, s.useRef)(null),
                c = (0, s.useCallback)(() => {
                    ((0, t.c9)(t.B0.CONTEXT_MENU, {
                        contentID: R.views.common.BackportContextMenu('resId'),
                        decoratorID: o,
                        isMouseEvent: !1,
                        on: !0,
                        args: a,
                    }),
                        e.O.sound.play.yes1());
                }, [a, o]),
                _ = (0, s.useCallback)(
                    (e) => {
                        ((r && 0 === e.button) || (!r && 2 === e.button)) && !i && c();
                    },
                    [r, i, c],
                );
            return (0, s.useMemo)(() => (0, s.cloneElement)(n, { onMouseDown: _, ref: l }), [n, _]);
        });
    var n, o;
})();
var __webpack_exports__ContextMenu = __webpack_exports__.x;
const base$8 = 'InteractionControls_146f6573',
    control = 'InteractionControls_control_2beca3f5',
    button = 'InteractionControls_button_5ec72fb9',
    icon$1 = 'InteractionControls_icon_d91326fc',
    icon__addFriend = 'InteractionControls_icon__addFriend_382e2b7b',
    icon__friendSent = 'InteractionControls_icon__friendSent_41931811',
    icon__friendBlacklist = 'InteractionControls_icon__friendBlacklist_7a788b92',
    icon__friend = 'InteractionControls_icon__friend_a14815f9',
    icon__platoonCanMade = 'InteractionControls_icon__platoonCanMade_a89f038a',
    icon__platoonSent = 'InteractionControls_icon__platoonSent_af35adbd',
    icon__platoonDone = 'InteractionControls_icon__platoonDone_684bbfd2',
    icon__platoonUnavailable = 'InteractionControls_icon__platoonUnavailable_f10b79f3',
    icon__menu = 'InteractionControls_icon__menu_4472d150',
    iconWrapper = 'InteractionControls_iconWrapper_75bdbe8d',
    styles$8 = {
        base: base$8,
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
        iconWrapper: iconWrapper,
    },
    stopPropagation = (e) => {
        (e.stopPropagation(), e.preventDefault());
    },
    pickFriendshipButtonState = (e, t, s) => (e ? 'blacklisted' : t ? 'requestSent' : s ? 'friend' : 'default'),
    FriendshipResources = {
        blacklisted: {
            icon: styles$8.icon__friendBlacklist,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.removeFromBlacklist(),
            isButton: !0,
            isDisabled: !1,
        },
        friend: {
            icon: styles$8.icon__friend,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.friend(),
            isButton: !0,
            isDisabled: !0,
        },
        requestSent: {
            icon: styles$8.icon__friendSent,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.inviteSent(),
            isButton: !1,
            isDisabled: !1,
        },
        default: {
            icon: styles$8.icon__addFriend,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.friend.sendInvite(),
            isButton: !0,
            isDisabled: !1,
        },
    },
    pickPlatoonButtonState = (e, t, s) =>
        s ? 'platoonSent' : e && !t ? 'platoonCanMade' : t ? 'platoonDone' : 'platoonUnavailable',
    PlatoonResources = {
        platoonSent: {
            icon: styles$8.icon__platoonSent,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonSent(),
            isButton: !1,
            isDisabled: !1,
        },
        platoonDone: {
            icon: styles$8.icon__platoonDone,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonDone(),
            isButton: !0,
            isDisabled: !0,
        },
        platoonUnavailable: {
            icon: styles$8.icon__platoonUnavailable,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonUnavailable(),
            isButton: !1,
            isDisabled: !1,
        },
        platoonCanMade: {
            icon: styles$8.icon__platoonCanMade,
            tooltipBody: R.strings.last_stand_tooltips.battleResult.interaction.platoon.platoonCanMade(),
            isButton: !0,
            isDisabled: !1,
        },
    },
    InteractionControls = observer(function ({
        className: e,
        isInFriendList: t,
        playerId: s,
        userName: a,
        clanAbbrev: n,
        vehicleCD: o,
        clientArenaIdx: r,
        isBlacklisted: i,
        isFriendRequestSent: l,
        isPlatoonRequestCanMade: c,
        isPlatoonRequestInSquad: _,
        isPlatoonRequestSent: d,
    }) {
        const {
                controls: { sendFriendRequest: u, removeFromBlacklist: b, sendPlatoonInvitation: m },
            } = useModel$1(),
            p = pickFriendshipButtonState(i, l, t),
            x = pickPlatoonButtonState(c, _, d),
            y = reactExports.useCallback(
                (e) => {
                    (stopPropagation(e), 'blacklisted' === p && b(s, a), 'default' === p && u(s, a, n));
                },
                [u, b, p, s, a, n],
            ),
            v = reactExports.useCallback(
                (e) => {
                    (stopPropagation(e), 'platoonCanMade' === x && m(s, a));
                },
                [m, x, s, a],
            ),
            h = reactExports.useMemo(() => ({ body: PlatoonResources[x].tooltipBody }), [x]),
            E = reactExports.useMemo(
                () => ({ playerId: s, userName: a, clanAbbrev: n, clientArenaIdx: r, vehicleCD: o }),
                [s, a, n, r, o],
            ),
            g = reactExports.useCallback((e) => {
                stopPropagation(e);
            }, []);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$8.base, e),
            children: [
                jsxRuntimeExports.jsx(SimpleTooltip, {
                    body: FriendshipResources[p].tooltipBody,
                    children: jsxRuntimeExports.jsx('div', {
                        className: styles$8.control,
                        children: FriendshipResources[p].isButton
                            ? jsxRuntimeExports.jsx(Button, {
                                  size: Button.sizes.small,
                                  theme: Button.themes.secondary,
                                  className: styles$8.button,
                                  disabled: FriendshipResources[p].isDisabled,
                                  onClick: y,
                                  children: jsxRuntimeExports.jsx('div', {
                                      className: cx(styles$8.icon, FriendshipResources[p].icon),
                                  }),
                              })
                            : jsxRuntimeExports.jsx('div', {
                                  className: styles$8.iconWrapper,
                                  children: jsxRuntimeExports.jsx('div', {
                                      className: cx(styles$8.icon, FriendshipResources[p].icon),
                                  }),
                              }),
                    }),
                }),
                jsxRuntimeExports.jsx(SimpleTooltip, {
                    ...h,
                    children: jsxRuntimeExports.jsx('div', {
                        className: styles$8.control,
                        children: PlatoonResources[x].isButton
                            ? jsxRuntimeExports.jsx(Button, {
                                  size: Button.sizes.small,
                                  theme: Button.themes.secondary,
                                  className: styles$8.button,
                                  disabled: PlatoonResources[x].isDisabled,
                                  onClick: v,
                                  children: jsxRuntimeExports.jsx('div', {
                                      className: cx(styles$8.icon, PlatoonResources[x].icon),
                                  }),
                              })
                            : jsxRuntimeExports.jsx('div', {
                                  className: styles$8.iconWrapper,
                                  children: jsxRuntimeExports.jsx('div', {
                                      className: cx(styles$8.icon, PlatoonResources[x].icon),
                                  }),
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
                                className: styles$8.control,
                                children: jsxRuntimeExports.jsx(Button, {
                                    size: Button.sizes.small,
                                    theme: Button.themes.secondary,
                                    className: styles$8.button,
                                    onClick: g,
                                    children: jsxRuntimeExports.jsx('div', {
                                        className: cx(styles$8.icon, styles$8.icon__menu),
                                    }),
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    BOT_PLAYER_ID = 0,
    RowDecorator = reactExports.memo(function ({
        bgColor: e,
        textColor: t,
        children: s,
        playerId: a,
        userName: n,
        vehicleCD: o,
        isCurrentPlayer: r,
        clanAbbrev: i,
        clientArenaIdx: l,
        isAlive: c,
        isReady: _,
    }) {
        return jsxRuntimeExports.jsx(__webpack_exports__ContextMenu, {
            args: { playerId: a, userName: n, clanAbbrev: i, clientArenaIdx: l, vehicleCD: o },
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
                    jsxRuntimeExports.jsx(Divider, { className: styles$b.divider }),
                ],
            }),
        });
    });
var TeamMemberBanType = ((e) => ((e.NotBanned = 'notBanned'), (e.Warned = 'warned'), (e.Banned = 'banned'), e))(
    TeamMemberBanType || {},
);
const root$2 = 'PlayerInfo_root_56d02918',
    base$7 = 'PlayerInfo_c13516d9',
    base__withBadge = 'PlayerInfo_base__withBadge_d7f77396',
    nickName = 'PlayerInfo_nickName_7b81bced',
    nickName__withSquad = 'PlayerInfo_nickName__withSquad_7cb67087',
    userName = 'PlayerInfo_userName_25c3a445',
    base__tabWindow = 'PlayerInfo_base__tabWindow_56d02918',
    userName__withBadge = 'PlayerInfo_userName__withBadge_a8d4a0ad',
    name = 'PlayerInfo_name_20d67aee',
    base__currentPlayer$1 = 'PlayerInfo_base__currentPlayer_56d02918',
    clanTag = 'PlayerInfo_clanTag_c2c71134',
    squad = 'PlayerInfo_squad_26aabba7',
    squad__highContrast = 'PlayerInfo_squad__highContrast_e3e2d918',
    squad__defaultAlly = 'PlayerInfo_squad__defaultAlly_507bf2dc',
    banIcon = 'PlayerInfo_banIcon_56491f35',
    banIcon__warned = 'PlayerInfo_banIcon__warned_1c18ebaa',
    banIcon__banned = 'PlayerInfo_banIcon__banned_732735b5',
    styles$7 = {
        root: root$2,
        base: base$7,
        base__withBadge: base__withBadge,
        nickName: nickName,
        nickName__withSquad: nickName__withSquad,
        userName: userName,
        base__tabWindow: base__tabWindow,
        userName__withBadge: userName__withBadge,
        name: name,
        base__currentPlayer: base__currentPlayer$1,
        clanTag: clanTag,
        squad: squad,
        squad__highContrast: squad__highContrast,
        squad__defaultAlly: squad__defaultAlly,
        banIcon: banIcon,
        banIcon__warned: banIcon__warned,
        banIcon__banned: banIcon__banned,
    },
    TABLE_TYPE_BADGE = { [TableType.TabWindow]: 'default', [TableType.LeaderBoard]: 'default' };
function PlayerInfo({ user: e, squadNum: t, isOwnSquad: s = !1, banType: a, isCurrentPlayer: n }) {
    const o = reactExports.useContext(TeamListTypeContext),
        r = TABLE_TYPE_BADGE[o],
        i = R.images.last_stand.gui.maps.icons.common.teamList.squad.$dyn(r),
        l = t > 0;
    return jsxRuntimeExports.jsxs('div', {
        className: cx(
            styles$7.base,
            styles$7[`base__${o}`],
            n && styles$7.base__currentPlayer,
            e.badge.badgeID && styles$7.base__withBadge,
        ),
        children: [
            l &&
                jsxRuntimeExports.jsx('div', {
                    className: cx(
                        styles$7.squad,
                        styles$7[`squad__${r}`],
                        s && 'default' === r && styles$7.squad__defaultAlly,
                    ),
                    style: { backgroundImage: `url('${i.$dyn(s ? 'ally' : 'other')}')` },
                    children: t,
                }),
            jsxRuntimeExports.jsxs('div', {
                className: cx(styles$7.nickName, l && styles$7.nickName__withSquad),
                children: [
                    a !== TeamMemberBanType.NotBanned &&
                        jsxRuntimeExports.jsx(SimpleTooltip, {
                            ...(() => {
                                if (a === TeamMemberBanType.NotBanned) return { body: void 0, header: void 0 };
                                const e = R.strings.last_stand_tooltips.teamList.$dyn(a);
                                if (n) {
                                    return { body: e.$dyn('self').$dyn('body'), header: e.$dyn('header') };
                                }
                                return { body: e.$dyn('body'), header: e.$dyn('header') };
                            })(),
                            children: jsxRuntimeExports.jsx('div', {
                                className: cx(styles$7.banIcon, styles$7[`banIcon__${a}`]),
                            }),
                        }),
                    jsxRuntimeExports.jsx('div', {
                        className: styles$7.name,
                        children: jsxRuntimeExports.jsx(PlayerNickname, {
                            ...e,
                            igrType: e.igrType,
                            badge: e.badge,
                            userNameClassName: cx(styles$7.userName, e.badge.badgeID && styles$7.userName__withBadge),
                            suffixBadge: e.suffixBadge,
                            clanTagClassName: styles$7.clanTag,
                        }),
                    }),
                ],
            }),
        ],
    });
}
const root$1 = 'StatValueDecorator_root_5170dfab',
    base$6 = 'StatValueDecorator_49276f9',
    base__max = 'StatValueDecorator_base__max_9ad2cb6a',
    crown = 'StatValueDecorator_crown_94f6c06b',
    crown__gold = 'StatValueDecorator_crown__gold_702e5240',
    base__currentPlayer = 'StatValueDecorator_base__currentPlayer_5170dfab',
    crown__silver = 'StatValueDecorator_crown__silver_14f41da8',
    crown__bronze = 'StatValueDecorator_crown__bronze_60a3d8e7',
    amount = 'StatValueDecorator_amount_5c9f9597',
    styles$6 = {
        root: root$1,
        base: base$6,
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
        isCrowned: n,
        isCurrentPlayer: o,
    }) {
        const r = getNumberFormat(e, 1);
        return jsxRuntimeExports.jsxs('div', {
            className: cx(styles$6.base, o && styles$6.base__currentPlayer, t && styles$6.base__max),
            children: [
                n &&
                    jsxRuntimeExports.jsx('div', {
                        className: cx(
                            styles$6.crown,
                            a === TableType.LeaderBoard &&
                                s === ColumnEnum.Place &&
                                styles$6[`crown__${CROWN_BY_PLACE[e - 1]}`],
                        ),
                    }),
                jsxRuntimeExports.jsx('span', { className: styles$6.amount, children: r }),
            ],
        });
    }),
    root = 'VehicleType_root_4e0d61e4',
    base$5 = 'VehicleType_7a98563c',
    base__c_24x24 = 'VehicleType_base__c_24x24_92335fef',
    base__c_38x38 = 'VehicleType_base__c_38x38_2a1f524c',
    base__c_48x48 = 'VehicleType_base__c_48x48_e19c5d21',
    base__c_83x74 = 'VehicleType_base__c_83x74_d3c76480',
    styles$5 = {
        root: root,
        base: base$5,
        base__c_24x24: base__c_24x24,
        base__c_38x38: base__c_38x38,
        base__c_48x48: base__c_48x48,
        base__c_83x74: base__c_83x74,
    };
reactExports.memo(function ({ type: e, color: t, className: s, size: a = 'c_24x24' }) {
    return jsxRuntimeExports.jsx('div', {
        className: cx(styles$5.base, styles$5[`base__${a}`], s),
        style: {
            backgroundImage: `url('R.images.last_stand.gui.maps.icons.vehicleTypes.flat.${t}.${a}.${normalizeResource(e)}')`,
        },
    });
});
const checkForTag = (e, t) => e.split(',').includes(t),
    base$4 = 'VehicleInfo_30590fa0',
    label$1 = 'VehicleInfo_label_70315f59',
    premiumIGR = 'VehicleInfo_premiumIGR_aca7dde6',
    vehType = 'VehicleInfo_vehType_af7fa755',
    styles$4 = { base: base$4, label: label$1, premiumIGR: premiumIGR, vehType: vehType },
    VehicleInfo = observer(function ({ vehicleShortName: e, vehicleType: t, tags: s }) {
        return jsxRuntimeExports.jsxs('div', {
            className: styles$4.base,
            children: [
                jsxRuntimeExports.jsx(VehicleType, { size: sizes.x48x48, type: t, className: styles$4.vehType }),
                checkForTag(s, PREMIUM_IGR_TAG) && jsxRuntimeExports.jsx('div', { className: styles$4.premiumIGR }),
                jsxRuntimeExports.jsx(ExtendedText, {
                    text: e,
                    classMix: styles$4.label,
                    isTruncationAvailable: !0,
                    isTooltipEnable: !0,
                }),
            ],
        });
    }),
    PlayerRow = observer(function ({
        playerId: e,
        rowStyle: t,
        isCurrentPlayer: s,
        isOwnSquad: a,
        squadNum: n,
        user: o,
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
        tableType: v,
        isAlive: h,
    }) {
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
            f = e === BOT_PLAYER_ID || !s;
        return jsxRuntimeExports.jsxs(RowDecorator, {
            ...t,
            playerId: e,
            userName: o.userName,
            vehicleCD: r.vehicleCD,
            clanAbbrev: o.clanAbbrev,
            isCurrentPlayer: s,
            isReady: d,
            clientArenaIdx: R,
            contextMenuPlayerId: g,
            isAlive: v !== TableType.TabWindow || h,
            children: [
                jsxRuntimeExports.jsx(CellDecorator, {
                    cellStyle: CellStyleEnum.Player,
                    isCurrentPlayer: s,
                    children: jsxRuntimeExports.jsx(PlayerInfo, {
                        user: o,
                        squadNum: n,
                        isOwnSquad: a,
                        banType: i,
                        isCurrentPlayer: s,
                    }),
                }),
                jsxRuntimeExports.jsx(CellDecorator, {
                    cellStyle: CellStyleEnum.Actions,
                    isCurrentPlayer: s,
                    children:
                        f &&
                        jsxRuntimeExports.jsx(InteractionControls, {
                            clientArenaIdx: R,
                            clanAbbrev: o.clanAbbrev,
                            vehicleCD: r.vehicleCD,
                            playerId: e,
                            userName: o.userName,
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
                    children: jsxRuntimeExports.jsx(VehicleInfo, { ...r }),
                }),
                _.map((e) => {
                    const t = e === ColumnEnum.Place ? 1 === l[e] : c[e] === l[e] && l[e] > 0,
                        a = !l[ColumnEnum.Damage];
                    return jsxRuntimeExports.jsx(
                        CellDecorator,
                        {
                            cellStyle: w(e),
                            children: jsxRuntimeExports.jsx(StatValueDecorator, {
                                tableType: v,
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
    });
var RowDecoratorBgColorEnum = ((e) => ((e.Default = 'default'), (e.Red = 'red'), (e.Gold = 'gold'), e))(
        RowDecoratorBgColorEnum || {},
    ),
    RowDecoratorTextColorEnum = ((e) => ((e.Default = 'default'), (e.Gold = 'gold'), e))(
        RowDecoratorTextColorEnum || {},
    );
const base$3 = 'TeamList_81df03aa',
    styles$3 = { base: base$3 },
    getRowStyle = (e) => ({
        bgColor: e.isCurrentPlayer ? RowDecoratorBgColorEnum.Gold : RowDecoratorBgColorEnum.Default,
        textColor:
            e.isCurrentPlayer || e.isOwnSquad ? RowDecoratorTextColorEnum.Gold : RowDecoratorTextColorEnum.Default,
    }),
    TeamList = observer(function ({ className: e, isSortable: t = !1, tableType: s = TableType.TabWindow }) {
        const { model: a, controls: n } = useModel$1(),
            o = a.sortDirection.get(),
            r = a.sortBy.get(),
            i = a.computes.getSortedTeam(),
            l = map(a.visibleColumns.get(), identity),
            c = reactExports.useCallback(
                (e) => {
                    n.setSortBy(e);
                },
                [n],
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
                            sortDirection: o,
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
    });
function TeamStatsApp(e) {
    return jsxRuntimeExports.jsx(TeamList, { ...e });
}
const TeamStats = reactExports.memo(function (e) {
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
    base$2 = 'Caption_12fb43ec',
    label = 'Caption_label_c380e02d',
    line = 'Caption_line_ac746f35',
    line__right = 'Caption_line__right_824dbbcc',
    styles$2 = { base: base$2, label: label, line: line, line__right: line__right };
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
const base$1 = 'Header_ec75a40',
    container = 'Header_container_b357bdd0',
    container__right = 'Header_container__right_b7afed9a',
    title = 'Header_title_b5162666',
    subtitle = 'Header_subtitle_6cea72b9',
    icon = 'Header_icon_e7539829',
    styles$1 = {
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
    base = 'TabScreenApp_176a4b5a',
    overlay = 'TabScreenApp_overlay_85c6dabb',
    missionTask = 'TabScreenApp_missionTask_be0c52a3',
    content = 'TabScreenApp_content_9a52d88',
    tableCaption = 'TabScreenApp_tableCaption_c3a6b840',
    flare = 'TabScreenApp_flare_7a90819c',
    styles = {
        base: base,
        overlay: overlay,
        missionTask: missionTask,
        content: content,
        tableCaption: tableCaption,
        flare: flare,
    },
    TabScreenApp = observer(function () {
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
runView(
    jsxRuntimeExports.jsx(UIProvider, {
        children: jsxRuntimeExports.jsx(ModelProvider, { children: jsxRuntimeExports.jsx(TabScreenApp, {}) }),
    }),
);
