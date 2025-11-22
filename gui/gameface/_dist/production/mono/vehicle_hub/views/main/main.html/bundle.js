var e = Object.defineProperty,
    t = (t, s, a) =>
        ((t, s, a) => (s in t ? e(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[s] = a)))(
            t,
            'symbol' != typeof s ? s + '' : s,
            a,
        );
import { _ as s, x as a, r, j as i, e as n, o, f as c, R as l, l as d, m as h } from '../../../chunks/vendor.js';
import {
    i as m,
    c as u,
    a as _,
    b as p,
    n as v,
    r as b,
    m as x,
    D as g,
    u as f,
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
    I as M,
    l as E,
    o as A,
    p as O,
    q as L,
    B,
    s as V,
    t as z,
    v as $,
    T as D,
    w as F,
    x as H,
    y as W,
    z as U,
    A as G,
    E as X,
    G as Z,
    V as K,
    W as Y,
    H as q,
    R as J,
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
    aD as Je,
} from '../../../chunks/lib.js';
import {
    V as Qe,
    P as et,
    T as tt,
    E as st,
    u as at,
    a as rt,
    b as it,
    F as nt,
    c as ot,
    d as ct,
    M as lt,
} from '../../../chunks/entry_point.js';
import '../../../chunks/node_model.js';
const [dt, ht] = m('WalletModel')(
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
    [mt, ut] = m()(
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
    _t = b.resolve('strings'),
    [pt, vt] = m()(({ observableModel: e }) => {
        const t = { groups: e.arrayClone('groups') },
            s = u.structural(() =>
                x(t.groups.get(), ({ id: e, tooltipID: t, indicator: s, params: a, extraParams: r }) => ({
                    id: e,
                    header: gt(e, t, s),
                    characteristics: xt(a),
                    modifications: xt(r),
                })),
            );
        return { ...t, computes: { columns: s } };
    }, v);
function bt({ id: e, value: t, name: a, tooltipID: r, template: i, measureUnit: n }) {
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
    return { type: e, tooltipId: r, templatePath: i, amount: o.length > 1 ? o : o[0], name: ft(e, c), measure: n };
}
function xt(e) {
    const t = x(e, bt);
    return t.length > 0 ? t : void 0;
}
function gt(e, t, s) {
    return {
        name: _t.readOrEmpty(`menu.tank_params.${e}`),
        type: e,
        vehicleAmount: s.markerValue,
        maxAmount: s.maxValue,
        currentAmount: s.value,
        tooltipId: t,
    };
}
function ft(e, { key: t, name: s }) {
    return '' !== s && '' !== t
        ? _t.readOr(`tank_setup.kpi.bonus.ttc.${t}.${s}`, () => _t.readOrEmpty(`tank_setup.kpi.bonus.${t}.${s}`))
        : _t.readOrEmpty(`menu.tank_params.${e}`);
}
const [Nt, jt] = m()(
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
                a = u.primitive(() => t.combatXp.get() + t.freeXp.get());
            return { ...t, computes: { totalXp: a, isPremium: u.primitive(() => s.elite.get() || s.premium.get()) } };
        },
        ({ externalModel: e }) => ({
            action: e.createCallback((e) => ({ action: e }), 'onAction'),
            blueprintAction: e.createCallbackNoArgs('onBlueprint'),
        }),
    ),
    [yt, Ct] = m()(
        ({ observableModel: e }) => ({ ...e.primitives(['status']) }),
        ({ externalModel: e }) => ({ addToComparison: e.createCallbackNoArgs('onAddToComparison') }),
    ),
    wt = 'action_research',
    Tt = 'action_purchase',
    St = 'action_purchase_shop',
    It = 'action_restore',
    Pt = 'action_in_garage',
    kt = 'action_state_enabled',
    Mt = 'readyForTradeIn',
    Et = {
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
    Rt = a(function ({ className: e }) {
        const t = b.resolve('intl'),
            { model: s } = jt(),
            a = s.action.get(),
            o = s.actionStateReason.get(),
            c = s.oldPrice.get(),
            l = s.price.get(),
            d = s.currency.get(),
            h = s.priceDiscount.get(),
            m = a === wt ? g.colors.blue : g.colors.red,
            u = s.promoFinishTime.get(),
            _ = r.useRef(),
            [p, v] = r.useState(0);
        (r.useLayoutEffect(() => {
            const e = Math.max(u - Math.floor(Date.now() / I), 0);
            if ((v(e), !(e <= 0)))
                return ((_.current = setTimeout(() => v(0), 1e3 * (e + 1))), () => clearTimeout(_.current));
        }, [u]),
            f(() => clearTimeout(_.current)));
        const x = N(
            { currencySize: j.sizes.small, discountSize: g.sizes.medium },
            { medium: { currencySize: j.sizes.large, discountSize: g.sizes.large } },
        );
        return i.jsxs('div', {
            className: n(Et.priceBlock, e),
            children: [
                c > 0 && c !== l && i.jsx('div', { className: Et.oldPrice, children: t.formatNumber('integral', c) }),
                i.jsxs(j, {
                    type: d,
                    size: x.currencySize,
                    enough: 'notEnoughCredits' !== o && 'notEnoughXp' !== o,
                    className: Et.priceContainer,
                    reverse: !0,
                    children: [
                        h > 0 &&
                            i.jsxs('div', {
                                className: Et.discountContainer,
                                children: [
                                    i.jsx(g, {
                                        color: m,
                                        size: x.discountSize,
                                        className: n(Et.discount, a === wt && Et.discount__research),
                                        children: t.formatNumber('integral', -h),
                                    }),
                                    a !== Mt &&
                                        p > 0 &&
                                        i.jsx('div', {
                                            className: n(Et.discountTimer, Et[`discountTimer__color-${m}`]),
                                            children: i.jsx(y, {
                                                path: 'vehicle_hub.researchPurchase.discountTimer',
                                                params: { date: C(u, T(p).days > 0 ? w.ShortDate : w.ShortTime) },
                                            }),
                                        }),
                                ],
                            }),
                        i.jsx('div', { className: Et.price, children: S(l, d) }),
                    ],
                }),
            ],
        });
    }),
    At = 'TradeInLabel_8e59d58a',
    Ot = 'TradeInLabel_icon_370a8f6b';
function Lt() {
    const e = b.resolve('strings'),
        t = P('vehicle_hub.research_purchase.trade_in', 'vehicle_hub.research_purchase.trade_in_big'),
        s = k({ args: r.useMemo(() => ({ tooltipId: 'tradeInInfo' }), []) });
    return i.jsxs('div', {
        ...s,
        className: At,
        children: [i.jsx(M, { className: Ot, path: t }), e.readOrEmpty('tooltips.vehicle.trade')],
    });
}
const Bt = 'VehicleExperience_54fa17d7',
    Vt = 'VehicleExperience_row_4f00afbf',
    zt = 'VehicleExperience_label_452b09a4',
    $t = 'VehicleExperience_experience_718161f',
    Dt = 'VehicleExperience_dots_2b70188e',
    Ft = a(function ({ className: e }) {
        const t = b.resolve('intl'),
            s = b.resolve('strings'),
            { model: a } = jt(),
            r = a.combatXp.get(),
            o = a.computes.totalXp(),
            c = a.computes.isPremium();
        return i.jsxs('div', {
            className: n(Bt, e),
            children: [
                i.jsxs('div', {
                    className: Vt,
                    children: [
                        i.jsx('div', { className: zt, children: s.readOrEmpty('session_stats.label.gamingXp') }),
                        i.jsx('div', { className: Dt }),
                        i.jsx(j, {
                            type: c ? j.types.eliteXp : j.types.tankXP,
                            size: j.sizes.extraSmall,
                            reverse: !0,
                            children: i.jsx('div', { className: $t, children: t.formatNumber('integral', r) }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: Vt,
                    children: [
                        i.jsx('div', { className: zt, children: s.readOrEmpty('session_stats.label.totalXp') }),
                        i.jsx('div', { className: Dt }),
                        i.jsx(j, {
                            type: j.types.custom,
                            size: j.sizes.extraSmall,
                            imagePath: c
                                ? 'vehicle_hub.research_purchase.total_experience_elite'
                                : 'vehicle_hub.research_purchase.total_experience',
                            reverse: !0,
                            children: i.jsx('div', { className: $t, children: t.formatNumber('integral', o) }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Ht = 'ResearchPurchaseControl_fce6cc10',
    Wt = 'ResearchPurchaseControl_priceBlock_b9fd7559',
    Ut = 'ResearchPurchaseControl_controls_9dac55a2',
    Gt = 'ResearchPurchaseControl_controls__rent_35316773',
    Xt = 'ResearchPurchaseControl_actionButton_d5574927',
    Zt = 'ResearchPurchaseControl_buttonContent_11e8b840',
    Kt = 'ResearchPurchaseControl_buttonContent__blueprintAssembled_bd87c171',
    Yt = 'ResearchPurchaseControl_base__inGarage_32499cd8',
    qt = 'ResearchPurchaseControl_purchaseShopButton_1d51e5f2',
    Jt = 'ResearchPurchaseControl_recoveryUntil_6b79fd3b',
    Qt = 'ResearchPurchaseControl_garageButton_60f5bbd3',
    es = 'ResearchPurchaseControl_blueprintGarageButton_32499cd8',
    ts = 'ResearchPurchaseControl_garageIcon_7a613811',
    ss = 'ResearchPurchaseControl_blueprintIcon_a923cdd9',
    as = 'ResearchPurchaseControl_blueprintTotal_7c0becbb',
    rs = 'ResearchPurchaseControl_experienceBlock_cd2e5ad7',
    is = 'ResearchPurchaseControl_experienceBlock__rent_35316773',
    ns = 'ResearchPurchaseControl_experienceBlock__topOffset_8a525c2',
    os = 'ResearchPurchaseControl_experienceBlock__bottomOffset_b7ecf008',
    cs = [Pt, It, St];
function ls({ actionType: e }) {
    const t = b.resolve('strings');
    switch (e) {
        case wt:
            return t.readOrEmpty('menu.unlocks.unlockButton');
        case Tt:
            return t.readOrEmpty('menu.research.labels.button.buy');
        case St:
            return i.jsxs(i.Fragment, {
                children: [
                    i.jsx(M, { path: 'vehicle_hub.research_purchase.purchase_shop', className: qt }),
                    t.readOrEmpty('vehicle_preview.buyingPanel.buyBtn.label.buy'),
                ],
            });
        case It:
            return t.readOrEmpty('menu.research.labels.button.restore');
        case Mt:
            return t.readOrEmpty('hangar.buyVehicleWindow.tradeInBtnLabel');
        default:
            return void console.error(`ResearchPurchaseControl_Action: met unexpected action ${e}`);
    }
}
function ds({ blueprintFragments: e, blueprintTotal: t }) {
    const s = b.resolve('strings');
    return e === t
        ? i.jsxs(i.Fragment, {
              children: [
                  i.jsx(M, { path: 'vehicle_hub.research_purchase.blueprint_assembled', className: ss }),
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
                      className: as,
                      upgradeLegacy: !0,
                  }),
              ],
          });
}
const hs = a(function ({ className: e }) {
        const t = b.resolve('strings'),
            { model: s, controls: a } = jt(),
            { model: o } = ut(),
            c = s.action.get(),
            l = s.timeLeft.get(),
            d = s.cooldownTimeLeft.get(),
            h = s.notInShopVehicle.get(),
            m = s.actionState.get(),
            u = s.actionStateReason.get(),
            _ = s.blueprintFragments.get(),
            p = s.blueprintTotal.get(),
            v = s.canTradeIn.get(),
            x = E(z(d), V.compact),
            g = r.useMemo(() => C(Date.now() / I + l, T(l).days > 0 ? w.FullDate : w.ShortTime), [l]),
            f = A({
                header: u ? t.readOrEmpty(`tooltips.vehiclePreview.buyButton.${u}.header`) : void 0,
                body: u
                    ? O(L(t.readOrEmpty(`tooltips.vehiclePreview.buyButton.${u}.body`)), {
                          timeLeft: x.items.join(' '),
                      })
                    : void 0,
            }),
            j = (function (e, t) {
                const s = b.resolve('strings'),
                    a = A({
                        header: s.readOrEmpty('tooltips.blueprint.VehicleBlueprintTooltip.vehicleUnlocked.header'),
                        body: s.readOrEmpty('tooltips.blueprint.VehicleBlueprintTooltip.vehicleUnlocked.body'),
                    }),
                    i = r.useMemo(() => [t], [t]),
                    n = $('blueprintInfo', i);
                return e !== wt ? a : n;
            })(c, o.vehicleId.get()),
            S = N(
                { buttonSize: B.sizes.extraSmall, recoveryButtonSize: B.sizes.small },
                { small: { buttonSize: B.sizes.small }, medium: { recoveryButtonSize: B.sizes.large } },
            );
        if (h && !cs.includes(c)) return;
        const P = _ === p;
        return i.jsx('div', {
            className: n(Ht, c === Pt && Yt, e),
            children: (() => {
                switch (c) {
                    case Pt:
                        return i.jsxs(i.Fragment, {
                            children: [
                                s.combatXp.get() > 0 && i.jsx(Ft, { className: n(rs, os) }),
                                i.jsxs('div', {
                                    className: Ut,
                                    children: [
                                        i.jsxs(B, {
                                            theme: B.themes.secondary,
                                            size: S.buttonSize,
                                            className: Qt,
                                            classNames: { content: Zt },
                                            onClick: () => a.action(c),
                                            children: [
                                                i.jsx('div', { className: ts }),
                                                t.readOrEmpty('menu.research.labels.button.showInHangar'),
                                            ],
                                        }),
                                        p > 0 &&
                                            i.jsx(B, {
                                                ...j,
                                                theme: B.themes.secondary,
                                                size: S.buttonSize,
                                                onClick: () => {
                                                    (j.onClick(), a.blueprintAction());
                                                },
                                                className: es,
                                                classNames: { content: n(Zt, P && Kt) },
                                                children: i.jsx(ds, { blueprintFragments: _, blueprintTotal: p }),
                                            }),
                                    ],
                                }),
                            ],
                        });
                    case 'action_purchase_can_view_in_garage':
                        return i.jsxs(i.Fragment, {
                            children: [
                                i.jsx(Rt, { className: Wt }),
                                i.jsxs('div', {
                                    className: n(Ut, Gt),
                                    children: [
                                        i.jsx(B, {
                                            ...(u && f),
                                            theme: B.themes.primary,
                                            size: S.recoveryButtonSize,
                                            className: Xt,
                                            classNames: { content: Zt },
                                            disabled: m !== kt,
                                            onClick: () => {
                                                m === kt && (u && (null == f || f.onClick()), a.action(Tt));
                                            },
                                            children: i.jsx(ls, { actionType: Tt }),
                                        }),
                                        i.jsxs(B, {
                                            theme: B.themes.secondary,
                                            size: S.recoveryButtonSize,
                                            classNames: { content: Zt },
                                            onClick: () => a.action(Pt),
                                            children: [
                                                i.jsx('div', { className: ts }),
                                                t.readOrEmpty('menu.research.labels.button.showInHangar'),
                                            ],
                                        }),
                                    ],
                                }),
                                s.combatXp.get() > 0 && i.jsx(Ft, { className: n(rs, ns, is) }),
                            ],
                        });
                    case wt:
                    case Tt:
                    case St:
                    case It:
                    case Mt:
                        return i.jsxs(i.Fragment, {
                            children: [
                                c !== St && i.jsx(Rt, { className: Wt }),
                                i.jsxs('div', {
                                    className: Ut,
                                    children: [
                                        i.jsx(B, {
                                            ...(u && f),
                                            theme: B.themes.primary,
                                            size: S.recoveryButtonSize,
                                            className: Xt,
                                            classNames: { content: Zt },
                                            disabled: m !== kt,
                                            onClick: () => {
                                                m === kt && (u && (null == f || f.onClick()), a.action(c));
                                            },
                                            children: i.jsx(ls, { actionType: c }),
                                        }),
                                        p > 0 &&
                                            i.jsx(B, {
                                                ...j,
                                                theme: B.themes.secondary,
                                                size: S.recoveryButtonSize,
                                                className: Xt,
                                                onClick: () => {
                                                    (j.onClick(), a.blueprintAction());
                                                },
                                                classNames: { content: n(Zt, P && Kt) },
                                                children: i.jsx(ds, { blueprintFragments: _, blueprintTotal: p }),
                                            }),
                                        c === It &&
                                            !h &&
                                            i.jsx('div', {
                                                className: Jt,
                                                children: i.jsx(y, {
                                                    path: 'vehicle_hub.researchPurchase.recover',
                                                    params: { date: g },
                                                }),
                                            }),
                                        v && i.jsx(Lt, {}),
                                    ],
                                }),
                                s.combatXp.get() > 0 && i.jsx(Ft, { className: n(rs, ns) }),
                            ],
                        });
                    default:
                        console.error(`RestorePurchaseControl error: got unhandled action ${c}`);
                }
            })(),
        });
    }),
    ms = {
        base: 'VehicleHubTab_41897c7c',
        tab: 'VehicleHubTab_tab_d12e2d0b',
        content: 'VehicleHubTab_content_562b0c6',
        bubble: 'VehicleHubTab_bubble_90a22cab',
    };
function us({ id: e, label: t, counter: s, className: a }) {
    const r = b.resolve('intl'),
        o = N({ size: U.small }, { large: { size: U.medium } });
    return i.jsxs('div', {
        className: n(ms.base, a),
        children: [
            i.jsx(D.Tab, {
                tabId: e,
                classNames: { base: ms.tab, content: ms.content },
                children: i.jsx(F, { text: r.toUpperCase(t) }),
            }),
            i.jsx(H.Root, {
                hidden: 0 === s,
                children: i.jsx(H.Icon, { size: o.size, type: W.bubble, className: ms.bubble }),
            }),
        ],
    });
}
const _s = 'TabsNavigation_tabsNavigation_f7e0f60f',
    ps = 'TabsNavigation_switcher_bdc43d73',
    vs = 'TabsNavigation_outerBorder_66e2c4c4',
    bs = 'TabsNavigation_mainBorder_1ed0bb59',
    xs = 'TabsNavigation_content_7ea34759';
function gs({ tabsList: e, activeTab: t, className: s, ...a }) {
    return i.jsx('div', {
        className: n(_s, s),
        children: i.jsx(D, {
            ...a,
            active: t,
            children: i.jsx(D.Switcher, {
                classNames: { base: ps, outerBorder: vs, mainBorder: bs, content: xs },
                children: e.map((e) => i.jsx(us, { id: e.id, label: e.label, counter: e.counter }, e.id)),
            }),
        }),
    });
}
const fs = 'enabled',
    Ns = 'VehicleInfo_47f4ed8c',
    js = 'VehicleInfo_flag_5ec44a26',
    ys = 'VehicleInfo_level_e071b40b',
    Cs = 'VehicleInfo_type_3740e975',
    ws = 'VehicleInfo_name_a6f9c3ff',
    Ts = 'VehicleInfo_name__premium_ac75a868',
    Ss = 'VehicleInfo_additionalInfo_96947fa6',
    Is = 'VehicleInfo_role_dbc46b2d',
    Ps = 'VehicleInfo_roleIcon_918ece55',
    ks = 'VehicleInfo_roleLabel_32656129',
    Ms = 'VehicleInfo_comparison_606a8b9b',
    Es = 'VehicleInfo_rent_1732f1f0',
    Rs = 'VehicleInfo_rentLabel_33c8aaa',
    As = 'VehicleInfo_rentCounter_771ad73b',
    Os = 'VehicleInfo_rentIcon_1d418163',
    Ls = { [G.lightTank]: 'LT', [G.mediumTank]: 'MT', [G.heavyTank]: 'HT', [G.SPG]: 'SPG', [G['AT-SPG']]: 'ATSPG' },
    Bs = 'x60x45',
    Vs = 'x40x30',
    zs = [Y, q.spg];
const $s = {
        [Q.RENTAL_IS_OVER]: 'rentalIsOver',
        [Q.WOT_PLUS_EXCLUSIVE_VEHICLE_DISABLED]: 'subscriptionSuspended',
        [Q.SUBSCRIPTION_SUSPENDED]: 'subscriptionSuspended',
    },
    Ds = a(function (e) {
        const t = b.resolve('strings'),
            { model: s } = ut(),
            a = Ct(),
            o = s.type.get(),
            c = s.vehicleId.get(),
            l = X(s.role.get()),
            d = (function (e, t) {
                if (void 0 === e || t === Y) return;
                const s = Ls[e];
                return e === G.SPG ? `role_${s}` : `role_${s}_${t}`;
            })(o, l),
            h = a.model.status.get(),
            m = s.state.get(),
            u = s.rentLeftTime.get(),
            _ = s.rentLeftWins.get(),
            p = s.rentLeftBattles.get(),
            v = s.nation.get(),
            x = s.longName.get(),
            g = s.shortName.get(),
            f = x.length > 36 ? g : x,
            j = Z(
                'vehicleRoles',
                r.useMemo(() => [c], [c]),
            ),
            C = A(
                (() => {
                    switch (h) {
                        case fs:
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
                { roleSize: K.Role.sizes.x16x16, flagSize: Vs },
                { medium: { roleSize: K.Role.sizes.x24x24, flagSize: Bs } },
            );
        return i.jsxs('div', {
            className: n(Ns, e.className),
            children: [
                i.jsxs(K, {
                    children: [
                        i.jsx(M, { path: `flags.${w.flagSize}.${v}`, className: js }),
                        i.jsx(K.Level, { value: s.level.get(), className: ys }),
                        o &&
                            i.jsx(K.Type, {
                                type: o,
                                size: K.Type.sizes.x64x64,
                                premium: s.elite.get(),
                                className: Cs,
                            }),
                        i.jsx(K.Name, { className: n(ws, s.premium.get() && Ts), children: f }),
                        i.jsx(B, {
                            ...C,
                            theme: B.themes.secondary,
                            size: B.sizes.extraSmall,
                            onClick: a.controls.addToComparison,
                            className: Ms,
                            autoAlignContent: !1,
                            disabled: h !== fs,
                            children: i.jsx(M, { path: 'vehicle_hub.comparison', width: '20rem', height: '20rem' }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: Ss,
                    children: [
                        l !== Y &&
                            i.jsxs('div', {
                                ...j,
                                className: Is,
                                children: [
                                    !zs.includes(l) &&
                                        i.jsx(K.Role, { size: w.roleSize, roleKey: l, classNames: { base: Ps } }),
                                    d &&
                                        i.jsx('div', {
                                            className: ks,
                                            children: i.jsx(y, {
                                                upgradeLegacy: !0,
                                                path: `menu.roleExp.roleName.${d}`,
                                                params: { groupName: t.readOrEmpty(`menu.roleExp.roleGroupName.${d}`) },
                                            }),
                                        }),
                                ],
                            }),
                        i.jsx(J, {
                            className: Es,
                            children: (() => {
                                switch (m) {
                                    case Q.RENTAL_IS_OVER:
                                    case Q.WOT_PLUS_EXCLUSIVE_VEHICLE_DISABLED:
                                    case Q.SUBSCRIPTION_SUSPENDED:
                                        return i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx(ee, { className: Os }),
                                                i.jsx('div', {
                                                    className: Rs,
                                                    children: t.readOrEmpty(`vehicle_hub.vehicleState.${$s[m]}`),
                                                }),
                                            ],
                                        });
                                    default:
                                        if (s.fromWotPlus.get() || (u <= 0 && p <= 0 && _ <= 0)) return;
                                        return i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx('div', {
                                                    className: Rs,
                                                    children: t.readOrEmpty('subscription.rentButton.label'),
                                                }),
                                                i.jsx(J.ShortCounter, {
                                                    classNames: { text: As, icon: Os },
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
    Fs = 'overview',
    Hs = b.resolve('strings'),
    [Ws, Us] = m()(
        ({ observableModel: e }) => ({
            ...{
                root: e.object(),
                researchPurchase: e.object('researchPurchaseModel'),
                menuItems: e.transform(
                    (e) =>
                        x(e, (e) => ({
                            id: e.tabName,
                            label: Hs.readOrEmpty(`vehicle_hub.tabs.${e.tabName}`),
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
    Gs = {
        root: '/vehicleHub',
        overview: '/vehicleHub/overview',
        modules: '/vehicleHub/modules',
        vehSkillTree: '/vehicleHub/vehSkillTree',
        stats: '/vehicleHub/stats',
        armor: '/vehicleHub/armor',
    },
    Xs = 'ArmorMeterValue_armor_c708c6a5',
    Zs = 'ArmorMeterValue_overlay_67fa364',
    Ks = 'ArmorMeterValue_disabled_b9c2da32',
    Ys = 'ArmorMeterValue_e0f8b036',
    qs = 'ArmorMeterValue_values_edf27e48',
    Js = r.memo(function ({ leftValue: e, rightValue: t, color: s, overlay: a, isActive: r }) {
        return i.jsxs('div', {
            className: Ys,
            style: { backgroundColor: s },
            children: [
                !r && i.jsx('div', { className: Ks }),
                i.jsx('div', { className: Xs }),
                a && i.jsx('div', { className: Zs, style: { backgroundImage: `url(${a})` } }),
                i.jsxs('div', {
                    className: qs,
                    children: [i.jsx('div', { children: e }), i.jsx('div', { children: t })],
                }),
            ],
        });
    }),
    Qs = 'ArmorMeter_header_a0a3e4bf',
    ea = 'ArmorMeter_title_655b1c9f',
    ta = 'ArmorMeter_meter_bdbfcfac',
    sa = 'ArmorMeter_units_3e886a55',
    aa = b.resolve('strings'),
    ra = function ({ title: e, className: t, armorValues: s, gradient: a }) {
        const r = (100 * (s.length - 1)) / s.length;
        return i.jsxs('div', {
            className: t,
            children: [
                i.jsxs('div', {
                    className: Qs,
                    children: [
                        i.jsx(F, { text: e, className: ea }),
                        i.jsx('div', {
                            className: sa,
                            children: aa.readOrEmpty('armor_inspector.armorValues.title.values'),
                        }),
                    ],
                }),
                i.jsx('div', {
                    className: ta,
                    style: { background: `url(${a}) left center / ${r}% 100% no-repeat` },
                    children: s.map((e, t) => i.jsx(Js, { ...e }, t)),
                }),
            ],
        });
    };
const ia = {
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
    na = 50,
    oa = new RegExp('\\{([A-Za-z][A-Za-z0-9_]*)_Open\\}(.*?)\\{\\1_Close\\}((?:[,;:.!?，；：。？！] ?)| )?', 'gs'),
    ca = b.resolve('strings'),
    la = b.resolve('images');
function da({ text: e, tooltipId: t, punctuation: s, onMouseEnter: a, onMouseLeave: n }) {
    const o = r.useRef(null),
        c = (function ({ alert: e, body: t, header: s, note: a, onMouseEnter: i, onMouseLeave: n }) {
            const o = A({ alert: e, body: t, header: s, note: a });
            return r.useMemo(
                () => ({
                    onMouseEnter: (e) => {
                        (null == i || i(e), o.onMouseEnter(e));
                    },
                    onMouseLeave: () => {
                        (null == n || n(), o.onMouseLeave());
                    },
                    onClick: o.onClick,
                }),
                [o, i, n],
            );
        })({
            body: ca.readOrEmpty(`armor_inspector.explanatory.tooltips.${t}.body`),
            onMouseEnter: a,
            onMouseLeave: n,
        }),
        l = (e) => {
            (o.current && clearTimeout(o.current), null === o.current && c.onMouseEnter(e));
        },
        d = (e) => {
            o.current = setTimeout(() => {
                (c.onMouseLeave(), (o.current = null));
            }, na);
        },
        h = R.strings.settings.LANGUAGE_CODE().toLowerCase(),
        m = ne(e, h);
    return oe(m, h, (e, t) =>
        i.jsxs(
            'span',
            {
                children: [
                    i.jsx('span', {
                        className: ia.highlightedWords,
                        onMouseEnter: l,
                        onMouseLeave: d,
                        onClick: c.onClick,
                        children: e,
                    }),
                    m.length - 1 === t && s && i.jsx('span', { children: s }),
                ],
            },
            `${e}_${t}`,
        ),
    );
}
function ha({
    linkButtonLabel: e,
    onLinkButtonPressed: t,
    onLegendClicked: s,
    onLegendTooltipOpened: a,
    onLegendTooltipClosed: o,
}) {
    const [c, l] = r.useState(false),
        { api: d } = te(),
        h = N({ value: se.small }, { medium: { value: se.medium } }),
        m = (e) => {
            let t = e;
            const s = {};
            return (
                [...e.matchAll(oa)].forEach((e, r) => {
                    const n = e[0],
                        c = e[1],
                        l = e[3],
                        d = e[2],
                        h = `matched_${r}`;
                    ((s[h] = i.jsx(da, {
                        text: d,
                        tooltipId: c,
                        punctuation: l,
                        onMouseEnter: () => (null == a ? void 0 : a(c)),
                        onMouseLeave: () => (null == o ? void 0 : o(c)),
                    })),
                        (t = t.replace(n, `{{${h}}}`)));
                }),
                { text: t, binding: s }
            );
        },
        u = m(ca.readOrEmpty('armor_inspector.explanatory.nominal.description')),
        _ = m(ca.readOrEmpty('armor_inspector.explanatory.angle.description')),
        p = m(ca.readOrEmpty('armor_inspector.explanatory.effective.description')),
        v = m(ca.readOrEmpty('armor_inspector.explanatory.note.description'));
    return i.jsxs(ae, {
        opened: c,
        className: ia.base,
        children: [
            i.jsxs(ae.Summary, {
                scrollable: !0,
                onClick: () => {
                    l((e) => {
                        const t = !e;
                        return (null == s || s(t), t);
                    });
                },
                children: [
                    i.jsx('div', {
                        className: ia.header,
                        children: ca.readOrEmpty('armor_inspector.explanatory.header'),
                    }),
                    i.jsx(ae.Arrow, {
                        style: { backgroundImage: `url(${la.readOrEmpty('lobby.armor_inspector.arrow_accordion')})` },
                        className: n(ia.arrow, c && ia.arrow__opened),
                    }),
                ],
            }),
            i.jsxs(ae.AnimatedDetails, {
                opened: c,
                animationSettings: { onRest: d.recalculateContent },
                className: ia.details,
                children: [
                    i.jsxs('div', {
                        className: ia.section,
                        children: [
                            i.jsx('div', { className: n(ia.image, ia.image__nominal) }),
                            i.jsxs('div', {
                                className: ia.info,
                                children: [
                                    i.jsx('div', {
                                        className: ia.header,
                                        children: ca.readOrEmpty('armor_inspector.explanatory.nominal.header'),
                                    }),
                                    i.jsx(re, {
                                        className: ia.text,
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
                        className: ia.section,
                        children: [
                            i.jsx('div', { className: n(ia.image, ia.image__angle) }),
                            i.jsxs('div', {
                                className: ia.info,
                                children: [
                                    i.jsx('div', {
                                        className: ia.header,
                                        children: ca.readOrEmpty('armor_inspector.explanatory.angle.header'),
                                    }),
                                    i.jsx(re, {
                                        className: ia.text,
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
                        className: ia.section,
                        children: [
                            i.jsx('div', { className: n(ia.image, ia.image__effective) }),
                            i.jsxs('div', {
                                className: ia.info,
                                children: [
                                    i.jsx('div', {
                                        className: ia.header,
                                        children: ca.readOrEmpty('armor_inspector.explanatory.effective.header'),
                                    }),
                                    i.jsx(re, {
                                        className: ia.text,
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
                        className: ia.noteHeader,
                        children: [
                            i.jsx('div', { className: ia.note }),
                            i.jsx('div', {
                                className: ia.header,
                                children: ca.readOrEmpty('armor_inspector.explanatory.note.header'),
                            }),
                        ],
                    }),
                    v.text
                        .split('\n')
                        .map((e, t) =>
                            i.jsx(
                                re,
                                { className: ia.text, text: e, params: v.binding, split: !0, fullSize: !0 },
                                `${e}_${t}`,
                            ),
                        ),
                    e &&
                        i.jsxs('div', {
                            className: ia.guide,
                            children: [
                                i.jsx('div', {
                                    className: ia.text,
                                    children: ca.readOrEmpty('armor_inspector.explanatory.guide'),
                                }),
                                i.jsx('div', {
                                    className: ia.buttons,
                                    children: i.jsx(B, {
                                        onClick: t,
                                        theme: ie.secondary,
                                        size: h.value,
                                        children: i.jsxs('div', {
                                            className: ia.button,
                                            children: [i.jsx('div', { className: ia.video }), e],
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
const ma = {
        root: 'ScrollContainer_root_14e26b7c',
        base: 'ScrollContainer_9b1bf0d9',
        base__top: 'ScrollContainer_base__top_1b8e4a94',
        base__bottom: 'ScrollContainer_base__bottom_a417efd7',
        base__both: 'ScrollContainer_base__both_3ad63038',
    },
    ua = 'top',
    _a = 'bottom',
    pa = 'both',
    va = 'none';
const ba = a(function ({ children: e }) {
        const { api: t } = te(),
            [s, a] = ce(t);
        return i.jsx(le, {
            className: n(ma.base, ma[`base__${((r = s), (o = a), r || o ? (r ? (o ? va : _a) : ua) : pa)}`]),
            children: e,
        });
        var r, o;
    }),
    xa = 'Separator_1dc887a0',
    ga = 'Separator_noise_ee3f6dd1';
function fa({ className: e }) {
    return i.jsx('div', { className: n(xa, e), children: i.jsx('div', { className: n(ga) }) });
}
const [Na, ja] = m()(
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
    ya = {
        base: 'Armor_219d401',
        content: 'Armor_content_8491786b',
        armor: 'Armor_97cd97c7',
        armor__spaced: 'Armor_armor__spaced_b89a3d1a',
        separator: 'Armor_separator_f6f91a52',
        legend: 'Armor_legend_68159cba',
        sceneWrapper: 'Armor_sceneWrapper_c36410b4',
    },
    Ca = b.resolve('strings'),
    wa = a(function () {
        const { controls: e } = Us(),
            { model: t, controls: s } = ja(),
            a = s.legend;
        return i.jsxs('div', {
            className: ya.base,
            children: [
                i.jsx(de, {
                    className: ya.sceneWrapper,
                    moveSpace: e.sceneWrapper.onMoveSpace,
                    onMouseOver3dScene: e.sceneWrapper.onMouseOver3dScene,
                }),
                i.jsxs('div', {
                    className: ya.content,
                    children: [
                        i.jsx(ra, {
                            className: ya.armor,
                            title: Ca.readOrEmpty('armor_inspector.armorValues.title.main'),
                            armorValues: t.mainArmor.get(),
                            gradient: t.mainGradient.get(),
                        }),
                        i.jsx(ra, {
                            className: n(ya.armor, ya.armor__spaced),
                            title: Ca.readOrEmpty('armor_inspector.armorValues.title.spaced'),
                            armorValues: t.spacedArmor.get(),
                            gradient: t.spacedGradient.get(),
                        }),
                        i.jsx(fa, { className: ya.separator }),
                        i.jsx('div', {
                            className: ya.legend,
                            children: i.jsxs(he, {
                                children: [
                                    i.jsx(ba, {
                                        children: i.jsx(ha, {
                                            linkButtonLabel: t.linkButtonLabel.get(),
                                            onLinkButtonPressed: s.linkButtonPressed,
                                            onLegendClicked: a.click,
                                            onLegendTooltipOpened: a.tooltipOpen,
                                            onLegendTooltipClosed: a.tooltipClose,
                                        }),
                                    }),
                                    i.jsx(me, { classNames: { base: ya.verticalBar } }),
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        });
    });
function Ta() {
    return i.jsx(Na, { options: { context: 'model.armorModel' }, children: i.jsx(ue, { children: i.jsx(wa, {}) }) });
}
var Sa = ((e) => (
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
))(Sa || {});
const Ia = {
        [Sa.AUTO_SHOOT_GUN]: 10,
        [Sa.MAGAZINE_GUN]: 20,
        [Sa.AUTO_LOADER_GUN]: 30,
        [Sa.AUTO_LOADER_GUN_BOOST]: 40,
        [Sa.DAMAGE_MUTABLE]: 50,
        [Sa.DUAL_GUN]: 60,
        [Sa.DUAL_ACCURACY]: 70,
        [Sa.HYDRAULIC_CHASSIS]: 80,
        [Sa.TRACK_WITHIN_TRACK]: 90,
        [Sa.TWIN_GUN]: 100,
        [Sa.SIEGE_MODE]: 110,
        [Sa.STUN]: 120,
        [Sa.HYDRAULIC_WHEELED_CHASSIS]: 130,
        [Sa.TURBOSHAFT_ENGINE]: 140,
        [Sa.ROCKET_ACCELERATION]: 150,
    },
    [Pa, ka] = m()(
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
                    return s ? _e(s.mechanics, (e, t) => Ia[e.name] - Ia[t.name]) : [];
                }),
                a = u.primitive((e) => {
                    const s = t.researchItems.get(e);
                    return (
                        !(!s || 0 === s.path.length) &&
                        pe(s.path, (e) => {
                            const s = t.researchItems.get(e);
                            return !!s && !s.isResearched;
                        })
                    );
                }),
                r = u.model((e) => {
                    var s;
                    return ve((null == (s = t.researchItems.get(e)) ? void 0 : s.urgentIds) ?? [], (e) => {
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
                n = u.primitive((e) => be(r(t.selectedId.get()), e)),
                c = u.primitive((e) => be(r(t.hoveredId.get()), e));
            return {
                ...t,
                computes: {
                    mechanics: s,
                    isDisabled: a,
                    getUrgent: r,
                    getUrgentNames: i,
                    isUrgentSelected: n,
                    isUrgentHover: c,
                },
            };
        },
        ({ externalModel: e, model: t }) => {
            const s = c((e) => {
                    t.fieldModificationHover.set(e);
                }),
                a = c((e) => {
                    t.selectedId.set(e);
                }),
                r = c((e) => {
                    t.hoveredId.set(e);
                }),
                i = c(() => t.hoveredId.set(0));
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
    [Ma, Ea] = m()(
        ({ observableModel: e }) => ({ ...e.primitives(['state', 'counter']) }),
        ({ externalModel: e }) => ({ openPostProgression: e.createCallbackNoArgs('onVehiclePostProgression') }),
    ),
    Ra = {
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
    Aa = xe('FieldModificationButton', {
        element: B,
        className: n(Ra.button, Ra.button__secondary, Ra.button__enabled),
        cva: { variants: { locked: { true: Ra.button__locked, false: Ra.button__unlocked } } },
    });
const Oa = a(function ({ className: e }) {
        const t = b.resolve('strings'),
            s = b.resolve('views'),
            { model: a, controls: r } = Ea(),
            { model: o, controls: c } = ka(),
            l = a.state.get(),
            d = o.currentResearchItems.get()[0],
            h = d ? o.researchItems.get(d.id) : void 0,
            m = ge({ contentId: s.read((e) => e.lobby.tooltips.VehPostProgressionEntryPointTooltip('resId')) });
        const u = N(
            { buttonSize: B.sizes.small, bubbleSize: U.small },
            { large: { buttonSize: B.sizes.large, bubbleSize: U.medium } },
        );
        var _, p;
        if (0 !== l)
            return i.jsxs('div', {
                className: n(Ra.base, e),
                children: [
                    i.jsxs(Aa, {
                        theme: B.themes.secondary,
                        size: u.buttonSize,
                        classNames: { background: Ra.background, overlay: Ra.overlay, content: Ra.content },
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
                            i.jsx('div', { className: Ra.icon }),
                            t.readOrEmpty('vehicle_hub.modules.controls.button.field_modification'),
                        ],
                    }),
                    i.jsx('div', { className: n(Ra.lock, 1 === l && Ra.lock__visible) }),
                    i.jsx('div', { className: n(Ra.corners, 1 === l && Ra.corners__locked) }),
                    i.jsx(H.Root, {
                        hidden: 0 === a.counter.get(),
                        className: Ra.bubble,
                        children: i.jsx(H.Icon, { size: u.bubbleSize, type: W.bubble }),
                    }),
                    h &&
                        i.jsx('div', {
                            className: Ra.descriptionContainer,
                            children: i.jsx('div', {
                                className: n(
                                    Ra.description,
                                    1 === l && o.fieldModificationHover.get() && Ra.description__visible,
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
    La = 'Control_6fe95751',
    Ba = 'Control_topContainer_5fe23b14',
    Va = 'Control_fieldModification_9434b7fa',
    za = 'Control_separator_523d2573',
    $a = 'Control_descriptor_6451bfc5',
    Da = 'Control_controls_c1ed063f',
    Fa = 'Control_info_76cccc17',
    Ha = 'Control_currency_6bfd0c7d',
    Wa = 'Control_name_91f33520',
    Ua = 'Control_moduleName_b5e482cd',
    Ga = 'Control_secondaryButton_e863701f',
    Xa = b.resolve('strings'),
    Za = 'researched',
    Ka = 'vehicleInBattle',
    Ya = 'eliteVehicle',
    qa = 'disableVehicle',
    Ja = 'moduleMounted',
    Qa = 'disableModule',
    er = 'buyVehicle',
    tr = 'buyAndInstall',
    sr = 'research',
    ar = 'mount',
    rr = 'enabled',
    ir = 'battle',
    nr = 'damaged',
    or = 'prebattle',
    cr = 'incompatible',
    lr = 'notEnoughCurrency',
    dr = 'notEnoughXP',
    hr = 'wgmDisabled',
    mr = [ar, tr],
    ur = [Q.DAMAGED, Q.EXPLODED, Q.DESTROYED];
function _r(e, t) {
    switch (e) {
        case rr:
            return;
        case hr:
            return {
                body: Xa.readOrEmpty('tooltips.vehiclePreview.buyButton.walletUnavailable.body'),
                header: Xa.readOrEmpty('tooltips.vehiclePreview.buyButton.walletUnavailable.header'),
            };
        case lr:
            return {
                body: Xa.readOrEmpty('tooltips.vehiclePreview.buyButton.notEnoughCredits.body'),
                header: Xa.readOrEmpty('tooltips.vehiclePreview.buyButton.notEnoughCredits.header'),
            };
        case dr:
            return {
                body: Xa.readOrEmpty('tooltips.researchPage.module.status.notEnoughXP.text'),
                header: Xa.readOrEmpty('tooltips.researchPage.module.status.notEnoughXP.header'),
            };
        case ir:
            return { body: Xa.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.battle') };
        case nr:
            return { body: Xa.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.damaged') };
        case or:
            return { body: Xa.readOrEmpty('vehicle_hub.modules.controls.button.tooltip.disableReason.prebattle') };
        case cr: {
            const e = Xa.readOrEmpty('vehicle_hub.modules.name.separator'),
                s = t.map((e) => Xa.readOrEmpty(`vehicle_hub.modules.name.${e}`));
            return {
                body: fe('vehicle_hub.modules.controls.button.tooltip.disableReason.incompatible', {
                    module: s.join(e),
                }),
            };
        }
        default:
            return void console.error('Unknown button state: ', e);
    }
}
const pr = a(function () {
        var e;
        const { model: t, controls: s } = ka(),
            a = ut().model,
            { model: r } = ht(),
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
                    if (r.isInstalled) return Ja;
                    if (t) return Ya;
                    if (!(null == a ? void 0 : a.isResearched)) return qa;
                    if (i && !r.isResearched) return Qa;
                    if (a.isResearched && !a.isInInventory && r.isResearched) return er;
                } else {
                    if (e) return Ya;
                    if (s) return Ka;
                    if (!(null == a ? void 0 : a.isResearched)) return qa;
                    if (a.isResearched) return Za;
                }
            })(a.elite.get(), a.premium.get(), o === Q.BATTLE, c, d, t.computes.isDisabled(l)),
            p = d
                ? (function (e) {
                      return e.isResearched
                          ? e.isInInventory
                              ? e.isInstalled
                                  ? void console.error('buttonTypes is not defined')
                                  : ar
                              : tr
                          : sr;
                  })(d)
                : void 0,
            v = (function (e, t, s, a, r, i) {
                const n = e && mr.includes(e);
                return s
                    ? e === sr && r
                        ? dr
                        : n
                          ? t.length > 0
                              ? cr
                              : i === Q.BATTLE
                                ? ir
                                : i && ur.includes(i)
                                  ? nr
                                  : i === Q.IN_PREBATTLE
                                    ? or
                                    : e === tr && a
                                      ? lr
                                      : rr
                          : rr
                    : hr;
            })(p, t.computes.getUrgentNames(l), h, m, u, o),
            b = v !== rr,
            x = A({ ..._r(v, t.computes.getUrgentNames(l)) }),
            g = N(
                { currency: j.sizes.small, button: B.sizes.small },
                { medium: { currency: j.sizes.medium, button: B.sizes.large }, large: { currency: j.sizes.large } },
            );
        return i.jsxs('div', {
            className: La,
            children: [
                i.jsxs('div', {
                    className: Ba,
                    children: [i.jsx(Oa, { className: Va }), i.jsx('div', { className: za })],
                }),
                _
                    ? i.jsx('div', {
                          className: $a,
                          children: Xa.readOrEmpty(`vehicle_hub.modules.controls.descriptor.${_}`),
                      })
                    : i.jsxs('div', {
                          className: Da,
                          children: [
                              d &&
                                  i.jsxs('div', {
                                      className: Fa,
                                      children: [
                                          p !== ar &&
                                              i.jsx(j, {
                                                  className: Ha,
                                                  type: d.isResearched ? j.types.credits : j.types.tankXP,
                                                  size: g.currency,
                                                  reverse: !0,
                                                  children: d.isResearched ? d.priceAmount : d.requiredXp,
                                              }),
                                          i.jsx(y, {
                                              className: Wa,
                                              path: 'vehicle_hub.modules.controls.name',
                                              params: { name: d.userName, classModuleName: Ua },
                                          }),
                                      ],
                                  }),
                              p === ar &&
                                  i.jsx('div', {
                                      ...(v === hr && x),
                                      children: i.jsx(B, {
                                          theme: B.themes.secondary,
                                          size: g.button,
                                          className: Ga,
                                          disabled: !h,
                                          onClick: function () {
                                              h && s.sellItem(l);
                                          },
                                          children: Xa.readOrEmpty('vehicle_hub.modules.controls.button.sell'),
                                      }),
                                  }),
                              i.jsx('div', {
                                  ...(b && x),
                                  children: i.jsx(B, {
                                      theme: B.themes.primary,
                                      size: g.button,
                                      onClick: function () {
                                          if (!b)
                                              switch (p) {
                                                  case sr:
                                                      return s.unlockItem(l);
                                                  case ar:
                                                      return s.installItem(l);
                                                  case tr:
                                                      return s.buyAndInstallItem(l);
                                                  default:
                                                      console.error(`buttonType is not correct by id item ${l}`);
                                              }
                                      },
                                      disabled: b,
                                      children: Xa.readOrEmpty(`vehicle_hub.modules.controls.button.${p}`),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    }),
    vr = {
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
    br = b.resolve('images'),
    xr = b.resolve('sounds'),
    gr = 'small',
    fr = 'large',
    Nr = 'default',
    jr = 'locked',
    yr = 'disabled',
    Cr = 'mounted',
    wr = 'default',
    Tr = 'selected',
    Sr = 'pressed',
    Ir = xe('Module', vr.base, {
        variants: {
            state: {
                default: vr.base__default,
                locked: vr.base__locked,
                disabled: vr.base__disabled,
                mounted: vr.base__mounted,
            },
            status: { default: vr.base__default, selected: vr.base__selected, pressed: vr.base__pressed },
            hover: { true: vr.base__hover },
            withPrice: { true: vr.base__withPrice },
            withLongPrice: { true: vr.base__withLongPrice },
        },
    }),
    Pr = (e, t) => (e ? Sr : t ? Tr : wr),
    kr = a(function ({ id: e }) {
        const [t, s] = r.useState(!1),
            [a, n] = r.useState(!1),
            { model: o, controls: c } = ka(),
            l = ut().model.vehicleId.get(),
            d = o.researchItems.get(e),
            h = o.researchItems.get(l),
            m = o.computes.isUrgentSelected(e),
            u = o.computes.isUrgentHover(e),
            _ = o.fieldModificationHover.get() && !d.isResearched,
            p =
                ((v = o.computes.isDisabled(e)),
                (b = d.isInstalled),
                (g = d.isInInventory),
                (f = d.isResearched),
                (y = h.isResearched && !h.isInInventory && d.isResearched),
                v && !f ? yr : b ? Cr : (g && f) || y ? Nr : jr);
        var v, b, g, f, y;
        const C = ((e, t, s, a) => !(e !== jr && e !== yr) && (s || (!a && !t)))(
                p,
                d.autoUnlocked,
                h.isInInventory,
                d.isResearched,
            ),
            w = N({ size: gr }, { large: { size: fr } }),
            T = d.isResearched ? d.priceAmount : d.requiredXp,
            S = C && String(T).length >= (w.size === gr ? 5 : 7);
        return (
            r.useEffect(() => {
                if (t) return Ne.up(() => s(!1));
            }, [t]),
            d
                ? i.jsxs(Ir, {
                      state: p,
                      status: Pr(t, o.selectedId.get() === e),
                      hover: a || _,
                      withPrice: C,
                      withLongPrice: S,
                      onClick: function () {
                          (xr.play('play'), c.setSelectedID(e));
                      },
                      onMouseDown: function () {
                          s(!0);
                      },
                      onMouseEnter: function () {
                          (n(!0), xr.play('highlight'), c.setHoverID(e));
                      },
                      onMouseLeave: function () {
                          (n(!1), c.clearUrgentHover());
                      },
                      children: [
                          i.jsxs('div', {
                              className: vr.background,
                              children: [
                                  i.jsx('div', { className: vr.frame }),
                                  i.jsx('div', { className: vr.check }),
                                  (m || u) && i.jsx('div', { className: vr.urgent }),
                                  i.jsx('div', { className: vr.hover }),
                              ],
                          }),
                          i.jsx('div', {
                              className: vr.icon,
                              style: {
                                  backgroundImage: `url(${br.readOrEmpty(`modules.${((I = d.image), (P = w.size), P === gr ? I : I + 'Big')}`)})`,
                              },
                          }),
                          p === yr && i.jsx('div', { className: vr.disabledPattern }),
                          i.jsx(K.Level, { className: vr.level, value: d.level }),
                          C &&
                              i.jsx(j, {
                                  className: vr.price,
                                  type: d.isResearched ? j.types.credits : j.types.tankXP,
                                  size: j.sizes.extraSmall,
                                  reverse: !0,
                                  children: T,
                              }),
                          i.jsx('div', { className: vr.name, children: i.jsx(F, { text: d.userName }) }),
                          i.jsx('div', {
                              className: vr.mechanics,
                              children: x(o.computes.mechanics(e), (e) =>
                                  i.jsx(
                                      'div',
                                      {
                                          className: vr.mechanic,
                                          style: {
                                              backgroundImage: `url(${br.readOrEmpty(`vehicle_hub.mechanics.x20x20.${e.name}`)})`,
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
    Mr = a(function ({ id: e }) {
        const { model: t } = ka(),
            s = ut().model,
            a = t.researchItems.get(e),
            n = s.vehicleId.get(),
            o = t.computes.getUrgent(e).length > 0,
            c = je(
                'researchItem',
                r.useMemo(
                    () => ({ nodeCD: e, rootCD: n, nodeState: null == a ? void 0 : a.state, hasUrgent: o }),
                    [e, n, null == a ? void 0 : a.state, o],
                ),
                { disabled: !1 },
            ),
            l = k({ args: r.useMemo(() => ({ nodeCD: e, tooltipId: 'techtreeModule' }), [e]) });
        return i.jsx('div', { ...c, 'data-test-id': e, ...l, children: i.jsx(kr, { id: e }) });
    }),
    Er = {
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
    Rr = b.resolve('images'),
    Ar = b.resolve('sounds'),
    Or = 'default',
    Lr = 'locked',
    Br = 'disabled',
    Vr = 'inGarage',
    zr = xe('Vehicle', Er.base, {
        variants: {
            state: {
                default: Er.base__default,
                locked: Er.base__locked,
                disabled: Er.base__disabled,
                inGarage: Er.base__inGarage,
            },
            hover: { true: Er.base__hover },
        },
    });
const $r = a(function ({ id: e, isPrevNode: t = !1 }) {
        const [s, a] = r.useState(!1),
            { model: o, controls: c } = ka(),
            l = o.researchItems.get(e),
            d = o.fieldModificationHover.get() && !t && !l.isResearched,
            h = (function (e) {
                if (e && p(e)) return e;
            })(l.primaryClass),
            m = ((u = l.isDisabled), (_ = l.isInInventory), (v = l.isResearched), _ ? Vr : v ? Or : u ? Br : Lr);
        var u, _, v;
        const b = l.isResearched ? l.priceAmount : l.requiredXp,
            x = b > 0 || l.isDiscountedPrice || l.isDiscountedXp;
        return l
            ? i.jsxs(zr, {
                  hover: s || d,
                  state: m,
                  onMouseEnter: () => {
                      (Ar.play('highlight'), a(!0));
                  },
                  onMouseLeave: () => {
                      a(!1);
                  },
                  onClick: () => {
                      (Ar.play('play'), c.changeVehicle(e));
                  },
                  children: [
                      i.jsx('div', { className: Er.vignette }),
                      i.jsx('div', { className: Er.hover }),
                      i.jsx('div', {
                          className: n(
                              Er.outsideHoverFrame,
                              Er.outsideHoverFrame__top,
                              d && Er.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              Er.outsideHoverFrame,
                              Er.outsideHoverFrame__bottom,
                              d && Er.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              Er.outsideHoverFrame,
                              Er.outsideHoverFrame__left,
                              d && Er.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: n(
                              Er.outsideHoverFrame,
                              Er.outsideHoverFrame__right,
                              d && Er.outsideHoverFrame__visible,
                          ),
                      }),
                      i.jsx('div', {
                          className: Er.icon,
                          style: { backgroundImage: `url(${Rr.readOrEmpty(`vehicle.x190x152.${ye(l.image)}`)})` },
                      }),
                      m === Br && i.jsx('div', { className: Er.disabled }),
                      i.jsxs('div', {
                          className: Er.tankInfo,
                          children: [
                              i.jsx(K.Level, { className: Er.level, value: l.level }),
                              h && i.jsx(K.Type, { type: h, size: K.Type.sizes.x24x24, premium: l.isElite }),
                          ],
                      }),
                      m === Vr && i.jsx('div', { className: Er.garageIcon }),
                      i.jsxs('div', {
                          className: Er.description,
                          children: [
                              m === Vr &&
                                  l.earnedXp > 0 &&
                                  i.jsx(j, {
                                      className: Er.exp,
                                      type: j.types.tankXP,
                                      size: j.sizes.extraSmall,
                                      reverse: !0,
                                      children: l.earnedXp,
                                  }),
                              i.jsx('div', { className: Er.name, children: i.jsx(F, { text: l.userName }) }),
                              (m === Or || m === Lr || m === Br) &&
                                  i.jsxs('div', {
                                      className: n(
                                          Er.price,
                                          l.isDiscountedPrice && Er.price__discountedCredits,
                                          l.isDiscountedXp && Er.price__discountedXp,
                                      ),
                                      children: [
                                          x &&
                                              i.jsx(j, {
                                                  className: Er.currency,
                                                  type: l.isResearched ? j.types.credits : j.types.tankXP,
                                                  size: j.sizes.extraSmall,
                                                  reverse: !0,
                                                  children: b,
                                              }),
                                          (l.isDiscountedPrice || l.isDiscountedXp) &&
                                              i.jsx('div', {
                                                  className: Er.discountWrapper,
                                                  children: i.jsx('div', { className: Er.discount }),
                                              }),
                                      ],
                                  }),
                          ],
                      }),
                  ],
              })
            : null;
    }),
    Dr = a(function ({ id: e, isPrevNode: t = !1 }) {
        const { model: s } = ka(),
            a = s.researchItems.get(e),
            n = k({ args: r.useMemo(() => ({ vehCD: e, tooltipId: 'techtreeVehicle', topLevel: t }), [e]) }),
            o = je(
                'researchVehicle',
                r.useMemo(() => ({ vehCD: e, nodeState: a.state, newCM: !1 }), [a.state, e]),
                { disabled: !1 },
            );
        return i.jsx('div', { ...o, ...n, children: i.jsx($r, { id: e, isPrevNode: t }) });
    });
function Fr({ id: e, isPrevNode: t = !1 }) {
    const { model: s } = ka(),
        a = s.researchItems.get(e);
    switch (null == a ? void 0 : a.renderer) {
        case 'item':
            return i.jsx(Mr, { id: e });
        case 'vehicle':
            return i.jsx(Dr, { isPrevNode: t, id: e });
        default:
            return null;
    }
}
const Hr = { [Ie.extraLarge]: 40, [Ie.large]: 40, [Ie.medium]: 28, [Ie.small]: 28, [Ie.extraSmall]: 28 },
    Wr = function ({ lines: e, cellSize: t, classNames: s }) {
        const a = new Set(),
            n = Ce(),
            [o, c] = r.useState(we()),
            [l, d] = r.useMemo(
                () => [{ width: Te(t.width), height: Te(t.height) }, Te(Hr[n.breakpoint.name])],
                [o, t.width, t.height, n.breakpoint.name],
            );
        return (
            r.useEffect(() => Se(() => c(we())), []),
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
                    return (
                        a.has(c) ? (m = `${r},${s} ${h}`) : (a.add(c), (m = `${c} ${h}`)),
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
    Ur = 'PrevResearchTree_afc1dfc0',
    Gr = 'PrevResearchTree_researchItem_aa96ef47',
    Xr = 'PrevResearchTree_treeLines_1da899c9',
    Zr = { [Ie.extraLarge]: 208, [Ie.large]: 208, [Ie.medium]: 160, [Ie.small]: 160, [Ie.extraSmall]: 160 },
    Kr = { [Ie.extraLarge]: 140, [Ie.large]: 140, [Ie.medium]: 110, [Ie.small]: 110, [Ie.extraSmall]: 110 },
    Yr = a(function () {
        const { model: e } = ka(),
            t = e.prevResearchItems.get(),
            s = e.researchItems,
            a = Ce(),
            n = Zr[a.breakpoint.name],
            o = t.length * Kr[a.breakpoint.name],
            c = { width: n / 2, height: Kr[a.breakpoint.name] },
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
        return i.jsxs('div', {
            className: Ur,
            style: { width: `${n}rem`, height: `${o}rem` },
            children: [
                i.jsx(Wr, { lines: h, cellSize: c, classNames: { base: Xr } }),
                t.map((t, s) => {
                    const a = e.researchItems.get(t.id),
                        r = d[s];
                    return a
                        ? i.jsx(
                              'div',
                              { className: Gr, style: l(r), children: i.jsx(Fr, { id: t.id, isPrevNode: !0 }) },
                              t.id,
                          )
                        : null;
                }),
            ],
        });
    });
let qr = class {
    constructor(e, s) {
        (t(this, 'row'), t(this, 'col'), (this.row = e), (this.col = s));
    }
};
class Jr {
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
        ((this.C = Jr.padMatrix(e)), (this.n = this.C.length));
        const t = e.length,
            s = e[0].length;
        this.rowCovered = [];
        for (let n = 0; n < this.n; n++) this.rowCovered.push(!1);
        this.columnCovered = [];
        for (let n = 0; n < this.n; n++) this.columnCovered.push(!1);
        ((this.Z0Row = 0),
            (this.Z0Column = 0),
            (this.path = Jr.makeMatrix(2 * this.n, 0)),
            (this.marked = Jr.makeMatrix(this.n, 0)));
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
        for (let n = 0; n < t; n++) for (let e = 0; e < s; e++) 1 === this.marked[n][e] && i.push(new qr(n, e));
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
class Qr {
    constructor(e, t) {
        ((this.row = e), (this.col = t));
    }
}
class ei {
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
            this.levels[e].push(new ti(t, this.levels[e].length, s)),
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
                            const a = t ? si.makeByNext(e, n) : si.makeByTop(e, n);
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
        const n = new Jr(),
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
        return new Qr(this.levels.length, e);
    }
}
class ti {
    constructor(e, s, a) {
        (t(this, 'index'), t(this, 'dx'), t(this, 'fake'), (this.index = e), (this.dx = s), (this.fake = a));
    }
}
class si {
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
        return new si(t.dx, e.dx, t.index, e.index);
    }
    static makeByNext(e, t) {
        return new si(e.dx, t.dx, e.index, t.index);
    }
}
const ai = 'ResearchTree_fdaa27ea',
    ri = 'ResearchTree_researchItemVehicle_6fdd15b5',
    ii = 'ResearchTree_researchItem_ee82a97b',
    ni = 'ResearchTree_treeLines_7c587e69',
    oi = 0.35,
    ci = {
        [Ie.extraLarge]: { width: 1137, height: 732 },
        [Ie.large]: { width: 960, height: 732 },
        [Ie.medium]: { width: 813, height: 504 },
        [Ie.small]: { width: 726, height: 504 },
        [Ie.extraSmall]: { width: 726, height: 504 },
    },
    li = { [Ie.extraLarge]: 0.2, [Ie.large]: 0.35, [Ie.medium]: 0.45, [Ie.small]: 0.5, [Ie.extraSmall]: 0.5 },
    di = a(function () {
        const e = Ce(),
            { model: t } = ka(),
            s = t.currentResearchItems.get(),
            a = t.researchItems,
            o = ci[e.breakpoint.name],
            c = ((e) => ({ width: e.width / 7, height: e.height / 6 }))(o),
            l = li[e.breakpoint.name],
            d = (e) =>
                e ? { top: (e.y + oi) * c.height + 'rem', left: (e.x - 0.5) * c.width + 'rem' } : { top: 0, left: 0 },
            h = r.useMemo(() => {
                const e = new ei(s.length, 6);
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
                            Pe(t.path, (e) => {
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
                                        y1: r.y + oi,
                                        x2: e.x - 0.5,
                                        y2: e.y + oi,
                                        isResearched: o && n(s),
                                    });
                            }
                        });
                    }),
                    t
                );
            }, [m, h, a, s]);
        return i.jsxs('div', {
            className: ai,
            style: { width: `${o.width}rem`, height: `${o.height}rem` },
            children: [
                i.jsx(Wr, { lines: u, cellSize: c, classNames: { base: ni } }),
                s.map((e, t) => {
                    const s = a.get(e.id),
                        r = m[t];
                    return s
                        ? i.jsx(
                              'div',
                              {
                                  className: n(ii, 'vehicle' === e.renderer && ri),
                                  style: d(r),
                                  children: i.jsx(Fr, { id: e.id }),
                              },
                              e.id,
                          )
                        : null;
                }),
            ],
        });
    }),
    hi = 'Modules_sceneWrapper_db189ae1',
    mi = 'Modules_bef383eb',
    ui = 'Modules_content_a3e50684',
    _i = function () {
        const { controls: e } = Us();
        return i.jsxs('div', {
            className: mi,
            children: [
                i.jsxs('div', {
                    className: ui,
                    children: [
                        i.jsx(de, {
                            className: hi,
                            moveSpace: e.sceneWrapper.onMoveSpace,
                            onMouseOver3dScene: e.sceneWrapper.onMouseOver3dScene,
                        }),
                        i.jsx(Yr, {}),
                        i.jsx(di, {}),
                    ],
                }),
                i.jsx(Ma, {
                    options: { context: 'model.modulesModel.fieldModificationModel' },
                    children: i.jsx(pr, {}),
                }),
            ],
        });
    };
function pi() {
    return i.jsx(Pa, { options: { context: 'model.modulesModel' }, children: i.jsx(_i, {}) });
}
const [vi, bi] = m()(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['historicalReference', 'customDescription']),
                    root: e.object(),
                    mechanics: e.transform(
                        (e) =>
                            x(e, (e) => ({
                                id: e.name,
                                weight: Ia[e.name] ?? 0,
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
                        roleName: ke(e.roles, 0),
                        tankmanId: e.tankmanId,
                        slotIndex: e.id,
                    }));
                }),
                a = u.structural(() =>
                    Me(t.mechanics.get(), (e, t) => (e[t.special ? 'special' : 'common'].push(t), e), {
                        common: [],
                        special: [],
                    }),
                );
            return { ...t, computes: { crewRoles: s, mechanics: a } };
        },
        ({ externalModel: e }) => ({ watchMechanicsVideo: e.createCallback((e) => e, 'onWatchMechanicsVideo') }),
    ),
    xi = { top: 'top', bottom: 'bottom', both: 'both', none: 'none' };
function gi(e, t) {
    return e || t ? (e ? (t ? xi.none : xi.bottom) : xi.top) : xi.both;
}
var fi = ((e) => (
    (e.EXPERIENCE = 'experience'),
    (e.CREDITS = 'credits'),
    (e.CREWS_TRAIN = 'crewsTrain'),
    (e.REPAIR_KIT = 'repairKit'),
    (e.BONDS = 'bonds'),
    e
))(fi || {});
const Ni = 'Collectors_e1bd7e2a',
    ji = 'Collectors_content_241f1284',
    yi = 'Collectors_title_1e2c33ce',
    Ci = 'Collectors_description_8a2374cd',
    wi = b.resolve('strings');
function Ti({ className: e }) {
    return i.jsxs('div', {
        className: n(Ni, e),
        children: [
            i.jsxs('div', {
                className: ji,
                children: [
                    i.jsx('div', {
                        className: yi,
                        children: wi.readOrEmpty('vehicle_hub.overview.benefits.collectorVehicle.name'),
                    }),
                    i.jsx(y, { path: 'vehicle_preview.infoPanel.collectible.desc', className: Ci, split: !0 }),
                ],
            }),
            i.jsx(M, {
                path: 'vehicle_hub.benefits.collectors_80x80',
                width: 80,
                height: 80,
                adaptive: { large: { width: 116, height: 116, path: 'vehicle_hub.benefits.collectors_116x116' } },
            }),
        ],
    });
}
const Si = 'Premium_46145a21',
    Ii = 'Premium_benefit_2adaef1e',
    Pi = 'Premium_benefit__shortened_aa8afe2a',
    ki = 'Premium_content_d6722ba0',
    Mi = 'Premium_name_f2b278b',
    Ei = 'Premium_description_2a3350ed',
    Ri = b.resolve('strings'),
    Ai = a(function ({ className: e }) {
        const t = bi().model.benefits.get(),
            s = [...Ee(t, 0, 3)];
        return i.jsx('div', {
            className: n(Si, e),
            children: x(s, (e) =>
                i.jsxs(
                    'div',
                    {
                        className: n(Ii, 4 === s.length && Pi),
                        children: [
                            i.jsx(M, {
                                path: `vehicle_hub.benefits.${Ui[e]}_gold_40x40`,
                                width: 40,
                                height: 40,
                                adaptive: {
                                    large: { width: 48, height: 48, path: `vehicle_hub.benefits.${Ui[e]}_gold_48x48` },
                                },
                            }),
                            i.jsxs('div', {
                                className: ki,
                                children: [
                                    i.jsx('div', {
                                        className: Mi,
                                        children: Ri.readOrEmpty(`vehicle_hub.overview.benefits.premium.name.${e}`),
                                    }),
                                    i.jsx('div', {
                                        className: Ei,
                                        children: Ri.readOrEmpty(
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
    Oi = 'Special_9ac51d30',
    Li = 'Special_border_791bf4fa',
    Bi = 'Special_benefit_735ba88d',
    Vi = 'Special_name_d0fbc6d',
    zi = b.resolve('strings'),
    $i = a(function ({ className: e }) {
        const t = bi().model.benefits.get(),
            s = [...Ee(t, 0, 3)];
        return i.jsxs('div', {
            className: n(Oi, e),
            children: [
                i.jsx('div', { className: Li }),
                x(s, (e) =>
                    i.jsxs(
                        'div',
                        {
                            className: Bi,
                            children: [
                                i.jsx(M, {
                                    path: `vehicle_hub.benefits.${Ui[e]}_silver_40x40`,
                                    width: 40,
                                    height: 40,
                                    adaptive: {
                                        large: {
                                            width: 48,
                                            height: 48,
                                            path: `vehicle_hub.benefits.${Ui[e]}_silver_48x48`,
                                        },
                                    },
                                }),
                                i.jsx('div', {
                                    className: Vi,
                                    children: zi.readOrEmpty(`vehicle_hub.overview.benefits.special.name.${e}`),
                                }),
                            ],
                        },
                        e,
                    ),
                ),
            ],
        });
    }),
    Di = 'Benefits_1d3e7064',
    Fi = 'Benefits_premium_52b989b9',
    Hi = 'Benefits_special_52b989b9',
    Wi = 'Benefits_collectors_ac9481a0',
    Ui = {
        [fi.EXPERIENCE]: 'star',
        [fi.CREDITS]: 'coins',
        [fi.CREWS_TRAIN]: 'crew',
        [fi.REPAIR_KIT]: 'unlimited',
        [fi.BONDS]: 'bonds',
    },
    Gi = a(function ({ className: e }) {
        const t = ut().model.tags.get().split(',');
        return i.jsxs('div', {
            className: n(Di, e),
            children: [
                t.includes(Re.premium)
                    ? t.includes(Re.special)
                        ? i.jsx($i, { className: Hi })
                        : i.jsx(Ai, { className: Fi })
                    : null,
                t.includes(Re.collectorVehicle) && i.jsx(Ti, { className: Wi }),
            ],
        });
    }),
    Xi = 'Description_48a84f65',
    Zi = 'Description_header_6bb7a700',
    Ki = 'Description_title_2add40ca',
    Yi = 'Description_3f21acdc',
    qi = a(function ({ className: e }) {
        const { model: t } = bi(),
            s = b.resolve('strings'),
            a = t.historicalReference.get(),
            r = t.customDescription.get(),
            o = A({ body: a });
        return i.jsxs('div', {
            className: n(Xi, e),
            children: [
                i.jsxs('div', {
                    className: Zi,
                    children: [
                        i.jsx('div', {
                            className: Ki,
                            children: r
                                ? s.readOrEmpty('vehicle_hub.overview.title.generalDescription')
                                : s.readOrEmpty('vehicle_hub.overview.title.historicalReference'),
                        }),
                        r &&
                            a &&
                            i.jsx(M, {
                                ...o,
                                width: '32rem',
                                height: '32rem',
                                path: 'vehicle_hub.historical_reference',
                            }),
                    ],
                }),
                (r || a).split('\n').map((e, t) => i.jsx(re, { className: Yi, text: e, split: !0 }, t)),
            ],
        });
    }),
    Ji = {
        root: 'Mechanics_root_23828917',
        base: 'Mechanics_779ccfc1',
        mechanic: 'Mechanics_mechanic_100f931d',
        base__single: 'Mechanics_base__single_23828917',
        content: 'Mechanics_content_8a718215',
        header: 'Mechanics_header_52b5097c',
        name: 'Mechanics_name_b0bc436d',
        description: 'Mechanics_description_234553f2',
    },
    Qi = a(function ({ className: e }) {
        const t = b.resolve('strings'),
            { model: s } = bi(),
            a = s.computes.mechanics().special.length > 0,
            r = s.computes.mechanics().common.slice(0, 3),
            o = 1 === r.length && !1 === a;
        return i.jsx('div', {
            className: n(Ji.base, o && Ji.base__single, e),
            children: x(r, (e) =>
                i.jsxs(
                    'div',
                    {
                        className: Ji.mechanic,
                        children: [
                            o && i.jsx(M, { path: `vehicle_hub.mechanics.x96x96.${e.id}`, width: 96, height: 96 }),
                            i.jsxs('div', {
                                className: Ji.content,
                                children: [
                                    i.jsxs('div', {
                                        className: Ji.header,
                                        children: [
                                            !o &&
                                                i.jsx(M, {
                                                    path: `vehicle_hub.mechanics.x48x48.${e.id}`,
                                                    width: 48,
                                                    height: 48,
                                                }),
                                            i.jsx('div', {
                                                className: Ji.name,
                                                children: t.readOrEmpty(`vehicle_hub.abilities.common.name.${e.id}`),
                                            }),
                                        ],
                                    }),
                                    i.jsx(y, {
                                        className: Ji.description,
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
    en = 'SpecialMechanic_61a5d496',
    tn = 'SpecialMechanic_content_4adcaa8e',
    sn = 'SpecialMechanic_iconContainer_b16ec9b9',
    an = 'SpecialMechanic_icon_261dc586',
    rn = 'SpecialMechanic_glow_f14361c3',
    nn = 'SpecialMechanic_dust_781e0ca5',
    on = 'SpecialMechanic_name_8dbc8acc',
    cn = 'SpecialMechanic_description_185cf2ea',
    ln = { iconSize: 'x96x96', glowSize: 'small' },
    dn = { large: { iconSize: 'x128x128', glowSize: 'large' } },
    hn = a(function ({ className: e }) {
        const t = b.resolve('images'),
            s = b.resolve('strings'),
            { model: a } = bi(),
            r = a.computes.mechanics().special[0],
            o = N(ln, dn);
        if (!r) return;
        const c = `vehicle_hub.mechanics.special.${o.iconSize}.${r.id}`,
            l = s
                .readOr(`vehicle_hub.abilities.special.description.${r.id}`, () =>
                    s.readOrEmpty(`vehicle_hub.abilities.common.description.${r.id}`),
                )
                .split('\n');
        return i.jsxs('div', {
            className: n(en, e),
            children: [
                t.has(c) &&
                    i.jsxs('div', {
                        className: sn,
                        children: [
                            i.jsx(M, { path: c, className: an }),
                            i.jsx(M, { path: `vehicle_hub.mechanics.special.dust_${o.glowSize}`, className: nn }),
                            i.jsx(M, { path: `vehicle_hub.mechanics.special.glow_front_${o.glowSize}`, className: rn }),
                        ],
                    }),
                i.jsxs('div', {
                    className: tn,
                    children: [
                        i.jsx('div', {
                            className: on,
                            children: s.readOr(`vehicle_hub.abilities.special.name.${r.id}`, () =>
                                s.readOrEmpty(`vehicle_hub.abilities.common.name.${r.id}`),
                            ),
                        }),
                        l.map((e, t) => i.jsx(re, { text: e, className: cn, split: !0 }, t)),
                    ],
                }),
            ],
        });
    }),
    mn = {
        base: 'TtcProgressBar_ec222f42',
        bar: 'TtcProgressBar_bar_dce0790e',
        bar__filled: 'TtcProgressBar_bar__filled_89fad18',
        bar__empty: 'TtcProgressBar_bar__empty_9d98c6c',
        bar__first: 'TtcProgressBar_bar__first_2e768770',
        bar__last: 'TtcProgressBar_bar__last_cdbba2',
        bar__default: 'TtcProgressBar_bar__default_bcb8090d',
        gap: 'TtcProgressBar_gap_56f87635',
    },
    un = 2;
function _n({ vehicleAmount: e, currentAmount: t, maxAmount: s, className: a }) {
    const r = 100 - un,
        o = Math.min(Math.ceil((e / s) * 100), r),
        c = Math.ceil((t / s) * 100);
    return i.jsxs('div', {
        className: n(mn.base, a),
        children: [
            c > 0 &&
                o > 0 &&
                i.jsx('div', {
                    className: n(mn.bar, mn.bar__filled, mn.bar__first),
                    style: { width: `${Math.min(c, o)}%` },
                }),
            c < o &&
                i.jsxs(i.Fragment, {
                    children: [
                        c > 0 && i.jsx('div', { className: mn.gap }),
                        i.jsx('div', { className: n(mn.bar, mn.bar__empty), style: { width: o - c + '%' } }),
                    ],
                }),
            i.jsx('div', { className: mn.bar__default }),
            c > o &&
                i.jsxs(i.Fragment, {
                    children: [
                        i.jsx('div', { className: mn.gap }),
                        i.jsx('div', {
                            className: n(mn.bar, mn.bar__filled, c >= r && mn.bar__last),
                            style: { width: c - o + '%' },
                        }),
                    ],
                }),
            c < r &&
                o < r &&
                i.jsxs(i.Fragment, {
                    children: [
                        i.jsx('div', { className: mn.gap }),
                        i.jsx('div', {
                            className: n(mn.bar, mn.bar__empty, mn.bar__last),
                            style: { width: r - Math.max(o, c) + '%' },
                        }),
                    ],
                }),
        ],
    });
}
const pn = 'TtcCrew_270e7733',
    vn = 'TtcCrew_titleColumn_78281294',
    bn = 'TtcCrew_ttcColumn_9115579c',
    xn = 'TtcCrew_ttcRow_2a9163ab',
    gn = 'TtcCrew_name_a1f1eb7e',
    fn = 'TtcCrew_nameText_6a61cee0',
    Nn = 'TtcCrew_amount_ed7c76e1',
    jn = 'TtcCrew_progressBar_48de0078',
    yn = 'TtcCrew_crewTitle_a70b6855',
    Cn = 'TtcCrew_crewBrackets_74968740',
    wn = 'TtcCrew_crewAmount_7fb6cbca',
    Tn = 'TtcCrew_crewIcons_54c0985b',
    Sn = 'TtcCrew_crewIcon_9ffe1104',
    In = 'TtcCrew_crewIcon__plus_71e8955d';
function Pn({ roleName: e, plus: t, slotIndex: s, tankmanId: a }) {
    const r = k({
        args: { tooltipId: 'vehiclePreviewCrewMember', tooltipArgs: JSON.stringify({ slotIdx: s, tankmanID: a }) },
    });
    return i.jsx(M, { ...r, path: `tankmen.roles.ttc_crew.${e}${t ? '_plus' : ''}`, className: n(Sn, t && In) });
}
const kn = a(function () {
        const e = b.resolve('intl'),
            { model: t } = bi(),
            s = t.crew.get(),
            a = t.computes.crewRoles(),
            r = vt().model.computes.columns();
        return i.jsxs('div', {
            className: pn,
            children: [
                i.jsxs('div', {
                    className: vn,
                    children: [
                        x(r, ({ header: e }, t) =>
                            i.jsx('div', { className: gn, children: i.jsx(F, { text: e.name, className: fn }) }, t),
                        ),
                        i.jsx('div', {
                            className: yn,
                            children: i.jsx(y, {
                                path: 'vehicle_hub.overview.crew.name',
                                params: {
                                    amount: e.formatNumber('integral', s.length),
                                    classBracket: Cn,
                                    classAmount: wn,
                                },
                            }),
                        }),
                    ],
                }),
                i.jsxs('div', {
                    className: bn,
                    children: [
                        x(r, ({ header: t }, s) =>
                            i.jsxs(
                                'div',
                                {
                                    className: xn,
                                    children: [
                                        i.jsx(_n, {
                                            vehicleAmount: t.vehicleAmount,
                                            currentAmount: t.currentAmount,
                                            maxAmount: t.maxAmount,
                                            className: jn,
                                        }),
                                        i.jsx('div', {
                                            className: Nn,
                                            children: e.formatNumber('integral', t.currentAmount),
                                        }),
                                    ],
                                },
                                s,
                            ),
                        ),
                        i.jsx('div', {
                            className: Tn,
                            children: a.map((e, t) =>
                                i.jsx(
                                    Pn,
                                    {
                                        roleName: e.roleName,
                                        plus: e.plus,
                                        tankmanId: e.tankmanId,
                                        slotIndex: e.slotIndex,
                                    },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        });
    }),
    Mn = {
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
    En = b.resolve('sounds'),
    Rn = xe('VideoButton', Mn.videoButton);
function An({ children: e }) {
    const { api: t } = te(),
        [s, a] = ce(t);
    return i.jsxs('div', {
        className: Mn.scrollContainer,
        children: [
            i.jsx(le, {
                classNames: {
                    wrapper: Mn.scrollWrapper,
                    content: n(Mn.scrollContent, Mn[`scrollContent__${gi(s, a)}`]),
                },
                children: e,
            }),
            i.jsx(me, { classNames: { base: Mn.verticalBar } }),
        ],
    });
}
const On = function () {
    const e = b.resolve('intl'),
        t = b.resolve('strings'),
        { controls: s } = Us(),
        { model: a, controls: r } = bi(),
        o = a.computes.mechanics().special[0],
        c = ut().model.tags.get().split(','),
        l = c.includes(Re.special) || c.includes(Re.premium) || c.includes(Re.collectorVehicle),
        d = a.computes.mechanics().common.length > 0;
    return i.jsxs('div', {
        className: Mn.base,
        children: [
            i.jsx(de, {
                className: Mn.sceneWrapper,
                moveSpace: s.sceneWrapper.onMoveSpace,
                onMouseOver3dScene: s.sceneWrapper.onMouseOver3dScene,
            }),
            i.jsxs('div', {
                className: Mn.contentWrapper,
                children: [
                    o &&
                        i.jsxs(i.Fragment, {
                            children: [
                                i.jsx(hn, { className: Mn.specialMechanic }),
                                (d || !l) && i.jsx('div', { className: Mn.separator }),
                            ],
                        }),
                    i.jsx(he, {
                        children: i.jsx(An, {
                            children: i.jsxs('div', {
                                className: n(Mn.content, o && Mn.content__offset),
                                children: [
                                    d &&
                                        i.jsxs(i.Fragment, {
                                            children: [
                                                i.jsx(Qi, { className: Mn.mechanics }),
                                                !l && i.jsx('div', { className: Mn.separator }),
                                            ],
                                        }),
                                    l && i.jsx(Gi, {}),
                                    i.jsx(qi, { className: Mn.description }),
                                    i.jsx('div', { className: Mn.separator }),
                                    i.jsx(kn, {}),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
            o &&
                o.hasVideo &&
                i.jsxs(Rn, {
                    onMouseEnter: () => {
                        En.play('highlight');
                    },
                    onClick: () => {
                        (En.play('play'), r.watchMechanicsVideo({ mechanicsName: o.id }));
                    },
                    children: [
                        i.jsx('div', { className: Mn.videoButtonIcon }),
                        i.jsx('div', {
                            className: Mn.videoButtonLabel,
                            children: e.toUpperCase(t.readOrEmpty('vehicle_hub.overview.mechanicsVideo.label')),
                        }),
                    ],
                }),
        ],
    });
};
function Ln() {
    return i.jsx(vi, { options: { context: 'model.overviewModel' }, children: i.jsx(On, {}) });
}
const [Bn, Vn] = m()(({ observableModel: e }) => {
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
                    const a = bt(t),
                        r = s.readOrEmpty(`vehicle_hub.specialCharacteristics.${e}.${a.type}`, 'silent');
                    return (r && (a.amount = r.replace('{{value}}', String(a.amount))), a);
                });
            });
        return { ...t, computes: { specialHeader: a, specialParams: r } };
    }, v),
    zn = { [Ie.extraSmall]: 30, [Ie.small]: 30, [Ie.medium]: 15, [Ie.large]: 48, [Ie.extraLarge]: 48 },
    $n = { [Ie.extraSmall]: 20, [Ie.small]: 20, [Ie.medium]: 0, [Ie.large]: 0, [Ie.extraLarge]: 15 },
    Dn = { [Ie.extraSmall]: 15, [Ie.small]: 15, [Ie.medium]: 15, [Ie.large]: 15, [Ie.extraLarge]: 15 },
    Fn = { [Ie.extraSmall]: 300, [Ie.small]: 300, [Ie.medium]: 300, [Ie.large]: 364, [Ie.extraLarge]: 480 },
    Hn = { [Ie.extraSmall]: 270, [Ie.small]: 270, [Ie.medium]: 300, [Ie.large]: 414, [Ie.extraLarge]: 390 },
    Wn = { [Ie.extraSmall]: 280, [Ie.small]: 280, [Ie.medium]: 312, [Ie.large]: 392, [Ie.extraLarge]: 430 },
    Un = r.createContext({ specialWidth: 0, commonWidth: 0, commonNarowlWidth: 0, gap: 0, enoughSpace: !1 });
function Gn(e, t, s, a) {
    const r = e ? Hn[s] : Fn[s],
        i = e ? Dn[s] : $n[s],
        n = i * (t - 1) + (e ? i : 0),
        o = e ? Wn[s] : 0,
        c = a - 2 * zn[s];
    return {
        specialWidth: o,
        commonWidth: r,
        commonNarowlWidth: (c - o - n - r) / (t - 1),
        gap: i,
        enoughSpace: r * t + n + o <= c,
    };
}
function Xn({ children: e }) {
    const { breakpoint: t, screenWidthRem: s } = Ce(),
        a = Vn(),
        n = vt().model.computes.columns(),
        o = Boolean(a.model.computes.specialHeader().type),
        [c, l] = r.useState(() => Gn(o, n.length, t.name, s));
    return (
        r.useEffect(() => {
            l(Gn(o, n.length, t.name, s));
        }, [s, t.name, o, n.length]),
        i.jsx(Un.Provider, { value: c, children: e })
    );
}
function Zn() {
    const e = r.useContext(Un);
    if (!e) throw new Error('useColumnsSize must be used within a ColumnsSizeProvider');
    return e;
}
const Kn = {
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
    Yn = (e, t) => {
        const s = b.resolve('intl'),
            a = b.resolve('strings').readOr(t, () => '%(value)%s'),
            r = e
                .replace(/-?\d+(?:\.\d+)?/g, (e) => s.formatReal('woZeroDigits', Number(e)))
                .replace(/\//g, '{{@ class $classSecondary}}/{{/}}');
        return a.replace('%(value)%s', r);
    };
function qn({ value: e, narrow: t, templatePath: s = '', className: a }) {
    const r = b.resolve('intl');
    if (Ae(e)) return i.jsx('span', { className: Kn.amount, children: r.formatReal('woZeroDigits', e) });
    if ('string' == typeof e)
        return i.jsx(
            re,
            {
                className: n(Kn.amountsSpecial, a),
                text: Yn(e, s),
                params: { classSecondary: n(Kn.slash, Kn.slash__amount) },
            },
            e,
        );
    if (Array.isArray(e)) {
        const s = e.slice(0, 5),
            a = b.resolve('strings').readOrEmpty('common.common.slash');
        return i.jsx('div', {
            className: n(Kn.amounts, t && Kn.amounts__narrow),
            children: s.map((e, t) =>
                i.jsxs(
                    l.Fragment,
                    {
                        children: [
                            i.jsx('span', {
                                className: Kn.amount,
                                'data-test-id': 'amountValue',
                                children: Ae(e) ? r.formatReal('woZeroDigits', e) : e,
                            }),
                            t < s.length - 1 &&
                                i.jsx('span', { className: n(Kn.slash, Kn.slash__amount), children: a }),
                        ],
                    },
                    t,
                ),
            ),
        });
    }
    console.error('Incorrect amount type is in TTCRow component');
}
function Jn({ value: e, measure: t = '' }) {
    const s = '' !== t ? ' ' + t : '';
    return 'string' == typeof e
        ? e.split('\n').map((e, t) => i.jsx(re, { text: e + s, split: !0 }, t))
        : Array.isArray(e)
          ? i.jsx(i.Fragment, {
                children: e.map((t, a) =>
                    i.jsxs(
                        l.Fragment,
                        {
                            children: [
                                i.jsx('span', { children: t + (a === e.length - 1 && s) }),
                                a < e.length - 1 && i.jsx('span', { className: Kn.slash, children: '/' }),
                            ],
                        },
                        a,
                    ),
                ),
            })
          : void console.error('Incorrect name type is in TTCRow component');
}
const Qn = 'TtcDivider_eb891d7d',
    eo = 'TtcDivider_base__narrow_92988388';
const to = {
        base: 'TtcHeader_9275bbc3',
        header: 'TtcHeader_header_766d9c80',
        icon: 'TtcHeader_icon_f5e541ab',
        name: 'TtcHeader_name_289f6f3',
    },
    so = { x20x20: 'x20x20', x24x24: 'x24x24' };
function ao({
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
    const m = b.resolve('intl'),
        u = N({ iconSize: so.x20x20 }, { large: { iconSize: so.x24x24 } }),
        _ = b.resolve('aliases'),
        p = k({
            resId: _.read((e) => e.vehicle_hub.default.VehicleParams('resId')),
            args: r.useMemo(() => ({ tooltipId: c, paramId: t, extendedTooltip: !0 }), [t, c]),
        });
    return i.jsxs('div', {
        className: n(to.base, d),
        ...p,
        children: [
            i.jsxs('div', {
                className: to.header,
                children: [
                    i.jsx(M, { path: `${l}.${u.iconSize}.${t}`, className: n(to.icon, null == h ? void 0 : h.icon) }),
                    i.jsx('div', {
                        className: n(to.name, null == h ? void 0 : h.name),
                        children: i.jsx(F, { text: e, 'data-test-id': e }),
                    }),
                    i.jsx('div', { className: null == h ? void 0 : h.amount, children: m.formatNumber('integral', a) }),
                ],
            }),
            i.jsx(_n, {
                className: null == h ? void 0 : h.progressBar,
                vehicleAmount: s,
                currentAmount: a,
                maxAmount: o,
            }),
        ],
    });
}
const ro = 'TtcList_ff11812f',
    io = r.forwardRef(function ({ className: e, ...t }, s) {
        return i.jsx('div', { ...t, ref: s, className: n(ro, e) });
    });
((io.Header = ao),
    (io.Row = function ({
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
        const u = b.resolve('aliases'),
            _ = k({
                resId: u.read((e) => e.vehicle_hub.default.VehicleParams('resId')),
                args: r.useMemo(() => ({ tooltipId: a, paramId: t, extendedTooltip: !0 }), [t, a]),
            });
        return i.jsxs('div', {
            className: n(Kn.base, h),
            'data-test-id': t,
            ..._,
            children: [
                i.jsxs('div', {
                    className: Kn.narrowContainer,
                    children: [
                        i.jsx(qn, { value: s, narrow: o, templatePath: c, className: null == m ? void 0 : m.amount }),
                        i.jsx('div', {
                            className: Kn.iconContainer,
                            children: i.jsx(M, { path: `${d}.${t}`, className: Kn.icon }),
                        }),
                    ],
                }),
                !o && i.jsx('div', { className: Kn.name, children: i.jsx(Jn, { value: e, measure: l }) }),
            ],
        });
    }),
    (io.Divider = function ({ narrow: e = !1, className: t }) {
        return i.jsx('div', { className: n(Qn, e && eo, t) });
    }));
const no = {
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
function oo({ children: e }) {
    const { api: t } = te(),
        [s, a] = ce(t);
    return i.jsx(le, {
        className: no.scrollArea,
        classNames: { content: n(no.scrollContent, no[`scrollContent__${gi(s, a)}`]) },
        children: e,
    });
}
function co({ narrow: e, header: t, characteristics: s, modifications: a, className: r }) {
    const { commonWidth: o, commonNarowlWidth: c, enoughSpace: l } = Zn();
    return i.jsx('div', {
        className: n(no.base, l && no.base__enoughSpace, e && no.base__narrow, r),
        style: { '--width': `${o}rem`, '--widthNarrow': `${c}rem` },
        children: i.jsxs(io, {
            className: no.list,
            children: [
                i.jsx(ao, { ...t, className: no.header, classNames: { name: no.headerName } }),
                i.jsx('div', {
                    className: no.content,
                    children: i.jsxs(he, {
                        children: [
                            i.jsx(oo, {
                                children: i.jsxs('div', {
                                    className: no.listContent,
                                    children: [
                                        s &&
                                            s.map((e, t) =>
                                                i.jsx(
                                                    io.Row,
                                                    {
                                                        name: e.name,
                                                        type: e.type,
                                                        amount: e.amount,
                                                        tooltipId: e.tooltipId,
                                                        narrow: !1,
                                                        className: no.listRow,
                                                    },
                                                    t,
                                                ),
                                            ),
                                        a &&
                                            i.jsxs(i.Fragment, {
                                                children: [
                                                    i.jsx('div', {
                                                        className: no.dividerRow,
                                                        children: i.jsx(io.Divider, {
                                                            narrow: e,
                                                            className: no.divider,
                                                        }),
                                                    }),
                                                    a.map((e, t) =>
                                                        i.jsx(
                                                            io.Row,
                                                            {
                                                                name: e.name,
                                                                type: e.type,
                                                                amount: e.amount,
                                                                tooltipId: e.tooltipId,
                                                                narrow: !1,
                                                                className: no.listRow,
                                                            },
                                                            t,
                                                        ),
                                                    ),
                                                ],
                                            }),
                                    ],
                                }),
                            }),
                            i.jsx(me, { classNames: { base: no.verticalBar } }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
const lo = {
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
        descriptionTextLine__secondary: 'TtcColumnSpecial_descriptionTextLine__secondary_c4e8b8dc',
        wrapper: 'TtcColumnSpecial_wrapper_ae2ae6d9',
        verticalBar: 'TtcColumnSpecial_verticalBar_5bb30112',
    },
    ho = 'x68x68',
    mo = 'x96x96',
    uo = 'small',
    _o = 'large';
function po({ children: e }) {
    const { api: t } = te(),
        [s, a] = ce(t);
    return i.jsx(le, {
        className: lo.scrollArea,
        classNames: { content: n(lo.scrollContent, lo[`scrollContent__${gi(s, a)}`]) },
        children: e,
    });
}
function vo({ name: e, type: t, characteristics: s, descriptionIcon: a, className: r }) {
    const { specialWidth: o } = Zn(),
        c = N({ iconSize: ho, glowSize: uo }, { large: { iconSize: mo, glowSize: _o } }),
        l = b.resolve('images'),
        d = `vehicle_hub.mechanics.special.${c.iconSize}.${t}`,
        h = b
            .resolve('strings')
            .readOrEmpty(`vehicle_hub.characteristics.abilities.special.description.${t}`)
            .split('\n');
    return i.jsx('div', {
        className: n(lo.base, r),
        style: { '--width': `${o}rem` },
        children: i.jsxs(io, {
            className: lo.list,
            children: [
                i.jsxs('div', {
                    className: lo.header,
                    children: [
                        l.has(d) &&
                            i.jsxs('div', {
                                className: lo.iconContainer,
                                children: [
                                    i.jsx(M, {
                                        path: `vehicle_hub.mechanics.special.glow_back_${c.glowSize}`,
                                        className: n(lo.glow, lo.glow__back),
                                    }),
                                    i.jsx(M, { path: d, className: lo.icon }),
                                    i.jsx(M, {
                                        path: `vehicle_hub.mechanics.special.dust_${c.glowSize}`,
                                        className: lo.dust,
                                    }),
                                    i.jsx(M, {
                                        path: `vehicle_hub.mechanics.special.glow_front_${c.glowSize}`,
                                        className: n(lo.glow, lo.glow__front),
                                    }),
                                ],
                            }),
                        i.jsx('div', { className: lo.title, children: e }),
                    ],
                }),
                i.jsx('div', {
                    className: lo.content,
                    children: i.jsxs(he, {
                        children: [
                            i.jsxs(po, {
                                children: [
                                    i.jsx('div', {
                                        className: lo.listContent,
                                        children:
                                            s &&
                                            s.map((e, t) =>
                                                i.jsx(
                                                    io.Row,
                                                    {
                                                        name: e.name,
                                                        type: e.type,
                                                        amount: e.amount,
                                                        templatePath: e.templatePath,
                                                        measure: e.measure,
                                                        tooltipId: e.tooltipId,
                                                        className: lo.listRow,
                                                        classNames: { amount: lo.amount },
                                                    },
                                                    t,
                                                ),
                                            ),
                                    }),
                                    i.jsxs('div', {
                                        className: lo.description,
                                        children: [
                                            a && i.jsx(M, { path: a, className: lo.descriptionIcon }),
                                            i.jsx('div', {
                                                className: lo.descriptionText,
                                                children: h.map((e, t) =>
                                                    i.jsx(
                                                        re,
                                                        {
                                                            split: !0,
                                                            className: lo.descriptionTextLine,
                                                            text: e,
                                                            params: {
                                                                classSecondary: lo.descriptionTextLine__secondary,
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
                            i.jsx(me, { classNames: { base: lo.verticalBar } }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
const bo = 'Stats_6c5a71f3',
    xo = 'Stats_base__enoughSpace_d737aebe',
    go = 'Stats_column_386905a7',
    fo = 'Stats_glow_bc5fc822',
    No = 'Stats_glow__narrow_23403efa',
    jo = b.resolve('sounds'),
    yo = a(function () {
        const { model: e } = Vn(),
            [t, s] = r.useState(0),
            a = vt().model.computes.columns(),
            o = e.computes.specialHeader(),
            c = e.computes.specialParams(),
            { gap: l, enoughSpace: d } = Zn();
        return i.jsxs('div', {
            className: n(bo, d && xo),
            children: [
                o.type && i.jsx(vo, { name: o.name, type: o.type, characteristics: c }),
                x(a, (e, a) => {
                    const r = !d && t !== a;
                    return i.jsxs(
                        'div',
                        {
                            className: go,
                            onMouseEnter: () => {
                                r && (jo.play('gui_characteristics_highlight'), s(a));
                            },
                            style: { '--gap': `${l}rem` },
                            children: [
                                i.jsx('div', { className: n(fo, (d || r) && No) }),
                                i.jsx(co, {
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
function Co() {
    return i.jsx(Bn, { options: { context: 'model.statsModel' }, children: i.jsx(Xn, { children: i.jsx(yo, {}) }) });
}
const wo = Oe({
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
    To = { base: 'Prestige_c70f8f74', vanity: 'Prestige_vanity_658350a8' };
function So() {
    return i.jsxs('div', {
        className: To.base,
        children: [
            i.jsx('div', { className: To.vanity, children: i.jsx(Qe, {}) }),
            i.jsx('div', { className: To.progression, children: i.jsx(et, {}) }),
        ],
    });
}
const Io = 'Progression_2e5f6a7',
    Po = 'Progression_entryPointLine_736c2a7d',
    ko = 'Progression_tree_cd53c03';
function Mo() {
    return i.jsxs('div', {
        className: Io,
        children: [
            i.jsx('div', { className: ko, children: i.jsx(tt, {}) }),
            i.jsx('div', { className: Po, children: i.jsx(st, {}) }),
        ],
    });
}
const Eo = 420,
    Ro = 570;
function Ao(e) {
    return { duration: 'opacity' === e ? Eo : Ro };
}
const Oo = { config: { easing: Le.easeInOutCirc } },
    Lo = {
        tree: {
            tree: {
                from: { opacity: '0', transform: 'translate(-100%)' },
                to: { opacity: '1', transform: 'translate(0%)' },
                config: Ao,
            },
            prestige: {
                from: { opacity: '1', transform: 'translate(0%)' },
                to: { opacity: '0', transform: 'translate(100%)' },
                config: Ao,
            },
        },
        prestige: {
            tree: {
                from: { opacity: '1', transform: 'translate(0%)' },
                to: { opacity: '0', transform: 'translate(-100%)' },
                config: Ao,
            },
            prestige: {
                from: { opacity: '0', transform: 'translate(100%)' },
                to: { opacity: '1', transform: 'translate(0%)' },
                config: Ao,
            },
        },
    },
    Bo = {
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
    Vo = a(() => {
        const { model: e } = at(),
            t = Be(),
            s = Ve(),
            a = ze();
        function r(e) {
            (t.push(Gs.vehSkillTree + `/${e}`),
                s.play('click', { target: 'changeScreen' }),
                s.play('click', { target: 'select' }));
        }
        const o = e.locationId.get(),
            [c] = d(() => ({ from: Lo[o].tree.from, to: Lo[o].tree.to, initConfig: Oo, immediate: a }), [o, a]),
            [m] = d(() => ({ from: Lo[o].prestige.from, to: Lo[o].prestige.to, initConfig: Oo, immediate: a }), [o, a]);
        return i.jsx('div', {
            className: n(Bo.base, Bo[`base__${o}`]),
            children: i.jsxs('div', {
                className: Bo.content,
                children: [
                    i.jsxs(h.div, {
                        className: Bo.progression,
                        style: c,
                        children: [
                            i.jsx(rt, {
                                options: l.useMemo(() => ({ context: 'model.vehSkillTreeModel.tree' }), []),
                                children: i.jsxs('div', {
                                    className: Bo.progressionContent,
                                    children: [
                                        i.jsx(Mo, {}),
                                        i.jsx('div', {
                                            className: Bo.progressionEntryPoint,
                                            children: i.jsx(it, { onClick: () => r('prestige') }),
                                        }),
                                    ],
                                }),
                            }),
                            i.jsx(nt, {
                                options: l.useMemo(() => ({ context: 'model.vehSkillTreeModel.tree' }), []),
                                children: i.jsx(ot, {}),
                            }),
                        ],
                    }),
                    i.jsx(ct, {
                        options: l.useMemo(() => ({ context: 'model.vehSkillTreeModel.prestige' }), []),
                        children: i.jsxs(h.div, {
                            className: Bo.prestigeContent,
                            style: m,
                            children: [
                                i.jsxs('div', {
                                    className: Bo.prestigeEntryPoint,
                                    children: [
                                        i.jsx('div', { className: Bo.prestigeEntryPointBg }),
                                        i.jsx(it, { onClick: () => r('tree'), vanity: !0 }),
                                    ],
                                }),
                                i.jsx(So, {}),
                            ],
                        }),
                    }),
                ],
            }),
        });
    });
function zo() {
    return i.jsx(lt, {
        options: { context: 'model.vehSkillTreeModel' },
        children: i.jsx(ue, { overrides: wo, children: i.jsx(Vo, {}) }),
    });
}
const $o = {
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
    Do = [Fs, 'modules', 'vehSkillTree'],
    Fo = { context: 'model.comparisonModel' },
    Ho = { context: 'model.researchPurchaseModel' },
    Wo = a(function () {
        var e;
        const { model: t } = Us(),
            s = Be(),
            a = (null == (e = $e(s.location, { paths: [`${Gs.root}/:tab`] })) ? void 0 : e.params.tab) ?? Fs,
            o = r.useCallback(
                (e) => {
                    t.menuItems.get().findIndex((t) => t.id === e) > -1 && s.push(`${Gs.root}/${e}`);
                },
                [t.menuItems, s],
            ),
            { tabsAdaptive: c } = N(
                { tabsAdaptive: Ge.small },
                { medium: { tabsAdaptive: Ge.medium }, large: { tabsAdaptive: Ge.large } },
            );
        return (
            De(Xe.ESCAPE, () => {
                s.goBack();
            }),
            De(Xe.ARROW_RIGHT, () => {
                var e;
                const s = t.menuItems.get().findIndex((e) => e.id === a),
                    r =
                        s > -1 &&
                        s + 1 < t.menuItems.get().length &&
                        (null == (e = t.menuItems.get()[s + 1]) ? void 0 : e.id);
                r && o(r);
            }),
            De(Xe.ARROW_LEFT, () => {
                var e;
                const s = t.menuItems.get().findIndex((e) => e.id === a),
                    r = s > 0 && (null == (e = t.menuItems.get()[s - 1]) ? void 0 : e.id);
                r && o(r);
            }),
            r.useLayoutEffect(() => {
                Fe(!0);
            }),
            i.jsx('div', {
                className: n($o.base, $o[`base__${a}`]),
                children: i.jsxs('div', {
                    className: $o.content,
                    children: [
                        i.jsxs('div', {
                            className: $o.screenContent,
                            children: [
                                i.jsx(gs, {
                                    tabsList: t.menuItems.get(),
                                    activeTab: a,
                                    onActiveChange: o,
                                    theme: He.primary,
                                    size: c,
                                    className: $o.tabNavigation,
                                }),
                                i.jsxs(We, {
                                    children: [
                                        i.jsx(Ue, { path: Gs.overview, component: Ln }),
                                        i.jsx(Ue, { path: Gs.modules, component: pi }),
                                        i.jsx(Ue, { path: Gs.stats, component: Co }),
                                        i.jsx(Ue, { path: Gs.armor, component: Ta }),
                                        i.jsx(Ue, { path: Gs.vehSkillTree, component: zo }),
                                    ],
                                }),
                            ],
                        }),
                        i.jsx(yt, { options: Fo, children: i.jsx(Ds, { className: $o.vehicleInfo }) }),
                        Do.includes(a) &&
                            i.jsx(Nt, { options: Ho, children: i.jsx(hs, { className: $o.researchPurchaseControl }) }),
                    ],
                }),
            })
        );
    }),
    Uo = 'App_fac56ab6';
function Go() {
    return i.jsx('div', { className: Uo, children: i.jsx(Wo, {}) });
}
const Xo = b.resolve('aliases'),
    Zo = { 'mouse-enter': qe('highlightx'), click: qe('tabs') };
Je(
    new Ze()
        .add(Ke)
        .addWithProps(Ye, { context: 'model.router' })
        .addWithProps(mt, { options: { context: 'model.vehicleInfoModel' } })
        .addWithProps(pt, { options: { rootId: Xo.read((e) => e.vehicle_hub.default.VehicleParams('resId')) } })
        .addWithProps(dt, { options: { rootId: Xo.read((e) => e.vehicle_hub.default.Wallet('resId')) } })
        .addWithProps(ue, { overrides: Zo })
        .add(Ws)
        .render(i.jsx(Go, {})),
    { fullScreen: !0 },
).then(() => Fe(!1));
