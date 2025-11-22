import { n as s, j as e, e as o } from '../../../../../chunks/vendor.js';
import { i as a, c as i, a8 as l, q as c, B as t, t as n, s as r, b as p, U as d } from '../../../../../chunks/lib.js';
const [b, _] = a()(
        ({ observableModel: s }) => ({ vehicle: s.object('vehicle'), ...s.primitives(['isPopUp', 'isDisabled']) }),
        ({ externalModel: s }) => ({
            close: s.createCallbackNoArgs('onClose'),
            goToProgression: s.createCallbackNoArgs('onGoToProgression'),
        }),
    ),
    h = 'App_8652b774',
    m = 'App_base__popUp_a232d9c9',
    g = 'App_close_1c04e534',
    j = 'App_text_61805f6f',
    v = 'App_icon_5880875b',
    x = 'App_button_aa1b2d3f',
    k = 'App_buttonText_6f445e5d',
    A = R.strings.veh_skill_tree.notifications.perkAvailable,
    f = s(function () {
        const { model: s, controls: a } = _(),
            p = s.vehicle.get(),
            d = s.isDisabled.get(),
            b = i({ body: A.disabledButtonTooltip() });
        return e.jsx(l, {
            children: e.jsxs('div', {
                className: o(h, s.isPopUp.get() && m),
                children: [
                    s.isPopUp.get() && e.jsx('div', { className: g, onClick: a.close }),
                    e.jsx('div', { className: j, children: A.title() }),
                    e.jsx(c, { path: `skillTree.notifications.perk_available.vehicles.${p.techName}`, className: v }),
                    e.jsx(t, {
                        ...(d && b),
                        size: r.small,
                        theme: n.secondary,
                        onClick: a.goToProgression,
                        classNames: { base: x },
                        disabled: d,
                        children: e.jsx('div', { className: k, children: A.goToProgression() }),
                    }),
                ],
            }),
        });
    });
p(e.jsx(b, { children: e.jsx(d, { children: e.jsx(f, {}) }) }));
