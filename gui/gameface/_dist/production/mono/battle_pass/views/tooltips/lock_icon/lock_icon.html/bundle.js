import { v as s, j as e } from '../../../../chunks/vendor.js';
import { i as o, N as t, bY as a, J as d, U as i, d as r } from '../../../../chunks/lib.js';
const [c, n] = o()(({ observableModel: s }) => ({ ...{ root: s.object() } }), t),
    l = 'Content_59739b4',
    j = 'Content_title_14ef9ac4',
    h = 'Content_description1_ee3d8a6c',
    m = 'Content_description2_54cf7dba',
    b = R.strings.battle_pass.tooltips.iconLock,
    x = s(() => {
        const { model: s } = n(),
            { isHoliday: o } = s.root.get();
        return e.jsxs('div', {
            className: l,
            children: [
                e.jsx('div', { className: j, children: b.title() }),
                e.jsx('div', { className: h, children: o ? b.holidayDescr1() : b.descr1() }),
                e.jsx('div', { className: m, children: o ? b.holidayDescr2() : b.descr2() }),
            ],
        });
    }),
    _ = () => e.jsx(a, { children: e.jsx(a.Decorator, { children: e.jsx(x, {}) }) });
r(new d().add(i).addWithProps(c, {}).render(e.jsx(_, {})));
