import { v as e, r as t, j as o, f as a } from '../../../chunks/vendor.js';
import {
    i as n,
    c as s,
    n as r,
    g as i,
    p as l,
    r as c,
    u as d,
    a as u,
    B as m,
    s as _,
    t as h,
    b as f,
    d as y,
    e as b,
    f as p,
    h as g,
    j as v,
    k as x,
    l as w,
    A as C,
    m as B,
    o as N,
    q as j,
    v as k,
    w as S,
    U as M,
    x as P,
    y as R,
    z as E,
    L as I,
    C as A,
    D as z,
    E as L,
    J as O,
    F as W,
    G as F,
} from '../../../chunks/lib.js';
import { D as V } from '../../../chunks/divider.js';
import { _ as D } from '../../../chunks/preload-helper.js';
/* empty css                    */ const [G, U] = n('ChatsProvider')(
        ({ observableModel: e }) => {
            const t = { chats: e.dict('messages') },
                o = s.shallow(() =>
                    Array.from(
                        t.chats.values().sort((e, t) => {
                            const { order: o, prebattle: a } = e.get(),
                                { order: n, prebattle: s } = t.get();
                            return a !== s ? (a ? -1 : 1) : o - n;
                        }),
                    ),
                );
            return { ...t, computes: { sortedChats: o } };
        },
        ({ externalModel: e }) => ({
            openChat: e.createCallback((e, t) => ({ sessionID: e, ...t }), 'onViewMessageAction'),
            deleteChat: e.createCallback((e) => ({ sessionID: e }), 'onDeleteMessageAction'),
            updateWindowAnchor: e.createCallback((e) => e, 'onWindowAnchorPositionUpdated'),
            openChannelsWindow: e.createCallback((e) => e, 'onChatsAction'),
        }),
    ),
    [$, H] = n('ContactsListModel')(({ observableModel: e }) => ({ ...e.primitives(['contactsCount']) }), r),
    [T, q] = n()(
        ({ observableModel: e }) => ({ ...e.primitives(['oldStyle']) }),
        ({ externalModel: e }) => ({ openGameMenu: e.createCallbackNoArgs('onOpenGameMenu') }),
    ),
    [J, K] = n()(
        ({ observableModel: e }) => ({
            ...e.primitives({
                newNotificationsCount: 'newNotificationsCount',
                hasImportantNotification: 'importantNotificationPresent',
            }),
        }),
        r,
    ),
    [Q, X] = n('ReferralProgramProvider')(
        ({ observableModel: e }) => ({ ...e.primitives(['firstIndication', 'enabled', 'bubbleCount']) }),
        ({ externalModel: e }) => ({ openReferralProgram: e.createCallbackNoArgs('onClick') }),
    ),
    [Y, Z] = n('ServerInfoProvider')(({ observableModel: e }) => ({ ...e.primitives(['serverName', 'status']) }), r),
    [ee, te] = n('SessionStatisticProvider')(
        ({ observableModel: e }) => ({ ...e.primitives(['battleCount', 'enabled', 'sessionStatsEnabled', 'winback']) }),
        r,
    ),
    [oe, ae] = n('VehicleCompareProvider')(
        ({ observableModel: e }) => ({ ...e.primitives({ vehicleCount: 'vehicleCount', isEnabled: 'enabled' }) }),
        r,
    ),
    ne = {
        frames: {
            commanderPlayer_ready: { h: 64, w: 64, x: 0, y: 0 },
            commander_ready: { h: 64, w: 64, x: 64, y: 0 },
            member_ready: { h: 64, w: 64, x: 0, y: 64 },
            notification_button: { h: 64, w: 64, x: 64, y: 64 },
            player_ready: { h: 64, w: 64, x: 0, y: 128 },
            referral_program: { h: 64, w: 64, x: 64, y: 128 },
        },
        meta: { size: { h: 192, w: 128 } },
    },
    se = {
        frames: {
            commanderPlayer_ready: { h: 48, w: 48, x: 0, y: 0 },
            commander_ready: { h: 48, w: 48, x: 48, y: 0 },
            member_ready: { h: 48, w: 48, x: 0, y: 48 },
            notification_button: { h: 48, w: 48, x: 48, y: 48 },
            player_ready: { h: 48, w: 48, x: 0, y: 96 },
            referral_program: { h: 48, w: 48, x: 48, y: 96 },
        },
        meta: { size: { h: 144, w: 96 } },
    },
    re = {
        frames: {
            commanderPlayer_ready: { h: 128, w: 128, x: 0, y: 0 },
            commander_ready: { h: 128, w: 128, x: 128, y: 0 },
            member_ready: { h: 128, w: 128, x: 0, y: 128 },
            notification_button: { h: 128, w: 128, x: 128, y: 128 },
            player_ready: { h: 128, w: 128, x: 0, y: 256 },
            referral_program: { h: 128, w: 128, x: 128, y: 256 },
        },
        meta: { size: { h: 384, w: 256 } },
    },
    ie = {
        frames: {
            chat: { h: 32, w: 32, x: 0, y: 0 },
            commanderPlayer_inBattle: { h: 32, w: 32, x: 32, y: 0 },
            commanderPlayer_notReady: { h: 32, w: 32, x: 64, y: 0 },
            commander_inBattle: { h: 32, w: 32, x: 96, y: 0 },
            commander_notReady: { h: 32, w: 32, x: 0, y: 32 },
            comparison: { h: 32, w: 32, x: 32, y: 32 },
            contacts: { h: 32, w: 32, x: 64, y: 32 },
            creation: { h: 32, w: 32, x: 96, y: 32 },
            creation_disabled: { h: 32, w: 32, x: 0, y: 64 },
            empty_member: { h: 32, w: 32, x: 32, y: 64 },
            game_menu_button: { h: 32, w: 32, x: 64, y: 64 },
            member_inBattle: { h: 32, w: 32, x: 96, y: 64 },
            member_notReady: { h: 32, w: 32, x: 0, y: 96 },
            notification_button: { h: 32, w: 32, x: 32, y: 96 },
            player_inBattle: { h: 32, w: 32, x: 0, y: 128 },
            player_notReady: { h: 32, w: 32, x: 64, y: 96 },
            referral_program: { h: 32, w: 32, x: 32, y: 128 },
            search: { h: 32, w: 32, x: 96, y: 96 },
            session_stats: { h: 32, w: 32, x: 64, y: 128 },
            session_stats_disabled: { h: 32, w: 32, x: 96, y: 128 },
        },
        meta: { size: { h: 160, w: 128 } },
    },
    le = {
        frames: {
            chat: { h: 24, w: 24, x: 0, y: 0 },
            commanderPlayer_inBattle: { h: 24, w: 24, x: 24, y: 0 },
            commanderPlayer_notReady: { h: 24, w: 24, x: 48, y: 0 },
            commander_inBattle: { h: 24, w: 24, x: 72, y: 0 },
            commander_notReady: { h: 24, w: 24, x: 96, y: 0 },
            comparison: { h: 24, w: 24, x: 0, y: 24 },
            contacts: { h: 24, w: 24, x: 24, y: 24 },
            creation: { h: 24, w: 24, x: 48, y: 24 },
            creation_disabled: { h: 24, w: 24, x: 72, y: 24 },
            empty_member: { h: 24, w: 24, x: 96, y: 24 },
            game_menu_button: { h: 24, w: 24, x: 0, y: 48 },
            member_inBattle: { h: 24, w: 24, x: 24, y: 48 },
            member_notReady: { h: 24, w: 24, x: 0, y: 72 },
            notification_button: { h: 24, w: 24, x: 48, y: 48 },
            player_inBattle: { h: 24, w: 24, x: 24, y: 72 },
            player_notReady: { h: 24, w: 24, x: 72, y: 48 },
            referral_program: { h: 24, w: 24, x: 48, y: 72 },
            search: { h: 24, w: 24, x: 96, y: 48 },
            session_stats: { h: 24, w: 24, x: 72, y: 72 },
            session_stats_disabled: { h: 24, w: 24, x: 96, y: 72 },
        },
        meta: { size: { h: 96, w: 120 } },
    },
    ce = {
        frames: {
            chat: { h: 64, w: 64, x: 0, y: 0 },
            commanderPlayer_inBattle: { h: 64, w: 64, x: 64, y: 0 },
            commanderPlayer_notReady: { h: 64, w: 64, x: 128, y: 0 },
            commander_inBattle: { h: 64, w: 64, x: 192, y: 0 },
            commander_notReady: { h: 64, w: 64, x: 0, y: 64 },
            comparison: { h: 64, w: 64, x: 64, y: 64 },
            contacts: { h: 64, w: 64, x: 128, y: 64 },
            creation: { h: 64, w: 64, x: 192, y: 64 },
            creation_disabled: { h: 64, w: 64, x: 0, y: 128 },
            empty_member: { h: 64, w: 64, x: 64, y: 128 },
            game_menu_button: { h: 64, w: 64, x: 128, y: 128 },
            member_inBattle: { h: 64, w: 64, x: 192, y: 128 },
            member_notReady: { h: 64, w: 64, x: 0, y: 192 },
            notification_button: { h: 64, w: 64, x: 64, y: 192 },
            player_inBattle: { h: 64, w: 64, x: 0, y: 256 },
            player_notReady: { h: 64, w: 64, x: 128, y: 192 },
            referral_program: { h: 64, w: 64, x: 64, y: 256 },
            search: { h: 64, w: 64, x: 192, y: 192 },
            session_stats: { h: 64, w: 64, x: 128, y: 256 },
            session_stats_disabled: { h: 64, w: 64, x: 192, y: 256 },
        },
        meta: { size: { h: 320, w: 256 } },
    },
    de = { small: 'small', medium: 'medium', upscale: 'upscale' };
function ue(e) {
    return (
        'string' == typeof e &&
        (e in ie.frames || e in le.frames || e in ce.frames || e in se.frames || e in ne.frames || e in re.frames)
    );
}
function me(e, t, o = !1) {
    return e === de.upscale
        ? o
            ? { config: re, path: 'header_footer.footer_highlighted_upscale', icon: t }
            : { config: ce, path: 'header_footer.footer_upscale', icon: t }
        : e === de.medium
          ? o
              ? { config: ne, path: 'header_footer.footer_highlighted_large', icon: t }
              : { config: ie, path: 'header_footer.footer_large', icon: t }
          : o
            ? { config: se, path: 'header_footer.footer_highlighted_small', icon: t }
            : { config: le, path: 'header_footer.footer_small', icon: t };
}
function _e(e, t) {
    const o = i('px');
    return { x: l(e + o.x - 8), y: l(t + o.y - 8 - 356), width: 424, height: 356 };
}
const he = { maskLeft: 'maskLeft', maskRight: 'maskRight', maskBoth: 'maskBoth', none: 'none' };
function fe(e, t, o) {
    const a = t.left - e.left + o,
        n = 0.04 * e.width,
        s = a - n,
        r = a - e.width + t.width + n;
    return ((i = s), (l = r), (c = o), Math.abs(i - c) < Math.abs(l - c) ? i : l);
    var i, l, c;
}
const ye = 'ChatButton_58c17ddd',
    be = 'ChatButton_base__glow_e84e99cd',
    pe = 'ChatButton_overlay_d0e16554',
    ge = 'ChatButton_base__unreadMessages_1daa9390',
    ve = 'ChatButton_content_1735f2eb',
    xe = 'ChatButton_name_a3b5f0d7',
    we = 'ChatButton_closeIcon_7b57d2d1',
    Ce = /^#.*?:/,
    Be = c.resolve('strings');
function Ne(e) {
    return e.match(Ce) ? Be.readOrEmpty(e.slice(1).replace(/[:/]/g, '.')) : e;
}
const je = e(
        t.forwardRef(function (
            {
                id: e,
                name: n,
                tooltipId: s,
                opened: r,
                systemChat: i,
                hasUnreadMessages: l,
                className: c,
                onClick: f,
                onClose: y,
            },
            b,
        ) {
            const p = d({ header: s ? `${s}/header` : void 0, body: s ? `${s}/body` : n }),
                g = u(
                    'channelList',
                    t.useMemo(() => ({ clientID: e, canClose: !i }), [e, i]),
                );
            return o.jsxs(m, {
                ref: b,
                ...p,
                ...g,
                theme: h.secondary,
                size: _.small,
                onClick: function (t) {
                    const { left: o, top: a } = t.currentTarget.getBoundingClientRect();
                    (p.onClick(), f(e, _e(o, a)));
                },
                className: a(ye, (r || l) && be, l && ge, c),
                classNames: { overlay: pe, content: ve },
                autoAlignContent: !1,
                children: [
                    o.jsx('div', { className: xe, children: Ne(n) }),
                    !i &&
                        o.jsx('div', {
                            className: we,
                            onClick: function (t) {
                                (t.stopPropagation(), y(e));
                            },
                        }),
                ],
            });
        }),
    ),
    ke = {
        base: 'ScrollControlButtons_bd2f5f8c',
        content: 'ScrollControlButtons_content_bb845a88',
        content__maskLeft: 'ScrollControlButtons_content__maskLeft_d0570fce',
        content__maskRight: 'ScrollControlButtons_content__maskRight_a6cec051',
        content__maskBoth: 'ScrollControlButtons_content__maskBoth_e771a026',
        arrowButton: 'ScrollControlButtons_arrowButton_dd11fcee',
        arrowButton__left: 'ScrollControlButtons_arrowButton__left_22c9e28b',
        arrowButton__right: 'ScrollControlButtons_arrowButton__right_e553b5a0',
        arrowButton__disabled: 'ScrollControlButtons_arrowButton__disabled_e38b51c',
    },
    Se = 'left',
    Me = 'right',
    Pe = 'none';
function Re({ itemWidth: e, api: n, children: s, onButtonsAppeared: r }) {
    const i = f({ value: 24 }, { medium: { value: 30 } }),
        [l, c] = t.useState(!1),
        d = y(l),
        [[u, g], v] = t.useState([!0, !1]),
        [x, w] = t.useState(Pe);
    function C(t) {
        const o = n.animationScroll.scrollPosition.get(),
            a = t === Se ? -e : e;
        n.applyScroll(o + a);
    }
    function B(e) {
        (C(e), w(e));
    }
    function N() {
        w(Pe);
    }
    (t.useEffect(() => {
        l && l !== d && (null == r || r());
    }, [l, d, r]),
        t.useEffect(() => {
            function e() {
                const e = n.getContainerSize(),
                    t = n.getWrapperSize();
                e &&
                    t &&
                    c((o) => {
                        const a = e > t;
                        if (a && !o) {
                            const e = n.animationScroll.scrollPosition.get() + p(i.value);
                            n.scrollPosition.set({ scrollPosition: e });
                        }
                        return a;
                    });
            }
            function t() {
                const [e, t] = n.getBounds(),
                    o = n.animationScroll.scrollPosition.get(),
                    a = Math.floor(o) <= e,
                    s = Math.ceil(o) >= t;
                v([a, s]);
            }
            const o = n.events.on('change', t),
                a = n.events.on('resizeHandled', e),
                s = n.events.on('recalculateContent', () => {
                    (e(), t());
                });
            return () => {
                (o(), a(), s());
            };
        }, [n, e, i]),
        b(
            () => {
                x !== Pe && C(x);
            },
            x !== Pe ? 100 : void 0,
        ));
    const j = (function (e, t) {
        return e || t ? (t ? (e ? he.none : he.maskLeft) : he.maskRight) : he.maskBoth;
    })(u, g);
    return o.jsxs('div', {
        className: ke.base,
        children: [
            l &&
                o.jsx(m, {
                    theme: h.secondary,
                    size: _.small,
                    autoAlignContent: !1,
                    onMouseDown: () => B(Se),
                    onMouseUp: N,
                    onMouseLeave: N,
                    disabled: u,
                    className: a(ke.arrowButton, ke.arrowButton__left, u && ke.arrowButton__disabled),
                }),
            o.jsx('div', { className: a(ke.content, ke[`content__${j}`]), children: s }),
            l &&
                o.jsx(m, {
                    theme: h.secondary,
                    size: _.small,
                    autoAlignContent: !1,
                    onMouseDown: () => B(Me),
                    onMouseUp: N,
                    onMouseLeave: N,
                    disabled: g,
                    className: a(ke.arrowButton, ke.arrowButton__right, g && ke.arrowButton__disabled),
                }),
        ],
    });
}
const Ee = 'ChatCarousel_14e3db73',
    Ie = 'ChatCarousel_scrollWrapper_578773a',
    Ae = 'ChatCarousel_scrollContent_578773a',
    ze = 'ChatCarousel_button_8bb458f8',
    Le = 'ChatCarousel_button__firstItem_e66db7f4',
    Oe = e(function ({ className: e }) {
        const { api: n } = g(),
            { model: s, controls: r } = U(),
            i = s.computes.sortedChats(),
            l = y(i),
            [c, d] = t.useState(-1),
            [u, m] = t.useState(!1),
            _ = t.useRef(null);
        (t.useEffect(() => {
            function e() {
                var e;
                const t = null == (e = n.contentRef.current) ? void 0 : e.getBoundingClientRect();
                t && r.updateWindowAnchor(_e(t.right, t.top));
            }
            const t = n.events.on('resizeHandled', e),
                o = n.events.on('recalculateContent', e);
            return () => {
                (t(), o());
            };
        }, [n, r]),
            t.useEffect(() => {
                if (l && i.length > l.length) {
                    const e = i.findIndex((e) => !l.includes(e));
                    -1 !== e && (d(e), m(!0));
                }
            }, [i, l, n]));
        const h = t.useRef();
        (v(() => {
            if (-1 !== c && _.current && n.wrapperRef.current && u) {
                const e = n.animationScroll.scrollPosition.get(),
                    t = _.current.getBoundingClientRect(),
                    o = n.wrapperRef.current.getBoundingClientRect();
                ((t.left >= o.left && t.right <= o.right) ||
                    (h.current = setTimeout(() => n.applyScroll(fe(o, t, e)), 100)),
                    m(!1));
            }
        }, [c, n, u]),
            x(() => clearTimeout(h.current)));
        const f = w(92, []);
        return o.jsx('div', {
            className: a(Ee, e),
            children: o.jsx(Re, {
                api: n,
                itemWidth: f,
                onButtonsAppeared: () => m(!0),
                children: o.jsx(C, {
                    classNames: { wrapper: Ie, content: Ae },
                    children: i.map((e, t) => {
                        const { id: n, name: s, selected: i, viewed: l, system: d, tooltipId: u } = e.get();
                        return o.jsx(
                            je,
                            {
                                ref: t === c ? _ : null,
                                id: n,
                                name: s,
                                opened: i,
                                hasUnreadMessages: !l,
                                systemChat: d,
                                tooltipId: u,
                                onClick: r.openChat,
                                onClose: r.deleteChat,
                                className: a(ze, 0 === t && Le),
                            },
                            s,
                        );
                    }),
                }),
            }),
        });
    });
function We(e) {
    return o.jsx(B, { children: o.jsx(Oe, { ...e }) });
}
const Fe = 'ChatChannels_c801bb1d',
    Ve = 'ChatChannels_icon_a3ff928f';
const De = e(function ({ className: e }) {
        const { controls: t } = U(),
            n = N(),
            s = c.resolve('strings'),
            r = j({ value: de.small }, { medium: { value: de.medium } }),
            u = k(r.value, M),
            m = d({
                header: s.readOrEmpty('tooltips.loby_messenger.channels_button.header'),
                body: s.readOrEmpty('tooltips.loby_messenger.channels_button.body'),
            });
        return o.jsx('div', {
            ...m,
            onClick: function (e) {
                const { left: o, top: a } = e.currentTarget.getBoundingClientRect();
                (n.play('click', { target: 'ChannelsButton', original: e }),
                    t.openChannelsWindow(
                        (function (e, t) {
                            const o = i('px');
                            return { x: l(e + o.x - 8), y: l(t + o.y - 8 - 347), width: 269, height: 347 };
                        })(o, a),
                    ),
                    m.onClick());
            },
            onMouseEnter: function (e) {
                (n.play('mouse-enter', { target: 'ChannelsButton', original: e }), m.onMouseEnter(e));
            },
            className: a(Fe, e),
            children: o.jsx(S, { ...me(u, 'chat'), className: Ve }),
        });
    }),
    Ge = 'Contacts_51abbb46',
    Ue = 'Contacts_icon_a516b2cd',
    $e = 'Contacts_friendsOnlineCount_20e5b06c',
    He = e(function () {
        const e = c.resolve('intl'),
            t = c.resolve('strings'),
            { model: a } = H(),
            n = a.contactsCount.get(),
            s = j({ value: de.small }, { medium: { value: de.medium } }),
            r = k(s.value, M),
            i = d({
                header: t.readOrEmpty('tooltips.loby_messenger.contacts_button.header'),
                body: t.readOrEmpty('tooltips.loby_messenger.contacts_button.body'),
            }),
            l = P('ContactsPopover'),
            u = N();
        return o.jsxs('div', {
            ...l,
            ...i,
            className: Ge,
            onClick: function (e) {
                (u.play('click', { target: 'ContactsButton', original: e }),
                    null == l || l.onClick(e),
                    null == i || i.onClick());
            },
            onMouseEnter: function (e) {
                (u.play('mouse-enter', { target: 'ContactsButton', original: e }), null == i || i.onMouseEnter(e));
            },
            'data-test-id': 'contacts',
            children: [
                o.jsx(S, { ...me(r, 'contacts'), className: Ue }),
                n > 0 && o.jsx('div', { className: $e, children: e.formatNumber('integral', n) }),
            ],
        });
    });
var Te = ((e) => (
    (e[(e.Requested = 0)] = 'Requested'),
    (e[(e.High = 1)] = 'High'),
    (e[(e.Norm = 2)] = 'Norm'),
    (e[(e.Low = 3)] = 'Low'),
    e
))(Te || {});
const qe = {
        base: 'Ping_da5c25be',
        serverName: 'Ping_serverName_74565bce',
        indicator: 'Ping_indicator_42a6616c',
        indicatorBar: 'Ping_indicatorBar_74c4fee6',
        indicatorBar__active: 'Ping_indicatorBar__active_7a80c240',
        indicatorBar__weak: 'Ping_indicatorBar__weak_f27b592d',
    },
    Je = 'active',
    Ke = 'weak',
    Qe = 'none';
function Xe(e, t) {
    return 0 === e && t === Te.High ? Ke : e < t ? Je : Qe;
}
const Ye = e(function () {
        const { model: e } = Z(),
            n = e.serverName.get(),
            s = e.status.get(),
            r = R(
                'serversInfo',
                t.useMemo(() => [], []),
            );
        return o.jsxs('div', {
            ...r,
            className: qe.base,
            children: [
                o.jsx('div', { className: qe.serverName, children: n }),
                o.jsx('div', {
                    className: qe.indicator,
                    children: E(3, (e) =>
                        o.jsx(
                            'div',
                            { className: a(qe.indicatorBar, qe[`indicatorBar__${Xe(e, s)}`]) },
                            `indicatorBar-${e}`,
                        ),
                    ),
                }),
            ],
        });
    }),
    Ze = t.lazy(() => D(() => import('../../../chunks/widget.js'), [], import.meta.url));
function et(e) {
    const a = e.options.rootId;
    if (a) return o.jsx(I, { id: a, children: o.jsx(t.Suspense, { children: o.jsx(Ze, { ...e }) }) });
    console.error('PlatoonWidget: rootId is not given');
}
const tt = 'ReferralProgram_valueContainer_a1a1e336',
    ot = 'ReferralProgram_value_b1636df4',
    at = 'ReferralProgram_54cc6b2f',
    nt = 'ReferralProgram_icon_219cf8',
    st = 'ReferralProgram_icon__highlighted_77ea5c59',
    rt = 'ReferralProgram_notifications_d09a7c8a',
    it = e(function ({ className: e }) {
        const t = N(),
            n = c.resolve('strings'),
            { model: s, controls: r } = X(),
            i = s.bubbleCount.get() > 0,
            l = s.firstIndication.get(),
            u = j({ value: A.small }, { medium: { value: A.medium } }),
            m = k(u.value, M),
            _ = d({
                header: i
                    ? n.readOrEmpty('tooltips.loby_messenger.referral_button.new_season.header')
                    : n.readOrEmpty('tooltips.loby_messenger.referral_button.header'),
                body: i
                    ? n.readOrEmpty('tooltips.loby_messenger.referral_button.new_season.body')
                    : n.readOrEmpty('tooltips.loby_messenger.referral_button.body'),
            });
        return o.jsxs('div', {
            'data-test-id': 'referral-program',
            className: a(at, e),
            onClick: function (e) {
                (t.play('click', { target: 'ReferralProgram', original: e }),
                    r.openReferralProgram(),
                    null == _ || _.onClick());
            },
            onMouseEnter: function (e) {
                (t.play('mouse-enter', { target: 'ReferralProgram', original: e }), null == _ || _.onMouseEnter(e));
            },
            onMouseLeave: null == _ ? void 0 : _.onMouseLeave,
            children: [
                o.jsx(S, { ...me(m, 'referral_program', l), className: a(nt, l && st) }),
                o.jsx(z.Root, {
                    hidden: !i,
                    className: rt,
                    children: o.jsx(z.Value, {
                        value: s.bubbleCount.get(),
                        size: u.value,
                        classNames: { valueContainer: tt, value: ot },
                    }),
                }),
            ],
        });
    }),
    lt = 'SessionStatistic_2cb87b7d',
    ct = 'SessionStatistic_base__enabled_aac72629',
    dt = 'SessionStatistic_icon_ebed106f',
    ut = 'SessionStatistic_icon__enabled_bd94c361',
    mt = 'SessionStatistic_battleCount_488e1028',
    _t = 'enabled',
    ht = 'disabled',
    ft = 'winback';
const yt = e(function () {
        const e = c.resolve('intl'),
            { model: t } = te(),
            n = t.battleCount.get(),
            s = t.enabled.get(),
            r = t.sessionStatsEnabled.get(),
            i = t.winback.get(),
            { sessionStatisticState: l, iconEnabled: u } = (function (e, t) {
                return t
                    ? { sessionStatisticState: ft, iconEnabled: !1 }
                    : { sessionStatisticState: e ? _t : ht, iconEnabled: e };
            })(s, i),
            m = j({ value: de.small }, { medium: { value: de.medium } }),
            _ = k(m.value, M),
            h = c.resolve('strings'),
            f = d({
                header: h.readOrEmpty('session_stats.tooltip.mainBtn.header'),
                body: h.readOrEmpty(`session_stats.tooltip.mainBtn.body.${l}`),
            }),
            y = P('SessionStatsPopover'),
            b = N();
        return (
            r &&
            o.jsxs('div', {
                ...y,
                ...f,
                className: a(lt, u && ct),
                onClick: function (e) {
                    (u &&
                        (b.play('click', { target: 'SessionStatisticButton', original: e }), null == y || y.onClick(e)),
                        null == f || f.onClick());
                },
                onMouseEnter: function (e) {
                    (u && b.play('mouse-enter', { target: 'SessionStatisticButton', original: e }),
                        null == f || f.onMouseEnter(e));
                },
                children: [
                    o.jsx(S, { ...me(_, u ? 'session_stats' : 'session_stats_disabled'), className: a(dt, u && ut) }),
                    n > 0 && o.jsx('div', { className: mt, children: e.formatNumber('integral', n) }),
                ],
            })
        );
    }),
    bt = 'VehicleCompare_e92ce48a',
    pt = 'VehicleCompare_base__visible_1df524c6',
    gt = 'VehicleCompare_icon_cbce43e9',
    vt = 'VehicleCompare_vehicleCount_691224b7',
    xt = e(function (e) {
        const { model: t } = ae(),
            a = t.vehicleCount.get(),
            n = a > 0 && t.enabled.get();
        return o.jsx(wt, { className: e.className, count: a, visible: n });
    });
function wt({ count: e, visible: n, className: s }) {
    const r = y(e),
        i = t.useRef(null),
        l = c.resolve('intl'),
        u = c.resolve('strings'),
        m = P('VehicleCompareCartPopover');
    t.useEffect(() => {
        if (void 0 !== r) {
            if (0 === r && 1 === e && i.current) {
                const e = new MouseEvent('click', { bubbles: !0 });
                i.current.dispatchEvent(e);
            }
            r > 0 && 0 === e && m.hide();
        }
    }, [m, e, r]);
    const _ = j({ value: de.small }, { medium: { value: de.medium } }),
        h = k(_.value, M),
        f = d({ body: u.readOrEmpty('tooltips.loby_messenger.vehicle_compare_button.body') }),
        b = N();
    return o.jsxs('div', {
        ...m,
        ...f,
        ref: i,
        className: a(bt, n && pt, s),
        onClick: function (e) {
            (b.play('click', { target: 'VehicleCompareButton', original: e }),
                null == m || m.onClick(e),
                null == f || f.onClick());
        },
        onMouseEnter: function (e) {
            (b.play('mouse-enter', { target: 'VehicleCompareButton', original: e }), null == f || f.onMouseEnter(e));
        },
        children: [
            o.jsx(S, { ...me(h, 'comparison'), className: gt }),
            o.jsx('div', { className: vt, children: l.formatNumber('integral', e) }),
        ],
    });
}
const Ct = 'Footer_valueContainer_f6f9da36',
    Bt = 'Footer_value_96c42424',
    Nt = 'Footer_c3a0f302',
    jt = 'Footer_section_9d3d3a12',
    kt = 'Footer_button_c7203e02',
    St = 'Footer_chatCarousel_a978fc27',
    Mt = 'Footer_icon_6ff60f47',
    Pt = 'Footer_icon__notification_827f4505',
    Rt = 'Footer_iconImage_50c8b940',
    Et = 'Footer_notifications_d2687e3',
    It = 'Footer_divider_4ccd0230',
    At = 'Footer_vehicleCompare_531bca52';
const zt = e(
        t.forwardRef(function ({ className: e }, n) {
            const { model: s } = K(),
                { model: r } = X(),
                i = s.newNotificationsCount.get(),
                l = i > 0,
                { controls: u } = q(),
                m = N(),
                _ = c.resolve('strings'),
                h = t.useMemo(() => [], []),
                f = y(i) ?? i,
                b = j({ value: A.small }, { medium: { value: A.medium } }),
                p = k(b.value, M),
                g = R('settingsButton', h),
                v = d({
                    header: _.readOrEmpty('tooltips.loby_messenger.service_button.header'),
                    body: _.readOrEmpty('tooltips.loby_messenger.service_button.body'),
                }),
                x = P('notificationsList');
            const w = t.useMemo(
                () => ({ rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.Platoon('resId')) }),
                [],
            );
            return o.jsxs('div', {
                ref: n,
                className: a(Nt, e),
                children: [
                    o.jsxs('div', {
                        className: jt,
                        children: [
                            o.jsx(He, {}),
                            o.jsx(De, { className: kt }),
                            r.enabled.get() && o.jsx(it, { className: kt }),
                            o.jsx(et, { options: w }),
                        ],
                    }),
                    o.jsx(V, { className: It }),
                    o.jsx(We, { className: St }),
                    o.jsxs('div', {
                        className: jt,
                        children: [
                            o.jsx(xt, { className: At }),
                            o.jsx(yt, {}),
                            o.jsx(V, { className: It }),
                            o.jsx(Ye, {}),
                            o.jsx('div', {
                                ...g,
                                className: Mt,
                                'data-test-id': 'menu',
                                onClick: function (e) {
                                    (m.play('click', { target: 'GameMenuButton', original: e }),
                                        u.openGameMenu(),
                                        null == g || g.onClick());
                                },
                                onMouseEnter: function (e) {
                                    (m.play('mouse-enter', { target: 'GameMenuButton', original: e }),
                                        null == g || g.onMouseEnter(e));
                                },
                                children: o.jsx(S, { ...me(p, 'game_menu_button'), className: Rt }),
                            }),
                            o.jsx(V, { className: It }),
                            o.jsxs('div', {
                                ...x,
                                ...v,
                                className: a(Mt, Pt),
                                'data-test-id': 'notificationCenter',
                                onClick: function (e) {
                                    (m.play('click', { target: 'GameMenuButton', original: e }),
                                        null == x || x.onClick(e),
                                        null == v || v.onClick());
                                },
                                onMouseEnter: function (e) {
                                    (m.play('mouse-enter', { target: 'GameMenuButton', original: e }),
                                        null == v || v.onMouseEnter(e));
                                },
                                children: [
                                    o.jsx(S, { ...me(p, 'notification_button', l), className: Rt }),
                                    o.jsx(z.Root, {
                                        hidden: i <= 0,
                                        className: Et,
                                        children: o.jsx(z.Value, {
                                            value: ((C = i), (B = f), 0 === C ? B : C),
                                            size: b.value,
                                            classNames: { valueContainer: Ct, value: Bt },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
            var C, B;
        }),
    ),
    Lt = 'App_cabb9f2f',
    Ot = 'App_footer_8633140e',
    Wt = 'App_footer__oldStyle_ed955e9f';
const Ft = e(function () {
    const e = L(250, 0),
        { model: t } = q();
    return o.jsx('div', { className: Lt, children: o.jsx(zt, { ref: e, className: a(Ot, t.oldStyle.get() && Wt) }) });
});
F(
    new O()
        .add(W)
        .add(T)
        .addWithProps($, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.ContactsList('resId')) },
        })
        .addWithProps(Q, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.ReferralProgram('resId')) },
        })
        .addWithProps(oe, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.VehicleCompare('resId')) },
        })
        .addWithProps(ee, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.SessionStats('resId')) },
        })
        .addWithProps(J, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.NotificationsCenter('resId')) },
        })
        .addWithProps(G, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.Chats('resId')) },
        })
        .addWithProps(Y, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.ServerInfo('resId')) },
        })
        .render(o.jsx(Ft, {})),
);
export { me as a, ue as i, de as s };
