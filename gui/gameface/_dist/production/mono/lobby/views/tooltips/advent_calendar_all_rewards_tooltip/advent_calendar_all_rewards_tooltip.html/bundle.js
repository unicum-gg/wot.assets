import { j as s, k as e } from '../../../../chunks/vendor.js';
import { i as a, K as i, t, L as o, F as r, r as n } from '../../../../chunks/lib.js';
const [l, c] = a()(({ observableModel: s }) => ({ rewards: s.array('rewards') }), i),
    d = 'Section_3f7f9a22',
    m = 'Section_base__progression_6f688f03',
    _ = 'Section_imagesWrapper_fc66043c',
    p = 'Section_image_88973237',
    u = 'Section_image__lootbox_157f3b55',
    x = 'Section_title_9e765f77',
    g = R.strings.advent_calendar.mainView.tooltip.allRewards.bonus,
    j = 'lootBox',
    b = R.images.gui.maps.icons.quests.bonuses.small;
function v(s) {
    return s === j ? R.images.advent_calendar.gui.maps.icons.tooltips.lootBox() : b.$dyn(s);
}
const f = ({ section: a }) => {
        var i;
        return s.jsxs('div', {
            className: e(d, 'progressionRewards' === a.type && m),
            children: [
                s.jsxs('div', { className: x, children: [null == (i = g.$dyn(a.type)) ? void 0 : i.toString(), ' '] }),
                s.jsx('div', {
                    className: _,
                    children: t(a.value, (a, i) =>
                        s.jsx('div', { className: e(p, a === j && u), style: { backgroundImage: `url(${v(a)})` } }, i),
                    ),
                }),
            ],
        });
    },
    h = 'App_10e23c06',
    w = 'App_title_b196b40c',
    N = 'App_subTitle_e2d532bd',
    S = R.strings.advent_calendar.mainView.tooltip.allRewards,
    y = () => {
        const { model: e } = c();
        return s.jsx(o, {
            children: s.jsx(o.Decorator, {
                children: s.jsxs('div', {
                    className: h,
                    children: [
                        s.jsx(r, { className: w, text: S.title() }),
                        s.jsx(r, { className: N, text: S.subTitle() }),
                        t(e.rewards.get(), (e, a) => s.jsx(f, { section: e }, a)),
                    ],
                }),
            }),
        });
    };
n(s.jsx(l, { children: s.jsx(y, {}) }));
