import { j as e, _ as t } from '../../../../chunks/vendor.js';
import { i as s, O as a, n as o, aU as r, r as l, U as p, bs as c } from '../../../../chunks/lib.js';
import { B as n } from '../../../../chunks/battle_type_selector_view_model.js';
/* empty css                        */ const [i, d] = s()((e) => {
    const t = e.observableModel.primitives(['params', 'type']);
    return {
        type: t.type,
        computes: {
            params: a.primitive(function (e) {
                return e(t.params.get());
            }),
        },
    };
}, o);
const b = 'App_9dfce3f0',
    m = 'App_header_7064cb34',
    u = 'App_description_f773cb9c',
    _ = 'App_bonusContainer_930158dc',
    j = 'App_separator_649b3a29',
    x = 'App_bonusDescriptionContainer_feacc542',
    h = 'App_bonusIcon_9d371a74',
    y = 'App_bonusDescription_6df0c4bd',
    v = 'App_bonusHeader_4ba45cb1',
    f = 'App_bonusValue_34fac843',
    A = 'App_bonusText_1072bf2a',
    N =
        ((I = (() => {
            let e;
            const s = (s, a) => {
                var o, r;
                return (
                    !1 ===
                        ((e) =>
                            'object' == typeof e &&
                            null !== e &&
                            ((e) => 'solo' === e.tabId || 'platoon' === e.tabId || 'team' === e.tabId)(e))(s) &&
                        ((e = a),
                        (r = '$input'),
                        ((('object' == typeof (o = s) && null !== o) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: r + '',
                                    expected: 'BattleSelectorParms',
                                    value: o,
                                },
                                e,
                            )) &&
                            ((s, a, o = !0) =>
                                'solo' === s.tabId ||
                                'platoon' === s.tabId ||
                                'team' === s.tabId ||
                                t(
                                    o,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: a + '.tabId',
                                        expected: '("platoon" | "solo" | "team")',
                                        value: s.tabId,
                                    },
                                    e,
                                ))(o, r + '', !0)) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: r + '',
                                    expected: 'BattleSelectorParms',
                                    value: o,
                                },
                                e,
                            )),
                    s
                );
            };
            return (e, t) => s(JSON.parse(e), t);
        })()),
        function () {
            return d().model.computes.params(I);
        });
var I;
function S() {
    const { tabId: t } = N(),
        s = R.strings.battle_royale.tooltip.battleTypeSelector.bonus();
    return e.jsxs('div', {
        className: b,
        children: [
            e.jsx('div', {
                className: m,
                children: `${R.strings.battle_royale.tooltip.battleTypeSelector.header.$dyn(t)}`,
            }),
            e.jsx('div', {
                className: u,
                children: e.jsx(r, {
                    split: !0,
                    text: `${R.strings.battle_royale.tooltip.battleTypeSelector.description.$dyn(t)}`,
                }),
            }),
            t !== n.Solo &&
                e.jsxs('div', {
                    className: _,
                    children: [
                        e.jsx('div', { className: j }),
                        e.jsxs('div', {
                            className: x,
                            children: [
                                e.jsx('div', { className: h }),
                                e.jsxs('div', {
                                    className: y,
                                    children: [
                                        e.jsx('div', {
                                            className: v,
                                            children: R.strings.battle_royale.tooltip.battleTypeSelector.bonusTitle(),
                                        }),
                                        e.jsx(r, {
                                            text: R.strings.battle_royale.tooltip.battleTypeSelector.bonusDescription.experience(),
                                            params: { experience: e.jsx('span', { className: f, children: s }) },
                                            className: A,
                                        }),
                                        e.jsx(r, {
                                            text: R.strings.battle_royale.tooltip.battleTypeSelector.bonusDescription.credits(),
                                            params: { credits: e.jsx('span', { className: f, children: s }) },
                                            className: A,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
l(
    e.jsx(p, {
        children: e.jsx(i, { children: e.jsx(c, { children: e.jsx(c.Decorator, { children: e.jsx(S, {}) }) }) }),
    }),
);
