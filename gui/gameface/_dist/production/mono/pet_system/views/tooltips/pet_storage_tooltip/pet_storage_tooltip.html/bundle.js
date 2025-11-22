import { q as e, j as s } from '../../../../chunks/vendor.js';
import { i as a, t, r, a3 as o, v as p, ad as n, k as l } from '../../../../chunks/lib.js';
import { B as c } from '../../../../chunks/breed.js';
/* empty css                       */ const [m, d] = a()(({ observableModel: e }) => ({ root: e.object() }), t),
    i = 'Bonus_de50af4c',
    u = 'Bonus_title_83ec6411',
    _ = 'Bonus_row_99659264',
    j = 'Bonus_value_70b996b5',
    x = 'Bonus_accentText_83ec6411',
    h = 'Bonus_counter_646ae1fb',
    N = r.resolve('strings'),
    v = e(function () {
        const { model: e } = d(),
            { bonusName: a, bonusValue: t, totalBattleCount: r, currentBattleCount: n } = e.root.get(),
            l = n <= 0;
        return s.jsxs('div', {
            className: i,
            children: [
                s.jsx('div', { className: u, children: N.readOrEmpty('pet_system.petStorageTooltip.bonus.title') }),
                s.jsxs('div', {
                    className: _,
                    children: [
                        s.jsx('div', {
                            className: j,
                            children: s.jsx(o, {
                                type: a,
                                className: x,
                                reverse: !0,
                                children: s.jsx(p, { path: 'pet_system.plusPercentValue', params: { value: t } }),
                            }),
                        }),
                        s.jsx(p, {
                            path: 'pet_system.petStorageTooltip.bonus.currentBonus',
                            params: { value: N.readOrEmpty(`quests.bonusName.${a}`) },
                        }),
                    ],
                }),
                s.jsxs('div', {
                    className: _,
                    children: [
                        s.jsx('div', {
                            className: j,
                            children: s.jsxs('div', {
                                className: h,
                                children: [s.jsx('div', { className: x, children: n }), '/', r],
                            }),
                        }),
                        N.readOrEmpty('pet_system.petStorageTooltip.bonus.' + (l ? 'caption' : 'inProgress')),
                    ],
                }),
            ],
        });
    }),
    b = 'App_2f55a205',
    y = 'App_inner_e279a242',
    g = 'App_header_37a37190',
    f = 'App_icon_5868d441',
    B = 'App_name_1d781831',
    k = 'App_breed_26f2e2f7',
    A = 'App_content_7860a5c0',
    E = r.resolve('strings'),
    O = r.resolve('images'),
    T = e(function () {
        const { model: e } = d(),
            { petNameID: a, petType: t, breedName: r, petID: o } = e.root.get();
        return s.jsx(n, {
            children: s.jsx(n.Decorator, {
                className: b,
                children: s.jsxs('div', {
                    className: y,
                    children: [
                        s.jsxs('div', {
                            className: g,
                            children: [
                                s.jsx('div', {
                                    className: f,
                                    style: {
                                        backgroundImage: `url(${O.readOrEmpty(`petSystem.pets.x96x96.pet_${o}`)})`,
                                    },
                                }),
                                s.jsx(p, {
                                    className: B,
                                    path: 'pet_system.petHouseMarker.pet',
                                    params: { petName: E.readOrEmpty(`pet_names.petName_${a}`) },
                                }),
                                s.jsx('div', {
                                    className: k,
                                    children: s.jsx(c, {
                                        petType: E.readOrEmpty(`pet_system.petType.${t}`),
                                        breedName: E.readOrEmpty(`pet_system.breedName.${r}`),
                                    }),
                                }),
                            ],
                        }),
                        s.jsx('div', { className: A, children: s.jsx(v, {}) }),
                    ],
                }),
            }),
        });
    });
l(s.jsx(m, { children: s.jsx(T, {}) }));
