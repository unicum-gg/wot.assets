import { r as e, t as s, v as a, w as t, k as n, s as i, j as o, e as r } from './vendor.js';
import {
    ae as c,
    af as l,
    ag as d,
    ah as u,
    Z as m,
    W as f,
    X as p,
    C as g,
    Y as _,
    a6 as h,
    d as x,
    B as v,
    a7 as b,
    a8 as y,
    F as N,
    e as w,
    a2 as j,
    ab as k,
    w as C,
    I as B,
} from './lib.js';
import { a as S, o as E, r as O, g as P } from './getRewardImage.js';
import { R as z, a as $, b as T } from './resources.js';
import { u as I, L as A, A as V, h as W, B as F } from './box_panel.js';
import { P as L, S as D } from './sounds.js';
import { T as H } from './utils.js';
import { V as M } from './vehicle_info.js';
const q = (s) => {
    const a = e.useContext(s);
    if (null === a)
        throw new Error('useAnimationApi was called in component, which is not wrapped in MultipleAwardProvider');
    return a;
};
function G(s) {
    return () => {
        const { steps: a, autoStart: t = !0 } = s,
            n = e.useRef(0),
            i = e.useRef(null),
            o = e.useRef('idle'),
            r = c(),
            m = l(),
            f = d(),
            p = e.useMemo(() => {
                const e = () => {
                    const s = a[n.current];
                    if (!s) return ((o.current = 'end'), void r.trigger('end'));
                    const t = a[n.current - 1],
                        c = (t && !t.pauseNextSteps && t.duration) || 0,
                        l = (s.delay || 0) + c;
                    (m.run(() => {
                        const s = a[n.current];
                        if (i.current) {
                            if (s) {
                                if ((i.current.classList.add(s.name), r.trigger('change', s), s.pauseNextSteps))
                                    return ((o.current = 'paused'), r.trigger('pause'), void n.current++);
                                (n.current++, e());
                            }
                        } else
                            console.error(`${s?.name ?? 'unknown'} step don't know on what rootRef it should be set`);
                    }, l),
                        (o.current = 'running'));
                };
                return {
                    rootRef: i,
                    steps: a,
                    events: { on: r.on, off: r.off },
                    start: () => {
                        (e(), r.trigger('start'));
                    },
                    resume: () => {
                        'paused' === o.current
                            ? (e(), r.trigger('resume'))
                            : console.warn(
                                  'api.resume() should be called only after paused animation, ignore resume() call',
                              );
                    },
                    skipAll: () => {
                        (m.clear(),
                            f.run(() => {
                                ((o.current = 'skip'),
                                    r.trigger('skipAll'),
                                    a.forEach((e) => {
                                        i.current
                                            ? i.current.classList.add(`${e.name}__skip`)
                                            : console.error(
                                                  `${e} tried to be set, but rootRef was not received in api`,
                                              );
                                    }),
                                    (o.current = 'end'),
                                    r.trigger('end'));
                            }));
                    },
                    reset: () => {
                        (a.forEach((e) => {
                            i.current
                                ? (i.current.classList.remove(e.name),
                                  i.current.classList.remove(`${e.name}__skip`),
                                  r.trigger('reset'))
                                : console.error(`${e} tried to be set, but rootRef was not received in api`);
                        }),
                            (n.current = 0));
                    },
                };
            }, [m, n, r, f, a]);
        return (
            u(() => {
                t && p.start();
            }),
            p
        );
    };
}
function K(e, s = '', a = !1) {
    if (!s) return { video: '', image: '', sound: '', stopSound: '' };
    const t = `lootbox.events.${e}.rarityOverlay.${s}`,
        n = `gui.maps.icons.lootBoxSystem.events.${e}.rarityOverlay.${s}`,
        i = `gui_lb_video_appear_${e}_${s}`,
        o = S(R.sounds, `${i}_stop`) || S(R.sounds, 'gui_lb_video_stop'),
        r =
            S(R.sounds, i) ||
            S(
                R.sounds,
                a ? 'gui_lb_video_appear_default_vehicles_wheeled' : 'gui_lb_video_appear_default_vehicles_treaded',
            );
    return { video: S(R.videos, t), image: S(R.images, n), sound: r, stopSound: o };
}
function Q(e, s = '') {
    return '' !== K(e, s).video;
}
const U = (s) => {
        e.useEffect(() => {
            const e = s.current;
            return () => {
                e && (e.domRef.src = '');
            };
        }, [s]);
    },
    X = (s, a = !0, t) => {
        e.useEffect(() => {
            const e = s.current;
            if (a && e) return t ? e.pause() : e.play();
        }, [t, s]);
    },
    Y = {
        initial: 'initial',
        waiting: 'waiting',
        preparation: 'preparation',
        open: 'open',
        rewards: 'rewards',
        page: 'page',
        extra: 'extra',
        skip: 'skip',
    },
    Z = 'initial',
    J = 'complex',
    ee = 'simple',
    se = `${Y.open}-${ee}`,
    ae = `${Y.open}-${J}`,
    te = {
        toExtra: 'toExtra',
        toRewards: 'toRewards',
        toPage: 'toPage',
        toInitial: 'toInitial',
        toPreparation: 'toStart',
        toWaiting: 'toWaiting',
        toOpen: 'toOpen',
        toSkip: 'toSkip',
        setAnimationComplex: 'setAnimationComplex',
    },
    ne = s(
        a({
            id: 'animation',
            initial: Y.initial,
            context: { isAnimationComplex: !0 },
            on: { [te.setAnimationComplex]: { actions: t({ isAnimationComplex: (e, s) => s.isAnimationComplex }) } },
            states: {
                [Y.initial]: { on: { [te.toSkip]: Y.skip, [te.toPreparation]: Y.preparation, [te.toOpen]: Y.open } },
                [Y.skip]: { after: { 100: { target: Y.initial } } },
                [Y.preparation]: { on: { [te.toWaiting]: { target: Y.waiting } } },
                [Y.waiting]: { on: { [te.toOpen]: Y.open } },
                [Y.open]: {
                    initial: Y.initial,
                    states: {
                        [Z]: { after: { 100: [{ target: J, cond: (e) => e.isAnimationComplex }, { target: ee }] } },
                        [J]: { on: { [te.toRewards]: '#animation.rewards' } },
                        [ee]: { on: { [te.toRewards]: '#animation.rewards' } },
                    },
                },
                [Y.rewards]: { on: { [te.toPage]: Y.page, [te.toExtra]: Y.extra } },
                [Y.extra]: { on: { [te.toPage]: Y.page } },
                [Y.page]: { on: { [te.toInitial]: Y.initial } },
            },
        }),
    );
function ie(e, s = '-') {
    if ('string' == typeof e) return e;
    const a = Object.entries(e)[0];
    if (!a) return '';
    const [t, n] = a;
    return [t, ie(n, s)].join(s);
}
const oe = { opacity: 1, display: 'flex', config: { duration: 100, easing: m.easeInOutCubic } },
    re = { opacity: 0, config: { duration: 200, easing: m.easeOutCubic } },
    ce = { opacity: 1, immediate: !0 },
    le = (s, a) => {
        const [t, i] = n(() => ({ from: { opacity: 0, display: 'none' } })),
            [o, r] = n(() => ({ from: { opacity: 1 } }));
        return (
            e.useEffect(() => {
                switch (ie(s)) {
                    case Y.preparation:
                        r.start({ ...re, onRest: a });
                        break;
                    case Y.waiting:
                        i.start(oe);
                        break;
                    case se:
                    case ae:
                        r.start(ce);
                }
            }, [s]),
            e.useMemo(() => ({ loadingStyle: t, contentStyle: o }), [])
        );
    },
    de = (s, a, t) => {
        (e.useEffect(() => {
            t === Y.preparation && a
                ? ne.send({ type: te.toWaiting })
                : t !== Y.waiting || a || ne.send({ type: te.toOpen });
        }, [a, t]),
            e.useEffect(() => {
                s ? ne.send({ type: te.toSkip }) : ne.send({ type: te.toOpen });
            }, []));
    },
    ue = 'Background_c9c07c32',
    me = 'Background_image_935043b1',
    fe = 'Background_image__show_7f14a6c7',
    pe = 'Background_video_ef91df',
    ge = 'Background_video__show_7f14a6c7',
    _e = 'Background_video__hide_d60dcdcb',
    he = 'initial',
    xe = 'video',
    ve = 'image';
function be({ className: s, res: a, enabled: t, minimized: n, onPlay: c, onEnded: l }) {
    const [d, u] = e.useState(he),
        m = e.useRef(null),
        g = ie(i(ne, (e) => e.value)),
        _ = I(z),
        h = () => {
            (d !== ve && u(ve), ne.send({ type: te.toRewards }));
        };
    return (
        e.useEffect(() => {
            switch (g) {
                case Y.skip:
                    u(ve);
                    break;
                case ae:
                    (u(xe),
                        t &&
                            (() => {
                                const e = m.current;
                                (e?.play(), a.sound && p.sound(a.sound));
                            })());
                    break;
                case se:
                    (u(ve),
                        t &&
                            (() => {
                                const e = setTimeout(h, 400);
                            })());
            }
        }, [g]),
        X(m, t && d === xe, n),
        U(m),
        o.jsxs('div', {
            className: r(ue, s),
            children: [
                o.jsx('div', { className: r(me, d === ve && fe), style: { backgroundImage: `url(${a.image})` } }),
                a.video &&
                    o.jsx(f, {
                        ref: m,
                        className: r(pe, d === xe && ge, d === ve && _e),
                        style: _,
                        src: a.video,
                        onEnded: () => {
                            (h(), l());
                        },
                        onPlay: c,
                    }),
            ],
        })
    );
}
const ye = 'BackgroundSwitcher_61eb6080',
    Ne = 'BackgroundSwitcher_background_52e8d550',
    we = 'BackgroundSwitcher_background__show_121a5362',
    je = 'BackgroundSwitcher_background__hide_e139ddcb';
function ke({ minimized: e, activeType: s, res: a, onEnded: t, onPlay: n, className: i }) {
    return o.jsx('div', {
        className: r(ye, i),
        children: Object.keys(a).map((i) => {
            const c = s === i;
            return o.jsx(
                be,
                { className: r(Ne, c ? we : je), enabled: c, minimized: e, res: { ...a[i] }, onPlay: n, onEnded: t },
                i,
            );
        }),
    });
}
const Ce = 'Content_8ce13fac';
const Be = 'Waiting_fd38e6db',
    Re = 'Waiting_loader_e8fbd359';
const Se = 'Page_36a49111',
    Ee = e.forwardRef(function ({ children: e, className: s }, a) {
        return o.jsx('div', { ref: a, className: r(Se, s), children: e });
    });
((Ee.Content = function ({ children: e, className: s }) {
    return o.jsx('div', { className: r(Ce, s), children: e });
}),
    (Ee.Waiting = function ({ image: e, text: s, className: a }) {
        return o.jsx('div', { className: r(Be, a), children: o.jsx(A, { text: s, img: e, className: Re }) });
    }));
const Oe = 'Body_201f95c6';
const Pe = 'Footer_db988f04';
const ze = 'Overlay_36dda45e';
const $e = 'Content_header_cea4a4a2',
    Te = 'Content_b64ef737',
    Ie = 'Content_animationCheckbox_51f86111',
    Ae = 'Content_purchaseButton_c6f48f7b',
    Ve = 'Content_closeButton_8b152291';
function We({ children: e, className: s }) {
    return o.jsx('div', { className: r(Te, s), children: e });
}
((We.Overlay = function ({ children: e, className: s }) {
    return o.jsx('div', { className: r(ze, s), children: e });
}),
    (We.Body = function ({ children: e, className: s }) {
        return o.jsx('div', { className: r(Oe, s), children: e });
    }),
    (We.Footer = function ({ children: e, className: s }) {
        return o.jsx('div', { className: r(Pe, s), children: e });
    }),
    (We.Checkbox = ({ className: e, ...s }) => o.jsx(V, { ...s, className: r(Ie, e) })),
    (We.PurchaseButton = ({ className: e, ...s }) => o.jsx(L, { ...s, className: r(Ae, e) })),
    (We.Header = ({ className: e, ...s }) => o.jsx(H, { ...s, className: r($e, e) })),
    (We.CloseButton = ({ className: e, ...s }) => o.jsx(g, { ...s, className: r(Ve, e) })));
const Fe = {
    images: { iconEmpty: 'entry_point.lootboxEmpty' },
    texts: { footerPurchaseButtonText: 'common.getButton.upperCase', checkbox: 'common.footer.checkbox' },
    sounds: { purchaseHover: D.purchaseHover, purchaseClick: D.purchaseClick },
};
function Le({ eventName: e, boxCategory: s, controls: a, isShopVisible: t, isAnimationActive: n, className: r }) {
    const c = i(ne, (e) => e.value),
        l = $(Fe, e),
        { images: d, texts: u, sounds: m } = l;
    return o.jsxs(o.Fragment, {
        children: [
            o.jsx(We.CloseButton, { onClose: a.close, className: r }),
            _.isHigh() &&
                W(e, s) &&
                o.jsx(We.Checkbox, {
                    isActive: n,
                    onClick: function () {
                        a.toggleAnimationState(n);
                    },
                    text: u.checkbox,
                    className: r,
                }),
            t &&
                o.jsx(We.PurchaseButton, {
                    text: u.footerPurchaseButtonText,
                    image: d.iconEmpty,
                    sounds: m,
                    onClick: function () {
                        c === Y.initial && a.buyBoxes();
                    },
                    className: r,
                }),
        ],
    });
}
const De = 'Fade_66125f5f',
    He = 'Fade_fade__visible_ffd61402',
    Me = 'Fade_fade__instant_138f4be0',
    qe = 'initial',
    Ge = 'visible',
    Ke = 'instant';
function Qe() {
    const [s, a] = e.useState(qe),
        t = i(ne, (e) => e.value),
        n = l();
    return (
        e.useEffect(() => {
            switch (ie(t)) {
                case Y.preparation:
                    a(qe);
                    break;
                case Y.skip:
                    a(Ke);
                    break;
                case Y.page:
                    (a(Ge),
                        n.run(() => {
                            (ne.send({ type: te.toInitial }), n.clear());
                        }, 500));
            }
        }, [t]),
        r(De, s === Ge && He, s === Ke && Me)
    );
}
const Ue = {
    texts: {
        footerOpenNextButton: 'singleRewardView.footer.openNextButton',
        footerBackButton: 'awardViews.footer.backButton',
    },
};
function Xe({ actions: e, boxes: s, eventName: a, className: t }) {
    const n = h(() => e.openNext(), [e], 1100),
        r = i(ne, (e) => e.value),
        c = $(Ue, a),
        { texts: l } = c,
        d = x({ buttonSize: v.sizes.medium }, { large: { buttonSize: v.sizes.large } }),
        u = s.balance > 0;
    function m() {
        r === Y.initial && s.balance && n();
    }
    return (
        b(y.SPACE, m, !0),
        o.jsx(We.Footer, {
            className: t,
            children: o.jsxs(F, {
                eventName: a,
                children: [
                    s.guaranteedCounts > 0 && o.jsx(F.Guaranteed, { counts: s.guaranteedCounts, category: s.category }),
                    o.jsx(F.Controls, {
                        children: o.jsx(v, {
                            size: d.buttonSize,
                            onClick: u
                                ? m
                                : function () {
                                      r === Y.initial && e.goBack();
                                  },
                            children: u ? l.footerOpenNextButton : l.footerBackButton,
                        }),
                    }),
                    o.jsx(F.Quantity, { boxesCount: s.balance }),
                ],
            }),
        })
    );
}
const Ye = 'Content_ea4d5755';
const Ze = 'Description_aff3b3c1',
    Je = 'Description_vehicle_ecbf5aed',
    es = 'Description_vehicleType_df0e4747',
    ss = 'Description_vehicleType__elite_20e2cd35';
function as({ children: e, className: s }) {
    return o.jsx('div', { className: r(Ze, s), children: e });
}
as.Vehicle = ({ classNames: e, ...s }) =>
    o.jsx(M, { ...s, classNames: { base: Je, type: r(es, s.isElite && ss), ...e } });
const ts = 'Media_5cb01c57',
    ns = 'Media_video_c82b1173',
    is = 'Media_image_69c2ca4a',
    os = 'Media_base__showImage_40807d1';
const rs = 'Title_26a7859d';
const cs = 'Page_9fc130d7',
    ls = 'Page_close_d6f9b8ae',
    ds = 'Page_vehicleType_db2ef7f7',
    us = 'Page_vehicleType__elite_6f268e3f';
function ms({ children: e, className: s }) {
    return o.jsx('div', { className: r(cs, s), children: e });
}
function fs({ rareBonus: e, texts: s }) {
    return e
        ? o.jsx(o.Fragment, {
              children: (() => {
                  switch (e.name) {
                      case ys.vehicle:
                          return o.jsx(ms.Vehicle, {
                              vehicleName: e.label,
                              vehicleLvl: e.level,
                              isElite: e.isElite,
                              vehicleType: e.type,
                          });
                      case ys.customizations:
                          return o.jsx(N, {
                              text: s.rareOverlayStyleTitle,
                              params: { style: e.label },
                              upgradeLegacy: !0,
                          });
                      default:
                          return e.label ? e.label : (console.warn(`Unsupported bonus: ${e.name}`), null);
                  }
              })(),
          })
        : null;
}
((ms.Media = function ({ videoSrc: s, playerRef: a, onVideoEnded: t, image: n, className: i, forceImage: c = !0 }) {
    const [l, d] = e.useState(!1),
        u = I(z),
        m = c || l;
    return (
        U(a),
        o.jsxs('div', {
            className: r(ts, m && os, i),
            children: [
                o.jsx('div', { className: is, style: { backgroundImage: `url(${n})` } }),
                !c &&
                    o.jsx(f, {
                        style: u,
                        src: s,
                        ref: a,
                        autoplay: !0,
                        onEnded: function () {
                            (d(!0), t());
                        },
                        className: ns,
                    }),
            ],
        })
    );
}),
    (ms.Content = function ({ children: e, className: s }) {
        return o.jsx('div', { className: r(Ye, s), children: e });
    }),
    (ms.Title = function ({ children: e, className: s }) {
        return o.jsx('div', { className: r(rs, s), children: e });
    }),
    (ms.Description = as),
    (ms.Close = ({ className: e, ...s }) => o.jsx(g, { ...s, className: r(ls, e) })),
    (ms.Vehicle = ({ classNames: e, ...s }) => o.jsx(M, { ...s, classNames: { type: r(ds, s.isElite && us), ...e } })));
const ps = 'RewardOverlay_fbbf0c4d',
    gs = 'RewardOverlay_content_24ee1d81',
    _s = 'RewardOverlay_title_609b1176',
    hs = 'RewardOverlay_description_32bcddd0',
    xs = 'RewardOverlay_continueButton_10b5f10a',
    vs = 'RewardOverlay_close_b07c6e27',
    bs = 'RewardOverlay_media_1a313407',
    ys = { vehicle: 'vehicles', customizations: 'customizations' };
function Ns({ res: s, rareBonus: a, texts: t, minimized: n, controls: { onClose: i, onPlay: r, onEnded: c } }) {
    const [l, d] = e.useState(!1),
        [u, m] = e.useState(!1),
        [f, g] = e.useState(!1),
        h = e.useRef(null),
        x = () => {
            (m(!1), d(!0), c());
        };
    return (
        e.useEffect(() => {
            a && _.isHigh() && (p.sound(s.sound), m(!0), r());
        }, [a]),
        w(() => {
            l ? i() : _.isHigh() && (p.sound(s.stopSound), g(!0), x());
        }),
        X(h, u, n),
        e.useEffect(() => {
            if (_.isLow()) return j(() => d(!0), 300);
        }, []),
        o.jsxs(ms, {
            className: ps,
            children: [
                o.jsx(ms.Media, {
                    className: bs,
                    playerRef: h,
                    videoSrc: s.video,
                    onVideoEnded: x,
                    forceImage: _.isLow() || f,
                    image: s.image,
                }),
                l &&
                    o.jsxs(o.Fragment, {
                        children: [
                            o.jsxs(ms.Content, {
                                className: gs,
                                children: [
                                    o.jsx(ms.Title, { className: _s, children: o.jsx(fs, { rareBonus: a, texts: t }) }),
                                    a &&
                                        a.name === ys.customizations &&
                                        o.jsx(ms.Description, {
                                            className: hs,
                                            children: o.jsx(N, {
                                                text: t.rareOverlayStyleDescription,
                                                params: {
                                                    vehicleInfo: o.jsx(ms.Description.Vehicle, {
                                                        vehicleName: a.label,
                                                        vehicleLvl: a.level,
                                                        isElite: a.isElite,
                                                        vehicleType: a.type,
                                                    }),
                                                },
                                                upgradeLegacy: !0,
                                            }),
                                        }),
                                    o.jsx(v, { className: xs, onClick: i, children: t.rareOverlayButtonContinue }),
                                ],
                            }),
                            o.jsx(ms.Close, { className: vs, onClose: i }),
                        ],
                    }),
            ],
        })
    );
}
const ws = (s) =>
        e.useCallback(() => {
            const e = s.current;
            if (!e) return;
            const a = e.getCachedKeyframes(),
                t = a[a.length - 1];
            void 0 !== t && e.setCurrentTime(t);
        }, [s]),
    js = 'RewardVideo_7d4ca677',
    ks = 'RewardVideo_video_d1f193ab',
    Cs = 'RewardVideo_video__show_7ae3a7e8';
function Bs({ className: s, style: a = {}, src: t, sound: n, show: i, onEnded: c }) {
    const l = e.useRef(null);
    U(l);
    const d = ((s, a) => {
        const t = ws(s);
        return e.useCallback(() => {
            (t(), a?.());
        }, [t, a]);
    })(l, c);
    return (
        e.useEffect(() => {
            i && (l.current?.play(), p.sound(n));
        }, [i, n]),
        o.jsx('div', {
            className: r(js, s),
            style: a,
            children: o.jsx(k, { className: r(ks, i && Cs), src: t, ref: l, onEnded: d }),
        })
    );
}
const Rs = 'Count_6053cdeb';
const Ss = { base: 'Overlay_4754cdca', base__big: 'Overlay_base__big_354ebcfe', fadeIn: 'Overlay_fadeIn_3c7155a' };
const Es = 'Badge_5baf6f33';
function Os({ children: e, className: s = '' }) {
    return o.jsx('div', { className: r(Es, s), children: e });
}
((Os.Count = function ({ count: e, text: s, className: a = '', style: t = {} }) {
    return o.jsx('div', {
        className: r(Rs, a),
        style: t,
        children: o.jsx(C, { text: s, binding: { count: e }, formatWithBrackets: !0 }),
    });
}),
    (Os.Overlay = function ({ reward: e, size: s, className: a = '' }) {
        const { name: t, overlayType: n } = e;
        return o.jsx('div', {
            className: r(Ss.base, !T.includes(t) && Ss[`base__${s}`], a),
            style: { backgroundImage: `url(${E(s, t, n)})` },
        });
    }));
const Ps = 'Icon_2beee90a';
function zs({ icon: e, sizes: s, className: a = '' }) {
    return o.jsx('div', {
        className: r(Ps, a),
        style: { backgroundImage: `url(${e})`, width: s.width, height: s.height },
    });
}
const $s = 'Reward_2df31201',
    Ts = 'Reward_count_298a4419',
    Is = (e, s) => {
        const { name: a, isRent: t } = e;
        return a === O.vehicles && s === B.Big
            ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles' + (t ? '_rent' : '')
            : a === O.customizations && s === B.Big
              ? P({ ...e, id: 0 }, s)
              : P(e, s);
    },
    As = (e, s) => {
        if (s === B.Big)
            switch (e) {
                case O.tokens:
                case O.tmanToken:
                    return { right: '-7%', bottom: '-12%' };
                default:
                    return { right: '0', bottom: '-5rem' };
            }
        return { right: '13%', bottom: '1%' };
    };
function Vs({ reward: e, sizes: s, countText: a, className: t = '' }) {
    const { count: n, name: i, overlayType: c } = e,
        l =
            i === O.premiumPlus
                ? { height: s.premDaysHeight || s.rewardHeight, width: s.premDaysWidth || s.rewardWidth }
                : { height: s.rewardHeight, width: s.rewardWidth };
    return o.jsxs(Os, {
        className: r($s, t),
        children: [
            o.jsx(zs, { icon: Is(e, s.imageSize), sizes: l }),
            n > 1 &&
                o.jsx(Os.Count, {
                    count: e.count,
                    text: a,
                    className: Ts,
                    style: { fontSize: s.countHeight, ...As(i, s.imageSize) },
                }),
            c && o.jsx(Os.Overlay, { reward: e, size: s.imageSize }),
        ],
    });
}
export {
    ke as B,
    We as C,
    Le as E,
    Xe as F,
    zs as I,
    ae as O,
    Ee as P,
    Vs as R,
    Y as a,
    ne as b,
    G as c,
    te as d,
    q as e,
    Bs as f,
    Qe as g,
    Q as h,
    Ns as i,
    de as j,
    le as k,
    U as l,
    K as r,
    ie as s,
    ws as u,
};
