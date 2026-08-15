import { w as s, j as e } from '../../../../chunks/vendor.js';
import { i as o, n as a, F as c, b as d, am as r } from '../../../../chunks/lib.js';
import { D as i } from '../../../../chunks/done_icon.js';
/* empty css                       */ const [n, p] = o('LockedTooltipProvider')(
        ({ observableModel: s }) => ({ root: s.object() }),
        a,
    ),
    l = 'App_c6a8310c',
    t = 'App_image_bbb7df52',
    m = 'App_content_8076e0e',
    j = 'App_header_d7005ac4',
    _ = 'App_description_c141fd3',
    h = 'App_keyWrapper_d028ada8',
    k = 'App_keyIcon_bde9b067',
    x = 'App_footer_4700ed77',
    b = 'App_doneIcon_df8491c8',
    u = 'App_unlocked_6341895b',
    A = s(function () {
        const { model: s } = p(),
            { isUnlocked: o } = s.root.get();
        return e.jsxs('div', {
            className: l,
            children: [
                e.jsx('div', { className: t }),
                e.jsxs('div', {
                    className: m,
                    children: [
                        e.jsx(c, { path: 'R.strings.journey_marathon.lockedTooltip.header', className: j }),
                        e.jsx(c, {
                            split: !0,
                            path: 'R.strings.journey_marathon.lockedTooltip.description',
                            params: {
                                keyIcon: e.jsx('div', { className: h, children: e.jsx('div', { className: k }) }),
                                color: '#ede6d9',
                            },
                            className: _,
                        }),
                        o &&
                            e.jsxs('div', {
                                className: x,
                                children: [
                                    e.jsx(i, { className: b }),
                                    e.jsx(c, {
                                        path: 'R.strings.journey_marathon.lockedTooltip.unlocked',
                                        className: u,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    });
d(e.jsx(n, { children: e.jsx(r, { children: e.jsx(r.Decorator, { children: e.jsx(A, {}) }) }) }), {
    withMedia: !1,
    immediateLayout: !1,
});
