import { r as e, j as a, E as t, i as r, D as s, t as o, f as l, u as n, R as i } from './vendor.js';
import { d5 as c, d6 as d, b7 as m, i as u, l as p, m as x, o as h, d7 as g, al as f } from './lib.js';
const b = (a, t) => {
        const r = a.width / a.height,
            { width: s, height: o } = c();
        return e.useMemo(
            () => (s >= o * r ? s / a.width : o >= s / r ? o / a.height : t),
            [a.height, a.width, t, o, r, s],
        );
    },
    y = 'VideoBackground_videoBackground_1a24cf5e',
    j = 'VideoBackground_video_102f3645',
    k = { width: 1920, height: 1080 };
function N({ className: r, src: s, paused: o, rotated: l = !1, onPlay: n }) {
    const i = b(k, 1),
        c = e.useRef(null),
        u = () => {
            n && n();
        };
    return (
        e.useEffect(() => {
            const e = c.current;
            if (e) return o ? e.pause() : e.play();
        }, [o, c]),
        d.isLow()
            ? null
            : a.jsx('div', {
                  className: t(y, r),
                  style: { transform: `scale(${i}) ${l ? 'rotate(180deg)' : ''}` },
                  children: a.jsx(m, {
                      ref: c,
                      onPlay: u,
                      onTimeUpdate: u,
                      src: s,
                      className: j,
                      loop: !0,
                      autoplay: !0,
                  }),
              })
    );
}
const [_, $] = u()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), parallax: e.array('parallax') },
                t = r(
                    () =>
                        a.root.get().isParallaxEnabled ? x(JSON.parse(a.parallax.get().parallaxStructure), h) : void 0,
                    { equals: p },
                ),
                s = r(() => JSON.parse(a.parallax.get().atlas), { equals: p });
            return { ...a, computes: { parallaxStructureObj: t, atlasObj: s } };
        },
        ({ externalModel: e }) => ({ onSlide: e.createCallback((e) => ({ slideIndex: e }), 'onSlide') }),
    ),
    v = { width: 2560, height: 1440 },
    P = 'AssetItem_7cff1111',
    S = 'AssetItem_sprite_c476eaa9',
    w = 'AssetItem_imgLoader_6b833910',
    O = (e, a, t, r) => {
        const s = a[e.spriteName].frameX,
            o = a[e.spriteName].frameY,
            l = a[e.spriteName].sourceName,
            n = a[e.spriteName].sourceWidth,
            i = a[e.spriteName].sourceHeight;
        return {
            style: {
                width: e.width,
                height: e.height,
                opacity: e.opacity,
                transform: e.transform,
                transformOrigin: e.transformOrigin,
                background: 'no-repeat 50% / 100% 100%',
                backgroundImage: `url('${r}${l}${t}')`,
                backgroundAttachment: 'fixed',
                backgroundPosition: `-${s}rem -${o}rem`,
                backgroundSize: `${n}rem ${i}rem`,
                mixBlendMode: e.mixBlendMode,
            },
            source: { backgroundSource: `${r}${l}${t}` },
        };
    },
    L = s(function ({ loadChecker: e, item: t }) {
        const { model: r } = $(),
            { chunkFileExt: s, chunksAssetsPath: o } = r.parallax.get();
        return a.jsxs('div', {
            className: P,
            children: [
                a.jsx('div', { className: S, style: { ...O(t, r.computes.atlasObj(), s, o).style } }),
                a.jsx('img', {
                    className: w,
                    alt: t.keyName,
                    src: O(t, r.computes.atlasObj(), s, o).source.backgroundSource,
                    onLoad: e,
                }),
            ],
        });
    }),
    A = 'Assets_c481c379',
    I = s(function ({ dioramaLoaded: t }) {
        const { model: r } = $(),
            s = r.computes.parallaxStructureObj(),
            o = s ? s.length : 0,
            l = e.useRef(0),
            n = e.useCallback(() => {
                (l.current++, l.current >= o && (t && t(), (l.current = 0)));
            }, [t, o]);
        return a.jsx('div', {
            className: A,
            children: s && s.map((e, t) => a.jsx(L, { item: e, loadChecker: n }, `${e.slideId}_${e.keyName}_${t}`)),
        });
    }),
    T = s(function ({ children: e }) {
        const { model: t } = $(),
            {
                perspective: r,
                overallScale: s,
                perspectiveOriginX: o,
                perspectiveOriginY: l,
                wrapperHeight: n,
                wrapperWidth: i,
            } = t.parallax.get();
        return a.jsx('div', {
            style: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${s})`,
                perspective: `${r}rem`,
                perspectiveOrigin: `${o}% ${l}%`,
                width: `${i}rem`,
                height: `${n}rem`,
            },
            children: e,
        });
    }),
    C = 'ParallaxContent_b21e1eda',
    B = 'ParallaxContent_asset_b21e1eda',
    E = s(function ({ refParent: e, dioramaLoaded: t }) {
        const { model: r } = $(),
            { xTilt: s, xTiltRange: l, yTilt: n, yTiltRange: i, xSlide: c, ySlide: d } = r.parallax.get(),
            [m] = g({ xTilt: s, xTiltRange: l, yTilt: n, yTiltRange: i }, e);
        return a.jsx(T, {
            children: a.jsx(o.div, {
                style: { x: m.x.to((e) => e * c), y: m.y.to((e) => e * d), rotateX: m.xR, rotateY: m.yR },
                className: C,
                children: a.jsx('div', { className: B, children: a.jsx(I, { dioramaLoaded: t }) }),
            }),
        });
    }),
    M = 'StaticBackground_22188923',
    V = 'StaticBackground_preloader_ebcf28a3';
function X({ className: e, backgroundPath: t, onLoaded: r }) {
    return a.jsx('div', {
        className: l(M, e),
        style: { backgroundImage: `url(${t})` },
        children: r && a.jsx('img', { className: V, onLoad: r, onError: r, src: t, alt: t }),
    });
}
const Y = 'ParallaxApp_a1dd5662',
    q = 'ParallaxApp_blackScreen_29b0a65d',
    H = 'ParallaxApp_contentScale_a9de6486',
    J = 'ParallaxApp_content_f4307e0d',
    W = s(function ({ refParent: t, backgroundPath: r, slideIndex: s, onLoadCompleted: l }) {
        const { model: i, controls: c } = $(),
            d = b(v, 1),
            [m, u] = n(() => ({ from: { opacity: 1 } })),
            p = e.useCallback(() => {
                u.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 100 }, onStart: l });
            }, [u, l]);
        return (
            e.useEffect(() => {
                (c.onSlide(s),
                    u.set({ opacity: 1 }),
                    u.start({
                        from: { opacity: 1 },
                        to: { opacity: 0 },
                        delay: 1e3,
                        config: { duration: 100 },
                        onRest: l,
                    }));
            }, [u, c, l, s]),
            a.jsxs('div', {
                className: Y,
                children: [
                    a.jsx('div', {
                        className: H,
                        style: { transform: `translate(-50%, -50%) scale(${d})` },
                        children: i.root.get().isParallaxEnabled
                            ? a.jsx(E, { dioramaLoaded: p, refParent: t })
                            : a.jsx(X, { className: J, backgroundPath: r, onLoaded: p }),
                    }),
                    a.jsx(o.div, { className: q, style: m }),
                ],
            })
        );
    }),
    z = i.memo(function (t) {
        const r = R.aliases.last_stand.shared.Parallax('resId'),
            s = e.useMemo(() => ({ rootId: r }), [r]);
        return a.jsx(f, { id: r, children: a.jsx(_, { options: s, children: a.jsx(W, { ...t }) }) });
    });
export { z as P, N as V };
