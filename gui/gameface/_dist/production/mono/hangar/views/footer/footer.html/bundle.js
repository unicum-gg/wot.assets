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
    D as p,
    f as g,
    h as x,
    j as v,
    A as w,
    k as C,
    l as B,
    m as N,
    o as j,
    q as k,
    U as S,
    v as M,
    w as P,
    x as R,
    L as E,
    y as I,
    z,
    C as L,
    J as W,
    E as A,
    F as O,
} from '../../../chunks/lib.js';
import { D as F } from '../../../chunks/divider.js';
import { _ as V } from '../../../chunks/preload-helper.js';
/* empty css                    */ const [D, G] = n('ChatsProvider')(
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
    [$, U] = n('ContactsListModel')(({ observableModel: e }) => ({ ...e.primitives(['contactsCount']) }), r),
    [H, T] = n()(
        ({ observableModel: e }) => ({ ...e.primitives(['oldStyle']) }),
        ({ externalModel: e }) => ({ openGameMenu: e.createCallbackNoArgs('onOpenGameMenu') }),
    ),
    [q, J] = n()(
        ({ observableModel: e }) => ({
            ...e.primitives({
                newNotificationsCount: 'newNotificationsCount',
                hasImportantNotification: 'importantNotificationPresent',
            }),
        }),
        r,
    ),
    [K, Q] = n('ReferralProgramProvider')(
        ({ observableModel: e }) => ({ ...e.primitives(['firstIndication', 'enabled', 'bubbleCount']) }),
        ({ externalModel: e }) => ({ openReferralProgram: e.createCallbackNoArgs('onClick') }),
    ),
    [X, Y] = n('ServerInfoProvider')(
        ({ observableModel: e }) => ({ ...e.primitives(['serverName', 'status', 'colorBlind']) }),
        r,
    ),
    [Z, ee] = n('SessionStatisticProvider')(
        ({ observableModel: e }) => ({ ...e.primitives(['battleCount', 'enabled', 'sessionStatsEnabled', 'winback']) }),
        r,
    ),
    [te, oe] = n('VehicleCompareProvider')(
        ({ observableModel: e }) => ({ ...e.primitives({ vehicleCount: 'vehicleCount', isEnabled: 'enabled' }) }),
        r,
    ),
    ae = {
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
    ne = {
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
    se = {
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
    re = {
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
    ie = {
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
    le = {
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
    ce = { small: 'small', medium: 'medium', upscale: 'upscale' };
function de(e) {
    return (
        'string' == typeof e &&
        (e in re.frames || e in ie.frames || e in le.frames || e in ne.frames || e in ae.frames || e in se.frames)
    );
}
function ue(e, t, o = !1) {
    return e === ce.upscale
        ? o
            ? { config: se, path: 'header_footer.footer_highlighted_upscale', icon: t }
            : { config: le, path: 'header_footer.footer_upscale', icon: t }
        : e === ce.medium
          ? o
              ? { config: ae, path: 'header_footer.footer_highlighted_large', icon: t }
              : { config: re, path: 'header_footer.footer_large', icon: t }
          : o
            ? { config: ne, path: 'header_footer.footer_highlighted_small', icon: t }
            : { config: ie, path: 'header_footer.footer_small', icon: t };
}
function me(e, t) {
    const o = i('px');
    return { x: l(e + o.x - 8), y: l(t + o.y - 8 - 356), width: 424, height: 356 };
}
const _e = { maskLeft: 'maskLeft', maskRight: 'maskRight', maskBoth: 'maskBoth', none: 'none' };
function he(e, t, o) {
    const a = t.left - e.left + o,
        n = 0.04 * e.width,
        s = a - n,
        r = a - e.width + t.width + n;
    return ((i = s), (l = r), (c = o), Math.abs(i - c) < Math.abs(l - c) ? i : l);
    var i, l, c;
}
const fe = 'ChatButton_58c17ddd',
    ye = 'ChatButton_base__glow_e84e99cd',
    be = 'ChatButton_overlay_d0e16554',
    pe = 'ChatButton_base__unreadMessages_1daa9390',
    ge = 'ChatButton_content_1735f2eb',
    xe = 'ChatButton_name_a3b5f0d7',
    ve = 'ChatButton_closeIcon_7b57d2d1',
    we = /^#.*?:/,
    Ce = c.resolve('strings');
function Be(e) {
    return e.match(we) ? Ce.readOrEmpty(e.slice(1).replace(/[:/]/g, '.')) : e;
}
const Ne = e(
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
                    (p.onClick(), f(e, me(o, a)));
                },
                className: a(fe, (r || l) && ye, l && pe, c),
                classNames: { overlay: be, content: ge },
                autoAlignContent: !1,
                children: [
                    o.jsx('div', { className: xe, children: Be(n) }),
                    !i &&
                        o.jsx('div', {
                            className: ve,
                            onClick: function (t) {
                                (t.stopPropagation(), y(e));
                            },
                        }),
                ],
            });
        }),
    ),
    je = {
        base: 'ScrollControlButtons_bd2f5f8c',
        content: 'ScrollControlButtons_content_bb845a88',
        content__maskLeft: 'ScrollControlButtons_content__maskLeft_d0570fce',
        content__maskRight: 'ScrollControlButtons_content__maskRight_a6cec051',
        content__maskBoth: 'ScrollControlButtons_content__maskBoth_e771a026',
        arrowButton: 'ScrollControlButtons_arrowButton_dd11fcee',
        arrowButton__left: 'ScrollControlButtons_arrowButton__left_22c9e28b',
        arrowButton__right: 'ScrollControlButtons_arrowButton__right_e553b5a0',
        arrowButton__disabled: 'ScrollControlButtons_arrowButton__disabled_e38b51c',
    };
function ke({ itemWidth: e, api: n, children: s }) {
    const r = t.useRef(null),
        [i, l] = t.useState(!1),
        [c, d] = f(n),
        { disabled: u, animationScroll: y, applyScroll: b } = n;
    function p(t) {
        function o() {
            const o = y.scrollPosition.get();
            b(o + t * e);
        }
        i || (o(), (r.current = window.setInterval(o, 100)), l(!0));
    }
    function g() {
        (null !== r.current && (clearInterval(r.current), (r.current = null)), l(!1));
    }
    return o.jsxs('div', {
        className: je.base,
        children: [
            !u &&
                o.jsx(m, {
                    theme: h.secondary,
                    size: _.small,
                    autoAlignContent: !1,
                    onMouseDown: () => p(-1),
                    onMouseUp: g,
                    onMouseLeave: g,
                    disabled: c,
                    className: a(je.arrowButton, je.arrowButton__left, c && je.arrowButton__disabled),
                }),
            o.jsx('div', {
                className: a(
                    je.content,
                    je[
                        `content__${((x = c), (v = d), x || v ? (v ? (x ? _e.none : _e.maskLeft) : _e.maskRight) : _e.maskBoth)}`
                    ],
                ),
                children: s,
            }),
            !u &&
                o.jsx(m, {
                    theme: h.secondary,
                    size: _.small,
                    autoAlignContent: !1,
                    onMouseDown: () => p(1),
                    onMouseUp: g,
                    onMouseLeave: g,
                    disabled: d,
                    className: a(je.arrowButton, je.arrowButton__right, d && je.arrowButton__disabled),
                }),
        ],
    });
    var x, v;
}
const Se = 'ChatCarousel_14e3db73',
    Me = 'ChatCarousel_scrollWrapper_578773a',
    Pe = 'ChatCarousel_scrollContent_578773a',
    Re = 'ChatCarousel_button_8bb458f8',
    Ee = 'ChatCarousel_button__firstItem_e66db7f4',
    Ie = 'ChatCarousel_divider_312a4ca4',
    ze = e(function ({ className: e }) {
        const { api: n } = y(),
            { model: s, controls: r } = G(),
            i = s.computes.sortedChats(),
            l = b(i),
            [c, d] = t.useState(-1),
            [u, m] = t.useState(!1),
            _ = t.useRef(null),
            h = t.useRef(null);
        (t.useLayoutEffect(() => {
            const e = n.getContainerSize(),
                t = n.getWrapperSize();
            if (e && t) {
                if ((e < t && n.applyScroll(0), h.current)) {
                    const t = h.current - e;
                    if (0 !== t) {
                        const e = n.animationScroll.scrollPosition.get();
                        n.applyScroll(e - t);
                    }
                }
                h.current = e;
            }
        }, [i.length, n]),
            t.useEffect(() => {
                const e = () => {
                    const e = n.getContainerSize(),
                        t = n.getWrapperSize();
                    e && t ? n.setDisabled(t > e) : n.setDisabled(!0);
                };
                e();
                return new p().add(n.events.on('resizeHandled', e)).add(n.events.on('recalculateContent', e)).dispose;
            }, [n, i.length]),
            t.useEffect(() => {
                function e() {
                    var e;
                    const t = null == (e = n.contentRef.current) ? void 0 : e.getBoundingClientRect();
                    t && r.updateWindowAnchor(me(t.right, t.top));
                }
                return new p().add(n.events.on('resizeHandled', e)).add(n.events.on('recalculateContent', e)).dispose;
            }, [n, r]),
            t.useEffect(() => {
                if (l && i.length > l.length) {
                    const e = i.findIndex((e) => !l.includes(e));
                    -1 !== e && (d(e), m(!0));
                }
            }, [i, l, n]));
        const f = t.useRef();
        (g(() => {
            if (-1 !== c && _.current && n.wrapperRef.current && u) {
                const e = n.animationScroll.scrollPosition.get(),
                    t = _.current.getBoundingClientRect(),
                    o = n.wrapperRef.current.getBoundingClientRect();
                ((t.left >= o.left && t.right <= o.right) ||
                    (f.current = setTimeout(() => n.applyScroll(he(o, t, e)), 100)),
                    m(!1));
            }
        }, [c, n, u]),
            x(() => clearTimeout(f.current)));
        const C = v(92, []);
        return o.jsxs(o.Fragment, {
            children: [
                i.length > 0 && o.jsx(F, { className: Ie }),
                o.jsx('div', {
                    className: a(Se, e),
                    children: o.jsx(ke, {
                        api: n,
                        itemWidth: C,
                        children: o.jsx(w, {
                            classNames: { wrapper: Me, content: Pe },
                            children: i.map((e, t) => {
                                const { id: n, name: s, selected: i, viewed: l, system: d, tooltipId: u } = e.get();
                                return o.jsx(
                                    Ne,
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
                                        className: a(Re, 0 === t && Ee),
                                    },
                                    s,
                                );
                            }),
                        }),
                    }),
                }),
            ],
        });
    });
function Le(e) {
    return o.jsx(C, { children: o.jsx(ze, { ...e }) });
}
const We = 'ChatChannels_c801bb1d',
    Ae = 'ChatChannels_icon_a3ff928f';
const Oe = e(function ({ className: e }) {
        const { controls: t } = G(),
            n = B(),
            s = c.resolve('strings'),
            r = N({ value: ce.small }, { medium: { value: ce.medium } }),
            u = j(r.value, S),
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
            className: a(We, e),
            children: o.jsx(k, { ...ue(u, 'chat'), className: Ae }),
        });
    }),
    Fe = 'Contacts_51abbb46',
    Ve = 'Contacts_icon_a516b2cd',
    De = 'Contacts_friendsOnlineCount_20e5b06c',
    Ge = e(function () {
        const e = c.resolve('intl'),
            t = c.resolve('strings'),
            { model: a } = U(),
            n = a.contactsCount.get(),
            s = N({ value: ce.small }, { medium: { value: ce.medium } }),
            r = j(s.value, S),
            i = d({
                header: t.readOrEmpty('tooltips.loby_messenger.contacts_button.header'),
                body: t.readOrEmpty('tooltips.loby_messenger.contacts_button.body'),
            }),
            l = M('ContactsPopover'),
            u = B();
        return o.jsxs('div', {
            ...l,
            ...i,
            className: Fe,
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
                o.jsx(k, { ...ue(r, 'contacts'), className: Ve }),
                n > 0 && o.jsx('div', { className: De, children: e.formatNumber('integral', n) }),
            ],
        });
    });
var $e = ((e) => (
    (e[(e.Requested = 0)] = 'Requested'),
    (e[(e.High = 1)] = 'High'),
    (e[(e.Norm = 2)] = 'Norm'),
    (e[(e.Low = 3)] = 'Low'),
    e
))($e || {});
const Ue = {
        base: 'Ping_da5c25be',
        serverName: 'Ping_serverName_74565bce',
        indicator: 'Ping_indicator_42a6616c',
        indicatorBar: 'Ping_indicatorBar_74c4fee6',
        indicatorBar__active: 'Ping_indicatorBar__active_7a80c240',
        indicatorBar__weak: 'Ping_indicatorBar__weak_8e4c0bd9',
        base__protanopia: 'Ping_base__protanopia_7471c73e',
    },
    He = 'active',
    Te = 'weak',
    qe = 'none';
function Je(e, t) {
    return 0 === e && t === $e.High ? Te : e < t ? He : qe;
}
const Ke = e(function () {
        const { model: e } = Y(),
            n = e.serverName.get(),
            s = e.status.get(),
            r = e.colorBlind.get(),
            i = P(
                'serversInfo',
                t.useMemo(() => [], []),
            );
        return o.jsxs('div', {
            ...i,
            className: a(Ue.base, Ue[`base__${r}`]),
            children: [
                o.jsx('div', { className: Ue.serverName, children: n }),
                o.jsx('div', {
                    className: Ue.indicator,
                    children: R(3, (e) =>
                        o.jsx(
                            'div',
                            { className: a(Ue.indicatorBar, Ue[`indicatorBar__${Je(e, s)}`]) },
                            `indicatorBar-${e}`,
                        ),
                    ),
                }),
            ],
        });
    }),
    Qe = t.lazy(() => V(() => import('../../../chunks/widget.js'), [], import.meta.url));
function Xe(e) {
    const a = e.options.rootId;
    if (a) return o.jsx(E, { id: a, children: o.jsx(t.Suspense, { children: o.jsx(Qe, { ...e }) }) });
    console.error('PlatoonWidget: rootId is not given');
}
const Ye = 'ReferralProgram_valueContainer_a1a1e336',
    Ze = 'ReferralProgram_value_b1636df4',
    et = 'ReferralProgram_54cc6b2f',
    tt = 'ReferralProgram_icon_219cf8',
    ot = 'ReferralProgram_icon__highlighted_77ea5c59',
    at = 'ReferralProgram_notifications_d09a7c8a',
    nt = e(function ({ className: e }) {
        const t = B(),
            n = c.resolve('strings'),
            { model: s, controls: r } = Q(),
            i = s.bubbleCount.get() > 0,
            l = s.firstIndication.get(),
            u = N({ value: I.small }, { medium: { value: I.medium } }),
            m = j(u.value, S),
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
            className: a(et, e),
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
                o.jsx(k, { ...ue(m, 'referral_program', l), className: a(tt, l && ot) }),
                o.jsx(z.Root, {
                    hidden: !i,
                    className: at,
                    children: o.jsx(z.Value, {
                        value: s.bubbleCount.get(),
                        size: u.value,
                        classNames: { valueContainer: Ye, value: Ze },
                    }),
                }),
            ],
        });
    }),
    st = 'SessionStatistic_2cb87b7d',
    rt = 'SessionStatistic_base__enabled_aac72629',
    it = 'SessionStatistic_icon_ebed106f',
    lt = 'SessionStatistic_icon__enabled_bd94c361',
    ct = 'SessionStatistic_battleCount_488e1028',
    dt = 'enabled',
    ut = 'disabled',
    mt = 'winback';
const _t = e(function () {
        const e = c.resolve('intl'),
            { model: t } = ee(),
            n = t.battleCount.get(),
            s = t.enabled.get(),
            r = t.sessionStatsEnabled.get(),
            i = t.winback.get(),
            { sessionStatisticState: l, iconEnabled: u } = (function (e, t) {
                return t
                    ? { sessionStatisticState: mt, iconEnabled: !1 }
                    : { sessionStatisticState: e ? dt : ut, iconEnabled: e };
            })(s, i),
            m = N({ value: ce.small }, { medium: { value: ce.medium } }),
            _ = j(m.value, S),
            h = c.resolve('strings'),
            f = d({
                header: h.readOrEmpty('session_stats.tooltip.mainBtn.header'),
                body: h.readOrEmpty(`session_stats.tooltip.mainBtn.body.${l}`),
            }),
            y = M('SessionStatsPopover'),
            b = B();
        return (
            r &&
            o.jsxs('div', {
                ...y,
                ...f,
                className: a(st, u && rt),
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
                    o.jsx(k, { ...ue(_, u ? 'session_stats' : 'session_stats_disabled'), className: a(it, u && lt) }),
                    n > 0 && o.jsx('div', { className: ct, children: e.formatNumber('integral', n) }),
                ],
            })
        );
    }),
    ht = 'VehicleCompare_cff2d129',
    ft = 'VehicleCompare_icon_cbce43e9',
    yt = 'VehicleCompare_vehicleCount_691224b7',
    bt = e(function (e) {
        const { model: t } = oe(),
            a = t.vehicleCount.get(),
            n = a > 0 && t.enabled.get();
        return o.jsx(pt, { className: e.className, count: a, visible: n });
    });
function pt({ count: e, visible: n, className: s }) {
    const r = b(e),
        i = t.useRef(null),
        l = c.resolve('intl'),
        u = c.resolve('strings'),
        m = M('VehicleCompareCartPopover');
    t.useEffect(() => {
        if (void 0 !== r) {
            if (0 === r && 1 === e && i.current) {
                const e = new MouseEvent('click', { bubbles: !0 });
                i.current.dispatchEvent(e);
            }
            r > 0 && 0 === e && m.hide();
        }
    }, [m, e, r]);
    const _ = N({ value: ce.small }, { medium: { value: ce.medium } }),
        h = j(_.value, S),
        f = d({ body: u.readOrEmpty('tooltips.loby_messenger.vehicle_compare_button.body') }),
        y = B();
    if (n)
        return o.jsxs('div', {
            ...m,
            ...f,
            ref: i,
            className: a(ht, s),
            onClick: function (e) {
                (y.play('click', { target: 'VehicleCompareButton', original: e }),
                    null == m || m.onClick(e),
                    null == f || f.onClick());
            },
            onMouseEnter: function (e) {
                (y.play('mouse-enter', { target: 'VehicleCompareButton', original: e }),
                    null == f || f.onMouseEnter(e));
            },
            children: [
                o.jsx(k, { ...ue(h, 'comparison'), className: ft }),
                o.jsx('div', { className: yt, children: l.formatNumber('integral', e) }),
            ],
        });
}
const gt = 'Footer_valueContainer_f6f9da36',
    xt = 'Footer_value_96c42424',
    vt = 'Footer_c3a0f302',
    wt = 'Footer_section_9d3d3a12',
    Ct = 'Footer_button_c7203e02',
    Bt = 'Footer_icon_6ff60f47',
    Nt = 'Footer_icon__notification_827f4505',
    jt = 'Footer_iconImage_50c8b940',
    kt = 'Footer_notifications_d2687e3',
    St = 'Footer_divider_4ccd0230',
    Mt = 'Footer_vehicleCompare_531bca52';
const Pt = e(
        t.forwardRef(function ({ className: e }, n) {
            const { model: s } = J(),
                { model: r } = Q(),
                i = s.newNotificationsCount.get(),
                l = i > 0,
                { controls: u } = T(),
                m = B(),
                _ = c.resolve('strings'),
                h = t.useMemo(() => [], []),
                f = b(i) ?? i,
                y = N({ value: I.small }, { medium: { value: I.medium } }),
                p = j(y.value, S),
                g = P('settingsButton', h),
                x = d({
                    header: _.readOrEmpty('tooltips.loby_messenger.service_button.header'),
                    body: _.readOrEmpty('tooltips.loby_messenger.service_button.body'),
                }),
                v = M('notificationsList');
            const w = t.useMemo(
                () => ({ rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.Platoon('resId')) }),
                [],
            );
            return o.jsxs('div', {
                ref: n,
                className: a(vt, e),
                children: [
                    o.jsxs('div', {
                        className: wt,
                        children: [
                            o.jsx(Ge, {}),
                            o.jsx(Oe, { className: Ct }),
                            r.enabled.get() && o.jsx(nt, { className: Ct }),
                            o.jsx(Xe, { options: w }),
                        ],
                    }),
                    o.jsx(Le, {}),
                    o.jsxs('div', {
                        className: wt,
                        children: [
                            o.jsx(bt, { className: Mt }),
                            o.jsx(_t, {}),
                            o.jsx(F, { className: St }),
                            o.jsx(Ke, {}),
                            o.jsx('div', {
                                ...g,
                                className: Bt,
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
                                children: o.jsx(k, { ...ue(p, 'game_menu_button'), className: jt }),
                            }),
                            o.jsx(F, { className: St }),
                            o.jsxs('div', {
                                ...v,
                                ...x,
                                className: a(Bt, Nt),
                                'data-test-id': 'notificationCenter',
                                onClick: function (e) {
                                    (m.play('click', { target: 'GameMenuButton', original: e }),
                                        null == v || v.onClick(e),
                                        null == x || x.onClick());
                                },
                                onMouseEnter: function (e) {
                                    (m.play('mouse-enter', { target: 'GameMenuButton', original: e }),
                                        null == x || x.onMouseEnter(e));
                                },
                                children: [
                                    o.jsx(k, { ...ue(p, 'notification_button', l), className: jt }),
                                    o.jsx(z.Root, {
                                        hidden: i <= 0,
                                        className: kt,
                                        children: o.jsx(z.Value, {
                                            value: ((C = i), (R = f), 0 === C ? R : C),
                                            size: y.value,
                                            classNames: { valueContainer: gt, value: xt },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
            var C, R;
        }),
    ),
    Rt = 'App_cabb9f2f',
    Et = 'App_footer_8633140e',
    It = 'App_footer__oldStyle_ed955e9f';
const zt = e(function () {
    const e = L(250, 0),
        { model: t } = T();
    return o.jsx('div', { className: Rt, children: o.jsx(Pt, { ref: e, className: a(Et, t.oldStyle.get() && It) }) });
});
O(
    new W()
        .add(A)
        .add(H)
        .addWithProps($, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.ContactsList('resId')) },
        })
        .addWithProps(K, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.ReferralProgram('resId')) },
        })
        .addWithProps(te, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.VehicleCompare('resId')) },
        })
        .addWithProps(Z, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.SessionStats('resId')) },
        })
        .addWithProps(q, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.NotificationsCenter('resId')) },
        })
        .addWithProps(D, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.Chats('resId')) },
        })
        .addWithProps(X, {
            options: { rootId: c.resolve('aliases').read((e) => e.lobby_footer.default.ServerInfo('resId')) },
        })
        .render(o.jsx(zt, {})),
);
export { ue as a, de as i, ce as s };
