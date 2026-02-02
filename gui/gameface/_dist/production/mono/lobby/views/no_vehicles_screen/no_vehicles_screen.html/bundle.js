import { j as e, w as s, x as l } from '../../../chunks/vendor.js';
import { i, cT as c, u as o, F as a, r as t } from '../../../chunks/lib.js';
import { a as r, S as n } from '../../../chunks/schedule_subheading.js';
import { g as d } from '../../../chunks/get_roman_levels.js';
/* empty css                     */ import '../../../chunks/use_server_time_polling.js';
const [h, m] = i()(
        ({ observableModel: e }) => ({ root: e.object(), vehicleLevels: e.array('vehicleLevels') }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    _ = 'HowToGetVehicles_3befc43e',
    p = 'HowToGetVehicles_heading_f698099b',
    v = 'HowToGetVehicles_items_9f75d953',
    x = 'HowToGetVehicles_item_1ba81632',
    j = 'HowToGetVehicles_title_62dbf737',
    g = 'HowToGetVehicles_image_616e4275',
    b = ['tasks', 'premium', 'reserves'],
    u = ({ levelsStr: l, className: i }) =>
        e.jsxs('div', {
            className: s(_, i),
            children: [
                e.jsx('div', {
                    className: p,
                    children: c(R.strings.comp7_light.noVehicles.howTo.title(), { levels: l }),
                }),
                e.jsx('div', {
                    className: v,
                    children: b.map((s) =>
                        e.jsxs(
                            'div',
                            {
                                className: x,
                                children: [
                                    e.jsx('div', {
                                        className: g,
                                        style: {
                                            backgroundImage: `url(${R.images.comp7_light.gui.maps.icons.no_vehicles.$dyn(s)})`,
                                        },
                                    }),
                                    e.jsx('div', {
                                        className: j,
                                        children: `${R.strings.comp7_light.noVehicles.howTo.$dyn(s)}`,
                                    }),
                                ],
                            },
                            s,
                        ),
                    ),
                }),
            ],
        }),
    N = 'App_b0b6a04b',
    f = 'App_header_9ff1dc47',
    k = 'App_content_a6634164',
    w = 'App_iconContainer_27ee149e',
    A = 'App_icon_6ec08bc',
    T = 'App_title_3d1094ed',
    V = 'App_divider_278fa8a8',
    $ = 'App_text_51f38cc1',
    G = R.strings.comp7_light.noVehicles,
    H = { context: 'model.scheduleInfo' },
    S = l(() => {
        const { model: s, controls: l } = m(),
            { errorReason: i } = s.root.get();
        o(l.close);
        const c = d(s.vehicleLevels.get(), R.strings.comp7_light.listSeparator());
        return e.jsxs('div', {
            className: N,
            children: [
                e.jsx('div', {
                    className: f,
                    children: e.jsx(r, { options: H, children: e.jsx(n, { hasSeasonName: !1 }) }),
                }),
                e.jsxs('div', {
                    className: k,
                    children: [
                        e.jsx('div', { className: w, children: e.jsx('div', { className: A }) }),
                        e.jsx(a, { text: `${G.title()}`, classMix: T }),
                        e.jsx(a, { text: `${G.text.$dyn(i)}`, binding: { levels: c }, classMix: $ }),
                        e.jsx('div', { className: V }),
                        e.jsx(u, { levelsStr: c }),
                    ],
                }),
            ],
        });
    });
t(e.jsx(h, { children: e.jsx(S, {}) }), { fullScreen: !0 });
