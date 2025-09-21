import { j as e, f as t, o as s, g as n, w as o, r as a } from './vendor.js';
import { d9 as r, i, cf as c, r as l, T as u, da as d } from './lib.js';
const m = { base: 'AlertIcon_7dcecd8f', shadow: 'AlertIcon_shadow_daf8370', icon: 'AlertIcon_icon_35ce98b5' };
function p({ icon: s, hasShadow: n = !1, className: o }) {
    return e.jsxs('div', {
        className: t(m.base, o),
        children: [
            n && e.jsx('div', { className: m.shadow }),
            e.jsx('div', { className: m.icon, style: { backgroundImage: `url(${s})` } }),
        ],
    });
}
var _ = ((e) => ((e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic'), e))(_ || {});
const h = (e, t) => {
    let s = e;
    const n = t.split('.');
    for (let o = 0; o < n.length; o++) {
        if (!s) return '';
        if (('string' != typeof s && (s = s.$dyn(n[o])), 'string' == typeof s)) return s;
    }
    return '';
};
var b = ((e) => (
        (e.EntryPoint = 'ENTRY_POINT'),
        (e.InfoPage = 'INFO_PAGE'),
        (e.Rewards = 'REWARDS'),
        (e.HasBoxesView = 'HAS_BOXES_VIEW'),
        e
    ))(b || {}),
    x = ((e) => (
        (e.Videos = 'videos'),
        (e.Images = 'images'),
        (e.Texts = 'texts'),
        (e.Sounds = 'sounds'),
        (e.DynamicVideos = 'dynamicVideos'),
        (e.DynamicImages = 'dynamicImages'),
        (e.DynamicTexts = 'dynamicTexts'),
        e
    ))(x || {});
(_.Rare, _.Epic);
const y = {
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
    g = {
        DEFAULT_CONFIG: y,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
            INFO_PAGE: { hasDescription: !0 },
        },
        wt: { HAS_BOXES_VIEW: { tabsGuaranteedCount: 5 } },
        wtCn: { HAS_BOXES_VIEW: { tabsGuaranteedCount: 5 } },
    },
    f = (e, t) => {
        const s = g[r(e)];
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
              })(y[t], s[t])
            : y[t];
    },
    v = (e, t) => {
        let s = e;
        const n = t.split('.');
        for (let o = 0; o < n.length && s; o++) {
            const e = s.$dyn(n[o]);
            (e && 'object' != typeof e) || (s = e);
        }
        return s;
    },
    I = ({ type: e, filePath: t, eventName: s }, n = !1) => {
        const {
            parent: o,
            path: a,
            defaultPath: r,
        } = ((e, t, s) => {
            const n = 'gui.maps.icons.lootBoxSystem.customizable',
                o = 'lootbox.customizable';
            switch (e) {
                case x.Images:
                case x.DynamicImages:
                    return { parent: R.images, path: `${n}.${s}.${t}`, defaultPath: `${n}.default.${t}` };
                case x.Videos:
                case x.DynamicVideos:
                    return { parent: R.videos, path: `${o}.${s}.${t}`, defaultPath: `${o}.default.${t}` };
                case x.Texts:
                case x.DynamicTexts:
                    return { parent: R.strings, path: `lootbox_${s}.${t}`, defaultPath: `lootbox_system.${t}` };
                case x.Sounds:
                    return { parent: R.sounds, path: `${t}_${s}`, defaultPath: `${t}` };
                default:
                    return (
                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                        { parent: '', path: '', defaultPath: '' }
                    );
            }
        })(e, t, s);
        return o ? { eventResource: n ? v(o, a) : h(o, a), defaultResource: n ? v(o, r) : h(o, r) } : null;
    },
    N = (e, t, s) =>
        Object.keys(e).reduce(
            (n, o) => (
                (n[o] = (({ type: e, filePath: t, eventName: s }) => {
                    const n = I({ type: e, filePath: t, eventName: s });
                    if (!n || (!n.eventResource && !n.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${s} ${t})`), '');
                    const { eventResource: o, defaultResource: a } = n;
                    return o || a;
                })({ type: t, filePath: e[o], eventName: s })),
                n
            ),
            {},
        ),
    E = (e, t) =>
        Object.keys(e).reduce((s, n) => {
            const o = e[n];
            return o ? ((s[n] = N(o, n, t)), s) : s;
        }, {}),
    A = {
        images: {
            iconEmpty: 'entry_point.lootboxEmpty',
            iconGold: 'entry_point.lootboxGold',
            shine: 'entry_point.glow',
            alert: 'entry_point.alert',
        },
        texts: { boxes: 'entryPoint.boxes', maxBoxesCount: 'entryPoint.maxBoxesCount', boxesCount: 'entryPoint.count' },
        sounds: { entryHover: 'gui_lb_icon_hover' },
    };
var $ = ((e) => ((e.Boxes = 'boxes'), (e.Empty = 'empty'), e))($ || {});
const [j, C] = i()(
        ({ observableModel: e }) => {
            const t = e.object().get().eventName,
                o = { root: e.object(), style: s.box(f(t, b.EntryPoint)), resources: s.box(E(A, t)) },
                a = n(() => {
                    const { boxesCount: e } = o.root.get();
                    return e ? 'boxes' : 'empty';
                });
            return { ...o, computes: { getState: a } };
        },
        ({ externalModel: e }) => ({ showLanding: e.createCallbackNoArgs('onEntryClick') }),
    ),
    P = { base: 'Counter_d19ba807' },
    S = 1e3;
function w({ count: s, text: n, maxText: o, className: a }) {
    return e.jsx('div', {
        className: t(P.base, a),
        children: s < S ? e.jsx(c, { text: n, params: { count: s }, upgradeLegacy: !0 }) : o,
    });
}
const D = { base: 'Icon_1d8e6c37' };
function B({ image: s, brightness: n, disabled: o, className: a, ...r }) {
    return e.jsx('div', {
        ...r,
        className: t(D.base, a),
        style: { backgroundImage: `url(${s})`, filter: o ? 'brightness(.8) saturate(.5)' : `brightness(${n})` },
    });
}
const O = {
    base: 'Shine_91d96348',
    shineAnimation: 'Shine_shineAnimation_ead5930d',
    shineAnimation__reverse: 'Shine_shineAnimation__reverse_de32f2ac',
};
function T({ image: s, style: n }) {
    return e.jsxs('div', {
        className: O.base,
        style: { opacity: n.opacity },
        children: [
            e.jsx('div', {
                className: O.shineAnimation,
                style: { backgroundImage: `url(${s})`, animationDuration: n.animationDuration },
            }),
            e.jsx('div', {
                className: t(O.shineAnimation, O.shineAnimation__reverse),
                style: { backgroundImage: `url(${s})`, animationDuration: n.animationDuration },
            }),
        ],
    });
}
const k = {
    base: 'App_db696922',
    content: 'App_content_2d3566e0',
    base__disabled: 'App_base__disabled_0',
    text: 'App_text_3332c59',
    count: 'App_count_7c05d9e3',
    alert: 'App_alert_72caf50c',
    alert__empty: 'App_alert__empty_c65c8c2f',
    alert__boxes: 'App_alert__boxes_ed652a30',
    icon: 'App_icon_879c8615',
};
const G = o(function () {
    const s = l.resolve('sounds'),
        n = l.resolve('aliases'),
        o = l.resolve('views'),
        r = u({
            resId: n.read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
            contentId: o.read((e) => e.mono.lootbox.tooltips.entry_point('resId')),
        }),
        [i, c] = a.useState(!1),
        { model: m, controls: _ } = C(),
        { isEnabled: h, boxesCount: b, hasNew: x } = m.root.get(),
        y = m.computes.getState(),
        { images: g, texts: f, sounds: v } = m.resources.get(),
        I = m.style.get(),
        { opacityCustomNewBox: N, opacityCustom: E, opacityDiff: A, animationDuration: j } = I.shine,
        P = i ? 1 + I.icon[`${y}IconBrightness`] : 1,
        S = { opacity: (x ? N : E) + (i ? A : 0), animationDuration: j },
        R = y === $.Empty ? g.iconEmpty : g.iconGold;
    return e.jsx('div', {
        className: t(k.base, !h && k.base__disabled),
        children: e.jsxs('div', {
            className: k.content,
            onClick: function () {
                (s.play('yes1'), _.showLanding());
            },
            onMouseEnter: function () {
                (d.sound(v.entryHover), c(!0));
            },
            onMouseLeave: () => c(!1),
            children: [
                y === $.Boxes
                    ? e.jsxs(e.Fragment, {
                          children: [
                              h && e.jsx(T, { image: g.shine, style: S }),
                              e.jsx(w, { className: k.count, maxText: f.maxBoxesCount, count: b, text: f.boxesCount }),
                          ],
                      })
                    : e.jsx('div', { className: k.text, children: f.boxes }),
                e.jsx(B, { ...r, disabled: !h, image: R, brightness: P, className: k.icon }),
                !h && e.jsx(p, { className: t(k.alert, k[`alert__${y}`]), hasShadow: !0, icon: g.alert }),
            ],
        }),
    });
});
function V() {
    const t = l.resolve('aliases').read((e) => e.hangar.shared.LootboxEntryPoint('resId')),
        s = a.useMemo(() => ({ rootId: t }), [t]);
    return e.jsx(j, { options: s, children: e.jsx(G, {}) });
}
export { V as default };
