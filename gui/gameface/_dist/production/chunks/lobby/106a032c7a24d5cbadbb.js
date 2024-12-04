(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [5041],
    {
        3368: () => {
            !(function () {
                let e,
                    t,
                    a,
                    n,
                    r,
                    s,
                    l,
                    o = -1;
                document.addEventListener('mousedown', (a) => {
                    document.getSelection().empty(),
                        a.target.select &&
                            -1 === o &&
                            ((e = a.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                }),
                    document.addEventListener('mousemove', (a) => {
                        if ((-1 === o && a.target.select && a.target === e && (o = e.selectionStart), o > -1)) {
                            const n = Math.min(Math.max(a.x, t.left), t.right),
                                r = Math.min(Math.max(a.y, t.top), t.bottom),
                                s = document.createEvent('MouseEvent');
                            s.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
                                e.dispatchEvent(s);
                            const l = e.selectionEnd;
                            l > o ? e.setSelectionRange(o, l, 'forward') : e.setSelectionRange(l, o, 'backward');
                        }
                    }),
                    document.addEventListener('mouseup', () => {
                        (e = null), (o = -1);
                    }),
                    document.addEventListener('dblclick', (e) => {
                        e.target.select &&
                            (document.getSelection().empty(),
                            (a = e.target),
                            (n = e.target.value),
                            (r = a.selectionStart),
                            (s = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                            (l = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                            a.setSelectionRange(s, l, 'forward'));
                    });
            })(),
                (function () {
                    let e = null;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            0 !== t.button || t.target.select || e || (e = document.caretPositionFromPoint(t.x, t.y));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if (0 === t.button && !t.target.select && e) {
                                const a = document.caretPositionFromPoint(t.x, t.y);
                                if (!a.offsetNode || !e.offsetNode) return;
                                document
                                    .getSelection()
                                    .setBaseAndExtent(e.offsetNode, e.offset, a.offsetNode, a.offset);
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            e = null;
                        });
                })();
        },
        2307: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { default: () => En });
            var n = a(6179),
                r = a.n(n),
                s = a(6483),
                l = a.n(s);
            const o = 'Spinner_base_87',
                i = 'Spinner_caption_cf',
                c = 'Spinner_gear_c4',
                d = 'Spinner_logo_bf',
                m = ({ message: e, className: t, classNames: a }) =>
                    r().createElement(
                        'div',
                        { className: l()(o, t) },
                        e && r().createElement('div', { className: l()(i, null == a ? void 0 : a.caption) }, e),
                        r().createElement('div', { className: l()(c, null == a ? void 0 : a.gear) }),
                        r().createElement('div', { className: l()(d, null == a ? void 0 : a.logo) }),
                    );
            var u = a(3457);
            const _ = 'Error_base_46',
                f = 'Error_alertIcon_04',
                v = 'Error_errorCaption_f2',
                g = 'Error_button_cd',
                p = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: a }) =>
                    r().createElement(
                        'div',
                        { className: _ },
                        r().createElement('div', { className: f }),
                        r().createElement('div', { className: v }, a),
                        r().createElement(u.u5, { size: u.qE.medium, mixClass: g, onClick: t }, e),
                    );
            p.defaultProps = { errorBtnLabel: '', errorMessage: '' };
            const b = 'Waiting_base_c5',
                E = 'Waiting_blackOverlay_55',
                N = ({
                    message: e,
                    isError: t,
                    errorMessage: a,
                    errorBtnLabel: s,
                    errorBtnClickHandler: l,
                    overlayAlpha: o,
                }) => {
                    const i = r().createRef();
                    return (
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            e && o && (e.style.opacity = o);
                        }, [i, o]),
                        r().createElement(
                            'div',
                            { className: b },
                            r().createElement('div', { className: E, ref: i }),
                            t
                                ? r().createElement(p, { errorBtnLabel: s, errorMessage: a, errorBtnClickHandler: l })
                                : r().createElement(m, { message: e }),
                        )
                    );
                };
            N.defaultProps = {
                isError: !1,
                message: '',
                overlayAlpha: '0.8',
                errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                errorMessage: '',
            };
            var h = a(4598),
                y = a(3403);
            const F = 'Failure_base_f4',
                C = 'Failure_image_25',
                S = 'Failure_content_4f',
                I = 'Failure_title_16',
                x = 'Failure_message_dd',
                B = ({ className: e, title: t, message: a }) =>
                    r().createElement(
                        'div',
                        { className: l()(F, e) },
                        r().createElement('div', { className: C }),
                        r().createElement(
                            'div',
                            { className: S },
                            r().createElement('div', { className: I }, t),
                            r().createElement('div', { className: x }, a),
                        ),
                    );
            var k = a(5976),
                w = a(6339),
                O = a(8764);
            let P;
            !(function (e) {
                (e[(e.Pending = 1)] = 'Pending'), (e[(e.Loaded = 2)] = 'Loaded'), (e[(e.Failure = 3)] = 'Failure');
            })(P || (P = {}));
            var D = a(3215),
                L = a(9480),
                A = a(7727),
                H = a(5139),
                T = a(9174),
                M = a(3946),
                W = a(2578);
            Symbol('uniqSeconds');
            const j = (e) => e;
            let $, U, G;
            !(function (e) {
                (e.Default = 'default'), (e.Search = 'search');
            })($ || ($ = {})),
                (function (e) {
                    (e.None = 'none'), (e.Search = 'search'), (e.Friends = 'friends'), (e.BestFriends = 'bestFriends');
                })(U || (U = {})),
                (function (e) {
                    (e.Up = 'up'), (e.Down = 'down'), (e.None = 'none');
                })(G || (G = {}));
            var z = a(1612);
            var q = a(4827);
            const Z = ['hangarName'];
            (0, T.jQ)({ computedRequiresReaction: !1 });
            const V = { [O.J.Online]: W.q.Online, [O.J.Offline]: W.q.Offline },
                J = (0, D.q)()(
                    ({ observableModel: e, externalModel: t, readByPath: a }) => {
                        const n = Object.assign(
                            {
                                root: e.object(),
                                friends: T.LO.box(K(a('friends'))),
                                bestFriends: e.array('bestFriends'),
                                totalFriendsCount: T.LO.box(0),
                                search: T.LO.box(''),
                                foundFriendIds: T.LO.box([]),
                                headerState: T.LO.box(U.None),
                                scrollDirection: T.LO.box(G.None),
                                searchFocused: T.LO.box(!1),
                            },
                            e.primitives({
                                friendListLoadingState: 'loadingState',
                                showBanner: 'bannerDisplayed',
                                realm: 'realm',
                                maxBestFriendsCount: 'maxBestFriendsCount',
                                possibleCollectAmount: 'possibleCollectAmount',
                            }),
                        );
                        t.subscribe(
                            (0, T.aD)(() => {
                                const e = a('friends');
                                n.friends.set(K(e)), n.totalFriendsCount.set(e.length);
                            }),
                            'friends',
                        );
                        const r = (0, M.Om)(() =>
                                Object.keys(n.friends.get())
                                    .sort((e, t) => {
                                        const a = c(e),
                                            n = c(t);
                                        return (
                                            n.amountOfVisits - a.amountOfVisits ||
                                            n.level - a.level ||
                                            n.levelProgress - a.levelProgress ||
                                            a.nickname.localeCompare(n.nickname, void 0, { sensitivity: 'base' })
                                        );
                                    })
                                    .map(Number)
                                    .filter((e) => !d(e)),
                            ),
                            s = (0, M.Om)(() => r().length),
                            l = (0, M.Om)(() => n.bestFriends.get().length),
                            o = (0, M.Om)(() => s() + l() >= n.totalFriendsCount.get(), { keepAlive: !0 }),
                            i = (0, M.Om)(() => (n.search.get().length > 0 ? $.Search : $.Default)),
                            c = (0, M.Om)(
                                (e) => {
                                    const t = n.friends.get()[e];
                                    if (!t) throw new Error(`Friend with id ${e} not found`);
                                    return t;
                                },
                                { equals: h.jv },
                            ),
                            d = (0, M.Om)((e) => L.includes(n.bestFriends.get(), e)),
                            m = (0, M.Om)((e) => {
                                const t = c(e).canCollectResourcesTime;
                                return j(t);
                            }),
                            u = (0, M.Om)((e) => m(e) > 0),
                            _ = {
                                isBest: d,
                                friendIds: r,
                                getFriend: c,
                                screenState: i,
                                friendsCount: s,
                                allFriendsLoaded: o,
                                bestFriendsCount: l,
                                hasFriends: (0, M.Om)(() => n.totalFriendsCount.get() > 0),
                                foundFriendsCount: (0, M.Om)(() => n.foundFriendIds.get().length),
                                getPlayerStatus: (0, M.Om)((e) => V[e]),
                                getTimeUntilCollect: m,
                                getHasTimer: u,
                            };
                        return Object.assign({}, n, { computes: _ });
                    },
                    ({ externalModel: e, model: t, cleanup: a }) => {
                        const n = ((e, t) => ({
                            private: (0, z.h)({
                                saveFriends: (t) => {
                                    t.forEach((t) => {
                                        e.friends.get()[t.id] = t;
                                    });
                                },
                                openBanner: () => {
                                    t.setBannerDisplayed(!0);
                                },
                                updateFoundsFriends: (t) => e.foundFriendIds.set(t),
                            }),
                            public: (0, z.h)({
                                updateSearch: (t) => e.search.set(t),
                                setSearchFocus: (t) => e.searchFocused.set(t),
                                resetSearch: () => e.search.set(''),
                                updateHeaderState: (t, a) => {
                                    e.headerState.set(t), e.scrollDirection.set(a);
                                },
                                closeBanner: () => {
                                    t.setBannerDisplayed(!1);
                                },
                            }),
                        }))(t, {
                            setBannerDisplayed: e.createCallback((e) => ({ display: e }), 'onBannerChangeDisplay'),
                        });
                        ((e, t, a) => {
                            e(
                                (0, T.EH)(() => {
                                    const e = t.search.get();
                                    if (e.length > 0) {
                                        const n = t.friends.get(),
                                            r = L.filter(t.computes.friendIds(), (a) => {
                                                var r, s;
                                                return t.realm.get() === q.B.China
                                                    ? (null == (s = n[a]) ? void 0 : s.nickname.toLocaleLowerCase()) ===
                                                          e.toLocaleLowerCase()
                                                    : null == (r = n[a])
                                                      ? void 0
                                                      : r.nickname.toLocaleLowerCase().includes(e.toLocaleLowerCase());
                                            });
                                        a.private.updateFoundsFriends(r);
                                    }
                                }),
                            );
                        })(a, t, n);
                        const r = { options: { context: 'model.friendsModel.resourceBoxModel' } },
                            s = (0, H.Z)(
                                1e4,
                                e.createCallback(
                                    (e) => ((0, A.G)(R.sounds.hangar_newyear_celeb_screen_card_spin()), { id: e }),
                                    'onGoToFriend',
                                ),
                            );
                        return (
                            a(s.cancel),
                            Object.assign({}, n.public, {
                                goToFriend: s,
                                addBestFriend: e.createCallback((e) => ({ id: e }), 'onChooseBestFriend'),
                                removeBestFriend: e.createCallback((e) => ({ id: e }), 'onDeleteBestFriend'),
                                setBannerDisplayed: e.createCallback((e) => ({ display: e }), 'onBannerChangeDisplay'),
                                goToCollect: e.createCallback((e) => ({ id: e }), 'onGoToCollect'),
                                getWidgetResourceBoxProps: () => r,
                            })
                        );
                    },
                ),
                Y = J[0],
                Q = J[1];
            function K(e) {
                return L.collectMapBy(e, ({ id: e }) => e, X);
            }
            function X(e) {
                const t = e.hangarName,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, Z);
                return Object.assign({}, a, { hangarName: Object.assign({}, t) });
            }
            var ee = a(3649),
                te = a(9766);
            const ae = 'NoFriends_base_37',
                ne = 'NoFriends_title_9f',
                re = 'NoFriends_subtitle_0b',
                se = 'NoFriends_list_3a',
                le = 'NoFriends_item_61',
                oe = 'NoFriends_image_5e',
                ie = 'NoFriends_itemTitle_a7',
                ce = 'NoFriends_itemDescription_73',
                de = R.strings.ny.friends.noFriends,
                me = R.images.gui.maps.icons.newYear.friends,
                ue = ['battle', 'platoon', 'social', 'clan'],
                _e = ({ maxCollectAmount: e }) =>
                    r().createElement(
                        'div',
                        { className: ae },
                        r().createElement('div', { className: ne }, de.title.common()),
                        r().createElement('div', { className: re }, (0, ee.uF)(de.subtitle.common(), { value: e })),
                        r().createElement(
                            'div',
                            { className: se },
                            ue.map((e) =>
                                r().createElement(
                                    'div',
                                    { key: e, className: le },
                                    r().createElement('div', {
                                        className: oe,
                                        style: { backgroundImage: `url(${me.$dyn(e)})` },
                                    }),
                                    r().createElement('div', { className: ie }, de.title.$dyn(e)),
                                    r().createElement(te.z, { text: de.subtitle.$dyn(e), classMix: ce }),
                                ),
                            ),
                        ),
                    ),
                fe = {
                    base: 'App_base_48',
                    'base__preset-low': 'App_base__preset-low_66',
                    failure: 'App_failure_61',
                    resourceBox: 'App_resourceBox_6a',
                };
            var ve = a(198);
            const ge = 'Lip_base_9b',
                pe = 'Lip_base__foreground_6d',
                be = 'Lip_base__background_90',
                Ee = 'Lip_line_9b',
                Ne = 'Lip_line__dark_81',
                he = 'Lip_line__light_96',
                ye = 'Lip_line__black_36',
                Fe = {
                    Foreground: (0, n.memo)(() =>
                        r().createElement(
                            'div',
                            { className: l()(ge, pe) },
                            r().createElement('div', { className: l()(Ee, Ne) }),
                            r().createElement('div', { className: l()(Ee, he) }),
                            r().createElement('div', { className: l()(Ee, ye) }),
                        ),
                    ),
                    Background: (0, n.memo)(() => r().createElement('div', { className: l()(ge, be) })),
                },
                Ce = 'InfoBanner_base_b3',
                Se = 'InfoBanner_content_4b',
                Ie = 'InfoBanner_close_49',
                xe = ({ children: e, onClose: t, className: a }) =>
                    r().createElement(
                        'div',
                        { className: l()(Ce, a) },
                        r().createElement('div', { className: Se }, e),
                        r().createElement('div', {
                            className: Ie,
                            onMouseEnter: () => {
                                A.$.playHighlight();
                            },
                            onClick: () => {
                                A.$.playClick(), null == t || t();
                            },
                        }),
                    ),
                Be = 'Banner_base_77',
                ke = 'Banner_paragraph_13',
                we = (0, y.Pi)(({ className: e }) => {
                    const t = Q(),
                        a = t.model,
                        n = t.controls;
                    return !1 === a.bannerDisplayed.get()
                        ? null
                        : r().createElement(
                              'div',
                              { className: l()(Be, e) },
                              r().createElement(
                                  xe,
                                  { onClose: () => n.setBannerDisplayed(!1) },
                                  r().createElement('div', { className: ke }, R.strings.ny.friends.info.banner()),
                              ),
                          );
                });
            var Re = a(6247),
                Oe = a(5032),
                Pe = a(3032);
            const De = { text: 'Timer_text_2d' },
                Le = (0, y.Pi)(({ classNames: e, id: t }) => {
                    const a = Q().model;
                    return r().createElement(
                        'div',
                        { className: l()(De.base, null == e ? void 0 : e.base) },
                        r().createElement(Pe.ZP, {
                            classNames: {
                                text: l()(De.text, null == e ? void 0 : e.text),
                                icon: null == e ? void 0 : e.icon,
                            },
                            duration: a.computes.getTimeUntilCollect(t),
                        }),
                    );
                }),
                Ae = 'EmptyCard_base_db',
                He = 'EmptyCard_content_19',
                Te = 'EmptyCard_title_b3',
                Me = 'EmptyCard_gradientText_43',
                We = 'EmptyCard_description_8b',
                je = 'EmptyCard_iconStar_0f',
                $e = 'EmptyCard_timer_24',
                Ue = R.strings.ny.friends.card.empty;
            let Ge;
            !(function (e) {
                (e.Cooldown = 'cooldown'), (e.AvailableAddition = 'availableAddition'), (e.Promo = 'promo');
            })(Ge || (Ge = {}));
            const ze = (0, y.Pi)(({ state: e, id: t, className: a }) => {
                const n = Q().model;
                return r().createElement(
                    Oe.hE,
                    { className: l()(Ae, a), state: Oe.ve.Empty },
                    r().createElement(
                        'div',
                        { className: He },
                        (() => {
                            switch (e) {
                                case Ge.Cooldown:
                                    return r().createElement(
                                        r().Fragment,
                                        null,
                                        t && r().createElement(Le, { id: t, classNames: { base: $e } }),
                                        r().createElement('div', { className: We }, Ue.cooldown()),
                                    );
                                case Ge.AvailableAddition:
                                    return r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: je }),
                                        r().createElement('div', { className: We }, Ue.available()),
                                    );
                                case Ge.Promo:
                                    return r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(
                                            'div',
                                            { className: Te },
                                            Ue.promo.title(),
                                            r().createElement('div', { className: Me }, Ue.promo.title()),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: We },
                                            (0, ee.uF)(Ue.promo.description(), {
                                                value: n.possibleCollectAmount.get(),
                                            }),
                                        ),
                                    );
                                default:
                                    return console.error('Unknown EmptyCardState ', Ge), null;
                            }
                        })(),
                    ),
                );
            });
            var qe = a(5332),
                Ze = a(889),
                Ve = a(3668),
                Je = a(6307);
            const Ye = {
                base: 'Favorite_base_eb',
                icon: 'Favorite_icon_a2',
                icon__best: 'Favorite_icon__best_fd',
                base__disabled: 'Favorite_base__disabled_10',
                disabledPattern: 'Favorite_disabledPattern_66',
                glow: 'Favorite_glow_de',
                timer: 'Favorite_timer_14',
                timerText: 'Favorite_timerText_17',
            };
            let Qe;
            !(function (e) {
                (e.Enabled = 'enabled'), (e.Disabled = 'disabled');
            })(Qe || (Qe = {}));
            const Ke = (e, t, a, n, r) =>
                    e === Qe.Enabled
                        ? { status: 'available' }
                        : t
                          ? a
                              ? { status: 'unavailableThisYear' }
                              : { status: 'unavailableUntil', until: n }
                          : { status: 'unavailableMax', max: r },
                Xe = (0, y.Pi)(({ id: e }) => {
                    const t = Q(),
                        a = t.model,
                        s = t.controls,
                        o = a.computes.getTimeUntilCollect(e),
                        i = a.computes.getHasTimer(e),
                        c = a.computes.isBest(e),
                        d = a.computes.bestFriendsCount() < a.maxBestFriendsCount.get(),
                        m = a.root.get().isFinished,
                        u = (0, n.useState)(Qe.Enabled),
                        _ = u[0],
                        f = u[1],
                        v = {
                            type: 'favorites',
                            payload: { isBest: c, kind: Ke(_, i, m, o, a.maxBestFriendsCount.get()) },
                        };
                    (0, n.useEffect)(() => {
                        f(c ? (i ? Qe.Disabled : Qe.Enabled) : d ? Qe.Enabled : Qe.Disabled);
                    }, [d, i, c]);
                    return r().createElement(
                        'div',
                        { className: l()(Ye.base, Ye[`base__${_}`]) },
                        _ === Qe.Enabled
                            ? r().createElement('div', { className: Ye.glow })
                            : r().createElement('div', { className: Ye.disabledPattern }),
                        r().createElement(
                            Je.O,
                            { args: v },
                            r().createElement('div', {
                                onMouseEnter: () => {
                                    _ !== Qe.Disabled && A.$.playHighlight();
                                },
                                onClick: () => {
                                    _ !== Qe.Disabled &&
                                        (c
                                            ? (s.removeBestFriend(e),
                                              (0, A.G)(R.sounds.hangar_newyear_friends_best_remove()))
                                            : (s.addBestFriend(e),
                                              (0, A.G)(R.sounds.hangar_newyear_friends_best_set())));
                                },
                                className: l()(Ye.icon, c && Ye.icon__best),
                            }),
                        ),
                        i &&
                            !m &&
                            r().createElement(
                                Je.O,
                                { args: { type: 'collectResUnavailable', payload: { until: o } } },
                                r().createElement(
                                    'div',
                                    { className: Ye.timer },
                                    r().createElement(Le, { id: e, classNames: { text: Ye.timerText } }),
                                ),
                            ),
                    );
                }),
                et = 'AdditionalInfo_base_b6',
                tt = 'AdditionalInfo_content_c0',
                at = 'AdditionalInfo_player_79',
                nt = 'AdditionalInfo_playerName_b7',
                rt = 'AdditionalInfo_favorite_3c',
                st = 'AdditionalInfo_statistic_6e',
                lt = 'AdditionalInfo_footer_26',
                ot = 'AdditionalInfo_button_2b',
                it = 'AdditionalInfo_buttonText_56';
            var ct = a(2372);
            const dt = 'Statistic_base_3b',
                mt = 'Statistic_item_8e',
                ut = 'Statistic_value_5a',
                _t = 'Statistic_gradientText_d8',
                ft = 'Statistic_caption_50',
                vt = R.strings.ny.friends.card,
                gt = ({ resourcesCollected: e, visitsAmount: t }) =>
                    r().createElement(
                        'div',
                        { className: dt },
                        r().createElement(
                            'div',
                            { className: mt },
                            r().createElement(
                                'div',
                                { className: ut },
                                r().createElement(ct.A, { value: e }),
                                r().createElement('div', { className: _t }, r().createElement(ct.A, { value: e })),
                            ),
                            r().createElement('div', { className: ft }, vt.resourcesCollected()),
                        ),
                        r().createElement(
                            'div',
                            { className: mt },
                            r().createElement(
                                'div',
                                { className: ut },
                                r().createElement(ct.A, { value: t }),
                                r().createElement('div', { className: _t }, r().createElement(ct.A, { value: t })),
                            ),
                            r().createElement('div', { className: ft }, vt.visited()),
                        ),
                    ),
                pt = R.strings.ny.friends.card,
                bt = (0, y.Pi)(({ id: e }) => {
                    const t = Q(),
                        a = t.model,
                        n = t.controls,
                        s = a.computes.getFriend(e),
                        l = a.computes.isBest(e) && !a.computes.getHasTimer(e),
                        o = s.nickname,
                        i = s.userStatus,
                        c = s.serverName,
                        d = s.amountOfCollectedResources,
                        m = s.amountOfVisits,
                        u = {
                            type: 'playerStatus',
                            payload: { name: o, serverName: c, status: a.computes.getPlayerStatus(i) },
                        },
                        _ = (0, qe.N)(
                            () => {
                                l ? n.goToCollect(e) : n.goToFriend(e);
                            },
                            [l, n, e],
                            500,
                            !0,
                        );
                    return r().createElement(
                        Oe.hE,
                        { className: et, hasDecoration: !0, isHovered: !0 },
                        r().createElement(
                            'div',
                            { className: tt },
                            r().createElement('div', { className: rt }, r().createElement(Xe, { id: e })),
                            r().createElement(Ve.s, {
                                isIconAbsolute: !0,
                                className: at,
                                classNames: { name: nt },
                                name: o,
                                status: a.computes.getPlayerStatus(i),
                                tooltipArgs: u,
                            }),
                            r().createElement(
                                'div',
                                { className: st },
                                r().createElement(gt, { resourcesCollected: d, visitsAmount: m }),
                            ),
                            r().createElement(
                                'div',
                                { className: lt, onClick: _ },
                                r().createElement(
                                    Ze.e,
                                    { hasHover: !0, className: ot },
                                    r().createElement('div', { className: it }, l ? pt.collect() : pt.moveToHangar()),
                                ),
                            ),
                        ),
                    );
                }),
                Et = 'FriendCard_base_6a',
                Nt = 'FriendCard_main_de',
                ht = 'FriendCard_additional_66';
            var yt = a(9495),
                Ft = a(1132);
            const Ct = 'HangarNameWidget_base_94',
                St = 'HangarNameWidget_name_f0',
                It = 'HangarNameWidget_nameDescription_35',
                xt = 'HangarNameWidget_nameTitleBox_cc',
                Bt = 'HangarNameWidget_nameTitle_30',
                kt = 'HangarNameWidget_playerName_07',
                wt = ({ titleId: e, descriptionId: t, nickname: a, playerStatus: n }) =>
                    r().createElement(
                        'div',
                        { className: Ct },
                        r().createElement(yt.A6, {
                            title: (0, Ft.Y)(e),
                            description: (0, Ft.E)(t),
                            size: yt.A6.Size.Custom,
                            type: yt.vS.Gradient,
                            hasLine: !1,
                            classNames: { base: St, title: Bt, titleBox: xt, description: It },
                        }),
                        r().createElement(Ve.s, { isIconAbsolute: !0, className: kt, name: a, status: n }),
                    ),
                Rt = 'MainInfo_base_47',
                Ot = 'MainInfo_content_cb',
                Pt = 'MainInfo_snow_c4',
                Dt = 'MainInfo_favorite_f5',
                Lt = 'MainInfo_progressBar_d5',
                At = 'MainInfo_image_ea',
                Ht = 'MainInfo_hangarName_b5';
            var Tt = a(5415),
                Mt = a(9690),
                Wt = a(4302),
                jt = a(3017);
            const $t = 'ProgressBar_base_3f',
                Ut = 'ProgressBar_inner_a6',
                Gt = 'ProgressBar_level_3f',
                zt = (e) => (e === Tt.cJ.ExtraSmall ? 48 : e === Tt.cJ.Small ? 64 : 72),
                qt = ({ levelProgress: e, maxLevelProgress: t, level: a }) => {
                    const n = (0, Tt.GS)().mediaSize;
                    return r().createElement(
                        'div',
                        { className: $t },
                        r().createElement(
                            'div',
                            { className: Ut },
                            r().createElement(Wt.G, {
                                theme: Wt.G.Theme.Simple,
                                size: zt(n),
                                prevValue: e,
                                currentValue: e,
                                maxValue: t,
                            }),
                            r().createElement(
                                'div',
                                { className: Gt },
                                r().createElement(jt.W, {
                                    type: Mt.qP ? 'arabic' : 'roman',
                                    level: a,
                                    theme: jt.W.Theme.Simple,
                                }),
                            ),
                        ),
                    );
                },
                Zt = (0, y.Pi)(({ id: e }) => {
                    const t = Q().model,
                        a = t.computes.getFriend(e),
                        n = a.nickname,
                        s = a.userStatus,
                        l = a.levelProgress,
                        o = a.maxLevelProgress,
                        i = a.level,
                        c = a.hangarName;
                    return r().createElement(
                        Oe.hE,
                        { className: Rt, hasDecoration: !1, glowType: Oe.r9.Left },
                        r().createElement(
                            'div',
                            { className: Ot },
                            r().createElement('div', { className: Pt }),
                            r().createElement('div', {
                                className: At,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.newYear.common.friend_card.christmas_tree.level_${i})`,
                                },
                            }),
                            r().createElement('div', { className: Dt }, r().createElement(Xe, { id: e })),
                            r().createElement(
                                'div',
                                { className: Lt },
                                r().createElement(qt, { levelProgress: l, maxLevelProgress: o, level: i }),
                            ),
                            r().createElement(
                                'div',
                                { className: Ht },
                                r().createElement(wt, {
                                    titleId: c.title,
                                    descriptionId: c.description,
                                    nickname: n,
                                    playerStatus: t.computes.getPlayerStatus(s),
                                }),
                            ),
                        ),
                    );
                }),
                Vt = ({ id: e, className: t }) =>
                    r().createElement(
                        'div',
                        {
                            className: l()(Et, t),
                            onMouseEnter: () => {
                                (0, A.G)(R.sounds.hangar_newyear_celeb_screen_card_hover());
                            },
                            onMouseLeave: () => {
                                (0, A.G)(R.sounds.hangar_newyear_celeb_screen_card_hover_off());
                            },
                        },
                        r().createElement('div', { className: Nt }, r().createElement(Zt, { id: e })),
                        r().createElement('div', { className: ht }, r().createElement(bt, { id: e })),
                    ),
                Jt = 'BestFriendList_base_ed',
                Yt = 'BestFriendList_card_b7',
                Qt = (0, y.Pi)(function ({ baseRef: e }) {
                    const t = Q().model,
                        a = t.bestFriends.get(),
                        n = 0 === t.computes.friendIds().length,
                        s = t.maxBestFriendsCount.get() - a.length;
                    return a.length > 0
                        ? r().createElement(
                              'div',
                              { className: Jt, ref: e },
                              L.map(a, (e) => {
                                  const a = t.computes.getFriend(e).isRemoved;
                                  return r().createElement(
                                      'div',
                                      { key: e, className: Yt },
                                      a
                                          ? r().createElement(ze, { state: Ge.Cooldown, id: e })
                                          : r().createElement(Vt, { key: e, id: e }),
                                  );
                              }),
                              (0, Re.K)(s, (e) =>
                                  r().createElement(ze, {
                                      state: n ? Ge.Promo : Ge.AvailableAddition,
                                      className: Yt,
                                      key: `empty-${e}`,
                                  }),
                              ),
                          )
                        : null;
                });
            var Kt = a(1856);
            const Xt = 'HintPanel_base_2e',
                ea = 'HintPanel_image_f8',
                ta = 'HintPanel_divider_d8',
                aa = 'HintPanel_text_8f',
                na = 'HintPanel_star_6b',
                ra = 'HintPanel_starContainer_f0',
                sa = () =>
                    r().createElement(
                        'div',
                        { className: Xt },
                        r().createElement('div', { className: ea }),
                        r().createElement('div', { className: ta }),
                        r().createElement(
                            'div',
                            { className: aa },
                            r().createElement(te.z, {
                                classMix: aa,
                                text: R.strings.ny.friends.hint(),
                                binding: {
                                    icon: r().createElement(
                                        'div',
                                        { className: ra },
                                        r().createElement('div', { className: na }),
                                    ),
                                },
                            }),
                        ),
                    ),
                la = 'NotFound_base_3f',
                oa = 'NotFound_text_81',
                ia = R.strings.ny.friends.search,
                ca = ({ onBack: e }) =>
                    r().createElement(
                        'div',
                        { className: la },
                        r().createElement('div', { className: oa }, ia.notFound()),
                        r().createElement(u.u5, { size: u.qE.medium, onClick: e }, ia.backToList()),
                    );
            var da = a(9900),
                ma = a(2344),
                ua = a(7030),
                _a = a(6373);
            const fa = {
                base: 'Info_base_43',
                infoIcon: 'Info_infoIcon_e4',
                infoIcon__friend: 'Info_infoIcon__friend_d4',
            };
            let va;
            !(function (e) {
                (e.bestFriend = 'bestFriend'), (e.friend = 'friend');
            })(va || (va = {}));
            const ga = R.strings.ny.friends.tooltips.commonInfo,
                pa = (e) => {
                    switch (e) {
                        case va.friend:
                            return ga.friends();
                        case va.bestFriend:
                            return ga.bestFriends();
                        default:
                            return console.error('Unknown infoType for tooltip text', e), '';
                    }
                },
                ba = ({ infoType: e }) =>
                    r().createElement(
                        _a.i,
                        { body: pa(e) },
                        r().createElement('div', {
                            className: l()(fa.infoIcon, fa[`infoIcon__${e}`]),
                            lang: R.strings.settings.LANGUAGE_CODE(),
                        }),
                    ),
                Ea = 'BestFriendsHeader_base_03',
                Na = 'BestFriendsHeader_title_01',
                ha = 'BestFriendsHeader_counter_16',
                ya = 'BestFriendsHeader_currentCount_bf',
                Fa = ({ count: e, max: t }) =>
                    r().createElement(
                        'div',
                        { className: Ea },
                        r().createElement(te.z, {
                            text: R.strings.ny.friends.header.best(),
                            classMix: Na,
                            binding: {
                                counter: r().createElement(te.z, {
                                    text: R.strings.ny.friends.header.bestCounter(),
                                    classMix: ha,
                                    binding: {
                                        total: r().createElement('div', null, t),
                                        current: r().createElement('div', { className: ya }, e),
                                    },
                                }),
                                infoIcon: r().createElement(ba, { infoType: va.bestFriend }),
                            },
                        }),
                    );
            a(3368);
            const Ca = {
                    base: 'Input_base_43',
                    placeholder: 'Input_placeholder_69',
                    'base__preset-normal': 'Input_base__preset-normal_35',
                    valueText: 'Input_valueText_15',
                    placeholderText: 'Input_placeholderText_f7',
                    value: 'Input_value_ad',
                    input: 'Input_input_13',
                    base__hasText: 'Input_base__hasText_04',
                    base__withIcon: 'Input_base__withIcon_fc',
                    icon: 'Input_icon_23',
                    icon__interactive: 'Input_icon__interactive_44',
                    icon__clear: 'Input_icon__clear_3e',
                    icon__search: 'Input_icon__search_57',
                    slideInFadeIn: 'Input_slideInFadeIn_0f',
                    fadeOut: 'Input_fadeOut_89',
                    fadeIn: 'Input_fadeIn_5b',
                    fadeInWithScale: 'Input_fadeInWithScale_0a',
                    slideUp: 'Input_slideUp_45',
                    scale: 'Input_scale_7b',
                    spin: 'Input_spin_80',
                    blink: 'Input_blink_a9',
                    slideInNotification: 'Input_slideInNotification_58',
                },
                Sa = [
                    'className',
                    'classNames',
                    'placeholder',
                    'icon',
                    'onIconClick',
                    'onIconHover',
                    'value',
                    'onChange',
                    'onBlur',
                    'onFocus',
                ];
            function Ia() {
                return (
                    (Ia = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    Ia.apply(null, arguments)
                );
            }
            var xa;
            !(function (e) {
                (e.Search = 'search'), (e.Clear = 'clear');
            })(xa || (xa = {}));
            const Ba = (e) => {
                let t = e.className,
                    a = e.classNames,
                    s = e.placeholder,
                    o = e.icon,
                    i = e.onIconClick,
                    c = e.onIconHover,
                    d = e.value,
                    m = e.onChange,
                    u = e.onBlur,
                    _ = e.onFocus,
                    f = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, Sa);
                const v = (0, n.useState)(!1),
                    g = v[0],
                    p = v[1],
                    b = (0, n.useRef)(null),
                    E = (0, n.useRef)(null),
                    N = k.Z.isWeak() ? 'low' : 'normal',
                    h = (0, n.useCallback)((e) => {
                        if (!b.current) return;
                        0 === e.length
                            ? b.current.classList.remove(Ca.base__hasText)
                            : b.current.classList.add(Ca.base__hasText);
                    }, []);
                (0, n.useLayoutEffect)(() => {
                    'string' == typeof d && h(d);
                }, [h, d]);
                return r().createElement(
                    'div',
                    {
                        className: l()(
                            Ca.base,
                            Ca[`base__preset-${N}`],
                            o && Ca.base__withIcon,
                            g && Ca.base__focused,
                            t,
                        ),
                        ref: b,
                    },
                    r().createElement(
                        'input',
                        Ia({}, f, {
                            value: d,
                            onChange: (e) => {
                                h(e.target.value), null == m || m(e);
                            },
                            type: 'text',
                            ref: E,
                            className: l()(Ca.input, null == a ? void 0 : a.input),
                            onFocus: (e) => {
                                p(!0);
                                const t = e.target.value.length;
                                e.target.setSelectionRange(t, t), null == _ || _(e);
                            },
                            onBlur: (e) => {
                                p(!1), null == u || u(e);
                            },
                        }),
                    ),
                    s &&
                        r().createElement(
                            'div',
                            { className: l()(Ca.placeholder, null == a ? void 0 : a.placeholder) },
                            s,
                        ),
                    o &&
                        r().createElement(
                            _a.i,
                            { body: R.strings.ny.friends.tooltip.$dyn(o) },
                            r().createElement('div', {
                                onClick: i,
                                onMouseEnter: c,
                                className: l()(
                                    Ca.icon,
                                    Ca[`icon__${o}`],
                                    i && Ca.icon__interactive,
                                    null == a ? void 0 : a.icon,
                                ),
                            }),
                        ),
                );
            };
            Ba.Icon = xa;
            const ka = 'SearchInput_base_f5',
                wa = (0, y.Pi)(function () {
                    const e = Q(),
                        t = e.model,
                        a = e.controls,
                        s = t.search.get(),
                        l = (0, n.useState)(!1),
                        o = l[0],
                        i = l[1],
                        c = 0 === s.length;
                    return r().createElement(
                        'div',
                        { className: ka },
                        r().createElement(Ba, {
                            icon: c ? Ba.Icon.Search : Ba.Icon.Clear,
                            placeholder: R.strings.ny.friends.search.placeholder(),
                            value: s,
                            onIconClick: () => {
                                c || ((0, A.G)(R.sounds.cancelcloseno()), a.updateSearch(''));
                            },
                            onIconHover: () => {
                                c || (0, A.G)(R.sounds.highlight());
                            },
                            autoFocus: t.searchFocused.get(),
                            onChange: (e) => {
                                !1 === o &&
                                    0 === s.length &&
                                    1 === e.target.value.length &&
                                    (a.setBannerDisplayed(!0), i(!0)),
                                    a.updateSearch(e.target.value);
                            },
                            onFocus: () => {
                                a.setSearchFocus(!0);
                            },
                            onBlur: () => {
                                a.setSearchFocus(!1), i(!1);
                            },
                        }),
                    );
                }),
                Ra = 'FriendsHeader_base_33',
                Oa = 'FriendsHeader_friendWrapper_f7',
                Pa = 'FriendsHeader_title_a3',
                Da = 'FriendsHeader_currentCount_a0',
                La = ({ friendsCount: e }) =>
                    r().createElement(
                        'div',
                        { className: Ra },
                        r().createElement(
                            'div',
                            { className: Oa },
                            r().createElement(te.z, {
                                classMix: Pa,
                                text: R.strings.ny.friends.header.friends(),
                                binding: { amount: r().createElement('div', { className: Da }, e) },
                            }),
                            r().createElement(ba, { infoType: va.friend }),
                        ),
                        r().createElement(wa, null),
                    ),
                Aa = 'SearchHeader_base_1c',
                Ha = 'SearchHeader_title_dc',
                Ta = 'SearchHeader_currentCount_50',
                Ma = ({ foundFriendCount: e }) =>
                    r().createElement(
                        'div',
                        { className: Aa },
                        r().createElement(te.z, {
                            classMix: Ha,
                            text: R.strings.ny.friends.search.found(),
                            binding: { count: r().createElement('div', { className: Ta }, e) },
                        }),
                        r().createElement(wa, null),
                    ),
                Wa = { base: 'ScrollHeader_base_6e', transition: 'ScrollHeader_transition_3b' },
                ja = { [U.None]: 0, [U.BestFriends]: 1, [U.Friends]: 2, [U.Search]: 3 },
                $a = (0, y.Pi)(function ({ state: e, animationStyle: t, className: a }) {
                    var n;
                    const s = Q().model,
                        o = null != (n = (0, ma.D9)(e)) ? n : e,
                        i = 'inverted' === t ? -1 : 1,
                        c = ja[e] > ja[o] ? 150 : -150,
                        d = (0, ua.useTransition)(e, {
                            config: { duration: 200 },
                            from: { opacity: 0, y: c * i },
                            enter: { opacity: 1, y: 0 },
                            immediate: 'none' === t,
                            leave: () => ({ opacity: 0, y: 'default' === t ? 0 : c * i * -1 }),
                            expires: !1,
                        }),
                        m = s.computes.bestFriendsCount(),
                        u = s.totalFriendsCount.get() - m,
                        _ = s.foundFriendIds.get().length;
                    return r().createElement(
                        'div',
                        { className: l()(Wa.base, Wa[`base__${e}`], a) },
                        d((e, t) =>
                            r().createElement(
                                ua.animated.div,
                                {
                                    style: Object.assign({}, e, {
                                        pointerEvents: e.opacity.to((e) => (1 === e ? 'auto' : 'none')),
                                    }),
                                    className: Wa.transition,
                                },
                                (() => {
                                    switch (t) {
                                        case U.BestFriends:
                                            return r().createElement(Fa, {
                                                count: m,
                                                max: s.maxBestFriendsCount.get(),
                                            });
                                        case U.Friends:
                                            return r().createElement(La, { friendsCount: u });
                                        case U.Search:
                                            return r().createElement(Ma, { foundFriendCount: _ });
                                        case U.None:
                                        default:
                                            return null;
                                    }
                                })(),
                            ),
                        ),
                    );
                });
            function Ua() {
                return (
                    (Ua = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    Ua.apply(null, arguments)
                );
            }
            const Ga = (0, y.Pi)(function (e) {
                    const t = Q().model,
                        a = r().useState(() => [t.headerState.get(), 'none']),
                        n = a[0],
                        s = n[0],
                        l = n[1],
                        o = a[1];
                    return (
                        (0, da.b)(() =>
                            (0, T.U5)(
                                () => t.headerState.get(),
                                (e) => {
                                    const a = t.scrollDirection.get() === G.None;
                                    o([e, a ? 'none' : 'inverted']);
                                },
                            ),
                        ),
                        r().createElement($a, Ua({}, e, { state: s !== e.state ? e.state : U.None, animationStyle: l }))
                    );
                }),
                za = 'FriendList_base_53',
                qa = 'FriendList_card_cf',
                Za = 'FriendList_friendsHeader_c2',
                Va = (0, y.Pi)(function ({ api: e, baseRef: t, type: a }) {
                    const s = Q(),
                        l = s.model,
                        o = s.controls,
                        i = l.computes,
                        c = 0 === l.bestFriends.get().length,
                        d = 'friends' === a ? i.friendIds() : l.foundFriendIds.get();
                    return (
                        (0, n.useEffect)(() =>
                            (0, Kt.v)(() => {
                                e.recalculateContent();
                            }),
                        ),
                        r().createElement(
                            'div',
                            { ref: t },
                            !c &&
                                r().createElement(
                                    'div',
                                    { className: Za },
                                    r().createElement(Ga, { state: 'friends' === a ? U.Friends : U.Search }),
                                ),
                            c && r().createElement(sa, null),
                            'search' === a && 0 === d.length
                                ? r().createElement(ca, { onBack: o.resetSearch })
                                : r().createElement(
                                      'div',
                                      { className: za },
                                      d.map((e) =>
                                          r().createElement(
                                              'div',
                                              { key: e, className: qa },
                                              r().createElement(Vt, { id: e }),
                                          ),
                                      ),
                                  ),
                        )
                    );
                });
            function Ja(e, t, a) {
                const r = (0, n.useRef)(null),
                    s = (0, n.useRef)(null),
                    l = (0, n.useRef)(null),
                    o = (0, n.useRef)(0),
                    i = (function () {
                        const e = (0, n.useRef)(h.ZT),
                            t = () => {
                                e.current(), (e.current = h.ZT);
                            };
                        return (
                            (0, da.k)(t),
                            (0, n.useMemo)(
                                () => ({
                                    run: (a) => {
                                        t(), (e.current = (0, Kt.v)(a));
                                    },
                                    clear: t,
                                    get isRunning() {
                                        return e.current !== h.ZT;
                                    },
                                }),
                                [],
                            )
                        );
                    })();
                return (
                    (0, da.b)(() => {
                        const n = (e, t, a) => {
                                const n = e.getBoundingClientRect();
                                return (t !== G.Up ? n.y : n.y + n.height) < a;
                            },
                            c = (e, t) => {
                                const a = s.current,
                                    o = r.current,
                                    i = l.current;
                                return !a || (o && !n(a, e, t))
                                    ? !i || (o && !n(i, e, t))
                                        ? o
                                            ? U.BestFriends
                                            : U.None
                                        : U.Search
                                    : U.Friends;
                            };
                        function d(t) {
                            if (!e.wrapperRef.current) return;
                            const n = e.wrapperRef.current.getBoundingClientRect().y;
                            a.updateHeaderState(c(t, n), t);
                        }
                        function m() {
                            const t = e.animationScroll.scrollPosition.get(),
                                a = o.current - t;
                            0 !== a && d(a < 0 ? G.Down : G.Up), (o.current = t);
                        }
                        function u() {
                            d(G.Up);
                        }
                        const _ = (0, T.U5)(
                            () => t.computes.screenState(),
                            () => {
                                i.run(() => d(G.None));
                            },
                        );
                        return (
                            e.events.on('change', m),
                            e.events.on('recalculateContent', u),
                            () => {
                                _(), e.events.off('change', m), e.events.off('recalculateContent', u);
                            }
                        );
                    }),
                    { bestFriendsRef: r, friendsRef: s, searchRef: l }
                );
            }
            var Ya = a(1362);
            const Qa = 'FriendScroll_base_9f',
                Ka = 'FriendScroll_scrollContent_7e',
                Xa = 'FriendScroll_contentWrapper_d0',
                en = 'FriendScroll_lip_89',
                tn = 'FriendScroll_lip__foreground_7c',
                an = 'FriendScroll_lip__background_79',
                nn = 'FriendScroll_base__hiddenLips_b5',
                rn = 'FriendScroll_base__additionalEffects_f9',
                sn = 'FriendScroll_area_85',
                ln = 'FriendScroll_content_c8',
                on = 'FriendScroll_bar_31',
                cn = 'FriendScroll_banner_17',
                dn = (0, y.Pi)(() => {
                    const e = ve.kB.useVerticalApi(),
                        t = Q(),
                        a = t.model,
                        n = t.controls,
                        s = a.computes,
                        o = Ja(e, a, n),
                        i = o.bestFriendsRef,
                        c = o.friendsRef,
                        d = o.searchRef,
                        m = (0, Ya.z)(e);
                    return r().createElement(
                        'div',
                        { className: l()(Qa, m && nn, !k.Z.isWeak() && rn) },
                        r().createElement('div', { className: l()(en, tn) }, r().createElement(Fe.Foreground, null)),
                        r().createElement('div', { className: l()(en, an) }, r().createElement(Fe.Background, null)),
                        r().createElement(
                            ve.kB.Vertical,
                            {
                                api: e,
                                barClassNames: { base: on },
                                scrollClassNames: { content: Ka },
                                areaClassName: sn,
                            },
                            r().createElement(
                                'div',
                                { className: Xa },
                                r().createElement(
                                    'div',
                                    { className: ln },
                                    r().createElement(Qt, { baseRef: i }),
                                    s.screenState() === $.Default
                                        ? r().createElement(Va, { api: e, key: 'friends', type: 'friends', baseRef: c })
                                        : r().createElement(Va, { api: e, key: 'search', type: 'search', baseRef: d }),
                                ),
                            ),
                        ),
                        r().createElement(we, { className: cn }),
                    );
                }),
                mn = 'FriendsScreen_base_f6',
                un = 'FriendsScreen_header_4e',
                _n = 'FriendsScreen_scrollHeader_a8';
            function fn() {
                return (
                    (fn = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    fn.apply(null, arguments)
                );
            }
            const vn = (0, y.Pi)(function (e) {
                    const t = Q().model,
                        a = r().useState(() => [t.headerState.get(), 'default']),
                        n = a[0],
                        s = n[0],
                        l = n[1],
                        o = a[1];
                    return (
                        (0, da.b)(() =>
                            (0, T.U5)(
                                () => t.headerState.get(),
                                (e) => {
                                    const a = t.scrollDirection.get() === G.None;
                                    o([e, a ? 'none' : 'default']);
                                },
                            ),
                        ),
                        r().createElement($a, fn({}, e, { state: s, animationStyle: l }))
                    );
                }),
                gn = (0, y.Pi)(function () {
                    return r().createElement(
                        'div',
                        { className: mn },
                        r().createElement('div', { className: un }, R.strings.ny.friends.title()),
                        r().createElement('div', { className: _n }, r().createElement(vn, null)),
                        r().createElement(dn, null),
                    );
                });
            function pn() {
                return (
                    (pn = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    pn.apply(null, arguments)
                );
            }
            const bn = (0, y.Pi)(() => {
                    const e = Q(),
                        t = e.model,
                        a = e.controls,
                        n = e.mode,
                        s = t.computes.hasFriends(),
                        o = t.loadingState.get(),
                        i = k.Z.isWeak() ? 'low' : 'normal';
                    return r().createElement(
                        'div',
                        { className: l()(fe.base, fe[`base__preset-${i}`]) },
                        (() => {
                            switch (o) {
                                case P.Failure:
                                    return r().createElement(B, {
                                        className: fe.failure,
                                        message: R.strings.ny.friends.failure.message(),
                                        title: R.strings.ny.friends.failure.title(),
                                    });
                                case P.Pending:
                                    return r().createElement(N, {
                                        message: R.strings.ny.friends.loading.message(),
                                        overlayAlpha: '0',
                                        errorBtnClickHandler: h.ZT,
                                    });
                                default:
                                    return s
                                        ? r().createElement(gn, null)
                                        : r().createElement(_e, {
                                              maxCollectAmount:
                                                  t.possibleCollectAmount.get() * t.maxBestFriendsCount.get(),
                                          });
                            }
                        })(),
                        r().createElement(
                            'div',
                            { className: fe.resourceBox },
                            r().createElement(w.G, pn({}, a.getWidgetResourceBoxProps(), { mode: n })),
                        ),
                    );
                }),
                En = () =>
                    r().createElement(Y, { options: { context: 'model.friendsModel' } }, r().createElement(bn, null));
        },
        4827: (e, t, a) => {
            'use strict';
            let n;
            a.d(t, { B: () => n }),
                (function (e) {
                    (e.China = 'CN'), (e.Ru = 'RU');
                })(n || (n = {}));
        },
        5032: (e, t, a) => {
            'use strict';
            a.d(t, { hE: () => _, ve: () => m, r9: () => u });
            var n = a(6483),
                r = a.n(n),
                s = a(3138),
                l = a(6179),
                o = a.n(l);
            const i = {
                    base: 'CardDecorator_base_13',
                    base__empty: 'CardDecorator_base__empty_08',
                    stylesWrapper: 'CardDecorator_stylesWrapper_79',
                    stylesWrapper__hintAnimation: 'CardDecorator_stylesWrapper__hintAnimation_74',
                    blink: 'CardDecorator_blink_46',
                    stylesWrapper__withoutAnimation: 'CardDecorator_stylesWrapper__withoutAnimation_a7',
                    none: 'CardDecorator_none_87',
                    backgroundBox: 'CardDecorator_backgroundBox_95',
                    background: 'CardDecorator_background_e7',
                    background__top: 'CardDecorator_background__top_25',
                    base__hover: 'CardDecorator_base__hover_93',
                    base__disabled: 'CardDecorator_base__disabled_7b',
                    background__bottom: 'CardDecorator_background__bottom_18',
                    border: 'CardDecorator_border_0f',
                    shadow: 'CardDecorator_shadow_5a',
                    glow: 'CardDecorator_glow_d6',
                    glow__top: 'CardDecorator_glow__top_57',
                    glow__left: 'CardDecorator_glow__left_14',
                    noise: 'CardDecorator_noise_ac',
                    decoration: 'CardDecorator_decoration_44',
                    content: 'CardDecorator_content_5a',
                },
                c = ['state', 'hasDecoration', 'glowType', 'children', 'isHovered', 'withHintAnimation', 'className'];
            function d() {
                return (
                    (d = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    d.apply(null, arguments)
                );
            }
            let m, u;
            !(function (e) {
                (e.Default = 'default'), (e.Empty = 'empty'), (e.Disabled = 'disabled');
            })(m || (m = {})),
                (function (e) {
                    (e.Top = 'top'), (e.Left = 'left');
                })(u || (u = {}));
            const _ = (e) => {
                let t = e.state,
                    a = void 0 === t ? m.Default : t,
                    n = e.hasDecoration,
                    l = void 0 === n || n,
                    _ = e.glowType,
                    f = void 0 === _ ? u.Top : _,
                    v = e.children,
                    g = e.isHovered,
                    p = e.withHintAnimation,
                    b = e.className,
                    E = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, c);
                const N = s.O.client.graphicsQuality.isLow();
                return o().createElement(
                    'div',
                    d({ className: r()(i.base, i[`base__${a}`], g && i.base__hover, b) }, E),
                    a !== m.Empty &&
                        o().createElement(
                            'div',
                            {
                                className: r()(
                                    i.stylesWrapper,
                                    p && i.stylesWrapper__hintAnimation,
                                    N && i.stylesWrapper__withoutAnimation,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: i.backgroundBox },
                                o().createElement('div', { className: r()(i.background, i.background__top) }),
                                o().createElement('div', { className: r()(i.background, i.background__bottom) }),
                            ),
                            o().createElement('div', { className: i.border }),
                            o().createElement('div', { className: i.noise }),
                            o().createElement('div', { className: i.shadow }),
                            a === m.Default && o().createElement('div', { className: r()(i.glow, i[`glow__${f}`]) }),
                            l && o().createElement('div', { className: i.decoration }),
                        ),
                    o().createElement('div', { className: i.content }, v),
                );
            };
        },
        889: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => d });
            var n = a(6483),
                r = a.n(n),
                s = a(6179),
                l = a.n(s);
            const o = 'CardFooter_base_56',
                i = 'CardFooter_glow_61',
                c = 'CardFooter_content_52',
                d = ({ children: e, hasHover: t = !1, className: a }) =>
                    l().createElement(
                        'div',
                        { className: r()(o, a) },
                        t && l().createElement('div', { className: i }),
                        l().createElement('div', { className: c }, e),
                    );
        },
    },
]);
