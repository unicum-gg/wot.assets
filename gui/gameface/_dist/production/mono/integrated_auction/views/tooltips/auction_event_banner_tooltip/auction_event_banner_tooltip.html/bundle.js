import { h as e, j as t, e as n } from '../../../../chunks/vendor.js';
import { i as s, n as a, r, T as i, a as o, b as c } from '../../../../chunks/lib.js';
const [l, d] = s()(({ observableModel: e }) => ({ ...{ root: e.object() } }), a),
    m = 'TimeInfo_50670ca',
    _ = 'TimeInfo_label_1737ef0d',
    p = 'TimeInfo_timeLabel_9d8fe702',
    v = 'TimeInfo_timeIcon_35f6c1e8',
    b = r.resolve('strings');
const g = e(function () {
        const { model: e } = d(),
            { timerValue: n, isAvailable: s } = e.root.get(),
            a = s
                ? b.readOrEmpty('hangar_event_banners.event.IntegratedAuctionEntryPont.timer.progress')
                : b.readOrEmpty('hangar_event_banners.event.IntegratedAuctionEntryPont.timer.inactive');
        return t.jsxs('div', {
            className: m,
            children: [
                t.jsx('div', { className: _, children: a }),
                t.jsx(i, { start: n, type: s ? i.type.accent : i.type.cooldown, classNames: { icon: v, label: p } }),
            ],
        });
    }),
    f = { base: 'Divider_558be4f4' };
function j({ className: e }) {
    return t.jsx('div', { className: n(f.base, e) });
}
const h = 'App_9836d87a',
    u = 'App_image_89e6469b',
    x = 'App_base__disabled_0',
    y = 'App_title_28652cf1',
    A = 'App_message_774c9b45',
    E = 'App_divider_3c41f31f',
    I = 'App_footer_e144caef',
    N = r.resolve('images'),
    O = r.resolve('strings');
const P = e(function () {
    const { model: e } = d(),
        { isAvailable: s } = e.root.get();
    return t.jsxs('div', {
        className: n(h, !s && x),
        children: [
            t.jsx('div', {
                className: u,
                style: {
                    backgroundImage: `url(${N.readOrEmpty('hangarEventBanners.event.IntegratedAuctionEntryPont.bg_tooltip')})`,
                },
            }),
            t.jsx('div', {
                className: y,
                children: O.readOrEmpty('hangar_event_banners.event.IntegratedAuctionEntryPont.tooltip.title'),
            }),
            t.jsx('div', {
                className: A,
                children: O.readOrEmpty('hangar_event_banners.event.IntegratedAuctionEntryPont.tooltip.description'),
            }),
            t.jsx(j, { className: E }),
            t.jsx('div', { className: I, children: t.jsx(g, {}) }),
        ],
    });
});
o(t.jsx(l, { children: t.jsx(c, { children: t.jsx(P, {}) }) }));
