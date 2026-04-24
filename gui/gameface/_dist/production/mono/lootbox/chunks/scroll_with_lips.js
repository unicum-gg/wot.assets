import { j as e, r as s, e as a } from './vendor.js';
import { a7 as l, a8 as t, a9 as o, aa as c, ab as i } from './lib.js';
const n = 'ScrollWithLips_eb8cfe07',
    r = 'ScrollWithLips_lip_a43ad913',
    d = 'ScrollWithLips_lip__top_67a886ef',
    p = 'ScrollWithLips_lip__bottom_3fb8ae46',
    _ = 'ScrollWithLips_scroll_8e476a4',
    f = 'ScrollWithLips_scroll__loaded_76bcfcc5',
    m = 'ScrollWithLips_scrollContent_e516a6a5',
    h = 'Idle',
    S = 'Start',
    b = 'Between',
    u = 'End';
const v =
    ((g = function ({ classNames: l, children: v, lipImage: g }) {
        const [j, x] = s.useState(b),
            { api: W } = t(),
            L = j !== h,
            N = o(() => {
                const [e, s] = W.getBounds(),
                    a = W.animationScroll.scrollPosition.goal,
                    l = W.getContainerSize(),
                    t = W.getWrapperSize();
                if (l && t)
                    if (l !== t)
                        switch (a) {
                            case e:
                                x(S);
                                break;
                            case s:
                                x(u);
                                break;
                            default:
                                x(b);
                        }
                    else x(h);
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
                className: a(n, l?.base || ''),
                children: [
                    j !== S &&
                        j !== h &&
                        e.jsx('div', { className: a(r, d, l?.lip || ''), style: { backgroundImage: `url(${g})` } }),
                    j !== u &&
                        j !== h &&
                        e.jsx('div', { className: a(r, p, l?.lip || ''), style: { backgroundImage: `url(${g})` } }),
                    e.jsx(c, { className: a(m, l?.scrollContent || ''), children: v }),
                    e.jsx(i, { classNames: { base: a(_, L && f, l?.scrollBar) } }),
                ],
            })
        );
    }),
    (s) => e.jsx(l, { children: e.jsx(g, { ...s }) }));
var g;
export { v as S };
