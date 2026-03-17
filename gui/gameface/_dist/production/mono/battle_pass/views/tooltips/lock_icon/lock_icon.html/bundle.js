import { t as s, j as e } from '../../../../chunks/vendor.js';
import { i as o, N as t, b_ as a, J as i, U as r, j as c } from '../../../../chunks/lib.js';
const [d, n] = o()(({ observableModel: s }) => ({ ...{ root: s.object() } }), t),
    l = 'Content_59739b4',
    j = 'Content_title_14ef9ac4',
    h = 'Content_description1_ee3d8a6c',
    m = 'Content_description2_54cf7dba',
    _ = R.strings.battle_pass.tooltips.iconLock,
    b = s(() => {
        const { model: s } = n(),
            { isHoliday: o } = s.root.get();
        return e.jsxs('div', {
            className: l,
            children: [
                e.jsx('div', { className: j, children: _.title() }),
                e.jsx('div', { className: h, children: o ? _.holidayDescr1() : _.descr1() }),
                e.jsx('div', { className: m, children: o ? _.holidayDescr2() : _.descr2() }),
            ],
        });
    }),
    x = () => e.jsx(a, { children: e.jsx(a.Decorator, { children: e.jsx(b, {}) }) });
c(new i().add(r).addWithProps(d, {}).render(e.jsx(x, {})));
