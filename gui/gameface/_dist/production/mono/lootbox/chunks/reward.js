import { r as e, q as t, s, t as a, h as n, p as i, j as o, e as r } from './vendor.js';
import {
    ag as c,
    ah as l,
    ai as d,
    aj as u,
    a1 as m,
    a3 as f,
    n as p,
    T as g,
    C as _,
    B as h,
    f as v,
    F as x,
    Q as y,
    U as b,
    X as N,
    a as j,
    P as w,
    e as k,
    Z as C,
    I as B,
} from './lib.js';
import { a as O, o as S, r as E, g as z } from './getRewardImage.js';
import { R as T, b as A } from './resources.js';
import { u as $ } from './use_cover_size.js';
import { L as P, A as I, Q as L, P as V } from './quantity_title.js';
import { V as W } from './vehicle_info.js';
const q = (t) => {
    const s = e.useContext(t);
    if (null === s)
        throw new Error('useAnimationApi was called in component, which is not wrapped in MultipleAwardProvider');
    return s;
};
function F(t) {
    return () => {
        const { steps: s, autoStart: a = !0 } = t,
            n = e.useRef(0),
            i = e.useRef(null),
            o = e.useRef('idle'),
            r = c(),
            m = l(),
            f = d(),
            p = e.useMemo(() => {
                const e = () => {
                    if (n.current >= s.length) return ((o.current = 'end'), void r.trigger('end'));
                    const t = s[n.current],
                        a = s[n.current - 1],
                        c = (a && !a.pauseNextSteps && a.duration) || 0,
                        l = (t.delay || 0) + c;
                    (m.run(() => {
                        if (!i.current)
                            return void console.error(
                                `${s[n.current].name} step don't know on what rootRef it should be set`,
                            );
                        const t = s[n.current];
                        if ((i.current.classList.add(t.name), r.trigger('change', t), t.pauseNextSteps))
                            return ((o.current = 'paused'), r.trigger('pause'), void n.current++);
                        (n.current++, e());
                    }, l),
                        (o.current = 'running'));
                };
                return {
                    rootRef: i,
                    steps: s,
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
                                    s.forEach((e) => {
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
                        (s.forEach((e) => {
                            i.current
                                ? (i.current.classList.remove(e.name),
                                  i.current.classList.remove(`${e.name}__skip`),
                                  r.trigger('reset'))
                                : console.error(`${e} tried to be set, but rootRef was not received in api`);
                        }),
                            (n.current = 0));
                    },
                };
            }, [m, n, r, f, s]);
        return (
            u(() => {
                a && p.start();
            }),
            p
        );
    };
}
const M = (e, t = '') => {
        if (!t) return { video: '', image: '', sound: '', stopSound: '' };
        const s = `lootbox.events.${e}.rarityOverlay.${t}`,
            a = `gui.maps.icons.lootBoxSystem.events.${e}.rarityOverlay.${t}`,
            n = `gui_lb_video_appear_${e}_${t}`,
            i = `${n}_stop`;
        return { video: O(R.videos, s), image: O(R.images, a), sound: n, stopSound: i };
    },
    H = (e, t = '') => '' !== M(e, t).video,
    D = (t) => {
        e.useEffect(() => {
            const e = t.current;
            return () => {
                e && (e.domRef.src = '');
            };
        }, [t]);
    },
    Q = (t, s = !0, a) => {
        e.useEffect(() => {
            const e = t.current;
            if (s && e) return a ? e.pause() : e.play();
        }, [a, t]);
    },
    U = {
        initial: 'initial',
        waiting: 'waiting',
        preparation: 'preparation',
        open: 'open',
        rewards: 'rewards',
        page: 'page',
        extra: 'extra',
        skip: 'skip',
    },
    X = 'initial',
    Z = 'complex',
    G = 'simple',
    J = `${U.open}-${X}`,
    K = `${U.open}-${G}`,
    Y = `${U.open}-${Z}`,
    ee = {
        toExtra: 'toExtra',
        toRewards: 'toRewards',
        toPage: 'toPage',
        toInitial: 'toInitial',
        toPreparation: 'toStart',
        toWaiting: 'toWaiting',
        toOpen: 'toOpen',
        toSkip: 'toSkip',
        setAnimationActive: 'setAnimationActive',
    },
    te = t(
        s({
            id: 'animation',
            initial: U.initial,
            context: { isAnimationActive: !0 },
            on: { [ee.setAnimationActive]: { actions: a({ isAnimationActive: (e, t) => t.isAnimationActive }) } },
            states: {
                [U.initial]: { on: { [ee.toSkip]: U.skip, [ee.toPreparation]: U.preparation, [ee.toOpen]: U.open } },
                [U.skip]: { after: { 100: { target: U.initial } } },
                [U.preparation]: { on: { [ee.toWaiting]: { target: U.waiting } } },
                [U.waiting]: { on: { [ee.toOpen]: U.open } },
                [U.open]: {
                    initial: U.initial,
                    states: {
                        [X]: { after: { 100: [{ target: Z, cond: (e) => e.isAnimationActive }, { target: G }] } },
                        [Z]: { on: { [ee.toRewards]: '#animation.rewards' } },
                        [G]: { on: { [ee.toRewards]: '#animation.rewards' } },
                    },
                },
                [U.rewards]: { on: { [ee.toPage]: U.page, [ee.toExtra]: U.extra } },
                [U.extra]: { on: { [ee.toPage]: U.page } },
                [U.page]: { on: { [ee.toInitial]: U.initial } },
            },
        }),
    );
function se(e, t = '-') {
    if ('string' == typeof e) return e;
    const [s, a] = Object.entries(e)[0];
    return [s, se(a, t)].join(t);
}
const ae = { opacity: 1, display: 'flex', config: { duration: 100, easing: m.easeInOutCubic } },
    ne = { opacity: 0, config: { duration: 200, easing: m.easeOutCubic } },
    ie = { opacity: 1, immediate: !0 },
    oe = (t, s) => {
        const [a, i] = n(() => ({ from: { opacity: 0, display: 'none' } })),
            [o, r] = n(() => ({ from: { opacity: 1 } }));
        return (
            e.useEffect(() => {
                switch (se(t)) {
                    case U.preparation:
                        r.start({ ...ne, onRest: s });
                        break;
                    case U.waiting:
                        i.start(ae);
                        break;
                    case K:
                    case Y:
                        r.start(ie);
                }
            }, [t]),
            e.useMemo(() => ({ loadingStyle: a, contentStyle: o }), [])
        );
    },
    re = (t, s, a) => {
        (e.useEffect(() => {
            a === U.preparation && s
                ? te.send({ type: ee.toWaiting })
                : a !== U.waiting || s || te.send({ type: ee.toOpen });
        }, [s, a]),
            e.useEffect(() => {
                t ? te.send({ type: ee.toSkip }) : te.send({ type: ee.toOpen });
            }, []));
    },
    ce = {
        base: 'Background_c9c07c32',
        image: 'Background_image_935043b1',
        image__show: 'Background_image__show_7f14a6c7',
        video: 'Background_video_ef91df',
        video__show: 'Background_video__show_7f14a6c7',
        video__hide: 'Background_video__hide_d60dcdcb',
    },
    le = { initial: 'initial', video: 'video', image: 'image' };
function de({ className: t, res: s, enabled: a, minimized: n, onPlay: c, onEnded: l }) {
    const [d, u] = e.useState(le.initial),
        m = e.useRef(null),
        g = se(i(te, (e) => e.value)),
        _ = $(T),
        h = () => {
            (d !== le.image && u(le.image), te.send({ type: ee.toRewards }));
        };
    return (
        e.useEffect(() => {
            switch (g) {
                case U.skip:
                    u(le.image);
                    break;
                case Y:
                    (u(le.video),
                        a &&
                            (() => {
                                const e = m.current;
                                (null == e || e.play(), p.sound(s.sound));
                            })());
                    break;
                case K:
                    (u(le.image),
                        a &&
                            (() => {
                                const e = setTimeout(h, 400);
                            })());
            }
        }, [g]),
        Q(m, a && d === le.video, n),
        D(m),
        o.jsxs('div', {
            className: r(ce.base, t),
            children: [
                o.jsx('div', {
                    className: r(ce.image, d === le.image && ce.image__show),
                    style: { backgroundImage: `url(${s.image})` },
                }),
                o.jsx(f, {
                    ref: m,
                    className: r(ce.video, d === le.video && ce.video__show, d === le.image && ce.video__hide),
                    style: _,
                    src: s.video,
                    onEnded: () => {
                        (h(), l());
                    },
                    onPlay: c,
                }),
            ],
        })
    );
}
const ue = 'BackgroundSwitcher_61eb6080',
    me = 'BackgroundSwitcher_background_52e8d550',
    fe = 'BackgroundSwitcher_background__show_121a5362',
    pe = 'BackgroundSwitcher_background__hide_e139ddcb';
function ge({ minimized: e, activeType: t, res: s, onEnded: a, onPlay: n, className: i }) {
    return o.jsx('div', {
        className: r(ue, i),
        children: Object.keys(s).map((i) => {
            const c = t === i;
            return o.jsx(
                de,
                { className: r(me, c ? fe : pe), enabled: c, minimized: e, res: { ...s[i] }, onPlay: n, onEnded: a },
                i,
            );
        }),
    });
}
const _e = 'Content_8ce13fac';
const he = 'Waiting_fd38e6db',
    ve = 'Waiting_loader_e8fbd359';
const xe = 'Page_36a49111',
    ye = e.forwardRef(function ({ children: e, className: t }, s) {
        return o.jsx('div', { ref: s, className: r(xe, t), children: e });
    });
((ye.Content = function ({ children: e, className: t }) {
    return o.jsx('div', { className: r(_e, t), children: e });
}),
    (ye.Waiting = function ({ image: e, text: t, className: s }) {
        return o.jsx('div', { className: r(he, s), children: o.jsx(P, { text: t, img: e, className: ve }) });
    }));
const be = 'Body_201f95c6';
const Ne = 'Checkbox_979f5137';
const je = 'CloseButton_6aed9432';
const we = 'Footer_db988f04';
const ke = 'Header_d0cdba36';
const Ce = 'Overlay_36dda45e';
const Be = 'Content_b64ef737';
function Re({ children: e, className: t }) {
    return o.jsx('div', { className: r(Be, t), children: e });
}
((Re.Overlay = function ({ children: e, className: t }) {
    return o.jsx('div', { className: r(Ce, t), children: e });
}),
    (Re.Header = function ({ children: e, className: t }) {
        return o.jsx('div', { className: r(ke, t), children: e });
    }),
    (Re.CloseButton = function ({ text: e, onClick: t, className: s }) {
        return o.jsx('div', {
            className: r(je, s),
            children: o.jsx(g, { caption: e, type: 'close', side: 'right', onClick: t }),
        });
    }),
    (Re.Body = function ({ children: e, className: t }) {
        return o.jsx('div', { className: r(be, t), children: e });
    }),
    (Re.Footer = function ({ children: e, className: t }) {
        return o.jsx('div', { className: r(we, t), children: e });
    }),
    (Re.Checkbox = function ({ isActive: e, onClick: t, text: s, size: a, className: n }) {
        return o.jsx(I, { isActive: e, onClick: t, className: r(Ne, n), text: s, size: a });
    }));
const Oe = 'Buttons_82277d53',
    Se = 'Buttons_button_c941212c',
    Ee = 'Buttons_button__first_1b371712';
const ze = 'Quantity_ee16e2a';
const Te = { base: 'Controls_405d637b' };
function Ae({ children: e, className: t }) {
    return o.jsx('div', { className: r(Te.base, t), children: e });
}
((Ae.Buttons = function ({
    onOpenClick: e,
    onBackClick: t,
    boxesCount: s,
    texts: a,
    openingCount: n = 0,
    className: i,
}) {
    return o.jsxs('div', {
        className: r(Oe, i),
        children: [
            Boolean(s) &&
                o.jsx(_, {
                    type: v.main,
                    size: h.medium,
                    mixClass: r(Se, Ee),
                    onClick: e,
                    children: o.jsx(x, { text: a.footerOpenNextButton, binding: { count: Math.min(s, n) } }),
                }),
            o.jsx(_, { type: v.primary, size: h.medium, mixClass: Se, onClick: t, children: a.footerBackButton }),
        ],
    });
}),
    (Ae.Quantity = function ({ boxesCount: e, texts: t, className: s }) {
        return o.jsx('div', {
            className: r(ze, s),
            children: o.jsx(L, { text: e ? t.quantityAvailableTitle : t.quantityNoBoxesTitle, boxesCount: e }),
        });
    }));
const $e = 'Footer_4308958a',
    Pe = 'Footer_buttons_b35b594e',
    Ie = 'Footer_quantity_78248d31',
    Le = 'Footer_purchase_7e6b81d6';
function Ve({ actions: e, boxesCount: t, texts: s, images: a, sounds: n, openingCount: r = 0, isShopVisible: c }) {
    const l = y(() => e.openNext(), [e], 1100),
        d = i(te, (e) => e.value),
        u = () => {
            d === U.initial && t && l();
        };
    return (
        b(N.SPACE, u, !0),
        o.jsxs(Ae, {
            className: $e,
            children: [
                o.jsx(Ae.Buttons, {
                    boxesCount: t,
                    onOpenClick: u,
                    onBackClick: () => {
                        d === U.initial && e.goBack();
                    },
                    texts: { footerOpenNextButton: s.footerOpenNextButton, footerBackButton: s.footerBackButton },
                    openingCount: r,
                    className: Pe,
                }),
                o.jsx(Ae.Quantity, {
                    className: Ie,
                    boxesCount: t,
                    texts: {
                        quantityAvailableTitle: s.quantityAvailableTitle,
                        quantityNoBoxesTitle: s.quantityNoBoxesTitle,
                    },
                }),
                c &&
                    0 === t &&
                    o.jsx(V, {
                        text: s.footerPurchaseButtonText,
                        image: a.iconEmpty,
                        sounds: n,
                        className: Le,
                        onClick: () => {
                            d === U.initial && e.buyBoxes();
                        },
                    }),
            ],
        })
    );
}
const We = 'Close_64793949';
const qe = 'Content_ea4d5755';
const Fe = 'Box_1c599cfe';
const Me = 'Customization_9089d288',
    He = 'Customization_styleTitle_7be89690',
    De = 'Customization_styleDescription_36891f79',
    Qe = 'Customization_vehicleInfoStyle_db26eef3',
    Ue = 'Customization_vehicleTypeStyle_bb8b9045';
const Xe = 'Vehicle_c03ad304',
    Ze = 'Vehicle_vehicleInfo_6e425a48',
    Ge = 'Vehicle_vehicleType_dd95ec68';
const Je = 'Media_5cb01c57',
    Ke = 'Media_video_40807d1',
    Ye = 'Media_image_a3b21141';
const et = 'Title_1f51204b';
const tt = { base: 'Page_9fc130d7' };
function st({ children: e, className: t }) {
    return o.jsx('div', { className: r(tt.base, t), children: e });
}
((st.Media = function ({ videoSrc: e, playerRef: t, onVideoEnded: s, image: a, className: n, forceImage: i = !0 }) {
    const c = $(T);
    return (
        D(t),
        o.jsx('div', {
            className: r(Je, n),
            children: i
                ? o.jsx('div', { className: Ye, style: { backgroundImage: `url(${a})` } })
                : o.jsx(f, { style: c, src: e, ref: t, autoplay: !0, onEnded: s, className: Ke }),
        })
    );
}),
    (st.Close = function ({ onClose: e, text: t, className: s }) {
        return o.jsx('div', {
            className: r(We, s),
            children: o.jsx(g, { caption: t, type: 'close', side: 'right', onClick: e }),
        });
    }),
    (st.Content = function ({ children: e, className: t }) {
        return o.jsx('div', { className: r(qe, t), children: e });
    }),
    (st.Title = function ({ text: e, className: t }) {
        return o.jsx('div', { className: r(et, t), children: e });
    }),
    (st.Vehicle = function ({ info: e, className: t }) {
        return o.jsx('div', {
            className: r(Xe, t),
            children: o.jsx(W, {
                vehicleName: e.vehicleName,
                vehicleLvl: e.vehicleLvl,
                isElite: e.isElite,
                vehicleType: e.vehicleType,
                classNames: { base: Ze, type: Ge },
            }),
        });
    }),
    (st.Box = function ({ text: e, className: t }) {
        return o.jsx('div', { className: r(Fe, t), children: e });
    }),
    (st.Customization = function ({ bonus: e, texts: t }) {
        return o.jsxs('div', {
            className: Me,
            children: [
                o.jsx(j, { text: t.title, params: { style: e.label }, className: He, upgradeLegacy: !0 }),
                o.jsx(j, {
                    text: t.description,
                    params: {
                        vehicleInfo: o.jsx(W, {
                            vehicleName: e.vehicle3DStyleName,
                            vehicleLvl: e.level,
                            isElite: e.isElite,
                            vehicleType: e.type,
                            classNames: { base: Qe, type: Ue },
                        }),
                    },
                    className: De,
                    upgradeLegacy: !0,
                }),
            ],
        });
    }));
const at = { base: 'Description_dc593933' };
function nt({ rareBonus: e, texts: t }) {
    return e
        ? o.jsx('div', {
              className: at.base,
              children: (() => {
                  switch (e.name) {
                      case 'vehicles':
                          return o.jsx(st.Vehicle, {
                              info: {
                                  vehicleName: e.label,
                                  vehicleLvl: e.level,
                                  isElite: e.isElite,
                                  vehicleType: e.type,
                              },
                          });
                      case 'lootBox':
                          return o.jsx(st.Box, { text: e.label });
                      case 'customizations':
                          return o.jsx(st.Customization, {
                              bonus: e,
                              texts: { title: t.rareOverlayStyleTitle, description: t.rareOverlayStyleDescription },
                          });
                      default:
                          return (console.warn(`Unsupported bonus: ${e.name}`), null);
                  }
              })(),
          })
        : null;
}
const it = 'RewardOverlay_fbbf0c4d',
    ot = 'RewardOverlay_content_24ee1d81',
    rt = 'RewardOverlay_title_4f6ab0a9',
    ct = 'RewardOverlay_continueButton_df861671',
    lt = 'RewardOverlay_close_b07c6e27',
    dt = 'RewardOverlay_media_1a313407';
function ut({ res: t, rareBonus: s, texts: a, minimized: n, controls: { onClose: i, onPlay: r, onEnded: c } }) {
    const [l, d] = e.useState(!1),
        [u, m] = e.useState(!1),
        [f, g] = e.useState(!1),
        x = e.useRef(null),
        y = () => {
            (m(!1), d(!0), c());
        };
    return (
        e.useEffect(() => {
            s && w.isHigh() && (p.sound(t.sound), m(!0), r());
        }, [s]),
        k(() => {
            l ? i() : w.isHigh() && (p.sound(t.stopSound), g(!0), y());
        }),
        Q(x, u, n),
        e.useEffect(() => {
            if (w.isLow()) return C(() => d(!0), 300);
        }, []),
        o.jsxs(st, {
            className: it,
            children: [
                o.jsx(st.Media, {
                    className: dt,
                    playerRef: x,
                    videoSrc: t.video,
                    onVideoEnded: y,
                    forceImage: w.isLow() || f,
                    image: t.image,
                }),
                l &&
                    o.jsxs(o.Fragment, {
                        children: [
                            o.jsxs(st.Content, {
                                className: ot,
                                children: [
                                    o.jsx(st.Title, { className: rt, text: a.rareOverlayTitle }),
                                    o.jsx(nt, { rareBonus: s, texts: a }),
                                    o.jsx(_, {
                                        type: v.primary,
                                        size: h.medium,
                                        mixClass: ct,
                                        onClick: i,
                                        children: a.rareOverlayButtonContinue,
                                    }),
                                ],
                            }),
                            o.jsx(st.Close, { className: lt, text: a.closeButton, onClose: i }),
                        ],
                    }),
            ],
        })
    );
}
const mt = 'RewardVideo_7d4ca677',
    ft = 'RewardVideo_video_d1f193ab',
    pt = 'RewardVideo_video__show_7ae3a7e8';
function gt({ className: t, style: s = {}, src: a, sound: n, show: i, timer: c, onEnded: l }) {
    const d = e.useRef(null),
        u = e.useRef(!1);
    return (
        D(d),
        e.useEffect(() => {
            var e;
            i && ((u.current = !1), null == (e = d.current) || e.play(), p.sound(n));
        }, [i, n]),
        e.useEffect(() => {
            var e, t;
            const s = (null == (e = d.current) ? void 0 : e.getDuration()) || 0;
            null == (t = d.current) ||
                t.onChangeTime((e) => {
                    if (u && !u.current) {
                        const t = e.currentTime;
                        if (i && s && t && s - t <= c.remainder) return ((u.current = !0), void c.next());
                    }
                });
        }, [d.current, i]),
        o.jsx('div', {
            className: r(mt, t),
            style: s,
            children: o.jsx(f, { className: r(ft, i && pt), src: a, ref: d, onEnded: l }),
        })
    );
}
const _t = 'Count_1b4af16d';
const ht = {
    root: 'Overlay_root_3c7155a',
    base: 'Overlay_4754cdca',
    base__big: 'Overlay_base__big_354ebcfe',
    fadeIn: 'Overlay_fadeIn_3c7155a',
};
const vt = { base: 'Badge_5baf6f33' };
function xt({ children: e, className: t = '' }) {
    return o.jsx('div', { className: r(vt.base, t), children: e });
}
((xt.Count = function ({ count: e, text: t, className: s = '', style: a = {} }) {
    return o.jsx('div', {
        className: r(_t, s),
        style: a,
        children: o.jsx(x, { text: t, binding: { count: e }, formatWithBrackets: !0 }),
    });
}),
    (xt.Overlay = function ({ reward: e, size: t, className: s = '' }) {
        const { name: a, overlayType: n } = e;
        return o.jsx('div', {
            className: r(ht.base, !A.includes(a) && ht[`base__${t}`], s),
            style: { backgroundImage: `url(${S(t, a, n)})` },
        });
    }));
const yt = { base: 'Icon_2beee90a' };
function bt({ icon: e, sizes: t, className: s = '' }) {
    return o.jsx('div', {
        className: r(yt.base, s),
        style: { backgroundImage: `url(${e})`, width: t.width, height: t.height },
    });
}
const Nt = 'Reward_2df31201',
    jt = 'Reward_count_298a4419',
    wt = (e, t) => {
        const { name: s, isRent: a } = e;
        return s === E.vehicles && t === B.Big
            ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles' + (a ? '_rent' : '')
            : s === E.customizations && t === B.Big
              ? z({ ...e, id: 0 }, t)
              : z(e, t);
    },
    kt = (e, t) => {
        if (t === B.Big)
            switch (e) {
                case E.tokens:
                case E.tmanToken:
                    return { right: '-7%', bottom: '-12%' };
                default:
                    return { right: '0', bottom: '-5rem' };
            }
        return { right: '13%', bottom: '1%' };
    };
function Ct({ reward: e, sizes: t, countText: s, className: a = '' }) {
    const { count: n, name: i, overlayType: c } = e,
        l =
            i === E.premiumPlus
                ? { height: t.premDaysHeight || t.rewardHeight, width: t.premDaysWidth || t.rewardWidth }
                : { height: t.rewardHeight, width: t.rewardWidth };
    return o.jsxs(xt, {
        className: r(Nt, a),
        children: [
            o.jsx(bt, { icon: wt(e, t.imageSize), sizes: l }),
            n > 1 &&
                o.jsx(xt.Count, {
                    count: e.count,
                    text: s,
                    className: jt,
                    style: { fontSize: t.countHeight, ...kt(i, t.imageSize) },
                }),
            c && o.jsx(xt.Overlay, { reward: e, size: t.imageSize }),
        ],
    });
}
export {
    ge as B,
    Re as C,
    Ve as F,
    bt as I,
    J as O,
    ye as P,
    Ct as R,
    U as a,
    te as b,
    F as c,
    ee as d,
    gt as e,
    ut as f,
    re as g,
    H as h,
    oe as i,
    Y as j,
    D as k,
    M as r,
    se as s,
    q as u,
};
