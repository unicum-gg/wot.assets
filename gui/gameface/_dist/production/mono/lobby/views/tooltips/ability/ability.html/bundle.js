import { t as s, j as a, F as e, G as t, H as c } from '../../../../chunks/vendor.js';
import { i as o, h as r, n, a5 as i, bv as p, l, bw as d, r as m, U as j } from '../../../../chunks/lib.js';
import { p as u } from '../../../../chunks/common.js';
/* empty css                        */ const [x, _] = o()((s) => {
    const a = s.observableModel.primitives(['params', 'type']);
    return {
        type: a.type,
        computes: {
            params: r.primitive(function (s) {
                return s(a.params.get());
            }),
        },
    };
}, n);
const h = 'App_21e3a147',
    v = 'App_header_62566856',
    b = 'App_icon_24de08c2',
    g = 'App_headerContainer_b23d7c80',
    f = 'App_title_5ec15df',
    y = 'App_cooldown_1072bf2a',
    N = 'App_content_80741629',
    A = 'App_container_58b78fd8',
    k = 'App_description_fecd9a89',
    w = R.images.gui.maps.icons.battleRoyale.artefact.c_80x80,
    S = e({ title: t(), iconName: t(), cooldownSeconds: c(), description: t() }),
    L =
        (($ = d(S)),
        function () {
            return _().model.computes.params($);
        });
var $;
const C = i.resolve('strings'),
    D = s(function () {
        const { title: s, iconName: e, cooldownSeconds: t, description: c } = L(),
            o = u(C.readOrEmpty('tooltips.battle_royale.hangar.tankSetupPanel.ability.cooldownTime')),
            r = u(c);
        return a.jsx(p, {
            children: a.jsx(p.Decorator, {
                children: a.jsx('div', {
                    className: h,
                    children: a.jsxs('div', {
                        className: A,
                        children: [
                            a.jsxs('div', {
                                className: v,
                                children: [
                                    a.jsx('div', { className: b, style: { backgroundImage: `url(${w.$dyn(e)})` } }),
                                    a.jsxs('div', {
                                        className: g,
                                        children: [
                                            a.jsx('div', { className: f, children: s }),
                                            o.map(({ text: s, params: e }) =>
                                                a.jsx(
                                                    l,
                                                    {
                                                        upgradeLegacy: !0,
                                                        text: s,
                                                        params: { ...e, cooldown: t },
                                                        className: y,
                                                    },
                                                    s,
                                                ),
                                            ),
                                        ],
                                    }),
                                ],
                            }),
                            a.jsx('div', {
                                className: N,
                                children: r.map(({ text: s, params: e }) =>
                                    a.jsx(
                                        l,
                                        { upgradeLegacy: !0, text: s, params: { ...e }, className: k, split: !0 },
                                        s,
                                    ),
                                ),
                            }),
                        ],
                    }),
                }),
            }),
        });
    });
m(a.jsxs(j, { children: [a.jsx(x, { children: a.jsx(D, {}) }), ','] }));
