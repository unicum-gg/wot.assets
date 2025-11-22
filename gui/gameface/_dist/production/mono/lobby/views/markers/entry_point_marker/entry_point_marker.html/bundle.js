import { j as e, k as t, R as n, x as a, y as s, i as r, r as o } from '../../../../chunks/vendor.js';
import { i as c, n as i, H as _, l as d, c as l, J as f, r as m } from '../../../../chunks/lib.js';
const [p, u] = c()(({ observableModel: e }) => ({ root: e.object() }), i),
    x = 'Counter_481de7c',
    b = 'Counter_icon_e15e73e9',
    j = 'Counter_count_d361ff22',
    h = ({ count: t }) =>
        e.jsxs('div', {
            className: x,
            children: [e.jsx('div', { className: b }), e.jsx('div', { className: j, children: t })],
        }),
    v = 'InfoDecorator_19b56383',
    g = 'InfoDecorator_background_f009b811',
    C = 'InfoDecorator_arrow_a021bdd2',
    k = ({ children: n, className: a, startColor: s = '#213da1', endColor: r = '#4361c8', classNames: o }) => {
        const c = _();
        return e.jsxs('div', {
            className: t(v, a),
            children: [
                e.jsxs('svg', {
                    className: g,
                    viewBox: '0 0 100% 100%',
                    children: [
                        e.jsx('defs', {
                            children: e.jsxs('linearGradient', {
                                id: 'bg-gradient',
                                gradientUnits: 'userSpaceOnUse',
                                x1: '0%',
                                y1: '0%',
                                x2: '0%',
                                y2: '100%',
                                children: [
                                    e.jsx('stop', { offset: '0%', stopColor: s, stopOpacity: '0%' }),
                                    e.jsx('stop', { offset: '100%', stopColor: r, stopOpacity: '100%' }),
                                ],
                            }),
                        }),
                        e.jsx('rect', {
                            x: '0%',
                            y: '0%',
                            width: '100%',
                            height: '100%',
                            rx: 8 * c,
                            fill: 'url(#bg-gradient)',
                        }),
                    ],
                }),
                n,
                e.jsx('div', { className: t(C, null == o ? void 0 : o.arrow) }),
            ],
        });
    },
    N = {
        root: 'MarkerContent_root_e580c910',
        base: 'MarkerContent_f8c430a8',
        content: 'MarkerContent_content_aa3f5a38',
        content__default: 'MarkerContent_content__default_7b05fd62',
        content__friend: 'MarkerContent_content__friend_dc7744a9',
        content__zero: 'MarkerContent_content__zero_2a4098fa',
        content__number: 'MarkerContent_content__number_ae6d77e9',
        gradient: 'MarkerContent_gradient_eec7a870',
    },
    A = n.memo((n) => {
        const r = a(n, {
            from: { opacity: 0, transform: 'translate(-50%, 50%)' },
            enter: { opacity: 1, transform: 'translate(-50%, -50%)' },
            leave: { opacity: 0, transform: 'translate(-50%, -150%)' },
            config: { duration: 600 },
        });
        return e.jsx('div', {
            className: t(N.base, n.className),
            children: r((n, { markerContent: a }) =>
                e.jsxs(s.div, {
                    style: n,
                    className: t(N.content, N.content__default, N.content__default),
                    children: [a, e.jsx('div', { className: t(N.gradient, N.gradient__default), children: a })],
                }),
            ),
        });
    }),
    y = 'App_db51d7ae',
    M = 'App_base__activeEvent_47048290',
    E = 'App_base__postEvent_ed438e90',
    D = 'App_base__hidden_4f2b7a98',
    w = 'App_base__animated_3a64b9d0',
    O = 'App_inner_ee191014',
    G = 'App_icon_92c2e8f4',
    I = 'App_counter_293a558e',
    U = R.strings.advent_calendar.marker.exclamationMark(),
    z = r(function () {
        const { model: n } = u(),
            { breakpoint: a } = d(),
            s = o.useRef(null),
            { isVisible: r, isPostEvent: c, isAnimationEnabled: i, availableDoorsAmount: _ } = n.root.get();
        return (
            o.useEffect(
                () =>
                    l(() => {
                        s.current && f(s.current.offsetWidth, s.current.offsetHeight);
                    }),
                [c, a.name],
            ),
            e.jsx('div', {
                className: t(y, M, (!r || 0 === _) && D, c && E, i && w),
                ref: s,
                lang: R.strings.settings.LANGUAGE_CODE(),
                children: c
                    ? e.jsx('div', {
                          className: O,
                          children: e.jsx('div', { className: G, children: e.jsx(A, { markerContent: U }) }),
                      })
                    : e.jsx(k, { className: I, children: e.jsx(h, { count: _ }) }),
            })
        );
    });
m(e.jsx(p, { children: e.jsx(z, {}) }));
