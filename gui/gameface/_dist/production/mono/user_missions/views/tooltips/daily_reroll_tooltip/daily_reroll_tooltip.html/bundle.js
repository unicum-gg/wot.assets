import { s as r, j as s } from '../../../../chunks/vendor.js';
import { i as e, n as i, r as t, f as o, s as l, c as a } from '../../../../chunks/lib.js';
import { E as n } from '../../../../chunks/extended_tooltip_decorator.js';
/* empty css                       */ import '../../../../chunks/divider.js';
const [m, d] = e()(({ observableModel: r }) => ({ ...r.primitives(['timeLeft', 'rerollInterval']) }), i),
    c = r(function () {
        const { model: r } = d(),
            e = t.resolve('strings'),
            [i] = o(l(r.rerollInterval.get()), ['h']);
        return s.jsx(n, {
            header: e.readOrEmpty('user_missions.tooltip.daily_reroll.header'),
            description: e.readOrEmpty('user_missions.tooltip.daily_reroll.description'),
            descriptionParams: { time: i },
            timerTimeLeft: r.timeLeft.get(),
        });
    });
a(s.jsx(m, { children: s.jsx(c, {}) }));
