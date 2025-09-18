import { j as e, q as o } from './vendor.js';
import { E as s } from './lib.js';
const n = {
        root: 'CloseButton_root_987cb365',
        base: 'CloseButton_a01d19fe',
        'base__size-medium': 'CloseButton_base__size-medium_293b816e',
        icon: 'CloseButton_icon_2ef0db6e',
    },
    i = 'medium';
function t({ onClick: t, className: a, size: c = i }) {
    const l = s();
    return e.jsx('div', {
        className: o(n.base, n[`base__size-${c}`], a),
        onClick: function () {
            (l.play('click'), t());
        },
        onMouseEnter: function () {
            l.play('mouse-enter');
        },
        children: e.jsx('div', { className: n.icon }),
    });
}
export { t as C };
