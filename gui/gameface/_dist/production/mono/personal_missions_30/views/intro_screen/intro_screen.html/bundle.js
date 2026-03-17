import { n as o, r as s, l as e, j as i, m as r } from '../../../chunks/vendor.js';
import {
    c as a,
    i as n,
    n as _,
    u as t,
    r as p,
    b as d,
    o as v,
    a as c,
    V as m,
    e as l,
    s as u,
    k as y,
    d as f,
    U as h,
} from '../../../chunks/lib.js';
/* empty css                    */ const j = {
        intro: a('vid_pm_intro'),
        intro_op_8: a('vid_pm_o08'),
        intro_op_9: a('vid_pm_o09'),
        intro_op_10: a('vid_pm_o10'),
        intro_op_8_vo: a('vo_vid_pm_o08'),
        intro_op_9_vo: a('vo_vid_pm_o09'),
        intro_op_10_vo: a('vo_vid_pm_o10'),
        intro_vo: a('vo_vid_pm_intro'),
        stopIntro: a('vid_pm_stop'),
        vid_pm_pause: a('vid_pm_pause'),
        vid_pm_resume: a('vid_pm_resume'),
    },
    [b, g] = n()(({ observableModel: o }) => ({ ...o.primitives({ videoPath: 'videoPath' }) }), _),
    x = { base: 'IntroScreen_187cc925', video: 'IntroScreen_video_16d069c3' },
    I = o(function () {
        const { model: o } = g(),
            a = o.videoPath.get(),
            n = s.useRef(null),
            _ = s.useRef(!1),
            f = t(),
            h = p.resolve('videos'),
            [j, b] = e(() => ({ from: { opacity: 0 }, config: { duration: 400, easing: l.easeInCubic } })),
            [I, k] = e(() => ({
                from: { opacity: 1 },
                config: { duration: 200, easing: l.easeInCubic },
                onRest: () => u.closeView(),
            }));
        function E() {
            _.current ||
                ((_.current = !0),
                f.play('stopIntro'),
                b.start({
                    to: { opacity: 0 },
                    config: { duration: 300 },
                    onRest: () => k.start({ to: { opacity: 0 } }),
                }));
        }
        return (
            d(() =>
                v((o) => {
                    o ? f.play('vid_pm_pause') : f.play('vid_pm_resume');
                }),
            ),
            c(y.ESCAPE, E),
            d(() => {
                const o = n.current;
                o && (o.play(), b.start({ opacity: 1 }), f.play(a), f.play(`${a}_vo`));
            }),
            i.jsx(r.div, {
                className: x.base,
                style: I,
                children: i.jsx(r.div, {
                    className: x.wrapper,
                    style: j,
                    children: i.jsx(m, {
                        ref: n,
                        className: x.video,
                        src: h.readOrEmpty(`personal_missions_30.intro_screens.${a}`),
                        onEnded: E,
                    }),
                }),
            })
        );
    });
f(i.jsx(h, { soundsOverrides: j, children: i.jsx(b, { children: i.jsx(I, {}) }) }));
