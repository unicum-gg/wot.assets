import { p as s, j as r } from '../../../../chunks/vendor.js';
import { i as e, n as i, b as o, f as t, e as m, d as a, r as n } from '../../../../chunks/lib.js';
import { g as l } from '../../../../chunks/utils.js';
import { E as d } from '../../../../chunks/extended_tooltip_decorator.js';
/* empty css                       */ import '../../../../chunks/divider.js';
const [p, u] = e()(({ observableModel: s }) => ({ ...s.primitives(['timeLeft', 'rerollInterval']) }), i),
    c = s(function () {
        const { model: s } = u(),
            e = o.resolve('strings'),
            [i, n] = t(m(s.rerollInterval.get()), ['h', 'm']);
        return r.jsx(d, {
            header: e.readOrEmpty('user_missions.tooltip.daily_reroll.header'),
            description: e.readOrEmpty('user_missions.tooltip.daily_reroll.description'),
            descriptionParams: {
                time: r.jsx(a, {
                    path: `user_missions.common.duration.${l(Number(i), Number(n))}`,
                    params: { hours: i, minutes: n },
                }),
            },
            timerTimeLeft: s.timeLeft.get(),
        });
    });
n(r.jsx(p, { children: r.jsx(c, {}) }));
