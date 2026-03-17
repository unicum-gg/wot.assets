import { t as e, r as s, j as o } from '../../../chunks/vendor.js';
import {
    i as a,
    k as r,
    l as n,
    r as t,
    n as l,
    o as i,
    V as c,
    p as d,
    J as u,
    U as p,
    j as m,
} from '../../../chunks/lib.js';
import { v as f } from '../../../chunks/utils.js';
const [j, h] = a()(
        ({ observableModel: e }) => ({ ...{ root: e.object() } }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    v = 'App_fab90a23',
    b = 'App_video_826e570a',
    g = e(() => {
        const { model: e, controls: a } = h(),
            { videoName: u, audioName: p, isWindowAccessible: m } = e.root.get(),
            { width: j, height: g } = r(),
            k = n(),
            y = s.useRef(null),
            N = t.resolve('videos').readOrEmpty(u);
        return (
            s.useEffect(() => {
                const e = y.current;
                if (!e) return;
                if (!m) return e.pause();
                return Boolean(e.getCurrentTime())
                    ? e.play()
                    : l(() => {
                          (e.play(), d.sound(p));
                      }, 300);
            }, [y, m, p]),
            s.useEffect(() => {
                const e = y.current;
                engine.on('clientMinimized', (s) => {
                    e && (s ? e.pause() : e.play());
                });
            }, [y]),
            i(a.close),
            o.jsx('div', {
                className: v,
                children: o.jsx(c, { className: b, src: N, onEnded: a.close, ref: y, style: f(j, g, k, u) }),
            })
        );
    });
m(new u().add(p).addWithProps(j, {}).render(o.jsx(g, {})));
