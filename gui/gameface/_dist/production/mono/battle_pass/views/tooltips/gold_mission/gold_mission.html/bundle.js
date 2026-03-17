import { t as s, j as t } from '../../../../chunks/vendor.js';
import { i as n, N as e, n as i, b_ as a, J as o, U as d, d as c } from '../../../../chunks/lib.js';
const [r, l] = n()(({ observableModel: s }) => ({ ...s.primitives(['count', 'days']) }), e),
    x = 'Content_471ad094',
    _ = 'Content_separator_5b0d3262',
    h = 'Content_title_57e98533',
    j = 'Content_text_b5cdd4f5',
    g = 'Content_currency_e361fc69',
    p = 'Content_icon_67289c16',
    m = 'Content_duration_2960ffa8',
    b = 'Content_description_1ae2425a',
    u = 'Content_highlight_38dca14b',
    C = R.strings.battle_pass.tooltips.goldMission,
    N = s(() => {
        const { model: s } = l();
        return t.jsxs('div', {
            className: x,
            children: [
                t.jsx('div', { className: h, children: C.title() }),
                t.jsx(i, {
                    classMix: j,
                    text: C.text(),
                    binding: {
                        count: t.jsx('span', { className: g, children: s.count.get() }),
                        icon: t.jsx('span', { className: p }),
                        duration: t.jsx(i, { classMix: m, text: C.textDuration(), binding: { days: s.days.get() } }),
                    },
                }),
                t.jsx('div', { className: _ }),
                t.jsx(i, {
                    classMix: b,
                    text: C.description(),
                    binding: { highlight: t.jsx('span', { className: u, children: C.highlightedDescription() }) },
                }),
            ],
        });
    }),
    f = () => t.jsx(a, { children: t.jsx(a.Decorator, { children: t.jsx(N, {}) }) });
c(new o().add(d).addWithProps(r, {}).render(t.jsx(f, {})));
