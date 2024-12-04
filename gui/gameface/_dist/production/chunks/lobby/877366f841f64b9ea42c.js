'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [5785],
    {
        5785: (e, t, n) => {
            n.r(t), n.d(t, { default: () => g });
            var a = n(6179),
                l = n.n(a),
                o = n(122),
                c = n(7522),
                s = n(3403),
                r = n(7030),
                u = n(545),
                i = n(2608);
            const d = (0, a.lazy)(() => Promise.all([n.e(7506), n.e(2714)]).then(n.bind(n, 2714))),
                p = (0, a.lazy)(() => n.e(10).then(n.bind(n, 10))),
                m = (0, a.lazy)(() =>
                    Promise.all([n.e(7506), n.e(1521), n.e(8584), n.e(3820), n.e(3522)]).then(n.bind(n, 8521)),
                ),
                b = (0, a.lazy)(() => Promise.all([n.e(7506), n.e(1521), n.e(8584), n.e(1193)]).then(n.bind(n, 1193))),
                v = (0, a.lazy)(() =>
                    Promise.all([n.e(8360), n.e(7506), n.e(1521), n.e(4727), n.e(2736), n.e(3138)]).then(
                        n.bind(n, 412),
                    ),
                ),
                S = {
                    [i.X.Tournament]: m,
                    [i.X.Completed]: d,
                    [i.X.Headquarters]: p,
                    [i.X.GuestA]: b,
                    [i.X.GuestC]: b,
                    [i.X.GuestD]: v,
                },
                f = l().memo(function ({ viewState: e }) {
                    const t = S[e];
                    return t
                        ? l().createElement(a.Suspense, { fallback: null }, l().createElement(t, null))
                        : (console.error('Unknown view state for render', e), null);
                });
            var M = n(6628);
            const C = 'App_base_b5',
                k = 'App_sceneWrapper_a1',
                y = 'App_content_6e',
                w = (0, s.Pi)(() => {
                    const e = (0, M.t)(),
                        t = e.model,
                        n = e.controls,
                        s = t.root.get(),
                        i = s.viewState,
                        d = s.isMoveSpaceEnable,
                        p = s.isTabSwitching,
                        m = (0, r.useSpring)(() => ({
                            config: { duration: 300, easing: c.Z.easeInOutCubic },
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        })),
                        b = m[0],
                        v = m[1];
                    return (
                        (0, a.useEffect)(() => {
                            if (p)
                                return (
                                    v.start({ opacity: 0 }),
                                    (0, o.F)(() => {
                                        n.updateContentModel();
                                    }, 300)
                                );
                            v.start({ opacity: 1 });
                        }, [v, n, p]),
                        l().createElement(
                            'div',
                            { className: C },
                            l().createElement(
                                'div',
                                { className: k },
                                l().createElement(u.w, {
                                    moveSpace: n.onMoveSpace,
                                    onMouseOver3dScene: n.onMouseOver3dScene,
                                    isMoveSpaceEnabled: d,
                                }),
                            ),
                            l().createElement(
                                r.animated.div,
                                { className: y, style: b },
                                l().createElement(f, { viewState: i }),
                            ),
                        )
                    );
                }),
                E = { context: 'model.challengeModel' },
                g = (0, a.memo)(() => l().createElement(M.k, { options: E }, l().createElement(w, null)));
        },
        6628: (e, t, n) => {
            n.d(t, { k: () => l, t: () => o });
            const a = (0, n(3215).q)()(
                    ({ observableModel: e }) => ({
                        root: e.object(),
                        guestDCustomization: e.object('guestDCustomizationModel'),
                    }),
                    ({ externalModel: e }) => ({
                        onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                        onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
                        updateContentModel: e.createCallbackNoArgs('onUpdateContentModel'),
                    }),
                ),
                l = a[0],
                o = a[1];
        },
        545: (e, t, n) => {
            n.d(t, { w: () => i });
            var a = n(6483),
                l = n.n(a),
                o = n(6179),
                c = n.n(o);
            const s = 'SceneWrapper_base_85',
                r = 'SceneWrapper_base__down_fc',
                u = 'SceneWrapper_base__moveSpaceDisabled_67',
                i = ({
                    children: e,
                    moveSpace: t,
                    onMouseOver3dScene: n,
                    onDragStateChange: a,
                    isMoveSpaceEnabled: i = !0,
                }) => {
                    const d = (0, o.useState)(!1),
                        p = d[0],
                        m = d[1],
                        b = (0, o.useState)({ x: 0, y: 0 }),
                        v = b[0],
                        S = b[1],
                        f = (0, o.createRef)(),
                        M = (0, o.useCallback)(() => {
                            m(!1), null == a || a(!1);
                        }, [a]);
                    (0, o.useEffect)(
                        () => (window.addEventListener('mouseup', M), () => window.removeEventListener('mouseup', M)),
                        [M],
                    );
                    const C = (0, o.useCallback)(
                            (e) => {
                                if (!f.current) return;
                                const t = f.current.getBoundingClientRect(),
                                    n = t.width,
                                    a = t.height;
                                return !(
                                    0 === e.clientX ||
                                    0 === e.clientY ||
                                    e.clientX >= n - 1 ||
                                    e.clientY >= a - 1
                                );
                            },
                            [f],
                        ),
                        k = (0, o.useCallback)(
                            (e) => {
                                e.preventDefault(),
                                    0 === e.button &&
                                        C(e) &&
                                        i &&
                                        (m(!0), null == a || a(!0), S({ x: e.clientX, y: e.clientY }));
                            },
                            [C, i, a],
                        ),
                        y = (0, o.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), p)) {
                                    if (!C(e)) return;
                                    const n = e.clientX !== v.x ? e.clientX - v.x : 0,
                                        a = e.clientY !== v.y ? e.clientY - v.y : 0;
                                    S({ x: e.clientX, y: e.clientY }), t({ dx: n, dy: a, dz: 0 });
                                }
                            },
                            [C, p, v.x, v.y, t],
                        ),
                        w = (0, o.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), !i || !C(e))) return;
                                const n = e.deltaY < 0;
                                t({ dx: 0, dy: 0, dz: n ? -600 : 600 });
                            },
                            [C, i, t],
                        ),
                        E = (0, o.useCallback)(() => {
                            m(!1), null == a || a(!1);
                        }, [a]),
                        g = (0, o.useCallback)(
                            (e) => {
                                0 === e.buttons && p && (m(!1), null == a || a(!1)), n({ isOver3dScene: !0 });
                            },
                            [a, n, p],
                        ),
                        h = (0, o.useCallback)(() => {
                            n({ isOver3dScene: !1 });
                        }, [n]);
                    return c().createElement(
                        'div',
                        {
                            ref: f,
                            className: l()(s, p && r, !i && u),
                            onMouseDown: k,
                            onMouseMove: y,
                            onMouseUp: E,
                            onWheel: w,
                            onMouseOver: g,
                            onMouseOut: h,
                        },
                        e,
                    );
                };
        },
    },
]);
