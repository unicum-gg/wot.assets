import { r as e, s as t, t as s, v as n, i as a, q as i, j as o, e as r } from './vendor.js';
import {
    ag as c,
    ah as l,
    ai as u,
    aj as d,
    a1 as m,
    a3 as f,
    t as p,
    T as g,
    C as x,
    B as h,
    f as _,
    F as v,
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
        const { steps: s, autoStart: n = !0 } = t,
            a = e.useRef(0),
            i = e.useRef(null),
            o = e.useRef('idle'),
            r = c(),
            m = l(),
            f = u(),
            p = e.useMemo(() => {
                const e = () => {
                    if (a.current >= s.length) return ((o.current = 'end'), void r.trigger('end'));
                    const t = s[a.current],
                        n = s[a.current - 1],
                        c = (n && !n.pauseNextSteps && n.duration) || 0,
                        l = (t.delay || 0) + c;
                    (m.run(() => {
                        if (!i.current)
                            return void console.error(
                                `${s[a.current].name} step don't know on what rootRef it should be set`,
                            );
                        const t = s[a.current];
                        if ((i.current.classList.add(t.name), r.trigger('change', t), t.pauseNextSteps))
                            return ((o.current = 'paused'), r.trigger('pause'), void a.current++);
                        (a.current++, e());
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
                            (a.current = 0));
                    },
                };
            }, [m, a, r, f, s]);
        return (
            d(() => {
                n && p.start();
            }),
            p
        );
    };
}
function M(e, t = '') {
    if (!t) return { video: '', image: '', sound: '', stopSound: '' };
    const s = `lootbox.events.${e}.rarityOverlay.${t}`,
        n = `gui.maps.icons.lootBoxSystem.events.${e}.rarityOverlay.${t}`,
        a = `gui_lb_video_appear_${e}_${t}`,
        i = `${a}_stop`;
    return { video: O(R.videos, s), image: O(R.images, n), sound: a, stopSound: i };
}
function H(e, t = '') {
    return '' !== M(e, t).video;
}
const D = (t) => {
        e.useEffect(() => {
            const e = t.current;
            return () => {
                e && (e.domRef.src = '');
            };
        }, [t]);
    },
    Q = (t, s = !0, n) => {
        e.useEffect(() => {
            const e = t.current;
            if (s && e) return n ? e.pause() : e.play();
        }, [n, t]);
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
            on: { [ee.setAnimationActive]: { actions: n({ isAnimationActive: (e, t) => t.isAnimationActive }) } },
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
    const [s, n] = Object.entries(e)[0];
    return [s, se(n, t)].join(t);
}
const ne = { opacity: 1, display: 'flex', config: { duration: 100, easing: m.easeInOutCubic } },
    ae = { opacity: 0, config: { duration: 200, easing: m.easeOutCubic } },
    ie = { opacity: 1, immediate: !0 },
    oe = (t, s) => {
        const [n, i] = a(() => ({ from: { opacity: 0, display: 'none' } })),
            [o, r] = a(() => ({ from: { opacity: 1 } }));
        return (
            e.useEffect(() => {
                switch (se(t)) {
                    case U.preparation:
                        r.start({ ...ae, onRest: s });
                        break;
                    case U.waiting:
                        i.start(ne);
                        break;
                    case K:
                    case Y:
                        r.start(ie);
                }
            }, [t]),
            e.useMemo(() => ({ loadingStyle: n, contentStyle: o }), [])
        );
    },
    re = (t, s, n) => {
        (e.useEffect(() => {
            n === U.preparation && s
                ? te.send({ type: ee.toWaiting })
                : n !== U.waiting || s || te.send({ type: ee.toOpen });
        }, [s, n]),
            e.useEffect(() => {
                t ? te.send({ type: ee.toSkip }) : te.send({ type: ee.toOpen });
            }, []));
    },
    ce = 'Background_c9c07c32',
    le = 'Background_image_935043b1',
    ue = 'Background_image__show_7f14a6c7',
    de = 'Background_video_ef91df',
    me = 'Background_video__show_7f14a6c7',
    fe = 'Background_video__hide_d60dcdcb',
    pe = 'initial',
    ge = 'video',
    xe = 'image';
function he({ className: t, res: s, enabled: n, minimized: a, onPlay: c, onEnded: l }) {
    const [u, d] = e.useState(pe),
        m = e.useRef(null),
        g = se(i(te, (e) => e.value)),
        x = $(T),
        h = () => {
            (u !== xe && d(xe), te.send({ type: ee.toRewards }));
        };
    return (
        e.useEffect(() => {
            switch (g) {
                case U.skip:
                    d(xe);
                    break;
                case Y:
                    (d(ge),
                        n &&
                            (() => {
                                const e = m.current;
                                (e?.play(), p.sound(s.sound));
                            })());
                    break;
                case K:
                    (d(xe),
                        n &&
                            (() => {
                                const e = setTimeout(h, 400);
                            })());
            }
        }, [g]),
        Q(m, n && u === ge, a),
        D(m),
        o.jsxs('div', {
            className: r(ce, t),
            children: [
                o.jsx('div', { className: r(le, u === xe && ue), style: { backgroundImage: `url(${s.image})` } }),
                o.jsx(f, {
                    ref: m,
                    className: r(de, u === ge && me, u === xe && fe),
                    style: x,
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
const _e = 'BackgroundSwitcher_61eb6080',
    ve = 'BackgroundSwitcher_background_52e8d550',
    ye = 'BackgroundSwitcher_background__show_121a5362',
    be = 'BackgroundSwitcher_background__hide_e139ddcb';
function Ne({ minimized: e, activeType: t, res: s, onEnded: n, onPlay: a, className: i }) {
    return o.jsx('div', {
        className: r(_e, i),
        children: Object.keys(s).map((i) => {
            const c = t === i;
            return o.jsx(
                he,
                { className: r(ve, c ? ye : be), enabled: c, minimized: e, res: { ...s[i] }, onPlay: a, onEnded: n },
                i,
            );
        }),
    });
}
const je = 'Content_8ce13fac';
const we = 'Waiting_fd38e6db',
    ke = 'Waiting_loader_e8fbd359';
const Ce = 'Page_36a49111',
    Be = e.forwardRef(function ({ children: e, className: t }, s) {
        return o.jsx('div', { ref: s, className: r(Ce, t), children: e });
    });
((Be.Content = function ({ children: e, className: t }) {
    return o.jsx('div', { className: r(je, t), children: e });
}),
    (Be.Waiting = function ({ image: e, text: t, className: s }) {
        return o.jsx('div', { className: r(we, s), children: o.jsx(P, { text: t, img: e, className: ke }) });
    }));
const Re = 'Body_201f95c6';
const Oe = 'Checkbox_979f5137';
const Se = 'CloseButton_22c46e56';
const Ee = 'Footer_db988f04';
const ze = 'Header_d0cdba36';
const Te = 'Overlay_36dda45e';
const Ae = 'Content_b64ef737';
function $e({ children: e, className: t }) {
    return o.jsx('div', { className: r(Ae, t), children: e });
}
(($e.Overlay = function ({ children: e, className: t }) {
    return o.jsx('div', { className: r(Te, t), children: e });
}),
    ($e.Header = function ({ children: e, className: t }) {
        return o.jsx('div', { className: r(ze, t), children: e });
    }),
    ($e.CloseButton = function ({ text: e, onClick: t, className: s }) {
        return o.jsx('div', {
            className: r(Se, s),
            children: o.jsx(g, { caption: e, type: 'close', side: 'right', onClick: t }),
        });
    }),
    ($e.Body = function ({ children: e, className: t }) {
        return o.jsx('div', { className: r(Re, t), children: e });
    }),
    ($e.Footer = function ({ children: e, className: t }) {
        return o.jsx('div', { className: r(Ee, t), children: e });
    }),
    ($e.Checkbox = function ({ isActive: e, onClick: t, text: s, size: n, className: a }) {
        return o.jsx(I, { isActive: e, onClick: t, className: r(Oe, a), text: s, size: n });
    }));
const Pe = 'Buttons_82277d53',
    Ie = 'Buttons_button_c941212c',
    Le = 'Buttons_button__first_1b371712';
const Ve = 'Quantity_ee16e2a';
const We = 'Controls_405d637b';
function qe({ children: e, className: t }) {
    return o.jsx('div', { className: r(We, t), children: e });
}
((qe.Buttons = function ({
    onOpenClick: e,
    onBackClick: t,
    boxesCount: s,
    texts: n,
    openingCount: a = 0,
    className: i,
}) {
    return o.jsxs('div', {
        className: r(Pe, i),
        children: [
            Boolean(s) &&
                o.jsx(x, {
                    type: _.main,
                    size: h.medium,
                    mixClass: r(Ie, Le),
                    onClick: e,
                    children: o.jsx(v, { text: n.footerOpenNextButton, binding: { count: Math.min(s, a) } }),
                }),
            o.jsx(x, { type: _.primary, size: h.medium, mixClass: Ie, onClick: t, children: n.footerBackButton }),
        ],
    });
}),
    (qe.Quantity = function ({ boxesCount: e, texts: t, className: s }) {
        return o.jsx('div', {
            className: r(Ve, s),
            children: o.jsx(L, { text: e ? t.quantityAvailableTitle : t.quantityNoBoxesTitle, boxesCount: e }),
        });
    }));
const Fe = 'Footer_4308958a',
    Me = 'Footer_buttons_b35b594e',
    He = 'Footer_quantity_78248d31',
    De = 'Footer_purchase_7e6b81d6';
function Qe({ actions: e, boxesCount: t, texts: s, images: n, sounds: a, openingCount: r = 0, isShopVisible: c }) {
    const l = y(() => e.openNext(), [e], 1100),
        u = i(te, (e) => e.value),
        d = () => {
            u === U.initial && t && l();
        };
    return (
        b(N.SPACE, d, !0),
        o.jsxs(qe, {
            className: Fe,
            children: [
                o.jsx(qe.Buttons, {
                    boxesCount: t,
                    onOpenClick: d,
                    onBackClick: () => {
                        u === U.initial && e.goBack();
                    },
                    texts: { footerOpenNextButton: s.footerOpenNextButton, footerBackButton: s.footerBackButton },
                    openingCount: r,
                    className: Me,
                }),
                o.jsx(qe.Quantity, {
                    className: He,
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
                        image: n.iconEmpty,
                        sounds: a,
                        className: De,
                        onClick: () => {
                            u === U.initial && e.buyBoxes();
                        },
                    }),
            ],
        })
    );
}
const Ue = 'Close_ef44eba3';
const Xe = 'Content_ea4d5755';
const Ze = 'Box_1c599cfe';
const Ge = 'Customization_9089d288',
    Je = 'Customization_styleTitle_7be89690',
    Ke = 'Customization_styleDescription_36891f79',
    Ye = 'Customization_vehicleInfoStyle_db26eef3',
    et = 'Customization_vehicleTypeStyle_bb8b9045';
const tt = 'Vehicle_c03ad304',
    st = 'Vehicle_vehicleInfo_6e425a48',
    nt = 'Vehicle_vehicleType_dd95ec68';
const at = 'Media_5cb01c57',
    it = 'Media_video_40807d1',
    ot = 'Media_image_a3b21141';
const rt = 'Title_1f51204b';
const ct = 'Page_9fc130d7';
function lt({ children: e, className: t }) {
    return o.jsx('div', { className: r(ct, t), children: e });
}
((lt.Media = function ({ videoSrc: e, playerRef: t, onVideoEnded: s, image: n, className: a, forceImage: i = !0 }) {
    const c = $(T);
    return (
        D(t),
        o.jsx('div', {
            className: r(at, a),
            children: i
                ? o.jsx('div', { className: ot, style: { backgroundImage: `url(${n})` } })
                : o.jsx(f, { style: c, src: e, ref: t, autoplay: !0, onEnded: s, className: it }),
        })
    );
}),
    (lt.Close = function ({ onClose: e, text: t, className: s }) {
        return o.jsx('div', {
            className: r(Ue, s),
            children: o.jsx(g, { caption: t, type: 'close', side: 'right', onClick: e }),
        });
    }),
    (lt.Content = function ({ children: e, className: t }) {
        return o.jsx('div', { className: r(Xe, t), children: e });
    }),
    (lt.Title = function ({ text: e, className: t }) {
        return o.jsx('div', { className: r(rt, t), children: e });
    }),
    (lt.Vehicle = function ({ info: e, className: t }) {
        return o.jsx('div', {
            className: r(tt, t),
            children: o.jsx(W, {
                vehicleName: e.vehicleName,
                vehicleLvl: e.vehicleLvl,
                isElite: e.isElite,
                vehicleType: e.vehicleType,
                classNames: { base: st, type: nt },
            }),
        });
    }),
    (lt.Box = function ({ text: e, className: t }) {
        return o.jsx('div', { className: r(Ze, t), children: e });
    }),
    (lt.Customization = function ({ bonus: e, texts: t }) {
        return o.jsxs('div', {
            className: Ge,
            children: [
                o.jsx(j, { text: t.title, params: { style: e.label }, className: Je, upgradeLegacy: !0 }),
                o.jsx(j, {
                    text: t.description,
                    params: {
                        vehicleInfo: o.jsx(W, {
                            vehicleName: e.vehicle3DStyleName,
                            vehicleLvl: e.level,
                            isElite: e.isElite,
                            vehicleType: e.type,
                            classNames: { base: Ye, type: et },
                        }),
                    },
                    className: Ke,
                    upgradeLegacy: !0,
                }),
            ],
        });
    }));
const ut = 'Description_dc593933';
function dt({ rareBonus: e, texts: t }) {
    return e
        ? o.jsx('div', {
              className: ut,
              children: (() => {
                  switch (e.name) {
                      case 'vehicles':
                          return o.jsx(lt.Vehicle, {
                              info: {
                                  vehicleName: e.label,
                                  vehicleLvl: e.level,
                                  isElite: e.isElite,
                                  vehicleType: e.type,
                              },
                          });
                      case 'lootBox':
                          return o.jsx(lt.Box, { text: e.label });
                      case 'customizations':
                          return o.jsx(lt.Customization, {
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
const mt = 'RewardOverlay_fbbf0c4d',
    ft = 'RewardOverlay_content_24ee1d81',
    pt = 'RewardOverlay_title_4f6ab0a9',
    gt = 'RewardOverlay_continueButton_df861671',
    xt = 'RewardOverlay_close_b07c6e27',
    ht = 'RewardOverlay_media_1a313407';
function _t({ res: t, rareBonus: s, texts: n, minimized: a, controls: { onClose: i, onPlay: r, onEnded: c } }) {
    const [l, u] = e.useState(!1),
        [d, m] = e.useState(!1),
        [f, g] = e.useState(!1),
        v = e.useRef(null),
        y = () => {
            (m(!1), u(!0), c());
        };
    return (
        e.useEffect(() => {
            s && w.isHigh() && (p.sound(t.sound), m(!0), r());
        }, [s]),
        k(() => {
            l ? i() : w.isHigh() && (p.sound(t.stopSound), g(!0), y());
        }),
        Q(v, d, a),
        e.useEffect(() => {
            if (w.isLow()) return C(() => u(!0), 300);
        }, []),
        o.jsxs(lt, {
            className: mt,
            children: [
                o.jsx(lt.Media, {
                    className: ht,
                    playerRef: v,
                    videoSrc: t.video,
                    onVideoEnded: y,
                    forceImage: w.isLow() || f,
                    image: t.image,
                }),
                l &&
                    o.jsxs(o.Fragment, {
                        children: [
                            o.jsxs(lt.Content, {
                                className: ft,
                                children: [
                                    o.jsx(lt.Title, { className: pt, text: n.rareOverlayTitle }),
                                    o.jsx(dt, { rareBonus: s, texts: n }),
                                    o.jsx(x, {
                                        type: _.primary,
                                        size: h.medium,
                                        mixClass: gt,
                                        onClick: i,
                                        children: n.rareOverlayButtonContinue,
                                    }),
                                ],
                            }),
                            o.jsx(lt.Close, { className: xt, text: n.closeButton, onClose: i }),
                        ],
                    }),
            ],
        })
    );
}
const vt = 'RewardVideo_7d4ca677',
    yt = 'RewardVideo_video_d1f193ab',
    bt = 'RewardVideo_video__show_7ae3a7e8';
function Nt({ className: t, style: s = {}, src: n, sound: a, show: i, timer: c, onEnded: l }) {
    const u = e.useRef(null),
        d = e.useRef(!1);
    return (
        D(u),
        e.useEffect(() => {
            i && ((d.current = !1), u.current?.play(), p.sound(a));
        }, [i, a]),
        e.useEffect(() => {
            const e = u.current?.getDuration() || 0;
            u.current?.onChangeTime((t) => {
                if (d && !d.current) {
                    const s = t.currentTime;
                    if (i && e && s && e - s <= c.remainder) return ((d.current = !0), void c.next());
                }
            });
        }, [u.current, i]),
        o.jsx('div', {
            className: r(vt, t),
            style: s,
            children: o.jsx(f, { className: r(yt, i && bt), src: n, ref: u, onEnded: l }),
        })
    );
}
const jt = 'Count_1b4af16d';
const wt = { base: 'Overlay_4754cdca', base__big: 'Overlay_base__big_354ebcfe', fadeIn: 'Overlay_fadeIn_3c7155a' };
const kt = 'Badge_5baf6f33';
function Ct({ children: e, className: t = '' }) {
    return o.jsx('div', { className: r(kt, t), children: e });
}
((Ct.Count = function ({ count: e, text: t, className: s = '', style: n = {} }) {
    return o.jsx('div', {
        className: r(jt, s),
        style: n,
        children: o.jsx(v, { text: t, binding: { count: e }, formatWithBrackets: !0 }),
    });
}),
    (Ct.Overlay = function ({ reward: e, size: t, className: s = '' }) {
        const { name: n, overlayType: a } = e;
        return o.jsx('div', {
            className: r(wt.base, !A.includes(n) && wt[`base__${t}`], s),
            style: { backgroundImage: `url(${S(t, n, a)})` },
        });
    }));
const Bt = 'Icon_2beee90a';
function Rt({ icon: e, sizes: t, className: s = '' }) {
    return o.jsx('div', {
        className: r(Bt, s),
        style: { backgroundImage: `url(${e})`, width: t.width, height: t.height },
    });
}
const Ot = 'Reward_2df31201',
    St = 'Reward_count_298a4419',
    Et = (e, t) => {
        const { name: s, isRent: n } = e;
        return s === E.vehicles && t === B.Big
            ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles' + (n ? '_rent' : '')
            : s === E.customizations && t === B.Big
              ? z({ ...e, id: 0 }, t)
              : z(e, t);
    },
    zt = (e, t) => {
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
function Tt({ reward: e, sizes: t, countText: s, className: n = '' }) {
    const { count: a, name: i, overlayType: c } = e,
        l =
            i === E.premiumPlus
                ? { height: t.premDaysHeight || t.rewardHeight, width: t.premDaysWidth || t.rewardWidth }
                : { height: t.rewardHeight, width: t.rewardWidth };
    return o.jsxs(Ct, {
        className: r(Ot, n),
        children: [
            o.jsx(Rt, { icon: Et(e, t.imageSize), sizes: l }),
            a > 1 &&
                o.jsx(Ct.Count, {
                    count: e.count,
                    text: s,
                    className: St,
                    style: { fontSize: t.countHeight, ...zt(i, t.imageSize) },
                }),
            c && o.jsx(Ct.Overlay, { reward: e, size: t.imageSize }),
        ],
    });
}
export {
    Ne as B,
    $e as C,
    Qe as F,
    Rt as I,
    J as O,
    Be as P,
    Tt as R,
    U as a,
    te as b,
    F as c,
    ee as d,
    Nt as e,
    _t as f,
    re as g,
    H as h,
    oe as i,
    Y as j,
    D as k,
    M as r,
    se as s,
    q as u,
};
