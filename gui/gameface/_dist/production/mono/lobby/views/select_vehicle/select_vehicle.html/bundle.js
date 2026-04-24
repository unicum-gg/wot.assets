import {
    o as e,
    s as t,
    e as s,
    x as a,
    y as r,
    z as i,
    A as l,
    B as n,
    C as o,
    D as c,
    E as d,
    F as u,
    r as m,
    q as p,
    t as h,
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
    H as A,
    i as I,
    J as k,
    K as P,
    L as D,
    M as V,
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
    a0 as H,
    a1 as F,
    a2 as Z,
    a3 as Y,
    a4 as Q,
    a5 as J,
    a6 as W,
    a7 as K,
    a8 as $,
    a9 as ee,
    aa as te,
    ab as se,
    ac as ae,
    ad as re,
    b as ie,
    B as le,
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
    ay as Se,
    k as Ae,
    az as Ie,
    aA as ke,
    o as Pe,
    aB as De,
    aC as Ve,
    aD as Me,
    aE as Te,
    aF as Le,
    aG as Be,
    aH as Ue,
    aI as ze,
    aJ as Oe,
    aK as Xe,
    h as Re,
    C as Ge,
    aL as qe,
    U as He,
    l as Fe,
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
    st = [v.lightTank, v.mediumTank, v.heavyTank, v['AT-SPG'], v.SPG],
    at = g(1, 12, b),
    rt = 'vehicle_types',
    it = 'nations',
    lt = 'levels',
    nt = 'specials',
    ot = 'battle_pass',
    ct = { heavy_tank: j, medium_tank: N, light_tank: C, at_spg: y };
function dt(e, t) {
    return e === $e && t.status !== S.UNSUITABLE_TO_QUEUE && t.bpProgress < t.maxBpScore;
}
function ut(e, t, s, a) {
    switch (t) {
        case 'elite':
            return e.includes('premium') || (a && a.elite && !s.premium);
        case 'premium':
            return s.premium || (e.includes('elite') && a && a.elite);
        case 'bonus':
            return a && a.bonusMultiplier >= 2;
        case 'favorite':
            return s.favorite;
        case 'crystals':
            return s.crystalEarning;
        case 'rented':
            return !0;
        case 'canInstallAttachments':
            return s.canInstallAttachments;
        case 'own3DStyle':
            return a && a.own3DStyle;
        case 'event':
        case 'funRandom':
            return s.isSuitableVehicle;
        default:
            return !1;
    }
}
const mt = {
    [lt]: (e, t) => !e.levels || e.levels.includes(`level_${t.level}`),
    [it]: (e, t) => !e.nations || e.nations.includes(E(t.nationId)),
    [rt]: (e, t) => !e.vehicle_types || e.vehicle_types.includes(t.type),
};
function pt(e, t, s) {
    let a = !1;
    const r = e.specials ?? [];
    for (const i of r)
        if ('rented' !== i) {
            if (!ut(r, i, t, s)) return !1;
        } else a = !0;
    if (!a && w(t) && !s?.fromWotPlus) return !1;
    if (s && e.battle_pass && e.battle_pass.length > 0) for (const i of e.battle_pass) if (!dt(i, s)) return !1;
    for (const i of Object.keys(e)) if (i in mt && !mt[i](e, t)) return !1;
    return ((e, t) => {
        const s = A(t.role);
        let a = !1;
        for (const r of Object.keys(ct)) if (r in e && ((a = !0), e[r].some((e) => e.includes(s)))) return !0;
        return !a;
    })(e, t);
}
function ht(e, { shortName: t, fullName: s }) {
    const a = e.toLowerCase();
    return !(a.length > 0 && !t.toLowerCase().includes(a) && !s.toLowerCase().includes(a));
}
function _t(e, t, s) {
    const a = e[t] ?? [],
        r = { ...e };
    return ((r[t] = a.includes(s) ? a.filter((e) => e !== s) : [...a, s]), r[t].length > 0 || delete r[t], r);
}
function ft(e, t) {
    return 'regular' === t.type
        ? _t(e, t.field, t.value)
        : Object.keys(ct).reduce((e, s) => {
              const a = ct[s].find((e) => e.includes(t.role));
              return a
                  ? _t(e, s, ((i = a), 'at_spg' === (r = s) ? `role_ATSPG_${i}` : `role_${r[0].toUpperCase()}T_${i}`))
                  : e;
              var r, i;
          }, e);
}
function vt(e, t, s, a) {
    if (s.favorite !== a.favorite) return s.favorite ? -1 : 1;
    const r = e[E(s.nationId)] ?? 0,
        i = e[E(a.nationId)] ?? 0;
    if (r !== i) return r - i;
    const l = t[s.type] ?? 0,
        n = t[a.type] ?? 0;
    return l !== n
        ? l - n
        : s.level !== a.level
          ? s.level - a.level
          : s.premium !== a.premium
            ? s.premium
                ? 1
                : -1
            : s.shortName.localeCompare(a.shortName);
}
const [gt, xt] = I('FilterVehiclesProvider')(
        ({ observableModel: t, readByPath: s }) => {
            function a(e) {
                try {
                    return JSON.parse(e);
                } catch (t) {
                    return (console.error(t), {});
                }
            }
            const { text_search: r, ...i } = a(s('filters')),
                l = { ...t.primitives(['defaultFilters']) },
                n = k.structural(() => a(l.defaultFilters.get())),
                o = {
                    ...t.primitives(['carouselRowCount']),
                    filters: e.box(i, { deep: !1 }),
                    searchName: e.box(r?.[0] ?? ''),
                    nations: t.arrayClone('nationsOrder'),
                };
            return {
                ...o,
                computes: {
                    hasFilters: k.primitive(() => !P.structural(n(), o.filters.get()) || o.searchName.get().length > 0),
                    nations: () => o.nations.get(),
                    nationToIndex: k.shallow(() => o.nations.get().reduce((e, t, s) => ((e[t] = s), e), {})),
                    default: n,
                },
            };
        },
        ({ cleanup: e, model: a, externalModel: r }) => {
            const i = r.createCallback((e) => e, 'onSaveFilter');
            return (
                e(
                    t(() => {
                        var e, t;
                        ((e = a.filters.get()),
                            (t = a.searchName.get()),
                            i({ filters: JSON.stringify({ ...e, text_search: t.length > 0 ? [t] : void 0 }) }));
                    }),
                ),
                {
                    reset: s(() => {
                        (a.filters.set(a.computes.default()), a.searchName.set(''));
                    }),
                    search: s((e) => {
                        a.searchName.set(e);
                    }),
                    change: s((e) => {
                        a.filters.set(ft(a.filters.get(), e));
                    }),
                    carouselTypeChange: r.createCallback((e) => ({ rowCount: e }), 'onCarouselTypeChange'),
                }
            );
        },
    ),
    bt = [v.lightTank, v.mediumTank, v.heavyTank, v['AT-SPG'], v.SPG].reduce((e, t, s) => ((e[t] = s), e), {}),
    [yt, Ct] = I('VehicleStatisticsProvider')(({ observableModel: e }) => {
        const t = e.dict('statistics'),
            s = k.structural((e) => t.get(e));
        return { ids: k.primitive(() => t.keys), get: s };
    }),
    [Nt, jt] = I('VehiclesProvider')(
        ({ observableModel: e }) => {
            const t = { vehicles: e.dictRef('vehicles') };
            return {
                get: k.structural((e) => {
                    if (-1 === e) return;
                    const s = t.vehicles.get(e);
                    if (!s) return void console.error(`Error getting vehicle with id: ${e}`);
                    const a = (function (e) {
                        try {
                            const t = JSON.parse(e);
                            return ((t.shortName = t.shortName.replace(/<img.+\/>/, '')), t);
                        } catch (t) {
                            throw (console.error(`Error parsing JSON for element ${e}:`, t), t);
                        }
                    })(s);
                    return { ...a, imageKey: D(a.name) };
                }),
                has: k.primitive((e) => Boolean(t.vehicles.get(e))),
                ids: k.shallow(() => [...t.vehicles.keys.values()]),
                amount: k.primitive(() => t.vehicles.length),
                list: k.shallow(() => {
                    let e = [];
                    for (const [a, r] of t.vehicles.entries())
                        try {
                            e.push(JSON.parse(r.get()));
                        } catch (s) {
                            console.error(`Error parsing JSON for element ${a}:`, s);
                        }
                    return e;
                }),
            };
        },
        V,
        { useRequires: () => ({ statistics: Ct() }) },
    ),
    [wt, Et] = I('MyVehiclesProvider')(
        (e) => {
            const t = e.requires.statistic.model.ids,
                s = k.structural((s) => {
                    if (t().has(s)) return e.requires.vehicles.model.get(s);
                }),
                a = k.shallow(() => {
                    const s = [];
                    for (const a of t().values()) {
                        const t = e.requires.vehicles.model.get(a);
                        t ? s.push(t) : console.warn(`No vehicle with id: ${a}`);
                    }
                    return s;
                });
            return { get: s, getAll: a, amount: k.primitive(() => a().length), ids: t };
        },
        V,
        { useRequires: () => ({ vehicles: jt(), statistic: Ct() }) },
    ),
    St = M.resolve('strings');
function At(e, t, s = '...') {
    if (
        (B(
            t - s.length >= 0,
            `Incorrect tranticate config max(${t}) - rest.length(${s.length}) must be greater than 0`,
        ),
        e.length <= t)
    )
        return [e, !1];
    return [`${e.slice(0, t - s.length)}${s}`, !0];
}
const It = T(U + z),
    kt = () => `${Date.now().toString(16)}_${It(3)}`;
function Pt(e, t, s = 1) {
    const a = L(t, { count: s });
    return e.has(a) ? Pt(e, t, s + 1) : a;
}
function Dt(e = '', t = []) {
    return {
        title: '' !== e ? e : St.readOrEmpty('playlists.defaultName'),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
        list: t,
    };
}
const Vt = (e) => ({ type: 'ok', value: e }),
    Mt = (e, t) => ({ type: 'error', error: { tag: e, msg: t } }),
    Tt = 'delete',
    Lt = 'import',
    Bt = a({ title: l(), createdAt: r(c(), o(), n(0)), modifiedAt: r(c(), o(), n(0)), list: i(r(c(), o())) }),
    Ut = r(
        l(),
        d((e) => (e.length > 0 ? e : void 0)),
    ),
    [zt, Ot, { Context: Xt }] = I('PlaylistsProvider')(
        ({ requires: t, observableModel: s }) => {
            const a = s.dict('storage'),
                r = s.primitives(['selectedID', 'enabled', 'dirtyEdit']),
                i = t.filters.model.computes.default,
                l = {
                    vehicles: t.vehicles.model,
                    myVehicles: t.myVehicles.model,
                    enabled: r.enabled,
                    nationsOrder: t.filters.model.nations,
                    filters: e.box(i(), { deep: !1 }),
                    searchName: e.box('', { deep: !1 }),
                    edit: { initial: e.box(void 0, { deep: !1 }), dirty: r.dirtyEdit },
                },
                n = k.shallow(() => a.keys),
                o = k.primitive(() => u(Ut, r.selectedID.get())),
                c = k.structural((e) => {
                    try {
                        const t = a.get(e);
                        if (!t) return Vt(void 0);
                        const s = u(Bt, JSON.parse(t)),
                            r = new Set();
                        for (const e of s.list)
                            if (O[e]) {
                                const t = O[e].find((e) => Boolean(l.myVehicles.get(e.toString())));
                                r.add(t ?? e);
                            } else r.add(e);
                        return Vt({ ...s, list: [...r.values()] });
                    } catch (t) {
                        return (console.error(`Error getting playlist with ${e} id`, t), Mt('PARSE_ERROR', String(t)));
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
                    return R(t.myVehicles.model.getAll(), (t, s) => vt(e, bt, t, s));
                }),
                v = k.primitive((e) => {
                    const t = p(e),
                        s = x();
                    if (void 0 === t || 0 === t.list.length) return;
                    const a = new Set(t.list);
                    for (let r = 0; r < s.length; r += 1) {
                        const e = Number(s[r]?.id);
                        if (G(e) && a.has(e)) return r;
                    }
                }),
                g = k.primitive(() => !1 === P.structural(i(), l.filters.get()) || l.searchName.get().length > 0),
                x = k.shallow(() => {
                    const e = l.filters.get(),
                        s = f(),
                        a = l.searchName.get();
                    return s.filter((s) => {
                        if (!ht(a, s)) return !1;
                        const r = t.statistic.model.get(s.id);
                        return pt(e, s, r);
                    });
                }),
                b = k.primitive((e) => Boolean(t.statistic.model.get(e)?.elite)),
                y = k.shallow((e) => {
                    const s = t.vehicles.model.get(e);
                    return s?.imageKey;
                }),
                C = k.primitive(() => x().length),
                N = k.shallow(() => _()?.list.map(l.vehicles.get));
            return {
                ...l,
                current: _,
                titles: d,
                currentId: o,
                byIdUnsafe: m,
                byId: c,
                byIdFull: p,
                filtered: x,
                filteredAmount: C,
                defaultFilters: i,
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
            const a = t.createCallback(
                (e) => ({ id: e.id, data: JSON.stringify(e.initial), skipRedirect: e.skipRedirect }),
                'onCreate',
            );
            return {
                filters: q({
                    update: (t) => {
                        e.filters.set(ft(e.filters.get(), t));
                    },
                    reset: () => {
                        (e.filters.set(e.defaultFilters()), e.searchName.set(''));
                    },
                    search: (t) => e.searchName.set(t),
                    change: (t) => {
                        e.filters.set(ft(e.filters.get(), t));
                    },
                }),
                create: s((t) => {
                    const { id: s = kt(), vehicleIds: r = [], skipRedirect: i = !1 } = t ?? {};
                    a({ id: s, initial: Dt(Pt(e.titles(), 'playlists.defaultName'), r), skipRedirect: i });
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
                    s(() => ({ type: Lt, params: JSON.stringify({ titles: Array.from(e.titles().values()) }) })),
                    'openImportConfirm',
                ),
                openDeleteConfirm: t.createCallback(
                    (e, t) => ({ id: e, type: Tt, params: JSON.stringify({ title: t }) }),
                    'openDeleteConfirm',
                ),
            };
        },
        { useRequires: () => ({ vehicles: jt(), myVehicles: Et(), filters: xt(), statistic: Ct() }) },
    ),
    Rt = () => m.useContext(Xt),
    [Gt, qt] = I('VehiclesInventoryProvider')(
        (s) => {
            const a = s.observableModel.primitives([
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
                r = e.box([], { deep: !1 }),
                i = { intCD: a.currentVehicleIntCD, inventoryId: a.currentVehicleInventoryId },
                l = k.shallow(() => {
                    const e = i.intCD.get();
                    return s.requires.vehicles.model.get(e);
                }),
                n = k.shallow((e) => {
                    if (void 0 === e) return;
                    const t = i.intCD.get();
                    return -1 === t ? s.requires.vehicles.model.get(e) : s.requires.vehicles.model.get(t);
                }),
                o = k.shallow(() => {
                    const e = i.intCD.get();
                    return s.requires.statistic.model.get(e);
                }),
                c = k.primitive(() => -1 !== i.intCD.get()),
                d = k.shallow((e) => H(e, (e) => u.get(String(e)))),
                u = s.requires.myVehicles.model,
                m = k.structural(() => s.requires.vehicles.model.list().filter((e) => e.rent.isRented)),
                h = k.primitive(() =>
                    s.requires.vehicles.model.list().some((e) => {
                        const t = s.requires.statistic.model.get(e.vehicleId);
                        if (t) return 'inPrebattle' === t.status;
                    }),
                ),
                _ = k.primitive(() => {
                    const e = [...u.getAll()],
                        t = s.requires.filters.model.computes.nationToIndex();
                    return (e.sort((e, s) => vt(t, bt, e, s)), e);
                });
            return (
                s.cleanup(
                    t(() => {
                        const e = s.requires.filters.model.filters.get(),
                            t = s.requires.filters.model.searchName.get(),
                            a = s.requires.playlists?.model.current(),
                            i = u.ids(),
                            l = (a ? d(a.list) : _()).filter(
                                (a) =>
                                    !1 !== i.has(a.id) && !!pt(e, a, s.requires.statistic.model.get(a.id)) && ht(t, a),
                            );
                        p(() => r.set(l));
                    }),
                ),
                {
                    vehicles: s.requires.myVehicles.model,
                    vehicle: n,
                    selectedVehicle: l,
                    isVehicleSelected: c,
                    selectedVehicleStatistics: o,
                    accumulateByIds: d,
                    rentVehiclesList: m,
                    prebattleModeActive: h,
                    current: {
                        intCD: a.currentVehicleIntCD,
                        inventoryId: a.currentVehicleInventoryId,
                        amount: k.primitive(() => r.get().length),
                        list: () => r.get(),
                        ids: k.shallow(() => r.get().map((e) => e.id)),
                        playlist: s.requires.playlists ? s.requires.playlists.model.current : () => {},
                    },
                    slots: {
                        free: a.freeSlotsCount,
                        price: { defaultValue: a.defaultSlotPrice, value: a.slotPrice, currency: a.slotPriceCurrency },
                        recover: a.recoverableVehicleCount,
                        discount: a.hasDiscont,
                    },
                    bpState: { active: a.bpEntityValid, status: a.bpStatus },
                    telecomRentStatus: a.telecomRentStatus,
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
        { useRequires: () => ({ myVehicles: Et(), vehicles: jt(), statistic: Ct(), filters: xt(), playlists: Rt() }) },
    ),
    [Ht, Ft] = I('SelectVehiclesProvider')(
        (s) => {
            const a = s.observableModel.primitives(['title', 'currentVehicleCD', 'isAllVehicles']),
                r = s.requires.vehicles.model,
                i = s.requires.statistic.model,
                l = e.box([], { deep: !1 }),
                n = k.shallow((e) => H(e, (e) => r.get(String(e)))),
                o = k.primitive(() => {
                    let e = r.list();
                    a.isAllVehicles.get() || (e = e.filter((e) => Boolean(i.get(e.id))));
                    const t = s.requires.filters.model.computes.nationToIndex();
                    return (e.sort((e, s) => vt(t, bt, e, s)), e);
                });
            s.cleanup(
                t(() => {
                    const e = s.requires.playlists?.model.current(),
                        t = (e ? n(e.list) : o()).filter(
                            (e) =>
                                !!pt(s.requires.filters.model.filters.get(), e, i.get(e.id)) &&
                                ht(s.requires.filters.model.searchName.get(), e),
                        );
                    p(() => l.set(t));
                }),
            );
            const c = k.shallow(() => l.get().map((e) => e.id)),
                d = k.primitive(() => a.currentVehicleCD.get().toString());
            return {
                title: a.title,
                currentVehicleCD: d,
                currentIndex: k.primitive(() => c().indexOf(d())),
                isAllVehicles: a.isAllVehicles,
                total: k.primitive(() => {
                    const e = s.requires.playlists?.model.current();
                    return e ? e.list.length : o().length;
                }),
                list: () => l.get(),
                ids: c,
            };
        },
        ({ externalModel: e }) => ({
            setAllVehicles: e.createCallback((e) => ({ value: e }), 'onIsAllVehiclesChange'),
            select: e.createCallback((e = '') => ({ id: e }), 'onSelect'),
        }),
        { useRequires: () => ({ vehicles: jt(), filters: xt(), statistic: Ct(), playlists: Ot() }) },
    ),
    [Zt, Yt, Qt] = I()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled', 'isInfiniteAmmo']),
    })),
    Jt = () => m.useContext(Qt.Context),
    Wt = m.createContext(void 0);
function Kt() {
    const e = m.useContext(Wt);
    if (!e) throw new Error("Can't call useFilters outside of FiltersContext Provider. Please wrap it.");
    return e;
}
const $t = {
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
    es = h(function (e) {
        const t = Kt(),
            s = t.tooltipHeaderMap ?? We,
            a = t.tooltipBodyMap ?? Ke,
            r = M.resolve('strings'),
            i = e.tooltip.body !== Qe ? r.readOrEmpty(`tank_carousel_filter.tooltip.${a[e.tooltip.body]}.body`) : '',
            l = F({ header: r.readOrEmpty(`${s[e.tooltip.header]}`), body: i });
        return _.jsx(ts, { ...e, tooltip: e.tooltip.body !== Qe && l });
    }),
    ts = h(function (e) {
        const t = Kt(),
            s = t.filters.get(),
            a = m.useMemo(() => {
                if ('role' === e.event.type) {
                    const t = e.event.role;
                    return Object.values(s).some((e) => e.some((e) => e.includes(t)));
                }
                return s[e.event.field]?.includes(e.event.value);
            }, [e.event, s]);
        return _.jsx(Z, {
            ...e.tooltip,
            theme: Q.primary,
            size: Y.extraSmall,
            className: f($t.toggle, a && $t.toggle__activated, e.className),
            activated: a,
            onClick: () => {
                (t.change(e.event), e.tooltip && e.tooltip.onClick());
            },
            children: e.children,
        });
    });
function ss(e) {
    return _.jsx('div', {
        className: f($t.toggleContainer, e.className),
        children: et.map((e) =>
            _.jsx(
                es,
                {
                    tooltip: { header: e, body: Ze },
                    event: { type: 'role', role: e },
                    children: _.jsx(se, { roleKey: e, size: se.sizes.x24x24, className: $t.icon }),
                },
                e,
            ),
        ),
    });
}
function as(e) {
    return _.jsx('div', {
        className: f($t.toggleContainer, $t.toggleContainer__type, e.className),
        children: st.map((e) =>
            _.jsx(
                es,
                {
                    tooltip: { header: e, body: Ye },
                    event: { field: rt, type: 'regular', value: e },
                    className: $t.toggle__type,
                    children: _.jsx(te, { type: e, size: te.sizes.x24x24 }),
                },
                e,
            ),
        ),
    });
}
function rs(e) {
    return _.jsx('div', {
        className: f($t.toggleContainer, e.className),
        children: e.orderedNations.map((e) =>
            _.jsx(
                es,
                {
                    tooltip: { header: e, body: Je },
                    event: { field: it, type: 'regular', value: e },
                    children: _.jsx('div', {
                        className: $t.nationWrapper,
                        children: _.jsx(ee, { className: $t.nationIcon, path: `flags.c_60x40.${e}` }),
                    }),
                },
                e,
            ),
        ),
    });
}
function is(e) {
    return _.jsx('div', {
        className: f($t.toggleContainer, e.className),
        children: at.map((e) =>
            _.jsx(
                es,
                {
                    tooltip: { header: 'tier', body: Qe },
                    event: { field: lt, type: 'regular', value: `level_${e}` },
                    children: _.jsx(ae, { className: $t.vehicleLevel, value: e }),
                },
                e,
            ),
        ),
    });
}
function ls(e) {
    const t = $(`hangar.filter.special.${e.imagePath}`, `hangar.filter.special.${e.imagePath}_upscale`);
    return _.jsx(
        es,
        {
            tooltip: { header: e.special, body: e.special },
            event: { field: nt, type: 'regular', value: e.special },
            children: _.jsx(ee, {
                className: f($t.specialsIcons, 'favorite' === e.special && $t.specialsIcons__favorite),
                path: t,
            }),
        },
        e.special,
    );
}
function ns() {
    const e = $('hangar.filter.special.isCommonProgression', 'hangar.filter.special.isCommonProgression_upscale');
    return _.jsx(es, {
        tooltip: { header: $e, body: $e },
        event: { field: ot, type: 'regular', value: $e },
        children: _.jsx(ee, { className: $t.specialsIcons, path: e }),
    });
}
const os = h(function (e) {
    const t = Kt(),
        s = t.specialIds ?? tt,
        a = qt(),
        r = a.model.bpState.active.get(),
        i = a.model.rentVehiclesList(),
        l = Jt()?.model,
        n = !l || l.isCrystalEarnEnabled.get(),
        o = !l || l.isDailyMultipliedXpEnabled.get(),
        c = s.filter((e) => (0 !== i.length || 'rented' !== e) && (o || 'bonus' !== e) && (n || 'crystals' !== e));
    return _.jsxs('div', {
        className: f($t.toggleContainer, e.className),
        children: [
            c.map((e) => _.jsx(ls, { imagePath: t.imagesMap?.[e] ?? e, special: e }, e)),
            r && _.jsx(ns, {}),
            e.children,
        ],
    });
});
function cs() {
    const e = re(),
        [t, s] = m.useState(!1);
    return (
        m.useEffect(() => {
            const a = e.inputRef.current;
            if (t || !a) return;
            (e.focus(), s(!0));
            const r = a.value.length;
            a.setSelectionRange(r, r);
            const i = (e) => {
                a && !a.contains(e.target) && s(!0);
            };
            return (document.addEventListener('mousedown', i), () => document.removeEventListener('mousedown', i));
        }, [e, t]),
        null
    );
}
m.memo(function (e) {
    return _.jsxs(ds, {
        ...e,
        className: e.className ?? $t.scroll,
        children: [
            _.jsx(J, { className: $t.category, path: 'tank_carousel_filter.popover.label.specials' }),
            _.jsx(os, { children: e.children }),
        ],
    });
});
const ds = m.memo(function (e) {
        return _.jsx(W, {
            children: _.jsxs(K, {
                className: e.className,
                barClassNames: e.barClassNames,
                scrollClassNames: e.scrollClassNames,
                children: [
                    _.jsx(J, { className: $t.category, path: 'tank_carousel_filter.popover.label.vehicleTypes' }),
                    _.jsx(as, {}),
                    _.jsx(J, { className: $t.category, path: 'tank_carousel_filter.popover.label.vehicleRole' }),
                    _.jsx(ss, {}),
                    _.jsx(J, { className: $t.category, path: 'tank_carousel_filter.popover.label.nations' }),
                    _.jsx(rs, { orderedNations: e.orderedNations }),
                    _.jsx(J, { className: $t.category, path: 'tank_carousel_filter.popover.label.levels' }),
                    _.jsx(is, {}),
                    e.children,
                ],
            }),
        });
    }),
    us = 'Counter_f01b3b30',
    ms = 'Counter_current_a4351338',
    ps = 'Counter_slash_6b744519',
    hs = 'Counter_total_5eb7f52b',
    _s = 'Counter_reset_1c57af99',
    fs = 'Counter_resetIcon_5ecd9d54',
    vs = h(function () {
        const e = M.resolve('strings'),
            t = M.resolve('intl'),
            s = Kt(),
            a = s.hasFilter();
        ie();
        const { model: r } = Ft();
        return _.jsxs('div', {
            className: us,
            children: [
                e.readOrEmpty('dialogs.selectVehicle.counter'),
                a &&
                    _.jsxs(_.Fragment, {
                        children: [
                            _.jsx('div', { className: ms, children: t.formatNumber('integral', r.list().length) }),
                            _.jsx('div', { className: ps, children: e.readOrEmpty('common.common.slash') }),
                        ],
                    }),
                _.jsx('div', { className: hs, children: t.formatNumber('integral', r.total()) }),
                a &&
                    _.jsx(le, {
                        className: _s,
                        autoAlignContent: !1,
                        theme: le.themes.secondary,
                        size: le.sizes.extraSmall,
                        onClick: s.reset,
                        children: _.jsx('div', { className: fs }),
                    }),
            ],
        });
    }),
    gs = {
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
function xs({ value: e, ...t }) {
    return _.jsx(oe, { ...t, sprite: gs, path: 'hangar.playlists.icons', icon: e, className: t.className });
}
const bs = ne('IconContainer', 'Icon_container_83f4dd0e'),
    ys = h(function (e) {
        const t = qt(),
            s = Ot().model.byIdUnsafe(e.id);
        B(void 0 !== s, `Playlist with ${e.id} is not found`);
        const a = t.model.accumulateByIds(s.list).length;
        return s.list.length <= a
            ? null
            : _.jsx(Cs, {
                  className: e.className,
                  classNames: e.classNames,
                  displayAmount: a,
                  size: e.size,
                  realAmountInPlaylist: s.list.length,
              });
    });
function Cs(e) {
    const t = M.resolve('strings'),
        s = t
            .readOrEmpty('playlists.validation.unavailable.title')
            .replace('{{display}}', e.displayAmount.toString())
            .replace('{{total}}', e.realAmountInPlaylist.toString()),
        a = F({ header: s, body: t.readOrEmpty('playlists.validation.unavailable.body') }),
        r = 'lg' === e.size ? 'alert_lg' : 'alert',
        i = 'lg' === e.size ? bs : 'div';
    return _.jsx(i, {
        ...a,
        className: f(e.classNames?.container, e.className),
        children: _.jsx(xs, { className: e.classNames?.icon, value: r }),
    });
}
const Ns = (e) =>
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
    js = (e) =>
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
    ws = {
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
    Es = M.resolve('strings'),
    Ss = function (e) {
        const [t, s] = m.useState('copy'),
            a = ce(),
            r = F({
                header: Es.readOrEmpty('playlists.share.copy_button.title'),
                body: Es.readOrEmpty('playlists.share.copy_button.body'),
            }),
            i = ie();
        return _.jsxs('div', {
            ...r,
            'data-test-id': 'copyButton',
            className: f(ws.base, ws[`base__${t}Status`], e.disabled ? ws.base__disabled : ws.base__enabled),
            onClick: (t) => {
                if ((r.onClick(), e.disabled)) return;
                i.play('click', { target: 'vehicle:playlists:copy_button', original: t });
                const l = e.onCopy();
                'string' == typeof l &&
                    de(l)
                        .then((e) => {
                            (e ? s('copied') : console.error('Write to clipboard has been failure'),
                                a.run(() => s('copy'), 1e3));
                        })
                        .catch((e) => console.error(e));
            },
            onMouseEnter: (t) => {
                (r.onMouseEnter(t),
                    e.disabled || i.play('mouse-enter', { target: 'vehicle:playlists:copy_button', original: t }));
            },
            children: [
                _.jsx(Ns, { className: f(ws.icon, ws.icon__export) }),
                _.jsx(js, { className: f(ws.icon, ws.icon__exportDone) }),
            ],
        });
    },
    As = (e) =>
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
    Is = 'EditButton_e0942ef0',
    ks = 'EditButton_icon_a08c89e9',
    Ps = M.resolve('strings');
function Ds({ id: e, className: t }) {
    const s = ie(),
        a = ue(),
        r = F({
            header: Ps.readOrEmpty('playlists.edit_button.title'),
            body: Ps.readOrEmpty('playlists.edit_button.body'),
        });
    return _.jsx('div', {
        ...r,
        className: f(Is, t),
        'data-test-id': 'editButton',
        onClick: (t) => {
            (r.onClick(),
                s.play('click', { target: 'vehicle:playlists:edit_button', original: t }),
                a.push('/hangar/editVehiclePlaylists', { id: e }));
        },
        onMouseEnter: (e) => {
            (r.onMouseEnter(e), s.play('mouse-enter', { target: 'vehicle:playlists:edit_button', original: e }));
        },
        children: _.jsx(As, { className: ks }),
    });
}
const Vs = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';
const Ms = 'Item_background_5cb932c1',
    Ts = 'Item_c5163bf',
    Ls = 'Item_base__selected_5f6fcc69',
    Bs = 'Item_button_8b3e738d',
    Us = 'Item_selectedIcon_eb50b3a6',
    zs = 'Item_content_db9841ac',
    Os = 'Item_title_3edba705',
    Xs = 'Item_actions_63add2d',
    Rs = { container: 'Item_alert_31c28fa6', icon: 'Item_alertIcon_f872f769' },
    Gs = h(function (e) {
        const { playlist: t } = e,
            s = Ot(),
            a = me();
        return _.jsxs('div', {
            className: f(Ts, s.model.currentId() === e.id && Ls),
            children: [
                _.jsx('div', { className: Ms }),
                _.jsxs(pe, {
                    className: Bs,
                    onClick: () => {
                        (s.controls.select(e.id), a.close());
                    },
                    'data-test-id': `playlist-${t.title}`,
                    children: [
                        _.jsxs('span', {
                            className: zs,
                            children: [
                                _.jsx(xs, { value: 'checked', className: Us }),
                                _.jsx(he, { text: t.title, className: Os }),
                                _.jsx(ys, { id: e.id, classNames: Rs }),
                            ],
                        }),
                        _.jsxs('span', {
                            className: Xs,
                            onClick: (e) => e.stopPropagation(),
                            children: [
                                _.jsx(Ss, {
                                    onCopy: function () {
                                        const e = (function (e) {
                                            if (0 === e.length) return Mt('EMPTY_INPUT');
                                            const t = (function (e) {
                                                    let t = e[0] ?? 0;
                                                    for (let s = 0; s < e.length; s++) t = (t + e[s]) & 65535;
                                                    return t;
                                                })(e),
                                                s = new Uint8Array(5 + 5 * e.length);
                                            ((s[0] = t >>> 8), (s[1] = 255 & t), (s[2] = 1));
                                            let a = 5;
                                            for (let o = 0; o < e.length; o++) {
                                                let t = e[o];
                                                for (;;) {
                                                    const e = 127 & t;
                                                    if (((t >>>= 7), 0 === t)) {
                                                        ((s[a] = e), a++);
                                                        break;
                                                    }
                                                    ((s[a] = 128 | e), a++);
                                                }
                                            }
                                            ((s[3] = (a - 5) >>> 8), (s[4] = (a - 5) & 255));
                                            let r = '',
                                                i = 0n,
                                                l = 0;
                                            const n = s.slice(0, a);
                                            for (const o of n)
                                                for (i = (i << 8n) | BigInt(o), l += 8; l >= 6; ) {
                                                    l -= 6;
                                                    const e = Number((i >> BigInt(l)) & 0x3fn);
                                                    ((r += Vs[e]), (i &= (1n << BigInt(l)) - 1n));
                                                }
                                            if (l > 0) {
                                                const e = 63 & Number(i << BigInt(6 - l));
                                                r += Vs[e];
                                            }
                                            return Vt(r);
                                        })(t.list);
                                        return 'error' === e.type ? console.error(e.error) : e.value;
                                    },
                                    disabled: 0 === t.list.length,
                                }),
                                _.jsx(Ds, { id: e.id }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    qs = h(function (e) {
        const t = Ot().model.byId(e.id);
        return 'ok' === t.type && void 0 !== t.value ? _.jsx(Gs, { playlist: t.value, id: e.id }) : null;
    }),
    Hs = h(function () {
        const e = Ot(),
            t = me();
        return _.jsxs('div', {
            className: f(Ts, !e.model.currentId() && Ls),
            children: [
                _.jsx('div', { className: Ms }),
                _.jsx(pe, {
                    className: Bs,
                    onClick: () => {
                        (e.controls.select(void 0), t.close());
                    },
                    'data-test-id': 'playlist-AllVehicles',
                    children: _.jsxs('span', {
                        children: [
                            _.jsx(xs, { value: 'checked', className: Us }),
                            M.resolve('strings').readOrEmpty('pages.titles.allVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    Fs = 'Content_divider_f0c848b4',
    Zs = 'Content_icon_4da9c1eb',
    Ys = 'Content_trigger_4b0aad5c',
    Qs = 'Content_triggerText_2dc694b6',
    Js = h(function () {
        const e = Ot().model.sortedIds();
        return _.jsxs('div', { children: [_.jsx(Hs, {}), e.map((e) => _.jsx(qs, { id: e }, e))] });
    }),
    Ws = ne('Divider', Fs),
    Ks = h(function (e) {
        const t = Ot(),
            s = M.resolve('strings'),
            [a, r] = _e('add'),
            i = e.asChild ? fe : pe;
        return _.jsxs(i, {
            className: Ys,
            'data-test-id': 'createPlaylist',
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            onClick: () => t.controls.create(),
            children: [
                _.jsx(bs, { className: Zs, children: _.jsx(xs, { value: a }) }),
                _.jsx('span', { className: Qs, children: s.readOrEmpty('playlists.list.create') }),
            ],
        });
    }),
    $s = function (e) {
        const t = Ot(),
            s = M.resolve('strings'),
            [a, r] = _e('import'),
            i = e.asChild ? fe : pe;
        return _.jsxs(i, {
            className: Ys,
            'data-test-id': 'importPlaylist',
            onClick: t.controls.openImport,
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: [
                _.jsx(bs, { className: Zs, children: _.jsx(xs, { value: a }) }),
                _.jsx('span', { className: Qs, children: s.readOrEmpty('playlists.imports.trigger') }),
            ],
        });
    },
    ea = 'Dropdown_popover_b5203d93',
    ta = 'Dropdown_scrollContent_7363dda3',
    sa = 'Dropdown_bar_2d94e05e',
    aa = 'Dropdown_area_a34c2ecf',
    ra = 'Dropdown_area__begin_af756086',
    ia = 'Dropdown_area__end_3b89247a',
    la = 'Dropdown_list_41b8eefe',
    na = 'Dropdown_triggers_b8372e20',
    oa = 'Dropdown_currentTitle_11ba3707',
    ca = 'Dropdown_trigger_f754201d',
    da = 'Dropdown_currentTitleText_13099382',
    ua = 'Dropdown_alert_8195eae1',
    ma = 'Dropdown_alertIcon_61f05dd3',
    pa = 'Dropdown_arrow_5a21c825',
    ha = 'Dropdown_arrow__opened_ef9f7c1d',
    _a = M.resolve('strings'),
    fa = [25, 25],
    va = { container: ua, icon: ma },
    ga = h(function () {
        const { api: e } = ve(),
            [t, s] = ge(e, fa),
            { opened: a } = me();
        return (
            m.useEffect(() => {
                if (a) return xe(() => xe(e.recalculateContent));
            }, [a, e.recalculateContent]),
            _.jsx(be, { className: f(aa, !t && ra, !s && ia), classNames: { content: ta }, children: _.jsx(Js, {}) })
        );
    });
function xa(e) {
    const t = me();
    return _.jsx(xs, { value: 'arrow_down', className: f(pa, t.opened && ha, e.className) });
}
h(function (e) {
    const t = Rt();
    return t && t.model.enabled.get()
        ? _.jsx(ye.Portal, {
              position: 'bottom',
              ...e,
              children: _.jsx(Ce, {
                  children: _.jsxs(ye.Display, {
                      'data-name': 'playlist-dropdown-content',
                      className: ea,
                      children: [
                          _.jsx(ye.Tip, {}),
                          _.jsx('div', {
                              className: la,
                              children: _.jsxs(W, {
                                  children: [_.jsx(ga, {}), _.jsx(Ne, { classNames: { base: sa } })],
                              }),
                          }),
                          _.jsx(Ws, {}),
                          _.jsxs('div', { className: na, children: [_.jsx(Ks, {}), _.jsx($s, {})] }),
                      ],
                  }),
              }),
          })
        : null;
});
const ba = h(function (e) {
    const t = e.limit ? At(e.title, e.limit)[0] : e.title;
    return _.jsxs('div', {
        className: f(oa, e.className),
        children: [
            _.jsx(he, { text: t, className: da }),
            e.id && _.jsx(ys, { classNames: va, id: e.id, size: e.alertSize }),
        ],
    });
});
h(function (e) {
    const t = Rt(),
        s = t?.model.current(),
        a = ie(),
        r = F({ header: s?.title, body: _a.readOrEmpty('playlists.trigger.explain') });
    if (!t || !1 === t.model.enabled.get()) return e.fallback;
    const i = e.asChild ? fe : 'div';
    return _.jsx(ye.Trigger, {
        children: (t) =>
            _.jsx(_.Fragment, {
                children: _.jsxs(i, {
                    ...t,
                    onMouseEnter: (e) => {
                        (r?.onMouseEnter(e),
                            a.play('mouse-enter', { target: 'vehicle:playlists:dropdown_trigger', original: e }));
                    },
                    onClick: (e) => {
                        (r?.onClick(),
                            a.play('click', { target: 'vehicle:playlists:dropdown_trigger', original: e }),
                            t.onClick(e));
                    },
                    onMouseLeave: r?.onMouseLeave,
                    'data-name': 'playlist-dropdown-trigger',
                    'data-test-id': 'playlistDropdown',
                    className: f(ca, e.className),
                    children: [
                        _.jsx(je, { children: e.children }),
                        s
                            ? _.jsx(ba, { limit: e.limit, id: s.id, title: s.title, alertSize: e.alertSize })
                            : _.jsx(ba, { title: _a.readOrEmpty('pages.titles.allVehicles') }),
                        _.jsx(xa, {}),
                    ],
                }),
            }),
    });
});
const ya = 'Item_background_5cb932c1',
    Ca = 'Item_c5163bf',
    Na = 'Item_base__selected_5f6fcc69',
    ja = 'Item_button_8b3e738d',
    wa = 'Item_selectedIcon_eb50b3a6',
    Ea = h(function (e) {
        const { playlist: t } = e,
            s = Ot(),
            a = me(),
            r = F({ body: t.title }),
            [i, l] = At(t.title, 20);
        return _.jsxs('div', {
            ...(l && r),
            className: f(Ca, s.model.currentId() === e.id && Na),
            children: [
                _.jsx('div', { className: ya }),
                _.jsx(pe, {
                    className: ja,
                    onClick: () => {
                        (s.controls.select(e.id), a.close());
                    },
                    'data-test-id': `playlist-${i}`,
                    children: _.jsxs('span', { children: [_.jsx(xs, { value: 'checked', className: wa }), i] }),
                }),
            ],
        });
    }),
    Sa = h(function (e) {
        const t = Ot().model.byId(e.id);
        return 'ok' === t.type && void 0 !== t.value ? _.jsx(Ea, { playlist: t.value, id: e.id }) : null;
    }),
    Aa = h(function () {
        const e = Ot(),
            t = me(),
            { model: s, controls: a } = Ft();
        return _.jsxs('div', {
            className: f(Ca, s.isAllVehicles.get() && !e.model.currentId() && Na),
            children: [
                _.jsx('div', { className: ya }),
                _.jsx(pe, {
                    className: ja,
                    onClick: () => {
                        (e.controls.select(void 0), a.setAllVehicles(!0), t.close());
                    },
                    'data-test-id': 'playlist-AllVehicles',
                    children: _.jsxs('span', {
                        children: [
                            _.jsx(xs, { value: 'checked', className: wa }),
                            M.resolve('strings').readOrEmpty('pages.titles.allSelectVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    Ia = h(function () {
        const e = Ot(),
            t = me(),
            { model: s, controls: a } = Ft();
        return _.jsxs('div', {
            className: f(Ca, !s.isAllVehicles.get() && !e.model.currentId() && Na),
            children: [
                _.jsx('div', { className: ya }),
                _.jsx(pe, {
                    className: ja,
                    onClick: () => {
                        (e.controls.select(void 0), a.setAllVehicles(!1), t.close());
                    },
                    'data-test-id': 'playlist-MyVehicles',
                    children: _.jsxs('span', {
                        children: [
                            _.jsx(xs, { value: 'checked', className: wa }),
                            M.resolve('strings').readOrEmpty('pages.titles.allVehicles'),
                        ],
                    }),
                }),
            ],
        });
    }),
    ka = {
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
    Pa = [25, 25],
    Da = h(function () {
        const e = Ot().model.sortedIds();
        return _.jsxs('div', { children: [_.jsx(Aa, {}), _.jsx(Ia, {}), e.map((e) => _.jsx(Sa, { id: e }, e))] });
    }),
    Va = h(function () {
        const { api: e } = ve(),
            [t, s] = ge(e, Pa),
            { opened: a } = me();
        return (
            m.useEffect(() => {
                if (a) return xe(() => xe(e.recalculateContent));
            }, [a, e.recalculateContent]),
            _.jsx(be, {
                className: f(ka.area, !t && ka.area__begin, !s && ka.area__end),
                classNames: { content: ka.scrollContent },
                children: _.jsx(Da, {}),
            })
        );
    }),
    Ma = h(function (e) {
        const t = Rt(),
            s = t?.model.current(),
            a = ie(),
            r = M.resolve('strings'),
            { model: i } = Ft(),
            l = F({ header: s?.title, body: r.readOrEmpty('playlists.trigger.explain') });
        if (!t || !1 === t.model.enabled.get()) return e.fallback;
        const n = e.asChild ? fe : 'div';
        return _.jsx(ye.Trigger, {
            children: (t) =>
                _.jsx(_.Fragment, {
                    children: _.jsxs(n, {
                        ...t,
                        onMouseEnter: (e) => {
                            (l?.onMouseEnter(e),
                                a.play('mouse-enter', { target: 'vehicle:playlists:dropdown_trigger', original: e }));
                        },
                        onClick: (e) => {
                            (l?.onClick(),
                                a.play('click', { target: 'vehicle:playlists:dropdown_trigger', original: e }),
                                t.onClick(e));
                        },
                        onMouseLeave: l?.onMouseLeave,
                        'data-name': 'playlist-dropdown-trigger',
                        'data-test-id': 'playlistDropdown',
                        className: f(ka.trigger, e.className),
                        children: [
                            _.jsx(je, { children: e.children }),
                            s
                                ? _.jsx(ba, { limit: e.limit, id: s.id, title: s.title, alertSize: e.alertSize })
                                : _.jsx(ba, {
                                      title: r.readOrEmpty(
                                          i.isAllVehicles.get()
                                              ? 'pages.titles.allSelectVehicles'
                                              : 'pages.titles.allVehicles',
                                      ),
                                  }),
                            _.jsx(xa, {}),
                        ],
                    }),
                }),
        });
    }),
    Ta = function () {
        return _.jsxs(ye, {
            children: [
                _.jsx(ye.Portal, {
                    position: 'bottom',
                    children: _.jsx(Ce, {
                        children: _.jsxs(ye.Display, {
                            'data-name': 'playlist-dropdown-content',
                            className: ka.popover,
                            children: [
                                _.jsx(ye.Tip, { position: 'top', size: '80rem', offset: '120rem' }),
                                _.jsx('div', {
                                    className: ka.list,
                                    children: _.jsxs(W, {
                                        children: [_.jsx(Va, {}), _.jsx(Ne, { classNames: { base: ka.bar } })],
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                _.jsx(Ma, {
                    asChild: !0,
                    className: ka.playlistTrigger,
                    fallback: null,
                    limit: 15,
                    children: _.jsx(le, { theme: 'secondary', classNames: { content: ka.playlistTitle } }),
                }),
            ],
        });
    },
    La = 'Filters_toggleContainer_d9b9fbcd',
    Ba = 'Filters_typeToggle_e818e249',
    Ua = 'Filters_nationWrapper_752636a8',
    za = 'Filters_nationIcon_f766f25f',
    Oa = 'Filters_toggle_3ee9f5ac',
    Xa = 'Filters_vehicleLevel_2598a7f7',
    Ra = 'Filters_specialsIcons_94a8606c',
    Ga = 'Filters_specialsIcons__favorite_8d12da90',
    qa = 'Filters_search_54176870',
    Ha = 'Filters_inputField_8f369261',
    Fa = 'Filters_inputPlaceholder_b010dc5a',
    Za = ['favorite', 'premium', 'elite'];
function Ya(e) {
    return _.jsx('div', {
        className: f(La, e.className),
        children: st.map((e) =>
            _.jsx(
                es,
                {
                    tooltip: { header: e, body: Ye },
                    event: { field: rt, type: 'regular', value: e },
                    className: Ba,
                    children: _.jsx(te, { type: e, size: te.sizes.x24x24 }),
                },
                e,
            ),
        ),
    });
}
function Qa(e) {
    return _.jsx('div', {
        className: f(La, e.className),
        children: e.orderedNations.map((e) =>
            _.jsx(
                es,
                {
                    tooltip: { header: e, body: Je },
                    event: { field: it, type: 'regular', value: e },
                    className: Oa,
                    children: _.jsx('div', {
                        className: Ua,
                        children: _.jsx(ee, { className: za, path: `flags.c_60x40.${e}` }),
                    }),
                },
                e,
            ),
        ),
    });
}
function Ja(e) {
    return _.jsx('div', {
        className: f(La, e.className),
        children: at.map((e) =>
            _.jsx(
                es,
                {
                    tooltip: { header: 'tier', body: Qe },
                    event: { field: lt, type: 'regular', value: `level_${e}` },
                    className: Oa,
                    children: _.jsx(ae, { className: Xa, value: e }),
                },
                e,
            ),
        ),
    });
}
function Wa(e) {
    const t = $(`hangar.filter.special.${e.imagePath}`, `hangar.filter.special.${e.imagePath}_upscale`);
    return _.jsx(
        es,
        {
            tooltip: { header: e.special, body: e.special },
            event: { field: nt, type: 'regular', value: e.special },
            className: Oa,
            children: _.jsx(ee, { className: f(Ra, 'favorite' === e.special && Ga), path: t }),
        },
        e.special,
    );
}
function Ka(e) {
    return _.jsx('div', {
        className: f(La, e.className),
        children: Za.map((e) => _.jsx(Wa, { special: e, imagePath: e }, e)),
    });
}
const $a = h(function (e) {
        const t = xt(),
            s = M.resolve('strings'),
            a = t.model.searchName.get();
        function r(e) {
            e.keyCode !== Ae.ESCAPE && e.stopPropagation();
        }
        return _.jsxs(we.Provider, {
            value: a,
            children: [
                _.jsx(cs, {}),
                _.jsxs(we.Decoration, {
                    className: f(qa, e.className),
                    children: [
                        _.jsx(we.Icon, { icon: we.icons.search }),
                        _.jsx(we.Field, {
                            ...e,
                            className: Ha,
                            classNames: { placeholder: Fa },
                            maxLength: 50,
                            placeholderVisibility: Ee.value,
                            onKeyDown: r,
                            onKeyUp: r,
                            onChange: (e) => t.controls.search(e.target.value),
                            children: s.readOrEmpty('tank_carousel_filter.popover.label.searchNameVehicle'),
                        }),
                        a.length > 0 &&
                            _.jsx(we.ClearButton, {
                                onClick: () => {
                                    Se.tooltip.hideAll();
                                },
                            }),
                    ],
                }),
            ],
        });
    }),
    er = 'top',
    tr = 'bottom',
    sr = 'both',
    ar = 'none';
const rr = 'Content_7ccb81a0',
    ir = 'Content_disabledOverlay_a8908196',
    lr = 'Content_base__disabled_da09528a',
    nr = 'Content_base__selected_da09528a',
    or = 'Content_base__empty_da09528a';
function cr({ children: e, selected: t, disabled: s, empty: a }) {
    return _.jsxs('div', {
        'data-name': 'Content',
        className: f(rr, a && or, t && nr, s && lr),
        children: [e, s && _.jsx('div', { className: ir })],
    });
}
const dr = 'Slot_977dd8f1',
    ur = 'Slot_base__wrapper_ae3081b5',
    mr = 'Slot_base__disabled_334cc10f',
    pr = 'Slot_base__empty_d386066c',
    hr = 'Slot_content_1a27c8cf',
    _r = 'Slot_base__active_71f19f5c',
    fr = 'Slot_base__selected_71f19f5c',
    vr = 'Slot_selected_6e9f21df',
    gr = 'Slot_selected__border_e2a17304',
    xr = m.memo(function ({ children: e, selected: t = !1, disabled: s = !1, active: a, className: r, ...i }) {
        const l = s || void 0 === i.onClick;
        return _.jsx('div', {
            ...i,
            'data-name': 'Slot',
            className: f(dr, a && _r, t && fr, s && mr, l && pr, ur, r),
            children: _.jsxs('div', {
                className: hr,
                children: [
                    _.jsx(cr, { selected: t, disabled: s, empty: l, children: e }),
                    t && _.jsx('div', { className: f(vr, gr) }),
                    _.jsx('div', { className: vr }),
                ],
            }),
        });
    }),
    br = '54033',
    yr = '50705',
    Cr = '56833',
    Nr = '51201',
    jr = { [br]: 'alpha', [yr]: 'alpha', [Nr]: 'super', [Cr]: 'super' },
    wr = 'unsuitableToQueue';
function Er(e, t, s) {
    return !(!e || 'disabled' === t || !s) && s.status !== wr && s.maxBpScore > 0;
}
const Sr = {
        root: 'Information_root_6e8d4f26',
        base: 'Information_dd628d50',
        info: 'Information_info_b2948982',
        details: 'Information_details_e5340a0c',
        base__double: 'Information_base__double_6e8d4f26',
        text: 'Information_text_a2b2c19b',
        text__level: 'Information_text__level_e5a9014e',
        text__premium: 'Information_text__premium_741ebb2f',
        truncatedText: 'Information_truncatedText_ede7ae03',
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
        identifier: 'Information_identifier_1bcd619a',
        identifier__changeNation: 'Information_identifier__changeNation_665b13a2',
        identifier__alpha: 'Information_identifier__alpha_6e8d4f26',
        identifier__super: 'Information_identifier__super_46b1ed0d',
        identifier__rent: 'Information_identifier__rent_1fba5dce',
        identifierIcon: 'Information_identifierIcon_3636b34b',
        identifierIcon__alpha: 'Information_identifierIcon__alpha_ddf4d235',
        identifierIcon__super: 'Information_identifierIcon__super_34b8f5c2',
        identifierIcon__changeNation: 'Information_identifierIcon__changeNation_dfee83c8',
    },
    Ar = ne('VehicleName', {
        element: Pe.Name,
        className: Sr.text,
        cva: { variants: { premium: { true: Sr.text__premium } } },
    });
function Ir({ statistic: e, vehicle: t, className: s, status: a }) {
    const r = M.resolve('views'),
        i = M.resolve('aliases'),
        l = M.resolve('strings'),
        n = De({
            resId: i.read((e) => e.hangar.shared.VehiclesStatistics('resId')),
            contentId: r.read((e) =>
                'paused' !== a
                    ? e.lobby.battle_pass.tooltips.VehiclePointsTooltipView('resId')
                    : e.lobby.battle_pass.tooltips.BattlePassOnPauseTooltipView('resId'),
            ),
            args: { intCD: t?.vehicleId },
        });
    return _.jsxs('div', {
        className: f(Sr.battlePass, e.maxBpScore > 0 && Sr.battlePass__active, e.bpSpecial && Sr.battlePass__bonus, s),
        onMouseEnter: function (e) {
            n?.onMouseEnter(e);
        },
        onMouseLeave: function (e) {
            n?.onMouseLeave();
        },
        children: [
            _.jsxs('div', {
                className: Sr.bpPoints,
                children: [
                    _.jsx('div', { className: Sr.points, children: Ve.formatNumber('integral', e.bpProgress) }),
                    _.jsx('div', {
                        className: f(Sr.points, Sr.points__slash),
                        children: l.readOrEmpty('common.common.slash'),
                    }),
                    _.jsx('div', { className: Sr.points, children: Ve.formatNumber('integral', e.maxBpScore) }),
                    _.jsx('div', { className: Sr.bpShadow }),
                ],
            }),
            _.jsx('div', { className: Sr.bpIcon }),
        ],
    });
}
function kr({ statistic: e, elite: t, vehicle: s, selected: a, classNames: r, className: i }) {
    return _.jsxs('div', {
        className: f(Sr.details, i),
        children: [
            e &&
                _.jsx(Pe.Prestige, {
                    level: e.prestigeLevel,
                    grade: e.prestigeGrade,
                    type: e.prestigeType,
                    direction: Te.left,
                    className: f(Sr.prestige, a && Sr.prestige__active, r?.prestige),
                }),
            _.jsx(Pe.Level, { className: f(Sr.text, Sr.text__level, r?.level), value: s.level }),
            Me(s.type) &&
                _.jsx(Pe.Type, {
                    type: s.type,
                    premium: t || e?.elite,
                    size: Pe.Type.sizes.x24x24,
                    className: r?.type,
                }),
        ],
    });
}
function Pr({ vehicle: e, className: t, classNames: s }) {
    const a = jr[e.id],
        r = e.nationChangeAvailable,
        i = e.rent.leftTime > 0 || e.rent.leftWins > 0 || e.rent.leftBattles > 0;
    return _.jsxs('div', {
        className: f(
            Sr.identifier,
            Sr[`identifier__${a}`],
            r && Sr.identifier__changeNation,
            i && Sr.identifier__rent,
            t,
        ),
        children: [
            _.jsx(Ar, {
                className: s?.name,
                premium: e.premium,
                children: _.jsx(he, { className: Sr.truncatedText, text: e.shortName }),
            }),
            (a || r) &&
                _.jsx('div', {
                    className: f(
                        Sr.identifierIcon,
                        Sr[`identifierIcon__${a}`],
                        r && Sr.identifierIcon__changeNation,
                        s?.icon,
                    ),
                }),
        ],
    });
}
h(function ({ vehicle: e, statistic: t, selected: s, doubleRow: a, ...r }) {
    const i = qt(),
        l = i.model.bpState.active.get(),
        n = i.model.bpState.status.get();
    return _.jsxs('div', {
        ...r,
        className: f(Sr.base, a && Sr.base__double, r.className),
        children: [
            t && Er(l, n, t) && _.jsx(Ir, { vehicle: e, statistic: t, status: n }),
            _.jsxs(Pe, {
                className: Sr.info,
                children: [_.jsx(kr, { vehicle: e, statistic: t, selected: s }), _.jsx(Pr, { vehicle: e })],
            }),
        ],
    });
});
const Dr = {
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
    Vr = {
        inactive: Dr.base__inactive,
        activating: Dr.base__activating,
        active: Dr.base__active,
        deactivating: Dr.base__deactivating,
    };
function Mr({ className: e, doubleRow: t, state: s = 'inactive', isCornerHidden: a = !1 }) {
    return 'inactive' === s
        ? null
        : _.jsxs('div', {
              className: f(Dr.base, s && Vr[s], t && Dr.base__double, e),
              children: [
                  _.jsx('div', { className: Dr.glow }),
                  !a && _.jsx('div', { className: Dr.corner }),
                  _.jsx('div', { className: Dr.arrow }),
                  [Dr.triangle__1, Dr.triangle__2, Dr.triangle__3].map((e) =>
                      _.jsx('div', { className: f(Dr.triangle, e) }, e),
                  ),
              ],
          });
}
const Tr = 'Background_wotPlus_3cf6035a',
    Lr = 'Background_crystal_6112fa42',
    Br = 'Background_bpBonus_86685469',
    Ur = 'Background_flag_beb58b8',
    zr = 'Background_flag__active_de322c1b',
    Or = 'Background_crystal__limit_61072361',
    Xr = ne('Favorite', 'Background_favorite_d98f92cc', {
        variants: { active: { true: 'Background_favorite__active_7f14a6c7' } },
    });
function Rr({ vehicle: e, selected: t, active: s, className: a }) {
    return _.jsx(ee, {
        className: f(Ur, t || (s && zr), a),
        path: `hangar.carousel.cards.flags.x400x300.${E(e.nationId)}`,
        position: 'top left',
    });
}
h(function ({ vehicle: e, statistic: t, validBP: s, doubleRow: a, classNames: r }) {
    const i = Jt()?.model.isCrystalEarnEnabled.get() ?? !0,
        l = (Le(t?.numberOfCrystalEarned ?? [], 1) ?? 0) <= (Le(t?.numberOfCrystalEarned ?? [], 0) ?? 0),
        n = t?.proBoostActive,
        o = t?.fromWotPlus,
        c = i && e.crystalEarning && !o,
        d = Be(n),
        u = m.useMemo(() => (n ? (!1 === d ? 'activating' : 'active') : d ? 'deactivating' : 'inactive'), [n, d]);
    return _.jsxs(_.Fragment, {
        children: [
            o && _.jsx('div', { className: f(Tr, r?.wotPlus) }),
            _.jsx(Mr, { state: u, className: r?.proBoostIcon, doubleRow: a, isCornerHidden: c }),
            c && _.jsx('div', { className: f(Lr, l && Or, r?.crystal) }),
            t?.bpSpecial && s && _.jsx('div', { className: f(Br, r?.bpBonus) }),
        ],
    });
});
const Gr = 'Background_5a8b768e',
    qr = 'Background_vehicle_2886ef49';
function Hr({ vehicle: e, ...t }) {
    return _.jsxs('div', {
        ...t,
        className: Gr,
        children: [
            _.jsx(Rr, { vehicle: e }),
            _.jsx(Ue, { className: qr, name: e.name }),
            _.jsx(Xr, { active: e.favorite }),
        ],
    });
}
const Fr = 'Card_74e86576',
    Zr = 'Card_overlay_701a3ab4',
    Yr = 'Card_checkMark_ad3837d8',
    Qr = 'Card_selectText_c740c2a2',
    Jr = 'Card_info_9b8bfdb4',
    Wr = 'Card_border_e9cb9a85',
    Kr = h(function ({ vehicleId: e, selected: t = !1, children: s, ...a }) {
        const r = jt().model.get(e),
            i = Ct().model.get(e),
            l = ie(),
            { controls: n } = Ft();
        if (!r) return _.jsx(xr, { ...a });
        return _.jsxs(xr, {
            ...a,
            className: f('vehicle-card', a.className),
            selected: t,
            'data-test-id': `vehicleCard-${e}`,
            onMouseEnter: function (e) {
                (l.play('mouse-enter', { target: 'vehicle-card', original: e }), a.onMouseEnter?.(e));
            },
            onMouseLeave: function (e) {
                a.onMouseLeave?.(e);
            },
            onClick: function (t) {
                (l.play('click', { target: 'vehicle-card', original: t }), n.select(e));
            },
            children: [_.jsx($r, { vehicle: r }), _.jsx(ti, { statistic: i, vehicle: r, selected: t })],
        });
    });
function $r(e) {
    const [t, s] = m.useState(!0),
        [, a] = m.useTransition();
    return (
        m.useEffect(() => {
            t && a(() => s(!1));
        }, [t]),
        t ? null : _.jsx(Hr, { ...e })
    );
}
const ei = M.resolve('strings');
function ti({ vehicle: e, statistic: t, selected: s }) {
    const [a, r] = m.useState(!0),
        [, i] = m.useTransition();
    return (
        m.useEffect(() => {
            a && i(() => r(!1));
        }, [a]),
        a
            ? null
            : _.jsxs('div', {
                  className: Fr,
                  children: [
                      _.jsx(si, { vehicle: e, selected: s, statistic: t }),
                      _.jsxs('div', {
                          className: Zr,
                          children: [
                              _.jsx('div', { className: Yr }),
                              _.jsx('div', {
                                  className: Qr,
                                  children: ei.readOrEmpty('dialogs.selectVehicle.selectVehicle'),
                              }),
                          ],
                      }),
                  ],
              })
    );
}
function si({ vehicle: e, selected: t, statistic: s }) {
    return _.jsxs(Pe, {
        className: Jr,
        children: [_.jsx(kr, { vehicle: e, statistic: s, selected: t, elite: e.premium }), _.jsx(Pr, { vehicle: e })],
    });
}
const ai = {
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
function ri({ children: e, ...t }) {
    const { api: s } = ve();
    return _.jsx(Xe, { ...t, api: s, className: ai.content, children: e });
}
const ii = { height: 105, row: 5 },
    li = { medium: { height: 136 }, large: { height: 145, row: 6 }, extraLarge: { height: 183, row: 7 } },
    ni = h(function () {
        const { model: e } = Ft(),
            { api: t } = ve(),
            s = ze(ii, li),
            a = ke(s.height),
            [r, i] = ge(t),
            l = e.ids(),
            n = e.list(),
            o = (function (e, t, s) {
                const [a, r] = m.useState(0);
                return (
                    m.useLayoutEffect(() => {
                        function a() {
                            const a = e.getWrapperSize();
                            G(a) && r(Math.floor(a / t) * s);
                        }
                        const i = e.events.on('resizeHandled', a),
                            l = e.events.on('recalculateContent', a);
                        return () => {
                            (i(), l());
                        };
                    }, [e, t, s]),
                    a
                );
            })(t, a, s.row),
            c = s.row - (l.length % s.row),
            d = Math.max(0, o - l.length),
            u = l.length + (0 === d ? c : d);
        (!(function (e, t, s, a, r, i) {
            const l = m.useRef(null);
            m.useLayoutEffect(() => {
                function i() {
                    const i = e.getWrapperSize(),
                        n = e.animationScroll.scrollPosition.get();
                    if (!i) return;
                    const o = s - ke(1),
                        c = n,
                        d = n + i,
                        u = o * Math.floor(t / a),
                        m = u + o,
                        p = u - (Math.floor(i / o) / 2) * o;
                    u > c && m < d
                        ? (l.current && r && 0 !== l.current - r && e.applyScroll(p, { immediate: !0 }),
                          (l.current = r))
                        : ((l.current = r), e.applyScroll(p, { immediate: !0 }));
                }
                return (
                    i(),
                    new Ie().add(e.events.on('resizeHandled', i)).add(e.events.on('recalculateContent', i)).dispose
                );
            }, [t, e, s, a, i, r]);
        })(t, e.currentIndex(), a, s.row, l.length),
            m.useEffect(() => {
                const e = o >= l.length;
                (t.setDisabled(e), e && t.applyScroll(0, { immediate: !0 }));
            }, [t, o, l.length]));
        const p = m.useMemo(() => ({ height: `${a}px` }), [a]);
        return _.jsx(Oe, {
            api: t,
            elementHeight: a - ke(1),
            direction: 'vertical',
            totalElements: u,
            wrappers: { Content: ri },
            renderScroll: (e) => {
                return _.jsxs('div', {
                    className: f(
                        ai.scroll,
                        ai[`scroll__${((s = r), (a = i), s || a ? (s ? (a ? ar : tr) : er) : sr)}`],
                    ),
                    children: [
                        _.jsx(be, {
                            ...e,
                            classNames: {
                                wrapper: ai.scrollWrapper,
                                content: f(ai.scrollContent, 0 === n.length && ai.scrollContent__empty),
                            },
                            children: e.children,
                        }),
                        !t.disabled && _.jsx(Ne, { classNames: { base: ai.verticalBar } }),
                    ],
                });
                var s, a;
            },
            itemsPerRow: s.row,
            renderElement: (t) => {
                const s = l[t];
                return l.length <= t || void 0 === s
                    ? _.jsx(xr, { className: f(Wr, ai.card), style: p })
                    : _.jsx(
                          Kr,
                          {
                              vehicleId: s,
                              selected: l[t] === e.currentVehicleCD(),
                              className: f(Wr, ai.card),
                              style: p,
                          },
                          s,
                      );
            },
        });
    }),
    oi = 'SelectVehicle_empty_c4ad0e6f',
    ci = 'SelectVehicle_55964cab',
    di = 'SelectVehicle_contentLeft_df8318cc',
    ui = 'SelectVehicle_listWrapper_7143d883',
    mi = 'SelectVehicle_category_47ad8ddc',
    pi = 'SelectVehicle_divider_e3344f3e',
    hi = 'SelectVehicle_divider__top_69824bd2',
    _i = 'SelectVehicle_emptyTitle_f13f5f32',
    fi = 'SelectVehicle_emptyDescription_3ea65b11',
    vi = h(function () {
        const { model: e } = Ft(),
            t = 0 === e.list().length,
            s = xt(),
            a = s.model.computes.nations(),
            r = m.useMemo(
                () => ({
                    filters: s.model.filters,
                    search: s.model.searchName,
                    hasFilter: s.model.computes.hasFilters,
                    defaultFilters: s.model.computes.default,
                    change: s.controls.change,
                    reset: s.controls.reset,
                }),
                [s],
            ),
            i = M.resolve('strings'),
            l = F({
                header: i.readOrEmpty('tank_carousel_filter.tooltip.searchInput.header'),
                body: i.readOrEmpty('tank_carousel_filter.tooltip.searchInput.body').replace('%(count)d', String(50)),
            });
        return _.jsxs('div', {
            className: ci,
            children: [
                _.jsxs('div', {
                    className: di,
                    children: [
                        _.jsxs(Wt.Provider, {
                            value: r,
                            children: [
                                _.jsx(Ta, {}),
                                _.jsx(vs, {}),
                                _.jsx('div', { className: f(pi, hi) }),
                                _.jsx(J, { className: mi, path: 'tank_carousel_filter.popover.label.vehicleTypes' }),
                                _.jsx(Ya, {}),
                                _.jsx(J, { className: mi, path: 'tank_carousel_filter.popover.label.nations' }),
                                _.jsx(Qa, { orderedNations: a }),
                                _.jsx(J, { className: mi, path: 'tank_carousel_filter.popover.label.levels' }),
                                _.jsx(Ja, {}),
                                _.jsx(J, { className: mi, path: 'tank_carousel_filter.popover.label.specials' }),
                                _.jsx(Ka, {}),
                            ],
                        }),
                        _.jsx('div', { className: pi }),
                        _.jsx('div', { ...l, children: _.jsx($a, {}) }),
                    ],
                }),
                _.jsxs('div', {
                    className: ui,
                    children: [
                        _.jsx(W, { children: _.jsx(ni, {}) }),
                        t &&
                            _.jsxs('div', {
                                className: oi,
                                children: [
                                    _.jsx('div', {
                                        className: _i,
                                        children: i.readOrEmpty('playlists.empty_state.not_found.title'),
                                    }),
                                    _.jsx('div', {
                                        className: fi,
                                        children: i.readOrEmpty('playlists.empty_state.not_found.body'),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }),
    gi = 'SelectVehicle_e71f7277',
    xi = 'SelectVehicle_title_20f4184a',
    bi = 'SelectVehicle_close_2b04c3e9',
    yi = h(function () {
        const { model: e } = Ft();
        return (
            Re(Ae.ESCAPE, Se.closeView),
            _.jsxs('div', {
                className: gi,
                children: [
                    _.jsx('div', { className: xi, children: e.title.get() }),
                    _.jsx(Ge, { onClose: Se.closeView, className: bi }),
                    _.jsx(vi, {}),
                ],
            })
        );
    }),
    Ci = M.resolve('aliases');
Fe(
    new qe()
        .add(He)
        .addWithProps(yt, {
            options: { rootId: Ci.read((e) => e.select_vehicle.select_vehicle.VehiclesStatistics('resId')) },
        })
        .addWithProps(Nt, {
            options: { rootId: Ci.read((e) => e.select_vehicle.select_vehicle.VehiclesInfo('resId')) },
        })
        .addWithProps(wt, {
            options: { rootId: Ci.read((e) => e.select_vehicle.select_vehicle.VehiclesInventory('resId')) },
        })
        .addWithProps(gt, {
            options: { rootId: Ci.read((e) => e.select_vehicle.select_vehicle.VehicleFilters('resId')) },
        })
        .addWithProps(zt, {
            options: { rootId: Ci.read((e) => e.select_vehicle.select_vehicle.VehiclePlaylists('resId')) },
        })
        .addWithProps(Gt, {
            options: { rootId: Ci.read((e) => e.select_vehicle.select_vehicle.VehiclesInventory('resId')) },
        })
        .add(Ht)
        .render(_.jsx(yi, {})),
    { fullScreen: !0 },
);
