import { p as t, j as e } from '../../../../chunks/vendor.js';
import { i as r, n, b as a, d as s, r as i, E as o } from '../../../../chunks/lib.js';
/* empty css                       */ var p = ((t) => (
    (t.PM3EntryPointTeaser = 'PM3EntryPointTeaser'),
    (t.PM3EntryPointOperation1 = 'PM3EntryPointOperation1'),
    (t.PM3EntryPointOperation2 = 'PM3EntryPointOperation2'),
    (t.PM3EntryPointOperation3 = 'PM3EntryPointOperation3'),
    t
))(p || {});
const [l, d] = r()(({ observableModel: t }) => ({ ...t.primitives(['type']) }), n),
    c = 'App_a3d8287e',
    P = 'App_card_e2802760',
    m = 'App_title_2810d51e',
    y = 'App_subtitle_b52dd7b8',
    E = 'App_text_6523a44e',
    v = 'hangar_event_banners.event',
    b = a.resolve('images'),
    h = a.resolve('strings'),
    j = t(function () {
        const { model: t } = d(),
            r = t.type.get(),
            n = h.readOrEmpty(`${v}.${r}.title`),
            a =
                r === p.PM3EntryPointTeaser
                    ? h.readOrEmpty(`${v}.PM3EntryPointTeaser.tooltip.subtitle`)
                    : h.readOrEmpty(`${v}.PM3EntryPointOperation.tooltip.subtitle`),
            i = b.readOrEmpty(`hangarEventBanners.event.${r}.bg_tooltip`);
        return e.jsxs('div', {
            className: c,
            children: [
                e.jsxs('div', {
                    className: P,
                    style: { background: `url(${i}) no-repeat center / cover` },
                    children: [
                        e.jsx('div', { className: m, children: n }),
                        e.jsx('div', { className: y, children: a }),
                    ],
                }),
                r === p.PM3EntryPointTeaser &&
                    e.jsx(s, { className: E, path: `${v}.${r}.tooltip.text`, params: { campaign_name: n } }),
            ],
        });
    });
i(e.jsx(l, { children: e.jsx(o, { children: e.jsx(o.Decorator, { children: e.jsx(j, {}) }) }) }));
