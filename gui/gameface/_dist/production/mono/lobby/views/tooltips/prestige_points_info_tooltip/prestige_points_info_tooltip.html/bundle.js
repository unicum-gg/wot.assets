import { j as s, T as i } from '../../../../chunks/vendor.js';
import { e as o, r as t, U as e } from '../../../../chunks/lib.js';
/* empty css                        */ const r = 'TooltipDecorator_decorator_81525906',
    l = 'TooltipDecorator_decoratorInner_11d8e15d';
function n({ children: t, classNames: e }) {
    return s.jsx(o, {
        children: s.jsx('div', {
            className: i(r, e?.decoratorInner),
            children: s.jsx('div', { className: i(l, e?.decoratorInner), children: t }),
        }),
    });
}
const p = 'App_c6f34e00',
    c = 'App_header_775ebd33',
    d = 'App_icon_9a379f5a',
    a = 'App_divider_8b5ac59e',
    _ = 'App_bulletLine_aa4edbb',
    h = 'App_bullet_581f55cf',
    j = () =>
        s.jsxs('div', {
            className: p,
            children: [
                s.jsxs('div', {
                    className: c,
                    children: [
                        s.jsx('div', { className: d }),
                        s.jsx('div', {
                            children: R.strings.comp7_light.pbs.tooltip.prestige_points_info_tooltip.header(),
                        }),
                    ],
                }),
                s.jsx('div', { className: a }),
                s.jsx('div', { children: R.strings.comp7_light.pbs.tooltip.prestige_points_info_tooltip.listHeader() }),
                R.strings.comp7_light.pbs.tooltip.prestige_points_info_tooltip
                    .listContent()
                    .split('\n')
                    .map((i) =>
                        s.jsxs(
                            'div',
                            {
                                className: _,
                                children: [
                                    s.jsx('div', {
                                        className: h,
                                        children:
                                            R.strings.comp7_light.pbs.tooltip.prestige_points_info_tooltip.bullet(),
                                    }),
                                    s.jsx('div', { children: i }),
                                ],
                            },
                            i,
                        ),
                    ),
                s.jsx('div', { children: R.strings.comp7_light.pbs.tooltip.prestige_points_info_tooltip.footer() }),
            ],
        });
t(s.jsx(e, { children: s.jsx(n, { children: s.jsx(j, {}) }) }));
