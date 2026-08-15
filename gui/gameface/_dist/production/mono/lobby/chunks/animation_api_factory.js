import { r as e } from './vendor.js';
import { aR as r, D as t, aO as n, aW as s } from './lib.js';
const a = (a) => () => {
    const { steps: o, autoStart: u = !0 } = a,
        l = e.useRef(null),
        i = e.useRef('idle'),
        d = r(),
        c = t(),
        f = n(),
        p = e.useMemo(() => {
            const e = o[Symbol.iterator](),
                r = () => {
                    const t = e.next();
                    if (t.done) return ((i.current = 'end'), void d.trigger('end'));
                    (c.run(() => {
                        if (l.current) {
                            if (
                                (l.current.classList.add(t.value.name),
                                d.trigger('change', t.value),
                                t.value.stopNextSteps)
                            )
                                return ((i.current = 'paused'), void d.trigger('pause'));
                            r();
                        } else console.error(`${t.value.name} step don't know on what rootRef it should be set`);
                    }, t.value.delay),
                        (i.current = 'running'));
                };
            return {
                rootRef: l,
                stateRef: i,
                steps: o,
                delayUntilStep: (e) => {
                    let r = 0;
                    for (let t = 0; t < o.length; t++) if (((r += o[t].delay), o[t] === e)) return r;
                    throw new Error(`delayUntilStep didn't find step: ${e.name}`);
                },
                events: { on: d.on, off: d.off },
                start: () => {
                    (r(), d.trigger('start'));
                },
                resume: () => {
                    'paused' === i.current
                        ? (r(), d.trigger('resume'))
                        : console.warn(
                              'api.resume() should be called only after paused animation, ignore resume() call',
                          );
                },
                skipAll: () => {
                    (c.clear(),
                        f.run(() => {
                            (o.forEach((e) => {
                                l.current
                                    ? l.current.classList.add(e.name)
                                    : console.error(`${e} tried to be set, but rootRef was not received in api`);
                            }),
                                (i.current = 'end'),
                                d.trigger('end'));
                        }));
                },
            };
        }, [c, d, f, o]);
    return (
        s(() => {
            u && p.start();
        }),
        p
    );
};
export { a as c };
