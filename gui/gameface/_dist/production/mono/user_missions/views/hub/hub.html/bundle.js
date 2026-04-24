const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f || (m.f = ['../../../lib/lib.css', '../../../index/index.css', '../../../global/global.css']),
) => i.map((i) => d[i]);
import { R as e, q as t, r as n, j as s } from '../../../chunks/vendor.js';
import {
    c as r,
    i as u,
    a as o,
    u as a,
    T as l,
    m as i,
    s as c,
    J as _,
    U as h,
    r as m,
    n as d,
} from '../../../chunks/lib.js';
/* empty css                    */ const b = {
        umg_hub_quest_progress: 'umg_hub_quest_progress',
        umg_hub_quest_complete: 'umg_hub_quest_complete',
        umg_hub_highlight: 'umg_hub_highlight',
        umg_hub_unlock_bonus: 'umg_hub_unlock_bonus',
        umg_hub_unlock_premium: 'umg_hub_unlock_premium',
        umg_hub_quest_reroll: 'umg_hub_quest_reroll',
    },
    g = {
        [b.umg_hub_quest_progress]: r(b.umg_hub_quest_progress),
        [b.umg_hub_quest_complete]: r(b.umg_hub_quest_complete),
        [b.umg_hub_highlight]: r(b.umg_hub_highlight),
        [b.umg_hub_unlock_bonus]: r(b.umg_hub_unlock_bonus),
        [b.umg_hub_unlock_premium]: r(b.umg_hub_unlock_premium),
        [b.umg_hub_quest_reroll]: r(b.umg_hub_quest_reroll),
    },
    p = (function () {
        const e = 'undefined' != typeof document && document.createElement('link').relList;
        return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
    })(),
    f = {},
    v = function (e, t, n) {
        let s = Promise.resolve();
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
            const r = document.getElementsByTagName('link'),
                u = document.querySelector('meta[property=csp-nonce]'),
                o = u?.nonce || u?.getAttribute('nonce');
            s = e(
                t.map((e) => {
                    if (
                        ((e = (function (e, t) {
                            return new URL(e, t).href;
                        })(e, n)),
                        e in f)
                    )
                        return;
                    f[e] = !0;
                    const t = e.endsWith('.css'),
                        s = t ? '[rel="stylesheet"]' : '';
                    if (n)
                        for (let n = r.length - 1; n >= 0; n--) {
                            const s = r[n];
                            if (s.href === e && (!t || 'stylesheet' === s.rel)) return;
                        }
                    else if (document.querySelector(`link[href="${e}"]${s}`)) return;
                    const u = document.createElement('link');
                    return (
                        (u.rel = t ? 'stylesheet' : p),
                        t || (u.as = 'script'),
                        (u.crossOrigin = ''),
                        (u.href = e),
                        o && u.setAttribute('nonce', o),
                        document.head.appendChild(u),
                        t
                            ? new Promise((t, n) => {
                                  (u.addEventListener('load', t),
                                      u.addEventListener('error', () =>
                                          n(new Error(`Unable to preload CSS for ${e}`)),
                                      ));
                              })
                            : void 0
                    );
                }),
            );
        }
        function r(e) {
            const t = new Event('vite:preloadError', { cancelable: !0 });
            if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
        }
        return s.then((t) => {
            for (const e of t || []) 'rejected' === e.status && r(e.reason);
            return e().catch(r);
        });
    },
    k = 'basic',
    [C, y] = u()(
        ({ observableModel: e }) => ({ ...e.primitives(['currentTabId']), tabsList: e.arrayClone('tabsList') }),
        ({ externalModel: e }) => ({
            onTabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
            onContentLayoutChanged: e.createCallback((e, t) => ({ y: e, height: t }), 'onContentLayoutChanged'),
        }),
    ),
    E = 'Hub_a7d012e0',
    j = 'Hub_tabsContainer_e39aa10a',
    q = 'Hub_tab_5c9743bd',
    w = 'Hub_content_39db32f3',
    L = { [k]: e.lazy(() => v(() => import('../../../chunks/index.js'), __vite__mapDeps([0, 1, 2]), import.meta.url)) },
    x = t(() => {
        const { controls: t, model: r } = y(),
            u = r.currentTabId.get(),
            _ = n.useRef(null),
            h = n.useCallback(() => {
                o(() =>
                    o(() => {
                        if (_.current) {
                            const e = _.current.getBoundingClientRect(),
                                n = viewEnv.getScale();
                            t.onContentLayoutChanged(Math.floor(e.y / n), Math.floor(e.height / n));
                        }
                    }),
                );
            }, [t]);
        (n.useEffect(
            () => (
                window.addEventListener('resize', h),
                engine.on('clientResized', h),
                () => {
                    (window.removeEventListener('resize', h), engine.off('clientResized', h));
                }
            ),
            [h],
        ),
            n.useEffect(() => {
                h();
            }, [_, h]));
        const m = a({ tabSize: c.small }, { large: { tabSize: c.medium } });
        return s.jsxs('div', {
            className: E,
            children: [
                s.jsx(l, {
                    active: u,
                    theme: 'primary',
                    size: m.tabSize,
                    onActiveChange: t.onTabChange,
                    children: s.jsx(l.Switcher, {
                        classNames: { base: j },
                        children: i(r.tabsList.get(), (e) =>
                            s.jsx(l.Tab, { tabId: e.id, className: q, children: e.title }, `tab_${e.id}`),
                        ),
                    }),
                }),
                s.jsx('div', {
                    className: w,
                    ref: _,
                    children:
                        L[u] && s.jsx(n.Suspense, { fallback: s.jsx('div', {}), children: e.createElement(L[u]) }),
                }),
            ],
        });
    });
m(new _().addWithProps(h, { soundsOverrides: g }).add(C).render(s.jsx(x, {}))).then(d);
export { b as s };
