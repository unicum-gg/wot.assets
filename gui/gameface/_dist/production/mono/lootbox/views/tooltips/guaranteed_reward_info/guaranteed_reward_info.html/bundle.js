import { m as e, n as t, j as s } from '../../../../chunks/vendor.js';
import { i as n, c as i, A as o, F as r, r as a, E as l } from '../../../../chunks/lib.js';
import { a as c, g as u } from '../../../../chunks/resources.js';
/* empty css                       */ import '../../../../chunks/getRewardImage.js';
const d = { dynamicTexts: { remainingCount: 'singleRewardView.tooltip.remainingCount' } },
    m = {
        texts: {
            title: 'singleRewardView.tooltip.title',
            subtitle: 'singleRewardView.tooltip.subtitle',
            label: 'singleRewardView.tooltip.label',
            description: 'singleRewardView.tooltip.description',
            firstCount: 'singleRewardView.tooltip.count.first',
            secondCount: 'singleRewardView.tooltip.count.second',
            thirdCount: 'singleRewardView.tooltip.count.third',
            otherCount: 'singleRewardView.tooltip.count.other',
        },
    },
    [p, g] = n()(({ observableModel: t }) => {
        const s = { root: t.object() },
            n = e(() => c(m, s.root.get().eventName), { equals: i }),
            o = e(() => u(d, s.root.get().eventName), { equals: i });
        return { ...s, computes: { resources: n, dynamicResources: o } };
    }, o),
    b = 'App_ba71ae1b',
    w = 'App_title_e78d7565',
    h = 'App_text_b5591bdf',
    x = 'App_label_db244be6';
const j = t(function () {
    const { model: e } = g(),
        { texts: t } = e.computes.resources(),
        { dynamicTexts: n } = e.computes.dynamicResources(),
        i = e.root.get().guaranteedFrequency,
        o = (() => {
            if (i > 10 && i < 14) return t.otherCount;
            switch (i % 10) {
                case 1:
                    return t.firstCount;
                case 2:
                    return t.secondCount;
                case 3:
                    return t.thirdCount;
                default:
                    return t.otherCount;
            }
        })();
    return s.jsxs('div', {
        className: b,
        children: [
            s.jsx('div', { className: w, children: t.title }),
            s.jsx(r, {
                text: t.subtitle,
                classMix: h,
                binding: {
                    count: s.jsx(r, { text: o, binding: { count: i } }),
                    remainingCount: s.jsx(r, {
                        text: n.remainingCount.plural('remainingCount', e.root.get().guaranteedFrequency - 1),
                        binding: { remainingCount: i - 1 },
                    }),
                },
            }),
            s.jsx('div', { className: x, children: t.label }),
            s.jsx('div', { className: h, children: t.description }),
        ],
    });
});
a(s.jsx(p, { children: s.jsx(l, { children: s.jsx(j, {}) }) }));
