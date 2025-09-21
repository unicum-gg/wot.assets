import { p as e, j as s } from '../../../chunks/vendor.js';
import { i as t, r as a, b as r, T as i, d as n, U as o } from '../../../chunks/lib.js';
const [d, m] = t()(
        ({ observableModel: e }) => ({ root: e.object() }),
        () => ({}),
    ),
    l = 'Content_375c8af5',
    c = 'Content_image_360c4dcf',
    p = 'Content_title_1e475263',
    x = 'Content_subTitle_f4ad9aa3',
    j = 'Content_missionsList_166fe349',
    _ = 'Content_missionsItem_849fade7',
    h = 'Content_expireTime_d65784d',
    v = 'one_time_gift.tooltips.OTGQuestTooltip',
    T = ['premium', 'personalReserves', 'x5BattleExperience', 'x3CrewExperience'],
    f = e(() => {
        const { model: e } = m(),
            { expireTime: t } = e.root.get(),
            i = new Date(1e3 * t),
            n = a.resolve('strings');
        return s.jsxs('div', {
            className: l,
            children: [
                s.jsx('div', { className: c }),
                s.jsx('div', { className: p, children: n.readOrEmpty(`${v}.title`) }),
                s.jsx('div', { className: x, children: n.readOrEmpty(`${v}.rewardsTitle`) }),
                s.jsx('div', {
                    className: j,
                    children: T.map((e, t) =>
                        s.jsx('div', { className: _, children: n.readOrEmpty(`${v}.rewards.${e}`) }, t),
                    ),
                }),
                s.jsx(r, {
                    path: `${v}.expireTime`,
                    params: { day: i.getDate(), month: n.readOrEmpty(`menu.dateTime.months.c_${i.getMonth() + 1}`) },
                    className: h,
                    upgradeLegacy: !0,
                }),
            ],
        });
    }),
    g = () => s.jsx(i, { children: s.jsx(f, {}) });
n(s.jsx(d, { children: s.jsx(o, { children: s.jsx(g, {}) }) }));
