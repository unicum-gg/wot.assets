import { x as s, j as e, e as a } from '../../../chunks/vendor.js';
import { i as t, c as o, s as i, d as r, r as n, u as c, V as p, J as l, M as d, a as _ } from '../../../chunks/lib.js';
import { s as b, r as u, W as m } from '../../../chunks/flag_view_model.js';
/* empty css                    */ const [h, v] = t()(({ observableModel: s }) => {
        const e = { ...s.primitives(['winStatus']), achievements: s.array('achievements') },
            a = o.primitive(() => {
                const s = e.achievements.get();
                return i(s, (s) => b.includes(s.groupID));
            });
        return { ...e, computeds: { hasSpeialMedals: a } };
    }),
    f = 'App_cb654453',
    g = 'App_flag_4ed23b16',
    j = 'App_flag__hidden_8afb9008',
    w = r('Flag', f);
function S({ winStatus: s, epicRibbon: e }) {
    return s === m
        ? 'post_battle.' + (e ? 'epic_victory_ribbon' : 'no_epic_victory_ribbon')
        : 'post_battle.' + (e ? 'epic_defeat_draw_ribbon' : 'no_epic_defeat_draw_ribbon');
}
const x = s(function () {
    const s = n.resolve('videos'),
        t = c(),
        { model: o } = v(),
        i = o.winStatus.get(),
        r = o.computeds.hasSpeialMedals();
    return e.jsx(w, {
        className: f,
        children: e.jsx(p, {
            loop: !0,
            autoplay: !0,
            className: a(g, t.location !== u.personal && j),
            src: s.read(S({ winStatus: i, epicRibbon: r })),
        }),
    });
});
_(new l().addWithProps(d, { context: 'model.router' }).add(h).render(e.jsx(x, {})));
