import { v as e, j as s, _ as t } from '../../../../chunks/vendor.js';
import { i as a, h as r, n as o, q as n, ax as i, bs as c, r as l, U as p } from '../../../../chunks/lib.js';
import { p as d } from '../../../../chunks/common.js';
/* empty css                        */ const [m, u] = a()((e) => {
    const s = e.observableModel.primitives(['params', 'type']);
    return {
        type: s.type,
        computes: {
            params: r.primitive(function (e) {
                return e(s.params.get());
            }),
        },
    };
}, o);
const x = 'Content_2a67c3d5',
    j = 'Content_2f46cd49',
    h = 'Content_bg_580b4876',
    b = 'Content_container_f73799e6',
    v = 'Content_title_cc6d6a31',
    _ = 'Content_description_c744435f',
    f = R.strings.battle_royale.tooltips.respawn,
    y =
        ((N = (() => {
            let e;
            const s = (s, a) => {
                var r, o;
                return (
                    !1 ===
                        ((e) =>
                            'object' == typeof e &&
                            null !== e &&
                            ((e) =>
                                'number' == typeof e.platoonTimeToResurrect &&
                                'number' == typeof e.platoonRespawnPeriod &&
                                'number' == typeof e.soloRespawnPeriod)(e))(s) &&
                        ((e = a),
                        (o = '$input'),
                        ((('object' == typeof (r = s) && null !== r) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: o + '',
                                    expected: 'RespawnParams',
                                    value: r,
                                },
                                e,
                            )) &&
                            ((s, a, r = !0) =>
                                ('number' == typeof s.platoonTimeToResurrect ||
                                    t(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.platoonTimeToResurrect',
                                            expected: 'number',
                                            value: s.platoonTimeToResurrect,
                                        },
                                        e,
                                    )) &&
                                ('number' == typeof s.platoonRespawnPeriod ||
                                    t(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.platoonRespawnPeriod',
                                            expected: 'number',
                                            value: s.platoonRespawnPeriod,
                                        },
                                        e,
                                    )) &&
                                ('number' == typeof s.soloRespawnPeriod ||
                                    t(
                                        r,
                                        {
                                            method: 'typia.json.createAssertParse',
                                            path: a + '.soloRespawnPeriod',
                                            expected: 'number',
                                            value: s.soloRespawnPeriod,
                                        },
                                        e,
                                    )))(r, o + '', !0)) ||
                            t(
                                !0,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: o + '',
                                    expected: 'RespawnParams',
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
            return u().model.computes.params(N);
        });
var N;
const w = n.resolve('strings'),
    P = e(function () {
        const { platoonTimeToResurrect: e, soloRespawnPeriod: t, platoonRespawnPeriod: a } = y(),
            r = d(w.readOrEmpty('battle_royale.tooltips.respawn.solo.description')),
            o = d(w.readOrEmpty('battle_royale.tooltips.respawn.platoon.description'));
        return s.jsx('div', {
            className: x,
            children: s.jsx('div', {
                className: h,
                children: s.jsxs('div', {
                    className: j,
                    children: [
                        s.jsx('div', {
                            className: b,
                            children: s.jsx('div', { className: _, children: f.common.description() }),
                        }),
                        s.jsxs('div', {
                            className: b,
                            children: [
                                s.jsx('div', { className: v, children: f.solo.title() }),
                                r.map(({ text: e, params: a }) =>
                                    s.jsx(
                                        i,
                                        {
                                            upgradeLegacy: !0,
                                            text: e,
                                            params: { ...a, duration: t },
                                            className: _,
                                            split: !0,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                        s.jsxs('div', {
                            className: b,
                            children: [
                                s.jsx('div', { className: v, children: f.platoon.title() }),
                                o.map(({ text: t, params: r }) =>
                                    s.jsx(
                                        i,
                                        {
                                            upgradeLegacy: !0,
                                            text: t,
                                            params: { ...r, timeToResurrect: e, duration: a },
                                            className: _,
                                            split: !0,
                                        },
                                        t,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
            }),
        });
    }),
    g = { base: 'Footer_82c68168', text: 'Footer_text_c859c809' };
function T() {
    return s.jsx('div', {
        className: g.base,
        children: s.jsxs('span', {
            className: g.text,
            children: [R.strings.battle_royale.tooltips.respawn.footer.text(), ' '],
        }),
    });
}
const A = {
        base: 'Header_9a6b431',
        icon: 'Header_icon_937d671c',
        description: 'Header_description_7d3252af',
        title: 'Header_title_6d0764fe',
        subtitle: 'Header_subtitle_c9393f08',
    },
    C = R.strings.battle_royale.tooltips.respawn;
function H() {
    return s.jsxs('div', {
        className: A.base,
        children: [
            s.jsx('div', { className: A.icon }),
            s.jsxs('div', {
                className: A.description,
                children: [
                    s.jsx('div', { className: A.title, children: C.title() }),
                    s.jsx('div', { className: A.subtitle, children: C.subtitle() }),
                ],
            }),
        ],
    });
}
const k = 'App_2e4efbd5';
function O() {
    return s.jsx(c, {
        children: s.jsx(c.Decorator, {
            children: s.jsxs('div', { className: k, children: [s.jsx(H, {}), s.jsx(P, {}), s.jsx(T, {})] }),
        }),
    });
}
l(s.jsx(p, { children: s.jsx(m, { children: s.jsx(O, {}) }) }));
