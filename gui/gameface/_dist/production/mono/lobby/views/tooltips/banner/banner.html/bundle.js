import { q as e, s as t, v as s, j as a, f as i } from '../../../../chunks/vendor.js';
import { i as n, n as r, bt as o, F as c, az as l, aL as p, r as d, U as m, bs as _ } from '../../../../chunks/lib.js';
import { S as b } from '../../../../chunks/enums.js';
/* empty css                        */ var x = ((e) => ((e.Low = 'low'), (e.Medium = 'medium'), (e.High = 'high'), e))(
    x || {},
);
const [g, u] = n()(({ observableModel: s }) => {
        const a = { root: s.object(), eventInfo: s.object('eventInfo') },
            i = e(
                () =>
                    a.eventInfo.get().subMode === b.StPatrick
                        ? {
                              subTitle: R.strings.battle_royale_extention.tooltip.banner.stPatrickTitle(),
                              description: R.strings.battle_royale_extention.tooltip.banner.stPatrickDescription(),
                              backgroundImage: R.images.battle_royale.gui.maps.st_patrick.tooltips.bannerBg(),
                          }
                        : {
                              subTitle: '',
                              description: R.strings.battle_royale_extention.tooltip.banner.description(),
                              backgroundImage: R.images.battle_royale.gui.maps.tooltips.bannerBg(),
                          },
                { equals: t.structural },
            );
        return { ...a, computes: { settings: i } };
    }, r),
    f = {
        base: 'App_97a7e598',
        img: 'App_img_f167336c',
        base__inactive: 'App_base__inactive_0',
        header: 'App_header_648d499b',
        subTitle: 'App_subTitle_413725f4',
        description: 'App_description_8018f8cc',
        modeContainer: 'App_modeContainer_593dbf6b',
        modeLabel: 'App_modeLabel_beab2506',
        modeDescription: 'App_modeDescription_54d4fd4c',
        performance: 'App_performance_414926ee',
        performanceIcon: 'App_performanceIcon_6b1ac9c2',
        base__medium: 'App_base__medium_0',
        base__high: 'App_base__high_0',
        performanceTitle: 'App_performanceTitle_7afbd784',
        performanceText: 'App_performanceText_380aef3c',
        separator: 'App_separator_bad28223',
        timerStatus: 'App_timerStatus_a52e51dd',
    },
    j = s(function () {
        const { model: e } = u(),
            { performanceRisk: t, time: s, modeState: n } = e.root.get(),
            r = 'inactive' === n ? o.cooldown : o.accent,
            { backgroundImage: d, description: m, subTitle: _ } = e.computes.settings();
        return a.jsxs('div', {
            className: i(f.base, f[`base__${t}`], f[`base__${n}`]),
            children: [
                a.jsx('div', { className: f.img, style: { backgroundImage: `url(${d})` } }),
                a.jsx('div', {
                    className: f.header,
                    children: R.strings.battle_royale_extention.tooltip.banner.title(),
                }),
                _ && a.jsx('div', { className: f.subTitle, children: _ }),
                a.jsx('div', { className: f.description, children: a.jsx(c, { text: m }) }),
                a.jsxs('div', {
                    className: f.modeContainer,
                    children: [
                        a.jsx('div', {
                            className: f.modeLabel,
                            children: R.strings.battle_royale_extention.tooltip.banner.mode.label(),
                        }),
                        a.jsx('div', {
                            className: f.modeDescription,
                            children: R.strings.battle_royale_extention.tooltip.banner.mode.description(),
                        }),
                    ],
                }),
                t !== x.Low &&
                    a.jsxs('div', {
                        className: f.performance,
                        children: [
                            a.jsx('div', { className: f.performanceIcon }),
                            a.jsx('div', {
                                className: f.performanceTitle,
                                children: `${R.strings.battle_royale_extention.tooltip.banner.performanceRisk.title.$dyn(t)}`,
                            }),
                            a.jsx('div', {
                                className: f.performanceText,
                                children: a.jsx(c, {
                                    text: `${R.strings.battle_royale_extention.tooltip.banner.performanceRisk.description.$dyn(t)}`,
                                }),
                            }),
                        ],
                    }),
                a.jsx('div', { className: f.separator }),
                a.jsx(c, {
                    text: `${R.strings.battle_royale_extention.tooltip.banner.timer.text.$dyn(r)}`,
                    binding: { timer: a.jsx(l, { size: p.x24x24, type: r, start: s }) },
                    classMix: f.timerStatus,
                }),
            ],
        });
    });
d(
    a.jsx(m, {
        children: a.jsx(g, { children: a.jsx(_, { children: a.jsx(_.Decorator, { children: a.jsx(j, {}) }) }) }),
    }),
);
