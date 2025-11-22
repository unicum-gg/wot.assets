import { i as e, r as s, j as a, k as t } from '../../../chunks/vendor.js';
import {
    i,
    u as c,
    B as o,
    a as l,
    c as n,
    C as r,
    f as d,
    F as m,
    b as p,
    r as _,
    U as b,
} from '../../../chunks/lib.js';
import { f as h, a as x } from '../../../chunks/format.js';
const [u, j] = i()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            startCloseAnimation: e.createCallbackNoArgs('onCloseAnimationStarted'),
        }),
    ),
    k = '$animationDuration',
    A = 'App_title_1d4e473b',
    N = 'App_close_d7247dd',
    v = 'App_vignette_486ba272',
    f = 'App_block_f20d1540',
    g = 'App_buttonWrapper_29e2644c',
    C = 'App_base__openedFirstTime_0',
    D = 'App_base__animationEnabled_0',
    T = 'App_base__hidden_0',
    w = 'App_92926bd4',
    z = 'App_content_76ba0f3b',
    E = 'App_blockImage_4eb99d04',
    S = 'App_block__howItWork_0',
    G = 'App_block__whatCanYouGet_0',
    L = 'App_block__magicLootbox_0',
    F = 'App_blockText_d4a2cf31',
    I = 'App_blockTitle_9eaf4b69',
    M = 'App_blockDescription_50f7fce1',
    W = 'App_blockDescriptionFormatText_77377dbe',
    Y = R.strings.advent_calendar.introScreenView,
    y = Number(k),
    O = e(() => {
        const { model: e, controls: i } = j(),
            { startDate: _, endDate: b, isOpenedFirstTime: u, isAnimationEnabled: k } = e.root.get(),
            O = c({ buttonSize: o.sizes.medium }, { large: { buttonSize: o.sizes.large } }),
            U = s.useRef(Date.now()),
            B = s.useRef(),
            [V, $] = s.useState(!0),
            q = s.useCallback(() => {
                if (B.current) return;
                (i.startCloseAnimation(), $(!0));
                const e = Math.floor(Math.min(Date.now() - U.current, y));
                B.current = setTimeout(i.close, e);
            }, [i]);
        (l(q),
            s.useEffect(
                () =>
                    n(() => {
                        ($(!1), (U.current = Date.now()));
                    }),
                [],
            ));
        const H = s.useCallback(() => {
            B.current && clearTimeout(B.current);
        }, []);
        return (
            s.useEffect(() => () => H(), [H]),
            a.jsxs('div', {
                lang: R.strings.settings.LANGUAGE_CODE(),
                className: t(w, V && T, k && D, u && C),
                children: [
                    a.jsx('div', { className: v }),
                    a.jsx('div', { className: N, children: a.jsx(r, { onClose: q }) }),
                    a.jsx('div', { className: A, children: Y.title() }),
                    a.jsxs('div', {
                        className: z,
                        children: [
                            a.jsxs('div', {
                                className: t(f, S),
                                children: [
                                    a.jsx('div', { className: E }),
                                    a.jsxs('div', {
                                        className: F,
                                        children: [
                                            a.jsx('div', { className: I, children: Y.blockTitle.howItWork() }),
                                            a.jsx('div', {
                                                className: M,
                                                children: d(Y.blockDescription.howItWork(), h(_, b)),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                className: t(f, G),
                                children: [
                                    a.jsx('div', { className: E }),
                                    a.jsxs('div', {
                                        className: F,
                                        children: [
                                            a.jsx('div', { className: I, children: Y.blockTitle.whatCanYouGet() }),
                                            a.jsx('div', {
                                                className: M,
                                                children: Y.blockDescription.whatCanYouGet(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            a.jsxs('div', {
                                className: t(f, L),
                                children: [
                                    a.jsx('div', { className: E }),
                                    a.jsxs('div', {
                                        className: F,
                                        children: [
                                            a.jsx('div', { className: I, children: Y.blockTitle.magicLootbox() }),
                                            a.jsx('div', {
                                                className: M,
                                                children: a.jsx(m, {
                                                    className: W,
                                                    text: p(Y.blockDescription.magicLootbox()),
                                                    params: { date: x(b) },
                                                    upgradeLegacy: !0,
                                                    split: !0,
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    a.jsx('div', {
                        className: g,
                        children: a.jsx(o, {
                            theme: o.themes.primary,
                            size: O.buttonSize,
                            onClick: q,
                            children: Y.buttonTitle(),
                        }),
                    }),
                ],
            })
        );
    });
_(a.jsx(b, { children: a.jsx(u, { children: a.jsx(O, {}) }) }));
