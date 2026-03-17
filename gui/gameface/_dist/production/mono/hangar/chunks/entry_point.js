import { j as e, f as s, d as t, o, g as n, v as a, r } from './vendor.js';
import {
    dA as i,
    dB as c,
    dC as l,
    r as d,
    dD as u,
    dE as m,
    i as p,
    a$ as b,
    S as _,
    V as h,
    aX as x,
} from './lib.js';
const g = {
        base: 'AlertIcon_7dcecd8f',
        shadow: 'AlertIcon_shadow_5a06c9a',
        base__big: 'AlertIcon_base__big_a8a4098d',
        icon: 'AlertIcon_icon_3bb8b40',
    },
    y = { big: 'big', small: 'small' };
function f({ icon: t, hasShadow: o = !1, size: n = y.small, className: a }) {
    return e.jsxs('div', {
        className: s(g.base, g[`base__${n}`], a),
        children: [
            o && e.jsx('div', { className: g.shadow }),
            e.jsx('div', { className: g.icon, style: { backgroundImage: `url(${t})` } }),
        ],
    });
}
var v = ((e) => ((e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic'), e))(v || {});
class I extends i {
    constructor(e, s) {
        (super(), (this.root = e), (this.prefix = s));
    }
    readOr(e, s, t = 'silent') {
        const o = c(this.prefix, e),
            n = (function (e, s) {
                const t = s.split('.');
                if (window.R && window.R.sounds) {
                    const s = t[t.length - 1];
                    if (!s) return;
                    const o = t.slice(0, -1).reduce((e, s) => {
                        if ('object' == typeof (null == e ? void 0 : e[s])) return e[s];
                    }, e);
                    if (!o) return;
                    return 'function' == typeof o[s] ? o[s]() : void 0;
                }
                throw new Error('R class with images field is not defined');
            })(this.root, o);
        return void 0 === n ? ('silent' !== t && l(`Resource not found: ${o}`, t), s()) : n;
    }
    readOrEmpty(e, s = 'warn') {
        return this.readOr(e, () => '', s);
    }
}
const N = 'lootbox_images',
    w = 'lootbox_sounds';
(d.register(N, t(() => new u(window.R.images)).singleton()),
    d.register(w, t(() => new I(window.R.sounds)).singleton()));
const E = d.resolve(N),
    $ = d.resolve('videos'),
    j = d.resolve(w),
    A = d.resolve('strings'),
    k = (e, s) => {
        switch (e) {
            case R.images:
                return E.readOrEmpty(s, 'silent');
            case R.videos:
                return $.readOrEmpty(s, 'silent');
            case R.sounds:
                return j.readOrEmpty(s, 'silent');
            case R.strings:
                return A.readOrEmpty(s, 'silent');
            default:
                return '';
        }
    };
var P = ((e) => (
        (e.EntryPoint = 'ENTRY_POINT'),
        (e.InfoPage = 'INFO_PAGE'),
        (e.Rewards = 'REWARDS'),
        (e.HasBoxesView = 'HAS_BOXES_VIEW'),
        e
    ))(P || {}),
    C = ((e) => (
        (e.Videos = 'videos'),
        (e.Images = 'images'),
        (e.Texts = 'texts'),
        (e.Sounds = 'sounds'),
        (e.DynamicVideos = 'dynamicVideos'),
        (e.DynamicImages = 'dynamicImages'),
        (e.DynamicTexts = 'dynamicTexts'),
        e
    ))(C || {});
(v.Rare, v.Epic);
const O = {
        ENTRY_POINT: {
            hover: { enabled: !1 },
            icon: { emptyIconBrightness: 0.4, boxesIconBrightness: 0.4 },
            shine: { opacity: 0.8 },
        },
        HAS_BOXES_VIEW: {
            hasIdle: !0,
            vignette: { isEnabled: !0, opacity: 0.4 },
            tabsGuaranteedCount: 10,
            accentCount: 5,
            hoverZone: { width: '38%', height: '39%', horizontalOffset: '30.8%', verticalOffset: '39%' },
            backgroundColor: '#111',
        },
        INFO_PAGE: { hasDescription: !0 },
        REWARDS: { accentCount: 5 },
    },
    B = {
        DEFAULT_CONFIG: O,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
            INFO_PAGE: { hasDescription: !0 },
        },
        lootBoxSystem: { ENTRY_POINT: { hover: { enabled: !0 } } },
    },
    T = (e, s) => {
        const t = B[m(e)];
        return t
            ? ((e, s) => {
                  const t = (e, s) => {
                      const o = { ...e };
                      for (const n in o)
                          s &&
                              n in s &&
                              ('object' == typeof o[n] ? (o[n] = t(o[n], s[n] ?? o[n])) : (o[n] = s[n] ?? o[n]));
                      return o;
                  };
                  return t(e, s);
              })(O[s], t[s])
            : O[s];
    },
    S = (e, s) => {
        let t = e;
        const o = s.split('.');
        for (let n = 0; n < o.length && t; n++) {
            const e = t.$dyn(o[n]);
            (e && 'object' != typeof e) || (t = e);
        }
        return t;
    },
    D = ({ type: e, filePath: s, eventName: t }, o = !1) => {
        const {
            parent: n,
            path: a,
            defaultPath: r,
        } = ((e, s, t) => {
            const o = 'gui.maps.icons.lootBoxSystem.customizable',
                n = 'lootbox.customizable';
            switch (e) {
                case C.Images:
                case C.DynamicImages:
                    return { parent: R.images, path: `${o}.${t}.${s}`, defaultPath: `${o}.default.${s}` };
                case C.Videos:
                case C.DynamicVideos:
                    return { parent: R.videos, path: `${n}.${t}.${s}`, defaultPath: `${n}.default.${s}` };
                case C.Texts:
                case C.DynamicTexts:
                    return { parent: R.strings, path: `lootbox_${t}.${s}`, defaultPath: `lootbox_system.${s}` };
                case C.Sounds:
                    return { parent: R.sounds, path: `${s}_${t}`, defaultPath: `${s}` };
                default:
                    return (
                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                        { parent: '', path: '', defaultPath: '' }
                    );
            }
        })(e, s, t);
        return n ? { eventResource: o ? S(n, a) : k(n, a), defaultResource: o ? S(n, r) : k(n, r) } : null;
    },
    V = (e, s, t) =>
        Object.keys(e).reduce(
            (o, n) => (
                (o[n] = (({ type: e, filePath: s, eventName: t }) => {
                    const o = D({ type: e, filePath: s, eventName: t });
                    if (!o || (!o.eventResource && !o.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${t} ${s})`), '');
                    const { eventResource: n, defaultResource: a } = o;
                    return n || a;
                })({ type: s, filePath: e[n], eventName: t })),
                o
            ),
            {},
        ),
    G = (e, s) =>
        Object.keys(e).reduce((t, o) => {
            const n = e[o];
            return n ? ((t[o] = V(n, o, s)), t) : t;
        }, {}),
    L = {
        images: {
            iconEmpty: 'entry_point.lootboxEmpty',
            iconGold: 'entry_point.lootboxGold',
            shine: 'entry_point.glow',
            alertBig: 'entry_point.alert_big',
            blinkMask: 'entry_point.blink_mask',
            hover: 'entry_point.hover',
        },
        videos: { glow: 'entryPoint.glow' },
        texts: { boxes: 'entryPoint.boxes', maxBoxesCount: 'entryPoint.maxBoxesCount', boxesCount: 'entryPoint.count' },
        sounds: { entryHover: 'gui_lb_icon_hover' },
    };
var M = ((e) => ((e.Boxes = 'boxes'), (e.Empty = 'empty'), e))(M || {});
const [F, H] = p()(
        ({ observableModel: e }) => {
            const s = e.object().get().eventName,
                t = { root: e.object(), style: o.box(T(s, P.EntryPoint)), resources: o.box(G(L, s)) },
                a = n(() => {
                    const { boxesCount: e } = t.root.get();
                    return e ? 'boxes' : 'empty';
                });
            return { ...t, computes: { getState: a } };
        },
        ({ externalModel: e }) => ({ showLanding: e.createCallbackNoArgs('onEntryClick') }),
    ),
    z = { base: 'Blink_a1f7a151', blink: 'Blink_c67ce1cf' };
function W({ mask: t, className: o = '' }) {
    return e.jsx('div', {
        className: s(z.base, o),
        style: { maskImage: `url(${t})` },
        children: e.jsx('div', { className: z.blink }),
    });
}
const X = { base: 'Counter_eca0cd46' },
    Y = 1e3;
function U({ count: t, text: o, maxText: n, className: a }) {
    return e.jsx('div', {
        className: s(X.base, a),
        children: t < Y ? e.jsx(b, { text: o, params: { count: t }, upgradeLegacy: !0 }) : n,
    });
}
const Z = { base: 'Icon_1d8e6c37' };
function q({ image: t, brightness: o, disabled: n, className: a, ...r }) {
    return e.jsx('div', {
        ...r,
        className: s(Z.base, a),
        style: { backgroundImage: `url(${t})`, filter: n ? 'brightness(.8) saturate(.5)' : `brightness(${o})` },
    });
}
const J = {
    base: 'App_bdab25ef',
    content: 'App_content_5f00019c',
    base__disabled: 'App_base__disabled_0',
    glow: 'App_glow_88da8e88',
    wrapper: 'App_wrapper_4cc053c3',
    text: 'App_text_d01ff07a',
    count: 'App_count_b19eaa9',
    blink: 'App_blink_80ba856f',
    hoverIdle: 'App_hoverIdle_76b3441d',
    'fade-in': 'App_fade-in_0',
    alert: 'App_alert_72caf50c',
    alert__empty: 'App_alert__empty_a1617876',
    alert__boxes: 'App_alert__boxes_b8fa93bc',
    icon: 'App_icon_879c8615',
};
const K = a(function () {
    const t = d.resolve('sounds'),
        o = d.resolve('aliases'),
        n = d.resolve('views'),
        a = _({
            resId: o.read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
            contentId: n.read((e) => e.mono.lootbox.tooltips.entry_point('resId')),
        }),
        [i, c] = r.useState(!1),
        { model: l, controls: u } = H(),
        { isEnabled: m, boxesCount: p, hasNew: b } = l.root.get(),
        g = l.computes.getState(),
        { images: v, videos: I, texts: N, sounds: w } = l.resources.get(),
        E = l.style.get(),
        R = i ? 1 + E.icon[`${g}IconBrightness`] : 1,
        $ = { opacity: E.shine.opacity, filter: `brightness(${R})` },
        j = r.useRef(null),
        A = E.hover.enabled && i && m,
        k = g === M.Empty ? v.iconEmpty : v.iconGold;
    return (
        r.useEffect(() => {
            const e = j.current;
            null == e ||
                e.onChangeTime((s) => {
                    s.duration &&
                        s.currentTime >= s.duration - 0.1 &&
                        (null == e || e.setCurrentTime(0), null == e || e.play());
                });
        }, [j, j.current]),
        e.jsx('div', {
            className: s(J.base, !m && J.base__disabled),
            children: e.jsx('div', {
                className: J.content,
                ...a,
                children: e.jsxs('div', {
                    className: J.wrapper,
                    onClick: function () {
                        (t.play('yes1'), u.showLanding());
                    },
                    onMouseEnter: function () {
                        (x.sound(w.entryHover), c(!0));
                    },
                    onMouseLeave: () => c(!1),
                    children: [
                        g === M.Boxes
                            ? e.jsxs(e.Fragment, {
                                  children: [
                                      m &&
                                          e.jsx(h, {
                                              loop: !0,
                                              autoplay: !0,
                                              className: J.glow,
                                              ref: j,
                                              src: I.glow,
                                              style: $,
                                          }),
                                      e.jsx(U, {
                                          className: J.count,
                                          maxText: N.maxBoxesCount,
                                          count: p,
                                          text: N.boxesCount,
                                      }),
                                      m && b && e.jsx(W, { mask: v.blinkMask, className: J.blink }),
                                      A &&
                                          e.jsx('div', {
                                              className: J.hoverIdle,
                                              style: { backgroundImage: `url(${v.hover})` },
                                          }),
                                  ],
                              })
                            : e.jsx('div', { className: J.text, children: N.boxes }),
                        e.jsx(q, { disabled: !m, image: k, brightness: R, className: J.icon }),
                        !m &&
                            e.jsx(f, {
                                className: s(J.alert, J[`alert__${g}`]),
                                hasShadow: !0,
                                icon: v.alertBig,
                                size: y.big,
                            }),
                    ],
                }),
            }),
        })
    );
});
function Q() {
    const s = d.resolve('aliases').read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
        t = r.useMemo(() => ({ rootId: s }), [s]);
    return e.jsx(F, { options: t, children: e.jsx(K, {}) });
}
export { Q as default };
