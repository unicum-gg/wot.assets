import { s, j as e, m as i } from '../../../../chunks/vendor.js';
import { i as t, ad as a, D as l, b0 as o, a_ as d, P as c, a$ as n } from '../../../../chunks/lib.js';
import { K as p, a as r } from '../../../../chunks/key_icon.js';
import { f as _ } from '../../../../chunks/string-utils.js';
const [m, y] = t()(({ observableModel: s }) => ({ root: s.object() }), a),
    j = 'KeyTooltipApp_714d3ae4',
    h = 'KeyTooltipApp_header_3bb66dbc',
    x = 'KeyTooltipApp_icon_2c2c4eb4',
    v = 'KeyTooltipApp_dots_c189318f',
    N = 'KeyTooltipApp_description_40910ce9',
    g = 'KeyTooltipApp_price_b1613ac',
    k = 'KeyTooltipApp_key_54f2a704',
    b = 'KeyTooltipApp_subMenu_495a09dd',
    T = 'KeyTooltipApp_items_76d07096',
    A = 'KeyTooltipApp_item_9c3d603',
    f = 'KeyTooltipApp_simplyItem_3c3f828f',
    K = 'KeyTooltipApp_itemValue_b46c4848',
    D = 'KeyTooltipApp_bottom_1fd25db',
    u = 'KeyTooltipApp_info_90bd8a2d',
    E = 'KeyTooltipApp_bottomText_b2ab2f96',
    C = (s) => (s > 0 ? `+${s}` : s),
    G = s(() => {
        const { model: s } = y(),
            { isPostBattle: t, keyCount: a, endDate: c, effective: n, missionDaily: m, vehicleDaily: G } = s.root.get();
        return e.jsxs('div', {
            className: i(j),
            lang: R.strings.settings.LANGUAGE_CODE(),
            children: [
                e.jsx('div', { className: h, children: R.strings.last_stand_tooltips.keys.header() }),
                e.jsx('div', { className: x }),
                e.jsx('div', { className: N, children: R.strings.last_stand_tooltips.keys.body() }),
                e.jsx('div', { className: v }),
                e.jsxs('div', {
                    className: g,
                    children: [
                        l(a, 0),
                        e.jsx(p, { size: r.C28x28, className: k }),
                        R.strings.last_stand_tooltips.keys.inStock(),
                    ],
                }),
                e.jsx('div', { className: v }),
                t
                    ? e.jsxs('div', {
                          className: b,
                          children: [
                              R.strings.last_stand_tooltips.keys.accrued(),
                              e.jsxs('div', {
                                  className: T,
                                  children: [
                                      n > 0 &&
                                          e.jsxs('div', {
                                              className: A,
                                              children: [
                                                  R.strings.last_stand_tooltips.keys.effective(),
                                                  e.jsxs('div', { className: K, children: [C(n), ' '] }),
                                              ],
                                          }),
                                      m > 0 &&
                                          e.jsxs('div', {
                                              className: A,
                                              children: [
                                                  R.strings.last_stand_tooltips.keys.missionDaily(),
                                                  e.jsxs('div', { className: K, children: [C(m), ' '] }),
                                              ],
                                          }),
                                      G > 0 &&
                                          e.jsxs('div', {
                                              className: A,
                                              children: [
                                                  R.strings.last_stand_tooltips.keys.vehicleDaily(),
                                                  e.jsxs('div', { className: K, children: [C(G), ' '] }),
                                              ],
                                          }),
                                  ],
                              }),
                          ],
                      })
                    : e.jsx(e.Fragment, {
                          children: e.jsxs('div', {
                              className: b,
                              children: [
                                  R.strings.last_stand_tooltips.keys.howToEarn(),
                                  e.jsxs('div', {
                                      className: T,
                                      children: [
                                          e.jsx('div', {
                                              className: A,
                                              children: R.strings.last_stand_tooltips.keys.battles(),
                                          }),
                                          e.jsx('div', {
                                              className: A,
                                              children: R.strings.last_stand_tooltips.keys.completeMissionDaily(),
                                          }),
                                          e.jsx('div', {
                                              className: A,
                                              children: R.strings.last_stand_tooltips.keys.completeVehicleDaily(),
                                          }),
                                          e.jsx('div', {
                                              className: A,
                                              children: R.strings.last_stand_tooltips.keys.gold(),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                e.jsx('div', { className: v }),
                e.jsxs('div', {
                    className: b,
                    children: [
                        R.strings.last_stand_tooltips.keys.howToUse(),
                        e.jsx('div', { className: f, children: R.strings.last_stand_tooltips.keys.howToUseDescr() }),
                    ],
                }),
                e.jsx('div', { className: v }),
                e.jsxs('div', {
                    className: D,
                    children: [
                        e.jsx('div', { className: u }),
                        e.jsx('div', {
                            className: E,
                            lang: R.strings.settings.LANGUAGE_CODE(),
                            children: _(R.strings.last_stand_tooltips.keys.bottom(), { date: o(c, d.ShortDateTime) }),
                        }),
                    ],
                }),
            ],
        });
    });
c(e.jsx(m, { children: e.jsx(n, { children: e.jsx(G, {}) }) }));
