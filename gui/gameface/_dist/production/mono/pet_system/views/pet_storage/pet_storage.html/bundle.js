import { r as e, j as t, q as s, f as a, l as n } from '../../../chunks/vendor.js';
import {
    i as r,
    y as o,
    r as i,
    T as l,
    w as c,
    x as d,
    z as m,
    C as u,
    D as _,
    B as p,
    E as b,
    p as g,
    d as v,
    G as N,
    H as h,
    P as y,
    K as x,
    L as j,
    N as C,
    O as f,
    Q as P,
    o as B,
    S,
    v as k,
    W as I,
    M as E,
    X as O,
    Y as D,
    Z as w,
    _ as $,
    $ as A,
    a0 as M,
    a1 as T,
    a2 as V,
    a3 as W,
    a4 as z,
    a5 as F,
    a6 as R,
    a7 as U,
    a8 as H,
    a9 as q,
    aa as L,
    ab as G,
    k as K,
    U as Q,
    q as X,
    l as Y,
} from '../../../chunks/lib.js';
import { B as Z } from '../../../chunks/breed.js';
import { S as J } from '../../../chunks/warning_icon.js';
/* empty css                    */ const [ee, te] = r()(
    ({ observableModel: e }) => ({
        ...{
            root: e.object(),
            promo: e.object('promotionModel'),
            promotionBonuses: e.arrayClone('promotionModel.promotionBonuses'),
            cards: e.arrayClone('cards'),
            bonuses: e.arrayClone('bonuses'),
            petNames: e.arrayClone('petNames'),
        },
    }),
    ({ externalModel: e }) => ({
        close: e.createCallbackNoArgs('onClose'),
        selectBonus: e.createCallback((e) => ({ bonusID: e }), 'onBonusSelect'),
        selectPet: e.createCallback((e) => ({ petID: e }), 'onPetSelect'),
        selectCard: e.createCallback((e) => ({ petID: e }), 'onCardSelect'),
        saveName: e.createCallback((e, t) => ({ petNameID: e, petID: t }), 'onSaveName'),
        saveVisibility: e.createCallback((e) => ({ visibilityState: e }), 'onSaveVisibility'),
        closeNameSelection: e.createCallbackNoArgs('onCloseNameSelection'),
        infoPageOpen: e.createCallbackNoArgs('onInfoPageOpen'),
        selectChallenge: e.createCallbackNoArgs('promotionModel.onChallengeSelect'),
        selectPurchase: e.createCallbackNoArgs('promotionModel.onPurchaseSelect'),
    }),
);
var se = ((e) => (
        (e.Incomplete = 'incomplete'),
        (e.UpdatedRecently = 'updatedRecently'),
        (e.Complete = 'complete'),
        e
    ))(se || {}),
    ae = ((e) => (
        (e[(e.Always = 0)] = 'Always'),
        (e[(e.DisableAnimation = 1)] = 'DisableAnimation'),
        (e[(e.OnlyIntoPetPlace = 2)] = 'OnlyIntoPetPlace'),
        e
    ))(ae || {});
const ne = {
        background: 'NameCard_background_b22002dd',
        base: 'NameCard_173ccdb7',
        card: 'NameCard_card_2fda0d9e',
        base__selected: 'NameCard_base__selected_3c58592c',
        cardText: 'NameCard_cardText_317b48a2',
        bubble: 'NameCard_bubble_231d156f',
        border: 'NameCard_border_c95f2f7e',
    },
    re = o('NameCard', ne.base, {
        variants: {
            active: { true: ne.base__active },
            selected: { true: ne.base__selected },
            hover: { true: ne.base__hover },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: ne.base__selectedHover }],
    }),
    oe = i.resolve('strings');
function ie({ petName: s, currentNameID: a, setCurrentNameID: n }) {
    const [r, o] = e.useState(s.isNew);
    return t.jsxs(re, {
        selected: a === s.petNameID,
        className: ne.base,
        children: [
            t.jsx('div', {
                className: ne.card,
                onClick: () => {
                    s.petNameID !== a && (m.sound(u.click), o(!1), n(s.petNameID));
                },
                children: t.jsx(l, {
                    className: ne.cardText,
                    text: oe.readOrEmpty(`pet_names.petName_${s.petNameID}`),
                }),
            }),
            t.jsx(c.Root, { hidden: !r, className: ne.bubble, children: t.jsx(c.Icon, { type: d.bubble }) }),
            t.jsx('div', { className: ne.background }),
            t.jsx('div', { className: ne.border }),
        ],
    });
}
const le = 'NamingContent_19d112f7',
    ce = 'NamingContent_content_947fb074',
    de = 'NamingContent_card_4767309e',
    me = 'NamingContent_card__last_c7c2ca5b',
    ue = i.resolve('sounds'),
    _e = s(function ({ currentNameID: s, setCurrentNameID: n }) {
        const { model: r, controls: o } = te(),
            i = r.petNames.get(),
            l = _();
        return (
            e.useEffect(() => {
                const e = l.subscribe.onBeforeClose(() => {
                    o.closeNameSelection();
                });
                return () => {
                    e();
                };
            }, [l.subscribe, o]),
            t.jsx(p, {
                children: t.jsx(b, {
                    className: le,
                    children: t.jsx('div', {
                        className: ce,
                        children: g(i, (e, r) =>
                            t.jsx(
                                'div',
                                {
                                    className: a(de, r >= i.length - 3 && me),
                                    onClick: () => ue.play('play'),
                                    onMouseEnter: () => ue.play('highlight'),
                                    children: t.jsx(ie, { petName: e, currentNameID: s, setCurrentNameID: n }),
                                },
                                `${e.petNameID}_${r}`,
                            ),
                        ),
                    }),
                }),
            })
        );
    }),
    pe = 'CloseOutsideButton_803af006',
    be = i.resolve('strings'),
    ge = 'save',
    ve = 'cancel';
function Ne({ closeMode: e, onClick: s, disabled: a = !1 }) {
    const n = _();
    return t.jsx(v, {
        theme: e === ge ? h.primary : h.secondary,
        size: N.small,
        className: pe,
        disabled: a,
        onClick: () => {
            (null == s || s(), n.close());
        },
        children: be.readOrEmpty('pet_system.petSettings.' + (e === ge ? 'saveButton.label' : 'cancelButton')),
    });
}
const he = 'SettingsFooter_8ecc89b6',
    ye = 'SettingsFooter_divider_a8b75a83',
    xe = 'SettingsFooter_curtain_8cdd3fd9',
    je = 'SettingsFooter_buttons_a8a280b',
    Ce = 'SettingsFooter_saveButton_a922b33f',
    fe = s(function ({ settingsMode: e, currentNameID: s, currentVisibility: a }) {
        const { model: n, controls: r } = te(),
            { petID: o } = n.root.get();
        return t.jsxs('div', {
            className: he,
            children: [
                t.jsx(y.Divider, { className: ye }),
                t.jsx('div', { className: xe }),
                t.jsxs('div', {
                    className: je,
                    children: [
                        t.jsx('div', {
                            className: Ce,
                            children: t.jsx(Ne, {
                                closeMode: ge,
                                onClick: () => (e === Ue.naming && r.saveName(s, o), r.saveVisibility(a)),
                            }),
                        }),
                        t.jsx(Ne, { closeMode: ve }),
                    ],
                }),
            ],
        });
    }),
    Pe = 'VisibilityContent_3fcd2c1',
    Be = 'VisibilityContent_radioButton_ed8388d0',
    Se = i.resolve('strings'),
    ke = [
        { value: ae.Always, label: 'always' },
        { value: ae.DisableAnimation, label: 'disableAnimation' },
        { value: ae.OnlyIntoPetPlace, label: 'onlyIntoPetPlace' },
    ],
    Ie = ({ currentVisibility: e, onVisibilityChange: s }) =>
        t.jsx('div', {
            className: Pe,
            children: t.jsx(x.Group, {
                value: e,
                onChange: (e) => s(e),
                children: ke.map((e) =>
                    t.jsx(
                        x,
                        {
                            size: j.small,
                            value: e.value,
                            className: Be,
                            children: Se.readOrEmpty(`pet_system.petSettings.visibility.select.${e.label}`),
                        },
                        e.value,
                    ),
                ),
            }),
        }),
    Ee = 'SettingsPopover_2b148be2',
    Oe = 'SettingsPopover_base__namingContainer_30c0eb6a',
    De = 'SettingsPopover_tip_814526f',
    we = 'SettingsPopover_header_c2cd6ca0',
    $e = 'SettingsPopover_title_32a77f01',
    Ae = 'SettingsPopover_subtitle_12abaab2',
    Me = 'SettingsPopover_body_7eedca0a',
    Te = 'SettingsPopover_divider_31e0231d',
    Ve = 'SettingsPopover_curtain_152d577b',
    We = i.resolve('strings'),
    ze = s(function ({ settingsMode: s }) {
        const { model: n } = te(),
            { petNameID: r, visibilityState: o } = n.root.get(),
            [i, l] = e.useState(r),
            [c, d] = e.useState(o);
        return t.jsxs(y.Display, {
            className: a(Ee, s === Ue.naming && Oe),
            children: [
                t.jsx(C, { path: 'petSystem.selected_light', className: De }),
                t.jsx(y.Close, {}),
                t.jsxs(y.Header, {
                    className: we,
                    children: [
                        t.jsx(y.Title, {
                            className: $e,
                            children: We.readOrEmpty(`pet_system.petSettings.${s}.title`),
                        }),
                        t.jsx(y.Subtitle, {
                            className: Ae,
                            children: We.readOrEmpty(`pet_system.petSettings.${s}.subtitle`),
                        }),
                        t.jsx(y.Divider, { className: Te }),
                        t.jsx('div', { className: Ve }),
                    ],
                }),
                t.jsxs(y.Body, {
                    className: Me,
                    children: [
                        s === Ue.naming
                            ? t.jsx(_e, { currentNameID: i, setCurrentNameID: l })
                            : t.jsx(Ie, { currentVisibility: c, onVisibilityChange: d }),
                        t.jsx(fe, { settingsMode: s, currentNameID: i, currentVisibility: c }),
                    ],
                }),
            ],
        });
    }),
    Fe = {
        base: 'SettingsTrigger_7dd3c4df',
        trigger: 'SettingsTrigger_trigger_2aeef7a',
        buttonBackground: 'SettingsTrigger_buttonBackground_a7f7b3cc',
        buttonBackground__visibility: 'SettingsTrigger_buttonBackground__visibility_41435803',
        buttonBackground__naming: 'SettingsTrigger_buttonBackground__naming_1b881499',
        bubble: 'SettingsTrigger_bubble_e9b79e2f',
    },
    Re = i.resolve('strings'),
    Ue = { visibility: 'visibility', naming: 'naming' },
    He = s(function ({ settingsMode: e }) {
        const { model: s } = te(),
            { hasNewNames: n, hasUniqueName: r } = s.root.get(),
            o = e === Ue.naming,
            i = o && r ? 'uniqueName' : e,
            l = f({
                header: Re.readOrEmpty(`pet_system.petSettings.${i}.tip.title`),
                body: Re.readOrEmpty(`pet_system.petSettings.${i}.tip.subtitle`),
            }),
            m = (o && !r) || e === Ue.visibility;
        return t.jsx('div', {
            className: Fe.base,
            children: t.jsxs(y, {
                children: [
                    t.jsx(y.Trigger, {
                        children: (s, i) =>
                            t.jsxs(v, {
                                ...(!i.opened && l),
                                ...s,
                                size: N.small,
                                theme: h.secondary,
                                className: Fe.trigger,
                                disabled: !m,
                                onClick: (e) => {
                                    m && (l.onClick(), s.onClick(e));
                                },
                                children: [
                                    t.jsx('div', { className: a(Fe.buttonBackground, Fe[`buttonBackground__${e}`]) }),
                                    o &&
                                        !r &&
                                        t.jsx(c.Root, {
                                            hidden: !n,
                                            className: Fe.bubble,
                                            children: t.jsx(c.Icon, { type: d.bubble }),
                                        }),
                                ],
                            }),
                    }),
                    t.jsx(y.Portal, {
                        lazy: !0,
                        position: 'bottom',
                        pivot: 1,
                        children: t.jsx(ze, { settingsMode: e }),
                    }),
                ],
            }),
        });
    }),
    qe = 'SettingsBar_680417a7',
    Le = 'SettingsBar_breed_867ab9f7',
    Ge = 'SettingsBar_triggers_b1100faf',
    Ke = 'SettingsBar_visibility_99637c86',
    Qe = i.resolve('strings'),
    Xe = s(function () {
        const { model: e } = te(),
            { petType: s, breedName: a } = e.root.get(),
            { isPromotionEnabled: n } = e.promo.get();
        return t.jsxs('div', {
            className: qe,
            children: [
                t.jsx(Z, {
                    className: Le,
                    petType: Qe.readOrEmpty(`pet_system.petType.${s}`),
                    breedName: Qe.readOrEmpty(`pet_system.breedName.${a}`),
                }),
                !n &&
                    t.jsxs('div', {
                        className: Ge,
                        children: [
                            t.jsx('div', { className: Ke, children: t.jsx(He, { settingsMode: Ue.visibility }) }),
                            t.jsx(He, { settingsMode: Ue.naming }),
                        ],
                    }),
            ],
        });
    }),
    Ye = 'Head_petName_517ee482',
    Ze = 'Head_petIcon_f5722299',
    Je = 'Head_settingsBar_6368c5fb',
    et = 'Head_video_bf7e9181',
    tt = i.resolve('views'),
    st = i.resolve('strings'),
    at = i.resolve('images'),
    nt = i.resolve('videos'),
    rt = s(function () {
        const { model: s } = te(),
            { petNameID: a, SynergyState: n } = s.root.get(),
            { isPromotionEnabled: r } = s.promo.get(),
            o = e.useRef(null),
            i = e.useRef(null),
            l = P({ contentId: tt.read((e) => e.mono.pet_system.tooltips.synergy_tooltip('resId')) });
        return (
            e.useEffect(() => {
                var e;
                return (
                    n === se.UpdatedRecently
                        ? null == (e = o.current) ||
                          e.on('ended', () => {
                              i.current = setTimeout(() => {
                                  var e;
                                  null == (e = o.current) || e.play();
                              }, 1e3);
                          })
                        : (null == i ? void 0 : i.current) && clearTimeout(i.current),
                    () => {
                        (null == i ? void 0 : i.current) && clearTimeout(i.current);
                    }
                );
            }, [o, i, n]),
            t.jsxs(t.Fragment, {
                children: [
                    t.jsx('div', {
                        className: Ye,
                        children: t.jsxs('div', {
                            children: [
                                st.readOrEmpty(`pet_names.petName_${a}`),
                                !r &&
                                    t.jsx('div', {
                                        ...l,
                                        style: {
                                            backgroundImage: `url(${at.readOrEmpty('petSystem.pet_' + (n === se.Complete ? 'active' : 'disabled'))})`,
                                        },
                                        className: Ze,
                                        children:
                                            n === se.UpdatedRecently &&
                                            t.jsx(B, {
                                                src: nt.readOrEmpty('pet_system.synergy_blick'),
                                                ref: o,
                                                autoplay: !0,
                                                className: et,
                                            }),
                                    }),
                            ],
                        }),
                    }),
                    t.jsx('div', { className: Je, children: t.jsx(Xe, {}) }),
                ],
            })
        );
    }),
    ot = 'ArcProgressbar_46a212bd',
    it = 'ArcProgressbar_progress_684236c8',
    lt = 'ArcProgressbar_blick_985e05f6',
    ct = 'ArcProgressbar_values_d8302045',
    dt = 'ArcProgressbar_current_2a7ce7de';
function mt({ total: e, current: s }) {
    const a = Math.min((s / e) * 100, 100) + '%',
        n = Math.min((s / e) * 360, 360) + 'deg';
    return t.jsxs('div', {
        className: ot,
        style: { '--progressbarMaskPercentage': `${a}`, '--blickRotateAngle': `${n}` },
        children: [
            t.jsx('div', { className: it }),
            t.jsx('div', { className: lt }),
            t.jsxs('div', { className: ct, children: [t.jsx('div', { className: dt, children: s }), '/', e] }),
        ],
    });
}
const ut = 'BonusCard_b7b7b0c4',
    _t = 'BonusCard_base__selected_65ff400e',
    pt = 'BonusCard_img_d748a277',
    bt = 'BonusCard_content_55446e37',
    gt = 'BonusCard_statusIcon_48a0db7c',
    vt = 'BonusCard_background_6ade597b',
    Nt = 'BonusCard_background__selected_4ba38d69',
    ht = i.resolve('images'),
    yt = i.resolve('strings'),
    xt = s(function ({ name: e, value: s, id: n }) {
        const { model: r, controls: o } = te(),
            { selectedBonus: i } = r.root.get(),
            l = i === n,
            c = f({
                header: yt.readOrEmpty(`pet_system.bonus.${e}.title`),
                body: yt.readOrEmpty('pet_system.petStorage.petBonus.tooltip.content'),
            });
        return t.jsxs(S, {
            ...c,
            className: a(ut, l && _t),
            selected: l,
            status: l ? 'done' : void 0,
            classNames: { status: { icon: gt } },
            onClick: l ? void 0 : () => o.selectBonus(n),
            children: [
                t.jsx('div', {
                    className: pt,
                    style: { backgroundImage: `url(${ht.readOrEmpty(`library.currency.${e}_80x80`)})` },
                }),
                t.jsx('div', {
                    className: bt,
                    children: t.jsx(k, { path: 'pet_system.plusPercentValue', params: { value: s } }),
                }),
                t.jsx('div', { className: a(vt, l && Nt) }),
            ],
        });
    }),
    jt = 'PetBonus_c10cb3e0',
    Ct = s(function () {
        const { model: e } = te(),
            s = e.bonuses.get();
        return t.jsx(I, {
            className: jt,
            children: g(s, (e) => t.jsx(xt, { name: e.name, value: e.value, id: e.id }, e.id)),
        });
    }),
    ft = 'Status_9a38fa07',
    Pt = 'Status_background_eebcfca7',
    Bt = 'Status_blur_bf1a0a06',
    St = 'Status_content_c5cb37ff',
    kt = i.resolve('strings'),
    It = s(function () {
        const { model: e, controls: s } = te(),
            { isPetSelected: a, petID: n } = e.root.get();
        return t.jsx(t.Fragment, {
            children: a
                ? t.jsxs('div', {
                      className: ft,
                      children: [
                          t.jsx('div', {
                              className: St,
                              children: kt.readOrEmpty('pet_system.petStorage.status.selected'),
                          }),
                          t.jsx('div', { className: Pt }),
                          t.jsx('div', { className: Bt }),
                      ],
                  })
                : t.jsx(v, {
                      onClick: () => s.selectPet(n),
                      children: kt.readOrEmpty('pet_system.petStorage.status.select'),
                  }),
        });
    }),
    Et = 'PetDescription_d0fd37f9',
    Ot = i.resolve('strings'),
    Dt = s(function () {
        const { model: e } = te(),
            { breedName: s } = e.root.get();
        return t.jsx(E, { className: Et, text: Ot.readOrEmpty(`pet_system.petDescription.${s}`) });
    }),
    wt = 'PrimaryContent_block_cd150e59',
    $t = 'PrimaryContent_title_2c3b0ca3',
    At = 'PrimaryContent_title__pet_ae10c939',
    Mt = 'PrimaryContent_title__progressbar_656a9391',
    Tt = 'PrimaryContent_progressbar_9867c107',
    Vt = 'PrimaryContent_progressbarWrapper_13d35760',
    Wt = 'PrimaryContent_progressbarInfo_ed3f6d13',
    zt = 'PrimaryContent_status_b56886f5',
    Ft = 'PrimaryContent_warning_cee338cb',
    Rt = 'PrimaryContent_warningIcon_3c4068ae',
    Ut = 'PrimaryContent_warningText_3090b32',
    Ht = i.resolve('strings'),
    qt = s(function () {
        const { model: e } = te(),
            { totalCount: s, currentCount: n, isUnsuitableMode: r } = e.root.get(),
            o = f({
                header: Ht.readOrEmpty('pet_system.petStorage.progressbarTooltip.title'),
                body: Ht.readOrEmpty('pet_system.petStorage.progressbarTooltip.content'),
            });
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx('div', {
                    className: wt,
                    children: t.jsxs('div', {
                        className: Tt,
                        children: [
                            t.jsx('div', { ...o, className: Vt, children: t.jsx(mt, { total: s, current: n }) }),
                            t.jsxs('div', {
                                className: Wt,
                                children: [
                                    t.jsx('div', {
                                        className: a($t, Mt),
                                        children: Ht.readOrEmpty('pet_system.petStorage.progressbarTitle'),
                                    }),
                                    Ht.readOrEmpty('pet_system.petStorage.progressbarDescription'),
                                    Ht.readOrEmpty('pet_system.petStorage.progressbarBonuses'),
                                    r &&
                                        t.jsxs('div', {
                                            className: Ft,
                                            children: [
                                                t.jsx(J, { className: Rt }),
                                                t.jsx(k, {
                                                    className: Ut,
                                                    path: 'pet_system.petStorage.progressbarWarning',
                                                    split: !0,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
                t.jsxs('div', {
                    className: wt,
                    children: [
                        t.jsx('div', {
                            className: a($t, At),
                            children: Ht.readOrEmpty('pet_system.petStorage.petBonus.title'),
                        }),
                        t.jsx(Ct, {}),
                    ],
                }),
                t.jsxs('div', {
                    className: wt,
                    children: [t.jsx(Dt, {}), t.jsx('div', { className: zt, children: t.jsx(It, {}) })],
                }),
            ],
        });
    }),
    Lt = 'PromotionBonuses_e7412a66',
    Gt = 'PromotionBonuses_bonus_cba5b56f',
    Kt = 'PromotionBonuses_header_b1113ed9',
    Qt = 'PromotionBonuses_img_cb948ce5',
    Xt = 'PromotionBonuses_title_3c2cfcb9',
    Yt = 'PromotionBonuses_text_227fa49e',
    Zt = i.resolve('images'),
    Jt = i.resolve('strings'),
    es = s(function () {
        const e = O(),
            { model: s } = te(),
            a = s.promotionBonuses.get();
        return t.jsx('div', {
            className: Lt,
            children: g(a, (s) =>
                t.jsxs(
                    'div',
                    {
                        className: Gt,
                        children: [
                            t.jsxs('div', {
                                className: Kt,
                                children: [
                                    t.jsx('div', {
                                        className: Qt,
                                        style: {
                                            backgroundImage: `url(${Zt.readOrEmpty(`petSystem.promotion.${s}${e.breakpoint.weight < D.medium.weight ? '_sm' : ''}`)})`,
                                        },
                                    }),
                                    t.jsx('div', {
                                        className: Xt,
                                        children: Jt.readOrEmpty(`pet_system.bonus.${s}.title`),
                                    }),
                                ],
                            }),
                            t.jsx('div', {
                                className: Yt,
                                children: Jt.readOrEmpty(`pet_system.bonus.${s}.description`),
                            }),
                        ],
                    },
                    s,
                ),
            ),
        });
    }),
    ts = 'PromotionalContent_descriptionWrapper_d0793a29',
    ss = 'PromotionalContent_bonusesWrapper_b512891d',
    as = 'PromotionalContent_bonuses_c5451a13',
    ns = 'PromotionalContent_title_85a152c0',
    rs = 'PromotionalContent_text_8bfa7ca5',
    os = 'PromotionalContent_text__challenge_b5c408bf',
    is = 'PromotionalContent_buttons_a5156779',
    ls = 'PromotionalContent_btn_9f57b1f6',
    cs = i.resolve('strings'),
    ds = s(function () {
        const { model: e, controls: s } = te(),
            { petID: n } = e.root.get(),
            { isChallengeButtonEnabled: r, isPurchaseButtonEnabled: o } = e.promo.get(),
            i = e.promotionBonuses.get(),
            l = O().breakpoint.weight >= D.medium.weight ? v.sizes.large : v.sizes.medium;
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx('div', { className: ts, children: t.jsx(Dt, {}) }),
                i.length > 0 &&
                    t.jsxs('div', {
                        className: ss,
                        children: [
                            t.jsx('div', { className: as, children: t.jsx(es, {}) }),
                            t.jsx(k, { className: rs, path: 'pet_system.promotion.bonuses.text_1', split: !0 }),
                            t.jsx(k, { className: rs, path: 'pet_system.promotion.bonuses.text_2', split: !0 }),
                        ],
                    }),
                t.jsx('div', {
                    className: ns,
                    children: cs.readOrEmpty(`pet_system.promotion.challengeInfo.title_${n}`),
                }),
                t.jsx('div', {
                    className: a(rs, os),
                    children: cs.readOrEmpty(`pet_system.promotion.challengeInfo.text_${n}`),
                }),
                t.jsxs('div', {
                    className: is,
                    children: [
                        r &&
                            t.jsx(v, {
                                className: ls,
                                size: l,
                                onClick: () => s.selectChallenge(),
                                children: cs.readOrEmpty('pet_system.promotion.button.challenge'),
                            }),
                        o &&
                            t.jsx(v, {
                                className: ls,
                                size: l,
                                onClick: () => s.selectPurchase(),
                                theme: v.themes.secondary,
                                children: cs.readOrEmpty('pet_system.promotion.button.purchase'),
                            }),
                    ],
                }),
            ],
        });
    }),
    ms = s(function () {
        const { model: e } = te(),
            { isPromotionEnabled: s } = e.promo.get();
        return t.jsxs(t.Fragment, { children: [t.jsx(rt, {}), s ? t.jsx(ds, {}) : t.jsx(qt, {})] });
    });
w(1, 12, $);
const us = 'left',
    _s = 'right',
    ps = 'both',
    bs = 'none',
    gs = {
        button: 'ArrowButton_button_7654af94',
        icon: 'ArrowButton_icon_35e5294f',
        button__left: 'ArrowButton_button__left_5327085d',
        background: 'ArrowButton_background_5327085d',
        border: 'ArrowButton_border_5327085d',
        overlay: 'ArrowButton_overlay_c36cbc33',
        content: 'ArrowButton_content_4666fd05',
        button__right: 'ArrowButton_button__right_5327085d',
    };
function vs({ direction: e, className: s, ...n }) {
    return t.jsx(v, {
        ...n,
        classNames: {
            base: a(gs.button, gs[`button__${e}`], s),
            background: gs.background,
            border: gs.border,
            overlay: gs.overlay,
            content: gs.content,
        },
        theme: v.themes.secondary,
        size: v.sizes.small,
        autoAlignContent: !1,
        soundTarget: 'carousel:arrow_button',
        children: t.jsx(C, { path: 'hangar.carousel.buttonArrow', className: gs.icon }),
    });
}
vs.direction = { right: 'right', left: 'left' };
const Ns = {
        navButtonWrapper: 'CarouselNavButtons_navButtonWrapper_a13c2a68',
        navButton: 'CarouselNavButtons_navButton_adcc2e9b',
        navButton__left: 'CarouselNavButtons_navButton__left_5f6dc3a0',
        navButton__right: 'CarouselNavButtons_navButton__right_66b4f03f',
        navButton__hidden: 'CarouselNavButtons_navButton__hidden_69011a0b',
        mask: 'CarouselNavButtons_mask_d54421e2',
        mask__both: 'CarouselNavButtons_mask__both_7294632e',
        mask__left: 'CarouselNavButtons_mask__left_e8bc4c90',
        mask__right: 'CarouselNavButtons_mask__right_6be519f7',
    },
    hs = 0;
function ys(e) {
    return ({ button: t }) => {
        t === hs && e();
    };
}
function xs({ itemWidth: s, api: n, children: r }) {
    const o = e.useRef(null),
        [i, l] = e.useState(!1),
        { applyScroll: c, animationScroll: d, disabled: m } = n,
        [u, _] = A(n),
        p = u || m,
        b = _ || m;
    function g(e) {
        function t() {
            const t = d.scrollPosition.get();
            c(t + e * s);
        }
        i || (t(), (o.current = window.setInterval(t, 100)), l(!0));
    }
    function v() {
        (null !== o.current && (clearInterval(o.current), (o.current = null)), l(!1));
    }
    return t.jsxs('div', {
        className: Ns.navButtonWrapper,
        children: [
            t.jsx(vs, {
                direction: vs.direction.left,
                onMouseDown: ys(() => g(-1)),
                onMouseUp: v,
                onMouseLeave: v,
                className: a(Ns.navButton, Ns.navButton__left, p && Ns.navButton__hidden),
            }),
            t.jsx('div', {
                className: a(Ns.mask, Ns[`mask__${((N = u), (h = _), N || h ? (N ? (h ? bs : _s) : us) : ps)}`]),
                children: r,
            }),
            t.jsx(vs, {
                direction: vs.direction.right,
                onMouseDown: ys(() => g(1)),
                onMouseUp: v,
                onMouseLeave: v,
                className: a(Ns.navButton, Ns.navButton__right, b && Ns.navButton__hidden),
            }),
        ],
    });
    var N, h;
}
const js = 'PetCard_background_1e63f02a',
    Cs = 'PetCard_bf81336e',
    fs = 'PetCard_cardContent_202be88e',
    Ps = 'PetCard_petName_adc2e0e7',
    Bs = 'PetCard_petImage_ffe959dd',
    Ss = 'PetCard_bonusContainer_ad77c415',
    ks = 'PetCard_bonusValue_7fc2b9ba',
    Is = 'PetCard_promo_189845c7',
    Es = 'PetCard_maxSynergy_24397566',
    Os = 'PetCard_statusIcon_57abf9a1',
    Ds = i.resolve('images'),
    ws = i.resolve('strings');
function $s({
    petId: e,
    petNameId: s,
    selected: n,
    isNew: r,
    maxSynergyReached: o = !1,
    active: i,
    bonusName: l,
    bonusValue: d,
    className: m,
    ...u
}) {
    return t.jsxs(M, {
        ...u,
        selected: n,
        status: i ? T.done : void 0,
        className: a(Cs, m),
        classNames: { mainContainerContent: fs, status: { icon: Os } },
        children: [
            t.jsx('div', {
                className: js,
                style: {
                    backgroundImage: `url(${Ds.readOr(`petSystem.backgrounds.x184x84.pet_${e}`, () => Ds.readOrEmpty('petSystem.backgrounds.x184x84.default'))})`,
                },
            }),
            t.jsx('div', {
                className: Bs,
                style: { backgroundImage: `url(${Ds.readOrEmpty(`petSystem.pets.x184x108.pet_${e}`)})` },
            }),
            l &&
                t.jsxs('div', {
                    className: Ss,
                    children: [
                        t.jsx(V, { type: l }),
                        t.jsx('div', {
                            className: ks,
                            children: t.jsx(k, { path: 'pet_system.plusPercentValue', params: { value: d } }),
                        }),
                    ],
                }),
            o && !r && t.jsx(C, { path: 'petSystem.pet_active_24', className: Es, width: 24, height: 24 }),
            r &&
                t.jsx('div', {
                    className: Is,
                    children: t.jsx(c.Root, {
                        children: t.jsx(c.Value, {
                            value: ws.readOrEmpty('pet_system.petStorage.petCard.promo'),
                            size: W.medium,
                        }),
                    }),
                }),
            t.jsx('div', {
                className: Ps,
                children: ws.readOr(`pet_names.petName_${s}`, () => ws.readOrEmpty('pet_names.petName_default')),
            }),
        ],
    });
}
const As = 'Carousel_draggingOverlay_2ac699b0',
    Ms = 'Carousel_content_bca51e20',
    Ts = 'Carousel_cardsWrapper_ef51bc77',
    Vs = 'Carousel_card_c8c3acdf',
    Ws = 'Carousel_scrollWrapper_aa4cb2bd';
function zs(e) {
    return t.jsx('div', { ...e, className: a(Ms, e.className) });
}
const Fs = s(function () {
        const [s, a] = e.useState(!1),
            { api: r } = z(),
            o = F(196, []),
            { model: i, controls: l } = te(),
            c = i.cards.get(),
            d = i.root.get(),
            m = d.petID,
            u = d.activePetID;
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx(xs, {
                    api: r,
                    itemWidth: o,
                    children: t.jsx(R, {
                        api: r,
                        elementWidth: o,
                        direction: 'horizontal',
                        totalElements: c.length,
                        throttle: 80,
                        wrappers: { Content: zs },
                        renderScroll: (e, [s, n]) =>
                            t.jsx(U, {
                                ...e,
                                disabled: !1,
                                api: r,
                                areaClassNames: { wrapper: Ws },
                                onDraggingState: a,
                                children: t.jsx(I, {
                                    className: Ts,
                                    border: H.contour,
                                    trashhold: `${s}-${n}`,
                                    children: e.children,
                                }),
                            }),
                        renderElement: (e) => {
                            const {
                                    petID: s,
                                    petNameID: a,
                                    isNew: n,
                                    isMaxSynergyLevel: r,
                                    bonusName: o,
                                    bonusValue: i,
                                } = c[e],
                                d = s === m,
                                _ = s === u;
                            return t.jsx($s, {
                                className: Vs,
                                petId: s,
                                petNameId: a,
                                selected: d,
                                active: _,
                                isNew: n,
                                maxSynergyReached: r,
                                bonusName: o,
                                bonusValue: i,
                                onClick: () => !d && l.selectCard(s),
                            });
                        },
                    }),
                }),
                n.createPortal(s && t.jsx('div', { className: As }), document.body),
            ],
        });
    }),
    Rs = { base: 'InfoPageEntry_4b0e1346' },
    Us = i.resolve('strings'),
    Hs = i.resolve('sounds');
function qs() {
    const { controls: e } = te();
    return t.jsx('div', {
        className: Rs.base,
        onClick: function () {
            (Hs.play('play'), e.infoPageOpen());
        },
        onMouseEnter: () => Hs.play('highlight'),
        children: Us.readOrEmpty('pet_system.infoPageEntryPoint'),
    });
}
const Ls = 'Footer_1c31242f',
    Gs = 'Footer_carouselContainer_9ed2d931';
function Ks() {
    return t.jsxs('div', {
        className: Ls,
        children: [t.jsx('div', { className: Gs, children: t.jsx(q, { children: t.jsx(Fs, {}) }) }), t.jsx(qs, {})],
    });
}
const Qs = 'App_72d9d6ee',
    Xs = 'App_contentWrapper_3f125c71',
    Ys = s(function () {
        const { controls: e } = te();
        return (
            L(G.ESCAPE, e.close),
            t.jsxs('div', {
                className: Qs,
                children: [t.jsx('div', { className: Xs, children: t.jsx(ms, {}) }), t.jsx(Ks, {})],
            })
        );
    });
K(t.jsx(ee, { children: t.jsx(Q, { children: t.jsx(Ys, {}) }) }))
    .then(() => X(document.getElementById('root')))
    .then(() => Y());
