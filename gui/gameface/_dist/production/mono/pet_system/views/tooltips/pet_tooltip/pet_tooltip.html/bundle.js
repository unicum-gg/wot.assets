import { q as e, j as s } from '../../../../chunks/vendor.js';
import { i as a, t, r as p, ad as r, p as d, k as m } from '../../../../chunks/lib.js';
import { B as o } from '../../../../chunks/breed.js';
/* empty css                       */ const [c, l] = a('PetTooltipModel')(
        ({ observableModel: e }) => ({ root: e.object(), bonuses: e.arrayClone('promotionBonuses') }),
        t,
    ),
    i = 'App_e5b11dda',
    n = 'App_bgFlare_c6313b44',
    _ = 'App_petIcon_d684143d',
    b = 'App_divider_5947fd2b',
    y = 'App_tooltipBase_c42f572b',
    j = 'App_header_ffbe7d49',
    N = 'App_title_0',
    x = 'App_petName_b49c6143',
    u = 'App_breed_50b287e6',
    v = 'App_description_582521f4',
    f = 'App_bonusesList_f32c39e6',
    h = 'App_card_82efbffd',
    A = 'App_bonusIcon_f8777acb',
    g = 'App_text_a9b1bc33',
    $ = p.resolve('images'),
    E = p.resolve('strings'),
    O = e(function () {
        const { model: e } = l(),
            { breedName: a, petID: t, petNameID: p, petType: m } = e.root.get(),
            c = e.bonuses.get();
        return s.jsxs(r, {
            className: i,
            children: [
                s.jsx('div', {
                    className: _,
                    style: { backgroundImage: `url(${$.readOrEmpty(`petSystem.pets.x96x96.pet_${t}`)})` },
                }),
                s.jsxs(r.Decorator, {
                    className: y,
                    children: [
                        s.jsx('div', {
                            className: n,
                            style: { backgroundImage: `url(${$.readOrEmpty('petSystem.tooltips.bg_flare')})` },
                        }),
                        s.jsxs('div', {
                            className: j,
                            children: [
                                s.jsx('div', { className: x, children: E.readOrEmpty(`pet_names.petName_${p}`) }),
                                s.jsx(o, {
                                    className: u,
                                    petType: E.readOrEmpty(`pet_system.petType.${m}`),
                                    breedName: E.readOrEmpty(`pet_system.breedName.${a}`),
                                }),
                            ],
                        }),
                        s.jsx('div', { className: b }),
                        s.jsx('div', { className: v, children: E.readOrEmpty(`pet_system.petDescription.${a}`) }),
                        s.jsx('div', { className: b }),
                        s.jsx('div', {
                            className: f,
                            children: d(c, (e) =>
                                s.jsxs(
                                    'div',
                                    {
                                        className: h,
                                        children: [
                                            s.jsx('div', {
                                                className: A,
                                                style: {
                                                    backgroundImage: `url(${$.readOrEmpty(`petSystem.promotion.${e}_sm`)})`,
                                                },
                                            }),
                                            s.jsxs('div', {
                                                className: g,
                                                children: [
                                                    s.jsx('div', {
                                                        className: N,
                                                        children: E.readOrEmpty(`pet_system.bonus.${e}.title`),
                                                    }),
                                                    E.readOrEmpty(`pet_system.bonus.${e}.description`),
                                                ],
                                            }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        });
    });
m(s.jsx(c, { children: s.jsx(O, {}) }));
