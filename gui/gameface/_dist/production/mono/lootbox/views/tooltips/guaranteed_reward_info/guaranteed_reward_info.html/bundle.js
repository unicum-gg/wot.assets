import { m as e, n as t, j as n } from '../../../../chunks/vendor.js';
import { i as s, c as i, z as o, k as r, r as a, A as l } from '../../../../chunks/lib.js';
import { a as c, g as u } from '../../../../chunks/resources.js';
import '../../../../chunks/getRewardImage.js';
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
    [p, g] = s()(({ observableModel: t }) => {
        const n = { root: t.object() },
            s = e(() => c(m, n.root.get().eventName), { equals: i }),
            o = e(() => u(d, n.root.get().eventName), { equals: i });
        return { ...n, computes: { resources: s, dynamicResources: o } };
    }, o),
    b = 'App_ba71ae1b',
    w = 'App_title_e78d7565',
    x = 'App_text_b5591bdf',
    h = 'App_label_db244be6';
const j = t(function () {
    const { model: e } = g(),
        { texts: t } = e.computes.resources(),
        { dynamicTexts: s } = e.computes.dynamicResources(),
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
    return n.jsxs('div', {
        className: b,
        children: [
            n.jsx('div', { className: w, children: t.title }),
            n.jsx(r, {
                text: t.subtitle,
                classMix: x,
                binding: {
                    count: n.jsx(r, { text: o, binding: { count: i } }),
                    remainingCount: n.jsx(r, {
                        text: s.remainingCount.plural('remainingCount', e.root.get().guaranteedFrequency - 1),
                        binding: { remainingCount: i - 1 },
                    }),
                },
            }),
            n.jsx('div', { className: h, children: t.label }),
            n.jsx('div', { className: x, children: t.description }),
        ],
    });
});
a(n.jsx(p, { children: n.jsx(l, { children: n.jsx(j, {}) }) }));
