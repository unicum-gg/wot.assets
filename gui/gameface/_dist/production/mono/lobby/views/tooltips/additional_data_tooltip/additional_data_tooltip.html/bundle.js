import { j as a } from '../../../../chunks/vendor.js';
import { de as s, r as i } from '../../../../chunks/lib.js';
const t = 'AdditionalDataTooltipApp_aa694135',
    d = 'AdditionalDataTooltipApp_header_103f53ff',
    o = 'AdditionalDataTooltipApp_item_23a91b2d',
    l = 'AdditionalDataTooltipApp_dot_f970fa79',
    e = 'AdditionalDataTooltipApp_label_dd09314e',
    n = function () {
        return a.jsx(s, {
            'data-name': 'AdditionalDataTooltip',
            children: a.jsxs(s.Decorator, {
                className: t,
                children: [
                    a.jsx('div', { className: d, children: R.strings.last_stand_tooltips.rewardPath.info.header() }),
                    a.jsxs('div', {
                        className: o,
                        children: [
                            a.jsx('div', { className: l }),
                            a.jsx('div', {
                                className: e,
                                children: R.strings.last_stand_tooltips.rewardPath.info.first(),
                            }),
                        ],
                    }),
                    a.jsxs('div', {
                        className: o,
                        children: [
                            a.jsx('div', { className: l }),
                            a.jsx('div', {
                                className: e,
                                children: R.strings.last_stand_tooltips.rewardPath.info.second(),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
i(a.jsx(n, {}));
