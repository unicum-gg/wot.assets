import { j as e, x as s, y as a, r } from '../../../chunks/vendor.js';
import {
    M as t,
    B as i,
    i as n,
    F as o,
    cq as l,
    cr as d,
    p as _,
    bv as c,
    a4 as u,
    cs as m,
    ct as h,
    ao as b,
    b as g,
    u as p,
    cu as f,
    r as x,
    U as w,
} from '../../../chunks/lib.js';
import { u as v, S as j, a as A } from '../../../chunks/schedule_subheading.js';
import { u as S } from '../../../chunks/use_server_time_polling.js';
import { g as N } from '../../../chunks/get_roman_levels.js';
/* empty css                     */ const B = (e) => (e >= t.Large ? i.sizes.medium : i.sizes.small),
    [y, k] = n()(
        ({ observableModel: e }) => ({ root: e.object(), vehicleLevels: e.array('vehicleLevels') }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    I = 'CountDownSubheading_3410a94d',
    D = 'CountDownSubheading_highlight_4e42571e',
    C = 'CountDownSubheading_timeLeftText_83a0f10d',
    $ = 'CountDownSubheading_countDownContainer_95936a62',
    L = 'CountDownSubheading_countDownText_c438ad0f',
    T = 'CountDownSubheading_timer_dfa1cd55',
    M = ({ timeLeft: a, className: r }) =>
        e.jsx('div', {
            className: s(I, r),
            children: e.jsx(o, {
                text: R.strings.comp7_light.countDown.text(),
                binding: {
                    timeLeft: e.jsxs('div', {
                        className: $,
                        children: [
                            e.jsx('div', { className: D }),
                            e.jsx('div', { className: T }),
                            e.jsx(l, { duration: a, icon: d.None, classNames: { text: L } }),
                        ],
                    }),
                },
                classMix: C,
            }),
        }),
    z = { countDown: 'IntroSubheading_countDown_674b18af' },
    E = a(() => {
        const { model: s, controls: a } = v(),
            r = s.season.startTimestamp.get(),
            t = s.season.endTimestamp.get(),
            i = s.season.serverTimestamp.get();
        return (
            S(i, t, a.pollServerTime),
            e.jsx('div', {
                className: z.base,
                children:
                    i < r ? e.jsx(M, { timeLeft: r - i, className: z.countDown }) : e.jsx(j, { hasSeasonName: !1 }),
            })
        );
    }),
    O = {
        base: 'ArrowButton_6b3aeda7',
        base__disabled: 'ArrowButton_base__disabled_66128a31',
        base__large: 'ArrowButton_base__large_ad074d68',
        base__medium: 'ArrowButton_base__medium_8edb18ea',
        base__small: 'ArrowButton_base__small_bfd38674',
        base__extraSmall: 'ArrowButton_base__extraSmall_374b168f',
        layers: 'ArrowButton_layers_2cf2a988',
        base__right: 'ArrowButton_base__right_5327085d',
        layer: 'ArrowButton_layer_62eed5ed',
        layer__default: 'ArrowButton_layer__default_5f556b05',
        layer__hover: 'ArrowButton_layer__hover_5f556b05',
        layer__active: 'ArrowButton_layer__active_a807ac2e',
        layer__disabled: 'ArrowButton_layer__disabled_2af2a5f5',
        fadeIn: 'ArrowButton_fadeIn_5327085d',
        fadeInThreeQuarters: 'ArrowButton_fadeInThreeQuarters_5327085d',
        fadeInHalf: 'ArrowButton_fadeInHalf_5327085d',
        fadeOut: 'ArrowButton_fadeOut_5327085d',
        fadeInWithScale: 'ArrowButton_fadeInWithScale_5327085d',
        slideUp: 'ArrowButton_slideUp_5327085d',
        scale: 'ArrowButton_scale_5327085d',
        raysAppearance: 'ArrowButton_raysAppearance_5327085d',
        rotate: 'ArrowButton_rotate_5327085d',
        'reverse-rotate': 'ArrowButton_reverse-rotate_5327085d',
        glowAppearance: 'ArrowButton_glowAppearance_5327085d',
        highlightAppearance: 'ArrowButton_highlightAppearance_5327085d',
        blink: 'ArrowButton_blink_5327085d',
        slideUpIn: 'ArrowButton_slideUpIn_5327085d',
    },
    W = ['default', 'hover', 'active', 'disabled'];
function U({
    size: a = 'large',
    direction: r = 'left',
    disabled: t = !1,
    mouseEnterSound: i = 'highlight',
    className: n,
    classNames: o,
    onMouseEnter: l,
    ...d
}) {
    const c = s(O.layer, null == o ? void 0 : o.layer);
    return e.jsx('div', {
        className: s(O.base, O[`base__${r}`], O[`base__${a}`], t && O.base__disabled, n),
        onMouseEnter: (e) => {
            (null == l || l(e), _.sound(i));
        },
        ...d,
        children: e.jsx('div', {
            className: O.layers,
            children: W.map((r) =>
                e.jsx(
                    'div',
                    {
                        className: s(c, O[`layer__${r}`]),
                        style: { backgroundImage: `url(R.images.comp7_light.gui.maps.icons.arrows.${r}_${a})` },
                    },
                    r,
                ),
            ),
        }),
    });
}
const H = 'Slide_680b9fee',
    F = 'Slide_title_442d6e94',
    G = 'Slide_icon_2921c32',
    Q = 'Slide_description_a6104f8',
    q = R.strings.comp7_light.intro,
    J = a(({ id: s }) => {
        const { model: a } = k(),
            r = `url(${R.images.comp7_light.gui.maps.icons.metaIntro.$dyn(s)})`,
            t = N(a.vehicleLevels.get(), R.strings.comp7_light.listSeparator());
        return e.jsxs('div', {
            className: H,
            children: [
                e.jsx(o, { text: `${q.title.$dyn(s)}`, classMix: F }),
                e.jsx('div', { className: G, style: { backgroundImage: r } }),
                e.jsx(o, { text: `${q.description.$dyn(s)}`, binding: { levels: t }, classMix: Q }),
            ],
        });
    }),
    K = 'Slider_caaf79d4',
    P = 'Slider_trackWrapper_9b67f47e',
    V = 'Slider_track_e521f890',
    X = 'Slider_track__withoutTransition_df13aef3',
    Y = 'Slider_slide_727efd4',
    Z = 'Slider_slide__active_b616c59f',
    ee = 'Slider_arrow_4c311c25',
    se = 'Slider_arrow__left_5cd6617d',
    ae = 'Slider_arrow__right_5676bbb7',
    re = 'Slider_counter_8cf4b130',
    te = 'Slider_counterDivider_3d5ed95',
    ie = ['vehiclesOnMap', 'pointsOfInterest', 'roleSkills', 'onslaughtModifiers', 'lightGameplay'],
    ne = ie.length,
    oe = (e, s) => () => {
        e || (s(), _.click(), _.sound(R.sounds.bp_glide_01()));
    },
    le = ({ className: a }) => {
        const [t, i] = r.useState(0),
            [n, o] = r.useState(!1),
            l = 0 === t,
            d = t === ne - 1;
        (c(() => {
            const e = () => {
                o(!0);
            };
            return (
                window.addEventListener('resize', e),
                () => {
                    window.removeEventListener('resize', e);
                }
            );
        }),
            r.useEffect(
                () =>
                    u(() =>
                        m(() => {
                            n && o(!1);
                        }, 500),
                    ),
                [n],
            ));
        const _ = oe(l, () => i(t - 1)),
            g = oe(d, () => i(t + 1));
        return (
            h(b.ARROW_LEFT, _),
            h(b.ARROW_RIGHT, g),
            e.jsxs('div', {
                className: s(K, a),
                style: { '--currentSlideIndex': t, '--transitionDuration': '500ms' },
                children: [
                    e.jsx(U, { size: 'medium', direction: 'left', disabled: l, className: s(ee, se), onClick: _ }),
                    e.jsx(U, { size: 'medium', direction: 'right', disabled: d, className: s(ee, ae), onClick: g }),
                    e.jsxs('div', {
                        className: P,
                        children: [
                            e.jsxs('div', {
                                className: re,
                                children: [t + 1, e.jsx('div', { className: te, children: '/' }), ne],
                            }),
                            e.jsx('div', {
                                className: s(V, n && X),
                                children: ie.map((a, r) =>
                                    e.jsx(
                                        'div',
                                        { className: s(Y, r === t && Z), children: e.jsx(J, { id: a }) },
                                        `slide-${r}`,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    de = 'App_c97331a8',
    _e = 'App_content_24a8a318',
    ce = 'App_slider_87749c8a',
    ue = 'App_buttonWrapper_bc918676',
    me = 'App_button_b6edc495',
    he = a(function () {
        const { controls: s } = k(),
            { mediaSize: a } = g();
        return (
            p(s.close),
            e.jsxs('div', {
                className: de,
                children: [
                    e.jsx(E, {}),
                    e.jsx('div', { className: _e, children: e.jsx(le, { className: ce }) }),
                    e.jsx('div', {
                        className: ue,
                        children: e.jsx(i, {
                            theme: i.themes.primary,
                            size: B(a),
                            className: me,
                            onClick: s.close,
                            children: R.strings.comp7_light.intro.confirmButton(),
                        }),
                    }),
                ],
            })
        );
    });
f('comp7_light/gui/maps/icons/backgrounds/intro_bg.dds');
x(
    e.jsx(w, {
        children: e.jsx(y, {
            children: e.jsx(A, { options: { context: 'model.scheduleInfo' }, children: e.jsx(he, {}) }),
        }),
    }),
    { fullScreen: !0 },
);
