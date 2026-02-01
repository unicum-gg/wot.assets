const n = R.images.fun_random.gui.maps.icons.feature.asset_packs,
    s = 'R.images.fun_random.gui.maps.icons.feature',
    e = 'undefined';
function t(n, s) {
    return n
        ? 'string' == typeof s
            ? 'string' != typeof n
                ? n.$dyn(s)
                : null
            : s.reduce((n, s) => ('string' != typeof n ? n.$dyn(s) : ''), n)
        : (console.warn('FunRandom.combineRPaths: base folder empty: '), null);
}
function o(n, { poFileName: s, assetsPointer: o, isSubMode: r = !1 } = {}) {
    const a = s ? R.strings.$dyn(s) : R.strings.fun_random;
    if (!a || 'string' == typeof a) throw Error("Incorrect 'poFileName' argument");
    const i = r ? 'sub_modes' : 'modes',
        d = a.$dyn(i),
        u = (o ? (null == d ? void 0 : d.$dyn(o)) : a) || (null == d ? void 0 : d.$dyn(e));
    if (!n) return { staticTexts: a, dynamicTexts: u };
    return { staticTexts: t(a, n), dynamicTexts: t(u, n) };
}
function r(s, t) {
    const o = t ? 'sub_modes' : 'modes',
        r = n.$dyn(o);
    return r.$dyn(s) ?? r.$dyn(e);
}
function a(t, o) {
    const r = 'modes';
    return n.$dyn(r).$dyn(t) ? `${s}.asset_packs.${r}.${t}` : `${s}.asset_packs.${r}.${e}`;
}
export { r as a, a as b, o as g };
