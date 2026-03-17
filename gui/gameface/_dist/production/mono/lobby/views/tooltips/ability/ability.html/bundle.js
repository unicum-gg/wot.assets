import { v as e, j as t, _ as s } from '../../../../chunks/vendor.js';
import { i as a, O as o, n as r, _ as n, bs as c, aU as i, r as p, U as d } from '../../../../chunks/lib.js';
import { p as l } from '../../../../chunks/common.js';
/* empty css                        */ const [m, u] = a()((e) => {
    const t = e.observableModel.primitives(['params', 'type']);
    return {
        type: t.type,
        computes: {
            params: o.primitive(function (e) {
                return e(t.params.get());
            }),
        },
    };
}, r);
const h = 'App_21e3a147',
    y = 'App_header_62566856',
    j = 'App_icon_24de08c2',
    x = 'App_headerContainer_b23d7c80',
    f = 'App_title_5ec15df',
    g = 'App_cooldown_1072bf2a',
    v = 'App_content_80741629',
    _ = 'App_container_58b78fd8',
    b = 'App_description_fecd9a89',
    A = R.images.gui.maps.icons.battleRoyale.artefact.c_80x80,
    N =
        ((P = (() => {
            let e;
            const t = (t, a) => {
                var o, r;
                return (
                    !1 ===
                        ((e) =>
                            'object' == typeof e &&
                            null !== e &&
                            ((e) =>
                                'string' == typeof e.title &&
                                'string' == typeof e.iconName &&
                                'number' == typeof e.cooldownSeconds &&
                                'string' == typeof e.description)(e))(t) &&
                        ((e = a),
                        (r = '$input'),
                        ((('object' == typeof (o = t) && null !== o) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: r + '',
                                    expected: 'AbilityParams',
                                    value: o,
                                },
                                e,
                            )) &&
                            ((t, a, o = !0) =>
                                ('string' == typeof t.title ||
                                    s(
                                        o,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.title',
                                            expected: 'string',
                                            value: t.title,
                                        },
                                        e,
                                    )) &&
                                ('string' == typeof t.iconName ||
                                    s(
                                        o,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.iconName',
                                            expected: 'string',
                                            value: t.iconName,
                                        },
                                        e,
                                    )) &&
                                ('number' == typeof t.cooldownSeconds ||
                                    s(
                                        o,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.cooldownSeconds',
                                            expected: 'number',
                                            value: t.cooldownSeconds,
                                        },
                                        e,
                                    )) &&
                                ('string' == typeof t.description ||
                                    s(
                                        o,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.description',
                                            expected: 'string',
                                            value: t.description,
                                        },
                                        e,
                                    )))(o, r + '', !0)) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: r + '',
                                    expected: 'AbilityParams',
                                    value: o,
                                },
                                e,
                            )),
                    t
                );
            };
            return (e, s) => t(JSON.parse(e), s);
        })()),
        function () {
            return u().model.computes.params(P);
        });
var P;
const w = n.resolve('strings'),
    S = e(function () {
        const { title: e, iconName: s, cooldownSeconds: a, description: o } = N(),
            r = l(w.readOrEmpty('tooltips.battle_royale.hangar.tankSetupPanel.ability.cooldownTime')),
            n = l(o);
        return t.jsx(c, {
            children: t.jsx(c.Decorator, {
                children: t.jsx('div', {
                    className: h,
                    children: t.jsxs('div', {
                        className: _,
                        children: [
                            t.jsxs('div', {
                                className: y,
                                children: [
                                    t.jsx('div', { className: j, style: { backgroundImage: `url(${A.$dyn(s)})` } }),
                                    t.jsxs('div', {
                                        className: x,
                                        children: [
                                            t.jsx('div', { className: f, children: e }),
                                            r.map(({ text: e, params: s }) =>
                                                t.jsx(
                                                    i,
                                                    {
                                                        upgradeLegacy: !0,
                                                        text: e,
                                                        params: { ...s, cooldown: a },
                                                        className: g,
                                                    },
                                                    e,
                                                ),
                                            ),
                                        ],
                                    }),
                                ],
                            }),
                            t.jsx('div', {
                                className: v,
                                children: n.map(({ text: e, params: s }) =>
                                    t.jsx(
                                        i,
                                        { upgradeLegacy: !0, text: e, params: { ...s }, className: b, split: !0 },
                                        e,
                                    ),
                                ),
                            }),
                        ],
                    }),
                }),
            }),
        });
    });
p(t.jsxs(d, { children: [t.jsx(m, { children: t.jsx(S, {}) }), ','] }));
