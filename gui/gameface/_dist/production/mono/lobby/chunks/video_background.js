import { r as e, j as a, m as s } from './vendor.js';
import { ah as t, at as o, _ as r, af as c } from './lib.js';
const i = 'VideoBackground_videoBackground_1a24cf5e',
    n = 'VideoBackground_video_102f3645',
    d = 1920,
    l = 1080,
    u = d / l,
    f = ({ className: f, src: h, paused: m, rotated: p = !1, onPlay: g }) => {
        const [j, y] = e.useState(1),
            _ = e.useRef(null),
            v = () => {
                const e = c('rem');
                let a = 1;
                (e.width >= e.height * u ? (a = e.width / d) : e.height >= e.width / u && (a = e.height / l), y(a));
            },
            w = () => {
                g && g();
            };
        return (
            e.useEffect(() => {
                const e = _.current;
                if (e) return m ? e.pause() : e.play();
            }, [m, _]),
            e.useEffect(() => {
                (t(v), t(v), v());
            }, []),
            o.isLow()
                ? null
                : a.jsx('div', {
                      className: s(i, f),
                      style: { transform: `scale(${j}) ${p ? 'rotate(180deg)' : ''}` },
                      children: a.jsx(r, {
                          ref: _,
                          onPlay: w,
                          onTimeUpdate: w,
                          src: h,
                          className: n,
                          loop: !0,
                          autoplay: !0,
                      }),
                  })
        );
    };
export { f as V };
