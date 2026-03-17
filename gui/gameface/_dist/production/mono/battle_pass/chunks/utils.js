import { G as e, bz as t, bA as a, bB as s, bN as i } from './lib.js';
const r = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    o = {
        progressiveStyle: 'progressiveStyle',
        style: 'style',
        tankman: 'tankman',
        vehicle: 'vehicle',
        battleQuest: 'battleQuest',
    },
    n = (e) => R.strings.battle_pass.chapter.fullNameUppercased.$dyn(`c_${e}`),
    l = (t) => {
        const { bigIcon: a, overlayType: s, name: r } = t;
        if ('equipmentTrophyBasic' === s) {
            const e = `trophyBasic${a.charAt(0).toUpperCase()}${a.slice(1)}`;
            return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(e)})` };
        }
        return r === i.CrewBooks
            ? { backgroundImage: `url(R.images.gui.maps.icons.crewBooks.books.${e.S600x450}.${a})` }
            : r === i.Attachment
              ? { backgroundImage: `url(R.images.gui.maps.vehicles.attachments.${e.S600x450}.${a})` }
              : { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(`${a}`)})` };
    },
    c = (e) => (e.bigIcon.includes('vehicle') ? e.vehicleName : e.bigIcon.includes('style_3d') ? e.userName : void 0),
    m = (i, r = e.Big, o = !1) => {
        const { item: n, name: l, value: m, overlayType: u, tooltipId: d, tooltipContentId: p } = i;
        return {
            name: n || l,
            image: s(i, r),
            special: u,
            value: m,
            valueType: a(l),
            title: o && c(i),
            tooltipArgs: t({ tooltipId: d }, Number(p), { ignoreShowDelay: !0 }),
            size: r,
        };
    },
    u = [o.battleQuest, o.tankman, o.style, o.progressiveStyle, o.vehicle],
    d = (e, t) => u.indexOf(t) - u.indexOf(e),
    p = (e) => {
        const [t, a] = e.sort(d);
        return { mainReward: t, additionalReward: a };
    },
    g = (e, t, a) => {
        const s = `style_3d_${e}_${t}${a}`;
        return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(s)})` };
    },
    h = (e) => e === i.Attachment;
function v(e) {
    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
}
function b(e) {
    const t = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
        a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
    let s = '';
    for (let i = a.length - 1; i >= 0; i--) for (; e >= a[i]; ) ((s += t[i]), (e -= a[i]));
    return s;
}
const $ = () =>
        new Promise((e) => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    e();
                });
            });
        }),
    y = { hd: 16 / 9 },
    w = (e, t, a, s) => {
        const i = s.split('.').slice(-1)[0],
            { videoAspectRatio: r, fill: o } = ((e) =>
                'media_ch4' === e
                    ? { videoAspectRatio: y.hd, fill: 'contain' }
                    : { videoAspectRatio: y.hd, fill: 'cover' })(i),
            n = viewEnv.pxToRem(e) * a,
            l = viewEnv.pxToRem(t) * a,
            c = n / r,
            m = l * r,
            u = l > c;
        return 'contain' === o
            ? { width: `${u ? n : m}rem`, height: `${u ? c : l}rem` }
            : { width: `${u ? m : n}rem`, height: `${u ? l : c}rem` };
    };
export { o as R, m as a, b, g as c, l as d, r as e, n as g, h as i, p as m, $ as o, v as s, w as v };
