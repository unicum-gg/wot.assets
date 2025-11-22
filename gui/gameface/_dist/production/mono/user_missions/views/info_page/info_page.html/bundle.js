import { j as e, e as s, p as a } from '../../../chunks/vendor.js';
import {
    b as r,
    f as n,
    F as i,
    d as o,
    I as t,
    e as l,
    i as c,
    g as d,
    C as m,
    B as _,
    A as p,
    h as f,
    r as x,
    U as I,
} from '../../../chunks/lib.js';
import { g as b } from '../../../chunks/utils.js';
const j = 'weekly',
    u = 'main',
    v = 'additional',
    h = ['standard', 'premium', j],
    g = ['conditions', 'bonus', 'reward', 'reroll'],
    N = {
        base: 'InfoItem_a5beac91',
        base__reversed: 'InfoItem_base__reversed_36b9aa51',
        textBlock: 'InfoItem_textBlock_aaa46241',
        base__additional: 'InfoItem_base__additional_2d64e841',
        title: 'InfoItem_title_10b9bb3b',
        description: 'InfoItem_description_c2dea9a8',
        iconWrapper: 'InfoItem_iconWrapper_7115ec4b',
        icon: 'InfoItem_icon_9f7d5e9f',
    },
    k = r.resolve('strings');
function y({ index: a, item: r, type: c, rerollInterval: d = 0 }) {
    const m = c === v || a % 2 != 0,
        [_, p] = n(l(d), ['h', 'm']);
    return e.jsxs('div', {
        className: s(N.base, N[`base__${c}`], m && N.base__reversed),
        children: [
            e.jsxs('div', {
                className: N.textBlock,
                children: [
                    e.jsx(i, { text: k.readOrEmpty(`user_missions.info_page.${c}.${r}.title`), className: N.title }),
                    e.jsx(i, {
                        text: k.readOrEmpty(`user_missions.info_page.${c}.${r}.description`),
                        split: !0,
                        params: {
                            time: e.jsx(o, {
                                path: `user_missions.common.duration.${b(Number(_), Number(p))}`,
                                params: { hours: _, minutes: p },
                            }),
                        },
                        className: N.description,
                    }),
                ],
            }),
            e.jsx('div', {
                className: N.iconWrapper,
                children: e.jsx(t, { path: `userMissions.info_page.${r}`, className: N.icon }),
            }),
        ],
    });
}
const [$, P] = c()(
        ({ observableModel: e }) => ({ ...e.primitives(['rerollInterval', 'isWeeklySectionAvailable']) }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    B = 'InfoPage_48433e5a',
    W = 'InfoPage_closeButton_23a55aae',
    w = 'InfoPage_wrapper_f38244dc',
    A = 'InfoPage_content_4cbf7ee4',
    C = 'InfoPage_verticalBar_a70fa964',
    E = 'InfoPage_header_47fea8de',
    M = 'InfoPage_separator_86a318ea',
    O = r.resolve('strings'),
    S = a(function () {
        const { model: s, controls: a } = P(),
            r = s.rerollInterval.get(),
            n = s.isWeeklySectionAvailable.get();
        return (
            d(a.close),
            e.jsxs('div', {
                className: B,
                children: [
                    e.jsx(m, { className: W, onClose: a.close }),
                    e.jsxs(_, {
                        children: [
                            e.jsxs(p, {
                                classNames: { wrapper: w, content: A },
                                children: [
                                    e.jsx('div', {
                                        className: E,
                                        children: O.readOrEmpty('user_missions.info_page.header'),
                                    }),
                                    h.map((s, a) =>
                                        n || s !== j ? e.jsx(y, { index: a, item: s, type: u }, `index_${a}`) : null,
                                    ),
                                    e.jsx('div', { className: M }),
                                    g.map((s, a) =>
                                        e.jsx(y, { index: a, item: s, type: v, rerollInterval: r }, `index_${a}`),
                                    ),
                                ],
                            }),
                            e.jsx(f, { classNames: { base: C } }),
                        ],
                    }),
                ],
            })
        );
    });
x(e.jsx(I, { children: e.jsx($, { children: e.jsx(S, {}) }) }));
