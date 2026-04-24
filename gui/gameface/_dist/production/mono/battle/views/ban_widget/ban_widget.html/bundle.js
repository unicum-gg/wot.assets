import {
    n as e,
    p as a,
    q as s,
    j as n,
    s as t,
    t as i,
    i as c,
    v as o,
    w as l,
    k as d,
    r,
} from '../../../chunks/vendor.js';
import {
    i as m,
    m as h,
    F as b,
    u as _,
    p as u,
    a as x,
    b as p,
    s as y,
    C as j,
    B as v,
    r as N,
    U as f,
} from '../../../chunks/lib.js';
import { C as g, B as V } from '../../../chunks/enums.js';
import { N as B, a as S } from '../../../chunks/constants.js';
import { g as C } from '../../../chunks/get_vehicle_image.js';
/* empty css                     */ const [A, w] = m()(
        (s) => {
            const n = {
                    root: s.observableModel.object(),
                    vehicleToBan: s.observableModel.object('vehicleToBan'),
                    bannedByAlliesVehicles: s.observableModel.array('bannedByAlliesVehicles'),
                    bannedByAlliesVehicle: s.observableModel.object('bannedByAlliesVehicle'),
                    bannedByEnemiesVehicle: s.observableModel.object('bannedByEnemiesVehicle'),
                },
                t = e(
                    () =>
                        h(n.bannedByAlliesVehicles.get(), ({ count: e, name: a, techName: s, vehicleCD: n }) => ({
                            count: e,
                            name: a,
                            techName: s,
                            vehicleCD: n,
                        })),
                    { equals: a.shallow },
                );
            return { ...n, computes: { confirmedChoiceVehicles: t } };
        },
        ({ externalModel: e }) => ({ open: e.createCallbackNoArgs('onOpen') }),
    ),
    k = 'Candidates_dbb5d56c',
    I = 'Candidates_description_7d32bb4d',
    E = 'Candidates_divider_a8b91d7e',
    T = 'Candidates_accent_44bd75ba',
    M = s(() => {
        const { model: e } = w(),
            { candidateState: a } = e.root.get(),
            s = e.vehicleToBan.get(),
            t = e.computes.confirmedChoiceVehicles(),
            i = t.length;
        return n.jsxs('div', {
            className: k,
            children: [
                n.jsx('div', {
                    className: I,
                    children:
                        t &&
                        (() => {
                            switch (a) {
                                case g.NoSelected:
                                    return R.strings.comp7_ext.banView.factory.noCandidates();
                                case g.SingleCandidate:
                                    return n.jsx(b, {
                                        text: `${R.strings.comp7_ext.banView.factory.candidate()}`,
                                        binding: { vehicleName: n.jsx('span', { className: T, children: t[0]?.name }) },
                                    });
                                case g.DontBanSelected:
                                    return n.jsx(b, {
                                        text: `${R.strings.comp7_ext.banView.factory.candidate()}`,
                                        binding: {
                                            vehicleName: n.jsx('span', {
                                                className: T,
                                                children: R.strings.comp7_ext.banView.noBan(),
                                            }),
                                        },
                                    });
                                case g.MultipleCandidates:
                                    return i > 4 ? null : R.strings.comp7_ext.banView.factory.candidates();
                                default:
                                    console.error('Unreachable target');
                            }
                        })(),
                }),
                s.vehicleCD !== B &&
                    n.jsxs(n.Fragment, {
                        children: [
                            n.jsx('div', { className: E }),
                            n.jsx('div', {
                                className: I,
                                children: n.jsx(b, {
                                    text: `${R.strings.comp7_ext.banView.factory.pick()}`,
                                    binding: {
                                        vehicleName: n.jsx('span', {
                                            className: T,
                                            children: s.vehicleCD === S ? R.strings.comp7_ext.banView.noBan() : s.name,
                                        }),
                                    },
                                }),
                            }),
                        ],
                    }),
            ],
        });
    }),
    $ = 'BanResultSection_9868ea69',
    D = 'BanResultSection_part_9154a720',
    X = 'BanResultSection_votesCount_3b77e1d1',
    F = 'BanResultSection_teamType_f208449e',
    q = 'BanResultSection_name_ad9c5dae',
    z = 'BanResultSection_banItem_2673f0f5',
    U = 'BanResultSection_icon_e242507c',
    W = 'BanResultSection_vehicle_53692df2',
    O = 'BanResultSection_dice_a257778e';
function G({
    votesCount: e = 0,
    teamType: a,
    bannedVehicle: s,
    randomlySelected: r,
    onShowVehicleAnimation: m,
    onShowIconAnimation: h,
    classNames: b,
    hasAnimation: u = !0,
}) {
    const x = _({ body: R.strings.comp7_ext.banWidget.tooltip() }),
        p = t(),
        y = t(),
        j = i(s.techName, {
            ref: p,
            from: {
                opacity: u ? 0 : 1,
                transform: u ? 'translate(-50%, -50%) scale(2)' : 'translate(-50%, -50%) scale(1)',
            },
            enter: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            delay: u ? 800 : 0,
            immediate: !u,
            config: { duration: 500 },
            onStart: () => {
                u && m();
            },
        }),
        v = c({
            ref: y,
            from: { opacity: u ? 0 : 0.9, zIndex: 2 },
            to: { opacity: 0.9 },
            delay: u ? 1300 : 0,
            immediate: !u,
            config: { duration: 500 },
            onStart: () => {
                u && h();
            },
        });
    return (
        o([p, y], u ? [0, 0.5] : [0, 0]),
        n.jsxs('div', {
            className: l($, b?.base),
            children: [
                r && n.jsx('div', { className: O, ...x }),
                e >= 0 && n.jsx('div', { className: l(D, X, b?.votesCount), children: e }),
                n.jsx('div', { className: l(D, F, b?.teamType), children: `${R.strings.comp7_ext.banWidget.$dyn(a)}` }),
                n.jsx('div', {
                    className: l(D, q, b?.name),
                    children: s.name ? s.name : R.strings.comp7_ext.banView.noBan(),
                }),
                n.jsxs('div', {
                    className: l(D, z),
                    children: [
                        n.jsx(d.div, { className: U, style: v }),
                        j((e, a) =>
                            a ? n.jsx(d.div, { className: W, style: { backgroundImage: C(a), ...e } }) : void 0,
                        ),
                    ],
                }),
            ],
        })
    );
}
const H = 'allies',
    J = 'enemies',
    K = 'BanResult_674191e3',
    L = 'BanResult_container_b473092c',
    P = 'BanResult_container__left_391acdab',
    Q = 'BanResult_container__right_e6368f82',
    Y = 'BanResult_divider_da162964',
    Z = 'BanResult_reverse_f36dedc0',
    ee = ({
        alliesVotes: e,
        enemyVotes: a,
        isAlliesRandomlySelected: s,
        isEnemyRandomlySelected: t,
        bannedByAlliesVehicle: i,
        bannedByEnemiesVehicle: o,
        hasAnimation: m = !0,
        className: h,
        classNames: b,
    }) => {
        const _ = r.useRef(!1),
            p = r.useRef(!1),
            y = c({
                from: { transform: m ? 'translateX(100%)' : 'translateX(0%)' },
                to: { transform: 'translateX(0%)' },
                immediate: !m,
                config: { duration: 500 },
            }),
            j = c({
                from: { transform: m ? 'translateX(-100%)' : 'translateX(0%)' },
                to: { transform: 'translateX(0%)' },
                immediate: !m,
                config: { duration: 500 },
            }),
            v = c({ from: { opacity: m ? 0 : 0.3 }, to: { opacity: 0.3 }, immediate: !m, config: { duration: 500 } }),
            N = r.useCallback(() => {
                _.current || ((_.current = !0), u.sound('comp_7_bans_pict_animation'));
            }, []),
            f = r.useCallback(() => {
                p.current || ((p.current = !0), u.sound('comp_7_bans_crossed_label'));
            }, []);
        return (
            x(() => {
                m && u.sound('comp_7_bans_text_animation');
            }),
            n.jsxs('div', {
                className: l(K, h),
                children: [
                    n.jsx(d.div, {
                        style: j,
                        className: l(L, P),
                        children: n.jsx(G, {
                            votesCount: e,
                            teamType: H,
                            bannedVehicle: i,
                            randomlySelected: s,
                            onShowIconAnimation: f,
                            onShowVehicleAnimation: N,
                            classNames: b?.section,
                            hasAnimation: m,
                        }),
                    }),
                    n.jsx(d.div, { className: Y, style: v }),
                    n.jsx(d.div, {
                        style: y,
                        className: l(L, Q),
                        children: n.jsx(G, {
                            votesCount: a,
                            teamType: J,
                            bannedVehicle: o,
                            randomlySelected: t,
                            onShowIconAnimation: f,
                            onShowVehicleAnimation: N,
                            classNames: { ...b?.section, base: l(Z, b?.section?.base) },
                            hasAnimation: m,
                        }),
                    }),
                ],
            })
        );
    },
    ae = s(() => {
        const { model: e } = w(),
            { alliesVotes: a, enemyVotes: s, isAlliesRandomlySelected: t, isEnemyRandomlySelected: i } = e.root.get(),
            c = e.bannedByAlliesVehicle.get(),
            o = e.bannedByEnemiesVehicle.get();
        return n.jsx(ee, {
            alliesVotes: a,
            enemyVotes: s,
            isAlliesRandomlySelected: t,
            isEnemyRandomlySelected: i,
            bannedByAlliesVehicle: { name: c.name, techName: c.techName },
            bannedByEnemiesVehicle: { name: o.name, techName: o.techName },
        });
    }),
    se = 'Icons_eae149e0',
    ne = 'Icons_banItem_51077df',
    te = 'Icons_banItem__empty_53736c42',
    ie = 'Icons_banVehicle_55ec6e2f',
    ce = 'Icons_banCount_33369c7c',
    oe = s(() => {
        const { model: e } = w(),
            { candidateState: a } = e.root.get(),
            s = e.computes.confirmedChoiceVehicles();
        return n.jsx('div', {
            className: se,
            children:
                a === g.NoSelected
                    ? n.jsx('div', { className: l(ne, te) })
                    : h(s, (e, a) =>
                          n.jsxs(
                              'div',
                              {
                                  className: ne,
                                  children: [
                                      e.techName &&
                                          n.jsx('div', { className: ie, style: { backgroundImage: C(e.techName) } }),
                                      e.count > 1 && n.jsx('div', { className: ce, children: e.count }),
                                  ],
                              },
                              `${a}_${e.vehicleCD}`,
                          ),
                      ),
        });
    }),
    le = { base: 'App_668adc51', line: 'App_line_930c9a60', arrow: 'App_arrow_8d16489d' },
    de = s(() => {
        const { model: e, controls: a } = w(),
            { banState: s } = e.root.get(),
            t = p(),
            i = s === V.None;
        return (
            x(() => {
                t.run(() => {
                    y({ top: 0, right: 50, bottom: 0, left: 80 });
                });
            }),
            n.jsx('div', {
                className: le.base,
                children:
                    s === V.Finished
                        ? n.jsx(ae, {})
                        : n.jsxs(n.Fragment, {
                              children: [
                                  n.jsx(oe, {}),
                                  n.jsx(M, {}),
                                  n.jsx('div', { className: le.line, children: n.jsx('div', { className: le.arrow }) }),
                                  n.jsx('div', {
                                      className: le.button,
                                      children: n.jsx(j, {
                                          size: v.medium,
                                          onClick: a.open,
                                          disabled: i,
                                          children: R.strings.comp7_ext.banView.button.ban(),
                                      }),
                                  }),
                              ],
                          }),
            })
        );
    });
N(n.jsx(f, { children: n.jsx(A, { children: n.jsx(de, {}) }) }));
