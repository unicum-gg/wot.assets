import { q as e, j as r } from '../../../../chunks/vendor.js';
import { i as s, n as i, b as t, f as o, e as l, r as a } from '../../../../chunks/lib.js';
import { E as n } from '../../../../chunks/extended_tooltip_decorator.js';
/* empty css                       */ import '../../../../chunks/divider.js';
const [m, d] = s()(({ observableModel: e }) => ({ ...e.primitives(['timeLeft', 'rerollInterval']) }), i),
    p = e(function () {
        const { model: e } = d(),
            s = t.resolve('strings'),
            [i] = o(l(e.rerollInterval.get()), ['h']);
        return r.jsx(n, {
            header: s.readOrEmpty('user_missions.tooltip.daily_reroll.header'),
            description: s.readOrEmpty('user_missions.tooltip.daily_reroll.description'),
            descriptionParams: { time: i },
            timerTimeLeft: e.timeLeft.get(),
        });
    });
a(r.jsx(m, { children: r.jsx(p, {}) }));
