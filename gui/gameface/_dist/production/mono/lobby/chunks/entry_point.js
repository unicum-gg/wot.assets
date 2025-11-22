import { j as e, f as t, d as s, o, g as n, F as a, r } from './vendor.js';
import { cR as i, cS as c, cT as d, o as l, cU as u, cV as m, i as p, bM as h, T as _, cW as x } from './lib.js';
const y = { base: 'AlertIcon_7dcecd8f', shadow: 'AlertIcon_shadow_daf8370', icon: 'AlertIcon_icon_35ce98b5' };
function b({ icon: s, hasShadow: o = !1, className: n }) {
    return e.jsxs('div', {
        className: t(y.base, n),
        children: [
            o && e.jsx('div', { className: y.shadow }),
            e.jsx('div', { className: y.icon, style: { backgroundImage: `url(${s})` } }),
        ],
    });
}
var g = ((e) => ((e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic'), e))(g || {});
class f extends i {
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
        return void 0 === n ? ('silent' !== s && d(`Resource not found: ${o}`, s), t()) : n;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
}
const v = 'lootbox_images',
    w = 'lootbox_sounds';
(l.register(v, s(() => new u(window.R.images)).singleton()),
    l.register(w, s(() => new f(window.R.sounds)).singleton()));
const N = l.resolve(v),
    E = l.resolve('videos'),
    I = l.resolve(w),
    A = l.resolve('strings'),
    j = (e, t) => {
        switch (e) {
            case R.images:
                return N.readOrEmpty(t, 'silent');
            case R.videos:
                return E.readOrEmpty(t, 'silent');
            case R.sounds:
                return I.readOrEmpty(t, 'silent');
            case R.strings:
                return A.readOrEmpty(t, 'silent');
            default:
                return '';
        }
    };
var $ = ((e) => (
        (e.EntryPoint = 'ENTRY_POINT'),
        (e.InfoPage = 'INFO_PAGE'),
        (e.Rewards = 'REWARDS'),
        (e.HasBoxesView = 'HAS_BOXES_VIEW'),
        e
    ))($ || {}),
    P = ((e) => (
        (e.Videos = 'videos'),
        (e.Images = 'images'),
        (e.Texts = 'texts'),
        (e.Sounds = 'sounds'),
        (e.DynamicVideos = 'dynamicVideos'),
        (e.DynamicImages = 'dynamicImages'),
        (e.DynamicTexts = 'dynamicTexts'),
        e
    ))(P || {});
(g.Rare, g.Epic);
const C = {
        ENTRY_POINT: {
            icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
            shine: { opacityCustom: 0.15, opacityCustomNewBox: 0.4, opacityDiff: 0.15, animationDuration: '40s' },
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
    O = {
        DEFAULT_CONFIG: C,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
            INFO_PAGE: { hasDescription: !0 },
        },
    },
    D = (e, t) => {
        const s = O[m(e)];
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
    T = ({ type: e, filePath: t, eventName: s }, o = !1) => {
        const {
            parent: n,
            path: a,
            defaultPath: r,
        } = ((e, t, s) => {
            const o = 'gui.maps.icons.lootBoxSystem.customizable',
                n = 'lootbox.customizable';
            switch (e) {
                case P.Images:
                case P.DynamicImages:
                    return { parent: R.images, path: `${o}.${s}.${t}`, defaultPath: `${o}.default.${t}` };
                case P.Videos:
                case P.DynamicVideos:
                    return { parent: R.videos, path: `${n}.${s}.${t}`, defaultPath: `${n}.default.${t}` };
                case P.Texts:
                case P.DynamicTexts:
                    return { parent: R.strings, path: `lootbox_${s}.${t}`, defaultPath: `lootbox_system.${t}` };
                case P.Sounds:
                    return { parent: R.sounds, path: `${t}_${s}`, defaultPath: `${t}` };
                default:
                    return (
                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                        { parent: '', path: '', defaultPath: '' }
                    );
            }
        })(e, t, s);
        return n ? { eventResource: o ? S(n, a) : j(n, a), defaultResource: o ? S(n, r) : j(n, r) } : null;
    },
    B = (e, t, s) =>
        Object.keys(e).reduce(
            (o, n) => (
                (o[n] = (({ type: e, filePath: t, eventName: s }) => {
                    const o = T({ type: e, filePath: t, eventName: s });
                    if (!o || (!o.eventResource && !o.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${s} ${t})`), '');
                    const { eventResource: n, defaultResource: a } = o;
                    return n || a;
                })({ type: t, filePath: e[n], eventName: s })),
                o
            ),
            {},
        ),
    k = (e, t) =>
        Object.keys(e).reduce((s, o) => {
            const n = e[o];
            return n ? ((s[o] = B(n, o, t)), s) : s;
        }, {}),
    V = {
        images: {
            iconEmpty: 'entry_point.lootboxEmpty',
            iconGold: 'entry_point.lootboxGold',
            shine: 'entry_point.glow',
            alert: 'entry_point.alert',
        },
        texts: { boxes: 'entryPoint.boxes', maxBoxesCount: 'entryPoint.maxBoxesCount', boxesCount: 'entryPoint.count' },
        sounds: { entryHover: 'gui_lb_icon_hover' },
    };
var G = ((e) => ((e.Boxes = 'boxes'), (e.Empty = 'empty'), e))(G || {});
const [F, L] = p()(
        ({ observableModel: e }) => {
            const t = e.object().get().eventName,
                s = { root: e.object(), style: o.box(D(t, $.EntryPoint)), resources: o.box(k(V, t)) },
                a = n(() => {
                    const { boxesCount: e } = s.root.get();
                    return e ? 'boxes' : 'empty';
                });
            return { ...s, computes: { getState: a } };
        },
        ({ externalModel: e }) => ({ showLanding: e.createCallbackNoArgs('onEntryClick') }),
    ),
    H = { base: 'Counter_d19ba807' },
    M = 1e3;
function W({ count: s, text: o, maxText: n, className: a }) {
    return e.jsx('div', {
        className: t(H.base, a),
        children: s < M ? e.jsx(h, { text: o, params: { count: s }, upgradeLegacy: !0 }) : n,
    });
}
const U = { base: 'Icon_1d8e6c37' };
function z({ image: s, brightness: o, disabled: n, className: a, ...r }) {
    return e.jsx('div', {
        ...r,
        className: t(U.base, a),
        style: { backgroundImage: `url(${s})`, filter: n ? 'brightness(.8) saturate(.5)' : `brightness(${o})` },
    });
}
const X = {
    base: 'Shine_91d96348',
    shineAnimation: 'Shine_shineAnimation_ead5930d',
    shineAnimation__reverse: 'Shine_shineAnimation__reverse_de32f2ac',
};
function Y({ image: s, style: o }) {
    return e.jsxs('div', {
        className: X.base,
        style: { opacity: o.opacity },
        children: [
            e.jsx('div', {
                className: X.shineAnimation,
                style: { backgroundImage: `url(${s})`, animationDuration: o.animationDuration },
            }),
            e.jsx('div', {
                className: t(X.shineAnimation, X.shineAnimation__reverse),
                style: { backgroundImage: `url(${s})`, animationDuration: o.animationDuration },
            }),
        ],
    });
}
const Z = {
    root: 'App_root_0',
    'media-wrapper': 'App_media-wrapper_0',
    base: 'App_db696922',
    content: 'App_content_d4b05d62',
    base__disabled: 'App_base__disabled_0',
    wrapper: 'App_wrapper_4cc053c3',
    text: 'App_text_3332c59',
    count: 'App_count_fcd52716',
    alert: 'App_alert_72caf50c',
    alert__empty: 'App_alert__empty_c65c8c2f',
    alert__boxes: 'App_alert__boxes_ed652a30',
    icon: 'App_icon_879c8615',
};
const q = a(function () {
    const s = l.resolve('sounds'),
        o = l.resolve('aliases'),
        n = l.resolve('views'),
        a = _({
            resId: o.read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
            contentId: n.read((e) => e.mono.lootbox.tooltips.entry_point('resId')),
        }),
        [i, c] = r.useState(!1),
        { model: d, controls: u } = L(),
        { isEnabled: m, boxesCount: p, hasNew: h } = d.root.get(),
        y = d.computes.getState(),
        { images: g, texts: f, sounds: v } = d.resources.get(),
        w = d.style.get(),
        { opacityCustomNewBox: N, opacityCustom: E, opacityDiff: I, animationDuration: A } = w.shine,
        R = i ? 1 + w.icon[`${y}IconBrightness`] : 1,
        j = { opacity: (h ? N : E) + (i ? I : 0), animationDuration: A },
        $ = y === G.Empty ? g.iconEmpty : g.iconGold;
    return e.jsx('div', {
        className: t(Z.base, !m && Z.base__disabled),
        children: e.jsx('div', {
            className: Z.content,
            ...a,
            children: e.jsxs('div', {
                className: Z.wrapper,
                onClick: function () {
                    (s.play('yes1'), u.showLanding());
                },
                onMouseEnter: function () {
                    (x.sound(v.entryHover), c(!0));
                },
                onMouseLeave: () => c(!1),
                children: [
                    y === G.Boxes
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  m && e.jsx(Y, { image: g.shine, style: j }),
                                  e.jsx(W, {
                                      className: Z.count,
                                      maxText: f.maxBoxesCount,
                                      count: p,
                                      text: f.boxesCount,
                                  }),
                              ],
                          })
                        : e.jsx('div', { className: Z.text, children: f.boxes }),
                    e.jsx(z, { disabled: !m, image: $, brightness: R, className: Z.icon }),
                    !m && e.jsx(b, { className: t(Z.alert, Z[`alert__${y}`]), hasShadow: !0, icon: g.alert }),
                ],
            }),
        }),
    });
});
function J() {
    const t = l.resolve('aliases').read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
        s = r.useMemo(() => ({ rootId: t }), [t]);
    return e.jsx(F, { options: s, children: e.jsx(q, {}) });
}
export { J as default };
