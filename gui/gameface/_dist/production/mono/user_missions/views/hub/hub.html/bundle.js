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
/* empty css                       */ /* empty css                    */ const b = {
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
            const e = document.getElementsByTagName('link'),
                r = document.querySelector('meta[property=csp-nonce]'),
                u = (null == r ? void 0 : r.nonce) || (null == r ? void 0 : r.getAttribute('nonce'));
            s = Promise.allSettled(
                t.map((t) => {
                    if (
                        ((t = (function (e, t) {
                            return new URL(e, t).href;
                        })(t, n)),
                        t in f)
                    )
                        return;
                    f[t] = !0;
                    const s = t.endsWith('.css'),
                        r = s ? '[rel="stylesheet"]' : '';
                    if (!!n)
                        for (let n = e.length - 1; n >= 0; n--) {
                            const r = e[n];
                            if (r.href === t && (!s || 'stylesheet' === r.rel)) return;
                        }
                    else if (document.querySelector(`link[href="${t}"]${r}`)) return;
                    const o = document.createElement('link');
                    return (
                        (o.rel = s ? 'stylesheet' : p),
                        s || (o.as = 'script'),
                        (o.crossOrigin = ''),
                        (o.href = t),
                        u && o.setAttribute('nonce', u),
                        document.head.appendChild(o),
                        s
                            ? new Promise((e, n) => {
                                  (o.addEventListener('load', e),
                                      o.addEventListener('error', () =>
                                          n(new Error(`Unable to preload CSS for ${t}`)),
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
    [k, y] = u()(
        ({ observableModel: e }) => ({ ...e.primitives(['currentTabId']), tabsList: e.array('tabsList') }),
        ({ externalModel: e }) => ({
            onTabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
            onContentLayoutChanged: e.createCallback((e, t) => ({ y: e, height: t }), 'onContentLayoutChanged'),
        }),
    ),
    C = 'Hub_a7d012e0',
    E = 'Hub_tabsContainer_e39aa10a',
    j = 'Hub_tab_5c9743bd',
    q = 'Hub_content_39db32f3',
    w = { basic: e.lazy(() => v(() => import('../../../chunks/index.js'), [], import.meta.url)) },
    L = t(() => {
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
            className: C,
            children: [
                s.jsx(l, {
                    active: u,
                    theme: 'primary',
                    size: m.tabSize,
                    onActiveChange: t.onTabChange,
                    children: s.jsx(l.Switcher, {
                        classNames: { base: E },
                        children: i(r.tabsList.get(), (e) =>
                            s.jsx(l.Tab, { tabId: e.id, className: j, children: e.title }, `tab_${e.id}`),
                        ),
                    }),
                }),
                s.jsx('div', {
                    className: q,
                    ref: _,
                    children:
                        w[u] && s.jsx(n.Suspense, { fallback: s.jsx('div', {}), children: e.createElement(w[u]) }),
                }),
            ],
        });
    });
m(new _().addWithProps(h, { soundsOverrides: g }).add(k).render(s.jsx(L, {}))).then(d);
export { b as s };
