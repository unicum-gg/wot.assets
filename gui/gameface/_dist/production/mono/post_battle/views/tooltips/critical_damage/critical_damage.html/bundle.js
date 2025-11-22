import { j as e, e as s, w as t } from '../../../../chunks/vendor.js';
import { F as a, m as i, i as r, c, n as l, q as o, I as n, aB as d, a as m } from '../../../../chunks/lib.js';
/* empty css                       */ const h = 'Content_6fb69530';
function u({ className: t }) {
    return e.jsx('div', {
        className: s(h, t),
        children: e.jsx(a, { path: 'battle_results.common.tooltip.crits.description' }),
    });
}
const p = 'criticalDevices',
    f = 'destroyedDevices',
    j = 'destroyedTankmen';
function x(e) {
    return i(e, (e) => ({ damageGroup: e.damageGroup, value: e.value }));
}
const [_, v] = r()(({ observableModel: e, cleanup: s }) => {
        e.transform;
        const t = { details: e.transform(x, 'details') },
            a = c.shallow(() => {
                const e = t.details.get();
                return l(
                    e,
                    (e, s) => {
                        switch (s.damageGroup) {
                            case p:
                                e[p].push(s);
                                break;
                            case f:
                                e[f].push(s);
                                break;
                            case j:
                                e[j].push(s);
                        }
                        return e;
                    },
                    { [p]: [], [f]: [], [j]: [] },
                );
            });
        return { ...t, computes: { groupedDetails: a } };
    }, o),
    b = 'Footer_5a116bc3',
    g = 'Footer_list_feff181a',
    y = 'Footer_listTitle_edf96c67',
    N = 'Footer_items_ba6fe6b4',
    D = 'Footer_row_85f76f88',
    k = 'Footer_icon_5fdf9d06';
function w({ titlePath: s, list: t, iconSuffix: r, localizationTemplate: c }) {
    return e.jsxs('div', {
        className: g,
        children: [
            e.jsx('div', { className: y, children: e.jsx(a, { path: `battle_results.common.tooltip.crits.${s}` }) }),
            e.jsx('div', {
                className: N,
                children: i(t, (s) =>
                    e.jsxs(
                        'div',
                        {
                            className: D,
                            children: [
                                e.jsx(n, {
                                    width: '16rem',
                                    height: '16rem',
                                    className: k,
                                    path: `library.crits.${s.value}${r}`,
                                }),
                                e.jsx(a, { path: c.replace('{value}', s.value) }),
                            ],
                        },
                        s.value,
                    ),
                ),
            }),
        ],
    });
}
const F = t(function ({ className: t }) {
        const { model: a } = v(),
            i = a.computes.groupedDetails();
        return e.jsxs('div', {
            className: s(b, t),
            children: [
                i.criticalDevices.length > 0 &&
                    e.jsx(w, {
                        titlePath: 'critDamage',
                        list: i.criticalDevices,
                        iconSuffix: 'CriticalSmall',
                        localizationTemplate: 'item_types.{value}.name',
                    }),
                i.destroyedDevices.length > 0 &&
                    e.jsx(w, {
                        titlePath: 'critDestruction',
                        list: i.destroyedDevices,
                        iconSuffix: 'DestroyedSmall',
                        localizationTemplate: 'item_types.{value}.name',
                    }),
                i.destroyedTankmen.length > 0 &&
                    e.jsx(w, {
                        titlePath: 'critWound',
                        list: i.destroyedTankmen,
                        iconSuffix: 'DestroyedSmall',
                        localizationTemplate: 'item_types.tankman.roles.{value}',
                    }),
            ],
        });
    }),
    T = 'Header_4824f534',
    S = 'Header_iconWrapper_ca45cf',
    P = 'Header_description_d362ea56';
function z({ className: t }) {
    return e.jsxs('div', {
        className: s(T, t),
        children: [
            e.jsx('div', {
                className: S,
                children: e.jsx(n, {
                    path: 'library.efficiency.statsParameters.criticalDamage',
                    width: '100%',
                    height: '100%',
                }),
            }),
            e.jsx('div', { className: P, children: e.jsx(a, { path: 'battle_results.common.tooltip.crits.header' }) }),
        ],
    });
}
const A = 'App_48b0ea08',
    G = 'App_header_a90e0bc2',
    H = 'App_content_962209c7',
    $ = 'App_footer_80741629',
    C = t(function () {
        const { model: s } = v(),
            t = s.details.get();
        return e.jsxs('div', {
            className: A,
            children: [
                e.jsx(z, { className: G }),
                e.jsx(n, { width: '100%', height: '9rem', path: 'library.efficiency.divider' }),
                e.jsx(u, { className: H }),
                t.length > 0 &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx(n, { width: '100%', height: '9rem', path: 'library.efficiency.divider' }),
                            e.jsx(F, { className: $ }),
                        ],
                    }),
            ],
        });
    });
function W() {
    return e.jsx(_, { children: e.jsx(d, { children: e.jsx(d.Decorator, { children: e.jsx(C, {}) }) }) });
}
m(e.jsx(W, {}));
