'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [7438],
    {
        2607: (e, t, s) => {
            s.r(t), s.d(t, { default: () => se });
            var n = s(6179),
                o = s.n(n),
                a = s(6483),
                r = s.n(a);
            let c;
            !(function (e) {
                (e.Available = 'Available'),
                    (e.Timer = 'Timer'),
                    (e.NotFavorite = 'NotFavorite'),
                    (e.Limit = 'Limit'),
                    (e.LimitTimer = 'LimitTimer'),
                    (e.Finished = 'Finished'),
                    (e.FinishedHidden = 'FinishedHidden');
            })(c || (c = {}));
            var i = s(3403),
                l = s(5678),
                d = s(122),
                u = s(8526),
                m = s(545),
                _ = s(3614),
                b = s(9900),
                v = s(8284),
                F = s(6339),
                p = s(6844),
                g = s(3215),
                N = s(3946);
            const E = [p.k4.Fir, p.k4.Fair, p.k4.Installation],
                x = (0, g.q)()(
                    ({ observableModel: e }) => {
                        const t = { root: e.object(), hangarName: e.object('hangarName') },
                            s = { root: e.object('resourcesViewModel') };
                        return Object.assign({}, t, {
                            resourcesView: Object.assign({}, s, {
                                computes: { isTimer: (0, N.Om)(() => s.root.get().state === c.Timer) },
                            }),
                            computes: {
                                isResourcesTab: (0, N.Om)(() => t.root.get().tabName === p.k4.Resources),
                                isSlotsVisible: (0, N.Om)(() => E.includes(t.root.get().tabName)),
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                        onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
                        collect: e.createCallbackNoArgs('resourcesViewModel.onCollect'),
                        setFavoriteFriend: e.createCallbackNoArgs('resourcesViewModel.onSetFavoriteFriend'),
                        goToFriends: e.createCallbackNoArgs('resourcesViewModel.onGoToFriends'),
                        hideFinishedStatus: e.createCallbackNoArgs('resourcesViewModel.onHideFinishedStatus'),
                    }),
                ),
                S = x[0],
                h = x[1];
            var f = s(3457),
                M = s(3604),
                C = s(3032),
                T = s(944),
                k = s(406);
            const w = 'Status_base_62',
                A = 'Status_textWrapper_f4',
                y = 'Status_text_41',
                L = 'Status_countdownTime_44',
                O = 'Status_countdownIcon_81',
                H = 'Status_note_f0',
                V = R.strings.ny.resourceCollector.status,
                W = ({ collectState: e, cooldown: t, collectAmount: s }) =>
                    o().createElement(
                        'div',
                        { className: w },
                        o().createElement(
                            'div',
                            { className: A },
                            o().createElement(k.B, {
                                text: V.$dyn(e),
                                binding: {
                                    icon: o().createElement('div', { className: O }),
                                    timer: o().createElement(T.Z, {
                                        duration: t,
                                        icon: C.ls.None,
                                        style: C.o_.Description,
                                        classNames: { text: L },
                                    }),
                                    collectAmount: s,
                                },
                                className: y,
                            }),
                        ),
                        e === c.Available &&
                            o().createElement(k.B, { text: V.note(), binding: { collectAmount: s }, className: H }),
                    ),
                Y = {
                    base: 'FriendResources_base_da',
                    base__stateFinishedHidden: 'FriendResources_base__stateFinishedHidden_fd',
                    inner: 'FriendResources_inner_23',
                    base__stateLimitTimer: 'FriendResources_base__stateLimitTimer_ff',
                    base__stateLimit: 'FriendResources_base__stateLimit_c4',
                    base__stateNotFavorite: 'FriendResources_base__stateNotFavorite_18',
                    icon: 'FriendResources_icon_f5',
                    icon__star: 'FriendResources_icon__star_5d',
                    buttonHolder: 'FriendResources_buttonHolder_ff',
                    button: 'FriendResources_button_02',
                    text: 'FriendResources_text_8e',
                },
                B = R.strings.ny.resourceCollector.button,
                D = (0, i.Pi)(() => {
                    const e = h(),
                        t = e.model,
                        s = e.controls,
                        n = t.resourcesView.root.get(),
                        a = n.state,
                        i = n.cooldown,
                        l = n.collectAmount,
                        d = (() => {
                            switch (a) {
                                case c.Available:
                                case c.Timer:
                                    return { onClickHandler: s.collect, text: B.collect() };
                                case c.NotFavorite:
                                    return {
                                        onClickHandler: s.setFavoriteFriend,
                                        icon: 'star',
                                        text: B.setFavoriteFriend(),
                                    };
                                case c.LimitTimer:
                                case c.Limit:
                                    return { onClickHandler: s.goToFriends, text: B.toFriends() };
                                default:
                                    return null;
                            }
                        })(),
                        u = t.resourcesView.computes.isTimer();
                    return o().createElement(
                        'div',
                        { className: r()(Y.base, Y[`base__state${a}`]) },
                        o().createElement(
                            'div',
                            { className: Y.inner },
                            a === c.Finished || a === c.FinishedHidden
                                ? o().createElement(M.x, {
                                      text: R.strings.ny.resourceCollector.status.Finished(),
                                      onClose: s.hideFinishedStatus,
                                  })
                                : d &&
                                      o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(W, { collectState: a, cooldown: i, collectAmount: l }),
                                          o().createElement(
                                              'div',
                                              { className: Y.buttonHolder },
                                              o().createElement(
                                                  f.u5,
                                                  {
                                                      type: f.L$.primary,
                                                      disabled: u,
                                                      onClick: d.onClickHandler,
                                                      mixClass: Y.button,
                                                  },
                                                  d.icon &&
                                                      o().createElement('div', {
                                                          className: r()(Y.icon, Y[`icon__${d.icon}`]),
                                                      }),
                                                  o().createElement('div', { className: Y.text }, d.text),
                                              ),
                                          ),
                                      ),
                        ),
                    );
                });
            var j = s(1132);
            const G = 'WelcomeText_base_c8',
                X = (0, i.Pi)(({ className: e }) => {
                    const t = h().model,
                        s = t.root.get().friendName,
                        n = t.hangarName.get(),
                        a = n.title,
                        c = n.description,
                        i = `${(0, j.E)(c)} ${(0, j.Y)(a)}`;
                    return o().createElement(
                        'div',
                        { className: r()(G, e) },
                        o().createElement(k.B, {
                            text: R.strings.ny.friends.glade.welcomeText(),
                            binding: { hangarName: i, friendName: s },
                        }),
                    );
                }),
                Z = 'App_base_c7',
                $ = 'App_sceneWrapper_40',
                I = 'App_content_4f',
                P = 'App_resourceBox_7d',
                z = 'App_friendWelcomeText_08',
                q = 'App_friendWelcomeText__aboveSlot_d5',
                U = 'App_friendWelcomeText__hidden_ca',
                J = { widgetType: v.t.Glade, options: { context: 'model.friendGladeModel.resourceBoxModel' } },
                K = (0, i.Pi)(() => {
                    const e = h(),
                        t = e.model,
                        s = e.controls,
                        a = t.computes.isResourcesTab(),
                        i = t.computes.isSlotsVisible(),
                        v = t.root.get().isFirstVisit,
                        p = t.resourcesView.root.get().state,
                        g = (0, n.useState)(!1),
                        N = g[0],
                        E = g[1];
                    return (
                        (0, u.I9)(s.goToFriends),
                        (0, b.b)(() => ((0, d.F)(() => E(!0), 1e3), (0, d.F)(() => E(!1), 4e3))),
                        o().createElement(
                            'div',
                            { className: Z },
                            o().createElement(
                                'div',
                                { className: $ },
                                o().createElement(m.w, {
                                    moveSpace: s.onMoveSpace,
                                    onMouseOver3dScene: s.onMouseOver3dScene,
                                }),
                            ),
                            a
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement(D, null),
                                      ![c.NotFavorite, c.Limit, c.LimitTimer].includes(p) &&
                                          o().createElement('div', { className: P }, o().createElement(F.G, J)),
                                  )
                                : o().createElement(
                                      'div',
                                      { className: I },
                                      v &&
                                          o().createElement(
                                              'div',
                                              { className: r()(z, !N && U, i && q) },
                                              o().createElement(X, null),
                                          ),
                                      i &&
                                          o().createElement(
                                              l.j,
                                              { options: { context: 'model.friendGladeModel.toySlotsBar' } },
                                              o().createElement(_.W, { isDisabled: !0 }),
                                          ),
                                  ),
                        )
                    );
                });
            var Q = s(4598),
                ee = s(1612);
            const te = {
                    getter: (e) =>
                        'resourcesViewModel' === e
                            ? { state: c.Available, cooldown: 100, collectAmount: 100 }
                            : { tabName: p.k4.Resources },
                    controls: () =>
                        (0, ee.h)({
                            onMoveSpace: Q.ZT,
                            onMouseOver3dScene: Q.ZT,
                            collect: Q.ZT,
                            setFavoriteFriend: Q.ZT,
                            goToFriends: Q.ZT,
                        }),
                },
                se = () =>
                    o().createElement(
                        S,
                        { options: { context: 'model.friendGladeModel' }, mode: 'real', mocks: te },
                        o().createElement(K, null),
                    );
        },
        3604: (e, t, s) => {
            s.d(t, { x: () => d });
            var n = s(514),
                o = s(6179),
                a = s.n(o),
                r = s(406);
            const c = 'FinishedMessage_base_3a',
                i = 'FinishedMessage_text_01',
                l = 'FinishedMessage_close_07',
                d = ({ onClose: e, text: t }) =>
                    a().createElement(
                        'div',
                        { className: c },
                        a().createElement(r.B, { className: i, text: t }),
                        a().createElement('div', {
                            className: l,
                            onClick: () => {
                                n.hY.sound(R.sounds.cancelcloseno()), e();
                            },
                            onMouseEnter: () => n.hY.sound(R.sounds.highlight()),
                        }),
                    );
        },
        545: (e, t, s) => {
            s.d(t, { w: () => d });
            var n = s(6483),
                o = s.n(n),
                a = s(6179),
                r = s.n(a);
            const c = 'SceneWrapper_base_85',
                i = 'SceneWrapper_base__down_fc',
                l = 'SceneWrapper_base__moveSpaceDisabled_67',
                d = ({
                    children: e,
                    moveSpace: t,
                    onMouseOver3dScene: s,
                    onDragStateChange: n,
                    isMoveSpaceEnabled: d = !0,
                }) => {
                    const u = (0, a.useState)(!1),
                        m = u[0],
                        _ = u[1],
                        b = (0, a.useState)({ x: 0, y: 0 }),
                        v = b[0],
                        F = b[1],
                        p = (0, a.createRef)(),
                        g = (0, a.useCallback)(() => {
                            _(!1), null == n || n(!1);
                        }, [n]);
                    (0, a.useEffect)(
                        () => (window.addEventListener('mouseup', g), () => window.removeEventListener('mouseup', g)),
                        [g],
                    );
                    const N = (0, a.useCallback)(
                            (e) => {
                                if (!p.current) return;
                                const t = p.current.getBoundingClientRect(),
                                    s = t.width,
                                    n = t.height;
                                return !(
                                    0 === e.clientX ||
                                    0 === e.clientY ||
                                    e.clientX >= s - 1 ||
                                    e.clientY >= n - 1
                                );
                            },
                            [p],
                        ),
                        E = (0, a.useCallback)(
                            (e) => {
                                e.preventDefault(),
                                    0 === e.button &&
                                        N(e) &&
                                        d &&
                                        (_(!0), null == n || n(!0), F({ x: e.clientX, y: e.clientY }));
                            },
                            [N, d, n],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), m)) {
                                    if (!N(e)) return;
                                    const s = e.clientX !== v.x ? e.clientX - v.x : 0,
                                        n = e.clientY !== v.y ? e.clientY - v.y : 0;
                                    F({ x: e.clientX, y: e.clientY }), t({ dx: s, dy: n, dz: 0 });
                                }
                            },
                            [N, m, v.x, v.y, t],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), !d || !N(e))) return;
                                const s = e.deltaY < 0;
                                t({ dx: 0, dy: 0, dz: s ? -600 : 600 });
                            },
                            [N, d, t],
                        ),
                        h = (0, a.useCallback)(() => {
                            _(!1), null == n || n(!1);
                        }, [n]),
                        f = (0, a.useCallback)(
                            (e) => {
                                0 === e.buttons && m && (_(!1), null == n || n(!1)), s({ isOver3dScene: !0 });
                            },
                            [n, s, m],
                        ),
                        M = (0, a.useCallback)(() => {
                            s({ isOver3dScene: !1 });
                        }, [s]);
                    return r().createElement(
                        'div',
                        {
                            ref: p,
                            className: o()(c, m && i, !d && l),
                            onMouseDown: E,
                            onMouseMove: x,
                            onMouseUp: h,
                            onWheel: S,
                            onMouseOver: f,
                            onMouseOut: M,
                        },
                        e,
                    );
                };
        },
    },
]);
