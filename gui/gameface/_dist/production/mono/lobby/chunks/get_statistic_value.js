import { j as e, x as a } from './vendor.js';
import { cY as s, cB as n, c4 as o } from './lib.js';
const i = 'DivineGlow_2b9c4670',
    _ = 'DivineGlow_glow_fddce7f8',
    t = 'DivineGlow_glow__bg_a3df35d7',
    c = (e) => !!n.isHigh() && e,
    r = ({ className: n, classNames: o, playerRef: r, animated: l = !0 }) =>
        e.jsx('div', {
            className: a(i, n),
            children: c(l)
                ? e.jsx(s, {
                      className: a(_, null == o ? void 0 : o.glow),
                      src: String(R.videos.comp7.divine_glow()),
                      autoplay: !0,
                      loop: !0,
                      ref: r,
                  })
                : e.jsx('div', { className: a(_, t, null == o ? void 0 : o.glow) }),
        }),
    l = {
        base__x16: 'SeasonPoint_base__x16_9df6c1df',
        base__x24: 'SeasonPoint_base__x24_dba010b6',
        base__x32: 'SeasonPoint_base__x32_90b7d730',
        base__x48: 'SeasonPoint_base__x48_11f396e',
        icon: 'SeasonPoint_icon_a2857576',
        fadeIn: 'SeasonPoint_fadeIn_684111c2',
        fadeInThreeQuarters: 'SeasonPoint_fadeInThreeQuarters_684111c2',
        fadeInHalf: 'SeasonPoint_fadeInHalf_684111c2',
        fadeOut: 'SeasonPoint_fadeOut_684111c2',
        fadeInWithScale: 'SeasonPoint_fadeInWithScale_684111c2',
        slideUp: 'SeasonPoint_slideUp_684111c2',
        scale: 'SeasonPoint_scale_684111c2',
        raysAppearance: 'SeasonPoint_raysAppearance_684111c2',
        rotate: 'SeasonPoint_rotate_684111c2',
        'reverse-rotate': 'SeasonPoint_reverse-rotate_684111c2',
        glowAppearance: 'SeasonPoint_glowAppearance_684111c2',
        highlightAppearance: 'SeasonPoint_highlightAppearance_684111c2',
        blink: 'SeasonPoint_blink_684111c2',
        slideUpIn: 'SeasonPoint_slideUpIn_684111c2',
    };
var d = ((e) => ((e.x16 = 'x16'), (e.x24 = 'x24'), (e.x32 = 'x32'), (e.x48 = 'x48'), e))(d || {});
const p = ({ state: s, season: n, className: o, size: i = 'x48' }) =>
        e.jsx('div', {
            className: a(l.base, l[`base__${i}`], l[`base__${s}`], o),
            children: e.jsx('div', {
                className: l.icon,
                style: {
                    backgroundImage:
                        'notAchieved' === s
                            ? `url(${R.images.comp7.gui.maps.icons.icons.$dyn(`season_point_notAchieved_${i}`)})`
                            : `url(${R.images.comp7.gui.maps.icons.icons.$dyn(`season_point_${n}_${i}`)})`,
                },
            }),
        }),
    g = 0,
    m = 1,
    x = window.systemLocale,
    f = ({ value: e, isPercentage: a = !1, fractionDigits: s = 2 }) =>
        -1 === e
            ? R.strings.comp7_ext.dash()
            : ((e, a, s) => {
                  const n =
                      Number.isInteger(e) || Number.isInteger(10 * e)
                          ? x.getRealFormat(e, m)
                          : x.getRealFormat(parseFloat(e.toFixed(s)), g);
                  return a ? o(R.strings.comp7_ext.percentage(), { percentageValue: n }) : n;
              })(e, a, s);
export { r as D, p as S, d as a, f as g };
