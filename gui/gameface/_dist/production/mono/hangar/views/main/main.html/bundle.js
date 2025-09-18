var e = Object.defineProperty,
    t = (t, a, s) =>
        ((t, a, s) => (a in t ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[a] = s)))(
            t,
            'symbol' != typeof a ? a + '' : a,
            s,
        );
import {
    o as a,
    s,
    e as n,
    z as i,
    r,
    q as o,
    j as l,
    f as c,
    x as d,
    p as u,
    _ as m,
    R as p,
    m as _,
    n as h,
    g,
    A as v,
    B as f,
    C as b,
    D as y,
    w as x,
    E as C,
    F as w,
    G as j,
    H as N,
} from '../../../chunks/vendor.js';
import {
    i as I,
    n as S,
    am as k,
    ap as P,
    aq as E,
    ar as M,
    as as D,
    at as T,
    au as L,
    av as A,
    aw as B,
    ax as O,
    ay as z,
    az as $,
    c as V,
    aA as q,
    aB as W,
    aC as F,
    aD as H,
    m as G,
    aE as Z,
    aF as U,
    aG as K,
    y as Q,
    aH as J,
    C as X,
    F as Y,
    q as ee,
    r as te,
    o as ae,
    u as se,
    z as ne,
    I as ie,
    f as re,
    aI as oe,
    aJ as le,
    aK as ce,
    aL as de,
    k as ue,
    a as me,
    aM as pe,
    T as _e,
    a9 as he,
    af as ge,
    aN as ve,
    ae as fe,
    B as be,
    aO as ye,
    aP as xe,
    aQ as Ce,
    aR as we,
    aS as je,
    aT as Ne,
    ac as Ie,
    aU as Se,
    an as ke,
    a0 as Pe,
    aV as Ee,
    aW as Me,
    aX as De,
    g as Te,
    aY as Le,
    aZ as Ae,
    a_ as Be,
    a$ as Oe,
    b0 as ze,
    b1 as Re,
    H as $e,
    b2 as Ve,
    b3 as qe,
    b4 as We,
    b5 as Fe,
    b6 as He,
    b7 as Ge,
    b8 as Ze,
    b9 as Ue,
    ba as Ke,
    bb as Qe,
    bc as Je,
    bd as Xe,
    be as Ye,
    bf as et,
    bg as tt,
    bh as at,
    J as st,
    bi as nt,
    bj as it,
    bk as rt,
    bl as ot,
    h as lt,
    bm as ct,
    bn as dt,
    b as ut,
    bo as mt,
    aj as pt,
    bp as _t,
    bq as ht,
    br as gt,
    bs as vt,
    bt as ft,
    bu as bt,
    bv as yt,
    bw as xt,
    bx as Ct,
    by as wt,
    bz as jt,
    bA as Nt,
    bB as It,
    bC as St,
    bD as kt,
    D as Pt,
    bE as Et,
    a3 as Mt,
    bF as Dt,
    bG as Tt,
    p as Lt,
    bH as At,
    bI as Bt,
    bJ as Ot,
    bK as zt,
    bL as Rt,
    bM as $t,
    bN as Vt,
    bO as qt,
    bP as Wt,
    bQ as Ft,
    bR as Ht,
    bS as Gt,
    bT as Zt,
    bU as Ut,
    bV as Kt,
    bW as Qt,
    bX as Jt,
    bY as Xt,
    bZ as Yt,
    b_ as ea,
    ag as ta,
    b$ as aa,
    c0 as sa,
    c1 as na,
    c2 as ia,
    c3 as ra,
    c4 as oa,
    c5 as la,
    c6 as ca,
    a8 as da,
    c7 as ua,
    c8 as ma,
    c9 as pa,
    ca as _a,
    cb as ha,
    cc as ga,
    V as va,
    cd as fa,
    M as ba,
    ce as ya,
    cf as xa,
    cg as Ca,
    ch as wa,
    ci as ja,
    cj as Na,
    ck as Ia,
    cl as Sa,
    cm as ka,
    cn as Pa,
    co as Ea,
    cp as Ma,
    cq as Da,
    s as Ta,
    cr as La,
    a4 as Aa,
    Z as Ba,
    x as Oa,
    cs as za,
    d as Ra,
    ab as $a,
    ct as Va,
    cu as qa,
    cv as Wa,
    cw as Fa,
    cx as Ha,
    cy as Ga,
    cz as Za,
    cA as Ua,
    cB as Ka,
    cC as Qa,
    cD as Ja,
    cE as Xa,
    cF as Ya,
    cG as es,
    cH as ts,
    cI as as,
    cJ as ss,
    a5 as ns,
    a6 as is,
    cK as rs,
    cL as os,
    cM as ls,
} from '../../../chunks/lib.js';
import {
    S as cs,
    o as ds,
    P as us,
    e as ms,
    t as ps,
    c as _s,
    g as hs,
    f as gs,
    a as vs,
    b as fs,
    u as bs,
    p as ys,
    E as xs,
    d as Cs,
} from '../../../chunks/encode_decode.js';
import { U as ws, E as js, v as Ns, i as Is, t as Ss, a as ks, b as Ps } from '../../../chunks/common.js';
import { _ as Es } from '../../../chunks/preload-helper.js';
import { B as Ms, a as Ds, C as Ts, O as Ls, S as As, s as Bs, P as Os } from '../../../chunks/perk.js';
import { T as zs } from '../../../chunks/tankman_role.js';
/* empty css                    */ const [Rs, $s] = I('HeroTankModelProvider')((e) => {
        const { observableModel: t } = e;
        return { ...t.primitives(['name', 'type']), heroTankMarker: t.object('heroTankMarker') };
    }, S),
    [Vs, qs] = I('SpaceInteractionModel')(S, ({ externalModel: e }) => ({
        sceneWrapper: {
            onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
            onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
        },
    })),
    Ws = 2,
    Fs = 'role',
    Hs = 'type',
    Gs = 'tier',
    Zs = 'nations',
    Us = {
        lightTank: 'menu.carousel_tank_filter.lightTank',
        mediumTank: 'menu.carousel_tank_filter.mediumTank',
        heavyTank: 'menu.carousel_tank_filter.heavyTank',
        SPG: 'menu.carousel_tank_filter.SPG',
        'AT-SPG': 'menu.carousel_tank_filter.AT_SPG',
        tier: 'tank_carousel_filter.popover.label.levels',
        assault: 'menu.carousel_tank_filter.assault',
        sniper: 'menu.carousel_tank_filter.sniper',
        support: 'menu.carousel_tank_filter.support',
        universal: 'menu.carousel_tank_filter.universal',
        break: 'menu.carousel_tank_filter.break',
        wheeled: 'menu.carousel_tank_filter.wheeled',
        germany: 'menu.nations.germany',
        france: 'menu.nations.france',
        china: 'menu.nations.china',
        japan: 'menu.nations.japan',
        uk: 'menu.nations.uk',
        czech: 'menu.nations.czech',
        usa: 'menu.nations.usa',
        sweden: 'menu.nations.sweden',
        poland: 'menu.nations.poland',
        italy: 'menu.nations.italy',
        ussr: 'menu.nations.ussr',
        bonus: 'tank_carousel_filter.tooltip.bonus.header',
        favorite: 'tank_carousel_filter.tooltip.favorite.header',
        premium: 'tank_carousel_filter.tooltip.premium.header',
        elite: 'tank_carousel_filter.tooltip.elite.header',
        crystals: 'tank_carousel_filter.tooltip.crystals.header',
        canInstallAttachments: 'menu.carousel_tank_filter.canInstallAttachments',
        own3DStyle: 'menu.carousel_tank_filter.own3DStyle',
        rented: 'tank_carousel_filter.tooltip.rented.header',
        clanRented: 'tank_carousel_filter.tooltip.clanRented.header',
        isCommonProgression: 'tank_carousel_filter.tooltip.isCommonProgression.header',
    },
    Ks = {
        type: 'vehicleTypes',
        role: 'role',
        tier: 'tier',
        nations: 'nations',
        bonus: 'bonus',
        favorite: 'favorite',
        premium: 'premium',
        elite: 'elite',
        crystals: 'crystals',
        canInstallAttachments: 'customization.canInstallAttachments',
        own3DStyle: 'customization.own3DStyle',
        rented: 'rented',
        clanRented: 'clanRented',
        isCommonProgression: 'isCommonProgression',
    },
    Qs = 'isCommonProgression',
    Js = [E.assault, E.universal, E.break, E.sniper, E.support, E.wheeled],
    Xs = ['bonus', 'favorite', 'premium', 'elite', 'crystals', 'canInstallAttachments', 'own3DStyle', 'rented'],
    Ys = [P.lightTank, P.mediumTank, P.heavyTank, P['AT-SPG'], P.SPG],
    en = k(1, 12, M),
    tn = 'vehicle_types',
    an = 'nations',
    sn = 'levels',
    nn = 'specials',
    rn = 'battle_pass',
    on = { heavy_tank: A, medium_tank: L, light_tank: T, at_spg: D };
function ln(e, t) {
    return e === Qs && t.status !== z.UNSUITABLE_TO_QUEUE && t.bpProgress < t.maxBpScore;
}
function cn(e, t, a, s) {
    switch (t) {
        case 'elite':
            return e.includes('premium') || (s.elite && !a.premium);
        case 'premium':
            return a.premium || (e.includes('elite') && s.elite);
        case 'bonus':
            return s.bonusMultiplier >= 2;
        case 'favorite':
            return a.favorite;
        case 'crystals':
            return a.crystalEarning;
        case 'rented':
            return !0;
        case 'canInstallAttachments':
            return a.canInstallAttachments;
        case 'own3DStyle':
            return s.own3DStyle;
        case 'event':
            return a.isSuitableVehicle;
        default:
            return !1;
    }
}
const dn = {
    [sn]: (e, t) => !e.levels || e.levels.includes(`level_${t.level}`),
    [an]: (e, t) => !e.nations || e.nations.includes(B(t.nationId)),
    [tn]: (e, t) => !e.vehicle_types || e.vehicle_types.includes(t.type),
};
function un(e, t, a) {
    if (a) {
        let s = !1;
        const n = e.specials ?? [];
        for (const e of n)
            if ('rented' !== e) {
                if (!cn(n, e, t, a)) return !1;
            } else s = !0;
        if (!1 === s && O(t)) return !1;
    }
    if (a && e.battle_pass && e.battle_pass.length > 0) for (const s of e.battle_pass) if (!ln(s, a)) return !1;
    for (const s of Object.keys(e)) if (s in dn && !1 === dn[s](e, t)) return !1;
    return !!((e, t) => {
        const a = $(t.role);
        let s = !1;
        for (const n of Object.keys(on)) if (n in e && ((s = !0), e[n].some((e) => e.includes(a)))) return !0;
        return !s;
    })(e, t);
}
function mn(e, { shortName: t, fullName: a }) {
    const s = e.toLowerCase();
    return !(s.length > 0 && !t.toLowerCase().includes(s) && !a.toLowerCase().includes(s));
}
function pn(e, t, a) {
    const s = e[t] ?? [],
        n = { ...e };
    return ((n[t] = s.includes(a) ? s.filter((e) => e !== a) : [...s, a]), n[t].length > 0 || delete n[t], n);
}
function _n(e, t) {
    return 'regular' === t.type
        ? pn(e, t.field, t.value)
        : Object.keys(on).reduce((e, a) => {
              const s = on[a].find((e) => e.includes(t.role));
              return s
                  ? pn(e, a, ((i = s), 'at_spg' === (n = a) ? `role_ATSPG_${i}` : `role_${n[0].toUpperCase()}T_${i}`))
                  : e;
              var n, i;
          }, e);
}
function hn(e, t, a, s) {
    if (a.favorite !== s.favorite) return a.favorite ? -1 : 1;
    const n = e[B(a.nationId)] ?? 0,
        i = e[B(s.nationId)] ?? 0;
    if (n !== i) return n - i;
    const r = t[a.type] ?? 0,
        o = t[s.type] ?? 0;
    return r !== o
        ? r - o
        : a.level !== s.level
          ? a.level - s.level
          : a.premium !== s.premium
            ? a.premium
                ? 1
                : -1
            : a.shortName.localeCompare(s.shortName);
}
const [gn, vn] = I('FilterVehiclesProvider')(
        ({ observableModel: e, readByPath: t }) => {
            function s(e) {
                try {
                    return JSON.parse(e);
                } catch (t) {
                    return (console.error(t), {});
                }
            }
            const { text_search: n, ...i } = s(t('filters')),
                r = { ...e.primitives(['defaultFilters']) },
                o = V.structural(() => s(r.defaultFilters.get())),
                l = {
                    ...e.primitives(['carouselRowCount']),
                    filters: a.box(i, { deep: !1 }),
                    searchName: a.box((null == n ? void 0 : n[0]) ?? ''),
                    nations: e.arrayClone('nationsOrder'),
                };
            return {
                ...l,
                computes: {
                    hasFilters: V.primitive(
                        () => !1 === q.structural(o(), l.filters.get()) || l.searchName.get().length > 0,
                    ),
                    nations: () => l.nations.get(),
                    nationToIndex: V.shallow(() => l.nations.get().reduce((e, t, a) => ((e[t] = a), e), {})),
                    default: o,
                },
            };
        },
        ({ cleanup: e, model: t, externalModel: a }) => {
            const i = a.createCallback((e) => e, 'onSaveFilter');
            return (
                e(
                    s(() => {
                        var e, a;
                        ((e = t.filters.get()),
                            (a = t.searchName.get()),
                            i({ filters: JSON.stringify({ ...e, text_search: a.length > 0 ? [a] : void 0 }) }));
                    }),
                ),
                {
                    reset: n(() => {
                        (t.filters.set(t.computes.default()), t.searchName.set(''));
                    }),
                    search: n((e) => {
                        t.searchName.set(e);
                    }),
                    change: n((e) => {
                        t.filters.set(_n(t.filters.get(), e));
                    }),
                    carouselTypeChange: a.createCallback((e) => ({ rowCount: e }), 'onCarouselTypeChange'),
                }
            );
        },
    ),
    fn = [P.lightTank, P.mediumTank, P.heavyTank, P['AT-SPG'], P.SPG].reduce((e, t, a) => ((e[t] = a), e), {}),
    [bn, yn] = I('VehicleStatisticsProvider')(({ observableModel: e }) => {
        const t = e.dict('statistics'),
            a = V.structural((e) => t.get(e));
        return { ids: V.primitive(() => t.keys), get: a };
    }),
    [xn, Cn] = I('VehiclesProvider')(
        ({ observableModel: e }) => {
            const t = { vehicles: e.dictRef('vehicles') };
            return {
                get: V.structural((e) => {
                    if (-1 === e) return;
                    const a = t.vehicles.get(e);
                    if (!a) return void console.error(`Error getting vehicle with id: ${e}`);
                    const s = (function (e) {
                        try {
                            const t = JSON.parse(e);
                            return ((t.shortName = t.shortName.replace(/<img.+\/>/, '')), t);
                        } catch (t) {
                            throw (console.error(`Error parsing JSON for element ${e}:`, t), t);
                        }
                    })(a);
                    return { ...s, imageKey: W(s.name) };
                }),
                has: V.primitive((e) => Boolean(t.vehicles.get(e))),
                ids: V.shallow(() => [...t.vehicles.keys.values()]),
                amount: V.primitive(() => t.vehicles.length),
                list: V.shallow(() => {
                    let e = [];
                    for (const [s, n] of t.vehicles.entries())
                        try {
                            e.push(JSON.parse(n.get()));
                        } catch (a) {
                            console.error(`Error parsing JSON for element ${s}:`, a);
                        }
                    return e;
                }),
            };
        },
        S,
        { useRequires: () => ({ statistics: yn() }) },
    ),
    [wn, jn] = I('VehiclesInventoryProvider')(
        (e) => {
            const t = e.requires.statistic.model.ids,
                a = V.structural((a) => {
                    if (t().has(a)) return e.requires.vehicles.model.get(a);
                }),
                s = V.shallow(() => {
                    const a = [];
                    for (const s of t().values()) {
                        const t = e.requires.vehicles.model.get(s);
                        t ? a.push(t) : console.warn(`No vehicle with id: ${s}`);
                    }
                    return a;
                });
            return { get: a, getAll: s, amount: V.primitive(() => s().length), ids: t };
        },
        S,
        { useRequires: () => ({ vehicles: Cn(), statistic: yn() }) },
    ),
    [Nn, In, { Context: Sn }] = I('PaylistsProvider')(
        ({ requires: e, observableModel: t }) => {
            const s = t.dict('storage'),
                n = t.primitives(['selectedID', 'enabled', 'dirtyEdit']),
                r = {
                    vehicles: e.vehicles.model,
                    myVehicles: e.myVehicles.model,
                    enabled: n.enabled,
                    nationsOrder: e.filters.model.nations,
                    filters: a.box({ specials: ['rented'] }, { deep: !1 }),
                    searchName: a.box('', { deep: !1 }),
                    edit: { initial: a.box(void 0, { deep: !1 }), dirty: n.dirtyEdit },
                },
                o = V.shallow(() => s.keys),
                l = V.primitive(() => i(cs, n.selectedID.get())),
                c = V.structural((e) => {
                    try {
                        const t = s.get(e);
                        if (!t) return ds(void 0);
                        const a = i(us, JSON.parse(t)),
                            n = new Set();
                        for (const e of a.list)
                            if (F[e]) {
                                const t = F[e].find((e) => Boolean(r.myVehicles.get(e.toString())));
                                n.add(t ?? e);
                            } else n.add(e);
                        return ds({ ...a, list: [...n.values()] });
                    } catch (t) {
                        return (console.error(`Error getting playlist with ${e} id`, t), ms('PARSE_ERROR', String(t)));
                    }
                }),
                d = V.shallow(() =>
                    H(o().values())
                        .map((e) => c(e))
                        .filter((e) => 'ok' === e.type && void 0 !== e.value)
                        .map((e) => e.value.title)
                        .reduce((e, t) => e.add(t), new Set()),
                ),
                u = V.primitive((e) => {
                    const t = c(e);
                    if ('ok' !== t.type || void 0 === t.value) throw new Error(`Can't get playlist by id ${e}`);
                    return t.value;
                }),
                m = V.structural((e) => {
                    const t = c(e);
                    if ('ok' === t.type && void 0 !== t.value) return { id: e, ...t.value };
                }),
                p = V.shallow(() =>
                    H(o().values())
                        .map((e) => m(e))
                        .filter((e) => void 0 !== e)
                        .toArray()
                        .sort((e, t) => e.title.localeCompare(t.title))
                        .map((e) => e.id),
                ),
                _ = V.primitive(() => {
                    const e = l();
                    if (e) return m(e);
                }),
                h = V.shallow(() => {
                    const t = e.filters.model.computes.nationToIndex();
                    return G(e.myVehicles.model.getAll(), (e, a) => hn(t, fn, e, a));
                }),
                g = V.primitive(() => !1 === q.structural(C(), r.filters.get()) || r.searchName.get().length > 0),
                v = V.shallow(() => {
                    const t = r.filters.get(),
                        a = h(),
                        s = r.searchName.get();
                    return a.filter((a) => {
                        if (!mn(s, a)) return !1;
                        const n = e.statistic.model.get(a.id);
                        return un(t, a, n);
                    });
                }),
                f = V.primitive((t) => {
                    var a;
                    return Boolean(null == (a = e.statistic.model.get(t)) ? void 0 : a.elite);
                }),
                b = V.shallow((t) => {
                    const a = e.vehicles.model.get(t);
                    return null == a ? void 0 : a.imageKey;
                }),
                y = V.primitive(() => v().length),
                x = V.shallow(() => {
                    var e;
                    return null == (e = _()) ? void 0 : e.list.map(r.vehicles.get);
                }),
                C = e.filters.model.computes.default;
            return {
                ...r,
                current: _,
                titles: d,
                currentId: l,
                byIdUnsafe: u,
                byId: c,
                byIdFull: m,
                filtered: v,
                filteredAmount: y,
                defaultFilters: C,
                hasFilters: g,
                vehicleImage: b,
                currentVehicles: x,
                ids: o,
                sortedIds: p,
                isElite: f,
            };
        },
        ({ model: e, externalModel: t }) => {
            const a = t.createCallback((e) => ({ id: e.id, data: JSON.stringify(e.initial) }), 'onCreate');
            return {
                filters: Z({
                    update: (t) => {
                        e.filters.set(_n(e.filters.get(), t));
                    },
                    reset: () => {
                        (e.filters.set(e.defaultFilters()), e.searchName.set(''));
                    },
                    search: (t) => e.searchName.set(t),
                    change: (t) => {
                        e.filters.set(_n(e.filters.get(), t));
                    },
                }),
                create: n(() => {
                    a({ id: hs(), initial: _s(gs(e.titles(), 'playlists.defaultName')) });
                }),
                edit: {
                    sendModify: t.createCallback((e, t) => ({ id: e, data: JSON.stringify(t) }), 'onModify'),
                    setDirty: t.createCallback((e) => ({ value: e }), 'onSetDirtyEdit'),
                },
                select: t.createCallback((e = '') => ({ id: e }), 'onSelect'),
                save: t.createCallback((e) => ({ id: e }), 'onSave'),
                exit: t.createCallback((e) => ({ id: e }), 'onDiscard'),
                goToAboutVehicle: t.createCallback((e) => ({ intCD: e }), 'onGoToAboutVehicle'),
                openImport: t.createCallback(
                    n(() => ({ type: ps.import, params: JSON.stringify({ titles: Array.from(e.titles().values()) }) })),
                    'openImportConfirm',
                ),
                openDeleteConfirm: t.createCallback(
                    (e, t) => ({ type: ps.delete, id: e, params: JSON.stringify({ title: t }) }),
                    'openDeleteConfirm',
                ),
            };
        },
        { useRequires: () => ({ vehicles: Cn(), myVehicles: jn(), filters: vn(), statistic: yn() }) },
    ),
    kn = () => r.useContext(Sn),
    [Pn, En] = I('VehiclesInventoryProvider')(
        (e) => {
            const t = e.observableModel.primitives([
                    'freeSlotsCount',
                    'defaultSlotPrice',
                    'slotPrice',
                    'slotPriceCurrency',
                    'recoverableVehicleCount',
                    'currentVehicleIntCD',
                    'currentVehicleInventoryId',
                    'hasDiscont',
                    'bpEntityValid',
                    'bpStatus',
                ]),
                n = a.box([], { deep: !1 }),
                i = { intCD: t.currentVehicleIntCD, inventoryId: t.currentVehicleInventoryId },
                r = V.shallow(() => {
                    const t = i.intCD.get();
                    return e.requires.vehicles.model.get(t);
                }),
                l = V.shallow((t) => {
                    if (void 0 === t) return;
                    const a = i.intCD.get();
                    return -1 === a ? e.requires.vehicles.model.get(t) : e.requires.vehicles.model.get(a);
                }),
                c = V.shallow(() => {
                    const t = i.intCD.get();
                    return e.requires.statistic.model.get(t);
                }),
                d = V.primitive(() => -1 !== i.intCD.get()),
                u = V.shallow((e) => U(e, (e) => m.get(String(e)))),
                m = e.requires.myVehicles.model,
                p = V.structural(() => e.requires.vehicles.model.list().filter((e) => e.rent.isRented)),
                _ = V.primitive(() =>
                    e.requires.vehicles.model.list().some((t) => {
                        const a = e.requires.statistic.model.get(t.vehicleId);
                        if (a) return 'inPrebattle' === a.status;
                    }),
                );
            return (
                e.cleanup(
                    s(() => {
                        var t;
                        const a = e.requires.filters.model.filters.get(),
                            s = e.requires.filters.model.searchName.get(),
                            i = null == (t = e.requires.playlists) ? void 0 : t.model.current(),
                            r = m.ids(),
                            l = i ? u(i.list) : m.getAll(),
                            c = e.requires.filters.model.computes.nationToIndex(),
                            d = l.filter(
                                (t) =>
                                    !1 !== r.has(t.id) && !!un(a, t, e.requires.statistic.model.get(t.id)) && mn(s, t),
                            );
                        (i || d.sort((e, t) => hn(c, fn, e, t)), o(() => n.set(d)));
                    }),
                ),
                {
                    vehicles: e.requires.myVehicles.model,
                    vehicle: l,
                    selectedVehicle: r,
                    isVehicleSelected: d,
                    selectedVehicleStatistics: c,
                    accumulateByIds: u,
                    rentVehiclesList: p,
                    prebattleModeActive: _,
                    current: {
                        intCD: t.currentVehicleIntCD,
                        inventoryId: t.currentVehicleInventoryId,
                        amount: V.primitive(() => n.get().length),
                        list: () => n.get(),
                        ids: V.shallow(() => n.get().map((e) => e.id)),
                        playlist: e.requires.playlists ? e.requires.playlists.model.current : () => {},
                    },
                    slots: {
                        free: t.freeSlotsCount,
                        price: { defaultValue: t.defaultSlotPrice, value: t.slotPrice, currency: t.slotPriceCurrency },
                        recover: t.recoverableVehicleCount,
                        discount: t.hasDiscont,
                    },
                    bpState: { active: t.bpEntityValid, status: t.bpStatus },
                }
            );
        },
        (e) => ({
            select: e.externalModel.createCallback((e) => ({ id: e }), 'onSelect'),
            buySlot: e.externalModel.createCallbackNoArgs('onBuySlot'),
            goBuyVehicle: e.externalModel.createCallbackNoArgs('onGoBuyVehicle'),
            goRecoverVehicle: e.externalModel.createCallbackNoArgs('onGoRecoverVehicle'),
        }),
        { useRequires: () => ({ myVehicles: jn(), vehicles: Cn(), statistic: yn(), filters: vn(), playlists: kn() }) },
    ),
    Mn = 'emptySlot',
    Dn = { height: 105, row: 5 },
    Tn = { medium: { height: 136 }, large: { height: 145, row: 6 }, extraLarge: { height: 183, row: 7 } },
    Ln = 'top',
    An = 'bottom',
    Bn = 'both',
    On = 'none',
    zn = (e, t) => (e || t ? (e ? (t ? On : An) : Ln) : Bn),
    Rn = 'emptySlot',
    $n = 'left',
    Vn = 'right',
    qn = 'both',
    Wn = 'none',
    Fn = 189,
    Hn = 245,
    Gn = {
        default: { single: Fn, double: Fn },
        breakpoints: { medium: { single: 224 }, large: { single: Hn, double: Hn }, extraLarge: { single: 302 } },
    },
    Zn = (e, t) => (e || t ? (e ? (t ? Wn : Vn) : $n) : qn),
    Un = {
        base: 'Content_7ccb81a0',
        disabledOverlay: 'Content_disabledOverlay_a8908196',
        base__disabled: 'Content_base__disabled_da09528a',
        base__selected: 'Content_base__selected_da09528a',
        base__empty: 'Content_base__empty_da09528a',
    };
function Kn({ children: e, selected: t, disabled: a, empty: s }) {
    return l.jsxs('div', {
        'data-name': 'Content',
        className: c(Un.base, s && Un.base__empty, t && Un.base__selected, a && Un.base__disabled),
        children: [e, a && l.jsx('div', { className: Un.disabledOverlay })],
    });
}
const Qn = {
    base: 'Slot_977dd8f1',
    base__wrapper: 'Slot_base__wrapper_ae3081b5',
    base__disabled: 'Slot_base__disabled_334cc10f',
    base__empty: 'Slot_base__empty_d386066c',
    content: 'Slot_content_1a27c8cf',
    base__active: 'Slot_base__active_71f19f5c',
    base__selected: 'Slot_base__selected_71f19f5c',
    selected: 'Slot_selected_6e9f21df',
    selected__border: 'Slot_selected__border_e2a17304',
};
function Jn({ children: e, selected: t = !1, disabled: a = !1, active: s, className: n, ...i }) {
    const r = a || void 0 === i.onClick;
    return l.jsx('div', {
        ...i,
        'data-name': 'Slot',
        className: c(
            Qn.base,
            s && Qn.base__active,
            t && Qn.base__selected,
            a && Qn.base__disabled,
            r && Qn.base__empty,
            Qn.base__wrapper,
            n,
        ),
        children: l.jsxs('div', {
            className: Qn.content,
            children: [
                l.jsx(Kn, { selected: t, disabled: a, empty: r, children: e }),
                t && l.jsx('div', { className: c(Qn.selected, Qn.selected__border) }),
                l.jsx('div', { className: Qn.selected }),
            ],
        }),
    });
}
const Xn = { buySlot: 'buySlot', buyTank: 'buyTank', restoreTank: 'restoreTank' },
    Yn = { [Xn.buySlot]: 'buy_slot', [Xn.buyTank]: 'buy_vehicle_new', [Xn.restoreTank]: 'restore_vehicle' },
    ei = [Xn.buyTank, Xn.restoreTank, Xn.buySlot],
    ti = [Xn.buyTank, Xn.buySlot],
    ai = (e) => e in Xn,
    si = {
        wrapper: 'ActionCards_wrapper_690d669a',
        text: 'ActionCards_text_cdbc926',
        wrapper__double: 'ActionCards_wrapper__double_70640c01',
        content: 'ActionCards_content_a46de8cf',
        content__buySlot: 'ActionCards_content__buySlot_a70e9708',
        icon: 'ActionCards_icon_f8219d70',
        contentIcon: 'ActionCards_contentIcon_166df330',
        currency: 'ActionCards_currency_ac7c654f',
        discount: 'ActionCards_discount_967a7825',
    },
    ni = d(function ({ type: e }) {
        const t = En(),
            a = t.model.slots.price.currency.get(),
            s = t.model.slots.price.value.get(),
            n = t.model.slots.free.get(),
            i = t.model.slots.recover.get(),
            r = t.model.slots.discount.get();
        return e === Xn.buySlot
            ? l.jsx('div', {
                  className: si.currency,
                  children: l.jsx(K, {
                      type: J.currency,
                      size: Q.extraSmall,
                      enabled: r,
                      classNames: { icon: si.discount },
                      children: l.jsx(X, {
                          type: a,
                          size: Q.extraSmall,
                          reverse: !0,
                          classNames: { base: c(si.content, si.content__buySlot), icon: si.contentIcon },
                          children: s,
                      }),
                  }),
              })
            : l.jsxs('div', {
                  className: si.content,
                  children: [
                      e === Xn.buyTank &&
                          l.jsx(Y, {
                              upgradeLegacy: !0,
                              path: 'menu.tankCarousel.vehicleStates.buyTankEmptyCount',
                              params: { count: n },
                          }),
                      e === Xn.restoreTank &&
                          l.jsx(Y, {
                              upgradeLegacy: !0,
                              path: 'menu.tankCarousel.vehicleStates.restoreTankCount',
                              params: { count: i },
                          }),
                  ],
              });
    });
function ii({ type: e, width: t, height: a, doubleRow: s, className: n }) {
    const i = En(),
        o = ee(),
        d = i.model.slots.price.value.get(),
        u = i.model.slots.price.defaultValue.get(),
        m = i.model.slots.discount.get(),
        p = te.resolve('strings'),
        _ = ae(`hangar.carousel.actionCards.x48x48.${e}`, `hangar.carousel.actionCards.x96x96.${e}`),
        h = se({
            header: p.readOrEmpty(`tooltips.tanks_carousel.${Yn[e]}.header`),
            body: p.readOrEmpty(`tooltips.tanks_carousel.${Yn[e]}.body`),
        }),
        g = ne(
            'actionSlotPrice',
            r.useMemo(() => [[d], [u]], [d, u]),
            r.useMemo(() => ({ disabled: !m }), [m]),
        ),
        v = m && Yn[e] === Yn.buySlot ? g : h;
    return l.jsx(Jn, {
        ...v,
        className: n,
        style: { width: `${t}px`, height: `${a}px` },
        'data-test-id': e,
        onClick: function (t) {
            (v.onClick(), o.play('click', { target: 'vehicle:action-cards', original: t }));
            const a = {
                [Xn.buySlot]: i.controls.buySlot,
                [Xn.buyTank]: i.controls.goBuyVehicle,
                [Xn.restoreTank]: i.controls.goRecoverVehicle,
            }[e];
            if ('function' != typeof a) return console.error(`Unknown action type ${e} in ${ii.name} handleClick`);
            a();
        },
        onMouseEnter: function (e) {
            (v.onMouseEnter(), o.play('mouse-enter', { target: 'vehicle:action-cards', original: e }));
        },
        children: l.jsxs('div', {
            className: c(si.wrapper, s && si.wrapper__double),
            children: [
                l.jsx(ie, {
                    className: si.icon,
                    path: `hangar.carousel.actionCards.x32x32.${e}`,
                    adaptive: { medium: { path: _ } },
                }),
                l.jsx('div', {
                    className: si.text,
                    children: l.jsx(Y, { path: `menu.tankCarousel.vehicleStates.${e}` }),
                }),
                l.jsx(ni, { type: e }),
            ],
        }),
    });
}
const ri = {
        base: 'Background_1089bc1c',
        wotPlus: 'Background_wotPlus_3cf6035a',
        crystal: 'Background_crystal_c839623e',
        flag: 'Background_flag_57525fcb',
        base__double: 'Background_base__double_26effab7',
        flag__active: 'Background_flag__active_de322c1b',
        vehicle: 'Background_vehicle_23ef6e2b',
        vehicle__dimmed: 'Background_vehicle__dimmed_4dddd8fc',
        crystal__limit: 'Background_crystal__limit_61072361',
        favorite: 'Background_favorite_fbeb31ad',
        favorite__active: 'Background_favorite__active_7f14a6c7',
    },
    oi = 1,
    li = 0,
    ci = re('Favorite', ri.favorite, { variants: { active: { true: ri.favorite__active } } });
function di({ vehicle: e, selected: t, active: a, className: s }) {
    return l.jsx(ie, {
        className: c(ri.flag, t || (a && ri.flag__active), s),
        path: `hangar.carousel.cards.flags.x400x300.${B(e.nationId)}`,
        position: 'top left',
    });
}
function ui({ vehicle: e, statistic: t, classNames: a }) {
    if (!t) return;
    const s = (le(t.numberOfCrystalEarned, oi) ?? 0) <= (le(t.numberOfCrystalEarned, li) ?? 0);
    return l.jsxs(l.Fragment, {
        children: [
            t.fromWotPlus && l.jsx('div', { className: c(ri.wotPlus, null == a ? void 0 : a.wotPlus) }),
            e.crystalEarning &&
                l.jsx('div', { className: c(ri.crystal, s && ri.crystal__limit, null == a ? void 0 : a.crystal) }),
        ],
    });
}
function mi({ vehicle: e, dimmed: t, active: a, statistic: s, selected: n, doubleRow: i, ...r }) {
    return l.jsxs('div', {
        ...r,
        className: c(ri.base, i && ri.base__double, r.className),
        children: [
            l.jsx(di, { vehicle: e, active: a, selected: n }),
            l.jsx(oe, {
                className: c(
                    ri.vehicle,
                    (((null == s ? void 0 : s.status) && s.status !== ws) || t) && ri.vehicle__dimmed,
                ),
                name: e.name,
            }),
            l.jsx(ui, { vehicle: e, statistic: s }),
            l.jsx(ci, { active: e.favorite }),
        ],
    });
}
const pi = {
        base: 'Bonuses_8169b4b3',
        bonus: 'Bonuses_bonus_af8ebe7c',
        bonus__active: 'Bonuses_bonus__active_2364401e',
        bonusIcon: 'Bonuses_bonusIcon_b65fb47f',
        bonusValue: 'Bonuses_bonusValue_ad463b6a',
        rent: 'Bonuses_rent_fd59e0c9',
        base__double: 'Bonuses_base__double_ca1cd57b',
        icon: 'Bonuses_icon_3991db74',
        text: 'Bonuses_text_9c9c729',
    },
    _i = te.resolve('strings');
function hi({ bonusMultiplier: e, className: t, classNames: a }) {
    return l.jsxs('div', {
        className: c(pi.bonus, e !== js && pi.bonus__active, t),
        children: [
            l.jsx('div', { className: c(pi.bonusIcon, null == a ? void 0 : a.icon) }),
            l.jsx('div', {
                className: c(pi.bonusValue, null == a ? void 0 : a.value),
                children: `${_i.readOrEmpty('common.multiplierSmall')}${e}`,
            }),
        ],
    });
}
function gi({ vehicle: e, statistic: t, doubleRow: a, ...s }) {
    return l.jsxs('div', {
        ...s,
        className: c(pi.base, a && pi.base__double, s.className),
        children: [
            t && l.jsx(hi, { bonusMultiplier: t.bonusMultiplier }),
            l.jsx(ce.ShortCounter, {
                time: e.rent.leftTime,
                wins: e.rent.leftWins,
                battles: e.rent.leftBattles,
                classNames: { base: pi.rent, icon: pi.icon, text: pi.text },
            }),
        ],
    });
}
const vi = {
        base: 'Information_dd628d50',
        info: 'Information_info_b2948982',
        details: 'Information_details_e5340a0c',
        base__double: 'Information_base__double_6e8d4f26',
        text: 'Information_text_7b2995dc',
        text__level: 'Information_text__level_e5a9014e',
        text__premium: 'Information_text__premium_741ebb2f',
        bpIcon: 'Information_bpIcon_c32c210e',
        bpIcon__bonus: 'Information_bpIcon__bonus_342a3836',
        bpIcon__active: 'Information_bpIcon__active_960b5eed',
        prestige: 'Information_prestige_95cc4ef2',
        prestige__active: 'Information_prestige__active_960b5eed',
        identifier: 'Information_identifier_342fa79b',
        identifier__changeNation: 'Information_identifier__changeNation_665b13a2',
        identifier__alpha: 'Information_identifier__alpha_6e8d4f26',
        identifier__super: 'Information_identifier__super_46b1ed0d',
        identifier__rent: 'Information_identifier__rent_1fba5dce',
        identifierIcon: 'Information_identifierIcon_3636b34b',
        identifierIcon__alpha: 'Information_identifierIcon__alpha_ddf4d235',
        identifierIcon__super: 'Information_identifierIcon__super_34b8f5c2',
        identifierIcon__changeNation: 'Information_identifierIcon__changeNation_dfee83c8',
        truncatedName: 'Information_truncatedName_2e56c743',
    },
    fi = re('VehicleName', {
        element: de.Name,
        className: vi.text,
        cva: { variants: { premium: { true: vi.text__premium } } },
    });
function bi({ statistic: e, vehicle: t, onMouseLeaveBp: a, onMouseEnterBp: s, className: n, status: i }) {
    const r = te.resolve('views'),
        o = te.resolve('aliases'),
        d = ue({
            resId: o.read((e) => e.hangar.shared.VehiclesStatistics('resId')),
            contentId: r.read((e) =>
                'paused' !== i
                    ? e.lobby.battle_pass.tooltips.VehiclePointsTooltipView('resId')
                    : e.lobby.battle_pass.tooltips.BattlePassOnPauseTooltipView('resId'),
            ),
            args: { intCD: null == t ? void 0 : t.vehicleId },
        });
    return l.jsx('div', {
        className: c(vi.bpIcon, e.maxBpScore > 0 && vi.bpIcon__active, e.bpSpecial && vi.bpIcon__bonus, n),
        onMouseEnter: function (e) {
            (null == s || s(Ss.bpTooltip, e), null == d || d.onMouseEnter());
        },
        onMouseLeave: function (e) {
            (null == a || a(Ss.bpTooltip, e), null == d || d.onMouseLeave());
        },
    });
}
function yi({ statistic: e, elite: t, vehicle: a, selected: s, classNames: n, className: i }) {
    return l.jsxs('div', {
        className: c(vi.details, i),
        children: [
            e &&
                l.jsx(de.Prestige, {
                    level: e.prestigeLevel,
                    grade: e.prestigeGrade,
                    type: e.prestigeType,
                    direction: pe.left,
                    className: c(vi.prestige, s && vi.prestige__active, null == n ? void 0 : n.prestige),
                }),
            l.jsx(de.Level, { className: c(vi.text, vi.text__level, null == n ? void 0 : n.level), value: a.level }),
            me(a.type) &&
                l.jsx(de.Type, {
                    type: a.type,
                    premium: t || (null == e ? void 0 : e.elite),
                    size: de.Type.sizes.x24x24,
                    className: null == n ? void 0 : n.type,
                }),
        ],
    });
}
function xi({ vehicle: e, className: t, classNames: a }) {
    const s = Is[e.id],
        n = e.nationChangeAvailable,
        i = e.rent.leftTime > 0 || e.rent.leftWins > 0 || e.rent.leftBattles > 0;
    return l.jsxs('div', {
        className: c(
            vi.identifier,
            vi[`identifier__${s}`],
            n && vi.identifier__changeNation,
            i && vi.identifier__rent,
            t,
        ),
        children: [
            l.jsx(fi, {
                className: c(vi.truncatedName, null == a ? void 0 : a.name),
                premium: e.premium,
                children: l.jsx(_e, { text: e.shortName }),
            }),
            (s || n) &&
                l.jsx('div', {
                    className: c(
                        vi.identifierIcon,
                        vi[`identifierIcon__${s}`],
                        n && vi.identifierIcon__changeNation,
                        null == a ? void 0 : a.icon,
                    ),
                }),
        ],
    });
}
const Ci = d(function ({
        vehicle: e,
        statistic: t,
        selected: a,
        doubleRow: s,
        onMouseEnterBp: n,
        onMouseLeaveBp: i,
        ...r
    }) {
        const o = En(),
            d = o.model.bpState.active.get(),
            u = o.model.bpState.status.get();
        return l.jsxs('div', {
            ...r,
            className: c(vi.base, s && vi.base__double, r.className),
            children: [
                d &&
                    'disabled' !== u &&
                    t &&
                    Ns(t.status, t.maxBpScore) &&
                    l.jsx(bi, { vehicle: e, statistic: t, onMouseLeaveBp: i, onMouseEnterBp: n, status: u }),
                l.jsxs(de, {
                    className: vi.info,
                    children: [l.jsx(yi, { vehicle: e, statistic: t, selected: a }), l.jsx(xi, { vehicle: e })],
                }),
            ],
        });
    }),
    wi = {
        base: 'Overlay_c657baf9',
        alert: 'Overlay_alert_db4a0e15',
        alertIcon: 'Overlay_alertIcon_3d7c077a',
        base__double: 'Overlay_base__double_3c7155a',
        alertText: 'Overlay_alertText_e237f4fd',
        alertText__light: 'Overlay_alertText__light_bece984e',
    };
function ji({ status: e, classNames: t, className: a }) {
    const s = te.resolve('images'),
        n = ae(`hangar.carousel.cards.alerts.${ks[e]}`, `hangar.carousel.cards.alerts.${ks[e]}_upscale`),
        i = ae('hangar.carousel.cards.alerts.notSuitable', 'hangar.carousel.cards.alerts.notSuitable_upscale'),
        r = e === Ps.battle || e === Ps.inPrebattle;
    return l.jsxs('div', {
        className: c(wi.alert, a),
        children: [
            l.jsx(ie, { className: c(wi.alertIcon, null == t ? void 0 : t.icon), path: s.has(n) ? n : i }),
            l.jsx(Y, {
                upgradeLegacy: !0,
                className: c(wi.alertText, r && wi.alertText__light, null == t ? void 0 : t.text),
                path: `menu.tankCarousel.vehicleStates.${e}`,
                params: { icon: l.jsx(ie, { path: 'library.premium_small', width: 34, height: 16 }) },
            }),
        ],
    });
}
function Ni({ statistic: e, doubleRow: t, ...a }) {
    return e.status === ws
        ? null
        : l.jsx('div', {
              ...a,
              className: c(wi.base, t && wi.base__double, a.className),
              children: l.jsx(ji, { status: e.status }),
          });
}
re('Disable', wi.disable);
const Ii = 'Card_e79008fd',
    Si = 'Card_base__double_f8b7f334',
    ki = 'Card_content_a6141b08',
    Pi = 'Card_border_e9cb9a85',
    Ei = te.resolve('views'),
    Mi = te.resolve('aliases'),
    Di = d(function ({ vehicleId: e, selected: t = !1, doubleRow: a, children: s, concurrent: n, ...i }) {
        const r = En(),
            o = Cn().model.get(e),
            d = yn().model.get(e),
            u = ee(),
            m = r.model.current.inventoryId.get(),
            p = r.model.prebattleModeActive();
        if (!o || !d) return l.jsx(Jn, { ...i });
        const _ = n ? Ti : mi;
        return l.jsxs(Jn, {
            ...i,
            className: c('vehicle-card', i.className),
            selected: t,
            'data-test-id': `vehicleCard-${e}`,
            onMouseEnter: function (e) {
                var t;
                (u.play('mouse-enter', { target: 'vehicle-card', original: e }),
                    null == (t = i.onMouseEnter) || t.call(i, e));
            },
            onMouseLeave: function (e) {
                var t;
                null == (t = i.onMouseLeave) || t.call(i, e);
            },
            onClick: function (e) {
                var t;
                p ||
                    (o && o.inventoryId === m) ||
                    (u.play('click', { target: 'vehicle-card', original: e }),
                    r.controls.select(o.inventoryId),
                    null == (t = i.onClick) || t.call(i, e));
            },
            children: [
                l.jsx(_, { vehicle: o, dimmed: p, statistic: d, selected: t, doubleRow: a }),
                l.jsx(Li, {
                    concurrent: n,
                    statistic: d,
                    vehicle: o,
                    selected: t,
                    disableContextMenu: p,
                    doubleRow: a,
                }),
            ],
        });
    });
function Ti(e) {
    const [t, a] = r.useState(!0),
        [, s] = r.useTransition();
    return (
        r.useEffect(() => {
            t && s(() => a(!1));
        }, [t]),
        t ? null : l.jsx(mi, { ...e })
    );
}
function Li({ vehicle: e, statistic: t, selected: a, doubleRow: s, concurrent: n, disableContextMenu: i }) {
    const [o, d] = r.useState(n),
        u = r.useRef(null),
        [, m] = r.useTransition(),
        p = he(
            'vehicle',
            r.useMemo(
                () => ({ inventoryId: null == e ? void 0 : e.inventoryId }),
                [null == e ? void 0 : e.inventoryId],
            ),
        ),
        _ = ue({
            resId: Mi.read((e) => e.hangar.shared.VehiclesInventory('resId')),
            contentId: Ei.read((e) => e.mono.hangar.vehicle_tooltip('resId')),
            args: { inventoryId: null == e ? void 0 : e.inventoryId },
        });
    r.useEffect(() => {
        o && m(() => d(!1));
    }, [o]);
    return o
        ? null
        : l.jsxs('div', {
              ..._,
              ...(!i && p),
              ref: u,
              className: c(Ii, s && Si),
              children: [
                  l.jsxs('div', {
                      className: ki,
                      children: [
                          l.jsx(gi, { vehicle: e, statistic: t, doubleRow: s }),
                          l.jsx(Ci, {
                              vehicle: e,
                              selected: a,
                              statistic: t,
                              doubleRow: s,
                              onMouseEnterBp: (e, t) => {
                                  var a;
                                  e === Ss.bpTooltip &&
                                      (null == (a = u.current) ? void 0 : a.contains(t.target)) &&
                                      _.onMouseLeave();
                              },
                              onMouseLeaveBp: (e, t) => {
                                  var a;
                                  e === Ss.bpTooltip &&
                                      (null == (a = u.current) ? void 0 : a.contains(t.target)) &&
                                      _.onMouseEnter();
                              },
                          }),
                      ],
                  }),
                  l.jsx(Ni, { statistic: t, doubleRow: s }),
              ],
          });
}
const Ai = {
    empty: 'ActiveSlots_empty_9aab1ce1',
    doubleSlots: 'ActiveSlots_doubleSlots_2ce42013',
    slot__double: 'ActiveSlots_slot__double_e321ab18',
};
function Bi({ width: e, className: t }) {
    return l.jsx('div', {
        className: Ai.empty,
        children: l.jsx(Jn, {
            className: t,
            style: { width: `${e}px` },
            children: l.jsx('div', { className: Ai.vehicleSlot }),
        }),
    });
}
function Oi({ slotId: e, width: t, currentVehicleId: a, double: s, className: n }) {
    const { api: i } = ge();
    return void 0 === e
        ? null
        : ai(e)
          ? l.jsx(ii, { className: c(Pi, n), type: e, width: t, doubleRow: s })
          : e === Mn
            ? l.jsx(Bi, { className: c(Pi, n), width: t })
            : l.jsx(Di, {
                  scroll: s ? i : void 0,
                  vehicleId: e,
                  selected: e === a,
                  doubleRow: s,
                  className: c(Pi, n),
                  style: { width: t },
              });
}
function zi({ chunkedSlots: e, classNames: t, ...a }) {
    return void 0 === e
        ? null
        : l.jsx('div', {
              className: Ai.doubleSlots,
              children: e.map((e, s) =>
                  l.jsx(Oi, { ...a, slotId: e, className: c(Ai.slot__double, null == t ? void 0 : t.slot) }, s),
              ),
          });
}
function Ri(e, t) {
    return r.useMemo(() => {
        if (!t) return { currentIndex: -1, currentPosition: -1 };
        const a = e.indexOf(t);
        return { currentIndex: a, currentPosition: a >= 0 ? a + 1 : -1 };
    }, [e, t]);
}
function $i(e, t, a, s, n) {
    r.useLayoutEffect(() => {
        function i() {
            const i = e.getWrapperSize(),
                r = e.animationScroll.scrollPosition.get();
            if (!i) return;
            n && e.applyScroll(0, { immediate: !0 });
            const o = a - fe(1),
                l = r,
                c = r + i,
                d = o * Math.floor(t / s),
                u = d + o,
                m = d - (Math.floor(i / o) / 2) * o;
            (d > l && u < c) || e.applyScroll(m, { immediate: !0 });
        }
        i();
        return new ve().add(e.events.on('resizeHandled', i)).add(e.events.on('recalculateContent', i)).dispose;
    }, [t, e, a, s, n]);
}
const Vi = {
    button: 'ArrowButton_button_4f10eb80',
    icon: 'ArrowButton_icon_35e5294f',
    button__left: 'ArrowButton_button__left_5327085d',
    background: 'ArrowButton_background_5327085d',
    border: 'ArrowButton_border_5327085d',
    overlay: 'ArrowButton_overlay_c36cbc33',
    content: 'ArrowButton_content_4666fd05',
    button__right: 'ArrowButton_button__right_5327085d',
};
function qi({ direction: e, className: t, ...a }) {
    return l.jsx(be, {
        ...a,
        classNames: {
            base: c(Vi.button, Vi[`button__${e}`], t),
            background: Vi.background,
            border: Vi.border,
            overlay: Vi.overlay,
            content: Vi.content,
        },
        theme: be.themes.secondary,
        size: be.sizes.small,
        autoAlignContent: !1,
        soundTarget: 'carousel:arrow_button',
        children: l.jsx(ie, { path: 'hangar.carousel.buttonArrow', className: Vi.icon }),
    });
}
qi.direction = { right: 'right', left: 'left' };
const Wi = {
    navButtonWrapper: 'CarouselNavButtons_navButtonWrapper_a13c2a68',
    navButton: 'CarouselNavButtons_navButton_7ac02b68',
    navButton__left: 'CarouselNavButtons_navButton__left_5f6dc3a0',
    navButton__right: 'CarouselNavButtons_navButton__right_66b4f03f',
    navButton__hidden: 'CarouselNavButtons_navButton__hidden_69011a0b',
    mask: 'CarouselNavButtons_mask_d54421e2',
    mask__both: 'CarouselNavButtons_mask__both_7294632e',
    mask__left: 'CarouselNavButtons_mask__left_e8bc4c90',
    mask__right: 'CarouselNavButtons_mask__right_6be519f7',
};
function Fi({ itemWidth: e, api: t, children: a }) {
    const s = r.useRef(null),
        [n, i] = r.useState(!1),
        { applyScroll: o, animationScroll: d, disabled: u } = t,
        [m, p] = ye(t),
        _ = m || u,
        h = p || u;
    function g(t) {
        function a() {
            const a = d.scrollPosition.get();
            o(a + t * e);
        }
        n || (a(), (s.current = window.setInterval(a, 100)), i(!0));
    }
    function v() {
        (null !== s.current && (clearInterval(s.current), (s.current = null)), i(!1));
    }
    return l.jsxs('div', {
        className: Wi.navButtonWrapper,
        children: [
            l.jsx(qi, {
                direction: qi.direction.left,
                onMouseDown: () => g(-1),
                onMouseUp: v,
                onMouseLeave: v,
                className: c(Wi.navButton, Wi.navButton__left, _ && Wi.navButton__hidden),
            }),
            l.jsx('div', { className: c(Wi.mask, Wi[`mask__${Zn(m, p)}`]), children: a }),
            l.jsx(qi, {
                direction: qi.direction.right,
                onMouseDown: () => g(1),
                onMouseUp: v,
                onMouseLeave: v,
                className: c(Wi.navButton, Wi.navButton__right, h && Wi.navButton__hidden),
            }),
        ],
    });
}
const Hi = {
    base: 'CarouselSkeleton_1ac002e3',
    content: 'CarouselSkeleton_content_b18f8dd7',
    scroll: 'CarouselSkeleton_scroll_badf82c7',
};
function Gi(e) {
    return l.jsx('div', { ...e, className: c(Hi.content, e.className) });
}
function Zi({
    api: e,
    widthElement: t,
    totalElements: a,
    disabled: s,
    throttle: n = 80,
    onDraggingState: i,
    renderElement: r,
    classNames: o,
}) {
    return l.jsx('div', {
        className: c(Hi.base, null == o ? void 0 : o.base),
        children: l.jsx(Fi, {
            api: e,
            itemWidth: t,
            children: l.jsx(xe, {
                api: e,
                elementWidth: t - fe(1),
                direction: 'horizontal',
                totalElements: a,
                throttle: n,
                wrappers: { Content: Gi },
                className: c(Hi.scroll, null == o ? void 0 : o.scroll),
                renderScroll: (t) => l.jsx(Ce, { ...t, api: e, disabled: s, onDraggingState: i, children: t.children }),
                renderElement: (e) => (r ? r(e) : l.jsx(Bi, { className: null == o ? void 0 : o.element, width: t })),
            }),
        }),
    });
}
function Ui({ api: e, carouselRows: t }) {
    const a = (function (e) {
            const t = Ie(Gn.default, Gn.breakpoints);
            return fe(e === Ws ? t.double : t.single);
        })(t),
        [s, n] = r.useState({ carouselRows: 0, cardWidth: 0, visibleSlots: 0 });
    return (
        r.useLayoutEffect(() => {
            function s() {
                const s = e.getWrapperSize();
                s &&
                    n(
                        t !== Ws
                            ? { visibleSlots: Math.ceil(s / a), cardWidth: a, carouselRows: t }
                            : { visibleSlots: Math.ceil((s / a) * t), cardWidth: a, carouselRows: t },
                    );
            }
            s();
            return new ve().add(e.events.on('resizeHandled', s)).add(e.events.on('recalculateContent', s)).dispose;
        }, [e, a, t]),
        s
    );
}
const Ki = 'Carousel_draggingOverlay_2ac699b0',
    Qi = 'Carousel_9b3e04da',
    Ji = 'Carousel_base__visible_24d53d12',
    Xi = 'Carousel_card_5449ec9a',
    Yi = 'Carousel_card__inactive_c59331d9',
    er = d(function () {
        const [e, t] = r.useState(!1),
            { api: a } = ge(),
            s = En(),
            n = vn().model.carouselRowCount.get(),
            i = s.model.prebattleModeActive(),
            o = s.model.current.ids(),
            d = s.model.current.list(),
            m = s.model.selectedVehicle(),
            { currentIndex: p } = Ri(o, null == m ? void 0 : m.id),
            _ = s.model.slots.recover.get(),
            { carouselRows: h, cardWidth: g, visibleSlots: v } = Ui({ api: a, carouselRows: n }),
            { activeSlotsAmount: f, activeSlotsIds: b } =
                ((y = o),
                (x = v),
                (C = _),
                r.useMemo(() => {
                    if (!x) return { activeSlotsAmount: 0, activeSlotsIds: [] };
                    const e = C > 0 ? ei : ti,
                        t = y.length + e.length,
                        a = Math.max(0, x - t);
                    return { activeSlotsAmount: t, activeSlotsIds: [...y, ...e, ...Array(a).fill(Rn)] };
                }, [C, y, x]));
        var y, x, C;
        const w =
            ((j = b),
            r.useMemo(() => {
                var e, t;
                const a = [];
                for (let s = 0; s < j.length; s += Ws) a.push(j.slice(s, s + Ws));
                return (
                    1 === (null == (e = a.at(-1)) ? void 0 : e.length) && (null == (t = a.at(-1)) || t.push(Rn)),
                    a
                );
            }, [j]));
        var j;
        ($i(a, p, g, h, v > f),
            (function (e, t, a, s, n) {
                const i = s === Ws;
                function r(s) {
                    a(-1 !== e ? t[e + s].inventoryId : t[0].inventoryId);
                }
                const o = [
                    { key: we.ARROW_DOWN, blockKey: !i || e % s == s - 1 || e === t.length - 1, action: () => r(1) },
                    { key: we.ARROW_UP, blockKey: !i || e % s == 0, action: () => r(-1) },
                    { key: we.ARROW_LEFT, blockKey: i ? e < s : 0 === e, action: () => r(-s) },
                    {
                        key: we.ARROW_RIGHT,
                        blockKey: i ? e > t.length - (s + 1) : e === t.length - 1,
                        action: () => r(s),
                    },
                    { key: we.HOME, blockKey: 0 === t.length, action: () => a(t[0].inventoryId) },
                    { key: we.END, blockKey: 0 === t.length, action: () => a(t[t.length - 1].inventoryId) },
                ];
                for (const { key: l, blockKey: c, action: d } of o) {
                    const e = n || c ? we.NONE : l;
                    je(e, d);
                }
            })(p, d, s.controls.select, h, 0 === o.length || i));
        const N = (function (e, t) {
            const [a, s] = r.useState(0 === t),
                n = Ne();
            return (
                r.useEffect(() => {
                    if (a || 0 === t) return s(!0);
                    function i() {
                        (s(!0), r.dispose(), n.clear());
                    }
                    n.run(i);
                    const r = new ve()
                        .add(n.clear)
                        .add(e.events.on('resizeHandled', () => n.run(i)))
                        .add(e.events.on('recalculateContent', () => n.run(i)));
                    return r.dispose;
                }, [e, t, a, n]),
                a
            );
        })(a, o.length);
        return l.jsxs(l.Fragment, {
            children: [
                l.jsx(Zi, {
                    api: a,
                    widthElement: g,
                    totalElements: h === Ws ? w.length : b.length,
                    disabled: v > f,
                    onDraggingState: t,
                    classNames: { base: c(Qi, N && Ji), element: c(Xi, e && Yi) },
                    renderElement: (t) => {
                        const a = c(Xi, e && Yi);
                        return h === Ws
                            ? l.jsx(Se, {
                                  failure: () => l.jsx(Bi, { className: a, width: g }),
                                  children: l.jsx(
                                      zi,
                                      {
                                          chunkedSlots: w[t],
                                          currentVehicleId: null == m ? void 0 : m.id,
                                          width: g,
                                          classNames: { slot: a },
                                          double: !0,
                                      },
                                      t,
                                  ),
                              })
                            : l.jsx(Se, {
                                  failure: () => l.jsx(Bi, { className: a, width: g }),
                                  children: l.jsx(
                                      Oi,
                                      {
                                          slotId: b[t],
                                          currentVehicleId: null == m ? void 0 : m.id,
                                          width: g,
                                          className: a,
                                          double: !1,
                                      },
                                      b[t] ?? t,
                                  ),
                              });
                    },
                }),
                u.createPortal(e && l.jsx('div', { className: Ki }), document.body),
            ],
        });
    }),
    tr = r.lazy(() => Es(() => import('../../../chunks/widget2.js'), [], import.meta.url));
function ar(e) {
    var t;
    const a = null == (t = e.options) ? void 0 : t.rootId;
    if (a) return l.jsx(ke, { id: a, children: l.jsx(r.Suspense, { children: l.jsx(tr, { ...e }) }) });
    console.error('TeaserWidget: rootId is not given');
}
const sr = 'AllVehiclesButton_3837d663',
    nr = 'AllVehiclesButton_grid_64f1c816',
    ir = 'AllVehiclesButton_content_75d29fb4';
function rr() {
    const e = te.resolve('strings'),
        t = Pe(),
        a = ae('hangar.filter.all_vehicle_button', 'hangar.filter.all_vehicle_button_upscale'),
        s = se({
            header: e.readOrEmpty('hangar.tooltip.filters.myVehicle.header'),
            body: e.readOrEmpty('hangar.tooltip.filters.myVehicle.body'),
        });
    function n() {
        t.push('/hangar/allVehicles');
    }
    return l.jsxs(be, {
        ...s,
        classNames: { base: sr },
        theme: be.themes.secondary,
        size: be.sizes.small,
        autoAlignContent: !1,
        onClick: n,
        children: [
            l.jsx(ie, { className: nr, path: a }),
            l.jsx(Ee, {
                keyCode: we.SPACE,
                onActive: n,
                silent: !0,
                classNames: { content: ir },
                children: l.jsx(Ee.Code, {}),
            }),
        ],
    });
}
const or = {
    frames: {
        import_hover: {
            frame: { x: 0, y: 0, w: 46, h: 49 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 49 },
            sourceSize: { w: 46, h: 49 },
            pivot: { x: 0.5, y: 0.5 },
        },
        import: {
            frame: { x: 46, y: 0, w: 46, h: 49 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 49 },
            sourceSize: { w: 46, h: 49 },
            pivot: { x: 0.5, y: 0.5 },
        },
        alert_lg: {
            frame: { x: 0, y: 49, w: 48, h: 48 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            pivot: { x: 0.5, y: 0.5 },
        },
        close_48: {
            frame: { x: 48, y: 49, w: 48, h: 48 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            pivot: { x: 0.5, y: 0.5 },
        },
        add: {
            frame: { x: 92, y: 0, w: 46, h: 46 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 46 },
            sourceSize: { w: 46, h: 46 },
            pivot: { x: 0.5, y: 0.5 },
        },
        add_hover: {
            frame: { x: 0, y: 97, w: 46, h: 46 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 46 },
            sourceSize: { w: 46, h: 46 },
            pivot: { x: 0.5, y: 0.5 },
        },
        alert: {
            frame: { x: 96, y: 46, w: 29, h: 27 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 29, h: 27 },
            sourceSize: { w: 29, h: 27 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_add_hover: {
            frame: { x: 96, y: 73, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_close: {
            frame: { x: 46, y: 97, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        trash_can: {
            frame: { x: 70, y: 97, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_close_hover: {
            frame: { x: 94, y: 97, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        checked: {
            frame: { x: 138, y: 0, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_add: {
            frame: { x: 138, y: 24, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        copied: {
            frame: { x: 125, y: 48, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        copy: {
            frame: { x: 125, y: 72, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        edit: {
            frame: { x: 120, y: 96, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_add_active: {
            frame: { x: 0, y: 143, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_close_active: {
            frame: { x: 24, y: 143, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        arrow_down: {
            frame: { x: 149, y: 48, w: 12, h: 12 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 12, h: 12 },
            sourceSize: { w: 12, h: 12 },
            pivot: { x: 0.5, y: 0.5 },
        },
    },
    meta: { size: { w: 162, h: 167 }, scale: 1 },
};
function lr({ value: e, ...t }) {
    return l.jsx(Me, { ...t, sprite: or, path: 'hangar.playlists.icons', icon: e, className: t.className });
}
const cr = re('IconContainer', 'Icon_container_83f4dd0e'),
    dr = d(function (e) {
        const t = En(),
            a = In().model.byIdUnsafe(e.id);
        De(void 0 !== a, `Playlist with ${e.id} is not found`);
        const s = t.model.accumulateByIds(a.list).length;
        return a.list.length <= s
            ? null
            : l.jsx(ur, {
                  className: e.className,
                  displayAmount: s,
                  size: e.size,
                  realAmountInPlaylist: a.list.length,
              });
    });
function ur(e) {
    const t = te.resolve('strings'),
        a = t
            .readOrEmpty('playlists.validation.unavailable.title')
            .replace('{{display}}', e.displayAmount.toString())
            .replace('{{total}}', e.realAmountInPlaylist.toString()),
        s = se({ header: a, body: t.readOrEmpty('playlists.validation.unavailable.body') }),
        n = 'lg' === e.size ? 'alert_lg' : 'alert',
        i = 'lg' === e.size ? cr : 'div';
    return l.jsx(i, { ...s, className: e.className, children: l.jsx(lr, { className: e.className, value: n }) });
}
const mr = 'CopyButton_825f729f',
    pr = 'CopyButton_base__enabled_49d34ed8',
    _r = 'CopyButton_base__disabled_4ef2eeda',
    hr = te.resolve('strings'),
    gr = function (e) {
        const [t, a] = r.useState('copy'),
            s = Te(),
            n = se({
                header: hr.readOrEmpty('playlists.share.copy_button.title'),
                body: hr.readOrEmpty('playlists.share.copy_button.body'),
            }),
            i = ee();
        return l.jsx(lr, {
            ...n,
            value: t,
            'data-test-id': 'copyButton',
            className: c(mr, e.disabled ? _r : pr),
            onClick: (t) => {
                if ((n.onClick(), e.disabled)) return;
                i.play('click', { target: 'vehicle:playlists:copy_button', original: t });
                const r = e.onCopy();
                'string' == typeof r &&
                    Le(r)
                        .then((e) => {
                            (e ? a('copied') : console.error('Write to clipboard has been failure'),
                                s.run(() => a('copy'), 1e3));
                        })
                        .catch((e) => console.error(e));
            },
            onMouseEnter: (t) => {
                (n.onMouseEnter(),
                    e.disabled || i.play('mouse-enter', { target: 'vehicle:playlists:copy_button', original: t }));
            },
        });
    },
    vr = 'EditButton_bdfe61f0',
    fr = te.resolve('strings');
function br({ id: e }) {
    const t = ee(),
        a = Pe(),
        s = se({
            header: fr.readOrEmpty('playlists.edit_button.title'),
            body: fr.readOrEmpty('playlists.edit_button.body'),
        });
    return l.jsx(lr, {
        ...s,
        className: vr,
        value: 'edit',
        'data-test-id': 'editButton',
        onClick: (n) => {
            (s.onClick(),
                t.play('click', { target: 'vehicle:playlists:edit_button', original: n }),
                a.push('/hangar/editVehiclePlaylists', { id: e }));
        },
        onMouseEnter: (e) => {
            (s.onMouseEnter(), t.play('mouse-enter', { target: 'vehicle:playlists:edit_button', original: e }));
        },
    });
}
const yr = 'Item_background_321cda1e',
    xr = 'Item_c5163bf',
    Cr = 'Item_base__selected_5f6fcc69',
    wr = 'Item_button_8b3e738d',
    jr = 'Item_selectedIcon_eb50b3a6',
    Nr = 'Item_alertIcon_aef37546',
    Ir = 'Item_actions_8ac98f7',
    Sr = d(function (e) {
        const { playlist: t } = e,
            a = In(),
            s = Ae(),
            n = se({ body: t.title }),
            [i, r] = vs(t.title, 15);
        return l.jsxs('div', {
            ...(r && n),
            className: c(xr, a.model.currentId() === e.id && Cr),
            children: [
                l.jsx('div', { className: yr }),
                l.jsxs(Be, {
                    className: wr,
                    onClick: () => {
                        (a.controls.select(e.id), s.close());
                    },
                    'data-test-id': `playlist-${i}`,
                    children: [
                        l.jsxs('span', {
                            children: [
                                l.jsx(lr, { value: 'checked', className: jr }),
                                i,
                                l.jsx(dr, { id: e.id, className: Nr }),
                            ],
                        }),
                        l.jsxs('span', {
                            className: Ir,
                            onClick: (e) => e.stopPropagation(),
                            children: [
                                l.jsx(gr, {
                                    onCopy: function () {
                                        const e = fs(t.list);
                                        return 'error' === e.type ? console.error(e.error) : e.value;
                                    },
                                    disabled: 0 === t.list.length,
                                }),
                                l.jsx(br, { id: e.id }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    kr = d(function (e) {
        const t = In().model.byId(e.id);
        return 'ok' === t.type && void 0 !== t.value ? l.jsx(Sr, { playlist: t.value, id: e.id }) : null;
    }),
    Pr = d(function () {
        const e = In(),
            t = Ae();
        return l.jsxs('div', {
            className: c(xr, !e.model.currentId() && Cr),
            children: [
                l.jsx('div', { className: yr }),
                l.jsx(Be, {
                    className: wr,
                    onClick: () => {
                        (e.controls.select(void 0), t.close());
                    },
                    'data-test-id': 'playlist-AllVehicles',
                    children: l.jsxs('span', {
                        children: [
                            l.jsx(lr, { value: 'checked', className: jr }),
                            te.resolve('strings').readOrEmpty('pages.titles.allVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    Er = 'Content_divider_b37223ef',
    Mr = 'Content_icon_4da9c1eb',
    Dr = 'Content_trigger_4b0aad5c',
    Tr = 'Content_triggerText_2dc694b6',
    Lr = d(function () {
        const e = In().model.sortedIds();
        return l.jsxs('div', { children: [l.jsx(Pr, {}), e.map((e) => l.jsx(kr, { id: e }, e))] });
    }),
    Ar = re('Divider', Er),
    Br = d(function (e) {
        const t = In(),
            a = te.resolve('strings'),
            [s, n] = Oe('add'),
            i = e.asChild ? ze : Be;
        return l.jsxs(i, {
            className: Dr,
            'data-test-id': 'createPlaylist',
            onMouseEnter: () => n(!0),
            onMouseLeave: () => n(!1),
            onClick: t.controls.create,
            children: [
                l.jsx(cr, { className: Mr, children: l.jsx(lr, { value: s }) }),
                l.jsx('span', { className: Tr, children: a.readOrEmpty('playlists.list.create') }),
            ],
        });
    }),
    Or = function (e) {
        const t = In(),
            a = te.resolve('strings'),
            [s, n] = Oe('import'),
            i = e.asChild ? ze : Be;
        return l.jsxs(i, {
            className: Dr,
            'data-test-id': 'importPlaylist',
            onClick: t.controls.openImport,
            onMouseEnter: () => n(!0),
            onMouseLeave: () => n(!1),
            children: [
                l.jsx(cr, { className: Mr, children: l.jsx(lr, { value: s }) }),
                l.jsx('span', { className: Tr, children: a.readOrEmpty('playlists.imports.trigger') }),
            ],
        });
    },
    zr = {
        popover: 'Dropdown_popover_b5203d93',
        scrollContent: 'Dropdown_scrollContent_7363dda3',
        bar: 'Dropdown_bar_2d94e05e',
        area__begin: 'Dropdown_area__begin_8a87ef04',
        area__end: 'Dropdown_area__end_ae66235b',
        list: 'Dropdown_list_41b8eefe',
        triggers: 'Dropdown_triggers_b8372e20',
        currentTitle: 'Dropdown_currentTitle_b411f246',
        trigger: 'Dropdown_trigger_f754201d',
        alert: 'Dropdown_alert_90bd0db6',
        arrow: 'Dropdown_arrow_5a21c825',
        arrow__opened: 'Dropdown_arrow__opened_ef9f7c1d',
    },
    Rr = te.resolve('strings'),
    $r = [25, 25],
    Vr = d(function () {
        const { api: e } = Re(),
            [t, a] = ye(e, $r),
            { opened: s } = Ae();
        return (
            r.useEffect(() => {
                if (s) return $e(() => $e(e.recalculateContent));
            }, [s, e.recalculateContent]),
            l.jsx(Ve, {
                className: c(zr.area, !t && zr.area__begin, !a && zr.area__end),
                classNames: { content: zr.scrollContent },
                children: l.jsx(Lr, {}),
            })
        );
    }),
    qr = d(function (e) {
        const t = kn();
        return t && t.model.enabled.get()
            ? l.jsx(qe.Portal, {
                  position: 'bottom',
                  ...e,
                  children: l.jsx(We, {
                      children: l.jsxs(qe.Display, {
                          'data-name': 'playlist-dropdown-content',
                          className: zr.popover,
                          children: [
                              l.jsx(qe.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                              l.jsx('div', {
                                  className: zr.list,
                                  children: l.jsxs(Fe, {
                                      children: [l.jsx(Vr, {}), l.jsx(He, { classNames: { base: zr.bar } })],
                                  }),
                              }),
                              l.jsx(Ar, {}),
                              l.jsxs('div', { className: zr.triggers, children: [l.jsx(Br, {}), l.jsx(Or, {})] }),
                          ],
                      }),
                  }),
              })
            : null;
    });
function Wr(e) {
    const t = Ae();
    return l.jsx(lr, { value: 'arrow_down', className: c(zr.arrow, t.opened && zr.arrow__opened, e.className) });
}
const Fr = d(function (e) {
        const [t] = vs(e.title, e.limit ?? 30);
        return l.jsxs('div', {
            className: c(zr.currentTitle, e.className),
            children: [t, e.id && l.jsx(dr, { className: zr.alert, id: e.id, size: e.alertSize })],
        });
    }),
    Hr = d(function (e) {
        const t = kn(),
            a = null == t ? void 0 : t.model.current(),
            s = ee(),
            n = se({ header: null == a ? void 0 : a.title, body: Rr.readOrEmpty('playlists.trigger.explain') });
        if (!t || !1 === t.model.enabled.get()) return e.fallback;
        const i = e.asChild ? ze : 'div';
        return l.jsx(qe.Trigger, {
            children: (t) =>
                l.jsx(l.Fragment, {
                    children: l.jsxs(i, {
                        ...t,
                        onMouseEnter: (e) => {
                            (null == n || n.onMouseEnter(),
                                s.play('mouse-enter', { target: 'vehicle:playlists:dropdown_trigger', original: e }));
                        },
                        onClick: (e) => {
                            (null == n || n.onClick(),
                                s.play('click', { target: 'vehicle:playlists:dropdown_trigger', original: e }),
                                t.onClick(e));
                        },
                        onMouseLeave: null == n ? void 0 : n.onMouseLeave,
                        'data-name': 'playlist-dropdown-trigger',
                        'data-test-id': 'playlistDropdown',
                        className: c(zr.trigger, e.className),
                        children: [
                            l.jsx(Ge, { children: e.children }),
                            a
                                ? l.jsx(Fr, { limit: e.limit, id: a.id, title: a.title, alertSize: e.alertSize })
                                : l.jsx(Fr, { title: Rr.readOrEmpty('pages.titles.allVehicles') }),
                            l.jsx(Wr, {}),
                        ],
                    }),
                }),
        });
    }),
    Gr = r.createContext(void 0);
function Zr() {
    const e = r.useContext(Gr);
    if (!e) throw new Error("Can't call useFilters outside of FiltersContext Provider. Please wrap it.");
    return e;
}
const Ur = {
        popover: 'FilterPopover_popover_accae82b',
        header: 'FilterPopover_header_98e6ac8',
        playlistTrigger: 'FilterPopover_playlistTrigger_fd8fa4b3',
        playlistTitle: 'FilterPopover_playlistTitle_595e5af4',
        playlistPortal: 'FilterPopover_playlistPortal_1868cfd6',
        currentValue: 'FilterPopover_currentValue_db69f42c',
        body: 'FilterPopover_body_9e82b944',
        category: 'FilterPopover_category_aa274a28',
        vehicleLevel: 'FilterPopover_vehicleLevel_41885117',
        scroll: 'FilterPopover_scroll_bce24275',
        filterButton: 'FilterPopover_filterButton_8a608ce2',
        filterTrigger: 'FilterPopover_filterTrigger_bec0927e',
        filterTrigger__activeFilter: 'FilterPopover_filterTrigger__activeFilter_b08c0419',
        triggerContent: 'FilterPopover_triggerContent_29db43f9',
        bulb: 'FilterPopover_bulb_ed2e0058',
        activeFilterContent: 'FilterPopover_activeFilterContent_3dc1bcaa',
        total: 'FilterPopover_total_edd4808d',
        slash: 'FilterPopover_slash_5ea5aa2b',
        resetIcon: 'FilterPopover_resetIcon_20987c04',
        toggleContainer: 'FilterPopover_toggleContainer_c7079ba8',
        toggleContainer__type: 'FilterPopover_toggleContainer__type_38a25c90',
        toggle: 'FilterPopover_toggle_747f4b53',
        toggle__type: 'FilterPopover_toggle__type_6486dde5',
        nationWrapper: 'FilterPopover_nationWrapper_c9512daf',
        nationIcon: 'FilterPopover_nationIcon_2456921e',
        toggle__activated: 'FilterPopover_toggle__activated_19a04a6d',
        specialsIcons: 'FilterPopover_specialsIcons_5a3d8e7',
        specialsIcons__favorite: 'FilterPopover_specialsIcons__favorite_c7792d3a',
        searchInputWrapper: 'FilterPopover_searchInputWrapper_dc7e630e',
        search: 'FilterPopover_search_19a04a6d',
        inputField: 'FilterPopover_inputField_a2989dce',
        inputPlaceholder: 'FilterPopover_inputPlaceholder_29ddba9c',
        footer: 'FilterPopover_footer_b16000c8',
        footerButtons: 'FilterPopover_footerButtons_69a472c1',
        carouselIcon: 'FilterPopover_carouselIcon_a4555032',
        carouselIcon__active: 'FilterPopover_carouselIcon__active_29db43f9',
        carouselChanger: 'FilterPopover_carouselChanger_4432f804',
    },
    Kr = d(function (e) {
        const t = Zr(),
            a = t.tooltipHeaderMap ?? Us,
            s = t.tooltipBodyMap ?? Ks,
            n = t.filters.get(),
            i = te.resolve('strings'),
            o = r.useMemo(() => {
                var t;
                if ('role' === e.event.type) {
                    const t = e.event.role;
                    return Object.values(n).some((e) => e.some((e) => e.includes(t)));
                }
                return (null == (t = n[e.event.field]) ? void 0 : t.includes(e.event.value)) || !1;
            }, [e.event, n]),
            d = e.tooltip.body !== Gs ? i.readOrEmpty(`tank_carousel_filter.tooltip.${s[e.tooltip.body]}.body`) : '',
            u = se({ header: i.readOrEmpty(`${a[e.tooltip.header]}`), body: d });
        return l.jsx(Ze, {
            ...(e.tooltip.body !== Gs && u),
            theme: Ke.primary,
            size: Ue.extraSmall,
            className: c(Ur.toggle, o && Ur.toggle__activated, e.className),
            activated: o,
            onClick: () => {
                t.change(e.event);
            },
            children: e.children,
        });
    });
function Qr(e) {
    return l.jsx('div', {
        className: c(Ur.toggleContainer, e.className),
        children: Js.map((e) =>
            l.jsx(
                Kr,
                {
                    tooltip: { header: e, body: Fs },
                    event: { type: 'role', role: e },
                    children: l.jsx(Xe, { roleKey: e, size: Xe.sizes.x24x24, className: Ur.icon }),
                },
                e,
            ),
        ),
    });
}
function Jr(e) {
    return l.jsx('div', {
        className: c(Ur.toggleContainer, Ur.toggleContainer__type, e.className),
        children: Ys.map((e) =>
            l.jsx(
                Kr,
                {
                    tooltip: { header: e, body: Hs },
                    event: { field: tn, type: 'regular', value: e },
                    className: Ur.toggle__type,
                    children: l.jsx(Je, { type: e, size: Je.sizes.x24x24 }),
                },
                e,
            ),
        ),
    });
}
function Xr(e) {
    return l.jsx('div', {
        className: c(Ur.toggleContainer, e.className),
        children: e.orderedNations.map((e) =>
            l.jsx(
                Kr,
                {
                    tooltip: { header: e, body: Zs },
                    event: { field: an, type: 'regular', value: e },
                    children: l.jsx('div', {
                        className: Ur.nationWrapper,
                        children: l.jsx(ie, { className: Ur.nationIcon, path: `flags.c_60x40.${e}` }),
                    }),
                },
                e,
            ),
        ),
    });
}
function Yr(e) {
    return l.jsx('div', {
        className: c(Ur.toggleContainer, e.className),
        children: en.map((e) =>
            l.jsx(
                Kr,
                {
                    tooltip: { header: 'tier', body: Gs },
                    event: { field: sn, type: 'regular', value: `level_${e}` },
                    children: l.jsx(Ye, { className: Ur.vehicleLevel, value: e }),
                },
                e,
            ),
        ),
    });
}
function eo(e) {
    const t = ae(`hangar.filter.special.${e.imagePath}`, `hangar.filter.special.${e.imagePath}_upscale`);
    return l.jsx(
        Kr,
        {
            tooltip: { header: e.special, body: e.special },
            event: { field: nn, type: 'regular', value: e.special },
            children: l.jsx(ie, {
                className: c(Ur.specialsIcons, 'favorite' === e.special && Ur.specialsIcons__favorite),
                path: t,
            }),
        },
        e.special,
    );
}
function to() {
    const e = ae('hangar.filter.special.isCommonProgression', 'hangar.filter.special.isCommonProgression_upscale');
    return l.jsx(Kr, {
        tooltip: { header: Qs, body: Qs },
        event: { field: rn, type: 'regular', value: Qs },
        children: l.jsx(ie, { className: Ur.specialsIcons, path: e }),
    });
}
const ao = d(function (e) {
    const t = Zr(),
        a = t.specialIds ?? Xs,
        s = En(),
        n = s.model.bpState.active.get(),
        i = 0 === s.model.rentVehiclesList().length ? a.filter((e) => 'rented' !== e) : a;
    return l.jsxs('div', {
        className: c(Ur.toggleContainer, e.className),
        children: [
            i.map((e) => {
                var a;
                return l.jsx(eo, { imagePath: (null == (a = t.imagesMap) ? void 0 : a[e]) ?? e, special: e }, e);
            }),
            n && l.jsx(to, {}),
        ],
    });
});
function so() {
    const e = at(),
        [t, a] = r.useState(!1);
    return (
        r.useEffect(() => {
            const s = e.inputRef.current;
            if (t || !s) return;
            (e.focus(), a(!0));
            const n = s.value.length;
            s.setSelectionRange(n, n);
            const i = (e) => {
                s && !s.contains(e.target) && a(!0);
            };
            return (document.addEventListener('mousedown', i), () => document.removeEventListener('mousedown', i));
        }, [e, t]),
        null
    );
}
function no({ fieldClassName: e, value: t, ...a }) {
    const s = te.resolve('strings');
    return l.jsxs(et.Provider, {
        value: t,
        children: [
            l.jsx(so, {}),
            l.jsxs(et.Decoration, {
                className: c(Ur.search, a.className),
                children: [
                    l.jsx(et.Icon, { icon: et.icons.search }),
                    l.jsx(et.Field, {
                        ...a,
                        className: Ur.inputField,
                        classNames: { placeholder: Ur.inputPlaceholder },
                        maxLength: 50,
                        placeholderVisibility: tt.value,
                        children: s.readOrEmpty('tank_carousel_filter.popover.label.searchNameVehicle'),
                    }),
                    t.length > 0 && l.jsx(et.ClearButton, {}),
                ],
            }),
        ],
    });
}
function io({ current: e, total: t }) {
    const a = te.resolve('intl'),
        s = te.resolve('strings');
    return l.jsxs(qe.Header, {
        className: Ur.header,
        children: [
            l.jsx(qe.Title, { children: l.jsx(Y, { path: 'tank_carousel_filter.popover.title' }) }),
            l.jsx(qe.Subtitle, {
                children: l.jsx(Y, {
                    upgradeLegacy: !0,
                    path: 'tank_carousel_filter.popover.counter',
                    params: {
                        count: l.jsxs('span', {
                            children: [
                                l.jsx('span', { className: Ur.currentValue, children: a.formatNumber('integral', e) }),
                                l.jsx('span', { className: Ur.slash, children: s.readOrEmpty('common.common.slash') }),
                                a.formatNumber('integral', t),
                            ],
                        }),
                    },
                }),
            }),
        ],
    });
}
const ro = r.memo(function (e) {
        return l.jsx(Fe, {
            children: l.jsxs(Qe, {
                className: e.className,
                barClassNames: e.barClassNames,
                scrollClassNames: e.scrollClassNames,
                children: [
                    l.jsx(Y, { className: Ur.category, path: 'tank_carousel_filter.popover.label.vehicleTypes' }),
                    l.jsx(Jr, {}),
                    l.jsx(Y, { className: Ur.category, path: 'tank_carousel_filter.popover.label.vehicleRole' }),
                    l.jsx(Qr, {}),
                    l.jsx(Y, { className: Ur.category, path: 'tank_carousel_filter.popover.label.nations' }),
                    l.jsx(Xr, { orderedNations: e.orderedNations }),
                    l.jsx(Y, { className: Ur.category, path: 'tank_carousel_filter.popover.label.levels' }),
                    l.jsx(Yr, {}),
                    l.jsx(Y, { className: Ur.category, path: 'tank_carousel_filter.popover.label.specials' }),
                    l.jsx(ao, {}),
                ],
            }),
        });
    }),
    oo = 'vehicle:filter:filter-button:reset-icon',
    lo = r.forwardRef(function ({ children: e, className: t, ...a }, s) {
        return l.jsx(be, {
            ...a,
            ref: s,
            classNames: { base: c(Ur.filterButton, t) },
            size: be.sizes.small,
            theme: a.theme,
            autoAlignContent: !1,
            children: e,
        });
    }),
    co = d(
        r.forwardRef(function ({ current: e, total: t, classNames: a, ...s }, n) {
            const i = Zr(),
                r = Ae(),
                o = te.resolve('intl'),
                d = te.resolve('strings'),
                u = ae('hangar.filter.filter_button', 'hangar.filter.filter_button_upscale'),
                m = ae('ui_kit.close_button.icon_small', 'ui_kit.close_button.icon_medium'),
                p = i.hasFilter(),
                _ = ee();
            return l.jsx(Ze, {
                ...s,
                ref: n,
                size: Ue.extraSmall,
                theme: Ke.primary,
                activated: r.opened,
                'data-test-id': 'vehiclesFilter',
                classNames: {
                    base: c(Ur.filterTrigger, p && Ur.filterTrigger__activeFilter, null == a ? void 0 : a.base),
                    bulb: Ur.bulb,
                    content: Ur.triggerContent,
                },
                children:
                    s.children ??
                    (p
                        ? l.jsxs('div', {
                              className: c(Ur.activeFilterContent, null == a ? void 0 : a.content),
                              children: [
                                  o.formatNumber('integral', e),
                                  l.jsx('span', {
                                      className: Ur.slash,
                                      children: d.readOrEmpty('common.common.slash'),
                                  }),
                                  l.jsx('span', { className: Ur.total, children: o.formatNumber('integral', t) }),
                                  l.jsx(ie, {
                                      path: m,
                                      className: Ur.resetIcon,
                                      onClick: (e) => {
                                          (_.play('close', { target: oo, original: e }),
                                              e.stopPropagation(),
                                              i.reset());
                                      },
                                      onMouseEnter: (e) => {
                                          _.play('mouse-enter', { target: oo, original: e });
                                      },
                                  }),
                              ],
                          })
                        : l.jsx(ie, { path: u, width: 24, height: 24 })),
            });
        }),
    ),
    uo = d(function () {
        const e = vn();
        function t(e) {
            e.keyCode !== we.ESCAPE && e.stopPropagation();
        }
        return l.jsx(no, {
            value: e.model.searchName.get(),
            onChange: (t) => e.controls.search(t.target.value),
            onKeyDown: t,
            onKeyUp: t,
        });
    }),
    mo = d(function () {
        const e = En(),
            t = e.model.vehicles.amount(),
            a = e.model.current.amount();
        return l.jsx(io, { current: a, total: t });
    }),
    po = d(function ({ classNames: e }) {
        const t = te.resolve('strings'),
            a = En(),
            s = a.model.vehicles.amount(),
            n = a.model.current.amount(),
            i = se({
                header: t.readOrEmpty('tank_carousel_filter.tooltip.params.header'),
                body: t.readOrEmpty('tank_carousel_filter.tooltip.params.body'),
            });
        return l.jsx(qe.Trigger, {
            children: (t) =>
                l.jsx('div', {
                    ...i,
                    children: l.jsx(co, {
                        ...t,
                        classNames: { base: null == e ? void 0 : e.trigger, content: null == e ? void 0 : e.content },
                        current: n,
                        total: s,
                    }),
                }),
        });
    }),
    _o = d(function () {
        const e = vn(),
            t = e.model.carouselRowCount.get(),
            a = e.model.computes.nations(),
            s = te.resolve('strings');
        const n = se({
                header: s.readOrEmpty('tank_carousel_filter.tooltip.toggleSwitchCarousel.header'),
                body: s.readOrEmpty('tank_carousel_filter.tooltip.toggleSwitchCarousel.body'),
            }),
            i = se({
                header: s.readOrEmpty('tank_carousel_filter.tooltip.searchInput.header'),
                body: s.readOrEmpty('tank_carousel_filter.tooltip.searchInput.body').replace('%(count)d', String(50)),
            });
        return l.jsxs(qe.Body, {
            className: Ur.body,
            children: [
                l.jsx(ro, { className: Ur.scroll, orderedNations: a }),
                l.jsxs('div', {
                    className: Ur.footer,
                    children: [
                        l.jsx(qe.Divider, {}),
                        l.jsxs('div', {
                            className: Ur.footerButtons,
                            children: [
                                l.jsx(lo, {
                                    ...n,
                                    theme: be.themes.secondary,
                                    className: Ur.carouselChanger,
                                    onClick: function () {
                                        const a = 1 === t ? Ws : 1;
                                        e.controls.carouselTypeChange(a);
                                    },
                                    children: l.jsx(ie, {
                                        className: c(Ur.carouselIcon, t === Ws && Ur.carouselIcon__active),
                                        path: 'hangar.filter.carousel_selector',
                                    }),
                                }),
                                l.jsx('div', { ...i, className: Ur.searchInputWrapper, children: l.jsx(uo, {}) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ho = d(function ({ pivot: e = 0, position: t = 'bottom', classNames: a, customFilterProps: s }) {
        const n = vn(),
            i = r.useMemo(
                () => ({
                    filters: n.model.filters,
                    search: n.model.searchName,
                    hasFilter: n.model.computes.hasFilters,
                    defaultFilters: n.model.computes.default,
                    change: n.controls.change,
                    reset: n.controls.reset,
                    ...s,
                }),
                [n, s],
            );
        return l.jsx(Gr.Provider, {
            value: i,
            children: l.jsx('div', {
                className: null == a ? void 0 : a.base,
                children: l.jsxs(qe, {
                    children: [
                        l.jsx(po, {
                            classNames: {
                                trigger: null == a ? void 0 : a.trigger,
                                content: null == a ? void 0 : a.triggerContent,
                            },
                        }),
                        l.jsx(qe.Portal, {
                            lazy: !0,
                            position: t,
                            pivot: e,
                            children: l.jsx(We, {
                                children: l.jsxs(qe.Display, {
                                    className: Ur.popover,
                                    children: [
                                        l.jsx(qe.Tip, { position: 'bottom', size: '80rem', offset: '120rem' }),
                                        l.jsx(qe.Close, {}),
                                        l.jsx(mo, {}),
                                        l.jsx(go, {}),
                                        l.jsx(_o, {}),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    }),
    go = d(function () {
        const e = kn(),
            { id: t } = Ae();
        return e && !1 !== e.model.enabled.get()
            ? l.jsxs(qe, {
                  children: [
                      l.jsx(qr, { className: Ur.playlistPortal, 'data-popover-outside-click-whitelist-id': t }),
                      l.jsx(Hr, {
                          asChild: !0,
                          className: Ur.playlistTrigger,
                          fallback: null,
                          limit: 15,
                          children: l.jsx(be, { theme: 'secondary', classNames: { content: Ur.playlistTitle } }),
                      }),
                  ],
              })
            : null;
    }),
    vo = '/hangar/{root}',
    fo = {
        root: '/hangar/loadout',
        equipments: '/hangar/loadout/equipment',
        instructions: '/hangar/loadout/instructions',
        shells: '/hangar/loadout/shells',
        consumables: '/hangar/loadout/consumables',
    },
    bo = '/hangar/allVehicles',
    yo = '/hangar/editVehiclePlaylists',
    xo = { boost: 'boost', reduce: 'reduce', none: 'none' };
function Co(e, t, a) {
    const s = 100 / a,
        n = e - t * s;
    return (Math.max(0, Math.min(s, n)) / s) * 100;
}
function wo(e, t, a) {
    return Array.from({ length: a }, (s, n) => {
        const i = Co(e, n, a);
        return { currentPercent: i, modifiedPercent: Co(t, n, a) - i };
    });
}
function jo({ currentPercent: e, modifiedPercent: t }, a) {
    return a === xo.reduce ? [t, e] : [e, t];
}
function No(e) {
    return st(e, ({ value: e, name: t, tooltipID: a, ...s }) => ({
        ...s,
        tooltipId: a,
        values: (() => {
            let e;
            const t = (t, a) => {
                var s, n;
                return (
                    !1 ===
                        ((e) =>
                            Array.isArray(e) &&
                            e.every(
                                (e) =>
                                    'object' == typeof e &&
                                    null !== e &&
                                    ((e) => 'number' == typeof e.value && 'string' == typeof e.state)(e),
                            ))(t) &&
                        ((e = a),
                        (s = t),
                        (n = '$input'),
                        ((Array.isArray(s) ||
                            m(
                                !0,
                                {
                                    method: 'typia.json.assertParse',
                                    path: n + '',
                                    expected: 'Array<ParamValue>',
                                    value: s,
                                },
                                e,
                            )) &&
                            s.every(
                                (t, a) =>
                                    ((('object' == typeof t && null !== t) ||
                                        m(
                                            !0,
                                            {
                                                method: 'typia.json.assertParse',
                                                path: n + '[' + a + ']',
                                                expected: 'ParamValue',
                                                value: t,
                                            },
                                            e,
                                        )) &&
                                        ((t, a, s = !0) =>
                                            ('number' == typeof t.value ||
                                                m(
                                                    s,
                                                    {
                                                        method: 'typia.json.assertParse',
                                                        path: a + '.value',
                                                        expected: 'number',
                                                        value: t.value,
                                                    },
                                                    e,
                                                )) &&
                                            ('string' == typeof t.state ||
                                                m(
                                                    s,
                                                    {
                                                        method: 'typia.json.assertParse',
                                                        path: a + '.state',
                                                        expected: 'string',
                                                        value: t.state,
                                                    },
                                                    e,
                                                )))(t, n + '[' + a + ']', !0)) ||
                                    m(
                                        !0,
                                        {
                                            method: 'typia.json.assertParse',
                                            path: n + '[' + a + ']',
                                            expected: 'ParamValue',
                                            value: t,
                                        },
                                        e,
                                    ),
                            )) ||
                            m(
                                !0,
                                {
                                    method: 'typia.json.assertParse',
                                    path: n + '',
                                    expected: 'Array<ParamValue>',
                                    value: s,
                                },
                                e,
                            )),
                    t
                );
            };
            return (e, a) => t(JSON.parse(e), a);
        })()(e),
        kpiBonusParams: t
            ? (() => {
                  let e;
                  const t = (t, a) => {
                      var s, n;
                      return (
                          !1 ===
                              ((e) =>
                                  'object' == typeof e &&
                                  null !== e &&
                                  ((e) => 'string' == typeof e.key && 'string' == typeof e.name)(e))(t) &&
                              ((e = a),
                              (n = '$input'),
                              ((('object' == typeof (s = t) && null !== s) ||
                                  m(
                                      !0,
                                      {
                                          method: 'typia.json.assertParse',
                                          path: n + '',
                                          expected: 'KpiBonusParams',
                                          value: s,
                                      },
                                      e,
                                  )) &&
                                  ((t, a, s = !0) =>
                                      ('string' == typeof t.key ||
                                          m(
                                              s,
                                              {
                                                  method: 'typia.json.assertParse',
                                                  path: a + '.key',
                                                  expected: 'string',
                                                  value: t.key,
                                              },
                                              e,
                                          )) &&
                                      ('string' == typeof t.name ||
                                          m(
                                              s,
                                              {
                                                  method: 'typia.json.assertParse',
                                                  path: a + '.name',
                                                  expected: 'string',
                                                  value: t.name,
                                              },
                                              e,
                                          )))(s, n + '', !0)) ||
                                  m(
                                      !0,
                                      {
                                          method: 'typia.json.assertParse',
                                          path: n + '',
                                          expected: 'KpiBonusParams',
                                          value: s,
                                      },
                                      e,
                                  )),
                          t
                      );
                  };
                  return (e, a) => t(JSON.parse(e), a);
              })()(t)
            : { key: '', name: '' },
    }));
}
function Io(e, t) {
    const { key: a, name: s } = t,
        n = te.resolve('strings');
    return '' !== s && '' !== a
        ? n.readOr(`tank_setup.kpi.bonus.ttc.${a}.${s}`, () => n.readOrEmpty(`tank_setup.kpi.bonus.${a}.${s}`))
        : n.readOrEmpty(`menu.tank_params.${e}`);
}
const [So, ko] = I('TechParamsProvider')(
    ({ observableModel: e }) => {
        const t = { groups: e.arrayClone('groups') };
        return {
            computes: {
                sectionParams: V.structural((e) =>
                    st(t.groups.get(), ({ id: t, indicator: a, isOpen: s, params: n, extraParams: i, ...r }) => {
                        const o = (function ({ currentPercent: e, modifiedPercent: t }) {
                            return t === e ? xo.none : t > e ? xo.boost : xo.reduce;
                        })(a);
                        return {
                            ...r,
                            type: t,
                            indicatorList: wo(...jo(a, o), e),
                            status: o,
                            opened: s,
                            params: No(n),
                            extraParams: No(i),
                        };
                    }),
                ),
            },
        };
    },
    ({ externalModel: e }) => ({ selectGroup: e.createCallback((e) => ({ groupName: e }), 'onGroupClick') }),
);
var Po = ((e) => (
    (e.None = 'none'),
    (e.Increase = 'increase'),
    (e.Decrease = 'decrease'),
    (e.Situational = 'situational'),
    e
))(Po || {});
const Eo = {
        base: 'Detail_98c9f049',
        base__moduleInstalled: 'Detail_base__moduleInstalled_680bfdfe',
        valueContainer: 'Detail_valueContainer_88910ef9',
        value: 'Detail_value_ecb66043',
        value__increase: 'Detail_value__increase_3e2aac8',
        value__decrease: 'Detail_value__decrease_77bd45aa',
        value__situational: 'Detail_value__situational_df78abf1',
        separator: 'Detail_separator_629a2ec8',
        icon: 'Detail_icon_9a3f3ac3',
        description: 'Detail_description_f080f1e6',
    },
    Mo = te.resolve('strings'),
    Do = te.resolve('images'),
    To = te.resolve('aliases'),
    Lo = te.resolve('intl');
function Ao({ id: e, values: t, moduleInstalled: a, kpiBonusParams: s, tooltipId: n, className: i }) {
    const r = p.useMemo(() => ({ tooltipId: n, paramId: e }), [n, e]),
        o = nt({ resId: To.read((e) => e.hangar.shared.VehicleParams('resId')), args: r });
    return l.jsxs('div', {
        className: c(Eo.base, a && Eo.base__moduleInstalled, i),
        ...o,
        children: [
            l.jsx('div', {
                className: Eo.valueContainer,
                children: t.map(({ value: e, state: t }, a) =>
                    l.jsxs(
                        p.Fragment,
                        {
                            children: [
                                a > 0 &&
                                    l.jsx('div', {
                                        className: Eo.separator,
                                        children: Mo.readOrEmpty('common.common.slash'),
                                    }),
                                l.jsx('div', {
                                    className: c(Eo.value, Eo[`value__${t}`]),
                                    children: Lo.formatReal('woZeroDigits', e),
                                }),
                            ],
                        },
                        `${e}-${t}-${a}`,
                    ),
                ),
            }),
            l.jsx('div', {
                className: Eo.icon,
                style: { backgroundImage: `url(${Do.readOrEmpty(`vehParams.small.${e}`)})` },
            }),
            l.jsx('div', { className: Eo.description, children: Io(e, s) }),
        ],
    });
}
const Bo = 'DetailsContainer_b85372ff',
    Oo = 'DetailsContainer_params_9bf7e9a4',
    zo = 'DetailsContainer_separator_f28e38c',
    Ro = 'DetailsContainer_detail_141e9abe';
function $o(e, t) {
    return t !== Po.None && it(e, (e) => e.state === Po.None);
}
function Vo({ params: e, extraParams: t, highlightType: a, className: s }) {
    return l.jsx('div', {
        className: c(Bo, s),
        children: l.jsxs('div', {
            className: Oo,
            children: [
                st(e, (e) => r.createElement(Ao, { ...e, key: e.id, className: Ro, moduleInstalled: $o(e.values, a) })),
                t.length > 0 && l.jsx('div', { className: zo }),
                st(t, (e) => r.createElement(Ao, { ...e, key: e.id, className: Ro, moduleInstalled: $o(e.values, a) })),
            ],
        }),
    });
}
function qo(e, t) {
    const a = rt(e, (e) => e.currentPercent > 0) ?? 0,
        s = rt(t, (e) => e.currentPercent > 0) ?? 0,
        n = rt(e, (e) => e.modifiedPercent > 0) ?? 0,
        i = rt(t, (e) => e.modifiedPercent > 0) ?? a;
    return e.map((t, r) => {
        var o, l;
        const c = (null == (o = e[r]) ? void 0 : o.currentPercent) ?? 0,
            d = (null == (l = e[r]) ? void 0 : l.modifiedPercent) ?? 0,
            u = (function (e, t, a, s, n) {
                return s > n
                    ? e > n
                        ? (e - n) * Ho
                        : 0
                    : t > a
                      ? e > a
                          ? (e - a) * Ho
                          : 0
                      : t < a && e > t
                        ? (a - e) * Ho
                        : 0;
            })(r, n, i, a, s);
        return {
            currentIndicator: Go({ percent: c, delay: u }),
            boostIndicator: Go({ percent: d, delay: u }),
            reduceIndicator: Go({ delay: u }),
        };
    });
}
function Wo(e, t) {
    const a = rt(e, (e) => e.currentPercent > 0) ?? 0,
        s = rt(t, (e) => e.currentPercent > 0) ?? 0,
        n = rt(t, (e) => e.modifiedPercent > 0),
        i = ot(t, (e) => e.modifiedPercent > 0) ?? 0;
    return e.map((e, t) => {
        const r = e.currentPercent ?? 0,
            o = void 0 === n ? Math.abs(t - s) * Ho : n > a ? (t - n) * Ho : (t - i) * Ho,
            l = (function (e, t, a, s) {
                return void 0 === a ? 0 : t < a ? (e < a ? (a - e) * Ho : 0) : t > s && e > s ? (e - s) * Ho : 0;
            })(t, a, n, i);
        return {
            currentIndicator: Go({ percent: r, delay: o }),
            boostIndicator: Go({ delay: l }),
            reduceIndicator: Go({ delay: l }),
        };
    });
}
function Fo(e, t) {
    if (0 === t.length)
        return e.map((e, t) => ({
            currentIndicator: Go({ percent: null == e ? void 0 : e.currentPercent, delay: t * Ho }),
            boostIndicator: Go(),
            reduceIndicator: Go({ percent: null == e ? void 0 : e.modifiedPercent, delay: t * Ho }),
        }));
    const a = ot(e, (e) => e.modifiedPercent > 0) ?? 0,
        s = (() => {
            const a = rt(t, (e) => e.currentPercent > 0) ?? 0,
                s = rt(t, (e) => e.modifiedPercent > 0) ?? a;
            return s > (rt(e, (e) => e.modifiedPercent > 0) ?? 0) ? s : (ot(t, (e) => e.modifiedPercent > 0) ?? a);
        })();
    return e.map((t, n) => {
        var i, r;
        const o = (null == (i = e[n]) ? void 0 : i.currentPercent) ?? 0,
            l = (null == (r = e[n]) ? void 0 : r.modifiedPercent) ?? 0,
            c = (function (e, t, a) {
                return t > a ? (e > a ? (e - a) * Ho : 0) : t < a && e < a ? (a - e) * Ho : 0;
            })(n, a, s);
        return {
            currentIndicator: Go({ percent: o, delay: c }),
            boostIndicator: Go({ delay: c }),
            reduceIndicator: Go({ percent: l, delay: c }),
        };
    });
}
const Ho = 100,
    Go = (e = {}) => ({ percent: e.percent ?? 0, delay: e.delay ?? 0 });
const Zo = {
        base: 'Indicator_be35e8ce',
        baseIndicator: 'Indicator_baseIndicator_804d6503',
        filledIndicatorsContainer: 'Indicator_filledIndicatorsContainer_87d2b117',
        currentIndicator: 'Indicator_currentIndicator_6d6696af',
        boostIndicator: 'Indicator_boostIndicator_1f6d9ad3',
        reduceIndicator: 'Indicator_reduceIndicator_e33f4fcd',
        layersContainer: 'Indicator_layersContainer_1a6c98e2',
        currentIndicatorLayer: 'Indicator_currentIndicatorLayer_c81bba7d',
        reduceIndicatorLayer: 'Indicator_reduceIndicatorLayer_d5b54d90',
        boostIndicatorLayer: 'Indicator_boostIndicatorLayer_d7d74a2f',
    },
    Uo = (e, t) => Ho * ((t - e) / 100);
function Ko({ className: e, currentIndicator: t, reduceIndicator: a, boostIndicator: s }) {
    const n = lt({ currentIndicator: t.percent, reduceIndicator: a.percent, boostIndicator: s.percent }) ?? {
            currentIndicator: 0,
            reduceIndicator: 0,
            boostIndicator: 0,
        },
        i = n.boostIndicator > s.percent,
        r = n.boostIndicator < s.percent,
        o = _({
            from: { width: `${n.reduceIndicator}%` },
            to: { width: `${a.percent}%` },
            delay: i ? a.delay + Math.abs(Uo(n.boostIndicator, s.percent)) : a.delay,
            config: { duration: n.boostIndicator === s.percent ? Ho : Math.abs(Uo(n.reduceIndicator, a.percent)) },
        }),
        d = _({
            from: { width: `${n.boostIndicator}%` },
            to: { width: `${s.percent}%` },
            delay: r ? s.delay + Math.abs(Uo(n.reduceIndicator, a.percent)) : s.delay,
            config: { duration: n.reduceIndicator === a.percent ? Ho : Math.abs(Uo(n.boostIndicator, s.percent)) },
        }),
        u = _({
            from: { width: `${n.currentIndicator}%` },
            to: { width: `${t.percent}%` },
            delay: i ? t.delay + Math.abs(Uo(n.boostIndicator, s.percent)) : t.delay,
            config: { duration: n.boostIndicator === s.percent ? Ho : Math.abs(Uo(n.currentIndicator, t.percent)) },
        });
    return l.jsxs('div', {
        className: c(Zo.base, e),
        children: [
            l.jsx('div', { className: Zo.baseIndicator }),
            l.jsxs('div', {
                className: Zo.filledIndicatorsContainer,
                children: [
                    l.jsx(h.div, { className: Zo.currentIndicator, style: u }),
                    l.jsx(h.div, { className: Zo.reduceIndicator, style: o }),
                    l.jsx(h.div, { className: Zo.boostIndicator, style: d }),
                ],
            }),
            l.jsxs('div', {
                className: Zo.layersContainer,
                children: [
                    l.jsx(h.div, { className: Zo.currentIndicatorLayer, style: u }),
                    l.jsx(h.div, { className: Zo.reduceIndicatorLayer, style: o }),
                    l.jsx(h.div, { className: Zo.boostIndicatorLayer, style: d }),
                ],
            }),
        ],
    });
}
const Qo = 'IndicatorContainer_f7506048',
    Jo = 'IndicatorContainer_indicator_b72c4e50';
function Xo({ indicatorList: e, status: t }) {
    const a = (function (e, t, a) {
        return a === xo.boost ? qo(t, e) : a === xo.reduce ? Fo(t, e) : Wo(t, e);
    })(lt(e) ?? [], e, t);
    return l.jsx('div', {
        className: Qo,
        children: a.map((e, t) =>
            r.createElement(Ko, { ...e, key: `${t}-${e.currentIndicator}-${e.currentIndicator}`, className: Jo }),
        ),
    });
}
const Yo = 'ParamsType_d8788f0e',
    el = 'ParamsType_icon_5f8d4ad',
    tl = 'ParamsType_type_cdb8f019',
    al = {
        ['relativeArmor']: (e) =>
            r.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    opacity: 0.5,
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M9.29569 9.61133V3.25977H10.6957V9.61133L16.8742 13.0464L16.1742 14.2139L9.99569 10.7789L3.81719 14.2139L3.11719 13.0464L9.29569 9.61133Z',
                    fill: '#D2D0CD',
                }),
                r.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M5.10187 6.49957L10 3.77839L14.8989 6.5L10.0007 9.22118L5.10187 6.49957ZM4.40104 7.66692V13.11L9.30019 15.8317V10.3887L4.40104 7.66692ZM10.7012 15.831L15.599 13.11V7.66778L10.7012 10.3887V15.831ZM10 2.22168L17 6.11057V13.8883L10 17.7772L3 13.8883V6.11057L10 2.22168Z',
                    fill: '#D2D0CD',
                }),
            ),
        ['relativeCamouflage']: (e) =>
            r.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement(
                    'g',
                    { clipPath: 'url(#clip0_27127_335393)' },
                    r.createElement('path', {
                        d: 'M10.3233 7.6932C11.6803 7.46513 12.4719 7.80724 12.4719 8.26338C12.585 9.17567 11.4043 8.93424 10.7382 9.28971C10.2387 9.55625 9.98397 10.316 10.7382 10.6581C11.4924 11.0003 11.9066 10.088 13.942 9.74585C15.1066 9.55012 17.1085 9.74585 16.9954 10.6581C16.8823 11.5704 15.5524 11.4065 14.2105 11.4065L14.1868 11.4065C13.3211 11.4065 12.4978 11.4064 11.7133 12.0845C10.9217 12.7687 10.5601 13.7456 8.83206 12.5968C8.06152 12.0845 3.18416 12.4742 6.51755 11.08C7.496 10.6707 4.92924 10.1505 4.13753 10.1505C2.89357 10.1505 2.63341 9.40375 3.53804 9.06164C4.64359 8.64355 5.23433 9.40374 6.13903 9.40374C7.04373 9.40374 7.1328 9.5223 8.06152 8.71953C8.8531 8.03531 9.24369 7.87464 10.3233 7.6932Z',
                        fill: '#D2D0CD',
                    }),
                    r.createElement('path', {
                        d: 'M14.2451 6.80456C13.9053 6.73791 13.5743 6.2496 13.1763 5.99885C12.6037 5.68234 11.5789 5.69876 10.4233 6.47163C9.44735 7.12435 8.58441 6.38277 9.67436 5.7132C11.0697 4.85603 10.1209 4.04512 11.7508 3.35035C13.0647 2.79028 13.0591 4.49009 14.724 4.23129C16.1016 4.01714 17.0189 3.57678 17.4663 3.88988C17.9139 4.20309 17.7761 4.49619 17.4734 4.86298C17.0847 5.33399 16.1039 5.01566 15.8712 5.53213C15.5417 6.26304 15.2118 6.99418 14.2451 6.80456Z',
                        fill: '#D2D0CD',
                    }),
                    r.createElement('path', {
                        d: 'M3.65677 11.8752C3.91003 12.1113 3.933 12.7008 4.13846 13.124C4.45736 13.6953 4.60039 14.1005 7.20039 14.2005C8.37263 14.2456 8.71465 15.2476 7.43548 15.2401C5.79794 15.2306 5.50039 16.3116 4.13846 16.1005C3.00039 15.9241 3.65063 14.3605 2.10039 13.7005C0.817594 13.1544 -0.403738 13.15 -0.618135 12.6478C-0.832611 12.1454 -0.560814 11.9693 -0.109992 11.8178C0.468936 11.6234 1.13336 12.4118 1.60389 12.0963C2.26977 11.6498 2.9362 11.2034 3.65677 11.8752Z',
                        fill: '#D2D0CD',
                    }),
                    r.createElement('path', {
                        d: 'M7.03325 5.49884C7.44349 5.18639 8.29271 5.25457 8.44498 4.38398C8.51764 3.96857 7.77647 3.38089 7.03453 3.85193C6.29258 4.38544 5.60339 4.08402 4.60339 3.99966C3.10339 3.49966 1.87978 3.61843 2.00096 5.49967C2.09896 7.02113 3.25358 5.4764 4.1039 5.79962C5.16166 6.2017 5.6039 7.24583 6.79672 6.89369C7.44572 6.7021 6.39614 5.98407 7.03325 5.49884Z',
                        fill: '#D2D0CD',
                    }),
                    r.createElement('path', {
                        d: 'M16.421 13.5552C17.0788 14.0132 16.9539 14.8998 15.7704 14.929C15.0745 14.9462 14.8019 15.304 14.4027 16.0748C13.9099 17.0263 13.3589 16.7857 12.4291 16.1397C11.748 15.6665 10.7038 16.5341 9.95888 16.2699C9.39692 16.0706 9.45965 14.8581 11.0309 14.9632C12.2072 15.0418 12.9269 14.5129 13.6254 14.0282C14.3239 13.5435 15.6049 12.9871 16.421 13.5552Z',
                        fill: '#D2D0CD',
                    }),
                    r.createElement('path', {
                        d: 'M9.69303 16.434C9.45979 16.1674 9.44324 15.6296 9.86155 15.2638C10.0859 15.3444 10.5541 15.507 10.6325 15.5122C10.7305 15.5188 12.312 15.4276 12.41 15.4342C12.4884 15.4394 13.2706 14.8353 13.6518 14.5326L15.6254 14.4676C14.2203 14.866 15.2005 16.4084 13.9 16.7153C12.8998 16.9513 12.7966 15.5584 11.8882 15.8915C11.0169 16.211 9.92627 16.7006 9.69303 16.434Z',
                        fill: '#D2D0CD',
                    }),
                ),
                r.createElement(
                    'defs',
                    null,
                    r.createElement(
                        'clipPath',
                        { id: 'clip0_27127_335393' },
                        r.createElement('rect', { width: 14, height: 14, fill: 'white', transform: 'translate(3 3)' }),
                    ),
                ),
            ),
        ['relativeMobility']: (e) =>
            r.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    d: 'M12.0754 10.1454C12.0754 8.99248 11.1517 8.06516 10.0062 8.06516C8.86066 8.06516 7.93687 8.99248 7.93687 10.1454C7.93687 11.2982 8.86066 12.2256 10.0062 12.2256C10.2525 12.2256 10.4742 12.1754 10.6836 12.1003C15.3641 16.3734 16.5712 17 16.5712 17C16.5712 17 16.251 15.3584 11.9769 10.7594C12.0385 10.5589 12.0878 10.3584 12.0878 10.1328L12.0754 10.1454ZM10.0062 10.797C9.63664 10.797 9.34103 10.4962 9.34103 10.1328C9.34103 9.76942 9.63664 9.46867 10.0062 9.46867C10.3757 9.46867 10.6713 9.76942 10.6713 10.1328C10.6713 10.4962 10.3757 10.797 10.0062 10.797ZM10.0062 2C5.5843 2 2 5.54637 2 9.90727C2 12.3258 3.09623 14.4812 4.82063 15.9223L5.07929 15.5589C3.68745 14.0927 2.84988 12.0752 2.9361 10.0451C3.10855 5.93484 6.88992 3.41604 10.8437 4.13033C16.0785 5.07018 15.4627 10.3333 14.662 12.4386L16.6205 14.3559C17.495 13.0902 18 11.5614 18 9.90727C18 5.53383 14.4157 2 9.99384 2H10.0062Z',
                    fill: '#D2D0CD',
                }),
            ),
        ['relativePower']: (e) =>
            r.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    d: 'M8.95 7.22333L4.69167 3L3 4.79667L7.235 8.99667L8.96167 7.22333H8.95ZM16.9883 4.79667L15.2967 3L11.0383 7.22333L12.765 8.99667L17 4.79667H16.9883ZM11.0383 12.7767L15.2967 17L16.9883 15.2033L12.7533 11.0033L11.0267 12.7767H11.0383ZM3 15.2033L4.69167 17L8.95 12.7767L7.22333 11.0033L3 15.2033Z',
                    fill: '#D2D0CD',
                }),
            ),
        ['relativeVisibility']: (e) =>
            r.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    d: 'M10 5C5.58552 5 2 9.25425 2 10.005C2 10.6657 5.58552 15 10 15C14.4145 15 18 10.7157 18 9.99499C18 9.27427 14.4145 5 10 5ZM10 13.8488C6.78402 13.8488 3.52809 10.4855 3.52809 9.99499C3.52809 9.44444 6.78402 6.14114 10 6.14114C13.216 6.14114 16.4719 9.46446 16.4719 9.99499C16.4719 10.5255 13.216 13.8488 10 13.8488ZM9.99001 6.86186C8.29213 6.86186 6.91386 8.26326 6.91386 9.98498C6.91386 11.7067 8.29213 13.1081 9.99001 13.1081C11.6879 13.1081 13.0762 11.7067 13.0762 9.98498C13.0762 8.26326 11.6979 6.86186 9.99001 6.86186Z',
                    fill: '#D2D0CD',
                }),
            ),
    };
function sl({ type: e }) {
    const t = te.resolve('strings'),
        a = al[e];
    if (a)
        return l.jsxs('div', {
            className: Yo,
            children: [
                l.jsx(a, { className: el }),
                l.jsx('div', { className: tl, children: t.readOrEmpty(`menu.tank_params.${e}`) }),
            ],
        });
    console.error(`Unknown ttc param ${e}`);
}
const nl = 'Section_5872c61',
    il = 'Section_container_5872c61',
    rl = 'Section_header_53353a5a',
    ol = 'Section_detailsContainer_41624a97',
    ll = 'Section_arrow_931be12',
    cl = 'Section_arrow__opened_9ccaa82',
    dl = te.resolve('aliases'),
    ul = d(function ({
        indicatorList: e,
        status: t,
        type: a,
        opened: s,
        className: n,
        classNames: i,
        params: r,
        extraParams: o,
        tooltipID: d,
        ...u
    }) {
        const [m, _] = p.useState(() => s),
            { api: h } = Re(),
            g = ee(),
            { controls: v } = ko();
        const f = p.useMemo(() => ({ tooltipId: d, paramId: a, extendedTooltip: !0 }), [a, d]),
            b = nt({ resId: dl.read((e) => e.hangar.shared.VehicleParams('resId')), args: f });
        return l.jsx('div', {
            className: c(nl, n),
            children: l.jsxs(ct, {
                opened: m,
                children: [
                    l.jsx(ct.Summary, {
                        onClick: function (e) {
                            (_(!m),
                                g.play('click', { target: 'vehicle-ttc-section:accordion-summary', original: e }),
                                v.selectGroup(a));
                        },
                        onMouseEnter: function (e) {
                            g.play('mouse-enter', { target: 'vehicle-ttc-section:accordion-summary', original: e });
                        },
                        className: null == i ? void 0 : i.summary,
                        children: l.jsxs('div', {
                            className: il,
                            ...b,
                            children: [
                                l.jsxs('div', {
                                    className: rl,
                                    children: [l.jsx(sl, { type: a }), l.jsx(ct.Arrow, { className: c(ll, m && cl) })],
                                }),
                                l.jsx(Xo, { indicatorList: e, status: t }),
                            ],
                        }),
                    }),
                    l.jsx(ct.AnimatedDetails, {
                        className: null == i ? void 0 : i.accordionDetails,
                        opened: r.length + o.length > 0 && m,
                        animationSettings: {
                            onRest: function () {
                                h.recalculateContent();
                            },
                        },
                        children: l.jsx(Vo, { ...u, params: r, extraParams: o, className: ol }),
                    }),
                ],
            }),
        });
    }),
    ml = {
        base: 'TechParams_b3ba50e6',
        verticalBar: 'TechParams_verticalBar_bd5cdb1d',
        scrollWrapper: 'TechParams_scrollWrapper_5abc1570',
        scrollContent__top: 'TechParams_scrollContent__top_6469f01f',
        scrollContent__bottom: 'TechParams_scrollContent__bottom_a61f5879',
        scrollContent__both: 'TechParams_scrollContent__both_8e38b624',
        sections: 'TechParams_sections_9dd6eaf2',
        section: 'TechParams_section_301fd6a1',
    },
    pl = d(function ({ indicatorAmount: e, classNames: t }) {
        const { model: a } = ko(),
            { api: s } = Re(),
            [n, i] = ye(s);
        return l.jsxs(l.Fragment, {
            children: [
                l.jsx(Ve, {
                    classNames: {
                        wrapper: ml.scrollWrapper,
                        content: c(ml.scrollContent, ml[`scrollContent__${zn(n, i)}`]),
                    },
                    children: l.jsx('div', {
                        className: ml.sections,
                        children: a.computes
                            .sectionParams(e)
                            .map((e) =>
                                r.createElement(ul, { ...e, key: e.type, className: ml.section, classNames: t }),
                            ),
                    }),
                }),
                l.jsx(He, { classNames: { base: ml.verticalBar } }),
            ],
        });
    }),
    _l = d(function ({ indicatorAmount: e = 10, className: t, classNames: a }) {
        const { model: s } = ko(),
            n = ee(),
            i = s.computes
                .sectionParams(e)
                .map(({ indicatorList: e }) => e.map((e) => Object.values(e).join(':')).join('-'))
                .join('_');
        return (
            r.useEffect(() => {
                n.play('animation', { target: 'vehicle-ttc-section:accordion-summary' });
            }, [n, i]),
            l.jsx('div', {
                className: c(ml.base, t),
                children: l.jsx(Fe, { children: l.jsx(pl, { indicatorAmount: e, classNames: a }) }),
            })
        );
    });
var hl = ((e) => (
        (e.Stereoscope = 'stereoscope'),
        (e.Turbocharger = 'turbocharger'),
        (e.EnhancedAimDrives = 'enhancedAimDrives'),
        (e.CommandersView = 'commandersView'),
        (e.Grousers = 'grousers'),
        (e.AdditInvisibilityDevice = 'additionalInvisibilityDevice'),
        (e.RadioCommunication = 'improvedRadioCommunication'),
        (e.AntifragmentationLining = 'antifragmentationLining'),
        (e.CamouflageNet = 'camouflageNet'),
        (e.RotationMechanism = 'improvedRotationMechanism'),
        (e.Ventilation = 'improvedVentilation'),
        (e.HealthReserve = 'extraHealthReserve'),
        (e.ImprovedSights = 'improvedSights'),
        (e.Rammer = 'tankRammer'),
        (e.CoatedOptics = 'coatedOptics'),
        (e.AimingStabilizer = 'aimingStabilizer'),
        (e.ImprovedConfiguration = 'improvedConfiguration'),
        (e.ModernizedExtraHealthReserveAntifragmentationLining = 'modernizedExtraHealthReserveAntifragmentationLining'),
        (e.ModernizedTurbochargerRotationMechanism = 'modernizedTurbochargerRotationMechanism'),
        (e.ModernizedAimDrivesAimingStabilizer = 'modernizedAimDrivesAimingStabilizer'),
        (e.ModernizedImprovedSightsEnhancedAimDrives = 'modernizedImprovedSightsEnhancedAimDrives'),
        (e.Empty = ''),
        e
    ))(hl || {}),
    gl = ((e) => (
        (e.Visible = 'visible'),
        (e.Hidden = 'hidden'),
        (e.NotSuitableVehicle = 'notSuitableVehicle'),
        (e.NoDataAtAll = 'noDataAtAll'),
        e
    ))(gl || {}),
    vl = ((e) => (
        (e[(e.NoData = 0)] = 'NoData'),
        (e[(e.Normal = 1)] = 'Normal'),
        (e[(e.Linked = 2)] = 'Linked'),
        (e[(e.Combined = 3)] = 'Combined'),
        e
    ))(vl || {}),
    fl = ((e) => ((e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7'), e))(fl || {}),
    bl = ((e) => ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'), e))(bl || {});
const [yl, xl] = I('OptionalDevicesAssistantModel')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['state']),
                    selectedPreset: e.object('selectedPreset'),
                    optionalDevicesAssistantPresets: e.arrayClone('optionalDevicesAssistantPresets'),
                },
                a = () =>
                    st(t.optionalDevicesAssistantPresets.get(), (e) => ({
                        ...e,
                        optionalDevicesAssistantItems: st(e.optionalDevicesAssistantItems, (e) => ({
                            ...e,
                            items: st(e.items, M),
                        })),
                    })),
                s = (e) =>
                    dt(
                        t.optionalDevicesAssistantPresets.get(),
                        (t, a) => {
                            if (a.presetType.mType === e) {
                                const e = st(a.optionalDevicesAssistantItems, (e) => ({ ...e, items: st(e.items, M) }));
                                t.push(...e);
                            }
                            return t;
                        },
                        [],
                    ),
                n = V.primitive(() => s(1).sort((e, t) => t.popularity - e.popularity)),
                i = V.primitive(() => s(0).sort((e, t) => t.popularity - e.popularity));
            return {
                ...t,
                computes: {
                    modeType: () => {
                        var e;
                        const t = bl.Common || bl.Legendary;
                        return null == (e = a().find((e) => e.presetType.mType === t)) ? void 0 : e.modeType;
                    },
                    sortedCommonItems: i,
                    sortedLegendaryItems: n,
                    sourceVehicleCompDescrForPreset: (e) => {
                        const t = a().find((t) => t.presetType.mType === e);
                        return t ? t.sourceVehicleCompDescr : null;
                    },
                    optionalDevicesResultTypeForPreset: (e) => {
                        const t = a().find((t) => t.presetType.mType === e);
                        return t ? t.optionalDevicesResultType : 0;
                    },
                },
            };
        },
        ({ externalModel: e }) => ({ changePreset: e.createCallback((e) => ({ presetType: e }), 'onPresetSelected') }),
    ),
    Cl = 'PopularLoadouts_905d92af',
    wl = 'PopularLoadouts_base__legendary_44c73d25',
    jl = 'PopularLoadouts_lipsIcon_94b94918',
    Nl = 'PopularLoadouts_base__linked_44c73d25',
    Il = 'PopularLoadouts_lips_f8140539',
    Sl = 'PopularLoadouts_base__noDataLegendary_44c73d25',
    kl = 'PopularLoadouts_row_empty_79f784c5',
    Pl = 'PopularLoadouts_noDataLegendary_8871a45c',
    El = 'PopularLoadouts_noData_44c73d25',
    Ml = 'PopularLoadouts_vehicleNotAvailable_6aaecb23',
    Dl = 'PopularLoadouts_noData_text_44c73d25',
    Tl = 'PopularLoadouts_vehicleNotAvailable_text_f6a0ffe8',
    Ll = 'PopularLoadouts_scrollWrapper_f6e40aea',
    Al = 'PopularLoadouts_scroll_5547fb14',
    Bl = 'PopularLoadouts_verticalBar_4b7df3ca',
    Ol = 'PopularLoadouts_background_59528a5b',
    zl = 'PopularLoadouts_onslaughtBackground_87fd615d',
    Rl = 'PopularLoadouts_backgroundWrapper_ceadd975',
    $l = 'PopularLoadouts_backgroundWrapper__noData_577b30c5',
    Vl = 'PopularLoadouts_border_bb3c99b0',
    ql = 'PopularLoadouts_container_7ca114a3',
    Wl = 'PopularLoadouts_row_41e986f6',
    Fl = 'PopularLoadouts_row_images_11958d34',
    Hl = 'PopularLoadouts_row_images__hovered_6d465f9f',
    Gl = 'PopularLoadouts_row_image_44c73d25',
    Zl = 'PopularLoadouts_row_emptySlot_19879be4',
    Ul = 'PopularLoadouts_popularity_85b17be2',
    Kl = 'PopularLoadouts_popularity__visible_99ebbe75',
    Ql = 'PopularLoadouts_lipsWrapper_f6e40aea',
    Jl = 'PopularLoadouts_footer_e8f21254',
    Xl = 'PopularLoadouts_footer_wrapper_2b5337f0',
    Yl = 'PopularLoadouts_footer_wrapper_title_ddd0fc04',
    ec = 'PopularLoadouts_footer_wrapper_pagination_f70ced5f',
    tc = 'PopularLoadouts_dot1_859b9d81',
    ac = 'PopularLoadouts_dot2_290c1eaf',
    sc = 'PopularLoadouts_dot1__active_44c73d25',
    nc = 'PopularLoadouts_dot2__active_22013c6c',
    ic = 'PopularLoadouts_footer_arrowWrapper_2b51cfb1',
    rc = 'PopularLoadouts_footer_arrowLeft_44c73d25',
    oc = 'PopularLoadouts_footer_arrowRight_f495386';
function lc(e) {
    return (t = e) !== hl.Empty && t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
        ? `tanksetup.popular_loadouts.optional_devices.${e}`
        : null;
    var t;
}
function cc(e) {
    return Number.isInteger(e) ? `${e}` : e.toFixed(2);
}
function dc({ popularity: e, optionalDevice: t, isHovered: a }) {
    const s = r.useMemo(() => t.map(lc).concat(new Array(3).fill(null)).slice(0, 3), [t]),
        n = 0 === t.length;
    return l.jsxs('div', {
        className: c(Wl, n && kl),
        children: [
            l.jsx('div', {
                className: c(Ul, a && Kl),
                children: l.jsx(Y, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: cc(e) } }),
            }),
            l.jsx('div', {
                className: c(Fl, a && Hl),
                children: s.map((e, t) =>
                    e ? l.jsx(ie, { className: Gl, path: e }, t) : l.jsx('div', { className: Zl }, t),
                ),
            }),
        ],
    });
}
const uc = te.resolve('aliases'),
    mc = te.resolve('views'),
    pc = te.resolve('strings'),
    _c = d(function ({
        notSuitableVehicle: e,
        noData: t,
        combined: a,
        noDataLegendary: s,
        currentPage: n,
        optionalDevicesResultType: i,
        setCurrentPage: o,
    }) {
        const d = ee(),
            [u, m] = r.useState(!1),
            { model: p, controls: _ } = xl(),
            h = p.computes.modeType() === fl.Comp7,
            g = u && !a,
            v = p.computes.sourceVehicleCompDescrForPreset(n),
            f = p.computes.sortedCommonItems(),
            b = p.computes.sortedLegendaryItems(),
            y = n === bl.Common ? f : b,
            x = r.useMemo(() => Array.from({ length: 3 }, (e, t) => y[t] ?? { popularity: 0, items: [] }), [y]),
            C = ue({
                resId: uc.read((e) => e.hangar.shared.OptionalDevicesAssistant('resId')),
                contentId: mc.read((e) => e.lobby.tanksetup.tooltips.PopularLoadoutsTooltip('resId')),
                args: { sourceVehicleCompDescr: v, optionalDevicesResultType: i },
            }),
            w =
                n === bl.Common
                    ? pc.readOrEmpty('tank_setup.popularLoadouts.common')
                    : pc.readOrEmpty('tank_setup.popularLoadouts.legendary');
        function j() {
            const e = n === bl.Common ? bl.Legendary : bl.Common;
            (o(e), _.changePreset(e));
        }
        if (e)
            return l.jsx('div', {
                className: Ml,
                children: l.jsx('div', {
                    className: Tl,
                    children: pc.readOrEmpty('tank_setup.popularLoadouts.vehicleNotAvailable'),
                }),
            });
        if (t)
            return l.jsx('div', {
                className: El,
                children: l.jsx('div', {
                    className: Dl,
                    children: pc.readOrEmpty('tank_setup.popularLoadouts.noData'),
                }),
            });
        function N(e) {
            d.play('click', { target: 'loadout:popular-loadouts-content:arrow-wrapper', original: e });
        }
        function I(e) {
            d.play('mouse-enter', { target: 'loadout:popular-loadouts-content:arrow-wrapper', original: e });
        }
        return l.jsxs(l.Fragment, {
            children: [
                l.jsx('div', { className: Vl }),
                s &&
                    l.jsx('div', {
                        className: Pl,
                        children: pc.readOrEmpty('tank_setup.popularLoadouts.noDataLegendary'),
                    }),
                l.jsx('div', { className: Ol }),
                h && l.jsx('div', { className: zl }),
                l.jsx('div', {
                    className: Ll,
                    children: l.jsxs(Fe, {
                        children: [
                            l.jsx(Ve, {
                                className: Al,
                                children: l.jsx('div', {
                                    className: ql,
                                    onMouseEnter: (e) => {
                                        (d.play('mouse-enter', {
                                            target: 'loadout:popular-loadouts-content:container',
                                            original: e,
                                        }),
                                            m(!0));
                                    },
                                    onMouseLeave: () => m(!1),
                                    children: x.map((e, t) =>
                                        l.jsx(
                                            dc,
                                            { popularity: e.popularity, optionalDevice: e.items, isHovered: g },
                                            t,
                                        ),
                                    ),
                                }),
                            }),
                            l.jsx(He, { classNames: { base: Bl } }),
                        ],
                    }),
                }),
                l.jsx('div', { className: Vl }),
                l.jsx('div', { className: Il }),
                l.jsxs('div', {
                    className: Jl,
                    children: [
                        l.jsx('div', {
                            className: ic,
                            onMouseEnter: I,
                            onClick: N,
                            children: l.jsx('div', { className: rc, onClick: j }),
                        }),
                        l.jsxs('div', {
                            className: Xl,
                            children: [
                                l.jsxs('div', {
                                    ...C,
                                    className: Ql,
                                    children: [
                                        l.jsx('div', { className: jl }),
                                        l.jsx('div', { className: Yl, children: w }),
                                    ],
                                }),
                                l.jsxs('div', {
                                    className: ec,
                                    children: [
                                        l.jsx('div', { className: c(tc, 0 === n && sc) }),
                                        l.jsx('div', { className: c(ac, 1 === n && nc) }),
                                    ],
                                }),
                            ],
                        }),
                        l.jsx('div', {
                            className: ic,
                            onMouseEnter: I,
                            onClick: N,
                            children: l.jsx('div', { className: oc, onClick: j }),
                        }),
                    ],
                }),
            ],
        });
    }),
    hc = d(function () {
        const { model: e } = xl(),
            [t, a] = r.useState(e.selectedPreset.get().mType || bl.Common),
            s = e.computes.optionalDevicesResultTypeForPreset(t),
            n = s === vl.Linked,
            i = s === vl.Combined,
            o = n || i,
            d = s === vl.NoData && bl.Legendary,
            u = e.state.get() === gl.NoDataAtAll,
            m = e.state.get() === gl.NotSuitableVehicle;
        return l.jsxs('div', {
            className: c(Cl, t === bl.Legendary && wl, o && Nl, d && Sl),
            children: [
                l.jsx('div', { className: c(Rl, (u || m) && $l) }),
                l.jsx(_c, {
                    notSuitableVehicle: m,
                    noData: u,
                    noDataLegendary: d,
                    combined: i,
                    optionalDevicesResultType: s,
                    currentPage: t,
                    setCurrentPage: a,
                }),
            ],
        });
    }),
    gc = 'EquipmentAssistant_c5998863',
    vc = d(function ({ className: e }) {
        const { model: t } = xl(),
            a = t.state.get() === gl.Hidden;
        return l.jsx('div', {
            className: c(gc, e),
            'data-test-id': 'equipmentAssistant',
            children: !a && l.jsx(hc, {}),
        });
    }),
    fc = 'TankInfo_5a43ab26',
    bc = 'TankInfo_ttc_b7c2d1d7',
    yc = 'TankInfo_techParams_3f23a8c3',
    xc = 'TankInfo_text_3d2affa7',
    Cc = 'TankInfo_equipmentAssistant_6633e061',
    wc = 'TankInfo_vehicleInfo_6633e061',
    jc = 'TankInfo_summary_1066f4ee',
    Nc = 'TankInfo_accordionDetails_e30a5dd6',
    Ic = te.resolve('aliases'),
    Sc = re('LoadoutScreenTankInfo'),
    kc = d(function () {
        const e = En().model.selectedVehicle(),
            t = En().model.selectedVehicleStatistics(),
            a = Ic.read((e) => e.hangar.shared.VehicleParams('resId')),
            s = Ic.read((e) => e.hangar.shared.OptionalDevicesAssistant('resId')),
            n = Pe(),
            i = p.useMemo(() => ({ rootId: s }), [s]),
            r = p.useMemo(() => ({ rootId: a }), [a]);
        if (!e || !t) return;
        const o = n.location.startsWith('/hangar/loadout/equipment');
        return l.jsxs(Sc, {
            className: fc,
            children: [
                l.jsxs(de, {
                    className: wc,
                    children: [
                        l.jsx(de.Level, { className: xc, value: e.level }),
                        me(e.type) && l.jsx(de.Type, { type: e.type, premium: t.elite }),
                        l.jsx(de.Name, { className: xc, children: e.shortName }),
                    ],
                }),
                l.jsx('div', {
                    className: bc,
                    children: l.jsx(So, {
                        options: r,
                        children: l.jsx(_l, { className: yc, classNames: { summary: jc, accordionDetails: Nc } }),
                    }),
                }),
                o && l.jsx(yl, { options: i, children: l.jsx(vc, { className: Cc }) }),
            ],
        });
    }),
    Pc = 'ScreenWrapper_39a2fe74',
    Ec = 'ScreenWrapper_inner_f586f6da',
    Mc = 'ScreenWrapper_content_42e9ccec',
    Dc = 'ScreenWrapper_info_b6387d23',
    Tc = 'ScreenWrapper_flag_f17acc40',
    Lc = te.resolve('aliases'),
    Ac = re('LoadoutScreenWrapper', Pc),
    Bc = d(function ({ classNames: e, children: t }) {
        const a = En().model.selectedVehicle(),
            s = Lc.read((e) => e.hangar.shared.VehicleParams('resId'));
        return l.jsxs(Ac, {
            className: null == e ? void 0 : e.base,
            children: [
                a &&
                    l.jsx(ie, {
                        className: c(Tc, null == e ? void 0 : e.flag),
                        path: `flags.c_600x450.${B(a.nationId)}`,
                    }),
                l.jsxs('div', {
                    className: Ec,
                    children: [
                        l.jsx('div', { className: c(Mc, null == e ? void 0 : e.content), children: t }),
                        l.jsx('div', {
                            className: c(Dc, null == e ? void 0 : e.info),
                            children: a && l.jsx(ke, { id: s, children: l.jsx(kc, {}) }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Oc = {};
function zc({ cardHeight: e, className: t }) {
    return l.jsx(Jn, {
        className: t,
        style: { height: `${e}px` },
        children: l.jsx('div', { className: Oc.vehicleSlot }),
    });
}
const Rc = d(function ({ vehicleId: e, scroll: t, cardHeight: a, className: s }) {
    const n = En().model.selectedVehicle(),
        i = null == n ? void 0 : n.id;
    return void 0 === e
        ? (console.error('VehicleId is not defined'), l.jsx(zc, { className: c(Pi, s), cardHeight: a }))
        : e === Mn
          ? l.jsx(zc, { className: c(Pi, s), cardHeight: a })
          : ai(e)
            ? l.jsx(ii, { className: c(Pi, s), type: e, height: a })
            : l.jsx(Se, {
                  failure: () => l.jsx(zc, { className: c(Pi, s), cardHeight: a }),
                  children: l.jsx(Di, {
                      concurrent: !0,
                      vehicleId: e,
                      selected: e === i,
                      className: c(Pi, s),
                      style: { height: `${a}px` },
                  }),
              });
});
const $c = {
    content: 'VehiclesList_content_bafd9c3a',
    scroll: 'VehiclesList_scroll_adb8e34f',
    scrollWrapper: 'VehiclesList_scrollWrapper_a183bbcc',
    scroll__top: 'VehiclesList_scroll__top_f0d596a8',
    scroll__bottom: 'VehiclesList_scroll__bottom_f0d596a8',
    scroll__both: 'VehiclesList_scroll__both_f0d596a8',
    scrollContent: 'VehiclesList_scrollContent_21273ea3',
    scrollContent__empty: 'VehiclesList_scrollContent__empty_b1e064f7',
    verticalBar: 'VehiclesList_verticalBar_18646e6d',
    scrollbarBar__empty: 'VehiclesList_scrollbarBar__empty_eac7b312',
    card: 'VehiclesList_card_f11d9079',
};
function Vc({ children: e, ...t }) {
    return l.jsx('div', { ...t, className: $c.content, children: e });
}
const qc = d(function () {
        const e = En(),
            t = kn(),
            { api: a } = Re(),
            s = null == t ? void 0 : t.model.current(),
            n = e.model.prebattleModeActive(),
            i = ut(Dn, Tn),
            o = fe(i.height),
            [d, u] = ye(a),
            m = e.model.current.ids(),
            p = e.model.current.list(),
            _ = e.model.selectedVehicle(),
            h = null == _ ? void 0 : _.id,
            { currentIndex: g } = Ri(m, h),
            v = s && 0 === p.length,
            f = (function (e, t, a) {
                const [s, n] = r.useState(0);
                return (
                    r.useLayoutEffect(() => {
                        const s = () => {
                                const s = e.getWrapperSize();
                                s && n(Math.floor(s / t) * a);
                            },
                            i = e.events.on('resizeHandled', s),
                            r = e.events.on('recalculateContent', s);
                        return () => {
                            (i(), r());
                        };
                    }, [e, t, a]),
                    s
                );
            })(a, o, i.row),
            b = e.model.slots.recover.get(),
            y = s ? [] : b > 0 ? ei : ti,
            { activeSlotsAmount: x, activeSlotsIds: C } =
                ((w = m),
                (j = y),
                (N = f),
                (I = i.row),
                r.useMemo(() => {
                    if (!N) return { activeSlotsAmount: 0, activeSlotsIds: [] };
                    const e = w.length + j.length,
                        t = ((I - (e % I)) % I) + I,
                        a = Math.max(0, N + I - e);
                    return { activeSlotsAmount: e, activeSlotsIds: [...w, ...j, ...Array(0 === a ? t : a).fill(Mn)] };
                }, [j, I, w, N]));
        var w, j, N, I;
        return (
            $i(a, g, o, i.row),
            (function (e, t, a, s, n) {
                function i(s) {
                    a(-1 !== e ? t[e + s].inventoryId : t[0].inventoryId);
                }
                const r = [
                    { key: we.ARROW_DOWN, blockKey: e > t.length - (s + 1), action: () => i(s) },
                    { key: we.ARROW_UP, blockKey: e < s, action: () => i(-s) },
                    { key: we.ARROW_LEFT, blockKey: e % s == 0, action: () => i(-1) },
                    { key: we.ARROW_RIGHT, blockKey: e % s == s - 1 || e === t.length - 1, action: () => i(1) },
                    { key: we.HOME, blockKey: 0 === t.length, action: () => a(t[0].inventoryId) },
                    { key: we.END, blockKey: 0 === t.length, action: () => a(t[t.length - 1].inventoryId) },
                ];
                for (const { key: o, blockKey: l, action: c } of r) {
                    const e = n || l ? we.NONE : o;
                    je(e, c);
                }
            })(g, p, e.controls.select, i.row, 0 === m.length || n),
            r.useEffect(() => {
                a.setDisabled(f >= x);
            }, [a, f, x]),
            l.jsx(xe, {
                api: a,
                elementHeight: o - fe(1),
                direction: 'vertical',
                totalElements: C.length,
                wrappers: { Content: Vc },
                renderScroll: (e) =>
                    l.jsxs('div', {
                        className: c($c.scroll, $c[`scroll__${zn(d, u)}`]),
                        children: [
                            l.jsx(Ve, {
                                ...e,
                                classNames: {
                                    wrapper: $c.scrollWrapper,
                                    content: c($c.scrollContent, v && $c.scrollContent__empty),
                                },
                                children: e.children,
                            }),
                            !a.disabled && l.jsx(He, { classNames: { base: $c.verticalBar } }),
                        ],
                    }),
                itemsPerRow: i.row,
                renderElement: (e) =>
                    l.jsx(Rc, { vehicleId: C[e], scroll: a, cardHeight: o, className: $c.card }, C[e] ?? e),
            })
        );
    }),
    Wc = 'EmptyStateMessage_923658c6',
    Fc = 'EmptyStateMessage_title_278b22ff',
    Hc = 'EmptyStateMessage_description_5a4f259e',
    Gc = te.resolve('strings'),
    Zc = d(function (e) {
        const t = kn(),
            a = En(),
            s = null == t ? void 0 : t.model.current();
        if (!s || 0 !== a.model.current.amount()) return null;
        const n = 0 === (null == s ? void 0 : s.list.length) ? 'empty_list' : 'not_found';
        return l.jsxs('div', {
            className: c(Wc, e.className),
            children: [
                l.jsx('div', { className: Fc, children: Gc.readOrEmpty(`playlists.empty_state.${n}.title`) }),
                l.jsx('div', { className: Hc, children: Gc.readOrEmpty(`playlists.empty_state.${n}.body`) }),
            ],
        });
    }),
    Uc = 'Page_wrapper_995b17f4',
    Kc = 'Page_wrapperContent_cdfce6b4',
    Qc = 'Page_wrapperInfo_6b8d8df6',
    Jc = 'Page_filters_56d852fd',
    Xc = 'Page_playlist_98ccbb20',
    Yc = 'Page_listWrapper_d230e152',
    ed = 'Page_listWrapper__empty_36fb4227',
    td = 'Page_emptyMessage_b82e495a',
    ad = d(function () {
        const e = Pe(),
            t = e.location.startsWith(bo),
            a = En().model.selectedVehicle();
        return (
            mt(t ? we.SPACE : we.NONE, () => {
                e.push(vo);
            }),
            je(t ? we.ESCAPE : we.NONE, () => {
                e.push(vo);
            }),
            l.jsxs(Bc, {
                classNames: { base: Uc, info: Qc, content: Kc },
                children: [
                    l.jsxs('div', {
                        className: Jc,
                        children: [
                            l.jsx(ho, {}),
                            l.jsxs(qe, {
                                children: [
                                    l.jsx(qr, {}),
                                    l.jsx(Hr, {
                                        alertSize: 'lg',
                                        className: Xc,
                                        fallback: l.jsx(Y, { className: Xc, path: 'pages.titles.allVehicles' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    l.jsx('div', { className: c(Yc, !a && ed), children: l.jsx(Fe, { children: l.jsx(qc, {}) }) }),
                    l.jsx(Zc, { className: td }),
                ],
            })
        );
    }),
    sd = 'EntryPoint_753f2d36',
    nd = 'EntryPoint_content_86a8cd1c',
    id = r.lazy(() => Es(() => import('../../../chunks/entry_point.js'), [], import.meta.url));
function rd() {
    const e = te.resolve('aliases').read((e) => e.hangar.shared.LootboxEntryPoint('resId'));
    return l.jsx(ke, {
        id: e,
        children: l.jsx(r.Suspense, {
            children: l.jsx('div', {
                className: sd,
                children: l.jsx('div', { className: nd, children: l.jsx(id, {}) }),
            }),
        }),
    });
}
const od = r.memo(function () {
        return l.jsxs(l.Fragment, { children: [l.jsx(pt, { children: l.jsx(er, {}) }), l.jsx(rd, {})] });
    }),
    ld = re('LoadoutPanel'),
    cd = r.forwardRef(function ({ children: e, className: t, ...a }, s) {
        return l.jsx(ld, { className: t, ref: s, ...a, children: e });
    }),
    dd = { Equipment: Ls, Shells: As, Consumables: Ts, BattleBoosters: Ms, BattleAbilities: Ds },
    ud = 'equipment',
    md = 'instructions',
    pd = 'shells',
    _d = 'consumables',
    hd = {
        Standard: 'standardEquipments',
        Bounty: 'bountyEquipments',
        Improved: 'improvedEquipments',
        Experimental: 'experimentalEquipments',
    },
    gd = { Firepower: 'firepower', Survivability: 'survivability', Stealth: 'stealth', Mobility: 'mobility' },
    vd = 'gunner_smoothTurret',
    fd = 'driver_virtuoso',
    bd = 'driver_smoothDriving',
    yd = 'fireFighting',
    xd = 'naturalCover',
    Cd = 'gunner_rancorous',
    wd = 'loader_pedant',
    jd = 'commander_practical',
    Nd = 'commander_enemyShotPredictor';
function Id(e) {
    return {
        currentIndex: e.currentIndex,
        id: e.groupId,
        totalCount: e.totalCount,
        states: st(e.setupSelector.states, (e) => e),
        switchEnabled: e.setupSelector.isSwitchEnabled,
        prebattleSwitchDisabled: e.setupSelector.isPrebattleSwitchDisabled,
        sections: st(e.sections, Sd),
    };
}
function Sd(e) {
    return {
        type: e.type,
        name: e.name,
        vehicle: e.vehicle,
        vehicleType: e.vehicleType,
        newItemsCount: e.newItemsCount,
        slots: st(e.slots, kd),
        warning: e.isWarning,
    };
}
function kd(e) {
    return {
        id: e.id,
        intCD: e.intCD,
        keyName: e.keyName,
        imageName: e.imageName,
        withAttention: e.withAttention,
        installed: e.isInstalled,
        mountedMoreThanOne: e.isMountedMoreThanOne,
        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
        overlayType: e.overlayType,
        highlightType: e.highlightType,
        level: e.level,
        count: e.count,
        specialization: e.specializations
            ? ((t = e.specializations.specializations),
              (a = e.specializations.isDynamic),
              st(t, (e) =>
                  (function (e, t) {
                      return { dynamic: t, type: e.name, active: e.isCorrect, clickable: e.isClickable };
                  })(e, a),
              ))[0]
            : void 0,
    };
    var t, a;
}
const Pd = [dd.BattleBoosters, dd.BattleAbilities],
    [Ed, Md] = I('AmmunitionPanelModel')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives({
                        isDisabled: 'disabled',
                        selectedSlot: 'selectedSlot',
                        selectedSection: 'selectedSection',
                        vehicleId: 'vehicleId',
                    }),
                    groups: e.arrayClone('groups'),
                },
                a = g(() => _t(t.groups.get(), Id)),
                s = V.primitive((e, a) => t.selectedSlot.get() === e && t.selectedSection.get() === a),
                n = V.primitive((e) => t.selectedSection.get() === e),
                i = V.primitive((e) => {
                    for (const t of a()) for (const a of t.sections) if (a.name === e) return a.slots.length;
                    return 0;
                }),
                r = V.primitive((e) => !Pd.includes(e) && n(e) && i(e) > 1),
                o = V.structural(() => {
                    const e = t.selectedSection.get(),
                        s = t.selectedSlot.get();
                    for (const t of a())
                        for (const a of t.sections) {
                            if (a.name !== e) continue;
                            const n = a.slots[s];
                            return n && -1 !== n.intCD
                                ? { groupIndex: t.currentIndex, item: { intCD: n.intCD, type: n.overlayType } }
                                : { groupIndex: t.currentIndex, item: void 0 };
                        }
                    return { groupIndex: 0, item: void 0 };
                }),
                l = V.model((e) => a()[e]),
                c = V.model((e, t) => {
                    var a;
                    return null == (a = l(e)) ? void 0 : a.sections[t];
                }),
                d = V.model((e, t, a) => {
                    var s;
                    return null == (s = c(e, t)) ? void 0 : s.slots[a];
                });
            return {
                ...t,
                vehicleId: V.primitive(() => {
                    const e = t.vehicleId.get();
                    return '' === e ? void 0 : e;
                }),
                computes: {
                    groups: a,
                    isSlotSelected: s,
                    isSectionSelected: n,
                    selectedSlotGroupAndItem: o,
                    groupByIndex: l,
                    sectionByIndex: c,
                    slotByIndex: d,
                    sectionSize: i,
                    sectionDraggable: r,
                },
            };
        },
        ({ externalModel: e }) => ({
            changePreset: e.createCallback((e) => ({ args: JSON.stringify({ ...e }) }), 'onChangeSetupIndex'),
            openSlotSpecDialog: e.createCallbackNoArgs('onOpenSlotSpecDialog'),
        }),
    );
var Dd = ((e) => ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'), e))(Dd || {});
const Td = te.resolve('strings');
const Ld = {
        base: 'PanelSwitcher_5e94cb32',
        switcher: 'PanelSwitcher_switcher_a8240ce9',
        switcher__warning: 'PanelSwitcher_switcher__warning_a8240ce9',
        switcherOverlay: 'PanelSwitcher_switcherOverlay_914ce250',
        item__warning: 'PanelSwitcher_item__warning_c6581e78',
        itemIcon: 'PanelSwitcher_itemIcon_484391b3',
        indicator: 'PanelSwitcher_indicator_a80d3313',
        indicator__inactive: 'PanelSwitcher_indicator__inactive_399f9969',
    },
    Ad = 'default',
    Bd = 'warning',
    Od = 'selected',
    zd = 'first',
    Rd = 'second';
function $d(e, t) {
    return `loadout.switcher.${e}_item_${t}`;
}
function Vd(e) {
    const t =
        ((a = e.groupId),
        se({
            header: Td.readOrEmpty('tank_setup.tooltips.prebattleSwitchIndicator.title'),
            body: Td.readOrEmpty(`tank_setup.tooltips.prebattleSwitchIndicator.desc.c_${a}`),
        }));
    var a;
    const s = e.itemStates[0] === Dd.WARNING,
        n = e.itemStates[1] === Dd.WARNING,
        i = 1 === e.currentIndex;
    return l.jsxs('div', {
        className: c(Ld.base, e.className),
        children: [
            l.jsxs(ht, {
                type: ht.types.vertical,
                onSwitch: function (t) {
                    e.onSwitch({ groupId: e.groupId, currentIndex: t ? 1 : 0 });
                },
                disabled: e.disabled,
                size: ht.sizes.small,
                checked: i,
                classNames: {
                    base: c(
                        Ld.switcher,
                        ((r = e.currentIndex),
                        (o = e.itemStates),
                        o.some((e, t) => e === Dd.WARNING && t !== r) && Ld.switcher__warning),
                    ),
                    overlay: Ld.switcherOverlay,
                },
                children: [
                    l.jsx(ht.Item, {
                        className: c(Ld.item, s && Ld.item__warning),
                        children: l.jsx(ie, { path: $d(zd, s ? Bd : Ad), className: Ld.itemIcon }),
                    }),
                    l.jsx(ht.Item, {
                        className: c(Ld.item, n && Ld.item__warning),
                        children: l.jsx(ie, { path: $d(Rd, n ? Bd : Ad), className: Ld.itemIcon }),
                    }),
                    l.jsx(ht.SelectedItem, {
                        children: l.jsx(ie, { path: $d(i ? Rd : zd, Od), className: Ld.itemIcon }),
                    }),
                ],
            }),
            l.jsx(ie, {
                ...(e.prebattleSwitchDisabled && t),
                path: 'loadout.switcher.indicator_' + (e.prebattleSwitchDisabled ? 'active' : 'default'),
                className: c(Ld.indicator, !e.prebattleSwitchDisabled && Ld.indicator__inactive),
            }),
        ],
    });
    var r, o;
}
const qd = 'select',
    Wd = 'undo',
    Fd = 'cancel',
    Hd = 'swap',
    Gd = 'demount',
    Zd = 'demount_from_setup',
    Ud = 'demount_from_setups',
    Kd = 'destroy',
    Qd = 'upgrade',
    Jd = 'add_one',
    Xd = 'drag_drop';
function Yd(e) {
    return { currency: e.name, value: e.value, enough: e.isEnough };
}
function eu(e) {
    return st(e, Yd);
}
function tu(e) {
    return { priceID: e.priceID, price: eu(e.price), previousPrice: eu(e.defPrice), discount: eu(e.discount) };
}
const au = (e) => ({
    canConfirm: e.canAccept,
    canCancel: e.canCancel,
    autoRenewalEnabled: e.isAutoRenewalEnabled,
    disabled: e.isDisabled,
    totalItemsInStorage: e.totalItemsInStorage,
    prices: _t(e.price, (e) => Yd(e)),
});
function su(e) {
    return { name: e.name, correct: e.isCorrect, clickable: e.isClickable };
}
function nu(e) {
    return { dynamic: e.isDynamic, specializations: ((t = e.specializations), st(t, su)) };
    var t;
}
function iu(e) {
    return {
        name: e.name,
        intCD: e.intCD,
        imageName: e.imageName,
        itemsInStorage: e.itemsInStorage,
        itemsInVehicle: e.itemsInVehicle,
        itemTypeID: e.itemTypeID,
        mounted: e.isMounted,
        mountedMoreThanOne: e.isMountedMoreThanOne,
        mountedInOtherSetup: e.isMountedInOtherSetup,
        disabled: e.isDisabled,
        visible: e.isVisible,
        installedSlotId: e.installedSlotId,
        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
        itemInstalledSetupSlotIdx: e.itemInstalledSetupSlotIdx,
        locked: e.isLocked,
        freeToDemount: e.isFreeToDemount,
        lockReason: e.lockReason,
        overlayType: e.overlayType,
        highlightType: e.highlightType,
        price: tu(e.price),
        specializations: nu(e.specializations),
    };
}
function ru(e) {
    return {
        ...iu(e),
        description: e.description,
        builtIn: e.isBuiltIn,
        itemName: e.itemName,
        buyMoreDisabled: e.isBuyMoreDisabled,
    };
}
const [ou, lu] = I('ConsumablesModel')(
    ({ observableModel: e }) => {
        const t = {
                ...e.primitives(['autoloadEnabled', 'hasChanges']),
                consumables: e.array('consumables'),
                dealData: e.transform((e) => au(e), 'dealPanel'),
                prices: e.transform((e) => st(e, Yd), 'dealPanel.price'),
            },
            a = V.structural(() => {
                const e = t.dealData.get(),
                    a = [];
                return (
                    e.totalItemsInStorage > 0 &&
                        a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                    t.prices.get().forEach((e) => a.push(e)),
                    { ...e, prices: a }
                );
            }),
            s = V.primitive(() => _t(t.consumables.get(), ru)),
            n = V.model((e) => gt(s(), (t) => t.intCD === e));
        return { ...t, computes: { consumables: s, consumableById: n, dealData: a } };
    },
    ({ model: e, externalModel: t }) => ({
        unmount: t.createCallback(
            (e, t) => ({ intCD: e, currentSlotId: t, actionType: Wd, type: dd.Consumables }),
            'onSlotAction',
        ),
        actionSlot: t.createCallback((e) => ({ ...e, type: dd.Consumables }), 'onSlotAction'),
        swapSlots: t.createCallback((e) => ({ ...e, actionType: Xd }), 'onSlotAction'),
        confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
        cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
        toggleAutoRenewal: t.createCallback(
            () => ({ value: !e.dealData.get().autoRenewalEnabled }),
            'dealPanel.onAutoRenewalChanged',
        ),
    }),
);
function cu(e) {
    return { valueKey: e.valueKey, value: e.value, valueType: e.valueType, debuff: e.isDebuff };
}
function du(e) {
    return { localeName: e.localeName, values: ((t = e.values), st(t, cu)) };
    var t;
}
function uu(e) {
    return { title: e.title, items: st(e.items, du) };
}
function mu(e) {
    return {
        ...iu(e),
        withDescription: e.withDescription,
        trophy: e.isTrophy,
        modernized: e.isModernized,
        upgradable: e.isUpgradable,
        effect: e.effect,
        level: e.level,
        destroyTooltipBodyPath: e.destroyTooltipBodyPath,
        activeSpecsMask: e.activeSpecsMask,
        bonuses: uu(e.bonuses),
    };
}
const [pu, _u] = I('EquipmentsModel')(
    ({ observableModel: e }) => {
        const t = {
                standardEquipments: e.transform((e) => st(e, mu), 'simpleEquipments'),
                improvedEquipments: e.transform((e) => st(e, mu), 'deluxEquipments'),
                bountyEquipments: e.transform((e) => st(e, mu), 'trophyEquipments'),
                experimentalEquipments: e.transform((e) => st(e, mu), 'modernizedEquipments'),
                ...e.primitives(['hasChanges', 'equipCoinCount']),
                ...e.primitives({ hasModernizedEquipmentToDisassemble: 'hasExperimentalEquipmentToDisassemble' }),
                standardEquipmentsFilters: a.box(new Set()),
                dealData: e.transform((e) => au(e), 'dealPanel'),
                prices: e.transform((e) => st(e, Yd), 'dealPanel.price'),
            },
            s = V.structural(() => {
                const e = t.dealData.get(),
                    a = [];
                return (
                    e.totalItemsInStorage > 0 &&
                        a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                    t.prices.get().forEach((e) => a.push(e)),
                    { ...e, prices: a }
                );
            }),
            n = V.model((e, a) => gt(t[a].get(), (t) => t.intCD === e)),
            i = V.model(() => {
                const e = t.standardEquipmentsFilters.get(),
                    a = t.standardEquipments.get();
                return 0 === e.size
                    ? a
                    : (function (e, t) {
                          return vt(e, (e) => e.specializations.specializations.some((e) => t.has(e.name)));
                      })(a, e);
            });
        return { ...t, computes: { equipmentsItemByIntCD: n, dealData: s, filteredStandardEquipments: i } };
    },
    ({ model: e, externalModel: t }) => ({
        unmount: t.createCallback(
            (e, t) => ({ intCD: e, currentSlotId: t, actionType: Wd, type: dd.Equipment }),
            'onSlotAction',
        ),
        actionSlot: t.createCallback((e) => ({ ...e, type: dd.Equipment }), 'onSlotAction'),
        swapSlots: t.createCallback((e) => ({ ...e, actionType: Xd }), 'onSlotAction'),
        getMoreCurrency: t.createCallbackNoArgs('onGetMoreCurrency'),
        confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
        cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
        toggleAutoRenewal: t.createCallback(
            () => ({ value: !e.dealData.get().autoRenewalEnabled }),
            'dealPanel.onAutoRenewalChanged',
        ),
        updateFilters: n((t) => {
            const a = e.standardEquipmentsFilters.get();
            (a.has(t) ? a.delete(t) : a.add(t), e.standardEquipmentsFilters.set(a));
        }),
        clearFilters: n(() => {
            e.standardEquipmentsFilters.set(new Set());
        }),
    }),
);
function hu(e) {
    return {
        ...iu(e),
        description: e.description,
        buyMoreVisible: e.isBuyMoreVisible,
        buyMoreDisabled: e.isBuyMoreDisabled,
    };
}
const [gu, vu] = I('InstructionsModel')(
        (e) => {
            const t = {
                    crewInstructions: e.observableModel.array('crewInstructions'),
                    equipmentInstructions: e.observableModel.array('equipmentInstructions'),
                },
                n = {
                    ...e.observableModel.primitives(['autoloadEnabled', 'hasChanges']),
                    crewInstructions: a.box({}),
                    crewInstructionsArray: a.box([]),
                    equipmentInstructions: a.box({}),
                    equipmentInstructionsArray: a.box([]),
                    dealData: e.observableModel.transform((e) => au(e), 'dealPanel'),
                    prices: e.observableModel.transform((e) => st(e, Yd), 'dealPanel.price'),
                };
            (e.cleanup(
                s(() => {
                    const e = dt(t.crewInstructions.get(), (e, t) => ((e[t.intCD] = hu(t)), e), {});
                    o(() => n.crewInstructions.set(e));
                }),
            ),
                e.cleanup(
                    s(() => {
                        const e = dt(t.equipmentInstructions.get(), (e, t) => ((e[t.intCD] = hu(t)), e), {});
                        o(() => n.equipmentInstructions.set(e));
                    }),
                ),
                e.cleanup(
                    s(() => {
                        const e = _t(t.equipmentInstructions.get(), (e) => hu(e));
                        o(() => n.equipmentInstructionsArray.set(e));
                    }),
                ),
                e.cleanup(
                    s(() => {
                        const e = _t(t.crewInstructions.get(), (e) => hu(e));
                        o(() => n.crewInstructionsArray.set(e));
                    }),
                ));
            const i = V.structural(() => {
                    const e = n.dealData.get(),
                        t = [];
                    return (
                        e.totalItemsInStorage > 0 &&
                            t.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                        n.prices.get().forEach((e) => t.push(e)),
                        { ...e, prices: t }
                    );
                }),
                r = V.model(
                    (e) =>
                        Object.values(n.equipmentInstructions.get()).find((t) => t.intCD === e) ??
                        Object.values(n.crewInstructions.get()).find((t) => t.intCD === e),
                ),
                l = V.model((e, t) => {
                    const a = Object.values(n[t].get()).find((t) => t.intCD === e);
                    return (De(void 0 !== a, `There is no instructionItems with ${e} intCD`), a);
                });
            return { ...n, computes: { instructionById: r, instructionByIntCD: l, dealData: i } };
        },
        ({ model: e, externalModel: t }) => ({
            unmount: t.createCallback(
                (e, t) => ({ intCD: e, currentSlotId: t, actionType: Wd, type: dd.BattleBoosters }),
                'onSlotAction',
            ),
            confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
            cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
            toggleAutoRenewal: t.createCallback(
                () => ({ value: !e.dealData.get().autoRenewalEnabled }),
                'dealPanel.onAutoRenewalChanged',
            ),
            actionSlot: t.createCallback((e) => ({ ...e, type: dd.BattleBoosters }), 'onSlotAction'),
        }),
    ),
    fu = { notMounted: 'notMounted', mounted: 'mounted', mountedMoreThanOne: 'mountedMoreThanOne' };
function bu(e) {
    return e.isMounted ? (e.isMountedMoreThanOne ? fu.mountedMoreThanOne : fu.mounted) : fu.notMounted;
}
function yu(e) {
    return { paramName: e.paramName, value: e.value, metricValue: e.metricValue };
}
function xu(e) {
    return {
        intCD: e.intCD,
        inDepotCount: e.inDepotCount,
        itemsInVehicle: e.itemsCount,
        count: e.count,
        value: e.value,
        delta: e.delta,
        type: e.type,
        kind: e.kind,
        boughtCount: e.buyCount,
        itemInstalledSetupIndex: e.itemInstalledSetupIdx,
        mountedState: bu(e),
        propertiesList: st(e.propertiesList, yu),
        itemPrice: Yd(e.itemPrice),
        price: tu(e.price),
        totalPrice: tu(e.totalPrice),
    };
}
const [Cu, wu] = I('ShellsProvider')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives({
                        ammoMaxSize: 'ammoMaxSize',
                        installedCount: 'installedCount',
                        clip: 'clip',
                        hasChanges: 'modified',
                        autoloadEnabled: 'autoloadEnabled',
                    }),
                    shells: e.transform((e) => st(e, xu), 'shells'),
                    dealData: e.transform((e) => au(e), 'dealPanel'),
                    prices: e.transform((e) => st(e, Yd), 'dealPanel.price'),
                },
                a = V.structural(() => {
                    const e = t.dealData.get(),
                        a = [];
                    return (
                        e.totalItemsInStorage > 0 &&
                            a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                        t.prices.get().forEach((e) => a.push(e)),
                        { ...e, prices: a }
                    );
                }),
                s = V.model((e) => le(t.shells.get(), e)),
                n = V.model((e) => gt(t.shells.get(), (t) => t.intCD === e)),
                i = V.primitive((e) => void 0 !== gt(t.shells.get(), (t) => t.intCD === e)),
                r = V.shallow(() => st(t.shells.get(), (e) => e.intCD));
            return { ...t, computes: { shell: s, shellByIntCD: n, shellExist: i, shellIDs: r, dealData: a } };
        },
        ({ model: e, externalModel: t }) => ({
            swapSlots: t.createCallback((e) => ({ ...e, actionType: Hd }), 'onSlotAction'),
            updateShellCount: t.createCallback((e, t) => ({ intCD: e, newCount: t }), 'onShellUpdate'),
            confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
            cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
            toggleAutoRenewal: t.createCallback(
                () => ({ value: !e.dealData.get().autoRenewalEnabled }),
                'dealPanel.onAutoRenewalChanged',
            ),
        }),
    ),
    ju = r.createContext(null);
const Nu = 'Animated_90a4d541',
    Iu = function ({ children: e, index: t, id: a }) {
        const s = r.useRef(a),
            n = (function () {
                const e = r.useContext(ju);
                return (De(null !== e, 'useContext must be used with in SectionContext'), e);
            })(),
            i = r.useRef(n.idToSlot),
            [o, c] = _(() => ({ from: { x: 0 }, config: { tension: 300, friction: 20 } }));
        return (
            r.useLayoutEffect(() => {
                const e = i.current,
                    r = void 0 === e[a];
                if (s.current === a) return;
                const o = e[a];
                if (-1 == a || r) return;
                if ('number' != typeof o) return;
                const l = o < t ? -1 : 1;
                c.start({ from: { x: l * fe(50) }, to: { x: 0 } });
                const d = $e(n.onSwiped);
                return () => {
                    (d(), c.stop(), c.start({ x: 0, immediate: !0 }));
                };
            }, [c, a]),
            r.useEffect(() => {
                ((s.current = a), (i.current = n.idToSlot));
            }, [n, a]),
            l.jsx(h.div, { className: Nu, style: o, children: e })
        );
    },
    Su = 'equipmentTrophy',
    ku = 'equipmentTrophyBasic',
    Pu = 'equipmentTrophyUpgraded',
    Eu = 'battleBoosterReplace',
    Mu = 'battleBooster',
    Du = 'equipmentPlus',
    Tu = 'builtInEquipment',
    Lu = 'equipmentModernized';
function Au(e) {
    switch (e) {
        case ft.extraSmall:
        case ft.small:
        case ft.medium:
            return ft.small;
        case ft.large:
            return ft.large;
        default:
            return ft.extraLarge;
    }
}
const Bu = (e) => {
    switch (e) {
        case ft.extraSmall:
        case ft.small:
        case ft.medium:
            return yt.s48x48;
        case ft.large:
            return yt.s64x64;
        default:
            return yt.s80x80;
    }
};
function Ou(e) {
    switch (e) {
        case Mu:
            return bt.directiveBooster;
        case Eu:
            return bt.directiveSubstitute;
        case Tu:
            return bt.builtInEquipment;
        case Du:
            return bt.improved;
        case Lu:
            return bt.experimental;
        case Su:
        case ku:
        case Pu:
            return bt.trophy;
        default:
            return bt.none;
    }
}
const zu = 'KEY_NONE',
    Ru = r.createContext(void 0),
    $u = r.createContext(() => {}),
    Vu = ({ children: e }) => {
        const [t, a] = r.useState(void 0),
            s = r.useCallback((e) => {
                a(e);
            }, []);
        return l.jsx($u.Provider, { value: s, children: l.jsx(Ru.Provider, { value: t, children: e }) });
    },
    qu = () => r.useContext(Ru);
function Wu(e, t, a, s) {
    const n = e.left + t + a + s / 2,
        i = e.top + e.height / 2;
    let r = document.elementFromPoint(n, i);
    for (; r; ) {
        if (r.hasAttribute('data-drop-item')) return Number(r.getAttribute('data-drop-item'));
        if (r.hasAttribute('data-drop-area')) return null;
        r = r.parentElement;
    }
}
const Fu = d(function ({ children: e, itemPosition: t, itemWidth: a, onDrop: s }) {
        const n = r.useRef(null),
            i = r.useRef(null),
            o = xt(),
            c = o.state,
            d = Ct(),
            u = r.useContext($u);
        function m(e, s) {
            const n = s.getBoundingClientRect(),
                i = n.left,
                r = n.right,
                o = t - i,
                l = r - t,
                d = e - c.startPoint.x;
            return d > l - a ? { left: o, x: l - a } : d < i - t ? { left: o, x: i - t } : { left: o, x: d };
        }
        if (
            (r.useEffect(() => {
                if (o.item)
                    return (
                        window.addEventListener('keydown', e),
                        () => {
                            window.removeEventListener('keydown', e);
                        }
                    );
                function e(e) {
                    e.keyCode === we.ESCAPE && o.reset();
                }
            }, [o.item, o.reset]),
            r.useEffect(() => {
                const e = n.current;
                if (!e || null === c.virtualItem || !c.dragArea) return;
                const t = c.dragArea.getBoundingClientRect(),
                    { x: r, left: l } = m(c.currentPosition.x * d + c.startPoint.x, c.dragArea);
                ((e.style.left = `${l}px`), (e.style.transform = `translateX(${Math.trunc(r)}px)`));
                const p = Wu(t, l, r, a) ?? null;
                return (
                    i.current != p && null !== p && ((i.current = p), u(p)),
                    new ve()
                        .add(
                            wt.up(([e]) => {
                                (o.emitter.trigger('onDrop', e, c.dragArea, o.item, c), o.reset());
                            }),
                        )
                        .add(
                            wt.move(([e, s]) => {
                                if ('outside' === s) {
                                    const s = n.current;
                                    if (!s || null === c.virtualItem || !c.dragArea) return;
                                    const { x: r, left: o } = m(e.x, c.dragArea),
                                        l = Wu(t, o, r, a) ?? null;
                                    (i.current !== l && null !== l && ((i.current = l), u(l)),
                                        (s.style.transform = `translateX(${Math.trunc(r)}px)`));
                                }
                            }),
                        )
                        .add(
                            o.emitter.on('onDrop', (e, n, i) => {
                                if (!c.dragArea) return;
                                u(void 0);
                                const { left: r, x: o } = m(e.x, c.dragArea),
                                    l = Wu(t, r, o, a) ?? null,
                                    d = Number(null == i ? void 0 : i.getAttribute('data-drop-item')) ?? null;
                                null !== d && null !== l && d !== Number(l) && (null == s || s(Number(l), d));
                            }),
                        ).dispose
                );
            }, [c.currentPosition.x, c.dragArea, c.virtualItem, o.emitter, t, a, s, m]),
            !e || null === c.virtualItem || !c.dragArea)
        )
            return null;
        const p = Number(c.virtualItem.getAttribute('data-drop-item'));
        return l.jsx('div', {
            ref: n,
            style: { position: 'absolute', top: 0, cursor: 'grabbing', pointerEvents: 'none' },
            children: e(p),
        });
    }),
    Hu = d(function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: s }) {
        const n = xt(),
            i = r.useRef(null),
            [o, c] = r.useState(0),
            [d, u] = r.useState(0);
        return (
            r.useEffect(
                () =>
                    n.emitter.on('onStart', (e, t, a) => {
                        (c(a.getBoundingClientRect().left), u(a.getBoundingClientRect().width));
                    }),
                [n],
            ),
            l.jsxs(l.Fragment, {
                children: [
                    l.jsx(jt.DragArea, { ref: i, children: l.jsx(jt.DropArea, { 'data-drop-area': s, children: e }) }),
                    l.jsx(jt.VirtualItem, {
                        container: i.current ?? void 0,
                        children: l.jsx(Fu, { itemPosition: o, itemWidth: d, onDrop: t, children: a }),
                    }),
                ],
            })
        );
    }),
    Gu = function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: s }) {
        return l.jsx(jt, { children: l.jsx(Hu, { onDrop: t, renderDraggingItem: a, dataDropArea: s, children: e }) });
    },
    Zu = 'DragAndDrop_draggableItem_e7d74af8',
    Uu = 'DragAndDrop_draggableItem__dragging_b849a88',
    Ku = 'DragAndDrop_draggableItem__undraggable_7c876195',
    Qu = 'DragAndDrop_draggableItem__locked_2b4f1390',
    Ju = d(function ({ itemId: e, undraggable: t, className: a, dataDropArea: s, children: n }) {
        var i;
        const r = xt(),
            o = null == (i = r.item) ? void 0 : i.getAttribute('data-drop-item'),
            d = void 0 !== o,
            u = It(o) && '' !== o && Number(o) === e;
        return l.jsx('div', {
            'data-drop-item': e,
            className: c(Zu, d && Qu, t && Ku, u && Uu, a),
            'data-drop-area': s,
            onMouseDown: (e) => {
                e.button === Nt.left && (r.start(e), e.preventDefault());
            },
            children: n,
        });
    }),
    Xu = 'UnmountButton_442d081e',
    Yu = 'UnmountButton_base__hover_e2b863f3',
    em = 'UnmountButton_image_5b9a272b';
function tm({ onClick: e, className: t }) {
    const [a, s] = r.useState(!1),
        n = ee();
    return l.jsx('div', {
        onMouseEnter: function (e) {
            (n.play('mouse-enter', { target: 'loadout-panel:slot:unmount-button', original: e }), s(!0));
        },
        onMouseLeave: () => s(!1),
        onClick: function (t) {
            (e(t), n.play('click', { target: 'loadout-panel:slot:unmount-button', original: t }));
        },
        className: c(Xu, a && Yu, t),
        children: l.jsx(ie, {
            width: '42rem',
            height: '42rem',
            path: 'loadout.unmount_button_' + (a ? 'hover' : 'default'),
            className: em,
        }),
    });
}
const am = 'Consumable_98851be5',
    sm = 'Consumable_slot_523f223e',
    nm = 'Consumable_slot__disabled_10fdd4ec',
    im = 'Consumable_slot__grabbing_f0e6559a',
    rm = 'Consumable_hotKeyLabel_f5b48c3b',
    om = 'Consumable_text_fd7e74cf',
    lm = 'Consumable_unmountButton_43731923',
    cm = 'Consumable_unmountButton__hidden_250735bc',
    dm = 'Consumable_selectedOverlay_fd3226e6',
    um = te.resolve('strings'),
    mm = te.resolve('aliases'),
    pm = `${dd.Consumables}DropArea`,
    _m = d(function ({ slot: e, disabled: t, selected: a, withKey: s = !1, onClick: n }) {
        const i = ee(),
            { model: o, controls: d } = lu(),
            u = Md().model,
            m = Pe(),
            p = qu(),
            _ = m.location.endsWith(_d) ? o.computes.consumableById(e.intCD) : e,
            [h, g] = r.useState(!1),
            v = Ie({ value: ft.small }, { large: { value: ft.large }, extraLarge: { value: ft.extraLarge } }),
            f = um.readOrEmpty(`readable_key_names.${e.keyName}`),
            b = s && f && e.keyName != zu,
            y = nt({
                resId: mm.read((e) => e.hangar.shared.Loadout('resId')),
                args: r.useMemo(() => ({ slotId: e.id, slotType: dd.Consumables }), [e]),
            }),
            x = r.useMemo(
                () => ({ disabled: t || void 0 === (null == _ ? void 0 : _.imageName) }),
                [null == _ ? void 0 : _.imageName, t],
            ),
            C = he(
                m.location.endsWith(_d) ? 'tankSetupConsumableSlot' : 'tankSetupHangarConsumableSlot',
                r.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: dd.Consumables,
                        fieldType: 1,
                        installedSlotId: e.id,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMounted: e.installed,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(mm.read((e) => e.hangar.shared.Consumables('resId'))).uid,
                    }),
                    [e],
                ),
                x,
            ),
            w = -1 !== e.intCD ? C : {};
        r.useEffect(() => {
            e.installed || i.play('mount', { target: 'loadout-panel:slot:consumable' });
        }, [e.installed, i]);
        const j = xt(),
            N = null !== j.state.virtualItem;
        return (
            r.useEffect(() => {
                var t;
                (null == (t = j.item) ? void 0 : t.getAttribute('data-drop-area')) === pm && g(p === e.id);
            }, [j.item, p, e.id]),
            l.jsxs('div', {
                ...y,
                ...w,
                className: am,
                children: [
                    l.jsx(St, {
                        className: c(sm, t && nm, N && im),
                        classNames: { selectedOverlay: dm },
                        size: Au(v.value || ft.small),
                        hovered: h,
                        selected: a,
                        disabled: t,
                        'data-test-id': `equipmentSlot-${e.id}`,
                        onClick: function (e) {
                            !a && n && (n(), i.play('click', { target: 'loadout-panel:slot', original: e }));
                        },
                        onMouseEnter: function () {
                            (g(!0), N || i.play('mouse-enter', { target: 'loadout-panel:slot:consumable' }));
                        },
                        onMouseLeave: function () {
                            var e;
                            (void 0 !== p &&
                                (null == (e = j.item) ? void 0 : e.getAttribute('data-drop-area')) === pm) ||
                                g(!1);
                        },
                        dataDropItem: e.id,
                        children: l.jsx(Iu, {
                            id: e.intCD,
                            index: e.id,
                            children: (null == _ ? void 0 : _.imageName)
                                ? l.jsx(Ju, {
                                      undraggable: !u.computes.sectionDraggable(dd.Consumables),
                                      itemId: e.id,
                                      dataDropArea: pm,
                                      children: l.jsx(kt, {
                                          name: _.imageName,
                                          size: Bu(v.value || ft.small),
                                          overlayType: Ou(e.overlayType),
                                      }),
                                  })
                                : l.jsx(St.Empty, {}),
                        }),
                    }),
                    b &&
                        l.jsx('div', {
                            className: rm,
                            children: l.jsx('div', { className: om, children: l.jsx(_e, { text: f }) }),
                        }),
                    !e.installed && l.jsx(tm, { onClick: () => d.unmount(e.intCD, e.id), className: c(lm, N && cm) }),
                ],
            })
        );
    }),
    hm = {
        base: 'SpecializationType_9d3d37d7',
        icon: 'SpecializationType_icon_91ea8b3b',
        icon__visible: 'SpecializationType_icon__visible_ca41ac0a',
        icon__active: 'SpecializationType_icon__active_f79ff1ce',
    },
    gm = 'stealth',
    vm = 'survivability',
    fm = 'firepower',
    bm = 'mobility',
    ym = 'On',
    xm = 'Off',
    Cm = {
        [`${bm}${ym}`]: (e) =>
            r.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    d: 'M26.4457 24.6023C26.4457 23.5263 25.5797 22.6608 24.5058 22.6608C23.4319 22.6608 22.5658 23.5263 22.5658 24.6023C22.5658 25.6784 23.4319 26.5439 24.5058 26.5439C24.7367 26.5439 24.9446 26.4971 25.1409 26.4269C29.5289 30.4152 30.6605 31 30.6605 31C30.6605 31 30.3603 29.4678 26.3533 25.1754C26.4111 24.9883 26.4573 24.8012 26.4573 24.5906L26.4457 24.6023ZM24.5058 25.2105C24.1594 25.2105 23.8822 24.9298 23.8822 24.5906C23.8822 24.2515 24.1594 23.9708 24.5058 23.9708C24.8522 23.9708 25.1293 24.2515 25.1293 24.5906C25.1293 24.9298 24.8522 25.2105 24.5058 25.2105ZM24.5058 17C20.3603 17 17 20.3099 17 24.3801C17 26.6374 18.0277 28.6491 19.6443 29.9942L19.8868 29.655C18.582 28.2865 17.7968 26.4035 17.8776 24.5088C18.0393 20.6725 21.5843 18.3216 25.291 18.9883C30.1986 19.8655 29.6212 24.7778 28.8707 26.7427L30.7067 28.5322C31.5266 27.3509 32 25.924 32 24.3801C32 20.2982 28.6397 17 24.4942 17H24.5058Z',
                    fill: 'url(#paint0_linear_64965_282433)',
                }),
                r.createElement(
                    'defs',
                    null,
                    r.createElement(
                        'linearGradient',
                        {
                            id: 'paint0_linear_64965_282433',
                            x1: 24.5,
                            y1: 18.4318,
                            x2: 24.5,
                            y2: 27.1818,
                            gradientUnits: 'userSpaceOnUse',
                        },
                        r.createElement('stop', { stopColor: '#EFE3D4' }),
                        r.createElement('stop', { offset: 1, stopColor: '#DEC8AD' }),
                    ),
                ),
            ),
        [`${bm}${xm}`]: (e) =>
            r.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    opacity: 0.7,
                    d: 'M26.4457 24.6023C26.4457 23.5263 25.5797 22.6608 24.5058 22.6608C23.4319 22.6608 22.5658 23.5263 22.5658 24.6023C22.5658 25.6784 23.4319 26.5439 24.5058 26.5439C24.7367 26.5439 24.9446 26.4971 25.1409 26.4269C29.5289 30.4152 30.6605 31 30.6605 31C30.6605 31 30.3603 29.4678 26.3533 25.1754C26.4111 24.9883 26.4573 24.8012 26.4573 24.5906L26.4457 24.6023ZM24.5058 25.2105C24.1594 25.2105 23.8822 24.9298 23.8822 24.5906C23.8822 24.2515 24.1594 23.9708 24.5058 23.9708C24.8522 23.9708 25.1293 24.2515 25.1293 24.5906C25.1293 24.9298 24.8522 25.2105 24.5058 25.2105ZM24.5058 17C20.3603 17 17 20.3099 17 24.3801C17 26.6374 18.0277 28.6491 19.6443 29.9942L19.8868 29.655C18.582 28.2865 17.7968 26.4035 17.8776 24.5088C18.0393 20.6725 21.5843 18.3216 25.291 18.9883C30.1986 19.8655 29.6212 24.7778 28.8707 26.7427L30.7067 28.5322C31.5266 27.3509 32 25.924 32 24.3801C32 20.2982 28.6397 17 24.4942 17H24.5058Z',
                    fill: '#EEEDE9',
                    fillOpacity: 0.9,
                }),
            ),
        [`${fm}${ym}`]: (e) =>
            r.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    d: 'M22.95 21.2233L18.6917 17L17 18.7967L21.235 22.9967L22.9617 21.2233H22.95ZM30.9883 18.7967L29.2967 17L25.0383 21.2233L26.765 22.9967L31 18.7967H30.9883ZM25.0383 26.7767L29.2967 31L30.9883 29.2033L26.7533 25.0033L25.0267 26.7767H25.0383ZM17 29.2033L18.6917 31L22.95 26.7767L21.2233 25.0033L17 29.2033Z',
                    fill: 'url(#paint0_linear_64965_282431)',
                }),
                r.createElement(
                    'defs',
                    null,
                    r.createElement(
                        'linearGradient',
                        {
                            id: 'paint0_linear_64965_282431',
                            x1: 23.8939,
                            y1: 18.4583,
                            x2: 23.8939,
                            y2: 30.7083,
                            gradientUnits: 'userSpaceOnUse',
                        },
                        r.createElement('stop', { stopColor: '#FCF6EB' }),
                        r.createElement('stop', { offset: 1, stopColor: '#E1D3C1' }),
                    ),
                ),
            ),
        [`${fm}${xm}`]: (e) =>
            r.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement(
                    'g',
                    { opacity: 0.7 },
                    r.createElement('path', {
                        d: 'M22.95 21.2233L18.6917 17L17 18.7967L21.235 22.9967L22.9617 21.2233H22.95ZM30.9883 18.7967L29.2967 17L25.0383 21.2233L26.765 22.9967L31 18.7967H30.9883ZM25.0383 26.7767L29.2967 31L30.9883 29.2033L26.7533 25.0033L25.0267 26.7767H25.0383ZM17 29.2033L18.6917 31L22.95 26.7767L21.2233 25.0033L17 29.2033Z',
                        fill: '#EEEDE9',
                        fillOpacity: 0.9,
                    }),
                ),
            ),
        [`${gm}${ym}`]: (e) =>
            r.createElement(
                'svg',
                {
                    width: 50,
                    height: 48,
                    viewBox: '0 0 50 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    d: 'M25 18C20.0337 18 16 23.1051 16 24.006C16 24.7988 20.0337 30 25 30C29.9663 30 34 24.8589 34 23.994C34 23.1291 29.9663 18 25 18ZM25 28.6186C21.382 28.6186 17.7191 24.5826 17.7191 23.994C17.7191 23.3333 21.382 19.3694 25 19.3694C28.618 19.3694 32.2809 23.3574 32.2809 23.994C32.2809 24.6306 28.618 28.6186 25 28.6186ZM24.9888 20.2342C23.0787 20.2342 21.5281 21.9159 21.5281 23.982C21.5281 26.048 23.0787 27.7297 24.9888 27.7297C26.8989 27.7297 28.4607 26.048 28.4607 23.982C28.4607 21.9159 26.9101 20.2342 24.9888 20.2342Z',
                    fill: 'url(#paint0_linear_64965_282436)',
                }),
                r.createElement(
                    'defs',
                    null,
                    r.createElement(
                        'linearGradient',
                        {
                            id: 'paint0_linear_64965_282436',
                            x1: 25,
                            y1: 19.2273,
                            x2: 25,
                            y2: 26.7273,
                            gradientUnits: 'userSpaceOnUse',
                        },
                        r.createElement('stop', { stopColor: '#EFE3D4' }),
                        r.createElement('stop', { offset: 1, stopColor: '#DEC8AD' }),
                    ),
                ),
            ),
        [`${gm}${xm}`]: (e) =>
            r.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    opacity: 0.7,
                    d: 'M24 18C19.0337 18 15 23.1051 15 24.006C15 24.7988 19.0337 30 24 30C28.9663 30 33 24.8589 33 23.994C33 23.1291 28.9663 18 24 18ZM24 28.6186C20.382 28.6186 16.7191 24.5826 16.7191 23.994C16.7191 23.3333 20.382 19.3694 24 19.3694C27.618 19.3694 31.2809 23.3574 31.2809 23.994C31.2809 24.6306 27.618 28.6186 24 28.6186ZM23.9888 20.2342C22.0787 20.2342 20.5281 21.9159 20.5281 23.982C20.5281 26.048 22.0787 27.7297 23.9888 27.7297C25.8989 27.7297 27.4607 26.048 27.4607 23.982C27.4607 21.9159 25.9101 20.2342 23.9888 20.2342Z',
                    fill: '#EEEDE9',
                    fillOpacity: 0.9,
                }),
            ),
        [`${vm}${ym}`]: (e) =>
            r.createElement(
                'svg',
                {
                    width: 48,
                    height: 50,
                    viewBox: '0 0 48 50',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement('path', {
                    opacity: 0.7,
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M23.7379 24.2125V17.1528H25.2364V24.2125L31.8493 28.0304L31.1001 29.3281L24.4871 25.5101L17.8742 29.3281L17.125 28.0304L23.7379 24.2125Z',
                    fill: '#B3AFAB',
                }),
                r.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M19.2494 20.755L24.4922 17.7302L29.7354 20.7552L24.4925 23.7799L19.2494 20.755ZM18.4995 22.0526V28.1021L23.7427 31.1271V25.0776L18.4995 22.0526ZM25.2423 31.1267L30.4848 28.1021V22.0531L25.2423 25.0776V31.1267ZM24.4922 16L31.9844 20.3224V28.9673L24.4922 33.2897L17 28.9673V20.3224L24.4922 16Z',
                    fill: 'url(#paint0_linear_64965_282432)',
                }),
                r.createElement(
                    'defs',
                    null,
                    r.createElement(
                        'linearGradient',
                        {
                            id: 'paint0_linear_64965_282432',
                            x1: 24.3787,
                            y1: 17.801,
                            x2: 24.3787,
                            y2: 32.9295,
                            gradientUnits: 'userSpaceOnUse',
                        },
                        r.createElement('stop', { stopColor: '#FCF6EB' }),
                        r.createElement('stop', { offset: 1, stopColor: '#E1D3C1' }),
                    ),
                ),
            ),
        [`${vm}${xm}`]: (e) =>
            r.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                r.createElement(
                    'g',
                    { opacity: 0.7 },
                    r.createElement('path', {
                        opacity: 0.7,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M23.7379 23.2125V16.1528H25.2364V23.2125L31.8493 27.0304L31.1001 28.3281L24.4871 24.5101L17.8742 28.3281L17.125 27.0304L23.7379 23.2125Z',
                        fill: '#B3AFAB',
                    }),
                    r.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M19.2494 19.755L24.4922 16.7302L29.7354 19.7552L24.4925 22.7799L19.2494 19.755ZM18.4995 21.0526V27.1021L23.7427 30.1271V24.0776L18.4995 21.0526ZM25.2423 30.1267L30.4848 27.1021V21.0531L25.2423 24.0776V30.1267ZM24.4922 15L31.9844 19.3224V27.9673L24.4922 32.2897L17 27.9673V19.3224L24.4922 15Z',
                        fill: '#EEEDE9',
                        fillOpacity: 0.9,
                    }),
                ),
            ),
    };
function wm({ specialization: e, active: t, classNames: a }) {
    const s = Cm[`${e}${ym}`],
        n = Cm[`${e}${xm}`];
    if (s && n)
        return l.jsxs('div', {
            className: c(hm.base, null == a ? void 0 : a.base),
            children: [
                l.jsx(s, {
                    className: c(hm.icon, hm.icon__active, t && hm.icon__visible, null == a ? void 0 : a.activeIcon),
                }),
                l.jsx(n, { className: c(hm.icon, !t && hm.icon__visible, null == a ? void 0 : a.inactiveIcon) }),
            ],
        });
    console.error(`Unknown specialization type ${e}`);
}
const jm = 'Specialization_border_1d1ddf4e',
    Nm = 'Specialization_borderImage_2bbc40a2',
    Im = 'Specialization_576f60ad',
    Sm = 'Specialization_base__button_e1e80f41',
    km = 'Specialization_border__visible_2df74c11',
    Pm = 'Specialization_borderImage__visible_258796cf',
    Em = 'Specialization_icon_453cdca5',
    Mm = 'Specialization_base__disabled_12d00a3f',
    Dm = 'Specialization_base__active_12d00a3f',
    Tm = re('Specialization'),
    Lm = d(function ({ specialization: e, className: t, id: a, disabled: s = !1 }) {
        const n = ee(),
            { controls: i } = Md(),
            o = Pe().location.includes('/loadout'),
            d = e.dynamic && o,
            u = r.useRef(a);
        r.useEffect(() => {
            if (u.current !== a)
                return (
                    (u.current = a),
                    e.active
                        ? $e(() => n.play('on', { target: 'loadout-panel:slot:equipment:specialization' }))
                        : void 0
                );
        }, [n, e.active, a]);
        const m = r.useMemo(() => [e.type, e.dynamic, e.clickable], [e]),
            p = ne('hangarSlotSpec', m);
        return l.jsxs(Tm, {
            className: c(Im, d && Sm, s && Mm, e.active && Dm, t),
            onClick: function (e) {
                (p.onClick(),
                    d &&
                        (n.play('click', { target: 'loadout:panel:equipment:specialization', original: e }),
                        i.openSlotSpecDialog()));
            },
            onMouseEnter: function (e) {
                (p.onMouseEnter(),
                    d && n.play('mouse-enter', { target: 'loadout:panel:equipment:specialization', original: e }));
            },
            onMouseLeave: p.onMouseLeave,
            children: [
                l.jsx('div', { className: c(jm, d && km) }),
                l.jsx('div', { className: c(Nm, d && Pm) }),
                l.jsx(wm, { specialization: e.type, active: e.active, classNames: { base: Em } }),
            ],
        });
    }),
    Am = 'Equipment_cd6073b3',
    Bm = 'Equipment_slot_cd6073b3',
    Om = 'Equipment_slot__disabled_13198c7d',
    zm = 'Equipment_slot__grabbing_49feaf7f',
    Rm = 'Equipment_specialization_95709e3f',
    $m = 'Equipment_unmountButton_7376ff29',
    Vm = 'Equipment_unmountButton__hidden_f9f46440',
    qm = 'Equipment_selectedOverlay_866b638b',
    Wm = te.resolve('aliases'),
    Fm = `${dd.Equipment}DropArea`;
function Hm(e) {
    switch (e) {
        case gd.Mobility:
            return 'loadout-panel:slot:equipment:specialization:mobility';
        case gd.Firepower:
            return 'loadout-panel:slot:equipment:specialization:firepower';
        case gd.Stealth:
            return 'loadout-panel:slot:equipment:specialization:stealth';
        case gd.Survivability:
            return 'loadout-panel:slot:equipment:specialization:survivability';
        default:
            return (console.error('Unknown specialization type:', e), '');
    }
}
const Gm = d(function ({ slot: e, disabled: t, selected: a, onClick: s }) {
        const { breakpoint: n } = Pt(),
            { controls: i } = _u(),
            { model: o } = Md(),
            [d, u] = r.useState(!1),
            m = ee(),
            p = Pe(),
            _ = qu(),
            h = Ie({ value: ft.small }, { large: { value: ft.large }, extraLarge: { value: ft.extraLarge } }),
            g = nt({
                resId: Wm.read((e) => e.hangar.shared.Loadout('resId')),
                args: r.useMemo(() => ({ slotId: e.id, slotType: dd.Equipment }), [e]),
            }),
            v = r.useMemo(
                () => ({ disabled: t || -1 === (null == e ? void 0 : e.intCD) }),
                [null == e ? void 0 : e.intCD, t],
            ),
            f = he(
                p.location.endsWith(ud) ? 'tankSetupOptionalDeviceSlotWW' : 'tankSetupHangarOptionalDeviceSlot',
                r.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: dd.Equipment,
                        installedSlotId: e.id,
                        isMounted: e.installed,
                        fieldType: 1,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(Wm.read((e) => e.hangar.shared.Equipments('resId'))).uid,
                    }),
                    [e],
                ),
                v,
            ),
            b = -1 !== e.intCD ? f : {},
            y = xt(),
            x = null !== y.state.virtualItem;
        return (
            r.useEffect(() => {
                e.installed || m.play('mount', { target: 'loadout-panel:slot:equipment' });
            }, [e.installed, m]),
            r.useEffect(() => {
                (x && (null == g || g.onMouseLeave()), !x && void 0 !== _ && d && (null == g || g.onMouseEnter()));
            }, [_, x, d, g]),
            r.useEffect(() => {
                var t;
                (null == (t = y.item) ? void 0 : t.getAttribute('data-drop-area')) === Fm && u(_ === e.id);
            }, [y.item, _, e.id]),
            l.jsxs('div', {
                className: Am,
                children: [
                    l.jsx('div', {
                        ...b,
                        onMouseEnter: function (e) {
                            (t || u(!0),
                                x ||
                                    (t ||
                                        m.play('mouse-enter', { target: 'loadout-panel:slot:equipment', original: e }),
                                    null == g || g.onMouseEnter()));
                        },
                        onMouseLeave: function () {
                            var e;
                            ((void 0 !== _ &&
                                (null == (e = y.item) ? void 0 : e.getAttribute('data-drop-area')) === Fm) ||
                                u(!1),
                                null == g || g.onMouseLeave());
                        },
                        children: l.jsx(St, {
                            className: c(Bm, t && Om, x && zm),
                            classNames: { selectedOverlay: qm },
                            size: Au(h.value || ft.small),
                            hovered: d,
                            disabled: t,
                            onClick: function (t) {
                                var n;
                                !a &&
                                    s &&
                                    (s(),
                                    m.play('click', { target: 'loadout-panel:slot', original: t }),
                                    (null == (n = e.specialization) ? void 0 : n.type) &&
                                        p.location.includes('/loadout') &&
                                        m.play('click', { target: Hm(e.specialization.type), original: t }),
                                    null == g || g.onClick());
                            },
                            selected: a,
                            'data-test-id': `deviceSlot-${e.id}`,
                            dataDropItem: e.id,
                            children: l.jsx(Iu, {
                                index: e.id,
                                id: e.intCD,
                                children: e.imageName
                                    ? l.jsx(Ju, {
                                          undraggable: !o.computes.sectionDraggable(dd.Equipment),
                                          itemId: e.id,
                                          dataDropArea: Fm,
                                          children: l.jsx(kt, {
                                              name: e.imageName,
                                              size: Bu(n.name),
                                              level: e.level,
                                              overlayType: Ou(e.overlayType),
                                          }),
                                      })
                                    : l.jsx(St.Empty, {}),
                            }),
                        }),
                    }),
                    e.specialization &&
                        l.jsx(Lm, { specialization: e.specialization, className: Rm, id: e.intCD, disabled: t }),
                    !e.installed && l.jsx(tm, { onClick: () => i.unmount(e.intCD, e.id), className: c($m, x && Vm) }),
                ],
            })
        );
    }),
    Zm = 'Instuction_ab7d27c7',
    Um = 'Instuction_slot_ab7d27c7',
    Km = 'Instuction_slot__disabled_179c0b6b',
    Qm = 'Instuction_warningImage_138cc840',
    Jm = 'Instuction_warningImage__disabled_7d252f0',
    Xm = 'Instuction_selectedOverlay_f19fc301',
    Ym = 'Instuction_item_e5ebc3b8',
    ep = 'Instuction_item__withAttention_80199f58',
    tp = te.resolve('aliases');
function ap(e) {
    switch (e) {
        case vd:
            return 'loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction';
        case fd:
            return 'loadout-panel:slot:instruction:driver_virtuoso-crew_instruction';
        case bd:
            return 'loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction';
        case yd:
            return 'loadout-panel:slot:instruction:fireFighting-crew_instruction';
        case xd:
            return 'loadout-panel:slot:instruction:naturalCover-crew_instruction';
        case Cd:
            return 'loadout-panel:slot:instruction:gunner_rancorous-crew_instruction';
        case wd:
            return 'loadout-panel:slot:instruction:loader_pedant-crew_instruction';
        case jd:
            return 'loadout-panel:slot:instruction:commander_practical-crew_instruction';
        case Nd:
            return 'loadout-panel:slot:instruction:commander_enemyShotPredictor-crew_instruction';
        default:
            return (console.error('Unknown crew instruction type:', e), '');
    }
}
const sp = d(({ slot: e, disabled: t, selected: a, onClick: s }) => {
        const { model: n, controls: i } = vu(),
            o = a ? n.computes.instructionById(e.intCD) : e,
            [d, u] = r.useState(!1),
            m = ee(),
            p = Pe(),
            _ = Ie({ value: ft.small }, { large: { value: ft.large }, extraLarge: { value: ft.extraLarge } });
        const h = nt({
                resId: tp.read((e) => e.hangar.shared.Loadout('resId')),
                args: r.useMemo(() => ({ slotId: e.id, slotType: dd.BattleBoosters }), [e]),
            }),
            g = r.useMemo(
                () => ({ disabled: t || void 0 === (null == o ? void 0 : o.imageName) }),
                [null == o ? void 0 : o.imageName, t],
            ),
            v = he(
                p.location.endsWith(md) ? 'tankSetupBattleBoosterSlot' : 'tankSetupHangarBattleBoosterSlot',
                r.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: dd.BattleBoosters,
                        fieldType: 1,
                        installedSlotId: e.id,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMounted: e.installed,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(tp.read((e) => e.hangar.shared.Instructions('resId'))).uid,
                    }),
                    [e],
                ),
                g,
            ),
            f = -1 !== e.intCD ? v : {};
        return (
            r.useEffect(() => {
                e.installed ||
                    (m.play('mount', { target: 'loadout-panel:slot:instruction' }),
                    (null == o ? void 0 : o.imageName) &&
                        e.overlayType === Eu &&
                        m.play('on', { target: ap(o.imageName) }),
                    (null == e ? void 0 : e.withAttention) &&
                        m.play('warn', { target: 'loadout-panel:slot:instruction' }));
            }, [null == o ? void 0 : o.imageName, e.installed, e.overlayType, null == e ? void 0 : e.withAttention, m]),
            l.jsxs('div', {
                ...h,
                ...f,
                className: Zm,
                children: [
                    l.jsx(St, {
                        className: c(Um, t && Km),
                        classNames: { selectedOverlay: Xm },
                        onMouseEnter: function (e) {
                            (u(!0), m.play('mouse-enter', { target: 'loadout-panel:slot:instruction', original: e }));
                        },
                        onMouseLeave: () => u(!1),
                        onClick: function (e) {
                            !a && s && (s(), m.play('click', { target: 'loadout-panel:slot', original: e }));
                        },
                        hovered: d,
                        selected: a,
                        disabled: t,
                        size: Au(_.value || ft.small),
                        'data-test-id': `instructionSlot-${e.id}`,
                        children:
                            (null == o ? void 0 : o.imageName) &&
                            l.jsx(kt, {
                                className: c(Ym, e.withAttention && ep),
                                name: o.imageName,
                                size: Bu(_.value || ft.small),
                                overlayType: Ou(null == e ? void 0 : e.overlayType),
                            }),
                    }),
                    (null == o ? void 0 : o.imageName) &&
                        e.withAttention &&
                        l.jsx(ie, {
                            width: '48rem',
                            height: '48rem',
                            path: 'loadout.alert_48',
                            className: c(Qm, t && Jm),
                        }),
                    !e.installed && l.jsx(tm, { onClick: () => i.unmount(e.intCD, e.id) }),
                ],
            })
        );
    }),
    np = 'Shell_icon_229c2d6f',
    ip = 'Shell_4f8ed17c',
    rp = 'Shell_base__locked_7aaeeab0',
    op = 'Shell_base__selected_7aaeeab0',
    lp = 'Shell_icon__dragging_7aaeeab0',
    cp = 'Shell_container_cd11209e',
    dp = 'Shell_container__key_d0643ec3',
    up = 'Shell_container__count_a96e0074',
    mp = 'Shell_container__disabled_d9eea9c4',
    pp = 'Shell_text_d3fedf21',
    _p = 'Shell_text__empty_7aaeeab0',
    hp = 'Shell_text__disabled_7aaeeab0',
    gp = te.resolve('aliases'),
    vp = 'small',
    fp = 'x64x64',
    bp = 'medium',
    yp = d(function ({ disabled: e = !1, selected: t = !1, withKey: a = !1, empty: s = !0, className: n, slot: i }) {
        var o;
        const { model: d } = wu(),
            u = Pe(),
            m = void 0 !== (null == (o = xt().item) ? void 0 : o.getAttribute('data-drop-item')),
            p = nt({
                resId: gp.read((e) => e.hangar.shared.Loadout('resId')),
                args: r.useMemo(() => ({ slotId: i.id, slotType: dd.Shells }), [i.id]),
            }),
            _ = Ie({ value: vp }, { large: { value: fp }, extraLarge: { value: bp } }).value,
            h = r.useMemo(() => ({ disabled: e }), [e]),
            g = he(
                u.location.endsWith(pd) ? 'tankSetupShellItem' : 'tankSetupHangarShellSlot',
                r.useMemo(
                    () => ({
                        intCD: i.intCD,
                        slotType: dd.Shells,
                        fieldType: 1,
                        installedSlotId: i.id,
                        itemInstalledSetupIdx: i.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: i.id,
                        isMounted: i.installed,
                        isMountedMoreThanOne: i.mountedMoreThanOne,
                        emitterUID: Et(gp.read((e) => e.hangar.shared.Shells('resId'))).uid,
                    }),
                    [i],
                ),
                h,
            ),
            v = t ? d.computes.shell(i.id) : i;
        if (!v) return;
        const f = te.resolve('strings').readOrEmpty(`readable_key_names.${i.keyName}`),
            b = a && f && i.keyName !== zu;
        return l.jsxs('div', {
            ...p,
            ...g,
            className: c(ip, m && rp, t && op, n),
            'data-test-id': `shellSlot-${i.id}`,
            children: [
                b &&
                    l.jsx('div', {
                        className: c(cp, dp),
                        children: l.jsx('div', { className: pp, children: l.jsx(_e, { text: f }) }),
                    }),
                l.jsxs(Iu, {
                    id: i.intCD,
                    index: i.id,
                    children: [
                        l.jsx(Ju, {
                            undraggable: !t,
                            itemId: i.id,
                            dataDropArea: 'shellsDropArea',
                            children: l.jsx(ie, { path: `shell.${_}.${i.imageName}`, className: np }),
                        }),
                        void 0 !== v.count && l.jsx(xp, { count: v.count, empty: s, disabled: e }),
                    ],
                }),
            ],
        });
    }),
    xp = function ({ count: e, empty: t, disabled: a }) {
        return l.jsx('div', {
            className: c(cp, up, a && mp),
            children: l.jsx('div', { className: c(pp, a && hp, t && _p), children: e }),
        });
    },
    Cp = {
        warningOverlay: 'Shells_warningOverlay_caf70c8d',
        base: 'Shells_31052845',
        slot: 'Shells_slot_b00f7c4f',
        slot__customBackground: 'Shells_slot__customBackground_c8785d51',
        shell: 'Shells_shell_6d8f9392',
        content: 'Shells_content_8e80e668',
        warningOverlay__hover: 'Shells_warningOverlay__hover_2b3abaa5',
        selectedOverlay: 'Shells_selectedOverlay_3e68bca2',
        selectedSlotOverlay: 'Shells_selectedSlotOverlay_b0aea0d4',
    };
function wp({ hovered: e, selected: t }) {
    return l.jsxs(l.Fragment, {
        children: [
            t && l.jsx('div', { className: Cp.selectedOverlay }),
            l.jsx(ie, { fit: 'cover', path: 'loadout.shells_warning_glow', className: Cp.warningGlow }),
            l.jsx('div', { className: c(Cp.warningOverlay, e && !t && Cp.warningOverlay__hover) }),
        ],
    });
}
function jp({
    shells: e,
    section: t,
    groupIndex: a,
    sectionIndex: s,
    withKey: n = !1,
    disabled: i = !1,
    selected: o = !1,
    onClick: d,
}) {
    const [u, m] = r.useState(!1),
        p = ee(),
        _ = Ie({ value: ft.small }, { large: { value: ft.large }, extraLarge: { value: ft.extraLarge } }),
        h = !e.some((e) => e.count && e.count > 0);
    return l.jsxs(St, {
        classNames: {
            slot: c(Cp.slot, t.warning && !i && Cp.slot__customBackground),
            content: Cp.content,
            selectedOverlay: Cp.selectedSlotOverlay,
        },
        size: Au(_.value || ft.small),
        hovered: u && !i && !t.warning,
        selected: o && !t.warning,
        disabled: i,
        onClick: function (e) {
            o ||
                i ||
                !d ||
                (d(t.type, { slotIndex: 0, groupIndex: a, sectionIndex: s }),
                p.play('click', { target: 'loadout-panel:slot', original: e }));
        },
        onMouseEnter: function () {
            (m(!0), i || o || p.play('mouse-enter', { target: 'loadout-panel:slot:shells' }));
        },
        onMouseLeave: () => m(!1),
        children: [
            t.warning && l.jsx(wp, { hovered: u && !i, selected: o }),
            e.map((e) =>
                l.jsx(yp, { className: Cp.shell, selected: o, disabled: i, withKey: n, slot: e, empty: h }, e.id),
            ),
            t.warning && l.jsx('div', { className: Cp.warningOverlay }),
        ],
    });
}
const Np = d(function ({ groupIndex: e, sectionIndex: t, withKey: a, disabled: s, selected: n, onClick: i }) {
        const { model: r } = Md(),
            { controls: o } = wu(),
            d = r.computes.sectionByIndex(e, t),
            u = Ie({ value: vp }, { large: { value: fp }, extraLarge: { value: bp } }).value;
        if (!d) return null;
        const m = vt(d.slots ?? [], (e) => e.intCD > 0);
        return l.jsx('div', {
            className: Cp.base,
            children: l.jsx(Gu, {
                dataDropArea: `${dd.Shells}DropArea`,
                onDrop: (e, t) => o.swapSlots({ leftID: e, rightID: t }),
                renderDraggingItem: (e) => l.jsx(ie, { path: `shell.${u}.${m[e].imageName}`, className: c(np, lp) }),
                children: l.jsx(jp, {
                    shells: m,
                    section: d,
                    groupIndex: e,
                    sectionIndex: t,
                    withKey: a,
                    disabled: s,
                    selected: n,
                    onClick: i,
                }),
            }),
        });
    }),
    Ip = 'Divider_44f20b3a',
    Sp = 'Divider_dividerImage_9dcc5cfc';
function kp({ className: e }) {
    return l.jsx('div', {
        className: c(Ip, e),
        children: l.jsx(ie, {
            path: 'loadout.panel_border',
            repeat: 'repeat',
            fit: 'auto',
            width: '100%',
            height: '100%',
            className: Sp,
        }),
    });
}
const Pp = d(function ({ index: e, sectionType: t, groupIndex: a, sectionIndex: s, slotToComponent: n, onClick: i }) {
        const { model: r } = Md(),
            o = r.disabled.get(),
            c = r.computes.isSlotSelected(e, t),
            d = r.computes.slotByIndex(a, s, e);
        if (void 0 === d) return null;
        const u = (function ({ slotToComponent: e = Vp, sectionType: t = 'default' }) {
            return e[t] ?? e.default;
        })({ slotToComponent: n, sectionType: t });
        return u
            ? l.jsx(u, {
                  slot: d,
                  disabled: o,
                  selected: c,
                  withKey: t === dd.Consumables && r.computes.isSectionSelected(t),
                  onClick: i,
              })
            : null;
    }),
    Ep = 'AmmunitionPanel_border_5210db3e',
    Mp = 'AmmunitionPanel_borderImage_a7e374e',
    Dp = 'AmmunitionPanel_ammunitionPanel_1e2712ac',
    Tp = 'AmmunitionPanel_group_a19909f2',
    Lp = 'AmmunitionPanel_section_60fd0117',
    Ap = 'AmmunitionPanel_section__battleBoosters_7bbb51d8',
    Bp = 'AmmunitionPanel_presetWrapper_8dedcfb5',
    Op = 'AmmunitionPanel_slots_d69454c1',
    zp = d(function ({ groupIndex: e, sectionIndex: t, slotToComponent: a, onClick: s }) {
        const { controls: n } = lu(),
            { controls: i } = _u(),
            { breakpoint: o } = Pt(),
            c = Ie({ value: ft.small }, { large: { value: ft.large }, extraLarge: { value: ft.extraLarge } }),
            { model: d } = Md(),
            u = d.computes.sectionByIndex(e, t);
        return u
            ? l.jsx('div', {
                  className: Op,
                  children: l.jsx(Gu, {
                      dataDropArea: `${u.type}DropArea`,
                      onDrop: (e, t) => {
                          u.type === dd.Consumables
                              ? n.swapSlots({ leftID: t, rightID: e })
                              : u.type === dd.Equipment && i.swapSlots({ leftID: t, rightID: e });
                      },
                      renderDraggingItem: (e) => {
                          const t = u.slots[e];
                          if (t)
                              return u.type === dd.Consumables
                                  ? l.jsx(kt, {
                                        name: t.imageName,
                                        size: Bu(c.value || ft.small),
                                        overlayType: Ou(t.overlayType),
                                    })
                                  : u.type === dd.Equipment
                                    ? l.jsx(kt, {
                                          name: t.imageName,
                                          size: Bu(o.name),
                                          level: t.level,
                                          overlayType: Ou(t.overlayType),
                                      })
                                    : void 0;
                      },
                      children: l.jsx('div', {
                          style: { display: 'flex' },
                          children: u.slots.map((n, i) =>
                              l.jsxs(
                                  r.Fragment,
                                  {
                                      children: [
                                          i > 0 && l.jsx(kp, {}),
                                          l.jsx(Pp, {
                                              index: i,
                                              sectionType: u.type,
                                              groupIndex: e,
                                              sectionIndex: t,
                                              slotToComponent: a,
                                              onClick: () =>
                                                  null == s
                                                      ? void 0
                                                      : s(u.type, { slotIndex: n.id, groupIndex: e, sectionIndex: t }),
                                          }),
                                      ],
                                  },
                                  n.id,
                              ),
                          ),
                      }),
                  }),
              })
            : null;
    }),
    Rp = te.resolve('aliases'),
    $p = { [dd.Shells]: Np, default: zp },
    Vp = { [dd.Consumables]: _m, [dd.BattleBoosters]: sp, [dd.Equipment]: Gm },
    qp = (e) => ({ options: { rootId: e } }),
    Wp = {
        providersData: [
            { provider: ou, props: qp(Rp.read((e) => e.hangar.shared.Consumables('resId'))) },
            { provider: gu, props: qp(Rp.read((e) => e.hangar.shared.Instructions('resId'))) },
            { provider: pu, props: qp(Rp.read((e) => e.hangar.shared.Equipments('resId'))) },
            { provider: Ed, props: qp(Rp.read((e) => e.hangar.shared.Loadout('resId'))) },
            { provider: Cu, props: qp(Rp.read((e) => e.hangar.shared.Shells('resId'))) },
        ],
        sectionToComponent: $p,
        slotToComponent: Vp,
    },
    Fp = r.createContext(Wp);
function Hp({
    sectionToComponent: e = Wp.sectionToComponent,
    slotToComponent: t = Wp.slotToComponent,
    providersData: a = Wp.providersData,
    children: s,
}) {
    const n = r.useMemo(() => ({ sectionToComponent: e, slotToComponent: t }), [e, t]),
        i = new Mt().add(Vu).addWithProps(Fp.Provider, { value: n });
    return (
        a.forEach((e) => {
            void 0 === e.props ? i.add(e.provider) : i.addWithProps(e.provider, e.props);
        }),
        i.render(s)
    );
}
const Gp = d(function ({ index: e, vehicleId: t, groupIndex: a, onSectionClick: s }) {
        const n = r.useContext(Fp),
            { model: i } = Md(),
            o = i.disabled.get(),
            d = i.computes.sectionByIndex(a, e),
            u = Dt((e, t) => {
                const a = i.computes.isSectionSelected(e);
                (!s && a) || null == s || s(e, t);
            }),
            m = ee(),
            p = r.useMemo(() => {
                function e() {
                    m.play('swipe', { target: 'loadout-panel:ammunition_panel:section' });
                }
                return d
                    ? {
                          idToSlot: d.slots.reduce((e, t) => (t.intCD < 0 || (e[t.intCD] = t.id), e), {}),
                          type: d.type,
                          vehicleId: t,
                          onSwiped: Tt(30, e),
                      }
                    : { idToSlot: {}, onSwiped: e };
            }, [d, m, t]);
        if (void 0 === d) return null;
        const _ = (function ({ sectionToComponent: e = $p, sectionType: t = 'default' }) {
            return e[t] ?? e.default;
        })({ sectionToComponent: n.sectionToComponent, sectionType: d.type });
        return l.jsxs('div', {
            className: c(Lp, d.type === dd.BattleBoosters && Ap),
            children: [
                l.jsx('div', { className: Ep }),
                l.jsx('div', { className: Mp }),
                _ &&
                    l.jsx(ju.Provider, {
                        value: p,
                        children: l.jsx(_, {
                            groupIndex: a,
                            sectionIndex: e,
                            withKey: i.computes.isSectionSelected(d.type),
                            disabled: o,
                            selected: i.computes.isSectionSelected(d.type),
                            onClick: u,
                            slotToComponent: n.slotToComponent,
                        }),
                    }),
            ],
        });
    }),
    Zp = d(function ({ className: e, onSectionClick: t, vehicleId: a }) {
        const { model: s, controls: n } = Md(),
            i = s.computes.groups();
        return l.jsx('div', {
            className: c(Dp, e),
            children: i.map(
                (
                    {
                        id: e,
                        sections: i,
                        currentIndex: r,
                        totalCount: o,
                        states: c,
                        switchEnabled: d,
                        prebattleSwitchDisabled: u,
                    },
                    m,
                ) =>
                    l.jsxs(
                        'div',
                        {
                            className: Tp,
                            children: [
                                Lt(
                                    i,
                                    (e) => e.slots.length > 0,
                                    (e, s) =>
                                        l.jsx(
                                            Gp,
                                            { index: s, groupIndex: m, vehicleId: a, onSectionClick: t },
                                            `${s}-${r}`,
                                        ),
                                ),
                                d &&
                                    o > 1 &&
                                    l.jsx(Vd, {
                                        groupId: e,
                                        currentIndex: r,
                                        onSwitch: n.changePreset,
                                        itemStates: c,
                                        disabled: s.disabled.get(),
                                        prebattleSwitchDisabled: u,
                                        className: Bp,
                                    }),
                            ],
                        },
                        e,
                    ),
            ),
        });
    }),
    Up = {
        loadoutPanel: 'LoadoutPanel_loadoutPanel_4c5b5911',
        loadoutPanel__screenMode: 'LoadoutPanel_loadoutPanel__screenMode_2cf03a87',
        panel: 'LoadoutPanel_panel_ec4752fe',
        crewPanel: 'LoadoutPanel_crewPanel_b90a22ab',
        ammunitionPanel: 'LoadoutPanel_ammunitionPanel_baf41791',
    },
    Kp = {
        [dd.BattleBoosters]: 'loadout/instructions',
        [dd.Consumables]: 'loadout/consumables',
        [dd.Equipment]: 'loadout/equipment',
        [dd.Shells]: 'loadout/shells',
    };
function Qp(e) {
    const t = Kp[e];
    if (t) return `/hangar/${t}`;
}
const Jp = d(function ({ onRoute: e, onResolveRoute: t = Qp }) {
        const a = Md().model.vehicleId(),
            s = En().model.selectedVehicle(),
            n = Pe(),
            i = Dt((a, s) => {
                if (e) {
                    const n = t(a);
                    if (void 0 === n) return;
                    e(n, s);
                }
                const i = t(a);
                i && n.push(i, s);
            });
        return s && s.id === a
            ? l.jsx(Zp, { vehicleId: a, className: Up.ammunitionPanel, onSectionClick: i }, a)
            : null;
    }),
    Xp = function (e) {
        return l.jsx(Hp, { children: l.jsx(Jp, { ...e }) });
    },
    Yp = 'on',
    e_ = 'disabled';
function t_(e) {
    return { id: e.id, tankmanId: e.tankmanId, roles: Bt(e.roles) };
}
const a_ = 'disabled',
    [s_, n_] = I('CrewModel')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['state', 'acceleratedTraining', 'intensiveTraining', 'vehicleNation']),
                    ...e.primitives({ hasDog: 'withDog' }),
                    slots: e.arrayClone('slots'),
                    crew: e.transform(At('id', Ot), 'crew'),
                },
                a = V.structural(() => _t(t.slots.get(), t_)),
                s = V.model((e) => t.crew.get()[e]),
                n = V.primitive((e) => {
                    const t = s(e);
                    return (
                        ((null == t ? void 0 : t.newPerksCount) ?? 0) +
                        ((null == t ? void 0 : t.newBonusPerksCount) ?? 0)
                    );
                }),
                i = V.primitive(() => t.state.get() === a_);
            return { ...t, computes: { slots: a, newPerksToLearn: n, tankmanById: s, disabled: i } };
        },
        ({ externalModel: e }) => ({
            openCrew: e.createCallback((e) => ({ crewSlotId: e }), 'onOpenCrew'),
            openBarracks: e.createCallback((e) => ({ crewSlotId: e }), 'onOpenBarracks'),
            toggleAcceleratedTraining: e.createCallbackNoArgs('onToggleAcceleratedTraining'),
            toggleIntensiveTraining: e.createCallbackNoArgs('onToggleIntensiveTraining'),
            showDogInfo: e.createCallbackNoArgs('onDogMoreInfoClick'),
        }),
    ),
    i_ = (e) =>
        r.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            r.createElement('path', {
                d: 'M20 19H21V20H3V19H4V18H20V19ZM7 16H5V11H7V16ZM11 16H9V11H11V16ZM15 16H13V11H15V16ZM19 16H17V11H19V16ZM21 8V9H3V8L12 3L21 8Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
                shapeRendering: 'crispEdges',
            }),
        ),
    r_ = te.resolve('strings'),
    o_ = te.resolve('views'),
    l_ = te.resolve('aliases');
function c_(e) {
    const t = ((e) =>
        e === e_ ? 'acceleratedTraining_disabled' : e === Yp ? 'acceleratedTraining_on' : 'acceleratedTraining_off')(e);
    return se({
        header: r_.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.header`),
        body: r_.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.body`),
    });
}
const d_ = (e) =>
        r.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            r.createElement('path', {
                d: 'M4.0965 5.7193C8.197 1.61879 14.822 1.59521 18.8934 5.66657C21.5623 8.33559 22.4702 12.1016 21.6258 15.5328L23.9998 16.9283L18.452 20.0748L18.535 13.7164L20.6317 14.9488C21.2536 11.9664 20.4136 8.75031 18.1111 6.44782C14.4683 2.80537 8.54162 2.82691 4.87286 6.49567C1.20411 10.1644 1.18257 16.0911 4.82501 19.7339L4.04376 20.5162C-0.0275931 16.4448 -0.00400785 9.8198 4.0965 5.7193ZM13.2713 10.2496H18.5213L14.1463 13.7496L16.3338 18.9996L11.5213 15.9371L6.7088 18.9996L8.8963 13.7496L4.5213 10.2496H9.7713L11.5213 4.99957L13.2713 10.2496Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
                shapeRendering: 'crispEdges',
            }),
        ),
    u_ = 'Trainings_button_bf9590ac',
    m_ = 'Trainings_toggleContent_8fe22dba',
    p_ = 'Trainings_image_cc494d75',
    __ = 'Trainings_image__on_3cef43a',
    h_ = re('Trainings', 'Trainings_f0a414b9'),
    g_ = d(function (e) {
        const { model: t, controls: a } = n_(),
            s = t.state.get(),
            n = t.acceleratedTraining.get(),
            i = t.intensiveTraining.get(),
            r = s === a_,
            o = r || n === e_,
            d = r || i === e_,
            u = c_(n),
            m = ue({
                resId: l_.read((e) => e.hangar.shared.Crew('resId')),
                contentId: o_.read((e) => e.lobby.crew.CrewHeaderTooltipView('resId')),
            }),
            p = zt(
                () => {
                    d || a.toggleIntensiveTraining();
                },
                [a, d],
                300,
            );
        return l.jsxs(h_, {
            ...e,
            children: [
                l.jsx('div', {
                    ...u,
                    className: u_,
                    children: l.jsx(Ze, {
                        theme: Ke.primary,
                        activated: n === Yp,
                        disabled: o,
                        onClick: () => {
                            o || a.toggleAcceleratedTraining();
                        },
                        classNames: { content: m_ },
                        children: l.jsx(i_, { className: c(p_, !r && n === Yp && __) }),
                    }),
                }),
                l.jsx('div', {
                    ...m,
                    className: u_,
                    children: l.jsx(Ze, {
                        theme: Ke.primary,
                        activated: i === Yp,
                        disabled: d,
                        onClick: p,
                        classNames: { content: m_ },
                        children: l.jsx(d_, { className: c(p_, !r && i === Yp && __) }),
                    }),
                }),
            ],
        });
    }),
    v_ = (e) =>
        r.createElement(
            'svg',
            { width: 14, height: 14, viewBox: '0 0 14 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            r.createElement('path', {
                d: 'M10.3616 4.55671L8.60388 1.26575L8.88511 0.928219L8.32265 0L7.8305 0.506301V1.26575L7.19773 1.85644V4.72548L8.32265 6.16L10.3616 4.55671Z',
                fill: '#B3AFAB',
            }),
            r.createElement('path', {
                d: 'M12.0226 5.6L14 9.24L11.7062 11.0133L10.4407 9.42666V6.25333L11.1525 5.6V4.75999L11.7062 4.2L12.339 5.22666L12.0226 5.6Z',
                fill: '#B3AFAB',
            }),
            r.createElement('path', {
                d: 'M1.9774 5.6L0 9.24L2.29379 11.0133L3.55932 9.42666V6.25333L2.84746 5.6V4.76L2.29379 4.2L1.66102 5.22666L1.9774 5.6Z',
                fill: '#B3AFAB',
            }),
            r.createElement('path', {
                d: 'M5.159 1.26575L3.40131 4.55671L5.44023 6.16L6.56515 4.72548V1.85644L5.93238 1.26575V0.506301L5.44023 0L4.87777 0.928219L5.159 1.26575Z',
                fill: '#B3AFAB',
            }),
            r.createElement('path', {
                d: 'M4.61172 9.62923L2.95227 12.2331L4.90032 14L6.05472 13.2899H8.03062L9.18872 14L11.143 12.2331L9.47824 9.62923L8.53729 7.58333H5.54967L4.61172 9.62923Z',
                fill: '#B3AFAB',
            }),
        ),
    f_ = 'DogPaw_84e7ee48',
    b_ = 'DogPaw_icon_5261d625',
    y_ = te.resolve('strings');
function x_({ onClick: e }) {
    const t = se({ body: y_.readOrEmpty('crew.dogPawTooltip.details.body') });
    return l.jsx(be, {
        ...t,
        theme: be.themes.secondary,
        size: be.sizes.small,
        className: f_,
        onClick: function () {
            (null == t || t.onClick(), e());
        },
        children: l.jsx(v_, { className: b_ }),
    });
}
const C_ = 'NoTankmanBackground_e7a5353b',
    w_ = 'NoTankmanBackground_base__hover_be4aa02',
    j_ = 'NoTankmanBackground_selectedOverlay_6eff1022',
    N_ = 'NoTankmanBackground_selectedOverlayPattern_313f5cd4',
    I_ = 'NoTankmanBackground_pattern_f007ac5a';
function S_({ hover: e, selected: t }) {
    return l.jsxs('div', {
        className: c(C_, e && w_),
        children: [
            t && l.jsxs(l.Fragment, { children: [l.jsx('div', { className: j_ }), l.jsx('div', { className: N_ })] }),
            l.jsx(ie, { path: 'loadout.crew.no_tankman_pattern', className: I_ }),
        ],
    });
}
const k_ = {
        disabledOverlay: 'Tankman_disabledOverlay_499f6513',
        selectedOverlay: 'Tankman_selectedOverlay_4ea49654',
        selectedOverlayPattern: 'Tankman_selectedOverlayPattern_3198d61b',
        warningOverlay: 'Tankman_warningOverlay_cb2d69fe',
        noTankmanOverlay: 'Tankman_noTankmanOverlay_6949c1e9',
        warningGlow: 'Tankman_warningGlow_89019411',
        content: 'Tankman_content_4548f2cf',
        base: 'Tankman_29fe409a',
        base__noTankman: 'Tankman_base__noTankman_ca952550',
        base__warning: 'Tankman_base__warning_ca952550',
        base__selected: 'Tankman_base__selected_827ddd42',
        base__hover: 'Tankman_base__hover_836d326d',
        base__disabled: 'Tankman_base__disabled_69c04b96',
        content__disabled: 'Tankman_content__disabled_4f56139c',
        content__disabledWarning: 'Tankman_content__disabledWarning_19fa3b76',
    },
    P_ = 'disabled',
    E_ = 'warning',
    M_ = 'noTankman',
    D_ = 'selected',
    T_ = 'default';
function L_({ skinId: e, customizedSkin: t }) {
    return e
        ? t
            ? `tankmen.icons.big.crewSkins.${Rt(e)}`
            : `tankmen.icons.big.${Rt(e)}`
        : 'loadout.crew.no_tankman_red';
}
const A_ = re('Tankman', k_.base),
    B_ = r.memo(function ({
        skinId: e,
        customizedSkin: t,
        disabled: a,
        selected: s,
        warning: n,
        noTankman: i,
        hovered: r,
        className: o,
        ...d
    }) {
        const u = a ? P_ : i ? M_ : n ? E_ : s ? D_ : T_,
            m = !e;
        return l.jsxs(A_, {
            ...d,
            className: c(o, k_[`base__${u}`], r && !a && e && k_.base__hover),
            children: [
                a && l.jsx('div', { className: k_.disabledOverlay }),
                s &&
                    l.jsxs(l.Fragment, {
                        children: [
                            l.jsx('div', { className: k_.selectedOverlay }),
                            l.jsx('div', { className: k_.selectedOverlayPattern }),
                        ],
                    }),
                n && l.jsx('div', { className: k_.warningOverlay }),
                m && !a && l.jsx(S_, { hover: r, selected: s }),
                l.jsx(ie, {
                    fit: 'cover',
                    className: c(k_.content, a && (n || !e ? k_.content__disabledWarning : k_.content__disabled)),
                    path: L_({ skinId: e, customizedSkin: t }),
                }),
                m && !a && l.jsx('div', { className: k_.noTankmanOverlay }),
                n && l.jsx(ie, { className: k_.warningGlow, fit: 'cover', path: 'loadout.crew.alert_glow' }),
            ],
        });
    }),
    O_ = 'Slot_154c229b',
    z_ = 'Slot_base__disabled_d386066c',
    R_ = 'Slot_base__dog_d386066c',
    $_ = 'Slot_statusBlock_ccea62a7',
    V_ = 'Slot_statusBlock__dogPaw_1bc38cf2',
    q_ = 'Slot_statusBlock__disabled_1d609e12',
    W_ = 'Slot_statusOverlay_e74c1f89',
    F_ = 'Slot_statusIcon_fe4620f1',
    H_ = 'Slot_statusIcon__role_3c0a5c22',
    G_ = 'Slot_statusIcon__untrainedPenalty_2d3a3a74',
    Z_ = 'Slot_retrainingProgress_10d488a1',
    U_ = 'Slot_newPerk_88d9a967',
    K_ = 'Slot_newPerk__disabled_1d609e12',
    Q_ = 'Slot_glowBg_e3e687b5',
    J_ = te.resolve('strings'),
    X_ = 'DogSlot',
    Y_ = re('DogSlot', c(O_, R_), { variants: { state: { true: z_ } } }),
    eh = d(function () {
        const [e, t] = r.useState(!1),
            a = ee(),
            { model: s, controls: n } = n_(),
            i = s.computes.disabled(),
            o = s.vehicleNation.get(),
            d = se({
                header: J_.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${o}.header`),
                body: J_.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${o}.body`),
            });
        const u = $t(() => n.showDogInfo(), [n], 400);
        return l.jsxs(Y_, {
            state: i,
            children: [
                l.jsx(B_, {
                    disabled: i,
                    warning: !1,
                    noTankman: !1,
                    hovered: e,
                    customizedSkin: !1,
                    skinId: 'ussr_dog_1',
                    onClick: function () {
                        (i || a.play('dog-slot-click', { target: X_ }), null == d || d.onClick());
                    },
                    onMouseEnter: function () {
                        (i || (t(!0), a.play('mouse-enter', { target: X_ })), null == d || d.onMouseEnter());
                    },
                    onMouseLeave: function () {
                        (t(!1), null == d || d.onMouseLeave());
                    },
                }),
                l.jsx('div', { className: c($_, V_, i && q_), children: l.jsx(x_, { onClick: u }) }),
            ],
        });
    }),
    th = 'NewPerk_count_dccb920a',
    ah = 'NewPerk_iconPlus_4dc7d532',
    sh = 'NewPerk_iconGlow_2e9bc817',
    nh = re('NewPerk', 'NewPerk_2d8eff13');
function ih({ className: e, count: t, baseRef: a }) {
    return l.jsxs(nh, {
        ref: a,
        className: e,
        children: [
            t > 1 && l.jsx('div', { className: th, children: t }),
            l.jsx('div', { className: ah, 'data-test-id': 'newPerk' }),
            l.jsx(ie, { path: 'loadout.crew.plus_perks_glow', width: 65, height: 68, className: sh }),
        ],
    });
}
const rh = (e) =>
        r.createElement(
            'svg',
            { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            r.createElement('path', { d: 'M4 12L9 15L14 12V10L9 13L4 10V12Z', fill: '#FFC6C3' }),
            r.createElement('path', { d: 'M4 8L9 11L14 8V6L9 9L4 6V8Z', fill: '#FFC6C3' }),
            r.createElement('path', { d: 'M4 4L9 7L14 4V2L9 5L4 2V4Z', fill: '#FFC6C3' }),
        ),
    oh = 'RetrainingProgress_7ce4f314',
    lh = 'RetrainingProgress_background_accc6ddf',
    ch = 'RetrainingProgress_content_b4685fd0',
    dh = 'RetrainingProgress_icon_f4b2dc6',
    uh = te.resolve('intl'),
    mh = re('RetrainingProgress', oh);
function ph({ value: e, className: t }) {
    const a = uh.formatNumber('integral', 100 * e);
    return l.jsxs(mh, {
        className: t,
        children: [
            l.jsx('div', { className: lh }),
            l.jsxs('div', {
                className: ch,
                children: [
                    l.jsx(rh, { className: dh }),
                    l.jsx(Y, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: a } }),
                ],
            }),
        ],
    });
}
const _h = re('TankmanLevel', Bs.base);
function hh({ perkValue: e, bonusPerkValue: t }) {
    return l.jsxs(_h, {
        children: [
            l.jsx(Os, { className: Bs.perk, value: e, main: !0 }),
            void 0 !== t && l.jsx(Os, { className: c(Bs.perk, Bs.perk__bonus), value: t, main: !1 }),
        ],
    });
}
const gh = (e) =>
        r.createElement(
            'svg',
            {
                width: 48,
                height: 48,
                viewBox: '0 0 48 48',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                ...e,
            },
            r.createElement(
                'g',
                { opacity: 0.1 },
                r.createElement(
                    'mask',
                    {
                        id: 'mask0_416_14088',
                        style: { maskType: 'alpha' },
                        maskUnits: 'userSpaceOnUse',
                        x: 3,
                        y: 3,
                        width: 42,
                        height: 42,
                    },
                    r.createElement(
                        'g',
                        { style: { mixBlendMode: 'soft-light' } },
                        r.createElement('rect', {
                            x: 3,
                            y: 3,
                            width: 42,
                            height: 42,
                            fill: 'url(#pattern0_416_14088)',
                        }),
                    ),
                ),
                r.createElement(
                    'g',
                    { mask: 'url(#mask0_416_14088)' },
                    r.createElement('circle', { cx: 24, cy: 24, r: 21, fill: 'url(#paint0_radial_416_14088)' }),
                ),
            ),
            r.createElement(
                'g',
                null,
                r.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M31.3461 16.9126L30.2948 15.9658L27.0732 18.8672L26.4351 18.5699H24.2253L23.336 18H21.7758L20.6478 19.0423H19.9247C19.7228 19.2709 19.546 19.5333 19.371 19.7931C19.2897 19.9137 19.2088 20.0338 19.126 20.1496L18.6748 21.6955L20.3893 23.1169H17.4115C17.4115 23.1169 16.0129 22.4536 15.0654 22.7379C14.118 23.0221 14 24.1067 14 24.1067C14 24.1067 14 25.9596 14.5234 26.8833C14.5986 26.952 14.7147 27.11 14.8619 27.3104C15.1767 27.739 15.6338 28.3613 16.1369 28.7163L14.5253 30.1677L15.5766 31.1145L31.3461 16.9126ZM27.4688 28.998C25.357 28.9963 22.4075 28.9939 19.7941 28.9927L29.6854 20.0847H36V21.0322H29.5933C29.5945 21.2753 29.4321 21.5574 29.2712 21.8368C29.1277 22.086 28.9855 22.333 28.9617 22.5484C28.5951 22.7934 27.9771 23.0957 27.5812 23.2844L29.4276 23.2436L29.3769 23.7892L33.0222 24.0645L33.4734 24.5383C33.5016 24.9992 33.5016 25.5934 33.4734 26.0544C33.1684 26.5673 31.2175 29 30.2249 29C29.9068 29 28.8774 28.9992 27.479 28.998L27.4752 28.998L27.4688 28.998Z',
                    fill: '#FFC6C3',
                }),
            ),
            r.createElement(
                'defs',
                null,
                r.createElement(
                    'pattern',
                    {
                        id: 'pattern0_416_14088',
                        patternContentUnits: 'objectBoundingBox',
                        width: 2.38095,
                        height: 2.38095,
                    },
                    r.createElement('use', { xlinkHref: '#image0_416_14088', transform: 'scale(0.0238095)' }),
                ),
                r.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_416_14088',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(24 24) rotate(90) scale(21)',
                    },
                    r.createElement('stop', { stopColor: '#D9D9D9' }),
                    r.createElement('stop', { offset: 1, stopColor: '#D9D9D9', stopOpacity: 0 }),
                ),
            ),
        ),
    vh = te.resolve('views'),
    fh = 'CrewSlot',
    bh = 'retrainingProgress',
    yh = 'withPerks',
    xh = 'unsuitableTankman',
    Ch = 'default';
const wh = re('Slot', O_, { variants: { state: { true: z_ } } }),
    jh = d(function ({ index: e, tankmanId: t, id: a, role: s, selected: n = !1, setSelectedSlot: i }) {
        const [o, d] = r.useState(!1),
            u = ee(),
            { model: m, controls: p } = n_(),
            _ = m.computes.disabled(),
            h = -1 !== t,
            g = h ? m.computes.tankmanById(t) : void 0,
            v = m.computes.newPerksToLearn(t),
            f = r.useMemo(
                () =>
                    (function (e) {
                        var t;
                        if (null == (t = null == e ? void 0 : e.bonusPerks) ? void 0 : t.length)
                            return e.bonusPerks.reduce((e, t) => e + t.skills.length, 0);
                    })(g),
                [g],
            ),
            b = (function (e, t) {
                if (e)
                    return e.currentVehicleSkillsEfficiency < 1
                        ? e.insideNativeTank || -1 !== e.currentVehicleSkillsEfficiency
                            ? bh
                            : xh
                        : e.perks.length > 0 || (t && t > 0)
                          ? yh
                          : Ch;
            })(g, f),
            y = b === bh || b === xh,
            x = g && v > 0,
            [C, w] = Vt();
        const j = he(
                'crewMember',
                r.useMemo(() => ({ tankmanID: t, slotIdx: a, previousViewID: null }), [t, a]),
                r.useMemo(() => ({ disabled: !h || _ }), [h, _]),
            ),
            N = qt(
                'crew_info',
                r.useMemo(() => ({ tankman: g ?? {}, resId: vh.read((e) => e.mono.hangar.tooltips('resId')) }), [g]),
                { disabled: !g },
            );
        return l.jsxs(wh, {
            onMouseDown: function (e) {
                C(e) || null == j || j.onMouseDown(e);
            },
            onMouseEnter: function () {
                (N.onMouseEnter(), _ || (d(!0), n || u.play('mouse-enter', { target: fh })));
            },
            onMouseLeave: function () {
                (N.onMouseLeave(), d(!1));
            },
            onClick: function () {
                (N.onClick(), _ || (u.play('crew-slot-click', { target: fh }), p.openCrew(a), i && i(e)));
            },
            state: _,
            'data-test-id': `crewSlot-${e}`,
            children: [
                x &&
                    l.jsxs(l.Fragment, {
                        children: [
                            l.jsx(ih, { baseRef: w, count: v, className: c(U_, _ && K_) }),
                            !_ && l.jsx('div', { className: Q_ }),
                        ],
                    }),
                l.jsx(B_, {
                    hovered: o && !n,
                    selected: n,
                    disabled: _,
                    warning: y,
                    noTankman: !h,
                    skinId: null == g ? void 0 : g.crewSkinId.replace('tankman_', ''),
                    customizedSkin: (null == g ? void 0 : g.customizedSkin) ?? !1,
                }),
                b !== Ch &&
                    l.jsx('div', {
                        className: c($_, _ && q_),
                        children: (() => {
                            if (!g)
                                return (
                                    void 0 !== s &&
                                    l.jsxs(l.Fragment, {
                                        children: [
                                            l.jsx('div', { className: W_ }),
                                            l.jsx(zs, { className: c(F_, H_), role: s }),
                                        ],
                                    })
                                );
                            switch (b) {
                                case xh:
                                    return l.jsxs(l.Fragment, {
                                        children: [
                                            l.jsx('div', { className: W_ }),
                                            l.jsx(gh, { className: c(F_, G_) }),
                                        ],
                                    });
                                case bh:
                                    return l.jsx(ph, { value: g.currentVehicleSkillsEfficiency, className: Z_ });
                                case yh:
                                    return l.jsx(hh, { perkValue: g.perks.length, bonusPerkValue: f });
                                default:
                                    return (console.error('Unknown crew slot display state: ', b), null);
                            }
                        })(),
                    }),
            ],
        });
    }),
    Nh = 'CrewPanel_border_2ccbfb54',
    Ih = 'CrewPanel_borderImage_50acd0ba',
    Sh = 'CrewPanel_slots_57c050b6',
    kh = 'CrewPanel_slotWrapper_acbcfc00',
    Ph = re('CrewPanel', 'CrewPanel_82d22bfe'),
    Eh = d(
        r.forwardRef(function (e, t) {
            const { model: a } = n_(),
                s = a.computes.slots(),
                n = a.withDog.get();
            return l.jsxs(Ph, {
                ...e,
                ref: t,
                children: [
                    l.jsx('div', { className: Nh }),
                    l.jsx('div', { className: Ih }),
                    l.jsxs('div', {
                        className: Sh,
                        children: [
                            s.map((e, t) =>
                                l.jsxs(
                                    'div',
                                    {
                                        className: kh,
                                        children: [
                                            t > 0 && l.jsx(kp, {}),
                                            l.jsx(
                                                jh,
                                                { index: t, tankmanId: e.tankmanId, id: e.id, role: e.roles[0] },
                                                -1 === e.tankmanId ? `empty_${t}` : e.tankmanId,
                                            ),
                                        ],
                                    },
                                    e.id,
                                ),
                            ),
                            n && l.jsxs('div', { className: kh, children: [l.jsx(kp, {}), l.jsx(eh, {})] }),
                        ],
                    }),
                ],
            });
        }),
    ),
    Mh = { 'crew-slot-click': Wt('yes1'), 'dog-slot-click': Wt('rudy') },
    Dh = new Mt().addWithProps(Ft, { overrides: Mh }),
    Th = { rootId: te.resolve('aliases').read((e) => e.hangar.shared.Crew('resId')) };
function Lh() {
    return Dh.render(l.jsxs(s_, { options: Th, children: [l.jsx(g_, {}), l.jsx(Eh, { className: Up.crewPanel })] }));
}
const Ah = te.resolve('aliases').read((e) => e.hangar.shared.Crew('resId'));
function Bh({ screenModeEnabled: e, className: t, onResolveRoute: a, onRoute: s }) {
    return l.jsx(ke, {
        id: Ah,
        fallback: () => l.jsx(Ht, {}),
        children: l.jsx('div', {
            className: c(Up.loadoutPanel, e && Up.loadoutPanel__screenMode, t),
            children: l.jsxs(cd, {
                className: Up.panel,
                children: [l.jsx(Lh, {}), l.jsx(Xp, { onResolveRoute: a, onRoute: s })],
            }),
        }),
    });
}
function Oh(e) {
    return l.jsx(Bh, { ...e });
}
const zh = 'battleNeeded',
    Rh = 'crewAutoReturn',
    $h = 'quickTraining',
    Vh = 'crewBack',
    qh = 'easyEquip',
    Wh = 'fieldModification',
    Fh = 'research',
    Hh = 'vehSkillTree',
    Gh = 'small',
    Zh = 'large',
    Uh = 'vehicle',
    Kh = 'crew',
    Qh = 'customization',
    Jh = {
        vehicleChassis: 'track',
        vehicleEngine: 'engine',
        vehicleGun: 'gun',
        vehicleWheels: 'wheel',
        vehicleTurret: 'turret',
        vehicleRadio: 'radio',
    },
    Xh = { vehicleGun: 0, vehicleTurret: 1, vehicleRadio: 2, vehicleEngine: 3, vehicleChassis: 4, vehicleWheels: 5 };
function Yh(e) {
    return Xh[e] ?? 0;
}
const eg = 'warning',
    tg = 'critical',
    ag = 'enabled',
    sg = 'disabled',
    ng = 'unavailable',
    ig = [Kh, Uh, Qh],
    rg = {
        vehicle: ['nationChange', 'aboutVehicle', 'repairs', Wh, Hh, 'compare', Fh, 'armorInspector', qh],
        crew: ['crewRetrain', $h, 'crewOut', Vh],
    };
const og = v({ state: y(), counter: b(), stateReason: f(y()) }),
    [lg, cg] = I('VehicleMenuModel')(
        ({ observableModel: e, requires: { vehicleInfo: t } }) => {
            const s = {
                    opened: a.box(!1),
                    screenID: a.box(null),
                    menuItems: e.dict('menuItems'),
                    researchItems: e.array('researchItems'),
                },
                n = V.primitive(() => {
                    const e = s.researchItems.get();
                    return G(e, (e, t) => Yh(e) - Yh(t))[0];
                }),
                r = V.structural((e) => {
                    const t = s.menuItems.get(e);
                    if (!t) return (console.error(`Error getting menuItem with id: ${e}`), { state: sg, counter: -1 });
                    try {
                        return i(og, JSON.parse(t));
                    } catch (a) {
                        return (console.error(a), { state: sg, counter: -1 });
                    }
                }),
                o = V.shallow((e) => {
                    var a;
                    if ((null == (a = t.model.selectedVehicleStatistics()) ? void 0 : a.status) === Ps.battle)
                        return sg;
                    const s = [];
                    let n = !1;
                    for (const t of e) {
                        const e = r(t);
                        if ((s.push(e.state), e.state === tg)) return tg;
                        e.state === eg && (n = !0);
                    }
                    const i = s.every((e) => e === sg);
                    return ((o = i), n ? eg : o ? sg : ag);
                    var o;
                });
            return { ...s, computes: { getMenuItem: r, getButtonState: o, researchItem: n } };
        },
        ({ externalModel: e, model: t }) => ({
            open: n((e) => {
                (t.opened.set(!0), t.screenID.set(e));
            }),
            close: n(() => {
                (t.opened.set(!1), t.screenID.set(null));
            }),
            navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate'),
        }),
        { useRequires: () => ({ vehicleInfo: En() }) },
    ),
    dg = 'MenuButton_background_80afe673',
    ug = 'MenuButton_background__hidden_a0ead688',
    mg = 'MenuButton_overlay_fdbd550d',
    pg = 'MenuButton_arrow_5a0b183c',
    _g = 'MenuButton_icon_e994a077',
    hg = re('MenuButton', {
        element: 'div',
        className: 'MenuButton_3f57027c',
        cva: {
            variants: {
                state: { [sg]: 'MenuButton_base__disabled_2d840da1', opened: 'MenuButton_base__opened_d9d84dd' },
            },
        },
    }),
    gg = te.resolve('strings'),
    vg = d(function ({
        type: e,
        opened: t,
        buttonState: a,
        crewBackWarning: s,
        iconPostfix: n,
        researchItem: i,
        size: o = Gh,
        onMouseEnter: d,
        onClick: u,
        classNames: m,
        className: p,
        ..._
    }) {
        const [h, g] = r.useState(!1),
            v = ee(),
            f = lt(t),
            { model: b } = cg(),
            { stateReason: y } = b.computes.getMenuItem(Vh);
        r.useEffect(() => {
            t && !1 === f && v.play('expand', { target: 'vehicle-menu-widget:button' });
        }, [t, f, v]);
        const x = a === sg,
            C = t ? 'opened' : a,
            w = ae(o, 'upscale'),
            j = (e === Kh && s) || x ? ag : a,
            N = x ? ag : j,
            I = se({ body: gg.readOrEmpty('crew_operations.return.error.noPrevious') });
        return l.jsxs(hg, {
            ..._,
            state: C,
            onMouseEnter: function (e) {
                x ||
                    (v.play('mouse-enter', { target: 'vehicle-menu-widget:button', original: e }),
                    g(!0),
                    null == d || d(e));
            },
            onMouseLeave: () => g(!1),
            onClick: function (t) {
                x || (v.play('click', { target: 'vehicle-menu-widget:button', original: t }), u(e));
            },
            'data-test-id': e,
            className: null == m ? void 0 : m.base,
            ...(x && e === Kh && y === zh && I),
            children: [
                !x &&
                    l.jsxs(l.Fragment, {
                        children: [
                            l.jsx(ie, {
                                path: `hangar.vehicleMenu.${w}.btn_${j}`,
                                className: c(dg, (h || t) && ug, null == m ? void 0 : m.background),
                            }),
                            l.jsx(ie, {
                                path: `hangar.vehicleMenu.${w}.btn_${j}_opened`,
                                className: c(dg, !t && ug, null == m ? void 0 : m.backgroundOpened),
                            }),
                            !t &&
                                l.jsx(ie, {
                                    path: `hangar.vehicleMenu.${w}.btn_${j}_hover`,
                                    className: c(dg, !h && ug, null == m ? void 0 : m.backgroundHovered),
                                }),
                        ],
                    }),
                e !== Qh &&
                    !t &&
                    l.jsx(ie, {
                        path: `hangar.vehicleMenu.${w}.arrow_${N}`,
                        className: c(pg, null == m ? void 0 : m.arrow),
                    }),
                (!t || x) &&
                    l.jsx(ie, {
                        path: `hangar.vehicleMenu.${w}.${e}_${n}`,
                        className: c(_g, null == m ? void 0 : m.icon),
                    }),
                x &&
                    l.jsx(ie, {
                        path: `hangar.vehicleMenu.${w}.btn_disabled`,
                        className: c(mg, null == m ? void 0 : m.overlay),
                    }),
            ],
        });
    }),
    fg = {
        inner: 'MenuItem_inner_60b761c8',
        disabledOverlay: 'MenuItem_disabledOverlay_9567325f',
        sideBorders: 'MenuItem_sideBorders_52632696',
        base: 'MenuItem_37b3ba75',
        inner__disabled: 'MenuItem_inner__disabled_be62900b',
        sideBorder: 'MenuItem_sideBorder_7c07d72d',
        inner__warning: 'MenuItem_inner__warning_28be5e00',
        sideBorder__left: 'MenuItem_sideBorder__left_3188559f',
        inner__critical: 'MenuItem_inner__critical_28be5e00',
        sideBorder__right: 'MenuItem_sideBorder__right_b63d0a05',
        icon: 'MenuItem_icon_baf88696',
        iconImage: 'MenuItem_iconImage_5c399bab',
        title: 'MenuItem_title_2ea0f6aa',
        counter: 'MenuItem_counter_700c76dd',
        warningIcon: 'MenuItem_warningIcon_9a54d136',
    },
    bg = te.resolve('strings'),
    yg = te.resolve('intl'),
    xg = d(function ({ name: e, size: t = Gh, researchItem: a, onClick: s }) {
        const n = ee(),
            { model: i } = cg(),
            { state: r, stateReason: o, counter: d } = i.computes.getMenuItem(e),
            u = ae(t, 'upscale'),
            m = se({ body: bg.readOrEmpty('crew_operations.return.error.noPrevious') }),
            p = se({ body: bg.readOrEmpty('crew_operations.return.warning.memberDemobilized.tooltip.body') });
        return r === ng
            ? null
            : l.jsx('div', {
                  className: fg.base,
                  ...(e === Vh && (r === sg && o === zh ? m : r === ag && 'crewMembersRetired' === o ? p : void 0)),
                  children: l.jsxs('div', {
                      className: c(fg.inner, fg[`inner__${r}`]),
                      onClick: function (t) {
                          r !== sg && (n.play('click', { target: 'vehicle-menu-widget:item', original: t }), s(e));
                      },
                      onMouseEnter: function (e) {
                          r !== sg && n.play('mouse-enter', { target: 'vehicle-menu-widget:item', original: e });
                      },
                      'data-test-id': e,
                      children: [
                          l.jsxs('div', {
                              className: fg.sideBorders,
                              children: [
                                  l.jsx('div', { className: c(fg.sideBorder, fg.sideBorder__left) }),
                                  l.jsx('div', { className: c(fg.sideBorder, fg.sideBorder__right) }),
                              ],
                          }),
                          l.jsx('div', {
                              className: fg.icon,
                              children: l.jsx(ie, {
                                  path: `hangar.vehicleMenu.${u}.${e}${r === eg && a && e === Fh ? `_${Jh[a]}` : r === ag || r === sg ? '' : `_${r}`}`,
                                  className: fg.iconImage,
                              }),
                          }),
                          l.jsxs('div', {
                              className: fg.title,
                              children: [
                                  bg.readOrEmpty(`hangar.vehicleMenu.menuItem.${e}.title`),
                                  d > 0 &&
                                      l.jsx(Y, {
                                          path: 'hangar.vehicleMenu.menuItem.counter',
                                          params: { count: yg.formatNumber('integral', d) },
                                          className: fg.counter,
                                      }),
                              ],
                          }),
                          e === Vh &&
                              r === ag &&
                              'crewMembersRetired' === o &&
                              l.jsx(ie, { path: 'hangar.vehicleMenu.icon_alert', className: fg.warningIcon }),
                          r === sg && l.jsx('div', { className: fg.disabledOverlay }),
                      ],
                  }),
              });
    }),
    Cg = 'MenuList_border_478c22c4',
    wg = 'MenuList_bottom_c28a1943',
    jg = 'MenuList_cea03bfd',
    Ng = 'MenuList_content_102c53c8',
    Ig = 'MenuList_checkbox_4e91193d',
    Sg = 'MenuList_label_6557c55e',
    kg = 'MenuList_checkbox__checked_5a4f974e',
    Pg = 'MenuList_checkbox__disabled_5a4f974e',
    Eg = 'MenuList_topItem_6a7889e4',
    Mg = 'MenuList_autoReturn_841be836',
    Dg = 'MenuList_divider_af7e286c',
    Tg = 'MenuList_bottomBorder_bad1a96',
    Lg = 'MenuList_notch_265b362a',
    Ag = d(function ({ buttonState: e, size: t, className: a }) {
        const { model: s, controls: n } = cg(),
            i = s.opened.get(),
            r = s.screenID.get(),
            o = s.computes.researchItem(),
            d = te.resolve('strings'),
            u = se({ body: d.readOrEmpty('crew_operations.return.error.noPrevious') }),
            m = x(i, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: C.stiff }),
            { state: p, stateReason: _ } = s.computes.getMenuItem(Rh),
            h = p === ng;
        if (!r) return;
        const g = e === tg || e === eg ? e : 'default',
            v = p === ag;
        return (
            r !== Qh &&
            m(
                (e, s) =>
                    s &&
                    l.jsxs(w.div, {
                        className: c(jg, a),
                        style: e,
                        children: [
                            l.jsxs('div', {
                                className: Ng,
                                children: [
                                    r === Kh &&
                                        l.jsxs('div', {
                                            className: Eg,
                                            children: [
                                                l.jsx('div', {
                                                    className: Mg,
                                                    ...(h && _ === zh && u),
                                                    children: l.jsx(Gt, {
                                                        checked: v,
                                                        disabled: h,
                                                        onCheckedChange: () => n.navigateTo(Rh),
                                                        size: Zt.small,
                                                        className: c(Ig, v && kg, h && Pg),
                                                        classNames: { label: Sg },
                                                        children: d.readOrEmpty(
                                                            'hangar.vehicleMenu.menuItem.crewAutoReturn.title',
                                                        ),
                                                    }),
                                                }),
                                                l.jsx('div', { className: Dg }),
                                            ],
                                        }),
                                    st(rg[r], (e) =>
                                        l.jsx(
                                            xg,
                                            {
                                                name: e,
                                                size: t,
                                                onClick: (e) => {
                                                    (n.navigateTo(e), n.close());
                                                },
                                                researchItem: o,
                                            },
                                            e,
                                        ),
                                    ),
                                ],
                            }),
                            l.jsx('div', { className: Cg }),
                            l.jsxs('div', {
                                className: wg,
                                children: [
                                    l.jsx(ie, { path: `hangar.vehicleMenu.menu_bottom_left_${g}`, className: Tg }),
                                    l.jsx('div', { className: Lg }),
                                    l.jsx(ie, { path: `hangar.vehicleMenu.menu_bottom_right_${g}`, className: Tg }),
                                ],
                            }),
                        ],
                    }),
            )
        );
    }),
    Bg = d(function () {
        const { model: e, controls: t } = cg(),
            a = e.opened.get();
        return (
            je(a ? we.ESCAPE : we.NONE, t.close),
            je(a ? we.SPACE : we.NONE, t.close),
            Ut(() =>
                wt.down(([e, a]) => {
                    'outside' === a && t.close();
                }),
            ),
            null
        );
    }),
    Og = {
        base: 'VehicleMenuWidget_80bb906f',
        menu: 'VehicleMenuWidget_menu_3fa5ac53',
        menu__vehicle: 'VehicleMenuWidget_menu__vehicle_6691c8cb',
        menu__crew: 'VehicleMenuWidget_menu__crew_9d49d2d3',
        menu__customization: 'VehicleMenuWidget_menu__customization_7cda5bdd',
    },
    zg = d(function ({ className: e }) {
        const { model: t, controls: a } = cg(),
            s = t.screenID.get(),
            n = t.computes.getButtonState,
            i = t.computes.researchItem(),
            { state: o } = t.computes.getMenuItem(Rh),
            { state: d } = t.computes.getMenuItem(Vh),
            { state: u } = t.computes.getMenuItem(Wh),
            { state: m } = t.computes.getMenuItem(Hh),
            { state: p } = t.computes.getMenuItem(qh),
            { state: _ } = t.computes.getMenuItem($h),
            { state: h } = t.computes.getMenuItem('customization'),
            g = Kt(
                r.useCallback(() => {
                    a.close();
                }, [a]),
            ),
            v = Ie({ value: Gh }, { large: { value: Zh } }),
            f = n(rg[Kh]),
            b = { [Uh]: n(rg[Uh]), [Kh]: f, [Qh]: h };
        function y(e) {
            if (e === Uh) {
                const e = b[Uh] === sg ? '_disable' : '';
                if (b[Uh] === tg) return b[Uh];
                if (p === eg) return `${qh}${e}`;
                if (i) return `${Jh[i]}${e}`;
                if (u === eg) return `${Wh}${e}`;
                if (m === eg) return `${Hh}${e}`;
            } else if (e === Kh) {
                if (_ === eg) return eg;
                if (d === tg || d === eg) return 'default';
                if (o === ag && b[Kh] !== eg) return 'autoReturn';
            }
            return 'default';
        }
        function x(e) {
            e !== Qh ? (s === e ? a.close() : a.open(e)) : a.navigateTo(Qh);
        }
        return (
            r.useEffect(() => {
                s === Kh && f === sg && a.close();
            }, [s, f, a]),
            l.jsxs('div', {
                ref: g,
                className: c(Og.base, e),
                children: [
                    s !== Qh &&
                        l.jsx('div', {
                            className: c(Og.menu, s && Og[`menu__${s}`]),
                            children: l.jsx(Ag, { buttonState: s ? n(rg[s]) : ag, size: v.value }),
                        }),
                    ig.map((e) =>
                        l.jsx(
                            vg,
                            {
                                type: e,
                                opened: s === e,
                                researchItem: i,
                                buttonState: b[e],
                                crewBackWarning: _ !== eg && (d === tg || d === eg),
                                iconPostfix: y(e),
                                size: v.value,
                                onClick: x,
                            },
                            e,
                        ),
                    ),
                ],
            })
        );
    });
zg.ScreenEvents = Bg;
const Rg = 'VehicleMenu_menu_2b35ec',
    $g = 'VehicleMenu_menu__screenMode_bf623a9b',
    Vg = 'VehicleMenu_menuWidget_f0798397';
function qg({ className: e, screenModeEnabled: t }) {
    const a = te.resolve('aliases').read((e) => e.hangar.shared.VehicleMenu('resId')),
        s = r.useMemo(() => ({ rootId: a }), [a]);
    return l.jsxs(lg, {
        options: s,
        children: [
            l.jsx('div', { className: c(Rg, t && $g, e), children: l.jsx(zg, { className: Vg }) }),
            l.jsx(zg.ScreenEvents, {}),
        ],
    });
}
const Wg = r.createContext(void 0);
function Fg() {
    const e = r.useContext(Wg);
    return (De(void 0 !== e, 'To use hook useEditPlaylist() please add EditPlaylistProvider Provider'), e);
}
const Hg = d(function (e) {
    const t = In(),
        [a, n] = r.useState(!e.new),
        i = bs(t.model.byId(e.id)),
        o = r.useRef(i);
    r.useEffect(
        () =>
            s(() => {
                a && !t.model.edit.dirty.get() && (o.current = i);
            }),
        [i, a, t.model, e.id],
    );
    const c = r.useMemo(() => {
        if (a) {
            let a = function (e) {
                    const a = !o.current || !ys(o.current, e);
                    t.controls.edit.setDirty(a);
                },
                s = function (s) {
                    const n = { ...s, modifiedAt: Date.now() };
                    (t.controls.edit.sendModify(e.id, n), a(n));
                };
            return {
                id: e.id,
                playlist: () => bs(t.model.byId(e.id)),
                playlistUnsafe: () => t.model.byIdUnsafe(e.id),
                fullPlaylist: () => t.model.byIdFull(e.id),
                insert: (a, n) => {
                    const i = t.model.byIdUnsafe(e.id);
                    s({
                        ...i,
                        list: Qt(
                            i.list.filter((e) => e !== a),
                            a,
                            n,
                        ),
                    });
                },
                remove: (a) => {
                    const n = t.model.byIdUnsafe(e.id);
                    s({ ...n, list: n.list.filter((e) => e !== a) });
                },
                updateTitle: (a) => {
                    const n = t.model.byIdUnsafe(e.id);
                    ((a = 0 === (a = a.trim()).length ? gs(t.model.titles(), 'playlists.unnamedTemplate') : a),
                        s({ ...n, title: a }));
                },
            };
        }
    }, [a, e.id, t]);
    return (
        r.useEffect(() => {
            e.new && n(!0);
        }, [e.id, e.new]),
        c ? l.jsx(Wg.Provider, { value: c, children: e.children }) : null
    );
});
function Gg(e) {
    return l.jsx('svg', {
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        ...e,
        children: l.jsx('path', {
            opacity: 0.9,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM14 6C14 5.44772 13.5523 5 13 5H11C10.4477 5 10 5.44772 10 6V8C10 8.55228 10.4477 9 11 9H13C13.5523 9 14 8.55228 14 8V6ZM14 12C14 11.4477 13.5523 11 13 11H11C10.4477 11 10 11.4477 10 12V18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18V12Z',
            fill: '#EEEDE9',
            fillOpacity: 0.9,
        }),
    });
}
const Zg = 'PreviewCard_6db624e2',
    Ug = 'PreviewCard_lacksOverlay_351c6284',
    Kg = 'PreviewCard_border_b785c03e',
    Qg = 'PreviewCard_unknownOverlay_1039cb2e',
    Jg = 'PreviewCard_unknownVehicle_90371983',
    Xg = 'PreviewCard_about_a93f2c02',
    Yg = 'PreviewCard_base__lacks_90371983',
    ev = 'PreviewCard_content_48ec5d54',
    tv = 'PreviewCard_info_b7433b0',
    av = 'PreviewCard_icon_8d50cd85',
    sv = 'PreviewCard_aboutText_920fe732',
    nv = 'PreviewCard_overlay_10333cbb',
    iv = 'PreviewCard_remove_dcd51e1a',
    rv = te.resolve('strings'),
    ov = d(function ({ vehicleId: e, scroll: t, children: a, ...s }) {
        const n = In(),
            i = n.model.vehicles.get(e),
            r = Fg(),
            o = ee(),
            d = n.model.myVehicles.ids().has(e.toString()),
            u = n.model.isElite(e),
            m = ae(24, 48);
        return l.jsxs('div', {
            ...s,
            className: c(Zg, !d && Yg, s.className),
            onMouseEnter: function (e) {
                var t;
                (o.play('mouse-enter', { target: 'vehicle:playlists:edit:preview_card', original: e }),
                    null == (t = s.onMouseEnter) || t.call(s, e));
            },
            'data-test-id': `playlistVehicle-${e}`,
            'data-item-id': e,
            children: [
                l.jsx('div', { className: Kg }),
                i
                    ? l.jsxs('div', {
                          className: ev,
                          children: [
                              l.jsx(mi, { vehicle: i, doubleRow: !1, active: !0 }),
                              l.jsx(lv, { vehicle: i, elite: u }),
                          ],
                      })
                    : l.jsxs('div', {
                          className: ev,
                          children: [
                              l.jsx(Jt, { size: 'x380x304', className: Jg }),
                              l.jsx('div', { className: Qg, children: rv.readOrEmpty('playlists.card.unknown') }),
                          ],
                      }),
                l.jsx('div', { className: Ug }),
                l.jsxs('div', {
                    className: nv,
                    children: [
                        l.jsx(Be, {
                            silent: !0,
                            'data-test-id': 'removePlaylistVehicle',
                            className: iv,
                            soundTarget: 'vehicle:playlists:edit:preview_card:close_button',
                            onClick: (t) => {
                                (o.play('click', { target: 'Button', original: t }),
                                    r.remove(e),
                                    setTimeout(() => Xt(), 100));
                            },
                            children: l.jsx(lr, { value: 'card_close' }),
                        }),
                        !d &&
                            i &&
                            l.jsxs(be, {
                                size: 'small',
                                theme: 'secondary',
                                className: Xg,
                                disabled: !i.comparable,
                                onClick: () => n.controls.goToAboutVehicle(e),
                                children: [
                                    l.jsx(Gg, { className: av, width: m, height: m }),
                                    l.jsx('span', {
                                        className: sv,
                                        children: rv.readOrEmpty('playlists.card.about_vehicle'),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    });
function lv({ vehicle: e, elite: t }) {
    return l.jsxs(de, {
        className: tv,
        children: [l.jsx(yi, { elite: t, vehicle: e }), l.jsx(fi, { premium: e.premium, children: e.shortName })],
    });
}
const cv = {
    removeOverlay: 'DraggingItem_removeOverlay_d9627e2e',
    base: 'DraggingItem_7e49a15e',
    removeOverlay__show: 'DraggingItem_removeOverlay__show_7befe31f',
};
const dv = d(function () {
        const e = r.useRef(null),
            t = xt();
        Ut(() => {
            const i = V.primitive(() =>
                    t.state.virtualItem
                        ? ((function (e) {
                              const t = e.state.dropAreas.find((e) => 'grid' === e.getAttribute('data-drop-area'));
                              if (!t) return void console.error('Grid area not found');
                              const a = t.querySelector('.js-draggable-item');
                              return a instanceof HTMLElement ? a.getBoundingClientRect() : void 0;
                          })(t) ?? { width: fe(256), height: fe(158) })
                        : void 0,
                ),
                r = a.box(void 0, { deep: !1 }),
                o = n(r.set.bind(r));
            return new ve()
                .add(
                    s(() => {
                        const t = i(),
                            a = r.get();
                        if (!t || !a) return;
                        const s = e.current;
                        if (!s) return;
                        const { width: n, height: o } = t;
                        ((s.style.transform = `translate(${a.clientX - n / 2}px, ${a.clientY - o / 2}px)`),
                            (s.style.width = `${n}px`),
                            (s.style.height = `${o}px`),
                            (s.style.display = 'block'));
                    }),
                )
                .add(
                    wt.move(([t]) => {
                        e.current && o(t);
                    }),
                )
                .add(
                    wt.up(([a, s]) => {
                        if (e.current && 'outside' === s) {
                            const e = t.state;
                            (t.emitter.trigger('onDrop', a, e.dragArea, t.item, e), t.reset(), o(void 0));
                        }
                    }),
                ).dispose;
        });
        const i = t.state;
        if (null === i.virtualItem) return null;
        const o = i.virtualItem.getAttribute('data-drop-area'),
            c = Yt(i.virtualItem.getAttribute('data-drop-item'));
        if (void 0 !== c)
            return l.jsxs('div', {
                className: cv.base,
                ref: e,
                style: { width: 0, height: 0, display: 'none' },
                children: [l.jsx(ov, { vehicleId: c, className: cv.item }), l.jsx(uv, { dnd: t })],
            });
        console.warn(`An item with the id ${c} is not found in the container ${o}`);
    }),
    uv = d(function (e) {
        return l.jsx('div', {
            className: c(cv.removeOverlay, !e.dnd.state.overArea && cv.removeOverlay__show),
            children: l.jsx(lr, { value: 'close_48' }),
        });
    }),
    mv = 'Filter_18c313bf',
    pv = 'Filter_search_2ab99031',
    _v = 'Filter_searchField_696a1acc',
    hv = 'Filter_searchPlaceHolder_1ffe980c',
    gv = 'Filter_trigger_7e59b07e',
    vv = 'Filter_popover_62932b10',
    fv = 'Filter_body_504fa1e3',
    bv = 'Filter_scroll_ede2b588',
    yv = d(function () {
        const e = te.resolve('strings'),
            t = Zr(),
            a = t.search.get();
        return l.jsx(et.Provider, {
            value: a,
            children: l.jsxs(et.Decoration, {
                className: pv,
                children: [
                    l.jsx(et.Icon, { icon: et.icons.search }),
                    l.jsx(et.Field, {
                        'data-test-id': 'playlistSearchVehicles',
                        className: _v,
                        classNames: { placeholder: hv },
                        onChange: (e) => t.search.set(e.currentTarget.value),
                        children: e.readOrEmpty('tank_carousel_filter.popover.label.searchNameVehicle'),
                    }),
                    l.jsx(et.ClearButton, { 'data-test-id': 'playlistClearSearchButton' }),
                ],
            }),
        });
    }),
    xv = d(function () {
        const e = te.resolve('strings'),
            t = In(),
            a = t.model.myVehicles.amount(),
            s = t.model.filteredAmount(),
            n = se({
                header: e.readOrEmpty('tank_carousel_filter.tooltip.params.header'),
                body: e.readOrEmpty('tank_carousel_filter.tooltip.params.body'),
            });
        return l.jsx(qe.Trigger, {
            children: (e) => l.jsx('div', { ...n, className: gv, children: l.jsx(co, { ...e, current: s, total: a }) }),
        });
    }),
    Cv = d(function () {
        const e = In().model.nationsOrder.get();
        return l.jsxs(qe.Body, {
            className: fv,
            children: [l.jsx(qe.Divider, {}), l.jsx(ro, { scrollClassNames: { content: bv }, orderedNations: e })],
        });
    }),
    wv = d(function () {
        const e = In();
        return l.jsx(io, { current: e.model.filteredAmount(), total: e.model.myVehicles.amount() });
    }),
    jv = d(function () {
        return l.jsxs('div', {
            className: mv,
            children: [
                l.jsx(yv, {}),
                l.jsx(xv, {}),
                l.jsx(qe.Portal, {
                    position: 'right',
                    children: l.jsx(We, {
                        children: l.jsxs(qe.Display, {
                            className: vv,
                            children: [
                                l.jsx(qe.Tip, { position: 'bottom', size: '80rem', offset: '120rem' }),
                                l.jsx(qe.Close, {}),
                                l.jsx(wv, {}),
                                l.jsx(Cv, {}),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    Nv = 'Footer_66922b8b',
    Iv = 'Footer_base__manual_fa053ebe',
    Sv = 'Footer_button_5b899796',
    kv = { default: { size: be.sizes.extraSmall }, breakpoints: { medium: { size: be.sizes.small } } },
    Pv = d(function (e) {
        const t = te.resolve('strings'),
            a = Ie(kv.default, kv.breakpoints),
            s = In();
        return l.jsxs('div', {
            className: c(Nv, Iv, e.className),
            children: [
                l.jsx(be, {
                    'data-test-id': 'savePlaylist',
                    className: Sv,
                    autoAlignContent: !1,
                    theme: be.themes.primary,
                    size: a.size,
                    disabled: !1 === s.model.edit.dirty.get(),
                    onClick: e.onSave,
                    soundTarget: 'vehicle:playlists:edit:footer:save_button',
                    children: t.readOrEmpty('playlists.editScreen.button.save'),
                }),
                l.jsx(be, {
                    'data-test-id': 'exitPlaylist',
                    className: Sv,
                    autoAlignContent: !1,
                    theme: be.themes.secondary,
                    size: a.size,
                    onClick: e.onCancel,
                    soundTarget: 'vehicle:playlists:edit:footer:cancel_button',
                    children: t.readOrEmpty('playlists.editScreen.button.exit'),
                }),
            ],
        });
    }),
    Ev = { height: 110, rows: 4 },
    Mv = { medium: { height: 136, rows: 5 }, large: { height: 149, rows: 6 }, extraLarge: { height: 187 } };
function Dv() {
    const e = xt(),
        [t, a] = r.useState(void 0);
    return (
        r.useEffect(() => {
            if (t)
                return new ve()
                    .add(
                        ea(window, 'mousemove', (s) => {
                            t &&
                                (function (e, t) {
                                    const a = t.clientX - e.clientX,
                                        s = t.clientY - e.clientY;
                                    return a * a + s * s;
                                })(s, t) > 50 &&
                                (e.start(t), a(void 0));
                        }),
                    )
                    .add(ea(window, 'mouseup', () => a(void 0))).dispose;
        }, [e, t]),
        {
            onClick: Dt((e) => {
                e.button === Nt.left && a({ ...e });
            }),
        }
    );
}
const Tv = {
        base: 'Grid_9cc26e53',
        content: 'Grid_content_2ec4d804',
        scrollWrapper: 'Grid_scrollWrapper_25b8ce41',
        scrollContent: 'Grid_scrollContent_d9d04',
        draggableItem: 'Grid_draggableItem_eed1b4d2',
        card: 'Grid_card_5124f883',
        dndSeparator: 'Grid_dndSeparator_4e3295f',
        stateInfo: 'Grid_stateInfo_df3fdb33',
        title: 'Grid_title_be284df3',
        description: 'Grid_description_750b612a',
        area__begin: 'Grid_area__begin_c6c72ca9',
        area__end: 'Grid_area__end_89c93232',
    },
    Lv = d(function ({ id: e, children: t, disabled: a, ...s }) {
        var n;
        const i = xt(),
            r = Dv(),
            o = null == (n = i.item) ? void 0 : n.getAttribute('data-drop-item');
        return l.jsx('div', {
            ...s,
            'data-drop-item': e,
            className: c(Tv.draggableItem, o === e && Tv.draggableItem__dragging, 'js-draggable-item'),
            onMouseDown: (e) => {
                a || r.onClick(e);
            },
            children: t,
        });
    }),
    Av = te.resolve('strings'),
    Bv = [25, 25],
    Ov = d(function (e) {
        const t = In().model.byIdFull(e.id);
        return (
            De(void 0 !== t, `Grid expected to get vehicles from playlist ${e.id}, but playlist is not defined`),
            l.jsx(Fe, {
                children:
                    0 === t.list.length
                        ? l.jsxs(Rv, {
                              className: Tv.stateInfo,
                              children: [
                                  l.jsx('div', {
                                      className: Tv.title,
                                      children: Av.readOrEmpty('playlists.editScreen.create.title'),
                                  }),
                                  l.jsx('div', {
                                      className: Tv.description,
                                      children: Av.readOrEmpty('playlists.editScreen.create.body'),
                                  }),
                              ],
                          })
                        : l.jsx(zv, { playlist: t }),
            })
        );
    }),
    zv = d(function (e) {
        const { api: t } = Re(),
            a = Ie(Ev, Mv),
            [s, n] = ye(t, Bv);
        return l.jsx(xe, {
            api: t,
            elementHeight: a.height,
            itemsPerRow: a.rows,
            direction: 'vertical',
            throttle: 80,
            totalElements: e.playlist.list.length,
            wrappers: { Content: Rv },
            renderScroll: (e) =>
                l.jsx('div', {
                    style: { '--card-height': `${a.height}rem` },
                    'data-name': 'grid-edit-playlist',
                    className: Tv.base,
                    children: l.jsx(Qe, {
                        ...e,
                        areaClassName: c(Tv.area, !s && Tv.area__begin, !n && Tv.area__end),
                        scrollClassNames: { wrapper: Tv.scrollWrapper, content: Tv.scrollContent },
                        children: e.children,
                    }),
                }),
            renderElement: (t) => {
                const a = e.playlist.list[t];
                return l.jsx(Lv, {
                    id: a.toString(),
                    'data-drop-area': 'grid',
                    children: l.jsx(ov, { className: Tv.card, vehicleId: a }, a),
                });
            },
        });
    }),
    Rv = d(function (e) {
        const t = xt(),
            a = r.useRef(null),
            s = r.useRef(null),
            [n, i] = r.useState(!1),
            o = Fg(),
            { id: d, playlist: u } = o,
            m = In();
        return (
            r.useEffect(() => {
                let e;
                const n = s.current;
                if (!n) return void console.error('Separator ref is not filled');
                const r = a.current;
                if (r)
                    return new ve()
                        .add(
                            t.emitter.on('onDrop', (e, t, a) => {
                                l();
                                const s = Yt(null == a ? void 0 : a.getAttribute('data-drop-item'));
                                if (void 0 === s) return;
                                const n = document.elementFromPoint(e.clientX, e.clientY);
                                if (!t || !n || (!r.contains(n) && n !== r)) return void o.remove(s);
                                const i = Yt(n.getAttribute('data-item-id'));
                                o.insert(s, void 0 !== i ? u().list.indexOf(i) : void 0);
                            }),
                        )
                        .add(
                            t.emitter.on('onMove', (t) => {
                                const a = document.elementFromPoint(t.clientX, t.clientY);
                                if (a === e || !(a instanceof HTMLDivElement)) return;
                                if ((i(r === a || r.contains(a)), !a.getAttribute('data-item-id'))) return void l();
                                const s = r.getBoundingClientRect(),
                                    o = a.getBoundingClientRect();
                                ((n.style.transform = `translate(${o.x - s.x}px,${o.y - s.y}px)`),
                                    (n.style.height = `${o.height}px`),
                                    (n.style.display = 'block'),
                                    (e = a));
                            }),
                        ).dispose;
                function l() {
                    (i(!1), (e = void 0), (n.style.display = 'none'));
                }
                console.error('Base ref is not filled');
            }, [o, t.emitter, d, u, m.controls]),
            l.jsxs(jt.DropArea, {
                ...e,
                ref: a,
                'data-drop-area': 'grid',
                className: c(Tv.content, n && Tv.content__dragging, e.className),
                children: [e.children, l.jsx('div', { className: Tv.dndSeparator, ref: s })],
            })
        );
    }),
    $v = 'Background_476ee51e',
    Vv = 'Background_flag_bc133c8d',
    qv = 'Background_vehicle_7973c233';
function Wv({ vehicle: e }) {
    const t = te.resolve('images'),
        a = `vehicle.x190x152.${In().model.vehicleImage(e.vehicleId)}`;
    return l.jsxs('div', {
        className: c($v),
        children: [
            l.jsx('div', {
                className: Vv,
                style: {
                    backgroundImage: `url(${t.readOrEmpty(`hangar.carousel.cards.flags.x400x300.${B(e.nationId)}`)})`,
                },
            }),
            l.jsx('div', {
                className: qv,
                style: { backgroundImage: `url(${t.readOrEmpty(t.has(a) ? a : 'vehicle.x190x152.tank_empty')})` },
            }),
        ],
    });
}
const Fv = 'VehicleInformation_b9ce6636',
    Hv = 'VehicleInformation_base__selected_49aec79f',
    Gv = 'VehicleInformation_vehicleInfo_188b82f7',
    Zv = 'VehicleInformation_text_12254eae',
    Uv = 'VehicleInformation_text__level_2431a30a',
    Kv = 'VehicleInformation_text__name_90468cf8',
    Qv = 'VehicleInformation_text__premium_c5399345',
    Jv = d(function ({ vehicle: e, selected: t }) {
        const a = In().model.isElite(e.id),
            s = e.premium;
        return l.jsxs('div', {
            className: c(Fv, t && Hv),
            children: [
                l.jsx(Wv, { vehicle: e }),
                l.jsxs(de, {
                    className: Gv,
                    children: [
                        l.jsx(de.Level, { className: c(Zv, Uv), value: e.level }),
                        me(e.type) && l.jsx(de.Type, { type: e.type, premium: a, size: de.Type.sizes.x24x24 }),
                        l.jsx(de.Name, { className: c(Zv, Kv, s && Qv), children: e.shortName }),
                    ],
                }),
            ],
        });
    }),
    Xv = 'Card_border_aaf47988',
    Yv = 'Card_content_7f4f270',
    ef = 'Card_actionIcon_538a4b93',
    tf = 'card_close',
    af = 'card_add',
    sf = re('Slot', 'Card_a05790e2', {
        variants: {
            selected: { true: 'Card_base__selected_f4c22d1c' },
            dragging: { true: 'Card_base__dragging_f4c22d1c' },
            hover: { true: 'Card_base__hover_f4c22d1c' },
            empty: { true: 'Card_base__empty_9c9bc0d5' },
        },
    });
function nf(e) {
    return l.jsx(sf, {
        className: e.className,
        style: { height: e.height },
        empty: !0,
        children: l.jsx('div', { className: Xv }),
    });
}
const rf = d(function ({ vehicle: e, scroll: t, index: a, selected: s = !1, height: n, onClick: i, ...o }) {
        const c = ee(),
            [d, u] = r.useState(!1),
            [m, p] = r.useState(!1),
            _ = xt(),
            h = e ? e.vehicleId : `emptyCard.${a}`,
            g = s ? tf : d ? af : '',
            v = `${g}${m ? '_active' : d ? '_hover' : ''}`,
            f = Boolean(_.item) && _.item.getAttribute('data-drop-item') === h.toString();
        return l.jsxs(sf, {
            ...o,
            'data-test-id': `selectVehicle-${h}`,
            selected: s,
            hover: d,
            style: { height: n },
            dragging: f,
            onMouseEnter: function (t) {
                e && (u(!0), c.play('mouse-enter', { target: 'vehicle:playlists:card', original: t }));
            },
            onMouseLeave: function () {
                (u(!1), p(!1));
            },
            onMouseDown: function (e) {
                e.button === Nt.left && p(!0);
            },
            onMouseUp: function (t) {
                t.button === Nt.left &&
                    (p(!1),
                    e
                        ? f ||
                          (null == i || i(e.vehicleId),
                          c.play(g === tf ? 'close' : 'click', { target: 'vehicle:playlists:card', original: t }))
                        : console.error('Unknown vehicle', e));
            },
            children: [
                l.jsx('div', { className: Xv }),
                e &&
                    l.jsxs('div', {
                        className: Yv,
                        children: [
                            l.jsx(Jv, { selected: s, vehicle: e }),
                            '' !== g && l.jsx(lr, { className: ef, value: v }),
                        ],
                    }),
            ],
        });
    }),
    of = {
        base: 'List_4152ee6b',
        draggableItem: 'List_draggableItem_b1a74246',
        bar: 'List_bar_97761f22',
        base__scrollDisabled: 'List_base__scrollDisabled_5974b0a7',
        area__begin: 'List_area__begin_9ee287e9',
        area__end: 'List_area__end_2903fca6',
    },
    lf = d(function ({ id: e, children: t, disabled: a, soundTarget: s, ...n }) {
        const i = Dv(),
            o = ee(),
            c = xt(),
            d = Boolean(c.item) && c.item.getAttribute('data-drop-item') === e,
            u = lt(d);
        return (
            r.useEffect(() => {
                (d && !1 === u && o.play('drag', { target: s ?? 'vehicle:playlists:edit:draggable_item' }),
                    d || !0 !== u || o.play('drop', { target: s ?? 'vehicle:playlists:edit:draggable_item' }));
            }, [s, o, d, u]),
            l.jsx('div', {
                ...n,
                'data-drop-item': e,
                className: of.draggableItem,
                onMouseDown: (e) => {
                    a || i.onClick(e);
                },
                children: t,
            })
        );
    }),
    cf = [25, 25],
    df = d(function (e) {
        const { api: t } = Re(),
            [a, s] = ye(t, cf),
            n = In(),
            i = n.model.byIdUnsafe(e.id),
            o = n.model.filtered(),
            d = Ie({ height: 48 }, { large: { height: 64 } }),
            u = fe(d.height),
            m = Fg();
        function p(e) {
            i.list.includes(e) ? m.remove(e) : m.insert(e);
        }
        const [_, h] = r.useState(0);
        return (
            r.useEffect(() => {
                function a() {
                    const a = e.baseRef.current;
                    if (!a) return;
                    const s = a.offsetHeight - u * o.length;
                    s >= 0
                        ? (t.setDisabled(!0),
                          t.applyScroll(0, { immediate: !0 }),
                          h(Math.ceil(s / u) + 1),
                          a.classList.add(of.base__scrollDisabled))
                        : (t.setDisabled(!1), h(0), a.classList.remove(of.base__scrollDisabled));
                }
                return (a(), t.events.on('recalculateContent', a));
            }, [t, u, e.baseRef, o.length]),
            l.jsx(xe, {
                api: t,
                elementHeight: u,
                direction: 'vertical',
                totalElements: _ + o.length,
                renderScroll: (e) =>
                    l.jsx(Ve, {
                        ...e,
                        className: c(of.area, !a && of.area__begin, !s && of.area__end),
                        children: e.children,
                    }),
                renderElement: (e) => {
                    const a = o[e];
                    if (!a) return l.jsx(nf, { height: u });
                    const s = i.list.includes(a.vehicleId);
                    return l.jsx(
                        lf,
                        {
                            disabled: s,
                            id: a.id,
                            'data-drop-area': a.id,
                            children: l.jsx(rf, {
                                height: u,
                                onClick: p,
                                index: e,
                                selected: s,
                                vehicle: a,
                                scroll: t,
                            }),
                        },
                        a.id,
                    );
                },
            })
        );
    }),
    uf = r.memo(function (e) {
        const t = r.useRef(null);
        return l.jsx('div', {
            className: of.base,
            ref: t,
            children: l.jsxs(Fe, {
                children: [
                    l.jsx(df, { baseRef: t, id: e.id }),
                    l.jsx('div', { className: of.bar, children: l.jsx(He, {}) }),
                ],
            }),
        });
    }),
    mf = 'Name_decoration_82a70e4e',
    pf = 'Name_placeholder_36222a38';
function _f({ children: e }) {
    const t = ee();
    return l.jsx('div', {
        className: mf,
        onMouseEnter: function (e) {
            t.play('mouse-enter', { target: 'vehicle:playlists:edit_name_input', original: e });
        },
        onClick: function (e) {
            t.play('click', { target: 'vehicle:playlists:edit_name_input', original: e });
        },
        children: e,
    });
}
const hf = d(function () {
        const e = Fg(),
            t = e.playlistUnsafe(),
            [a, s] = r.useState(t.title),
            n = Dt(() => e.updateTitle(a)),
            i = $t(n, [n], 400);
        return l.jsx(et.Provider, {
            value: a,
            children: l.jsx(_f, {
                children: l.jsx(et.Field, {
                    maxLength: 100,
                    classNames: { placeholder: pf },
                    onChange: function (e) {
                        (s(e.target.value), i());
                    },
                    'data-test-id': 'playlistName',
                    children: te.resolve('strings').readOrEmpty('playlists.editScreen.input.placeholder'),
                }),
            }),
        });
    }),
    gf = 'Edit_6e6c018a',
    vf = 'Edit_side_32fb5102',
    ff = 'Edit_base__manual_c860fbd9',
    bf = 'Edit_topSide_a248754f',
    yf = 'Edit_sideSeparator_8ffe56a3',
    xf = 'Edit_main_9d89cd47',
    Cf = 'Edit_topMain_206241af',
    wf = 'Edit_header_c18f180d',
    jf = 'Edit_iconTrashCan_80d1a58c',
    Nf = 'Edit_grid_54c57624',
    If = 'Edit_footer_f4d6b753',
    Sf = d(function (e) {
        const t = In(),
            a = Fg().playlist(),
            s = te.resolve('strings'),
            n = xt();
        ta(t.controls.filters.reset);
        const i = r.useMemo(
            () => ({
                filters: t.model.filters,
                search: t.model.searchName,
                defaultFilters: t.model.defaultFilters,
                hasFilter: t.model.hasFilters,
                change: t.controls.filters.change,
                reset: t.controls.filters.reset,
            }),
            [t],
        );
        return a
            ? l.jsxs(jt.DragArea, {
                  className: c(gf, ff, n.item && 'dragging', e.className),
                  children: [
                      l.jsxs('div', {
                          className: vf,
                          children: [
                              l.jsx('div', {
                                  className: bf,
                                  children: l.jsx(Gr.Provider, {
                                      value: i,
                                      children: l.jsx(qe, { children: l.jsx(jv, {}) }),
                                  }),
                              }),
                              l.jsx('div', { className: yf }),
                              l.jsx(uf, { id: e.id }),
                          ],
                      }),
                      l.jsxs('div', {
                          className: xf,
                          children: [
                              l.jsx('div', {
                                  className: Cf,
                                  children: l.jsxs('div', {
                                      className: wf,
                                      children: [
                                          l.jsx(hf, {}),
                                          l.jsxs(be, {
                                              'data-test-id': 'deletePlaylist',
                                              theme: 'secondary',
                                              onClick: () => t.controls.openDeleteConfirm(e.id, a.title),
                                              size: 'small',
                                              children: [
                                                  l.jsx(lr, { className: jf, value: 'trash_can' }),
                                                  s.readOrEmpty('playlists.list.remove'),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                              l.jsx('div', { className: Nf, children: l.jsx(Ov, { id: e.id }) }),
                              l.jsx(Pv, {
                                  className: If,
                                  onSave: () => t.controls.save(e.id),
                                  onCancel: () => t.controls.exit(e.id),
                              }),
                          ],
                      }),
                  ],
              })
            : (console.error(`Unknown ${e.id} as playlist`), null);
    }),
    kf = d(function (e) {
        return l.jsx(Hg, {
            id: e.id,
            new: e.new,
            children: l.jsxs(jt, {
                children: [l.jsx(Sf, { ...e }), l.jsx(jt.VirtualItem, { here: !0, children: l.jsx(dv, {}) })],
            }),
        });
    }),
    Pf = 'Page_7fb51c9';
function Ef() {
    const e = Pe();
    je(we.ESCAPE, () => {
        e.goBack();
    });
    const t = r.useMemo(() => {
        try {
            return i(xs, JSON.parse(e.params));
        } catch (t) {
            return void console.error(t);
        }
    }, [e.params]);
    return t
        ? l.jsx(kf, { new: t.new, id: t.id, className: Pf })
        : (console.error('Expected params for Edit screen, but got', t), null);
}
const Mf = 'HeroTankMarker_7a1c486d',
    Df = 'HeroTankMarker_base__visible_d8b5c003',
    Tf = 'HeroTankMarker_vehicleName_a789e6e5',
    Lf = 'HeroTankMarker_vehicleType_d8b5c003',
    Af = re('HeroTankInfo'),
    Bf = d(
        r.forwardRef(function (e, t) {
            const { model: a } = $s(),
                n = a.type.get(),
                i = r.useRef(null),
                [o, d] = r.useState(!1);
            return (
                r.useEffect(
                    () =>
                        s(() => {
                            const e = a.heroTankMarker.get();
                            d(e.isVisible);
                            const t = i.current;
                            if (!t) return null;
                            t.style.transform = `translate(${fe(e.posx)}px, ${fe(e.posy)}px) translate(-50%, -50%)`;
                        }),
                    [a.heroTankMarker],
                ),
                l.jsxs(Af, {
                    ...e,
                    ref: aa([t, i]),
                    className: c(Mf, o && Df),
                    children: [
                        l.jsx('div', { className: Tf, children: a.name.get() }),
                        l.jsx('div', {
                            className: Lf,
                            children: n && l.jsx(ie, { path: `vehicleTypes.gold.${Rt(n)}`, width: 32, height: 32 }),
                        }),
                    ],
                })
            );
        }),
    ),
    Of = 'disabled',
    zf = 'enabled',
    Rf = 'modeSelector',
    $f = 'shop',
    Vf = 'storage',
    qf = 'missions',
    Wf = 'personalMissions',
    Ff = 'achievements',
    Hf = 'techtree',
    Gf = 'tournament',
    Zf = 'barracks',
    Uf = 'clans',
    Kf = Gf,
    Qf = Uf,
    Jf = Wf,
    Xf = Rf,
    Yf = Ff,
    eb = {
        [$f]: 'shop',
        [Vf]: 'storage',
        [Hf]: 'techtree',
        [Zf]: 'barracks',
        [Kf]: 'tournament',
        [Qf]: 'clans',
        ['clan']: 'clan',
        [qf]: 'missions',
        [Jf]: 'personalMissions',
        [Xf]: 'modeSelector',
        [Yf]: 'profile',
        ['replays']: 'replays',
    },
    tb = (e) =>
        r.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            r.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    ab = {
        base: 'MenuItem_92bbc5da',
        base__modeSelectorName: 'MenuItem_base__modeSelectorName_28be5e00',
        base__enabledState: 'MenuItem_base__enabledState_6f88d3d1',
        modeSelector: 'MenuItem_modeSelector_1c338d85',
        modeIcon: 'MenuItem_modeIcon_9555dfb6',
        label: 'MenuItem_label_279fb3be',
        base__disabledState: 'MenuItem_base__disabledState_28be5e00',
        titleWrapper: 'MenuItem_titleWrapper_cf46ff6b',
        title: 'MenuItem_title_fdf9bd46',
        arrow: 'MenuItem_arrow_1ff4c9e',
        modeName: 'MenuItem_modeName_36c0339e',
        clanEmblem: 'MenuItem_clanEmblem_fe5255ab',
    },
    sb = 'forts',
    nb = te.resolve('intl'),
    ib = te.resolve('strings'),
    rb = {
        [Xf]: 'tooltips.header.battleType',
        [Kf]: 'tooltips.header.buttons.tournaments',
        [Yf]: 'tooltips.header.buttons.profile',
    },
    ob = {
        [Qf]: 'tooltips.header.buttons.clans.turnedOff',
        [Jf]: 'tooltips.header.buttons.personalMissionsDisabled',
        [sb]: 'tooltips.header.buttons.forts.turnedOff',
    };
function lb(e) {
    return nb.toUpperCase(ib.readOrEmpty(`menu.headerButtons.${eb[e]}`) || ib.readOrEmpty(`menu.headerButtons.${e}`));
}
function cb({
    name: e,
    state: t,
    modeName: a,
    modeId: s,
    techTreeEvents: n,
    clanEmblem: i,
    onClick: o,
    battleTypesPath: d = '',
}) {
    const u = ee(),
        m = e === Qf && i,
        p = se(
            r.useMemo(
                () =>
                    (function (e, t) {
                        const a = ((t && ob[e]) || rb[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: ib.readOrEmpty(`${a}.header`), body: ib.readOrEmpty(`${a}.body`) };
                    })(m ? sb : e, t === Of),
                [e, t, m],
            ),
        ),
        _ = ne('techtreeDiscount'),
        h = n && 'techtree' === e ? _ : p;
    return l.jsx('div', {
        ...h,
        className: c(ab.base, ab[`base__${t}State`], ab[`base__${e}Name`]),
        'data-test-id': e,
        onMouseEnter: function (e) {
            (h.onMouseEnter(),
                t !== Of && u.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (a) {
            (h.onClick(), t !== Of && (o(e), u.play('click', { target: 'main-menu-widget:menu-item', original: a })));
        },
        children: (() => {
            switch (e) {
                case Xf: {
                    const t = d ? `${d}.battleTypes.c_64x64.${s}` : `battleTypes.c_64x64.${s}`;
                    return l.jsxs(l.Fragment, {
                        children: [
                            l.jsxs('div', {
                                className: ab.modeSelector,
                                children: [
                                    l.jsx('div', { className: ab.label, children: lb(e) }),
                                    a && l.jsx('div', { className: ab.modeName, children: nb.toUpperCase(a) }),
                                    l.jsx(ie, { className: ab.modeIcon, path: t }),
                                ],
                            }),
                            l.jsx(tb, { className: ab.arrow }),
                        ],
                    });
                }
                case Qf:
                    return l.jsxs('div', {
                        className: ab.titleWrapper,
                        children: [
                            i && l.jsx('div', { style: { backgroundImage: `url(${i})` }, className: ab.clanEmblem }),
                            l.jsx('div', { className: ab.title, children: lb(m ? 'clan' : e) }),
                        ],
                    });
                default:
                    return l.jsx('div', {
                        className: ab.titleWrapper,
                        children: l.jsx('div', { className: ab.title, children: lb(e) }),
                    });
            }
        })(),
    });
}
const [db, ub] = I()(
        ({ observableModel: e }) => ({
            menuItems: e.array('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    mb = 'MainMenu_222da7b7',
    pb = d(function ({ className: e, battleTypesPath: t = '' }) {
        const { model: a, controls: s } = ub(),
            n = a.menuItems.get(),
            i = a.modeName.get(),
            o = a.modeId.get(),
            d = a.hasTechTreeEvents.get(),
            u = a.clanEmblem.get();
        return l.jsx('div', {
            className: c(mb, e),
            children: st(n, (e) =>
                r.createElement(cb, {
                    ...e,
                    key: e.name,
                    battleTypesPath: t,
                    onClick: s.navigateTo,
                    modeName: i,
                    modeId: o,
                    techTreeEvents: d,
                    clanEmblem: u,
                }),
            ),
        });
    }),
    _b = {
        getter: sa({
            menuItems: [
                { name: Rf, state: zf },
                { name: $f, state: zf },
                { name: Vf, state: zf },
                { name: qf, state: zf },
                { name: Wf, state: zf },
                { name: Ff, state: zf },
                { name: Hf, state: zf },
                { name: Zf, state: Of },
                { name: Gf, state: zf },
                { name: Uf, state: zf },
            ],
            modeName: 'Random Battle',
        }),
        controls: () => Z(na('navigateTo')),
    };
function hb({ className: e, battleTypesPath: t = '', ...a }) {
    return l.jsx(db, { mode: 'real', mocks: _b, ...a, children: l.jsx(pb, { className: e, battleTypesPath: t }) });
}
function gb({ className: e }) {
    const { controls: t } = qs();
    return l.jsx('div', {
        className: e,
        children: l.jsx(ia, {
            moveSpace: t.sceneWrapper.onMoveSpace,
            onMouseOver3dScene: t.sceneWrapper.onMouseOver3dScene,
        }),
    });
}
const vb = r.createContext(null);
function fb() {
    const e = r.useContext(vb);
    return (De(null !== e, 'AnimationsContext is null'), e);
}
function bb(e, t, a = e) {
    return e + '+' + t + '+' + a;
}
function yb(e, t, ...a) {
    let s = e.current;
    if (0 == a.length) return !1;
    for (let n = 0; n < a.length - 1; n++) {
        const e = a[n];
        ((s[e] = s[e] ?? {}), (s = s[e]));
    }
    return ((s[a[a.length - 1]] = t), !0);
}
function xb(e, ...t) {
    const a = (e, s) => {
        if (s === t.length) return ra(e);
        const n = t[s];
        return n in e && ((s === t.length - 1 || a(e[n], s + 1)) && delete e[n], ra(e));
    };
    return a(e.current, 0);
}
function Cb(e, ...t) {
    let a = e.current;
    return t.reduce((e, t) => (null == e ? void 0 : e[t]), a);
}
function wb(e, ...t) {
    let a = e.current;
    return void 0 !== t.reduce((e, t) => (null == e ? void 0 : e[t]), a);
}
function jb(e, t, a, s) {
    Object.entries(t).forEach(([t, n]) => {
        ra(n)
            ? wb(a, e, t, e) && s(t, e)
            : Object.entries(n).forEach(([n, i]) => {
                  const r = n || e;
                  wb(a, e, t, r) && s(t, r, i);
              });
    });
}
function Nb({ storage: e, id: t, emitter: a, providerCfg: s }) {
    wb(e, t) || Ib({ id: t, emitter: a, providerCfg: s });
}
function Ib({ id: e, emitter: t, providerCfg: a }) {
    var s;
    const n = (null == a ? void 0 : a.triggerId) || e;
    (t.trigger(n, { id: e, ...(null == a ? void 0 : a.triggerParams) }),
        null == (s = null == a ? void 0 : a.triggerCallback) ||
            s.call(a, { id: e, ...(null == a ? void 0 : a.triggerParams) }));
}
function Sb({ sound: e, soundCfg: t }) {
    e && t && ('string' == typeof t ? e.play(t) : e.play(t.eventName, null == t ? void 0 : t.event));
}
function kb({ children: e }) {
    const t = oa(),
        a = r.useRef({}),
        s = r.useRef({}),
        n = r.useRef({}),
        i = la(),
        o = Dt(({ id: e, animName: t, elementId: s = e }) => wb(a, e, t, s)),
        c = Dt((e, t, s = e) => {
            xb(a, e, t, s);
        }),
        d = Dt(({ id: e, animName: t, config: s, elementId: n = e }) => (yb(a, s, e, t, n), () => c(e, t, n))),
        u = Dt(({ id: e, animName: t, elementId: s = e, animCallParams: n, providerCfg: r, soundCfg: o }) => {
            const l = Cb(a, e, t, s);
            (l &&
                ((null == r ? void 0 : r.skip)
                    ? l.skip({ ...n, ...(null == r ? void 0 : r.animCallParams) })
                    : l.start({ ...n, ...(null == r ? void 0 : r.animCallParams) })),
                Sb({ sound: i, soundCfg: o }));
        }),
        m = Dt(({ id: e, animName: a, elementId: n = e, providerCfg: i = {} }) => {
            const r = t.on(bb(e, a, n), () => {
                (xb(s, e, a, n), Nb({ storage: s, id: e, emitter: t, providerCfg: i }), r());
            });
            yb(s, !0, e, a, n);
        }),
        p = Dt(({ complexId: e, id: a, animName: s, elementId: i = a, providerCfg: r }) => {
            const o = t.on(bb(a, s, i), () => {
                    (!(function ({
                        storage: e,
                        complexId: t,
                        groupId: a,
                        animName: s,
                        elementId: n,
                        emitter: i,
                        providerCfg: r,
                    }) {
                        let o = Cb(e, t, a, s);
                        o &&
                            (o.delete(n),
                            o.size || xb(e, t, a, s),
                            Nb({ storage: e, id: t, emitter: i, providerCfg: r }));
                    })({ storage: n, complexId: e, groupId: a, animName: s, elementId: i, emitter: t, providerCfg: r }),
                        o());
                }),
                l = Cb(n, e, a, s);
            l ? l.add(i) : yb(n, new Set().add(i), e, a, s);
        }),
        _ = Dt(({ groupId: e, groupCfg: n, providerCfg: r, soundCfg: o }) => {
            (xb(s, e),
                (null == r ? void 0 : r.skip) ||
                    (null == r ? void 0 : r.skipTrigger) ||
                    jb(e, n, a, (t, a) => {
                        m({ id: e, animName: t, elementId: a, providerCfg: r });
                    }),
                jb(e, n, a, (t, a, s) => {
                    u({ id: e, animName: t, elementId: a, animCallParams: s, providerCfg: r });
                }),
                Sb({ sound: i, soundCfg: o }),
                (null == r ? void 0 : r.skip) &&
                    !(null == r ? void 0 : r.skipTrigger) &&
                    Ib({ id: e, emitter: t, providerCfg: r }));
        }),
        h = Dt(({ complexId: e, complexCfg: s, providerCfg: r, soundCfg: o }) => {
            if ((xb(n, e), !(null == r ? void 0 : r.skip) && !(null == r ? void 0 : r.skipTrigger)))
                for (let [t, n] of Object.entries(s))
                    jb(t, n, a, (a, s) => {
                        p({ complexId: e, id: t, animName: a, elementId: s, providerCfg: r });
                    });
            for (let [t, n] of Object.entries(s))
                jb(t, n, a, (e, a, s) => {
                    u({ id: t, animName: e, elementId: a, animCallParams: s, providerCfg: r });
                });
            (Sb({ sound: i, soundCfg: o }),
                (null == r ? void 0 : r.skip) &&
                    !(null == r ? void 0 : r.skipTrigger) &&
                    Ib({ id: e, emitter: t, providerCfg: r }));
        }),
        g = r.useMemo(
            () => ({
                registerAnimation: d,
                unRegistrateAnimation: c,
                startAnimation: u,
                startGroupAnimation: _,
                startComplexAnimation: h,
                checkRegisteredInStorage: o,
                emitter: t,
            }),
            [o, t, d, u, h, _, c],
        );
    return l.jsx(vb.Provider, { value: g, children: e });
}
const Pb = (e) => {
    const t = (null == e ? void 0 : e.showDelay) || 400,
        a = r.useRef({ ...e.args }),
        s = r.useRef(null),
        n = Te(),
        i = ue({ ...e, showDelay: 0, args: a.current });
    return {
        containerRef: s,
        tooltipProps: {
            ...i,
            onMouseEnter: () => {
                n.run(() => {
                    var t;
                    if (s.current) {
                        const n = s.current.getBoundingClientRect(),
                            i = null == (t = s.current.parentElement) ? void 0 : t.getBoundingClientRect();
                        (Object.assign(a.current, e.args),
                            (a.current.positionY = Math.floor(da(n.y)) - 13),
                            (a.current.positionX = Math.floor(da((null == i ? void 0 : i.x) || n.x)) - 10));
                    }
                    i.onMouseEnter();
                }, t);
            },
            onMouseLeave: () => {
                (n.clear(), i.onMouseLeave());
            },
        },
    };
};
function Eb() {
    const { screenWidthRem: e } = Pt();
    return e < ca.large.width;
}
const Mb = p.createContext(void 0);
function Db() {
    const e = r.useContext(Mb);
    return (De(void 0 !== e, 'WidgetAnimationContext is undefined'), e);
}
const Tb = 'small',
    Lb = 'big',
    Ab = { full: 'full', medium: 'medium', small: 'small' },
    Bb = { appear: 'appear', fadeIn: 'fadeIn', slideUpIn: 'slideUpIn' },
    Ob = { battlePass: 'battlePass', events: 'events', missions: 'missions' },
    zb = { y: 0, x: 0, opacity: 0, height: 0, width: 0 },
    Rb = 1,
    $b = 2,
    Vb = 4,
    qb = 5;
function Wb(e, t) {
    return e >= $b
        ? (function (e) {
              return e === Vb ? Ab.medium : e === qb ? Ab.small : Ab.full;
          })(t)
        : Ab.full;
}
function Fb(e) {
    const t = new Map();
    for (let a = 0; a <= e.length; a++) {
        const s = e[a];
        t.set(s, { rowIndex: a, columnIndex: 0, size: Ab.full });
    }
    return t;
}
function Hb(e) {
    return -(Math.cos(Math.PI * e) - 1) / 2;
}
const Gb = { duration: 400, easing: Hb },
    Zb = new Map([
        [Ob.battlePass, { position: 0 }],
        [
            Ob.events,
            {
                position: 100,
                layoutCreator: function (e) {
                    const t = new Map();
                    for (let a = 0; a <= e.length; a++) {
                        const s = e[a];
                        t.set(s, { rowIndex: Math.min(a, 2), columnIndex: Math.max(a - $b, 0), size: Wb(a, e.length) });
                    }
                    return t;
                },
            },
        ],
        [
            Ob.missions,
            { position: 200, adaptive: { [Tb]: { gap: 7, maxRowsAmount: 3 }, [Lb]: { gap: 10, maxRowsAmount: 3 } } },
        ],
    ]),
    Ub = 5,
    Kb = 6,
    Qb = 7,
    Jb = 900,
    Xb = 1016;
const Yb = 100;
function ey(e, t, a, s = !0) {
    const n = a.getCardAnimationProps(e),
        i = a.getCardRow(e),
        r = a.getMaxCardRow(t),
        o = a.getVisibleRowsAmount(),
        l = s ? Gb.duration : 0,
        c = t.includes(e);
    return {
        from: c ? { ...n, opacity: 0 } : {},
        to: n,
        delay: c ? l + Math.max((o - r) * Yb, 0) : Math.max((o - r - i) * Yb, 0),
        config: Gb,
    };
}
function ty(e) {
    return { to: { x: fe(da(e) + 100), opacity: 0 }, config: { duration: 700, easing: Hb } };
}
function ay(e, t, a) {
    const s = e.dataset.id,
        n = t.getCard(s),
        i = t.getCardHeight(s);
    if (!n || !i) return '';
    const r = da(n.getPropValue('opacity')),
        o = da(n.getPropValue('height'));
    if (o < i || 0 === r) return '';
    const l = da(n.getPropValue('width')),
        c = da(n.getPropValue('y')),
        d = da(n.getPropValue('x')),
        u = t.getCardSize(s) !== Ab.full,
        m = Math.round(d),
        p = Math.round(d + l) - Rb,
        _ = Math.round(c),
        h = { top: `H${m}x${_}`, bottom: `H${m}x${Math.round(c + o) - Rb}`, left: `V${_}x${m}`, right: `V${_}x${p}` },
        g = {};
    return (
        Object.keys(h).forEach((e) => {
            const t = !a.has(h[e]) || (u && ('top' === e || 'bottom' === e));
            (t && a.add(h[e]), (g[e] = t));
        }),
        (function (e) {
            return [
                null == e ? void 0 : e.top,
                null == e ? void 0 : e.right,
                null == e ? void 0 : e.bottom,
                null == e ? void 0 : e.left,
            ]
                .map((e) => (void 0 === e || e ? '1rem' : '0'))
                .join(' ');
        })(g)
    );
}
const sy = { [Tb]: { gap: 0, cardHeight: 74, cardWidth: 241 }, [Lb]: { gap: 0, cardHeight: 74, cardWidth: 319 } },
    ny = { [Ab.full]: 1, [Ab.medium]: 0.5, [Ab.small]: 1 / 3 };
function iy(e, t) {
    return { ...sy[e], ...(null == t ? void 0 : t[e]) };
}
function ry(e) {
    return Array.from(e.entries()).sort((e, t) => e[1].position - t[1].position);
}
class oy {
    constructor(e) {
        (t(this, '_sortedGroups'),
            t(this, '_cards', new Map()),
            t(this, '_cachedLayout'),
            (this._widgetConfig = e),
            (this._sortedGroups = ry(this._widgetConfig.groups)));
    }
    get _layout() {
        return (void 0 === this._cachedLayout && (this._cachedLayout = this._buildLayout()), this._cachedLayout);
    }
    _buildLayout() {
        const e = {
            sortedCards: [],
            animationProps: new Map(),
            groupCardIds: new Map(),
            cardToRow: new Map(),
            cardSizes: new Map(),
            rowsAmountByGroup: new Map(),
            visibleRowsAmount: 0,
        };
        var t;
        ((e.sortedCards = ry(this._cards)),
            (t = e.groupCardIds),
            e.sortedCards.forEach(([e, { groupId: a }]) => {
                var s;
                (t.has(a) || t.set(a, []), null == (s = t.get(a)) || s.push(e));
            }));
        let a = 0,
            s = 0;
        return (
            this._sortedGroups.forEach(([t, n]) => {
                const i = e.groupCardIds.get(t);
                if (!i) return;
                const {
                    gap: r,
                    cardHeight: o,
                    cardWidth: l,
                    maxRowsAmount: c,
                } = iy(this._widgetConfig.size, n.adaptive);
                a > 0 && r && (a += fe(r));
                const d = fe(o),
                    u = i.filter((e) => {
                        var t;
                        return null == (t = this._cards.get(e)) ? void 0 : t.visible;
                    }),
                    m = (n.layoutCreator || Fb)(u);
                let p = 0;
                for (const _ of i) {
                    const t = m.get(_);
                    if (!t) {
                        e.animationProps.set(_, zb);
                        continue;
                    }
                    const { rowIndex: n, columnIndex: i, size: r } = t,
                        o = Math.ceil(l * ny[r]),
                        u = n + 1,
                        h = s + u,
                        g = void 0 === c || u <= c;
                    (e.cardToRow.set(_, h),
                        e.cardSizes.set(_, r),
                        e.animationProps.set(_, {
                            height: d,
                            width: fe(o),
                            opacity: g && this._widgetConfig.visibleRowsAmount >= h ? 1 : 0,
                            x: fe(i * (o - Rb)),
                            y: a + n * (d - Rb),
                        }),
                        g && (p = Math.max(u, p)));
                }
                ((a += (d - Rb) * p), (s += p), e.rowsAmountByGroup.set(t, p));
            }),
            (e.visibleRowsAmount = s),
            e
        );
    }
    clearCachedLayout() {
        this._cachedLayout = void 0;
    }
    register(e, t) {
        (this._cards.set(e, t), this.clearCachedLayout());
    }
    updateCard(e, t) {
        const a = this._cards.get(e);
        a && (Object.assign(a, t), this.clearCachedLayout());
    }
    unregister(e) {
        (this._cards.delete(e), this.clearCachedLayout());
    }
    updateWidgetConfig(e) {
        (Object.assign(this._widgetConfig, e),
            void 0 !== e.groups && (this._sortedGroups = ry(this._widgetConfig.groups)),
            this.clearCachedLayout());
    }
    getCard(e) {
        return this._cards.get(e);
    }
    getCardAnimationProps(e) {
        return this._layout.animationProps.get(e) || zb;
    }
    getCardRow(e) {
        return this._layout.cardToRow.get(e) || 0;
    }
    getCardSize(e) {
        return this._layout.cardSizes.get(e) || Ab.full;
    }
    getCardHeight(e) {
        var t;
        const a = null == (t = this.getCard(e)) ? void 0 : t.groupId;
        if (!a) return;
        const s = this._widgetConfig.groups.get(a);
        return iy(this._widgetConfig.size, null == s ? void 0 : s.adaptive).cardHeight;
    }
    getMaxCardRow(e) {
        return Math.max(...e.map((e) => this.getCardRow(e)));
    }
    getVisibleRowsAmount() {
        return this._layout.visibleRowsAmount;
    }
    getGroupCardIds(e) {
        return this._layout.groupCardIds.get(e) || [];
    }
    findMaxVisibleRowsInGroup(e) {
        const t = this._widgetConfig.groups.get(e);
        if (!t) return 0;
        let a = 0;
        for (let s = 0; s < this._sortedGroups.length; s++) {
            const [n] = this._sortedGroups[s];
            if (n === e) {
                const { maxRowsAmount: e } = iy(this._widgetConfig.size, t.adaptive),
                    s = this._widgetConfig.visibleRowsAmount - a;
                return e ? Math.min(s, e) : s;
            }
            const i = this._layout.rowsAmountByGroup.get(n);
            i && (a += i);
        }
        return 0;
    }
    isCardDisplaying(e) {
        return void 0 !== this._layout.cardToRow.get(e);
    }
    async runCardAnimations(e) {
        await Promise.all(
            this._layout.sortedCards.map(async ([t, a]) => {
                const s = e(t, a);
                s && (await a.startLayoutAnimation(s));
            }),
        );
    }
}
const ly = 'Card_82475c',
    cy = 'Card_borderHelper_cfd6db89',
    dy = 'Card_card__enabled_4c476d8b',
    uy = {
        [Bb.appear]: function (e, t, a) {
            const s = ey(e, t, a, !1);
            return { ...s, from: t.includes(e) ? { ...s.from, height: 0 } : s.from };
        },
        [Bb.fadeIn]: ey,
        [Bb.slideUpIn]: function (e, t, a) {
            const s = ey(e, t, a, !1);
            if (t.includes(e)) {
                const t = a.getCardAnimationProps(e).y + fe(a.getCardHeight(e));
                return { ...s, from: { ...s.from, y: t } };
            }
            return s;
        },
    };
function my({ children: e, groups: t, maxVisibleRowsAmount: a }) {
    const s = Eb() ? Tb : Lb,
        { screenHeightRem: n } = Pt(),
        i =
            a ??
            (function (e) {
                return e > Jb ? (e > Xb ? Qb : Kb) : Ub;
            })(n),
        { enqueue: o, runDequeue: c } = (function () {
            const e = r.useRef([]),
                t = r.useRef(!1),
                a = r.useRef(!1),
                s = Dt(() => {
                    if (t.current || !a.current) return;
                    const n = e.current.shift();
                    n &&
                        ((t.current = !0),
                        n
                            .promise()
                            .then(() => {
                                ((t.current = !1), n.resolve(), s());
                            })
                            .catch(() => {
                                ((t.current = !1), n.reject(), s());
                            }));
                });
            return {
                enqueue: Dt(
                    (t) =>
                        new Promise((a, n) => {
                            (e.current.push({ promise: t, resolve: a, reject: n }), s());
                        }),
                ),
                runDequeue: Dt(() => {
                    ((a.current = !0), s());
                }),
            };
        })(),
        d = r.useRef(null),
        u = r.useRef(!1),
        m = r.useRef(new oy({ size: s, visibleRowsAmount: i, groups: t })),
        p = Dt((e) => {
            var t;
            const a = null == (t = d.current) ? void 0 : t.querySelectorAll(`.${cy}`);
            a &&
                (function (e, t, a) {
                    const s = new Set();
                    a && (a.style.borderImageWidth = ay(a, t, s));
                    for (let n = e.length - 1; n >= 0; n--) {
                        const i = e[n];
                        i !== a && (i.style.borderImageWidth = ay(i, t, s));
                    }
                })(a, m.current, e);
        }),
        _ = Dt(async (e) => {
            (p(),
                await m.current.runCardAnimations((t, a) => {
                    const s = e({ id: t, settings: a });
                    if (void 0 !== s) return { ...s, onChange: () => p() };
                }),
                p());
        }),
        h = Dt(async (e = !0) => {
            let t = 0,
                a = 0;
            await _(({ id: s, settings: n }) => {
                const i = m.current.getCardAnimationProps(s),
                    r = i.y,
                    o = n.getPropGoalValue('y');
                let l = 0;
                return (
                    o !== r && (0 === n.getPropGoalValue('x') && (o > r ? t++ : a++), (l = o > r ? t : a)),
                    { delay: e ? 0 : l * Yb, to: i, immediate: e, config: Gb }
                );
            });
        }),
        g = Dt(async (e, t = Bb.appear) => {
            const a = e.filter((e) => {
                const t = m.current.getCard(e);
                return void 0 !== t && !t.visible;
            });
            if (!a.length) return;
            a.forEach((e) => {
                m.current.updateCard(e, { visible: !0 });
            });
            const s = uy[t];
            await _((e) => s(e.id, a, m.current));
        }),
        v = Dt((e, t = !0) => {
            var a;
            return !(t && !(null == (a = m.current.getCard(e)) ? void 0 : a.visible)) && m.current.isCardDisplaying(e);
        }),
        f = r.useMemo(
            () => ({
                registerCard: (e, t) => {
                    m.current.register(e, t);
                },
                unregisterCard: (e) => {
                    m.current.unregister(e);
                },
                updateCard: (e, t) => {
                    m.current.updateCard(e, t);
                },
                isVisible: (e) => {
                    var t;
                    return Boolean(null == (t = m.current.getCard(e)) ? void 0 : t.visible);
                },
                isUnmounting: (e) => {
                    var t;
                    return Boolean(null == (t = m.current.getCard(e)) ? void 0 : t.unmounting);
                },
                isDisplaying: v,
                findMaxVisibleRowsInGroup: (e) => m.current.findMaxVisibleRowsInGroup(e),
                applyLayout: h,
                appear: g,
                disappear: async (e) => {
                    (m.current.updateCard(e, { visible: !1 }),
                        await _((t) => {
                            if (e === t.id) return ty(t.settings.getPropGoalValue('x'));
                        }));
                },
                disappearGroups: async (e) => {
                    const t = [];
                    (e.forEach((e) => {
                        for (const a of m.current.getGroupCardIds(e)) t.push(a);
                    }),
                        t.forEach((e) => m.current.updateCard(e, { visible: !1, unmounting: !0 })),
                        await _((e) => {
                            const a = t.indexOf(e.id);
                            if (-1 !== a)
                                return { ...ty(e.settings.getPropGoalValue('x')), delay: Yb * (t.length - a) };
                        }));
                },
                updateBorders: p,
                readyForAnimations: u,
                enqueue: o,
            }),
            [v, h, g, p, o, _],
        );
    return (
        r.useEffect(() => {
            (m.current.updateWidgetConfig({ size: s, visibleRowsAmount: i }), h());
        }, [h, s, i]),
        r.useEffect(() => {
            u.current || ((u.current = !0), c());
        }),
        r.useEffect(
            () =>
                ua(() => {
                    (m.current.clearCachedLayout(), h());
                }),
            [h],
        ),
        l.jsx(Mb.Provider, { value: f, children: l.jsx('div', { ref: d, children: e }) })
    );
}
var py = ((e) => ((e.Intro = 'intro'), (e.Progression = 'progression'), (e.Completed = 'completed'), e))(py || {}),
    _y = ((e) => ((e.Waiting = 'waiting'), (e.Ready = 'ready'), (e.Played = 'played'), e))(_y || {});
const hy = r.forwardRef(function (
        {
            children: e,
            id: t,
            groupId: a,
            position: s,
            isDisabled: n = !1,
            visible: i = !1,
            className: o,
            onMouseEnter: d,
            onMouseLeave: u,
            ...m
        },
        p,
    ) {
        const h = Db(),
            [g, v] = _(() => zb),
            f = r.useRef(null),
            b = r.useRef(),
            y = r.useRef(null),
            x = Dt((e) => {
                y.current && f.current && !n && h.updateBorders(e ? y.current : void 0);
            }),
            C = Dt((e) => g[e].get()),
            j = Dt((e) => g[e].goal),
            N = Dt(async (e) => {
                await new Promise((t) => {
                    ((b.current = t),
                        Promise.all(v.start(e)).then(() => {
                            (t(), (b.current = void 0));
                        }));
                });
            });
        return (
            Ut(() => {
                h.registerCard(t, {
                    position: s,
                    groupId: a,
                    getPropValue: C,
                    getPropGoalValue: j,
                    startLayoutAnimation: N,
                    visible: i,
                });
            }),
            ta(() => {
                var e;
                (null == (e = b.current) || e.call(b), h.unregisterCard(t));
            }),
            l.jsxs(w.div, {
                ...m,
                style: { ...g, pointerEvents: g.opacity.to((e) => (1 === e ? 'auto' : 'none')) },
                className: c(ly, !n && dy, o),
                ref: aa([p, f]),
                onMouseEnter: (e) => {
                    (x(!0), null == d || d(e));
                },
                onMouseLeave: (e) => {
                    (x(!1), null == u || u(e));
                },
                children: [e, l.jsx('div', { className: cy, 'data-id': t, ref: y })],
            })
        );
    }),
    gy = {
        umg_widget_quest_progress: 'umg_widget_quest_progress',
        umg_widget_quest_complete: 'umg_widget_quest_complete',
        umg_widget_quest_reward: 'umg_widget_quest_reward',
        umg_widget_quest_disappear: 'umg_widget_quest_disappear',
        umg_widget_block_move: 'umg_widget_block_move',
        umg_widget_block_stop: 'umg_widget_block_stop',
        umg_widget_quest_complete_secondary: 'umg_widget_quest_complete_secondary',
        umg_widget_quest_reward_secondary: 'umg_widget_quest_reward_secondary',
        umg_widget_quest_disappear_secondary: 'umg_widget_quest_disappear_secondary',
        umg_widget_quest_complete_all: 'umg_widget_quest_complete_all',
        umg_widget_quest_progress_secondary: 'umg_widget_quest_progress_secondary',
        umg_widget_quest_backlog: 'umg_widget_quest_backlog',
        umg_widget_event_appear: 'umg_widget_event_appear',
        umg_widget_event_hover_loop: 'umg_widget_event_hover_loop',
        umg_widget_event_hover_loop_stop: 'umg_widget_event_hover_loop_stop',
        umg_widget_event_timer: 'umg_widget_event_timer',
        umg_widget_event_inactive: 'umg_widget_event_inactive',
        umg_widget_event_reward: 'umg_widget_event_reward',
        umg_widget_event_timer_simple: 'umg_widget_event_timer_simple',
    },
    vy = Object.values(gy).reduce((e, t) => ({ ...e, [t]: Wt(t) }), {});
function fy(e, t) {
    r.useEffect(() => {
        e && t();
    });
}
function by({ registerAnimation: e, id: t, animName: a, elementId: s = t, config: n }) {
    r.useLayoutEffect(() => (null == e ? void 0 : e({ id: t, animName: a, elementId: s, config: n })), [t, a, n, s, e]);
}
const yy = { to: { opacity: 0 }, config: { duration: 400, easing: Hb } },
    xy = { from: { opacity: 0 }, to: { opacity: 1 } };
const Cy = {
        helperContainer: 'BorderAnimation_helperContainer_fe323668',
        base: 'BorderAnimation_2d8409c9',
        base__medium: 'BorderAnimation_base__medium_47492bdb',
        base__small: 'BorderAnimation_base__small_67aa3793',
        border_animation: 'BorderAnimation_389afe4',
        helper: 'BorderAnimation_helper_fcc3c5b0',
        helper__one: 'BorderAnimation_helper__one_df08a331',
        helper__two: 'BorderAnimation_helper__two_9bfa23dc',
        helper__three: 'BorderAnimation_helper__three_e87e7b8e',
    },
    wy = 'widgetCardBorderFadeIn',
    jy = r.memo(function ({ id: e, elementId: t, size: a = Ab.full, className: s }) {
        const { registerAnimation: n, emitter: i } = fb(),
            o = Dt(() => i.trigger(bb(e, wy, t), e, t)),
            { baseSpring: d, config: u } = (function (e) {
                const [t, a] = _(() => yy),
                    s = Dt(({ immediate: t }) => {
                        a.start({ ...xy, immediate: t, onRest: e });
                    });
                return { baseSpring: t, config: r.useMemo(() => ({ start: s, skip: S }), [s]) };
            })(o);
        return (
            by({ id: e, elementId: t, registerAnimation: n, animName: wy, config: u }),
            l.jsx(w.div, {
                style: d,
                className: c(Cy.base, Cy[`base__${a}`], s),
                children: l.jsxs('div', {
                    className: Cy.helperContainer,
                    children: [
                        l.jsx('div', { className: c(Cy.helper, Cy.helper__one) }),
                        l.jsx('div', { className: c(Cy.helper, Cy.helper__two) }),
                        l.jsx('div', { className: c(Cy.helper, Cy.helper__three) }),
                    ],
                }),
            })
        );
    }),
    Ny = { to: { val: 100 }, config: { duration: 1e3, easing: Hb } },
    Iy = { from: { val: 100 }, to: { val: 0 } };
function Sy(e) {
    return `brightness(${1 + e / 100}) contrast(${1 + (e / 100) * 0.5})`;
}
const ky = 'bgContrastAnimation';
const Py = { to: { val: 0 }, config: { duration: 600, easing: Hb } },
    Ey = { from: { val: 0 }, to: { val: 50 } },
    My = 50;
function Dy(e) {
    return `${My + e}% ${My + e}%`;
}
const Ty = 'maskAnimation';
const Ly = 'maskAppearAnimationHook',
    Ay = { [ky]: {}, [Ty]: {}, [wy]: {} };
function By({ id: e, elementId: t, onComplete: a }) {
    const { startGroupAnimation: s, registerAnimation: n, emitter: i } = fb(),
        o = r.useCallback(() => i.trigger(bb(e, ky, t), e, t), [t, i, e]),
        l = r.useCallback(() => i.trigger(bb(e, Ty, t), e, t), [t, i, e]),
        c = r.useCallback(
            async ({ immediate: s }) => {
                (await (null == a ? void 0 : a(s)), i.trigger(bb(e, Ly, t), e, t));
            },
            [t, i, e, a],
        ),
        { backgroundContrast: d, config: u } = (function (e) {
            const t = r.useCallback(() => (null == e ? void 0 : e()), [e]),
                [a, s] = _(() => ({ ...Ny, onRest: t })),
                n = r.useCallback((e) => s.start({ ...Iy, immediate: e }), [s]),
                i = Dt(({ immediate: e }) => n(e));
            return { backgroundContrast: a, config: r.useMemo(() => ({ start: i, skip: S }), [i]) };
        })(o),
        { maskPosition: m, config: p } = (function (e) {
            const t = r.useCallback(() => (null == e ? void 0 : e()), [e]),
                [a, s] = _(() => ({ ...Py, onRest: t })),
                n = r.useCallback((e) => s.start({ ...Ey, immediate: e }), [s]),
                i = Dt(({ immediate: e }) => n(e));
            return { maskPosition: a, config: r.useMemo(() => ({ start: i, skip: S }), [i]) };
        })(l),
        h = Dt(async (t) => {
            s({ groupId: e, groupCfg: Ay, providerCfg: { triggerParams: t, animCallParams: t, triggerCallback: c } });
        }),
        g = r.useMemo(() => ({ start: h, skip: S }), [h]);
    return (
        by({ id: e, elementId: t, registerAnimation: n, animName: Ly, config: g }),
        by({ id: e, elementId: t, registerAnimation: n, animName: ky, config: u }),
        by({ id: e, elementId: t, registerAnimation: n, animName: Ty, config: p }),
        r.useMemo(() => ({ maskPosition: m, backgroundContrast: d }), [d, m])
    );
}
const Oy = 'battlePassCardId',
    zy = 0,
    Ry = -1;
function $y(e, t) {
    const [a, s] = _(() => ({ to: { opacity: 0 }, config: { duration: 400, easing: Hb }, onRest: t })),
        n = Dt(({ immediate: t }) => {
            s.start({ from: { opacity: 0 }, to: { opacity: 1 }, delay: t ? 0 : e, immediate: t });
        });
    return { spring: a, config: r.useMemo(() => ({ start: n, skip: S }), [n]) };
}
const [Vy, qy] = I()(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives([
                        'widgetState',
                        'level',
                        'tooltipID',
                        'chapterID',
                        'season',
                        'isBought',
                        'isExtraChapter',
                        'isPaused',
                        'hasExtraChapter',
                        'isExtraChapterHighlighted',
                        'appearAnimationState',
                        'timeLeft',
                        'pointsEarned',
                        'levelPoints',
                        'rewardsHash',
                    ]),
                    lastSeenState: e.object('lastSeenState'),
                },
                a = V.primitive(() => t.widgetState.get() === py.Completed);
            return { ...t, computes: { isCompleted: a } };
        },
        ({ externalModel: e }) => ({
            openBattlePass: e.createCallbackNoArgs('onOpenBattlePass'),
            notifyIntroAnimationPlayed: e.createCallbackNoArgs('onIntroAnimationPlayed'),
        }),
    ),
    Wy = te.resolve('images'),
    Fy = te.resolve('views'),
    Hy = te.resolve('strings'),
    Gy = te.resolve('aliases'),
    Zy = te.resolve('videos'),
    Uy = r.createContext(!1);
function Ky(e, t, a) {
    const s = 'battlePass.logo.emblem',
        n = `emblem_closed_${t ? 'gold' : a ? 'completed' : 'initial'}_micro`,
        i = `${s}.chapter_${e}.${n}`;
    return Wy.has(i) ? i : `${s}.default.${n}`;
}
function Qy(e, t, a) {
    const s = t ? 'BP' : '';
    if (a) return `battlePass.logo.icon.default.icon_xl${s}`;
    {
        const t = 'battlePass.logo.chapterIcons',
            a = e % 10,
            n = `${t}.c_${e}_xl${s}`;
        return Wy.has(n) ? n : `${t}.default_${a}_xl${s}`;
    }
}
function Jy(e, t, a, s, n) {
    const i = `${t}${a ? '_extra' : ''}${n ? '_small' : ''}`;
    return { seasonPath: `${e}.season_${s}.${i}`, defaultPath: `${e}.default.${i}` };
}
function Xy(e, t, a, s) {
    const { seasonPath: n, defaultPath: i } = Jy('battlePass.widget.background', e, t, a, s);
    return Wy.has(n) ? n : i;
}
function Yy() {
    return r.useContext(Uy);
}
function ex(e, t) {
    return e && (t === py.Intro || t === py.Progression);
}
const tx = 'Emblem_6b62c957',
    ax = 'Emblem_base__paused_e22ad928',
    sx = 'Emblem_3bc5d739',
    nx = 'Emblem_icon_fdb9fa22',
    ix = 'emblemFadeInAnimation',
    rx = d(function ({ id: e, elementId: t, className: a }) {
        const { model: s } = qy(),
            n = s.chapterID.get(),
            i = s.isBought.get(),
            r = s.computes.isCompleted(),
            { registerAnimation: o, emitter: d } = fb(),
            u = Dt(() => d.trigger(bb(e, ix, t), e, t)),
            { spring: m, config: p } = $y(0, u);
        return (
            by({ id: e, elementId: t, registerAnimation: o, animName: ix, config: p }),
            l.jsx('div', {
                className: c(tx, s.isPaused.get() && ax, a),
                children: l.jsxs(w.div, {
                    style: m,
                    className: sx,
                    children: [
                        l.jsx(ie, { path: Ky(n, i, r), width: 60, height: 60 }),
                        l.jsx(ie, { path: Qy(n, i, r), className: nx, width: 30, height: 30 }),
                    ],
                }),
            })
        );
    });
function ox(e, t) {
    const { readyForAnimations: a } = Db();
    r.useEffect(() => {
        if (a.current) return e();
    }, t);
}
const lx = d(function ({ useAdaptiveFormat: e = !0 }) {
        const { model: t } = qy(),
            a = Eb(),
            s = a ? ma.format.compact : ma.format.default,
            n = t.timeLeft.get();
        return l.jsx(ma, { start: n, size: a ? ma.size.x16x16 : ma.size.x24x24, format: e ? s : ma.format.default }, n);
    }),
    cx = 'Labels_e5066e86',
    dx = 'Labels_title_d94e713e',
    ux = 'Labels_subTitleWrapper_79f4007c',
    mx = 'Labels_subTitleItem_b9fe06e5',
    px = 'Labels_subTitle_c850cc3d',
    _x = 'Labels_lockIcon_c336fd47',
    hx = 'Labels_descriptionText_1d25fcad',
    gx = te.resolve('strings'),
    vx = 'labelsFadeInAnimation',
    fx = d(function ({ id: e, elementId: t, className: a }) {
        const { model: s } = qy(),
            n =
                ((i = s.hasExtraChapter.get()),
                s.computes.isCompleted() ? 'completed' : i ? 'activate_extra_chapter' : 'select_chapter');
        var i;
        const { registerAnimation: o, emitter: d } = fb(),
            u = Dt(() => d.trigger(bb(e, vx, t), e, t)),
            { spring: m, config: p } = $y(1e3, u);
        by({ id: e, elementId: t, registerAnimation: o, animName: vx, config: p });
        const {
            labelStyle: h,
            countdownStyle: g,
            lockStyle: v,
        } = (function () {
            const e = Yy(),
                { model: t } = qy(),
                a = t.widgetState.get(),
                s = t.isPaused.get(),
                n = ex(e, a),
                i = r.useRef(n),
                o = r.useRef(s),
                l = { duration: 400, easing: Hb },
                [c, d] = _(() => ({ opacity: s ? 1 : 0, x: 0, config: l })),
                [u, m] = _(() => ({ opacity: n && !s ? 1 : 0, x: 0, config: l })),
                [p, h] = _(() => ({ opacity: n || s ? 0 : 1, x: 0, config: l }));
            return (
                ox(() => {
                    if (o.current === s && i.current === n) return;
                    const e = (e, t) => (e ? d : t ? m : h),
                        t = e(o.current, i.current),
                        a = e(s, n),
                        r = [m, d, h];
                    (Promise.all(t.start({ from: { opacity: 1, x: 0 }, to: { opacity: 0, x: fe(40) } })).then(() => {
                        (r.forEach((e) => {
                            e.start({ from: { opacity: 0 }, immediate: !0 });
                        }),
                            a.start({ from: { opacity: 0, x: fe(-20) }, to: { opacity: 1, x: 0 } }));
                    }),
                        (i.current = n),
                        (o.current = s));
                }, [m, d, h, s, n, a]),
                { countdownStyle: u, lockStyle: c, labelStyle: p }
            );
        })();
        return s.widgetState.get() !== py.Progression || s.isPaused.get()
            ? l.jsxs(w.div, {
                  style: m,
                  className: c(cx, a),
                  children: [
                      l.jsx('div', { className: dx, children: gx.read('user_missions.battle_pass_widget.title') }),
                      l.jsxs('div', {
                          className: ux,
                          children: [
                              l.jsxs(w.div, {
                                  style: v,
                                  className: c(mx, px),
                                  children: [
                                      l.jsx('div', { className: _x }),
                                      gx.read('user_missions.battle_pass_widget.sub_title.unavailable'),
                                  ],
                              }),
                              l.jsx(w.div, { style: g, className: mx, children: l.jsx(lx, { useAdaptiveFormat: !1 }) }),
                              l.jsx(w.div, {
                                  style: h,
                                  className: c(mx, px),
                                  children: l.jsx(pa, {
                                      text: gx.read(`user_missions.battle_pass_widget.sub_title.${n}`),
                                      classMix: c(hx),
                                      isTruncationAvailable: !0,
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    }),
    bx = { [wy]: {}, [vx]: {}, [ix]: {}, [Ly]: {} };
async function yx(e, t = !1) {
    await new Promise((a) => {
        e({ groupId: Oy, providerCfg: { triggerCallback: a, animCallParams: { immediate: t } }, groupCfg: bx });
    });
}
function xx(e, t, a, s, n) {
    e.isUnmounting(Oy) ||
        (t === _y.Ready
            ? e
                  .enqueue(async () => {
                      (a(gy.umg_widget_event_appear), await e.appear([Oy]), await yx(n));
                  })
                  .then(() => {
                      s();
                  })
            : t === _y.Played &&
              (e.updateCard(Oy, { visible: !0 }), yx(n, !0), e.enqueue(async () => e.applyLayout())));
}
const Cx = { duration: 700, easing: Hb },
    wx = { translateX: '-160%', config: Cx },
    jx = { opacity: 0, config: Cx },
    Nx = { from: { translateX: '-160%' }, to: { translateX: '160%' } },
    Ix = { from: { opacity: 0 }, to: [{ opacity: 1 }, { opacity: 0, config: { duration: 1e3 } }] };
const Sx = 'HighlightAnimation_splashContainer_6f7161d2',
    kx = 'HighlightAnimation_helperContainer_67199b30',
    Px = 'HighlightAnimation_a926f19b',
    Ex = 'HighlightAnimation_helper_ab64de86',
    Mx = 'HighlightAnimation_helper__one_bf874504',
    Dx = 'HighlightAnimation_helper__two_5ddebb7f',
    Tx = 'HighlightAnimation_helper__three_e838fe5d',
    Lx = 'widgetCardHighlight',
    Ax = r.memo(function ({ id: e, elementId: t, withOverlaySplash: a = !1, children: s, className: n }) {
        const { registerAnimation: i, emitter: o } = fb(),
            d = Dt(() => o.trigger(bb(e, Lx, t), e, t)),
            {
                highlightStyles: u,
                splashStyles: m,
                config: p,
            } = (function (e) {
                const [t, a] = _(() => wx),
                    [s, n] = _(() => jx),
                    i = Dt(() => {
                        (a.start({ ...Nx, reset: !0 }), n.start({ ...Ix, reset: !0, onRest: e }));
                    });
                return r.useMemo(
                    () => ({ highlightStyles: t, splashStyles: s, config: { start: i, skip: S } }),
                    [t, s, i],
                );
            })(d);
        return (
            by({ id: e, elementId: t, registerAnimation: i, animName: Lx, config: p }),
            l.jsxs(l.Fragment, {
                children: [
                    a && l.jsx(w.div, { style: m, className: Sx, children: s }),
                    l.jsx('div', {
                        className: c(Px, n),
                        children: l.jsxs(w.div, {
                            style: u,
                            className: kx,
                            children: [
                                l.jsx('div', { className: c(Ex, Mx) }),
                                l.jsx('div', { className: c(Ex, Dx) }),
                                l.jsx('div', { className: c(Ex, Tx) }),
                            ],
                        }),
                    }),
                ],
            })
        );
    });
const Bx = te.resolve('strings'),
    Ox = 'progressionLabelsAnimation',
    zx = d(function ({ className: e, id: t, elementId: a }) {
        const { spring: s, config: n } = (function () {
                const [e, t] = _(() => ({ to: { x: 0, opacity: 0 }, config: { duration: 400, easing: Hb } })),
                    a = r.useCallback(
                        (e, a) => {
                            e
                                ? t.start({
                                      from: { opacity: 0, x: fe(-20) },
                                      to: { opacity: 1, x: 0 },
                                      delay: 400,
                                      immediate: a,
                                  })
                                : t.start({ from: { opacity: 1, x: 0 }, to: { opacity: 0, x: fe(40) }, immediate: a });
                        },
                        [t],
                    ),
                    s = Dt(({ isPaused: e }) => {
                        a(e);
                    }),
                    n = Dt(({ isPaused: e }) => {
                        a(e, !0);
                    });
                return r.useMemo(() => ({ spring: e, config: { start: s, skip: n } }), [n, e, s]);
            })(),
            { registerAnimation: i } = fb();
        return (
            by({ id: t, elementId: a, registerAnimation: i, animName: Ox, config: n }),
            l.jsxs(w.div, {
                style: s,
                className: c(cx, e),
                children: [
                    l.jsx('div', { className: dx, children: Bx.read('user_missions.battle_pass_widget.title') }),
                    l.jsx('div', {
                        className: ux,
                        children: l.jsxs('div', {
                            className: c(mx, px),
                            children: [
                                l.jsx('div', { className: _x }),
                                Bx.read('user_missions.battle_pass_widget.sub_title.unavailable'),
                            ],
                        }),
                    }),
                ],
            })
        );
    }),
    Rx = { pointsEarned: 0, deltaLeft: 0, deltaWidth: 0, level: 0, immediate: !0 },
    $x = { to: { opacity: 1, x: 0 }, config: { duration: 400, easing: Hb } },
    Vx = { to: { opacity: 0 }, config: { duration: 200, easing: Hb } },
    qx = {
        init: { to: { opacity: 1, x: 0 }, config: { duration: 400, easing: Hb } },
        paused: { from: { opacity: 1, x: 0 }, to: { opacity: 0, x: fe(40) } },
        unPaused: { from: { opacity: 0, x: fe(-20) }, to: { opacity: 1, x: 0 }, delay: 400 },
    },
    Wx = 'progressOpacity';
const Fx = 'progressAnimation';
const Hx = 'SelectRewardIcon_79dc47ef',
    Gx = 'SelectRewardIcon_animatedIcon_7df05741',
    Zx = 'rewardIconAnimation',
    Ux = { to: 1, config: { duration: 750 } },
    Kx = { to: 0, config: { duration: 500 } },
    Qx = {
        from: { opacity: 0 },
        to: [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }, { opacity: 0 }],
        config: { duration: 1e3 },
        pause: !0,
    },
    Jx = r.memo(function ({ id: e, className: t }) {
        const { registerAnimation: a } = fb(),
            { play: s } = ee(),
            { opacity: n, config: i } = (function (e, t) {
                const a = Dt(() => (null == t ? void 0 : t())),
                    s = j(e, { onRest: a }),
                    n = Dt((e) => {
                        (null == e ? void 0 : e.to) != s.get() && s.start({ ...e });
                    }),
                    i = Dt((e) => {
                        s.start({ ...e, delay: 0, immediate: !0, config: { duration: 0 } });
                    });
                return r.useMemo(() => ({ opacity: s, config: { start: n, skip: i } }), [s, i, n]);
            })(0),
            [o, d] = _(() => Qx),
            u = Dt(({ isPaused: e }) => {
                e
                    ? i.start(Kx)
                    : (s(gy.umg_widget_event_reward), i.start(Ux), d.start({ ...Qx, pause: !1, reset: !0 }));
            }),
            m = Dt(({ isPaused: e }) => {
                e ? i.skip(Kx) : i.skip(Ux);
            }),
            p = r.useMemo(() => ({ start: u, skip: m }), [m, u]);
        return (
            by({ registerAnimation: a, id: e, animName: Zx, config: p }),
            l.jsx(w.div, {
                style: { opacity: n },
                className: c(Hx, t),
                children: l.jsx(w.div, { style: o, className: Gx }),
            })
        );
    }),
    Xx = 50;
function Yx({ current: e, earned: t, max: a, level: s }) {
    return { pointsEarned: e + t, level: s, deltaLeft: _a(e, a), deltaWidth: _a(t, a), config: { duration: Xx * t } };
}
function eC(e, t, a, s) {
    const n = t != e.level,
        i = s - e.pointsEarned,
        r = a - e.pointsEarned,
        o = { phase_1: Yx({ current: e.pointsEarned, earned: n ? i : r, max: s, level: e.level }) };
    return (n && (o.phase_2 = Yx({ current: 0, earned: a, max: s, level: t })), o);
}
const tC = { highlight: { id: Oy, animName: Lx }, rewardIcon: { id: Oy, animName: Zx } };
function aC() {
    const e = ga(),
        t = Db(),
        { model: a, controls: s } = qy(),
        { play: n } = ee(),
        i = a.isPaused.get(),
        r = a.level.get(),
        o = a.pointsEarned.get(),
        l = a.levelPoints.get(),
        c = a.rewardsHash.get(),
        d = a.isExtraChapterHighlighted.get(),
        u = a.appearAnimationState.get(),
        m = a.lastSeenState.get(),
        p = a.widgetState.get(),
        _ = a.chapterID.get();
    (!(function ({
        lastSeenState: e,
        level: t,
        pointsEarned: a,
        levelPoints: s,
        rewardsHash: n,
        isPaused: i,
        api: r,
        appearAnimationState: o,
        notifyIntroAnimationPlayed: l,
        play: c,
    }) {
        const { startAnimation: d, startGroupAnimation: u } = fb();
        Ut(() => {
            const m = n > 0,
                p = m && n != e.rewardsHash;
            if (t != e.level || a != e.pointsEarned) {
                const n = eC(e, t, a, s);
                d({ id: Oy, animName: Fx, animCallParams: n });
            } else p && !i && d({ id: Oy, animName: Lx });
            (m && d({ ...tC.rewardIcon, providerCfg: { skip: !p }, animCallParams: { isPaused: i } }),
                d({ id: Oy, animName: Wx, animCallParams: { isPaused: i }, providerCfg: { skip: !0 } }),
                d({ id: Oy, animName: Ox, animCallParams: { isPaused: i }, providerCfg: { skip: !0 } }),
                xx(r, o, c, l, u));
        });
    })({
        level: r,
        pointsEarned: o,
        levelPoints: l,
        rewardsHash: c,
        lastSeenState: m,
        isPaused: i,
        play: n,
        api: t,
        notifyIntroAnimationPlayed: s.notifyIntroAnimationPlayed,
        appearAnimationState: u,
    }),
        (function ({
            isFirstRender: e,
            appearAnimationState: t,
            isExtraChapterHighlighted: a,
            widgetState: s,
            api: n,
            notifyIntroAnimationPlayed: i,
            play: r,
        }) {
            const { startGroupAnimation: o } = fb(),
                l = lt(t),
                c = lt(a),
                d = lt(s);
            (fy(!e, () => {
                (a === c && d === s) ||
                    n.enqueue(async () => {
                        (r(gy.umg_widget_event_appear), await yx(o));
                    });
            }),
                fy(!e, () => {
                    t !== l && xx(n, t, r, i, o);
                }));
        })({
            api: t,
            appearAnimationState: u,
            isExtraChapterHighlighted: d,
            widgetState: p,
            isFirstRender: e,
            notifyIntroAnimationPlayed: s.notifyIntroAnimationPlayed,
            play: n,
        }),
        (function ({ isFirstRender: e, level: t, pointsEarned: a, levelPoints: s, chapterID: n }) {
            const { startAnimation: i } = fb(),
                r = lt(t),
                o = lt(a),
                l = lt(n);
            fy(!e && n > zy && l != Ry, () => {
                const e = n !== l;
                if ((a == o && t == r) || e) e && i(tC.highlight);
                else {
                    const e = eC({ level: r, pointsEarned: o }, t, a, s);
                    i({ id: Oy, animName: Fx, animCallParams: e });
                }
            });
        })({ isFirstRender: e, level: r, pointsEarned: o, levelPoints: l, chapterID: _ }),
        (function ({ isFirstRender: e, rewardsHash: t, isPaused: a }) {
            const { startAnimation: s } = fb(),
                n = lt(t),
                i = lt(a);
            fy(!e, () => {
                const e = a != i,
                    r = t > 0 && t != n;
                (e &&
                    (s({ id: Oy, animName: Wx, animCallParams: { isPaused: a } }),
                    s({ id: Oy, animName: Ox, animCallParams: { isPaused: a } })),
                    (r || e) && s({ ...tC.rewardIcon, animCallParams: { isPaused: a } }),
                    r && !a && s(tC.highlight),
                    e && !a && s({ id: Oy, animName: wy }));
            });
        })({ isFirstRender: e, rewardsHash: c, isPaused: i }));
}
const sC = d(function ({ className: e }) {
        const { model: t } = qy();
        return t.isPaused.get() ? null : l.jsx(jy, { id: Oy, className: e });
    }),
    nC = 'IntroOverlay_glow_3eacce8',
    iC = 'IntroOverlay_hoverHelper_9cec2539',
    rC = 'IntroOverlay_883f7c49',
    oC = 'IntroOverlay_base__extraChapter_d35cc3d4',
    lC = 'IntroOverlay_hoverHelper__withOverlay_ce4fe777',
    cC = 'IntroOverlay_borderNoise_83c3f9b8',
    dC = d(function ({ className: e, withOverlay: t = !0 }) {
        const { model: a } = qy();
        if (a.isPaused.get()) return null;
        const s =
            a.widgetState.get() === py.Intro
                ? a.hasExtraChapter.get()
                : a.isExtraChapter.get() || a.isExtraChapterHighlighted.get();
        return l.jsxs('div', {
            className: c(rC, s && oC, e),
            children: [
                l.jsx('div', { className: nC }),
                l.jsx('div', { className: c(iC, t && lC) }),
                l.jsx('div', { className: cC }),
            ],
        });
    }),
    uC = d(function ({ id: e, elementId: t, className: a }) {
        const { model: s } = qy(),
            { startAnimation: n } = fb(),
            i = Yy(),
            r = s.isExtraChapterHighlighted.get(),
            o = s.widgetState.get(),
            c = !r && o === py.Progression;
        return (
            ox(() => {
                if (ex(i, o)) {
                    const t = o === py.Intro ? gy.umg_widget_event_timer : gy.umg_widget_event_timer_simple;
                    n({ id: e, animName: Lx, soundCfg: t });
                }
            }, [i, o]),
            l.jsx(Ax, {
                id: e,
                elementId: t,
                withOverlaySplash: c,
                className: a,
                children:
                    c &&
                    l.jsxs(l.Fragment, {
                        children: [
                            l.jsx(dC, { id: e, className: a, withOverlay: !1 }),
                            l.jsx(sC, { id: e, className: a }),
                        ],
                    }),
            })
        );
    }),
    mC = 'CompletedOverlay_b04581f5';
const pC = 'Intro_backgroundWrapper_dc209870',
    _C = 'Intro_background_e3bffd74',
    hC = 'Intro_f422ad4a',
    gC = 'Intro_base__paused_129a2cdc',
    vC = 'Intro_backgroundSize_6e0dec55',
    fC = 'Intro_icon_946c0059',
    bC = d(function ({ id: e, elementId: t, className: a }) {
        const { model: s } = qy(),
            n = s.isPaused.get(),
            { imagePath: i, videoPath: o } = (function (e = 'bg') {
                const { model: t } = qy(),
                    a = Eb(),
                    { seasonPath: s } = Jy(
                        'battle_pass.widget.background',
                        e,
                        t.hasExtraChapter.get(),
                        t.season.get(),
                        a,
                    );
                return { imagePath: Xy(e, t.hasExtraChapter.get(), t.season.get(), a), videoPath: Zy.read(s) };
            })(),
            [d, u] = _(() => ({ to: { opacity: 0 }, config: { duration: 400, easing: Hb } })),
            m = r.useCallback(
                async (e) => {
                    await Promise.all(u.start({ to: { opacity: 1 }, immediate: e }));
                },
                [u],
            ),
            { maskPosition: p, backgroundContrast: h } = By({ id: e, elementId: t, onComplete: m });
        return l.jsxs(w.div, {
            style: { maskPosition: p.val.to((e) => Dy(-e)), filter: h.val.to(Sy) },
            className: c(hC, n && gC, a),
            children: [
                l.jsx(w.div, {
                    style: { maskPosition: p.val.to(Dy) },
                    className: pC,
                    children: o
                        ? l.jsx('div', {
                              className: vC,
                              children: l.jsx(va, { src: o, className: _C, autoplay: !0, loop: !0 }, o),
                          })
                        : l.jsx(ie, { path: i, className: _C }),
                }),
                l.jsx(w.div, {
                    style: d,
                    children: l.jsx(ie, { path: 'battlePass.widget.not_chosen', className: fC, width: 60, height: 60 }),
                }),
            ],
        });
    }),
    yC = 'Index_f505a04a',
    xC = r.memo(function (e) {
        return l.jsx(fa, { ...e, classNames: { background: yC } });
    }),
    CC = { to: { opacity: 1, x: 0 }, config: { duration: 400, easing: Hb } },
    wC = { from: { opacity: 0, x: fe(-20) }, to: { opacity: 1, x: 0 } };
const jC = 'Progression_de15ce34',
    NC = 'Progression_label_67b446d',
    IC = 'Progression_levelWrapper_20ffa2cd',
    SC = 'Progression_countdownWrapper_32ed00dc',
    kC = 'Progression_countdownSeparator_8d7ba9e7',
    PC = 'Progression_progress_f05295ff',
    EC = 'Progression_pointsEarned_f0502458',
    MC = 'Progression_progressSeparator_9c752d50',
    DC = 'Progression_progressBar_9c5d3f74',
    TC = 'Progression_levelPoints_f1c3b9c0',
    LC = 'Progression_delta_2b36b7f6',
    AC = 'Progression_glow_bdccbc96',
    BC = d(function ({ id: e, elementId: t, className: a }) {
        const { model: s } = qy(),
            n = Yy(),
            i = s.levelPoints.get(),
            { pointsEarned: o, level: d } = s.lastSeenState.get(),
            u = (function () {
                const e = Yy(),
                    { model: t } = qy(),
                    [a, s] = _(() => CC),
                    n = ex(e, t.widgetState.get());
                return (
                    ox(() => {
                        n && s.start(wC);
                    }, [n, s]),
                    a
                );
            })(),
            { baseSpring: m } = (function ({ id: e, elementId: t }) {
                const { registerAnimation: a } = fb(),
                    [s, n] = _(() => qx.init),
                    i = Dt((e) => {
                        e.isPaused ? n.start({ ...qx.paused }) : n.start({ ...qx.unPaused });
                    }),
                    o = Dt((e) => {
                        e.isPaused
                            ? n.start({ ...qx.paused, immediate: !0 })
                            : n.start({ ...qx.unPaused, delay: 0, immediate: !0 });
                    }),
                    l = r.useMemo(() => ({ start: i, skip: o }), [o, i]);
                return (
                    by({ id: e, elementId: t, registerAnimation: a, animName: Wx, config: l }),
                    r.useMemo(() => ({ baseSpring: s }), [s])
                );
            })({ id: e, elementId: t }),
            {
                pointsEarnedSpring: p,
                progressPoints: h,
                deltaGlowSpring: g,
                levelSpring: v,
            } = (function ({ id: e, elementId: t, pointsEarned: a, level: s, levelPoints: n }) {
                const { startAnimation: i, registerAnimation: o } = fb(),
                    [l, c] = r.useState(a),
                    [d, u] = _(() => ({ ...$x })),
                    [m, p] = _(() => ({ ...Vx })),
                    [h, g] = _(() => ({ from: { pointsEarned: a, level: s, deltaLeft: _a(a, n), deltaWidth: 0 } })),
                    v = Dt((e) => {
                        const { phase_1: t, phase_2: a } = e;
                        (p.start({ opacity: 1 }),
                            g.start({
                                to: async (e) => {
                                    (await e({ deltaWidth: 0, deltaLeft: t.deltaLeft, immediate: !0 }),
                                        await ha(500),
                                        await e(t),
                                        c(t.pointsEarned),
                                        a &&
                                            (await e({ ...Rx, level: t.level }),
                                            c(0),
                                            await Promise.all(
                                                u.start({
                                                    to: async (t) => {
                                                        (await t({ x: fe(40), opacity: 0 }),
                                                            await t({ x: fe(-20), opacity: 0, immediate: !0 }),
                                                            i({ id: Oy, animName: Lx }),
                                                            await e({ level: a.level, immediate: !0 }),
                                                            await t({ x: 0, opacity: 1 }));
                                                    },
                                                }),
                                            ),
                                            await e(a),
                                            c(a.pointsEarned)),
                                        p.start({ opacity: 0 }));
                                },
                            }));
                    }),
                    f = r.useMemo(() => ({ start: v, skip: S }), [v]);
                return (
                    by({ id: e, elementId: t, registerAnimation: o, animName: Fx, config: f }),
                    r.useMemo(
                        () => ({ pointsEarnedSpring: h, progressPoints: l, deltaGlowSpring: m, levelSpring: d }),
                        [m, d, h, l],
                    )
                );
            })({ id: e, elementId: t, pointsEarned: o, level: d, levelPoints: i });
        return l.jsxs(w.div, {
            style: m,
            className: c(jC, a),
            children: [
                l.jsxs('div', {
                    className: NC,
                    children: [
                        l.jsxs('div', {
                            className: IC,
                            children: [
                                l.jsx(w.div, {
                                    style: v,
                                    children: l.jsx(Y, {
                                        path: 'user_missions.battle_pass_widget.stage',
                                        params: { level: l.jsx(w.div, { children: p.level.to((e) => Math.ceil(e)) }) },
                                    }),
                                }),
                                n &&
                                    l.jsxs(w.div, {
                                        style: u,
                                        className: SC,
                                        children: [
                                            l.jsx(Y, {
                                                className: kC,
                                                path: 'user_missions.battle_pass_widget.countdownSeparator',
                                            }),
                                            l.jsx(lx, {}),
                                        ],
                                    }),
                            ],
                        }),
                        l.jsx(Y, {
                            className: PC,
                            path: 'user_missions.battle_pass_widget.progress',
                            params: {
                                pointsEarned: l.jsx(w.div, {
                                    className: EC,
                                    children: p.pointsEarned.to((e) => Math.round(e) % i),
                                }),
                                levelPoints: l.jsx('div', { className: TC, children: i }),
                                progressSeparatorClass: MC,
                            },
                        }),
                    ],
                }),
                l.jsx(xC, {
                    size: 'small',
                    className: DC,
                    value: h,
                    maxValue: i,
                    children: l.jsx(w.div, {
                        style: { width: p.deltaWidth.to((e) => `${e}%`), left: p.deltaLeft.to((e) => `${e}%`) },
                        className: LC,
                        children: l.jsx(w.div, { style: g, className: AC }),
                    }),
                }),
            ],
        });
    }),
    OC = 'ProgressionOverlay_3554586a',
    zC = 'ProgressionOverlay_wrapper_db2f9b96',
    RC = 'ProgressionOverlay_base__paused_ecd0a7ba',
    $C = 'ProgressionOverlay_hoverHelper_9949a6b8',
    VC = d(function ({ className: e, id: t }) {
        const { model: a } = qy(),
            s = a.isExtraChapterHighlighted.get(),
            n = j(s ? 1 : 0, { config: { duration: 400, easing: Hb } });
        return (
            ox(() => {
                n.start(s ? 1 : 0);
            }, [s, n]),
            l.jsxs('div', {
                className: c(OC, a.isPaused.get() && RC),
                children: [
                    l.jsxs(w.div, {
                        style: { opacity: n },
                        className: zC,
                        children: [
                            l.jsx(dC, { id: t, className: e, withOverlay: !1 }),
                            l.jsx(sC, { id: t, className: e }),
                        ],
                    }),
                    l.jsx(w.div, { style: { opacity: n.to((e) => 1 - e) }, className: c(e, $C) }),
                ],
            })
        );
    }),
    qC = 'BattlePass_layer_1bbff8f0',
    WC = 'BattlePass_96294458',
    FC = 'BattlePass_base__enabled_8ccab86c',
    HC = 'BattlePass_rewardIcon_25776ae1',
    GC = new Map([
        [py.Intro, [bC, dC, fx, sC]],
        [py.Progression, [BC, VC, zx, rx]],
        [
            py.Completed,
            [
                fx,
                function ({ className: e }) {
                    return l.jsx('div', { className: c(mC, e) });
                },
                rx,
            ],
        ],
    ]),
    ZC = d(function () {
        const { model: e, controls: t } = qy();
        aC();
        const { play: a } = ee(),
            s = e.widgetState.get(),
            n = e.timeLeft.get(),
            i = e.isPaused.get(),
            o = lt(i),
            d = r.useRef(!1),
            u = e.rewardsHash.get(),
            m = (function (e, t) {
                const a = Gy.read((e) => e.user_missions.hangarWidget.BattlePass('resId'));
                return t
                    ? {
                          resId: a,
                          contentId: Fy.read((e) =>
                              e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                          ),
                          decoratorId: Fy.read((e) => e.common.tooltip_window.tooltip_window.TooltipWindow('resId')),
                          args: {
                              body: Hy.read('battle_pass.tooltips.entryPoint.disabled.body'),
                              header: Hy.read('battle_pass.tooltips.entryPoint.disabled.header'),
                          },
                      }
                    : { resId: a, contentId: e };
            })(e.tooltipID.get(), i),
            { containerRef: p, tooltipProps: _ } = Pb(m),
            h = n - 259200,
            [g, v] = r.useState(n > 0 && h <= 0),
            f = () => {
                d.current && ((d.current = !1), a(gy.umg_widget_event_hover_loop_stop));
            };
        (r.useEffect(() => {
            if (h > 0) {
                v(!1);
                const e = window.setTimeout(() => {
                    v(!0);
                }, h * ba);
                return () => window.clearTimeout(e);
            }
            n > 0 && v(!0);
        }, [h, n]),
            r.useEffect(() => {
                i && !o && a(gy.umg_widget_event_inactive);
            }),
            ta(f));
        const b = GC.get(s);
        return l.jsxs(hy, {
            ..._,
            id: Oy,
            groupId: Ob.battlePass,
            position: 0,
            className: c(WC, !i && FC),
            isDisabled: i,
            onClick: () => {
                (_.onClick(), i || (f(), t.openBattlePass()));
            },
            onMouseEnter: () => {
                (_.onMouseEnter(),
                    i || (a('mouse-enter'), s === py.Intro && ((d.current = !0), a(gy.umg_widget_event_hover_loop))));
            },
            onMouseLeave: () => {
                (_.onMouseLeave(), f());
            },
            ref: p,
            children: [
                l.jsxs(Uy.Provider, {
                    value: g,
                    children: [
                        b && b.map((e, t) => l.jsx(e, { id: Oy, className: qC }, `${s}-${t}`)),
                        l.jsx(uC, { id: Oy, className: qC }),
                    ],
                }),
                u > 0 && l.jsx(Jx, { id: Oy, className: HC }),
            ],
        });
    }),
    UC = { rootId: te.resolve('aliases').read((e) => e.user_missions.hangarWidget.BattlePass('resId')) },
    KC = r.memo(function () {
        return l.jsx(Vy, { options: UC, children: l.jsx(ZC, {}) });
    }),
    QC = 'readyToPlay',
    JC = 'none',
    [XC, YC] = I()(
        ({ observableModel: e }) => ({ banners: e.arrayClone('banners') }),
        ({ externalModel: e }) => ({
            onEventClick: e.createCallback((e) => ({ key: e }), 'onEventClick'),
            appearAnimationPlayed: e.createCallback((e) => ({ banners: JSON.stringify(e) }), 'onAppearAnimationPlayed'),
        }),
    );
function ew(e, t) {
    return e.map((a, s) => {
        const n = Wb(s, e.length);
        return { ...a, size: (null == t ? void 0 : t.get(a.name)) || n, nextSize: n };
    });
}
function tw(e, t) {
    const a = [],
        s = e.map(({ name: e }) => e),
        n = new Map(t.map((e) => [e.name, e])),
        i = t.map(({ name: e }) => e).filter((e) => !s.includes(e)),
        r = e
            .filter(({ name: e, appearAnimationState: t }) => {
                var a;
                return (
                    (!n.has(e) && t === JC) ||
                    ((null == (a = n.get(e)) ? void 0 : a.appearAnimationState) !== QC && t === QC)
                );
            })
            .map(({ name: e }) => e),
        o = (e, t, s = !0) => {
            s && a.push({ data: e }, { animationHandler: async (e) => await t(e) });
        };
    return (
        o(
            ew(t),
            async (e) =>
                await (async function ({ api: e }, t) {
                    await Promise.all(t.map((t) => e.disappear(t)));
                })(e, i),
            i.length > 0,
        ),
        o(
            ew(
                e,
                (function (e) {
                    return new Map(e.map(({ name: t }, a) => [t, Wb(a, e.length)]));
                })(t),
            ),
            async (e) => {
                r.length
                    ? await (async function ({ api: e, play: t, startAnimation: a, appearAnimationPlayed: s }, n, i) {
                          (i.forEach((t, a) => e.updateCard(t, { position: a })),
                              t(gy.umg_widget_event_appear),
                              await e.appear(n),
                              n.forEach((e) => a({ id: e, animName: Ly })),
                              s(n));
                      })(e, r, s)
                    : await (async function ({ api: e }, t) {
                          (t.forEach((t, a) => e.updateCard(t, { position: a })), await e.applyLayout(!1));
                      })(e, s);
            },
        ),
        a
    );
}
const aw = 'announce',
    sw = 'intro',
    nw = 'inProgress',
    iw = 'inactive',
    rw = [Ab.small, Ab.medium, Ab.full],
    ow = { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 1 } },
    lw = { opacity: 1, config: Gb };
const cw = { video: 'BannerBackground_video_accb9213', background: 'BannerBackground_background_53ce4ef2' },
    dw = new Map([
        [Ab.small, 'small'],
        [Ab.medium, 'medium'],
        [Ab.full, 'big'],
    ]),
    uw = (e, t, a, s, n = !1) => {
        const i = `bg_${a}`;
        let r = '',
            o = e.$dyn('hangarEventBanners').$dyn('event').$dyn(t);
        if (o) {
            if (s) {
                const e = o.$dyn('adaptive');
                e && (o = e);
            }
            (n && (r = o.$dyn(`${i}_disabled`)), r || (r = o.$dyn(i)));
        }
        return r;
    };
function mw({ name: e, size: t, isSmall: a, bannerState: s, autoplayVideo: n = !0, classNames: i }) {
    let r = '',
        o = !1;
    const d = s === sw,
        u = s === nw,
        m = !(d || u),
        p = dw.get(t),
        _ = uw(R.images.gui.maps.icons, e, p, a, m);
    return (
        m || ((r = uw(R.videos, e, p, a)), (o = '' !== r)),
        l.jsxs(l.Fragment, {
            children: [
                o &&
                    l.jsx(
                        va,
                        {
                            loop: !0,
                            src: r,
                            autoplay: n,
                            className: c(cw.video, u && (null == i ? void 0 : i.dynamicVideo)),
                        },
                        r,
                    ),
                !(d && o) &&
                    l.jsx('div', {
                        style: { backgroundImage: `url(${_})` },
                        className: c(cw.background, o && u && (null == i ? void 0 : i.dynamicImage)),
                    }),
            ],
        })
    );
}
function pw({ isCooldown: e, isAdaptive: t, isMode: a, size: s, value: n, className: i }) {
    const o = e ? ma.type.cooldown : ma.type.accent,
        c = s === Ab.medium,
        d = s === Ab.small,
        u = r.useMemo(() => {
            if (t) {
                if (a && d) return ma.format.superCompact;
                if (c) return ma.format.compact;
            } else if (d) return ma.format.compact;
            return ma.format.default;
        }, [t, c, a, d]);
    return l.jsx(ma, { start: n, format: u, type: o, size: ma.size.x16x16, className: i }, n);
}
const _w = { base: 'DateRange_8756cb54', label: 'DateRange_label_d6f3c1f3', image: 'DateRange_image_68220085' },
    hw = te.resolve('strings'),
    gw = { full: 'full', numeric: 'numeric', compact: 'compact' },
    vw = { [gw.full]: ya.DayMonthFull, [gw.numeric]: ya.DayMonthNumeric };
function fw({ startDate: e, endDate: t, className: a, size: s, isAdaptive: n, isMode: i }) {
    const o = Ca,
        d = s === Ab.medium,
        u = s === Ab.small,
        m = r.useMemo(
            () => (u || (n && d && i) ? fw.format.compact : n || d ? fw.format.numeric : fw.format.full),
            [n, d, i, u],
        );
    return l.jsxs('div', {
        className: c(_w.base, a),
        children: [
            l.jsx(ie, {
                className: _w.image,
                path: 'ui_kit.datetime.x16x16.cooldown',
                width: 18,
                height: 17,
                adaptive: { medium: { path: 'ui_kit.datetime.x24x24.cooldown', width: 24, height: 24 } },
            }),
            m !== gw.compact
                ? l.jsx(xa, {
                      className: _w.label,
                      text: hw.readOrEmpty('user_missions.common.daterange.divider'),
                      params: { startDate: o(e, vw[m]), endDate: o(t, vw[m]) },
                  })
                : null,
        ],
    });
}
fw.format = gw;
const bw = {
        descriptionWrapper: 'BannerContent_descriptionWrapper_62220abd',
        timerWrapper: 'BannerContent_timerWrapper_d0c9deb9',
        base: 'BannerContent_eb883da9',
        content: 'BannerContent_content_52090a7a',
        content__small: 'BannerContent_content__small_fc4dd34',
        content__medium: 'BannerContent_content__medium_2bceb795',
        title: 'BannerContent_title_2151e956',
        contentWrapper: 'BannerContent_contentWrapper_cc8ad72a',
        contentWrapper__hasContent: 'BannerContent_contentWrapper__hasContent_2c34a1f3',
        contentWrapper__hasContentSmall: 'BannerContent_contentWrapper__hasContentSmall_bf8a26b',
        contentWrapper__hasTimer: 'BannerContent_contentWrapper__hasTimer_12b942fc',
        description: 'BannerContent_description_7daff10f',
        description__withMode: 'BannerContent_description__withMode_9dadc0e4',
        modeLabel: 'BannerContent_modeLabel_2583d2ce',
        modeLabel__small: 'BannerContent_modeLabel__small_bc16302e',
        dateRange: 'BannerContent_dateRange_f5c10b91',
        timer: 'BannerContent_timer_b18d2a92',
    },
    yw = te.resolve('strings'),
    xw = 'hangar_event_banners.',
    Cw = `${xw}event.`,
    ww = `${xw}modeLabel`,
    jw = '.title',
    Nw = '.description',
    Iw = { from: { x: 0, opacity: 1 }, to: { x: fe(20), opacity: 0 } },
    Sw = { from: { x: fe(-20), opacity: 0 }, to: { x: 0, opacity: 1 }, delay: 200 };
function kw({ name: e, state: t, introDescription: a, inProgressDescription: s }) {
    return t === sw && a.length > 0 ? a : t === nw && s.length > 0 ? s : yw.readOrEmpty(`${Cw}${e}.${t}${Nw}`);
}
function Pw({
    name: e,
    state: t,
    timerValue: a,
    introDescription: s,
    inProgressDescription: n,
    eventEndDate: i,
    eventStartDate: o,
    isMode: d,
    isSmall: u,
    size: m,
    showTimerBeforeEventEnd: p,
}) {
    const [h, g] = r.useState(a > 0 && a <= p),
        [v, f] = r.useState(a),
        b = m === Ab.full,
        y = m === Ab.medium,
        x = m === Ab.small,
        C = a - p,
        j = t === aw || t === iw,
        N = b && !j,
        I = ga(),
        { play: S } = ee();
    r.useEffect(() => {
        if (C > 0) {
            g(!1);
            const e = window.setTimeout(() => {
                (f(a - C), g(!0));
            }, C * ba);
            return () => window.clearTimeout(e);
        }
        (a > 0 && g(!0), f(a));
    }, [C, a]);
    const k = v > 0 && (([sw, nw].includes(t) && h) || t === iw),
        P = t === aw && o > 0 && i > 0,
        E = k || P,
        M = lt(E),
        D = lt(j),
        { startAnimation: T } = fb(),
        [L, A] = _(() => ({ x: 0, opacity: E ? 1 : 0, config: Gb })),
        [B, O] = _(() => ({ x: 0, opacity: E ? 0 : 1 }));
    return (
        r.useEffect(() => {
            I ||
                (M !== E &&
                    (O.start(E ? Iw : Sw),
                    A.start(E ? Sw : Iw),
                    E && !j && (S(gy.umg_widget_event_timer), T({ id: e, animName: Lx }))),
                j && j !== D && S(gy.umg_widget_event_inactive));
        }),
        l.jsxs('div', {
            className: bw.base,
            children: [
                b && l.jsx('div', { className: bw.title, children: yw.readOrEmpty(`${Cw}${e}${jw}`) }),
                l.jsxs('div', {
                    className: c(
                        bw.content,
                        x && bw.content__small,
                        y && bw.content__medium,
                        t === nw && y && v > 0 && bw.content__alignedLeft,
                    ),
                    children: [
                        d &&
                            l.jsx('div', {
                                className: c(bw.modeLabel, x && bw.modeLabel__small),
                                children: yw.readOrEmpty(ww),
                            }),
                        l.jsxs('div', {
                            className: c(
                                bw.contentWrapper,
                                k && bw.contentWrapper__hasTimer,
                                E && (x ? bw.contentWrapper__hasContentSmall : bw.contentWrapper__hasContent),
                            ),
                            children: [
                                l.jsxs(w.div, {
                                    style: L,
                                    className: bw.timerWrapper,
                                    children: [
                                        k &&
                                            l.jsx(pw, {
                                                isAdaptive: u,
                                                isCooldown: j,
                                                isMode: d,
                                                value: v,
                                                size: m,
                                                className: bw.timer,
                                            }),
                                        P &&
                                            l.jsx(fw, {
                                                isAdaptive: u,
                                                isMode: d,
                                                size: m,
                                                startDate: o,
                                                endDate: i,
                                                className: bw.dateRange,
                                            }),
                                    ],
                                }),
                                N &&
                                    l.jsx(w.div, {
                                        style: B,
                                        className: bw.descriptionWrapper,
                                        children: l.jsx('div', {
                                            className: c(bw.description, d && bw.description__withMode),
                                            children: kw({
                                                name: e,
                                                state: t,
                                                introDescription: s,
                                                inProgressDescription: n,
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function Ew({ bannerState: e, id: t }) {
    !(function ({ isFirstRender: e, bannerState: t, id: a }) {
        const { startAnimation: s } = fb(),
            n = lt(t);
        fy(!e, () => {
            t != n && s({ id: a, animName: ky });
        });
    })({ isFirstRender: ga(), bannerState: e, id: t });
}
const Mw = {
        borderGlow: 'Banner_borderGlow_fad1ffcf',
        container: 'Banner_container_5dcd4653',
        backgroundContainer: 'Banner_backgroundContainer_e3ccac36',
        backgroundWrapper: 'Banner_backgroundWrapper_a910ddb8',
        backgroundLayer: 'Banner_backgroundLayer_1e0db56a',
        layer: 'Banner_layer_fad1ffcf',
        borderHelper: 'Banner_borderHelper_4d78f769',
        base: 'Banner_32bb473c',
        borderGlow__animated: 'Banner_borderGlow__animated_b37fe0f0',
        pulse: 'Banner_pulse_fad1ffcf',
        container__medium: 'Banner_container__medium_5fcf9e99',
        container__small: 'Banner_container__small_425ad58b',
        backgroundSizeHelper: 'Banner_backgroundSizeHelper_8f0f4118',
        backgroundSizeHelper__full: 'Banner_backgroundSizeHelper__full_92646f0e',
        backgroundSizeHelper__medium: 'Banner_backgroundSizeHelper__medium_abc87b03',
        backgroundSizeHelper__small: 'Banner_backgroundSizeHelper__small_df6d55e',
        dynamicImage: 'Banner_dynamicImage_83800a0a',
        dynamicVideo: 'Banner_dynamicVideo_e03543c7',
    },
    Dw = te.resolve('aliases');
function Tw({
    name: e,
    isMode: t,
    introDescription: a,
    inProgressDescription: s,
    bannerState: n,
    borderColor: i,
    timerValue: o,
    eventEndDate: d,
    eventStartDate: u,
    position: m,
    size: p,
    isSmall: h,
    onClick: g,
    nextSize: v,
    showTimerBeforeEventEnd: f,
}) {
    const b = n === sw && i,
        { play: y } = ee(),
        C = r.useRef(!1),
        j = () => {
            C.current && ((C.current = !1), y(gy.umg_widget_event_hover_loop_stop));
        };
    ta(j);
    const { containerRef: N, tooltipProps: I } = Pb({
            args: { key: e },
            resId: Dw.read((e) => e.user_missions.hangarWidget.Events('resId')),
            contentId: Dw.read((e) => e.user_missions.hangarWidget.EventMainInfoTip('resId')),
        }),
        { backgroundContrast: S, maskPosition: k } = By({ id: e }),
        { contentStyles: P, sizeTransition: E } = (function (e, t) {
            let a = [e];
            t && t !== e && (a = rw.indexOf(e) > rw.indexOf(t) ? [t, e] : [e, t]);
            const [s, n] = _(() => lw);
            return (
                r.useEffect(() => {
                    const a = e !== t && void 0 !== t;
                    n.start({ to: { opacity: a ? 0 : 1 } });
                }, [n, e, t]),
                { sizeTransition: x(a, ow), contentStyles: s }
            );
        })(p, v);
    return (
        Ew({ bannerState: n, id: e }),
        l.jsxs(hy, {
            ...I,
            id: e,
            groupId: Ob.events,
            onMouseEnter: () => {
                (y('mouse-enter'), (C.current = !0), y(gy.umg_widget_event_hover_loop), I.onMouseEnter());
            },
            onMouseLeave: () => {
                (j(), I.onMouseLeave());
            },
            position: m,
            ref: N,
            className: Mw.base,
            onClick: () => {
                (j(), g());
            },
            children: [
                l.jsx(w.div, {
                    style: { maskPosition: k.val.to((e) => Dy(-e)), filter: S.val.to(Sy) },
                    className: Mw.backgroundLayer,
                    children: l.jsx(w.div, {
                        style: { maskPosition: k.val.to(Dy) },
                        className: Mw.backgroundContainer,
                        children: E((t, a) =>
                            l.jsx(w.div, {
                                style: t,
                                className: Mw.backgroundWrapper,
                                children: l.jsx('div', {
                                    className: c(Mw.backgroundSizeHelper, Mw[`backgroundSizeHelper__${a}`]),
                                    children: l.jsx(
                                        mw,
                                        {
                                            name: e,
                                            size: a,
                                            bannerState: n,
                                            isSmall: h,
                                            classNames: {
                                                dynamicImage: Mw.dynamicImage,
                                                dynamicVideo: Mw.dynamicVideo,
                                            },
                                        },
                                        a,
                                    ),
                                }),
                            }),
                        ),
                    }),
                }),
                l.jsx(w.div, {
                    style: P,
                    className: c(Mw.container, Mw[`container__${p}`]),
                    children: l.jsx(Pw, {
                        name: e,
                        state: n,
                        introDescription: a,
                        inProgressDescription: s,
                        timerValue: o,
                        eventEndDate: d,
                        eventStartDate: u,
                        isMode: t,
                        isSmall: h,
                        size: p,
                        position: m,
                        showTimerBeforeEventEnd: f,
                    }),
                }),
                b &&
                    l.jsxs(l.Fragment, {
                        children: [
                            l.jsx('div', {
                                style: { borderColor: i },
                                className: Mw.borderHelper,
                                children: l.jsx('div', {
                                    style: { boxShadow: `0 0 13rem 0 ${i} inset` },
                                    className: c(Mw.borderGlow, Mw.borderGlow__animated),
                                }),
                            }),
                            l.jsx(w.div, {
                                style: { opacity: P.opacity.to((e) => Math.floor(e)) },
                                children: l.jsx(jy, { id: e, size: p, className: Mw.layer }),
                            }),
                        ],
                    }),
                l.jsx(Ax, {
                    id: e,
                    className: Mw.layer,
                    withOverlaySplash: !0,
                    children: l.jsx('div', {
                        style: { boxShadow: `0 0 25rem 0 ${i} inset` },
                        className: Mw.borderGlow,
                    }),
                }),
            ],
        })
    );
}
const Lw = d(function () {
        const e = Eb(),
            { play: t } = ee(),
            { controls: a } = YC(),
            s = (function () {
                const { model: e, controls: t } = YC(),
                    a = Db(),
                    { play: s } = ee(),
                    n = e.banners.get(),
                    { startAnimation: i } = fb(),
                    o = r.useRef(!1),
                    l = r.useRef(!1),
                    c = r.useRef([]),
                    d = r.useRef([]),
                    [u, m] = r.useState(() => {
                        const e = n.filter((e) => e.appearAnimationState === JC);
                        return (d.current.push(...tw(n, e)), (c.current = n), ew(e));
                    }),
                    p = Dt(async (e) => {
                        var n;
                        if (void 0 !== e.data) ((l.current = !1), m(e.data), d.current.shift());
                        else if (
                            (await (null == (n = null == e ? void 0 : e.animationHandler)
                                ? void 0
                                : n.call(e, {
                                      api: a,
                                      play: s,
                                      startAnimation: i,
                                      appearAnimationPlayed: t.appearAnimationPlayed,
                                  })),
                            d.current.shift(),
                            d.current.length)
                        ) {
                            const e = d.current[0];
                            await p(e);
                        }
                    });
                return (
                    Ut(() => {
                        (u.map((e) => {
                            const t = e.appearAnimationState === JC;
                            (a.updateCard(e.name, { visible: t }),
                                t && i({ id: e.name, animName: Ly, animCallParams: { immediate: !0 } }));
                        }),
                            a.enqueue(async () => a.applyLayout()));
                    }),
                    r.useEffect(() => {
                        if (!q.structural(n, c.current)) {
                            const e = tw(n, c.current);
                            (d.current.push(...e, { data: ew(n) }), (c.current = n));
                        }
                    }, [n]),
                    r.useEffect(() => {
                        l.current = !0;
                    }, [u]),
                    r.useEffect(() => {
                        !o.current &&
                            l.current &&
                            d.current.length &&
                            ((o.current = !0),
                            a
                                .enqueue(async () => await p(d.current[0]))
                                .then(() => {
                                    o.current = !1;
                                }));
                    }),
                    u
                );
            })();
        return l.jsx(l.Fragment, {
            children: s.map((s, n) =>
                l.jsx(
                    Tw,
                    {
                        position: n + 1,
                        ...s,
                        isSmall: e,
                        onClick: () => {
                            (t('click'), a.onEventClick(s.name));
                        },
                    },
                    s.name,
                ),
            ),
        });
    }),
    Aw = { rootId: te.resolve('aliases').read((e) => e.user_missions.hangarWidget.Events('resId')) },
    Bw = r.memo(function () {
        return l.jsx(XC, { options: Aw, children: l.jsx(Lw, {}) });
    }),
    [Ow, zw] = I()(
        ({ observableModel: e }) => ({
            ...e.primitives(['isBattlePassActive', 'isAnyEntryPointAvailable', 'areMissionsActive']),
        }),
        ({ externalModel: e }) => ({
            onPresenterDisappear: e.createCallback((e) => ({ resId: e }), 'onPresenterDisappear'),
            onWidgetUnmounted: e.createCallbackNoArgs('onWidgetUnmounted'),
        }),
    ),
    [Rw, $w] = I()(
        ({ observableModel: e }) => ({ ...{ ...e.primitives(['isMissionsEnable']), quests: e.arrayClone('quests') } }),
        ({ externalModel: e }) => ({
            onMissionClick: e.createCallback((e) => ({ questId: e }), 'onMissionClick'),
            markAsViewed: e.createCallbackNoArgs('onMarkAsViewed'),
        }),
    ),
    Vw = { daily: 'daily', premium: 'premium_daily', bonus: 'bonus', weekly: 'weekly' },
    qw = new Set([Vw.daily, Vw.bonus, Vw.premium]),
    Ww = 32,
    Fw = 'dailyQuestsCompleted',
    Hw = 'allQuestsCompleted',
    Gw = 10,
    Zw = {
        base: 'ProgressCount_1bbbcb2',
        slash: 'ProgressCount_slash_926aef96',
        slash__fullWidth: 'ProgressCount_slash__fullWidth_c807c2b',
        current: 'ProgressCount_current_115c5e6d',
        current__slashCenter: 'ProgressCount_current__slashCenter_6ce420af',
        total: 'ProgressCount_total_781b8edb',
        total__slashCenter: 'ProgressCount_total__slashCenter_bb7952a3',
    },
    Uw = 'fullWidth',
    Kw = te.resolve('intl'),
    Qw = r.memo(function ({ current: e, total: t, children: a, displayType: s = Uw, className: n, classNames: i }) {
        return l.jsxs('div', {
            className: c(Zw.base, n),
            children: [
                l.jsx('div', {
                    className: c(Zw.current, Zw[`current__${s}`], null == i ? void 0 : i.current),
                    children: a ?? Kw.formatNumber('integral', e),
                }),
                l.jsx('div', {
                    className: c(Zw.slash, Zw[`slash__${s}`], null == i ? void 0 : i.slash),
                    children: '/',
                }),
                l.jsx('div', {
                    className: c(Zw.total, Zw[`total__${s}`], null == i ? void 0 : i.total),
                    children: Kw.formatNumber('integral', t),
                }),
            ],
        });
    }),
    Jw = te.resolve('strings'),
    Xw = te.resolve('images'),
    Yw = 'SpecConditionsIcons_ab3f13c7',
    ej = 'SpecConditionsIcons_icon_d767e7b4';
function tj({ specConditions: e, className: t, ...a }) {
    return l.jsx('div', {
        ...a,
        className: c(Yw, t),
        children: st(e, (e) => l.jsx(ie, { width: 24, height: 24, path: e.iconPath, className: ej }, e.id)),
    });
}
const aj = 200,
    sj = 400,
    nj = 500,
    ij = 1500,
    rj = { to: { y: 0, opacity: 1 }, config: { duration: 200, easing: Hb } },
    oj = { to: { opacity: 0 }, config: { duration: 200, easing: Hb } },
    lj = { to: { scale: 1, opacity: 1 }, config: { duration: 300, easing: Hb } },
    cj = { to: { scale: 0, opacity: 0 }, config: { duration: 300, easing: Hb } },
    dj = { opacity: 1, y: 0 };
const uj = (e) =>
        e >= 1e4
            ? 'aboveTenThousand'
            : e >= 1e3
              ? 'aboveThousand'
              : e >= 100
                ? 'aboveHundred'
                : e >= 10
                  ? 'aboveTens'
                  : 0 === e
                    ? 'fullSize'
                    : e < 10
                      ? 'digits'
                      : void 0,
    mj = {
        icon: 'QuestCard_icon_9c76dd70',
        contentWrapper: 'QuestCard_contentWrapper_89591e48',
        rewardsWrapper: 'QuestCard_rewardsWrapper_d0b2cb69',
        hoverBg: 'QuestCard_hoverBg_934f6a72',
        completeBg: 'QuestCard_completeBg_4b5463bc',
        base: 'QuestCard_89591e48',
        base__completed: 'QuestCard_base__completed_46165daa',
        content: 'QuestCard_content_375953dc',
        iconWrapper: 'QuestCard_iconWrapper_fcde788c',
        description: 'QuestCard_description_de21283d',
        description__noProgress: 'QuestCard_description__noProgress_f530c11',
        description__allDailyDone: 'QuestCard_description__allDailyDone_cef471f5',
        progressCounter: 'QuestCard_progressCounter_906d0d2f',
        progressBar: 'QuestCard_progressBar_ddc689d',
        countdown: 'QuestCard_countdown_e9d3d8a3',
        descriptionText: 'QuestCard_descriptionText_de1e459f',
        condition: 'QuestCard_condition_8eb8a057',
        base__fullSize: 'QuestCard_base__fullSize_9c76dd70',
        base__digits: 'QuestCard_base__digits_9c76dd70',
        condition__bonus: 'QuestCard_condition__bonus_525c74c2',
        base__aboveTens: 'QuestCard_base__aboveTens_9c76dd70',
        base__aboveHundred: 'QuestCard_base__aboveHundred_9c76dd70',
        base__aboveThousand: 'QuestCard_base__aboveThousand_9c76dd70',
        base__aboveTenThousand: 'QuestCard_base__aboveTenThousand_9c76dd70',
        specialConditions: 'QuestCard_specialConditions_96e6d495',
        delta: 'QuestCard_delta_eaef15ad',
        glow: 'QuestCard_glow_b3b6f1b4',
        pulse: 'QuestCard_pulse_9c76dd70',
    },
    pj = te.resolve('aliases'),
    _j = te.resolve('views'),
    hj = te.resolve('intl'),
    gj = te.resolve('images'),
    vj = te.resolve('strings'),
    fj = pj.read((e) => e.user_missions.hangarWidget.Quests('resId')),
    bj = _j.read((e) => e.mono.user_missions.tooltips.daily_quest_tooltip('resId')),
    yj = _j.read((e) => e.mono.user_missions.tooltips.weekly_quest_tooltip('resId')),
    xj = ja.Small,
    Cj = r.forwardRef(function (
        {
            id: e,
            animationId: t,
            totalProgress: a,
            currentProgress: s,
            earned: n,
            isCompleted: i,
            icon: o,
            description: d,
            commonConditionId: u,
            specialConditionIds: m,
            missionType: p,
            bonuses: h,
            countdown: g,
            position: v,
            onClick: f,
        },
        b,
    ) {
        const y = Eb(),
            { play: x } = ee(),
            C = a > 0,
            j = wa(
                m,
                (e) => ({
                    id: e,
                    textPath: `weekly_quests.condition.special.c_${e}`,
                    iconPath: `userMissions.weekly.specialCond.c_${e}`,
                }),
                (e) => void 0 !== Jw.read(e.textPath) && Xw.has(e.iconPath),
            );
        const I = p === Vw.bonus,
            S = ae(`userMissions.missionIcons.c_32.${o}_gold`, `userMissions.missionIcons.c_64.${o}_gold`),
            P = ae(`userMissions.missionIcons.c_32.${o}_silver`, `userMissions.missionIcons.c_64.${o}_silver`),
            { containerRef: E, tooltipProps: M } = Pb({
                args: { questID: e },
                resId: fj,
                contentId: p === Vw.weekly ? yj : bj,
            }),
            D = (() => {
                switch (p) {
                    case Vw.premium:
                        return S;
                    case Vw.weekly:
                        return `userMissions.weekly.commonCond.x32x32.c_${u}`;
                    default:
                        return P;
                }
            })(),
            T =
                p === Vw.weekly
                    ? ((e, t) => {
                          const a = Jw.readOrEmpty(`weekly_quests.condition.common.c_${e}`),
                              s = Jw.readOrEmpty('weekly_quests.specialCondition.container'),
                              n = Jw.readOrEmpty('weekly_quests.specialCondition.separator'),
                              i = t.map((e) => Jw.readOrEmpty(e.textPath)).join(n);
                          return `${a}${i ? s.replace('{{specialConditions}}', i) : ''}`;
                      })(u, j)
                    : Na(d),
            L = ((e) => {
                const t = e.length > 5,
                    a = t ? 4 : Math.min(e.length, 5),
                    s = [];
                return (
                    k(a, (t) => {
                        const a = le(e, t);
                        a &&
                            s.push({ size: xj, name: a.name, image: Ea(a, xj), value: a.value, valueType: Pa(a.name) });
                    }),
                    t &&
                        s.push({
                            size: xj,
                            name: 'more',
                            image: `${gj.readOrEmpty(`quests.bonuses.${xj}.default`)}`,
                            value: Ma(vj.readOrEmpty('tooltips.quests.awards.additional.bottom'), {
                                count: e.length - a,
                            }),
                        }),
                    s
                );
            })(h),
            {
                contentStyle: A,
                iconStyle: B,
                completedIconStyle: O,
                rewardStyles: z,
                progressStyle: R,
                deltaGlowStyle: $,
                actualProgress: V,
                cardRef: q,
            } = (function (e, t, a, s, n) {
                const i = t - a,
                    [o, l] = r.useState(i),
                    c = r.useRef(null),
                    { play: d } = ee(),
                    [u, m] = _(() => rj),
                    [p, h] = _(() => ({
                        to: { currentProgress: i, deltaLeft: 0, deltaWidth: 0 },
                        config: { duration: 1e3, easing: Hb },
                    })),
                    [g, v] = _(() => oj),
                    [f, b] = _(() => lj),
                    [y, x] = _(() => cj),
                    [C, w] = N(s, () => ({ to: { y: fe(-15), opacity: 0 }, config: { duration: 300, easing: Hb } })),
                    j = Dt(async (t) => {
                        if (e > 0) {
                            (v.start({ opacity: 1 }), d(gy.umg_widget_quest_progress));
                            const a = t < o,
                                s = _a(a ? t : o, e);
                            (await Promise.all(
                                h.start({
                                    from: { currentProgress: o, deltaLeft: s, deltaWidth: a ? _a(o - t, e) : 0 },
                                    to: { currentProgress: t, deltaWidth: a ? 0 : _a(t, e) - s, deltaLeft: s },
                                    [a ? 'onStart' : 'onRest']: () => l(t),
                                }),
                            ),
                                v.start({ opacity: 0 }));
                        }
                    }),
                    I = Dt(async () => {
                        t !== o && (await j(t));
                    }),
                    S = Dt(async (t, a) => {
                        (j(e),
                            t && (await ha(1e3)),
                            await Promise.all(b.start(cj.to)),
                            d(a ? gy.umg_widget_quest_complete_secondary : gy.umg_widget_quest_complete),
                            await Promise.all(x.start(lj.to)),
                            await Promise.all(m.start({ opacity: 0, y: fe(15) })),
                            d(a ? gy.umg_widget_quest_reward_secondary : gy.umg_widget_quest_reward),
                            await Promise.all(w.start((e) => ({ ...dj, delay: 200 * e }))));
                    });
                return (
                    r.useImperativeHandle(n, () => ({ playProgressAnimation: I, playCompletedAnimation: S })),
                    {
                        contentStyle: u,
                        progressStyle: p,
                        deltaGlowStyle: g,
                        iconStyle: f,
                        completedIconStyle: y,
                        rewardStyles: C,
                        actualProgress: o,
                        cardRef: c,
                    }
                );
            })(a, s, n, L.length, b);
        return l.jsxs(hy, {
            id: t,
            groupId: Ob.missions,
            position: v,
            ...M,
            onMouseEnter: () => {
                i || (x('mouse-enter'), M.onMouseEnter());
            },
            ref: aa([E, q]),
            className: c(mj.base, i && mj.base__completed, mj[`base__${uj(a)}`]),
            onClick: f,
            children: [
                l.jsx(w.div, { style: { opacity: O.opacity }, className: mj.completeBg }),
                l.jsxs(w.div, {
                    style: A,
                    className: mj.contentWrapper,
                    children: [
                        l.jsx(w.div, { style: { opacity: O.opacity }, className: mj.completeBg }),
                        l.jsx('div', { className: mj.hoverBg }),
                        l.jsxs('div', {
                            className: mj.iconWrapper,
                            children: [
                                l.jsx(w.div, {
                                    style: B,
                                    className: mj.icon,
                                    children: l.jsx(ie, { path: D, width: Ww, height: Ww }),
                                }),
                                l.jsx(w.div, {
                                    style: O,
                                    className: mj.icon,
                                    children: l.jsx(ie, {
                                        path: 'userMissions.icons.check_green',
                                        width: Ww,
                                        height: Ww,
                                    }),
                                }),
                            ],
                        }),
                        l.jsxs('div', {
                            className: mj.content,
                            children: [
                                l.jsxs(
                                    'div',
                                    {
                                        className: c(mj.description, mj.description__noProgress),
                                        children: [
                                            l.jsx(pa, {
                                                text: T,
                                                classMix: c(mj.descriptionText, mj.condition, I && mj.condition__bonus),
                                                isTruncationAvailable: !0,
                                            }),
                                            C &&
                                                l.jsx(Qw, {
                                                    className: mj.progressCounter,
                                                    total: a,
                                                    children: l.jsx(w.div, {
                                                        children: R.currentProgress.to((e) =>
                                                            hj.formatNumber('integral', Math.ceil(e)),
                                                        ),
                                                    }),
                                                }),
                                        ],
                                    },
                                    T,
                                ),
                                C &&
                                    l.jsx(xC, {
                                        className: mj.progressBar,
                                        size: 'small',
                                        value: V,
                                        maxValue: a,
                                        children: l.jsx(w.div, {
                                            style: {
                                                width: R.deltaWidth.to((e) => `${e}%`),
                                                left: R.deltaLeft.to((e) => `${e}%`),
                                            },
                                            className: mj.delta,
                                            children: l.jsx(w.div, { style: $, className: mj.glow }),
                                        }),
                                    }),
                            ],
                        }),
                        p === Vw.weekly && l.jsx(tj, { specConditions: j, className: mj.specialConditions }),
                        g > 0 &&
                            l.jsx('div', {
                                className: mj.countdown,
                                children: l.jsx(
                                    ma,
                                    {
                                        start: g,
                                        format: y ? Sa.superCompact : Sa.default,
                                        size: y ? Ia.x16x16 : Ia.x24x24,
                                    },
                                    g,
                                ),
                            }),
                    ],
                }),
                l.jsx('div', {
                    className: mj.rewardsWrapper,
                    children: L.map((e, t) =>
                        l.jsx(w.div, { style: null == z ? void 0 : z[t], children: l.jsx(ka, { ...e }) }, t),
                    ),
                }),
            ],
        });
    }),
    wj = { scale: 0, opacity: 0 },
    jj = { duration: 500, easing: Hb },
    Nj = { from: wj, to: { opacity: 1, scale: 1 } };
function Ij() {
    return { x: fe(-20), opacity: 0 };
}
const Sj = te.resolve('aliases'),
    kj = te.resolve('views'),
    Pj = te.resolve('strings'),
    Ej = Sj.read((e) => e.user_missions.hangarWidget.Quests('resId')),
    Mj = kj.read((e) => e.mono.user_missions.tooltips.all_quests_done_tooltip('resId')),
    Dj = r.forwardRef(function ({ id: e, areAllQuestsDone: t = !1, onClick: a, position: s, tooltipResId: n }, i) {
        const { iconStyle: o, contentStyle: d } = (function (e, t, a) {
                const s = Db().isVisible(e),
                    [n, i] = _(() => ({ to: wj, config: jj })),
                    [o, l] = _(() => ({ to: Ij(), config: jj })),
                    c = Dt((e = !1) => {
                        (i.start({ ...Nj, immediate: e }),
                            l.start({ from: Ij(), to: { x: 0, opacity: 1 }, immediate: e }));
                    }),
                    d = Dt(() => {
                        (i.start({ to: wj, immediate: !0 }), l.start({ to: Ij(), immediate: !0 }));
                    });
                return (
                    r.useImperativeHandle(a, () => ({ resetAnimations: d, runAnimations: c })),
                    r.useEffect(() => {
                        (t || s) && c(!0);
                    }, [t, s, c]),
                    { iconStyle: n, contentStyle: o }
                );
            })(e, t, i),
            u = e === Fw,
            { containerRef: m, tooltipProps: p } = Pb({ resId: n ?? Ej, contentId: Mj, disabled: u });
        return l.jsxs(hy, {
            id: e,
            groupId: Ob.missions,
            ...p,
            position: s,
            ref: m,
            className: mj.base,
            onClick: a,
            children: [
                t && l.jsx('div', { className: mj.hoverBg }),
                u && l.jsx(w.div, { style: { opacity: o.opacity }, className: mj.completeBg }),
                l.jsxs('div', {
                    className: mj.contentWrapper,
                    children: [
                        l.jsx('div', {
                            className: mj.iconWrapper,
                            children: l.jsx(w.div, {
                                style: o,
                                className: mj.icon,
                                children: l.jsx(ie, {
                                    className: mj.icon,
                                    path: u ? 'userMissions.icons.check_green' : 'userMissions.icons.check_white',
                                    width: Ww,
                                    height: Ww,
                                }),
                            }),
                        }),
                        l.jsx(w.div, {
                            style: d,
                            className: mj.content,
                            children: l.jsx('div', {
                                className: c(mj.description, mj.description__allDailyDone),
                                children: l.jsx('div', {
                                    className: mj.descriptionText,
                                    children: u
                                        ? Pj.read('user_missions.quests.daily_quests.completed')
                                        : Pj.read('user_missions.quests.daily_quests.all_completed'),
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        });
    });
function Tj(e) {
    return !e.isCompleted || e.animateCompletion;
}
function Lj(e, t) {
    return Ta(e, (e) => e.isCompleted && e.animateCompletion && e.missionType === t);
}
function Aj(e, t, a) {
    if (e.current !== t)
        return (
            (e.current = t),
            t
                ? async (t) => {
                      e.current && (await a(t));
                  }
                : void 0
        );
}
function Bj({ data: e, appearedPredicate: t, api: a, allDailyCompletedRef: s, allCompletedRef: n, previousMap: i }) {
    let r = !0,
        o = !0;
    const l = [],
        c = [],
        d = [],
        u = [],
        m = new Set(),
        p = (e, t) => {
            e && l.push({ animationHandler: t });
        };
    e.forEach((e) => {
        (m.add(e.animationId),
            (r = r && e.isCompleted),
            qw.has(e.missionType) && (o = o && e.isCompleted),
            e.isCompleted && e.animateCompletion
                ? d.push(e)
                : e.isCompleted || (t(e) ? u.push(e.animationId) : c.push(e)));
    });
    const _ = Aj(s, o, $j),
        h = void 0 !== _;
    if (i)
        for (const [v] of i)
            if (!m.has(v)) {
                p(0 === d.length && 0 === u.length, Oj);
                break;
            }
    (p(!r && a.isVisible(Hw), zj),
        p(d.length > 0, async (e) => {
            await (async function ({ api: e, play: t }, a) {
                (a.forEach((t, s) => {
                    e.updateCard(t.animationId, { position: Gw + s - a.length });
                }),
                    t(gy.umg_widget_quest_backlog),
                    await e.applyLayout(!1));
            })(e, d);
        }),
        p(d.length > 0, async (e) => {
            await (async function (e, t, a) {
                const { api: s, play: n } = e,
                    i = s.findMaxVisibleRowsInGroup(Ob.missions),
                    r = La(t, i);
                for (let o = 0; o < r.length; o++)
                    (await Rj(e, r[o]),
                        o !== r.length - 1 && (n(gy.umg_widget_quest_backlog), await s.applyLayout(!1), await ha(aj)));
                a || (await s.applyLayout(!1));
            })(e, d, u.length > 0 || h);
        }),
        p(u.length > 0, async (t) => {
            await (async function ({ api: e, play: t }, a, s) {
                a.some((t) => e.isDisplaying(t, !1)) && t(gy.umg_widget_quest_backlog);
                (s.forEach(({ animationId: t }, a) => e.updateCard(t, { position: Gw + a })),
                    await e.appear(a, Bb.slideUpIn));
            })(t, u, e);
        }),
        p(c.length > 0, async (e) => {
            await (async function ({ questCardRefs: e }, t) {
                await Promise.all(
                    t.map(async (t) => {
                        var a;
                        await (null == (a = e.get(t.animationId)) ? void 0 : a.playProgressAnimation());
                    }),
                );
            })(e, c);
        }));
    const g = Aj(n, r, Vj);
    return (p(h, _), p(void 0 !== g, g), l);
}
async function Oj({ api: e }) {
    await e.applyLayout(!1);
}
async function zj({ play: e, api: t }) {
    (e(gy.umg_widget_quest_disappear), await t.disappear(Hw));
}
async function Rj({ questCardRefs: e, play: t, api: a }, s) {
    const n = s.some((e) => e.totalProgress > 0);
    await Promise.all(
        s.map(async ({ animationId: s }, i) => {
            var r;
            const o = i > 0;
            (await ha(sj * i),
                await (null == (r = e.get(s)) ? void 0 : r.playCompletedAnimation(n, o)),
                await ha(nj),
                t(o ? gy.umg_widget_quest_disappear_secondary : gy.umg_widget_quest_disappear),
                await a.disappear(s));
        }),
    );
}
async function $j({ api: e, play: t, allDailyCompletedCard: a }) {
    (t(gy.umg_widget_quest_complete_all),
        null == a || a.resetAnimations(),
        await e.appear([Fw], Bb.fadeIn),
        null == a || a.runAnimations(),
        await ha(ij),
        t(gy.umg_widget_quest_disappear),
        await e.disappear(Fw),
        await e.applyLayout(!1));
}
async function Vj({ api: e, play: t, allCompletedCard: a }) {
    (t(gy.umg_widget_quest_complete_all),
        null == a || a.resetAnimations(),
        await e.appear([Hw], Bb.fadeIn),
        null == a || a.runAnimations(),
        await ha(ij));
}
function qj() {
    const { model: e, controls: t } = $w(),
        a = Db(),
        s = r.useRef(new Map()),
        n = e.quests.get(),
        i = r.useRef(),
        o = r.useRef([]),
        l = r.useRef(null),
        c = r.useRef(null),
        d = r.useRef(!1),
        u = r.useRef(!1),
        m = r.useRef(!1),
        p = ga(),
        { play: _ } = ee(),
        h = r.useRef(!1),
        g = r.useRef([]),
        [v, f] = r.useState(() => {
            const {
                data: e,
                allDailyCompleted: t,
                allCompleted: s,
                appeared: r,
            } = (function (e) {
                let t = !0,
                    a = !0;
                const s = [],
                    n = Lj(e, Vw.premium),
                    i = Lj(e, Vw.daily),
                    r = [];
                return (
                    Da(e, (e) => {
                        ((t = t && e.isCompleted && !e.animateCompletion),
                            qw.has(e.missionType) && (a = a && e.isCompleted && !e.animateCompletion),
                            ((e.missionType === Vw.premium && !e.isCompleted && n) ||
                                (e.missionType === Vw.bonus && !e.isCompleted && i)) &&
                                r.push(e.animationId),
                            s.push(e));
                    }),
                    { data: s.filter(Tj), allCompleted: t, allDailyCompleted: a, appeared: r }
                );
            })(n);
            return (
                (o.current = r),
                (i.current = n),
                (d.current = t),
                (u.current = s),
                g.current.push(
                    ...Bj({
                        data: e,
                        appearedPredicate: ({ animationId: e }) => r.includes(e),
                        api: a,
                        allDailyCompletedRef: d,
                        allCompletedRef: u,
                    }),
                ),
                e
            );
        }),
        b = Dt(async (e) => {
            const s = new Set();
            (v.forEach(({ animationId: e }) => {
                (a.updateCard(e, { visible: !1 }), s.add(e));
            }),
                e.forEach((e) => {
                    const t = e.isCompleted && e.animateCompletion;
                    a.updateCard(e.animationId, { visible: s.has(e.animationId) || t });
                }),
                t.markAsViewed(),
                f(e));
        }),
        y = Dt(async (e) => {
            var t;
            if (void 0 !== e.data) ((m.current = !1), await b(e.data), g.current.shift());
            else if (
                (await (null == (t = null == e ? void 0 : e.animationHandler)
                    ? void 0
                    : t.call(e, {
                          api: a,
                          questCardRefs: s.current,
                          allDailyCompletedCard: l.current,
                          allCompletedCard: c.current,
                          play: _,
                      })),
                g.current.shift(),
                g.current.length)
            ) {
                const e = g.current[0];
                await y(e);
            }
        });
    return (
        fy(p, () => {
            (!(function (e, t, a) {
                let s = !0;
                (e.forEach((e) => {
                    ((s = s && e.isCompleted && !e.animateCompletion),
                        a.updateCard(e.animationId, { visible: !t.includes(e.animationId) && Tj(e) }));
                }),
                    s && a.updateCard(Hw, { visible: !0 }));
            })(v, o.current, a),
                a.enqueue(async () => a.applyLayout()),
                t.markAsViewed());
        }),
        r.useEffect(() => {
            if (!q.structural(n, i.current)) {
                const e = (function (e) {
                        return new Map(st(e, (e) => [e.animationId, e]));
                    })(i.current),
                    t = (function (e, t) {
                        return st(e, (e) => {
                            var a;
                            return {
                                ...e,
                                animateCompletion:
                                    !(null == (a = t.get(e.animationId)) ? void 0 : a.isCompleted) && e.isCompleted,
                            };
                        }).filter(Tj);
                    })(n, e);
                g.current.push(
                    { data: t },
                    ...Bj({
                        data: t,
                        appearedPredicate: (t) => {
                            var a;
                            return (
                                !e.has(t.animationId) ||
                                (!0 === (null == (a = e.get(t.animationId)) ? void 0 : a.isCompleted) && !t.isCompleted)
                            );
                        },
                        api: a,
                        allDailyCompletedRef: d,
                        allCompletedRef: u,
                        previousMap: e,
                    }),
                    { data: t.filter(({ isCompleted: e }) => !e) },
                );
            }
            i.current = n;
        }, [n, a]),
        r.useEffect(() => {
            m.current = !0;
        }, [v]),
        r.useEffect(() => {
            !h.current &&
                m.current &&
                g.current.length &&
                ((h.current = !0),
                a
                    .enqueue(async () => await y(g.current[0]))
                    .then(() => {
                        h.current = !1;
                    }));
        }),
        { questData: v, questCardRefs: s, allDailyCompletedCardRef: l, allCompletedCardRef: c }
    );
}
const Wj = d(function () {
        const { controls: e } = $w(),
            { questData: t, questCardRefs: a, allDailyCompletedCardRef: s, allCompletedCardRef: n } = qj(),
            { play: i } = ee(),
            r = t.every((e) => e.isCompleted && !e.animateCompletion);
        return l.jsxs(l.Fragment, {
            children: [
                t.map((t, s) =>
                    l.jsx(
                        Cj,
                        {
                            position: Gw + s,
                            ...t,
                            onClick: () => {
                                t.isCompleted || (i('click'), e.onMissionClick(t.id));
                            },
                            ref: (e) => (e ? a.current.set(t.animationId, e) : a.current.delete(t.animationId)),
                        },
                        t.animationId,
                    ),
                ),
                l.jsx(Dj, { ref: s, id: Fw, position: 0 }),
                l.jsx(Dj, { ref: n, id: Hw, areAllQuestsDone: r, position: 1, onClick: () => e.onMissionClick(null) }),
            ],
        });
    }),
    Fj = { rootId: te.resolve('aliases').read((e) => e.user_missions.hangarWidget.Quests('resId')) };
function Hj() {
    return l.jsx(Rw, { options: Fj, children: l.jsx(Wj, {}) });
}
const Gj = 'HangarWidget_3b2c10a',
    Zj = te.resolve('aliases'),
    Uj = d(({ className: e }) => {
        const { model: t, controls: a } = zw(),
            s = t.isBattlePassActive.get(),
            n = t.isAnyEntryPointAvailable.get(),
            i = t.areMissionsActive.get(),
            o = (function (e) {
                const t = Db(),
                    a = r.useRef([]),
                    s = r.useRef(!1),
                    [n, i] = r.useState(e);
                return (
                    r.useEffect(() => {
                        q.shallow(n, e) || a.current.push(e);
                    }),
                    r.useEffect(() => {
                        if (s.current) return;
                        const e = a.current.shift();
                        if (!e) return;
                        s.current = !0;
                        const r = Lt(
                            Object.entries(e),
                            ([e, t]) => n[e] && !t,
                            ([e]) => e,
                        );
                        t.enqueue(async () => {
                            r.length && (await t.disappearGroups(r), await t.applyLayout(!1));
                        }).then(() => {
                            ((s.current = !1), i(e));
                        });
                    }),
                    n
                );
            })({ [Ob.battlePass]: s, [Ob.events]: n, [Ob.missions]: i }),
            d = r.useMemo(
                () => ({
                    [Zj.read((e) => e.user_missions.hangarWidget.BattlePass('resId'))]: [o.battlePass, s],
                    [Zj.read((e) => e.user_missions.hangarWidget.Events('resId'))]: [o.events, n],
                    [Zj.read((e) => e.user_missions.hangarWidget.Quests('resId'))]: [o.missions, i],
                }),
                [i, n, s, o.battlePass, o.events, o.missions],
            ),
            u = r.useRef(d);
        return (
            r.useEffect(() => {
                const e = u.current;
                (Object.keys(d).forEach((t) => {
                    const [s, n] = d[t],
                        [i] = e[t];
                    s || n || !i || a.onPresenterDisappear(t);
                }),
                    (u.current = d));
            }, [a, d]),
            ta(() => a.onWidgetUnmounted()),
            l.jsxs('div', {
                className: c(Gj, e),
                children: [
                    o.battlePass && l.jsx(Se, { children: l.jsx(KC, {}) }),
                    o.events && l.jsx(Se, { children: l.jsx(Bw, {}) }),
                    o.missions && l.jsx(Se, { children: l.jsx(Hj, {}) }),
                ],
            })
        );
    }),
    Kj = { rootId: te.resolve('aliases').read((e) => e.hangar.shared.UserMissions('resId')) },
    Qj = r.memo(function ({ className: e, maxVisibleRowsAmount: t, groups: a = Zb }) {
        return l.jsx(Aa, {
            soundsOverrides: vy,
            children: l.jsx(kb, {
                children: l.jsx(my, {
                    groups: a,
                    maxVisibleRowsAmount: t,
                    children: l.jsx(Ow, { options: Kj, children: l.jsx(Uj, { className: e }) }),
                }),
            }),
        });
    }),
    Jj = 'VehicleInfoWidget_b24b193a',
    Xj = 'VehicleInfoWidget_info_8571b16b',
    Yj = 'VehicleInfoWidget_info__active_e94ce8a',
    eN = 'VehicleInfoWidget_text_61df701f',
    tN = 'VehicleInfoWidget_role_462e1204',
    aN = 'VehicleInfoWidget_currency_73edca36',
    sN = 'VehicleInfoWidget_currencyIcon_59fc1b6d',
    nN = d(function () {
        const e = En().model.selectedVehicle(),
            t = En().model.selectedVehicleStatistics(),
            { breakpoint: a } = Pt(),
            s =
                ((n = null == e ? void 0 : e.vehicleId),
                Ba(
                    'vehicleRoles',
                    r.useMemo(() => [n], [n]),
                ));
        var n;
        if (e && t)
            return l.jsxs('div', {
                className: Jj,
                children: [
                    l.jsxs(de, {
                        ...(1 === e.role && s),
                        className: c(Xj, 1 === e.role && Yj),
                        children: [
                            l.jsx(de.Level, { className: eN, value: e.level }),
                            me(e.type) &&
                                l.jsx(de.Type, {
                                    type: e.type,
                                    premium: t.elite,
                                    size: a.weight <= ca.large.weight ? de.Type.sizes.x48x48 : de.Type.sizes.x64x64,
                                }),
                            l.jsx(de.Name, { className: eN, children: e.shortName }),
                            0 !== e.role &&
                                1 !== e.role &&
                                l.jsx(de.Role, {
                                    ...s,
                                    classNames: { base: tN },
                                    roleKey: $(e.role),
                                    size: de.Role.sizes.x16x16,
                                }),
                        ],
                    }),
                    l.jsx(X, {
                        classNames: { base: aN, icon: sN },
                        type: t.elite ? Oa.eliteXp : Oa.tankXP,
                        reverse: !0,
                        size: Q.extraSmall,
                        children: t.xp,
                    }),
                ],
            });
    }),
    iN = 'HangarScreen_261a5d2',
    rN = 'HangarScreen_sceneWrapper_c15ed7d7',
    oN = 'HangarScreen_vignette_50c67f89',
    lN = 'HangarScreen_hangarPage_51660504',
    cN = 'HangarScreen_vehicleInfo_db9a0c97',
    dN = 'HangarScreen_mainMenu_4e4165cc',
    uN = 'HangarScreen_userMissions_22518280',
    mN = te.resolve('aliases'),
    pN = mN.read((e) => e.hangar.shared.HeroTank('resId')),
    _N = { rootId: mN.read((e) => e.hangar.shared.MainMenu('resId')) },
    hN = d(function () {
        const e = -1 !== En().model.current.intCD.get();
        return l.jsxs('div', {
            className: iN,
            children: [
                l.jsx(ke, { id: pN, children: l.jsx(Bf, {}) }),
                l.jsx('div', { className: oN }),
                l.jsx(gb, { className: rN }),
                l.jsxs('div', {
                    className: lN,
                    children: [
                        e && l.jsx('div', { className: cN, children: l.jsx(nN, {}) }),
                        l.jsx(hb, { className: dN, options: _N }),
                        l.jsx(Se, { children: l.jsx(Qj, { className: uN }) }),
                    ],
                }),
            ],
        });
    }),
    gN = 'ConfirmationPanel_afa99a14',
    vN = 'ConfirmationPanel_currencies_7544112d',
    fN = 'ConfirmationPanel_plus_335af158',
    bN = 'ConfirmationPanel_buttons_ad07fa9b',
    yN = (e) => e > 0,
    xN = re('LeftBlock', 'ConfirmationPanel_leftBlock_798f4c44'),
    CN = re('Currencies', vN),
    wN = re('Buttons', bN),
    jN = re('ConfirmationPanel', gN);
function NN(e) {
    return l.jsx(CN, {
        className: e.className,
        children: r.Children.map(e.children, (e, t) =>
            l.jsxs(l.Fragment, { children: [yN(t) && l.jsx('div', { className: fN }), e] }),
        ),
    });
}
jN.Left = xN;
const IN = 'DealPanel_leftBlock_e9fb0b4a',
    SN = 'DealPanel_leftBlock__active_53e6aee9',
    kN = 'DealPanel_checkbox_c6267a54',
    PN = 'DealPanel_checkbox__active_edd6c82d',
    EN = 'DealPanel_checkboxLabel_7df5996',
    MN = 'DealPanel_icon_f0ce4668',
    DN = 'DealPanel_value_438c7871',
    TN = 'DealPanel_buttonWrapper_e6c7f6fe',
    LN = 'DealPanel_button_d186abe4',
    AN = 'DealPanel_buttonContent_25d6c73c';
function BN(e, t) {
    return t === Oa.gold ? Ra.formatNumber('gold', e) : Ra.formatNumber('integral', e);
}
const ON = r.memo(function ({ type: e, price: t }) {
        const a = Ie({ value: Q.small }, { large: { value: Q.medium } }),
            s = se({
                body: te.resolve('strings').readOrEmpty(`tank_setup.dealPanel.tooltip.purchasedWith.${t.currency}`),
            });
        return l.jsxs(X, {
            ...s,
            reverse: !0,
            type: e ?? 'formattedCurrency',
            size: a.value,
            classNames: { icon: MN, base: DN },
            enough: t.enough,
            children: [
                void 0 === e &&
                    l.jsx(ie, {
                        className: MN,
                        path: `library.currency.${t.currency}_${za[a.value]}x${za[a.value]}`,
                        width: za[a.value],
                        height: za[a.value],
                    }),
                BN(t.value, e),
            ],
        });
    }),
    zN = te.resolve('strings'),
    RN = 'general',
    $N = 'repair';
const VN = { [md]: 'boosters', [pd]: 'shells', [_d]: 'consumables' },
    qN = d(function ({ type: e, className: t }) {
        const a = Ie({ value: Zt.small }, { large: { value: Zt.medium } }),
            { model: s, controls: n } = lu(),
            { model: i, controls: o } = vu(),
            { model: d, controls: u } = _u(),
            { model: m, controls: p } = wu(),
            { controls: _, model: h } = (() => {
                switch (e) {
                    case ud:
                        return { controls: u, model: d };
                    case md:
                        return { controls: o, model: i };
                    case _d:
                        return { controls: n, model: s };
                    case pd:
                        return { controls: p, model: m };
                    default:
                        return (
                            console.error(`AmmunitionType ${e} is not supported`),
                            {
                                controls: {
                                    cancel: () => console.error(`AmmunitionType ${e} is not supported`),
                                    confirm: () => console.error(`AmmunitionType ${e} is not supported`),
                                    toggleAutoRenewal: () => console.error(`AmmunitionType ${e} is not supported`),
                                },
                                model: null,
                            }
                        );
                }
            })(),
            g = se({ body: zN.readOrEmpty('tank_setup.dealPanel.tooltip.notEnough') }),
            v = VN[e],
            f = se(
                r.useMemo(
                    () =>
                        v === $N
                            ? {
                                  header: zN.readOrEmpty(`tank_setup.tooltip.autoRenewal.header.${v}`),
                                  body: zN.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${v}`),
                              }
                            : v && v !== RN
                              ? {
                                    header: zN.readOrEmpty('tank_setup.tooltip.autoRenewal.header.general'),
                                    body: zN.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${v}`),
                                }
                              : {
                                    header: zN.readOrEmpty('tank_setup.tooltip.autoRenewal.header.general'),
                                    body: void 0,
                                },
                    [v],
                ),
            ),
            b = h ? h.computes.dealData() : null,
            y = !!h && (b.canConfirm || b.prices.length > 0),
            x = lt(y),
            C = void 0 !== v,
            w = ee();
        return (
            r.useEffect(() => {
                (y && !1 === x && w.play('expand', { target: 'loadout:deal-panel' }),
                    y || !0 !== x || w.play('collapse', { target: 'loadout:deal-panel' }));
            }, [w, y, x]),
            h && b
                ? l.jsxs(jN, {
                      className: t,
                      children: [
                          l.jsx(Gt, {
                              ...(C && f),
                              className: c(kN, v && PN),
                              classNames: { label: EN },
                              checked: C && b.autoRenewalEnabled,
                              size: a.value,
                              onCheckedChange: _.toggleAutoRenewal,
                              children: zN.readOrEmpty('tank_setup.dealPanel.autoRenew'),
                          }),
                          l.jsxs(jN.Left, {
                              className: c(IN, y && SN),
                              children: [
                                  l.jsx(NN, {
                                      children: b.prices.map((e, t) => {
                                          const a = (function (e) {
                                              if (e && Va.includes(e)) return e;
                                          })(e.currency);
                                          return l.jsx(ON, { type: a, price: e }, t);
                                      }),
                                  }),
                                  l.jsxs(wN, {
                                      children: [
                                          l.jsx('div', {
                                              ...(b.disabled && g),
                                              className: TN,
                                              children: l.jsx(be, {
                                                  className: LN,
                                                  classNames: { content: AN },
                                                  disabled: (!b.canConfirm || b.disabled) && y,
                                                  onClick: _.confirm,
                                                  theme: $a.primary,
                                                  size: a.value,
                                                  'data-test-id': 'dealPanelApply',
                                                  children: zN.readOrEmpty('tank_setup.dealPanel.button.apply'),
                                              }),
                                          }),
                                          l.jsx('div', {
                                              className: TN,
                                              children: l.jsx(be, {
                                                  className: LN,
                                                  classNames: { content: AN },
                                                  disabled: !b.canCancel,
                                                  onClick: _.cancel,
                                                  theme: $a.secondary,
                                                  size: a.value,
                                                  'data-test-id': 'dealPanelCancel',
                                                  soundTarget: 'loadout:deal-panel:cancel_button',
                                                  children: zN.readOrEmpty('tank_setup.dealPanel.button.cancel'),
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  })
                : null
        );
    }),
    WN = 'Counter_20fd03c5',
    FN = 'Counter_current_2e9b96d1',
    HN = 'Counter_total_7d9a1992';
function GN({ current: e, total: t, className: a }) {
    const s = te.resolve('intl');
    return l.jsx(Y, {
        className: c(WN, a),
        path: 'common.progress',
        upgradeLegacy: !0,
        split: !0,
        params: {
            current: l.jsx('span', { className: FN, children: s.formatNumber('integral', e) }),
            total: l.jsx('span', { className: HN, children: s.formatNumber('integral', t) }),
        },
    });
}
const ZN = 'Depot_dots_e22e1616',
    UN = 'Depot_ef85611',
    KN = 'Depot_value_929a2cc5',
    QN = 'Depot_value__name_243cc0f1',
    JN = 'Depot_value__count_c6469680',
    XN = 'Depot_valueContainer_7c59dac8',
    YN = 'Depot_slash_13b22cce',
    eI = te.resolve('strings'),
    tI = ({ inDepotCount: e, itemsInVehicle: t }) => {
        const a = t >= 0;
        return l.jsxs('div', {
            className: UN,
            children: [
                l.jsxs('div', {
                    className: c(KN, QN),
                    children: [
                        l.jsx(_e, { text: eI.readOrEmpty('tank_setup.shells.specification.inStorage') }),
                        a &&
                            l.jsxs(l.Fragment, {
                                children: [
                                    ' ',
                                    l.jsx(Y, { path: 'common.common.slash' }),
                                    ' ',
                                    l.jsx(_e, { text: eI.readOrEmpty('tank_setup.shells.specification.inVehicle') }),
                                    l.jsx('div', { className: XN }),
                                ],
                            }),
                    ],
                }),
                l.jsx('div', { className: ZN }),
                l.jsxs('div', {
                    className: c(KN, JN),
                    children: [
                        e,
                        a &&
                            l.jsxs(l.Fragment, {
                                children: [' ', l.jsx(Y, { path: 'common.common.slash', className: YN }), ' ', t],
                            }),
                    ],
                }),
            ],
        });
    },
    aI = 'Properties_dots_1fc83e37',
    sI = 'Properties_info_70496b7d',
    nI = 'Properties_metric_269f11b0',
    iI = 'Properties_value_a40606f7',
    rI = 'Properties_name_fc42a225',
    oI = 'Properties_truncatedName_d7486b0e',
    lI = te.resolve('strings'),
    cI = d(function ({ properties: e }) {
        return l.jsx(p.Fragment, {
            children: st(e, (e, t) =>
                l.jsx(
                    p.Fragment,
                    {
                        children:
                            e.value &&
                            l.jsxs('div', {
                                className: sI,
                                children: [
                                    l.jsxs('div', {
                                        className: rI,
                                        children: [
                                            l.jsx(_e, {
                                                className: oI,
                                                text: lI.readOrEmpty(`menu.tank_params.${e.paramName}`),
                                            }),
                                            l.jsx('div', { className: nI, children: e.metricValue }),
                                        ],
                                    }),
                                    l.jsx('div', { className: aI }),
                                    l.jsx('div', { className: iI, children: e.value }),
                                ],
                            }),
                    },
                    t,
                ),
            ),
        });
    }),
    dI = 'Purchase_dots_92cddd3b',
    uI = 'Purchase_4d1c4c41',
    mI = 'Purchase_name_ebddecd',
    pI = 'Purchase_truncatedName_374c53e5',
    _I = 'Purchase_price_fd7d4ed5',
    hI = 'Purchase_result_d6c831a6',
    gI = 'Purchase_value_98e07fc3',
    vI = 'Purchase_value__noPurchase_50a115b4',
    fI = 'Purchase_sign_28802c61',
    bI = 'Purchase_sign__multiplier_c1c45705',
    yI = 'Purchase_sign__equals_ad1fc9f4',
    xI = 'Purchase_discountWrapper_d6cbd188',
    CI = 'Purchase_discountWrapper__withoutDiscount_cd9710d2',
    wI = 'Purchase_icon_ae94fc41',
    jI = 'Purchase_icon__currency_9e808070',
    NI = 'Purchase_icon__withDiscount_b0aaff0',
    II = te.resolve('strings'),
    SI = d(({ shell: e }) => {
        const { boughtCount: t, totalPrice: a, price: s, itemPrice: n } = e,
            i = e.price.previousPrice[0],
            o = void 0 !== i,
            d = Ie({ value: Q.extraSmall }, { extraLarge: { value: Q.small } }),
            u = r.useMemo(() => (n && i ? [n.value, i.value, n.currency] : void 0), [n, i]),
            m = r.useMemo(() => ({ disabled: !o }), [o]),
            p = ne('priceDiscount', u, m);
        return l.jsxs('div', {
            className: uI,
            children: [
                l.jsx('div', {
                    className: mI,
                    children: l.jsx(_e, {
                        className: pI,
                        text: II.readOrEmpty('tank_setup.shells.specification.price'),
                    }),
                }),
                l.jsx('div', { className: dI }),
                l.jsxs('div', {
                    className: hI,
                    children: [
                        l.jsx('div', { className: c(gI, vI), children: t }),
                        l.jsx('div', { className: c(fI, bI), children: l.jsx(Y, { path: 'common.multiplierSmall' }) }),
                        l.jsxs('div', {
                            ...p,
                            className: _I,
                            children: [
                                s.price.map((e, t) =>
                                    l.jsx(
                                        K,
                                        {
                                            type: J.currency,
                                            enabled: o,
                                            size: d.value,
                                            classNames: { base: c(xI, !o && CI), discount: c(wI, o && NI) },
                                            children: l.jsx(X, {
                                                reverse: !0,
                                                size: Q.small,
                                                classNames: { base: gI, icon: c(wI, jI) },
                                                type: e.currency,
                                                enough: e.enough,
                                                children: e.value,
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                                l.jsx('div', {
                                    className: c(fI, yI),
                                    children: l.jsx(Y, { path: 'readable_key_names.KEY_EQUALS' }),
                                }),
                            ],
                        }),
                        t > 0
                            ? a.price.map((e, t) =>
                                  l.jsx(
                                      X,
                                      {
                                          reverse: !0,
                                          size: Q.small,
                                          classNames: { base: gI, icon: c(wI, jI) },
                                          type: e.currency,
                                          enough: e.enough,
                                          children: e.value,
                                      },
                                      t,
                                  ),
                              )
                            : l.jsx(X, {
                                  reverse: !0,
                                  size: Q.small,
                                  classNames: { base: c(gI, vI), icon: c(wI, jI) },
                                  type: Oa.credits,
                                  children: 0,
                              }),
                    ],
                }),
            ],
        });
    }),
    kI = 'Shell_fullArea_7aaeeab0',
    PI = 'Shell_controls_fbdd51bb',
    EI = 'Shell_dc4438ed',
    MI = 'Shell_mainInfo_cf4a5ca0',
    DI = 'Shell_icon_5ea0be74',
    TI = 'Shell_counter_ce287a95',
    LI = 'Shell_counter__dimmed_42079d5d',
    AI = 'Shell_name_bb3f6d10',
    BI = 'Shell_grow_fa2782e5',
    OI = 'Shell_detailedInfo_5686c3ac',
    zI = 'Shell_slider_4d24fb7c',
    RI = te.resolve('aliases'),
    $I = te.resolve('images'),
    VI = te.resolve('strings'),
    qI = te.resolve('intl'),
    WI = 'big',
    FI = 'large',
    HI = re('Shell', EI),
    GI = d(({ value: e, index: t }) => {
        const { model: a, controls: s } = wu(),
            n = a.ammoMaxSize.get() - a.installedCount.get() + e.count,
            i = qI.toUpperCase(VI.readOrEmpty(`item_types.shell.kinds.${e.kind}`)),
            o = ne(
                'hangarShell',
                r.useMemo(() => [e.intCD], [e.intCD]),
            ),
            d = he(
                'tankSetupShellItem',
                r.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: As,
                        fieldType: 0,
                        installedSlotId: t,
                        itemInstalledSetupIdx: e.itemInstalledSetupIndex,
                        itemInstalledSetupSlotIdx: t,
                        isMounted: e.mountedState !== fu.notMounted,
                        isMountedMoreThanOne: e.mountedState === fu.mountedMoreThanOne,
                        emitterUID: window.subViews.get(RI.read((e) => e.hangar.shared.Shells('resId'))).uid,
                    }),
                    [t, e.intCD, e.itemInstalledSetupIndex, e.mountedState],
                ),
            ),
            u = Ie({ value: WI }, { large: { value: FI } }),
            m = Ie({ value: qa.small }, { medium: { value: qa.medium } }),
            p = r.useCallback((e, t) => s.updateShellCount(e, t), [s]);
        return l.jsxs(HI, {
            children: [
                l.jsxs('div', {
                    ...o,
                    ...d,
                    className: MI,
                    children: [
                        l.jsx('div', {
                            className: DI,
                            style: { backgroundImage: `url(${$I.readOrEmpty(`shell.${u.value}.${e.type}`)})` },
                        }),
                        l.jsx('div', { className: c(TI, 0 === e.count && LI), children: e.count }),
                        l.jsx('div', { className: AI, children: i }),
                    ],
                }),
                l.jsxs(Wa, {
                    step: a.clip.get(),
                    className: zI,
                    value: e.count,
                    maxValue: a.ammoMaxSize.get(),
                    limit: n,
                    size: m.value,
                    onValueChange: (t) => p(e.intCD, t),
                    children: [
                        m.value === qa.medium && l.jsx(Wa.Controls, { className: PI }),
                        l.jsx(Wa.LimitationArea, { className: kI }),
                        l.jsx(Wa.Thumb, {}),
                        l.jsx(Wa.InteractiveArea, { className: kI }),
                    ],
                }),
                l.jsxs('div', {
                    className: OI,
                    children: [
                        l.jsx(cI, { properties: e.propertiesList }),
                        l.jsx('div', { className: BI }),
                        l.jsx(tI, { inDepotCount: e.inDepotCount, itemsInVehicle: e.itemsInVehicle }),
                        l.jsx(SI, { shell: e }),
                    ],
                }),
            ],
        });
    }),
    ZI = 'ShellTransition_e18df2a',
    UI = d(function ({ index: e, intCD: t, swapping: a, onAnimationEnd: s, onSwappingEnd: n, leftID: i }) {
        const [o, c] = r.useState(!1),
            { model: d } = wu(),
            u = d.computes.shellByIntCD(t),
            m = lt(null == u ? void 0 : u.intCD),
            p = i === e;
        r.useEffect(() => {
            m && m !== t && d.computes.shellExist(m) && c(!0);
        }, [t, m, d.computes]);
        const g = _({
            transform: a ? `translateX(${o ? (p ? 60 : -60) : 0}rem)` : 'translateX(0rem)',
            config: { duration: 200 },
            onRest: () => {
                a ? (n(), c(!1)) : s();
            },
        });
        if (u) return l.jsx(h.div, { className: ZI, style: g, children: l.jsx(GI, { value: u, index: e }) });
    }),
    KI = 'SwapButton_20088d5c',
    QI = 'SwapButton_icon_cd2823d0';
function JI({ index: e, onSwap: t }) {
    return l.jsx(be, {
        theme: be.themes.secondary,
        id: `swap-${e}`,
        onClick: function () {
            t(e);
        },
        className: KI,
        autoAlignContent: !1,
        children: l.jsx('div', { className: QI }),
    });
}
const XI = 'ShellsSetup_fc3cf257',
    YI = 'ShellsSetup_counter_107998e7',
    eS = 'ShellsSetup_container_eef616b1';
function tS(e, t) {
    if (!t) return -1;
    const a = e.find((e, a) => t[a] !== e);
    return void 0 !== a ? e.indexOf(a) : -1;
}
const aS = d(function () {
        const { model: e, controls: t } = wu(),
            a = e.computes.shellIDs(),
            s = lt(a),
            [n, i] = r.useState(!1),
            [o, c] = r.useState(tS(a, s));
        function d(e) {
            n || t.swapSlots({ leftID: e, rightID: e + 1 });
        }
        r.useEffect(() => {
            s && a !== s && s[0] && a.includes(s[0]) && (c(tS(a, s)), i(!0));
        }, [a, s]);
        const u = $t(() => Xt(), [], 150);
        function m() {
            i(!1);
        }
        return l.jsxs('div', {
            className: XI,
            children: [
                l.jsx(GN, { className: YI, current: e.installedCount.get(), total: e.ammoMaxSize.get() }),
                l.jsx('div', {
                    className: eS,
                    children: st(a, (t, s) =>
                        l.jsxs(
                            r.Fragment,
                            {
                                children: [
                                    e.computes.shellExist(t) &&
                                        l.jsx(UI, {
                                            index: s,
                                            intCD: t,
                                            onAnimationEnd: u,
                                            onSwappingEnd: m,
                                            leftID: o,
                                            swapping: n,
                                        }),
                                    s < a.length - 1 && l.jsx(JI, { index: s, onSwap: d }),
                                ],
                            },
                            s,
                        ),
                    ),
                }),
            ],
        });
    }),
    sS = { Standard: 'Standard', Bounty: 'Bounty', Improved: 'Improved', Experimental: 'Experimental' },
    nS = 'Equipment',
    iS = 'Crew',
    rS = {
        smallRepairkit: 1,
        smallMedkit: 2,
        handExtinguishers: 3,
        largeRepairkit: 4,
        builtinRepairkit: 5,
        largeMedkit: 6,
        autoExtinguishers: 7,
        qualityFuel: 8,
        excellentFuel: 9,
        ration: 10,
        chocolate: 11,
        cocacola: 12,
        hotCoffee: 13,
        ration_uk: 14,
        ration_czech: 15,
        ration_china: 16,
        ration_japan: 17,
        ration_poland: 18,
        ration_sweden: 19,
        ration_italy: 20,
    };
const oS = 'Action_ab2a2b2e',
    lS = 'Action_base__disabled_b9b41a41',
    cS = 'Action_button_4133ceee',
    dS = 'Action_icon_f3030341',
    uS = te.resolve('images'),
    mS = te.resolve('strings'),
    pS = ['cancel', 'undo'],
    _S = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`),
    hS = r.forwardRef(function (
        {
            actionType: e,
            imageSource: t,
            modernized: a,
            level: s,
            freeToDemount: n,
            disabledTooltipText: i,
            disabled: o = !1,
            tooltipBodyPath: d,
            className: u,
            onClick: m,
        },
        p,
    ) {
        const _ = a ? _S(e, s) : e,
            h = o && 'cancel' !== e,
            g = r.useMemo(
                () => ({
                    backgroundImage: `url(${t || uS.readOr(`loadout.actions.${_}`, () => uS.readOrEmpty(`tanksetup.actions.${_}`))})`,
                }),
                [_, t],
            );
        const v = se(
            r.useMemo(() => {
                if (h) return { body: i };
                const t = ((e, t, a, s) => (a ? 'demount_plus' : s ? _S(e, t) : e))(e, s, n, a);
                return {
                    header: mS.readOrEmpty(`tank_setup.tooltips.action.title.${t}`),
                    body: pS.includes(t) ? void 0 : mS.readOrEmpty(`tank_setup.tooltips.action.description.${d || t}`),
                };
            }, [e, h, i, n, a, s, d]),
        );
        return l.jsx('div', {
            ...v,
            className: c(oS, h && lS, u),
            children: l.jsx(be, {
                ref: p,
                autoAlignContent: !1,
                theme: $a.secondary,
                className: cS,
                disabled: h,
                'data-test-id': e,
                onClick: function (t) {
                    (t.stopPropagation(), h || m(e));
                },
                children: l.jsx('div', { className: dS, style: g }),
            }),
        });
    }),
    gS = {
        base: 'Actions_a97dca87',
        base__hidden: 'Actions_base__hidden_6a4e6a7d',
        'options-hide': 'Actions_options-hide_9b5544a9',
        base__shown: 'Actions_base__shown_b7ebaba7',
        'options-show': 'Actions_options-show_9b5544a9',
        actionItem: 'Actions_actionItem_7ebdfdac',
    },
    vS = te.resolve('strings');
function fS({ availableActions: e, buyMoreDisabled: t, onActionClick: a, className: s }) {
    return l.jsxs('div', {
        className: c(gS.base, gS['base__' + (e.length ? 'shown' : 'hidden')], s),
        children: [
            e.includes(Jd) &&
                l.jsx(hS, {
                    actionType: Jd,
                    disabled: t,
                    onClick: a,
                    className: gS.actionItem,
                    disabledTooltipText: vS.readOrEmpty('tank_setup.dealPanel.tooltip.notEnough'),
                }),
            e.includes(Fd) && l.jsx(hS, { actionType: Fd, onClick: a, className: gS.actionItem }),
            e.includes(Wd) && l.jsx(hS, { actionType: Wd, onClick: a, className: gS.actionItem }),
        ],
    });
}
function bS(e) {
    switch (e) {
        case Mu:
            return bt.directiveBooster;
        case Eu:
            return bt.directiveSubstitute;
        case Tu:
            return bt.builtInEquipment;
        case Du:
            return bt.improved;
        case Lu:
            return bt.experimental;
        case Su:
        case ku:
        case Pu:
            return bt.trophy;
        default:
            return bt.none;
    }
}
function yS(e, t, a) {
    const s = /(?:%\(|{)(\w*?)(?:_?[Oo]pen|_?Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*?(?:_?[Cc]lose|_?End)(?:\)s|})/g;
    let n = s.exec(e),
        i = e,
        r = 0;
    const o = {};
    for (; n; ) {
        const c = n[0],
            d = n[1] ?? '',
            u = n[2] ?? '',
            m = 'binding' + r++;
        ((i = i.replace(c, `{${m}}`)),
            (o[m] = l.jsx(xa, {
                style: { color: t[d], alignItems: 'flex-start' },
                upgradeLegacy: !0,
                text: u,
                params: a,
            })),
            (n = s.exec(e)));
    }
    return [i, o];
}
const xS = {
    base: 'Price_c00fc2b8',
    icon: 'Price_icon_10cf08bf',
    icon__reverse: 'Price_icon__reverse_74b70497',
    value: 'Price_value_7bb80c7b',
};
function CS({ price: e, previousPrice: t, withZeroValue: a, ignoreDiscount: s, valueFirst: n, priceSeparator: i }) {
    const o = Ie({ value: Q.extraSmall }, { small: { value: Q.small } });
    return l.jsx('div', {
        className: xS.base,
        children: e.map(
            ({ value: e, currency: d, enough: u }, m) =>
                (a || e > 0) &&
                l.jsxs(
                    r.Fragment,
                    {
                        children: [
                            m > 0 && i,
                            l.jsx(K, {
                                size: o.value,
                                enabled: !s && t.length > 0,
                                type: J.currency,
                                children: l.jsx(X, {
                                    type: d,
                                    reverse: n,
                                    enough: u,
                                    classNames: { icon: c(xS.icon, n && xS.icon__reverse), base: xS.value },
                                    children: e,
                                }),
                            }),
                        ],
                    },
                    m,
                ),
        ),
    });
}
const wS = {
    icon: 'Storage_icon_f8835a96',
    icon__reverse: 'Storage_icon__reverse_aada9c9e',
    value: 'Storage_value_693623a9',
};
function jS({ itemsInStorage: e, valueFirst: t }) {
    return l.jsx(X, {
        type: Oa.depot,
        reverse: t,
        size: Q.small,
        enough: Boolean(e),
        classNames: { base: wS.value, icon: c(wS.icon, t && wS.icon__reverse) },
        children: e,
    });
}
const NS = {
    base: 'Options_945d8a9e',
    base__hidden: 'Options_base__hidden_1ab7a478',
    'options-hide': 'Options_options-hide_6818b5da',
    base__shown: 'Options_base__shown_620b2679',
    'options-show': 'Options_options-show_6818b5da',
};
function IS({ price: e, mounted: t, possibleZeroCount: a, show: s, itemsInStorage: n, className: i }) {
    const r = n || a,
        o = ae('loadout.installed_on_vehicle', 'loadout.installed_on_vehicle_upscale');
    return l.jsx('div', {
        className: c(NS.base, NS['base__' + (s ? 'shown' : 'hidden')], i),
        children: t
            ? l.jsx(ie, { path: o, width: 24, height: 24 })
            : r
              ? l.jsx(jS, { itemsInStorage: n })
              : e && l.jsx(CS, { ...e, valueFirst: !0 }),
    });
}
const SS = 'LoadoutItem_49fa5e5c',
    kS = 'LoadoutItem_base__hoverless_a07e4977',
    PS = 'LoadoutItem_content_b29d68c8',
    ES = 'LoadoutItem_base__disabled_404624aa',
    MS = 'LoadoutItem_image_2b6b3694',
    DS = 'LoadoutItem_nameWrapper_ac53f36d',
    TS = 'LoadoutItem_name_f6b620d8',
    LS = 'LoadoutItem_specializations_8e86b08',
    AS = 'LoadoutItem_options_fe0297a6',
    BS = 'LoadoutItem_actions_bfa3b2fd',
    OS = 'LoadoutItem_text_aaa375b3',
    zS = 'LoadoutItem_text__short_192105ec',
    RS = 'LoadoutItem_extendedText_b7947978',
    $S = [Hd, Wd, Fd, qd],
    VS = re('ConsumablesItem', SS),
    qS = { colorTag: '#64ba21', whiteSpanish: 'rgba(var(--color-general-primary-rgb), 0.9)' },
    WS = function ({ intCD: e, selected: t, item: a, controls: s }) {
        const {
                name: n,
                imageName: i,
                overlayType: o,
                description: d,
                builtIn: u,
                buyMoreDisabled: m,
                installedSlotId: p,
                disabled: _,
                mounted: h,
                itemsInStorage: g,
                mountedInOtherSetup: v,
                price: f,
            } = a,
            b = p > -1,
            y = r.useMemo(() => {
                const e = new Set();
                return _ || !b ? e : (t || e.add(Hd), u || (e.add(Jd), (g > 0 || h) && !v ? e.add(Fd) : e.add(Wd)), e);
            }, [_, b, t, u, g, h, v]),
            x = r.useCallback(
                (t) => {
                    s.actionSlot({ actionType: t, intCD: e, currentSlotId: p });
                },
                [s, e, p],
            );
        const [C, w] = yS(d, qS);
        return l.jsx(VS, {
            className: c(_ && ES, ((o === Tu && t) || _) && kS),
            onClick: function () {
                if ((o === Tu && t) || _) return;
                const e = $S.find((e) => y.has(e));
                x(e || qd);
            },
            children: l.jsxs('div', {
                className: PS,
                children: [
                    l.jsx('div', {
                        className: MS,
                        children: l.jsx(kt, { name: i, overlayType: bS(o), size: kt.sizes.s180x135 }),
                    }),
                    l.jsx('div', { className: DS, children: l.jsx('div', { className: TS, children: n }) }),
                    l.jsx('div', {
                        className: c(OS, y.size > 0 && zS),
                        children: l.jsx(pa, { classMix: RS, text: C, binding: w, isTruncationAvailable: !0 }),
                    }),
                    l.jsx(IS, { show: 0 === y.size, itemsInStorage: g, mounted: h || v, price: f, className: AS }),
                    l.jsx(fS, { className: BS, onActionClick: x, buyMoreDisabled: m, availableActions: Array.from(y) }),
                ],
            }),
        });
    },
    FS = d((e) => {
        const { model: t, controls: a } = lu(),
            s = t.computes.consumableById(e.intCD);
        if (s) return l.jsx(WS, { ...e, item: s, controls: a });
    }),
    HS = te.resolve('images');
function GS({
    modernized: e,
    level: t,
    onActionClick: a,
    freeToDemount: s,
    mouseOverCard: n,
    installed: i,
    destroyTooltipBodyPath: r,
    availableActions: o,
    className: d,
}) {
    const u = (n || i) && o.includes(Qd),
        m = o.length && (o[0] !== Qd || u);
    return l.jsxs('div', {
        className: c(gS.base, gS['base__' + (m ? 'shown' : 'hidden')], d),
        children: [
            o.includes(Fd) && l.jsx(hS, { actionType: Fd, onClick: a, className: gS.actionItem }),
            o.includes(Wd) && l.jsx(hS, { actionType: Wd, onClick: a, className: gS.actionItem }),
            u && l.jsx(hS, { actionType: Qd, level: t, onClick: a, className: gS.actionItem, modernized: e }),
            o.includes(Gd) && l.jsx(hS, { actionType: Gd, onClick: a, className: gS.actionItem, freeToDemount: s }),
            o.includes(Zd) &&
                l.jsx(hS, {
                    actionType: Zd,
                    onClick: a,
                    className: gS.actionItem,
                    freeToDemount: s,
                    imageSource: HS.readOrEmpty('loadout.actions.demount'),
                }),
            o.includes(Ud) && l.jsx(hS, { actionType: Ud, onClick: a, className: gS.actionItem }),
            (e || !s) &&
                o.includes(Kd) &&
                l.jsx(hS, { actionType: Kd, onClick: a, className: gS.actionItem, modernized: e, tooltipBodyPath: r }),
        ],
    });
}
const ZS = 'mul',
    US = te.resolve('strings'),
    KS = { calcValue: 0, isPositive: !0, valueKey: 'default' };
function QS({ values: e, localeName: t }) {
    const a = vt(e, ({ valueKey: e }) => e === t).pop();
    if (!a) return KS;
    const { value: s, valueType: n, valueKey: i } = a,
        r = n === ZS ? 100 * (s - 1) : s;
    return { calcValue: r, isPositive: r > 0, valueKey: i };
}
function JS(e) {
    const { calcValue: t, isPositive: a, valueKey: s } = QS(e),
        n = a ? '+' : '',
        i = Fa(t, 1),
        r = US.readOrEmpty('tank_setup.kpi.bonus.valueTypes.default'),
        o = US.readOr(`tank_setup.kpi.bonus.valueTypes.${s}`, () => r);
    return `${n}${o !== r ? `${i} ${o}` : `${i}${o}`}`;
}
function XS(e, t = !1) {
    return t || QS(e).isPositive
        ? US.readOrEmpty(`tank_setup.kpi.bonus.positive.${e.localeName}`)
        : US.readOrEmpty(`tank_setup.kpi.bonus.negative.${e.localeName}`);
}
const YS = 'Bonuses_2e425c2b',
    ek = 'Bonuses_bonus_1137ce2e',
    tk = 'Bonuses_effect_9904936e',
    ak = 'Bonuses_text_544c53e1',
    sk = 'Bonuses_unit_dd3c8074',
    nk = 'Bonuses_base__special_ca1cd57b',
    ik = 'Bonuses_icon_bf2ddda6',
    rk = te.resolve('strings');
function ok({ effect: e, special: t, bonuses: a }) {
    const s = Ie({ value: e ? 2 : 3 }, { large: { value: e ? 3 : 4 } });
    return l.jsxs('div', {
        className: c(YS, t && nk),
        children: [
            e &&
                l.jsxs('div', {
                    className: ek,
                    children: [
                        l.jsxs('span', {
                            className: tk,
                            children: [l.jsx('span', { className: ik }), rk.readOrEmpty('tank_setup.effects.name')],
                        }),
                        l.jsx(_e, { text: e, className: ak }),
                    ],
                }),
            st(
                a.items,
                (e, t) =>
                    t < s.value &&
                    l.jsxs(
                        'div',
                        {
                            className: ek,
                            children: [
                                l.jsx('span', { className: sk, children: JS(e) }),
                                l.jsx(_e, { text: XS(e), className: ak }),
                            ],
                        },
                        t,
                    ),
            ),
        ],
    });
}
const lk = 'Specializations_c4673376',
    ck = 'Specializations_item_64ba5e4a',
    dk = 'Specializations_specializationType_b4c7a75d',
    uk = 'Specializations_inactiveIcon_45a44cf7',
    mk = re('Specializations');
function pk({ specializations: e, className: t }) {
    return l.jsx(mk, {
        className: c(lk, t),
        children: st(e, ({ name: e, correct: t }, a) =>
            l.jsx(
                'div',
                {
                    className: ck,
                    children: l.jsx(wm, {
                        specialization: e,
                        active: t,
                        classNames: { base: dk, inactiveIcon: t ? void 0 : uk },
                    }),
                },
                `${e}${a}`,
            ),
        ),
    });
}
function _k(e) {
    switch (e) {
        case 'equipmentTrophyBasic':
            return 1;
        case 'equipmentTrophyUpgraded':
            return 2;
        default:
            return 0;
    }
}
const hk = re('EquipmentsItem', SS),
    gk = function ({ intCD: e, selected: t, item: a, controls: s }) {
        const {
                activeSpecsMask: n,
                name: i,
                imageName: o,
                specializations: d,
                level: u,
                effect: m,
                bonuses: p,
                trophy: _,
                overlayType: h,
                modernized: g,
                installedSlotId: v,
                disabled: f,
                mounted: b,
                mountedMoreThanOne: y,
                itemsInStorage: x,
                mountedInOtherSetup: C,
                upgradable: w,
                freeToDemount: j,
                lockReason: N,
                destroyTooltipBodyPath: I,
                price: S,
            } = a,
            k = v > -1,
            P = Ha(),
            E = f && 'similar_device_already_installed' === N,
            { availableActions: M } = r.useMemo(() => {
                const e = new Set();
                var a;
                return (
                    k &&
                        !f &&
                        (t || e.add(Hd),
                        b
                            ? (((a = y), a ? [Zd, Ud] : [Gd]).forEach((t) => {
                                  e.add(t);
                              }),
                              e.add(Kd))
                            : e.add(((e, t, a) => ((e > 0 || t) && !a ? Fd : Wd))(x, b, C))),
                    w && !f && e.add(Qd),
                    { availableActions: e }
                );
            }, [k, f, w, t, b, y, x, C]),
            D = r.useCallback(
                (t) => {
                    s.actionSlot({ actionType: t, intCD: e, currentSlotId: v });
                },
                [s, e, v],
            ),
            T = r.useCallback(() => {
                if (f) return;
                const e = M.values().next().value;
                D(void 0 !== e && e !== Qd ? e : qd);
            }, [M, D, f]),
            L = M.values().next().value;
        return l.jsx(hk, {
            className: c(f && ES, f && kS),
            onClick: T,
            children: l.jsxs('div', {
                className: PS,
                children: [
                    l.jsx('div', {
                        className: MS,
                        children: l.jsx(kt, {
                            name: o,
                            overlayType: bS(h),
                            size: kt.sizes.s180x135,
                            level: _ ? _k(h) : u,
                        }),
                    }),
                    l.jsx('div', { className: DS, children: l.jsx('div', { className: TS, children: i }) }),
                    p && l.jsx(ok, { effect: m ?? void 0, bonuses: p, special: n > 0 }),
                    l.jsx(IS, {
                        mounted: b || C,
                        itemsInStorage: x,
                        price: S,
                        possibleZeroCount: _ || g,
                        className: AS,
                        show: 0 === M.size || (L === Qd && !P.hover && !P.selected && !k),
                    }),
                    l.jsx(GS, {
                        className: BS,
                        modernized: g,
                        level: u,
                        onActionClick: D,
                        availableActions: Array.from(M),
                        freeToDemount: j,
                        installed: k,
                        mouseOverCard: P.hover || P.selected,
                        destroyTooltipBodyPath: I,
                    }),
                    !E && l.jsx(pk, { specializations: d.specializations, className: LS }),
                ],
            }),
        });
    },
    vk = d((e) => {
        const { model: t, controls: a } = _u(),
            s = t.computes.equipmentsItemByIntCD(e.intCD, e.type);
        if (s) return l.jsx(gk, { ...e, item: s, controls: a });
        console.error('Unable to render equipment item', e.intCD, e.type);
    }),
    fk = re('InstructionsItem', SS),
    bk = { Equipment: 'equipmentInstructions', Crew: 'crewInstructions' },
    yk = { colorTag: '#64ba21', whiteSpanish: 'rgba(var(--color-general-primary-rgb), 0.9)' },
    xk = function ({ intCD: e, item: t, controls: a }) {
        const {
                name: s,
                imageName: n,
                overlayType: i,
                description: o,
                buyMoreVisible: d,
                buyMoreDisabled: u,
                installedSlotId: m,
                disabled: p,
                mounted: _,
                itemsInStorage: h,
                mountedInOtherSetup: g,
                price: v,
            } = t,
            f = m > -1,
            b = r.useMemo(() => {
                const e = new Set();
                return (p || !f || (d && e.add(Jd), (h > 0 || _) && !g ? e.add(Fd) : e.add(Wd)), e);
            }, [p, f, d, h, _, g]),
            y = r.useCallback(
                (t) => {
                    a.actionSlot({ actionType: t, intCD: e, currentSlotId: m });
                },
                [a, e, m],
            ),
            x = r.useCallback(() => {
                b.has(Wd) ? y(Wd) : b.has(Fd) ? y(Fd) : y(qd);
            }, [b, y]),
            [C, w] = yS(o, yk);
        return l.jsx(fk, {
            className: c(p && ES),
            onClick: x,
            children: l.jsxs('div', {
                className: PS,
                children: [
                    l.jsx('div', {
                        className: MS,
                        children: l.jsx(kt, { name: n, overlayType: bS(i), size: kt.sizes.s180x135 }),
                    }),
                    l.jsx('div', { className: DS, children: l.jsx('div', { className: TS, children: s }) }),
                    l.jsx('div', {
                        className: c(OS, b.size > 0 && zS),
                        children: l.jsx(pa, { classMix: RS, text: C, binding: w, isTruncationAvailable: !0 }),
                    }),
                    l.jsx(IS, { show: 0 === b.size, itemsInStorage: h, mounted: _ || g, price: v, className: AS }),
                    l.jsx(fS, { className: BS, onActionClick: y, buyMoreDisabled: u, availableActions: Array.from(b) }),
                ],
            }),
        });
    },
    Ck = d((e) => {
        const { model: t, controls: a } = vu(),
            s = e.type && t.computes.instructionByIntCD(e.intCD, e.type);
        if (s) return l.jsx(xk, { ...e, item: s, controls: a });
    });
const wk = { card: 'AmmunitionCard_card_2bd54c54' },
    jk = te.resolve('aliases');
const Nk = d(function ({ card: e, type: t, currentTab: a, className: s }) {
        const { model: n } = Md(),
            {
                mounted: i,
                disabled: o,
                installedSlotId: c,
                intCD: d,
                lockReason: u,
                locked: m,
                mountedMoreThanOne: p,
                itemInstalledSetupIdx: _,
                itemInstalledSetupSlotIdx: h,
            } = e,
            g = n.selectedSlot.get(),
            v = m ? Ua.alert : -1 !== c ? Ua.done : void 0,
            f = -1 !== c && g === c,
            b = !i && -1 !== c && g !== c,
            y = ne(
                t === md ? 'battleBoosterBlock' : 'hangarCardModule',
                r.useMemo(() => [d, g], [d, g]),
                r.useMemo(() => ({ resId: jk.read((e) => e.hangar.shared.Loadout('resId')) }), []),
            ),
            x = nt({
                resId: jk.read((e) => e.hangar.shared.Loadout('resId')),
                args: r.useMemo(() => ({ intCD: d, slotId: g, slotType: _d, tooltipId: 'hangarCardModule' }), [d, g]),
            }),
            C = r.useMemo(
                () =>
                    (function (e, t, a, s, n, i, r, o) {
                        const { id: l, ...c } = (() => {
                            switch (e) {
                                case _d:
                                    return {
                                        id: -1 === t ? 'tankSetupConsumableItem' : 'tankSetupConsumableSlot',
                                        slotType: dd.Consumables,
                                        emitterUID: window.subViews.get(
                                            jk.read((e) => e.hangar.shared.Consumables('resId')),
                                        ).uid,
                                    };
                                case md:
                                    return {
                                        id: -1 === t ? 'tankSetupBattleBoosterItem' : 'tankSetupBattleBoosterSlot',
                                        slotType: dd.BattleBoosters,
                                        emitterUID: window.subViews.get(
                                            jk.read((e) => e.hangar.shared.Instructions('resId')),
                                        ).uid,
                                    };
                                default:
                                    return {
                                        id: -1 === t ? 'tankSetupOptionalDeviceItem' : 'tankSetupOptionalDeviceSlotWW',
                                        slotType: dd.Equipment,
                                        emitterUID: window.subViews.get(
                                            jk.read((e) => e.hangar.shared.Equipments('resId')),
                                        ).uid,
                                    };
                            }
                        })();
                        return {
                            id: l,
                            args: {
                                ...c,
                                isDisabled: a,
                                fieldType: 0,
                                intCD: s,
                                installedSlotId: t,
                                itemInstalledSetupSlotIdx: n,
                                itemInstalledSetupIdx: i,
                                isMounted: r,
                                isMountedMoreThanOne: o,
                            },
                        };
                    })(t, c, o, d, h, _, i, p),
                [t, c, o, d, h, _, i, p],
            ),
            w = t === _d ? x : y,
            j = he(C.id, C.args),
            N = (function ({ intCD: e, selected: t, ammunitionType: a, currentTab: s = '' }) {
                switch (a) {
                    case ud: {
                        const a = Ga(hd, s);
                        return a ? l.jsx(vk, { intCD: e, selected: t, type: a }) : null;
                    }
                    case _d:
                        return l.jsx(FS, { intCD: e, selected: t });
                    case md: {
                        const t = Ga(bk, s);
                        return t ? l.jsx(Ck, { intCD: e, type: t }) : null;
                    }
                    default:
                        return null;
                }
            })({ intCD: d, selected: f, ammunitionType: t, currentTab: a });
        if (N)
            return l.jsx('div', {
                ...w,
                className: s,
                children: l.jsx(Za, {
                    ...j,
                    className: wk.card,
                    classNames: { status: { icon: wk.statusIcon } },
                    status: v,
                    statusReason: t !== _d ? u : void 0,
                    active: b,
                    selected: f,
                    disabled: o,
                    'data-test-id': d,
                    children: N,
                }),
            });
    }),
    Ik = {
        scrollContainer: 'Content_scrollContainer_c90e13ef',
        scrollWrapper: 'Content_scrollWrapper_249a7ad2',
        scrollContainer__top: 'Content_scrollContainer__top_da09528a',
        scrollContainer__bottom: 'Content_scrollContainer__bottom_da09528a',
        scrollContainer__both: 'Content_scrollContainer__both_da09528a',
        scrollContent: 'Content_scrollContent_967e8cf4',
        container: 'Content_container_41594150',
        card: 'Content_card_70d8499',
        statusIcon: 'Content_statusIcon_de80483f',
        verticalBar: 'Content_verticalBar_17a90908',
    };
function Sk({ cards: e, currentTab: t, type: a }) {
    const s = Ka();
    return (
        r.useEffect(() => $e(s.recalculate), [null == e ? void 0 : e.length, s.recalculate]),
        l.jsx(l.Fragment, {
            children: e.map((e) => l.jsx(Nk, { className: Ik.card, card: e, type: a, currentTab: t }, e.intCD)),
        })
    );
}
const kk = {
        base: 'Introduction_7257ae29',
        description: 'Introduction_description_7c2607f0',
        title: 'Introduction_title_7e63aa60',
        message: 'Introduction_message_845b2bb5',
        currency: 'Introduction_currency_1092ef06',
        icon: 'Introduction_icon_740fcef0',
        'icon__currency-modernized': 'Introduction_icon__currency-modernized_1dfb6dcf',
    },
    Pk = { [sS.Bounty]: 'trophy', [sS.Experimental]: 'modernized' };
function Ek({ introductionType: e }) {
    const t = Pk[e],
        a = te.resolve('strings');
    return l.jsx(Y, {
        split: !0,
        upgradeLegacy: !0,
        params: {
            currencyName:
                e !== sS.Bounty
                    ? l.jsx('span', {
                          className: kk.currency,
                          children: a.readOrEmpty(`tank_setup.introduction.currency.${t}`),
                      })
                    : '',
            currencyIcon: l.jsx('span', { className: c(kk.icon, kk[`icon__currency-${t}`]) }),
        },
        path: `tank_setup.introduction.message.${t}`,
        className: kk.message,
    });
}
const Mk = { [sS.Bounty]: 'trophy', [sS.Experimental]: 'modernized' },
    Dk = { [sS.Bounty]: 'modules.trophyOverlay', [sS.Experimental]: 'modules.modernizedOverlay' };
function Tk({ introductionType: e }) {
    const t = te.resolve('strings').readOrEmpty(`tank_setup.introduction.title.withoutEquipments.${Mk[e]}`),
        a = Dk[e];
    return l.jsxs('div', {
        className: kk.base,
        children: [
            l.jsx(ie, {
                path: a,
                width: 350,
                height: 250,
                adaptive: { large: { width: 600, height: 450, path: `${a}Big` } },
            }),
            l.jsxs('div', {
                className: kk.description,
                children: [l.jsx('div', { className: kk.title, children: t }), l.jsx(Ek, { introductionType: e })],
            }),
        ],
    });
}
const Lk = 'top',
    Ak = 'bottom',
    Bk = 'both',
    Ok = 'none';
const zk = d(function ({ currentTab: e, type: t, className: a }) {
    const [s, n] = p.useState(Ok),
        { api: i } = Re();
    p.useLayoutEffect(() => {
        const e = () => {
            const e = i.getContainerSize() ?? 0,
                t = i.getWrapperSize() ?? 0,
                a = i.animationScroll.scrollPosition.get();
            n(
                (function (e, t, a) {
                    return e <= t ? Ok : a <= 10 ? Ak : t + a >= e - 10 ? Lk : Bk;
                })(e, t, a),
            );
        };
        return (
            i.events.on('change', e),
            i.events.on('recalculateContent', e),
            i.events.on('resizeHandled', e),
            () => {
                (i.events.off('resizeHandled', e), i.events.off('change', e), i.events.off('recalculateContent', e));
            }
        );
    }, [i]);
    const r = lt(e),
        o = lt(t),
        d = Dt(() => {
            ((o && t !== o) || (t === ud && r && e !== r)) && i.applyScroll(0, { immediate: !0 });
        });
    p.useEffect(() => {
        d();
    }, [d, t, e]);
    const u = (function (e, t) {
        const { model: a } = lu(),
            { model: s } = vu(),
            { model: n } = _u();
        switch (e) {
            case _d:
                return a.computes.consumables().sort((e, t) => (rS[e.itemName] ?? 1 / 0) - (rS[t.itemName] ?? 1 / 0));
            case md:
                switch (t) {
                    case nS:
                        return s.equipmentInstructionsArray.get();
                    case iS:
                        return s.crewInstructionsArray.get();
                }
                break;
            case ud:
                switch (t) {
                    case sS.Standard:
                        return n.computes.filteredStandardEquipments();
                    case sS.Bounty:
                        return n.bountyEquipments.get();
                    case sS.Improved:
                        return n.improvedEquipments.get();
                    case sS.Experimental:
                        return n.experimentalEquipments.get();
                }
        }
        return [];
    })(t, e);
    return l.jsxs('div', {
        className: c(Ik.scrollContainer, Ik[`scrollContainer__${s}`], a),
        children: [
            l.jsx(Ve, {
                classNames: { wrapper: Ik.scrollWrapper, content: Ik.scrollContent },
                children:
                    u && 0 !== u.length
                        ? l.jsx(Qa, {
                              className: Ik.container,
                              trashhold: `${t}-${e}`,
                              children: l.jsx(Sk, { cards: u, currentTab: e, type: t }),
                          })
                        : t !== ud || (e !== sS.Experimental && e !== sS.Bounty)
                          ? void 0
                          : l.jsx(Tk, { introductionType: e }),
            }),
            l.jsx(He, { classNames: { base: Ik.verticalBar } }),
        ],
    });
});
function Rk(e) {
    return l.jsx(Fe, { children: l.jsx(zk, { ...e }) });
}
const $k = 'SpecializationFilter_48673c87',
    Vk = 'SpecializationFilter_content_f790a5c2',
    qk = te.resolve('strings'),
    Wk = {
        [gd.Firepower]: 'loadout:ammunition_setup:specialization-filter:firepower',
        [gd.Survivability]: 'loadout:ammunition_setup:specialization-filter:survivability',
        [gd.Stealth]: 'loadout:ammunition_setup:specialization-filter:stealth',
        [gd.Mobility]: 'loadout:ammunition_setup:specialization-filter:mobility',
    },
    Fk = d(function ({ specialization: e, className: t }) {
        const a = ee(),
            { model: s, controls: n } = _u(),
            i = s.standardEquipmentsFilters.get().has(e),
            o = lt(i),
            d = se({
                header: qk.readOrEmpty(`tank_setup.categories.${e}`),
                body: qk.readOrEmpty(`tank_setup.categories.body.${e}`),
            }),
            u = $t(() => n.updateFilters(e), [n, e], 400);
        return (
            r.useEffect(() => {
                (i && !1 === o && a.play('on', { target: Wk[e] }),
                    i || !0 !== o || a.play('off', { target: 'loadout:ammunition_setup:specialization-filter' }));
            }, [i, o, a, e]),
            l.jsx(Ze, {
                ...d,
                className: c($k, t),
                classNames: { content: Vk },
                fullSizeContent: !0,
                theme: Ke.primary,
                size: Ue.extraSmall,
                activated: i,
                onClick: u,
                children: l.jsx(wm, { specialization: e, active: i }),
            })
        );
    }),
    Hk = te.resolve('aliases'),
    Gk = te.resolve('views'),
    Zk = te.resolve('intl'),
    Uk = 'simple',
    Kk = 'trophy',
    Qk = 'deluxe',
    Jk = 'modernized',
    Xk = { [sS.Standard]: Uk, [sS.Bounty]: Kk, [sS.Improved]: Qk, [sS.Experimental]: Jk };
function Yk({ id: e, label: t, className: a }) {
    const s = Xk[e],
        n = ue(
            r.useMemo(
                () => ({
                    contentId: Gk.read((e) => e.lobby.tanksetup.tooltips.SetupTabTooltipView('resId')),
                    resId: Hk.read((e) => e.hangar.shared.Equipments('resId')),
                    disabled: !s,
                    args: { name: s },
                }),
                [s],
            ),
        );
    return l.jsx(Ja.Tab, { ...(s && n), tabId: e, className: a, children: l.jsx(_e, { text: Zk.toUpperCase(t) }) });
}
const eP = 'TabsNavigation_tabsNavigation_f7e0f60f',
    tP = 'TabsNavigation_tabsSwitcher_d52f26be',
    aP = 'TabsNavigation_tab_48ab20da',
    sP = 'TabsNavigation_tab__active_676bc101',
    nP = ({ tabsList: e, activeTab: t, theme: a, size: s, onChangeActiveTab: n, className: i, ...r }) =>
        l.jsx('div', {
            className: c(eP, i),
            children: l.jsx(Ja, {
                ...r,
                active: t,
                theme: a,
                size: s,
                onActiveChange: (e) => n(String(e)),
                children: l.jsx(Ja.Switcher, {
                    className: tP,
                    children: e.map(({ id: e, label: a }) =>
                        l.jsx(Yk, { id: e, label: a, className: c(aP, t === a && sP) }, e),
                    ),
                }),
            }),
        }),
    iP = {
        workbenchPanel: 'WorkbenchPanel_workbenchPanel_f8c32bc5',
        currency: 'WorkbenchPanel_currency_7d4b8be',
        button: 'WorkbenchPanel_button_853070e2',
        buttonContent: 'WorkbenchPanel_buttonContent_24857913',
    },
    rP = te.resolve('strings'),
    oP = d(({ className: e }) => {
        const { model: t, controls: a } = _u(),
            s = ne('equipCoinInfo'),
            n = se({
                body: t.hasExperimentalEquipmentToDisassemble.get()
                    ? rP.readOrEmpty('tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.notDisabled.text')
                    : rP.readOrEmpty('tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.disabled.text'),
            });
        return l.jsxs('div', {
            className: c(iP.workbenchPanel, e),
            children: [
                l.jsx(X, {
                    ...s,
                    reverse: !0,
                    type: Oa.equipCoin,
                    classNames: { base: iP.currency, icon: iP.currencyIcon },
                    children: t.equipCoinCount.get(),
                }),
                l.jsx('div', {
                    ...n,
                    children: l.jsx(be, {
                        className: iP.button,
                        classNames: { content: iP.buttonContent },
                        disabled: !t.hasExperimentalEquipmentToDisassemble.get(),
                        theme: be.themes.secondary,
                        size: be.sizes.small,
                        onClick: t.hasExperimentalEquipmentToDisassemble.get() ? a.getMoreCurrency : void 0,
                        children: rP.readOrEmpty('tank_setup.experimentalEquipCoinBlock.name'),
                    }),
                }),
            ],
        });
    }),
    lP = 'AmmunitionSetup_14321dac',
    cP = 'AmmunitionSetup_ammunitionHeader_7df5ac92',
    dP = 'AmmunitionSetup_dealPanel_64ad50ed',
    uP = 'AmmunitionSetup_tabsNavigation_4504ff3c',
    mP = 'AmmunitionSetup_tabsNavigation__hidden_a99bfa94',
    pP = 'AmmunitionSetup_specializationFilters_35de8d81',
    _P = 'AmmunitionSetup_specializationFilter_38bef0cf',
    hP = {
        [ud]: [
            { id: sS.Standard, labelKey: 'tank_setup.tabs.simple' },
            { id: sS.Bounty, labelKey: 'tank_setup.tabs.trophy' },
            { id: sS.Improved, labelKey: 'tank_setup.tabs.deluxe' },
            { id: sS.Experimental, labelKey: 'tank_setup.tabs.modernized' },
        ],
        [md]: [
            { id: nS, labelKey: 'tank_setup.tabs.optDevice' },
            { id: iS, labelKey: 'tank_setup.tabs.crew' },
        ],
    },
    gP = { [ud]: sS.Standard, [md]: nS },
    vP = te.resolve('strings');
function fP(e) {
    switch (e) {
        case Mu:
            return nS;
        case Eu:
            return iS;
        case Du:
            return sS.Improved;
        case Lu:
            return sS.Experimental;
        case Su:
        case ku:
        case Pu:
            return sS.Bounty;
        default:
            return;
    }
}
const bP = Object.values(gd),
    yP = d(function ({ type: e }) {
        const t = ee(),
            { model: a } = Md(),
            { controls: s } = _u(),
            { groupIndex: n, item: i } = a.computes.selectedSlotGroupAndItem(),
            o = a.selectedSlot.get(),
            d = a.selectedSection.get(),
            u = r.useRef(!1),
            m = r.useRef(),
            [p, _] = r.useState(fP(null == i ? void 0 : i.type) || gP[e]),
            h = lt(o),
            g = lt(d),
            v = lt(n),
            f = lt(p),
            b = lt(e);
        (r.useEffect(() => {
            (g !== d || (i && (h !== o || n !== v))) && _(fP(null == i ? void 0 : i.type) || gP[e]);
        }, [h, g, v, i, o, d, n, e]),
            r.useEffect(() => {
                s.clearFilters();
            }, [e, s]),
            r.useEffect(() => {
                if ((p !== f && p && f) || (e !== b && e && b)) {
                    if (u.current) return;
                    ((u.current = !0),
                        (m.current = setTimeout(() => (u.current = !1), 100)),
                        t.play('switch', { target: 'loadout:ammunition_setup' }));
                }
            }, [p, f, e, b, t]),
            ta(() => clearTimeout(m.current)));
        const y = r.useMemo(
                () =>
                    (function (e) {
                        var t;
                        return (
                            (null == (t = hP[e])
                                ? void 0
                                : t.map(({ id: e, labelKey: t }) => ({ id: e, label: vP.readOrEmpty(t) }))) ?? []
                        );
                    })(e),
                [e],
            ),
            x = Ie({ size: Ya.small }, { large: { size: Ya.medium }, extraLarge: { size: Ya.large } });
        return l.jsxs('div', {
            className: lP,
            children: [
                e === pd
                    ? l.jsx(aS, {})
                    : l.jsxs(l.Fragment, {
                          children: [
                              l.jsxs('div', {
                                  className: cP,
                                  children: [
                                      l.jsx(nP, {
                                          tabsList: y,
                                          activeTab: p ?? '',
                                          onChangeActiveTab: (e) => _(e),
                                          theme: Xa.primary,
                                          size: x.size,
                                          className: c(uP, 0 === y.length && mP),
                                      }),
                                      (() => {
                                          switch (p) {
                                              case sS.Standard:
                                                  return l.jsx('div', {
                                                      className: pP,
                                                      children: bP.map((e, t) =>
                                                          l.jsx(Fk, { specialization: e, className: _P }, t),
                                                      ),
                                                  });
                                              case sS.Experimental:
                                                  return l.jsx(oP, {});
                                          }
                                      })(),
                                  ],
                              }),
                              l.jsx(Rk, { currentTab: p, type: e }),
                          ],
                      }),
                l.jsx(qN, { className: dP, type: e }),
            ],
        });
    }),
    xP = 'LoadoutScreen_b66d9141',
    CP = 'LoadoutScreen_info_1918746a';
te.resolve('images');
const wP = te.resolve('aliases');
function jP(e, t) {
    return { options: { rootId: t.read(e) } };
}
const NP = new Mt()
    .addWithProps(
        ou,
        jP((e) => e.hangar.shared.Consumables('resId'), wP),
    )
    .addWithProps(
        gu,
        jP((e) => e.hangar.shared.Instructions('resId'), wP),
    )
    .addWithProps(
        pu,
        jP((e) => e.hangar.shared.Equipments('resId'), wP),
    )
    .addWithProps(
        Ed,
        jP((e) => e.hangar.shared.Loadout('resId'), wP),
    )
    .addWithProps(
        Cu,
        jP((e) => e.hangar.shared.Shells('resId'), wP),
    );
function IP(e) {
    const t = Pe();
    je(we.ESCAPE, () => {
        t.push(vo, void 0);
    });
    const { page: a } = e.params;
    return l.jsx(Bc, {
        classNames: { base: xP, info: CP },
        children: void 0 !== a && NP.render(l.jsx(yP, { type: a })),
    });
}
const SP = 'Page_a6334dd1',
    kP = 'Page_base__background_6f7bec7d',
    PP = 'Page_loadoutPanel_86e95aaa',
    EP = 'Page_carousel_2e3eb473',
    MP = 'Page_carousel__double_b4782e51',
    DP = 'Page_carouselButtons_4148fb',
    TP = 'Page_filterPopover_f4402d4f',
    LP = 'Page_filterTrigger_9d14c53b',
    AP = 'Page_filterTriggerContent_fe0f376c',
    BP = 'Page_teaserWidget_f4a2cdac',
    OP = { rootId: te.resolve('aliases').read((e) => e.hangar.shared.Teaser('resId')) },
    zP = [fo.equipments, fo.instructions, fo.shells, fo.consumables, bo, vo],
    RP = [bo, vo],
    $P = d(function () {
        const e = Pe(),
            t = vn(),
            a = En().model.selectedVehicle(),
            s = t.model.carouselRowCount.get(),
            n = void 0 === a,
            i = zP.includes(e.location) && !n,
            o = RP.includes(e.location) && !n,
            d = e.location === vo,
            u = !d;
        return (
            r.useLayoutEffect(() => {
                es(!0);
            }),
            l.jsx(l.Fragment, {
                children: l.jsxs('div', {
                    className: c(SP, u && kP),
                    children: [
                        l.jsxs(ts, {
                            children: [
                                l.jsx(as, { path: vo, component: hN, exact: !0 }),
                                l.jsx(as, { path: `${fo.root}/:page`, component: IP }),
                                l.jsx(as, { path: yo, component: Ef }),
                                l.jsx(as, { path: bo, component: ad }),
                            ],
                        }),
                        o && l.jsx(qg, { screenModeEnabled: e.location.endsWith(bo) }),
                        i && l.jsx(Oh, { className: PP, screenModeEnabled: !d }),
                        d &&
                            l.jsxs('div', {
                                className: c(EP, s === Ws && MP),
                                children: [
                                    l.jsx(ar, { className: BP, options: OP }),
                                    l.jsxs('div', {
                                        className: DP,
                                        children: [
                                            l.jsx(ho, { classNames: { base: TP, trigger: LP, triggerContent: AP } }),
                                            l.jsx(rr, {}),
                                        ],
                                    }),
                                    l.jsx(od, {}),
                                ],
                            }),
                    ],
                }),
            })
        );
    }),
    VP = 'App_7ac91f18';
function qP() {
    return l.jsx('div', { className: VP, children: l.jsx($P, {}) });
}
const WP = te.resolve('aliases');
function FP(e, t) {
    return { options: { rootId: t.read(e) } };
}
const HP = ss([
    {
        click: {
            'loadout:popular-loadouts-content:arrow-wrapper': 'arrow',
            'loadout:deal-panel:cancel_button': 'cancelcloseno',
            'loadout-panel:slot:unmount-button': 'cancelcloseno',
            'loadout-panel:slot:equipment:specialization:firepower': 'cons_equipment_slot_firepower',
            'loadout-panel:slot:equipment:specialization:survivability': 'cons_equipment_slot_survivability',
            'loadout-panel:slot:equipment:specialization:stealth': 'cons_equipment_slot_stealth',
            'loadout-panel:slot:equipment:specialization:mobility': 'cons_equipment_slot_mobility',
            'loadout-panel:slot': 'yes1',
        },
        expand: { 'loadout:deal-panel': 'cons_select_view' },
        collapse: { 'loadout:deal-panel': 'cons_select_view' },
        switch: { 'loadout:ammunition_setup': 'cons_select_view' },
        on: {
            'loadout:ammunition_setup:specialization-filter:firepower': 'cons_equipment_filter_on_firepower',
            'loadout:ammunition_setup:specialization-filter:survivability': 'cons_equipment_filter_on_survivability',
            'loadout:ammunition_setup:specialization-filter:stealth': 'cons_equipment_filter_on_stealth',
            'loadout:ammunition_setup:specialization-filter:mobility': 'cons_equipment_filter_on_mobility',
            'loadout-panel:slot:equipment:specialization': 'cons_equipment_bonus',
            'loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction': 'cons_instructions_steady_hand',
            'loadout-panel:slot:instruction:driver_virtuoso-crew_instruction': 'cons_instructions_combat_course',
            'loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction':
                'cons_instructions_gearbox_intricacy',
            'loadout-panel:slot:instruction:fireFighting-crew_instruction': 'cons_instructions_firefighters',
            'loadout-panel:slot:instruction:naturalCover-crew_instruction': 'cons_instructions_natural_cover',
            'loadout-panel:slot:instruction:gunner_rancorous-crew_instruction': 'cons_instructions_focus_target',
            'loadout-panel:slot:instruction:loader_pedant-crew_instruction': 'cons_instructions_shell_organizer',
            'loadout-panel:slot:instruction:commander_practical-crew_instruction':
                'cons_instructions_thorough_preparations',
            'loadout-panel:slot:instruction:commander_enemyShotPredictor-crew_instruction':
                'cons_instructions_heightened_vigilance',
        },
        off: { 'loadout:ammunition_setup:specialization-filter': 'cons_equipment_filter_off' },
        mount: {
            'loadout-panel:slot:equipment': 'cons_equipment_mount',
            'loadout-panel:slot:instruction': 'cons_instructions_mount',
            'loadout-panel:slot:consumable': 'cons_consumables_mount',
        },
        warn: { 'loadout-panel:slot:instruction': 'cons_instructions_equip_not_suitable' },
        swipe: { 'loadout-panel:ammunition_panel:section': 'cons_equipment_swipe' },
    },
    {
        'mouse-enter': { 'main-menu-widget:menu-item': 'highlightx' },
        click: {
            'main-menu-widget:menu-item': 'yes1',
            'vehicle-menu-widget:button': 'yes1',
            'carousel:arrow_button': 'carouselButton',
        },
        expand: { 'vehicle-menu-widget:button': 'gui_vehicle_menu_open' },
    },
    Cs,
]);
is(
    new Mt()
        .addWithProps(Aa, { soundsOverrides: HP })
        .add(ns)
        .addWithProps(
            gn,
            FP((e) => e.hangar.shared.VehicleFilters('resId'), WP),
        )
        .addWithProps(
            bn,
            FP((e) => e.hangar.shared.VehiclesStatistics('resId'), WP),
        )
        .addWithProps(
            xn,
            FP((e) => e.hangar.shared.VehiclesInfo('resId'), WP),
        )
        .addWithProps(
            Vs,
            FP((e) => e.hangar.shared.SpaceInteraction('resId'), WP),
        )
        .addWithProps(
            Rs,
            FP((e) => e.hangar.shared.HeroTank('resId'), WP),
        )
        .add(wn)
        .addWithProps(
            Nn,
            FP((e) => e.hangar.shared.VehiclePlaylists('resId'), WP),
        )
        .addWithProps(
            Pn,
            FP((e) => e.hangar.shared.VehiclesInventory('resId'), WP),
        )
        .render(l.jsx(qP, {})),
)
    .then(() => rs(document.getElementById('root')))
    .then(() => os())
    .then(() => ls(!1))
    .then(() => es(!1));
