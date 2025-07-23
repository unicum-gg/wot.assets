'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [1628],
    {
        280: (e, t, a) => {
            a.d(t, { z: () => i });
            var n = a(6483),
                l = a.n(n),
                s = a(3649),
                c = a(6179),
                r = a.n(c),
                o = a(5287);
            const i = ({ binding: e, text: t = '', classMix: a, alignment: n = s.v2.left, formatWithBrackets: i }) => {
                if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                const m = i && e ? (0, s.WU)(t, e) : t;
                return r().createElement(
                    c.Fragment,
                    null,
                    m.split('\n').map((t, i) =>
                        r().createElement(
                            'div',
                            { className: l()(o.Z.base, a), key: `${t}-${i}` },
                            (0, s.Uw)(t, n, e).map((e, t) => r().createElement(c.Fragment, { key: `${t}-${e}` }, e)),
                        ),
                    ),
                );
            };
        },
        7515: (e, t, a) => {
            a.d(t, { u: () => n });
            const n = (e, t, a) => (a < e ? e : a > t ? t : a);
        },
        7015: (e, t, a) => {
            (a.r(t), a.d(t, { default: () => F }));
            var n = a(6179),
                l = a.n(n),
                s = a(3403),
                c = a(545);
            let r;
            !(function (e) {
                ((e.Tournament = 'tournament'), (e.GuestA = 'guest_A'), (e.GuestC = 'guest_cat'));
            })(r || (r = {}));
            var o = a(3215),
                i = a(3946),
                m = a(6808);
            const u = { challengeType: r.GuestA, currentQuantity: 0, totalQuantity: 0 },
                d = (0, o.q)()(
                    ({ observableModel: e }) => {
                        const t = { root: e.object(), challengeList: e.array('challengeList', []) },
                            a = (0, i.Om)(() => t.challengeList.get().length),
                            n = (0, i.Om)((e) => {
                                var a;
                                return null != (a = m.Wt.get(t.challengeList.get(), e)) ? a : u;
                            });
                        return Object.assign({}, t, { computes: { getChallengeListLength: a, getChallenge: n } });
                    },
                    ({ externalModel: e }) => ({
                        onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                        onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
                    }),
                ),
                g = d[0],
                v = d[1];
            var _ = a(406),
                h = a(6247),
                p = a(2308),
                C = a(156),
                b = a(6483),
                E = a.n(b);
            const f = 'GradientText_base_46',
                x = 'GradientText_text_37',
                S = 'GradientText_gradient_44',
                y = 'GradientText_gradient__titleTop_57',
                N = 'GradientText_gradient__titleBottom_a7',
                M = ({ text: e }) =>
                    l().createElement(
                        'div',
                        { className: f },
                        l().createElement('div', { className: x }, e),
                        l().createElement('div', { className: E()(S, y) }, e),
                        l().createElement('div', { className: E()(S, N) }, e),
                    ),
                k = 'ChallengeCard_base_e2',
                L = 'ChallengeCard_wrapper_95',
                w = 'ChallengeCard_questName_0b',
                O = 'ChallengeCard_values_d7',
                T = 'ChallengeCard_separator_f3',
                G = 'ChallengeCard_totalQuantity_33',
                W = 'ChallengeCard_progress_71',
                Y = R.strings.ny.friendsChallenge.challengeName,
                $ = (0, s.Pi)(({ challengeId: e }) => {
                    const t = v().model.computes.getChallenge(e),
                        a = t.challengeType,
                        n = t.currentQuantity,
                        s = t.totalQuantity;
                    return l().createElement(
                        'div',
                        { className: k },
                        l().createElement(
                            'div',
                            { className: L },
                            l().createElement('div', { className: w }, Y.$dyn(`${a}`)),
                            l().createElement(
                                'div',
                                { className: O },
                                l().createElement(M, { text: n.toString() }),
                                l().createElement(
                                    'div',
                                    { className: T },
                                    l().createElement(M, { text: R.strings.common.common.slash() }),
                                ),
                                l().createElement(
                                    'div',
                                    { className: G },
                                    l().createElement(M, { text: s.toString() }),
                                ),
                            ),
                        ),
                        l().createElement(
                            'div',
                            { className: W },
                            l().createElement(p.ko, { size: p.$u.Small, value: n, maxValue: s, theme: C.Yy }),
                        ),
                    );
                }),
                D = 'ChallengeList_base_3f',
                X = 'ChallengeList_title_73',
                A = 'ChallengeList_content_49',
                Q = (0, s.Pi)(() => {
                    const e = v().model;
                    return l().createElement(
                        'div',
                        { className: D },
                        l().createElement(
                            'div',
                            { className: X },
                            l().createElement(_.B, {
                                text: R.strings.ny.friendsChallenge.title(),
                                binding: { friendName: e.root.get().friendName },
                            }),
                        ),
                        l().createElement(
                            'div',
                            { className: A },
                            (0, h.K)(e.computes.getChallengeListLength(), (e) =>
                                l().createElement($, { key: e, challengeId: e }),
                            ),
                        ),
                    );
                }),
                z = { base: 'App_base_b0', challengeList: 'App_challengeList_3e' },
                B = (0, s.Pi)(() => {
                    const e = v(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get().isMoveSpaceEnable;
                    return t.computes.getChallengeListLength() > 0
                        ? l().createElement(
                              'div',
                              { className: z.base },
                              l().createElement(
                                  'div',
                                  { className: z.sceneWrapper },
                                  l().createElement(c.w, {
                                      moveSpace: a.onMoveSpace,
                                      onMouseOver3dScene: a.onMouseOver3dScene,
                                      isMoveSpaceEnabled: n,
                                  }),
                              ),
                              l().createElement('div', { className: z.challengeList }, l().createElement(Q, null)),
                          )
                        : null;
                }),
                F = () =>
                    l().createElement(
                        g,
                        { options: { context: 'model.friendChallengeModel' } },
                        l().createElement(B, null),
                    );
        },
        545: (e, t, a) => {
            a.d(t, { w: () => m });
            var n = a(6483),
                l = a.n(n),
                s = a(6179),
                c = a.n(s);
            const r = 'SceneWrapper_base_85',
                o = 'SceneWrapper_base__down_fc',
                i = 'SceneWrapper_base__moveSpaceDisabled_67',
                m = ({
                    children: e,
                    moveSpace: t,
                    onMouseOver3dScene: a,
                    onDragStateChange: n,
                    isMoveSpaceEnabled: m = !0,
                }) => {
                    const u = (0, s.useState)(!1),
                        d = u[0],
                        g = u[1],
                        v = (0, s.useState)({ x: 0, y: 0 }),
                        _ = v[0],
                        h = v[1],
                        p = (0, s.createRef)(),
                        C = (0, s.useCallback)(() => {
                            (g(!1), null == n || n(!1));
                        }, [n]);
                    (0, s.useEffect)(
                        () => (window.addEventListener('mouseup', C), () => window.removeEventListener('mouseup', C)),
                        [C],
                    );
                    const b = (0, s.useCallback)(
                            (e) => {
                                if (!p.current) return;
                                const t = p.current.getBoundingClientRect(),
                                    a = t.width,
                                    n = t.height;
                                return !(
                                    0 === e.clientX ||
                                    0 === e.clientY ||
                                    e.clientX >= a - 1 ||
                                    e.clientY >= n - 1
                                );
                            },
                            [p],
                        ),
                        E = (0, s.useCallback)(
                            (e) => {
                                (e.preventDefault(),
                                    0 === e.button &&
                                        b(e) &&
                                        m &&
                                        (g(!0), null == n || n(!0), h({ x: e.clientX, y: e.clientY })));
                            },
                            [b, m, n],
                        ),
                        f = (0, s.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), d)) {
                                    if (!b(e)) return;
                                    const a = e.clientX !== _.x ? e.clientX - _.x : 0,
                                        n = e.clientY !== _.y ? e.clientY - _.y : 0;
                                    (h({ x: e.clientX, y: e.clientY }), t({ dx: a, dy: n, dz: 0 }));
                                }
                            },
                            [b, d, _.x, _.y, t],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), !m || !b(e))) return;
                                const a = e.deltaY < 0;
                                t({ dx: 0, dy: 0, dz: a ? -600 : 600 });
                            },
                            [b, m, t],
                        ),
                        S = (0, s.useCallback)(() => {
                            (g(!1), null == n || n(!1));
                        }, [n]),
                        y = (0, s.useCallback)(
                            (e) => {
                                (0 === e.buttons && d && (g(!1), null == n || n(!1)), a({ isOver3dScene: !0 }));
                            },
                            [n, a, d],
                        ),
                        N = (0, s.useCallback)(() => {
                            a({ isOver3dScene: !1 });
                        }, [a]);
                    return c().createElement(
                        'div',
                        {
                            ref: p,
                            className: l()(r, d && o, !m && i),
                            onMouseDown: E,
                            onMouseMove: f,
                            onMouseUp: S,
                            onWheel: x,
                            onMouseOver: y,
                            onMouseOut: N,
                        },
                        e,
                    );
                };
        },
        5287: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { base: 'FormatText_base_d0' };
        },
    },
]);
