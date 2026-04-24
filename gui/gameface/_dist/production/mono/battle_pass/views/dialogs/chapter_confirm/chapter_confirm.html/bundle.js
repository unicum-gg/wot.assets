import { j as e, v as t } from '../../../../chunks/vendor.js';
import {
    n as s,
    i as a,
    _ as i,
    $ as n,
    M as r,
    w as c,
    a3 as o,
    a4 as l,
    bX as d,
    J as h,
    U as p,
    d as x,
} from '../../../../chunks/lib.js';
const m = 'ExtraChapterDescription_b9765d9b',
    b = 'ExtraChapterDescription_description_6781df64',
    _ = 'ExtraChapterDescription_warningIcon_be590846',
    j = 'ExtraChapterDescription_highlightText_3444159b',
    C = R.strings.battle_pass.chapterChoice.confirmation,
    u = () =>
        e.jsx('div', {
            className: m,
            children: e.jsx(s, {
                text: C.extraChapterDescription.text(),
                binding: {
                    icon: e.jsx('span', { className: _ }),
                    highlightText: e.jsx('span', { className: j, children: C.extraChapterDescription.highlightText() }),
                },
                classMix: b,
            }),
        }),
    [g, f] = a()(
        ({ observableModel: e }) => ({ ...{ root: e.object() } }),
        ({ externalModel: e }) => ({
            confirm: e.createCallbackNoArgs('onAccept'),
            close: e.createCallbackNoArgs('onCancel'),
        }),
    ),
    N = 'Container_28f8549e',
    v = 'Container_buttons_4ace6ad5',
    A = 'Container_closeButton_1a873580',
    z = 'Container_divider_9b7ebff',
    E = R.strings.battle_pass.chapterChoice.confirmation,
    S = t(function () {
        const { model: t, controls: s } = f(),
            { prevChapter: a } = t.root.get(),
            d = i({ buttonSize: n.small }, { medium: { buttonSize: n.medium }, extraLarge: { buttonSize: n.large } });
        return (
            r(c.ESCAPE, s.close),
            e.jsxs('div', {
                className: N,
                children: [
                    e.jsx('div', { className: z }),
                    e.jsxs('div', {
                        className: v,
                        children: [
                            e.jsx(o, {
                                size: d.buttonSize,
                                onClick: s.confirm,
                                'data-test-id': 'confirmButton',
                                children: 0 === a ? E.button.submit() : E.button.switch(),
                            }),
                            e.jsx(o, {
                                size: d.buttonSize,
                                theme: l.secondary,
                                onClick: s.close,
                                className: A,
                                'data-test-id': 'cancelButton',
                                children: E.button.cancel(),
                            }),
                        ],
                    }),
                ],
            })
        );
    }),
    k = 'App_3018b200',
    w = 'App_title_a68d00d7',
    D = 'App_subTitle_78a165db',
    T = 'App_topRight_6cd3f8f6',
    B = 'App_closeBtn_bc1dfeba',
    M = R.strings.battle_pass.chapterChoice.confirmation,
    P = (e) => R.strings.battle_pass.chapter.fullName.$num(e),
    $ = (t, a) => e.jsx(s, { text: M.title.$dyn(t), binding: { chName: P(a) } }),
    y = (t, a) => e.jsx(s, { text: M.description.$dyn(t), binding: { chName: P(a) } }),
    F = t(() => {
        const { model: t, controls: s } = f(),
            { prevChapter: a, nextChapter: i, isSwitchFromPostProgressionToExtraChapter: n } = t.root.get(),
            r = 0 !== a ? 'switch' : 'select';
        return e.jsxs('div', {
            className: k,
            children: [
                e.jsx('div', {
                    className: T,
                    children: e.jsx('div', { className: B, children: e.jsx(d, { onClose: s.close }) }),
                }),
                e.jsx('div', { className: w, children: $(r, i) }),
                n ? e.jsx(u, {}) : e.jsx('div', { className: D, children: y(r, a) }),
                e.jsx(S, {}),
            ],
        });
    });
x(new h().add(p).addWithProps(g, {}).render(e.jsx(F, {})));
