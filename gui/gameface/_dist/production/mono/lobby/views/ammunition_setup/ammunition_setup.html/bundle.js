import {
    r as e,
    j as a,
    m as s,
    n as t,
    R as n,
    p as o,
    q as i,
    s as l,
    T as r,
    C as c,
} from '../../../chunks/vendor.js';
import {
    u as d,
    k as _,
    a as u,
    p as m,
    S as p,
    C as b,
    B as h,
    g,
    f as x,
    r as f,
    b as v,
    m as y,
    c as C,
    i as S,
    F as j,
    d as k,
    e as N,
    n as T,
    h as w,
    j as I,
    l as A,
    E as D,
    A as B,
    o as M,
    q as $,
    s as E,
    M as P,
    t as L,
    T as F,
    v as z,
    w as H,
    W as O,
    x as q,
    y as W,
    z as V,
    D as G,
    G as K,
    H as U,
    I as Z,
    J,
    K as Q,
    L as X,
    N as Y,
    O as ee,
    P as ae,
    Q as se,
    R as te,
    U as ne,
} from '../../../chunks/lib.js';
import {
    A as oe,
    R as ie,
    a as le,
    u as re,
    S as ce,
    B as de,
    T as _e,
    b as ue,
    L as me,
    U as pe,
    D as be,
    c as he,
    d as ge,
    e as xe,
    f as fe,
    O as ve,
    g as ye,
    E as Ce,
    h as Se,
    i as je,
    j as ke,
    C as Ne,
    k as Te,
    M as we,
    l as Ie,
    P as Ae,
} from '../../../chunks/ammunition_panel.js';
import { A as De } from '../../../chunks/sound.js';
import { c as Be, u as Re } from '../../../chunks/string-utils.js';
import { c as Me, P as $e } from '../../../chunks/utils.js';
const Ee = {
        root: 'SetupApp_root_d38bbfa0',
        base: 'SetupApp_f1c6cd3a',
        base__shown: 'SetupApp_base__shown_fccfe6ea',
        base__compare: 'SetupApp_base__compare_b6ec476d',
        base__setup: 'SetupApp_base__setup_db89c112',
        close: 'SetupApp_close_1d713cfa',
        close__hidden: 'SetupApp_close__hidden_27f6e5f8',
        content: 'SetupApp_content_429099a6',
        content__compare: 'SetupApp_content__compare_60b0e7bd',
        content__invisible: 'SetupApp_content__invisible_27f6e5f8',
        content__shown: 'SetupApp_content__shown_41be5df1',
        'show-app': 'SetupApp_show-app_d38bbfa0',
        content__hidden: 'SetupApp_content__hidden_c6db79ad',
        'hide-app': 'SetupApp_hide-app_d38bbfa0',
        panel: 'SetupApp_panel_336d56ea',
        panel__hide: 'SetupApp_panel__hide_95ba39b8',
        back: 'SetupApp_back_48d035b8',
        bottom: 'SetupApp_bottom_1d96c28f',
        switchButton: 'SetupApp_switchButton_84a3637f',
        switchIcon: 'SetupApp_switchIcon_e755fd20',
    },
    Pe = ({ content: t, panel: n, show: o = !0, onAnimationDone: i, onClose: l, switchPanel: r }) => {
        const [c, g] = e.useState(!1),
            x = e.useRef(null),
            f = e.useRef(!1);
        d(_.ESCAPE, l);
        const v = !n,
            y = e.useCallback(
                (e) => {
                    i && e.target === x.current && i();
                },
                [i],
            ),
            C = u(
                () => {
                    (r(), g(!1));
                },
                [r],
                300,
            );
        return (
            e.useEffect(() => {
                (o && (f.current = !0), f.current && m.sound('cons_select_view'));
            }, [o]),
            e.useEffect(() => {
                const e = x.current;
                if (e)
                    return (
                        e.addEventListener('animationend', y),
                        () => {
                            e.removeEventListener('animationend', y);
                        }
                    );
            }, [y]),
            a.jsxs('div', {
                className: s(Ee.base, o && Ee.base__shown, v ? Ee.base__compare : Ee.base__setup),
                children: [
                    v && a.jsx('div', { className: Ee.back }),
                    a.jsx('div', {
                        id: 'setup-content',
                        ref: x,
                        className: s(
                            Ee.content,
                            v && Ee.content__compare,
                            !o && !f.current && Ee.content__invisible,
                            Ee['content__' + (o ? 'shown' : 'hidden')],
                        ),
                        children: t,
                    }),
                    a.jsxs('div', {
                        className: Ee.bottom,
                        children: [
                            a.jsx(p, {
                                header: R.strings.last_stand_lobby.ammoSetup.changeHotKey.header(),
                                body: R.strings.last_stand_lobby.ammoSetup.changeHotKey.body(),
                                children: a.jsx(b, {
                                    type: h.ghost,
                                    mixClass: Ee.switchButton,
                                    onClick: () => {
                                        (g(!0), C(), m.sound(De));
                                    },
                                    children: a.jsx('div', { className: Ee.switchIcon }),
                                }),
                            }),
                            n && a.jsx('div', { className: s(Ee.panel, c && Ee.panel__hide), children: n }),
                        ],
                    }),
                ],
            })
        );
    },
    Le = [
        'LS_teamRepair',
        'LS_selfRepair',
        'LS_invisibility',
        'LS_aoeDrainEnemyHpInstantShot',
        'LS_aoeStunInstantShot',
        'LS_aoeDamageInstantShot',
        'LS_doubleDamage',
        'LS_fastReload',
        'LS_nitro',
        'LS_damageShield',
        'LS_healSituational',
        'LS_extraDamageSituational',
        'LS_nitroSituational',
    ],
    Fe = (e) =>
        y(e, (e) => ({
            ...e,
            price: {
                ...e.price,
                price: y(e.price.price, (e) => ({ ...e })),
                defPrice: y(e.price.defPrice, (e) => ({ ...e })),
                discount: y(e.price.discount, (e) => ({ ...e })),
            },
            oldStylePrice: {
                ...e.price,
                price: y(e.price.price, (e) => ({ value: { ...e } })),
                defPrice: y(e.price.defPrice, (e) => ({ value: { ...e } })),
                discount: y(e.price.discount, (e) => ({ value: { ...e } })),
            },
        })),
    ze = (e) => {
        const a = {
                root: e.object(),
                tankSetup: e.object('tankSetup'),
                vehicleInfo: e.object('vehicleInfo'),
                lastSlotAction: e.object('lastSlotAction'),
                optDevices: {
                    slots: e.array('tankSetup.optDevicesSetup.slots'),
                    setup: e.object('tankSetup.optDevicesSetup'),
                    filter: e.array('tankSetup.optDevicesSetup.filter'),
                    tabs: e.array('tankSetup.optDevicesSetup.tabs'),
                    specialCurrency: e.array('tankSetup.optDevicesSetup.specialCurrency'),
                },
                consumables: {
                    consumables: e.object('tankSetup.consumablesSetup'),
                    slots: e.array('tankSetup.consumablesSetup.slots'),
                },
                boosters: {
                    tabs: e.object('tankSetup.battleBoostersSetup.tabs'),
                    slots: e.array('tankSetup.battleBoostersSetup.slots'),
                },
            },
            s = t(
                () =>
                    ((e) => {
                        const a = Fe(e);
                        return y(a, (e) => ({
                            ...e,
                            bonuses: {
                                ...e.bonuses,
                                items: y(e.bonuses.items, (e) => ({ ...e, values: y(e.values, (e) => ({ ...e })) })),
                            },
                            specializations: {
                                ...e.specializations,
                                specializations: y(e.specializations.specializations, (e) => ({ ...e })),
                            },
                        }));
                    })(a.optDevices.slots.get()),
                { equals: C },
            ),
            n = t(() => s().length),
            o = t(
                (e) => {
                    const a = g(s(), e);
                    if (!a) throw Error(`No optional device found with index: ${e}`);
                    return a;
                },
                { equals: C },
            ),
            i = t((e) => o(e).bonuses.items.length, { equals: C }),
            l = t(
                (e, a) => {
                    const s = o(e),
                        t = g(s.bonuses.items, a);
                    if (!t) throw Error(`No bonus defPrice found with index: ${a}`);
                    return { ...t };
                },
                { equals: C },
            ),
            r = t((e) => {
                const a = i(e),
                    { effect: s } = o(e);
                return s ? (1 === a ? 2 : 1) : 0;
            }),
            c = t((e, a, s) => {
                const t = i(e),
                    n = r(e);
                let o = n ? s - n : s,
                    l = null;
                for (let i = 0; i <= a; i++) {
                    if (!o) return null;
                    ((l = t > 2 ? 1 : 2 === t ? (o > 2 ? 2 : 1) : o), (o -= l));
                }
                return l;
            }),
            d = t(
                (e, a) => {
                    const s = l(e, a);
                    return x(s.values, ({ valueKey: e }) => e === s.localeName);
                },
                { equals: C },
            ),
            _ = t(
                () =>
                    ((e) => {
                        const a = Le,
                            s = Fe(e),
                            t = f(
                                s,
                                (e, s) => {
                                    const t = a.indexOf(s.itemName);
                                    return ((e[-1 === t ? Math.max(e.length, Le.length) : t] = s), e);
                                },
                                [],
                            );
                        return v(t, (e) => Boolean(e));
                    })(a.consumables.slots.get()),
                { equals: C },
            ),
            u = t(() => _().length),
            m = t(
                (e) => {
                    const a = g(_(), e);
                    if (!a) throw Error(`No consumable found with index: ${a}`);
                    return { ...a };
                },
                { equals: C },
            ),
            p = t(
                () => {
                    return ((e = a.boosters.slots.get()), Fe(e));
                    var e;
                },
                { equals: C },
            ),
            b = t(() => p().length),
            h = t(
                (e) => {
                    const a = g(p(), e);
                    if (!a) throw Error(`No battle booster found with index: ${e}`);
                    return { ...a };
                },
                { equals: C },
            );
        return {
            model: a,
            computes: {
                optDevices: {
                    slotsLength: n,
                    device: o,
                    bonusesLength: i,
                    bonus: l,
                    bonusEffectLinesCount: r,
                    bonusVisibleLinesCount: c,
                    bonusValue: d,
                },
                consumables: { length: u, consumable: m },
                boosters: { length: b, booster: h },
            },
        };
    },
    [He, Oe] = S()(
        ({ observableModel: e }) => {
            const { model: a, computes: s } = ze(e),
                n = e.object('tankSetup.shellsSetup'),
                o = e.array('tankSetup.shellsSetup.slots'),
                i = e.object('ammunitionPanel'),
                l = e.array('ammunitionPanel.sectionGroups'),
                r = t(
                    (e) => {
                        const a = g(o.get(), e);
                        if (!a) throw Error(`No shell found with index: ${e}`);
                        return { ...a };
                    },
                    { equals: C },
                ),
                c = t(() => o.get().length),
                d = t((e) => r(e).specifications.length),
                _ = t(
                    (e, a) => {
                        const s = r(e),
                            t = g(s.specifications, a);
                        if (!t) throw Error(`No shell specification found with index: ${a}`);
                        return { ...t };
                    },
                    { equals: C },
                ),
                u = t(
                    (e, a) => {
                        const s = r(e),
                            t = g(s.price.price, a);
                        if (!t) throw Error(`No shell price found with index: ${a}`);
                        return { ...t };
                    },
                    { equals: C },
                ),
                m = t(
                    (e, a) => {
                        const s = r(e),
                            t = g(s.price.defPrice, a);
                        if (!t) throw Error(`No shell defPrice found with index: ${a}`);
                        return { ...t };
                    },
                    { equals: C },
                ),
                p = t((e) => r(e).price.price.length),
                b = t((e) => r(e).price.defPrice.length),
                h = t(() => {
                    const { selectedSlot: e } = i.get(),
                        a = g(l.get(), 0);
                    if (!a) throw Error('No section group found');
                    const s = g(a.sections, 0);
                    if (!s) throw Error('No section found');
                    const t = g(s.slots, e);
                    if (!t) throw Error(`No slot found with index: ${e}`);
                    const n = g(t.specializations.specializations, 0);
                    return null == n ? void 0 : n.name;
                });
            return {
                ...e.primitives(['show', 'isReady']),
                ...a,
                shellsSetup: n,
                shellsSlots: o,
                ammunitionPanel: i,
                sectionGroups: l,
                computes: {
                    ...s,
                    shells: {
                        length: c,
                        shell: r,
                        specificationsLength: d,
                        specification: _,
                        price: u,
                        priceLength: p,
                        defPriceLength: b,
                        defPrice: m,
                    },
                    selectedSlotSpecialization: h,
                },
            };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
            viewRendered: e.createCallbackNoArgs('onViewRendered'),
            resized: e.createCallback((e) => ({ ...e }), 'onResized'),
            filterChanged: e.createCallback((e) => ({ ...e }), 'tankSetup.optDevicesSetup.onFilterChanged'),
            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
            moreCurrencyGot: e.createCallbackNoArgs('tankSetup.optDevicesSetup.specialCurrency.onGetMoreCurrency'),
            introPassed: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onIntroPassed'),
            switch: e.createCallbackNoArgs('onSwitch'),
            optDevices: {
                actSlot: e.createCallback((e) => ({ ...e }), 'tankSetup.optDevicesSetup.onSlotAction'),
                changeTab: e.createCallback((e) => ({ ...e }), 'tankSetup.optDevicesSetup.onTabChanged'),
                confirmDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealConfirmed'),
                cancelDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealCancelled'),
                changeAutoRenewal: e.createCallback(
                    (e) => ({ value: e }),
                    'tankSetup.optDevicesSetup.onAutoRenewalChanged',
                ),
            },
            shells: {
                confirmDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealConfirmed'),
                cancelDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealCancelled'),
                changeAutoRenewal: e.createCallback(
                    (e) => ({ value: e }),
                    'tankSetup.shellsSetup.onAutoRenewalChanged',
                ),
                updateSlot: e.createCallback((e) => ({ ...e }), 'tankSetup.shellsSetup.onShellUpdate'),
                actSlot: e.createCallback((e) => ({ ...e }), 'tankSetup.shellsSetup.onSlotAction'),
            },
            consumables: {
                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                changeAutoRenewal: e.createCallback(
                    (e) => ({ value: e }),
                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                ),
                actSlot: e.createCallback((e) => ({ ...e }), 'tankSetup.consumablesSetup.onSlotAction'),
            },
            boosters: {
                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                changeAutoRenewal: e.createCallback(
                    (e) => ({ value: e }),
                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                ),
                changeTab: e.createCallback((e) => ({ ...e }), 'tankSetup.battleBoostersSetup.onTabChanged'),
                actSlot: e.createCallback((e) => ({ ...e }), 'tankSetup.battleBoostersSetup.onSlotAction'),
            },
        }),
    ),
    qe = () =>
        new Promise((e) => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    e();
                });
            });
        });
const We = {
        root: 'FormatTextWithColorTags_root_c36dbed2',
        blackReal: 'FormatTextWithColorTags_blackReal_82b55192',
        whiteReal: 'FormatTextWithColorTags_whiteReal_42e94ebf',
        white: 'FormatTextWithColorTags_white_58ba4da4',
        whiteOrange: 'FormatTextWithColorTags_whiteOrange_489a5f92',
        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_147e6778',
        par: 'FormatTextWithColorTags_par_6896a1de',
        parSecondary: 'FormatTextWithColorTags_parSecondary_717afc5e',
        parTertiary: 'FormatTextWithColorTags_parTertiary_f7414ac5',
        red: 'FormatTextWithColorTags_red_f5f6ff83',
        redDark: 'FormatTextWithColorTags_redDark_d5c0976d',
        yellow: 'FormatTextWithColorTags_yellow_bf4eb7b0',
        orange: 'FormatTextWithColorTags_orange_daa45894',
        cream: 'FormatTextWithColorTags_cream_119e3260',
        brown: 'FormatTextWithColorTags_brown_ac2c1efe',
        greenBright: 'FormatTextWithColorTags_greenBright_6ec60dc',
        green: 'FormatTextWithColorTags_green_eebf9578',
        greenDark: 'FormatTextWithColorTags_greenDark_f55f8db8',
        blueBooster: 'FormatTextWithColorTags_blueBooster_a661aea3',
        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_53dcf218',
        cred: 'FormatTextWithColorTags_cred_485b5b16',
        gold: 'FormatTextWithColorTags_gold_d18ec884',
        bond: 'FormatTextWithColorTags_bond_fa6840a4',
        prom: 'FormatTextWithColorTags_prom_86cc84f4',
        parNoWidth: 'FormatTextWithColorTags_parNoWidth_83e5e2b6',
    },
    Ve = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
    Ge = new RegExp('(?<=(?:%\\(|{))(.*?)(?=(?:_[Oo]pen|Start))'),
    Ke = new RegExp('(?<=(?:_[Oo]pen|Start)(?:\\)s?|}))(.*?)(?=(?:%\\(|{))'),
    Ue = e.memo(({ text: s, binding: t, classMix: n }) => {
        const o = e.useCallback((e) => ({ color: `#${e}` }), []),
            i = e.useMemo(() => t || {}, [t]);
        let l = Ve.exec(s),
            r = s,
            c = 0;
        for (; l;) {
            const e = l[0],
                n = Ge.exec(e),
                d = Ke.exec(e),
                _ = l[1];
            if (n && d) {
                const s = n[0],
                    l = s + c++ + s;
                ((r = r.replace(e, `%(${l})`)),
                    (i[l] = We[s]
                        ? a.jsx('span', { className: We[s], children: a.jsx(j, { text: _ || '', binding: t }) })
                        : a.jsx('span', { style: o(s), children: a.jsx(j, { text: _ || '', binding: t }) })));
            }
            l = Ve.exec(s);
        }
        return a.jsx(j, { text: r, classMix: n, binding: i });
    }),
    Ze = (e, a) => {
        if (void 0 === e) return !1;
        return e.getBoundingClientRect().top >= a;
    },
    Je = (e, a) => {
        var s;
        const t = e.current;
        if (t) {
            const e = t.getBoundingClientRect(),
                n = e.top + a,
                o = Array.from(t.children);
            if (o.length) {
                const a = ((e, a) => {
                    const s = e.length - 1;
                    if (!Ze(e[s], a)) return -1;
                    let t = 0,
                        n = s - 1,
                        o = !1;
                    for (; n - t > 1;) {
                        const s = t + Math.floor(0.5 * (n - t + 1));
                        ((o = Ze(e[s], a)), o ? (n = s) : (t = s));
                    }
                    return o || Ze(e[n], a) ? t : n;
                })(o, n);
                if (a > 0) {
                    const t = null == (s = o[a]) ? void 0 : s.getBoundingClientRect();
                    return e.right - (void 0 !== t ? t.right : 0) < 16 ? a : a + 1;
                }
            }
        }
        return -1;
    },
    Qe = 'ShortenedText_837707c3',
    Xe = 'ShortenedText_base__shown_eca72a83',
    Ye = (e) =>
        e
            .split(' ')
            .filter((e) => Boolean(e))
            .map((e, s) => a.jsx(Ue, { text: `${e} ` }, s)),
    ea = ({ blocks: t, linesCount: n = 2, mediaSize: o }) => {
        const [i, l] = e.useState(t),
            [r, c] = e.useState({ width: 0, height: 0 }),
            d = e.useRef(null),
            _ = e.useRef({ shortened: !1 }),
            u = e.useCallback(() => {
                qe().then(() => {
                    const e = ((e) => {
                        const a = e.current;
                        return a ? window.getComputedStyle(a).getPropertyValue('line-height') : '';
                    })(d);
                    if (e) {
                        const a = Number(e.split('rem')[0]),
                            s = d.current;
                        if (s && isFinite(a)) {
                            const e = k(n * a);
                            c({ height: e, width: s.getBoundingClientRect().width });
                        }
                    }
                });
            }, [n]);
        (e.useEffect(() => {
            if (t.length) return (_.current.shortened && ((_.current.shortened = !1), l(t)), N(u));
        }, [t, o, u]),
            e.useEffect(() => {
                if (r.height && !_.current.shortened) {
                    const e = Je(d, r.height);
                    if (-1 !== e) {
                        const s = i.slice(0, e);
                        (s.push(a.jsx('span', { children: '...' }, e)), l(s), (_.current.shortened = !0));
                    }
                }
            }, [i, r, o]));
        const m = e.useMemo(() => (r.height ? { maxHeight: `${r.height}rem` } : {}), [r.height]);
        return a.jsx('div', { ref: d, className: s(Qe, r.height && Xe), style: m, children: i });
    },
    aa = 'FormatColorTagText_2a35a1e0',
    sa = 'FormatColorTagText_text_f09da6c6',
    ta = ({
        parentId: t,
        text: n = '',
        mediaSize: o,
        classMix: i,
        classColorMix: l,
        linesShown: r,
        withOffset: c = !0,
    }) => {
        const d = Be(n)
                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                .map((e, t) =>
                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                        ? a.jsx(
                              'span',
                              {
                                  className: s(aa, l),
                                  children: e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                              },
                              t,
                          )
                        : e &&
                          a.jsx(
                              'span',
                              { className: sa, children: a.jsx(ea, { mediaSize: o, blocks: Ye(e), linesCount: r }) },
                              t,
                          ),
                ),
            _ = e.useMemo(
                () =>
                    n
                        .split(/({colorTagOpen}.*?{colorTagClose})/g)
                        .flatMap((e) => (-1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g) ? e : e.split(' ')))
                        .filter((e) => Boolean(e))
                        .map((e, t) =>
                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                ? a.jsx(
                                      'span',
                                      {
                                          className: s(aa, l),
                                          children: e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                      },
                                      t,
                                  )
                                : a.jsx('span', { children: `${e} ` }, t),
                        ),
                [l, n],
            );
        return a.jsx('div', {
            id: `${t}-details`,
            className: s(aa, i),
            children: c ? d : a.jsx(ea, { mediaSize: o, blocks: _, linesCount: r }),
        });
    },
    na = 'Action_85eb7062',
    oa = 'Action_base__hidden_1cde160e',
    ia = 'Action_base__shown_de705f2e',
    la = 'Action_base__cut_edad8f7a',
    ra = 'Action_2e22c758',
    ca = 'Action_image_5d0bde0a',
    da = 'Action_button_14481f52',
    _a = R.strings.tank_setup.tooltips.action,
    ua = ['cancel', 'undo'],
    ma = (e, a) => (2 === a ? `${e}_last_modernized` : `${e}_modernized`),
    pa = ({
        parentId: t,
        actionType: n,
        imageSource: o = '',
        show: i = !1,
        disabled: l = !1,
        disabledTooltipText: r,
        tooltipBodyPath: c,
        buttonType: d = h.primary,
        isModernized: _,
        isFreeToDemount: u,
        level: m,
        onClick: g,
    }) => {
        const x = e.useRef(null),
            f = e.useRef('hidden'),
            v = e.useRef(!1),
            [y, C] = e.useState(!i),
            [S, j] = e.useState(!1),
            [k, N] = e.useState(),
            T = e.useCallback(() => {
                const e = f.current;
                'fadeIn' === e ? ((f.current = 'hidden'), C(!0)) : 'fadeOut' === e && (f.current = 'visible');
            }, []);
        (e.useEffect(() => {
            const e = x.current;
            if (e)
                return (
                    e.addEventListener('animationend', T),
                    () => {
                        e.removeEventListener('animationend', T);
                    }
                );
        }, [T]),
            e.useEffect(() => {
                i !== v.current && (i ? ((f.current = 'fadeOut'), C(!1)) : (f.current = 'fadeIn'), (v.current = i));
            }, [i]),
            e.useEffect(() => {
                if (S) {
                    const e = setTimeout(() => j(!1), 200);
                    return () => clearTimeout(e);
                }
            }, [S]),
            e.useEffect(() => () => k && clearTimeout(k), [k]));
        const w = e.useCallback(() => {
                S || (j(!0), 'visible' === f.current && N(setTimeout(() => g(n), 200)));
            }, [n, g, S]),
            I = _ ? ma(n, m) : n,
            A = e.useMemo(() => {
                if (l) return { body: r || '', isEnabled: Boolean(r) };
                const e = ((e, a, s, t) => (s ? 'demount_plus' : t ? ma(e, a) : e))(n, m, u, _);
                return { header: _a.title.$dyn(e), body: ua.includes(e) ? void 0 : _a.description.$dyn(c || e) };
            }, [n, l, r, u, _, m, c]),
            D = e.useMemo(
                () => ({ backgroundImage: `url(${o || R.images.gui.maps.icons.tanksetup.actions.$dyn(I)})` }),
                [I, o],
            );
        return a.jsx('div', {
            id: t,
            ref: x,
            className: s(na, i ? ia : oa, y && la),
            children: a.jsx(p, {
                ...A,
                children: a.jsx('div', {
                    className: ra,
                    children: a.jsx(b, {
                        onClick: w,
                        type: d,
                        mixClass: da,
                        disabled: l,
                        children: a.jsx('div', { className: ca, style: D }),
                    }),
                }),
            }),
        });
    },
    ba = {
        root: 'Actions_root_9b5544a9',
        base: 'Actions_57de9758',
        base__hidden: 'Actions_base__hidden_5c42f885',
        base__shown: 'Actions_base__shown_754550de',
    },
    ha = e.memo(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: o }) =>
        a.jsxs('div', {
            className: s(ba.base, ba['base__' + (t.length ? 'shown' : 'hidden')]),
            children: [
                a.jsx(pa, {
                    parentId: `${e}-${oe}`,
                    actionType: oe,
                    onClick: n,
                    show: t.includes(oe),
                    disabled: o,
                    disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                }),
                a.jsx(pa, { parentId: `${e}-${ie}`, actionType: ie, onClick: n, show: t.includes(ie) }),
                a.jsx(pa, { parentId: `${e}-${le}`, actionType: le, onClick: n, show: t.includes(le) }),
            ],
        }),
    ),
    ga = {
        root: 'TankName_root_a6870619',
        base: 'TankName_d905176a',
        base__sizeMedium: 'TankName_base__sizeMedium_25e729e7',
        base__sizBig: 'TankName_base__sizBig_1bc7cd21',
        base__typeWhite: 'TankName_base__typeWhite_f29802fb',
        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_11e995e1',
        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_30382512',
        base__typeColored: 'TankName_base__typeColored_a6870619',
        level: 'TankName_level_11e995e1',
        type: 'TankName_type_228a7ad9',
        type__extraSmall: 'TankName_type__extraSmall_74b55f42',
        type__medium: 'TankName_type__medium_1816831b',
        type__big: 'TankName_type__big_cd82666d',
        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_ff724584',
        type__eliteMedium: 'TankName_type__eliteMedium_c58bf8ce',
        type__eliteBig: 'TankName_type__eliteBig_3a9beae6',
        name: 'TankName_name_beeb5e49',
        premiumIGR: 'TankName_premiumIGR_b94c8d55',
    },
    xa = ({
        isElite: e,
        vehicleName: t,
        vehicleShortName: n,
        vehicleType: o,
        vehicleLvl: i,
        tags: l = '',
        size: r = 'extraSmall',
        type: c = 'colored',
        className: d,
        classNames: _,
        isShortName: u = !1,
    }) => {
        const m = `'R.images.gui.maps.icons.vehicleTypes.big.${`${T(o)}${e ? '_elite' : ''}`}'`;
        return a.jsxs('div', {
            className: s(ga.base, ga[`base__size${Re(r)}`], ga[`base__type${Re(c)}`], d),
            children: [
                a.jsx('div', { className: s(ga.level, null == _ ? void 0 : _.level), children: w(i) }),
                a.jsx('div', {
                    className: s(
                        ga.type,
                        e && ga[`type__elite${Re(r)}`],
                        ga[`type__${r}`],
                        null == _ ? void 0 : _.typeIcon,
                    ),
                    style: o ? { backgroundImage: `url(${m})` } : void 0,
                }),
                Me(l, $e) && a.jsx('div', { className: ga.premiumIGR }),
                a.jsx('div', { className: s(ga.name, null == _ ? void 0 : _.name), children: u ? n : t }),
            ],
        });
    },
    fa = 'VehicleParamsDecorator_80a9582f',
    va = 'VehicleParamsDecorator_vehicleInfo_5b2abf7b',
    ya = 'VehicleParamsDecorator_tankName_3b4438c6',
    Ca = 'VehicleParamsDecorator_tankLvl_400e015c',
    Sa = 'VehicleParamsDecorator_type_7be84aa1',
    ja = 'VehicleParamsDecorator_tip_ca307bc2',
    ka = ({
        className: e,
        children: t,
        isPerkTipShown: n,
        tipText: o = R.strings.crew.vehicleParamsDecorator.perkTip(),
        ...i
    }) =>
        a.jsxs('div', {
            className: s(fa, e),
            children: [
                a.jsx(xa, { className: va, classNames: { name: ya, level: Ca, typeIcon: Sa }, ...i, isShortName: !0 }),
                t,
                n && a.jsx('div', { className: ja, children: o }),
            ],
        }),
    [Na, Ta] = S()(
        ({ observableModel: e }) => ({ ...{ groups: e.array('groups', []) } }),
        ({ externalModel: e }) => ({ onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick') }),
    );
var wa = ((e) => (
    (e[(e.none = 0)] = 'none'),
    (e[(e.increase = 1)] = 'increase'),
    (e[(e.decrease = 2)] = 'decrease'),
    (e[(e.mixed = 3)] = 'mixed'),
    e
))(wa || {});
const Ia = {
        root: 'BuffIcon_root_b6befc75',
        base: 'BuffIcon_ccf2e8b3',
        base__increase: 'BuffIcon_base__increase_e259f748',
        base__decrease: 'BuffIcon_base__decrease_32eb5e0c',
        base__mixed: 'BuffIcon_base__mixed_a59d2ea2',
    },
    Aa = n.memo(function ({ buffIconType: e, className: t }) {
        return e === wa.none ? null : a.jsx('div', { className: s(Ia.base, Ia[`base__${wa[e]}`], t) });
    }),
    Da = 'Delta_40e1897d',
    Ba = 'Delta_base__positive_22ea5cc',
    Ra = 'Delta_base__negative_5bdefca9',
    Ma = n.memo(function ({ isPositive: e, width: t, shift: n, isUseAnim: l }) {
        const r = o({
                from: { left: 0, width: 0 },
                left: e ? 0 : t,
                width: e ? 0 : Math.abs(t),
                config: { duration: qa },
                delay: e ? 0 : qa,
                immediate: !l,
            }),
            c = o({
                from: { left: 2, width: 0 },
                left: 2 + n,
                width: e ? t : 0,
                config: { duration: qa },
                delay: e || 0 === t ? qa : 0,
                immediate: !l,
            });
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx(i.div, { className: s(Da, Ra), style: r }),
                a.jsx(i.div, { className: s(Da, Ba), style: c }),
            ],
        });
    }),
    $a = 'Indicator_478500cf',
    Ea = 'Indicator_progress_fcb926f6',
    Pa = 'Indicator_progressMarker_3746a67a',
    La = 'Indicator_34b61adf',
    Fa = 'Indicator_indicator__start_15d3341f',
    za = 'Indicator_indicator__end_65fad147',
    Ha = 'Indicator_marker_bc8db73d',
    Oa = 'Indicator_valueLine_208f1162',
    qa = 300,
    Wa = n.memo(function ({ minValue: e, maxValue: t, value: n, markerValue: l, delta: r, isUseAnim: c }) {
        const d = l === e ? 2 : (l / t) * 254,
            _ = (n / t) * 254,
            u = (r / t) * 254,
            m = r > 0,
            p = { config: { duration: qa }, immediate: !c },
            b = o({ from: { left: 2 }, to: { left: d }, delay: qa, ...p }),
            h = o({ from: { width: e }, to: { width: _ }, delay: qa, ...p });
        return a.jsx('div', {
            className: $a,
            children: a.jsxs('div', {
                className: Ea,
                children: [
                    a.jsx('div', { className: s(La, Fa) }),
                    a.jsx(i.div, { className: Oa, style: h }),
                    a.jsx('div', {
                        className: Pa,
                        children: a.jsx(i.div, {
                            className: Ha,
                            style: b,
                            children: a.jsx(Ma, { isPositive: m, width: u, shift: _ - u - d, isUseAnim: c }),
                        }),
                    }),
                    a.jsx('div', { className: s(La, za) }),
                ],
            }),
        });
    });
var Va = ((e) => (
    (e.None = 'none'),
    (e.Increase = 'increase'),
    (e.Decrease = 'decrease'),
    (e.Situational = 'situational'),
    e
))(Va || {});
const Ga = {
        root: 'Param_root_624b9435',
        base: 'Param_ebd67968',
        valueWrapper: 'Param_valueWrapper_149b8b86',
        value: 'Param_value_3cd2d3a0',
        icon: 'Param_icon_d0b543e0',
        name: 'Param_name_a93fa6d1',
        highlight: 'Param_highlight_5c6edee1',
        highlight__increase: 'Param_highlight__increase_7e4be910',
        highlight__decrease: 'Param_highlight__decrease_a17814b8',
        highlight__situational: 'Param_highlight__situational_c68d568b',
    },
    Ka = n.memo(function ({ id: t, value: n, tooltipID: l, isEnabled: r, highlightType: c, name: d }) {
        const [_, u] = o(() => ({ from: { opacity: 0 } })),
            m = c !== Va.None;
        return (
            e.useEffect(() => {
                m &&
                    u.start({
                        from: { opacity: 0 },
                        to: [{ opacity: 1 }, { opacity: 0 }],
                        delay: 100,
                        config: { duration: 300, easing: I.easeInOutSine },
                    });
            }, [n, u, m]),
            a.jsx(A, {
                args: { tooltipId: l, paramId: t },
                targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                isEnabled: r,
                children: a.jsxs('div', {
                    className: Ga.base,
                    children: [
                        a.jsx('div', {
                            className: Ga.valueWrapper,
                            children: a.jsx(D, { justifyContent: B.FlexEnd, classMix: Ga.value, text: n }),
                        }),
                        a.jsx('div', {
                            className: Ga.icon,
                            style: { backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${t}')` },
                        }),
                        a.jsx('div', { className: Ga.name, children: d || R.strings.menu.tank_params.$dyn(t) }),
                        m && a.jsx(i.div, { className: s(Ga.highlight, Ga[`highlight__${c}`]), style: _ }),
                    ],
                }),
            })
        );
    }),
    Ua = 'Group_ca5f5249',
    Za = 'Group_cf1beff1',
    Ja = 'Group_hoverBg_a5784dc3',
    Qa = 'Group_hoverBg__scrollable_32d6d22d',
    Xa = 'Group_groupHeader_a20ea297',
    Ya = 'Group_name_99d03855',
    es = 'Group_arrow_750d9c2a',
    as = 'Group_arrow__opened_41942ecc',
    ss = 'Group_params_ed90fdac',
    ts = 'Group_params__opened_df23ae05',
    ns = 'Group_separator_9b18ef8d',
    os = 'Group_right_8f51e07b',
    is = 'Group_situational_bde1aff4',
    ls = 'Group_buff_c517770f',
    rs = 'Group_value_46211154',
    cs = 'Group_value__additional_797dee3b',
    ds = l(
        ({
            id: e,
            isOpen: t,
            params: n,
            extraParams: o,
            tooltipID: i,
            indicator: l,
            value: r,
            additionalValue: c,
            buffIconType: d,
            isEnabled: _,
            isScrollable: u,
            isSituational: p,
        }) => {
            const { controls: b } = Ta(),
                h = o && o.length > 0;
            return a.jsxs('div', {
                className: Ua,
                children: [
                    a.jsx(A, {
                        args: { tooltipId: i, paramId: e },
                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                        isEnabled: _,
                        children: a.jsxs('div', {
                            className: Za,
                            onClick: () => b.onGroupClick(e),
                            onMouseEnter: m.highlight,
                            children: [
                                a.jsx('div', { className: s(Ja, u && Qa) }),
                                a.jsxs('div', {
                                    className: Xa,
                                    children: [
                                        a.jsx('div', { className: s(es, t && as) }),
                                        a.jsx('div', { className: Ya, children: R.strings.menu.tank_params.$dyn(e) }),
                                        a.jsxs('div', {
                                            className: os,
                                            children: [
                                                p && a.jsx('div', { className: is }),
                                                a.jsx(Aa, { buffIconType: d, className: ls }),
                                                c && a.jsx(D, { classMix: s(rs, cs), text: c }),
                                                a.jsx(D, { classMix: rs, text: r }),
                                            ],
                                        }),
                                    ],
                                }),
                                a.jsx(Wa, { ...l }),
                            ],
                        }),
                    }),
                    a.jsxs('div', {
                        className: s(ss, t && ts),
                        children: [
                            y(n, (e) => a.jsx(Ka, { ...e }, e.id)),
                            h && a.jsx('div', { className: ns }),
                            y(o, (e) => a.jsx(Ka, { ...e }, e.id)),
                        ],
                    }),
                ],
            });
        },
    ),
    _s = {
        root: 'VehicleParams_root_eeb65be3',
        base: 'VehicleParams_d9c39596',
        base__bg: 'VehicleParams_base__bg_e1310781',
        scroll: 'VehicleParams_scroll_ba8dccd',
        content: 'VehicleParams_content_ed002732',
        barBase: 'VehicleParams_barBase_e1e4c749',
    },
    us = {
        settings: {
            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
            animationConfig: { tension: 0, friction: 0 },
        },
    },
    ms = l(({ showBackground: t = !0, className: n }) => {
        const { model: o } = Ta(),
            [i, l] = e.useState(!1),
            r = o.groups.get(),
            c = M(us);
        return (
            e.useEffect(() => {
                const e = () => {
                    const e = c.getContainerSize(),
                        a = c.getWrapperSize();
                    e && a && l(e > a);
                };
                return (
                    c.events.on('recalculateContent', e),
                    N(() => {
                        N(() => {
                            c.recalculateContent();
                        });
                    }),
                    () => {
                        c.events.off('recalculateContent', e);
                    }
                );
            }, [c]),
            a.jsx('div', {
                className: s(_s.base, t && _s.base__bg, n),
                children: a.jsx($.Vertical.Area.Default, {
                    api: c,
                    barClassNames: { base: _s.barBase },
                    scrollClassName: _s.scroll,
                    scrollClassNames: { content: _s.content },
                    children: a.jsx('div', {
                        className: _s.groups,
                        children: y(r, (e) => a.jsx(ds, { ...e, isScrollable: i }, e.id)),
                    }),
                }),
            })
        );
    }),
    ps = e.memo(function (s) {
        const t = e.useMemo(() => ({ rootId: s.resId }), [s.resId]);
        return a.jsx(Na, { options: t, children: a.jsx(ms, { ...s }) });
    }),
    bs = {
        root: 'Layout_root_750f09cf',
        base: 'Layout_662593df',
        base__small: 'Layout_base__small_750f09cf',
        base__medium: 'Layout_base__medium_e55c1e55',
        base__large: 'Layout_base__large_750f09cf',
        base__huge: 'Layout_base__huge_b7872a70',
        header: 'Layout_header_f6f01ef8',
        content: 'Layout_content_6c888f92',
        main: 'Layout_main_2c5a6614',
        inner: 'Layout_inner_1bddf923',
        vehicleParams: 'Layout_vehicleParams_a1ce6c99',
        aside: 'Layout_aside_c4e109da',
        footer: 'Layout_footer_6984146f',
    };
var hs = ((e) => (
    (e.None = ''),
    (e.Tiny = 'tiny'),
    (e.Small = 'small'),
    (e.Medium = 'medium'),
    (e.Large = 'large'),
    (e.Huge = 'huge'),
    e
))(hs || {});
const gs = () => {
        const { breakpoint: a } = E(),
            s = e.useContext(P);
        return a.name === L.extraSmall
            ? 'tiny'
            : a.name === L.small
              ? 'small'
              : a.name === L.medium || 1080 === (null == s ? void 0 : s.height)
                ? 'medium'
                : a.name === L.large
                  ? 'large'
                  : a.name === L.extraLarge
                    ? 'huge'
                    : '';
    },
    xs = ({ header: e, content: t, footer: n }) => {
        const { model: o } = Oe(),
            i = gs();
        return a.jsxs('div', {
            className: s(bs.base, i && bs[`base__${i}`]),
            children: [
                e && a.jsx('div', { className: s(bs.header, i && bs[`header__${i}`]), children: e }),
                a.jsx('div', {
                    className: bs.content,
                    children: a.jsxs('div', {
                        className: bs.main,
                        children: [
                            a.jsx('div', { className: bs.inner, children: t }),
                            a.jsx('div', {
                                className: bs.vehicleParams,
                                children: a.jsx(ka, {
                                    ...o.vehicleInfo.get(),
                                    children: a.jsx(ps, {
                                        showBackground: !1,
                                        resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
                n && a.jsx('div', { className: bs.footer, children: n }),
            ],
        });
    },
    fs = 'DisabledAbilities_662b6691',
    vs = 'DisabledAbilities_glow_d81ddf34',
    ys = 'DisabledAbilities_line_a367aa54',
    Cs = ({ className: e }) =>
        a.jsxs('div', {
            className: s(fs, e),
            children: [a.jsx('div', { className: vs }), a.jsx('div', { className: ys })],
        });
var Ss = ((e) => (
    (e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
    (e.UselessBattleBooster = 'useless_battle_booster'),
    (e.UselessCrewSkillBattleBooster = 'useless_crew_skill_battle_booster'),
    e
))(Ss || {});
const js = 'Warning_6c4760b8',
    ks = 'Warning_glow_130a0de5',
    Ns = 'Warning_line_3afe5f36',
    Ts = 'Warning_icon_adc0296e',
    ws = (e) => Object.values(Ss).includes(e),
    Is = ({ parentId: s, reason: t, isCritical: n }) => {
        const o = e.useMemo(() => ({ reason: t, isCritical: n }), [t, n]);
        return a.jsxs('div', {
            id: s,
            className: js,
            children: [
                a.jsx('div', { className: ks }),
                a.jsx('div', { className: Ns }),
                a.jsx(F, {
                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                    args: o,
                    isEnabled: ws(t),
                    children: a.jsx('div', { className: Ts }),
                }),
            ],
        });
    },
    As = {
        root: 'BaseCard_root_84cc2aa2',
        base: 'BaseCard_37b8764a',
        content: 'BaseCard_content_1d62173',
        content__large: 'BaseCard_content__large_84cc2aa2',
        content__huge: 'BaseCard_content__huge_a159e70c',
        content__installed: 'BaseCard_content__installed_9a42135e',
        content__current: 'BaseCard_content__current_77c9a331',
        content__nonclickable: 'BaseCard_content__nonclickable_84cc2aa2',
        content__disabled: 'BaseCard_content__disabled_84cc2aa2',
        image: 'BaseCard_image_dee4dedd',
        types: 'BaseCard_types_139035c6',
        highlight: 'BaseCard_highlight_84cc2aa2',
        overlay: 'BaseCard_overlay_9324495f',
        highlight__battleBooster: 'BaseCard_highlight__battleBooster_4bdc4d8a',
        overlay__battleBooster: 'BaseCard_overlay__battleBooster_f8ffa23f',
        overlay__battleBoosterReplace: 'BaseCard_overlay__battleBoosterReplace_e30faffd',
        overlay__equipmentPlus: 'BaseCard_overlay__equipmentPlus_2cf6561',
        overlay__builtInEquipment: 'BaseCard_overlay__builtInEquipment_b92b2027',
        overlay__equipmentTrophyBasic: 'BaseCard_overlay__equipmentTrophyBasic_84cc2aa2',
        overlay__equipmentTrophyUpgraded: 'BaseCard_overlay__equipmentTrophyUpgraded_83516f59',
        overlay__equipmentModernized: 'BaseCard_overlay__equipmentModernized_3344fc52',
        specialization: 'BaseCard_specialization_1308aaf5',
        name: 'BaseCard_name_1b6c7688',
        details: 'BaseCard_details_10d552ed',
        options: 'BaseCard_options_966dbfb7',
        actions: 'BaseCard_actions_b562d6fe',
        hover: 'BaseCard_hover_58f32905',
        disabled: 'BaseCard_disabled_c1faec42',
        locked: 'BaseCard_locked_446bc011',
        category: 'BaseCard_category_8ec49c2',
        category__tiny: 'BaseCard_category__tiny_84cc2aa2',
        category__small: 'BaseCard_category__small_84cc2aa2',
        category__medium: 'BaseCard_category__medium_54e55d36',
        category__large: 'BaseCard_category__large_84cc2aa2',
        category__huge: 'BaseCard_category__huge_9461c818',
    },
    Ds = ({
        parentId: t,
        name: n,
        tooltipArgs: o,
        contextMenuArgs: i,
        imageSource: l,
        overlayType: r,
        highlightType: c,
        isModernized: d,
        level: _,
        isDisabled: u,
        isCurrent: p,
        isActive: b,
        isLocked: h,
        isAbilitiesCard: g = !1,
        isClickable: x = !0,
        details: f,
        options: v,
        actions: y,
        specializations: C,
        extraImages: S,
        onSlotClick: j,
        shouldHandleMouseOver: k,
        category: N,
        onTooltipShow: T,
        onTooltipHide: w,
        lockReason: I,
    }) => {
        const D = gs(),
            [B, M] = e.useState({ isBaseHovered: !1, isActionsHovered: !1 }),
            [$, E] = e.useState(!1),
            P = e.useCallback(() => {
                (!B.isActionsHovered && m.highlight(), M({ isBaseHovered: !0, isActionsHovered: !1 }), k && E(!0));
            }, [B.isActionsHovered, k]),
            L = e.useCallback(() => {
                k && E(!1);
            }, [k]),
            F = e.useCallback(() => {
                M({ isBaseHovered: !1, isActionsHovered: !0 });
            }, []),
            O = e.useCallback(() => {
                M({ isBaseHovered: !1, isActionsHovered: !1 });
            }, []),
            q = x && (!u || g),
            W = e.useCallback(() => {
                q && j && (m.click(), j());
            }, [j, q]),
            V = B.isBaseHovered || B.isActionsHovered,
            G = e.useMemo(() => {
                let e = a.jsx('div', {
                    onMouseEnter: P,
                    onMouseLeave: O,
                    className: As.hover,
                    onClick: W,
                    children: u && g && a.jsx(Cs, { className: As.locked }),
                });
                return (
                    o && (e = a.jsx(A, { args: o, onShow: T, onHide: w, children: e })),
                    i && (e = a.jsx(H, { args: i, children: e })),
                    e
                );
            }, [u, g, P, O, W, o, i, T, w]),
            K = e.useMemo(() => ({ backgroundImage: `url(${l})` }), [l]),
            U =
                D === hs.Large || D === hs.Huge
                    ? R.images.gui.maps.shop.artefacts.c_180x135
                    : R.images.gui.maps.icons.quests.bonuses.small,
            Z = e.useMemo(() => {
                let e;
                return (
                    r && (e = d ? U.$dyn(`${r}_${_}_overlay`) : U.$dyn(`${r}_overlay`)),
                    e && { backgroundImage: `url(${e})` }
                );
            }, [U, r, d, _]),
            J = e.useMemo(() => {
                let e;
                return (c && (e = U.$dyn(`${c}_highlight`)), e && { backgroundImage: `url(${e})` });
            }, [U, c]),
            Q = e.useMemo(() => {
                const e = (D === hs.Large || D === hs.Huge ? hs.Large : hs.Medium) + '_' + N,
                    a = R.images.gui.maps.icons.specialization.$dyn(e);
                return a && { backgroundImage: `url(${a})` };
            }, [N, D]);
        return a.jsxs('div', {
            className: As.base,
            children: [
                a.jsxs('div', {
                    id: t,
                    className: s(
                        As.content,
                        As[`content__${D}`],
                        V && x && !u && As.content__hovered,
                        !V && As.content__out,
                        b && As.content__installed,
                        p && As.content__current,
                        u && As.content__disabled,
                        !q && As.content__nonclickable,
                    ),
                    onMouseLeave: L,
                    children: [
                        J &&
                            a.jsx('div', {
                                className: As.types,
                                children: a.jsx('div', { className: s(As.highlight, As[`highlight__${c}`]), style: J }),
                            }),
                        a.jsx('div', { className: As.image, style: K, children: S }),
                        u && a.jsx('div', { className: As.disabled }),
                        Q && a.jsx('span', { className: s(As.category, As[`category__${D}`]), style: Q }),
                        Z &&
                            a.jsx('div', {
                                className: As.types,
                                children: a.jsx('div', { className: s(As.overlay, As[`overlay__${r}`]), style: Z }),
                            }),
                        C && a.jsx('div', { className: As.specialization, children: C }),
                        a.jsx('div', {
                            className: s(As.name, u && As.name__disabled),
                            children: a.jsx(ea, { mediaSize: D, linesCount: 3, blocks: Ye(z(n)) }, n),
                        }),
                        f && a.jsx('div', { className: As.details, children: f }),
                        a.jsx('div', { className: s(As.options, u && As.options__disabled), children: v }),
                        G,
                        a.jsx('div', {
                            onMouseEnter: F,
                            onMouseLeave: O,
                            className: As.actions,
                            children: k && y ? e.cloneElement(y, { ...y.props, isMouseOverCard: $ }) : y,
                        }),
                    ],
                }),
                h &&
                    a.jsx('div', {
                        className: As.locked,
                        children: a.jsx(Is, { reason: I, isCritical: u, parentId: t }),
                    }),
            ],
        });
    },
    Bs = 'Price_610602ed',
    Rs = 'Price_9ca50750',
    Ms = 'Price_price__big_b7764b25',
    $s = 'Price_price__discount_f86e863a',
    Es = 'Price_currencyValue_e06cb210',
    Ps = ({
        price: t,
        defPrice: n,
        priceSeparator: o = null,
        showZero: i = !1,
        bigSize: l = !1,
        ignoreDiscount: r = !1,
    }) => {
        const c = !r && Boolean(n.length);
        return a.jsx('div', {
            className: Bs,
            children: t.map(
                ({ value: t }, n) =>
                    (i || Boolean(t.value)) &&
                    a.jsxs(
                        e.Fragment,
                        {
                            children: [
                                n > 0 && o,
                                a.jsx('div', {
                                    className: s(Rs, c && $s, l && Ms),
                                    children: a.jsx(O, {
                                        enabled: c,
                                        type: q.currency,
                                        size: l ? W.small : W.extraSmall,
                                        children: a.jsx(V, {
                                            type: t.name,
                                            enough: t.isEnough,
                                            size: l ? W.small : W.extraSmall,
                                            reverse: !0,
                                            children: a.jsx('div', { className: Es, children: G(t.value, 0) }),
                                        }),
                                    }),
                                }),
                            ],
                        },
                        `${n}_${t.name}`,
                    ),
            ),
        });
    },
    Ls = 'Storage_71445a9b',
    Fs = 'Storage_base__reversed_a50e09d0',
    zs = 'Storage_icon_5ce28ca8',
    Hs = 'Storage_count_157c267e',
    Os = 'Storage_count__zero_6c8ee43e';
function qs({ valueFirst: e = !1, itemsInStorage: t }) {
    const n = s(Ls, e && Fs),
        o = s(Hs, 0 === t && Os);
    return a.jsxs('div', {
        className: n,
        children: [a.jsx('div', { className: zs }), a.jsx('div', { className: o, children: t })],
    });
}
const Ws = 'Availability_181756ac',
    Vs = () => a.jsx('div', { className: Ws }),
    Gs = {
        root: 'Options_root_6818b5da',
        base: 'Options_945d8a9e',
        base__visually: 'Options_base__visually_b42d459a',
        base__hidden: 'Options_base__hidden_1ab7a478',
        'options-hide': 'Options_options-hide_6818b5da',
        base__shown: 'Options_base__shown_620b2679',
        'options-show': 'Options_options-show_6818b5da',
    },
    Ks = n.memo(({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: o, show: i = !0 }) => {
        let l = null;
        return (
            (l = n ? a.jsx(Vs, {}) : e || (o && 0 === e) ? a.jsx(qs, { itemsInStorage: e }) : t && a.jsx(Ps, { ...t })),
            a.jsx('div', {
                className: s(
                    Gs.base,
                    Gs['base__' + (i ? 'shown' : 'hidden')],
                    (n || e || (o && 0 === e)) && Gs.base__visually,
                ),
                children: l,
            })
        );
    }),
    Us = 'Booster_3fb8ec86',
    Zs = 'Booster_unit_cacf1278',
    Js = l(({ isCurrent: s, index: t }) => {
        const n = gs(),
            o = n === hs.Large || n === hs.Huge,
            { model: i, controls: l } = Oe(),
            {
                name: r,
                installedSlotId: c,
                itemInstalledSetupIdx: d,
                itemInstalledSetupSlotIdx: _,
                isMountedMoreThanOne: u,
                imageName: m,
                itemsInStorage: p,
                oldStylePrice: b,
                intCD: h,
                isDisabled: g,
                overlayType: x,
                isLocked: f,
                isMounted: v,
                isMountedInOtherSetup: y,
                description: C,
                isBuyMoreVisible: S,
                isBuyMoreDisabled: j,
                highlightType: k,
                lockReason: N,
            } = i.computes.boosters.booster(t),
            T = c > -1,
            w = `${h}-booster`,
            I = e.useMemo(() => {
                const e = [];
                return (!g && T && (S && e.push(oe), (!Boolean(p) && !v) || y ? e.push(le) : e.push(ie)), e);
            }, [g, T, S, p, v, y]),
            A = e.useCallback(
                (e) => (l.boosters.actSlot({ actionType: e, intCD: h, installedSlotId: c }), e === oe ? 1e3 : 120),
                [l, h, c],
            ),
            D = re(A),
            B = e.useCallback(() => {
                I.includes(le) ? D(le) : I.includes(ie) ? D(ie) : D(ce);
            }, [I, D]),
            [M, $] = e.useMemo(() => {
                const e = { intCD: h, slotType: de, fieldType: _e };
                return [
                    e,
                    {
                        ...e,
                        installedSlotId: c,
                        itemInstalledSetupIdx: d,
                        itemInstalledSetupSlotIdx: _,
                        isMountedMoreThanOne: u,
                        isMounted: v,
                        isDisabled: g,
                    },
                ];
            }, [h, c, d, _, v, u, g]),
            E = e.useMemo(() => {
                const e = o
                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(m)
                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(m);
                return String(e);
            }, [o, m]);
        return a.jsx(Ds, {
            parentId: w,
            name: r,
            tooltipArgs: M,
            contextMenuArgs: $,
            imageSource: E,
            isClickable: !0,
            isCurrent: s,
            isActive: T,
            isDisabled: g,
            isLocked: f,
            options: a.jsx(Ks, { isMounted: v || y, itemsInStorage: p, show: !I.length, price: b }),
            actions: a.jsx(ha, { parentId: w, availableActions: I, onActionClick: D, isBuyMoreDisabled: j }),
            details: a.jsx(
                ta,
                { parentId: w, classMix: Us, mediaSize: n, classColorMix: Zs, linesShown: o ? 4 : 3, text: C },
                C,
            ),
            overlayType: x,
            highlightType: k,
            onSlotClick: B,
            lockReason: N,
        });
    }),
    Qs = 'Consumable_861e61b6',
    Xs = l(({ isCurrent: s, index: t }) => {
        const { model: n, controls: o } = Oe(),
            i = gs(),
            l = i === hs.Large || i === hs.Huge,
            {
                name: r,
                installedSlotId: c,
                itemInstalledSetupIdx: d,
                itemInstalledSetupSlotIdx: _,
                isMountedMoreThanOne: u,
                imageName: m,
                itemsInStorage: p,
                oldStylePrice: b,
                intCD: h,
                isDisabled: g,
                overlayType: x,
                isLocked: f,
                isMounted: v,
                isMountedInOtherSetup: y,
                isBuiltIn: C,
                description: S,
                isBuyMoreDisabled: j,
                lockReason: k,
            } = n.computes.consumables.consumable(t),
            N = c > -1,
            T = `${h}-consumable`,
            w = e.useMemo(() => {
                const e = [];
                return (
                    !g &&
                        N &&
                        (!s && e.push(ue), C || (e.push(oe), (!Boolean(p) && !v) || y ? e.push(le) : e.push(ie))),
                    e
                );
            }, [g, N, s, C, p, v, y]),
            I = e.useCallback(
                (e) => (o.consumables.actSlot({ actionType: e, intCD: h, installedSlotId: c }), e === oe ? 1e3 : 300),
                [o, h, c],
            ),
            A = re(I),
            B = e.useCallback(() => {
                w.includes(ue) ? A(ue) : w.includes(le) ? A(le) : w.includes(ie) ? A(ie) : A(ce);
            }, [w, A]),
            [M, $] = e.useMemo(() => {
                const e = { intCD: h, slotType: me, fieldType: _e };
                return [
                    e,
                    {
                        ...e,
                        installedSlotId: c,
                        itemInstalledSetupIdx: d,
                        itemInstalledSetupSlotIdx: _,
                        isMountedMoreThanOne: u,
                        isMounted: v,
                        isDisabled: g,
                    },
                ];
            }, [h, c, d, _, u, v, g]),
            E = e.useMemo(() => {
                const e = l
                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(m)
                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(m);
                return String(e);
            }, [l, m]),
            P = e.useMemo(() => a.jsx(D, { text: S, isTruncationAvailable: !0, classMix: Qs }), [S]);
        return a.jsx(Ds, {
            parentId: T,
            name: r,
            tooltipArgs: M,
            contextMenuArgs: $,
            imageSource: E,
            isCurrent: s,
            isActive: N,
            isDisabled: g,
            isLocked: f,
            isClickable: !C,
            options: a.jsx(Ks, { price: b, isMounted: v || y, itemsInStorage: p, show: !w.length }),
            actions: a.jsx(ha, { parentId: T, availableActions: w, onActionClick: A, isBuyMoreDisabled: j }),
            details: P,
            overlayType: x,
            onSlotClick: B,
            lockReason: k,
        });
    }),
    Ys = 'Unit_6f5922a6',
    et = 'Unit_base__special_15945e4e',
    at = 'Unit_glow_b8d65242',
    st = R.strings.tank_setup.kpi.bonus.valueTypes,
    tt = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
    nt = l(({ deviceID: e, bonusID: t }) => {
        const { model: n } = Oe(),
            { activeSpecsMask: o } = n.computes.optDevices.device(e),
            i = n.computes.optDevices.bonusValue(e, t);
        if (!i) return null;
        const { valueType: l, value: r, valueKey: c } = i,
            d = Boolean(o),
            _ = 'mul' === l ? 100 * (r - 1) : r,
            u = _ > 0 ? '+' : '',
            m = K(_, 1),
            p = st.$dyn(c),
            b = `${m}${p ? ` ${p}` : tt}`;
        return a.jsx('div', {
            className: s(Ys, d && et),
            children: a.jsxs('span', { children: [a.jsx('span', { className: at }), u + b] }),
        });
    }),
    ot = 'Bonus_646ae1fb',
    it = 'Bonus_39f46cb9',
    lt = 'Bonus_text_970d2a28',
    rt = { calcValue: 0, isPositive: !0, valueKey: 'default' },
    ct = (e, a = !1) =>
        a ||
        (({ values: e, localeName: a }) => {
            const s = e.filter(({ value: { valueKey: e } = {} }) => e === a).pop();
            if (!s) return rt;
            const { value: t, valueType: n, valueKey: o } = s.value,
                i = 'mul' === n ? 100 * (t - 1) : t;
            return { calcValue: i, isPositive: i > 0, valueKey: o };
        })(e).isPositive
            ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
            : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName),
    dt = l(({ bonusID: e, deviceID: s }) => {
        const t = gs(),
            n = t === hs.Large || t === hs.Huge ? 4 : 3,
            { model: o } = Oe(),
            i = o.computes.optDevices.bonusVisibleLinesCount(s, e, n),
            l = o.computes.optDevices.bonus(s, e),
            r = ct(l);
        return i
            ? a.jsx('div', {
                  className: ot,
                  children:
                      r &&
                      a.jsxs('span', {
                          className: it,
                          children: [
                              a.jsx(nt, { deviceID: s, bonusID: e }),
                              ' ',
                              i &&
                                  r &&
                                  a.jsx('span', {
                                      className: lt,
                                      children: a.jsx(ea, { linesCount: i, blocks: Ye(String(r)), mediaSize: t }),
                                  }),
                          ],
                      }),
              })
            : null;
    }),
    _t = 'Bonuses_c2d15d73',
    ut = 'Bonuses_bonus_562836fc',
    mt = 'Bonuses_text_d18ff86f',
    pt = 'Bonuses_effect_fc372477',
    bt = 'Bonuses_icon_82d0541f',
    ht = l(({ deviceID: e }) => {
        const s = gs(),
            { model: t } = Oe(),
            { intCD: n, effect: o } = t.computes.optDevices.device(e),
            i = t.computes.optDevices.bonusesLength(e),
            l = `${n}-device`,
            r = t.computes.optDevices.bonusEffectLinesCount(e);
        return a.jsxs('div', {
            id: `${l}-bonuses`,
            className: _t,
            children: [
                o &&
                    a.jsxs('div', {
                        className: ut,
                        children: [
                            a.jsxs('span', {
                                className: pt,
                                children: [a.jsx('span', { className: bt }), R.strings.tank_setup.effects.name()],
                            }),
                            ' ',
                            a.jsx('span', {
                                className: mt,
                                children: a.jsx(ea, { mediaSize: s, linesCount: r, blocks: Ye(o) }),
                            }),
                        ],
                    }),
                U(i, (s) => a.jsx(dt, { bonusID: s, deviceID: e }, `${s}_${n}`)),
            ],
        });
    }),
    gt = 'DeviceActions_963976ce',
    xt = 'DeviceActions_base__hidden_6d47b6d6',
    ft = 'DeviceActions_base__shown_b2955289',
    vt = e.memo(
        ({
            parentId: e,
            availableActions: t,
            onActionClick: n,
            isInstalled: o,
            isMouseOverCard: i,
            isModernized: l,
            isFreeToDemount: r,
            destroyTooltipBodyPath: c,
            level: d,
        }) => {
            const _ = (i || o) && t.includes(pe),
                u = t.length && (t[0] !== pe || _),
                m = s(gt, u ? ft : xt);
            return a.jsxs('div', {
                className: m,
                children: [
                    a.jsx(pa, { parentId: `${e}-${ie}`, actionType: ie, onClick: n, show: t.includes(ie) }),
                    a.jsx(pa, { parentId: `${e}-${le}`, actionType: le, onClick: n, show: t.includes(le) }),
                    a.jsx(pa, {
                        parentId: `${e}-${pe}`,
                        actionType: pe,
                        onClick: n,
                        show: _,
                        isModernized: l,
                        level: d,
                    }),
                    a.jsx(pa, {
                        parentId: `${e}-${be}`,
                        actionType: be,
                        onClick: n,
                        show: t.includes(be),
                        isFreeToDemount: r,
                    }),
                    a.jsx(pa, {
                        parentId: `${e}-${he}`,
                        actionType: he,
                        onClick: n,
                        show: t.includes(he),
                        imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                        isFreeToDemount: r,
                    }),
                    a.jsx(pa, { parentId: `${e}-${ge}`, actionType: ge, onClick: n, show: t.includes(ge) }),
                    a.jsx(pa, {
                        parentId: `${e}-${xe}`,
                        actionType: xe,
                        buttonType: h.secondary,
                        onClick: n,
                        show: (l || !r) && t.includes(xe),
                        isModernized: l,
                        tooltipBodyPath: c,
                    }),
                ],
            });
        },
    ),
    yt = l(({ index: s, isCurrent: t }) => {
        const n = gs(),
            o = n === hs.Large || n === hs.Huge,
            { model: i, controls: l } = Oe(),
            {
                name: r,
                installedSlotId: c,
                itemInstalledSetupIdx: d,
                itemInstalledSetupSlotIdx: _,
                isMountedMoreThanOne: u,
                imageName: m,
                itemsInStorage: p,
                oldStylePrice: b,
                specializations: h,
                intCD: g,
                isMounted: x,
                isMountedInOtherSetup: f,
                isDisabled: v,
                isFreeToDemount: y,
                overlayType: C,
                isLocked: S,
                isUpgradable: j,
                isTrophy: k,
                activeSpecsMask: N,
                isModernized: T,
                level: w,
                lockReason: I,
                destroyTooltipBodyPath: A,
            } = i.computes.optDevices.device(s),
            D = c > -1,
            B = `${g}-device`,
            { availableActions: M, isDeviceClickable: $ } = e.useMemo(() => {
                const e = [];
                let a = !0;
                return (
                    D &&
                        !v &&
                        (t || e.push(ue),
                        x
                            ? ((a = !t), e.push(...((e) => (e ? [he, ge] : [be]))(u)), e.push(xe))
                            : e.push(((e, a, s) => ((!Boolean(e) && !a) || s ? le : ie))(p, x, f))),
                    j && !v && e.push(pe),
                    { availableActions: e, isDeviceClickable: a }
                );
            }, [D, v, j, t, x, u, p, f]),
            E = e.useCallback(
                (e) => {
                    l.optDevices.actSlot({ actionType: e, intCD: g, installedSlotId: c });
                },
                [l, g, c],
            ),
            P = e.useCallback(() => {
                M.length && M[0] !== pe ? E(M[0]) : E(ce);
            }, [M, E]),
            [L, F] = e.useMemo(() => {
                const e = { intCD: g, slotType: ve, fieldType: _e };
                return [
                    e,
                    {
                        ...e,
                        installedSlotId: c,
                        itemInstalledSetupIdx: d,
                        itemInstalledSetupSlotIdx: _,
                        isMountedMoreThanOne: u,
                        isMounted: x,
                        isDisabled: v,
                    },
                ];
            }, [g, c, d, _, u, x, v]),
            z = e.useMemo(() => {
                const e = o
                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(m)
                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(m);
                return String(e);
            }, [o, m]);
        return a.jsx(Ds, {
            parentId: B,
            name: r,
            tooltipArgs: L,
            contextMenuArgs: F,
            imageSource: z,
            isCurrent: t,
            isActive: D,
            isDisabled: v,
            isLocked: S,
            isClickable: $,
            isModernized: T,
            level: w,
            specializations:
                h && h.specializations.length ? a.jsx(fe, { ...h, activeSpecsMask: N, mediaSize: n }) : null,
            details: a.jsx(ht, { compare: !1, deviceID: s }),
            options: a.jsx(Ks, {
                isMounted: x || f,
                itemsInStorage: p,
                price: b,
                possibleZeroCount: k || T,
                show: !M.length || Boolean(p || x || f),
            }),
            actions: a.jsx(vt, {
                parentId: B,
                availableActions: M,
                onActionClick: E,
                isInstalled: D,
                isModernized: T,
                level: w,
                isFreeToDemount: y,
                destroyTooltipBodyPath: A,
            }),
            overlayType: C,
            onSlotClick: P,
            shouldHandleMouseOver: !0,
            lockReason: I,
        });
    }),
    Ct = 'Card_1f1a301e',
    St = l(({ index: e, forwardRef: s, type: t }) => {
        const { model: n } = Oe(),
            { selectedSlot: o } = n.ammunitionPanel.get(),
            { isVisible: i, installedSlotId: l } = (() => {
                switch (t) {
                    case ve:
                        return n.computes.optDevices.device(e);
                    case de:
                        return n.computes.boosters.booster(e);
                    default:
                        return n.computes.consumables.consumable(e);
                }
            })(),
            r = l > -1 && o === l;
        return i
            ? a.jsx('div', {
                  className: Ct,
                  ref: r ? s : null,
                  children: (() => {
                      switch (t) {
                          case de:
                              return a.jsx(Js, { index: e, isCurrent: r });
                          case ve:
                              return a.jsx(yt, { index: e, isCurrent: r });
                          default:
                              return a.jsx(Xs, { index: e, isCurrent: r });
                      }
                  })(),
              })
            : null;
    }),
    jt = 'Cards_b30dc0df',
    kt = 'Cards_base__disabled_2df7362',
    Nt = ({ isDisabled: e, currentCardRef: t, cardsAmount: n, type: o }) =>
        a.jsx('div', {
            className: s(jt, e && kt),
            children: U(n, (e) => a.jsx(St, { index: e, forwardRef: t, type: o }, e)),
        }),
    Tt = 'Animation_f6d1cf8b',
    wt = 'Animation_base__withAnimation_b8429324',
    It = 'Animation_base__enter_cbc895a8',
    At = 'Animation_base__exit_49521120',
    Dt = ({ children: t, when: n, canAccept: o }) => {
        const i = e.useCallback((e, a) => {
                qe().then(() => {
                    ((e.className = ''), e.classList.add(Tt), e.classList.add(a));
                });
            }, []),
            l = e.useCallback(
                (e) => {
                    i(e, It);
                },
                [i],
            ),
            d = e.useCallback(
                (e) => {
                    i(e, At);
                },
                [i],
            );
        return n
            ? a.jsx(r, {
                  children: a.jsx(
                      c,
                      {
                          in: o,
                          timeout: 500,
                          onEnter: l,
                          onExit: d,
                          children: a.jsx('div', { className: s(Tt, wt), children: t }),
                      },
                      `index-${o}`,
                  ),
              })
            : a.jsx('div', { className: Tt, children: t });
    },
    Bt = e.createContext(null),
    Rt = l(
        ({ label: s = R.strings.tank_setup.dealPanel.autoRenew(), onValueChanged: t, renewType: n = Kt.General }) => {
            const { model: o, controls: i } = (() => {
                    const a = e.useContext(Bt);
                    if (!a)
                        throw Error('Context not found. Make sure your component is wrapped in ModelContext.Provider.');
                    return a;
                })(),
                { isAutoRenewalEnabled: l } = o.dealPanel.get(),
                r = e.useCallback(() => {
                    (i.changeAutoRenewal(!l), t && t(!l));
                }, [i, l, t]),
                c = e.useMemo(() => {
                    const e = R.strings.tank_setup.tooltip.autoRenewal,
                        a = e.header.$dyn(n),
                        s = n === Kt.General ? '' : e.body.$dyn(n);
                    return { header: String(a || e.header.general()), body: s ? String(s) : void 0 };
                }, [n]);
            return a.jsx(p, {
                ...c,
                children: a.jsx(Z, { id: 'renewal-setup-checkbox', isChecked: l, text: s, onChange: r }),
            });
        },
    ),
    Mt = 'ConfirmButton_eb693460',
    $t = n.memo(({ applyBtnString: e, isDisabled: s, onConfirm: t, confirmButtonRef: n }) =>
        a.jsx('div', {
            ref: n,
            className: Mt,
            id: 'deal-panel-confirm',
            children: a.jsx(b, {
                size: J.medium,
                disabled: s,
                onClick: () => t && t(),
                children: R.strings.tank_setup.dealPanel.button.$dyn(e),
            }),
        }),
    ),
    Et = 'Controls_9d09936a',
    Pt = 'Controls_button_2fdd255d',
    Lt = n.memo(
        ({ applyBtnString: e = ye, isDisabled: s, canCancel: t, onCancel: n, onConfirm: o, confirmButtonRef: i }) => {
            const l = R.strings.tank_setup.dealPanel,
                r = a.jsx($t, { applyBtnString: e, isDisabled: s, onConfirm: o, confirmButtonRef: i });
            return a.jsxs('div', {
                className: Et,
                children: [
                    s ? a.jsx(p, { body: l.tooltip.notEnough(), children: a.jsx('div', { children: r }) }) : r,
                    a.jsx('div', {
                        id: 'deal-panel-cancel',
                        children: a.jsx(b, {
                            size: J.medium,
                            type: h.secondary,
                            mixClass: Pt,
                            disabled: !t,
                            onClick: n,
                            children: l.button.cancel(),
                        }),
                    }),
                ],
            });
        },
    ),
    [Ft, zt] = S()(
        ({ observableModel: e }) => ({
            ...e.primitives(['totalItemsInStorage', 'isDisabled', 'canAccept', 'canCancel']),
            root: e.object(),
            dealPanel: e.object(),
            price: e.array('price'),
            defPrice: e.array('defPrice'),
            discount: e.array('discount'),
        }),
        ({ externalModel: e }) => ({
            changeAutoRenewal: e.createCallback((e) => ({ value: e }), 'onAutoRenewalChanged'),
        }),
    ),
    Ht = 'TotalPrice_3c076a40',
    Ot = 'TotalPrice_message_605b61d6',
    qt = 'TotalPrice_message__hidden_d1eea671',
    Wt = 'TotalPrice_plus_edad71e7',
    Vt = ({ parentId: e, isHideMessage: t, priceLabel: n }) => {
        const { model: o } = zt();
        return a.jsxs('div', {
            id: `${e}-total-price`,
            className: Ht,
            children: [
                a.jsx('div', { className: s(Ot, t && qt), children: n }),
                a.jsx(Ps, {
                    ignoreDiscount: !0,
                    bigSize: !0,
                    price: o.price.get(),
                    defPrice: o.defPrice.get(),
                    discount: o.discount.get(),
                    priceSeparator: a.jsx('div', { className: Wt }),
                }),
            ],
        });
    },
    Gt = {
        root: 'App_root_0',
        base: 'App_a8706f20',
        base__tiny: 'App_base__tiny_77377dbe',
        base__small: 'App_base__small_0',
        base__medium: 'App_base__medium_24215751',
        base__large: 'App_base__large_0',
        base__huge: 'App_base__huge_707631ff',
        base__dialog: 'App_base__dialog_b55893d',
        storage: 'App_storage_d29994b7',
        storage__medium: 'App_storage__medium_0',
        storage__large: 'App_storage__large_0',
        storage__huge: 'App_storage__huge_47cf72ab',
        from: 'App_from_1433393c',
        plus: 'App_plus_73d738de',
        renewal: 'App_renewal_6e51a54f',
        renewal__dialog: 'App_renewal__dialog_a526d8f1',
        control: 'App_control_4c515344',
        totalPrice: 'App_totalPrice_c974d485',
        totalPrice__mixed: 'App_totalPrice__mixed_c33b87ce',
    };
var Kt = ((e) => (
    (e.General = 'general'),
    (e.Consumables = 'consumables'),
    (e.Shells = 'shells'),
    (e.Boosters = 'boosters'),
    (e.Repair = 'repair'),
    (e.LSConsumables = 'LSConsumables'),
    e
))(Kt || {});
const Ut = R.strings.tank_setup.dealPanel,
    Zt = l(
        ({
            renewalType: t,
            withConfirmation: n = !1,
            mediaSize: o = hs.Medium,
            panelType: i = 'row',
            priceLabel: l = Ut.toBePaid(),
            autoRenewalLabel: r,
            onAutoRenewalChanged: c,
            onDealConfirmed: d,
            onDealCancelled: _,
        }) => {
            const u = zt(),
                { model: m } = u,
                p = e.useRef(null),
                b = o === hs.Tiny || o === hs.Small,
                h = 'row' === i,
                g = Boolean(m.totalItemsInStorage.get()),
                x = Boolean(m.price.get().length),
                f = b && g && x;
            return a.jsx(Bt.Provider, {
                value: u,
                children: a.jsxs('div', {
                    className: s(Gt.base, o && Gt[`base__${o}`], t && Gt.base__renewal, !h && Gt.base__dialog),
                    children: [
                        t &&
                            a.jsx('div', {
                                className: s(Gt.renewal, !h && Gt.renewal__dialog),
                                children: a.jsx(Rt, { renewType: Kt[t], onValueChanged: c, label: r }),
                            }),
                        a.jsx(Dt, {
                            when: h,
                            canAccept: m.canAccept.get(),
                            children: a.jsxs(a.Fragment, {
                                children: [
                                    g &&
                                        a.jsxs('div', {
                                            className: s(Gt.storage, o && Gt[`storage__${o}`]),
                                            children: [
                                                !b && a.jsx('div', { className: Gt.from, children: Ut.fromStorage() }),
                                                a.jsx(qs, {
                                                    valueFirst: !0,
                                                    itemsInStorage: m.totalItemsInStorage.get(),
                                                }),
                                            ],
                                        }),
                                    f && a.jsx('div', { className: Gt.plus }),
                                    x &&
                                        a.jsx('div', {
                                            className: s(Gt.totalPrice, f && Gt.totalPrice__mixed),
                                            children: a.jsx(Vt, {
                                                parentId: 'deal-panel',
                                                priceLabel: l,
                                                isHideMessage: b && h,
                                            }),
                                        }),
                                    n &&
                                        m.canAccept.get() &&
                                        a.jsx('div', {
                                            className: Gt.control,
                                            children: a.jsx(Lt, {
                                                isDisabled: m.isDisabled.get(),
                                                canCancel: m.canCancel.get(),
                                                onCancel: () => _ && _(),
                                                onConfirm: () => d && d(),
                                                confirmButtonRef: p,
                                            }),
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
            });
        },
    ),
    Jt = l(({ parentModelPath: e, ...s }) => {
        const t = `${e}.dealPanel`;
        return a.jsx(Ft, { options: { context: t }, children: a.jsx(Zt, { ...s }) });
    }),
    Qt = { root: 'SetupTab_root_90f3c9a4', tab__extraSmall: 'SetupTab_tab__extraSmall_fe7dd641' },
    Xt = ({ name: s, newItemsCount: t, handleTabChanged: n, isTooltipEnabled: o = !0, ...i }) => {
        const l = R.strings.tank_setup.tabs.$dyn(s),
            r = e.useCallback(() => {
                (m.click(), n({ name: s }));
            }, [n, s]),
            c = e.useMemo(() => ({ name: s }), [s]),
            d = Qt;
        return a.jsx(F, {
            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
            args: c,
            isEnabled: o,
            children: a.jsx('div', {
                children: a.jsx(Q, {
                    ...i,
                    isNotified: Boolean(t),
                    onClick: r,
                    children: a.jsx('div', { className: d.tab, children: l }),
                }),
            }),
        });
    },
    Yt = ({ tabs: e, selectedTabName: s, handleTabChanged: t, isTooltipEnabled: n = !0 }) =>
        a.jsx(
            X,
            {
                activeKey: s,
                children: a.jsx('div', {
                    'tabs-role': 'tabs-list',
                    children: y(e, (e) =>
                        a.jsx(
                            Xt,
                            {
                                handleTabChanged: t,
                                'tabs-role': 'tab-key',
                                'tab-key': e.name,
                                isTooltipEnabled: n,
                                ...e,
                            },
                            e.name,
                        ),
                    ),
                }),
            },
            s,
        ),
    en = {
        root: 'Header_root_65f475ba',
        base: 'Header_56e29099',
        base__small: 'Header_base__small_65f475ba',
        base__medium: 'Header_base__medium_691ef1e5',
        base__large: 'Header_base__large_65f475ba',
        base__huge: 'Header_base__huge_1312012e',
        tabs: 'Header_tabs_70df0f44',
        tabs__small: 'Header_tabs__small_65f475ba',
        tabs__tiny: 'Header_tabs__tiny_7d02abf8',
        title: 'Header_title_5d9628da',
        title__small: 'Header_title__small_65f475ba',
        title__tiny: 'Header_title__tiny_6f6f5f2c',
    },
    an = l(({ title: e, children: t, tabProps: n }) => {
        const o = gs();
        return a.jsxs('div', {
            className: s(en.base, o && en[`base__${o}`]),
            children: [
                a.jsxs('div', {
                    children: [
                        a.jsx('div', { className: s(en.title, o && en[`title__${o}`]), children: e }),
                        n &&
                            a.jsx('div', {
                                className: s(en.tabs, o && en[`tabs__${o}`]),
                                children: a.jsx(Yt, { ...n }),
                            }),
                    ],
                }),
                t,
            ],
        });
    }),
    sn = (e) => {
        if (!e) return !1;
        const { width: a, height: s } = e.getBoundingClientRect();
        return 0 !== a && 0 !== s;
    },
    tn = 'ScrollableCards_a43df15c',
    nn = 'ScrollableCards_scroll_896d494d',
    on = ({ children: s, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: o = null }) => {
        const [i, l] = e.useState(!1),
            r = e.useRef(null),
            c = e.useRef(null),
            d = e.useRef(!1),
            _ = e.useRef(''),
            u = ((a) => {
                const [s, t] = e.useState(sn(a ? a.current : null));
                return (
                    e.useEffect(() => {
                        let e = 0;
                        const s = () => {
                            e = requestAnimationFrame(() => {
                                sn(a ? a.current : null) ? t(!0) : s();
                            });
                        };
                        return (
                            s(),
                            () => {
                                cancelAnimationFrame(e);
                            }
                        );
                    }, [a]),
                    e.useEffect(() => () => t(!1), [a]),
                    s
                );
            })(r),
            m = M();
        e.useEffect(
            () => () => {
                d.current = !1;
            },
            [],
        );
        const p = Y(() => {
                (d.current && l(!0), m.events.off('rest', p));
            }),
            b = e.useCallback(() => {
                d.current && l(!1);
            }, []),
            h = e.useCallback(() => {
                const e = c.current,
                    a = r.current;
                if (e && m && a) {
                    const s = e.offsetTop + (e.offsetHeight - a.offsetHeight);
                    (m.events.on('rest', p), m.applyScroll(s));
                }
            }, [p, m]);
        (e.useEffect(() => {
            N(() => {
                u &&
                    (_.current === n
                        ? h()
                        : ((_.current = n),
                          new Promise((e) => {
                              requestAnimationFrame(() => {
                                  requestAnimationFrame(() => {
                                      e();
                                  });
                              });
                          }).then(() => {
                              (h(), d.current || (d.current = !0));
                          })));
            });
        }, [u, n, h, t]),
            e.useEffect(() => {
                d.current && m.applyScroll(0);
            }, [m, o]));
        const g = { currentCardRef: c, scrollWrapperRef: r, isFinalAnimationRunning: i, onFinalAnimationDone: b };
        return a.jsx('div', {
            className: tn,
            children: a.jsx('div', {
                className: nn,
                ref: r,
                children: a.jsx($.Vertical.Default, { api: m, children: e.cloneElement(s, g) }, n),
            }),
        });
    },
    ln = l(() => {
        const { model: e, controls: s } = Oe(),
            t = gs(),
            { selectedSlot: n } = e.ammunitionPanel.get(),
            o = e.boosters.tabs.get(),
            i = e.computes.boosters.length();
        return a.jsx(xs, {
            header: a.jsx(an, {
                title: R.strings.tank_setup.section.battleBoosters(),
                tabProps: { ...o, handleTabChanged: s.boosters.changeTab, isTooltipEnabled: !1 },
            }),
            content: a.jsx(on, {
                selectedSlotId: n,
                scrollAreaKey: o.selectedTabName,
                updateKey: i,
                children: a.jsx(Nt, { type: de, cardsAmount: i }),
            }),
            footer: a.jsx(Jt, {
                withConfirmation: !0,
                renewalType: Kt.Boosters,
                parentModelPath: 'model.tankSetup.battleBoostersSetup',
                onDealConfirmed: s.boosters.confirmDeal,
                onDealCancelled: s.boosters.cancelDeal,
                onAutoRenewalChanged: (e) => s.boosters.changeAutoRenewal(e),
                mediaSize: t,
            }),
        });
    }),
    rn = l(() => {
        const { model: e, controls: s } = Oe(),
            t = gs(),
            { selectedSlot: n } = e.ammunitionPanel.get(),
            o = e.computes.consumables.length();
        return a.jsx(xs, {
            header: a.jsx(an, { title: R.strings.last_stand_lobby.hangarAmmunitionSetup.header() }),
            content: a.jsx(on, { selectedSlotId: n, children: a.jsx(Nt, { cardsAmount: o }) }),
            footer: a.jsx(Jt, {
                withConfirmation: !0,
                renewalType: 'LSConsumables',
                mediaSize: t,
                parentModelPath: 'model.tankSetup.consumablesSetup',
                onDealConfirmed: s.consumables.confirmDeal,
                onDealCancelled: s.consumables.cancelDeal,
                onAutoRenewalChanged: s.consumables.changeAutoRenewal,
            }),
        });
    }),
    cn = 'CtaButtons_7675c616',
    dn = 'CtaButtons_content_2eb9414b',
    _n = 'CtaButtons_substrate_c26bd83c',
    un = 'CtaButtons_indicator_815d5e71',
    mn = 'CtaButtons_toggle_a99aab95',
    pn = 'CtaButtons_toggle__on_c671e209',
    bn = ({ content: t, ctaType: n, tooltipArgs: o, callback: i, withToggle: l = !1, toggle: r, buttonProps: c }) => {
        const d = e.useCallback(() => {
                i(n, r);
            }, [n, i, r]),
            _ = e.useMemo(() => {
                if (l) {
                    const e = s(mn, r && pn);
                    return a.jsxs('div', {
                        className: dn,
                        children: [
                            a.jsx('div', { className: _n }),
                            r && a.jsx('div', { className: un }),
                            a.jsx('div', { className: e }),
                            t,
                        ],
                    });
                }
                return t;
            }, [l, t, r]);
        return a.jsx(p, { ...o, children: a.jsx(b, { ...c, onClick: d, children: _ }) });
    };
function hn({ ctaConfigs: e }) {
    return a.jsx('div', { className: cn, children: e.map((e) => a.jsx(bn, { ...e }, e.ctaType)) });
}
const gn = 'FilterItem_c203baa6',
    xn = ({ name: e }) =>
        a.jsx('div', {
            className: gn,
            style: { backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})` },
        }),
    fn = 'ClearButton_acbcc144',
    vn = 'ClearButton_stroke_e21abe9',
    yn = 'ClearButton_background_3644f309',
    Cn = 'ClearButton_base__hover_fe0c0132',
    Sn = 'ClearButton_base__down_fe0c0132',
    jn = 'ClearButton_cross_4e07130a',
    kn = {
        header: R.strings.crew.filterPanel.counter.reset.header(),
        body: R.strings.crew.filterPanel.counter.reset.body(),
    },
    Nn = ({ parentId: t, onClick: n, soundHover: o = 'highlight', soundClick: i = 'play' }) => {
        const [l, r] = e.useState(!1),
            [c, d] = e.useState(!1),
            _ = e.useCallback(() => {
                (m.sound(i), d(!1), r(!0));
            }, [i]),
            u = e.useCallback(() => {
                (m.sound(o), d(!0));
            }, [o]),
            b = e.useCallback(() => {
                (d(!1), r(!1));
            }, []);
        return a.jsx(p, {
            ...kn,
            children: a.jsxs('div', {
                id: t,
                className: s(fn, c && Cn, l && Sn),
                onMouseDown: _,
                onMouseOver: u,
                onMouseLeave: b,
                onClick: n,
                children: [
                    a.jsx('div', { className: yn }),
                    a.jsx('div', { className: vn }),
                    a.jsx('div', { className: jn }),
                ],
            }),
        });
    },
    Tn = 'MatchDetails_3576aead',
    wn = 'MatchDetails_count_b136e2f9',
    In = 'MatchDetails_clear_38d40852',
    An = 'MatchDetails_clear__shown_c6b4d855',
    Dn = 'MatchDetails_separator_5a2e91a7',
    Bn = 'MatchDetails_arrow_14f56266',
    Rn = ({ isFilterActive: t = !1, onFilterReset: n, matchCount: o, totalCount: i }) => {
        const l = e.useCallback(() => n(), [n]);
        return a.jsxs('div', {
            className: Tn,
            children: [
                R.strings.tank_setup.filters.shown(),
                t &&
                    a.jsxs(a.Fragment, {
                        children: [
                            a.jsx('span', { className: wn, children: o }),
                            a.jsxs('span', { className: Dn, children: ['/', a.jsx('span', { className: Bn })] }),
                        ],
                    }),
                a.jsx('span', { className: wn, children: i }),
                a.jsx('span', {
                    className: s(In, t && An),
                    children: a.jsx(Nn, { parentId: 'match-details-clear-btn', onClick: l }),
                }),
            ],
        });
    },
    Mn = {
        root: 'Filter_root_c0a62b94',
        base: 'Filter_da935950',
        base__tiny: 'Filter_base__tiny_d4b9cd79',
        base__detailed: 'Filter_base__detailed_519335a5',
        buttons: 'Filter_buttons_18c313bf',
        button: 'Filter_button_bf21522d',
    },
    $n = ({
        selectedFilterCount: e,
        totalFilterCount: t,
        filters: n,
        isEnabled: o,
        showDetails: i = !1,
        onFilterChanged: l,
        onFilterReset: r,
        selectedSlotSpecialization: c,
    }) => {
        const d = gs(),
            _ = y(n, ({ name: e, isSelected: t }) => ({
                ctaType: e,
                content: a.jsx(xn, { name: e }),
                callback: (e, a) => {
                    (l({ name: e }),
                        ((e, a) => {
                            const s = 'cons_equipment_filter' + (a ? '_on' : '_off');
                            a ? m.sound(s + '_' + e) : m.sound(s);
                        })(e, !a));
                },
                withToggle: !0,
                toggle: t,
                buttonProps: { type: h.ghost, mixClass: s(Mn.button, c && e === c && 'filter-for-highlight') },
                tooltipArgs: {
                    header: String(R.strings.tank_setup.categories.$dyn(e)),
                    body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                },
            }));
        return a.jsxs('div', {
            className: s(Mn.base, d && Mn[`base__${d}`], i && Mn.base__detailed),
            children: [
                i && a.jsx(Rn, { isFilterActive: o, onFilterReset: r, matchCount: e, totalCount: t }),
                a.jsx('div', { className: Mn.buttons, children: a.jsx(hn, { ctaConfigs: _ }) }),
            ],
        });
    },
    En = {
        root: 'ExperimentalEquipCoinBlock_root_d6357b4d',
        base: 'ExperimentalEquipCoinBlock_9069fc00',
        base__medium: 'ExperimentalEquipCoinBlock_base__medium_d6357b4d',
        base__small: 'ExperimentalEquipCoinBlock_base__small_1b84d4d',
        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_d4625faa',
        currency: 'ExperimentalEquipCoinBlock_currency_9dca1114',
        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_7f694a37',
        button: 'ExperimentalEquipCoinBlock_button_1201715b',
    },
    Pn = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
    Ln = (e) => (e ? Pn.disabled.text() : Pn.notDisabled.text()),
    Fn = l(({ disabled: e }) => {
        const t = gs(),
            { model: n, controls: o } = Oe(),
            { value: i } = n.optDevices.specialCurrency.get();
        return a.jsxs('div', {
            className: s(En.base, t && En[`base__${t}`]),
            children: [
                a.jsx(A, {
                    args: { tooltipId: Ce },
                    children: a.jsxs('div', {
                        className: En.currency,
                        children: [a.jsx(ee, { value: i }), a.jsx('div', { className: En.currencyIcon })],
                    }),
                }),
                a.jsx(p, {
                    body: Ln(e),
                    children: a.jsx('div', {
                        children: a.jsx(b, {
                            onClick: o.moreCurrencyGot,
                            mixClass: En.button,
                            disabled: e,
                            children: R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                        }),
                    }),
                }),
            ],
        });
    }),
    zn = 'HeaderContent_350aa7b9',
    Hn = l(() => {
        const { model: e, controls: s } = Oe(),
            { withIntroduction: t, hasUnfitItems: n } = e.optDevices.setup.get(),
            o = e.computes.optDevices.slotsLength(),
            i = e.optDevices.tabs.get(),
            l = e.optDevices.filter.get();
        switch (i.selectedTabName) {
            case je:
                return a.jsx('div', {
                    className: zn,
                    children: a.jsx($n, { ...l, onFilterChanged: s.filterChanged, onFilterReset: s.filterReset }),
                });
            case Se:
                return o > 0
                    ? a.jsx('div', { className: zn, children: a.jsx(Fn, { disabled: t ? !n : o <= 0 }) })
                    : null;
            default:
                return null;
        }
    }),
    On = l(() => {
        const { model: e, controls: s } = Oe(),
            t = e.optDevices.tabs.get(),
            n = t.tabs.length > 1;
        return a.jsx(an, {
            title: R.strings.tank_setup.section.optDevices(),
            tabProps: n ? { ...t, handleTabChanged: s.optDevices.changeTab } : void 0,
            tabs: n && a.jsx(Yt, { ...t, handleTabChanged: s.optDevices.changeTab }),
            children: a.jsx(Hn, {}),
        });
    }),
    qn = {
        root: 'Introduction_root_bc1537e2',
        base: 'Introduction_4e0dc33b',
        base__enter: 'Introduction_base__enter_18702b89',
        base__enterActive: 'Introduction_base__enterActive_cdbbb6f5',
        base__exit: 'Introduction_base__exit_51b704e8',
        base__exitActive: 'Introduction_base__exitActive_1de7afb8',
        introduction: 'Introduction_3dd68ea0',
        image: 'Introduction_image_3a00d1b2',
        base__large: 'Introduction_base__large_bc1537e2',
        base__huge: 'Introduction_base__huge_bc1537e2',
        image__deluxe: 'Introduction_image__deluxe_a7419e4f',
        image__deluxeLarge: 'Introduction_image__deluxeLarge_5a161c91',
        image__trophy: 'Introduction_image__trophy_f581cf8d',
        image__trophyLarge: 'Introduction_image__trophyLarge_98fa31e4',
        image__modernized: 'Introduction_image__modernized_108fade5',
        image__modernizedLarge: 'Introduction_image__modernizedLarge_2b686081',
        description: 'Introduction_description_cb934dae',
        title: 'Introduction_title_17e0b96c',
        message: 'Introduction_message_497a1be',
        currency: 'Introduction_currency_1092ef06',
        icon: 'Introduction_icon_71c911b9',
        'icon__currency-deluxe': 'Introduction_icon__currency-deluxe_d12940bb',
        'icon__currency-modernized': 'Introduction_icon__currency-modernized_7966a8e9',
    },
    Wn = ({ introType: t }) => {
        const n = s(qn.icon, qn[`icon__currency-${t}`]),
            o = e.useMemo(
                () => ({
                    currencyName: a.jsx('span', {
                        className: qn.currency,
                        children: R.strings.tank_setup.introduction.currency.$dyn(t),
                    }),
                    currencyIcon: a.jsx('span', { className: n }),
                }),
                [n, t],
            ),
            i = R.strings.tank_setup.introduction.message.$dyn(t);
        return i ? a.jsx(j, { binding: o, text: i, classMix: qn.message }) : null;
    },
    Vn = l(() => {
        const t = gs(),
            n = t === hs.Large || t === hs.Huge,
            [o, i] = e.useState(!0),
            { model: l, controls: r } = Oe(),
            { introductionType: d } = l.optDevices.setup.get(),
            _ = l.computes.optDevices.slotsLength() > 0,
            u = e.useCallback(() => {
                i(!1);
            }, []),
            m = e.useCallback(() => {
                (r.introPassed(), i(!0));
            }, [r]),
            p = e.useMemo(
                () => ({
                    enter: qn.base__enter,
                    enterActive: qn.base__enterActive,
                    exit: qn.base__exit,
                    exitActive: qn.base__exitActive,
                }),
                [],
            ),
            g = _
                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(d)
                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(d);
        return a.jsx(c, {
            in: o,
            classNames: p,
            timeout: 300,
            onExited: m,
            children: a.jsx('div', {
                className: s(qn.base, t && qn[`base__${t}`]),
                id: 'introduction',
                children: a.jsxs('div', {
                    className: qn.introduction,
                    children: [
                        a.jsx('div', { className: s(qn.image, n ? qn[`image__${d}Large`] : qn[`image__${d}`]) }),
                        a.jsxs('div', {
                            className: qn.description,
                            children: [a.jsx('div', { className: qn.title, children: g }), a.jsx(Wn, { introType: d })],
                        }),
                        _ &&
                            a.jsx(b, {
                                type: h.secondary,
                                size: J.medium,
                                onClick: u,
                                children: R.strings.tank_setup.introduction.showButton(),
                            }),
                    ],
                }),
            }),
        });
    }),
    Gn = 'OptDevicesSetup_intro_8f93ece2',
    Kn = l(() => {
        const e = gs(),
            { model: s, controls: t } = Oe(),
            { selectedSlot: n } = s.ammunitionPanel.get(),
            { withIntroduction: o } = s.optDevices.setup.get(),
            i = s.computes.optDevices.slotsLength(),
            { selectedFilterCount: l } = s.optDevices.filter.get(),
            { selectedTabName: r } = s.optDevices.tabs.get(),
            c = s.computes.optDevices.slotsLength();
        return a.jsx(xs, {
            header: a.jsx(On, {}),
            content: o
                ? a.jsxs('div', {
                      className: Gn,
                      children: [a.jsx(Nt, { type: ve, cardsAmount: c, isDisabled: o }), a.jsx(Vn, {})],
                  })
                : a.jsx(on, {
                      selectedSlotId: n,
                      scrollAreaKey: r,
                      updateKey: `${l}:${i}`,
                      children: a.jsx(Nt, { type: ve, cardsAmount: c, isDisabled: o }),
                  }),
            footer: a.jsx(Jt, {
                withConfirmation: !0,
                parentModelPath: 'model.tankSetup.optDevicesSetup',
                mediaSize: e,
                onDealConfirmed: t.optDevices.confirmDeal,
                onDealCancelled: t.optDevices.cancelDeal,
                onAutoRenewalChanged: t.optDevices.changeAutoRenewal,
            }),
        });
    }),
    Un = {
        root: 'Animation_root_44cbb5e4',
        base: 'Animation_97e68582',
        base__leftEnter: 'Animation_base__leftEnter_44cbb5e4',
        base__rightEnter: 'Animation_base__rightEnter_1f3acc05',
        base__leftEntering: 'Animation_base__leftEntering_fd100101',
        'animation-show-left': 'Animation_animation-show-left_44cbb5e4',
        base__rightEntering: 'Animation_base__rightEntering_55814685',
        'animation-show-right': 'Animation_animation-show-right_44cbb5e4',
        base__exit: 'Animation_base__exit_42174c68',
        base__previous: 'Animation_base__previous_99cefed0',
        base__leftExit: 'Animation_base__leftExit_aa9a7b2d',
        'animation-hide-left': 'Animation_animation-hide-left_44cbb5e4',
        base__rightExit: 'Animation_base__rightExit_e897be81',
        'animation-hide-right': 'Animation_animation-hide-right_44cbb5e4',
    },
    Zn = [ve, ke, Ne, de, Te],
    Jn = (e, a) => (a === e ? '' : Zn.indexOf(a) > Zn.indexOf(e) ? 'right' : 'left'),
    Qn = ({ children: t, selectedSetup: o }) => {
        const i = n.createRef(),
            l = e.useRef({ selectedSetup: o, previousSelectedSetup: o, animatedElements: {} }),
            d = e.useMemo(() => {
                const e = Jn(l.current.selectedSetup, o);
                return { enter: Un[`base__${e}Enter`] };
            }, [o]),
            _ = e.useCallback(
                (e) => {
                    const a = Jn(l.current.selectedSetup, o);
                    ((e.className = s(Un.base, Un.base__exit)),
                        e.classList.add(Un[`base__${a}Exit`]),
                        (l.current.animatedElements[o] = i));
                    (Object.values(l.current.animatedElements).forEach((e) => {
                        e.current && e.current.classList.remove(Un.base__previous);
                    }),
                        i.current && i.current.classList.add(Un.base__previous));
                },
                [i, o],
            ),
            u = e.useCallback(
                (e) => {
                    const a = Jn(l.current.previousSelectedSetup, o);
                    ((e.className = Un.base), e.classList.add(Un[`base__${a}Enter`]));
                },
                [o],
            ),
            m = e.useCallback(
                (e) => {
                    const a = Jn(l.current.previousSelectedSetup, o);
                    e.classList.add(Un[`base__${a}Entering`]);
                },
                [o],
            ),
            p = e.cloneElement(t);
        return (
            (l.current.previousSelectedSetup = l.current.selectedSetup),
            (l.current.selectedSetup = o),
            a.jsx(r, {
                children: a.jsx(
                    c,
                    {
                        in: !1,
                        timeout: 400,
                        classNames: d,
                        onExit: _,
                        onEnter: u,
                        onEntering: m,
                        children: a.jsx('div', { className: Un.base, ref: i, children: p }),
                    },
                    `panel-${o}`,
                ),
            })
        );
    },
    Xn = l(() => {
        const { model: e } = Oe(),
            { selectedSetup: s } = e.tankSetup.get();
        return a.jsx(Qn, {
            selectedSetup: s,
            children: (() => {
                switch (s) {
                    case ve:
                        return a.jsx(Kn, {});
                    case de:
                        return a.jsx(ln, {});
                    default:
                        return a.jsx(rn, {});
                }
            })(),
        });
    }),
    Yn = 'AmmunitionSetupApp_9928ea10',
    eo = l(() => {
        const { model: s, controls: t } = Oe(),
            [n, o] = e.useState(!1);
        e.useEffect(() => N(t.viewRendered), [t]);
        const i = e.useCallback(() => {
            n || t.close();
        }, [n, t]);
        return a.jsx(Pe, {
            show: s.root.get().show,
            content: a.jsx(Xn, {}),
            panel: a.jsx(we, {
                children: a.jsx('div', {
                    className: Yn,
                    children: a.jsx(Ie, {
                        show: s.root.get().show,
                        isReady: s.root.get().isReady,
                        panelType: Ae.Setup,
                        setIsExitBlocked: o,
                    }),
                }),
            }),
            onAnimationDone: t.animationEnded,
            onClose: i,
            switchPanel: t.switch,
        });
    });
ae(a.jsx(He, { children: a.jsx(ne, { children: a.jsx(eo, {}) }) }))
    .then(() => se(document.getElementById('root')))
    .then(() => te());
