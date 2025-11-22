import { w as e, j as s, e as a } from '../../../chunks/vendor.js';
import { i as o, c as t, s as i, d as n, r, u as c, V as p, J as l, M as d, a as _ } from '../../../chunks/lib.js';
import { s as b, r as u, W as m } from '../../../chunks/flag_view_model.js';
/* empty css                    */ const [h, v] = o()(({ observableModel: e }) => {
        const s = { ...e.primitives(['winStatus']), achievements: e.arrayClone('achievements') },
            a = t.primitive(() => {
                const e = s.achievements.get();
                return i(e, (e) => b.includes(e.groupID));
            });
        return { ...s, computeds: { hasSpeialMedals: a } };
    }),
    f = 'App_cb654453',
    w = 'App_flag_4ed23b16',
    g = 'App_flag__hidden_8afb9008',
    j = n('Flag', f);
function S({ winStatus: e, epicRibbon: s }) {
    return e === m
        ? 'post_battle.' + (s ? 'epic_victory_ribbon' : 'no_epic_victory_ribbon')
        : 'post_battle.' + (s ? 'epic_defeat_draw_ribbon' : 'no_epic_defeat_draw_ribbon');
}
const k = e(function () {
    const e = r.resolve('videos'),
        o = c(),
        { model: t } = v(),
        i = t.winStatus.get(),
        n = t.computeds.hasSpeialMedals();
    return s.jsx(j, {
        className: f,
        children: s.jsx(p, {
            loop: !0,
            autoplay: !0,
            className: a(w, o.location !== u.personal && g),
            src: e.read(S({ winStatus: i, epicRibbon: n })),
        }),
    });
});
_(new l().addWithProps(d, { context: 'model.router' }).add(h).render(s.jsx(k, {})));
