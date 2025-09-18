var e = Object.defineProperty,
    t = (t, s, a) =>
        ((t, s, a) => (s in t ? e(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[s] = a)))(
            t,
            'symbol' != typeof s ? s + '' : s,
            a,
        );
import { _ as s, y as a, r, j as i, e as n, o, f as l, R as c, m as d, n as h } from '../../../chunks/vendor.js';
import {
    i as m,
    c as u,
    a as _,
    b as p,
    n as v,
    r as b,
    m as x,
    D as f,
    u as g,
    d as N,
    C as j,
    F as y,
    g as C,
    e as w,
    f as T,
    h as S,
    M as I,
    j as P,
    k,
    l as M,
    o as E,
    B as A,
    p as O,
    s as L,
    q as B,
    I as V,
    T as z,
    t as $,
    v as D,
    w as F,
    x as H,
    y as W,
    z as U,
    A as G,
    V as X,
    W as Z,
    E as K,
    R as Y,
    G as q,
    H as J,
    J as Q,
    K as ee,
    L as te,
    N as se,
    O as ae,
    P as re,
    Q as ie,
    S as ne,
    U as oe,
    X as le,
    Y as ce,
    Z as de,
    _ as he,
    $ as me,
    a0 as ue,
    a1 as _e,
    a2 as pe,
    a3 as ve,
    a4 as be,
    a5 as xe,
    a6 as fe,
    a7 as ge,
    a8 as Ne,
    a9 as je,
    aa as ye,
    ab as Ce,
    ac as we,
    ad as Te,
    ae as Se,
    af as Ie,
    ag as Pe,
    ah as ke,
    ai as Me,
    aj as Ee,
    ak as Re,
    al as Ae,
    am as Oe,
    an as Le,
    ao as Be,
    ap as Ve,
    aq as ze,
    ar as $e,
    as as De,
    at as Fe,
    au as He,
    av as We,
    aw as Ue,
    ax as Ge,
    ay as Xe,
    az as Ze,
    aA as Ke,
    aB as Ye,
    aC as qe,
} from '../../../chunks/lib.js';
import {
    V as Je,
    P as Qe,
    T as et,
    E as tt,
    u as st,
    a as at,
    b as rt,
    F as it,
    c as nt,
    d as ot,
    M as lt,
} from '../../../chunks/entry_point.js';
import '../../../chunks/node_model.js';
const [ct, dt] = m('WalletModel')(
        ({ observableModel: e }) => {
            const t = { currencies: e.dict('currencies') };
            return {
                ...t,
                list: u.shallow((e) =>
                    Array.from(t.currencies.keys.values()).sort((t, s) => {
                        const a = e.indexOf(t),
                            r = e.indexOf(s),
                            i = e.length;
                        return (-1 === a ? i : a) - (-1 === r ? i : r);
                    }),
                ),
            };
        },
        ({ externalModel: e }) => ({ currencyAction: e.createCallback((e) => ({ type: e }), 'onCurrencyAction') }),
    ),
    [ht, mt] = m()(
        ({ observableModel: e }) => ({
            ...e.primitives({
                vehicleId: 'vehicleId',
                isElite: 'elite',
                isPremium: 'premium',
                vehicleName: 'name',
                vehicleShortName: 'shortName',
                vehicleLongName: 'longName',
                vehicleNation: 'nation',
                vehicleRole: 'role',
                vehicleLvl: 'level',
                rentLeftTime: 'rentLeftTime',
                rentLeftBattles: 'rentLeftBattles',
                rentLeftWins: 'rentLeftWins',
                fromWotPlus: 'fromWotPlus',
                state: 'state',
                tags: 'tags',
                inventoryId: 'inventoryId',
            }),
            type: e.transform((e) => (p(e.vehicleType) ? e.vehicleType : void 0)),
            state: e.transform((e) => (_(e.state) ? e.state : void 0)),
        }),
        v,
    ),
    ut = b.resolve('strings'),
    [_t, pt] = m()(({ observableModel: e }) => {
        const t = { groups: e.arrayClone('groups') },
            s = u.structural(() =>
                x(t.groups.get(), ({ id: e, tooltipID: t, indicator: s, params: a, extraParams: r }) => ({
                    id: e,
                    header: xt(e, t, s),
                    characteristics: bt(a),
                    modifications: bt(r),
                })),
            );
        return { ...t, computes: { columns: s } };
    }, v);
function vt({ id: e, value: t, name: a, tooltipID: r, template: i, measureUnit: n }) {
    const o = (() => {
            let e;
            const t = (t, a) => {
                var r, i;
                return (
                    !1 ===
                        ((e) =>
                            Array.isArray(e) &&
                            e.every(
                                (e) =>
                                    'object' == typeof e &&
                                    null !== e &&
                                    ((e) =>
                                        ('string' == typeof e.value || 'number' == typeof e.value) &&
                                        'string' == typeof e.state)(e),
                            ))(t) &&
                        ((e = a),
                        (r = t),
                        (i = '$input'),
                        ((Array.isArray(r) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.assertParse',
                                    path: i + '',
                                    expected: 'Array<ParamValue>',
                                    value: r,
                                },
                                e,
                            )) &&
                            r.every(
                                (t, a) =>
                                    ((('object' == typeof t && null !== t) ||
                                        s(
                                            !0,
                                            {
                                                method: 'typia.json.assertParse',
                                                path: i + '[' + a + ']',
                                                expected: 'ParamValue',
                                                value: t,
                                            },
                                            e,
                                        )) &&
                                        ((t, a, r = !0) =>
                                            ('string' == typeof t.value ||
                                                'number' == typeof t.value ||
                                                s(
                                                    r,
                                                    {
                                                        method: 'typia.json.assertParse',
                                                        path: a + '.value',
                                                        expected: '(number | string)',
                                                        value: t.value,
                                                    },
                                                    e,
                                                )) &&
                                            ('string' == typeof t.state ||
                                                s(
                                                    r,
                                                    {
                                                        method: 'typia.json.assertParse',
                                                        path: a + '.state',
                                                        expected: 'string',
                                                        value: t.state,
                                                    },
                                                    e,
                                                )))(t, i + '[' + a + ']', !0)) ||
                                    s(
                                        !0,
                                        {
                                            method: 'typia.json.assertParse',
                                            path: i + '[' + a + ']',
                                            expected: 'ParamValue',
                                            value: t,
                                        },
                                        e,
                                    ),
                            )) ||
                            s(
                                !0,
                                {
                                    method: 'typia.json.assertParse',
                                    path: i + '',
                                    expected: 'Array<ParamValue>',
                                    value: r,
                                },
                                e,
                            )),
                    t
                );
            };
            return (e, s) => t(JSON.parse(e), s);
        })()(t).map((e) => e.value),
        l = a
            ? (() => {
                  let e;
                  const t = (t, a) => {
                      var r, i;
                      return (
                          !1 ===
                              ((e) =>
                                  'object' == typeof e &&
                                  null !== e &&
                                  ((e) => 'string' == typeof e.key && 'string' == typeof e.name)(e))(t) &&
                              ((e = a),
                              (i = '$input'),
                              ((('object' == typeof (r = t) && null !== r) ||
                                  s(
                                      !0,
                                      {
                                          method: 'typia.json.assertParse',
                                          path: i + '',
                                          expected: 'KpiBonusParams',
                                          value: r,
                                      },
                                      e,
                                  )) &&
                                  ((t, a, r = !0) =>
                                      ('string' == typeof t.key ||
                                          s(
                                              r,
                                              {
                                                  method: 'typia.json.assertParse',
                                                  path: a + '.key',
                                                  expected: 'string',
                                                  value: t.key,
                                              },
                                              e,
                                          )) &&
                                      ('string' == typeof t.name ||
                                          s(
                                              r,
                                              {
                                                  method: 'typia.json.assertParse',
                                                  path: a + '.name',
                                                  expected: 'string',
                                                  value: t.name,
                                              },
                                              e,
                                          )))(r, i + '', !0)) ||
                                  s(
                                      !0,
                                      {
                                          method: 'typia.json.assertParse',
                                          path: i + '',
                                          expected: 'KpiBonusParams',
                                          value: r,
                                      },
                                      e,
                                  )),
                          t
                      );
                  };
                  return (e, s) => t(JSON.parse(e), s);
              })()(a)
            : { key: '', name: '' };
    return { type: e, tooltipId: r, templatePath: i, amount: o.length > 1 ? o : o[0], name: ft(e, l), measure: n };
}
function bt(e) {
    const t = x(e, vt);
    return t.length > 0 ? t : void 0;
}
function xt(e, t, s) {
    return {
        name: ut.readOrEmpty(`menu.tank_params.${e}`),
        type: e,
        vehicleAmount: s.markerValue,
        maxAmount: s.maxValue,
        currentAmount: s.value,
        tooltipId: t,
    };
}
function ft(e, { key: t, name: s }) {
    return '' !== s && '' !== t
        ? ut.readOr(`tank_setup.kpi.bonus.ttc.${t}.${s}`, () => ut.readOrEmpty(`tank_setup.kpi.bonus.${t}.${s}`))
        : ut.readOrEmpty(`menu.tank_params.${e}`);
}
const [gt, Nt] = m()(
        ({ observableModel: e }) => {
            const t = e.primitives([
                    'action',
                    'actionState',
                    'actionStateReason',
                    'price',
                    'oldPrice',
                    'currency',
                    'priceDiscount',
                    'blueprintFragments',
                    'blueprintTotal',
                    'combatXp',
                    'freeXp',
                    'timeLeft',
                    'cooldownTimeLeft',
                    'notInShopVehicle',
                    'promoFinishTime',
                ]),
                s = e.primitives(['elite', 'premium']),
                a = u.primitive(() => t.combatXp.get() + t.freeXp.get());
            return { ...t, computes: { totalXp: a, isPremium: u.primitive(() => s.elite.get() || s.premium.get()) } };
        },
        ({ externalModel: e }) => ({
            action: e.createCallbackNoArgs('onAction'),
            blueprintAction: e.createCallbackNoArgs('onBlueprint'),
        }),
    ),
    [jt, yt] = m()(
        ({ observableModel: e }) => ({ ...e.primitives(['status']) }),
        ({ externalModel: e }) => ({ addToComparison: e.createCallbackNoArgs('onAddToComparison') }),
    ),
    Ct = 'action_research',
    wt = 'action_purchase',
    Tt = 'action_purchase_shop',
    St = 'action_restore',
    It = 'action_in_garage',
    Pt = 'action_state_enabled',
    kt = {
        root: 'Price_root_29f8d762',
        priceBlock: 'Price_priceBlock_8de1ae95',
        priceContainer: 'Price_priceContainer_23342f1a',
        oldPrice: 'Price_oldPrice_32b6e4ae',
        price: 'Price_8beb5d73',
        discountContainer: 'Price_discountContainer_4619aadb',
        discount: 'Price_discount_29f8d762',
        discount__research: 'Price_discount__research_29f8d762',
        discountTimer: 'Price_discountTimer_85a8970a',
        'discountTimer__color-red': 'Price_discountTimer__color-red_6a4bb2b4',
        'discountTimer__color-blue': 'Price_discountTimer__color-blue_1db7d566',
    },
    Mt = a(function ({ className: e }) {
        const t = b.resolve('intl'),
            { model: s } = Nt(),
            a = s.action.get(),
            o = s.actionStateReason.get(),
            l = s.oldPrice.get(),
            c = s.price.get(),
            d = s.currency.get(),
            h = s.priceDiscount.get(),
            m = a === Ct ? f.colors.blue : f.colors.red,
            u = s.promoFinishTime.get(),
            _ = r.useRef(),
            [p, v] = r.useState(0);
        (r.useLayoutEffect(() => {
            const e = Math.max(u - Math.floor(Date.now() / I), 0);
            if ((v(e), !(e <= 0)))
                return ((_.current = setTimeout(() => v(0), 1e3 * (e + 1))), () => clearTimeout(_.current));
        }, [u]),
            g(() => clearTimeout(_.current)));
        const x = N(
            { currencySize: j.sizes.small, discountSize: f.sizes.medium },
            { medium: { currencySize: j.sizes.large, discountSize: f.sizes.large } },
        );
        return i.jsxs('div', {
            className: n(kt.priceBlock, e),
            children: [
                l > 0 && l !== c && i.jsx('div', { className: kt.oldPrice, children: t.formatNumber('integral', l) }),
                i.jsxs(j, {
                    type: d,
                    size: x.currencySize,
                    enough: 'notEnoughCredits' !== o && 'notEnoughXp' !== o,
                    className: kt.priceContainer,
                    reverse: !0,
                    children: [
                        h > 0 &&
                            i.jsxs('div', {
                                className: kt.discountContainer,
                                children: [
                                    i.jsx(f, {
                                        color: m,
                                        size: x.discountSize,
                                        className: n(kt.discount, a === Ct && kt.discount__research),
                                        children: t.formatNumber('integral', -h),
                                    }),
                                    p > 0 &&
                                        i.jsx('div', {
                                            className: n(kt.discountTimer, kt[`discountTimer__color-${m}`]),
                                            children: i.jsx(y, {
                                                path: 'vehicle_hub.researchPurchase.discountTimer',
                                                params: { date: C(u, T(p).days > 0 ? w.ShortDate : w.ShortTime) },
                                            }),
                                        }),
                                ],
                            }),
                        i.jsx('div', { className: kt.price, children: S(c, d) }),
                    ],
                }),
            ],
        });
    }),
    Et = 'VehicleExperience_54fa17d7',
    Rt = 'VehicleExperience_row_4f00afbf',
    At = 'VehicleExperience_label_452b09a4',
    Ot = 'VehicleExperience_experience_718161f',
    Lt = 'VehicleExperience_dots_2b70188e',
    Bt = a(function ({ className: e }) {
        const t = b.resolve('intl'),
            s = b.resolve('strings'),
            { model: a } = Nt(),
            r = a.combatXp.get(),
            o = a.computes.totalXp(),
            l = a.computes.isPremium();
        return i.jsxs('div', {
            className: n(Et, e),
            children: [
                i.jsxs('div', {
                    className: Rt,
                    children: [
                        i.jsx('div', { className: At, children: s.readOrEmpty('session_stats.label.gamingXp') }),
                        i.jsx('div', { className: Lt }),
                        i.jsx(j, {
                            type: l ? j.types.eliteXp : j.types.tankXP,
                            size: j.sizes.extraSmall,
                            reverse: !0,
                            children: i.jsx('div', { className: Ot, children: t.formatNumber('integral', r) }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: Rt,
                    children: [
                        i.jsx('div', { className: At, children: s.readOrEmpty('session_stats.label.totalXp') }),
                        i.jsx('div', { className: Lt }),
                        i.jsx(j, {
                            type: j.types.custom,
                            size: j.sizes.extraSmall,
                            imagePath: l
                                ? 'vehicle_hub.research_purchase.total_experience_elite'
                                : 'vehicle_hub.research_purchase.total_experience',
                            reverse: !0,
                            children: i.jsx('div', { className: Ot, children: t.formatNumber('integral', o) }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Vt = 'ResearchPurchaseControl_fce6cc10',
    zt = 'ResearchPurchaseControl_priceBlock_b9fd7559',
    $t = 'ResearchPurchaseControl_controls_9dac55a2',
    Dt = 'ResearchPurchaseControl_actionButton_d5574927',
    Ft = 'ResearchPurchaseControl_buttonContent_11e8b840',
    Ht = 'ResearchPurchaseControl_buttonContent__blueprintAssembled_bd87c171',
    Wt = 'ResearchPurchaseControl_base__inGarage_32499cd8',
    Ut = 'ResearchPurchaseControl_purchaseShopButton_1d51e5f2',
    Gt = 'ResearchPurchaseControl_recoveryUntil_6b79fd3b',
    Xt = 'ResearchPurchaseControl_garageButton_60f5bbd3',
    Zt = 'ResearchPurchaseControl_blueprintGarageButton_32499cd8',
    Kt = 'ResearchPurchaseControl_garageIcon_7a613811',
    Yt = 'ResearchPurchaseControl_blueprintIcon_a923cdd9',
    qt = 'ResearchPurchaseControl_blueprintTotal_7c0becbb',
    Jt = 'ResearchPurchaseControl_experienceBlock_cd2e5ad7',
    Qt = 'ResearchPurchaseControl_experienceBlock__topOffset_8a525c2',
    es = 'ResearchPurchaseControl_experienceBlock__bottomOffset_b7ecf008',
    ts = [It, St, Tt];
function ss({ actionType: e }) {
    const t = b.resolve('strings');
    switch (e) {
        case Ct:
            return t.readOrEmpty('menu.unlocks.unlockButton');
        case wt:
            return t.readOrEmpty('menu.research.labels.button.buy');
        case Tt:
            return i.jsxs(i.Fragment, {
                children: [
                    i.jsx(V, { path: 'vehicle_hub.research_purchase.purchase_shop', className: Ut }),
                    t.readOrEmpty('vehicle_preview.buyingPanel.buyBtn.label.buy'),
                ],
            });
        case St:
            return t.readOrEmpty('menu.research.labels.button.restore');
        default:
            return void console.error(`ResearchPurchaseControl_Action: met unexpected action ${e}`);
    }
}
function as({ blueprintFragments: e, blueprintTotal: t }) {
    const s = b.resolve('strings');
    return e === t
        ? i.jsxs(i.Fragment, {
              children: [
                  i.jsx(V, { path: 'vehicle_hub.research_purchase.blueprint_assembled', className: Yt }),
                  s.readOrEmpty('blueprints.blueprintProgressBar.complete'),
              ],
          })
        : i.jsxs(i.Fragment, {
              children: [
                  i.jsx(y, {
                      path: 'blueprints.blueprintProgressBar.inProgress.progress',
                      params: { values: e },
                      upgradeLegacy: !0,
                  }),
                  i.jsx(y, {
                      path: 'blueprints.blueprintProgressBar.inProgress.values',
                      params: { current: '', total: t },
                      className: qt,
                      upgradeLegacy: !0,
                  }),
              ],
          });
}
const rs = a(function ({ className: e }) {
        const t = b.resolve('strings'),
            { model: s, controls: a } = Nt(),
            { model: o } = mt(),
            l = s.action.get(),
            c = s.timeLeft.get(),
            d = s.cooldownTimeLeft.get(),
            h = s.notInShopVehicle.get(),
            m = s.actionState.get(),
            u = s.actionStateReason.get(),
            _ = s.blueprintFragments.get(),
            p = s.blueprintTotal.get(),
            v = P(L(d), O.compact),
            x = r.useMemo(() => C(Date.now() / I + c, T(c).days > 0 ? w.FullDate : w.ShortTime), [c]),
            f = k({
                header: u ? t.readOrEmpty(`tooltips.vehiclePreview.buyButton.${u}.header`) : void 0,
                body: u
                    ? M(E(t.readOrEmpty(`tooltips.vehiclePreview.buyButton.${u}.body`)), {
                          timeLeft: v.items.join(' '),
                      })
                    : void 0,
            }),
            g = (function (e, t) {
                const s = b.resolve('strings'),
                    a = k({
                        header: s.readOrEmpty('tooltips.blueprint.VehicleBlueprintTooltip.vehicleUnlocked.header'),
                        body: s.readOrEmpty('tooltips.blueprint.VehicleBlueprintTooltip.vehicleUnlocked.body'),
                    }),
                    i = r.useMemo(() => [t], [t]),
                    n = B('blueprintInfo', i);
                return e !== Ct ? a : n;
            })(l, o.vehicleId.get()),
            j = N(
                { buttonSize: A.sizes.extraSmall, recoveryButtonSize: A.sizes.small },
                { small: { buttonSize: A.sizes.small }, medium: { recoveryButtonSize: A.sizes.large } },
            );
        if (h && !ts.includes(l)) return;
        const S = _ === p;
        return i.jsx('div', {
            className: n(Vt, l === It && Wt, e),
            children: (() => {
                switch (l) {
                    case It:
                        return i.jsxs(i.Fragment, {
                            children: [
                                s.combatXp.get() > 0 && i.jsx(Bt, { className: n(Jt, es) }),
                                i.jsxs('div', {
                                    className: $t,
                                    children: [
                                        i.jsxs(A, {
                                            theme: A.themes.secondary,
                                            size: j.buttonSize,
                                            className: Xt,
                                            classNames: { content: Ft },
                                            onClick: a.action,
                                            children: [
                                                i.jsx('div', { className: Kt }),
                                                t.readOrEmpty('menu.research.labels.button.showInHangar'),
                                            ],
                                        }),
                                        p > 0 &&
                                            i.jsx(A, {
                                                ...g,
                                                theme: A.themes.secondary,
                                                size: j.buttonSize,
                                                onClick: a.blueprintAction,
                                                className: Zt,
                                                classNames: { content: n(Ft, S && Ht) },
                                                children: i.jsx(as, { blueprintFragments: _, blueprintTotal: p }),
                                            }),
                                    ],
                                }),
                            ],
                        });
                    case Ct:
                    case wt:
                    case Tt:
                    case St:
                        return i.jsxs(i.Fragment, {
                            children: [
                                l !== Tt && i.jsx(Mt, { className: zt }),
                                i.jsxs('div', {
                                    className: $t,
                                    children: [
                                        i.jsx(A, {
                                            ...(u && f),
                                            theme: A.themes.primary,
                                            size: j.recoveryButtonSize,
                                            className: Dt,
                                            classNames: { content: Ft },
                                            disabled: m !== Pt,
                                            onClick: () => {
                                                m === Pt && a.action();
                                            },
                                            children: i.jsx(ss, { actionType: l }),
                                        }),
                                        p > 0 &&
                                            i.jsx(A, {
                                                ...g,
                                                theme: A.themes.secondary,
                                                size: j.recoveryButtonSize,
                                                className: Dt,
                                                onClick: a.blueprintAction,
                                                classNames: { content: n(Ft, S && Ht) },
                                                children: i.jsx(as, { blueprintFragments: _, blueprintTotal: p }),
                                            }),
                                        l === St &&
                                            !h &&
                                            i.jsx('div', {
                                                className: Gt,
                                                children: i.jsx(y, {
                                                    path: 'vehicle_hub.researchPurchase.recover',
                                                    params: { date: x },
                                                }),
                                            }),
                                    ],
                                }),
                                s.combatXp.get() > 0 && i.jsx(Bt, { className: n(Jt, Qt) }),
                            ],
                        });
                    default:
                        console.error(`RestorePurchaseControl error: got unhandled action ${l}`);
                }
            })(),
        });
    }),
    is = {
        base: 'VehicleHubTab_41897c7c',
        tab: 'VehicleHubTab_tab_d12e2d0b',
        content: 'VehicleHubTab_content_562b0c6',
        bubble: 'VehicleHubTab_bubble_90a22cab',
    };
function ns({ id: e, label: t, counter: s, className: a }) {
    const r = b.resolve('intl'),
        o = N({ size: H.small }, { large: { size: H.medium } });
    return i.jsxs('div', {
        className: n(is.base, a),
        children: [
            i.jsx(z.Tab, {
                tabId: e,
                classNames: { base: is.tab, content: is.content },
                children: i.jsx($, { text: r.toUpperCase(t) }),
            }),
            i.jsx(D.Root, {
                hidden: 0 === s,
                children: i.jsx(D.Icon, { size: o.size, type: F.bubble, className: is.bubble }),
            }),
        ],
    });
}
const os = 'TabsNavigation_tabsNavigation_f7e0f60f',
    ls = 'TabsNavigation_switcher_bdc43d73',
    cs = 'TabsNavigation_outerBorder_66e2c4c4',
    ds = 'TabsNavigation_mainBorder_1ed0bb59',
    hs = 'TabsNavigation_content_7ea34759';
function ms({ tabsList: e, activeTab: t, className: s, ...a }) {
    return i.jsx('div', {
        className: n(os, s),
        children: i.jsx(z, {
            ...a,
            active: t,
            children: i.jsx(z.Switcher, {
                classNames: { base: ls, outerBorder: cs, mainBorder: ds, content: hs },
                children: e.map((e) => i.jsx(ns, { id: e.id, label: e.label, counter: e.counter }, e.id)),
            }),
        }),
    });
}
const us = 'enabled',
    _s = 'VehicleInfo_47f4ed8c',
    ps = 'VehicleInfo_flag_5ec44a26',
    vs = 'VehicleInfo_level_e071b40b',
    bs = 'VehicleInfo_type_3740e975',
    xs = 'VehicleInfo_name_a6f9c3ff',
    fs = 'VehicleInfo_name__premium_2fb8fce6',
    gs = 'VehicleInfo_additionalInfo_96947fa6',
    Ns = 'VehicleInfo_role_dbc46b2d',
    js = 'VehicleInfo_roleIcon_918ece55',
    ys = 'VehicleInfo_roleLabel_32656129',
    Cs = 'VehicleInfo_comparison_606a8b9b',
    ws = 'VehicleInfo_rent_1732f1f0',
    Ts = 'VehicleInfo_rentLabel_33c8aaa',
    Ss = 'VehicleInfo_rentCounter_771ad73b',
    Is = 'VehicleInfo_rentIcon_1d418163',
    Ps = { [W.lightTank]: 'LT', [W.mediumTank]: 'MT', [W.heavyTank]: 'HT', [W.SPG]: 'SPG', [W['AT-SPG']]: 'ATSPG' },
    ks = 'x60x45',
    Ms = 'x40x30',
    Es = [Z, K.spg];
const Rs = {
        [q.RENTAL_IS_OVER]: 'rentalIsOver',
        [q.WOT_PLUS_EXCLUSIVE_VEHICLE_DISABLED]: 'subscriptionSuspended',
        [q.SUBSCRIPTION_SUSPENDED]: 'subscriptionSuspended',
    },
    As = a(function (e) {
        const t = b.resolve('strings'),
            { model: s } = mt(),
            a = yt(),
            o = s.type.get(),
            l = s.vehicleId.get(),
            c = U(s.role.get()),
            d = (function (e, t) {
                if (void 0 === e || t === Z) return;
                const s = Ps[e];
                return e === W.SPG ? `role_${s}` : `role_${s}_${t}`;
            })(o, c),
            h = a.model.status.get(),
            m = s.state.get(),
            u = s.rentLeftTime.get(),
            _ = s.rentLeftWins.get(),
            p = s.rentLeftBattles.get(),
            v = s.nation.get(),
            x = s.longName.get(),
            f = s.shortName.get(),
            g = x.length > 36 ? f : x,
            j = G(
                'vehicleRoles',
                r.useMemo(() => [l], [l]),
            ),
            C = k(
                (() => {
                    switch (h) {
                        case us:
                            return {
                                body: t.readOrEmpty(
                                    'veh_compare.vehPreview.compareVehicleBtn.tooltips.addToCompare.body',
                                ),
                            };
                        case 'disabledFullBasket':
                            return {
                                header: t.readOrEmpty(
                                    'veh_compare.vehPreview.compareVehicleBtn.tooltips.disabled.header',
                                ),
                                body: t.readOrEmpty('veh_compare.vehPreview.compareVehicleBtn.tooltips.disabled.body'),
                            };
                        case 'canNotCompare':
                            return {
                                header: t.readOrEmpty(
                                    'veh_compare.vehPreview.compareVehicleBtn.tooltips.disabled.header',
                                ),
                                body: t.readOrEmpty(
                                    'veh_compare.vehPreview.compareVehicleBtn.tooltips.canNotAddToCompare.body',
                                ),
                            };
                        case 'disabledOnServer':
                            return {
                                header: t.readOrEmpty(
                                    'veh_compare.vehPreview.compareVehicleBtn.tooltips.disabled.header',
                                ),
                                body: t.readOrEmpty(
                                    'veh_compare.compareVehicleBtn.tooltips.disabledOnServer.attention',
                                ),
                            };
                        default:
                            return (console.error('Comparison status is not handled: ', h), {});
                    }
                })(),
            ),
            w = N(
                { roleSize: X.Role.sizes.x16x16, flagSize: Ms },
                { medium: { roleSize: X.Role.sizes.x24x24, flagSize: ks } },
            );
        return i.jsxs('div', {
            className: n(_s, e.className),
            children: [
                i.jsxs(X, {
                    children: [
                        i.jsx(V, { path: `flags.${w.flagSize}.${v}`, className: ps }),
                        i.jsx(X.Level, { value: s.level.get(), className: vs }),
                        o &&
                            i.jsx(X.Type, {
                                type: o,
                                size: X.Type.sizes.x64x64,
                                premium: s.elite.get(),
                                className: bs,
                            }),
                        i.jsx(X.Name, { className: n(xs, s.premium.get() && fs), children: g }),
                        i.jsx(A, {
                            ...C,
                            theme: A.themes.secondary,
                            size: A.sizes.extraSmall,
                            onClick: a.controls.addToComparison,
                            className: Cs,
                            autoAlignContent: !1,
                            disabled: h !== us,
                            children: i.jsx(V, { path: 'vehicle_hub.comparison', width: '20rem', height: '20rem' }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: gs,
                    children: [
                        c !== Z &&
                            i.jsxs('div', {
                                ...j,
                                className: Ns,
                                children: [
                                    !Es.includes(c) &&
                                        i.jsx(X.Role, { size: w.roleSize, roleKey: c, classNames: { base: js } }),
                                    d &&
                                        i.jsx('div', {
                                            className: ys,
                                            children: i.jsx(y, {
                                                upgradeLegacy: !0,
                                                path: `menu.roleExp.roleName.${d}`,
                                                params: { groupName: t.readOrEmpty(`menu.roleExp.roleGroupName.${d}`) },
                                            }),
                                        }),
                                ],
                            }),
                        i.jsx(Y, {
                            className: ws,
                            children: (() => {
                                switch (m) {
                                    case q.RENTAL_IS_OVER:
                                    case q.WOT_PLUS_EXCLUSIVE_VEHICLE_DISABLED:
                                    case q.SUBSCRIPTION_SUSPENDED:
                                        return i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx(J, { className: Is }),
                                                i.jsx('div', {
                                                    className: Ts,
                                                    children: t.readOrEmpty(`vehicle_hub.vehicleState.${Rs[m]}`),
                                                }),
                                            ],
                                        });
                                    default:
                                        if (s.fromWotPlus.get() || (u <= 0 && p <= 0 && _ <= 0)) return;
                                        return i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx('div', {
                                                    className: Ts,
                                                    children: t.readOrEmpty('subscription.rentButton.label'),
                                                }),
                                                i.jsx(Y.ShortCounter, {
                                                    classNames: { text: Ss, icon: Is },
                                                    time: u,
                                                    wins: _,
                                                    battles: p,
                                                }),
                                            ],
                                        });
                                }
                            })(),
                        }),
                    ],
                }),
            ],
        });
    }),
    Os = 'overview',
    Ls = b.resolve('strings'),
    [Bs, Vs] = m()(
        ({ observableModel: e }) => ({
            ...{
                root: e.object(),
                researchPurchase: e.object('researchPurchaseModel'),
                menuItems: e.transform(
                    (e) =>
                        x(e, (e) => ({
                            id: e.tabName,
                            label: Ls.readOrEmpty(`vehicle_hub.tabs.${e.tabName}`),
                            counter: e.counter,
                        })),
                    'menuItems',
                ),
            },
        }),
        ({ externalModel: e }) => ({
            doAction: e.createCallbackNoArgs('researchPurchaseModel.onAction'),
            doBlueprint: e.createCallbackNoArgs('researchPurchaseModel.onBlueprint'),
            sceneWrapper: {
                onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
            },
        }),
    ),
    zs = {
        root: '/vehicleHub',
        overview: '/vehicleHub/overview',
        modules: '/vehicleHub/modules',
        vehSkillTree: '/vehicleHub/vehSkillTree',
        stats: '/vehicleHub/stats',
        armor: '/vehicleHub/armor',
    },
    $s = 'ArmorMeterValue_armor_c708c6a5',
    Ds = 'ArmorMeterValue_overlay_67fa364',
    Fs = 'ArmorMeterValue_disabled_b9c2da32',
    Hs = 'ArmorMeterValue_e0f8b036',
    Ws = 'ArmorMeterValue_values_edf27e48',
    Us = r.memo(function ({ leftValue: e, rightValue: t, color: s, overlay: a, isActive: r }) {
        return i.jsxs('div', {
            className: Hs,
            style: { backgroundColor: s },
            children: [
                !r && i.jsx('div', { className: Fs }),
                i.jsx('div', { className: $s }),
                a && i.jsx('div', { className: Ds, style: { backgroundImage: `url(${a})` } }),
                i.jsxs('div', {
                    className: Ws,
                    children: [i.jsx('div', { children: e }), i.jsx('div', { children: t })],
                }),
            ],
        });
    }),
    Gs = 'ArmorMeter_header_a0a3e4bf',
    Xs = 'ArmorMeter_title_655b1c9f',
    Zs = 'ArmorMeter_meter_bdbfcfac',
    Ks = 'ArmorMeter_units_3e886a55',
    Ys = b.resolve('strings'),
    qs = function ({ title: e, className: t, armorValues: s, gradient: a }) {
        const r = (100 * (s.length - 1)) / s.length;
        return i.jsxs('div', {
            className: t,
            children: [
                i.jsxs('div', {
                    className: Gs,
                    children: [
                        i.jsx($, { text: e, className: Xs }),
                        i.jsx('div', {
                            className: Ks,
                            children: Ys.readOrEmpty('armor_inspector.armorValues.title.values'),
                        }),
                    ],
                }),
                i.jsx('div', {
                    className: Zs,
                    style: { background: `url(${a}) left center / ${r}% 100% no-repeat` },
                    children: s.map((e, t) => i.jsx(Us, { ...e }, t)),
                }),
            ],
        });
    };
const Js = {
        base: 'ExplanatoryText_379a5ca1',
        header: 'ExplanatoryText_header_e4af7435',
        details: 'ExplanatoryText_details_cd68399b',
        section: 'ExplanatoryText_section_9f076bab',
        image: 'ExplanatoryText_image_3f348cac',
        image__nominal: 'ExplanatoryText_image__nominal_a0381158',
        image__angle: 'ExplanatoryText_image__angle_d375ca7d',
        image__effective: 'ExplanatoryText_image__effective_10c7ac24',
        info: 'ExplanatoryText_info_f9059b4b',
        text: 'ExplanatoryText_text_74dd392b',
        noteHeader: 'ExplanatoryText_noteHeader_c9569424',
        note: 'ExplanatoryText_note_3f45e4ff',
        highlightedWords: 'ExplanatoryText_highlightedWords_c7cadce9',
        guide: 'ExplanatoryText_guide_ad2c3255',
        buttons: 'ExplanatoryText_buttons_939931e7',
        button: 'ExplanatoryText_button_488d211',
        video: 'ExplanatoryText_video_15929d02',
        arrow: 'ExplanatoryText_arrow_d5aaa30c',
        arrow__opened: 'ExplanatoryText_arrow__opened_88188b79',
    },
    Qs = 50,
    ea = /\{([A-Za-z][A-Za-z0-9_]*)_Open\}(.*?)\{\1_Close\}/gs,
    ta = b.resolve('strings'),
    sa = b.resolve('images');
function aa({ text: e, tooltipId: t, onMouseEnter: s, onMouseLeave: a }) {
    const n = r.useRef(null),
        o = (function ({ alert: e, body: t, header: s, note: a, onMouseEnter: i, onMouseLeave: n }) {
            const o = k({ alert: e, body: t, header: s, note: a });
            return r.useMemo(
                () => ({
                    onMouseEnter: () => {
                        (null == i || i(), o.onMouseEnter());
                    },
                    onMouseLeave: () => {
                        (null == n || n(), o.onMouseLeave());
                    },
                    onClick: o.onClick,
                }),
                [o, i, n],
            );
        })({
            body: ta.readOrEmpty(`armor_inspector.explanatory.tooltips.${t}.body`),
            onMouseEnter: s,
            onMouseLeave: a,
        }),
        l = (e) => {
            (n.current && clearTimeout(n.current), null === n.current && o.onMouseEnter(e));
        },
        c = (e) => {
            n.current = setTimeout(() => {
                (o.onMouseLeave(), (n.current = null));
            }, Qs);
        },
        d = R.strings.settings.LANGUAGE_CODE().toLowerCase();
    return re(ie(e, d), d, (e, t) =>
        i.jsx(
            'span',
            { className: Js.highlightedWords, onMouseEnter: l, onMouseLeave: c, onClick: o.onClick, children: e },
            `${e}_${t}`,
        ),
    );
}
function ra({
    linkButtonLabel: e,
    onLinkButtonPressed: t,
    onLegendClicked: s,
    onLegendTooltipOpened: a,
    onLegendTooltipClosed: o,
}) {
    const [l, c] = r.useState(false),
        { api: d } = Q(),
        h = N({ value: ee.small }, { medium: { value: ee.medium } }),
        m = (e) => {
            let t = e;
            const s = {};
            return (
                [...e.matchAll(ea)].forEach((e, r) => {
                    const n = e[0],
                        l = e[1],
                        c = e[2],
                        d = `matched_${r}`;
                    ((s[d] = i.jsx(aa, {
                        text: c,
                        tooltipId: l,
                        onMouseEnter: () => (null == a ? void 0 : a(l)),
                        onMouseLeave: () => (null == o ? void 0 : o(l)),
                    })),
                        (t = t.replace(n, `{{${d}}}`)));
                }),
                { text: t, binding: s }
            );
        },
        u = m(ta.readOrEmpty('armor_inspector.explanatory.nominal.description')),
        _ = m(ta.readOrEmpty('armor_inspector.explanatory.angle.description')),
        p = m(ta.readOrEmpty('armor_inspector.explanatory.effective.description')),
        v = m(ta.readOrEmpty('armor_inspector.explanatory.note.description'));
    return i.jsxs(te, {
        opened: l,
        className: Js.base,
        children: [
            i.jsxs(te.Summary, {
                scrollable: !0,
                onClick: () => {
                    c((e) => {
                        const t = !e;
                        return (null == s || s(t), t);
                    });
                },
                children: [
                    i.jsx('div', {
                        className: Js.header,
                        children: ta.readOrEmpty('armor_inspector.explanatory.header'),
                    }),
                    i.jsx(te.Arrow, {
                        style: { backgroundImage: `url(${sa.readOrEmpty('lobby.armor_inspector.arrow_accordion')})` },
                        className: n(Js.arrow, l && Js.arrow__opened),
                    }),
                ],
            }),
            i.jsxs(te.AnimatedDetails, {
                opened: l,
                animationSettings: { onRest: d.recalculateContent },
                className: Js.details,
                children: [
                    i.jsxs('div', {
                        className: Js.section,
                        children: [
                            i.jsx('div', { className: n(Js.image, Js.image__nominal) }),
                            i.jsxs('div', {
                                className: Js.info,
                                children: [
                                    i.jsx('div', {
                                        className: Js.header,
                                        children: ta.readOrEmpty('armor_inspector.explanatory.nominal.header'),
                                    }),
                                    i.jsx(se, {
                                        className: Js.text,
                                        text: u.text,
                                        params: u.binding,
                                        split: !0,
                                        fullSize: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i.jsxs('div', {
                        className: Js.section,
                        children: [
                            i.jsx('div', { className: n(Js.image, Js.image__angle) }),
                            i.jsxs('div', {
                                className: Js.info,
                                children: [
                                    i.jsx('div', {
                                        className: Js.header,
                                        children: ta.readOrEmpty('armor_inspector.explanatory.angle.header'),
                                    }),
                                    i.jsx(se, {
                                        className: Js.text,
                                        text: _.text,
                                        params: _.binding,
                                        split: !0,
                                        fullSize: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i.jsxs('div', {
                        className: Js.section,
                        children: [
                            i.jsx('div', { className: n(Js.image, Js.image__effective) }),
                            i.jsxs('div', {
                                className: Js.info,
                                children: [
                                    i.jsx('div', {
                                        className: Js.header,
                                        children: ta.readOrEmpty('armor_inspector.explanatory.effective.header'),
                                    }),
                                    i.jsx(se, {
                                        className: Js.text,
                                        text: p.text,
                                        params: p.binding,
                                        split: !0,
                                        fullSize: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    i.jsxs('div', {
                        className: Js.noteHeader,
                        children: [
                            i.jsx('div', { className: Js.note }),
                            i.jsx('div', {
                                className: Js.header,
                                children: ta.readOrEmpty('armor_inspector.explanatory.note.header'),
                            }),
                        ],
                    }),
                    v.text
                        .split('\n')
                        .map((e, t) =>
                            i.jsx(
                                se,
                                { className: Js.text, text: e, params: v.binding, split: !0, fullSize: !0 },
                                `${e}_${t}`,
                            ),
                        ),
                    e &&
                        i.jsxs('div', {
                            className: Js.guide,
                            children: [
                                i.jsx('div', {
                                    className: Js.text,
                                    children: ta.readOrEmpty('armor_inspector.explanatory.guide'),
                                }),
                                i.jsx('div', {
                                    className: Js.buttons,
                                    children: i.jsx(A, {
                                        onClick: t,
                                        theme: ae.secondary,
                                        size: h.value,
                                        children: i.jsxs('div', {
                                            className: Js.button,
                                            children: [i.jsx('div', { className: Js.video }), e],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
const ia = {
        root: 'ScrollContainer_root_14e26b7c',
        base: 'ScrollContainer_9b1bf0d9',
        base__top: 'ScrollContainer_base__top_1b8e4a94',
        base__bottom: 'ScrollContainer_base__bottom_a417efd7',
        base__both: 'ScrollContainer_base__both_3ad63038',
    },
    na = 'top',
    oa = 'bottom',
    la = 'both',
    ca = 'none';
const da = a(function ({ children: e }) {
        const { api: t } = Q(),
            [s, a] = ne(t);
        return i.jsx(oe, {
            className: n(ia.base, ia[`base__${((r = s), (o = a), r || o ? (r ? (o ? ca : oa) : na) : la)}`]),
            children: e,
        });
        var r, o;
    }),
    ha = 'Separator_1dc887a0',
    ma = 'Separator_noise_ee3f6dd1';
function ua({ className: e }) {
    return i.jsx('div', { className: n(ha, e), children: i.jsx('div', { className: n(ma) }) });
}
const [_a, pa] = m()(
        ({ observableModel: e }) => ({
            ...{
                ...e.primitives(['linkButtonLabel', 'mainGradient', 'spacedGradient']),
                root: e.object(),
                mainArmor: e.arrayClone('mainArmor'),
                spacedArmor: e.arrayClone('spacedArmor'),
            },
        }),
        ({ externalModel: e }) => ({
            linkButtonPressed: e.createCallbackNoArgs('onLinkButtonPressed'),
            legend: {
                click: e.createCallback((e) => ({ state: e }), 'onLegendClicked'),
                tooltipOpen: e.createCallback((e) => ({ id: e }), 'onLegendTooltipOpened'),
                tooltipClose: e.createCallback((e) => ({ id: e }), 'onLegendTooltipClosed'),
            },
        }),
    ),
    va = {
        base: 'Armor_219d401',
        content: 'Armor_content_8491786b',
        armor: 'Armor_97cd97c7',
        armor__spaced: 'Armor_armor__spaced_b89a3d1a',
        separator: 'Armor_separator_f6f91a52',
        legend: 'Armor_legend_68159cba',
        sceneWrapper: 'Armor_sceneWrapper_c36410b4',
    },
    ba = b.resolve('strings'),
    xa = a(function () {
        const { controls: e } = Vs(),
            { model: t, controls: s } = pa(),
            a = s.legend;
        return i.jsxs('div', {
            className: va.base,
            children: [
                i.jsx(le, {
                    className: va.sceneWrapper,
                    moveSpace: e.sceneWrapper.onMoveSpace,
                    onMouseOver3dScene: e.sceneWrapper.onMouseOver3dScene,
                }),
                i.jsxs('div', {
                    className: va.content,
                    children: [
                        i.jsx(qs, {
                            className: va.armor,
                            title: ba.readOrEmpty('armor_inspector.armorValues.title.main'),
                            armorValues: t.mainArmor.get(),
                            gradient: t.mainGradient.get(),
                        }),
                        i.jsx(qs, {
                            className: n(va.armor, va.armor__spaced),
                            title: ba.readOrEmpty('armor_inspector.armorValues.title.spaced'),
                            armorValues: t.spacedArmor.get(),
                            gradient: t.spacedGradient.get(),
                        }),
                        i.jsx(ua, { className: va.separator }),
                        i.jsx('div', {
                            className: va.legend,
                            children: i.jsxs(ce, {
                                children: [
                                    i.jsx(da, {
                                        children: i.jsx(ra, {
                                            linkButtonLabel: t.linkButtonLabel.get(),
                                            onLinkButtonPressed: s.linkButtonPressed,
                                            onLegendClicked: a.click,
                                            onLegendTooltipOpened: a.tooltipOpen,
                                            onLegendTooltipClosed: a.tooltipClose,
                                        }),
                                    }),
                                    i.jsx(de, { classNames: { base: va.verticalBar } }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    });
function fa() {
    return i.jsx(_a, { options: { context: 'model.armorModel' }, children: i.jsx(he, { children: i.jsx(xa, {}) }) });
}
var ga = ((e) => (
    (e.MAGAZINE_GUN = 'magazineGun'),
    (e.AUTO_LOADER_GUN = 'autoLoaderGun'),
    (e.AUTO_LOADER_GUN_BOOST = 'autoLoaderGunBoost'),
    (e.DAMAGE_MUTABLE = 'damageMutable'),
    (e.DUAL_GUN = 'dualGun'),
    (e.HYDRAULIC_CHASSIS = 'hydraulicChassis'),
    (e.TRACK_WITHIN_TRACK = 'trackWithinTrack'),
    (e.SIEGE_MODE = 'siegeMode'),
    (e.STUN = 'stun'),
    (e.HYDRAULIC_WHEELED_CHASSIS = 'hydraulicWheeledChassis'),
    (e.TURBOSHAFT_ENGINE = 'turboshaftEngine'),
    (e.ROCKET_ACCELERATION = 'rocketAcceleration'),
    (e.TARGET_DESIGNATOR = 'targetDesignator'),
    (e.DUAL_ACCURACY = 'dualAccuracy'),
    (e.AUTO_SHOOT_GUN = 'autoShootGun'),
    (e.TWIN_GUN = 'twinGun'),
    (e.IMPROVED_RAMMING = 'improvedRamming'),
    (e.CONCENTRATION_MODE = 'concentrationMode'),
    (e.BATTLE_FURY = 'battleFury'),
    (e.EXTRA_SHOT_CLIP = 'extraShotClip'),
    (e.POWER_MODE = 'powerMode'),
    (e.ACCURACY_STACKS = 'accuracyStacks'),
    (e.SUPPORT_WEAPON = 'supportWeapon'),
    (e.PILLBOX_SIEGE_MODE = 'pillboxSiegeMode'),
    (e.CHARGEABLE_BURST = 'chargeableBurst'),
    (e.RECHARGEABLE_NITRO = 'rechargeableNitro'),
    (e.CHARGE_SHOT = 'chargeShot'),
    (e.OVERHEAT_STACKS = 'overheatStacks'),
    (e.STANCE_DANCE = 'stanceDance'),
    (e.STATIONARY_RELOAD = 'stationaryReload'),
    e
))(ga || {});
const Na = {
        [ga.AUTO_SHOOT_GUN]: 10,
        [ga.MAGAZINE_GUN]: 20,
        [ga.AUTO_LOADER_GUN]: 30,
        [ga.AUTO_LOADER_GUN_BOOST]: 40,
        [ga.DAMAGE_MUTABLE]: 50,
        [ga.DUAL_GUN]: 60,
        [ga.DUAL_ACCURACY]: 70,
        [ga.HYDRAULIC_CHASSIS]: 80,
        [ga.TRACK_WITHIN_TRACK]: 90,
        [ga.TWIN_GUN]: 100,
        [ga.SIEGE_MODE]: 110,
        [ga.STUN]: 120,
        [ga.HYDRAULIC_WHEELED_CHASSIS]: 130,
        [ga.TURBOSHAFT_ENGINE]: 140,
        [ga.ROCKET_ACCELERATION]: 150,
    },
    [ja, ya] = m()(
        ({ observableModel: e }) => {
            const t = {
                    root: e.object(),
                    prevResearchItems: e.arrayClone('prevResearchItems'),
                    currentResearchItems: e.arrayClone('currentResearchItems'),
                    researchItems: e.dict('researchItems'),
                    selectedId: o.box(0),
                    hoveredId: o.box(0),
                    fieldModificationHover: o.box(!1),
                },
                s = u.model((e) => {
                    const s = t.researchItems.get(e);
                    return s ? me(s.mechanics, (e, t) => Na[e.name] - Na[t.name]) : [];
                }),
                a = u.primitive((e) => {
                    const s = t.researchItems.get(e);
                    return (
                        !(!s || 0 === s.path.length) &&
                        ue(s.path, (e) => {
                            const s = t.researchItems.get(e);
                            return !!s && !s.isResearched;
                        })
                    );
                }),
                r = u.model((e) => {
                    var s;
                    return _e((null == (s = t.researchItems.get(e)) ? void 0 : s.urgentIds) ?? [], (e) => {
                        var s;
                        return !(null == (s = t.researchItems.get(e)) ? void 0 : s.isInstalled);
                    });
                }),
                i = u.model((e) =>
                    x(r(e), (e) => {
                        var s;
                        return (null == (s = t.researchItems.get(e)) ? void 0 : s.primaryClass) ?? '';
                    }),
                ),
                n = u.primitive((e) => pe(r(t.selectedId.get()), e)),
                l = u.primitive((e) => pe(r(t.hoveredId.get()), e));
            return {
                ...t,
                computes: {
                    mechanics: s,
                    isDisabled: a,
                    getUrgent: r,
                    getUrgentNames: i,
                    isUrgentSelected: n,
                    isUrgentHover: l,
                },
            };
        },
        ({ externalModel: e, model: t }) => {
            const s = l((e) => {
                    t.fieldModificationHover.set(e);
                }),
                a = l((e) => {
                    t.selectedId.set(e);
                }),
                r = l((e) => {
                    t.hoveredId.set(e);
                }),
                i = l(() => t.hoveredId.set(0));
            return {
                changeVehicle: e.createCallback((e) => ({ itemCD: e }), 'onVehicleChange'),
                installItem: e.createCallback((e) => ({ itemCD: e }), 'onInstallItem'),
                unlockItem: e.createCallback((e) => ({ itemCD: e }), 'onUnlockItem'),
                buyAndInstallItem: e.createCallback((e) => ({ itemCD: e }), 'onBuyAndInstallItem'),
                sellItem: e.createCallback((e) => ({ itemCD: e }), 'onSellItem'),
                setFieldModificationHover: s,
                setSelectedID: a,
                setHoverID: r,
                clearUrgentHover: i,
            };
        },
    ),
    [Ca, wa] = m()(
        ({ observableModel: e }) => ({ ...e.primitives(['state', 'counter']) }),
        ({ externalModel: e }) => ({ openPostProgression: e.createCallbackNoArgs('onVehiclePostProgression') }),
    ),
    Ta = {
        background: 'FieldModification_background_ee006933',
        base: 'FieldModification_9fc9bb71',
        button: 'FieldModification_button_6d46a00e',
        button__locked: 'FieldModification_button__locked_ee006933',
        corners: 'FieldModification_corners_e6f28170',
        corners__locked: 'FieldModification_corners__locked_6a807d70',
        lock: 'FieldModification_lock_f63eaae',
        lock__visible: 'FieldModification_lock__visible_b9aeadbc',
        content: 'FieldModification_content_65452696',
        button__secondary: 'FieldModification_button__secondary_ee006933',
        button__enabled: 'FieldModification_button__enabled_ee006933',
        button__unlocked: 'FieldModification_button__unlocked_ee006933',
        icon: 'FieldModification_icon_d613f266',
        descriptionContainer: 'FieldModification_descriptionContainer_ccd688fe',
        description: 'FieldModification_description_e3266628',
        description__visible: 'FieldModification_description__visible_b9aeadbc',
        bubble: 'FieldModification_bubble_df0e85ba',
    },
    Sa = ve('FieldModificationButton', {
        element: A,
        className: n(Ta.button, Ta.button__secondary, Ta.button__enabled),
        cva: { variants: { locked: { true: Ta.button__locked, false: Ta.button__unlocked } } },
    });
const Ia = a(function ({ className: e }) {
        const t = b.resolve('strings'),
            s = b.resolve('views'),
            { model: a, controls: r } = wa(),
            { model: o, controls: l } = ya(),
            c = a.state.get(),
            d = o.currentResearchItems.get()[0],
            h = d ? o.researchItems.get(d.id) : void 0,
            m = be({ contentId: s.read((e) => e.lobby.tooltips.VehPostProgressionEntryPointTooltip('resId')) });
        const u = N(
            { buttonSize: A.sizes.small, bubbleSize: H.small },
            { large: { buttonSize: A.sizes.large, bubbleSize: H.medium } },
        );
        var _, p;
        if (0 !== c)
            return i.jsxs('div', {
                className: n(Ta.base, e),
                children: [
                    i.jsxs(Sa, {
                        theme: A.themes.secondary,
                        size: u.buttonSize,
                        classNames: { background: Ta.background, overlay: Ta.overlay, content: Ta.content },
                        locked: 1 === c,
                        onMouseEnter: function () {
                            (m.onMouseEnter(), l.setFieldModificationHover(!0));
                        },
                        onMouseLeave: function () {
                            (m.onMouseLeave(), l.setFieldModificationHover(!1));
                        },
                        onClick: function () {
                            (m.onClick(), r.openPostProgression());
                        },
                        autoAlignContent: !1,
                        children: [
                            i.jsx('div', { className: Ta.icon }),
                            t.readOrEmpty('vehicle_hub.modules.controls.button.field_modification'),
                        ],
                    }),
                    i.jsx('div', { className: n(Ta.lock, 1 === c && Ta.lock__visible) }),
                    i.jsx('div', { className: n(Ta.corners, 1 === c && Ta.corners__locked) }),
                    i.jsx(D.Root, {
                        hidden: 0 === a.counter.get(),
                        className: Ta.bubble,
                        children: i.jsx(D.Icon, { size: u.bubbleSize, type: F.bubble }),
                    }),
                    h &&
                        i.jsx('div', {
                            className: Ta.descriptionContainer,
                            children: i.jsx('div', {
                                className: n(
                                    Ta.description,
                                    1 === c && o.fieldModificationHover.get() && Ta.description__visible,
                                ),
                                children: t.readOrEmpty(
                                    `veh_post_progression.researchEntry.status.${((_ = h.isElite), (p = h.isInInventory), _ || p ? (_ ? (p ? void 0 : 'notPurchased') : 'notResearched') : 'notResearchedNotPurchased')}`,
                                    'silent',
                                ),
                            }),
                        }),
                ],
            });
    }),
    Pa = 'Control_6fe95751',
    ka = 'Control_topContainer_5fe23b14',
    Ma = 'Control_fieldModification_9434b7fa',
    Ea = 'Control_separator_523d2573',
    Ra = 'Control_descriptor_6451bfc5',
    Aa = 'Control_controls_c1ed063f',
    Oa = 'Control_info_76cccc17',
    La = 'Control_currency_6bfd0c7d',
    Ba = 'Control_name_91f33520',
    Va = 'Control_moduleName_b5e482cd',
    za = 'Control_secondaryButton_e863701f',
    $a = b.resolve('strings'),
    Da = 'researched',
    Fa = 'vehicleInBattle',
    Ha = 'eliteVehicle',
    Wa = 'disableVehicle',
    Ua = 'moduleMounted',
    Ga = 'disableModule',
    Xa = 'buyVehicle',
    Za = 'buyAndInstall',
    Ka = 'research',
    Ya = 'mount',
    qa = 'enabled',
    Ja = 'battle',
    Qa = 'damaged',
    er = 'prebattle',
    tr = 'incompatible',
    sr = 'notEnoughCurrency',
    ar = 'notEnoughXP',
    rr = 'wgmDisabled',
    ir = [Ya, Za],
    nr = [q.DAMAGED, q.EXPLODED, q.DESTROYED];
function or(e, t) {
    switch (e) {
        case qa:
            return;
        case rr:
            return {
                body: $a.readOrEmpty('tooltips.vehiclePreview.buyButton.walletUnavailable.body'),
                header: $a.readOrEmpty('tooltips.vehiclePreview.buyButton.walletUnavailable.header'),
            };
        case sr:
            return {
                body: $a.readOrEmpty('tooltips.vehiclePreview.buyButton.notEnoughCredits.body'),
                header: $a.readOrEmpty('tooltips.vehiclePreview.buyButton.notEnoughCredits.header'),
            };
        case ar:
            return {
                body: $a.readOrEmpty('tooltips.researchPage.module.status.notEnoughXP.text'),
                header: $a.readOrEmpty('tooltips.researchPage.module.status.notEnoughXP.header'),
            };
        case Ja:
            return { body: $a.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.battle') };
        case Qa:
            return { body: $a.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.damaged') };
        case er:
            return { body: $a.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.prebattle') };
        case tr: {
            const e = $a.readOrEmpty('vehicle_hub.modules.name.separator'),
                s = t.map((e) => $a.readOrEmpty(`vehicle_hub.modules.name.${e}`));
            return {
                body: xe('vehicle_hub.modules.controls.button.tooltip.disableReason.incompatible', {
                    module: s.join(e),
                }),
            };
        }
        default:
            return void console.error('Unknown button state: ', e);
    }
}
const lr = a(function () {
        var e;
        const { model: t, controls: s } = ya(),
            a = mt().model,
            { model: r } = dt(),
            n = a.vehicleId.get(),
            o = a.state.get(),
            l = t.researchItems.get(n),
            c = t.selectedId.get(),
            d = t.researchItems.get(c),
            h = !!d && 'AVAILABLE' === (null == (e = r.currencies.get(d.priceCurrency)) ? void 0 : e.status),
            m = Boolean(d && !d.hasEnoughCurrency && !d.isInInventory),
            u = Boolean(d && !d.hasEnoughXP && !d.isResearched),
            _ = (function (e, t, s, a, r, i) {
                if (r) {
                    if (r.isInstalled) return Ua;
                    if (t) return Ha;
                    if (!(null == a ? void 0 : a.isResearched)) return Wa;
                    if (i && !r.isResearched) return Ga;
                    if (a.isResearched && !a.isInInventory && r.isResearched) return Xa;
                } else {
                    if (e) return Ha;
                    if (s) return Fa;
                    if (!(null == a ? void 0 : a.isResearched)) return Wa;
                    if (a.isResearched) return Da;
                }
            })(a.elite.get(), a.premium.get(), o === q.BATTLE, l, d, t.computes.isDisabled(c)),
            p = d
                ? (function (e) {
                      return e.isResearched
                          ? e.isInInventory
                              ? e.isInstalled
                                  ? void console.error('buttonTypes is not defined')
                                  : Ya
                              : Za
                          : Ka;
                  })(d)
                : void 0,
            v = (function (e, t, s, a, r, i) {
                const n = e && ir.includes(e);
                return s
                    ? e === Ka && r
                        ? ar
                        : n
                          ? t.length > 0
                              ? tr
                              : i === q.BATTLE
                                ? Ja
                                : i && nr.includes(i)
                                  ? Qa
                                  : i === q.IN_PREBATTLE
                                    ? er
                                    : e === Za && a
                                      ? sr
                                      : qa
                          : qa
                    : rr;
            })(p, t.computes.getUrgentNames(c), h, m, u, o),
            b = v !== qa,
            x = k({ ...or(v, t.computes.getUrgentNames(c)) }),
            f = N(
                { currency: j.sizes.small, button: A.sizes.small },
                { medium: { currency: j.sizes.medium, button: A.sizes.large }, large: { currency: j.sizes.large } },
            );
        return i.jsxs('div', {
            className: Pa,
            children: [
                i.jsxs('div', {
                    className: ka,
                    children: [i.jsx(Ia, { className: Ma }), i.jsx('div', { className: Ea })],
                }),
                _
                    ? i.jsx('div', {
                          className: Ra,
                          children: $a.readOrEmpty(`vehicle_hub.modules.controls.descriptor.${_}`),
                      })
                    : i.jsxs('div', {
                          className: Aa,
                          children: [
                              d &&
                                  i.jsxs('div', {
                                      className: Oa,
                                      children: [
                                          p !== Ya &&
                                              i.jsx(j, {
                                                  className: La,
                                                  type: d.isResearched ? j.types.credits : j.types.tankXP,
                                                  size: f.currency,
                                                  reverse: !0,
                                                  children: d.isResearched ? d.priceAmount : d.requiredXp,
                                              }),
                                          i.jsx(y, {
                                              className: Ba,
                                              path: 'vehicle_hub.modules.controls.name',
                                              params: { name: d.userName, classModuleName: Va },
                                          }),
                                      ],
                                  }),
                              p === Ya &&
                                  i.jsx('div', {
                                      ...(v === rr && x),
                                      children: i.jsx(A, {
                                          theme: A.themes.secondary,
                                          size: f.button,
                                          className: za,
                                          disabled: !h,
                                          onClick: function () {
                                              h && s.sellItem(c);
                                          },
                                          children: $a.readOrEmpty('vehicle_hub.modules.controls.button.sell'),
                                      }),
                                  }),
                              i.jsx('div', {
                                  ...(b && x),
                                  children: i.jsx(A, {
                                      theme: A.themes.primary,
                                      size: f.button,
                                      onClick: function () {
                                          if (!b)
                                              switch (p) {
                                                  case Ka:
                                                      return s.unlockItem(c);
                                                  case Ya:
                                                      return s.installItem(c);
                                                  case Za:
                                                      return s.buyAndInstallItem(c);
                                                  default:
                                                      console.error(`buttonType is not correct by id item ${c}`);
                                              }
                                      },
                                      disabled: b,
                                      children: $a.readOrEmpty(`vehicle_hub.modules.controls.button.${p}`),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    }),
    cr = {
        background: 'Module_background_e500b413',
        frame: 'Module_frame_a88cf4e0',
        urgent: 'Module_urgent_309334a1',
        hover: 'Module_hover_83c84d48',
        disabledPattern: 'Module_disabledPattern_42f9674b',
        base: 'Module_b198140c',
        base__withPrice: 'Module_base__withPrice_dee8d932',
        base__withLongPrice: 'Module_base__withLongPrice_dee8d932',
        base__disabled: 'Module_base__disabled_dee8d932',
        base__mounted: 'Module_base__mounted_dee8d932',
        base__pressed: 'Module_base__pressed_dee8d932',
        base__selected: 'Module_base__selected_dee8d932',
        check: 'Module_check_2a23d643',
        base__hover: 'Module_base__hover_dee8d932',
        icon: 'Module_icon_57063a3e',
        base__locked: 'Module_base__locked_dee8d932',
        level: 'Module_level_5cd3738f',
        price: 'Module_price_d08f5989',
        name: 'Module_name_b388802',
        mechanics: 'Module_mechanics_a9aa43a1',
        mechanic: 'Module_mechanic_c9855dfe',
    },
    dr = b.resolve('images'),
    hr = b.resolve('sounds'),
    mr = 'small',
    ur = 'large',
    _r = 'default',
    pr = 'locked',
    vr = 'disabled',
    br = 'mounted',
    xr = 'default',
    fr = 'selected',
    gr = 'pressed',
    Nr = ve('Module', cr.base, {
        variants: {
            state: {
                default: cr.base__default,
                locked: cr.base__locked,
                disabled: cr.base__disabled,
                mounted: cr.base__mounted,
            },
            status: { default: cr.base__default, selected: cr.base__selected, pressed: cr.base__pressed },
            hover: { true: cr.base__hover },
            withPrice: { true: cr.base__withPrice },
            withLongPrice: { true: cr.base__withLongPrice },
        },
    }),
    jr = (e, t) => (e ? gr : t ? fr : xr),
    yr = a(function ({ id: e }) {
        const [t, s] = r.useState(!1),
            [a, n] = r.useState(!1),
            { model: o, controls: l } = ya(),
            c = mt().model.vehicleId.get(),
            d = o.researchItems.get(e),
            h = o.researchItems.get(c),
            m = o.computes.isUrgentSelected(e),
            u = o.computes.isUrgentHover(e),
            _ = o.fieldModificationHover.get() && !d.isResearched,
            p =
                ((v = o.computes.isDisabled(e)),
                (b = d.isInstalled),
                (f = d.isInInventory),
                (g = d.isResearched),
                (y = h.isResearched && !h.isInInventory && d.isResearched),
                v && !g ? vr : b ? br : (f && g) || y ? _r : pr);
        var v, b, f, g, y;
        const C = ((e, t, s, a) => !(e !== pr && e !== vr) && (s || (!a && !t)))(
                p,
                d.autoUnlocked,
                h.isInInventory,
                d.isResearched,
            ),
            w = N({ size: mr }, { large: { size: ur } }),
            T = d.isResearched ? d.priceAmount : d.requiredXp,
            S = C && String(T).length >= (w.size === mr ? 5 : 7);
        return (
            r.useEffect(() => {
                if (t) return fe.up(() => s(!1));
            }, [t]),
            d
                ? i.jsxs(Nr, {
                      state: p,
                      status: jr(t, o.selectedId.get() === e),
                      hover: a || _,
                      withPrice: C,
                      withLongPrice: S,
                      onClick: function () {
                          (hr.play('play'), l.setSelectedID(e));
                      },
                      onMouseDown: function () {
                          s(!0);
                      },
                      onMouseEnter: function () {
                          (n(!0), hr.play('highlight'), l.setHoverID(e));
                      },
                      onMouseLeave: function () {
                          (n(!1), l.clearUrgentHover());
                      },
                      children: [
                          i.jsxs('div', {
                              className: cr.background,
                              children: [
                                  i.jsx('div', { className: cr.frame }),
                                  i.jsx('div', { className: cr.check }),
                                  (m || u) && i.jsx('div', { className: cr.urgent }),
                                  i.jsx('div', { className: cr.hover }),
                              ],
                          }),
                          i.jsx('div', {
                              className: cr.icon,
                              style: {
                                  backgroundImage: `url(${dr.readOrEmpty(`modules.${((I = d.image), (P = w.size), P === mr ? I : I + 'Big')}`)})`,
                              },
                          }),
                          p === vr && i.jsx('div', { className: cr.disabledPattern }),
                          i.jsx(X.Level, { className: cr.level, value: d.level }),
                          C &&
                              i.jsx(j, {
                                  className: cr.price,
                                  type: d.isResearched ? j.types.credits : j.types.tankXP,
                                  size: j.sizes.extraSmall,
                                  reverse: !0,
                                  children: T,
                              }),
                          i.jsx('div', { className: cr.name, children: i.jsx($, { text: d.userName }) }),
                          i.jsx('div', {
                              className: cr.mechanics,
                              children: x(o.computes.mechanics(e), (e) =>
                                  i.jsx(
                                      'div',
                                      {
                                          className: cr.mechanic,
                                          style: {
                                              backgroundImage: `url(${dr.readOrEmpty(`vehicle_hub.mechanics.x20x20.${e.name}`)})`,
                                          },
                                      },
                                      e.name,
                                  ),
                              ),
                          }),
                      ],
                  })
                : null
        );
        var I, P;
    }),
    Cr = a(function ({ id: e }) {
        const { model: t } = ya(),
            s = mt().model,
            a = t.researchItems.get(e),
            n = s.vehicleId.get(),
            o = t.computes.getUrgent(e).length > 0,
            l = ge(
                'researchItem',
                r.useMemo(
                    () => ({ nodeCD: e, rootCD: n, nodeState: null == a ? void 0 : a.state, hasUrgent: o }),
                    [e, n, null == a ? void 0 : a.state, o],
                ),
                { disabled: !1 },
            ),
            c = Ne({ args: r.useMemo(() => ({ nodeCD: e, tooltipId: 'techtreeModule' }), [e]) });
        return i.jsx('div', { ...l, 'data-test-id': e, ...c, children: i.jsx(yr, { id: e }) });
    }),
    wr = {
        vignette: 'Vehicle_vignette_8d4f73b8',
        disabled: 'Vehicle_disabled_cc23a1e0',
        hover: 'Vehicle_hover_ce20ff1b',
        icon: 'Vehicle_icon_144842a5',
        base: 'Vehicle_8e868589',
        base__hover: 'Vehicle_base__hover_c03ad304',
        outsideHoverFrame: 'Vehicle_outsideHoverFrame_5901af68',
        outsideHoverFrame__visible: 'Vehicle_outsideHoverFrame__visible_fb52609e',
        outsideHoverFrame__top: 'Vehicle_outsideHoverFrame__top_fe66a63d',
        outsideHoverFrame__bottom: 'Vehicle_outsideHoverFrame__bottom_243de6f0',
        outsideHoverFrame__left: 'Vehicle_outsideHoverFrame__left_835549ac',
        outsideHoverFrame__right: 'Vehicle_outsideHoverFrame__right_8d23eaba',
        base__disabled: 'Vehicle_base__disabled_c03ad304',
        base__locked: 'Vehicle_base__locked_c03ad304',
        base__default: 'Vehicle_base__default_c03ad304',
        tankInfo: 'Vehicle_tankInfo_a86ca5c2',
        level: 'Vehicle_level_be57c8d0',
        garageIcon: 'Vehicle_garageIcon_beef5a5e',
        description: 'Vehicle_description_bb370045',
        name: 'Vehicle_name_7e5f9e26',
        price: 'Vehicle_price_3fabf99d',
        currency: 'Vehicle_currency_79bdc022',
        discountWrapper: 'Vehicle_discountWrapper_3fabf99d',
        discount: 'Vehicle_discount_ec5a977',
        price__discountedCredits: 'Vehicle_price__discountedCredits_c03ad304',
        price__discountedXp: 'Vehicle_price__discountedXp_c03ad304',
    },
    Tr = b.resolve('images'),
    Sr = b.resolve('sounds'),
    Ir = 'default',
    Pr = 'locked',
    kr = 'disabled',
    Mr = 'inGarage',
    Er = ve('Vehicle', wr.base, {
        variants: {
            state: {
                default: wr.base__default,
                locked: wr.base__locked,
                disabled: wr.base__disabled,
                inGarage: wr.base__inGarage,
            },
            hover: { true: wr.base__hover },
        },
    });
const Rr = a(function ({ id: e, isPrevNode: t = !1 }) {
        const [s, a] = r.useState(!1),
            { model: o, controls: l } = ya(),
            c = o.researchItems.get(e),
            d = o.fieldModificationHover.get() && !t && !c.isResearched,
            h = (function (e) {
                if (e && p(e)) return e;
            })(c.primaryClass),
            m = ((u = c.isDisabled), (_ = c.isInInventory), (v = c.isResearched), _ ? Mr : v ? Ir : u ? kr : Pr);
        var u, _, v;
        const b = c.isResearched ? c.priceAmount : c.requiredXp,
            x = b > 0 || c.isDiscountedPrice || c.isDiscountedXp;
        return c
            ? i.jsxs(Er, {
                  hover: s || d,
                  state: m,
                  onMouseEnter: () => {
                      (Sr.play('highlight'), a(!0));
                  },
                  onMouseLeave: () => {
                      a(!1);
                  },
                  onClick: () => {
                      (Sr.play('play'), l.changeVehicle(e));
                  },
                  children: [
                      i.jsx('div', { className: wr.vignette }),
                      i.jsx('div', { className: wr.hover }),
                      i.jsx('div', {
                          className: n(
                              wr.outsideHoverFrame,
                              wr.outsideHoverFrame__top,
                              d && wr.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              wr.outsideHoverFrame,
                              wr.outsideHoverFrame__bottom,
                              d && wr.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              wr.outsideHoverFrame,
                              wr.outsideHoverFrame__left,
                              d && wr.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              wr.outsideHoverFrame,
                              wr.outsideHoverFrame__right,
                              d && wr.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: wr.icon,
                          style: { backgroundImage: `url(${Tr.readOrEmpty(`vehicle.x190x152.${je(c.image)}`)})` },
                      }),
                      m === kr && i.jsx('div', { className: wr.disabled }),
                      i.jsxs('div', {
                          className: wr.tankInfo,
                          children: [
                              i.jsx(X.Level, { className: wr.level, value: c.level }),
                              h && i.jsx(X.Type, { type: h, size: X.Type.sizes.x24x24, premium: c.isElite }),
                          ],
                      }),
                      m === Mr && i.jsx('div', { className: wr.garageIcon }),
                      i.jsxs('div', {
                          className: wr.description,
                          children: [
                              m === Mr &&
                                  c.earnedXp > 0 &&
                                  i.jsx(j, {
                                      className: wr.exp,
                                      type: j.types.tankXP,
                                      size: j.sizes.extraSmall,
                                      reverse: !0,
                                      children: c.earnedXp,
                                  }),
                              i.jsx('div', { className: wr.name, children: i.jsx($, { text: c.userName }) }),
                              (m === Ir || m === Pr || m === kr) &&
                                  i.jsxs('div', {
                                      className: n(
                                          wr.price,
                                          c.isDiscountedPrice && wr.price__discountedCredits,
                                          c.isDiscountedXp && wr.price__discountedXp,
                                      ),
                                      children: [
                                          x &&
                                              i.jsx(j, {
                                                  className: wr.currency,
                                                  type: c.isResearched ? j.types.credits : j.types.tankXP,
                                                  size: j.sizes.extraSmall,
                                                  reverse: !0,
                                                  children: b,
                                              }),
                                          (c.isDiscountedPrice || c.isDiscountedXp) &&
                                              i.jsx('div', {
                                                  className: wr.discountWrapper,
                                                  children: i.jsx('div', { className: wr.discount }),
                                              }),
                                      ],
                                  }),
                          ],
                      }),
                  ],
              })
            : null;
    }),
    Ar = a(function ({ id: e, isPrevNode: t = !1 }) {
        const { model: s } = ya(),
            a = s.researchItems.get(e),
            n = Ne({ args: r.useMemo(() => ({ vehCD: e, tooltipId: 'techtreeVehicle', topLevel: t }), [e]) }),
            o = ge(
                'researchVehicle',
                r.useMemo(() => ({ vehCD: e, nodeState: a.state, newCM: !1 }), [a.state, e]),
                { disabled: !1 },
            );
        return i.jsx('div', { ...o, ...n, children: i.jsx(Rr, { id: e, isPrevNode: t }) });
    });
function Or({ id: e, isPrevNode: t = !1 }) {
    const { model: s } = ya(),
        a = s.researchItems.get(e);
    switch (null == a ? void 0 : a.renderer) {
        case 'item':
            return i.jsx(Cr, { id: e });
        case 'vehicle':
            return i.jsx(Ar, { isPrevNode: t, id: e });
        default:
            return null;
    }
}
const Lr = { [Se.extraLarge]: 40, [Se.large]: 40, [Se.medium]: 28, [Se.small]: 28, [Se.extraSmall]: 28 },
    Br = function ({ lines: e, cellSize: t, classNames: s }) {
        const a = new Set(),
            n = ye(),
            [o, l] = r.useState(Ce()),
            [c, d] = r.useMemo(
                () => [{ width: we(t.width), height: we(t.height) }, we(Lr[n.breakpoint.name])],
                [o, t.width, t.height, n.breakpoint.name],
            );
        return (
            r.useEffect(() => Te(() => l(Ce())), []),
            i.jsx('svg', {
                className: null == s ? void 0 : s.base,
                width: '100%',
                height: '100%',
                viewBox: '0 0 100% 100%',
                children: e.map((e) => {
                    const t = e.isFirstPointReal ? e.x1 * c.width + d : e.x1 * c.width,
                        s = e.y1 * c.height,
                        r = ((e.x2 - e.x1) / 2 + e.x1) * c.width,
                        n = e.isSecondPointReal ? e.x2 * c.width - d : e.x2 * c.width,
                        o = e.y2 * c.height,
                        l = `${t},${s} ${r},${s}`,
                        h = `${r},${o} ${n},${o}`;
                    let m = '';
                    return (
                        a.has(l) ? (m = `${r},${s} ${h}`) : (a.add(l), (m = `${l} ${h}`)),
                        i.jsx(
                            'polyline',
                            {
                                points: m,
                                stroke: e.isResearched ? '#FFF7E1' : '#52565A',
                                strokeWidth: we(2),
                                fill: 'none',
                                strokeLinejoin: 'round',
                            },
                            m,
                        )
                    );
                }),
            })
        );
    },
    Vr = 'PrevResearchTree_afc1dfc0',
    zr = 'PrevResearchTree_researchItem_aa96ef47',
    $r = 'PrevResearchTree_treeLines_1da899c9',
    Dr = { [Se.extraLarge]: 208, [Se.large]: 208, [Se.medium]: 160, [Se.small]: 160, [Se.extraSmall]: 160 },
    Fr = { [Se.extraLarge]: 140, [Se.large]: 140, [Se.medium]: 110, [Se.small]: 110, [Se.extraSmall]: 110 },
    Hr = a(function () {
        const { model: e } = ya(),
            t = e.prevResearchItems.get(),
            s = e.researchItems,
            a = ye(),
            n = Dr[a.breakpoint.name],
            o = t.length * Fr[a.breakpoint.name],
            l = { width: n / 2, height: Fr[a.breakpoint.name] },
            c = (e) => (e ? { top: e.y * l.height + 'rem', left: e.x * l.width + 'rem' } : { top: 0, left: 0 }),
            d = r.useMemo(
                () => t.reduce((e, t, s) => ((e[s] = { x: 1.3, y: 0 === s ? s + 0.5 : s + 1 - 0.5 }), e), {}),
                [t],
            ),
            h = r.useMemo(
                () =>
                    t.reduce((e, a, r) => {
                        var i;
                        const n = d[r];
                        return (
                            n &&
                                e.push({
                                    isFirstPointReal: !1,
                                    isSecondPointReal: !0,
                                    x1: -0.7,
                                    y1: t.length / 2,
                                    x2: n.x,
                                    y2: n.y,
                                    isResearched: Boolean(null == (i = s.get(a.id)) ? void 0 : i.isResearched),
                                }),
                            e
                        );
                    }, []),
                [d, t, s],
            );
        return i.jsxs('div', {
            className: Vr,
            style: { width: `${n}rem`, height: `${o}rem` },
            children: [
                i.jsx(Br, { lines: h, cellSize: l, classNames: { base: $r } }),
                t.map((t, s) => {
                    const a = e.researchItems.get(t.id),
                        r = d[s];
                    return a
                        ? i.jsx(
                              'div',
                              { className: zr, style: c(r), children: i.jsx(Or, { id: t.id, isPrevNode: !0 }) },
                              t.id,
                          )
                        : null;
                }),
            ],
        });
    });
let Wr = class {
    constructor(e, s) {
        (t(this, 'row'), t(this, 'col'), (this.row = e), (this.col = s));
    }
};
class Ur {
    constructor() {
        (t(this, 'C', []),
            t(this, 'rowCovered', []),
            t(this, 'columnCovered', []),
            t(this, 'n', 0),
            t(this, 'Z0Row', 0),
            t(this, 'Z0Column', 0),
            t(this, 'marked', []),
            t(this, 'path', []));
    }
    static padMatrix(e, t = 0) {
        let s = 0;
        const a = e.length;
        let r,
            i,
            n,
            o = a;
        for (r = 0; r < o; r++) ((n = e[r]), (s = Math.max(s, n.length)));
        o = Math.max(s, o);
        const l = [];
        for (r = 0; r < a; r++) {
            for (n = e[r], i = n.length; i < o; i++) n.push(t);
            l.push(n);
        }
        for (; r < o; r++) {
            for (n = [], i = 0; i < o; i++) n.push(t);
            l.push(n);
        }
        return l;
    }
    static makeMatrix(e, t) {
        const s = [];
        for (let a = 0; a < e; a++) {
            const a = [];
            for (let s = 0; s < e; s++) a.push(t);
            s.push(a);
        }
        return s;
    }
    compute(e) {
        ((this.C = Ur.padMatrix(e)), (this.n = this.C.length));
        const t = e.length,
            s = e[0].length;
        this.rowCovered = [];
        for (let n = 0; n < this.n; n++) this.rowCovered.push(!1);
        this.columnCovered = [];
        for (let n = 0; n < this.n; n++) this.columnCovered.push(!1);
        ((this.Z0Row = 0),
            (this.Z0Column = 0),
            (this.path = Ur.makeMatrix(2 * this.n, 0)),
            (this.marked = Ur.makeMatrix(this.n, 0)));
        let a = 1,
            r = !1;
        for (; !r; )
            switch (a) {
                case 1:
                    a = this.step1();
                    break;
                case 2:
                    a = this.step2();
                    break;
                case 3:
                    a = this.step3();
                    break;
                case 4:
                    a = this.step4();
                    break;
                case 5:
                    a = this.step5();
                    break;
                case 6:
                    a = this.step6();
                    break;
                case 7:
                    r = !0;
            }
        const i = [];
        for (let n = 0; n < t; n++) for (let e = 0; e < s; e++) 1 === this.marked[n][e] && i.push(new Wr(n, e));
        return i;
    }
    makeCostMatrix(e, t) {
        const s = [],
            a = e.length;
        for (let r = 0; r < a; r++) {
            const a = e[r],
                i = [],
                n = a.length;
            for (let e = 0; e < n; e++) i.push(t(a[e]));
            s.push(i);
        }
        return s;
    }
    clearCovers() {
        for (let e = 0; e < this.n; e++) ((this.rowCovered[e] = !1), (this.columnCovered[e] = !1));
    }
    findZero() {
        let e = -1,
            t = -1,
            s = 0,
            a = !1;
        for (; !a; ) {
            let r = 0;
            for (;;) {
                if (0 === this.C[s][r] && !this.rowCovered[s] && !this.columnCovered[r]) {
                    ((e = s), (t = r), (a = !0));
                    break;
                }
                if ((r++, r >= this.n)) break;
            }
            (s++, s >= this.n && (a = !0));
        }
        return { row: e, col: t };
    }
    findSmallest() {
        let e = 1 / 0;
        for (let t = 0; t < this.n; t++)
            for (let s = 0; s < this.n; s++)
                this.rowCovered[t] || this.columnCovered[s] || (e > this.C[t][s] && (e = this.C[t][s]));
        return e;
    }
    findStarInRow(e) {
        let t = -1;
        for (let s = 0; s < this.n; s++)
            if (1 === this.marked[e][s]) {
                t = s;
                break;
            }
        return t;
    }
    findStarInCol(e) {
        let t = -1;
        for (let s = 0; s < this.n; s++)
            if (1 === this.marked[s][e]) {
                t = s;
                break;
            }
        return t;
    }
    findPrimeInRow(e) {
        let t = -1;
        for (let s = 0; s < this.n; s++)
            if (2 === this.marked[e][s]) {
                t = s;
                break;
            }
        return t;
    }
    convertPath(e, t) {
        const s = t + 1;
        for (let a = 0; a < s; a++) {
            const t = e[a][0],
                s = e[a][1];
            1 === this.marked[t][s] ? (this.marked[t][s] = 0) : (this.marked[t][s] = 1);
        }
    }
    erasePrimes() {
        for (let e = 0; e < this.n; e++)
            for (let t = 0; t < this.n; t++) 2 === this.marked[e][t] && (this.marked[e][t] = 0);
    }
    step1() {
        for (let e = 0; e < this.n; e++) {
            const t = this.C[e];
            let s = 1 / 0;
            for (let e = 0; e < this.n; e++) s = Math.min(t[e], s);
            for (let e = 0; e < this.n; e++) t[e] -= s;
        }
        return 2;
    }
    step2() {
        for (let e = 0; e < this.n; e++) {
            const t = this.C[e];
            for (let s = 0; s < this.n; s++)
                0 !== t[s] ||
                    this.columnCovered[s] ||
                    this.rowCovered[e] ||
                    ((this.marked[e][s] = 1), (this.columnCovered[s] = !0), (this.rowCovered[e] = !0));
        }
        return (this.clearCovers(), 3);
    }
    step3() {
        let e = 0;
        for (let t = 0; t < this.n; t++)
            for (let s = 0; s < this.n; s++) 1 === this.marked[t][s] && ((this.columnCovered[s] = !0), e++);
        return e >= this.n ? 7 : 4;
    }
    step4() {
        let e = 0,
            t = !1,
            s = -1,
            a = -1,
            r = -1;
        for (; !t; ) {
            const i = this.findZero();
            ((s = i.row),
                (a = i.col),
                s < 0
                    ? ((t = !0), (e = 6))
                    : ((this.marked[s][a] = 2),
                      (r = this.findStarInRow(s)),
                      r >= 0
                          ? ((this.rowCovered[s] = !0), (this.columnCovered[r] = !1))
                          : ((t = !0), (this.Z0Row = s), (this.Z0Column = a), (e = 5))));
        }
        return e;
    }
    step5() {
        let e = 0;
        this.path[e] = [this.Z0Row, this.Z0Column];
        let t = !1;
        for (; !t; ) {
            const s = this.findStarInCol(this.path[e][1]);
            if ((s >= 0 ? (e++, (this.path[e] = [s, this.path[e - 1][1]])) : (t = !0), !t)) {
                const t = this.findPrimeInRow(this.path[e][0]);
                (e++, (this.path[e] = [this.path[e - 1][0], t]));
            }
        }
        return (this.convertPath(this.path, e), this.clearCovers(), this.erasePrimes(), 3);
    }
    step6() {
        const e = this.findSmallest();
        for (let t = 0; t < this.n; t++)
            for (let s = 0; s < this.n; s++)
                (this.rowCovered[t] && (this.C[t][s] += e), this.columnCovered[s] || (this.C[t][s] -= e));
        return 4;
    }
}
class Gr {
    constructor(e, t) {
        ((this.row = e), (this.col = t));
    }
}
class Xr {
    constructor(e, s) {
        (t(this, 'matrixDimension'),
            t(this, 'widthPartitioning', 0),
            t(this, 'maxLevelWidth'),
            t(this, 'adjacencyMatrix', []),
            t(this, 'maxPaths', []),
            t(this, 'levels', []),
            t(this, 'fixedPaths', {}),
            t(this, 'parentLevelIdxs', {}),
            t(this, 'childrenLevelIdxs', {}),
            t(this, 'isCyclicReference', !1),
            (this.maxLevelWidth = s),
            e > 0 ? ((this.matrixDimension = e), this.createEmptyAdjacencyMatrix()) : (this.matrixDimension = 0));
    }
    addFixedPath(e, t) {
        this.fixedPaths[e] = t;
    }
    getChildrenLevelIdxs(e) {
        return this.childrenLevelIdxs[e];
    }
    getParentLevelIdxs(e) {
        return this.parentLevelIdxs[e];
    }
    hasCyclicReference() {
        return this.isCyclicReference;
    }
    process() {
        ((this.isCyclicReference = !1), this.distributionOfVerticesOnLevels(), this.determineNodesPositionsOnLevel());
    }
    createEmptyAdjacencyMatrix() {
        this.adjacencyMatrix = new Array(this.matrixDimension);
        for (let e = 0; e < this.matrixDimension; e++) {
            this.adjacencyMatrix[e] = [];
            for (let t = 0; t < this.matrixDimension; t++) this.adjacencyMatrix[e][t] = 0;
        }
    }
    normalizeLevels() {
        for (let e = 0; e < this.levels.length; e++) this.levels[e].length > this.maxLevelWidth && this.zipLevel(e);
        for (let e = 0; e < this.levels.length; e++) this.alignLevel(e);
    }
    alignLevel(e) {
        const t = this.levels[e],
            s = this.maxLevelWidth - t.length;
        for (let a = 0; a < s; a++) t.push(null);
        for (let a = 0; a < t.length; a++) null !== t[a] && (t[a].dx = a);
    }
    mapLevel(e, t) {
        const s = this.levels[e];
        if (!s) return;
        const a = new Array(t.length);
        let r = 0;
        for (let i = 0, n = 0; i < t.length; i++)
            0 === t[i]
                ? ((a[i] = null), r++)
                : (null === s[n] && r > 0 && (n++, r--), (a[i] = s[n]), null !== a[i] && (a[i].dx = i), n++);
        this.levels[e] = a;
    }
    addLevelItem(e, t, s, a) {
        if (
            (void 0 === this.levels[e] && (this.levels[e] = []),
            this.levels[e].push(new Zr(t, this.levels[e].length, s)),
            !a)
        )
            return;
        const r = this.adjacencyMatrix[t];
        for (let i = 0; i < r.length; i++) {
            const t = r[i];
            (1 !== t && 2 !== t) || (this.removeLevelItem(e, i), this.addLevelItem(e + 1, i, 2 === t, !0));
        }
    }
    removeLevelItem(e, t) {
        const s = this.levels[e],
            a = [];
        for (let r = 0; r < s.length; r++) s[r].index !== t && a.push(s[r]);
        this.levels[e] = a;
    }
    zipLevel(e) {
        if (e < 1) return;
        const t = this.levels[e - 1],
            s = t.length;
        let a, r, i, n, o;
        for (let l = 0; l < s; l++) {
            if (((a = t[l]), null == a)) continue;
            i = this.adjacencyMatrix[a.index];
            const s = i.length;
            let c = 0;
            for (n = [], o = 0; o < s; o++) 1 === i[o] && (n.push(o), c++);
            if (c > 1) {
                const t = this.levels[e];
                let s = -1,
                    i = !0;
                const l = 2 === c ? 0 : 1;
                for (o = 0; o < t.length; o++) {
                    r = t[o];
                    for (let t = 0; t < n.length; t++) {
                        const o = n[t];
                        r.index === o &&
                            c > l &&
                            (i
                                ? (s = this.addFakeNode(r, e, a.index))
                                : s > 0 &&
                                  (this.addFakeRelations(a.index, r.index, s),
                                  this.addLevelItem(e + 1, r.index, !1, !0),
                                  this.removeLevelItem(e, r.index)),
                            c--,
                            (i = c % 2 > 0 && l > 0));
                    }
                }
            }
        }
    }
    addFakeRelations(e, t, s) {
        ((this.adjacencyMatrix[s][t] = 2),
            (this.adjacencyMatrix[t][s] = -2),
            (this.adjacencyMatrix[s][e] = -2),
            (this.adjacencyMatrix[e][s] = 2));
    }
    addFakeNode(e, t, s) {
        const a = e.index;
        ((this.adjacencyMatrix[s][a] = 0), (this.adjacencyMatrix[a][s] = 0));
        for (let n = 0; n < this.matrixDimension; n++) this.adjacencyMatrix[n].push(0);
        const r = this.matrixDimension;
        this.matrixDimension++;
        const i = new Array(this.matrixDimension).fill(0);
        return (
            this.adjacencyMatrix.push(i),
            this.addFakeRelations(s, a, r),
            this.addLevelItem(t + 1, e.index, e.fake, !0),
            (e.index = r),
            (e.fake = !0),
            r
        );
    }
    addFakeNodes(e, t, s, a) {
        let r = -1;
        for (let i = 0; i < a; i++) {
            const a = this.addFakeNode(e, t, s);
            (0 === i && (r = a), (e = this.levels[t][this.levels[t].length - 1]));
        }
        return r;
    }
    hasFakeNode(e) {
        const t = this.levels[e];
        for (let s = 0; s < t.length; s++) if (null != t[s] && t[s].fake) return !0;
        return !1;
    }
    searchMaxPathLegth(e, t, s, a) {
        if (a > 20) return ((this.isCyclicReference = !0), void (this.maxPaths[t] = -1));
        if (-1 === s[e] && (this.maxPaths[t] < a || void 0 === this.maxPaths[t]))
            return ((this.maxPaths[t] = a), void (a > this.widthPartitioning && (this.widthPartitioning = a)));
        for (let r = 0; r < s.length; r++)
            r !== e && -1 === s[r] && this.searchMaxPathLegth(e, t, this.adjacencyMatrix[r], a + 1);
    }
    distributionOfVerticesOnLevels() {
        ((this.maxPaths = new Array(this.matrixDimension)), (this.widthPartitioning = 0), (this.maxPaths[0] = 0));
        for (let t = 1; t < this.matrixDimension; t++) this.searchMaxPathLegth(0, t, this.adjacencyMatrix[t], 1);
        const e = {};
        ((this.levels = new Array(this.widthPartitioning)), this.addLevelItem(0, 0, !1, !1));
        for (let t = 1; t < this.maxPaths.length; t++) {
            const s = this.maxPaths[t],
                a = this.fixedPaths[t];
            if ((this.addLevelItem(s, t, !1, !1), !isNaN(a) && s < a)) {
                const r = this.levels[s][this.levels[s].length - 1],
                    i = r.index,
                    n = a - s,
                    o = this.adjacencyMatrix[t];
                for (let t = 0; t < o.length; t++)
                    -1 === o[t] &&
                        (null == e[t]
                            ? (e[t] = this.addFakeNodes(r, s, t, n))
                            : ((this.adjacencyMatrix[i][e[t]] = -2),
                              (this.adjacencyMatrix[e[t]][i] = 2),
                              (this.adjacencyMatrix[i][t] = 0),
                              (this.adjacencyMatrix[t][i] = 0),
                              this.addLevelItem(a, i, !1, !0),
                              this.removeLevelItem(s, i)));
            }
        }
        this.normalizeLevels();
    }
    getLines(e, t) {
        const s = [];
        if (0 === e) return s;
        const a = this.levels[e],
            r = a.length,
            i = this.levels[t ? e + 1 : e - 1];
        if (!i) return s;
        const n = i.length;
        for (let o = 0; o < r; o++) {
            const e = a[o];
            if (null == e) continue;
            const r = this.adjacencyMatrix[e.index],
                l = r.length;
            for (let a = 0; a < l; a++)
                if (r[a] === (t ? 1 : -1) || r[a] === (t ? 2 : -2))
                    for (let r = 0; r < n; r++) {
                        const n = i[r];
                        if (null != n && n.index === a) {
                            const a = t ? Kr.makeByNext(e, n) : Kr.makeByTop(e, n);
                            s.push(a);
                            break;
                        }
                    }
        }
        return s;
    }
    getCrossingCostEx(e) {
        let t = 0;
        for (let s = 0; s < e.length - 1; s++) {
            const a = e[s];
            for (let r = s + 1; r < e.length; r++) {
                const s = e[r],
                    i = a.start,
                    n = s.start,
                    o = a.end,
                    l = s.end;
                (((n - i) * (l - o) < 0 && (i - n) * (o - l) < 0) ||
                    (i !== o && n !== l && ((o >= n && i <= l) || (l <= i && o <= n)) && i !== n)) &&
                    (t += this.maxLevelWidth + 1);
            }
        }
        return t;
    }
    getTotalCost(e) {
        let t = this.getCrossingCostEx(e);
        for (let s = 0; s < e.length; s++) {
            const a = e[s];
            a.start !== a.end && (t += Math.abs(a.start - a.end));
        }
        return t;
    }
    findMaxChildCount(e) {
        if (this.isCyclicReference || null == e) return 0;
        const t = [];
        let s = 0;
        for (let a = 0; a < e.length; a++) (1 !== e[a] && 2 !== e[a]) || (s++, t.push(a));
        for (let a = 0; a < t.length; a++) s = Math.max(this.findMaxChildCount(this.adjacencyMatrix[t[a]]), s);
        return s;
    }
    breedNodesByNextRelations(e) {
        const t = this.levels[e],
            s = t.length;
        let a = 0;
        const r = new Array(s).fill(1);
        for (let o = 0; o < s; o++)
            if (null == t[o]) {
                if ((a++, null != t[o - 1] && t[o - 1].fake && null != t[o + 1])) {
                    1 === o && (a = 0);
                    break;
                }
            } else if (a > 0) {
                a = 0;
                break;
            }
        if (a < 1) return;
        let i = !1,
            n = 0;
        for (let o = 0; o < s; o++) {
            const e = t[o];
            if (null == e) continue;
            const l = this.findMaxChildCount(this.adjacencyMatrix[e.index]) - 1;
            if (l > 0) {
                for (let e = 0; e < l && a > 0; e++, a--) o + e + 1 < s && ((r[o + e + n + 1] = 0), (i = !0));
                n = l;
            }
        }
        i && this.mapLevel(e, r);
    }
    makeMinCrossing(e, t) {
        const s = this.levels[e],
            a = s.length,
            r = new Array(a),
            i = new Array(a);
        for (let d = 0; d < a; d++) r[d] = null != s[d] ? s[d].dx : 0;
        for (let d = 0; d < a; d++) {
            const n = s[d],
                o = new Array(a);
            for (let r = 0; r < a; r++) {
                let a = null;
                d !== r && (null != n && (n.dx = r), (a = s[r]), null != a && (a.dx = d));
                const i = this.getLines(e, t);
                ((o[r] = this.getTotalCost(i)), null != a && (a.dx = r));
            }
            (null != n && (n.dx = r[d]), (i[d] = o));
        }
        const n = new Ur(),
            o = n.compute(n.makeCostMatrix(i, (e) => e)),
            l = new Array(a);
        let c = 0;
        return (
            o.forEach((e, t) => {
                const a = e.row,
                    r = e.col,
                    n = s[a];
                (null != n && (n.dx = r), (l[r] = n), (c += i[a][r]));
            }),
            (this.levels[e] = l),
            c
        );
    }
    findNodePositionInLevel(e, t) {
        let s = -1,
            a = 0,
            r = Number.MAX_VALUE,
            i = 0;
        const n = this.maxLevelWidth * this.maxLevelWidth;
        let o,
            l = 0;
        for (; 0 !== s && 3 !== i && a !== s && l < n; )
            ((a = s),
                (s = this.makeMinCrossing(e, t)),
                (o = this.getLines(e, t)),
                (s *= this.getTotalCost(o)),
                s <= r && ((i = s === r ? i + 1 : 0), (r = s)),
                l++);
        return o;
    }
    determineNodesPositionsOnLevel() {
        this.breedNodesByNextRelations(1);
        for (let e = 2; e < this.levels.length; e++) {
            const t = this.findNodePositionInLevel(e, !1);
            if ((this.hasFakeNode(e) && this.breedNodesByNextRelations(e), this.getCrossingCostEx(t) > 0)) {
                0 !== this.makeMinCrossing(e - 1, !0) &&
                    e === this.levels.length - 1 &&
                    this.findNodePositionInLevel(e, !1);
            }
        }
    }
    get matrix() {
        return this.adjacencyMatrix;
    }
    get nodesByLevel() {
        return this.levels;
    }
    get middleOfTable() {
        return this.levels[0] ? (this.levels[0].length - 1) / 2 : 0;
    }
    get levelDimension() {
        let e = 0;
        for (let t = 1; t < this.levels.length; t++) {
            const s = this.levels[t];
            let a = 0;
            for (let e = s.length - 1; e >= 0; e--)
                if (null != s[e]) {
                    a = e;
                    break;
                }
            e = Math.max(a + 1, e);
        }
        return new Gr(this.levels.length, e);
    }
}
class Zr {
    constructor(e, s, a) {
        (t(this, 'index'), t(this, 'dx'), t(this, 'fake'), (this.index = e), (this.dx = s), (this.fake = a));
    }
}
class Kr {
    constructor(e, s, a, r) {
        (t(this, 'start'),
            t(this, 'end'),
            t(this, 'parent'),
            t(this, 'child'),
            (this.start = e),
            (this.end = s),
            (this.parent = a),
            (this.child = r));
    }
    static makeByTop(e, t) {
        return new Kr(t.dx, e.dx, t.index, e.index);
    }
    static makeByNext(e, t) {
        return new Kr(e.dx, t.dx, e.index, t.index);
    }
}
const Yr = 'ResearchTree_fdaa27ea',
    qr = 'ResearchTree_researchItemVehicle_6fdd15b5',
    Jr = 'ResearchTree_researchItem_ee82a97b',
    Qr = 'ResearchTree_treeLines_7c587e69',
    ei = 0.35,
    ti = {
        [Se.extraLarge]: { width: 1137, height: 732 },
        [Se.large]: { width: 960, height: 732 },
        [Se.medium]: { width: 813, height: 504 },
        [Se.small]: { width: 726, height: 504 },
        [Se.extraSmall]: { width: 726, height: 504 },
    },
    si = { [Se.extraLarge]: 0.2, [Se.large]: 0.35, [Se.medium]: 0.45, [Se.small]: 0.5, [Se.extraSmall]: 0.5 },
    ai = a(function () {
        const e = ye(),
            { model: t } = ya(),
            s = t.currentResearchItems.get(),
            a = t.researchItems,
            o = ti[e.breakpoint.name],
            l = ((e) => ({ width: e.width / 7, height: e.height / 6 }))(o),
            c = si[e.breakpoint.name],
            d = (e) =>
                e ? { top: (e.y + ei) * l.height + 'rem', left: (e.x - 0.5) * l.width + 'rem' } : { top: 0, left: 0 },
            h = r.useMemo(() => {
                const e = new Xr(s.length, 6);
                return (
                    (function (e, t) {
                        const s = e.matrix,
                            a = (e) => t.findIndex((t) => t.id == e);
                        t.forEach((r, i) => {
                            r.level > -1 && e.addFixedPath(i, r.level);
                            let n = 0;
                            const o = r.path,
                                l = o.length;
                            for (let e = 0; e < l; e++) {
                                const s = a(o[e]);
                                s > -1 && (n = Math.max(n, t[s].path.length));
                            }
                            for (let e = 0; e < l; e++) {
                                const r = o[e];
                                if (isNaN(r) || 0 === r) continue;
                                const l = a(r);
                                !isNaN(l) && l > -1 && t[l].path.length === n && ((s[l][i] = 1), (s[i][l] = -1));
                            }
                        });
                    })(e, s),
                    e.process(),
                    e
                );
            }, [s]),
            m = (() => {
                const e = {};
                return (
                    h.nodesByLevel.forEach((t, a) => {
                        t.forEach((t) => {
                            var r;
                            if (!t) return;
                            const i = null == (r = s[t.index]) ? void 0 : r.renderer,
                                n = ((e, t) => (0 === e ? e + c : 'vehicle' === t ? 7.15 : e + 0.65 + c))(a, i),
                                o = 0 === a ? h.middleOfTable : t.dx;
                            e[t.index] = { x: n, y: o };
                        });
                    }),
                    e
                );
            })(),
            u = r.useMemo(() => {
                var e;
                let t = [];
                const r = h.matrix,
                    i = (e) => {
                        var t;
                        const r = null == (t = null == s ? void 0 : s[e]) ? void 0 : t.id;
                        if (r) return a.get(r);
                    };
                function n(e) {
                    const t = i(e);
                    if (t)
                        return (
                            t.isResearched &&
                            Ie(t.path, (e) => {
                                var t;
                                return (null == (t = a.get(e)) ? void 0 : t.isResearched) ?? !1;
                            })
                        );
                    const s = r[e];
                    if (!s) return !1;
                    const o = s.findIndex((e) => -2 === e);
                    return -1 !== o && n(o);
                }
                const o = Boolean(null == (e = i(0)) ? void 0 : e.isResearched);
                return (
                    r.forEach((e, s) => {
                        e.forEach((e, a) => {
                            if (e > 0) {
                                const e = m[a],
                                    r = m[s];
                                r &&
                                    e &&
                                    t.push({
                                        isFirstPointReal: Boolean(i(s)),
                                        isSecondPointReal: Boolean(i(a)),
                                        x1: r.x - 0.5,
                                        y1: r.y + ei,
                                        x2: e.x - 0.5,
                                        y2: e.y + ei,
                                        isResearched: o && n(s),
                                    });
                            }
                        });
                    }),
                    t
                );
            }, [m, h, a, s]);
        return i.jsxs('div', {
            className: Yr,
            style: { width: `${o.width}rem`, height: `${o.height}rem` },
            children: [
                i.jsx(Br, { lines: u, cellSize: l, classNames: { base: Qr } }),
                s.map((e, t) => {
                    const s = a.get(e.id),
                        r = m[t];
                    return s
                        ? i.jsx(
                              'div',
                              {
                                  className: n(Jr, 'vehicle' === e.renderer && qr),
                                  style: d(r),
                                  children: i.jsx(Or, { id: e.id }),
                              },
                              e.id,
                          )
                        : null;
                }),
            ],
        });
    }),
    ri = 'Modules_sceneWrapper_db189ae1',
    ii = 'Modules_bef383eb',
    ni = 'Modules_content_a3e50684',
    oi = function () {
        const { controls: e } = Vs();
        return i.jsxs('div', {
            className: ii,
            children: [
                i.jsxs('div', {
                    className: ni,
                    children: [
                        i.jsx(le, {
                            className: ri,
                            moveSpace: e.sceneWrapper.onMoveSpace,
                            onMouseOver3dScene: e.sceneWrapper.onMouseOver3dScene,
                        }),
                        i.jsx(Hr, {}),
                        i.jsx(ai, {}),
                    ],
                }),
                i.jsx(Ca, {
                    options: { context: 'model.modulesModel.fieldModificationModel' },
                    children: i.jsx(lr, {}),
                }),
            ],
        });
    };
function li() {
    return i.jsx(ja, { options: { context: 'model.modulesModel' }, children: i.jsx(oi, {}) });
}
const [ci, di] = m()(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['historicalReference', 'customDescription']),
                    root: e.object(),
                    mechanics: e.transform(
                        (e) =>
                            x(e, (e) => ({
                                id: e.name,
                                weight: Na[e.name] ?? 0,
                                special: e.isSpecial,
                                hasVideo: e.hasVideo,
                            })).sort((e, t) => e.weight - t.weight),
                        'mechanics',
                    ),
                    crew: e.arrayClone('crew'),
                    benefits: e.arrayClone('benefits'),
                },
                s = u.structural(() => {
                    const e = t.crew.get();
                    return x(e, (e) => ({
                        plus: e.roles.length > 1,
                        roleName: Pe(e.roles, 0),
                        tankmanId: e.tankmanId,
                    }));
                }),
                a = u.structural(() =>
                    ke(t.mechanics.get(), (e, t) => (e[t.special ? 'special' : 'common'].push(t), e), {
                        common: [],
                        special: [],
                    }),
                );
            return { ...t, computes: { crewRoles: s, mechanics: a } };
        },
        ({ externalModel: e }) => ({ watchMechanicsVideo: e.createCallback((e) => e, 'onWatchMechanicsVideo') }),
    ),
    hi = { top: 'top', bottom: 'bottom', both: 'both', none: 'none' };
function mi(e, t) {
    return e || t ? (e ? (t ? hi.none : hi.bottom) : hi.top) : hi.both;
}
var ui = ((e) => (
    (e.EXPERIENCE = 'experience'),
    (e.CREDITS = 'credits'),
    (e.CREWS_TRAIN = 'crewsTrain'),
    (e.REPAIR_KIT = 'repairKit'),
    (e.BONDS = 'bonds'),
    e
))(ui || {});
const _i = 'Collectors_e1bd7e2a',
    pi = 'Collectors_content_241f1284',
    vi = 'Collectors_title_1e2c33ce',
    bi = 'Collectors_description_8a2374cd',
    xi = b.resolve('strings');
function fi({ className: e }) {
    return i.jsxs('div', {
        className: n(_i, e),
        children: [
            i.jsxs('div', {
                className: pi,
                children: [
                    i.jsx('div', {
                        className: vi,
                        children: xi.readOrEmpty('vehicle_hub.overview.benefits.collectorVehicle.name'),
                    }),
                    i.jsx('div', {
                        className: bi,
                        children: xi.readOrEmpty('vehicle_preview.infoPanel.collectible.desc'),
                    }),
                ],
            }),
            i.jsx(V, {
                path: 'vehicle_hub.benefits.collectors_80x80',
                width: 80,
                height: 80,
                adaptive: { large: { width: 116, height: 116, path: 'vehicle_hub.benefits.collectors_116x116' } },
            }),
        ],
    });
}
const gi = 'Premium_46145a21',
    Ni = 'Premium_benefit_2adaef1e',
    ji = 'Premium_benefit__shortened_aa8afe2a',
    yi = 'Premium_content_d6722ba0',
    Ci = 'Premium_name_f2b278b',
    wi = 'Premium_description_2a3350ed',
    Ti = b.resolve('strings'),
    Si = a(function ({ className: e }) {
        const t = di().model.benefits.get(),
            s = [...Me(t, 0, 3)];
        return i.jsx('div', {
            className: n(gi, e),
            children: x(s, (e) =>
                i.jsxs(
                    'div',
                    {
                        className: n(Ni, 4 === s.length && ji),
                        children: [
                            i.jsx(V, {
                                path: `vehicle_hub.benefits.${Vi[e]}_gold_40x40`,
                                width: 40,
                                height: 40,
                                adaptive: {
                                    large: { width: 48, height: 48, path: `vehicle_hub.benefits.${Vi[e]}_gold_48x48` },
                                },
                            }),
                            i.jsxs('div', {
                                className: yi,
                                children: [
                                    i.jsx('div', {
                                        className: Ci,
                                        children: Ti.readOrEmpty(`vehicle_hub.overview.benefits.premium.name.${e}`),
                                    }),
                                    i.jsx('div', {
                                        className: wi,
                                        children: Ti.readOrEmpty(
                                            `vehicle_hub.overview.benefits.premium.description.${e}`,
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    },
                    e,
                ),
            ),
        });
    }),
    Ii = 'Special_9ac51d30',
    Pi = 'Special_border_791bf4fa',
    ki = 'Special_benefit_735ba88d',
    Mi = 'Special_name_d0fbc6d',
    Ei = b.resolve('strings'),
    Ri = a(function ({ className: e }) {
        const t = di().model.benefits.get(),
            s = [...Me(t, 0, 3)];
        return i.jsxs('div', {
            className: n(Ii, e),
            children: [
                i.jsx('div', { className: Pi }),
                x(s, (e) =>
                    i.jsxs(
                        'div',
                        {
                            className: ki,
                            children: [
                                i.jsx(V, {
                                    path: `vehicle_hub.benefits.${Vi[e]}_silver_40x40`,
                                    width: 40,
                                    height: 40,
                                    adaptive: {
                                        large: {
                                            width: 48,
                                            height: 48,
                                            path: `vehicle_hub.benefits.${Vi[e]}_silver_48x48`,
                                        },
                                    },
                                }),
                                i.jsx('div', {
                                    className: Mi,
                                    children: Ei.readOrEmpty(`vehicle_hub.overview.benefits.special.name.${e}`),
                                }),
                            ],
                        },
                        e,
                    ),
                ),
            ],
        });
    }),
    Ai = 'Benefits_1d3e7064',
    Oi = 'Benefits_premium_52b989b9',
    Li = 'Benefits_special_52b989b9',
    Bi = 'Benefits_collectors_ac9481a0',
    Vi = {
        [ui.EXPERIENCE]: 'star',
        [ui.CREDITS]: 'coins',
        [ui.CREWS_TRAIN]: 'crew',
        [ui.REPAIR_KIT]: 'unlimited',
        [ui.BONDS]: 'bonds',
    },
    zi = a(function ({ className: e }) {
        const t = mt().model.tags.get().split(',');
        return i.jsxs('div', {
            className: n(Ai, e),
            children: [
                t.includes(Ee.premium)
                    ? t.includes(Ee.special)
                        ? i.jsx(Ri, { className: Li })
                        : i.jsx(Si, { className: Oi })
                    : null,
                t.includes(Ee.collectorVehicle) && i.jsx(fi, { className: Bi }),
            ],
        });
    }),
    $i = 'Description_48a84f65',
    Di = 'Description_header_6bb7a700',
    Fi = 'Description_title_2add40ca',
    Hi = 'Description_3f21acdc',
    Wi = a(function ({ className: e }) {
        const { model: t } = di(),
            s = b.resolve('strings'),
            a = t.historicalReference.get(),
            r = t.customDescription.get(),
            o = k({ body: a });
        return i.jsxs('div', {
            className: n($i, e),
            children: [
                i.jsxs('div', {
                    className: Di,
                    children: [
                        i.jsx('div', {
                            className: Fi,
                            children: r
                                ? s.readOrEmpty('vehicle_hub.overview.title.generalDescription')
                                : s.readOrEmpty('vehicle_hub.overview.title.historicalReference'),
                        }),
                        r &&
                            a &&
                            i.jsx(V, {
                                ...o,
                                width: '32rem',
                                height: '32rem',
                                path: 'vehicle_hub.historical_reference',
                            }),
                    ],
                }),
                (r || a).split('\n').map((e, t) => i.jsx(se, { className: Hi, text: e, split: !0 }, t)),
            ],
        });
    }),
    Ui = {
        root: 'Mechanics_root_23828917',
        base: 'Mechanics_779ccfc1',
        mechanic: 'Mechanics_mechanic_100f931d',
        base__single: 'Mechanics_base__single_23828917',
        content: 'Mechanics_content_8a718215',
        header: 'Mechanics_header_52b5097c',
        name: 'Mechanics_name_b0bc436d',
        description: 'Mechanics_description_234553f2',
    },
    Gi = a(function ({ className: e }) {
        const t = b.resolve('strings'),
            { model: s } = di(),
            a = s.computes.mechanics().special.length > 0,
            r = s.computes.mechanics().common.slice(0, 3),
            o = 1 === r.length && !1 === a;
        return i.jsx('div', {
            className: n(Ui.base, o && Ui.base__single, e),
            children: x(r, (e) =>
                i.jsxs(
                    'div',
                    {
                        className: Ui.mechanic,
                        children: [
                            o && i.jsx(V, { path: `vehicle_hub.mechanics.x96x96.${e.id}`, width: 96, height: 96 }),
                            i.jsxs('div', {
                                className: Ui.content,
                                children: [
                                    i.jsxs('div', {
                                        className: Ui.header,
                                        children: [
                                            !o &&
                                                i.jsx(V, {
                                                    path: `vehicle_hub.mechanics.x48x48.${e.id}`,
                                                    width: 48,
                                                    height: 48,
                                                }),
                                            i.jsx('div', {
                                                className: Ui.name,
                                                children: t.readOrEmpty(`vehicle_hub.abilities.common.name.${e.id}`),
                                            }),
                                        ],
                                    }),
                                    i.jsx(y, {
                                        className: Ui.description,
                                        split: !0,
                                        path: `vehicle_hub.abilities.common.description.${e.id}`,
                                    }),
                                ],
                            }),
                        ],
                    },
                    e.id,
                ),
            ),
        });
    }),
    Xi = 'SpecialMechanic_61a5d496',
    Zi = 'SpecialMechanic_content_4adcaa8e',
    Ki = 'SpecialMechanic_iconContainer_b16ec9b9',
    Yi = 'SpecialMechanic_icon_261dc586',
    qi = 'SpecialMechanic_glow_f14361c3',
    Ji = 'SpecialMechanic_dust_781e0ca5',
    Qi = 'SpecialMechanic_name_8dbc8acc',
    en = 'SpecialMechanic_description_185cf2ea',
    tn = { iconSize: 'x96x96', glowSize: 'small' },
    sn = { large: { iconSize: 'x128x128', glowSize: 'large' } },
    an = a(function ({ className: e }) {
        const t = b.resolve('images'),
            s = b.resolve('strings'),
            { model: a } = di(),
            r = a.computes.mechanics().special[0],
            o = N(tn, sn);
        if (!r) return;
        const l = `vehicle_hub.mechanics.special.${o.iconSize}.${r.id}`;
        return i.jsxs('div', {
            className: n(Xi, e),
            children: [
                t.has(l) &&
                    i.jsxs('div', {
                        className: Ki,
                        children: [
                            i.jsx(V, { path: l, className: Yi }),
                            i.jsx(V, { path: `vehicle_hub.mechanics.special.dust_${o.glowSize}`, className: Ji }),
                            i.jsx(V, { path: `vehicle_hub.mechanics.special.glow_front_${o.glowSize}`, className: qi }),
                        ],
                    }),
                i.jsxs('div', {
                    className: Zi,
                    children: [
                        i.jsx('div', {
                            className: Qi,
                            children: s.readOr(`vehicle_hub.abilities.special.name.${r.id}`, () =>
                                s.readOrEmpty(`vehicle_hub.abilities.common.name.${r.id}`),
                            ),
                        }),
                        i.jsx('div', {
                            className: en,
                            children: s.readOr(`vehicle_hub.abilities.special.description.${r.id}`, () =>
                                s.readOrEmpty(`vehicle_hub.abilities.common.description.${r.id}`),
                            ),
                        }),
                    ],
                }),
            ],
        });
    }),
    rn = {
        base: 'TtcProgressBar_ec222f42',
        bar: 'TtcProgressBar_bar_dce0790e',
        bar__filled: 'TtcProgressBar_bar__filled_89fad18',
        bar__empty: 'TtcProgressBar_bar__empty_9d98c6c',
        bar__first: 'TtcProgressBar_bar__first_2e768770',
        bar__last: 'TtcProgressBar_bar__last_cdbba2',
        bar__default: 'TtcProgressBar_bar__default_bcb8090d',
        gap: 'TtcProgressBar_gap_56f87635',
    },
    nn = 2;
function on({ vehicleAmount: e, currentAmount: t, maxAmount: s, className: a }) {
    const r = 100 - nn,
        o = Math.min(Math.ceil((e / s) * 100), r),
        l = Math.ceil((t / s) * 100);
    return i.jsxs('div', {
        className: n(rn.base, a),
        children: [
            l > 0 &&
                o > 0 &&
                i.jsx('div', {
                    className: n(rn.bar, rn.bar__filled, rn.bar__first),
                    style: { width: `${Math.min(l, o)}%` },
                }),
            l < o &&
                i.jsxs(i.Fragment, {
                    children: [
                        l > 0 && i.jsx('div', { className: rn.gap }),
                        i.jsx('div', { className: n(rn.bar, rn.bar__empty), style: { width: o - l + '%' } }),
                    ],
                }),
            i.jsx('div', { className: rn.bar__default }),
            l > o &&
                i.jsxs(i.Fragment, {
                    children: [
                        i.jsx('div', { className: rn.gap }),
                        i.jsx('div', {
                            className: n(rn.bar, rn.bar__filled, l >= r && rn.bar__last),
                            style: { width: l - o + '%' },
                        }),
                    ],
                }),
            l < r &&
                o < r &&
                i.jsxs(i.Fragment, {
                    children: [
                        i.jsx('div', { className: rn.gap }),
                        i.jsx('div', {
                            className: n(rn.bar, rn.bar__empty, rn.bar__last),
                            style: { width: r - Math.max(o, l) + '%' },
                        }),
                    ],
                }),
        ],
    });
}
const ln = 'TtcCrew_270e7733',
    cn = 'TtcCrew_titleColumn_78281294',
    dn = 'TtcCrew_ttcColumn_9115579c',
    hn = 'TtcCrew_ttcRow_2a9163ab',
    mn = 'TtcCrew_name_a1f1eb7e',
    un = 'TtcCrew_nameText_6a61cee0',
    _n = 'TtcCrew_amount_ed7c76e1',
    pn = 'TtcCrew_progressBar_48de0078',
    vn = 'TtcCrew_crewTitle_a70b6855',
    bn = 'TtcCrew_crewBrackets_74968740',
    xn = 'TtcCrew_crewAmount_7fb6cbca',
    fn = 'TtcCrew_crewIcons_54c0985b',
    gn = 'TtcCrew_crewIcon_9ffe1104',
    Nn = 'TtcCrew_crewIcon__plus_71e8955d';
function jn({ roleName: e, plus: t, slotIndex: s, tankmanId: a }) {
    const r = Ne({
        args: { tooltipId: 'vehiclePreviewCrewMember', tooltipArgs: JSON.stringify({ slotIdx: s, tankmanID: a }) },
    });
    return i.jsx(V, { ...r, path: `tankmen.roles.ttc_crew.${e}${t ? '_plus' : ''}`, className: n(gn, t && Nn) });
}
const yn = a(function () {
        const e = b.resolve('intl'),
            { model: t } = di(),
            s = t.crew.get(),
            a = t.computes.crewRoles(),
            r = pt().model.computes.columns();
        return i.jsxs('div', {
            className: ln,
            children: [
                i.jsxs('div', {
                    className: cn,
                    children: [
                        x(r, ({ header: e }, t) =>
                            i.jsx('div', { className: mn, children: i.jsx($, { text: e.name, className: un }) }, t),
                        ),
                        i.jsx('div', {
                            className: vn,
                            children: i.jsx(y, {
                                path: 'vehicle_hub.overview.crew.name',
                                params: {
                                    amount: e.formatNumber('integral', s.length),
                                    classBracket: bn,
                                    classAmount: xn,
                                },
                            }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: dn,
                    children: [
                        x(r, ({ header: t }, s) =>
                            i.jsxs(
                                'div',
                                {
                                    className: hn,
                                    children: [
                                        i.jsx(on, {
                                            vehicleAmount: t.vehicleAmount,
                                            currentAmount: t.currentAmount,
                                            maxAmount: t.maxAmount,
                                            className: pn,
                                        }),
                                        i.jsx('div', {
                                            className: _n,
                                            children: e.formatNumber('integral', t.currentAmount),
                                        }),
                                    ],
                                },
                                s,
                            ),
                        ),
                        i.jsx('div', {
                            className: fn,
                            children: a.map((e, t) =>
                                i.jsx(
                                    jn,
                                    { roleName: e.roleName, plus: e.plus, tankmanId: e.tankmanId, slotIndex: t },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        });
    }),
    Cn = {
        root: 'Overview_root_8249f573',
        base: 'Overview_deb5fbab',
        contentWrapper: 'Overview_contentWrapper_d1be7775',
        content: 'Overview_content_e751faeb',
        content__offset: 'Overview_content__offset_a102e3b9',
        scrollContainer: 'Overview_scrollContainer_e783a92b',
        verticalBar: 'Overview_verticalBar_c08d45da',
        scrollWrapper: 'Overview_scrollWrapper_d6c55ae2',
        scrollContent: 'Overview_scrollContent_7fbc91a1',
        scrollContent__top: 'Overview_scrollContent__top_b97d4349',
        scrollContent__bottom: 'Overview_scrollContent__bottom_bcf6b9fb',
        scrollContent__both: 'Overview_scrollContent__both_da3c9da3',
        separator: 'Overview_separator_581cc850',
        specialMechanic: 'Overview_specialMechanic_e751faeb',
        mechanics: 'Overview_mechanics_8249f573',
        description: 'Overview_description_864327ee',
        videoButton: 'Overview_videoButton_56603f29',
        videoButtonIcon: 'Overview_videoButtonIcon_9062084b',
        videoButtonLabel: 'Overview_videoButtonLabel_ddc644f',
        sceneWrapper: 'Overview_sceneWrapper_f9ca5f40',
    },
    wn = b.resolve('sounds'),
    Tn = ve('VideoButton', Cn.videoButton);
function Sn({ children: e }) {
    const { api: t } = Q(),
        [s, a] = ne(t);
    return i.jsxs('div', {
        className: Cn.scrollContainer,
        children: [
            i.jsx(oe, {
                classNames: {
                    wrapper: Cn.scrollWrapper,
                    content: n(Cn.scrollContent, Cn[`scrollContent__${mi(s, a)}`]),
                },
                children: e,
            }),
            i.jsx(de, { classNames: { base: Cn.verticalBar } }),
        ],
    });
}
const In = function () {
    const e = b.resolve('intl'),
        t = b.resolve('strings'),
        { controls: s } = Vs(),
        { model: a, controls: r } = di(),
        o = a.computes.mechanics().special[0],
        l = mt().model.tags.get().split(','),
        c = l.includes(Ee.special) || l.includes(Ee.premium) || l.includes(Ee.collectorVehicle),
        d = a.computes.mechanics().common.length > 0;
    return i.jsxs('div', {
        className: Cn.base,
        children: [
            i.jsx(le, {
                className: Cn.sceneWrapper,
                moveSpace: s.sceneWrapper.onMoveSpace,
                onMouseOver3dScene: s.sceneWrapper.onMouseOver3dScene,
            }),
            i.jsxs('div', {
                className: Cn.contentWrapper,
                children: [
                    o &&
                        i.jsxs(i.Fragment, {
                            children: [
                                i.jsx(an, { className: Cn.specialMechanic }),
                                (d || !c) && i.jsx('div', { className: Cn.separator }),
                            ],
                        }),
                    i.jsx(ce, {
                        children: i.jsx(Sn, {
                            children: i.jsxs('div', {
                                className: n(Cn.content, o && Cn.content__offset),
                                children: [
                                    d &&
                                        i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx(Gi, { className: Cn.mechanics }),
                                                !c && i.jsx('div', { className: Cn.separator }),
                                            ],
                                        }),
                                    c && i.jsx(zi, {}),
                                    i.jsx(Wi, { className: Cn.description }),
                                    i.jsx('div', { className: Cn.separator }),
                                    i.jsx(yn, {}),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
            o &&
                o.hasVideo &&
                i.jsxs(Tn, {
                    onMouseEnter: () => {
                        wn.play('highlight');
                    },
                    onClick: () => {
                        (wn.play('play'), r.watchMechanicsVideo({ mechanicsName: o.id }));
                    },
                    children: [
                        i.jsx('div', { className: Cn.videoButtonIcon }),
                        i.jsx('div', {
                            className: Cn.videoButtonLabel,
                            children: e.toUpperCase(t.readOrEmpty('vehicle_hub.overview.mechanicsVideo.label')),
                        }),
                    ],
                }),
        ],
    });
};
function Pn() {
    return i.jsx(ci, { options: { context: 'model.overviewModel' }, children: i.jsx(In, {}) });
}
const [kn, Mn] = m()(({ observableModel: e }) => {
        const t = { root: e.object(), specialMechanicParams: e.arrayClone('specialMechanicParams') },
            s = b.resolve('strings'),
            a = u.structural(() => {
                const e = t.root.get().specialMechanicName;
                return {
                    name: e
                        ? s.readOr(`vehicle_hub.abilities.special.name.${e}`, () =>
                              s.readOrEmpty(`vehicle_hub.abilities.common.name.${e}`),
                          )
                        : void 0,
                    type: e,
                };
            }),
            r = u.structural(() => {
                const e = t.root.get().specialMechanicName;
                return x(t.specialMechanicParams.get(), (t) => {
                    const a = vt(t),
                        r = s.readOrEmpty(`vehicle_hub.specialCharacteristics.${e}.${a.type}`, 'silent');
                    return (r && (a.amount = r.replace('{{value}}', String(a.amount))), a);
                });
            });
        return { ...t, computes: { specialHeader: a, specialParams: r } };
    }, v),
    En = { [Se.extraSmall]: 30, [Se.small]: 30, [Se.medium]: 15, [Se.large]: 48, [Se.extraLarge]: 48 },
    Rn = { [Se.extraSmall]: 20, [Se.small]: 20, [Se.medium]: 0, [Se.large]: 0, [Se.extraLarge]: 15 },
    An = { [Se.extraSmall]: 15, [Se.small]: 15, [Se.medium]: 15, [Se.large]: 15, [Se.extraLarge]: 15 },
    On = { [Se.extraSmall]: 300, [Se.small]: 300, [Se.medium]: 300, [Se.large]: 364, [Se.extraLarge]: 480 },
    Ln = { [Se.extraSmall]: 270, [Se.small]: 270, [Se.medium]: 300, [Se.large]: 414, [Se.extraLarge]: 390 },
    Bn = { [Se.extraSmall]: 280, [Se.small]: 280, [Se.medium]: 312, [Se.large]: 392, [Se.extraLarge]: 430 },
    Vn = r.createContext({ specialWidth: 0, commonWidth: 0, commonNarowlWidth: 0, gap: 0, enoughSpace: !1 });
function zn(e, t, s, a) {
    const r = e ? Ln[s] : On[s],
        i = e ? An[s] : Rn[s],
        n = i * (t - 1) + (e ? i : 0),
        o = e ? Bn[s] : 0,
        l = a - 2 * En[s];
    return {
        specialWidth: o,
        commonWidth: r,
        commonNarowlWidth: (l - o - n - r) / (t - 1),
        gap: i,
        enoughSpace: r * t + n + o <= l,
    };
}
function $n({ children: e }) {
    const { breakpoint: t, screenWidthRem: s } = ye(),
        a = Mn(),
        n = pt().model.computes.columns(),
        o = Boolean(a.model.computes.specialHeader().type),
        [l, c] = r.useState(() => zn(o, n.length, t.name, s));
    return (
        r.useEffect(() => {
            c(zn(o, n.length, t.name, s));
        }, [s, t.name, o, n.length]),
        i.jsx(Vn.Provider, { value: l, children: e })
    );
}
function Dn() {
    const e = r.useContext(Vn);
    if (!e) throw new Error('useColumnsSize must be used within a ColumnsSizeProvider');
    return e;
}
const Fn = {
        base: 'TtcRow_fe3d6ce9',
        amounts: 'TtcRow_amounts_501b4710',
        amounts__narrow: 'TtcRow_amounts__narrow_48713680',
        amount: 'TtcRow_amount_dc4ddd90',
        narrowContainer: 'TtcRow_narrowContainer_7375c812',
        slash: 'TtcRow_slash_ddbb818b',
        slash__amount: 'TtcRow_slash__amount_86b3162b',
        iconContainer: 'TtcRow_iconContainer_9ccada27',
        icon: 'TtcRow_icon_4cf3eded',
        name: 'TtcRow_name_2572ec7e',
    },
    Hn = (e, t) => {
        const s = b.resolve('intl'),
            a = b.resolve('strings').readOr(t, () => '%(value)%s'),
            r = e
                .replace(/-?\d+(?:\.\d+)?/g, (e) => s.formatReal('woZeroDigits', Number(e)))
                .replace(/\//g, '{{@ class $classSecondary}}/{{/}}');
        return a.replace('%(value)%s', r);
    };
function Wn({ value: e, narrow: t, templatePath: s = '', className: a }) {
    const r = b.resolve('intl');
    if (Re(e)) return i.jsx('span', { className: Fn.amount, children: r.formatReal('woZeroDigits', e) });
    if ('string' == typeof e)
        return i.jsx(
            se,
            { className: n(Fn.amounts, a), text: Hn(e, s), params: { classSecondary: n(Fn.slash, Fn.slash__amount) } },
            e,
        );
    if (Array.isArray(e)) {
        const s = e.slice(0, 5),
            a = b.resolve('strings').readOrEmpty('common.common.slash');
        return i.jsx('div', {
            className: n(Fn.amounts, t && Fn.amounts__narrow),
            children: s.map((e, t) =>
                i.jsxs(
                    c.Fragment,
                    {
                        children: [
                            i.jsx('span', {
                                className: Fn.amount,
                                'data-test-id': 'amountValue',
                                children: Re(e) ? r.formatReal('woZeroDigits', e) : e,
                            }),
                            t < s.length - 1 &&
                                i.jsx('span', { className: n(Fn.slash, Fn.slash__amount), children: a }),
                        ],
                    },
                    t,
                ),
            ),
        });
    }
    console.error('Incorrect amount type is in TTCRow component');
}
function Un({ value: e, measure: t = '' }) {
    const s = '' !== t ? ' ' + t : '';
    return 'string' == typeof e
        ? i.jsx('span', { children: e + s })
        : Array.isArray(e)
          ? i.jsx(i.Fragment, {
                children: e.map((t, a) =>
                    i.jsxs(
                        c.Fragment,
                        {
                            children: [
                                i.jsx('span', { children: t + (a === e.length - 1 && s) }),
                                a < e.length - 1 && i.jsx('span', { className: Fn.slash, children: '/' }),
                            ],
                        },
                        a,
                    ),
                ),
            })
          : void console.error('Incorrect name type is in TTCRow component');
}
const Gn = 'TtcDivider_eb891d7d',
    Xn = 'TtcDivider_base__narrow_92988388';
const Zn = {
        base: 'TtcHeader_9275bbc3',
        header: 'TtcHeader_header_766d9c80',
        icon: 'TtcHeader_icon_f5e541ab',
        name: 'TtcHeader_name_289f6f3',
    },
    Kn = { x20x20: 'x20x20', x24x24: 'x24x24' };
function Yn({
    name: e,
    type: t,
    vehicleAmount: s,
    currentAmount: a,
    maxAmount: o,
    tooltipId: l,
    iconsPath: c = 'hangar.ttc.paramsType',
    className: d,
    classNames: h,
}) {
    const m = b.resolve('intl'),
        u = N({ iconSize: Kn.x20x20 }, { large: { iconSize: Kn.x24x24 } }),
        _ = b.resolve('aliases'),
        p = Ne({
            resId: _.read((e) => e.vehicle_hub.default.VehicleParams('resId')),
            args: r.useMemo(() => ({ tooltipId: l, paramId: t, extendedTooltip: !0 }), [t, l]),
        });
    return i.jsxs('div', {
        className: n(Zn.base, d),
        ...p,
        children: [
            i.jsxs('div', {
                className: Zn.header,
                children: [
                    i.jsx(V, { path: `${c}.${u.iconSize}.${t}`, className: n(Zn.icon, null == h ? void 0 : h.icon) }),
                    i.jsx('div', {
                        className: n(Zn.name, null == h ? void 0 : h.name),
                        children: i.jsx($, { text: e, 'data-test-id': e }),
                    }),
                    i.jsx('div', { className: null == h ? void 0 : h.amount, children: m.formatNumber('integral', a) }),
                ],
            }),
            i.jsx(on, {
                className: null == h ? void 0 : h.progressBar,
                vehicleAmount: s,
                currentAmount: a,
                maxAmount: o,
            }),
        ],
    });
}
const qn = 'TtcList_ff11812f',
    Jn = r.forwardRef(function ({ className: e, ...t }, s) {
        return i.jsx('div', { ...t, ref: s, className: n(qn, e) });
    });
((Jn.Header = Yn),
    (Jn.Row = function ({
        name: e,
        type: t,
        amount: s,
        tooltipId: a,
        narrow: o = !1,
        templatePath: l = '',
        measure: c = '',
        iconPath: d = 'vehParams.small',
        className: h,
        classNames: m,
    }) {
        const u = b.resolve('aliases'),
            _ = Ne({
                resId: u.read((e) => e.vehicle_hub.default.VehicleParams('resId')),
                args: r.useMemo(() => ({ tooltipId: a, paramId: t, extendedTooltip: !0 }), [t, a]),
            });
        return i.jsxs('div', {
            className: n(Fn.base, h),
            'data-test-id': t,
            ..._,
            children: [
                i.jsxs('div', {
                    className: Fn.narrowContainer,
                    children: [
                        i.jsx(Wn, { value: s, narrow: o, templatePath: l, className: null == m ? void 0 : m.amount }),
                        i.jsx('div', {
                            className: Fn.iconContainer,
                            children: i.jsx(V, { path: `${d}.${t}`, className: Fn.icon }),
                        }),
                    ],
                }),
                !o && i.jsx('div', { className: Fn.name, children: i.jsx(Un, { value: e, measure: c }) }),
            ],
        });
    }),
    (Jn.Divider = function ({ narrow: e = !1, className: t }) {
        return i.jsx('div', { className: n(Gn, e && Xn, t) });
    }));
const Qn = {
    root: 'TtcColumn_root_dbeaff6f',
    base: 'TtcColumn_d19a3707',
    header: 'TtcColumn_header_67a81366',
    base__enoughSpace: 'TtcColumn_base__enoughSpace_dbeaff6f',
    base__narrow: 'TtcColumn_base__narrow_dbeaff6f',
    headerName: 'TtcColumn_headerName_1031e73d',
    list: 'TtcColumn_list_ef66cbdf',
    scrollArea: 'TtcColumn_scrollArea_54c3b739',
    scrollContent: 'TtcColumn_scrollContent_5e98dc69',
    scrollContent__top: 'TtcColumn_scrollContent__top_b4e45275',
    scrollContent__bottom: 'TtcColumn_scrollContent__bottom_bec151c',
    scrollContent__both: 'TtcColumn_scrollContent__both_923fca73',
    content: 'TtcColumn_content_7cf1c2f7',
    listContent: 'TtcColumn_listContent_db324a81',
    listRow: 'TtcColumn_listRow_f5a5db79',
    wrapper: 'TtcColumn_wrapper_db324a81',
    verticalBar: 'TtcColumn_verticalBar_b5ef3c02',
    dividerRow: 'TtcColumn_dividerRow_834e9bb1',
    divider: 'TtcColumn_divider_809fe562',
};
function eo({ children: e }) {
    const { api: t } = Q(),
        [s, a] = ne(t);
    return i.jsx(oe, {
        className: Qn.scrollArea,
        classNames: { content: n(Qn.scrollContent, Qn[`scrollContent__${mi(s, a)}`]) },
        children: e,
    });
}
function to({ narrow: e, header: t, characteristics: s, modifications: a, className: r }) {
    const { commonWidth: o, commonNarowlWidth: l, enoughSpace: c } = Dn();
    return i.jsx('div', {
        className: n(Qn.base, c && Qn.base__enoughSpace, e && Qn.base__narrow, r),
        style: { '--width': `${o}rem`, '--widthNarrow': `${l}rem` },
        children: i.jsxs(Jn, {
            className: Qn.list,
            children: [
                i.jsx(Yn, { ...t, className: Qn.header, classNames: { name: Qn.headerName } }),
                i.jsx('div', {
                    className: Qn.content,
                    children: i.jsxs(ce, {
                        children: [
                            i.jsx(eo, {
                                children: i.jsxs('div', {
                                    className: Qn.listContent,
                                    children: [
                                        s &&
                                            s.map((e, t) =>
                                                i.jsx(
                                                    Jn.Row,
                                                    {
                                                        name: e.name,
                                                        type: e.type,
                                                        amount: e.amount,
                                                        tooltipId: e.tooltipId,
                                                        narrow: !1,
                                                        className: Qn.listRow,
                                                    },
                                                    t,
                                                ),
                                            ),
                                        a &&
                                            i.jsxs(i.Fragment, {
                                                children: [
                                                    i.jsx('div', {
                                                        className: Qn.dividerRow,
                                                        children: i.jsx(Jn.Divider, {
                                                            narrow: e,
                                                            className: Qn.divider,
                                                        }),
                                                    }),
                                                    a.map((e, t) =>
                                                        i.jsx(
                                                            Jn.Row,
                                                            {
                                                                name: e.name,
                                                                type: e.type,
                                                                amount: e.amount,
                                                                tooltipId: e.tooltipId,
                                                                narrow: !1,
                                                                className: Qn.listRow,
                                                            },
                                                            t,
                                                        ),
                                                    ),
                                                ],
                                            }),
                                    ],
                                }),
                            }),
                            i.jsx(de, { classNames: { base: Qn.verticalBar } }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
const so = {
        root: 'TtcColumnSpecial_root_60f09503',
        base: 'TtcColumnSpecial_cfe40f97',
        header: 'TtcColumnSpecial_header_5fed6267',
        iconContainer: 'TtcColumnSpecial_iconContainer_efa85af1',
        glow: 'TtcColumnSpecial_glow_a9abf697',
        glow__back: 'TtcColumnSpecial_glow__back_9a73946e',
        glow__front: 'TtcColumnSpecial_glow__front_3102e4af',
        dust: 'TtcColumnSpecial_dust_a8fe4e46',
        icon: 'TtcColumnSpecial_icon_d8177e19',
        title: 'TtcColumnSpecial_title_b28b1f50',
        list: 'TtcColumnSpecial_list_7950bbfa',
        scrollArea: 'TtcColumnSpecial_scrollArea_66f85f7e',
        scrollContent: 'TtcColumnSpecial_scrollContent_b5e7bd2d',
        scrollContent__top: 'TtcColumnSpecial_scrollContent__top_8b7d94d',
        scrollContent__bottom: 'TtcColumnSpecial_scrollContent__bottom_246c8846',
        scrollContent__both: 'TtcColumnSpecial_scrollContent__both_8c6f0949',
        content: 'TtcColumnSpecial_content_4a47d9c5',
        listContent: 'TtcColumnSpecial_listContent_ae2ae6d9',
        listRow: 'TtcColumnSpecial_listRow_6a7f65d',
        amount: 'TtcColumnSpecial_amount_df43f118',
        description: 'TtcColumnSpecial_description_b0709233',
        descriptionIcon: 'TtcColumnSpecial_descriptionIcon_7bcf21ab',
        descriptionText: 'TtcColumnSpecial_descriptionText_45ec876c',
        descriptionTextLine: 'TtcColumnSpecial_descriptionTextLine_812592ff',
        descriptionTextLine__secondary: 'TtcColumnSpecial_descriptionTextLine__secondary_c4e8b8dc',
        wrapper: 'TtcColumnSpecial_wrapper_ae2ae6d9',
        verticalBar: 'TtcColumnSpecial_verticalBar_5bb30112',
    },
    ao = 'x68x68',
    ro = 'x96x96',
    io = 'small',
    no = 'large';
function oo({ children: e }) {
    const { api: t } = Q(),
        [s, a] = ne(t);
    return i.jsx(oe, {
        className: so.scrollArea,
        classNames: { content: n(so.scrollContent, so[`scrollContent__${mi(s, a)}`]) },
        children: e,
    });
}
function lo({ name: e, type: t, characteristics: s, descriptionIcon: a, className: r }) {
    const { specialWidth: o } = Dn(),
        l = N({ iconSize: ao, glowSize: io }, { large: { iconSize: ro, glowSize: no } }),
        c = b.resolve('images'),
        d = `vehicle_hub.mechanics.special.${l.iconSize}.${t}`,
        h = b
            .resolve('strings')
            .readOrEmpty(`vehicle_hub.characteristics.abilities.special.description.${t}`)
            .split('\n');
    return i.jsx('div', {
        className: n(so.base, r),
        style: { '--width': `${o}rem` },
        children: i.jsxs(Jn, {
            className: so.list,
            children: [
                i.jsxs('div', {
                    className: so.header,
                    children: [
                        c.has(d) &&
                            i.jsxs('div', {
                                className: so.iconContainer,
                                children: [
                                    i.jsx(V, {
                                        path: `vehicle_hub.mechanics.special.glow_back_${l.glowSize}`,
                                        className: n(so.glow, so.glow__back),
                                    }),
                                    i.jsx(V, { path: d, className: so.icon }),
                                    i.jsx(V, {
                                        path: `vehicle_hub.mechanics.special.dust_${l.glowSize}`,
                                        className: so.dust,
                                    }),
                                    i.jsx(V, {
                                        path: `vehicle_hub.mechanics.special.glow_front_${l.glowSize}`,
                                        className: n(so.glow, so.glow__front),
                                    }),
                                ],
                            }),
                        i.jsx('div', { className: so.title, children: e }),
                    ],
                }),
                i.jsx('div', {
                    className: so.content,
                    children: i.jsxs(ce, {
                        children: [
                            i.jsxs(oo, {
                                children: [
                                    i.jsx('div', {
                                        className: so.listContent,
                                        children:
                                            s &&
                                            s.map((e, t) =>
                                                i.jsx(
                                                    Jn.Row,
                                                    {
                                                        name: e.name,
                                                        type: e.type,
                                                        amount: e.amount,
                                                        templatePath: e.templatePath,
                                                        measure: e.measure,
                                                        tooltipId: e.tooltipId,
                                                        className: so.listRow,
                                                        classNames: { amount: so.amount },
                                                    },
                                                    t,
                                                ),
                                            ),
                                    }),
                                    i.jsxs('div', {
                                        className: so.description,
                                        children: [
                                            a && i.jsx(V, { path: a, className: so.descriptionIcon }),
                                            i.jsx('div', {
                                                className: so.descriptionText,
                                                children: h.map((e, t) =>
                                                    i.jsx(
                                                        se,
                                                        {
                                                            split: !0,
                                                            className: so.descriptionTextLine,
                                                            text: e,
                                                            params: {
                                                                classSecondary: so.descriptionTextLine__secondary,
                                                            },
                                                        },
                                                        t,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsx(de, { classNames: { base: so.verticalBar } }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
const co = 'Stats_6c5a71f3',
    ho = 'Stats_base__enoughSpace_d737aebe',
    mo = 'Stats_column_386905a7',
    uo = 'Stats_glow_bc5fc822',
    _o = 'Stats_glow__narrow_23403efa',
    po = b.resolve('sounds'),
    vo = a(function () {
        const { model: e } = Mn(),
            [t, s] = r.useState(0),
            a = pt().model.computes.columns(),
            o = e.computes.specialHeader(),
            l = e.computes.specialParams(),
            { gap: c, enoughSpace: d } = Dn();
        return i.jsxs('div', {
            className: n(co, d && ho),
            children: [
                o.type && i.jsx(lo, { name: o.name, type: o.type, characteristics: l }),
                x(a, (e, a) => {
                    const r = !d && t !== a;
                    return i.jsxs(
                        'div',
                        {
                            className: mo,
                            onMouseEnter: () => {
                                d || (po.play('gui_characteristics_highlight'), s(a));
                            },
                            style: { '--gap': `${c}rem` },
                            children: [
                                i.jsx('div', { className: n(uo, (d || r) && _o) }),
                                i.jsx(to, {
                                    narrow: r,
                                    header: e.header,
                                    characteristics: e.characteristics,
                                    modifications: e.modifications,
                                }),
                            ],
                        },
                        a,
                    );
                }),
            ],
        });
    });
function bo() {
    return i.jsx(kn, { options: { context: 'model.statsModel' }, children: i.jsx($n, { children: i.jsx(vo, {}) }) });
}
const xo = Ae({
        click: {
            researchChainLargePerk: 'gui_perk_research_chain_large',
            researchChainSmallPerk: 'gui_perk_research_chain_small',
            researchSingleSmallPerk: 'gui_perk_research_single_small',
            researchSingleLargePerk: 'gui_perk_research_single_large',
            researchFinalPerk: 'gui_perk_research_final',
            changeScreen: 'gui_perk_changescreen',
            select: 'yes1',
            deselect: 'yes',
        },
    }),
    fo = { base: 'Prestige_c70f8f74', vanity: 'Prestige_vanity_658350a8' };
function go() {
    return i.jsxs('div', {
        className: fo.base,
        children: [
            i.jsx('div', { className: fo.vanity, children: i.jsx(Je, {}) }),
            i.jsx('div', { className: fo.progression, children: i.jsx(Qe, {}) }),
        ],
    });
}
const No = 'Progression_2e5f6a7',
    jo = 'Progression_entryPointLine_736c2a7d',
    yo = 'Progression_tree_cd53c03';
function Co() {
    return i.jsxs('div', {
        className: No,
        children: [
            i.jsx('div', { className: yo, children: i.jsx(et, {}) }),
            i.jsx('div', { className: jo, children: i.jsx(tt, {}) }),
        ],
    });
}
const wo = 420,
    To = 570;
function So(e) {
    return { duration: 'opacity' === e ? wo : To };
}
const Io = { config: { easing: Oe.easeInOutCirc } },
    Po = {
        tree: {
            tree: {
                from: { opacity: '0', transform: 'translate(-100%)' },
                to: { opacity: '1', transform: 'translate(0%)' },
                config: So,
            },
            prestige: {
                from: { opacity: '1', transform: 'translate(0%)' },
                to: { opacity: '0', transform: 'translate(100%)' },
                config: So,
            },
        },
        prestige: {
            tree: {
                from: { opacity: '1', transform: 'translate(0%)' },
                to: { opacity: '0', transform: 'translate(-100%)' },
                config: So,
            },
            prestige: {
                from: { opacity: '0', transform: 'translate(100%)' },
                to: { opacity: '1', transform: 'translate(0%)' },
                config: So,
            },
        },
    },
    ko = {
        root: 'VehSkillTree_root_cdb9d6e7',
        base: 'VehSkillTree_d74c4861',
        content: 'VehSkillTree_content_caf211e7',
        progression: 'VehSkillTree_progression_e4efd00a',
        progressionContent: 'VehSkillTree_progressionContent_47f635f',
        base__prestige: 'VehSkillTree_base__prestige_cdb9d6e7',
        progressionEntryPoint: 'VehSkillTree_progressionEntryPoint_e90dad8f',
        prestigeContent: 'VehSkillTree_prestigeContent_961d4c21',
        base__tree: 'VehSkillTree_base__tree_cdb9d6e7',
        prestigeEntryPoint: 'VehSkillTree_prestigeEntryPoint_6d89a066',
        prestigeEntryPointBg: 'VehSkillTree_prestigeEntryPointBg_5b6c912c',
    },
    Mo = a(() => {
        const { model: e } = st(),
            t = Le(),
            s = Be(),
            a = Ve();
        function r(e) {
            (t.push(zs.vehSkillTree + `/${e}`),
                s.play('click', { target: 'changeScreen' }),
                s.play('click', { target: 'select' }));
        }
        const o = e.locationId.get(),
            [l] = d(() => ({ from: Po[o].tree.from, to: Po[o].tree.to, initConfig: Io, immediate: a }), [o, a]),
            [m] = d(() => ({ from: Po[o].prestige.from, to: Po[o].prestige.to, initConfig: Io, immediate: a }), [o, a]);
        return i.jsx('div', {
            className: n(ko.base, ko[`base__${o}`]),
            children: i.jsxs('div', {
                className: ko.content,
                children: [
                    i.jsxs(h.div, {
                        className: ko.progression,
                        style: l,
                        children: [
                            i.jsx(at, {
                                options: c.useMemo(() => ({ context: 'model.vehSkillTreeModel.tree' }), []),
                                children: i.jsxs('div', {
                                    className: ko.progressionContent,
                                    children: [
                                        i.jsx(Co, {}),
                                        i.jsx('div', {
                                            className: ko.progressionEntryPoint,
                                            children: i.jsx(rt, { onClick: () => r('prestige') }),
                                        }),
                                    ],
                                }),
                            }),
                            i.jsx(it, {
                                options: c.useMemo(() => ({ context: 'model.vehSkillTreeModel.tree' }), []),
                                children: i.jsx(nt, {}),
                            }),
                        ],
                    }),
                    i.jsx(ot, {
                        options: c.useMemo(() => ({ context: 'model.vehSkillTreeModel.prestige' }), []),
                        children: i.jsxs(h.div, {
                            className: ko.prestigeContent,
                            style: m,
                            children: [
                                i.jsxs('div', {
                                    className: ko.prestigeEntryPoint,
                                    children: [
                                        i.jsx('div', { className: ko.prestigeEntryPointBg }),
                                        i.jsx(rt, { onClick: () => r('tree'), vanity: !0 }),
                                    ],
                                }),
                                i.jsx(go, {}),
                            ],
                        }),
                    }),
                ],
            }),
        });
    });
function Eo() {
    return i.jsx(lt, {
        options: { context: 'model.vehSkillTreeModel' },
        children: i.jsx(he, { overrides: xo, children: i.jsx(Mo, {}) }),
    });
}
const Ro = {
        root: 'Page_root_fefb19c8',
        base: 'Page_7668a217',
        base__stats: 'Page_base__stats_822895b4',
        base__armor: 'Page_base__armor_9d6ac64a',
        base__vehSkillTree: 'Page_base__vehSkillTree_49486bd8',
        content: 'Page_content_ce996cfe',
        screenContent: 'Page_screenContent_a3ab0fac',
        tabNavigation: 'Page_tabNavigation_5f2e33b1',
        vehicleInfo: 'Page_vehicleInfo_fa5e301b',
        researchPurchaseControl: 'Page_researchPurchaseControl_471abc56',
    },
    Ao = [Os, 'modules', 'vehSkillTree'],
    Oo = { context: 'model.comparisonModel' },
    Lo = { context: 'model.researchPurchaseModel' },
    Bo = a(function () {
        var e;
        const { model: t } = Vs(),
            s = Le(),
            a = (null == (e = ze(s.location, { paths: [`${zs.root}/:tab`] })) ? void 0 : e.params.tab) ?? Os,
            o = r.useCallback(
                (e) => {
                    t.menuItems.get().findIndex((t) => t.id === e) > -1 && s.push(`${zs.root}/${e}`);
                },
                [t.menuItems, s],
            ),
            { tabsAdaptive: l } = N(
                { tabsAdaptive: Ue.small },
                { medium: { tabsAdaptive: Ue.medium }, large: { tabsAdaptive: Ue.large } },
            );
        return (
            $e(Ge.ESCAPE, () => {
                s.goBack();
            }),
            $e(Ge.ARROW_RIGHT, () => {
                var e;
                const s = t.menuItems.get().findIndex((e) => e.id === a),
                    r =
                        s > -1 &&
                        s + 1 < t.menuItems.get().length &&
                        (null == (e = t.menuItems.get()[s + 1]) ? void 0 : e.id);
                r && o(r);
            }),
            $e(Ge.ARROW_LEFT, () => {
                var e;
                const s = t.menuItems.get().findIndex((e) => e.id === a),
                    r = s > 0 && (null == (e = t.menuItems.get()[s - 1]) ? void 0 : e.id);
                r && o(r);
            }),
            r.useLayoutEffect(() => {
                De(!0);
            }),
            i.jsx('div', {
                className: n(Ro.base, Ro[`base__${a}`]),
                children: i.jsxs('div', {
                    className: Ro.content,
                    children: [
                        i.jsxs('div', {
                            className: Ro.screenContent,
                            children: [
                                i.jsx(ms, {
                                    tabsList: t.menuItems.get(),
                                    activeTab: a,
                                    onActiveChange: o,
                                    theme: Fe.primary,
                                    size: l,
                                    className: Ro.tabNavigation,
                                }),
                                i.jsxs(He, {
                                    children: [
                                        i.jsx(We, { path: zs.overview, component: Pn }),
                                        i.jsx(We, { path: zs.modules, component: li }),
                                        i.jsx(We, { path: zs.stats, component: bo }),
                                        i.jsx(We, { path: zs.armor, component: fa }),
                                        i.jsx(We, { path: zs.vehSkillTree, component: Eo }),
                                    ],
                                }),
                            ],
                        }),
                        i.jsx(jt, { options: Oo, children: i.jsx(As, { className: Ro.vehicleInfo }) }),
                        Ao.includes(a) &&
                            i.jsx(gt, { options: Lo, children: i.jsx(rs, { className: Ro.researchPurchaseControl }) }),
                    ],
                }),
            })
        );
    }),
    Vo = 'App_fac56ab6';
function zo() {
    return i.jsx('div', { className: Vo, children: i.jsx(Bo, {}) });
}
const $o = b.resolve('aliases'),
    Do = { 'mouse-enter': Ye('highlightx'), click: Ye('tabs') };
qe(
    new Xe()
        .add(Ze)
        .addWithProps(Ke, { context: 'model.router' })
        .addWithProps(ht, { options: { context: 'model.vehicleInfoModel' } })
        .addWithProps(_t, { options: { rootId: $o.read((e) => e.vehicle_hub.default.VehicleParams('resId')) } })
        .addWithProps(ct, { options: { rootId: $o.read((e) => e.vehicle_hub.default.Wallet('resId')) } })
        .addWithProps(he, { overrides: Do })
        .add(Bs)
        .render(i.jsx(zo, {})),
    { fullScreen: !0 },
).then(() => De(!1));
