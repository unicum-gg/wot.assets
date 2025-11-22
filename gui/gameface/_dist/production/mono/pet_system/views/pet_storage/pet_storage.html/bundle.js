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
    Q as B,
    o as S,
    S as P,
    v as k,
    W as I,
    X as E,
    Y as O,
    Z as D,
    _ as $,
    $ as w,
    a0 as A,
    a1 as M,
    a2 as T,
    a3 as V,
    a4 as z,
    a5 as F,
    a6 as R,
    a7 as W,
    a8 as H,
    a9 as U,
    aa as q,
    ab as L,
    ac as G,
    k as K,
    U as Q,
    q as X,
    l as Y,
} from '../../../chunks/lib.js';
import { B as Z } from '../../../chunks/breed.js';
/* empty css                    */ const [J, ee] = r()(
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
var te = ((e) => (
        (e.Incomplete = 'incomplete'),
        (e.UpdatedRecently = 'updatedRecently'),
        (e.Complete = 'complete'),
        e
    ))(te || {}),
    se = ((e) => (
        (e[(e.Always = 0)] = 'Always'),
        (e[(e.DisableAnimation = 1)] = 'DisableAnimation'),
        (e[(e.OnlyIntoPetPlace = 2)] = 'OnlyIntoPetPlace'),
        e
    ))(se || {});
const ae = {
        background: 'NameCard_background_b22002dd',
        base: 'NameCard_173ccdb7',
        card: 'NameCard_card_2fda0d9e',
        base__selected: 'NameCard_base__selected_3c58592c',
        cardText: 'NameCard_cardText_317b48a2',
        bubble: 'NameCard_bubble_231d156f',
        border: 'NameCard_border_c95f2f7e',
    },
    ne = o('NameCard', ae.base, {
        variants: {
            active: { true: ae.base__active },
            selected: { true: ae.base__selected },
            hover: { true: ae.base__hover },
        },
        compoundVariants: [{ hover: !0, selected: !0, className: ae.base__selectedHover }],
    }),
    re = i.resolve('strings');
function oe({ petName: s, currentNameID: a, setCurrentNameID: n }) {
    const [r, o] = e.useState(s.isNew);
    return t.jsxs(ne, {
        selected: a === s.petNameID,
        className: ae.base,
        children: [
            t.jsx('div', {
                className: ae.card,
                onClick: () => {
                    s.petNameID !== a && (m.sound(u.click), o(!1), n(s.petNameID));
                },
                children: t.jsx(l, {
                    className: ae.cardText,
                    text: re.readOrEmpty(`pet_names.petName_${s.petNameID}`),
                }),
            }),
            t.jsx(c.Root, { hidden: !r, className: ae.bubble, children: t.jsx(c.Icon, { type: d.bubble }) }),
            t.jsx('div', { className: ae.background }),
            t.jsx('div', { className: ae.border }),
        ],
    });
}
const ie = 'NamingContent_19d112f7',
    le = 'NamingContent_content_947fb074',
    ce = 'NamingContent_card_4767309e',
    de = 'NamingContent_card__last_c7c2ca5b',
    me = i.resolve('sounds'),
    ue = s(function ({ currentNameID: s, setCurrentNameID: n }) {
        const { model: r, controls: o } = ee(),
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
                    className: ie,
                    children: t.jsx('div', {
                        className: le,
                        children: g(i, (e, r) =>
                            t.jsx(
                                'div',
                                {
                                    className: a(ce, r >= i.length - 3 && de),
                                    onClick: () => me.play('play'),
                                    onMouseEnter: () => me.play('highlight'),
                                    children: t.jsx(oe, { petName: e, currentNameID: s, setCurrentNameID: n }),
                                },
                                `${e.petNameID}_${r}`,
                            ),
                        ),
                    }),
                }),
            })
        );
    }),
    _e = 'CloseOutsideButton_803af006',
    pe = i.resolve('strings'),
    be = 'save',
    ge = 'cancel';
function ve({ closeMode: e, onClick: s, disabled: a = !1 }) {
    const n = _();
    return t.jsx(v, {
        theme: e === be ? h.primary : h.secondary,
        size: N.small,
        className: _e,
        disabled: a,
        onClick: () => {
            (null == s || s(), n.close());
        },
        children: pe.readOrEmpty('pet_system.petSettings.' + (e === be ? 'saveButton.label' : 'cancelButton')),
    });
}
const Ne = 'SettingsFooter_8ecc89b6',
    he = 'SettingsFooter_divider_a8b75a83',
    ye = 'SettingsFooter_curtain_8cdd3fd9',
    xe = 'SettingsFooter_buttons_a8a280b',
    je = 'SettingsFooter_saveButton_a922b33f',
    Ce = s(function ({ settingsMode: e, currentNameID: s, currentVisibility: a }) {
        const { model: n, controls: r } = ee(),
            { petID: o } = n.root.get();
        return t.jsxs('div', {
            className: Ne,
            children: [
                t.jsx(y.Divider, { className: he }),
                t.jsx('div', { className: ye }),
                t.jsxs('div', {
                    className: xe,
                    children: [
                        t.jsx('div', {
                            className: je,
                            children: t.jsx(ve, {
                                closeMode: be,
                                onClick: () => (e === We.naming && r.saveName(s, o), r.saveVisibility(a)),
                            }),
                        }),
                        t.jsx(ve, { closeMode: ge }),
                    ],
                }),
            ],
        });
    }),
    fe = 'VisibilityContent_3fcd2c1',
    Be = 'VisibilityContent_radioButton_ed8388d0',
    Se = i.resolve('strings'),
    Pe = [
        { value: se.Always, label: 'always' },
        { value: se.DisableAnimation, label: 'disableAnimation' },
        { value: se.OnlyIntoPetPlace, label: 'onlyIntoPetPlace' },
    ],
    ke = ({ currentVisibility: e, onVisibilityChange: s }) =>
        t.jsx('div', {
            className: fe,
            children: t.jsx(x.Group, {
                value: e,
                onChange: (e) => s(e),
                children: Pe.map((e) =>
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
    Ie = 'SettingsPopover_2b148be2',
    Ee = 'SettingsPopover_base__namingContainer_30c0eb6a',
    Oe = 'SettingsPopover_tip_814526f',
    De = 'SettingsPopover_header_c2cd6ca0',
    $e = 'SettingsPopover_title_32a77f01',
    we = 'SettingsPopover_subtitle_12abaab2',
    Ae = 'SettingsPopover_body_7eedca0a',
    Me = 'SettingsPopover_divider_31e0231d',
    Te = 'SettingsPopover_curtain_152d577b',
    Ve = i.resolve('strings'),
    ze = s(function ({ settingsMode: s }) {
        const { model: n } = ee(),
            { petNameID: r, visibilityState: o } = n.root.get(),
            [i, l] = e.useState(r),
            [c, d] = e.useState(o);
        return t.jsxs(y.Display, {
            className: a(Ie, s === We.naming && Ee),
            children: [
                t.jsx(C, { path: 'petSystem.selected_light', className: Oe }),
                t.jsx(y.Close, {}),
                t.jsxs(y.Header, {
                    className: De,
                    children: [
                        t.jsx(y.Title, {
                            className: $e,
                            children: Ve.readOrEmpty(`pet_system.petSettings.${s}.title`),
                        }),
                        t.jsx(y.Subtitle, {
                            className: we,
                            children: Ve.readOrEmpty(`pet_system.petSettings.${s}.subtitle`),
                        }),
                        t.jsx(y.Divider, { className: Me }),
                        t.jsx('div', { className: Te }),
                    ],
                }),
                t.jsxs(y.Body, {
                    className: Ae,
                    children: [
                        s === We.naming
                            ? t.jsx(ue, { currentNameID: i, setCurrentNameID: l })
                            : t.jsx(ke, { currentVisibility: c, onVisibilityChange: d }),
                        t.jsx(Ce, { settingsMode: s, currentNameID: i, currentVisibility: c }),
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
    We = { visibility: 'visibility', naming: 'naming' },
    He = s(function ({ settingsMode: e }) {
        const { model: s } = ee(),
            { hasNewNames: n, hasUniqueName: r } = s.root.get(),
            o = e === We.naming,
            i = o && r ? 'uniqueName' : e,
            l = f({
                header: Re.readOrEmpty(`pet_system.petSettings.${i}.tip.title`),
                body: Re.readOrEmpty(`pet_system.petSettings.${i}.tip.subtitle`),
            }),
            m = (o && !r) || e === We.visibility;
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
    Ue = 'SettingsBar_680417a7',
    qe = 'SettingsBar_breed_867ab9f7',
    Le = 'SettingsBar_triggers_b1100faf',
    Ge = 'SettingsBar_visibility_99637c86',
    Ke = i.resolve('strings'),
    Qe = s(function () {
        const { model: e } = ee(),
            { petType: s, breedName: a } = e.root.get(),
            { isPromotionEnabled: n } = e.promo.get();
        return t.jsxs('div', {
            className: Ue,
            children: [
                t.jsx(Z, {
                    className: qe,
                    petType: Ke.readOrEmpty(`pet_system.petType.${s}`),
                    breedName: Ke.readOrEmpty(`pet_system.breedName.${a}`),
                }),
                !n &&
                    t.jsxs('div', {
                        className: Le,
                        children: [
                            t.jsx('div', { className: Ge, children: t.jsx(He, { settingsMode: We.visibility }) }),
                            t.jsx(He, { settingsMode: We.naming }),
                        ],
                    }),
            ],
        });
    }),
    Xe = 'Head_petName_517ee482',
    Ye = 'Head_petIcon_f5722299',
    Ze = 'Head_settingsBar_6368c5fb',
    Je = 'Head_video_bf7e9181',
    et = i.resolve('views'),
    tt = i.resolve('strings'),
    st = i.resolve('images'),
    at = i.resolve('videos'),
    nt = s(function () {
        const { model: s } = ee(),
            { petNameID: a, SynergyState: n } = s.root.get(),
            { isPromotionEnabled: r } = s.promo.get(),
            o = e.useRef(null),
            i = e.useRef(null),
            l = B({ contentId: et.read((e) => e.mono.pet_system.tooltips.synergy_tooltip('resId')) });
        return (
            e.useEffect(() => {
                var e;
                return (
                    n === te.UpdatedRecently
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
                        className: Xe,
                        children: t.jsxs('div', {
                            children: [
                                tt.readOrEmpty(`pet_names.petName_${a}`),
                                !r &&
                                    t.jsx('div', {
                                        ...l,
                                        style: {
                                            backgroundImage: `url(${st.readOrEmpty('petSystem.pet_' + (n === te.Complete ? 'active' : 'disabled'))})`,
                                        },
                                        className: Ye,
                                        children:
                                            n === te.UpdatedRecently &&
                                            t.jsx(S, {
                                                src: at.readOrEmpty('pet_system.synergy_blick'),
                                                ref: o,
                                                autoplay: !0,
                                                className: Je,
                                            }),
                                    }),
                            ],
                        }),
                    }),
                    t.jsx('div', { className: Ze, children: t.jsx(Qe, {}) }),
                ],
            })
        );
    }),
    rt = 'ArcProgressbar_46a212bd',
    ot = 'ArcProgressbar_progress_684236c8',
    it = 'ArcProgressbar_blick_985e05f6',
    lt = 'ArcProgressbar_values_d8302045',
    ct = 'ArcProgressbar_current_2a7ce7de';
function dt({ total: e, current: s }) {
    const a = Math.min((s / e) * 100, 100) + '%',
        n = Math.min((s / e) * 360, 360) + 'deg';
    return t.jsxs('div', {
        className: rt,
        style: { '--progressbarMaskPercentage': `${a}`, '--blickRotateAngle': `${n}` },
        children: [
            t.jsx('div', { className: ot }),
            t.jsx('div', { className: it }),
            t.jsxs('div', { className: lt, children: [t.jsx('div', { className: ct, children: s }), '/', e] }),
        ],
    });
}
const mt = 'BonusCard_b7b7b0c4',
    ut = 'BonusCard_base__selected_65ff400e',
    _t = 'BonusCard_img_d748a277',
    pt = 'BonusCard_content_55446e37',
    bt = 'BonusCard_statusIcon_48a0db7c',
    gt = 'BonusCard_background_6ade597b',
    vt = 'BonusCard_background__selected_4ba38d69',
    Nt = i.resolve('images'),
    ht = i.resolve('strings'),
    yt = s(function ({ name: e, value: s, id: n }) {
        const { model: r, controls: o } = ee(),
            { selectedBonus: i } = r.root.get(),
            l = i === n,
            c = f({
                header: ht.readOrEmpty(`pet_system.bonus.${e}.title`),
                body: ht.readOrEmpty('pet_system.petStorage.petBonus.tooltip.content'),
            });
        return t.jsxs(P, {
            ...c,
            className: a(mt, l && ut),
            selected: l,
            status: l ? 'done' : void 0,
            classNames: { status: { icon: bt } },
            onClick: l ? void 0 : () => o.selectBonus(n),
            children: [
                t.jsx('div', {
                    className: _t,
                    style: { backgroundImage: `url(${Nt.readOrEmpty(`library.currency.${e}_80x80`)})` },
                }),
                t.jsx('div', {
                    className: pt,
                    children: t.jsx(k, { path: 'pet_system.plusPercentValue', params: { value: s } }),
                }),
                t.jsx('div', { className: a(gt, l && vt) }),
            ],
        });
    }),
    xt = 'PetBonus_c10cb3e0',
    jt = s(function () {
        const { model: e } = ee(),
            s = e.bonuses.get();
        return t.jsx(I, {
            className: xt,
            children: g(s, (e) => t.jsx(yt, { name: e.name, value: e.value, id: e.id }, e.id)),
        });
    }),
    Ct = 'Status_9a38fa07',
    ft = 'Status_background_eebcfca7',
    Bt = 'Status_blur_bf1a0a06',
    St = 'Status_content_c5cb37ff',
    Pt = i.resolve('strings'),
    kt = s(function () {
        const { model: e, controls: s } = ee(),
            { isPetSelected: a, petID: n } = e.root.get();
        return t.jsx(t.Fragment, {
            children: a
                ? t.jsxs('div', {
                      className: Ct,
                      children: [
                          t.jsx('div', {
                              className: St,
                              children: Pt.readOrEmpty('pet_system.petStorage.status.selected'),
                          }),
                          t.jsx('div', { className: ft }),
                          t.jsx('div', { className: Bt }),
                      ],
                  })
                : t.jsx(v, {
                      onClick: () => s.selectPet(n),
                      children: Pt.readOrEmpty('pet_system.petStorage.status.select'),
                  }),
        });
    }),
    It = 'PetDescription_cca29ef9',
    Et = i.resolve('strings'),
    Ot = s(function () {
        const { model: e } = ee(),
            { breedName: s } = e.root.get();
        return t.jsx(E, { className: It, text: Et.readOrEmpty(`pet_system.petDescription.${s}`), lines: 3 });
    }),
    Dt = 'PrimaryContent_block_cd150e59',
    $t = 'PrimaryContent_title_2c3b0ca3',
    wt = 'PrimaryContent_title__pet_ae10c939',
    At = 'PrimaryContent_progressbar_d2be5e29',
    Mt = 'PrimaryContent_progressbarWrapper_13d35760',
    Tt = 'PrimaryContent_progressbarInfo_6daac14',
    Vt = 'PrimaryContent_status_b56886f5',
    zt = i.resolve('strings'),
    Ft = s(function () {
        const { model: e } = ee(),
            { totalCount: s, currentCount: n } = e.root.get(),
            r = f({
                header: zt.readOrEmpty('pet_system.petStorage.progressbarTooltip.title'),
                body: zt.readOrEmpty('pet_system.petStorage.progressbarTooltip.content'),
            });
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx('div', {
                    className: Dt,
                    children: t.jsxs('div', {
                        className: At,
                        children: [
                            t.jsx('div', { ...r, className: Mt, children: t.jsx(dt, { total: s, current: n }) }),
                            t.jsxs('div', {
                                className: Tt,
                                children: [
                                    t.jsx('div', {
                                        className: $t,
                                        children: zt.readOrEmpty('pet_system.petStorage.progressbarTitle'),
                                    }),
                                    zt.readOrEmpty('pet_system.petStorage.progressbarDescription'),
                                ],
                            }),
                        ],
                    }),
                }),
                t.jsxs('div', {
                    className: Dt,
                    children: [
                        t.jsx('div', {
                            className: a($t, wt),
                            children: zt.readOrEmpty('pet_system.petStorage.petBonus.title'),
                        }),
                        t.jsx(jt, {}),
                    ],
                }),
                t.jsxs('div', {
                    className: Dt,
                    children: [t.jsx(Ot, {}), t.jsx('div', { className: Vt, children: t.jsx(kt, {}) })],
                }),
            ],
        });
    }),
    Rt = 'PromotionBonuses_e7412a66',
    Wt = 'PromotionBonuses_bonus_cba5b56f',
    Ht = 'PromotionBonuses_header_b1113ed9',
    Ut = 'PromotionBonuses_img_cb948ce5',
    qt = 'PromotionBonuses_title_3c2cfcb9',
    Lt = 'PromotionBonuses_text_227fa49e',
    Gt = i.resolve('images'),
    Kt = i.resolve('strings'),
    Qt = s(function () {
        const e = O(),
            { model: s } = ee(),
            a = s.promotionBonuses.get();
        return a.length > 0
            ? t.jsx('div', {
                  className: Rt,
                  children: g(a, (s) =>
                      t.jsxs(
                          'div',
                          {
                              className: Wt,
                              children: [
                                  t.jsxs('div', {
                                      className: Ht,
                                      children: [
                                          t.jsx('div', {
                                              className: Ut,
                                              style: {
                                                  backgroundImage: `url(${Gt.readOrEmpty(`petSystem.promotion.${s}${e.breakpoint.weight < D.medium.weight ? '_sm' : ''}`)})`,
                                              },
                                          }),
                                          t.jsx('div', {
                                              className: qt,
                                              children: Kt.readOrEmpty(`pet_system.bonus.${s}.title`),
                                          }),
                                      ],
                                  }),
                                  t.jsx('div', {
                                      className: Lt,
                                      children: Kt.readOrEmpty(`pet_system.bonus.${s}.description`),
                                  }),
                              ],
                          },
                          s,
                      ),
                  ),
              })
            : null;
    }),
    Xt = 'PromotionalContent_descriptionWrapper_d0793a29',
    Yt = 'PromotionalContent_bonusesWrapper_b512891d',
    Zt = 'PromotionalContent_title_85a152c0',
    Jt = 'PromotionalContent_challengeText_a8dfced1',
    es = 'PromotionalContent_buttons_a5156779',
    ts = 'PromotionalContent_btn_9f57b1f6',
    ss = i.resolve('strings'),
    as = s(function () {
        const { model: e, controls: s } = ee(),
            { petID: a } = e.root.get(),
            { isChallengeButtonEnabled: n, isPurchaseButtonEnabled: r } = e.promo.get(),
            o = O().breakpoint.weight >= D.medium.weight ? v.sizes.large : v.sizes.medium;
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx('div', { className: Xt, children: t.jsx(Ot, {}) }),
                t.jsx('div', { className: Yt, children: t.jsx(Qt, {}) }),
                t.jsx('div', {
                    className: Zt,
                    children: ss.readOrEmpty(`pet_system.promotion.challengeInfo.title_${a}`),
                }),
                t.jsx('div', {
                    className: Jt,
                    children: ss.readOrEmpty(`pet_system.promotion.challengeInfo.text_${a}`),
                }),
                t.jsxs('div', {
                    className: es,
                    children: [
                        n &&
                            t.jsx(v, {
                                className: ts,
                                size: o,
                                onClick: () => s.selectChallenge(),
                                children: ss.readOrEmpty('pet_system.promotion.button.challenge'),
                            }),
                        r &&
                            t.jsx(v, {
                                className: ts,
                                size: o,
                                onClick: () => s.selectPurchase(),
                                theme: v.themes.secondary,
                                children: ss.readOrEmpty('pet_system.promotion.button.purchase'),
                            }),
                    ],
                }),
            ],
        });
    }),
    ns = s(function () {
        const { model: e } = ee(),
            { isPromotionEnabled: s } = e.promo.get();
        return t.jsxs(t.Fragment, { children: [t.jsx(nt, {}), s ? t.jsx(as, {}) : t.jsx(Ft, {})] });
    });
$(1, 12, w);
const rs = 'left',
    os = 'right',
    is = 'both',
    ls = 'none',
    cs = {
        button: 'ArrowButton_button_4f10eb80',
        icon: 'ArrowButton_icon_35e5294f',
        button__left: 'ArrowButton_button__left_5327085d',
        background: 'ArrowButton_background_5327085d',
        border: 'ArrowButton_border_5327085d',
        overlay: 'ArrowButton_overlay_c36cbc33',
        content: 'ArrowButton_content_4666fd05',
        button__right: 'ArrowButton_button__right_5327085d',
    };
function ds({ direction: e, className: s, ...n }) {
    return t.jsx(v, {
        ...n,
        classNames: {
            base: a(cs.button, cs[`button__${e}`], s),
            background: cs.background,
            border: cs.border,
            overlay: cs.overlay,
            content: cs.content,
        },
        theme: v.themes.secondary,
        size: v.sizes.small,
        autoAlignContent: !1,
        soundTarget: 'carousel:arrow_button',
        children: t.jsx(C, { path: 'hangar.carousel.buttonArrow', className: cs.icon }),
    });
}
ds.direction = { right: 'right', left: 'left' };
const ms = {
    navButtonWrapper: 'CarouselNavButtons_navButtonWrapper_a13c2a68',
    navButton: 'CarouselNavButtons_navButton_7ac02b68',
    navButton__left: 'CarouselNavButtons_navButton__left_5f6dc3a0',
    navButton__right: 'CarouselNavButtons_navButton__right_66b4f03f',
    navButton__hidden: 'CarouselNavButtons_navButton__hidden_69011a0b',
    mask: 'CarouselNavButtons_mask_d54421e2',
    mask__both: 'CarouselNavButtons_mask__both_7294632e',
    mask__left: 'CarouselNavButtons_mask__left_e8bc4c90',
    mask__right: 'CarouselNavButtons_mask__right_6be519f7',
};
function us({ itemWidth: s, api: n, children: r }) {
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
        className: ms.navButtonWrapper,
        children: [
            t.jsx(ds, {
                direction: ds.direction.left,
                onMouseDown: () => g(-1),
                onMouseUp: v,
                onMouseLeave: v,
                className: a(ms.navButton, ms.navButton__left, p && ms.navButton__hidden),
            }),
            t.jsx('div', {
                className: a(ms.mask, ms[`mask__${((N = u), (h = _), N || h ? (N ? (h ? ls : os) : rs) : is)}`]),
                children: r,
            }),
            t.jsx(ds, {
                direction: ds.direction.right,
                onMouseDown: () => g(1),
                onMouseUp: v,
                onMouseLeave: v,
                className: a(ms.navButton, ms.navButton__right, b && ms.navButton__hidden),
            }),
        ],
    });
    var N, h;
}
const _s = 'PetCard_background_1e63f02a',
    ps = 'PetCard_bf81336e',
    bs = 'PetCard_cardContent_202be88e',
    gs = 'PetCard_petName_adc2e0e7',
    vs = 'PetCard_petImage_ffe959dd',
    Ns = 'PetCard_bonusContainer_ad77c415',
    hs = 'PetCard_bonusValue_7fc2b9ba',
    ys = 'PetCard_promo_189845c7',
    xs = 'PetCard_maxSynergy_24397566',
    js = 'PetCard_statusIcon_57abf9a1',
    Cs = i.resolve('images'),
    fs = i.resolve('strings');
function Bs({
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
        className: a(ps, m),
        classNames: { mainContainerContent: bs, status: { icon: js } },
        children: [
            t.jsx('div', {
                className: _s,
                style: {
                    backgroundImage: `url(${Cs.readOr(`petSystem.backgrounds.x184x84.pet_${e}`, () => Cs.readOrEmpty('petSystem.backgrounds.x184x84.default'))})`,
                },
            }),
            t.jsx('div', {
                className: vs,
                style: { backgroundImage: `url(${Cs.readOrEmpty(`petSystem.pets.x184x108.pet_${e}`)})` },
            }),
            l &&
                t.jsxs('div', {
                    className: Ns,
                    children: [
                        t.jsx(V, { type: l }),
                        t.jsx('div', {
                            className: hs,
                            children: t.jsx(k, { path: 'pet_system.plusPercentValue', params: { value: d } }),
                        }),
                    ],
                }),
            o && !r && t.jsx(C, { path: 'petSystem.pet_active_24', className: xs, width: 24, height: 24 }),
            r &&
                t.jsx('div', {
                    className: ys,
                    children: t.jsx(c.Root, {
                        children: t.jsx(c.Value, {
                            value: fs.readOrEmpty('pet_system.petStorage.petCard.promo'),
                            size: z.medium,
                        }),
                    }),
                }),
            t.jsx('div', {
                className: gs,
                children: fs.readOr(`pet_names.petName_${s}`, () => fs.readOrEmpty('pet_names.petName_default')),
            }),
        ],
    });
}
const Ss = 'Carousel_draggingOverlay_2ac699b0',
    Ps = 'Carousel_content_bca51e20',
    ks = 'Carousel_cardsWrapper_ef51bc77',
    Is = 'Carousel_card_c8c3acdf',
    Es = 'Carousel_scrollWrapper_aa4cb2bd';
function Os(e) {
    return t.jsx('div', { ...e, className: a(Ps, e.className) });
}
const Ds = s(function () {
        const [s, a] = e.useState(!1),
            { api: r } = F(),
            o = R(196, []),
            { model: i, controls: l } = ee(),
            c = i.cards.get(),
            d = i.root.get(),
            m = d.petID,
            u = d.activePetID;
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx(us, {
                    api: r,
                    itemWidth: o,
                    children: t.jsx(W, {
                        api: r,
                        elementWidth: o,
                        direction: 'horizontal',
                        totalElements: c.length,
                        throttle: 80,
                        wrappers: { Content: Os },
                        renderScroll: (e, [s, n]) =>
                            t.jsx(H, {
                                ...e,
                                disabled: !1,
                                api: r,
                                areaClassNames: { wrapper: Es },
                                onDraggingState: a,
                                children: t.jsx(I, {
                                    className: ks,
                                    border: U.contour,
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
                            return t.jsx(Bs, {
                                className: Is,
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
                n.createPortal(s && t.jsx('div', { className: Ss }), document.body),
            ],
        });
    }),
    $s = { base: 'InfoPageEntry_4b0e1346' },
    ws = i.resolve('strings'),
    As = i.resolve('sounds');
function Ms() {
    const { controls: e } = ee();
    return t.jsx('div', {
        className: $s.base,
        onClick: function () {
            (As.play('play'), e.infoPageOpen());
        },
        onMouseEnter: () => As.play('highlight'),
        children: ws.readOrEmpty('pet_system.infoPageEntryPoint'),
    });
}
const Ts = 'Footer_1c31242f',
    Vs = 'Footer_carouselContainer_9ed2d931';
function zs() {
    return t.jsxs('div', {
        className: Ts,
        children: [t.jsx('div', { className: Vs, children: t.jsx(q, { children: t.jsx(Ds, {}) }) }), t.jsx(Ms, {})],
    });
}
const Fs = 'App_72d9d6ee',
    Rs = 'App_contentWrapper_3f125c71',
    Ws = s(function () {
        const { controls: e } = ee();
        return (
            L(G.ESCAPE, e.close),
            t.jsxs('div', {
                className: Fs,
                children: [t.jsx('div', { className: Rs, children: t.jsx(ns, {}) }), t.jsx(zs, {})],
            })
        );
    });
K(t.jsx(J, { children: t.jsx(Q, { children: t.jsx(Ws, {}) }) }))
    .then(() => X(document.getElementById('root')))
    .then(() => Y());
