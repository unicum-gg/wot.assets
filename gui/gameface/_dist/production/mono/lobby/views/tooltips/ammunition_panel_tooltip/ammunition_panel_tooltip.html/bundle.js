import { f as i, p as t, r as e, j as a } from '../../../../chunks/vendor.js';
import { a as s, al as n, I as o, F as l, z as r } from '../../../../chunks/lib.js';
import { d as p } from '../../../../chunks/TooltipDecorator2.js';
const [m, c] = s()(
        ({ observableModel: i }) => ({
            ...{
                root: i.object(),
                ...i.primitives([
                    'icon',
                    'title',
                    'description',
                    'animation',
                    'subtitle',
                    'text',
                    'additionalInfoText',
                ]),
            },
        }),
        n,
    ),
    d = {
        base: 'AmmunitionPanelTooltipApp_318e8047',
        base__hasAnimation: 'AmmunitionPanelTooltipApp_base__hasAnimation_a99cfcee',
        icon: 'AmmunitionPanelTooltipApp_icon_4c6a279a',
        title: 'AmmunitionPanelTooltipApp_title_4cdb1902',
        description: 'AmmunitionPanelTooltipApp_description_4cfa6afa',
        animation: 'AmmunitionPanelTooltipApp_animation_41c50674',
        textWrapper: 'AmmunitionPanelTooltipApp_textWrapper_3931928',
        additionalTextWrapper: 'AmmunitionPanelTooltipApp_additionalTextWrapper_a2862797',
        subtitle: 'AmmunitionPanelTooltipApp_subtitle_82714034',
        text: 'AmmunitionPanelTooltipApp_text_50ae38e0',
    },
    x = o.resolve('strings'),
    _ = i(d.textWrapper, d.textWrapper__hasGradient),
    u = t(() => {
        const { model: t } = c(),
            s = t.animation.get(),
            n = t.title.get(),
            o = t.icon.get(),
            r = t.description.get(),
            p = t.subtitle.get(),
            m = t.text.get(),
            u = t.additionalInfoText.get(),
            h = { backgroundImage: `url(${o})` },
            j = i(d.base, s && d.base__hasAnimation);
        return (
            e.useEffect(() => {
                s && swfPlayer.play(s);
            }, [s]),
            a.jsxs('div', {
                className: j,
                children: [
                    a.jsx('div', { className: d.icon, style: h }),
                    a.jsx('div', { className: d.title, children: n }),
                    a.jsx('div', { className: d.description, children: r }),
                    s
                        ? a.jsxs(a.Fragment, {
                              children: [
                                  a.jsx('img', {
                                      className: d.animation,
                                      src: `swf://white_tiger/gui/flash/${s}?name=${s}`,
                                  }),
                                  a.jsxs('div', {
                                      className: d.textWrapper,
                                      children: [
                                          a.jsx('div', { className: d.subtitle, children: p }),
                                          a.jsx(l, { text: m, classMix: d.text }),
                                      ],
                                  }),
                                  a.jsxs('div', {
                                      className: d.additionalTextWrapper,
                                      children: [
                                          a.jsx('div', {
                                              className: d.subtitle,
                                              children: x.readOrEmpty(
                                                  'white_tiger_lobby.ammunitionTooltipView.additionalInfoTitle',
                                              ),
                                          }),
                                          a.jsx(l, { text: u, classMix: d.text }),
                                      ],
                                  }),
                              ],
                          })
                        : a.jsxs('div', {
                              className: _,
                              children: [
                                  a.jsx('div', { className: d.subtitle, children: p }),
                                  a.jsx('div', { className: d.text, children: m }),
                              ],
                          }),
                ],
            })
        );
    });
r(a.jsx(m, { children: a.jsx(p, { children: a.jsx(u, {}) }) }));
