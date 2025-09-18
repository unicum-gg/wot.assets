import { j as s, p as e, r as a, t as i, e as c, n as l } from '../../../../chunks/vendor.js';
import {
    a3 as t,
    i as n,
    e as o,
    a4 as d,
    D as r,
    a as p,
    k as m,
    B as _,
    t as b,
    s as x,
    b as h,
    U as j,
} from '../../../../chunks/lib.js';
const u = 'Description_9a429ac6',
    v = 'Description_icon_61bd7cae',
    f = 'Description_title_fd356bf',
    N = 'Description_9c2cbcb1',
    y = ({ icon: e, title: a, description: i }) =>
        s.jsxs('div', {
            className: u,
            children: [
                s.jsx('div', { className: f, children: a }),
                s.jsx('div', { className: v, style: { backgroundImage: `url(${e})` } }),
                s.jsx('div', { className: N, children: i && t(i) }),
            ],
        }),
    [C, g] = n()(
        ({ observableModel: s }) => {
            const e = { slides: s.array('slides'), ...s.primitives(['title', 'buttonLabel']) },
                a = o.shallow((s) => {
                    const a = d(e.slides.get(), s);
                    return (r(void 0 !== a, `Could not find slide with index ${s}.`), a);
                });
            return { ...e, computed: { getSlideByIndex: a } };
        },
        ({ externalModel: s }) => ({ onClose: s.createCallbackNoArgs('onClose') }),
    ),
    A = 'App_508c0064',
    k = 'App_content_3c8fdc2c',
    B = 'App_slidesWrapper_2389a8ac',
    w = 'App_slide_24421c1a',
    D = 'App_counter_1ccae048',
    E = 'App_arrowButton_4108196b',
    S = 'App_arrowButton__left_1ff87043',
    $ = 'App_arrowButton__disabled_6db15a44',
    I = e(function () {
        const { model: e, controls: t } = g(),
            [n, o] = a.useState(0),
            d = e.slides.get().length;
        (p(m.ESCAPE, t.onClose), p(m.ENTER, t.onClose));
        const r = i(n, {
            key: n,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { tension: 280, friction: 60 },
        });
        return s.jsxs('div', {
            className: A,
            children: [
                s.jsxs('div', {
                    className: k,
                    children: [
                        s.jsx(_, {
                            classNames: { base: c(E, S, 0 === n && $) },
                            disabled: 0 === n,
                            theme: b.secondary,
                            onClick: () => {
                                o((s) => s - 1);
                            },
                        }),
                        s.jsx('div', {
                            className: B,
                            children: r((a, i) =>
                                s.jsxs(l.div, {
                                    className: w,
                                    style: a,
                                    children: [
                                        s.jsx('div', { className: D, children: `${i + 1} / ${d}` }),
                                        s.jsx(y, { ...e.computed.getSlideByIndex(i) }),
                                    ],
                                }),
                            ),
                        }),
                        s.jsx(_, {
                            classNames: { base: c(E, n === d - 1 && $) },
                            disabled: n === d - 1,
                            theme: b.secondary,
                            onClick: () => {
                                o((s) => s + 1);
                            },
                        }),
                    ],
                }),
                s.jsx(_, { size: x.medium, theme: b.primary, onClick: t.onClose, children: e.buttonLabel.get() }),
            ],
        });
    });
h(s.jsx(C, { children: s.jsx(j, { children: s.jsx(I, {}) }) }));
