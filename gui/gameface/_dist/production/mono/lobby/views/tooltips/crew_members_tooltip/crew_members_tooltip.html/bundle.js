import { j as s, w as e } from '../../../../chunks/vendor.js';
import { r as i } from '../../../../chunks/lib.js';
import { t as a, T as c } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const r = 'App_4fcbfa35',
    d = 'App_crewIcon_f83bbe77',
    l = 'App_title_95edd6ea',
    n = 'App_perk_74555613',
    o = 'App_slots_cb654453',
    p = 'App_slotImage_9f9978b0',
    t = () =>
        s.jsxs('div', {
            className: e(a.base, r),
            children: [
                s.jsx('div', { className: a.heading, children: R.strings.comp7_ext.yearlyRewards.rewards.crew() }),
                s.jsx('div', {
                    className: e(a.subHeading, a.subHeading__topIndent),
                    children: R.strings.comp7_ext.crewMembersTooltip.subHeading(),
                }),
                s.jsx('div', { className: d }),
                s.jsx('div', {
                    className: e(a.description, a.description__topIndent),
                    children: R.strings.comp7_ext.crewMembersTooltip.description(),
                }),
                s.jsx('div', { className: e(l), children: R.strings.comp7_ext.crewMembersTooltip.perks() }),
                s.jsxs('div', {
                    className: o,
                    children: [
                        s.jsx('div', { className: n, children: s.jsx('div', { className: p }) }),
                        s.jsx('div', { className: n, children: s.jsx('div', { className: p }) }),
                        s.jsx('div', { className: n, children: s.jsx('div', { className: p }) }),
                    ],
                }),
            ],
        });
i(s.jsx(c, { children: s.jsx(t, {}) }));
