import { v as e, j as a, f as t } from '../../../../chunks/vendor.js';
import {
    i as r,
    n as s,
    r as i,
    aL as o,
    aK as n,
    ap as p,
    a2 as c,
    ae as d,
    ay as m,
    ax as l,
} from '../../../../chunks/lib.js';
var _ = ((e) => ((e.Low = 'low'), (e.Medium = 'medium'), (e.High = 'high'), e))(_ || {});
const [b, x] = r()(({ observableModel: e }) => ({ root: e.object() }), s),
    f = {
        base: 'App_97a7e598',
        img: 'App_img_98339fca',
        base__inactive: 'App_base__inactive_0',
        header: 'App_header_648d499b',
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
    h = i.resolve('strings'),
    j = e(function () {
        const { model: e } = x(),
            { performanceRisk: r, time: s, modeState: i } = e.root.get(),
            m = 'inactive' === i ? o.cooldown : o.accent;
        return a.jsx(n, {
            children: a.jsx(n.Decorator, {
                children: a.jsxs('div', {
                    className: t(f.base, f[`base__${r}`], f[`base__${i}`]),
                    children: [
                        a.jsx('div', { className: f.img }),
                        a.jsx('div', {
                            className: f.header,
                            children: h.readOrEmpty('battle_royale_extention.tooltip.banner.title'),
                        }),
                        a.jsx('div', {
                            className: f.description,
                            children: a.jsx(p, {
                                text: h.readOrEmpty('battle_royale_extention.tooltip.banner.description'),
                                split: !0,
                            }),
                        }),
                        a.jsxs('div', {
                            className: f.modeContainer,
                            children: [
                                a.jsx('div', {
                                    className: f.modeLabel,
                                    children: h.readOrEmpty('battle_royale_extention.tooltip.banner.mode.label'),
                                }),
                                a.jsx('div', {
                                    className: f.modeDescription,
                                    children: h.readOrEmpty('battle_royale_extention.tooltip.banner.mode.description'),
                                }),
                            ],
                        }),
                        r !== _.Low &&
                            a.jsxs('div', {
                                className: f.performance,
                                children: [
                                    a.jsx('div', { className: f.performanceIcon }),
                                    a.jsx('div', {
                                        className: f.performanceTitle,
                                        children: h.readOrEmpty(
                                            `battle_royale_extention.tooltip.banner.performanceRisk.title.${r}`,
                                        ),
                                    }),
                                    a.jsx('div', {
                                        className: f.performanceText,
                                        children: a.jsx(p, {
                                            text: h.readOrEmpty(
                                                `battle_royale_extention.tooltip.banner.performanceRisk.description.${r}`,
                                            ),
                                            split: !0,
                                        }),
                                    }),
                                ],
                            }),
                        a.jsx('div', { className: f.separator }),
                        a.jsx(p, {
                            text: h.readOrEmpty(`battle_royale_extention.tooltip.banner.timer.text.${m}`),
                            params: { timer: a.jsx(c, { size: d.x24x24, type: m, start: s }) },
                            className: f.timerStatus,
                        }),
                    ],
                }),
            }),
        });
    });
m(a.jsx(l, { children: a.jsx(b, { children: a.jsx(j, {}) }) }));
