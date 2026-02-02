import { r as e, o as a, e as s, n as r, j as t, l as n, m as i, f as o } from '../../../chunks/vendor.js';
import {
    ak as l,
    al as d,
    O as c,
    b as _,
    am as m,
    an as u,
    r as p,
    ao as h,
    W as b,
    c as g,
    i as w,
    af as f,
    f as v,
    ap as R,
    u as N,
    K as x,
    e as y,
    R as O,
    N as j,
    F as T,
    ag as I,
    B as A,
    A as E,
    C as P,
    I as S,
    aq as H,
    ar as C,
    V,
    a as k,
    o as M,
    k as $,
    d as B,
    U as W,
} from '../../../chunks/lib.js';
import { A as L, R as z, s as G } from '../../../chunks/helpers.js';
/* empty css                    */ const U = (a) => () => {
        const { steps: s, autoStart: r = !0 } = a,
            t = e.useRef(null),
            n = e.useRef('idle'),
            i = e.useRef([]),
            o = l(),
            m = d(),
            u = c(),
            p = e.useMemo(() => {
                const e = s[Symbol.iterator](),
                    a = () => {
                        const s = e.next();
                        if (s.done) return ((n.current = 'end'), void o.trigger('end'));
                        i.current.includes(s.value.name)
                            ? a()
                            : (m.run(() => {
                                  if (t.current) {
                                      if (
                                          (t.current.classList.add(s.value.name),
                                          o.trigger('change', s.value),
                                          s.value.stopNextSteps)
                                      )
                                          return ((n.current = 'paused'), void o.trigger('pause'));
                                      a();
                                  } else
                                      console.error(`${s.value.name} step don't know on what rootRef it should be set`);
                              }, s.value.delay),
                              (n.current = 'running'));
                    };
                return {
                    rootRef: t,
                    steps: s,
                    stepsToSkip: i,
                    events: { on: o.on, off: o.off },
                    start: () => {
                        (a(), o.trigger('start'));
                    },
                    resume: () => {
                        'paused' === n.current
                            ? (a(), o.trigger('resume'))
                            : console.warn(
                                  'api.resume() should be called only after paused animation, ignore resume() call',
                              );
                    },
                    skipAll: () => {
                        (m.clear(),
                            u.run(() => {
                                (s.forEach((e) => {
                                    t.current
                                        ? t.current.classList.add(e.name)
                                        : console.error(`${e} tried to be set, but rootRef was not received in api`);
                                }),
                                    (n.current = 'end'),
                                    o.trigger('end'));
                            }));
                    },
                };
            }, [m, o, u, s]);
        return (
            _(() => {
                r && p.start();
            }),
            p
        );
    },
    q = (e) => ({
        index: e.index,
        name: e.name,
        image: (a) =>
            ((e, a) => {
                switch (e.name) {
                    case 'customizations':
                        return 'projectionDecal' === e.icon
                            ? `R.images.gui.maps.icons.quests.bonuses.${a}.${e.icon}`
                            : a === b.Big || a === b.Small
                              ? `R.images.gui.maps.icons.quests.bonuses.${a}.style`
                              : `R.images.gui.maps.icons.personal_missions_30.rewards.${a}.style_${e.icon}`;
                    case 'attachment':
                        return `R.images.gui.maps.vehicles.attachments.${a}.${e.icon}`;
                    default:
                        return h(e, a);
                }
            })(e, a),
        value: e.value,
        label: e.label,
        icon: e.icon,
        valueType: u(e.name),
        tooltipArgs: m(
            { [L]: e.tooltipId },
            p
                .resolve('views')
                .read((e) => e.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
        ),
    }),
    D = 16 / 9,
    K = (e, a) => {
        const s = e / a;
        return { width: `${s > D ? e : a * D}rem`, height: `${s < D ? a : e / D}rem` };
    },
    Y = {
        gui_random_reward_appear: g('gui_random_reward_appear'),
        gui_hangar_simple_execution_screen: g('gui_hangar_simple_execution_screen'),
        vid_pm_o08_s15: g('vid_pm_o08_s15'),
        vid_pm_o09_s15: g('vid_pm_o09_s15'),
        vid_pm_o10_s15: g('vid_pm_o10_s15'),
        vid_pm_resume: g('vid_pm_resume'),
        vid_pm_pause: g('vid_pm_pause'),
        stopIntro: g('vid_pm_stop'),
    },
    [F, J] = w()(
        ({ observableModel: e }) => {
            const s = {
                    root: e.object(),
                    vehicle: e.object('vehicle'),
                    rewards: e.transform((e) => f(e, q), 'rewards'),
                },
                r = a.box(!1),
                t = v.model(() => {
                    const e = s.root.get().type;
                    return e === z.OPERATION || e === z.VEHICLE_PART ? [] : R(s.rewards.get(), (e, a) => a < 4);
                }),
                n = v.model(() =>
                    s.root.get().type === z.OPERATION ? s.rewards.get() : R(s.rewards.get(), (e, a) => a >= 4),
                );
            return { ...s, introVideoPlaying: r, computes: { mainRegularRewards: t, additionalRewards: n } };
        },
        ({ model: e, externalModel: a }) => ({
            close: a.createCallbackNoArgs('close'),
            goToOperation: a.createCallbackNoArgs('goToOperation'),
            goToVehicle: a.createCallbackNoArgs('goToVehicle'),
            disableVideoOverlaySound: a.createCallbackNoArgs('disableVideoOverlaySound'),
            setIntroVideoPlaying: s((a) => e.introVideoPlaying.set(a)),
        }),
    ),
    Q = 'showBack',
    X = 'showSubtitle',
    Z = 'showTitle',
    ee = 'showTankName',
    ae = 'showRibbon',
    se = 'showMainRewards',
    re = 'showMainRewardsLabels',
    te = 'showAdditionalTitle',
    ne = 'showNextOperation',
    ie = 'showAdditionalRewards',
    oe = 'showButtons',
    le = [ae, se, re],
    de = [te, ie],
    ce = e.createContext(null);
function _e() {
    const a = e.useContext(ce);
    if (null === a)
        throw new Error('useAnimationApi was called in component, which is not wrapped in AnimationProvider');
    return a;
}
const me = U({
        steps: [
            { name: Q, delay: 0 },
            { name: X, delay: 200 },
            { name: Z, delay: 200 },
            { name: ae, delay: 200 },
            { name: se, delay: 200 },
            { name: re, delay: 200 },
            { name: te, delay: 100 },
            { name: ie, delay: 200, stopNextSteps: !0 },
            { name: oe, delay: 0 },
        ],
    }),
    ue = r(function ({ children: e }) {
        const a = me();
        return t.jsx(ce.Provider, { value: a, children: e });
    }),
    pe = U({
        steps: [
            { name: Q, delay: 0 },
            { name: X, delay: 200 },
            { name: Z, delay: 200 },
            { name: ae, delay: 200 },
            { name: se, delay: 200 },
            { name: re, delay: 200 },
            { name: te, delay: 100 },
            { name: ie, delay: 200, stopNextSteps: !0 },
            { name: ne, delay: 200 },
            { name: oe, delay: 200 },
        ],
    }),
    he = r(function ({ children: e }) {
        const a = pe();
        return t.jsx(ce.Provider, { value: a, children: e });
    }),
    be = U({
        steps: [
            { name: Z, delay: 200 },
            { name: ee, delay: 200 },
            { name: te, delay: 100 },
            { name: ie, delay: 200, stopNextSteps: !0 },
            { name: oe, delay: 200 },
        ],
        autoStart: !1,
    }),
    ge = r(function ({ children: e }) {
        const a = be();
        return t.jsx(ce.Provider, { value: a, children: e });
    }),
    we = r(function ({ children: e }) {
        const { model: a } = J(),
            { type: s } = a.root.get();
        switch (s) {
            case z.OPERATION:
                return t.jsx(ge, { children: e });
            case z.OPERATION_WITH_HONORS:
                return t.jsx(he, { children: e });
            default:
                return t.jsx(ue, { children: e });
        }
    });
const fe = r(function ({ reward: a, onAnimationStart: s, onAnimationEnd: r, index: o, className: l }) {
        const { model: d } = J(),
            { type: c } = d.root.get(),
            _ = N(),
            { breakpoint: m } = x(),
            u = (function (e, a) {
                return e === z.OPERATION ? b.Big : G(a, j.medium) ? b.Small : b.Big;
            })(c, m.weight),
            [p, h] = n(() => ({
                from: { transform: 'translateY(20rem)', opacity: 0, pointerEvents: 'none' },
                config: { duration: 400, easing: y.easeOutCirc },
                onStart: () => {
                    (_.play('gui_random_reward_appear', { target: 'Additional reward' }), null == s || s());
                },
                onRest: r,
            })),
            g = _e();
        return (
            e.useEffect(() => {
                const e = (e) => {
                    e.name === ie &&
                        h.start({ transform: 'translateY(0rem)', opacity: 1, pointerEvents: 'auto', delay: 100 * o });
                };
                return (
                    g.events.on('change', e),
                    () => {
                        g.events.off('change', e);
                    }
                );
            }, [g.events, h, o]),
            t.jsx(i.div, { className: l, style: p, children: t.jsx(O, { ...a, size: u, image: a.image(u) }, o) })
        );
    }),
    ve = 'AdditionalRewards_ffae6df',
    Re = 'AdditionalRewards_title_2d8eb236',
    Ne = 'AdditionalRewards_list_81a45598',
    xe = 'AdditionalRewards_reward_ed90708c',
    ye = r(function (e) {
        const { model: a } = J(),
            s = _e();
        return t.jsxs('div', {
            className: o(ve, e.className),
            children: [
                t.jsx(T, { path: 'personal_missions_30.rewards.additional', className: Re }),
                t.jsx('div', {
                    className: Ne,
                    children: f(a.computes.additionalRewards(), (e, a, r) =>
                        t.jsx(
                            fe,
                            {
                                index: a,
                                reward: e,
                                onAnimationEnd: () => a === r.length - 1 && s.resume(),
                                className: xe,
                            },
                            a,
                        ),
                    ),
                }),
            ],
        });
    }),
    Oe = { base: 'Buttons_82277d53', button: 'Buttons_button_2eb74e89', text: 'Buttons_text_981ee64f' },
    je = { base: Oe.button, content: Oe.text },
    Te = new Set([z.VEHICLE_PART, z.OPERATION_WITH_HONORS, z.OPERATION]),
    Ie = r(function (e) {
        const { model: a, controls: s } = J(),
            { type: r } = a.root.get(),
            { breakpoint: n } = x(),
            i = G(n.weight, j.medium) ? I.small : I.medium,
            l = N(),
            d = p.resolve('strings');
        function c() {
            (l.play('stopIntro', { target: 'CloseButton' }), s.close());
        }
        return t.jsxs('div', {
            className: o(Oe.base, Oe[`base__${r}`], e.className),
            children: [
                (() => {
                    switch (r) {
                        case z.VEHICLE_PART:
                        case z.OPERATION_WITH_HONORS:
                            return t.jsx(A, {
                                theme: 'primary',
                                size: i,
                                onClick: () => {
                                    (l.play('stopIntro', { target: 'CloseButton' }), s.goToOperation());
                                },
                                classNames: je,
                                children: d.readOrEmpty('personal_missions_30.rewards.buttons.goToOperation'),
                            });
                        case z.CAMPAIGN_WITH_HONORS:
                            return t.jsx(A, {
                                theme: 'primary',
                                size: i,
                                onClick: c,
                                classNames: je,
                                children: d.readOrEmpty('personal_missions_30.rewards.buttons.confirm'),
                            });
                        case z.OPERATION:
                            return t.jsx(A, {
                                theme: 'primary',
                                size: i,
                                onClick: () => {
                                    (l.play('stopIntro', { target: 'CloseButton' }), s.goToVehicle());
                                },
                                classNames: je,
                                children: d.readOrEmpty('personal_missions_30.rewards.buttons.goToVehicle'),
                            });
                        default:
                            console.error(`Unexpected rewards view type ${r}`);
                    }
                })(),
                Te.has(r) &&
                    t.jsx(A, {
                        theme: 'secondary',
                        size: i,
                        onClick: c,
                        classNames: je,
                        children: d.readOrEmpty('personal_missions_30.rewards.buttons.close'),
                    }),
            ],
        });
    }),
    Ae = {
        base: 'VehicleName_cce06ab3',
        base__24x24: 'VehicleName_base__24x24_e43b4676',
        base__24x24_metal: 'VehicleName_base__24x24_metal_af74305d',
        base__48x48: 'VehicleName_base__48x48_e43b4676',
        base__64x64: 'VehicleName_base__64x64_a079d4e3',
        base__83x74: 'VehicleName_base__83x74_1dd2aae1',
        vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_1421b13d',
        base__60x54: 'VehicleName_base__60x54_e43b4676',
        vehicleType: 'VehicleName_vehicleType_5ec4137d',
    },
    Ee = '64x64',
    Pe = '80x80',
    Se = '83x74',
    He = '180x135',
    Ce = (e) => {
        switch (e) {
            case Pe:
                return 'vehicleTypes.large';
            case Se:
                return 'vehicleTypes.big';
            case He:
                return 'vehicleTypes.huge';
            default:
                return `vehicleTypes.c_${e}`;
        }
    },
    Ve = e.memo(function ({ name: e, tier: a, type: s, size: r = Ee, isPremium: n = !1, className: i }) {
        const l = `${E(s)}${n ? '_elite' : ''}`;
        return t.jsxs('div', {
            className: o(Ae.base, Ae[`base__${r}`], i),
            children: [
                t.jsx('div', { children: P(a) }),
                t.jsx('div', {
                    className: Ae.vehicleTypeContainer,
                    children: t.jsx(S, { path: `${Ce(r)}.${l}`, className: Ae.vehicleType }),
                }),
                t.jsx('div', { children: e }),
            ],
        });
    }),
    ke = {
        base: 'Header_a3ec173b',
        subTitle: 'Header_subTitle_fcc90c2d',
        fadeIn: 'Header_fadeIn_65f475ba',
        up: 'Header_up_65f475ba',
        title: 'Header_title_63b15d15',
        honorsBack: 'Header_honorsBack_6ebc07c1',
        vehicleName: 'Header_vehicleName_17df3d4c',
        upScale: 'Header_upScale_65f475ba',
        rotate: 'Header_rotate_65f475ba',
    },
    Me = new Set([z.OPERATION_WITH_HONORS, z.CAMPAIGN_WITH_HONORS]),
    $e = new Set([z.VEHICLE_PART, z.OPERATION_WITH_HONORS, z.CAMPAIGN_WITH_HONORS]),
    Be = r(function (a) {
        const { model: s } = J(),
            { type: r, operationName: n, campaignName: i } = s.root.get(),
            l = s.vehicle.get(),
            d = p.resolve('intl'),
            c = _e(),
            _ = N();
        return (
            e.useEffect(() => {
                const e = (e) => {
                    e.name === Z && _.play('gui_hangar_simple_execution_screen', { target: 'Main reward' });
                };
                return (c.events.on('change', e), () => c.events.off('change', e));
            }, [c.events, _]),
            t.jsxs('div', {
                className: o(ke.base, ke[`base__${r}`], a.classname),
                children: [
                    Me.has(r) &&
                        t.jsx(S, { path: 'personal_missions_30.rewards.honors_title_back', className: ke.honorsBack }),
                    $e.has(r) &&
                        t.jsx(T, {
                            path: `personal_missions_30.rewards.subTitle.${r}`,
                            params: { name: r === z.CAMPAIGN_WITH_HONORS ? i : n },
                            className: ke.subTitle,
                        }),
                    t.jsx(T, {
                        path: `personal_missions_30.rewards.title.${r}`,
                        params: { name: d.toUpperCase(n) },
                        className: ke.title,
                    }),
                    r === z.OPERATION &&
                        t.jsx(Ve, {
                            name: l.vehicleShortName,
                            type: l.vehicleType,
                            tier: l.vehicleLvl,
                            isPremium: l.isElite,
                            className: ke.vehicleName,
                        }),
                ],
            })
        );
    }),
    We = {
        base: 'RegularMainReward_d1a37b82',
        image: 'RegularMainReward_image_ca63a3d4',
        fadeIn: 'RegularMainReward_fadeIn_54e4f800',
        upScale: 'RegularMainReward_upScale_54e4f800',
        label: 'RegularMainReward_label_a21d4175',
        info: 'RegularMainReward_info_59fd3db8',
        base__attachment: 'RegularMainReward_base__attachment_54e4f800',
        up: 'RegularMainReward_up_54e4f800',
        rotate: 'RegularMainReward_rotate_54e4f800',
    };
const Le = new Set([H.BattleBadge, H.PremiumPlus, H.Customizations, 'attachment']);
function ze({ reward: e }) {
    const { breakpoint: a } = x(),
        s = ((r = a.weight), G(r, j.large) ? b.S296x222 : b.S400x300);
    var r;
    return t.jsxs('div', {
        className: o(We.base, We[`base__${e.name}`]),
        children: [
            t.jsx(O, { ...e, size: s, image: e.image(s), classNames: { image: We.image, info: We.info } }),
            Le.has(e.name) && t.jsx('div', { className: We.label, children: e.label }),
        ],
    });
}
const Ge = 'VehiclePart_15b78928',
    Ue = 'VehiclePart_image_f33361cd',
    qe = 'VehiclePart_label_5cfdac0';
function De(e) {
    const a = p.resolve('strings');
    return t.jsxs('div', {
        className: Ge,
        children: [
            t.jsx(S, {
                path: `personal_missions_30.vehicle_detail.c_1200x450.${e.id}`,
                width: 720,
                height: 270,
                adaptive: { large: { width: 1200, height: 450 } },
                className: Ue,
            }),
            t.jsx('div', { className: qe, children: a.readOrEmpty(`personal_missions_30.detail.name.${e.id}`) }),
        ],
    });
}
const Ke = {
        base: 'MainRewards_9aca825a',
        ribbonWrapper: 'MainRewards_ribbonWrapper_30eeaba3',
        ribbon: 'MainRewards_ribbon_7f79f96d',
        fadeIn: 'MainRewards_fadeIn_56da68ed',
        up: 'MainRewards_up_56da68ed',
        list: 'MainRewards_list_597b951b',
        rays: 'MainRewards_rays_466e2f66',
        rotate: 'MainRewards_rotate_56da68ed',
        base__operationWithHonors: 'MainRewards_base__operationWithHonors_56da68ed',
        base__campaignWithHonors: 'MainRewards_base__campaignWithHonors_56da68ed',
        upScale: 'MainRewards_upScale_56da68ed',
    },
    Ye = [z.OPERATION_WITH_HONORS, z.CAMPAIGN_WITH_HONORS],
    Fe = r(function (a) {
        const { model: s } = J(),
            { type: r, vehicleDetailName: n } = s.root.get(),
            i = N(),
            l = _e(),
            d = Ye.includes(r) ? 'ribbon_gold' : 'ribbon';
        return (
            e.useEffect(() => {
                const e = (e) => {
                    e.name === se && i.play('gui_random_reward_appear', { target: 'Main reward' });
                };
                return (l.events.on('change', e), () => l.events.off('change', e));
            }, [l.events, i]),
            t.jsxs('div', {
                className: o(Ke.base, a.className, Ke[`base__${r}`]),
                children: [
                    t.jsx('div', {
                        className: Ke.ribbonWrapper,
                        children:
                            r !== z.VEHICLE_PART &&
                            t.jsx(S, {
                                path: `personal_missions_30.rewards.${d}_small`,
                                width: 1366,
                                height: 356,
                                adaptive: {
                                    medium: {
                                        path: `personal_missions_30.rewards.${d}_medium`,
                                        width: 1600,
                                        height: 417,
                                    },
                                    large: {
                                        path: `personal_missions_30.rewards.${d}_large`,
                                        width: 1920,
                                        height: 500,
                                    },
                                },
                                className: Ke.ribbon,
                            }),
                    }),
                    t.jsxs('div', {
                        className: Ke.list,
                        children: [
                            t.jsx('div', { className: Ke.rays }),
                            n
                                ? t.jsx(De, { id: n })
                                : f(s.computes.mainRegularRewards(), (e, a) => t.jsx(ze, { reward: e }, a)),
                        ],
                    }),
                ],
            })
        );
    }),
    Je = 'VehicleVideo_210aecbb',
    Qe = 'VehicleVideo_fading_d689de26',
    Xe = 'VehicleVideo_video_6832c75d',
    Ze = { 8: 40, 9: 40, 10: 36 },
    ea = p.resolve('videos'),
    aa = r(function () {
        const { model: a, controls: s } = J(),
            { operationId: r } = a.root.get(),
            n = a.introVideoPlaying.get(),
            i = e.useRef(null),
            [o, l] = e.useState([]),
            d = _e(),
            { screenWidthRem: c, screenHeightRem: _ } = x();
        return (
            e.useEffect(() => {
                const e = i.current;
                if (e)
                    return C(() => {
                        l(e.getCachedKeyframes());
                    });
            }, []),
            e.useEffect(() => {
                s.setIntroVideoPlaying(!0);
            }, [s]),
            t.jsxs('div', {
                className: Je,
                children: [
                    t.jsx('div', { className: Qe }),
                    t.jsx(V, {
                        ref: i,
                        src: ea.readOrEmpty(`personal_missions_30.rewards_screen.operation_${r}`),
                        autoplay: !0,
                        isPrebufferKeyframes: Boolean(o.length),
                        style: K(c, _),
                        onEnded: () => {
                            var e;
                            (n && (d.start(), s.setIntroVideoPlaying(!1), s.disableVideoOverlaySound()),
                                null == (e = i.current) || e.goToAndPlay(Ze[r] ?? 0));
                        },
                        className: Xe,
                    }),
                ],
            })
        );
    }),
    sa = {
        base: 'Rewards_b4f00ae2',
        base__campaignWithHonors: 'Rewards_base__campaignWithHonors_f96bb2ad',
        base__operation: 'Rewards_base__operation_732634ed',
        background: 'Rewards_background_648064f5',
        fadeIn: 'Rewards_fadeIn_405577a5',
        closeButtonWrapper: 'Rewards_closeButtonWrapper_37b0a4f9',
        closeButton: 'Rewards_closeButton_550ea6e3',
        rewardsContainer: 'Rewards_rewardsContainer_fe9e462d',
        main: 'Rewards_main_e6e4b036',
        base__vehiclePart: 'Rewards_base__vehiclePart_405577a5',
        base__operationWithHonors: 'Rewards_base__operationWithHonors_405577a5',
        additional: 'Rewards_additional_2ae9fbc8',
        nextOperation: 'Rewards_nextOperation_5eb1386a',
        divider: 'Rewards_divider_9db12b94',
        buttons: 'Rewards_buttons_a3bb560b',
        up: 'Rewards_up_405577a5',
        upScale: 'Rewards_upScale_405577a5',
        rotate: 'Rewards_rotate_405577a5',
    },
    ra = r(function () {
        const { model: a, controls: s } = J(),
            { type: r, vehicleDetailName: n, nextOperationName: i } = a.root.get(),
            l = a.computes.mainRegularRewards().length > 0 || Boolean(n),
            d = a.computes.additionalRewards().length > 0,
            { operationId: c } = a.root.get(),
            m = N();
        k($.ESCAPE, () => {
            a.introVideoPlaying.get() || (m.play('stopIntro'), s.close());
        });
        const u = _e();
        e.useEffect(() => {
            (r === z.OPERATION && m.play(`vid_pm_o${c.toString().padStart(2, '0')}_s15`),
                l || u.stepsToSkip.current.push(...le),
                d || u.stepsToSkip.current.push(...de));
        }, [u.stepsToSkip, d, l, c, m, r]);
        return (
            _(() =>
                M((e) => {
                    e ? m.play('vid_pm_pause') : m.play('vid_pm_resume');
                }),
            ),
            t.jsxs('div', {
                ref: u.rootRef,
                className: o(sa.base, sa[`base__${r}`]),
                children: [
                    r === z.OPERATION
                        ? t.jsx(aa, {})
                        : t.jsx(S, {
                              path:
                                  'personal_missions_30.rewards.backgrounds.' +
                                  (r === z.VEHICLE_PART ? 'vehiclePart' : 'withHonors'),
                              fit: 'cover',
                              className: sa.background,
                          }),
                    t.jsx('div', {
                        className: sa.closeButtonWrapper,
                        children: t.jsx('div', {
                            onClick: (e) => {
                                (m.play('click', { target: 'CloseButton', original: e }),
                                    m.play('stopIntro'),
                                    s.close());
                            },
                            onMouseEnter: (e) => {
                                m.play('mouse-enter', { target: 'CloseButton', original: e });
                            },
                            className: sa.closeButton,
                        }),
                    }),
                    t.jsx(Be, {}),
                    t.jsx('div', { className: sa.rewardsContainer, children: l && t.jsx(Fe, { className: sa.main }) }),
                    d && t.jsx(ye, { className: sa.additional }),
                    r === z.OPERATION_WITH_HONORS &&
                        t.jsx(T, {
                            path: 'personal_missions_30.rewards.operationUnlocked',
                            params: { name: i },
                            className: sa.nextOperation,
                        }),
                    t.jsx('div', { className: sa.divider }),
                    t.jsx(Ie, { className: sa.buttons }),
                ],
            })
        );
    });
B(t.jsx(F, { children: t.jsx(W, { soundsOverrides: Y, children: t.jsx(we, { children: t.jsx(ra, {}) }) }) }), {
    fullScreen: !0,
});
