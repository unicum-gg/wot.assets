import { j as o, A as e } from './vendor.js';
import { dw as i } from './lib.js';
const n = 'TooltipDecorator_decorator_81525906',
    s = 'TooltipDecorator_decoratorInner_5b7cf9de';
function t({ children: t, classNames: d }) {
    return o.jsx(i, {
        children: o.jsx('div', {
            className: e(n, null == d ? void 0 : d.decoratorInner),
            children: o.jsx('div', { className: e(s, null == d ? void 0 : d.decoratorInner), children: t }),
        }),
    });
}
const d = {
    base: 'Tooltips_e158798d',
    heading: 'Tooltips_heading_34f670f8',
    subHeading: 'Tooltips_subHeading_9264106c',
    subHeading__topIndent: 'Tooltips_subHeading__topIndent_17e6ff4e',
    divider: 'Tooltips_divider_6ec5ff3c',
    description: 'Tooltips_description_9264106c',
    description__topIndent: 'Tooltips_description__topIndent_55e3aea5',
};
export { t as T, d as t };
