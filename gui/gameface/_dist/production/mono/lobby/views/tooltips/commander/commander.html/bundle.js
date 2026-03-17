import { v as e, j as a, _ as s } from '../../../../chunks/vendor.js';
import { i as r, O as t, n, _ as o, bs as m, r as c, U as i } from '../../../../chunks/lib.js';
/* empty css                        */ const [p, d] = r()((e) => {
    const a = e.observableModel.primitives(['params', 'type']);
    return {
        type: a.type,
        computes: {
            params: t.primitive(function (e) {
                return e(a.params.get());
            }),
        },
    };
}, n);
const l = 'App_11090d07',
    j = 'App_headerContainer_c897879f',
    u = 'App_icon_961e61e2',
    f = 'App_specialtyName_1072bf2a',
    h = 'App_commanderName_d9ad769f',
    v = 'App_separator_f627df4c',
    _ = 'App_description_1072bf2a',
    y = o.resolve('strings'),
    N =
        ((x = (() => {
            let e;
            const a = (a, r) => {
                var t, n;
                return (
                    !1 ===
                        ((e) => 'object' == typeof e && null !== e && ((e) => 'string' == typeof e.commanderNation)(e))(
                            a,
                        ) &&
                        ((e = r),
                        (n = '$input'),
                        ((('object' == typeof (t = a) && null !== t) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: n + '',
                                    expected: 'CommanderParams',
                                    value: t,
                                },
                                e,
                            )) &&
                            ((a, r, t = !0) =>
                                'string' == typeof a.commanderNation ||
                                s(
                                    t,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: r + '.commanderNation',
                                        expected: 'string',
                                        value: a.commanderNation,
                                    },
                                    e,
                                ))(t, n + '', !0)) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: n + '',
                                    expected: 'CommanderParams',
                                    value: t,
                                },
                                e,
                            )),
                    a
                );
            };
            return (e, s) => a(JSON.parse(e), s);
        })()),
        function () {
            return d().model.computes.params(x);
        });
var x;
const b = e(function () {
    const { commanderNation: e } = N();
    return a.jsx(m, {
        children: a.jsx(m.Decorator, {
            children: a.jsxs('div', {
                className: l,
                children: [
                    a.jsxs('div', {
                        className: j,
                        children: [
                            a.jsx('div', { className: u }),
                            a.jsx('div', {
                                className: f,
                                children: y.readOrEmpty('battle_royale.commanderInfo.commonRank'),
                            }),
                        ],
                    }),
                    a.jsx('div', {
                        className: h,
                        children: y.readOrEmpty(`battle_royale.commanderInfo.fullName.${e}`),
                    }),
                    a.jsx('div', { className: v }),
                    a.jsx('div', {
                        className: _,
                        children: y.readOrEmpty(`battle_royale.commanderInfo.description.${e}`),
                    }),
                ],
            }),
        }),
    });
});
c(a.jsx(i, { children: a.jsx(p, { children: a.jsx(b, {}) }) }));
