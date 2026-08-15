import { w as s, j as r } from '../../../../chunks/vendor.js';
import { i as e, aa as a, n as o, r as i, b as n, am as t } from '../../../../chunks/lib.js';
import { R as l } from '../../../../chunks/reward.js';
import { D as d } from '../../../../chunks/divider_dotty.js';
import { l as c } from '../../../../chunks/helpers.js';
/* empty css                       */ import '../../../../chunks/jm_reward.js';
const [m, j] = e('RewardsTooltipProvider')(
        ({ observableModel: s }) => ({ rewards: s.transform((s) => a(s, (s) => c(s)), 'bonuses') }),
        o,
    ),
    h = 'App_b90d9797',
    p = 'App_title_833cd813',
    u = 'App_content_95cfe0c9',
    b = i.resolve('strings'),
    x = s(function () {
        const { model: s } = j(),
            e = s.rewards.get();
        return r.jsxs('div', {
            className: h,
            children: [
                r.jsx('div', {
                    className: p,
                    children: b.readOrEmpty(
                        'R.strings.journey_marathon.rewardsTooltip.title.' + (e.length > 1 ? 'set' : 'single'),
                    ),
                }),
                r.jsx('div', {
                    className: u,
                    children: a(e, (s, a) =>
                        r.jsxs(
                            'div',
                            {
                                children: [
                                    r.jsx(l, { bonus: s, disableLabelTruncation: !0 }),
                                    a < e.length - 1 && r.jsx(d, {}),
                                ],
                            },
                            `${s.label}-${a}`,
                        ),
                    ),
                }),
            ],
        });
    });
n(r.jsx(m, { children: r.jsx(t, { children: r.jsx(t.Decorator, { children: r.jsx(x, {}) }) }) }), {
    immediateLayout: !1,
});
