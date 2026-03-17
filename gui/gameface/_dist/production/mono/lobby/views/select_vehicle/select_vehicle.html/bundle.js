import {
    o as e,
    q as t,
    e as a,
    w as s,
    x as l,
    y as r,
    z as i,
    A as n,
    B as o,
    C as c,
    D as d,
    E as u,
    r as m,
    p,
    s as h,
    j as _,
    f,
} from '../../../chunks/vendor.js';
import {
    p as v,
    q as g,
    v as x,
    w as b,
    x as y,
    y as C,
    z as N,
    A as j,
    D as w,
    E,
    G as S,
    H as I,
    i as A,
    J as k,
    K as P,
    L as V,
    M as D,
    r as M,
    N as T,
    O as L,
    Q as B,
    S as U,
    W as z,
    X as O,
    Y as X,
    Z as R,
    _ as G,
    $ as q,
    a0 as F,
    a1 as H,
    a2 as Z,
    a3 as Y,
    a4 as Q,
    a5 as J,
    a6 as W,
    a7 as K,
    a8 as $,
    a9 as ee,
    aa as te,
    ab as ae,
    ac as se,
    ad as le,
    b as re,
    B as ie,
    ae as ne,
    af as oe,
    ag as ce,
    ah as de,
    ai as ue,
    aj as me,
    ak as pe,
    al as he,
    am as _e,
    an as fe,
    ao as ve,
    ap as ge,
    aq as xe,
    ar as be,
    as as ye,
    at as Ce,
    au as Ne,
    av as je,
    aw as we,
    ax as Ee,
    k as Se,
    ay as Ie,
    az as Ae,
    o as ke,
    aA as Pe,
    aB as Ve,
    aC as De,
    aD as Me,
    aE as Te,
    aF as Le,
    aG as Be,
    aH as Ue,
    aI as ze,
    aJ as Oe,
    h as Xe,
    C as Re,
    aK as Ge,
    aL as qe,
    U as Fe,
    l as He,
} from '../../../chunks/lib.js';
const Ze = 'role',
    Ye = 'type',
    Qe = 'tier',
    Je = 'nations',
    We = {
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
    Ke = {
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
    $e = 'isCommonProgression',
    et = [x.assault, x.universal, x.break, x.sniper, x.support, x.wheeled],
    tt = ['bonus', 'favorite', 'premium', 'elite', 'crystals', 'canInstallAttachments', 'own3DStyle', 'rented'],
    at = [v.lightTank, v.mediumTank, v.heavyTank, v['AT-SPG'], v.SPG],
    st = g(1, 12, b),
    lt = {
        vehicleTypes: 'vehicle_types',
        nations: 'nations',
        levels: 'levels',
        specials: 'specials',
        battle_pass: 'battle_pass',
    },
    rt = { heavy_tank: j, medium_tank: N, light_tank: C, at_spg: y };
function it(e, t) {
    return e === $e && t.status !== S.UNSUITABLE_TO_QUEUE && t.bpProgress < t.maxBpScore;
}
function nt(e, t, a, s) {
    switch (t) {
        case 'elite':
            return e.includes('premium') || (s && s.elite && !a.premium);
        case 'premium':
            return a.premium || (e.includes('elite') && s && s.elite);
        case 'bonus':
            return s && s.bonusMultiplier >= 2;
        case 'favorite':
            return a.favorite;
        case 'crystals':
            return a.crystalEarning;
        case 'rented':
            return !0;
        case 'canInstallAttachments':
            return a.canInstallAttachments;
        case 'own3DStyle':
            return s && s.own3DStyle;
        case 'event':
        case 'funRandom':
            return a.isSuitableVehicle;
        default:
            return !1;
    }
}
const ot = {
    [lt.levels]: (e, t) => !e.levels || e.levels.includes(`level_${t.level}`),
    [lt.nations]: (e, t) => !e.nations || e.nations.includes(E(t.nationId)),
    [lt.vehicleTypes]: (e, t) => !e.vehicle_types || e.vehicle_types.includes(t.type),
};
function ct(e, t, a) {
    let s = !1;
    const l = e.specials ?? [];
    for (const r of l)
        if ('rented' !== r) {
            if (!nt(l, r, t, a)) return !1;
        } else s = !0;
    if (!s && w(t)) return !1;
    if (a && e.battle_pass && e.battle_pass.length > 0) for (const r of e.battle_pass) if (!it(r, a)) return !1;
    for (const r of Object.keys(e)) if (r in ot && !ot[r](e, t)) return !1;
    return ((e, t) => {
        const a = I(t.role);
        let s = !1;
        for (const l of Object.keys(rt)) if (l in e && ((s = !0), e[l].some((e) => e.includes(a)))) return !0;
        return !s;
    })(e, t);
}
function dt(e, { shortName: t, fullName: a }) {
    const s = e.toLowerCase();
    return !(s.length > 0 && !t.toLowerCase().includes(s) && !a.toLowerCase().includes(s));
}
function ut(e, t, a) {
    const s = e[t] ?? [],
        l = { ...e };
    return ((l[t] = s.includes(a) ? s.filter((e) => e !== a) : [...s, a]), l[t].length > 0 || delete l[t], l);
}
function mt(e, t) {
    return 'regular' === t.type
        ? ut(e, t.field, t.value)
        : Object.keys(rt).reduce((e, a) => {
              const s = rt[a].find((e) => e.includes(t.role));
              return s
                  ? ut(e, a, ((r = s), 'at_spg' === (l = a) ? `role_ATSPG_${r}` : `role_${l[0].toUpperCase()}T_${r}`))
                  : e;
              var l, r;
          }, e);
}
function pt(e, t, a, s) {
    if (a.favorite !== s.favorite) return a.favorite ? -1 : 1;
    const l = e[E(a.nationId)] ?? 0,
        r = e[E(s.nationId)] ?? 0;
    if (l !== r) return l - r;
    const i = t[a.type] ?? 0,
        n = t[s.type] ?? 0;
    return i !== n
        ? i - n
        : a.level !== s.level
          ? a.level - s.level
          : a.premium !== s.premium
            ? a.premium
                ? 1
                : -1
            : a.shortName.localeCompare(s.shortName);
}
const [ht, _t] = A('FilterVehiclesProvider')(
        ({ observableModel: t, readByPath: a }) => {
            function s(e) {
                try {
                    return JSON.parse(e);
                } catch (t) {
                    return (console.error(t), {});
                }
            }
            const { text_search: l, ...r } = s(a('filters')),
                i = { ...t.primitives(['defaultFilters']) },
                n = k.structural(() => s(i.defaultFilters.get())),
                o = {
                    ...t.primitives(['carouselRowCount']),
                    filters: e.box(r, { deep: !1 }),
                    searchName: e.box((null == l ? void 0 : l[0]) ?? ''),
                    nations: t.arrayClone('nationsOrder'),
                };
            return {
                ...o,
                computes: {
                    hasFilters: k.primitive(() => !P.structural(n(), o.filters.get()) || o.searchName.get().length > 0),
                    nations: () => o.nations.get(),
                    nationToIndex: k.shallow(() => o.nations.get().reduce((e, t, a) => ((e[t] = a), e), {})),
                    default: n,
                },
            };
        },
        ({ cleanup: e, model: s, externalModel: l }) => {
            const r = l.createCallback((e) => e, 'onSaveFilter');
            return (
                e(
                    t(() => {
                        var e, t;
                        ((e = s.filters.get()),
                            (t = s.searchName.get()),
                            r({ filters: JSON.stringify({ ...e, text_search: t.length > 0 ? [t] : void 0 }) }));
                    }),
                ),
                {
                    reset: a(() => {
                        (s.filters.set(s.computes.default()), s.searchName.set(''));
                    }),
                    search: a((e) => {
                        s.searchName.set(e);
                    }),
                    change: a((e) => {
                        s.filters.set(mt(s.filters.get(), e));
                    }),
                    carouselTypeChange: l.createCallback((e) => ({ rowCount: e }), 'onCarouselTypeChange'),
                }
            );
        },
    ),
    ft = [v.lightTank, v.mediumTank, v.heavyTank, v['AT-SPG'], v.SPG].reduce((e, t, a) => ((e[t] = a), e), {}),
    [vt, gt] = A('VehicleStatisticsProvider')(({ observableModel: e }) => {
        const t = e.dict('statistics'),
            a = k.structural((e) => t.get(e));
        return { ids: k.primitive(() => t.keys), get: a };
    }),
    [xt, bt] = A('VehiclesProvider')(
        ({ observableModel: e }) => {
            const t = { vehicles: e.dictRef('vehicles') };
            return {
                get: k.structural((e) => {
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
                    return { ...s, imageKey: V(s.name) };
                }),
                has: k.primitive((e) => Boolean(t.vehicles.get(e))),
                ids: k.shallow(() => [...t.vehicles.keys.values()]),
                amount: k.primitive(() => t.vehicles.length),
                list: k.shallow(() => {
                    let e = [];
                    for (const [s, l] of t.vehicles.entries())
                        try {
                            e.push(JSON.parse(l.get()));
                        } catch (a) {
                            console.error(`Error parsing JSON for element ${s}:`, a);
                        }
                    return e;
                }),
            };
        },
        D,
        { useRequires: () => ({ statistics: gt() }) },
    ),
    [yt, Ct] = A('MyVehiclesProvider')(
        (e) => {
            const t = e.requires.statistic.model.ids,
                a = k.structural((a) => {
                    if (t().has(a)) return e.requires.vehicles.model.get(a);
                }),
                s = k.shallow(() => {
                    const a = [];
                    for (const s of t().values()) {
                        const t = e.requires.vehicles.model.get(s);
                        t ? a.push(t) : console.warn(`No vehicle with id: ${s}`);
                    }
                    return a;
                });
            return { get: a, getAll: s, amount: k.primitive(() => s().length), ids: t };
        },
        D,
        { useRequires: () => ({ vehicles: bt(), statistic: gt() }) },
    ),
    Nt = M.resolve('strings');
function jt(e, t, a = '...') {
    if (
        (B(
            t - a.length >= 0,
            `Incorrect tranticate config max(${t}) - rest.length(${a.length}) must be greater than 0`,
        ),
        e.length <= t)
    )
        return [e, !1];
    return [`${e.slice(0, t - a.length)}${a}`, !0];
}
const wt = T(U + z),
    Et = () => `${Date.now().toString(16)}_${wt(3)}`;
function St(e, t, a = 1) {
    const s = L(t, { count: a });
    return e.has(s) ? St(e, t, a + 1) : s;
}
function It(e = '', t = []) {
    return {
        title: '' !== e ? e : Nt.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: t,
    };
}
const At = (e) => ({ type: 'ok', value: e }),
    kt = (e, t) => ({ type: 'error', error: { tag: e, msg: t } }),
    Pt = 'delete',
    Vt = 'import',
    Dt = s({ title: i(), createdAt: l(c(), o(), n(0)), modifiedAt: l(c(), o(), n(0)), list: r(l(c(), o())) }),
    Mt = l(
        i(),
        d((e) => (e.length > 0 ? e : void 0)),
    ),
    [Tt, Lt, { Context: Bt }] = A('PlaylistsProvider')(
        ({ requires: t, observableModel: a }) => {
            const s = a.dict('storage'),
                l = a.primitives(['selectedID', 'enabled', 'dirtyEdit']),
                r = t.filters.model.computes.default,
                i = {
                    vehicles: t.vehicles.model,
                    myVehicles: t.myVehicles.model,
                    enabled: l.enabled,
                    nationsOrder: t.filters.model.nations,
                    filters: e.box(r(), { deep: !1 }),
                    searchName: e.box('', { deep: !1 }),
                    edit: { initial: e.box(void 0, { deep: !1 }), dirty: l.dirtyEdit },
                },
                n = k.shallow(() => s.keys),
                o = k.primitive(() => u(Mt, l.selectedID.get())),
                c = k.structural((e) => {
                    try {
                        const t = s.get(e);
                        if (!t) return At(void 0);
                        const a = u(Dt, JSON.parse(t)),
                            l = new Set();
                        for (const e of a.list)
                            if (O[e]) {
                                const t = O[e].find((e) => Boolean(i.myVehicles.get(e.toString())));
                                l.add(t ?? e);
                            } else l.add(e);
                        return At({ ...a, list: [...l.values()] });
                    } catch (t) {
                        return (console.error(`Error getting playlist with ${e} id`, t), kt('PARSE_ERROR', String(t)));
                    }
                }),
                d = k.shallow(() =>
                    X(n().values())
                        .map((e) => c(e))
                        .filter((e) => 'ok' === e.type && void 0 !== e.value)
                        .map((e) => e.value.title)
                        .reduce((e, t) => e.add(t), new Set()),
                ),
                m = k.primitive((e) => {
                    const t = c(e);
                    if ('ok' !== t.type || void 0 === t.value) throw new Error(`Can't get playlist by id ${e}`);
                    return t.value;
                }),
                p = k.structural((e) => {
                    const t = c(e);
                    if ('ok' === t.type && void 0 !== t.value) return { id: e, ...t.value };
                }),
                h = k.shallow(() =>
                    X(n().values())
                        .map((e) => p(e))
                        .filter((e) => void 0 !== e)
                        .toArray()
                        .sort((e, t) => e.title.localeCompare(t.title))
                        .map((e) => e.id),
                ),
                _ = k.primitive(() => {
                    const e = o();
                    if (e) return p(e);
                }),
                f = k.shallow(() => {
                    const e = t.filters.model.computes.nationToIndex();
                    return R(t.myVehicles.model.getAll(), (t, a) => pt(e, ft, t, a));
                }),
                v = k.primitive((e) => {
                    var t;
                    const a = p(e),
                        s = x();
                    if (void 0 === a || 0 === a.list.length) return;
                    const l = new Set(a.list);
                    for (let r = 0; r < s.length; r += 1) {
                        const e = Number(null == (t = s[r]) ? void 0 : t.id);
                        if (G(e) && l.has(e)) return r;
                    }
                }),
                g = k.primitive(() => !1 === P.structural(r(), i.filters.get()) || i.searchName.get().length > 0),
                x = k.shallow(() => {
                    const e = i.filters.get(),
                        a = f(),
                        s = i.searchName.get();
                    return a.filter((a) => {
                        if (!dt(s, a)) return !1;
                        const l = t.statistic.model.get(a.id);
                        return ct(e, a, l);
                    });
                }),
                b = k.primitive((e) => {
                    var a;
                    return Boolean(null == (a = t.statistic.model.get(e)) ? void 0 : a.elite);
                }),
                y = k.shallow((e) => {
                    const a = t.vehicles.model.get(e);
                    return null == a ? void 0 : a.imageKey;
                }),
                C = k.primitive(() => x().length),
                N = k.shallow(() => {
                    var e;
                    return null == (e = _()) ? void 0 : e.list.map(i.vehicles.get);
                });
            return {
                ...i,
                current: _,
                titles: d,
                currentId: o,
                byIdUnsafe: m,
                byId: c,
                byIdFull: p,
                filtered: x,
                filteredAmount: C,
                defaultFilters: r,
                hasFilters: g,
                vehicleImage: y,
                currentVehicles: N,
                ids: n,
                sortedIds: h,
                isElite: b,
                firstAddedVehicleIndexByPlaylistId: v,
            };
        },
        ({ model: e, externalModel: t }) => {
            const s = t.createCallback(
                (e) => ({ id: e.id, data: JSON.stringify(e.initial), skipRedirect: e.skipRedirect }),
                'onCreate',
            );
            return {
                filters: q({
                    update: (t) => {
                        e.filters.set(mt(e.filters.get(), t));
                    },
                    reset: () => {
                        (e.filters.set(e.defaultFilters()), e.searchName.set(''));
                    },
                    search: (t) => e.searchName.set(t),
                    change: (t) => {
                        e.filters.set(mt(e.filters.get(), t));
                    },
                }),
                create: a((t) => {
                    const { id: a = Et(), vehicleIds: l = [], skipRedirect: r = !1 } = t ?? {};
                    s({ id: a, initial: It(St(e.titles(), 'playlists.defaultName'), l), skipRedirect: r });
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
                    a(() => ({ type: Vt, params: JSON.stringify({ titles: Array.from(e.titles().values()) }) })),
                    'openImportConfirm',
                ),
                openDeleteConfirm: t.createCallback(
                    (e, t) => ({ id: e, type: Pt, params: JSON.stringify({ title: t }) }),
                    'openDeleteConfirm',
                ),
            };
        },
        { useRequires: () => ({ vehicles: bt(), myVehicles: Ct(), filters: _t(), statistic: gt() }) },
    ),
    Ut = () => m.useContext(Bt),
    [zt, Ot] = A('VehiclesInventoryProvider')(
        (a) => {
            const s = a.observableModel.primitives([
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
                l = e.box([], { deep: !1 }),
                r = { intCD: s.currentVehicleIntCD, inventoryId: s.currentVehicleInventoryId },
                i = k.shallow(() => {
                    const e = r.intCD.get();
                    return a.requires.vehicles.model.get(e);
                }),
                n = k.shallow((e) => {
                    if (void 0 === e) return;
                    const t = r.intCD.get();
                    return -1 === t ? a.requires.vehicles.model.get(e) : a.requires.vehicles.model.get(t);
                }),
                o = k.shallow(() => {
                    const e = r.intCD.get();
                    return a.requires.statistic.model.get(e);
                }),
                c = k.primitive(() => -1 !== r.intCD.get()),
                d = k.shallow((e) => F(e, (e) => u.get(String(e)))),
                u = a.requires.myVehicles.model,
                m = k.structural(() => a.requires.vehicles.model.list().filter((e) => e.rent.isRented)),
                h = k.primitive(() =>
                    a.requires.vehicles.model.list().some((e) => {
                        const t = a.requires.statistic.model.get(e.vehicleId);
                        if (t) return 'inPrebattle' === t.status;
                    }),
                ),
                _ = k.primitive(() => {
                    const e = [...u.getAll()],
                        t = a.requires.filters.model.computes.nationToIndex();
                    return (e.sort((e, a) => pt(t, ft, e, a)), e);
                });
            return (
                a.cleanup(
                    t(() => {
                        var e;
                        const t = a.requires.filters.model.filters.get(),
                            s = a.requires.filters.model.searchName.get(),
                            r = null == (e = a.requires.playlists) ? void 0 : e.model.current(),
                            i = u.ids(),
                            n = (r ? d(r.list) : _()).filter(
                                (e) =>
                                    !1 !== i.has(e.id) && !!ct(t, e, a.requires.statistic.model.get(e.id)) && dt(s, e),
                            );
                        p(() => l.set(n));
                    }),
                ),
                {
                    vehicles: a.requires.myVehicles.model,
                    vehicle: n,
                    selectedVehicle: i,
                    isVehicleSelected: c,
                    selectedVehicleStatistics: o,
                    accumulateByIds: d,
                    rentVehiclesList: m,
                    prebattleModeActive: h,
                    current: {
                        intCD: s.currentVehicleIntCD,
                        inventoryId: s.currentVehicleInventoryId,
                        amount: k.primitive(() => l.get().length),
                        list: () => l.get(),
                        ids: k.shallow(() => l.get().map((e) => e.id)),
                        playlist: a.requires.playlists ? a.requires.playlists.model.current : () => {},
                    },
                    slots: {
                        free: s.freeSlotsCount,
                        price: { defaultValue: s.defaultSlotPrice, value: s.slotPrice, currency: s.slotPriceCurrency },
                        recover: s.recoverableVehicleCount,
                        discount: s.hasDiscont,
                    },
                    bpState: { active: s.bpEntityValid, status: s.bpStatus },
                    telecomRentStatus: s.telecomRentStatus,
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
        { useRequires: () => ({ myVehicles: Ct(), vehicles: bt(), statistic: gt(), filters: _t(), playlists: Ut() }) },
    ),
    [Xt, Rt] = A('SelectVehiclesProvider')(
        (a) => {
            const s = a.observableModel.primitives(['title', 'currentVehicleCD', 'isAllVehicles']),
                l = a.requires.vehicles.model,
                r = a.requires.statistic.model,
                i = e.box([], { deep: !1 }),
                n = k.shallow((e) => F(e, (e) => l.get(String(e)))),
                o = k.primitive(() => {
                    let e = l.list();
                    s.isAllVehicles.get() || (e = e.filter((e) => Boolean(r.get(e.id))));
                    const t = a.requires.filters.model.computes.nationToIndex();
                    return (e.sort((e, a) => pt(t, ft, e, a)), e);
                });
            a.cleanup(
                t(() => {
                    var e;
                    const t = null == (e = a.requires.playlists) ? void 0 : e.model.current(),
                        s = (t ? n(t.list) : o()).filter(
                            (e) =>
                                !!ct(a.requires.filters.model.filters.get(), e, r.get(e.id)) &&
                                dt(a.requires.filters.model.searchName.get(), e),
                        );
                    p(() => i.set(s));
                }),
            );
            const c = k.shallow(() => i.get().map((e) => e.id)),
                d = k.primitive(() => s.currentVehicleCD.get().toString());
            return {
                title: s.title,
                currentVehicleCD: d,
                currentIndex: k.primitive(() => c().indexOf(d())),
                isAllVehicles: s.isAllVehicles,
                total: k.primitive(() => {
                    var e;
                    const t = null == (e = a.requires.playlists) ? void 0 : e.model.current();
                    return t ? t.list.length : o().length;
                }),
                list: () => i.get(),
                ids: c,
            };
        },
        ({ externalModel: e }) => ({
            setAllVehicles: e.createCallback((e) => ({ value: e }), 'onIsAllVehiclesChange'),
            select: e.createCallback((e = '') => ({ id: e }), 'onSelect'),
        }),
        { useRequires: () => ({ vehicles: bt(), filters: _t(), statistic: gt(), playlists: Lt() }) },
    ),
    [Gt, qt, Ft] = A()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled', 'isInfiniteAmmo']),
    })),
    Ht = () => m.useContext(Ft.Context),
    Zt = m.createContext(void 0);
function Yt() {
    const e = m.useContext(Zt);
    if (!e) throw new Error("Can't call useFilters outside of FiltersContext Provider. Please wrap it.");
    return e;
}
const Qt = {
        category: 'FilterPopover_category_aa274a28',
        vehicleLevel: 'FilterPopover_vehicleLevel_41885117',
        scroll: 'FilterPopover_scroll_bce24275',
        toggleContainer: 'FilterPopover_toggleContainer_c7079ba8',
        toggleContainer__type: 'FilterPopover_toggleContainer__type_38a25c90',
        toggle: 'FilterPopover_toggle_747f4b53',
        toggle__type: 'FilterPopover_toggle__type_6486dde5',
        nationWrapper: 'FilterPopover_nationWrapper_c9512daf',
        nationIcon: 'FilterPopover_nationIcon_2456921e',
        toggle__activated: 'FilterPopover_toggle__activated_19a04a6d',
        specialsIcons: 'FilterPopover_specialsIcons_5a3d8e7',
        specialsIcons__favorite: 'FilterPopover_specialsIcons__favorite_c7792d3a',
    },
    Jt = h(function (e) {
        const t = Yt(),
            a = t.tooltipHeaderMap ?? We,
            s = t.tooltipBodyMap ?? Ke,
            l = M.resolve('strings'),
            r = e.tooltip.body !== Qe ? l.readOrEmpty(`tank_carousel_filter.tooltip.${s[e.tooltip.body]}.body`) : '',
            i = H({ header: l.readOrEmpty(`${a[e.tooltip.header]}`), body: r });
        return _.jsx(Wt, { ...e, tooltip: e.tooltip.body !== Qe && i });
    }),
    Wt = h(function (e) {
        const t = Yt(),
            a = t.filters.get(),
            s = m.useMemo(() => {
                var t;
                if ('role' === e.event.type) {
                    const t = e.event.role;
                    return Object.values(a).some((e) => e.some((e) => e.includes(t)));
                }
                return null == (t = a[e.event.field]) ? void 0 : t.includes(e.event.value);
            }, [e.event, a]);
        return _.jsx(Z, {
            ...e.tooltip,
            theme: Q.primary,
            size: Y.extraSmall,
            className: f(Qt.toggle, s && Qt.toggle__activated, e.className),
            activated: s,
            onClick: () => {
                (t.change(e.event), e.tooltip && e.tooltip.onClick());
            },
            children: e.children,
        });
    });
function Kt(e) {
    return _.jsx('div', {
        className: f(Qt.toggleContainer, e.className),
        children: et.map((e) =>
            _.jsx(
                Jt,
                {
                    tooltip: { header: e, body: Ze },
                    event: { type: 'role', role: e },
                    children: _.jsx(ae, { roleKey: e, size: ae.sizes.x24x24, className: Qt.icon }),
                },
                e,
            ),
        ),
    });
}
function $t(e) {
    return _.jsx('div', {
        className: f(Qt.toggleContainer, Qt.toggleContainer__type, e.className),
        children: at.map((e) =>
            _.jsx(
                Jt,
                {
                    tooltip: { header: e, body: Ye },
                    event: { field: lt.vehicleTypes, type: 'regular', value: e },
                    className: Qt.toggle__type,
                    children: _.jsx(te, { type: e, size: te.sizes.x24x24 }),
                },
                e,
            ),
        ),
    });
}
function ea(e) {
    return _.jsx('div', {
        className: f(Qt.toggleContainer, e.className),
        children: e.orderedNations.map((e) =>
            _.jsx(
                Jt,
                {
                    tooltip: { header: e, body: Je },
                    event: { field: lt.nations, type: 'regular', value: e },
                    children: _.jsx('div', {
                        className: Qt.nationWrapper,
                        children: _.jsx(ee, { className: Qt.nationIcon, path: `flags.c_60x40.${e}` }),
                    }),
                },
                e,
            ),
        ),
    });
}
function ta(e) {
    return _.jsx('div', {
        className: f(Qt.toggleContainer, e.className),
        children: st.map((e) =>
            _.jsx(
                Jt,
                {
                    tooltip: { header: 'tier', body: Qe },
                    event: { field: lt.levels, type: 'regular', value: `level_${e}` },
                    children: _.jsx(se, { className: Qt.vehicleLevel, value: e }),
                },
                e,
            ),
        ),
    });
}
function aa(e) {
    const t = $(`hangar.filter.special.${e.imagePath}`, `hangar.filter.special.${e.imagePath}_upscale`);
    return _.jsx(
        Jt,
        {
            tooltip: { header: e.special, body: e.special },
            event: { field: lt.specials, type: 'regular', value: e.special },
            children: _.jsx(ee, {
                className: f(Qt.specialsIcons, 'favorite' === e.special && Qt.specialsIcons__favorite),
                path: t,
            }),
        },
        e.special,
    );
}
function sa() {
    const e = $('hangar.filter.special.isCommonProgression', 'hangar.filter.special.isCommonProgression_upscale');
    return _.jsx(Jt, {
        tooltip: { header: $e, body: $e },
        event: { field: lt.battle_pass, type: 'regular', value: $e },
        children: _.jsx(ee, { className: Qt.specialsIcons, path: e }),
    });
}
const la = h(function (e) {
    var t;
    const a = Yt(),
        s = a.specialIds ?? tt,
        l = Ot(),
        r = l.model.bpState.active.get(),
        i = l.model.rentVehiclesList(),
        n = null == (t = Ht()) ? void 0 : t.model,
        o = !n || n.isCrystalEarnEnabled.get(),
        c = !n || n.isDailyMultipliedXpEnabled.get(),
        d = s.filter((e) => (0 !== i.length || 'rented' !== e) && (c || 'bonus' !== e) && (o || 'crystals' !== e));
    return _.jsxs('div', {
        className: f(Qt.toggleContainer, e.className),
        children: [
            d.map((e) => {
                var t;
                return _.jsx(aa, { imagePath: (null == (t = a.imagesMap) ? void 0 : t[e]) ?? e, special: e }, e);
            }),
            r && _.jsx(sa, {}),
            e.children,
        ],
    });
});
function ra() {
    const e = le(),
        [t, a] = m.useState(!1);
    return (
        m.useEffect(() => {
            const s = e.inputRef.current;
            if (t || !s) return;
            (e.focus(), a(!0));
            const l = s.value.length;
            s.setSelectionRange(l, l);
            const r = (e) => {
                s && !s.contains(e.target) && a(!0);
            };
            return (document.addEventListener('mousedown', r), () => document.removeEventListener('mousedown', r));
        }, [e, t]),
        null
    );
}
m.memo(function (e) {
    return _.jsxs(ia, {
        ...e,
        className: e.className ?? Qt.scroll,
        children: [
            _.jsx(J, { className: Qt.category, path: 'tank_carousel_filter.popover.label.specials' }),
            _.jsx(la, { children: e.children }),
        ],
    });
});
const ia = m.memo(function (e) {
        return _.jsx(W, {
            children: _.jsxs(K, {
                className: e.className,
                barClassNames: e.barClassNames,
                scrollClassNames: e.scrollClassNames,
                children: [
                    _.jsx(J, { className: Qt.category, path: 'tank_carousel_filter.popover.label.vehicleTypes' }),
                    _.jsx($t, {}),
                    _.jsx(J, { className: Qt.category, path: 'tank_carousel_filter.popover.label.vehicleRole' }),
                    _.jsx(Kt, {}),
                    _.jsx(J, { className: Qt.category, path: 'tank_carousel_filter.popover.label.nations' }),
                    _.jsx(ea, { orderedNations: e.orderedNations }),
                    _.jsx(J, { className: Qt.category, path: 'tank_carousel_filter.popover.label.levels' }),
                    _.jsx(ta, {}),
                    e.children,
                ],
            }),
        });
    }),
    na = 'Counter_f01b3b30',
    oa = 'Counter_current_a4351338',
    ca = 'Counter_slash_6b744519',
    da = 'Counter_total_5eb7f52b',
    ua = 'Counter_reset_1c57af99',
    ma = 'Counter_resetIcon_5ecd9d54',
    pa = h(function () {
        const e = M.resolve('strings'),
            t = M.resolve('intl'),
            a = Yt(),
            s = a.hasFilter();
        re();
        const { model: l } = Rt();
        return _.jsxs('div', {
            className: na,
            children: [
                e.readOrEmpty('dialogs.selectVehicle.counter'),
                s &&
                    _.jsxs(_.Fragment, {
                        children: [
                            _.jsx('div', { className: oa, children: t.formatNumber('integral', l.list().length) }),
                            _.jsx('div', { className: ca, children: e.readOrEmpty('common.common.slash') }),
                        ],
                    }),
                _.jsx('div', { className: da, children: t.formatNumber('integral', l.total()) }),
                s &&
                    _.jsx(ie, {
                        className: ua,
                        autoAlignContent: !1,
                        theme: ie.themes.secondary,
                        size: ie.sizes.extraSmall,
                        onClick: a.reset,
                        children: _.jsx('div', { className: ma }),
                    }),
            ],
        });
    }),
    ha = {
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
function _a({ value: e, ...t }) {
    return _.jsx(oe, { ...t, sprite: ha, path: 'hangar.playlists.icons', icon: e, className: t.className });
}
const fa = ne('IconContainer', 'Icon_container_83f4dd0e'),
    va = h(function (e) {
        const t = Ot(),
            a = Lt().model.byIdUnsafe(e.id);
        B(void 0 !== a, `Playlist with ${e.id} is not found`);
        const s = t.model.accumulateByIds(a.list).length;
        return a.list.length <= s
            ? null
            : _.jsx(ga, {
                  className: e.className,
                  classNames: e.classNames,
                  displayAmount: s,
                  size: e.size,
                  realAmountInPlaylist: a.list.length,
              });
    });
function ga(e) {
    var t, a;
    const s = M.resolve('strings'),
        l = s
            .readOrEmpty('playlists.validation.unavailable.title')
            .replace('{{display}}', e.displayAmount.toString())
            .replace('{{total}}', e.realAmountInPlaylist.toString()),
        r = H({ header: l, body: s.readOrEmpty('playlists.validation.unavailable.body') }),
        i = 'lg' === e.size ? 'alert_lg' : 'alert',
        n = 'lg' === e.size ? fa : 'div';
    return _.jsx(n, {
        ...r,
        className: f(null == (t = e.classNames) ? void 0 : t.container, e.className),
        children: _.jsx(_a, { className: null == (a = e.classNames) ? void 0 : a.icon, value: i }),
    });
}
const xa = (e) =>
        m.createElement(
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
            m.createElement(
                'g',
                { opacity: 0.8 },
                m.createElement('path', {
                    d: 'M6 18.9994C6.00022 19.5515 6.44784 19.9994 7 19.9994H17C17.5522 19.9994 17.9998 19.5515 18 18.9994V14.4994H19V19.2494C18.9999 19.7134 18.8153 20.1586 18.4873 20.4867C18.1591 20.8148 17.714 20.9994 17.25 20.9994H6.75C6.28596 20.9994 5.84086 20.8148 5.5127 20.4867C5.18465 20.1586 5.00011 19.7134 5 19.2494V14.4994H6V18.9994Z',
                    fill: '#0D0E10',
                }),
                m.createElement('path', {
                    d: 'M11.7002 4.08047C11.878 3.94714 12.122 3.94714 12.2998 4.08047L15.7998 6.70547C15.9256 6.79988 16 6.94759 16 7.10488V7.89492C15.9998 8.2993 15.5442 8.53603 15.2129 8.3041L13.1426 6.85488L13.0059 14.5521C13.0024 14.7382 12.8959 14.9073 12.7295 14.9906L11.7109 15.4994C11.3817 15.6641 10.9931 15.4281 10.9873 15.06L10.8574 6.85488L8.78711 8.3041C8.45578 8.53602 8.00017 8.29929 8 7.89492V7.10488C8.00005 6.94759 8.07438 6.79988 8.2002 6.70547L11.7002 4.08047Z',
                    fill: '#0D0E10',
                }),
            ),
            m.createElement(
                'g',
                { opacity: 0.9 },
                m.createElement('path', {
                    d: 'M6 17.9993C6.00001 18.5516 6.44771 18.9993 7 18.9993H17C17.5523 18.9993 18 18.5516 18 17.9993V13.4993H19V18.2493C19 18.7134 18.8154 19.1584 18.4873 19.4866C18.1591 19.8148 17.7141 19.9993 17.25 19.9993H6.75C6.28587 19.9993 5.84087 19.8148 5.5127 19.4866C5.18456 19.1584 5 18.7134 5 18.2493V13.4993H6V17.9993Z',
                    fill: 'url(#paint0_radial_111851_505989)',
                }),
                m.createElement('path', {
                    d: 'M6 17.9993C6.00001 18.5516 6.44771 18.9993 7 18.9993H17C17.5523 18.9993 18 18.5516 18 17.9993V13.4993H19V18.2493C19 18.7134 18.8154 19.1584 18.4873 19.4866C18.1591 19.8148 17.7141 19.9993 17.25 19.9993H6.75C6.28587 19.9993 5.84087 19.8148 5.5127 19.4866C5.18456 19.1584 5 18.7134 5 18.2493V13.4993H6V17.9993Z',
                    fill: 'url(#pattern0_111851_505989)',
                    fillOpacity: 0.8,
                }),
                m.createElement('path', {
                    d: 'M11.7002 3.08033C11.8779 2.94718 12.1221 2.94718 12.2998 3.08033L15.7998 5.70533C15.9255 5.79967 15.9999 5.9476 16 6.10475V6.89479C15.9998 7.29917 15.5442 7.5359 15.2129 7.30397L13.1426 5.85475L13.0059 13.552C13.0025 13.7381 12.8958 13.9072 12.7295 13.9905L11.7109 14.4993C11.3816 14.664 10.9931 14.428 10.9873 14.0598L10.8574 5.85475L8.78711 7.30397C8.45578 7.5359 8.00016 7.29917 8 6.89479V6.10475C8.00017 5.9476 8.07448 5.79967 8.2002 5.70533L11.7002 3.08033Z',
                    fill: 'url(#paint1_radial_111851_505989)',
                }),
                m.createElement('path', {
                    d: 'M11.7002 3.08033C11.8779 2.94718 12.1221 2.94718 12.2998 3.08033L15.7998 5.70533C15.9255 5.79967 15.9999 5.9476 16 6.10475V6.89479C15.9998 7.29917 15.5442 7.5359 15.2129 7.30397L13.1426 5.85475L13.0059 13.552C13.0025 13.7381 12.8958 13.9072 12.7295 13.9905L11.7109 14.4993C11.3816 14.664 10.9931 14.428 10.9873 14.0598L10.8574 5.85475L8.78711 7.30397C8.45578 7.5359 8.00016 7.29917 8 6.89479V6.10475C8.00017 5.9476 8.07448 5.79967 8.2002 5.70533L11.7002 3.08033Z',
                    fill: 'url(#pattern1_111851_505989)',
                    fillOpacity: 0.8,
                }),
            ),
            m.createElement(
                'defs',
                null,
                m.createElement(
                    'pattern',
                    { id: 'pattern0_111851_505989', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    m.createElement('use', {
                        xlinkHref: '#image0_111851_505989',
                        transform: 'matrix(0.0253256 0 0 0.0208333 -0.107815 0)',
                    }),
                ),
                m.createElement(
                    'pattern',
                    { id: 'pattern1_111851_505989', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    m.createElement('use', {
                        xlinkHref: '#image0_111851_505989',
                        transform: 'matrix(0.0253256 0 0 0.0208333 -0.107815 0)',
                    }),
                ),
                m.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_111851_505989',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(12 16.7494) rotate(180) scale(8.90909 4.12906)',
                    },
                    m.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    m.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                m.createElement(
                    'radialGradient',
                    {
                        id: 'paint1_radial_111851_505989',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientUnits: 'userSpaceOnUse',
                        gradientTransform: 'translate(12 16.7494) rotate(180) scale(8.90909 4.12906)',
                    },
                    m.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    m.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                m.createElement('image', {
                    id: 'image0_111851_505989',
                    width: 48,
                    height: 48,
                    preserveAspectRatio: 'none',
                    xlinkHref:
                        'data:image/png;base64,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',
                }),
            ),
        ),
    ba = (e) =>
        m.createElement(
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
            m.createElement(
                'g',
                { opacity: 0.8 },
                m.createElement('path', {
                    d: 'M6 18.999C6 19.5513 6.44771 19.999 7 19.999H17C17.5523 19.999 18 19.5513 18 18.999V14.499H19V19.249C19 19.713 18.8153 20.1581 18.4873 20.4863C18.1591 20.8145 17.7141 20.999 17.25 20.999H6.75C6.28587 20.999 5.84088 20.8145 5.5127 20.4863C5.18469 20.1581 5 19.713 5 19.249V14.499H6V18.999Z',
                    fill: '#0D0E10',
                }),
                m.createElement('path', {
                    d: 'M17.4688 5.1074C17.5632 5.00362 17.7316 5.0247 17.7979 5.14842L17.9043 5.34569C17.9637 5.45694 17.9559 5.59208 17.8848 5.69627L12.0205 14.289C11.8912 14.4784 11.6148 14.4873 11.4736 14.3066L7.63281 9.39256C7.55247 9.28976 7.5376 9.15 7.5957 9.03319L7.70508 8.81346C7.79981 8.62301 8.04473 8.56631 8.21387 8.6953L11.5117 11.2099C11.6515 11.3165 11.8496 11.2989 11.9678 11.1689L17.4688 5.1074Z',
                    fill: '#0D0E10',
                }),
            ),
            m.createElement(
                'g',
                { opacity: 0.9, filter: 'url(#filter0_d_111851_505985)' },
                m.createElement('path', {
                    d: 'M6 17.999C6 18.5513 6.44771 18.999 7 18.999H17C17.5523 18.999 18 18.5513 18 17.999V13.499H19V18.249C19 18.713 18.8153 19.1581 18.4873 19.4863C18.1591 19.8145 17.7141 19.999 17.25 19.999H6.75C6.28587 19.999 5.84088 19.8145 5.5127 19.4863C5.18469 19.1581 5 18.713 5 18.249V13.499H6V17.999Z',
                    fill: 'url(#paint0_radial_111851_505985)',
                }),
                m.createElement('path', {
                    d: 'M6 17.999C6 18.5513 6.44771 18.999 7 18.999H17C17.5523 18.999 18 18.5513 18 17.999V13.499H19V18.249C19 18.713 18.8153 19.1581 18.4873 19.4863C18.1591 19.8145 17.7141 19.999 17.25 19.999H6.75C6.28587 19.999 5.84088 19.8145 5.5127 19.4863C5.18469 19.1581 5 18.713 5 18.249V13.499H6V17.999Z',
                    fill: 'url(#pattern0_111851_505985)',
                    fillOpacity: 0.8,
                }),
                m.createElement('path', {
                    d: 'M17.4688 4.1074C17.5632 4.00362 17.7316 4.0247 17.7979 4.14842L17.9043 4.34569C17.9637 4.45694 17.9559 4.59208 17.8848 4.69627L12.0205 13.289C11.8912 13.4784 11.6148 13.4873 11.4736 13.3066L7.63281 8.39256C7.55247 8.28976 7.5376 8.15 7.5957 8.03319L7.70508 7.81346C7.79981 7.62301 8.04473 7.56631 8.21387 7.6953L11.5117 10.2099C11.6515 10.3165 11.8496 10.2989 11.9678 10.1689L17.4688 4.1074Z',
                    fill: 'url(#paint1_radial_111851_505985)',
                }),
                m.createElement('path', {
                    d: 'M17.4688 4.1074C17.5632 4.00362 17.7316 4.0247 17.7979 4.14842L17.9043 4.34569C17.9637 4.45694 17.9559 4.59208 17.8848 4.69627L12.0205 13.289C11.8912 13.4784 11.6148 13.4873 11.4736 13.3066L7.63281 8.39256C7.55247 8.28976 7.5376 8.15 7.5957 8.03319L7.70508 7.81346C7.79981 7.62301 8.04473 7.56631 8.21387 7.6953L11.5117 10.2099C11.6515 10.3165 11.8496 10.2989 11.9678 10.1689L17.4688 4.1074Z',
                    fill: 'url(#pattern1_111851_505985)',
                    fillOpacity: 0.8,
                }),
            ),
            m.createElement(
                'defs',
                null,
                m.createElement(
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
                    m.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                    m.createElement('feColorMatrix', {
                        in: 'SourceAlpha',
                        type: 'matrix',
                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                        result: 'hardAlpha',
                    }),
                    m.createElement('feOffset', { dy: 1 }),
                    m.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                    m.createElement('feColorMatrix', {
                        type: 'matrix',
                        values: '0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0627451 0 0 0 1 0',
                    }),
                    m.createElement('feBlend', {
                        mode: 'normal',
                        in2: 'BackgroundImageFix',
                        result: 'effect1_dropShadow_111851_505985',
                    }),
                    m.createElement('feBlend', {
                        mode: 'normal',
                        in: 'SourceGraphic',
                        in2: 'effect1_dropShadow_111851_505985',
                        result: 'shape',
                    }),
                ),
                m.createElement(
                    'pattern',
                    { id: 'pattern0_111851_505985', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    m.createElement('use', {
                        xlinkHref: '#image0_111851_505985',
                        transform: 'matrix(0.023747 0 0 0.0208333 -0.0699282 0)',
                    }),
                ),
                m.createElement(
                    'pattern',
                    { id: 'pattern1_111851_505985', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    m.createElement('use', {
                        xlinkHref: '#image0_111851_505985',
                        transform: 'matrix(0.023747 0 0 0.0208333 -0.0699282 0)',
                    }),
                ),
                m.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_111851_505985',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-6.93695 6.47435 0.654517 0.610869 13.4895 9.08247)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    m.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    m.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                m.createElement(
                    'radialGradient',
                    {
                        id: 'paint1_radial_111851_505985',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-6.93695 6.47435 0.654517 0.610869 13.4895 9.08247)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    m.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    m.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                m.createElement('image', {
                    id: 'image0_111851_505985',
                    width: 48,
                    height: 48,
                    preserveAspectRatio: 'none',
                    xlinkHref:
                        'data:image/png;base64,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',
                }),
            ),
        ),
    ya = {
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
    Ca = M.resolve('strings'),
    Na = function (e) {
        const [t, a] = m.useState('copy'),
            s = ce(),
            l = H({
                header: Ca.readOrEmpty('playlists.share.copy_button.title'),
                body: Ca.readOrEmpty('playlists.share.copy_button.body'),
            }),
            r = re();
        return _.jsxs('div', {
            ...l,
            'data-test-id': 'copyButton',
            className: f(ya.base, ya[`base__${t}Status`], e.disabled ? ya.base__disabled : ya.base__enabled),
            onClick: (t) => {
                if ((l.onClick(), e.disabled)) return;
                r.play('click', { target: 'vehicle:playlists:copy_button', original: t });
                const i = e.onCopy();
                'string' == typeof i &&
                    de(i)
                        .then((e) => {
                            (e ? a('copied') : console.error('Write to clipboard has been failure'),
                                s.run(() => a('copy'), 1e3));
                        })
                        .catch((e) => console.error(e));
            },
            onMouseEnter: (t) => {
                (l.onMouseEnter(t),
                    e.disabled || r.play('mouse-enter', { target: 'vehicle:playlists:copy_button', original: t }));
            },
            children: [
                _.jsx(xa, { className: f(ya.icon, ya.icon__export) }),
                _.jsx(ba, { className: f(ya.icon, ya.icon__exportDone) }),
            ],
        });
    },
    ja = (e) =>
        m.createElement(
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
            m.createElement(
                'g',
                { opacity: 0.8 },
                m.createElement('path', {
                    d: 'M9.99805 8H5.00195L5 20H17V17H17.9961V19.5C17.9961 20.6045 17.1045 20.9999 16 21H6C4.89543 21 3.99609 20.6046 3.99609 19.5L3.99805 8.5C3.99805 7.39543 4.89348 7 5.99805 7H9.99805V8Z',
                    fill: '#0D0E10',
                }),
                m.createElement('path', {
                    d: 'M18.002 9.56445L12 15.5L9 16L9.5 13L15.4375 7.00977L18.002 9.56445Z',
                    fill: '#0D0E10',
                }),
                m.createElement('path', {
                    d: 'M20.9609 6.61133L18.9492 8.49902L16.4307 5.89941L18.3965 4.05762L20.9609 6.61133Z',
                    fill: '#0D0E10',
                }),
            ),
            m.createElement(
                'g',
                { opacity: 0.9, filter: 'url(#filter0_d_111851_505977)' },
                m.createElement('path', {
                    d: 'M9.99805 7H5.00195L5 19H17V16H17.9961V18.5C17.9961 19.6045 17.1045 19.9999 16 20H6C4.89543 20 3.99609 19.6046 3.99609 18.5L3.99805 7.5C3.99805 6.39543 4.89348 6 5.99805 6H9.99805V7Z',
                    fill: 'url(#paint0_radial_111851_505977)',
                }),
                m.createElement('path', {
                    d: 'M9.99805 7H5.00195L5 19H17V16H17.9961V18.5C17.9961 19.6045 17.1045 19.9999 16 20H6C4.89543 20 3.99609 19.6046 3.99609 18.5L3.99805 7.5C3.99805 6.39543 4.89348 6 5.99805 6H9.99805V7Z',
                    fill: 'url(#pattern0_111851_505977)',
                    fillOpacity: 0.8,
                }),
                m.createElement('path', {
                    d: 'M18.002 8.56445L12 14.5L9 15L9.5 12L15.4375 6.00977L18.002 8.56445Z',
                    fill: 'url(#paint1_radial_111851_505977)',
                }),
                m.createElement('path', {
                    d: 'M18.002 8.56445L12 14.5L9 15L9.5 12L15.4375 6.00977L18.002 8.56445Z',
                    fill: 'url(#pattern1_111851_505977)',
                    fillOpacity: 0.8,
                }),
                m.createElement('path', {
                    d: 'M20.9609 5.61133L18.9492 7.49902L16.4307 4.89941L18.3965 3.05762L20.9609 5.61133Z',
                    fill: 'url(#paint2_radial_111851_505977)',
                }),
                m.createElement('path', {
                    d: 'M20.9609 5.61133L18.9492 7.49902L16.4307 4.89941L18.3965 3.05762L20.9609 5.61133Z',
                    fill: 'url(#pattern2_111851_505977)',
                    fillOpacity: 0.8,
                }),
            ),
            m.createElement(
                'defs',
                null,
                m.createElement(
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
                    m.createElement('feFlood', { floodOpacity: 0, result: 'BackgroundImageFix' }),
                    m.createElement('feColorMatrix', {
                        in: 'SourceAlpha',
                        type: 'matrix',
                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                        result: 'hardAlpha',
                    }),
                    m.createElement('feOffset', { dy: 1 }),
                    m.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                    m.createElement('feColorMatrix', {
                        type: 'matrix',
                        values: '0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0627451 0 0 0 1 0',
                    }),
                    m.createElement('feBlend', {
                        mode: 'normal',
                        in2: 'BackgroundImageFix',
                        result: 'effect1_dropShadow_111851_505977',
                    }),
                    m.createElement('feBlend', {
                        mode: 'normal',
                        in: 'SourceGraphic',
                        in2: 'effect1_dropShadow_111851_505977',
                        result: 'shape',
                    }),
                ),
                m.createElement(
                    'pattern',
                    { id: 'pattern0_111851_505977', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    m.createElement('use', {
                        xlinkHref: '#image0_111851_505977',
                        transform: 'matrix(0.0208333 0 0 0.020861 0 -0.000662862)',
                    }),
                ),
                m.createElement(
                    'pattern',
                    { id: 'pattern1_111851_505977', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    m.createElement('use', {
                        xlinkHref: '#image0_111851_505977',
                        transform: 'matrix(0.0208333 0 0 0.020861 0 -0.000662862)',
                    }),
                ),
                m.createElement(
                    'pattern',
                    { id: 'pattern2_111851_505977', patternContentUnits: 'objectBoundingBox', width: 1, height: 1 },
                    m.createElement('use', {
                        xlinkHref: '#image0_111851_505977',
                        transform: 'matrix(0.0208333 0 0 0.020861 0 -0.000662862)',
                    }),
                ),
                m.createElement(
                    'radialGradient',
                    {
                        id: 'paint0_radial_111851_505977',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    m.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    m.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                m.createElement(
                    'radialGradient',
                    {
                        id: 'paint1_radial_111851_505977',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    m.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    m.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                m.createElement(
                    'radialGradient',
                    {
                        id: 'paint2_radial_111851_505977',
                        cx: 0,
                        cy: 0,
                        r: 1,
                        gradientTransform: 'matrix(-8.40602 7.33326 0.793127 0.69191 14.2835 7.63523)',
                        gradientUnits: 'userSpaceOnUse',
                    },
                    m.createElement('stop', { offset: 6.20882e-10, stopColor: '#EDE6D9' }),
                    m.createElement('stop', { offset: 1, stopColor: '#C2C7CE' }),
                ),
                m.createElement('image', {
                    id: 'image0_111851_505977',
                    width: 48,
                    height: 48,
                    preserveAspectRatio: 'none',
                    xlinkHref:
                        'data:image/png;base64,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',
                }),
            ),
        ),
    wa = 'EditButton_e0942ef0',
    Ea = 'EditButton_icon_a08c89e9',
    Sa = M.resolve('strings');
function Ia({ id: e, className: t }) {
    const a = re(),
        s = ue(),
        l = H({
            header: Sa.readOrEmpty('playlists.edit_button.title'),
            body: Sa.readOrEmpty('playlists.edit_button.body'),
        });
    return _.jsx('div', {
        ...l,
        className: f(wa, t),
        'data-test-id': 'editButton',
        onClick: (t) => {
            (l.onClick(),
                a.play('click', { target: 'vehicle:playlists:edit_button', original: t }),
                s.push('/hangar/editVehiclePlaylists', { id: e }));
        },
        onMouseEnter: (e) => {
            (l.onMouseEnter(e), a.play('mouse-enter', { target: 'vehicle:playlists:edit_button', original: e }));
        },
        children: _.jsx(ja, { className: Ea }),
    });
}
const Aa = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_',
    ka = 65535;
function Pa(e) {
    if (0 === e.length) return kt('EMPTY_INPUT');
    const t = (function (e) {
            let t = e[0] ?? 0;
            for (let a = 0; a < e.length; a++) t = (t + e[a]) & ka;
            return t;
        })(e),
        a = new Uint8Array(5 + 5 * e.length);
    ((a[0] = t >>> 8), (a[1] = 255 & t), (a[2] = 1));
    let s = 5;
    for (let o = 0; o < e.length; o++) {
        let t = e[o];
        for (;;) {
            const e = 127 & t;
            if (((t >>>= 7), 0 === t)) {
                ((a[s] = e), s++);
                break;
            }
            ((a[s] = 128 | e), s++);
        }
    }
    ((a[3] = (s - 5) >>> 8), (a[4] = (s - 5) & 255));
    let l = '',
        r = 0n,
        i = 0;
    const n = a.slice(0, s);
    for (const o of n)
        for (r = (r << 8n) | BigInt(o), i += 8; i >= 6; ) {
            i -= 6;
            const e = Number((r >> BigInt(i)) & 0x3fn);
            ((l += Aa[e]), (r &= (1n << BigInt(i)) - 1n));
        }
    if (i > 0) {
        const e = 63 & Number(r << BigInt(6 - i));
        l += Aa[e];
    }
    return At(l);
}
const Va = 'Item_background_321cda1e',
    Da = 'Item_c5163bf',
    Ma = 'Item_base__selected_5f6fcc69',
    Ta = 'Item_button_8b3e738d',
    La = 'Item_selectedIcon_eb50b3a6',
    Ba = 'Item_content_db9841ac',
    Ua = 'Item_title_3edba705',
    za = 'Item_actions_8ac98f7',
    Oa = { container: 'Item_alert_31c28fa6', icon: 'Item_alertIcon_f872f769' },
    Xa = h(function (e) {
        const { playlist: t } = e,
            a = Lt(),
            s = me();
        return _.jsxs('div', {
            className: f(Da, a.model.currentId() === e.id && Ma),
            children: [
                _.jsx('div', { className: Va }),
                _.jsxs(pe, {
                    className: Ta,
                    onClick: () => {
                        (a.controls.select(e.id), s.close());
                    },
                    'data-test-id': `playlist-${t.title}`,
                    children: [
                        _.jsxs('span', {
                            className: Ba,
                            children: [
                                _.jsx(_a, { value: 'checked', className: La }),
                                _.jsx(he, { text: t.title, className: Ua }),
                                _.jsx(va, { id: e.id, classNames: Oa }),
                            ],
                        }),
                        _.jsxs('span', {
                            className: za,
                            onClick: (e) => e.stopPropagation(),
                            children: [
                                _.jsx(Na, {
                                    onCopy: function () {
                                        const e = Pa(t.list);
                                        return 'error' === e.type ? console.error(e.error) : e.value;
                                    },
                                    disabled: 0 === t.list.length,
                                }),
                                _.jsx(Ia, { id: e.id }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Ra = h(function (e) {
        const t = Lt().model.byId(e.id);
        return 'ok' === t.type && void 0 !== t.value ? _.jsx(Xa, { playlist: t.value, id: e.id }) : null;
    }),
    Ga = h(function () {
        const e = Lt(),
            t = me();
        return _.jsxs('div', {
            className: f(Da, !e.model.currentId() && Ma),
            children: [
                _.jsx('div', { className: Va }),
                _.jsx(pe, {
                    className: Ta,
                    onClick: () => {
                        (e.controls.select(void 0), t.close());
                    },
                    'data-test-id': 'playlist-AllVehicles',
                    children: _.jsxs('span', {
                        children: [
                            _.jsx(_a, { value: 'checked', className: La }),
                            M.resolve('strings').readOrEmpty('pages.titles.allVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    qa = 'Content_divider_b37223ef',
    Fa = 'Content_icon_4da9c1eb',
    Ha = 'Content_trigger_4b0aad5c',
    Za = 'Content_triggerText_2dc694b6',
    Ya = h(function () {
        const e = Lt().model.sortedIds();
        return _.jsxs('div', { children: [_.jsx(Ga, {}), e.map((e) => _.jsx(Ra, { id: e }, e))] });
    }),
    Qa = ne('Divider', qa),
    Ja = h(function (e) {
        const t = Lt(),
            a = M.resolve('strings'),
            [s, l] = _e('add'),
            r = e.asChild ? fe : pe;
        return _.jsxs(r, {
            className: Ha,
            'data-test-id': 'createPlaylist',
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            onClick: () => t.controls.create(),
            children: [
                _.jsx(fa, { className: Fa, children: _.jsx(_a, { value: s }) }),
                _.jsx('span', { className: Za, children: a.readOrEmpty('playlists.list.create') }),
            ],
        });
    }),
    Wa = function (e) {
        const t = Lt(),
            a = M.resolve('strings'),
            [s, l] = _e('import'),
            r = e.asChild ? fe : pe;
        return _.jsxs(r, {
            className: Ha,
            'data-test-id': 'importPlaylist',
            onClick: t.controls.openImport,
            onMouseEnter: () => l(!0),
            onMouseLeave: () => l(!1),
            children: [
                _.jsx(fa, { className: Fa, children: _.jsx(_a, { value: s }) }),
                _.jsx('span', { className: Za, children: a.readOrEmpty('playlists.imports.trigger') }),
            ],
        });
    },
    Ka = {
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
    $a = M.resolve('strings'),
    es = [25, 25],
    ts = { container: Ka.alert, icon: Ka.alertIcon },
    as = h(function () {
        const { api: e } = ve(),
            [t, a] = ge(e, es),
            { opened: s } = me();
        return (
            m.useEffect(() => {
                if (s) return xe(() => xe(e.recalculateContent));
            }, [s, e.recalculateContent]),
            _.jsx(be, {
                className: f(Ka.area, !t && Ka.area__begin, !a && Ka.area__end),
                classNames: { content: Ka.scrollContent },
                children: _.jsx(Ya, {}),
            })
        );
    });
function ss(e) {
    const t = me();
    return _.jsx(_a, { value: 'arrow_down', className: f(Ka.arrow, t.opened && Ka.arrow__opened, e.className) });
}
h(function (e) {
    const t = Ut();
    return t && t.model.enabled.get()
        ? _.jsx(ye.Portal, {
              position: 'bottom',
              ...e,
              children: _.jsx(Ce, {
                  children: _.jsxs(ye.Display, {
                      'data-name': 'playlist-dropdown-content',
                      className: Ka.popover,
                      children: [
                          _.jsx(ye.Tip, {}),
                          _.jsx('div', {
                              className: Ka.list,
                              children: _.jsxs(W, {
                                  children: [_.jsx(as, {}), _.jsx(Ne, { classNames: { base: Ka.bar } })],
                              }),
                          }),
                          _.jsx(Qa, {}),
                          _.jsxs('div', { className: Ka.triggers, children: [_.jsx(Ja, {}), _.jsx(Wa, {})] }),
                      ],
                  }),
              }),
          })
        : null;
});
const ls = h(function (e) {
    const t = e.limit ? jt(e.title, e.limit)[0] : e.title;
    return _.jsxs('div', {
        className: f(Ka.currentTitle, e.className),
        children: [
            _.jsx(he, { text: t, className: Ka.currentTitleText }),
            e.id && _.jsx(va, { classNames: ts, id: e.id, size: e.alertSize }),
        ],
    });
});
h(function (e) {
    const t = Ut(),
        a = null == t ? void 0 : t.model.current(),
        s = re(),
        l = H({ header: null == a ? void 0 : a.title, body: $a.readOrEmpty('playlists.trigger.explain') });
    if (!t || !1 === t.model.enabled.get()) return e.fallback;
    const r = e.asChild ? fe : 'div';
    return _.jsx(ye.Trigger, {
        children: (t) =>
            _.jsx(_.Fragment, {
                children: _.jsxs(r, {
                    ...t,
                    onMouseEnter: (e) => {
                        (null == l || l.onMouseEnter(e),
                            s.play('mouse-enter', { target: 'vehicle:playlists:dropdown_trigger', original: e }));
                    },
                    onClick: (e) => {
                        (null == l || l.onClick(),
                            s.play('click', { target: 'vehicle:playlists:dropdown_trigger', original: e }),
                            t.onClick(e));
                    },
                    onMouseLeave: null == l ? void 0 : l.onMouseLeave,
                    'data-name': 'playlist-dropdown-trigger',
                    'data-test-id': 'playlistDropdown',
                    className: f(Ka.trigger, e.className),
                    children: [
                        _.jsx(je, { children: e.children }),
                        a
                            ? _.jsx(ls, { limit: e.limit, id: a.id, title: a.title, alertSize: e.alertSize })
                            : _.jsx(ls, { title: $a.readOrEmpty('pages.titles.allVehicles') }),
                        _.jsx(ss, {}),
                    ],
                }),
            }),
    });
});
const rs = 'Item_background_321cda1e',
    is = 'Item_c5163bf',
    ns = 'Item_base__selected_5f6fcc69',
    os = 'Item_button_8b3e738d',
    cs = 'Item_selectedIcon_eb50b3a6',
    ds = h(function (e) {
        const { playlist: t } = e,
            a = Lt(),
            s = me(),
            l = H({ body: t.title }),
            [r, i] = jt(t.title, 20);
        return _.jsxs('div', {
            ...(i && l),
            className: f(is, a.model.currentId() === e.id && ns),
            children: [
                _.jsx('div', { className: rs }),
                _.jsx(pe, {
                    className: os,
                    onClick: () => {
                        (a.controls.select(e.id), s.close());
                    },
                    'data-test-id': `playlist-${r}`,
                    children: _.jsxs('span', { children: [_.jsx(_a, { value: 'checked', className: cs }), r] }),
                }),
            ],
        });
    }),
    us = h(function (e) {
        const t = Lt().model.byId(e.id);
        return 'ok' === t.type && void 0 !== t.value ? _.jsx(ds, { playlist: t.value, id: e.id }) : null;
    }),
    ms = h(function () {
        const e = Lt(),
            t = me(),
            { model: a, controls: s } = Rt();
        return _.jsxs('div', {
            className: f(is, a.isAllVehicles.get() && !e.model.currentId() && ns),
            children: [
                _.jsx('div', { className: rs }),
                _.jsx(pe, {
                    className: os,
                    onClick: () => {
                        (e.controls.select(void 0), s.setAllVehicles(!0), t.close());
                    },
                    'data-test-id': 'playlist-AllVehicles',
                    children: _.jsxs('span', {
                        children: [
                            _.jsx(_a, { value: 'checked', className: cs }),
                            M.resolve('strings').readOrEmpty('pages.titles.allSelectVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    ps = h(function () {
        const e = Lt(),
            t = me(),
            { model: a, controls: s } = Rt();
        return _.jsxs('div', {
            className: f(is, !a.isAllVehicles.get() && !e.model.currentId() && ns),
            children: [
                _.jsx('div', { className: rs }),
                _.jsx(pe, {
                    className: os,
                    onClick: () => {
                        (e.controls.select(void 0), s.setAllVehicles(!1), t.close());
                    },
                    'data-test-id': 'playlist-MyVehicles',
                    children: _.jsxs('span', {
                        children: [
                            _.jsx(_a, { value: 'checked', className: cs }),
                            M.resolve('strings').readOrEmpty('pages.titles.allVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    hs = {
        playlistTrigger: 'Dropdown_playlistTrigger_eb63ff3b',
        playlistTitle: 'Dropdown_playlistTitle_9fbceba2',
        popover: 'Dropdown_popover_bdce30be',
        scrollContent: 'Dropdown_scrollContent_7363dda3',
        bar: 'Dropdown_bar_2d94e05e',
        area__begin: 'Dropdown_area__begin_8a87ef04',
        area__end: 'Dropdown_area__end_ae66235b',
        list: 'Dropdown_list_41b8eefe',
        trigger: 'Dropdown_trigger_f754201d',
    },
    _s = [25, 25],
    fs = h(function () {
        const e = Lt().model.sortedIds();
        return _.jsxs('div', { children: [_.jsx(ms, {}), _.jsx(ps, {}), e.map((e) => _.jsx(us, { id: e }, e))] });
    }),
    vs = h(function () {
        const { api: e } = ve(),
            [t, a] = ge(e, _s),
            { opened: s } = me();
        return (
            m.useEffect(() => {
                if (s) return xe(() => xe(e.recalculateContent));
            }, [s, e.recalculateContent]),
            _.jsx(be, {
                className: f(hs.area, !t && hs.area__begin, !a && hs.area__end),
                classNames: { content: hs.scrollContent },
                children: _.jsx(fs, {}),
            })
        );
    }),
    gs = h(function (e) {
        const t = Ut(),
            a = null == t ? void 0 : t.model.current(),
            s = re(),
            l = M.resolve('strings'),
            { model: r } = Rt(),
            i = H({ header: null == a ? void 0 : a.title, body: l.readOrEmpty('playlists.trigger.explain') });
        if (!t || !1 === t.model.enabled.get()) return e.fallback;
        const n = e.asChild ? fe : 'div';
        return _.jsx(ye.Trigger, {
            children: (t) =>
                _.jsx(_.Fragment, {
                    children: _.jsxs(n, {
                        ...t,
                        onMouseEnter: (e) => {
                            (null == i || i.onMouseEnter(e),
                                s.play('mouse-enter', { target: 'vehicle:playlists:dropdown_trigger', original: e }));
                        },
                        onClick: (e) => {
                            (null == i || i.onClick(),
                                s.play('click', { target: 'vehicle:playlists:dropdown_trigger', original: e }),
                                t.onClick(e));
                        },
                        onMouseLeave: null == i ? void 0 : i.onMouseLeave,
                        'data-name': 'playlist-dropdown-trigger',
                        'data-test-id': 'playlistDropdown',
                        className: f(hs.trigger, e.className),
                        children: [
                            _.jsx(je, { children: e.children }),
                            a
                                ? _.jsx(ls, { limit: e.limit, id: a.id, title: a.title, alertSize: e.alertSize })
                                : _.jsx(ls, {
                                      title: l.readOrEmpty(
                                          r.isAllVehicles.get()
                                              ? 'pages.titles.allSelectVehicles'
                                              : 'pages.titles.allVehicles',
                                      ),
                                  }),
                            _.jsx(ss, {}),
                        ],
                    }),
                }),
        });
    }),
    xs = function () {
        return _.jsxs(ye, {
            children: [
                _.jsx(ye.Portal, {
                    position: 'bottom',
                    children: _.jsx(Ce, {
                        children: _.jsxs(ye.Display, {
                            'data-name': 'playlist-dropdown-content',
                            className: hs.popover,
                            children: [
                                _.jsx(ye.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                                _.jsx('div', {
                                    className: hs.list,
                                    children: _.jsxs(W, {
                                        children: [_.jsx(vs, {}), _.jsx(Ne, { classNames: { base: hs.bar } })],
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                _.jsx(gs, {
                    asChild: !0,
                    className: hs.playlistTrigger,
                    fallback: null,
                    limit: 15,
                    children: _.jsx(ie, { theme: 'secondary', classNames: { content: hs.playlistTitle } }),
                }),
            ],
        });
    },
    bs = {
        toggleContainer: 'Filters_toggleContainer_d9b9fbcd',
        typeToggle: 'Filters_typeToggle_e818e249',
        nationWrapper: 'Filters_nationWrapper_752636a8',
        nationIcon: 'Filters_nationIcon_f766f25f',
        toggle: 'Filters_toggle_3ee9f5ac',
        vehicleLevel: 'Filters_vehicleLevel_2598a7f7',
        specialsIcons: 'Filters_specialsIcons_94a8606c',
        specialsIcons__favorite: 'Filters_specialsIcons__favorite_8d12da90',
        search: 'Filters_search_54176870',
        inputField: 'Filters_inputField_8f369261',
        inputPlaceholder: 'Filters_inputPlaceholder_b010dc5a',
    },
    ys = ['favorite', 'premium', 'elite'];
function Cs(e) {
    return _.jsx('div', {
        className: f(bs.toggleContainer, e.className),
        children: at.map((e) =>
            _.jsx(
                Jt,
                {
                    tooltip: { header: e, body: Ye },
                    event: { field: lt.vehicleTypes, type: 'regular', value: e },
                    className: bs.typeToggle,
                    children: _.jsx(te, { type: e, size: te.sizes.x24x24 }),
                },
                e,
            ),
        ),
    });
}
function Ns(e) {
    return _.jsx('div', {
        className: f(bs.toggleContainer, e.className),
        children: e.orderedNations.map((e) =>
            _.jsx(
                Jt,
                {
                    tooltip: { header: e, body: Je },
                    event: { field: lt.nations, type: 'regular', value: e },
                    className: bs.toggle,
                    children: _.jsx('div', {
                        className: bs.nationWrapper,
                        children: _.jsx(ee, { className: bs.nationIcon, path: `flags.c_60x40.${e}` }),
                    }),
                },
                e,
            ),
        ),
    });
}
function js(e) {
    return _.jsx('div', {
        className: f(bs.toggleContainer, e.className),
        children: st.map((e) =>
            _.jsx(
                Jt,
                {
                    tooltip: { header: 'tier', body: Qe },
                    event: { field: lt.levels, type: 'regular', value: `level_${e}` },
                    className: bs.toggle,
                    children: _.jsx(se, { className: bs.vehicleLevel, value: e }),
                },
                e,
            ),
        ),
    });
}
function ws(e) {
    const t = $(`hangar.filter.special.${e.imagePath}`, `hangar.filter.special.${e.imagePath}_upscale`);
    return _.jsx(
        Jt,
        {
            tooltip: { header: e.special, body: e.special },
            event: { field: lt.specials, type: 'regular', value: e.special },
            className: bs.toggle,
            children: _.jsx(ee, {
                className: f(bs.specialsIcons, 'favorite' === e.special && bs.specialsIcons__favorite),
                path: t,
            }),
        },
        e.special,
    );
}
function Es(e) {
    return _.jsx('div', {
        className: f(bs.toggleContainer, e.className),
        children: ys.map((e) => _.jsx(ws, { special: e, imagePath: e }, e)),
    });
}
const Ss = h(function (e) {
        const t = _t(),
            a = M.resolve('strings'),
            s = t.model.searchName.get();
        function l(e) {
            e.keyCode !== Se.ESCAPE && e.stopPropagation();
        }
        return _.jsxs(we.Provider, {
            value: s,
            children: [
                _.jsx(ra, {}),
                _.jsxs(we.Decoration, {
                    className: f(bs.search, e.className),
                    children: [
                        _.jsx(we.Icon, { icon: we.icons.search }),
                        _.jsx(we.Field, {
                            ...e,
                            className: bs.inputField,
                            classNames: { placeholder: bs.inputPlaceholder },
                            maxLength: 50,
                            placeholderVisibility: Ee.value,
                            onKeyDown: l,
                            onKeyUp: l,
                            onChange: (e) => t.controls.search(e.target.value),
                            children: a.readOrEmpty('tank_carousel_filter.popover.label.searchNameVehicle'),
                        }),
                        s.length > 0 && _.jsx(we.ClearButton, {}),
                    ],
                }),
            ],
        });
    }),
    Is = 'top',
    As = 'bottom',
    ks = 'both',
    Ps = 'none';
const Vs = {
    base: 'Content_7ccb81a0',
    disabledOverlay: 'Content_disabledOverlay_a8908196',
    base__disabled: 'Content_base__disabled_da09528a',
    base__selected: 'Content_base__selected_da09528a',
    base__empty: 'Content_base__empty_da09528a',
};
function Ds({ children: e, selected: t, disabled: a, empty: s }) {
    return _.jsxs('div', {
        'data-name': 'Content',
        className: f(Vs.base, s && Vs.base__empty, t && Vs.base__selected, a && Vs.base__disabled),
        children: [e, a && _.jsx('div', { className: Vs.disabledOverlay })],
    });
}
const Ms = 'Slot_977dd8f1',
    Ts = 'Slot_base__wrapper_ae3081b5',
    Ls = 'Slot_base__disabled_334cc10f',
    Bs = 'Slot_base__empty_d386066c',
    Us = 'Slot_content_1a27c8cf',
    zs = 'Slot_base__active_71f19f5c',
    Os = 'Slot_base__selected_71f19f5c',
    Xs = 'Slot_selected_6e9f21df',
    Rs = 'Slot_selected__border_e2a17304';
function Gs({ children: e, selected: t = !1, disabled: a = !1, active: s, className: l, ...r }) {
    const i = a || void 0 === r.onClick;
    return _.jsx('div', {
        ...r,
        'data-name': 'Slot',
        className: f(Ms, s && zs, t && Os, a && Ls, i && Bs, Ts, l),
        children: _.jsxs('div', {
            className: Us,
            children: [
                _.jsx(Ds, { selected: t, disabled: a, empty: i, children: e }),
                t && _.jsx('div', { className: f(Xs, Rs) }),
                _.jsx('div', { className: Xs }),
            ],
        }),
    });
}
const qs = { ['54033']: 'alpha', ['50705']: 'alpha', ['51201']: 'super', ['56833']: 'super' },
    Fs = 'unsuitableToQueue';
function Hs(e, t, a) {
    return !(!e || 'disabled' === t || !a) && a.status !== Fs && a.maxBpScore > 0;
}
const Zs = {
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
    Ys = ne('VehicleName', {
        element: ke.Name,
        className: Zs.text,
        cva: { variants: { premium: { true: Zs.text__premium } } },
    });
function Qs({ statistic: e, vehicle: t, className: a, status: s }) {
    const l = M.resolve('views'),
        r = M.resolve('aliases'),
        i = M.resolve('strings'),
        n = Pe({
            resId: r.read((e) => e.hangar.shared.VehiclesStatistics('resId')),
            contentId: l.read((e) =>
                'paused' !== s
                    ? e.lobby.battle_pass.tooltips.VehiclePointsTooltipView('resId')
                    : e.lobby.battle_pass.tooltips.BattlePassOnPauseTooltipView('resId'),
            ),
            args: { intCD: null == t ? void 0 : t.vehicleId },
        });
    return _.jsxs('div', {
        className: f(Zs.battlePass, e.maxBpScore > 0 && Zs.battlePass__active, e.bpSpecial && Zs.battlePass__bonus, a),
        onMouseEnter: function (e) {
            null == n || n.onMouseEnter(e);
        },
        onMouseLeave: function (e) {
            null == n || n.onMouseLeave();
        },
        children: [
            _.jsxs('div', {
                className: Zs.bpPoints,
                children: [
                    _.jsx('div', { className: Zs.points, children: Ve.formatNumber('integral', e.bpProgress) }),
                    _.jsx('div', {
                        className: f(Zs.points, Zs.points__slash),
                        children: i.readOrEmpty('common.common.slash'),
                    }),
                    _.jsx('div', { className: Zs.points, children: Ve.formatNumber('integral', e.maxBpScore) }),
                    _.jsx('div', { className: Zs.bpShadow }),
                ],
            }),
            _.jsx('div', { className: Zs.bpIcon }),
        ],
    });
}
function Js({ statistic: e, elite: t, vehicle: a, selected: s, classNames: l, className: r }) {
    return _.jsxs('div', {
        className: f(Zs.details, r),
        children: [
            e &&
                _.jsx(ke.Prestige, {
                    level: e.prestigeLevel,
                    grade: e.prestigeGrade,
                    type: e.prestigeType,
                    direction: Me.left,
                    className: f(Zs.prestige, s && Zs.prestige__active, null == l ? void 0 : l.prestige),
                }),
            _.jsx(ke.Level, { className: f(Zs.text, Zs.text__level, null == l ? void 0 : l.level), value: a.level }),
            De(a.type) &&
                _.jsx(ke.Type, {
                    type: a.type,
                    premium: t || (null == e ? void 0 : e.elite),
                    size: ke.Type.sizes.x24x24,
                    className: null == l ? void 0 : l.type,
                }),
        ],
    });
}
function Ws({ vehicle: e, className: t, classNames: a }) {
    const s = qs[e.id],
        l = e.nationChangeAvailable,
        r = e.rent.leftTime > 0 || e.rent.leftWins > 0 || e.rent.leftBattles > 0;
    return _.jsxs('div', {
        className: f(
            Zs.identifier,
            Zs[`identifier__${s}`],
            l && Zs.identifier__changeNation,
            r && Zs.identifier__rent,
            t,
        ),
        children: [
            _.jsx(Ys, {
                className: null == a ? void 0 : a.name,
                premium: e.premium,
                children: _.jsx(Te, { className: Zs.truncatedName, text: e.shortName }),
            }),
            (s || l) &&
                _.jsx('div', {
                    className: f(
                        Zs.identifierIcon,
                        Zs[`identifierIcon__${s}`],
                        l && Zs.identifierIcon__changeNation,
                        null == a ? void 0 : a.icon,
                    ),
                }),
        ],
    });
}
h(function ({ vehicle: e, statistic: t, selected: a, doubleRow: s, ...l }) {
    const r = Ot(),
        i = r.model.bpState.active.get(),
        n = r.model.bpState.status.get();
    return _.jsxs('div', {
        ...l,
        className: f(Zs.base, s && Zs.base__double, l.className),
        children: [
            t && Hs(i, n, t) && _.jsx(Qs, { vehicle: e, statistic: t, status: n }),
            _.jsxs(ke, {
                className: Zs.info,
                children: [_.jsx(Js, { vehicle: e, statistic: t, selected: a }), _.jsx(Ws, { vehicle: e })],
            }),
        ],
    });
});
const Ks = {
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
    $s = {
        inactive: Ks.base__inactive,
        activating: Ks.base__activating,
        active: Ks.base__active,
        deactivating: Ks.base__deactivating,
    };
function el({ className: e, doubleRow: t, state: a = 'inactive', isCornerHidden: s = !1 }) {
    return 'inactive' === a
        ? null
        : _.jsxs('div', {
              className: f(Ks.base, a && $s[a], t && Ks.base__double, e),
              children: [
                  _.jsx('div', { className: Ks.glow }),
                  !s && _.jsx('div', { className: Ks.corner }),
                  _.jsx('div', { className: Ks.arrow }),
                  [Ks.triangle__1, Ks.triangle__2, Ks.triangle__3].map((e) =>
                      _.jsx('div', { className: f(Ks.triangle, e) }, e),
                  ),
              ],
          });
}
const tl = {
        wotPlus: 'Background_wotPlus_3cf6035a',
        crystal: 'Background_crystal_6112fa42',
        bpBonus: 'Background_bpBonus_86685469',
        flag: 'Background_flag_57525fcb',
        flag__active: 'Background_flag__active_de322c1b',
        crystal__limit: 'Background_crystal__limit_61072361',
        favorite: 'Background_favorite_d98f92cc',
        favorite__active: 'Background_favorite__active_7f14a6c7',
    },
    al = ne('Favorite', tl.favorite, { variants: { active: { true: tl.favorite__active } } });
function sl({ vehicle: e, selected: t, active: a, className: s }) {
    return _.jsx(ee, {
        className: f(tl.flag, t || (a && tl.flag__active), s),
        path: `hangar.carousel.cards.flags.x400x300.${E(e.nationId)}`,
        position: 'top left',
    });
}
h(function ({ vehicle: e, statistic: t, validBP: a, doubleRow: s, classNames: l }) {
    var r;
    const i = (null == (r = Ht()) ? void 0 : r.model.isCrystalEarnEnabled.get()) ?? !0,
        n =
            (Le((null == t ? void 0 : t.numberOfCrystalEarned) ?? [], 1) ?? 0) <=
            (Le((null == t ? void 0 : t.numberOfCrystalEarned) ?? [], 0) ?? 0),
        o = null == t ? void 0 : t.proBoostActive,
        c = i && e.crystalEarning,
        d = Be(o),
        u = m.useMemo(() => (o ? (!1 === d ? 'activating' : 'active') : d ? 'deactivating' : 'inactive'), [o, d]);
    return _.jsxs(_.Fragment, {
        children: [
            (null == t ? void 0 : t.fromWotPlus) &&
                _.jsx('div', { className: f(tl.wotPlus, null == l ? void 0 : l.wotPlus) }),
            _.jsx(el, { state: u, className: null == l ? void 0 : l.proBoostIcon, doubleRow: s, isCornerHidden: c }),
            c && _.jsx('div', { className: f(tl.crystal, n && tl.crystal__limit, null == l ? void 0 : l.crystal) }),
            (null == t ? void 0 : t.bpSpecial) &&
                a &&
                _.jsx('div', { className: f(tl.bpBonus, null == l ? void 0 : l.bpBonus) }),
        ],
    });
});
const ll = { base: 'Background_5a8b768e', vehicle: 'Background_vehicle_2886ef49' };
function rl({ vehicle: e, ...t }) {
    return _.jsxs('div', {
        ...t,
        className: ll.base,
        children: [
            _.jsx(sl, { vehicle: e }),
            _.jsx(Ue, { className: ll.vehicle, name: e.name }),
            _.jsx(al, { active: e.favorite }),
        ],
    });
}
const il = {
        base: 'Card_74e86576',
        overlay: 'Card_overlay_701a3ab4',
        content: 'Card_content_a6141b08',
        checkMark: 'Card_checkMark_ad3837d8',
        selectText: 'Card_selectText_c740c2a2',
        border: 'Card_border_e9cb9a85',
        info: 'Card_info_9b8bfdb4',
    },
    nl = il.border,
    ol = h(function ({ vehicleId: e, selected: t = !1, children: a, ...s }) {
        const l = bt().model.get(e),
            r = gt().model.get(e),
            i = re(),
            { controls: n } = Rt();
        if (!l) return _.jsx(Gs, { ...s });
        return _.jsxs(Gs, {
            ...s,
            className: f('vehicle-card', s.className),
            selected: t,
            'data-test-id': `vehicleCard-${e}`,
            onMouseEnter: function (e) {
                var t;
                (i.play('mouse-enter', { target: 'vehicle-card', original: e }),
                    null == (t = s.onMouseEnter) || t.call(s, e));
            },
            onMouseLeave: function (e) {
                var t;
                null == (t = s.onMouseLeave) || t.call(s, e);
            },
            onClick: function (t) {
                (i.play('click', { target: 'vehicle-card', original: t }), n.select(e));
            },
            children: [_.jsx(cl, { vehicle: l }), _.jsx(dl, { statistic: r, vehicle: l, selected: t })],
        });
    });
function cl(e) {
    const [t, a] = m.useState(!0),
        [, s] = m.useTransition();
    return (
        m.useEffect(() => {
            t && s(() => a(!1));
        }, [t]),
        t ? null : _.jsx(rl, { ...e })
    );
}
function dl({ vehicle: e, statistic: t, selected: a }) {
    const [s, l] = m.useState(!0),
        r = m.useRef(null),
        [, i] = m.useTransition(),
        n = M.resolve('strings');
    return (
        m.useEffect(() => {
            s && i(() => l(!1));
        }, [s]),
        s
            ? null
            : _.jsxs('div', {
                  ref: r,
                  className: f(il.base, !1),
                  children: [
                      _.jsx('div', {
                          className: il.content,
                          children: _.jsx(ul, { vehicle: e, selected: a, statistic: t }),
                      }),
                      _.jsxs('div', {
                          className: il.overlay,
                          children: [
                              _.jsx('div', { className: il.checkMark }),
                              _.jsx('div', {
                                  className: il.selectText,
                                  children: n.readOrEmpty('dialogs.selectVehicle.selectVehicle'),
                              }),
                          ],
                      }),
                  ],
              })
    );
}
function ul({ vehicle: e, selected: t, statistic: a }) {
    return _.jsxs(ke, {
        className: il.info,
        children: [_.jsx(Js, { vehicle: e, statistic: a, selected: t, elite: e.premium }), _.jsx(Ws, { vehicle: e })],
    });
}
const ml = {
    root: 'SelectVehicleList_root_ff751a81',
    content: 'SelectVehicleList_content_e4dca630',
    scroll: 'SelectVehicleList_scroll_1a4bf433',
    scrollWrapper: 'SelectVehicleList_scrollWrapper_908e61ab',
    scroll__top: 'SelectVehicleList_scroll__top_ff751a81',
    scroll__bottom: 'SelectVehicleList_scroll__bottom_ff751a81',
    scroll__both: 'SelectVehicleList_scroll__both_ff751a81',
    scrollContent: 'SelectVehicleList_scrollContent_bc2b29dc',
    scrollContent__empty: 'SelectVehicleList_scrollContent__empty_70f1132b',
    verticalBar: 'SelectVehicleList_verticalBar_af56e0e9',
    scrollbarBar__empty: 'SelectVehicleList_scrollbarBar__empty_d2148af8',
    card: 'SelectVehicleList_card_a6ec1778',
};
function pl({ children: e, ...t }) {
    return _.jsx('div', { ...t, className: ml.content, children: e });
}
const hl = { height: 105, row: 5 },
    _l = { medium: { height: 136 }, large: { height: 145, row: 6 }, extraLarge: { height: 183, row: 7 } },
    fl = h(function () {
        const { model: e } = Rt(),
            { api: t } = ve(),
            a = ze(hl, _l),
            s = Ae(a.height),
            [l, r] = ge(t),
            i = e.ids(),
            n = e.list(),
            o = (function (e, t, a) {
                const [s, l] = m.useState(0);
                return (
                    m.useLayoutEffect(() => {
                        function s() {
                            const s = e.getWrapperSize();
                            G(s) && l(Math.floor(s / t) * a);
                        }
                        const r = e.events.on('resizeHandled', s),
                            i = e.events.on('recalculateContent', s);
                        return () => {
                            (r(), i());
                        };
                    }, [e, t, a]),
                    s
                );
            })(t, s, a.row),
            c = a.row - (i.length % a.row),
            d = Math.max(0, o - i.length),
            u = i.length + (0 === d ? c : d);
        return (
            (function (e, t, a, s, l, r) {
                const i = m.useRef(null);
                m.useLayoutEffect(() => {
                    function r() {
                        const r = e.getWrapperSize(),
                            n = e.animationScroll.scrollPosition.get();
                        if (!r) return;
                        const o = a - Ae(1),
                            c = n,
                            d = n + r,
                            u = o * Math.floor(t / s),
                            m = u + o,
                            p = u - (Math.floor(r / o) / 2) * o;
                        if (u > c && m < d) return (i.current, void (i.current = l));
                        ((i.current = l), e.applyScroll(p, { immediate: !0 }));
                    }
                    return (
                        r(),
                        new Ie().add(e.events.on('resizeHandled', r)).add(e.events.on('recalculateContent', r)).dispose
                    );
                }, [t, e, a, s, r, l]);
            })(t, e.currentIndex(), s, a.row),
            m.useEffect(() => {
                const e = o >= i.length;
                (t.setDisabled(e), e && t.applyScroll(0, { immediate: !0 }));
            }, [t, o, i.length]),
            _.jsx(Oe, {
                api: t,
                elementHeight: s - Ae(1),
                direction: 'vertical',
                totalElements: u,
                wrappers: { Content: pl },
                renderScroll: (e) => {
                    return _.jsxs('div', {
                        className: f(
                            ml.scroll,
                            ml[`scroll__${((a = l), (s = r), a || s ? (a ? (s ? Ps : As) : Is) : ks)}`],
                        ),
                        children: [
                            _.jsx(be, {
                                ...e,
                                classNames: {
                                    wrapper: ml.scrollWrapper,
                                    content: f(ml.scrollContent, 0 === n.length && ml.scrollContent__empty),
                                },
                                children: e.children,
                            }),
                            !t.disabled && _.jsx(Ne, { classNames: { base: ml.verticalBar } }),
                        ],
                    });
                    var a, s;
                },
                itemsPerRow: a.row,
                renderElement: (t) =>
                    i.length <= t
                        ? _.jsx(Gs, { className: f(nl, ml.card), style: { height: `${s}px` } })
                        : _.jsx(
                              ol,
                              {
                                  vehicleId: i[t],
                                  selected: i[t] === e.currentVehicleCD(),
                                  className: f(nl, ml.card),
                                  style: { height: `${s}px` },
                              },
                              i[t] ?? t,
                          ),
            })
        );
    }),
    vl = 'SelectVehicle_empty_c4ad0e6f',
    gl = 'SelectVehicle_55964cab',
    xl = 'SelectVehicle_contentLeft_df8318cc',
    bl = 'SelectVehicle_listWrapper_7143d883',
    yl = 'SelectVehicle_category_47ad8ddc',
    Cl = 'SelectVehicle_divider_e3344f3e',
    Nl = 'SelectVehicle_divider__top_69824bd2',
    jl = 'SelectVehicle_emptyTitle_f13f5f32',
    wl = 'SelectVehicle_emptyDescription_3ea65b11',
    El = h(function () {
        const { model: e } = Rt(),
            t = 0 === e.list().length,
            a = _t(),
            s = a.model.computes.nations(),
            l = m.useMemo(
                () => ({
                    filters: a.model.filters,
                    search: a.model.searchName,
                    hasFilter: a.model.computes.hasFilters,
                    defaultFilters: a.model.computes.default,
                    change: a.controls.change,
                    reset: a.controls.reset,
                }),
                [a],
            ),
            r = M.resolve('strings'),
            i = H({
                header: r.readOrEmpty('tank_carousel_filter.tooltip.searchInput.header'),
                body: r.readOrEmpty('tank_carousel_filter.tooltip.searchInput.body').replace('%(count)d', String(50)),
            });
        return _.jsxs('div', {
            className: gl,
            children: [
                _.jsxs('div', {
                    className: xl,
                    children: [
                        _.jsxs(Zt.Provider, {
                            value: l,
                            children: [
                                _.jsx(xs, {}),
                                _.jsx(pa, {}),
                                _.jsx('div', { className: f(Cl, Nl) }),
                                _.jsx(J, { className: yl, path: 'tank_carousel_filter.popover.label.vehicleTypes' }),
                                _.jsx(Cs, {}),
                                _.jsx(J, { className: yl, path: 'tank_carousel_filter.popover.label.nations' }),
                                _.jsx(Ns, { orderedNations: s }),
                                _.jsx(J, { className: yl, path: 'tank_carousel_filter.popover.label.levels' }),
                                _.jsx(js, {}),
                                _.jsx(J, { className: yl, path: 'tank_carousel_filter.popover.label.specials' }),
                                _.jsx(Es, {}),
                            ],
                        }),
                        _.jsx('div', { className: Cl }),
                        _.jsx('div', { ...i, children: _.jsx(Ss, {}) }),
                    ],
                }),
                _.jsxs('div', {
                    className: bl,
                    children: [
                        _.jsx(W, { children: _.jsx(fl, {}) }),
                        t &&
                            _.jsxs('div', {
                                className: vl,
                                children: [
                                    _.jsx('div', {
                                        className: jl,
                                        children: r.readOrEmpty('playlists.empty_state.not_found.title'),
                                    }),
                                    _.jsx('div', {
                                        className: wl,
                                        children: r.readOrEmpty('playlists.empty_state.not_found.body'),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }),
    Sl = 'SelectVehicle_e71f7277',
    Il = 'SelectVehicle_title_20f4184a',
    Al = 'SelectVehicle_close_2b04c3e9',
    kl = h(function () {
        const { model: e } = Rt();
        return (
            Xe(Se.ESCAPE, Ge.closeView),
            _.jsxs('div', {
                className: Sl,
                children: [
                    _.jsx('div', { className: Il, children: e.title.get() }),
                    _.jsx(Re, { onClose: Ge.closeView, className: Al }),
                    _.jsx(El, {}),
                ],
            })
        );
    }),
    Pl = M.resolve('aliases');
He(
    new qe()
        .add(Fe)
        .addWithProps(vt, {
            options: { rootId: Pl.read((e) => e.select_vehicle.select_vehicle.VehiclesStatistics('resId')) },
        })
        .addWithProps(xt, {
            options: { rootId: Pl.read((e) => e.select_vehicle.select_vehicle.VehiclesInfo('resId')) },
        })
        .addWithProps(yt, {
            options: { rootId: Pl.read((e) => e.select_vehicle.select_vehicle.VehiclesInventory('resId')) },
        })
        .addWithProps(ht, {
            options: { rootId: Pl.read((e) => e.select_vehicle.select_vehicle.VehicleFilters('resId')) },
        })
        .addWithProps(Tt, {
            options: { rootId: Pl.read((e) => e.select_vehicle.select_vehicle.VehiclePlaylists('resId')) },
        })
        .addWithProps(zt, {
            options: { rootId: Pl.read((e) => e.select_vehicle.select_vehicle.VehiclesInventory('resId')) },
        })
        .add(Xt)
        .render(_.jsx(kl, {})),
    { fullScreen: !0 },
);
