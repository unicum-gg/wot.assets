var e = Object.defineProperty,
    t = (t, a, n) =>
        ((t, a, n) => (a in t ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[a] = n)))(
            t,
            'symbol' != typeof a ? a + '' : a,
            n,
        );
import {
    r as a,
    o as n,
    s,
    e as r,
    B as o,
    D as i,
    E as l,
    F as c,
    G as d,
    H as u,
    I as m,
    J as p,
    K as _,
    q as h,
    _ as g,
    R as v,
    j as f,
    f as b,
    m as x,
    n as y,
    L as C,
    M as w,
    N,
    p as I,
    y as j,
    O as k,
    P as S,
    Q as P,
    S as E,
    z as M,
    T as L,
    U as D,
    V as T,
    W as A,
} from '../../../chunks/vendor.js';
import {
    a as B,
    a5 as V,
    a6 as O,
    a7 as z,
    a8 as $,
    i as H,
    a9 as F,
    aa as W,
    ab as q,
    ac as Z,
    ad as U,
    ae as G,
    af as K,
    ag as J,
    ah as X,
    ai as Q,
    aj as Y,
    E as ee,
    ak as te,
    al as ae,
    am as ne,
    an as se,
    ao as re,
    ap as oe,
    aq as ie,
    ar as le,
    b as ce,
    as as de,
    m as ue,
    at as me,
    au as pe,
    av as _e,
    O as he,
    aw as ge,
    ax as ve,
    ay as fe,
    az as be,
    aA as xe,
    aB as ye,
    aC as Ce,
    aD as we,
    aE as Ne,
    r as Ie,
    aF as je,
    aG as ke,
    aH as Se,
    aI as Pe,
    aJ as Ee,
    aK as Me,
    aL as Le,
    aM as De,
    aN as Te,
    aO as Ae,
    aP as Be,
    aQ as Ve,
    aR as Oe,
    aS as Re,
    aT as ze,
    aU as $e,
    aV as He,
    g as Fe,
    aW as We,
    aX as qe,
    aY as Ze,
    aZ as Ue,
    a_ as Ge,
    a$ as Ke,
    b0 as Je,
    W as Xe,
    b1 as Qe,
    b2 as Ye,
    b3 as et,
    b4 as tt,
    b5 as at,
    b6 as nt,
    b7 as st,
    b8 as rt,
    b9 as ot,
    ba as it,
    Z as lt,
    bb as ct,
    bc as dt,
    B as ut,
    bd as mt,
    be as pt,
    bf as _t,
    bg as ht,
    bh as gt,
    bi as vt,
    bj as ft,
    bk as bt,
    bl as xt,
    bm as yt,
    bn as Ct,
    bo as wt,
    bp as Nt,
    bq as It,
    br as jt,
    bs as kt,
    bt as St,
    bu as Pt,
    bv as Et,
    bw as Mt,
    bx as Lt,
    by as Dt,
    bz as Tt,
    bA as At,
    _ as Bt,
    bB as Vt,
    bC as Ot,
    bD as Rt,
    bE as zt,
    bF as $t,
    bG as Ht,
    bH as Ft,
    bI as Wt,
    bJ as qt,
    bK as Zt,
    bL as Ut,
    bM as Gt,
    f as Kt,
    bN as Jt,
    bO as Xt,
    bP as Qt,
    bQ as Yt,
    bR as ea,
    bS as ta,
    bT as aa,
    bU as na,
    bV as sa,
    bW as ra,
    bX as oa,
    bY as ia,
    bZ as la,
    y as ca,
    b_ as da,
    a1 as ua,
    b$ as ma,
    c0 as pa,
    c1 as _a,
    c2 as ha,
    c3 as ga,
    c4 as va,
    c5 as fa,
    c6 as ba,
    c7 as xa,
    c8 as ya,
    c9 as Ca,
    ca as wa,
    cb as Na,
    cc as Ia,
    cd as ja,
    ce as ka,
    cf as Sa,
    cg as Pa,
    ch as Ea,
    ci as Ma,
    cj as La,
    ck as Da,
    T as Ta,
    cl as Aa,
    cm as Ba,
    cn as Va,
    co as Oa,
    cp as Ra,
    p as za,
    F as $a,
    cq as Ha,
    cr as Fa,
    cs as Wa,
    ct as qa,
    a2 as Za,
    cu as Ua,
    cv as Ga,
    t as Ka,
    cw as Ja,
    cx as Xa,
    cy as Qa,
    cz as Ya,
    cA as en,
    cB as tn,
    cC as an,
    cD as nn,
    cE as sn,
    cF as rn,
    cG as on,
    Y as ln,
    $ as cn,
    a0 as dn,
    cH as un,
    cI as mn,
    cJ as pn,
    cK as _n,
    cL as hn,
    a3 as gn,
    a4 as vn,
    cM as fn,
    cN as bn,
} from '../../../chunks/lib.js';
import { g as xn, a as yn, b as Cn } from '../../../chunks/readResource.js';
import { F as wn } from '../../../chunks/fun_random_progression_state.js';
const [Nn, In] = B('HeroTankModelProvider')((e) => {
        const { observableModel: t } = e;
        return { ...t.primitives(['name', 'type']), heroTankMarker: t.object('heroTankMarker') };
    }, V),
    [jn, kn] = B()(
        ({ observableModel: e }) => ({
            menuItems: e.arrayClone('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    [Sn, Pn] = B('SpaceInteractionModel')(V, ({ externalModel: e }) => ({
        sceneWrapper: {
            onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
            onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
        },
    })),
    [En, Mn, Ln] = B()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled']),
    })),
    Dn = () => a.useContext(Ln.Context),
    Tn = 2,
    An = 'role',
    Bn = 'type',
    Vn = 'tier',
    On = 'nations',
    Rn = {
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
    zn = {
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
    $n = 'isCommonProgression',
    Hn = [$.assault, $.universal, $.break, $.sniper, $.support, $.wheeled],
    Fn = ['bonus', 'favorite', 'premium', 'elite', 'crystals', 'canInstallAttachments', 'own3DStyle', 'rented'],
    Wn = [z.lightTank, z.mediumTank, z.heavyTank, z['AT-SPG'], z.SPG],
    qn = O(1, 12, H),
    Zn = 'vehicle_types',
    Un = 'nations',
    Gn = 'levels',
    Kn = 'specials',
    Jn = 'battle_pass',
    Xn = { heavy_tank: Z, medium_tank: q, light_tank: W, at_spg: F };
function Qn(e, t) {
    return e === $n && t.status !== K.UNSUITABLE_TO_QUEUE && t.bpProgress < t.maxBpScore;
}
function Yn(e, t, a, n) {
    switch (t) {
        case 'elite':
            return e.includes('premium') || (n.elite && !a.premium);
        case 'premium':
            return a.premium || (e.includes('elite') && n.elite);
        case 'bonus':
            return n.bonusMultiplier >= 2;
        case 'favorite':
            return a.favorite;
        case 'crystals':
            return a.crystalEarning;
        case 'rented':
            return !0;
        case 'canInstallAttachments':
            return a.canInstallAttachments;
        case 'own3DStyle':
            return n.own3DStyle;
        case 'event':
        case 'funRandom':
            return a.isSuitableVehicle;
        default:
            return !1;
    }
}
const es = {
    [Gn]: (e, t) => !e.levels || e.levels.includes(`level_${t.level}`),
    [Un]: (e, t) => !e.nations || e.nations.includes(G(t.nationId)),
    [Zn]: (e, t) => !e.vehicle_types || e.vehicle_types.includes(t.type),
};
function ts(e, t, a) {
    if (a) {
        let n = !1;
        const s = e.specials ?? [];
        for (const e of s)
            if ('rented' !== e) {
                if (!Yn(s, e, t, a)) return !1;
            } else n = !0;
        if (!n && U(t)) return !1;
    }
    if (a && e.battle_pass && e.battle_pass.length > 0) for (const n of e.battle_pass) if (!Qn(n, a)) return !1;
    for (const n of Object.keys(e)) if (n in es && !es[n](e, t)) return !1;
    return ((e, t) => {
        const a = J(t.role);
        let n = !1;
        for (const s of Object.keys(Xn)) if (s in e && ((n = !0), e[s].some((e) => e.includes(a)))) return !0;
        return !n;
    })(e, t);
}
function as(e, { shortName: t, fullName: a }) {
    const n = e.toLowerCase();
    return !(n.length > 0 && !t.toLowerCase().includes(n) && !a.toLowerCase().includes(n));
}
function ns(e, t, a) {
    const n = e[t] ?? [],
        s = { ...e };
    return ((s[t] = n.includes(a) ? n.filter((e) => e !== a) : [...n, a]), s[t].length > 0 || delete s[t], s);
}
function ss(e, t) {
    return 'regular' === t.type
        ? ns(e, t.field, t.value)
        : Object.keys(Xn).reduce((e, a) => {
              const n = Xn[a].find((e) => e.includes(t.role));
              return n
                  ? ns(e, a, ((r = n), 'at_spg' === (s = a) ? `role_ATSPG_${r}` : `role_${s[0].toUpperCase()}T_${r}`))
                  : e;
              var s, r;
          }, e);
}
function rs(e, t, a, n) {
    if (a.favorite !== n.favorite) return a.favorite ? -1 : 1;
    const s = e[G(a.nationId)] ?? 0,
        r = e[G(n.nationId)] ?? 0;
    if (s !== r) return s - r;
    const o = t[a.type] ?? 0,
        i = t[n.type] ?? 0;
    return o !== i
        ? o - i
        : a.level !== n.level
          ? a.level - n.level
          : a.premium !== n.premium
            ? a.premium
                ? 1
                : -1
            : a.shortName.localeCompare(n.shortName);
}
const [os, is] = B('FilterVehiclesProvider')(
        ({ observableModel: e, readByPath: t }) => {
            function a(e) {
                try {
                    return JSON.parse(e);
                } catch (t) {
                    return (console.error(t), {});
                }
            }
            const { text_search: s, ...r } = a(t('filters')),
                o = { ...e.primitives(['defaultFilters']) },
                i = X.structural(() => a(o.defaultFilters.get())),
                l = {
                    ...e.primitives(['carouselRowCount']),
                    filters: n.box(r, { deep: !1 }),
                    searchName: n.box((null == s ? void 0 : s[0]) ?? ''),
                    nations: e.arrayClone('nationsOrder'),
                };
            return {
                ...l,
                computes: {
                    hasFilters: X.primitive(() => !Q.structural(i(), l.filters.get()) || l.searchName.get().length > 0),
                    nations: () => l.nations.get(),
                    nationToIndex: X.shallow(() => l.nations.get().reduce((e, t, a) => ((e[t] = a), e), {})),
                    default: i,
                },
            };
        },
        ({ cleanup: e, model: t, externalModel: a }) => {
            const n = a.createCallback((e) => e, 'onSaveFilter');
            return (
                e(
                    s(() => {
                        var e, a;
                        ((e = t.filters.get()),
                            (a = t.searchName.get()),
                            n({ filters: JSON.stringify({ ...e, text_search: a.length > 0 ? [a] : void 0 }) }));
                    }),
                ),
                {
                    reset: r(() => {
                        (t.filters.set(t.computes.default()), t.searchName.set(''));
                    }),
                    search: r((e) => {
                        t.searchName.set(e);
                    }),
                    change: r((e) => {
                        t.filters.set(ss(t.filters.get(), e));
                    }),
                    carouselTypeChange: a.createCallback((e) => ({ rowCount: e }), 'onCarouselTypeChange'),
                }
            );
        },
    ),
    ls = 'disabled',
    cs = [z.lightTank, z.mediumTank, z.heavyTank, z['AT-SPG'], z.SPG].reduce((e, t, a) => ((e[t] = a), e), {}),
    [ds, us] = B('VehicleStatisticsProvider')(({ observableModel: e }) => {
        const t = e.dict('statistics'),
            a = X.structural((e) => t.get(e));
        return { ids: X.primitive(() => t.keys), get: a };
    }),
    [ms, ps] = B('VehiclesProvider')(
        ({ observableModel: e }) => {
            const t = { vehicles: e.dictRef('vehicles') };
            return {
                get: X.structural((e) => {
                    if (-1 === e) return;
                    const a = t.vehicles.get(e);
                    if (!a) return void console.error(`Error getting vehicle with id: ${e}`);
                    const n = (function (e) {
                        try {
                            const t = JSON.parse(e);
                            return ((t.shortName = t.shortName.replace(/<img.+\/>/, '')), t);
                        } catch (t) {
                            throw (console.error(`Error parsing JSON for element ${e}:`, t), t);
                        }
                    })(a);
                    return { ...n, imageKey: Y(n.name) };
                }),
                has: X.primitive((e) => Boolean(t.vehicles.get(e))),
                ids: X.shallow(() => [...t.vehicles.keys.values()]),
                amount: X.primitive(() => t.vehicles.length),
                list: X.shallow(() => {
                    let e = [];
                    for (const [n, s] of t.vehicles.entries())
                        try {
                            e.push(JSON.parse(s.get()));
                        } catch (a) {
                            console.error(`Error parsing JSON for element ${n}:`, a);
                        }
                    return e;
                }),
            };
        },
        V,
        { useRequires: () => ({ statistics: us() }) },
    ),
    [_s, hs] = B('VehiclesInventoryProvider')(
        (e) => {
            const t = e.requires.statistic.model.ids,
                a = X.structural((a) => {
                    if (t().has(a)) return e.requires.vehicles.model.get(a);
                }),
                n = X.shallow(() => {
                    const a = [];
                    for (const n of t().values()) {
                        const t = e.requires.vehicles.model.get(n);
                        t ? a.push(t) : console.warn(`No vehicle with id: ${n}`);
                    }
                    return a;
                });
            return { get: a, getAll: n, amount: X.primitive(() => n().length), ids: t };
        },
        V,
        { useRequires: () => ({ vehicles: ps(), statistic: us() }) },
    ),
    gs = ee.resolve('strings');
function vs(e, t, a = '...') {
    if (
        (ne(
            t - a.length >= 0,
            `Incorrect tranticate config max(${t}) - rest.length(${a.length}) must be greater than 0`,
        ),
        e.length <= t)
    )
        return [e, !1];
    return [`${e.slice(0, t - a.length)}${a}`, !0];
}
const fs = te(se + re);
function bs(e, t, a = 1) {
    const n = ae(t, { count: a });
    return e.has(n) ? bs(e, t, a + 1) : n;
}
function xs(e = '', t = []) {
    return {
        title: '' !== e ? e : gs.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: t,
    };
}
const ys = (e) => ({ type: 'ok', value: e }),
    Cs = (e, t) => ({ type: 'error', error: { tag: e, msg: t } }),
    ws = 'delete',
    Ns = 'import',
    Is = o({ title: c(), createdAt: i(m(), u(), d(0)), modifiedAt: i(m(), u(), d(0)), list: l(i(m(), u())) }),
    js = i(
        c(),
        p((e) => (e.length > 0 ? e : void 0)),
    ),
    [ks, Ss, { Context: Ps }] = B('PaylistsProvider')(
        ({ requires: e, observableModel: t }) => {
            const a = t.dict('storage'),
                s = t.primitives(['selectedID', 'enabled', 'dirtyEdit']),
                r = e.filters.model.computes.default,
                o = {
                    vehicles: e.vehicles.model,
                    myVehicles: e.myVehicles.model,
                    enabled: s.enabled,
                    nationsOrder: e.filters.model.nations,
                    filters: n.box(r(), { deep: !1 }),
                    searchName: n.box('', { deep: !1 }),
                    edit: { initial: n.box(void 0, { deep: !1 }), dirty: s.dirtyEdit },
                },
                i = X.shallow(() => a.keys),
                l = X.primitive(() => _(js, s.selectedID.get())),
                c = X.structural((e) => {
                    try {
                        const t = a.get(e);
                        if (!t) return ys(void 0);
                        const n = _(Is, JSON.parse(t)),
                            s = new Set();
                        for (const e of n.list)
                            if (oe[e]) {
                                const t = oe[e].find((e) => Boolean(o.myVehicles.get(e.toString())));
                                s.add(t ?? e);
                            } else s.add(e);
                        return ys({ ...n, list: [...s.values()] });
                    } catch (t) {
                        return (console.error(`Error getting playlist with ${e} id`, t), Cs('PARSE_ERROR', String(t)));
                    }
                }),
                d = X.shallow(() =>
                    ie(i().values())
                        .map((e) => c(e))
                        .filter((e) => 'ok' === e.type && void 0 !== e.value)
                        .map((e) => e.value.title)
                        .reduce((e, t) => e.add(t), new Set()),
                ),
                u = X.primitive((e) => {
                    const t = c(e);
                    if ('ok' !== t.type || void 0 === t.value) throw new Error(`Can't get playlist by id ${e}`);
                    return t.value;
                }),
                m = X.structural((e) => {
                    const t = c(e);
                    if ('ok' === t.type && void 0 !== t.value) return { id: e, ...t.value };
                }),
                p = X.shallow(() =>
                    ie(i().values())
                        .map((e) => m(e))
                        .filter((e) => void 0 !== e)
                        .toArray()
                        .sort((e, t) => e.title.localeCompare(t.title))
                        .map((e) => e.id),
                ),
                h = X.primitive(() => {
                    const e = l();
                    if (e) return m(e);
                }),
                g = X.shallow(() => {
                    const t = e.filters.model.computes.nationToIndex();
                    return le(e.myVehicles.model.getAll(), (e, a) => rs(t, cs, e, a));
                }),
                v = X.primitive(() => !1 === Q.structural(r(), o.filters.get()) || o.searchName.get().length > 0),
                f = X.shallow(() => {
                    const t = o.filters.get(),
                        a = g(),
                        n = o.searchName.get();
                    return a.filter((a) => {
                        if (!as(n, a)) return !1;
                        const s = e.statistic.model.get(a.id);
                        return ts(t, a, s);
                    });
                }),
                b = X.primitive((t) => {
                    var a;
                    return Boolean(null == (a = e.statistic.model.get(t)) ? void 0 : a.elite);
                }),
                x = X.shallow((t) => {
                    const a = e.vehicles.model.get(t);
                    return null == a ? void 0 : a.imageKey;
                }),
                y = X.primitive(() => f().length),
                C = X.shallow(() => {
                    var e;
                    return null == (e = h()) ? void 0 : e.list.map(o.vehicles.get);
                });
            return {
                ...o,
                current: h,
                titles: d,
                currentId: l,
                byIdUnsafe: u,
                byId: c,
                byIdFull: m,
                filtered: f,
                filteredAmount: y,
                defaultFilters: r,
                hasFilters: v,
                vehicleImage: x,
                currentVehicles: C,
                ids: i,
                sortedIds: p,
                isElite: b,
            };
        },
        ({ model: e, externalModel: t }) => {
            const a = t.createCallback((e) => ({ id: e.id, data: JSON.stringify(e.initial) }), 'onCreate');
            return {
                filters: ce({
                    update: (t) => {
                        e.filters.set(ss(e.filters.get(), t));
                    },
                    reset: () => {
                        (e.filters.set(e.defaultFilters()), e.searchName.set(''));
                    },
                    search: (t) => e.searchName.set(t),
                    change: (t) => {
                        e.filters.set(ss(e.filters.get(), t));
                    },
                }),
                create: r(() => {
                    a({
                        id: `${Date.now().toString(16)}_${fs(3)}`,
                        initial: xs(bs(e.titles(), 'playlists.defaultName')),
                    });
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
                    r(() => ({ type: Ns, params: JSON.stringify({ titles: Array.from(e.titles().values()) }) })),
                    'openImportConfirm',
                ),
                openDeleteConfirm: t.createCallback(
                    (e, t) => ({ type: ws, id: e, params: JSON.stringify({ title: t }) }),
                    'openDeleteConfirm',
                ),
            };
        },
        { useRequires: () => ({ vehicles: ps(), myVehicles: hs(), filters: is(), statistic: us() }) },
    ),
    Es = () => a.useContext(Ps),
    Ms = 'pending',
    Ls = 'readyToSelect',
    Ds = ls,
    [Ts, As] = B('VehiclesInventoryProvider')(
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
                    'telecomRentStatus',
                ]),
                a = n.box([], { deep: !1 }),
                r = { intCD: t.currentVehicleIntCD, inventoryId: t.currentVehicleInventoryId },
                o = X.shallow(() => {
                    const t = r.intCD.get();
                    return e.requires.vehicles.model.get(t);
                }),
                i = X.shallow((t) => {
                    if (void 0 === t) return;
                    const a = r.intCD.get();
                    return -1 === a ? e.requires.vehicles.model.get(t) : e.requires.vehicles.model.get(a);
                }),
                l = X.shallow(() => {
                    const t = r.intCD.get();
                    return e.requires.statistic.model.get(t);
                }),
                c = X.primitive(() => -1 !== r.intCD.get()),
                d = X.shallow((e) => de(e, (e) => u.get(String(e)))),
                u = e.requires.myVehicles.model,
                m = X.structural(() => e.requires.vehicles.model.list().filter((e) => e.rent.isRented)),
                p = X.primitive(() =>
                    e.requires.vehicles.model.list().some((t) => {
                        const a = e.requires.statistic.model.get(t.vehicleId);
                        if (a) return 'inPrebattle' === a.status;
                    }),
                ),
                _ = X.primitive(() => {
                    const t = [...u.getAll()],
                        a = e.requires.filters.model.computes.nationToIndex();
                    return (t.sort((e, t) => rs(a, cs, e, t)), t);
                });
            return (
                e.cleanup(
                    s(() => {
                        var t;
                        const n = e.requires.filters.model.filters.get(),
                            s = e.requires.filters.model.searchName.get(),
                            r = null == (t = e.requires.playlists) ? void 0 : t.model.current(),
                            o = u.ids(),
                            i = (r ? d(r.list) : _()).filter(
                                (t) =>
                                    !1 !== o.has(t.id) && !!ts(n, t, e.requires.statistic.model.get(t.id)) && as(s, t),
                            );
                        h(() => a.set(i));
                    }),
                ),
                {
                    vehicles: e.requires.myVehicles.model,
                    vehicle: i,
                    selectedVehicle: o,
                    isVehicleSelected: c,
                    selectedVehicleStatistics: l,
                    accumulateByIds: d,
                    rentVehiclesList: m,
                    prebattleModeActive: p,
                    current: {
                        intCD: t.currentVehicleIntCD,
                        inventoryId: t.currentVehicleInventoryId,
                        amount: X.primitive(() => a.get().length),
                        list: () => a.get(),
                        ids: X.shallow(() => a.get().map((e) => e.id)),
                        playlist: e.requires.playlists ? e.requires.playlists.model.current : () => {},
                    },
                    slots: {
                        free: t.freeSlotsCount,
                        price: { defaultValue: t.defaultSlotPrice, value: t.slotPrice, currency: t.slotPriceCurrency },
                        recover: t.recoverableVehicleCount,
                        discount: t.hasDiscont,
                    },
                    bpState: { active: t.bpEntityValid, status: t.bpStatus },
                    telecomRentStatus: t.telecomRentStatus,
                }
            );
        },
        (e) => ({
            select: e.externalModel.createCallback((e) => ({ id: e }), 'onSelect'),
            buySlot: e.externalModel.createCallbackNoArgs('onBuySlot'),
            goBuyVehicle: e.externalModel.createCallbackNoArgs('onGoBuyVehicle'),
            goRecoverVehicle: e.externalModel.createCallbackNoArgs('onGoRecoverVehicle'),
            selectTelecomRentalVehicle: e.externalModel.createCallbackNoArgs('onSelectTelecomRentalVehicle'),
        }),
        { useRequires: () => ({ myVehicles: hs(), vehicles: ps(), statistic: us(), filters: is(), playlists: Es() }) },
    ),
    [Bs, Vs, Os] = B('SettingsProvider')(
        (e) => {
            const t = e.observableModel.primitives(['crewEnabled', 'ttcEnabled'], 'allVehicles'),
                a = X.primitive(() => Boolean(e.requires.inventory.model.selectedVehicle()));
            return {
                ...t,
                computed: {
                    crewEnabled: X.primitive(() => a() && t.crewEnabled.get()),
                    ttcEnabled: X.primitive(() => a() && t.ttcEnabled.get()),
                    noSelectedVehicle: a,
                },
            };
        },
        (e) => {
            const t = e.externalModel.createCallback(
                    (e) => ({ section: 'allVehicles', key: 'crewEnabled', value: e }),
                    'onUpdateSetting',
                ),
                a = e.externalModel.createCallback(
                    (e) => ({ section: 'allVehicles', key: 'ttcEnabled', value: e }),
                    'onUpdateSetting',
                );
            return {
                crew: { set: t, toggle: () => t(!e.model.crewEnabled.get()) },
                ttc: { set: a, toggle: () => a(!e.model.ttcEnabled.get()) },
            };
        },
        { useRequires: () => ({ inventory: As() }) },
    );
function Rs() {
    return a.useContext(Os.Context);
}
const zs = { boost: 'boost', reduce: 'reduce', none: 'none' };
function $s(e, t, a) {
    const n = 100 / a,
        s = e - t * n;
    return (Math.max(0, Math.min(n, s)) / n) * 100;
}
function Hs(e, t, a) {
    return Array.from({ length: a }, (n, s) => {
        const r = $s(e, s, a);
        return { currentPercent: r, modifiedPercent: $s(t, s, a) - r };
    });
}
function Fs({ currentPercent: e, modifiedPercent: t }, a) {
    return a === zs.reduce ? [t, e] : [e, t];
}
function Ws(e) {
    return ue(e, ({ value: e, name: t, tooltipID: a, ...n }) => ({
        ...n,
        tooltipId: a,
        values: (() => {
            let e;
            const t = (t, a) => {
                var n, s;
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
                        (n = t),
                        (s = '$input'),
                        ((Array.isArray(n) ||
                            g(
                                !0,
                                {
                                    method: 'typia.json.assertParse',
                                    path: s + '',
                                    expected: 'Array<ParamValue>',
                                    value: n,
                                },
                                e,
                            )) &&
                            n.every(
                                (t, a) =>
                                    ((('object' == typeof t && null !== t) ||
                                        g(
                                            !0,
                                            {
                                                method: 'typia.json.assertParse',
                                                path: s + '[' + a + ']',
                                                expected: 'ParamValue',
                                                value: t,
                                            },
                                            e,
                                        )) &&
                                        ((t, a, n = !0) =>
                                            ('number' == typeof t.value ||
                                                g(
                                                    n,
                                                    {
                                                        method: 'typia.json.assertParse',
                                                        path: a + '.value',
                                                        expected: 'number',
                                                        value: t.value,
                                                    },
                                                    e,
                                                )) &&
                                            ('string' == typeof t.state ||
                                                g(
                                                    n,
                                                    {
                                                        method: 'typia.json.assertParse',
                                                        path: a + '.state',
                                                        expected: 'string',
                                                        value: t.state,
                                                    },
                                                    e,
                                                )))(t, s + '[' + a + ']', !0)) ||
                                    g(
                                        !0,
                                        {
                                            method: 'typia.json.assertParse',
                                            path: s + '[' + a + ']',
                                            expected: 'ParamValue',
                                            value: t,
                                        },
                                        e,
                                    ),
                            )) ||
                            g(
                                !0,
                                {
                                    method: 'typia.json.assertParse',
                                    path: s + '',
                                    expected: 'Array<ParamValue>',
                                    value: n,
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
                      var n, s;
                      return (
                          !1 ===
                              ((e) =>
                                  'object' == typeof e &&
                                  null !== e &&
                                  ((e) => 'string' == typeof e.key && 'string' == typeof e.name)(e))(t) &&
                              ((e = a),
                              (s = '$input'),
                              ((('object' == typeof (n = t) && null !== n) ||
                                  g(
                                      !0,
                                      {
                                          method: 'typia.json.assertParse',
                                          path: s + '',
                                          expected: 'KpiBonusParams',
                                          value: n,
                                      },
                                      e,
                                  )) &&
                                  ((t, a, n = !0) =>
                                      ('string' == typeof t.key ||
                                          g(
                                              n,
                                              {
                                                  method: 'typia.json.assertParse',
                                                  path: a + '.key',
                                                  expected: 'string',
                                                  value: t.key,
                                              },
                                              e,
                                          )) &&
                                      ('string' == typeof t.name ||
                                          g(
                                              n,
                                              {
                                                  method: 'typia.json.assertParse',
                                                  path: a + '.name',
                                                  expected: 'string',
                                                  value: t.name,
                                              },
                                              e,
                                          )))(n, s + '', !0)) ||
                                  g(
                                      !0,
                                      {
                                          method: 'typia.json.assertParse',
                                          path: s + '',
                                          expected: 'KpiBonusParams',
                                          value: n,
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
function qs(e, t) {
    const { key: a, name: n } = t,
        s = ee.resolve('strings');
    return '' !== n && '' !== a
        ? s.readOr(`tank_setup.kpi.bonus.ttc.${a}.${n}`, () => s.readOrEmpty(`tank_setup.kpi.bonus.${a}.${n}`))
        : s.readOrEmpty(`menu.tank_params.${e}`);
}
const [Zs, Us] = B('TechParamsProvider')(
        ({ observableModel: e }) => {
            const t = { groups: e.arrayClone('groups') };
            return {
                computes: {
                    sectionParams: X.structural((e) =>
                        ue(t.groups.get(), ({ id: t, indicator: a, isOpen: n, params: s, extraParams: r, ...o }) => {
                            const i = (function ({ currentPercent: e, modifiedPercent: t }) {
                                return t === e ? zs.none : t > e ? zs.boost : zs.reduce;
                            })(a);
                            return {
                                ...o,
                                type: t,
                                indicatorList: Hs(...Fs(a, i), e),
                                status: i,
                                opened: n,
                                params: Ws(s),
                                extraParams: Ws(r),
                            };
                        }),
                    ),
                },
            };
        },
        ({ externalModel: e }) => ({ selectGroup: e.createCallback((e) => ({ groupName: e }), 'onGroupClick') }),
    ),
    Gs = 'emptySlot',
    Ks = { height: 105, row: 3 },
    Js = { medium: { height: 136, row: 4 }, large: { height: 145, row: 5 }, extraLarge: { height: 183, row: 5 } },
    Xs = 'top',
    Qs = 'bottom',
    Ys = 'both',
    er = 'none',
    tr = (e, t) => (e || t ? (e ? (t ? er : Qs) : Xs) : Ys);
var ar = ((e) => (
    (e.None = 'none'),
    (e.Increase = 'increase'),
    (e.Decrease = 'decrease'),
    (e.Situational = 'situational'),
    e
))(ar || {});
const nr = {
        root: 'Detail_root_cdd8039b',
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
    sr = ee.resolve('strings'),
    rr = ee.resolve('images'),
    or = ee.resolve('aliases'),
    ir = ee.resolve('intl');
function lr({ id: e, values: t, moduleInstalled: a, kpiBonusParams: n, tooltipId: s, className: r }) {
    const o = v.useMemo(() => ({ tooltipId: s, paramId: e }), [s, e]),
        i = me({ resId: or.read((e) => e.hangar.shared.VehicleParams('resId')), args: o });
    return f.jsxs('div', {
        className: b(nr.base, a && nr.base__moduleInstalled, r),
        ...i,
        children: [
            f.jsx('div', {
                className: nr.valueContainer,
                children: t.map(({ value: e, state: t }, a) =>
                    f.jsxs(
                        v.Fragment,
                        {
                            children: [
                                a > 0 &&
                                    f.jsx('div', {
                                        className: nr.separator,
                                        children: sr.readOrEmpty('common.common.slash'),
                                    }),
                                f.jsx('div', {
                                    className: b(nr.value, nr[`value__${t}`]),
                                    children: ir.formatReal('woZeroDigits', e),
                                }),
                            ],
                        },
                        `${e}-${t}-${a}`,
                    ),
                ),
            }),
            f.jsx('div', {
                className: nr.icon,
                style: { backgroundImage: `url(${rr.readOrEmpty(`vehParams.small.${e}`)})` },
            }),
            f.jsx('div', { className: nr.description, children: qs(e, n) }),
        ],
    });
}
const cr = 'DetailsContainer_b85372ff',
    dr = 'DetailsContainer_params_9bf7e9a4',
    ur = 'DetailsContainer_separator_f28e38c',
    mr = 'DetailsContainer_detail_141e9abe';
function pr(e, t) {
    return t !== ar.None && pe(e, (e) => e.state === ar.None);
}
function _r({ params: e, extraParams: t, highlightType: n, className: s }) {
    return f.jsx('div', {
        className: b(cr, s),
        children: f.jsxs('div', {
            className: dr,
            children: [
                ue(e, (e) => a.createElement(lr, { ...e, key: e.id, className: mr, moduleInstalled: pr(e.values, n) })),
                t.length > 0 && f.jsx('div', { className: ur }),
                ue(t, (e) => a.createElement(lr, { ...e, key: e.id, className: mr, moduleInstalled: pr(e.values, n) })),
            ],
        }),
    });
}
function hr(e, t) {
    const a = _e(e, (e) => e.currentPercent > 0) ?? 0,
        n = _e(t, (e) => e.currentPercent > 0) ?? 0,
        s = _e(e, (e) => e.modifiedPercent > 0) ?? 0,
        r = _e(t, (e) => e.modifiedPercent > 0) ?? a;
    return e.map((t, o) => {
        var i, l;
        const c = (null == (i = e[o]) ? void 0 : i.currentPercent) ?? 0,
            d = (null == (l = e[o]) ? void 0 : l.modifiedPercent) ?? 0,
            u = (function (e, t, a, n, s) {
                return n > s
                    ? e > s
                        ? (e - s) * fr
                        : 0
                    : t > a
                      ? e > a
                          ? (e - a) * fr
                          : 0
                      : t < a && e >= t
                        ? (a - e) * fr
                        : 0;
            })(o, s, r, a, n);
        return {
            currentIndicator: br({ percent: c, delay: u }),
            boostIndicator: br({ percent: d, delay: u }),
            reduceIndicator: br({ delay: u }),
        };
    });
}
function gr(e, t) {
    const a = _e(e, (e) => e.currentPercent > 0) ?? 0,
        n = _e(t, (e) => e.currentPercent > 0) ?? 0,
        s = _e(t, (e) => e.modifiedPercent > 0),
        r = he(t, (e) => e.modifiedPercent > 0) ?? 0;
    return e.map((e, t) => {
        const o = e.currentPercent ?? 0,
            i = void 0 === s ? Math.abs(t - n) * fr : s > a ? Math.max((s - t) * fr, 0) : Math.max((t - r) * fr, 0),
            l = (function (e, t, a, n) {
                return void 0 === a ? 0 : t < a ? (e < a ? (a - e) * fr : 0) : t > n && e > n ? (e - n) * fr : 0;
            })(t, a, s, r);
        return {
            currentIndicator: br({ percent: o, delay: i }),
            boostIndicator: br({ delay: l }),
            reduceIndicator: br({ delay: l }),
        };
    });
}
function vr(e, t) {
    if (0 === t.length)
        return e.map((e, t) => ({
            currentIndicator: br({ percent: null == e ? void 0 : e.currentPercent, delay: t * fr }),
            boostIndicator: br(),
            reduceIndicator: br({ percent: null == e ? void 0 : e.modifiedPercent, delay: t * fr }),
        }));
    const a = he(e, (e) => e.modifiedPercent > 0) ?? 0,
        n = (() => {
            const a = _e(t, (e) => e.currentPercent > 0) ?? 0,
                n = _e(t, (e) => e.modifiedPercent > 0) ?? a;
            return n > (_e(e, (e) => e.modifiedPercent > 0) ?? 0) ? n : (he(t, (e) => e.modifiedPercent > 0) ?? a);
        })();
    return e.map((t, s) => {
        var r, o;
        const i = (null == (r = e[s]) ? void 0 : r.currentPercent) ?? 0,
            l = (null == (o = e[s]) ? void 0 : o.modifiedPercent) ?? 0,
            c = (function (e, t, a) {
                return t > a ? (e > a ? (e - a) * fr : 0) : t < a && e < a ? (a - e) * fr : 0;
            })(s, a, n);
        return {
            currentIndicator: br({ percent: i, delay: c }),
            boostIndicator: br({ delay: c }),
            reduceIndicator: br({ percent: l, delay: c }),
        };
    });
}
const fr = 100,
    br = (e = {}) => ({ percent: e.percent ?? 0, delay: e.delay ?? 0 });
const xr = {
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
    yr = (e, t) => fr * ((t - e) / 100);
function Cr({ className: e, currentIndicator: t, reduceIndicator: a, boostIndicator: n }) {
    const s = ge({ currentIndicator: t.percent, reduceIndicator: a.percent, boostIndicator: n.percent }) ?? {
            currentIndicator: 0,
            reduceIndicator: 0,
            boostIndicator: 0,
        },
        r = s.boostIndicator > n.percent,
        o = s.boostIndicator < n.percent,
        i = x({
            from: { width: `${s.reduceIndicator}%` },
            to: { width: `${a.percent}%` },
            delay: r ? a.delay + Math.abs(yr(s.boostIndicator, n.percent)) : a.delay,
            config: { duration: s.boostIndicator === n.percent ? fr : Math.abs(yr(s.reduceIndicator, a.percent)) },
        }),
        l = x({
            from: { width: `${s.boostIndicator}%` },
            to: { width: `${n.percent}%` },
            delay: o ? n.delay + Math.abs(yr(s.reduceIndicator, a.percent)) : n.delay,
            config: { duration: s.reduceIndicator === a.percent ? fr : Math.abs(yr(s.boostIndicator, n.percent)) },
        }),
        c = x({
            from: { width: `${s.currentIndicator}%` },
            to: { width: `${t.percent}%` },
            delay: r ? t.delay + Math.abs(yr(s.boostIndicator, n.percent)) : t.delay,
            config: { duration: s.boostIndicator === n.percent ? fr : Math.abs(yr(s.currentIndicator, t.percent)) },
        });
    return f.jsxs('div', {
        className: b(xr.base, e),
        children: [
            f.jsx('div', { className: xr.baseIndicator }),
            f.jsxs('div', {
                className: xr.filledIndicatorsContainer,
                children: [
                    f.jsx(y.div, { className: xr.currentIndicator, style: c }),
                    f.jsx(y.div, { className: xr.reduceIndicator, style: i }),
                    f.jsx(y.div, { className: xr.boostIndicator, style: l }),
                ],
            }),
            f.jsxs('div', {
                className: xr.layersContainer,
                children: [
                    f.jsx(y.div, { className: xr.currentIndicatorLayer, style: c }),
                    f.jsx(y.div, { className: xr.reduceIndicatorLayer, style: i }),
                    f.jsx(y.div, { className: xr.boostIndicatorLayer, style: l }),
                ],
            }),
        ],
    });
}
const wr = 'IndicatorContainer_f7506048',
    Nr = 'IndicatorContainer_indicator_b72c4e50';
function Ir({ indicatorList: e, status: t }) {
    const n = (function (e, t, a) {
        return a === zs.boost ? hr(t, e) : a === zs.reduce ? vr(t, e) : gr(t, e);
    })(ge(e) ?? [], e, t);
    return f.jsx('div', {
        className: wr,
        children: n.map((e, t) =>
            a.createElement(Cr, { ...e, key: `${t}-${e.currentIndicator}-${e.currentIndicator}`, className: Nr }),
        ),
    });
}
const jr = 'ParamsType_d8788f0e',
    kr = 'ParamsType_icon_5f8d4ad',
    Sr = 'ParamsType_type_cdb8f019',
    Pr = {
        ['relativeArmor']: (e) =>
            a.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    opacity: 0.5,
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M9.29569 9.61133V3.25977H10.6957V9.61133L16.8742 13.0464L16.1742 14.2139L9.99569 10.7789L3.81719 14.2139L3.11719 13.0464L9.29569 9.61133Z',
                    fill: '#D2D0CD',
                }),
                a.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M5.10187 6.49957L10 3.77839L14.8989 6.5L10.0007 9.22118L5.10187 6.49957ZM4.40104 7.66692V13.11L9.30019 15.8317V10.3887L4.40104 7.66692ZM10.7012 15.831L15.599 13.11V7.66778L10.7012 10.3887V15.831ZM10 2.22168L17 6.11057V13.8883L10 17.7772L3 13.8883V6.11057L10 2.22168Z',
                    fill: '#D2D0CD',
                }),
            ),
        ['relativeCamouflage']: (e) =>
            a.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { clipPath: 'url(#clip0_27127_335393)' },
                    a.createElement('path', {
                        d: 'M10.3233 7.6932C11.6803 7.46513 12.4719 7.80724 12.4719 8.26338C12.585 9.17567 11.4043 8.93424 10.7382 9.28971C10.2387 9.55625 9.98397 10.316 10.7382 10.6581C11.4924 11.0003 11.9066 10.088 13.942 9.74585C15.1066 9.55012 17.1085 9.74585 16.9954 10.6581C16.8823 11.5704 15.5524 11.4065 14.2105 11.4065L14.1868 11.4065C13.3211 11.4065 12.4978 11.4064 11.7133 12.0845C10.9217 12.7687 10.5601 13.7456 8.83206 12.5968C8.06152 12.0845 3.18416 12.4742 6.51755 11.08C7.496 10.6707 4.92924 10.1505 4.13753 10.1505C2.89357 10.1505 2.63341 9.40375 3.53804 9.06164C4.64359 8.64355 5.23433 9.40374 6.13903 9.40374C7.04373 9.40374 7.1328 9.5223 8.06152 8.71953C8.8531 8.03531 9.24369 7.87464 10.3233 7.6932Z',
                        fill: '#D2D0CD',
                    }),
                    a.createElement('path', {
                        d: 'M14.2451 6.80456C13.9053 6.73791 13.5743 6.2496 13.1763 5.99885C12.6037 5.68234 11.5789 5.69876 10.4233 6.47163C9.44735 7.12435 8.58441 6.38277 9.67436 5.7132C11.0697 4.85603 10.1209 4.04512 11.7508 3.35035C13.0647 2.79028 13.0591 4.49009 14.724 4.23129C16.1016 4.01714 17.0189 3.57678 17.4663 3.88988C17.9139 4.20309 17.7761 4.49619 17.4734 4.86298C17.0847 5.33399 16.1039 5.01566 15.8712 5.53213C15.5417 6.26304 15.2118 6.99418 14.2451 6.80456Z',
                        fill: '#D2D0CD',
                    }),
                    a.createElement('path', {
                        d: 'M3.65677 11.8752C3.91003 12.1113 3.933 12.7008 4.13846 13.124C4.45736 13.6953 4.60039 14.1005 7.20039 14.2005C8.37263 14.2456 8.71465 15.2476 7.43548 15.2401C5.79794 15.2306 5.50039 16.3116 4.13846 16.1005C3.00039 15.9241 3.65063 14.3605 2.10039 13.7005C0.817594 13.1544 -0.403738 13.15 -0.618135 12.6478C-0.832611 12.1454 -0.560814 11.9693 -0.109992 11.8178C0.468936 11.6234 1.13336 12.4118 1.60389 12.0963C2.26977 11.6498 2.9362 11.2034 3.65677 11.8752Z',
                        fill: '#D2D0CD',
                    }),
                    a.createElement('path', {
                        d: 'M7.03325 5.49884C7.44349 5.18639 8.29271 5.25457 8.44498 4.38398C8.51764 3.96857 7.77647 3.38089 7.03453 3.85193C6.29258 4.38544 5.60339 4.08402 4.60339 3.99966C3.10339 3.49966 1.87978 3.61843 2.00096 5.49967C2.09896 7.02113 3.25358 5.4764 4.1039 5.79962C5.16166 6.2017 5.6039 7.24583 6.79672 6.89369C7.44572 6.7021 6.39614 5.98407 7.03325 5.49884Z',
                        fill: '#D2D0CD',
                    }),
                    a.createElement('path', {
                        d: 'M16.421 13.5552C17.0788 14.0132 16.9539 14.8998 15.7704 14.929C15.0745 14.9462 14.8019 15.304 14.4027 16.0748C13.9099 17.0263 13.3589 16.7857 12.4291 16.1397C11.748 15.6665 10.7038 16.5341 9.95888 16.2699C9.39692 16.0706 9.45965 14.8581 11.0309 14.9632C12.2072 15.0418 12.9269 14.5129 13.6254 14.0282C14.3239 13.5435 15.6049 12.9871 16.421 13.5552Z',
                        fill: '#D2D0CD',
                    }),
                    a.createElement('path', {
                        d: 'M9.69303 16.434C9.45979 16.1674 9.44324 15.6296 9.86155 15.2638C10.0859 15.3444 10.5541 15.507 10.6325 15.5122C10.7305 15.5188 12.312 15.4276 12.41 15.4342C12.4884 15.4394 13.2706 14.8353 13.6518 14.5326L15.6254 14.4676C14.2203 14.866 15.2005 16.4084 13.9 16.7153C12.8998 16.9513 12.7966 15.5584 11.8882 15.8915C11.0169 16.211 9.92627 16.7006 9.69303 16.434Z',
                        fill: '#D2D0CD',
                    }),
                ),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'clipPath',
                        { id: 'clip0_27127_335393' },
                        a.createElement('rect', { width: 14, height: 14, fill: 'white', transform: 'translate(3 3)' }),
                    ),
                ),
            ),
        ['relativeMobility']: (e) =>
            a.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    d: 'M12.0754 10.1454C12.0754 8.99248 11.1517 8.06516 10.0062 8.06516C8.86066 8.06516 7.93687 8.99248 7.93687 10.1454C7.93687 11.2982 8.86066 12.2256 10.0062 12.2256C10.2525 12.2256 10.4742 12.1754 10.6836 12.1003C15.3641 16.3734 16.5712 17 16.5712 17C16.5712 17 16.251 15.3584 11.9769 10.7594C12.0385 10.5589 12.0878 10.3584 12.0878 10.1328L12.0754 10.1454ZM10.0062 10.797C9.63664 10.797 9.34103 10.4962 9.34103 10.1328C9.34103 9.76942 9.63664 9.46867 10.0062 9.46867C10.3757 9.46867 10.6713 9.76942 10.6713 10.1328C10.6713 10.4962 10.3757 10.797 10.0062 10.797ZM10.0062 2C5.5843 2 2 5.54637 2 9.90727C2 12.3258 3.09623 14.4812 4.82063 15.9223L5.07929 15.5589C3.68745 14.0927 2.84988 12.0752 2.9361 10.0451C3.10855 5.93484 6.88992 3.41604 10.8437 4.13033C16.0785 5.07018 15.4627 10.3333 14.662 12.4386L16.6205 14.3559C17.495 13.0902 18 11.5614 18 9.90727C18 5.53383 14.4157 2 9.99384 2H10.0062Z',
                    fill: '#D2D0CD',
                }),
            ),
        ['relativePower']: (e) =>
            a.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    d: 'M8.95 7.22333L4.69167 3L3 4.79667L7.235 8.99667L8.96167 7.22333H8.95ZM16.9883 4.79667L15.2967 3L11.0383 7.22333L12.765 8.99667L17 4.79667H16.9883ZM11.0383 12.7767L15.2967 17L16.9883 15.2033L12.7533 11.0033L11.0267 12.7767H11.0383ZM3 15.2033L4.69167 17L8.95 12.7767L7.22333 11.0033L3 15.2033Z',
                    fill: '#D2D0CD',
                }),
            ),
        ['relativeVisibility']: (e) =>
            a.createElement(
                'svg',
                {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    d: 'M10 5C5.58552 5 2 9.25425 2 10.005C2 10.6657 5.58552 15 10 15C14.4145 15 18 10.7157 18 9.99499C18 9.27427 14.4145 5 10 5ZM10 13.8488C6.78402 13.8488 3.52809 10.4855 3.52809 9.99499C3.52809 9.44444 6.78402 6.14114 10 6.14114C13.216 6.14114 16.4719 9.46446 16.4719 9.99499C16.4719 10.5255 13.216 13.8488 10 13.8488ZM9.99001 6.86186C8.29213 6.86186 6.91386 8.26326 6.91386 9.98498C6.91386 11.7067 8.29213 13.1081 9.99001 13.1081C11.6879 13.1081 13.0762 11.7067 13.0762 9.98498C13.0762 8.26326 11.6979 6.86186 9.99001 6.86186Z',
                    fill: '#D2D0CD',
                }),
            ),
    };
function Er({ type: e }) {
    const t = ee.resolve('strings'),
        a = Pr[e];
    if (a)
        return f.jsxs('div', {
            className: jr,
            children: [
                f.jsx(a, { className: kr }),
                f.jsx('div', { className: Sr, children: t.readOrEmpty(`menu.tank_params.${e}`) }),
            ],
        });
    console.error(`Unknown ttc param ${e}`);
}
const Mr = 'Section_5872c61',
    Lr = 'Section_container_5872c61',
    Dr = 'Section_header_53353a5a',
    Tr = 'Section_detailsContainer_41624a97',
    Ar = 'Section_arrow_931be12',
    Br = 'Section_arrow__opened_9ccaa82',
    Vr = ee.resolve('aliases'),
    Or = C(function ({
        indicatorList: e,
        status: t,
        type: a,
        opened: n,
        className: s,
        classNames: r,
        params: o,
        extraParams: i,
        tooltipID: l,
        ...c
    }) {
        const [d, u] = v.useState(n),
            m = v.useRef(),
            { api: p } = ve(),
            _ = fe(),
            { controls: h } = Us();
        be(() => clearTimeout(m.current));
        const g = v.useMemo(() => ({ tooltipId: l, paramId: a, extendedTooltip: !0 }), [a, l]),
            x = me({ resId: Vr.read((e) => e.hangar.shared.VehicleParams('resId')), args: g });
        return f.jsx('div', {
            className: b(Mr, s),
            children: f.jsxs(xe, {
                opened: d,
                children: [
                    f.jsx(xe.Summary, {
                        onClick: function (e) {
                            (u(!d),
                                _.play('click', { target: 'vehicle-ttc-section:accordion-summary', original: e }),
                                clearTimeout(m.current),
                                n || h.selectGroup(a));
                        },
                        onMouseEnter: function (e) {
                            _.play('mouse-enter', { target: 'vehicle-ttc-section:accordion-summary', original: e });
                        },
                        className: null == r ? void 0 : r.summary,
                        children: f.jsxs('div', {
                            className: Lr,
                            ...x,
                            children: [
                                f.jsxs('div', {
                                    className: Dr,
                                    children: [f.jsx(Er, { type: a }), f.jsx(xe.Arrow, { className: b(Ar, d && Br) })],
                                }),
                                f.jsx(Ir, { indicatorList: e, status: t }),
                            ],
                        }),
                    }),
                    f.jsx(xe.AnimatedDetails, {
                        className: null == r ? void 0 : r.accordionDetails,
                        opened: o.length + i.length > 0 && d,
                        animationSettings: {
                            onRest: function () {
                                (clearTimeout(m.current),
                                    (m.current = setTimeout(() => {
                                        (p.recalculateContent(), !d && n && h.selectGroup(a));
                                    }, 50)));
                            },
                        },
                        children: f.jsx(_r, { ...c, params: o, extraParams: i, className: Tr }),
                    }),
                ],
            }),
        });
    }),
    Rr = {
        root: 'TechParams_root_b77d0f7c',
        base: 'TechParams_b3ba50e6',
        verticalBar: 'TechParams_verticalBar_bd5cdb1d',
        scrollWrapper: 'TechParams_scrollWrapper_5abc1570',
        scrollContent__top: 'TechParams_scrollContent__top_6469f01f',
        scrollContent__bottom: 'TechParams_scrollContent__bottom_a61f5879',
        scrollContent__both: 'TechParams_scrollContent__both_8e38b624',
        sections: 'TechParams_sections_9dd6eaf2',
        section: 'TechParams_section_301fd6a1',
    },
    zr = C(function ({ indicatorAmount: e, classNames: t }) {
        const { model: n } = Us(),
            { api: s } = ve(),
            [r, o] = ye(s);
        return f.jsxs(f.Fragment, {
            children: [
                f.jsx(Ce, {
                    classNames: {
                        wrapper: Rr.scrollWrapper,
                        content: b(Rr.scrollContent, Rr[`scrollContent__${tr(r, o)}`]),
                    },
                    children: f.jsx('div', {
                        className: Rr.sections,
                        children: n.computes
                            .sectionParams(e)
                            .map((e) =>
                                a.createElement(Or, { ...e, key: e.type, className: Rr.section, classNames: t }),
                            ),
                    }),
                }),
                f.jsx(we, { classNames: { base: Rr.verticalBar } }),
            ],
        });
    }),
    $r = C(function ({ indicatorAmount: e = 10, className: t, classNames: n }) {
        const { model: s } = Us(),
            r = fe(),
            o = s.computes
                .sectionParams(e)
                .map(({ indicatorList: e }) => e.map((e) => Object.values(e).join(':')).join('-'))
                .join('_');
        return (
            a.useEffect(() => {
                r.play('animation', { target: 'vehicle-ttc-section:accordion-summary' });
            }, [r, o]),
            f.jsx('div', {
                className: b(Rr.base, t),
                children: f.jsx(Ne, { children: f.jsx(zr, { indicatorAmount: e, classNames: n }) }),
            })
        );
    });
var Hr = ((e) => (
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
    ))(Hr || {}),
    Fr = ((e) => (
        (e.Visible = 'visible'),
        (e.Hidden = 'hidden'),
        (e.NotSuitableVehicle = 'notSuitableVehicle'),
        (e.NoDataAtAll = 'noDataAtAll'),
        e
    ))(Fr || {}),
    Wr = ((e) => (
        (e[(e.NoData = 0)] = 'NoData'),
        (e[(e.Normal = 1)] = 'Normal'),
        (e[(e.Linked = 2)] = 'Linked'),
        (e[(e.Combined = 3)] = 'Combined'),
        e
    ))(Wr || {}),
    qr = ((e) => ((e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7'), e))(qr || {}),
    Zr = ((e) => ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'), e))(Zr || {});
const [Ur, Gr] = B('OptionalDevicesAssistantModel')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['state']),
                    selectedPreset: e.object('selectedPreset'),
                    optionalDevicesAssistantPresets: e.arrayClone('optionalDevicesAssistantPresets'),
                },
                a = () =>
                    ue(t.optionalDevicesAssistantPresets.get(), (e) => ({
                        ...e,
                        optionalDevicesAssistantItems: ue(e.optionalDevicesAssistantItems, (e) => ({
                            ...e,
                            items: ue(e.items, H),
                        })),
                    })),
                n = (e) =>
                    Ie(
                        t.optionalDevicesAssistantPresets.get(),
                        (t, a) => {
                            if (a.presetType.mType === e) {
                                const e = ue(a.optionalDevicesAssistantItems, (e) => ({ ...e, items: ue(e.items, H) }));
                                t.push(...e);
                            }
                            return t;
                        },
                        [],
                    ),
                s = X.primitive(() => n(1).sort((e, t) => t.popularity - e.popularity)),
                r = X.primitive(() => n(0).sort((e, t) => t.popularity - e.popularity));
            return {
                ...t,
                computes: {
                    modeType: () => {
                        var e;
                        const t = Zr.Common || Zr.Legendary;
                        return null == (e = a().find((e) => e.presetType.mType === t)) ? void 0 : e.modeType;
                    },
                    sortedCommonItems: r,
                    sortedLegendaryItems: s,
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
    Kr = 'PopularLoadouts_905d92af',
    Jr = 'PopularLoadouts_base__legendary_44c73d25',
    Xr = 'PopularLoadouts_lipsIcon_94b94918',
    Qr = 'PopularLoadouts_base__linked_44c73d25',
    Yr = 'PopularLoadouts_lips_f8140539',
    eo = 'PopularLoadouts_base__noDataLegendary_44c73d25',
    to = 'PopularLoadouts_row_empty_79f784c5',
    ao = 'PopularLoadouts_noDataLegendary_8871a45c',
    no = 'PopularLoadouts_noData_44c73d25',
    so = 'PopularLoadouts_vehicleNotAvailable_6aaecb23',
    ro = 'PopularLoadouts_noData_text_44c73d25',
    oo = 'PopularLoadouts_vehicleNotAvailable_text_f6a0ffe8',
    io = 'PopularLoadouts_scrollWrapper_f6e40aea',
    lo = 'PopularLoadouts_scroll_5547fb14',
    co = 'PopularLoadouts_verticalBar_4b7df3ca',
    uo = 'PopularLoadouts_background_59528a5b',
    mo = 'PopularLoadouts_onslaughtBackground_87fd615d',
    po = 'PopularLoadouts_backgroundWrapper_ceadd975',
    _o = 'PopularLoadouts_backgroundWrapper__noData_577b30c5',
    ho = 'PopularLoadouts_border_bb3c99b0',
    go = 'PopularLoadouts_container_7ca114a3',
    vo = 'PopularLoadouts_row_41e986f6',
    fo = 'PopularLoadouts_row_images_11958d34',
    bo = 'PopularLoadouts_row_images__hovered_6d465f9f',
    xo = 'PopularLoadouts_row_image_44c73d25',
    yo = 'PopularLoadouts_row_emptySlot_19879be4',
    Co = 'PopularLoadouts_popularity_85b17be2',
    wo = 'PopularLoadouts_popularity__visible_99ebbe75',
    No = 'PopularLoadouts_lipsWrapper_f6e40aea',
    Io = 'PopularLoadouts_footer_e8f21254',
    jo = 'PopularLoadouts_footer_wrapper_2b5337f0',
    ko = 'PopularLoadouts_footer_wrapper_title_ddd0fc04',
    So = 'PopularLoadouts_footer_wrapper_pagination_f70ced5f',
    Po = 'PopularLoadouts_dot1_859b9d81',
    Eo = 'PopularLoadouts_dot2_290c1eaf',
    Mo = 'PopularLoadouts_dot1__active_44c73d25',
    Lo = 'PopularLoadouts_dot2__active_22013c6c',
    Do = 'PopularLoadouts_footer_arrowWrapper_2b51cfb1',
    To = 'PopularLoadouts_footer_arrowLeft_44c73d25',
    Ao = 'PopularLoadouts_footer_arrowRight_f495386';
function Bo(e) {
    return (t = e) !== Hr.Empty && t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
        ? `tanksetup.popular_loadouts.optional_devices.${e}`
        : null;
    var t;
}
function Vo(e) {
    return Number.isInteger(e) ? `${e}` : e.toFixed(2);
}
function Oo({ popularity: e, optionalDevice: t, isHovered: n }) {
    const s = a.useMemo(() => t.map(Bo).concat(new Array(3).fill(null)).slice(0, 3), [t]),
        r = 0 === t.length;
    return f.jsxs('div', {
        className: b(vo, r && to),
        children: [
            f.jsx('div', {
                className: b(Co, n && wo),
                children: f.jsx(je, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: Vo(e) } }),
            }),
            f.jsx('div', {
                className: b(fo, n && bo),
                children: s.map((e, t) =>
                    e ? f.jsx(ke, { className: xo, path: e }, t) : f.jsx('div', { className: yo }, t),
                ),
            }),
        ],
    });
}
const Ro = ee.resolve('aliases'),
    zo = ee.resolve('views'),
    $o = ee.resolve('strings'),
    Ho = C(function ({
        notSuitableVehicle: e,
        noData: t,
        combined: n,
        noDataLegendary: s,
        currentPage: r,
        optionalDevicesResultType: o,
        setCurrentPage: i,
    }) {
        const l = fe(),
            [c, d] = a.useState(!1),
            { model: u, controls: m } = Gr(),
            p = u.computes.modeType() === qr.Comp7,
            _ = c && !n,
            h = u.computes.sourceVehicleCompDescrForPreset(r),
            g = u.computes.sortedCommonItems(),
            v = u.computes.sortedLegendaryItems(),
            x = r === Zr.Common ? g : v,
            y = a.useMemo(() => Array.from({ length: 3 }, (e, t) => x[t] ?? { popularity: 0, items: [] }), [x]),
            C = Se({
                resId: Ro.read((e) => e.hangar.shared.OptionalDevicesAssistant('resId')),
                contentId: zo.read((e) => e.lobby.tanksetup.tooltips.PopularLoadoutsTooltip('resId')),
                args: { sourceVehicleCompDescr: h, optionalDevicesResultType: o },
            }),
            w =
                r === Zr.Common
                    ? $o.readOrEmpty('tank_setup.popularLoadouts.common')
                    : $o.readOrEmpty('tank_setup.popularLoadouts.legendary');
        function N() {
            const e = r === Zr.Common ? Zr.Legendary : Zr.Common;
            (i(e), m.changePreset(e));
        }
        if (e)
            return f.jsx('div', {
                className: so,
                children: f.jsx('div', {
                    className: oo,
                    children: $o.readOrEmpty('tank_setup.popularLoadouts.vehicleNotAvailable'),
                }),
            });
        if (t)
            return f.jsx('div', {
                className: no,
                children: f.jsx('div', {
                    className: ro,
                    children: $o.readOrEmpty('tank_setup.popularLoadouts.noData'),
                }),
            });
        function I(e) {
            l.play('click', { target: 'loadout:popular-loadouts-content:arrow-wrapper', original: e });
        }
        function j(e) {
            l.play('mouse-enter', { target: 'loadout:popular-loadouts-content:arrow-wrapper', original: e });
        }
        return f.jsxs(f.Fragment, {
            children: [
                f.jsx('div', { className: ho }),
                s &&
                    f.jsx('div', {
                        className: ao,
                        children: $o.readOrEmpty('tank_setup.popularLoadouts.noDataLegendary'),
                    }),
                f.jsx('div', { className: uo }),
                p && f.jsx('div', { className: mo }),
                f.jsx('div', {
                    className: io,
                    children: f.jsxs(Ne, {
                        children: [
                            f.jsx(Ce, {
                                className: lo,
                                children: f.jsx('div', {
                                    className: go,
                                    onMouseEnter: (e) => {
                                        (l.play('mouse-enter', {
                                            target: 'loadout:popular-loadouts-content:container',
                                            original: e,
                                        }),
                                            d(!0));
                                    },
                                    onMouseLeave: () => d(!1),
                                    children: y.map((e, t) =>
                                        f.jsx(
                                            Oo,
                                            { popularity: e.popularity, optionalDevice: e.items, isHovered: _ },
                                            t,
                                        ),
                                    ),
                                }),
                            }),
                            f.jsx(we, { classNames: { base: co } }),
                        ],
                    }),
                }),
                f.jsx('div', { className: ho }),
                f.jsx('div', { className: Yr }),
                f.jsxs('div', {
                    className: Io,
                    children: [
                        f.jsx('div', {
                            className: Do,
                            onMouseEnter: j,
                            onClick: I,
                            children: f.jsx('div', { className: To, onClick: N }),
                        }),
                        f.jsxs('div', {
                            className: jo,
                            children: [
                                f.jsxs('div', {
                                    ...C,
                                    className: No,
                                    children: [
                                        f.jsx('div', { className: Xr }),
                                        f.jsx('div', { className: ko, children: w }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: So,
                                    children: [
                                        f.jsx('div', { className: b(Po, 0 === r && Mo) }),
                                        f.jsx('div', { className: b(Eo, 1 === r && Lo) }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsx('div', {
                            className: Do,
                            onMouseEnter: j,
                            onClick: I,
                            children: f.jsx('div', { className: Ao, onClick: N }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Fo = C(function () {
        const { model: e } = Gr(),
            [t, n] = a.useState(e.selectedPreset.get().mType || Zr.Common),
            s = e.computes.optionalDevicesResultTypeForPreset(t),
            r = s === Wr.Linked,
            o = s === Wr.Combined,
            i = r || o,
            l = s === Wr.NoData && Zr.Legendary,
            c = e.state.get() === Fr.NoDataAtAll,
            d = e.state.get() === Fr.NotSuitableVehicle;
        return f.jsxs('div', {
            className: b(Kr, t === Zr.Legendary && Jr, i && Qr, l && eo),
            children: [
                f.jsx('div', { className: b(po, (c || d) && _o) }),
                f.jsx(Ho, {
                    notSuitableVehicle: d,
                    noData: c,
                    noDataLegendary: l,
                    combined: o,
                    optionalDevicesResultType: s,
                    currentPage: t,
                    setCurrentPage: n,
                }),
            ],
        });
    }),
    Wo = 'EquipmentAssistant_c5998863',
    qo = C(function ({ className: e }) {
        const { model: t } = Gr(),
            a = t.state.get() === Fr.Hidden;
        return f.jsx('div', {
            className: b(Wo, e),
            'data-test-id': 'equipmentAssistant',
            children: !a && f.jsx(Fo, {}),
        });
    }),
    Zo = 'TankInfo_5a43ab26',
    Uo = 'TankInfo_ttc_b7c2d1d7',
    Go = 'TankInfo_techParams_3f23a8c3',
    Ko = 'TankInfo_text_3d2affa7',
    Jo = 'TankInfo_equipmentAssistant_6633e061',
    Xo = 'TankInfo_vehicleInfo_6633e061',
    Qo = 'TankInfo_summary_1066f4ee',
    Yo = 'TankInfo_accordionDetails_e30a5dd6',
    ei = ee.resolve('aliases'),
    ti = Pe('LoadoutScreenTankInfo'),
    ai = { summary: Qo, accordionDetails: Yo },
    ni = C(function ({ rootId: e, className: t, children: a }) {
        const n = As().model.selectedVehicle(),
            s = As().model.selectedVehicleStatistics();
        if (n && s)
            return f.jsxs(ti, {
                className: b(Zo, t),
                children: [
                    f.jsxs(Ee, {
                        className: Xo,
                        children: [
                            f.jsx(Ee.Level, { className: Ko, value: n.level }),
                            Me(n.type) && f.jsx(Ee.Type, { type: n.type, premium: s.elite }),
                            f.jsx(Ee.Name, { className: Ko, children: n.shortName }),
                        ],
                    }),
                    f.jsx('div', {
                        className: Uo,
                        children: f.jsx(Zs, {
                            options: { rootId: e ?? ei.read((e) => e.hangar.shared.VehicleParams('resId')) },
                            children: f.jsx($r, { className: Go, classNames: ai }),
                        }),
                    }),
                    a,
                ],
            });
    });
function si({ className: e }) {
    const t = ei.read((e) => e.hangar.shared.OptionalDevicesAssistant('resId'));
    return f.jsx(Ur, { options: { rootId: t }, children: f.jsx(qo, { className: b(Jo, e) }) });
}
const ri = C(function ({ className: e }) {
        const t = Le().location.startsWith('/hangar/loadout/equipment');
        return f.jsx(ni, { className: e, children: t && f.jsx(si, {}) });
    }),
    oi = 'ScreenWrapper_39a2fe74',
    ii = 'ScreenWrapper_inner_f586f6da',
    li = 'ScreenWrapper_content_42e9ccec',
    ci = 'ScreenWrapper_info_b6387d23',
    di = 'ScreenWrapper_flag_f17acc40',
    ui = ee.resolve('aliases'),
    mi = Pe('LoadoutScreenWrapper', oi),
    pi = Pe('ScreenWrapperInfo', ci),
    _i = Pe('ScreenWrapperContent', li);
const hi = a.createContext({ ttcEnabled: !1 });
function gi({ classNames: e, children: t }) {
    const a = As().model.selectedVehicle();
    return f.jsxs(mi, {
        className: null == e ? void 0 : e.base,
        children: [
            a && f.jsx(ke, { className: b(di, null == e ? void 0 : e.flag), path: `flags.c_600x450.${G(a.nationId)}` }),
            f.jsx('div', { className: ii, children: t }),
        ],
    });
}
const vi = C(function ({ classNames: e, children: t }) {
        const n = (function () {
                const e = As().model.selectedVehicle(),
                    t = Rs(),
                    a = ui.read((e) => e.hangar.shared.VehicleParams('resId')),
                    n = De(a);
                return Boolean(e) && (!t || t.model.computed.ttcEnabled()) && n;
            })(),
            s = a.useMemo(() => ({ ttcEnabled: n }), [n]);
        return f.jsx(hi.Provider, {
            value: s,
            children: f.jsxs(gi, {
                classNames: { base: null == e ? void 0 : e.base, flag: null == e ? void 0 : e.flag },
                children: [
                    f.jsx(_i, { className: null == e ? void 0 : e.content, children: t }),
                    f.jsx(pi, {
                        className: null == e ? void 0 : e.info,
                        children: n && f.jsx(ri, { className: null == e ? void 0 : e.tankInfo }),
                    }),
                ],
            }),
        });
    }),
    fi = { buySlot: 'buySlot', buyTank: 'buyTank', restoreTank: 'restoreTank', rentTank: 'rentTank' },
    bi = {
        [fi.buySlot]: 'buy_slot',
        [fi.buyTank]: 'buy_vehicle_new',
        [fi.restoreTank]: 'restore_vehicle',
        [fi.rentTank]: 'wot_plus_slot',
    },
    xi = (e, t) => ({
        left: [...(t != Ds ? [fi.rentTank] : [])],
        right: [fi.buyTank, ...(e > 0 ? [fi.restoreTank] : []), fi.buySlot],
    }),
    yi = (e) => e in fi;
function Ci(e, t) {
    return a.useMemo(() => {
        if (!t) return { currentIndex: -1, currentPosition: -1 };
        const a = e.indexOf(t);
        return { currentIndex: a, currentPosition: a >= 0 ? a + 1 : -1 };
    }, [e, t]);
}
function wi(e, t, n, s, r, o) {
    const i = a.useRef(null);
    a.useLayoutEffect(() => {
        function a() {
            const a = e.getWrapperSize(),
                l = e.animationScroll.scrollPosition.get();
            if (!a) return;
            o && e.applyScroll(0, { immediate: !0 });
            const c = n - Ae(1),
                d = l,
                u = l + a,
                m = c * Math.floor(t / s),
                p = m + c,
                _ = m - (Math.floor(a / c) / 2) * c;
            if (m > d && p < u) {
                if (i.current && r) {
                    0 !== i.current - r && e.applyScroll(_, { immediate: !0 });
                }
                i.current = r;
            } else ((i.current = r), e.applyScroll(_, { immediate: !0 }));
        }
        a();
        return new Te().add(e.events.on('resizeHandled', a)).add(e.events.on('recalculateContent', a)).dispose;
    }, [t, e, n, s, o, r]);
}
const Ni = {
    base: 'Content_7ccb81a0',
    disabledOverlay: 'Content_disabledOverlay_a8908196',
    base__disabled: 'Content_base__disabled_da09528a',
    base__selected: 'Content_base__selected_da09528a',
    base__empty: 'Content_base__empty_da09528a',
};
function Ii({ children: e, selected: t, disabled: a, empty: n }) {
    return f.jsxs('div', {
        'data-name': 'Content',
        className: b(Ni.base, n && Ni.base__empty, t && Ni.base__selected, a && Ni.base__disabled),
        children: [e, a && f.jsx('div', { className: Ni.disabledOverlay })],
    });
}
const ji = {
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
function ki({ children: e, selected: t = !1, disabled: a = !1, active: n, className: s, ...r }) {
    const o = a || void 0 === r.onClick;
    return f.jsx('div', {
        ...r,
        'data-name': 'Slot',
        className: b(
            ji.base,
            n && ji.base__active,
            t && ji.base__selected,
            a && ji.base__disabled,
            o && ji.base__empty,
            ji.base__wrapper,
            s,
        ),
        children: f.jsxs('div', {
            className: ji.content,
            children: [
                f.jsx(Ii, { selected: t, disabled: a, empty: o, children: e }),
                t && f.jsx('div', { className: b(ji.selected, ji.selected__border) }),
                f.jsx('div', { className: ji.selected }),
            ],
        }),
    });
}
const Si = {
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
    Pi = { [Ms]: 'menu.tankCarousel.wotPlusSelectionPending', [Ls]: 'menu.tankCarousel.wotPlusSelectionAvailable' },
    Ei = C(function ({ type: e }) {
        const t = As(),
            a = t.model.slots.price.currency.get(),
            n = t.model.slots.price.value.get(),
            s = t.model.slots.free.get(),
            r = t.model.slots.recover.get(),
            o = t.model.slots.discount.get(),
            i = t.model.telecomRentStatus.get();
        if (e === fi.buySlot)
            return f.jsx('div', {
                className: Si.currency,
                children: f.jsx(Be, {
                    type: Oe.currency,
                    size: Ve.extraSmall,
                    enabled: o,
                    classNames: { icon: Si.discount },
                    children: f.jsx(Re, {
                        type: a,
                        size: Ve.extraSmall,
                        reverse: !0,
                        classNames: { base: b(Si.content, Si.content__buySlot), icon: Si.contentIcon },
                        children: n,
                    }),
                }),
            });
        if (e === fi.rentTank) {
            const e = Pi[i];
            return e ? f.jsx(je, { className: Si.text, upgradeLegacy: !0, path: e }) : null;
        }
        return f.jsxs('div', {
            className: Si.content,
            children: [
                e === fi.buyTank &&
                    f.jsx(je, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.buyTankEmptyCount',
                        params: { count: s },
                    }),
                e === fi.restoreTank &&
                    f.jsx(je, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.restoreTankCount',
                        params: { count: r },
                    }),
            ],
        });
    });
function Mi({ type: e, width: t, height: n, doubleRow: s, className: r }) {
    const o = As(),
        i = fe(),
        l = o.model.slots.price.value.get(),
        c = o.model.slots.price.defaultValue.get(),
        d = o.model.slots.discount.get();
    o.model.telecomRentStatus.get();
    const u = ee.resolve('strings'),
        m = ze(`hangar.carousel.actionCards.x48x48.${e}`, `hangar.carousel.actionCards.x96x96.${e}`),
        p = $e({
            header: u.readOrEmpty(`tooltips.tanks_carousel.${bi[e]}.header`),
            body: u.readOrEmpty(`tooltips.tanks_carousel.${bi[e]}.body`),
        }),
        _ = He(
            'actionSlotPrice',
            a.useMemo(() => [[l], [c]], [l, c]),
            a.useMemo(() => ({ disabled: !d }), [d]),
        ),
        h = d && bi[e] === bi.buySlot ? _ : p;
    return f.jsx(ki, {
        ...h,
        className: r,
        style: { width: `${t}px`, height: `${n}px` },
        'data-test-id': e,
        onClick: function (t) {
            (h.onClick(), i.play('click', { target: 'vehicle:action-cards', original: t }));
            const a = {
                [fi.buySlot]: o.controls.buySlot,
                [fi.buyTank]: o.controls.goBuyVehicle,
                [fi.restoreTank]: o.controls.goRecoverVehicle,
                [fi.rentTank]: o.controls.selectTelecomRentalVehicle,
            }[e];
            if ('function' != typeof a) return console.error(`Unknown action type ${e} in ${Mi.name} handleClick`);
            a();
        },
        onMouseEnter: function (e) {
            (h.onMouseEnter(e), i.play('mouse-enter', { target: 'vehicle:action-cards', original: e }));
        },
        children: f.jsxs('div', {
            className: b(Si.wrapper, s && Si.wrapper__double),
            children: [
                f.jsx(ke, {
                    className: Si.icon,
                    path: `hangar.carousel.actionCards.x32x32.${e}`,
                    adaptive: { medium: { path: m } },
                }),
                f.jsx('div', {
                    className: Si.text,
                    children: f.jsx(je, { path: `menu.tankCarousel.vehicleStates.${e}` }),
                }),
                f.jsx(Ei, { type: e }),
            ],
        }),
    });
}
const Li = 'undamaged',
    Di = { ['54033']: 'alpha', ['50705']: 'alpha', ['51201']: 'super', ['56833']: 'super' },
    Ti = {
        ammoNotFull: 'ammoNotFull',
        crewNotFull: 'crewNotFull',
        exploded: 'exploded',
        destroyed: 'destroyed',
        damaged: 'damaged',
        rentable: 'rentable',
        rentableAgain: 'rentableAgain',
        rentalIsOver: 'rentalIsOver',
        tooHeavy: 'tooHeavy',
        unsuitableToQueue: 'unsuitableToQueue',
        unsuitableToUnit: 'unsuitableToUnit',
        inPrebattle: 'inPrebattle',
        battle: 'battle',
        wot_plus_exclusive_vehicle_disabled: 'wot_plus_exclusive_vehicle_disabled',
    },
    Ai = {
        [Ti.ammoNotFull]: 'ammo',
        [Ti.crewNotFull]: 'crew',
        [Ti.exploded]: 'repair',
        [Ti.destroyed]: 'repair',
        [Ti.damaged]: 'repair',
        [Ti.rentable]: 'rental',
        [Ti.rentableAgain]: 'rental',
        [Ti.rentalIsOver]: 'rental',
        [Ti.tooHeavy]: 'notSuitable',
        [Ti.unsuitableToQueue]: 'notSuitable',
        [Ti.unsuitableToUnit]: 'notSuitable',
        [Ti.inPrebattle]: 'inPlatoon',
        [Ti.battle]: 'inBattle',
        [Ti.wot_plus_exclusive_vehicle_disabled]: 'notSuitable',
    };
function Bi(e, t, a) {
    return !(!e || t === ls || !a) && a.status !== Ti.unsuitableToQueue && a.maxBpScore > 0;
}
const Vi = {
        base: 'Background_1089bc1c',
        wotPlus: 'Background_wotPlus_3cf6035a',
        crystal: 'Background_crystal_6112fa42',
        bpBonus: 'Background_bpBonus_86685469',
        flag: 'Background_flag_57525fcb',
        base__double: 'Background_base__double_26effab7',
        flag__active: 'Background_flag__active_de322c1b',
        vehicle: 'Background_vehicle_23ef6e2b',
        vehicle__dimmed: 'Background_vehicle__dimmed_4dddd8fc',
        crystal__limit: 'Background_crystal__limit_61072361',
        favorite: 'Background_favorite_d98f92cc',
        favorite__active: 'Background_favorite__active_7f14a6c7',
    },
    Oi = Pe('Favorite', Vi.favorite, { variants: { active: { true: Vi.favorite__active } } });
function Ri({ vehicle: e, selected: t, active: a, className: n }) {
    return f.jsx(ke, {
        className: b(Vi.flag, t || (a && Vi.flag__active), n),
        path: `hangar.carousel.cards.flags.x400x300.${G(e.nationId)}`,
        position: 'top left',
    });
}
const zi = C(function ({ vehicle: e, statistic: t, validBP: a, classNames: n }) {
    var s;
    const r = (null == (s = Dn()) ? void 0 : s.model.isCrystalEarnEnabled.get()) ?? !0;
    if (!t) return;
    const o = (Fe(t.numberOfCrystalEarned, 1) ?? 0) <= (Fe(t.numberOfCrystalEarned, 0) ?? 0);
    return f.jsxs(f.Fragment, {
        children: [
            t.fromWotPlus && f.jsx('div', { className: b(Vi.wotPlus, null == n ? void 0 : n.wotPlus) }),
            r &&
                e.crystalEarning &&
                f.jsx('div', { className: b(Vi.crystal, o && Vi.crystal__limit, null == n ? void 0 : n.crystal) }),
            t.bpSpecial && a && f.jsx('div', { className: b(Vi.bpBonus, null == n ? void 0 : n.bpBonus) }),
        ],
    });
});
function $i({ vehicle: e, validBP: t, dimmed: a, active: n, statistic: s, selected: r, doubleRow: o, ...i }) {
    return f.jsxs('div', {
        ...i,
        className: b(Vi.base, o && Vi.base__double, i.className),
        children: [
            f.jsx(Ri, { vehicle: e, active: n, selected: r }),
            f.jsx(We, {
                className: b(
                    Vi.vehicle,
                    (((null == s ? void 0 : s.status) && s.status !== Li) || a) && Vi.vehicle__dimmed,
                ),
                name: e.name,
            }),
            f.jsx(zi, { vehicle: e, statistic: s, validBP: t }),
            f.jsx(Oi, { active: e.favorite }),
        ],
    });
}
const Hi = 'Bonuses_8169b4b3',
    Fi = 'Bonuses_bonus_af8ebe7c',
    Wi = 'Bonuses_bonus__active_2364401e',
    qi = 'Bonuses_bonusIcon_b65fb47f',
    Zi = 'Bonuses_bonusValue_322db074',
    Ui = 'Bonuses_rent_ea11a7e4',
    Gi = 'Bonuses_base__double_ca1cd57b',
    Ki = 'Bonuses_icon_3991db74',
    Ji = 'Bonuses_text_a556857c',
    Xi = ee.resolve('strings');
function Qi({ bonusMultiplier: e, className: t, classNames: a }) {
    return f.jsxs('div', {
        className: b(Fi, -1 !== e && Wi, t),
        children: [
            f.jsx('div', { className: b(qi, null == a ? void 0 : a.icon) }),
            f.jsx('div', {
                className: b(Zi, null == a ? void 0 : a.value),
                children: `${Xi.readOrEmpty('common.multiplierSmall')}${e}`,
            }),
        ],
    });
}
const Yi = C(function ({ vehicle: e, statistic: t, doubleRow: a, ...n }) {
        var s;
        const r = (null == (s = Dn()) ? void 0 : s.model.isDailyMultipliedXpEnabled.get()) ?? !0;
        return f.jsxs('div', {
            ...n,
            className: b(Hi, a && Gi, n.className),
            children: [
                r && t && f.jsx(Qi, { bonusMultiplier: t.bonusMultiplier }),
                f.jsx(qe.ShortCounter, {
                    time: e.rent.leftTime,
                    wins: e.rent.leftWins,
                    battles: e.rent.leftBattles,
                    classNames: { base: Ui, icon: Ki, text: Ji },
                }),
            ],
        });
    }),
    el = {
        root: 'Information_root_6e8d4f26',
        base: 'Information_dd628d50',
        info: 'Information_info_b2948982',
        details: 'Information_details_e5340a0c',
        base__double: 'Information_base__double_6e8d4f26',
        text: 'Information_text_2260d128',
        text__level: 'Information_text__level_e5a9014e',
        text__premium: 'Information_text__premium_741ebb2f',
        truncatedName: 'Information_truncatedName_f698f1ce',
        battlePass: 'Information_battlePass_63749625',
        battlePass__bonus: 'Information_battlePass__bonus_6e8d4f26',
        battlePass__active: 'Information_battlePass__active_960b5eed',
        bpPoints: 'Information_bpPoints_21ee2e63',
        points: 'Information_points_b67585b1',
        points__slash: 'Information_points__slash_b8c7004e',
        bpShadow: 'Information_bpShadow_4248ba9f',
        bpIcon: 'Information_bpIcon_a622154',
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
    },
    tl = Pe('VehicleName', {
        element: Ee.Name,
        className: el.text,
        cva: { variants: { premium: { true: el.text__premium } } },
    });
function al({ statistic: e, vehicle: t, className: a, status: n }) {
    const s = ee.resolve('views'),
        r = ee.resolve('aliases'),
        o = ee.resolve('strings'),
        i = Se({
            resId: r.read((e) => e.hangar.shared.VehiclesStatistics('resId')),
            contentId: s.read((e) =>
                'paused' !== n
                    ? e.lobby.battle_pass.tooltips.VehiclePointsTooltipView('resId')
                    : e.lobby.battle_pass.tooltips.BattlePassOnPauseTooltipView('resId'),
            ),
            args: { intCD: null == t ? void 0 : t.vehicleId },
        });
    return f.jsxs('div', {
        className: b(el.battlePass, e.maxBpScore > 0 && el.battlePass__active, e.bpSpecial && el.battlePass__bonus, a),
        onMouseEnter: function (e) {
            null == i || i.onMouseEnter(e);
        },
        onMouseLeave: function (e) {
            null == i || i.onMouseLeave();
        },
        children: [
            f.jsxs('div', {
                className: el.bpPoints,
                children: [
                    f.jsx('div', { className: el.points, children: Ze.formatNumber('integral', e.bpProgress) }),
                    f.jsx('div', {
                        className: b(el.points, el.points__slash),
                        children: o.readOrEmpty('common.common.slash'),
                    }),
                    f.jsx('div', { className: el.points, children: Ze.formatNumber('integral', e.maxBpScore) }),
                    f.jsx('div', { className: el.bpShadow }),
                ],
            }),
            f.jsx('div', { className: el.bpIcon }),
        ],
    });
}
function nl({ statistic: e, elite: t, vehicle: a, selected: n, classNames: s, className: r }) {
    return f.jsxs('div', {
        className: b(el.details, r),
        children: [
            e &&
                f.jsx(Ee.Prestige, {
                    level: e.prestigeLevel,
                    grade: e.prestigeGrade,
                    type: e.prestigeType,
                    direction: Ue.left,
                    className: b(el.prestige, n && el.prestige__active, null == s ? void 0 : s.prestige),
                }),
            f.jsx(Ee.Level, { className: b(el.text, el.text__level, null == s ? void 0 : s.level), value: a.level }),
            Me(a.type) &&
                f.jsx(Ee.Type, {
                    type: a.type,
                    premium: t || (null == e ? void 0 : e.elite),
                    size: Ee.Type.sizes.x24x24,
                    className: null == s ? void 0 : s.type,
                }),
        ],
    });
}
function sl({ vehicle: e, className: t, classNames: a }) {
    const n = Di[e.id],
        s = e.nationChangeAvailable,
        r = e.rent.leftTime > 0 || e.rent.leftWins > 0 || e.rent.leftBattles > 0;
    return f.jsxs('div', {
        className: b(
            el.identifier,
            el[`identifier__${n}`],
            s && el.identifier__changeNation,
            r && el.identifier__rent,
            t,
        ),
        children: [
            f.jsx(tl, {
                className: null == a ? void 0 : a.name,
                premium: e.premium,
                children: f.jsx(Ge, { className: el.truncatedName, text: e.shortName }),
            }),
            (n || s) &&
                f.jsx('div', {
                    className: b(
                        el.identifierIcon,
                        el[`identifierIcon__${n}`],
                        s && el.identifierIcon__changeNation,
                        null == a ? void 0 : a.icon,
                    ),
                }),
        ],
    });
}
const rl = C(function ({ vehicle: e, statistic: t, selected: a, doubleRow: n, ...s }) {
        const r = As(),
            o = r.model.bpState.active.get(),
            i = r.model.bpState.status.get();
        return f.jsxs('div', {
            ...s,
            className: b(el.base, n && el.base__double, s.className),
            children: [
                t && Bi(o, i, t) && f.jsx(al, { vehicle: e, statistic: t, status: i }),
                f.jsxs(Ee, {
                    className: el.info,
                    children: [f.jsx(nl, { vehicle: e, statistic: t, selected: a }), f.jsx(sl, { vehicle: e })],
                }),
            ],
        });
    }),
    ol = {
        base: 'Overlay_fc7c8edc',
        alert: 'Overlay_alert_db4a0e15',
        alertIcon: 'Overlay_alertIcon_3d7c077a',
        base__double: 'Overlay_base__double_3c7155a',
        alertText: 'Overlay_alertText_8a4e1d4d',
        alertText__light: 'Overlay_alertText__light_bece984e',
    };
function il({ status: e, classNames: t, className: a }) {
    const n = ee.resolve('images'),
        s = ze(`hangar.carousel.cards.alerts.${Ai[e]}`, `hangar.carousel.cards.alerts.${Ai[e]}_upscale`),
        r = ze('hangar.carousel.cards.alerts.notSuitable', 'hangar.carousel.cards.alerts.notSuitable_upscale'),
        o = e === Ti.battle || e === Ti.inPrebattle;
    return f.jsxs('div', {
        className: b(ol.alert, a),
        children: [
            f.jsx(ke, { className: b(ol.alertIcon, null == t ? void 0 : t.icon), path: n.has(s) ? s : r }),
            f.jsx(je, {
                upgradeLegacy: !0,
                className: b(ol.alertText, o && ol.alertText__light, null == t ? void 0 : t.text),
                path: `menu.tankCarousel.vehicleStates.${e}`,
                params: { icon: f.jsx(ke, { path: 'library.premium_small', width: 34, height: 16 }) },
            }),
        ],
    });
}
function ll({ statistic: e, doubleRow: t, ...a }) {
    return e.status === Li
        ? null
        : f.jsx('div', {
              ...a,
              className: b(ol.base, t && ol.base__double, a.className),
              children: f.jsx(il, { status: e.status }),
          });
}
Pe('Disable', ol.disable);
const cl = 'Card_e79008fd',
    dl = 'Card_base__double_f8b7f334',
    ul = 'Card_content_a6141b08',
    ml = 'Card_border_e9cb9a85',
    pl = ee.resolve('views'),
    _l = ee.resolve('aliases'),
    hl = C(function ({ vehicleId: e, selected: t = !1, doubleRow: a, children: n, concurrent: s, ...r }) {
        const o = As(),
            i = ps().model.get(e),
            l = us().model.get(e),
            c = fe(),
            d = o.model.current.inventoryId.get(),
            u = o.model.prebattleModeActive(),
            m = o.model.bpState.active.get(),
            p = o.model.bpState.status.get();
        if (!i || !l) return f.jsx(ki, { ...r });
        const _ = s ? gl : $i;
        return f.jsxs(ki, {
            ...r,
            className: b('vehicle-card', r.className),
            selected: t,
            'data-test-id': `vehicleCard-${e}`,
            onMouseEnter: function (e) {
                var t;
                (c.play('mouse-enter', { target: 'vehicle-card', original: e }),
                    null == (t = r.onMouseEnter) || t.call(r, e));
            },
            onMouseLeave: function (e) {
                var t;
                null == (t = r.onMouseLeave) || t.call(r, e);
            },
            onClick: function (e) {
                var t;
                u ||
                    (i && i.inventoryId === d) ||
                    (c.play('click', { target: 'vehicle-card', original: e }),
                    o.controls.select(i.inventoryId),
                    null == (t = r.onClick) || t.call(r, e));
            },
            children: [
                f.jsx(_, { vehicle: i, validBP: Bi(m, p, l), dimmed: u, statistic: l, selected: t, doubleRow: a }),
                f.jsx(vl, {
                    concurrent: s,
                    statistic: l,
                    vehicle: i,
                    selected: t,
                    disableContextMenu: u,
                    doubleRow: a,
                }),
            ],
        });
    });
function gl(e) {
    const [t, n] = a.useState(!0),
        [, s] = a.useTransition();
    return (
        a.useEffect(() => {
            t && s(() => n(!1));
        }, [t]),
        t ? null : f.jsx($i, { ...e })
    );
}
function vl({ vehicle: e, statistic: t, selected: n, doubleRow: s, concurrent: r, disableContextMenu: o }) {
    const [i, l] = a.useState(r),
        c = a.useRef(null),
        [, d] = a.useTransition(),
        u = Ke(
            'vehicle',
            a.useMemo(
                () => ({ inventoryId: null == e ? void 0 : e.inventoryId }),
                [null == e ? void 0 : e.inventoryId],
            ),
        ),
        m = Se({
            resId: _l.read((e) => e.hangar.shared.VehiclesInventory('resId')),
            contentId: pl.read((e) => e.mono.hangar.vehicle_tooltip('resId')),
            args: v.useMemo(
                () => ({ inventoryId: null == e ? void 0 : e.inventoryId }),
                [null == e ? void 0 : e.inventoryId],
            ),
        });
    return (
        a.useEffect(() => {
            i && d(() => l(!1));
        }, [i]),
        i
            ? null
            : f.jsxs('div', {
                  ...m,
                  ...(!o && u),
                  ref: c,
                  className: b(cl, s && dl),
                  children: [
                      f.jsxs('div', {
                          className: ul,
                          children: [
                              f.jsx(Yi, { vehicle: e, statistic: t, doubleRow: s }),
                              f.jsx(rl, { vehicle: e, selected: n, statistic: t, doubleRow: s }),
                          ],
                      }),
                      f.jsx(ll, { statistic: t, doubleRow: s }),
                  ],
              })
    );
}
const fl = {};
function bl({ cardHeight: e, className: t }) {
    return f.jsx(ki, {
        className: t,
        style: { height: `${e}px` },
        children: f.jsx('div', { className: fl.vehicleSlot }),
    });
}
const xl = C(function ({ vehicleId: e, cardHeight: t, className: a }) {
    const n = As().model.selectedVehicle(),
        s = null == n ? void 0 : n.id;
    return void 0 === e
        ? (console.error('VehicleId is not defined'), f.jsx(bl, { className: b(ml, a), cardHeight: t }))
        : e === Gs
          ? f.jsx(bl, { className: b(ml, a), cardHeight: t })
          : yi(e)
            ? f.jsx(Mi, { className: b(ml, a), type: e, height: t })
            : f.jsx(Je, {
                  failure: () => f.jsx(bl, { className: b(ml, a), cardHeight: t }),
                  children: f.jsx(hl, {
                      concurrent: !0,
                      vehicleId: e,
                      selected: e === s,
                      className: b(ml, a),
                      style: { height: `${t}px` },
                  }),
              });
});
const yl = {
    root: 'VehiclesList_root_f0d596a8',
    content: 'VehiclesList_content_14a13d69',
    scroll: 'VehiclesList_scroll_82155daa',
    scrollWrapper: 'VehiclesList_scrollWrapper_a183bbcc',
    scroll__top: 'VehiclesList_scroll__top_f0d596a8',
    scroll__bottom: 'VehiclesList_scroll__bottom_f0d596a8',
    scroll__both: 'VehiclesList_scroll__both_f0d596a8',
    scrollContent: 'VehiclesList_scrollContent_21273ea3',
    scrollContent__empty: 'VehiclesList_scrollContent__empty_b1e064f7',
    verticalBar: 'VehiclesList_verticalBar_a05c0fc5',
    verticalBar__ttc: 'VehiclesList_verticalBar__ttc_f6c5f8fd',
    scrollbarBar__empty: 'VehiclesList_scrollbarBar__empty_eac7b312',
    card: 'VehiclesList_card_c6b45a0b',
};
function Cl({ children: e, ...t }) {
    return f.jsx('div', { ...t, className: yl.content, children: e });
}
const wl = C(function (e) {
        const t = As(),
            a = Es(),
            n = Rs(),
            { api: s } = ve(),
            [r, o] = ye(s),
            i = null == a ? void 0 : a.model.current(),
            l = t.model.current.list(),
            c = i && 0 === l.length,
            d = null == n ? void 0 : n.model.computed.ttcEnabled();
        return f.jsxs('div', {
            className: b(yl.scroll, yl[`scroll__${tr(r, o)}`]),
            children: [
                f.jsx(Ce, {
                    ...e,
                    classNames: {
                        ...e.classNames,
                        wrapper: yl.scrollWrapper,
                        content: b(yl.scrollContent, c && yl.scrollContent__empty),
                    },
                    children: e.children,
                }),
                !s.disabled && f.jsx(we, { classNames: { base: b(yl.verticalBar, d && yl.verticalBar__ttc) } }),
            ],
        });
    }),
    Nl = C(function ({ extraColumns: e = 0 }) {
        const t = As(),
            n = Es(),
            { api: s } = ve(),
            r = null == n ? void 0 : n.model.current(),
            o = t.model.prebattleModeActive(),
            i = et(Ks, Js),
            l = i.row + e,
            c = Ae(i.height),
            d = t.model.current.ids(),
            u = t.model.current.list(),
            m = t.model.selectedVehicle(),
            p = t.model.telecomRentStatus.get(),
            _ = null == m ? void 0 : m.id,
            { currentIndex: h } = Ci(d, _),
            g = (function (e, t, n) {
                const [s, r] = a.useState(0);
                return (
                    a.useLayoutEffect(() => {
                        function a() {
                            const a = e.getWrapperSize();
                            Ye(a) && r(Math.floor(a / t) * n);
                        }
                        const s = e.events.on('resizeHandled', a),
                            o = e.events.on('recalculateContent', a);
                        return () => {
                            (s(), o());
                        };
                    }, [e, t, n]),
                    s
                );
            })(s, c, l),
            v = t.model.slots.recover.get(),
            b = xi(v, p),
            x = r ? [] : b.right,
            y = r ? [] : b.left,
            { activeSlotsAmount: C, activeSlotsIds: w } =
                ((N = d),
                (I = y),
                (j = x),
                (k = g),
                (S = l),
                a.useMemo(() => {
                    if (!k) return { activeSlotsAmount: 0, activeSlotsIds: [] };
                    const e = N.length + I.length + j.length,
                        t = ((S - (e % S)) % S) + S,
                        a = Math.max(0, k + S - e);
                    return {
                        activeSlotsAmount: e,
                        activeSlotsIds: [...I, ...N, ...j, ...Array(0 === a ? t : a).fill(Gs)],
                    };
                }, [I, S, N, k, j]));
        var N, I, j, k, S;
        return (
            wi(s, h, c, l, d.length),
            (function (e, t, a, n, s) {
                function r(n) {
                    a(-1 !== e ? t[e + n].inventoryId : t[0].inventoryId);
                }
                const o = [
                    { key: Xe.ARROW_DOWN, blockKey: e > t.length - (n + 1), action: () => r(n) },
                    { key: Xe.ARROW_UP, blockKey: e < n, action: () => r(-n) },
                    { key: Xe.ARROW_LEFT, blockKey: e % n == 0, action: () => r(-1) },
                    { key: Xe.ARROW_RIGHT, blockKey: e % n == n - 1 || e === t.length - 1, action: () => r(1) },
                    { key: Xe.HOME, blockKey: 0 === t.length, action: () => a(t[0].inventoryId) },
                    { key: Xe.END, blockKey: 0 === t.length, action: () => a(t[t.length - 1].inventoryId) },
                ];
                for (const { key: i, blockKey: l, action: c } of o) {
                    const e = s || l ? Xe.NONE : i;
                    Qe(e, c);
                }
            })(h, u, t.controls.select, l, 0 === d.length || o),
            a.useEffect(() => {
                s.setDisabled(g >= C);
            }, [s, g, C]),
            f.jsx(tt, {
                api: s,
                elementHeight: c - Ae(1),
                direction: 'vertical',
                totalElements: w.length,
                wrappers: { Content: Cl },
                renderScroll: (e) => f.jsx(wl, { ...e, style: { '--card-width': 100 / l + '%' } }),
                itemsPerRow: l,
                renderElement: (e) => f.jsx(xl, { vehicleId: w[e], cardHeight: c, className: yl.card }, w[e] ?? e),
            })
        );
    }),
    Il = 'EmptyStateMessage_923658c6',
    jl = 'EmptyStateMessage_title_278b22ff',
    kl = 'EmptyStateMessage_description_5a4f259e',
    Sl = ee.resolve('strings'),
    Pl = C(function (e) {
        const t = Es(),
            a = As(),
            n = null == t ? void 0 : t.model.current();
        if (!n || 0 !== a.model.current.amount()) return null;
        const s = 0 === (null == n ? void 0 : n.list.length) ? 'empty_list' : 'not_found';
        return f.jsxs('div', {
            className: b(Il, e.className),
            children: [
                f.jsx('div', { className: jl, children: Sl.readOrEmpty(`playlists.empty_state.${s}.title`) }),
                f.jsx('div', { className: kl, children: Sl.readOrEmpty(`playlists.empty_state.${s}.body`) }),
            ],
        });
    }),
    El = 'on',
    Ml = 'disabled';
function Ll(e) {
    return { id: e.id, tankmanId: e.tankmanId, roles: rt(e.roles) };
}
const Dl = 'disabled',
    [Tl, Al] = B('CrewModel')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives([
                        'state',
                        'acceleratedTraining',
                        'intensiveTraining',
                        'vehicleNation',
                        'vehicleType',
                        'vehicleName',
                    ]),
                    ...e.primitives({ hasDog: 'withDog' }),
                    slots: e.arrayClone('slots'),
                    crew: e.transform(at('id', st), 'crew'),
                },
                a = X.structural(() => nt(t.slots.get(), Ll)),
                n = X.model((e) => t.crew.get()[e]),
                s = X.primitive((e) => {
                    const t = n(e);
                    return (
                        ((null == t ? void 0 : t.newPerksCount) ?? 0) +
                        ((null == t ? void 0 : t.newBonusPerksCount) ?? 0)
                    );
                }),
                r = X.primitive(() => t.state.get() === Dl);
            return { ...t, computes: { slots: a, newPerksToLearn: s, tankmanById: n, disabled: r } };
        },
        ({ externalModel: e }) => ({
            openCrew: e.createCallback((e) => ({ crewSlotId: e }), 'onOpenCrew'),
            openBarracks: e.createCallback((e) => ({ crewSlotId: e }), 'onOpenBarracks'),
            toggleAcceleratedTraining: e.createCallbackNoArgs('onToggleAcceleratedTraining'),
            toggleIntensiveTraining: e.createCallbackNoArgs('onToggleIntensiveTraining'),
            showDogInfo: e.createCallbackNoArgs('onDogMoreInfoClick'),
        }),
    ),
    Bl = 6,
    Vl = 100,
    Ol = 'doge_role',
    Rl = a.createContext(null);
function zl() {
    const e = a.useContext(Rl);
    return (ne(null !== e, 'You can use crew context hooks only with crew slot component'), e);
}
const $l = {
        [ot.commander]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M15.8941 4.6285C15.8456 4.45146 15.7404 4.29519 15.5947 4.18358C15.449 4.07198 15.2707 4.01118 15.0871 4.0105H11.5201V4.8631H9.84012V4.0105H8.16012V4.8631H6.48012V4.0105H2.91372C2.72995 4.01092 2.55139 4.07159 2.40541 4.18322C2.25943 4.29485 2.15409 4.45126 2.10552 4.6285L0.72852 9.5191C0.642995 9.82414 0.599791 10.1395 0.600119 10.4563V15.9475C0.598522 16.1719 0.686107 16.3878 0.843622 16.5477C1.00114 16.7076 1.21569 16.7984 1.44012 16.8001H4.80012C5.02455 16.7984 5.2391 16.7076 5.39662 16.5477C5.55413 16.3878 5.64172 16.1719 5.64012 15.9475V11.6845C5.63852 11.4601 5.72611 11.2442 5.88362 11.0843C6.04114 10.9244 6.25569 10.8336 6.48012 10.8319H8.16012V11.6845H9.84012V10.8319H11.5201C11.7445 10.8336 11.9591 10.9244 12.1166 11.0843C12.2741 11.2442 12.3617 11.4601 12.3601 11.6845V15.9475C12.3585 16.1719 12.4461 16.3878 12.6036 16.5477C12.7611 16.7076 12.9757 16.7984 13.2001 16.8001H16.5601C16.7845 16.7984 16.9991 16.7076 17.1566 16.5477C17.3141 16.3878 17.4017 16.1719 17.4001 15.9475V10.4563C17.4002 10.139 17.3565 9.82327 17.2705 9.5179L15.8941 4.6285ZM8.16012 9.1285H6.48012V6.5683H8.16012V9.1285ZM11.5201 9.1285H9.84012V6.5683H11.5201V9.1285ZM13.2001 0.600098H12.3601C12.1357 0.601842 11.9211 0.692631 11.7636 0.852509C11.6061 1.01239 11.5185 1.22827 11.5201 1.4527V2.3053C11.5185 2.52973 11.6061 2.74561 11.7636 2.90549C11.9211 3.06536 12.1357 3.15615 12.3601 3.1579H13.2001C13.4245 3.15615 13.6391 3.06536 13.7966 2.90549C13.9541 2.74561 14.0417 2.52973 14.0401 2.3053V1.4527C14.0417 1.22827 13.9541 1.01239 13.7966 0.852509C13.6391 0.692631 13.4245 0.601842 13.2001 0.600098ZM5.64012 0.600098H4.80012C4.57569 0.601842 4.36114 0.692631 4.20362 0.852509C4.04611 1.01239 3.95852 1.22827 3.96012 1.4527V2.3053C3.95852 2.52973 4.04611 2.74561 4.20362 2.90549C4.36114 3.06536 4.57569 3.15615 4.80012 3.1579H5.64012C5.86455 3.15615 6.0791 3.06536 6.23662 2.90549C6.39413 2.74561 6.48172 2.52973 6.48012 2.3053V1.4527C6.48172 1.22827 6.39413 1.01239 6.23662 0.852509C6.0791 0.692631 5.86455 0.601842 5.64012 0.600098Z',
                }),
            ),
        [ot.driver]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { clipPath: 'url(#clip0_11629_273215)' },
                    a.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M9.0001 17.4001C7.33874 17.4001 5.71468 16.9074 4.33331 15.9844C2.95194 15.0614 1.87529 13.7495 1.23952 12.2146C0.603739 10.6797 0.437389 8.99078 0.761504 7.36134C1.08562 5.7319 1.88564 4.23516 3.0604 3.0604C4.23516 1.88564 5.7319 1.08562 7.36134 0.761504C8.99078 0.437389 10.6797 0.603739 12.2146 1.23952C13.7495 1.87529 15.0614 2.95194 15.9844 4.33331C16.9074 5.71468 17.4001 7.33874 17.4001 9.0001C17.4001 11.2279 16.5151 13.3645 14.9398 14.9398C13.3645 16.5151 11.2279 17.4001 9.0001 17.4001ZM15.6931 9.5251H10.5877C10.5041 9.77766 10.3614 10.0066 10.1714 10.1929C9.9815 10.3792 9.74983 10.5174 9.4957 10.5961V15.6721C11.093 15.5577 12.5964 14.8747 13.7334 13.7469C14.8704 12.6192 15.5656 11.1214 15.6931 9.5251ZM8.4487 15.6673V10.5805C8.20655 10.496 7.98708 10.3569 7.80729 10.174C7.62751 9.9911 7.49222 9.76927 7.4119 9.5257H2.3071C2.43395 11.1124 3.12181 12.6021 4.24737 13.7276C5.37292 14.8532 6.86258 15.5411 8.4493 15.6679L8.4487 15.6673ZM9.0001 2.2801C7.30964 2.28143 5.68177 2.91982 4.44106 4.068C3.20036 5.21619 2.43797 6.7898 2.3059 8.4751H7.4125C7.52075 8.13918 7.73277 7.84625 8.01805 7.63846C8.30333 7.43067 8.64717 7.31872 9.0001 7.31872C9.35303 7.31872 9.69687 7.43067 9.98215 7.63846C10.2674 7.84625 10.4794 8.13918 10.5877 8.4751H15.6931C15.561 6.79001 14.7988 5.21657 13.5584 4.06841C12.3179 2.92026 10.6904 2.28173 9.0001 2.2801Z',
                    }),
                ),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'clipPath',
                        { id: 'clip0_11629_273215' },
                        a.createElement('rect', { width: 18, height: 18, fill: 'white' }),
                    ),
                ),
            ),
        [ot.gunner]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { clipPath: 'url(#clip0_11629_273826)' },
                    a.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M17.1814 9.8184H16.315C16.1286 11.4773 15.3841 13.0235 14.2035 14.2038C13.023 15.384 11.4765 16.128 9.81761 16.314V17.1822C9.81745 17.399 9.73124 17.607 9.57791 17.7603C9.42457 17.9136 9.21665 17.9998 8.99981 18C8.78275 18 8.57459 17.9138 8.42111 17.7603C8.26763 17.6068 8.18141 17.3987 8.18141 17.1816V16.314C6.5225 16.128 4.97601 15.384 3.79547 14.2038C2.61494 13.0235 1.87043 11.4773 1.68401 9.8184H0.81761C0.708311 9.82136 0.599524 9.80239 0.497679 9.76261C0.395834 9.72283 0.302995 9.66304 0.224641 9.58678C0.146288 9.51052 0.084006 9.41933 0.041481 9.3186C-0.00104395 9.21787 -0.0229492 9.10964 -0.0229492 9.0003C-0.0229492 8.89096 -0.00104395 8.78273 0.041481 8.682C0.084006 8.58127 0.146288 8.49009 0.224641 8.41383C0.302995 8.33756 0.395834 8.27778 0.497679 8.23799C0.599524 8.19821 0.708311 8.17924 0.81761 8.1822H1.68401C1.8703 6.52324 2.61475 4.97681 3.7953 3.79648C4.97584 2.61615 6.52241 1.87199 8.18141 1.686V0.818399C8.18141 0.601346 8.26763 0.393183 8.42111 0.239703C8.57459 0.0862236 8.78275 0 8.99981 0C9.21686 0 9.42502 0.0862236 9.5785 0.239703C9.73198 0.393183 9.8182 0.601346 9.8182 0.818399V1.686C11.4771 1.87196 13.0236 2.61604 14.2041 3.79625C15.3847 4.97645 16.1292 6.52275 16.3156 8.1816H17.182C17.399 8.18176 17.607 8.26805 17.7603 8.42152C17.9137 8.57498 17.9998 8.78305 17.9998 9C17.9998 9.10747 17.9786 9.2139 17.9375 9.31319C17.8964 9.41248 17.8361 9.5027 17.7601 9.5787C17.6841 9.65469 17.5939 9.71497 17.4946 9.7561C17.3953 9.79723 17.2889 9.8184 17.1814 9.8184ZM8.99981 3.273C7.51916 3.26929 6.09489 3.84055 5.0272 4.8664C3.9595 5.89224 3.33176 7.29254 3.2763 8.77215C3.22083 10.2518 3.74196 11.6951 4.72985 12.798C5.71774 13.9009 7.09524 14.5772 8.57201 14.6844H9.4276C10.9044 14.5772 12.2819 13.9009 13.2698 12.798C14.2577 11.6951 14.7788 10.2518 14.7233 8.77215C14.6678 7.29254 14.0401 5.89224 12.9724 4.8664C11.9047 3.84055 10.4805 3.26929 8.99981 3.273ZM6.5452 10.6368L8.99981 7.3692L11.4544 10.6362L8.99981 9.8238L6.5452 10.6368Z',
                    }),
                ),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'clipPath',
                        { id: 'clip0_11629_273826' },
                        a.createElement('rect', { width: 18, height: 18, fill: 'white' }),
                    ),
                ),
            ),
        [ot.loader]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M16.646 12.8005H12.8456C12.7484 11.3725 12.6938 10.1461 12.6938 9.4003C12.6938 3.8077 14.7458 0.600697 14.7458 0.600697C16.1795 3.30687 16.8873 6.33844 16.8002 9.3997C16.8002 10.1449 16.7432 11.3749 16.646 12.8005ZM7.0988 12.8005C7.0016 11.3725 6.947 10.1461 6.947 9.4003C6.947 3.8071 9.0002 0.600098 9.0002 0.600098C10.4332 3.30667 11.1402 6.33845 11.0522 9.3997C11.0522 10.1449 10.9976 11.3737 10.9004 12.7999H7.0988V12.8005ZM1.35199 12.8005C1.25479 11.3725 1.2002 10.1461 1.2002 9.4003C1.2002 3.8071 3.25219 0.600098 3.25219 0.600098C4.68517 3.30667 5.39216 6.33845 5.30419 9.3997C5.30419 10.1449 5.24899 11.3737 5.15239 12.7999H1.35199V12.8005ZM4.9328 16.6009H3.9452L3.8402 17.4001H2.6372L2.52199 16.6003H1.56859C1.44859 15.4411 1.45339 14.2741 1.37599 13.2001H5.1254C5.048 14.2747 5.0516 15.4411 4.9322 16.6003L4.9328 16.6009ZM10.679 16.6009H9.692L9.5894 17.4001H8.384L8.26879 16.6003H7.32019C7.20019 15.4411 7.20499 14.2741 7.12759 13.2001H10.8728C10.7954 14.2747 10.799 15.4411 10.6802 16.6003L10.679 16.6009ZM16.4258 16.6009H15.4382L15.3362 17.4001H14.1302L14.015 16.6003H13.0658C12.9458 15.4411 12.9506 14.2741 12.8732 13.2001H16.6202C16.5398 14.2747 16.5464 15.4411 16.427 16.6003L16.4258 16.6009Z',
                }),
            ),
        [ot.radioman]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { clipPath: 'url(#clip0_67238_249405)' },
                    a.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M16.7735 10.11C17.08 10.3137 17.3142 10.6091 17.4425 10.954C17.5709 11.2989 17.5868 11.6755 17.4881 12.03L16.4243 16.0212C16.3284 16.4058 16.1032 16.7456 15.7863 16.9837C15.4695 17.2218 15.0803 17.3436 14.6843 17.3286L13.8311 17.28C13.5799 17.2597 13.3363 17.1835 13.1183 17.057C12.9003 16.9304 12.7134 16.7567 12.5711 16.5486C12.428 16.3395 12.3331 16.1012 12.2933 15.8509C12.2536 15.6006 12.27 15.3446 12.3413 15.1014L13.4945 10.7724C13.5908 10.3864 13.8176 10.0455 14.1365 9.80744C14.4553 9.56941 14.8466 9.44887 15.2441 9.46624L15.3497 9.03904C15.5831 8.15825 15.5717 7.23047 15.3168 6.35568C15.0618 5.48088 14.5731 4.69221 13.9031 4.07464C12.5871 2.92363 10.8982 2.28923 9.14991 2.28923C7.4016 2.28923 5.71268 2.92363 4.39671 4.07464C3.72695 4.69234 3.23841 5.48107 2.98371 6.35586C2.72902 7.23065 2.71782 8.15835 2.95131 9.03904L3.05511 9.45904C3.42893 9.47426 3.78782 9.60998 4.07817 9.84593C4.36852 10.0819 4.57477 10.4054 4.66611 10.7682L5.81931 15.0972C5.89064 15.3404 5.90702 15.5964 5.86728 15.8467C5.82753 16.097 5.73266 16.3353 5.58951 16.5444C5.44726 16.7525 5.2603 16.9262 5.04229 17.0528C4.82429 17.1793 4.58076 17.2555 4.32951 17.2758L3.47631 17.3244C3.08025 17.3395 2.69107 17.2177 2.3742 16.9797C2.05733 16.7416 1.83208 16.4016 1.73631 16.017L0.67251 12.0258C0.566505 11.6477 0.591511 11.2449 0.743473 10.8828C0.895434 10.5207 1.16542 10.2207 1.50951 10.0314L1.36551 9.44224C1.05516 8.25749 1.07528 7.01037 1.42371 5.83626C1.77214 4.66214 2.43555 3.60592 3.34191 2.78224C4.95139 1.37422 7.01717 0.598145 9.15561 0.598145C11.2941 0.598145 13.3598 1.37422 14.9693 2.78224C15.8757 3.60592 16.5391 4.66214 16.8875 5.83626C17.2359 7.01037 17.2561 8.25749 16.9457 9.44224L16.7735 10.11Z',
                    }),
                ),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'clipPath',
                        { id: 'clip0_67238_249405' },
                        a.createElement('rect', { width: 18, height: 18, fill: 'white' }),
                    ),
                ),
            ),
        [Ol]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 14,
                    height: 14,
                    viewBox: '0 0 14 14',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    d: 'M10.3616 4.55671L8.60388 1.26575L8.88511 0.928219L8.32265 0L7.8305 0.506301V1.26575L7.19773 1.85644V4.72548L8.32265 6.16L10.3616 4.55671Z',
                    fill: '#B3AFAB',
                }),
                a.createElement('path', {
                    d: 'M12.0226 5.6L14 9.24L11.7062 11.0133L10.4407 9.42666V6.25333L11.1525 5.6V4.75999L11.7062 4.2L12.339 5.22666L12.0226 5.6Z',
                    fill: '#B3AFAB',
                }),
                a.createElement('path', {
                    d: 'M1.9774 5.6L0 9.24L2.29379 11.0133L3.55932 9.42666V6.25333L2.84746 5.6V4.76L2.29379 4.2L1.66102 5.22666L1.9774 5.6Z',
                    fill: '#B3AFAB',
                }),
                a.createElement('path', {
                    d: 'M5.159 1.26575L3.40131 4.55671L5.44023 6.16L6.56515 4.72548V1.85644L5.93238 1.26575V0.506301L5.44023 0L4.87777 0.928219L5.159 1.26575Z',
                    fill: '#B3AFAB',
                }),
                a.createElement('path', {
                    d: 'M4.61172 9.62923L2.95227 12.2331L4.90032 14L6.05472 13.2899H8.03062L9.18872 14L11.143 12.2331L9.47824 9.62923L8.53729 7.58333H5.54967L4.61172 9.62923Z',
                    fill: '#B3AFAB',
                }),
            ),
    },
    Hl = 'Profile_491a8220',
    Fl = 'Profile_roles_2d239199',
    Wl = 'Profile_role_b3df2c53',
    ql = 'Profile_name_5c9b6f18',
    Zl = 'Profile_name__maxLevel_85270e75',
    Ul = ee.resolve('strings'),
    Gl = ee.resolve('aliases');
function Kl({ role: e = '', className: t }) {
    const a = $l[e];
    if (a) return f.jsx(a, { className: t });
    console.error(`Unknown role type ${e}`);
}
function Jl({ roles: e, name: t, perksAmount: n, progress: s }) {
    const { tankmanId: r, slotId: o } = zl(),
        i = a.useMemo(() => ({ tooltipId: 'vehicleCrewMemberInHangar', tankmanID: r, slotIdx: o }), [o, r]);
    return f.jsxs('div', {
        className: Hl,
        children: [
            f.jsx(it, {
                params: { resId: Gl.read((e) => e.hangar.shared.Crew('resId')), args: i },
                className: Fl,
                children: ue(e, (e, t) => f.jsx(Kl, { role: e, className: Wl }, t)),
            }),
            t
                ? f.jsx(lt, { className: b(ql, n === Bl && s === Vl && Zl), text: t })
                : f.jsx(je, {
                      upgradeLegacy: !0,
                      className: ql,
                      path: 'crew_widget.emptySlot.chooseTankman',
                      params: { role: Ul.readOrEmpty(`item_types.tankman.roles.objectiveCase.${e && e[0]}`) },
                  }),
        ],
    });
}
function Xl({ skinId: e, customizedSkin: t }) {
    return t ? `tankmen.icons.big.crewSkins.${ct(e)}` : `tankmen.icons.big.${ct(e)}`;
}
const Ql = 'Tankman_content_4548f2cf',
    Yl = 'Tankman_94b49163',
    ec = 'Tankman_base__bonusPerk_dc2caccc',
    tc = 'Tankman_content__empty_d0544ce1',
    ac = 'Tankman_content__emptyRed_83bc592f',
    nc = a.memo(function (e) {
        const { customizedSkin: t, bonusPerk: a, skinId: n, className: s, animation: r } = e;
        return f.jsx('div', {
            className: b(Yl, a && ec, s),
            children: n
                ? f.jsx(ke, { className: Ql, fit: 'cover', path: Xl({ skinId: n, customizedSkin: t }) })
                : f.jsxs(f.Fragment, {
                      children: [
                          f.jsx('div', { className: b(Ql, tc) }),
                          f.jsx(w.div, { className: b(Ql, ac), style: r }),
                      ],
                  }),
        });
    }),
    sc = {
        base: 'DogSlot_5e1fe46',
        block: 'DogSlot_block_99f455f8',
        info: 'DogSlot_info_58d37a1c',
        roles: 'DogSlot_roles_e0242348',
        role: 'DogSlot_role_8e738537',
        name: 'DogSlot_name_41d95cf0',
        dogDetails: 'DogSlot_dogDetails_67f5b40a',
        detailsText: 'DogSlot_detailsText_4dd85787',
        disabled: 'DogSlot_disabled_e7b0f05e',
    },
    rc = ee.resolve('strings'),
    oc = C(function () {
        const { model: e, controls: t } = Al(),
            a = fe(),
            n = e.computes.disabled(),
            s = e.vehicleNation.get();
        return f.jsx(dt, {
            params: {
                header: rc.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${s}.header`),
                body: rc.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${s}.body`),
            },
            asChild: !0,
            children: f.jsxs('div', {
                className: sc.base,
                onClick: function () {
                    n || a.play('click', { target: 'crew-widget:dog-slot' });
                },
                onMouseEnter: function () {
                    n || a.play('mouse-enter', { target: 'crew-widget:dog-slot' });
                },
                children: [
                    f.jsx(nc, { customizedSkin: !1, skinId: 'ussr_dog_1' }),
                    f.jsxs('div', {
                        className: sc.block,
                        children: [
                            f.jsxs('div', {
                                className: sc.info,
                                children: [
                                    f.jsx('div', {
                                        className: sc.roles,
                                        children: f.jsx(Kl, { role: Ol, className: sc.role }),
                                    }),
                                    f.jsx('div', {
                                        className: sc.name,
                                        children: rc.readOrEmpty(`menu.hangar.crew.rody.dog.${s}.name`),
                                    }),
                                ],
                            }),
                            f.jsx(ut, {
                                className: sc.dogDetails,
                                theme: ut.themes.secondary,
                                size: ut.sizes.small,
                                onClick: (e) => {
                                    (t.showDogInfo(), e.stopPropagation());
                                },
                                children: f.jsx('div', {
                                    className: sc.detailsText,
                                    children: rc.readOrEmpty('crew.dogPawTooltip.details.body'),
                                }),
                            }),
                        ],
                    }),
                    f.jsx('div', { className: b(sc.disabled, n && sc.overlay__active) }),
                ],
            }),
        });
    }),
    ic = { retrainingProgress: 'retrainingProgress', unsuitableTankman: 'unsuitableTankman', default: 'default' };
const lc = -1,
    cc = 1,
    dc = 8,
    uc = 'new_skill',
    mc = 'brotherhood',
    pc = {
        default: 'default',
        active: 'active',
        activeDisable: 'activeDisable',
        disable: 'disable',
        low: 'low',
        newFull: 'newFull',
        newLow: 'newLow',
        newDisableFull: 'newDisableFull',
        newDisableLow: 'newDisableLow',
        newActive: 'newActive',
        newActiveDisable: 'newActiveDisable',
    },
    _c = [pc.disable, pc.newDisableFull, pc.newDisableLow, pc.activeDisable, pc.newActiveDisable],
    hc = [pc.newDisableFull, pc.newFull];
function gc(e) {
    var t;
    return null == (t = e.find((e) => e.bonus === Vl)) ? void 0 : t.name;
}
function vc(e) {
    const {
            id: t,
            skills: a,
            newCount: n,
            trainingProgress: s,
            vehEfficacy: r,
            efficacy: o,
            role: i,
            nativeTank: l,
            vehicleBonusDetails: c,
        } = e,
        d = [];
    for (const u of a)
        d.push({
            id: t,
            name: u.name,
            state: u.state,
            vehEfficacy: r,
            efficacy: o,
            role: i,
            nativeTank: l,
            instruction: gc(c),
        });
    for (let u = 0; u < n; u++) {
        const e = s !== Vl && u === n - 1 ? mt.learning : mt.learned;
        d.push({ id: t, name: uc, state: e, vehEfficacy: r, efficacy: o, role: i, nativeTank: l });
    }
    return d;
}
function fc(e) {
    const {
        id: t,
        perks: a,
        newPerksCount: n,
        trainingProgress: s,
        currentVehicleSkillsEfficiency: r,
        skillsEfficiency: o,
        role: i,
        insideNativeTank: l,
        vehicleBonusDetails: c,
    } = e;
    return vc({
        id: t,
        skills: a,
        newCount: n,
        trainingProgress: s,
        vehEfficacy: r,
        efficacy: o,
        role: i,
        nativeTank: l,
        vehicleBonusDetails: c,
    });
}
function bc(e) {
    const {
        id: t,
        bonusPerks: a,
        currentVehicleSkillsEfficiency: n,
        skillsEfficiency: s,
        insideNativeTank: r,
        vehicleBonusDetails: o,
    } = e;
    let i = [];
    for (const l of a)
        i = i.concat(
            vc({
                id: t,
                skills: l.skills,
                newCount: l.newCount,
                trainingProgress: l.trainingProgress,
                vehEfficacy: n,
                efficacy: s,
                role: l.role,
                nativeTank: r,
                vehicleBonusDetails: o,
            }),
        );
    return i.sort((e, t) =>
        e.state === mt.learning && t.state !== mt.learning
            ? 1
            : e.state !== mt.learning && t.state === mt.learning
              ? -1
              : e.name === uc && t.name !== uc
                ? 1
                : e.name !== uc && t.name === uc
                  ? -1
                  : 0,
    );
}
const xc = {
        base: 'EfficiencyIndicator_d9560b90',
        base__bonus: 'EfficiencyIndicator_base__bonus_a4144984',
        percent: 'EfficiencyIndicator_percent_147766be',
        icon: 'EfficiencyIndicator_icon_fb03a020',
    },
    yc = ee.resolve('intl'),
    Cc = ee.resolve('aliases');
function wc({ bonusPerks: e, skillsEfficiency: t, className: n }) {
    const { tankmanId: s, slotState: r } = zl(),
        o = yc.formatNumber('integral', 100 * t),
        i = a.useMemo(
            () => ({ tooltipId: r === ic.unsuitableTankman ? 'crewSkillUntrained' : 'skillsEfficiency', tankmanID: s }),
            [r, s],
        );
    return f.jsx(it, {
        params: { resId: Cc.read((e) => e.hangar.shared.Crew('resId')), args: i },
        className: b(xc.base, e && xc.base__bonus, n),
        children: (() => {
            switch (r) {
                case ic.unsuitableTankman:
                    return f.jsx('div', { className: xc.icon });
                case ic.retrainingProgress:
                    return f.jsx('div', {
                        className: xc.percent,
                        children: f.jsx(je, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: o } }),
                    });
                default:
                    return;
            }
        })(),
    });
}
const Nc = ee.resolve('aliases'),
    Ic = ee.resolve('views'),
    jc = ee.resolve('strings');
function kc({ children: e, bonus: t, name: n, role: s, index: r, tankmanId: o, newPerk: i, className: l }) {
    const c = a.useMemo(() => ({ tankmanID: o, skillIndex: r }), [o, r]),
        d = a.useMemo(
            () => ({ tooltipId: 'crewPerkGf', skillName: n, roleName: s, isBonus: t, skillIndex: r, tankmanID: o }),
            [t, r, n, s, o],
        );
    return i
        ? t
            ? f.jsx(dt, {
                  params: {
                      header: jc.readOrEmpty('crew.matrix.skillTooltip.bonus.available.header'),
                      body: jc.readOrEmpty('crew.matrix.skillTooltip.bonus.available.text'),
                  },
                  className: l,
                  children: e,
              })
            : f.jsx(pt, {
                  params: {
                      contentId: Ic.read((e) => e.lobby.crew.tooltips.EmptySkillTooltip('resId')),
                      resId: Nc.read((e) => e.hangar.shared.Crew('resId')),
                      args: c,
                  },
                  className: l,
                  children: e,
              })
        : f.jsx(it, {
              params: { resId: Nc.read((e) => e.hangar.shared.Crew('resId')), args: d },
              className: l,
              children: e,
          });
}
const Sc = {
    root: 'Perk_root_e658317b',
    background: 'Perk_background_c7d95a33',
    base: 'Perk_b09f8e2f',
    border: 'Perk_border_a0a14f61',
    base__default: 'Perk_base__default_e658317b',
    base__disable: 'Perk_base__disable_e658317b',
    base__active: 'Perk_base__active_e658317b',
    base__activeDisable: 'Perk_base__activeDisable_e658317b',
    base__newActive: 'Perk_base__newActive_e658317b',
    base__newActiveDisable: 'Perk_base__newActiveDisable_e658317b',
    base__low: 'Perk_base__low_e658317b',
    base__newFull: 'Perk_base__newFull_e658317b',
    base__newLow: 'Perk_base__newLow_e658317b',
    base__newDisableFull: 'Perk_base__newDisableFull_e658317b',
    base__newDisableLow: 'Perk_base__newDisableLow_e658317b',
    base__bonus: 'Perk_base__bonus_e658317b',
    newPerkBackground: 'Perk_newPerkBackground_ce22df0b',
    icon: 'Perk_icon_38ad57b2',
    disabledOverlay: 'Perk_disabledOverlay_95f5f83e',
};
function Pc(e) {
    const {
            name: t,
            state: a,
            vehEfficacy: n,
            efficacy: s,
            id: r,
            role: o,
            nativeTank: i,
            index: l,
            bonusPerk: c,
            instruction: d,
            className: u,
        } = e,
        m = t === uc,
        p = (function ({ state: e, vehEfficacy: t, efficacy: a, nativeTank: n, newPerk: s, withInstruction: r }) {
            const o = !n && t === lc,
                i = !o && t < cc,
                l = a.level < cc;
            return r
                ? o
                    ? pc.active
                    : pc.default
                : e !== mt.learning || i || s
                  ? s && e === mt.learning
                      ? o
                          ? pc.newActiveDisable
                          : pc.newActive
                      : s && o && l
                        ? pc.newDisableLow
                        : s && o && !l
                          ? e === mt.learning
                              ? pc.newDisableLow
                              : pc.newDisableFull
                          : o || e === mt.irrelevant
                            ? pc.disable
                            : i && !s
                              ? pc.low
                              : (i && s) || s
                                ? e === mt.learning
                                    ? pc.newLow
                                    : pc.newFull
                                : pc.default
                  : o
                    ? pc.activeDisable
                    : pc.active;
        })({ withInstruction: t === d, state: a, vehEfficacy: n, efficacy: s, nativeTank: i, newPerk: m });
    return f.jsxs(kc, {
        className: b(u, Sc.base, c && Sc.base__bonus, Sc[`base__${p}`]),
        newPerk: m,
        bonus: c,
        name: t.includes(mc) ? mc : t,
        index: l,
        role: o,
        tankmanId: r,
        children: [
            f.jsx('div', { className: Sc.background }),
            f.jsx('div', { className: Sc.border }),
            hc.includes(p) && f.jsx('div', { className: Sc.newPerkBackground }),
            m
                ? f.jsx('div', { className: Sc.icon })
                : f.jsx(ke, { className: Sc.icon, path: `tankmen.skills.big.${t}` }),
            _c.includes(p) && f.jsx('div', { className: Sc.disabledOverlay }),
        ],
    });
}
const Ec = {
        base: 'Row_94492f2a',
        training: 'Row_training_87a055fa',
        trainingIcon: 'Row_trainingIcon_478b64c1',
        container: 'Row_container_6520803b',
        container__compression: 'Row_container__compression_f3e2cd48',
        currentProgress: 'Row_currentProgress_4c0ce954',
    },
    Mc = ee.resolve('strings');
function Lc({ perks: e, bonusPerk: t = !1, quickTraining: a, trainingProgress: n = 0, className: s }) {
    const { slotState: r } = zl();
    return f.jsxs('div', {
        className: b(Ec.base, s),
        children: [
            e.map((a, n) =>
                f.jsx(
                    'div',
                    {
                        className: b(Ec.container, e.length > Bl && n !== dc && Ec.container__compression),
                        children: f.jsx(Pc, { ...a, index: n, bonusPerk: t }),
                    },
                    n,
                ),
            ),
            n < Vl &&
                r !== ic.retrainingProgress &&
                f.jsx('div', {
                    className: Ec.currentProgress,
                    children: f.jsx(je, { path: 'common.percentValue', params: { value: n }, upgradeLegacy: !0 }),
                }),
            !t &&
                a &&
                f.jsx(dt, {
                    params: {
                        header: Mc.readOrEmpty('crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header'),
                        body: Mc.readOrEmpty('crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body'),
                    },
                    className: Ec.training,
                    children: f.jsx('div', { className: Ec.trainingIcon }),
                }),
        ],
    });
}
const Dc = {
    base: 'Perks_1485306a',
    efficiency: 'Perks_efficiency_bfe72b43',
    rows: 'Perks_rows_2e626685',
    row__bonus: 'Perks_row__bonus_f0dcd00d',
};
function Tc({ tankman: e, className: t }) {
    const { slotState: a } = zl();
    return f.jsxs('div', {
        className: b(Dc.base, t),
        children: [
            a &&
                a !== ic.default &&
                f.jsx(wc, {
                    className: Dc.efficiency,
                    bonusPerks: e.bonusPerks.length > 0,
                    skillsEfficiency: e.currentVehicleSkillsEfficiency,
                }),
            f.jsxs('div', {
                className: Dc.rows,
                children: [
                    f.jsx(Lc, {
                        className: Dc.row,
                        perks: fc(e),
                        quickTraining: e.quickTraining,
                        trainingProgress: e.trainingProgress,
                    }),
                    e.bonusPerks.length > 0 &&
                        f.jsx(Lc, {
                            className: b(Dc.row, Dc.row__bonus),
                            perks: bc(e),
                            trainingProgress: e.bonusPerks[0] ? e.bonusPerks[0].trainingProgress : 0,
                            bonusPerk: !0,
                        }),
                ],
            }),
        ],
    });
}
const Ac = 'Slot_tooltipArea_cfc61e36',
    Bc = 'Slot_823ddf0',
    Vc = 'Slot_base__disabled_d386066c',
    Oc = 'Slot_base__bonusPerk_37755a1',
    Rc = 'Slot_block_5a0436c4',
    zc = 'Slot_block__empty_891e9635',
    $c = 'Slot_perks_658d46a',
    Hc = 'Slot_perks__warning_de96a8ff',
    Fc = 'Slot_vehicleInfo_b3de9df4',
    Wc = 'Slot_vehicleInfo__active_c2f01f1b',
    qc = 'Slot_overlay_a7b614c0',
    Zc = 'Slot_overlay__active_4dbffa31',
    Uc = 'Slot_overlay__bonusPerk_7bdbfd9e',
    Gc = 'Slot_overlay__hover_3a89439e',
    Kc = 'Slot_overlay__warning_e5e05d78',
    Jc = 'Slot_overlay__disabled_cd31780',
    Xc = ee.resolve('aliases'),
    Qc = C(function ({ tankmanId: e, roles: t, id: n, tankmanAnimation: s }) {
        const [r, o] = a.useState(!1),
            i = fe(),
            { model: l, controls: c } = Al(),
            d = l.computes.disabled(),
            u = l.vehicleType.get(),
            m = l.vehicleName.get(),
            p = -1 !== e,
            _ = p ? l.computes.tankmanById(e) : void 0,
            h = _ && (null == _ ? void 0 : _.newPerksCount) + (null == _ ? void 0 : _.perks.length),
            g = (function (e) {
                if (e)
                    return e.currentVehicleSkillsEfficiency < 1
                        ? e.insideNativeTank || -1 !== e.currentVehicleSkillsEfficiency
                            ? ic.retrainingProgress
                            : ic.unsuitableTankman
                        : ic.default;
            })(_),
            v = g === ic.retrainingProgress || g === ic.unsuitableTankman,
            x = Ke(
                'crewMember',
                a.useMemo(() => ({ tankmanID: e, slotIdx: n, previousViewID: null }), [e, n]),
                a.useMemo(() => ({ disabled: !p || d }), [p, d]),
            ),
            y = a.useMemo(() => ({ tooltipId: 'tankman', tankmanID: e }), [e]);
        const C = a.useMemo(() => ({ slotId: n, tankmanId: e, slotState: g }), [n, g, e]);
        return f.jsx(Rl.Provider, {
            value: C,
            children: f.jsxs('div', {
                onMouseDown: null == x ? void 0 : x.onMouseDown,
                onMouseEnter: function () {
                    (!d && C && i.play('mouse-enter', { target: 'crew-widget:slot:mouse-enter' }), o(!0));
                },
                onMouseLeave: () => o(!1),
                onClick: function () {
                    d || (i.play('click', { target: 'crew-widget:slot' }), c.openCrew(n));
                },
                className: b(Bc, d && Vc, t.length > 1 && Oc),
                children: [
                    p &&
                        f.jsx(it, {
                            params: { resId: Xc.read((e) => e.hangar.shared.Crew('resId')), args: y },
                            className: Ac,
                        }),
                    f.jsx('div', { className: b(qc, Gc, r && Zc) }),
                    f.jsx('div', { className: b(qc, Kc, v && Zc) }),
                    f.jsx(nc, {
                        customizedSkin: (null == _ ? void 0 : _.customizedSkin) ?? !1,
                        skinId: null == _ ? void 0 : _.crewSkinId.replace('tankman_', ''),
                        bonusPerk: t.length > 1,
                        animation: s,
                    }),
                    f.jsxs('div', {
                        className: b(Rc, !_ && zc),
                        children: [
                            f.jsx(Jl, {
                                roles: t,
                                name: null == _ ? void 0 : _.fullName,
                                perksAmount: h,
                                progress: null == _ ? void 0 : _.trainingProgress,
                            }),
                            _
                                ? f.jsx(Tc, { tankman: _, className: b($c, v && Hc) })
                                : f.jsx(je, {
                                      upgradeLegacy: !0,
                                      className: b(Fc, r && Wc),
                                      path: `crew_widget.vehicleWithName.${_t(u)}`,
                                      params: { name: m.replace(/<img.*?>/, '') },
                                  }),
                        ],
                    }),
                    f.jsx('div', { className: b(qc, Jc, d && Zc, (null == _ ? void 0 : _.bonusPerks.length) && Uc) }),
                ],
            }),
        });
    }),
    Yc = 'CrewWidget_647da81c',
    ed = 'CrewWidget_divider_1cced5f6',
    td = C(function ({ className: e }) {
        const { model: t } = Al(),
            n = t.withDog.get(),
            s = t.computes.slots(),
            [r, o] = N(
                () => ({
                    from: { opacity: 1 },
                    to: [{ opacity: 0 }, { opacity: 1 }],
                    config: { duration: 750, easing: (e) => -(Math.cos(Math.PI * e) - 1) / 2 },
                    loop: !0,
                }),
                [],
            );
        return (
            a.useEffect(() => {
                o.resume();
            }, [o]),
            f.jsxs('div', {
                className: b(Yc, e),
                children: [
                    ue(s, (e, t) =>
                        f.jsxs(
                            'div',
                            {
                                children: [
                                    f.jsx(
                                        Qc,
                                        { tankmanId: e.tankmanId, roles: e.roles, id: e.id, tankmanAnimation: r },
                                        -1 === e.tankmanId ? `empty_${t}` : e.tankmanId,
                                    ),
                                    f.jsx('div', { className: ed }),
                                ],
                            },
                            e.id,
                        ),
                    ),
                    n && f.jsxs(f.Fragment, { children: [f.jsx(oc, {}), f.jsx('div', { className: ed })] }),
                ],
            })
        );
    }),
    ad = ee.resolve('aliases');
function nd({ className: e }) {
    return f.jsx(Tl, {
        options: { rootId: ad.read((e) => e.hangar.shared.Crew('resId')) },
        children: f.jsx(td, { className: e }),
    });
}
const sd = {
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
function rd({ value: e, ...t }) {
    return f.jsx(ht, { ...t, sprite: sd, path: 'hangar.playlists.icons', icon: e, className: t.className });
}
const od = Pe('IconContainer', 'Icon_container_83f4dd0e'),
    id = C(function (e) {
        const t = As(),
            a = Ss().model.byIdUnsafe(e.id);
        ne(void 0 !== a, `Playlist with ${e.id} is not found`);
        const n = t.model.accumulateByIds(a.list).length;
        return a.list.length <= n
            ? null
            : f.jsx(ld, {
                  className: e.className,
                  displayAmount: n,
                  size: e.size,
                  realAmountInPlaylist: a.list.length,
              });
    });
function ld(e) {
    const t = ee.resolve('strings'),
        a = t
            .readOrEmpty('playlists.validation.unavailable.title')
            .replace('{{display}}', e.displayAmount.toString())
            .replace('{{total}}', e.realAmountInPlaylist.toString()),
        n = $e({ header: a, body: t.readOrEmpty('playlists.validation.unavailable.body') }),
        s = 'lg' === e.size ? 'alert_lg' : 'alert',
        r = 'lg' === e.size ? od : 'div';
    return f.jsx(r, { ...n, className: e.className, children: f.jsx(rd, { className: e.className, value: s }) });
}
const cd = 'CopyButton_825f729f',
    dd = 'CopyButton_base__enabled_49d34ed8',
    ud = 'CopyButton_base__disabled_4ef2eeda',
    md = ee.resolve('strings'),
    pd = function (e) {
        const [t, n] = a.useState('copy'),
            s = gt(),
            r = $e({
                header: md.readOrEmpty('playlists.share.copy_button.title'),
                body: md.readOrEmpty('playlists.share.copy_button.body'),
            }),
            o = fe();
        return f.jsx(rd, {
            ...r,
            value: t,
            'data-test-id': 'copyButton',
            className: b(cd, e.disabled ? ud : dd),
            onClick: (t) => {
                if ((r.onClick(), e.disabled)) return;
                o.play('click', { target: 'vehicle:playlists:copy_button', original: t });
                const a = e.onCopy();
                'string' == typeof a &&
                    vt(a)
                        .then((e) => {
                            (e ? n('copied') : console.error('Write to clipboard has been failure'),
                                s.run(() => n('copy'), 1e3));
                        })
                        .catch((e) => console.error(e));
            },
            onMouseEnter: (t) => {
                (r.onMouseEnter(t),
                    e.disabled || o.play('mouse-enter', { target: 'vehicle:playlists:copy_button', original: t }));
            },
        });
    },
    _d = 'EditButton_bdfe61f0',
    hd = ee.resolve('strings');
function gd({ id: e }) {
    const t = fe(),
        a = Le(),
        n = $e({
            header: hd.readOrEmpty('playlists.edit_button.title'),
            body: hd.readOrEmpty('playlists.edit_button.body'),
        });
    return f.jsx(rd, {
        ...n,
        className: _d,
        value: 'edit',
        'data-test-id': 'editButton',
        onClick: (s) => {
            (n.onClick(),
                t.play('click', { target: 'vehicle:playlists:edit_button', original: s }),
                a.push('/hangar/editVehiclePlaylists', { id: e }));
        },
        onMouseEnter: (e) => {
            (n.onMouseEnter(e), t.play('mouse-enter', { target: 'vehicle:playlists:edit_button', original: e }));
        },
    });
}
const vd = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_',
    fd = 65535;
function bd(e) {
    if (0 === e.length) return Cs('EMPTY_INPUT');
    const t = (function (e) {
            let t = e[0] ?? 0;
            for (let a = 0; a < e.length; a++) t = (t + e[a]) & fd;
            return t;
        })(e),
        a = new Uint8Array(5 + 5 * e.length);
    ((a[0] = t >>> 8), (a[1] = 255 & t), (a[2] = 1));
    let n = 5;
    for (let l = 0; l < e.length; l++) {
        let t = e[l];
        for (;;) {
            const e = 127 & t;
            if (((t >>>= 7), 0 === t)) {
                ((a[n] = e), n++);
                break;
            }
            ((a[n] = 128 | e), n++);
        }
    }
    ((a[3] = (n - 5) >>> 8), (a[4] = (n - 5) & 255));
    let s = '',
        r = 0n,
        o = 0;
    const i = a.slice(0, n);
    for (const l of i)
        for (r = (r << 8n) | BigInt(l), o += 8; o >= 6; ) {
            o -= 6;
            const e = Number((r >> BigInt(o)) & 0x3fn);
            ((s += vd[e]), (r &= (1n << BigInt(o)) - 1n));
        }
    if (o > 0) {
        const e = 63 & Number(r << BigInt(6 - o));
        s += vd[e];
    }
    return ys(s);
}
const xd = 'Item_background_321cda1e',
    yd = 'Item_c5163bf',
    Cd = 'Item_base__selected_5f6fcc69',
    wd = 'Item_button_8b3e738d',
    Nd = 'Item_selectedIcon_eb50b3a6',
    Id = 'Item_alertIcon_aef37546',
    jd = 'Item_actions_8ac98f7',
    kd = C(function (e) {
        const { playlist: t } = e,
            a = Ss(),
            n = ft(),
            s = $e({ body: t.title }),
            [r, o] = vs(t.title, 15);
        return f.jsxs('div', {
            ...(o && s),
            className: b(yd, a.model.currentId() === e.id && Cd),
            children: [
                f.jsx('div', { className: xd }),
                f.jsxs(bt, {
                    className: wd,
                    onClick: () => {
                        (a.controls.select(e.id), n.close());
                    },
                    'data-test-id': `playlist-${r}`,
                    children: [
                        f.jsxs('span', {
                            children: [
                                f.jsx(rd, { value: 'checked', className: Nd }),
                                r,
                                f.jsx(id, { id: e.id, className: Id }),
                            ],
                        }),
                        f.jsxs('span', {
                            className: jd,
                            onClick: (e) => e.stopPropagation(),
                            children: [
                                f.jsx(pd, {
                                    onCopy: function () {
                                        const e = bd(t.list);
                                        return 'error' === e.type ? console.error(e.error) : e.value;
                                    },
                                    disabled: 0 === t.list.length,
                                }),
                                f.jsx(gd, { id: e.id }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Sd = C(function (e) {
        const t = Ss().model.byId(e.id);
        return 'ok' === t.type && void 0 !== t.value ? f.jsx(kd, { playlist: t.value, id: e.id }) : null;
    }),
    Pd = C(function () {
        const e = Ss(),
            t = ft();
        return f.jsxs('div', {
            className: b(yd, !e.model.currentId() && Cd),
            children: [
                f.jsx('div', { className: xd }),
                f.jsx(bt, {
                    className: wd,
                    onClick: () => {
                        (e.controls.select(void 0), t.close());
                    },
                    'data-test-id': 'playlist-AllVehicles',
                    children: f.jsxs('span', {
                        children: [
                            f.jsx(rd, { value: 'checked', className: Nd }),
                            ee.resolve('strings').readOrEmpty('pages.titles.allVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    Ed = 'Content_divider_b37223ef',
    Md = 'Content_icon_4da9c1eb',
    Ld = 'Content_trigger_4b0aad5c',
    Dd = 'Content_triggerText_2dc694b6',
    Td = C(function () {
        const e = Ss().model.sortedIds();
        return f.jsxs('div', { children: [f.jsx(Pd, {}), e.map((e) => f.jsx(Sd, { id: e }, e))] });
    }),
    Ad = Pe('Divider', Ed),
    Bd = C(function (e) {
        const t = Ss(),
            a = ee.resolve('strings'),
            [n, s] = xt('add'),
            r = e.asChild ? yt : bt;
        return f.jsxs(r, {
            className: Ld,
            'data-test-id': 'createPlaylist',
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            onClick: t.controls.create,
            children: [
                f.jsx(od, { className: Md, children: f.jsx(rd, { value: n }) }),
                f.jsx('span', { className: Dd, children: a.readOrEmpty('playlists.list.create') }),
            ],
        });
    }),
    Vd = function (e) {
        const t = Ss(),
            a = ee.resolve('strings'),
            [n, s] = xt('import'),
            r = e.asChild ? yt : bt;
        return f.jsxs(r, {
            className: Ld,
            'data-test-id': 'importPlaylist',
            onClick: t.controls.openImport,
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            children: [
                f.jsx(od, { className: Md, children: f.jsx(rd, { value: n }) }),
                f.jsx('span', { className: Dd, children: a.readOrEmpty('playlists.imports.trigger') }),
            ],
        });
    },
    Od = {
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
    Rd = ee.resolve('strings'),
    zd = [25, 25],
    $d = C(function () {
        const { api: e } = ve(),
            [t, n] = ye(e, zd),
            { opened: s } = ft();
        return (
            a.useEffect(() => {
                if (s) return Ct(() => Ct(e.recalculateContent));
            }, [s, e.recalculateContent]),
            f.jsx(Ce, {
                className: b(Od.area, !t && Od.area__begin, !n && Od.area__end),
                classNames: { content: Od.scrollContent },
                children: f.jsx(Td, {}),
            })
        );
    }),
    Hd = C(function (e) {
        const t = Es();
        return t && t.model.enabled.get()
            ? f.jsx(wt.Portal, {
                  position: 'bottom',
                  ...e,
                  children: f.jsx(Nt, {
                      children: f.jsxs(wt.Display, {
                          'data-name': 'playlist-dropdown-content',
                          className: Od.popover,
                          children: [
                              f.jsx(wt.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                              f.jsx('div', {
                                  className: Od.list,
                                  children: f.jsxs(Ne, {
                                      children: [f.jsx($d, {}), f.jsx(we, { classNames: { base: Od.bar } })],
                                  }),
                              }),
                              f.jsx(Ad, {}),
                              f.jsxs('div', { className: Od.triggers, children: [f.jsx(Bd, {}), f.jsx(Vd, {})] }),
                          ],
                      }),
                  }),
              })
            : null;
    });
function Fd(e) {
    const t = ft();
    return f.jsx(rd, { value: 'arrow_down', className: b(Od.arrow, t.opened && Od.arrow__opened, e.className) });
}
const Wd = C(function (e) {
        const [t] = vs(e.title, e.limit ?? 30);
        return f.jsxs('div', {
            className: b(Od.currentTitle, e.className),
            children: [t, e.id && f.jsx(id, { className: Od.alert, id: e.id, size: e.alertSize })],
        });
    }),
    qd = C(function (e) {
        const t = Es(),
            a = null == t ? void 0 : t.model.current(),
            n = fe(),
            s = $e({ header: null == a ? void 0 : a.title, body: Rd.readOrEmpty('playlists.trigger.explain') });
        if (!t || !1 === t.model.enabled.get()) return e.fallback;
        const r = e.asChild ? yt : 'div';
        return f.jsx(wt.Trigger, {
            children: (t) =>
                f.jsx(f.Fragment, {
                    children: f.jsxs(r, {
                        ...t,
                        onMouseEnter: (e) => {
                            (null == s || s.onMouseEnter(e),
                                n.play('mouse-enter', { target: 'vehicle:playlists:dropdown_trigger', original: e }));
                        },
                        onClick: (e) => {
                            (null == s || s.onClick(),
                                n.play('click', { target: 'vehicle:playlists:dropdown_trigger', original: e }),
                                t.onClick(e));
                        },
                        onMouseLeave: null == s ? void 0 : s.onMouseLeave,
                        'data-name': 'playlist-dropdown-trigger',
                        'data-test-id': 'playlistDropdown',
                        className: b(Od.trigger, e.className),
                        children: [
                            f.jsx(It, { children: e.children }),
                            a
                                ? f.jsx(Wd, { limit: e.limit, id: a.id, title: a.title, alertSize: e.alertSize })
                                : f.jsx(Wd, { title: Rd.readOrEmpty('pages.titles.allVehicles') }),
                            f.jsx(Fd, {}),
                        ],
                    }),
                }),
        });
    }),
    Zd = a.createContext(void 0);
function Ud() {
    const e = a.useContext(Zd);
    if (!e) throw new Error("Can't call useFilters outside of FiltersContext Provider. Please wrap it.");
    return e;
}
const Gd = {
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
    Kd = C(function (e) {
        const t = Ud(),
            a = t.tooltipHeaderMap ?? Rn,
            n = t.tooltipBodyMap ?? zn,
            s = ee.resolve('strings'),
            r = e.tooltip.body !== Vn ? s.readOrEmpty(`tank_carousel_filter.tooltip.${n[e.tooltip.body]}.body`) : '',
            o = $e({ header: s.readOrEmpty(`${a[e.tooltip.header]}`), body: r });
        return f.jsx(Jd, { ...e, tooltip: e.tooltip.body !== Vn && o });
    }),
    Jd = C(function (e) {
        const t = Ud(),
            n = t.filters.get(),
            s = a.useMemo(() => {
                var t;
                if ('role' === e.event.type) {
                    const t = e.event.role;
                    return Object.values(n).some((e) => e.some((e) => e.includes(t)));
                }
                return null == (t = n[e.event.field]) ? void 0 : t.includes(e.event.value);
            }, [e.event, n]);
        return f.jsx(jt, {
            ...e.tooltip,
            theme: St.primary,
            size: kt.extraSmall,
            className: b(Gd.toggle, s && Gd.toggle__activated, e.className),
            activated: s,
            onClick: () => {
                (t.change(e.event), e.tooltip && e.tooltip.onClick());
            },
            children: e.children,
        });
    });
function Xd(e) {
    return f.jsx('div', {
        className: b(Gd.toggleContainer, e.className),
        children: Hn.map((e) =>
            f.jsx(
                Kd,
                {
                    tooltip: { header: e, body: An },
                    event: { type: 'role', role: e },
                    children: f.jsx(Mt, { roleKey: e, size: Mt.sizes.x24x24, className: Gd.icon }),
                },
                e,
            ),
        ),
    });
}
function Qd(e) {
    return f.jsx('div', {
        className: b(Gd.toggleContainer, Gd.toggleContainer__type, e.className),
        children: Wn.map((e) =>
            f.jsx(
                Kd,
                {
                    tooltip: { header: e, body: Bn },
                    event: { field: Zn, type: 'regular', value: e },
                    className: Gd.toggle__type,
                    children: f.jsx(Et, { type: e, size: Et.sizes.x24x24 }),
                },
                e,
            ),
        ),
    });
}
function Yd(e) {
    return f.jsx('div', {
        className: b(Gd.toggleContainer, e.className),
        children: e.orderedNations.map((e) =>
            f.jsx(
                Kd,
                {
                    tooltip: { header: e, body: On },
                    event: { field: Un, type: 'regular', value: e },
                    children: f.jsx('div', {
                        className: Gd.nationWrapper,
                        children: f.jsx(ke, { className: Gd.nationIcon, path: `flags.c_60x40.${e}` }),
                    }),
                },
                e,
            ),
        ),
    });
}
function eu(e) {
    return f.jsx('div', {
        className: b(Gd.toggleContainer, e.className),
        children: qn.map((e) =>
            f.jsx(
                Kd,
                {
                    tooltip: { header: 'tier', body: Vn },
                    event: { field: Gn, type: 'regular', value: `level_${e}` },
                    children: f.jsx(Lt, { className: Gd.vehicleLevel, value: e }),
                },
                e,
            ),
        ),
    });
}
function tu(e) {
    const t = ze(`hangar.filter.special.${e.imagePath}`, `hangar.filter.special.${e.imagePath}_upscale`);
    return f.jsx(
        Kd,
        {
            tooltip: { header: e.special, body: e.special },
            event: { field: Kn, type: 'regular', value: e.special },
            children: f.jsx(ke, {
                className: b(Gd.specialsIcons, 'favorite' === e.special && Gd.specialsIcons__favorite),
                path: t,
            }),
        },
        e.special,
    );
}
function au() {
    const e = ze('hangar.filter.special.isCommonProgression', 'hangar.filter.special.isCommonProgression_upscale');
    return f.jsx(Kd, {
        tooltip: { header: $n, body: $n },
        event: { field: Jn, type: 'regular', value: $n },
        children: f.jsx(ke, { className: Gd.specialsIcons, path: e }),
    });
}
const nu = C(function (e) {
    var t;
    const a = Ud(),
        n = a.specialIds ?? Fn,
        s = As(),
        r = s.model.bpState.active.get(),
        o = s.model.rentVehiclesList(),
        i = null == (t = Dn()) ? void 0 : t.model,
        l = !i || i.isCrystalEarnEnabled.get(),
        c = !i || i.isDailyMultipliedXpEnabled.get(),
        d = n.filter((e) => (0 !== o.length || 'rented' !== e) && (c || 'bonus' !== e) && (l || 'crystals' !== e));
    return f.jsxs('div', {
        className: b(Gd.toggleContainer, e.className),
        children: [
            d.map((e) => {
                var t;
                return f.jsx(tu, { imagePath: (null == (t = a.imagesMap) ? void 0 : t[e]) ?? e, special: e }, e);
            }),
            r && f.jsx(au, {}),
            e.children,
        ],
    });
});
function su() {
    const e = At(),
        [t, n] = a.useState(!1);
    return (
        a.useEffect(() => {
            const a = e.inputRef.current;
            if (t || !a) return;
            (e.focus(), n(!0));
            const s = a.value.length;
            a.setSelectionRange(s, s);
            const r = (e) => {
                a && !a.contains(e.target) && n(!0);
            };
            return (document.addEventListener('mousedown', r), () => document.removeEventListener('mousedown', r));
        }, [e, t]),
        null
    );
}
function ru({ fieldClassName: e, value: t, ...a }) {
    const n = ee.resolve('strings');
    return f.jsxs(Dt.Provider, {
        value: t,
        children: [
            f.jsx(su, {}),
            f.jsxs(Dt.Decoration, {
                className: b(Gd.search, a.className),
                children: [
                    f.jsx(Dt.Icon, { icon: Dt.icons.search }),
                    f.jsx(Dt.Field, {
                        ...a,
                        className: Gd.inputField,
                        classNames: { placeholder: Gd.inputPlaceholder },
                        maxLength: 50,
                        placeholderVisibility: Tt.value,
                        children: n.readOrEmpty('tank_carousel_filter.popover.label.searchNameVehicle'),
                    }),
                    t.length > 0 && f.jsx(Dt.ClearButton, {}),
                ],
            }),
        ],
    });
}
function ou({ current: e, total: t, className: a }) {
    const n = ee.resolve('intl'),
        s = ee.resolve('strings');
    return f.jsxs(wt.Header, {
        className: b(Gd.header, a),
        children: [
            f.jsx(wt.Title, { children: f.jsx(je, { path: 'tank_carousel_filter.popover.title' }) }),
            f.jsx(wt.Subtitle, {
                children: f.jsx(je, {
                    upgradeLegacy: !0,
                    path: 'tank_carousel_filter.popover.counter',
                    params: {
                        count: f.jsxs('span', {
                            children: [
                                f.jsx('span', { className: Gd.currentValue, children: n.formatNumber('integral', e) }),
                                f.jsx('span', { className: Gd.slash, children: s.readOrEmpty('common.common.slash') }),
                                n.formatNumber('integral', t),
                            ],
                        }),
                    },
                }),
            }),
        ],
    });
}
const iu = a.memo(function (e) {
        return f.jsxs(lu, {
            ...e,
            className: e.className ?? Gd.scroll,
            children: [
                f.jsx(je, { className: Gd.category, path: 'tank_carousel_filter.popover.label.specials' }),
                f.jsx(nu, { children: e.children }),
            ],
        });
    }),
    lu = a.memo(function (e) {
        return f.jsx(Ne, {
            children: f.jsxs(Pt, {
                className: e.className,
                barClassNames: e.barClassNames,
                scrollClassNames: e.scrollClassNames,
                children: [
                    f.jsx(je, { className: Gd.category, path: 'tank_carousel_filter.popover.label.vehicleTypes' }),
                    f.jsx(Qd, {}),
                    f.jsx(je, { className: Gd.category, path: 'tank_carousel_filter.popover.label.vehicleRole' }),
                    f.jsx(Xd, {}),
                    f.jsx(je, { className: Gd.category, path: 'tank_carousel_filter.popover.label.nations' }),
                    f.jsx(Yd, { orderedNations: e.orderedNations }),
                    f.jsx(je, { className: Gd.category, path: 'tank_carousel_filter.popover.label.levels' }),
                    f.jsx(eu, {}),
                    e.children,
                ],
            }),
        });
    }),
    cu = 'vehicle:filter:filter-button:reset-icon',
    du = a.forwardRef(function ({ children: e, className: t, ...a }, n) {
        return f.jsx(ut, {
            ...a,
            ref: n,
            classNames: { base: b(Gd.filterButton, t) },
            size: ut.sizes.small,
            theme: a.theme,
            autoAlignContent: !1,
            children: e,
        });
    }),
    uu = C(
        a.forwardRef(function ({ current: e, total: t, classNames: a, onReset: n, ...s }, r) {
            const o = Ud(),
                i = ft(),
                l = ee.resolve('intl'),
                c = ee.resolve('strings'),
                d = ze('hangar.filter.filter_button', 'hangar.filter.filter_button_upscale'),
                u = ze('ui_kit.close_button.icon_small', 'ui_kit.close_button.icon_medium'),
                m = o.hasFilter(),
                p = fe();
            return f.jsx(jt, {
                ...s,
                ref: r,
                size: kt.extraSmall,
                theme: St.primary,
                activated: i.opened,
                'data-test-id': 'vehiclesFilter',
                classNames: {
                    base: b(Gd.filterTrigger, m && Gd.filterTrigger__activeFilter, null == a ? void 0 : a.base),
                    bulb: Gd.bulb,
                    content: Gd.triggerContent,
                },
                children:
                    s.children ??
                    (m
                        ? f.jsxs('div', {
                              className: b(Gd.activeFilterContent, null == a ? void 0 : a.content),
                              children: [
                                  l.formatNumber('integral', e),
                                  f.jsx('span', {
                                      className: Gd.slash,
                                      children: c.readOrEmpty('common.common.slash'),
                                  }),
                                  f.jsx('span', { className: Gd.total, children: l.formatNumber('integral', t) }),
                                  f.jsx(ke, {
                                      path: u,
                                      className: Gd.resetIcon,
                                      onClick: (e) => {
                                          (p.play('close', { target: cu, original: e }),
                                              e.stopPropagation(),
                                              o.reset(),
                                              null == n || n());
                                      },
                                      onMouseEnter: (e) => {
                                          p.play('mouse-enter', { target: cu, original: e });
                                      },
                                  }),
                              ],
                          })
                        : f.jsx(ke, { path: d, width: 24, height: 24 })),
            });
        }),
    ),
    mu = C(function () {
        const e = is();
        function t(e) {
            e.keyCode !== Xe.ESCAPE && e.stopPropagation();
        }
        return f.jsx(ru, {
            value: e.model.searchName.get(),
            onChange: (t) => e.controls.search(t.target.value),
            onKeyDown: t,
            onKeyUp: t,
        });
    }),
    pu = C(function () {
        const e = As(),
            t = e.model.vehicles.amount(),
            a = e.model.current.amount();
        return f.jsx(ou, { current: a, total: t });
    }),
    _u = C(function ({ classNames: e }) {
        const t = ee.resolve('strings'),
            a = As(),
            n = a.model.vehicles.amount(),
            s = a.model.current.amount(),
            r = $e({
                header: t.readOrEmpty('tank_carousel_filter.tooltip.params.header'),
                body: t.readOrEmpty('tank_carousel_filter.tooltip.params.body'),
            });
        return f.jsx(wt.Trigger, {
            children: (t) =>
                f.jsx(uu, {
                    ...r,
                    ...t,
                    onClick: (e) => {
                        (null == r || r.onClick(), null == t || t.onClick(e));
                    },
                    classNames: { base: null == e ? void 0 : e.trigger, content: null == e ? void 0 : e.content },
                    onReset: null == r ? void 0 : r.onClick,
                    current: s,
                    total: n,
                }),
        });
    }),
    hu = C(function ({ children: e }) {
        const t = is(),
            a = t.model.carouselRowCount.get(),
            n = ee.resolve('strings');
        const s = $e({
                header: n.readOrEmpty('tank_carousel_filter.tooltip.toggleSwitchCarousel.header'),
                body: n.readOrEmpty('tank_carousel_filter.tooltip.toggleSwitchCarousel.body'),
            }),
            r = $e({
                header: n.readOrEmpty('tank_carousel_filter.tooltip.searchInput.header'),
                body: n.readOrEmpty('tank_carousel_filter.tooltip.searchInput.body').replace('%(count)d', String(50)),
            });
        return f.jsxs(wt.Body, {
            className: Gd.body,
            children: [
                e,
                f.jsxs('div', {
                    className: Gd.footer,
                    children: [
                        f.jsx(wt.Divider, {}),
                        f.jsxs('div', {
                            className: Gd.footerButtons,
                            children: [
                                f.jsx(du, {
                                    ...s,
                                    theme: ut.themes.secondary,
                                    className: Gd.carouselChanger,
                                    onClick: function () {
                                        const e = 1 === a ? Tn : 1;
                                        t.controls.carouselTypeChange(e);
                                    },
                                    children: f.jsx(ke, {
                                        className: b(Gd.carouselIcon, a === Tn && Gd.carouselIcon__active),
                                        path: 'hangar.filter.carousel_selector',
                                    }),
                                }),
                                f.jsx('div', { ...r, className: Gd.searchInputWrapper, children: f.jsx(mu, {}) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    gu = C(function ({ pivot: e = 0, position: t = 'bottom', classNames: n, customFilterProps: s, children: r }) {
        const o = is(),
            i = Es(),
            l = a.useMemo(
                () => ({
                    filters: o.model.filters,
                    search: o.model.searchName,
                    hasFilter: () =>
                        o.model.computes.hasFilters() || void 0 !== (null == i ? void 0 : i.model.current()),
                    defaultFilters: o.model.computes.default,
                    change: o.controls.change,
                    reset: () => {
                        (null == i || i.controls.select(void 0), o.controls.reset());
                    },
                    ...s,
                }),
                [o, s, i],
            );
        return f.jsx(Zd.Provider, {
            value: l,
            children: f.jsx('div', {
                className: null == n ? void 0 : n.base,
                children: f.jsxs(wt, {
                    children: [
                        f.jsx(_u, {
                            classNames: {
                                trigger: null == n ? void 0 : n.trigger,
                                content: null == n ? void 0 : n.triggerContent,
                            },
                        }),
                        f.jsx(wt.Portal, {
                            lazy: !0,
                            position: t,
                            pivot: e,
                            children: f.jsx(Nt, {
                                children: f.jsx(wt.Display, { className: Gd.popover, children: r }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    }),
    vu = C(function (e) {
        const t = is().model.computes.nations();
        return f.jsxs(gu, {
            ...e,
            children: [
                f.jsx(wt.Tip, { position: 'bottom', size: '80rem', offset: '120rem' }),
                f.jsx(wt.Close, {}),
                f.jsx(pu, {}),
                f.jsx(fu, {}),
                f.jsx(hu, { children: f.jsx(iu, { orderedNations: t }) }),
            ],
        });
    }),
    fu = C(function () {
        const e = Es(),
            { id: t } = ft();
        return e && !1 !== e.model.enabled.get()
            ? f.jsxs(wt, {
                  children: [
                      f.jsx(Hd, { className: Gd.playlistPortal, 'data-popover-outside-click-whitelist-id': t }),
                      f.jsx(qd, {
                          asChild: !0,
                          className: Gd.playlistTrigger,
                          fallback: null,
                          limit: 15,
                          children: f.jsx(ut, { theme: 'secondary', classNames: { content: Gd.playlistTitle } }),
                      }),
                  ],
              })
            : null;
    }),
    bu = (e) =>
        a.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement(
                'g',
                { filter: 'url(#filter0_d_110732_242625)' },
                a.createElement('path', {
                    d: 'M9 12.9797C9.00034 12.8321 9.16667 12.7463 9.28613 12.8333C10.2419 13.5289 11.6261 14.5854 11.9366 14.8228C11.9747 14.852 12.0265 14.8524 12.0655 14.8244C12.8464 14.2625 14.134 13.2857 14.708 12.8489C14.8278 12.7578 14.9997 12.844 15 12.9944C15 13.1284 15 13.2755 15 13.4143C15 13.7562 15.2382 14.0514 15.5723 14.1243L18.1396 14.6838C18.6415 14.7931 18.9998 15.2377 19 15.7512C19.0001 15.9833 18.9999 16.2131 19 16.4163C19 16.4571 18.9773 16.4944 18.941 16.5132L12.335 19.9348C12.1253 20.0434 11.8757 20.0432 11.666 19.9348L5.05892 16.5132C5.02273 16.4944 5 16.4571 5 16.4163V15.7502C5 15.2373 5.35726 14.7931 5.8584 14.6838L8.42773 14.1243C8.76168 14.0514 8.9999 13.7561 9 13.4143V12.9797ZM14.5117 14.5159C14.4534 14.4867 14.3834 14.4904 14.3291 14.5266L12.4033 15.8108C12.1591 15.9736 11.8409 15.9736 11.5967 15.8108L9.6709 14.5266C9.61662 14.4904 9.54662 14.4867 9.48828 14.5159L9.06738 14.7258C8.94039 14.7893 8.93233 14.968 9.05273 15.0432L11.6143 16.6448C11.8501 16.7922 12.1499 16.7922 12.3857 16.6448L14.9482 15.0432C15.0684 14.9679 15.0595 14.7893 14.9326 14.7258L14.5117 14.5159ZM13.832 9.00513C13.9323 9.00526 14.0136 9.08655 14.0137 9.18677V11.179C14.0136 11.701 13.7872 12.1991 13.3955 12.5442C13.0635 12.8367 12.6349 13.0002 12.1924 13.0002H11.8145C11.3681 13.0002 10.9366 12.8354 10.6035 12.5383C10.2193 12.1954 9.99855 11.7056 9.99609 11.1907L9.98633 9.18286C9.9859 9.08206 10.0681 9.00011 10.1689 9.00024L13.832 9.00513ZM11.5 4.74536C11.5 4.88594 11.6143 5.00024 11.7549 5.00024H12.2451C12.3857 5.00024 12.5 4.88594 12.5 4.74536V4.10348C12.5 4.04323 12.5488 3.99439 12.6091 3.99439C12.724 3.99438 12.8452 3.99438 12.9761 3.99438C12.9918 3.99438 13.0074 3.99779 13.0217 4.00437L13.1445 4.06087C13.1832 4.07868 13.208 4.11738 13.208 4.15998V5.35181C13.2082 5.49222 13.3224 5.60571 13.4629 5.60571H13.7598C13.9001 5.60555 14.0135 5.49212 14.0137 5.35181V4.83036C14.0137 4.7409 14.1154 4.68947 14.1875 4.74253L14.3438 4.85767L15.2066 5.70515C15.2172 5.71557 15.2256 5.72805 15.2312 5.74182L15.7968 7.13056C15.8045 7.14942 15.8173 7.16576 15.8338 7.17772L16.8496 7.91431C16.9439 7.98264 16.9999 8.09181 17 8.20825V9.80493C16.9999 9.94656 16.9176 10.0755 16.7891 10.135L16.0633 10.471C16.0247 10.4888 16 10.5275 16 10.57V11.1633C15.9998 11.3698 15.8829 11.5583 15.6982 11.6506L15.1318 11.9338C15.0714 11.9641 15 11.9204 15 11.8528V8.38501C14.9999 8.18482 14.8379 8.02249 14.6377 8.02173L9.36523 8.00122C9.16386 8.00045 9 8.1641 9 8.36548V11.8528C9 11.9204 8.92861 11.9641 8.86816 11.9338L8.30176 11.6506C8.11709 11.5583 8.00015 11.3698 8 11.1633V10.57C8 10.5275 7.97531 10.4888 7.93673 10.471L7.21094 10.135C7.0824 10.0755 7.00006 9.94656 7 9.80493V8.20825C7.0001 8.09181 7.0561 7.98264 7.15039 7.91431L8.16617 7.17772C8.18267 7.16576 8.19548 7.14942 8.20316 7.13056L8.76884 5.74182C8.77445 5.72805 8.78282 5.71557 8.79343 5.70515L9.65625 4.85767L9.81143 4.74301C9.88344 4.6898 9.98535 4.74121 9.98535 4.83074V5.35181C9.98555 5.49222 10.0998 5.60571 10.2402 5.60571H10.5371C10.6774 5.60555 10.7908 5.49212 10.791 5.35181V4.1608C10.791 4.11828 10.8157 4.07964 10.8543 4.06179L10.9782 4.00447C10.9926 3.99782 11.0082 3.99438 11.024 3.99438C11.1548 3.99438 11.276 3.99438 11.3909 3.99439C11.4512 3.99439 11.5 4.04323 11.5 4.10348V4.74536Z',
                    fill: '#EEEDE9',
                    fillOpacity: 0.9,
                    shapeRendering: 'crispEdges',
                }),
            ),
            a.createElement(
                'defs',
                null,
                a.createElement(
                    'filter',
                    {
                        id: 'filter0_d_110732_242625',
                        x: 5,
                        y: 3.99438,
                        width: 14,
                        height: 17.0219,
                        filterUnits: 'userSpaceOnUse',
                        colorInterpolationFilters: 'sRGB',
                    },
                    a.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                    a.createElement('feColorMatrix', {
                        in: 'SourceAlpha',
                        type: 'matrix',
                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                        result: 'hardAlpha',
                    }),
                    a.createElement('feOffset', { dy: 1 }),
                    a.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                    a.createElement('feColorMatrix', {
                        type: 'matrix',
                        values: '0 0 0 0 0.208872 0 0 0 0 0.213178 0 0 0 0 0.220833 0 0 0 0.6 0',
                    }),
                    a.createElement('feBlend', {
                        mode: 'multiply',
                        in2: 'BackgroundImageFix',
                        result: 'effect1_dropShadow_110732_242625',
                    }),
                    a.createElement('feBlend', {
                        mode: 'normal',
                        in: 'SourceGraphic',
                        in2: 'effect1_dropShadow_110732_242625',
                        result: 'shape',
                    }),
                ),
            ),
        ),
    xu = (e) =>
        a.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement(
                'g',
                { filter: 'url(#filter0_d_110732_256663)' },
                a.createElement('path', {
                    d: 'M11 18.8909C11 18.9512 10.9512 19 10.8909 19H9.10909C9.04884 19 9 18.9512 9 18.8909V16.1091C9 16.0488 9.04884 16 9.10909 16H10.8909C10.9512 16 11 16.0488 11 16.1091V18.8909ZM8 17.8909C8 17.9512 7.95116 18 7.89091 18H5.10909C5.04884 18 5 17.9512 5 17.8909V17.1091C5 17.0488 5.04884 17 5.10909 17H7.89091C7.95116 17 8 17.0488 8 17.1091V17.8909ZM19 17.8909C19 17.9512 18.9512 18 18.8909 18H12.1091C12.0488 18 12 17.9512 12 17.8909V17.1091C12 17.0488 12.0488 17 12.1091 17H18.8909C18.9512 17 19 17.0488 19 17.1091V17.8909ZM16 13.8909C16 13.9512 15.9512 14 15.8909 14H14.1091C14.0488 14 14 13.9512 14 13.8909V11.1091C14 11.0488 14.0488 11 14.1091 11H15.8909C15.9512 11 16 11.0488 16 11.1091V13.8909ZM13 12.8909C13 12.9512 12.9512 13 12.8909 13H5.10909C5.04884 13 5 12.9512 5 12.8909V12.1091C5 12.0488 5.04884 12 5.10909 12H12.8909C12.9512 12 13 12.0488 13 12.1091V12.8909ZM19 12.8909C19 12.9512 18.9512 13 18.8909 13H17.1091C17.0488 13 17 12.9512 17 12.8909V12.1091C17 12.0488 17.0488 12 17.1091 12H18.8909C18.9512 12 19 12.0488 19 12.1091V12.8909ZM10 8.89091C10 8.95116 9.95116 9 9.89091 9H8.10909C8.04884 9 8 8.95116 8 8.89091V6.10909C8 6.04884 8.04884 6 8.10909 6H9.89091C9.95116 6 10 6.04884 10 6.10909V8.89091ZM7 7.89091C7 7.95116 6.95116 8 6.89091 8H5.10909C5.04884 8 5 7.95116 5 7.89091V7.10909C5 7.04884 5.04884 7 5.10909 7H6.89091C6.95116 7 7 7.04884 7 7.10909V7.89091ZM19 7.89091C19 7.95116 18.9512 8 18.8909 8H11.1091C11.0488 8 11 7.95116 11 7.89091V7.10909C11 7.04884 11.0488 7 11.1091 7H18.8909C18.9512 7 19 7.04884 19 7.10909V7.89091Z',
                    fill: '#EEEDE9',
                    fillOpacity: 0.9,
                    shapeRendering: 'crispEdges',
                }),
            ),
            a.createElement(
                'defs',
                null,
                a.createElement(
                    'filter',
                    {
                        id: 'filter0_d_110732_256663',
                        x: 5,
                        y: 6,
                        width: 14,
                        height: 14,
                        filterUnits: 'userSpaceOnUse',
                        colorInterpolationFilters: 'sRGB',
                    },
                    a.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                    a.createElement('feColorMatrix', {
                        in: 'SourceAlpha',
                        type: 'matrix',
                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                        result: 'hardAlpha',
                    }),
                    a.createElement('feOffset', { dy: 1 }),
                    a.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                    a.createElement('feColorMatrix', {
                        type: 'matrix',
                        values: '0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0627451 0 0 0 0.6 0',
                    }),
                    a.createElement('feBlend', {
                        mode: 'normal',
                        in2: 'BackgroundImageFix',
                        result: 'effect1_dropShadow_110732_256663',
                    }),
                    a.createElement('feBlend', {
                        mode: 'normal',
                        in: 'SourceGraphic',
                        in2: 'effect1_dropShadow_110732_256663',
                        result: 'shape',
                    }),
                ),
            ),
        ),
    yu = 'Header_1ce47eda',
    Cu = 'Header_base__ttcDisabled_bc60795e',
    wu = 'Header_title_ae11a84e',
    Nu = 'Header_playlist_8759383d',
    Iu = 'Header_toggles_ecb415bd',
    ju = 'Header_toggle_a0b149a9',
    ku = 'Header_text_aace6b88',
    Su = 'Header_icon_dbebe5f6',
    Pu = ee.resolve('strings'),
    Eu = C(function (e) {
        const t = Rs(),
            a = null == t ? void 0 : t.model.computed.ttcEnabled();
        return f.jsxs('div', { className: b(yu, !a && Cu, e.className), children: [f.jsx(Mu, {}), f.jsx(Lu, {})] });
    }),
    Mu = C(function () {
        const e = Rs(),
            t = null == e ? void 0 : e.model.computed.ttcEnabled(),
            a = null == e ? void 0 : e.model.computed.crewEnabled(),
            n = Boolean(t && a),
            s = Bt(
                { letterLimit: n ? 6 : 18 },
                {
                    medium: { letterLimit: n ? 18 : 28 },
                    large: { letterLimit: n ? 28 : 33 },
                    extraLarge: { letterLimit: 33 },
                },
            );
        return f.jsxs('div', {
            className: wu,
            children: [
                f.jsx(vu, {}),
                f.jsxs(wt, {
                    children: [
                        f.jsx(Hd, {}),
                        f.jsx(qd, {
                            alertSize: 'lg',
                            className: Nu,
                            fallback: f.jsx(je, { className: Nu, path: 'pages.titles.allVehicles' }),
                            limit: s.letterLimit,
                        }),
                    ],
                }),
            ],
        });
    }),
    Lu = C(function (e) {
        const t = Rs(),
            a = null == t ? void 0 : t.model.computed.noSelectedVehicle();
        return t && a
            ? f.jsxs('div', {
                  className: b(Iu, e.className),
                  children: [
                      f.jsxs(jt, {
                          activated: t.model.crewEnabled.get(),
                          onClick: t.controls.crew.toggle,
                          className: ju,
                          children: [
                              f.jsx(bu, { className: Su }),
                              f.jsx('div', {
                                  className: ku,
                                  children: Pu.readOrEmpty('hangar.myVehicles.buttons.crewToggle'),
                              }),
                          ],
                      }),
                      f.jsxs(jt, {
                          activated: t.model.ttcEnabled.get(),
                          onClick: t.controls.ttc.toggle,
                          className: ju,
                          children: [
                              f.jsx(xu, { className: Su }),
                              f.jsx('div', {
                                  className: ku,
                                  children: Pu.readOrEmpty('hangar.myVehicles.buttons.ttcToggle'),
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    }),
    Du = {
        wrapper: 'AllVehicles_wrapper_d9831b4b',
        wrapper__ttcDisabled: 'AllVehicles_wrapper__ttcDisabled_327ffbc8',
        wrapper__crewDisabled: 'AllVehicles_wrapper__crewDisabled_63a7cdd3',
        wrapperContent__ttc: 'AllVehicles_wrapperContent__ttc_9f932689',
        wrapperInfo: 'AllVehicles_wrapperInfo_48fd24eb',
        wrapperInfo__ttcDisabled: 'AllVehicles_wrapperInfo__ttcDisabled_a2e10443',
        listWrapper: 'AllVehicles_listWrapper_66f85e8f',
        listWrapper__empty: 'AllVehicles_listWrapper__empty_ffb3f00b',
        emptyMessage: 'AllVehicles_emptyMessage_93b119d2',
        crewWrapper: 'AllVehicles_crewWrapper_f8ab4f75',
        content: 'AllVehicles_content_41b0c11',
        crewColumn: 'AllVehicles_crewColumn_fdea5dc6',
        crewWidget: 'AllVehicles_crewWidget_2dd93f19',
    },
    Tu = { paths: ['/:hangar/'], exact: !1 },
    Au = Vt(Bs, { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.Settings('resId')) }),
    Bu = C(function () {
        return (
            (function (e) {
                const t = Le(),
                    a = fe(),
                    n = Ot(t.location, Tu),
                    s = null !== n;
                function r() {
                    const e = null == n ? void 0 : n.params.hangar;
                    e
                        ? t.push(`/${e}/{root}`)
                        : console.warn(`Can't detect route on ${t.location} for ${JSON.stringify(t.location)}`);
                }
                (Rt(s ? Xe.SPACE : Xe.NONE, (e) => {
                    (a.play('hot-key', { target: 'hangar:all_vehicles:all_vehicles', original: e }), r());
                }),
                    Qe(s ? Xe.ESCAPE : Xe.NONE, () => {
                        r();
                    }));
            })(),
            f.jsx(Au, {
                children: f.jsx(Ru, {
                    children: f.jsxs(Ou, {
                        children: [f.jsx(Eu, {}), f.jsx(zu, {}), f.jsx(Pl, { className: Du.emptyMessage })],
                    }),
                }),
            })
        );
    }),
    Vu = C(function (e) {
        const t = Rs();
        return (null == t ? void 0 : t.model.computed.crewEnabled())
            ? f.jsx('div', {
                  className: b(Du.crewColumn, e.className),
                  children: f.jsx(nd, { className: Du.crewWidget }),
              })
            : null;
    }),
    Ou = function (e) {
        return f.jsxs('div', {
            className: b(Du.crewWrapper, e.className),
            children: [f.jsx(Vu, {}), f.jsx('div', { className: Du.content, children: e.children })],
        });
    },
    Ru = C(function (e) {
        const t = Rs(),
            a = null == t ? void 0 : t.model.computed.crewEnabled(),
            n = null == t ? void 0 : t.model.computed.ttcEnabled();
        return f.jsx(vi, {
            classNames: {
                base: b(Du.wrapper, !a && Du.wrapper__crewDisabled, !n && Du.wrapper__ttcDisabled),
                info: b(Du.wrapperInfo, !n && Du.wrapperInfo__ttcDisabled),
                content: b(Du.wrapperContent, n && Du.wrapperContent__ttc),
            },
            children: e.children,
        });
    }),
    zu = C(function (e) {
        const t = As().model.selectedVehicle(),
            n = Rs(),
            s = a.useContext(hi),
            r = (() => {
                const e = null == n ? void 0 : n.model.computed.crewEnabled();
                return e && s.ttcEnabled ? 0 : e || s.ttcEnabled ? 1 : 2;
            })();
        return f.jsx('div', {
            className: b(Du.listWrapper, !t && Du.listWrapper__empty, e.className),
            children: f.jsx(Ne, { children: f.jsx(Nl, { extraColumns: r }) }),
        });
    });
const $u = 'emptySlot',
    Hu = 'left',
    Fu = 'right',
    Wu = 'both',
    qu = 'none',
    Zu = 189,
    Uu = 245,
    Gu = {
        default: { single: Zu, double: Zu },
        breakpoints: { medium: { single: 224 }, large: { single: Uu, double: Uu }, extraLarge: { single: 302 } },
    },
    Ku = (e, t) => (e || t ? (e ? (t ? qu : Fu) : Hu) : Wu),
    Ju = {
        empty: 'ActiveSlots_empty_9aab1ce1',
        doubleSlots: 'ActiveSlots_doubleSlots_2ce42013',
        slot__double: 'ActiveSlots_slot__double_e321ab18',
    };
function Xu({ width: e, className: t }) {
    return f.jsx('div', {
        className: Ju.empty,
        children: f.jsx(ki, {
            className: t,
            style: { width: `${e}px` },
            children: f.jsx('div', { className: Ju.vehicleSlot }),
        }),
    });
}
function Qu({ slotId: e, width: t, currentVehicleId: a, double: n, className: s }) {
    return void 0 === e
        ? null
        : yi(e)
          ? f.jsx(Mi, { className: b(ml, s), type: e, width: t, doubleRow: n })
          : e === Gs
            ? f.jsx(Xu, { className: b(ml, s), width: t })
            : f.jsx(hl, { vehicleId: e, selected: e === a, doubleRow: n, className: b(ml, s), style: { width: t } });
}
function Yu({ chunkedSlots: e, classNames: t, ...a }) {
    return void 0 === e
        ? null
        : f.jsx('div', {
              className: Ju.doubleSlots,
              children: e.map((e, n) =>
                  f.jsx(Qu, { ...a, slotId: e, className: b(Ju.slot__double, null == t ? void 0 : t.slot) }, n),
              ),
          });
}
const em = {
    root: 'ArrowButton_root_5327085d',
    button: 'ArrowButton_button_7654af94',
    icon: 'ArrowButton_icon_35e5294f',
    button__left: 'ArrowButton_button__left_5327085d',
    background: 'ArrowButton_background_5327085d',
    border: 'ArrowButton_border_5327085d',
    overlay: 'ArrowButton_overlay_c36cbc33',
    content: 'ArrowButton_content_4666fd05',
    button__right: 'ArrowButton_button__right_5327085d',
};
function tm({ direction: e, className: t, ...a }) {
    return f.jsx(ut, {
        ...a,
        classNames: {
            base: b(em.button, em[`button__${e}`], t),
            background: em.background,
            border: em.border,
            overlay: em.overlay,
            content: em.content,
        },
        theme: ut.themes.secondary,
        size: ut.sizes.small,
        autoAlignContent: !1,
        soundTarget: 'carousel:arrow_button',
        children: f.jsx(ke, { path: 'hangar.carousel.buttonArrow', className: em.icon }),
    });
}
tm.direction = { right: 'right', left: 'left' };
const am = {
        root: 'CarouselNavButtons_root_3f67251c',
        navButtonWrapper: 'CarouselNavButtons_navButtonWrapper_a13c2a68',
        navButton: 'CarouselNavButtons_navButton_adcc2e9b',
        navButton__left: 'CarouselNavButtons_navButton__left_5f6dc3a0',
        navButton__right: 'CarouselNavButtons_navButton__right_66b4f03f',
        navButton__hidden: 'CarouselNavButtons_navButton__hidden_69011a0b',
        mask: 'CarouselNavButtons_mask_d54421e2',
        mask__both: 'CarouselNavButtons_mask__both_7294632e',
        mask__left: 'CarouselNavButtons_mask__left_e8bc4c90',
        mask__right: 'CarouselNavButtons_mask__right_6be519f7',
    },
    nm = 0;
function sm(e) {
    return ({ button: t }) => {
        t === nm && e();
    };
}
function rm({ itemWidth: e, api: t, children: n }) {
    const s = a.useRef(null),
        [r, o] = a.useState(!1),
        { applyScroll: i, animationScroll: l, disabled: c } = t,
        [d, u] = ye(t),
        m = d || c,
        p = u || c;
    function _(t) {
        function a() {
            const a = l.scrollPosition.get();
            i(a + t * e);
        }
        r || (a(), (s.current = window.setInterval(a, 100)), o(!0));
    }
    function h() {
        (null !== s.current && (clearInterval(s.current), (s.current = null)), o(!1));
    }
    return f.jsxs('div', {
        className: am.navButtonWrapper,
        children: [
            f.jsx(tm, {
                direction: tm.direction.left,
                onMouseDown: sm(() => _(-1)),
                onMouseUp: h,
                onMouseLeave: h,
                className: b(am.navButton, am.navButton__left, m && am.navButton__hidden),
            }),
            f.jsx('div', { className: b(am.mask, am[`mask__${Ku(d, u)}`]), children: n }),
            f.jsx(tm, {
                direction: tm.direction.right,
                onMouseDown: sm(() => _(1)),
                onMouseUp: h,
                onMouseLeave: h,
                className: b(am.navButton, am.navButton__right, p && am.navButton__hidden),
            }),
        ],
    });
}
const om = {
    base: 'CarouselSkeleton_1ac002e3',
    content: 'CarouselSkeleton_content_b18f8dd7',
    scroll: 'CarouselSkeleton_scroll_badf82c7',
};
function im(e) {
    return f.jsx('div', { ...e, className: b(om.content, e.className) });
}
function lm({
    api: e,
    widthElement: t,
    totalElements: a,
    disabled: n,
    onDraggingState: s,
    renderElement: r,
    classNames: o,
}) {
    return f.jsx('div', {
        className: b(om.base, null == o ? void 0 : o.base),
        children: f.jsx(rm, {
            api: e,
            itemWidth: t,
            children: f.jsx(tt, {
                api: e,
                elementWidth: t - Ae(1),
                direction: 'horizontal',
                totalElements: a,
                wrappers: { Content: im },
                className: b(om.scroll, null == o ? void 0 : o.scroll),
                renderScroll: (t) => f.jsx(zt, { ...t, api: e, disabled: n, onDraggingState: s, children: t.children }),
                renderElement: (e) => (r ? r(e) : f.jsx(Xu, { className: null == o ? void 0 : o.element, width: t })),
            }),
        }),
    });
}
function cm({ api: e, carouselRows: t }) {
    const n = (function (e) {
            const t = Bt(Gu.default, Gu.breakpoints);
            return Ae(e === Tn ? t.double : t.single);
        })(t),
        [s, r] = a.useState({ carouselRows: 0, cardWidth: 0, visibleSlots: 0 });
    return (
        a.useLayoutEffect(() => {
            function a() {
                const a = e.getWrapperSize();
                a &&
                    r(
                        t !== Tn
                            ? { visibleSlots: Math.ceil(a / n), cardWidth: n, carouselRows: t }
                            : { visibleSlots: Math.ceil((a / n) * t), cardWidth: n, carouselRows: t },
                    );
            }
            a();
            return new Te().add(e.events.on('resizeHandled', a)).add(e.events.on('recalculateContent', a)).dispose;
        }, [e, n, t]),
        s
    );
}
const dm = 'Carousel_draggingOverlay_2ac699b0',
    um = 'Carousel_9b3e04da',
    mm = 'Carousel_base__visible_24d53d12',
    pm = 'Carousel_card_5449ec9a',
    _m = 'Carousel_card__inactive_c59331d9',
    hm = C(function () {
        const [e, t] = a.useState(!1),
            { api: n } = Ht(),
            s = As(),
            r = is().model.carouselRowCount.get(),
            o = s.model.prebattleModeActive(),
            i = s.model.telecomRentStatus.get(),
            l = s.model.current.ids(),
            c = s.model.current.list(),
            d = s.model.selectedVehicle(),
            { currentIndex: u } = Ci(l, null == d ? void 0 : d.id),
            m = s.model.slots.recover.get(),
            { carouselRows: p, cardWidth: _, visibleSlots: h } = cm({ api: n, carouselRows: r }),
            { activeSlotsAmount: g, activeSlotsIds: v } = (function (e, t, n, s) {
                return a.useMemo(() => {
                    if (!t) return { activeSlotsAmount: 0, activeSlotsIds: [] };
                    const a = xi(n, s),
                        r = e.length + a.right.length + a.left.length,
                        o = Math.max(0, t - r);
                    return {
                        activeSlotsAmount: r,
                        activeSlotsIds: [...a.left, ...e, ...a.right, ...Array(o).fill($u)],
                    };
                }, [n, e, t, s]);
            })(l, h, m, i),
            x =
                ((y = v),
                a.useMemo(() => {
                    var e, t;
                    const a = [];
                    for (let n = 0; n < y.length; n += Tn) a.push(y.slice(n, n + Tn));
                    return (
                        1 === (null == (e = a.at(-1)) ? void 0 : e.length) && (null == (t = a.at(-1)) || t.push($u)),
                        a
                    );
                }, [y]));
        var y;
        (a.useEffect(() => {
            const e = Ft(500, !0, () =>
                Wt.contextMenu.hide(
                    0,
                    ee.resolve('aliases').read((e) => e.common.contextMenu.Backport('resId')),
                ),
            );
            return (
                n.events.on('change', e),
                () => {
                    (e.cancel(), n.events.off('change', e));
                }
            );
        }, [n]),
            wi(n, u, _, p, l.length, h > g),
            (function (e, t, a, n, s) {
                const r = n === Tn;
                function o(n) {
                    a(-1 !== e ? t[e + n].inventoryId : t[0].inventoryId);
                }
                const i = [
                    { key: Xe.ARROW_DOWN, blockKey: !r || e % n == n - 1 || e === t.length - 1, action: () => o(1) },
                    { key: Xe.ARROW_UP, blockKey: !r || e % n == 0, action: () => o(-1) },
                    { key: Xe.ARROW_LEFT, blockKey: r ? e < n : 0 === e, action: () => o(-n) },
                    {
                        key: Xe.ARROW_RIGHT,
                        blockKey: r ? e > t.length - (n + 1) : e === t.length - 1,
                        action: () => o(n),
                    },
                    { key: Xe.HOME, blockKey: 0 === t.length, action: () => a(t[0].inventoryId) },
                    { key: Xe.END, blockKey: 0 === t.length, action: () => a(t[t.length - 1].inventoryId) },
                ];
                for (const { key: l, blockKey: c, action: d } of i) {
                    const e = s || c ? Xe.NONE : l;
                    Qe(e, d);
                }
            })(u, c, s.controls.select, p, 0 === l.length || o));
        const C = (function (e, t) {
            const [n, s] = a.useState(0 === t),
                r = $t();
            return (
                a.useEffect(() => {
                    if (n || 0 === t) return s(!0);
                    function a() {
                        (s(!0), o.dispose(), r.clear());
                    }
                    r.run(a);
                    const o = new Te()
                        .add(r.clear)
                        .add(e.events.on('resizeHandled', () => r.run(a)))
                        .add(e.events.on('recalculateContent', () => r.run(a)));
                    return o.dispose;
                }, [e, t, n, r]),
                n
            );
        })(n, l.length);
        return f.jsxs(f.Fragment, {
            children: [
                f.jsx(lm, {
                    api: n,
                    widthElement: _,
                    totalElements: p === Tn ? x.length : v.length,
                    disabled: h > g,
                    onDraggingState: t,
                    classNames: { base: b(um, C && mm), element: b(pm, e && _m) },
                    renderElement: (t) => {
                        const a = b(pm, e && _m);
                        return p === Tn
                            ? f.jsx(Je, {
                                  failure: () => f.jsx(Xu, { className: a, width: _ }),
                                  children: f.jsx(
                                      Yu,
                                      {
                                          chunkedSlots: x[t],
                                          currentVehicleId: null == d ? void 0 : d.id,
                                          width: _,
                                          classNames: { slot: a },
                                          double: !0,
                                      },
                                      t,
                                  ),
                              })
                            : f.jsx(Je, {
                                  failure: () => f.jsx(Xu, { className: a, width: _ }),
                                  children: f.jsx(
                                      Qu,
                                      {
                                          slotId: v[t],
                                          currentVehicleId: null == d ? void 0 : d.id,
                                          width: _,
                                          className: a,
                                          double: !1,
                                      },
                                      v[t] ?? t,
                                  ),
                              });
                    },
                }),
                I.createPortal(e && f.jsx('div', { className: dm }), document.body),
            ],
        });
    }),
    gm = (function () {
        const e = 'undefined' != typeof document && document.createElement('link').relList;
        return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
    })(),
    vm = {},
    fm = function (e, t, a) {
        let n = Promise.resolve();
        if (t && t.length > 0) {
            const e = document.getElementsByTagName('link'),
                s = document.querySelector('meta[property=csp-nonce]'),
                r = (null == s ? void 0 : s.nonce) || (null == s ? void 0 : s.getAttribute('nonce'));
            n = Promise.allSettled(
                t.map((t) => {
                    if (
                        ((t = (function (e, t) {
                            return new URL(e, t).href;
                        })(t, a)),
                        t in vm)
                    )
                        return;
                    vm[t] = !0;
                    const n = t.endsWith('.css'),
                        s = n ? '[rel="stylesheet"]' : '';
                    if (!!a)
                        for (let a = e.length - 1; a >= 0; a--) {
                            const s = e[a];
                            if (s.href === t && (!n || 'stylesheet' === s.rel)) return;
                        }
                    else if (document.querySelector(`link[href="${t}"]${s}`)) return;
                    const o = document.createElement('link');
                    return (
                        (o.rel = n ? 'stylesheet' : gm),
                        n || (o.as = 'script'),
                        (o.crossOrigin = ''),
                        (o.href = t),
                        r && o.setAttribute('nonce', r),
                        document.head.appendChild(o),
                        n
                            ? new Promise((e, a) => {
                                  (o.addEventListener('load', e),
                                      o.addEventListener('error', () =>
                                          a(new Error(`Unable to preload CSS for ${t}`)),
                                      ));
                              })
                            : void 0
                    );
                }),
            );
        }
        function s(e) {
            const t = new Event('vite:preloadError', { cancelable: !0 });
            if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
        }
        return n.then((t) => {
            for (const e of t || []) 'rejected' === e.status && s(e.reason);
            return e().catch(s);
        });
    },
    bm = a.lazy(() => fm(() => import('../../../chunks/widget.js'), [], import.meta.url));
function xm(e) {
    var t;
    const n = null == (t = e.options) ? void 0 : t.rootId;
    if (n) return f.jsx(qt, { id: n, children: f.jsx(a.Suspense, { children: f.jsx(bm, { ...e }) }) });
    console.error('TeaserWidget: rootId is not given');
}
const ym = 'AllVehiclesButton_3837d663',
    Cm = 'AllVehiclesButton_grid_64f1c816',
    wm = 'AllVehiclesButton_content_75d29fb4';
function Nm(e) {
    const t = fe(),
        a = ee.resolve('strings'),
        n = Le(),
        s = ze('hangar.filter.all_vehicle_button', 'hangar.filter.all_vehicle_button_upscale'),
        r = $e({
            header: a.readOrEmpty('hangar.tooltip.filters.myVehicle.header'),
            body: a.readOrEmpty('hangar.tooltip.filters.myVehicle.body'),
        });
    function o() {
        n.push(e.route ?? '/hangar/allVehicles');
    }
    return f.jsxs(ut, {
        ...r,
        classNames: { base: ym },
        theme: ut.themes.secondary,
        size: ut.sizes.small,
        autoAlignContent: !1,
        onClick: function () {
            (r.onClick(), o());
        },
        children: [
            f.jsx(ke, { className: Cm, path: s }),
            f.jsx(Zt, {
                keyCode: Xe.SPACE,
                onActive: function (e) {
                    (t.play('hot-key', { target: 'vehicle:all_vehicles:all_vehicles_button', original: e }), o());
                },
                silent: !0,
                classNames: { content: wm },
                children: f.jsx(Zt.Code, {}),
            }),
        ],
    });
}
const [Im, jm] = B()(({ observableModel: e }) => ({ ...e.primitives(['hasSuitableVehicles', 'assetsPointer']) }), V),
    km = j(function (e) {
        const t = is().model.computes.nations(),
            a = jm().model.assetsPointer.get(),
            n = xn(null, { assetsPointer: a }).dynamicTexts.tooltip.filter,
            s = $e({ header: n.header(), body: n.body() });
        return f.jsxs(gu, {
            ...e,
            children: [
                f.jsx(wt.Tip, { position: 'bottom', size: '80rem', offset: '120rem' }),
                f.jsx(wt.Close, {}),
                f.jsx(pu, {}),
                f.jsx(fu, {}),
                f.jsx(hu, {
                    children: f.jsx(iu, {
                        orderedNations: t,
                        children: f.jsx(Jd, {
                            tooltip: s,
                            event: { field: Kn, type: 'regular', value: 'funRandom' },
                            children: f.jsx('img', {
                                className: Gd.specialsIcons,
                                src: yn(a).library.carousel_filter(),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    Sm = {
        root: '/funRandomHangar/{root}',
        loadout: {
            root: '/funRandomHangar/loadout',
            optDevices: '/funRandomHangar/loadout/equipment',
            battleBoosters: '/funRandomHangar/loadout/instructions',
            shells: '/funRandomHangar/loadout/shells',
            consumables: '/funRandomHangar/loadout/consumables',
        },
        vehicles: '/funRandomHangar/allVehicles',
    },
    Pm = a.memo(function () {
        return f.jsx(Ut, { children: f.jsx(hm, {}) });
    }),
    Em = Pe('LoadoutPanel'),
    Mm = a.forwardRef(function ({ children: e, className: t, ...a }, n) {
        return f.jsx(Em, { className: t, ref: n, ...a, children: e });
    }),
    Lm = 'shells',
    Dm = 'optDevices',
    Tm = Lm,
    Am = 'consumables',
    Bm = 'battleBoosters',
    Vm = 'equipment',
    Om = 'instructions',
    Rm = 'shells',
    zm = 'consumables',
    $m = {
        Standard: 'standardEquipments',
        Bounty: 'bountyEquipments',
        Improved: 'improvedEquipments',
        Experimental: 'experimentalEquipments',
    },
    Hm = { Firepower: 'firepower', Survivability: 'survivability', Stealth: 'stealth', Mobility: 'mobility' },
    Fm = 'gunner_smoothTurret',
    Wm = 'driver_virtuoso',
    qm = 'driver_smoothDriving',
    Zm = 'fireFighting',
    Um = 'naturalCover',
    Gm = 'gunner_rancorous',
    Km = 'loader_pedant',
    Jm = 'commander_practical',
    Xm = 'commander_enemyShotPredictor';
function Qm(e) {
    return {
        currentIndex: e.currentIndex,
        id: e.groupId,
        totalCount: e.totalCount,
        states: ue(e.setupSelector.states, (e) => e),
        switchEnabled: e.setupSelector.isSwitchEnabled,
        prebattleSwitchDisabled: e.setupSelector.isPrebattleSwitchDisabled,
        sections: ue(e.sections, Ym),
    };
}
function Ym(e) {
    return {
        type: e.type,
        name: e.name,
        vehicle: e.vehicle,
        vehicleType: e.vehicleType,
        newItemsCount: e.newItemsCount,
        slots: ue(e.slots, ep),
        warning: e.isWarning,
    };
}
function ep(e) {
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
              ue(t, (e) =>
                  (function (e, t) {
                      return { dynamic: t, type: e.name, active: e.isCorrect, clickable: e.isClickable };
                  })(e, a),
              ))[0]
            : void 0,
    };
    var t, a;
}
const tp = [Bm, 'battleAbilities'],
    [ap, np] = B('AmmunitionPanelModel')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives({
                        isDisabled: 'disabled',
                        selectedSlot: 'selectedSlot',
                        selectedSection: 'selectedSection',
                        vehicleId: 'vehicleId',
                        hasVehSkillTree: 'hasVehSkillTree',
                    }),
                    groups: e.arrayClone('groups'),
                },
                a = k(() => nt(t.groups.get(), Qm)),
                n = X.primitive((e, a) => t.selectedSlot.get() === e && t.selectedSection.get() === a),
                s = X.primitive((e) => t.selectedSection.get() === e),
                r = X.primitive((e) => {
                    for (const t of a()) for (const a of t.sections) if (a.name === e) return a.slots.length;
                    return 0;
                }),
                o = X.primitive((e) => !tp.includes(e) && s(e) && r(e) > 1),
                i = X.structural(() => {
                    const e = t.selectedSection.get(),
                        n = t.selectedSlot.get();
                    for (const t of a())
                        for (const a of t.sections) {
                            if (a.name !== e) continue;
                            const s = a.slots[n];
                            return s && -1 !== s.intCD
                                ? { groupIndex: t.currentIndex, item: { intCD: s.intCD, type: s.overlayType } }
                                : { groupIndex: t.currentIndex, item: void 0 };
                        }
                    return { groupIndex: 0, item: void 0 };
                }),
                l = X.model((e) => a()[e]),
                c = X.model((e, t) => {
                    var a;
                    return null == (a = l(e)) ? void 0 : a.sections[t];
                }),
                d = X.model((e, t, a) => {
                    var n;
                    return null == (n = c(e, t)) ? void 0 : n.slots[a];
                });
            return {
                ...t,
                vehicleId: X.primitive(() => {
                    const e = t.vehicleId.get();
                    return '' === e ? void 0 : e;
                }),
                computes: {
                    groups: a,
                    isSlotSelected: n,
                    isSectionSelected: s,
                    selectedSlotGroupAndItem: i,
                    groupByIndex: l,
                    sectionByIndex: c,
                    slotByIndex: d,
                    sectionSize: r,
                    sectionDraggable: o,
                },
            };
        },
        ({ externalModel: e }) => ({
            changePreset: e.createCallback((e) => ({ args: JSON.stringify({ ...e }) }), 'onChangeSetupIndex'),
            openSlotSpecDialog: e.createCallbackNoArgs('onOpenSlotSpecDialog'),
        }),
    );
var sp = ((e) => ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'), e))(sp || {});
const rp = ee.resolve('strings');
const op = {
        base: 'PanelSwitcher_5e94cb32',
        switcher: 'PanelSwitcher_switcher_a8240ce9',
        switcher__warning: 'PanelSwitcher_switcher__warning_a8240ce9',
        switcherOverlay: 'PanelSwitcher_switcherOverlay_914ce250',
        item__warning: 'PanelSwitcher_item__warning_c6581e78',
        itemIcon: 'PanelSwitcher_itemIcon_484391b3',
        indicator: 'PanelSwitcher_indicator_a80d3313',
        indicator__inactive: 'PanelSwitcher_indicator__inactive_399f9969',
    },
    ip = 'default',
    lp = 'warning',
    cp = 'selected',
    dp = 'first',
    up = 'second';
function mp(e, t) {
    return `loadout.switcher.${e}_item_${t}`;
}
function pp(e) {
    const t =
        ((a = e.groupId),
        (n = e.modifier),
        $e({
            header: rp.readOrEmpty('tank_setup.tooltips.prebattleSwitchIndicator.title'),
            body: rp.readOrEmpty(`tank_setup.tooltips.prebattleSwitchIndicator.desc.c_${a}.${n}`),
        }));
    var a, n;
    const s = e.itemStates[0] === sp.WARNING,
        r = e.itemStates[1] === sp.WARNING,
        o = 1 === e.currentIndex;
    return f.jsxs('div', {
        className: b(op.base, e.className),
        children: [
            f.jsxs(Gt, {
                type: Gt.types.vertical,
                onSwitch: function (t) {
                    e.onSwitch({ groupId: e.groupId, currentIndex: t ? 1 : 0 });
                },
                disabled: e.disabled,
                size: Gt.sizes.small,
                checked: o,
                classNames: {
                    base: b(
                        op.switcher,
                        ((i = e.currentIndex),
                        (l = e.itemStates),
                        l.some((e, t) => e === sp.WARNING && t !== i) && op.switcher__warning),
                    ),
                    overlay: op.switcherOverlay,
                },
                children: [
                    f.jsx(Gt.Item, {
                        className: b(op.item, s && op.item__warning),
                        children: f.jsx(ke, { path: mp(dp, s ? lp : ip), className: op.itemIcon }),
                    }),
                    f.jsx(Gt.Item, {
                        className: b(op.item, r && op.item__warning),
                        children: f.jsx(ke, { path: mp(up, r ? lp : ip), className: op.itemIcon }),
                    }),
                    f.jsx(Gt.SelectedItem, {
                        children: f.jsx(ke, { path: mp(o ? up : dp, cp), className: op.itemIcon }),
                    }),
                ],
            }),
            f.jsx(ke, {
                ...(e.prebattleSwitchDisabled && t),
                path: 'loadout.switcher.indicator_' + (e.prebattleSwitchDisabled ? 'active' : 'default'),
                className: b(op.indicator, !e.prebattleSwitchDisabled && op.indicator__inactive),
            }),
        ],
    });
    var i, l;
}
const _p = 'select',
    hp = 'undo',
    gp = 'cancel',
    vp = 'swap',
    fp = 'demount',
    bp = 'demount_from_setup',
    xp = 'demount_from_setups',
    yp = 'destroy',
    Cp = 'upgrade',
    wp = 'add_one',
    Np = 'drag_drop';
function Ip(e) {
    return { currency: e.name, value: e.value, enough: e.isEnough };
}
function jp(e) {
    return ue(e, Ip);
}
function kp(e) {
    return { priceID: e.priceID, price: jp(e.price), previousPrice: jp(e.defPrice), discount: jp(e.discount) };
}
const Sp = (e) => ({
    canConfirm: e.canAccept,
    canCancel: e.canCancel,
    autoRenewalEnabled: e.isAutoRenewalEnabled,
    disabled: e.isDisabled,
    totalItemsInStorage: e.totalItemsInStorage,
    prices: nt(e.price, (e) => Ip(e)),
});
function Pp(e) {
    return { name: e.name, correct: e.isCorrect, clickable: e.isClickable };
}
function Ep(e) {
    return { dynamic: e.isDynamic, specializations: ((t = e.specializations), ue(t, Pp)) };
    var t;
}
function Mp(e) {
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
        price: kp(e.price),
        specializations: Ep(e.specializations),
    };
}
function Lp(e) {
    return {
        ...Mp(e),
        description: e.description,
        builtIn: e.isBuiltIn,
        itemName: e.itemName,
        buyMoreDisabled: e.isBuyMoreDisabled,
    };
}
const [Dp, Tp] = B('ConsumablesModel')(
    ({ observableModel: e }) => {
        const t = {
                ...e.primitives(['autoloadEnabled', 'hasChanges']),
                consumables: e.arrayClone('consumables'),
                dealData: e.transform((e) => Sp(e), 'dealPanel'),
                prices: e.transform((e) => ue(e, Ip), 'dealPanel.price'),
            },
            a = X.structural(() => {
                const e = t.dealData.get(),
                    a = [];
                return (
                    e.totalItemsInStorage > 0 &&
                        a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                    t.prices.get().forEach((e) => a.push(e)),
                    { ...e, prices: a }
                );
            }),
            n = X.primitive(() => nt(t.consumables.get(), Lp)),
            s = X.model((e) => Kt(n(), (t) => t.intCD === e));
        return { ...t, computes: { consumables: n, consumableById: s, dealData: a } };
    },
    ({ model: e, externalModel: t }) => ({
        unmount: t.createCallback((e, t) => ({ intCD: e, currentSlotId: t, actionType: hp, type: Am }), 'onSlotAction'),
        actionSlot: t.createCallback((e) => ({ ...e, type: Am }), 'onSlotAction'),
        swapSlots: t.createCallback((e) => ({ ...e, actionType: Np }), 'onSlotAction'),
        confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
        cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
        toggleAutoRenewal: t.createCallback(
            () => ({ value: !e.dealData.get().autoRenewalEnabled }),
            'dealPanel.onAutoRenewalChanged',
        ),
    }),
);
function Ap(e) {
    return { valueKey: e.valueKey, value: e.value, valueType: e.valueType, debuff: e.isDebuff };
}
function Bp(e) {
    return { localeName: e.localeName, values: ((t = e.values), ue(t, Ap)) };
    var t;
}
function Vp(e) {
    return { title: e.title, items: ue(e.items, Bp) };
}
function Op(e) {
    return {
        ...Mp(e),
        withDescription: e.withDescription,
        trophy: e.isTrophy,
        modernized: e.isModernized,
        upgradable: e.isUpgradable,
        effect: e.effect,
        level: e.level,
        destroyTooltipBodyPath: e.destroyTooltipBodyPath,
        activeSpecsMask: e.activeSpecsMask,
        bonuses: Vp(e.bonuses),
    };
}
const [Rp, zp] = B('EquipmentsModel')(
    ({ observableModel: e }) => {
        const t = {
                standardEquipments: e.transform((e) => ue(e, Op), 'simpleEquipments'),
                improvedEquipments: e.transform((e) => ue(e, Op), 'deluxEquipments'),
                bountyEquipments: e.transform((e) => ue(e, Op), 'trophyEquipments'),
                experimentalEquipments: e.transform((e) => ue(e, Op), 'modernizedEquipments'),
                ...e.primitives(['hasChanges', 'equipCoinCount']),
                ...e.primitives({ hasModernizedEquipmentToDisassemble: 'hasExperimentalEquipmentToDisassemble' }),
                standardEquipmentsFilters: n.box(new Set()),
                dealData: e.transform((e) => Sp(e), 'dealPanel'),
                prices: e.transform((e) => ue(e, Ip), 'dealPanel.price'),
            },
            a = X.structural(() => {
                const e = t.dealData.get(),
                    a = [];
                return (
                    e.totalItemsInStorage > 0 &&
                        a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                    t.prices.get().forEach((e) => a.push(e)),
                    { ...e, prices: a }
                );
            }),
            s = X.model((e, a) => Kt(t[a].get(), (t) => t.intCD === e)),
            r = X.model(() => {
                const e = t.standardEquipmentsFilters.get(),
                    a = t.standardEquipments.get();
                return 0 === e.size
                    ? a
                    : (function (e, t) {
                          return Jt(e, (e) => e.specializations.specializations.some((e) => t.has(e.name)));
                      })(a, e);
            });
        return { ...t, computes: { equipmentsItemByIntCD: s, dealData: a, filteredStandardEquipments: r } };
    },
    ({ model: e, externalModel: t }) => ({
        unmount: t.createCallback((e, t) => ({ intCD: e, currentSlotId: t, actionType: hp, type: Dm }), 'onSlotAction'),
        actionSlot: t.createCallback((e) => ({ ...e, type: Dm }), 'onSlotAction'),
        swapSlots: t.createCallback((e) => ({ ...e, actionType: Np }), 'onSlotAction'),
        getMoreCurrency: t.createCallbackNoArgs('onGetMoreCurrency'),
        confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
        cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
        toggleAutoRenewal: t.createCallback(
            () => ({ value: !e.dealData.get().autoRenewalEnabled }),
            'dealPanel.onAutoRenewalChanged',
        ),
        updateFilters: r((t) => {
            const a = e.standardEquipmentsFilters.get();
            (a.has(t) ? a.delete(t) : a.add(t), e.standardEquipmentsFilters.set(a));
        }),
        clearFilters: r(() => {
            e.standardEquipmentsFilters.set(new Set());
        }),
    }),
);
function $p(e) {
    return {
        ...Mp(e),
        description: e.description,
        buyMoreVisible: e.isBuyMoreVisible,
        buyMoreDisabled: e.isBuyMoreDisabled,
    };
}
const [Hp, Fp] = B('InstructionsModel')(
        (e) => {
            const t = {
                    crewInstructions: e.observableModel.arrayClone('crewInstructions'),
                    equipmentInstructions: e.observableModel.arrayClone('equipmentInstructions'),
                },
                a = {
                    ...e.observableModel.primitives(['autoloadEnabled', 'hasChanges']),
                    crewInstructions: n.box({}),
                    crewInstructionsArray: n.box([]),
                    equipmentInstructions: n.box({}),
                    equipmentInstructionsArray: n.box([]),
                    dealData: e.observableModel.transform((e) => Sp(e), 'dealPanel'),
                    prices: e.observableModel.transform((e) => ue(e, Ip), 'dealPanel.price'),
                };
            (e.cleanup(
                s(() => {
                    const e = Ie(t.crewInstructions.get(), (e, t) => ((e[t.intCD] = $p(t)), e), {});
                    h(() => a.crewInstructions.set(e));
                }),
            ),
                e.cleanup(
                    s(() => {
                        const e = Ie(t.equipmentInstructions.get(), (e, t) => ((e[t.intCD] = $p(t)), e), {});
                        h(() => a.equipmentInstructions.set(e));
                    }),
                ),
                e.cleanup(
                    s(() => {
                        const e = nt(t.equipmentInstructions.get(), (e) => $p(e));
                        h(() => a.equipmentInstructionsArray.set(e));
                    }),
                ),
                e.cleanup(
                    s(() => {
                        const e = nt(t.crewInstructions.get(), (e) => $p(e));
                        h(() => a.crewInstructionsArray.set(e));
                    }),
                ));
            const r = X.structural(() => {
                    const e = a.dealData.get(),
                        t = [];
                    return (
                        e.totalItemsInStorage > 0 &&
                            t.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                        a.prices.get().forEach((e) => t.push(e)),
                        { ...e, prices: t }
                    );
                }),
                o = X.model(
                    (e) =>
                        Object.values(a.equipmentInstructions.get()).find((t) => t.intCD === e) ??
                        Object.values(a.crewInstructions.get()).find((t) => t.intCD === e),
                ),
                i = X.model((e, t) => {
                    const n = Object.values(a[t].get()).find((t) => t.intCD === e);
                    return (ne(void 0 !== n, `There is no instructionItems with ${e} intCD`), n);
                });
            return { ...a, computes: { instructionById: o, instructionByIntCD: i, dealData: r } };
        },
        ({ model: e, externalModel: t }) => ({
            unmount: t.createCallback(
                (e, t) => ({ intCD: e, currentSlotId: t, actionType: hp, type: Bm }),
                'onSlotAction',
            ),
            confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
            cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
            toggleAutoRenewal: t.createCallback(
                () => ({ value: !e.dealData.get().autoRenewalEnabled }),
                'dealPanel.onAutoRenewalChanged',
            ),
            actionSlot: t.createCallback((e) => ({ ...e, type: Bm }), 'onSlotAction'),
        }),
    ),
    Wp = { notMounted: 'notMounted', mounted: 'mounted', mountedMoreThanOne: 'mountedMoreThanOne' };
function qp(e) {
    return e.isMounted ? (e.isMountedMoreThanOne ? Wp.mountedMoreThanOne : Wp.mounted) : Wp.notMounted;
}
function Zp(e) {
    return { paramName: e.paramName, value: e.value, metricValue: e.metricValue };
}
function Up(e) {
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
        mountedState: qp(e),
        propertiesList: ue(e.propertiesList, Zp),
        itemPrice: Ip(e.itemPrice),
        price: kp(e.price),
        totalPrice: kp(e.totalPrice),
    };
}
const [Gp, Kp] = B('ShellsProvider')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives({
                        ammoMaxSize: 'ammoMaxSize',
                        installedCount: 'installedCount',
                        clip: 'clip',
                        hasChanges: 'modified',
                        autoloadEnabled: 'autoloadEnabled',
                    }),
                    shells: e.transform((e) => ue(e, Up), 'shells'),
                    dealData: e.transform((e) => Sp(e), 'dealPanel'),
                    prices: e.transform((e) => ue(e, Ip), 'dealPanel.price'),
                },
                a = X.structural(() => {
                    const e = t.dealData.get(),
                        a = [];
                    return (
                        e.totalItemsInStorage > 0 &&
                            a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                        t.prices.get().forEach((e) => a.push(e)),
                        { ...e, prices: a }
                    );
                }),
                n = X.model((e) => Fe(t.shells.get(), e)),
                s = X.model((e) => Kt(t.shells.get(), (t) => t.intCD === e)),
                r = X.primitive((e) => void 0 !== Kt(t.shells.get(), (t) => t.intCD === e)),
                o = X.shallow(() => ue(t.shells.get(), (e) => e.intCD));
            return { ...t, computes: { shell: n, shellByIntCD: s, shellExist: r, shellIDs: o, dealData: a } };
        },
        ({ model: e, externalModel: t }) => ({
            swapSlots: t.createCallback((e) => ({ ...e, actionType: vp }), 'onSlotAction'),
            updateShellCount: t.createCallback((e, t) => ({ intCD: e, newCount: t }), 'onShellUpdate'),
            confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
            cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
            toggleAutoRenewal: t.createCallback(
                () => ({ value: !e.dealData.get().autoRenewalEnabled }),
                'dealPanel.onAutoRenewalChanged',
            ),
        }),
    ),
    Jp = a.createContext(null);
const Xp = 'Animated_90a4d541',
    Qp = function ({ children: e, index: t, id: n }) {
        const s = a.useRef(n),
            r = (function () {
                const e = a.useContext(Jp);
                return (ne(null !== e, 'useContext must be used with in SectionContext'), e);
            })(),
            o = a.useRef(r.idToSlot),
            [i, l] = x(() => ({ from: { x: 0 }, config: { tension: 300, friction: 20 } }));
        return (
            a.useLayoutEffect(() => {
                const e = o.current,
                    a = void 0 === e[n];
                if (s.current === n) return;
                const i = e[n];
                if (-1 == n || a) return;
                if ('number' != typeof i) return;
                const c = i < t ? -1 : 1;
                l.start({ from: { x: c * Ae(50) }, to: { x: 0 } });
                const d = Ct(r.onSwiped);
                return () => {
                    (d(), l.stop(), l.start({ x: 0, immediate: !0 }));
                };
            }, [l, n]),
            a.useEffect(() => {
                ((s.current = n), (o.current = r.idToSlot));
            }, [r, n]),
            f.jsx(y.div, { className: Xp, style: i, children: e })
        );
    },
    Yp = 'equipmentTrophy',
    e_ = 'equipmentTrophyBasic',
    t_ = 'equipmentTrophyUpgraded',
    a_ = 'battleBoosterReplace',
    n_ = 'battleBooster',
    s_ = 'equipmentPlus',
    r_ = 'builtInEquipment',
    o_ = 'equipmentModernized';
function i_(e) {
    switch (e) {
        case Xt.extraSmall:
        case Xt.small:
        case Xt.medium:
            return Xt.small;
        case Xt.large:
            return Xt.large;
        default:
            return Xt.extraLarge;
    }
}
const l_ = (e) => {
    switch (e) {
        case Xt.extraSmall:
        case Xt.small:
        case Xt.medium:
            return Yt.s48x48;
        case Xt.large:
            return Yt.s64x64;
        default:
            return Yt.s80x80;
    }
};
function c_(e) {
    switch (e) {
        case n_:
            return Qt.directiveBooster;
        case a_:
            return Qt.directiveSubstitute;
        case r_:
            return Qt.builtInEquipment;
        case s_:
            return Qt.improved;
        case o_:
            return Qt.experimental;
        case Yp:
        case e_:
        case t_:
            return Qt.trophy;
        default:
            return Qt.none;
    }
}
const d_ = 'KEY_NONE',
    u_ = a.createContext(void 0),
    m_ = a.createContext(() => {}),
    p_ = ({ children: e }) => {
        const [t, n] = a.useState(void 0),
            s = a.useCallback((e) => {
                n(e);
            }, []);
        return f.jsx(m_.Provider, { value: s, children: f.jsx(u_.Provider, { value: t, children: e }) });
    },
    __ = () => a.useContext(u_);
function h_(e, t, a, n) {
    const s = e.left + t + a + n / 2,
        r = e.top + e.height / 2;
    let o = document.elementFromPoint(s, r);
    for (; o; ) {
        if (o.hasAttribute('data-drop-item')) return Number(o.getAttribute('data-drop-item'));
        if (o.hasAttribute('data-drop-area')) return null;
        o = o.parentElement;
    }
}
const g_ = C(function ({ children: e, itemPosition: t, itemWidth: n, onDrop: s }) {
        const r = a.useRef(null),
            o = a.useRef(null),
            i = ea(),
            l = i.state,
            c = ta(),
            d = a.useContext(m_);
        function u(e, a) {
            const s = a.getBoundingClientRect(),
                r = s.left,
                o = s.right,
                i = t - r,
                c = o - t,
                d = e - l.startPoint.x;
            return d > c - n ? { left: i, x: c - n } : d < r - t ? { left: i, x: r - t } : { left: i, x: d };
        }
        if (
            (a.useEffect(() => {
                if (i.item)
                    return (
                        window.addEventListener('keydown', e),
                        () => {
                            window.removeEventListener('keydown', e);
                        }
                    );
                function e(e) {
                    e.keyCode === Xe.ESCAPE && i.reset();
                }
            }, [i.item, i.reset]),
            a.useEffect(() => {
                const e = r.current;
                if (!e || null === l.virtualItem || !l.dragArea) return;
                const t = l.dragArea.getBoundingClientRect(),
                    { x: a, left: m } = u(l.currentPosition.x * c + l.startPoint.x, l.dragArea);
                ((e.style.left = `${m}px`), (e.style.transform = `translateX(${Math.trunc(a)}px)`));
                const p = h_(t, m, a, n) ?? null;
                return (
                    o.current != p && null !== p && ((o.current = p), d(p)),
                    new Te()
                        .add(
                            aa.up(([e]) => {
                                (i.emitter.trigger('onDrop', e, l.dragArea, i.item, l), i.reset());
                            }),
                        )
                        .add(
                            aa.move(([e, a]) => {
                                if ('outside' === a) {
                                    const a = r.current;
                                    if (!a || null === l.virtualItem || !l.dragArea) return;
                                    const { x: s, left: i } = u(e.x, l.dragArea),
                                        c = h_(t, i, s, n) ?? null;
                                    (o.current !== c && null !== c && ((o.current = c), d(c)),
                                        (a.style.transform = `translateX(${Math.trunc(s)}px)`));
                                }
                            }),
                        )
                        .add(
                            i.emitter.on('onDrop', (e, a, r) => {
                                if (!l.dragArea) return;
                                d(void 0);
                                const { left: o, x: i } = u(e.x, l.dragArea),
                                    c = h_(t, o, i, n) ?? null,
                                    m = Number(null == r ? void 0 : r.getAttribute('data-drop-item')) ?? null;
                                null !== m && null !== c && m !== Number(c) && (null == s || s(Number(c), m));
                            }),
                        ).dispose
                );
            }, [l.currentPosition.x, l.dragArea, l.virtualItem, i.emitter, t, n, s, u]),
            !e || null === l.virtualItem || !l.dragArea)
        )
            return null;
        const m = Number(l.virtualItem.getAttribute('data-drop-item'));
        return f.jsx('div', {
            ref: r,
            style: { position: 'absolute', top: 0, cursor: 'grabbing', pointerEvents: 'none' },
            children: e(m),
        });
    }),
    v_ = C(function ({ children: e, onDrop: t, renderDraggingItem: n, dataDropArea: s }) {
        const r = ea(),
            o = a.useRef(null),
            [i, l] = a.useState(0),
            [c, d] = a.useState(0);
        return (
            a.useEffect(
                () =>
                    r.emitter.on('onStart', (e, t, a) => {
                        (l(a.getBoundingClientRect().left), d(a.getBoundingClientRect().width));
                    }),
                [r],
            ),
            f.jsxs(f.Fragment, {
                children: [
                    f.jsx(na.DragArea, { ref: o, children: f.jsx(na.DropArea, { 'data-drop-area': s, children: e }) }),
                    f.jsx(na.VirtualItem, {
                        container: o.current ?? void 0,
                        children: f.jsx(g_, { itemPosition: i, itemWidth: c, onDrop: t, children: n }),
                    }),
                ],
            })
        );
    }),
    f_ = function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: n }) {
        return f.jsx(na, { children: f.jsx(v_, { onDrop: t, renderDraggingItem: a, dataDropArea: n, children: e }) });
    },
    b_ = 'DragAndDrop_draggableItem_e7d74af8',
    x_ = 'DragAndDrop_draggableItem__dragging_b849a88',
    y_ = 'DragAndDrop_draggableItem__undraggable_7c876195',
    C_ = 'DragAndDrop_draggableItem__locked_2b4f1390',
    w_ = C(function ({ itemId: e, undraggable: t, className: a, dataDropArea: n, children: s }) {
        var r;
        const o = ea();
        sa(o.reset, [o]);
        const i = null == (r = o.item) ? void 0 : r.getAttribute('data-drop-item'),
            l = void 0 !== i,
            c = oa(i) && '' !== i && Number(i) === e;
        return f.jsx('div', {
            'data-drop-item': e,
            className: b(b_, l && C_, t && y_, c && x_, a),
            'data-drop-area': n,
            onMouseDown: (e) => {
                e.button === ra.left && (o.start(e), e.preventDefault());
            },
            children: s,
        });
    }),
    N_ = 'UnmountButton_442d081e',
    I_ = 'UnmountButton_base__hover_e2b863f3',
    j_ = 'UnmountButton_image_5b9a272b';
function k_({ onClick: e, className: t }) {
    const [n, s] = a.useState(!1),
        r = fe();
    return f.jsx('div', {
        onMouseEnter: function (e) {
            (r.play('mouse-enter', { target: 'loadout-panel:slot:unmount-button', original: e }), s(!0));
        },
        onMouseLeave: () => s(!1),
        onClick: function (t) {
            (e(t), r.play('click', { target: 'loadout-panel:slot:unmount-button', original: t }));
        },
        className: b(N_, n && I_, t),
        children: f.jsx(ke, {
            width: '42rem',
            height: '42rem',
            path: 'loadout.unmount_button_' + (n ? 'hover' : 'default'),
            className: j_,
        }),
    });
}
const S_ = 'Consumable_98851be5',
    P_ = 'Consumable_slot_523f223e',
    E_ = 'Consumable_slot__disabled_10fdd4ec',
    M_ = 'Consumable_slot__grabbing_f0e6559a',
    L_ = 'Consumable_hotKeyLabel_a0918925',
    D_ = 'Consumable_text_fd7e74cf',
    T_ = 'Consumable_unmountButton_43731923',
    A_ = 'Consumable_unmountButton__hidden_250735bc',
    B_ = 'Consumable_selectedOverlay_fd3226e6',
    V_ = ee.resolve('strings'),
    O_ = ee.resolve('aliases'),
    R_ = `${Am}DropArea`,
    z_ = C(function ({ slot: e, disabled: t, selected: n, withKey: s = !1, onClick: r }) {
        const o = fe(),
            { model: i, controls: l } = Tp(),
            c = np().model,
            d = Le(),
            u = __(),
            m = d.location.endsWith(zm) ? i.computes.consumableById(e.intCD) : e,
            [p, _] = a.useState(!1),
            h = Bt({ value: Xt.small }, { large: { value: Xt.large }, extraLarge: { value: Xt.extraLarge } }),
            g = V_.readOrEmpty(`readable_key_names.${e.keyName}`),
            v = s && g && e.keyName != d_,
            x = me({
                resId: O_.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: Am }), [e]),
            }),
            y = a.useMemo(
                () => ({ disabled: t || void 0 === (null == m ? void 0 : m.imageName) }),
                [null == m ? void 0 : m.imageName, t],
            ),
            C = Ke(
                d.location.endsWith(zm) ? 'tankSetupConsumableSlot' : 'tankSetupHangarConsumableSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: Am,
                        fieldType: 1,
                        installedSlotId: e.id,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMounted: e.installed,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(O_.read((e) => e.hangar.shared.Consumables('resId'))).uid,
                    }),
                    [e],
                ),
                y,
            ),
            w = -1 !== e.intCD ? C : {};
        a.useEffect(() => {
            e.installed || o.play('mount', { target: 'loadout-panel:slot:consumable' });
        }, [e.installed, o]);
        const N = ea(),
            I = null !== N.state.virtualItem;
        return (
            a.useEffect(() => {
                var t;
                (null == (t = N.item) ? void 0 : t.getAttribute('data-drop-area')) === R_ && _(u === e.id);
            }, [N.item, u, e.id]),
            f.jsxs('div', {
                ...x,
                ...w,
                className: S_,
                children: [
                    f.jsx(ia, {
                        className: b(P_, t && E_, I && M_),
                        classNames: { selectedOverlay: B_ },
                        size: i_(h.value || Xt.small),
                        hovered: p,
                        selected: n,
                        disabled: t,
                        'data-test-id': `equipmentSlot-${e.id}`,
                        onClick: function (e) {
                            !n && r && (r(), o.play('click', { target: 'loadout-panel:slot', original: e }));
                        },
                        onMouseEnter: function () {
                            (_(!0), I || o.play('mouse-enter', { target: 'loadout-panel:slot:consumable' }));
                        },
                        onMouseLeave: function () {
                            var e;
                            (void 0 !== u &&
                                (null == (e = N.item) ? void 0 : e.getAttribute('data-drop-area')) === R_) ||
                                _(!1);
                        },
                        dataDropItem: e.id,
                        children: f.jsx(Qp, {
                            id: e.intCD,
                            index: e.id,
                            children: (null == m ? void 0 : m.imageName)
                                ? f.jsx(w_, {
                                      undraggable: !c.computes.sectionDraggable(Am),
                                      itemId: e.id,
                                      dataDropArea: R_,
                                      children: f.jsx(la, {
                                          name: m.imageName,
                                          size: l_(h.value || Xt.small),
                                          overlayType: c_(e.overlayType),
                                      }),
                                  })
                                : f.jsx(ia.Empty, {}),
                        }),
                    }),
                    v &&
                        f.jsx('div', {
                            className: L_,
                            children: f.jsx('div', { className: D_, children: f.jsx(lt, { text: g }) }),
                        }),
                    !e.installed && f.jsx(k_, { onClick: () => l.unmount(e.intCD, e.id), className: b(T_, I && A_) }),
                ],
            })
        );
    }),
    $_ = {
        base: 'SpecializationType_9d3d37d7',
        icon: 'SpecializationType_icon_91ea8b3b',
        icon__visible: 'SpecializationType_icon__visible_ca41ac0a',
        icon__active: 'SpecializationType_icon__active_f79ff1ce',
    },
    H_ = 'stealth',
    F_ = 'survivability',
    W_ = 'firepower',
    q_ = 'mobility',
    Z_ = 'On',
    U_ = 'Off',
    G_ = {
        [`${q_}${Z_}`]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    d: 'M26.4457 24.6023C26.4457 23.5263 25.5797 22.6608 24.5058 22.6608C23.4319 22.6608 22.5658 23.5263 22.5658 24.6023C22.5658 25.6784 23.4319 26.5439 24.5058 26.5439C24.7367 26.5439 24.9446 26.4971 25.1409 26.4269C29.5289 30.4152 30.6605 31 30.6605 31C30.6605 31 30.3603 29.4678 26.3533 25.1754C26.4111 24.9883 26.4573 24.8012 26.4573 24.5906L26.4457 24.6023ZM24.5058 25.2105C24.1594 25.2105 23.8822 24.9298 23.8822 24.5906C23.8822 24.2515 24.1594 23.9708 24.5058 23.9708C24.8522 23.9708 25.1293 24.2515 25.1293 24.5906C25.1293 24.9298 24.8522 25.2105 24.5058 25.2105ZM24.5058 17C20.3603 17 17 20.3099 17 24.3801C17 26.6374 18.0277 28.6491 19.6443 29.9942L19.8868 29.655C18.582 28.2865 17.7968 26.4035 17.8776 24.5088C18.0393 20.6725 21.5843 18.3216 25.291 18.9883C30.1986 19.8655 29.6212 24.7778 28.8707 26.7427L30.7067 28.5322C31.5266 27.3509 32 25.924 32 24.3801C32 20.2982 28.6397 17 24.4942 17H24.5058Z',
                    fill: 'url(#paint0_linear_64965_282433)',
                }),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'linearGradient',
                        {
                            id: 'paint0_linear_64965_282433',
                            x1: 24.5,
                            y1: 18.4318,
                            x2: 24.5,
                            y2: 27.1818,
                            gradientUnits: 'userSpaceOnUse',
                        },
                        a.createElement('stop', { stopColor: '#EFE3D4' }),
                        a.createElement('stop', { offset: 1, stopColor: '#DEC8AD' }),
                    ),
                ),
            ),
        [`${q_}${U_}`]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    opacity: 0.7,
                    d: 'M26.4457 24.6023C26.4457 23.5263 25.5797 22.6608 24.5058 22.6608C23.4319 22.6608 22.5658 23.5263 22.5658 24.6023C22.5658 25.6784 23.4319 26.5439 24.5058 26.5439C24.7367 26.5439 24.9446 26.4971 25.1409 26.4269C29.5289 30.4152 30.6605 31 30.6605 31C30.6605 31 30.3603 29.4678 26.3533 25.1754C26.4111 24.9883 26.4573 24.8012 26.4573 24.5906L26.4457 24.6023ZM24.5058 25.2105C24.1594 25.2105 23.8822 24.9298 23.8822 24.5906C23.8822 24.2515 24.1594 23.9708 24.5058 23.9708C24.8522 23.9708 25.1293 24.2515 25.1293 24.5906C25.1293 24.9298 24.8522 25.2105 24.5058 25.2105ZM24.5058 17C20.3603 17 17 20.3099 17 24.3801C17 26.6374 18.0277 28.6491 19.6443 29.9942L19.8868 29.655C18.582 28.2865 17.7968 26.4035 17.8776 24.5088C18.0393 20.6725 21.5843 18.3216 25.291 18.9883C30.1986 19.8655 29.6212 24.7778 28.8707 26.7427L30.7067 28.5322C31.5266 27.3509 32 25.924 32 24.3801C32 20.2982 28.6397 17 24.4942 17H24.5058Z',
                    fill: '#EEEDE9',
                    fillOpacity: 0.9,
                }),
            ),
        [`${W_}${Z_}`]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    d: 'M22.95 21.2233L18.6917 17L17 18.7967L21.235 22.9967L22.9617 21.2233H22.95ZM30.9883 18.7967L29.2967 17L25.0383 21.2233L26.765 22.9967L31 18.7967H30.9883ZM25.0383 26.7767L29.2967 31L30.9883 29.2033L26.7533 25.0033L25.0267 26.7767H25.0383ZM17 29.2033L18.6917 31L22.95 26.7767L21.2233 25.0033L17 29.2033Z',
                    fill: 'url(#paint0_linear_64965_282431)',
                }),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'linearGradient',
                        {
                            id: 'paint0_linear_64965_282431',
                            x1: 23.8939,
                            y1: 18.4583,
                            x2: 23.8939,
                            y2: 30.7083,
                            gradientUnits: 'userSpaceOnUse',
                        },
                        a.createElement('stop', { stopColor: '#FCF6EB' }),
                        a.createElement('stop', { offset: 1, stopColor: '#E1D3C1' }),
                    ),
                ),
            ),
        [`${W_}${U_}`]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { opacity: 0.7 },
                    a.createElement('path', {
                        d: 'M22.95 21.2233L18.6917 17L17 18.7967L21.235 22.9967L22.9617 21.2233H22.95ZM30.9883 18.7967L29.2967 17L25.0383 21.2233L26.765 22.9967L31 18.7967H30.9883ZM25.0383 26.7767L29.2967 31L30.9883 29.2033L26.7533 25.0033L25.0267 26.7767H25.0383ZM17 29.2033L18.6917 31L22.95 26.7767L21.2233 25.0033L17 29.2033Z',
                        fill: '#EEEDE9',
                        fillOpacity: 0.9,
                    }),
                ),
            ),
        [`${H_}${Z_}`]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 50,
                    height: 48,
                    viewBox: '0 0 50 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    d: 'M25 18C20.0337 18 16 23.1051 16 24.006C16 24.7988 20.0337 30 25 30C29.9663 30 34 24.8589 34 23.994C34 23.1291 29.9663 18 25 18ZM25 28.6186C21.382 28.6186 17.7191 24.5826 17.7191 23.994C17.7191 23.3333 21.382 19.3694 25 19.3694C28.618 19.3694 32.2809 23.3574 32.2809 23.994C32.2809 24.6306 28.618 28.6186 25 28.6186ZM24.9888 20.2342C23.0787 20.2342 21.5281 21.9159 21.5281 23.982C21.5281 26.048 23.0787 27.7297 24.9888 27.7297C26.8989 27.7297 28.4607 26.048 28.4607 23.982C28.4607 21.9159 26.9101 20.2342 24.9888 20.2342Z',
                    fill: 'url(#paint0_linear_64965_282436)',
                }),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'linearGradient',
                        {
                            id: 'paint0_linear_64965_282436',
                            x1: 25,
                            y1: 19.2273,
                            x2: 25,
                            y2: 26.7273,
                            gradientUnits: 'userSpaceOnUse',
                        },
                        a.createElement('stop', { stopColor: '#EFE3D4' }),
                        a.createElement('stop', { offset: 1, stopColor: '#DEC8AD' }),
                    ),
                ),
            ),
        [`${H_}${U_}`]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    opacity: 0.7,
                    d: 'M24 18C19.0337 18 15 23.1051 15 24.006C15 24.7988 19.0337 30 24 30C28.9663 30 33 24.8589 33 23.994C33 23.1291 28.9663 18 24 18ZM24 28.6186C20.382 28.6186 16.7191 24.5826 16.7191 23.994C16.7191 23.3333 20.382 19.3694 24 19.3694C27.618 19.3694 31.2809 23.3574 31.2809 23.994C31.2809 24.6306 27.618 28.6186 24 28.6186ZM23.9888 20.2342C22.0787 20.2342 20.5281 21.9159 20.5281 23.982C20.5281 26.048 22.0787 27.7297 23.9888 27.7297C25.8989 27.7297 27.4607 26.048 27.4607 23.982C27.4607 21.9159 25.9101 20.2342 23.9888 20.2342Z',
                    fill: '#EEEDE9',
                    fillOpacity: 0.9,
                }),
            ),
        [`${F_}${Z_}`]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 48,
                    height: 50,
                    viewBox: '0 0 48 50',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    opacity: 0.7,
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M23.7379 24.2125V17.1528H25.2364V24.2125L31.8493 28.0304L31.1001 29.3281L24.4871 25.5101L17.8742 29.3281L17.125 28.0304L23.7379 24.2125Z',
                    fill: '#B3AFAB',
                }),
                a.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M19.2494 20.755L24.4922 17.7302L29.7354 20.7552L24.4925 23.7799L19.2494 20.755ZM18.4995 22.0526V28.1021L23.7427 31.1271V25.0776L18.4995 22.0526ZM25.2423 31.1267L30.4848 28.1021V22.0531L25.2423 25.0776V31.1267ZM24.4922 16L31.9844 20.3224V28.9673L24.4922 33.2897L17 28.9673V20.3224L24.4922 16Z',
                    fill: 'url(#paint0_linear_64965_282432)',
                }),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'linearGradient',
                        {
                            id: 'paint0_linear_64965_282432',
                            x1: 24.3787,
                            y1: 17.801,
                            x2: 24.3787,
                            y2: 32.9295,
                            gradientUnits: 'userSpaceOnUse',
                        },
                        a.createElement('stop', { stopColor: '#FCF6EB' }),
                        a.createElement('stop', { offset: 1, stopColor: '#E1D3C1' }),
                    ),
                ),
            ),
        [`${F_}${U_}`]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 48,
                    height: 48,
                    viewBox: '0 0 48 48',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { opacity: 0.7 },
                    a.createElement('path', {
                        opacity: 0.7,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M23.7379 23.2125V16.1528H25.2364V23.2125L31.8493 27.0304L31.1001 28.3281L24.4871 24.5101L17.8742 28.3281L17.125 27.0304L23.7379 23.2125Z',
                        fill: '#B3AFAB',
                    }),
                    a.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M19.2494 19.755L24.4922 16.7302L29.7354 19.7552L24.4925 22.7799L19.2494 19.755ZM18.4995 21.0526V27.1021L23.7427 30.1271V24.0776L18.4995 21.0526ZM25.2423 30.1267L30.4848 27.1021V21.0531L25.2423 24.0776V30.1267ZM24.4922 15L31.9844 19.3224V27.9673L24.4922 32.2897L17 27.9673V19.3224L24.4922 15Z',
                        fill: '#EEEDE9',
                        fillOpacity: 0.9,
                    }),
                ),
            ),
    };
function K_({ specialization: e, active: t, classNames: a }) {
    const n = G_[`${e}${Z_}`],
        s = G_[`${e}${U_}`];
    if (n && s)
        return f.jsxs('div', {
            className: b($_.base, null == a ? void 0 : a.base),
            children: [
                f.jsx(n, {
                    className: b($_.icon, $_.icon__active, t && $_.icon__visible, null == a ? void 0 : a.activeIcon),
                }),
                f.jsx(s, { className: b($_.icon, !t && $_.icon__visible, null == a ? void 0 : a.inactiveIcon) }),
            ],
        });
    console.error(`Unknown specialization type ${e}`);
}
const J_ = 'Specialization_border_1d1ddf4e',
    X_ = 'Specialization_borderImage_2bbc40a2',
    Q_ = 'Specialization_576f60ad',
    Y_ = 'Specialization_base__button_e1e80f41',
    eh = 'Specialization_border__visible_2df74c11',
    th = 'Specialization_borderImage__visible_258796cf',
    ah = 'Specialization_icon_453cdca5',
    nh = 'Specialization_base__disabled_12d00a3f',
    sh = 'Specialization_base__active_12d00a3f',
    rh = Pe('Specialization'),
    oh = C(function ({ specialization: e, className: t, id: n, disabled: s = !1 }) {
        const r = fe(),
            { controls: o } = np(),
            i = Le().location.includes('/loadout'),
            l = e.dynamic && i,
            c = a.useRef(n);
        a.useEffect(() => {
            if (c.current !== n)
                return (
                    (c.current = n),
                    e.active
                        ? Ct(() => r.play('on', { target: 'loadout-panel:slot:equipment:specialization' }))
                        : void 0
                );
        }, [r, e.active, n]);
        const d = a.useMemo(() => [e.type, e.dynamic, e.clickable], [e]),
            u = He('hangarSlotSpec', d);
        return f.jsxs(rh, {
            className: b(Q_, l && Y_, s && nh, e.active && sh, t),
            onClick: function (e) {
                (u.onClick(),
                    l &&
                        (r.play('click', { target: 'loadout:panel:equipment:specialization', original: e }),
                        o.openSlotSpecDialog()));
            },
            onMouseEnter: function (e) {
                (u.onMouseEnter(e),
                    l && r.play('mouse-enter', { target: 'loadout:panel:equipment:specialization', original: e }));
            },
            onMouseLeave: u.onMouseLeave,
            children: [
                f.jsx('div', { className: b(J_, l && eh) }),
                f.jsx('div', { className: b(X_, l && th) }),
                f.jsx(K_, { specialization: e.type, active: e.active, classNames: { base: ah } }),
            ],
        });
    }),
    ih = 'Equipment_cd6073b3',
    lh = 'Equipment_slot_cd6073b3',
    ch = 'Equipment_slot__disabled_13198c7d',
    dh = 'Equipment_slot__grabbing_49feaf7f',
    uh = 'Equipment_specialization_95709e3f',
    mh = 'Equipment_unmountButton_7376ff29',
    ph = 'Equipment_unmountButton__hidden_f9f46440',
    _h = 'Equipment_selectedOverlay_866b638b',
    hh = ee.resolve('aliases'),
    gh = `${Dm}DropArea`;
function vh(e) {
    switch (e) {
        case Hm.Mobility:
            return 'loadout-panel:slot:equipment:specialization:mobility';
        case Hm.Firepower:
            return 'loadout-panel:slot:equipment:specialization:firepower';
        case Hm.Stealth:
            return 'loadout-panel:slot:equipment:specialization:stealth';
        case Hm.Survivability:
            return 'loadout-panel:slot:equipment:specialization:survivability';
        default:
            return (console.error('Unknown specialization type:', e), '');
    }
}
const fh = C(function ({ slot: e, disabled: t, selected: n, onClick: s }) {
        const { breakpoint: r } = ca(),
            { controls: o } = zp(),
            { model: i } = np(),
            [l, c] = a.useState(!1),
            d = fe(),
            u = Le(),
            m = __(),
            p = Bt({ value: Xt.small }, { large: { value: Xt.large }, extraLarge: { value: Xt.extraLarge } }),
            _ = me({
                resId: hh.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: Dm }), [e]),
            }),
            h = a.useMemo(
                () => ({ disabled: t || -1 === (null == e ? void 0 : e.intCD) }),
                [null == e ? void 0 : e.intCD, t],
            ),
            g = Ke(
                u.location.endsWith(Vm) ? 'tankSetupOptionalDeviceSlotWW' : 'tankSetupHangarOptionalDeviceSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: Dm,
                        installedSlotId: e.id,
                        isMounted: e.installed,
                        fieldType: 1,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(hh.read((e) => e.hangar.shared.Equipments('resId'))).uid,
                    }),
                    [e],
                ),
                h,
            ),
            v = -1 !== e.intCD ? g : {},
            x = ea(),
            y = null !== x.state.virtualItem;
        return (
            a.useEffect(() => {
                e.installed || d.play('mount', { target: 'loadout-panel:slot:equipment' });
            }, [e.installed, d]),
            a.useEffect(() => {
                (y && (null == _ || _.onMouseLeave()), !y && void 0 !== m && l && (null == _ || _.onMouseEnter(null)));
            }, [m, y, l, _]),
            a.useEffect(() => {
                var t;
                (null == (t = x.item) ? void 0 : t.getAttribute('data-drop-area')) === gh && c(m === e.id);
            }, [x.item, m, e.id]),
            f.jsxs('div', {
                className: ih,
                children: [
                    f.jsx('div', {
                        ...v,
                        onMouseEnter: function (e) {
                            (t || c(!0),
                                y ||
                                    (t ||
                                        d.play('mouse-enter', { target: 'loadout-panel:slot:equipment', original: e }),
                                    null == _ || _.onMouseEnter(e)));
                        },
                        onMouseLeave: function () {
                            var e;
                            ((void 0 !== m &&
                                (null == (e = x.item) ? void 0 : e.getAttribute('data-drop-area')) === gh) ||
                                c(!1),
                                null == _ || _.onMouseLeave());
                        },
                        children: f.jsx(ia, {
                            className: b(lh, t && ch, y && dh),
                            classNames: { selectedOverlay: _h },
                            size: i_(p.value || Xt.small),
                            hovered: l,
                            disabled: t,
                            onClick: function (t) {
                                var a;
                                !n &&
                                    s &&
                                    (s(),
                                    d.play('click', { target: 'loadout-panel:slot', original: t }),
                                    (null == (a = e.specialization) ? void 0 : a.type) &&
                                        u.location.includes('/loadout') &&
                                        d.play('click', { target: vh(e.specialization.type), original: t }),
                                    null == _ || _.onClick());
                            },
                            selected: n,
                            'data-test-id': `deviceSlot-${e.id}`,
                            dataDropItem: e.id,
                            children: f.jsx(Qp, {
                                index: e.id,
                                id: e.intCD,
                                children: e.imageName
                                    ? f.jsx(w_, {
                                          undraggable: !i.computes.sectionDraggable(Dm),
                                          itemId: e.id,
                                          dataDropArea: gh,
                                          children: f.jsx(la, {
                                              name: e.imageName,
                                              size: l_(r.name),
                                              level: e.level,
                                              overlayType: c_(e.overlayType),
                                          }),
                                      })
                                    : f.jsx(ia.Empty, {}),
                            }),
                        }),
                    }),
                    e.specialization &&
                        f.jsx(oh, { specialization: e.specialization, className: uh, id: e.intCD, disabled: t }),
                    !e.installed && f.jsx(k_, { onClick: () => o.unmount(e.intCD, e.id), className: b(mh, y && ph) }),
                ],
            })
        );
    }),
    bh = 'Instuction_ab7d27c7',
    xh = 'Instuction_slot_ab7d27c7',
    yh = 'Instuction_slot__disabled_179c0b6b',
    Ch = 'Instuction_warningImage_138cc840',
    wh = 'Instuction_warningImage__disabled_7d252f0',
    Nh = 'Instuction_selectedOverlay_f19fc301',
    Ih = 'Instuction_item_e5ebc3b8',
    jh = 'Instuction_item__withAttention_80199f58',
    kh = ee.resolve('aliases');
function Sh(e) {
    switch (e) {
        case Fm:
            return 'loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction';
        case Wm:
            return 'loadout-panel:slot:instruction:driver_virtuoso-crew_instruction';
        case qm:
            return 'loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction';
        case Zm:
            return 'loadout-panel:slot:instruction:fireFighting-crew_instruction';
        case Um:
            return 'loadout-panel:slot:instruction:naturalCover-crew_instruction';
        case Gm:
            return 'loadout-panel:slot:instruction:gunner_rancorous-crew_instruction';
        case Km:
            return 'loadout-panel:slot:instruction:loader_pedant-crew_instruction';
        case Jm:
            return 'loadout-panel:slot:instruction:commander_practical-crew_instruction';
        case Xm:
            return 'loadout-panel:slot:instruction:commander_enemyShotPredictor-crew_instruction';
        default:
            return (console.error('Unknown crew instruction type:', e), '');
    }
}
const Ph = C(({ slot: e, disabled: t, selected: n, onClick: s }) => {
        const { model: r, controls: o } = Fp(),
            i = n ? r.computes.instructionById(e.intCD) : e,
            [l, c] = a.useState(!1),
            d = fe(),
            u = Le(),
            m = Bt({ value: Xt.small }, { large: { value: Xt.large }, extraLarge: { value: Xt.extraLarge } });
        const p = me({
                resId: kh.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: Bm }), [e]),
            }),
            _ = a.useMemo(
                () => ({ disabled: t || void 0 === (null == i ? void 0 : i.imageName) }),
                [null == i ? void 0 : i.imageName, t],
            ),
            h = Ke(
                u.location.endsWith(Om) ? 'tankSetupBattleBoosterSlot' : 'tankSetupHangarBattleBoosterSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: Bm,
                        fieldType: 1,
                        installedSlotId: e.id,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMounted: e.installed,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(kh.read((e) => e.hangar.shared.Instructions('resId'))).uid,
                    }),
                    [e],
                ),
                _,
            ),
            g = -1 !== e.intCD ? h : {};
        return (
            a.useEffect(() => {
                e.installed ||
                    (d.play('mount', { target: 'loadout-panel:slot:instruction' }),
                    (null == i ? void 0 : i.imageName) &&
                        e.overlayType === a_ &&
                        d.play('on', { target: Sh(i.imageName) }),
                    (null == e ? void 0 : e.withAttention) &&
                        d.play('warn', { target: 'loadout-panel:slot:instruction' }));
            }, [null == i ? void 0 : i.imageName, e.installed, e.overlayType, null == e ? void 0 : e.withAttention, d]),
            f.jsxs('div', {
                ...p,
                ...g,
                className: bh,
                children: [
                    f.jsx(ia, {
                        className: b(xh, t && yh),
                        classNames: { selectedOverlay: Nh },
                        onMouseEnter: function (e) {
                            (c(!0), d.play('mouse-enter', { target: 'loadout-panel:slot:instruction', original: e }));
                        },
                        onMouseLeave: () => c(!1),
                        onClick: function (e) {
                            !n && s && (s(), d.play('click', { target: 'loadout-panel:slot', original: e }));
                        },
                        hovered: l,
                        selected: n,
                        disabled: t,
                        size: i_(m.value || Xt.small),
                        'data-test-id': `instructionSlot-${e.id}`,
                        children:
                            (null == i ? void 0 : i.imageName) &&
                            f.jsx(la, {
                                className: b(Ih, e.withAttention && jh),
                                name: i.imageName,
                                size: l_(m.value || Xt.small),
                                overlayType: c_(null == e ? void 0 : e.overlayType),
                            }),
                    }),
                    (null == i ? void 0 : i.imageName) &&
                        e.withAttention &&
                        f.jsx(ke, {
                            width: '48rem',
                            height: '48rem',
                            path: 'loadout.alert_48',
                            className: b(Ch, t && wh),
                        }),
                    !e.installed && f.jsx(k_, { onClick: () => o.unmount(e.intCD, e.id) }),
                ],
            })
        );
    }),
    Eh = 'Shell_hoverOverlay_714f24ee',
    Mh = 'Shell_4f8ed17c',
    Lh = 'Shell_icon_229c2d6f',
    Dh = 'Shell_base__locked_7aaeeab0',
    Th = 'Shell_base__selected_7aaeeab0',
    Ah = 'Shell_icon__dragging_7aaeeab0',
    Bh = 'Shell_container_cd11209e',
    Vh = 'Shell_container__key_d0643ec3',
    Oh = 'Shell_container__count_25e66fc6',
    Rh = 'Shell_container__disabled_d9eea9c4',
    zh = 'Shell_text_d3fedf21',
    $h = 'Shell_text__empty_7aaeeab0',
    Hh = 'Shell_text__disabled_7aaeeab0',
    Fh = ee.resolve('aliases'),
    Wh = 'small',
    qh = 'x64x64',
    Zh = 'medium',
    Uh = C(function ({ disabled: e = !1, selected: t = !1, withKey: n = !1, empty: s = !0, className: r, slot: o }) {
        var i;
        const { model: l } = Kp(),
            c = Le(),
            d = void 0 !== (null == (i = ea().item) ? void 0 : i.getAttribute('data-drop-item')),
            u = me({
                resId: Fh.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: o.id, slotType: Tm }), [o.id]),
            }),
            m = Bt({ value: Wh }, { large: { value: qh }, extraLarge: { value: Zh } }).value,
            p = a.useMemo(() => ({ disabled: e }), [e]),
            _ = Ke(
                c.location.endsWith(Rm) ? 'tankSetupShellItem' : 'tankSetupHangarShellSlot',
                a.useMemo(
                    () => ({
                        intCD: o.intCD,
                        slotType: Tm,
                        fieldType: 1,
                        installedSlotId: o.id,
                        itemInstalledSetupIdx: o.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: o.id,
                        isMounted: o.installed,
                        isMountedMoreThanOne: o.mountedMoreThanOne,
                        emitterUID: da(Fh.read((e) => e.hangar.shared.Shells('resId'))).uid,
                    }),
                    [o],
                ),
                p,
            ),
            h = t ? l.computes.shell(o.id) : o;
        if (!h) return;
        const g = ee.resolve('strings').readOrEmpty(`readable_key_names.${o.keyName}`),
            v = n && g && o.keyName !== d_;
        return f.jsxs('div', {
            ...u,
            ..._,
            className: b(Mh, d && Dh, t && Th, r),
            'data-test-id': `shellSlot-${o.id}`,
            children: [
                v &&
                    f.jsx('div', {
                        className: b(Bh, Vh),
                        children: f.jsx('div', { className: zh, children: f.jsx(lt, { text: g }) }),
                    }),
                f.jsxs(Qp, {
                    id: o.intCD,
                    index: o.id,
                    children: [
                        f.jsx(w_, {
                            undraggable: !t,
                            itemId: o.id,
                            dataDropArea: 'shellsDropArea',
                            children: f.jsx(ke, {
                                path: `shell.${m}.${o.imageName}`,
                                className: Lh,
                                children: f.jsx('div', { className: Eh }),
                            }),
                        }),
                        void 0 !== h.count && f.jsx(Gh, { count: h.count, empty: s, disabled: e }),
                    ],
                }),
            ],
        });
    }),
    Gh = function ({ count: e, empty: t, disabled: a }) {
        return f.jsx('div', {
            className: b(Bh, Oh, a && Rh),
            children: f.jsx('div', { className: b(zh, a && Hh, t && $h), children: e }),
        });
    },
    Kh = {
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
function Jh({ hovered: e, selected: t }) {
    return f.jsxs(f.Fragment, {
        children: [
            t && f.jsx('div', { className: Kh.selectedOverlay }),
            f.jsx(ke, { fit: 'cover', path: 'loadout.shells_warning_glow', className: Kh.warningGlow }),
            f.jsx('div', { className: b(Kh.warningOverlay, e && !t && Kh.warningOverlay__hover) }),
        ],
    });
}
function Xh({
    shells: e,
    section: t,
    groupIndex: n,
    sectionIndex: s,
    withKey: r = !1,
    disabled: o = !1,
    selected: i = !1,
    onClick: l,
}) {
    const [c, d] = a.useState(!1),
        u = fe(),
        m = Bt({ value: Xt.small }, { large: { value: Xt.large }, extraLarge: { value: Xt.extraLarge } }),
        p = !e.some((e) => e.count && e.count > 0);
    return f.jsxs(ia, {
        classNames: {
            slot: b(Kh.slot, t.warning && !o && Kh.slot__customBackground),
            content: Kh.content,
            selectedOverlay: Kh.selectedSlotOverlay,
        },
        size: i_(m.value || Xt.small),
        hovered: c && !o && !t.warning,
        selected: i && !t.warning,
        disabled: o,
        onClick: function (e) {
            i ||
                o ||
                !l ||
                (l(t.type, { slotIndex: 0, groupIndex: n, sectionIndex: s }),
                u.play('click', { target: 'loadout-panel:slot', original: e }));
        },
        onMouseEnter: function () {
            (d(!0), o || i || u.play('mouse-enter', { target: 'loadout-panel:slot:shells' }));
        },
        onMouseLeave: () => d(!1),
        children: [
            t.warning && f.jsx(Jh, { hovered: c && !o, selected: i }),
            e.map((e) =>
                f.jsx(Uh, { className: Kh.shell, selected: i, disabled: o, withKey: r, slot: e, empty: p }, e.id),
            ),
            t.warning && f.jsx('div', { className: Kh.warningOverlay }),
        ],
    });
}
const Qh = C(function ({ groupIndex: e, sectionIndex: t, withKey: a, disabled: n, selected: s, onClick: r }) {
        const { model: o } = np(),
            { controls: i } = Kp(),
            l = o.computes.sectionByIndex(e, t),
            c = Bt({ value: Wh }, { large: { value: qh }, extraLarge: { value: Zh } }).value;
        if (!l) return null;
        const d = Jt(l.slots ?? [], (e) => e.intCD > 0);
        return f.jsx('div', {
            className: Kh.base,
            children: f.jsx(f_, {
                dataDropArea: `${Tm}DropArea`,
                onDrop: (e, t) => i.swapSlots({ leftID: e, rightID: t }),
                renderDraggingItem: (e) =>
                    f.jsx(ke, {
                        path: `shell.${c}.${d[e].imageName}`,
                        className: b(Lh, Ah),
                        children: f.jsx('div', { className: Eh }),
                    }),
                children: f.jsx(Xh, {
                    shells: d,
                    section: l,
                    groupIndex: e,
                    sectionIndex: t,
                    withKey: a,
                    disabled: n,
                    selected: s,
                    onClick: r,
                }),
            }),
        });
    }),
    Yh = 'Divider_44f20b3a',
    eg = 'Divider_dividerImage_9dcc5cfc';
function tg({ className: e }) {
    return f.jsx('div', {
        className: b(Yh, e),
        children: f.jsx(ke, {
            path: 'loadout.panel_border',
            repeat: 'repeat',
            fit: 'auto',
            width: '100%',
            height: '100%',
            className: eg,
        }),
    });
}
const ag = C(function ({ index: e, sectionType: t, groupIndex: a, sectionIndex: n, slotToComponent: s, onClick: r }) {
        const { model: o } = np(),
            i = o.disabled.get(),
            l = o.computes.isSlotSelected(e, t),
            c = o.computes.slotByIndex(a, n, e);
        if (void 0 === c) return null;
        const d = (function ({ slotToComponent: e = _g, sectionType: t = 'default' }) {
            return e[t] ?? e.default;
        })({ slotToComponent: s, sectionType: t });
        return d
            ? f.jsx(d, {
                  slot: c,
                  disabled: i,
                  selected: l,
                  withKey: t === Am && o.computes.isSectionSelected(t),
                  onClick: r,
              })
            : null;
    }),
    ng = 'AmmunitionPanel_border_5210db3e',
    sg = 'AmmunitionPanel_borderImage_a7e374e',
    rg = 'AmmunitionPanel_ammunitionPanel_1e2712ac',
    og = 'AmmunitionPanel_group_a19909f2',
    ig = 'AmmunitionPanel_section_60fd0117',
    lg = 'AmmunitionPanel_section__battleBoosters_7bbb51d8',
    cg = 'AmmunitionPanel_presetWrapper_8dedcfb5',
    dg = 'AmmunitionPanel_slots_d69454c1',
    ug = C(function ({ groupIndex: e, sectionIndex: t, slotToComponent: n, onClick: s }) {
        const { controls: r } = Tp(),
            { controls: o } = zp(),
            { breakpoint: i } = ca(),
            l = Bt({ value: Xt.small }, { large: { value: Xt.large }, extraLarge: { value: Xt.extraLarge } }),
            { model: c } = np(),
            d = c.computes.sectionByIndex(e, t);
        return d
            ? f.jsx('div', {
                  className: dg,
                  children: f.jsx(f_, {
                      dataDropArea: `${d.type}DropArea`,
                      onDrop: (e, t) => {
                          d.type === Am
                              ? r.swapSlots({ leftID: t, rightID: e })
                              : d.type === Dm && o.swapSlots({ leftID: t, rightID: e });
                      },
                      renderDraggingItem: (e) => {
                          const t = d.slots[e];
                          if (t)
                              return d.type === Am
                                  ? f.jsx(la, {
                                        name: t.imageName,
                                        size: l_(l.value || Xt.small),
                                        overlayType: c_(t.overlayType),
                                    })
                                  : d.type === Dm
                                    ? f.jsx(la, {
                                          name: t.imageName,
                                          size: l_(i.name),
                                          level: t.level,
                                          overlayType: c_(t.overlayType),
                                      })
                                    : void 0;
                      },
                      children: f.jsx('div', {
                          style: { display: 'flex' },
                          children: d.slots.map((r, o) =>
                              f.jsxs(
                                  a.Fragment,
                                  {
                                      children: [
                                          o > 0 && f.jsx(tg, {}),
                                          f.jsx(ag, {
                                              index: o,
                                              sectionType: d.type,
                                              groupIndex: e,
                                              sectionIndex: t,
                                              slotToComponent: n,
                                              onClick: () =>
                                                  null == s
                                                      ? void 0
                                                      : s(d.type, { slotIndex: r.id, groupIndex: e, sectionIndex: t }),
                                          }),
                                      ],
                                  },
                                  r.id,
                              ),
                          ),
                      }),
                  }),
              })
            : null;
    }),
    mg = ee.resolve('aliases'),
    pg = { [Tm]: Qh, default: ug },
    _g = { [Am]: z_, [Bm]: Ph, [Dm]: fh },
    hg = (e) => ({ options: { rootId: e } }),
    gg = {
        providersData: [
            { provider: Dp, props: hg(mg.read((e) => e.hangar.shared.Consumables('resId'))) },
            { provider: Hp, props: hg(mg.read((e) => e.hangar.shared.Instructions('resId'))) },
            { provider: Rp, props: hg(mg.read((e) => e.hangar.shared.Equipments('resId'))) },
            { provider: ap, props: hg(mg.read((e) => e.hangar.shared.Loadout('resId'))) },
            { provider: Gp, props: hg(mg.read((e) => e.hangar.shared.Shells('resId'))) },
        ],
        sectionToComponent: pg,
        slotToComponent: _g,
    },
    vg = a.createContext(gg);
function fg({
    sectionToComponent: e = gg.sectionToComponent,
    slotToComponent: t = gg.slotToComponent,
    providersData: n = gg.providersData,
    children: s,
}) {
    const r = a.useMemo(() => ({ sectionToComponent: e, slotToComponent: t }), [e, t]),
        o = new ua().add(p_).addWithProps(vg.Provider, { value: r });
    return (
        n.forEach((e) => {
            void 0 === e.props ? o.add(e.provider) : o.addWithProps(e.provider, e.props);
        }),
        o.render(s)
    );
}
const bg = C(function ({ index: e, vehicleId: t, groupIndex: n, onSectionClick: s }) {
        const r = a.useContext(vg),
            { model: o } = np(),
            i = o.disabled.get(),
            l = o.computes.sectionByIndex(n, e),
            c = ma((e, t) => {
                const a = o.computes.isSectionSelected(e);
                (!s && a) || null == s || s(e, t);
            }),
            d = fe(),
            u = a.useMemo(() => {
                function e() {
                    d.play('swipe', { target: 'loadout-panel:ammunition_panel:section' });
                }
                return l
                    ? {
                          idToSlot: l.slots.reduce((e, t) => (t.intCD < 0 || (e[t.intCD] = t.id), e), {}),
                          type: l.type,
                          vehicleId: t,
                          onSwiped: pa(30, e),
                      }
                    : { idToSlot: {}, onSwiped: e };
            }, [l, d, t]);
        if (void 0 === l) return null;
        const m = (function ({ sectionToComponent: e = pg, sectionType: t = 'default' }) {
            return e[t] ?? e.default;
        })({ sectionToComponent: r.sectionToComponent, sectionType: l.type });
        return f.jsxs('div', {
            className: b(ig, l.type === Bm && lg),
            children: [
                f.jsx('div', { className: ng }),
                f.jsx('div', { className: sg }),
                m &&
                    f.jsx(Jp.Provider, {
                        value: u,
                        children: f.jsx(m, {
                            groupIndex: n,
                            sectionIndex: e,
                            withKey: o.computes.isSectionSelected(l.type),
                            disabled: i,
                            selected: o.computes.isSectionSelected(l.type),
                            onClick: c,
                            slotToComponent: r.slotToComponent,
                        }),
                    }),
            ],
        });
    }),
    xg = 'field',
    yg = 'progression',
    Cg = C(function ({ className: e, onSectionClick: t, vehicleId: a }) {
        const { model: n, controls: s } = np(),
            r = n.computes.groups(),
            o = n.hasVehSkillTree.get() ? yg : xg;
        return f.jsx('div', {
            className: b(rg, e),
            children: r.map(
                (
                    {
                        id: e,
                        sections: r,
                        currentIndex: i,
                        totalCount: l,
                        states: c,
                        switchEnabled: d,
                        prebattleSwitchDisabled: u,
                    },
                    m,
                ) =>
                    f.jsxs(
                        'div',
                        {
                            className: og,
                            children: [
                                _a(
                                    r,
                                    (e) => e.slots.length > 0,
                                    (e, n) =>
                                        f.jsx(
                                            bg,
                                            { index: n, groupIndex: m, vehicleId: a, onSectionClick: t },
                                            `${n}-${i}`,
                                        ),
                                ),
                                d &&
                                    l > 1 &&
                                    f.jsx(pp, {
                                        groupId: e,
                                        modifier: o,
                                        currentIndex: i,
                                        onSwitch: s.changePreset,
                                        itemStates: c,
                                        disabled: n.disabled.get(),
                                        prebattleSwitchDisabled: u,
                                        className: cg,
                                    }),
                            ],
                        },
                        e,
                    ),
            ),
        });
    }),
    wg = {
        loadoutPanel: 'LoadoutPanel_loadoutPanel_4c5b5911',
        loadoutPanel__screenMode: 'LoadoutPanel_loadoutPanel__screenMode_2cf03a87',
        panel: 'LoadoutPanel_panel_ec4752fe',
        crewPanel: 'LoadoutPanel_crewPanel_b90a22ab',
        ammunitionPanel: 'LoadoutPanel_ammunitionPanel_baf41791',
    },
    Ng = {
        [Bm]: 'loadout/instructions',
        [Am]: 'loadout/consumables',
        [Dm]: 'loadout/equipment',
        [Tm]: 'loadout/shells',
    };
function Ig(e) {
    const t = Ng[e];
    if (t) return `/hangar/${t}`;
}
const jg = C(function ({ onRoute: e, onResolveRoute: t = Ig }) {
        const a = np().model.vehicleId(),
            n = As().model.selectedVehicle(),
            s = Le(),
            r = ma((a, n) => {
                if (e) {
                    const s = t(a);
                    if (void 0 === s) return;
                    e(s, n);
                }
                const r = t(a);
                r && s.push(r, n);
            });
        return n && n.id === a
            ? f.jsx(Cg, { vehicleId: a, className: wg.ammunitionPanel, onSectionClick: r }, a)
            : null;
    }),
    kg = function (e) {
        return f.jsx(fg, { children: f.jsx(jg, { ...e }) });
    },
    Sg = (e) =>
        a.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', {
                d: 'M20 19H21V20H3V19H4V18H20V19ZM7 16H5V11H7V16ZM11 16H9V11H11V16ZM15 16H13V11H15V16ZM19 16H17V11H19V16ZM21 8V9H3V8L12 3L21 8Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
                shapeRendering: 'crispEdges',
            }),
        ),
    Pg = ee.resolve('strings'),
    Eg = ee.resolve('views'),
    Mg = ee.resolve('aliases');
function Lg(e) {
    const t = ((e) =>
        e === Ml ? 'acceleratedTraining_disabled' : e === El ? 'acceleratedTraining_on' : 'acceleratedTraining_off')(e);
    return $e({
        header: Pg.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.header`),
        body: Pg.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.body`),
    });
}
const Dg = (e) =>
        a.createElement(
            'svg',
            { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', {
                d: 'M4.0965 5.7193C8.197 1.61879 14.822 1.59521 18.8934 5.66657C21.5623 8.33559 22.4702 12.1016 21.6258 15.5328L23.9998 16.9283L18.452 20.0748L18.535 13.7164L20.6317 14.9488C21.2536 11.9664 20.4136 8.75031 18.1111 6.44782C14.4683 2.80537 8.54162 2.82691 4.87286 6.49567C1.20411 10.1644 1.18257 16.0911 4.82501 19.7339L4.04376 20.5162C-0.0275931 16.4448 -0.00400785 9.8198 4.0965 5.7193ZM13.2713 10.2496H18.5213L14.1463 13.7496L16.3338 18.9996L11.5213 15.9371L6.7088 18.9996L8.8963 13.7496L4.5213 10.2496H9.7713L11.5213 4.99957L13.2713 10.2496Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
                shapeRendering: 'crispEdges',
            }),
        ),
    Tg = 'Trainings_button_bf9590ac',
    Ag = 'Trainings_toggleContent_8fe22dba',
    Bg = 'Trainings_image_cc494d75',
    Vg = 'Trainings_image__on_3cef43a',
    Og = Pe('Trainings', 'Trainings_f0a414b9'),
    Rg = C(function (e) {
        const { model: t, controls: a } = Al(),
            n = t.state.get(),
            s = t.acceleratedTraining.get(),
            r = t.intensiveTraining.get(),
            o = n === Dl,
            i = o || s === Ml,
            l = o || r === Ml,
            c = Lg(s),
            d = Se({
                resId: Mg.read((e) => e.hangar.shared.Crew('resId')),
                contentId: Eg.read((e) => e.lobby.crew.CrewHeaderTooltipView('resId')),
            }),
            u = ha(
                () => {
                    l || a.toggleIntensiveTraining();
                },
                [a, l],
                300,
            );
        return f.jsxs(Og, {
            ...e,
            children: [
                f.jsx('div', {
                    ...c,
                    className: Tg,
                    children: f.jsx(jt, {
                        theme: St.primary,
                        activated: s === El,
                        disabled: i,
                        onClick: () => {
                            i || a.toggleAcceleratedTraining();
                        },
                        classNames: { content: Ag },
                        children: f.jsx(Sg, { className: b(Bg, !o && s === El && Vg) }),
                    }),
                }),
                f.jsx('div', {
                    ...d,
                    className: Tg,
                    children: f.jsx(jt, {
                        theme: St.primary,
                        activated: r === El,
                        disabled: l,
                        onClick: u,
                        classNames: { content: Ag },
                        children: f.jsx(Dg, { className: b(Bg, !o && r === El && Vg) }),
                    }),
                }),
            ],
        });
    }),
    zg = (e) =>
        a.createElement(
            'svg',
            { width: 14, height: 14, viewBox: '0 0 14 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', {
                d: 'M10.3616 4.55671L8.60388 1.26575L8.88511 0.928219L8.32265 0L7.8305 0.506301V1.26575L7.19773 1.85644V4.72548L8.32265 6.16L10.3616 4.55671Z',
                fill: '#B3AFAB',
            }),
            a.createElement('path', {
                d: 'M12.0226 5.6L14 9.24L11.7062 11.0133L10.4407 9.42666V6.25333L11.1525 5.6V4.75999L11.7062 4.2L12.339 5.22666L12.0226 5.6Z',
                fill: '#B3AFAB',
            }),
            a.createElement('path', {
                d: 'M1.9774 5.6L0 9.24L2.29379 11.0133L3.55932 9.42666V6.25333L2.84746 5.6V4.76L2.29379 4.2L1.66102 5.22666L1.9774 5.6Z',
                fill: '#B3AFAB',
            }),
            a.createElement('path', {
                d: 'M5.159 1.26575L3.40131 4.55671L5.44023 6.16L6.56515 4.72548V1.85644L5.93238 1.26575V0.506301L5.44023 0L4.87777 0.928219L5.159 1.26575Z',
                fill: '#B3AFAB',
            }),
            a.createElement('path', {
                d: 'M4.61172 9.62923L2.95227 12.2331L4.90032 14L6.05472 13.2899H8.03062L9.18872 14L11.143 12.2331L9.47824 9.62923L8.53729 7.58333H5.54967L4.61172 9.62923Z',
                fill: '#B3AFAB',
            }),
        ),
    $g = 'DogPaw_84e7ee48',
    Hg = 'DogPaw_icon_5261d625',
    Fg = ee.resolve('strings');
function Wg({ onClick: e }) {
    const t = $e({ body: Fg.readOrEmpty('crew.dogPawTooltip.details.body') });
    return f.jsx(ut, {
        ...t,
        theme: ut.themes.secondary,
        size: ut.sizes.small,
        className: $g,
        onClick: function () {
            (null == t || t.onClick(), e());
        },
        children: f.jsx(zg, { className: Hg }),
    });
}
const qg = 'NoTankmanBackground_e7a5353b',
    Zg = 'NoTankmanBackground_base__hover_be4aa02',
    Ug = 'NoTankmanBackground_selectedOverlay_6eff1022',
    Gg = 'NoTankmanBackground_selectedOverlayPattern_313f5cd4',
    Kg = 'NoTankmanBackground_pattern_f007ac5a';
function Jg({ hover: e, selected: t }) {
    return f.jsxs('div', {
        className: b(qg, e && Zg),
        children: [
            t && f.jsxs(f.Fragment, { children: [f.jsx('div', { className: Ug }), f.jsx('div', { className: Gg })] }),
            f.jsx(ke, { path: 'loadout.crew.no_tankman_pattern', className: Kg }),
        ],
    });
}
const Xg = {
        root: 'Tankman_root_ca952550',
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
    Qg = 'disabled',
    Yg = 'warning',
    ev = 'noTankman',
    tv = 'selected',
    av = 'default';
function nv({ skinId: e, customizedSkin: t }) {
    return e
        ? t
            ? `tankmen.icons.big.crewSkins.${ct(e)}`
            : `tankmen.icons.big.${ct(e)}`
        : 'loadout.crew.no_tankman_red';
}
const sv = Pe('Tankman', Xg.base),
    rv = a.memo(function ({
        skinId: e,
        customizedSkin: t,
        disabled: a,
        selected: n,
        warning: s,
        noTankman: r,
        hovered: o,
        className: i,
        ...l
    }) {
        const c = a ? Qg : r ? ev : s ? Yg : n ? tv : av,
            d = !e;
        return f.jsxs(sv, {
            ...l,
            className: b(i, Xg[`base__${c}`], o && !a && e && Xg.base__hover),
            children: [
                a && f.jsx('div', { className: Xg.disabledOverlay }),
                n &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx('div', { className: Xg.selectedOverlay }),
                            f.jsx('div', { className: Xg.selectedOverlayPattern }),
                        ],
                    }),
                s && f.jsx('div', { className: Xg.warningOverlay }),
                d && !a && f.jsx(Jg, { hover: o, selected: n }),
                f.jsx(ke, {
                    fit: 'cover',
                    className: b(Xg.content, a && (s || !e ? Xg.content__disabledWarning : Xg.content__disabled)),
                    path: nv({ skinId: e, customizedSkin: t }),
                }),
                d && !a && f.jsx('div', { className: Xg.noTankmanOverlay }),
                s && f.jsx(ke, { className: Xg.warningGlow, fit: 'cover', path: 'loadout.crew.alert_glow' }),
            ],
        });
    }),
    ov = 'Slot_154c229b',
    iv = 'Slot_base__noState_71f19f5c',
    lv = 'Slot_base__disabled_d386066c',
    cv = 'Slot_base__dog_d386066c',
    dv = 'Slot_statusBlock_ccea62a7',
    uv = 'Slot_statusBlock__dogPaw_1bc38cf2',
    mv = 'Slot_statusBlock__disabled_1d609e12',
    pv = 'Slot_statusOverlay_e74c1f89',
    _v = 'Slot_statusIcon_fe4620f1',
    hv = 'Slot_statusIcon__role_3c0a5c22',
    gv = 'Slot_statusIcon__untrainedPenalty_2d3a3a74',
    vv = 'Slot_retrainingProgress_10d488a1',
    fv = 'Slot_newPerk_88d9a967',
    bv = 'Slot_newPerk__disabled_1d609e12',
    xv = 'Slot_glowBg_e3e687b5',
    yv = ee.resolve('strings'),
    Cv = 'DogSlot',
    wv = Pe('DogSlot', b(ov, cv), { variants: { state: { true: lv } } }),
    Nv = C(function () {
        const [e, t] = a.useState(!1),
            n = fe(),
            { model: s, controls: r } = Al(),
            o = s.computes.disabled(),
            i = s.vehicleNation.get(),
            l = $e({
                header: yv.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${i}.header`),
                body: yv.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${i}.body`),
            });
        const c = ga(() => r.showDogInfo(), [r], 400);
        return f.jsxs(wv, {
            state: o,
            children: [
                f.jsx(rv, {
                    disabled: o,
                    warning: !1,
                    noTankman: !1,
                    hovered: e,
                    customizedSkin: !1,
                    skinId: 'ussr_dog_1',
                    onClick: function () {
                        (o || n.play('dog-slot-click', { target: Cv }), null == l || l.onClick());
                    },
                    onMouseEnter: function (e) {
                        (o || (t(!0), n.play('mouse-enter', { target: Cv })), null == l || l.onMouseEnter(e));
                    },
                    onMouseLeave: function () {
                        (t(!1), null == l || l.onMouseLeave());
                    },
                }),
                f.jsx('div', { className: b(dv, uv, o && mv), children: f.jsx(Wg, { onClick: c }) }),
            ],
        });
    }),
    Iv = 'TankmanRole_3bb08c81',
    jv = {
        [ot.commander]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M15.8941 4.6285C15.8456 4.45146 15.7404 4.29519 15.5947 4.18358C15.449 4.07198 15.2707 4.01118 15.0871 4.0105H11.5201V4.8631H9.84012V4.0105H8.16012V4.8631H6.48012V4.0105H2.91372C2.72995 4.01092 2.55139 4.07159 2.40541 4.18322C2.25943 4.29485 2.15409 4.45126 2.10552 4.6285L0.72852 9.5191C0.642995 9.82414 0.599791 10.1395 0.600119 10.4563V15.9475C0.598522 16.1719 0.686107 16.3878 0.843622 16.5477C1.00114 16.7076 1.21569 16.7984 1.44012 16.8001H4.80012C5.02455 16.7984 5.2391 16.7076 5.39662 16.5477C5.55413 16.3878 5.64172 16.1719 5.64012 15.9475V11.6845C5.63852 11.4601 5.72611 11.2442 5.88362 11.0843C6.04114 10.9244 6.25569 10.8336 6.48012 10.8319H8.16012V11.6845H9.84012V10.8319H11.5201C11.7445 10.8336 11.9591 10.9244 12.1166 11.0843C12.2741 11.2442 12.3617 11.4601 12.3601 11.6845V15.9475C12.3585 16.1719 12.4461 16.3878 12.6036 16.5477C12.7611 16.7076 12.9757 16.7984 13.2001 16.8001H16.5601C16.7845 16.7984 16.9991 16.7076 17.1566 16.5477C17.3141 16.3878 17.4017 16.1719 17.4001 15.9475V10.4563C17.4002 10.139 17.3565 9.82327 17.2705 9.5179L15.8941 4.6285ZM8.16012 9.1285H6.48012V6.5683H8.16012V9.1285ZM11.5201 9.1285H9.84012V6.5683H11.5201V9.1285ZM13.2001 0.600098H12.3601C12.1357 0.601842 11.9211 0.692631 11.7636 0.852509C11.6061 1.01239 11.5185 1.22827 11.5201 1.4527V2.3053C11.5185 2.52973 11.6061 2.74561 11.7636 2.90549C11.9211 3.06536 12.1357 3.15615 12.3601 3.1579H13.2001C13.4245 3.15615 13.6391 3.06536 13.7966 2.90549C13.9541 2.74561 14.0417 2.52973 14.0401 2.3053V1.4527C14.0417 1.22827 13.9541 1.01239 13.7966 0.852509C13.6391 0.692631 13.4245 0.601842 13.2001 0.600098ZM5.64012 0.600098H4.80012C4.57569 0.601842 4.36114 0.692631 4.20362 0.852509C4.04611 1.01239 3.95852 1.22827 3.96012 1.4527V2.3053C3.95852 2.52973 4.04611 2.74561 4.20362 2.90549C4.36114 3.06536 4.57569 3.15615 4.80012 3.1579H5.64012C5.86455 3.15615 6.0791 3.06536 6.23662 2.90549C6.39413 2.74561 6.48172 2.52973 6.48012 2.3053V1.4527C6.48172 1.22827 6.39413 1.01239 6.23662 0.852509C6.0791 0.692631 5.86455 0.601842 5.64012 0.600098Z',
                }),
            ),
        [ot.driver]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { clipPath: 'url(#clip0_11629_273215)' },
                    a.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M9.0001 17.4001C7.33874 17.4001 5.71468 16.9074 4.33331 15.9844C2.95194 15.0614 1.87529 13.7495 1.23952 12.2146C0.603739 10.6797 0.437389 8.99078 0.761504 7.36134C1.08562 5.7319 1.88564 4.23516 3.0604 3.0604C4.23516 1.88564 5.7319 1.08562 7.36134 0.761504C8.99078 0.437389 10.6797 0.603739 12.2146 1.23952C13.7495 1.87529 15.0614 2.95194 15.9844 4.33331C16.9074 5.71468 17.4001 7.33874 17.4001 9.0001C17.4001 11.2279 16.5151 13.3645 14.9398 14.9398C13.3645 16.5151 11.2279 17.4001 9.0001 17.4001ZM15.6931 9.5251H10.5877C10.5041 9.77766 10.3614 10.0066 10.1714 10.1929C9.9815 10.3792 9.74983 10.5174 9.4957 10.5961V15.6721C11.093 15.5577 12.5964 14.8747 13.7334 13.7469C14.8704 12.6192 15.5656 11.1214 15.6931 9.5251ZM8.4487 15.6673V10.5805C8.20655 10.496 7.98708 10.3569 7.80729 10.174C7.62751 9.9911 7.49222 9.76927 7.4119 9.5257H2.3071C2.43395 11.1124 3.12181 12.6021 4.24737 13.7276C5.37292 14.8532 6.86258 15.5411 8.4493 15.6679L8.4487 15.6673ZM9.0001 2.2801C7.30964 2.28143 5.68177 2.91982 4.44106 4.068C3.20036 5.21619 2.43797 6.7898 2.3059 8.4751H7.4125C7.52075 8.13918 7.73277 7.84625 8.01805 7.63846C8.30333 7.43067 8.64717 7.31872 9.0001 7.31872C9.35303 7.31872 9.69687 7.43067 9.98215 7.63846C10.2674 7.84625 10.4794 8.13918 10.5877 8.4751H15.6931C15.561 6.79001 14.7988 5.21657 13.5584 4.06841C12.3179 2.92026 10.6904 2.28173 9.0001 2.2801Z',
                    }),
                ),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'clipPath',
                        { id: 'clip0_11629_273215' },
                        a.createElement('rect', { width: 18, height: 18, fill: 'white' }),
                    ),
                ),
            ),
        [ot.gunner]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { clipPath: 'url(#clip0_11629_273826)' },
                    a.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M17.1814 9.8184H16.315C16.1286 11.4773 15.3841 13.0235 14.2035 14.2038C13.023 15.384 11.4765 16.128 9.81761 16.314V17.1822C9.81745 17.399 9.73124 17.607 9.57791 17.7603C9.42457 17.9136 9.21665 17.9998 8.99981 18C8.78275 18 8.57459 17.9138 8.42111 17.7603C8.26763 17.6068 8.18141 17.3987 8.18141 17.1816V16.314C6.5225 16.128 4.97601 15.384 3.79547 14.2038C2.61494 13.0235 1.87043 11.4773 1.68401 9.8184H0.81761C0.708311 9.82136 0.599524 9.80239 0.497679 9.76261C0.395834 9.72283 0.302995 9.66304 0.224641 9.58678C0.146288 9.51052 0.084006 9.41933 0.041481 9.3186C-0.00104395 9.21787 -0.0229492 9.10964 -0.0229492 9.0003C-0.0229492 8.89096 -0.00104395 8.78273 0.041481 8.682C0.084006 8.58127 0.146288 8.49009 0.224641 8.41383C0.302995 8.33756 0.395834 8.27778 0.497679 8.23799C0.599524 8.19821 0.708311 8.17924 0.81761 8.1822H1.68401C1.8703 6.52324 2.61475 4.97681 3.7953 3.79648C4.97584 2.61615 6.52241 1.87199 8.18141 1.686V0.818399C8.18141 0.601346 8.26763 0.393183 8.42111 0.239703C8.57459 0.0862236 8.78275 0 8.99981 0C9.21686 0 9.42502 0.0862236 9.5785 0.239703C9.73198 0.393183 9.8182 0.601346 9.8182 0.818399V1.686C11.4771 1.87196 13.0236 2.61604 14.2041 3.79625C15.3847 4.97645 16.1292 6.52275 16.3156 8.1816H17.182C17.399 8.18176 17.607 8.26805 17.7603 8.42152C17.9137 8.57498 17.9998 8.78305 17.9998 9C17.9998 9.10747 17.9786 9.2139 17.9375 9.31319C17.8964 9.41248 17.8361 9.5027 17.7601 9.5787C17.6841 9.65469 17.5939 9.71497 17.4946 9.7561C17.3953 9.79723 17.2889 9.8184 17.1814 9.8184ZM8.99981 3.273C7.51916 3.26929 6.09489 3.84055 5.0272 4.8664C3.9595 5.89224 3.33176 7.29254 3.2763 8.77215C3.22083 10.2518 3.74196 11.6951 4.72985 12.798C5.71774 13.9009 7.09524 14.5772 8.57201 14.6844H9.4276C10.9044 14.5772 12.2819 13.9009 13.2698 12.798C14.2577 11.6951 14.7788 10.2518 14.7233 8.77215C14.6678 7.29254 14.0401 5.89224 12.9724 4.8664C11.9047 3.84055 10.4805 3.26929 8.99981 3.273ZM6.5452 10.6368L8.99981 7.3692L11.4544 10.6362L8.99981 9.8238L6.5452 10.6368Z',
                    }),
                ),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'clipPath',
                        { id: 'clip0_11629_273826' },
                        a.createElement('rect', { width: 18, height: 18, fill: 'white' }),
                    ),
                ),
            ),
        [ot.loader]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M16.646 12.8005H12.8456C12.7484 11.3725 12.6938 10.1461 12.6938 9.4003C12.6938 3.8077 14.7458 0.600697 14.7458 0.600697C16.1795 3.30687 16.8873 6.33844 16.8002 9.3997C16.8002 10.1449 16.7432 11.3749 16.646 12.8005ZM7.0988 12.8005C7.0016 11.3725 6.947 10.1461 6.947 9.4003C6.947 3.8071 9.0002 0.600098 9.0002 0.600098C10.4332 3.30667 11.1402 6.33845 11.0522 9.3997C11.0522 10.1449 10.9976 11.3737 10.9004 12.7999H7.0988V12.8005ZM1.35199 12.8005C1.25479 11.3725 1.2002 10.1461 1.2002 9.4003C1.2002 3.8071 3.25219 0.600098 3.25219 0.600098C4.68517 3.30667 5.39216 6.33845 5.30419 9.3997C5.30419 10.1449 5.24899 11.3737 5.15239 12.7999H1.35199V12.8005ZM4.9328 16.6009H3.9452L3.8402 17.4001H2.6372L2.52199 16.6003H1.56859C1.44859 15.4411 1.45339 14.2741 1.37599 13.2001H5.1254C5.048 14.2747 5.0516 15.4411 4.9322 16.6003L4.9328 16.6009ZM10.679 16.6009H9.692L9.5894 17.4001H8.384L8.26879 16.6003H7.32019C7.20019 15.4411 7.20499 14.2741 7.12759 13.2001H10.8728C10.7954 14.2747 10.799 15.4411 10.6802 16.6003L10.679 16.6009ZM16.4258 16.6009H15.4382L15.3362 17.4001H14.1302L14.015 16.6003H13.0658C12.9458 15.4411 12.9506 14.2741 12.8732 13.2001H16.6202C16.5398 14.2747 16.5464 15.4411 16.427 16.6003L16.4258 16.6009Z',
                }),
            ),
        [ot.radioman]: (e) =>
            a.createElement(
                'svg',
                {
                    width: 18,
                    height: 18,
                    viewBox: '0 0 18 18',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    ...e,
                },
                a.createElement(
                    'g',
                    { clipPath: 'url(#clip0_67238_249405)' },
                    a.createElement('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M16.7735 10.11C17.08 10.3137 17.3142 10.6091 17.4425 10.954C17.5709 11.2989 17.5868 11.6755 17.4881 12.03L16.4243 16.0212C16.3284 16.4058 16.1032 16.7456 15.7863 16.9837C15.4695 17.2218 15.0803 17.3436 14.6843 17.3286L13.8311 17.28C13.5799 17.2597 13.3363 17.1835 13.1183 17.057C12.9003 16.9304 12.7134 16.7567 12.5711 16.5486C12.428 16.3395 12.3331 16.1012 12.2933 15.8509C12.2536 15.6006 12.27 15.3446 12.3413 15.1014L13.4945 10.7724C13.5908 10.3864 13.8176 10.0455 14.1365 9.80744C14.4553 9.56941 14.8466 9.44887 15.2441 9.46624L15.3497 9.03904C15.5831 8.15825 15.5717 7.23047 15.3168 6.35568C15.0618 5.48088 14.5731 4.69221 13.9031 4.07464C12.5871 2.92363 10.8982 2.28923 9.14991 2.28923C7.4016 2.28923 5.71268 2.92363 4.39671 4.07464C3.72695 4.69234 3.23841 5.48107 2.98371 6.35586C2.72902 7.23065 2.71782 8.15835 2.95131 9.03904L3.05511 9.45904C3.42893 9.47426 3.78782 9.60998 4.07817 9.84593C4.36852 10.0819 4.57477 10.4054 4.66611 10.7682L5.81931 15.0972C5.89064 15.3404 5.90702 15.5964 5.86728 15.8467C5.82753 16.097 5.73266 16.3353 5.58951 16.5444C5.44726 16.7525 5.2603 16.9262 5.04229 17.0528C4.82429 17.1793 4.58076 17.2555 4.32951 17.2758L3.47631 17.3244C3.08025 17.3395 2.69107 17.2177 2.3742 16.9797C2.05733 16.7416 1.83208 16.4016 1.73631 16.017L0.67251 12.0258C0.566505 11.6477 0.591511 11.2449 0.743473 10.8828C0.895434 10.5207 1.16542 10.2207 1.50951 10.0314L1.36551 9.44224C1.05516 8.25749 1.07528 7.01037 1.42371 5.83626C1.77214 4.66214 2.43555 3.60592 3.34191 2.78224C4.95139 1.37422 7.01717 0.598145 9.15561 0.598145C11.2941 0.598145 13.3598 1.37422 14.9693 2.78224C15.8757 3.60592 16.5391 4.66214 16.8875 5.83626C17.2359 7.01037 17.2561 8.25749 16.9457 9.44224L16.7735 10.11Z',
                    }),
                ),
                a.createElement(
                    'defs',
                    null,
                    a.createElement(
                        'clipPath',
                        { id: 'clip0_67238_249405' },
                        a.createElement('rect', { width: 18, height: 18, fill: 'white' }),
                    ),
                ),
            ),
    };
function kv({ role: e = '', className: t }) {
    const a = jv[e];
    if (a) return f.jsx(a, { className: b(Iv, t) });
    console.error(`Unknown role type ${e}`);
}
const Sv = 'NewPerk_count_dccb920a',
    Pv = 'NewPerk_iconPlus_4dc7d532',
    Ev = 'NewPerk_iconGlow_2e9bc817',
    Mv = Pe('NewPerk', 'NewPerk_2d8eff13');
function Lv({ className: e, count: t, baseRef: a }) {
    return f.jsxs(Mv, {
        ref: a,
        className: e,
        children: [
            t > 1 && f.jsx('div', { className: Sv, children: t }),
            f.jsx('div', { className: Pv, 'data-test-id': 'newPerk' }),
            f.jsx(ke, { path: 'loadout.crew.plus_perks_glow', width: 65, height: 68, className: Ev }),
        ],
    });
}
const Dv = (e) =>
        a.createElement(
            'svg',
            { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', { d: 'M4 12L9 15L14 12V10L9 13L4 10V12Z', fill: '#FFC6C3' }),
            a.createElement('path', { d: 'M4 8L9 11L14 8V6L9 9L4 6V8Z', fill: '#FFC6C3' }),
            a.createElement('path', { d: 'M4 4L9 7L14 4V2L9 5L4 2V4Z', fill: '#FFC6C3' }),
        ),
    Tv = 'RetrainingProgress_7ce4f314',
    Av = 'RetrainingProgress_background_accc6ddf',
    Bv = 'RetrainingProgress_content_b4685fd0',
    Vv = 'RetrainingProgress_icon_f4b2dc6',
    Ov = ee.resolve('intl'),
    Rv = Pe('RetrainingProgress', Tv);
function zv({ value: e, className: t }) {
    const a = Ov.formatNumber('integral', 100 * e);
    return f.jsxs(Rv, {
        className: t,
        children: [
            f.jsx('div', { className: Av }),
            f.jsxs('div', {
                className: Bv,
                children: [
                    f.jsx(Dv, { className: Vv }),
                    f.jsx(je, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: a } }),
                ],
            }),
        ],
    });
}
const $v = {
        border: 'TankmanLevel_border_7a3d6e33',
        borderImage: 'TankmanLevel_borderImage_f52e6b8f',
        base: 'TankmanLevel_888fe938',
        perk: 'TankmanLevel_perk_390beec8',
        borderImage__noise: 'TankmanLevel_borderImage__noise_e53df2b',
    },
    Hv = ee.resolve('images'),
    Fv = Pe('Perk');
function Wv({ value: e, main: t, ...a }) {
    const n = t ? 'components.button.default_border_pattern_radius_4' : 'loadout.crew.dashed_border';
    return f.jsxs(Fv, {
        ...a,
        children: [
            t && f.jsx('div', { className: $v.border }),
            f.jsx('div', {
                className: b($v.borderImage, t && $v.borderImage__noise),
                style: { borderImageSource: `url(${Hv.readOrEmpty(n)})` },
            }),
            e,
        ],
    });
}
const qv = Pe('TankmanLevel', $v.base);
function Zv({ perkValue: e, bonusPerkValue: t }) {
    return f.jsxs(qv, {
        children: [
            f.jsx(Wv, { className: $v.perk, value: e, main: !0 }),
            void 0 !== t && f.jsx(Wv, { className: b($v.perk, $v.perk__bonus), value: t, main: !1 }),
        ],
    });
}
const Uv = (e) =>
        a.createElement(
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
            a.createElement(
                'g',
                { opacity: 0.1 },
                a.createElement(
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
                    a.createElement(
                        'g',
                        { style: { mixBlendMode: 'soft-light' } },
                        a.createElement('rect', {
                            x: 3,
                            y: 3,
                            width: 42,
                            height: 42,
                            fill: 'url(#pattern0_416_14088)',
                        }),
                    ),
                ),
                a.createElement(
                    'g',
                    { mask: 'url(#mask0_416_14088)' },
                    a.createElement('circle', { cx: 24, cy: 24, r: 21, fill: 'url(#paint0_radial_416_14088)' }),
                ),
            ),
            a.createElement(
                'g',
                null,
                a.createElement('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M31.3461 16.9126L30.2948 15.9658L27.0732 18.8672L26.4351 18.5699H24.2253L23.336 18H21.7758L20.6478 19.0423H19.9247C19.7228 19.2709 19.546 19.5333 19.371 19.7931C19.2897 19.9137 19.2088 20.0338 19.126 20.1496L18.6748 21.6955L20.3893 23.1169H17.4115C17.4115 23.1169 16.0129 22.4536 15.0654 22.7379C14.118 23.0221 14 24.1067 14 24.1067C14 24.1067 14 25.9596 14.5234 26.8833C14.5986 26.952 14.7147 27.11 14.8619 27.3104C15.1767 27.739 15.6338 28.3613 16.1369 28.7163L14.5253 30.1677L15.5766 31.1145L31.3461 16.9126ZM27.4688 28.998C25.357 28.9963 22.4075 28.9939 19.7941 28.9927L29.6854 20.0847H36V21.0322H29.5933C29.5945 21.2753 29.4321 21.5574 29.2712 21.8368C29.1277 22.086 28.9855 22.333 28.9617 22.5484C28.5951 22.7934 27.9771 23.0957 27.5812 23.2844L29.4276 23.2436L29.3769 23.7892L33.0222 24.0645L33.4734 24.5383C33.5016 24.9992 33.5016 25.5934 33.4734 26.0544C33.1684 26.5673 31.2175 29 30.2249 29C29.9068 29 28.8774 28.9992 27.479 28.998L27.4752 28.998L27.4688 28.998Z',
                    fill: '#FFC6C3',
                }),
            ),
            a.createElement(
                'defs',
                null,
                a.createElement(
                    'pattern',
                    {
                        id: 'pattern0_416_14088',
                        patternContentUnits: 'objectBoundingBox',
                        width: 2.38095,
                        height: 2.38095,
                    },
                    a.createElement('use', { xlinkHref: '#image0_416_14088', transform: 'scale(0.0238095)' }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_416_14088',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(24 24) rotate(90) scale(21)',
                    },
                    a.createElement('stop', { stopColor: '#D9D9D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#D9D9D9', stopOpacity: 0 }),
                ),
            ),
        ),
    Gv = ee.resolve('views'),
    Kv = 'CrewSlot',
    Jv = {
        retrainingProgress: 'retrainingProgress',
        withPerks: 'withPerks',
        unsuitableTankman: 'unsuitableTankman',
        default: 'default',
    };
const Xv = C(function ({
        index: e,
        tankmanId: t,
        id: n,
        role: s,
        selected: r = !1,
        setSelectedSlot: o,
        tooltipShowDelay: i,
    }) {
        const [l, c] = a.useState(!1),
            d = fe(),
            { model: u, controls: m } = Al(),
            p = u.computes.disabled(),
            _ = -1 !== t,
            h = _ ? u.computes.tankmanById(t) : void 0,
            g = u.computes.newPerksToLearn(t),
            v = a.useMemo(
                () =>
                    (function (e) {
                        var t;
                        if (null == (t = null == e ? void 0 : e.bonusPerks) ? void 0 : t.length)
                            return e.bonusPerks.reduce((e, t) => e + t.skills.length, 0);
                    })(h),
                [h],
            ),
            x = (function (e, t) {
                if (e)
                    return e.currentVehicleSkillsEfficiency < 1
                        ? e.insideNativeTank || -1 !== e.currentVehicleSkillsEfficiency
                            ? Jv.retrainingProgress
                            : Jv.unsuitableTankman
                        : e.perks.length > 0 || (t && t > 0)
                          ? Jv.withPerks
                          : Jv.default;
            })(h, v),
            y = x === Jv.retrainingProgress || x === Jv.unsuitableTankman,
            C = h && g > 0,
            [w, N] = va();
        const I = Ke(
                'crewMember',
                a.useMemo(() => ({ tankmanID: t, slotIdx: n, previousViewID: null }), [t, n]),
                a.useMemo(() => ({ disabled: !_ || p }), [_, p]),
            ),
            j = fa(
                'crew_info',
                a.useMemo(() => ({ tankman: h ?? {}, resId: Gv.read((e) => e.mono.hangar.tooltips('resId')) }), [h]),
                { disabled: !h, showDelay: i },
            );
        return f.jsxs('div', {
            'data-name': 'Slot',
            onMouseDown: function (e) {
                w(e) || null == I || I.onMouseDown(e);
            },
            onMouseEnter: function (e) {
                (j.onMouseEnter(e), p || (c(!0), r || d.play('mouse-enter', { target: Kv })));
            },
            onMouseLeave: function () {
                (j.onMouseLeave(), c(!1));
            },
            onClick: function () {
                (j.onClick(), p || (d.play('crew-slot-click', { target: Kv }), m.openCrew(n), o && o(e)));
            },
            className: b(ov, p && lv, (!x || x === Jv.default || !Jv[x]) && iv),
            'data-test-id': `crewSlot-${e}`,
            children: [
                C &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx(Lv, { baseRef: N, count: g, className: b(fv, p && bv) }),
                            !p && f.jsx('div', { className: xv }),
                        ],
                    }),
                f.jsx(rv, {
                    hovered: l && !r,
                    selected: r,
                    disabled: p,
                    warning: y,
                    noTankman: !_,
                    skinId: null == h ? void 0 : h.crewSkinId.replace('tankman_', ''),
                    customizedSkin: (null == h ? void 0 : h.customizedSkin) ?? !1,
                }),
                x !== Jv.default &&
                    f.jsx('div', {
                        className: b(dv, p && mv),
                        children: (() => {
                            if (!h)
                                return (
                                    void 0 !== s &&
                                    f.jsxs(f.Fragment, {
                                        children: [
                                            f.jsx('div', { className: pv }),
                                            f.jsx(kv, { className: b(_v, hv), role: s }),
                                        ],
                                    })
                                );
                            switch (x) {
                                case Jv.unsuitableTankman:
                                    return f.jsxs(f.Fragment, {
                                        children: [
                                            f.jsx('div', { className: pv }),
                                            f.jsx(Uv, { className: b(_v, gv) }),
                                        ],
                                    });
                                case Jv.retrainingProgress:
                                    return f.jsx(zv, { value: h.currentVehicleSkillsEfficiency, className: vv });
                                case Jv.withPerks:
                                    return f.jsx(Zv, { perkValue: h.perks.length, bonusPerkValue: v });
                                default:
                                    return (console.error('Unknown crew slot display state: ', x), null);
                            }
                        })(),
                    }),
            ],
        });
    }),
    Qv = 'CrewPanel_border_2ccbfb54',
    Yv = 'CrewPanel_borderImage_50acd0ba',
    ef = 'CrewPanel_slots_57c050b6',
    tf = 'CrewPanel_slotWrapper_acbcfc00',
    af = Pe('CrewPanel', 'CrewPanel_82d22bfe'),
    nf = C(
        a.forwardRef(function (e, t) {
            const [n, s] = a.useState(!1),
                { model: r } = Al(),
                o = r.computes.slots(),
                i = r.withDog.get();
            return f.jsxs(af, {
                ...e,
                ref: t,
                onMouseEnter: (t) => {
                    var a;
                    (null == (a = e.onMouseEnter) || a.call(e, t), s(!0));
                },
                onMouseLeave: (t) => {
                    var a;
                    (null == (a = e.onMouseLeave) || a.call(e, t), s(!1));
                },
                children: [
                    f.jsx('div', { className: Qv }),
                    f.jsx('div', { className: Yv }),
                    f.jsxs('div', {
                        className: ef,
                        children: [
                            o.map((e, t) =>
                                f.jsxs(
                                    'div',
                                    {
                                        className: tf,
                                        children: [
                                            t > 0 && f.jsx(tg, {}),
                                            f.jsx(
                                                Xv,
                                                {
                                                    index: t,
                                                    tankmanId: e.tankmanId,
                                                    id: e.id,
                                                    role: e.roles[0],
                                                    tooltipShowDelay: n ? 50 : 150,
                                                },
                                                -1 === e.tankmanId ? `empty_${t}` : e.tankmanId,
                                            ),
                                        ],
                                    },
                                    e.id,
                                ),
                            ),
                            i && f.jsxs('div', { className: tf, children: [f.jsx(tg, {}), f.jsx(Nv, {})] }),
                        ],
                    }),
                ],
            });
        }),
    ),
    sf = { 'crew-slot-click': ba('yes1'), 'dog-slot-click': ba('rudy') },
    rf = new ua().addWithProps(xa, { overrides: sf }),
    of = { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.Crew('resId')) };
function lf() {
    return rf.render(f.jsxs(Tl, { options: of, children: [f.jsx(Rg, {}), f.jsx(nf, { className: wg.crewPanel })] }));
}
const cf = ee.resolve('aliases').read((e) => e.hangar.shared.Crew('resId'));
function df({ screenModeEnabled: e, className: t, onResolveRoute: a, onRoute: n }) {
    return f.jsx(qt, {
        id: cf,
        fallback: () => f.jsx(ya, {}),
        children: f.jsx('div', {
            className: b(wg.loadoutPanel, e && wg.loadoutPanel__screenMode, t),
            children: f.jsxs(Mm, {
                className: wg.panel,
                children: [f.jsx(lf, {}), f.jsx(kg, { onResolveRoute: a, onRoute: n })],
            }),
        }),
    });
}
function uf(e) {
    const t = Sm.loadout[e];
    if (t) return t;
}
function mf(e) {
    return f.jsx(df, { ...e, onResolveRoute: uf });
}
const pf = 'battleNeeded',
    _f = 'customization',
    hf = 'crewAutoReturn',
    gf = 'crewRetrain',
    vf = 'quickTraining',
    ff = 'crewBack',
    bf = 'easyEquip',
    xf = 'armorInspector',
    yf = 'fieldModification',
    Cf = 'research',
    wf = 'aboutVehicle',
    Nf = 'compare',
    If = 'vehSkillTree',
    jf = 'small',
    kf = 'large',
    Sf = 'vehicle',
    Pf = 'crew',
    Ef = 'customization',
    Mf = {
        vehicleChassis: 'track',
        vehicleEngine: 'engine',
        vehicleGun: 'gun',
        vehicleWheels: 'wheel',
        vehicleTurret: 'turret',
        vehicleRadio: 'radio',
    },
    Lf = { vehicleGun: 0, vehicleTurret: 1, vehicleRadio: 2, vehicleEngine: 3, vehicleChassis: 4, vehicleWheels: 5 };
function Df(e) {
    return Lf[e] ?? 0;
}
const Tf = 'warning',
    Af = 'critical',
    Bf = 'enabled',
    Vf = 'disabled',
    Of = 'unavailable',
    Rf = [Pf, Sf, Ef],
    zf = { vehicle: ['nationChange', wf, 'repairs', yf, If, Nf, Cf, xf, bf], crew: [gf, vf, 'crewOut', ff] };
const $f = o({ state: c(), counter: m(), stateReason: S(c()) }),
    [Hf, Ff] = B('VehicleMenuModel')(
        ({ observableModel: e, requires: { vehicleInfo: t } }) => {
            const a = {
                    opened: n.box(!1),
                    screenID: n.box(null),
                    menuItems: e.dict('menuItems'),
                    researchItems: e.arrayClone('researchItems'),
                },
                s = X.primitive(() => {
                    const e = a.researchItems.get();
                    return le(e, (e, t) => Df(e) - Df(t))[0];
                }),
                r = X.structural((e) => {
                    const t = a.menuItems.get(e);
                    if (!t) return (console.error(`Error getting menuItem with id: ${e}`), { state: Vf, counter: -1 });
                    try {
                        return _($f, JSON.parse(t));
                    } catch (n) {
                        return (console.error(n), { state: Vf, counter: -1 });
                    }
                }),
                o = X.shallow((e) => {
                    var a;
                    if ((null == (a = t.model.selectedVehicleStatistics()) ? void 0 : a.status) === Ti.battle)
                        return Vf;
                    const n = [];
                    let s = !1;
                    for (const t of e) {
                        const e = r(t);
                        if ((n.push(e.state), e.state === Af)) return Af;
                        e.state === Tf && (s = !0);
                    }
                    const o = n.every((e) => e === Vf);
                    return ((i = o), s ? Tf : i ? Vf : Bf);
                    var i;
                });
            return { ...a, computes: { getMenuItem: r, getButtonState: o, researchItem: s } };
        },
        ({ externalModel: e, model: t }) => ({
            open: r((e) => {
                (t.opened.set(!0), t.screenID.set(e));
            }),
            close: r(() => {
                (t.opened.set(!1), t.screenID.set(null));
            }),
            navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate'),
        }),
        { useRequires: () => ({ vehicleInfo: As() }) },
    ),
    [Wf, qf] = B('KeyBindingsProvider')((e) => ({
        vehicleMenu: {
            ...e.observableModel.primitives({ upgrades: If }, 'vehicleMenu'),
            ...e.observableModel.primitives(
                {
                    retrainCrew: gf,
                    quickTraining: vf,
                    returnCrew: ff,
                    aboutVehicle: wf,
                    upgrades: yf,
                    compare: Nf,
                    research: Cf,
                    armor: xf,
                    quickService: bf,
                    customization: _f,
                },
                'vehicleMenu',
            ),
        },
    })),
    Zf = 'MenuButton_background_80afe673',
    Uf = 'MenuButton_background__hidden_a0ead688',
    Gf = 'MenuButton_overlay_fdbd550d',
    Kf = 'MenuButton_arrow_5a0b183c',
    Jf = 'MenuButton_icon_e994a077',
    Xf = Pe('MenuButton', {
        element: 'div',
        className: 'MenuButton_3f57027c',
        cva: {
            variants: {
                state: { [Vf]: 'MenuButton_base__disabled_2d840da1', opened: 'MenuButton_base__opened_d9d84dd' },
            },
        },
    }),
    Qf = ee.resolve('strings'),
    Yf = ee.resolve('views'),
    eb = C(function ({
        type: e,
        opened: t,
        buttonState: n,
        crewBackWarning: s,
        iconPostfix: r,
        researchItem: o,
        size: i = jf,
        onMouseEnter: l,
        onClick: c,
        classNames: d,
        className: u,
        ...m
    }) {
        var p;
        const _ = qf(),
            [h, g] = a.useState(!1),
            v = fe(),
            x = ge(t),
            { model: y } = Ff(),
            C = _.model.vehicleMenu,
            w = null == (p = null == C ? void 0 : C[e]) ? void 0 : p.get(),
            N = w ? Ca(w) : void 0,
            { stateReason: I } = y.computes.getMenuItem(ff),
            j = n === Vf,
            k = t ? 'opened' : n,
            S = ze(i, 'upscale'),
            P = (e === Pf && s) || j ? Bf : n,
            E = j ? Bf : P,
            M = $e({ body: Qf.readOrEmpty('crew_operations.return.error.noPrevious') }),
            L = fa(
                'simple',
                a.useMemo(
                    () => ({
                        resId: Yf.read((e) => e.mono.tooltips.tooltips('resId')),
                        header: Qf.readOrEmpty(`hangar.vehicleMenu.menuButton.tooltip.${e}.header`),
                        body: Qf.readOrEmpty(`hangar.vehicleMenu.menuButton.tooltip.${e}.body`),
                        keyButtonCode: N,
                        keyButtonTitle: Qf.readOrEmpty('hangar.vehicleMenu.menuButton.tooltip.hotkey.title'),
                    }),
                    [e, N],
                ),
            );
        a.useEffect(() => {
            t && !1 === x && v.play('expand', { target: 'vehicle-menu-widget:button' });
        }, [t, x, v]);
        const D = j && e === Pf && I === pf ? M : j ? void 0 : L;
        return f.jsxs(Xf, {
            ...m,
            ...D,
            state: k,
            onMouseEnter: function (e) {
                (null == D || D.onMouseEnter(e),
                    j ||
                        (v.play('mouse-enter', { target: 'vehicle-menu-widget:button', original: e }),
                        g(!0),
                        null == l || l(e)));
            },
            onMouseLeave: function () {
                (g(!1), null == D || D.onMouseLeave());
            },
            onClick: function (t) {
                (null == D || D.onClick(),
                    j || (v.play('click', { target: 'vehicle-menu-widget:button', original: t }), c(e)));
            },
            'data-test-id': e,
            className: null == d ? void 0 : d.base,
            children: [
                !j &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx(ke, {
                                path: `hangar.vehicleMenu.${S}.btn_${P}`,
                                className: b(Zf, (h || t) && Uf, null == d ? void 0 : d.background),
                            }),
                            f.jsx(ke, {
                                path: `hangar.vehicleMenu.${S}.btn_${P}_opened`,
                                className: b(Zf, !t && Uf, null == d ? void 0 : d.backgroundOpened),
                            }),
                            !t &&
                                f.jsx(ke, {
                                    path: `hangar.vehicleMenu.${S}.btn_${P}_hover`,
                                    className: b(Zf, !h && Uf, null == d ? void 0 : d.backgroundHovered),
                                }),
                        ],
                    }),
                e !== Ef &&
                    !t &&
                    f.jsx(ke, {
                        path: `hangar.vehicleMenu.${S}.arrow_${E}`,
                        className: b(Kf, null == d ? void 0 : d.arrow),
                    }),
                (!t || j) &&
                    f.jsx(ke, {
                        path: `hangar.vehicleMenu.${S}.${e}_${r}`,
                        className: b(Jf, null == d ? void 0 : d.icon),
                    }),
                j &&
                    f.jsx(ke, {
                        path: `hangar.vehicleMenu.${S}.btn_disabled`,
                        className: b(Gf, null == d ? void 0 : d.overlay),
                    }),
            ],
        });
    }),
    tb = {
        root: 'MenuItem_root_28be5e00',
        hover: 'MenuItem_hover_344959e8',
        disabledOverlay: 'MenuItem_disabledOverlay_f4ce8f15',
        sideBorders: 'MenuItem_sideBorders_52632696',
        base: 'MenuItem_37b3ba75',
        inner: 'MenuItem_inner_7b3a0c1',
        inner__disabled: 'MenuItem_inner__disabled_be62900b',
        sideBorder: 'MenuItem_sideBorder_7c07d72d',
        inner__warning: 'MenuItem_inner__warning_28be5e00',
        sideBorder__left: 'MenuItem_sideBorder__left_3188559f',
        inner__critical: 'MenuItem_inner__critical_28be5e00',
        sideBorder__right: 'MenuItem_sideBorder__right_b63d0a05',
        icon: 'MenuItem_icon_cfe743f0',
        iconImage: 'MenuItem_iconImage_5c399bab',
        title: 'MenuItem_title_4f50bf02',
        title__hasHotkey: 'MenuItem_title__hasHotkey_f656354b',
        counter: 'MenuItem_counter_700c76dd',
        hotKey: 'MenuItem_hotKey_5db2e99',
        hotKeyBackground: 'MenuItem_hotKeyBackground_a1365519',
        hotKeyBorder: 'MenuItem_hotKeyBorder_f7c4ab4c',
        hotKeyContent: 'MenuItem_hotKeyContent_8c7bbb86',
        warningIcon: 'MenuItem_warningIcon_9a54d136',
    },
    ab = ee.resolve('strings'),
    nb = ee.resolve('intl'),
    sb = C(function ({ name: e, size: t = jf, researchItem: a, onClick: n }) {
        var s;
        const r = fe(),
            { model: o } = Ff(),
            { state: i, stateReason: l, counter: c } = o.computes.getMenuItem(e),
            d = ze(t, 'upscale'),
            u = qf().model.vehicleMenu,
            m = null == (s = null == u ? void 0 : u[e]) ? void 0 : s.get(),
            p = m ? Ca(m) : void 0,
            _ = $e({ body: ab.readOrEmpty('crew_operations.return.error.noPrevious') }),
            h = $e({ body: ab.readOrEmpty('crew_operations.return.warning.memberDemobilized.tooltip.body') });
        return i === Of
            ? null
            : f.jsx('div', {
                  className: tb.base,
                  ...(e === ff && (i === Vf && l === pf ? _ : i === Bf && 'crewMembersRetired' === l ? h : void 0)),
                  children: f.jsxs('div', {
                      className: b(tb.inner, tb[`inner__${i}`]),
                      onClick: function (t) {
                          i !== Vf && (r.play('click', { target: 'vehicle-menu-widget:item', original: t }), n(e));
                      },
                      onMouseEnter: function (e) {
                          i !== Vf && r.play('mouse-enter', { target: 'vehicle-menu-widget:item', original: e });
                      },
                      'data-test-id': e,
                      children: [
                          f.jsx('div', { className: tb.hover }),
                          f.jsxs('div', {
                              className: tb.sideBorders,
                              children: [
                                  f.jsx('div', { className: b(tb.sideBorder, tb.sideBorder__left) }),
                                  f.jsx('div', { className: b(tb.sideBorder, tb.sideBorder__right) }),
                              ],
                          }),
                          f.jsx('div', {
                              className: tb.icon,
                              children: f.jsx(ke, {
                                  path: `hangar.vehicleMenu.${d}.${e}${i === Tf && a && e === Cf ? `_${Mf[a]}` : i === Bf || i === Vf ? '' : `_${i}`}`,
                                  className: tb.iconImage,
                              }),
                          }),
                          f.jsxs('div', {
                              className: b(tb.title, p && tb.title__hasHotkey),
                              children: [
                                  ab.readOrEmpty(`hangar.vehicleMenu.menuItem.${e}.title`),
                                  c > 0 &&
                                      f.jsx(je, {
                                          path: 'hangar.vehicleMenu.menuItem.counter',
                                          params: { count: nb.formatNumber('integral', c) },
                                          className: tb.counter,
                                      }),
                                  p &&
                                      f.jsx(Zt, {
                                          silent: !0,
                                          idle: !0,
                                          keyCode: p,
                                          classNames: {
                                              base: tb.hotKey,
                                              background: tb.hotKeyBackground,
                                              border: tb.hotKeyBorder,
                                              content: tb.hotKeyContent,
                                          },
                                          children: f.jsx(Zt.Code, {}),
                                      }),
                              ],
                          }),
                          e === ff &&
                              i === Bf &&
                              'crewMembersRetired' === l &&
                              f.jsx(ke, { path: 'hangar.vehicleMenu.icon_alert', className: tb.warningIcon }),
                          i === Vf && f.jsx('div', { className: tb.disabledOverlay }),
                      ],
                  }),
              });
    }),
    rb = 'MenuList_border_478c22c4',
    ob = 'MenuList_bottom_c28a1943',
    ib = 'MenuList_cea03bfd',
    lb = 'MenuList_content_102c53c8',
    cb = 'MenuList_checkbox_d5741047',
    db = 'MenuList_label_8b8f8c2a',
    ub = 'MenuList_checkbox__checked_5a4f974e',
    mb = 'MenuList_checkbox__disabled_5a4f974e',
    pb = 'MenuList_topItem_6a7889e4',
    _b = 'MenuList_autoReturn_841be836',
    hb = 'MenuList_divider_af7e286c',
    gb = 'MenuList_bottomBorder_bad1a96',
    vb = 'MenuList_notch_265b362a',
    fb = C(function ({ buttonState: e, size: t, className: a }) {
        const { model: n, controls: s } = Ff(),
            r = n.opened.get(),
            o = n.screenID.get(),
            i = n.computes.researchItem(),
            l = ee.resolve('strings'),
            c = $e({ body: l.readOrEmpty('crew_operations.return.error.noPrevious') }),
            d = P(r, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: E.stiff });
        if (!o) return;
        const { state: u, stateReason: m } = n.computes.getMenuItem(hf),
            p = u === Of;
        const _ = e === Af || e === Tf ? e : 'default',
            h = u === Bf;
        return (
            o !== Ef &&
            d(
                (e, n) =>
                    n &&
                    f.jsxs(w.div, {
                        className: b(ib, a),
                        style: e,
                        children: [
                            f.jsxs('div', {
                                className: lb,
                                children: [
                                    o === Pf &&
                                        f.jsxs('div', {
                                            className: pb,
                                            children: [
                                                f.jsx('div', {
                                                    className: _b,
                                                    ...(p && m === pf && c),
                                                    children: f.jsx(wa, {
                                                        checked: h,
                                                        disabled: p,
                                                        onCheckedChange: () => s.navigateTo(hf),
                                                        size: Na.small,
                                                        className: b(cb, h && ub, p && mb),
                                                        classNames: { label: db },
                                                        children: l.readOrEmpty(
                                                            'hangar.vehicleMenu.menuItem.crewAutoReturn.title',
                                                        ),
                                                    }),
                                                }),
                                                f.jsx('div', { className: hb }),
                                            ],
                                        }),
                                    ue(zf[o], (e) =>
                                        f.jsx(
                                            sb,
                                            {
                                                name: e,
                                                size: t,
                                                onClick: (e) => {
                                                    (s.navigateTo(e), s.close());
                                                },
                                                researchItem: i,
                                            },
                                            e,
                                        ),
                                    ),
                                ],
                            }),
                            f.jsx('div', { className: rb }),
                            f.jsxs('div', {
                                className: ob,
                                children: [
                                    f.jsx(ke, { path: `hangar.vehicleMenu.menu_bottom_left_${_}`, className: gb }),
                                    f.jsx('div', { className: vb }),
                                    f.jsx(ke, { path: `hangar.vehicleMenu.menu_bottom_right_${_}`, className: gb }),
                                ],
                            }),
                        ],
                    }),
            )
        );
    }),
    bb = new Set(['text', 'search', 'url', 'tel', 'email', 'password', 'number']);
const xb = C(function () {
        const e = qf().model.vehicleMenu,
            t = fe(),
            { model: a, controls: n } = Ff(),
            s = a.opened.get();
        (Qe(s ? 'Escape' : 'NONE', n.close), Qe(s ? 'Space' : 'NONE', n.close));
        for (const [r, o] of Object.entries(e)) {
            const e = Ca(o.get()),
                { state: i } = a.computes.getMenuItem(r);
            Rt(i === Vf || i === Of ? 'NONE' : e, (e) => {
                var a;
                e.shiftKey ||
                    e.altKey ||
                    e.ctrlKey ||
                    (document.activeElement &&
                        !((a = document.activeElement) instanceof HTMLTextAreaElement
                            ? a.disabled || a.readOnly
                            : !(a instanceof HTMLInputElement
                                  ? !a.disabled && !a.readOnly && bb.has(a.type)
                                  : a instanceof HTMLElement && a.isContentEditable))) ||
                    (t.play('hot-key', { target: 'wehicle_menu_widget:screen', original: e }),
                    Wt.contextMenu.hideAll(),
                    n.navigateTo(r),
                    s && n.close());
            });
        }
        return (
            Ia(() =>
                aa.down(([e, t]) => {
                    'outside' === t && n.close();
                }),
            ),
            null
        );
    }),
    yb = {
        root: 'VehicleMenuWidget_root_de68ce43',
        base: 'VehicleMenuWidget_80bb906f',
        menu: 'VehicleMenuWidget_menu_54752133',
        menu__vehicle: 'VehicleMenuWidget_menu__vehicle_6691c8cb',
        menu__crew: 'VehicleMenuWidget_menu__crew_9d49d2d3',
        menu__customization: 'VehicleMenuWidget_menu__customization_7cda5bdd',
    },
    Cb = { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.KeyBindings('resId')) },
    wb = C(function ({ className: e, keyBindingsProviderOptions: t = Cb }) {
        const { model: n, controls: s } = Ff(),
            r = n.screenID.get(),
            o = n.computes.getButtonState,
            i = n.computes.researchItem(),
            { state: l } = n.computes.getMenuItem(hf),
            { state: c } = n.computes.getMenuItem(ff),
            { state: d } = n.computes.getMenuItem(yf),
            { state: u } = n.computes.getMenuItem(If),
            { state: m } = n.computes.getMenuItem(bf),
            { state: p } = n.computes.getMenuItem(vf),
            { state: _ } = n.computes.getMenuItem(_f),
            h = ja(
                a.useCallback(() => {
                    s.close();
                }, [s]),
            ),
            g = Bt({ value: jf }, { large: { value: kf } }),
            v = o(zf[Pf]),
            x = { [Sf]: o(zf[Sf]), [Pf]: v, [Ef]: _ };
        function y(e) {
            if (e === Sf) {
                const e = x[Sf] === Vf ? '_disable' : '';
                if (x[Sf] === Af) return x[Sf];
                if (m === Tf) return `${bf}${e}`;
                if (i) return `${Mf[i]}${e}`;
                if (d === Tf) return `${yf}${e}`;
                if (u === Tf) return `${If}${e}`;
            } else if (e === Pf) {
                if (p === Tf) return Tf;
                if (c === Af || c === Tf) return 'default';
                if (l === Bf && x[Pf] !== Tf) return 'autoReturn';
            }
            return 'default';
        }
        function C(e) {
            e !== Ef ? (r === e ? s.close() : s.open(e)) : s.navigateTo(Ef);
        }
        return (
            a.useEffect(() => {
                r === Pf && v === Vf && s.close();
            }, [r, v, s]),
            f.jsx(Wf, {
                options: t,
                children: f.jsxs('div', {
                    ref: h,
                    className: b(yb.base, e),
                    children: [
                        r !== Ef &&
                            f.jsx('div', {
                                className: b(yb.menu, r && yb[`menu__${r}`]),
                                children: f.jsx(fb, { buttonState: r ? o(zf[r]) : Bf, size: g.value }),
                            }),
                        Rf.map((e) =>
                            f.jsx(
                                eb,
                                {
                                    type: e,
                                    opened: r === e,
                                    researchItem: i,
                                    buttonState: x[e],
                                    crewBackWarning: p !== Tf && (c === Af || c === Tf),
                                    iconPostfix: y(e),
                                    size: g.value,
                                    onClick: C,
                                },
                                e,
                            ),
                        ),
                        f.jsx(xb, {}),
                    ],
                }),
            })
        );
    }),
    Nb = 'VehicleMenu_menu_2b35ec',
    Ib = 'VehicleMenu_menu__screenMode_bf623a9b',
    jb = { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.VehicleMenu('resId')) };
function kb({ className: e, screenModeEnabled: t }) {
    return f.jsx(Hf, {
        options: jb,
        children: f.jsx('div', { className: b(Nb, t && Ib, e), children: f.jsx(wb, {}) }),
    });
}
const Sb = 'HeroTankMarker_7a1c486d',
    Pb = 'HeroTankMarker_base__visible_d8b5c003',
    Eb = 'HeroTankMarker_vehicleName_a789e6e5',
    Mb = 'HeroTankMarker_vehicleType_d8b5c003',
    Lb = Pe('HeroTankInfo'),
    Db = C(
        a.forwardRef(function (e, t) {
            const { model: n } = In(),
                r = n.type.get(),
                o = a.useRef(null),
                [i, l] = a.useState(!1);
            return (
                a.useEffect(
                    () =>
                        s(() => {
                            const e = n.heroTankMarker.get();
                            l(e.isVisible);
                            const t = o.current;
                            if (!t) return null;
                            t.style.transform = `translate(${Ae(e.posx)}px, ${Ae(e.posy)}px) translate(-50%, -50%)`;
                        }),
                    [n.heroTankMarker],
                ),
                f.jsxs(Lb, {
                    ...e,
                    ref: ka([t, o]),
                    className: b(Sb, i && Pb),
                    children: [
                        f.jsx('div', { className: Eb, children: n.name.get() }),
                        f.jsx('div', {
                            className: Mb,
                            children: r && f.jsx(ke, { path: `vehicleTypes.gold.${ct(r)}`, width: 32, height: 32 }),
                        }),
                    ],
                })
            );
        }),
    ),
    Tb = 'disabled',
    Ab = 'enabled',
    Bb = 'modeSelector',
    Vb = 'shop',
    Ob = 'storage',
    Rb = 'missions',
    zb = 'personalMissions',
    $b = 'achievements',
    Hb = 'techtree',
    Fb = 'tournament',
    Wb = 'barracks',
    qb = 'clans',
    Zb = Fb,
    Ub = qb,
    Gb = zb,
    Kb = Bb,
    Jb = $b,
    Xb = {
        [Vb]: 'shop',
        [Ob]: 'storage',
        [Hb]: 'techtree',
        [Wb]: 'barracks',
        [Zb]: 'tournament',
        [Ub]: 'clans',
        ['clan']: 'clan',
        [Rb]: 'missions',
        [Gb]: 'personalMissions',
        [Kb]: 'modeSelector',
        [Jb]: 'profile',
        ['replays']: 'replays',
    },
    Qb = (e) =>
        a.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    Yb = {
        root: 'MenuItem_root_28be5e00',
        base: 'MenuItem_92bbc5da',
        base__modeSelectorName: 'MenuItem_base__modeSelectorName_28be5e00',
        base__enabledState: 'MenuItem_base__enabledState_6f88d3d1',
        modeSelector: 'MenuItem_modeSelector_1c338d85',
        modeIcon: 'MenuItem_modeIcon_cfd63447',
        label: 'MenuItem_label_8c0d77ba',
        base__disabledState: 'MenuItem_base__disabledState_28be5e00',
        titleWrapper: 'MenuItem_titleWrapper_cf46ff6b',
        title: 'MenuItem_title_8d412cc5',
        arrow: 'MenuItem_arrow_da9a9320',
        modeName: 'MenuItem_modeName_36c0339e',
        clanEmblem: 'MenuItem_clanEmblem_fe5255ab',
    },
    ex = 'forts',
    tx = ee.resolve('intl'),
    ax = ee.resolve('strings'),
    nx = {
        [Kb]: 'tooltips.header.battleType',
        [Zb]: 'tooltips.header.buttons.tournaments',
        [Jb]: 'tooltips.header.buttons.profile',
    },
    sx = {
        [Ub]: 'tooltips.header.buttons.clans.turnedOff',
        [Gb]: 'tooltips.header.buttons.personalMissionsDisabled',
        [ex]: 'tooltips.header.buttons.forts.turnedOff',
    };
function rx(e) {
    return tx.toUpperCase(
        ax.readOrEmpty(`menu.headerButtons.${Xb[e]}`) || ax.readOrEmpty(`menu.headerButtons.${e}`) || `{${e}}`,
    );
}
function ox({
    name: e,
    state: t,
    modeName: n,
    modeId: s,
    techTreeEvents: r,
    clanEmblem: o,
    onClick: i,
    battleTypesPath: l = 'R.images.gui.maps.icons',
}) {
    const c = fe(),
        d = e === Ub && o,
        u = $e(
            a.useMemo(
                () =>
                    (function (e, t) {
                        const a = ((t && sx[e]) || nx[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: ax.readOrEmpty(`${a}.header`), body: ax.readOrEmpty(`${a}.body`) };
                    })(d ? ex : e, t === Tb),
                [e, t, d],
            ),
        ),
        m = He('techtreeDiscount'),
        p = r && 'techtree' === e ? m : u;
    return f.jsx('div', {
        ...p,
        className: b(Yb.base, Yb[`base__${t}State`], Yb[`base__${e}Name`]),
        'data-test-id': e,
        onMouseEnter: function (e) {
            (p.onMouseEnter(e),
                t !== Tb && c.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (a) {
            (p.onClick(), t !== Tb && (i(e), c.play('click', { target: 'main-menu-widget:menu-item', original: a })));
        },
        children: (() => {
            switch (e) {
                case Kb:
                    return f.jsxs(f.Fragment, {
                        children: [
                            f.jsxs('div', {
                                className: Yb.modeSelector,
                                children: [
                                    f.jsx('div', { className: Yb.label, children: rx(e) }),
                                    n && f.jsx('div', { className: Yb.modeName, children: tx.toUpperCase(n) }),
                                    f.jsx('div', {
                                        className: Yb.modeIcon,
                                        style: { backgroundImage: `url(${l}.battleTypes.c_64x64.${s})` },
                                    }),
                                ],
                            }),
                            f.jsx(Qb, { className: Yb.arrow }),
                        ],
                    });
                case Ub:
                    return f.jsxs('div', {
                        className: Yb.titleWrapper,
                        children: [
                            o && f.jsx('div', { style: { backgroundImage: `url(${o})` }, className: Yb.clanEmblem }),
                            f.jsx('div', { className: Yb.title, children: rx(d ? 'clan' : e) }),
                        ],
                    });
                default:
                    return f.jsx('div', {
                        className: Yb.titleWrapper,
                        children: f.jsx('div', { className: Yb.title, children: rx(e) }),
                    });
            }
        })(),
    });
}
const ix = 'MainMenu_222da7b7',
    lx = C(function ({ className: e, battleTypesPath: t }) {
        const { model: n, controls: s } = kn(),
            r = n.menuItems.get(),
            o = n.modeName.get(),
            i = n.modeId.get(),
            l = n.hasTechTreeEvents.get(),
            c = n.clanEmblem.get();
        return f.jsx('div', {
            className: b(ix, e),
            children: ue(r, (e) =>
                a.createElement(ox, {
                    ...e,
                    key: e.name,
                    battleTypesPath: t,
                    onClick: s.navigateTo,
                    modeName: o,
                    modeId: i,
                    techTreeEvents: l,
                    clanEmblem: c,
                }),
            ),
        });
    }),
    cx = {
        getter: Sa({
            menuItems: [
                { name: Bb, state: Ab },
                { name: Vb, state: Ab },
                { name: Ob, state: Ab },
                { name: Rb, state: Ab },
                { name: zb, state: Ab },
                { name: $b, state: Ab },
                { name: Hb, state: Ab },
                { name: Wb, state: Tb },
                { name: Fb, state: Ab },
                { name: qb, state: Ab },
            ],
            modeName: 'Random Battle',
        }),
        controls: () => ce(Pa('navigateTo')),
    };
function dx({ className: e, battleTypesPath: t, ...a }) {
    return f.jsx(jn, { mode: 'real', mocks: cx, ...a, children: f.jsx(lx, { className: e, battleTypesPath: t }) });
}
function ux({ className: e }) {
    const { controls: t } = Pn();
    return f.jsx('div', {
        className: e,
        children: f.jsx(Ea, {
            moveSpace: t.sceneWrapper.onMoveSpace,
            onMouseOver3dScene: t.sceneWrapper.onMouseOver3dScene,
        }),
    });
}
const mx = 'VehicleInfoWidget_b24b193a',
    px = 'VehicleInfoWidget_info_8571b16b',
    _x = 'VehicleInfoWidget_info__active_e94ce8a',
    hx = 'VehicleInfoWidget_text_ff05c9a6',
    gx = 'VehicleInfoWidget_role_462e1204',
    vx = 'VehicleInfoWidget_currency_9c6f2463',
    fx = 'VehicleInfoWidget_currencyIcon_59fc1b6d',
    bx = C(function () {
        const e = As().model.selectedVehicle(),
            t = As().model.selectedVehicleStatistics(),
            { breakpoint: n } = ca(),
            s =
                ((r = null == e ? void 0 : e.vehicleId),
                Ma(
                    'vehicleRoles',
                    a.useMemo(() => [r], [r]),
                ));
        var r;
        if (e && t)
            return f.jsxs('div', {
                className: mx,
                children: [
                    f.jsxs(Ee, {
                        ...(1 === e.role && s),
                        className: b(px, 1 === e.role && _x),
                        children: [
                            f.jsx(Ee.Level, { className: hx, value: e.level }),
                            Me(e.type) &&
                                f.jsx(Ee.Type, {
                                    type: e.type,
                                    premium: t.elite,
                                    size: n.weight <= La.large.weight ? Ee.Type.sizes.x48x48 : Ee.Type.sizes.x64x64,
                                }),
                            f.jsx(Ee.Name, { className: hx, children: e.shortName }),
                            0 !== e.role &&
                                1 !== e.role &&
                                f.jsx(Ee.Role, {
                                    ...s,
                                    classNames: { base: gx },
                                    roleKey: J(e.role),
                                    size: Ee.Role.sizes.x16x16,
                                }),
                        ],
                    }),
                    f.jsx(Re, {
                        classNames: { base: vx, icon: fx },
                        type: t.elite ? Da.eliteXp : Da.tankXP,
                        reverse: !0,
                        size: Ve.extraSmall,
                        children: t.xp,
                    }),
                ],
            });
    }),
    [xx, yx] = B('PetObjectTooltipModel')(({ observableModel: e }) => ({ root: e.object() }), V),
    Cx = ee.resolve('aliases'),
    wx = ee.resolve('views'),
    Nx = Cx.read((e) => e.hangar.shared.PetObjectTooltip('resId')),
    Ix = wx.read((e) => e.mono.pet_system.tooltips.pet_storage_tooltip('resId')),
    jx = wx.read((e) => e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId')),
    kx = C(function () {
        const { model: e } = yx(),
            { isStorageTooltipVisible: t, is3dObjectTooltipVisible: n } = e.root.get();
        return (
            a.useEffect(() => {
                n
                    ? Wt.tooltip.open(Nx, jx)
                    : t
                      ? Wt.tooltip.open(Nx, Ix)
                      : (Wt.tooltip.hide(Nx, jx), Wt.tooltip.hide(Nx, Ix));
            }, [t, n]),
            null
        );
    }),
    Sx = 'Message_e6fd2857',
    Px = 'Message_background_a273fbc3',
    Ex = 'Message_icon_448c0fc0',
    Mx = 'Message_text_3c3ea029',
    Lx = j(function () {
        return f.jsxs('div', {
            className: Sx,
            children: [
                f.jsx('div', { className: Px }),
                f.jsx('div', { className: Ex }),
                f.jsx('div', { className: Mx, children: R.strings.fun_random.alertMessage.unsuitableVehicles() }),
            ],
        });
    }),
    Dx = {
        root: 'ModifierDomainIcon_root_51614357',
        base: 'ModifierDomainIcon_209db6a8',
        image: 'ModifierDomainIcon_image_eee68fdd',
        iconOut: 'ModifierDomainIcon_iconOut_51614357',
        iconHover: 'ModifierDomainIcon_iconHover_51614357',
        image__big: 'ModifierDomainIcon_image__big_42457fa',
        image__large: 'ModifierDomainIcon_image__large_43511027',
    };
var Tx = ((e) => ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), e))(Tx || {});
const Ax = { small: '40x40', big: '64x64', large: '80x80' },
    Bx = ee.resolve('aliases').read((e) => e.battle_modifiers.shared.Modifiers('resId')),
    Vx = (e, t) => {
        const a = Ax[t];
        return {
            backgroundImage: `url(${R.images.battle_modifiers.gui.maps.icons.feature.domains.$dyn(`c_${a}`).$dyn(e)})`,
        };
    },
    Ox = ({ modifiersDomain: e, subModeId: t, className: a, size: n = 'small' }) => {
        const s = t ? { modifiersDomain: e, subModeId: t } : { modifiersDomain: e };
        return f.jsx('div', {
            className: Dx.base,
            children: f.jsx(Ta, {
                targetId: Bx,
                contentId: R.views.battle_modifiers.lobby.tooltips.ModifiersDomainTooltipView('resId'),
                args: s,
                children: f.jsx('div', { className: M(Dx.image, Dx[`image__${n}`], a), style: Vx(e, n) }),
            }),
        });
    },
    [Rx, zx] = B()(({ observableModel: e }) => ({ modifiersDomains: e.array('modifiersDomains') }), V),
    $x = 'HangarWidget_1a7c6ab5',
    Hx = 'HangarWidget_base__placeholder_406c8c50',
    Fx = 'HangarWidget_glow_46562846',
    Wx = 'HangarWidget_modifiers_3d3d06d',
    qx = 'HangarWidget_modifier_f9f471fd',
    Zx = j(() => {
        const { model: e } = zx(),
            t = e.modifiersDomains.get();
        return f.jsx('div', {
            className: b($x, 0 === t.length && Hx),
            children:
                t.length > 0 &&
                f.jsxs(f.Fragment, {
                    children: [
                        f.jsx('div', { className: Fx }),
                        f.jsx('div', {
                            className: Wx,
                            children: ue(t, (e, t) =>
                                f.jsx(
                                    'div',
                                    { className: qx, children: f.jsx(Ox, { modifiersDomain: e, size: Tx.big }) },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
        });
    });
function Ux() {
    const { screenWidthRem: e } = ca();
    return e < La.large.width;
}
const Gx = v.createContext(void 0);
function Kx() {
    const e = a.useContext(Gx);
    return (ne(void 0 !== e, 'WidgetAnimationContext is undefined'), e);
}
const Jx = 'small',
    Xx = 'big',
    Qx = { full: 'full', medium: 'medium', small: 'small' },
    Yx = 'appear',
    ey = 'fadeIn',
    ty = 'slideUpIn',
    ay = { y: 0, x: 0, opacity: 0, height: 0, width: 0 },
    ny = 1;
function sy(e) {
    const t = new Map();
    for (let a = 0; a <= e.length; a++) {
        const n = e[a];
        t.set(n, { rowIndex: a, columnIndex: 0, size: Qx.full });
    }
    return t;
}
function ry(e) {
    return -(Math.cos(Math.PI * e) - 1) / 2;
}
const oy = { duration: 400, easing: ry },
    iy = 5,
    ly = 6,
    cy = 7,
    dy = 900,
    uy = 1016;
const my = 100;
function py(e, t, a, n = !0) {
    const s = a.getCardAnimationProps(e),
        r = a.getCardRow(e),
        o = a.getMaxCardRow(t),
        i = a.getVisibleRowsAmount(),
        l = n ? oy.duration : 0,
        c = t.includes(e);
    return {
        from: c ? { ...s, opacity: 0 } : {},
        to: s,
        delay: c ? l + Math.max((i - o) * my, 0) : Math.max((i - o - r) * my, 0),
        config: oy,
    };
}
function _y(e) {
    return { to: { x: Ae(Aa(e) + 100), opacity: 0 }, config: { duration: 700, easing: ry } };
}
function hy(e, t, a) {
    const n = e.dataset.id,
        s = t.getCard(n),
        r = t.getCardHeight(n);
    if (!s || !r) return '';
    const o = Aa(s.getPropValue('opacity')),
        i = Aa(s.getPropValue('height'));
    if (i < r || 0 === o) return '';
    const l = Aa(s.getPropValue('width')),
        c = Aa(s.getPropValue('y')),
        d = Aa(s.getPropValue('x')),
        u = t.getCardSize(n) !== Qx.full,
        m = Math.round(d),
        p = Math.round(d + l) - ny,
        _ = Math.round(c),
        h = { top: `H${m}x${_}`, bottom: `H${m}x${Math.round(c + i) - ny}`, left: `V${_}x${m}`, right: `V${_}x${p}` },
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
const gy = { [Jx]: { gap: 0, cardHeight: 74, cardWidth: 241 }, [Xx]: { gap: 0, cardHeight: 74, cardWidth: 319 } },
    vy = { [Qx.full]: 1, [Qx.medium]: 0.5, [Qx.small]: 1 / 3 };
function fy(e, t) {
    return { ...gy[e], ...(null == t ? void 0 : t[e]) };
}
function by(e) {
    return Array.from(e.entries()).sort((e, t) => e[1].position - t[1].position);
}
class xy {
    constructor(e) {
        (t(this, '_sortedGroups'),
            t(this, '_cards', new Map()),
            t(this, '_cachedLayout'),
            (this._widgetConfig = e),
            (this._sortedGroups = by(this._widgetConfig.groups)));
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
        ((e.sortedCards = by(this._cards)),
            (t = e.groupCardIds),
            e.sortedCards.forEach(([e, { groupId: a }]) => {
                var n;
                (t.has(a) || t.set(a, []), null == (n = t.get(a)) || n.push(e));
            }));
        let a = 0,
            n = 0;
        return (
            this._sortedGroups.forEach(([t, s]) => {
                const r = e.groupCardIds.get(t);
                if (!r) return;
                const {
                    gap: o,
                    cardHeight: i,
                    cardWidth: l,
                    maxRowsAmount: c,
                } = fy(this._widgetConfig.size, s.adaptive);
                a > 0 && o && (a += Ae(o));
                const d = Ae(i),
                    u = r.filter((e) => {
                        var t;
                        return null == (t = this._cards.get(e)) ? void 0 : t.visible;
                    }),
                    m = (s.layoutCreator || sy)(u);
                let p = 0;
                for (const _ of r) {
                    const t = m.get(_);
                    if (!t) {
                        e.animationProps.set(_, ay);
                        continue;
                    }
                    const { rowIndex: s, columnIndex: r, size: o } = t,
                        i = Math.ceil(l * vy[o]),
                        u = s + 1,
                        h = n + u,
                        g = void 0 === c || u <= c;
                    (e.cardToRow.set(_, h),
                        e.cardSizes.set(_, o),
                        e.animationProps.set(_, {
                            height: d,
                            width: Ae(i),
                            opacity: g && this._widgetConfig.visibleRowsAmount >= h ? 1 : 0,
                            x: Ae(r * (i - ny)),
                            y: a + s * (d - ny),
                        }),
                        g && (p = Math.max(u, p)));
                }
                ((a += (d - ny) * p), (n += p), e.rowsAmountByGroup.set(t, p));
            }),
            (e.visibleRowsAmount = n),
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
            void 0 !== e.groups && (this._sortedGroups = by(this._widgetConfig.groups)),
            this.clearCachedLayout());
    }
    getCard(e) {
        return this._cards.get(e);
    }
    getCardAnimationProps(e) {
        return this._layout.animationProps.get(e) || ay;
    }
    getCardRow(e) {
        return this._layout.cardToRow.get(e) || 0;
    }
    getCardSize(e) {
        return this._layout.cardSizes.get(e) || Qx.full;
    }
    getCardHeight(e) {
        var t;
        const a = null == (t = this.getCard(e)) ? void 0 : t.groupId;
        if (!a) return;
        const n = this._widgetConfig.groups.get(a);
        return fy(this._widgetConfig.size, null == n ? void 0 : n.adaptive).cardHeight;
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
        for (let n = 0; n < this._sortedGroups.length; n++) {
            const [s] = this._sortedGroups[n];
            if (s === e) {
                const { maxRowsAmount: e } = fy(this._widgetConfig.size, t.adaptive),
                    n = this._widgetConfig.visibleRowsAmount - a;
                return e ? Math.min(n, e) : n;
            }
            const r = this._layout.rowsAmountByGroup.get(s);
            r && (a += r);
        }
        return 0;
    }
    isCardDisplaying(e) {
        return void 0 !== this._layout.cardToRow.get(e);
    }
    async runCardAnimations(e) {
        await Promise.all(
            this._layout.sortedCards.map(async ([t, a]) => {
                const n = e(t, a);
                n && (await a.startLayoutAnimation(n));
            }),
        );
    }
}
const yy = 'Card_82475c',
    Cy = 'Card_borderHelper_9f37b536',
    wy = 'Card_border_a649c143',
    Ny = 'Card_card__enabled_4c476d8b',
    Iy = {
        [Yx]: function (e, t, a) {
            const n = py(e, t, a, !1);
            return { ...n, from: t.includes(e) ? { ...n.from, height: 0 } : n.from };
        },
        [ey]: py,
        [ty]: function (e, t, a) {
            const n = py(e, t, a, !1);
            if (t.includes(e)) {
                const t = a.getCardAnimationProps(e).y + Ae(a.getCardHeight(e));
                return { ...n, from: { ...n.from, y: t } };
            }
            return n;
        },
    };
function jy({ children: e, groups: t, maxVisibleRowsAmount: n }) {
    const s = Ux() ? Jx : Xx,
        { screenHeightRem: r } = ca(),
        o =
            n ??
            (function (e) {
                return e > dy ? (e > uy ? cy : ly) : iy;
            })(r),
        { enqueue: i, runDequeue: l } = (function () {
            const e = a.useRef([]),
                t = a.useRef(!1),
                n = a.useRef(!1),
                s = ma(() => {
                    if (t.current || !n.current) return;
                    const a = e.current.shift();
                    a &&
                        ((t.current = !0),
                        a
                            .promise()
                            .then(() => {
                                ((t.current = !1), a.resolve(), s());
                            })
                            .catch(() => {
                                ((t.current = !1), a.reject(), s());
                            }));
                });
            return {
                enqueue: ma(
                    (t) =>
                        new Promise((a, n) => {
                            (e.current.push({ promise: t, resolve: a, reject: n }), s());
                        }),
                ),
                runDequeue: ma(() => {
                    ((n.current = !0), s());
                }),
            };
        })(),
        c = a.useRef(null),
        d = a.useRef(!1),
        u = a.useRef(new xy({ size: s, visibleRowsAmount: o, groups: t })),
        m = ma((e) => {
            var t;
            const a = null == (t = c.current) ? void 0 : t.querySelectorAll(`.${Cy}`);
            a &&
                (function (e, t, a) {
                    const n = new Set();
                    a && (a.style.borderImageWidth = hy(a, t, n));
                    for (let s = e.length - 1; s >= 0; s--) {
                        const r = e[s];
                        r !== a && (r.style.borderImageWidth = hy(r, t, n));
                    }
                })(a, u.current, e);
        }),
        p = ma(async (e) => {
            (m(),
                await u.current.runCardAnimations((t, a) => {
                    const n = e({ id: t, settings: a });
                    if (void 0 !== n) return { ...n, onChange: () => m() };
                }),
                m());
        }),
        _ = ma(async (e = !0) => {
            let t = 0,
                a = 0;
            await p(({ id: n, settings: s }) => {
                const r = u.current.getCardAnimationProps(n),
                    o = r.y,
                    i = s.getPropGoalValue('y');
                let l = 0;
                return (
                    i !== o && (0 === s.getPropGoalValue('x') && (i > o ? t++ : a++), (l = i > o ? t : a)),
                    { delay: e ? 0 : l * my, to: r, immediate: e, config: oy }
                );
            });
        }),
        h = ma(async (e, t = Yx) => {
            const a = e.filter((e) => {
                const t = u.current.getCard(e);
                return void 0 !== t && !t.visible;
            });
            if (!a.length) return;
            a.forEach((e) => {
                u.current.updateCard(e, { visible: !0 });
            });
            const n = Iy[t];
            await p((e) => n(e.id, a, u.current));
        }),
        g = ma((e, t = !0) => {
            var a;
            return !(t && !(null == (a = u.current.getCard(e)) ? void 0 : a.visible)) && u.current.isCardDisplaying(e);
        }),
        v = a.useMemo(
            () => ({
                registerCard: (e, t) => {
                    u.current.register(e, t);
                },
                unregisterCard: (e) => {
                    u.current.unregister(e);
                },
                updateCard: (e, t) => {
                    u.current.updateCard(e, t);
                },
                isVisible: (e) => {
                    var t;
                    return Boolean(null == (t = u.current.getCard(e)) ? void 0 : t.visible);
                },
                isUnmounting: (e) => {
                    var t;
                    return Boolean(null == (t = u.current.getCard(e)) ? void 0 : t.unmounting);
                },
                isDisplaying: g,
                findMaxVisibleRowsInGroup: (e) => u.current.findMaxVisibleRowsInGroup(e),
                applyLayout: _,
                appear: h,
                disappear: async (e) => {
                    (u.current.updateCard(e, { visible: !1 }),
                        await p((t) => {
                            if (e === t.id) return _y(t.settings.getPropGoalValue('x'));
                        }));
                },
                disappearGroups: async (e) => {
                    const t = [];
                    (e.forEach((e) => {
                        for (const a of u.current.getGroupCardIds(e)) t.push(a);
                    }),
                        t.forEach((e) => u.current.updateCard(e, { visible: !1, unmounting: !0 })),
                        await p((e) => {
                            const a = t.indexOf(e.id);
                            if (-1 !== a)
                                return { ..._y(e.settings.getPropGoalValue('x')), delay: my * (t.length - a) };
                        }));
                },
                updateBorders: m,
                readyForAnimations: d,
                enqueue: i,
            }),
            [g, _, h, m, i, p],
        );
    return (
        a.useEffect(() => {
            (u.current.updateWidgetConfig({ size: s, visibleRowsAmount: o }), _());
        }, [_, s, o]),
        a.useEffect(() => {
            d.current || ((d.current = !0), l());
        }),
        a.useEffect(
            () =>
                Ba(() => {
                    (u.current.clearCachedLayout(), _());
                }),
            [_],
        ),
        f.jsx(Gx.Provider, { value: v, children: f.jsx('div', { ref: c, children: e }) })
    );
}
const ky = Object.values({
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
    }).reduce((e, t) => ({ ...e, [t]: ba(t) }), {}),
    Sy = a.createContext(null);
function Py(e, t, a = e) {
    return e + '+' + t + '+' + a;
}
function Ey(e, t, ...a) {
    let n = e.current;
    if (0 == a.length) return !1;
    for (let s = 0; s < a.length - 1; s++) {
        const e = a[s];
        ((n[e] = n[e] ?? {}), (n = n[e]));
    }
    return ((n[a[a.length - 1]] = t), !0);
}
function My(e, ...t) {
    const a = (e, n) => {
        if (n === t.length) return Va(e);
        const s = t[n];
        return s in e && ((n === t.length - 1 || a(e[s], n + 1)) && delete e[s], Va(e));
    };
    return a(e.current, 0);
}
function Ly(e, ...t) {
    let a = e.current;
    return t.reduce((e, t) => (null == e ? void 0 : e[t]), a);
}
function Dy(e, ...t) {
    let a = e.current;
    return void 0 !== t.reduce((e, t) => (null == e ? void 0 : e[t]), a);
}
function Ty(e, t, a, n) {
    Object.entries(t).forEach(([t, s]) => {
        Va(s)
            ? Dy(a, e, t, e) && n(t, e)
            : Object.entries(s).forEach(([s, r]) => {
                  const o = s || e;
                  Dy(a, e, t, o) && n(t, o, r);
              });
    });
}
function Ay({ storage: e, id: t, emitter: a, providerCfg: n }) {
    Dy(e, t) || By({ id: t, emitter: a, providerCfg: n });
}
function By({ id: e, emitter: t, providerCfg: a }) {
    var n;
    const s = (null == a ? void 0 : a.triggerId) || e;
    (t.trigger(s, { id: e, ...(null == a ? void 0 : a.triggerParams) }),
        null == (n = null == a ? void 0 : a.triggerCallback) ||
            n.call(a, { id: e, ...(null == a ? void 0 : a.triggerParams) }));
}
function Vy({ sound: e, soundCfg: t }) {
    e && t && ('string' == typeof t ? e.play(t) : e.play(t.eventName, null == t ? void 0 : t.event));
}
function Oy({ children: e }) {
    const t = Oa(),
        n = a.useRef({}),
        s = a.useRef({}),
        r = a.useRef({}),
        o = Ra(),
        i = ma(({ id: e, animName: t, elementId: a = e }) => Dy(n, e, t, a)),
        l = ma((e, t, a = e) => {
            My(n, e, t, a);
        }),
        c = ma(({ id: e, animName: t, config: a, elementId: s = e }) => (Ey(n, a, e, t, s), () => l(e, t, s))),
        d = ma(({ id: e, animName: t, elementId: a = e, animCallParams: s, providerCfg: r, soundCfg: i }) => {
            const l = Ly(n, e, t, a);
            (l &&
                ((null == r ? void 0 : r.skip)
                    ? l.skip({ ...s, ...(null == r ? void 0 : r.animCallParams) })
                    : l.start({ ...s, ...(null == r ? void 0 : r.animCallParams) })),
                Vy({ sound: o, soundCfg: i }));
        }),
        u = ma(({ id: e, animName: a, elementId: n = e, providerCfg: r = {} }) => {
            const o = t.on(Py(e, a, n), () => {
                (My(s, e, a, n), Ay({ storage: s, id: e, emitter: t, providerCfg: r }), o());
            });
            Ey(s, !0, e, a, n);
        }),
        m = ma(({ complexId: e, id: a, animName: n, elementId: s = a, providerCfg: o }) => {
            const i = t.on(Py(a, n, s), () => {
                    (!(function ({
                        storage: e,
                        complexId: t,
                        groupId: a,
                        animName: n,
                        elementId: s,
                        emitter: r,
                        providerCfg: o,
                    }) {
                        let i = Ly(e, t, a, n);
                        i &&
                            (i.delete(s),
                            i.size || My(e, t, a, n),
                            Ay({ storage: e, id: t, emitter: r, providerCfg: o }));
                    })({ storage: r, complexId: e, groupId: a, animName: n, elementId: s, emitter: t, providerCfg: o }),
                        i());
                }),
                l = Ly(r, e, a, n);
            l ? l.add(s) : Ey(r, new Set().add(s), e, a, n);
        }),
        p = ma(({ groupId: e, groupCfg: a, providerCfg: r, soundCfg: i }) => {
            (My(s, e),
                (null == r ? void 0 : r.skip) ||
                    (null == r ? void 0 : r.skipTrigger) ||
                    Ty(e, a, n, (t, a) => {
                        u({ id: e, animName: t, elementId: a, providerCfg: r });
                    }),
                Ty(e, a, n, (t, a, n) => {
                    d({ id: e, animName: t, elementId: a, animCallParams: n, providerCfg: r });
                }),
                Vy({ sound: o, soundCfg: i }),
                (null == r ? void 0 : r.skip) &&
                    !(null == r ? void 0 : r.skipTrigger) &&
                    By({ id: e, emitter: t, providerCfg: r }));
        }),
        _ = ma(({ complexId: e, complexCfg: a, providerCfg: s, soundCfg: i }) => {
            if ((My(r, e), !(null == s ? void 0 : s.skip) && !(null == s ? void 0 : s.skipTrigger)))
                for (let [t, r] of Object.entries(a))
                    Ty(t, r, n, (a, n) => {
                        m({ complexId: e, id: t, animName: a, elementId: n, providerCfg: s });
                    });
            for (let [t, r] of Object.entries(a))
                Ty(t, r, n, (e, a, n) => {
                    d({ id: t, animName: e, elementId: a, animCallParams: n, providerCfg: s });
                });
            (Vy({ sound: o, soundCfg: i }),
                (null == s ? void 0 : s.skip) &&
                    !(null == s ? void 0 : s.skipTrigger) &&
                    By({ id: e, emitter: t, providerCfg: s }));
        }),
        h = a.useMemo(
            () => ({
                registerAnimation: c,
                unRegistrateAnimation: l,
                startAnimation: d,
                startGroupAnimation: p,
                startComplexAnimation: _,
                checkRegisteredInStorage: i,
                emitter: t,
            }),
            [i, t, c, d, _, p, l],
        );
    return f.jsx(Sy.Provider, { value: h, children: e });
}
const Ry = 'entryPoint',
    zy = new Map([
        ['battlePass', { position: 0 }],
        [Ry, { position: 1, adaptive: { [Jx]: { gap: 46 }, [Xx]: { gap: 46 } } }],
        ['battleQuests', { position: 2, adaptive: { [Jx]: { maxRowsAmount: 1 }, [Xx]: { maxRowsAmount: 3 } } }],
        [
            'missions',
            {
                position: 200,
                maxRowsAmount: 3,
                adaptive: { [Jx]: { gap: 36, maxRowsAmount: 1 }, [Xx]: { gap: 36, maxRowsAmount: 3 } },
            },
        ],
    ]);
const [$y, Hy] = B()(
        ({ observableModel: e }) => ({
            ...e.primitives(['isBattlePassActive', 'isAnyEntryPointAvailable', 'areMissionsActive']),
        }),
        ({ externalModel: e }) => ({
            onPresenterDisappear: e.createCallback((e) => ({ resId: e }), 'onPresenterDisappear'),
        }),
    ),
    [Fy, Wy] = B()(
        ({ observableModel: e }) => ({
            progressionState: e.object('progressionState'),
            currentProgressionStage: e.object('currentProgressionStage'),
        }),
        ({ externalModel: e }) => ({ openProgression: e.createCallbackNoArgs('onShowInfo') }),
    );
var qy = ((e) => (
    (e.CheckDataUpdate = 'checkDataUpdate'),
    (e.UpdateStageData = 'updateStageData'),
    (e.SwitchState = 'switchState'),
    e
))(qy || {});
const Zy = [wn.ACTIVE_RESETTABLE, wn.ACTIVE_FINAL],
    Uy = [wn.ACTIVE_INFINITE_RESETTABLE, wn.ACTIVE_INFINITE_FINAL],
    Gy = (e) => Zy.includes(e) || Uy.includes(e),
    Ky = (e) => Gy(e.status),
    Jy = (e) => !Gy(e.status),
    Xy = (e, t) => 'checkDataUpdate' === t.type && e.status !== t.status && eC(e, t),
    Qy = (e, t) => 'checkDataUpdate' === t.type && Zy.includes(e.status) && Uy.includes(t.status),
    Yy = (e, t) => 'checkDataUpdate' === t.type && (!e.crossProgressionEnabled || Uy.includes(e.status)),
    eC = (e, t) =>
        'checkDataUpdate' === t.type &&
        t.stage === e.stage &&
        t.currentPoints === e.currentPoints &&
        t.maximumPoints === e.maximumPoints &&
        0 === e.earnedPoints,
    tC = (e, t) =>
        'checkDataUpdate' === t.type &&
        Gy(t.status) &&
        ((1 === t.stage && 0 === t.currentPoints) ||
            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints) ||
            (Qy(e, t) && t.stage !== e.stage && e.currentPoints === e.maximumPoints)),
    aC = (e, t) =>
        'checkDataUpdate' === t.type &&
        t.stage === e.stage &&
        t.currentPoints === e.currentPoints &&
        t.maximumPoints === e.maximumPoints &&
        0 !== e.earnedPoints,
    nC = (e, t) =>
        'checkDataUpdate' === t.type &&
        (t.stage === e.stage || e.crossProgressionEnabled) &&
        t.currentPoints !== e.currentPoints &&
        t.maximumPoints === e.maximumPoints,
    sC = (e, t) =>
        'checkDataUpdate' === t.type &&
        (Qy(e, t) || (Yy(e, t) && t.stage > e.stage && e.currentPoints < e.maximumPoints)),
    rC = (e, t) => 'checkDataUpdate' === t.type && Yy(e, t) && t.stage > e.stage && e.currentPoints === e.maximumPoints,
    oC = (e, t) => 'checkDataUpdate' === t.type && t.stage < e.stage && e.currentPoints > 0,
    iC = (e, t) => 'updateStageData' === t.type && t.stage < e.stage && 0 === e.currentPoints,
    lC = (e, t) => 'checkDataUpdate' === t.type && e.status !== t.status && Gy(t.status),
    cC = (e, t) => {
        'updateStageData' === t.type && e.isSoundEnabled && 0 !== e.earnedPoints && za.sound('ev_fep_progress_bar');
    },
    dC = a.forwardRef(function (
        {
            children: e,
            id: t,
            groupId: n,
            position: s,
            isDisabled: r = !1,
            visible: o = !1,
            className: i,
            onMouseEnter: l,
            onMouseLeave: c,
            ...d
        },
        u,
    ) {
        const m = Kx(),
            [p, _] = N(() => ay),
            h = a.useRef(null),
            g = a.useRef(),
            v = a.useRef(null),
            x = ma((e) => {
                v.current && h.current && !r && m.updateBorders(e ? v.current : void 0);
            }),
            y = ma((e) => p[e].get()),
            C = ma((e) => p[e].goal),
            I = ma(async (e) => {
                await new Promise((t) => {
                    ((g.current = t),
                        Promise.all(_.start(e)).then(() => {
                            (t(), (g.current = void 0));
                        }));
                });
            });
        return (
            Ia(() => {
                m.registerCard(t, {
                    position: s,
                    groupId: n,
                    getPropValue: y,
                    getPropGoalValue: C,
                    startLayoutAnimation: I,
                    visible: o,
                });
            }),
            be(() => {
                var e;
                (null == (e = g.current) || e.call(g), m.unregisterCard(t));
            }),
            f.jsxs(w.div, {
                ...d,
                style: { ...p, pointerEvents: p.opacity.to((e) => (1 === e ? 'auto' : 'none')) },
                className: b(yy, !r && Ny, i),
                ref: ka([u, h]),
                onMouseEnter: (e) => {
                    (x(!0), null == l || l(e));
                },
                onMouseLeave: (e) => {
                    (x(!1), null == c || c(e));
                },
                children: [f.jsx('div', { className: wy }), e, f.jsx('div', { className: Cy, 'data-id': t, ref: v })],
            })
        );
    }),
    uC = {
        root: 'ProgressionBanner_root_c156c1b2',
        background: 'ProgressionBanner_background_2633bd4',
        base: 'ProgressionBanner_7753ce5b',
        icon: 'ProgressionBanner_icon_66a852c4',
        label: 'ProgressionBanner_label_52066e64',
        contentWrapper: 'ProgressionBanner_contentWrapper_bf83fa5b',
        activeWrapper: 'ProgressionBanner_activeWrapper_93460d2b',
        base__completedResettable: 'ProgressionBanner_base__completedResettable_c156c1b2',
        base__completedFinal: 'ProgressionBanner_base__completedFinal_c156c1b2',
        base__disabled: 'ProgressionBanner_base__disabled_c156c1b2',
        completeWrapper: 'ProgressionBanner_completeWrapper_b614096',
        progress: 'ProgressionBanner_progress_34067866',
        progressValue: 'ProgressionBanner_progressValue_ba901688',
        progressStepValue__done: 'ProgressionBanner_progressStepValue__done_980a3f57',
        progressStepValue__max: 'ProgressionBanner_progressStepValue__max_971ce2a3',
        progressStepValue__maxInfinite: 'ProgressionBanner_progressStepValue__maxInfinite_551a4986',
        resettable: 'ProgressionBanner_resettable_23eaae4c',
        finish: 'ProgressionBanner_finish_7b6b68a0',
        descriptionText: 'ProgressionBanner_descriptionText_b39e68e',
        descriptionText__resettable: 'ProgressionBanner_descriptionText__resettable_c12bc333',
        descriptionText__finish: 'ProgressionBanner_descriptionText__finish_7c5e50a3',
        completedIcon: 'ProgressionBanner_completedIcon_d756e393',
        progressBar: 'ProgressionBanner_progressBar_24d3b4d2',
        progressBarBackgroundPattern: 'ProgressionBanner_progressBarBackgroundPattern_47c9180e',
        progressBarFillStart: 'ProgressionBanner_progressBarFillStart_d4ef7ceb',
        progressBarBackground: 'ProgressionBanner_progressBarBackground_89f699b9',
        delta: 'ProgressionBanner_delta_c270fcd5',
        pulse: 'ProgressionBanner_pulse_c156c1b2',
    };
function mC({ assetsPointer: e }) {
    const { dynamicTexts: t } = xn(null, { assetsPointer: e });
    return f.jsxs('div', {
        className: uC.finish,
        children: [
            f.jsx('div', { className: uC.completedIcon }),
            f.jsx($a, {
                className: b(uC.descriptionText, uC.descriptionText__finish),
                text: t.banner.progression.finish(),
            }),
        ],
    });
}
function pC({
    currentPoints: e,
    maximumPoints: t,
    earnedPoints: n,
    currentStage: s,
    status: r,
    handleEndAnimation: o,
}) {
    const i = r === wn.ACTIVE_INFINITE_RESETTABLE || r === wn.ACTIVE_INFINITE_FINAL,
        l = i ? s : e,
        c = i ? '' : t,
        d = i ? 'Infinite' : '',
        u = ge(e),
        m = i && (u || 0) > e,
        p = a.useMemo(
            () => ({ config: { duration: 1600, easing: Ha.easeInCubic }, delay: 80, onRest: () => o() }),
            [o],
        );
    return f.jsxs('div', {
        className: uC.progress,
        children: [
            f.jsx($a, {
                className: uC.progressValue,
                text: R.strings.fun_random.banner.progression.steps(),
                upgradeLegacy: !0,
                params: {
                    done: f.jsx('span', { className: uC.progressStepValue__done, children: l }),
                    total: f.jsx('span', { className: uC[`progressStepValue__max${d}`], children: c }),
                },
            }),
            f.jsxs(Fa, {
                size: 'small',
                className: uC.progressBar,
                classNames: {
                    background: uC.progressBarBackground,
                    backgroundPattern: uC.progressBarBackgroundPattern,
                },
                filledClassNames: { pattern: uC.progressBarBackgroundPattern },
                value: e,
                maxValue: t,
                children: [
                    f.jsx('div', { className: uC.progressBarFillStart }),
                    f.jsx(Wa, {
                        animationEnabled: !m,
                        initValue: e - n,
                        initMaxValue: t,
                        animationProps: p,
                        className: uC.delta,
                    }),
                ],
            }),
        ],
    });
}
function _C({ timeLeft: e, assetsPointer: t }) {
    const { dynamicTexts: a } = xn(null, { assetsPointer: t });
    return f.jsxs('div', {
        className: uC.resettable,
        children: [
            f.jsx($a, {
                className: b(uC.descriptionText, uC.descriptionText__resettable),
                text: a.banner.progression.resettable(),
            }),
            f.jsx(qa, { start: e, format: qa.format.default, type: qa.type.accent }),
        ],
    });
}
const hC = ee.resolve('aliases'),
    gC = ee.resolve('views'),
    vC = hC.read((e) => e.fun_random.shared.ProgressionEntryPoint('resId')),
    fC = gC.read((e) => e.fun_random.mono.lobby.tooltips.progression_tooltip('resId')),
    bC = j(() => {
        var e;
        const { model: t, controls: n } = Wy(),
            { status: s, currentStage: r, statusTimer: o } = t.progressionState.get(),
            { currentPoints: i, maximumPoints: l } = t.currentProgressionStage.get(),
            c = jm().model.assetsPointer.get(),
            d = Ux(),
            { play: u } = fe(),
            [m, p] = a.useState(s),
            _ = (e) => p(e);
        a.useEffect(() => {
            s !== m && Gy(s) && p(s);
        }, [s, m]);
        const h = a.useMemo(() => {
                return (
                    (e = 300),
                    (t = _),
                    L(
                        {
                            preserveActionOrder: !0,
                            id: 'fun-card-fsm',
                            initial: 'init',
                            context: {
                                status: s,
                                stage: r,
                                currentPoints: i,
                                maximumPoints: l,
                                earnedPoints: 0,
                                isSoundEnabled: !1,
                                crossProgressionEnabled: !0,
                            },
                            states: {
                                init: { always: { target: 'updateState' } },
                                updateState: {
                                    always: [
                                        { target: 'active', cond: Ky },
                                        { target: 'nonActive', cond: Jy },
                                    ],
                                },
                                active: {
                                    on: {
                                        checkDataUpdate: [
                                            {
                                                target: 'active',
                                                actions: [D((e, t) => ({ type: 'switchState', status: t.status }))],
                                                cond: Xy,
                                            },
                                            { target: 'active', cond: eC },
                                            {
                                                target: 'updateState',
                                                actions: [
                                                    T({
                                                        status: (e, t) => t.status,
                                                        stage: (e, t) => t.stage,
                                                        currentPoints: (e, t) => t.currentPoints,
                                                        maximumPoints: (e, t) => t.maximumPoints,
                                                        earnedPoints: 0,
                                                    }),
                                                    () => (null == a ? void 0 : a()),
                                                ],
                                                cond: tC,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    D((e) => ({
                                                        type: 'updateStageData',
                                                        stage: e.stage,
                                                        currentPoints: e.maximumPoints,
                                                        maximumPoints: e.maximumPoints,
                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                    })),
                                                ],
                                                cond: sC,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    D((e, t) => ({
                                                        type: 'updateStageData',
                                                        stage: t.stage,
                                                        currentPoints: 0,
                                                        maximumPoints: t.maximumPoints,
                                                        earnedPoints: 0,
                                                    })),
                                                    () => (null == a ? void 0 : a()),
                                                    D(
                                                        (e, t) => ({
                                                            type: 'updateStageData',
                                                            stage: t.stage,
                                                            currentPoints: t.currentPoints,
                                                            maximumPoints: t.maximumPoints,
                                                            earnedPoints: t.currentPoints,
                                                        }),
                                                        { delay: e },
                                                    ),
                                                ],
                                                cond: rC,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    D((e, t) => ({
                                                        type: 'updateStageData',
                                                        stage: t.stage,
                                                        currentPoints: t.currentPoints,
                                                        maximumPoints: e.maximumPoints,
                                                        earnedPoints: t.currentPoints - e.currentPoints,
                                                    })),
                                                ],
                                                cond: nC,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    D((e) => ({
                                                        type: 'updateStageData',
                                                        stage: e.stage,
                                                        currentPoints: e.currentPoints,
                                                        maximumPoints: e.maximumPoints,
                                                        earnedPoints: 0,
                                                    })),
                                                    D((e, t) => ({ type: 'switchState', status: t.status })),
                                                ],
                                                cond: aC,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    D((e) => ({
                                                        type: 'updateStageData',
                                                        stage: e.stage,
                                                        currentPoints: 0,
                                                        maximumPoints: e.maximumPoints,
                                                        earnedPoints: -e.currentPoints,
                                                    })),
                                                ],
                                                cond: oC,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    D((e, t) => ({
                                                        type: 'updateStageData',
                                                        stage: t.stage,
                                                        currentPoints: t.currentPoints,
                                                        maximumPoints: t.maximumPoints,
                                                        earnedPoints: t.currentPoints - t.maximumPoints,
                                                    })),
                                                    () => (null == a ? void 0 : a()),
                                                ],
                                                cond: iC,
                                            },
                                        ],
                                        updateStageData: {
                                            target: 'active',
                                            actions: [
                                                T({
                                                    stage: (e, t) => t.stage,
                                                    currentPoints: (e, t) => t.currentPoints,
                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                    earnedPoints: (e, t) => t.earnedPoints,
                                                }),
                                                cC,
                                            ],
                                        },
                                        switchState: {
                                            target: 'updateState',
                                            actions: [(e, a) => t(a.status), T({ status: (e, t) => t.status })],
                                        },
                                    },
                                },
                                nonActive: {
                                    on: {
                                        checkDataUpdate: {
                                            target: 'updateState',
                                            actions: [
                                                T({
                                                    status: (e, t) => t.status,
                                                    stage: (e, t) => t.stage,
                                                    currentPoints: (e, t) => t.currentPoints,
                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                    earnedPoints: 0,
                                                }),
                                                () => (null == a ? void 0 : a()),
                                            ],
                                            cond: lC,
                                        },
                                        switchState: {
                                            target: 'updateState',
                                            actions: T({ status: (e, t) => t.status }),
                                        },
                                    },
                                },
                            },
                        },
                        {
                            guards: {
                                hasActiveStatus: Ky,
                                hasNonActiveStatus: Jy,
                                isSwitchToInfinite: Qy,
                                isStatusUpdate: Xy,
                                isTaskSwitchingUpdate: tC,
                                isNoUpdate: eC,
                                isUpdateCurrentStageWithZeroEarnPoints: aC,
                                isUpdateCurrentStageWithCurrentPoints: nC,
                                isUpdateToNextStageWithoutFillMax: rC,
                                isUpdateToNextStageWithFillMax: sC,
                                isUpdateToPrevStageWithReset: oC,
                                isUpdateToPrevStageWithoutReset: iC,
                                isUpdateWithActiveSwitch: lC,
                            },
                        },
                    )
                );
                var e, t, a;
            }, []),
            [g, v] = A(h),
            { containerRef: x, tooltipProps: y } = ((e) => {
                const t = (null == e ? void 0 : e.showDelay) || 400,
                    n = a.useRef({ ...e.args }),
                    s = a.useRef(null),
                    r = gt(),
                    o = Se({ ...e, showDelay: 0, args: n.current });
                return {
                    containerRef: s,
                    tooltipProps: {
                        ...o,
                        onMouseEnter: (a) => {
                            r.run(() => {
                                var t;
                                if (s.current) {
                                    const a = s.current.getBoundingClientRect(),
                                        r = null == (t = s.current.parentElement) ? void 0 : t.getBoundingClientRect();
                                    (Object.assign(n.current, e.args),
                                        (n.current.positionY = Math.floor(Aa(a.y)) - 13),
                                        (n.current.positionX = Math.floor(Aa((null == r ? void 0 : r.x) || a.x)) - 10));
                                }
                                o.onMouseEnter(a);
                            }, t);
                        },
                        onMouseLeave: () => {
                            (r.clear(), o.onMouseLeave());
                        },
                    },
                };
            })({ resId: vC, contentId: fC, disabled: g.context.status === wn.DISABLED });
        a.useEffect(() => {
            v({ type: qy.CheckDataUpdate, status: s, stage: r, currentPoints: i, maximumPoints: l });
        }, [s, i, l, r, v]);
        const C = a.useCallback(() => {
                v({ type: qy.CheckDataUpdate, status: s, stage: r, currentPoints: i, maximumPoints: l });
            }, [i, l, r, s, v]),
            w = g.context.status === wn.COMPLETED_FINAL;
        return f.jsxs(dC, {
            ...y,
            position: 0,
            id: 'entryPoint',
            groupId: Ry,
            className: b(uC.base, uC[`base__${m}`]),
            ref: x,
            onClick: () => {
                (u('click'), n.openProgression());
            },
            onMouseEnter: (e) => {
                (u('mouse-enter'), y.onMouseEnter(e));
            },
            onMouseLeave: y.onMouseLeave,
            visible: !0,
            children: [
                f.jsx('div', {
                    className: uC.background,
                    style: {
                        backgroundImage: `url('${null == (e = yn(c)) ? void 0 : e.progression.banner.$dyn(d ? 'bg_small' : 'bg_big')}')`,
                    },
                }),
                !w && f.jsx('div', { className: uC.icon }),
                f.jsxs('div', {
                    className: uC.contentWrapper,
                    children: [
                        Gy(g.context.status) &&
                            f.jsx('div', {
                                className: uC.activeWrapper,
                                children: f.jsx(pC, {
                                    currentPoints: g.context.currentPoints,
                                    maximumPoints: g.context.maximumPoints,
                                    earnedPoints: g.context.earnedPoints,
                                    currentStage: g.context.stage,
                                    status: g.context.status,
                                    handleEndAnimation: C,
                                }),
                            }),
                        f.jsxs('div', {
                            className: uC.completeWrapper,
                            children: [
                                g.context.status === wn.COMPLETED_RESETTABLE &&
                                    f.jsx(_C, { timeLeft: o, assetsPointer: c }),
                                w && f.jsx(mC, { assetsPointer: c }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    xC = { rootId: ee.resolve('aliases').read((e) => e.fun_random.shared.ProgressionEntryPoint('resId')) };
function yC() {
    return f.jsx(Fy, { options: xC, children: f.jsx(bC, {}) });
}
const CC = 'HangarWidget_3b2c10a',
    wC = ee.resolve('aliases'),
    NC = j(({ className: e }) => {
        const { controls: t } = Hy(),
            n = (function (e) {
                const t = Kx(),
                    n = a.useRef([]),
                    s = a.useRef(!1),
                    [r, o] = a.useState(e);
                return (
                    a.useEffect(() => {
                        Q.shallow(r, e) || n.current.push(e);
                    }),
                    a.useEffect(() => {
                        if (s.current) return;
                        const e = n.current.shift();
                        if (!e) return;
                        s.current = !0;
                        const a = _a(
                            Object.entries(e),
                            ([e, t]) => r[e] && !t,
                            ([e]) => e,
                        );
                        t.enqueue(async () => {
                            a.length && (await t.disappearGroups(a), await t.applyLayout(!1));
                        }).then(() => {
                            ((s.current = !1), o(e));
                        });
                    }),
                    r
                );
            })({ [Ry]: !0 }),
            s = a.useMemo(
                () => ({ [wC.read((e) => e.fun_random.shared.ProgressionEntryPoint('resId'))]: n.entryPoint }),
                [n.entryPoint],
            ),
            r = a.useRef(s);
        return (
            a.useEffect(() => {
                const e = r.current;
                (Object.keys(s).forEach((a) => {
                    !s[a] && e[a] && t.onPresenterDisappear(a);
                }),
                    (r.current = s));
            }, [t, s]),
            f.jsx('div', { className: b(CC, e), children: n.entryPoint && f.jsx(yC, {}) })
        );
    }),
    IC = { rootId: ee.resolve('aliases').read((e) => e.fun_random.shared.UserMissions('resId')) },
    jC = ({ className: e }) => {
        const t = Ux();
        return f.jsx(Za, {
            soundsOverrides: ky,
            children: f.jsx(Ua, {
                children: f.jsx(Oy, {
                    children: f.jsx(jy, {
                        groups: zy,
                        maxVisibleRowsAmount: t ? 4 : 6,
                        children: f.jsx($y, { options: IC, children: f.jsx(NC, { className: e }) }),
                    }),
                }),
            }),
        });
    },
    kC = 'HangarScreen_261a5d2',
    SC = 'HangarScreen_sceneWrapper_c15ed7d7',
    PC = 'HangarScreen_vignette_50c67f89',
    EC = 'HangarScreen_widgetsSection_1a2843a4',
    MC = 'HangarScreen_hangarPage_51660504',
    LC = 'HangarScreen_mainMenu_4e4165cc',
    DC = 'HangarScreen_userMissions_bb6a847f',
    TC = ee.resolve('aliases'),
    AC = { rootId: TC.read((e) => e.hangar.shared.MainMenu('resId')) },
    BC = TC.read((e) => e.hangar.shared.HeroTank('resId')),
    VC = TC.read((e) => e.hangar.shared.PetObjectTooltip('resId')),
    OC = j(function () {
        const e = As().model.current.intCD.get(),
            t = jm().model.hasSuitableVehicles.get(),
            a = -1 !== e,
            n = jm().model.assetsPointer.get(),
            s = kn().model.modeId.get();
        return f.jsxs('div', {
            className: kC,
            children: [
                f.jsx(qt, { id: BC, children: f.jsx(Db, {}) }),
                f.jsx(qt, { id: VC, children: f.jsx(xx, { options: { rootId: VC }, children: f.jsx(kx, {}) }) }),
                f.jsx('div', { className: PC }),
                f.jsx(ux, { className: SC }),
                f.jsxs('div', {
                    className: MC,
                    children: [
                        f.jsxs('div', {
                            className: EC,
                            children: [t ? f.jsx(Zx, {}) : f.jsx(Lx, {}), a && f.jsx(bx, {})],
                        }),
                        f.jsx(dx, { className: LC, options: AC, battleTypesPath: 'fun_random' === s ? Cn(n) : void 0 }),
                        f.jsx(Je, { children: f.jsx(jC, { className: DC }) }),
                    ],
                }),
            ],
        });
    }),
    RC = 'ConfirmationPanel_afa99a14',
    zC = 'ConfirmationPanel_currencies_7544112d',
    $C = 'ConfirmationPanel_plus_335af158',
    HC = 'ConfirmationPanel_buttons_ad07fa9b',
    FC = (e) => e > 0,
    WC = Pe('LeftBlock', 'ConfirmationPanel_leftBlock_798f4c44'),
    qC = Pe('Currencies', zC),
    ZC = Pe('Buttons', HC),
    UC = Pe('ConfirmationPanel', RC);
function GC(e) {
    return f.jsx(qC, {
        className: e.className,
        children: a.Children.map(e.children, (e, t) =>
            f.jsxs(f.Fragment, { children: [FC(t) && f.jsx('div', { className: $C }), e] }),
        ),
    });
}
UC.Left = WC;
const KC = 'DealPanel_leftBlock_e9fb0b4a',
    JC = 'DealPanel_leftBlock__active_53e6aee9',
    XC = 'DealPanel_checkbox_c6267a54',
    QC = 'DealPanel_checkbox__active_edd6c82d',
    YC = 'DealPanel_checkboxLabel_7df5996',
    ew = 'DealPanel_icon_f0ce4668',
    tw = 'DealPanel_value_438c7871',
    aw = 'DealPanel_buttonWrapper_e6c7f6fe',
    nw = 'DealPanel_button_d186abe4',
    sw = 'DealPanel_buttonContent_25d6c73c';
function rw(e, t) {
    return t === Da.gold ? Ze.formatNumber('gold', e) : Ze.formatNumber('integral', e);
}
const ow = a.memo(function ({ type: e, price: t }) {
        const a = Bt({ value: Ve.small }, { large: { value: Ve.medium } }),
            n = $e({
                body: ee.resolve('strings').readOrEmpty(`tank_setup.dealPanel.tooltip.purchasedWith.${t.currency}`),
            });
        return f.jsxs(Re, {
            ...n,
            reverse: !0,
            type: e ?? 'formattedCurrency',
            size: a.value,
            classNames: { icon: ew, base: tw },
            enough: t.enough,
            children: [
                void 0 === e &&
                    f.jsx(ke, {
                        className: ew,
                        path: `library.currency.${t.currency}_${Ga[a.value]}x${Ga[a.value]}`,
                        width: Ga[a.value],
                        height: Ga[a.value],
                    }),
                rw(t.value, e),
            ],
        });
    }),
    iw = ee.resolve('strings'),
    lw = 'general',
    cw = 'repair';
const dw = { [Om]: 'boosters', [Rm]: 'shells', [zm]: 'consumables' },
    uw = C(function ({ type: e, className: t }) {
        const n = Bt({ value: Na.small }, { large: { value: Na.medium } }),
            { model: s, controls: r } = Tp(),
            { model: o, controls: i } = Fp(),
            { model: l, controls: c } = zp(),
            { model: d, controls: u } = Kp(),
            { controls: m, model: p } = (() => {
                switch (e) {
                    case Vm:
                        return { controls: c, model: l };
                    case Om:
                        return { controls: i, model: o };
                    case zm:
                        return { controls: r, model: s };
                    case Rm:
                        return { controls: u, model: d };
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
            _ = $e({ body: iw.readOrEmpty('tank_setup.dealPanel.tooltip.notEnough') }),
            h = dw[e],
            g = $e(
                a.useMemo(
                    () =>
                        h === cw
                            ? {
                                  header: iw.readOrEmpty(`tank_setup.tooltip.autoRenewal.header.${h}`),
                                  body: iw.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${h}`),
                              }
                            : h && h !== lw
                              ? {
                                    header: iw.readOrEmpty('tank_setup.tooltip.autoRenewal.header.general'),
                                    body: iw.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${h}`),
                                }
                              : {
                                    header: iw.readOrEmpty('tank_setup.tooltip.autoRenewal.header.general'),
                                    body: void 0,
                                },
                    [h],
                ),
            ),
            v = p ? p.computes.dealData() : null,
            x = !!p && (v.canConfirm || v.prices.length > 0),
            y = ge(x),
            C = void 0 !== h,
            w = fe();
        return (
            a.useEffect(() => {
                (x && !1 === y && w.play('expand', { target: 'loadout:deal-panel' }),
                    x || !0 !== y || w.play('collapse', { target: 'loadout:deal-panel' }));
            }, [w, x, y]),
            p && v
                ? f.jsxs(UC, {
                      className: t,
                      children: [
                          f.jsx(wa, {
                              ...(C && g),
                              className: b(XC, h && QC),
                              classNames: { label: YC },
                              checked: C && v.autoRenewalEnabled,
                              size: n.value,
                              onCheckedChange: m.toggleAutoRenewal,
                              children: iw.readOrEmpty('tank_setup.dealPanel.autoRenew'),
                          }),
                          f.jsxs(UC.Left, {
                              className: b(KC, x && JC),
                              children: [
                                  f.jsx(GC, {
                                      children: v.prices.map((e, t) => {
                                          const a = (function (e) {
                                              if (e && Ja.includes(e)) return e;
                                          })(e.currency);
                                          return f.jsx(ow, { type: a, price: e }, t);
                                      }),
                                  }),
                                  f.jsxs(ZC, {
                                      children: [
                                          f.jsx('div', {
                                              ...(v.disabled && _),
                                              className: aw,
                                              children: f.jsx(ut, {
                                                  className: nw,
                                                  classNames: { content: sw },
                                                  disabled: (!v.canConfirm || v.disabled) && x,
                                                  onClick: m.confirm,
                                                  theme: Ka.primary,
                                                  size: n.value,
                                                  'data-test-id': 'dealPanelApply',
                                                  children: iw.readOrEmpty('tank_setup.dealPanel.button.apply'),
                                              }),
                                          }),
                                          f.jsx('div', {
                                              className: aw,
                                              children: f.jsx(ut, {
                                                  className: nw,
                                                  classNames: { content: sw },
                                                  disabled: !v.canCancel,
                                                  onClick: m.cancel,
                                                  theme: Ka.secondary,
                                                  size: n.value,
                                                  'data-test-id': 'dealPanelCancel',
                                                  soundTarget: 'loadout:deal-panel:cancel_button',
                                                  children: iw.readOrEmpty('tank_setup.dealPanel.button.cancel'),
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
    mw = 'Counter_20fd03c5',
    pw = 'Counter_current_2e9b96d1',
    _w = 'Counter_total_7d9a1992';
function hw({ current: e, total: t, className: a }) {
    const n = ee.resolve('intl');
    return f.jsx(je, {
        className: b(mw, a),
        path: 'common.progress',
        upgradeLegacy: !0,
        split: !0,
        params: {
            current: f.jsx('span', { className: pw, children: n.formatNumber('integral', e) }),
            total: f.jsx('span', { className: _w, children: n.formatNumber('integral', t) }),
        },
    });
}
const gw = 'Depot_dots_e22e1616',
    vw = 'Depot_17898b99',
    fw = 'Depot_value_929a2cc5',
    bw = 'Depot_value__name_243cc0f1',
    xw = 'Depot_value__count_c6469680',
    yw = 'Depot_valueContainer_7c59dac8',
    Cw = 'Depot_slash_13b22cce',
    ww = ee.resolve('strings'),
    Nw = ({ inDepotCount: e, itemsInVehicle: t }) => {
        const a = t >= 0;
        return f.jsxs('div', {
            className: vw,
            children: [
                f.jsxs('div', {
                    className: b(fw, bw),
                    children: [
                        f.jsx(lt, { text: ww.readOrEmpty('tank_setup.shells.specification.inStorage') }),
                        a &&
                            f.jsxs(f.Fragment, {
                                children: [
                                    ' ',
                                    f.jsx(je, { path: 'common.common.slash' }),
                                    ' ',
                                    f.jsx(lt, { text: ww.readOrEmpty('tank_setup.shells.specification.inVehicle') }),
                                    f.jsx('div', { className: yw }),
                                ],
                            }),
                    ],
                }),
                f.jsx('div', { className: gw }),
                f.jsxs('div', {
                    className: b(fw, xw),
                    children: [
                        e,
                        a &&
                            f.jsxs(f.Fragment, {
                                children: [' ', f.jsx(je, { path: 'common.common.slash', className: Cw }), ' ', t],
                            }),
                    ],
                }),
            ],
        });
    },
    Iw = 'Properties_dots_1fc83e37',
    jw = 'Properties_info_b62adb3a',
    kw = 'Properties_metric_269f11b0',
    Sw = 'Properties_value_a40606f7',
    Pw = 'Properties_name_fc42a225',
    Ew = 'Properties_truncatedName_d7486b0e',
    Mw = ee.resolve('strings'),
    Lw = C(function ({ properties: e }) {
        return f.jsx(v.Fragment, {
            children: ue(e, (e, t) =>
                f.jsx(
                    v.Fragment,
                    {
                        children:
                            e.value &&
                            f.jsxs('div', {
                                className: jw,
                                children: [
                                    f.jsxs('div', {
                                        className: Pw,
                                        children: [
                                            f.jsx(lt, {
                                                className: Ew,
                                                text: Mw.readOrEmpty(`menu.tank_params.${e.paramName}`),
                                            }),
                                            f.jsx('div', { className: kw, children: e.metricValue }),
                                        ],
                                    }),
                                    f.jsx('div', { className: Iw }),
                                    f.jsx('div', { className: Sw, children: e.value }),
                                ],
                            }),
                    },
                    t,
                ),
            ),
        });
    }),
    Dw = 'Purchase_dots_92cddd3b',
    Tw = 'Purchase_d6025d4f',
    Aw = 'Purchase_name_ebddecd',
    Bw = 'Purchase_truncatedName_374c53e5',
    Vw = 'Purchase_price_fd7d4ed5',
    Ow = 'Purchase_result_d6c831a6',
    Rw = 'Purchase_value_98e07fc3',
    zw = 'Purchase_value__noPurchase_50a115b4',
    $w = 'Purchase_sign_28802c61',
    Hw = 'Purchase_sign__multiplier_c1c45705',
    Fw = 'Purchase_sign__equals_ad1fc9f4',
    Ww = 'Purchase_discountWrapper_d6cbd188',
    qw = 'Purchase_discountWrapper__withoutDiscount_cd9710d2',
    Zw = 'Purchase_icon_ae94fc41',
    Uw = 'Purchase_icon__currency_9e808070',
    Gw = 'Purchase_icon__withDiscount_b0aaff0',
    Kw = ee.resolve('strings'),
    Jw = C(({ shell: e }) => {
        const { boughtCount: t, totalPrice: n, price: s, itemPrice: r } = e,
            o = e.price.previousPrice[0],
            i = void 0 !== o,
            l = Bt({ value: Ve.extraSmall }, { extraLarge: { value: Ve.small } }),
            c = a.useMemo(() => (r && o ? [r.value, o.value, r.currency] : void 0), [r, o]),
            d = a.useMemo(() => ({ disabled: !i }), [i]),
            u = He('priceDiscount', c, d);
        return f.jsxs('div', {
            className: Tw,
            children: [
                f.jsx('div', {
                    className: Aw,
                    children: f.jsx(lt, {
                        className: Bw,
                        text: Kw.readOrEmpty('tank_setup.shells.specification.price'),
                    }),
                }),
                f.jsx('div', { className: Dw }),
                f.jsxs('div', {
                    className: Ow,
                    children: [
                        f.jsx('div', { className: b(Rw, zw), children: t }),
                        f.jsx('div', { className: b($w, Hw), children: f.jsx(je, { path: 'common.multiplierSmall' }) }),
                        f.jsxs('div', {
                            ...u,
                            className: Vw,
                            children: [
                                s.price.map((e, t) =>
                                    f.jsx(
                                        Be,
                                        {
                                            type: Oe.currency,
                                            enabled: i,
                                            size: l.value,
                                            classNames: { base: b(Ww, !i && qw), discount: b(Zw, i && Gw) },
                                            children: f.jsx(Re, {
                                                reverse: !0,
                                                size: Ve.small,
                                                classNames: { base: Rw, icon: b(Zw, Uw) },
                                                type: e.currency,
                                                enough: e.enough,
                                                children: e.value,
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                                f.jsx('div', {
                                    className: b($w, Fw),
                                    children: f.jsx(je, { path: 'readable_key_names.KEY_EQUALS' }),
                                }),
                            ],
                        }),
                        t > 0
                            ? n.price.map((e, t) =>
                                  f.jsx(
                                      Re,
                                      {
                                          reverse: !0,
                                          size: Ve.small,
                                          classNames: { base: Rw, icon: b(Zw, Uw) },
                                          type: e.currency,
                                          enough: e.enough,
                                          children: e.value,
                                      },
                                      t,
                                  ),
                              )
                            : f.jsx(Re, {
                                  reverse: !0,
                                  size: Ve.small,
                                  classNames: { base: b(Rw, zw), icon: b(Zw, Uw) },
                                  type: Da.credits,
                                  children: 0,
                              }),
                    ],
                }),
            ],
        });
    }),
    Xw = 'Shell_fullArea_7aaeeab0',
    Qw = 'Shell_controls_fbdd51bb',
    Yw = 'Shell_dc4438ed',
    eN = 'Shell_mainInfo_cf4a5ca0',
    tN = 'Shell_icon_5ea0be74',
    aN = 'Shell_counter_ce287a95',
    nN = 'Shell_counter__dimmed_42079d5d',
    sN = 'Shell_name_2544fef6',
    rN = 'Shell_grow_fa2782e5',
    oN = 'Shell_detailedInfo_5686c3ac',
    iN = 'Shell_slider_4d24fb7c',
    lN = ee.resolve('aliases'),
    cN = ee.resolve('images'),
    dN = ee.resolve('strings'),
    uN = ee.resolve('intl'),
    mN = 'big',
    pN = 'large',
    _N = Pe('Shell', Yw),
    hN = C(({ value: e, index: t }) => {
        const { model: n, controls: s } = Kp(),
            r = n.ammoMaxSize.get() - n.installedCount.get() + e.count,
            o = uN.toUpperCase(dN.readOrEmpty(`item_types.shell.kinds.${e.kind}`)),
            i = He(
                'hangarShell',
                a.useMemo(() => [e.intCD], [e.intCD]),
            ),
            l = Ke(
                'tankSetupShellItem',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: Lm,
                        fieldType: 0,
                        installedSlotId: t,
                        itemInstalledSetupIdx: e.itemInstalledSetupIndex,
                        itemInstalledSetupSlotIdx: t,
                        isMounted: e.mountedState !== Wp.notMounted,
                        isMountedMoreThanOne: e.mountedState === Wp.mountedMoreThanOne,
                        emitterUID: window.subViews.get(lN.read((e) => e.hangar.shared.Shells('resId'))).uid,
                    }),
                    [t, e.intCD, e.itemInstalledSetupIndex, e.mountedState],
                ),
            ),
            c = Bt({ value: mN }, { large: { value: pN } }),
            d = Bt({ value: Xa.small }, { medium: { value: Xa.medium } }),
            u = a.useCallback((e, t) => (console.log(e, t), s.updateShellCount(e, t)), [s]);
        return f.jsxs(_N, {
            children: [
                f.jsxs('div', {
                    ...i,
                    ...l,
                    className: eN,
                    children: [
                        f.jsx('div', {
                            className: tN,
                            style: { backgroundImage: `url(${cN.readOrEmpty(`shell.${c.value}.${e.type}`)})` },
                        }),
                        f.jsx('div', { className: b(aN, 0 === e.count && nN), children: e.count }),
                        f.jsx('div', { className: sN, children: o }),
                    ],
                }),
                f.jsxs(Qa, {
                    step: n.clip.get(),
                    className: iN,
                    value: e.count,
                    maxValue: n.ammoMaxSize.get(),
                    limit: r,
                    size: d.value,
                    onValueChange: (t) => u(e.intCD, t),
                    children: [
                        d.value === Xa.medium && f.jsx(Qa.Controls, { className: Qw }),
                        f.jsx(Qa.LimitationArea, { className: Xw }),
                        f.jsx(Qa.Thumb, {}),
                        f.jsx(Qa.InteractiveArea, { className: Xw }),
                    ],
                }),
                f.jsxs('div', {
                    className: oN,
                    children: [
                        f.jsx(Lw, { properties: e.propertiesList }),
                        f.jsx('div', { className: rN }),
                        f.jsx(Nw, { inDepotCount: e.inDepotCount, itemsInVehicle: e.itemsInVehicle }),
                        f.jsx(Jw, { shell: e }),
                    ],
                }),
            ],
        });
    }),
    gN = 'ShellTransition_e18df2a',
    vN = C(function ({ index: e, intCD: t, swapping: n, onAnimationEnd: s, onSwappingEnd: r, leftID: o }) {
        const [i, l] = a.useState(!1),
            { model: c } = Kp(),
            d = c.computes.shellByIntCD(t),
            u = ge(null == d ? void 0 : d.intCD),
            m = o === e;
        a.useEffect(() => {
            u && u !== t && c.computes.shellExist(u) && l(!0);
        }, [t, u, c.computes]);
        const p = x({
            transform: n ? `translateX(${i ? (m ? 60 : -60) : 0}rem)` : 'translateX(0rem)',
            config: { duration: 200 },
            onRest: () => {
                n ? (r(), l(!1)) : s();
            },
        });
        if (d) return f.jsx(y.div, { className: gN, style: p, children: f.jsx(hN, { value: d, index: e }) });
    }),
    fN = 'SwapButton_20088d5c',
    bN = 'SwapButton_icon_cd2823d0';
function xN({ index: e, onSwap: t }) {
    return f.jsx(ut, {
        theme: ut.themes.secondary,
        id: `swap-${e}`,
        onClick: function () {
            t(e);
        },
        className: fN,
        autoAlignContent: !1,
        children: f.jsx('div', { className: bN }),
    });
}
const yN = 'ShellsSetup_fc3cf257',
    CN = 'ShellsSetup_counter_107998e7',
    wN = 'ShellsSetup_container_eef616b1';
function NN(e, t) {
    if (!t) return -1;
    const a = e.find((e, a) => t[a] !== e);
    return void 0 !== a ? e.indexOf(a) : -1;
}
const IN = C(function () {
        const { model: e, controls: t } = Kp(),
            n = e.computes.shellIDs(),
            s = ge(n),
            [r, o] = a.useState(!1),
            [i, l] = a.useState(NN(n, s));
        function c(e) {
            r || t.swapSlots({ leftID: e, rightID: e + 1 });
        }
        a.useEffect(() => {
            s && n !== s && s[0] && n.includes(s[0]) && (l(NN(n, s)), o(!0));
        }, [n, s]);
        const d = ga(() => Ya(), [], 150);
        function u() {
            o(!1);
        }
        return f.jsxs('div', {
            className: yN,
            children: [
                f.jsx(hw, { className: CN, current: e.installedCount.get(), total: e.ammoMaxSize.get() }),
                f.jsx('div', {
                    className: wN,
                    children: ue(n, (t, s) =>
                        f.jsxs(
                            a.Fragment,
                            {
                                children: [
                                    e.computes.shellExist(t) &&
                                        f.jsx(vN, {
                                            index: s,
                                            intCD: t,
                                            onAnimationEnd: d,
                                            onSwappingEnd: u,
                                            leftID: i,
                                            swapping: r,
                                        }),
                                    s < n.length - 1 && f.jsx(xN, { index: s, onSwap: c }),
                                ],
                            },
                            s,
                        ),
                    ),
                }),
            ],
        });
    }),
    jN = { Standard: 'Standard', Bounty: 'Bounty', Improved: 'Improved', Experimental: 'Experimental' },
    kN = 'Equipment',
    SN = 'Crew',
    PN = {
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
const EN = 'Action_ab2a2b2e',
    MN = 'Action_base__disabled_b9b41a41',
    LN = 'Action_button_4133ceee',
    DN = 'Action_icon_f3030341',
    TN = ee.resolve('images'),
    AN = ee.resolve('strings'),
    BN = ['cancel', 'undo'],
    VN = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`),
    ON = a.forwardRef(function (
        {
            actionType: e,
            imageSource: t,
            modernized: n,
            level: s,
            freeToDemount: r,
            disabledTooltipText: o,
            disabled: i = !1,
            tooltipBodyPath: l,
            className: c,
            onClick: d,
        },
        u,
    ) {
        const m = n ? VN(e, s) : e,
            p = i && 'cancel' !== e,
            _ = a.useMemo(
                () => ({
                    backgroundImage: `url(${t || TN.readOr(`loadout.actions.${m}`, () => TN.readOrEmpty(`tanksetup.actions.${m}`))})`,
                }),
                [m, t],
            );
        const h = $e(
            a.useMemo(() => {
                if (p) return { body: o };
                const t = ((e, t, a, n) => (a ? 'demount_plus' : n ? VN(e, t) : e))(e, s, r, n);
                return {
                    header: AN.readOrEmpty(`tank_setup.tooltips.action.title.${t}`),
                    body: BN.includes(t) ? void 0 : AN.readOrEmpty(`tank_setup.tooltips.action.description.${l || t}`),
                };
            }, [e, p, o, r, n, s, l]),
        );
        return f.jsx('div', {
            ...h,
            className: b(EN, p && MN, c),
            children: f.jsx(ut, {
                ref: u,
                autoAlignContent: !1,
                theme: Ka.secondary,
                className: LN,
                disabled: p,
                'data-test-id': e,
                onClick: function (t) {
                    (t.stopPropagation(), p || d(e));
                },
                children: f.jsx('div', { className: DN, style: _ }),
            }),
        });
    }),
    RN = {
        root: 'Actions_root_9b5544a9',
        base: 'Actions_a97dca87',
        base__hidden: 'Actions_base__hidden_6a4e6a7d',
        'options-hide': 'Actions_options-hide_9b5544a9',
        base__shown: 'Actions_base__shown_b7ebaba7',
        'options-show': 'Actions_options-show_9b5544a9',
        actionItem: 'Actions_actionItem_7ebdfdac',
    },
    zN = ee.resolve('strings');
function $N({ availableActions: e, buyMoreDisabled: t, onActionClick: a, className: n }) {
    return f.jsxs('div', {
        className: b(RN.base, RN['base__' + (e.length ? 'shown' : 'hidden')], n),
        children: [
            e.includes(wp) &&
                f.jsx(ON, {
                    actionType: wp,
                    disabled: t,
                    onClick: a,
                    className: RN.actionItem,
                    disabledTooltipText: zN.readOrEmpty('tank_setup.dealPanel.tooltip.notEnough'),
                }),
            e.includes(gp) && f.jsx(ON, { actionType: gp, onClick: a, className: RN.actionItem }),
            e.includes(hp) && f.jsx(ON, { actionType: hp, onClick: a, className: RN.actionItem }),
        ],
    });
}
function HN(e) {
    switch (e) {
        case n_:
            return Qt.directiveBooster;
        case a_:
            return Qt.directiveSubstitute;
        case r_:
            return Qt.builtInEquipment;
        case s_:
            return Qt.improved;
        case o_:
            return Qt.experimental;
        case Yp:
        case e_:
        case t_:
            return Qt.trophy;
        default:
            return Qt.none;
    }
}
function FN(e, t, a) {
    const n = /(?:%\(|{)(\w*?)(?:_?[Oo]pen|_?Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*?(?:_?[Cc]lose|_?End)(?:\)s|})/g;
    let s = n.exec(e),
        r = e,
        o = 0;
    const i = {};
    for (; s; ) {
        const l = s[0],
            c = s[1] ?? '',
            d = s[2] ?? '',
            u = 'binding' + o++;
        ((r = r.replace(l, `{${u}}`)),
            (i[u] = f.jsx($a, {
                style: { color: t[c], alignItems: 'flex-start' },
                upgradeLegacy: !0,
                text: d,
                params: a,
            })),
            (s = n.exec(e)));
    }
    return [r, i];
}
const WN = {
    base: 'Price_c00fc2b8',
    icon: 'Price_icon_10cf08bf',
    icon__reverse: 'Price_icon__reverse_74b70497',
    value: 'Price_value_7bb80c7b',
};
function qN({ price: e, previousPrice: t, withZeroValue: n, ignoreDiscount: s, valueFirst: r, priceSeparator: o }) {
    const i = Bt({ value: Ve.extraSmall }, { small: { value: Ve.small } });
    return f.jsx('div', {
        className: WN.base,
        children: e.map(
            ({ value: e, currency: l, enough: c }, d) =>
                (n || e > 0) &&
                f.jsxs(
                    a.Fragment,
                    {
                        children: [
                            d > 0 && o,
                            f.jsx(Be, {
                                size: i.value,
                                enabled: !s && t.length > 0,
                                type: Oe.currency,
                                children: f.jsx(Re, {
                                    type: l,
                                    reverse: r,
                                    enough: c,
                                    classNames: { icon: b(WN.icon, r && WN.icon__reverse), base: WN.value },
                                    children: e,
                                }),
                            }),
                        ],
                    },
                    d,
                ),
        ),
    });
}
const ZN = {
    icon: 'Storage_icon_f8835a96',
    icon__reverse: 'Storage_icon__reverse_aada9c9e',
    value: 'Storage_value_edb11ec6',
};
function UN({ itemsInStorage: e, valueFirst: t }) {
    return f.jsx(Re, {
        type: Da.depot,
        reverse: t,
        size: Ve.small,
        enough: Boolean(e),
        classNames: { base: ZN.value, icon: b(ZN.icon, t && ZN.icon__reverse) },
        children: e,
    });
}
const GN = {
    root: 'Options_root_6818b5da',
    base: 'Options_945d8a9e',
    base__hidden: 'Options_base__hidden_1ab7a478',
    'options-hide': 'Options_options-hide_6818b5da',
    base__shown: 'Options_base__shown_620b2679',
    'options-show': 'Options_options-show_6818b5da',
};
function KN({ price: e, mounted: t, possibleZeroCount: a, show: n, itemsInStorage: s, className: r }) {
    const o = s || a,
        i = ze('loadout.installed_on_vehicle', 'loadout.installed_on_vehicle_upscale');
    return f.jsx('div', {
        className: b(GN.base, GN['base__' + (n ? 'shown' : 'hidden')], r),
        children: t
            ? f.jsx(ke, { path: i, width: 24, height: 24 })
            : o
              ? f.jsx(UN, { itemsInStorage: s })
              : e && f.jsx(qN, { ...e, valueFirst: !0 }),
    });
}
const JN = 'LoadoutItem_49fa5e5c',
    XN = 'LoadoutItem_base__hoverless_a07e4977',
    QN = 'LoadoutItem_content_b29d68c8',
    YN = 'LoadoutItem_base__disabled_404624aa',
    eI = 'LoadoutItem_image_2b6b3694',
    tI = 'LoadoutItem_nameWrapper_ac53f36d',
    aI = 'LoadoutItem_name_f6b620d8',
    nI = 'LoadoutItem_specializations_8e86b08',
    sI = 'LoadoutItem_options_fe0297a6',
    rI = 'LoadoutItem_actions_bfa3b2fd',
    oI = 'LoadoutItem_text_833b4471',
    iI = 'LoadoutItem_text__short_192105ec',
    lI = [vp, hp, gp, _p],
    cI = Pe('ConsumablesItem', JN),
    dI = { colorTag: '#64ba21', whiteSpanish: 'rgba(var(--color-general-primary-rgb), 0.9)' },
    uI = function ({ intCD: e, selected: t, item: n, controls: s }) {
        const {
                name: r,
                imageName: o,
                overlayType: i,
                description: l,
                builtIn: c,
                buyMoreDisabled: d,
                installedSlotId: u,
                disabled: m,
                mounted: p,
                itemsInStorage: _,
                mountedInOtherSetup: h,
                price: g,
            } = n,
            v = u > -1,
            x = a.useMemo(() => {
                const e = new Set();
                return m || !v ? e : (t || e.add(vp), c || (e.add(wp), (_ > 0 || p) && !h ? e.add(gp) : e.add(hp)), e);
            }, [m, v, t, c, _, p, h]),
            y = a.useCallback(
                (t) => {
                    s.actionSlot({ actionType: t, intCD: e, currentSlotId: u });
                },
                [s, e, u],
            );
        const [C, w] = FN(l, dI);
        return f.jsx(cI, {
            className: b(m && YN, ((i === r_ && t) || m) && XN),
            onClick: function () {
                if ((i === r_ && t) || m) return;
                const e = lI.find((e) => x.has(e));
                y(e || _p);
            },
            children: f.jsxs('div', {
                className: QN,
                children: [
                    f.jsx('div', {
                        className: eI,
                        children: f.jsx(la, { name: o, overlayType: HN(i), size: la.sizes.s180x135 }),
                    }),
                    f.jsx('div', { className: tI, children: f.jsx('div', { className: aI, children: r }) }),
                    f.jsx(Ge, { className: b(oI, x.size > 0 && iI), text: C, upgradeLegacy: !0, params: w }),
                    f.jsx(KN, { show: 0 === x.size, itemsInStorage: _, mounted: p || h, price: g, className: sI }),
                    f.jsx($N, { className: rI, onActionClick: y, buyMoreDisabled: d, availableActions: Array.from(x) }),
                ],
            }),
        });
    },
    mI = C((e) => {
        const { model: t, controls: a } = Tp(),
            n = t.computes.consumableById(e.intCD);
        if (n) return f.jsx(uI, { ...e, item: n, controls: a });
    }),
    pI = ee.resolve('images');
function _I({
    modernized: e,
    level: t,
    onActionClick: a,
    freeToDemount: n,
    mouseOverCard: s,
    installed: r,
    destroyTooltipBodyPath: o,
    availableActions: i,
    className: l,
}) {
    const c = (s || r) && i.includes(Cp),
        d = i.length && (i[0] !== Cp || c);
    return f.jsxs('div', {
        className: b(RN.base, RN['base__' + (d ? 'shown' : 'hidden')], l),
        children: [
            i.includes(gp) && f.jsx(ON, { actionType: gp, onClick: a, className: RN.actionItem }),
            i.includes(hp) && f.jsx(ON, { actionType: hp, onClick: a, className: RN.actionItem }),
            c && f.jsx(ON, { actionType: Cp, level: t, onClick: a, className: RN.actionItem, modernized: e }),
            i.includes(fp) && f.jsx(ON, { actionType: fp, onClick: a, className: RN.actionItem, freeToDemount: n }),
            i.includes(bp) &&
                f.jsx(ON, {
                    actionType: bp,
                    onClick: a,
                    className: RN.actionItem,
                    freeToDemount: n,
                    imageSource: pI.readOrEmpty('loadout.actions.demount'),
                }),
            i.includes(xp) && f.jsx(ON, { actionType: xp, onClick: a, className: RN.actionItem }),
            (e || !n) &&
                i.includes(yp) &&
                f.jsx(ON, { actionType: yp, onClick: a, className: RN.actionItem, modernized: e, tooltipBodyPath: o }),
        ],
    });
}
const hI = 'mul',
    gI = ee.resolve('strings'),
    vI = { calcValue: 0, isPositive: !0, valueKey: 'default' };
function fI({ values: e, localeName: t }) {
    const a = Jt(e, ({ valueKey: e }) => e === t).pop();
    if (!a) return vI;
    const { value: n, valueType: s, valueKey: r } = a,
        o = s === hI ? 100 * (n - 1) : n;
    return { calcValue: o, isPositive: o > 0, valueKey: r };
}
function bI(e) {
    const { calcValue: t, isPositive: a, valueKey: n } = fI(e),
        s = a ? '+' : '',
        r = en(t, 1),
        o = gI.readOrEmpty('tank_setup.kpi.bonus.valueTypes.default'),
        i = gI.readOr(`tank_setup.kpi.bonus.valueTypes.${n}`, () => o);
    return `${s}${i !== o ? `${r} ${i}` : `${r}${i}`}`;
}
function xI(e, t = !1) {
    return t || fI(e).isPositive
        ? gI.readOrEmpty(`tank_setup.kpi.bonus.positive.${e.localeName}`)
        : gI.readOrEmpty(`tank_setup.kpi.bonus.negative.${e.localeName}`);
}
const yI = 'Bonuses_2e425c2b',
    CI = 'Bonuses_bonus_1137ce2e',
    wI = 'Bonuses_effect_9904936e',
    NI = 'Bonuses_text_3e69479c',
    II = 'Bonuses_unit_dd3c8074',
    jI = 'Bonuses_base__special_ca1cd57b',
    kI = 'Bonuses_icon_bf2ddda6',
    SI = ee.resolve('strings');
function PI({ effect: e, special: t, bonuses: a }) {
    const n = Bt({ value: e ? 2 : 3 }, { large: { value: e ? 3 : 4 } });
    return f.jsxs('div', {
        className: b(yI, t && jI),
        children: [
            e &&
                f.jsxs('div', {
                    className: CI,
                    children: [
                        f.jsxs('span', {
                            className: wI,
                            children: [f.jsx('span', { className: kI }), SI.readOrEmpty('tank_setup.effects.name')],
                        }),
                        f.jsx(lt, { text: e, className: NI }),
                    ],
                }),
            ue(
                a.items,
                (e, t) =>
                    t < n.value &&
                    f.jsxs(
                        'div',
                        {
                            className: CI,
                            children: [
                                f.jsx('span', { className: II, children: bI(e) }),
                                f.jsx(lt, { text: xI(e), className: NI }),
                            ],
                        },
                        t,
                    ),
            ),
        ],
    });
}
const EI = 'Specializations_c4673376',
    MI = 'Specializations_item_64ba5e4a',
    LI = 'Specializations_specializationType_b4c7a75d',
    DI = 'Specializations_inactiveIcon_45a44cf7',
    TI = Pe('Specializations');
function AI({ specializations: e, className: t }) {
    return f.jsx(TI, {
        className: b(EI, t),
        children: ue(e, ({ name: e, correct: t }, a) =>
            f.jsx(
                'div',
                {
                    className: MI,
                    children: f.jsx(K_, {
                        specialization: e,
                        active: t,
                        classNames: { base: LI, inactiveIcon: t ? void 0 : DI },
                    }),
                },
                `${e}${a}`,
            ),
        ),
    });
}
function BI(e) {
    switch (e) {
        case 'equipmentTrophyBasic':
            return 1;
        case 'equipmentTrophyUpgraded':
            return 2;
        default:
            return 0;
    }
}
const VI = Pe('EquipmentsItem', JN),
    OI = function ({ intCD: e, selected: t, item: n, controls: s }) {
        const {
                activeSpecsMask: r,
                name: o,
                imageName: i,
                specializations: l,
                level: c,
                effect: d,
                bonuses: u,
                trophy: m,
                overlayType: p,
                modernized: _,
                installedSlotId: h,
                disabled: g,
                mounted: v,
                mountedMoreThanOne: x,
                itemsInStorage: y,
                mountedInOtherSetup: C,
                upgradable: w,
                freeToDemount: N,
                lockReason: I,
                destroyTooltipBodyPath: j,
                price: k,
            } = n,
            S = h > -1,
            P = tn(),
            E = g && 'similar_device_already_installed' === I,
            { availableActions: M } = a.useMemo(() => {
                const e = new Set();
                var a;
                return (
                    S &&
                        !g &&
                        (t || e.add(vp),
                        v
                            ? (((a = x), a ? [bp, xp] : [fp]).forEach((t) => {
                                  e.add(t);
                              }),
                              e.add(yp))
                            : e.add(((e, t, a) => ((e > 0 || t) && !a ? gp : hp))(y, v, C))),
                    w && !g && e.add(Cp),
                    { availableActions: e }
                );
            }, [S, g, w, t, v, x, y, C]),
            L = a.useCallback(
                (t) => {
                    s.actionSlot({ actionType: t, intCD: e, currentSlotId: h });
                },
                [s, e, h],
            ),
            D = a.useCallback(() => {
                if (g) return;
                const e = M.values().next().value;
                L(void 0 !== e && e !== Cp ? e : _p);
            }, [M, L, g]),
            T = M.values().next().value;
        return f.jsx(VI, {
            className: b(g && YN, g && XN),
            onClick: D,
            children: f.jsxs('div', {
                className: QN,
                children: [
                    f.jsx('div', {
                        className: eI,
                        children: f.jsx(la, {
                            name: i,
                            overlayType: HN(p),
                            size: la.sizes.s180x135,
                            level: m ? BI(p) : c,
                        }),
                    }),
                    f.jsx('div', { className: tI, children: f.jsx('div', { className: aI, children: o }) }),
                    u && f.jsx(PI, { effect: d ?? void 0, bonuses: u, special: r > 0 }),
                    f.jsx(KN, {
                        mounted: v || C,
                        itemsInStorage: y,
                        price: k,
                        possibleZeroCount: m || _ || 0 === k.price.length,
                        className: sI,
                        show: 0 === M.size || (T === Cp && !P.hover && !P.selected && !S),
                    }),
                    f.jsx(_I, {
                        className: rI,
                        modernized: _,
                        level: c,
                        onActionClick: L,
                        availableActions: Array.from(M),
                        freeToDemount: N,
                        installed: S,
                        mouseOverCard: P.hover || P.selected,
                        destroyTooltipBodyPath: j,
                    }),
                    !E && f.jsx(AI, { specializations: l.specializations, className: nI }),
                ],
            }),
        });
    },
    RI = C((e) => {
        const { model: t, controls: a } = zp(),
            n = t.computes.equipmentsItemByIntCD(e.intCD, e.type);
        if (n) return f.jsx(OI, { ...e, item: n, controls: a });
        console.error('Unable to render equipment item', e.intCD, e.type);
    }),
    zI = Pe('InstructionsItem', JN),
    $I = { Equipment: 'equipmentInstructions', Crew: 'crewInstructions' },
    HI = { colorTag: '#64ba21', whiteSpanish: 'rgba(var(--color-general-primary-rgb), 0.9)' },
    FI = function ({ intCD: e, item: t, controls: n }) {
        const {
                name: s,
                imageName: r,
                overlayType: o,
                description: i,
                buyMoreVisible: l,
                buyMoreDisabled: c,
                installedSlotId: d,
                disabled: u,
                mounted: m,
                itemsInStorage: p,
                mountedInOtherSetup: _,
                price: h,
            } = t,
            g = d > -1,
            v = a.useMemo(() => {
                const e = new Set();
                return (u || !g || (l && e.add(wp), (p > 0 || m) && !_ ? e.add(gp) : e.add(hp)), e);
            }, [u, g, l, p, m, _]),
            x = a.useCallback(
                (t) => {
                    n.actionSlot({ actionType: t, intCD: e, currentSlotId: d });
                },
                [n, e, d],
            ),
            y = a.useCallback(() => {
                u || (v.has(hp) ? x(hp) : v.has(gp) ? x(gp) : x(_p));
            }, [v, x, u]),
            [C, w] = FN(i, HI);
        return f.jsx(zI, {
            className: b(u && YN, u && XN),
            onClick: y,
            children: f.jsxs('div', {
                className: QN,
                children: [
                    f.jsx('div', {
                        className: eI,
                        children: f.jsx(la, { name: r, overlayType: HN(o), size: la.sizes.s180x135 }),
                    }),
                    f.jsx('div', { className: tI, children: f.jsx('div', { className: aI, children: s }) }),
                    f.jsx(Ge, { className: b(oI, v.size > 0 && iI), text: C, upgradeLegacy: !0, params: w }),
                    f.jsx(KN, {
                        show: 0 === v.size,
                        itemsInStorage: p,
                        possibleZeroCount: 0 === h.price.length,
                        mounted: m || _,
                        price: h,
                        className: sI,
                    }),
                    f.jsx($N, { className: rI, onActionClick: x, buyMoreDisabled: c, availableActions: Array.from(v) }),
                ],
            }),
        });
    },
    WI = C((e) => {
        const { model: t, controls: a } = Fp(),
            n = e.type && t.computes.instructionByIntCD(e.intCD, e.type);
        if (n) return f.jsx(FI, { ...e, item: n, controls: a });
    });
const qI = { card: 'AmmunitionCard_card_2bd54c54' },
    ZI = ee.resolve('aliases');
const UI = C(function ({ card: e, type: t, currentTab: n, className: s }) {
        const { model: r } = np(),
            {
                mounted: o,
                disabled: i,
                installedSlotId: l,
                intCD: c,
                lockReason: d,
                locked: u,
                mountedMoreThanOne: m,
                itemInstalledSetupIdx: p,
                itemInstalledSetupSlotIdx: _,
            } = e,
            h = r.selectedSlot.get(),
            g = u ? sn.alert : -1 !== l ? sn.done : void 0,
            v = -1 !== l && h === l,
            b = !o && -1 !== l && h !== l,
            x = He(
                t === Om ? 'battleBoosterBlock' : 'hangarCardModule',
                a.useMemo(() => [c, h], [c, h]),
                a.useMemo(() => ({ resId: ZI.read((e) => e.hangar.shared.Loadout('resId')) }), []),
            ),
            y = me({
                resId: ZI.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ intCD: c, slotId: h, slotType: zm, tooltipId: 'hangarCardModule' }), [c, h]),
            }),
            C = a.useMemo(
                () =>
                    (function (e, t, a, n, s, r, o, i) {
                        const { id: l, ...c } = (() => {
                            switch (e) {
                                case zm:
                                    return {
                                        id: -1 === t ? 'tankSetupConsumableItem' : 'tankSetupConsumableSlot',
                                        slotType: Am,
                                        emitterUID: window.subViews.get(
                                            ZI.read((e) => e.hangar.shared.Consumables('resId')),
                                        ).uid,
                                    };
                                case Om:
                                    return {
                                        id: -1 === t ? 'tankSetupBattleBoosterItem' : 'tankSetupBattleBoosterSlot',
                                        slotType: Bm,
                                        emitterUID: window.subViews.get(
                                            ZI.read((e) => e.hangar.shared.Instructions('resId')),
                                        ).uid,
                                    };
                                default:
                                    return {
                                        id: -1 === t ? 'tankSetupOptionalDeviceItem' : 'tankSetupOptionalDeviceSlotWW',
                                        slotType: Dm,
                                        emitterUID: window.subViews.get(
                                            ZI.read((e) => e.hangar.shared.Equipments('resId')),
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
                                intCD: n,
                                installedSlotId: t,
                                itemInstalledSetupSlotIdx: s,
                                itemInstalledSetupIdx: r,
                                isMounted: o,
                                isMountedMoreThanOne: i,
                            },
                        };
                    })(t, l, i, c, _, p, o, m),
                [t, l, i, c, _, p, o, m],
            ),
            w = t === zm ? y : x,
            N = Ke(C.id, C.args),
            I = (function ({ intCD: e, selected: t, ammunitionType: a, currentTab: n = '' }) {
                switch (a) {
                    case Vm: {
                        const a = an($m, n);
                        return a ? f.jsx(RI, { intCD: e, selected: t, type: a }) : null;
                    }
                    case zm:
                        return f.jsx(mI, { intCD: e, selected: t });
                    case Om: {
                        const t = an($I, n);
                        return t ? f.jsx(WI, { intCD: e, type: t }) : null;
                    }
                    default:
                        return null;
                }
            })({ intCD: c, selected: v, ammunitionType: t, currentTab: n });
        if (I)
            return f.jsx('div', {
                ...w,
                className: s,
                children: f.jsx(nn, {
                    ...N,
                    className: qI.card,
                    classNames: { status: { icon: qI.statusIcon } },
                    status: g,
                    statusReason: t !== zm ? d : void 0,
                    active: b,
                    selected: v,
                    disabled: i,
                    'data-test-id': c,
                    children: I,
                }),
            });
    }),
    GI = {
        root: 'Content_root_da09528a',
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
function KI({ cards: e, currentTab: t, type: n }) {
    const s = rn();
    return (
        a.useEffect(() => Ct(s.recalculate), [null == e ? void 0 : e.length, s.recalculate]),
        f.jsx(f.Fragment, {
            children: e.map((e) => f.jsx(UI, { className: GI.card, card: e, type: n, currentTab: t }, e.intCD)),
        })
    );
}
const JI = {
        root: 'Introduction_root_bc1537e2',
        base: 'Introduction_7257ae29',
        description: 'Introduction_description_7c2607f0',
        title: 'Introduction_title_7e63aa60',
        message: 'Introduction_message_845b2bb5',
        currency: 'Introduction_currency_1092ef06',
        icon: 'Introduction_icon_740fcef0',
        'icon__currency-modernized': 'Introduction_icon__currency-modernized_1dfb6dcf',
    },
    XI = { [jN.Bounty]: 'trophy', [jN.Experimental]: 'modernized' };
function QI({ introductionType: e }) {
    const t = XI[e],
        a = ee.resolve('strings');
    return f.jsx(je, {
        split: !0,
        upgradeLegacy: !0,
        params: {
            currencyName:
                e !== jN.Bounty
                    ? f.jsx('span', {
                          className: JI.currency,
                          children: a.readOrEmpty(`tank_setup.introduction.currency.${t}`),
                      })
                    : '',
            currencyIcon: f.jsx('span', { className: b(JI.icon, JI[`icon__currency-${t}`]) }),
        },
        path: `tank_setup.introduction.message.${t}`,
        className: JI.message,
    });
}
const YI = { [jN.Bounty]: 'trophy', [jN.Experimental]: 'modernized' },
    ej = { [jN.Bounty]: 'modules.trophyOverlay', [jN.Experimental]: 'modules.modernizedOverlay' };
function tj({ introductionType: e }) {
    const t = ee.resolve('strings').readOrEmpty(`tank_setup.introduction.title.withoutEquipments.${YI[e]}`),
        a = ej[e];
    return f.jsxs('div', {
        className: JI.base,
        children: [
            f.jsx(ke, {
                path: a,
                width: 350,
                height: 250,
                adaptive: { large: { width: 600, height: 450, path: `${a}Big` } },
            }),
            f.jsxs('div', {
                className: JI.description,
                children: [f.jsx('div', { className: JI.title, children: t }), f.jsx(QI, { introductionType: e })],
            }),
        ],
    });
}
const aj = 'top',
    nj = 'bottom',
    sj = 'both',
    rj = 'none';
const oj = C(function ({ currentTab: e, type: t, className: a }) {
    const [n, s] = v.useState(rj),
        { api: r } = ve();
    v.useLayoutEffect(() => {
        const e = () => {
            const e = r.getContainerSize() ?? 0,
                t = r.getWrapperSize() ?? 0,
                a = r.animationScroll.scrollPosition.get();
            s(
                (function (e, t, a) {
                    return e <= t ? rj : a <= 10 ? nj : t + a >= e - 10 ? aj : sj;
                })(e, t, a),
            );
        };
        return (
            r.events.on('change', e),
            r.events.on('recalculateContent', e),
            r.events.on('resizeHandled', e),
            () => {
                (r.events.off('resizeHandled', e), r.events.off('change', e), r.events.off('recalculateContent', e));
            }
        );
    }, [r]);
    const o = ge(e),
        i = ge(t),
        l = ma(() => {
            ((i && t !== i) || (t === Vm && o && e !== o)) && r.applyScroll(0, { immediate: !0 });
        });
    v.useEffect(() => {
        l();
    }, [l, t, e]);
    const c = (function (e, t) {
        const { model: a } = Tp(),
            { model: n } = Fp(),
            { model: s } = zp();
        switch (e) {
            case zm:
                return a.computes.consumables().sort((e, t) => (PN[e.itemName] ?? 1 / 0) - (PN[t.itemName] ?? 1 / 0));
            case Om:
                switch (t) {
                    case kN:
                        return n.equipmentInstructionsArray.get();
                    case SN:
                        return n.crewInstructionsArray.get();
                }
                break;
            case Vm:
                switch (t) {
                    case jN.Standard:
                        return s.computes.filteredStandardEquipments();
                    case jN.Bounty:
                        return s.bountyEquipments.get();
                    case jN.Improved:
                        return s.improvedEquipments.get();
                    case jN.Experimental:
                        return s.experimentalEquipments.get();
                }
        }
        return [];
    })(t, e);
    return f.jsxs('div', {
        className: b(GI.scrollContainer, GI[`scrollContainer__${n}`], a),
        children: [
            f.jsx(Ce, {
                classNames: { wrapper: GI.scrollWrapper, content: GI.scrollContent },
                children:
                    c && 0 !== c.length
                        ? f.jsx(on, {
                              className: GI.container,
                              trashhold: `${t}-${e}`,
                              children: f.jsx(KI, { cards: c, currentTab: e, type: t }),
                          })
                        : t !== Vm || (e !== jN.Experimental && e !== jN.Bounty)
                          ? void 0
                          : f.jsx(tj, { introductionType: e }),
            }),
            f.jsx(we, { classNames: { base: GI.verticalBar } }),
        ],
    });
});
function ij(e) {
    return f.jsx(Ne, { children: f.jsx(oj, { ...e }) });
}
const lj = 'SpecializationFilter_48673c87',
    cj = 'SpecializationFilter_content_f790a5c2',
    dj = ee.resolve('strings'),
    uj = {
        [Hm.Firepower]: 'loadout:ammunition_setup:specialization-filter:firepower',
        [Hm.Survivability]: 'loadout:ammunition_setup:specialization-filter:survivability',
        [Hm.Stealth]: 'loadout:ammunition_setup:specialization-filter:stealth',
        [Hm.Mobility]: 'loadout:ammunition_setup:specialization-filter:mobility',
    },
    mj = C(function ({ specialization: e, className: t }) {
        const n = fe(),
            { model: s, controls: r } = zp(),
            o = s.standardEquipmentsFilters.get().has(e),
            i = ge(o),
            l = $e({
                header: dj.readOrEmpty(`tank_setup.categories.${e}`),
                body: dj.readOrEmpty(`tank_setup.categories.body.${e}`),
            }),
            c = ga(() => r.updateFilters(e), [r, e], 400);
        return (
            a.useEffect(() => {
                (o && !1 === i && n.play('on', { target: uj[e] }),
                    o || !0 !== i || n.play('off', { target: 'loadout:ammunition_setup:specialization-filter' }));
            }, [o, i, n, e]),
            f.jsx(jt, {
                ...l,
                className: b(lj, t),
                classNames: { content: cj },
                fullSizeContent: !0,
                theme: St.primary,
                size: kt.extraSmall,
                activated: o,
                onClick: c,
                children: f.jsx(K_, { specialization: e, active: o }),
            })
        );
    }),
    pj = ee.resolve('aliases'),
    _j = ee.resolve('views'),
    hj = ee.resolve('intl'),
    gj = 'simple',
    vj = 'trophy',
    fj = 'deluxe',
    bj = 'modernized',
    xj = { [jN.Standard]: gj, [jN.Bounty]: vj, [jN.Improved]: fj, [jN.Experimental]: bj };
function yj({ id: e, label: t, className: n }) {
    const s = xj[e],
        r = Se(
            a.useMemo(
                () => ({
                    contentId: _j.read((e) => e.lobby.tanksetup.tooltips.SetupTabTooltipView('resId')),
                    resId: pj.read((e) => e.hangar.shared.Equipments('resId')),
                    disabled: !s,
                    args: { name: s },
                }),
                [s],
            ),
        );
    return f.jsx(ln.Tab, { ...(s && r), tabId: e, className: n, children: f.jsx(lt, { text: hj.toUpperCase(t) }) });
}
const Cj = 'TabsNavigation_tabsNavigation_f7e0f60f',
    wj = 'TabsNavigation_tabsSwitcher_d52f26be',
    Nj = 'TabsNavigation_tab_48ab20da',
    Ij = 'TabsNavigation_tab__active_676bc101',
    jj = ({ tabsList: e, activeTab: t, theme: a, size: n, onChangeActiveTab: s, className: r, ...o }) =>
        f.jsx('div', {
            className: b(Cj, r),
            children: f.jsx(ln, {
                ...o,
                active: t,
                theme: a,
                size: n,
                onActiveChange: (e) => s(String(e)),
                children: f.jsx(ln.Switcher, {
                    className: wj,
                    children: e.map(({ id: e, label: a }) =>
                        f.jsx(yj, { id: e, label: a, className: b(Nj, t === a && Ij) }, e),
                    ),
                }),
            }),
        }),
    kj = {
        workbenchPanel: 'WorkbenchPanel_workbenchPanel_f8c32bc5',
        currency: 'WorkbenchPanel_currency_7d4b8be',
        button: 'WorkbenchPanel_button_853070e2',
        buttonContent: 'WorkbenchPanel_buttonContent_24857913',
    },
    Sj = ee.resolve('strings'),
    Pj = C(({ className: e }) => {
        const { model: t, controls: a } = zp(),
            n = He('equipCoinInfo'),
            s = $e({
                body: t.hasExperimentalEquipmentToDisassemble.get()
                    ? Sj.readOrEmpty('tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.notDisabled.text')
                    : Sj.readOrEmpty('tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.disabled.text'),
            });
        return f.jsxs('div', {
            className: b(kj.workbenchPanel, e),
            children: [
                f.jsx(Re, {
                    ...n,
                    reverse: !0,
                    type: Da.equipCoin,
                    classNames: { base: kj.currency, icon: kj.currencyIcon },
                    children: t.equipCoinCount.get(),
                }),
                f.jsx('div', {
                    ...s,
                    children: f.jsx(ut, {
                        className: kj.button,
                        classNames: { content: kj.buttonContent },
                        disabled: !t.hasExperimentalEquipmentToDisassemble.get(),
                        theme: ut.themes.secondary,
                        size: ut.sizes.small,
                        onClick: t.hasExperimentalEquipmentToDisassemble.get() ? a.getMoreCurrency : void 0,
                        children: Sj.readOrEmpty('tank_setup.experimentalEquipCoinBlock.name'),
                    }),
                }),
            ],
        });
    }),
    Ej = 'AmmunitionSetup_14321dac',
    Mj = 'AmmunitionSetup_ammunitionHeader_7df5ac92',
    Lj = 'AmmunitionSetup_dealPanel_64ad50ed',
    Dj = 'AmmunitionSetup_tabsNavigation_4504ff3c',
    Tj = 'AmmunitionSetup_tabsNavigation__hidden_a99bfa94',
    Aj = 'AmmunitionSetup_specializationFilters_35de8d81',
    Bj = 'AmmunitionSetup_specializationFilter_38bef0cf',
    Vj = {
        [Vm]: [
            { id: jN.Standard, labelKey: 'tank_setup.tabs.simple' },
            { id: jN.Bounty, labelKey: 'tank_setup.tabs.trophy' },
            { id: jN.Improved, labelKey: 'tank_setup.tabs.deluxe' },
            { id: jN.Experimental, labelKey: 'tank_setup.tabs.modernized' },
        ],
        [Om]: [
            { id: kN, labelKey: 'tank_setup.tabs.optDevice' },
            { id: SN, labelKey: 'tank_setup.tabs.crew' },
        ],
    },
    Oj = { [Vm]: jN.Standard, [Om]: kN },
    Rj = ee.resolve('strings');
function zj(e) {
    switch (e) {
        case n_:
            return kN;
        case a_:
            return SN;
        case s_:
            return jN.Improved;
        case o_:
            return jN.Experimental;
        case Yp:
        case e_:
        case t_:
            return jN.Bounty;
        default:
            return;
    }
}
const $j = Object.values(Hm),
    Hj = C(function ({ type: e }) {
        const t = fe(),
            { model: n } = np(),
            { controls: s } = zp(),
            { groupIndex: r, item: o } = n.computes.selectedSlotGroupAndItem(),
            i = n.selectedSlot.get(),
            l = n.selectedSection.get(),
            c = a.useRef(!1),
            d = a.useRef(),
            [u, m] = a.useState(zj(null == o ? void 0 : o.type) || Oj[e]),
            p = ge(i),
            _ = ge(l),
            h = ge(r),
            g = ge(u),
            v = ge(e);
        (a.useEffect(() => {
            (_ !== l || (o && (p !== i || r !== h))) && m(zj(null == o ? void 0 : o.type) || Oj[e]);
        }, [p, _, h, o, i, l, r, e]),
            a.useEffect(() => {
                s.clearFilters();
            }, [e, s]),
            a.useEffect(() => {
                if ((u !== g && u && g) || (e !== v && e && v)) {
                    if (c.current) return;
                    ((c.current = !0),
                        (d.current = setTimeout(() => (c.current = !1), 100)),
                        t.play('switch', { target: 'loadout:ammunition_setup' }));
                }
            }, [u, g, e, v, t]),
            be(() => clearTimeout(d.current)));
        const x = a.useMemo(
                () =>
                    (function (e) {
                        var t;
                        return (
                            (null == (t = Vj[e])
                                ? void 0
                                : t.map(({ id: e, labelKey: t }) => ({ id: e, label: Rj.readOrEmpty(t) }))) ?? []
                        );
                    })(e),
                [e],
            ),
            y = Bt({ size: dn.small }, { large: { size: dn.medium }, extraLarge: { size: dn.large } });
        return f.jsxs('div', {
            className: Ej,
            children: [
                e === Rm
                    ? f.jsx(IN, {})
                    : f.jsxs(f.Fragment, {
                          children: [
                              f.jsxs('div', {
                                  className: Mj,
                                  children: [
                                      f.jsx(jj, {
                                          tabsList: x,
                                          activeTab: u ?? '',
                                          onChangeActiveTab: (e) => m(e),
                                          theme: cn.primary,
                                          size: y.size,
                                          className: b(Dj, 0 === x.length && Tj),
                                      }),
                                      (() => {
                                          switch (u) {
                                              case jN.Standard:
                                                  return f.jsx('div', {
                                                      className: Aj,
                                                      children: $j.map((e, t) =>
                                                          f.jsx(mj, { specialization: e, className: Bj }, t),
                                                      ),
                                                  });
                                              case jN.Experimental:
                                                  return f.jsx(Pj, {});
                                          }
                                      })(),
                                  ],
                              }),
                              f.jsx(ij, { currentTab: u, type: e }),
                          ],
                      }),
                f.jsx(uw, { className: Lj, type: e }),
            ],
        });
    }),
    Fj = 'LoadoutScreen_b66d9141',
    Wj = 'LoadoutScreen_info_1918746a',
    qj = ee.resolve('aliases');
function Zj(e, t) {
    return { options: { rootId: t.read(e) } };
}
const Uj = new ua()
    .addWithProps(
        Dp,
        Zj((e) => e.hangar.shared.Consumables('resId'), qj),
    )
    .addWithProps(
        Hp,
        Zj((e) => e.hangar.shared.Instructions('resId'), qj),
    )
    .addWithProps(
        Rp,
        Zj((e) => e.hangar.shared.Equipments('resId'), qj),
    )
    .addWithProps(
        ap,
        Zj((e) => e.hangar.shared.Loadout('resId'), qj),
    )
    .addWithProps(
        Gp,
        Zj((e) => e.hangar.shared.Shells('resId'), qj),
    );
function Gj(e) {
    const t = Le();
    Qe(Xe.ESCAPE, () => {
        t.push(Sm.root, void 0);
    });
    const { page: a } = e.params;
    return f.jsx(vi, {
        classNames: { base: Fj, info: Wj },
        children: void 0 !== a && Uj.render(f.jsx(Hj, { type: a })),
    });
}
const Kj = {
        base: 'Page_c86c7327',
        carousel: 'Page_carousel_2e3eb473',
        carousel__double: 'Page_carousel__double_b4782e51',
        carouselButtons: 'Page_carouselButtons_4148fb',
        filterPopover: 'Page_filterPopover_f4402d4f',
        filterTrigger: 'Page_filterTrigger_9d14c53b',
        filterTriggerContent: 'Page_filterTriggerContent_fe0f376c',
        teaserWidget: 'Page_teaserWidget_ab2c33e0',
    },
    Jj = { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.Teaser('resId')) },
    Xj = [
        Sm.loadout.optDevices,
        Sm.loadout.battleBoosters,
        Sm.loadout.shells,
        Sm.loadout.consumables,
        Sm.vehicles,
        Sm.root,
    ],
    Qj = [Sm.vehicles, Sm.root],
    Yj = j(function () {
        const e = Le(),
            t = is(),
            a = As().model.selectedVehicle(),
            n = t.model.carouselRowCount.get(),
            s = Xj.includes(e.location) && void 0 !== a,
            r = Qj.includes(e.location) && void 0 !== a,
            o = e.location === Sm.root,
            i = !o;
        return f.jsx(f.Fragment, {
            children: f.jsxs('div', {
                className: Kj.base,
                children: [
                    i && f.jsx(un, {}),
                    f.jsxs(mn, {
                        children: [
                            f.jsx(pn, { path: Sm.root, component: OC, exact: !0 }),
                            f.jsx(pn, { path: `${Sm.loadout.root}/:page`, component: Gj }),
                            f.jsx(pn, { path: Sm.vehicles, component: Bu }),
                        ],
                    }),
                    r && f.jsx(kb, { screenModeEnabled: e.location.endsWith(Sm.vehicles) }),
                    s && f.jsx(mf, { className: Kj.loadoutPanel, screenModeEnabled: !o }),
                    o &&
                        f.jsxs('div', {
                            className: b(Kj.carousel, n === Tn && Kj.carousel__double),
                            children: [
                                f.jsxs('div', {
                                    className: Kj.carouselButtons,
                                    children: [
                                        f.jsx(km, {
                                            classNames: {
                                                base: Kj.filterPopover,
                                                trigger: Kj.filterTrigger,
                                                triggerContent: Kj.filterTriggerContent,
                                            },
                                        }),
                                        f.jsx(Nm, { route: Sm.vehicles }),
                                    ],
                                }),
                                f.jsx(Pm, {}),
                            ],
                        }),
                    o && f.jsx(xm, { className: Kj.teaserWidget, options: Jj }),
                ],
            }),
        });
    }),
    ek = 'App_7ac91f18';
function tk() {
    return f.jsx('div', { className: ek, children: f.jsx(Yj, {}) });
}
const ak = ee.resolve('aliases');
function nk(e, t) {
    return { options: { rootId: t.read(e) } };
}
const sk = _n({
    'mouse-enter': { 'main-menu-widget:menu-item': 'highlightx', 'vehicle-card': 'carousel' },
    click: {
        'vehicle-menu-widget:button': 'yes1',
        'main-menu-widget:menu-item': 'yes1',
        'vehicle:action_cards': 'yes1',
        'carousel:arrow_button': 'carouselButton',
        'vehicle-card': 'tank_selection',
        'loadout:popular-loadouts-content:arrow-wrapper': 'arrow',
        'loadout:deal-panel:cancel_button': 'cancelcloseno',
        'loadout-panel:slot:unmount-button': 'cancelcloseno',
        'loadout-panel:slot:equipment:specialization:firepower': 'cons_equipment_slot_firepower',
        'loadout-panel:slot:equipment:specialization:survivability': 'cons_equipment_slot_survivability',
        'loadout-panel:slot:equipment:specialization:stealth': 'cons_equipment_slot_stealth',
        'loadout-panel:slot:equipment:specialization:mobility': 'cons_equipment_slot_mobility',
        'loadout-panel:slot': 'yes1',
    },
    expand: { 'vehicle-menu-widget:button': 'gui_vehicle_menu_open', 'loadout:deal-panel': 'cons_select_view' },
    collapse: { 'loadout:deal-panel': 'cons_select_view' },
    switch: { 'loadout:ammunition_setup': 'cons_select_view' },
    animation: { 'vehicle-ttc-section:accordion-summary': 'gui_ttc_start' },
    on: {
        'loadout:ammunition_setup:specialization-filter:firepower': 'cons_equipment_filter_on_firepower',
        'loadout:ammunition_setup:specialization-filter:survivability': 'cons_equipment_filter_on_survivability',
        'loadout:ammunition_setup:specialization-filter:stealth': 'cons_equipment_filter_on_stealth',
        'loadout:ammunition_setup:specialization-filter:mobility': 'cons_equipment_filter_on_mobility',
        'loadout-panel:slot:equipment:specialization': 'cons_equipment_bonus',
        'loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction': 'cons_instructions_steady_hand',
        'loadout-panel:slot:instruction:driver_virtuoso-crew_instruction': 'cons_instructions_combat_course',
        'loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction': 'cons_instructions_gearbox_intricacy',
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
});
gn(
    new ua()
        .addWithProps(Za, { soundsOverrides: sk })
        .add(hn)
        .addWithProps(
            os,
            nk((e) => e.hangar.shared.VehicleFilters('resId'), ak),
        )
        .addWithProps(
            ds,
            nk((e) => e.hangar.shared.VehiclesStatistics('resId'), ak),
        )
        .addWithProps(
            ms,
            nk((e) => e.hangar.shared.VehiclesInfo('resId'), ak),
        )
        .addWithProps(
            Sn,
            nk((e) => e.hangar.shared.SpaceInteraction('resId'), ak),
        )
        .addWithProps(
            jn,
            nk((e) => e.hangar.shared.MainMenu('resId'), ak),
        )
        .addWithProps(
            Nn,
            nk((e) => e.hangar.shared.HeroTank('resId'), ak),
        )
        .add(_s)
        .addWithProps(
            Ts,
            nk((e) => e.hangar.shared.VehiclesInventory('resId'), ak),
        )
        .addWithProps(
            Rx,
            nk((e) => e.battle_modifiers.shared.Modifiers('resId'), ak),
        )
        .addWithProps(
            Im,
            nk((e) => e.hangar.shared.ModeState('resId'), ak),
        )
        .addWithProps(
            En,
            nk((e) => e.common.shared.DynamicEconomics('resId'), ak),
        )
        .render(f.jsx(tk, {})),
)
    .then(() => vn(document.getElementById('root')))
    .then(() => fn())
    .then(() => bn(!1));
