import { j as e, r as s, e as l } from './vendor.js';
import { a6 as a, a7 as o, a8 as t, a9 as i, aa as n } from './lib.js';
const c = 'ScrollWithLips_eb8cfe07',
    r = 'ScrollWithLips_lip_a43ad913',
    d = 'ScrollWithLips_lip__top_67a886ef',
    p = 'ScrollWithLips_lip__bottom_3fb8ae46',
    _ = 'ScrollWithLips_scroll_8e476a4',
    f = 'ScrollWithLips_scroll__loaded_76bcfcc5',
    u = 'ScrollWithLips_scrollContent_e516a6a5',
    v = 'Idle',
    m = 'Start',
    h = 'Between',
    S = 'End';
const b =
    ((g = function ({ classNames: a, children: b, lipImage: g }) {
        const [j, x] = s.useState(h),
            { api: W } = o(),
            L = j !== v,
            N = t(() => {
                const [e, s] = W.getBounds(),
                    l = W.animationScroll.scrollPosition.goal,
                    a = W.getContainerSize(),
                    o = W.getWrapperSize();
                if (a && o)
                    if (a !== o)
                        switch (l) {
                            case e:
                                x(m);
                                break;
                            case s:
                                x(S);
                                break;
                            default:
                                x(h);
                        }
                    else x(v);
            });
        return (
            s.useEffect(
                () => (
                    W.events.on('change', N),
                    W.events.on('recalculateContent', N),
                    W.events.on('resizeHandled', N),
                    () => {
                        (W.events.off('change', N),
                            W.events.off('recalculateContent', N),
                            W.events.off('resizeHandled', N));
                    }
                ),
                [W.events, N],
            ),
            e.jsxs('div', {
                className: l(c, (null == a ? void 0 : a.base) || ''),
                children: [
                    j !== m &&
                        j !== v &&
                        e.jsx('div', {
                            className: l(r, d, (null == a ? void 0 : a.lip) || ''),
                            style: { backgroundImage: `url(${g})` },
                        }),
                    j !== S &&
                        j !== v &&
                        e.jsx('div', {
                            className: l(r, p, (null == a ? void 0 : a.lip) || ''),
                            style: { backgroundImage: `url(${g})` },
                        }),
                    e.jsx(i, { className: l(u, (null == a ? void 0 : a.scrollContent) || ''), children: b }),
                    e.jsx(n, { classNames: { base: l(_, L && f, null == a ? void 0 : a.scrollBar) } }),
                ],
            })
        );
    }),
    (s) => e.jsx(a, { children: e.jsx(g, { ...s }) }));
var g;
export { b as S };
