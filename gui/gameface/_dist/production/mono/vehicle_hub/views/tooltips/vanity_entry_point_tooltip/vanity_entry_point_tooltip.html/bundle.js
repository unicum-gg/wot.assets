import { z as e, j as s, _ as t } from '../../../../chunks/vendor.js';
import { i as a, c as r, n, r as o, aM as i, I as p, aK as c } from '../../../../chunks/lib.js';
const [l, d] = a()((e) => {
    const s = e.observableModel.primitives(['params', 'type']);
    return {
        type: s.type,
        computes: {
            params: r.primitive(function (e) {
                return e(s.params.get());
            }),
        },
    };
}, n);
const m = 'App_19d66a47',
    u = 'App_title_4e57dc26',
    h = 'App_text_d550cf1f',
    j = 'App_statusInfo_f64a6532',
    v = 'App_image_7518e11e',
    y = 'App_description_4c81e48b',
    f =
        ((x = (() => {
            let e;
            const s = (s, a) => {
                var r, n;
                return (
                    !1 ===
                        ((e) => 'object' == typeof e && null !== e && ((e) => 'boolean' == typeof e.isUnlocked)(e))(
                            s,
                        ) &&
                        ((e = a),
                        (n = '$input'),
                        ((('object' == typeof (r = s) && null !== r) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: n + '',
                                    expected: 'EntryPointParams',
                                    value: r,
                                },
                                e,
                            )) &&
                            ((s, a, r = !0) =>
                                'boolean' == typeof s.isUnlocked ||
                                t(
                                    r,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: a + '.isUnlocked',
                                        expected: 'boolean',
                                        value: s.isUnlocked,
                                    },
                                    e,
                                ))(r, n + '', !0)) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: n + '',
                                    expected: 'EntryPointParams',
                                    value: r,
                                },
                                e,
                            )),
                    s
                );
            };
            return (e, t) => s(JSON.parse(e), t);
        })()),
        function () {
            return d().model.computes.params(x);
        });
var x;
const _ = o.resolve('strings'),
    b = 'veh_skill_tree.tooltips.vanityEntryPoint',
    k = e(function () {
        const { isUnlocked: e } = f();
        return s.jsx(i, {
            children: s.jsx(i.Decorator, {
                children: s.jsxs('div', {
                    className: m,
                    children: [
                        s.jsx('div', { className: u, children: _.readOrEmpty(`${b}.title`) }),
                        s.jsx('div', { className: h, children: _.readOrEmpty(`${b}.text`) }),
                        !e &&
                            s.jsxs('div', {
                                className: j,
                                children: [
                                    s.jsx(p, { className: v, path: 'skillTree.tree.tooltips.statusInfo' }),
                                    s.jsx('div', { className: y, children: _.readOrEmpty(`${b}.statusInfo`) }),
                                ],
                            }),
                    ],
                }),
            }),
        });
    });
c(s.jsx(l, { children: s.jsx(k, {}) }));
