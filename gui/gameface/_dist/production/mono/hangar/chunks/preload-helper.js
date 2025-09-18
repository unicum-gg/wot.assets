const e = (function () {
        const e = 'undefined' != typeof document && document.createElement('link').relList;
        return e && e.supports && e.supports('modulepreload') ? 'modulepreload' : 'preload';
    })(),
    t = {},
    n = function (n, r, o) {
        let l = Promise.resolve();
        if (r && r.length > 0) {
            const n = document.getElementsByTagName('link'),
                s = document.querySelector('meta[property=csp-nonce]'),
                c = (null == s ? void 0 : s.nonce) || (null == s ? void 0 : s.getAttribute('nonce'));
            l = Promise.allSettled(
                r.map((r) => {
                    if (
                        ((r = (function (e, t) {
                            return new URL(e, t).href;
                        })(r, o)),
                        r in t)
                    )
                        return;
                    t[r] = !0;
                    const l = r.endsWith('.css'),
                        s = l ? '[rel="stylesheet"]' : '';
                    if (!!o)
                        for (let e = n.length - 1; e >= 0; e--) {
                            const t = n[e];
                            if (t.href === r && (!l || 'stylesheet' === t.rel)) return;
                        }
                    else if (document.querySelector(`link[href="${r}"]${s}`)) return;
                    const d = document.createElement('link');
                    return (
                        (d.rel = l ? 'stylesheet' : e),
                        l || (d.as = 'script'),
                        (d.crossOrigin = ''),
                        (d.href = r),
                        c && d.setAttribute('nonce', c),
                        document.head.appendChild(d),
                        l
                            ? new Promise((e, t) => {
                                  (d.addEventListener('load', e),
                                      d.addEventListener('error', () =>
                                          t(new Error(`Unable to preload CSS for ${r}`)),
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
        return l.then((e) => {
            for (const t of e || []) 'rejected' === t.status && s(t.reason);
            return n().catch(s);
        });
    };
export { n as _ };
