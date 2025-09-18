import { j as _, m as e } from './vendor.js';
import { T as c } from './lib.js';
const s = {
    root: 'KeyIcon_root_16346488',
    base: 'KeyIcon_4669906',
    base__c24x24: 'KeyIcon_base__c24x24_e897021e',
    base__grey: 'KeyIcon_base__grey_45fb8cdb',
    base__c28x28: 'KeyIcon_base__c28x28_b4d1f7a5',
    base__c30x30: 'KeyIcon_base__c30x30_88260e1c',
    base__c36x36: 'KeyIcon_base__c36x36_46a30d8a',
    base__c44x44: 'KeyIcon_base__c44x44_21f27034',
    base__c40x40: 'KeyIcon_base__c40x40_90b535f2',
    base__c60x60: 'KeyIcon_base__c60x60_8f74a89d',
    base__c70x70: 'KeyIcon_base__c70x70_90c41c9e',
    base__c86x86: 'KeyIcon_base__c86x86_dffd975c',
    base__c110x110: 'KeyIcon_base__c110x110_b9a2bc63',
};
var a = ((_) => (
    (_.C24x24 = 'c24x24'),
    (_.C28x28 = 'c28x28'),
    (_.C36x36 = 'c36x36'),
    (_.C40x40 = 'c40x40'),
    (_.C44x44 = 'c44x44'),
    (_.C60x60 = 'c60x60'),
    (_.C70x70 = 'c70x70'),
    (_.C86x86 = 'c86x86'),
    (_.C110x110 = 'c110x110'),
    _
))(a || {});
function x({ size: a, gray: x = !1, isTooltipEnable: b = !1, className: o }) {
    return _.jsx(c, {
        contentId: R.views.last_stand.mono.lobby.tooltips.key_tooltip('resId'),
        isEnabled: b,
        children: _.jsx('div', { className: e(s.base, s[`base__${a}`], x && s.base__grey, o) }),
    });
}
x.sizes = a;
export { x as K, a };
