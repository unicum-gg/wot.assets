import { j as e, f as t, d as s, o, g as n, B as a, r } from './vendor.js';
import {
    dn as i,
    dp as c,
    dq as l,
    o as d,
    dr as u,
    ds as p,
    i as m,
    c2 as b,
    aa as _,
    b$ as h,
    dt as x,
} from './lib.js';
const g = {
        root: 'AlertIcon_root_a8a4098d',
        'media-wrapper': 'AlertIcon_media-wrapper_a8a4098d',
        base: 'AlertIcon_7dcecd8f',
        shadow: 'AlertIcon_shadow_5a06c9a',
        base__big: 'AlertIcon_base__big_a8a4098d',
        icon: 'AlertIcon_icon_3bb8b40',
    },
    y = { big: 'big', small: 'small' };
function f({ icon: s, hasShadow: o = !1, size: n = y.small, className: a }) {
    return e.jsxs('div', {
        className: t(g.base, g[`base__${n}`], a),
        children: [
            o && e.jsx('div', { className: g.shadow }),
            e.jsx('div', { className: g.icon, style: { backgroundImage: `url(${s})` } }),
        ],
    });
}
var v = ((e) => ((e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic'), e))(v || {});
class w extends i {
    constructor(e, t) {
        (super(), (this.root = e), (this.prefix = t));
    }
    readOr(e, t, s = 'silent') {
        const o = c(this.prefix, e),
            n = (function (e, t) {
                const s = t.split('.');
                if (window.R && window.R.sounds) {
                    const t = s[s.length - 1];
                    if (!t) return;
                    const o = s.slice(0, -1).reduce((e, t) => {
                        if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                    }, e);
                    if (!o) return;
                    return 'function' == typeof o[t] ? o[t]() : void 0;
                }
                throw new Error('R class with images field is not defined');
            })(this.root, o);
        return void 0 === n ? ('silent' !== s && l(`Resource not found: ${o}`, s), t()) : n;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
}
const I = 'lootbox_images',
    N = 'lootbox_sounds';
(d.register(I, s(() => new u(window.R.images)).singleton()),
    d.register(N, s(() => new w(window.R.sounds)).singleton()));
const E = d.resolve(I),
    A = d.resolve('videos'),
    $ = d.resolve(N),
    j = d.resolve('strings'),
    k = (e, t) => {
        switch (e) {
            case R.images:
                return E.readOrEmpty(t, 'silent');
            case R.videos:
                return A.readOrEmpty(t, 'silent');
            case R.sounds:
                return $.readOrEmpty(t, 'silent');
            case R.strings:
                return j.readOrEmpty(t, 'silent');
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
    O = ((e) => (
        (e.Videos = 'videos'),
        (e.Images = 'images'),
        (e.Texts = 'texts'),
        (e.Sounds = 'sounds'),
        (e.DynamicVideos = 'dynamicVideos'),
        (e.DynamicImages = 'dynamicImages'),
        (e.DynamicTexts = 'dynamicTexts'),
        e
    ))(O || {});
(v.Rare, v.Epic);
const C = {
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
        DEFAULT_CONFIG: C,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
            INFO_PAGE: { hasDescription: !0 },
        },
        lootBoxSystem: { ENTRY_POINT: { hover: { enabled: !0 } } },
    },
    T = (e, t) => {
        const s = B[p(e)];
        return s
            ? ((e, t) => {
                  const s = (e, t) => {
                      const o = { ...e };
                      for (const n in o)
                          t &&
                              n in t &&
                              ('object' == typeof o[n] ? (o[n] = s(o[n], t[n] ?? o[n])) : (o[n] = t[n] ?? o[n]));
                      return o;
                  };
                  return s(e, t);
              })(C[t], s[t])
            : C[t];
    },
    S = (e, t) => {
        let s = e;
        const o = t.split('.');
        for (let n = 0; n < o.length && s; n++) {
            const e = s.$dyn(o[n]);
            (e && 'object' != typeof e) || (s = e);
        }
        return s;
    },
    D = ({ type: e, filePath: t, eventName: s }, o = !1) => {
        const {
            parent: n,
            path: a,
            defaultPath: r,
        } = ((e, t, s) => {
            const o = 'gui.maps.icons.lootBoxSystem.customizable',
                n = 'lootbox.customizable';
            switch (e) {
                case O.Images:
                case O.DynamicImages:
                    return { parent: R.images, path: `${o}.${s}.${t}`, defaultPath: `${o}.default.${t}` };
                case O.Videos:
                case O.DynamicVideos:
                    return { parent: R.videos, path: `${n}.${s}.${t}`, defaultPath: `${n}.default.${t}` };
                case O.Texts:
                case O.DynamicTexts:
                    return { parent: R.strings, path: `lootbox_${s}.${t}`, defaultPath: `lootbox_system.${t}` };
                case O.Sounds:
                    return { parent: R.sounds, path: `${t}_${s}`, defaultPath: `${t}` };
                default:
                    return (
                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                        { parent: '', path: '', defaultPath: '' }
                    );
            }
        })(e, t, s);
        return n ? { eventResource: o ? S(n, a) : k(n, a), defaultResource: o ? S(n, r) : k(n, r) } : null;
    },
    G = (e, t, s) =>
        Object.keys(e).reduce(
            (o, n) => (
                (o[n] = (({ type: e, filePath: t, eventName: s }) => {
                    const o = D({ type: e, filePath: t, eventName: s });
                    if (!o || (!o.eventResource && !o.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${s} ${t})`), '');
                    const { eventResource: n, defaultResource: a } = o;
                    return n || a;
                })({ type: t, filePath: e[n], eventName: s })),
                o
            ),
            {},
        ),
    V = (e, t) =>
        Object.keys(e).reduce((s, o) => {
            const n = e[o];
            return n ? ((s[o] = G(n, o, t)), s) : s;
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
const [F, H] = m()(
        ({ observableModel: e }) => {
            const t = e.object().get().eventName,
                s = { root: e.object(), style: o.box(T(t, P.EntryPoint)), resources: o.box(V(L, t)) },
                a = n(() => {
                    const { boxesCount: e } = s.root.get();
                    return e ? 'boxes' : 'empty';
                });
            return { ...s, computes: { getState: a } };
        },
        ({ externalModel: e }) => ({ showLanding: e.createCallbackNoArgs('onEntryClick') }),
    ),
    z = { base: 'Blink_a1f7a151', blink: 'Blink_c67ce1cf' };
function W({ mask: s, className: o = '' }) {
    return e.jsx('div', {
        className: t(z.base, o),
        style: { maskImage: `url(${s})` },
        children: e.jsx('div', { className: z.blink }),
    });
}
const Y = { base: 'Counter_eca0cd46' },
    U = 1e3;
function X({ count: s, text: o, maxText: n, className: a }) {
    return e.jsx('div', {
        className: t(Y.base, a),
        children: s < U ? e.jsx(b, { text: o, params: { count: s }, upgradeLegacy: !0 }) : n,
    });
}
const q = { base: 'Icon_1d8e6c37' };
function Z({ image: s, brightness: o, disabled: n, className: a, ...r }) {
    return e.jsx('div', {
        ...r,
        className: t(q.base, a),
        style: { backgroundImage: `url(${s})`, filter: n ? 'brightness(.8) saturate(.5)' : `brightness(${o})` },
    });
}
const J = {
    root: 'App_root_0',
    'media-wrapper': 'App_media-wrapper_0',
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
    const s = d.resolve('sounds'),
        o = d.resolve('aliases'),
        n = d.resolve('views'),
        a = _({
            resId: o.read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
            contentId: n.read((e) => e.mono.lootbox.tooltips.entry_point('resId')),
        }),
        [i, c] = r.useState(!1),
        { model: l, controls: u } = H(),
        { isEnabled: p, boxesCount: m, hasNew: b } = l.root.get(),
        g = l.computes.getState(),
        { images: v, videos: w, texts: I, sounds: N } = l.resources.get(),
        E = l.style.get(),
        R = i ? 1 + E.icon[`${g}IconBrightness`] : 1,
        A = { opacity: E.shine.opacity, filter: `brightness(${R})` },
        $ = r.useRef(null),
        j = E.hover.enabled && i && p,
        k = g === M.Empty ? v.iconEmpty : v.iconGold;
    return (
        r.useEffect(() => {
            const e = $.current;
            null == e ||
                e.onChangeTime((t) => {
                    t.duration &&
                        t.currentTime >= t.duration - 0.1 &&
                        (null == e || e.setCurrentTime(0), null == e || e.play());
                });
        }, [$, $.current]),
        e.jsx('div', {
            className: t(J.base, !p && J.base__disabled),
            children: e.jsx('div', {
                className: J.content,
                ...a,
                children: e.jsxs('div', {
                    className: J.wrapper,
                    onClick: function () {
                        (s.play('yes1'), u.showLanding());
                    },
                    onMouseEnter: function () {
                        (x.sound(N.entryHover), c(!0));
                    },
                    onMouseLeave: () => c(!1),
                    children: [
                        g === M.Boxes
                            ? e.jsxs(e.Fragment, {
                                  children: [
                                      p &&
                                          e.jsx(h, {
                                              loop: !0,
                                              autoplay: !0,
                                              className: J.glow,
                                              ref: $,
                                              src: w.glow,
                                              style: A,
                                          }),
                                      e.jsx(X, {
                                          className: J.count,
                                          maxText: I.maxBoxesCount,
                                          count: m,
                                          text: I.boxesCount,
                                      }),
                                      p && b && e.jsx(W, { mask: v.blinkMask, className: J.blink }),
                                      j &&
                                          e.jsx('div', {
                                              className: J.hoverIdle,
                                              style: { backgroundImage: `url(${v.hover})` },
                                          }),
                                  ],
                              })
                            : e.jsx('div', { className: J.text, children: I.boxes }),
                        e.jsx(Z, { disabled: !p, image: k, brightness: R, className: J.icon }),
                        !p &&
                            e.jsx(f, {
                                className: t(J.alert, J[`alert__${g}`]),
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
    const t = d.resolve('aliases').read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
        s = r.useMemo(() => ({ rootId: t }), [t]);
    return e.jsx(F, { options: s, children: e.jsx(K, {}) });
}
export { Q as default };
