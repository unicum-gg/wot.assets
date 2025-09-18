import { s as e, r as a, j as s, m as t } from '../../../chunks/vendor.js';
import {
    i as r,
    s as n,
    a5 as i,
    a6 as o,
    J as c,
    a4 as l,
    a7 as d,
    a8 as p,
    v as _,
    F as m,
    C as b,
    B as x,
    t as u,
    P as g,
} from '../../../chunks/lib.js';
const [h, w] = r()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({
            goToExterior: e.createCallbackNoArgs('goToExterior'),
            goToGarage: e.createCallbackNoArgs('goToGarage'),
        }),
    ),
    A = {
        root: 'RewardScreenApp_root_7bb1de4a',
        base: 'RewardScreenApp_f4352aa6',
        backgroundAlpha: 'RewardScreenApp_backgroundAlpha_7bb1de4a',
        closeButton: 'RewardScreenApp_closeButton_65b978ce',
        animationWrapper: 'RewardScreenApp_animationWrapper_d08bcf8e',
        animation: 'RewardScreenApp_animation_c90150c2',
        animation__hidden: 'RewardScreenApp_animation__hidden_ef8c0b0f',
        icon: 'RewardScreenApp_icon_7c97eda0',
        itemEffect: 'RewardScreenApp_itemEffect_7bb1de4a',
        content: 'RewardScreenApp_content_2ba4fc1c',
        footer: 'RewardScreenApp_footer_196e3e7a',
        textMask: 'RewardScreenApp_textMask_7bb1de4a',
        footer__epic: 'RewardScreenApp_footer__epic_600ee0',
        title: 'RewardScreenApp_title_a402c05c',
        subTitle: 'RewardScreenApp_subTitle_c0799bab',
        buttons: 'RewardScreenApp_buttons_fff5d070',
        button: 'RewardScreenApp_button_53d627a8',
    },
    S = R.strings.vehicle_customization.customization,
    f = {
        [u.extraSmall]: 's400x300',
        [u.small]: 's400x300',
        [u.medium]: 's400x300',
        [u.large]: 's600x450',
        [u.extraLarge]: 's900x675',
    },
    j = e(() => {
        const { model: e } = w(),
            { name: r, title: u, rarity: g } = e.root.get(),
            { breakpoint: h } = n(),
            [j, y] = a.useState(!0);
        i();
        const v = h.weight <= o.small.weight ? c.small : c.medium;
        return s.jsxs('div', {
            className: A.base,
            children: [
                s.jsx('div', {
                    className: A.closeButton,
                    children: s.jsx(l, {
                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                        type: 'close',
                        side: 'right',
                        onClick: () => d.close(),
                    }),
                }),
                s.jsxs('div', {
                    className: A.content,
                    children: [
                        s.jsxs('div', {
                            className: A.animationWrapper,
                            children: [
                                s.jsx('div', {
                                    className: A.icon,
                                    style: {
                                        backgroundImage: `url('R.images.gui.maps.vehicles.attachments.${f[h.name]}.${r}')`,
                                    },
                                }),
                                j &&
                                    s.jsx(p, {
                                        className: A.animation,
                                        src: R.videos.rarity.$dyn(`intro_${g}`),
                                        autoplay: !0,
                                        onEnded: () => y(!1),
                                    }),
                                s.jsx(p, {
                                    className: t(A.animation, j && A.animation__hidden),
                                    src: R.videos.rarity.$dyn(`cycle_${g}`),
                                    autoplay: !j,
                                    loop: !0,
                                }),
                            ],
                        }),
                        s.jsxs('div', {
                            className: t(A.footer, A[`footer__${g}`]),
                            children: [
                                s.jsx('div', { className: A.title, children: _(u) }),
                                s.jsx(m, {
                                    text: S.RarityRewardScreen.subtitle(),
                                    binding: { rarity: _(String(S.rarity.$dyn(g))) },
                                    classMix: A.subTitle,
                                }),
                                s.jsx('div', {
                                    className: A.buttons,
                                    children: s.jsx(b, {
                                        size: v,
                                        type: x.primary,
                                        mixClass: A.button,
                                        onClick: () => d.close(),
                                        children: R.strings.last_stand_lobby.common.yes(),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    });
g(s.jsx(h, { children: s.jsx(j, {}) }));
