import { j as r, J as o } from './vendor.js';
import { dZ as e } from './lib.js';
const n = 'TooltipDecorator_decorator_81525906',
    s = 'TooltipDecorator_decoratorInner_5b7cf9de';
function a({ children: a, classNames: c }) {
    return r.jsx(e, {
        children: r.jsx('div', {
            className: o(n, null == c ? void 0 : c.decoratorInner),
            children: r.jsx('div', { className: o(s, null == c ? void 0 : c.decoratorInner), children: a }),
        }),
    });
}
export { a as T };
