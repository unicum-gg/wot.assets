import { i as s, u as e, r as a, j as t, t as r, E as i, D as o, f as n } from '../../../chunks/vendor.js';
import {
    i as c,
    a9 as d,
    ck as l,
    bt as m,
    cl as _,
    p as u,
    m as p,
    j as b,
    I as g,
    bj as x,
    b as f,
    f as h,
    E as j,
    A as y,
    O as v,
    u as N,
    B as A,
    aS as C,
    am as I,
    av as w,
    b2 as P,
    g as k,
    Q as z,
    aF as D,
    cX as Q,
    c_ as M,
    cu as T,
    U as B,
    r as S,
    d0 as $,
    d1 as E,
} from '../../../chunks/lib.js';
import { t as H, a as F, b as V } from '../../../chunks/sounds.js';
import { S as L } from '../../../chunks/spring_wrapper.js';
import { Q as O } from '../../../chunks/sound.js';
import { g as W, a as K, c as U, d as X, b as q, e as G } from '../../../chunks/utils.js';
import { S as J } from '../../../chunks/story_point.js';
const [Y, Z] = c('BundleCardProvider')(
        ({ observableModel: s }) => ({ ...s.primitives(['id', 'descriptionKey']) }),
        ({ externalModel: s }) => ({ click: s.createCallback((s) => ({ id: s }), 'onClick') }),
    ),
    [ss, es] = c()(({ observableModel: s }) => ({ root: s.object(), bonuses: s.array('bonuses') }), d),
    [as, ts] = c()(
        ({ observableModel: e }) => {
            const a = { ...e.primitives(['points', 'currentArtefactID']), artefacts: e.array('artefacts') },
                t = s(() => l(a.artefacts.get(), (s) => s.id === a.currentArtefactID.get())),
                r = s(() => m(a.artefacts.get(), (s, e) => (s = Math.max(s, e.cost)), 0)),
                i = s(() => r() * a.artefacts.get().length),
                o = s(() => {
                    const s = _(a.artefacts.get(), (s) => s.isCompleted).length,
                        e = t(),
                        i = e ? a.points.get() / e.cost : 0;
                    return r() * s + r() * i;
                }),
                n = s(() => 0 === _(a.artefacts.get(), (s) => !s.isCompleted).length);
            return {
                ...a,
                computes: { inprogressArtefact: t, maxProgress: i, currentProgress: o, progressionCompleted: n },
            };
        },
        ({ externalModel: s }) => ({
            viewLoaded: s.createCallbackNoArgs('onViewLoaded'),
            close: s.createCallbackNoArgs('onClose'),
            showAbout: s.createCallbackNoArgs('onAbout'),
            showIntro: s.createCallbackNoArgs('onShowIntro'),
            goToMission: s.createCallback((s) => ({ artefactID: s }), 'goToMission'),
        }),
    ),
    rs = 100,
    is = 'ArtefactItem_selected_a9ecccae',
    os = 'ArtefactItem_57bf5e44',
    ns = 'ArtefactItem_base__completed_438526b8',
    cs = 'ArtefactItem_header_26a9c61',
    ds = 'ArtefactItem_overlay_67626f84',
    ls = 'ArtefactItem_index_229c4676',
    ms = 'ArtefactItem_base__inprogress_8bfb1d48',
    _s = 'ArtefactItem_check_f758d1f',
    us = 'ArtefactItem_block_e3607490',
    ps = 'ArtefactItem_rewardIcon_ccf4c7cc',
    bs = 'ArtefactItem_reward_4a09e03f',
    gs = 'ArtefactItem_reward__completed_b917ecc',
    xs = 'ArtefactItem_reward__booster_ca49785a';
function fs(s, e = !1) {
    return s.name === X
        ? e
            ? `R.images.last_stand.gui.maps.icons.boosters.c_68x68.${s.icon}`
            : `R.images.last_stand.gui.maps.icons.boosters.c_68x68.disabled.${s.icon}`
        : q(s, g.Small);
}
function hs({ id: s, index: o, rewards: n, className: c, inprogress: d, canceledAnim: l, completed: m }) {
    const [_, x] = e(() => ({ y: 20, opacity: 0 }));
    return (
        a.useEffect(() => {
            x.start({
                to: { y: 0, opacity: 1 },
                delay: l ? 0 : 80 * o + rs,
                config: { tension: 80, friction: 10 },
                immediate: l,
                onStart: () => {
                    u.sound(O);
                },
            });
        }, [x, l, o]),
        t.jsxs(r.div, {
            className: i(os, d && ms, m && ns, c),
            style: _,
            children: [
                t.jsxs('div', {
                    className: cs,
                    children: [
                        d && t.jsx('div', { className: ds, style: { animationDuration: '1500ms' } }),
                        t.jsx('div', { className: ls, children: o }),
                        m && t.jsx('div', { className: _s }),
                    ],
                }),
                t.jsxs('div', {
                    className: us,
                    children: [
                        d && t.jsx('div', { className: is, style: { animationDuration: '1500ms' } }),
                        p(n, (e, a) =>
                            t.jsx(
                                b,
                                {
                                    name: e.name,
                                    value: U(e),
                                    className: i(bs, m && gs, e.name === X && xs),
                                    classNames: { rewardIcon: ps },
                                    special: e.overlayType,
                                    size: g.Small,
                                    image: fs(e, m),
                                    valueType: K(e.name),
                                    tooltipArgs: W(e),
                                },
                                `${e.name}${s}${a}`,
                            ),
                        ),
                    ],
                }),
            ],
        })
    );
}
const js = o(function () {
        const { model: s } = ts();
        return t.jsx(x, {
            size: x.sizes.large,
            value: s.computes.currentProgress(),
            maxValue: s.computes.maxProgress(),
            status: x.statuses.doneInactive,
            children: t.jsx(x.Fill, {}),
        });
    }),
    ys = 'ProgressionHeader_completedLabel_9abba8c5',
    vs = 'ProgressionHeader_currentProgress_90745a20',
    Ns = 'ProgressionHeader_spIcon_9d24495b',
    As = o(function () {
        const { model: s } = ts(),
            e = s.computes.inprogressArtefact(),
            a = e?.cost,
            r = f({ size: J.sizes.s16x16 }, { medium: { size: J.sizes.s24x24 } }),
            i = h({ contentId: R.views.last_stand.mono.lobby.tooltips.points_tooltip('resId') });
        return t.jsx(t.Fragment, {
            children: s.computes.progressionCompleted()
                ? t.jsx('div', { className: ys, children: R.strings.last_stand_lobby.rewardPath.completed() })
                : t.jsx(j, {
                      text: R.strings.last_stand_lobby.rewardPath.progress(),
                      alignContent: y.FlexEnd,
                      binding: {
                          artefactIndex: e?.index,
                          currentProgress: t.jsx('div', { className: vs, children: G(s.points.get(), a) }),
                          maxProgress: a,
                          icon: t.jsx('div', { ...i, className: Ns, children: t.jsx(J, { size: r.size }) }),
                      },
                  }),
        });
    }),
    Cs = 'Artefacts_9c0f750b',
    Is = 'Artefacts_title_e09aab86',
    ws = 'Artefacts_list_f836ebac',
    Ps = 'Artefacts_item_405af956',
    Rs = 'Artefacts_divider_423e6820',
    ks = 'Artefacts_divider__cancel_a2faf44e',
    zs = 'Artefacts_progressBar_d08a92a4',
    Ds = { from: { width: '0%', opacity: 0 }, to: { width: '100%', opacity: 1 } },
    Qs = { from: { y: 5, x: 0, opacity: 0 }, to: { y: 0, x: 0, opacity: 0.8 }, config: { tension: 240, friction: 7 } },
    Ms = o(function ({ canceledAnim: s, className: e }) {
        const {
            model: { currentArtefactID: a, artefacts: r },
        } = ts();
        return t.jsxs('div', {
            className: i(Cs, e),
            children: [
                t.jsx(L, { className: Is, ...Qs, delay: rs, isCanceled: s, children: t.jsx(As, {}) }),
                t.jsxs('div', {
                    className: ws,
                    children: [
                        t.jsx(L, {
                            className: zs,
                            ...Ds,
                            delay: 900,
                            duration: 500,
                            isCanceled: s,
                            children: t.jsx(js, {}),
                        }),
                        p(r.get(), (e, o) =>
                            t.jsxs(
                                'div',
                                {
                                    className: Ps,
                                    children: [
                                        t.jsx(hs, {
                                            ...e,
                                            inprogress: e.id === a.get(),
                                            completed: e.isCompleted,
                                            canceledAnim: s,
                                        }),
                                        o < r.get().length - 1 && t.jsx('div', { className: i(Rs, s && ks) }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                    ],
                }),
            ],
        });
    }),
    Ts = 'BundleCard_4232f0d2',
    Bs = 'BundleCard_bg_ebc1b5c2',
    Ss = 'BundleCard_name_94b03ec8',
    $s = 'BundleCard_button_f32dc703',
    Es = v.resolve('strings'),
    Hs = o(function ({ className: s }) {
        const { model: e, controls: a } = Z(),
            {
                breakpoint: { weight: r },
            } = N(),
            i = f({ size: A.sizes.extraSmall }, { large: { size: A.sizes.medium } });
        return e.id.get()
            ? t.jsxs('div', {
                  className: n(Ts, s),
                  children: [
                      t.jsx('div', { className: Bs }),
                      r > C.medium.weight &&
                          t.jsx(j, {
                              text: Es.readOrEmpty(`R.strings.last_stand_lobby.bundle.name.${e.descriptionKey.get()}`),
                              isTruncationAvailable: !0,
                              isTooltipEnable: !0,
                              justifyContent: y.Center,
                              classMix: Ss,
                          }),
                      t.jsx(A, {
                          className: $s,
                          theme: A.themes.secondary,
                          size: i.size,
                          onClick: () => a.click(e.id.get()),
                          children: R.strings.last_stand_lobby.rewardPath.btn.shop(),
                      }),
                  ],
              })
            : null;
    });
function Fs(s) {
    const e = R.aliases.last_stand.shared.BundleCard('resId'),
        r = a.useMemo(() => ({ rootId: e }), [e]);
    return t.jsx(I, { id: e, children: t.jsx(Y, { options: r, children: t.jsx(Hs, { ...s }) }) });
}
const Vs = 'DailyQuestsCard_8452735',
    Ls = 'DailyQuestsCard_content_9dfeafcb',
    Os = 'DailyQuestsCard_timer_88092dd5',
    Ws = 'DailyQuestsCard_icon_e3692c40',
    Ks = 'DailyQuestsCard_description_716ab6d8',
    Us = 'DailyQuestsCard_base__completed_2dd05187',
    Xs = 'DailyQuestsCard_progress_a181f69d',
    qs = 'DailyQuestsCard_currentProgress_a63d05d7',
    Gs = 'DailyQuestsCard_progressValue_59475865',
    Js = 'DailyQuestsCard_rewards_a8cdf255',
    Ys = 'DailyQuestsCard_reward_461f11ab',
    Zs = o(function ({ className: s }) {
        const { model: e } = es(),
            { breakpoint: a } = N(),
            {
                name: r,
                conditionName: o,
                resetTime: n,
                currentProgress: c,
                maximumProgress: d,
                isCompleted: l,
                isHidden: m,
                allDailyCompleted: _,
            } = e.root.get(),
            u = w({
                body: l
                    ? R.strings.last_stand_tooltips.daily.timer.bodyCompleted()
                    : R.strings.last_stand_tooltips.daily.timer.body(),
            }),
            f = d > 0,
            h = a.weight <= C.medium.weight,
            v = h ? g.S24x24 : g.Small;
        return m
            ? null
            : t.jsx('div', {
                  className: i(Vs, l && Us, s),
                  children: t.jsxs('div', {
                      className: Ls,
                      children: [
                          n > 0 &&
                              (!_ || (_ && !l)) &&
                              t.jsx('div', {
                                  ...u,
                                  className: Os,
                                  children: t.jsx(P, {
                                      size: h ? P.size.x24x24 : P.size.x32x32,
                                      start: n,
                                      format: P.format.default,
                                  }),
                              }),
                          t.jsx('div', {
                              className: Ws,
                              style: {
                                  backgroundImage: `url(${l ? 'R.images.gui.maps.icons.userMissions.hub.basic.done_icon_m' : `'R.images.gui.maps.icons.userMissions.missionIcons.c_80.${o}_silver'`})`,
                              },
                          }),
                          t.jsx(
                              j,
                              {
                                  classMix: Ks,
                                  text: r,
                                  justifyContent: h ? y.FlexStart : y.Center,
                                  isTruncationAvailable: !0,
                              },
                              `description${a.name}`,
                          ),
                          f &&
                              t.jsxs('div', {
                                  className: Xs,
                                  children: [
                                      t.jsx(j, {
                                          classMix: Gs,
                                          text: R.strings.last_stand_lobby.common.progress(),
                                          binding: {
                                              value: t.jsx('div', { className: qs, children: k(c, 1) }),
                                              maxValue: k(d, 1),
                                          },
                                      }),
                                      t.jsx(x, {
                                          size: x.sizes.medium,
                                          value: c,
                                          maxValue: d + 1,
                                          status: x.statuses.doneInactive,
                                          children: t.jsx(x.Fill, {}),
                                      }),
                                  ],
                              }),
                          t.jsx('div', {
                              className: Js,
                              children: p(e.bonuses.get(), (s, e) =>
                                  t.jsx(
                                      b,
                                      {
                                          name: s.name,
                                          value: U(s),
                                          className: Ys,
                                          special: s.overlayType,
                                          size: v,
                                          image: q(s, v),
                                          valueType: K(s.name),
                                          tooltipArgs: W(s, R.aliases.last_stand.shared.Quests('resId')),
                                      },
                                      `${s.name}${e}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
              });
    }),
    se = { rootId: R.aliases.last_stand.shared.Quests('resId') };
function ee(s) {
    return t.jsx(I, { id: se.rootId, children: t.jsx(ss, { options: se, children: t.jsx(Zs, { ...s }) }) });
}
const ae = 'Header_e83ca27a',
    te = 'Header_card_ecb415bd',
    re = 'Header_divider_1ed29076',
    ie = o(function ({ className: s, canceledAnim: e }) {
        const { model: a } = es(),
            { model: r } = Z(),
            i = [
                { component: t.jsx(ee, {}), visible: !a.root.get().isHidden },
                { component: t.jsx(Fs, {}), visible: Boolean(r.id.get()) },
            ],
            o = _(i, (s) => s.visible);
        return t.jsx('div', {
            className: n(ae, s),
            children: p(o, (s, a) =>
                t.jsxs(
                    'div',
                    {
                        className: te,
                        children: [
                            t.jsx(L, {
                                from: { y: 15, opacity: 0 },
                                to: { y: 0, opacity: 1 },
                                config: { tension: 180, friction: 12 },
                                delay: rs * a,
                                isCanceled: e,
                                children: s.component,
                            }),
                            a !== o.length - 1 &&
                                t.jsx(L, {
                                    from: { y: 15, opacity: 0 },
                                    to: { y: 0, opacity: 1 },
                                    config: { tension: 180, friction: 12 },
                                    delay: rs * a + 100,
                                    isCanceled: e,
                                    children: t.jsx('div', { className: re }),
                                }),
                        ],
                    },
                    `card${a}`,
                ),
            ),
        });
    }),
    oe = 'RewardPathApp_7f1678b4',
    ne = 'RewardPathApp_vignette_9da9dd3c',
    ce = 'RewardPathApp_bg_6166d40a',
    de = 'RewardPathApp_itemsBlock_c1ba6b30',
    le = 'RewardPathApp_footer_1bf05925',
    me = 'RewardPathApp_completedTitle_bb261d47',
    _e = 'RewardPathApp_title_9b71379b',
    ue = 'RewardPathApp_icon_36f650db',
    pe = 'RewardPathApp_header_aca0c837',
    be = o(function () {
        const { model: s, controls: e } = ts(),
            { breakpoint: r } = N();
        (z(e.close),
            a.useEffect(() => {
                D(() => {
                    (e.viewLoaded(), Q(!0));
                });
            }, [e]));
        const [i, o] = a.useState(!1),
            n = h({ contentId: R.views.last_stand.mono.lobby.tooltips.additional_data_tooltip('resId') });
        return t.jsxs('div', {
            className: oe,
            onClick: () => o(!0),
            children: [
                t.jsx('div', { className: ce }),
                t.jsx('div', { className: ne }),
                t.jsx('div', {
                    className: _e,
                    children: s.computes.progressionCompleted()
                        ? t.jsx('div', {
                              className: me,
                              children: R.strings.last_stand_lobby.rewardPath.completedTitle(),
                          })
                        : t.jsx(j, {
                              text: R.strings.last_stand_lobby.rewardPath.boostTitle(),
                              binding: {
                                  icon: r.weight >= C.medium.weight ? t.jsx('div', { ...n, className: ue }) : '',
                              },
                          }),
                }),
                t.jsx(ie, { className: pe }),
                t.jsx('div', { className: le, children: t.jsx(Ms, { className: de, canceledAnim: i }) }),
            ],
        });
    }),
    ge = M([H, F, V]);
S(
    new T()
        .addWithProps(B, { soundsOverrides: ge })
        .add(as)
        .addWithProps(Y, { options: { rootId: R.aliases.last_stand.shared.BundleCard('resId') } })
        .addWithProps(ss, { options: { rootId: R.aliases.last_stand.shared.Quests('resId') } })
        .render(t.jsx(be, {})),
)
    .then(() => $(document.getElementById('root')))
    .then(() => E())
    .then(() => Q(!1));
