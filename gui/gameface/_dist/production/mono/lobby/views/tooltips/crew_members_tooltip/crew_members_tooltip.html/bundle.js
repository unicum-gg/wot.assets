import { j as s, w as e } from '../../../../chunks/vendor.js';
import { aA as i } from '../../../../chunks/lib.js';
import { T as a } from '../../../../chunks/tooltip_decorator.js';
import { t as c } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const r = 'App_4fcbfa35',
    d = 'App_crewIcon_f83bbe77',
    o = 'App_title_95edd6ea',
    l = 'App_perk_74555613',
    t = 'App_slots_cb654453',
    n = 'App_slotImage_9f9978b0',
    p = () =>
        s.jsxs('div', {
            className: e(c.base, r),
            children: [
                s.jsx('div', { className: c.heading, children: R.strings.comp7_ext.yearlyRewards.rewards.crew() }),
                s.jsx('div', {
                    className: e(c.subHeading, c.subHeading__topIndent),
                    children: R.strings.comp7_ext.crewMembersTooltip.subHeading(),
                }),
                s.jsx('div', { className: d }),
                s.jsx('div', {
                    className: e(c.description, c.description__topIndent),
                    children: R.strings.comp7_ext.crewMembersTooltip.description(),
                }),
                s.jsx('div', { className: e(o), children: R.strings.comp7_ext.crewMembersTooltip.perks() }),
                s.jsxs('div', {
                    className: t,
                    children: [
                        s.jsx('div', { className: l, children: s.jsx('div', { className: n }) }),
                        s.jsx('div', { className: l, children: s.jsx('div', { className: n }) }),
                        s.jsx('div', { className: l, children: s.jsx('div', { className: n }) }),
                    ],
                }),
            ],
        });
i(s.jsx(a, { children: s.jsx(p, {}) }));
