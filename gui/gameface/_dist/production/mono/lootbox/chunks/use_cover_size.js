import { j as e, e as t, r as s } from './vendor.js';
import { an as a } from './lib.js';
import { T as i } from './title.js';
import { B as r } from './resources.js';
const o = {
        HAS_BOXES: { context: 'model.hasBoxes' },
        NO_BOXES: { context: 'model.noBoxes' },
        SINGLE_REWARD: { context: 'model.singleBoxRewards' },
        MULTIPLE_REWARD: { context: 'model.multipleBoxesRewards' },
    },
    n = {
        base: 'SubTitle_183bed89',
        base__center: 'SubTitle_base__center_849a659e',
        base__left: 'SubTitle_base__left_25e95ddb',
        base__right: 'SubTitle_base__right_43c92756',
        fadeIn: 'SubTitle_fadeIn_c315a83c',
    };
var l = ((e) => ((e.Center = 'center'), (e.Left = 'left'), (e.Right = 'right'), e))(l || {});
function m({ text: s, alignType: a = 'left', className: i }) {
    return e.jsx('div', { className: t(n.base, n[`base__${a}`], i), children: s });
}
const _ = 'Header_ee5a2d07';
function c({ title: s, subTitle: a, subTitleAlignType: r = l.Left, className: o }) {
    return e.jsxs('div', {
        className: t(_, o),
        children: [e.jsx(i, { text: s }), a && e.jsx(m, { text: a, alignType: r })],
    });
}
const d = { image: 'img', video: 'video' },
    b = { [r.Common]: r.Common, [r.Rare]: r.Rare },
    h = (e) => {
        const { width: t, height: i } = a(),
            r = t / i;
        return s.useMemo(
            () => (e >= r ? { width: i * e + 'rem', height: `${i}rem` } : { width: `${t}rem`, height: t / e + 'rem' }),
            [i, r, t, e],
        );
    };
export { l as A, c as H, o as M, d as R, m as S, b, h as u };
