import { l as s, m as e, j as a } from '../../../../chunks/vendor.js';
import { i as r, K as o, L as t, F as i, r as c } from '../../../../chunks/lib.js';
const [d, l] = r()(({ externalModel: a, readByPath: r }) => {
        const o = () => JSON.parse(r('payload')),
            t = { tooltipArgs: s.box(o()) };
        return (
            a.subscribe(
                e(() => t.tooltipArgs.set(o())),
                'payload',
            ),
            { ...t }
        );
    }, o),
    p = 'App_39cb063c',
    n = 'App_header_846f0386',
    m = 'App_description_d873f135',
    x = () => {
        const { model: s } = l(),
            { header: e, body: r, bindings: o } = s.tooltipArgs.get();
        return e || r
            ? a.jsx(t, {
                  children: a.jsx(t.Decorator, {
                      children: a.jsxs('div', {
                          className: p,
                          children: [
                              e && a.jsx(i, { className: n, text: e, params: o, upgradeLegacy: !0 }),
                              r && a.jsx(i, { className: m, text: r, params: o, upgradeLegacy: !0 }),
                          ],
                      }),
                  }),
              })
            : (viewEnv.resizeViewRem(1, 1), null);
    };
c(a.jsx(d, { children: a.jsx(x, {}) }));
