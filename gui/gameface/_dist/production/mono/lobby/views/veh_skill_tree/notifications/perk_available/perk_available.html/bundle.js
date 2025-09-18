import { p as s, j as e, e as o } from '../../../../../chunks/vendor.js';
import { i, c as a, a8 as l, l as c, B as t, t as r, s as n, b as p, U as d } from '../../../../../chunks/lib.js';
const [b, _] = i()(
        ({ observableModel: s }) => ({ vehicle: s.object('vehicle'), ...s.primitives(['isPopUp', 'isDisabled']) }),
        ({ externalModel: s }) => ({
            close: s.createCallbackNoArgs('onClose'),
            goToProgression: s.createCallbackNoArgs('onGoToProgression'),
        }),
    ),
    h = 'App_8652b774',
    m = 'App_base__popUp_7c5695f5',
    g = 'App_close_1c04e534',
    j = 'App_text_61805f6f',
    v = 'App_icon_5880875b',
    x = 'App_button_aa1b2d3f',
    f = 'App_buttonText_6f445e5d',
    k = R.strings.veh_skill_tree.notifications.perkAvailable,
    A = s(function () {
        const { model: s, controls: i } = _(),
            p = s.vehicle.get(),
            d = s.isDisabled.get(),
            b = a({ body: k.disabledButtonTooltip() });
        return e.jsx(l, {
            children: e.jsxs('div', {
                className: o(h, s.isPopUp.get() && m),
                children: [
                    s.isPopUp.get() && e.jsx('div', { className: g, onClick: i.close }),
                    e.jsx('div', { className: j, children: k.title() }),
                    e.jsx(c, { path: `skillTree.notifications.perk_available.vehicles.${p.techName}`, className: v }),
                    e.jsx(t, {
                        ...(d && b),
                        size: n.small,
                        theme: r.secondary,
                        onClick: i.goToProgression,
                        classNames: { base: x },
                        disabled: d,
                        children: e.jsx('div', { className: f, children: k.goToProgression() }),
                    }),
                ],
            }),
        });
    });
p(e.jsx(b, { children: e.jsx(d, { children: e.jsx(A, {}) }) }));
