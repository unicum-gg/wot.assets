import { r as e, a as t } from './getRewardImage.js';
var a = ((e) => ((e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic'), e))(a || {});
const s = ['gold', 'credits', 'premium_plus', 'freeXP', 'crystal', 'equipCoin'];
var n = ((e) => (
        (e.EntryPoint = 'ENTRY_POINT'),
        (e.InfoPage = 'INFO_PAGE'),
        (e.Rewards = 'REWARDS'),
        (e.HasBoxesView = 'HAS_BOXES_VIEW'),
        e
    ))(n || {}),
    r = ((e) => (
        (e.Videos = 'videos'),
        (e.Images = 'images'),
        (e.Texts = 'texts'),
        (e.Sounds = 'sounds'),
        (e.DynamicVideos = 'dynamicVideos'),
        (e.DynamicImages = 'dynamicImages'),
        (e.DynamicTexts = 'dynamicTexts'),
        e
    ))(r || {});
const o = 'customizable/default',
    c = 2560 / 1440,
    u = [e.attachment],
    d = [a.Rare, a.Epic],
    l = (e, t) => {
        let a = e;
        const s = t.split('.');
        for (let n = 0; n < s.length && a; n++) {
            const e = a.$dyn(s[n]);
            (e && 'object' != typeof e) || (a = e);
        }
        return a;
    },
    i = ({ type: e, filePath: a, eventName: s }, n = !1) => {
        const {
            parent: o,
            path: c,
            defaultPath: u,
        } = ((e, t, a) => {
            const s = 'gui.maps.icons.lootBoxSystem.customizable',
                n = 'lootbox.customizable';
            switch (e) {
                case r.Images:
                case r.DynamicImages:
                    return { parent: R.images, path: `${s}.${a}.${t}`, defaultPath: `${s}.default.${t}` };
                case r.Videos:
                case r.DynamicVideos:
                    return { parent: R.videos, path: `${n}.${a}.${t}`, defaultPath: `${n}.default.${t}` };
                case r.Texts:
                case r.DynamicTexts:
                    return { parent: R.strings, path: `lootbox_${a}.${t}`, defaultPath: `lootbox_system.${t}` };
                case r.Sounds:
                    return { parent: R.sounds, path: `${t}_${a}`, defaultPath: `${t}` };
                default:
                    return (
                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                        { parent: '', path: '', defaultPath: '' }
                    );
            }
        })(e, a, s);
        return o ? { eventResource: n ? l(o, c) : t(o, c), defaultResource: n ? l(o, u) : t(o, u) } : null;
    },
    m = (e, t, a) =>
        Object.keys(e).reduce(
            (s, n) => (
                (s[n] = (({ type: e, filePath: t, eventName: a }) => {
                    const s = i({ type: e, filePath: t, eventName: a });
                    if (!s || (!s.eventResource && !s.defaultResource))
                        return (console.info(`Unreachable code: unknown resource (${e} ${a} ${t})`), '');
                    const { eventResource: n, defaultResource: r } = s;
                    return n || r;
                })({ type: t, filePath: e[n], eventName: a })),
                s
            ),
            {},
        ),
    p = (e, t) =>
        Object.keys(e).reduce((a, s) => {
            const n = e[s];
            return n ? ((a[s] = m(n, s, t)), a) : a;
        }, {}),
    y = (e, t, a) => (e || t ? e || t : (console.warn(`Not found ${a}`), '')),
    $ = (e, t, a) =>
        Object.keys(e).reduce((s, n) => {
            const r = e[n];
            return (
                (s[n] = ((e, t, a) => {
                    const s = `resource type: ${e}, path: ${t}`,
                        n = i({ type: e, filePath: t, eventName: a }, !0),
                        r = n?.defaultResource,
                        o = n?.eventResource;
                    return ((e, t, a) => ({
                        dynOpt: (s, n = 'default') => {
                            const r = t?.$dyn(s) || t?.$dyn(n),
                                o = e?.$dyn(n);
                            return y(r, o, a);
                        },
                        dyn: (s) => {
                            const n = t?.$dyn(s),
                                r = e?.$dyn(s);
                            return y(n, r, a);
                        },
                        plural: (s, n) => {
                            const r = t?.$plural(s, n),
                                o = e?.$plural(s, n);
                            return y(r, o, a);
                        },
                    }))(r, o, s);
                })(t, r, a)),
                s
            );
        }, {}),
    f = (e, t) =>
        Object.keys(e).reduce((a, s) => {
            const n = e[s];
            return n ? ((a[s] = $(n, s, t)), a) : a;
        }, {});
export { a as B, n as C, o as D, c as R, p as a, u as b, s as c, y as d, d as e, f as g };
