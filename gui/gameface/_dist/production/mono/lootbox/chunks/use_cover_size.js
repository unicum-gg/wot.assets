import { j as e, e as t, r as s } from './vendor.js';
import { an as a } from './lib.js';
import { T as o } from './title.js';
import { B as i } from './resources.js';
const r = {
        HAS_BOXES: { context: 'model.hasBoxes' },
        NO_BOXES: { context: 'model.noBoxes' },
        SINGLE_REWARD: { context: 'model.singleBoxRewards' },
        MULTIPLE_REWARD: { context: 'model.multipleBoxesRewards' },
    },
    n = {
        root: 'SubTitle_root_c315a83c',
        base: 'SubTitle_183bed89',
        base__center: 'SubTitle_base__center_849a659e',
        base__left: 'SubTitle_base__left_25e95ddb',
        base__right: 'SubTitle_base__right_43c92756',
        fadeIn: 'SubTitle_fadeIn_c315a83c',
    };
var l = ((e) => ((e.Center = 'center'), (e.Left = 'left'), (e.Right = 'right'), e))(l || {});
function _({ text: s, alignType: a = 'left', className: o }) {
    return e.jsx('div', { className: t(n.base, n[`base__${a}`], o), children: s });
}
const m = 'Header_ee5a2d07';
function c({ title: s, subTitle: a, subTitleAlignType: i = l.Left, className: r }) {
    return e.jsxs('div', {
        className: t(m, r),
        children: [e.jsx(o, { text: s }), a && e.jsx(_, { text: a, alignType: i })],
    });
}
const d = { image: 'img', video: 'video' },
    b = { [i.Common]: i.Common, [i.Rare]: i.Rare },
    u = (e) => {
        const { width: t, height: o } = a(),
            i = t / o;
        return s.useMemo(
            () => (e >= i ? { width: o * e + 'rem', height: `${o}rem` } : { width: `${t}rem`, height: t / e + 'rem' }),
            [o, i, t, e],
        );
    };
export { l as A, c as H, r as M, d as R, _ as S, b, u };
