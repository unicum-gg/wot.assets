import { r as e, q as s, R as a, j as t } from '../../../chunks/vendor.js';
import { i as r, t as n, r as l, j as i, v as m, w as o, x as p, k as c, U as u } from '../../../chunks/lib.js';
/* empty css                    */ const [d, f] = r()(
        ({ observableModel: e }) => ({ ...{ ...e.primitives(['petNameID', 'hasUpdate']) } }),
        n,
    ),
    h = 'App_d52abf23',
    j = 'App_name_f23ce584',
    b = 'App_bubble_14dbfc23',
    _ = l.resolve('strings'),
    x = s(function () {
        const s = a.useRef(null),
            { model: r } = f(),
            n = r.petNameID.get(),
            l = r.hasUpdate.get(),
            c = e.useCallback(() => {
                const e = s.current;
                if (!e) return;
                const a = e.scrollWidth,
                    t = e.scrollHeight;
                i(a, t);
            }, [s]);
        var u, d;
        return (
            (u = c),
            (d = []),
            e.useEffect(() => {
                let e,
                    s = null;
                return (
                    (s = requestAnimationFrame(() => {
                        s = requestAnimationFrame(() => {
                            s = requestAnimationFrame(() => {
                                s = requestAnimationFrame(() => {
                                    ((s = null), (e = u()));
                                });
                            });
                        });
                    })),
                    () => {
                        ('function' == typeof e && e(), null !== s && cancelAnimationFrame(s));
                    }
                );
            }, [u, ...d]),
            t.jsx('div', {
                ref: s,
                className: h,
                children: t.jsxs('div', {
                    className: j,
                    children: [
                        0 === n
                            ? t.jsx(m, { path: 'pet_system.petHouseMarker.default' })
                            : t.jsx(m, {
                                  path: 'pet_system.petHouseMarker.pet',
                                  params: {
                                      petName: _.readOr(`pet_names.petName_${n}`, () =>
                                          _.readOrEmpty('pet_names.petName_default'),
                                      ),
                                  },
                              }),
                        t.jsx(o.Root, { className: b, hidden: !l, children: t.jsx(o.Icon, { type: p.bubble }) }),
                    ],
                }),
            })
        );
    });
c(t.jsx(u, { children: t.jsx(d, { children: t.jsx(x, {}) }) }));
