import { j as e, E as s } from '../../../../chunks/vendor.js';
import { i as a, a9 as i, E as t, A as n, b2 as o, r, de as l } from '../../../../chunks/lib.js';
var p = ((e) => ((e.LowRisk = 'lowRisk'), (e.MediumRisk = 'mediumRisk'), (e.HighRisk = 'highRisk'), e))(p || {});
const [c, d] = a()(({ observableModel: e }) => ({ root: e.object() }), i),
    _ = {
        root: 'BannerTooltipApp_root_c818429a',
        base: 'BannerTooltipApp_31617020',
        img: 'BannerTooltipApp_img_7d0169ba',
        header: 'BannerTooltipApp_header_c3991247',
        description: 'BannerTooltipApp_description_af5a1d46',
        performance: 'BannerTooltipApp_performance_52854899',
        title: 'BannerTooltipApp_title_5b0c7861',
        base__mediumRisk: 'BannerTooltipApp_base__mediumRisk_c818429a',
        base__highRisk: 'BannerTooltipApp_base__highRisk_c818429a',
        text: 'BannerTooltipApp_text_307b8359',
        icon: 'BannerTooltipApp_icon_6bbab473',
        modeLabel: 'BannerTooltipApp_modeLabel_85f9e3d1',
        callToAction: 'BannerTooltipApp_callToAction_bcaabe',
        dots: 'BannerTooltipApp_dots_e63377b7',
        timerStatus: 'BannerTooltipApp_timerStatus_aa6d036f',
    },
    m = R.strings.last_stand_tooltips.bannerTooltip,
    b = () => {
        const { model: a } = d(),
            { performanceRisk: i, endDate: r, date: l } = a.root.get();
        return e.jsxs('div', {
            className: s(_.base, _[`base__${i}`]),
            children: [
                e.jsx('div', { className: _.img }),
                e.jsx('div', { className: _.header, children: m.header() }),
                e.jsx('div', { className: _.description, children: m.description() }),
                e.jsx(t, {
                    classMix: _.callToAction,
                    text: R.strings.last_stand_tooltips.bannerTooltip.callToAction(),
                    alignContent: n.Center,
                    binding: {
                        mode: e.jsx('div', {
                            className: _.modeLabel,
                            children: R.strings.hangar_event_banners.modeLabel(),
                        }),
                    },
                }),
                i !== p.LowRisk &&
                    e.jsxs('div', {
                        className: _.performance,
                        children: [
                            e.jsx('div', { className: _.icon }),
                            e.jsx('div', { className: _.title, children: m.performanceRisk.title.$dyn(i) }),
                            e.jsx('div', { className: _.text, children: m.performanceRisk.text.$dyn(i) }),
                        ],
                    }),
                e.jsx('div', { className: _.dots }),
                e.jsx(t, {
                    text: R.strings.last_stand_tooltips.bannerTooltip.available(),
                    classMix: _.timerStatus,
                    alignContent: n.Center,
                    justifyContent: n.Center,
                    binding: { timer: e.jsx(o, { size: 'x24x24', type: 'accent', start: r - l }) },
                }),
            ],
        });
    };
r(e.jsx(c, { children: e.jsx(l, { children: e.jsx(l.Decorator, { children: e.jsx(b, {}) }) }) }));
