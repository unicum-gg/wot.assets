import { j as o } from '../../../../chunks/vendor.js';
import { a as s, al as e, L as i, z as l } from '../../../../chunks/lib.js';
import { d as c } from '../../../../chunks/TooltipDecorator2.js';
const [t, a] = s()(({ observableModel: o }) => ({ root: o.object() }), e),
    r = 'CrewInfoTooltipApp_34a5ebc4',
    n = 'CrewInfoTooltipApp_title_8e12d100',
    p = 'CrewInfoTooltipApp_subtitle_3dc80cdc',
    d = 'CrewInfoTooltipApp_mainIcon_e1955a38',
    m = 'CrewInfoTooltipApp_mainIconDivider_ad1334b9',
    j = 'CrewInfoTooltipApp_description_838a54c5',
    _ = 'CrewInfoTooltipApp_iconsTitle_8890fca2',
    f = () => {
        const { model: s } = a(),
            { title: e, subtitle: l, mainIcon: c, description: t, iconsTitle: f } = s.root.get(),
            x = { backgroundImage: `url(${c})` };
        return o.jsxs('div', {
            className: r,
            children: [
                e && o.jsx('div', { className: n, children: e }),
                l && o.jsx('div', { className: p, children: l }),
                c && o.jsx('div', { className: d, style: x, children: o.jsx('div', { className: m }) }),
                t && o.jsx(i, { className: j, split: !0, text: t }),
                f && o.jsx('div', { className: _, children: f }),
            ],
        });
    };
l(o.jsx(t, { children: o.jsx(c, { children: o.jsx(f, {}) }) }));
