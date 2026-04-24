import { v as e, r as s, j as a } from '../../../chunks/vendor.js';
import {
    i as o,
    u as r,
    a as n,
    r as t,
    c as l,
    b as c,
    V as i,
    p as d,
    J as u,
    U as p,
    d as m,
} from '../../../chunks/lib.js';
import { v as f } from '../../../chunks/utils.js';
const [v, b] = o()(
        ({ observableModel: e }) => ({ ...{ root: e.object() } }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    h = 'App_fab90a23',
    j = 'App_video_826e570a',
    g = e(() => {
        const { model: e, controls: o } = b(),
            { videoName: u, audioName: p, isWindowAccessible: m } = e.root.get(),
            { width: v, height: g } = r(),
            y = n(),
            N = s.useRef(null),
            k = t.resolve('videos').readOrEmpty(u);
        return (
            s.useEffect(() => {
                const e = N.current;
                if (!e) return;
                if (!m) return e.pause();
                return Boolean(e.getCurrentTime())
                    ? e.play()
                    : l(() => {
                          (e.play(), d.sound(p));
                      }, 300);
            }, [N, m, p]),
            s.useEffect(() => {
                const e = N.current;
                engine.on('clientMinimized', (s) => {
                    e && (s ? e.pause() : e.play());
                });
            }, [N]),
            c(o.close),
            a.jsx('div', {
                className: h,
                children: a.jsx(i, { className: j, src: k, onEnded: o.close, ref: N, style: f(v, g, y, u) }),
            })
        );
    });
m(new u().add(p).addWithProps(v, {}).render(a.jsx(g, {})));
