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
    y as I,
    p as j,
    O as k,
    P as S,
    Q as P,
    S as E,
    T as M,
    z as D,
    U as L,
    V as T,
    W as A,
    X as B,
} from '../../../chunks/vendor.js';
import {
    a as V,
    a8 as O,
    a9 as z,
    aa as H,
    ab as U,
    i as q,
    ac as F,
    ad as Z,
    ae as W,
    af as G,
    ag as X,
    ah as $,
    ai as K,
    aj as Y,
    ak as Q,
    al as J,
    am as ee,
    o as te,
    an as ae,
    ao as ne,
    n as se,
    ap as re,
    aq as oe,
    ar as ie,
    as as le,
    at as ce,
    au as de,
    b as ue,
    av as me,
    m as pe,
    aw as _e,
    ax as he,
    ay as ge,
    N as ve,
    az as fe,
    aA as be,
    aB as xe,
    aC as ye,
    aD as Ce,
    aE as we,
    aF as Ne,
    aG as Ie,
    aH as je,
    r as ke,
    aI as Se,
    aJ as Pe,
    aK as Ee,
    aL as Me,
    aM as De,
    aN as Le,
    aO as Te,
    aP as Ae,
    K as Be,
    B as Ve,
    t as Re,
    aQ as Oe,
    aR as ze,
    aS as He,
    aT as Ue,
    aU as qe,
    aV as Fe,
    V as Ze,
    aW as We,
    aX as Ge,
    aY as Xe,
    aZ as $e,
    a_ as Ke,
    a$ as Ye,
    b0 as Qe,
    b1 as Je,
    b2 as et,
    b3 as tt,
    b4 as at,
    b5 as nt,
    b6 as st,
    b7 as rt,
    b8 as ot,
    g as it,
    b9 as lt,
    ba as ct,
    bb as dt,
    bc as ut,
    bd as mt,
    be as pt,
    bf as _t,
    I as ht,
    bg as gt,
    J as vt,
    bh as ft,
    bi as bt,
    bj as xt,
    bk as yt,
    bl as Ct,
    bm as wt,
    bn as Nt,
    bo as It,
    bp as jt,
    bq as kt,
    br as St,
    bs as Pt,
    bt as Et,
    bu as Mt,
    bv as Dt,
    bw as Lt,
    bx as Tt,
    by as At,
    bz as Bt,
    bA as Vt,
    bB as Rt,
    bC as Ot,
    bD as zt,
    bE as Ht,
    bF as Ut,
    bG as qt,
    bH as Ft,
    bI as Zt,
    bJ as Wt,
    bK as Gt,
    bL as Xt,
    bM as $t,
    u as Kt,
    bN as Yt,
    bO as Qt,
    bP as Jt,
    bQ as ea,
    bR as ta,
    bS as aa,
    bT as na,
    bU as sa,
    bV as ra,
    bW as oa,
    bX as ia,
    f as la,
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
    a4 as wa,
    ca as Na,
    cb as Ia,
    cc as ja,
    cd as ka,
    ce as Sa,
    cf as Pa,
    cg as Ea,
    ch as Ma,
    ci as Da,
    cj as La,
    ck as Ta,
    cl as Aa,
    cm as Ba,
    cn as Va,
    co as Ra,
    cp as Oa,
    cq as za,
    cr as Ha,
    cs as Ua,
    ct as qa,
    cu as Fa,
    cv as Za,
    _ as Wa,
    cw as Ga,
    cx as Xa,
    cy as $a,
    cz as Ka,
    cA as Ya,
    G as Qa,
    F as Ja,
    cB as en,
    cC as tn,
    cD as an,
    cE as nn,
    a5 as sn,
    cF as rn,
    cG as on,
    cH as ln,
    cI as cn,
    cJ as dn,
    cK as un,
    cL as mn,
    cM as pn,
    cN as _n,
    cO as hn,
    cP as gn,
    cQ as vn,
    cR as fn,
    cS as bn,
    T as xn,
    a1 as yn,
    a2 as Cn,
    cT as wn,
    cU as Nn,
    cV as In,
    cW as jn,
    cX as kn,
    a6 as Sn,
    a7 as Pn,
    cY as En,
    cZ as Mn,
} from '../../../chunks/lib.js';
import { c as Dn, g as Ln, a as Tn } from '../../../chunks/readResource.js';
import { F as An } from '../../../chunks/fun_random_progression_state.js';
const [Bn, Vn] = V('HeroTankModelProvider')((e) => {
        const { observableModel: t } = e;
        return { ...t.primitives(['name', 'type']), heroTankMarker: t.object('heroTankMarker') };
    }, O),
    [Rn, On] = V()(
        ({ observableModel: e }) => ({
            menuItems: e.arrayClone('menuItems'),
            ...e.primitives(['modeName', 'modeId', 'hasTechTreeEvents', 'clanEmblem']),
        }),
        ({ externalModel: e }) => ({ navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate') }),
    ),
    [zn, Hn] = V('SpaceInteractionModel')(O, ({ externalModel: e }) => ({
        sceneWrapper: {
            onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
            onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
        },
    })),
    [Un, qn, Fn] = V()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled', 'isInfiniteAmmo']),
    })),
    Zn = () => a.useContext(Fn.Context),
    Wn = 2,
    Gn = 'role',
    Xn = 'type',
    $n = 'tier',
    Kn = 'nations',
    Yn = {
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
    Qn = {
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
    Jn = 'isCommonProgression',
    es = [U.assault, U.universal, U.break, U.sniper, U.support, U.wheeled],
    ts = ['bonus', 'favorite', 'premium', 'elite', 'crystals', 'canInstallAttachments', 'own3DStyle', 'rented'],
    as = [H.lightTank, H.mediumTank, H.heavyTank, H['AT-SPG'], H.SPG],
    ns = z(1, 12, q),
    ss = 'vehicle_types',
    rs = 'nations',
    os = 'levels',
    is = 'specials',
    ls = 'battle_pass',
    cs = { heavy_tank: G, medium_tank: W, light_tank: Z, at_spg: F };
function ds(e, t) {
    return e === Jn && t.status !== K.UNSUITABLE_TO_QUEUE && t.bpProgress < t.maxBpScore;
}
function us(e, t, a, n) {
    switch (t) {
        case 'elite':
            return e.includes('premium') || (n && n.elite && !a.premium);
        case 'premium':
            return a.premium || (e.includes('elite') && n && n.elite);
        case 'bonus':
            return n && n.bonusMultiplier >= 2;
        case 'favorite':
            return a.favorite;
        case 'crystals':
            return a.crystalEarning;
        case 'rented':
            return !0;
        case 'canInstallAttachments':
            return a.canInstallAttachments;
        case 'own3DStyle':
            return n && n.own3DStyle;
        case 'event':
        case 'funRandom':
            return a.isSuitableVehicle;
        default:
            return !1;
    }
}
const ms = {
    [os]: (e, t) => !e.levels || e.levels.includes(`level_${t.level}`),
    [rs]: (e, t) => !e.nations || e.nations.includes($(t.nationId)),
    [ss]: (e, t) => !e.vehicle_types || e.vehicle_types.includes(t.type),
};
function ps(e, t, a) {
    let n = !1;
    const s = e.specials ?? [];
    for (const r of s)
        if ('rented' !== r) {
            if (!us(s, r, t, a)) return !1;
        } else n = !0;
    if (!n && X(t)) return !1;
    if (a && e.battle_pass && e.battle_pass.length > 0) for (const r of e.battle_pass) if (!ds(r, a)) return !1;
    for (const r of Object.keys(e)) if (r in ms && !ms[r](e, t)) return !1;
    return ((e, t) => {
        const a = Y(t.role);
        let n = !1;
        for (const s of Object.keys(cs)) if (s in e && ((n = !0), e[s].some((e) => e.includes(a)))) return !0;
        return !n;
    })(e, t);
}
function _s(e, { shortName: t, fullName: a }) {
    const n = e.toLowerCase();
    return !(n.length > 0 && !t.toLowerCase().includes(n) && !a.toLowerCase().includes(n));
}
function hs(e, t, a) {
    const n = e[t] ?? [],
        s = { ...e };
    return ((s[t] = n.includes(a) ? n.filter((e) => e !== a) : [...n, a]), s[t].length > 0 || delete s[t], s);
}
function gs(e, t) {
    return 'regular' === t.type
        ? hs(e, t.field, t.value)
        : Object.keys(cs).reduce((e, a) => {
              const n = cs[a].find((e) => e.includes(t.role));
              return n
                  ? hs(e, a, ((r = n), 'at_spg' === (s = a) ? `role_ATSPG_${r}` : `role_${s[0].toUpperCase()}T_${r}`))
                  : e;
              var s, r;
          }, e);
}
function vs(e, t, a, n) {
    if (a.favorite !== n.favorite) return a.favorite ? -1 : 1;
    const s = e[$(a.nationId)] ?? 0,
        r = e[$(n.nationId)] ?? 0;
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
const [fs, bs] = V('FilterVehiclesProvider')(
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
                i = Q.structural(() => a(o.defaultFilters.get())),
                l = {
                    ...e.primitives(['carouselRowCount']),
                    filters: n.box(r, { deep: !1 }),
                    searchName: n.box((null == s ? void 0 : s[0]) ?? ''),
                    nations: e.arrayClone('nationsOrder'),
                };
            return {
                ...l,
                computes: {
                    hasFilters: Q.primitive(() => !J.structural(i(), l.filters.get()) || l.searchName.get().length > 0),
                    nations: () => l.nations.get(),
                    nationToIndex: Q.shallow(() => l.nations.get().reduce((e, t, a) => ((e[t] = a), e), {})),
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
                        t.filters.set(gs(t.filters.get(), e));
                    }),
                    carouselTypeChange: a.createCallback((e) => ({ rowCount: e }), 'onCarouselTypeChange'),
                }
            );
        },
    ),
    xs = 'disabled',
    ys = [H.lightTank, H.mediumTank, H.heavyTank, H['AT-SPG'], H.SPG].reduce((e, t, a) => ((e[t] = a), e), {}),
    [Cs, ws] = V('VehicleStatisticsProvider')(({ observableModel: e }) => {
        const t = e.dict('statistics'),
            a = Q.structural((e) => t.get(e));
        return { ids: Q.primitive(() => t.keys), get: a };
    }),
    [Ns, Is] = V('VehiclesProvider')(
        ({ observableModel: e }) => {
            const t = { vehicles: e.dictRef('vehicles') };
            return {
                get: Q.structural((e) => {
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
                    return { ...n, imageKey: ee(n.name) };
                }),
                has: Q.primitive((e) => Boolean(t.vehicles.get(e))),
                ids: Q.shallow(() => [...t.vehicles.keys.values()]),
                amount: Q.primitive(() => t.vehicles.length),
                list: Q.shallow(() => {
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
        O,
        { useRequires: () => ({ statistics: ws() }) },
    ),
    [js, ks] = V('MyVehiclesProvider')(
        (e) => {
            const t = e.requires.statistic.model.ids,
                a = Q.structural((a) => {
                    if (t().has(a)) return e.requires.vehicles.model.get(a);
                }),
                n = Q.shallow(() => {
                    const a = [];
                    for (const n of t().values()) {
                        const t = e.requires.vehicles.model.get(n);
                        t ? a.push(t) : console.warn(`No vehicle with id: ${n}`);
                    }
                    return a;
                });
            return { get: a, getAll: n, amount: Q.primitive(() => n().length), ids: t };
        },
        O,
        { useRequires: () => ({ vehicles: Is(), statistic: ws() }) },
    ),
    Ss = te.resolve('strings');
const Ps = ae(re + oe),
    Es = () => `${Date.now().toString(16)}_${Ps(3)}`;
function Ms(e, t, a = 1) {
    const n = ne(t, { count: a });
    return e.has(n) ? Ms(e, t, a + 1) : n;
}
function Ds(e = '', t = []) {
    return {
        title: '' !== e ? e : Ss.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: t,
    };
}
const Ls = (e) => ({ type: 'ok', value: e }),
    Ts = (e, t) => ({ type: 'error', error: { tag: e, msg: t } });
function As(e) {
    if ('ok' === e.type) return e.value;
}
const Bs = 'delete',
    Vs = 'import',
    Rs = o({ title: c(), createdAt: i(m(), u(), d(0)), modifiedAt: i(m(), u(), d(0)), list: l(i(m(), u())) }),
    Os = i(
        c(),
        p((e) => (e.length > 0 ? e : void 0)),
    ),
    [zs, Hs, { Context: Us }] = V('PlaylistsProvider')(
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
                i = Q.shallow(() => a.keys),
                l = Q.primitive(() => _(Os, s.selectedID.get())),
                c = Q.structural((e) => {
                    try {
                        const t = a.get(e);
                        if (!t) return Ls(void 0);
                        const n = _(Rs, JSON.parse(t)),
                            s = new Set();
                        for (const e of n.list)
                            if (ie[e]) {
                                const t = ie[e].find((e) => Boolean(o.myVehicles.get(e.toString())));
                                s.add(t ?? e);
                            } else s.add(e);
                        return Ls({ ...n, list: [...s.values()] });
                    } catch (t) {
                        return (console.error(`Error getting playlist with ${e} id`, t), Ts('PARSE_ERROR', String(t)));
                    }
                }),
                d = Q.shallow(() =>
                    le(i().values())
                        .map((e) => c(e))
                        .filter((e) => 'ok' === e.type && void 0 !== e.value)
                        .map((e) => e.value.title)
                        .reduce((e, t) => e.add(t), new Set()),
                ),
                u = Q.primitive((e) => {
                    const t = c(e);
                    if ('ok' !== t.type || void 0 === t.value) throw new Error(`Can't get playlist by id ${e}`);
                    return t.value;
                }),
                m = Q.structural((e) => {
                    const t = c(e);
                    if ('ok' === t.type && void 0 !== t.value) return { id: e, ...t.value };
                }),
                p = Q.shallow(() =>
                    le(i().values())
                        .map((e) => m(e))
                        .filter((e) => void 0 !== e)
                        .toArray()
                        .sort((e, t) => e.title.localeCompare(t.title))
                        .map((e) => e.id),
                ),
                h = Q.primitive(() => {
                    const e = l();
                    if (e) return m(e);
                }),
                g = Q.shallow(() => {
                    const t = e.filters.model.computes.nationToIndex();
                    return ce(e.myVehicles.model.getAll(), (e, a) => vs(t, ys, e, a));
                }),
                v = Q.primitive((e) => {
                    var t;
                    const a = m(e),
                        n = b();
                    if (void 0 === a || 0 === a.list.length) return;
                    const s = new Set(a.list);
                    for (let r = 0; r < n.length; r += 1) {
                        const e = Number(null == (t = n[r]) ? void 0 : t.id);
                        if (de(e) && s.has(e)) return r;
                    }
                }),
                f = Q.primitive(() => !1 === J.structural(r(), o.filters.get()) || o.searchName.get().length > 0),
                b = Q.shallow(() => {
                    const t = o.filters.get(),
                        a = g(),
                        n = o.searchName.get();
                    return a.filter((a) => {
                        if (!_s(n, a)) return !1;
                        const s = e.statistic.model.get(a.id);
                        return ps(t, a, s);
                    });
                }),
                x = Q.primitive((t) => {
                    var a;
                    return Boolean(null == (a = e.statistic.model.get(t)) ? void 0 : a.elite);
                }),
                y = Q.shallow((t) => {
                    const a = e.vehicles.model.get(t);
                    return null == a ? void 0 : a.imageKey;
                }),
                C = Q.primitive(() => b().length),
                w = Q.shallow(() => {
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
                filtered: b,
                filteredAmount: C,
                defaultFilters: r,
                hasFilters: f,
                vehicleImage: y,
                currentVehicles: w,
                ids: i,
                sortedIds: p,
                isElite: x,
                firstAddedVehicleIndexByPlaylistId: v,
            };
        },
        ({ model: e, externalModel: t }) => {
            const a = t.createCallback(
                (e) => ({ id: e.id, data: JSON.stringify(e.initial), skipRedirect: e.skipRedirect }),
                'onCreate',
            );
            return {
                filters: ue({
                    update: (t) => {
                        e.filters.set(gs(e.filters.get(), t));
                    },
                    reset: () => {
                        (e.filters.set(e.defaultFilters()), e.searchName.set(''));
                    },
                    search: (t) => e.searchName.set(t),
                    change: (t) => {
                        e.filters.set(gs(e.filters.get(), t));
                    },
                }),
                create: r((t) => {
                    const { id: n = Es(), vehicleIds: s = [], skipRedirect: r = !1 } = t ?? {};
                    a({ id: n, initial: Ds(Ms(e.titles(), 'playlists.defaultName'), s), skipRedirect: r });
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
                    r(() => ({ type: Vs, params: JSON.stringify({ titles: Array.from(e.titles().values()) }) })),
                    'openImportConfirm',
                ),
                openDeleteConfirm: t.createCallback(
                    (e, t) => ({ id: e, type: Bs, params: JSON.stringify({ title: t }) }),
                    'openDeleteConfirm',
                ),
            };
        },
        { useRequires: () => ({ vehicles: Is(), myVehicles: ks(), filters: bs(), statistic: ws() }) },
    ),
    qs = () => a.useContext(Us),
    Fs = 'pending',
    Zs = 'readyToSelect',
    Ws = xs,
    [Gs, Xs] = V('VehiclesInventoryProvider')(
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
                o = Q.shallow(() => {
                    const t = r.intCD.get();
                    return e.requires.vehicles.model.get(t);
                }),
                i = Q.shallow((t) => {
                    if (void 0 === t) return;
                    const a = r.intCD.get();
                    return -1 === a ? e.requires.vehicles.model.get(t) : e.requires.vehicles.model.get(a);
                }),
                l = Q.shallow(() => {
                    const t = r.intCD.get();
                    return e.requires.statistic.model.get(t);
                }),
                c = Q.primitive(() => -1 !== r.intCD.get()),
                d = Q.shallow((e) => me(e, (e) => u.get(String(e)))),
                u = e.requires.myVehicles.model,
                m = Q.structural(() => e.requires.vehicles.model.list().filter((e) => e.rent.isRented)),
                p = Q.primitive(() =>
                    e.requires.vehicles.model.list().some((t) => {
                        const a = e.requires.statistic.model.get(t.vehicleId);
                        if (a) return 'inPrebattle' === a.status;
                    }),
                ),
                _ = Q.primitive(() => {
                    const t = [...u.getAll()],
                        a = e.requires.filters.model.computes.nationToIndex();
                    return (t.sort((e, t) => vs(a, ys, e, t)), t);
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
                                    !1 !== o.has(t.id) && !!ps(n, t, e.requires.statistic.model.get(t.id)) && _s(s, t),
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
                        amount: Q.primitive(() => a.get().length),
                        list: () => a.get(),
                        ids: Q.shallow(() => a.get().map((e) => e.id)),
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
        { useRequires: () => ({ myVehicles: ks(), vehicles: Is(), statistic: ws(), filters: bs(), playlists: qs() }) },
    ),
    [$s, Ks, Ys] = V('SettingsProvider')(
        (e) => {
            const t = e.observableModel.primitives(['crewEnabled', 'ttcEnabled'], 'allVehicles'),
                a = Q.primitive(() => Boolean(e.requires.inventory.model.selectedVehicle()));
            return {
                ...t,
                computed: {
                    crewEnabled: Q.primitive(() => a() && t.crewEnabled.get()),
                    ttcEnabled: Q.primitive(() => a() && t.ttcEnabled.get()),
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
        { useRequires: () => ({ inventory: Xs() }) },
    );
function Qs() {
    return a.useContext(Ys.Context);
}
const Js = { boost: 'boost', reduce: 'reduce', none: 'none' };
function er(e, t, a) {
    const n = 100 / a,
        s = e - t * n;
    return (Math.max(0, Math.min(n, s)) / n) * 100;
}
function tr(e, t, a) {
    return Array.from({ length: a }, (n, s) => {
        const r = er(e, s, a);
        return { currentPercent: r, modifiedPercent: er(t, s, a) - r };
    });
}
function ar({ currentPercent: e, modifiedPercent: t }, a) {
    return a === Js.reduce ? [t, e] : [e, t];
}
function nr(e) {
    return pe(e, ({ value: e, name: t, tooltipID: a, ...n }) => ({
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
function sr(e, t) {
    const { key: a, name: n } = t,
        s = te.resolve('strings');
    return '' !== n && '' !== a
        ? s.readOr(`tank_setup.kpi.bonus.ttc.${a}.${n}`, () => s.readOrEmpty(`tank_setup.kpi.bonus.${a}.${n}`))
        : s.readOrEmpty(`menu.tank_params.${e}`);
}
const [rr, or] = V('TechParamsProvider')(
        ({ observableModel: e }) => {
            const t = { groups: e.arrayClone('groups') };
            return {
                computes: {
                    sectionParams: Q.structural((e) =>
                        pe(t.groups.get(), ({ id: t, indicator: a, isOpen: n, params: s, extraParams: r, ...o }) => {
                            const i = (function ({ currentPercent: e, modifiedPercent: t }) {
                                return t === e ? Js.none : t > e ? Js.boost : Js.reduce;
                            })(a);
                            return {
                                ...o,
                                type: t,
                                indicatorList: tr(...ar(a, i), e),
                                status: i,
                                opened: n,
                                params: nr(s),
                                extraParams: nr(r),
                            };
                        }),
                    ),
                },
            };
        },
        ({ externalModel: e }) => ({ selectGroup: e.createCallback((e) => ({ groupName: e }), 'onGroupClick') }),
    ),
    ir = 'emptySlot',
    lr = { height: 105, row: 3 },
    cr = { medium: { height: 136, row: 4 }, large: { height: 145, row: 5 }, extraLarge: { height: 183, row: 5 } },
    dr = 'top',
    ur = 'bottom',
    mr = 'both',
    pr = 'none',
    _r = (e, t) => (e || t ? (e ? (t ? pr : ur) : dr) : mr);
var hr = ((e) => (
    (e.None = 'none'),
    (e.Increase = 'increase'),
    (e.Decrease = 'decrease'),
    (e.Situational = 'situational'),
    e
))(hr || {});
const gr = {
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
    vr = te.resolve('strings'),
    fr = te.resolve('images'),
    br = te.resolve('aliases'),
    xr = te.resolve('intl');
function yr({ id: e, values: t, rootId: a, moduleInstalled: n, kpiBonusParams: s, tooltipId: r, className: o }) {
    const i = v.useMemo(() => ({ tooltipId: r, paramId: e }), [r, e]),
        l = _e({ resId: 0 !== a ? a : br.read((e) => e.hangar.shared.VehicleParams('resId')), args: i });
    return f.jsxs('div', {
        className: b(gr.base, n && gr.base__moduleInstalled, o),
        ...l,
        children: [
            f.jsx('div', {
                className: gr.valueContainer,
                children: t.map(({ value: e, state: t }, a) =>
                    f.jsxs(
                        v.Fragment,
                        {
                            children: [
                                a > 0 &&
                                    f.jsx('div', {
                                        className: gr.separator,
                                        children: vr.readOrEmpty('common.common.slash'),
                                    }),
                                f.jsx('div', {
                                    className: b(gr.value, gr[`value__${t}`]),
                                    children: xr.formatReal('woZeroDigits', e),
                                }),
                            ],
                        },
                        `${e}-${t}-${a}`,
                    ),
                ),
            }),
            f.jsx('div', {
                className: gr.icon,
                style: { backgroundImage: `url(${fr.readOrEmpty(`vehParams.small.${e}`)})` },
            }),
            f.jsx('div', { className: gr.description, children: sr(e, s) }),
        ],
    });
}
const Cr = 'DetailsContainer_b85372ff',
    wr = 'DetailsContainer_params_9bf7e9a4',
    Nr = 'DetailsContainer_separator_f28e38c',
    Ir = 'DetailsContainer_detail_141e9abe';
function jr(e, t) {
    return t !== hr.None && he(e, (e) => e.state === hr.None);
}
function kr({ params: e, rootId: t, extraParams: n, highlightType: s, className: r }) {
    return f.jsx('div', {
        className: b(Cr, r),
        children: f.jsxs('div', {
            className: wr,
            children: [
                pe(e, (e) =>
                    a.createElement(yr, {
                        ...e,
                        rootId: t,
                        key: e.id,
                        className: Ir,
                        moduleInstalled: jr(e.values, s),
                    }),
                ),
                n.length > 0 && f.jsx('div', { className: Nr }),
                pe(n, (e) =>
                    a.createElement(yr, {
                        ...e,
                        rootId: t,
                        key: e.id,
                        className: Ir,
                        moduleInstalled: jr(e.values, s),
                    }),
                ),
            ],
        }),
    });
}
function Sr(e, t) {
    const a = ge(e, (e) => e.currentPercent > 0) ?? 0,
        n = ge(t, (e) => e.currentPercent > 0) ?? 0,
        s = ge(e, (e) => e.modifiedPercent > 0) ?? 0,
        r = ge(t, (e) => e.modifiedPercent > 0) ?? a;
    return e.map((t, o) => {
        var i, l;
        const c = (null == (i = e[o]) ? void 0 : i.currentPercent) ?? 0,
            d = (null == (l = e[o]) ? void 0 : l.modifiedPercent) ?? 0,
            u = (function (e, t, a, n, s) {
                return n > s
                    ? e > s
                        ? (e - s) * Mr
                        : 0
                    : t > a
                      ? e > a
                          ? (e - a) * Mr
                          : 0
                      : t < a && e >= t
                        ? (a - e) * Mr
                        : 0;
            })(o, s, r, a, n);
        return {
            currentIndicator: Dr({ percent: c, delay: u }),
            boostIndicator: Dr({ percent: d, delay: u }),
            reduceIndicator: Dr({ delay: u }),
        };
    });
}
function Pr(e, t) {
    const a = ge(e, (e) => e.currentPercent > 0) ?? 0,
        n = ge(t, (e) => e.currentPercent > 0) ?? 0,
        s = ge(t, (e) => e.modifiedPercent > 0),
        r = ve(t, (e) => e.modifiedPercent > 0) ?? 0;
    return e.map((e, t) => {
        const o = e.currentPercent ?? 0,
            i = void 0 === s ? Math.abs(t - n) * Mr : s > a ? Math.max((s - t) * Mr, 0) : Math.max((t - r) * Mr, 0),
            l = (function (e, t, a, n) {
                return void 0 === a ? 0 : t < a ? (e < a ? (a - e) * Mr : 0) : t > n && e > n ? (e - n) * Mr : 0;
            })(t, a, s, r);
        return {
            currentIndicator: Dr({ percent: o, delay: i }),
            boostIndicator: Dr({ delay: l }),
            reduceIndicator: Dr({ delay: l }),
        };
    });
}
function Er(e, t) {
    if (0 === t.length)
        return e.map((e, t) => ({
            currentIndicator: Dr({ percent: null == e ? void 0 : e.currentPercent, delay: t * Mr }),
            boostIndicator: Dr(),
            reduceIndicator: Dr({ percent: null == e ? void 0 : e.modifiedPercent, delay: t * Mr }),
        }));
    const a = ve(e, (e) => e.modifiedPercent > 0) ?? 0,
        n = (() => {
            const a = ge(t, (e) => e.currentPercent > 0) ?? 0,
                n = ge(t, (e) => e.modifiedPercent > 0) ?? a;
            return n > (ge(e, (e) => e.modifiedPercent > 0) ?? 0) ? n : (ve(t, (e) => e.modifiedPercent > 0) ?? a);
        })();
    return e.map((t, s) => {
        var r, o;
        const i = (null == (r = e[s]) ? void 0 : r.currentPercent) ?? 0,
            l = (null == (o = e[s]) ? void 0 : o.modifiedPercent) ?? 0,
            c = (function (e, t, a) {
                return t > a ? (e > a ? (e - a) * Mr : 0) : t < a && e < a ? (a - e) * Mr : 0;
            })(s, a, n);
        return {
            currentIndicator: Dr({ percent: i, delay: c }),
            boostIndicator: Dr({ delay: c }),
            reduceIndicator: Dr({ percent: l, delay: c }),
        };
    });
}
const Mr = 100,
    Dr = (e = {}) => ({ percent: e.percent ?? 0, delay: e.delay ?? 0 });
const Lr = {
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
    Tr = (e, t) => Mr * ((t - e) / 100);
function Ar({ className: e, currentIndicator: t, reduceIndicator: a, boostIndicator: n }) {
    const s = fe({ currentIndicator: t.percent, reduceIndicator: a.percent, boostIndicator: n.percent }) ?? {
            currentIndicator: 0,
            reduceIndicator: 0,
            boostIndicator: 0,
        },
        r = s.boostIndicator > n.percent,
        o = s.boostIndicator < n.percent,
        i = x({
            from: { width: `${s.reduceIndicator}%` },
            to: { width: `${a.percent}%` },
            delay: r ? a.delay + Math.abs(Tr(s.boostIndicator, n.percent)) : a.delay,
            config: { duration: s.boostIndicator === n.percent ? Mr : Math.abs(Tr(s.reduceIndicator, a.percent)) },
        }),
        l = x({
            from: { width: `${s.boostIndicator}%` },
            to: { width: `${n.percent}%` },
            delay: o ? n.delay + Math.abs(Tr(s.reduceIndicator, a.percent)) : n.delay,
            config: { duration: s.reduceIndicator === a.percent ? Mr : Math.abs(Tr(s.boostIndicator, n.percent)) },
        }),
        c = x({
            from: { width: `${s.currentIndicator}%` },
            to: { width: `${t.percent}%` },
            delay: r ? t.delay + Math.abs(Tr(s.boostIndicator, n.percent)) : t.delay,
            config: { duration: s.boostIndicator === n.percent ? Mr : Math.abs(Tr(s.currentIndicator, t.percent)) },
        });
    return f.jsxs('div', {
        className: b(Lr.base, e),
        children: [
            f.jsx('div', { className: Lr.baseIndicator }),
            f.jsxs('div', {
                className: Lr.filledIndicatorsContainer,
                children: [
                    f.jsx(y.div, { className: Lr.currentIndicator, style: c }),
                    f.jsx(y.div, { className: Lr.reduceIndicator, style: i }),
                    f.jsx(y.div, { className: Lr.boostIndicator, style: l }),
                ],
            }),
            f.jsxs('div', {
                className: Lr.layersContainer,
                children: [
                    f.jsx(y.div, { className: Lr.currentIndicatorLayer, style: c }),
                    f.jsx(y.div, { className: Lr.reduceIndicatorLayer, style: i }),
                    f.jsx(y.div, { className: Lr.boostIndicatorLayer, style: l }),
                ],
            }),
        ],
    });
}
const Br = 'IndicatorContainer_f7506048',
    Vr = 'IndicatorContainer_indicator_b72c4e50';
function Rr({ indicatorList: e, status: t }) {
    const n = (function (e, t, a) {
        return a === Js.boost ? Sr(t, e) : a === Js.reduce ? Er(t, e) : Pr(t, e);
    })(fe(e) ?? [], e, t);
    return f.jsx('div', {
        className: Br,
        children: n.map((e, t) =>
            a.createElement(Ar, { ...e, key: `${t}-${e.currentIndicator}-${e.currentIndicator}`, className: Vr }),
        ),
    });
}
const Or = 'ParamsType_d8788f0e',
    zr = 'ParamsType_icon_5f8d4ad',
    Hr = 'ParamsType_type_cdb8f019',
    Ur = {
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
function qr({ type: e }) {
    const t = te.resolve('strings'),
        a = Ur[e];
    if (a)
        return f.jsxs('div', {
            className: Or,
            children: [
                f.jsx(a, { className: zr }),
                f.jsx('div', { className: Hr, children: t.readOrEmpty(`menu.tank_params.${e}`) }),
            ],
        });
    console.error(`Unknown ttc param ${e}`);
}
const Fr = 'Section_5872c61',
    Zr = 'Section_container_5872c61',
    Wr = 'Section_header_53353a5a',
    Gr = 'Section_detailsContainer_41624a97',
    Xr = 'Section_arrow_931be12',
    $r = 'Section_arrow__opened_9ccaa82',
    Kr = te.resolve('aliases'),
    Yr = C(function ({
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
            { api: p } = be(),
            _ = xe(),
            { controls: h, rootId: g } = or();
        ye(() => clearTimeout(m.current));
        const x = v.useMemo(() => ({ tooltipId: l, paramId: a, extendedTooltip: !0 }), [a, l]),
            y = _e({ resId: 0 !== g ? g : Kr.read((e) => e.hangar.shared.VehicleParams('resId')), args: x });
        return f.jsx('div', {
            className: b(Fr, s),
            children: f.jsxs(Ce, {
                opened: d,
                children: [
                    f.jsx(Ce.Summary, {
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
                            className: Zr,
                            ...y,
                            children: [
                                f.jsxs('div', {
                                    className: Wr,
                                    children: [f.jsx(qr, { type: a }), f.jsx(Ce.Arrow, { className: b(Xr, d && $r) })],
                                }),
                                f.jsx(Rr, { indicatorList: e, status: t }),
                            ],
                        }),
                    }),
                    f.jsx(Ce.AnimatedDetails, {
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
                        children: f.jsx(kr, { ...c, rootId: g, params: o, extraParams: i, className: Gr }),
                    }),
                ],
            }),
        });
    }),
    Qr = {
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
    Jr = C(function ({ indicatorAmount: e, classNames: t }) {
        const { model: n } = or(),
            { api: s } = be(),
            [r, o] = we(s);
        return f.jsxs(f.Fragment, {
            children: [
                f.jsx(Ne, {
                    classNames: {
                        wrapper: Qr.scrollWrapper,
                        content: b(Qr.scrollContent, Qr[`scrollContent__${_r(r, o)}`]),
                    },
                    children: f.jsx('div', {
                        className: Qr.sections,
                        children: n.computes
                            .sectionParams(e)
                            .map((e) =>
                                a.createElement(Yr, { ...e, key: e.type, className: Qr.section, classNames: t }),
                            ),
                    }),
                }),
                f.jsx(Ie, { classNames: { base: Qr.verticalBar } }),
            ],
        });
    }),
    eo = C(function ({ indicatorAmount: e = 10, className: t, classNames: n }) {
        const { model: s } = or(),
            r = xe(),
            o = s.computes
                .sectionParams(e)
                .map(({ indicatorList: e }) => e.map((e) => Object.values(e).join(':')).join('-'))
                .join('_');
        return (
            a.useEffect(() => {
                r.play('animation', { target: 'vehicle-ttc-section:accordion-summary' });
            }, [r, o]),
            f.jsx('div', {
                className: b(Qr.base, t),
                children: f.jsx(je, { children: f.jsx(Jr, { indicatorAmount: e, classNames: n }) }),
            })
        );
    });
var to = ((e) => (
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
    ))(to || {}),
    ao = ((e) => (
        (e.Visible = 'visible'),
        (e.Hidden = 'hidden'),
        (e.NotSuitableVehicle = 'notSuitableVehicle'),
        (e.NoDataAtAll = 'noDataAtAll'),
        e
    ))(ao || {}),
    no = ((e) => (
        (e[(e.NoData = 0)] = 'NoData'),
        (e[(e.Normal = 1)] = 'Normal'),
        (e[(e.Linked = 2)] = 'Linked'),
        (e[(e.Combined = 3)] = 'Combined'),
        e
    ))(no || {}),
    so = ((e) => ((e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7'), e))(so || {}),
    ro = ((e) => ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'), e))(ro || {});
const [oo, io] = V('OptionalDevicesAssistantModel')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives(['state']),
                    selectedPreset: e.object('selectedPreset'),
                    optionalDevicesAssistantPresets: e.arrayClone('optionalDevicesAssistantPresets'),
                },
                a = () =>
                    pe(t.optionalDevicesAssistantPresets.get(), (e) => ({
                        ...e,
                        optionalDevicesAssistantItems: pe(e.optionalDevicesAssistantItems, (e) => ({
                            ...e,
                            items: pe(e.items, q),
                        })),
                    })),
                n = (e) =>
                    ke(
                        t.optionalDevicesAssistantPresets.get(),
                        (t, a) => {
                            if (a.presetType.mType === e) {
                                const e = pe(a.optionalDevicesAssistantItems, (e) => ({ ...e, items: pe(e.items, q) }));
                                t.push(...e);
                            }
                            return t;
                        },
                        [],
                    ),
                s = Q.primitive(() => n(1).sort((e, t) => t.popularity - e.popularity)),
                r = Q.primitive(() => n(0).sort((e, t) => t.popularity - e.popularity));
            return {
                ...t,
                computes: {
                    modeType: () => {
                        var e;
                        const t = ro.Common || ro.Legendary;
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
    lo = 'PopularLoadouts_905d92af',
    co = 'PopularLoadouts_base__legendary_44c73d25',
    uo = 'PopularLoadouts_lipsIcon_94b94918',
    mo = 'PopularLoadouts_base__linked_44c73d25',
    po = 'PopularLoadouts_lips_f8140539',
    _o = 'PopularLoadouts_base__noDataLegendary_44c73d25',
    ho = 'PopularLoadouts_row_empty_79f784c5',
    go = 'PopularLoadouts_noDataLegendary_8871a45c',
    vo = 'PopularLoadouts_noData_44c73d25',
    fo = 'PopularLoadouts_vehicleNotAvailable_6aaecb23',
    bo = 'PopularLoadouts_noData_text_44c73d25',
    xo = 'PopularLoadouts_vehicleNotAvailable_text_f6a0ffe8',
    yo = 'PopularLoadouts_scrollWrapper_f6e40aea',
    Co = 'PopularLoadouts_scroll_5547fb14',
    wo = 'PopularLoadouts_verticalBar_4b7df3ca',
    No = 'PopularLoadouts_background_59528a5b',
    Io = 'PopularLoadouts_onslaughtBackground_87fd615d',
    jo = 'PopularLoadouts_backgroundWrapper_ceadd975',
    ko = 'PopularLoadouts_backgroundWrapper__noData_577b30c5',
    So = 'PopularLoadouts_border_bb3c99b0',
    Po = 'PopularLoadouts_container_7ca114a3',
    Eo = 'PopularLoadouts_row_41e986f6',
    Mo = 'PopularLoadouts_row_images_11958d34',
    Do = 'PopularLoadouts_row_images__hovered_6d465f9f',
    Lo = 'PopularLoadouts_row_image_44c73d25',
    To = 'PopularLoadouts_row_emptySlot_19879be4',
    Ao = 'PopularLoadouts_popularity_85b17be2',
    Bo = 'PopularLoadouts_popularity__visible_99ebbe75',
    Vo = 'PopularLoadouts_lipsWrapper_f6e40aea',
    Ro = 'PopularLoadouts_footer_e8f21254',
    Oo = 'PopularLoadouts_footer_wrapper_2b5337f0',
    zo = 'PopularLoadouts_footer_wrapper_title_ddd0fc04',
    Ho = 'PopularLoadouts_footer_wrapper_pagination_f70ced5f',
    Uo = 'PopularLoadouts_dot1_859b9d81',
    qo = 'PopularLoadouts_dot2_290c1eaf',
    Fo = 'PopularLoadouts_dot1__active_44c73d25',
    Zo = 'PopularLoadouts_dot2__active_22013c6c',
    Wo = 'PopularLoadouts_footer_arrowWrapper_2b51cfb1',
    Go = 'PopularLoadouts_footer_arrowLeft_44c73d25',
    Xo = 'PopularLoadouts_footer_arrowRight_f495386';
function $o(e) {
    return (t = e) !== to.Empty && t in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
        ? `tanksetup.popular_loadouts.optional_devices.${e}`
        : null;
    var t;
}
function Ko(e) {
    return Number.isInteger(e) ? `${e}` : e.toFixed(2);
}
function Yo({ popularity: e, optionalDevice: t, isHovered: n }) {
    const s = a.useMemo(() => t.map($o).concat(new Array(3).fill(null)).slice(0, 3), [t]),
        r = 0 === t.length;
    return f.jsxs('div', {
        className: b(Eo, r && ho),
        children: [
            f.jsx('div', {
                className: b(Ao, n && Bo),
                children: f.jsx(Se, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: Ko(e) } }),
            }),
            f.jsx('div', {
                className: b(Mo, n && Do),
                children: s.map((e, t) =>
                    e ? f.jsx(Pe, { className: Lo, path: e }, t) : f.jsx('div', { className: To }, t),
                ),
            }),
        ],
    });
}
const Qo = te.resolve('aliases'),
    Jo = te.resolve('views'),
    ei = te.resolve('strings'),
    ti = C(function ({
        notSuitableVehicle: e,
        noData: t,
        combined: n,
        noDataLegendary: s,
        currentPage: r,
        optionalDevicesResultType: o,
        setCurrentPage: i,
    }) {
        const l = xe(),
            [c, d] = a.useState(!1),
            { model: u, controls: m } = io(),
            p = u.computes.modeType() === so.Comp7,
            _ = c && !n,
            h = u.computes.sourceVehicleCompDescrForPreset(r),
            g = u.computes.sortedCommonItems(),
            v = u.computes.sortedLegendaryItems(),
            x = r === ro.Common ? g : v,
            y = a.useMemo(() => Array.from({ length: 3 }, (e, t) => x[t] ?? { popularity: 0, items: [] }), [x]),
            C = Ee({
                resId: Qo.read((e) => e.hangar.shared.OptionalDevicesAssistant('resId')),
                contentId: Jo.read((e) => e.lobby.tanksetup.tooltips.PopularLoadoutsTooltip('resId')),
                args: { sourceVehicleCompDescr: h, optionalDevicesResultType: o },
            }),
            w =
                r === ro.Common
                    ? ei.readOrEmpty('tank_setup.popularLoadouts.common')
                    : ei.readOrEmpty('tank_setup.popularLoadouts.legendary');
        function N() {
            const e = r === ro.Common ? ro.Legendary : ro.Common;
            (i(e), m.changePreset(e));
        }
        if (e)
            return f.jsx('div', {
                className: fo,
                children: f.jsx('div', {
                    className: xo,
                    children: ei.readOrEmpty('tank_setup.popularLoadouts.vehicleNotAvailable'),
                }),
            });
        if (t)
            return f.jsx('div', {
                className: vo,
                children: f.jsx('div', {
                    className: bo,
                    children: ei.readOrEmpty('tank_setup.popularLoadouts.noData'),
                }),
            });
        function I(e) {
            (l.play('click', { target: 'loadout:popular-loadouts-content:arrow-wrapper', original: e }), N());
        }
        function j(e) {
            l.play('mouse-enter', { target: 'loadout:popular-loadouts-content:arrow-wrapper', original: e });
        }
        return f.jsxs(f.Fragment, {
            children: [
                f.jsx('div', { className: So }),
                s &&
                    f.jsx('div', {
                        className: go,
                        children: ei.readOrEmpty('tank_setup.popularLoadouts.noDataLegendary'),
                    }),
                f.jsx('div', { className: No }),
                p && f.jsx('div', { className: Io }),
                f.jsx('div', {
                    className: yo,
                    children: f.jsxs(je, {
                        children: [
                            f.jsx(Ne, {
                                className: Co,
                                children: f.jsx('div', {
                                    className: Po,
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
                                            Yo,
                                            { popularity: e.popularity, optionalDevice: e.items, isHovered: _ },
                                            t,
                                        ),
                                    ),
                                }),
                            }),
                            f.jsx(Ie, { classNames: { base: wo } }),
                        ],
                    }),
                }),
                f.jsx('div', { className: So }),
                f.jsx('div', { className: po }),
                f.jsxs('div', {
                    className: Ro,
                    children: [
                        f.jsx('div', {
                            className: Wo,
                            onMouseEnter: j,
                            onClick: I,
                            children: f.jsx('div', { className: Go, onClick: N }),
                        }),
                        f.jsxs('div', {
                            className: Oo,
                            children: [
                                f.jsxs('div', {
                                    ...C,
                                    className: Vo,
                                    children: [
                                        f.jsx('div', { className: uo }),
                                        f.jsx('div', { className: zo, children: w }),
                                    ],
                                }),
                                f.jsxs('div', {
                                    className: Ho,
                                    children: [
                                        f.jsx('div', { className: b(Uo, 0 === r && Fo) }),
                                        f.jsx('div', { className: b(qo, 1 === r && Zo) }),
                                    ],
                                }),
                            ],
                        }),
                        f.jsx('div', {
                            className: Wo,
                            onMouseEnter: j,
                            onClick: I,
                            children: f.jsx('div', { className: Xo, onClick: N }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ai = C(function () {
        const { model: e } = io(),
            [t, n] = a.useState(e.selectedPreset.get().mType || ro.Common),
            s = e.computes.optionalDevicesResultTypeForPreset(t),
            r = s === no.Linked,
            o = s === no.Combined,
            i = r || o,
            l = s === no.NoData && ro.Legendary,
            c = e.state.get() === ao.NoDataAtAll,
            d = e.state.get() === ao.NotSuitableVehicle;
        return f.jsxs('div', {
            className: b(lo, t === ro.Legendary && co, i && mo, l && _o),
            children: [
                f.jsx('div', { className: b(jo, (c || d) && ko) }),
                f.jsx(ti, {
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
    ni = 'EquipmentAssistant_c5998863',
    si = C(function ({ className: e }) {
        const { model: t } = io(),
            a = t.state.get() === ao.Hidden;
        return f.jsx('div', {
            className: b(ni, e),
            'data-test-id': 'equipmentAssistant',
            children: !a && f.jsx(ai, {}),
        });
    }),
    ri = 'TankInfo_5a43ab26',
    oi = 'TankInfo_ttc_b7c2d1d7',
    ii = 'TankInfo_techParams_3f23a8c3',
    li = 'TankInfo_text_3d2affa7',
    ci = 'TankInfo_equipmentAssistant_6633e061',
    di = 'TankInfo_vehicleInfo_6633e061',
    ui = 'TankInfo_summary_1066f4ee',
    mi = 'TankInfo_accordionDetails_e30a5dd6',
    pi = te.resolve('aliases'),
    _i = Me('LoadoutScreenTankInfo'),
    hi = { summary: ui, accordionDetails: mi },
    gi = C(function ({ rootId: e, className: t, children: a }) {
        const n = Xs().model.selectedVehicle(),
            s = Xs().model.selectedVehicleStatistics();
        if (n && s)
            return f.jsxs(_i, {
                className: b(ri, t),
                children: [
                    f.jsxs(De, {
                        className: di,
                        children: [
                            f.jsx(De.Level, { className: li, value: n.level }),
                            Le(n.type) && f.jsx(De.Type, { type: n.type, premium: s.elite }),
                            f.jsx(De.Name, { className: li, children: n.shortName }),
                        ],
                    }),
                    f.jsx('div', {
                        className: oi,
                        children: f.jsx(rr, {
                            options: { rootId: e ?? pi.read((e) => e.hangar.shared.VehicleParams('resId')) },
                            children: f.jsx(eo, { className: ii, classNames: hi }),
                        }),
                    }),
                    a,
                ],
            });
    });
function vi({ className: e }) {
    const t = pi.read((e) => e.hangar.shared.OptionalDevicesAssistant('resId'));
    return f.jsx(oo, { options: { rootId: t }, children: f.jsx(si, { className: b(ci, e) }) });
}
const fi = C(function ({ className: e }) {
        const t = Te().location.startsWith('/hangar/loadout/equipment');
        return f.jsx(gi, { className: e, children: t && f.jsx(vi, {}) });
    }),
    bi = 'ScreenWrapper_39a2fe74',
    xi = 'ScreenWrapper_inner_f586f6da',
    yi = 'ScreenWrapper_content_42e9ccec',
    Ci = 'ScreenWrapper_info_b6387d23',
    wi = 'ScreenWrapper_flag_f17acc40',
    Ni = te.resolve('aliases'),
    Ii = Me('LoadoutScreenWrapper', bi),
    ji = Me('ScreenWrapperInfo', Ci),
    ki = Me('ScreenWrapperContent', yi);
const Si = a.createContext({ ttcEnabled: !1 });
function Pi({ classNames: e, children: t }) {
    const a = Xs().model.selectedVehicle();
    return f.jsxs(Ii, {
        className: null == e ? void 0 : e.base,
        children: [
            a && f.jsx(Pe, { className: b(wi, null == e ? void 0 : e.flag), path: `flags.c_600x450.${$(a.nationId)}` }),
            f.jsx('div', { className: xi, children: t }),
        ],
    });
}
const Ei = C(function ({ classNames: e, children: t }) {
        const n = (function () {
                const e = Xs().model.selectedVehicle(),
                    t = Qs(),
                    a = Ni.read((e) => e.hangar.shared.VehicleParams('resId')),
                    n = Ae(a);
                return Boolean(e) && (!t || t.model.computed.ttcEnabled()) && n;
            })(),
            s = a.useMemo(() => ({ ttcEnabled: n }), [n]);
        return f.jsx(Si.Provider, {
            value: s,
            children: f.jsxs(Pi, {
                classNames: { base: null == e ? void 0 : e.base, flag: null == e ? void 0 : e.flag },
                children: [
                    f.jsx(ki, { className: null == e ? void 0 : e.content, children: t }),
                    f.jsx(ji, {
                        className: null == e ? void 0 : e.info,
                        children: n && f.jsx(fi, { className: null == e ? void 0 : e.tankInfo }),
                    }),
                ],
            }),
        });
    }),
    Mi = -1,
    [Di, Li, { Context: Ti }] = V('ManageableVehiclePlaylistsModel')(
        (e) => {
            const t = {
                    ...e.observableModel.primitives({ intCD: 'vehicleId' }),
                    displayedVehicleId: n.box(Mi),
                    changesInPlaylistSelection: n.set(new Set()),
                },
                a = Q.shallow(() =>
                    e.requires.playlists.model.sortedIds().reduce((t, a) => {
                        const n = e.requires.playlists.model.byIdFull(a);
                        return (n ? t.push(n) : console.warn(`Missing playlist data for id = ${a}`), t);
                    }, []),
                ),
                r = Q.structural(() =>
                    a().map(({ id: e, title: a, list: n }) => {
                        const s = n.includes(t.displayedVehicleId.get());
                        return { id: e, title: a, selected: t.changesInPlaylistSelection.has(e) ? !s : s };
                    }, []),
                ),
                o = Q.primitive(() => 0 === r().length);
            return (
                e.cleanup(
                    s(() => {
                        (t.displayedVehicleId.get(), a(), h(() => t.changesInPlaylistSelection.clear()));
                    }),
                ),
                {
                    ...t,
                    computeds: {
                        playlistItems: r,
                        isVehiclePlaylistsEmpty: o,
                        vehicle: Q.shallow(() => {
                            const a = t.displayedVehicleId.get(),
                                n = e.requires.vehicles.model.get(a),
                                s = e.requires.vehicleStatistics.model.get(a);
                            if (void 0 !== n && void 0 !== s) return { ...n, elite: s.elite };
                        }),
                        empty: Q.primitive(() => t.vehicleId.get() === Mi),
                        sortedPlaylists: a,
                        hasChanges: Q.primitive(() => t.changesInPlaylistSelection.size > 0),
                        enabled: Q.primitive(() => e.requires.playlists.model.enabled.get()),
                    },
                }
            );
        },
        (e) => ({
            setDisplayedVehicleId: r((t) => {
                e.model.displayedVehicleId.set(t);
            }),
            reset: e.externalModel.createCallbackNoArgs('onReset'),
            selectVehicle: e.externalModel.createCallback((e) => ({ id: e }), 'onSelectVehicle'),
            goToCreatePlaylist: (t) => {
                e.requires.playlists.controls.create({ vehicleIds: t });
            },
            togglePlaylist: r((t) => {
                e.model.changesInPlaylistSelection.has(t)
                    ? e.model.changesInPlaylistSelection.delete(t)
                    : e.model.changesInPlaylistSelection.add(t);
            }),
            save: r(() => {
                const t = e.model.displayedVehicleId.get(),
                    a = e.requires.playlists.model.currentId();
                for (const n of e.model.changesInPlaylistSelection) {
                    const a = As(e.requires.playlists.model.byId(n));
                    if (!a) return void console.warn(`Missing playlist data for id = ${n}`);
                    (e.requires.playlists.controls.edit.sendModify(n, {
                        ...a,
                        modifiedAt: Date.now(),
                        list: a.list.includes(t) ? a.list.filter((e) => e !== t) : [...a.list, t],
                    }),
                        e.requires.playlists.controls.save(n));
                }
                e.requires.playlists.controls.select(a);
            }),
            cancel: r(() => {
                e.model.changesInPlaylistSelection.clear();
            }),
        }),
        { useRequires: () => ({ vehicles: Is(), playlists: Hs(), vehicleStatistics: ws() }) },
    ),
    Ai = () => a.useContext(Ti),
    Bi = (e) =>
        a.createElement(
            'svg',
            {
                width: 24,
                height: 24,
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                ...e,
            },
            a.createElement('path', {
                opacity: 0.8,
                d: 'M19 16H22V18H19V21H17V18H14V16H17V13H19V16Z',
                fill: '#0D0E10',
            }),
            a.createElement('path', {
                d: 'M19 15H22V17H19V20H17V17H14V15H17V12H19V15Z',
                fill: 'url(#paint0_radial_111851_505980)',
            }),
            a.createElement('path', {
                d: 'M19 15H22V17H19V20H17V17H14V15H17V12H19V15Z',
                fill: 'url(#pattern0_111851_505980)',
                fillOpacity: 0.8,
            }),
            a.createElement(
                'g',
                { opacity: 0.8 },
                a.createElement('path', {
                    d: 'M12 16H5V15H12V16ZM15 13H5V12H15V13ZM19 10H5V9H19V10ZM19 7H5V6H19V7Z',
                    fill: 'url(#paint1_radial_111851_505980)',
                }),
                a.createElement('path', {
                    d: 'M12 16H5V15H12V16ZM15 13H5V12H15V13ZM19 10H5V9H19V10ZM19 7H5V6H19V7Z',
                    fill: 'url(#pattern1_111851_505980)',
                    fillOpacity: 0.8,
                }),
            ),
            a.createElement('path', {
                opacity: 0.8,
                d: 'M12 17H5V16H12V17ZM15 14H5V13H15V14ZM19 11H5V10H19V11ZM19 8H5V7H19V8Z',
                fill: '#0D0E10',
            }),
            a.createElement(
                'defs',
                null,
                a.createElement(
                    'pattern',
                    { id: 'pattern0_111851_505980', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', { xlinkHref: '#image0_111851_505980', transform: 'scale(0.0208333)' }),
                ),
                a.createElement(
                    'pattern',
                    { id: 'pattern1_111851_505980', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', {
                        xlinkHref: '#image0_111851_505980',
                        transform: 'matrix(0.0208333 0 0 0.0291667 0 -0.2)',
                    }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_111851_505980',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(15.7778 13.6) rotate(90) scale(5.6 4.97778)',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint1_radial_111851_505980',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(12 14.0904) rotate(180) scale(8.90909 2.42616)',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement('image', {
                    id: 'image0_111851_505980',
                    width: 48,
                    height: 48,
                    preserveAspectRatio: 'none',
                    xlinkHref:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnBSURBVHgBbdrnbhzHEobhpTSiguWcYRswYMD3fwn+68swYFuAcg6kwuHb5DMuEaeBBXd6uqsrflVdy6M//vjjw/v37w8fPnw4bNu2Pqenp4eTk5PDrVu3Drdv317fe//27dv1vfXXr18/XL169fDq1atD48qVK2vN0dHRmu+59e/evTscHx+vuZcvX65n57S2dY0XL16s9a0z35qeG70zend05eiwXd0OVyK+Js42xUDMtQnDCdOhhPQXoZs3b+7PHdj7hGpf89G3r/fzjN7duHFjp0MoQji37ymzddeuXTucnJ4c3p6eK2frZQPhniMUwRa8efNmvYto763JEq2LIE11QOt715qYi0bfCT4t1ByrZtHeTUW2t+/9bbDe2ar1PiVtLWhzD03GEKEcShO0GgME6F17aC3B+8t9uEX7nz17ttb2iRZhllbP6PW9T3t6N63Xp+d3789dMtpLoNevX3/kd42INf/555/v/k8jfVr3ySef7G7R8+PHjxeN5r/88svd/XoX45TEVTDpvNY9f/788Omnn34UH7yAm3s+PTlX5paZI0bbmO9AwSOQxEUBR/MxF/H20Gx/uUTxEGOdk2DR+ueffw5Pnjw5fPfdd4cvvvhit3b7nIHR5hOqfQm2hD26cji+dnwOBjPy2yz6oUjIETMx0KdDIhzDrYnBtCrwBRqrFXwxzo97H732NMSc4Pee0uzr2fdciEdsbZgoZGAmDZFeAGMkRiNmvXV9RyslJHAjxppPo9FtvzHdkUJTWN+zqjPP3fw/K23cpgkEImbwR2NiNPThcpRAUzO/tIewzXsmLBfqr4CekCoPdM779+d7Ts/gdIM+Du2wNAYFaAQSYar59no30QNMYq5kCInEG2g1bx9rQjyCQS0KBDjbZRicDExf5uNTg6D0/0HuhGKa59MEI3AWhDS5DUFpnYIngp3zchY/Ee/DTC2OSKaKYIgj0JQO4LThYIFGo9ONJuYDB0x2VgKEZsWGZDcTa0PCZCFK3DDG1xfGXkDhTGqYkTlpdfonK8UQbCcQWEbPORNZGu0T/JgU/GJVXC2LiHQo0ifc5v/igv/LnB0cA61jVpZhMetm9oUm9rU2Bq29f//+4enTpwt+Q6pZYJYk7927t4Tv+45CMTzroJ9++umj2qcNhIjRGOgARVvvaUmAU0DWYNE7d+4sl+TLmCrX9Nzazvj555/X3uZnELPWZ599tsfnRnLBxm2YDwFDsMdw61mrv7Qv0SRs8/2Nxtdff3345ptv1jolTIyliATpGXNgHdSi1XcV8IUrbXtWhBL8TIDPbMgqXKP9MQDelMh8WjXbHBRTHnvf91nCqKNmcmuudVw4GqsanYEleJQJop4LEAAKdHiCKDf6AAUW4N/KDvtntRpjrNyccnyCyPUb11f9M9Fpgc+8oNg0y2qwJjElDFhULXInIGB+wqccIYYwy01ZFB+S2sw1KUDxud/s4CpJ2ziDrMHcMztOC4XfE/p2rV2U0FlUknRe5/B7Vat4pIjpzidvTnawEOxLCJnRARgwjxhtgj/+LxgJxkLNdRgXE1OgltW4JgDgXuD21s1bew7iHZLnUuJMDhKPAadngSZrzzUsR4hoEiTrcdGJPtN1+tu8IRmugL19bVcc6MyNor2QKlxuMd/ky5m0REJTrAKP50VcLhBPoNFVcb/+XSDW9PPmOyda7ibOoLhZWM57xQXN7fD333+vw3755ZfdHzN7GTHiVZNTY9NdVKUTZl05035XTZB49+7dte6rr75a54Xr1UBptPUpIYWqiF2IEqwMXI5oXedDwJXIvv322928Xjx48GCHRPUJOJzXTKggucws7FICzylABdpwpVQ0TjRsTXwkREDR3n///fcj1940npSvTWI0zUskWSVBYkjJQRAXfJaYLkfwvsfIzCMKNVUv91WC5AVlbi6Dr9aw0OYQuB4TmV0wQokYF2BubCpEbkfT4NSISZckCU5jC33M6d5Bu85QakM/sbMXcy1uI/hyh4XR030wYQ7icJ+ZoefNqTNYCK1G51Kesh4Ec9fOUJ5TkCp1A4Wiel5eMvnMBzTQkCElldk2pJ3ZWZi3MofPukrccD888QpxqCvYulW6eMHHEFMep80CdGqNdRRdfJcCGtOdBuR9dKWMZs0ziU+im/duQuo1Edh1dMuE7rcuLCrCadLGvLQruuac+onr2ZsCOmfeuliVwCzo5kYpXMg60M11t5pOIYDBf10V0xAovOxi4XjYPPuXsznWAUprmhdn81Kv2mWZ2eZ0PYVaButszAMRYurPP/9cgvz+++8LIkMlPgqd0tSPP/64GCtBaVhhpPVa4jEUJIuXy4Udd9WRm2ARDfEyW/a9v7jJ/Vd1Mt1vv/22BKh3mQAQQU0ziz+BFoMCnKYms83VD3U7Uzv13YXG/su9ongRn9HQPF4uPhu7zP/999/vks6LBs1MxiMCo6GU925hUGQWZNwMqsz8MtuLrVGuN5e7yyULqXIPl2dmoyFSOmxeMiJUrSTDOgz8TbQypuYBhqxriA3VrDK+kSdoFO8WILHDaUeRNV1CmZvAEyqZerYUlRLTUoAA0s3kNmusCbV8nxvbY9/m5g/nMattrtRQfzeveNPDn9fIaf7L3TXud7nLxu1mq18+UGRSpo4IWptExFfdBWhSpxgeN7Qe+TaIm+15TE/kUVabn3XYvOzLP+4Fs8kGsfZqVK2vf9OLStiaS2nGRVq7hBV0IqbvGizB5bjlo0ePFmMq2qw3G2WzubaXLCn4IvDRpsglmNaiOIjIX3/9tQ52rXMTi/E+NNB6rXOBhbCY4rOzWTBvdoFBHTt5AFxKYG/P1s1CU0kCDLZQaJqmxb/++uvSSChTHpC+Z6AKvHqZDx8+XN9/+OGH3Z9n2yUYjNFoRl/cEFCmp5TO1YG4eevmDhgpb9ZLq6Dkg4InLfk9LJPP1qMgZ4HmKiV0Hgg3f2pyGQISs+Onoo0GJqPTuToXdSW437xKcttt/qbVITPLlYln8mK2WdfHSAxgOvj1bwq01Fy0DDT94qmX2idGVcAzn7RmtnAofpvlLkFIOf+NwC/wDaUvf47Zies0GTCwQK5Kk73PrXp2efJjRy4rM09lyTnzp64Fx5dbd3o0MR8azcSCMMEklNkP5WbtmddQbjSLuPbNOmheZOQCWfrVmUJunJ1bfMxqYZs/berDwOOCs/cFap0LkKuJS3vS/SzDZ3XZ2izSobVUuCNGU5SzleDoQZ+FSGfPCXAO64HO4fwXGoRor08LlQkJkqbqEMz1kpgKU+aU8tOejoVSXBKcbczmipMUpPT+UPyMJlrap9A84Pj43GL/Ay7gs62Y7foXAAAAAElFTkSuQmCC',
                }),
            ),
        ),
    Vi = 'Buttons_937965ba',
    Ri = 'Buttons_right_268130b5',
    Oi = 'Buttons_button_aeef4019',
    zi = 'Buttons_button__create_61690fd8',
    Hi = 'Buttons_icon_378ba619',
    Ui = te.resolve('strings'),
    qi = C(function () {
        const { model: e, controls: t } = Li();
        return f.jsxs('div', {
            className: b(Vi),
            children: [
                f.jsx(Be, {
                    body: Ui.readOrEmpty('playlists.managaeble_playlists.buttons.create.tooltipBody'),
                    children: f.jsx(Ve, {
                        className: b(Oi, zi),
                        theme: Ve.themes.secondary,
                        size: Ve.sizes.extraSmall,
                        autoAlignContent: !1,
                        onClick: () => {
                            (t.goToCreatePlaylist([e.displayedVehicleId.get()]), t.reset());
                        },
                        children: f.jsx(Bi, { className: Hi }),
                    }),
                }),
                f.jsxs('div', {
                    className: Ri,
                    children: [
                        f.jsx(Ve, {
                            className: Oi,
                            theme: Ve.themes.secondary,
                            size: Ve.sizes.extraSmall,
                            onClick: () => {
                                (t.cancel(), t.reset());
                            },
                            children: f.jsx(Re, {
                                text: Ui.readOrEmpty('playlists.managaeble_playlists.buttons.cancel.title'),
                            }),
                        }),
                        f.jsx(Ve, {
                            className: Oi,
                            theme: Ve.themes.primary,
                            size: Ve.sizes.extraSmall,
                            disabled: !e.computeds.hasChanges(),
                            onClick: () => {
                                (t.save(), t.reset());
                            },
                            children: f.jsx(Re, {
                                text: Ui.readOrEmpty('playlists.managaeble_playlists.buttons.save.title'),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    Fi = 'Item_itemBackground_f5007fc6',
    Zi = 'Item_c5163bf',
    Wi = 'Item_checkbox_cfffba80',
    Gi = 'Item_item__checked_5f6fcc69',
    Xi = 'Item_check_a68580c8',
    $i = 'Item_checkboxLabel_885d0061',
    Ki = C(function ({ id: e, title: t, checked: a }) {
        const { controls: n } = Li();
        return f.jsxs('div', {
            className: b(Zi, a && Gi),
            children: [
                f.jsx('div', { className: Fi }),
                f.jsx(Oe, {
                    checked: a,
                    onCheckedChange: () => n.togglePlaylist(e),
                    size: ze.small,
                    className: Wi,
                    classNames: { label: $i, check: Xi },
                    children: f.jsx(Re, { text: t }),
                }),
            ],
        });
    }),
    Yi = 'List_152fbdf4',
    Qi = 'List_scrollWrapper_e69e8089',
    Ji = 'List_scrollContent_30662217',
    el = 'List_scrollbar_611defd3',
    tl = C(function () {
        const { model: e } = Li(),
            t = e.computeds.playlistItems();
        return f.jsxs('div', {
            className: Yi,
            children: [
                f.jsx(He, {
                    classNames: { wrapper: Qi, content: Ji },
                    children: pe(t, ({ id: e, title: t, selected: a }) =>
                        f.jsx(Ki, { id: e, title: t, checked: a }, e),
                    ),
                }),
                f.jsx(Ie, { classNames: { base: el } }),
            ],
        });
    }),
    al = 'Vehicle_name_f5f779f6',
    nl = 'Vehicle_level_c03ad304',
    sl = 'Vehicle_type_9905a21f',
    rl = C(function () {
        const { model: e } = Li(),
            t = e.computeds.vehicle();
        if (void 0 === t) return null;
        const a = Y(t.role);
        return f.jsxs(De, {
            children: [
                f.jsx(De.Level, { value: t.level, className: nl }),
                Le(t.type) &&
                    f.jsx(De.Type, { size: De.Type.sizes.x24x24, className: sl, type: t.type, premium: t.elite }),
                f.jsx(Re, { text: t.fullName, className: al }),
                a !== Ue && f.jsx(De.Role, { size: De.Role.sizes.x16x16, roleKey: a }),
            ],
        });
    }),
    ol = 'Styles_display_f2930fa3',
    il = 'Styles_header_dcb2494f',
    ll = 'Styles_body_504cd01f',
    cl = 'Styles_title_ece3f15e',
    dl = te.resolve('strings');
function ul({ className: e }) {
    return f.jsxs(qe.Header, {
        className: b(il, e),
        children: [
            f.jsx(qe.Title, {
                className: cl,
                children: f.jsx(Re, { text: dl.readOrEmpty('playlists.managaeble_playlists.header.title') }),
            }),
            f.jsx(rl, {}),
        ],
    });
}
function ml({ className: e }) {
    return f.jsxs(qe.Body, {
        className: b(ll, e),
        children: [f.jsx(qe.Divider, {}), f.jsx(je, { children: f.jsx(tl, {}) }), f.jsx(qe.Divider, {}), f.jsx(qi, {})],
    });
}
const pl = a.memo(function ({ vehicleId: e, tipSize: t, className: a, children: n, ...s }) {
        return f.jsxs(qe.Display, {
            ...s,
            className: b(ol, a),
            children: [f.jsx(qe.Tip, { size: t }), f.jsx(qe.Close, {}), n],
        });
    }),
    _l = C(({ children: e }) => {
        const t = Fe(),
            n = Ze(),
            s = We(),
            r = Ge(),
            { model: o, controls: i } = Li(),
            l = o.vehicleId.get(),
            c = o.displayedVehicleId.get(),
            [d, u] = a.useState(!1),
            [m, p] = a.useState(!1),
            _ = Xe(() => {
                (p(!0), t.open(), s.run(() => p(!1), $e));
            }),
            h = Xe(() => {
                (p(!0),
                    t.close(),
                    s.run(() => {
                        (u(!0),
                            i.setDisplayedVehicleId(Mi),
                            r.run(() => {
                                (p(!1), u(!1));
                            }));
                    }, $e));
            }),
            g = Xe(() => {
                (u(!0), i.setDisplayedVehicleId(l), r.run(() => u(!1)));
            });
        a.useEffect(() => {
            n || o.computeds.empty() || t.opened || (i.reset(), h());
        }, [t.opened]);
        const v = Xe(() => {
            r.isRunning ||
                (t.opened || s.isRunning || l === c
                    ? t.opened || l === Mi || c === Mi
                        ? t.opened && l === Mi && c !== Mi && h()
                        : s.isRunning || _()
                    : g());
        });
        return (
            a.useEffect(v, [v, l, c, t.opened, m, d]),
            ye(() => {
                o.computeds.empty() || i.reset();
            }),
            e
        );
    }),
    hl = (e) => `manageable-vehicle-playlists-model-${e}`,
    gl = C(function ({ children: e, position: t, freeSpaceRem: n, tipSize: s }) {
        const { model: r, controls: o } = Li(),
            i = r.displayedVehicleId.get(),
            l = Ke('rem'),
            c = Xe((e, { callerBounding: t }) => {
                const a = e.trigger.bounding.get();
                if (a && !Ye(a, t)) return (e.close(), !1);
            }),
            d = r.vehicleId.get(),
            u = r.computeds.isVehiclePlaylistsEmpty(),
            m = fe(d);
        return (
            a.useEffect(() => {
                u && m === Mi && d !== Mi && (o.goToCreatePlaylist([d]), o.reset());
            }, [m, d, u, o]),
            u
                ? null
                : f.jsx(qe, {
                      id: hl(i),
                      children: f.jsxs(_l, {
                          children: [
                              f.jsx(qe.Portal, {
                                  paddingsRem: l,
                                  position: t,
                                  freeSpaceRem: n,
                                  onBeforePositionChange: c,
                                  children:
                                      i !== Mi &&
                                      f.jsxs(
                                          pl,
                                          { vehicleId: i, tipSize: s, children: [f.jsx(ul, {}), f.jsx(ml, {})] },
                                          i,
                                      ),
                              }),
                              e,
                          ],
                      }),
                  })
        );
    });
function vl(e) {
    const t = Ai(),
        n = Boolean(t && t.model.computeds.enabled()),
        s = !t || t.model.computeds.isVehiclePlaylistsEmpty(),
        r = Xe(() => {
            n && !s && t.model.vehicleId.get() === e && t.controls.reset();
        });
    return a.useMemo(() => {
        if (n && !s) return { 'data-popover-trigger-id': hl(e), onMouseDown: r };
    }, [s, n, r, e]);
}
const fl = { buySlot: 'buySlot', buyTank: 'buyTank', restoreTank: 'restoreTank', rentTank: 'rentTank' },
    bl = {
        [fl.buySlot]: 'buy_slot',
        [fl.buyTank]: 'buy_vehicle_new',
        [fl.restoreTank]: 'restore_vehicle',
        [fl.rentTank]: 'wot_plus_slot',
    },
    xl = (e, t) => ({
        left: [...(t != Ws ? [fl.rentTank] : [])],
        right: [fl.buyTank, ...(e > 0 ? [fl.restoreTank] : []), fl.buySlot],
    }),
    yl = (e) => e in fl;
function Cl(e, t) {
    return a.useMemo(() => {
        if (!t) return { currentIndex: -1, currentPosition: -1 };
        const a = e.indexOf(t);
        return { currentIndex: a, currentPosition: a >= 0 ? a + 1 : -1 };
    }, [e, t]);
}
function wl(e, t, n, s, r, o) {
    const i = a.useRef(null);
    a.useLayoutEffect(() => {
        function a() {
            const a = e.getWrapperSize(),
                l = e.animationScroll.scrollPosition.get();
            if (!a) return;
            o && e.applyScroll(0, { immediate: !0 });
            const c = n - Je(1),
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
        return new Qe().add(e.events.on('resizeHandled', a)).add(e.events.on('recalculateContent', a)).dispose;
    }, [t, e, n, s, o, r]);
}
const Nl = {
    base: 'Content_7ccb81a0',
    disabledOverlay: 'Content_disabledOverlay_a8908196',
    base__disabled: 'Content_base__disabled_da09528a',
    base__selected: 'Content_base__selected_da09528a',
    base__empty: 'Content_base__empty_da09528a',
};
function Il({ children: e, selected: t, disabled: a, empty: n }) {
    return f.jsxs('div', {
        'data-name': 'Content',
        className: b(Nl.base, n && Nl.base__empty, t && Nl.base__selected, a && Nl.base__disabled),
        children: [e, a && f.jsx('div', { className: Nl.disabledOverlay })],
    });
}
const jl = {
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
function kl({ children: e, selected: t = !1, disabled: a = !1, active: n, className: s, ...r }) {
    const o = a || void 0 === r.onClick;
    return f.jsx('div', {
        ...r,
        'data-name': 'Slot',
        className: b(
            jl.base,
            n && jl.base__active,
            t && jl.base__selected,
            a && jl.base__disabled,
            o && jl.base__empty,
            jl.base__wrapper,
            s,
        ),
        children: f.jsxs('div', {
            className: jl.content,
            children: [
                f.jsx(Il, { selected: t, disabled: a, empty: o, children: e }),
                t && f.jsx('div', { className: b(jl.selected, jl.selected__border) }),
                f.jsx('div', { className: jl.selected }),
            ],
        }),
    });
}
const Sl = {
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
    Pl = { [Fs]: 'menu.tankCarousel.wotPlusSelectionPending', [Zs]: 'menu.tankCarousel.wotPlusSelectionAvailable' },
    El = C(function ({ type: e }) {
        const t = Xs(),
            a = t.model.slots.price.currency.get(),
            n = t.model.slots.price.value.get(),
            s = t.model.slots.free.get(),
            r = t.model.slots.recover.get(),
            o = t.model.slots.discount.get(),
            i = t.model.telecomRentStatus.get();
        if (e === fl.buySlot)
            return f.jsx('div', {
                className: Sl.currency,
                children: f.jsx(et, {
                    type: at.currency,
                    size: tt.extraSmall,
                    enabled: o,
                    classNames: { icon: Sl.discount },
                    children: f.jsx(nt, {
                        type: a,
                        size: tt.extraSmall,
                        reverse: !0,
                        classNames: { base: b(Sl.content, Sl.content__buySlot), icon: Sl.contentIcon },
                        children: n,
                    }),
                }),
            });
        if (e === fl.rentTank) {
            const e = Pl[i];
            return e ? f.jsx(Se, { className: Sl.text, upgradeLegacy: !0, path: e }) : null;
        }
        return f.jsxs('div', {
            className: Sl.content,
            children: [
                e === fl.buyTank &&
                    f.jsx(Se, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.buyTankEmptyCount',
                        params: { count: s },
                    }),
                e === fl.restoreTank &&
                    f.jsx(Se, {
                        upgradeLegacy: !0,
                        path: 'menu.tankCarousel.vehicleStates.restoreTankCount',
                        params: { count: r },
                    }),
            ],
        });
    });
function Ml({ type: e, width: t, height: n, doubleRow: s, className: r }) {
    const o = Xs(),
        i = xe(),
        l = o.model.slots.price.value.get(),
        c = o.model.slots.price.defaultValue.get(),
        d = o.model.slots.discount.get();
    o.model.telecomRentStatus.get();
    const u = te.resolve('strings'),
        m = st(`hangar.carousel.actionCards.x48x48.${e}`, `hangar.carousel.actionCards.x96x96.${e}`),
        p = rt({
            header: u.readOrEmpty(`tooltips.tanks_carousel.${bl[e]}.header`),
            body: u.readOrEmpty(`tooltips.tanks_carousel.${bl[e]}.body`),
        }),
        _ = ot(
            'actionSlotPrice',
            a.useMemo(() => [[l], [c]], [l, c]),
            a.useMemo(() => ({ disabled: !d }), [d]),
        ),
        h = d && bl[e] === bl.buySlot ? _ : p;
    return f.jsx(kl, {
        ...h,
        className: r,
        style: { width: `${t}px`, height: `${n}px` },
        'data-test-id': e,
        onClick: function (t) {
            (h.onClick(), i.play('click', { target: 'vehicle:action-cards', original: t }));
            const a = {
                [fl.buySlot]: o.controls.buySlot,
                [fl.buyTank]: o.controls.goBuyVehicle,
                [fl.restoreTank]: o.controls.goRecoverVehicle,
                [fl.rentTank]: o.controls.selectTelecomRentalVehicle,
            }[e];
            if ('function' != typeof a) return console.error(`Unknown action type ${e} in ${Ml.name} handleClick`);
            a();
        },
        onMouseEnter: function (e) {
            (h.onMouseEnter(e), i.play('mouse-enter', { target: 'vehicle:action-cards', original: e }));
        },
        children: f.jsxs('div', {
            className: b(Sl.wrapper, s && Sl.wrapper__double),
            children: [
                f.jsx(Pe, {
                    className: Sl.icon,
                    path: `hangar.carousel.actionCards.x32x32.${e}`,
                    adaptive: { medium: { path: m } },
                }),
                f.jsx('div', {
                    className: Sl.text,
                    children: f.jsx(Se, { path: `menu.tankCarousel.vehicleStates.${e}` }),
                }),
                f.jsx(El, { type: e }),
            ],
        }),
    });
}
const Dl = 'undamaged',
    Ll = { ['54033']: 'alpha', ['50705']: 'alpha', ['51201']: 'super', ['56833']: 'super' },
    Tl = {
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
    Al = {
        [Tl.ammoNotFull]: 'ammo',
        [Tl.crewNotFull]: 'crew',
        [Tl.exploded]: 'repair',
        [Tl.destroyed]: 'repair',
        [Tl.damaged]: 'repair',
        [Tl.rentable]: 'rental',
        [Tl.rentableAgain]: 'rental',
        [Tl.rentalIsOver]: 'rental',
        [Tl.tooHeavy]: 'notSuitable',
        [Tl.unsuitableToQueue]: 'notSuitable',
        [Tl.unsuitableToUnit]: 'notSuitable',
        [Tl.inPrebattle]: 'inPlatoon',
        [Tl.battle]: 'inBattle',
        [Tl.wot_plus_exclusive_vehicle_disabled]: 'notSuitable',
    };
function Bl(e, t, a) {
    return !(!e || t === xs || !a) && a.status !== Tl.unsuitableToQueue && a.maxBpScore > 0;
}
const Vl = {
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
    Rl = {
        inactive: Vl.base__inactive,
        activating: Vl.base__activating,
        active: Vl.base__active,
        deactivating: Vl.base__deactivating,
    };
function Ol({ className: e, doubleRow: t, state: a = 'inactive', isCornerHidden: n = !1 }) {
    return 'inactive' === a
        ? null
        : f.jsxs('div', {
              className: b(Vl.base, a && Rl[a], t && Vl.base__double, e),
              children: [
                  f.jsx('div', { className: Vl.glow }),
                  !n && f.jsx('div', { className: Vl.corner }),
                  f.jsx('div', { className: Vl.arrow }),
                  [Vl.triangle__1, Vl.triangle__2, Vl.triangle__3].map((e) =>
                      f.jsx('div', { className: b(Vl.triangle, e) }, e),
                  ),
              ],
          });
}
const zl = {
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
    Hl = Me('Favorite', zl.favorite, { variants: { active: { true: zl.favorite__active } } });
function Ul({ vehicle: e, selected: t, active: a, className: n }) {
    return f.jsx(Pe, {
        className: b(zl.flag, t || (a && zl.flag__active), n),
        path: `hangar.carousel.cards.flags.x400x300.${$(e.nationId)}`,
        position: 'top left',
    });
}
const ql = C(function ({ vehicle: e, statistic: t, validBP: n, doubleRow: s, classNames: r }) {
    var o;
    const i = (null == (o = Zn()) ? void 0 : o.model.isCrystalEarnEnabled.get()) ?? !0,
        l =
            (it((null == t ? void 0 : t.numberOfCrystalEarned) ?? [], 1) ?? 0) <=
            (it((null == t ? void 0 : t.numberOfCrystalEarned) ?? [], 0) ?? 0),
        c = null == t ? void 0 : t.proBoostActive,
        d = i && e.crystalEarning,
        u = fe(c),
        m = a.useMemo(() => (c ? (!1 === u ? 'activating' : 'active') : u ? 'deactivating' : 'inactive'), [c, u]);
    return f.jsxs(f.Fragment, {
        children: [
            (null == t ? void 0 : t.fromWotPlus) &&
                f.jsx('div', { className: b(zl.wotPlus, null == r ? void 0 : r.wotPlus) }),
            f.jsx(Ol, { state: m, className: null == r ? void 0 : r.proBoostIcon, doubleRow: s, isCornerHidden: d }),
            d && f.jsx('div', { className: b(zl.crystal, l && zl.crystal__limit, null == r ? void 0 : r.crystal) }),
            (null == t ? void 0 : t.bpSpecial) &&
                n &&
                f.jsx('div', { className: b(zl.bpBonus, null == r ? void 0 : r.bpBonus) }),
        ],
    });
});
function Fl({ vehicle: e, validBP: t, dimmed: a, active: n, statistic: s, selected: r, doubleRow: o, ...i }) {
    return f.jsxs('div', {
        ...i,
        className: b(zl.base, o && zl.base__double, i.className),
        children: [
            f.jsx(Ul, { vehicle: e, active: n, selected: r }),
            f.jsx(lt, {
                className: b(
                    zl.vehicle,
                    (((null == s ? void 0 : s.status) && s.status !== Dl) || a) && zl.vehicle__dimmed,
                ),
                name: e.name,
            }),
            f.jsx(ql, { vehicle: e, statistic: s, validBP: t, doubleRow: o }),
            f.jsx(Hl, { active: e.favorite }),
        ],
    });
}
const Zl = 'Bonuses_8169b4b3',
    Wl = 'Bonuses_bonus_af8ebe7c',
    Gl = 'Bonuses_bonus__active_2364401e',
    Xl = 'Bonuses_bonusIcon_b65fb47f',
    $l = 'Bonuses_bonusValue_322db074',
    Kl = 'Bonuses_rent_ea11a7e4',
    Yl = 'Bonuses_base__double_ca1cd57b',
    Ql = 'Bonuses_icon_3991db74',
    Jl = 'Bonuses_text_a556857c',
    ec = te.resolve('strings');
function tc({ bonusMultiplier: e, className: t, classNames: a }) {
    return f.jsxs('div', {
        className: b(Wl, -1 !== e && Gl, t),
        children: [
            f.jsx('div', { className: b(Xl, null == a ? void 0 : a.icon) }),
            f.jsx('div', {
                className: b($l, null == a ? void 0 : a.value),
                children: `${ec.readOrEmpty('common.multiplierSmall')}${e}`,
            }),
        ],
    });
}
const ac = C(function ({ vehicle: e, statistic: t, doubleRow: a, ...n }) {
        var s;
        const r = (null == (s = Zn()) ? void 0 : s.model.isDailyMultipliedXpEnabled.get()) ?? !0;
        return f.jsxs('div', {
            ...n,
            className: b(Zl, a && Yl, n.className),
            children: [
                r && t && f.jsx(tc, { bonusMultiplier: t.bonusMultiplier }),
                f.jsx(ct.ShortCounter, {
                    time: e.rent.leftTime,
                    wins: e.rent.leftWins,
                    battles: e.rent.leftBattles,
                    classNames: { base: Kl, icon: Ql, text: Jl },
                }),
            ],
        });
    }),
    nc = {
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
    sc = Me('VehicleName', {
        element: De.Name,
        className: nc.text,
        cva: { variants: { premium: { true: nc.text__premium } } },
    });
function rc({ statistic: e, vehicle: t, className: a, status: n }) {
    const s = te.resolve('views'),
        r = te.resolve('aliases'),
        o = te.resolve('strings'),
        i = Ee({
            resId: r.read((e) => e.hangar.shared.VehiclesStatistics('resId')),
            contentId: s.read((e) =>
                'paused' !== n
                    ? e.lobby.battle_pass.tooltips.VehiclePointsTooltipView('resId')
                    : e.lobby.battle_pass.tooltips.BattlePassOnPauseTooltipView('resId'),
            ),
            args: { intCD: null == t ? void 0 : t.vehicleId },
        });
    return f.jsxs('div', {
        className: b(nc.battlePass, e.maxBpScore > 0 && nc.battlePass__active, e.bpSpecial && nc.battlePass__bonus, a),
        onMouseEnter: function (e) {
            null == i || i.onMouseEnter(e);
        },
        onMouseLeave: function (e) {
            null == i || i.onMouseLeave();
        },
        children: [
            f.jsxs('div', {
                className: nc.bpPoints,
                children: [
                    f.jsx('div', { className: nc.points, children: dt.formatNumber('integral', e.bpProgress) }),
                    f.jsx('div', {
                        className: b(nc.points, nc.points__slash),
                        children: o.readOrEmpty('common.common.slash'),
                    }),
                    f.jsx('div', { className: nc.points, children: dt.formatNumber('integral', e.maxBpScore) }),
                    f.jsx('div', { className: nc.bpShadow }),
                ],
            }),
            f.jsx('div', { className: nc.bpIcon }),
        ],
    });
}
function oc({ statistic: e, elite: t, vehicle: a, selected: n, classNames: s, className: r }) {
    return f.jsxs('div', {
        className: b(nc.details, r),
        children: [
            e &&
                f.jsx(De.Prestige, {
                    level: e.prestigeLevel,
                    grade: e.prestigeGrade,
                    type: e.prestigeType,
                    direction: ut.left,
                    className: b(nc.prestige, n && nc.prestige__active, null == s ? void 0 : s.prestige),
                }),
            f.jsx(De.Level, { className: b(nc.text, nc.text__level, null == s ? void 0 : s.level), value: a.level }),
            Le(a.type) &&
                f.jsx(De.Type, {
                    type: a.type,
                    premium: t || (null == e ? void 0 : e.elite),
                    size: De.Type.sizes.x24x24,
                    className: null == s ? void 0 : s.type,
                }),
        ],
    });
}
function ic({ vehicle: e, className: t, classNames: a }) {
    const n = Ll[e.id],
        s = e.nationChangeAvailable,
        r = e.rent.leftTime > 0 || e.rent.leftWins > 0 || e.rent.leftBattles > 0;
    return f.jsxs('div', {
        className: b(
            nc.identifier,
            nc[`identifier__${n}`],
            s && nc.identifier__changeNation,
            r && nc.identifier__rent,
            t,
        ),
        children: [
            f.jsx(sc, {
                className: null == a ? void 0 : a.name,
                premium: e.premium,
                children: f.jsx(mt, { className: nc.truncatedName, text: e.shortName }),
            }),
            (n || s) &&
                f.jsx('div', {
                    className: b(
                        nc.identifierIcon,
                        nc[`identifierIcon__${n}`],
                        s && nc.identifierIcon__changeNation,
                        null == a ? void 0 : a.icon,
                    ),
                }),
        ],
    });
}
const lc = C(function ({ vehicle: e, statistic: t, selected: a, doubleRow: n, ...s }) {
        const r = Xs(),
            o = r.model.bpState.active.get(),
            i = r.model.bpState.status.get();
        return f.jsxs('div', {
            ...s,
            className: b(nc.base, n && nc.base__double, s.className),
            children: [
                t && Bl(o, i, t) && f.jsx(rc, { vehicle: e, statistic: t, status: i }),
                f.jsxs(De, {
                    className: nc.info,
                    children: [f.jsx(oc, { vehicle: e, statistic: t, selected: a }), f.jsx(ic, { vehicle: e })],
                }),
            ],
        });
    }),
    cc = {
        base: 'Overlay_fc7c8edc',
        alert: 'Overlay_alert_db4a0e15',
        alertIcon: 'Overlay_alertIcon_3d7c077a',
        base__double: 'Overlay_base__double_3c7155a',
        alertText: 'Overlay_alertText_8a4e1d4d',
        alertText__light: 'Overlay_alertText__light_bece984e',
    };
function dc({ status: e, classNames: t, className: a }) {
    const n = te.resolve('images'),
        s = st(`hangar.carousel.cards.alerts.${Al[e]}`, `hangar.carousel.cards.alerts.${Al[e]}_upscale`),
        r = st('hangar.carousel.cards.alerts.notSuitable', 'hangar.carousel.cards.alerts.notSuitable_upscale'),
        o = e === Tl.battle || e === Tl.inPrebattle;
    return f.jsxs('div', {
        className: b(cc.alert, a),
        children: [
            f.jsx(Pe, { className: b(cc.alertIcon, null == t ? void 0 : t.icon), path: n.has(s) ? s : r }),
            f.jsx(Se, {
                upgradeLegacy: !0,
                className: b(cc.alertText, o && cc.alertText__light, null == t ? void 0 : t.text),
                path: `menu.tankCarousel.vehicleStates.${e}`,
                params: { icon: f.jsx(Pe, { path: 'library.premium_small', width: 34, height: 16 }) },
            }),
        ],
    });
}
function uc({ statistic: e, doubleRow: t, ...a }) {
    return e.status === Dl
        ? null
        : f.jsx('div', {
              ...a,
              className: b(cc.base, t && cc.base__double, a.className),
              children: f.jsx(dc, { status: e.status }),
          });
}
Me('Disable', cc.disable);
const mc = 'Card_e79008fd',
    pc = 'Card_base__double_f8b7f334',
    _c = 'Card_content_a6141b08',
    hc = 'Card_border_e9cb9a85',
    gc = te.resolve('views'),
    vc = te.resolve('aliases'),
    fc = C(function ({ vehicleId: e, selected: t = !1, doubleRow: a, children: n, concurrent: s, ...r }) {
        const o = Xs(),
            i = Is().model.get(e),
            l = ws().model.get(e),
            c = xe(),
            d = o.model.current.inventoryId.get(),
            u = o.model.prebattleModeActive(),
            m = o.model.bpState.active.get(),
            p = o.model.bpState.status.get();
        if (!i || !l) return f.jsx(kl, { ...r });
        const _ = s ? bc : Fl;
        return f.jsxs(kl, {
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
                f.jsx(_, { vehicle: i, validBP: Bl(m, p, l), dimmed: u, statistic: l, selected: t, doubleRow: a }),
                f.jsx(xc, {
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
function bc(e) {
    const [t, n] = a.useState(!0),
        [, s] = a.useTransition();
    return (
        a.useEffect(() => {
            t && s(() => n(!1));
        }, [t]),
        t ? null : f.jsx(Fl, { ...e })
    );
}
function xc({ vehicle: e, statistic: t, selected: n, doubleRow: s, concurrent: r, disableContextMenu: o }) {
    const [i, l] = a.useState(r),
        c = a.useRef(null),
        [, d] = a.useTransition(),
        u = pt(
            'vehicle',
            a.useMemo(
                () => ({ inventoryId: null == e ? void 0 : e.inventoryId }),
                [null == e ? void 0 : e.inventoryId],
            ),
        ),
        m = Ee({
            resId: vc.read((e) => e.hangar.shared.VehiclesInventory('resId')),
            contentId: gc.read((e) => e.mono.hangar.vehicle_tooltip('resId')),
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
                  className: b(mc, s && pc),
                  children: [
                      f.jsxs('div', {
                          className: _c,
                          children: [
                              f.jsx(ac, { vehicle: e, statistic: t, doubleRow: s }),
                              f.jsx(lc, { vehicle: e, selected: n, statistic: t, doubleRow: s }),
                          ],
                      }),
                      f.jsx(uc, { statistic: t, doubleRow: s }),
                  ],
              })
    );
}
const yc = {};
function Cc({ cardHeight: e, className: t }) {
    return f.jsx(kl, {
        className: t,
        style: { height: `${e}px` },
        children: f.jsx('div', { className: yc.vehicleSlot }),
    });
}
const wc = C(function ({ vehicleId: e, cardHeight: t, className: a }) {
    const n = Xs().model.selectedVehicle(),
        s = null == n ? void 0 : n.id,
        r = vl(Number(e));
    return void 0 === e
        ? (console.error('VehicleId is not defined'), f.jsx(Cc, { className: b(hc, a), cardHeight: t }))
        : e === ir
          ? f.jsx(Cc, { className: b(hc, a), cardHeight: t })
          : yl(e)
            ? f.jsx(Ml, { className: b(hc, a), type: e, height: t })
            : f.jsx(_t, {
                  failure: () => f.jsx(Cc, { className: b(hc, a), cardHeight: t }),
                  children: f.jsx(fc, {
                      ...r,
                      concurrent: !0,
                      vehicleId: e,
                      selected: e === s,
                      className: b(hc, a),
                      style: { height: `${t}px` },
                  }),
              });
});
const Nc = {
    root: 'VehiclesList_root_f0d596a8',
    content: 'VehiclesList_content_14a13d69',
    scroll: 'VehiclesList_scroll_82155daa',
    scroll__noUpscaleExtraLarge: 'VehiclesList_scroll__noUpscaleExtraLarge_6e09ff1f',
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
function Ic({ children: e, ...t }) {
    return f.jsx('div', { ...t, className: Nc.content, children: e });
}
const jc = C(function (e) {
        const t = Xs(),
            a = qs(),
            n = Qs(),
            { api: s } = be(),
            [r, o] = we(s),
            { upscale: i, screenHeightRem: l } = vt(),
            c = null == a ? void 0 : a.model.current(),
            d = t.model.current.list(),
            u = c && 0 === d.length,
            m = null == n ? void 0 : n.model.computed.ttcEnabled(),
            p = l > ft.extraLarge.height && !i;
        return f.jsxs('div', {
            className: b(Nc.scroll, p && Nc.scroll__noUpscaleExtraLarge, Nc[`scroll__${_r(r, o)}`]),
            children: [
                f.jsx(Ne, {
                    ...e,
                    classNames: {
                        ...e.classNames,
                        wrapper: Nc.scrollWrapper,
                        content: b(Nc.scrollContent, u && Nc.scrollContent__empty),
                    },
                    children: e.children,
                }),
                !s.disabled && f.jsx(Ie, { classNames: { base: b(Nc.verticalBar, m && Nc.verticalBar__ttc) } }),
            ],
        });
    }),
    kc = C(function ({ extraColumns: e = 0 }) {
        const t = Xs(),
            n = qs(),
            s = Ai(),
            { api: r } = be(),
            o = null == n ? void 0 : n.model.current(),
            i = t.model.prebattleModeActive(),
            l = bt(lr, cr),
            c = l.row + e,
            d = Je(l.height),
            u = t.model.current.ids(),
            m = t.model.current.list(),
            p = t.model.selectedVehicle(),
            _ = t.model.telecomRentStatus.get(),
            h = null == p ? void 0 : p.id,
            g = fe(h),
            { currentIndex: v } = Cl(u, h),
            b = (function (e, t, n) {
                const [s, r] = a.useState(0);
                return (
                    a.useLayoutEffect(() => {
                        function a() {
                            const a = e.getWrapperSize();
                            de(a) && r(Math.floor(a / t) * n);
                        }
                        const s = e.events.on('resizeHandled', a),
                            o = e.events.on('recalculateContent', a);
                        return () => {
                            (s(), o());
                        };
                    }, [e, t, n]),
                    s
                );
            })(r, d, c),
            x = t.model.slots.recover.get(),
            y = xl(x, _),
            C = o ? [] : y.right,
            w = o ? [] : y.left,
            { activeSlotsAmount: N, activeSlotsIds: I } =
                ((j = u),
                (k = w),
                (S = C),
                (P = b),
                (E = c),
                a.useMemo(() => {
                    if (!P) return { activeSlotsAmount: 0, activeSlotsIds: [] };
                    const e = j.length + k.length + S.length,
                        t = ((E - (e % E)) % E) + E,
                        a = Math.max(0, P + E - e);
                    return {
                        activeSlotsAmount: e,
                        activeSlotsIds: [...k, ...j, ...S, ...Array(0 === a ? t : a).fill(ir)],
                    };
                }, [k, E, j, P, S]));
        var j, k, S, P, E;
        return (
            wl(r, v, d, c, u.length),
            (function (e, t, a, n, s) {
                function r(n) {
                    a(-1 !== e ? t[e + n].inventoryId : t[0].inventoryId);
                }
                const o = [
                    { key: ht.ARROW_DOWN, blockKey: e > t.length - (n + 1), action: () => r(n) },
                    { key: ht.ARROW_UP, blockKey: e < n, action: () => r(-n) },
                    { key: ht.ARROW_LEFT, blockKey: e % n == 0, action: () => r(-1) },
                    { key: ht.ARROW_RIGHT, blockKey: e % n == n - 1 || e === t.length - 1, action: () => r(1) },
                    { key: ht.HOME, blockKey: 0 === t.length, action: () => a(t[0].inventoryId) },
                    { key: ht.END, blockKey: 0 === t.length, action: () => a(t[t.length - 1].inventoryId) },
                ];
                for (const { key: i, blockKey: l, action: c } of o) {
                    const e = s || l ? ht.NONE : i;
                    gt(e, c);
                }
            })(v, m, t.controls.select, c, 0 === u.length || i),
            a.useEffect(() => {
                r.setDisabled(b >= N);
            }, [r, b, N]),
            a.useEffect(() => {
                s && s.model.computeds.enabled() && h !== g && s.controls.reset();
            }, [h, g, s]),
            f.jsxs(f.Fragment, {
                children: [
                    f.jsx(xt, {
                        api: r,
                        elementHeight: d - Je(1),
                        direction: 'vertical',
                        totalElements: I.length,
                        wrappers: { Content: Ic },
                        renderScroll: (e) => f.jsx(jc, { ...e, style: { '--card-width': 100 / c + '%' } }),
                        itemsPerRow: c,
                        renderElement: (e) =>
                            f.jsx(wc, { vehicleId: I[e], cardHeight: d, className: Nc.card }, I[e] ?? e),
                    }),
                    s &&
                        s.model.computeds.enabled() &&
                        f.jsx(gl, { freeSpaceRem: 0, tipSize: '32rem', position: 'right' }),
                ],
            })
        );
    }),
    Sc = 'EmptyStateMessage_923658c6',
    Pc = 'EmptyStateMessage_title_278b22ff',
    Ec = 'EmptyStateMessage_description_5a4f259e',
    Mc = te.resolve('strings'),
    Dc = C(function (e) {
        const t = qs(),
            a = Xs(),
            n = null == t ? void 0 : t.model.current();
        if (!n || 0 !== a.model.current.amount()) return null;
        const s = 0 === (null == n ? void 0 : n.list.length) ? 'empty_list' : 'not_found';
        return f.jsxs('div', {
            className: b(Sc, e.className),
            children: [
                f.jsx('div', { className: Pc, children: Mc.readOrEmpty(`playlists.empty_state.${s}.title`) }),
                f.jsx('div', { className: Ec, children: Mc.readOrEmpty(`playlists.empty_state.${s}.body`) }),
            ],
        });
    }),
    Lc = 'on',
    Tc = 'disabled';
function Ac(e) {
    return { id: e.id, tankmanId: e.tankmanId, roles: Nt(e.roles) };
}
const Bc = 'disabled',
    [Vc, Rc] = V('CrewModel')(
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
                    crew: e.transform(yt('id', wt), 'crew'),
                },
                a = Q.structural(() => Ct(t.slots.get(), Ac)),
                n = Q.model((e) => t.crew.get()[e]),
                s = Q.primitive((e) => {
                    const t = n(e);
                    return (
                        ((null == t ? void 0 : t.newPerksCount) ?? 0) +
                        ((null == t ? void 0 : t.newBonusPerksCount) ?? 0)
                    );
                }),
                r = Q.primitive(() => t.state.get() === Bc);
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
    Oc = 6,
    zc = 100,
    Hc = 'doge_role',
    Uc = a.createContext(null);
function qc() {
    const e = a.useContext(Uc);
    return (se(null !== e, 'You can use crew context hooks only with crew slot component'), e);
}
const Fc = {
        [It.commander]: (e) =>
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
        [It.driver]: (e) =>
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
        [It.gunner]: (e) =>
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
        [It.loader]: (e) =>
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
        [It.radioman]: (e) =>
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
        [Hc]: (e) =>
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
    Zc = 'Profile_491a8220',
    Wc = 'Profile_roles_2d239199',
    Gc = 'Profile_role_b3df2c53',
    Xc = 'Profile_name_5c9b6f18',
    $c = 'Profile_name__maxLevel_85270e75',
    Kc = te.resolve('strings'),
    Yc = te.resolve('aliases');
function Qc({ role: e = '', className: t }) {
    const a = Fc[e];
    if (a) return f.jsx(a, { className: t });
    console.error(`Unknown role type ${e}`);
}
function Jc({ roles: e, name: t, perksAmount: n, progress: s }) {
    const { tankmanId: r, slotId: o } = qc(),
        i = a.useMemo(() => ({ tooltipId: 'vehicleCrewMemberInHangar', tankmanID: r, slotIdx: o }), [o, r]);
    return f.jsxs('div', {
        className: Zc,
        children: [
            f.jsx(jt, {
                params: { resId: Yc.read((e) => e.hangar.shared.Crew('resId')), args: i },
                className: Wc,
                children: pe(e, (e, t) => f.jsx(Qc, { role: e, className: Gc }, t)),
            }),
            t
                ? f.jsx(Re, { className: b(Xc, n === Oc && s === zc && $c), text: t })
                : f.jsx(Se, {
                      upgradeLegacy: !0,
                      className: Xc,
                      path: 'crew_widget.emptySlot.chooseTankman',
                      params: { role: Kc.readOrEmpty(`item_types.tankman.roles.objectiveCase.${e && e[0]}`) },
                  }),
        ],
    });
}
function ed({ skinId: e, customizedSkin: t }) {
    return t ? `tankmen.icons.big.crewSkins.${kt(e)}` : `tankmen.icons.big.${kt(e)}`;
}
const td = 'Tankman_content_4548f2cf',
    ad = 'Tankman_94b49163',
    nd = 'Tankman_base__bonusPerk_dc2caccc',
    sd = 'Tankman_content__empty_d0544ce1',
    rd = 'Tankman_content__emptyRed_83bc592f',
    od = a.memo(function (e) {
        const { customizedSkin: t, bonusPerk: a, skinId: n, className: s, animation: r } = e;
        return f.jsx('div', {
            className: b(ad, a && nd, s),
            children: n
                ? f.jsx(Pe, { className: td, fit: 'cover', path: ed({ skinId: n, customizedSkin: t }) })
                : f.jsxs(f.Fragment, {
                      children: [
                          f.jsx('div', { className: b(td, sd) }),
                          f.jsx(w.div, { className: b(td, rd), style: r }),
                      ],
                  }),
        });
    }),
    id = {
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
    ld = te.resolve('strings'),
    cd = C(function () {
        const { model: e, controls: t } = Rc(),
            a = xe(),
            n = e.computes.disabled(),
            s = e.vehicleNation.get();
        return f.jsx(St, {
            params: {
                header: ld.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${s}.header`),
                body: ld.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${s}.body`),
            },
            asChild: !0,
            children: f.jsxs('div', {
                className: id.base,
                onClick: function () {
                    n || a.play('click', { target: 'crew-widget:dog-slot' });
                },
                onMouseEnter: function () {
                    n || a.play('mouse-enter', { target: 'crew-widget:dog-slot' });
                },
                children: [
                    f.jsx(od, { customizedSkin: !1, skinId: 'ussr_dog_1' }),
                    f.jsxs('div', {
                        className: id.block,
                        children: [
                            f.jsxs('div', {
                                className: id.info,
                                children: [
                                    f.jsx('div', {
                                        className: id.roles,
                                        children: f.jsx(Qc, { role: Hc, className: id.role }),
                                    }),
                                    f.jsx('div', {
                                        className: id.name,
                                        children: ld.readOrEmpty(`menu.hangar.crew.rody.dog.${s}.name`),
                                    }),
                                ],
                            }),
                            f.jsx(Ve, {
                                className: id.dogDetails,
                                theme: Ve.themes.secondary,
                                size: Ve.sizes.small,
                                onClick: (e) => {
                                    (t.showDogInfo(), e.stopPropagation());
                                },
                                children: f.jsx('div', {
                                    className: id.detailsText,
                                    children: ld.readOrEmpty('crew.dogPawTooltip.details.body'),
                                }),
                            }),
                        ],
                    }),
                    f.jsx('div', { className: b(id.disabled, n && id.overlay__active) }),
                ],
            }),
        });
    }),
    dd = { retrainingProgress: 'retrainingProgress', unsuitableTankman: 'unsuitableTankman', default: 'default' };
const ud = -1,
    md = 1,
    pd = 8,
    _d = 'new_skill',
    hd = 'brotherhood',
    gd = {
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
    vd = [gd.disable, gd.newDisableFull, gd.newDisableLow, gd.activeDisable, gd.newActiveDisable],
    fd = [gd.newDisableFull, gd.newFull];
function bd(e) {
    var t;
    return null == (t = e.find((e) => e.bonus === zc)) ? void 0 : t.name;
}
function xd(e) {
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
            instruction: bd(c),
        });
    for (let u = 0; u < n; u++) {
        const e = s !== zc && u === n - 1 ? Pt.learning : Pt.learned;
        d.push({ id: t, name: _d, state: e, vehEfficacy: r, efficacy: o, role: i, nativeTank: l });
    }
    return d;
}
function yd(e) {
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
    return xd({
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
function Cd(e) {
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
            xd({
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
        e.state === Pt.learning && t.state !== Pt.learning
            ? 1
            : e.state !== Pt.learning && t.state === Pt.learning
              ? -1
              : e.name === _d && t.name !== _d
                ? 1
                : e.name !== _d && t.name === _d
                  ? -1
                  : 0,
    );
}
const wd = {
        base: 'EfficiencyIndicator_d9560b90',
        base__bonus: 'EfficiencyIndicator_base__bonus_a4144984',
        percent: 'EfficiencyIndicator_percent_147766be',
        icon: 'EfficiencyIndicator_icon_fb03a020',
    },
    Nd = te.resolve('intl'),
    Id = te.resolve('aliases');
function jd({ bonusPerks: e, skillsEfficiency: t, className: n }) {
    const { tankmanId: s, slotState: r } = qc(),
        o = Nd.formatNumber('integral', 100 * t),
        i = a.useMemo(
            () => ({ tooltipId: r === dd.unsuitableTankman ? 'crewSkillUntrained' : 'skillsEfficiency', tankmanID: s }),
            [r, s],
        );
    return f.jsx(jt, {
        params: { resId: Id.read((e) => e.hangar.shared.Crew('resId')), args: i },
        className: b(wd.base, e && wd.base__bonus, n),
        children: (() => {
            switch (r) {
                case dd.unsuitableTankman:
                    return f.jsx('div', { className: wd.icon });
                case dd.retrainingProgress:
                    return f.jsx('div', {
                        className: wd.percent,
                        children: f.jsx(Se, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: o } }),
                    });
                default:
                    return;
            }
        })(),
    });
}
const kd = te.resolve('aliases'),
    Sd = te.resolve('views'),
    Pd = te.resolve('strings');
function Ed({ children: e, bonus: t, name: n, role: s, index: r, tankmanId: o, newPerk: i, className: l }) {
    const c = a.useMemo(() => ({ tankmanID: o, skillIndex: r }), [o, r]),
        d = a.useMemo(
            () => ({ tooltipId: 'crewPerkGf', skillName: n, roleName: s, isBonus: t, skillIndex: r, tankmanID: o }),
            [t, r, n, s, o],
        );
    return i
        ? t
            ? f.jsx(St, {
                  params: {
                      header: Pd.readOrEmpty('crew.matrix.skillTooltip.bonus.available.header'),
                      body: Pd.readOrEmpty('crew.matrix.skillTooltip.bonus.available.text'),
                  },
                  className: l,
                  children: e,
              })
            : f.jsx(Et, {
                  params: {
                      contentId: Sd.read((e) => e.lobby.crew.tooltips.EmptySkillTooltip('resId')),
                      resId: kd.read((e) => e.hangar.shared.Crew('resId')),
                      args: c,
                  },
                  className: l,
                  children: e,
              })
        : f.jsx(jt, {
              params: { resId: kd.read((e) => e.hangar.shared.Crew('resId')), args: d },
              className: l,
              children: e,
          });
}
const Md = {
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
function Dd(e) {
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
        m = t === _d,
        p = (function ({ state: e, vehEfficacy: t, efficacy: a, nativeTank: n, newPerk: s, withInstruction: r }) {
            const o = !n && t === ud,
                i = !o && t < md,
                l = a.level < md;
            return r
                ? o
                    ? gd.active
                    : gd.default
                : e !== Pt.learning || i || s
                  ? s && e === Pt.learning
                      ? o
                          ? gd.newActiveDisable
                          : gd.newActive
                      : s && o && l
                        ? gd.newDisableLow
                        : s && o && !l
                          ? e === Pt.learning
                              ? gd.newDisableLow
                              : gd.newDisableFull
                          : o || e === Pt.irrelevant
                            ? gd.disable
                            : i && !s
                              ? gd.low
                              : (i && s) || s
                                ? e === Pt.learning
                                    ? gd.newLow
                                    : gd.newFull
                                : gd.default
                  : o
                    ? gd.activeDisable
                    : gd.active;
        })({ withInstruction: t === d, state: a, vehEfficacy: n, efficacy: s, nativeTank: i, newPerk: m });
    return f.jsxs(Ed, {
        className: b(u, Md.base, c && Md.base__bonus, Md[`base__${p}`]),
        newPerk: m,
        bonus: c,
        name: t.includes(hd) ? hd : t,
        index: l,
        role: o,
        tankmanId: r,
        children: [
            f.jsx('div', { className: Md.background }),
            f.jsx('div', { className: Md.border }),
            fd.includes(p) && f.jsx('div', { className: Md.newPerkBackground }),
            m
                ? f.jsx('div', { className: Md.icon })
                : f.jsx(Pe, { className: Md.icon, path: `tankmen.skills.big.${t}` }),
            vd.includes(p) && f.jsx('div', { className: Md.disabledOverlay }),
        ],
    });
}
const Ld = {
        base: 'Row_94492f2a',
        training: 'Row_training_87a055fa',
        trainingIcon: 'Row_trainingIcon_478b64c1',
        container: 'Row_container_6520803b',
        container__compression: 'Row_container__compression_f3e2cd48',
        currentProgress: 'Row_currentProgress_4c0ce954',
    },
    Td = te.resolve('strings');
function Ad({ perks: e, bonusPerk: t = !1, quickTraining: a, trainingProgress: n = 0, className: s }) {
    const { slotState: r } = qc();
    return f.jsxs('div', {
        className: b(Ld.base, s),
        children: [
            e.map((a, n) =>
                f.jsx(
                    'div',
                    {
                        className: b(Ld.container, e.length > Oc && n !== pd && Ld.container__compression),
                        children: f.jsx(Dd, { ...a, index: n, bonusPerk: t }),
                    },
                    n,
                ),
            ),
            n < zc &&
                r !== dd.retrainingProgress &&
                f.jsx('div', {
                    className: Ld.currentProgress,
                    children: f.jsx(Se, { path: 'common.percentValue', params: { value: n }, upgradeLegacy: !0 }),
                }),
            !t &&
                a &&
                f.jsx(St, {
                    params: {
                        header: Td.readOrEmpty('crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header'),
                        body: Td.readOrEmpty('crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body'),
                    },
                    className: Ld.training,
                    children: f.jsx('div', { className: Ld.trainingIcon }),
                }),
        ],
    });
}
const Bd = {
    base: 'Perks_1485306a',
    efficiency: 'Perks_efficiency_bfe72b43',
    rows: 'Perks_rows_2e626685',
    row__bonus: 'Perks_row__bonus_f0dcd00d',
};
function Vd({ tankman: e, className: t }) {
    const { slotState: a } = qc();
    return f.jsxs('div', {
        className: b(Bd.base, t),
        children: [
            a &&
                a !== dd.default &&
                f.jsx(jd, {
                    className: Bd.efficiency,
                    bonusPerks: e.bonusPerks.length > 0,
                    skillsEfficiency: e.currentVehicleSkillsEfficiency,
                }),
            f.jsxs('div', {
                className: Bd.rows,
                children: [
                    f.jsx(Ad, {
                        className: Bd.row,
                        perks: yd(e),
                        quickTraining: e.quickTraining,
                        trainingProgress: e.trainingProgress,
                    }),
                    e.bonusPerks.length > 0 &&
                        f.jsx(Ad, {
                            className: b(Bd.row, Bd.row__bonus),
                            perks: Cd(e),
                            trainingProgress: e.bonusPerks[0] ? e.bonusPerks[0].trainingProgress : 0,
                            bonusPerk: !0,
                        }),
                ],
            }),
        ],
    });
}
const Rd = 'Slot_tooltipArea_cfc61e36',
    Od = 'Slot_823ddf0',
    zd = 'Slot_base__disabled_d386066c',
    Hd = 'Slot_base__bonusPerk_37755a1',
    Ud = 'Slot_block_5a0436c4',
    qd = 'Slot_block__empty_891e9635',
    Fd = 'Slot_perks_658d46a',
    Zd = 'Slot_perks__warning_de96a8ff',
    Wd = 'Slot_vehicleInfo_b3de9df4',
    Gd = 'Slot_vehicleInfo__active_c2f01f1b',
    Xd = 'Slot_overlay_a7b614c0',
    $d = 'Slot_overlay__active_4dbffa31',
    Kd = 'Slot_overlay__bonusPerk_7bdbfd9e',
    Yd = 'Slot_overlay__hover_b85ae7f7',
    Qd = 'Slot_overlay__warning_8fedfb92',
    Jd = 'Slot_overlay__disabled_cd31780',
    eu = te.resolve('aliases'),
    tu = C(function ({ tankmanId: e, roles: t, id: n, tankmanAnimation: s }) {
        const [r, o] = a.useState(!1),
            i = xe(),
            { model: l, controls: c } = Rc(),
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
                            ? dd.retrainingProgress
                            : dd.unsuitableTankman
                        : dd.default;
            })(_),
            v = g === dd.unsuitableTankman,
            x = pt(
                'crewMember',
                a.useMemo(() => ({ tankmanID: e, slotIdx: n, previousViewID: null }), [e, n]),
                a.useMemo(() => ({ disabled: !p || d }), [p, d]),
            ),
            y = a.useMemo(() => ({ tooltipId: 'tankman', tankmanID: e }), [e]);
        const C = a.useMemo(() => ({ slotId: n, tankmanId: e, slotState: g }), [n, g, e]);
        return f.jsx(Uc.Provider, {
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
                className: b(Od, d && zd, t.length > 1 && Hd),
                children: [
                    p &&
                        f.jsx(jt, {
                            params: { resId: eu.read((e) => e.hangar.shared.Crew('resId')), args: y },
                            className: Rd,
                        }),
                    f.jsx('div', { className: b(Xd, Yd, r && $d) }),
                    f.jsx('div', { className: b(Xd, Qd, v && $d) }),
                    f.jsx(od, {
                        customizedSkin: (null == _ ? void 0 : _.customizedSkin) ?? !1,
                        skinId: null == _ ? void 0 : _.crewSkinId.replace('tankman_', ''),
                        bonusPerk: t.length > 1,
                        animation: s,
                    }),
                    f.jsxs('div', {
                        className: b(Ud, !_ && qd),
                        children: [
                            f.jsx(Jc, {
                                roles: t,
                                name: null == _ ? void 0 : _.fullName,
                                perksAmount: h,
                                progress: null == _ ? void 0 : _.trainingProgress,
                            }),
                            _
                                ? f.jsx(Vd, { tankman: _, className: b(Fd, v && Zd) })
                                : f.jsx(Se, {
                                      upgradeLegacy: !0,
                                      className: b(Wd, r && Gd),
                                      path: `crew_widget.vehicleWithName.${Mt(u)}`,
                                      params: { name: m.replace(/<img.*?>/, '') },
                                  }),
                        ],
                    }),
                    f.jsx('div', { className: b(Xd, Jd, d && $d, (null == _ ? void 0 : _.bonusPerks.length) && Kd) }),
                ],
            }),
        });
    }),
    au = 'CrewWidget_647da81c',
    nu = 'CrewWidget_divider_1cced5f6',
    su = C(function ({ className: e }) {
        const { model: t } = Rc(),
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
                className: b(au, e),
                children: [
                    pe(s, (e, t) =>
                        f.jsxs(
                            'div',
                            {
                                children: [
                                    f.jsx(
                                        tu,
                                        { tankmanId: e.tankmanId, roles: e.roles, id: e.id, tankmanAnimation: r },
                                        -1 === e.tankmanId ? `empty_${t}` : e.tankmanId,
                                    ),
                                    f.jsx('div', { className: nu }),
                                ],
                            },
                            e.id,
                        ),
                    ),
                    n && f.jsxs(f.Fragment, { children: [f.jsx(cd, {}), f.jsx('div', { className: nu })] }),
                ],
            })
        );
    }),
    ru = te.resolve('aliases');
function ou({ className: e }) {
    return f.jsx(Vc, {
        options: { rootId: ru.read((e) => e.hangar.shared.Crew('resId')) },
        children: f.jsx(su, { className: e }),
    });
}
const iu = { base: 'Divider_1632862f' };
function lu(e) {
    return f.jsx(Pe, { path: 'ui.noise', className: b(iu.base, e.className), fit: 'cover' });
}
function cu({ children: e, className: t }) {
    const a = v.Children.toArray(e);
    return a.length <= 1
        ? e
        : f.jsx(f.Fragment, {
              children: a
                  .filter((e) => e)
                  .map((e, a) => f.jsxs(v.Fragment, { children: [a > 0 && f.jsx(lu, { className: t }), e] }, a)),
          });
}
const du = {
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
        alert: {
            frame: { x: 96, y: 0, w: 29, h: 27 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 29, h: 27 },
            sourceSize: { w: 29, h: 27 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_close: {
            frame: { x: 96, y: 27, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_add_active: {
            frame: { x: 96, y: 51, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_add_hover: {
            frame: { x: 0, y: 97, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        add_hover: {
            frame: { x: 24, y: 97, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_close_active: {
            frame: { x: 48, y: 97, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_close_hover: {
            frame: { x: 72, y: 97, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        checked: {
            frame: { x: 96, y: 75, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        add: {
            frame: { x: 0, y: 121, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        card_add: {
            frame: { x: 24, y: 121, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        trash_can: {
            frame: { x: 48, y: 121, w: 24, h: 24 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 24, h: 24 },
            sourceSize: { w: 24, h: 24 },
            pivot: { x: 0.5, y: 0.5 },
        },
        arrow_down: {
            frame: { x: 125, y: 0, w: 12, h: 12 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 12, h: 12 },
            sourceSize: { w: 12, h: 12 },
            pivot: { x: 0.5, y: 0.5 },
        },
    },
    meta: { size: { w: 137, h: 145 }, scale: 1 },
};
function uu({ value: e, ...t }) {
    return f.jsx(Dt, { ...t, sprite: du, path: 'hangar.playlists.icons', icon: e, className: t.className });
}
const mu = Me('IconContainer', 'Icon_container_83f4dd0e'),
    pu = C(function (e) {
        const t = Xs(),
            a = Hs().model.byIdUnsafe(e.id);
        se(void 0 !== a, `Playlist with ${e.id} is not found`);
        const n = t.model.accumulateByIds(a.list).length;
        return a.list.length <= n
            ? null
            : f.jsx(_u, {
                  className: e.className,
                  classNames: e.classNames,
                  displayAmount: n,
                  size: e.size,
                  realAmountInPlaylist: a.list.length,
              });
    });
function _u(e) {
    var t, a;
    const n = te.resolve('strings'),
        s = n
            .readOrEmpty('playlists.validation.unavailable.title')
            .replace('{{display}}', e.displayAmount.toString())
            .replace('{{total}}', e.realAmountInPlaylist.toString()),
        r = rt({ header: s, body: n.readOrEmpty('playlists.validation.unavailable.body') }),
        o = 'lg' === e.size ? 'alert_lg' : 'alert',
        i = 'lg' === e.size ? mu : 'div';
    return f.jsx(i, {
        ...r,
        className: b(null == (t = e.classNames) ? void 0 : t.container, e.className),
        children: f.jsx(uu, { className: null == (a = e.classNames) ? void 0 : a.icon, value: o }),
    });
}
const hu = (e) =>
        a.createElement(
            'svg',
            {
                width: 24,
                height: 24,
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                ...e,
            },
            a.createElement(
                'g',
                { opacity: 0.8 },
                a.createElement('path', {
                    d: 'M6 18.9994C6.00022 19.5515 6.44784 19.9994 7 19.9994H17C17.5522 19.9994 17.9998 19.5515 18 18.9994V14.4994H19V19.2494C18.9999 19.7134 18.8153 20.1586 18.4873 20.4867C18.1591 20.8148 17.714 20.9994 17.25 20.9994H6.75C6.28596 20.9994 5.84086 20.8148 5.5127 20.4867C5.18465 20.1586 5.00011 19.7134 5 19.2494V14.4994H6V18.9994Z',
                    fill: '#0D0E10',
                }),
                a.createElement('path', {
                    d: 'M11.7002 4.08047C11.878 3.94714 12.122 3.94714 12.2998 4.08047L15.7998 6.70547C15.9256 6.79988 16 6.94759 16 7.10488V7.89492C15.9998 8.2993 15.5442 8.53603 15.2129 8.3041L13.1426 6.85488L13.0059 14.5521C13.0024 14.7382 12.8959 14.9073 12.7295 14.9906L11.7109 15.4994C11.3817 15.6641 10.9931 15.4281 10.9873 15.06L10.8574 6.85488L8.78711 8.3041C8.45578 8.53602 8.00017 8.29929 8 7.89492V7.10488C8.00005 6.94759 8.07438 6.79988 8.2002 6.70547L11.7002 4.08047Z',
                    fill: '#0D0E10',
                }),
            ),
            a.createElement(
                'g',
                { opacity: 0.9 },
                a.createElement('path', {
                    d: 'M6 17.9993C6.00001 18.5516 6.44771 18.9993 7 18.9993H17C17.5523 18.9993 18 18.5516 18 17.9993V13.4993H19V18.2493C19 18.7134 18.8154 19.1584 18.4873 19.4866C18.1591 19.8148 17.7141 19.9993 17.25 19.9993H6.75C6.28587 19.9993 5.84087 19.8148 5.5127 19.4866C5.18456 19.1584 5 18.7134 5 18.2493V13.4993H6V17.9993Z',
                    fill: 'url(#paint0_radial_111851_505989)',
                }),
                a.createElement('path', {
                    d: 'M6 17.9993C6.00001 18.5516 6.44771 18.9993 7 18.9993H17C17.5523 18.9993 18 18.5516 18 17.9993V13.4993H19V18.2493C19 18.7134 18.8154 19.1584 18.4873 19.4866C18.1591 19.8148 17.7141 19.9993 17.25 19.9993H6.75C6.28587 19.9993 5.84087 19.8148 5.5127 19.4866C5.18456 19.1584 5 18.7134 5 18.2493V13.4993H6V17.9993Z',
                    fill: 'url(#pattern0_111851_505989)',
                    fillOpacity: 0.8,
                }),
                a.createElement('path', {
                    d: 'M11.7002 3.08033C11.8779 2.94718 12.1221 2.94718 12.2998 3.08033L15.7998 5.70533C15.9255 5.79967 15.9999 5.9476 16 6.10475V6.89479C15.9998 7.29917 15.5442 7.5359 15.2129 7.30397L13.1426 5.85475L13.0059 13.552C13.0025 13.7381 12.8958 13.9072 12.7295 13.9905L11.7109 14.4993C11.3816 14.664 10.9931 14.428 10.9873 14.0598L10.8574 5.85475L8.78711 7.30397C8.45578 7.5359 8.00016 7.29917 8 6.89479V6.10475C8.00017 5.9476 8.07448 5.79967 8.2002 5.70533L11.7002 3.08033Z',
                    fill: 'url(#paint1_radial_111851_505989)',
                }),
                a.createElement('path', {
                    d: 'M11.7002 3.08033C11.8779 2.94718 12.1221 2.94718 12.2998 3.08033L15.7998 5.70533C15.9255 5.79967 15.9999 5.9476 16 6.10475V6.89479C15.9998 7.29917 15.5442 7.5359 15.2129 7.30397L13.1426 5.85475L13.0059 13.552C13.0025 13.7381 12.8958 13.9072 12.7295 13.9905L11.7109 14.4993C11.3816 14.664 10.9931 14.428 10.9873 14.0598L10.8574 5.85475L8.78711 7.30397C8.45578 7.5359 8.00016 7.29917 8 6.89479V6.10475C8.00017 5.9476 8.07448 5.79967 8.2002 5.70533L11.7002 3.08033Z',
                    fill: 'url(#pattern1_111851_505989)',
                    fillOpacity: 0.8,
                }),
            ),
            a.createElement(
                'defs',
                null,
                a.createElement(
                    'pattern',
                    { id: 'pattern0_111851_505989', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', {
                        xlinkHref: '#image0_111851_505989',
                        transform: 'matrix(0.0253256 0 0 0.0208333 -0.107815 0)',
                    }),
                ),
                a.createElement(
                    'pattern',
                    { id: 'pattern1_111851_505989', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', {
                        xlinkHref: '#image0_111851_505989',
                        transform: 'matrix(0.0253256 0 0 0.0208333 -0.107815 0)',
                    }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_111851_505989',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(12 16.7494) rotate(180) scale(8.90909 4.12906)',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint1_radial_111851_505989',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(12 16.7494) rotate(180) scale(8.90909 4.12906)',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement('image', {
                    id: 'image0_111851_505989',
                    width: 48,
                    height: 48,
                    preserveAspectRatio: 'none',
                    xlinkHref:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnBSURBVHgBbdrnbhzHEobhpTSiguWcYRswYMD3fwn+68swYFuAcg6kwuHb5DMuEaeBBXd6uqsrflVdy6M//vjjw/v37w8fPnw4bNu2Pqenp4eTk5PDrVu3Drdv317fe//27dv1vfXXr18/XL169fDq1atD48qVK2vN0dHRmu+59e/evTscHx+vuZcvX65n57S2dY0XL16s9a0z35qeG70zend05eiwXd0OVyK+Js42xUDMtQnDCdOhhPQXoZs3b+7PHdj7hGpf89G3r/fzjN7duHFjp0MoQji37ymzddeuXTucnJ4c3p6eK2frZQPhniMUwRa8efNmvYto763JEq2LIE11QOt715qYi0bfCT4t1ByrZtHeTUW2t+/9bbDe2ar1PiVtLWhzD03GEKEcShO0GgME6F17aC3B+8t9uEX7nz17ttb2iRZhllbP6PW9T3t6N63Xp+d3789dMtpLoNevX3/kd42INf/555/v/k8jfVr3ySef7G7R8+PHjxeN5r/88svd/XoX45TEVTDpvNY9f/788Omnn34UH7yAm3s+PTlX5paZI0bbmO9AwSOQxEUBR/MxF/H20Gx/uUTxEGOdk2DR+ueffw5Pnjw5fPfdd4cvvvhit3b7nIHR5hOqfQm2hD26cji+dnwOBjPy2yz6oUjIETMx0KdDIhzDrYnBtCrwBRqrFXwxzo97H732NMSc4Pee0uzr2fdciEdsbZgoZGAmDZFeAGMkRiNmvXV9RyslJHAjxppPo9FtvzHdkUJTWN+zqjPP3fw/K23cpgkEImbwR2NiNPThcpRAUzO/tIewzXsmLBfqr4CekCoPdM779+d7Ts/gdIM+Du2wNAYFaAQSYar59no30QNMYq5kCInEG2g1bx9rQjyCQS0KBDjbZRicDExf5uNTg6D0/0HuhGKa59MEI3AWhDS5DUFpnYIngp3zchY/Ee/DTC2OSKaKYIgj0JQO4LThYIFGo9ONJuYDB0x2VgKEZsWGZDcTa0PCZCFK3DDG1xfGXkDhTGqYkTlpdfonK8UQbCcQWEbPORNZGu0T/JgU/GJVXC2LiHQo0ifc5v/igv/LnB0cA61jVpZhMetm9oUm9rU2Bq29f//+4enTpwt+Q6pZYJYk7927t4Tv+45CMTzroJ9++umj2qcNhIjRGOgARVvvaUmAU0DWYNE7d+4sl+TLmCrX9Nzazvj555/X3uZnELPWZ599tsfnRnLBxm2YDwFDsMdw61mrv7Qv0SRs8/2Nxtdff3345ptv1jolTIyliATpGXNgHdSi1XcV8IUrbXtWhBL8TIDPbMgqXKP9MQDelMh8WjXbHBRTHnvf91nCqKNmcmuudVw4GqsanYEleJQJop4LEAAKdHiCKDf6AAUW4N/KDvtntRpjrNyccnyCyPUb11f9M9Fpgc+8oNg0y2qwJjElDFhULXInIGB+wqccIYYwy01ZFB+S2sw1KUDxud/s4CpJ2ziDrMHcMztOC4XfE/p2rV2U0FlUknRe5/B7Vat4pIjpzidvTnawEOxLCJnRARgwjxhtgj/+LxgJxkLNdRgXE1OgltW4JgDgXuD21s1bew7iHZLnUuJMDhKPAadngSZrzzUsR4hoEiTrcdGJPtN1+tu8IRmugL19bVcc6MyNor2QKlxuMd/ky5m0REJTrAKP50VcLhBPoNFVcb/+XSDW9PPmOyda7ibOoLhZWM57xQXN7fD333+vw3755ZfdHzN7GTHiVZNTY9NdVKUTZl05035XTZB49+7dte6rr75a54Xr1UBptPUpIYWqiF2IEqwMXI5oXedDwJXIvv322928Xjx48GCHRPUJOJzXTKggucws7FICzylABdpwpVQ0TjRsTXwkREDR3n///fcj1940npSvTWI0zUskWSVBYkjJQRAXfJaYLkfwvsfIzCMKNVUv91WC5AVlbi6Dr9aw0OYQuB4TmV0wQokYF2BubCpEbkfT4NSISZckCU5jC33M6d5Bu85QakM/sbMXcy1uI/hyh4XR030wYQ7icJ+ZoefNqTNYCK1G51Kesh4Ec9fOUJ5TkCp1A4Wiel5eMvnMBzTQkCElldk2pJ3ZWZi3MofPukrccD888QpxqCvYulW6eMHHEFMep80CdGqNdRRdfJcCGtOdBuR9dKWMZs0ziU+im/duQuo1Edh1dMuE7rcuLCrCadLGvLQruuac+onr2ZsCOmfeuliVwCzo5kYpXMg60M11t5pOIYDBf10V0xAovOxi4XjYPPuXsznWAUprmhdn81Kv2mWZ2eZ0PYVaButszAMRYurPP/9cgvz+++8LIkMlPgqd0tSPP/64GCtBaVhhpPVa4jEUJIuXy4Udd9WRm2ARDfEyW/a9v7jJ/Vd1Mt1vv/22BKh3mQAQQU0ziz+BFoMCnKYms83VD3U7Uzv13YXG/su9ongRn9HQPF4uPhu7zP/999/vks6LBs1MxiMCo6GU925hUGQWZNwMqsz8MtuLrVGuN5e7yyULqXIPl2dmoyFSOmxeMiJUrSTDOgz8TbQypuYBhqxriA3VrDK+kSdoFO8WILHDaUeRNV1CmZvAEyqZerYUlRLTUoAA0s3kNmusCbV8nxvbY9/m5g/nMattrtRQfzeveNPDn9fIaf7L3TXud7nLxu1mq18+UGRSpo4IWptExFfdBWhSpxgeN7Qe+TaIm+15TE/kUVabn3XYvOzLP+4Fs8kGsfZqVK2vf9OLStiaS2nGRVq7hBV0IqbvGizB5bjlo0ePFmMq2qw3G2WzubaXLCn4IvDRpsglmNaiOIjIX3/9tQ52rXMTi/E+NNB6rXOBhbCY4rOzWTBvdoFBHTt5AFxKYG/P1s1CU0kCDLZQaJqmxb/++uvSSChTHpC+Z6AKvHqZDx8+XN9/+OGH3Z9n2yUYjNFoRl/cEFCmp5TO1YG4eevmDhgpb9ZLq6Dkg4InLfk9LJPP1qMgZ4HmKiV0Hgg3f2pyGQISs+Onoo0GJqPTuToXdSW437xKcttt/qbVITPLlYln8mK2WdfHSAxgOvj1bwq01Fy0DDT94qmX2idGVcAzn7RmtnAofpvlLkFIOf+NwC/wDaUvf47Zies0GTCwQK5Kk73PrXp2efJjRy4rM09lyTnzp64Fx5dbd3o0MR8azcSCMMEklNkP5WbtmddQbjSLuPbNOmheZOQCWfrVmUJunJ1bfMxqYZs/berDwOOCs/cFap0LkKuJS3vS/SzDZ3XZ2izSobVUuCNGU5SzleDoQZ+FSGfPCXAO64HO4fwXGoRor08LlQkJkqbqEMz1kpgKU+aU8tOejoVSXBKcbczmipMUpPT+UPyMJlrap9A84Pj43GL/Ay7gs62Y7foXAAAAAElFTkSuQmCC',
                }),
            ),
        ),
    gu = (e) =>
        a.createElement(
            'svg',
            {
                width: 24,
                height: 24,
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                ...e,
            },
            a.createElement(
                'g',
                { opacity: 0.8 },
                a.createElement('path', {
                    d: 'M6 18.999C6 19.5513 6.44771 19.999 7 19.999H17C17.5523 19.999 18 19.5513 18 18.999V14.499H19V19.249C19 19.713 18.8153 20.1581 18.4873 20.4863C18.1591 20.8145 17.7141 20.999 17.25 20.999H6.75C6.28587 20.999 5.84088 20.8145 5.5127 20.4863C5.18469 20.1581 5 19.713 5 19.249V14.499H6V18.999Z',
                    fill: '#0D0E10',
                }),
                a.createElement('path', {
                    d: 'M17.4688 5.1074C17.5632 5.00362 17.7316 5.0247 17.7979 5.14842L17.9043 5.34569C17.9637 5.45694 17.9559 5.59208 17.8848 5.69627L12.0205 14.289C11.8912 14.4784 11.6148 14.4873 11.4736 14.3066L7.63281 9.39256C7.55247 9.28976 7.5376 9.15 7.5957 9.03319L7.70508 8.81346C7.79981 8.62301 8.04473 8.56631 8.21387 8.6953L11.5117 11.2099C11.6515 11.3165 11.8496 11.2989 11.9678 11.1689L17.4688 5.1074Z',
                    fill: '#0D0E10',
                }),
            ),
            a.createElement(
                'g',
                { opacity: 0.9, filter: 'url(#filter0_d_111851_505985)' },
                a.createElement('path', {
                    d: 'M6 17.999C6 18.5513 6.44771 18.999 7 18.999H17C17.5523 18.999 18 18.5513 18 17.999V13.499H19V18.249C19 18.713 18.8153 19.1581 18.4873 19.4863C18.1591 19.8145 17.7141 19.999 17.25 19.999H6.75C6.28587 19.999 5.84088 19.8145 5.5127 19.4863C5.18469 19.1581 5 18.713 5 18.249V13.499H6V17.999Z',
                    fill: 'url(#paint0_radial_111851_505985)',
                }),
                a.createElement('path', {
                    d: 'M6 17.999C6 18.5513 6.44771 18.999 7 18.999H17C17.5523 18.999 18 18.5513 18 17.999V13.499H19V18.249C19 18.713 18.8153 19.1581 18.4873 19.4863C18.1591 19.8145 17.7141 19.999 17.25 19.999H6.75C6.28587 19.999 5.84088 19.8145 5.5127 19.4863C5.18469 19.1581 5 18.713 5 18.249V13.499H6V17.999Z',
                    fill: 'url(#pattern0_111851_505985)',
                    fillOpacity: 0.8,
                }),
                a.createElement('path', {
                    d: 'M17.4688 4.1074C17.5632 4.00362 17.7316 4.0247 17.7979 4.14842L17.9043 4.34569C17.9637 4.45694 17.9559 4.59208 17.8848 4.69627L12.0205 13.289C11.8912 13.4784 11.6148 13.4873 11.4736 13.3066L7.63281 8.39256C7.55247 8.28976 7.5376 8.15 7.5957 8.03319L7.70508 7.81346C7.79981 7.62301 8.04473 7.56631 8.21387 7.6953L11.5117 10.2099C11.6515 10.3165 11.8496 10.2989 11.9678 10.1689L17.4688 4.1074Z',
                    fill: 'url(#paint1_radial_111851_505985)',
                }),
                a.createElement('path', {
                    d: 'M17.4688 4.1074C17.5632 4.00362 17.7316 4.0247 17.7979 4.14842L17.9043 4.34569C17.9637 4.45694 17.9559 4.59208 17.8848 4.69627L12.0205 13.289C11.8912 13.4784 11.6148 13.4873 11.4736 13.3066L7.63281 8.39256C7.55247 8.28976 7.5376 8.15 7.5957 8.03319L7.70508 7.81346C7.79981 7.62301 8.04473 7.56631 8.21387 7.6953L11.5117 10.2099C11.6515 10.3165 11.8496 10.2989 11.9678 10.1689L17.4688 4.1074Z',
                    fill: 'url(#pattern1_111851_505985)',
                    fillOpacity: 0.8,
                }),
            ),
            a.createElement(
                'defs',
                null,
                a.createElement(
                    'filter',
                    {
                        id: 'filter0_d_111851_505985',
                        x: 5,
                        y: 4.04102,
                        width: 14,
                        height: 16.958,
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
                        values: '0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0627451 0 0 0 1 0',
                    }),
                    a.createElement('feBlend', {
                        mode: 'normal',
                        in2: 'BackgroundImageFix',
                        result: 'effect1_dropShadow_111851_505985',
                    }),
                    a.createElement('feBlend', {
                        mode: 'normal',
                        in: 'SourceGraphic',
                        in2: 'effect1_dropShadow_111851_505985',
                        result: 'shape',
                    }),
                ),
                a.createElement(
                    'pattern',
                    { id: 'pattern0_111851_505985', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', {
                        xlinkHref: '#image0_111851_505985',
                        transform: 'matrix(0.023747 0 0 0.0208333 -0.0699282 0)',
                    }),
                ),
                a.createElement(
                    'pattern',
                    { id: 'pattern1_111851_505985', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', {
                        xlinkHref: '#image0_111851_505985',
                        transform: 'matrix(0.023747 0 0 0.0208333 -0.0699282 0)',
                    }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_111851_505985',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-6.93695 6.47435 0.654517 0.610869 13.4895 9.08247)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint1_radial_111851_505985',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-6.93695 6.47435 0.654517 0.610869 13.4895 9.08247)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement('image', {
                    id: 'image0_111851_505985',
                    width: 48,
                    height: 48,
                    preserveAspectRatio: 'none',
                    xlinkHref:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnBSURBVHgBbdrnbhzHEobhpTSiguWcYRswYMD3fwn+68swYFuAcg6kwuHb5DMuEaeBBXd6uqsrflVdy6M//vjjw/v37w8fPnw4bNu2Pqenp4eTk5PDrVu3Drdv317fe//27dv1vfXXr18/XL169fDq1atD48qVK2vN0dHRmu+59e/evTscHx+vuZcvX65n57S2dY0XL16s9a0z35qeG70zend05eiwXd0OVyK+Js42xUDMtQnDCdOhhPQXoZs3b+7PHdj7hGpf89G3r/fzjN7duHFjp0MoQji37ymzddeuXTucnJ4c3p6eK2frZQPhniMUwRa8efNmvYto763JEq2LIE11QOt715qYi0bfCT4t1ByrZtHeTUW2t+/9bbDe2ar1PiVtLWhzD03GEKEcShO0GgME6F17aC3B+8t9uEX7nz17ttb2iRZhllbP6PW9T3t6N63Xp+d3789dMtpLoNevX3/kd42INf/555/v/k8jfVr3ySef7G7R8+PHjxeN5r/88svd/XoX45TEVTDpvNY9f/788Omnn34UH7yAm3s+PTlX5paZI0bbmO9AwSOQxEUBR/MxF/H20Gx/uUTxEGOdk2DR+ueffw5Pnjw5fPfdd4cvvvhit3b7nIHR5hOqfQm2hD26cji+dnwOBjPy2yz6oUjIETMx0KdDIhzDrYnBtCrwBRqrFXwxzo97H732NMSc4Pee0uzr2fdciEdsbZgoZGAmDZFeAGMkRiNmvXV9RyslJHAjxppPo9FtvzHdkUJTWN+zqjPP3fw/K23cpgkEImbwR2NiNPThcpRAUzO/tIewzXsmLBfqr4CekCoPdM779+d7Ts/gdIM+Du2wNAYFaAQSYar59no30QNMYq5kCInEG2g1bx9rQjyCQS0KBDjbZRicDExf5uNTg6D0/0HuhGKa59MEI3AWhDS5DUFpnYIngp3zchY/Ee/DTC2OSKaKYIgj0JQO4LThYIFGo9ONJuYDB0x2VgKEZsWGZDcTa0PCZCFK3DDG1xfGXkDhTGqYkTlpdfonK8UQbCcQWEbPORNZGu0T/JgU/GJVXC2LiHQo0ifc5v/igv/LnB0cA61jVpZhMetm9oUm9rU2Bq29f//+4enTpwt+Q6pZYJYk7927t4Tv+45CMTzroJ9++umj2qcNhIjRGOgARVvvaUmAU0DWYNE7d+4sl+TLmCrX9Nzazvj555/X3uZnELPWZ599tsfnRnLBxm2YDwFDsMdw61mrv7Qv0SRs8/2Nxtdff3345ptv1jolTIyliATpGXNgHdSi1XcV8IUrbXtWhBL8TIDPbMgqXKP9MQDelMh8WjXbHBRTHnvf91nCqKNmcmuudVw4GqsanYEleJQJop4LEAAKdHiCKDf6AAUW4N/KDvtntRpjrNyccnyCyPUb11f9M9Fpgc+8oNg0y2qwJjElDFhULXInIGB+wqccIYYwy01ZFB+S2sw1KUDxud/s4CpJ2ziDrMHcMztOC4XfE/p2rV2U0FlUknRe5/B7Vat4pIjpzidvTnawEOxLCJnRARgwjxhtgj/+LxgJxkLNdRgXE1OgltW4JgDgXuD21s1bew7iHZLnUuJMDhKPAadngSZrzzUsR4hoEiTrcdGJPtN1+tu8IRmugL19bVcc6MyNor2QKlxuMd/ky5m0REJTrAKP50VcLhBPoNFVcb/+XSDW9PPmOyda7ibOoLhZWM57xQXN7fD333+vw3755ZfdHzN7GTHiVZNTY9NdVKUTZl05035XTZB49+7dte6rr75a54Xr1UBptPUpIYWqiF2IEqwMXI5oXedDwJXIvv322928Xjx48GCHRPUJOJzXTKggucws7FICzylABdpwpVQ0TjRsTXwkREDR3n///fcj1940npSvTWI0zUskWSVBYkjJQRAXfJaYLkfwvsfIzCMKNVUv91WC5AVlbi6Dr9aw0OYQuB4TmV0wQokYF2BubCpEbkfT4NSISZckCU5jC33M6d5Bu85QakM/sbMXcy1uI/hyh4XR030wYQ7icJ+ZoefNqTNYCK1G51Kesh4Ec9fOUJ5TkCp1A4Wiel5eMvnMBzTQkCElldk2pJ3ZWZi3MofPukrccD888QpxqCvYulW6eMHHEFMep80CdGqNdRRdfJcCGtOdBuR9dKWMZs0ziU+im/duQuo1Edh1dMuE7rcuLCrCadLGvLQruuac+onr2ZsCOmfeuliVwCzo5kYpXMg60M11t5pOIYDBf10V0xAovOxi4XjYPPuXsznWAUprmhdn81Kv2mWZ2eZ0PYVaButszAMRYurPP/9cgvz+++8LIkMlPgqd0tSPP/64GCtBaVhhpPVa4jEUJIuXy4Udd9WRm2ARDfEyW/a9v7jJ/Vd1Mt1vv/22BKh3mQAQQU0ziz+BFoMCnKYms83VD3U7Uzv13YXG/su9ongRn9HQPF4uPhu7zP/999/vks6LBs1MxiMCo6GU925hUGQWZNwMqsz8MtuLrVGuN5e7yyULqXIPl2dmoyFSOmxeMiJUrSTDOgz8TbQypuYBhqxriA3VrDK+kSdoFO8WILHDaUeRNV1CmZvAEyqZerYUlRLTUoAA0s3kNmusCbV8nxvbY9/m5g/nMattrtRQfzeveNPDn9fIaf7L3TXud7nLxu1mq18+UGRSpo4IWptExFfdBWhSpxgeN7Qe+TaIm+15TE/kUVabn3XYvOzLP+4Fs8kGsfZqVK2vf9OLStiaS2nGRVq7hBV0IqbvGizB5bjlo0ePFmMq2qw3G2WzubaXLCn4IvDRpsglmNaiOIjIX3/9tQ52rXMTi/E+NNB6rXOBhbCY4rOzWTBvdoFBHTt5AFxKYG/P1s1CU0kCDLZQaJqmxb/++uvSSChTHpC+Z6AKvHqZDx8+XN9/+OGH3Z9n2yUYjNFoRl/cEFCmp5TO1YG4eevmDhgpb9ZLq6Dkg4InLfk9LJPP1qMgZ4HmKiV0Hgg3f2pyGQISs+Onoo0GJqPTuToXdSW437xKcttt/qbVITPLlYln8mK2WdfHSAxgOvj1bwq01Fy0DDT94qmX2idGVcAzn7RmtnAofpvlLkFIOf+NwC/wDaUvf47Zies0GTCwQK5Kk73PrXp2efJjRy4rM09lyTnzp64Fx5dbd3o0MR8azcSCMMEklNkP5WbtmddQbjSLuPbNOmheZOQCWfrVmUJunJ1bfMxqYZs/berDwOOCs/cFap0LkKuJS3vS/SzDZ3XZ2izSobVUuCNGU5SzleDoQZ+FSGfPCXAO64HO4fwXGoRor08LlQkJkqbqEMz1kpgKU+aU8tOejoVSXBKcbczmipMUpPT+UPyMJlrap9A84Pj43GL/Ay7gs62Y7foXAAAAAElFTkSuQmCC',
                }),
            ),
        ),
    vu = {
        root: 'CopyButton_root_49d34ed8',
        base: 'CopyButton_67fe8760',
        base__enabled: 'CopyButton_base__enabled_49d34ed8',
        base__disabled: 'CopyButton_base__disabled_4ef2eeda',
        icon: 'CopyButton_icon_e339ed33',
        base__copyStatus: 'CopyButton_base__copyStatus_49d34ed8',
        icon__export: 'CopyButton_icon__export_49d34ed8',
        base__copiedStatus: 'CopyButton_base__copiedStatus_49d34ed8',
        icon__exportDone: 'CopyButton_icon__exportDone_8d5db080',
    },
    fu = te.resolve('strings'),
    bu = function (e) {
        const [t, n] = a.useState('copy'),
            s = We(),
            r = rt({
                header: fu.readOrEmpty('playlists.share.copy_button.title'),
                body: fu.readOrEmpty('playlists.share.copy_button.body'),
            }),
            o = xe();
        return f.jsxs('div', {
            ...r,
            'data-test-id': 'copyButton',
            className: b(vu.base, vu[`base__${t}Status`], e.disabled ? vu.base__disabled : vu.base__enabled),
            onClick: (t) => {
                if ((r.onClick(), e.disabled)) return;
                o.play('click', { target: 'vehicle:playlists:copy_button', original: t });
                const a = e.onCopy();
                'string' == typeof a &&
                    Lt(a)
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
            children: [
                f.jsx(hu, { className: b(vu.icon, vu.icon__export) }),
                f.jsx(gu, { className: b(vu.icon, vu.icon__exportDone) }),
            ],
        });
    },
    xu = (e) =>
        a.createElement(
            'svg',
            {
                width: 24,
                height: 24,
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                ...e,
            },
            a.createElement(
                'g',
                { opacity: 0.8 },
                a.createElement('path', {
                    d: 'M9.99805 8H5.00195L5 20H17V17H17.9961V19.5C17.9961 20.6045 17.1045 20.9999 16 21H6C4.89543 21 3.99609 20.6046 3.99609 19.5L3.99805 8.5C3.99805 7.39543 4.89348 7 5.99805 7H9.99805V8Z',
                    fill: '#0D0E10',
                }),
                a.createElement('path', {
                    d: 'M18.002 9.56445L12 15.5L9 16L9.5 13L15.4375 7.00977L18.002 9.56445Z',
                    fill: '#0D0E10',
                }),
                a.createElement('path', {
                    d: 'M20.9609 6.61133L18.9492 8.49902L16.4307 5.89941L18.3965 4.05762L20.9609 6.61133Z',
                    fill: '#0D0E10',
                }),
            ),
            a.createElement(
                'g',
                { opacity: 0.9, filter: 'url(#filter0_d_111851_505977)' },
                a.createElement('path', {
                    d: 'M9.99805 7H5.00195L5 19H17V16H17.9961V18.5C17.9961 19.6045 17.1045 19.9999 16 20H6C4.89543 20 3.99609 19.6046 3.99609 18.5L3.99805 7.5C3.99805 6.39543 4.89348 6 5.99805 6H9.99805V7Z',
                    fill: 'url(#paint0_radial_111851_505977)',
                }),
                a.createElement('path', {
                    d: 'M9.99805 7H5.00195L5 19H17V16H17.9961V18.5C17.9961 19.6045 17.1045 19.9999 16 20H6C4.89543 20 3.99609 19.6046 3.99609 18.5L3.99805 7.5C3.99805 6.39543 4.89348 6 5.99805 6H9.99805V7Z',
                    fill: 'url(#pattern0_111851_505977)',
                    fillOpacity: 0.8,
                }),
                a.createElement('path', {
                    d: 'M18.002 8.56445L12 14.5L9 15L9.5 12L15.4375 6.00977L18.002 8.56445Z',
                    fill: 'url(#paint1_radial_111851_505977)',
                }),
                a.createElement('path', {
                    d: 'M18.002 8.56445L12 14.5L9 15L9.5 12L15.4375 6.00977L18.002 8.56445Z',
                    fill: 'url(#pattern1_111851_505977)',
                    fillOpacity: 0.8,
                }),
                a.createElement('path', {
                    d: 'M20.9609 5.61133L18.9492 7.49902L16.4307 4.89941L18.3965 3.05762L20.9609 5.61133Z',
                    fill: 'url(#paint2_radial_111851_505977)',
                }),
                a.createElement('path', {
                    d: 'M20.9609 5.61133L18.9492 7.49902L16.4307 4.89941L18.3965 3.05762L20.9609 5.61133Z',
                    fill: 'url(#pattern2_111851_505977)',
                    fillOpacity: 0.8,
                }),
            ),
            a.createElement(
                'defs',
                null,
                a.createElement(
                    'filter',
                    {
                        id: 'filter0_d_111851_505977',
                        x: 3.99609,
                        y: 3.05762,
                        width: 16.9648,
                        height: 17.9424,
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
                        values: '0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0627451 0 0 0 1 0',
                    }),
                    a.createElement('feBlend', {
                        mode: 'normal',
                        in2: 'BackgroundImageFix',
                        result: 'effect1_dropShadow_111851_505977',
                    }),
                    a.createElement('feBlend', {
                        mode: 'normal',
                        in: 'SourceGraphic',
                        in2: 'effect1_dropShadow_111851_505977',
                        result: 'shape',
                    }),
                ),
                a.createElement(
                    'pattern',
                    { id: 'pattern0_111851_505977', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', {
                        xlinkHref: '#image0_111851_505977',
                        transform: 'matrix(0.0208333 0 0 0.020861 0 -0.000662862)',
                    }),
                ),
                a.createElement(
                    'pattern',
                    { id: 'pattern1_111851_505977', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', {
                        xlinkHref: '#image0_111851_505977',
                        transform: 'matrix(0.0208333 0 0 0.020861 0 -0.000662862)',
                    }),
                ),
                a.createElement(
                    'pattern',
                    { id: 'pattern2_111851_505977', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    a.createElement('use', {
                        xlinkHref: '#image0_111851_505977',
                        transform: 'matrix(0.0208333 0 0 0.020861 0 -0.000662862)',
                    }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_111851_505977',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint1_radial_111851_505977',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement(
                    'radialGradient',
                    {
                        id: 'paint2_radial_111851_505977',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    a.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    a.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                a.createElement('image', {
                    id: 'image0_111851_505977',
                    width: 48,
                    height: 48,
                    preserveAspectRatio: 'none',
                    xlinkHref:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnBSURBVHgBbdrnbhzHEobhpTSiguWcYRswYMD3fwn+68swYFuAcg6kwuHb5DMuEaeBBXd6uqsrflVdy6M//vjjw/v37w8fPnw4bNu2Pqenp4eTk5PDrVu3Drdv317fe//27dv1vfXXr18/XL169fDq1atD48qVK2vN0dHRmu+59e/evTscHx+vuZcvX65n57S2dY0XL16s9a0z35qeG70zend05eiwXd0OVyK+Js42xUDMtQnDCdOhhPQXoZs3b+7PHdj7hGpf89G3r/fzjN7duHFjp0MoQji37ymzddeuXTucnJ4c3p6eK2frZQPhniMUwRa8efNmvYto763JEq2LIE11QOt715qYi0bfCT4t1ByrZtHeTUW2t+/9bbDe2ar1PiVtLWhzD03GEKEcShO0GgME6F17aC3B+8t9uEX7nz17ttb2iRZhllbP6PW9T3t6N63Xp+d3789dMtpLoNevX3/kd42INf/555/v/k8jfVr3ySef7G7R8+PHjxeN5r/88svd/XoX45TEVTDpvNY9f/788Omnn34UH7yAm3s+PTlX5paZI0bbmO9AwSOQxEUBR/MxF/H20Gx/uUTxEGOdk2DR+ueffw5Pnjw5fPfdd4cvvvhit3b7nIHR5hOqfQm2hD26cji+dnwOBjPy2yz6oUjIETMx0KdDIhzDrYnBtCrwBRqrFXwxzo97H732NMSc4Pee0uzr2fdciEdsbZgoZGAmDZFeAGMkRiNmvXV9RyslJHAjxppPo9FtvzHdkUJTWN+zqjPP3fw/K23cpgkEImbwR2NiNPThcpRAUzO/tIewzXsmLBfqr4CekCoPdM779+d7Ts/gdIM+Du2wNAYFaAQSYar59no30QNMYq5kCInEG2g1bx9rQjyCQS0KBDjbZRicDExf5uNTg6D0/0HuhGKa59MEI3AWhDS5DUFpnYIngp3zchY/Ee/DTC2OSKaKYIgj0JQO4LThYIFGo9ONJuYDB0x2VgKEZsWGZDcTa0PCZCFK3DDG1xfGXkDhTGqYkTlpdfonK8UQbCcQWEbPORNZGu0T/JgU/GJVXC2LiHQo0ifc5v/igv/LnB0cA61jVpZhMetm9oUm9rU2Bq29f//+4enTpwt+Q6pZYJYk7927t4Tv+45CMTzroJ9++umj2qcNhIjRGOgARVvvaUmAU0DWYNE7d+4sl+TLmCrX9Nzazvj555/X3uZnELPWZ599tsfnRnLBxm2YDwFDsMdw61mrv7Qv0SRs8/2Nxtdff3345ptv1jolTIyliATpGXNgHdSi1XcV8IUrbXtWhBL8TIDPbMgqXKP9MQDelMh8WjXbHBRTHnvf91nCqKNmcmuudVw4GqsanYEleJQJop4LEAAKdHiCKDf6AAUW4N/KDvtntRpjrNyccnyCyPUb11f9M9Fpgc+8oNg0y2qwJjElDFhULXInIGB+wqccIYYwy01ZFB+S2sw1KUDxud/s4CpJ2ziDrMHcMztOC4XfE/p2rV2U0FlUknRe5/B7Vat4pIjpzidvTnawEOxLCJnRARgwjxhtgj/+LxgJxkLNdRgXE1OgltW4JgDgXuD21s1bew7iHZLnUuJMDhKPAadngSZrzzUsR4hoEiTrcdGJPtN1+tu8IRmugL19bVcc6MyNor2QKlxuMd/ky5m0REJTrAKP50VcLhBPoNFVcb/+XSDW9PPmOyda7ibOoLhZWM57xQXN7fD333+vw3755ZfdHzN7GTHiVZNTY9NdVKUTZl05035XTZB49+7dte6rr75a54Xr1UBptPUpIYWqiF2IEqwMXI5oXedDwJXIvv322928Xjx48GCHRPUJOJzXTKggucws7FICzylABdpwpVQ0TjRsTXwkREDR3n///fcj1940npSvTWI0zUskWSVBYkjJQRAXfJaYLkfwvsfIzCMKNVUv91WC5AVlbi6Dr9aw0OYQuB4TmV0wQokYF2BubCpEbkfT4NSISZckCU5jC33M6d5Bu85QakM/sbMXcy1uI/hyh4XR030wYQ7icJ+ZoefNqTNYCK1G51Kesh4Ec9fOUJ5TkCp1A4Wiel5eMvnMBzTQkCElldk2pJ3ZWZi3MofPukrccD888QpxqCvYulW6eMHHEFMep80CdGqNdRRdfJcCGtOdBuR9dKWMZs0ziU+im/duQuo1Edh1dMuE7rcuLCrCadLGvLQruuac+onr2ZsCOmfeuliVwCzo5kYpXMg60M11t5pOIYDBf10V0xAovOxi4XjYPPuXsznWAUprmhdn81Kv2mWZ2eZ0PYVaButszAMRYurPP/9cgvz+++8LIkMlPgqd0tSPP/64GCtBaVhhpPVa4jEUJIuXy4Udd9WRm2ARDfEyW/a9v7jJ/Vd1Mt1vv/22BKh3mQAQQU0ziz+BFoMCnKYms83VD3U7Uzv13YXG/su9ongRn9HQPF4uPhu7zP/999/vks6LBs1MxiMCo6GU925hUGQWZNwMqsz8MtuLrVGuN5e7yyULqXIPl2dmoyFSOmxeMiJUrSTDOgz8TbQypuYBhqxriA3VrDK+kSdoFO8WILHDaUeRNV1CmZvAEyqZerYUlRLTUoAA0s3kNmusCbV8nxvbY9/m5g/nMattrtRQfzeveNPDn9fIaf7L3TXud7nLxu1mq18+UGRSpo4IWptExFfdBWhSpxgeN7Qe+TaIm+15TE/kUVabn3XYvOzLP+4Fs8kGsfZqVK2vf9OLStiaS2nGRVq7hBV0IqbvGizB5bjlo0ePFmMq2qw3G2WzubaXLCn4IvDRpsglmNaiOIjIX3/9tQ52rXMTi/E+NNB6rXOBhbCY4rOzWTBvdoFBHTt5AFxKYG/P1s1CU0kCDLZQaJqmxb/++uvSSChTHpC+Z6AKvHqZDx8+XN9/+OGH3Z9n2yUYjNFoRl/cEFCmp5TO1YG4eevmDhgpb9ZLq6Dkg4InLfk9LJPP1qMgZ4HmKiV0Hgg3f2pyGQISs+Onoo0GJqPTuToXdSW437xKcttt/qbVITPLlYln8mK2WdfHSAxgOvj1bwq01Fy0DDT94qmX2idGVcAzn7RmtnAofpvlLkFIOf+NwC/wDaUvf47Zies0GTCwQK5Kk73PrXp2efJjRy4rM09lyTnzp64Fx5dbd3o0MR8azcSCMMEklNkP5WbtmddQbjSLuPbNOmheZOQCWfrVmUJunJ1bfMxqYZs/berDwOOCs/cFap0LkKuJS3vS/SzDZ3XZ2izSobVUuCNGU5SzleDoQZ+FSGfPCXAO64HO4fwXGoRor08LlQkJkqbqEMz1kpgKU+aU8tOejoVSXBKcbczmipMUpPT+UPyMJlrap9A84Pj43GL/Ay7gs62Y7foXAAAAAElFTkSuQmCC',
                }),
            ),
        ),
    yu = 'EditButton_e0942ef0',
    Cu = 'EditButton_icon_a08c89e9',
    wu = te.resolve('strings');
function Nu({ id: e, className: t }) {
    const a = xe(),
        n = Te(),
        s = rt({
            header: wu.readOrEmpty('playlists.edit_button.title'),
            body: wu.readOrEmpty('playlists.edit_button.body'),
        });
    return f.jsx('div', {
        ...s,
        className: b(yu, t),
        'data-test-id': 'editButton',
        onClick: (t) => {
            (s.onClick(),
                a.play('click', { target: 'vehicle:playlists:edit_button', original: t }),
                n.push('/hangar/editVehiclePlaylists', { id: e }));
        },
        onMouseEnter: (e) => {
            (s.onMouseEnter(e), a.play('mouse-enter', { target: 'vehicle:playlists:edit_button', original: e }));
        },
        children: f.jsx(xu, { className: Cu }),
    });
}
const Iu = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_',
    ju = 65535;
function ku(e) {
    if (0 === e.length) return Ts('EMPTY_INPUT');
    const t = (function (e) {
            let t = e[0] ?? 0;
            for (let a = 0; a < e.length; a++) t = (t + e[a]) & ju;
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
            ((s += Iu[e]), (r &= (1n << BigInt(o)) - 1n));
        }
    if (o > 0) {
        const e = 63 & Number(r << BigInt(6 - o));
        s += Iu[e];
    }
    return Ls(s);
}
const Su = 'Item_background_321cda1e',
    Pu = 'Item_c5163bf',
    Eu = 'Item_base__selected_5f6fcc69',
    Mu = 'Item_button_8b3e738d',
    Du = 'Item_selectedIcon_eb50b3a6',
    Lu = 'Item_content_db9841ac',
    Tu = 'Item_title_3edba705',
    Au = 'Item_actions_8ac98f7',
    Bu = { container: 'Item_alert_31c28fa6', icon: 'Item_alertIcon_f872f769' },
    Vu = C(function (e) {
        const { playlist: t } = e,
            a = Hs(),
            n = Fe();
        return f.jsxs('div', {
            className: b(Pu, a.model.currentId() === e.id && Eu),
            children: [
                f.jsx('div', { className: Su }),
                f.jsxs(Tt, {
                    className: Mu,
                    onClick: () => {
                        (a.controls.select(e.id), n.close());
                    },
                    'data-test-id': `playlist-${t.title}`,
                    children: [
                        f.jsxs('span', {
                            className: Lu,
                            children: [
                                f.jsx(uu, { value: 'checked', className: Du }),
                                f.jsx(Re, { text: t.title, className: Tu }),
                                f.jsx(pu, { id: e.id, classNames: Bu }),
                            ],
                        }),
                        f.jsxs('span', {
                            className: Au,
                            onClick: (e) => e.stopPropagation(),
                            children: [
                                f.jsx(bu, {
                                    onCopy: function () {
                                        const e = ku(t.list);
                                        return 'error' === e.type ? console.error(e.error) : e.value;
                                    },
                                    disabled: 0 === t.list.length,
                                }),
                                f.jsx(Nu, { id: e.id }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Ru = C(function (e) {
        const t = Hs().model.byId(e.id);
        return 'ok' === t.type && void 0 !== t.value ? f.jsx(Vu, { playlist: t.value, id: e.id }) : null;
    }),
    Ou = C(function () {
        const e = Hs(),
            t = Fe();
        return f.jsxs('div', {
            className: b(Pu, !e.model.currentId() && Eu),
            children: [
                f.jsx('div', { className: Su }),
                f.jsx(Tt, {
                    className: Mu,
                    onClick: () => {
                        (e.controls.select(void 0), t.close());
                    },
                    'data-test-id': 'playlist-AllVehicles',
                    children: f.jsxs('span', {
                        children: [
                            f.jsx(uu, { value: 'checked', className: Du }),
                            te.resolve('strings').readOrEmpty('pages.titles.allVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    zu = 'Content_divider_b37223ef',
    Hu = 'Content_icon_4da9c1eb',
    Uu = 'Content_trigger_4b0aad5c',
    qu = 'Content_triggerText_2dc694b6',
    Fu = C(function () {
        const e = Hs().model.sortedIds();
        return f.jsxs('div', { children: [f.jsx(Ou, {}), e.map((e) => f.jsx(Ru, { id: e }, e))] });
    }),
    Zu = Me('Divider', zu),
    Wu = C(function (e) {
        const t = Hs(),
            a = te.resolve('strings'),
            [n, s] = At('add'),
            r = e.asChild ? Bt : Tt;
        return f.jsxs(r, {
            className: Uu,
            'data-test-id': 'createPlaylist',
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            onClick: () => t.controls.create(),
            children: [
                f.jsx(mu, { className: Hu, children: f.jsx(uu, { value: n }) }),
                f.jsx('span', { className: qu, children: a.readOrEmpty('playlists.list.create') }),
            ],
        });
    }),
    Gu = function (e) {
        const t = Hs(),
            a = te.resolve('strings'),
            [n, s] = At('import'),
            r = e.asChild ? Bt : Tt;
        return f.jsxs(r, {
            className: Uu,
            'data-test-id': 'importPlaylist',
            onClick: t.controls.openImport,
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            children: [
                f.jsx(mu, { className: Hu, children: f.jsx(uu, { value: n }) }),
                f.jsx('span', { className: qu, children: a.readOrEmpty('playlists.imports.trigger') }),
            ],
        });
    },
    Xu = {
        popover: 'Dropdown_popover_b5203d93',
        scrollContent: 'Dropdown_scrollContent_7363dda3',
        bar: 'Dropdown_bar_2d94e05e',
        area__begin: 'Dropdown_area__begin_8a87ef04',
        area__end: 'Dropdown_area__end_ae66235b',
        list: 'Dropdown_list_41b8eefe',
        triggers: 'Dropdown_triggers_b8372e20',
        currentTitle: 'Dropdown_currentTitle_11ba3707',
        trigger: 'Dropdown_trigger_f754201d',
        currentTitleText: 'Dropdown_currentTitleText_13099382',
        alert: 'Dropdown_alert_8195eae1',
        alertIcon: 'Dropdown_alertIcon_61f05dd3',
        arrow: 'Dropdown_arrow_5a21c825',
        arrow__opened: 'Dropdown_arrow__opened_ef9f7c1d',
    },
    $u = te.resolve('strings'),
    Ku = [25, 25],
    Yu = { container: Xu.alert, icon: Xu.alertIcon },
    Qu = C(function () {
        const { api: e } = be(),
            [t, n] = we(e, Ku),
            { opened: s } = Fe();
        return (
            a.useEffect(() => {
                if (s) return Vt(() => Vt(e.recalculateContent));
            }, [s, e.recalculateContent]),
            f.jsx(Ne, {
                className: b(Xu.area, !t && Xu.area__begin, !n && Xu.area__end),
                classNames: { content: Xu.scrollContent },
                children: f.jsx(Fu, {}),
            })
        );
    }),
    Ju = C(function (e) {
        const t = qs();
        return t && t.model.enabled.get()
            ? f.jsx(qe.Portal, {
                  position: 'bottom',
                  ...e,
                  children: f.jsx(Rt, {
                      children: f.jsxs(qe.Display, {
                          'data-name': 'playlist-dropdown-content',
                          className: Xu.popover,
                          children: [
                              f.jsx(qe.Tip, {}),
                              f.jsx('div', {
                                  className: Xu.list,
                                  children: f.jsxs(je, {
                                      children: [f.jsx(Qu, {}), f.jsx(Ie, { classNames: { base: Xu.bar } })],
                                  }),
                              }),
                              f.jsx(Zu, {}),
                              f.jsxs('div', { className: Xu.triggers, children: [f.jsx(Wu, {}), f.jsx(Gu, {})] }),
                          ],
                      }),
                  }),
              })
            : null;
    });
function em(e) {
    const t = Fe();
    return f.jsx(uu, { value: 'arrow_down', className: b(Xu.arrow, t.opened && Xu.arrow__opened, e.className) });
}
const tm = C(function (e) {
        const t = e.limit
            ? (function (e, t, a = '...') {
                  return (
                      se(
                          t - a.length >= 0,
                          `Incorrect tranticate config max(${t}) - rest.length(${a.length}) must be greater than 0`,
                      ),
                      e.length <= t ? [e, !1] : [`${e.slice(0, t - a.length)}${a}`, !0]
                  );
              })(e.title, e.limit)[0]
            : e.title;
        return f.jsxs('div', {
            className: b(Xu.currentTitle, e.className),
            children: [
                f.jsx(Re, { text: t, className: Xu.currentTitleText }),
                e.id && f.jsx(pu, { classNames: Yu, id: e.id, size: e.alertSize }),
            ],
        });
    }),
    am = C(function (e) {
        const t = qs(),
            a = null == t ? void 0 : t.model.current(),
            n = xe(),
            s = rt({ header: null == a ? void 0 : a.title, body: $u.readOrEmpty('playlists.trigger.explain') });
        if (!t || !1 === t.model.enabled.get()) return e.fallback;
        const r = e.asChild ? Bt : 'div';
        return f.jsx(qe.Trigger, {
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
                        className: b(Xu.trigger, e.className),
                        children: [
                            f.jsx(Ot, { children: e.children }),
                            a
                                ? f.jsx(tm, { limit: e.limit, id: a.id, title: a.title, alertSize: e.alertSize })
                                : f.jsx(tm, { title: $u.readOrEmpty('pages.titles.allVehicles') }),
                            f.jsx(em, {}),
                        ],
                    }),
                }),
        });
    }),
    nm = a.createContext(void 0);
function sm() {
    const e = a.useContext(nm);
    if (!e) throw new Error("Can't call useFilters outside of FiltersContext Provider. Please wrap it.");
    return e;
}
const rm = {
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
    om = C(function (e) {
        const t = sm(),
            a = t.tooltipHeaderMap ?? Yn,
            n = t.tooltipBodyMap ?? Qn,
            s = te.resolve('strings'),
            r = e.tooltip.body !== $n ? s.readOrEmpty(`tank_carousel_filter.tooltip.${n[e.tooltip.body]}.body`) : '',
            o = rt({ header: s.readOrEmpty(`${a[e.tooltip.header]}`), body: r });
        return f.jsx(im, { ...e, tooltip: e.tooltip.body !== $n && o });
    }),
    im = C(function (e) {
        const t = sm(),
            n = t.filters.get(),
            s = a.useMemo(() => {
                var t;
                if ('role' === e.event.type) {
                    const t = e.event.role;
                    return Object.values(n).some((e) => e.some((e) => e.includes(t)));
                }
                return null == (t = n[e.event.field]) ? void 0 : t.includes(e.event.value);
            }, [e.event, n]);
        return f.jsx(zt, {
            ...e.tooltip,
            theme: Ut.primary,
            size: Ht.extraSmall,
            className: b(rm.toggle, s && rm.toggle__activated, e.className),
            activated: s,
            onClick: () => {
                (t.change(e.event), e.tooltip && e.tooltip.onClick());
            },
            children: e.children,
        });
    });
function lm(e) {
    return f.jsx('div', {
        className: b(rm.toggleContainer, e.className),
        children: es.map((e) =>
            f.jsx(
                om,
                {
                    tooltip: { header: e, body: Gn },
                    event: { type: 'role', role: e },
                    children: f.jsx(Zt, { roleKey: e, size: Zt.sizes.x24x24, className: rm.icon }),
                },
                e,
            ),
        ),
    });
}
function cm(e) {
    return f.jsx('div', {
        className: b(rm.toggleContainer, rm.toggleContainer__type, e.className),
        children: as.map((e) =>
            f.jsx(
                om,
                {
                    tooltip: { header: e, body: Xn },
                    event: { field: ss, type: 'regular', value: e },
                    className: rm.toggle__type,
                    children: f.jsx(Ft, { type: e, size: Ft.sizes.x24x24 }),
                },
                e,
            ),
        ),
    });
}
function dm(e) {
    return f.jsx('div', {
        className: b(rm.toggleContainer, e.className),
        children: e.orderedNations.map((e) =>
            f.jsx(
                om,
                {
                    tooltip: { header: e, body: Kn },
                    event: { field: rs, type: 'regular', value: e },
                    children: f.jsx('div', {
                        className: rm.nationWrapper,
                        children: f.jsx(Pe, { className: rm.nationIcon, path: `flags.c_60x40.${e}` }),
                    }),
                },
                e,
            ),
        ),
    });
}
function um(e) {
    return f.jsx('div', {
        className: b(rm.toggleContainer, e.className),
        children: ns.map((e) =>
            f.jsx(
                om,
                {
                    tooltip: { header: 'tier', body: $n },
                    event: { field: os, type: 'regular', value: `level_${e}` },
                    children: f.jsx(Wt, { className: rm.vehicleLevel, value: e }),
                },
                e,
            ),
        ),
    });
}
function mm(e) {
    const t = st(`hangar.filter.special.${e.imagePath}`, `hangar.filter.special.${e.imagePath}_upscale`);
    return f.jsx(
        om,
        {
            tooltip: { header: e.special, body: e.special },
            event: { field: is, type: 'regular', value: e.special },
            children: f.jsx(Pe, {
                className: b(rm.specialsIcons, 'favorite' === e.special && rm.specialsIcons__favorite),
                path: t,
            }),
        },
        e.special,
    );
}
function pm() {
    const e = st('hangar.filter.special.isCommonProgression', 'hangar.filter.special.isCommonProgression_upscale');
    return f.jsx(om, {
        tooltip: { header: Jn, body: Jn },
        event: { field: ls, type: 'regular', value: Jn },
        children: f.jsx(Pe, { className: rm.specialsIcons, path: e }),
    });
}
const _m = C(function (e) {
    var t;
    const a = sm(),
        n = a.specialIds ?? ts,
        s = Xs(),
        r = s.model.bpState.active.get(),
        o = s.model.rentVehiclesList(),
        i = null == (t = Zn()) ? void 0 : t.model,
        l = !i || i.isCrystalEarnEnabled.get(),
        c = !i || i.isDailyMultipliedXpEnabled.get(),
        d = n.filter((e) => (0 !== o.length || 'rented' !== e) && (c || 'bonus' !== e) && (l || 'crystals' !== e));
    return f.jsxs('div', {
        className: b(rm.toggleContainer, e.className),
        children: [
            d.map((e) => {
                var t;
                return f.jsx(mm, { imagePath: (null == (t = a.imagesMap) ? void 0 : t[e]) ?? e, special: e }, e);
            }),
            r && f.jsx(pm, {}),
            e.children,
        ],
    });
});
function hm() {
    const e = $t(),
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
function gm({ fieldClassName: e, value: t, ...a }) {
    const n = te.resolve('strings');
    return f.jsxs(Gt.Provider, {
        value: t,
        children: [
            f.jsx(hm, {}),
            f.jsxs(Gt.Decoration, {
                className: b(rm.search, a.className),
                children: [
                    f.jsx(Gt.Icon, { icon: Gt.icons.search }),
                    f.jsx(Gt.Field, {
                        ...a,
                        className: rm.inputField,
                        classNames: { placeholder: rm.inputPlaceholder },
                        maxLength: 50,
                        placeholderVisibility: Xt.value,
                        children: n.readOrEmpty('tank_carousel_filter.popover.label.searchNameVehicle'),
                    }),
                    t.length > 0 && f.jsx(Gt.ClearButton, {}),
                ],
            }),
        ],
    });
}
function vm({ current: e, total: t, className: a }) {
    const n = te.resolve('intl'),
        s = te.resolve('strings');
    return f.jsxs(qe.Header, {
        className: b(rm.header, a),
        children: [
            f.jsx(qe.Title, { children: f.jsx(Se, { path: 'tank_carousel_filter.popover.title' }) }),
            f.jsx(qe.Subtitle, {
                children: f.jsx(Se, {
                    upgradeLegacy: !0,
                    path: 'tank_carousel_filter.popover.counter',
                    params: {
                        count: f.jsxs('span', {
                            children: [
                                f.jsx('span', { className: rm.currentValue, children: n.formatNumber('integral', e) }),
                                f.jsx('span', { className: rm.slash, children: s.readOrEmpty('common.common.slash') }),
                                n.formatNumber('integral', t),
                            ],
                        }),
                    },
                }),
            }),
        ],
    });
}
const fm = a.memo(function (e) {
        return f.jsxs(bm, {
            ...e,
            className: e.className ?? rm.scroll,
            children: [
                f.jsx(Se, { className: rm.category, path: 'tank_carousel_filter.popover.label.specials' }),
                f.jsx(_m, { children: e.children }),
            ],
        });
    }),
    bm = a.memo(function (e) {
        return f.jsx(je, {
            children: f.jsxs(qt, {
                className: e.className,
                barClassNames: e.barClassNames,
                scrollClassNames: e.scrollClassNames,
                children: [
                    f.jsx(Se, { className: rm.category, path: 'tank_carousel_filter.popover.label.vehicleTypes' }),
                    f.jsx(cm, {}),
                    f.jsx(Se, { className: rm.category, path: 'tank_carousel_filter.popover.label.vehicleRole' }),
                    f.jsx(lm, {}),
                    f.jsx(Se, { className: rm.category, path: 'tank_carousel_filter.popover.label.nations' }),
                    f.jsx(dm, { orderedNations: e.orderedNations }),
                    f.jsx(Se, { className: rm.category, path: 'tank_carousel_filter.popover.label.levels' }),
                    f.jsx(um, {}),
                    e.children,
                ],
            }),
        });
    }),
    xm = 'vehicle:filter:filter-button:reset-icon',
    ym = a.forwardRef(function ({ children: e, className: t, ...a }, n) {
        return f.jsx(Ve, {
            ...a,
            ref: n,
            classNames: { base: b(rm.filterButton, t) },
            size: Ve.sizes.small,
            theme: a.theme,
            autoAlignContent: !1,
            children: e,
        });
    }),
    Cm = C(
        a.forwardRef(function ({ current: e, total: t, classNames: a, onReset: n, ...s }, r) {
            const o = sm(),
                i = Fe(),
                l = te.resolve('intl'),
                c = te.resolve('strings'),
                d = st('hangar.filter.filter_button', 'hangar.filter.filter_button_upscale'),
                u = st('ui_kit.close_button.icon_small', 'ui_kit.close_button.icon_medium'),
                m = o.hasFilter(),
                p = xe();
            return f.jsx(zt, {
                ...s,
                ref: r,
                size: Ht.extraSmall,
                theme: Ut.primary,
                activated: i.opened,
                'data-test-id': 'vehiclesFilter',
                classNames: {
                    base: b(rm.filterTrigger, m && rm.filterTrigger__activeFilter, null == a ? void 0 : a.base),
                    bulb: rm.bulb,
                    content: rm.triggerContent,
                },
                children:
                    s.children ??
                    (m
                        ? f.jsxs('div', {
                              className: b(rm.activeFilterContent, null == a ? void 0 : a.content),
                              children: [
                                  l.formatNumber('integral', e),
                                  f.jsx('span', {
                                      className: rm.slash,
                                      children: c.readOrEmpty('common.common.slash'),
                                  }),
                                  f.jsx('span', { className: rm.total, children: l.formatNumber('integral', t) }),
                                  f.jsx(Pe, {
                                      path: u,
                                      className: rm.resetIcon,
                                      onClick: (e) => {
                                          (p.play('close', { target: xm, original: e }),
                                              e.stopPropagation(),
                                              o.reset(),
                                              null == n || n());
                                      },
                                      onMouseEnter: (e) => {
                                          p.play('mouse-enter', { target: xm, original: e });
                                      },
                                  }),
                              ],
                          })
                        : f.jsx(Pe, { path: d, width: 24, height: 24 })),
            });
        }),
    ),
    wm = C(function () {
        const e = bs();
        function t(e) {
            e.keyCode !== ht.ESCAPE && e.stopPropagation();
        }
        return f.jsx(gm, {
            value: e.model.searchName.get(),
            onChange: (t) => e.controls.search(t.target.value),
            onKeyDown: t,
            onKeyUp: t,
        });
    }),
    Nm = C(function () {
        const e = Xs(),
            t = e.model.vehicles.amount(),
            a = e.model.current.amount();
        return f.jsx(vm, { current: a, total: t });
    }),
    Im = C(function ({ classNames: e }) {
        const t = te.resolve('strings'),
            a = Xs(),
            n = a.model.vehicles.amount(),
            s = a.model.current.amount(),
            r = rt({
                header: t.readOrEmpty('tank_carousel_filter.tooltip.params.header'),
                body: t.readOrEmpty('tank_carousel_filter.tooltip.params.body'),
            });
        return f.jsx(qe.Trigger, {
            children: (t) =>
                f.jsx(Cm, {
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
    jm = C(function ({ children: e }) {
        const t = bs(),
            a = t.model.carouselRowCount.get(),
            n = te.resolve('strings');
        const s = rt({
                header: n.readOrEmpty('tank_carousel_filter.tooltip.toggleSwitchCarousel.header'),
                body: n.readOrEmpty('tank_carousel_filter.tooltip.toggleSwitchCarousel.body'),
            }),
            r = rt({
                header: n.readOrEmpty('tank_carousel_filter.tooltip.searchInput.header'),
                body: n.readOrEmpty('tank_carousel_filter.tooltip.searchInput.body').replace('%(count)d', String(50)),
            });
        return f.jsxs(qe.Body, {
            className: rm.body,
            children: [
                e,
                f.jsxs('div', {
                    className: rm.footer,
                    children: [
                        f.jsx(qe.Divider, {}),
                        f.jsxs('div', {
                            className: rm.footerButtons,
                            children: [
                                f.jsx(ym, {
                                    ...s,
                                    theme: Ve.themes.secondary,
                                    className: rm.carouselChanger,
                                    onClick: function () {
                                        const e = 1 === a ? Wn : 1;
                                        t.controls.carouselTypeChange(e);
                                    },
                                    children: f.jsx(Pe, {
                                        className: b(rm.carouselIcon, a === Wn && rm.carouselIcon__active),
                                        path: 'hangar.filter.carousel_selector',
                                    }),
                                }),
                                f.jsx('div', { ...r, className: rm.searchInputWrapper, children: f.jsx(wm, {}) }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    km = C(function ({ pivot: e = 0, position: t = 'bottom', classNames: n, customFilterProps: s, children: r }) {
        const o = bs(),
            i = qs(),
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
        return f.jsx(nm.Provider, {
            value: l,
            children: f.jsx('div', {
                className: null == n ? void 0 : n.base,
                children: f.jsxs(qe, {
                    children: [
                        f.jsx(Im, {
                            classNames: {
                                trigger: null == n ? void 0 : n.trigger,
                                content: null == n ? void 0 : n.triggerContent,
                            },
                        }),
                        f.jsx(qe.Portal, {
                            lazy: !0,
                            position: t,
                            pivot: e,
                            children: f.jsx(Rt, {
                                children: f.jsx(qe.Display, { className: rm.popover, children: r }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    }),
    Sm = C(function (e) {
        const t = bs().model.computes.nations();
        return f.jsxs(km, {
            ...e,
            children: [
                f.jsx(qe.Tip, {}),
                f.jsx(qe.Close, {}),
                f.jsx(Nm, {}),
                f.jsx(Pm, {}),
                f.jsx(jm, { children: f.jsx(fm, { orderedNations: t }) }),
            ],
        });
    }),
    Pm = C(function () {
        const e = qs(),
            { id: t } = Fe();
        return e && !1 !== e.model.enabled.get()
            ? f.jsxs(qe, {
                  children: [
                      f.jsx(Ju, { className: rm.playlistPortal, 'data-popover-outside-click-whitelist-id': t }),
                      f.jsx(am, {
                          asChild: !0,
                          className: rm.playlistTrigger,
                          fallback: null,
                          children: f.jsx(Ve, { theme: 'secondary', classNames: { content: rm.playlistTitle } }),
                      }),
                  ],
              })
            : null;
    }),
    Em = (e) =>
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
    Mm = (e) =>
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
    Dm = 'Header_1ce47eda',
    Lm = 'Header_base__ttcDisabled_bc60795e',
    Tm = 'Header_title_ae11a84e',
    Am = 'Header_playlist_2dc961b7',
    Bm = 'Header_toggles_ecb415bd',
    Vm = 'Header_toggle_a0b149a9',
    Rm = 'Header_text_aace6b88',
    Om = 'Header_icon_dbebe5f6',
    zm = 'Header_editPlaylist_86a9c19a',
    Hm = 'Header_divider_696b4d0d',
    Um = te.resolve('strings'),
    qm = C(function (e) {
        const t = Qs(),
            a = null == t ? void 0 : t.model.computed.ttcEnabled();
        return f.jsxs('div', { className: b(Dm, !a && Lm, e.className), children: [f.jsx(Fm, {}), f.jsx(Zm, {})] });
    }),
    Fm = C(function () {
        const e = Qs(),
            t = null == e ? void 0 : e.model.computed.ttcEnabled(),
            a = null == e ? void 0 : e.model.computed.crewEnabled(),
            n = Boolean(t && a),
            s = qs(),
            r = null == s ? void 0 : s.model.currentId(),
            o = Kt(
                { letterLimit: n ? 6 : 18 },
                {
                    medium: { letterLimit: n ? 18 : 28 },
                    large: { letterLimit: n ? 28 : 33 },
                    extraLarge: { letterLimit: 33 },
                },
            );
        return f.jsxs('div', {
            className: Tm,
            children: [
                f.jsx(Sm, {}),
                f.jsxs(qe, {
                    children: [
                        f.jsx(Ju, {}),
                        f.jsxs(cu, {
                            className: Hm,
                            children: [
                                f.jsx(am, {
                                    alertSize: 'lg',
                                    className: Am,
                                    fallback: f.jsx(Se, { className: Am, path: 'pages.titles.allVehicles' }),
                                    limit: o.letterLimit,
                                }),
                                void 0 !== r && f.jsx(Nu, { id: r, className: zm }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Zm = C(function (e) {
        const t = Qs(),
            a = null == t ? void 0 : t.model.computed.noSelectedVehicle();
        return t && a
            ? f.jsxs('div', {
                  className: b(Bm, e.className),
                  children: [
                      f.jsxs(zt, {
                          activated: t.model.crewEnabled.get(),
                          onClick: t.controls.crew.toggle,
                          className: Vm,
                          children: [
                              f.jsx(Em, { className: Om }),
                              f.jsx('div', {
                                  className: Rm,
                                  children: Um.readOrEmpty('hangar.myVehicles.buttons.crewToggle'),
                              }),
                          ],
                      }),
                      f.jsxs(zt, {
                          activated: t.model.ttcEnabled.get(),
                          onClick: t.controls.ttc.toggle,
                          className: Vm,
                          children: [
                              f.jsx(Mm, { className: Om }),
                              f.jsx('div', {
                                  className: Rm,
                                  children: Um.readOrEmpty('hangar.myVehicles.buttons.ttcToggle'),
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    }),
    Wm = {
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
    Gm = { paths: ['/:hangar/'], exact: !1 },
    Xm = Yt($s, { rootId: te.resolve('aliases').read((e) => e.hangar.shared.Settings('resId')) });
C(function () {
    return (
        Jm(),
        f.jsx(Xm, {
            children: f.jsx(Ym, {
                children: f.jsxs(Km, {
                    children: [f.jsx(qm, {}), f.jsx(Qm, {}), f.jsx(Dc, { className: Wm.emptyMessage })],
                }),
            }),
        })
    );
});
const $m = C(function (e) {
        const t = Qs();
        return (null == t ? void 0 : t.model.computed.crewEnabled())
            ? f.jsx('div', {
                  className: b(Wm.crewColumn, e.className),
                  children: f.jsx(ou, { className: Wm.crewWidget }),
              })
            : null;
    }),
    Km = function (e) {
        return f.jsxs('div', {
            className: b(Wm.crewWrapper, e.className),
            children: [f.jsx($m, {}), f.jsx('div', { className: Wm.content, children: e.children })],
        });
    },
    Ym = C(function (e) {
        const t = Qs(),
            a = null == t ? void 0 : t.model.computed.crewEnabled(),
            n = null == t ? void 0 : t.model.computed.ttcEnabled();
        return f.jsx(Ei, {
            classNames: {
                base: b(Wm.wrapper, !a && Wm.wrapper__crewDisabled, !n && Wm.wrapper__ttcDisabled),
                info: b(Wm.wrapperInfo, !n && Wm.wrapperInfo__ttcDisabled),
                content: b(Wm.wrapperContent, n && Wm.wrapperContent__ttc),
            },
            children: e.children,
        });
    }),
    Qm = C(function (e) {
        const t = Xs().model.selectedVehicle(),
            n = Qs(),
            s = a.useContext(Si),
            r = (() => {
                const e = null == n ? void 0 : n.model.computed.crewEnabled();
                return e && s.ttcEnabled ? 0 : e || s.ttcEnabled ? 1 : 2;
            })();
        return f.jsx('div', {
            className: b(Wm.listWrapper, !t && Wm.listWrapper__empty, e.className),
            children: f.jsx(je, { children: f.jsx(kc, { extraColumns: r }) }),
        });
    });
function Jm(e) {
    const t = Te(),
        a = xe(),
        n = Qt(t.location, Gm),
        s = null !== n;
    function r() {
        const e = null == n ? void 0 : n.params.hangar;
        e
            ? t.push(`/${e}/{root}`)
            : console.warn(`Can't detect route on ${t.location} for ${JSON.stringify(t.location)}`);
    }
    (Jt(s ? ht.SPACE : ht.NONE, (e) => {
        (a.play('hot-key', { target: 'hangar:all_vehicles:all_vehicles', original: e }), r());
    }),
        gt(s ? ht.ESCAPE : ht.NONE, () => {
            r();
        }));
}
const [ep, tp] = V()(({ observableModel: e }) => ({ ...e.primitives(['hasSuitableVehicles', 'assetsPointer']) }), O),
    ap = I(function (e) {
        const t = bs().model.computes.nations(),
            a = tp().model.assetsPointer.get(),
            n = Dn(null, { assetsPointer: a }).dynamicTexts.tooltip.filter,
            s = rt({ header: n.header(), body: n.body() });
        return f.jsxs(km, {
            ...e,
            children: [
                f.jsx(qe.Tip, { position: 'bottom', size: '80rem', offset: '120rem' }),
                f.jsx(qe.Close, {}),
                f.jsx(Nm, {}),
                f.jsx(Pm, {}),
                f.jsx(jm, {
                    children: f.jsx(fm, {
                        orderedNations: t,
                        children: f.jsx(im, {
                            tooltip: s,
                            event: { field: is, type: 'regular', value: 'funRandom' },
                            children: f.jsx('img', {
                                className: rm.specialsIcons,
                                src: Ln(a).library.carousel_filter(),
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    np = 'Header_1ce47eda',
    sp = 'Header_base__ttcDisabled_bc60795e',
    rp = 'Header_title_ae11a84e',
    op = 'Header_playlist_8759383d',
    ip = I(function () {
        const e = Qs(),
            t = null == e ? void 0 : e.model.computed.ttcEnabled();
        return f.jsxs('div', { className: b(np, !t && sp), children: [f.jsx(lp, {}), f.jsx(Zm, {})] });
    }),
    lp = I(function () {
        const e = Qs(),
            t = null == e ? void 0 : e.model.computed.ttcEnabled(),
            a = null == e ? void 0 : e.model.computed.crewEnabled(),
            n = Boolean(t && a),
            s = Kt(
                { letterLimit: n ? 6 : 18 },
                {
                    medium: { letterLimit: n ? 18 : 28 },
                    large: { letterLimit: n ? 28 : 33 },
                    extraLarge: { letterLimit: 33 },
                },
            );
        return f.jsxs('div', {
            className: rp,
            children: [
                f.jsx(ap, {}),
                f.jsxs(qe, {
                    children: [
                        f.jsx(Ju, {}),
                        f.jsx(am, {
                            alertSize: 'lg',
                            className: op,
                            fallback: f.jsx(Se, { className: op, path: 'pages.titles.allVehicles' }),
                            limit: s.letterLimit,
                        }),
                    ],
                }),
            ],
        });
    }),
    cp = 'AllVehicles_emptyMessage_93b119d2',
    dp = Yt($s, { rootId: te.resolve('aliases').read((e) => e.hangar.shared.Settings('resId')) }),
    up = I(function () {
        return (
            Jm(),
            f.jsx(dp, {
                children: f.jsx(Ym, {
                    children: f.jsxs(Km, { children: [f.jsx(ip, {}), f.jsx(Qm, {}), f.jsx(Dc, { className: cp })] }),
                }),
            })
        );
    }),
    mp = 'emptySlot',
    pp = 'left',
    _p = 'right',
    hp = 'both',
    gp = 'none',
    vp = 189,
    fp = 245,
    bp = {
        default: { single: vp, double: vp },
        breakpoints: { medium: { single: 224 }, large: { single: fp, double: fp }, extraLarge: { single: 302 } },
    },
    xp = (e, t) => (e || t ? (e ? (t ? gp : _p) : pp) : hp),
    yp = {
        empty: 'ActiveSlots_empty_9aab1ce1',
        doubleSlots: 'ActiveSlots_doubleSlots_2ce42013',
        slot__double: 'ActiveSlots_slot__double_e321ab18',
    };
function Cp({ width: e, className: t }) {
    return f.jsx('div', {
        className: yp.empty,
        children: f.jsx(kl, {
            className: t,
            style: { width: `${e}px` },
            children: f.jsx('div', { className: yp.vehicleSlot }),
        }),
    });
}
function wp({ slotId: e, width: t, currentVehicleId: a, double: n, className: s }) {
    const r = vl(Number(e));
    return void 0 === e
        ? null
        : yl(e)
          ? f.jsx(Ml, { className: b(hc, s), type: e, width: t, doubleRow: n })
          : e === ir
            ? f.jsx(Cp, { className: b(hc, s), width: t })
            : f.jsx(fc, {
                  ...r,
                  vehicleId: e,
                  selected: e === a,
                  doubleRow: n,
                  className: b(hc, s),
                  style: { width: t },
              });
}
function Np({ chunkedSlots: e, classNames: t, ...a }) {
    return void 0 === e
        ? null
        : f.jsx('div', {
              className: yp.doubleSlots,
              children: e.map((e, n) =>
                  f.jsx(wp, { ...a, slotId: e, className: b(yp.slot__double, null == t ? void 0 : t.slot) }, n),
              ),
          });
}
const Ip = {
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
function jp({ direction: e, className: t, ...a }) {
    return f.jsx(Ve, {
        ...a,
        classNames: {
            base: b(Ip.button, Ip[`button__${e}`], t),
            background: Ip.background,
            border: Ip.border,
            overlay: Ip.overlay,
            content: Ip.content,
        },
        theme: Ve.themes.secondary,
        size: Ve.sizes.small,
        autoAlignContent: !1,
        soundTarget: 'carousel:arrow_button',
        children: f.jsx(Pe, { path: 'hangar.carousel.buttonArrow', className: Ip.icon }),
    });
}
jp.direction = { right: 'right', left: 'left' };
const kp = {
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
    Sp = 0;
function Pp(e) {
    return ({ button: t }) => {
        t === Sp && e();
    };
}
function Ep({ itemWidth: e, api: t, children: n }) {
    const s = a.useRef(null),
        [r, o] = a.useState(!1),
        { applyScroll: i, animationScroll: l, disabled: c } = t,
        [d, u] = we(t),
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
        className: kp.navButtonWrapper,
        children: [
            f.jsx(jp, {
                direction: jp.direction.left,
                onMouseDown: Pp(() => _(-1)),
                onMouseUp: h,
                onMouseLeave: h,
                className: b(kp.navButton, kp.navButton__left, m && kp.navButton__hidden),
            }),
            f.jsx('div', { className: b(kp.mask, kp[`mask__${xp(d, u)}`]), children: n }),
            f.jsx(jp, {
                direction: jp.direction.right,
                onMouseDown: Pp(() => _(1)),
                onMouseUp: h,
                onMouseLeave: h,
                className: b(kp.navButton, kp.navButton__right, p && kp.navButton__hidden),
            }),
        ],
    });
}
const Mp = {
    base: 'CarouselSkeleton_1ac002e3',
    content: 'CarouselSkeleton_content_b18f8dd7',
    scroll: 'CarouselSkeleton_scroll_badf82c7',
};
function Dp(e) {
    return f.jsx('div', { ...e, className: b(Mp.content, e.className) });
}
function Lp({
    api: e,
    widthElement: t,
    totalElements: a,
    disabled: n,
    onDraggingState: s,
    renderElement: r,
    classNames: o,
}) {
    return f.jsx('div', {
        className: b(Mp.base, null == o ? void 0 : o.base),
        children: f.jsx(Ep, {
            api: e,
            itemWidth: t,
            children: f.jsx(xt, {
                api: e,
                elementWidth: t - Je(1),
                direction: 'horizontal',
                totalElements: a,
                wrappers: { Content: Dp },
                className: b(Mp.scroll, null == o ? void 0 : o.scroll),
                renderScroll: (t) => f.jsx(ea, { ...t, api: e, disabled: n, onDraggingState: s, children: t.children }),
                renderElement: (e) => (r ? r(e) : f.jsx(Cp, { className: null == o ? void 0 : o.element, width: t })),
            }),
        }),
    });
}
function Tp({ api: e, carouselRows: t }) {
    const n = (function (e) {
            const t = Kt(bp.default, bp.breakpoints);
            return Je(e === Wn ? t.double : t.single);
        })(t),
        [s, r] = a.useState({ carouselRows: 0, cardWidth: 0, visibleSlots: 0 });
    return (
        a.useLayoutEffect(() => {
            function a() {
                const a = e.getWrapperSize();
                a &&
                    r(
                        t !== Wn
                            ? { visibleSlots: Math.ceil(a / n), cardWidth: n, carouselRows: t }
                            : { visibleSlots: Math.ceil((a / n) * t), cardWidth: n, carouselRows: t },
                    );
            }
            a();
            return new Qe().add(e.events.on('resizeHandled', a)).add(e.events.on('recalculateContent', a)).dispose;
        }, [e, n, t]),
        s
    );
}
const Ap = 'Carousel_draggingOverlay_2ac699b0',
    Bp = 'Carousel_9b3e04da',
    Vp = 'Carousel_base__visible_24d53d12',
    Rp = 'Carousel_card_5449ec9a',
    Op = 'Carousel_card__inactive_c59331d9',
    zp = C(function () {
        const e = Ai(),
            [t, n] = a.useState(!1),
            { api: s } = ta(),
            r = Xs(),
            o = bs().model.carouselRowCount.get(),
            i = r.model.prebattleModeActive(),
            l = r.model.telecomRentStatus.get(),
            c = r.model.current.ids(),
            d = r.model.current.list(),
            u = r.model.selectedVehicle(),
            m = null == u ? void 0 : u.id,
            { currentIndex: p } = Cl(c, m),
            _ = fe(m),
            h = r.model.slots.recover.get(),
            { carouselRows: g, cardWidth: v, visibleSlots: x } = Tp({ api: s, carouselRows: o }),
            { activeSlotsAmount: y, activeSlotsIds: C } = (function (e, t, n, s) {
                return a.useMemo(() => {
                    if (!t) return { activeSlotsAmount: 0, activeSlotsIds: [] };
                    const a = xl(n, s),
                        r = e.length + a.right.length + a.left.length,
                        o = Math.max(0, t - r);
                    return {
                        activeSlotsAmount: r,
                        activeSlotsIds: [...a.left, ...e, ...a.right, ...Array(o).fill(mp)],
                    };
                }, [n, e, t, s]);
            })(c, x, h, l),
            w =
                ((N = C),
                a.useMemo(() => {
                    var e, t;
                    const a = [];
                    for (let n = 0; n < N.length; n += Wn) a.push(N.slice(n, n + Wn));
                    return (
                        1 === (null == (e = a.at(-1)) ? void 0 : e.length) && (null == (t = a.at(-1)) || t.push(mp)),
                        a
                    );
                }, [N]));
        var N;
        (a.useEffect(() => {
            const e = aa(500, !0, () =>
                na.contextMenu.hide(
                    0,
                    te.resolve('aliases').read((e) => e.common.contextMenu.Backport('resId')),
                ),
            );
            return (
                s.events.on('change', e),
                () => {
                    (e.cancel(), s.events.off('change', e));
                }
            );
        }, [s]),
            wl(s, p, v, g, c.length, x > y),
            (function (e, t, a, n, s) {
                const r = n === Wn;
                function o(n) {
                    a(-1 !== e ? t[e + n].inventoryId : t[0].inventoryId);
                }
                const i = [
                    { key: ht.ARROW_DOWN, blockKey: !r || e % n == n - 1 || e === t.length - 1, action: () => o(1) },
                    { key: ht.ARROW_UP, blockKey: !r || e % n == 0, action: () => o(-1) },
                    { key: ht.ARROW_LEFT, blockKey: r ? e < n : 0 === e, action: () => o(-n) },
                    {
                        key: ht.ARROW_RIGHT,
                        blockKey: r ? e > t.length - (n + 1) : e === t.length - 1,
                        action: () => o(n),
                    },
                    { key: ht.HOME, blockKey: 0 === t.length, action: () => a(t[0].inventoryId) },
                    { key: ht.END, blockKey: 0 === t.length, action: () => a(t[t.length - 1].inventoryId) },
                ];
                for (const { key: l, blockKey: c, action: d } of i) {
                    const e = s || c ? ht.NONE : l;
                    gt(e, d);
                }
            })(p, d, r.controls.select, g, 0 === c.length || i));
        const I = (function (e, t) {
            const [n, s] = a.useState(0 === t),
                r = Ge();
            return (
                a.useEffect(() => {
                    if (n || 0 === t) return s(!0);
                    function a() {
                        (s(!0), o.dispose(), r.clear());
                    }
                    r.run(a);
                    const o = new Qe()
                        .add(r.clear)
                        .add(e.events.on('resizeHandled', () => r.run(a)))
                        .add(e.events.on('recalculateContent', () => r.run(a)));
                    return o.dispose;
                }, [e, t, n, r]),
                n
            );
        })(s, c.length);
        return (
            a.useEffect(() => {
                e && e.model.computeds.enabled() && m !== _ && e.controls.reset();
            }, [m, _, e]),
            f.jsxs(f.Fragment, {
                children: [
                    f.jsx(Lp, {
                        api: s,
                        widthElement: v,
                        totalElements: g === Wn ? w.length : C.length,
                        disabled: x > y,
                        onDraggingState: n,
                        classNames: { base: b(Bp, I && Vp), element: b(Rp, t && Op) },
                        renderElement: (e) => {
                            const a = b(Rp, t && Op);
                            return g === Wn
                                ? f.jsx(_t, {
                                      failure: () => f.jsx(Cp, { className: a, width: v }),
                                      children: f.jsx(
                                          Np,
                                          {
                                              chunkedSlots: w[e],
                                              currentVehicleId: m,
                                              width: v,
                                              classNames: { slot: a },
                                              double: !0,
                                          },
                                          e,
                                      ),
                                  })
                                : f.jsx(_t, {
                                      failure: () => f.jsx(Cp, { className: a, width: v }),
                                      children: f.jsx(
                                          wp,
                                          { slotId: C[e], currentVehicleId: m, width: v, className: a, double: !1 },
                                          C[e] ?? e,
                                      ),
                                  });
                        },
                    }),
                    e && e.model.computeds.enabled() && f.jsx(gl, { freeSpaceRem: 0, tipSize: '32rem' }),
                    j.createPortal(t && f.jsx('div', { className: Ap }), document.body),
                ],
            })
        );
    }),
    Hp = (function () {
        const e = 'undefined' != typeof document && document.createElement('link').relList;
        return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
    })(),
    Up = {},
    qp = function (e, t, a) {
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
                        t in Up)
                    )
                        return;
                    Up[t] = !0;
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
                        (o.rel = n ? 'stylesheet' : Hp),
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
    Fp = a.lazy(() => qp(() => import('../../../chunks/widget.js'), [], import.meta.url));
function Zp(e) {
    var t;
    const n = null == (t = e.options) ? void 0 : t.rootId;
    if (n) return f.jsx(sa, { id: n, children: f.jsx(a.Suspense, { children: f.jsx(Fp, { ...e }) }) });
    console.error('TeaserWidget: rootId is not given');
}
const Wp = 'AllVehiclesButton_3837d663',
    Gp = 'AllVehiclesButton_grid_64f1c816',
    Xp = 'AllVehiclesButton_content_75d29fb4';
function $p(e) {
    const t = xe(),
        a = te.resolve('strings'),
        n = Te(),
        s = st('hangar.filter.all_vehicle_button', 'hangar.filter.all_vehicle_button_upscale'),
        r = rt({
            header: a.readOrEmpty('hangar.tooltip.filters.myVehicle.header'),
            body: a.readOrEmpty('hangar.tooltip.filters.myVehicle.body'),
        });
    function o() {
        n.push(e.route ?? '/hangar/allVehicles');
    }
    return f.jsxs(Ve, {
        ...r,
        classNames: { base: Wp },
        theme: Ve.themes.secondary,
        size: Ve.sizes.small,
        autoAlignContent: !1,
        onClick: function () {
            (r.onClick(), o());
        },
        children: [
            f.jsx(Pe, { className: Gp, path: s }),
            f.jsx(ra, {
                keyCode: ht.SPACE,
                onActive: function (e) {
                    (t.play('hot-key', { target: 'vehicle:all_vehicles:all_vehicles_button', original: e }), o());
                },
                silent: !0,
                classNames: { content: Xp },
                children: f.jsx(ra.Code, {}),
            }),
        ],
    });
}
const Kp = {
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
    Yp = a.memo(function () {
        return f.jsx(oa, { children: f.jsx(zp, {}) });
    }),
    Qp = Me('LoadoutPanel'),
    Jp = a.forwardRef(function ({ children: e, className: t, ...a }, n) {
        return f.jsx(Qp, { className: t, ref: n, ...a, children: e });
    }),
    e_ = 'shells',
    t_ = 'optDevices',
    a_ = e_,
    n_ = 'consumables',
    s_ = 'battleBoosters',
    r_ = 'equipment',
    o_ = 'instructions',
    i_ = 'shells',
    l_ = 'consumables',
    c_ = {
        Standard: 'standardEquipments',
        Bounty: 'bountyEquipments',
        Improved: 'improvedEquipments',
        Experimental: 'experimentalEquipments',
    },
    d_ = { Firepower: 'firepower', Survivability: 'survivability', Stealth: 'stealth', Mobility: 'mobility' },
    u_ = 'gunner_smoothTurret',
    m_ = 'driver_virtuoso',
    p_ = 'driver_smoothDriving',
    __ = 'fireFighting',
    h_ = 'naturalCover',
    g_ = 'gunner_rancorous',
    v_ = 'loader_pedant',
    f_ = 'commander_practical',
    b_ = 'commander_enemyShotPredictor';
function x_(e) {
    return {
        currentIndex: e.currentIndex,
        id: e.groupId,
        totalCount: e.totalCount,
        states: pe(e.setupSelector.states, (e) => e),
        switchEnabled: e.setupSelector.isSwitchEnabled,
        prebattleSwitchDisabled: e.setupSelector.isPrebattleSwitchDisabled,
        sections: pe(e.sections, y_),
    };
}
function y_(e) {
    return {
        type: e.type,
        name: e.name,
        vehicle: e.vehicle,
        vehicleType: e.vehicleType,
        newItemsCount: e.newItemsCount,
        slots: pe(e.slots, w_),
        warning: e.isWarning,
    };
}
function C_(e, t) {
    return pe(e, (e) =>
        (function (e, t) {
            return { dynamic: t, type: e.name, active: e.isCorrect, clickable: e.isClickable };
        })(e, t),
    );
}
function w_(e) {
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
            ? C_(e.specializations.specializations, e.specializations.isDynamic)[0]
            : void 0,
    };
}
const N_ = [s_, 'battleAbilities'],
    [I_, j_] = V('AmmunitionPanelModel')(
        (e) => {
            const { observableModel: t } = e,
                a = {
                    ...t.primitives({
                        isDisabled: 'disabled',
                        selectedSlot: 'selectedSlot',
                        selectedSection: 'selectedSection',
                        vehicleId: 'vehicleId',
                        hasVehSkillTree: 'hasVehSkillTree',
                    }),
                    groups: t.arrayClone('groups'),
                },
                n = k(() => Ct(a.groups.get(), (e.initial && e.initial.fromGroupModel) ?? x_)),
                s = Q.primitive((e, t) => a.selectedSlot.get() === e && a.selectedSection.get() === t),
                r = Q.primitive((e) => a.selectedSection.get() === e),
                o = Q.primitive((e) => {
                    for (const t of n()) for (const a of t.sections) if (a.name === e) return a.slots.length;
                    return 0;
                }),
                i = Q.primitive((e) => !N_.includes(e) && r(e) && o(e) > 1),
                l = Q.structural(() => {
                    const e = a.selectedSection.get(),
                        t = a.selectedSlot.get();
                    for (const a of n())
                        for (const n of a.sections) {
                            if (n.name !== e) continue;
                            const s = n.slots[t];
                            return s && -1 !== s.intCD
                                ? { groupIndex: a.currentIndex, item: { intCD: s.intCD, type: s.overlayType } }
                                : { groupIndex: a.currentIndex, item: void 0 };
                        }
                    return { groupIndex: 0, item: void 0 };
                }),
                c = Q.model((e) => n()[e]),
                d = Q.model((e, t) => {
                    var a;
                    return null == (a = c(e)) ? void 0 : a.sections[t];
                }),
                u = Q.model((e, t, a) => {
                    var n;
                    return null == (n = d(e, t)) ? void 0 : n.slots[a];
                });
            return {
                ...a,
                vehicleId: Q.primitive(() => {
                    const e = a.vehicleId.get();
                    return '' === e ? void 0 : e;
                }),
                computes: {
                    groups: n,
                    isSlotSelected: s,
                    isSectionSelected: r,
                    selectedSlotGroupAndItem: l,
                    groupByIndex: c,
                    sectionByIndex: d,
                    slotByIndex: u,
                    sectionSize: o,
                    sectionDraggable: i,
                },
            };
        },
        ({ externalModel: e }) => ({
            changePreset: e.createCallback((e) => ({ args: JSON.stringify({ ...e }) }), 'onChangeSetupIndex'),
            openSlotSpecDialog: e.createCallbackNoArgs('onOpenSlotSpecDialog'),
        }),
        { initial: (e) => e },
    );
var k_ = ((e) => ((e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING'), e))(k_ || {});
const S_ = te.resolve('strings');
const P_ = {
        base: 'PanelSwitcher_5e94cb32',
        switcher: 'PanelSwitcher_switcher_a8240ce9',
        switcher__warning: 'PanelSwitcher_switcher__warning_a8240ce9',
        switcherOverlay: 'PanelSwitcher_switcherOverlay_914ce250',
        item__warning: 'PanelSwitcher_item__warning_c6581e78',
        itemIcon: 'PanelSwitcher_itemIcon_484391b3',
        indicator: 'PanelSwitcher_indicator_a80d3313',
        indicator__inactive: 'PanelSwitcher_indicator__inactive_399f9969',
    },
    E_ = 'default',
    M_ = 'warning',
    D_ = 'selected',
    L_ = 'first',
    T_ = 'second';
function A_(e, t) {
    return `loadout.switcher.${e}_item_${t}`;
}
function B_(e) {
    const t =
        ((a = e.groupId),
        (n = e.modifier),
        rt({
            header: S_.readOrEmpty('tank_setup.tooltips.prebattleSwitchIndicator.title'),
            body: S_.readOrEmpty(`tank_setup.tooltips.prebattleSwitchIndicator.desc.c_${a}.${n}`),
        }));
    var a, n;
    const s = e.itemStates[0] === k_.WARNING,
        r = e.itemStates[1] === k_.WARNING,
        o = 1 === e.currentIndex;
    return f.jsxs('div', {
        className: b(P_.base, e.className),
        children: [
            f.jsxs(ia, {
                type: ia.types.vertical,
                onSwitch: function (t) {
                    e.onSwitch({ groupId: e.groupId, currentIndex: t ? 1 : 0 });
                },
                disabled: e.disabled,
                size: ia.sizes.small,
                checked: o,
                classNames: {
                    base: b(
                        P_.switcher,
                        ((i = e.currentIndex),
                        (l = e.itemStates),
                        l.some((e, t) => e === k_.WARNING && t !== i) && P_.switcher__warning),
                    ),
                    overlay: P_.switcherOverlay,
                },
                children: [
                    f.jsx(ia.Item, {
                        className: b(P_.item, s && P_.item__warning),
                        children: f.jsx(Pe, { path: A_(L_, s ? M_ : E_), className: P_.itemIcon }),
                    }),
                    f.jsx(ia.Item, {
                        className: b(P_.item, r && P_.item__warning),
                        children: f.jsx(Pe, { path: A_(T_, r ? M_ : E_), className: P_.itemIcon }),
                    }),
                    f.jsx(ia.SelectedItem, {
                        children: f.jsx(Pe, { path: A_(o ? T_ : L_, D_), className: P_.itemIcon }),
                    }),
                ],
            }),
            f.jsx(Pe, {
                ...(e.prebattleSwitchDisabled && t),
                path: 'loadout.switcher.indicator_' + (e.prebattleSwitchDisabled ? 'active' : 'default'),
                className: b(P_.indicator, !e.prebattleSwitchDisabled && P_.indicator__inactive),
            }),
        ],
    });
    var i, l;
}
const V_ = 'select',
    R_ = 'undo',
    O_ = 'cancel',
    z_ = 'swap',
    H_ = 'demount',
    U_ = 'demount_from_setup',
    q_ = 'demount_from_setups',
    F_ = 'destroy',
    Z_ = 'upgrade',
    W_ = 'add_one',
    G_ = 'drag_drop';
function X_(e) {
    return { currency: e.name, value: e.value, enough: e.isEnough };
}
function $_(e) {
    return pe(e, X_);
}
function K_(e) {
    return { priceID: e.priceID, price: $_(e.price), previousPrice: $_(e.defPrice), discount: $_(e.discount) };
}
const Y_ = (e) => ({
    canConfirm: e.canAccept,
    canCancel: e.canCancel,
    autoRenewalEnabled: e.isAutoRenewalEnabled,
    disabled: e.isDisabled,
    totalItemsInStorage: e.totalItemsInStorage,
    prices: Ct(e.price, (e) => X_(e)),
});
function Q_(e) {
    return { name: e.name, correct: e.isCorrect, clickable: e.isClickable };
}
function J_(e) {
    return { dynamic: e.isDynamic, specializations: ((t = e.specializations), pe(t, Q_)) };
    var t;
}
function eh(e) {
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
        price: K_(e.price),
        specializations: J_(e.specializations),
    };
}
function th(e) {
    return {
        ...eh(e),
        description: e.description,
        builtIn: e.isBuiltIn,
        itemName: e.itemName,
        buyMoreDisabled: e.isBuyMoreDisabled,
    };
}
const [ah, nh] = V('ConsumablesModel')(
    ({ observableModel: e }) => {
        const t = {
                ...e.primitives(['autoloadEnabled', 'hasChanges']),
                consumables: e.arrayClone('consumables'),
                dealData: e.transform((e) => Y_(e), 'dealPanel'),
                prices: e.transform((e) => pe(e, X_), 'dealPanel.price'),
            },
            a = Q.structural(() => {
                const e = t.dealData.get(),
                    a = [];
                return (
                    e.totalItemsInStorage > 0 &&
                        a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                    t.prices.get().forEach((e) => a.push(e)),
                    { ...e, prices: a }
                );
            }),
            n = Q.primitive(() => Ct(t.consumables.get(), th)),
            s = Q.model((e) => la(n(), (t) => t.intCD === e));
        return { ...t, computes: { consumables: n, consumableById: s, dealData: a } };
    },
    ({ model: e, externalModel: t }) => ({
        unmount: t.createCallback((e, t) => ({ intCD: e, currentSlotId: t, actionType: R_, type: n_ }), 'onSlotAction'),
        actionSlot: t.createCallback((e) => ({ ...e, type: n_ }), 'onSlotAction'),
        swapSlots: t.createCallback((e) => ({ ...e, actionType: G_ }), 'onSlotAction'),
        confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
        cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
        toggleAutoRenewal: t.createCallback(
            () => ({ value: !e.dealData.get().autoRenewalEnabled }),
            'dealPanel.onAutoRenewalChanged',
        ),
    }),
);
function sh(e) {
    return { valueKey: e.valueKey, value: e.value, valueType: e.valueType, debuff: e.isDebuff };
}
function rh(e) {
    return { localeName: e.localeName, values: ((t = e.values), pe(t, sh)) };
    var t;
}
function oh(e) {
    return { title: e.title, items: pe(e.items, rh) };
}
function ih(e) {
    return {
        ...eh(e),
        withDescription: e.withDescription,
        trophy: e.isTrophy,
        modernized: e.isModernized,
        upgradable: e.isUpgradable,
        effect: e.effect,
        level: e.level,
        destroyTooltipBodyPath: e.destroyTooltipBodyPath,
        activeSpecsMask: e.activeSpecsMask,
        bonuses: oh(e.bonuses),
    };
}
const [lh, ch] = V('EquipmentsModel')(
    ({ observableModel: e }) => {
        const t = {
                standardEquipments: e.transform((e) => pe(e, ih), 'simpleEquipments'),
                improvedEquipments: e.transform((e) => pe(e, ih), 'deluxEquipments'),
                bountyEquipments: e.transform((e) => pe(e, ih), 'trophyEquipments'),
                experimentalEquipments: e.transform((e) => pe(e, ih), 'modernizedEquipments'),
                ...e.primitives(['hasChanges', 'equipCoinCount']),
                ...e.primitives({ hasModernizedEquipmentToDisassemble: 'hasExperimentalEquipmentToDisassemble' }),
                standardEquipmentsFilters: n.box(new Set()),
                dealData: e.transform((e) => Y_(e), 'dealPanel'),
                prices: e.transform((e) => pe(e, X_), 'dealPanel.price'),
            },
            a = Q.structural(() => {
                const e = t.dealData.get(),
                    a = [];
                return (
                    e.totalItemsInStorage > 0 &&
                        a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                    t.prices.get().forEach((e) => a.push(e)),
                    { ...e, prices: a }
                );
            }),
            s = Q.model((e, a) => la(t[a].get(), (t) => t.intCD === e)),
            r = Q.model(() => {
                const e = t.standardEquipmentsFilters.get(),
                    a = t.standardEquipments.get();
                return 0 === e.size
                    ? a
                    : (function (e, t) {
                          return ca(e, (e) => e.specializations.specializations.some((e) => t.has(e.name)));
                      })(a, e);
            });
        return { ...t, computes: { equipmentsItemByIntCD: s, dealData: a, filteredStandardEquipments: r } };
    },
    ({ model: e, externalModel: t }) => ({
        unmount: t.createCallback((e, t) => ({ intCD: e, currentSlotId: t, actionType: R_, type: t_ }), 'onSlotAction'),
        actionSlot: t.createCallback((e) => ({ ...e, type: t_ }), 'onSlotAction'),
        swapSlots: t.createCallback((e) => ({ ...e, actionType: G_ }), 'onSlotAction'),
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
function dh(e) {
    return {
        ...eh(e),
        description: e.description,
        buyMoreVisible: e.isBuyMoreVisible,
        buyMoreDisabled: e.isBuyMoreDisabled,
    };
}
const [uh, mh] = V('InstructionsModel')(
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
                    dealData: e.observableModel.transform((e) => Y_(e), 'dealPanel'),
                    prices: e.observableModel.transform((e) => pe(e, X_), 'dealPanel.price'),
                };
            (e.cleanup(
                s(() => {
                    const e = ke(t.crewInstructions.get(), (e, t) => ((e[t.intCD] = dh(t)), e), {});
                    h(() => a.crewInstructions.set(e));
                }),
            ),
                e.cleanup(
                    s(() => {
                        const e = ke(t.equipmentInstructions.get(), (e, t) => ((e[t.intCD] = dh(t)), e), {});
                        h(() => a.equipmentInstructions.set(e));
                    }),
                ),
                e.cleanup(
                    s(() => {
                        const e = Ct(t.equipmentInstructions.get(), (e) => dh(e));
                        h(() => a.equipmentInstructionsArray.set(e));
                    }),
                ),
                e.cleanup(
                    s(() => {
                        const e = Ct(t.crewInstructions.get(), (e) => dh(e));
                        h(() => a.crewInstructionsArray.set(e));
                    }),
                ));
            const r = Q.structural(() => {
                    const e = a.dealData.get(),
                        t = [];
                    return (
                        e.totalItemsInStorage > 0 &&
                            t.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                        a.prices.get().forEach((e) => t.push(e)),
                        { ...e, prices: t }
                    );
                }),
                o = Q.model(
                    (e) =>
                        Object.values(a.equipmentInstructions.get()).find((t) => t.intCD === e) ??
                        Object.values(a.crewInstructions.get()).find((t) => t.intCD === e),
                ),
                i = Q.model((e, t) => {
                    const n = Object.values(a[t].get()).find((t) => t.intCD === e);
                    return (se(void 0 !== n, `There is no instructionItems with ${e} intCD`), n);
                });
            return { ...a, computes: { instructionById: o, instructionByIntCD: i, dealData: r } };
        },
        ({ model: e, externalModel: t }) => ({
            unmount: t.createCallback(
                (e, t) => ({ intCD: e, currentSlotId: t, actionType: R_, type: s_ }),
                'onSlotAction',
            ),
            confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
            cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
            toggleAutoRenewal: t.createCallback(
                () => ({ value: !e.dealData.get().autoRenewalEnabled }),
                'dealPanel.onAutoRenewalChanged',
            ),
            actionSlot: t.createCallback((e) => ({ ...e, type: s_ }), 'onSlotAction'),
        }),
    ),
    ph = { notMounted: 'notMounted', mounted: 'mounted', mountedMoreThanOne: 'mountedMoreThanOne' };
function _h(e) {
    return e.isMounted ? (e.isMountedMoreThanOne ? ph.mountedMoreThanOne : ph.mounted) : ph.notMounted;
}
function hh(e) {
    return { paramName: e.paramName, value: e.value, metricValue: e.metricValue };
}
function gh(e) {
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
        mountedState: _h(e),
        propertiesList: pe(e.propertiesList, hh),
        itemPrice: X_(e.itemPrice),
        price: K_(e.price),
        totalPrice: K_(e.totalPrice),
    };
}
const [vh, fh] = V('ShellsProvider')(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives({
                        ammoMaxSize: 'ammoMaxSize',
                        installedCount: 'installedCount',
                        clip: 'clip',
                        hasChanges: 'modified',
                        autoloadEnabled: 'autoloadEnabled',
                    }),
                    shells: e.transform((e) => pe(e, gh), 'shells'),
                    dealData: e.transform((e) => Y_(e), 'dealPanel'),
                    prices: e.transform((e) => pe(e, X_), 'dealPanel.price'),
                },
                a = Q.structural(() => {
                    const e = t.dealData.get(),
                        a = [];
                    return (
                        e.totalItemsInStorage > 0 &&
                            a.push({ enough: !0, currency: 'depot', value: e.totalItemsInStorage }),
                        t.prices.get().forEach((e) => a.push(e)),
                        { ...e, prices: a }
                    );
                }),
                n = Q.model((e) => it(t.shells.get(), e)),
                s = Q.model((e) => la(t.shells.get(), (t) => t.intCD === e)),
                r = Q.primitive((e) => void 0 !== la(t.shells.get(), (t) => t.intCD === e)),
                o = Q.shallow(() => pe(t.shells.get(), (e) => e.intCD));
            return { ...t, computes: { shell: n, shellByIntCD: s, shellExist: r, shellIDs: o, dealData: a } };
        },
        ({ model: e, externalModel: t }) => ({
            swapSlots: t.createCallback((e) => ({ ...e, actionType: z_ }), 'onSlotAction'),
            updateShellCount: t.createCallback((e, t) => ({ intCD: e, newCount: t }), 'onShellUpdate'),
            confirm: t.createCallbackNoArgs('dealPanel.onDealConfirmed'),
            cancel: t.createCallbackNoArgs('dealPanel.onDealCancelled'),
            toggleAutoRenewal: t.createCallback(
                () => ({ value: !e.dealData.get().autoRenewalEnabled }),
                'dealPanel.onAutoRenewalChanged',
            ),
        }),
    ),
    bh = a.createContext(null);
const xh = 'Animated_90a4d541',
    yh = function ({ children: e, index: t, id: n }) {
        const s = a.useRef(n),
            r = (function () {
                const e = a.useContext(bh);
                return (se(null !== e, 'useContext must be used with in SectionContext'), e);
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
                l.start({ from: { x: c * Je(50) }, to: { x: 0 } });
                const d = Vt(r.onSwiped);
                return () => {
                    (d(), l.stop(), l.start({ x: 0, immediate: !0 }));
                };
            }, [l, n]),
            a.useEffect(() => {
                ((s.current = n), (o.current = r.idToSlot));
            }, [r, n]),
            f.jsx(y.div, { className: xh, style: i, children: e })
        );
    },
    Ch = 'equipmentTrophy',
    wh = 'equipmentTrophyBasic',
    Nh = 'equipmentTrophyUpgraded',
    Ih = 'battleBoosterReplace',
    jh = 'battleBooster',
    kh = 'equipmentPlus',
    Sh = 'builtInEquipment',
    Ph = 'equipmentModernized';
function Eh(e) {
    switch (e) {
        case da.extraSmall:
        case da.small:
        case da.medium:
            return da.small;
        case da.large:
            return da.large;
        default:
            return da.extraLarge;
    }
}
const Mh = (e) => {
    switch (e) {
        case da.extraSmall:
        case da.small:
        case da.medium:
            return ma.s48x48;
        case da.large:
            return ma.s64x64;
        default:
            return ma.s80x80;
    }
};
function Dh(e) {
    switch (e) {
        case jh:
            return ua.directiveBooster;
        case Ih:
            return ua.directiveSubstitute;
        case Sh:
            return ua.builtInEquipment;
        case kh:
            return ua.improved;
        case Ph:
            return ua.experimental;
        case Ch:
        case wh:
        case Nh:
            return ua.trophy;
        default:
            return ua.none;
    }
}
const Lh = 'KEY_NONE',
    Th = a.createContext(void 0),
    Ah = a.createContext(() => {}),
    Bh = ({ children: e }) => {
        const [t, n] = a.useState(void 0),
            s = a.useCallback((e) => {
                n(e);
            }, []);
        return f.jsx(Ah.Provider, { value: s, children: f.jsx(Th.Provider, { value: t, children: e }) });
    },
    Vh = () => a.useContext(Th);
function Rh(e, t, a, n) {
    const s = e.left + t + a + n / 2,
        r = e.top + e.height / 2;
    let o = document.elementFromPoint(s, r);
    for (; o; ) {
        if (o.hasAttribute('data-drop-item')) return Number(o.getAttribute('data-drop-item'));
        if (o.hasAttribute('data-drop-area')) return null;
        o = o.parentElement;
    }
}
const Oh = C(function ({ children: e, itemPosition: t, itemWidth: n, onDrop: s }) {
        const r = a.useRef(null),
            o = a.useRef(null),
            i = pa(),
            l = i.state,
            c = _a(),
            d = a.useContext(Ah);
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
                    e.keyCode === ht.ESCAPE && i.reset();
                }
            }, [i.item, i.reset]),
            a.useEffect(() => {
                const e = r.current;
                if (!e || null === l.virtualItem || !l.dragArea) return;
                const t = l.dragArea.getBoundingClientRect(),
                    { x: a, left: m } = u(l.currentPosition.x * c + l.startPoint.x, l.dragArea);
                ((e.style.left = `${m}px`), (e.style.transform = `translateX(${Math.trunc(a)}px)`));
                const p = Rh(t, m, a, n) ?? null;
                return (
                    o.current != p && null !== p && ((o.current = p), d(p)),
                    new Qe()
                        .add(
                            ha.up(([e]) => {
                                (i.emitter.trigger('onDrop', e, l.dragArea, i.item, l), i.reset());
                            }),
                        )
                        .add(
                            ha.move(([e, a]) => {
                                if ('outside' === a) {
                                    const a = r.current;
                                    if (!a || null === l.virtualItem || !l.dragArea) return;
                                    const { x: s, left: i } = u(e.x, l.dragArea),
                                        c = Rh(t, i, s, n) ?? null;
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
                                    c = Rh(t, o, i, n) ?? null,
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
    zh = C(function ({ children: e, onDrop: t, renderDraggingItem: n, dataDropArea: s }) {
        const r = pa(),
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
                    f.jsx(ga.DragArea, { ref: o, children: f.jsx(ga.DropArea, { 'data-drop-area': s, children: e }) }),
                    f.jsx(ga.VirtualItem, {
                        container: o.current ?? void 0,
                        children: f.jsx(Oh, { itemPosition: i, itemWidth: c, onDrop: t, children: n }),
                    }),
                ],
            })
        );
    }),
    Hh = function ({ children: e, onDrop: t, renderDraggingItem: a, dataDropArea: n }) {
        return f.jsx(ga, { children: f.jsx(zh, { onDrop: t, renderDraggingItem: a, dataDropArea: n, children: e }) });
    },
    Uh = 'DragAndDrop_draggableItem_e7d74af8',
    qh = 'DragAndDrop_draggableItem__dragging_b849a88',
    Fh = 'DragAndDrop_draggableItem__undraggable_7c876195',
    Zh = 'DragAndDrop_draggableItem__locked_2b4f1390',
    Wh = C(function ({ itemId: e, undraggable: t, className: a, dataDropArea: n, children: s }) {
        var r;
        const o = pa();
        va(o.reset, [o]);
        const i = null == (r = o.item) ? void 0 : r.getAttribute('data-drop-item'),
            l = void 0 !== i,
            c = ba(i) && '' !== i && Number(i) === e;
        return f.jsx('div', {
            'data-drop-item': e,
            className: b(Uh, l && Zh, t && Fh, c && qh, a),
            'data-drop-area': n,
            onMouseDown: (e) => {
                e.button === fa.left && (o.start(e), e.preventDefault());
            },
            children: s,
        });
    }),
    Gh = 'UnmountButton_442d081e',
    Xh = 'UnmountButton_base__hover_e2b863f3',
    $h = 'UnmountButton_image_5b9a272b';
function Kh({ onClick: e, className: t }) {
    const [n, s] = a.useState(!1),
        r = xe();
    return f.jsx('div', {
        onMouseEnter: function (e) {
            (r.play('mouse-enter', { target: 'loadout-panel:slot:unmount-button', original: e }), s(!0));
        },
        onMouseLeave: () => s(!1),
        onClick: function (t) {
            (e(t), r.play('click', { target: 'loadout-panel:slot:unmount-button', original: t }));
        },
        className: b(Gh, n && Xh, t),
        children: f.jsx(Pe, {
            width: '42rem',
            height: '42rem',
            path: 'loadout.unmount_button_' + (n ? 'hover' : 'default'),
            className: $h,
        }),
    });
}
const Yh = 'Consumable_98851be5',
    Qh = 'Consumable_slot_523f223e',
    Jh = 'Consumable_slot__disabled_10fdd4ec',
    eg = 'Consumable_slot__grabbing_f0e6559a',
    tg = 'Consumable_hotKeyLabel_a0918925',
    ag = 'Consumable_text_fd7e74cf',
    ng = 'Consumable_unmountButton_43731923',
    sg = 'Consumable_unmountButton__hidden_250735bc',
    rg = 'Consumable_selectedOverlay_fd3226e6',
    og = te.resolve('strings'),
    ig = te.resolve('aliases'),
    lg = `${n_}DropArea`,
    cg = C(function ({ slot: e, disabled: t, selected: n, withKey: s = !1, onClick: r }) {
        const o = xe(),
            { model: i, controls: l } = nh(),
            c = j_().model,
            d = Te(),
            u = Vh(),
            m = d.location.endsWith(l_) ? i.computes.consumableById(e.intCD) : e,
            [p, _] = a.useState(!1),
            h = Kt({ value: da.small }, { large: { value: da.large }, extraLarge: { value: da.extraLarge } }),
            g = og.readOrEmpty(`readable_key_names.${e.keyName}`),
            v = s && g && e.keyName != Lh,
            x = _e({
                resId: ig.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: n_ }), [e]),
            }),
            y = a.useMemo(
                () => ({ disabled: t || void 0 === (null == m ? void 0 : m.imageName) }),
                [null == m ? void 0 : m.imageName, t],
            ),
            C = pt(
                d.location.endsWith(l_) ? 'tankSetupConsumableSlot' : 'tankSetupHangarConsumableSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: n_,
                        fieldType: 1,
                        installedSlotId: e.id,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMounted: e.installed,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(ig.read((e) => e.hangar.shared.Consumables('resId'))).uid,
                    }),
                    [e],
                ),
                y,
            ),
            w = -1 !== e.intCD ? C : {};
        a.useEffect(() => {
            e.installed || o.play('mount', { target: 'loadout-panel:slot:consumable' });
        }, [e.installed, o]);
        const N = pa(),
            I = null !== N.state.virtualItem;
        return (
            a.useEffect(() => {
                var t;
                (null == (t = N.item) ? void 0 : t.getAttribute('data-drop-area')) === lg && _(u === e.id);
            }, [N.item, u, e.id]),
            f.jsxs('div', {
                ...x,
                ...w,
                className: Yh,
                children: [
                    f.jsx(xa, {
                        className: b(Qh, t && Jh, I && eg),
                        classNames: { selectedOverlay: rg },
                        size: Eh(h.value || da.small),
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
                                (null == (e = N.item) ? void 0 : e.getAttribute('data-drop-area')) === lg) ||
                                _(!1);
                        },
                        dataDropItem: e.id,
                        children: f.jsx(yh, {
                            id: e.intCD,
                            index: e.id,
                            children: (null == m ? void 0 : m.imageName)
                                ? f.jsx(Wh, {
                                      undraggable: !c.computes.sectionDraggable(n_),
                                      itemId: e.id,
                                      dataDropArea: lg,
                                      children: f.jsx(ya, {
                                          name: m.imageName,
                                          size: Mh(h.value || da.small),
                                          overlayType: Dh(e.overlayType),
                                      }),
                                  })
                                : f.jsx(xa.Empty, {}),
                        }),
                    }),
                    v &&
                        f.jsx('div', {
                            className: tg,
                            children: f.jsx('div', { className: ag, children: f.jsx(Re, { text: g }) }),
                        }),
                    !e.installed && f.jsx(Kh, { onClick: () => l.unmount(e.intCD, e.id), className: b(ng, I && sg) }),
                ],
            })
        );
    }),
    dg = {
        base: 'SpecializationType_9d3d37d7',
        icon: 'SpecializationType_icon_91ea8b3b',
        icon__visible: 'SpecializationType_icon__visible_ca41ac0a',
        icon__active: 'SpecializationType_icon__active_f79ff1ce',
    },
    ug = 'stealth',
    mg = 'survivability',
    pg = 'firepower',
    _g = 'mobility',
    hg = 'On',
    gg = 'Off',
    vg = {
        [`${_g}${hg}`]: (e) =>
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
        [`${_g}${gg}`]: (e) =>
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
        [`${pg}${hg}`]: (e) =>
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
        [`${pg}${gg}`]: (e) =>
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
        [`${ug}${hg}`]: (e) =>
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
        [`${ug}${gg}`]: (e) =>
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
        [`${mg}${hg}`]: (e) =>
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
        [`${mg}${gg}`]: (e) =>
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
function fg({ specialization: e, active: t, classNames: a }) {
    const n = vg[`${e}${hg}`],
        s = vg[`${e}${gg}`];
    if (n && s)
        return f.jsxs('div', {
            className: b(dg.base, null == a ? void 0 : a.base),
            children: [
                f.jsx(n, {
                    className: b(dg.icon, dg.icon__active, t && dg.icon__visible, null == a ? void 0 : a.activeIcon),
                }),
                f.jsx(s, { className: b(dg.icon, !t && dg.icon__visible, null == a ? void 0 : a.inactiveIcon) }),
            ],
        });
    console.error(`Unknown specialization type ${e}`);
}
const bg = 'Specialization_border_1d1ddf4e',
    xg = 'Specialization_borderImage_2bbc40a2',
    yg = 'Specialization_576f60ad',
    Cg = 'Specialization_base__button_e1e80f41',
    wg = 'Specialization_border__visible_2df74c11',
    Ng = 'Specialization_borderImage__visible_258796cf',
    Ig = 'Specialization_icon_453cdca5',
    jg = 'Specialization_base__disabled_12d00a3f',
    kg = 'Specialization_base__active_12d00a3f',
    Sg = Me('Specialization'),
    Pg = C(function ({ specialization: e, className: t, id: n, disabled: s = !1 }) {
        const r = xe(),
            { controls: o } = j_(),
            i = Te().location.includes('/loadout'),
            l = e.dynamic && i,
            c = a.useRef(n);
        a.useEffect(() => {
            if (c.current !== n)
                return (
                    (c.current = n),
                    e.active
                        ? Vt(() => r.play('on', { target: 'loadout-panel:slot:equipment:specialization' }))
                        : void 0
                );
        }, [r, e.active, n]);
        const d = a.useMemo(() => [e.type, e.dynamic, e.clickable], [e]),
            u = ot('hangarSlotSpec', d);
        return f.jsxs(Sg, {
            className: b(yg, l && Cg, s && jg, e.active && kg, t),
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
                f.jsx('div', { className: b(bg, l && wg) }),
                f.jsx('div', { className: b(xg, l && Ng) }),
                f.jsx(fg, { specialization: e.type, active: e.active, classNames: { base: Ig } }),
            ],
        });
    }),
    Eg = 'Equipment_cd6073b3',
    Mg = 'Equipment_slot_cd6073b3',
    Dg = 'Equipment_slot__disabled_13198c7d',
    Lg = 'Equipment_slot__grabbing_49feaf7f',
    Tg = 'Equipment_specialization_95709e3f',
    Ag = 'Equipment_unmountButton_7376ff29',
    Bg = 'Equipment_unmountButton__hidden_f9f46440',
    Vg = 'Equipment_selectedOverlay_866b638b',
    Rg = te.resolve('aliases'),
    Og = `${t_}DropArea`;
function zg(e) {
    switch (e) {
        case d_.Mobility:
            return 'loadout-panel:slot:equipment:specialization:mobility';
        case d_.Firepower:
            return 'loadout-panel:slot:equipment:specialization:firepower';
        case d_.Stealth:
            return 'loadout-panel:slot:equipment:specialization:stealth';
        case d_.Survivability:
            return 'loadout-panel:slot:equipment:specialization:survivability';
        default:
            return (console.error('Unknown specialization type:', e), '');
    }
}
const Hg = C(function ({ slot: e, disabled: t, selected: n, onClick: s }) {
        const { breakpoint: r } = vt(),
            { controls: o } = ch(),
            { model: i } = j_(),
            [l, c] = a.useState(!1),
            d = xe(),
            u = Te(),
            m = Vh(),
            p = Kt({ value: da.small }, { large: { value: da.large }, extraLarge: { value: da.extraLarge } }),
            _ = _e({
                resId: Rg.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: t_ }), [e]),
            }),
            h = a.useMemo(
                () => ({ disabled: t || -1 === (null == e ? void 0 : e.intCD) }),
                [null == e ? void 0 : e.intCD, t],
            ),
            g = pt(
                u.location.endsWith(r_) ? 'tankSetupOptionalDeviceSlotWW' : 'tankSetupHangarOptionalDeviceSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: t_,
                        installedSlotId: e.id,
                        isMounted: e.installed,
                        fieldType: 1,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(Rg.read((e) => e.hangar.shared.Equipments('resId'))).uid,
                    }),
                    [e],
                ),
                h,
            ),
            v = -1 !== e.intCD ? g : {},
            x = pa(),
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
                (null == (t = x.item) ? void 0 : t.getAttribute('data-drop-area')) === Og && c(m === e.id);
            }, [x.item, m, e.id]),
            f.jsxs('div', {
                className: Eg,
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
                                (null == (e = x.item) ? void 0 : e.getAttribute('data-drop-area')) === Og) ||
                                c(!1),
                                null == _ || _.onMouseLeave());
                        },
                        children: f.jsx(xa, {
                            className: b(Mg, t && Dg, y && Lg),
                            classNames: { selectedOverlay: Vg },
                            size: Eh(p.value || da.small),
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
                                        d.play('click', { target: zg(e.specialization.type), original: t }),
                                    null == _ || _.onClick());
                            },
                            selected: n,
                            'data-test-id': `deviceSlot-${e.id}`,
                            dataDropItem: e.id,
                            children: f.jsx(yh, {
                                index: e.id,
                                id: e.intCD,
                                children: e.imageName
                                    ? f.jsx(Wh, {
                                          undraggable: !i.computes.sectionDraggable(t_),
                                          itemId: e.id,
                                          dataDropArea: Og,
                                          children: f.jsx(ya, {
                                              name: e.imageName,
                                              size: Mh(r.name),
                                              level: e.level,
                                              overlayType: Dh(e.overlayType),
                                          }),
                                      })
                                    : f.jsx(xa.Empty, {}),
                            }),
                        }),
                    }),
                    e.specialization &&
                        f.jsx(Pg, { specialization: e.specialization, className: Tg, id: e.intCD, disabled: t }),
                    !e.installed && f.jsx(Kh, { onClick: () => o.unmount(e.intCD, e.id), className: b(Ag, y && Bg) }),
                ],
            })
        );
    }),
    Ug = 'Instuction_ab7d27c7',
    qg = 'Instuction_slot_ab7d27c7',
    Fg = 'Instuction_slot__disabled_179c0b6b',
    Zg = 'Instuction_warningImage_138cc840',
    Wg = 'Instuction_warningImage__disabled_7d252f0',
    Gg = 'Instuction_selectedOverlay_f19fc301',
    Xg = 'Instuction_item_e5ebc3b8',
    $g = 'Instuction_item__withAttention_80199f58',
    Kg = te.resolve('aliases');
function Yg(e) {
    switch (e) {
        case u_:
            return 'loadout-panel:slot:instruction:gunner_smoothTurret-crew_instruction';
        case m_:
            return 'loadout-panel:slot:instruction:driver_virtuoso-crew_instruction';
        case p_:
            return 'loadout-panel:slot:instruction:driver_smoothDriving-crew_instruction';
        case __:
            return 'loadout-panel:slot:instruction:fireFighting-crew_instruction';
        case h_:
            return 'loadout-panel:slot:instruction:naturalCover-crew_instruction';
        case g_:
            return 'loadout-panel:slot:instruction:gunner_rancorous-crew_instruction';
        case v_:
            return 'loadout-panel:slot:instruction:loader_pedant-crew_instruction';
        case f_:
            return 'loadout-panel:slot:instruction:commander_practical-crew_instruction';
        case b_:
            return 'loadout-panel:slot:instruction:commander_enemyShotPredictor-crew_instruction';
        default:
            return (console.error('Unknown crew instruction type:', e), '');
    }
}
const Qg = C(({ slot: e, disabled: t, selected: n, onClick: s }) => {
        const { model: r, controls: o } = mh(),
            i = n ? r.computes.instructionById(e.intCD) : e,
            [l, c] = a.useState(!1),
            d = xe(),
            u = Te(),
            m = Kt({ value: da.small }, { large: { value: da.large }, extraLarge: { value: da.extraLarge } });
        const p = _e({
                resId: Kg.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: e.id, slotType: s_ }), [e]),
            }),
            _ = a.useMemo(
                () => ({ disabled: t || void 0 === (null == i ? void 0 : i.imageName) }),
                [null == i ? void 0 : i.imageName, t],
            ),
            h = pt(
                u.location.endsWith(o_) ? 'tankSetupBattleBoosterSlot' : 'tankSetupHangarBattleBoosterSlot',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: s_,
                        fieldType: 1,
                        installedSlotId: e.id,
                        itemInstalledSetupIdx: e.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: e.id,
                        isMounted: e.installed,
                        isMountedMoreThanOne: e.mountedMoreThanOne,
                        emitterUID: window.subViews.get(Kg.read((e) => e.hangar.shared.Instructions('resId'))).uid,
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
                        e.overlayType === Ih &&
                        d.play('on', { target: Yg(i.imageName) }),
                    (null == e ? void 0 : e.withAttention) &&
                        d.play('warn', { target: 'loadout-panel:slot:instruction' }));
            }, [null == i ? void 0 : i.imageName, e.installed, e.overlayType, null == e ? void 0 : e.withAttention, d]),
            f.jsxs('div', {
                ...p,
                ...g,
                className: Ug,
                children: [
                    f.jsx(xa, {
                        className: b(qg, t && Fg),
                        classNames: { selectedOverlay: Gg },
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
                        size: Eh(m.value || da.small),
                        'data-test-id': `instructionSlot-${e.id}`,
                        children:
                            (null == i ? void 0 : i.imageName) &&
                            f.jsx(ya, {
                                className: b(Xg, e.withAttention && $g),
                                name: i.imageName,
                                size: Mh(m.value || da.small),
                                overlayType: Dh(null == e ? void 0 : e.overlayType),
                            }),
                    }),
                    (null == i ? void 0 : i.imageName) &&
                        e.withAttention &&
                        f.jsx(Pe, {
                            width: '48rem',
                            height: '48rem',
                            path: 'loadout.alert_48',
                            className: b(Zg, t && Wg),
                        }),
                    !e.installed && f.jsx(Kh, { onClick: () => o.unmount(e.intCD, e.id) }),
                ],
            })
        );
    }),
    Jg = 'Shell_hoverOverlay_714f24ee',
    ev = 'Shell_4f8ed17c',
    tv = 'Shell_icon_229c2d6f',
    av = 'Shell_base__locked_7aaeeab0',
    nv = 'Shell_base__selected_7aaeeab0',
    sv = 'Shell_icon__dragging_7aaeeab0',
    rv = 'Shell_container_cd11209e',
    ov = 'Shell_container__key_d0643ec3',
    iv = 'Shell_container__count_25e66fc6',
    lv = 'Shell_container__disabled_d9eea9c4',
    cv = 'Shell_text_d3fedf21',
    dv = 'Shell_text__empty_7aaeeab0',
    uv = 'Shell_text__disabled_7aaeeab0',
    mv = te.resolve('aliases'),
    pv = 'small',
    _v = 'x64x64',
    hv = 'medium',
    gv = C(function ({ disabled: e = !1, selected: t = !1, withKey: n = !1, empty: s = !0, className: r, slot: o }) {
        var i;
        const { model: l } = fh(),
            c = Te(),
            d = void 0 !== (null == (i = pa().item) ? void 0 : i.getAttribute('data-drop-item')),
            u = _e({
                resId: mv.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ slotId: o.id, slotType: a_ }), [o.id]),
            }),
            m = Kt({ value: pv }, { large: { value: _v }, extraLarge: { value: hv } }).value,
            p = a.useMemo(() => ({ disabled: e }), [e]),
            _ = pt(
                c.location.endsWith(i_) ? 'tankSetupShellItem' : 'tankSetupHangarShellSlot',
                a.useMemo(
                    () => ({
                        intCD: o.intCD,
                        slotType: a_,
                        fieldType: 1,
                        installedSlotId: o.id,
                        itemInstalledSetupIdx: o.itemInstalledSetupIdx,
                        itemInstalledSetupSlotIdx: o.id,
                        isMounted: o.installed,
                        isMountedMoreThanOne: o.mountedMoreThanOne,
                        emitterUID: Ca(mv.read((e) => e.hangar.shared.Shells('resId'))).uid,
                    }),
                    [o],
                ),
                p,
            ),
            h = t ? l.computes.shell(o.id) : o;
        if (!h) return;
        const g = te.resolve('strings').readOrEmpty(`readable_key_names.${o.keyName}`),
            v = n && g && o.keyName !== Lh;
        return f.jsxs('div', {
            ...u,
            ..._,
            className: b(ev, d && av, t && nv, r),
            'data-test-id': `shellSlot-${o.id}`,
            children: [
                v &&
                    f.jsx('div', {
                        className: b(rv, ov),
                        children: f.jsx('div', { className: cv, children: f.jsx(Re, { text: g }) }),
                    }),
                f.jsxs(yh, {
                    id: o.intCD,
                    index: o.id,
                    children: [
                        f.jsx(Wh, {
                            undraggable: !t,
                            itemId: o.id,
                            dataDropArea: 'shellsDropArea',
                            children: f.jsx(Pe, {
                                path: `shell.${m}.${o.imageName}`,
                                className: tv,
                                children: f.jsx('div', { className: Jg }),
                            }),
                        }),
                        void 0 !== h.count && f.jsx(vv, { count: h.count, empty: s, disabled: e }),
                    ],
                }),
            ],
        });
    }),
    vv = function ({ count: e, empty: t, disabled: a }) {
        return f.jsx('div', {
            className: b(rv, iv, a && lv),
            children: f.jsx('div', { className: b(cv, a && uv, t && dv), children: e }),
        });
    },
    fv = {
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
function bv({ hovered: e, selected: t }) {
    return f.jsxs(f.Fragment, {
        children: [
            t && f.jsx('div', { className: fv.selectedOverlay }),
            f.jsx(Pe, { fit: 'cover', path: 'loadout.shells_warning_glow', className: fv.warningGlow }),
            f.jsx('div', { className: b(fv.warningOverlay, e && !t && fv.warningOverlay__hover) }),
        ],
    });
}
function xv({ shells: e, section: t, groupId: n, withKey: s = !1, disabled: r = !1, selected: o = !1, onClick: i }) {
    const [l, c] = a.useState(!1),
        d = xe(),
        u = Kt({ value: da.small }, { large: { value: da.large }, extraLarge: { value: da.extraLarge } }),
        m = !e.some((e) => e.count && e.count > 0);
    return f.jsxs(xa, {
        classNames: {
            slot: b(fv.slot, t.warning && !r && fv.slot__customBackground),
            content: fv.content,
            selectedOverlay: fv.selectedSlotOverlay,
        },
        size: Eh(u.value || da.small),
        hovered: l && !r && !t.warning,
        selected: o && !t.warning,
        disabled: r,
        onClick: function (e) {
            o ||
                r ||
                !i ||
                (i(t.type, { slotIndex: 0, groupId: n, sectionName: t.name }),
                d.play('click', { target: 'loadout-panel:slot', original: e }));
        },
        onMouseEnter: function () {
            (c(!0), r || o || d.play('mouse-enter', { target: 'loadout-panel:slot:shells' }));
        },
        onMouseLeave: () => c(!1),
        children: [
            t.warning && f.jsx(bv, { hovered: l && !r, selected: o }),
            e.map((e) =>
                f.jsx(gv, { className: fv.shell, selected: o, disabled: r, withKey: s, slot: e, empty: m }, e.id),
            ),
            t.warning && f.jsx('div', { className: fv.warningOverlay }),
        ],
    });
}
const yv = C(function ({ groupIndex: e, sectionIndex: t, withKey: a, disabled: n, selected: s, onClick: r }) {
        const { model: o } = j_(),
            { controls: i } = fh(),
            l = o.computes.sectionByIndex(e, t),
            c = o.computes.groupByIndex(e),
            d = Kt({ value: pv }, { large: { value: _v }, extraLarge: { value: hv } }).value;
        if (!l) return null;
        const u = ca(l.slots ?? [], (e) => e.intCD > 0);
        return f.jsx('div', {
            className: fv.base,
            children: f.jsx(Hh, {
                dataDropArea: `${a_}DropArea`,
                onDrop: (e, t) => i.swapSlots({ leftID: e, rightID: t }),
                renderDraggingItem: (e) =>
                    f.jsx(Pe, {
                        path: `shell.${d}.${u[e].imageName}`,
                        className: b(tv, sv),
                        children: f.jsx('div', { className: Jg }),
                    }),
                children: f.jsx(xv, {
                    shells: u,
                    section: l,
                    groupId: c.id,
                    withKey: a,
                    disabled: n,
                    selected: s,
                    onClick: r,
                }),
            }),
        });
    }),
    Cv = 'Divider_44f20b3a',
    wv = 'Divider_dividerImage_9dcc5cfc';
function Nv({ className: e }) {
    return f.jsx('div', {
        className: b(Cv, e),
        children: f.jsx(Pe, {
            path: 'loadout.panel_border',
            repeat: 'repeat',
            fit: 'auto',
            width: '100%',
            height: '100%',
            className: wv,
        }),
    });
}
const Iv = C(function ({ index: e, sectionType: t, groupIndex: a, sectionIndex: n, slotToComponent: s, onClick: r }) {
        const { model: o } = j_(),
            i = o.disabled.get(),
            l = o.computes.isSlotSelected(e, t),
            c = o.computes.slotByIndex(a, n, e);
        if (void 0 === c) return null;
        const d = (function ({ slotToComponent: e = Vv, sectionType: t = 'default' }) {
            return e[t] ?? e.default;
        })({ slotToComponent: s, sectionType: t });
        return d
            ? f.jsx(d, {
                  slot: c,
                  disabled: i,
                  selected: l,
                  withKey: t === n_ && o.computes.isSectionSelected(t),
                  onClick: r,
              })
            : null;
    }),
    jv = 'AmmunitionPanel_border_5210db3e',
    kv = 'AmmunitionPanel_borderImage_a7e374e',
    Sv = 'AmmunitionPanel_ammunitionPanel_1e2712ac',
    Pv = 'AmmunitionPanel_group_a19909f2',
    Ev = 'AmmunitionPanel_section_60fd0117',
    Mv = 'AmmunitionPanel_section__battleBoosters_7bbb51d8',
    Dv = 'AmmunitionPanel_presetWrapper_8dedcfb5',
    Lv = 'AmmunitionPanel_slots_d69454c1',
    Tv = C(function ({ groupIndex: e, sectionIndex: t, slotToComponent: n, onClick: s }) {
        const { controls: r } = nh(),
            { controls: o } = ch(),
            { breakpoint: i } = vt(),
            l = Kt({ value: da.small }, { large: { value: da.large }, extraLarge: { value: da.extraLarge } }),
            { model: c } = j_(),
            d = c.computes.sectionByIndex(e, t),
            u = c.computes.groupByIndex(e);
        return d && u
            ? f.jsx('div', {
                  className: Lv,
                  children: f.jsx(Hh, {
                      dataDropArea: `${d.type}DropArea`,
                      onDrop: (e, t) => {
                          d.type === n_
                              ? r.swapSlots({ leftID: t, rightID: e })
                              : d.type === t_ && o.swapSlots({ leftID: t, rightID: e });
                      },
                      renderDraggingItem: (e) => {
                          const t = d.slots[e];
                          if (t)
                              return d.type === n_
                                  ? f.jsx(ya, {
                                        name: t.imageName,
                                        size: Mh(l.value || da.small),
                                        overlayType: Dh(t.overlayType),
                                    })
                                  : d.type === t_
                                    ? f.jsx(ya, {
                                          name: t.imageName,
                                          size: Mh(i.name),
                                          level: t.level,
                                          overlayType: Dh(t.overlayType),
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
                                          o > 0 && f.jsx(Nv, {}),
                                          f.jsx(Iv, {
                                              index: o,
                                              sectionType: d.type,
                                              groupIndex: e,
                                              sectionIndex: t,
                                              slotToComponent: n,
                                              onClick: () =>
                                                  null == s
                                                      ? void 0
                                                      : s(d.type, {
                                                            slotIndex: r.id,
                                                            groupId: u.id,
                                                            sectionName: d.name,
                                                        }),
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
    Av = te.resolve('aliases'),
    Bv = { [a_]: yv, default: Tv },
    Vv = { [n_]: cg, [s_]: Qg, [t_]: Hg },
    Rv = (e) => ({ options: { rootId: e } }),
    Ov = { provider: ah, props: Rv(Av.read((e) => e.hangar.shared.Consumables('resId'))) },
    zv = { provider: uh, props: Rv(Av.read((e) => e.hangar.shared.Instructions('resId'))) },
    Hv = { provider: lh, props: Rv(Av.read((e) => e.hangar.shared.Equipments('resId'))) },
    Uv = {
        provider: I_,
        props: { options: { rootId: Av.read((e) => e.hangar.shared.Loadout('resId')) }, initial: {} },
    },
    qv = { provider: vh, props: Rv(Av.read((e) => e.hangar.shared.Shells('resId'))) },
    Fv = { providersData: [Ov, zv, Hv, Uv, qv], sectionToComponent: Bv, slotToComponent: Vv },
    Zv = a.createContext(Fv);
function Wv({
    sectionToComponent: e = Fv.sectionToComponent,
    slotToComponent: t = Fv.slotToComponent,
    providersData: n = Fv.providersData,
    children: s,
}) {
    const r = a.useMemo(() => ({ sectionToComponent: e, slotToComponent: t }), [e, t]),
        o = new wa().add(Bh).addWithProps(Zv.Provider, { value: r });
    return (
        n.forEach((e) => {
            void 0 === e.props ? o.add(e.provider) : o.addWithProps(e.provider, e.props);
        }),
        o.render(s)
    );
}
const Gv = C(function ({ index: e, vehicleId: t, groupIndex: n, onSectionClick: s }) {
        const r = a.useContext(Zv),
            { model: o } = j_(),
            i = o.disabled.get(),
            l = o.computes.sectionByIndex(n, e),
            c = Xe((e, t) => {
                const a = o.computes.isSectionSelected(e);
                (!s && a) || null == s || s(e, t);
            }),
            d = xe(),
            u = a.useMemo(() => {
                function e() {
                    d.play('swipe', { target: 'loadout-panel:ammunition_panel:section' });
                }
                return l
                    ? {
                          idToSlot: l.slots.reduce((e, t) => (t.intCD < 0 || (e[t.intCD] = t.id), e), {}),
                          type: l.type,
                          vehicleId: t,
                          onSwiped: Na(30, e),
                      }
                    : { idToSlot: {}, onSwiped: e };
            }, [l, d, t]);
        if (void 0 === l) return null;
        const m = (function ({ sectionToComponent: e = Bv, sectionType: t = 'default' }) {
            return e[t] ?? e.default;
        })({ sectionToComponent: r.sectionToComponent, sectionType: l.type });
        return f.jsxs('div', {
            className: b(Ev, l.type === s_ && Mv),
            children: [
                f.jsx('div', { className: jv }),
                f.jsx('div', { className: kv }),
                m &&
                    f.jsx(bh.Provider, {
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
    Xv = 'field',
    $v = 'progression',
    Kv = C(function ({ className: e, onSectionClick: t, vehicleId: a }) {
        const { model: n, controls: s } = j_(),
            r = n.computes.groups(),
            o = n.hasVehSkillTree.get() ? $v : Xv;
        return f.jsx('div', {
            className: b(Sv, e),
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
                            className: Pv,
                            children: [
                                Ia(
                                    r,
                                    (e) => e.slots.length > 0,
                                    (e, n) =>
                                        f.jsx(
                                            Gv,
                                            { index: n, groupIndex: m, vehicleId: a, onSectionClick: t },
                                            `${n}-${i}`,
                                        ),
                                ),
                                d &&
                                    l > 1 &&
                                    f.jsx(B_, {
                                        groupId: e,
                                        modifier: o,
                                        currentIndex: i,
                                        onSwitch: s.changePreset,
                                        itemStates: c,
                                        disabled: n.disabled.get(),
                                        prebattleSwitchDisabled: u,
                                        className: Dv,
                                    }),
                            ],
                        },
                        e,
                    ),
            ),
        });
    }),
    Yv = {
        loadoutPanel: 'LoadoutPanel_loadoutPanel_4c5b5911',
        loadoutPanel__screenMode: 'LoadoutPanel_loadoutPanel__screenMode_2cf03a87',
        panel: 'LoadoutPanel_panel_ec4752fe',
        crewPanel: 'LoadoutPanel_crewPanel_b90a22ab',
        ammunitionPanel: 'LoadoutPanel_ammunitionPanel_baf41791',
    },
    Qv = {
        [s_]: 'loadout/instructions',
        [n_]: 'loadout/consumables',
        [t_]: 'loadout/equipment',
        [a_]: 'loadout/shells',
    };
function Jv(e) {
    const t = Qv[e];
    if (t) return `/hangar/${t}`;
}
const ef = C(function ({ onRoute: e, onResolveRoute: t = Jv }) {
        const a = j_().model.vehicleId(),
            n = Xs().model.selectedVehicle(),
            s = Te(),
            r = Xe((a, n) => {
                if (e) {
                    const s = t(a);
                    if (void 0 === s) return;
                    e(s, n);
                }
                const r = t(a);
                r && s.push(r, n);
            });
        return n && n.id === a
            ? f.jsx(Kv, { vehicleId: a, className: Yv.ammunitionPanel, onSectionClick: r }, a)
            : null;
    }),
    tf = function (e) {
        return f.jsx(Wv, { ...e.config, children: f.jsx(ef, { ...e }) });
    },
    af = (e) =>
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
    nf = te.resolve('strings'),
    sf = te.resolve('views'),
    rf = te.resolve('aliases');
function of(e) {
    const t = ((e) =>
        e === Tc ? 'acceleratedTraining_disabled' : e === Lc ? 'acceleratedTraining_on' : 'acceleratedTraining_off')(e);
    return rt({
        header: nf.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.header`),
        body: nf.readOrEmpty(`crew_widget.tooltip.buttonsBar.${t}.body`),
    });
}
const lf = (e) =>
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
    cf = 'Trainings_button_bf9590ac',
    df = 'Trainings_toggleContent_8fe22dba',
    uf = 'Trainings_image_cc494d75',
    mf = 'Trainings_image__on_3cef43a',
    pf = Me('Trainings', 'Trainings_f0a414b9'),
    _f = C(function (e) {
        const { model: t, controls: a } = Rc(),
            n = t.state.get(),
            s = t.acceleratedTraining.get(),
            r = t.intensiveTraining.get(),
            o = n === Bc,
            i = o || s === Tc,
            l = o || r === Tc,
            c = of(s),
            d = Ee({
                resId: rf.read((e) => e.hangar.shared.Crew('resId')),
                contentId: sf.read((e) => e.lobby.crew.CrewHeaderTooltipView('resId')),
            }),
            u = ja(
                () => {
                    l || a.toggleIntensiveTraining();
                },
                [a, l],
                300,
            );
        return f.jsxs(pf, {
            ...e,
            children: [
                f.jsx('div', {
                    ...c,
                    className: cf,
                    children: f.jsx(zt, {
                        theme: Ut.primary,
                        activated: s === Lc,
                        disabled: i,
                        onClick: () => {
                            i || a.toggleAcceleratedTraining();
                        },
                        classNames: { content: df },
                        children: f.jsx(af, { className: b(uf, !o && s === Lc && mf) }),
                    }),
                }),
                f.jsx('div', {
                    ...d,
                    className: cf,
                    children: f.jsx(zt, {
                        theme: Ut.primary,
                        activated: r === Lc,
                        disabled: l,
                        onClick: u,
                        classNames: { content: df },
                        children: f.jsx(lf, { className: b(uf, !o && r === Lc && mf) }),
                    }),
                }),
            ],
        });
    }),
    hf = (e) =>
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
    gf = 'DogPaw_84e7ee48',
    vf = 'DogPaw_icon_5261d625',
    ff = te.resolve('strings');
function bf({ onClick: e }) {
    const t = rt({ body: ff.readOrEmpty('crew.dogPawTooltip.details.body') });
    return f.jsx(Ve, {
        ...t,
        theme: Ve.themes.secondary,
        size: Ve.sizes.small,
        className: gf,
        onClick: function () {
            (null == t || t.onClick(), e());
        },
        children: f.jsx(hf, { className: vf }),
    });
}
const xf = 'NoTankmanBackground_e7a5353b',
    yf = 'NoTankmanBackground_base__hover_be4aa02',
    Cf = 'NoTankmanBackground_selectedOverlay_6eff1022',
    wf = 'NoTankmanBackground_selectedOverlayPattern_313f5cd4',
    Nf = 'NoTankmanBackground_pattern_f007ac5a';
function If({ hover: e, selected: t }) {
    return f.jsxs('div', {
        className: b(xf, e && yf),
        children: [
            t && f.jsxs(f.Fragment, { children: [f.jsx('div', { className: Cf }), f.jsx('div', { className: wf })] }),
            f.jsx(Pe, { path: 'loadout.crew.no_tankman_pattern', className: Nf }),
        ],
    });
}
const jf = {
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
    kf = 'disabled',
    Sf = 'warning',
    Pf = 'noTankman',
    Ef = 'selected',
    Mf = 'default';
function Df({ skinId: e, customizedSkin: t }) {
    return e
        ? t
            ? `tankmen.icons.big.crewSkins.${kt(e)}`
            : `tankmen.icons.big.${kt(e)}`
        : 'loadout.crew.no_tankman_red';
}
const Lf = Me('Tankman', jf.base),
    Tf = a.memo(function ({
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
        const c = a ? kf : r ? Pf : s ? Sf : n ? Ef : Mf,
            d = !e;
        return f.jsxs(Lf, {
            ...l,
            className: b(i, jf[`base__${c}`], o && !a && e && jf.base__hover),
            children: [
                a && f.jsx('div', { className: jf.disabledOverlay }),
                n &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx('div', { className: jf.selectedOverlay }),
                            f.jsx('div', { className: jf.selectedOverlayPattern }),
                        ],
                    }),
                s && f.jsx('div', { className: jf.warningOverlay }),
                d && !a && f.jsx(If, { hover: o, selected: n }),
                f.jsx(Pe, {
                    fit: 'cover',
                    className: b(jf.content, a && (s || !e ? jf.content__disabledWarning : jf.content__disabled)),
                    path: Df({ skinId: e, customizedSkin: t }),
                }),
                d && !a && f.jsx('div', { className: jf.noTankmanOverlay }),
                s && f.jsx(Pe, { className: jf.warningGlow, fit: 'cover', path: 'loadout.crew.alert_glow' }),
            ],
        });
    }),
    Af = 'Slot_154c229b',
    Bf = 'Slot_base__noState_71f19f5c',
    Vf = 'Slot_base__disabled_d386066c',
    Rf = 'Slot_base__dog_d386066c',
    Of = 'Slot_statusBlock_ccea62a7',
    zf = 'Slot_statusBlock__dogPaw_1bc38cf2',
    Hf = 'Slot_statusBlock__disabled_1d609e12',
    Uf = 'Slot_statusOverlay_e74c1f89',
    qf = 'Slot_statusIcon_fe4620f1',
    Ff = 'Slot_statusIcon__role_3c0a5c22',
    Zf = 'Slot_statusIcon__untrainedPenalty_2d3a3a74',
    Wf = 'Slot_retrainingProgress_10d488a1',
    Gf = 'Slot_newPerk_88d9a967',
    Xf = 'Slot_newPerk__disabled_1d609e12',
    $f = 'Slot_glowBg_e3e687b5',
    Kf = te.resolve('strings'),
    Yf = 'DogSlot',
    Qf = Me('DogSlot', b(Af, Rf), { variants: { state: { true: Vf } } }),
    Jf = C(function () {
        const [e, t] = a.useState(!1),
            n = xe(),
            { model: s, controls: r } = Rc(),
            o = s.computes.disabled(),
            i = s.vehicleNation.get(),
            l = rt({
                header: Kf.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${i}.header`),
                body: Kf.readOrEmpty(`tooltips.hangar.crew.rudy.dog.${i}.body`),
            });
        const c = ka(() => r.showDogInfo(), [r], 400);
        return f.jsxs(Qf, {
            state: o,
            children: [
                f.jsx(Tf, {
                    disabled: o,
                    warning: !1,
                    noTankman: !1,
                    hovered: e,
                    customizedSkin: !1,
                    skinId: 'ussr_dog_1',
                    onClick: function () {
                        (o || n.play('dog-slot-click', { target: Yf }), null == l || l.onClick());
                    },
                    onMouseEnter: function (e) {
                        (o || (t(!0), n.play('mouse-enter', { target: Yf })), null == l || l.onMouseEnter(e));
                    },
                    onMouseLeave: function () {
                        (t(!1), null == l || l.onMouseLeave());
                    },
                }),
                f.jsx('div', { className: b(Of, zf, o && Hf), children: f.jsx(bf, { onClick: c }) }),
            ],
        });
    }),
    eb = 'TankmanRole_3bb08c81',
    tb = {
        [It.commander]: (e) =>
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
        [It.driver]: (e) =>
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
        [It.gunner]: (e) =>
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
        [It.loader]: (e) =>
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
        [It.radioman]: (e) =>
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
function ab({ role: e = '', className: t }) {
    const a = tb[e];
    if (a) return f.jsx(a, { className: b(eb, t) });
    console.error(`Unknown role type ${e}`);
}
const nb = 'NewPerk_count_dccb920a',
    sb = 'NewPerk_iconPlus_4dc7d532',
    rb = 'NewPerk_iconGlow_2e9bc817',
    ob = Me('NewPerk', 'NewPerk_2d8eff13');
function ib({ className: e, count: t, baseRef: a }) {
    return f.jsxs(ob, {
        ref: a,
        className: e,
        children: [
            t > 1 && f.jsx('div', { className: nb, children: t }),
            f.jsx('div', { className: sb, 'data-test-id': 'newPerk' }),
            f.jsx(Pe, { path: 'loadout.crew.plus_perks_glow', width: 65, height: 68, className: rb }),
        ],
    });
}
const lb = (e) =>
        a.createElement(
            'svg',
            { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', { d: 'M4 12L9 15L14 12V10L9 13L4 10V12Z', fill: '#FFC6C3' }),
            a.createElement('path', { d: 'M4 8L9 11L14 8V6L9 9L4 6V8Z', fill: '#FFC6C3' }),
            a.createElement('path', { d: 'M4 4L9 7L14 4V2L9 5L4 2V4Z', fill: '#FFC6C3' }),
        ),
    cb = 'RetrainingProgress_7ce4f314',
    db = 'RetrainingProgress_background_accc6ddf',
    ub = 'RetrainingProgress_content_b4685fd0',
    mb = 'RetrainingProgress_icon_f4b2dc6',
    pb = te.resolve('intl'),
    _b = Me('RetrainingProgress', cb);
function hb({ value: e, className: t }) {
    const a = pb.formatNumber('integral', 100 * e);
    return f.jsxs(_b, {
        className: t,
        children: [
            f.jsx('div', { className: db }),
            f.jsxs('div', {
                className: ub,
                children: [
                    f.jsx(lb, { className: mb }),
                    f.jsx(Se, { upgradeLegacy: !0, path: 'common.percentValue', params: { value: a } }),
                ],
            }),
        ],
    });
}
const gb = {
        border: 'TankmanLevel_border_7a3d6e33',
        borderImage: 'TankmanLevel_borderImage_f52e6b8f',
        base: 'TankmanLevel_888fe938',
        perk: 'TankmanLevel_perk_390beec8',
        borderImage__noise: 'TankmanLevel_borderImage__noise_e53df2b',
    },
    vb = te.resolve('images'),
    fb = Me('Perk');
function bb({ value: e, main: t, ...a }) {
    const n = t ? 'components.button.default_border_pattern_radius_4' : 'loadout.crew.dashed_border';
    return f.jsxs(fb, {
        ...a,
        children: [
            t && f.jsx('div', { className: gb.border }),
            f.jsx('div', {
                className: b(gb.borderImage, t && gb.borderImage__noise),
                style: { borderImageSource: `url(${vb.readOrEmpty(n)})` },
            }),
            e,
        ],
    });
}
const xb = Me('TankmanLevel', gb.base);
function yb({ perkValue: e, bonusPerkValue: t }) {
    return f.jsxs(xb, {
        children: [
            f.jsx(bb, { className: gb.perk, value: e, main: !0 }),
            void 0 !== t && f.jsx(bb, { className: b(gb.perk, gb.perk__bonus), value: t, main: !1 }),
        ],
    });
}
const Cb = (e) =>
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
    wb = te.resolve('views'),
    Nb = 'CrewSlot',
    Ib = {
        retrainingProgress: 'retrainingProgress',
        withPerks: 'withPerks',
        unsuitableTankman: 'unsuitableTankman',
        default: 'default',
    };
const jb = C(function ({
        index: e,
        tankmanId: t,
        id: n,
        role: s,
        selected: r = !1,
        setSelectedSlot: o,
        tooltipShowDelay: i,
    }) {
        const [l, c] = a.useState(!1),
            d = xe(),
            { model: u, controls: m } = Rc(),
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
                            ? Ib.retrainingProgress
                            : Ib.unsuitableTankman
                        : e.perks.length > 0 || (t && t > 0)
                          ? Ib.withPerks
                          : Ib.default;
            })(h, v),
            y = x === Ib.retrainingProgress || x === Ib.unsuitableTankman,
            C = h && g > 0,
            [w, N] = Sa();
        const I = pt(
                'crewMember',
                a.useMemo(() => ({ tankmanID: t, slotIdx: n, previousViewID: null }), [t, n]),
                a.useMemo(() => ({ disabled: !_ || p }), [_, p]),
            ),
            j = Pa(
                'crew_info',
                a.useMemo(() => ({ tankman: h ?? {}, resId: wb.read((e) => e.mono.hangar.tooltips('resId')) }), [h]),
                { disabled: !h, showDelay: i },
            );
        return f.jsxs('div', {
            'data-name': 'Slot',
            onMouseDown: function (e) {
                w(e) || null == I || I.onMouseDown(e);
            },
            onMouseEnter: function (e) {
                (j.onMouseEnter(e), p || (c(!0), r || d.play('mouse-enter', { target: Nb })));
            },
            onMouseLeave: function () {
                (j.onMouseLeave(), c(!1));
            },
            onClick: function () {
                (j.onClick(), p || (d.play('crew-slot-click', { target: Nb }), m.openCrew(n), o && o(e)));
            },
            className: b(Af, p && Vf, (!x || x === Ib.default || !Ib[x]) && Bf),
            'data-test-id': `crewSlot-${e}`,
            children: [
                C &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx(ib, { baseRef: N, count: g, className: b(Gf, p && Xf) }),
                            !p && f.jsx('div', { className: $f }),
                        ],
                    }),
                f.jsx(Tf, {
                    hovered: l && !r,
                    selected: r,
                    disabled: p,
                    warning: y,
                    noTankman: !_,
                    skinId: null == h ? void 0 : h.crewSkinId.replace('tankman_', ''),
                    customizedSkin: (null == h ? void 0 : h.customizedSkin) ?? !1,
                }),
                x !== Ib.default &&
                    f.jsx('div', {
                        className: b(Of, p && Hf),
                        children: (() => {
                            if (!h)
                                return (
                                    void 0 !== s &&
                                    f.jsxs(f.Fragment, {
                                        children: [
                                            f.jsx('div', { className: Uf }),
                                            f.jsx(ab, { className: b(qf, Ff), role: s }),
                                        ],
                                    })
                                );
                            switch (x) {
                                case Ib.unsuitableTankman:
                                    return f.jsxs(f.Fragment, {
                                        children: [
                                            f.jsx('div', { className: Uf }),
                                            f.jsx(Cb, { className: b(qf, Zf) }),
                                        ],
                                    });
                                case Ib.retrainingProgress:
                                    return f.jsx(hb, { value: h.currentVehicleSkillsEfficiency, className: Wf });
                                case Ib.withPerks:
                                    return f.jsx(yb, { perkValue: h.perks.length, bonusPerkValue: v });
                                default:
                                    return (console.error('Unknown crew slot display state: ', x), null);
                            }
                        })(),
                    }),
            ],
        });
    }),
    kb = 'CrewPanel_border_2ccbfb54',
    Sb = 'CrewPanel_borderImage_50acd0ba',
    Pb = 'CrewPanel_slots_57c050b6',
    Eb = 'CrewPanel_slotWrapper_acbcfc00',
    Mb = Me('CrewPanel', 'CrewPanel_82d22bfe'),
    Db = C(
        a.forwardRef(function (e, t) {
            const [n, s] = a.useState(!1),
                { model: r } = Rc(),
                o = r.computes.slots(),
                i = r.withDog.get();
            return f.jsxs(Mb, {
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
                    f.jsx('div', { className: kb }),
                    f.jsx('div', { className: Sb }),
                    f.jsxs('div', {
                        className: Pb,
                        children: [
                            o.map((e, t) =>
                                f.jsxs(
                                    'div',
                                    {
                                        className: Eb,
                                        children: [
                                            t > 0 && f.jsx(Nv, {}),
                                            f.jsx(
                                                jb,
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
                            i && f.jsxs('div', { className: Eb, children: [f.jsx(Nv, {}), f.jsx(Jf, {})] }),
                        ],
                    }),
                ],
            });
        }),
    ),
    Lb = { 'crew-slot-click': Ea('yes1'), 'dog-slot-click': Ea('rudy') },
    Tb = new wa().addWithProps(Ma, { overrides: Lb }),
    Ab = { rootId: te.resolve('aliases').read((e) => e.hangar.shared.Crew('resId')) };
function Bb() {
    return Tb.render(f.jsxs(Vc, { options: Ab, children: [f.jsx(_f, {}), f.jsx(Db, { className: Yv.crewPanel })] }));
}
const Vb = te.resolve('aliases').read((e) => e.hangar.shared.Crew('resId'));
function Rb({ screenModeEnabled: e, className: t, onResolveRoute: a, onRoute: n, config: s }) {
    return f.jsx(sa, {
        id: Vb,
        fallback: () => f.jsx(Da, {}),
        children: f.jsx('div', {
            className: b(Yv.loadoutPanel, e && Yv.loadoutPanel__screenMode, t),
            children: f.jsxs(Jp, {
                className: Yv.panel,
                children: [f.jsx(Bb, {}), f.jsx(tf, { onResolveRoute: a, onRoute: n, config: s })],
            }),
        }),
    });
}
const Ob = 'funRandomCustomShells';
function zb(e) {
    return {
        type: e.type,
        name: e.name,
        vehicle: e.vehicle,
        vehicleType: e.vehicleType,
        newItemsCount: e.newItemsCount,
        slots: pe(e.slots, Hb),
        warning: e.isWarning,
    };
}
function Hb(e) {
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
        imageNameOverride: e.imageNameOverride,
        tooltipOverride: e.tooltipOverride,
        tooltipAlias: e.tooltipAlias,
        specialization: e.specializations
            ? C_(e.specializations.specializations, e.specializations.isDynamic)[0]
            : void 0,
    };
}
const Ub = { paths: ['/:hangar/loadout/:type'] };
function qb(e, t) {
    var a;
    const n = null == (a = Qt(e, Ub)) ? void 0 : a.params.type;
    return !!n && t.includes(n);
}
const Fb = {
        base: 'FunRandomAbility_166c42ca',
        slot: 'FunRandomAbility_slot_166c42ca',
        slot__disabled: 'FunRandomAbility_slot__disabled_6cd827ac',
        icon: 'FunRandomAbility_icon_31bf4a33',
    },
    Zb = te.resolve('aliases'),
    Wb = I((e) => {
        const [t, n] = a.useState(!1),
            s = xe(),
            { model: r } = tp(),
            o = Te().location,
            i = [i_, r_, o_, l_],
            l = e.disabled || qb(o, i),
            c = vt().breakpoint.name;
        const d = ot(
                e.slot.tooltipAlias,
                a.useMemo(() => [e.slot.intCD], [e.slot.intCD]),
                a.useMemo(() => ({ resId: Zb.read((e) => e.hangar.shared.Loadout('resId')) }), []),
            ),
            u = La(Mh(c)),
            m = Tn(r.assetsPointer.get(), !0);
        return f.jsx('div', {
            ...d,
            className: Fb.base,
            children: f.jsx(xa, {
                className: b(Fb.slot, l && Fb.slot__disabled),
                onMouseEnter: function (e) {
                    (n(!0), s.play('mouse-enter', { target: 'loadout-panel:slot:equipment', original: e }));
                },
                onMouseLeave: () => n(!1),
                hovered: t,
                disabled: l,
                'data-test-id': `funRandomAbilitySlot-${e.slot.id}`,
                size: Eh(c),
                children: f.jsx(yh, {
                    id: e.slot.intCD,
                    index: e.slot.id,
                    children: f.jsx(Pe, {
                        path: `${m}.ability.${u}.${e.slot.imageName}`,
                        className: Fb.icon,
                        children: f.jsx('div', { className: Fb.hoverOverlay }),
                    }),
                }),
            }),
        });
    }),
    Gb = 'FunRandomShell_hoverOverlay_7d546fb4',
    Xb = 'FunRandomShell_e13c7991',
    $b = 'FunRandomShell_icon_9fb8054',
    Kb = 'FunRandomShell_count_96f43035',
    Yb = 'FunRandomShell_infinity_71bff979',
    Qb = te.resolve('aliases'),
    Jb = 'small',
    ex = 'x64x64',
    tx = 'medium',
    ax = I(function ({ slot: e, disabled: t, className: n }) {
        const { model: s } = tp(),
            r = qn().model,
            o = Kt({ value: Jb }, { large: { value: ex }, extraLarge: { value: tx } }).value,
            i = Qb.read((e) => e.hangar.shared.Loadout('resId')),
            l = ot(
                e.tooltipOverride,
                a.useMemo(() => [e.intCD], [e.intCD]),
                a.useMemo(() => ({ resId: i }), [i]),
            ),
            c = _e({ resId: i, args: a.useMemo(() => ({ intCD: e.intCD, slotId: e.id, slotType: Ob }), [e]) }),
            d = e.tooltipOverride ? l : c,
            u = Tn(s.assetsPointer.get(), !0),
            m = e.imageNameOverride ? `${u}.shell.${o}.${e.imageNameOverride}` : `shell.${o}.${e.imageName}`,
            p = r.isInfiniteAmmo.get();
        return f.jsx('div', {
            ...d,
            className: b(Xb, n),
            'data-test-id': `funRandomShellSlot-${e.id}`,
            children: f.jsxs(yh, {
                id: e.intCD,
                index: e.id,
                children: [
                    f.jsx(Pe, { path: m, className: $b, children: f.jsx('div', { className: Gb }) }),
                    f.jsx('div', {
                        className: Kb,
                        children: p
                            ? f.jsx('div', { className: Yb })
                            : void 0 !== e.count && f.jsx(vv, { count: e.count, empty: !1, disabled: t }),
                    }),
                ],
            }),
        });
    }),
    nx = 'FunRandomShells_warningOverlay_3925fe3a',
    sx = 'FunRandomShells_8f9d34a4',
    rx = 'FunRandomShells_slot_f154f709',
    ox = 'FunRandomShells_slot__customBackground_ca617637',
    ix = 'FunRandomShells_shell_e04a012f',
    lx = 'FunRandomShells_content_8f9d34a4',
    cx = I(function (e) {
        const { model: t } = j_(),
            [n, s] = a.useState(!1),
            r = xe(),
            o = vt().breakpoint.name,
            i = Te().location,
            l = t.computes.sectionByIndex(e.groupIndex, e.sectionIndex);
        if (!l) return null;
        const c = ca(l.slots ?? [], (e) => e.intCD > 0);
        const d = [i_, r_, o_, l_],
            u = e.disabled || qb(i, d);
        return f.jsx('div', {
            className: sx,
            children: f.jsxs(xa, {
                classNames: { slot: b(rx, l.warning && !u && ox), content: lx },
                size: Eh(o),
                hovered: n && !u && !l.warning,
                disabled: u,
                onMouseEnter: function () {
                    (s(!0), u || r.play('mouse-enter', { target: 'loadout-panel:slot:shells' }));
                },
                onMouseLeave: () => s(!1),
                children: [
                    l.warning && f.jsx(bv, { hovered: n && !u }),
                    c.map((e) => f.jsx(ax, { className: ix, slot: e, disabled: u }, e.id)),
                    l.warning && f.jsx('div', { className: nx }),
                ],
            }),
        });
    }),
    dx = {
        providersData: [
            Ov,
            zv,
            Hv,
            {
                provider: I_,
                props: {
                    options: { rootId: te.resolve('aliases').read((e) => e.hangar.shared.Loadout('resId')) },
                    initial: {
                        fromGroupModel: function (e) {
                            return {
                                currentIndex: e.currentIndex,
                                id: e.groupId,
                                totalCount: e.totalCount,
                                states: pe(e.setupSelector.states, (e) => e),
                                switchEnabled: e.setupSelector.isSwitchEnabled,
                                prebattleSwitchDisabled: e.setupSelector.isPrebattleSwitchDisabled,
                                sections: pe(e.sections, zb),
                            };
                        },
                    },
                },
            },
            qv,
        ],
        sectionToComponent: { ...Bv, [Ob]: cx },
        slotToComponent: { ...Vv, funRandomCustomAbilities: Wb },
    };
function ux(e) {
    const t = Kp.loadout[e];
    if (t) return t;
}
function mx(e) {
    return f.jsx(Rb, { ...e, onResolveRoute: ux, config: dx });
}
const px = 'battleNeeded',
    _x = te.resolve('aliases'),
    hx = 'small',
    gx = 'large',
    vx = 'vehicle',
    fx = 'crew',
    bx = 'customization',
    xx = {
        nationChange: 'nationChange',
        aboutVehicle: 'aboutVehicle',
        repairs: 'repairs',
        fieldModification: 'fieldModification',
        vehSkillTree: 'vehSkillTree',
        compare: 'compare',
        research: 'research',
        armorInspector: 'armorInspector',
        easyEquip: 'easyEquip',
        crewRetrain: 'crewRetrain',
        quickTraining: 'quickTraining',
        crewOut: 'crewOut',
        crewBack: 'crewBack',
        crewAutoReturn: 'crewAutoReturn',
        customization: 'customization',
        proBoost: 'proBoost',
    },
    yx = ['locked', 'active', 'lockedActive', 'incompatibleVehicle', 'incompatibleMode'],
    Cx = {
        [xx.nationChange]: _x.read((e) => e.vehicle_menu.default.NationChange('resId')),
        [xx.aboutVehicle]: _x.read((e) => e.vehicle_menu.default.AboutVehicle('resId')),
        [xx.repairs]: _x.read((e) => e.vehicle_menu.default.Repairs('resId')),
        [xx.fieldModification]: _x.read((e) => e.vehicle_menu.default.FieldModification('resId')),
        [xx.vehSkillTree]: _x.read((e) => e.vehicle_menu.default.VehSkillTree('resId')),
        [xx.compare]: _x.read((e) => e.vehicle_menu.default.Compare('resId')),
        [xx.research]: _x.read((e) => e.vehicle_menu.default.Research('resId')),
        [xx.armorInspector]: _x.read((e) => e.vehicle_menu.default.ArmorInspector('resId')),
        [xx.easyEquip]: _x.read((e) => e.vehicle_menu.default.EasyEquip('resId')),
        [xx.crewRetrain]: _x.read((e) => e.vehicle_menu.default.CrewRetrain('resId')),
        [xx.quickTraining]: _x.read((e) => e.vehicle_menu.default.QuickTraining('resId')),
        [xx.crewOut]: _x.read((e) => e.vehicle_menu.default.CrewOut('resId')),
        [xx.crewBack]: _x.read((e) => e.vehicle_menu.default.CrewBack('resId')),
        [xx.crewAutoReturn]: _x.read((e) => e.vehicle_menu.default.CrewAutoReturn('resId')),
        [xx.customization]: _x.read((e) => e.vehicle_menu.default.Customization('resId')),
        [xx.proBoost]: _x.read((e) => e.vehicle_menu.default.ProBoost('resId')),
    },
    wx = Object.values(xx);
const Nx = {
        vehicleChassis: 'track',
        vehicleEngine: 'engine',
        vehicleGun: 'gun',
        vehicleWheels: 'wheel',
        vehicleTurret: 'turret',
        vehicleRadio: 'radio',
    },
    Ix = { vehicleGun: 0, vehicleTurret: 1, vehicleRadio: 2, vehicleEngine: 3, vehicleChassis: 4, vehicleWheels: 5 };
function jx(e) {
    return Ix[e] ?? 0;
}
const kx = 'warning',
    Sx = 'critical',
    Px = 'enabled',
    Ex = 'disabled',
    Mx = 'unavailable',
    Dx = [fx, vx, bx],
    Lx = {
        vehicle: [
            Cx.nationChange,
            Cx.aboutVehicle,
            Cx.repairs,
            Cx.fieldModification,
            Cx.vehSkillTree,
            Cx.compare,
            Cx.research,
            Cx.armorInspector,
            Cx.easyEquip,
            Cx.proBoost,
        ],
        crew: [Cx.crewRetrain, Cx.quickTraining, Cx.crewOut, Cx.crewBack],
    };
const Tx = o({
        state: c(),
        counter: m(),
        stateReason: S(c()),
        researchItems: S(l(c())),
        params: S(o({ tooltipKey: S(c()), expirationTimestamp: S(m()), vehicle: S(c()), isActive: S(P()) })),
    }),
    [Ax, Bx] = V('VehicleMenuModel')(
        ({ observableModel: e, requires: { vehicleInfo: t } }) => {
            const a = { opened: n.box(!1), screenID: n.box(null), menuItems: e.dict('menuEntries') },
                s = Q.structural((e) => {
                    const t = a.menuItems.get(e);
                    if (!t) return (console.error(`Error getting menuItem with id: ${e}`), { state: Ex, counter: -1 });
                    try {
                        return _(Tx, JSON.parse(t));
                    } catch (n) {
                        return (console.error(n), { state: Ex, counter: -1 });
                    }
                }),
                r = Q.shallow(() => {
                    const { researchItems: e } = s(Cx.research);
                    return e ? ce(e, (e, t) => jx(e) - jx(t))[0] : void 0;
                }),
                o = Q.shallow((e) => {
                    var a;
                    if ((null == (a = t.model.selectedVehicleStatistics()) ? void 0 : a.status) === Tl.battle)
                        return Ex;
                    const n = [];
                    let r = !1;
                    for (const t of e) {
                        const e = s(t);
                        if ((n.push(e.state), e.state === Sx)) return Sx;
                        e.state === kx && (r = !0);
                    }
                    const o = n.every((e) => e === Ex);
                    return ((i = o), r ? kx : i ? Ex : Px);
                    var i;
                });
            return { ...a, computes: { getMenuItem: s, getButtonState: o, researchItem: r } };
        },
        ({ externalModel: e, model: t }) => ({
            open: r((e) => {
                (t.opened.set(!0), t.screenID.set(e));
            }),
            close: r(() => {
                (t.opened.set(!1), t.screenID.set(null));
            }),
            navigateTo: e.createCallback((e) => ({ entry: e }), 'onNavigate'),
        }),
        { useRequires: () => ({ vehicleInfo: Xs() }) },
    ),
    [Vx, Rx] = V('KeyBindingsProvider')((e) => ({
        vehicleMenu: {
            ...e.observableModel.primitives({ upgrades: xx.vehSkillTree }, 'vehicleMenu'),
            ...e.observableModel.primitives(
                {
                    retrainCrew: xx.crewRetrain,
                    quickTraining: xx.quickTraining,
                    returnCrew: xx.crewBack,
                    aboutVehicle: xx.aboutVehicle,
                    upgrades: xx.fieldModification,
                    compare: xx.compare,
                    research: xx.research,
                    armor: xx.armorInspector,
                    quickService: xx.easyEquip,
                    customization: xx.customization,
                },
                'vehicleMenu',
            ),
        },
    })),
    Ox = 'MenuButton_background_80afe673',
    zx = 'MenuButton_background__hidden_a0ead688',
    Hx = 'MenuButton_overlay_fdbd550d',
    Ux = 'MenuButton_arrow_5a0b183c',
    qx = 'MenuButton_icon_e994a077',
    Fx = Me('MenuButton', {
        element: 'div',
        className: 'MenuButton_3f57027c',
        cva: {
            variants: {
                state: { [Ex]: 'MenuButton_base__disabled_2d840da1', opened: 'MenuButton_base__opened_d9d84dd' },
            },
        },
    }),
    Zx = te.resolve('strings'),
    Wx = te.resolve('views'),
    Gx = C(function ({
        type: e,
        opened: t,
        buttonState: n,
        crewBackWarning: s,
        iconPostfix: r,
        size: o = hx,
        onMouseEnter: i,
        onClick: l,
        classNames: c,
        className: d,
        ...u
    }) {
        var m;
        const p = Rx(),
            [_, h] = a.useState(!1),
            g = xe(),
            v = fe(t),
            { model: x } = Bx(),
            y = p.model.vehicleMenu,
            C = null == (m = null == y ? void 0 : y[e]) ? void 0 : m.get(),
            w = C ? Ta(C) : void 0,
            { stateReason: N } = x.computes.getMenuItem(Cx.crewBack),
            I = n === Ex,
            j = t ? 'opened' : n,
            k = st(o, 'upscale'),
            S = (e === fx && s) || I ? Px : n,
            P = I ? Px : S,
            E = rt({ body: Zx.readOrEmpty('crew_operations.return.error.noPrevious') }),
            M = Pa(
                'simple',
                a.useMemo(
                    () => ({
                        resId: Wx.read((e) => e.mono.tooltips.tooltips('resId')),
                        header: Zx.readOrEmpty(`hangar.vehicleMenu.menuButton.tooltip.${e}.header`),
                        body: Zx.readOrEmpty(`hangar.vehicleMenu.menuButton.tooltip.${e}.body`),
                        keyButtonCode: w,
                        keyButtonTitle: Zx.readOrEmpty('hangar.vehicleMenu.menuButton.tooltip.hotkey.title'),
                    }),
                    [e, w],
                ),
            );
        a.useEffect(() => {
            t && !1 === v && g.play('expand', { target: 'vehicle-menu-widget:button' });
        }, [t, v, g]);
        const D = I && e === fx && N === px ? E : I ? void 0 : M;
        return f.jsxs(Fx, {
            ...u,
            ...D,
            state: j,
            onMouseEnter: function (e) {
                (null == D || D.onMouseEnter(e),
                    I ||
                        (g.play('mouse-enter', { target: 'vehicle-menu-widget:button', original: e }),
                        h(!0),
                        null == i || i(e)));
            },
            onMouseLeave: function () {
                (h(!1), null == D || D.onMouseLeave());
            },
            onClick: function (t) {
                (null == D || D.onClick(),
                    I || (g.play('click', { target: 'vehicle-menu-widget:button', original: t }), l(e)));
            },
            'data-test-id': e,
            className: null == c ? void 0 : c.base,
            children: [
                !I &&
                    f.jsxs(f.Fragment, {
                        children: [
                            f.jsx(Pe, {
                                path: `hangar.vehicleMenu.${k}.btn_${S}`,
                                className: b(Ox, (_ || t) && zx, null == c ? void 0 : c.background),
                            }),
                            f.jsx(Pe, {
                                path: `hangar.vehicleMenu.${k}.btn_${S}_opened`,
                                className: b(Ox, !t && zx, null == c ? void 0 : c.backgroundOpened),
                            }),
                            !t &&
                                f.jsx(Pe, {
                                    path: `hangar.vehicleMenu.${k}.btn_${S}_hover`,
                                    className: b(Ox, !_ && zx, null == c ? void 0 : c.backgroundHovered),
                                }),
                        ],
                    }),
                e !== bx &&
                    !t &&
                    f.jsx(Pe, {
                        path: `hangar.vehicleMenu.${k}.arrow_${P}`,
                        className: b(Ux, null == c ? void 0 : c.arrow),
                    }),
                (!t || I) &&
                    f.jsx(Pe, {
                        path: `hangar.vehicleMenu.${k}.${e}_${r}`,
                        className: b(qx, null == c ? void 0 : c.icon),
                    }),
                I &&
                    f.jsx(Pe, {
                        path: `hangar.vehicleMenu.${k}.btn_disabled`,
                        className: b(Hx, null == c ? void 0 : c.overlay),
                    }),
            ],
        });
    }),
    Xx = {
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
    $x = te.resolve('strings'),
    Kx = te.resolve('intl'),
    Yx = (e) => {
        const [t, a] = Ba(Va(Ra(e), Oa()), ['h', 'm']);
        return `${((n = t), String(Math.max(parseInt(n), 0)).padStart(2, '0'))}:${((e) => String(Math.max(parseInt(e, 10) || 0, 1)).padStart(2, '0'))(a)}`;
        var n;
    },
    Qx = C(function ({ id: e, size: t = hx, researchItem: a, onClick: n }) {
        var s;
        const r = xe(),
            { model: o } = Bx(),
            { state: i, stateReason: l, counter: c, params: d } = o.computes.getMenuItem(e),
            u = st(t, 'upscale'),
            m = Rx().model.vehicleMenu,
            p = (function (e) {
                const t = wx.find((t) => Cx[t] === e);
                return (se(void 0 !== t, `Unknown menu item id = ${e}`), t);
            })(e),
            _ = null == (s = null == m ? void 0 : m[p]) ? void 0 : s.get(),
            h = _ ? Ta(_) : void 0,
            g = rt({ body: $x.readOrEmpty('crew_operations.return.error.noPrevious') }),
            v = rt({ body: $x.readOrEmpty('crew_operations.return.warning.memberDemobilized.tooltip.body') }),
            x = null == d ? void 0 : d.expirationTimestamp,
            y = null == d ? void 0 : d.tooltipKey,
            C = e === Cx.proBoost && y && ((w = y), yx.includes(w));
        var w;
        const N = x ? Yx(x) : '',
            I = C ? $x.readOrEmpty(`hangar.vehicleMenu.proBoostTooltips.${y}.header`) : '',
            j = C
                ? Aa($x.readOrEmpty(`hangar.vehicleMenu.proBoostTooltips.${y}.body`), {
                      time: N,
                      vehicle: (null == d ? void 0 : d.vehicle) ?? '',
                  })
                : '',
            k = rt({ header: I, body: j });
        if (i === Mx) return null;
        return f.jsx('div', {
            className: Xx.base,
            ...(p === Cx.crewBack && (i === Ex && l === px ? g : i === Px && 'crewMembersRetired' === l ? v : void 0)),
            ...(C && k),
            children: f.jsxs('div', {
                className: b(Xx.inner, Xx[`inner__${i}`]),
                onClick: function (t) {
                    i !== Ex && (r.play('click', { target: 'vehicle-menu-widget:item', original: t }), n(e));
                },
                onMouseEnter: function (e) {
                    i !== Ex && r.play('mouse-enter', { target: 'vehicle-menu-widget:item', original: e });
                },
                'data-test-id': p,
                children: [
                    f.jsx('div', { className: Xx.hover }),
                    f.jsxs('div', {
                        className: Xx.sideBorders,
                        children: [
                            f.jsx('div', { className: b(Xx.sideBorder, Xx.sideBorder__left) }),
                            f.jsx('div', { className: b(Xx.sideBorder, Xx.sideBorder__right) }),
                        ],
                    }),
                    f.jsx('div', {
                        className: Xx.icon,
                        children: f.jsx(Pe, {
                            path: `hangar.vehicleMenu.${u}.${p}${i === kx && a && e === Cx.research ? `_${Nx[a]}` : i === Px || i === Ex ? '' : `_${i}`}`,
                            className: Xx.iconImage,
                        }),
                    }),
                    f.jsxs('div', {
                        className: b(Xx.title, h && Xx.title__hasHotkey),
                        children: [
                            f.jsx(Se, {
                                path: `hangar.vehicleMenu.menuItem.${p}.title`,
                                params:
                                    e === Cx.proBoost
                                        ? (null == d ? void 0 : d.isActive)
                                            ? {
                                                  activeOrCountdown: $x.readOrEmpty(
                                                      'hangar.vehicleMenu.menuItem.proBoost.active',
                                                  ),
                                              }
                                            : (null == d ? void 0 : d.expirationTimestamp)
                                              ? { activeOrCountdown: `[${N}]` }
                                              : { activeOrCountdown: '' }
                                        : {},
                            }),
                            c > 0 &&
                                f.jsx(Se, {
                                    path: 'hangar.vehicleMenu.menuItem.counter',
                                    params: { count: Kx.formatNumber('integral', c) },
                                    className: Xx.counter,
                                }),
                            h &&
                                f.jsx(ra, {
                                    silent: !0,
                                    idle: !0,
                                    keyCode: h,
                                    classNames: {
                                        base: Xx.hotKey,
                                        background: Xx.hotKeyBackground,
                                        border: Xx.hotKeyBorder,
                                        content: Xx.hotKeyContent,
                                    },
                                    children: f.jsx(ra.Code, {}),
                                }),
                        ],
                    }),
                    e === Cx.crewBack &&
                        i === Px &&
                        'crewMembersRetired' === l &&
                        f.jsx(Pe, { path: 'hangar.vehicleMenu.icon_alert', className: Xx.warningIcon }),
                    i === Ex && f.jsx('div', { className: Xx.disabledOverlay }),
                ],
            }),
        });
    }),
    Jx = 'MenuList_border_478c22c4',
    ey = 'MenuList_bottom_c28a1943',
    ty = 'MenuList_cea03bfd',
    ay = 'MenuList_content_102c53c8',
    ny = 'MenuList_checkbox_d5741047',
    sy = 'MenuList_label_8b8f8c2a',
    ry = 'MenuList_checkbox__checked_5a4f974e',
    oy = 'MenuList_checkbox__disabled_5a4f974e',
    iy = 'MenuList_topItem_6a7889e4',
    ly = 'MenuList_autoReturn_841be836',
    cy = 'MenuList_divider_af7e286c',
    dy = 'MenuList_bottomBorder_bad1a96',
    uy = 'MenuList_notch_265b362a',
    my = C(function ({ buttonState: e, size: t, className: a }) {
        const { model: n, controls: s } = Bx(),
            r = n.opened.get(),
            o = n.screenID.get(),
            i = n.computes.researchItem(),
            l = te.resolve('strings'),
            c = rt({ body: l.readOrEmpty('crew_operations.return.error.noPrevious') }),
            d = E(r, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: M.stiff });
        if (!o) return;
        const { state: u, stateReason: m } = n.computes.getMenuItem(Cx.crewAutoReturn),
            p = u === Mx;
        const _ = e === Sx || e === kx ? e : 'default',
            h = u === Px;
        return (
            o !== bx &&
            d(
                (e, n) =>
                    n &&
                    f.jsxs(w.div, {
                        className: b(ty, a),
                        style: e,
                        children: [
                            f.jsxs('div', {
                                className: ay,
                                children: [
                                    o === fx &&
                                        f.jsxs('div', {
                                            className: iy,
                                            children: [
                                                f.jsx('div', {
                                                    className: ly,
                                                    ...(p && m === px && c),
                                                    children: f.jsx(Oe, {
                                                        checked: h,
                                                        disabled: p,
                                                        onCheckedChange: () => s.navigateTo(Cx.crewAutoReturn),
                                                        size: ze.small,
                                                        className: b(ny, h && ry, p && oy),
                                                        classNames: { label: sy },
                                                        children: l.readOrEmpty(
                                                            'hangar.vehicleMenu.menuItem.crewAutoReturn.title',
                                                        ),
                                                    }),
                                                }),
                                                f.jsx('div', { className: cy }),
                                            ],
                                        }),
                                    pe(Lx[o], (e) =>
                                        f.jsx(
                                            Qx,
                                            {
                                                id: e,
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
                            f.jsx('div', { className: Jx }),
                            f.jsxs('div', {
                                className: ey,
                                children: [
                                    f.jsx(Pe, { path: `hangar.vehicleMenu.menu_bottom_left_${_}`, className: dy }),
                                    f.jsx('div', { className: uy }),
                                    f.jsx(Pe, { path: `hangar.vehicleMenu.menu_bottom_right_${_}`, className: dy }),
                                ],
                            }),
                        ],
                    }),
            )
        );
    }),
    py = new Set(['text', 'search', 'url', 'tel', 'email', 'password', 'number']);
const _y = C(function () {
        const e = Rx().model.vehicleMenu,
            t = xe(),
            { model: a, controls: n } = Bx(),
            s = a.opened.get();
        (gt(s ? 'Escape' : 'NONE', n.close), gt(s ? 'Space' : 'NONE', n.close));
        for (const [r, o] of Object.entries(e)) {
            const e = Ta(o.get()),
                i = Cx[r],
                { state: l } = a.computes.getMenuItem(i);
            Jt(l === Ex || l === Mx ? 'NONE' : e, (e) => {
                var a;
                e.shiftKey ||
                    e.altKey ||
                    e.ctrlKey ||
                    (document.activeElement &&
                        !((a = document.activeElement) instanceof HTMLTextAreaElement
                            ? a.disabled || a.readOnly
                            : !(a instanceof HTMLInputElement
                                  ? !a.disabled && !a.readOnly && py.has(a.type)
                                  : a instanceof HTMLElement && a.isContentEditable))) ||
                    (t.play('hot-key', { target: 'wehicle_menu_widget:screen', original: e }),
                    na.contextMenu.hideAll(),
                    n.navigateTo(i),
                    s && n.close());
            });
        }
        return (
            za(() =>
                ha.down(([e, t]) => {
                    'outside' === t && n.close();
                }),
            ),
            null
        );
    }),
    hy = {
        root: 'VehicleMenuWidget_root_de68ce43',
        base: 'VehicleMenuWidget_80bb906f',
        menu: 'VehicleMenuWidget_menu_54752133',
        menu__vehicle: 'VehicleMenuWidget_menu__vehicle_6691c8cb',
        menu__crew: 'VehicleMenuWidget_menu__crew_9d49d2d3',
        menu__customization: 'VehicleMenuWidget_menu__customization_7cda5bdd',
    },
    gy = { rootId: te.resolve('aliases').read((e) => e.hangar.shared.KeyBindings('resId')) },
    vy = C(function ({ className: e, keyBindingsProviderOptions: t = gy }) {
        const { model: n, controls: s } = Bx(),
            r = n.screenID.get(),
            o = n.computes.getButtonState,
            i = n.computes.researchItem(),
            { state: l } = n.computes.getMenuItem(Cx.crewAutoReturn),
            { state: c } = n.computes.getMenuItem(Cx.crewBack),
            { state: d } = n.computes.getMenuItem(Cx.fieldModification),
            { state: u } = n.computes.getMenuItem(Cx.vehSkillTree),
            { state: m } = n.computes.getMenuItem(Cx.easyEquip),
            { state: p } = n.computes.getMenuItem(Cx.quickTraining),
            { state: _ } = n.computes.getMenuItem(Cx.customization),
            { state: h } = n.computes.getMenuItem(Cx.proBoost),
            g = Ha(
                a.useCallback(() => {
                    s.close();
                }, [s]),
            ),
            v = Kt({ value: hx }, { large: { value: gx } }),
            x = o(Lx[fx]),
            y = { [vx]: o(Lx[vx]), [fx]: x, [bx]: _ };
        function C(e) {
            if (e === vx) {
                const e = y[vx] === Ex ? '_disable' : '';
                if (y[vx] === Sx) return y[vx];
                if (m === kx) return `${xx.easyEquip}${e}`;
                if (i) return `${Nx[i]}${e}`;
                if (d === kx) return `${xx.fieldModification}${e}`;
                if (u === kx) return `${xx.vehSkillTree}${e}`;
                if (h === kx) return `${xx.proBoost}${e}`;
            } else if (e === fx) {
                if (p === kx) return kx;
                if (c === Sx || c === kx) return 'default';
                if (l === Px && y[fx] !== kx) return 'autoReturn';
            }
            return 'default';
        }
        function w(e) {
            e !== bx ? (r === e ? s.close() : s.open(e)) : s.navigateTo(Cx.customization);
        }
        return (
            a.useEffect(() => {
                r === fx && x === Ex && s.close();
            }, [r, x, s]),
            f.jsx(Vx, {
                options: t,
                children: f.jsxs('div', {
                    ref: g,
                    className: b(hy.base, e),
                    children: [
                        r !== bx &&
                            f.jsx('div', {
                                className: b(hy.menu, r && hy[`menu__${r}`]),
                                children: f.jsx(my, { buttonState: r ? o(Lx[r]) : Px, size: v.value }),
                            }),
                        Dx.map((e) =>
                            f.jsx(
                                Gx,
                                {
                                    type: e,
                                    opened: r === e,
                                    buttonState: y[e],
                                    crewBackWarning: p !== kx && (c === Sx || c === kx),
                                    iconPostfix: C(e),
                                    size: v.value,
                                    onClick: w,
                                },
                                e,
                            ),
                        ),
                        f.jsx(_y, {}),
                    ],
                }),
            })
        );
    }),
    fy = 'VehicleMenu_menu_2b35ec',
    by = 'VehicleMenu_menu__screenMode_bf623a9b',
    xy = { rootId: te.resolve('aliases').read((e) => e.hangar.shared.VehicleMenu('resId')) };
function yy({ className: e, screenModeEnabled: t }) {
    return f.jsx(Ax, {
        options: xy,
        children: f.jsx('div', { className: b(fy, t && by, e), children: f.jsx(vy, {}) }),
    });
}
const Cy = 'HeroTankMarker_7a1c486d',
    wy = 'HeroTankMarker_base__visible_d8b5c003',
    Ny = 'HeroTankMarker_vehicleName_a789e6e5',
    Iy = 'HeroTankMarker_vehicleType_d8b5c003',
    jy = Me('HeroTankInfo'),
    ky = C(
        a.forwardRef(function (e, t) {
            const { model: n } = Vn(),
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
                            t.style.transform = `translate(${Je(e.posx)}px, ${Je(e.posy)}px) translate(-50%, -50%)`;
                        }),
                    [n.heroTankMarker],
                ),
                f.jsxs(jy, {
                    ...e,
                    ref: Ua([t, o]),
                    className: b(Cy, i && wy),
                    children: [
                        f.jsx('div', { className: Ny, children: n.name.get() }),
                        f.jsx('div', {
                            className: Iy,
                            children: r && f.jsx(Pe, { path: `vehicleTypes.gold.${kt(r)}`, width: 32, height: 32 }),
                        }),
                    ],
                })
            );
        }),
    ),
    Sy = 'disabled',
    Py = 'tournament',
    Ey = 'clans',
    My = 'personalMissions',
    Dy = 'modeSelector',
    Ly = 'achievements',
    Ty = {
        ['shop']: 'shop',
        ['storage']: 'storage',
        ['techtree']: 'techtree',
        ['barracks']: 'barracks',
        [Py]: 'tournament',
        [Ey]: 'clans',
        ['clan']: 'clan',
        ['missions']: 'missions',
        [My]: 'personalMissions',
        [Dy]: 'modeSelector',
        [Ly]: 'profile',
        ['replays']: 'replays',
    },
    Ay = (e) =>
        a.createElement(
            'svg',
            { width: 7, height: 18, viewBox: '0 0 7 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e },
            a.createElement('path', {
                d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                fill: '#EEEDE9',
                fillOpacity: 0.9,
            }),
        ),
    By = {
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
    Vy = 'forts',
    Ry = te.resolve('intl'),
    Oy = te.resolve('strings'),
    zy = {
        [Dy]: 'tooltips.header.battleType',
        [Py]: 'tooltips.header.buttons.tournaments',
        [Ly]: 'tooltips.header.buttons.profile',
    },
    Hy = {
        [Ey]: 'tooltips.header.buttons.clans.turnedOff',
        [My]: 'tooltips.header.buttons.personalMissionsDisabled',
        [Vy]: 'tooltips.header.buttons.forts.turnedOff',
    };
function Uy(e) {
    return Ry.toUpperCase(
        Oy.readOrEmpty(`menu.headerButtons.${Ty[e]}`) || Oy.readOrEmpty(`menu.headerButtons.${e}`) || `{${e}}`,
    );
}
function qy({
    name: e,
    state: t,
    modeName: n,
    modeId: s,
    techTreeEvents: r,
    clanEmblem: o,
    onClick: i,
    modeIconPath: l,
    battleTypesPath: c = 'R.images.gui.maps.icons',
}) {
    const d = xe(),
        u = e === Ey && o,
        m = rt(
            a.useMemo(
                () =>
                    (function (e, t) {
                        const a = ((t && Hy[e]) || zy[e]) ?? `tooltips.header.buttons.${e}`;
                        return { header: Oy.readOrEmpty(`${a}.header`), body: Oy.readOrEmpty(`${a}.body`) };
                    })(u ? Vy : e, t === Sy),
                [e, t, u],
            ),
        ),
        p = ot('techtreeDiscount'),
        _ = r && 'techtree' === e ? p : m;
    const h = l ?? `${c}.battleTypes.c_64x64.${s}`;
    return f.jsx('div', {
        ..._,
        className: b(By.base, By[`base__${t}State`], By[`base__${e}Name`]),
        'data-test-id': e,
        onMouseEnter: function (e) {
            (_.onMouseEnter(e),
                t !== Sy && d.play('mouse-enter', { target: 'main-menu-widget:menu-item', original: e }));
        },
        onClick: function (a) {
            (_.onClick(), t !== Sy && (i(e), d.play('click', { target: 'main-menu-widget:menu-item', original: a })));
        },
        children: (() => {
            switch (e) {
                case Dy:
                    return f.jsxs(f.Fragment, {
                        children: [
                            f.jsxs('div', {
                                className: By.modeSelector,
                                children: [
                                    f.jsx('div', { className: By.label, children: Uy(e) }),
                                    n && f.jsx('div', { className: By.modeName, children: Ry.toUpperCase(n) }),
                                    f.jsx('div', { className: By.modeIcon, style: { backgroundImage: `url(${h})` } }),
                                ],
                            }),
                            f.jsx(Ay, { className: By.arrow }),
                        ],
                    });
                case Ey:
                    return f.jsxs('div', {
                        className: By.titleWrapper,
                        children: [
                            o && f.jsx('div', { style: { backgroundImage: `url(${o})` }, className: By.clanEmblem }),
                            f.jsx('div', { className: By.title, children: Uy(u ? 'clan' : e) }),
                        ],
                    });
                default:
                    return f.jsx('div', {
                        className: By.titleWrapper,
                        children: f.jsx('div', { className: By.title, children: Uy(e) }),
                    });
            }
        })(),
    });
}
const Fy = 'MainMenu_222da7b7',
    Zy = C(function ({ className: e, battleTypesPath: t, modeIconPath: n }) {
        const { model: s, controls: r } = On(),
            o = s.menuItems.get(),
            i = s.modeName.get(),
            l = s.modeId.get(),
            c = s.hasTechTreeEvents.get(),
            d = s.clanEmblem.get();
        return f.jsx('div', {
            className: b(Fy, e),
            children: pe(o, (e) =>
                a.createElement(qy, {
                    ...e,
                    key: e.name,
                    battleTypesPath: t,
                    modeIconPath: n,
                    onClick: r.navigateTo,
                    modeName: i,
                    modeId: l,
                    techTreeEvents: c,
                    clanEmblem: d,
                }),
            ),
        });
    });
function Wy(e) {
    const { className: t, battleTypesPath: a, modeIconPath: n, ...s } = e;
    return f.jsx(Rn, { ...s, children: f.jsx(Zy, { className: t, battleTypesPath: a, modeIconPath: n }) });
}
function Gy({ className: e }) {
    const { controls: t } = Hn();
    return f.jsx('div', {
        className: e,
        children: f.jsx(qa, {
            moveSpace: t.sceneWrapper.onMoveSpace,
            onMouseOver3dScene: t.sceneWrapper.onMouseOver3dScene,
        }),
    });
}
const Xy = 'VehicleInfoWidget_b24b193a',
    $y = 'VehicleInfoWidget_info_8571b16b',
    Ky = 'VehicleInfoWidget_info__active_e94ce8a',
    Yy = 'VehicleInfoWidget_text_ff05c9a6',
    Qy = 'VehicleInfoWidget_role_462e1204',
    Jy = 'VehicleInfoWidget_currency_9c6f2463',
    eC = 'VehicleInfoWidget_currencyIcon_59fc1b6d',
    tC = C(function () {
        const e = Xs().model.selectedVehicle(),
            t = Xs().model.selectedVehicleStatistics(),
            { breakpoint: n } = vt(),
            s =
                ((r = null == e ? void 0 : e.vehicleId),
                Fa(
                    'vehicleRoles',
                    a.useMemo(() => [r], [r]),
                ));
        var r;
        if (e && t)
            return f.jsxs('div', {
                className: Xy,
                children: [
                    f.jsxs(De, {
                        ...(1 === e.role && s),
                        className: b($y, 1 === e.role && Ky),
                        children: [
                            f.jsx(De.Level, { className: Yy, value: e.level }),
                            Le(e.type) &&
                                f.jsx(De.Type, {
                                    type: e.type,
                                    premium: t.elite,
                                    size: n.weight <= ft.large.weight ? De.Type.sizes.x48x48 : De.Type.sizes.x64x64,
                                }),
                            f.jsx(De.Name, { className: Yy, children: e.shortName }),
                            0 !== e.role &&
                                1 !== e.role &&
                                f.jsx(De.Role, {
                                    ...s,
                                    classNames: { base: Qy },
                                    roleKey: Y(e.role),
                                    size: De.Role.sizes.x16x16,
                                }),
                        ],
                    }),
                    f.jsx(nt, {
                        classNames: { base: Jy, icon: eC },
                        type: t.elite ? Za.eliteXp : Za.tankXP,
                        reverse: !0,
                        size: tt.extraSmall,
                        children: t.xp,
                    }),
                ],
            });
    }),
    [aC, nC] = V('PetObjectTooltipModel')(({ observableModel: e }) => ({ root: e.object() }), O),
    sC = te.resolve('aliases'),
    rC = te.resolve('views'),
    oC = sC.read((e) => e.hangar.shared.PetObjectTooltip('resId')),
    iC = rC.read((e) => e.mono.pet_system.tooltips.pet_storage_tooltip('resId')),
    lC = rC.read((e) => e.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId')),
    cC = C(function () {
        const { model: e } = nC(),
            { isStorageTooltipVisible: t, is3dObjectTooltipVisible: n } = e.root.get();
        return (
            a.useEffect(() => {
                n
                    ? na.tooltip.open(oC, lC)
                    : t
                      ? na.tooltip.open(oC, iC)
                      : (na.tooltip.hide(oC, lC), na.tooltip.hide(oC, iC));
            }, [t, n]),
            null
        );
    }),
    dC = 'Message_e6fd2857',
    uC = 'Message_background_a273fbc3',
    mC = 'Message_icon_448c0fc0',
    pC = 'Message_text_3c3ea029',
    _C = I(function () {
        return f.jsxs('div', {
            className: dC,
            children: [
                f.jsx('div', { className: uC }),
                f.jsx('div', { className: mC }),
                f.jsx('div', { className: pC, children: R.strings.fun_random.alertMessage.unsuitableVehicles() }),
            ],
        });
    }),
    hC = {
        root: 'ModifierDomainIcon_root_51614357',
        base: 'ModifierDomainIcon_209db6a8',
        image: 'ModifierDomainIcon_image_eee68fdd',
        iconOut: 'ModifierDomainIcon_iconOut_51614357',
        iconHover: 'ModifierDomainIcon_iconHover_51614357',
        image__big: 'ModifierDomainIcon_image__big_42457fa',
        image__large: 'ModifierDomainIcon_image__large_43511027',
    };
var gC = ((e) => ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), e))(gC || {});
const vC = { small: '40x40', big: '64x64', large: '80x80' },
    fC = te.resolve('aliases').read((e) => e.battle_modifiers.shared.Modifiers('resId')),
    bC = (e, t) => {
        const a = vC[t];
        return {
            backgroundImage: `url(${R.images.battle_modifiers.gui.maps.icons.feature.domains.$dyn(`c_${a}`).$dyn(e)})`,
        };
    },
    xC = ({ modifiersDomain: e, subModeId: t, className: a, size: n = 'small' }) => {
        const s = t ? { modifiersDomain: e, subModeId: t } : { modifiersDomain: e };
        return f.jsx('div', {
            className: hC.base,
            children: f.jsx(Wa, {
                targetId: fC,
                contentId: R.views.battle_modifiers.lobby.tooltips.ModifiersDomainTooltipView('resId'),
                args: s,
                children: f.jsx('div', { className: D(hC.image, hC[`image__${n}`], a), style: bC(e, n) }),
            }),
        });
    },
    [yC, CC] = V()(({ observableModel: e }) => ({ modifiersDomains: e.array('modifiersDomains') }), O),
    wC = 'HangarWidget_3ea6c033',
    NC = 'HangarWidget_base__placeholder_406c8c50',
    IC = 'HangarWidget_glow_46562846',
    jC = 'HangarWidget_modifiers_3d3d06d',
    kC = 'HangarWidget_modifier_f9f471fd',
    SC = I(() => {
        const { model: e } = CC(),
            t = e.modifiersDomains.get();
        return f.jsx('div', {
            className: b(wC, 0 === t.length && NC),
            children:
                t.length > 0 &&
                f.jsxs(f.Fragment, {
                    children: [
                        f.jsx('div', { className: IC }),
                        f.jsx('div', {
                            className: jC,
                            children: pe(t, (e, t) =>
                                f.jsx(
                                    'div',
                                    { className: kC, children: f.jsx(xC, { modifiersDomain: e, size: gC.big }) },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
        });
    });
function PC() {
    const { screenWidthRem: e } = vt();
    return e < ft.large.width;
}
const EC = v.createContext(void 0);
function MC() {
    const e = a.useContext(EC);
    return (se(void 0 !== e, 'WidgetAnimationContext is undefined'), e);
}
const DC = 'small',
    LC = 'big',
    TC = { full: 'full', medium: 'medium', small: 'small' },
    AC = 'appear',
    BC = 'fadeIn',
    VC = 'slideUpIn',
    RC = { y: 0, x: 0, opacity: 0, height: 0, width: 0 },
    OC = 1;
function zC(e) {
    const t = new Map();
    for (let a = 0; a <= e.length; a++) {
        const n = e[a];
        t.set(n, { rowIndex: a, columnIndex: 0, size: TC.full });
    }
    return t;
}
function HC(e) {
    return -(Math.cos(Math.PI * e) - 1) / 2;
}
const UC = { duration: 400, easing: HC },
    qC = 5,
    FC = 6,
    ZC = 7,
    WC = 900,
    GC = 1016;
const XC = 100;
function $C(e, t, a, n = !0) {
    const s = a.getCardAnimationProps(e),
        r = a.getCardRow(e),
        o = a.getMaxCardRow(t),
        i = a.getVisibleRowsAmount(),
        l = n ? UC.duration : 0,
        c = t.includes(e);
    return {
        from: c ? { ...s, opacity: 0 } : {},
        to: s,
        delay: c ? l + Math.max((i - o) * XC, 0) : Math.max((i - o - r) * XC, 0),
        config: UC,
    };
}
function KC(e) {
    return { to: { x: Je(Ga(e) + 100), opacity: 0 }, config: { duration: 700, easing: HC } };
}
function YC(e, t, a) {
    const n = e.dataset.id,
        s = t.getCard(n),
        r = t.getCardHeight(n);
    if (!s || !r) return '';
    const o = Ga(s.getPropValue('opacity')),
        i = Ga(s.getPropValue('height'));
    if (i < r || 0 === o) return '';
    const l = Ga(s.getPropValue('width')),
        c = Ga(s.getPropValue('y')),
        d = Ga(s.getPropValue('x')),
        u = t.getCardSize(n) !== TC.full,
        m = Math.round(d),
        p = Math.round(d + l) - OC,
        _ = Math.round(c),
        h = { top: `H${m}x${_}`, bottom: `H${m}x${Math.round(c + i) - OC}`, left: `V${_}x${m}`, right: `V${_}x${p}` },
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
const QC = { [DC]: { gap: 0, cardHeight: 74, cardWidth: 241 }, [LC]: { gap: 0, cardHeight: 74, cardWidth: 319 } },
    JC = { [TC.full]: 1, [TC.medium]: 0.5, [TC.small]: 1 / 3 };
function ew(e, t) {
    return { ...QC[e], ...(null == t ? void 0 : t[e]) };
}
function tw(e) {
    return Array.from(e.entries()).sort((e, t) => e[1].position - t[1].position);
}
class aw {
    constructor(e) {
        (t(this, '_sortedGroups'),
            t(this, '_cards', new Map()),
            t(this, '_cachedLayout'),
            (this._widgetConfig = e),
            (this._sortedGroups = tw(this._widgetConfig.groups)));
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
        ((e.sortedCards = tw(this._cards)),
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
                } = ew(this._widgetConfig.size, s.adaptive);
                a > 0 && o && (a += Je(o));
                const d = Je(i),
                    u = r.filter((e) => {
                        var t;
                        return null == (t = this._cards.get(e)) ? void 0 : t.visible;
                    }),
                    m = (s.layoutCreator || zC)(u);
                let p = 0;
                for (const _ of r) {
                    const t = m.get(_);
                    if (!t) {
                        e.animationProps.set(_, RC);
                        continue;
                    }
                    const { rowIndex: s, columnIndex: r, size: o } = t,
                        i = Math.ceil(l * JC[o]),
                        u = s + 1,
                        h = n + u,
                        g = void 0 === c || u <= c;
                    (e.cardToRow.set(_, h),
                        e.cardSizes.set(_, o),
                        e.animationProps.set(_, {
                            height: d,
                            width: Je(i),
                            opacity: g && this._widgetConfig.visibleRowsAmount >= h ? 1 : 0,
                            x: Je(r * (i - OC)),
                            y: a + s * (d - OC),
                        }),
                        g && (p = Math.max(u, p)));
                }
                ((a += (d - OC) * p), (n += p), e.rowsAmountByGroup.set(t, p));
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
            void 0 !== e.groups && (this._sortedGroups = tw(this._widgetConfig.groups)),
            this.clearCachedLayout());
    }
    getCard(e) {
        return this._cards.get(e);
    }
    getCardAnimationProps(e) {
        return this._layout.animationProps.get(e) || RC;
    }
    getCardRow(e) {
        return this._layout.cardToRow.get(e) || 0;
    }
    getCardSize(e) {
        return this._layout.cardSizes.get(e) || TC.full;
    }
    getCardHeight(e) {
        var t;
        const a = null == (t = this.getCard(e)) ? void 0 : t.groupId;
        if (!a) return;
        const n = this._widgetConfig.groups.get(a);
        return ew(this._widgetConfig.size, null == n ? void 0 : n.adaptive).cardHeight;
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
                const { maxRowsAmount: e } = ew(this._widgetConfig.size, t.adaptive),
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
const nw = 'Card_82475c',
    sw = 'Card_borderHelper_9f37b536',
    rw = 'Card_border_a649c143',
    ow = 'Card_card__enabled_4c476d8b',
    iw = {
        [AC]: function (e, t, a) {
            const n = $C(e, t, a, !1);
            return { ...n, from: t.includes(e) ? { ...n.from, height: 0 } : n.from };
        },
        [BC]: $C,
        [VC]: function (e, t, a) {
            const n = $C(e, t, a, !1);
            if (t.includes(e)) {
                const t = a.getCardAnimationProps(e).y + Je(a.getCardHeight(e));
                return { ...n, from: { ...n.from, y: t } };
            }
            return n;
        },
    };
function lw({ children: e, groups: t, maxVisibleRowsAmount: n }) {
    const s = PC() ? DC : LC,
        { screenHeightRem: r } = vt(),
        o =
            n ??
            (function (e) {
                return e > WC ? (e > GC ? ZC : FC) : qC;
            })(r),
        { enqueue: i, runDequeue: l } = (function () {
            const e = a.useRef([]),
                t = a.useRef(!1),
                n = a.useRef(!1),
                s = Xe(() => {
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
                enqueue: Xe(
                    (t) =>
                        new Promise((a, n) => {
                            (e.current.push({ promise: t, resolve: a, reject: n }), s());
                        }),
                ),
                runDequeue: Xe(() => {
                    ((n.current = !0), s());
                }),
            };
        })(),
        c = a.useRef(null),
        d = a.useRef(!1),
        u = a.useRef(new aw({ size: s, visibleRowsAmount: o, groups: t })),
        m = Xe((e) => {
            var t;
            const a = null == (t = c.current) ? void 0 : t.querySelectorAll(`.${sw}`);
            a &&
                (function (e, t, a) {
                    const n = new Set();
                    a && (a.style.borderImageWidth = YC(a, t, n));
                    for (let s = e.length - 1; s >= 0; s--) {
                        const r = e[s];
                        r !== a && (r.style.borderImageWidth = YC(r, t, n));
                    }
                })(a, u.current, e);
        }),
        p = Xe(async (e) => {
            (m(),
                await u.current.runCardAnimations((t, a) => {
                    const n = e({ id: t, settings: a });
                    if (void 0 !== n) return { ...n, onChange: () => m() };
                }),
                m());
        }),
        _ = Xe(async (e = !0) => {
            let t = 0,
                a = 0;
            await p(({ id: n, settings: s }) => {
                const r = u.current.getCardAnimationProps(n),
                    o = r.y,
                    i = s.getPropGoalValue('y');
                let l = 0;
                return (
                    i !== o && (0 === s.getPropGoalValue('x') && (i > o ? t++ : a++), (l = i > o ? t : a)),
                    { delay: e ? 0 : l * XC, to: r, immediate: e, config: UC }
                );
            });
        }),
        h = Xe(async (e, t = AC) => {
            const a = e.filter((e) => {
                const t = u.current.getCard(e);
                return void 0 !== t && !t.visible;
            });
            if (!a.length) return;
            a.forEach((e) => {
                u.current.updateCard(e, { visible: !0 });
            });
            const n = iw[t];
            await p((e) => n(e.id, a, u.current));
        }),
        g = Xe((e, t = !0) => {
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
                            if (e === t.id) return KC(t.settings.getPropGoalValue('x'));
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
                                return { ...KC(e.settings.getPropGoalValue('x')), delay: XC * (t.length - a) };
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
                Xa(() => {
                    (u.current.clearCachedLayout(), _());
                }),
            [_],
        ),
        f.jsx(EC.Provider, { value: v, children: f.jsx('div', { ref: c, children: e }) })
    );
}
const cw = Object.values({
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
    }).reduce((e, t) => ({ ...e, [t]: Ea(t) }), {}),
    dw = a.createContext(null);
function uw(e, t, a = e) {
    return e + '+' + t + '+' + a;
}
function mw(e, t, ...a) {
    let n = e.current;
    if (0 == a.length) return !1;
    for (let s = 0; s < a.length - 1; s++) {
        const e = a[s];
        ((n[e] = n[e] ?? {}), (n = n[e]));
    }
    return ((n[a[a.length - 1]] = t), !0);
}
function pw(e, ...t) {
    const a = (e, n) => {
        if (n === t.length) return $a(e);
        const s = t[n];
        return s in e && ((n === t.length - 1 || a(e[s], n + 1)) && delete e[s], $a(e));
    };
    return a(e.current, 0);
}
function _w(e, ...t) {
    let a = e.current;
    return t.reduce((e, t) => (null == e ? void 0 : e[t]), a);
}
function hw(e, ...t) {
    let a = e.current;
    return void 0 !== t.reduce((e, t) => (null == e ? void 0 : e[t]), a);
}
function gw(e, t, a, n) {
    Object.entries(t).forEach(([t, s]) => {
        $a(s)
            ? hw(a, e, t, e) && n(t, e)
            : Object.entries(s).forEach(([s, r]) => {
                  const o = s || e;
                  hw(a, e, t, o) && n(t, o, r);
              });
    });
}
function vw({ storage: e, id: t, emitter: a, providerCfg: n }) {
    hw(e, t) || fw({ id: t, emitter: a, providerCfg: n });
}
function fw({ id: e, emitter: t, providerCfg: a }) {
    var n;
    const s = (null == a ? void 0 : a.triggerId) || e;
    (t.trigger(s, { id: e, ...(null == a ? void 0 : a.triggerParams) }),
        null == (n = null == a ? void 0 : a.triggerCallback) ||
            n.call(a, { id: e, ...(null == a ? void 0 : a.triggerParams) }));
}
function bw({ sound: e, soundCfg: t }) {
    e && t && ('string' == typeof t ? e.play(t) : e.play(t.eventName, null == t ? void 0 : t.event));
}
function xw({ children: e }) {
    const t = Ka(),
        n = a.useRef({}),
        s = a.useRef({}),
        r = a.useRef({}),
        o = Ya(),
        i = Xe(({ id: e, animName: t, elementId: a = e }) => hw(n, e, t, a)),
        l = Xe((e, t, a = e) => {
            pw(n, e, t, a);
        }),
        c = Xe(({ id: e, animName: t, config: a, elementId: s = e }) => (mw(n, a, e, t, s), () => l(e, t, s))),
        d = Xe(({ id: e, animName: t, elementId: a = e, animCallParams: s, providerCfg: r, soundCfg: i }) => {
            const l = _w(n, e, t, a);
            (l &&
                ((null == r ? void 0 : r.skip)
                    ? l.skip({ ...s, ...(null == r ? void 0 : r.animCallParams) })
                    : l.start({ ...s, ...(null == r ? void 0 : r.animCallParams) })),
                bw({ sound: o, soundCfg: i }));
        }),
        u = Xe(({ id: e, animName: a, elementId: n = e, providerCfg: r = {} }) => {
            const o = t.on(uw(e, a, n), () => {
                (pw(s, e, a, n), vw({ storage: s, id: e, emitter: t, providerCfg: r }), o());
            });
            mw(s, !0, e, a, n);
        }),
        m = Xe(({ complexId: e, id: a, animName: n, elementId: s = a, providerCfg: o }) => {
            const i = t.on(uw(a, n, s), () => {
                    (!(function ({
                        storage: e,
                        complexId: t,
                        groupId: a,
                        animName: n,
                        elementId: s,
                        emitter: r,
                        providerCfg: o,
                    }) {
                        let i = _w(e, t, a, n);
                        i &&
                            (i.delete(s),
                            i.size || pw(e, t, a, n),
                            vw({ storage: e, id: t, emitter: r, providerCfg: o }));
                    })({ storage: r, complexId: e, groupId: a, animName: n, elementId: s, emitter: t, providerCfg: o }),
                        i());
                }),
                l = _w(r, e, a, n);
            l ? l.add(s) : mw(r, new Set().add(s), e, a, n);
        }),
        p = Xe(({ groupId: e, groupCfg: a, providerCfg: r, soundCfg: i }) => {
            (pw(s, e),
                (null == r ? void 0 : r.skip) ||
                    (null == r ? void 0 : r.skipTrigger) ||
                    gw(e, a, n, (t, a) => {
                        u({ id: e, animName: t, elementId: a, providerCfg: r });
                    }),
                gw(e, a, n, (t, a, n) => {
                    d({ id: e, animName: t, elementId: a, animCallParams: n, providerCfg: r });
                }),
                bw({ sound: o, soundCfg: i }),
                (null == r ? void 0 : r.skip) &&
                    !(null == r ? void 0 : r.skipTrigger) &&
                    fw({ id: e, emitter: t, providerCfg: r }));
        }),
        _ = Xe(({ complexId: e, complexCfg: a, providerCfg: s, soundCfg: i }) => {
            if ((pw(r, e), !(null == s ? void 0 : s.skip) && !(null == s ? void 0 : s.skipTrigger)))
                for (let [t, r] of Object.entries(a))
                    gw(t, r, n, (a, n) => {
                        m({ complexId: e, id: t, animName: a, elementId: n, providerCfg: s });
                    });
            for (let [t, r] of Object.entries(a))
                gw(t, r, n, (e, a, n) => {
                    d({ id: t, animName: e, elementId: a, animCallParams: n, providerCfg: s });
                });
            (bw({ sound: o, soundCfg: i }),
                (null == s ? void 0 : s.skip) &&
                    !(null == s ? void 0 : s.skipTrigger) &&
                    fw({ id: e, emitter: t, providerCfg: s }));
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
    return f.jsx(dw.Provider, { value: h, children: e });
}
const yw = 'entryPoint',
    Cw = new Map([
        ['battlePass', { position: 0 }],
        [yw, { position: 1, adaptive: { [DC]: { gap: 46 }, [LC]: { gap: 46 } } }],
        ['battleQuests', { position: 2, adaptive: { [DC]: { maxRowsAmount: 1 }, [LC]: { maxRowsAmount: 3 } } }],
        [
            'missions',
            {
                position: 200,
                maxRowsAmount: 3,
                adaptive: { [DC]: { gap: 36, maxRowsAmount: 1 }, [LC]: { gap: 36, maxRowsAmount: 3 } },
            },
        ],
    ]);
const [ww, Nw] = V()(
        ({ observableModel: e }) => ({
            ...e.primitives(['isBattlePassActive', 'isAnyEntryPointAvailable', 'areMissionsActive']),
        }),
        ({ externalModel: e }) => ({
            onPresenterDisappear: e.createCallback((e) => ({ resId: e }), 'onPresenterDisappear'),
        }),
    ),
    [Iw, jw] = V()(
        ({ observableModel: e }) => ({
            progressionState: e.object('progressionState'),
            currentProgressionStage: e.object('currentProgressionStage'),
        }),
        ({ externalModel: e }) => ({ openProgression: e.createCallbackNoArgs('onShowInfo') }),
    );
var kw = ((e) => (
    (e.CheckDataUpdate = 'checkDataUpdate'),
    (e.UpdateStageData = 'updateStageData'),
    (e.SwitchState = 'switchState'),
    e
))(kw || {});
const Sw = [An.ACTIVE_RESETTABLE, An.ACTIVE_FINAL],
    Pw = [An.ACTIVE_INFINITE_RESETTABLE, An.ACTIVE_INFINITE_FINAL],
    Ew = (e) => Sw.includes(e) || Pw.includes(e),
    Mw = (e) => Ew(e.status),
    Dw = (e) => !Ew(e.status),
    Lw = (e, t) => 'checkDataUpdate' === t.type && e.status !== t.status && Bw(e, t),
    Tw = (e, t) => 'checkDataUpdate' === t.type && Sw.includes(e.status) && Pw.includes(t.status),
    Aw = (e, t) => 'checkDataUpdate' === t.type && (!e.crossProgressionEnabled || Pw.includes(e.status)),
    Bw = (e, t) =>
        'checkDataUpdate' === t.type &&
        t.stage === e.stage &&
        t.currentPoints === e.currentPoints &&
        t.maximumPoints === e.maximumPoints &&
        0 === e.earnedPoints,
    Vw = (e, t) =>
        'checkDataUpdate' === t.type &&
        Ew(t.status) &&
        ((1 === t.stage && 0 === t.currentPoints) ||
            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints) ||
            (Tw(e, t) && t.stage !== e.stage && e.currentPoints === e.maximumPoints)),
    Rw = (e, t) =>
        'checkDataUpdate' === t.type &&
        t.stage === e.stage &&
        t.currentPoints === e.currentPoints &&
        t.maximumPoints === e.maximumPoints &&
        0 !== e.earnedPoints,
    Ow = (e, t) =>
        'checkDataUpdate' === t.type &&
        (t.stage === e.stage || e.crossProgressionEnabled) &&
        t.currentPoints !== e.currentPoints &&
        t.maximumPoints === e.maximumPoints,
    zw = (e, t) =>
        'checkDataUpdate' === t.type &&
        (Tw(e, t) || (Aw(e, t) && t.stage > e.stage && e.currentPoints < e.maximumPoints)),
    Hw = (e, t) => 'checkDataUpdate' === t.type && Aw(e, t) && t.stage > e.stage && e.currentPoints === e.maximumPoints,
    Uw = (e, t) => 'checkDataUpdate' === t.type && t.stage < e.stage && e.currentPoints > 0,
    qw = (e, t) => 'updateStageData' === t.type && t.stage < e.stage && 0 === e.currentPoints,
    Fw = (e, t) => 'checkDataUpdate' === t.type && e.status !== t.status && Ew(t.status),
    Zw = (e, t) => {
        'updateStageData' === t.type && e.isSoundEnabled && 0 !== e.earnedPoints && Qa.sound('ev_fep_progress_bar');
    },
    Ww = a.forwardRef(function (
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
        const m = MC(),
            [p, _] = N(() => RC),
            h = a.useRef(null),
            g = a.useRef(),
            v = a.useRef(null),
            x = Xe((e) => {
                v.current && h.current && !r && m.updateBorders(e ? v.current : void 0);
            }),
            y = Xe((e) => p[e].get()),
            C = Xe((e) => p[e].goal),
            I = Xe(async (e) => {
                await new Promise((t) => {
                    ((g.current = t),
                        Promise.all(_.start(e)).then(() => {
                            (t(), (g.current = void 0));
                        }));
                });
            });
        return (
            za(() => {
                m.registerCard(t, {
                    position: s,
                    groupId: n,
                    getPropValue: y,
                    getPropGoalValue: C,
                    startLayoutAnimation: I,
                    visible: o,
                });
            }),
            ye(() => {
                var e;
                (null == (e = g.current) || e.call(g), m.unregisterCard(t));
            }),
            f.jsxs(w.div, {
                ...d,
                style: { ...p, pointerEvents: p.opacity.to((e) => (1 === e ? 'auto' : 'none')) },
                className: b(nw, !r && ow, i),
                ref: Ua([u, h]),
                onMouseEnter: (e) => {
                    (x(!0), null == l || l(e));
                },
                onMouseLeave: (e) => {
                    (x(!1), null == c || c(e));
                },
                children: [f.jsx('div', { className: rw }), e, f.jsx('div', { className: sw, 'data-id': t, ref: v })],
            })
        );
    }),
    Gw = {
        root: 'ProgressionBanner_root_c156c1b2',
        background: 'ProgressionBanner_background_2633bd4',
        base: 'ProgressionBanner_7753ce5b',
        icon: 'ProgressionBanner_icon_8d8cc57e',
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
function Xw({ assetsPointer: e }) {
    const { dynamicTexts: t } = Dn(null, { assetsPointer: e });
    return f.jsxs('div', {
        className: Gw.finish,
        children: [
            f.jsx('div', { className: Gw.completedIcon }),
            f.jsx(Ja, {
                className: b(Gw.descriptionText, Gw.descriptionText__finish),
                text: t.banner.progression.finish(),
            }),
        ],
    });
}
function $w({
    currentPoints: e,
    maximumPoints: t,
    earnedPoints: n,
    currentStage: s,
    status: r,
    handleEndAnimation: o,
}) {
    const i = r === An.ACTIVE_INFINITE_RESETTABLE || r === An.ACTIVE_INFINITE_FINAL,
        l = i ? s : e,
        c = i ? '' : t,
        d = i ? 'Infinite' : '',
        u = fe(e),
        m = i && (u || 0) > e,
        p = a.useMemo(
            () => ({ config: { duration: 1600, easing: en.easeInCubic }, delay: 80, onRest: () => o() }),
            [o],
        );
    return f.jsxs('div', {
        className: Gw.progress,
        children: [
            f.jsx(Ja, {
                className: Gw.progressValue,
                text: R.strings.fun_random.banner.progression.steps(),
                upgradeLegacy: !0,
                params: {
                    done: f.jsx('span', { className: Gw.progressStepValue__done, children: l }),
                    total: f.jsx('span', { className: Gw[`progressStepValue__max${d}`], children: c }),
                },
            }),
            f.jsxs(tn, {
                size: 'small',
                className: Gw.progressBar,
                classNames: {
                    background: Gw.progressBarBackground,
                    backgroundPattern: Gw.progressBarBackgroundPattern,
                },
                filledClassNames: { pattern: Gw.progressBarBackgroundPattern },
                value: e,
                maxValue: t,
                children: [
                    f.jsx('div', { className: Gw.progressBarFillStart }),
                    f.jsx(an, {
                        animationEnabled: !m,
                        initValue: e - n,
                        initMaxValue: t,
                        animationProps: p,
                        className: Gw.delta,
                    }),
                ],
            }),
        ],
    });
}
function Kw({ timeLeft: e, assetsPointer: t }) {
    const { dynamicTexts: a } = Dn(null, { assetsPointer: t });
    return f.jsxs('div', {
        className: Gw.resettable,
        children: [
            f.jsx(Ja, {
                className: b(Gw.descriptionText, Gw.descriptionText__resettable),
                text: a.banner.progression.resettable(),
            }),
            f.jsx(nn, { start: e, format: nn.format.default, type: nn.type.accent }),
        ],
    });
}
const Yw = te.resolve('aliases'),
    Qw = te.resolve('views'),
    Jw = Yw.read((e) => e.fun_random.shared.ProgressionEntryPoint('resId')),
    eN = Qw.read((e) => e.fun_random.mono.lobby.tooltips.progression_tooltip('resId')),
    tN = I(() => {
        const { model: e, controls: t } = jw(),
            { status: n, currentStage: s, statusTimer: r } = e.progressionState.get(),
            { currentPoints: o, maximumPoints: i } = e.currentProgressionStage.get(),
            l = tp().model.assetsPointer.get(),
            c = PC(),
            { play: d } = xe(),
            [u, m] = a.useState(n),
            p = (e) => m(e),
            _ = Ln(l).progression.banner;
        a.useEffect(() => {
            n !== u && Ew(n) && m(n);
        }, [n, u]);
        const h = a.useMemo(() => {
                return (
                    (e = 300),
                    (t = p),
                    L(
                        {
                            preserveActionOrder: !0,
                            id: 'fun-card-fsm',
                            initial: 'init',
                            context: {
                                status: n,
                                stage: s,
                                currentPoints: o,
                                maximumPoints: i,
                                earnedPoints: 0,
                                isSoundEnabled: !1,
                                crossProgressionEnabled: !0,
                            },
                            states: {
                                init: { always: { target: 'updateState' } },
                                updateState: {
                                    always: [
                                        { target: 'active', cond: Mw },
                                        { target: 'nonActive', cond: Dw },
                                    ],
                                },
                                active: {
                                    on: {
                                        checkDataUpdate: [
                                            {
                                                target: 'active',
                                                actions: [T((e, t) => ({ type: 'switchState', status: t.status }))],
                                                cond: Lw,
                                            },
                                            { target: 'active', cond: Bw },
                                            {
                                                target: 'updateState',
                                                actions: [
                                                    A({
                                                        status: (e, t) => t.status,
                                                        stage: (e, t) => t.stage,
                                                        currentPoints: (e, t) => t.currentPoints,
                                                        maximumPoints: (e, t) => t.maximumPoints,
                                                        earnedPoints: 0,
                                                    }),
                                                    () => (null == a ? void 0 : a()),
                                                ],
                                                cond: Vw,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    T((e) => ({
                                                        type: 'updateStageData',
                                                        stage: e.stage,
                                                        currentPoints: e.maximumPoints,
                                                        maximumPoints: e.maximumPoints,
                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                    })),
                                                ],
                                                cond: zw,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    T((e, t) => ({
                                                        type: 'updateStageData',
                                                        stage: t.stage,
                                                        currentPoints: 0,
                                                        maximumPoints: t.maximumPoints,
                                                        earnedPoints: 0,
                                                    })),
                                                    () => (null == a ? void 0 : a()),
                                                    T(
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
                                                cond: Hw,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    T((e, t) => ({
                                                        type: 'updateStageData',
                                                        stage: t.stage,
                                                        currentPoints: t.currentPoints,
                                                        maximumPoints: e.maximumPoints,
                                                        earnedPoints: t.currentPoints - e.currentPoints,
                                                    })),
                                                ],
                                                cond: Ow,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    T((e) => ({
                                                        type: 'updateStageData',
                                                        stage: e.stage,
                                                        currentPoints: e.currentPoints,
                                                        maximumPoints: e.maximumPoints,
                                                        earnedPoints: 0,
                                                    })),
                                                    T((e, t) => ({ type: 'switchState', status: t.status })),
                                                ],
                                                cond: Rw,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    T((e) => ({
                                                        type: 'updateStageData',
                                                        stage: e.stage,
                                                        currentPoints: 0,
                                                        maximumPoints: e.maximumPoints,
                                                        earnedPoints: -e.currentPoints,
                                                    })),
                                                ],
                                                cond: Uw,
                                            },
                                            {
                                                target: 'active',
                                                actions: [
                                                    T((e, t) => ({
                                                        type: 'updateStageData',
                                                        stage: t.stage,
                                                        currentPoints: t.currentPoints,
                                                        maximumPoints: t.maximumPoints,
                                                        earnedPoints: t.currentPoints - t.maximumPoints,
                                                    })),
                                                    () => (null == a ? void 0 : a()),
                                                ],
                                                cond: qw,
                                            },
                                        ],
                                        updateStageData: {
                                            target: 'active',
                                            actions: [
                                                A({
                                                    stage: (e, t) => t.stage,
                                                    currentPoints: (e, t) => t.currentPoints,
                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                    earnedPoints: (e, t) => t.earnedPoints,
                                                }),
                                                Zw,
                                            ],
                                        },
                                        switchState: {
                                            target: 'updateState',
                                            actions: [(e, a) => t(a.status), A({ status: (e, t) => t.status })],
                                        },
                                    },
                                },
                                nonActive: {
                                    on: {
                                        checkDataUpdate: {
                                            target: 'updateState',
                                            actions: [
                                                A({
                                                    status: (e, t) => t.status,
                                                    stage: (e, t) => t.stage,
                                                    currentPoints: (e, t) => t.currentPoints,
                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                    earnedPoints: 0,
                                                }),
                                                () => (null == a ? void 0 : a()),
                                            ],
                                            cond: Fw,
                                        },
                                        switchState: {
                                            target: 'updateState',
                                            actions: A({ status: (e, t) => t.status }),
                                        },
                                    },
                                },
                            },
                        },
                        {
                            guards: {
                                hasActiveStatus: Mw,
                                hasNonActiveStatus: Dw,
                                isSwitchToInfinite: Tw,
                                isStatusUpdate: Lw,
                                isTaskSwitchingUpdate: Vw,
                                isNoUpdate: Bw,
                                isUpdateCurrentStageWithZeroEarnPoints: Rw,
                                isUpdateCurrentStageWithCurrentPoints: Ow,
                                isUpdateToNextStageWithoutFillMax: Hw,
                                isUpdateToNextStageWithFillMax: zw,
                                isUpdateToPrevStageWithReset: Uw,
                                isUpdateToPrevStageWithoutReset: qw,
                                isUpdateWithActiveSwitch: Fw,
                            },
                        },
                    )
                );
                var e, t, a;
            }, []),
            [g, v] = B(h),
            { containerRef: x, tooltipProps: y } = ((e) => {
                const t = (null == e ? void 0 : e.showDelay) || 400,
                    n = a.useRef({ ...e.args }),
                    s = a.useRef(null),
                    r = We(),
                    o = Ee({ ...e, showDelay: 0, args: n.current });
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
                                        (n.current.positionY = Math.floor(Ga(a.y)) - 13),
                                        (n.current.positionX = Math.floor(Ga((null == r ? void 0 : r.x) || a.x)) - 10));
                                }
                                o.onMouseEnter(a);
                            }, t);
                        },
                        onMouseLeave: () => {
                            (r.clear(), o.onMouseLeave());
                        },
                    },
                };
            })({ resId: Jw, contentId: eN, disabled: g.context.status === An.DISABLED });
        a.useEffect(() => {
            v({ type: kw.CheckDataUpdate, status: n, stage: s, currentPoints: o, maximumPoints: i });
        }, [n, o, i, s, v]);
        const C = a.useCallback(() => {
                v({ type: kw.CheckDataUpdate, status: n, stage: s, currentPoints: o, maximumPoints: i });
            }, [o, i, s, n, v]),
            w = g.context.status === An.COMPLETED_FINAL;
        return f.jsxs(Ww, {
            ...y,
            position: 0,
            id: 'entryPoint',
            groupId: yw,
            className: b(Gw.base, Gw[`base__${u}`]),
            ref: x,
            onClick: () => {
                (d('click'), t.openProgression());
            },
            onMouseEnter: (e) => {
                (d('mouse-enter'), y.onMouseEnter(e));
            },
            onMouseLeave: y.onMouseLeave,
            visible: !0,
            children: [
                f.jsx('div', {
                    className: Gw.background,
                    style: { backgroundImage: `url('${_.$dyn(c ? 'bg_small' : 'bg_big')}')` },
                }),
                !w && f.jsx('div', { className: Gw.icon, style: { backgroundImage: `url('${_.cards()}')` } }),
                f.jsxs('div', {
                    className: Gw.contentWrapper,
                    children: [
                        Ew(g.context.status) &&
                            f.jsx('div', {
                                className: Gw.activeWrapper,
                                children: f.jsx($w, {
                                    currentPoints: g.context.currentPoints,
                                    maximumPoints: g.context.maximumPoints,
                                    earnedPoints: g.context.earnedPoints,
                                    currentStage: g.context.stage,
                                    status: g.context.status,
                                    handleEndAnimation: C,
                                }),
                            }),
                        f.jsxs('div', {
                            className: Gw.completeWrapper,
                            children: [
                                g.context.status === An.COMPLETED_RESETTABLE &&
                                    f.jsx(Kw, { timeLeft: r, assetsPointer: l }),
                                w && f.jsx(Xw, { assetsPointer: l }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    aN = { rootId: te.resolve('aliases').read((e) => e.fun_random.shared.ProgressionEntryPoint('resId')) };
function nN() {
    return f.jsx(Iw, { options: aN, children: f.jsx(tN, {}) });
}
const sN = 'HangarWidget_3b2c10a',
    rN = te.resolve('aliases'),
    oN = I(({ className: e }) => {
        const { controls: t } = Nw(),
            n = (function (e) {
                const t = MC(),
                    n = a.useRef([]),
                    s = a.useRef(!1),
                    [r, o] = a.useState(e);
                return (
                    a.useEffect(() => {
                        J.shallow(r, e) || n.current.push(e);
                    }),
                    a.useEffect(() => {
                        if (s.current) return;
                        const e = n.current.shift();
                        if (!e) return;
                        s.current = !0;
                        const a = Ia(
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
            })({ [yw]: !0 }),
            s = a.useMemo(
                () => ({ [rN.read((e) => e.fun_random.shared.ProgressionEntryPoint('resId'))]: n.entryPoint }),
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
            f.jsx('div', { className: b(sN, e), children: n.entryPoint && f.jsx(nN, {}) })
        );
    }),
    iN = { rootId: te.resolve('aliases').read((e) => e.fun_random.shared.UserMissions('resId')) },
    lN = ({ className: e }) => {
        const t = PC();
        return f.jsx(sn, {
            soundsOverrides: cw,
            children: f.jsx(rn, {
                children: f.jsx(xw, {
                    children: f.jsx(lw, {
                        groups: Cw,
                        maxVisibleRowsAmount: t ? 4 : 6,
                        children: f.jsx(ww, { options: iN, children: f.jsx(oN, { className: e }) }),
                    }),
                }),
            }),
        });
    },
    cN = 'HangarScreen_261a5d2',
    dN = 'HangarScreen_sceneWrapper_c15ed7d7',
    uN = 'HangarScreen_vignette_50c67f89',
    mN = 'HangarScreen_widgetsSection_1a2843a4',
    pN = 'HangarScreen_hangarPage_51660504',
    _N = 'HangarScreen_mainMenu_4e4165cc',
    hN = 'HangarScreen_userMissions_bb6a847f',
    gN = te.resolve('aliases'),
    vN = { rootId: gN.read((e) => e.hangar.shared.MainMenu('resId')) },
    fN = gN.read((e) => e.hangar.shared.HeroTank('resId')),
    bN = gN.read((e) => e.hangar.shared.PetObjectTooltip('resId')),
    xN = I(function () {
        const e = Xs().model.current.intCD.get(),
            t = tp().model.hasSuitableVehicles.get(),
            a = -1 !== e,
            n = tp().model.assetsPointer.get(),
            s = On().model.modeId.get();
        return f.jsxs('div', {
            className: cN,
            children: [
                f.jsx(sa, { id: fN, children: f.jsx(ky, {}) }),
                f.jsx(sa, { id: bN, children: f.jsx(aC, { options: { rootId: bN }, children: f.jsx(cC, {}) }) }),
                f.jsx('div', { className: uN }),
                f.jsx(Gy, { className: dN }),
                f.jsxs('div', {
                    className: pN,
                    children: [
                        f.jsxs('div', {
                            className: mN,
                            children: [t ? f.jsx(SC, {}) : f.jsx(_C, {}), a && f.jsx(tC, {})],
                        }),
                        f.jsx(Wy, {
                            className: _N,
                            options: vN,
                            battleTypesPath: 'fun_random' === s ? Tn(n, !1) : void 0,
                        }),
                        f.jsx(_t, { children: f.jsx(lN, { className: hN }) }),
                    ],
                }),
            ],
        });
    }),
    yN = 'ConfirmationPanel_afa99a14',
    CN = 'ConfirmationPanel_currencies_7544112d',
    wN = 'ConfirmationPanel_plus_335af158',
    NN = 'ConfirmationPanel_buttons_ad07fa9b',
    IN = (e) => e > 0,
    jN = Me('LeftBlock', 'ConfirmationPanel_leftBlock_798f4c44'),
    kN = Me('Currencies', CN),
    SN = Me('Buttons', NN),
    PN = Me('ConfirmationPanel', yN);
function EN(e) {
    return f.jsx(kN, {
        className: e.className,
        children: a.Children.map(e.children, (e, t) =>
            f.jsxs(f.Fragment, { children: [IN(t) && f.jsx('div', { className: wN }), e] }),
        ),
    });
}
PN.Left = jN;
const MN = 'DealPanel_leftBlock_e9fb0b4a',
    DN = 'DealPanel_leftBlock__active_53e6aee9',
    LN = 'DealPanel_checkbox_869cfc83',
    TN = 'DealPanel_checkbox__active_53e6aee9',
    AN = 'DealPanel_checkboxLabel_7df5996',
    BN = 'DealPanel_icon_f0ce4668',
    VN = 'DealPanel_value_438c7871',
    RN = 'DealPanel_buttonWrapper_e6c7f6fe',
    ON = 'DealPanel_button_d186abe4',
    zN = 'DealPanel_buttonContent_25d6c73c';
function HN(e, t) {
    return t === Za.gold ? dt.formatNumber('gold', e) : dt.formatNumber('integral', e);
}
const UN = a.memo(function ({ type: e, price: t }) {
        const a = Kt({ value: tt.small }, { large: { value: tt.medium } }),
            n = rt({
                body: te.resolve('strings').readOrEmpty(`tank_setup.dealPanel.tooltip.purchasedWith.${t.currency}`),
            });
        return f.jsxs(nt, {
            ...n,
            reverse: !0,
            type: e ?? 'formattedCurrency',
            size: a.value,
            classNames: { icon: BN, base: VN },
            enough: t.enough,
            children: [
                void 0 === e &&
                    f.jsx(Pe, {
                        className: BN,
                        path: `library.currency.${t.currency}_${on[a.value]}x${on[a.value]}`,
                        width: on[a.value],
                        height: on[a.value],
                    }),
                HN(t.value, e),
            ],
        });
    }),
    qN = te.resolve('strings'),
    FN = 'general',
    ZN = 'repair';
const WN = { [o_]: 'boosters', [i_]: 'shells', [l_]: 'consumables' },
    GN = C(function ({ type: e, className: t }) {
        const n = Kt({ value: ze.small }, { large: { value: ze.medium } }),
            { model: s, controls: r } = nh(),
            { model: o, controls: i } = mh(),
            { model: l, controls: c } = ch(),
            { model: d, controls: u } = fh(),
            { controls: m, model: p } = (() => {
                switch (e) {
                    case r_:
                        return { controls: c, model: l };
                    case o_:
                        return { controls: i, model: o };
                    case l_:
                        return { controls: r, model: s };
                    case i_:
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
            _ = rt({ body: qN.readOrEmpty('tank_setup.dealPanel.tooltip.notEnough') }),
            h = WN[e],
            g = rt(
                a.useMemo(
                    () =>
                        h === ZN
                            ? {
                                  header: qN.readOrEmpty(`tank_setup.tooltip.autoRenewal.header.${h}`),
                                  body: qN.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${h}`),
                              }
                            : h && h !== FN
                              ? {
                                    header: qN.readOrEmpty('tank_setup.tooltip.autoRenewal.header.general'),
                                    body: qN.readOrEmpty(`tank_setup.tooltip.autoRenewal.body.${h}`),
                                }
                              : {
                                    header: qN.readOrEmpty('tank_setup.tooltip.autoRenewal.header.general'),
                                    body: void 0,
                                },
                    [h],
                ),
            ),
            v = p ? p.computes.dealData() : null,
            x = !!p && (v.canConfirm || v.prices.length > 0),
            y = fe(x),
            C = void 0 !== h,
            w = xe();
        return (
            a.useEffect(() => {
                (x && !1 === y && w.play('expand', { target: 'loadout:deal-panel' }),
                    x || !0 !== y || w.play('collapse', { target: 'loadout:deal-panel' }));
            }, [w, x, y]),
            p && v
                ? f.jsxs(PN, {
                      className: t,
                      children: [
                          f.jsx(Oe, {
                              ...(C && g),
                              className: b(LN, h && TN),
                              classNames: { label: AN },
                              checked: C && v.autoRenewalEnabled,
                              size: n.value,
                              onCheckedChange: m.toggleAutoRenewal,
                              children: qN.readOrEmpty('tank_setup.dealPanel.autoRenew'),
                          }),
                          f.jsxs(PN.Left, {
                              className: b(MN, x && DN),
                              children: [
                                  f.jsx(EN, {
                                      children: v.prices.map((e, t) => {
                                          const a = (function (e) {
                                              if (e && cn.includes(e)) return e;
                                          })(e.currency);
                                          return f.jsx(UN, { type: a, price: e }, t);
                                      }),
                                  }),
                                  f.jsxs(SN, {
                                      children: [
                                          f.jsx('div', {
                                              ...(v.disabled && _),
                                              className: RN,
                                              children: f.jsx(Ve, {
                                                  className: ON,
                                                  classNames: { content: zN },
                                                  disabled: (!v.canConfirm || v.disabled) && x,
                                                  onClick: m.confirm,
                                                  theme: ln.primary,
                                                  size: n.value,
                                                  'data-test-id': 'dealPanelApply',
                                                  children: qN.readOrEmpty('tank_setup.dealPanel.button.apply'),
                                              }),
                                          }),
                                          f.jsx('div', {
                                              className: RN,
                                              children: f.jsx(Ve, {
                                                  className: ON,
                                                  classNames: { content: zN },
                                                  disabled: !v.canCancel,
                                                  onClick: m.cancel,
                                                  theme: ln.secondary,
                                                  size: n.value,
                                                  'data-test-id': 'dealPanelCancel',
                                                  soundTarget: 'loadout:deal-panel:cancel_button',
                                                  children: qN.readOrEmpty('tank_setup.dealPanel.button.cancel'),
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
    XN = 'Counter_20fd03c5',
    $N = 'Counter_current_2e9b96d1',
    KN = 'Counter_total_7d9a1992';
function YN({ current: e, total: t, className: a }) {
    const n = te.resolve('intl');
    return f.jsx(Se, {
        className: b(XN, a),
        path: 'common.progress',
        upgradeLegacy: !0,
        split: !0,
        params: {
            current: f.jsx('span', { className: $N, children: n.formatNumber('integral', e) }),
            total: f.jsx('span', { className: KN, children: n.formatNumber('integral', t) }),
        },
    });
}
const QN = 'Depot_dots_e22e1616',
    JN = 'Depot_17898b99',
    eI = 'Depot_value_929a2cc5',
    tI = 'Depot_value__name_243cc0f1',
    aI = 'Depot_value__count_c6469680',
    nI = 'Depot_valueContainer_7c59dac8',
    sI = 'Depot_slash_13b22cce',
    rI = te.resolve('strings'),
    oI = ({ inDepotCount: e, itemsInVehicle: t }) => {
        const a = t >= 0;
        return f.jsxs('div', {
            className: JN,
            children: [
                f.jsxs('div', {
                    className: b(eI, tI),
                    children: [
                        f.jsx(Re, { text: rI.readOrEmpty('tank_setup.shells.specification.inStorage') }),
                        a &&
                            f.jsxs(f.Fragment, {
                                children: [
                                    ' ',
                                    f.jsx(Se, { path: 'common.common.slash' }),
                                    ' ',
                                    f.jsx(Re, { text: rI.readOrEmpty('tank_setup.shells.specification.inVehicle') }),
                                    f.jsx('div', { className: nI }),
                                ],
                            }),
                    ],
                }),
                f.jsx('div', { className: QN }),
                f.jsxs('div', {
                    className: b(eI, aI),
                    children: [
                        e,
                        a &&
                            f.jsxs(f.Fragment, {
                                children: [' ', f.jsx(Se, { path: 'common.common.slash', className: sI }), ' ', t],
                            }),
                    ],
                }),
            ],
        });
    },
    iI = 'Properties_dots_1fc83e37',
    lI = 'Properties_info_b62adb3a',
    cI = 'Properties_metric_269f11b0',
    dI = 'Properties_value_a40606f7',
    uI = 'Properties_name_fc42a225',
    mI = 'Properties_truncatedName_d7486b0e',
    pI = te.resolve('strings'),
    _I = te.resolve('intl'),
    hI = (e) => {
        const t = parseFloat(e.replace(/,/g, ''));
        return isNaN(t) ? e : _I.formatReal('woZeroDigits', t);
    },
    gI = C(function ({ properties: e }) {
        return f.jsx(v.Fragment, {
            children: pe(e, (e, t) =>
                f.jsx(
                    v.Fragment,
                    {
                        children:
                            e.value &&
                            f.jsxs('div', {
                                className: lI,
                                children: [
                                    f.jsxs('div', {
                                        className: uI,
                                        children: [
                                            f.jsx(Re, {
                                                className: mI,
                                                text: pI.readOrEmpty(`menu.tank_params.${e.paramName}`),
                                            }),
                                            f.jsx('div', { className: cI, children: e.metricValue }),
                                        ],
                                    }),
                                    f.jsx('div', { className: iI }),
                                    f.jsx('div', { className: dI, children: hI(e.value) }),
                                ],
                            }),
                    },
                    t,
                ),
            ),
        });
    }),
    vI = 'Purchase_dots_92cddd3b',
    fI = 'Purchase_d6025d4f',
    bI = 'Purchase_name_ebddecd',
    xI = 'Purchase_truncatedName_374c53e5',
    yI = 'Purchase_price_fd7d4ed5',
    CI = 'Purchase_result_d6c831a6',
    wI = 'Purchase_value_98e07fc3',
    NI = 'Purchase_value__noPurchase_50a115b4',
    II = 'Purchase_sign_28802c61',
    jI = 'Purchase_sign__multiplier_c1c45705',
    kI = 'Purchase_sign__equals_ad1fc9f4',
    SI = 'Purchase_discountWrapper_d6cbd188',
    PI = 'Purchase_discountWrapper__withoutDiscount_cd9710d2',
    EI = 'Purchase_icon_ae94fc41',
    MI = 'Purchase_icon__currency_9e808070',
    DI = 'Purchase_icon__withDiscount_b0aaff0',
    LI = te.resolve('strings'),
    TI = C(({ shell: e }) => {
        const { boughtCount: t, totalPrice: n, price: s, itemPrice: r } = e,
            o = e.price.previousPrice[0],
            i = void 0 !== o,
            l = Kt({ value: tt.extraSmall }, { extraLarge: { value: tt.small } }),
            c = a.useMemo(() => (r && o ? [r.value, o.value, r.currency] : void 0), [r, o]),
            d = a.useMemo(() => ({ disabled: !i }), [i]),
            u = ot('priceDiscount', c, d);
        return f.jsxs('div', {
            className: fI,
            children: [
                f.jsx('div', {
                    className: bI,
                    children: f.jsx(Re, {
                        className: xI,
                        text: LI.readOrEmpty('tank_setup.shells.specification.price'),
                    }),
                }),
                f.jsx('div', { className: vI }),
                f.jsxs('div', {
                    className: CI,
                    children: [
                        f.jsx('div', { className: b(wI, NI), children: t }),
                        f.jsx('div', { className: b(II, jI), children: f.jsx(Se, { path: 'common.multiplierSmall' }) }),
                        f.jsxs('div', {
                            ...u,
                            className: yI,
                            children: [
                                s.price.map((e, t) =>
                                    f.jsx(
                                        et,
                                        {
                                            type: at.currency,
                                            enabled: i,
                                            size: l.value,
                                            classNames: { base: b(SI, !i && PI), discount: b(EI, i && DI) },
                                            children: f.jsx(nt, {
                                                reverse: !0,
                                                size: tt.small,
                                                classNames: { base: wI, icon: b(EI, MI) },
                                                type: e.currency,
                                                enough: e.enough,
                                                children: e.value,
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                                f.jsx('div', {
                                    className: b(II, kI),
                                    children: f.jsx(Se, { path: 'readable_key_names.KEY_EQUALS' }),
                                }),
                            ],
                        }),
                        t > 0
                            ? n.price.map((e, t) =>
                                  f.jsx(
                                      nt,
                                      {
                                          reverse: !0,
                                          size: tt.small,
                                          classNames: { base: wI, icon: b(EI, MI) },
                                          type: e.currency,
                                          enough: e.enough,
                                          children: e.value,
                                      },
                                      t,
                                  ),
                              )
                            : f.jsx(nt, {
                                  reverse: !0,
                                  size: tt.small,
                                  classNames: { base: b(wI, NI), icon: b(EI, MI) },
                                  type: Za.credits,
                                  children: 0,
                              }),
                    ],
                }),
            ],
        });
    }),
    AI = 'Shell_fullArea_7aaeeab0',
    BI = 'Shell_controls_fbdd51bb',
    VI = 'Shell_dc4438ed',
    RI = 'Shell_mainInfo_cf4a5ca0',
    OI = 'Shell_icon_5ea0be74',
    zI = 'Shell_counter_ce287a95',
    HI = 'Shell_counter__dimmed_42079d5d',
    UI = 'Shell_name_2544fef6',
    qI = 'Shell_grow_fa2782e5',
    FI = 'Shell_detailedInfo_5686c3ac',
    ZI = 'Shell_slider_4d24fb7c',
    WI = te.resolve('aliases'),
    GI = te.resolve('images'),
    XI = te.resolve('strings'),
    $I = te.resolve('intl'),
    KI = 'big',
    YI = 'large',
    QI = Me('Shell', VI),
    JI = C(({ value: e, index: t }) => {
        const { model: n, controls: s } = fh(),
            r = n.ammoMaxSize.get() - n.installedCount.get() + e.count,
            o = $I.toUpperCase(XI.readOrEmpty(`item_types.shell.kinds.${e.kind}`)),
            i = ot(
                'hangarShell',
                a.useMemo(() => [e.intCD], [e.intCD]),
            ),
            l = pt(
                'tankSetupShellItem',
                a.useMemo(
                    () => ({
                        intCD: e.intCD,
                        slotType: e_,
                        fieldType: 0,
                        installedSlotId: t,
                        itemInstalledSetupIdx: e.itemInstalledSetupIndex,
                        itemInstalledSetupSlotIdx: t,
                        isMounted: e.mountedState !== ph.notMounted,
                        isMountedMoreThanOne: e.mountedState === ph.mountedMoreThanOne,
                        emitterUID: window.subViews.get(WI.read((e) => e.hangar.shared.Shells('resId'))).uid,
                    }),
                    [t, e.intCD, e.itemInstalledSetupIndex, e.mountedState],
                ),
            ),
            c = Kt({ value: KI }, { large: { value: YI } }),
            d = Kt({ value: dn.small }, { medium: { value: dn.medium } }),
            u = a.useCallback((e, t) => s.updateShellCount(e, t), [s]);
        return f.jsxs(QI, {
            children: [
                f.jsxs('div', {
                    ...i,
                    ...l,
                    className: RI,
                    children: [
                        f.jsx('div', {
                            className: OI,
                            style: { backgroundImage: `url(${GI.readOrEmpty(`shell.${c.value}.${e.type}`)})` },
                        }),
                        f.jsx('div', { className: b(zI, 0 === e.count && HI), children: e.count }),
                        f.jsx('div', { className: UI, children: o }),
                    ],
                }),
                f.jsxs(un, {
                    step: n.clip.get(),
                    className: ZI,
                    value: e.count,
                    maxValue: n.ammoMaxSize.get(),
                    limit: r,
                    size: d.value,
                    onValueChange: (t) => u(e.intCD, t),
                    children: [
                        d.value === dn.medium && f.jsx(un.Controls, { className: BI }),
                        f.jsx(un.LimitationArea, { className: AI }),
                        f.jsx(un.Thumb, {}),
                        f.jsx(un.InteractiveArea, { className: AI }),
                    ],
                }),
                f.jsxs('div', {
                    className: FI,
                    children: [
                        f.jsx(gI, { properties: e.propertiesList }),
                        f.jsx('div', { className: qI }),
                        f.jsx(oI, { inDepotCount: e.inDepotCount, itemsInVehicle: e.itemsInVehicle }),
                        f.jsx(TI, { shell: e }),
                    ],
                }),
            ],
        });
    }),
    ej = 'ShellTransition_e18df2a',
    tj = C(function ({ index: e, intCD: t, swapping: n, onAnimationEnd: s, onSwappingEnd: r, leftID: o }) {
        const [i, l] = a.useState(!1),
            { model: c } = fh(),
            d = c.computes.shellByIntCD(t),
            u = fe(null == d ? void 0 : d.intCD),
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
        if (d) return f.jsx(y.div, { className: ej, style: p, children: f.jsx(JI, { value: d, index: e }) });
    }),
    aj = 'SwapButton_20088d5c',
    nj = 'SwapButton_icon_cd2823d0';
function sj({ index: e, onSwap: t }) {
    return f.jsx(Ve, {
        theme: Ve.themes.secondary,
        id: `swap-${e}`,
        onClick: function () {
            t(e);
        },
        className: aj,
        autoAlignContent: !1,
        children: f.jsx('div', { className: nj }),
    });
}
const rj = 'ShellsSetup_fc3cf257',
    oj = 'ShellsSetup_counter_107998e7',
    ij = 'ShellsSetup_container_eef616b1';
function lj(e, t) {
    if (!t) return -1;
    const a = e.find((e, a) => t[a] !== e);
    return void 0 !== a ? e.indexOf(a) : -1;
}
const cj = C(function () {
        const { model: e, controls: t } = fh(),
            n = e.computes.shellIDs(),
            s = fe(n),
            [r, o] = a.useState(!1),
            [i, l] = a.useState(lj(n, s));
        function c(e) {
            r || t.swapSlots({ leftID: e, rightID: e + 1 });
        }
        a.useEffect(() => {
            s && n !== s && s[0] && n.includes(s[0]) && (l(lj(n, s)), o(!0));
        }, [n, s]);
        const d = ka(() => mn(), [], 150);
        function u() {
            o(!1);
        }
        return f.jsxs('div', {
            className: rj,
            children: [
                f.jsx(YN, { className: oj, current: e.installedCount.get(), total: e.ammoMaxSize.get() }),
                f.jsx('div', {
                    className: ij,
                    children: pe(n, (t, s) =>
                        f.jsxs(
                            a.Fragment,
                            {
                                children: [
                                    e.computes.shellExist(t) &&
                                        f.jsx(tj, {
                                            index: s,
                                            intCD: t,
                                            onAnimationEnd: d,
                                            onSwappingEnd: u,
                                            leftID: i,
                                            swapping: r,
                                        }),
                                    s < n.length - 1 && f.jsx(sj, { index: s, onSwap: c }),
                                ],
                            },
                            s,
                        ),
                    ),
                }),
            ],
        });
    }),
    dj = { Standard: 'Standard', Bounty: 'Bounty', Improved: 'Improved', Experimental: 'Experimental' },
    uj = 'Equipment',
    mj = 'Crew',
    pj = {
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
const _j = 'Action_ab2a2b2e',
    hj = 'Action_base__disabled_b9b41a41',
    gj = 'Action_button_4133ceee',
    vj = 'Action_icon_f3030341',
    fj = te.resolve('images'),
    bj = te.resolve('strings'),
    xj = ['cancel', 'undo'],
    yj = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`),
    Cj = a.forwardRef(function (
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
        const m = n ? yj(e, s) : e,
            p = i && 'cancel' !== e,
            _ = a.useMemo(
                () => ({
                    backgroundImage: `url(${t || fj.readOr(`loadout.actions.${m}`, () => fj.readOrEmpty(`tanksetup.actions.${m}`))})`,
                }),
                [m, t],
            );
        const h = rt(
            a.useMemo(() => {
                if (p) return { body: o };
                const t = ((e, t, a, n) => (a ? 'demount_plus' : n ? yj(e, t) : e))(e, s, r, n);
                return {
                    header: bj.readOrEmpty(`tank_setup.tooltips.action.title.${t}`),
                    body: xj.includes(t) ? void 0 : bj.readOrEmpty(`tank_setup.tooltips.action.description.${l || t}`),
                };
            }, [e, p, o, r, n, s, l]),
        );
        return f.jsx('div', {
            ...h,
            className: b(_j, p && hj, c),
            children: f.jsx(Ve, {
                ref: u,
                autoAlignContent: !1,
                theme: ln.secondary,
                className: gj,
                disabled: p,
                'data-test-id': e,
                onClick: function (t) {
                    (t.stopPropagation(), p || d(e));
                },
                children: f.jsx('div', { className: vj, style: _ }),
            }),
        });
    }),
    wj = {
        root: 'Actions_root_9b5544a9',
        base: 'Actions_a97dca87',
        base__hidden: 'Actions_base__hidden_6a4e6a7d',
        'options-hide': 'Actions_options-hide_9b5544a9',
        base__shown: 'Actions_base__shown_b7ebaba7',
        'options-show': 'Actions_options-show_9b5544a9',
        actionItem: 'Actions_actionItem_7ebdfdac',
    },
    Nj = te.resolve('strings');
function Ij({ availableActions: e, buyMoreDisabled: t, onActionClick: a, className: n }) {
    return f.jsxs('div', {
        className: b(wj.base, wj['base__' + (e.length ? 'shown' : 'hidden')], n),
        children: [
            e.includes(W_) &&
                f.jsx(Cj, {
                    actionType: W_,
                    disabled: t,
                    onClick: a,
                    className: wj.actionItem,
                    disabledTooltipText: Nj.readOrEmpty('tank_setup.dealPanel.tooltip.notEnough'),
                }),
            e.includes(O_) && f.jsx(Cj, { actionType: O_, onClick: a, className: wj.actionItem }),
            e.includes(R_) && f.jsx(Cj, { actionType: R_, onClick: a, className: wj.actionItem }),
        ],
    });
}
function jj(e) {
    switch (e) {
        case jh:
            return ua.directiveBooster;
        case Ih:
            return ua.directiveSubstitute;
        case Sh:
            return ua.builtInEquipment;
        case kh:
            return ua.improved;
        case Ph:
            return ua.experimental;
        case Ch:
        case wh:
        case Nh:
            return ua.trophy;
        default:
            return ua.none;
    }
}
function kj(e, t, a) {
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
            (i[u] = f.jsx(Ja, {
                style: { color: t[c], alignItems: 'flex-start' },
                upgradeLegacy: !0,
                text: d,
                params: a,
            })),
            (s = n.exec(e)));
    }
    return [r, i];
}
const Sj = {
    base: 'Price_c00fc2b8',
    icon: 'Price_icon_10cf08bf',
    icon__reverse: 'Price_icon__reverse_74b70497',
    value: 'Price_value_7bb80c7b',
};
function Pj({ price: e, previousPrice: t, withZeroValue: n, ignoreDiscount: s, valueFirst: r, priceSeparator: o }) {
    const i = Kt({ value: tt.extraSmall }, { small: { value: tt.small } });
    return f.jsx('div', {
        className: Sj.base,
        children: e.map(
            ({ value: e, currency: l, enough: c }, d) =>
                (n || e > 0) &&
                f.jsxs(
                    a.Fragment,
                    {
                        children: [
                            d > 0 && o,
                            f.jsx(et, {
                                size: i.value,
                                enabled: !s && t.length > 0,
                                type: at.currency,
                                children: f.jsx(nt, {
                                    type: l,
                                    reverse: r,
                                    enough: c,
                                    classNames: { icon: b(Sj.icon, r && Sj.icon__reverse), base: Sj.value },
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
const Ej = {
    icon: 'Storage_icon_f8835a96',
    icon__reverse: 'Storage_icon__reverse_aada9c9e',
    value: 'Storage_value_edb11ec6',
};
function Mj({ itemsInStorage: e, valueFirst: t }) {
    return f.jsx(nt, {
        type: Za.depot,
        reverse: t,
        size: tt.small,
        enough: Boolean(e),
        classNames: { base: Ej.value, icon: b(Ej.icon, t && Ej.icon__reverse) },
        children: e,
    });
}
const Dj = {
    root: 'Options_root_6818b5da',
    base: 'Options_945d8a9e',
    base__hidden: 'Options_base__hidden_1ab7a478',
    'options-hide': 'Options_options-hide_6818b5da',
    base__shown: 'Options_base__shown_620b2679',
    'options-show': 'Options_options-show_6818b5da',
};
function Lj({ price: e, mounted: t, possibleZeroCount: a, show: n, itemsInStorage: s, className: r }) {
    const o = s || a,
        i = st('loadout.installed_on_vehicle', 'loadout.installed_on_vehicle_upscale');
    return f.jsx('div', {
        className: b(Dj.base, Dj['base__' + (n ? 'shown' : 'hidden')], r),
        children: t
            ? f.jsx(Pe, { path: i, width: 24, height: 24 })
            : o
              ? f.jsx(Mj, { itemsInStorage: s })
              : e && f.jsx(Pj, { ...e, valueFirst: !0 }),
    });
}
const Tj = 'LoadoutItem_49fa5e5c',
    Aj = 'LoadoutItem_base__hoverless_a07e4977',
    Bj = 'LoadoutItem_content_b29d68c8',
    Vj = 'LoadoutItem_base__disabled_404624aa',
    Rj = 'LoadoutItem_image_2b6b3694',
    Oj = 'LoadoutItem_nameWrapper_ac53f36d',
    zj = 'LoadoutItem_name_f6b620d8',
    Hj = 'LoadoutItem_specializations_8e86b08',
    Uj = 'LoadoutItem_options_fe0297a6',
    qj = 'LoadoutItem_actions_bfa3b2fd',
    Fj = 'LoadoutItem_text_833b4471',
    Zj = 'LoadoutItem_text__short_192105ec',
    Wj = [z_, R_, O_, V_],
    Gj = Me('ConsumablesItem', Tj),
    Xj = { colorTag: '#64ba21', whiteSpanish: 'rgba(var(--color-general-primary-rgb), 0.9)' },
    $j = function ({ intCD: e, selected: t, item: n, controls: s }) {
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
                return m || !v ? e : (t || e.add(z_), c || (e.add(W_), (_ > 0 || p) && !h ? e.add(O_) : e.add(R_)), e);
            }, [m, v, t, c, _, p, h]),
            y = a.useCallback(
                (t) => {
                    s.actionSlot({ actionType: t, intCD: e, currentSlotId: u });
                },
                [s, e, u],
            );
        const [C, w] = kj(l, Xj);
        return f.jsx(Gj, {
            className: b(m && Vj, ((i === Sh && t) || m) && Aj),
            onClick: function () {
                if ((i === Sh && t) || m) return;
                const e = Wj.find((e) => x.has(e));
                y(e || V_);
            },
            children: f.jsxs('div', {
                className: Bj,
                children: [
                    f.jsx('div', {
                        className: Rj,
                        children: f.jsx(ya, { name: o, overlayType: jj(i), size: ya.sizes.s180x135 }),
                    }),
                    f.jsx('div', { className: Oj, children: f.jsx('div', { className: zj, children: r }) }),
                    f.jsx(mt, { className: b(Fj, x.size > 0 && Zj), text: C, upgradeLegacy: !0, params: w }),
                    f.jsx(Lj, { show: 0 === x.size, itemsInStorage: _, mounted: p || h, price: g, className: Uj }),
                    f.jsx(Ij, { className: qj, onActionClick: y, buyMoreDisabled: d, availableActions: Array.from(x) }),
                ],
            }),
        });
    },
    Kj = C((e) => {
        const { model: t, controls: a } = nh(),
            n = t.computes.consumableById(e.intCD);
        if (n) return f.jsx($j, { ...e, item: n, controls: a });
    }),
    Yj = te.resolve('images');
function Qj({
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
    const c = (s || r) && i.includes(Z_),
        d = i.length && (i[0] !== Z_ || c);
    return f.jsxs('div', {
        className: b(wj.base, wj['base__' + (d ? 'shown' : 'hidden')], l),
        children: [
            i.includes(O_) && f.jsx(Cj, { actionType: O_, onClick: a, className: wj.actionItem }),
            i.includes(R_) && f.jsx(Cj, { actionType: R_, onClick: a, className: wj.actionItem }),
            c && f.jsx(Cj, { actionType: Z_, level: t, onClick: a, className: wj.actionItem, modernized: e }),
            i.includes(H_) && f.jsx(Cj, { actionType: H_, onClick: a, className: wj.actionItem, freeToDemount: n }),
            i.includes(U_) &&
                f.jsx(Cj, {
                    actionType: U_,
                    onClick: a,
                    className: wj.actionItem,
                    freeToDemount: n,
                    imageSource: Yj.readOrEmpty('loadout.actions.demount'),
                }),
            i.includes(q_) && f.jsx(Cj, { actionType: q_, onClick: a, className: wj.actionItem }),
            (e || !n) &&
                i.includes(F_) &&
                f.jsx(Cj, { actionType: F_, onClick: a, className: wj.actionItem, modernized: e, tooltipBodyPath: o }),
        ],
    });
}
const Jj = 'mul',
    ek = te.resolve('strings'),
    tk = { calcValue: 0, isPositive: !0, valueKey: 'default' };
function ak({ values: e, localeName: t }) {
    const a = ca(e, ({ valueKey: e }) => e === t).pop();
    if (!a) return tk;
    const { value: n, valueType: s, valueKey: r } = a,
        o = s === Jj ? 100 * (n - 1) : n;
    return { calcValue: o, isPositive: o > 0, valueKey: r };
}
function nk(e) {
    const { calcValue: t, isPositive: a, valueKey: n } = ak(e),
        s = a ? '+' : '',
        r = pn(t, 1),
        o = ek.readOrEmpty('tank_setup.kpi.bonus.valueTypes.default'),
        i = ek.readOr(`tank_setup.kpi.bonus.valueTypes.${n}`, () => o);
    return `${s}${i !== o ? `${r} ${i}` : `${r}${i}`}`;
}
function sk(e, t = !1) {
    return t || ak(e).isPositive
        ? ek.readOrEmpty(`tank_setup.kpi.bonus.positive.${e.localeName}`)
        : ek.readOrEmpty(`tank_setup.kpi.bonus.negative.${e.localeName}`);
}
const rk = 'Bonuses_2e425c2b',
    ok = 'Bonuses_bonus_1137ce2e',
    ik = 'Bonuses_effect_9904936e',
    lk = 'Bonuses_text_3e69479c',
    ck = 'Bonuses_unit_dd3c8074',
    dk = 'Bonuses_base__special_ca1cd57b',
    uk = 'Bonuses_icon_bf2ddda6',
    mk = te.resolve('strings');
function pk({ effect: e, special: t, bonuses: a }) {
    const n = Kt({ value: e ? 2 : 3 }, { large: { value: e ? 3 : 4 } });
    return f.jsxs('div', {
        className: b(rk, t && dk),
        children: [
            e &&
                f.jsxs('div', {
                    className: ok,
                    children: [
                        f.jsxs('span', {
                            className: ik,
                            children: [f.jsx('span', { className: uk }), mk.readOrEmpty('tank_setup.effects.name')],
                        }),
                        f.jsx(Re, { text: e, className: lk }),
                    ],
                }),
            pe(
                a.items,
                (e, t) =>
                    t < n.value &&
                    f.jsxs(
                        'div',
                        {
                            className: ok,
                            children: [
                                f.jsx('span', { className: ck, children: nk(e) }),
                                f.jsx(Re, { text: sk(e), className: lk }),
                            ],
                        },
                        t,
                    ),
            ),
        ],
    });
}
const _k = 'Specializations_c4673376',
    hk = 'Specializations_item_64ba5e4a',
    gk = 'Specializations_specializationType_b4c7a75d',
    vk = 'Specializations_inactiveIcon_45a44cf7',
    fk = Me('Specializations');
function bk({ specializations: e, className: t }) {
    return f.jsx(fk, {
        className: b(_k, t),
        children: pe(e, ({ name: e, correct: t }, a) =>
            f.jsx(
                'div',
                {
                    className: hk,
                    children: f.jsx(fg, {
                        specialization: e,
                        active: t,
                        classNames: { base: gk, inactiveIcon: t ? void 0 : vk },
                    }),
                },
                `${e}${a}`,
            ),
        ),
    });
}
function xk(e) {
    switch (e) {
        case 'equipmentTrophyBasic':
            return 1;
        case 'equipmentTrophyUpgraded':
            return 2;
        default:
            return 0;
    }
}
const yk = Me('EquipmentsItem', Tj),
    Ck = function ({ intCD: e, selected: t, item: n, controls: s }) {
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
            P = _n(),
            E = g && 'similar_device_already_installed' === I,
            { availableActions: M } = a.useMemo(() => {
                const e = new Set();
                var a;
                return (
                    S &&
                        !g &&
                        (t || e.add(z_),
                        v
                            ? (((a = x), a ? [U_, q_] : [H_]).forEach((t) => {
                                  e.add(t);
                              }),
                              e.add(F_))
                            : e.add(((e, t, a) => ((e > 0 || t) && !a ? O_ : R_))(y, v, C))),
                    w && !g && e.add(Z_),
                    { availableActions: e }
                );
            }, [S, g, w, t, v, x, y, C]),
            D = a.useCallback(
                (t) => {
                    s.actionSlot({ actionType: t, intCD: e, currentSlotId: h });
                },
                [s, e, h],
            ),
            L = a.useCallback(() => {
                if (g) return;
                const e = M.values().next().value;
                D(void 0 !== e && e !== Z_ ? e : V_);
            }, [M, D, g]),
            T = M.values().next().value;
        return f.jsx(yk, {
            className: b(g && Vj, g && Aj),
            onClick: L,
            children: f.jsxs('div', {
                className: Bj,
                children: [
                    f.jsx('div', {
                        className: Rj,
                        children: f.jsx(ya, {
                            name: i,
                            overlayType: jj(p),
                            size: ya.sizes.s180x135,
                            level: m ? xk(p) : c,
                        }),
                    }),
                    f.jsx('div', { className: Oj, children: f.jsx('div', { className: zj, children: o }) }),
                    u && f.jsx(pk, { effect: d ?? void 0, bonuses: u, special: r > 0 }),
                    f.jsx(Lj, {
                        mounted: v || C,
                        itemsInStorage: y,
                        price: k,
                        possibleZeroCount: m || _ || 0 === k.price.length,
                        className: Uj,
                        show: 0 === M.size || (T === Z_ && !P.hover && !P.selected && !S),
                    }),
                    f.jsx(Qj, {
                        className: qj,
                        modernized: _,
                        level: c,
                        onActionClick: D,
                        availableActions: Array.from(M),
                        freeToDemount: N,
                        installed: S,
                        mouseOverCard: P.hover || P.selected,
                        destroyTooltipBodyPath: j,
                    }),
                    !E && f.jsx(bk, { specializations: l.specializations, className: Hj }),
                ],
            }),
        });
    },
    wk = C((e) => {
        const { model: t, controls: a } = ch(),
            n = t.computes.equipmentsItemByIntCD(e.intCD, e.type);
        if (n) return f.jsx(Ck, { ...e, item: n, controls: a });
        console.error('Unable to render equipment item', e.intCD, e.type);
    }),
    Nk = Me('InstructionsItem', Tj),
    Ik = { Equipment: 'equipmentInstructions', Crew: 'crewInstructions' },
    jk = { colorTag: '#64ba21', whiteSpanish: 'rgba(var(--color-general-primary-rgb), 0.9)' },
    kk = function ({ intCD: e, item: t, controls: n }) {
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
                return (u || !g || (l && e.add(W_), (p > 0 || m) && !_ ? e.add(O_) : e.add(R_)), e);
            }, [u, g, l, p, m, _]),
            x = a.useCallback(
                (t) => {
                    n.actionSlot({ actionType: t, intCD: e, currentSlotId: d });
                },
                [n, e, d],
            ),
            y = a.useCallback(() => {
                u || (v.has(R_) ? x(R_) : v.has(O_) ? x(O_) : x(V_));
            }, [v, x, u]),
            [C, w] = kj(i, jk);
        return f.jsx(Nk, {
            className: b(u && Vj, u && Aj),
            onClick: y,
            children: f.jsxs('div', {
                className: Bj,
                children: [
                    f.jsx('div', {
                        className: Rj,
                        children: f.jsx(ya, { name: r, overlayType: jj(o), size: ya.sizes.s180x135 }),
                    }),
                    f.jsx('div', { className: Oj, children: f.jsx('div', { className: zj, children: s }) }),
                    f.jsx(mt, { className: b(Fj, v.size > 0 && Zj), text: C, upgradeLegacy: !0, params: w }),
                    f.jsx(Lj, {
                        show: 0 === v.size,
                        itemsInStorage: p,
                        possibleZeroCount: 0 === h.price.length,
                        mounted: m || _,
                        price: h,
                        className: Uj,
                    }),
                    f.jsx(Ij, { className: qj, onActionClick: x, buyMoreDisabled: c, availableActions: Array.from(v) }),
                ],
            }),
        });
    },
    Sk = C((e) => {
        const { model: t, controls: a } = mh(),
            n = e.type && t.computes.instructionByIntCD(e.intCD, e.type);
        if (n) return f.jsx(kk, { ...e, item: n, controls: a });
    });
const Pk = { card: 'AmmunitionCard_card_2bd54c54' },
    Ek = te.resolve('aliases');
const Mk = C(function ({ card: e, type: t, currentTab: n, className: s }) {
        const { model: r } = j_(),
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
            g = u ? vn.alert : -1 !== l ? vn.done : void 0,
            v = -1 !== l && h === l,
            b = !o && -1 !== l && h !== l,
            x = ot(
                t === o_ ? 'battleBoosterBlock' : 'hangarCardModule',
                a.useMemo(() => [c, h], [c, h]),
                a.useMemo(() => ({ resId: Ek.read((e) => e.hangar.shared.Loadout('resId')) }), []),
            ),
            y = _e({
                resId: Ek.read((e) => e.hangar.shared.Loadout('resId')),
                args: a.useMemo(() => ({ intCD: c, slotId: h, slotType: l_, tooltipId: 'hangarCardModule' }), [c, h]),
            }),
            C = a.useMemo(
                () =>
                    (function (e, t, a, n, s, r, o, i) {
                        const { id: l, ...c } = (() => {
                            switch (e) {
                                case l_:
                                    return {
                                        id: -1 === t ? 'tankSetupConsumableItem' : 'tankSetupConsumableSlot',
                                        slotType: n_,
                                        emitterUID: window.subViews.get(
                                            Ek.read((e) => e.hangar.shared.Consumables('resId')),
                                        ).uid,
                                    };
                                case o_:
                                    return {
                                        id: -1 === t ? 'tankSetupBattleBoosterItem' : 'tankSetupBattleBoosterSlot',
                                        slotType: s_,
                                        emitterUID: window.subViews.get(
                                            Ek.read((e) => e.hangar.shared.Instructions('resId')),
                                        ).uid,
                                    };
                                default:
                                    return {
                                        id: -1 === t ? 'tankSetupOptionalDeviceItem' : 'tankSetupOptionalDeviceSlotWW',
                                        slotType: t_,
                                        emitterUID: window.subViews.get(
                                            Ek.read((e) => e.hangar.shared.Equipments('resId')),
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
            w = t === l_ ? y : x,
            N = pt(C.id, C.args),
            I = (function ({ intCD: e, selected: t, ammunitionType: a, currentTab: n = '' }) {
                switch (a) {
                    case r_: {
                        const a = hn(c_, n);
                        return a ? f.jsx(wk, { intCD: e, selected: t, type: a }) : null;
                    }
                    case l_:
                        return f.jsx(Kj, { intCD: e, selected: t });
                    case o_: {
                        const t = hn(Ik, n);
                        return t ? f.jsx(Sk, { intCD: e, type: t }) : null;
                    }
                    default:
                        return null;
                }
            })({ intCD: c, selected: v, ammunitionType: t, currentTab: n });
        if (I)
            return f.jsx('div', {
                ...w,
                className: s,
                children: f.jsx(gn, {
                    ...N,
                    className: Pk.card,
                    classNames: { status: { icon: Pk.statusIcon } },
                    status: g,
                    statusReason: t !== l_ ? d : void 0,
                    active: b,
                    selected: v,
                    disabled: i,
                    'data-test-id': c,
                    children: I,
                }),
            });
    }),
    Dk = {
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
function Lk({ cards: e, currentTab: t, type: n }) {
    const s = fn();
    return (
        a.useEffect(() => Vt(s.recalculate), [null == e ? void 0 : e.length, s.recalculate]),
        f.jsx(f.Fragment, {
            children: e.map((e) => f.jsx(Mk, { className: Dk.card, card: e, type: n, currentTab: t }, e.intCD)),
        })
    );
}
const Tk = {
        root: 'Introduction_root_bc1537e2',
        base: 'Introduction_7257ae29',
        description: 'Introduction_description_7c2607f0',
        title: 'Introduction_title_7e63aa60',
        message: 'Introduction_message_845b2bb5',
        currency: 'Introduction_currency_1092ef06',
        icon: 'Introduction_icon_740fcef0',
        'icon__currency-modernized': 'Introduction_icon__currency-modernized_1dfb6dcf',
    },
    Ak = { [dj.Bounty]: 'trophy', [dj.Experimental]: 'modernized' };
function Bk({ introductionType: e }) {
    const t = Ak[e],
        a = te.resolve('strings');
    return f.jsx(Se, {
        split: !0,
        upgradeLegacy: !0,
        params: {
            currencyName:
                e !== dj.Bounty
                    ? f.jsx('span', {
                          className: Tk.currency,
                          children: a.readOrEmpty(`tank_setup.introduction.currency.${t}`),
                      })
                    : '',
            currencyIcon: f.jsx('span', { className: b(Tk.icon, Tk[`icon__currency-${t}`]) }),
        },
        path: `tank_setup.introduction.message.${t}`,
        className: Tk.message,
    });
}
const Vk = { [dj.Bounty]: 'trophy', [dj.Experimental]: 'modernized' },
    Rk = { [dj.Bounty]: 'modules.trophyOverlay', [dj.Experimental]: 'modules.modernizedOverlay' };
function Ok({ introductionType: e }) {
    const t = te.resolve('strings').readOrEmpty(`tank_setup.introduction.title.withoutEquipments.${Vk[e]}`),
        a = Rk[e];
    return f.jsxs('div', {
        className: Tk.base,
        children: [
            f.jsx(Pe, {
                path: a,
                width: 350,
                height: 250,
                adaptive: { large: { width: 600, height: 450, path: `${a}Big` } },
            }),
            f.jsxs('div', {
                className: Tk.description,
                children: [f.jsx('div', { className: Tk.title, children: t }), f.jsx(Bk, { introductionType: e })],
            }),
        ],
    });
}
const zk = 'top',
    Hk = 'bottom',
    Uk = 'both',
    qk = 'none';
const Fk = C(function ({ currentTab: e, type: t, className: a }) {
    const [n, s] = v.useState(qk),
        { api: r } = be();
    v.useLayoutEffect(() => {
        const e = () => {
            const e = r.getContainerSize() ?? 0,
                t = r.getWrapperSize() ?? 0,
                a = r.animationScroll.scrollPosition.get();
            s(
                (function (e, t, a) {
                    return e <= t ? qk : a <= 10 ? Hk : t + a >= e - 10 ? zk : Uk;
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
    const o = fe(e),
        i = fe(t),
        l = Xe(() => {
            ((i && t !== i) || (t === r_ && o && e !== o)) && r.applyScroll(0, { immediate: !0 });
        });
    v.useEffect(() => {
        l();
    }, [l, t, e]);
    const c = (function (e, t) {
        const { model: a } = nh(),
            { model: n } = mh(),
            { model: s } = ch();
        switch (e) {
            case l_:
                return a.computes.consumables().sort((e, t) => (pj[e.itemName] ?? 1 / 0) - (pj[t.itemName] ?? 1 / 0));
            case o_:
                switch (t) {
                    case uj:
                        return n.equipmentInstructionsArray.get();
                    case mj:
                        return n.crewInstructionsArray.get();
                }
                break;
            case r_:
                switch (t) {
                    case dj.Standard:
                        return s.computes.filteredStandardEquipments();
                    case dj.Bounty:
                        return s.bountyEquipments.get();
                    case dj.Improved:
                        return s.improvedEquipments.get();
                    case dj.Experimental:
                        return s.experimentalEquipments.get();
                }
        }
        return [];
    })(t, e);
    return f.jsxs('div', {
        className: b(Dk.scrollContainer, Dk[`scrollContainer__${n}`], a),
        children: [
            f.jsx(Ne, {
                classNames: { wrapper: Dk.scrollWrapper, content: Dk.scrollContent },
                children:
                    c && 0 !== c.length
                        ? f.jsx(bn, {
                              className: Dk.container,
                              trashhold: `${t}-${e}`,
                              children: f.jsx(Lk, { cards: c, currentTab: e, type: t }),
                          })
                        : t !== r_ || (e !== dj.Experimental && e !== dj.Bounty)
                          ? void 0
                          : f.jsx(Ok, { introductionType: e }),
            }),
            f.jsx(Ie, { classNames: { base: Dk.verticalBar } }),
        ],
    });
});
function Zk(e) {
    return f.jsx(je, { children: f.jsx(Fk, { ...e }) });
}
const Wk = 'SpecializationFilter_48673c87',
    Gk = 'SpecializationFilter_content_f790a5c2',
    Xk = te.resolve('strings'),
    $k = {
        [d_.Firepower]: 'loadout:ammunition_setup:specialization-filter:firepower',
        [d_.Survivability]: 'loadout:ammunition_setup:specialization-filter:survivability',
        [d_.Stealth]: 'loadout:ammunition_setup:specialization-filter:stealth',
        [d_.Mobility]: 'loadout:ammunition_setup:specialization-filter:mobility',
    },
    Kk = C(function ({ specialization: e, className: t }) {
        const n = xe(),
            { model: s, controls: r } = ch(),
            o = s.standardEquipmentsFilters.get().has(e),
            i = fe(o),
            l = rt({
                header: Xk.readOrEmpty(`tank_setup.categories.${e}`),
                body: Xk.readOrEmpty(`tank_setup.categories.body.${e}`),
            }),
            c = ka(() => r.updateFilters(e), [r, e], 400);
        return (
            a.useEffect(() => {
                (o && !1 === i && n.play('on', { target: $k[e] }),
                    o || !0 !== i || n.play('off', { target: 'loadout:ammunition_setup:specialization-filter' }));
            }, [o, i, n, e]),
            f.jsx(zt, {
                ...l,
                className: b(Wk, t),
                classNames: { content: Gk },
                fullSizeContent: !0,
                theme: Ut.primary,
                size: Ht.extraSmall,
                activated: o,
                onClick: c,
                children: f.jsx(fg, { specialization: e, active: o }),
            })
        );
    }),
    Yk = te.resolve('aliases'),
    Qk = te.resolve('views'),
    Jk = te.resolve('intl'),
    eS = 'simple',
    tS = 'trophy',
    aS = 'deluxe',
    nS = 'modernized',
    sS = { [dj.Standard]: eS, [dj.Bounty]: tS, [dj.Improved]: aS, [dj.Experimental]: nS };
function rS({ id: e, label: t, className: n }) {
    const s = sS[e],
        r = Ee(
            a.useMemo(
                () => ({
                    contentId: Qk.read((e) => e.lobby.tanksetup.tooltips.SetupTabTooltipView('resId')),
                    resId: Yk.read((e) => e.hangar.shared.Equipments('resId')),
                    disabled: !s,
                    args: { name: s },
                }),
                [s],
            ),
        );
    return f.jsx(xn.Tab, { ...(s && r), tabId: e, className: n, children: f.jsx(Re, { text: Jk.toUpperCase(t) }) });
}
const oS = 'TabsNavigation_tabsNavigation_f7e0f60f',
    iS = 'TabsNavigation_tabsSwitcher_d52f26be',
    lS = 'TabsNavigation_tab_48ab20da',
    cS = 'TabsNavigation_tab__active_676bc101',
    dS = ({ tabsList: e, activeTab: t, theme: a, size: n, onChangeActiveTab: s, className: r, ...o }) =>
        f.jsx('div', {
            className: b(oS, r),
            children: f.jsx(xn, {
                ...o,
                active: t,
                theme: a,
                size: n,
                onActiveChange: (e) => s(String(e)),
                children: f.jsx(xn.Switcher, {
                    className: iS,
                    children: e.map(({ id: e, label: a }) =>
                        f.jsx(rS, { id: e, label: a, className: b(lS, t === a && cS) }, e),
                    ),
                }),
            }),
        }),
    uS = {
        workbenchPanel: 'WorkbenchPanel_workbenchPanel_f8c32bc5',
        currency: 'WorkbenchPanel_currency_7d4b8be',
        button: 'WorkbenchPanel_button_853070e2',
        buttonContent: 'WorkbenchPanel_buttonContent_24857913',
    },
    mS = te.resolve('strings'),
    pS = C(({ className: e }) => {
        const { model: t, controls: a } = ch(),
            n = ot('equipCoinInfo'),
            s = rt({
                body: t.hasExperimentalEquipmentToDisassemble.get()
                    ? mS.readOrEmpty('tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.notDisabled.text')
                    : mS.readOrEmpty('tank_setup.tooltips.experimentalEquipCoinBlock.actions.button.disabled.text'),
            });
        return f.jsxs('div', {
            className: b(uS.workbenchPanel, e),
            children: [
                f.jsx(nt, {
                    ...n,
                    reverse: !0,
                    type: Za.equipCoin,
                    classNames: { base: uS.currency, icon: uS.currencyIcon },
                    children: t.equipCoinCount.get(),
                }),
                f.jsx('div', {
                    ...s,
                    children: f.jsx(Ve, {
                        className: uS.button,
                        classNames: { content: uS.buttonContent },
                        disabled: !t.hasExperimentalEquipmentToDisassemble.get(),
                        theme: Ve.themes.secondary,
                        size: Ve.sizes.small,
                        onClick: t.hasExperimentalEquipmentToDisassemble.get() ? a.getMoreCurrency : void 0,
                        children: mS.readOrEmpty('tank_setup.experimentalEquipCoinBlock.name'),
                    }),
                }),
            ],
        });
    }),
    _S = 'AmmunitionSetup_14321dac',
    hS = 'AmmunitionSetup_ammunitionHeader_7df5ac92',
    gS = 'AmmunitionSetup_dealPanel_64ad50ed',
    vS = 'AmmunitionSetup_tabsNavigation_4504ff3c',
    fS = 'AmmunitionSetup_tabsNavigation__hidden_a99bfa94',
    bS = 'AmmunitionSetup_specializationFilters_35de8d81',
    xS = 'AmmunitionSetup_specializationFilter_38bef0cf',
    yS = {
        [r_]: [
            { id: dj.Standard, labelKey: 'tank_setup.tabs.simple' },
            { id: dj.Bounty, labelKey: 'tank_setup.tabs.trophy' },
            { id: dj.Improved, labelKey: 'tank_setup.tabs.deluxe' },
            { id: dj.Experimental, labelKey: 'tank_setup.tabs.modernized' },
        ],
        [o_]: [
            { id: uj, labelKey: 'tank_setup.tabs.optDevice' },
            { id: mj, labelKey: 'tank_setup.tabs.crew' },
        ],
    },
    CS = { [r_]: dj.Standard, [o_]: uj },
    wS = te.resolve('strings');
function NS(e) {
    switch (e) {
        case jh:
            return uj;
        case Ih:
            return mj;
        case kh:
            return dj.Improved;
        case Ph:
            return dj.Experimental;
        case Ch:
        case wh:
        case Nh:
            return dj.Bounty;
        default:
            return;
    }
}
const IS = Object.values(d_),
    jS = C(function ({ type: e }) {
        const t = xe(),
            { model: n } = j_(),
            { controls: s } = ch(),
            { groupIndex: r, item: o } = n.computes.selectedSlotGroupAndItem(),
            i = n.selectedSlot.get(),
            l = n.selectedSection.get(),
            c = a.useRef(!1),
            d = a.useRef(),
            [u, m] = a.useState(NS(null == o ? void 0 : o.type) || CS[e]),
            p = fe(i),
            _ = fe(l),
            h = fe(r),
            g = fe(u),
            v = fe(e);
        (a.useEffect(() => {
            (_ !== l || (o && (p !== i || r !== h))) && m(NS(null == o ? void 0 : o.type) || CS[e]);
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
            ye(() => clearTimeout(d.current)));
        const x = a.useMemo(
                () =>
                    (function (e) {
                        var t;
                        return (
                            (null == (t = yS[e])
                                ? void 0
                                : t.map(({ id: e, labelKey: t }) => ({ id: e, label: wS.readOrEmpty(t) }))) ?? []
                        );
                    })(e),
                [e],
            ),
            y = Kt({ size: Cn.small }, { large: { size: Cn.medium }, extraLarge: { size: Cn.large } });
        return f.jsxs('div', {
            className: _S,
            children: [
                e === i_
                    ? f.jsx(cj, {})
                    : f.jsxs(f.Fragment, {
                          children: [
                              f.jsxs('div', {
                                  className: hS,
                                  children: [
                                      f.jsx(dS, {
                                          tabsList: x,
                                          activeTab: u ?? '',
                                          onChangeActiveTab: (e) => m(e),
                                          theme: yn.primary,
                                          size: y.size,
                                          className: b(vS, 0 === x.length && fS),
                                      }),
                                      (() => {
                                          switch (u) {
                                              case dj.Standard:
                                                  return f.jsx('div', {
                                                      className: bS,
                                                      children: IS.map((e, t) =>
                                                          f.jsx(Kk, { specialization: e, className: xS }, t),
                                                      ),
                                                  });
                                              case dj.Experimental:
                                                  return f.jsx(pS, {});
                                          }
                                      })(),
                                  ],
                              }),
                              f.jsx(Zk, { currentTab: u, type: e }),
                          ],
                      }),
                f.jsx(GN, { className: gS, type: e }),
            ],
        });
    }),
    kS = 'LoadoutScreen_b66d9141',
    SS = 'LoadoutScreen_info_1918746a',
    PS = te.resolve('aliases');
function ES(e, t) {
    return { options: { rootId: t.read(e) } };
}
const MS = new wa()
    .addWithProps(
        ah,
        ES((e) => e.hangar.shared.Consumables('resId'), PS),
    )
    .addWithProps(
        uh,
        ES((e) => e.hangar.shared.Instructions('resId'), PS),
    )
    .addWithProps(
        lh,
        ES((e) => e.hangar.shared.Equipments('resId'), PS),
    )
    .addWithProps(
        I_,
        ES((e) => e.hangar.shared.Loadout('resId'), PS),
    )
    .addWithProps(
        vh,
        ES((e) => e.hangar.shared.Shells('resId'), PS),
    );
function DS(e) {
    const t = Te();
    gt(ht.ESCAPE, () => {
        t.push(Kp.root, void 0);
    });
    const { page: a } = e.params;
    return f.jsx(Ei, {
        classNames: { base: kS, info: SS },
        children: void 0 !== a && MS.render(f.jsx(jS, { type: a })),
    });
}
const LS = {
        base: 'Page_c86c7327',
        carousel: 'Page_carousel_2e3eb473',
        carousel__double: 'Page_carousel__double_b4782e51',
        carouselButtons: 'Page_carouselButtons_4148fb',
        filterPopover: 'Page_filterPopover_f4402d4f',
        filterTrigger: 'Page_filterTrigger_9d14c53b',
        filterTriggerContent: 'Page_filterTriggerContent_fe0f376c',
        teaserWidget: 'Page_teaserWidget_ab2c33e0',
    },
    TS = { rootId: te.resolve('aliases').read((e) => e.hangar.shared.Teaser('resId')) },
    AS = [
        Kp.loadout.optDevices,
        Kp.loadout.battleBoosters,
        Kp.loadout.shells,
        Kp.loadout.consumables,
        Kp.vehicles,
        Kp.root,
    ],
    BS = [Kp.vehicles, Kp.root],
    VS = I(function () {
        const e = Te(),
            t = bs(),
            a = Xs().model.selectedVehicle(),
            n = t.model.carouselRowCount.get(),
            s = AS.includes(e.location) && void 0 !== a,
            r = BS.includes(e.location) && void 0 !== a,
            o = e.location === Kp.root,
            i = !o;
        return f.jsx(f.Fragment, {
            children: f.jsxs('div', {
                className: LS.base,
                children: [
                    i && f.jsx(wn, {}),
                    f.jsxs(Nn, {
                        children: [
                            f.jsx(In, { path: Kp.root, component: xN, exact: !0 }),
                            f.jsx(In, { path: `${Kp.loadout.root}/:page`, component: DS }),
                            f.jsx(In, { path: Kp.vehicles, component: up }),
                        ],
                    }),
                    r && f.jsx(yy, { screenModeEnabled: e.location.endsWith(Kp.vehicles) }),
                    s && f.jsx(mx, { className: LS.loadoutPanel, screenModeEnabled: !o }),
                    o &&
                        f.jsxs('div', {
                            className: b(LS.carousel, n === Wn && LS.carousel__double),
                            children: [
                                f.jsxs('div', {
                                    className: LS.carouselButtons,
                                    children: [
                                        f.jsx(ap, {
                                            classNames: {
                                                base: LS.filterPopover,
                                                trigger: LS.filterTrigger,
                                                triggerContent: LS.filterTriggerContent,
                                            },
                                        }),
                                        f.jsx($p, { route: Kp.vehicles }),
                                    ],
                                }),
                                f.jsx(Yp, {}),
                            ],
                        }),
                    o && f.jsx(Zp, { className: LS.teaserWidget, options: TS }),
                ],
            }),
        });
    }),
    RS = 'App_7ac91f18';
function OS() {
    return f.jsx('div', { className: RS, children: f.jsx(VS, {}) });
}
const zS = te.resolve('aliases');
function HS(e, t) {
    return { options: { rootId: t.read(e) } };
}
const US = jn({
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
Sn(
    new wa()
        .addWithProps(sn, { soundsOverrides: US })
        .add(kn)
        .addWithProps(
            fs,
            HS((e) => e.hangar.shared.VehicleFilters('resId'), zS),
        )
        .addWithProps(
            Cs,
            HS((e) => e.hangar.shared.VehiclesStatistics('resId'), zS),
        )
        .addWithProps(
            Ns,
            HS((e) => e.hangar.shared.VehiclesInfo('resId'), zS),
        )
        .addWithProps(
            zn,
            HS((e) => e.hangar.shared.SpaceInteraction('resId'), zS),
        )
        .addWithProps(
            Rn,
            HS((e) => e.hangar.shared.MainMenu('resId'), zS),
        )
        .addWithProps(
            Bn,
            HS((e) => e.hangar.shared.HeroTank('resId'), zS),
        )
        .add(js)
        .addWithProps(
            Gs,
            HS((e) => e.hangar.shared.VehiclesInventory('resId'), zS),
        )
        .addWithProps(
            yC,
            HS((e) => e.battle_modifiers.shared.Modifiers('resId'), zS),
        )
        .addWithProps(
            ep,
            HS((e) => e.hangar.shared.ModeState('resId'), zS),
        )
        .addWithProps(
            Un,
            HS((e) => e.common.shared.DynamicEconomics('resId'), zS),
        )
        .render(f.jsx(OS, {})),
)
    .then(() => Pn(document.getElementById('root')))
    .then(() => En())
    .then(() => Mn(!1));
