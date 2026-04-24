import { j as e, f as t, _ as s, F as o, $ as n, D as a, r } from './vendor.js';
import {
    dD as i,
    dE as c,
    dF as l,
    a8 as d,
    dG as u,
    dH as p,
    i as m,
    d as _,
    h as b,
    b7 as h,
    p as x,
} from './lib.js';
const g = {
        root: 'AlertIcon_root_a8a4098d',
        base: 'AlertIcon_7dcecd8f',
        shadow: 'AlertIcon_shadow_5a06c9a',
        base__big: 'AlertIcon_base__big_a8a4098d',
        icon: 'AlertIcon_icon_3bb8b40',
    },
    y = 'big',
    f = 'small';
function v({ icon: s, hasShadow: o = !1, size: n = f, className: a }) {
    return e.jsxs('div', {
        className: t(g.base, g[`base__${n}`], a),
        children: [
            o && e.jsx('div', { className: g.shadow }),
            e.jsx('div', { className: g.icon, style: { backgroundImage: `url(${s})` } }),
        ],
    });
}
var I = ((e) => ((e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic'), e))(I || {});
class N extends i {
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
                        if ('object' == typeof e?.[t]) return e[t];
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
const w = 'lootbox_images',
    E = 'lootbox_sounds';
(d.register(w, s(() => new u(window.R.images)).singleton()),
    d.register(E, s(() => new N(window.R.sounds)).singleton()));
const $ = d.resolve(w),
    j = d.resolve('videos'),
    A = d.resolve(E),
    P = d.resolve('strings'),
    k = (e, t) => {
        switch (e) {
            case R.images:
                return $.readOrEmpty(t, 'silent');
            case R.videos:
                return j.readOrEmpty(t, 'silent');
            case R.sounds:
                return A.readOrEmpty(t, 'silent');
            case R.strings:
                return P.readOrEmpty(t, 'silent');
            default:
                return '';
        }
    };
var O = ((e) => (
        (e.EntryPoint = 'ENTRY_POINT'),
        (e.InfoPage = 'INFO_PAGE'),
        (e.Rewards = 'REWARDS'),
        (e.HasBoxesView = 'HAS_BOXES_VIEW'),
        e
    ))(O || {}),
    B = ((e) => (
        (e.Videos = 'videos'),
        (e.Images = 'images'),
        (e.Texts = 'texts'),
        (e.Sounds = 'sounds'),
        (e.DynamicVideos = 'dynamicVideos'),
        (e.DynamicImages = 'dynamicImages'),
        (e.DynamicTexts = 'dynamicTexts'),
        e
    ))(B || {});
(I.Rare, I.Epic);
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
    S = {
        DEFAULT_CONFIG: C,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
            INFO_PAGE: { hasDescription: !0 },
        },
        lootBoxSystem: { ENTRY_POINT: { hover: { enabled: !0 } } },
    },
    T = (e, t) => {
        const s = S[p(e)];
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
    D = (e, t) => {
        let s = e;
        const o = t.split('.');
        for (let n = 0; n < o.length && s; n++) {
            const e = s.$dyn(o[n]);
            (e && 'object' != typeof e) || (s = e);
        }
        return s;
    },
    G = ({ type: e, filePath: t, eventName: s }, o = !1) => {
        const {
            parent: n,
            path: a,
            defaultPath: r,
        } = ((e, t, s) => {
            const o = 'gui.maps.icons.lootBoxSystem.customizable',
                n = 'lootbox.customizable';
            switch (e) {
                case B.Images:
                case B.DynamicImages:
                    return { parent: R.images, path: `${o}.${s}.${t}`, defaultPath: `${o}.default.${t}` };
                case B.Videos:
                case B.DynamicVideos:
                    return { parent: R.videos, path: `${n}.${s}.${t}`, defaultPath: `${n}.default.${t}` };
                case B.Texts:
                case B.DynamicTexts:
                    return { parent: R.strings, path: `lootbox_${s}.${t}`, defaultPath: `lootbox_system.${t}` };
                case B.Sounds:
                    return { parent: R.sounds, path: `${t}_${s}`, defaultPath: `${t}` };
                default:
                    return (
                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                        { parent: '', path: '', defaultPath: '' }
                    );
            }
        })(e, t, s);
        return n ? { eventResource: o ? D(n, a) : k(n, a), defaultResource: o ? D(n, r) : k(n, r) } : null;
    },
    V = (e, t, s) =>
        Object.keys(e).reduce(
            (o, n) => (
                (o[n] = (({ type: e, filePath: t, eventName: s }) => {
                    const o = G({ type: e, filePath: t, eventName: s });
                    if (!o || (!o.eventResource && !o.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${s} ${t})`), '');
                    const { eventResource: n, defaultResource: a } = o;
                    return n || a;
                })({ type: t, filePath: e[n], eventName: s })),
                o
            ),
            {},
        ),
    F = (e, t) =>
        Object.keys(e).reduce((s, o) => {
            const n = e[o];
            return n ? ((s[o] = V(n, o, t)), s) : s;
        }, {}),
    H = {
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
var L = ((e) => ((e.Boxes = 'boxes'), (e.Empty = 'empty'), e))(L || {});
const [M, z] = m()(
        ({ observableModel: e }) => {
            const t = e.object().get().eventName,
                s = { root: e.object(), style: o.box(T(t, O.EntryPoint)), resources: o.box(F(H, t)) },
                a = n(() => {
                    const { boxesCount: e } = s.root.get();
                    return e ? 'boxes' : 'empty';
                });
            return { ...s, computes: { getState: a } };
        },
        ({ externalModel: e }) => ({ showLanding: e.createCallbackNoArgs('onEntryClick') }),
    ),
    W = 'Blink_a1f7a151',
    Y = 'Blink_86c0f9b0';
function U({ mask: s, className: o = '' }) {
    return e.jsx('div', {
        className: t(W, o),
        style: { maskImage: `url(${s})` },
        children: e.jsx('div', { className: Y }),
    });
}
const X = 'Counter_eca0cd46';
function Z({ count: s, text: o, maxText: n, className: a }) {
    return e.jsx('div', {
        className: t(X, a),
        children: s < 1e3 ? e.jsx(_, { text: o, params: { count: s }, upgradeLegacy: !0 }) : n,
    });
}
const q = 'Icon_1d8e6c37';
function J({ image: s, brightness: o, disabled: n, className: a, ...r }) {
    return e.jsx('div', {
        ...r,
        className: t(q, a),
        style: { backgroundImage: `url(${s})`, filter: n ? 'brightness(.8) saturate(.5)' : `brightness(${o})` },
    });
}
const K = {
    root: 'App_root_0',
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
const Q = a(function () {
    const s = d.resolve('sounds'),
        o = d.resolve('aliases'),
        n = d.resolve('views'),
        a = b({
            resId: o.read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
            contentId: n.read((e) => e.mono.lootbox.tooltips.entry_point('resId')),
        }),
        [i, c] = r.useState(!1),
        { model: l, controls: u } = z(),
        { isEnabled: p, boxesCount: m, hasNew: _ } = l.root.get(),
        g = l.computes.getState(),
        { images: f, videos: I, texts: N, sounds: w } = l.resources.get(),
        E = l.style.get(),
        R = i ? 1 + E.icon[`${g}IconBrightness`] : 1,
        $ = { opacity: E.shine.opacity, filter: `brightness(${R})` },
        j = E.hover.enabled && i && p,
        A = g === L.Empty ? f.iconEmpty : f.iconGold;
    return e.jsx('div', {
        className: t(K.base, !p && K.base__disabled),
        children: e.jsx('div', {
            className: K.content,
            ...a,
            children: e.jsxs('div', {
                className: K.wrapper,
                onClick: function () {
                    (s.play('yes1'), u.showLanding());
                },
                onMouseEnter: function () {
                    (x.sound(w.entryHover), c(!0));
                },
                onMouseLeave: () => c(!1),
                children: [
                    g === L.Boxes
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  p && e.jsx(h, { loop: !0, autoplay: !0, className: K.glow, src: I.glow, style: $ }),
                                  e.jsx(Z, {
                                      className: K.count,
                                      maxText: N.maxBoxesCount,
                                      count: m,
                                      text: N.boxesCount,
                                  }),
                                  p && _ && e.jsx(U, { mask: f.blinkMask, className: K.blink }),
                                  j &&
                                      e.jsx('div', {
                                          className: K.hoverIdle,
                                          style: { backgroundImage: `url(${f.hover})` },
                                      }),
                              ],
                          })
                        : e.jsx('div', { className: K.text, children: N.boxes }),
                    e.jsx(J, { disabled: !p, image: A, brightness: R, className: K.icon }),
                    !p &&
                        e.jsx(v, { className: t(K.alert, K[`alert__${g}`]), hasShadow: !0, icon: f.alertBig, size: y }),
                ],
            }),
        }),
    });
});
function ee() {
    const t = d.resolve('aliases').read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
        s = r.useMemo(() => ({ rootId: t }), [t]);
    return e.jsx(M, { options: s, children: e.jsx(Q, {}) });
}
export { ee as default };
