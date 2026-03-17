import { k as e, m as t, j as s } from '../../../../chunks/vendor.js';
import { i, c as n, A as o, F as r, r as a, E as l } from '../../../../chunks/lib.js';
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
    [p, g] = i()(({ observableModel: t }) => {
        const s = { root: t.object() },
            i = e(() => c(m, s.root.get().eventName), { equals: n }),
            o = e(() => u(d, s.root.get().eventName), { equals: n });
        return { ...s, computes: { resources: i, dynamicResources: o } };
    }, o),
    b = 'App_ba71ae1b',
    w = 'App_title_e78d7565',
    x = 'App_text_b5591bdf',
    h = 'App_label_db244be6';
const j = t(function () {
    const { model: e } = g(),
        { texts: t } = e.computes.resources(),
        { dynamicTexts: i } = e.computes.dynamicResources(),
        n = e.root.get().guaranteedFrequency,
        o = (() => {
            if (n > 10 && n < 14) return t.otherCount;
            switch (n % 10) {
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
                classMix: x,
                binding: {
                    count: s.jsx(r, { text: o, binding: { count: n } }),
                    remainingCount: s.jsx(r, {
                        text: i.remainingCount.plural('remainingCount', e.root.get().guaranteedFrequency - 1),
                        binding: { remainingCount: n - 1 },
                    }),
                },
            }),
            s.jsx('div', { className: h, children: t.label }),
            s.jsx('div', { className: x, children: t.description }),
        ],
    });
});
a(s.jsx(p, { children: s.jsx(l, { children: s.jsx(j, {}) }) }));
