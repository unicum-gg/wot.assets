import { r as e, o as t, k as o, f as r, j as s, m as n } from '../../../chunks/vendor.js';
import { y as l, q as a, i as c, z as i, m as d, r as u, S as E } from '../../../chunks/lib.js';
var _ = ((e) => (
    (e[(e.NO_BOXES = 0)] = 'NO_BOXES'),
    (e[(e.HAS_BOXES = 1)] = 'HAS_BOXES'),
    (e[(e.SINGLE_BOX_REWARDS = 2)] = 'SINGLE_BOX_REWARDS'),
    (e[(e.MULTIPLE_BOXES_REWARDS = 3)] = 'MULTIPLE_BOXES_REWARDS'),
    e
))(_ || {});
const m = [_.MULTIPLE_BOXES_REWARDS, _.SINGLE_BOX_REWARDS],
    p = [...m],
    S = (e) => p.includes(e),
    f = (e) => a(e, (e) => S(e)),
    h = (e) => m.includes(e),
    [v, O] = c()(
        ({ observableModel: e }) => {
            const r = { root: e.object(), subViewIDs: e.arrayClone('subViewIDs'), overlayClosed: t.box(!1) },
                s = o(() => a(r.subViewIDs.get(), h));
            return { ...r, computes: { awardViewOpened: s } };
        },
        ({ externalModel: e, model: t }) => ({
            setOverlayState: r((e, o) => {
                const r = Boolean(e && !o);
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
    y = function (e, t, o) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            const e = document.getElementsByTagName('link'),
                s = document.querySelector('meta[property=csp-nonce]'),
                n = (null == s ? void 0 : s.nonce) || (null == s ? void 0 : s.getAttribute('nonce'));
            r = Promise.allSettled(
                t.map((t) => {
                    if (
                        ((t = (function (e, t) {
                            return new URL(e, t).href;
                        })(t, o)),
                        t in L)
                    )
                        return;
                    L[t] = !0;
                    const r = t.endsWith('.css'),
                        s = r ? '[rel="stylesheet"]' : '';
                    if (!!o)
                        for (let o = e.length - 1; o >= 0; o--) {
                            const s = e[o];
                            if (s.href === t && (!r || 'stylesheet' === s.rel)) return;
                        }
                    else if (document.querySelector(`link[href="${t}"]${s}`)) return;
                    const l = document.createElement('link');
                    return (
                        (l.rel = r ? 'stylesheet' : R),
                        r || (l.as = 'script'),
                        (l.crossOrigin = ''),
                        (l.href = t),
                        n && l.setAttribute('nonce', n),
                        document.head.appendChild(l),
                        r
                            ? new Promise((e, o) => {
                                  (l.addEventListener('load', e),
                                      l.addEventListener('error', () =>
                                          o(new Error(`Unable to preload CSS for ${t}`)),
                                      ));
                              })
                            : void 0
                    );
                }),
            );
        }
        function s(e) {
            const t = new Event('vite:preloadError', { cancelable: !0 });
            if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
        }
        return r.then((t) => {
            for (const e of t || []) 'rejected' === e.status && s(e.reason);
            return e().catch(s);
        });
    },
    A = e.lazy(() => y(() => import('../../../chunks/index.js'), [], import.meta.url)),
    j = e.lazy(() => y(() => import('../../../chunks/index2.js'), [], import.meta.url)),
    D = e.lazy(() => y(() => import('../../../chunks/index3.js'), [], import.meta.url)),
    I = e.lazy(() => y(() => import('../../../chunks/index4.js'), [], import.meta.url)),
    b = { [_.NO_BOXES]: j, [_.HAS_BOXES]: A, [_.SINGLE_BOX_REWARDS]: D, [_.MULTIPLE_BOXES_REWARDS]: I };
function w({ viewID: t }) {
    const o = b[t];
    return o
        ? s.jsx(e.Suspense, { fallback: s.jsx('div', {}), children: s.jsx(o, {}) })
        : (console.error('Unreachable code: ViewResolver'), null);
}
const x = 'App_e0d56588',
    B = 'App_overlay_cc29bca1';
const X = n(function () {
    const { model: t, controls: o } = O(),
        r = t.subViewIDs.get();
    return (
        ((t, o) => {
            const r = l(t);
            e.useEffect(() => {
                o(Boolean(r), t);
            }, [t]);
        })(f(r), o.setOverlayState),
        e.useEffect(() => i(() => o.onResourcesLoadCompleted())),
        s.jsx('div', {
            className: x,
            children: d(r, (e) =>
                S(e)
                    ? s.jsx('div', { className: B, children: s.jsx(w, { viewID: e }) }, e)
                    : s.jsx(w, { viewID: e }, e),
            ),
        })
    );
});
u(s.jsx(v, { children: s.jsx(E, { children: s.jsx(X, {}) }) }));
export { f as h, O as u };
