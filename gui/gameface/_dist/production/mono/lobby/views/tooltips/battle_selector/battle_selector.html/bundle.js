import { j as e, _ as t } from '../../../../chunks/vendor.js';
import { i as a, a as s, n as r, r as o, aK as l, ap as p, ay as c, ax as n } from '../../../../chunks/lib.js';
import { B as i } from '../../../../chunks/battle_type_selector_view_model.js';
const [d, m] = a()((e) => {
    const t = e.observableModel.primitives(['params', 'type']);
    return {
        type: t.type,
        computes: {
            params: s.primitive(function (e) {
                return e(t.params.get());
            }),
        },
    };
}, r);
const b = 'App_9dfce3f0',
    u = 'App_header_7064cb34',
    _ = 'App_description_f773cb9c',
    x = 'App_bonusContainer_930158dc',
    j = 'App_separator_649b3a29',
    h = 'App_bonusDescriptionContainer_feacc542',
    y = 'App_bonusIcon_9d371a74',
    v = 'App_bonusDescription_6df0c4bd',
    f = 'App_bonusHeader_4ba45cb1',
    A = 'App_bonusValue_34fac843',
    N = 'App_bonusText_1072bf2a',
    I = o.resolve('strings'),
    S = R.strings.battle_royale.tooltip.battleTypeSelector.bonusDescription,
    T =
        ((O = (() => {
            let e;
            const a = (a, s) => {
                var r, o;
                return (
                    !1 ===
                        ((e) =>
                            'object' == typeof e &&
                            null !== e &&
                            ((e) => 'solo' === e.tabId || 'platoon' === e.tabId || 'team' === e.tabId)(e))(a) &&
                        ((e = s),
                        (o = '$input'),
                        ((('object' == typeof (r = a) && null !== r) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: o + '',
                                    expected: 'BattleSelectorParms',
                                    value: r,
                                },
                                e,
                            )) &&
                            ((a, s, r = !0) =>
                                'solo' === a.tabId ||
                                'platoon' === a.tabId ||
                                'team' === a.tabId ||
                                t(
                                    r,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: s + '.tabId',
                                        expected: '("platoon" | "solo" | "team")',
                                        value: a.tabId,
                                    },
                                    e,
                                ))(r, o + '', !0)) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: o + '',
                                    expected: 'BattleSelectorParms',
                                    value: r,
                                },
                                e,
                            )),
                    a
                );
            };
            return (e, t) => a(JSON.parse(e), t);
        })()),
        function () {
            return m().model.computes.params(O);
        });
var O;
function P() {
    const { tabId: t } = T(),
        a = I.readOrEmpty('battle_royale.tooltip.battleTypeSelector.bonus');
    return e.jsx(l, {
        children: e.jsx(l.Decorator, {
            children: e.jsxs('div', {
                className: b,
                children: [
                    e.jsx('div', {
                        className: u,
                        children: I.readOrEmpty(`battle_royale.tooltip.battleTypeSelector.header.${t}`),
                    }),
                    e.jsx('div', {
                        className: _,
                        children: e.jsx(p, {
                            split: !0,
                            text: I.readOrEmpty(`battle_royale.tooltip.battleTypeSelector.description.${t}`),
                        }),
                    }),
                    t !== i.Solo &&
                        e.jsxs('div', {
                            className: x,
                            children: [
                                e.jsx('div', { className: j }),
                                e.jsxs('div', {
                                    className: h,
                                    children: [
                                        e.jsx('div', { className: y }),
                                        e.jsxs('div', {
                                            className: v,
                                            children: [
                                                e.jsx('div', {
                                                    className: f,
                                                    children: I.readOrEmpty(
                                                        'battle_royale.tooltip.battleTypeSelector.bonusTitle',
                                                    ),
                                                }),
                                                e.jsx(p, {
                                                    text: S.experience(),
                                                    params: {
                                                        experience: e.jsx('span', { className: A, children: a }),
                                                    },
                                                    className: N,
                                                }),
                                                e.jsx(p, {
                                                    text: S.credits(),
                                                    params: { credits: e.jsx('span', { className: A, children: a }) },
                                                    className: N,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
c(e.jsx(n, { children: e.jsx(d, { children: e.jsx(P, {}) }) }));
