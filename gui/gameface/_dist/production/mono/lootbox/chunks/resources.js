import { r as e, a as t } from './getRewardImage.js';
var a = ((e) => ((e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic'), e))(a || {});
const n = ['gold', 'credits', 'premium_plus', 'freeXP', 'crystal', 'equipCoin'];
var s = ((e) => (
        (e.EntryPoint = 'ENTRY_POINT'),
        (e.InfoPage = 'INFO_PAGE'),
        (e.Rewards = 'REWARDS'),
        (e.HasBoxesView = 'HAS_BOXES_VIEW'),
        e
    ))(s || {}),
    o = ((e) => (
        (e.Videos = 'videos'),
        (e.Images = 'images'),
        (e.Texts = 'texts'),
        (e.Sounds = 'sounds'),
        (e.DynamicVideos = 'dynamicVideos'),
        (e.DynamicImages = 'dynamicImages'),
        (e.DynamicTexts = 'dynamicTexts'),
        e
    ))(o || {});
const r = 'customizable/default',
    u = 2560 / 1440,
    c = [e.attachment],
    l = [a.Rare, a.Epic],
    d = (e, t) => {
        let a = e;
        const n = t.split('.');
        for (let s = 0; s < n.length && a; s++) {
            const e = a.$dyn(n[s]);
            (e && 'object' != typeof e) || (a = e);
        }
        return a;
    },
    i = ({ type: e, filePath: a, eventName: n }, s = !1) => {
        const {
            parent: r,
            path: u,
            defaultPath: c,
        } = ((e, t, a) => {
            const n = 'gui.maps.icons.lootBoxSystem.customizable',
                s = 'lootbox.customizable';
            switch (e) {
                case o.Images:
                case o.DynamicImages:
                    return { parent: R.images, path: `${n}.${a}.${t}`, defaultPath: `${n}.default.${t}` };
                case o.Videos:
                case o.DynamicVideos:
                    return { parent: R.videos, path: `${s}.${a}.${t}`, defaultPath: `${s}.default.${t}` };
                case o.Texts:
                case o.DynamicTexts:
                    return { parent: R.strings, path: `lootbox_${a}.${t}`, defaultPath: `lootbox_system.${t}` };
                case o.Sounds:
                    return { parent: R.sounds, path: `${t}_${a}`, defaultPath: `${t}` };
                default:
                    return (
                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                        { parent: '', path: '', defaultPath: '' }
                    );
            }
        })(e, a, n);
        return r ? { eventResource: s ? d(r, u) : t(r, u), defaultResource: s ? d(r, c) : t(r, c) } : null;
    },
    m = (e, t, a) =>
        Object.keys(e).reduce(
            (n, s) => (
                (n[s] = (({ type: e, filePath: t, eventName: a }) => {
                    const n = i({ type: e, filePath: t, eventName: a });
                    if (!n || (!n.eventResource && !n.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${a} ${t})`), '');
                    const { eventResource: s, defaultResource: o } = n;
                    return s || o;
                })({ type: t, filePath: e[s], eventName: a })),
                n
            ),
            {},
        ),
    p = (e, t) =>
        Object.keys(e).reduce((a, n) => {
            const s = e[n];
            return s ? ((a[n] = m(s, n, t)), a) : a;
        }, {}),
    y = (e, t, a) => (e || t ? e || t : (console.warn(`Not found ${a}`), '')),
    $ = (e, t, a) =>
        Object.keys(e).reduce((n, s) => {
            const o = e[s];
            return (
                (n[s] = ((e, t, a) => {
                    const n = `resource type: ${e}, path: ${t}`,
                        s = i({ type: e, filePath: t, eventName: a }, !0);
                    return ((e, t, a) => ({
                        dynOpt: (n, s = 'default') => {
                            const o = (null == t ? void 0 : t.$dyn(n)) || (null == t ? void 0 : t.$dyn(s)),
                                r = null == e ? void 0 : e.$dyn(s);
                            return y(o, r, a);
                        },
                        dyn: (n) => {
                            const s = null == t ? void 0 : t.$dyn(n),
                                o = null == e ? void 0 : e.$dyn(n);
                            return y(s, o, a);
                        },
                        plural: (n, s) => {
                            const o = null == t ? void 0 : t.$plural(n, s),
                                r = null == e ? void 0 : e.$plural(n, s);
                            return y(o, r, a);
                        },
                    }))(null == s ? void 0 : s.defaultResource, null == s ? void 0 : s.eventResource, n);
                })(t, o, a)),
                n
            );
        }, {}),
    f = (e, t) =>
        Object.keys(e).reduce((a, n) => {
            const s = e[n];
            return s ? ((a[n] = $(s, n, t)), a) : a;
        }, {});
export { a as B, s as C, r as D, u as R, p as a, c as b, n as c, y as d, l as e, f as g };
