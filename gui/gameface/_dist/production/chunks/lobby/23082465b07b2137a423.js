'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [10],
    {
        280: (e, t, a) => {
            a.d(t, { z: () => i });
            var n = a(6483),
                l = a.n(n),
                s = a(3649),
                o = a(6179),
                c = a.n(o),
                r = a(5287);
            const i = ({ binding: e, text: t = '', classMix: a, alignment: n = s.v2.left, formatWithBrackets: i }) => {
                if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                const d = i && e ? (0, s.WU)(t, e) : t;
                return c().createElement(
                    o.Fragment,
                    null,
                    d.split('\n').map((t, i) =>
                        c().createElement(
                            'div',
                            { className: l()(r.Z.base, a), key: `${t}-${i}` },
                            (0, s.Uw)(t, n, e).map((e, t) => c().createElement(o.Fragment, { key: `${t}-${e}` }, e)),
                        ),
                    ),
                );
            };
        },
        9766: (e, t, a) => {
            a.d(t, { z: () => n.z });
            var n = a(280);
            a(8082);
        },
        8082: (e, t, a) => {
            a(3649);
        },
        10: (e, t, a) => {
            a.r(t), a.d(t, { default: () => j });
            var n = a(6179),
                l = a.n(n);
            const s = 'ChallengeOffice_base_fd';
            var o = a(6373),
                c = a(9480),
                r = a(3403);
            const i = (0, a(3215).q)()(
                    ({ observableModel: e }) => {
                        const t = {
                            root: e.object(),
                            actions: e.array('actions', []),
                            stories: e.array('stories', []),
                        };
                        return Object.assign({}, t);
                    },
                    ({ externalModel: e }) => ({
                        startAction: e.createCallback((e) => ({ actionType: e }), 'onStartAction'),
                        showStory: e.createCallback((e) => ({ storyBy: e }), 'onShowStory'),
                    }),
                ),
                d = i[0],
                m = i[1];
            var _ = a(6483),
                b = a.n(_),
                y = a(7727);
            const g = {
                base: 'Slot_base_25',
                base__wide: 'Slot_base__wide_8d',
                base__enabled: 'Slot_base__enabled_e6',
                content: 'Slot_content_15',
            };
            let S;
            !(function (e) {
                (e.Normal = 'normal'), (e.Wide = 'wide');
            })(S || (S = {}));
            const f = ({ children: e, onClick: t, isEnabled: a, hasFeedbackWhenHover: n, size: s = S.Normal }) =>
                    l().createElement(
                        'div',
                        {
                            className: b()(g.base, a && g.base__enabled, g[`base__${s}`]),
                            onClick: () => {
                                a && ((0, y.G)(R.sounds.yes()), t());
                            },
                            onMouseEnter: () => {
                                a && (0, y.G)(R.sounds.highlightx());
                            },
                        },
                        l().createElement('div', { className: b()(g.content, n && g.content__hover) }, e),
                    ),
                E = 'ActionSlot_icon_1a',
                v = 'ActionSlot_icon__disabled_fd',
                h = ({ action: e, onClick: t }) => {
                    const a = e.type.includes('empty'),
                        n = {
                            backgroundImage: `url(R.images.gui.maps.icons.newYear.celebrity_challenge.office.action_${e.type})`,
                        };
                    return l().createElement(
                        f,
                        {
                            onClick: () => {
                                t(e.type);
                            },
                            isEnabled: !a,
                            hasFeedbackWhenHover: !0,
                        },
                        l().createElement('div', { className: b()(E, a && v), style: a ? void 0 : n }),
                    );
                };
            var u = a(9766);
            const p = 'StorySlot_base_92',
                k = 'StorySlot_icon_c6',
                w = 'StorySlot_base__disabled_0c',
                N = 'StorySlot_label_32',
                C = 'StorySlot_counter_8b',
                x = 'StorySlot_text_64',
                W = 'StorySlot_availableStories_a1',
                Y = ({ story: e, onClick: t }) => {
                    const a = e.availableStories > 0,
                        n = e.availableStories,
                        s = e.totalStories;
                    return l().createElement(
                        f,
                        {
                            onClick: () => {
                                t(e.storyBy);
                            },
                            isEnabled: a,
                            size: S.Wide,
                        },
                        l().createElement(
                            'div',
                            { className: b()(p, !a && w) },
                            l().createElement('div', { className: k }),
                            l().createElement(
                                'div',
                                { className: N },
                                l().createElement(u.z, { text: R.strings.ny.newYear.challenge.office.story() }),
                            ),
                            l().createElement(
                                'div',
                                { className: C },
                                l().createElement(u.z, {
                                    text: R.strings.ny.newYear.challenge.office.storyCounter(),
                                    binding: {
                                        availableStories: l().createElement('div', { className: W }, n),
                                        totalStories: s,
                                    },
                                    classMix: x,
                                }),
                            ),
                        ),
                    );
                },
                z = 'Slots_base_0f',
                M = 'Slots_separator_da',
                F = 'Slots_slot_e4',
                $ = (0, r.Pi)(() => {
                    const e = m(),
                        t = e.model,
                        a = e.controls,
                        n = t.actions,
                        s = t.stories;
                    return l().createElement(
                        'div',
                        { className: z },
                        c.map(n.get(), (e, t) =>
                            e.isSeparator
                                ? l().createElement('div', { key: t, className: M })
                                : l().createElement(
                                      o.i,
                                      {
                                          header: R.strings.ny.newYear.challenge.office.tooltips.action.header(),
                                          body: R.strings.ny.newYear.challenge.office.tooltips.action.body(),
                                          key: t,
                                      },
                                      l().createElement(
                                          'div',
                                          { className: F },
                                          l().createElement(h, { onClick: a.startAction, action: e }),
                                      ),
                                  ),
                        ),
                        c.map(s.get(), (e, t) =>
                            l().createElement(
                                o.i,
                                {
                                    header: R.strings.ny.newYear.challenge.office.tooltips.story.header(),
                                    body: R.strings.ny.newYear.challenge.office.tooltips.story.body(),
                                    key: t,
                                },
                                l().createElement(
                                    'div',
                                    { className: F },
                                    l().createElement(Y, { onClick: a.showStory, story: e }),
                                ),
                            ),
                        ),
                    );
                }),
                A = 'Widget_base_fd',
                B = 'Widget_slots_8f',
                O = 'Widget_text_8c',
                T = () =>
                    l().createElement(
                        'div',
                        { className: A },
                        l().createElement('div', { className: B }, l().createElement($, null)),
                        l().createElement('div', { className: O }, R.strings.ny.newYear.challenge.office.description()),
                    ),
                j = () =>
                    l().createElement(
                        d,
                        { options: { context: 'model.challengeModel.challengeOfficeModel' } },
                        l().createElement('div', { className: s }, l().createElement(T, null)),
                    );
        },
        5287: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { base: 'FormatText_base_d0' };
        },
    },
]);
