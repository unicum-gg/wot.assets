const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            '../../../lib/lib.css',
            '../../../title/title2.css',
            '../../../use_cover_size/use_cover_size.css',
            '../../../quantity_title/quantity_title.css',
            '../../../title/title.css',
            '../../../scroll_with_lips/scroll_with_lips.css',
            '../../../statistics/statistics.css',
            '../../../index/index.css',
            '../../../global/global.css',
            '../../../big_button/big_button.css',
            '../../../index/index2.css',
            '../../../vehicle_info/vehicle_info.css',
            '../../../reward/reward.css',
            '../../../tank_name/tank_name.css',
            '../../../loupe_button/loupe_button.css',
            '../../../index/index3.css',
            '../../../index/index4.css',
        ]),
) => i.map((i) => d[i]);
import { r as e, o as t, m as s, f as r, j as o, n } from '../../../chunks/vendor.js';
import { h as l, s as a, i as c, j as i, m as u, r as d, S as m } from '../../../chunks/lib.js';
/* empty css                    */ var E = ((e) => (
    (e[(e.NO_BOXES = 0)] = 'NO_BOXES'),
    (e[(e.HAS_BOXES = 1)] = 'HAS_BOXES'),
    (e[(e.SINGLE_BOX_REWARDS = 2)] = 'SINGLE_BOX_REWARDS'),
    (e[(e.MULTIPLE_BOXES_REWARDS = 3)] = 'MULTIPLE_BOXES_REWARDS'),
    e
))(E || {});
const _ = [E.MULTIPLE_BOXES_REWARDS, E.SINGLE_BOX_REWARDS],
    p = [..._],
    f = (e) => p.includes(e),
    S = (e) => a(e, (e) => f(e)),
    h = (e) => _.includes(e),
    [v, O] = c()(
        ({ observableModel: e }) => {
            const r = { root: e.object(), subViewIDs: e.arrayClone('subViewIDs'), overlayClosed: t.box(!1) },
                o = s(() => a(r.subViewIDs.get(), h));
            return { ...r, computes: { awardViewOpened: o } };
        },
        ({ externalModel: e, model: t }) => ({
            setOverlayState: r((e, s) => {
                const r = Boolean(e && !s);
                t.overlayClosed.set(r);
            }),
            onResourcesLoadCompleted: e.createCallbackNoArgs('onResourcesLoadCompleted'),
        }),
    ),
    R = (function () {
        const e = 'undefined' != typeof document && document.createElement('link').relList;
        return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
    })(),
    L = {},
    j = function (e, t, s) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            let e = function (e) {
                return Promise.all(
                    e.map((e) =>
                        Promise.resolve(e).then(
                            (e) => ({ status: 'fulfilled', value: e }),
                            (e) => ({ status: 'rejected', reason: e }),
                        ),
                    ),
                );
            };
            const o = document.getElementsByTagName('link'),
                n = document.querySelector('meta[property=csp-nonce]'),
                l = n?.nonce || n?.getAttribute('nonce');
            r = e(
                t.map((e) => {
                    if (
                        ((e = (function (e, t) {
                            return new URL(e, t).href;
                        })(e, s)),
                        e in L)
                    )
                        return;
                    L[e] = !0;
                    const t = e.endsWith('.css'),
                        r = t ? '[rel="stylesheet"]' : '';
                    if (s)
                        for (let s = o.length - 1; s >= 0; s--) {
                            const r = o[s];
                            if (r.href === e && (!t || 'stylesheet' === r.rel)) return;
                        }
                    else if (document.querySelector(`link[href="${e}"]${r}`)) return;
                    const n = document.createElement('link');
                    return (
                        (n.rel = t ? 'stylesheet' : R),
                        t || (n.as = 'script'),
                        (n.crossOrigin = ''),
                        (n.href = e),
                        l && n.setAttribute('nonce', l),
                        document.head.appendChild(n),
                        t
                            ? new Promise((t, s) => {
                                  (n.addEventListener('load', t),
                                      n.addEventListener('error', () =>
                                          s(new Error(`Unable to preload CSS for ${e}`)),
                                      ));
                              })
                            : void 0
                    );
                }),
            );
        }
        function o(e) {
            const t = new Event('vite:preloadError', { cancelable: !0 });
            if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
        }
        return r.then((t) => {
            for (const e of t || []) 'rejected' === e.status && o(e.reason);
            return e().catch(o);
        });
    },
    A = e.lazy(() =>
        j(() => import('../../../chunks/index.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]), import.meta.url),
    ),
    y = e.lazy(() =>
        j(() => import('../../../chunks/index2.js'), __vite__mapDeps([0, 1, 2, 4, 5, 6, 9, 10]), import.meta.url),
    ),
    D = e.lazy(() =>
        j(
            () => import('../../../chunks/index3.js'),
            __vite__mapDeps([0, 1, 2, 3, 11, 12, 4, 13, 14, 15]),
            import.meta.url,
        ),
    ),
    I = e.lazy(() =>
        j(() => import('../../../chunks/index4.js'), __vite__mapDeps([0, 1, 2, 3, 11, 12, 14, 16]), import.meta.url),
    ),
    b = { [E.NO_BOXES]: y, [E.HAS_BOXES]: A, [E.SINGLE_BOX_REWARDS]: D, [E.MULTIPLE_BOXES_REWARDS]: I };
function w({ viewID: t }) {
    const s = b[t];
    return s
        ? o.jsx(e.Suspense, { fallback: o.jsx('div', {}), children: o.jsx(s, {}) })
        : (console.error('Unreachable code: ViewResolver'), null);
}
const x = 'App_e0d56588',
    B = 'App_overlay_cc29bca1';
const X = n(function () {
    const { model: t, controls: s } = O(),
        r = t.subViewIDs.get();
    return (
        ((t, s) => {
            const r = l(t);
            e.useEffect(() => {
                s(Boolean(r), t);
            }, [t]);
        })(S(r), s.setOverlayState),
        e.useEffect(() => i(() => s.onResourcesLoadCompleted())),
        o.jsx('div', {
            className: x,
            children: u(r, (e) =>
                f(e)
                    ? o.jsx('div', { className: B, children: o.jsx(w, { viewID: e }) }, e)
                    : o.jsx(w, { viewID: e }, e),
            ),
        })
    );
});
d(o.jsx(v, { children: o.jsx(m, { children: o.jsx(X, {}) }) }));
export { S as h, O as u };
