import { r as e, j as a, m as s } from './vendor.js';
import { a3 as t, ac as o, a8 as r, a1 as c } from './lib.js';
const i = 'VideoBackground_videoBackground_1a24cf5e',
    n = 'VideoBackground_video_102f3645',
    d = 1920,
    l = 1080,
    u = d / l,
    f = ({ className: f, src: m, paused: h, rotated: p = !1, onPlay: g }) => {
        const [j, y] = e.useState(1),
            v = e.useRef(null),
            w = () => {
                const e = c('rem');
                let a = 1;
                (e.width >= e.height * u ? (a = e.width / d) : e.height >= e.width / u && (a = e.height / l), y(a));
            },
            _ = () => {
                g && g();
            };
        return (
            e.useEffect(() => {
                const e = v.current;
                if (e) return h ? e.pause() : e.play();
            }, [h, v]),
            e.useEffect(() => {
                (t(w), t(w), w());
            }, []),
            o.isLow()
                ? null
                : a.jsx('div', {
                      className: s(i, f),
                      style: { transform: `scale(${j}) ${p ? 'rotate(180deg)' : ''}` },
                      children: a.jsx(r, {
                          ref: v,
                          onPlay: _,
                          onTimeUpdate: _,
                          src: m,
                          className: n,
                          loop: !0,
                          autoplay: !0,
                      }),
                  })
        );
    };
export { f as V };
