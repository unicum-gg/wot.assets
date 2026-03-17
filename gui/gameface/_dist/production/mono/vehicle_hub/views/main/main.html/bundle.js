var e = Object.defineProperty,
    t = (t, s, a) =>
        ((t, s, a) => (s in t ? e(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[s] = a)))(
            t,
            'symbol' != typeof s ? s + '' : s,
            a,
        );
import {
    _ as s,
    z as a,
    r,
    j as i,
    f as n,
    l as o,
    A as c,
    n as l,
    o as d,
    e as h,
    R as m,
} from '../../../chunks/vendor.js';
import {
    i as u,
    c as _,
    a as p,
    b as v,
    n as b,
    r as x,
    m as g,
    D as f,
    u as N,
    d as j,
    C as y,
    F as C,
    g as k,
    e as w,
    f as I,
    h as S,
    M as T,
    j as M,
    k as P,
    I as E,
    l as A,
    o as R,
    p as O,
    q as B,
    B as L,
    s as D,
    t as V,
    v as $,
    T as z,
    w as F,
    x as H,
    y as W,
    z as G,
    A as U,
    E as X,
    G as K,
    V as Z,
    W as Y,
    H as J,
    R as q,
    J as Q,
    K as ee,
    L as te,
    N as se,
    O as ae,
    P as re,
    Q as ie,
    S as ne,
    U as oe,
    X as ce,
    Y as le,
    Z as de,
    _ as he,
    $ as me,
    a0 as ue,
    a1 as _e,
    a2 as pe,
    a3 as ve,
    a4 as be,
    a5 as xe,
    a6 as ge,
    a7 as fe,
    a8 as Ne,
    a9 as je,
    aa as ye,
    ab as Ce,
    ac as ke,
    ad as we,
    ae as Ie,
    af as Se,
    ag as Te,
    ah as Me,
    ai as Pe,
    aj as Ee,
    ak as Ae,
    al as Re,
    am as Oe,
    an as Be,
    ao as Le,
    ap as De,
    aq as Ve,
    ar as $e,
    as as ze,
    at as Fe,
    au as He,
    av as We,
    aw as Ge,
    ax as Ue,
    ay as Xe,
    az as Ke,
    aA as Ze,
    aB as Ye,
    aC as Je,
    aD as qe,
    aE as Qe,
    aF as et,
    aG as tt,
    aH as st,
    aI as at,
    aJ as rt,
    aK as it,
} from '../../../chunks/lib.js';
import { M as nt, a as ot } from '../../../chunks/armor_model.js';
import {
    V as ct,
    P as lt,
    T as dt,
    E as ht,
    u as mt,
    a as ut,
    b as _t,
    F as pt,
    c as vt,
    d as bt,
    M as xt,
} from '../../../chunks/entry_point.js';
import '../../../chunks/node_model.js';
const [gt, ft] = u('WalletModel')(
        ({ observableModel: e }) => {
            const t = { currencies: e.dict('currencies') };
            return {
                ...t,
                list: _.shallow((e) =>
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
    [Nt, jt] = u()(
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
            type: e.transform((e) => (v(e.vehicleType) ? e.vehicleType : void 0)),
            state: e.transform((e) => (p(e.state) ? e.state : void 0)),
        }),
        b,
    ),
    yt = x.resolve('strings'),
    [Ct, kt] = u()(({ observableModel: e }) => {
        const t = { groups: e.arrayClone('groups') },
            s = _.structural(() =>
                g(t.groups.get(), ({ id: e, tooltipID: t, indicator: s, params: a, extraParams: r }) => ({
                    id: e,
                    header: St(e, t, s),
                    characteristics: It(a),
                    modifications: It(r),
                })),
            );
        return { ...t, computes: { columns: s } };
    }, b);
function wt({ id: e, value: t, name: a, tooltipID: r, template: i, measureUnit: n }) {
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
        c = a
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
    return { type: e, tooltipId: r, templatePath: i, amount: o.length > 1 ? o : o[0], name: Tt(e, c), measure: n };
}
function It(e) {
    const t = g(e, wt);
    return t.length > 0 ? t : void 0;
}
function St(e, t, s) {
    return {
        name: yt.readOrEmpty(`menu.tank_params.${e}`),
        type: e,
        vehicleAmount: s.markerValue,
        maxAmount: s.maxValue,
        currentAmount: s.value,
        tooltipId: t,
    };
}
function Tt(e, { key: t, name: s }) {
    return '' !== s && '' !== t
        ? yt.readOr(`tank_setup.kpi.bonus.ttc.${t}.${s}`, () => yt.readOrEmpty(`tank_setup.kpi.bonus.${t}.${s}`))
        : yt.readOrEmpty(`menu.tank_params.${e}`);
}
const [Mt, Pt] = u()(
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
                    'canTradeIn',
                ]),
                s = e.primitives(['elite', 'premium']),
                a = _.primitive(() => t.combatXp.get() + t.freeXp.get());
            return { ...t, computes: { totalXp: a, isPremium: _.primitive(() => s.elite.get() || s.premium.get()) } };
        },
        ({ externalModel: e }) => ({
            action: e.createCallback((e) => ({ action: e }), 'onAction'),
            blueprintAction: e.createCallbackNoArgs('onBlueprint'),
        }),
    ),
    [Et, At] = u()(
        ({ observableModel: e }) => ({ ...e.primitives(['status']) }),
        ({ externalModel: e }) => ({ addToComparison: e.createCallbackNoArgs('onAddToComparison') }),
    ),
    Rt = 'action_research',
    Ot = 'action_purchase',
    Bt = 'action_purchase_shop',
    Lt = 'action_restore',
    Dt = 'action_in_garage',
    Vt = 'action_state_enabled',
    $t = 'readyForTradeIn',
    zt = {
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
    Ft = a(function ({ className: e }) {
        const t = x.resolve('intl'),
            { model: s } = Pt(),
            a = s.action.get(),
            o = s.actionStateReason.get(),
            c = s.oldPrice.get(),
            l = s.price.get(),
            d = s.currency.get(),
            h = s.priceDiscount.get(),
            m = a === Rt ? f.colors.blue : f.colors.red,
            u = s.promoFinishTime.get(),
            _ = r.useRef(),
            [p, v] = r.useState(0);
        (r.useLayoutEffect(() => {
            const e = Math.max(u - Math.floor(Date.now() / T), 0);
            if ((v(e), !(e <= 0)))
                return ((_.current = setTimeout(() => v(0), 1e3 * (e + 1))), () => clearTimeout(_.current));
        }, [u]),
            N(() => clearTimeout(_.current)));
        const b = j(
            { currencySize: y.sizes.small, discountSize: f.sizes.medium },
            { medium: { currencySize: y.sizes.large, discountSize: f.sizes.large } },
        );
        return i.jsxs('div', {
            className: n(zt.priceBlock, e),
            children: [
                c > 0 && c !== l && i.jsx('div', { className: zt.oldPrice, children: t.formatNumber('integral', c) }),
                i.jsxs(y, {
                    type: d,
                    size: b.currencySize,
                    enough: 'notEnoughCredits' !== o && 'notEnoughXp' !== o,
                    className: zt.priceContainer,
                    reverse: !0,
                    children: [
                        h > 0 &&
                            i.jsxs('div', {
                                className: zt.discountContainer,
                                children: [
                                    i.jsx(f, {
                                        color: m,
                                        size: b.discountSize,
                                        className: n(zt.discount, a === Rt && zt.discount__research),
                                        children: t.formatNumber('integral', -h),
                                    }),
                                    a !== $t &&
                                        p > 0 &&
                                        i.jsx('div', {
                                            className: n(zt.discountTimer, zt[`discountTimer__color-${m}`]),
                                            children: i.jsx(C, {
                                                path: 'vehicle_hub.researchPurchase.discountTimer',
                                                params: { date: k(u, I(p).days > 0 ? w.ShortDate : w.ShortTime) },
                                            }),
                                        }),
                                ],
                            }),
                        i.jsx('div', { className: zt.price, children: S(l, d) }),
                    ],
                }),
            ],
        });
    }),
    Ht = 'TradeInLabel_8e59d58a',
    Wt = 'TradeInLabel_icon_370a8f6b';
function Gt() {
    const e = x.resolve('strings'),
        t = M('vehicle_hub.research_purchase.trade_in', 'vehicle_hub.research_purchase.trade_in_big'),
        s = P({ args: r.useMemo(() => ({ tooltipId: 'tradeInInfo' }), []) });
    return i.jsxs('div', {
        ...s,
        className: Ht,
        children: [i.jsx(E, { className: Wt, path: t }), e.readOrEmpty('tooltips.vehicle.trade')],
    });
}
const Ut = 'VehicleExperience_54fa17d7',
    Xt = 'VehicleExperience_row_4f00afbf',
    Kt = 'VehicleExperience_label_452b09a4',
    Zt = 'VehicleExperience_experience_718161f',
    Yt = 'VehicleExperience_dots_2b70188e',
    Jt = a(function ({ className: e }) {
        const t = x.resolve('intl'),
            s = x.resolve('strings'),
            { model: a } = Pt(),
            r = a.combatXp.get(),
            o = a.computes.totalXp(),
            c = a.computes.isPremium();
        return i.jsxs('div', {
            className: n(Ut, e),
            children: [
                i.jsxs('div', {
                    className: Xt,
                    children: [
                        i.jsx('div', { className: Kt, children: s.readOrEmpty('session_stats.label.gamingXp') }),
                        i.jsx('div', { className: Yt }),
                        i.jsx(y, {
                            type: c ? y.types.eliteXp : y.types.tankXP,
                            size: y.sizes.extraSmall,
                            reverse: !0,
                            children: i.jsx('div', { className: Zt, children: t.formatNumber('integral', r) }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: Xt,
                    children: [
                        i.jsx('div', { className: Kt, children: s.readOrEmpty('session_stats.label.totalXp') }),
                        i.jsx('div', { className: Yt }),
                        i.jsx(y, {
                            type: y.types.custom,
                            size: y.sizes.extraSmall,
                            imagePath: c
                                ? 'vehicle_hub.research_purchase.total_experience_elite'
                                : 'vehicle_hub.research_purchase.total_experience',
                            reverse: !0,
                            children: i.jsx('div', { className: Zt, children: t.formatNumber('integral', o) }),
                        }),
                    ],
                }),
            ],
        });
    }),
    qt = 'ResearchPurchaseControl_fce6cc10',
    Qt = 'ResearchPurchaseControl_priceBlock_b9fd7559',
    es = 'ResearchPurchaseControl_controls_9dac55a2',
    ts = 'ResearchPurchaseControl_controls__rent_35316773',
    ss = 'ResearchPurchaseControl_actionButton_d5574927',
    as = 'ResearchPurchaseControl_buttonContent_11e8b840',
    rs = 'ResearchPurchaseControl_buttonContent__blueprintAssembled_bd87c171',
    is = 'ResearchPurchaseControl_base__inGarage_32499cd8',
    ns = 'ResearchPurchaseControl_purchaseShopButton_1d51e5f2',
    os = 'ResearchPurchaseControl_recoveryUntil_6b79fd3b',
    cs = 'ResearchPurchaseControl_garageButton_60f5bbd3',
    ls = 'ResearchPurchaseControl_blueprintGarageButton_32499cd8',
    ds = 'ResearchPurchaseControl_garageIcon_7a613811',
    hs = 'ResearchPurchaseControl_blueprintIcon_a923cdd9',
    ms = 'ResearchPurchaseControl_blueprintTotal_7c0becbb',
    us = 'ResearchPurchaseControl_experienceBlock_cd2e5ad7',
    _s = 'ResearchPurchaseControl_experienceBlock__rent_35316773',
    ps = 'ResearchPurchaseControl_experienceBlock__topOffset_8a525c2',
    vs = 'ResearchPurchaseControl_experienceBlock__bottomOffset_b7ecf008',
    bs = [Dt, Lt, Bt];
function xs({ actionType: e }) {
    const t = x.resolve('strings');
    switch (e) {
        case Rt:
            return t.readOrEmpty('menu.unlocks.unlockButton');
        case Ot:
            return t.readOrEmpty('menu.research.labels.button.buy');
        case Bt:
            return i.jsxs(i.Fragment, {
                children: [
                    i.jsx(E, { path: 'vehicle_hub.research_purchase.purchase_shop', className: ns }),
                    t.readOrEmpty('vehicle_preview.buyingPanel.buyBtn.label.buy'),
                ],
            });
        case Lt:
            return t.readOrEmpty('menu.research.labels.button.restore');
        case $t:
            return t.readOrEmpty('hangar.buyVehicleWindow.tradeInBtnLabel');
        default:
            return void console.error(`ResearchPurchaseControl_Action: met unexpected action ${e}`);
    }
}
function gs({ blueprintFragments: e, blueprintTotal: t }) {
    const s = x.resolve('strings');
    return e === t
        ? i.jsxs(i.Fragment, {
              children: [
                  i.jsx(E, { path: 'vehicle_hub.research_purchase.blueprint_assembled', className: hs }),
                  s.readOrEmpty('blueprints.blueprintProgressBar.complete'),
              ],
          })
        : i.jsxs(i.Fragment, {
              children: [
                  i.jsx(C, {
                      path: 'blueprints.blueprintProgressBar.inProgress.progress',
                      params: { values: e },
                      upgradeLegacy: !0,
                  }),
                  i.jsx(C, {
                      path: 'blueprints.blueprintProgressBar.inProgress.values',
                      params: { current: '', total: t },
                      className: ms,
                      upgradeLegacy: !0,
                  }),
              ],
          });
}
const fs = a(function ({ className: e }) {
        const t = x.resolve('strings'),
            { model: s, controls: a } = Pt(),
            { model: o } = jt(),
            c = s.action.get(),
            l = s.timeLeft.get(),
            d = s.cooldownTimeLeft.get(),
            h = s.notInShopVehicle.get(),
            m = s.actionState.get(),
            u = s.actionStateReason.get(),
            _ = s.blueprintFragments.get(),
            p = s.blueprintTotal.get(),
            v = s.canTradeIn.get(),
            b = A(V(d), D.compact),
            g = r.useMemo(() => k(Date.now() / T + l, I(l).days > 0 ? w.FullDate : w.ShortTime), [l]),
            f = R({
                header: u ? t.readOrEmpty(`tooltips.vehiclePreview.buyButton.${u}.header`) : void 0,
                body: u
                    ? O(B(t.readOrEmpty(`tooltips.vehiclePreview.buyButton.${u}.body`)), {
                          timeLeft: b.items.join(' '),
                      })
                    : void 0,
            }),
            N = (function (e, t) {
                const s = x.resolve('strings'),
                    a = R({
                        header: s.readOrEmpty('tooltips.blueprint.VehicleBlueprintTooltip.vehicleUnlocked.header'),
                        body: s.readOrEmpty('tooltips.blueprint.VehicleBlueprintTooltip.vehicleUnlocked.body'),
                    }),
                    i = r.useMemo(() => [t], [t]),
                    n = $('blueprintInfo', i);
                return e !== Rt ? a : n;
            })(c, o.vehicleId.get()),
            y = j(
                { buttonSize: L.sizes.extraSmall, recoveryButtonSize: L.sizes.small },
                { small: { buttonSize: L.sizes.small }, medium: { recoveryButtonSize: L.sizes.large } },
            );
        if (h && !bs.includes(c)) return;
        const S = _ === p;
        return i.jsx('div', {
            className: n(qt, c === Dt && is, e),
            children: (() => {
                switch (c) {
                    case Dt:
                        return i.jsxs(i.Fragment, {
                            children: [
                                s.combatXp.get() >= 0 && i.jsx(Jt, { className: n(us, vs) }),
                                i.jsxs('div', {
                                    className: es,
                                    children: [
                                        i.jsxs(L, {
                                            theme: L.themes.secondary,
                                            size: y.buttonSize,
                                            className: cs,
                                            classNames: { content: as },
                                            onClick: () => a.action(c),
                                            children: [
                                                i.jsx('div', { className: ds }),
                                                t.readOrEmpty('menu.research.labels.button.showInHangar'),
                                            ],
                                        }),
                                        p > 0 &&
                                            i.jsx(L, {
                                                ...N,
                                                theme: L.themes.secondary,
                                                size: y.buttonSize,
                                                onClick: () => {
                                                    (N.onClick(), a.blueprintAction());
                                                },
                                                className: ls,
                                                classNames: { content: n(as, S && rs) },
                                                children: i.jsx(gs, { blueprintFragments: _, blueprintTotal: p }),
                                            }),
                                    ],
                                }),
                            ],
                        });
                    case 'action_purchase_can_view_in_garage':
                        return i.jsxs(i.Fragment, {
                            children: [
                                i.jsx(Ft, { className: Qt }),
                                i.jsxs('div', {
                                    className: n(es, ts),
                                    children: [
                                        i.jsx(L, {
                                            ...(u && f),
                                            theme: L.themes.primary,
                                            size: y.recoveryButtonSize,
                                            className: ss,
                                            classNames: { content: as },
                                            disabled: m !== Vt,
                                            onClick: () => {
                                                m === Vt && (u && (null == f || f.onClick()), a.action(Ot));
                                            },
                                            children: i.jsx(xs, { actionType: Ot }),
                                        }),
                                        i.jsxs(L, {
                                            theme: L.themes.secondary,
                                            size: y.recoveryButtonSize,
                                            classNames: { content: as },
                                            onClick: () => a.action(Dt),
                                            children: [
                                                i.jsx('div', { className: ds }),
                                                t.readOrEmpty('menu.research.labels.button.showInHangar'),
                                            ],
                                        }),
                                    ],
                                }),
                                s.combatXp.get() >= 0 && i.jsx(Jt, { className: n(us, ps, _s) }),
                            ],
                        });
                    case Rt:
                    case Ot:
                    case Bt:
                    case Lt:
                    case $t:
                        return i.jsxs(i.Fragment, {
                            children: [
                                c !== Bt && i.jsx(Ft, { className: Qt }),
                                i.jsxs('div', {
                                    className: es,
                                    children: [
                                        i.jsx(L, {
                                            ...(u && f),
                                            theme: L.themes.primary,
                                            size: y.recoveryButtonSize,
                                            className: ss,
                                            classNames: { content: as },
                                            disabled: m !== Vt,
                                            onClick: () => {
                                                m === Vt && (u && (null == f || f.onClick()), a.action(c));
                                            },
                                            children: i.jsx(xs, { actionType: c }),
                                        }),
                                        p > 0 &&
                                            i.jsx(L, {
                                                ...N,
                                                theme: L.themes.secondary,
                                                size: y.recoveryButtonSize,
                                                className: ss,
                                                onClick: () => {
                                                    (N.onClick(), a.blueprintAction());
                                                },
                                                classNames: { content: n(as, S && rs) },
                                                children: i.jsx(gs, { blueprintFragments: _, blueprintTotal: p }),
                                            }),
                                        c === Lt &&
                                            !h &&
                                            i.jsx('div', {
                                                className: os,
                                                children: i.jsx(C, {
                                                    path: 'vehicle_hub.researchPurchase.recover',
                                                    params: { date: g },
                                                }),
                                            }),
                                        v && i.jsx(Gt, {}),
                                    ],
                                }),
                                s.combatXp.get() >= 0 && i.jsx(Jt, { className: n(us, ps) }),
                            ],
                        });
                    default:
                        console.error(`RestorePurchaseControl error: got unhandled action ${c}`);
                }
            })(),
        });
    }),
    Ns = {
        base: 'VehicleHubTab_41897c7c',
        tab: 'VehicleHubTab_tab_d12e2d0b',
        content: 'VehicleHubTab_content_562b0c6',
        bubble: 'VehicleHubTab_bubble_90a22cab',
    };
function js({ id: e, label: t, counter: s, className: a }) {
    const r = x.resolve('intl'),
        o = j({ size: G.small }, { large: { size: G.medium } });
    return i.jsxs('div', {
        className: n(Ns.base, a),
        children: [
            i.jsx(z.Tab, {
                tabId: e,
                classNames: { base: Ns.tab, content: Ns.content },
                children: i.jsx(F, { text: r.toUpperCase(t) }),
            }),
            i.jsx(H.Root, {
                hidden: 0 === s,
                children: i.jsx(H.Icon, { size: o.size, type: W.bubble, className: Ns.bubble }),
            }),
        ],
    });
}
const ys = 'TabsNavigation_tabsNavigation_f7e0f60f',
    Cs = 'TabsNavigation_switcher_bdc43d73',
    ks = 'TabsNavigation_outerBorder_66e2c4c4',
    ws = 'TabsNavigation_mainBorder_1ed0bb59',
    Is = 'TabsNavigation_content_7ea34759';
function Ss({ tabsList: e, activeTab: t, className: s, ...a }) {
    return i.jsx('div', {
        className: n(ys, s),
        children: i.jsx(z, {
            ...a,
            active: t,
            children: i.jsx(z.Switcher, {
                classNames: { base: Cs, outerBorder: ks, mainBorder: ws, content: Is },
                children: e.map((e) => i.jsx(js, { id: e.id, label: e.label, counter: e.counter }, e.id)),
            }),
        }),
    });
}
const Ts = 'enabled',
    Ms = 'VehicleInfo_47f4ed8c',
    Ps = 'VehicleInfo_flag_5ec44a26',
    Es = 'VehicleInfo_level_e071b40b',
    As = 'VehicleInfo_type_3740e975',
    Rs = 'VehicleInfo_name_a6f9c3ff',
    Os = 'VehicleInfo_name__premium_ac75a868',
    Bs = 'VehicleInfo_additionalInfo_96947fa6',
    Ls = 'VehicleInfo_role_dbc46b2d',
    Ds = 'VehicleInfo_roleIcon_918ece55',
    Vs = 'VehicleInfo_roleLabel_32656129',
    $s = 'VehicleInfo_comparison_606a8b9b',
    zs = 'VehicleInfo_rent_1732f1f0',
    Fs = 'VehicleInfo_rentLabel_33c8aaa',
    Hs = 'VehicleInfo_rentCounter_771ad73b',
    Ws = 'VehicleInfo_rentIcon_1d418163',
    Gs = { [U.lightTank]: 'LT', [U.mediumTank]: 'MT', [U.heavyTank]: 'HT', [U.SPG]: 'SPG', [U['AT-SPG']]: 'ATSPG' },
    Us = 'x60x45',
    Xs = 'x40x30',
    Ks = [Y, J.spg];
const Zs = {
        [Q.RENTAL_IS_OVER]: 'rentalIsOver',
        [Q.WOT_PLUS_EXCLUSIVE_VEHICLE_DISABLED]: 'subscriptionSuspended',
        [Q.SUBSCRIPTION_SUSPENDED]: 'subscriptionSuspended',
    },
    Ys = a(function (e) {
        const t = x.resolve('strings'),
            { model: s } = jt(),
            a = At(),
            o = s.type.get(),
            c = s.vehicleId.get(),
            l = X(s.role.get()),
            d = (function (e, t) {
                if (void 0 === e || t === Y) return;
                const s = Gs[e];
                return e === U.SPG ? `role_${s}` : `role_${s}_${t}`;
            })(o, l),
            h = a.model.status.get(),
            m = s.state.get(),
            u = s.rentLeftTime.get(),
            _ = s.rentLeftWins.get(),
            p = s.rentLeftBattles.get(),
            v = s.nation.get(),
            b = s.longName.get(),
            g = s.shortName.get(),
            f = b.length > 36 ? g : b,
            N = K(
                'vehicleRoles',
                r.useMemo(() => [c], [c]),
            ),
            y = R(
                (() => {
                    switch (h) {
                        case Ts:
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
            k = j(
                { roleSize: Z.Role.sizes.x16x16, flagSize: Xs },
                { medium: { roleSize: Z.Role.sizes.x24x24, flagSize: Us } },
            ),
            w = M('vehicle_hub.comparison', 'vehicle_hub.comparison_large');
        return i.jsxs('div', {
            className: n(Ms, e.className),
            children: [
                i.jsxs(Z, {
                    children: [
                        i.jsx(E, { path: `flags.${k.flagSize}.${v}`, className: Ps }),
                        i.jsx(Z.Level, { value: s.level.get(), className: Es }),
                        o &&
                            i.jsx(Z.Type, {
                                type: o,
                                size: Z.Type.sizes.x64x64,
                                premium: s.elite.get(),
                                className: As,
                            }),
                        i.jsx(Z.Name, { className: n(Rs, s.premium.get() && Os), children: f }),
                        i.jsx(L, {
                            ...y,
                            theme: L.themes.secondary,
                            size: L.sizes.extraSmall,
                            onClick: a.controls.addToComparison,
                            className: $s,
                            autoAlignContent: !1,
                            disabled: h !== Ts,
                            children: i.jsx(E, { path: w, width: '20rem', height: '20rem' }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: Bs,
                    children: [
                        l !== Y &&
                            i.jsxs('div', {
                                ...N,
                                className: Ls,
                                children: [
                                    !Ks.includes(l) &&
                                        i.jsx(Z.Role, { size: k.roleSize, roleKey: l, classNames: { base: Ds } }),
                                    d &&
                                        i.jsx('div', {
                                            className: Vs,
                                            children: i.jsx(C, {
                                                upgradeLegacy: !0,
                                                path: `menu.roleExp.roleName.${d}`,
                                                params: { groupName: t.readOrEmpty(`menu.roleExp.roleGroupName.${d}`) },
                                            }),
                                        }),
                                ],
                            }),
                        i.jsx(q, {
                            className: zs,
                            children: (() => {
                                switch (m) {
                                    case Q.RENTAL_IS_OVER:
                                    case Q.WOT_PLUS_EXCLUSIVE_VEHICLE_DISABLED:
                                    case Q.SUBSCRIPTION_SUSPENDED:
                                        return i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx(ee, { className: Ws }),
                                                i.jsx('div', {
                                                    className: Fs,
                                                    children: t.readOrEmpty(`vehicle_hub.vehicleState.${Zs[m]}`),
                                                }),
                                            ],
                                        });
                                    default:
                                        if (s.fromWotPlus.get() || (u <= 0 && p <= 0 && _ <= 0)) return;
                                        return i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx('div', {
                                                    className: Fs,
                                                    children: t.readOrEmpty('subscription.rentButton.label'),
                                                }),
                                                i.jsx(q.ShortCounter, {
                                                    classNames: { text: Hs, icon: Ws },
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
    Js = 'overview',
    qs = x.resolve('strings'),
    [Qs, ea] = u()(
        ({ observableModel: e }) => ({
            ...{
                root: e.object(),
                researchPurchase: e.object('researchPurchaseModel'),
                menuItems: e.transform(
                    (e) =>
                        g(e, (e) => ({
                            id: e.tabName,
                            label: qs.readOrEmpty(`vehicle_hub.tabs.${e.tabName}`),
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
            onResize: e.createCallback((e) => e, 'onResize'),
        }),
    ),
    ta = {
        root: '/vehicleHub',
        overview: '/vehicleHub/overview',
        modules: '/vehicleHub/modules',
        vehSkillTree: '/vehicleHub/vehSkillTree',
        stats: '/vehicleHub/stats',
        armor: '/vehicleHub/armor',
    };
function sa({ selectedKey: e, render: t, className: s }) {
    const a = r.useRef(null),
        [n, d] = o(() => ({ height: 0, config: { tension: 210, friction: 26 } }));
    (r.useLayoutEffect(() => {
        const e = a.current;
        if (!e) return;
        const t = e.offsetHeight || 0;
        d.start({ height: t, immediate: !1 });
    }, [e, d]),
        te(() => {
            const e = a.current;
            if (!e) return;
            const t = e.offsetHeight || 0;
            d.start({ height: t, immediate: !0 });
        }, [d]));
    const h = c(e, {
        from: { opacity: 0, y: 8 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: -6 },
        config: { tension: 210, friction: 26 },
    });
    return i.jsx(l.div, {
        className: s,
        style: { overflow: 'hidden', height: n.height.to((e) => `${Math.max(0, Math.round(e))}px`) },
        children: h((e, s) =>
            i.jsx(l.div, {
                style: { opacity: e.opacity, transform: e.y.to((e) => `translateY(${e}rem)`) },
                children: i.jsx('div', { ref: a, children: t(s) }),
            }),
        ),
    });
}
const aa = x.resolve('views');
function ra(e) {
    return se({
        contentId: aa.read((e) => e.mono.vehicle_hub.tooltips.minor_short_tooltip('resId')),
        args: { tooltipType: e },
    });
}
const [ia, na] = u()(
        ({ observableModel: e }) => {
            const t = e.primitives(['currentGun', 'currentShell', 'shells'], 'attacker'),
                s = {
                    ...e.primitives([
                        'mainGradient',
                        'spacedGradient',
                        'penetrationGradient',
                        'dragModuleMode',
                        'selectedMode',
                    ]),
                    root: e.object(),
                    mainArmor: e.arrayClone('mainArmor'),
                    spacedArmor: e.arrayClone('spacedArmor'),
                    penetrationChance: e.arrayClone('penetrationChance'),
                    noDamage: e.arrayClone('noDamage'),
                    attacker: {
                        model: e.object('attacker.vehicle'),
                        guns: e.arrayClone('attacker.guns'),
                        shells: _.shallow(() => t.shells.get().split(',')),
                        currentGun: t.currentGun,
                        currentShell: t.currentShell,
                    },
                    vehicle: {
                        model: e.object('vehicle'),
                        vehicleTurrets: e.arrayClone('vehicle.turrets'),
                        vehicleGuns: e.arrayClone('vehicle.guns'),
                        hoveredTurret: d.box(0),
                        hoveredGun: d.box(0),
                    },
                },
                a = _.model((e) => g(s.noDamage.get(), (t, s) => ({ ...t, tooltipProps: e[s] })));
            return { ...s, computes: { noDamageWithTooltips: a } };
        },
        ({ model: e, externalModel: t }) => ({
            dragModule: t.createCallback((e) => e, 'onDragModule'),
            onDragStateChanged: t.createCallback((e) => ({ state: e }), 'onDragStateChanged'),
            modeChanged: t.createCallback((e) => ({ id: e }), 'onModeChanged'),
            vehicle: {
                turretItemClick: t.createCallback((e) => ({ compactDescr: e }), 'onTurretItemClick'),
                gunItemClick: t.createCallback((e) => ({ compactDescr: e }), 'onGunItemClick'),
                setHoveredTurret: h((t) => e.vehicle.hoveredTurret.set(t)),
                setHoveredGun: h((t) => e.vehicle.hoveredGun.set(t)),
            },
            attacker: {
                click: t.createCallbackNoArgs('onAttackerClicked'),
                gunItemClick: t.createCallback((e) => ({ compactDescr: e }), 'onAttackerGunItemClick'),
                shellItemClick: t.createCallback((e) => ({ index: e }), 'onAttackerShellItemClick'),
            },
        }),
    ),
    [oa, ca, la] = u()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled', 'isInfiniteAmmo']),
    })),
    da = {
        base: 'ProBoost_7490b440',
        arrow: 'ProBoost_arrow_346b5e61',
        glow: 'ProBoost_glow_280ac9aa',
        base__double: 'ProBoost_base__double_b53eea3f',
        base__active: 'ProBoost_base__active_7b71aa2e',
        corner: 'ProBoost_corner_9f13801e',
        base__activating: 'ProBoost_base__activating_7b71aa2e',
        triangle: 'ProBoost_triangle_ae0f2fba',
        triangle__1: 'ProBoost_triangle__1_1cb04326',
        triangle__2: 'ProBoost_triangle__2_39aff7fd',
        triangle__3: 'ProBoost_triangle__3_e738f7f2',
        base__deactivating: 'ProBoost_base__deactivating_7b71aa2e',
    },
    ha = {
        inactive: da.base__inactive,
        activating: da.base__activating,
        active: da.base__active,
        deactivating: da.base__deactivating,
    };
function ma({ className: e, doubleRow: t, state: s = 'inactive', isCornerHidden: a = !1 }) {
    return 'inactive' === s
        ? null
        : i.jsxs('div', {
              className: n(da.base, s && ha[s], t && da.base__double, e),
              children: [
                  i.jsx('div', { className: da.glow }),
                  !a && i.jsx('div', { className: da.corner }),
                  i.jsx('div', { className: da.arrow }),
                  [da.triangle__1, da.triangle__2, da.triangle__3].map((e) =>
                      i.jsx('div', { className: n(da.triangle, e) }, e),
                  ),
              ],
          });
}
const ua = 'Background_wotPlus_3cf6035a',
    _a = 'Background_crystal_6112fa42',
    pa = 'Background_bpBonus_86685469',
    va = 'Background_flag_57525fcb',
    ba = 'Background_flag__active_de322c1b',
    xa = 'Background_crystal__limit_61072361';
function ga({ vehicle: e, selected: t, active: s, className: a }) {
    return i.jsx(E, {
        className: n(va, t || (s && ba), a),
        path: `hangar.carousel.cards.flags.x400x300.${ne(e.nationId)}`,
        position: 'top left',
    });
}
(ae('Favorite', 'Background_favorite_d98f92cc', {
    variants: { active: { true: 'Background_favorite__active_7f14a6c7' } },
}),
    a(function ({ vehicle: e, statistic: t, validBP: s, doubleRow: a, classNames: o }) {
        var c;
        const l = (null == (c = r.useContext(la.Context)) ? void 0 : c.model.isCrystalEarnEnabled.get()) ?? !0,
            d =
                (re((null == t ? void 0 : t.numberOfCrystalEarned) ?? [], 1) ?? 0) <=
                (re((null == t ? void 0 : t.numberOfCrystalEarned) ?? [], 0) ?? 0),
            h = null == t ? void 0 : t.proBoostActive,
            m = l && e.crystalEarning,
            u = ie(h),
            _ = r.useMemo(() => (h ? (!1 === u ? 'activating' : 'active') : u ? 'deactivating' : 'inactive'), [h, u]);
        return i.jsxs(i.Fragment, {
            children: [
                (null == t ? void 0 : t.fromWotPlus) &&
                    i.jsx('div', { className: n(ua, null == o ? void 0 : o.wotPlus) }),
                i.jsx(ma, {
                    state: _,
                    className: null == o ? void 0 : o.proBoostIcon,
                    doubleRow: a,
                    isCornerHidden: m,
                }),
                m && i.jsx('div', { className: n(_a, d && xa, null == o ? void 0 : o.crystal) }),
                (null == t ? void 0 : t.bpSpecial) &&
                    s &&
                    i.jsx('div', { className: n(pa, null == o ? void 0 : o.bpBonus) }),
            ],
        });
    }));
const fa = {
    base: 'Content_7ccb81a0',
    disabledOverlay: 'Content_disabledOverlay_a8908196',
    base__disabled: 'Content_base__disabled_da09528a',
    base__selected: 'Content_base__selected_da09528a',
    base__empty: 'Content_base__empty_da09528a',
};
function Na({ children: e, selected: t, disabled: s, empty: a }) {
    return i.jsxs('div', {
        'data-name': 'Content',
        className: n(fa.base, a && fa.base__empty, t && fa.base__selected, s && fa.base__disabled),
        children: [e, s && i.jsx('div', { className: fa.disabledOverlay })],
    });
}
const ja = 'Slot_977dd8f1',
    ya = 'Slot_base__wrapper_ae3081b5',
    Ca = 'Slot_base__disabled_334cc10f',
    ka = 'Slot_base__empty_d386066c',
    wa = 'Slot_content_1a27c8cf',
    Ia = 'Slot_base__active_71f19f5c',
    Sa = 'Slot_base__selected_71f19f5c',
    Ta = 'Slot_selected_6e9f21df',
    Ma = 'Slot_selected__border_e2a17304';
function Pa({ children: e, selected: t = !1, disabled: s = !1, active: a, className: r, ...o }) {
    const c = s || void 0 === o.onClick;
    return i.jsx('div', {
        ...o,
        'data-name': 'Slot',
        className: n(ja, a && Ia, t && Sa, s && Ca, c && ka, ya, r),
        children: i.jsxs('div', {
            className: wa,
            children: [
                i.jsx(Na, { selected: t, disabled: s, empty: c, children: e }),
                t && i.jsx('div', { className: n(Ta, Ma) }),
                i.jsx('div', { className: Ta }),
            ],
        }),
    });
}
const Ea = 'AttackerButton_back_f3468fb6',
    Aa = 'AttackerButton_d0427a70',
    Ra = 'AttackerButton_info_862cb902',
    Oa = 'AttackerButton_details_79ecbf83',
    Ba = 'AttackerButton_text_f887a965',
    La = 'AttackerButton_text__premium_22deecb8',
    Da = 'AttackerButton_text__level_f95a8a25',
    Va = 'AttackerButton_vehicleImage_4e081b7d',
    $a = 'AttackerButton_flag_ba7772a9',
    za = a(function (e) {
        const { model: t, controls: s } = na(),
            a = t.attacker.model.get(),
            r = oe(),
            o = x.resolve('strings'),
            c = R({
                header: o.readOrEmpty('armor_inspector.attackerTooltip.header'),
                body: o.readOrEmpty('armor_inspector.attackerTooltip.body'),
            });
        return i.jsx('div', {
            className: n(Aa, e.className),
            children: i.jsxs(Pa, {
                onClick: function (e) {
                    (c.onClick(), r.play('click', { target: 'vehicle-card', original: e }), s.attacker.click());
                },
                onMouseEnter: function (e) {
                    (c.onMouseEnter(e), r.play('mouse-enter', { target: 'vehicle-card', original: e }));
                },
                onMouseLeave: c.onMouseLeave,
                children: [
                    i.jsxs(Z, {
                        className: Ra,
                        children: [
                            i.jsxs('div', {
                                className: Oa,
                                children: [
                                    i.jsx(Z.Level, { className: n(Ba, Da), value: a.tier }),
                                    v(a.type) &&
                                        i.jsx(Z.Type, {
                                            type: a.type,
                                            premium: a.isPremium,
                                            size: Z.Type.sizes.x24x24,
                                        }),
                                ],
                            }),
                            i.jsx('div', { className: n(Ba, a.isPremium && La), children: i.jsx(F, { text: a.name }) }),
                        ],
                    }),
                    i.jsx(ce, { className: Va, name: a.techName }),
                    i.jsx(ga, { vehicle: { nationId: le.indexOf(a.nation) }, className: $a }),
                    i.jsx('div', { className: Ea }),
                ],
            }),
        });
    }),
    Fa = 'Shell_background_fc3cb1f9',
    Ha = 'Shell_hover_68f02b96',
    Wa = 'Shell_7ff268b0',
    Ga = 'Shell_base__installed_7aaeeab0',
    Ua = 'Shell_check_3f0798fd',
    Xa = 'Shell_icon_a7dbf5ed',
    Ka = x.resolve('images'),
    Za = x.resolve('sounds'),
    Ya = r.memo(function ({ type: e, index: t, installed: s, className: a, onItemClick: o }) {
        const c = P({ args: r.useMemo(() => ({ shellIndex: t, tooltipId: 'armorInspectorShell' }), [t]) });
        return i.jsxs('div', {
            className: n(Wa, a, s && Ga),
            onClick: function () {
                (c.onClick(), Za.play('play'), !s && o(t));
            },
            onMouseEnter: function (e) {
                (Za.play('highlight'), c.onMouseEnter(e));
            },
            onMouseLeave: c.onMouseLeave,
            children: [
                i.jsx('div', { className: Fa }),
                i.jsx('div', {
                    className: Xa,
                    style: { backgroundImage: `url(${Ka.readOrEmpty(`shell.small.${e}`)})` },
                }),
                s && i.jsx('div', { className: Ua }),
                i.jsx('div', { className: Ha }),
            ],
        });
    }),
    Ja = 'VehicleModule_background_998eb8e8',
    qa = 'VehicleModule_highlight_15fcd2d7',
    Qa = 'VehicleModule_hover_fff9fc30',
    er = 'VehicleModule_95b5da3',
    tr = 'VehicleModule_base__installed_3e6eae19',
    sr = 'VehicleModule_check_2b8f10d8',
    ar = 'VehicleModule_icon_4a44e387',
    rr = 'VehicleModule_level_7daa91b3',
    ir = 'VehicleModule_mechanics_206965c5',
    nr = 'VehicleModule_mechanic_8c3eaf17',
    or = x.resolve('images'),
    cr = x.resolve('sounds'),
    lr = r.memo(function ({
        data: e,
        installed: t,
        onItemClick: s,
        highlight: a,
        className: o,
        isAttacker: c,
        onHovered: l,
    }) {
        const d = P({
            args: r.useMemo(
                () => ({ compactDescr: e.compactDescr, tooltipId: 'contextVehicleModule', isAttacker: c }),
                [e.compactDescr, c],
            ),
        });
        return i.jsxs('div', {
            className: n(er, o, t && tr),
            onClick: function () {
                (d.onClick(), cr.play('play'), !t && s(e.compactDescr));
            },
            onMouseEnter: function (t) {
                (d.onMouseEnter(t), cr.play('highlight'), l && l(e.compactDescr));
            },
            onMouseLeave: function () {
                (d.onMouseLeave(), l && l(0));
            },
            children: [
                i.jsx('div', { className: Ja }),
                i.jsx('div', {
                    className: ar,
                    style: { backgroundImage: `url(${or.readOrEmpty(`modules.${e.image}`)})` },
                }),
                t && i.jsx('div', { className: sr }),
                a && i.jsx('div', { className: qa }),
                i.jsx('div', { className: Qa }),
                i.jsx(Z.Level, { className: rr, value: e.level }),
                i.jsx('div', {
                    className: ir,
                    children: g(e.mechanics, (e) =>
                        i.jsx(
                            'div',
                            {
                                className: nr,
                                style: {
                                    backgroundImage: `url(${or.readOrEmpty(`vehicle_hub.mechanics.x20x20.${e}`)})`,
                                },
                            },
                            e,
                        ),
                    ),
                }),
            ],
        });
    }),
    dr = 'AttackerConfiguration_c298d361',
    hr = 'AttackerConfiguration_title_769ee3f8',
    mr = 'AttackerConfiguration_attackerButton_709cc1e9',
    ur = 'AttackerConfiguration_row_27dd5b68',
    _r = 'AttackerConfiguration_item_3eff6e9f',
    pr = 'AttackerConfiguration_base__fiveGuns_d70d456b',
    vr = 'AttackerConfiguration_item__disappearing_be1130fa',
    br = a(function ({ shells: e, vehicleCD: t, currentGun: s }) {
        const { model: a, controls: o } = na(),
            c = a.attacker.currentShell.get(),
            l = r.useRef(c),
            d = r.useRef(s),
            h = r.useRef(t),
            m = d.current !== s || h.current !== t;
        return (
            m || (l.current = c),
            i.jsx(
                'div',
                {
                    className: ur,
                    children: g(e, (e, a) =>
                        i.jsx(
                            Ya,
                            {
                                type: e,
                                index: a,
                                className: n(_r, m && vr),
                                onItemClick: o.attacker.shellItemClick,
                                installed: l.current === a,
                            },
                            `${t}_${s}_${a}`,
                        ),
                    ),
                },
                `${t}_${s}_shells`,
            )
        );
    }),
    xr = a(function () {
        const e = x.resolve('strings'),
            { model: t, controls: s } = na(),
            a = t.attacker.currentGun.get(),
            o = t.attacker.model.get(),
            c = t.attacker.guns.get(),
            l = `${o.vehicleCD}_${a}`,
            d = r.useRef(new Map());
        d.current.has(l) || d.current.set(l, [...t.attacker.shells()]);
        const h = ra(nt.ATTACKING_CONFIGURATION);
        return i.jsxs('div', {
            className: n(dr, 5 === c.length && pr),
            children: [
                i.jsx('div', { ...h, className: hr, children: e.readOrEmpty('armor_inspector.attackerTitle') }),
                i.jsx(za, { className: mr }),
                i.jsx(
                    'div',
                    {
                        className: ur,
                        children: g(c, (e) =>
                            i.jsx(
                                lr,
                                {
                                    data: e,
                                    className: _r,
                                    onItemClick: s.attacker.gunItemClick,
                                    installed: a === e.compactDescr,
                                    isAttacker: !0,
                                },
                                `${o.vehicleCD}_${e.compactDescr}_gun`,
                            ),
                        ),
                    },
                    `${o.vehicleCD}_guns`,
                ),
                i.jsx(sa, {
                    selectedKey: l,
                    render: (e) => i.jsx(br, { shells: d.current.get(e), vehicleCD: o.vehicleCD, currentGun: a }),
                }),
            ],
        });
    }),
    gr = 'Dropdown_itemBg_84c73399',
    fr = 'Dropdown_a0f4fd41',
    Nr = 'Dropdown_trigger_b4489099',
    jr = 'Dropdown_triggerBase_ada4928c',
    yr = 'Dropdown_triggerContent_1541ceab',
    Cr = 'Dropdown_triggerLabel_2cca2ece',
    kr = 'Dropdown_arrow_9e61cc83',
    wr = 'Dropdown_arrow__opened_c6f1e212',
    Ir = 'Dropdown_popover_9b57a2dd',
    Sr = 'Dropdown_list_989491cc',
    Tr = 'Dropdown_item_e54f38ae',
    Mr = 'Dropdown_item__selected_a91993a3',
    Pr = a(function ({ items: e, selectedId: t, onChange: s, className: a }) {
        const { breakpoint: r } = de(),
            o = r.weight >= he.large.weight;
        return i.jsx('div', {
            className: n(fr, a),
            children: i.jsxs(me, {
                children: [
                    i.jsx(me.Portal, {
                        position: 'bottom',
                        pivot: 0,
                        lazy: !0,
                        children: i.jsx(Rr, {
                            children: i.jsx('div', {
                                className: Sr,
                                children: e.map((e) =>
                                    i.jsx(Er, { option: e, selected: e.id === t, onSelect: s }, e.id),
                                ),
                            }),
                        }),
                    }),
                    i.jsx(me.Trigger, {
                        children: (s) => {
                            var a;
                            return i.jsxs(L, {
                                theme: 'secondary',
                                size: o ? L.sizes.large : L.sizes.small,
                                className: Nr,
                                classNames: { content: yr, base: jr },
                                onClick: s.onClick,
                                'data-popover-trigger-id': s['data-popover-trigger-id'],
                                children: [
                                    i.jsx('span', {
                                        className: Cr,
                                        children: null == (a = e.find((e) => e.id === t)) ? void 0 : a.label,
                                    }),
                                    i.jsx(Ar, {}),
                                ],
                            });
                        },
                    }),
                ],
            }),
        });
    }),
    Er = a(function ({ option: e, selected: t, onSelect: s }) {
        const a = me.use();
        return i.jsxs('div', {
            className: n(Tr, t && Mr),
            onClick: function () {
                (s(e.id), a.close());
            },
            children: [i.jsx('div', { className: gr }), i.jsx('span', { children: e.label })],
        });
    });
function Ar(e) {
    const t = me.use();
    return i.jsx('div', { className: n(kr, t.opened && wr, e.className) });
}
function Rr({ children: e }) {
    const t = me.use(),
        s = t.trigger.bounding.get(),
        [a, r] = m.useState(null == s ? void 0 : s.width),
        n = m.useRef(null);
    (m.useLayoutEffect(() => {
        t.opened &&
            ((n.current = document.querySelector(`[data-popover-trigger-id="${t.id}"]`)),
            n.current && r(n.current.offsetWidth));
    }, [t.id, t.opened]),
        ue(() => {
            const e = n.current;
            e && t.opened && r(e.offsetWidth);
        }, [t.opened]));
    const o = a ?? (null == s ? void 0 : s.width);
    return i.jsx(_e, {
        children: i.jsx(me.Display, { className: Ir, style: { width: o ? `${o}px` : void 0 }, children: e }),
    });
}
const Or = 'ArmorMeterValue_armor_c708c6a5',
    Br = 'ArmorMeterValue_overlay_67fa364',
    Lr = 'ArmorMeterValue_disabled_b9c2da32',
    Dr = 'ArmorMeterValue_e0f8b036',
    Vr = 'ArmorMeterValue_values_edf27e48',
    $r = r.memo(function ({ leftValue: e, rightValue: t, color: s, overlay: a, isActive: r, tooltipProps: n }) {
        return i.jsxs('div', {
            className: Dr,
            style: { backgroundColor: s },
            ...n,
            children: [
                !r && i.jsx('div', { className: Lr }),
                i.jsx('div', { className: Or }),
                a && i.jsx('div', { className: Br, style: { backgroundImage: `url(${a})` } }),
                i.jsxs('div', {
                    className: Vr,
                    children: [i.jsx('div', { children: e }), i.jsx('div', { children: t })],
                }),
            ],
        });
    }),
    zr = 'ArmorMeter_header_878d962e',
    Fr = 'ArmorMeter_title_c2ee230',
    Hr = 'ArmorMeter_title__units_d774d0df',
    Wr = 'ArmorMeter_meter_78fb8137';
function Gr({ title: e, units: t, className: s, armorValues: a, gradient: r, isLastSegmentStatic: o = !0 }) {
    const c = o ? (100 * (a.length - 1)) / a.length : 100;
    return i.jsxs('div', {
        className: s,
        children: [
            e &&
                i.jsxs('div', {
                    className: zr,
                    children: [
                        i.jsx(F, { text: e, className: Fr }),
                        t && i.jsx('div', { className: n(Fr, Hr), children: t }),
                    ],
                }),
            i.jsx('div', {
                className: Wr,
                style: r ? { background: `url(${r}) left center / ${c}% 100% no-repeat` } : void 0,
                children: a.map((e, t) => i.jsx($r, { ...e }, t)),
            }),
        ],
    });
}
const Ur = 'NominalArmor_5be295bc',
    Xr = 'NominalArmor_armor_ab870a58',
    Kr = 'NominalArmor_armor__spaced_a4926c3',
    Zr = x.resolve('strings'),
    Yr = a(function () {
        const { model: e } = na(),
            t = ra(nt.MAIN_ARMOR),
            s = ra(nt.SPACED_ARMOR);
        return i.jsxs('div', {
            className: Ur,
            children: [
                i.jsx('div', {
                    ...t,
                    children: i.jsx(Gr, {
                        className: Xr,
                        title: Zr.readOrEmpty('armor_inspector.armorValues.title.main'),
                        units: Zr.readOrEmpty('armor_inspector.armorValues.title.values'),
                        armorValues: e.mainArmor.get(),
                        gradient: e.mainGradient.get(),
                    }),
                }),
                i.jsx('div', {
                    ...s,
                    children: i.jsx(Gr, {
                        className: n(Xr, Kr),
                        title: Zr.readOrEmpty('armor_inspector.armorValues.title.spaced'),
                        units: Zr.readOrEmpty('armor_inspector.armorValues.title.values'),
                        armorValues: e.spacedArmor.get(),
                        gradient: e.spacedGradient.get(),
                    }),
                }),
            ],
        });
    }),
    Jr = 'PenetrationChance_45438766',
    qr = 'PenetrationChance_armor_af76e8b0',
    Qr = 'PenetrationChance_armor__noDamage_7d565334',
    ei = x.resolve('strings'),
    ti = a(function () {
        const { model: e } = na(),
            t = ra(nt.DEALING_DAMAGE_CHANCE),
            s = [ra(nt.RICOCHET), ra(nt.NO_DAMAGE)];
        return i.jsxs('div', {
            className: Jr,
            children: [
                i.jsx('div', {
                    ...t,
                    children: i.jsx(Gr, {
                        className: qr,
                        title: ei.readOrEmpty('armor_inspector.armorValues.title.penetration'),
                        units: ei.readOrEmpty('armor_inspector.armorValues.title.percent'),
                        armorValues: e.penetrationChance.get(),
                        gradient: e.penetrationGradient.get(),
                        isLastSegmentStatic: !1,
                    }),
                }),
                i.jsx(Gr, {
                    className: n(qr, Qr),
                    title: ei.readOrEmpty('armor_inspector.armorValues.title.other'),
                    armorValues: e.computes.noDamageWithTooltips(s),
                }),
            ],
        });
    }),
    si = 'Separator_1dc887a0',
    ai = 'Separator_noise_ee3f6dd1';
function ri({ className: e }) {
    return i.jsx('div', { className: n(si, e), children: i.jsx('div', { className: n(ai) }) });
}
const ii = 'VehicleConfiguration_6403517c',
    ni = 'VehicleConfiguration_modulesTitle_3d4a7e5b',
    oi = 'VehicleConfiguration_configuration_a3eac7e9',
    ci = 'VehicleConfiguration_row_1fad8087',
    li = 'VehicleConfiguration_item_3d2220d2',
    di = 'VehicleConfiguration_base__fiveGuns_1dc0c44',
    hi = r.memo(function ({
        modules: e,
        currentModule: t,
        hoveredDependent: s,
        dependentModules: a,
        onItemClick: r,
        onHovered: n,
    }) {
        let o = 0;
        if (s) {
            const e = pe(a, (e) => e.compactDescr === s);
            e && !ve(e.dependencies, t) && (o = be(e.dependencies) || 0);
        }
        return i.jsx('div', {
            className: ci,
            children: g(e, (e) =>
                i.jsx(
                    lr,
                    {
                        data: e,
                        onItemClick: r,
                        installed: t === e.compactDescr,
                        highlight: o === e.compactDescr,
                        className: li,
                        onHovered: n,
                    },
                    e.compactDescr,
                ),
            ),
        });
    }),
    mi = a(function () {
        const e = x.resolve('strings'),
            { model: t, controls: s } = na(),
            a = t.vehicle.model.get(),
            r = t.vehicle.vehicleTurrets.get(),
            o = t.vehicle.vehicleGuns.get();
        return i.jsxs('div', {
            className: n(ii, 5 === o.length && di),
            children: [
                i.jsx('div', { className: ni, children: e.readOrEmpty('armor_inspector.modules.title') }),
                i.jsx('div', { className: oi, children: a.configurationTitle }),
                r.length > 0 &&
                    i.jsx(hi, {
                        modules: r,
                        currentModule: a.currentTurret,
                        hoveredDependent: t.vehicle.hoveredGun.get(),
                        dependentModules: o,
                        onHovered: s.vehicle.setHoveredTurret,
                        onItemClick: s.vehicle.turretItemClick,
                    }),
                i.jsx('div', {
                    className: ci,
                    children: i.jsx(hi, {
                        modules: o,
                        currentModule: a.currentGun,
                        hoveredDependent: t.vehicle.hoveredTurret.get(),
                        dependentModules: r,
                        onHovered: s.vehicle.setHoveredGun,
                        onItemClick: s.vehicle.gunItemClick,
                    }),
                }),
            ],
        });
    }),
    ui = {
        base: 'Armor_508e908c',
        header: 'Armor_header_3d9358d9',
        icon: 'Armor_icon_5182a32c',
        dropdown: 'Armor_dropdown_5c6128da',
        content: 'Armor_content_f9da42bf',
        sceneWrapper: 'Armor_sceneWrapper_c36410b4',
        tint: 'Armor_tint_40fb2864',
        tint__right: 'Armor_tint__right_3baf8f03',
    },
    _i = x.resolve('strings'),
    pi = x.resolve('views'),
    vi = a(function () {
        const { controls: e } = ea(),
            { model: t, controls: s } = na(),
            [a, o] = r.useState(!1),
            c = se({ contentId: pi.read((e) => e.mono.vehicle_hub.tooltips.minor_tooltip('resId')) }),
            l = Object.values(ot).map((e) => ({ id: e, label: _i.readOrEmpty(`armor_inspector.menu.${e}`) }));
        function d(e) {
            switch (e) {
                case ot.NOMINAL:
                    return i.jsx(Yr, {});
                case ot.PENETRATION:
                    return i.jsx(ti, {});
                default:
                    return null;
            }
        }
        const h = t.selectedMode.get(),
            m = d(h);
        return i.jsxs('div', {
            className: ui.base,
            children: [
                i.jsx(xe, {
                    className: ui.sceneWrapper,
                    moveSpace: function (t) {
                        a ? s.dragModule(t) : e.sceneWrapper.onMoveSpace(t);
                    },
                    onDragStateChange: function (e) {
                        ((e && t.dragModuleMode.get()) || (!e && a)) && (o(e), s.onDragStateChanged(e));
                    },
                    onMouseOver3dScene: e.sceneWrapper.onMouseOver3dScene,
                }),
                i.jsx('div', { className: ui.tint }),
                i.jsx('div', { className: n(ui.tint, ui.tint__right) }),
                i.jsx(mi, {}),
                i.jsxs('div', {
                    className: ui.content,
                    children: [
                        i.jsxs('div', {
                            ...c,
                            className: ui.header,
                            children: [
                                i.jsx('span', { children: _i.readOrEmpty('armor_inspector.menu.header') }),
                                i.jsx('div', { className: ui.icon }),
                            ],
                        }),
                        i.jsx('div', {
                            className: ui.dropdown,
                            children: i.jsx(Pr, {
                                items: l,
                                selectedId: t.selectedMode.get(),
                                onChange: s.modeChanged,
                            }),
                        }),
                        i.jsx(ri, { className: ui.separator }),
                        i.jsx(sa, { selectedKey: h, render: d }),
                        m && i.jsx(ri, { className: ui.separator }),
                        i.jsx(xr, {}),
                    ],
                }),
            ],
        });
    });
function bi() {
    return i.jsx(ia, { options: { context: 'model.armorModel' }, children: i.jsx(ge, { children: i.jsx(vi, {}) }) });
}
var xi = ((e) => (
        (e.UNKNOWN = 'unknown'),
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
        (e.OVERHEAT_GUN = 'overheatGun'),
        (e.HEATING_ZONES_GUN = 'heatingZonesGun'),
        (e.STAGED_JET_BOOSTERS = 'stagedJetBoosters'),
        e
    ))(xi || {}),
    gi = ((e) => ((e.UNDEFINED = 'undefined'), (e.SILVER = 'silver'), (e.GOLD = 'gold'), e))(gi || {});
const fi = {
        [xi.AUTO_SHOOT_GUN]: 10,
        [xi.MAGAZINE_GUN]: 20,
        [xi.AUTO_LOADER_GUN]: 30,
        [xi.AUTO_LOADER_GUN_BOOST]: 40,
        [xi.DAMAGE_MUTABLE]: 50,
        [xi.DUAL_GUN]: 60,
        [xi.DUAL_ACCURACY]: 70,
        [xi.HYDRAULIC_CHASSIS]: 80,
        [xi.TRACK_WITHIN_TRACK]: 90,
        [xi.TWIN_GUN]: 100,
        [xi.SIEGE_MODE]: 110,
        [xi.STUN]: 120,
        [xi.HYDRAULIC_WHEELED_CHASSIS]: 130,
        [xi.TURBOSHAFT_ENGINE]: 140,
        [xi.ROCKET_ACCELERATION]: 150,
    },
    [Ni, ji] = u()(
        ({ observableModel: e }) => {
            const t = {
                    root: e.object(),
                    prevResearchItems: e.arrayClone('prevResearchItems'),
                    currentResearchItems: e.arrayClone('currentResearchItems'),
                    researchItems: e.dict('researchItems'),
                    selectedId: d.box(0),
                    hoveredId: d.box(0),
                    fieldModificationHover: d.box(!1),
                },
                s = _.model((e) => {
                    const s = t.researchItems.get(e);
                    return s ? fe(s.mechanics, (e, t) => fi[e.name] - fi[t.name]) : [];
                }),
                a = _.primitive((e) => {
                    const s = t.researchItems.get(e);
                    return (
                        !(!s || 0 === s.path.length) &&
                        Ne(s.path, (e) => {
                            const s = t.researchItems.get(e);
                            return !!s && !s.isResearched;
                        })
                    );
                }),
                r = _.model((e) => {
                    var s;
                    return je((null == (s = t.researchItems.get(e)) ? void 0 : s.urgentIds) ?? [], (e) => {
                        var s;
                        return !(null == (s = t.researchItems.get(e)) ? void 0 : s.isInstalled);
                    });
                }),
                i = _.model((e) =>
                    g(r(e), (e) => {
                        var s;
                        return (null == (s = t.researchItems.get(e)) ? void 0 : s.primaryClass) ?? '';
                    }),
                ),
                n = _.primitive((e) => ve(r(t.selectedId.get()), e)),
                o = _.primitive((e) => ve(r(t.hoveredId.get()), e));
            return {
                ...t,
                computes: {
                    mechanics: s,
                    isDisabled: a,
                    getUrgent: r,
                    getUrgentNames: i,
                    isUrgentSelected: n,
                    isUrgentHover: o,
                },
            };
        },
        ({ externalModel: e, model: t }) => {
            const s = h((e) => {
                    t.fieldModificationHover.set(e);
                }),
                a = h((e) => {
                    t.selectedId.set(e);
                }),
                r = h((e) => {
                    t.hoveredId.set(e);
                }),
                i = h(() => t.hoveredId.set(0));
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
    [yi, Ci] = u()(
        ({ observableModel: e }) => ({ ...e.primitives(['state', 'counter']) }),
        ({ externalModel: e }) => ({ openPostProgression: e.createCallbackNoArgs('onVehiclePostProgression') }),
    ),
    ki = 'BlockWithCoords_vehicleBox_5d1a08b4',
    wi = function ({ onCoordsChange: e, className: t }) {
        const s = r.useRef(null),
            a = ye(() => {
                var t;
                const a = null == (t = s.current) ? void 0 : t.getBoundingClientRect();
                a &&
                    e({
                        xmin: Math.floor(a.left),
                        ymin: Math.floor(a.top),
                        xmax: Math.floor(a.right),
                        ymax: Math.floor(a.bottom),
                    });
            });
        return (
            r.useLayoutEffect(
                () => (
                    a(),
                    window.addEventListener('resize', a),
                    () => {
                        window.removeEventListener('resize', a);
                    }
                ),
                [a],
            ),
            i.jsx('div', { className: n(ki, t), ref: s })
        );
    },
    Ii = 'VehicleBox_vehicleBox_2620d40',
    Si = function ({ className: e, classNames: t }) {
        const [s, a] = r.useState({ xmin: 0, ymin: 0, xmax: 0, ymax: 0 }),
            { controls: o } = ea();
        return (
            r.useEffect(() => {
                s.xmax > s.xmin && o.onResize(s);
            }, [o, s]),
            i.jsx('div', {
                className: e,
                children: i.jsx(wi, { onCoordsChange: a, className: n(Ii, null == t ? void 0 : t.boxWithCoords) }),
            })
        );
    },
    Ti = {
        background: 'FieldModification_background_ee006933',
        base: 'FieldModification_9fc9bb71',
        button: 'FieldModification_button_6d46a00e',
        button__locked: 'FieldModification_button__locked_ee006933',
        corners: 'FieldModification_corners_e6f28170',
        corners__locked: 'FieldModification_corners__locked_6a807d70',
        lock: 'FieldModification_lock_f63eaae',
        lock__visible: 'FieldModification_lock__visible_b9aeadbc',
        content: 'FieldModification_content_7a7b0353',
        button__secondary: 'FieldModification_button__secondary_ee006933',
        button__enabled: 'FieldModification_button__enabled_ee006933',
        button__unlocked: 'FieldModification_button__unlocked_ee006933',
        icon: 'FieldModification_icon_d613f266',
        descriptionContainer: 'FieldModification_descriptionContainer_ccd688fe',
        description: 'FieldModification_description_e3266628',
        description__visible: 'FieldModification_description__visible_b9aeadbc',
        bubble: 'FieldModification_bubble_df0e85ba',
    },
    Mi = ae('FieldModificationButton', {
        element: L,
        className: n(Ti.button, Ti.button__secondary, Ti.button__enabled),
        cva: { variants: { locked: { true: Ti.button__locked, false: Ti.button__unlocked } } },
    });
const Pi = a(function ({ className: e }) {
        const t = x.resolve('strings'),
            s = x.resolve('views'),
            { model: a, controls: r } = Ci(),
            { model: o, controls: c } = ji(),
            l = a.state.get(),
            d = o.currentResearchItems.get()[0],
            h = d ? o.researchItems.get(d.id) : void 0,
            m = se({ contentId: s.read((e) => e.lobby.tooltips.VehPostProgressionEntryPointTooltip('resId')) });
        const u = j(
            { buttonSize: L.sizes.small, bubbleSize: G.small },
            { large: { buttonSize: L.sizes.large, bubbleSize: G.medium } },
        );
        var _, p;
        if (0 !== l)
            return i.jsxs('div', {
                className: n(Ti.base, e),
                children: [
                    i.jsxs(Mi, {
                        theme: L.themes.secondary,
                        size: u.buttonSize,
                        classNames: { background: Ti.background, overlay: Ti.overlay, content: Ti.content },
                        locked: 1 === l,
                        onMouseEnter: function (e) {
                            (m.onMouseEnter(e), c.setFieldModificationHover(!0));
                        },
                        onMouseLeave: function () {
                            (m.onMouseLeave(), c.setFieldModificationHover(!1));
                        },
                        onClick: function () {
                            (m.onClick(), r.openPostProgression());
                        },
                        autoAlignContent: !1,
                        children: [
                            i.jsx('div', { className: Ti.icon }),
                            t.readOrEmpty('vehicle_hub.modules.controls.button.field_modification'),
                        ],
                    }),
                    i.jsx('div', { className: n(Ti.lock, 1 === l && Ti.lock__visible) }),
                    i.jsx('div', { className: n(Ti.corners, 1 === l && Ti.corners__locked) }),
                    i.jsx(H.Root, {
                        hidden: 0 === a.counter.get(),
                        className: Ti.bubble,
                        children: i.jsx(H.Icon, { size: u.bubbleSize, type: W.bubble }),
                    }),
                    h &&
                        i.jsx('div', {
                            className: Ti.descriptionContainer,
                            children: i.jsx('div', {
                                className: n(
                                    Ti.description,
                                    1 === l && o.fieldModificationHover.get() && Ti.description__visible,
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
    Ei = 'Control_6fe95751',
    Ai = 'Control_topContainer_5fe23b14',
    Ri = 'Control_fieldModification_9434b7fa',
    Oi = 'Control_separator_523d2573',
    Bi = 'Control_descriptor_6451bfc5',
    Li = 'Control_controls_c1ed063f',
    Di = 'Control_info_76cccc17',
    Vi = 'Control_currency_6bfd0c7d',
    $i = 'Control_name_91f33520',
    zi = 'Control_moduleName_b5e482cd',
    Fi = 'Control_secondaryButton_e863701f',
    Hi = x.resolve('strings'),
    Wi = 'researched',
    Gi = 'vehicleInBattle',
    Ui = 'eliteVehicle',
    Xi = 'disableVehicle',
    Ki = 'moduleMounted',
    Zi = 'disableModule',
    Yi = 'buyVehicle',
    Ji = 'buyAndInstall',
    qi = 'research',
    Qi = 'mount',
    en = 'enabled',
    tn = 'battle',
    sn = 'damaged',
    an = 'prebattle',
    rn = 'incompatible',
    nn = 'notEnoughCurrency',
    on = 'notEnoughXP',
    cn = 'wgmDisabled',
    ln = [Qi, Ji],
    dn = [Q.DAMAGED, Q.EXPLODED, Q.DESTROYED];
function hn(e, t) {
    switch (e) {
        case en:
            return;
        case cn:
            return {
                body: Hi.readOrEmpty('tooltips.vehiclePreview.buyButton.walletUnavailable.body'),
                header: Hi.readOrEmpty('tooltips.vehiclePreview.buyButton.walletUnavailable.header'),
            };
        case nn:
            return {
                body: Hi.readOrEmpty('tooltips.vehiclePreview.buyButton.notEnoughCredits.body'),
                header: Hi.readOrEmpty('tooltips.vehiclePreview.buyButton.notEnoughCredits.header'),
            };
        case on:
            return {
                body: Hi.readOrEmpty('tooltips.researchPage.module.status.notEnoughXP.text'),
                header: Hi.readOrEmpty('tooltips.researchPage.module.status.notEnoughXP.header'),
            };
        case tn:
            return { body: Hi.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.battle') };
        case sn:
            return { body: Hi.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.damaged') };
        case an:
            return { body: Hi.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.prebattle') };
        case rn: {
            const e = Hi.readOrEmpty('vehicle_hub.modules.name.separator'),
                s = t.map((e) => Hi.readOrEmpty(`vehicle_hub.modules.name.${e}`));
            return {
                body: Ce('vehicle_hub.modules.controls.button.tooltip.disableReason.incompatible', {
                    module: s.join(e),
                }),
            };
        }
        default:
            return void console.error('Unknown button state: ', e);
    }
}
const mn = a(function () {
        var e;
        const { model: t, controls: s } = ji(),
            a = jt().model,
            { model: r } = ft(),
            n = a.vehicleId.get(),
            o = a.state.get(),
            c = t.researchItems.get(n),
            l = t.selectedId.get(),
            d = t.researchItems.get(l),
            h = !!d && 'AVAILABLE' === (null == (e = r.currencies.get(d.priceCurrency)) ? void 0 : e.status),
            m = Boolean(d && !d.hasEnoughCurrency && !d.isInInventory),
            u = Boolean(d && !d.hasEnoughXP && !d.isResearched),
            _ = (function (e, t, s, a, r, i) {
                if (r) {
                    if (r.isInstalled) return Ki;
                    if (t) return Ui;
                    if (!(null == a ? void 0 : a.isResearched)) return Xi;
                    if (i && !r.isResearched) return Zi;
                    if (a.isResearched && !a.isInInventory && r.isResearched) return Yi;
                } else {
                    if (e) return Ui;
                    if (s) return Gi;
                    if (!(null == a ? void 0 : a.isResearched)) return Xi;
                    if (a.isResearched) return Wi;
                }
            })(a.elite.get(), a.premium.get(), o === Q.BATTLE, c, d, t.computes.isDisabled(l)),
            p = d
                ? (function (e) {
                      return e.isResearched
                          ? e.isInInventory
                              ? e.isInstalled
                                  ? void console.error('buttonTypes is not defined')
                                  : Qi
                              : Ji
                          : qi;
                  })(d)
                : void 0,
            v = (function (e, t, s, a, r, i) {
                const n = e && ln.includes(e);
                return s
                    ? e === qi && r
                        ? on
                        : n
                          ? t.length > 0
                              ? rn
                              : i === Q.BATTLE
                                ? tn
                                : i && dn.includes(i)
                                  ? sn
                                  : i === Q.IN_PREBATTLE
                                    ? an
                                    : e === Ji && a
                                      ? nn
                                      : en
                          : en
                    : cn;
            })(p, t.computes.getUrgentNames(l), h, m, u, o),
            b = v !== en,
            x = R({ ...hn(v, t.computes.getUrgentNames(l)) }),
            g = j(
                { currency: y.sizes.small, button: L.sizes.small },
                { medium: { currency: y.sizes.medium, button: L.sizes.large }, large: { currency: y.sizes.large } },
            );
        return i.jsxs('div', {
            className: Ei,
            children: [
                i.jsxs('div', {
                    className: Ai,
                    children: [i.jsx(Pi, { className: Ri }), i.jsx('div', { className: Oi })],
                }),
                _
                    ? i.jsx('div', {
                          className: Bi,
                          children: Hi.readOrEmpty(`vehicle_hub.modules.controls.descriptor.${_}`),
                      })
                    : i.jsxs('div', {
                          className: Li,
                          children: [
                              d &&
                                  i.jsxs('div', {
                                      className: Di,
                                      children: [
                                          p !== Qi &&
                                              i.jsx(y, {
                                                  className: Vi,
                                                  type: d.isResearched ? y.types.credits : y.types.tankXP,
                                                  size: g.currency,
                                                  reverse: !0,
                                                  children: d.isResearched ? d.priceAmount : d.requiredXp,
                                              }),
                                          i.jsx(C, {
                                              className: $i,
                                              path: 'vehicle_hub.modules.controls.name',
                                              params: { name: d.userName, classModuleName: zi },
                                          }),
                                      ],
                                  }),
                              p === Qi &&
                                  i.jsx('div', {
                                      ...(v === cn && x),
                                      children: i.jsx(L, {
                                          theme: L.themes.secondary,
                                          size: g.button,
                                          className: Fi,
                                          disabled: !h,
                                          onClick: function () {
                                              h && s.sellItem(l);
                                          },
                                          children: Hi.readOrEmpty('vehicle_hub.modules.controls.button.sell'),
                                      }),
                                  }),
                              i.jsx('div', {
                                  ...(b && x),
                                  children: i.jsx(L, {
                                      theme: L.themes.primary,
                                      size: g.button,
                                      onClick: function () {
                                          if (!b)
                                              switch (p) {
                                                  case qi:
                                                      return s.unlockItem(l);
                                                  case Qi:
                                                      return s.installItem(l);
                                                  case Ji:
                                                      return s.buyAndInstallItem(l);
                                                  default:
                                                      console.error(`buttonType is not correct by id item ${l}`);
                                              }
                                      },
                                      disabled: b,
                                      children: Hi.readOrEmpty(`vehicle_hub.modules.controls.button.${p}`),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    }),
    un = {
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
        mechanics: 'Module_mechanics_a51a15dd',
        mechanic: 'Module_mechanic_c7fffcbc',
    },
    _n = x.resolve('images'),
    pn = x.resolve('sounds'),
    vn = 'small',
    bn = 'large',
    xn = 'default',
    gn = 'locked',
    fn = 'disabled',
    Nn = 'mounted',
    jn = 'default',
    yn = 'selected',
    Cn = 'pressed',
    kn = ae('Module', un.base, {
        variants: {
            state: {
                default: un.base__default,
                locked: un.base__locked,
                disabled: un.base__disabled,
                mounted: un.base__mounted,
            },
            status: { default: un.base__default, selected: un.base__selected, pressed: un.base__pressed },
            hover: { true: un.base__hover },
            withPrice: { true: un.base__withPrice },
            withLongPrice: { true: un.base__withLongPrice },
        },
    }),
    wn = (e, t) => (e ? Cn : t ? yn : jn),
    In = a(function ({ id: e }) {
        const [t, s] = r.useState(!1),
            [a, n] = r.useState(!1),
            { model: o, controls: c } = ji(),
            l = jt().model,
            d = l.vehicleId.get(),
            h = o.researchItems.get(e),
            m = o.researchItems.get(d),
            u = o.computes.isUrgentSelected(e),
            _ = o.computes.isUrgentHover(e),
            p = l.elite.get(),
            v = o.fieldModificationHover.get() && !h.isResearched && !p,
            b =
                ((x = o.computes.isDisabled(e)),
                (f = h.isInstalled),
                (N = h.isInInventory),
                (C = h.isResearched),
                (k = m.isResearched && !m.isInInventory && h.isResearched),
                x && !C ? fn : f ? Nn : (N && C) || k ? xn : gn);
        var x, f, N, C, k;
        const w = ((e, t, s, a) => !(e !== gn && e !== fn) && (s || (!a && !t)))(
                b,
                h.autoUnlocked,
                m.isInInventory,
                h.isResearched,
            ),
            I = j({ size: vn }, { large: { size: bn } }),
            S = h.isResearched ? h.priceAmount : h.requiredXp,
            T = w && String(S).length >= (I.size === vn ? 5 : 7);
        return (
            r.useEffect(() => {
                if (t) return ke.up(() => s(!1));
            }, [t]),
            h
                ? i.jsxs(kn, {
                      state: b,
                      status: wn(t, o.selectedId.get() === e),
                      hover: a || v,
                      withPrice: w,
                      withLongPrice: T,
                      onClick: function () {
                          (pn.play('play'), c.setSelectedID(e));
                      },
                      onMouseDown: function () {
                          s(!0);
                      },
                      onMouseEnter: function () {
                          (n(!0), pn.play('highlight'), c.setHoverID(e));
                      },
                      onMouseLeave: function () {
                          (n(!1), c.clearUrgentHover());
                      },
                      children: [
                          i.jsxs('div', {
                              className: un.background,
                              children: [
                                  i.jsx('div', { className: un.frame }),
                                  i.jsx('div', { className: un.check }),
                                  (u || _) && i.jsx('div', { className: un.urgent }),
                                  i.jsx('div', { className: un.hover }),
                              ],
                          }),
                          i.jsx('div', {
                              className: un.icon,
                              style: {
                                  backgroundImage: `url(${_n.readOrEmpty(`modules.${((M = h.image), (P = I.size), P === vn ? M : M + 'Big')}`)})`,
                              },
                          }),
                          b === fn && i.jsx('div', { className: un.disabledPattern }),
                          i.jsx(Z.Level, { className: un.level, value: h.level }),
                          w &&
                              i.jsx(y, {
                                  className: un.price,
                                  type: h.isResearched ? y.types.credits : y.types.tankXP,
                                  size: y.sizes.extraSmall,
                                  reverse: !0,
                                  children: S,
                              }),
                          i.jsx('div', { className: un.name, children: i.jsx(F, { text: h.userName }) }),
                          i.jsx('div', {
                              className: un.mechanics,
                              children: g(o.computes.mechanics(e), (e) =>
                                  i.jsx(
                                      'div',
                                      {
                                          className: un.mechanic,
                                          style: {
                                              backgroundImage: `url(${_n.readOrEmpty(`vehicle_hub.mechanics.x20x20.${e.name}`)})`,
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
        var M, P;
    }),
    Sn = a(function ({ id: e }) {
        const { model: t } = ji(),
            s = jt().model,
            a = t.researchItems.get(e),
            n = s.vehicleId.get(),
            o = t.computes.getUrgent(e).length > 0,
            c = we(
                'researchItem',
                r.useMemo(
                    () => ({ nodeCD: e, rootCD: n, nodeState: null == a ? void 0 : a.state, hasUrgent: o }),
                    [e, n, null == a ? void 0 : a.state, o],
                ),
                { disabled: !1 },
            ),
            l = P({ args: r.useMemo(() => ({ nodeCD: e, tooltipId: 'techtreeModule' }), [e]) });
        return i.jsx('div', { ...c, 'data-test-id': e, ...l, children: i.jsx(In, { id: e }) });
    }),
    Tn = {
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
    Mn = x.resolve('images'),
    Pn = x.resolve('sounds'),
    En = 'default',
    An = 'locked',
    Rn = 'disabled',
    On = 'inGarage',
    Bn = ae('Vehicle', Tn.base, {
        variants: {
            state: {
                default: Tn.base__default,
                locked: Tn.base__locked,
                disabled: Tn.base__disabled,
                inGarage: Tn.base__inGarage,
            },
            hover: { true: Tn.base__hover },
        },
    });
const Ln = a(function ({ id: e, isPrevNode: t = !1 }) {
        const [s, a] = r.useState(!1),
            { model: o, controls: c } = ji(),
            l = o.researchItems.get(e),
            d = jt().model.elite.get(),
            h = o.fieldModificationHover.get() && !t && !l.isResearched && !d,
            m = (function (e) {
                if (e && v(e)) return e;
            })(l.primaryClass),
            u = ((_ = l.isDisabled), (p = l.isInInventory), (b = l.isResearched), p ? On : b ? En : _ ? Rn : An);
        var _, p, b;
        const x = l.isResearched ? l.priceAmount : l.requiredXp,
            g = x > 0 || l.isDiscountedPrice || l.isDiscountedXp;
        return l
            ? i.jsxs(Bn, {
                  hover: s || h,
                  state: u,
                  onMouseEnter: () => {
                      (Pn.play('highlight'), a(!0));
                  },
                  onMouseLeave: () => {
                      a(!1);
                  },
                  onClick: () => {
                      (Pn.play('play'), c.changeVehicle(e));
                  },
                  children: [
                      i.jsx('div', { className: Tn.vignette }),
                      i.jsx('div', { className: Tn.hover }),
                      i.jsx('div', {
                          className: n(
                              Tn.outsideHoverFrame,
                              Tn.outsideHoverFrame__top,
                              h && Tn.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              Tn.outsideHoverFrame,
                              Tn.outsideHoverFrame__bottom,
                              h && Tn.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              Tn.outsideHoverFrame,
                              Tn.outsideHoverFrame__left,
                              h && Tn.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              Tn.outsideHoverFrame,
                              Tn.outsideHoverFrame__right,
                              h && Tn.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: Tn.icon,
                          style: { backgroundImage: `url(${Mn.readOrEmpty(`vehicle.x190x152.${Ie(l.image)}`)})` },
                      }),
                      u === Rn && i.jsx('div', { className: Tn.disabled }),
                      i.jsxs('div', {
                          className: Tn.tankInfo,
                          children: [
                              i.jsx(Z.Level, { className: Tn.level, value: l.level }),
                              m && i.jsx(Z.Type, { type: m, size: Z.Type.sizes.x24x24, premium: l.isElite }),
                          ],
                      }),
                      u === On && i.jsx('div', { className: Tn.garageIcon }),
                      i.jsxs('div', {
                          className: Tn.description,
                          children: [
                              u === On &&
                                  l.earnedXp > 0 &&
                                  i.jsx(y, {
                                      className: Tn.exp,
                                      type: y.types.tankXP,
                                      size: y.sizes.extraSmall,
                                      reverse: !0,
                                      children: l.earnedXp,
                                  }),
                              i.jsx('div', { className: Tn.name, children: i.jsx(F, { text: l.userName }) }),
                              (u === En || u === An || u === Rn) &&
                                  i.jsxs('div', {
                                      className: n(
                                          Tn.price,
                                          l.isDiscountedPrice && Tn.price__discountedCredits,
                                          l.isDiscountedXp && Tn.price__discountedXp,
                                      ),
                                      children: [
                                          g &&
                                              i.jsx(y, {
                                                  className: Tn.currency,
                                                  type: l.isResearched ? y.types.credits : y.types.tankXP,
                                                  size: y.sizes.extraSmall,
                                                  reverse: !0,
                                                  children: x,
                                              }),
                                          (l.isDiscountedPrice || l.isDiscountedXp) &&
                                              i.jsx('div', {
                                                  className: Tn.discountWrapper,
                                                  children: i.jsx('div', { className: Tn.discount }),
                                              }),
                                      ],
                                  }),
                          ],
                      }),
                  ],
              })
            : null;
    }),
    Dn = a(function ({ id: e, isPrevNode: t = !1 }) {
        const { model: s } = ji(),
            a = s.researchItems.get(e),
            n = P({ args: r.useMemo(() => ({ vehCD: e, tooltipId: 'techtreeVehicle', topLevel: t }), [e]) }),
            o = we(
                'researchVehicle',
                r.useMemo(() => ({ vehCD: e, nodeState: a.state, newCM: !1 }), [a.state, e]),
                { disabled: !1 },
            );
        return i.jsx('div', { ...o, ...n, children: i.jsx(Ln, { id: e, isPrevNode: t }) });
    });
function Vn({ id: e, isPrevNode: t = !1 }) {
    const { model: s } = ji(),
        a = s.researchItems.get(e);
    switch (null == a ? void 0 : a.renderer) {
        case 'item':
            return i.jsx(Sn, { id: e });
        case 'vehicle':
            return i.jsx(Dn, { isPrevNode: t, id: e });
        default:
            return null;
    }
}
const $n = { [Pe.extraLarge]: 40, [Pe.large]: 40, [Pe.medium]: 28, [Pe.small]: 28, [Pe.extraSmall]: 28 },
    zn = function ({ lines: e, cellSize: t, classNames: s }) {
        const a = new Map(),
            n = de(),
            [o, c] = r.useState(Se()),
            [l, d] = r.useMemo(
                () => [{ width: Te(t.width), height: Te(t.height) }, Te($n[n.breakpoint.name])],
                [o, t.width, t.height, n.breakpoint.name],
            );
        return (
            r.useEffect(() => Me(() => c(Se())), []),
            i.jsx('svg', {
                className: null == s ? void 0 : s.base,
                width: '100%',
                height: '100%',
                viewBox: '0 0 100% 100%',
                children: e.map((e) => {
                    const t = e.isFirstPointReal ? e.x1 * l.width + d : e.x1 * l.width,
                        s = e.y1 * l.height,
                        r = ((e.x2 - e.x1) / 2 + e.x1) * l.width,
                        n = e.isSecondPointReal ? e.x2 * l.width - d : e.x2 * l.width,
                        o = e.y2 * l.height,
                        c = `${t},${s} ${r},${s}`,
                        h = `${r},${o} ${n},${o}`;
                    let m = '';
                    const u = a.get(c),
                        _ = void 0 !== u,
                        p = Boolean(u);
                    return (
                        _ && (p || !e.isResearched)
                            ? (m = `${r},${s} ${h}`)
                            : (a.set(c, e.isResearched), (m = `${c} ${h}`)),
                        i.jsx(
                            'polyline',
                            {
                                points: m,
                                stroke: e.isResearched ? '#FFF7E1' : '#52565A',
                                strokeWidth: Te(2),
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
    Fn = 'PrevResearchTree_6c159758',
    Hn = 'PrevResearchTree_content_61e4d925',
    Wn = 'PrevResearchTree_researchItem_aa96ef47',
    Gn = 'PrevResearchTree_treeLines_1da899c9',
    Un = { [Pe.extraLarge]: 208, [Pe.large]: 208, [Pe.medium]: 160, [Pe.small]: 160, [Pe.extraSmall]: 160 },
    Xn = { [Pe.extraLarge]: 140, [Pe.large]: 140, [Pe.medium]: 110, [Pe.small]: 110, [Pe.extraSmall]: 110 },
    Kn = a(function () {
        const { model: e } = ji(),
            t = e.prevResearchItems.get(),
            s = e.researchItems,
            a = de(),
            n = Un[a.breakpoint.name],
            o = t.length * Xn[a.breakpoint.name],
            c = { width: n / 2, height: Xn[a.breakpoint.name] },
            l = (e) => (e ? { top: e.y * c.height + 'rem', left: e.x * c.width + 'rem' } : { top: 0, left: 0 }),
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
        return i.jsx('div', {
            className: Fn,
            children: i.jsxs('div', {
                className: Hn,
                style: { width: `${n}rem`, height: `${o}rem` },
                children: [
                    i.jsx(zn, { lines: h, cellSize: c, classNames: { base: Gn } }),
                    t.map((t, s) => {
                        const a = e.researchItems.get(t.id),
                            r = d[s];
                        return a
                            ? i.jsx(
                                  'div',
                                  { className: Wn, style: l(r), children: i.jsx(Vn, { id: t.id, isPrevNode: !0 }) },
                                  t.id,
                              )
                            : null;
                    }),
                ],
            }),
        });
    });
let Zn = class {
    constructor(e, s) {
        (t(this, 'row'), t(this, 'col'), (this.row = e), (this.col = s));
    }
};
class Yn {
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
        const c = [];
        for (r = 0; r < a; r++) {
            for (n = e[r], i = n.length; i < o; i++) n.push(t);
            c.push(n);
        }
        for (; r < o; r++) {
            for (n = [], i = 0; i < o; i++) n.push(t);
            c.push(n);
        }
        return c;
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
        ((this.C = Yn.padMatrix(e)), (this.n = this.C.length));
        const t = e.length,
            s = e[0].length;
        this.rowCovered = [];
        for (let n = 0; n < this.n; n++) this.rowCovered.push(!1);
        this.columnCovered = [];
        for (let n = 0; n < this.n; n++) this.columnCovered.push(!1);
        ((this.Z0Row = 0),
            (this.Z0Column = 0),
            (this.path = Yn.makeMatrix(2 * this.n, 0)),
            (this.marked = Yn.makeMatrix(this.n, 0)));
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
        for (let n = 0; n < t; n++) for (let e = 0; e < s; e++) 1 === this.marked[n][e] && i.push(new Zn(n, e));
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
class Jn {
    constructor(e, t) {
        ((this.row = e), (this.col = t));
    }
}
class qn {
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
            this.levels[e].push(new Qn(t, this.levels[e].length, s)),
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
        for (let c = 0; c < s; c++) {
            if (((a = t[c]), null == a)) continue;
            i = this.adjacencyMatrix[a.index];
            const s = i.length;
            let l = 0;
            for (n = [], o = 0; o < s; o++) 1 === i[o] && (n.push(o), l++);
            if (l > 1) {
                const t = this.levels[e];
                let s = -1,
                    i = !0;
                const c = 2 === l ? 0 : 1;
                for (o = 0; o < t.length; o++) {
                    r = t[o];
                    for (let t = 0; t < n.length; t++) {
                        const o = n[t];
                        r.index === o &&
                            l > c &&
                            (i
                                ? (s = this.addFakeNode(r, e, a.index))
                                : s > 0 &&
                                  (this.addFakeRelations(a.index, r.index, s),
                                  this.addLevelItem(e + 1, r.index, !1, !0),
                                  this.removeLevelItem(e, r.index)),
                            l--,
                            (i = l % 2 > 0 && c > 0));
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
                c = r.length;
            for (let a = 0; a < c; a++)
                if (r[a] === (t ? 1 : -1) || r[a] === (t ? 2 : -2))
                    for (let r = 0; r < n; r++) {
                        const n = i[r];
                        if (null != n && n.index === a) {
                            const a = t ? eo.makeByNext(e, n) : eo.makeByTop(e, n);
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
                    c = s.end;
                (((n - i) * (c - o) < 0 && (i - n) * (o - c) < 0) ||
                    (i !== o && n !== c && ((o >= n && i <= c) || (c <= i && o <= n)) && i !== n)) &&
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
            const c = this.findMaxChildCount(this.adjacencyMatrix[e.index]) - 1;
            if (c > 0) {
                for (let e = 0; e < c && a > 0; e++, a--) o + e + 1 < s && ((r[o + e + n + 1] = 0), (i = !0));
                n = c;
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
        const n = new Yn(),
            o = n.compute(n.makeCostMatrix(i, (e) => e)),
            c = new Array(a);
        let l = 0;
        return (
            o.forEach((e, t) => {
                const a = e.row,
                    r = e.col,
                    n = s[a];
                (null != n && (n.dx = r), (c[r] = n), (l += i[a][r]));
            }),
            (this.levels[e] = c),
            l
        );
    }
    findNodePositionInLevel(e, t) {
        let s = -1,
            a = 0,
            r = Number.MAX_VALUE,
            i = 0;
        const n = this.maxLevelWidth * this.maxLevelWidth;
        let o,
            c = 0;
        for (; 0 !== s && 3 !== i && a !== s && c < n; )
            ((a = s),
                (s = this.makeMinCrossing(e, t)),
                (o = this.getLines(e, t)),
                (s *= this.getTotalCost(o)),
                s <= r && ((i = s === r ? i + 1 : 0), (r = s)),
                c++);
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
        return new Jn(this.levels.length, e);
    }
}
class Qn {
    constructor(e, s, a) {
        (t(this, 'index'), t(this, 'dx'), t(this, 'fake'), (this.index = e), (this.dx = s), (this.fake = a));
    }
}
class eo {
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
        return new eo(t.dx, e.dx, t.index, e.index);
    }
    static makeByNext(e, t) {
        return new eo(e.dx, t.dx, e.index, t.index);
    }
}
const to = 'ResearchTree_fdaa27ea',
    so = 'ResearchTree_researchItemVehicle_6fdd15b5',
    ao = 'ResearchTree_researchItem_ee82a97b',
    ro = 'ResearchTree_treeLines_7c587e69',
    io = 0.35,
    no = {
        [Pe.extraLarge]: { width: 1137, height: 732 },
        [Pe.large]: { width: 960, height: 732 },
        [Pe.medium]: { width: 813, height: 504 },
        [Pe.small]: { width: 726, height: 504 },
        [Pe.extraSmall]: { width: 726, height: 504 },
    },
    oo = { [Pe.extraLarge]: 0.2, [Pe.large]: 0.35, [Pe.medium]: 0.45, [Pe.small]: 0.5, [Pe.extraSmall]: 0.5 },
    co = a(function () {
        const e = de(),
            { model: t } = ji(),
            s = t.currentResearchItems.get(),
            a = t.researchItems,
            o = no[e.breakpoint.name],
            c = ((e) => ({ width: e.width / 7, height: e.height / 6 }))(o),
            l = oo[e.breakpoint.name],
            d = (e) =>
                e ? { top: (e.y + io) * c.height + 'rem', left: (e.x - 0.5) * c.width + 'rem' } : { top: 0, left: 0 },
            h = r.useMemo(() => {
                const e = new qn(s.length, 6);
                return (
                    (function (e, t) {
                        const s = e.matrix,
                            a = (e) => t.findIndex((t) => t.id == e);
                        t.forEach((r, i) => {
                            r.level > -1 && e.addFixedPath(i, r.level);
                            let n = 0;
                            const o = r.path,
                                c = o.length;
                            for (let e = 0; e < c; e++) {
                                const s = a(o[e]);
                                s > -1 && (n = Math.max(n, t[s].path.length));
                            }
                            for (let e = 0; e < c; e++) {
                                const r = o[e];
                                if (isNaN(r) || 0 === r) continue;
                                const c = a(r);
                                !isNaN(c) && c > -1 && t[c].path.length === n && ((s[c][i] = 1), (s[i][c] = -1));
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
                                n = ((e, t) => (0 === e ? e + l : 'vehicle' === t ? 7.15 : e + 0.65 + l))(a, i),
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
                            Ee(t.path, (e) => {
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
                                        y1: r.y + io,
                                        x2: e.x - 0.5,
                                        y2: e.y + io,
                                        isResearched: o && n(s),
                                    });
                            }
                        });
                    }),
                    t
                );
            }, [m, h, a, s]);
        return i.jsxs('div', {
            className: to,
            style: { width: `${o.width}rem`, height: `${o.height}rem` },
            children: [
                i.jsx(zn, { lines: u, cellSize: c, classNames: { base: ro } }),
                s.map((e, t) => {
                    const s = a.get(e.id),
                        r = m[t];
                    return s
                        ? i.jsx(
                              'div',
                              {
                                  className: n(ao, 'vehicle' === e.renderer && so),
                                  style: d(r),
                                  children: i.jsx(Vn, { id: e.id }),
                              },
                              e.id,
                          )
                        : null;
                }),
            ],
        });
    }),
    lo = 'Modules_sceneWrapper_db189ae1',
    ho = 'Modules_bef383eb',
    mo = 'Modules_content_f69d3c8e',
    uo = 'Modules_vehicleBox_705d6a29',
    _o = 'Modules_boxWithCoords_abb32275',
    po = function () {
        const { controls: e } = ea();
        return i.jsxs('div', {
            className: ho,
            children: [
                i.jsxs('div', {
                    className: mo,
                    children: [
                        i.jsx(xe, {
                            className: lo,
                            moveSpace: e.sceneWrapper.onMoveSpace,
                            onMouseOver3dScene: e.sceneWrapper.onMouseOver3dScene,
                        }),
                        i.jsx(Si, { className: uo, classNames: { boxWithCoords: _o } }),
                        i.jsx(Kn, {}),
                        i.jsx(co, {}),
                    ],
                }),
                i.jsx(yi, {
                    options: { context: 'model.modulesModel.fieldModificationModel' },
                    children: i.jsx(mn, {}),
                }),
            ],
        });
    };
function vo() {
    return i.jsx(Ni, { options: { context: 'model.modulesModel' }, children: i.jsx(po, {}) });
}
const [bo, xo] = u()(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['historicalReference', 'customDescription']),
                    root: e.object(),
                    mechanics: e.transform(
                        (e) =>
                            g(e, (e) => ({
                                id: e.name,
                                weight: fi[e.name] ?? 0,
                                special: e.priority >= 1,
                                rank: e.rank,
                                hasVideo: e.hasVideo,
                            })).sort((e, t) => e.weight - t.weight),
                        'mechanics',
                    ),
                    crew: e.arrayClone('crew'),
                    benefits: e.arrayClone('benefits'),
                },
                s = _.structural(() => {
                    const e = t.crew.get();
                    return g(e, (e) => ({
                        plus: e.roles.length > 1,
                        roleName: re(e.roles, 0),
                        tankmanId: e.tankmanId,
                        slotId: e.id,
                    }));
                }),
                a = _.structural(() =>
                    Ae(t.mechanics.get(), (e, t) => (e[t.special ? 'special' : 'common'].push(t), e), {
                        common: [],
                        special: [],
                    }),
                );
            return { ...t, computes: { crewRoles: s, mechanics: a } };
        },
        ({ externalModel: e }) => ({ watchMechanicsVideo: e.createCallback((e) => e, 'onWatchMechanicsVideo') }),
    ),
    go = 'classSecondary',
    fo = { top: 'top', bottom: 'bottom', both: 'both', none: 'none' };
function No(e, t) {
    return e || t ? (e ? (t ? fo.none : fo.bottom) : fo.top) : fo.both;
}
function jo(e) {
    return e.includes(go);
}
var yo = ((e) => (
    (e.EXPERIENCE = 'experience'),
    (e.CREDITS = 'credits'),
    (e.CREWS_TRAIN = 'crewsTrain'),
    (e.REPAIR_KIT = 'repairKit'),
    (e.BONDS = 'bonds'),
    e
))(yo || {});
const Co = 'Collectors_e1bd7e2a',
    ko = 'Collectors_content_241f1284',
    wo = 'Collectors_title_1e2c33ce',
    Io = 'Collectors_description_8a2374cd',
    So = x.resolve('strings');
function To({ className: e }) {
    return i.jsxs('div', {
        className: n(Co, e),
        children: [
            i.jsxs('div', {
                className: ko,
                children: [
                    i.jsx('div', {
                        className: wo,
                        children: So.readOrEmpty('vehicle_hub.overview.benefits.collectorVehicle.name'),
                    }),
                    i.jsx(C, { path: 'vehicle_preview.infoPanel.collectible.desc', className: Io, split: !0 }),
                ],
            }),
            i.jsx(E, {
                path: 'vehicle_hub.benefits.collectors_80x80',
                width: 80,
                height: 80,
                adaptive: { large: { width: 116, height: 116, path: 'vehicle_hub.benefits.collectors_116x116' } },
            }),
        ],
    });
}
const Mo = 'Premium_46145a21',
    Po = 'Premium_benefit_2adaef1e',
    Eo = 'Premium_benefit__shortened_aa8afe2a',
    Ao = 'Premium_content_d6722ba0',
    Ro = 'Premium_name_f2b278b',
    Oo = 'Premium_description_2a3350ed',
    Bo = x.resolve('strings'),
    Lo = a(function ({ className: e }) {
        const t = xo().model.benefits.get(),
            s = [...Re(t, 0, 3)];
        return i.jsx('div', {
            className: n(Mo, e),
            children: g(s, (e) =>
                i.jsxs(
                    'div',
                    {
                        className: n(Po, 4 === s.length && Eo),
                        children: [
                            i.jsx(E, {
                                path: `vehicle_hub.benefits.${Ko[e]}_gold_40x40`,
                                width: 40,
                                height: 40,
                                adaptive: {
                                    large: { width: 48, height: 48, path: `vehicle_hub.benefits.${Ko[e]}_gold_48x48` },
                                },
                            }),
                            i.jsxs('div', {
                                className: Ao,
                                children: [
                                    i.jsx('div', {
                                        className: Ro,
                                        children: Bo.readOrEmpty(`vehicle_hub.overview.benefits.premium.name.${e}`),
                                    }),
                                    i.jsx('div', {
                                        className: Oo,
                                        children: Bo.readOrEmpty(
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
    Do = 'Special_9ac51d30',
    Vo = 'Special_border_791bf4fa',
    $o = 'Special_benefit_735ba88d',
    zo = 'Special_name_d0fbc6d',
    Fo = x.resolve('strings'),
    Ho = a(function ({ className: e }) {
        const t = xo().model.benefits.get(),
            s = [...Re(t, 0, 3)];
        return i.jsxs('div', {
            className: n(Do, e),
            children: [
                i.jsx('div', { className: Vo }),
                g(s, (e) =>
                    i.jsxs(
                        'div',
                        {
                            className: $o,
                            children: [
                                i.jsx(E, {
                                    path: `vehicle_hub.benefits.${Ko[e]}_silver_40x40`,
                                    width: 40,
                                    height: 40,
                                    adaptive: {
                                        large: {
                                            width: 48,
                                            height: 48,
                                            path: `vehicle_hub.benefits.${Ko[e]}_silver_48x48`,
                                        },
                                    },
                                }),
                                i.jsx('div', {
                                    className: zo,
                                    children: Fo.readOrEmpty(`vehicle_hub.overview.benefits.special.name.${e}`),
                                }),
                            ],
                        },
                        e,
                    ),
                ),
            ],
        });
    }),
    Wo = 'Benefits_1d3e7064',
    Go = 'Benefits_premium_52b989b9',
    Uo = 'Benefits_special_52b989b9',
    Xo = 'Benefits_collectors_ac9481a0',
    Ko = {
        [yo.EXPERIENCE]: 'star',
        [yo.CREDITS]: 'coins',
        [yo.CREWS_TRAIN]: 'crew',
        [yo.REPAIR_KIT]: 'unlimited',
        [yo.BONDS]: 'bonds',
    },
    Zo = a(function ({ className: e }) {
        const t = jt().model.tags.get().split(',');
        return i.jsxs('div', {
            className: n(Wo, e),
            children: [
                t.includes(Oe.premium)
                    ? t.includes(Oe.special)
                        ? i.jsx(Ho, { className: Uo })
                        : i.jsx(Lo, { className: Go })
                    : null,
                t.includes(Oe.collectorVehicle) && i.jsx(To, { className: Xo }),
            ],
        });
    }),
    Yo = 'Description_48a84f65',
    Jo = 'Description_header_6bb7a700',
    qo = 'Description_title_2add40ca',
    Qo = 'Description_3f21acdc',
    ec = a(function ({ className: e }) {
        const { model: t } = xo(),
            s = x.resolve('strings'),
            a = t.historicalReference.get(),
            r = t.customDescription.get(),
            o = R({ body: a });
        return i.jsxs('div', {
            className: n(Yo, e),
            children: [
                i.jsxs('div', {
                    className: Jo,
                    children: [
                        i.jsx('div', {
                            className: qo,
                            children: r
                                ? s.readOrEmpty('vehicle_hub.overview.title.generalDescription')
                                : s.readOrEmpty('vehicle_hub.overview.title.historicalReference'),
                        }),
                        r &&
                            a &&
                            i.jsx(E, {
                                ...o,
                                width: '32rem',
                                height: '32rem',
                                path: 'vehicle_hub.historical_reference',
                            }),
                    ],
                }),
                (r || a).split('\n').map((e, t) => i.jsx(Be, { className: Qo, text: e, split: !0 }, t)),
            ],
        });
    }),
    tc = {
        root: 'Mechanics_root_23828917',
        base: 'Mechanics_779ccfc1',
        mechanic: 'Mechanics_mechanic_100f931d',
        base__single: 'Mechanics_base__single_23828917',
        content: 'Mechanics_content_8a718215',
        header: 'Mechanics_header_52b5097c',
        name: 'Mechanics_name_b0bc436d',
        description: 'Mechanics_description_234553f2',
    },
    sc = a(function ({ className: e }) {
        const t = x.resolve('strings'),
            { model: s } = xo(),
            a = s.computes.mechanics().special.length > 0,
            r = s.computes.mechanics().common.slice(0, 3),
            o = 1 === r.length && !1 === a;
        return i.jsx('div', {
            className: n(tc.base, o && tc.base__single, e),
            children: g(r, (e) =>
                i.jsxs(
                    'div',
                    {
                        className: tc.mechanic,
                        children: [
                            o && i.jsx(E, { path: `vehicle_hub.mechanics.x96x96.${e.id}`, width: 96, height: 96 }),
                            i.jsxs('div', {
                                className: tc.content,
                                children: [
                                    i.jsxs('div', {
                                        className: tc.header,
                                        children: [
                                            !o &&
                                                i.jsx(E, {
                                                    path: `vehicle_hub.mechanics.x48x48.${e.id}`,
                                                    width: 48,
                                                    height: 48,
                                                }),
                                            i.jsx('div', {
                                                className: tc.name,
                                                children: t.readOrEmpty(`vehicle_hub.abilities.common.name.${e.id}`),
                                            }),
                                        ],
                                    }),
                                    i.jsx(C, {
                                        className: tc.description,
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
    ac = 'SpecialMechanic_61a5d496',
    rc = 'SpecialMechanic_content_4adcaa8e',
    ic = 'SpecialMechanic_iconContainer_b16ec9b9',
    nc = 'SpecialMechanic_icon_261dc586',
    oc = 'SpecialMechanic_glow_f14361c3',
    cc = 'SpecialMechanic_dust_781e0ca5',
    lc = 'SpecialMechanic_name_8dbc8acc',
    dc = 'SpecialMechanic_description_185cf2ea',
    hc = { iconSize: 'x96x96', glowSize: 'small' },
    mc = { large: { iconSize: 'x128x128', glowSize: 'large' } },
    uc = a(function ({ className: e }) {
        const t = x.resolve('images'),
            s = x.resolve('strings'),
            { model: a } = xo(),
            r = a.computes.mechanics().special[0],
            o = j(hc, mc);
        if (!r) return;
        const c = r.rank == gi.GOLD,
            l = c
                ? `vehicle_hub.mechanics.special.${o.iconSize}.${r.id}`
                : `vehicle_hub.mechanics.${o.iconSize}.${r.id}`,
            d = s
                .readOr(`vehicle_hub.abilities.special.description.${r.id}`, () =>
                    s.readOrEmpty(`vehicle_hub.abilities.common.description.${r.id}`),
                )
                .split('\n');
        return i.jsxs('div', {
            className: n(ac, e),
            children: [
                t.has(l) &&
                    i.jsxs('div', {
                        className: ic,
                        children: [
                            i.jsx(E, { path: l, className: nc }),
                            c &&
                                i.jsxs(i.Fragment, {
                                    children: [
                                        i.jsx(E, {
                                            path: `vehicle_hub.mechanics.special.dust_${o.glowSize}`,
                                            className: cc,
                                        }),
                                        i.jsx(E, {
                                            path: `vehicle_hub.mechanics.special.glow_front_${o.glowSize}`,
                                            className: oc,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                i.jsxs('div', {
                    className: rc,
                    children: [
                        i.jsx('div', {
                            className: lc,
                            children: s.readOr(`vehicle_hub.abilities.special.name.${r.id}`, () =>
                                s.readOrEmpty(`vehicle_hub.abilities.common.name.${r.id}`),
                            ),
                        }),
                        d.map((e, t) => i.jsx(Be, { text: e, className: dc, split: !0 }, t)),
                    ],
                }),
            ],
        });
    }),
    _c = {
        base: 'TtcProgressBar_ec222f42',
        bar: 'TtcProgressBar_bar_dce0790e',
        bar__filled: 'TtcProgressBar_bar__filled_89fad18',
        bar__empty: 'TtcProgressBar_bar__empty_9d98c6c',
        bar__first: 'TtcProgressBar_bar__first_2e768770',
        bar__last: 'TtcProgressBar_bar__last_cdbba2',
        bar__default: 'TtcProgressBar_bar__default_bcb8090d',
        gap: 'TtcProgressBar_gap_56f87635',
    },
    pc = 2;
function vc({ vehicleAmount: e, currentAmount: t, maxAmount: s, className: a }) {
    const r = 100 - pc,
        o = Math.min(Math.ceil((e / s) * 100), r),
        c = Math.ceil((t / s) * 100);
    return i.jsxs('div', {
        className: n(_c.base, a),
        children: [
            c > 0 &&
                o > 0 &&
                i.jsx('div', {
                    className: n(_c.bar, _c.bar__filled, _c.bar__first),
                    style: { width: `${Math.min(c, o)}%` },
                }),
            c < o &&
                i.jsxs(i.Fragment, {
                    children: [
                        c > 0 && i.jsx('div', { className: _c.gap }),
                        i.jsx('div', { className: n(_c.bar, _c.bar__empty), style: { width: o - c + '%' } }),
                    ],
                }),
            i.jsx('div', { className: _c.bar__default }),
            c > o &&
                i.jsxs(i.Fragment, {
                    children: [
                        i.jsx('div', { className: _c.gap }),
                        i.jsx('div', {
                            className: n(_c.bar, _c.bar__filled, c >= r && _c.bar__last),
                            style: { width: c - o + '%' },
                        }),
                    ],
                }),
            c < r &&
                o < r &&
                i.jsxs(i.Fragment, {
                    children: [
                        i.jsx('div', { className: _c.gap }),
                        i.jsx('div', {
                            className: n(_c.bar, _c.bar__empty, _c.bar__last),
                            style: { width: r - Math.max(o, c) + '%' },
                        }),
                    ],
                }),
        ],
    });
}
const bc = 'TtcCrew_270e7733',
    xc = 'TtcCrew_titleColumn_78281294',
    gc = 'TtcCrew_ttcColumn_9115579c',
    fc = 'TtcCrew_ttcRow_2a9163ab',
    Nc = 'TtcCrew_name_a1f1eb7e',
    jc = 'TtcCrew_nameText_6a61cee0',
    yc = 'TtcCrew_amount_ed7c76e1',
    Cc = 'TtcCrew_progressBar_48de0078',
    kc = 'TtcCrew_crewTitle_a70b6855',
    wc = 'TtcCrew_crewBrackets_74968740',
    Ic = 'TtcCrew_crewAmount_7fb6cbca',
    Sc = 'TtcCrew_crewIcons_54c0985b',
    Tc = 'TtcCrew_crewIcon_9ffe1104',
    Mc = 'TtcCrew_crewIcon__plus_71e8955d';
function Pc({ roleName: e, plus: t, slotIndex: s, tankmanId: a }) {
    const r = P({
        args: { tooltipId: 'vehiclePreviewCrewMember', tooltipArgs: JSON.stringify({ slotIdx: s, tankmanID: a }) },
    });
    return i.jsx(E, { ...r, path: `tankmen.roles.ttc_crew.${e}${t ? '_plus' : ''}`, className: n(Tc, t && Mc) });
}
const Ec = a(function () {
        const e = x.resolve('intl'),
            { model: t } = xo(),
            s = t.crew.get(),
            a = t.computes.crewRoles(),
            r = kt().model.computes.columns();
        return i.jsxs('div', {
            className: bc,
            children: [
                i.jsxs('div', {
                    className: xc,
                    children: [
                        g(r, ({ header: e }, t) =>
                            i.jsx('div', { className: Nc, children: i.jsx(F, { text: e.name, className: jc }) }, t),
                        ),
                        i.jsx('div', {
                            className: kc,
                            children: i.jsx(C, {
                                path: 'vehicle_hub.overview.crew.name',
                                params: {
                                    amount: e.formatNumber('integral', s.length),
                                    classBracket: wc,
                                    classAmount: Ic,
                                },
                            }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: gc,
                    children: [
                        g(r, ({ header: t }, s) =>
                            i.jsxs(
                                'div',
                                {
                                    className: fc,
                                    children: [
                                        i.jsx(vc, {
                                            vehicleAmount: t.vehicleAmount,
                                            currentAmount: t.currentAmount,
                                            maxAmount: t.maxAmount,
                                            className: Cc,
                                        }),
                                        i.jsx('div', {
                                            className: yc,
                                            children: e.formatNumber('integral', t.currentAmount),
                                        }),
                                    ],
                                },
                                s,
                            ),
                        ),
                        i.jsx('div', {
                            className: Sc,
                            children: a.map((e, t) =>
                                i.jsx(
                                    Pc,
                                    { roleName: e.roleName, plus: e.plus, tankmanId: e.tankmanId, slotIndex: e.slotId },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        });
    }),
    Ac = {
        root: 'Overview_root_8249f573',
        sceneWrapper: 'Overview_sceneWrapper_c7ea5401',
        base: 'Overview_3677defd',
        mainContent: 'Overview_mainContent_b276d38',
        contentWrapper: 'Overview_contentWrapper_cecdb963',
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
        videoButton: 'Overview_videoButton_1ea36886',
        videoButtonIcon: 'Overview_videoButtonIcon_9062084b',
        videoButtonLabel: 'Overview_videoButtonLabel_ddc644f',
        vehicleBox: 'Overview_vehicleBox_9a822404',
        boxWithCoords: 'Overview_boxWithCoords_95133da',
    },
    Rc = x.resolve('sounds'),
    Oc = ae('VideoButton', Ac.videoButton);
function Bc({ children: e }) {
    const { api: t } = De(),
        [s, a] = Ve(t);
    return i.jsxs('div', {
        className: Ac.scrollContainer,
        children: [
            i.jsx($e, {
                classNames: {
                    wrapper: Ac.scrollWrapper,
                    content: n(Ac.scrollContent, Ac[`scrollContent__${No(s, a)}`]),
                },
                children: e,
            }),
            i.jsx(ze, { classNames: { base: Ac.verticalBar } }),
        ],
    });
}
const Lc = function () {
    const e = x.resolve('intl'),
        t = x.resolve('strings'),
        { controls: s } = ea(),
        { model: a, controls: r } = xo(),
        o = a.computes.mechanics().special[0],
        c = jt().model.tags.get().split(','),
        l = c.includes(Oe.special) || c.includes(Oe.premium) || c.includes(Oe.collectorVehicle),
        d = a.computes.mechanics().common.length > 0;
    return i.jsx('div', {
        className: Ac.base,
        children: i.jsxs('div', {
            className: Ac.mainContent,
            children: [
                i.jsx(xe, {
                    className: Ac.sceneWrapper,
                    moveSpace: s.sceneWrapper.onMoveSpace,
                    onMouseOver3dScene: s.sceneWrapper.onMouseOver3dScene,
                }),
                i.jsx(Si, { className: Ac.vehicleBox, classNames: { boxWithCoords: Ac.boxWithCoords } }),
                i.jsxs('div', {
                    className: Ac.contentWrapper,
                    children: [
                        o &&
                            i.jsxs(i.Fragment, {
                                children: [
                                    i.jsx(uc, { className: Ac.specialMechanic }),
                                    (d || !l) && i.jsx('div', { className: Ac.separator }),
                                ],
                            }),
                        i.jsx(Le, {
                            children: i.jsx(Bc, {
                                children: i.jsxs('div', {
                                    className: n(Ac.content, o && Ac.content__offset),
                                    children: [
                                        d &&
                                            i.jsxs(i.Fragment, {
                                                children: [
                                                    i.jsx(sc, { className: Ac.mechanics }),
                                                    !l && i.jsx('div', { className: Ac.separator }),
                                                ],
                                            }),
                                        l && i.jsx(Zo, {}),
                                        i.jsx(ec, { className: Ac.description }),
                                        i.jsx('div', { className: Ac.separator }),
                                        i.jsx(Ec, {}),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
                o &&
                    o.hasVideo &&
                    i.jsxs(Oc, {
                        onMouseEnter: () => {
                            Rc.play('highlight');
                        },
                        onClick: () => {
                            (Rc.play('play'), r.watchMechanicsVideo({ mechanicsName: o.id }));
                        },
                        children: [
                            i.jsx('div', { className: Ac.videoButtonIcon }),
                            i.jsx('div', {
                                className: Ac.videoButtonLabel,
                                children: e.toUpperCase(t.readOrEmpty('vehicle_hub.overview.mechanicsVideo.label')),
                            }),
                        ],
                    }),
            ],
        }),
    });
};
function Dc() {
    return i.jsx(bo, { options: { context: 'model.overviewModel' }, children: i.jsx(Lc, {}) });
}
const [Vc, $c] = u()(({ observableModel: e }) => {
        const t = {
                root: e.object(),
                specialMechanic: e.object('specialMechanic'),
                specialMechanicParams: e.arrayClone('specialMechanicParams'),
            },
            s = x.resolve('strings'),
            a = _.structural(() => {
                const { priority: e, rank: a, name: r } = t.specialMechanic.get();
                return {
                    name: r
                        ? s.readOr(`vehicle_hub.abilities.special.name.${r}`, () =>
                              s.readOrEmpty(`vehicle_hub.abilities.common.name.${r}`),
                          )
                        : void 0,
                    type: r,
                    mechanicPriority: e,
                    mechanicRank: a,
                };
            }),
            r = _.structural(() => {
                const { name: e } = t.specialMechanic.get();
                return g(t.specialMechanicParams.get(), (t) => {
                    const a = wt(t),
                        r = s.readOrEmpty(`vehicle_hub.specialCharacteristics.${e}.${a.type}`, 'silent');
                    return (r && (a.amount = r.replace('{{value}}', String(a.amount))), a);
                });
            });
        return { ...t, computes: { specialHeader: a, specialParams: r } };
    }, b),
    zc = { [Pe.extraSmall]: 30, [Pe.small]: 30, [Pe.medium]: 15, [Pe.large]: 48, [Pe.extraLarge]: 48 },
    Fc = { [Pe.extraSmall]: 20, [Pe.small]: 20, [Pe.medium]: 0, [Pe.large]: 0, [Pe.extraLarge]: 15 },
    Hc = { [Pe.extraSmall]: 15, [Pe.small]: 15, [Pe.medium]: 15, [Pe.large]: 15, [Pe.extraLarge]: 15 },
    Wc = { [Pe.extraSmall]: 300, [Pe.small]: 300, [Pe.medium]: 300, [Pe.large]: 364, [Pe.extraLarge]: 480 },
    Gc = { [Pe.extraSmall]: 270, [Pe.small]: 270, [Pe.medium]: 300, [Pe.large]: 414, [Pe.extraLarge]: 390 },
    Uc = { [Pe.extraSmall]: 280, [Pe.small]: 280, [Pe.medium]: 312, [Pe.large]: 392, [Pe.extraLarge]: 430 },
    Xc = r.createContext({ specialWidth: 0, commonWidth: 0, commonNarowlWidth: 0, gap: 0, enoughSpace: !1 });
function Kc(e, t, s, a) {
    const r = e ? Gc[s] : Wc[s],
        i = e ? Hc[s] : Fc[s],
        n = i * (t - 1) + (e ? i : 0),
        o = e ? Uc[s] : 0,
        c = a - 2 * zc[s];
    return {
        specialWidth: o,
        commonWidth: r,
        commonNarowlWidth: (c - o - n - r) / (t - 1),
        gap: i,
        enoughSpace: r * t + n + o <= c,
    };
}
function Zc({ children: e }) {
    const { breakpoint: t, screenWidthRem: s } = de(),
        a = $c(),
        n = kt().model.computes.columns(),
        o = Boolean(a.model.computes.specialHeader().type),
        [c, l] = r.useState(() => Kc(o, n.length, t.name, s));
    return (
        r.useEffect(() => {
            l(Kc(o, n.length, t.name, s));
        }, [s, t.name, o, n.length]),
        i.jsx(Xc.Provider, { value: c, children: e })
    );
}
function Yc() {
    const e = r.useContext(Xc);
    if (!e) throw new Error('useColumnsSize must be used within a ColumnsSizeProvider');
    return e;
}
const Jc = {
        base: 'TtcRow_fe3d6ce9',
        amounts: 'TtcRow_amounts_c53cc9e3',
        amountsSpecial: 'TtcRow_amountsSpecial_36e84de1',
        amounts__narrow: 'TtcRow_amounts__narrow_c53cc9e3',
        amount: 'TtcRow_amount_dc4ddd90',
        narrowContainer: 'TtcRow_narrowContainer_7375c812',
        slash: 'TtcRow_slash_ddbb818b',
        slash__amount: 'TtcRow_slash__amount_86b3162b',
        iconContainer: 'TtcRow_iconContainer_9ccada27',
        icon: 'TtcRow_icon_4cf3eded',
        name: 'TtcRow_name_2572ec7e',
    },
    qc = (e, t) => {
        const s = x.resolve('intl'),
            a = x.resolve('strings').readOr(t, () => '%(value)%s'),
            r = e
                .replace(/-?\d+(?:\.\d+)?/g, (e) => s.formatReal('woZeroDigits', Number(e)))
                .replace(/\//g, '{{@ class $classSecondary}}/{{/}}');
        return a.replace('%(value)%s', r);
    };
function Qc({ value: e, narrow: t, templatePath: s = '', className: a }) {
    const r = x.resolve('intl');
    if (Fe(e)) return i.jsx('span', { className: Jc.amount, children: r.formatReal('woZeroDigits', e) });
    if ('string' == typeof e)
        return i.jsx(
            Be,
            {
                className: n(Jc.amountsSpecial, a),
                text: qc(e, s),
                params: { classSecondary: n(Jc.slash, Jc.slash__amount) },
            },
            e,
        );
    if (Array.isArray(e)) {
        const s = e.slice(0, 5),
            a = x.resolve('strings').readOrEmpty('common.common.slash');
        return i.jsx('div', {
            className: n(Jc.amounts, t && Jc.amounts__narrow),
            children: s.map((e, t) =>
                i.jsxs(
                    m.Fragment,
                    {
                        children: [
                            i.jsx('span', {
                                className: Jc.amount,
                                'data-test-id': 'amountValue',
                                children: Fe(e) ? r.formatReal('woZeroDigits', e) : e,
                            }),
                            t < s.length - 1 &&
                                i.jsx('span', { className: n(Jc.slash, Jc.slash__amount), children: a }),
                        ],
                    },
                    t,
                ),
            ),
        });
    }
    console.error('Incorrect amount type is in TTCRow component');
}
function el({ value: e, measure: t = '' }) {
    const s = '' !== t ? ' ' + t : '';
    return 'string' == typeof e
        ? e.split('\n').map((e, t) => i.jsx(Be, { text: e + s, split: !0 }, t))
        : Array.isArray(e)
          ? i.jsx(i.Fragment, {
                children: e.map((t, a) =>
                    i.jsxs(
                        m.Fragment,
                        {
                            children: [
                                i.jsx('span', { children: t + (a === e.length - 1 && s) }),
                                a < e.length - 1 && i.jsx('span', { className: Jc.slash, children: '/' }),
                            ],
                        },
                        a,
                    ),
                ),
            })
          : void console.error('Incorrect name type is in TTCRow component');
}
const tl = 'TtcDivider_eb891d7d',
    sl = 'TtcDivider_base__narrow_92988388';
const al = {
        base: 'TtcHeader_9275bbc3',
        header: 'TtcHeader_header_766d9c80',
        icon: 'TtcHeader_icon_f5e541ab',
        name: 'TtcHeader_name_289f6f3',
    },
    rl = { x20x20: 'x20x20', x24x24: 'x24x24' };
function il({
    name: e,
    type: t,
    vehicleAmount: s,
    currentAmount: a,
    maxAmount: o,
    tooltipId: c,
    iconsPath: l = 'hangar.ttc.paramsType',
    className: d,
    classNames: h,
}) {
    const m = x.resolve('intl'),
        u = j({ iconSize: rl.x20x20 }, { large: { iconSize: rl.x24x24 } }),
        _ = x.resolve('aliases'),
        p = P({
            resId: _.read((e) => e.vehicle_hub.default.VehicleParams('resId')),
            args: r.useMemo(() => ({ tooltipId: c, paramId: t, extendedTooltip: !0 }), [t, c]),
        });
    return i.jsxs('div', {
        className: n(al.base, d),
        ...p,
        children: [
            i.jsxs('div', {
                className: al.header,
                children: [
                    i.jsx(E, { path: `${l}.${u.iconSize}.${t}`, className: n(al.icon, null == h ? void 0 : h.icon) }),
                    i.jsx('div', {
                        className: n(al.name, null == h ? void 0 : h.name),
                        children: i.jsx(F, { text: e, 'data-test-id': e }),
                    }),
                    i.jsx('div', { className: null == h ? void 0 : h.amount, children: m.formatNumber('integral', a) }),
                ],
            }),
            i.jsx(vc, {
                className: null == h ? void 0 : h.progressBar,
                vehicleAmount: s,
                currentAmount: a,
                maxAmount: o,
            }),
        ],
    });
}
const nl = 'TtcList_ff11812f',
    ol = r.forwardRef(function ({ className: e, ...t }, s) {
        return i.jsx('div', { ...t, ref: s, className: n(nl, e) });
    });
((ol.Header = il),
    (ol.Row = function ({
        name: e,
        type: t,
        amount: s,
        tooltipId: a,
        narrow: o = !1,
        templatePath: c = '',
        measure: l = '',
        iconPath: d = 'vehParams.small',
        className: h,
        classNames: m,
    }) {
        const u = x.resolve('aliases'),
            _ = P({
                resId: u.read((e) => e.vehicle_hub.default.VehicleParams('resId')),
                args: r.useMemo(() => ({ tooltipId: a, paramId: t, extendedTooltip: !0 }), [t, a]),
            });
        return i.jsxs('div', {
            className: n(Jc.base, h),
            'data-test-id': t,
            ..._,
            children: [
                i.jsxs('div', {
                    className: Jc.narrowContainer,
                    children: [
                        i.jsx(Qc, { value: s, narrow: o, templatePath: c, className: null == m ? void 0 : m.amount }),
                        i.jsx('div', {
                            className: Jc.iconContainer,
                            children: i.jsx(E, { path: `${d}.${t}`, className: Jc.icon }),
                        }),
                    ],
                }),
                !o && i.jsx('div', { className: Jc.name, children: i.jsx(el, { value: e, measure: l }) }),
            ],
        });
    }),
    (ol.Divider = function ({ narrow: e = !1, className: t }) {
        return i.jsx('div', { className: n(tl, e && sl, t) });
    }));
const cl = {
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
function ll({ children: e }) {
    const { api: t } = De(),
        [s, a] = Ve(t);
    return i.jsx($e, {
        className: cl.scrollArea,
        classNames: { content: n(cl.scrollContent, cl[`scrollContent__${No(s, a)}`]) },
        children: e,
    });
}
function dl({ narrow: e, header: t, characteristics: s, modifications: a, className: r }) {
    const { commonWidth: o, commonNarowlWidth: c, enoughSpace: l } = Yc();
    return i.jsx('div', {
        className: n(cl.base, l && cl.base__enoughSpace, e && cl.base__narrow, r),
        style: { '--width': `${o}rem`, '--widthNarrow': `${c}rem` },
        children: i.jsxs(ol, {
            className: cl.list,
            children: [
                i.jsx(il, { ...t, className: cl.header, classNames: { name: cl.headerName } }),
                i.jsx('div', {
                    className: cl.content,
                    children: i.jsxs(Le, {
                        children: [
                            i.jsx(ll, {
                                children: i.jsxs('div', {
                                    className: cl.listContent,
                                    children: [
                                        s &&
                                            s.map((e, t) =>
                                                i.jsx(
                                                    ol.Row,
                                                    {
                                                        name: e.name,
                                                        type: e.type,
                                                        amount: e.amount,
                                                        tooltipId: e.tooltipId,
                                                        narrow: !1,
                                                        className: cl.listRow,
                                                    },
                                                    t,
                                                ),
                                            ),
                                        a &&
                                            i.jsxs(i.Fragment, {
                                                children: [
                                                    i.jsx('div', {
                                                        className: cl.dividerRow,
                                                        children: i.jsx(ol.Divider, {
                                                            narrow: e,
                                                            className: cl.divider,
                                                        }),
                                                    }),
                                                    a.map((e, t) =>
                                                        i.jsx(
                                                            ol.Row,
                                                            {
                                                                name: e.name,
                                                                type: e.type,
                                                                amount: e.amount,
                                                                tooltipId: e.tooltipId,
                                                                narrow: !1,
                                                                className: cl.listRow,
                                                            },
                                                            t,
                                                        ),
                                                    ),
                                                ],
                                            }),
                                    ],
                                }),
                            }),
                            i.jsx(ze, { classNames: { base: cl.verticalBar } }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
const hl = {
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
        amount: 'TtcColumnSpecial_amount_74352fc4',
        description: 'TtcColumnSpecial_description_b0709233',
        descriptionIcon: 'TtcColumnSpecial_descriptionIcon_7bcf21ab',
        descriptionText: 'TtcColumnSpecial_descriptionText_45ec876c',
        descriptionTextLine: 'TtcColumnSpecial_descriptionTextLine_812592ff',
        descriptionTextLine__secondary: 'TtcColumnSpecial_descriptionTextLine__secondary_60f09503',
        secondaryTextLine: 'TtcColumnSpecial_secondaryTextLine_c4e8b8dc',
        wrapper: 'TtcColumnSpecial_wrapper_ae2ae6d9',
        verticalBar: 'TtcColumnSpecial_verticalBar_5bb30112',
    },
    ml = 'x68x68',
    ul = 'x96x96',
    _l = 'small',
    pl = 'large';
function vl({ children: e }) {
    const { api: t } = De(),
        [s, a] = Ve(t);
    return i.jsx($e, {
        className: hl.scrollArea,
        classNames: { content: n(hl.scrollContent, hl[`scrollContent__${No(s, a)}`]) },
        children: e,
    });
}
function bl({ name: e, type: t, priority: s, rank: a, characteristics: r, descriptionIcon: o, className: c }) {
    const { specialWidth: l } = Yc(),
        d = j({ iconSize: ml, glowSize: _l }, { large: { iconSize: ul, glowSize: pl } }),
        h = x.resolve('images'),
        m = s && a === gi.GOLD,
        u = m ? `vehicle_hub.mechanics.special.${d.iconSize}.${t}` : `vehicle_hub.mechanics.${d.iconSize}.${t}`,
        _ = x
            .resolve('strings')
            .readOrEmpty(`vehicle_hub.characteristics.abilities.special.description.${t}`)
            .split('\n');
    return i.jsx('div', {
        className: n(hl.base, c),
        style: { '--width': `${l}rem` },
        children: i.jsxs(ol, {
            className: hl.list,
            children: [
                i.jsxs('div', {
                    className: hl.header,
                    children: [
                        h.has(u) &&
                            i.jsxs('div', {
                                className: hl.iconContainer,
                                children: [
                                    m &&
                                        i.jsx(E, {
                                            path: `vehicle_hub.mechanics.special.glow_back_${d.glowSize}`,
                                            className: n(hl.glow, hl.glow__back),
                                        }),
                                    i.jsx(E, { path: u, className: hl.icon }),
                                    m &&
                                        i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx(E, {
                                                    path: `vehicle_hub.mechanics.special.dust_${d.glowSize}`,
                                                    className: hl.dust,
                                                }),
                                                i.jsx(E, {
                                                    path: `vehicle_hub.mechanics.special.glow_front_${d.glowSize}`,
                                                    className: n(hl.glow, hl.glow__front),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        i.jsx('div', { className: hl.title, children: e }),
                    ],
                }),
                i.jsx('div', {
                    className: hl.content,
                    children: i.jsxs(Le, {
                        children: [
                            i.jsxs(vl, {
                                children: [
                                    i.jsx('div', {
                                        className: hl.listContent,
                                        children:
                                            r &&
                                            r.map((e, t) =>
                                                i.jsx(
                                                    ol.Row,
                                                    {
                                                        name: e.name,
                                                        type: e.type,
                                                        amount: e.amount,
                                                        templatePath: e.templatePath,
                                                        measure: e.measure,
                                                        tooltipId: e.tooltipId,
                                                        className: hl.listRow,
                                                        classNames: { amount: hl.amount },
                                                    },
                                                    t,
                                                ),
                                            ),
                                    }),
                                    i.jsxs('div', {
                                        className: hl.description,
                                        children: [
                                            o && i.jsx(E, { path: o, className: hl.descriptionIcon }),
                                            i.jsx('div', {
                                                className: hl.descriptionText,
                                                children: _.map((e, t) =>
                                                    i.jsx(
                                                        Be,
                                                        {
                                                            split: !0,
                                                            className: n(
                                                                hl.descriptionTextLine,
                                                                jo(e) && hl.descriptionTextLine__secondary,
                                                            ),
                                                            text: e,
                                                            params: { classSecondary: hl.secondaryTextLine },
                                                        },
                                                        t,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            i.jsx(ze, { classNames: { base: hl.verticalBar } }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
const xl = 'Stats_6c5a71f3',
    gl = 'Stats_base__enoughSpace_d737aebe',
    fl = 'Stats_column_386905a7',
    Nl = 'Stats_glow_bc5fc822',
    jl = 'Stats_glow__narrow_23403efa',
    yl = x.resolve('sounds'),
    Cl = a(function () {
        const { model: e } = $c(),
            [t, s] = r.useState(0),
            a = kt().model.computes.columns(),
            o = e.computes.specialHeader(),
            c = e.computes.specialParams(),
            { gap: l, enoughSpace: d } = Yc();
        return i.jsxs('div', {
            className: n(xl, d && gl),
            children: [
                o.type &&
                    Boolean(o.mechanicPriority) &&
                    i.jsx(bl, {
                        name: o.name,
                        type: o.type,
                        priority: o.mechanicPriority,
                        rank: o.mechanicRank,
                        characteristics: c,
                    }),
                g(a, (e, a) => {
                    const r = !d && t !== a;
                    return i.jsxs(
                        'div',
                        {
                            className: fl,
                            onMouseEnter: () => {
                                r && (yl.play('gui_characteristics_highlight'), s(a));
                            },
                            style: { '--gap': `${l}rem` },
                            children: [
                                i.jsx('div', { className: n(Nl, (d || r) && jl) }),
                                i.jsx(dl, {
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
function kl() {
    return i.jsx(Vc, { options: { context: 'model.statsModel' }, children: i.jsx(Zc, { children: i.jsx(Cl, {}) }) });
}
const wl = He({
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
    Il = { base: 'Prestige_c70f8f74', vanity: 'Prestige_vanity_658350a8' };
function Sl() {
    return i.jsxs('div', {
        className: Il.base,
        children: [
            i.jsx('div', { className: Il.vanity, children: i.jsx(ct, {}) }),
            i.jsx('div', { className: Il.progression, children: i.jsx(lt, {}) }),
        ],
    });
}
const Tl = 'Progression_2e5f6a7',
    Ml = 'Progression_entryPointLine_736c2a7d',
    Pl = 'Progression_tree_cd53c03';
function El() {
    return i.jsxs('div', {
        className: Tl,
        children: [
            i.jsx('div', { className: Pl, children: i.jsx(dt, {}) }),
            i.jsx('div', { className: Ml, children: i.jsx(ht, {}) }),
        ],
    });
}
const Al = 420,
    Rl = 570;
function Ol(e) {
    return { duration: 'opacity' === e ? Al : Rl };
}
const Bl = { config: { easing: We.easeInOutCirc } },
    Ll = {
        tree: {
            tree: {
                from: { opacity: '0', transform: 'translate(-100%)' },
                to: { opacity: '1', transform: 'translate(0%)' },
                config: Ol,
            },
            prestige: {
                from: { opacity: '1', transform: 'translate(0%)' },
                to: { opacity: '0', transform: 'translate(100%)' },
                config: Ol,
            },
        },
        prestige: {
            tree: {
                from: { opacity: '1', transform: 'translate(0%)' },
                to: { opacity: '0', transform: 'translate(-100%)' },
                config: Ol,
            },
            prestige: {
                from: { opacity: '0', transform: 'translate(100%)' },
                to: { opacity: '1', transform: 'translate(0%)' },
                config: Ol,
            },
        },
    },
    Dl = {
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
    Vl = a(() => {
        const { model: e } = mt(),
            t = Ge(),
            s = oe(),
            a = Ue();
        function r(e) {
            (t.push(ta.vehSkillTree + `/${e}`),
                s.play('click', { target: 'changeScreen' }),
                s.play('click', { target: 'select' }));
        }
        const c = e.locationId.get(),
            [d] = o(() => ({ from: Ll[c].tree.from, to: Ll[c].tree.to, initConfig: Bl, immediate: a }), [c, a]),
            [h] = o(() => ({ from: Ll[c].prestige.from, to: Ll[c].prestige.to, initConfig: Bl, immediate: a }), [c, a]);
        return i.jsx('div', {
            className: n(Dl.base, Dl[`base__${c}`]),
            children: i.jsxs('div', {
                className: Dl.content,
                children: [
                    i.jsxs(l.div, {
                        className: Dl.progression,
                        style: d,
                        children: [
                            i.jsx(ut, {
                                options: m.useMemo(() => ({ context: 'model.vehSkillTreeModel.tree' }), []),
                                children: i.jsxs('div', {
                                    className: Dl.progressionContent,
                                    children: [
                                        i.jsx(El, {}),
                                        i.jsx('div', {
                                            className: Dl.progressionEntryPoint,
                                            children: i.jsx(_t, { onClick: () => r('prestige') }),
                                        }),
                                    ],
                                }),
                            }),
                            i.jsx(pt, {
                                options: m.useMemo(() => ({ context: 'model.vehSkillTreeModel.tree' }), []),
                                children: i.jsx(vt, {}),
                            }),
                        ],
                    }),
                    i.jsx(bt, {
                        options: m.useMemo(() => ({ context: 'model.vehSkillTreeModel.prestige' }), []),
                        children: i.jsxs(l.div, {
                            className: Dl.prestigeContent,
                            style: h,
                            children: [
                                i.jsxs('div', {
                                    className: Dl.prestigeEntryPoint,
                                    children: [
                                        i.jsx('div', { className: Dl.prestigeEntryPointBg }),
                                        i.jsx(_t, { onClick: () => r('tree'), vanity: !0 }),
                                    ],
                                }),
                                i.jsx(Sl, {}),
                            ],
                        }),
                    }),
                ],
            }),
        });
    });
function $l() {
    return i.jsx(xt, {
        options: { context: 'model.vehSkillTreeModel' },
        children: i.jsx(ge, { overrides: wl, children: i.jsx(Vl, {}) }),
    });
}
const zl = {
        root: 'Page_root_fefb19c8',
        base: 'Page_7668a217',
        base__stats: 'Page_base__stats_822895b4',
        base__armor: 'Page_base__armor_98641d97',
        base__vehSkillTree: 'Page_base__vehSkillTree_49486bd8',
        content: 'Page_content_5abb0e8f',
        screenContent: 'Page_screenContent_a3ab0fac',
        tabNavigation: 'Page_tabNavigation_5f2e33b1',
        vehicleInfo: 'Page_vehicleInfo_92516112',
        researchPurchaseControl: 'Page_researchPurchaseControl_471abc56',
    },
    Fl = [Js, 'modules', 'vehSkillTree'],
    Hl = { context: 'model.comparisonModel' },
    Wl = { context: 'model.researchPurchaseModel' },
    Gl = a(function () {
        var e;
        const { model: t } = ea(),
            s = Ge(),
            a = (null == (e = Xe(s.location, { paths: [`${ta.root}/:tab`] })) ? void 0 : e.params.tab) ?? Js,
            o = r.useCallback(
                (e) => {
                    t.menuItems.get().findIndex((t) => t.id === e) > -1 && s.push(`${ta.root}/${e}`);
                },
                [t.menuItems, s],
            ),
            { tabsAdaptive: c } = j(
                { tabsAdaptive: Qe.small },
                { medium: { tabsAdaptive: Qe.medium }, large: { tabsAdaptive: Qe.large } },
            );
        return (
            Ke(et.ESCAPE, () => {
                s.goBack();
            }),
            Ke(et.ARROW_RIGHT, () => {
                var e;
                const s = t.menuItems.get().findIndex((e) => e.id === a),
                    r =
                        s > -1 &&
                        s + 1 < t.menuItems.get().length &&
                        (null == (e = t.menuItems.get()[s + 1]) ? void 0 : e.id);
                r && o(r);
            }),
            Ke(et.ARROW_LEFT, () => {
                var e;
                const s = t.menuItems.get().findIndex((e) => e.id === a),
                    r = s > 0 && (null == (e = t.menuItems.get()[s - 1]) ? void 0 : e.id);
                r && o(r);
            }),
            r.useLayoutEffect(() => {
                Ze(!0);
            }),
            i.jsx('div', {
                className: n(zl.base, zl[`base__${a}`]),
                children: i.jsxs('div', {
                    className: zl.content,
                    children: [
                        i.jsxs('div', {
                            className: zl.screenContent,
                            children: [
                                i.jsx(Ss, {
                                    tabsList: t.menuItems.get(),
                                    activeTab: a,
                                    onActiveChange: o,
                                    theme: Ye.primary,
                                    size: c,
                                    className: zl.tabNavigation,
                                }),
                                i.jsxs(Je, {
                                    children: [
                                        i.jsx(qe, { path: ta.overview, component: Dc }),
                                        i.jsx(qe, { path: ta.modules, component: vo }),
                                        i.jsx(qe, { path: ta.stats, component: kl }),
                                        i.jsx(qe, { path: ta.armor, component: bi }),
                                        i.jsx(qe, { path: ta.vehSkillTree, component: $l }),
                                    ],
                                }),
                            ],
                        }),
                        i.jsx(Et, { options: Hl, children: i.jsx(Ys, { className: zl.vehicleInfo }) }),
                        Fl.includes(a) &&
                            i.jsx(Mt, { options: Wl, children: i.jsx(fs, { className: zl.researchPurchaseControl }) }),
                    ],
                }),
            })
        );
    }),
    Ul = 'App_fac56ab6';
function Xl() {
    return i.jsx('div', { className: Ul, children: i.jsx(Gl, {}) });
}
const Kl = x.resolve('aliases'),
    Zl = { 'mouse-enter': rt('highlightx'), click: rt('tabs') };
it(
    new tt()
        .add(st)
        .addWithProps(at, { context: 'model.router' })
        .addWithProps(Nt, { options: { context: 'model.vehicleInfoModel' } })
        .addWithProps(Ct, { options: { rootId: Kl.read((e) => e.vehicle_hub.default.VehicleParams('resId')) } })
        .addWithProps(gt, { options: { rootId: Kl.read((e) => e.vehicle_hub.default.Wallet('resId')) } })
        .addWithProps(ge, { overrides: Zl })
        .add(Qs)
        .render(i.jsx(Xl, {})),
    { fullScreen: !0 },
).then(() => Ze(!1));
