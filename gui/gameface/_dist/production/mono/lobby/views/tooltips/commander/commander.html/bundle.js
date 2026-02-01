import { v as e, j as a, _ as r } from '../../../../chunks/vendor.js';
import { i as s, a as t, n, r as o, aK as m, ay as c, ax as i } from '../../../../chunks/lib.js';
const [p, d] = s()((e) => {
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
    y = 'App_description_1072bf2a',
    _ = o.resolve('strings'),
    x =
        ((N = (() => {
            let e;
            const a = (a, s) => {
                var t, n;
                return (
                    !1 ===
                        ((e) => 'object' == typeof e && null !== e && ((e) => 'string' == typeof e.commanderNation)(e))(
                            a,
                        ) &&
                        ((e = s),
                        (n = '$input'),
                        ((('object' == typeof (t = a) && null !== t) ||
                            r(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: n + '',
                                    expected: 'CommanderParams',
                                    value: t,
                                },
                                e,
                            )) &&
                            ((a, s, t = !0) =>
                                'string' == typeof a.commanderNation ||
                                r(
                                    t,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: s + '.commanderNation',
                                        expected: 'string',
                                        value: a.commanderNation,
                                    },
                                    e,
                                ))(t, n + '', !0)) ||
                            r(
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
            return (e, r) => a(JSON.parse(e), r);
        })()),
        function () {
            return d().model.computes.params(N);
        });
var N;
const b = e(function () {
    const { commanderNation: e } = x();
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
                                children: _.readOrEmpty('battle_royale.commanderInfo.commonRank'),
                            }),
                        ],
                    }),
                    a.jsx('div', {
                        className: h,
                        children: _.readOrEmpty(`battle_royale.commanderInfo.fullName.${e}`),
                    }),
                    a.jsx('div', { className: v }),
                    a.jsx('div', {
                        className: y,
                        children: _.readOrEmpty(`battle_royale.commanderInfo.description.${e}`),
                    }),
                ],
            }),
        }),
    });
});
c(a.jsx(i, { children: a.jsx(p, { children: a.jsx(b, {}) }) }));
