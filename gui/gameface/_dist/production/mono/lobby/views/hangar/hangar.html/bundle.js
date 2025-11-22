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
    Z as Ge,
    a_ as Ke,
    a$ as Je,
    W as Xe,
    b0 as Qe,
    b1 as Ye,
    b2 as et,
    b3 as tt,
    b4 as at,
    b5 as nt,
    b6 as st,
    b7 as rt,
    b8 as ot,
    b9 as it,
    ba as lt,
    bb as ct,
    B as dt,
    bc as ut,
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
    _ as At,
    bA as Bt,
    bB as Vt,
    bC as Ot,
    bD as Rt,
    bE as zt,
    bF as $t,
    bG as Ht,
    bH as Ft,
    bI as Wt,
    bJ as qt,
    f as Zt,
    bK as Ut,
    bL as Gt,
    bM as Kt,
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
    y as oa,
    bX as ia,
    a1 as la,
    bY as ca,
    bZ as da,
    b_ as ua,
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
    T as La,
    cj as Da,
    ck as Ta,
    cl as Aa,
    cm as Ba,
    cn as Va,
    p as Oa,
    F as Ra,
    co as za,
    cp as $a,
    cq as Ha,
    cr as Fa,
    a2 as Wa,
    cs as qa,
    ct as Za,
    t as Ua,
    cu as Ga,
    cv as Ka,
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
    Y as on,
    $ as ln,
    a0 as cn,
    cG as dn,
    cH as un,
    cI as mn,
    cJ as pn,
    cK as _n,
    a3 as hn,
    a4 as gn,
    cL as vn,
    cM as fn,
} from '../../../chunks/lib.js';
import { g as bn, a as xn, b as yn } from '../../../chunks/readResource.js';
import { F as Cn } from '../../../chunks/fun_random_progression_state.js';
const [wn, Nn] = B('HeroTankModelProvider')((e) => {
        const { observableModel: t } = e;
        return { ...t.primitives(['name', 'type']), heroTankMarker: t.object('heroTankMarker') };
    }, V),
    [In, jn] = B()(
        ({ observableModel: e }) => ({
            menuItems: e.arrayClone('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    [kn, Sn] = B('SpaceInteractionModel')(V, ({ externalModel: e }) => ({
        sceneWrapper: {
            onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
            onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
        },
    })),
    [Pn, En, Mn] = B()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled']),
    })),
    Ln = () => a.useContext(Mn.Context),
    Dn = 2,
    Tn = 'role',
    An = 'type',
    Bn = 'tier',
    Vn = 'nations',
    On = {
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
    Rn = {
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
    zn = 'isCommonProgression',
    $n = [$.assault, $.universal, $.break, $.sniper, $.support, $.wheeled],
    Hn = ['bonus', 'favorite', 'premium', 'elite', 'crystals', 'canInstallAttachments', 'own3DStyle', 'rented'],
    Fn = [z.lightTank, z.mediumTank, z.heavyTank, z['AT-SPG'], z.SPG],
    Wn = O(1, 12, H),
    qn = 'vehicle_types',
    Zn = 'nations',
    Un = 'levels',
    Gn = 'specials',
    Kn = 'battle_pass',
    Jn = { heavy_tank: Z, medium_tank: q, light_tank: W, at_spg: F };
function Xn(e, t) {
    return e === zn && t.status !== K.UNSUITABLE_TO_QUEUE && t.bpProgress < t.maxBpScore;
}
function Qn(e, t, a, n) {
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
const Yn = {
    [Un]: (e, t) => !e.levels || e.levels.includes(`level_${t.level}`),
    [Zn]: (e, t) => !e.nations || e.nations.includes(G(t.nationId)),
    [qn]: (e, t) => !e.vehicle_types || e.vehicle_types.includes(t.type),
};
function es(e, t, a) {
    if (a) {
        let n = !1;
        const s = e.specials ?? [];
        for (const e of s)
            if ('rented' !== e) {
                if (!Qn(s, e, t, a)) return !1;
            } else n = !0;
        if (!n && U(t)) return !1;
    }
    if (a && e.battle_pass && e.battle_pass.length > 0) for (const n of e.battle_pass) if (!Xn(n, a)) return !1;
    for (const n of Object.keys(e)) if (n in Yn && !Yn[n](e, t)) return !1;
    return ((e, t) => {
        const a = J(t.role);
        let n = !1;
        for (const s of Object.keys(Jn)) if (s in e && ((n = !0), e[s].some((e) => e.includes(a)))) return !0;
        return !n;
    })(e, t);
}
function ts(e, { shortName: t, fullName: a }) {
    const n = e.toLowerCase();
    return !(n.length > 0 && !t.toLowerCase().includes(n) && !a.toLowerCase().includes(n));
}
function as(e, t, a) {
    const n = e[t] ?? [],
        s = { ...e };
    return ((s[t] = n.includes(a) ? n.filter((e) => e !== a) : [...n, a]), s[t].length > 0 || delete s[t], s);
}
function ns(e, t) {
    return 'regular' === t.type
        ? as(e, t.field, t.value)
        : Object.keys(Jn).reduce((e, a) => {
              const n = Jn[a].find((e) => e.includes(t.role));
              return n
                  ? as(e, a, ((r = n), 'at_spg' === (s = a) ? `role_ATSPG_${r}` : `role_${s[0].toUpperCase()}T_${r}`))
                  : e;
              var s, r;
          }, e);
}
function ss(e, t, a, n) {
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
const [rs, os] = B('FilterVehiclesProvider')(
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
                        t.filters.set(ns(t.filters.get(), e));
                    }),
                    carouselTypeChange: a.createCallback((e) => ({ rowCount: e }), 'onCarouselTypeChange'),
                }
            );
        },
    ),
    is = 'disabled',
    ls = [z.lightTank, z.mediumTank, z.heavyTank, z['AT-SPG'], z.SPG].reduce((e, t, a) => ((e[t] = a), e), {}),
    [cs, ds] = B('VehicleStatisticsProvider')(({ observableModel: e }) => {
        const t = e.dict('statistics'),
            a = X.structural((e) => t.get(e));
        return { ids: X.primitive(() => t.keys), get: a };
    }),
    [us, ms] = B('VehiclesProvider')(
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
        { useRequires: () => ({ statistics: ds() }) },
    ),
    [ps, _s] = B('VehiclesInventoryProvider')(
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
        { useRequires: () => ({ vehicles: ms(), statistic: ds() }) },
    ),
    hs = ee.resolve('strings');
function gs(e, t, a = '...') {
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
const vs = te(se + re);
function fs(e, t, a = 1) {
    const n = ae(t, { count: a });
    return e.has(n) ? fs(e, t, a + 1) : n;
}
function bs(e = '', t = []) {
    return {
        title: '' !== e ? e : hs.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: t,
    };
}
const xs = (e) => ({ type: 'ok', value: e }),
    ys = (e, t) => ({ type: 'error', error: { tag: e, msg: t } }),
    Cs = 'delete',
    ws = 'import',
    Ns = o({ title: c(), createdAt: i(m(), u(), d(0)), modifiedAt: i(m(), u(), d(0)), list: l(i(m(), u())) }),
    Is = i(
        c(),
        p((e) => (e.length > 0 ? e : void 0)),
    ),
    [js, ks, { Context: Ss }] = B('PaylistsProvider')(
        ({ requires: e, observableModel: t }) => {
            const a = t.dict('storage'),
                s = t.primitives(['selectedID', 'enabled', 'dirtyEdit']),
                r = {
                    vehicles: e.vehicles.model,
                    myVehicles: e.myVehicles.model,
                    enabled: s.enabled,
                    nationsOrder: e.filters.model.nations,
                    filters: n.box({ specials: ['rented'] }, { deep: !1 }),
                    searchName: n.box('', { deep: !1 }),
                    edit: { initial: n.box(void 0, { deep: !1 }), dirty: s.dirtyEdit },
                },
                o = X.shallow(() => a.keys),
                i = X.primitive(() => _(Is, s.selectedID.get())),
                l = X.structural((e) => {
                    try {
                        const t = a.get(e);
                        if (!t) return xs(void 0);
                        const n = _(Ns, JSON.parse(t)),
                            s = new Set();
                        for (const e of n.list)
                            if (oe[e]) {
                                const t = oe[e].find((e) => Boolean(r.myVehicles.get(e.toString())));
                                s.add(t ?? e);
                            } else s.add(e);
                        return xs({ ...n, list: [...s.values()] });
                    } catch (t) {
                        return (console.error(`Error getting playlist with ${e} id`, t), ys('PARSE_ERROR', String(t)));
                    }
                }),
                c = X.shallow(() =>
                    ie(o().values())
                        .map((e) => l(e))
                        .filter((e) => 'ok' === e.type && void 0 !== e.value)
                        .map((e) => e.value.title)
                        .reduce((e, t) => e.add(t), new Set()),
                ),
                d = X.primitive((e) => {
                    const t = l(e);
                    if ('ok' !== t.type || void 0 === t.value) throw new Error(`Can't get playlist by id ${e}`);
                    return t.value;
                }),
                u = X.structural((e) => {
                    const t = l(e);
                    if ('ok' === t.type && void 0 !== t.value) return { id: e, ...t.value };
                }),
                m = X.shallow(() =>
                    ie(o().values())
                        .map((e) => u(e))
                        .filter((e) => void 0 !== e)
                        .toArray()
                        .sort((e, t) => e.title.localeCompare(t.title))
                        .map((e) => e.id),
                ),
                p = X.primitive(() => {
                    const e = i();
                    if (e) return u(e);
                }),
                h = X.shallow(() => {
                    const t = e.filters.model.computes.nationToIndex();
                    return le(e.myVehicles.model.getAll(), (e, a) => ss(t, ls, e, a));
                }),
                g = X.primitive(() => !1 === Q.structural(C(), r.filters.get()) || r.searchName.get().length > 0),
                v = X.shallow(() => {
                    const t = r.filters.get(),
                        a = h(),
                        n = r.searchName.get();
                    return a.filter((a) => {
                        if (!ts(n, a)) return !1;
                        const s = e.statistic.model.get(a.id);
                        return es(t, a, s);
                    });
                }),
                f = X.primitive((t) => {
                    var a;
                    return Boolean(null == (a = e.statistic.model.get(t)) ? void 0 : a.elite);
                }),
                b = X.shallow((t) => {
                    const a = e.vehicles.model.get(t);
                    return null == a ? void 0 : a.imageKey;
                }),
                x = X.primitive(() => v().length),
                y = X.shallow(() => {
                    var e;
                    return null == (e = p()) ? void 0 : e.list.map(r.vehicles.get);
                }),
                C = e.filters.model.computes.default;
            return {
                ...r,
                current: p,
                titles: c,
                currentId: i,
                byIdUnsafe: d,
                byId: l,
                byIdFull: u,
                filtered: v,
                filteredAmount: x,
                defaultFilters: C,
                hasFilters: g,
                vehicleImage: b,
                currentVehicles: y,
                ids: o,
                sortedIds: m,
                isElite: f,
            };
        },
        ({ model: e, externalModel: t }) => {
            const a = t.createCallback((e) => ({ id: e.id, data: JSON.stringify(e.initial) }), 'onCreate');
            return {
                filters: ce({
                    update: (t) => {
                        e.filters.set(ns(e.filters.get(), t));
                    },
                    reset: () => {
                        (e.filters.set(e.defaultFilters()), e.searchName.set(''));
                    },
                    search: (t) => e.searchName.set(t),
                    change: (t) => {
                        e.filters.set(ns(e.filters.get(), t));
                    },
                }),
                create: r(() => {
                    a({
                        id: `${Date.now().toString(16)}_${vs(3)}`,
                        initial: bs(fs(e.titles(), 'playlists.defaultName')),
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
                    r(() => ({ type: ws, params: JSON.stringify({ titles: Array.from(e.titles().values()) }) })),
                    'openImportConfirm',
                ),
                openDeleteConfirm: t.createCallback(
                    (e, t) => ({ type: Cs, id: e, params: JSON.stringify({ title: t }) }),
                    'openDeleteConfirm',
                ),
            };
        },
        { useRequires: () => ({ vehicles: ms(), myVehicles: _s(), filters: os(), statistic: ds() }) },
    ),
    Ps = () => a.useContext(Ss),
    Es = 'pending',
    Ms = 'readyToSelect',
    Ls = is,
    [Ds, Ts] = B('VehiclesInventoryProvider')(
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
                    return (t.sort((e, t) => ss(a, ls, e, t)), t);
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
                                    !1 !== o.has(t.id) && !!es(n, t, e.requires.statistic.model.get(t.id)) && ts(s, t),
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
        { useRequires: () => ({ myVehicles: _s(), vehicles: ms(), statistic: ds(), filters: os(), playlists: Ps() }) },
    ),
    [As, Bs, Vs] = B('SettingsProvider')(
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
        { useRequires: () => ({ inventory: Ts() }) },
    );
function Os() {
    return a.useContext(Vs.Context);
}
const Rs = { boost: 'boost', reduce: 'reduce', none: 'none' };
function zs(e, t, a) {
    const n = 100 / a,
        s = e - t * n;
    return (Math.max(0, Math.min(n, s)) / n) * 100;
}
function $s(e, t, a) {
    return Array.from({ length: a }, (n, s) => {
        const r = zs(e, s, a);
        return { currentPercent: r, modifiedPercent: zs(t, s, a) - r };
    });
}
function Hs({ currentPercent: e, modifiedPercent: t }, a) {
    return a === Rs.reduce ? [t, e] : [e, t];
}
function Fs(e) {
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
function Ws(e, t) {
    const { key: a, name: n } = t,
        s = ee.resolve('strings');
    return '' !== n && '' !== a
        ? s.readOr(`tank_setup.kpi.bonus.ttc.${a}.${n}`, () => s.readOrEmpty(`tank_setup.kpi.bonus.${a}.${n}`))
        : s.readOrEmpty(`menu.tank_params.${e}`);
}
const [qs, Zs] = B('TechParamsProvider')(
        ({ observableModel: e }) => {
            const t = { groups: e.arrayClone('groups') };
            return {
                computes: {
                    sectionParams: X.structural((e) =>
                        ue(t.groups.get(), ({ id: t, indicator: a, isOpen: n, params: s, extraParams: r, ...o }) => {
                            const i = (function ({ currentPercent: e, modifiedPercent: t }) {
                                return t === e ? Rs.none : t > e ? Rs.boost : Rs.reduce;
                            })(a);
                            return {
                                ...o,
                                type: t,
                                indicatorList: $s(...Hs(a, i), e),
                                status: i,
                                opened: n,
                                params: Fs(s),
                                extraParams: Fs(r),
                            };
                        }),
                    ),
                },
            };
        },
        ({ externalModel: e }) => ({ selectGroup: e.createCallback((e) => ({ groupName: e }), 'onGroupClick') }),
    ),
    Us = 'emptySlot',
    Gs = { height: 105, row: 3 },
    Ks = { medium: { height: 136, row: 4 }, large: { height: 145, row: 5 }, extraLarge: { height: 183, row: 5 } },
    Js = 'top',
    Xs = 'bottom',
    Qs = 'both',
    Ys = 'none',
    er = (e, t) => (e || t ? (e ? (t ? Ys : Xs) : Js) : Qs);
var tr = ((e) => (
    (e.None = 'none'),
    (e.Increase = 'increase'),
    (e.Decrease = 'decrease'),
    (e.Situational = 'situational'),
    e
))(tr || {});
const ar = {
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
    nr = ee.resolve('strings'),
    sr = ee.resolve('images'),
    rr = ee.resolve('aliases'),
    or = ee.resolve('intl');
function ir({ id: e, values: t, moduleInstalled: a, kpiBonusParams: n, tooltipId: s, className: r }) {
    const o = v.useMemo(() => ({ tooltipId: s, paramId: e }), [s, e]),
        i = me({ resId: rr.read((e) => e.hangar.shared.VehicleParams('resId')), args: o });
    return f.jsxs('div', {
        className: b(ar.base, a && ar.base__moduleInstalled, r),
        ...i,
        children: [
            f.jsx('div', {
                className: ar.valueContainer,
                children: t.map(({ value: e, state: t }, a) =>
                    f.jsxs(
                        v.Fragment,
                        {
                            children: [
                                a > 0 &&
                                    f.jsx('div', {
                                        className: ar.separator,
                                        children: nr.readOrEmpty('common.common.slash'),
                                    }),
                                f.jsx('div', {
                                    className: b(ar.value, ar[`value__${t}`]),
                                    children: or.formatReal('woZeroDigits', e),
                                }),
                            ],
                        },
                        `${e}-${t}-${a}`,
                    ),
                ),
            }),
            f.jsx('div', {
                className: ar.icon,
                style: { backgroundImage: `url(${sr.readOrEmpty(`vehParams.small.${e}`)})` },
            }),
            f.jsx('div', { className: ar.description, children: Ws(e, n) }),
        ],
    });
}
const lr = 'DetailsContainer_b85372ff',
    cr = 'DetailsContainer_params_9bf7e9a4',
    dr = 'DetailsContainer_separator_f28e38c',
    ur = 'DetailsContainer_detail_141e9abe';
function mr(e, t) {
    return t !== tr.None && pe(e, (e) => e.state === tr.None);
}
function pr({ params: e, extraParams: t, highlightType: n, className: s }) {
    return f.jsx('div', {
        className: b(lr, s),
        children: f.jsxs('div', {
            className: cr,
            children: [
                ue(e, (e) => a.createElement(ir, { ...e, key: e.id, className: ur, moduleInstalled: mr(e.values, n) })),
                t.length > 0 && f.jsx('div', { className: dr }),
                ue(t, (e) => a.createElement(ir, { ...e, key: e.id, className: ur, moduleInstalled: mr(e.values, n) })),
            ],
        }),
    });
}
function _r(e, t) {
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
                        ? (e - s) * vr
                        : 0
                    : t > a
                      ? e > a
                          ? (e - a) * vr
                          : 0
                      : t < a && e >= t
                        ? (a - e) * vr
                        : 0;
            })(o, s, r, a, n);
        return {
            currentIndicator: fr({ percent: c, delay: u }),
            boostIndicator: fr({ percent: d, delay: u }),
            reduceIndicator: fr({ delay: u }),
        };
    });
}
function hr(e, t) {
    const a = _e(e, (e) => e.currentPercent > 0) ?? 0,
        n = _e(t, (e) => e.currentPercent > 0) ?? 0,
        s = _e(t, (e) => e.modifiedPercent > 0),
        r = he(t, (e) => e.modifiedPercent > 0) ?? 0;
    return e.map((e, t) => {
        const o = e.currentPercent ?? 0,
            i = void 0 === s ? Math.abs(t - n) * vr : s > a ? Math.max((s - t) * vr, 0) : Math.max((t - r) * vr, 0),
            l = (function (e, t, a, n) {
                return void 0 === a ? 0 : t < a ? (e < a ? (a - e) * vr : 0) : t > n && e > n ? (e - n) * vr : 0;
            })(t, a, s, r);
        return {
            currentIndicator: fr({ percent: o, delay: i }),
            boostIndicator: fr({ delay: l }),
            reduceIndicator: fr({ delay: l }),
        };
    });
}
function gr(e, t) {
    if (0 === t.length)
        return e.map((e, t) => ({
            currentIndicator: fr({ percent: null == e ? void 0 : e.currentPercent, delay: t * vr }),
            boostIndicator: fr(),
            reduceIndicator: fr({ percent: null == e ? void 0 : e.modifiedPercent, delay: t * vr }),
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
                return t > a ? (e > a ? (e - a) * vr : 0) : t < a && e < a ? (a - e) * vr : 0;
            })(s, a, n);
        return {
            currentIndicator: fr({ percent: i, delay: c }),
            boostIndicator: fr({ delay: c }),
            reduceIndicator: fr({ percent: l, delay: c }),
        };
    });
}
const vr = 100,
    fr = (e = {}) => ({ percent: e.percent ?? 0, delay: e.delay ?? 0 });
const br = {
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
    xr = (e, t) => vr * ((t - e) / 100);
function yr({ className: e, currentIndicator: t, reduceIndicator: a, boostIndicator: n }) {
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
            delay: r ? a.delay + Math.abs(xr(s.boostIndicator, n.percent)) : a.delay,
            config: { duration: s.boostIndicator === n.percent ? vr : Math.abs(xr(s.reduceIndicator, a.percent)) },
        }),
        l = x({
            from: { width: `${s.boostIndicator}%` },
            to: { width: `${n.percent}%` },
            delay: o ? n.delay + Math.abs(xr(s.reduceIndicator, a.percent)) : n.delay,
            config: { duration: s.reduceIndicator === a.percent ? vr : Math.abs(xr(s.boostIndicator, n.percent)) },
        }),
        c = x({
            from: { width: `${s.currentIndicator}%` },
            to: { width: `${t.percent}%` },
            delay: r ? t.delay + Math.abs(xr(s.boostIndicator, n.percent)) : t.delay,
            config: { duration: s.boostIndicator === n.percent ? vr : Math.abs(xr(s.currentIndicator, t.percent)) },
        });
    return f.jsxs('div', {
        className: b(br.base, e),
        children: [
            f.jsx('div', { className: br.baseIndicator }),
            f.jsxs('div', {
                className: br.filledIndicatorsContainer,
                children: [
                    f.jsx(y.div, { className: br.currentIndicator, style: c }),
                    f.jsx(y.div, { className: br.reduceIndicator, style: i }),
                    f.jsx(y.div, { className: br.boostIndicator, style: l }),
                ],
            }),
            f.jsxs('div', {
                className: br.layersContainer,
                children: [
                    f.jsx(y.div, { className: br.currentIndicatorLayer, style: c }),
                    f.jsx(y.div, { className: br.reduceIndicatorLayer, style: i }),
                    f.jsx(y.div, { className: br.boostIndicatorLayer, style: l }),
                ],
            }),
        ],
    });
}
const Cr = 'IndicatorContainer_f7506048',
    wr = 'IndicatorContainer_indicator_b72c4e50';
function Nr({ indicatorList: e, status: t }) {
    const n = (function (e, t, a) {
        return a === Rs.boost ? _r(t, e) : a === Rs.reduce ? gr(t, e) : hr(t, e);
    })(ge(e) ?? [], e, t);
    return f.jsx('div', {
        className: Cr,
        children: n.map((e, t) =>
            a.createElement(yr, { ...e, key: `${t}-${e.currentIndicator}-${e.currentIndicator}`, className: wr }),
        ),
    });
}
const Ir = 'ParamsType_d8788f0e',
    jr = 'ParamsType_icon_5f8d4ad',
    kr = 'ParamsType_type_cdb8f019',
    Sr = {
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
function Pr({ type: e }) {
    const t = ee.resolve('strings'),
        a = Sr[e];
    if (a)
        return f.jsxs('div', {
            className: Ir,
            children: [
                f.jsx(a, { className: jr }),
                f.jsx('div', { className: kr, children: t.readOrEmpty(`menu.tank_params.${e}`) }),
            ],
        });
    console.error(`Unknown ttc param ${e}`);
}
const Er = 'Section_5872c61',
    Mr = 'Section_container_5872c61',
    Lr = 'Section_header_53353a5a',
    Dr = 'Section_detailsContainer_41624a97',
    Tr = 'Section_arrow_931be12',
    Ar = 'Section_arrow__opened_9ccaa82',
    Br = ee.resolve('aliases'),
    Vr = C(function ({
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
            { controls: h } = Zs();
        be(() => clearTimeout(m.current));
        const g = v.useMemo(() => ({ tooltipId: l, paramId: a, extendedTooltip: !0 }), [a, l]),
            x = me({ resId: Br.read((e) => e.hangar.shared.VehicleParams('resId')), args: g });
        return f.jsx('div', {
            className: b(Er, s),
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
                            className: Mr,
                            ...x,
                            children: [
                                f.jsxs('div', {
                                    className: Lr,
                                    children: [f.jsx(Pr, { type: a }), f.jsx(xe.Arrow, { className: b(Tr, d && Ar) })],
                                }),
                                f.jsx(Nr, { indicatorList: e, status: t }),
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
                        children: f.jsx(pr, { ...c, params: o, extraParams: i, className: Dr }),
                    }),
                ],
            }),
        });
    }),
    Or = {
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
    Rr = C(function ({ indicatorAmount: e, classNames: t }) {
        const { model: n } = Zs(),
            { api: s } = ve(),
            [r, o] = ye(s);
        return f.jsxs(f.Fragment, {
            children: [
                f.jsx(Ce, {
                    classNames: {
                        wrapper: Or.scrollWrapper,
                        content: b(Or.scrollContent, Or[`scrollContent__${er(r, o)}`]),
                    },
                    children: f.jsx('div', {
                        className: Or.sections,
                        children: n.computes
                            .sectionParams(e)
                            .map((e) =>
                                a.createElement(Vr, { ...e, key: e.type, className: Or.section, classNames: t }),
                            ),
                    }),
                }),
                f.jsx(we, { classNames: { base: Or.verticalBar } }),
            ],
        });
    }),
    zr = C(function ({ indicatorAmount: e = 10, className: t, classNames: n }) {
        const { model: s } = Zs(),
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
                className: b(Or.base, t),
                children: f.jsx(Ne, { children: f.jsx(Rr, { indicatorAmount: e, classNames: n }) }),
            })
        );
    });
var $r = ((e) => (
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
    ))($r || {}),
    Hr = ((e) => (
        (e.Visible = 'visible'),
        (e.Hidden = 'hidden'),
        (e.NotSuitableVehicle = 'notSuitableVehicle'),
        (e.NoDataAtAll = 'noDataAtAll'),
        e
    ))(Hr || {}),
    Fr = ((e) => (
        (e[(e.NoData = 0)] = 'NoData'),
        (e[(e.Normal = 1)] = 'Normal'),
        (e[(e.Linked = 2)] = 'Linked'),
        (e[(e.Combined = 3)] = 'Combined'),
        e
    ))(Fr || {}),
    Wr = ((e) => ((e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7'), e))(Wr || {}),
    qr = ((e) => ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'), e))(qr || {});
const [Zr, Ur] = B('OptionalDevicesAssistantModel')(
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
                        const t = qr.Common || qr.Legendary;
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
    Gr = 'PopularLoadouts_905d92af',
    Kr = 'PopularLoadouts_base__legendary_44c73d25',
    Jr = 'PopularLoadouts_lipsIcon_94b94918',
    Xr = 'PopularLoadouts_base__linked_44c73d25',
    Qr = 'PopularLoadouts_lips_f8140539',
    Yr = 'PopularLoadouts_base__noDataLegendary_44c73d25',
    eo = 'PopularLoadouts_row_empty_79f784c5',
    to = 'PopularLoadouts_noDataLegendary_8871a45c',
    ao = 'PopularLoadouts_noData_44c73d25',
    no = 'PopularLoadouts_vehicleNotAvailable_6aaecb23',
    so = 'PopularLoadouts_noData_text_44c73d25',
    ro = 'PopularLoadouts_vehicleNotAvailable_text_f6a0ffe8',
    oo = 'PopularLoadouts_scrollWrapper_f6e40aea',
    io = 'PopularLoadouts_scroll_5547fb14',
    lo = 'PopularLoadouts_verticalBar_4b7df3ca',
    co = 'PopularLoadouts_background_59528a5b',
    uo = 'PopularLoadouts_onslaughtBackground_87fd615d',
    mo = 'PopularLoadouts_backgroundWrapper_ceadd975',
    po = 'PopularLoadouts_backgroundWrapper__noData_577b30c5',
    _o = 'PopularLoadouts_border_bb3c99b0',
    ho = 'PopularLoadouts_container_7ca114a3',
    go = 'PopularLoadouts_row_41e986f6',
    vo = 'PopularLoadouts_row_images_11958d34',
    fo = 'PopularLoadouts_row_images__hovered_6d465f9f',
    bo = 'PopularLoadouts_row_image_44c73d25',
    xo = 'PopularLoadouts_row_emptySlot_19879be4',
    yo = 'PopularLoadouts_popularity_85b17be2',
    Co = 'PopularLoadouts_popularity__visible_99ebbe75',
    wo = 'PopularLoadouts_lipsWrapper_f6e40aea',
    No = 'PopularLoadouts_footer_e8f21254',
    Io = 'PopularLoadouts_footer_wrapper_2b5337f0',
    jo = 'PopularLoadouts_footer_wrapper_title_ddd0fc04',
    ko = 'PopularLoadouts_footer_wrapper_pagination_f70ced5f',
    So = 'PopularLoadouts_dot1_859b9d81',
    Po = 'PopularLoadouts_dot2_290c1eaf',
    Eo = 'PopularLoadouts_dot1__active_44c73d25',
    Mo = 'PopularLoadouts_dot2__active_22013c6c',
    Lo = 'PopularLoadouts_footer_arrowWrapper_2b51cfb1',
    Do = 'PopularLoadouts_footer_arrowLeft_44c73d25',
    To = 'PopularLoadouts_footer_arrowRight_f495386';
function Ao(e) {
    return (t = e) !== $r.Empty && t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
        ? `tanksetup.popular_loadouts.optional_devices.${e}`
        : null;
    var t;
}
function Bo(e) {
    return Number.isInteger(e) ? `${e}` : e.toFixed(2);
}
function Vo({ popularity: e, optionalDevice: t, isHovered: n }) {
    const s = a.useMemo(() => t.map(Ao).concat(new Array(3).fill(null)).slice(0, 3), [t]),
        r = 0 === t.length;
    return f.jsxs('div', {
        className: b(go, r && eo),
        children: [
            f.jsx('div', {
                className: b(yo, n && Co),
                children: f.jsx(je, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: Bo(e) } }),
            }),
            f.jsx('div', {
                className: b(vo, n && fo),
                children: s.map((e, t) =>
                    e ? f.jsx(ke, { className: bo, path: e }, t) : f.jsx('div', { className: xo }, t),
                ),
            }),
        ],
    });
}
const Oo = ee.resolve('aliases'),
    Ro = ee.resolve('views'),
    zo = ee.resolve('strings'),
    $o = C(function ({
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
            { model: u, controls: m } = Ur(),
            p = u.computes.modeType() === Wr.Comp7,
            _ = c && !n,
            h = u.computes.sourceVehicleCompDescrForPreset(r),
            g = u.computes.sortedCommonItems(),
            v = u.computes.sortedLegendaryItems(),
            x = r === qr.Common ? g : v,
            y = a.useMemo(() => Array.from({ length: 3 }, (e, t) => x[t] ?? { popularity: 0, items: [] }), [x]),
            C = Se({
                resId: Oo.read((e) => e.hangar.shared.OptionalDevicesAssistant('resId')),
                contentId: Ro.read((e) => e.lobby.tanksetup.tooltips.PopularLoadoutsTooltip('resId')),
                args: { sourceVehicleCompDescr: h, optionalDevicesResultType: o },
            }),
            w =
                r === qr.Common
                    ? zo.readOrEmpty('tank_setup.popularLoadouts.common')
                    : zo.readOrEmpty('tank_setup.popularLoadouts.legendary');
        function N() {
            const e = r === qr.Common ? qr.Legendary : qr.Common;
            (i(e), m.changePreset(e));
        }
        if (e)
            return f.jsx('div', {
                className: no,
                children: f.jsx('div', {
                    className: ro,
                    children: zo.readOrEmpty('tank_setup.popularLoadouts.vehicleNotAvailable'),
                }),
            });
        if (t)
            return f.jsx('div', {
                className: ao,
                children: f.jsx('div', {
                    className: so,
                    children: zo.readOrEmpty('tank_setup.popularLoadouts.noData'),
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
                f.jsx('div', { className: _o }),
                s &&
                    f.jsx('div', {
                        className: to,
                        children: zo.readOrEmpty('tank_setup.popularLoadouts.noDataLegendary'),
                    }),
                f.jsx('div', { className: co }),
                p && f.jsx('div', { className: uo }),
                f.jsx('div', {
                    className: oo,
                    children: f.jsxs(Ne, {
                        children: [
                            f.jsx(Ce, {
                                className: io,
                                children: f.jsx('div', {
                                    className: ho,
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
                                            Vo,
                                            { popularity: e.popularity, optionalDevice: e.items, isHovered: _ },
                                            t,
                                        ),
                                    ),
                                }),
                            }),
                            f.jsx(we, { classNames: { base: lo } }),
                        ],
                    }),
                }),
                f.jsx('div', { className: _o }),
                f.jsx('div', { className: Qr }),
                f.jsxs('div', {
                    className: No,
                    children: [
                        f.jsx('div', {
                            className: Lo,
                            onMouseEnter: j,
                            onClick: I,
                            children: f.jsx('div', { className: Do, onClick: N }),
                        }),
                        f.jsxs('div', {
                            className: Io,
                            children: [
                                f.jsxs('div', {
                                    ...C,
                                    className: wo,
                                    children: [
                                        f.jsx('div', { className: Jr }),
                                        f.jsx('div', { className: jo, children: w }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: ko,
                                    children: [
                                        f.jsx('div', { className: b(So, 0 === r && Eo) }),
                                        f.jsx('div', { className: b(Po, 1 === r && Mo) }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsx('div', {
                            className: Lo,
                            onMouseEnter: j,
                            onClick: I,
                            children: f.jsx('div', { className: To, onClick: N }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Ho = C(function () {
        const { model: e } = Ur(),
            [t, n] = a.useState(e.selectedPreset.get().mType || qr.Common),
            s = e.computes.optionalDevicesResultTypeForPreset(t),
            r = s === Fr.Linked,
            o = s === Fr.Combined,
            i = r || o,
            l = s === Fr.NoData && qr.Legendary,
            c = e.state.get() === Hr.NoDataAtAll,
            d = e.state.get() === Hr.NotSuitableVehicle;
        return f.jsxs('div', {
            className: b(Gr, t === qr.Legendary && Kr, i && Xr, l && Yr),
            children: [
                f.jsx('div', { className: b(mo, (c || d) && po) }),
                f.jsx($o, {
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
    Fo = 'EquipmentAssistant_c5998863',
    Wo = C(function ({ className: e }) {
        const { model: t } = Ur(),
            a = t.state.get() === Hr.Hidden;
        return f.jsx('div', {
            className: b(Fo, e),
            'data-test-id': 'equipmentAssistant',
            children: !a && f.jsx(Ho, {}),
        });
    }),
    qo = 'TankInfo_5a43ab26',
    Zo = 'TankInfo_ttc_b7c2d1d7',
    Uo = 'TankInfo_techParams_3f23a8c3',
    Go = 'TankInfo_text_3d2affa7',
    Ko = 'TankInfo_equipmentAssistant_6633e061',
    Jo = 'TankInfo_vehicleInfo_6633e061',
    Xo = 'TankInfo_summary_1066f4ee',
    Qo = 'TankInfo_accordionDetails_e30a5dd6',
    Yo = ee.resolve('aliases'),
    ei = Pe('LoadoutScreenTankInfo'),
    ti = { summary: Xo, accordionDetails: Qo },
    ai = C(function () {
        const e = Ts().model.selectedVehicle(),
            t = Ts().model.selectedVehicleStatistics(),
            a = Yo.read((e) => e.hangar.shared.VehicleParams('resId')),
            n = Yo.read((e) => e.hangar.shared.OptionalDevicesAssistant('resId')),
            s = Ee(),
            r = v.useMemo(() => ({ rootId: n }), [n]),
            o = v.useMemo(() => ({ rootId: a }), [a]);
        if (!e || !t) return;
        const i = s.location.startsWith('/hangar/loadout/equipment');
        return f.jsxs(ei, {
            className: qo,
            children: [
                f.jsxs(Me, {
                    className: Jo,
                    children: [
                        f.jsx(Me.Level, { className: Go, value: e.level }),
                        Le(e.type) && f.jsx(Me.Type, { type: e.type, premium: t.elite }),
                        f.jsx(Me.Name, { className: Go, children: e.shortName }),
                    ],
                }),
                f.jsx('div', {
                    className: Zo,
                    children: f.jsx(qs, { options: o, children: f.jsx(zr, { className: Uo, classNames: ti }) }),
                }),
                i && f.jsx(Zr, { options: r, children: f.jsx(Wo, { className: Ko }) }),
            ],
        });
    }),
    ni = 'ScreenWrapper_39a2fe74',
    si = 'ScreenWrapper_inner_f586f6da',
    ri = 'ScreenWrapper_content_42e9ccec',
    oi = 'ScreenWrapper_info_b6387d23',
    ii = 'ScreenWrapper_flag_f17acc40',
    li = ee.resolve('aliases'),
    ci = Pe('LoadoutScreenWrapper', ni);
const di = a.createContext({ ttcEnabled: !1 });
const ui = C(function ({ classNames: e, children: t }) {
        const n = Ts().model.selectedVehicle(),
            s = (function () {
                const e = Ts().model.selectedVehicle(),
                    t = Os(),
                    a = li.read((e) => e.hangar.shared.VehicleParams('resId')),
                    n = De(a);
                return Boolean(e) && (!t || t.model.computed.ttcEnabled()) && n;
            })(),
            r = a.useMemo(() => ({ ttcEnabled: s }), [s]);
        return f.jsx(di.Provider, {
            value: r,
            children: f.jsxs(ci, {
                className: null == e ? void 0 : e.base,
                children: [
                    n &&
                        f.jsx(ke, {
                            className: b(ii, null == e ? void 0 : e.flag),
                            path: `flags.c_600x450.${G(n.nationId)}`,
                        }),
                    f.jsxs('div', {
                        className: si,
                        children: [
                            f.jsx('div', { className: b(ri, null == e ? void 0 : e.content), children: t }),
                            f.jsx('div', {
                                className: b(oi, null == e ? void 0 : e.info),
                                children: s && f.jsx(ai, {}),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    mi = { buySlot: 'buySlot', buyTank: 'buyTank', restoreTank: 'restoreTank', rentTank: 'rentTank' },
    pi = {
        [mi.buySlot]: 'buy_slot',
        [mi.buyTank]: 'buy_vehicle_new',
        [mi.restoreTank]: 'restore_vehicle',
        [mi.rentTank]: 'wot_plus_slot',
    },
    _i = (e, t) => ({
        left: [...(t != Ls ? [mi.rentTank] : [])],
        right: [mi.buyTank, ...(e > 0 ? [mi.restoreTank] : []), mi.buySlot],
    }),
    hi = (e) => e in mi;
function gi(e, t) {
    return a.useMemo(() => {
        if (!t) return { currentIndex: -1, currentPosition: -1 };
        const a = e.indexOf(t);
        return { currentIndex: a, currentPosition: a >= 0 ? a + 1 : -1 };
    }, [e, t]);
}
function vi(e, t, n, s, r) {
    a.useLayoutEffect(() => {
        function a() {
            const a = e.getWrapperSize(),
                o = e.animationScroll.scrollPosition.get();
            if (!a) return;
            r && e.applyScroll(0, { immediate: !0 });
            const i = n - Ae(1),
                l = o,
                c = o + a,
                d = i * Math.floor(t / s),
                u = d + i,
                m = d - (Math.floor(a / i) / 2) * i;
            (d > l && u < c) || e.applyScroll(m, { immediate: !0 });
        }
        a();
        return new Te().add(e.events.on('resizeHandled', a)).add(e.events.on('recalculateContent', a)).dispose;
    }, [t, e, n, s, r]);
}
const fi = {
    base: 'Content_7ccb81a0',
    disabledOverlay: 'Content_disabledOverlay_a8908196',
    base__disabled: 'Content_base__disabled_da09528a',
    base__selected: 'Content_base__selected_da09528a',
    base__empty: 'Content_base__empty_da09528a',
};
function bi({ children: e, selected: t, disabled: a, empty: n }) {
    return f.jsxs('div', {
        'data-name': 'Content',
        className: b(fi.base, n && fi.base__empty, t && fi.base__selected, a && fi.base__disabled),
        children: [e, a && f.jsx('div', { className: fi.disabledOverlay })],
    });
}
const xi = {
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
function yi({ children: e, selected: t = !1, disabled: a = !1, active: n, className: s, ...r }) {
    const o = a || void 0 === r.onClick;
    return f.jsx('div', {
        ...r,
        'data-name': 'Slot',
        className: b(
            xi.base,
            n && xi.base__active,
            t && xi.base__selected,
            a && xi.base__disabled,
            o && xi.base__empty,
            xi.base__wrapper,
            s,
        ),
        children: f.jsxs('div', {
            className: xi.content,
            children: [
                f.jsx(bi, { selected: t, disabled: a, empty: o, children: e }),
                t && f.jsx('div', { className: b(xi.selected, xi.selected__border) }),
                f.jsx('div', { className: xi.selected }),
            ],
        }),
    });
}
const Ci = {
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
    wi = { [Es]: 'menu.tankCarousel.wotPlusSelectionPending', [Ms]: 'menu.tankCarousel.wotPlusSelectionAvailable' },
    Ni = C(function ({ type: e }) {
        const t = Ts(),
            a = t.model.slots.price.currency.get(),
            n = t.model.slots.price.value.get(),
            s = t.model.slots.free.get(),
            r = t.model.slots.recover.get(),
            o = t.model.slots.discount.get(),
            i = t.model.telecomRentStatus.get();
        if (e === mi.buySlot)
            return f.jsx('div', {
                className: Ci.currency,
                children: f.jsx(Be, {
                    type: Oe.currency,
                    size: Ve.extraSmall,
                    enabled: o,
                    classNames: { icon: Ci.discount },
                    children: f.jsx(Re, {
                        type: a,
                        size: Ve.extraSmall,
                        reverse: !0,
                        classNames: { base: b(Ci.content, Ci.content__buySlot), icon: Ci.contentIcon },
                        children: n,
                    }),
                }),
            });
        if (e === mi.rentTank) {
            const e = wi[i];
            return e ? f.jsx(je, { className: Ci.text, upgradeLegacy: !0, path: e }) : null;
        }
        return f.jsxs('div', {
            className: Ci.content,
            children: [
                e === mi.buyTank &&
                    f.jsx(je, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.buyTankEmptyCount',
                        params: { count: s },
                    }),
                e === mi.restoreTank &&
                    f.jsx(je, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.restoreTankCount',
                        params: { count: r },
                    }),
            ],
        });
    });
function Ii({ type: e, width: t, height: n, doubleRow: s, className: r }) {
    const o = Ts(),
        i = fe(),
        l = o.model.slots.price.value.get(),
        c = o.model.slots.price.defaultValue.get(),
        d = o.model.slots.discount.get();
    o.model.telecomRentStatus.get();
    const u = ee.resolve('strings'),
        m = ze(`hangar.carousel.actionCards.x48x48.${e}`, `hangar.carousel.actionCards.x96x96.${e}`),
        p = $e({
            header: u.readOrEmpty(`tooltips.tanks_carousel.${pi[e]}.header`),
            body: u.readOrEmpty(`tooltips.tanks_carousel.${pi[e]}.body`),
        }),
        _ = He(
            'actionSlotPrice',
            a.useMemo(() => [[l], [c]], [l, c]),
            a.useMemo(() => ({ disabled: !d }), [d]),
        ),
        h = d && pi[e] === pi.buySlot ? _ : p;
    return f.jsx(yi, {
        ...h,
        className: r,
        style: { width: `${t}px`, height: `${n}px` },
        'data-test-id': e,
        onClick: function (t) {
            (h.onClick(), i.play('click', { target: 'vehicle:action-cards', original: t }));
            const a = {
                [mi.buySlot]: o.controls.buySlot,
                [mi.buyTank]: o.controls.goBuyVehicle,
                [mi.restoreTank]: o.controls.goRecoverVehicle,
                [mi.rentTank]: o.controls.selectTelecomRentalVehicle,
            }[e];
            if ('function' != typeof a) return console.error(`Unknown action type ${e} in ${Ii.name} handleClick`);
            a();
        },
        onMouseEnter: function (e) {
            (h.onMouseEnter(e), i.play('mouse-enter', { target: 'vehicle:action-cards', original: e }));
        },
        children: f.jsxs('div', {
            className: b(Ci.wrapper, s && Ci.wrapper__double),
            children: [
                f.jsx(ke, {
                    className: Ci.icon,
                    path: `hangar.carousel.actionCards.x32x32.${e}`,
                    adaptive: { medium: { path: m } },
                }),
                f.jsx('div', {
                    className: Ci.text,
                    children: f.jsx(je, { path: `menu.tankCarousel.vehicleStates.${e}` }),
                }),
                f.jsx(Ni, { type: e }),
            ],
        }),
    });
}
const ji = 'undamaged',
    ki = { ['54033']: 'alpha', ['50705']: 'alpha', ['51201']: 'super', ['56833']: 'super' },
    Si = {
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
    Pi = {
        [Si.ammoNotFull]: 'ammo',
        [Si.crewNotFull]: 'crew',
        [Si.exploded]: 'repair',
        [Si.destroyed]: 'repair',
        [Si.damaged]: 'repair',
        [Si.rentable]: 'rental',
        [Si.rentableAgain]: 'rental',
        [Si.rentalIsOver]: 'rental',
        [Si.tooHeavy]: 'notSuitable',
        [Si.unsuitableToQueue]: 'notSuitable',
        [Si.unsuitableToUnit]: 'notSuitable',
        [Si.inPrebattle]: 'inPlatoon',
        [Si.battle]: 'inBattle',
        [Si.wot_plus_exclusive_vehicle_disabled]: 'notSuitable',
    };
function Ei(e, t, a) {
    return !(!e || t === is || !a) && a.status !== Si.unsuitableToQueue && a.maxBpScore > 0;
}
const Mi = {
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
    Li = Pe('Favorite', Mi.favorite, { variants: { active: { true: Mi.favorite__active } } });
function Di({ vehicle: e, selected: t, active: a, className: n }) {
    return f.jsx(ke, {
        className: b(Mi.flag, t || (a && Mi.flag__active), n),
        path: `hangar.carousel.cards.flags.x400x300.${G(e.nationId)}`,
        position: 'top left',
    });
}
const Ti = C(function ({ vehicle: e, statistic: t, validBP: a, classNames: n }) {
    var s;
    const r = (null == (s = Ln()) ? void 0 : s.model.isCrystalEarnEnabled.get()) ?? !0;
    if (!t) return;
    const o = (Fe(t.numberOfCrystalEarned, 1) ?? 0) <= (Fe(t.numberOfCrystalEarned, 0) ?? 0);
    return f.jsxs(f.Fragment, {
        children: [
            t.fromWotPlus && f.jsx('div', { className: b(Mi.wotPlus, null == n ? void 0 : n.wotPlus) }),
            r &&
                e.crystalEarning &&
                f.jsx('div', { className: b(Mi.crystal, o && Mi.crystal__limit, null == n ? void 0 : n.crystal) }),
            t.bpSpecial && a && f.jsx('div', { className: b(Mi.bpBonus, null == n ? void 0 : n.bpBonus) }),
        ],
    });
});
function Ai({ vehicle: e, validBP: t, dimmed: a, active: n, statistic: s, selected: r, doubleRow: o, ...i }) {
    return f.jsxs('div', {
        ...i,
        className: b(Mi.base, o && Mi.base__double, i.className),
        children: [
            f.jsx(Di, { vehicle: e, active: n, selected: r }),
            f.jsx(We, {
                className: b(
                    Mi.vehicle,
                    (((null == s ? void 0 : s.status) && s.status !== ji) || a) && Mi.vehicle__dimmed,
                ),
                name: e.name,
            }),
            f.jsx(Ti, { vehicle: e, statistic: s, validBP: t }),
            f.jsx(Li, { active: e.favorite }),
        ],
    });
}
const Bi = 'Bonuses_8169b4b3',
    Vi = 'Bonuses_bonus_af8ebe7c',
    Oi = 'Bonuses_bonus__active_2364401e',
    Ri = 'Bonuses_bonusIcon_b65fb47f',
    zi = 'Bonuses_bonusValue_322db074',
    $i = 'Bonuses_rent_fd59e0c9',
    Hi = 'Bonuses_base__double_ca1cd57b',
    Fi = 'Bonuses_icon_3991db74',
    Wi = 'Bonuses_text_9c9c729',
    qi = ee.resolve('strings');
function Zi({ bonusMultiplier: e, className: t, classNames: a }) {
    return f.jsxs('div', {
        className: b(Vi, -1 !== e && Oi, t),
        children: [
            f.jsx('div', { className: b(Ri, null == a ? void 0 : a.icon) }),
            f.jsx('div', {
                className: b(zi, null == a ? void 0 : a.value),
                children: `${qi.readOrEmpty('common.multiplierSmall')}${e}`,
            }),
        ],
    });
}
const Ui = C(function ({ vehicle: e, statistic: t, doubleRow: a, ...n }) {
        var s;
        const r = (null == (s = Ln()) ? void 0 : s.model.isDailyMultipliedXpEnabled.get()) ?? !0;
        return f.jsxs('div', {
            ...n,
            className: b(Bi, a && Hi, n.className),
            children: [
                r && t && f.jsx(Zi, { bonusMultiplier: t.bonusMultiplier }),
                f.jsx(qe.ShortCounter, {
                    time: e.rent.leftTime,
                    wins: e.rent.leftWins,
                    battles: e.rent.leftBattles,
                    classNames: { base: $i, icon: Fi, text: Wi },
                }),
            ],
        });
    }),
    Gi = {
        root: 'Information_root_6e8d4f26',
        base: 'Information_dd628d50',
        info: 'Information_info_b2948982',
        details: 'Information_details_e5340a0c',
        base__double: 'Information_base__double_6e8d4f26',
        text: 'Information_text_7b2995dc',
        text__level: 'Information_text__level_e5a9014e',
        text__premium: 'Information_text__premium_741ebb2f',
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
        truncatedName: 'Information_truncatedName_2e56c743',
    },
    Ki = Pe('VehicleName', {
        element: Me.Name,
        className: Gi.text,
        cva: { variants: { premium: { true: Gi.text__premium } } },
    });
function Ji({ statistic: e, vehicle: t, className: a, status: n }) {
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
        className: b(Gi.battlePass, e.maxBpScore > 0 && Gi.battlePass__active, e.bpSpecial && Gi.battlePass__bonus, a),
        onMouseEnter: function (e) {
            null == i || i.onMouseEnter(e);
        },
        onMouseLeave: function (e) {
            null == i || i.onMouseLeave();
        },
        children: [
            f.jsxs('div', {
                className: Gi.bpPoints,
                children: [
                    f.jsx('div', { className: Gi.points, children: Ze.formatNumber('integral', e.bpProgress) }),
                    f.jsx('div', {
                        className: b(Gi.points, Gi.points__slash),
                        children: o.readOrEmpty('common.common.slash'),
                    }),
                    f.jsx('div', { className: Gi.points, children: Ze.formatNumber('integral', e.maxBpScore) }),
                    f.jsx('div', { className: Gi.bpShadow }),
                ],
            }),
            f.jsx('div', { className: Gi.bpIcon }),
        ],
    });
}
function Xi({ statistic: e, elite: t, vehicle: a, selected: n, classNames: s, className: r }) {
    return f.jsxs('div', {
        className: b(Gi.details, r),
        children: [
            e &&
                f.jsx(Me.Prestige, {
                    level: e.prestigeLevel,
                    grade: e.prestigeGrade,
                    type: e.prestigeType,
                    direction: Ue.left,
                    className: b(Gi.prestige, n && Gi.prestige__active, null == s ? void 0 : s.prestige),
                }),
            f.jsx(Me.Level, { className: b(Gi.text, Gi.text__level, null == s ? void 0 : s.level), value: a.level }),
            Le(a.type) &&
                f.jsx(Me.Type, {
                    type: a.type,
                    premium: t || (null == e ? void 0 : e.elite),
                    size: Me.Type.sizes.x24x24,
                    className: null == s ? void 0 : s.type,
                }),
        ],
    });
}
function Qi({ vehicle: e, className: t, classNames: a }) {
    const n = ki[e.id],
        s = e.nationChangeAvailable,
        r = e.rent.leftTime > 0 || e.rent.leftWins > 0 || e.rent.leftBattles > 0;
    return f.jsxs('div', {
        className: b(
            Gi.identifier,
            Gi[`identifier__${n}`],
            s && Gi.identifier__changeNation,
            r && Gi.identifier__rent,
            t,
        ),
        children: [
            f.jsx(Ki, {
                className: b(Gi.truncatedName, null == a ? void 0 : a.name),
                premium: e.premium,
                children: f.jsx(Ge, { text: e.shortName }),
            }),
            (n || s) &&
                f.jsx('div', {
                    className: b(
                        Gi.identifierIcon,
                        Gi[`identifierIcon__${n}`],
                        s && Gi.identifierIcon__changeNation,
                        null == a ? void 0 : a.icon,
                    ),
                }),
        ],
    });
}
const Yi = C(function ({ vehicle: e, statistic: t, selected: a, doubleRow: n, ...s }) {
        const r = Ts(),
            o = r.model.bpState.active.get(),
            i = r.model.bpState.status.get();
        return f.jsxs('div', {
            ...s,
            className: b(Gi.base, n && Gi.base__double, s.className),
            children: [
                t && Ei(o, i, t) && f.jsx(Ji, { vehicle: e, statistic: t, status: i }),
                f.jsxs(Me, {
                    className: Gi.info,
                    children: [f.jsx(Xi, { vehicle: e, statistic: t, selected: a }), f.jsx(Qi, { vehicle: e })],
                }),
            ],
        });
    }),
    el = {
        base: 'Overlay_fc7c8edc',
        alert: 'Overlay_alert_db4a0e15',
        alertIcon: 'Overlay_alertIcon_3d7c077a',
        base__double: 'Overlay_base__double_3c7155a',
        alertText: 'Overlay_alertText_8a4e1d4d',
        alertText__light: 'Overlay_alertText__light_bece984e',
    };
function tl({ status: e, classNames: t, className: a }) {
    const n = ee.resolve('images'),
        s = ze(`hangar.carousel.cards.alerts.${Pi[e]}`, `hangar.carousel.cards.alerts.${Pi[e]}_upscale`),
        r = ze('hangar.carousel.cards.alerts.notSuitable', 'hangar.carousel.cards.alerts.notSuitable_upscale'),
        o = e === Si.battle || e === Si.inPrebattle;
    return f.jsxs('div', {
        className: b(el.alert, a),
        children: [
            f.jsx(ke, { className: b(el.alertIcon, null == t ? void 0 : t.icon), path: n.has(s) ? s : r }),
            f.jsx(je, {
                upgradeLegacy: !0,
                className: b(el.alertText, o && el.alertText__light, null == t ? void 0 : t.text),
                path: `menu.tankCarousel.vehicleStates.${e}`,
                params: { icon: f.jsx(ke, { path: 'library.premium_small', width: 34, height: 16 }) },
            }),
        ],
    });
}
function al({ statistic: e, doubleRow: t, ...a }) {
    return e.status === ji
        ? null
        : f.jsx('div', {
              ...a,
              className: b(el.base, t && el.base__double, a.className),
              children: f.jsx(tl, { status: e.status }),
          });
}
Pe('Disable', el.disable);
const nl = 'Card_e79008fd',
    sl = 'Card_base__double_f8b7f334',
    rl = 'Card_content_a6141b08',
    ol = 'Card_border_e9cb9a85',
    il = ee.resolve('views'),
    ll = ee.resolve('aliases'),
    cl = C(function ({ vehicleId: e, selected: t = !1, doubleRow: a, children: n, concurrent: s, ...r }) {
        const o = Ts(),
            i = ms().model.get(e),
            l = ds().model.get(e),
            c = fe(),
            d = o.model.current.inventoryId.get(),
            u = o.model.prebattleModeActive(),
            m = o.model.bpState.active.get(),
            p = o.model.bpState.status.get();
        if (!i || !l) return f.jsx(yi, { ...r });
        const _ = s ? dl : Ai;
        return f.jsxs(yi, {
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
                f.jsx(_, { vehicle: i, validBP: Ei(m, p, l), dimmed: u, statistic: l, selected: t, doubleRow: a }),
                f.jsx(ul, {
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
function dl(e) {
    const [t, n] = a.useState(!0),
        [, s] = a.useTransition();
    return (
        a.useEffect(() => {
            t && s(() => n(!1));
        }, [t]),
        t ? null : f.jsx(Ai, { ...e })
    );
}
function ul({ vehicle: e, statistic: t, selected: n, doubleRow: s, concurrent: r, disableContextMenu: o }) {
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
            resId: ll.read((e) => e.hangar.shared.VehiclesInventory('resId')),
            contentId: il.read((e) => e.mono.hangar.vehicle_tooltip('resId')),
            args: { inventoryId: null == e ? void 0 : e.inventoryId },
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
                  className: b(nl, s && sl),
                  children: [
                      f.jsxs('div', {
                          className: rl,
                          children: [
                              f.jsx(Ui, { vehicle: e, statistic: t, doubleRow: s }),
                              f.jsx(Yi, { vehicle: e, selected: n, statistic: t, doubleRow: s }),
                          ],
                      }),
                      f.jsx(al, { statistic: t, doubleRow: s }),
                  ],
              })
    );
}
const ml = {};
function pl({ cardHeight: e, className: t }) {
    return f.jsx(yi, {
        className: t,
        style: { height: `${e}px` },
        children: f.jsx('div', { className: ml.vehicleSlot }),
    });
}
const _l = C(function ({ vehicleId: e, cardHeight: t, className: a }) {
    const n = Ts().model.selectedVehicle(),
        s = null == n ? void 0 : n.id;
    return void 0 === e
        ? (console.error('VehicleId is not defined'), f.jsx(pl, { className: b(ol, a), cardHeight: t }))
        : e === Us
          ? f.jsx(pl, { className: b(ol, a), cardHeight: t })
          : hi(e)
            ? f.jsx(Ii, { className: b(ol, a), type: e, height: t })
            : f.jsx(Je, {
                  failure: () => f.jsx(pl, { className: b(ol, a), cardHeight: t }),
                  children: f.jsx(cl, {
                      concurrent: !0,
                      vehicleId: e,
                      selected: e === s,
                      className: b(ol, a),
                      style: { height: `${t}px` },
                  }),
              });
});
const hl = {
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
function gl({ children: e, ...t }) {
    return f.jsx('div', { ...t, className: hl.content, children: e });
}
const vl = C(function (e) {
        const t = Ts(),
            a = Ps(),
            n = Os(),
            { api: s } = ve(),
            [r, o] = ye(s),
            i = null == a ? void 0 : a.model.current(),
            l = t.model.current.list(),
            c = i && 0 === l.length,
            d = null == n ? void 0 : n.model.computed.ttcEnabled();
        return f.jsxs('div', {
            className: b(hl.scroll, hl[`scroll__${er(r, o)}`]),
            children: [
                f.jsx(Ce, {
                    ...e,
                    classNames: {
                        ...e.classNames,
                        wrapper: hl.scrollWrapper,
                        content: b(hl.scrollContent, c && hl.scrollContent__empty),
                    },
                    children: e.children,
                }),
                !s.disabled && f.jsx(we, { classNames: { base: b(hl.verticalBar, d && hl.verticalBar__ttc) } }),
            ],
        });
    }),
    fl = C(function ({ extraColumns: e = 0 }) {
        const t = Ts(),
            n = Ps(),
            { api: s } = ve(),
            r = null == n ? void 0 : n.model.current(),
            o = t.model.prebattleModeActive(),
            i = et(Gs, Ks),
            l = i.row + e,
            c = Ae(i.height),
            d = t.model.current.ids(),
            u = t.model.current.list(),
            m = t.model.selectedVehicle(),
            p = t.model.telecomRentStatus.get(),
            _ = null == m ? void 0 : m.id,
            { currentIndex: h } = gi(d, _),
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
            b = _i(v, p),
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
                        activeSlotsIds: [...I, ...N, ...j, ...Array(0 === a ? t : a).fill(Us)],
                    };
                }, [I, S, N, k, j]));
        var N, I, j, k, S;
        return (
            vi(s, h, c, l),
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
                wrappers: { Content: gl },
                renderScroll: (e) => f.jsx(vl, { ...e, style: { '--card-width': 100 / l + '%' } }),
                itemsPerRow: l,
                renderElement: (e) => f.jsx(_l, { vehicleId: w[e], cardHeight: c, className: hl.card }, w[e] ?? e),
            })
        );
    }),
    bl = 'EmptyStateMessage_923658c6',
    xl = 'EmptyStateMessage_title_278b22ff',
    yl = 'EmptyStateMessage_description_5a4f259e',
    Cl = ee.resolve('strings'),
    wl = C(function (e) {
        const t = Ps(),
            a = Ts(),
            n = null == t ? void 0 : t.model.current();
        if (!n || 0 !== a.model.current.amount()) return null;
        const s = 0 === (null == n ? void 0 : n.list.length) ? 'empty_list' : 'not_found';
        return f.jsxs('div', {
            className: b(bl, e.className),
            children: [
                f.jsx('div', { className: xl, children: Cl.readOrEmpty(`playlists.empty_state.${s}.title`) }),
                f.jsx('div', { className: yl, children: Cl.readOrEmpty(`playlists.empty_state.${s}.body`) }),
            ],
        });
    }),
    Nl = 'on',
    Il = 'disabled';
function jl(e) {
    return { id: e.id, tankmanId: e.tankmanId, roles: rt(e.roles) };
}
const kl = 'disabled',
    [Sl, Pl] = B('CrewModel')(
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
                a = X.structural(() => nt(t.slots.get(), jl)),
                n = X.model((e) => t.crew.get()[e]),
                s = X.primitive((e) => {
                    const t = n(e);
                    return (
                        ((null == t ? void 0 : t.newPerksCount) ?? 0) +
                        ((null == t ? void 0 : t.newBonusPerksCount) ?? 0)
                    );
                }),
                r = X.primitive(() => t.state.get() === kl);
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
    El = 6,
    Ml = 100,
    Ll = 'doge_role',
    Dl = a.createContext(null);
function Tl() {
    const e = a.useContext(Dl);
    return (ne(null !== e, 'You can use crew context hooks only with crew slot component'), e);
}
const Al = {
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
        [Ll]: (e) =>
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
    Bl = 'Profile_491a8220',
    Vl = 'Profile_roles_2d239199',
    Ol = 'Profile_role_b3df2c53',
    Rl = 'Profile_name_5c9b6f18',
    zl = 'Profile_name__maxLevel_85270e75',
    $l = ee.resolve('strings'),
    Hl = ee.resolve('aliases');
function Fl({ role: e = '', className: t }) {
    const a = Al[e];
    if (a) return f.jsx(a, { className: t });
    console.error(`Unknown role type ${e}`);
}
function Wl({ roles: e, name: t, perksAmount: n, progress: s }) {
    const { tankmanId: r, slotId: o } = Tl(),
        i = a.useMemo(() => ({ tooltipId: 'vehicleCrewMemberInHangar', tankmanID: r, slotIdx: o }), [o, r]);
    return f.jsxs('div', {
        className: Bl,
        children: [
            f.jsx(it, {
                params: { resId: Hl.read((e) => e.hangar.shared.Crew('resId')), args: i },
                className: Vl,
                children: ue(e, (e, t) => f.jsx(Fl, { role: e, className: Ol }, t)),
            }),
            t
                ? f.jsx(Ge, { className: b(Rl, n === El && s === Ml && zl), text: t })
                : f.jsx(je, {
                      upgradeLegacy: !0,
                      className: Rl,
                      path: 'crew_widget.emptySlot.chooseTankman',
                      params: { role: $l.readOrEmpty(`item_types.tankman.roles.objectiveCase.${e && e[0]}`) },
                  }),
        ],
    });
}
function ql({ skinId: e, customizedSkin: t }) {
    return t ? `tankmen.icons.big.crewSkins.${lt(e)}` : `tankmen.icons.big.${lt(e)}`;
}
const Zl = 'Tankman_content_4548f2cf',
    Ul = 'Tankman_94b49163',
    Gl = 'Tankman_base__bonusPerk_dc2caccc',
    Kl = 'Tankman_content__empty_d0544ce1',
    Jl = 'Tankman_content__emptyRed_83bc592f',
    Xl = a.memo(function (e) {
        const { customizedSkin: t, bonusPerk: a, skinId: n, className: s, animation: r } = e;
        return f.jsx('div', {
            className: b(Ul, a && Gl, s),
            children: n
                ? f.jsx(ke, { className: Zl, fit: 'cover', path: ql({ skinId: n, customizedSkin: t }) })
                : f.jsxs(f.Fragment, {
                      children: [
                          f.jsx('div', { className: b(Zl, Kl) }),
                          f.jsx(w.div, { className: b(Zl, Jl), style: r }),
                      ],
                  }),
        });
    }),
    Ql = {
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
    Yl = ee.resolve('strings'),
    ec = C(function () {
        const { model: e, controls: t } = Pl(),
            a = fe(),
            n = e.computes.disabled(),
            s = e.vehicleNation.get();
        return f.jsx(ct, {
            params: {
                header: Yl.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${s}.header`),
                body: Yl.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${s}.body`),
            },
            asChild: !0,
            children: f.jsxs('div', {
                className: Ql.base,
                onClick: function () {
                    n || a.play('click', { target: 'crew-widget:dog-slot' });
                },
                onMouseEnter: function () {
                    n || a.play('mouse-enter', { target: 'crew-widget:dog-slot' });
                },
                children: [
                    f.jsx(Xl, { customizedSkin: !1, skinId: 'ussr_dog_1' }),
                    f.jsxs('div', {
                        className: Ql.block,
                        children: [
                            f.jsxs('div', {
                                className: Ql.info,
                                children: [
                                    f.jsx('div', {
                                        className: Ql.roles,
                                        children: f.jsx(Fl, { role: Ll, className: Ql.role }),
                                    }),
                                    f.jsx('div', {
                                        className: Ql.name,
                                        children: Yl.readOrEmpty(`menu.hangar.crew.rody.dog.${s}.name`),
                                    }),
                                ],
                            }),
                            f.jsx(dt, {
                                className: Ql.dogDetails,
                                theme: dt.themes.secondary,
                                size: dt.sizes.small,
                                onClick: (e) => {
                                    (t.showDogInfo(), e.stopPropagation());
                                },
                                children: f.jsx('div', {
                                    className: Ql.detailsText,
                                    children: Yl.readOrEmpty('crew.dogPawTooltip.details.body'),
                                }),
                            }),
                        ],
                    }),
                    f.jsx('div', { className: b(Ql.disabled, n && Ql.overlay__active) }),
                ],
            }),
        });
    }),
    tc = { retrainingProgress: 'retrainingProgress', unsuitableTankman: 'unsuitableTankman', default: 'default' };
const ac = -1,
    nc = 1,
    sc = 8,
    rc = 'new_skill',
    oc = 'brotherhood',
    ic = {
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
    lc = [ic.disable, ic.newDisableFull, ic.newDisableLow, ic.activeDisable, ic.newActiveDisable],
    cc = [ic.newDisableFull, ic.newFull];
function dc(e) {
    var t;
    return null == (t = e.find((e) => e.bonus === Ml)) ? void 0 : t.name;
}
function uc(e) {
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
            instruction: dc(c),
        });
    for (let u = 0; u < n; u++) {
        const e = s !== Ml && u === n - 1 ? ut.learning : ut.learned;
        d.push({ id: t, name: rc, state: e, vehEfficacy: r, efficacy: o, role: i, nativeTank: l });
    }
    return d;
}
function mc(e) {
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
    return uc({
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
function pc(e) {
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
            uc({
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
        e.state === ut.learning && t.state !== ut.learning
            ? 1
            : e.state !== ut.learning && t.state === ut.learning
              ? -1
              : e.name === rc && t.name !== rc
                ? 1
                : e.name !== rc && t.name === rc
                  ? -1
                  : 0,
    );
}
const _c = {
        base: 'EfficiencyIndicator_d9560b90',
        base__bonus: 'EfficiencyIndicator_base__bonus_a4144984',
        percent: 'EfficiencyIndicator_percent_147766be',
        icon: 'EfficiencyIndicator_icon_fb03a020',
    },
    hc = ee.resolve('intl'),
    gc = ee.resolve('aliases');
function vc({ bonusPerks: e, skillsEfficiency: t, className: n }) {
    const { tankmanId: s, slotState: r } = Tl(),
        o = hc.formatNumber('integral', 100 * t),
        i = a.useMemo(
            () => ({ tooltipId: r === tc.unsuitableTankman ? 'crewSkillUntrained' : 'skillsEfficiency', tankmanID: s }),
            [r, s],
        );
    return f.jsx(it, {
        params: { resId: gc.read((e) => e.hangar.shared.Crew('resId')), args: i },
        className: b(_c.base, e && _c.base__bonus, n),
        children: (() => {
            switch (r) {
                case tc.unsuitableTankman:
                    return f.jsx('div', { className: _c.icon });
                case tc.retrainingProgress:
                    return f.jsx('div', {
                        className: _c.percent,
                        children: f.jsx(je, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: o } }),
                    });
                default:
                    return;
            }
        })(),
    });
}
const fc = ee.resolve('aliases'),
    bc = ee.resolve('views'),
    xc = ee.resolve('strings');
function yc({ children: e, bonus: t, name: n, role: s, index: r, tankmanId: o, newPerk: i, className: l }) {
    const c = a.useMemo(() => ({ tankmanID: o, skillIndex: r }), [o, r]),
        d = a.useMemo(
            () => ({ tooltipId: 'crewPerkGf', skillName: n, roleName: s, isBonus: t, skillIndex: r, tankmanID: o }),
            [t, r, n, s, o],
        );
    return i
        ? t
            ? f.jsx(ct, {
                  params: {
                      header: xc.readOrEmpty('crew.matrix.skillTooltip.bonus.available.header'),
                      body: xc.readOrEmpty('crew.matrix.skillTooltip.bonus.available.text'),
                  },
                  className: l,
                  children: e,
              })
            : f.jsx(mt, {
                  params: {
                      contentId: bc.read((e) => e.lobby.crew.tooltips.EmptySkillTooltip('resId')),
                      resId: fc.read((e) => e.hangar.shared.Crew('resId')),
                      args: c,
                  },
                  className: l,
                  children: e,
              })
        : f.jsx(it, {
              params: { resId: fc.read((e) => e.hangar.shared.Crew('resId')), args: d },
              className: l,
              children: e,
          });
}
const Cc = {
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
function wc(e) {
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
        m = t === rc,
        p = (function ({ state: e, vehEfficacy: t, efficacy: a, nativeTank: n, newPerk: s, withInstruction: r }) {
            const o = !n && t === ac,
                i = !o && t < nc,
                l = a.level < nc;
            return r
                ? o
                    ? ic.active
                    : ic.default
                : e !== ut.learning || i || s
                  ? s && e === ut.learning
                      ? o
                          ? ic.newActiveDisable
                          : ic.newActive
                      : s && o && l
                        ? ic.newDisableLow
                        : s && o && !l
                          ? e === ut.learning
                              ? ic.newDisableLow
                              : ic.newDisableFull
                          : o || e === ut.irrelevant
                            ? ic.disable
                            : i && !s
                              ? ic.low
                              : (i && s) || s
                                ? e === ut.learning
                                    ? ic.newLow
                                    : ic.newFull
                                : ic.default
                  : o
                    ? ic.activeDisable
                    : ic.active;
        })({ withInstruction: t === d, state: a, vehEfficacy: n, efficacy: s, nativeTank: i, newPerk: m });
    return f.jsxs(yc, {
        className: b(u, Cc.base, c && Cc.base__bonus, Cc[`base__${p}`]),
        newPerk: m,
        bonus: c,
        name: t.includes(oc) ? oc : t,
        index: l,
        role: o,
        tankmanId: r,
        children: [
            f.jsx('div', { className: Cc.background }),
            f.jsx('div', { className: Cc.border }),
            cc.includes(p) && f.jsx('div', { className: Cc.newPerkBackground }),
            m
                ? f.jsx('div', { className: Cc.icon })
                : f.jsx(ke, { className: Cc.icon, path: `tankmen.skills.big.${t}` }),
            lc.includes(p) && f.jsx('div', { className: Cc.disabledOverlay }),
        ],
    });
}
const Nc = {
        base: 'Row_94492f2a',
        training: 'Row_training_87a055fa',
        trainingIcon: 'Row_trainingIcon_478b64c1',
        container: 'Row_container_6520803b',
        container__compression: 'Row_container__compression_f3e2cd48',
        currentProgress: 'Row_currentProgress_4c0ce954',
    },
    Ic = ee.resolve('strings');
function jc({ perks: e, bonusPerk: t = !1, quickTraining: a, trainingProgress: n = 0, className: s }) {
    const { slotState: r } = Tl();
    return f.jsxs('div', {
        className: b(Nc.base, s),
        children: [
            e.map((a, n) =>
                f.jsx(
                    'div',
                    {
                        className: b(Nc.container, e.length > El && n !== sc && Nc.container__compression),
                        children: f.jsx(wc, { ...a, index: n, bonusPerk: t }),
                    },
                    n,
                ),
            ),
            n < Ml &&
                r !== tc.retrainingProgress &&
                f.jsx('div', {
                    className: Nc.currentProgress,
                    children: f.jsx(je, { path: 'common.percentValue', params: { value: n }, upgradeLegacy: !0 }),
                }),
            !t &&
                a &&
                f.jsx(ct, {
                    params: {
                        header: Ic.readOrEmpty('crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header'),
                        body: Ic.readOrEmpty('crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body'),
                    },
                    className: Nc.training,
                    children: f.jsx('div', { className: Nc.trainingIcon }),
                }),
        ],
    });
}
const kc = {
    base: 'Perks_1485306a',
    efficiency: 'Perks_efficiency_bfe72b43',
    rows: 'Perks_rows_2e626685',
    row__bonus: 'Perks_row__bonus_f0dcd00d',
};
function Sc({ tankman: e, className: t }) {
    const { slotState: a } = Tl();
    return f.jsxs('div', {
        className: b(kc.base, t),
        children: [
            a &&
                a !== tc.default &&
                f.jsx(vc, {
                    className: kc.efficiency,
                    bonusPerks: e.bonusPerks.length > 0,
                    skillsEfficiency: e.currentVehicleSkillsEfficiency,
                }),
            f.jsxs('div', {
                className: kc.rows,
                children: [
                    f.jsx(jc, {
                        className: kc.row,
                        perks: mc(e),
                        quickTraining: e.quickTraining,
                        trainingProgress: e.trainingProgress,
                    }),
                    e.bonusPerks.length > 0 &&
                        f.jsx(jc, {
                            className: b(kc.row, kc.row__bonus),
                            perks: pc(e),
                            trainingProgress: e.bonusPerks[0] ? e.bonusPerks[0].trainingProgress : 0,
                            bonusPerk: !0,
                        }),
                ],
            }),
        ],
    });
}
const Pc = 'Slot_tooltipArea_cfc61e36',
    Ec = 'Slot_823ddf0',
    Mc = 'Slot_base__disabled_d386066c',
    Lc = 'Slot_base__bonusPerk_37755a1',
    Dc = 'Slot_block_5a0436c4',
    Tc = 'Slot_block__empty_891e9635',
    Ac = 'Slot_perks_658d46a',
    Bc = 'Slot_perks__warning_de96a8ff',
    Vc = 'Slot_vehicleInfo_b3de9df4',
    Oc = 'Slot_vehicleInfo__active_c2f01f1b',
    Rc = 'Slot_overlay_a7b614c0',
    zc = 'Slot_overlay__active_4dbffa31',
    $c = 'Slot_overlay__bonusPerk_7bdbfd9e',
    Hc = 'Slot_overlay__hover_3a89439e',
    Fc = 'Slot_overlay__warning_e5e05d78',
    Wc = 'Slot_overlay__disabled_cd31780',
    qc = ee.resolve('aliases'),
    Zc = C(function ({ tankmanId: e, roles: t, id: n, tankmanAnimation: s }) {
        const [r, o] = a.useState(!1),
            i = fe(),
            { model: l, controls: c } = Pl(),
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
                            ? tc.retrainingProgress
                            : tc.unsuitableTankman
                        : tc.default;
            })(_),
            v = g === tc.retrainingProgress || g === tc.unsuitableTankman,
            x = Ke(
                'crewMember',
                a.useMemo(() => ({ tankmanID: e, slotIdx: n, previousViewID: null }), [e, n]),
                a.useMemo(() => ({ disabled: !p || d }), [p, d]),
            ),
            y = a.useMemo(() => ({ tooltipId: 'tankman', tankmanID: e }), [e]);
        const C = a.useMemo(() => ({ slotId: n, tankmanId: e, slotState: g }), [n, g, e]);
        return f.jsx(Dl.Provider, {
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
                className: b(Ec, d && Mc, t.length > 1 && Lc),
                children: [
                    p &&
                        f.jsx(it, {
                            params: { resId: qc.read((e) => e.hangar.shared.Crew('resId')), args: y },
                            className: Pc,
                        }),
                    f.jsx('div', { className: b(Rc, Hc, r && zc) }),
                    f.jsx('div', { className: b(Rc, Fc, v && zc) }),
                    f.jsx(Xl, {
                        customizedSkin: (null == _ ? void 0 : _.customizedSkin) ?? !1,
                        skinId: null == _ ? void 0 : _.crewSkinId.replace('tankman_', ''),
                        bonusPerk: t.length > 1,
                        animation: s,
                    }),
                    f.jsxs('div', {
                        className: b(Dc, !_ && Tc),
                        children: [
                            f.jsx(Wl, {
                                roles: t,
                                name: null == _ ? void 0 : _.fullName,
                                perksAmount: h,
                                progress: null == _ ? void 0 : _.trainingProgress,
                            }),
                            _
                                ? f.jsx(Sc, { tankman: _, className: b(Ac, v && Bc) })
                                : f.jsx(je, {
                                      upgradeLegacy: !0,
                                      className: b(Vc, r && Oc),
                                      path: `crew_widget.vehicleWithName.${pt(u)}`,
                                      params: { name: m.replace(/<img.*?>/, '') },
                                  }),
                        ],
                    }),
                    f.jsx('div', { className: b(Rc, Wc, d && zc, (null == _ ? void 0 : _.bonusPerks.length) && $c) }),
                ],
            }),
        });
    }),
    Uc = 'CrewWidget_647da81c',
    Gc = 'CrewWidget_divider_1cced5f6',
    Kc = C(function ({ className: e }) {
        const { model: t } = Pl(),
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
                className: b(Uc, e),
                children: [
                    ue(s, (e, t) =>
                        f.jsxs(
                            'div',
                            {
                                children: [
                                    f.jsx(
                                        Zc,
                                        { tankmanId: e.tankmanId, roles: e.roles, id: e.id, tankmanAnimation: r },
                                        -1 === e.tankmanId ? `empty_${t}` : e.tankmanId,
                                    ),
                                    f.jsx('div', { className: Gc }),
                                ],
                            },
                            e.id,
                        ),
                    ),
                    n && f.jsxs(f.Fragment, { children: [f.jsx(ec, {}), f.jsx('div', { className: Gc })] }),
                ],
            })
        );
    }),
    Jc = ee.resolve('aliases');
function Xc({ className: e }) {
    return f.jsx(Sl, {
        options: { rootId: Jc.read((e) => e.hangar.shared.Crew('resId')) },
        children: f.jsx(Kc, { className: e }),
    });
}
const Qc = {
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
function Yc({ value: e, ...t }) {
    return f.jsx(_t, { ...t, sprite: Qc, path: 'hangar.playlists.icons', icon: e, className: t.className });
}
const ed = Pe('IconContainer', 'Icon_container_83f4dd0e'),
    td = C(function (e) {
        const t = Ts(),
            a = ks().model.byIdUnsafe(e.id);
        ne(void 0 !== a, `Playlist with ${e.id} is not found`);
        const n = t.model.accumulateByIds(a.list).length;
        return a.list.length <= n
            ? null
            : f.jsx(ad, {
                  className: e.className,
                  displayAmount: n,
                  size: e.size,
                  realAmountInPlaylist: a.list.length,
              });
    });
function ad(e) {
    const t = ee.resolve('strings'),
        a = t
            .readOrEmpty('playlists.validation.unavailable.title')
            .replace('{{display}}', e.displayAmount.toString())
            .replace('{{total}}', e.realAmountInPlaylist.toString()),
        n = $e({ header: a, body: t.readOrEmpty('playlists.validation.unavailable.body') }),
        s = 'lg' === e.size ? 'alert_lg' : 'alert',
        r = 'lg' === e.size ? ed : 'div';
    return f.jsx(r, { ...n, className: e.className, children: f.jsx(Yc, { className: e.className, value: s }) });
}
const nd = 'CopyButton_825f729f',
    sd = 'CopyButton_base__enabled_49d34ed8',
    rd = 'CopyButton_base__disabled_4ef2eeda',
    od = ee.resolve('strings'),
    id = function (e) {
        const [t, n] = a.useState('copy'),
            s = ht(),
            r = $e({
                header: od.readOrEmpty('playlists.share.copy_button.title'),
                body: od.readOrEmpty('playlists.share.copy_button.body'),
            }),
            o = fe();
        return f.jsx(Yc, {
            ...r,
            value: t,
            'data-test-id': 'copyButton',
            className: b(nd, e.disabled ? rd : sd),
            onClick: (t) => {
                if ((r.onClick(), e.disabled)) return;
                o.play('click', { target: 'vehicle:playlists:copy_button', original: t });
                const a = e.onCopy();
                'string' == typeof a &&
                    gt(a)
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
    ld = 'EditButton_bdfe61f0',
    cd = ee.resolve('strings');
function dd({ id: e }) {
    const t = fe(),
        a = Ee(),
        n = $e({
            header: cd.readOrEmpty('playlists.edit_button.title'),
            body: cd.readOrEmpty('playlists.edit_button.body'),
        });
    return f.jsx(Yc, {
        ...n,
        className: ld,
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
const ud = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_',
    md = 65535;
function pd(e) {
    if (0 === e.length) return ys('EMPTY_INPUT');
    const t = (function (e) {
            let t = e[0] ?? 0;
            for (let a = 0; a < e.length; a++) t = (t + e[a]) & md;
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
            ((s += ud[e]), (r &= (1n << BigInt(o)) - 1n));
        }
    if (o > 0) {
        const e = 63 & Number(r << BigInt(6 - o));
        s += ud[e];
    }
    return xs(s);
}
const _d = 'Item_background_321cda1e',
    hd = 'Item_c5163bf',
    gd = 'Item_base__selected_5f6fcc69',
    vd = 'Item_button_8b3e738d',
    fd = 'Item_selectedIcon_eb50b3a6',
    bd = 'Item_alertIcon_aef37546',
    xd = 'Item_actions_8ac98f7',
    yd = C(function (e) {
        const { playlist: t } = e,
            a = ks(),
            n = vt(),
            s = $e({ body: t.title }),
            [r, o] = gs(t.title, 15);
        return f.jsxs('div', {
            ...(o && s),
            className: b(hd, a.model.currentId() === e.id && gd),
            children: [
                f.jsx('div', { className: _d }),
                f.jsxs(ft, {
                    className: vd,
                    onClick: () => {
                        (a.controls.select(e.id), n.close());
                    },
                    'data-test-id': `playlist-${r}`,
                    children: [
                        f.jsxs('span', {
                            children: [
                                f.jsx(Yc, { value: 'checked', className: fd }),
                                r,
                                f.jsx(td, { id: e.id, className: bd }),
                            ],
                        }),
                        f.jsxs('span', {
                            className: xd,
                            onClick: (e) => e.stopPropagation(),
                            children: [
                                f.jsx(id, {
                                    onCopy: function () {
                                        const e = pd(t.list);
                                        return 'error' === e.type ? console.error(e.error) : e.value;
                                    },
                                    disabled: 0 === t.list.length,
                                }),
                                f.jsx(dd, { id: e.id }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Cd = C(function (e) {
        const t = ks().model.byId(e.id);
        return 'ok' === t.type && void 0 !== t.value ? f.jsx(yd, { playlist: t.value, id: e.id }) : null;
    }),
    wd = C(function () {
        const e = ks(),
            t = vt();
        return f.jsxs('div', {
            className: b(hd, !e.model.currentId() && gd),
            children: [
                f.jsx('div', { className: _d }),
                f.jsx(ft, {
                    className: vd,
                    onClick: () => {
                        (e.controls.select(void 0), t.close());
                    },
                    'data-test-id': 'playlist-AllVehicles',
                    children: f.jsxs('span', {
                        children: [
                            f.jsx(Yc, { value: 'checked', className: fd }),
                            ee.resolve('strings').readOrEmpty('pages.titles.allVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    Nd = 'Content_divider_b37223ef',
    Id = 'Content_icon_4da9c1eb',
    jd = 'Content_trigger_4b0aad5c',
    kd = 'Content_triggerText_2dc694b6',
    Sd = C(function () {
        const e = ks().model.sortedIds();
        return f.jsxs('div', { children: [f.jsx(wd, {}), e.map((e) => f.jsx(Cd, { id: e }, e))] });
    }),
    Pd = Pe('Divider', Nd),
    Ed = C(function (e) {
        const t = ks(),
            a = ee.resolve('strings'),
            [n, s] = bt('add'),
            r = e.asChild ? xt : ft;
        return f.jsxs(r, {
            className: jd,
            'data-test-id': 'createPlaylist',
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            onClick: t.controls.create,
            children: [
                f.jsx(ed, { className: Id, children: f.jsx(Yc, { value: n }) }),
                f.jsx('span', { className: kd, children: a.readOrEmpty('playlists.list.create') }),
            ],
        });
    }),
    Md = function (e) {
        const t = ks(),
            a = ee.resolve('strings'),
            [n, s] = bt('import'),
            r = e.asChild ? xt : ft;
        return f.jsxs(r, {
            className: jd,
            'data-test-id': 'importPlaylist',
            onClick: t.controls.openImport,
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            children: [
                f.jsx(ed, { className: Id, children: f.jsx(Yc, { value: n }) }),
                f.jsx('span', { className: kd, children: a.readOrEmpty('playlists.imports.trigger') }),
            ],
        });
    },
    Ld = {
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
    Dd = ee.resolve('strings'),
    Td = [25, 25],
    Ad = C(function () {
        const { api: e } = ve(),
            [t, n] = ye(e, Td),
            { opened: s } = vt();
        return (
            a.useEffect(() => {
                if (s) return yt(() => yt(e.recalculateContent));
            }, [s, e.recalculateContent]),
            f.jsx(Ce, {
                className: b(Ld.area, !t && Ld.area__begin, !n && Ld.area__end),
                classNames: { content: Ld.scrollContent },
                children: f.jsx(Sd, {}),
            })
        );
    }),
    Bd = C(function (e) {
        const t = Ps();
        return t && t.model.enabled.get()
            ? f.jsx(Ct.Portal, {
                  position: 'bottom',
                  ...e,
                  children: f.jsx(wt, {
                      children: f.jsxs(Ct.Display, {
                          'data-name': 'playlist-dropdown-content',
                          className: Ld.popover,
                          children: [
                              f.jsx(Ct.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                              f.jsx('div', {
                                  className: Ld.list,
                                  children: f.jsxs(Ne, {
                                      children: [f.jsx(Ad, {}), f.jsx(we, { classNames: { base: Ld.bar } })],
                                  }),
                              }),
                              f.jsx(Pd, {}),
                              f.jsxs('div', { className: Ld.triggers, children: [f.jsx(Ed, {}), f.jsx(Md, {})] }),
                          ],
                      }),
                  }),
              })
            : null;
    });
function Vd(e) {
    const t = vt();
    return f.jsx(Yc, { value: 'arrow_down', className: b(Ld.arrow, t.opened && Ld.arrow__opened, e.className) });
}
const Od = C(function (e) {
        const [t] = gs(e.title, e.limit ?? 30);
        return f.jsxs('div', {
            className: b(Ld.currentTitle, e.className),
            children: [t, e.id && f.jsx(td, { className: Ld.alert, id: e.id, size: e.alertSize })],
        });
    }),
    Rd = C(function (e) {
        const t = Ps(),
            a = null == t ? void 0 : t.model.current(),
            n = fe(),
            s = $e({ header: null == a ? void 0 : a.title, body: Dd.readOrEmpty('playlists.trigger.explain') });
        if (!t || !1 === t.model.enabled.get()) return e.fallback;
        const r = e.asChild ? xt : 'div';
        return f.jsx(Ct.Trigger, {
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
                        className: b(Ld.trigger, e.className),
                        children: [
                            f.jsx(Nt, { children: e.children }),
                            a
                                ? f.jsx(Od, { limit: e.limit, id: a.id, title: a.title, alertSize: e.alertSize })
                                : f.jsx(Od, { title: Dd.readOrEmpty('pages.titles.allVehicles') }),
                            f.jsx(Vd, {}),
                        ],
                    }),
                }),
        });
    }),
    zd = a.createContext(void 0);
function $d() {
    const e = a.useContext(zd);
    if (!e) throw new Error("Can't call useFilters outside of FiltersContext Provider. Please wrap it.");
    return e;
}
const Hd = {
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
    Fd = C(function (e) {
        const t = $d(),
            a = t.tooltipHeaderMap ?? On,
            n = t.tooltipBodyMap ?? Rn,
            s = ee.resolve('strings'),
            r = e.tooltip.body !== Bn ? s.readOrEmpty(`tank_carousel_filter.tooltip.${n[e.tooltip.body]}.body`) : '',
            o = $e({ header: s.readOrEmpty(`${a[e.tooltip.header]}`), body: r });
        return f.jsx(Wd, { ...e, tooltip: e.tooltip.body !== Bn && o });
    }),
    Wd = C(function (e) {
        const t = $d(),
            n = t.filters.get(),
            s = a.useMemo(() => {
                var t;
                if ('role' === e.event.type) {
                    const t = e.event.role;
                    return Object.values(n).some((e) => e.some((e) => e.includes(t)));
                }
                return null == (t = n[e.event.field]) ? void 0 : t.includes(e.event.value);
            }, [e.event, n]);
        return f.jsx(It, {
            ...e.tooltip,
            theme: kt.primary,
            size: jt.extraSmall,
            className: b(Hd.toggle, s && Hd.toggle__activated, e.className),
            activated: s,
            onClick: () => {
                (t.change(e.event), e.tooltip && e.tooltip.onClick());
            },
            children: e.children,
        });
    });
function qd(e) {
    return f.jsx('div', {
        className: b(Hd.toggleContainer, e.className),
        children: $n.map((e) =>
            f.jsx(
                Fd,
                {
                    tooltip: { header: e, body: Tn },
                    event: { type: 'role', role: e },
                    children: f.jsx(Et, { roleKey: e, size: Et.sizes.x24x24, className: Hd.icon }),
                },
                e,
            ),
        ),
    });
}
function Zd(e) {
    return f.jsx('div', {
        className: b(Hd.toggleContainer, Hd.toggleContainer__type, e.className),
        children: Fn.map((e) =>
            f.jsx(
                Fd,
                {
                    tooltip: { header: e, body: An },
                    event: { field: qn, type: 'regular', value: e },
                    className: Hd.toggle__type,
                    children: f.jsx(Pt, { type: e, size: Pt.sizes.x24x24 }),
                },
                e,
            ),
        ),
    });
}
function Ud(e) {
    return f.jsx('div', {
        className: b(Hd.toggleContainer, e.className),
        children: e.orderedNations.map((e) =>
            f.jsx(
                Fd,
                {
                    tooltip: { header: e, body: Vn },
                    event: { field: Zn, type: 'regular', value: e },
                    children: f.jsx('div', {
                        className: Hd.nationWrapper,
                        children: f.jsx(ke, { className: Hd.nationIcon, path: `flags.c_60x40.${e}` }),
                    }),
                },
                e,
            ),
        ),
    });
}
function Gd(e) {
    return f.jsx('div', {
        className: b(Hd.toggleContainer, e.className),
        children: Wn.map((e) =>
            f.jsx(
                Fd,
                {
                    tooltip: { header: 'tier', body: Bn },
                    event: { field: Un, type: 'regular', value: `level_${e}` },
                    children: f.jsx(Mt, { className: Hd.vehicleLevel, value: e }),
                },
                e,
            ),
        ),
    });
}
function Kd(e) {
    const t = ze(`hangar.filter.special.${e.imagePath}`, `hangar.filter.special.${e.imagePath}_upscale`);
    return f.jsx(
        Fd,
        {
            tooltip: { header: e.special, body: e.special },
            event: { field: Gn, type: 'regular', value: e.special },
            children: f.jsx(ke, {
                className: b(Hd.specialsIcons, 'favorite' === e.special && Hd.specialsIcons__favorite),
                path: t,
            }),
        },
        e.special,
    );
}
function Jd() {
    const e = ze('hangar.filter.special.isCommonProgression', 'hangar.filter.special.isCommonProgression_upscale');
    return f.jsx(Fd, {
        tooltip: { header: zn, body: zn },
        event: { field: Kn, type: 'regular', value: zn },
        children: f.jsx(ke, { className: Hd.specialsIcons, path: e }),
    });
}
const Xd = C(function (e) {
    var t;
    const a = $d(),
        n = a.specialIds ?? Hn,
        s = Ts(),
        r = s.model.bpState.active.get(),
        o = s.model.rentVehiclesList(),
        i = null == (t = Ln()) ? void 0 : t.model,
        l = !i || i.isCrystalEarnEnabled.get(),
        c = !i || i.isDailyMultipliedXpEnabled.get(),
        d = n.filter((e) => (0 !== o.length || 'rented' !== e) && (c || 'bonus' !== e) && (l || 'crystals' !== e));
    return f.jsxs('div', {
        className: b(Hd.toggleContainer, e.className),
        children: [
            d.map((e) => {
                var t;
                return f.jsx(Kd, { imagePath: (null == (t = a.imagesMap) ? void 0 : t[e]) ?? e, special: e }, e);
            }),
            r && f.jsx(Jd, {}),
            e.children,
        ],
    });
});
function Qd() {
    const e = Tt(),
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
function Yd({ fieldClassName: e, value: t, ...a }) {
    const n = ee.resolve('strings');
    return f.jsxs(Lt.Provider, {
        value: t,
        children: [
            f.jsx(Qd, {}),
            f.jsxs(Lt.Decoration, {
                className: b(Hd.search, a.className),
                children: [
                    f.jsx(Lt.Icon, { icon: Lt.icons.search }),
                    f.jsx(Lt.Field, {
                        ...a,
                        className: Hd.inputField,
                        classNames: { placeholder: Hd.inputPlaceholder },
                        maxLength: 50,
                        placeholderVisibility: Dt.value,
                        children: n.readOrEmpty('tank_carousel_filter.popover.label.searchNameVehicle'),
                    }),
                    t.length > 0 && f.jsx(Lt.ClearButton, {}),
                ],
            }),
        ],
    });
}
function eu({ current: e, total: t, className: a }) {
    const n = ee.resolve('intl'),
        s = ee.resolve('strings');
    return f.jsxs(Ct.Header, {
        className: b(Hd.header, a),
        children: [
            f.jsx(Ct.Title, { children: f.jsx(je, { path: 'tank_carousel_filter.popover.title' }) }),
            f.jsx(Ct.Subtitle, {
                children: f.jsx(je, {
                    upgradeLegacy: !0,
                    path: 'tank_carousel_filter.popover.counter',
                    params: {
                        count: f.jsxs('span', {
                            children: [
                                f.jsx('span', { className: Hd.currentValue, children: n.formatNumber('integral', e) }),
                                f.jsx('span', { className: Hd.slash, children: s.readOrEmpty('common.common.slash') }),
                                n.formatNumber('integral', t),
                            ],
                        }),
                    },
                }),
            }),
        ],
    });
}
const tu = a.memo(function (e) {
        return f.jsxs(au, {
            ...e,
            className: e.className ?? Hd.scroll,
            children: [
                f.jsx(je, { className: Hd.category, path: 'tank_carousel_filter.popover.label.specials' }),
                f.jsx(Xd, { children: e.children }),
            ],
        });
    }),
    au = a.memo(function (e) {
        return f.jsx(Ne, {
            children: f.jsxs(St, {
                className: e.className,
                barClassNames: e.barClassNames,
                scrollClassNames: e.scrollClassNames,
                children: [
                    f.jsx(je, { className: Hd.category, path: 'tank_carousel_filter.popover.label.vehicleTypes' }),
                    f.jsx(Zd, {}),
                    f.jsx(je, { className: Hd.category, path: 'tank_carousel_filter.popover.label.vehicleRole' }),
                    f.jsx(qd, {}),
                    f.jsx(je, { className: Hd.category, path: 'tank_carousel_filter.popover.label.nations' }),
                    f.jsx(Ud, { orderedNations: e.orderedNations }),
                    f.jsx(je, { className: Hd.category, path: 'tank_carousel_filter.popover.label.levels' }),
                    f.jsx(Gd, {}),
                    e.children,
                ],
            }),
        });
    }),
    nu = 'vehicle:filter:filter-button:reset-icon',
    su = a.forwardRef(function ({ children: e, className: t, ...a }, n) {
        return f.jsx(dt, {
            ...a,
            ref: n,
            classNames: { base: b(Hd.filterButton, t) },
            size: dt.sizes.small,
            theme: a.theme,
            autoAlignContent: !1,
            children: e,
        });
    }),
    ru = C(
        a.forwardRef(function ({ current: e, total: t, classNames: a, onReset: n, ...s }, r) {
            const o = $d(),
                i = vt(),
                l = ee.resolve('intl'),
                c = ee.resolve('strings'),
                d = ze('hangar.filter.filter_button', 'hangar.filter.filter_button_upscale'),
                u = ze('ui_kit.close_button.icon_small', 'ui_kit.close_button.icon_medium'),
                m = o.hasFilter(),
                p = fe();
            return f.jsx(It, {
                ...s,
                ref: r,
                size: jt.extraSmall,
                theme: kt.primary,
                activated: i.opened,
                'data-test-id': 'vehiclesFilter',
                classNames: {
                    base: b(Hd.filterTrigger, m && Hd.filterTrigger__activeFilter, null == a ? void 0 : a.base),
                    bulb: Hd.bulb,
                    content: Hd.triggerContent,
                },
                children:
                    s.children ??
                    (m
                        ? f.jsxs('div', {
                              className: b(Hd.activeFilterContent, null == a ? void 0 : a.content),
                              children: [
                                  l.formatNumber('integral', e),
                                  f.jsx('span', {
                                      className: Hd.slash,
                                      children: c.readOrEmpty('common.common.slash'),
                                  }),
                                  f.jsx('span', { className: Hd.total, children: l.formatNumber('integral', t) }),
                                  f.jsx(ke, {
                                      path: u,
                                      className: Hd.resetIcon,
                                      onClick: (e) => {
                                          (p.play('close', { target: nu, original: e }),
                                              e.stopPropagation(),
                                              o.reset(),
                                              null == n || n());
                                      },
                                      onMouseEnter: (e) => {
                                          p.play('mouse-enter', { target: nu, original: e });
                                      },
                                  }),
                              ],
                          })
                        : f.jsx(ke, { path: d, width: 24, height: 24 })),
            });
        }),
    ),
    ou = C(function () {
        const e = os();
        function t(e) {
            e.keyCode !== Xe.ESCAPE && e.stopPropagation();
        }
        return f.jsx(Yd, {
            value: e.model.searchName.get(),
            onChange: (t) => e.controls.search(t.target.value),
            onKeyDown: t,
            onKeyUp: t,
        });
    }),
    iu = C(function () {
        const e = Ts(),
            t = e.model.vehicles.amount(),
            a = e.model.current.amount();
        return f.jsx(eu, { current: a, total: t });
    }),
    lu = C(function ({ classNames: e }) {
        const t = ee.resolve('strings'),
            a = Ts(),
            n = a.model.vehicles.amount(),
            s = a.model.current.amount(),
            r = $e({
                header: t.readOrEmpty('tank_carousel_filter.tooltip.params.header'),
                body: t.readOrEmpty('tank_carousel_filter.tooltip.params.body'),
            });
        return f.jsx(Ct.Trigger, {
            children: (t) =>
                f.jsx(ru, {
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
    cu = C(function ({ children: e }) {
        const t = os(),
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
        return f.jsxs(Ct.Body, {
            className: Hd.body,
            children: [
                e,
                f.jsxs('div', {
                    className: Hd.footer,
                    children: [
                        f.jsx(Ct.Divider, {}),
                        f.jsxs('div', {
                            className: Hd.footerButtons,
                            children: [
                                f.jsx(su, {
                                    ...s,
                                    theme: dt.themes.secondary,
                                    className: Hd.carouselChanger,
                                    onClick: function () {
                                        const e = 1 === a ? Dn : 1;
                                        t.controls.carouselTypeChange(e);
                                    },
                                    children: f.jsx(ke, {
                                        className: b(Hd.carouselIcon, a === Dn && Hd.carouselIcon__active),
                                        path: 'hangar.filter.carousel_selector',
                                    }),
                                }),
                                f.jsx('div', { ...r, className: Hd.searchInputWrapper, children: f.jsx(ou, {}) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    du = C(function ({ pivot: e = 0, position: t = 'bottom', classNames: n, customFilterProps: s, children: r }) {
        const o = os(),
            i = Ps(),
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
        return f.jsx(zd.Provider, {
            value: l,
            children: f.jsx('div', {
                className: null == n ? void 0 : n.base,
                children: f.jsxs(Ct, {
                    children: [
                        f.jsx(lu, {
                            classNames: {
                                trigger: null == n ? void 0 : n.trigger,
                                content: null == n ? void 0 : n.triggerContent,
                            },
                        }),
                        f.jsx(Ct.Portal, {
                            lazy: !0,
                            position: t,
                            pivot: e,
                            children: f.jsx(wt, {
                                children: f.jsx(Ct.Display, { className: Hd.popover, children: r }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    }),
    uu = C(function (e) {
        const t = os().model.computes.nations();
        return f.jsxs(du, {
            ...e,
            children: [
                f.jsx(Ct.Tip, { position: 'bottom', size: '80rem', offset: '120rem' }),
                f.jsx(Ct.Close, {}),
                f.jsx(iu, {}),
                f.jsx(mu, {}),
                f.jsx(cu, { children: f.jsx(tu, { orderedNations: t }) }),
            ],
        });
    }),
    mu = C(function () {
        const e = Ps(),
            { id: t } = vt();
        return e && !1 !== e.model.enabled.get()
            ? f.jsxs(Ct, {
                  children: [
                      f.jsx(Bd, { className: Hd.playlistPortal, 'data-popover-outside-click-whitelist-id': t }),
                      f.jsx(Rd, {
                          asChild: !0,
                          className: Hd.playlistTrigger,
                          fallback: null,
                          limit: 15,
                          children: f.jsx(dt, { theme: 'secondary', classNames: { content: Hd.playlistTitle } }),
                      }),
                  ],
              })
            : null;
    }),
    pu = (e) =>
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
    _u = (e) =>
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
    hu = 'Header_1ce47eda',
    gu = 'Header_base__ttcDisabled_bc60795e',
    vu = 'Header_title_ae11a84e',
    fu = 'Header_playlist_8759383d',
    bu = 'Header_toggles_ecb415bd',
    xu = 'Header_toggle_a0b149a9',
    yu = 'Header_text_aace6b88',
    Cu = 'Header_icon_dbebe5f6',
    wu = ee.resolve('strings'),
    Nu = C(function (e) {
        const t = Os(),
            a = null == t ? void 0 : t.model.computed.ttcEnabled();
        return f.jsxs('div', { className: b(hu, !a && gu, e.className), children: [f.jsx(Iu, {}), f.jsx(ju, {})] });
    }),
    Iu = C(function () {
        const e = Os(),
            t = null == e ? void 0 : e.model.computed.ttcEnabled(),
            a = null == e ? void 0 : e.model.computed.crewEnabled(),
            n = Boolean(t && a),
            s = At(
                { letterLimit: n ? 6 : 18 },
                {
                    medium: { letterLimit: n ? 18 : 28 },
                    large: { letterLimit: n ? 28 : 33 },
                    extraLarge: { letterLimit: 33 },
                },
            );
        return f.jsxs('div', {
            className: vu,
            children: [
                f.jsx(uu, {}),
                f.jsxs(Ct, {
                    children: [
                        f.jsx(Bd, {}),
                        f.jsx(Rd, {
                            alertSize: 'lg',
                            className: fu,
                            fallback: f.jsx(je, { className: fu, path: 'pages.titles.allVehicles' }),
                            limit: s.letterLimit,
                        }),
                    ],
                }),
            ],
        });
    }),
    ju = C(function (e) {
        const t = Os(),
            a = null == t ? void 0 : t.model.computed.noSelectedVehicle();
        return t && a
            ? f.jsxs('div', {
                  className: b(bu, e.className),
                  children: [
                      f.jsxs(It, {
                          activated: t.model.crewEnabled.get(),
                          onClick: t.controls.crew.toggle,
                          className: xu,
                          children: [
                              f.jsx(pu, { className: Cu }),
                              f.jsx('div', {
                                  className: yu,
                                  children: wu.readOrEmpty('hangar.myVehicles.buttons.crewToggle'),
                              }),
                          ],
                      }),
                      f.jsxs(It, {
                          activated: t.model.ttcEnabled.get(),
                          onClick: t.controls.ttc.toggle,
                          className: xu,
                          children: [
                              f.jsx(_u, { className: Cu }),
                              f.jsx('div', {
                                  className: yu,
                                  children: wu.readOrEmpty('hangar.myVehicles.buttons.ttcToggle'),
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    }),
    ku = {
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
    Su = { paths: ['/:hangar/'], exact: !1 },
    Pu = Bt(As, { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.Settings('resId')) }),
    Eu = C(function () {
        return (
            (function (e) {
                const t = Ee(),
                    a = fe(),
                    n = Vt(t.location, Su),
                    s = null !== n;
                function r() {
                    const e = null == n ? void 0 : n.params.hangar;
                    e
                        ? t.push(`/${e}/{root}`)
                        : console.warn(`Can't detect route on ${t.location} for ${JSON.stringify(t.location)}`);
                }
                (Ot(s ? Xe.SPACE : Xe.NONE, (e) => {
                    (a.play('hot-key', { target: 'hangar:all_vehicles:all_vehicles', original: e }), r());
                }),
                    Qe(s ? Xe.ESCAPE : Xe.NONE, () => {
                        r();
                    }));
            })(),
            f.jsx(Pu, {
                children: f.jsx(Du, {
                    children: f.jsxs(Lu, {
                        children: [f.jsx(Nu, {}), f.jsx(Tu, {}), f.jsx(wl, { className: ku.emptyMessage })],
                    }),
                }),
            })
        );
    }),
    Mu = C(function (e) {
        const t = Os();
        return (null == t ? void 0 : t.model.computed.crewEnabled())
            ? f.jsx('div', {
                  className: b(ku.crewColumn, e.className),
                  children: f.jsx(Xc, { className: ku.crewWidget }),
              })
            : null;
    }),
    Lu = function (e) {
        return f.jsxs('div', {
            className: b(ku.crewWrapper, e.className),
            children: [f.jsx(Mu, {}), f.jsx('div', { className: ku.content, children: e.children })],
        });
    },
    Du = C(function (e) {
        const t = Os(),
            a = null == t ? void 0 : t.model.computed.crewEnabled(),
            n = null == t ? void 0 : t.model.computed.ttcEnabled();
        return f.jsx(ui, {
            classNames: {
                base: b(ku.wrapper, !a && ku.wrapper__crewDisabled, !n && ku.wrapper__ttcDisabled),
                info: b(ku.wrapperInfo, !n && ku.wrapperInfo__ttcDisabled),
                content: b(ku.wrapperContent, n && ku.wrapperContent__ttc),
            },
            children: e.children,
        });
    }),
    Tu = C(function (e) {
        const t = Ts().model.selectedVehicle(),
            n = Os(),
            s = a.useContext(di),
            r = (() => {
                const e = null == n ? void 0 : n.model.computed.crewEnabled();
                return e && s.ttcEnabled ? 0 : e || s.ttcEnabled ? 1 : 2;
            })();
        return f.jsx('div', {
            className: b(ku.listWrapper, !t && ku.listWrapper__empty, e.className),
            children: f.jsx(Ne, { children: f.jsx(fl, { extraColumns: r }) }),
        });
    });
const Au = 'emptySlot',
    Bu = 'left',
    Vu = 'right',
    Ou = 'both',
    Ru = 'none',
    zu = 189,
    $u = 245,
    Hu = {
        default: { single: zu, double: zu },
        breakpoints: { medium: { single: 224 }, large: { single: $u, double: $u }, extraLarge: { single: 302 } },
    },
    Fu = (e, t) => (e || t ? (e ? (t ? Ru : Vu) : Bu) : Ou),
    Wu = {
        empty: 'ActiveSlots_empty_9aab1ce1',
        doubleSlots: 'ActiveSlots_doubleSlots_2ce42013',
        slot__double: 'ActiveSlots_slot__double_e321ab18',
    };
function qu({ width: e, className: t }) {
    return f.jsx('div', {
        className: Wu.empty,
        children: f.jsx(yi, {
            className: t,
            style: { width: `${e}px` },
            children: f.jsx('div', { className: Wu.vehicleSlot }),
        }),
    });
}
function Zu({ slotId: e, width: t, currentVehicleId: a, double: n, className: s }) {
    return void 0 === e
        ? null
        : hi(e)
          ? f.jsx(Ii, { className: b(ol, s), type: e, width: t, doubleRow: n })
          : e === Us
            ? f.jsx(qu, { className: b(ol, s), width: t })
            : f.jsx(cl, { vehicleId: e, selected: e === a, doubleRow: n, className: b(ol, s), style: { width: t } });
}
function Uu({ chunkedSlots: e, classNames: t, ...a }) {
    return void 0 === e
        ? null
        : f.jsx('div', {
              className: Wu.doubleSlots,
              children: e.map((e, n) =>
                  f.jsx(Zu, { ...a, slotId: e, className: b(Wu.slot__double, null == t ? void 0 : t.slot) }, n),
              ),
          });
}
const Gu = {
    root: 'ArrowButton_root_5327085d',
    button: 'ArrowButton_button_4f10eb80',
    icon: 'ArrowButton_icon_35e5294f',
    button__left: 'ArrowButton_button__left_5327085d',
    background: 'ArrowButton_background_5327085d',
    border: 'ArrowButton_border_5327085d',
    overlay: 'ArrowButton_overlay_c36cbc33',
    content: 'ArrowButton_content_4666fd05',
    button__right: 'ArrowButton_button__right_5327085d',
};
function Ku({ direction: e, className: t, ...a }) {
    return f.jsx(dt, {
        ...a,
        classNames: {
            base: b(Gu.button, Gu[`button__${e}`], t),
            background: Gu.background,
            border: Gu.border,
            overlay: Gu.overlay,
            content: Gu.content,
        },
        theme: dt.themes.secondary,
        size: dt.sizes.small,
        autoAlignContent: !1,
        soundTarget: 'carousel:arrow_button',
        children: f.jsx(ke, { path: 'hangar.carousel.buttonArrow', className: Gu.icon }),
    });
}
Ku.direction = { right: 'right', left: 'left' };
const Ju = {
    root: 'CarouselNavButtons_root_3f67251c',
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
function Xu({ itemWidth: e, api: t, children: n }) {
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
        className: Ju.navButtonWrapper,
        children: [
            f.jsx(Ku, {
                direction: Ku.direction.left,
                onMouseDown: () => _(-1),
                onMouseUp: h,
                onMouseLeave: h,
                className: b(Ju.navButton, Ju.navButton__left, m && Ju.navButton__hidden),
            }),
            f.jsx('div', { className: b(Ju.mask, Ju[`mask__${Fu(d, u)}`]), children: n }),
            f.jsx(Ku, {
                direction: Ku.direction.right,
                onMouseDown: () => _(1),
                onMouseUp: h,
                onMouseLeave: h,
                className: b(Ju.navButton, Ju.navButton__right, p && Ju.navButton__hidden),
            }),
        ],
    });
}
const Qu = {
    base: 'CarouselSkeleton_1ac002e3',
    content: 'CarouselSkeleton_content_b18f8dd7',
    scroll: 'CarouselSkeleton_scroll_badf82c7',
};
function Yu(e) {
    return f.jsx('div', { ...e, className: b(Qu.content, e.className) });
}
function em({
    api: e,
    widthElement: t,
    totalElements: a,
    disabled: n,
    onDraggingState: s,
    renderElement: r,
    classNames: o,
}) {
    return f.jsx('div', {
        className: b(Qu.base, null == o ? void 0 : o.base),
        children: f.jsx(Xu, {
            api: e,
            itemWidth: t,
            children: f.jsx(tt, {
                api: e,
                elementWidth: t - Ae(1),
                direction: 'horizontal',
                totalElements: a,
                wrappers: { Content: Yu },
                className: b(Qu.scroll, null == o ? void 0 : o.scroll),
                renderScroll: (t) => f.jsx(Rt, { ...t, api: e, disabled: n, onDraggingState: s, children: t.children }),
                renderElement: (e) => (r ? r(e) : f.jsx(qu, { className: null == o ? void 0 : o.element, width: t })),
            }),
        }),
    });
}
function tm({ api: e, carouselRows: t }) {
    const n = (function (e) {
            const t = At(Hu.default, Hu.breakpoints);
            return Ae(e === Dn ? t.double : t.single);
        })(t),
        [s, r] = a.useState({ carouselRows: 0, cardWidth: 0, visibleSlots: 0 });
    return (
        a.useLayoutEffect(() => {
            function a() {
                const a = e.getWrapperSize();
                a &&
                    r(
                        t !== Dn
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
const am = 'Carousel_draggingOverlay_2ac699b0',
    nm = 'Carousel_9b3e04da',
    sm = 'Carousel_base__visible_24d53d12',
    rm = 'Carousel_card_5449ec9a',
    om = 'Carousel_card__inactive_c59331d9',
    im = C(function () {
        const [e, t] = a.useState(!1),
            { api: n } = $t(),
            s = Ts(),
            r = os().model.carouselRowCount.get(),
            o = s.model.prebattleModeActive(),
            i = s.model.telecomRentStatus.get(),
            l = s.model.current.ids(),
            c = s.model.current.list(),
            d = s.model.selectedVehicle(),
            { currentIndex: u } = gi(l, null == d ? void 0 : d.id),
            m = s.model.slots.recover.get(),
            { carouselRows: p, cardWidth: _, visibleSlots: h } = tm({ api: n, carouselRows: r }),
            { activeSlotsAmount: g, activeSlotsIds: v } = (function (e, t, n, s) {
                return a.useMemo(() => {
                    if (!t) return { activeSlotsAmount: 0, activeSlotsIds: [] };
                    const a = _i(n, s),
                        r = e.length + a.right.length + a.left.length,
                        o = Math.max(0, t - r);
                    return {
                        activeSlotsAmount: r,
                        activeSlotsIds: [...a.left, ...e, ...a.right, ...Array(o).fill(Au)],
                    };
                }, [n, e, t, s]);
            })(l, h, m, i),
            x =
                ((y = v),
                a.useMemo(() => {
                    var e, t;
                    const a = [];
                    for (let n = 0; n < y.length; n += Dn) a.push(y.slice(n, n + Dn));
                    return (
                        1 === (null == (e = a.at(-1)) ? void 0 : e.length) && (null == (t = a.at(-1)) || t.push(Au)),
                        a
                    );
                }, [y]));
        var y;
        (vi(n, u, _, p, h > g),
            (function (e, t, a, n, s) {
                const r = n === Dn;
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
                r = zt();
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
                f.jsx(em, {
                    api: n,
                    widthElement: _,
                    totalElements: p === Dn ? x.length : v.length,
                    disabled: h > g,
                    onDraggingState: t,
                    classNames: { base: b(nm, C && sm), element: b(rm, e && om) },
                    renderElement: (t) => {
                        const a = b(rm, e && om);
                        return p === Dn
                            ? f.jsx(Je, {
                                  failure: () => f.jsx(qu, { className: a, width: _ }),
                                  children: f.jsx(
                                      Uu,
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
                                  failure: () => f.jsx(qu, { className: a, width: _ }),
                                  children: f.jsx(
                                      Zu,
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
                I.createPortal(e && f.jsx('div', { className: am }), document.body),
            ],
        });
    }),
    lm = (function () {
        const e = 'undefined' != typeof document && document.createElement('link').relList;
        return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
    })(),
    cm = {},
    dm = function (e, t, a) {
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
                        t in cm)
                    )
                        return;
                    cm[t] = !0;
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
                        (o.rel = n ? 'stylesheet' : lm),
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
    um = a.lazy(() => dm(() => import('../../../chunks/widget.js'), [], import.meta.url));
function mm(e) {
    var t;
    const n = null == (t = e.options) ? void 0 : t.rootId;
    if (n) return f.jsx(Ht, { id: n, children: f.jsx(a.Suspense, { children: f.jsx(um, { ...e }) }) });
    console.error('TeaserWidget: rootId is not given');
}
const pm = 'AllVehiclesButton_3837d663',
    _m = 'AllVehiclesButton_grid_64f1c816',
    hm = 'AllVehiclesButton_content_75d29fb4';
function gm(e) {
    const t = fe(),
        a = ee.resolve('strings'),
        n = Ee(),
        s = ze('hangar.filter.all_vehicle_button', 'hangar.filter.all_vehicle_button_upscale'),
        r = $e({
            header: a.readOrEmpty('hangar.tooltip.filters.myVehicle.header'),
            body: a.readOrEmpty('hangar.tooltip.filters.myVehicle.body'),
        });
    function o() {
        n.push(e.route ?? '/hangar/allVehicles');
    }
    return f.jsxs(dt, {
        ...r,
        classNames: { base: pm },
        theme: dt.themes.secondary,
        size: dt.sizes.small,
        autoAlignContent: !1,
        onClick: function () {
            (r.onClick(), o());
        },
        children: [
            f.jsx(ke, { className: _m, path: s }),
            f.jsx(Ft, {
                keyCode: Xe.SPACE,
                onActive: function (e) {
                    (t.play('hot-key', { target: 'vehicle:all_vehicles:all_vehicles_button', original: e }), o());
                },
                silent: !0,
                classNames: { content: hm },
                children: f.jsx(Ft.Code, {}),
            }),
        ],
    });
}
const [vm, fm] = B()(({ observableModel: e }) => ({ ...e.primitives(['hasSuitableVehicles', 'assetsPointer']) }), V),
    bm = j(function (e) {
        const t = os().model.computes.nations(),
            a = fm().model.assetsPointer.get(),
            n = bn(null, { assetsPointer: a }).dynamicTexts.tooltip.filter,
            s = $e({ header: n.header(), body: n.body() });
        return f.jsxs(du, {
            ...e,
            children: [
                f.jsx(Ct.Tip, { position: 'bottom', size: '80rem', offset: '120rem' }),
                f.jsx(Ct.Close, {}),
                f.jsx(iu, {}),
                f.jsx(mu, {}),
                f.jsx(cu, {
                    children: f.jsx(tu, {
                        orderedNations: t,
                        children: f.jsx(Wd, {
                            tooltip: s,
                            event: { field: Gn, type: 'regular', value: 'funRandom' },
                            children: f.jsx('img', {
                                className: Hd.specialsIcons,
                                src: xn(a).library.carousel_filter(),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    xm = {
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
    ym = a.memo(function () {
        return f.jsx(Wt, { children: f.jsx(im, {}) });
    }),
    Cm = Pe('LoadoutPanel'),
    wm = a.forwardRef(function ({ children: e, className: t, ...a }, n) {
        return f.jsx(Cm, { className: t, ref: n, ...a, children: e });
    }),
    Nm = 'shells',
    Im = 'optDevices',
    jm = Nm,
    km = 'consumables',
    Sm = 'battleBoosters',
    Pm = 'equipment',
    Em = 'instructions',
    Mm = 'shells',
    Lm = 'consumables',
    Dm = {
        Standard: 'standardEquipments',
        Bounty: 'bountyEquipments',
        Improved: 'improvedEquipments',
        Experimental: 'experimentalEquipments',
    },
    Tm = { Firepower: 'firepower', Survivability: 'survivability', Stealth: 'stealth', Mobility: 'mobility' },
    Am = 'gunner_smoothTurret',
    Bm = 'driver_virtuoso',
    Vm = 'driver_smoothDriving',
    Om = 'fireFighting',
    Rm = 'naturalCover',
    zm = 'gunner_rancorous',
    $m = 'loader_pedant',
    Hm = 'commander_practical',
    Fm = 'commander_enemyShotPredictor';
function Wm(e) {
    return {
        currentIndex: e.currentIndex,
        id: e.groupId,
        totalCount: e.totalCount,
        states: ue(e.setupSelector.states, (e) => e),
        switchEnabled: e.setupSelector.isSwitchEnabled,
        prebattleSwitchDisabled: e.setupSelector.isPrebattleSwitchDisabled,
        sections: ue(e.sections, qm),
    };
}
function qm(e) {
    return {
        type: e.type,
        name: e.name,
        vehicle: e.vehicle,
        vehicleType: e.vehicleType,
        newItemsCount: e.newItemsCount,
        slots: ue(e.slots, Zm),
        warning: e.isWarning,
    };
}
function Zm(e) {
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
const Um = [Sm, 'battleAbilities'],
    [Gm, Km] = B('AmmunitionPanelModel')(
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
                a = k(() => nt(t.groups.get(), Wm)),
                n = X.primitive((e, a) => t.selectedSlot.get() === e && t.selectedSection.get() === a),
                s = X.primitive((e) => t.selectedSection.get() === e),
                r = X.primitive((e) => {
                    for (const t of a()) for (const a of t.sections) if (a.name === e) return a.slots.length;
                    return 0;
                }),
                o = X.primitive((e) => !Um.includes(e) && s(e) && r(e) > 1),
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
var Jm = ((e) => ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'), e))(Jm || {});
const Xm = ee.resolve('strings');
const Qm = {
        base: 'PanelSwitcher_5e94cb32',
        switcher: 'PanelSwitcher_switcher_a8240ce9',
        switcher__warning: 'PanelSwitcher_switcher__warning_a8240ce9',
        switcherOverlay: 'PanelSwitcher_switcherOverlay_914ce250',
        item__warning: 'PanelSwitcher_item__warning_c6581e78',
        itemIcon: 'PanelSwitcher_itemIcon_484391b3',
        indicator: 'PanelSwitcher_indicator_a80d3313',
        indicator__inactive: 'PanelSwitcher_indicator__inactive_399f9969',
    },
    Ym = 'default',
    ep = 'warning',
    tp = 'selected',
    ap = 'first',
    np = 'second';
function sp(e, t) {
    return `loadout.switcher.${e}_item_${t}`;
}
function rp(e) {
    const t =
        ((a = e.groupId),
        $e({
            header: Xm.readOrEmpty('tank_setup.tooltips.prebattleSwitchIndicator.title'),
            body: Xm.readOrEmpty(`tank_setup.tooltips.prebattleSwitchIndicator.desc.c_${a}`),
        }));
    var a;
    const n = e.itemStates[0] === Jm.WARNING,
        s = e.itemStates[1] === Jm.WARNING,
        r = 1 === e.currentIndex;
    return f.jsxs('div', {
        className: b(Qm.base, e.className),
        children: [
            f.jsxs(qt, {
                type: qt.types.vertical,
                onSwitch: function (t) {
                    e.onSwitch({ groupId: e.groupId, currentIndex: t ? 1 : 0 });
                },
                disabled: e.disabled,
                size: qt.sizes.small,
                checked: r,
                classNames: {
                    base: b(
                        Qm.switcher,
                        ((o = e.currentIndex),
                        (i = e.itemStates),
                        i.some((e, t) => e === Jm.WARNING && t !== o) && Qm.switcher__warning),
                    ),
                    overlay: Qm.switcherOverlay,
                },
                children: [
                    f.jsx(qt.Item, {
                        className: b(Qm.item, n && Qm.item__warning),
                        children: f.jsx(ke, { path: sp(ap, n ? ep : Ym), className: Qm.itemIcon }),
                    }),
                    f.jsx(qt.Item, {
                        className: b(Qm.item, s && Qm.item__warning),
                        children: f.jsx(ke, { path: sp(np, s ? ep : Ym), className: Qm.itemIcon }),
                    }),
                    f.jsx(qt.SelectedItem, {
                        children: f.jsx(ke, { path: sp(r ? np : ap, tp), className: Qm.itemIcon }),
                    }),
                ],
            }),
            f.jsx(ke, {
                ...(e.prebattleSwitchDisabled && t),
                path: 'loadout.switcher.indicator_' + (e.prebattleSwitchDisabled ? 'active' : 'default'),
                className: b(Qm.indicator, !e.prebattleSwitchDisabled && Qm.indicator__inactive),
            }),
        ],
    });
    var o, i;
}
const op = 'select',
    ip = 'undo',
    lp = 'cancel',
    cp = 'swap',
    dp = 'demount',
    up = 'demount_from_setup',
    mp = 'demount_from_setups',
    pp = 'destroy',
    _p = 'upgrade',
    hp = 'add_one',
    gp = 'drag_drop';
function vp(e) {
    return { currency: e.name, value: e.value, enough: e.isEnough };
}
function fp(e) {
    return ue(e, vp);
}
function bp(e) {
    return { priceID: e.priceID, price: fp(e.price), previousPrice: fp(e.defPrice), discount: fp(e.discount) };
}
const xp = (e) => ({
    canConfirm: e.canAccept,
    canCancel: e.canCancel,
    autoRenewalEnabled: e.isAutoRenewalEnabled,
    disabled: e.isDisabled,
    totalItemsInStorage: e.totalItemsInStorage,
    prices: nt(e.price, (e) => vp(e)),
});
function yp(e) {
    return { name: e.name, correct: e.isCorrect, clickable: e.isClickable };
}
function Cp(e) {
    return { dynamic: e.isDynamic, specializations: ((t = e.specializations), ue(t, yp)) };
    var t;
}
function wp(e) {
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
        price: bp(e.price),
        specializations: Cp(e.specializations),
    };
}
function Np(e) {
    return {
        ...wp(e),
        description: e.description,
        builtIn: e.isBuiltIn,
        itemName: e.itemName,
        buyMoreDisabled: e.isBuyMoreDisabled,
    };
}
const [Ip, jp] = B('ConsumablesModel')(
    ({ observableModel: e }) => {
        const t = {
                ...e.primitives(['autoloadEnabled', 'hasChanges']),
                consumables: e.arrayClone('consumables'),
                dealData: e.transform((e) => xp(e), 'dealPanel'),
                prices: e.transform((e) => ue(e, vp), 'dealPanel.price'),
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
            n = X.primitive(() => nt(t.consumables.get(), Np)),
            s = X.model((e) => Zt(n(), (t) => t.intCD === e));
        return { ...t, computes: { consumables: n, consumableById: s, dealData: a } };
    },
    ({ model: e, externalModel: t }) => ({
        unmount: t.createCallback((e, t) => ({ intCD: e, currentSlotId: t, actionType: ip, type: km }), 'onSlotAction'),
        actionSlot: t.createCallback((e) => ({ ...e, type: km }), 'onSlotAction'),
        swapSlots: t.createCallback((e) => ({ ...e, actionType: gp }), 'onSlotAction'),
        confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
        cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
        toggleAutoRenewal: t.createCallback(
            () => ({ value: !e.dealData.get().autoRenewalEnabled }),
            'dealPanel.onAutoRenewalChanged',
        ),
    }),
);
function kp(e) {
    return { valueKey: e.valueKey, value: e.value, valueType: e.valueType, debuff: e.isDebuff };
}
function Sp(e) {
    return { localeName: e.localeName, values: ((t = e.values), ue(t, kp)) };
    var t;
}
function Pp(e) {
    return { title: e.title, items: ue(e.items, Sp) };
}
function Ep(e) {
    return {
        ...wp(e),
        withDescription: e.withDescription,
        trophy: e.isTrophy,
        modernized: e.isModernized,
        upgradable: e.isUpgradable,
        effect: e.effect,
        level: e.level,
        destroyTooltipBodyPath: e.destroyTooltipBodyPath,
        activeSpecsMask: e.activeSpecsMask,
        bonuses: Pp(e.bonuses),
    };
}
const [Mp, Lp] = B('EquipmentsModel')(
    ({ observableModel: e }) => {
        const t = {
                standardEquipments: e.transform((e) => ue(e, Ep), 'simpleEquipments'),
                improvedEquipments: e.transform((e) => ue(e, Ep), 'deluxEquipments'),
                bountyEquipments: e.transform((e) => ue(e, Ep), 'trophyEquipments'),
                experimentalEquipments: e.transform((e) => ue(e, Ep), 'modernizedEquipments'),
                ...e.primitives(['hasChanges', 'equipCoinCount']),
                ...e.primitives({ hasModernizedEquipmentToDisassemble: 'hasExperimentalEquipmentToDisassemble' }),
                standardEquipmentsFilters: n.box(new Set()),
                dealData: e.transform((e) => xp(e), 'dealPanel'),
                prices: e.transform((e) => ue(e, vp), 'dealPanel.price'),
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
            s = X.model((e, a) => Zt(t[a].get(), (t) => t.intCD === e)),
            r = X.model(() => {
                const e = t.standardEquipmentsFilters.get(),
                    a = t.standardEquipments.get();
                return 0 === e.size
                    ? a
                    : (function (e, t) {
                          return Ut(e, (e) => e.specializations.specializations.some((e) => t.has(e.name)));
                      })(a, e);
            });
        return { ...t, computes: { equipmentsItemByIntCD: s, dealData: a, filteredStandardEquipments: r } };
    },
    ({ model: e, externalModel: t }) => ({
        unmount: t.createCallback((e, t) => ({ intCD: e, currentSlotId: t, actionType: ip, type: Im }), 'onSlotAction'),
        actionSlot: t.createCallback((e) => ({ ...e, type: Im }), 'onSlotAction'),
        swapSlots: t.createCallback((e) => ({ ...e, actionType: gp }), 'onSlotAction'),
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
function Dp(e) {
    return {
        ...wp(e),
        description: e.description,
        buyMoreVisible: e.isBuyMoreVisible,
        buyMoreDisabled: e.isBuyMoreDisabled,
    };
}
const [Tp, Ap] = B('InstructionsModel')(
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
                    dealData: e.observableModel.transform((e) => xp(e), 'dealPanel'),
                    prices: e.observableModel.transform((e) => ue(e, vp), 'dealPanel.price'),
                };
            (e.cleanup(
                s(() => {
                    const e = Ie(t.crewInstructions.get(), (e, t) => ((e[t.intCD] = Dp(t)), e), {});
                    h(() => a.crewInstructions.set(e));
                }),
            ),
                e.cleanup(
                    s(() => {
                        const e = Ie(t.equipmentInstructions.get(), (e, t) => ((e[t.intCD] = Dp(t)), e), {});
                        h(() => a.equipmentInstructions.set(e));
                    }),
                ),
                e.cleanup(
                    s(() => {
                        const e = nt(t.equipmentInstructions.get(), (e) => Dp(e));
                        h(() => a.equipmentInstructionsArray.set(e));
                    }),
                ),
                e.cleanup(
                    s(() => {
                        const e = nt(t.crewInstructions.get(), (e) => Dp(e));
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
                (e, t) => ({ intCD: e, currentSlotId: t, actionType: ip, type: Sm }),
                'onSlotAction',
            ),
            confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
            cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
            toggleAutoRenewal: t.createCallback(
                () => ({ value: !e.dealData.get().autoRenewalEnabled }),
                'dealPanel.onAutoRenewalChanged',
            ),
            actionSlot: t.createCallback((e) => ({ ...e, type: Sm }), 'onSlotAction'),
        }),
    ),
    Bp = { notMounted: 'notMounted', mounted: 'mounted', mountedMoreThanOne: 'mountedMoreThanOne' };
function Vp(e) {
    return e.isMounted ? (e.isMountedMoreThanOne ? Bp.mountedMoreThanOne : Bp.mounted) : Bp.notMounted;
}
function Op(e) {
    return { paramName: e.paramName, value: e.value, metricValue: e.metricValue };
}
function Rp(e) {
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
        mountedState: Vp(e),
        propertiesList: ue(e.propertiesList, Op),
        itemPrice: vp(e.itemPrice),
        price: bp(e.price),
        totalPrice: bp(e.totalPrice),
    };
}
const [zp, $p] = B('ShellsProvider')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives({
                        ammoMaxSize: 'ammoMaxSize',
                        installedCount: 'installedCount',
                        clip: 'clip',
                        hasChanges: 'modified',
                        autoloadEnabled: 'autoloadEnabled',
                    }),
                    shells: e.transform((e) => ue(e, Rp), 'shells'),
                    dealData: e.transform((e) => xp(e), 'dealPanel'),
                    prices: e.transform((e) => ue(e, vp), 'dealPanel.price'),
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
                s = X.model((e) => Zt(t.shells.get(), (t) => t.intCD === e)),
                r = X.primitive((e) => void 0 !== Zt(t.shells.get(), (t) => t.intCD === e)),
                o = X.shallow(() => ue(t.shells.get(), (e) => e.intCD));
            return { ...t, computes: { shell: n, shellByIntCD: s, shellExist: r, shellIDs: o, dealData: a } };
        },
        ({ model: e, externalModel: t }) => ({
            swapSlots: t.createCallback((e) => ({ ...e, actionType: cp }), 'onSlotAction'),
            updateShellCount: t.createCallback((e, t) => ({ intCD: e, newCount: t }), 'onShellUpdate'),
            confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
            cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
            toggleAutoRenewal: t.createCallback(
                () => ({ value: !e.dealData.get().autoRenewalEnabled }),
                'dealPanel.onAutoRenewalChanged',
            ),
        }),
    ),
    Hp = a.createContext(null);
const Fp = 'Animated_90a4d541',
    Wp = function ({ children: e, index: t, id: n }) {
        const s = a.useRef(n),
            r = (function () {
                const e = a.useContext(Hp);
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
                const d = yt(r.onSwiped);
                return () => {
                    (d(), l.stop(), l.start({ x: 0, immediate: !0 }));
                };
            }, [l, n]),
            a.useEffect(() => {
                ((s.current = n), (o.current = r.idToSlot));
            }, [r, n]),
            f.jsx(y.div, { className: Fp, style: i, children: e })
        );
    },
    qp = 'equipmentTrophy',
    Zp = 'equipmentTrophyBasic',
    Up = 'equipmentTrophyUpgraded',
    Gp = 'battleBoosterReplace',
    Kp = 'battleBooster',
    Jp = 'equipmentPlus',
    Xp = 'builtInEquipment',
    Qp = 'equipmentModernized';
function Yp(e) {
    switch (e) {
        case Gt.extraSmall:
        case Gt.small:
        case Gt.medium:
            return Gt.small;
        case Gt.large:
            return Gt.large;
        default:
            return Gt.extraLarge;
    }
}
const e_ = (e) => {
    switch (e) {
        case Gt.extraSmall:
        case Gt.small:
        case Gt.medium:
            return Jt.s48x48;
        case Gt.large:
            return Jt.s64x64;
        default:
            return Jt.s80x80;
    }
};
function t_(e) {
    switch (e) {
        case Kp:
            return Kt.directiveBooster;
        case Gp:
            return Kt.directiveSubstitute;
        case Xp:
            return Kt.builtInEquipment;
        case Jp:
            return Kt.improved;
        case Qp:
            return Kt.experimental;
        case qp:
        case Zp:
        case Up:
            return Kt.trophy;
        default:
            return Kt.none;
    }
}
const a_ = 'KEY_NONE',
    n_ = a.createContext(void 0),
    s_ = a.createContext(() => {}),
    r_ = ({ children: e }) => {
        const [t, n] = a.useState(void 0),
            s = a.useCallback((e) => {
                n(e);
            }, []);
        return f.jsx(s_.Provider, { value: s, children: f.jsx(n_.Provider, { value: t, children: e }) });
    },
    o_ = () => a.useContext(n_);
function i_(e, t, a, n) {
    const s = e.left + t + a + n / 2,
        r = e.top + e.height / 2;
    let o = document.elementFromPoint(s, r);
    for (; o; ) {
        if (o.hasAttribute('data-drop-item')) return Number(o.getAttribute('data-drop-item'));
        if (o.hasAttribute('data-drop-area')) return null;
        o = o.parentElement;
    }
}
const l_ = C(function ({ children: e, itemPosition: t, itemWidth: n, onDrop: s }) {
        const r = a.useRef(null),
            o = a.useRef(null),
            i = Xt(),
            l = i.state,
            c = Qt(),
            d = a.useContext(s_);
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
                const p = i_(t, m, a, n) ?? null;
                return (
                    o.current != p && null !== p && ((o.current = p), d(p)),
                    new Te()
                        .add(
                            Yt.up(([e]) => {
                                (i.emitter.trigger('onDrop', e, l.dragArea, i.item, l), i.reset());
                            }),
                        )
                        .add(
                            Yt.move(([e, a]) => {
                                if ('outside' === a) {
                                    const a = r.current;
                                    if (!a || null === l.virtualItem || !l.dragArea) return;
                                    const { x: s, left: i } = u(e.x, l.dragArea),
                                        c = i_(t, i, s, n) ?? null;
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
                                    c = i_(t, o, i, n) ?? null,
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
    c_ = C(function ({ children: e, onDrop: t, renderDraggingItem: n, dataDropArea: s }) {
        const r = Xt(),
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
                    f.jsx(ea.DragArea, { ref: o, children: f.jsx(ea.DropArea, { 'data-drop-area': s, children: e }) }),
                    f.jsx(ea.VirtualItem, {
                        container: o.current ?? void 0,
                        children: f.jsx(l_, { itemPosition: i, itemWidth: c, onDrop: t, children: n }),
                    }),
                ],
            })
        );
    }),
    d_ = function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: n }) {
        return f.jsx(ea, { children: f.jsx(c_, { onDrop: t, renderDraggingItem: a, dataDropArea: n, children: e }) });
    },
    u_ = 'DragAndDrop_draggableItem_e7d74af8',
    m_ = 'DragAndDrop_draggableItem__dragging_b849a88',
    p_ = 'DragAndDrop_draggableItem__undraggable_7c876195',
    __ = 'DragAndDrop_draggableItem__locked_2b4f1390',
    h_ = C(function ({ itemId: e, undraggable: t, className: a, dataDropArea: n, children: s }) {
        var r;
        const o = Xt();
        ta(o.reset, [o]);
        const i = null == (r = o.item) ? void 0 : r.getAttribute('data-drop-item'),
            l = void 0 !== i,
            c = na(i) && '' !== i && Number(i) === e;
        return f.jsx('div', {
            'data-drop-item': e,
            className: b(u_, l && __, t && p_, c && m_, a),
            'data-drop-area': n,
            onMouseDown: (e) => {
                e.button === aa.left && (o.start(e), e.preventDefault());
            },
            children: s,
        });
    }),
    g_ = 'UnmountButton_442d081e',
    v_ = 'UnmountButton_base__hover_e2b863f3',
    f_ = 'UnmountButton_image_5b9a272b';
function b_({ onClick: e, className: t }) {
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
        className: b(g_, n && v_, t),
        children: f.jsx(ke, {
            width: '42rem',
            height: '42rem',
            path: 'loadout.unmount_button_' + (n ? 'hover' : 'default'),
            className: f_,
        }),
    });
}
const x_ = 'Consumable_98851be5',
    y_ = 'Consumable_slot_523f223e',
    C_ = 'Consumable_slot__disabled_10fdd4ec',
    w_ = 'Consumable_slot__grabbing_f0e6559a',
    N_ = 'Consumable_hotKeyLabel_a0918925',
    I_ = 'Consumable_text_fd7e74cf',
    j_ = 'Consumable_unmountButton_43731923',
    k_ = 'Consumable_unmountButton__hidden_250735bc',
    S_ = 'Consumable_selectedOverlay_fd3226e6',
    P_ = ee.resolve('strings'),
    E_ = ee.resolve('aliases'),
    M_ = `${km}DropArea`,
    L_ = C(function ({ slot: e, disabled: t, selected: n, withKey: s = !1, onClick: r }) {
        const o = fe(),
            { model: i, controls: l } = jp(),
            c = Km().model,
            d = Ee(),
            u = o_(),
            m = d.location.endsWith(Lm) ? i.computes.consumableById(e.intCD) : e,
            [p, _] = a.useState(!1),
            h = At({ value: Gt.small }, { large: { value: Gt.large }, extraLarge: { value: Gt.extraLarge } }),
            g = P_.readOrEmpty(`readable_key_names.${e.keyName}`),
            v = s && g && e.keyName != a_,
            x = me({
                resId: E_.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: km }), [e]),
            }),
            y = a.useMemo(
                () => ({ disabled: t || void 0 === (null == m ? void 0 : m.imageName) }),
                [null == m ? void 0 : m.imageName, t],
            ),
            C = Ke(
                d.location.endsWith(Lm) ? 'tankSetupConsumableSlot' : 'tankSetupHangarConsumableSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: km,
                        fieldType: 1,
                        installedSlotId: e.id,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMounted: e.installed,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(E_.read((e) => e.hangar.shared.Consumables('resId'))).uid,
                    }),
                    [e],
                ),
                y,
            ),
            w = -1 !== e.intCD ? C : {};
        a.useEffect(() => {
            e.installed || o.play('mount', { target: 'loadout-panel:slot:consumable' });
        }, [e.installed, o]);
        const N = Xt(),
            I = null !== N.state.virtualItem;
        return (
            a.useEffect(() => {
                var t;
                (null == (t = N.item) ? void 0 : t.getAttribute('data-drop-area')) === M_ && _(u === e.id);
            }, [N.item, u, e.id]),
            f.jsxs('div', {
                ...x,
                ...w,
                className: x_,
                children: [
                    f.jsx(sa, {
                        className: b(y_, t && C_, I && w_),
                        classNames: { selectedOverlay: S_ },
                        size: Yp(h.value || Gt.small),
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
                                (null == (e = N.item) ? void 0 : e.getAttribute('data-drop-area')) === M_) ||
                                _(!1);
                        },
                        dataDropItem: e.id,
                        children: f.jsx(Wp, {
                            id: e.intCD,
                            index: e.id,
                            children: (null == m ? void 0 : m.imageName)
                                ? f.jsx(h_, {
                                      undraggable: !c.computes.sectionDraggable(km),
                                      itemId: e.id,
                                      dataDropArea: M_,
                                      children: f.jsx(ra, {
                                          name: m.imageName,
                                          size: e_(h.value || Gt.small),
                                          overlayType: t_(e.overlayType),
                                      }),
                                  })
                                : f.jsx(sa.Empty, {}),
                        }),
                    }),
                    v &&
                        f.jsx('div', {
                            className: N_,
                            children: f.jsx('div', { className: I_, children: f.jsx(Ge, { text: g }) }),
                        }),
                    !e.installed && f.jsx(b_, { onClick: () => l.unmount(e.intCD, e.id), className: b(j_, I && k_) }),
                ],
            })
        );
    }),
    D_ = {
        base: 'SpecializationType_9d3d37d7',
        icon: 'SpecializationType_icon_91ea8b3b',
        icon__visible: 'SpecializationType_icon__visible_ca41ac0a',
        icon__active: 'SpecializationType_icon__active_f79ff1ce',
    },
    T_ = 'stealth',
    A_ = 'survivability',
    B_ = 'firepower',
    V_ = 'mobility',
    O_ = 'On',
    R_ = 'Off',
    z_ = {
        [`${V_}${O_}`]: (e) =>
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
        [`${V_}${R_}`]: (e) =>
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
        [`${B_}${O_}`]: (e) =>
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
        [`${B_}${R_}`]: (e) =>
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
        [`${T_}${O_}`]: (e) =>
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
        [`${T_}${R_}`]: (e) =>
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
        [`${A_}${O_}`]: (e) =>
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
        [`${A_}${R_}`]: (e) =>
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
function $_({ specialization: e, active: t, classNames: a }) {
    const n = z_[`${e}${O_}`],
        s = z_[`${e}${R_}`];
    if (n && s)
        return f.jsxs('div', {
            className: b(D_.base, null == a ? void 0 : a.base),
            children: [
                f.jsx(n, {
                    className: b(D_.icon, D_.icon__active, t && D_.icon__visible, null == a ? void 0 : a.activeIcon),
                }),
                f.jsx(s, { className: b(D_.icon, !t && D_.icon__visible, null == a ? void 0 : a.inactiveIcon) }),
            ],
        });
    console.error(`Unknown specialization type ${e}`);
}
const H_ = 'Specialization_border_1d1ddf4e',
    F_ = 'Specialization_borderImage_2bbc40a2',
    W_ = 'Specialization_576f60ad',
    q_ = 'Specialization_base__button_e1e80f41',
    Z_ = 'Specialization_border__visible_2df74c11',
    U_ = 'Specialization_borderImage__visible_258796cf',
    G_ = 'Specialization_icon_453cdca5',
    K_ = 'Specialization_base__disabled_12d00a3f',
    J_ = 'Specialization_base__active_12d00a3f',
    X_ = Pe('Specialization'),
    Q_ = C(function ({ specialization: e, className: t, id: n, disabled: s = !1 }) {
        const r = fe(),
            { controls: o } = Km(),
            i = Ee().location.includes('/loadout'),
            l = e.dynamic && i,
            c = a.useRef(n);
        a.useEffect(() => {
            if (c.current !== n)
                return (
                    (c.current = n),
                    e.active
                        ? yt(() => r.play('on', { target: 'loadout-panel:slot:equipment:specialization' }))
                        : void 0
                );
        }, [r, e.active, n]);
        const d = a.useMemo(() => [e.type, e.dynamic, e.clickable], [e]),
            u = He('hangarSlotSpec', d);
        return f.jsxs(X_, {
            className: b(W_, l && q_, s && K_, e.active && J_, t),
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
                f.jsx('div', { className: b(H_, l && Z_) }),
                f.jsx('div', { className: b(F_, l && U_) }),
                f.jsx($_, { specialization: e.type, active: e.active, classNames: { base: G_ } }),
            ],
        });
    }),
    Y_ = 'Equipment_cd6073b3',
    eh = 'Equipment_slot_cd6073b3',
    th = 'Equipment_slot__disabled_13198c7d',
    ah = 'Equipment_slot__grabbing_49feaf7f',
    nh = 'Equipment_specialization_95709e3f',
    sh = 'Equipment_unmountButton_7376ff29',
    rh = 'Equipment_unmountButton__hidden_f9f46440',
    oh = 'Equipment_selectedOverlay_866b638b',
    ih = ee.resolve('aliases'),
    lh = `${Im}DropArea`;
function ch(e) {
    switch (e) {
        case Tm.Mobility:
            return 'loadout-panel:slot:equipment:specialization:mobility';
        case Tm.Firepower:
            return 'loadout-panel:slot:equipment:specialization:firepower';
        case Tm.Stealth:
            return 'loadout-panel:slot:equipment:specialization:stealth';
        case Tm.Survivability:
            return 'loadout-panel:slot:equipment:specialization:survivability';
        default:
            return (console.error('Unknown specialization type:', e), '');
    }
}
const dh = C(function ({ slot: e, disabled: t, selected: n, onClick: s }) {
        const { breakpoint: r } = oa(),
            { controls: o } = Lp(),
            { model: i } = Km(),
            [l, c] = a.useState(!1),
            d = fe(),
            u = Ee(),
            m = o_(),
            p = At({ value: Gt.small }, { large: { value: Gt.large }, extraLarge: { value: Gt.extraLarge } }),
            _ = me({
                resId: ih.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: Im }), [e]),
            }),
            h = a.useMemo(
                () => ({ disabled: t || -1 === (null == e ? void 0 : e.intCD) }),
                [null == e ? void 0 : e.intCD, t],
            ),
            g = Ke(
                u.location.endsWith(Pm) ? 'tankSetupOptionalDeviceSlotWW' : 'tankSetupHangarOptionalDeviceSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: Im,
                        installedSlotId: e.id,
                        isMounted: e.installed,
                        fieldType: 1,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(ih.read((e) => e.hangar.shared.Equipments('resId'))).uid,
                    }),
                    [e],
                ),
                h,
            ),
            v = -1 !== e.intCD ? g : {},
            x = Xt(),
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
                (null == (t = x.item) ? void 0 : t.getAttribute('data-drop-area')) === lh && c(m === e.id);
            }, [x.item, m, e.id]),
            f.jsxs('div', {
                className: Y_,
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
                                (null == (e = x.item) ? void 0 : e.getAttribute('data-drop-area')) === lh) ||
                                c(!1),
                                null == _ || _.onMouseLeave());
                        },
                        children: f.jsx(sa, {
                            className: b(eh, t && th, y && ah),
                            classNames: { selectedOverlay: oh },
                            size: Yp(p.value || Gt.small),
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
                                        d.play('click', { target: ch(e.specialization.type), original: t }),
                                    null == _ || _.onClick());
                            },
                            selected: n,
                            'data-test-id': `deviceSlot-${e.id}`,
                            dataDropItem: e.id,
                            children: f.jsx(Wp, {
                                index: e.id,
                                id: e.intCD,
                                children: e.imageName
                                    ? f.jsx(h_, {
                                          undraggable: !i.computes.sectionDraggable(Im),
                                          itemId: e.id,
                                          dataDropArea: lh,
                                          children: f.jsx(ra, {
                                              name: e.imageName,
                                              size: e_(r.name),
                                              level: e.level,
                                              overlayType: t_(e.overlayType),
                                          }),
                                      })
                                    : f.jsx(sa.Empty, {}),
                            }),
                        }),
                    }),
                    e.specialization &&
                        f.jsx(Q_, { specialization: e.specialization, className: nh, id: e.intCD, disabled: t }),
                    !e.installed && f.jsx(b_, { onClick: () => o.unmount(e.intCD, e.id), className: b(sh, y && rh) }),
                ],
            })
        );
    }),
    uh = 'Instuction_ab7d27c7',
    mh = 'Instuction_slot_ab7d27c7',
    ph = 'Instuction_slot__disabled_179c0b6b',
    _h = 'Instuction_warningImage_138cc840',
    hh = 'Instuction_warningImage__disabled_7d252f0',
    gh = 'Instuction_selectedOverlay_f19fc301',
    vh = 'Instuction_item_e5ebc3b8',
    fh = 'Instuction_item__withAttention_80199f58',
    bh = ee.resolve('aliases');
function xh(e) {
    switch (e) {
        case Am:
            return 'loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction';
        case Bm:
            return 'loadout-panel:slot:instruction:driver_virtuoso-crew_instruction';
        case Vm:
            return 'loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction';
        case Om:
            return 'loadout-panel:slot:instruction:fireFighting-crew_instruction';
        case Rm:
            return 'loadout-panel:slot:instruction:naturalCover-crew_instruction';
        case zm:
            return 'loadout-panel:slot:instruction:gunner_rancorous-crew_instruction';
        case $m:
            return 'loadout-panel:slot:instruction:loader_pedant-crew_instruction';
        case Hm:
            return 'loadout-panel:slot:instruction:commander_practical-crew_instruction';
        case Fm:
            return 'loadout-panel:slot:instruction:commander_enemyShotPredictor-crew_instruction';
        default:
            return (console.error('Unknown crew instruction type:', e), '');
    }
}
const yh = C(({ slot: e, disabled: t, selected: n, onClick: s }) => {
        const { model: r, controls: o } = Ap(),
            i = n ? r.computes.instructionById(e.intCD) : e,
            [l, c] = a.useState(!1),
            d = fe(),
            u = Ee(),
            m = At({ value: Gt.small }, { large: { value: Gt.large }, extraLarge: { value: Gt.extraLarge } });
        const p = me({
                resId: bh.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: Sm }), [e]),
            }),
            _ = a.useMemo(
                () => ({ disabled: t || void 0 === (null == i ? void 0 : i.imageName) }),
                [null == i ? void 0 : i.imageName, t],
            ),
            h = Ke(
                u.location.endsWith(Em) ? 'tankSetupBattleBoosterSlot' : 'tankSetupHangarBattleBoosterSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: Sm,
                        fieldType: 1,
                        installedSlotId: e.id,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMounted: e.installed,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(bh.read((e) => e.hangar.shared.Instructions('resId'))).uid,
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
                        e.overlayType === Gp &&
                        d.play('on', { target: xh(i.imageName) }),
                    (null == e ? void 0 : e.withAttention) &&
                        d.play('warn', { target: 'loadout-panel:slot:instruction' }));
            }, [null == i ? void 0 : i.imageName, e.installed, e.overlayType, null == e ? void 0 : e.withAttention, d]),
            f.jsxs('div', {
                ...p,
                ...g,
                className: uh,
                children: [
                    f.jsx(sa, {
                        className: b(mh, t && ph),
                        classNames: { selectedOverlay: gh },
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
                        size: Yp(m.value || Gt.small),
                        'data-test-id': `instructionSlot-${e.id}`,
                        children:
                            (null == i ? void 0 : i.imageName) &&
                            f.jsx(ra, {
                                className: b(vh, e.withAttention && fh),
                                name: i.imageName,
                                size: e_(m.value || Gt.small),
                                overlayType: t_(null == e ? void 0 : e.overlayType),
                            }),
                    }),
                    (null == i ? void 0 : i.imageName) &&
                        e.withAttention &&
                        f.jsx(ke, {
                            width: '48rem',
                            height: '48rem',
                            path: 'loadout.alert_48',
                            className: b(_h, t && hh),
                        }),
                    !e.installed && f.jsx(b_, { onClick: () => o.unmount(e.intCD, e.id) }),
                ],
            })
        );
    }),
    Ch = 'Shell_hoverOverlay_714f24ee',
    wh = 'Shell_4f8ed17c',
    Nh = 'Shell_icon_229c2d6f',
    Ih = 'Shell_base__locked_7aaeeab0',
    jh = 'Shell_base__selected_7aaeeab0',
    kh = 'Shell_icon__dragging_7aaeeab0',
    Sh = 'Shell_container_cd11209e',
    Ph = 'Shell_container__key_d0643ec3',
    Eh = 'Shell_container__count_25e66fc6',
    Mh = 'Shell_container__disabled_d9eea9c4',
    Lh = 'Shell_text_d3fedf21',
    Dh = 'Shell_text__empty_7aaeeab0',
    Th = 'Shell_text__disabled_7aaeeab0',
    Ah = ee.resolve('aliases'),
    Bh = 'small',
    Vh = 'x64x64',
    Oh = 'medium',
    Rh = C(function ({ disabled: e = !1, selected: t = !1, withKey: n = !1, empty: s = !0, className: r, slot: o }) {
        var i;
        const { model: l } = $p(),
            c = Ee(),
            d = void 0 !== (null == (i = Xt().item) ? void 0 : i.getAttribute('data-drop-item')),
            u = me({
                resId: Ah.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: o.id, slotType: jm }), [o.id]),
            }),
            m = At({ value: Bh }, { large: { value: Vh }, extraLarge: { value: Oh } }).value,
            p = a.useMemo(() => ({ disabled: e }), [e]),
            _ = Ke(
                c.location.endsWith(Mm) ? 'tankSetupShellItem' : 'tankSetupHangarShellSlot',
                a.useMemo(
                    () => ({
                        intCD: o.intCD,
                        slotType: jm,
                        fieldType: 1,
                        installedSlotId: o.id,
                        itemInstalledSetupIdx: o.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: o.id,
                        isMounted: o.installed,
                        isMountedMoreThanOne: o.mountedMoreThanOne,
                        emitterUID: ia(Ah.read((e) => e.hangar.shared.Shells('resId'))).uid,
                    }),
                    [o],
                ),
                p,
            ),
            h = t ? l.computes.shell(o.id) : o;
        if (!h) return;
        const g = ee.resolve('strings').readOrEmpty(`readable_key_names.${o.keyName}`),
            v = n && g && o.keyName !== a_;
        return f.jsxs('div', {
            ...u,
            ..._,
            className: b(wh, d && Ih, t && jh, r),
            'data-test-id': `shellSlot-${o.id}`,
            children: [
                v &&
                    f.jsx('div', {
                        className: b(Sh, Ph),
                        children: f.jsx('div', { className: Lh, children: f.jsx(Ge, { text: g }) }),
                    }),
                f.jsxs(Wp, {
                    id: o.intCD,
                    index: o.id,
                    children: [
                        f.jsx(h_, {
                            undraggable: !t,
                            itemId: o.id,
                            dataDropArea: 'shellsDropArea',
                            children: f.jsx(ke, {
                                path: `shell.${m}.${o.imageName}`,
                                className: Nh,
                                children: f.jsx('div', { className: Ch }),
                            }),
                        }),
                        void 0 !== h.count && f.jsx(zh, { count: h.count, empty: s, disabled: e }),
                    ],
                }),
            ],
        });
    }),
    zh = function ({ count: e, empty: t, disabled: a }) {
        return f.jsx('div', {
            className: b(Sh, Eh, a && Mh),
            children: f.jsx('div', { className: b(Lh, a && Th, t && Dh), children: e }),
        });
    },
    $h = {
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
function Hh({ hovered: e, selected: t }) {
    return f.jsxs(f.Fragment, {
        children: [
            t && f.jsx('div', { className: $h.selectedOverlay }),
            f.jsx(ke, { fit: 'cover', path: 'loadout.shells_warning_glow', className: $h.warningGlow }),
            f.jsx('div', { className: b($h.warningOverlay, e && !t && $h.warningOverlay__hover) }),
        ],
    });
}
function Fh({
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
        m = At({ value: Gt.small }, { large: { value: Gt.large }, extraLarge: { value: Gt.extraLarge } }),
        p = !e.some((e) => e.count && e.count > 0);
    return f.jsxs(sa, {
        classNames: {
            slot: b($h.slot, t.warning && !o && $h.slot__customBackground),
            content: $h.content,
            selectedOverlay: $h.selectedSlotOverlay,
        },
        size: Yp(m.value || Gt.small),
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
            t.warning && f.jsx(Hh, { hovered: c && !o, selected: i }),
            e.map((e) =>
                f.jsx(Rh, { className: $h.shell, selected: i, disabled: o, withKey: r, slot: e, empty: p }, e.id),
            ),
            t.warning && f.jsx('div', { className: $h.warningOverlay }),
        ],
    });
}
const Wh = C(function ({ groupIndex: e, sectionIndex: t, withKey: a, disabled: n, selected: s, onClick: r }) {
        const { model: o } = Km(),
            { controls: i } = $p(),
            l = o.computes.sectionByIndex(e, t),
            c = At({ value: Bh }, { large: { value: Vh }, extraLarge: { value: Oh } }).value;
        if (!l) return null;
        const d = Ut(l.slots ?? [], (e) => e.intCD > 0);
        return f.jsx('div', {
            className: $h.base,
            children: f.jsx(d_, {
                dataDropArea: `${jm}DropArea`,
                onDrop: (e, t) => i.swapSlots({ leftID: e, rightID: t }),
                renderDraggingItem: (e) =>
                    f.jsx(ke, {
                        path: `shell.${c}.${d[e].imageName}`,
                        className: b(Nh, kh),
                        children: f.jsx('div', { className: Ch }),
                    }),
                children: f.jsx(Fh, {
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
    qh = 'Divider_44f20b3a',
    Zh = 'Divider_dividerImage_9dcc5cfc';
function Uh({ className: e }) {
    return f.jsx('div', {
        className: b(qh, e),
        children: f.jsx(ke, {
            path: 'loadout.panel_border',
            repeat: 'repeat',
            fit: 'auto',
            width: '100%',
            height: '100%',
            className: Zh,
        }),
    });
}
const Gh = C(function ({ index: e, sectionType: t, groupIndex: a, sectionIndex: n, slotToComponent: s, onClick: r }) {
        const { model: o } = Km(),
            i = o.disabled.get(),
            l = o.computes.isSlotSelected(e, t),
            c = o.computes.slotByIndex(a, n, e);
        if (void 0 === c) return null;
        const d = (function ({ slotToComponent: e = og, sectionType: t = 'default' }) {
            return e[t] ?? e.default;
        })({ slotToComponent: s, sectionType: t });
        return d
            ? f.jsx(d, {
                  slot: c,
                  disabled: i,
                  selected: l,
                  withKey: t === km && o.computes.isSectionSelected(t),
                  onClick: r,
              })
            : null;
    }),
    Kh = 'AmmunitionPanel_border_5210db3e',
    Jh = 'AmmunitionPanel_borderImage_a7e374e',
    Xh = 'AmmunitionPanel_ammunitionPanel_1e2712ac',
    Qh = 'AmmunitionPanel_group_a19909f2',
    Yh = 'AmmunitionPanel_section_60fd0117',
    eg = 'AmmunitionPanel_section__battleBoosters_7bbb51d8',
    tg = 'AmmunitionPanel_presetWrapper_8dedcfb5',
    ag = 'AmmunitionPanel_slots_d69454c1',
    ng = C(function ({ groupIndex: e, sectionIndex: t, slotToComponent: n, onClick: s }) {
        const { controls: r } = jp(),
            { controls: o } = Lp(),
            { breakpoint: i } = oa(),
            l = At({ value: Gt.small }, { large: { value: Gt.large }, extraLarge: { value: Gt.extraLarge } }),
            { model: c } = Km(),
            d = c.computes.sectionByIndex(e, t);
        return d
            ? f.jsx('div', {
                  className: ag,
                  children: f.jsx(d_, {
                      dataDropArea: `${d.type}DropArea`,
                      onDrop: (e, t) => {
                          d.type === km
                              ? r.swapSlots({ leftID: t, rightID: e })
                              : d.type === Im && o.swapSlots({ leftID: t, rightID: e });
                      },
                      renderDraggingItem: (e) => {
                          const t = d.slots[e];
                          if (t)
                              return d.type === km
                                  ? f.jsx(ra, {
                                        name: t.imageName,
                                        size: e_(l.value || Gt.small),
                                        overlayType: t_(t.overlayType),
                                    })
                                  : d.type === Im
                                    ? f.jsx(ra, {
                                          name: t.imageName,
                                          size: e_(i.name),
                                          level: t.level,
                                          overlayType: t_(t.overlayType),
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
                                          o > 0 && f.jsx(Uh, {}),
                                          f.jsx(Gh, {
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
    sg = ee.resolve('aliases'),
    rg = { [jm]: Wh, default: ng },
    og = { [km]: L_, [Sm]: yh, [Im]: dh },
    ig = (e) => ({ options: { rootId: e } }),
    lg = {
        providersData: [
            { provider: Ip, props: ig(sg.read((e) => e.hangar.shared.Consumables('resId'))) },
            { provider: Tp, props: ig(sg.read((e) => e.hangar.shared.Instructions('resId'))) },
            { provider: Mp, props: ig(sg.read((e) => e.hangar.shared.Equipments('resId'))) },
            { provider: Gm, props: ig(sg.read((e) => e.hangar.shared.Loadout('resId'))) },
            { provider: zp, props: ig(sg.read((e) => e.hangar.shared.Shells('resId'))) },
        ],
        sectionToComponent: rg,
        slotToComponent: og,
    },
    cg = a.createContext(lg);
function dg({
    sectionToComponent: e = lg.sectionToComponent,
    slotToComponent: t = lg.slotToComponent,
    providersData: n = lg.providersData,
    children: s,
}) {
    const r = a.useMemo(() => ({ sectionToComponent: e, slotToComponent: t }), [e, t]),
        o = new la().add(r_).addWithProps(cg.Provider, { value: r });
    return (
        n.forEach((e) => {
            void 0 === e.props ? o.add(e.provider) : o.addWithProps(e.provider, e.props);
        }),
        o.render(s)
    );
}
const ug = C(function ({ index: e, vehicleId: t, groupIndex: n, onSectionClick: s }) {
        const r = a.useContext(cg),
            { model: o } = Km(),
            i = o.disabled.get(),
            l = o.computes.sectionByIndex(n, e),
            c = ca((e, t) => {
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
                          onSwiped: da(30, e),
                      }
                    : { idToSlot: {}, onSwiped: e };
            }, [l, d, t]);
        if (void 0 === l) return null;
        const m = (function ({ sectionToComponent: e = rg, sectionType: t = 'default' }) {
            return e[t] ?? e.default;
        })({ sectionToComponent: r.sectionToComponent, sectionType: l.type });
        return f.jsxs('div', {
            className: b(Yh, l.type === Sm && eg),
            children: [
                f.jsx('div', { className: Kh }),
                f.jsx('div', { className: Jh }),
                m &&
                    f.jsx(Hp.Provider, {
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
    mg = C(function ({ className: e, onSectionClick: t, vehicleId: a }) {
        const { model: n, controls: s } = Km(),
            r = n.computes.groups();
        return f.jsx('div', {
            className: b(Xh, e),
            children: r.map(
                (
                    {
                        id: e,
                        sections: r,
                        currentIndex: o,
                        totalCount: i,
                        states: l,
                        switchEnabled: c,
                        prebattleSwitchDisabled: d,
                    },
                    u,
                ) =>
                    f.jsxs(
                        'div',
                        {
                            className: Qh,
                            children: [
                                ua(
                                    r,
                                    (e) => e.slots.length > 0,
                                    (e, n) =>
                                        f.jsx(
                                            ug,
                                            { index: n, groupIndex: u, vehicleId: a, onSectionClick: t },
                                            `${n}-${o}`,
                                        ),
                                ),
                                c &&
                                    i > 1 &&
                                    f.jsx(rp, {
                                        groupId: e,
                                        currentIndex: o,
                                        onSwitch: s.changePreset,
                                        itemStates: l,
                                        disabled: n.disabled.get(),
                                        prebattleSwitchDisabled: d,
                                        className: tg,
                                    }),
                            ],
                        },
                        e,
                    ),
            ),
        });
    }),
    pg = {
        loadoutPanel: 'LoadoutPanel_loadoutPanel_4c5b5911',
        loadoutPanel__screenMode: 'LoadoutPanel_loadoutPanel__screenMode_2cf03a87',
        panel: 'LoadoutPanel_panel_ec4752fe',
        crewPanel: 'LoadoutPanel_crewPanel_b90a22ab',
        ammunitionPanel: 'LoadoutPanel_ammunitionPanel_baf41791',
    },
    _g = {
        [Sm]: 'loadout/instructions',
        [km]: 'loadout/consumables',
        [Im]: 'loadout/equipment',
        [jm]: 'loadout/shells',
    };
function hg(e) {
    const t = _g[e];
    if (t) return `/hangar/${t}`;
}
const gg = C(function ({ onRoute: e, onResolveRoute: t = hg }) {
        const a = Km().model.vehicleId(),
            n = Ts().model.selectedVehicle(),
            s = Ee(),
            r = ca((a, n) => {
                if (e) {
                    const s = t(a);
                    if (void 0 === s) return;
                    e(s, n);
                }
                const r = t(a);
                r && s.push(r, n);
            });
        return n && n.id === a
            ? f.jsx(mg, { vehicleId: a, className: pg.ammunitionPanel, onSectionClick: r }, a)
            : null;
    }),
    vg = function (e) {
        return f.jsx(dg, { children: f.jsx(gg, { ...e }) });
    },
    fg = (e) =>
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
    bg = ee.resolve('strings'),
    xg = ee.resolve('views'),
    yg = ee.resolve('aliases');
function Cg(e) {
    const t = ((e) =>
        e === Il ? 'acceleratedTraining_disabled' : e === Nl ? 'acceleratedTraining_on' : 'acceleratedTraining_off')(e);
    return $e({
        header: bg.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.header`),
        body: bg.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.body`),
    });
}
const wg = (e) =>
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
    Ng = 'Trainings_button_bf9590ac',
    Ig = 'Trainings_toggleContent_8fe22dba',
    jg = 'Trainings_image_cc494d75',
    kg = 'Trainings_image__on_3cef43a',
    Sg = Pe('Trainings', 'Trainings_f0a414b9'),
    Pg = C(function (e) {
        const { model: t, controls: a } = Pl(),
            n = t.state.get(),
            s = t.acceleratedTraining.get(),
            r = t.intensiveTraining.get(),
            o = n === kl,
            i = o || s === Il,
            l = o || r === Il,
            c = Cg(s),
            d = Se({
                resId: yg.read((e) => e.hangar.shared.Crew('resId')),
                contentId: xg.read((e) => e.lobby.crew.CrewHeaderTooltipView('resId')),
            }),
            u = ma(
                () => {
                    l || a.toggleIntensiveTraining();
                },
                [a, l],
                300,
            );
        return f.jsxs(Sg, {
            ...e,
            children: [
                f.jsx('div', {
                    ...c,
                    className: Ng,
                    children: f.jsx(It, {
                        theme: kt.primary,
                        activated: s === Nl,
                        disabled: i,
                        onClick: () => {
                            i || a.toggleAcceleratedTraining();
                        },
                        classNames: { content: Ig },
                        children: f.jsx(fg, { className: b(jg, !o && s === Nl && kg) }),
                    }),
                }),
                f.jsx('div', {
                    ...d,
                    className: Ng,
                    children: f.jsx(It, {
                        theme: kt.primary,
                        activated: r === Nl,
                        disabled: l,
                        onClick: u,
                        classNames: { content: Ig },
                        children: f.jsx(wg, { className: b(jg, !o && r === Nl && kg) }),
                    }),
                }),
            ],
        });
    }),
    Eg = (e) =>
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
    Mg = 'DogPaw_84e7ee48',
    Lg = 'DogPaw_icon_5261d625',
    Dg = ee.resolve('strings');
function Tg({ onClick: e }) {
    const t = $e({ body: Dg.readOrEmpty('crew.dogPawTooltip.details.body') });
    return f.jsx(dt, {
        ...t,
        theme: dt.themes.secondary,
        size: dt.sizes.small,
        className: Mg,
        onClick: function () {
            (null == t || t.onClick(), e());
        },
        children: f.jsx(Eg, { className: Lg }),
    });
}
const Ag = 'NoTankmanBackground_e7a5353b',
    Bg = 'NoTankmanBackground_base__hover_be4aa02',
    Vg = 'NoTankmanBackground_selectedOverlay_6eff1022',
    Og = 'NoTankmanBackground_selectedOverlayPattern_313f5cd4',
    Rg = 'NoTankmanBackground_pattern_f007ac5a';
function zg({ hover: e, selected: t }) {
    return f.jsxs('div', {
        className: b(Ag, e && Bg),
        children: [
            t && f.jsxs(f.Fragment, { children: [f.jsx('div', { className: Vg }), f.jsx('div', { className: Og })] }),
            f.jsx(ke, { path: 'loadout.crew.no_tankman_pattern', className: Rg }),
        ],
    });
}
const $g = {
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
    Hg = 'disabled',
    Fg = 'warning',
    Wg = 'noTankman',
    qg = 'selected',
    Zg = 'default';
function Ug({ skinId: e, customizedSkin: t }) {
    return e
        ? t
            ? `tankmen.icons.big.crewSkins.${lt(e)}`
            : `tankmen.icons.big.${lt(e)}`
        : 'loadout.crew.no_tankman_red';
}
const Gg = Pe('Tankman', $g.base),
    Kg = a.memo(function ({
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
        const c = a ? Hg : r ? Wg : s ? Fg : n ? qg : Zg,
            d = !e;
        return f.jsxs(Gg, {
            ...l,
            className: b(i, $g[`base__${c}`], o && !a && e && $g.base__hover),
            children: [
                a && f.jsx('div', { className: $g.disabledOverlay }),
                n &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx('div', { className: $g.selectedOverlay }),
                            f.jsx('div', { className: $g.selectedOverlayPattern }),
                        ],
                    }),
                s && f.jsx('div', { className: $g.warningOverlay }),
                d && !a && f.jsx(zg, { hover: o, selected: n }),
                f.jsx(ke, {
                    fit: 'cover',
                    className: b($g.content, a && (s || !e ? $g.content__disabledWarning : $g.content__disabled)),
                    path: Ug({ skinId: e, customizedSkin: t }),
                }),
                d && !a && f.jsx('div', { className: $g.noTankmanOverlay }),
                s && f.jsx(ke, { className: $g.warningGlow, fit: 'cover', path: 'loadout.crew.alert_glow' }),
            ],
        });
    }),
    Jg = 'Slot_154c229b',
    Xg = 'Slot_base__noState_71f19f5c',
    Qg = 'Slot_base__disabled_d386066c',
    Yg = 'Slot_base__dog_d386066c',
    ev = 'Slot_statusBlock_ccea62a7',
    tv = 'Slot_statusBlock__dogPaw_1bc38cf2',
    av = 'Slot_statusBlock__disabled_1d609e12',
    nv = 'Slot_statusOverlay_e74c1f89',
    sv = 'Slot_statusIcon_fe4620f1',
    rv = 'Slot_statusIcon__role_3c0a5c22',
    ov = 'Slot_statusIcon__untrainedPenalty_2d3a3a74',
    iv = 'Slot_retrainingProgress_10d488a1',
    lv = 'Slot_newPerk_88d9a967',
    cv = 'Slot_newPerk__disabled_1d609e12',
    dv = 'Slot_glowBg_e3e687b5',
    uv = ee.resolve('strings'),
    mv = 'DogSlot',
    pv = Pe('DogSlot', b(Jg, Yg), { variants: { state: { true: Qg } } }),
    _v = C(function () {
        const [e, t] = a.useState(!1),
            n = fe(),
            { model: s, controls: r } = Pl(),
            o = s.computes.disabled(),
            i = s.vehicleNation.get(),
            l = $e({
                header: uv.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${i}.header`),
                body: uv.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${i}.body`),
            });
        const c = pa(() => r.showDogInfo(), [r], 400);
        return f.jsxs(pv, {
            state: o,
            children: [
                f.jsx(Kg, {
                    disabled: o,
                    warning: !1,
                    noTankman: !1,
                    hovered: e,
                    customizedSkin: !1,
                    skinId: 'ussr_dog_1',
                    onClick: function () {
                        (o || n.play('dog-slot-click', { target: mv }), null == l || l.onClick());
                    },
                    onMouseEnter: function (e) {
                        (o || (t(!0), n.play('mouse-enter', { target: mv })), null == l || l.onMouseEnter(e));
                    },
                    onMouseLeave: function () {
                        (t(!1), null == l || l.onMouseLeave());
                    },
                }),
                f.jsx('div', { className: b(ev, tv, o && av), children: f.jsx(Tg, { onClick: c }) }),
            ],
        });
    }),
    hv = 'TankmanRole_3bb08c81',
    gv = {
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
function vv({ role: e = '', className: t }) {
    const a = gv[e];
    if (a) return f.jsx(a, { className: b(hv, t) });
    console.error(`Unknown role type ${e}`);
}
const fv = 'NewPerk_count_dccb920a',
    bv = 'NewPerk_iconPlus_4dc7d532',
    xv = 'NewPerk_iconGlow_2e9bc817',
    yv = Pe('NewPerk', 'NewPerk_2d8eff13');
function Cv({ className: e, count: t, baseRef: a }) {
    return f.jsxs(yv, {
        ref: a,
        className: e,
        children: [
            t > 1 && f.jsx('div', { className: fv, children: t }),
            f.jsx('div', { className: bv, 'data-test-id': 'newPerk' }),
            f.jsx(ke, { path: 'loadout.crew.plus_perks_glow', width: 65, height: 68, className: xv }),
        ],
    });
}
const wv = (e) =>
        a.createElement(
            'svg',
            { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', { d: 'M4 12L9 15L14 12V10L9 13L4 10V12Z', fill: '#FFC6C3' }),
            a.createElement('path', { d: 'M4 8L9 11L14 8V6L9 9L4 6V8Z', fill: '#FFC6C3' }),
            a.createElement('path', { d: 'M4 4L9 7L14 4V2L9 5L4 2V4Z', fill: '#FFC6C3' }),
        ),
    Nv = 'RetrainingProgress_7ce4f314',
    Iv = 'RetrainingProgress_background_accc6ddf',
    jv = 'RetrainingProgress_content_b4685fd0',
    kv = 'RetrainingProgress_icon_f4b2dc6',
    Sv = ee.resolve('intl'),
    Pv = Pe('RetrainingProgress', Nv);
function Ev({ value: e, className: t }) {
    const a = Sv.formatNumber('integral', 100 * e);
    return f.jsxs(Pv, {
        className: t,
        children: [
            f.jsx('div', { className: Iv }),
            f.jsxs('div', {
                className: jv,
                children: [
                    f.jsx(wv, { className: kv }),
                    f.jsx(je, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: a } }),
                ],
            }),
        ],
    });
}
const Mv = {
        border: 'TankmanLevel_border_7a3d6e33',
        borderImage: 'TankmanLevel_borderImage_f52e6b8f',
        base: 'TankmanLevel_888fe938',
        perk: 'TankmanLevel_perk_390beec8',
        borderImage__noise: 'TankmanLevel_borderImage__noise_e53df2b',
    },
    Lv = ee.resolve('images'),
    Dv = Pe('Perk');
function Tv({ value: e, main: t, ...a }) {
    const n = t ? 'components.button.default_border_pattern_radius_4' : 'loadout.crew.dashed_border';
    return f.jsxs(Dv, {
        ...a,
        children: [
            t && f.jsx('div', { className: Mv.border }),
            f.jsx('div', {
                className: b(Mv.borderImage, t && Mv.borderImage__noise),
                style: { borderImageSource: `url(${Lv.readOrEmpty(n)})` },
            }),
            e,
        ],
    });
}
const Av = Pe('TankmanLevel', Mv.base);
function Bv({ perkValue: e, bonusPerkValue: t }) {
    return f.jsxs(Av, {
        children: [
            f.jsx(Tv, { className: Mv.perk, value: e, main: !0 }),
            void 0 !== t && f.jsx(Tv, { className: b(Mv.perk, Mv.perk__bonus), value: t, main: !1 }),
        ],
    });
}
const Vv = (e) =>
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
    Ov = ee.resolve('views'),
    Rv = 'CrewSlot',
    zv = {
        retrainingProgress: 'retrainingProgress',
        withPerks: 'withPerks',
        unsuitableTankman: 'unsuitableTankman',
        default: 'default',
    };
const $v = C(function ({
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
            { model: u, controls: m } = Pl(),
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
                            ? zv.retrainingProgress
                            : zv.unsuitableTankman
                        : e.perks.length > 0 || (t && t > 0)
                          ? zv.withPerks
                          : zv.default;
            })(h, v),
            y = x === zv.retrainingProgress || x === zv.unsuitableTankman,
            C = h && g > 0,
            [w, N] = _a();
        const I = Ke(
                'crewMember',
                a.useMemo(() => ({ tankmanID: t, slotIdx: n, previousViewID: null }), [t, n]),
                a.useMemo(() => ({ disabled: !_ || p }), [_, p]),
            ),
            j = ha(
                'crew_info',
                a.useMemo(() => ({ tankman: h ?? {}, resId: Ov.read((e) => e.mono.hangar.tooltips('resId')) }), [h]),
                { disabled: !h, showDelay: i },
            );
        return f.jsxs('div', {
            'data-name': 'Slot',
            onMouseDown: function (e) {
                w(e) || null == I || I.onMouseDown(e);
            },
            onMouseEnter: function (e) {
                (j.onMouseEnter(e), p || (c(!0), r || d.play('mouse-enter', { target: Rv })));
            },
            onMouseLeave: function () {
                (j.onMouseLeave(), c(!1));
            },
            onClick: function () {
                (j.onClick(), p || (d.play('crew-slot-click', { target: Rv }), m.openCrew(n), o && o(e)));
            },
            className: b(Jg, p && Qg, (!x || x === zv.default || !zv[x]) && Xg),
            'data-test-id': `crewSlot-${e}`,
            children: [
                C &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx(Cv, { baseRef: N, count: g, className: b(lv, p && cv) }),
                            !p && f.jsx('div', { className: dv }),
                        ],
                    }),
                f.jsx(Kg, {
                    hovered: l && !r,
                    selected: r,
                    disabled: p,
                    warning: y,
                    noTankman: !_,
                    skinId: null == h ? void 0 : h.crewSkinId.replace('tankman_', ''),
                    customizedSkin: (null == h ? void 0 : h.customizedSkin) ?? !1,
                }),
                x !== zv.default &&
                    f.jsx('div', {
                        className: b(ev, p && av),
                        children: (() => {
                            if (!h)
                                return (
                                    void 0 !== s &&
                                    f.jsxs(f.Fragment, {
                                        children: [
                                            f.jsx('div', { className: nv }),
                                            f.jsx(vv, { className: b(sv, rv), role: s }),
                                        ],
                                    })
                                );
                            switch (x) {
                                case zv.unsuitableTankman:
                                    return f.jsxs(f.Fragment, {
                                        children: [
                                            f.jsx('div', { className: nv }),
                                            f.jsx(Vv, { className: b(sv, ov) }),
                                        ],
                                    });
                                case zv.retrainingProgress:
                                    return f.jsx(Ev, { value: h.currentVehicleSkillsEfficiency, className: iv });
                                case zv.withPerks:
                                    return f.jsx(Bv, { perkValue: h.perks.length, bonusPerkValue: v });
                                default:
                                    return (console.error('Unknown crew slot display state: ', x), null);
                            }
                        })(),
                    }),
            ],
        });
    }),
    Hv = 'CrewPanel_border_2ccbfb54',
    Fv = 'CrewPanel_borderImage_50acd0ba',
    Wv = 'CrewPanel_slots_57c050b6',
    qv = 'CrewPanel_slotWrapper_acbcfc00',
    Zv = Pe('CrewPanel', 'CrewPanel_82d22bfe'),
    Uv = C(
        a.forwardRef(function (e, t) {
            const [n, s] = a.useState(!1),
                { model: r } = Pl(),
                o = r.computes.slots(),
                i = r.withDog.get();
            return f.jsxs(Zv, {
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
                    f.jsx('div', { className: Hv }),
                    f.jsx('div', { className: Fv }),
                    f.jsxs('div', {
                        className: Wv,
                        children: [
                            o.map((e, t) =>
                                f.jsxs(
                                    'div',
                                    {
                                        className: qv,
                                        children: [
                                            t > 0 && f.jsx(Uh, {}),
                                            f.jsx(
                                                $v,
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
                            i && f.jsxs('div', { className: qv, children: [f.jsx(Uh, {}), f.jsx(_v, {})] }),
                        ],
                    }),
                ],
            });
        }),
    ),
    Gv = { 'crew-slot-click': ga('yes1'), 'dog-slot-click': ga('rudy') },
    Kv = new la().addWithProps(va, { overrides: Gv }),
    Jv = { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.Crew('resId')) };
function Xv() {
    return Kv.render(f.jsxs(Sl, { options: Jv, children: [f.jsx(Pg, {}), f.jsx(Uv, { className: pg.crewPanel })] }));
}
const Qv = ee.resolve('aliases').read((e) => e.hangar.shared.Crew('resId'));
function Yv({ screenModeEnabled: e, className: t, onResolveRoute: a, onRoute: n }) {
    return f.jsx(Ht, {
        id: Qv,
        fallback: () => f.jsx(fa, {}),
        children: f.jsx('div', {
            className: b(pg.loadoutPanel, e && pg.loadoutPanel__screenMode, t),
            children: f.jsxs(wm, {
                className: pg.panel,
                children: [f.jsx(Xv, {}), f.jsx(vg, { onResolveRoute: a, onRoute: n })],
            }),
        }),
    });
}
function ef(e) {
    const t = xm.loadout[e];
    if (t) return t;
}
function tf(e) {
    return f.jsx(Yv, { ...e, onResolveRoute: ef });
}
const af = 'battleNeeded',
    nf = 'customization',
    sf = 'crewAutoReturn',
    rf = 'crewRetrain',
    of = 'quickTraining',
    lf = 'crewOut',
    cf = 'crewBack',
    df = 'easyEquip',
    uf = 'armorInspector',
    mf = 'fieldModification',
    pf = 'research',
    _f = 'aboutVehicle',
    hf = 'compare',
    gf = 'vehSkillTree',
    vf = 'small',
    ff = 'large',
    bf = 'vehicle',
    xf = 'crew',
    yf = 'customization',
    Cf = {
        vehicleChassis: 'track',
        vehicleEngine: 'engine',
        vehicleGun: 'gun',
        vehicleWheels: 'wheel',
        vehicleTurret: 'turret',
        vehicleRadio: 'radio',
    },
    wf = { vehicleGun: 0, vehicleTurret: 1, vehicleRadio: 2, vehicleEngine: 3, vehicleChassis: 4, vehicleWheels: 5 };
function Nf(e) {
    return wf[e] ?? 0;
}
const If = 'warning',
    jf = 'critical',
    kf = 'enabled',
    Sf = 'disabled',
    Pf = 'unavailable',
    Ef = [xf, bf, yf],
    Mf = { vehicle: ['nationChange', _f, 'repairs', mf, gf, hf, pf, uf, df], crew: [rf, of, lf, cf] };
const Lf = o({ state: c(), counter: m(), stateReason: S(c()) }),
    [Df, Tf] = B('VehicleMenuModel')(
        ({ observableModel: e, requires: { vehicleInfo: t } }) => {
            const a = {
                    opened: n.box(!1),
                    screenID: n.box(null),
                    menuItems: e.dict('menuItems'),
                    researchItems: e.arrayClone('researchItems'),
                },
                s = X.primitive(() => {
                    const e = a.researchItems.get();
                    return le(e, (e, t) => Nf(e) - Nf(t))[0];
                }),
                r = X.structural((e) => {
                    const t = a.menuItems.get(e);
                    if (!t) return (console.error(`Error getting menuItem with id: ${e}`), { state: Sf, counter: -1 });
                    try {
                        return _(Lf, JSON.parse(t));
                    } catch (n) {
                        return (console.error(n), { state: Sf, counter: -1 });
                    }
                }),
                o = X.shallow((e) => {
                    var a;
                    if ((null == (a = t.model.selectedVehicleStatistics()) ? void 0 : a.status) === Si.battle)
                        return Sf;
                    const n = [];
                    let s = !1;
                    for (const t of e) {
                        const e = r(t);
                        if ((n.push(e.state), e.state === jf)) return jf;
                        e.state === If && (s = !0);
                    }
                    const o = n.every((e) => e === Sf);
                    return ((i = o), s ? If : i ? Sf : kf);
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
        { useRequires: () => ({ vehicleInfo: Ts() }) },
    ),
    [Af, Bf] = B('KeyBindingsProvider')((e) => ({
        vehicleMenu: {
            ...e.observableModel.primitives({ upgrades: gf }, 'vehicleMenu'),
            ...e.observableModel.primitives(
                {
                    retrainCrew: rf,
                    quickTraining: of,
                    sendToBarracks: lf,
                    returnCrew: cf,
                    aboutVehicle: _f,
                    upgrades: mf,
                    compare: hf,
                    research: pf,
                    armor: uf,
                    quickService: df,
                    customization: nf,
                },
                'vehicleMenu',
            ),
        },
    })),
    Vf = 'MenuButton_background_80afe673',
    Of = 'MenuButton_background__hidden_a0ead688',
    Rf = 'MenuButton_overlay_fdbd550d',
    zf = 'MenuButton_arrow_5a0b183c',
    $f = 'MenuButton_icon_e994a077',
    Hf = Pe('MenuButton', {
        element: 'div',
        className: 'MenuButton_3f57027c',
        cva: {
            variants: {
                state: { [Sf]: 'MenuButton_base__disabled_2d840da1', opened: 'MenuButton_base__opened_d9d84dd' },
            },
        },
    }),
    Ff = ee.resolve('strings'),
    Wf = ee.resolve('views'),
    qf = C(function ({
        type: e,
        opened: t,
        buttonState: n,
        crewBackWarning: s,
        iconPostfix: r,
        researchItem: o,
        size: i = vf,
        onMouseEnter: l,
        onClick: c,
        classNames: d,
        className: u,
        ...m
    }) {
        var p;
        const _ = Bf(),
            [h, g] = a.useState(!1),
            v = fe(),
            x = ge(t),
            { model: y } = Tf(),
            C = _.model.vehicleMenu,
            w = null == (p = null == C ? void 0 : C[e]) ? void 0 : p.get(),
            N = w ? ba(w) : void 0,
            { stateReason: I } = y.computes.getMenuItem(cf),
            j = n === Sf,
            k = t ? 'opened' : n,
            S = ze(i, 'upscale'),
            P = (e === xf && s) || j ? kf : n,
            E = j ? kf : P,
            M = $e({ body: Ff.readOrEmpty('crew_operations.return.error.noPrevious') }),
            L = ha(
                'simple',
                a.useMemo(
                    () => ({
                        resId: Wf.read((e) => e.mono.tooltips.tooltips('resId')),
                        header: Ff.readOrEmpty(`hangar.vehicleMenu.menuButton.tooltip.${e}.header`),
                        body: Ff.readOrEmpty(`hangar.vehicleMenu.menuButton.tooltip.${e}.body`),
                        keyButtonCode: N,
                        keyButtonTitle: Ff.readOrEmpty('hangar.vehicleMenu.menuButton.tooltip.hotkey.title'),
                    }),
                    [e, N],
                ),
            );
        a.useEffect(() => {
            t && !1 === x && v.play('expand', { target: 'vehicle-menu-widget:button' });
        }, [t, x, v]);
        const D = j && e === xf && I === af ? M : j ? void 0 : L;
        return f.jsxs(Hf, {
            ...m,
            ...D,
            state: k,
            onMouseEnter: function (e) {
                j ||
                    (v.play('mouse-enter', { target: 'vehicle-menu-widget:button', original: e }),
                    null == D || D.onMouseEnter(e),
                    g(!0),
                    null == l || l(e));
            },
            onMouseLeave: function () {
                (g(!1), null == D || D.onMouseLeave());
            },
            onClick: function (t) {
                j ||
                    (v.play('click', { target: 'vehicle-menu-widget:button', original: t }),
                    null == D || D.onClick(),
                    c(e));
            },
            'data-test-id': e,
            className: null == d ? void 0 : d.base,
            children: [
                !j &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx(ke, {
                                path: `hangar.vehicleMenu.${S}.btn_${P}`,
                                className: b(Vf, (h || t) && Of, null == d ? void 0 : d.background),
                            }),
                            f.jsx(ke, {
                                path: `hangar.vehicleMenu.${S}.btn_${P}_opened`,
                                className: b(Vf, !t && Of, null == d ? void 0 : d.backgroundOpened),
                            }),
                            !t &&
                                f.jsx(ke, {
                                    path: `hangar.vehicleMenu.${S}.btn_${P}_hover`,
                                    className: b(Vf, !h && Of, null == d ? void 0 : d.backgroundHovered),
                                }),
                        ],
                    }),
                e !== yf &&
                    !t &&
                    f.jsx(ke, {
                        path: `hangar.vehicleMenu.${S}.arrow_${E}`,
                        className: b(zf, null == d ? void 0 : d.arrow),
                    }),
                (!t || j) &&
                    f.jsx(ke, {
                        path: `hangar.vehicleMenu.${S}.${e}_${r}`,
                        className: b($f, null == d ? void 0 : d.icon),
                    }),
                j &&
                    f.jsx(ke, {
                        path: `hangar.vehicleMenu.${S}.btn_disabled`,
                        className: b(Rf, null == d ? void 0 : d.overlay),
                    }),
            ],
        });
    }),
    Zf = {
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
    Uf = ee.resolve('strings'),
    Gf = ee.resolve('intl'),
    Kf = C(function ({ name: e, size: t = vf, researchItem: a, onClick: n }) {
        var s;
        const r = fe(),
            { model: o } = Tf(),
            { state: i, stateReason: l, counter: c } = o.computes.getMenuItem(e),
            d = ze(t, 'upscale'),
            u = Bf().model.vehicleMenu,
            m = null == (s = null == u ? void 0 : u[e]) ? void 0 : s.get(),
            p = m ? ba(m) : void 0,
            _ = $e({ body: Uf.readOrEmpty('crew_operations.return.error.noPrevious') }),
            h = $e({ body: Uf.readOrEmpty('crew_operations.return.warning.memberDemobilized.tooltip.body') });
        return i === Pf
            ? null
            : f.jsx('div', {
                  className: Zf.base,
                  ...(e === cf && (i === Sf && l === af ? _ : i === kf && 'crewMembersRetired' === l ? h : void 0)),
                  children: f.jsxs('div', {
                      className: b(Zf.inner, Zf[`inner__${i}`]),
                      onClick: function (t) {
                          i !== Sf && (r.play('click', { target: 'vehicle-menu-widget:item', original: t }), n(e));
                      },
                      onMouseEnter: function (e) {
                          i !== Sf && r.play('mouse-enter', { target: 'vehicle-menu-widget:item', original: e });
                      },
                      'data-test-id': e,
                      children: [
                          f.jsx('div', { className: Zf.hover }),
                          f.jsxs('div', {
                              className: Zf.sideBorders,
                              children: [
                                  f.jsx('div', { className: b(Zf.sideBorder, Zf.sideBorder__left) }),
                                  f.jsx('div', { className: b(Zf.sideBorder, Zf.sideBorder__right) }),
                              ],
                          }),
                          f.jsx('div', {
                              className: Zf.icon,
                              children: f.jsx(ke, {
                                  path: `hangar.vehicleMenu.${d}.${e}${i === If && a && e === pf ? `_${Cf[a]}` : i === kf || i === Sf ? '' : `_${i}`}`,
                                  className: Zf.iconImage,
                              }),
                          }),
                          f.jsxs('div', {
                              className: b(Zf.title, p && Zf.title__hasHotkey),
                              children: [
                                  Uf.readOrEmpty(`hangar.vehicleMenu.menuItem.${e}.title`),
                                  c > 0 &&
                                      f.jsx(je, {
                                          path: 'hangar.vehicleMenu.menuItem.counter',
                                          params: { count: Gf.formatNumber('integral', c) },
                                          className: Zf.counter,
                                      }),
                                  p &&
                                      f.jsx(Ft, {
                                          silent: !0,
                                          idle: !0,
                                          keyCode: p,
                                          classNames: {
                                              base: Zf.hotKey,
                                              background: Zf.hotKeyBackground,
                                              border: Zf.hotKeyBorder,
                                              content: Zf.hotKeyContent,
                                          },
                                          children: f.jsx(Ft.Code, {}),
                                      }),
                              ],
                          }),
                          e === cf &&
                              i === kf &&
                              'crewMembersRetired' === l &&
                              f.jsx(ke, { path: 'hangar.vehicleMenu.icon_alert', className: Zf.warningIcon }),
                          i === Sf && f.jsx('div', { className: Zf.disabledOverlay }),
                      ],
                  }),
              });
    }),
    Jf = 'MenuList_border_478c22c4',
    Xf = 'MenuList_bottom_c28a1943',
    Qf = 'MenuList_cea03bfd',
    Yf = 'MenuList_content_102c53c8',
    eb = 'MenuList_checkbox_d5741047',
    tb = 'MenuList_label_8b8f8c2a',
    ab = 'MenuList_checkbox__checked_5a4f974e',
    nb = 'MenuList_checkbox__disabled_5a4f974e',
    sb = 'MenuList_topItem_6a7889e4',
    rb = 'MenuList_autoReturn_841be836',
    ob = 'MenuList_divider_af7e286c',
    ib = 'MenuList_bottomBorder_bad1a96',
    lb = 'MenuList_notch_265b362a',
    cb = C(function ({ buttonState: e, size: t, className: a }) {
        const { model: n, controls: s } = Tf(),
            r = n.opened.get(),
            o = n.screenID.get(),
            i = n.computes.researchItem(),
            l = ee.resolve('strings'),
            c = $e({ body: l.readOrEmpty('crew_operations.return.error.noPrevious') }),
            d = P(r, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: E.stiff });
        if (!o) return;
        const { state: u, stateReason: m } = n.computes.getMenuItem(sf),
            p = u === Pf;
        const _ = e === jf || e === If ? e : 'default',
            h = u === kf;
        return (
            o !== yf &&
            d(
                (e, n) =>
                    n &&
                    f.jsxs(w.div, {
                        className: b(Qf, a),
                        style: e,
                        children: [
                            f.jsxs('div', {
                                className: Yf,
                                children: [
                                    o === xf &&
                                        f.jsxs('div', {
                                            className: sb,
                                            children: [
                                                f.jsx('div', {
                                                    className: rb,
                                                    ...(p && m === af && c),
                                                    children: f.jsx(xa, {
                                                        checked: h,
                                                        disabled: p,
                                                        onCheckedChange: () => s.navigateTo(sf),
                                                        size: ya.small,
                                                        className: b(eb, h && ab, p && nb),
                                                        classNames: { label: tb },
                                                        children: l.readOrEmpty(
                                                            'hangar.vehicleMenu.menuItem.crewAutoReturn.title',
                                                        ),
                                                    }),
                                                }),
                                                f.jsx('div', { className: ob }),
                                            ],
                                        }),
                                    ue(Mf[o], (e) =>
                                        f.jsx(
                                            Kf,
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
                            f.jsx('div', { className: Jf }),
                            f.jsxs('div', {
                                className: Xf,
                                children: [
                                    f.jsx(ke, { path: `hangar.vehicleMenu.menu_bottom_left_${_}`, className: ib }),
                                    f.jsx('div', { className: lb }),
                                    f.jsx(ke, { path: `hangar.vehicleMenu.menu_bottom_right_${_}`, className: ib }),
                                ],
                            }),
                        ],
                    }),
            )
        );
    }),
    db = new Set(['text', 'search', 'url', 'tel', 'email', 'password', 'number']);
const ub = C(function () {
        const e = Bf().model.vehicleMenu,
            t = fe(),
            { model: a, controls: n } = Tf(),
            s = a.opened.get();
        (Qe(s ? 'Escape' : 'NONE', n.close), Qe(s ? 'Space' : 'NONE', n.close));
        for (const [r, o] of Object.entries(e)) {
            const e = ba(o.get()),
                { state: i } = a.computes.getMenuItem(r);
            Qe(i === Sf || i === Pf ? 'NONE' : e, (e) => {
                var a;
                e.shiftKey ||
                    e.altKey ||
                    e.ctrlKey ||
                    (document.activeElement &&
                        !((a = document.activeElement) instanceof HTMLTextAreaElement
                            ? a.disabled || a.readOnly
                            : !(a instanceof HTMLInputElement
                                  ? !a.disabled && !a.readOnly && db.has(a.type)
                                  : a instanceof HTMLElement && a.isContentEditable))) ||
                    (t.play('hot-key', { target: 'wehicle_menu_widget:screen', original: e }),
                    wa.contextMenu.hideAll(),
                    n.navigateTo(r),
                    s && n.close());
            });
        }
        return (
            Ca(() =>
                Yt.down(([e, t]) => {
                    'outside' === t && n.close();
                }),
            ),
            null
        );
    }),
    mb = {
        root: 'VehicleMenuWidget_root_de68ce43',
        base: 'VehicleMenuWidget_80bb906f',
        menu: 'VehicleMenuWidget_menu_54752133',
        menu__vehicle: 'VehicleMenuWidget_menu__vehicle_6691c8cb',
        menu__crew: 'VehicleMenuWidget_menu__crew_9d49d2d3',
        menu__customization: 'VehicleMenuWidget_menu__customization_7cda5bdd',
    },
    pb = { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.KeyBindings('resId')) },
    _b = C(function ({ className: e, keyBindingsProviderOptions: t = pb }) {
        const { model: n, controls: s } = Tf(),
            r = n.screenID.get(),
            o = n.computes.getButtonState,
            i = n.computes.researchItem(),
            { state: l } = n.computes.getMenuItem(sf),
            { state: c } = n.computes.getMenuItem(cf),
            { state: d } = n.computes.getMenuItem(mf),
            { state: u } = n.computes.getMenuItem(gf),
            { state: m } = n.computes.getMenuItem(df),
            { state: p } = n.computes.getMenuItem(of),
            { state: _ } = n.computes.getMenuItem(nf),
            h = Na(
                a.useCallback(() => {
                    s.close();
                }, [s]),
            ),
            g = At({ value: vf }, { large: { value: ff } }),
            v = o(Mf[xf]),
            x = { [bf]: o(Mf[bf]), [xf]: v, [yf]: _ };
        function y(e) {
            if (e === bf) {
                const e = x[bf] === Sf ? '_disable' : '';
                if (x[bf] === jf) return x[bf];
                if (m === If) return `${df}${e}`;
                if (i) return `${Cf[i]}${e}`;
                if (d === If) return `${mf}${e}`;
                if (u === If) return `${gf}${e}`;
            } else if (e === xf) {
                if (p === If) return If;
                if (c === jf || c === If) return 'default';
                if (l === kf && x[xf] !== If) return 'autoReturn';
            }
            return 'default';
        }
        function C(e) {
            e !== yf ? (r === e ? s.close() : s.open(e)) : s.navigateTo(yf);
        }
        return (
            a.useEffect(() => {
                r === xf && v === Sf && s.close();
            }, [r, v, s]),
            f.jsx(Af, {
                options: t,
                children: f.jsxs('div', {
                    ref: h,
                    className: b(mb.base, e),
                    children: [
                        r !== yf &&
                            f.jsx('div', {
                                className: b(mb.menu, r && mb[`menu__${r}`]),
                                children: f.jsx(cb, { buttonState: r ? o(Mf[r]) : kf, size: g.value }),
                            }),
                        Ef.map((e) =>
                            f.jsx(
                                qf,
                                {
                                    type: e,
                                    opened: r === e,
                                    researchItem: i,
                                    buttonState: x[e],
                                    crewBackWarning: p !== If && (c === jf || c === If),
                                    iconPostfix: y(e),
                                    size: g.value,
                                    onClick: C,
                                },
                                e,
                            ),
                        ),
                        f.jsx(ub, {}),
                    ],
                }),
            })
        );
    }),
    hb = 'VehicleMenu_menu_2b35ec',
    gb = 'VehicleMenu_menu__screenMode_bf623a9b',
    vb = { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.VehicleMenu('resId')) };
function fb({ className: e, screenModeEnabled: t }) {
    return f.jsx(Df, {
        options: vb,
        children: f.jsx('div', { className: b(hb, t && gb, e), children: f.jsx(_b, {}) }),
    });
}
const bb = 'HeroTankMarker_7a1c486d',
    xb = 'HeroTankMarker_base__visible_d8b5c003',
    yb = 'HeroTankMarker_vehicleName_a789e6e5',
    Cb = 'HeroTankMarker_vehicleType_d8b5c003',
    wb = Pe('HeroTankInfo'),
    Nb = C(
        a.forwardRef(function (e, t) {
            const { model: n } = Nn(),
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
                f.jsxs(wb, {
                    ...e,
                    ref: Ia([t, o]),
                    className: b(bb, i && xb),
                    children: [
                        f.jsx('div', { className: yb, children: n.name.get() }),
                        f.jsx('div', {
                            className: Cb,
                            children: r && f.jsx(ke, { path: `vehicleTypes.gold.${lt(r)}`, width: 32, height: 32 }),
                        }),
                    ],
                })
            );
        }),
    ),
    Ib = 'disabled',
    jb = 'enabled',
    kb = 'modeSelector',
    Sb = 'shop',
    Pb = 'storage',
    Eb = 'missions',
    Mb = 'personalMissions',
    Lb = 'achievements',
    Db = 'techtree',
    Tb = 'tournament',
    Ab = 'barracks',
    Bb = 'clans',
    Vb = Tb,
    Ob = Bb,
    Rb = Mb,
    zb = kb,
    $b = Lb,
    Hb = {
        [Sb]: 'shop',
        [Pb]: 'storage',
        [Db]: 'techtree',
        [Ab]: 'barracks',
        [Vb]: 'tournament',
        [Ob]: 'clans',
        ['clan']: 'clan',
        [Eb]: 'missions',
        [Rb]: 'personalMissions',
        [zb]: 'modeSelector',
        [$b]: 'profile',
        ['replays']: 'replays',
    },
    Fb = (e) =>
        a.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    Wb = {
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
    qb = 'forts',
    Zb = ee.resolve('intl'),
    Ub = ee.resolve('strings'),
    Gb = {
        [zb]: 'tooltips.header.battleType',
        [Vb]: 'tooltips.header.buttons.tournaments',
        [$b]: 'tooltips.header.buttons.profile',
    },
    Kb = {
        [Ob]: 'tooltips.header.buttons.clans.turnedOff',
        [Rb]: 'tooltips.header.buttons.personalMissionsDisabled',
        [qb]: 'tooltips.header.buttons.forts.turnedOff',
    };
function Jb(e) {
    return Zb.toUpperCase(
        Ub.readOrEmpty(`menu.headerButtons.${Hb[e]}`) || Ub.readOrEmpty(`menu.headerButtons.${e}`) || `{${e}}`,
    );
}
function Xb({
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
        d = e === Ob && o,
        u = $e(
            a.useMemo(
                () =>
                    (function (e, t) {
                        const a = ((t && Kb[e]) || Gb[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: Ub.readOrEmpty(`${a}.header`), body: Ub.readOrEmpty(`${a}.body`) };
                    })(d ? qb : e, t === Ib),
                [e, t, d],
            ),
        ),
        m = He('techtreeDiscount'),
        p = r && 'techtree' === e ? m : u;
    return f.jsx('div', {
        ...p,
        className: b(Wb.base, Wb[`base__${t}State`], Wb[`base__${e}Name`]),
        'data-test-id': e,
        onMouseEnter: function (e) {
            (p.onMouseEnter(e),
                t !== Ib && c.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (a) {
            (p.onClick(), t !== Ib && (i(e), c.play('click', { target: 'main-menu-widget:menu-item', original: a })));
        },
        children: (() => {
            switch (e) {
                case zb:
                    return f.jsxs(f.Fragment, {
                        children: [
                            f.jsxs('div', {
                                className: Wb.modeSelector,
                                children: [
                                    f.jsx('div', { className: Wb.label, children: Jb(e) }),
                                    n && f.jsx('div', { className: Wb.modeName, children: Zb.toUpperCase(n) }),
                                    f.jsx('div', {
                                        className: Wb.modeIcon,
                                        style: { backgroundImage: `url(${l}.battleTypes.c_64x64.${s})` },
                                    }),
                                ],
                            }),
                            f.jsx(Fb, { className: Wb.arrow }),
                        ],
                    });
                case Ob:
                    return f.jsxs('div', {
                        className: Wb.titleWrapper,
                        children: [
                            o && f.jsx('div', { style: { backgroundImage: `url(${o})` }, className: Wb.clanEmblem }),
                            f.jsx('div', { className: Wb.title, children: Jb(d ? 'clan' : e) }),
                        ],
                    });
                default:
                    return f.jsx('div', {
                        className: Wb.titleWrapper,
                        children: f.jsx('div', { className: Wb.title, children: Jb(e) }),
                    });
            }
        })(),
    });
}
const Qb = 'MainMenu_222da7b7',
    Yb = C(function ({ className: e, battleTypesPath: t }) {
        const { model: n, controls: s } = jn(),
            r = n.menuItems.get(),
            o = n.modeName.get(),
            i = n.modeId.get(),
            l = n.hasTechTreeEvents.get(),
            c = n.clanEmblem.get();
        return f.jsx('div', {
            className: b(Qb, e),
            children: ue(r, (e) =>
                a.createElement(Xb, {
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
    ex = {
        getter: ja({
            menuItems: [
                { name: kb, state: jb },
                { name: Sb, state: jb },
                { name: Pb, state: jb },
                { name: Eb, state: jb },
                { name: Mb, state: jb },
                { name: Lb, state: jb },
                { name: Db, state: jb },
                { name: Ab, state: Ib },
                { name: Tb, state: jb },
                { name: Bb, state: jb },
            ],
            modeName: 'Random Battle',
        }),
        controls: () => ce(ka('navigateTo')),
    };
function tx({ className: e, battleTypesPath: t, ...a }) {
    return f.jsx(In, { mode: 'real', mocks: ex, ...a, children: f.jsx(Yb, { className: e, battleTypesPath: t }) });
}
function ax({ className: e }) {
    const { controls: t } = Sn();
    return f.jsx('div', {
        className: e,
        children: f.jsx(Sa, {
            moveSpace: t.sceneWrapper.onMoveSpace,
            onMouseOver3dScene: t.sceneWrapper.onMouseOver3dScene,
        }),
    });
}
const nx = 'VehicleInfoWidget_b24b193a',
    sx = 'VehicleInfoWidget_info_8571b16b',
    rx = 'VehicleInfoWidget_info__active_e94ce8a',
    ox = 'VehicleInfoWidget_text_ff05c9a6',
    ix = 'VehicleInfoWidget_role_462e1204',
    lx = 'VehicleInfoWidget_currency_9c6f2463',
    cx = 'VehicleInfoWidget_currencyIcon_59fc1b6d',
    dx = C(function () {
        const e = Ts().model.selectedVehicle(),
            t = Ts().model.selectedVehicleStatistics(),
            { breakpoint: n } = oa(),
            s =
                ((r = null == e ? void 0 : e.vehicleId),
                Pa(
                    'vehicleRoles',
                    a.useMemo(() => [r], [r]),
                ));
        var r;
        if (e && t)
            return f.jsxs('div', {
                className: nx,
                children: [
                    f.jsxs(Me, {
                        ...(1 === e.role && s),
                        className: b(sx, 1 === e.role && rx),
                        children: [
                            f.jsx(Me.Level, { className: ox, value: e.level }),
                            Le(e.type) &&
                                f.jsx(Me.Type, {
                                    type: e.type,
                                    premium: t.elite,
                                    size: n.weight <= Ea.large.weight ? Me.Type.sizes.x48x48 : Me.Type.sizes.x64x64,
                                }),
                            f.jsx(Me.Name, { className: ox, children: e.shortName }),
                            0 !== e.role &&
                                1 !== e.role &&
                                f.jsx(Me.Role, {
                                    ...s,
                                    classNames: { base: ix },
                                    roleKey: J(e.role),
                                    size: Me.Role.sizes.x16x16,
                                }),
                        ],
                    }),
                    f.jsx(Re, {
                        classNames: { base: lx, icon: cx },
                        type: t.elite ? Ma.eliteXp : Ma.tankXP,
                        reverse: !0,
                        size: Ve.extraSmall,
                        children: t.xp,
                    }),
                ],
            });
    }),
    ux = 'Message_e6fd2857',
    mx = 'Message_background_a273fbc3',
    px = 'Message_icon_448c0fc0',
    _x = 'Message_text_3c3ea029',
    hx = j(function () {
        return f.jsxs('div', {
            className: ux,
            children: [
                f.jsx('div', { className: mx }),
                f.jsx('div', { className: px }),
                f.jsx('div', { className: _x, children: R.strings.fun_random.alertMessage.unsuitableVehicles() }),
            ],
        });
    }),
    gx = {
        root: 'ModifierDomainIcon_root_51614357',
        base: 'ModifierDomainIcon_209db6a8',
        image: 'ModifierDomainIcon_image_eee68fdd',
        iconOut: 'ModifierDomainIcon_iconOut_51614357',
        iconHover: 'ModifierDomainIcon_iconHover_51614357',
        image__big: 'ModifierDomainIcon_image__big_42457fa',
        image__large: 'ModifierDomainIcon_image__large_43511027',
    };
var vx = ((e) => ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), e))(vx || {});
const fx = { small: '40x40', big: '64x64', large: '80x80' },
    bx = ee.resolve('aliases').read((e) => e.battle_modifiers.shared.Modifiers('resId')),
    xx = (e, t) => {
        const a = fx[t];
        return {
            backgroundImage: `url(${R.images.battle_modifiers.gui.maps.icons.feature.domains.$dyn(`c_${a}`).$dyn(e)})`,
        };
    },
    yx = ({ modifiersDomain: e, subModeId: t, className: a, size: n = 'small' }) => {
        const s = t ? { modifiersDomain: e, subModeId: t } : { modifiersDomain: e };
        return f.jsx('div', {
            className: gx.base,
            children: f.jsx(La, {
                targetId: bx,
                contentId: R.views.battle_modifiers.lobby.tooltips.ModifiersDomainTooltipView('resId'),
                args: s,
                children: f.jsx('div', { className: M(gx.image, gx[`image__${n}`], a), style: xx(e, n) }),
            }),
        });
    },
    [Cx, wx] = B()(({ observableModel: e }) => ({ modifiersDomains: e.array('modifiersDomains') }), V),
    Nx = 'HangarWidget_1a7c6ab5',
    Ix = 'HangarWidget_base__placeholder_406c8c50',
    jx = 'HangarWidget_glow_46562846',
    kx = 'HangarWidget_modifiers_3d3d06d',
    Sx = 'HangarWidget_modifier_f9f471fd',
    Px = j(() => {
        const { model: e } = wx(),
            t = e.modifiersDomains.get();
        return f.jsx('div', {
            className: b(Nx, 0 === t.length && Ix),
            children:
                t.length > 0 &&
                f.jsxs(f.Fragment, {
                    children: [
                        f.jsx('div', { className: jx }),
                        f.jsx('div', {
                            className: kx,
                            children: ue(t, (e, t) =>
                                f.jsx(
                                    'div',
                                    { className: Sx, children: f.jsx(yx, { modifiersDomain: e, size: vx.big }) },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
        });
    });
function Ex() {
    const { screenWidthRem: e } = oa();
    return e < Ea.large.width;
}
const Mx = v.createContext(void 0);
function Lx() {
    const e = a.useContext(Mx);
    return (ne(void 0 !== e, 'WidgetAnimationContext is undefined'), e);
}
const Dx = 'small',
    Tx = 'big',
    Ax = { full: 'full', medium: 'medium', small: 'small' },
    Bx = 'appear',
    Vx = 'fadeIn',
    Ox = 'slideUpIn',
    Rx = { y: 0, x: 0, opacity: 0, height: 0, width: 0 },
    zx = 1;
function $x(e) {
    const t = new Map();
    for (let a = 0; a <= e.length; a++) {
        const n = e[a];
        t.set(n, { rowIndex: a, columnIndex: 0, size: Ax.full });
    }
    return t;
}
function Hx(e) {
    return -(Math.cos(Math.PI * e) - 1) / 2;
}
const Fx = { duration: 400, easing: Hx },
    Wx = 5,
    qx = 6,
    Zx = 7,
    Ux = 900,
    Gx = 1016;
const Kx = 100;
function Jx(e, t, a, n = !0) {
    const s = a.getCardAnimationProps(e),
        r = a.getCardRow(e),
        o = a.getMaxCardRow(t),
        i = a.getVisibleRowsAmount(),
        l = n ? Fx.duration : 0,
        c = t.includes(e);
    return {
        from: c ? { ...s, opacity: 0 } : {},
        to: s,
        delay: c ? l + Math.max((i - o) * Kx, 0) : Math.max((i - o - r) * Kx, 0),
        config: Fx,
    };
}
function Xx(e) {
    return { to: { x: Ae(Da(e) + 100), opacity: 0 }, config: { duration: 700, easing: Hx } };
}
function Qx(e, t, a) {
    const n = e.dataset.id,
        s = t.getCard(n),
        r = t.getCardHeight(n);
    if (!s || !r) return '';
    const o = Da(s.getPropValue('opacity')),
        i = Da(s.getPropValue('height'));
    if (i < r || 0 === o) return '';
    const l = Da(s.getPropValue('width')),
        c = Da(s.getPropValue('y')),
        d = Da(s.getPropValue('x')),
        u = t.getCardSize(n) !== Ax.full,
        m = Math.round(d),
        p = Math.round(d + l) - zx,
        _ = Math.round(c),
        h = { top: `H${m}x${_}`, bottom: `H${m}x${Math.round(c + i) - zx}`, left: `V${_}x${m}`, right: `V${_}x${p}` },
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
const Yx = { [Dx]: { gap: 0, cardHeight: 74, cardWidth: 241 }, [Tx]: { gap: 0, cardHeight: 74, cardWidth: 319 } },
    ey = { [Ax.full]: 1, [Ax.medium]: 0.5, [Ax.small]: 1 / 3 };
function ty(e, t) {
    return { ...Yx[e], ...(null == t ? void 0 : t[e]) };
}
function ay(e) {
    return Array.from(e.entries()).sort((e, t) => e[1].position - t[1].position);
}
class ny {
    constructor(e) {
        (t(this, '_sortedGroups'),
            t(this, '_cards', new Map()),
            t(this, '_cachedLayout'),
            (this._widgetConfig = e),
            (this._sortedGroups = ay(this._widgetConfig.groups)));
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
        ((e.sortedCards = ay(this._cards)),
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
                } = ty(this._widgetConfig.size, s.adaptive);
                a > 0 && o && (a += Ae(o));
                const d = Ae(i),
                    u = r.filter((e) => {
                        var t;
                        return null == (t = this._cards.get(e)) ? void 0 : t.visible;
                    }),
                    m = (s.layoutCreator || $x)(u);
                let p = 0;
                for (const _ of r) {
                    const t = m.get(_);
                    if (!t) {
                        e.animationProps.set(_, Rx);
                        continue;
                    }
                    const { rowIndex: s, columnIndex: r, size: o } = t,
                        i = Math.ceil(l * ey[o]),
                        u = s + 1,
                        h = n + u,
                        g = void 0 === c || u <= c;
                    (e.cardToRow.set(_, h),
                        e.cardSizes.set(_, o),
                        e.animationProps.set(_, {
                            height: d,
                            width: Ae(i),
                            opacity: g && this._widgetConfig.visibleRowsAmount >= h ? 1 : 0,
                            x: Ae(r * (i - zx)),
                            y: a + s * (d - zx),
                        }),
                        g && (p = Math.max(u, p)));
                }
                ((a += (d - zx) * p), (n += p), e.rowsAmountByGroup.set(t, p));
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
            void 0 !== e.groups && (this._sortedGroups = ay(this._widgetConfig.groups)),
            this.clearCachedLayout());
    }
    getCard(e) {
        return this._cards.get(e);
    }
    getCardAnimationProps(e) {
        return this._layout.animationProps.get(e) || Rx;
    }
    getCardRow(e) {
        return this._layout.cardToRow.get(e) || 0;
    }
    getCardSize(e) {
        return this._layout.cardSizes.get(e) || Ax.full;
    }
    getCardHeight(e) {
        var t;
        const a = null == (t = this.getCard(e)) ? void 0 : t.groupId;
        if (!a) return;
        const n = this._widgetConfig.groups.get(a);
        return ty(this._widgetConfig.size, null == n ? void 0 : n.adaptive).cardHeight;
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
                const { maxRowsAmount: e } = ty(this._widgetConfig.size, t.adaptive),
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
const sy = 'Card_82475c',
    ry = 'Card_borderHelper_9f37b536',
    oy = 'Card_border_a649c143',
    iy = 'Card_card__enabled_4c476d8b',
    ly = {
        [Bx]: function (e, t, a) {
            const n = Jx(e, t, a, !1);
            return { ...n, from: t.includes(e) ? { ...n.from, height: 0 } : n.from };
        },
        [Vx]: Jx,
        [Ox]: function (e, t, a) {
            const n = Jx(e, t, a, !1);
            if (t.includes(e)) {
                const t = a.getCardAnimationProps(e).y + Ae(a.getCardHeight(e));
                return { ...n, from: { ...n.from, y: t } };
            }
            return n;
        },
    };
function cy({ children: e, groups: t, maxVisibleRowsAmount: n }) {
    const s = Ex() ? Dx : Tx,
        { screenHeightRem: r } = oa(),
        o =
            n ??
            (function (e) {
                return e > Ux ? (e > Gx ? Zx : qx) : Wx;
            })(r),
        { enqueue: i, runDequeue: l } = (function () {
            const e = a.useRef([]),
                t = a.useRef(!1),
                n = a.useRef(!1),
                s = ca(() => {
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
                enqueue: ca(
                    (t) =>
                        new Promise((a, n) => {
                            (e.current.push({ promise: t, resolve: a, reject: n }), s());
                        }),
                ),
                runDequeue: ca(() => {
                    ((n.current = !0), s());
                }),
            };
        })(),
        c = a.useRef(null),
        d = a.useRef(!1),
        u = a.useRef(new ny({ size: s, visibleRowsAmount: o, groups: t })),
        m = ca((e) => {
            var t;
            const a = null == (t = c.current) ? void 0 : t.querySelectorAll(`.${ry}`);
            a &&
                (function (e, t, a) {
                    const n = new Set();
                    a && (a.style.borderImageWidth = Qx(a, t, n));
                    for (let s = e.length - 1; s >= 0; s--) {
                        const r = e[s];
                        r !== a && (r.style.borderImageWidth = Qx(r, t, n));
                    }
                })(a, u.current, e);
        }),
        p = ca(async (e) => {
            (m(),
                await u.current.runCardAnimations((t, a) => {
                    const n = e({ id: t, settings: a });
                    if (void 0 !== n) return { ...n, onChange: () => m() };
                }),
                m());
        }),
        _ = ca(async (e = !0) => {
            let t = 0,
                a = 0;
            await p(({ id: n, settings: s }) => {
                const r = u.current.getCardAnimationProps(n),
                    o = r.y,
                    i = s.getPropGoalValue('y');
                let l = 0;
                return (
                    i !== o && (0 === s.getPropGoalValue('x') && (i > o ? t++ : a++), (l = i > o ? t : a)),
                    { delay: e ? 0 : l * Kx, to: r, immediate: e, config: Fx }
                );
            });
        }),
        h = ca(async (e, t = Bx) => {
            const a = e.filter((e) => {
                const t = u.current.getCard(e);
                return void 0 !== t && !t.visible;
            });
            if (!a.length) return;
            a.forEach((e) => {
                u.current.updateCard(e, { visible: !0 });
            });
            const n = ly[t];
            await p((e) => n(e.id, a, u.current));
        }),
        g = ca((e, t = !0) => {
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
                            if (e === t.id) return Xx(t.settings.getPropGoalValue('x'));
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
                                return { ...Xx(e.settings.getPropGoalValue('x')), delay: Kx * (t.length - a) };
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
                Ta(() => {
                    (u.current.clearCachedLayout(), _());
                }),
            [_],
        ),
        f.jsx(Mx.Provider, { value: v, children: f.jsx('div', { ref: c, children: e }) })
    );
}
const dy = Object.values({
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
    }).reduce((e, t) => ({ ...e, [t]: ga(t) }), {}),
    uy = a.createContext(null);
function my(e, t, a = e) {
    return e + '+' + t + '+' + a;
}
function py(e, t, ...a) {
    let n = e.current;
    if (0 == a.length) return !1;
    for (let s = 0; s < a.length - 1; s++) {
        const e = a[s];
        ((n[e] = n[e] ?? {}), (n = n[e]));
    }
    return ((n[a[a.length - 1]] = t), !0);
}
function _y(e, ...t) {
    const a = (e, n) => {
        if (n === t.length) return Aa(e);
        const s = t[n];
        return s in e && ((n === t.length - 1 || a(e[s], n + 1)) && delete e[s], Aa(e));
    };
    return a(e.current, 0);
}
function hy(e, ...t) {
    let a = e.current;
    return t.reduce((e, t) => (null == e ? void 0 : e[t]), a);
}
function gy(e, ...t) {
    let a = e.current;
    return void 0 !== t.reduce((e, t) => (null == e ? void 0 : e[t]), a);
}
function vy(e, t, a, n) {
    Object.entries(t).forEach(([t, s]) => {
        Aa(s)
            ? gy(a, e, t, e) && n(t, e)
            : Object.entries(s).forEach(([s, r]) => {
                  const o = s || e;
                  gy(a, e, t, o) && n(t, o, r);
              });
    });
}
function fy({ storage: e, id: t, emitter: a, providerCfg: n }) {
    gy(e, t) || by({ id: t, emitter: a, providerCfg: n });
}
function by({ id: e, emitter: t, providerCfg: a }) {
    var n;
    const s = (null == a ? void 0 : a.triggerId) || e;
    (t.trigger(s, { id: e, ...(null == a ? void 0 : a.triggerParams) }),
        null == (n = null == a ? void 0 : a.triggerCallback) ||
            n.call(a, { id: e, ...(null == a ? void 0 : a.triggerParams) }));
}
function xy({ sound: e, soundCfg: t }) {
    e && t && ('string' == typeof t ? e.play(t) : e.play(t.eventName, null == t ? void 0 : t.event));
}
function yy({ children: e }) {
    const t = Ba(),
        n = a.useRef({}),
        s = a.useRef({}),
        r = a.useRef({}),
        o = Va(),
        i = ca(({ id: e, animName: t, elementId: a = e }) => gy(n, e, t, a)),
        l = ca((e, t, a = e) => {
            _y(n, e, t, a);
        }),
        c = ca(({ id: e, animName: t, config: a, elementId: s = e }) => (py(n, a, e, t, s), () => l(e, t, s))),
        d = ca(({ id: e, animName: t, elementId: a = e, animCallParams: s, providerCfg: r, soundCfg: i }) => {
            const l = hy(n, e, t, a);
            (l &&
                ((null == r ? void 0 : r.skip)
                    ? l.skip({ ...s, ...(null == r ? void 0 : r.animCallParams) })
                    : l.start({ ...s, ...(null == r ? void 0 : r.animCallParams) })),
                xy({ sound: o, soundCfg: i }));
        }),
        u = ca(({ id: e, animName: a, elementId: n = e, providerCfg: r = {} }) => {
            const o = t.on(my(e, a, n), () => {
                (_y(s, e, a, n), fy({ storage: s, id: e, emitter: t, providerCfg: r }), o());
            });
            py(s, !0, e, a, n);
        }),
        m = ca(({ complexId: e, id: a, animName: n, elementId: s = a, providerCfg: o }) => {
            const i = t.on(my(a, n, s), () => {
                    (!(function ({
                        storage: e,
                        complexId: t,
                        groupId: a,
                        animName: n,
                        elementId: s,
                        emitter: r,
                        providerCfg: o,
                    }) {
                        let i = hy(e, t, a, n);
                        i &&
                            (i.delete(s),
                            i.size || _y(e, t, a, n),
                            fy({ storage: e, id: t, emitter: r, providerCfg: o }));
                    })({ storage: r, complexId: e, groupId: a, animName: n, elementId: s, emitter: t, providerCfg: o }),
                        i());
                }),
                l = hy(r, e, a, n);
            l ? l.add(s) : py(r, new Set().add(s), e, a, n);
        }),
        p = ca(({ groupId: e, groupCfg: a, providerCfg: r, soundCfg: i }) => {
            (_y(s, e),
                (null == r ? void 0 : r.skip) ||
                    (null == r ? void 0 : r.skipTrigger) ||
                    vy(e, a, n, (t, a) => {
                        u({ id: e, animName: t, elementId: a, providerCfg: r });
                    }),
                vy(e, a, n, (t, a, n) => {
                    d({ id: e, animName: t, elementId: a, animCallParams: n, providerCfg: r });
                }),
                xy({ sound: o, soundCfg: i }),
                (null == r ? void 0 : r.skip) &&
                    !(null == r ? void 0 : r.skipTrigger) &&
                    by({ id: e, emitter: t, providerCfg: r }));
        }),
        _ = ca(({ complexId: e, complexCfg: a, providerCfg: s, soundCfg: i }) => {
            if ((_y(r, e), !(null == s ? void 0 : s.skip) && !(null == s ? void 0 : s.skipTrigger)))
                for (let [t, r] of Object.entries(a))
                    vy(t, r, n, (a, n) => {
                        m({ complexId: e, id: t, animName: a, elementId: n, providerCfg: s });
                    });
            for (let [t, r] of Object.entries(a))
                vy(t, r, n, (e, a, n) => {
                    d({ id: t, animName: e, elementId: a, animCallParams: n, providerCfg: s });
                });
            (xy({ sound: o, soundCfg: i }),
                (null == s ? void 0 : s.skip) &&
                    !(null == s ? void 0 : s.skipTrigger) &&
                    by({ id: e, emitter: t, providerCfg: s }));
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
    return f.jsx(uy.Provider, { value: h, children: e });
}
const Cy = 'entryPoint',
    wy = new Map([
        ['battlePass', { position: 0 }],
        [Cy, { position: 1, adaptive: { [Dx]: { gap: 46 }, [Tx]: { gap: 46 } } }],
        ['battleQuests', { position: 2, adaptive: { [Dx]: { maxRowsAmount: 1 }, [Tx]: { maxRowsAmount: 3 } } }],
        [
            'missions',
            {
                position: 200,
                maxRowsAmount: 3,
                adaptive: { [Dx]: { gap: 36, maxRowsAmount: 1 }, [Tx]: { gap: 36, maxRowsAmount: 3 } },
            },
        ],
    ]);
const [Ny, Iy] = B()(
        ({ observableModel: e }) => ({
            ...e.primitives(['isBattlePassActive', 'isAnyEntryPointAvailable', 'areMissionsActive']),
        }),
        ({ externalModel: e }) => ({
            onPresenterDisappear: e.createCallback((e) => ({ resId: e }), 'onPresenterDisappear'),
        }),
    ),
    [jy, ky] = B()(
        ({ observableModel: e }) => ({
            progressionState: e.object('progressionState'),
            currentProgressionStage: e.object('currentProgressionStage'),
        }),
        ({ externalModel: e }) => ({ openProgression: e.createCallbackNoArgs('onShowInfo') }),
    );
var Sy = ((e) => (
    (e.CheckDataUpdate = 'checkDataUpdate'),
    (e.UpdateStageData = 'updateStageData'),
    (e.SwitchState = 'switchState'),
    e
))(Sy || {});
const Py = [Cn.ACTIVE_RESETTABLE, Cn.ACTIVE_FINAL],
    Ey = [Cn.ACTIVE_INFINITE_RESETTABLE, Cn.ACTIVE_INFINITE_FINAL],
    My = (e) => Py.includes(e) || Ey.includes(e),
    Ly = (e) => My(e.status),
    Dy = (e) => !My(e.status),
    Ty = (e, t) => 'checkDataUpdate' === t.type && e.status !== t.status && Vy(e, t),
    Ay = (e, t) => 'checkDataUpdate' === t.type && Py.includes(e.status) && Ey.includes(t.status),
    By = (e, t) => 'checkDataUpdate' === t.type && (!e.crossProgressionEnabled || Ey.includes(e.status)),
    Vy = (e, t) =>
        'checkDataUpdate' === t.type &&
        t.stage === e.stage &&
        t.currentPoints === e.currentPoints &&
        t.maximumPoints === e.maximumPoints &&
        0 === e.earnedPoints,
    Oy = (e, t) =>
        'checkDataUpdate' === t.type &&
        My(t.status) &&
        ((1 === t.stage && 0 === t.currentPoints) ||
            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints) ||
            (Ay(e, t) && t.stage !== e.stage && e.currentPoints === e.maximumPoints)),
    Ry = (e, t) =>
        'checkDataUpdate' === t.type &&
        t.stage === e.stage &&
        t.currentPoints === e.currentPoints &&
        t.maximumPoints === e.maximumPoints &&
        0 !== e.earnedPoints,
    zy = (e, t) =>
        'checkDataUpdate' === t.type &&
        (t.stage === e.stage || e.crossProgressionEnabled) &&
        t.currentPoints !== e.currentPoints &&
        t.maximumPoints === e.maximumPoints,
    $y = (e, t) =>
        'checkDataUpdate' === t.type &&
        (Ay(e, t) || (By(e, t) && t.stage > e.stage && e.currentPoints < e.maximumPoints)),
    Hy = (e, t) => 'checkDataUpdate' === t.type && By(e, t) && t.stage > e.stage && e.currentPoints === e.maximumPoints,
    Fy = (e, t) => 'checkDataUpdate' === t.type && t.stage < e.stage && e.currentPoints > 0,
    Wy = (e, t) => 'updateStageData' === t.type && t.stage < e.stage && 0 === e.currentPoints,
    qy = (e, t) => 'checkDataUpdate' === t.type && e.status !== t.status && My(t.status),
    Zy = (e, t) => {
        'updateStageData' === t.type && e.isSoundEnabled && 0 !== e.earnedPoints && Oa.sound('ev_fep_progress_bar');
    },
    Uy = a.forwardRef(function (
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
        const m = Lx(),
            [p, _] = N(() => Rx),
            h = a.useRef(null),
            g = a.useRef(),
            v = a.useRef(null),
            x = ca((e) => {
                v.current && h.current && !r && m.updateBorders(e ? v.current : void 0);
            }),
            y = ca((e) => p[e].get()),
            C = ca((e) => p[e].goal),
            I = ca(async (e) => {
                await new Promise((t) => {
                    ((g.current = t),
                        Promise.all(_.start(e)).then(() => {
                            (t(), (g.current = void 0));
                        }));
                });
            });
        return (
            Ca(() => {
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
                className: b(sy, !r && iy, i),
                ref: Ia([u, h]),
                onMouseEnter: (e) => {
                    (x(!0), null == l || l(e));
                },
                onMouseLeave: (e) => {
                    (x(!1), null == c || c(e));
                },
                children: [f.jsx('div', { className: oy }), e, f.jsx('div', { className: ry, 'data-id': t, ref: v })],
            })
        );
    }),
    Gy = {
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
function Ky({ assetsPointer: e }) {
    const { dynamicTexts: t } = bn(null, { assetsPointer: e });
    return f.jsxs('div', {
        className: Gy.finish,
        children: [
            f.jsx('div', { className: Gy.completedIcon }),
            f.jsx(Ra, {
                className: b(Gy.descriptionText, Gy.descriptionText__finish),
                text: t.banner.progression.finish(),
            }),
        ],
    });
}
function Jy({
    currentPoints: e,
    maximumPoints: t,
    earnedPoints: n,
    currentStage: s,
    status: r,
    handleEndAnimation: o,
}) {
    const i = r === Cn.ACTIVE_INFINITE_RESETTABLE || r === Cn.ACTIVE_INFINITE_FINAL,
        l = i ? s : e,
        c = i ? '' : t,
        d = i ? 'Infinite' : '',
        u = a.useMemo(
            () => ({ config: { duration: 1600, easing: za.easeInCubic }, delay: 80, onRest: () => o() }),
            [o],
        );
    return f.jsxs('div', {
        className: Gy.progress,
        children: [
            f.jsx(Ra, {
                className: Gy.progressValue,
                text: R.strings.fun_random.banner.progression.steps(),
                upgradeLegacy: !0,
                params: {
                    done: f.jsx('span', { className: Gy.progressStepValue__done, children: l }),
                    total: f.jsx('span', { className: Gy[`progressStepValue__max${d}`], children: c }),
                },
            }),
            f.jsxs($a, {
                size: 'small',
                className: Gy.progressBar,
                classNames: {
                    background: Gy.progressBarBackground,
                    backgroundPattern: Gy.progressBarBackgroundPattern,
                },
                filledClassNames: { pattern: Gy.progressBarBackgroundPattern },
                value: e,
                maxValue: t,
                children: [
                    f.jsx('div', { className: Gy.progressBarFillStart }),
                    f.jsx(Ha, {
                        animationEnabled: !0,
                        initValue: e - n,
                        initMaxValue: t,
                        animationProps: u,
                        className: Gy.delta,
                    }),
                ],
            }),
        ],
    });
}
function Xy({ timeLeft: e, assetsPointer: t }) {
    const { dynamicTexts: a } = bn(null, { assetsPointer: t });
    return f.jsxs('div', {
        className: Gy.resettable,
        children: [
            f.jsx(Ra, {
                className: b(Gy.descriptionText, Gy.descriptionText__resettable),
                text: a.banner.progression.resettable(),
            }),
            f.jsx(Fa, { start: e, format: Fa.format.default, type: Fa.type.accent }),
        ],
    });
}
const Qy = ee.resolve('aliases'),
    Yy = ee.resolve('views'),
    eC = Qy.read((e) => e.fun_random.shared.ProgressionEntryPoint('resId')),
    tC = Yy.read((e) => e.fun_random.mono.lobby.tooltips.progression_tooltip('resId')),
    aC = j(() => {
        var e;
        const { model: t, controls: n } = ky(),
            { status: s, currentStage: r, statusTimer: o } = t.progressionState.get(),
            { currentPoints: i, maximumPoints: l } = t.currentProgressionStage.get(),
            c = fm().model.assetsPointer.get(),
            d = Ex(),
            { play: u } = fe(),
            [m, p] = a.useState(s),
            _ = (e) => p(e);
        a.useEffect(() => {
            s !== m && My(s) && p(s);
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
                                        { target: 'active', cond: Ly },
                                        { target: 'nonActive', cond: Dy },
                                    ],
                                },
                                active: {
                                    on: {
                                        checkDataUpdate: [
                                            {
                                                target: 'active',
                                                actions: [D((e, t) => ({ type: 'switchState', status: t.status }))],
                                                cond: Ty,
                                            },
                                            { target: 'active', cond: Vy },
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
                                                cond: Oy,
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
                                                cond: $y,
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
                                                cond: Hy,
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
                                                cond: zy,
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
                                                cond: Ry,
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
                                                cond: Fy,
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
                                                cond: Wy,
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
                                                Zy,
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
                                            cond: qy,
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
                                hasActiveStatus: Ly,
                                hasNonActiveStatus: Dy,
                                isSwitchToInfinite: Ay,
                                isStatusUpdate: Ty,
                                isTaskSwitchingUpdate: Oy,
                                isNoUpdate: Vy,
                                isUpdateCurrentStageWithZeroEarnPoints: Ry,
                                isUpdateCurrentStageWithCurrentPoints: zy,
                                isUpdateToNextStageWithoutFillMax: Hy,
                                isUpdateToNextStageWithFillMax: $y,
                                isUpdateToPrevStageWithReset: Fy,
                                isUpdateToPrevStageWithoutReset: Wy,
                                isUpdateWithActiveSwitch: qy,
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
                    r = ht(),
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
                                        (n.current.positionY = Math.floor(Da(a.y)) - 13),
                                        (n.current.positionX = Math.floor(Da((null == r ? void 0 : r.x) || a.x)) - 10));
                                }
                                o.onMouseEnter(a);
                            }, t);
                        },
                        onMouseLeave: () => {
                            (r.clear(), o.onMouseLeave());
                        },
                    },
                };
            })({ resId: eC, contentId: tC, disabled: g.context.status === Cn.DISABLED });
        a.useEffect(() => {
            v({ type: Sy.CheckDataUpdate, status: s, stage: r, currentPoints: i, maximumPoints: l });
        }, [s, i, l, r, v]);
        const C = a.useCallback(() => {
                v({ type: Sy.CheckDataUpdate, status: s, stage: r, currentPoints: i, maximumPoints: l });
            }, [i, l, r, s, v]),
            w = g.context.status === Cn.COMPLETED_FINAL;
        return f.jsxs(Uy, {
            ...y,
            position: 0,
            id: 'entryPoint',
            groupId: Cy,
            className: b(Gy.base, Gy[`base__${m}`]),
            ref: x,
            onClick: () => {
                (u('click'), n.openProgression());
            },
            onMouseEnter: () => {
                (u('mouse-enter'), y.onMouseEnter());
            },
            onMouseLeave: y.onMouseLeave,
            visible: !0,
            children: [
                f.jsx('div', {
                    className: Gy.background,
                    style: {
                        backgroundImage: `url('${null == (e = xn(c)) ? void 0 : e.progression.banner.$dyn(d ? 'bg_small' : 'bg_big')}')`,
                    },
                }),
                !w && f.jsx('div', { className: Gy.icon }),
                f.jsxs('div', {
                    className: Gy.contentWrapper,
                    children: [
                        My(g.context.status) &&
                            f.jsx('div', {
                                className: Gy.activeWrapper,
                                children: f.jsx(Jy, {
                                    currentPoints: g.context.currentPoints,
                                    maximumPoints: g.context.maximumPoints,
                                    earnedPoints: g.context.earnedPoints,
                                    currentStage: g.context.stage,
                                    status: g.context.status,
                                    handleEndAnimation: C,
                                }),
                            }),
                        f.jsxs('div', {
                            className: Gy.completeWrapper,
                            children: [
                                g.context.status === Cn.COMPLETED_RESETTABLE &&
                                    f.jsx(Xy, { timeLeft: o, assetsPointer: c }),
                                w && f.jsx(Ky, { assetsPointer: c }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    nC = { rootId: ee.resolve('aliases').read((e) => e.fun_random.shared.ProgressionEntryPoint('resId')) };
function sC() {
    return f.jsx(jy, { options: nC, children: f.jsx(aC, {}) });
}
const rC = 'HangarWidget_3b2c10a',
    oC = ee.resolve('aliases'),
    iC = j(({ className: e }) => {
        const { controls: t } = Iy(),
            n = (function (e) {
                const t = Lx(),
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
                        const a = ua(
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
            })({ [Cy]: !0 }),
            s = a.useMemo(
                () => ({ [oC.read((e) => e.fun_random.shared.ProgressionEntryPoint('resId'))]: n.entryPoint }),
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
            f.jsx('div', { className: b(rC, e), children: n.entryPoint && f.jsx(sC, {}) })
        );
    }),
    lC = { rootId: ee.resolve('aliases').read((e) => e.fun_random.shared.UserMissions('resId')) },
    cC = ({ className: e }) => {
        const t = Ex();
        return f.jsx(Wa, {
            soundsOverrides: dy,
            children: f.jsx(qa, {
                children: f.jsx(yy, {
                    children: f.jsx(cy, {
                        groups: wy,
                        maxVisibleRowsAmount: t ? 4 : 6,
                        children: f.jsx(Ny, { options: lC, children: f.jsx(iC, { className: e }) }),
                    }),
                }),
            }),
        });
    },
    dC = 'HangarScreen_261a5d2',
    uC = 'HangarScreen_sceneWrapper_c15ed7d7',
    mC = 'HangarScreen_vignette_50c67f89',
    pC = 'HangarScreen_widgetsSection_1a2843a4',
    _C = 'HangarScreen_hangarPage_51660504',
    hC = 'HangarScreen_mainMenu_4e4165cc',
    gC = 'HangarScreen_userMissions_bb6a847f',
    vC = ee.resolve('aliases'),
    fC = { rootId: vC.read((e) => e.hangar.shared.MainMenu('resId')) },
    bC = vC.read((e) => e.hangar.shared.HeroTank('resId')),
    xC = j(function () {
        const e = Ts().model.current.intCD.get(),
            t = fm().model.hasSuitableVehicles.get(),
            a = -1 !== e,
            n = fm().model.assetsPointer.get(),
            s = jn().model.modeId.get();
        return f.jsxs('div', {
            className: dC,
            children: [
                f.jsx(Ht, { id: bC, children: f.jsx(Nb, {}) }),
                f.jsx('div', { className: mC }),
                f.jsx(ax, { className: uC }),
                f.jsxs('div', {
                    className: _C,
                    children: [
                        f.jsxs('div', {
                            className: pC,
                            children: [t ? f.jsx(Px, {}) : f.jsx(hx, {}), a && f.jsx(dx, {})],
                        }),
                        f.jsx(tx, { className: hC, options: fC, battleTypesPath: 'fun_random' === s ? yn(n) : void 0 }),
                        f.jsx(Je, { children: f.jsx(cC, { className: gC }) }),
                    ],
                }),
            ],
        });
    }),
    yC = 'ConfirmationPanel_afa99a14',
    CC = 'ConfirmationPanel_currencies_7544112d',
    wC = 'ConfirmationPanel_plus_335af158',
    NC = 'ConfirmationPanel_buttons_ad07fa9b',
    IC = (e) => e > 0,
    jC = Pe('LeftBlock', 'ConfirmationPanel_leftBlock_798f4c44'),
    kC = Pe('Currencies', CC),
    SC = Pe('Buttons', NC),
    PC = Pe('ConfirmationPanel', yC);
function EC(e) {
    return f.jsx(kC, {
        className: e.className,
        children: a.Children.map(e.children, (e, t) =>
            f.jsxs(f.Fragment, { children: [IC(t) && f.jsx('div', { className: wC }), e] }),
        ),
    });
}
PC.Left = jC;
const MC = 'DealPanel_leftBlock_e9fb0b4a',
    LC = 'DealPanel_leftBlock__active_53e6aee9',
    DC = 'DealPanel_checkbox_c6267a54',
    TC = 'DealPanel_checkbox__active_edd6c82d',
    AC = 'DealPanel_checkboxLabel_7df5996',
    BC = 'DealPanel_icon_f0ce4668',
    VC = 'DealPanel_value_438c7871',
    OC = 'DealPanel_buttonWrapper_e6c7f6fe',
    RC = 'DealPanel_button_d186abe4',
    zC = 'DealPanel_buttonContent_25d6c73c';
function $C(e, t) {
    return t === Ma.gold ? Ze.formatNumber('gold', e) : Ze.formatNumber('integral', e);
}
const HC = a.memo(function ({ type: e, price: t }) {
        const a = At({ value: Ve.small }, { large: { value: Ve.medium } }),
            n = $e({
                body: ee.resolve('strings').readOrEmpty(`tank_setup.dealPanel.tooltip.purchasedWith.${t.currency}`),
            });
        return f.jsxs(Re, {
            ...n,
            reverse: !0,
            type: e ?? 'formattedCurrency',
            size: a.value,
            classNames: { icon: BC, base: VC },
            enough: t.enough,
            children: [
                void 0 === e &&
                    f.jsx(ke, {
                        className: BC,
                        path: `library.currency.${t.currency}_${Za[a.value]}x${Za[a.value]}`,
                        width: Za[a.value],
                        height: Za[a.value],
                    }),
                $C(t.value, e),
            ],
        });
    }),
    FC = ee.resolve('strings'),
    WC = 'general',
    qC = 'repair';
const ZC = { [Em]: 'boosters', [Mm]: 'shells', [Lm]: 'consumables' },
    UC = C(function ({ type: e, className: t }) {
        const n = At({ value: ya.small }, { large: { value: ya.medium } }),
            { model: s, controls: r } = jp(),
            { model: o, controls: i } = Ap(),
            { model: l, controls: c } = Lp(),
            { model: d, controls: u } = $p(),
            { controls: m, model: p } = (() => {
                switch (e) {
                    case Pm:
                        return { controls: c, model: l };
                    case Em:
                        return { controls: i, model: o };
                    case Lm:
                        return { controls: r, model: s };
                    case Mm:
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
            _ = $e({ body: FC.readOrEmpty('tank_setup.dealPanel.tooltip.notEnough') }),
            h = ZC[e],
            g = $e(
                a.useMemo(
                    () =>
                        h === qC
                            ? {
                                  header: FC.readOrEmpty(`tank_setup.tooltip.autoRenewal.header.${h}`),
                                  body: FC.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${h}`),
                              }
                            : h && h !== WC
                              ? {
                                    header: FC.readOrEmpty('tank_setup.tooltip.autoRenewal.header.general'),
                                    body: FC.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${h}`),
                                }
                              : {
                                    header: FC.readOrEmpty('tank_setup.tooltip.autoRenewal.header.general'),
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
                ? f.jsxs(PC, {
                      className: t,
                      children: [
                          f.jsx(xa, {
                              ...(C && g),
                              className: b(DC, h && TC),
                              classNames: { label: AC },
                              checked: C && v.autoRenewalEnabled,
                              size: n.value,
                              onCheckedChange: m.toggleAutoRenewal,
                              children: FC.readOrEmpty('tank_setup.dealPanel.autoRenew'),
                          }),
                          f.jsxs(PC.Left, {
                              className: b(MC, x && LC),
                              children: [
                                  f.jsx(EC, {
                                      children: v.prices.map((e, t) => {
                                          const a = (function (e) {
                                              if (e && Ga.includes(e)) return e;
                                          })(e.currency);
                                          return f.jsx(HC, { type: a, price: e }, t);
                                      }),
                                  }),
                                  f.jsxs(SC, {
                                      children: [
                                          f.jsx('div', {
                                              ...(v.disabled && _),
                                              className: OC,
                                              children: f.jsx(dt, {
                                                  className: RC,
                                                  classNames: { content: zC },
                                                  disabled: (!v.canConfirm || v.disabled) && x,
                                                  onClick: m.confirm,
                                                  theme: Ua.primary,
                                                  size: n.value,
                                                  'data-test-id': 'dealPanelApply',
                                                  children: FC.readOrEmpty('tank_setup.dealPanel.button.apply'),
                                              }),
                                          }),
                                          f.jsx('div', {
                                              className: OC,
                                              children: f.jsx(dt, {
                                                  className: RC,
                                                  classNames: { content: zC },
                                                  disabled: !v.canCancel,
                                                  onClick: m.cancel,
                                                  theme: Ua.secondary,
                                                  size: n.value,
                                                  'data-test-id': 'dealPanelCancel',
                                                  soundTarget: 'loadout:deal-panel:cancel_button',
                                                  children: FC.readOrEmpty('tank_setup.dealPanel.button.cancel'),
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
    GC = 'Counter_20fd03c5',
    KC = 'Counter_current_2e9b96d1',
    JC = 'Counter_total_7d9a1992';
function XC({ current: e, total: t, className: a }) {
    const n = ee.resolve('intl');
    return f.jsx(je, {
        className: b(GC, a),
        path: 'common.progress',
        upgradeLegacy: !0,
        split: !0,
        params: {
            current: f.jsx('span', { className: KC, children: n.formatNumber('integral', e) }),
            total: f.jsx('span', { className: JC, children: n.formatNumber('integral', t) }),
        },
    });
}
const QC = 'Depot_dots_e22e1616',
    YC = 'Depot_17898b99',
    ew = 'Depot_value_929a2cc5',
    tw = 'Depot_value__name_243cc0f1',
    aw = 'Depot_value__count_c6469680',
    nw = 'Depot_valueContainer_7c59dac8',
    sw = 'Depot_slash_13b22cce',
    rw = ee.resolve('strings'),
    ow = ({ inDepotCount: e, itemsInVehicle: t }) => {
        const a = t >= 0;
        return f.jsxs('div', {
            className: YC,
            children: [
                f.jsxs('div', {
                    className: b(ew, tw),
                    children: [
                        f.jsx(Ge, { text: rw.readOrEmpty('tank_setup.shells.specification.inStorage') }),
                        a &&
                            f.jsxs(f.Fragment, {
                                children: [
                                    ' ',
                                    f.jsx(je, { path: 'common.common.slash' }),
                                    ' ',
                                    f.jsx(Ge, { text: rw.readOrEmpty('tank_setup.shells.specification.inVehicle') }),
                                    f.jsx('div', { className: nw }),
                                ],
                            }),
                    ],
                }),
                f.jsx('div', { className: QC }),
                f.jsxs('div', {
                    className: b(ew, aw),
                    children: [
                        e,
                        a &&
                            f.jsxs(f.Fragment, {
                                children: [' ', f.jsx(je, { path: 'common.common.slash', className: sw }), ' ', t],
                            }),
                    ],
                }),
            ],
        });
    },
    iw = 'Properties_dots_1fc83e37',
    lw = 'Properties_info_b62adb3a',
    cw = 'Properties_metric_269f11b0',
    dw = 'Properties_value_a40606f7',
    uw = 'Properties_name_fc42a225',
    mw = 'Properties_truncatedName_d7486b0e',
    pw = ee.resolve('strings'),
    _w = C(function ({ properties: e }) {
        return f.jsx(v.Fragment, {
            children: ue(e, (e, t) =>
                f.jsx(
                    v.Fragment,
                    {
                        children:
                            e.value &&
                            f.jsxs('div', {
                                className: lw,
                                children: [
                                    f.jsxs('div', {
                                        className: uw,
                                        children: [
                                            f.jsx(Ge, {
                                                className: mw,
                                                text: pw.readOrEmpty(`menu.tank_params.${e.paramName}`),
                                            }),
                                            f.jsx('div', { className: cw, children: e.metricValue }),
                                        ],
                                    }),
                                    f.jsx('div', { className: iw }),
                                    f.jsx('div', { className: dw, children: e.value }),
                                ],
                            }),
                    },
                    t,
                ),
            ),
        });
    }),
    hw = 'Purchase_dots_92cddd3b',
    gw = 'Purchase_d6025d4f',
    vw = 'Purchase_name_ebddecd',
    fw = 'Purchase_truncatedName_374c53e5',
    bw = 'Purchase_price_fd7d4ed5',
    xw = 'Purchase_result_d6c831a6',
    yw = 'Purchase_value_98e07fc3',
    Cw = 'Purchase_value__noPurchase_50a115b4',
    ww = 'Purchase_sign_28802c61',
    Nw = 'Purchase_sign__multiplier_c1c45705',
    Iw = 'Purchase_sign__equals_ad1fc9f4',
    jw = 'Purchase_discountWrapper_d6cbd188',
    kw = 'Purchase_discountWrapper__withoutDiscount_cd9710d2',
    Sw = 'Purchase_icon_ae94fc41',
    Pw = 'Purchase_icon__currency_9e808070',
    Ew = 'Purchase_icon__withDiscount_b0aaff0',
    Mw = ee.resolve('strings'),
    Lw = C(({ shell: e }) => {
        const { boughtCount: t, totalPrice: n, price: s, itemPrice: r } = e,
            o = e.price.previousPrice[0],
            i = void 0 !== o,
            l = At({ value: Ve.extraSmall }, { extraLarge: { value: Ve.small } }),
            c = a.useMemo(() => (r && o ? [r.value, o.value, r.currency] : void 0), [r, o]),
            d = a.useMemo(() => ({ disabled: !i }), [i]),
            u = He('priceDiscount', c, d);
        return f.jsxs('div', {
            className: gw,
            children: [
                f.jsx('div', {
                    className: vw,
                    children: f.jsx(Ge, {
                        className: fw,
                        text: Mw.readOrEmpty('tank_setup.shells.specification.price'),
                    }),
                }),
                f.jsx('div', { className: hw }),
                f.jsxs('div', {
                    className: xw,
                    children: [
                        f.jsx('div', { className: b(yw, Cw), children: t }),
                        f.jsx('div', { className: b(ww, Nw), children: f.jsx(je, { path: 'common.multiplierSmall' }) }),
                        f.jsxs('div', {
                            ...u,
                            className: bw,
                            children: [
                                s.price.map((e, t) =>
                                    f.jsx(
                                        Be,
                                        {
                                            type: Oe.currency,
                                            enabled: i,
                                            size: l.value,
                                            classNames: { base: b(jw, !i && kw), discount: b(Sw, i && Ew) },
                                            children: f.jsx(Re, {
                                                reverse: !0,
                                                size: Ve.small,
                                                classNames: { base: yw, icon: b(Sw, Pw) },
                                                type: e.currency,
                                                enough: e.enough,
                                                children: e.value,
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                                f.jsx('div', {
                                    className: b(ww, Iw),
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
                                          classNames: { base: yw, icon: b(Sw, Pw) },
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
                                  classNames: { base: b(yw, Cw), icon: b(Sw, Pw) },
                                  type: Ma.credits,
                                  children: 0,
                              }),
                    ],
                }),
            ],
        });
    }),
    Dw = 'Shell_fullArea_7aaeeab0',
    Tw = 'Shell_controls_fbdd51bb',
    Aw = 'Shell_dc4438ed',
    Bw = 'Shell_mainInfo_cf4a5ca0',
    Vw = 'Shell_icon_5ea0be74',
    Ow = 'Shell_counter_ce287a95',
    Rw = 'Shell_counter__dimmed_42079d5d',
    zw = 'Shell_name_2544fef6',
    $w = 'Shell_grow_fa2782e5',
    Hw = 'Shell_detailedInfo_5686c3ac',
    Fw = 'Shell_slider_4d24fb7c',
    Ww = ee.resolve('aliases'),
    qw = ee.resolve('images'),
    Zw = ee.resolve('strings'),
    Uw = ee.resolve('intl'),
    Gw = 'big',
    Kw = 'large',
    Jw = Pe('Shell', Aw),
    Xw = C(({ value: e, index: t }) => {
        const { model: n, controls: s } = $p(),
            r = n.ammoMaxSize.get() - n.installedCount.get() + e.count,
            o = Uw.toUpperCase(Zw.readOrEmpty(`item_types.shell.kinds.${e.kind}`)),
            i = He(
                'hangarShell',
                a.useMemo(() => [e.intCD], [e.intCD]),
            ),
            l = Ke(
                'tankSetupShellItem',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: Nm,
                        fieldType: 0,
                        installedSlotId: t,
                        itemInstalledSetupIdx: e.itemInstalledSetupIndex,
                        itemInstalledSetupSlotIdx: t,
                        isMounted: e.mountedState !== Bp.notMounted,
                        isMountedMoreThanOne: e.mountedState === Bp.mountedMoreThanOne,
                        emitterUID: window.subViews.get(Ww.read((e) => e.hangar.shared.Shells('resId'))).uid,
                    }),
                    [t, e.intCD, e.itemInstalledSetupIndex, e.mountedState],
                ),
            ),
            c = At({ value: Gw }, { large: { value: Kw } }),
            d = At({ value: Ka.small }, { medium: { value: Ka.medium } }),
            u = a.useCallback((e, t) => (console.log(e, t), s.updateShellCount(e, t)), [s]);
        return f.jsxs(Jw, {
            children: [
                f.jsxs('div', {
                    ...i,
                    ...l,
                    className: Bw,
                    children: [
                        f.jsx('div', {
                            className: Vw,
                            style: { backgroundImage: `url(${qw.readOrEmpty(`shell.${c.value}.${e.type}`)})` },
                        }),
                        f.jsx('div', { className: b(Ow, 0 === e.count && Rw), children: e.count }),
                        f.jsx('div', { className: zw, children: o }),
                    ],
                }),
                f.jsxs(Ja, {
                    step: n.clip.get(),
                    className: Fw,
                    value: e.count,
                    maxValue: n.ammoMaxSize.get(),
                    limit: r,
                    size: d.value,
                    onValueChange: (t) => u(e.intCD, t),
                    children: [
                        d.value === Ka.medium && f.jsx(Ja.Controls, { className: Tw }),
                        f.jsx(Ja.LimitationArea, { className: Dw }),
                        f.jsx(Ja.Thumb, {}),
                        f.jsx(Ja.InteractiveArea, { className: Dw }),
                    ],
                }),
                f.jsxs('div', {
                    className: Hw,
                    children: [
                        f.jsx(_w, { properties: e.propertiesList }),
                        f.jsx('div', { className: $w }),
                        f.jsx(ow, { inDepotCount: e.inDepotCount, itemsInVehicle: e.itemsInVehicle }),
                        f.jsx(Lw, { shell: e }),
                    ],
                }),
            ],
        });
    }),
    Qw = 'ShellTransition_e18df2a',
    Yw = C(function ({ index: e, intCD: t, swapping: n, onAnimationEnd: s, onSwappingEnd: r, leftID: o }) {
        const [i, l] = a.useState(!1),
            { model: c } = $p(),
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
        if (d) return f.jsx(y.div, { className: Qw, style: p, children: f.jsx(Xw, { value: d, index: e }) });
    }),
    eN = 'SwapButton_20088d5c',
    tN = 'SwapButton_icon_cd2823d0';
function aN({ index: e, onSwap: t }) {
    return f.jsx(dt, {
        theme: dt.themes.secondary,
        id: `swap-${e}`,
        onClick: function () {
            t(e);
        },
        className: eN,
        autoAlignContent: !1,
        children: f.jsx('div', { className: tN }),
    });
}
const nN = 'ShellsSetup_fc3cf257',
    sN = 'ShellsSetup_counter_107998e7',
    rN = 'ShellsSetup_container_eef616b1';
function oN(e, t) {
    if (!t) return -1;
    const a = e.find((e, a) => t[a] !== e);
    return void 0 !== a ? e.indexOf(a) : -1;
}
const iN = C(function () {
        const { model: e, controls: t } = $p(),
            n = e.computes.shellIDs(),
            s = ge(n),
            [r, o] = a.useState(!1),
            [i, l] = a.useState(oN(n, s));
        function c(e) {
            r || t.swapSlots({ leftID: e, rightID: e + 1 });
        }
        a.useEffect(() => {
            s && n !== s && s[0] && n.includes(s[0]) && (l(oN(n, s)), o(!0));
        }, [n, s]);
        const d = pa(() => Xa(), [], 150);
        function u() {
            o(!1);
        }
        return f.jsxs('div', {
            className: nN,
            children: [
                f.jsx(XC, { className: sN, current: e.installedCount.get(), total: e.ammoMaxSize.get() }),
                f.jsx('div', {
                    className: rN,
                    children: ue(n, (t, s) =>
                        f.jsxs(
                            a.Fragment,
                            {
                                children: [
                                    e.computes.shellExist(t) &&
                                        f.jsx(Yw, {
                                            index: s,
                                            intCD: t,
                                            onAnimationEnd: d,
                                            onSwappingEnd: u,
                                            leftID: i,
                                            swapping: r,
                                        }),
                                    s < n.length - 1 && f.jsx(aN, { index: s, onSwap: c }),
                                ],
                            },
                            s,
                        ),
                    ),
                }),
            ],
        });
    }),
    lN = { Standard: 'Standard', Bounty: 'Bounty', Improved: 'Improved', Experimental: 'Experimental' },
    cN = 'Equipment',
    dN = 'Crew',
    uN = {
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
const mN = 'Action_ab2a2b2e',
    pN = 'Action_base__disabled_b9b41a41',
    _N = 'Action_button_4133ceee',
    hN = 'Action_icon_f3030341',
    gN = ee.resolve('images'),
    vN = ee.resolve('strings'),
    fN = ['cancel', 'undo'],
    bN = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`),
    xN = a.forwardRef(function (
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
        const m = n ? bN(e, s) : e,
            p = i && 'cancel' !== e,
            _ = a.useMemo(
                () => ({
                    backgroundImage: `url(${t || gN.readOr(`loadout.actions.${m}`, () => gN.readOrEmpty(`tanksetup.actions.${m}`))})`,
                }),
                [m, t],
            );
        const h = $e(
            a.useMemo(() => {
                if (p) return { body: o };
                const t = ((e, t, a, n) => (a ? 'demount_plus' : n ? bN(e, t) : e))(e, s, r, n);
                return {
                    header: vN.readOrEmpty(`tank_setup.tooltips.action.title.${t}`),
                    body: fN.includes(t) ? void 0 : vN.readOrEmpty(`tank_setup.tooltips.action.description.${l || t}`),
                };
            }, [e, p, o, r, n, s, l]),
        );
        return f.jsx('div', {
            ...h,
            className: b(mN, p && pN, c),
            children: f.jsx(dt, {
                ref: u,
                autoAlignContent: !1,
                theme: Ua.secondary,
                className: _N,
                disabled: p,
                'data-test-id': e,
                onClick: function (t) {
                    (t.stopPropagation(), p || d(e));
                },
                children: f.jsx('div', { className: hN, style: _ }),
            }),
        });
    }),
    yN = {
        root: 'Actions_root_9b5544a9',
        base: 'Actions_a97dca87',
        base__hidden: 'Actions_base__hidden_6a4e6a7d',
        'options-hide': 'Actions_options-hide_9b5544a9',
        base__shown: 'Actions_base__shown_b7ebaba7',
        'options-show': 'Actions_options-show_9b5544a9',
        actionItem: 'Actions_actionItem_7ebdfdac',
    },
    CN = ee.resolve('strings');
function wN({ availableActions: e, buyMoreDisabled: t, onActionClick: a, className: n }) {
    return f.jsxs('div', {
        className: b(yN.base, yN['base__' + (e.length ? 'shown' : 'hidden')], n),
        children: [
            e.includes(hp) &&
                f.jsx(xN, {
                    actionType: hp,
                    disabled: t,
                    onClick: a,
                    className: yN.actionItem,
                    disabledTooltipText: CN.readOrEmpty('tank_setup.dealPanel.tooltip.notEnough'),
                }),
            e.includes(lp) && f.jsx(xN, { actionType: lp, onClick: a, className: yN.actionItem }),
            e.includes(ip) && f.jsx(xN, { actionType: ip, onClick: a, className: yN.actionItem }),
        ],
    });
}
function NN(e) {
    switch (e) {
        case Kp:
            return Kt.directiveBooster;
        case Gp:
            return Kt.directiveSubstitute;
        case Xp:
            return Kt.builtInEquipment;
        case Jp:
            return Kt.improved;
        case Qp:
            return Kt.experimental;
        case qp:
        case Zp:
        case Up:
            return Kt.trophy;
        default:
            return Kt.none;
    }
}
function IN(e, t, a) {
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
            (i[u] = f.jsx(Ra, {
                style: { color: t[c], alignItems: 'flex-start' },
                upgradeLegacy: !0,
                text: d,
                params: a,
            })),
            (s = n.exec(e)));
    }
    return [r, i];
}
const jN = {
    base: 'Price_c00fc2b8',
    icon: 'Price_icon_10cf08bf',
    icon__reverse: 'Price_icon__reverse_74b70497',
    value: 'Price_value_7bb80c7b',
};
function kN({ price: e, previousPrice: t, withZeroValue: n, ignoreDiscount: s, valueFirst: r, priceSeparator: o }) {
    const i = At({ value: Ve.extraSmall }, { small: { value: Ve.small } });
    return f.jsx('div', {
        className: jN.base,
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
                                    classNames: { icon: b(jN.icon, r && jN.icon__reverse), base: jN.value },
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
const SN = {
    icon: 'Storage_icon_f8835a96',
    icon__reverse: 'Storage_icon__reverse_aada9c9e',
    value: 'Storage_value_edb11ec6',
};
function PN({ itemsInStorage: e, valueFirst: t }) {
    return f.jsx(Re, {
        type: Ma.depot,
        reverse: t,
        size: Ve.small,
        enough: Boolean(e),
        classNames: { base: SN.value, icon: b(SN.icon, t && SN.icon__reverse) },
        children: e,
    });
}
const EN = {
    root: 'Options_root_6818b5da',
    base: 'Options_945d8a9e',
    base__hidden: 'Options_base__hidden_1ab7a478',
    'options-hide': 'Options_options-hide_6818b5da',
    base__shown: 'Options_base__shown_620b2679',
    'options-show': 'Options_options-show_6818b5da',
};
function MN({ price: e, mounted: t, possibleZeroCount: a, show: n, itemsInStorage: s, className: r }) {
    const o = s || a,
        i = ze('loadout.installed_on_vehicle', 'loadout.installed_on_vehicle_upscale');
    return f.jsx('div', {
        className: b(EN.base, EN['base__' + (n ? 'shown' : 'hidden')], r),
        children: t
            ? f.jsx(ke, { path: i, width: 24, height: 24 })
            : o
              ? f.jsx(PN, { itemsInStorage: s })
              : e && f.jsx(kN, { ...e, valueFirst: !0 }),
    });
}
const LN = 'LoadoutItem_49fa5e5c',
    DN = 'LoadoutItem_base__hoverless_a07e4977',
    TN = 'LoadoutItem_content_b29d68c8',
    AN = 'LoadoutItem_base__disabled_404624aa',
    BN = 'LoadoutItem_image_2b6b3694',
    VN = 'LoadoutItem_nameWrapper_ac53f36d',
    ON = 'LoadoutItem_name_f6b620d8',
    RN = 'LoadoutItem_specializations_8e86b08',
    zN = 'LoadoutItem_options_fe0297a6',
    $N = 'LoadoutItem_actions_bfa3b2fd',
    HN = 'LoadoutItem_text_833b4471',
    FN = 'LoadoutItem_text__short_192105ec',
    WN = [cp, ip, lp, op],
    qN = Pe('ConsumablesItem', LN),
    ZN = { colorTag: '#64ba21', whiteSpanish: 'rgba(var(--color-general-primary-rgb), 0.9)' },
    UN = function ({ intCD: e, selected: t, item: n, controls: s }) {
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
                return m || !v ? e : (t || e.add(cp), c || (e.add(hp), (_ > 0 || p) && !h ? e.add(lp) : e.add(ip)), e);
            }, [m, v, t, c, _, p, h]),
            y = a.useCallback(
                (t) => {
                    s.actionSlot({ actionType: t, intCD: e, currentSlotId: u });
                },
                [s, e, u],
            );
        const [C, w] = IN(l, ZN);
        return f.jsx(qN, {
            className: b(m && AN, ((i === Xp && t) || m) && DN),
            onClick: function () {
                if ((i === Xp && t) || m) return;
                const e = WN.find((e) => x.has(e));
                y(e || op);
            },
            children: f.jsxs('div', {
                className: TN,
                children: [
                    f.jsx('div', {
                        className: BN,
                        children: f.jsx(ra, { name: o, overlayType: NN(i), size: ra.sizes.s180x135 }),
                    }),
                    f.jsx('div', { className: VN, children: f.jsx('div', { className: ON, children: r }) }),
                    f.jsx(Qa, { className: b(HN, x.size > 0 && FN), text: C, upgradeLegacy: !0, params: w }),
                    f.jsx(MN, { show: 0 === x.size, itemsInStorage: _, mounted: p || h, price: g, className: zN }),
                    f.jsx(wN, { className: $N, onActionClick: y, buyMoreDisabled: d, availableActions: Array.from(x) }),
                ],
            }),
        });
    },
    GN = C((e) => {
        const { model: t, controls: a } = jp(),
            n = t.computes.consumableById(e.intCD);
        if (n) return f.jsx(UN, { ...e, item: n, controls: a });
    }),
    KN = ee.resolve('images');
function JN({
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
    const c = (s || r) && i.includes(_p),
        d = i.length && (i[0] !== _p || c);
    return f.jsxs('div', {
        className: b(yN.base, yN['base__' + (d ? 'shown' : 'hidden')], l),
        children: [
            i.includes(lp) && f.jsx(xN, { actionType: lp, onClick: a, className: yN.actionItem }),
            i.includes(ip) && f.jsx(xN, { actionType: ip, onClick: a, className: yN.actionItem }),
            c && f.jsx(xN, { actionType: _p, level: t, onClick: a, className: yN.actionItem, modernized: e }),
            i.includes(dp) && f.jsx(xN, { actionType: dp, onClick: a, className: yN.actionItem, freeToDemount: n }),
            i.includes(up) &&
                f.jsx(xN, {
                    actionType: up,
                    onClick: a,
                    className: yN.actionItem,
                    freeToDemount: n,
                    imageSource: KN.readOrEmpty('loadout.actions.demount'),
                }),
            i.includes(mp) && f.jsx(xN, { actionType: mp, onClick: a, className: yN.actionItem }),
            (e || !n) &&
                i.includes(pp) &&
                f.jsx(xN, { actionType: pp, onClick: a, className: yN.actionItem, modernized: e, tooltipBodyPath: o }),
        ],
    });
}
const XN = 'mul',
    QN = ee.resolve('strings'),
    YN = { calcValue: 0, isPositive: !0, valueKey: 'default' };
function eI({ values: e, localeName: t }) {
    const a = Ut(e, ({ valueKey: e }) => e === t).pop();
    if (!a) return YN;
    const { value: n, valueType: s, valueKey: r } = a,
        o = s === XN ? 100 * (n - 1) : n;
    return { calcValue: o, isPositive: o > 0, valueKey: r };
}
function tI(e) {
    const { calcValue: t, isPositive: a, valueKey: n } = eI(e),
        s = a ? '+' : '',
        r = Ya(t, 1),
        o = QN.readOrEmpty('tank_setup.kpi.bonus.valueTypes.default'),
        i = QN.readOr(`tank_setup.kpi.bonus.valueTypes.${n}`, () => o);
    return `${s}${i !== o ? `${r} ${i}` : `${r}${i}`}`;
}
function aI(e, t = !1) {
    return t || eI(e).isPositive
        ? QN.readOrEmpty(`tank_setup.kpi.bonus.positive.${e.localeName}`)
        : QN.readOrEmpty(`tank_setup.kpi.bonus.negative.${e.localeName}`);
}
const nI = 'Bonuses_2e425c2b',
    sI = 'Bonuses_bonus_1137ce2e',
    rI = 'Bonuses_effect_9904936e',
    oI = 'Bonuses_text_3e69479c',
    iI = 'Bonuses_unit_dd3c8074',
    lI = 'Bonuses_base__special_ca1cd57b',
    cI = 'Bonuses_icon_bf2ddda6',
    dI = ee.resolve('strings');
function uI({ effect: e, special: t, bonuses: a }) {
    const n = At({ value: e ? 2 : 3 }, { large: { value: e ? 3 : 4 } });
    return f.jsxs('div', {
        className: b(nI, t && lI),
        children: [
            e &&
                f.jsxs('div', {
                    className: sI,
                    children: [
                        f.jsxs('span', {
                            className: rI,
                            children: [f.jsx('span', { className: cI }), dI.readOrEmpty('tank_setup.effects.name')],
                        }),
                        f.jsx(Ge, { text: e, className: oI }),
                    ],
                }),
            ue(
                a.items,
                (e, t) =>
                    t < n.value &&
                    f.jsxs(
                        'div',
                        {
                            className: sI,
                            children: [
                                f.jsx('span', { className: iI, children: tI(e) }),
                                f.jsx(Ge, { text: aI(e), className: oI }),
                            ],
                        },
                        t,
                    ),
            ),
        ],
    });
}
const mI = 'Specializations_c4673376',
    pI = 'Specializations_item_64ba5e4a',
    _I = 'Specializations_specializationType_b4c7a75d',
    hI = 'Specializations_inactiveIcon_45a44cf7',
    gI = Pe('Specializations');
function vI({ specializations: e, className: t }) {
    return f.jsx(gI, {
        className: b(mI, t),
        children: ue(e, ({ name: e, correct: t }, a) =>
            f.jsx(
                'div',
                {
                    className: pI,
                    children: f.jsx($_, {
                        specialization: e,
                        active: t,
                        classNames: { base: _I, inactiveIcon: t ? void 0 : hI },
                    }),
                },
                `${e}${a}`,
            ),
        ),
    });
}
function fI(e) {
    switch (e) {
        case 'equipmentTrophyBasic':
            return 1;
        case 'equipmentTrophyUpgraded':
            return 2;
        default:
            return 0;
    }
}
const bI = Pe('EquipmentsItem', LN),
    xI = function ({ intCD: e, selected: t, item: n, controls: s }) {
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
            P = en(),
            E = g && 'similar_device_already_installed' === I,
            { availableActions: M } = a.useMemo(() => {
                const e = new Set();
                var a;
                return (
                    S &&
                        !g &&
                        (t || e.add(cp),
                        v
                            ? (((a = x), a ? [up, mp] : [dp]).forEach((t) => {
                                  e.add(t);
                              }),
                              e.add(pp))
                            : e.add(((e, t, a) => ((e > 0 || t) && !a ? lp : ip))(y, v, C))),
                    w && !g && e.add(_p),
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
                L(void 0 !== e && e !== _p ? e : op);
            }, [M, L, g]),
            T = M.values().next().value;
        return f.jsx(bI, {
            className: b(g && AN, g && DN),
            onClick: D,
            children: f.jsxs('div', {
                className: TN,
                children: [
                    f.jsx('div', {
                        className: BN,
                        children: f.jsx(ra, {
                            name: i,
                            overlayType: NN(p),
                            size: ra.sizes.s180x135,
                            level: m ? fI(p) : c,
                        }),
                    }),
                    f.jsx('div', { className: VN, children: f.jsx('div', { className: ON, children: o }) }),
                    u && f.jsx(uI, { effect: d ?? void 0, bonuses: u, special: r > 0 }),
                    f.jsx(MN, {
                        mounted: v || C,
                        itemsInStorage: y,
                        price: k,
                        possibleZeroCount: m || _ || 0 === k.price.length,
                        className: zN,
                        show: 0 === M.size || (T === _p && !P.hover && !P.selected && !S),
                    }),
                    f.jsx(JN, {
                        className: $N,
                        modernized: _,
                        level: c,
                        onActionClick: L,
                        availableActions: Array.from(M),
                        freeToDemount: N,
                        installed: S,
                        mouseOverCard: P.hover || P.selected,
                        destroyTooltipBodyPath: j,
                    }),
                    !E && f.jsx(vI, { specializations: l.specializations, className: RN }),
                ],
            }),
        });
    },
    yI = C((e) => {
        const { model: t, controls: a } = Lp(),
            n = t.computes.equipmentsItemByIntCD(e.intCD, e.type);
        if (n) return f.jsx(xI, { ...e, item: n, controls: a });
        console.error('Unable to render equipment item', e.intCD, e.type);
    }),
    CI = Pe('InstructionsItem', LN),
    wI = { Equipment: 'equipmentInstructions', Crew: 'crewInstructions' },
    NI = { colorTag: '#64ba21', whiteSpanish: 'rgba(var(--color-general-primary-rgb), 0.9)' },
    II = function ({ intCD: e, item: t, controls: n }) {
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
                return (u || !g || (l && e.add(hp), (p > 0 || m) && !_ ? e.add(lp) : e.add(ip)), e);
            }, [u, g, l, p, m, _]),
            x = a.useCallback(
                (t) => {
                    n.actionSlot({ actionType: t, intCD: e, currentSlotId: d });
                },
                [n, e, d],
            ),
            y = a.useCallback(() => {
                u || (v.has(ip) ? x(ip) : v.has(lp) ? x(lp) : x(op));
            }, [v, x, u]),
            [C, w] = IN(i, NI);
        return f.jsx(CI, {
            className: b(u && AN, u && DN),
            onClick: y,
            children: f.jsxs('div', {
                className: TN,
                children: [
                    f.jsx('div', {
                        className: BN,
                        children: f.jsx(ra, { name: r, overlayType: NN(o), size: ra.sizes.s180x135 }),
                    }),
                    f.jsx('div', { className: VN, children: f.jsx('div', { className: ON, children: s }) }),
                    f.jsx(Qa, { className: b(HN, v.size > 0 && FN), text: C, upgradeLegacy: !0, params: w }),
                    f.jsx(MN, {
                        show: 0 === v.size,
                        itemsInStorage: p,
                        possibleZeroCount: u,
                        mounted: m || _,
                        price: h,
                        className: zN,
                    }),
                    f.jsx(wN, { className: $N, onActionClick: x, buyMoreDisabled: c, availableActions: Array.from(v) }),
                ],
            }),
        });
    },
    jI = C((e) => {
        const { model: t, controls: a } = Ap(),
            n = e.type && t.computes.instructionByIntCD(e.intCD, e.type);
        if (n) return f.jsx(II, { ...e, item: n, controls: a });
    });
const kI = { card: 'AmmunitionCard_card_2bd54c54' },
    SI = ee.resolve('aliases');
const PI = C(function ({ card: e, type: t, currentTab: n, className: s }) {
        const { model: r } = Km(),
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
            g = u ? nn.alert : -1 !== l ? nn.done : void 0,
            v = -1 !== l && h === l,
            b = !o && -1 !== l && h !== l,
            x = He(
                t === Em ? 'battleBoosterBlock' : 'hangarCardModule',
                a.useMemo(() => [c, h], [c, h]),
                a.useMemo(() => ({ resId: SI.read((e) => e.hangar.shared.Loadout('resId')) }), []),
            ),
            y = me({
                resId: SI.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ intCD: c, slotId: h, slotType: Lm, tooltipId: 'hangarCardModule' }), [c, h]),
            }),
            C = a.useMemo(
                () =>
                    (function (e, t, a, n, s, r, o, i) {
                        const { id: l, ...c } = (() => {
                            switch (e) {
                                case Lm:
                                    return {
                                        id: -1 === t ? 'tankSetupConsumableItem' : 'tankSetupConsumableSlot',
                                        slotType: km,
                                        emitterUID: window.subViews.get(
                                            SI.read((e) => e.hangar.shared.Consumables('resId')),
                                        ).uid,
                                    };
                                case Em:
                                    return {
                                        id: -1 === t ? 'tankSetupBattleBoosterItem' : 'tankSetupBattleBoosterSlot',
                                        slotType: Sm,
                                        emitterUID: window.subViews.get(
                                            SI.read((e) => e.hangar.shared.Instructions('resId')),
                                        ).uid,
                                    };
                                default:
                                    return {
                                        id: -1 === t ? 'tankSetupOptionalDeviceItem' : 'tankSetupOptionalDeviceSlotWW',
                                        slotType: Im,
                                        emitterUID: window.subViews.get(
                                            SI.read((e) => e.hangar.shared.Equipments('resId')),
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
            w = t === Lm ? y : x,
            N = Ke(C.id, C.args),
            I = (function ({ intCD: e, selected: t, ammunitionType: a, currentTab: n = '' }) {
                switch (a) {
                    case Pm: {
                        const a = tn(Dm, n);
                        return a ? f.jsx(yI, { intCD: e, selected: t, type: a }) : null;
                    }
                    case Lm:
                        return f.jsx(GN, { intCD: e, selected: t });
                    case Em: {
                        const t = tn(wI, n);
                        return t ? f.jsx(jI, { intCD: e, type: t }) : null;
                    }
                    default:
                        return null;
                }
            })({ intCD: c, selected: v, ammunitionType: t, currentTab: n });
        if (I)
            return f.jsx('div', {
                ...w,
                className: s,
                children: f.jsx(an, {
                    ...N,
                    className: kI.card,
                    classNames: { status: { icon: kI.statusIcon } },
                    status: g,
                    statusReason: t !== Lm ? d : void 0,
                    active: b,
                    selected: v,
                    disabled: i,
                    'data-test-id': c,
                    children: I,
                }),
            });
    }),
    EI = {
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
function MI({ cards: e, currentTab: t, type: n }) {
    const s = sn();
    return (
        a.useEffect(() => yt(s.recalculate), [null == e ? void 0 : e.length, s.recalculate]),
        f.jsx(f.Fragment, {
            children: e.map((e) => f.jsx(PI, { className: EI.card, card: e, type: n, currentTab: t }, e.intCD)),
        })
    );
}
const LI = {
        root: 'Introduction_root_bc1537e2',
        base: 'Introduction_7257ae29',
        description: 'Introduction_description_7c2607f0',
        title: 'Introduction_title_7e63aa60',
        message: 'Introduction_message_845b2bb5',
        currency: 'Introduction_currency_1092ef06',
        icon: 'Introduction_icon_740fcef0',
        'icon__currency-modernized': 'Introduction_icon__currency-modernized_1dfb6dcf',
    },
    DI = { [lN.Bounty]: 'trophy', [lN.Experimental]: 'modernized' };
function TI({ introductionType: e }) {
    const t = DI[e],
        a = ee.resolve('strings');
    return f.jsx(je, {
        split: !0,
        upgradeLegacy: !0,
        params: {
            currencyName:
                e !== lN.Bounty
                    ? f.jsx('span', {
                          className: LI.currency,
                          children: a.readOrEmpty(`tank_setup.introduction.currency.${t}`),
                      })
                    : '',
            currencyIcon: f.jsx('span', { className: b(LI.icon, LI[`icon__currency-${t}`]) }),
        },
        path: `tank_setup.introduction.message.${t}`,
        className: LI.message,
    });
}
const AI = { [lN.Bounty]: 'trophy', [lN.Experimental]: 'modernized' },
    BI = { [lN.Bounty]: 'modules.trophyOverlay', [lN.Experimental]: 'modules.modernizedOverlay' };
function VI({ introductionType: e }) {
    const t = ee.resolve('strings').readOrEmpty(`tank_setup.introduction.title.withoutEquipments.${AI[e]}`),
        a = BI[e];
    return f.jsxs('div', {
        className: LI.base,
        children: [
            f.jsx(ke, {
                path: a,
                width: 350,
                height: 250,
                adaptive: { large: { width: 600, height: 450, path: `${a}Big` } },
            }),
            f.jsxs('div', {
                className: LI.description,
                children: [f.jsx('div', { className: LI.title, children: t }), f.jsx(TI, { introductionType: e })],
            }),
        ],
    });
}
const OI = 'top',
    RI = 'bottom',
    zI = 'both',
    $I = 'none';
const HI = C(function ({ currentTab: e, type: t, className: a }) {
    const [n, s] = v.useState($I),
        { api: r } = ve();
    v.useLayoutEffect(() => {
        const e = () => {
            const e = r.getContainerSize() ?? 0,
                t = r.getWrapperSize() ?? 0,
                a = r.animationScroll.scrollPosition.get();
            s(
                (function (e, t, a) {
                    return e <= t ? $I : a <= 10 ? RI : t + a >= e - 10 ? OI : zI;
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
        l = ca(() => {
            ((i && t !== i) || (t === Pm && o && e !== o)) && r.applyScroll(0, { immediate: !0 });
        });
    v.useEffect(() => {
        l();
    }, [l, t, e]);
    const c = (function (e, t) {
        const { model: a } = jp(),
            { model: n } = Ap(),
            { model: s } = Lp();
        switch (e) {
            case Lm:
                return a.computes.consumables().sort((e, t) => (uN[e.itemName] ?? 1 / 0) - (uN[t.itemName] ?? 1 / 0));
            case Em:
                switch (t) {
                    case cN:
                        return n.equipmentInstructionsArray.get();
                    case dN:
                        return n.crewInstructionsArray.get();
                }
                break;
            case Pm:
                switch (t) {
                    case lN.Standard:
                        return s.computes.filteredStandardEquipments();
                    case lN.Bounty:
                        return s.bountyEquipments.get();
                    case lN.Improved:
                        return s.improvedEquipments.get();
                    case lN.Experimental:
                        return s.experimentalEquipments.get();
                }
        }
        return [];
    })(t, e);
    return f.jsxs('div', {
        className: b(EI.scrollContainer, EI[`scrollContainer__${n}`], a),
        children: [
            f.jsx(Ce, {
                classNames: { wrapper: EI.scrollWrapper, content: EI.scrollContent },
                children:
                    c && 0 !== c.length
                        ? f.jsx(rn, {
                              className: EI.container,
                              trashhold: `${t}-${e}`,
                              children: f.jsx(MI, { cards: c, currentTab: e, type: t }),
                          })
                        : t !== Pm || (e !== lN.Experimental && e !== lN.Bounty)
                          ? void 0
                          : f.jsx(VI, { introductionType: e }),
            }),
            f.jsx(we, { classNames: { base: EI.verticalBar } }),
        ],
    });
});
function FI(e) {
    return f.jsx(Ne, { children: f.jsx(HI, { ...e }) });
}
const WI = 'SpecializationFilter_48673c87',
    qI = 'SpecializationFilter_content_f790a5c2',
    ZI = ee.resolve('strings'),
    UI = {
        [Tm.Firepower]: 'loadout:ammunition_setup:specialization-filter:firepower',
        [Tm.Survivability]: 'loadout:ammunition_setup:specialization-filter:survivability',
        [Tm.Stealth]: 'loadout:ammunition_setup:specialization-filter:stealth',
        [Tm.Mobility]: 'loadout:ammunition_setup:specialization-filter:mobility',
    },
    GI = C(function ({ specialization: e, className: t }) {
        const n = fe(),
            { model: s, controls: r } = Lp(),
            o = s.standardEquipmentsFilters.get().has(e),
            i = ge(o),
            l = $e({
                header: ZI.readOrEmpty(`tank_setup.categories.${e}`),
                body: ZI.readOrEmpty(`tank_setup.categories.body.${e}`),
            }),
            c = pa(() => r.updateFilters(e), [r, e], 400);
        return (
            a.useEffect(() => {
                (o && !1 === i && n.play('on', { target: UI[e] }),
                    o || !0 !== i || n.play('off', { target: 'loadout:ammunition_setup:specialization-filter' }));
            }, [o, i, n, e]),
            f.jsx(It, {
                ...l,
                className: b(WI, t),
                classNames: { content: qI },
                fullSizeContent: !0,
                theme: kt.primary,
                size: jt.extraSmall,
                activated: o,
                onClick: c,
                children: f.jsx($_, { specialization: e, active: o }),
            })
        );
    }),
    KI = ee.resolve('aliases'),
    JI = ee.resolve('views'),
    XI = ee.resolve('intl'),
    QI = 'simple',
    YI = 'trophy',
    ej = 'deluxe',
    tj = 'modernized',
    aj = { [lN.Standard]: QI, [lN.Bounty]: YI, [lN.Improved]: ej, [lN.Experimental]: tj };
function nj({ id: e, label: t, className: n }) {
    const s = aj[e],
        r = Se(
            a.useMemo(
                () => ({
                    contentId: JI.read((e) => e.lobby.tanksetup.tooltips.SetupTabTooltipView('resId')),
                    resId: KI.read((e) => e.hangar.shared.Equipments('resId')),
                    disabled: !s,
                    args: { name: s },
                }),
                [s],
            ),
        );
    return f.jsx(on.Tab, { ...(s && r), tabId: e, className: n, children: f.jsx(Ge, { text: XI.toUpperCase(t) }) });
}
const sj = 'TabsNavigation_tabsNavigation_f7e0f60f',
    rj = 'TabsNavigation_tabsSwitcher_d52f26be',
    oj = 'TabsNavigation_tab_48ab20da',
    ij = 'TabsNavigation_tab__active_676bc101',
    lj = ({ tabsList: e, activeTab: t, theme: a, size: n, onChangeActiveTab: s, className: r, ...o }) =>
        f.jsx('div', {
            className: b(sj, r),
            children: f.jsx(on, {
                ...o,
                active: t,
                theme: a,
                size: n,
                onActiveChange: (e) => s(String(e)),
                children: f.jsx(on.Switcher, {
                    className: rj,
                    children: e.map(({ id: e, label: a }) =>
                        f.jsx(nj, { id: e, label: a, className: b(oj, t === a && ij) }, e),
                    ),
                }),
            }),
        }),
    cj = {
        workbenchPanel: 'WorkbenchPanel_workbenchPanel_f8c32bc5',
        currency: 'WorkbenchPanel_currency_7d4b8be',
        button: 'WorkbenchPanel_button_853070e2',
        buttonContent: 'WorkbenchPanel_buttonContent_24857913',
    },
    dj = ee.resolve('strings'),
    uj = C(({ className: e }) => {
        const { model: t, controls: a } = Lp(),
            n = He('equipCoinInfo'),
            s = $e({
                body: t.hasExperimentalEquipmentToDisassemble.get()
                    ? dj.readOrEmpty('tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.notDisabled.text')
                    : dj.readOrEmpty('tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.disabled.text'),
            });
        return f.jsxs('div', {
            className: b(cj.workbenchPanel, e),
            children: [
                f.jsx(Re, {
                    ...n,
                    reverse: !0,
                    type: Ma.equipCoin,
                    classNames: { base: cj.currency, icon: cj.currencyIcon },
                    children: t.equipCoinCount.get(),
                }),
                f.jsx('div', {
                    ...s,
                    children: f.jsx(dt, {
                        className: cj.button,
                        classNames: { content: cj.buttonContent },
                        disabled: !t.hasExperimentalEquipmentToDisassemble.get(),
                        theme: dt.themes.secondary,
                        size: dt.sizes.small,
                        onClick: t.hasExperimentalEquipmentToDisassemble.get() ? a.getMoreCurrency : void 0,
                        children: dj.readOrEmpty('tank_setup.experimentalEquipCoinBlock.name'),
                    }),
                }),
            ],
        });
    }),
    mj = 'AmmunitionSetup_14321dac',
    pj = 'AmmunitionSetup_ammunitionHeader_7df5ac92',
    _j = 'AmmunitionSetup_dealPanel_64ad50ed',
    hj = 'AmmunitionSetup_tabsNavigation_4504ff3c',
    gj = 'AmmunitionSetup_tabsNavigation__hidden_a99bfa94',
    vj = 'AmmunitionSetup_specializationFilters_35de8d81',
    fj = 'AmmunitionSetup_specializationFilter_38bef0cf',
    bj = {
        [Pm]: [
            { id: lN.Standard, labelKey: 'tank_setup.tabs.simple' },
            { id: lN.Bounty, labelKey: 'tank_setup.tabs.trophy' },
            { id: lN.Improved, labelKey: 'tank_setup.tabs.deluxe' },
            { id: lN.Experimental, labelKey: 'tank_setup.tabs.modernized' },
        ],
        [Em]: [
            { id: cN, labelKey: 'tank_setup.tabs.optDevice' },
            { id: dN, labelKey: 'tank_setup.tabs.crew' },
        ],
    },
    xj = { [Pm]: lN.Standard, [Em]: cN },
    yj = ee.resolve('strings');
function Cj(e) {
    switch (e) {
        case Kp:
            return cN;
        case Gp:
            return dN;
        case Jp:
            return lN.Improved;
        case Qp:
            return lN.Experimental;
        case qp:
        case Zp:
        case Up:
            return lN.Bounty;
        default:
            return;
    }
}
const wj = Object.values(Tm),
    Nj = C(function ({ type: e }) {
        const t = fe(),
            { model: n } = Km(),
            { controls: s } = Lp(),
            { groupIndex: r, item: o } = n.computes.selectedSlotGroupAndItem(),
            i = n.selectedSlot.get(),
            l = n.selectedSection.get(),
            c = a.useRef(!1),
            d = a.useRef(),
            [u, m] = a.useState(Cj(null == o ? void 0 : o.type) || xj[e]),
            p = ge(i),
            _ = ge(l),
            h = ge(r),
            g = ge(u),
            v = ge(e);
        (a.useEffect(() => {
            (_ !== l || (o && (p !== i || r !== h))) && m(Cj(null == o ? void 0 : o.type) || xj[e]);
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
                            (null == (t = bj[e])
                                ? void 0
                                : t.map(({ id: e, labelKey: t }) => ({ id: e, label: yj.readOrEmpty(t) }))) ?? []
                        );
                    })(e),
                [e],
            ),
            y = At({ size: cn.small }, { large: { size: cn.medium }, extraLarge: { size: cn.large } });
        return f.jsxs('div', {
            className: mj,
            children: [
                e === Mm
                    ? f.jsx(iN, {})
                    : f.jsxs(f.Fragment, {
                          children: [
                              f.jsxs('div', {
                                  className: pj,
                                  children: [
                                      f.jsx(lj, {
                                          tabsList: x,
                                          activeTab: u ?? '',
                                          onChangeActiveTab: (e) => m(e),
                                          theme: ln.primary,
                                          size: y.size,
                                          className: b(hj, 0 === x.length && gj),
                                      }),
                                      (() => {
                                          switch (u) {
                                              case lN.Standard:
                                                  return f.jsx('div', {
                                                      className: vj,
                                                      children: wj.map((e, t) =>
                                                          f.jsx(GI, { specialization: e, className: fj }, t),
                                                      ),
                                                  });
                                              case lN.Experimental:
                                                  return f.jsx(uj, {});
                                          }
                                      })(),
                                  ],
                              }),
                              f.jsx(FI, { currentTab: u, type: e }),
                          ],
                      }),
                f.jsx(UC, { className: _j, type: e }),
            ],
        });
    }),
    Ij = 'LoadoutScreen_b66d9141',
    jj = 'LoadoutScreen_info_1918746a',
    kj = ee.resolve('aliases');
function Sj(e, t) {
    return { options: { rootId: t.read(e) } };
}
const Pj = new la()
    .addWithProps(
        Ip,
        Sj((e) => e.hangar.shared.Consumables('resId'), kj),
    )
    .addWithProps(
        Tp,
        Sj((e) => e.hangar.shared.Instructions('resId'), kj),
    )
    .addWithProps(
        Mp,
        Sj((e) => e.hangar.shared.Equipments('resId'), kj),
    )
    .addWithProps(
        Gm,
        Sj((e) => e.hangar.shared.Loadout('resId'), kj),
    )
    .addWithProps(
        zp,
        Sj((e) => e.hangar.shared.Shells('resId'), kj),
    );
function Ej(e) {
    const t = Ee();
    Qe(Xe.ESCAPE, () => {
        t.push(xm.root, void 0);
    });
    const { page: a } = e.params;
    return f.jsx(ui, {
        classNames: { base: Ij, info: jj },
        children: void 0 !== a && Pj.render(f.jsx(Nj, { type: a })),
    });
}
const Mj = {
        base: 'Page_c86c7327',
        carousel: 'Page_carousel_2e3eb473',
        carousel__double: 'Page_carousel__double_b4782e51',
        carouselButtons: 'Page_carouselButtons_4148fb',
        filterPopover: 'Page_filterPopover_f4402d4f',
        filterTrigger: 'Page_filterTrigger_9d14c53b',
        filterTriggerContent: 'Page_filterTriggerContent_fe0f376c',
        teaserWidget: 'Page_teaserWidget_ab2c33e0',
    },
    Lj = { rootId: ee.resolve('aliases').read((e) => e.hangar.shared.Teaser('resId')) },
    Dj = [
        xm.loadout.optDevices,
        xm.loadout.battleBoosters,
        xm.loadout.shells,
        xm.loadout.consumables,
        xm.vehicles,
        xm.root,
    ],
    Tj = [xm.vehicles, xm.root],
    Aj = j(function () {
        const e = Ee(),
            t = os(),
            a = Ts().model.selectedVehicle(),
            n = t.model.carouselRowCount.get(),
            s = Dj.includes(e.location) && void 0 !== a,
            r = Tj.includes(e.location) && void 0 !== a,
            o = e.location === xm.root,
            i = !o;
        return f.jsx(f.Fragment, {
            children: f.jsxs('div', {
                className: Mj.base,
                children: [
                    i && f.jsx(dn, {}),
                    f.jsxs(un, {
                        children: [
                            f.jsx(mn, { path: xm.root, component: xC, exact: !0 }),
                            f.jsx(mn, { path: `${xm.loadout.root}/:page`, component: Ej }),
                            f.jsx(mn, { path: xm.vehicles, component: Eu }),
                        ],
                    }),
                    r && f.jsx(fb, { screenModeEnabled: e.location.endsWith(xm.vehicles) }),
                    s && f.jsx(tf, { className: Mj.loadoutPanel, screenModeEnabled: !o }),
                    o &&
                        f.jsxs('div', {
                            className: b(Mj.carousel, n === Dn && Mj.carousel__double),
                            children: [
                                f.jsxs('div', {
                                    className: Mj.carouselButtons,
                                    children: [
                                        f.jsx(bm, {
                                            classNames: {
                                                base: Mj.filterPopover,
                                                trigger: Mj.filterTrigger,
                                                triggerContent: Mj.filterTriggerContent,
                                            },
                                        }),
                                        f.jsx(gm, { route: xm.vehicles }),
                                    ],
                                }),
                                f.jsx(ym, {}),
                            ],
                        }),
                    o && f.jsx(mm, { className: Mj.teaserWidget, options: Lj }),
                ],
            }),
        });
    }),
    Bj = 'App_7ac91f18';
function Vj() {
    return f.jsx('div', { className: Bj, children: f.jsx(Aj, {}) });
}
const Oj = ee.resolve('aliases');
function Rj(e, t) {
    return { options: { rootId: t.read(e) } };
}
const zj = pn({
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
hn(
    new la()
        .addWithProps(Wa, { soundsOverrides: zj })
        .add(_n)
        .addWithProps(
            rs,
            Rj((e) => e.hangar.shared.VehicleFilters('resId'), Oj),
        )
        .addWithProps(
            cs,
            Rj((e) => e.hangar.shared.VehiclesStatistics('resId'), Oj),
        )
        .addWithProps(
            us,
            Rj((e) => e.hangar.shared.VehiclesInfo('resId'), Oj),
        )
        .addWithProps(
            kn,
            Rj((e) => e.hangar.shared.SpaceInteraction('resId'), Oj),
        )
        .addWithProps(
            In,
            Rj((e) => e.hangar.shared.MainMenu('resId'), Oj),
        )
        .addWithProps(
            wn,
            Rj((e) => e.hangar.shared.HeroTank('resId'), Oj),
        )
        .add(ps)
        .addWithProps(
            Ds,
            Rj((e) => e.hangar.shared.VehiclesInventory('resId'), Oj),
        )
        .addWithProps(
            Cx,
            Rj((e) => e.battle_modifiers.shared.Modifiers('resId'), Oj),
        )
        .addWithProps(
            vm,
            Rj((e) => e.hangar.shared.ModeState('resId'), Oj),
        )
        .addWithProps(
            Pn,
            Rj((e) => e.common.shared.DynamicEconomics('resId'), Oj),
        )
        .render(f.jsx(Vj, {})),
)
    .then(() => gn(document.getElementById('root')))
    .then(() => vn())
    .then(() => fn(!1));
