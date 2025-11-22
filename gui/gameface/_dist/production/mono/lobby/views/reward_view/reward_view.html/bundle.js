import {
    R as e,
    r as a,
    j as t,
    l as s,
    m as o,
    p as n,
    k as i,
    i as r,
    q as l,
    w as d,
    s as c,
} from '../../../chunks/vendor.js';
import {
    n as g,
    i as u,
    t as m,
    m as y,
    h,
    u as b,
    B as _,
    g as x,
    F as p,
    I as w,
    w as S,
    x as v,
    y as f,
    z as D,
    A as C,
    l as j,
    R as N,
    q as E,
    p as T,
    E as O,
    k,
    G as P,
    a as I,
    C as A,
    r as B,
    U as z,
} from '../../../chunks/lib.js';
import {
    u as L,
    M as $,
    e as U,
    F,
    b as M,
    f as H,
    H as Q,
    g as X,
    h as Y,
    i as q,
    D as G,
    S as V,
    j as W,
    N as J,
    R as K,
    k as Z,
    l as ee,
    c as ae,
    m as te,
    d as se,
    a as oe,
    n as ne,
    o as ie,
} from '../../../chunks/easings.js';
var re = ((e) => (
        (e.RegularDay = 'regularDay'),
        (e.SpecialDay = 'specialDay'),
        (e.ProgressionQuest = 'progressionQuest'),
        e
    ))(re || {}),
    le = ((e) => (
        (e.OPEN_DOOR_SUCCESS = 'openDoorSuccess'),
        (e.OPEN_DOOR_FAILED = 'openDoorFailed'),
        (e.OPEN_DOOR_UNDEFINED = 'openDoorUndefined'),
        e
    ))(le || {});
const de = e.createContext({ on: () => g, once: () => g, off: g, trigger: g }),
    ce = ({ children: e }) => {
        const a = L();
        return t.jsx(de.Provider, { value: a, children: e });
    },
    ge = () => a.useContext(de),
    [ue, me] = u()(
        ({ observableModel: e, externalModel: a, readByPath: t }) => {
            const i = () => m(t('bonuses'), y),
                r = {
                    bonuses: s.box(i()),
                    ...e.primitives({
                        dayId: 'dayId',
                        showBoxesButton: 'showBoxesButton',
                        awardDayState: 'awardDayState',
                        doorsOpenedAm: 'openedDoorsCount',
                        openDoorStatus: 'openDoorStatus',
                        isAnimationEnabled: 'isAnimationEnabled',
                    }),
                };
            return (
                a.subscribe(
                    o(() => r.bonuses.set(i())),
                    'bonuses',
                ),
                {
                    ...r,
                    computes: {
                        readyToClose: n(() =>
                            [le.OPEN_DOOR_SUCCESS, le.OPEN_DOOR_FAILED].includes(r.openDoorStatus.get()),
                        ),
                    },
                }
            );
        },
        ({ externalModel: e, model: a }) => ({
            close: e.createCallbackNoArgs('onCloseBtnClick'),
            rewardsShown: e.createCallback(() => ({ dayId: a.dayId.get() }), 'onRewardsShown'),
            setBlur: e.createCallback((e) => ({ setBlur: e }), 'onSetBlur'),
        }),
    ),
    ye = 'Spinner_9656c013',
    he = (e) => t.jsx('div', { ...e, className: i(ye, e.className) }),
    be = 'Footer_13834ef0',
    _e = 'Footer_button_64362985',
    xe = 'Footer_loading_60599415',
    pe = 'Footer_loadingText_ec90e893',
    we = R.strings.advent_calendar.rewardView,
    Se = r(() => {
        const { model: e, controls: a } = me(),
            { on: s, once: o, trigger: n } = ge(),
            i = h(),
            r = b({ buttonSize: _.sizes.medium }, { large: { buttonSize: _.sizes.large } }),
            [g, u] = l(() => ({ opacity: 0, y: '20rem', visibility: 'hidden' })),
            [m, y] = l(() => ({ opacity: 0, y: '20rem', visibility: 'hidden' }));
        return (
            x(() =>
                s('onHeaderAnimationStart', () => {
                    (i.run(() => {
                        a.rewardsShown();
                    }, $),
                        u.start({
                            to: { opacity: 1, y: '0rem', visibility: 'visible' },
                            config: { duration: F, easing: U },
                        }));
                }),
            ),
            x(() =>
                o('onCloseStart', () => {
                    y.start({
                        to: { opacity: 0, y: '20rem', visibility: 'hidden' },
                        config: { duration: H, easing: U },
                        delay: e.awardDayState.get() === re.RegularDay ? $ - H : 0,
                    });
                }),
            ),
            x(() =>
                d(
                    () => e.computes.readyToClose(),
                    () => {
                        u.start({
                            to: { opacity: 0, y: '-20rem', visibility: 'hidden' },
                            onRest: () => {
                                (e.awardDayState.get() !== re.RegularDay &&
                                    e.openDoorStatus.get() !== le.OPEN_DOOR_FAILED) ||
                                    n('onCloseStart');
                            },
                            config: { duration: F, easing: M },
                        });
                    },
                ),
            ),
            x(() =>
                d(
                    () => e.openDoorStatus.get() === le.OPEN_DOOR_SUCCESS,
                    () => {
                        y.start({
                            to: { opacity: 1, y: '0rem', visibility: 'visible' },
                            config: { duration: F, easing: M },
                        });
                    },
                ),
            ),
            t.jsxs(t.Fragment, {
                children: [
                    t.jsxs(c.div, {
                        className: xe,
                        style: g,
                        children: [
                            t.jsx(he, {}),
                            t.jsx('span', { className: pe, children: R.strings.advent_calendar.rewardView.loading() }),
                        ],
                    }),
                    t.jsx(c.div, {
                        className: be,
                        style: m,
                        children: (() => {
                            const a = e.awardDayState.get();
                            return a === re.SpecialDay || (a === re.ProgressionQuest && !e.showBoxesButton.get())
                                ? t.jsx(_, {
                                      theme: _.themes.primary,
                                      size: r.buttonSize,
                                      onClick: () => n('onCloseStart'),
                                      className: _e,
                                      children: we.confirm(),
                                  })
                                : a === re.ProgressionQuest
                                  ? t.jsxs(t.Fragment, {
                                        children: [
                                            t.jsx(_, {
                                                theme: _.themes.primary,
                                                size: r.buttonSize,
                                                onClick: () => n('onCloseStart', 'boxes'),
                                                className: _e,
                                                disabled: !0,
                                                children: we.goToBoxes(),
                                            }),
                                            t.jsx(_, {
                                                theme: _.themes.secondary,
                                                size: r.buttonSize,
                                                onClick: () => n('onCloseStart'),
                                                className: _e,
                                                children: we.confirm(),
                                            }),
                                        ],
                                    })
                                  : a === re.RegularDay
                                    ? t.jsx('div', {
                                          className: pe,
                                          children: R.strings.advent_calendar.rewardView.title.progression(),
                                      })
                                    : null;
                        })(),
                    }),
                ],
            })
        );
    }),
    ve = 'Header_1c79743c',
    fe = 'Header_title_567b49cd',
    Re = 'Header_subTitle_7974beab',
    De = 'Header_shadow_93c4efae',
    Ce = R.strings.advent_calendar.rewardView,
    je = r(() => {
        const { model: e } = me(),
            { on: a, once: s, trigger: o } = ge(),
            [n, i] = l(() => ({ opacity: 0, y: '-20rem' }));
        (x(() =>
            a('onLastRewardAnimationStart', () => {
                i.start({
                    to: { opacity: 1, y: '0rem' },
                    config: { duration: Q, easing: M },
                    delay: X - Q,
                    onStart: () => {
                        o('onHeaderAnimationStart');
                    },
                });
            }),
        ),
            x(() =>
                s('onCloseStart', () => {
                    i.start({ to: { opacity: 0, y: '-20rem' }, config: { duration: Y, easing: U }, delay: 2 * q });
                }),
            ));
        const r = (() => {
            switch (e.awardDayState.get()) {
                case re.RegularDay:
                    return null;
                case re.SpecialDay: {
                    const a = e.openedDoorsCount.get();
                    return {
                        title: Ce.title.specialDoor(),
                        subTitle:
                            e.openedDoorsCount.get() === Object.keys(G).length
                                ? Ce.subTitle.allDoors()
                                : Ce.subTitle.specialDoor(),
                        binding: { count: a.toString() },
                    };
                }
                case re.ProgressionQuest: {
                    const a = e.openedDoorsCount.get();
                    return {
                        title: e.showBoxesButton.get() ? Ce.title.box() : Ce.title.progression(),
                        subTitle: Ce.subTitle.progression(),
                        binding: { count: a.toString() },
                    };
                }
            }
        })();
        return r
            ? t.jsxs(c.div, {
                  className: ve,
                  style: n,
                  children: [
                      t.jsx('div', { className: De }),
                      t.jsx(p, { className: fe, text: r.title, params: r.binding, upgradeLegacy: !0 }),
                      t.jsx(p, { className: Re, text: r.subTitle, params: r.binding, upgradeLegacy: !0 }),
                  ],
              })
            : null;
    }),
    Ne = (e) => {
        switch (e) {
            case 'tmanToken':
            case 'battleToken':
            case 'lootBox':
            case 'addcEconomicBonuses':
            case 'randomNyBooklet':
            case 'randomNyGuide':
            case 'randomNyToy':
            case 'randomNyInstruction':
            case 'wdrcoin':
            case 'ny25Toys':
                return f.MULTI;
            default:
                return C(e);
        }
    },
    Ee = (e) => {
        const a = Ne(e.name);
        return [f.MULTI, f.PREMIUM_PLUS].includes(a) ? e.label : D(e.value, a);
    },
    Te = (e) => (Ne(e.name) === f.MULTI ? D(e.value, f.MULTI) : null),
    Oe = (e, a = w.Small) => ('lootBox' === e.name ? `R.images.gui.maps.icons.quests.bonuses.${a}.${e.icon}` : v(e, a)),
    ke = {
        root: 'Reward_root_21f091ec',
        base: 'Reward_d132dcf9',
        info: 'Reward_info_c4e9757',
        info__credits: 'Reward_info__credits_c44689ba',
        info__gold: 'Reward_info__gold_30b3bff5',
        info__crystal: 'Reward_info__crystal_5d2701bb',
        info__premiumTank: 'Reward_info__premiumTank_7862152',
        counter: 'Reward_counter_8cc9c917',
        shadow: 'Reward_shadow_eae1e9a9',
        base__highlighted: 'Reward_base__highlighted_950ab200',
        label: 'Reward_label_9fa194cb',
        base__s600x450: 'Reward_base__s600x450_21f091ec',
        base__s400x300: 'Reward_base__s400x300_21f091ec',
        base__s296x222: 'Reward_base__s296x222_21f091ec',
    },
    Pe = r(({ bonus: e, dayId: s, index: o, size: n }) => {
        const { model: r } = me(),
            { breakpoint: d } = j(),
            { once: g, trigger: u } = ge(),
            m = a.useRef(null),
            y = a.useRef(!1),
            h = r.awardDayState.get() === re.RegularDay,
            [b, _] = l(() => ({ opacity: 0, scale: 0.25, x: '-50%', y: '-50%' })),
            [, p] = l(() => ({
                x: '0rem',
                y: '0rem',
                opacity: 0,
                scale: 0.25,
                brightness: 3,
                onChange: ({ value: { opacity: e, x: a, y: t, scale: s, brightness: o } }) => {
                    const n = m.current;
                    n &&
                        ((n.style.opacity = e),
                        (n.style.transform = `translateX(${a}) translateY(${t}) scale(${s})`),
                        (n.style.filter = `brightness(${o * o})`));
                },
            })),
            [v, f] = l(() => ({ opacity: 0, y: '2rem' })),
            R = () => {
                const e = (() => {
                        switch (n) {
                            case w.S296x222:
                                return { width: 296, height: 222 };
                            case w.S400x300:
                                return { width: 400, height: 300 };
                            case w.S600x450:
                                return { width: 600, height: 450 };
                            default:
                                return (console.error(`[ImageSize] Unknown size! (${n})`), { width: 296, height: 222 });
                        }
                    })(),
                    a = viewEnv.remToPx(e.width),
                    t = viewEnv.remToPx(e.height),
                    { width: s, height: i } = viewEnv.getClientSizePx();
                return {
                    width: a,
                    height: t,
                    top: i / 2 - t / 2,
                    left: s / 2 - (a * r.bonuses.get().length) / 2 + a * o,
                };
            },
            D = () => {
                var e;
                const a = G[s],
                    t = viewEnv.remToPx(se[d.name].widthRatio),
                    o = viewEnv.remToPx(se[d.name].heightRatio),
                    n = viewEnv.remToPx(se[d.name].topOffset),
                    { width: i, height: l, top: c, left: g } = R(),
                    { width: u, height: m } = viewEnv.getClientSizePx(),
                    y = g + i / 2,
                    h = c + l / 2;
                if (!a || r.awardDayState.get() === re.ProgressionQuest)
                    return {
                        startX: '0rem',
                        startY: '100%',
                        endX: `${viewEnv.pxToRem(u - y)}rem`,
                        endY: `${viewEnv.pxToRem(m - h)}rem`,
                    };
                const b = u / 2 - (((null == (e = oe[0]) ? void 0 : e.length) || 0) * t) / 2,
                    _ = m / 2 - (oe.length * o) / 2 + n,
                    x = b + a.x * t + (a.width * t) / 2,
                    p = _ + a.y * o + (a.height * o) / 2;
                return {
                    startX: `${viewEnv.pxToRem(x - y)}rem`,
                    startY: `${viewEnv.pxToRem(p - h)}rem`,
                    endX: `${viewEnv.pxToRem(u - y)}rem`,
                    endY: `${viewEnv.pxToRem(m - h)}rem`,
                };
            };
        return (
            x(
                () => (
                    r.awardDayState.get() !== re.ProgressionQuest && r.isAnimationEnabled.get()
                        ? (() => {
                              const e = D();
                              e &&
                                  p.start({
                                      from: { x: e.startX, y: e.startY },
                                      to: { opacity: 1, scale: 0.35 },
                                      config: { duration: V, easing: M },
                                      delay: Z * o,
                                      onStart: () => {
                                          (T.sound('adv_reward_icon'),
                                              _.start({
                                                  to: { opacity: 1, scale: 1 },
                                                  config: { duration: K, easing: M },
                                              }));
                                      },
                                      onRest: () => {
                                          y.current ||
                                              p.start({
                                                  to: { opacity: 1, scale: 1, brightness: 1, x: '0rem', y: '0rem' },
                                                  config: { duration: X, easing: E.easeOutCubic },
                                                  delay: W,
                                                  onStart: () => {
                                                      r.bonuses.get().length - 1 === o &&
                                                          u('onLastRewardAnimationStart');
                                                  },
                                                  onRest: async () => {
                                                      y.current ||
                                                          f.start({
                                                              to: { opacity: 1, y: '0rem' },
                                                              config: { duration: J, easing: M },
                                                          });
                                                  },
                                              });
                                      },
                                  });
                          })()
                        : p.start({
                              from: { opacity: -2, scale: 0.35, brightness: 1, x: '0rem', y: '100%' },
                              to: { opacity: 1, scale: 1, brightness: 1, x: '0rem', y: '0rem' },
                              config: { duration: X, easing: E.easeOutCubic },
                              onStart: () => {
                                  (T.sound('adv_reward_icon'),
                                      r.bonuses.get().length - 1 === o && u('onLastRewardAnimationStart'));
                              },
                              onRest: () => {
                                  y.current ||
                                      f.start({ to: { opacity: 1, y: '0rem' }, config: { duration: J, easing: M } });
                              },
                          }),
                    g('onCloseStart', () => {
                        ((y.current = !0),
                            r.isAnimationEnabled.get()
                                ? (() => {
                                      const e = D();
                                      e &&
                                          f.start({
                                              to: { opacity: -0.1 },
                                              config: { duration: ee, easing: U },
                                              delay: te * o,
                                              onRest: () => {
                                                  p.start({
                                                      to: { opacity: 0, scale: 0.25, x: e.endX, y: e.endY },
                                                      config: { duration: $, easing: ae },
                                                      onRest: () => {
                                                          r.bonuses.get().length - 1 === o && u('onCloseEnd');
                                                      },
                                                  });
                                              },
                                          });
                                  })()
                                : f.start({
                                      to: { opacity: -0.1 },
                                      config: { duration: ee, easing: U },
                                      delay: te * o,
                                      onRest: () => {
                                          p.start({
                                              to: { opacity: 0, scale: 1, x: '0', y: '100%' },
                                              config: { duration: $, easing: ae },
                                              onRest: () => {
                                                  r.bonuses.get().length - 1 === o && u('onCloseEnd');
                                              },
                                          });
                                      },
                                  }));
                    })
                ),
            ),
            t.jsxs('div', {
                ref: m,
                className: i(ke.base, ke[`base__${n}`], h && ke.base__highlighted),
                style: { zIndex: r.bonuses.get().length - o },
                children: [
                    h && t.jsx(c.div, { className: ke.shadow, style: b }),
                    t.jsx(N, {
                        name: e.name,
                        image: Oe(e, n),
                        size: n,
                        tooltipArgs:
                            ((C = r.awardDayState.get()),
                            (O = e),
                            C === re.RegularDay
                                ? void 0
                                : { ...S({ tooltipId: O.tooltipId }, Number(O.tooltipContentId)), showDelay: 0 }),
                        special: e.overlayType,
                    }),
                    t.jsxs(c.div, {
                        className: i(ke.info, ke[`info__${e.name}`]),
                        style: v,
                        children: [
                            t.jsx('div', { className: ke.label, children: Ee(e) }),
                            t.jsx('div', { className: ke.counter, children: Te(e) }),
                        ],
                    }),
                ],
            })
        );
        var C, O;
    }),
    Ie = 'Rewards_4b1e77a4',
    Ae = {
        extraSmall: { small: w.S296x222, big: w.S400x300 },
        small: { small: w.S296x222, big: w.S400x300 },
        medium: { small: w.S400x300, big: w.S400x300 },
        large: { small: w.S400x300, big: w.S600x450 },
        extraLarge: { small: w.S400x300, big: w.S600x450 },
    },
    Be = r(() => {
        const { model: e } = me(),
            a = e.bonuses.get(),
            { breakpoint: s } = j(),
            { small: o, big: n } = Ae[s.name],
            i = a.length > 1 ? o : n;
        return t.jsx('div', {
            className: Ie,
            children: a.map((a, s) => t.jsx(Pe, { dayId: e.dayId.get(), bonus: a, index: s, size: i }, s)),
        });
    }),
    ze = 'Ribbon_7188a4e1',
    Le = 'Ribbon_f2479c6',
    $e = 'Ribbon_glowWrapper_47eeb0f4',
    Ue = 'Ribbon_glowBackground_c7e75b5c',
    Fe = 'Ribbon_glow_aee6afd2',
    Me = 'Ribbon_rays_2174e843',
    He = {
        width: 400,
        height: 400,
        frameCount: 50,
        chunk: { count: 2, rows: 5, columns: 5 },
        getChunkPath: P('R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
    },
    Qe = r(() => {
        const { model: e } = me(),
            { on: a, once: s } = ge(),
            o = e.bonuses.get().length,
            [n, i] = l(() => ({ opacity: 0, y: '20rem' }));
        return (
            x(() =>
                a('onHeaderAnimationStart', () => {
                    i.start({
                        to: { opacity: 1, y: '0rem' },
                        config: { duration: ne, easing: M },
                        delay: q,
                        onStart: () => {
                            e.awardDayState.get() !== re.RegularDay && T.sound('adv_reward_ribbon');
                        },
                    });
                }),
            ),
            x(() =>
                s('onCloseStart', () => {
                    i.start({ to: { opacity: 0, y: '20rem' }, config: { duration: ie, easing: U }, delay: q });
                }),
            ),
            e.awardDayState.get() === re.RegularDay
                ? null
                : t.jsxs(c.div, {
                      className: ze,
                      style: n,
                      children: [
                          t.jsx('div', { className: Me }),
                          t.jsxs('div', {
                              className: $e,
                              children: [
                                  (1 === o || 3 === o) && t.jsx('div', { className: Ue }),
                                  o % 2 == 1 &&
                                      t.jsx(O, {
                                          width: He.width,
                                          height: He.height,
                                          frameCount: He.frameCount,
                                          getImageSource: k(He),
                                          frameTime: 50,
                                          className: Fe,
                                      }),
                              ],
                          }),
                          t.jsx('div', { className: Le }),
                      ],
                  })
        );
    }),
    Xe = 'App_60b35649',
    Ye = 'App_background_c855b7f0',
    qe = 'App_close_af249285',
    Ge = r(() => {
        const { model: e, controls: a } = me(),
            { on: s, once: o, off: n, trigger: i } = ge(),
            [r, g] = l(() => ({ opacity: 0 })),
            [u, m] = l(() => ({ opacity: 0, visibility: 'hidden' })),
            y = () => {
                e.computes.readyToClose() && i('onCloseStart');
            };
        return (
            I(y),
            x(() => {
                if (!e.bonuses.get().length) return a.close();
            }),
            x(() =>
                s('onLastRewardAnimationStart', () => {
                    (a.setBlur(!0), g.start({ to: { opacity: 1 }, config: { duration: K, easing: E.easeOutCubic } }));
                }),
            ),
            x(() =>
                o('onCloseStart', () => {
                    (T.sound('adv_whoosh'),
                        a.setBlur(!1),
                        g.start({
                            to: { opacity: 0 },
                            config: { duration: te * (e.bonuses.get().length - 1) + $, easing: U },
                        }));
                }),
            ),
            x(() =>
                s('onCloseEnd', () => {
                    a.close();
                }),
            ),
            x(() =>
                d(
                    () => e.computes.readyToClose(),
                    () => {
                        m.start({
                            to: { opacity: 1, visibility: 'visible' },
                            config: { duration: K, easing: E.easeOutCubic },
                        });
                    },
                ),
            ),
            t.jsxs('div', {
                className: Xe,
                lang: R.strings.settings.LANGUAGE_CODE(),
                children: [
                    t.jsx(c.div, { className: Ye, style: r }),
                    e.awardDayState.get() !== re.RegularDay &&
                        t.jsx(c.div, { className: qe, style: u, children: t.jsx(A, { onClose: y }) }),
                    t.jsx(je, {}),
                    t.jsx(Qe, {}),
                    t.jsx(Be, {}),
                    t.jsx(Se, {}),
                ],
            })
        );
    });
B(t.jsx(z, { children: t.jsx(ce, { children: t.jsx(ue, { children: t.jsx(Ge, {}) }) }) }));
