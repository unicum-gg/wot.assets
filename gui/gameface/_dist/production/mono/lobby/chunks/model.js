import { i as e, a as r, aM as a, aC as s } from './lib.js';
import { J as o, H as t, K as l } from './vendor.js';
var n = ((e) => (
    (e.None = 'none'),
    (e.CeasefireCurrentServer = 'ceasefireCurrentServer'),
    (e.CeasefireAllServers = 'ceasefireAllServers'),
    (e.ModeIsUnavailable = 'modeIsUnavailable'),
    (e.ModeIsFinished = 'modeIsFinished'),
    e
))(n || {});
const i = o(t({ goal: l(), periods: o(o(l())) }));
const [c, d] = e()(
    ({ observableModel: e }) => {
        const o = { ...e.primitives(['alertType']) },
            t = e.dict('battleSchedule');
        return {
            ...o,
            computes: {
                battleSchedule: r.shallow(() => {
                    const e = [];
                    for (const [l, n] of t.entries())
                        try {
                            e.push({
                                goal: l,
                                periods:
                                    ((r = JSON.parse(n.get())),
                                    r.map(([e, r]) => [a(e, s.ShortTime), a(r, s.ShortTime)])),
                            });
                        } catch (o) {
                            console.error(`Error parsing JSON for element ${l}:`, o);
                        }
                    var r;
                    return e;
                }),
            },
        };
    },
    ({ externalModel: e }) => ({ changeServer: e.createCallbackNoArgs('onChangeServer') }),
);
export { n as A, i as B, c as a, d as u };
