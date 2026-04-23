import { n as e, q as s, r as a, j as t, t as r, e as n } from './vendor.js';
import { w as o, i as c, p as i, x as m } from './lib.js';
import { B as l } from './enums.js';
const d = { [l.Prepick]: 0, [l.Voting]: 1, [l.Finished]: 2, [l.None]: 3 };
function u(e) {
    return e - 1;
}
const [g, _] = c()(
        (s) => {
            const a = { root: s.observableModel.object() },
                t = e(() => {
                    const { startTimestamp: e, endTimestamp: s, serverTimestamp: t } = a.root.get();
                    return (function (e, s, a) {
                        const t = s - e;
                        return a <= e ? 0 : a >= s ? 100 : Math.floor(((a - e) / t) * 100);
                    })(e, u(s), t);
                });
            return { ...a, computes: { progressPercentage: t } };
        },
        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('pollServerTime') }),
    ),
    p = 'Stage_dd8bd0be',
    f = 'Stage_line_6cf4ae98',
    b = 'Stage_progress_14938f9d',
    N = 'Stage_background_7913d805',
    v = 'Stage_accent_ae0fcda6',
    j = 'Stage_base__current_68142ff2',
    x = 'Stage_image_d59eb726';
function S(e, s) {
    return 'past' === e ? 0 : 'future' === e ? -100 : Math.min(0, s - 100);
}
const T = s(({ stage: e, soundsEnabled: s, className: n, classNames: o }) => {
        const { model: c } = _(),
            { banState: l } = c.root.get(),
            u = c.computes.progressPercentage(),
            g = (function (e, s) {
                const a = d[e] - d[s];
                return a < 0 ? 'past' : a > 0 ? 'future' : 'current';
            })(e, l);
        return (
            a.useEffect(() => {
                s && 'current' === g && i.sound('comp_7_bans_progressbar_start');
            }, [g, s]),
            a.useEffect(() => {
                s && 'current' === g && m('RTPC_ext_comp_7_progressbar', u);
            }, [g, u, s]),
            a.useEffect(() => {
                s && 'current' === g && 100 === u && i.sound('comp_7_bans_progressbar_stop');
            }, [u, s, g]),
            t.jsxs('div', {
                className: r(p, 'current' === g && j, n),
                style: { '--animation-duration': '1s' },
                children: [
                    t.jsx('div', { className: f }),
                    t.jsxs('div', {
                        className: b,
                        style: { transform: `translateX(${S(g, u)}%)` },
                        children: [
                            t.jsx('div', { className: r(N, o?.lineBg) }),
                            t.jsx('div', { className: v, children: t.jsx('div', { className: x }) }),
                        ],
                    }),
                ],
            })
        );
    }),
    h = 'BanProgressionWidget_e508801a',
    B = 'BanProgressionWidget_background_6a4cb777',
    P = 'BanProgressionWidget_stage_68c90a63',
    E = [l.Prepick, l.Voting, l.Finished],
    k = s(({ soundsEnabled: e = !0, className: s, classNames: r }) => {
        const { model: o } = _(),
            { banState: c } = o.root.get();
        a.useEffect(() => {
            e && c === l.Voting && i.sound('comp_7_bans_stage_change');
        }, [c, e]);
        const m = a.useMemo(() => ({ lineBg: r?.lineBg }), [r?.lineBg]);
        return t.jsxs('div', {
            className: n(h, s),
            children: [
                t.jsx('div', { className: B }),
                E.map((s) => t.jsx(T, { soundsEnabled: e, stage: s, className: P, classNames: m }, s)),
            ],
        });
    }),
    M = s((e) => {
        const { model: s, controls: a } = _(),
            { banState: r, serverTimestamp: n, startTimestamp: c, endTimestamp: i } = s.root.get();
        !(function (e, s, a, t = 950) {
            o(
                () => {
                    a();
                },
                e < s ? t : void 0,
            );
        })(n, u(i), a.pollServerTime, 200);
        return r !== l.None && n > 0 && c > 0 && i > 0 ? t.jsx(k, { ...e }) : null;
    });
export { g as B, M as a };
