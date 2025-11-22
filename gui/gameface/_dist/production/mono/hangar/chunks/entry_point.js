import { j as e, f as t, d as s, o as n, g as o, v as a, r } from './vendor.js';
import { dl as i, dm as c, dn as d, r as l, dp as u, dq as m, i as p, cp as h, T as x, dr as _ } from './lib.js';
const y = { base: 'AlertIcon_7dcecd8f', shadow: 'AlertIcon_shadow_daf8370', icon: 'AlertIcon_icon_35ce98b5' };
function b({ icon: s, hasShadow: n = !1, className: o }) {
    return e.jsxs('div', {
        className: t(y.base, o),
        children: [
            n && e.jsx('div', { className: y.shadow }),
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
        const n = c(this.prefix, e),
            o = (function (e, t) {
                const s = t.split('.');
                if (window.R && window.R.sounds) {
                    const t = s[s.length - 1];
                    if (!t) return;
                    const n = s.slice(0, -1).reduce((e, t) => {
                        if ('object' == typeof (null == e ? void 0 : e[t])) return e[t];
                    }, e);
                    if (!n) return;
                    return 'function' == typeof n[t] ? n[t]() : void 0;
                }
                throw new Error('R class with images field is not defined');
            })(this.root, n);
        return void 0 === o ? ('silent' !== s && d(`Resource not found: ${n}`, s), t()) : o;
    }
    readOrEmpty(e, t = 'warn') {
        return this.readOr(e, () => '', t);
    }
}
const v = 'lootbox_images',
    N = 'lootbox_sounds';
(l.register(v, s(() => new u(window.R.images)).singleton()),
    l.register(N, s(() => new f(window.R.sounds)).singleton()));
const w = l.resolve(v),
    E = l.resolve('videos'),
    I = l.resolve(N),
    j = l.resolve('strings'),
    A = (e, t) => {
        switch (e) {
            case R.images:
                return w.readOrEmpty(t, 'silent');
            case R.videos:
                return E.readOrEmpty(t, 'silent');
            case R.sounds:
                return I.readOrEmpty(t, 'silent');
            case R.strings:
                return j.readOrEmpty(t, 'silent');
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
                      const n = { ...e };
                      for (const o in n)
                          t &&
                              o in t &&
                              ('object' == typeof n[o] ? (n[o] = s(n[o], t[o] ?? n[o])) : (n[o] = t[o] ?? n[o]));
                      return n;
                  };
                  return s(e, t);
              })(C[t], s[t])
            : C[t];
    },
    S = (e, t) => {
        let s = e;
        const n = t.split('.');
        for (let o = 0; o < n.length && s; o++) {
            const e = s.$dyn(n[o]);
            (e && 'object' != typeof e) || (s = e);
        }
        return s;
    },
    B = ({ type: e, filePath: t, eventName: s }, n = !1) => {
        const {
            parent: o,
            path: a,
            defaultPath: r,
        } = ((e, t, s) => {
            const n = 'gui.maps.icons.lootBoxSystem.customizable',
                o = 'lootbox.customizable';
            switch (e) {
                case P.Images:
                case P.DynamicImages:
                    return { parent: R.images, path: `${n}.${s}.${t}`, defaultPath: `${n}.default.${t}` };
                case P.Videos:
                case P.DynamicVideos:
                    return { parent: R.videos, path: `${o}.${s}.${t}`, defaultPath: `${o}.default.${t}` };
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
        return o ? { eventResource: n ? S(o, a) : A(o, a), defaultResource: n ? S(o, r) : A(o, r) } : null;
    },
    T = (e, t, s) =>
        Object.keys(e).reduce(
            (n, o) => (
                (n[o] = (({ type: e, filePath: t, eventName: s }) => {
                    const n = B({ type: e, filePath: t, eventName: s });
                    if (!n || (!n.eventResource && !n.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${s} ${t})`), '');
                    const { eventResource: o, defaultResource: a } = n;
                    return o || a;
                })({ type: t, filePath: e[o], eventName: s })),
                n
            ),
            {},
        ),
    k = (e, t) =>
        Object.keys(e).reduce((s, n) => {
            const o = e[n];
            return o ? ((s[n] = T(o, n, t)), s) : s;
        }, {}),
    G = {
        images: {
            iconEmpty: 'entry_point.lootboxEmpty',
            iconGold: 'entry_point.lootboxGold',
            shine: 'entry_point.glow',
            alert: 'entry_point.alert',
        },
        texts: { boxes: 'entryPoint.boxes', maxBoxesCount: 'entryPoint.maxBoxesCount', boxesCount: 'entryPoint.count' },
        sounds: { entryHover: 'gui_lb_icon_hover' },
    };
var V = ((e) => ((e.Boxes = 'boxes'), (e.Empty = 'empty'), e))(V || {});
const [L, F] = p()(
        ({ observableModel: e }) => {
            const t = e.object().get().eventName,
                s = { root: e.object(), style: n.box(D(t, $.EntryPoint)), resources: n.box(k(G, t)) },
                a = o(() => {
                    const { boxesCount: e } = s.root.get();
                    return e ? 'boxes' : 'empty';
                });
            return { ...s, computes: { getState: a } };
        },
        ({ externalModel: e }) => ({ showLanding: e.createCallbackNoArgs('onEntryClick') }),
    ),
    H = { base: 'Counter_d19ba807' },
    M = 1e3;
function W({ count: s, text: n, maxText: o, className: a }) {
    return e.jsx('div', {
        className: t(H.base, a),
        children: s < M ? e.jsx(h, { text: n, params: { count: s }, upgradeLegacy: !0 }) : o,
    });
}
const z = { base: 'Icon_1d8e6c37' };
function U({ image: s, brightness: n, disabled: o, className: a, ...r }) {
    return e.jsx('div', {
        ...r,
        className: t(z.base, a),
        style: { backgroundImage: `url(${s})`, filter: o ? 'brightness(.8) saturate(.5)' : `brightness(${n})` },
    });
}
const X = {
    base: 'Shine_91d96348',
    shineAnimation: 'Shine_shineAnimation_ead5930d',
    shineAnimation__reverse: 'Shine_shineAnimation__reverse_de32f2ac',
};
function Y({ image: s, style: n }) {
    return e.jsxs('div', {
        className: X.base,
        style: { opacity: n.opacity },
        children: [
            e.jsx('div', {
                className: X.shineAnimation,
                style: { backgroundImage: `url(${s})`, animationDuration: n.animationDuration },
            }),
            e.jsx('div', {
                className: t(X.shineAnimation, X.shineAnimation__reverse),
                style: { backgroundImage: `url(${s})`, animationDuration: n.animationDuration },
            }),
        ],
    });
}
const q = {
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
const Z = a(function () {
    const s = l.resolve('sounds'),
        n = l.resolve('aliases'),
        o = l.resolve('views'),
        a = x({
            resId: n.read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
            contentId: o.read((e) => e.mono.lootbox.tooltips.entry_point('resId')),
        }),
        [i, c] = r.useState(!1),
        { model: d, controls: u } = F(),
        { isEnabled: m, boxesCount: p, hasNew: h } = d.root.get(),
        y = d.computes.getState(),
        { images: g, texts: f, sounds: v } = d.resources.get(),
        N = d.style.get(),
        { opacityCustomNewBox: w, opacityCustom: E, opacityDiff: I, animationDuration: R } = N.shine,
        j = i ? 1 + N.icon[`${y}IconBrightness`] : 1,
        A = { opacity: (h ? w : E) + (i ? I : 0), animationDuration: R },
        $ = y === V.Empty ? g.iconEmpty : g.iconGold;
    return e.jsx('div', {
        className: t(q.base, !m && q.base__disabled),
        children: e.jsx('div', {
            className: q.content,
            ...a,
            children: e.jsxs('div', {
                className: q.wrapper,
                onClick: function () {
                    (s.play('yes1'), u.showLanding());
                },
                onMouseEnter: function () {
                    (_.sound(v.entryHover), c(!0));
                },
                onMouseLeave: () => c(!1),
                children: [
                    y === V.Boxes
                        ? e.jsxs(e.Fragment, {
                              children: [
                                  m && e.jsx(Y, { image: g.shine, style: A }),
                                  e.jsx(W, {
                                      className: q.count,
                                      maxText: f.maxBoxesCount,
                                      count: p,
                                      text: f.boxesCount,
                                  }),
                              ],
                          })
                        : e.jsx('div', { className: q.text, children: f.boxes }),
                    e.jsx(U, { disabled: !m, image: $, brightness: j, className: q.icon }),
                    !m && e.jsx(b, { className: t(q.alert, q[`alert__${y}`]), hasShadow: !0, icon: g.alert }),
                ],
            }),
        }),
    });
});
function J() {
    const t = l.resolve('aliases').read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
        s = r.useMemo(() => ({ rootId: t }), [t]);
    return e.jsx(L, { options: s, children: e.jsx(Z, {}) });
}
export { J as default };
