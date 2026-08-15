import { j as s, a3 as e } from '../../../../chunks/vendor.js';
import { d2 as i } from '../../../../chunks/lib.js';
import { T as c } from '../../../../chunks/tooltip_decorator.js';
import { t as r } from '../../../../chunks/tooltips.module.js';
/* empty css                        */ const a = 'App_4fcbfa35',
    o = 'App_crewIcon_f83bbe77',
    d = 'App_title_bd033b57',
    p = 'App_title__second_5cbf6889',
    t = 'App_perk_0',
    l = 'App_zeroPerk_fecfd061',
    n = 'App_slots_cb654453',
    m = 'App_slotImage_9f9978b0',
    _ = () =>
        s.jsxs('div', {
            className: e(r.base, a),
            children: [
                s.jsx('div', { className: r.heading, children: R.strings.comp7_ext.yearlyRewards.rewards.crew() }),
                s.jsx('div', {
                    className: e(r.subHeading, r.subHeading__topIndent),
                    children: R.strings.comp7_ext.crewMembersTooltip.subHeading(),
                }),
                s.jsx('div', { className: o }),
                s.jsx('div', {
                    className: e(r.description, r.description__topIndent),
                    children: R.strings.comp7_ext.crewMembersTooltip.description(),
                }),
                s.jsx('div', { className: d, children: R.strings.comp7_ext.crewMembersTooltip.zeroPerks() }),
                s.jsx('div', { className: l }),
                s.jsx('div', { className: e(d, p), children: R.strings.comp7_ext.crewMembersTooltip.perks() }),
                s.jsxs('div', {
                    className: n,
                    children: [
                        s.jsx('div', { className: t, children: s.jsx('div', { className: m }) }),
                        s.jsx('div', { className: t, children: s.jsx('div', { className: m }) }),
                    ],
                }),
            ],
        });
i(s.jsx(c, { children: s.jsx(_, {}) }));
