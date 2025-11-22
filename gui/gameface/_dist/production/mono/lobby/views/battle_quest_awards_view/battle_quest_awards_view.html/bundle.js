import { j as e, w as s, x as a, y as r, r as t, z as i, A as n } from '../../../chunks/vendor.js';
import {
    u as l,
    p as o,
    i as c,
    M as d,
    I as b,
    c as _,
    g as u,
    C as m,
    n as p,
    a as h,
    b as g,
    m as A,
    R as w,
    F as f,
    B as v,
    r as x,
    U as j,
} from '../../../chunks/lib.js';
import { u as L } from '../../../chunks/useParseRewards.js';
/* empty css                     */ const N = 'CloseButton_49a682e7',
    k = 'CloseButton_icon_b31f68a5',
    C = 'CloseButton_iconHover_b5894825',
    I = 'Page_close_401a9518',
    y = ({
        onClick: a,
        className: r,
        classNames: t,
        onMouseEnter: i,
        onMouseLeave: n,
        onMouseDown: c,
        onMouseUp: d,
        soundHover: b = 'highlight',
        soundClick: _ = 'play',
    }) => {
        l(a);
        return e.jsxs('div', {
            className: s(N, I, r),
            onMouseEnter: (e) => {
                (null == i || i(e), o.sound(b));
            },
            onMouseLeave: (e) => {
                null == n || n(e);
            },
            onMouseDown: (e) => {
                (null == c || c(e), o.sound(_));
            },
            onMouseUp: (e) => {
                null == d || d(e);
            },
            onClick: a,
            children: [
                e.jsx('div', { className: s(k, null == t ? void 0 : t.icon) }),
                e.jsx('div', { className: s(C, null == t ? void 0 : t.iconHover) }),
            ],
        });
    },
    [M, S] = c()(
        ({ observableModel: e }) => ({ ...{ root: e.object(), rewards: e.array('rewards') } }),
        ({ externalModel: e }) => ({
            approve: e.createCallbackNoArgs('onApprove'),
            close: e.createCallbackNoArgs('onClose'),
        }),
    );
var B = ((e) => ((e.InProgress = 'inProgress'), (e.Completed = 'completed'), e))(B || {});
const H = 'AnimatedBackground_f47e334b',
    P = 'AnimatedBackground_rays_e7a4dbbe',
    U = 'AnimatedBackground_sunShineCanvas_21aff824',
    z = 'AnimatedBackground_staticHighlight_80e8711f',
    T = {
        width: 400,
        height: 400,
        frameCount: 50,
        chunk: { count: 2, rows: 5, columns: 5 },
        getChunkPath: h('R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
    },
    Q = _(T),
    D = ({ className: a }) =>
        e.jsx('div', {
            className: s(H, a),
            children: u.isHigh()
                ? e.jsxs(e.Fragment, {
                      children: [
                          e.jsx(m, {
                              onAnimationDone: p,
                              width: T.width,
                              height: T.height,
                              frameCount: T.frameCount,
                              getImageSource: Q,
                              frameTime: 50,
                              className: U,
                          }),
                          e.jsx('div', { className: P }),
                      ],
                  })
                : e.jsx('div', { className: z }),
        }),
    E = {
        base: 'AwardsList_fd6f2000',
        value: 'AwardsList_value_294b63f8',
        reward: 'AwardsList_reward_61da62c0',
        label: 'AwardsList_label_8443931c',
        animatedBg: 'AwardsList_animatedBg_1a831f28',
        ribbon: 'AwardsList_ribbon_ff406dec',
        base__inProgress: 'AwardsList_base__inProgress_bcb7b6e7',
        base__completed: 'AwardsList_base__completed_bcb7b6e7',
        fadeIn: 'AwardsList_fadeIn_bcb7b6e7',
        fadeInThreeQuarters: 'AwardsList_fadeInThreeQuarters_bcb7b6e7',
        fadeInHalf: 'AwardsList_fadeInHalf_bcb7b6e7',
        fadeOut: 'AwardsList_fadeOut_bcb7b6e7',
        fadeInWithScale: 'AwardsList_fadeInWithScale_bcb7b6e7',
        slideUp: 'AwardsList_slideUp_bcb7b6e7',
        scale: 'AwardsList_scale_bcb7b6e7',
        raysAppearance: 'AwardsList_raysAppearance_bcb7b6e7',
        rotate: 'AwardsList_rotate_bcb7b6e7',
        'reverse-rotate': 'AwardsList_reverse-rotate_bcb7b6e7',
        glowAppearance: 'AwardsList_glowAppearance_bcb7b6e7',
        highlightAppearance: 'AwardsList_highlightAppearance_bcb7b6e7',
        blink: 'AwardsList_blink_bcb7b6e7',
        slideUpIn: 'AwardsList_slideUpIn_bcb7b6e7',
    },
    W = a(function () {
        const { mediaSize: a } = g(),
            { model: r } = S(),
            { parsedRewards: t } = L(
                r.rewards.get(),
                ((e) => (e >= d.Large ? b.S400x300 : e >= d.Small ? b.S296x222 : b.S232x174))(a),
            ),
            { battleStatus: i } = r.root.get();
        return e.jsxs('div', {
            className: s(E.base, E[`base__${i}`]),
            children: [
                i === B.Completed && e.jsx(D, { className: E.animatedBg }),
                e.jsx('div', { className: E.ribbon }),
                A(t, (s, a) =>
                    e.jsxs(
                        'div',
                        {
                            className: E.reward,
                            children: [
                                e.jsx(w, { ...s, classNames: { info: E.value } }),
                                e.jsx('span', { className: E.label, children: s.userName }),
                            ],
                        },
                        a,
                    ),
                ),
            ],
        });
    }),
    $ = 'Header_bbfb94eb',
    F = 'Header_subTitle_ab861848',
    O = 'Header_title_818ec59a',
    q = R.strings.comp7_light.battleQuestAwards,
    G = a(function () {
        const { model: s } = S(),
            { battleStatus: a, level: r } = s.root.get();
        return e.jsxs('div', {
            className: $,
            children: [
                e.jsx('span', { className: F, children: q.subTitle() }),
                e.jsx(f, { text: `${q.title.$dyn(a)}`, classMix: O, binding: { level: r } }),
            ],
        });
    }),
    J = 'App_fef06415',
    K = 'App_content_938ab47b',
    V = 'App_buttonWrapper_de3d4b06',
    X = 'App_button_5120fb02',
    Y = 'App_rewardList_6063ee6e',
    Z = a(function () {
        const { controls: s } = S(),
            { mediaSize: a } = g(),
            c = a >= d.Large ? v.sizes.large : v.sizes.small,
            b = r({ from: { opacity: 0 }, to: { opacity: 1 }, leave: { opacity: 0 }, config: n.molasses });
        return (
            t.useEffect(() => {
                o.sound('pr_reward_screen');
            }, []),
            l(s.close),
            e.jsx('div', {
                className: J,
                children: e.jsxs(i.div, {
                    className: K,
                    style: { ...b },
                    children: [
                        e.jsx(G, {}),
                        e.jsx('div', { className: Y, children: e.jsx(W, {}) }),
                        e.jsx('div', {
                            className: V,
                            children: e.jsx(v, {
                                theme: v.themes.primary,
                                size: c,
                                onClick: s.approve,
                                className: X,
                                children: R.strings.comp7_light.battleQuestAwards.button(),
                            }),
                        }),
                        e.jsx(y, { onClick: s.close }),
                    ],
                }),
            })
        );
    });
x(e.jsx(j, { children: e.jsx(M, { children: e.jsx(Z, {}) }) }));
