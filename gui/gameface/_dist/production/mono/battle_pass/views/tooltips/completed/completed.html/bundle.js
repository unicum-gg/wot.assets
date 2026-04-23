import { g as s, j as e, v as t, f as a } from '../../../../chunks/vendor.js';
import { i as o, N as n, bY as c, J as l, U as i, d } from '../../../../chunks/lib.js';
import { I as m } from '../../../../chunks/icon_text_block.js';
var r = ((s) => ((s.COMMON = 'common'), (s.EXTRA = 'extra'), (s.HOLIDAY = 'holiday'), s))(r || {});
const [_, x] = o()(({ observableModel: e }) => {
        const t = { root: e.object() },
            a = s(() => t.root.get().chapterType === r.HOLIDAY);
        return { ...t, computes: { isHoliday: a } };
    }, n),
    p = 'Message_3327d7a0',
    j = 'Message_separator_8e93a926',
    u = 'Message_content_6bca034f',
    b = 'Message_text_7eae674d',
    h = ({ text: s }) =>
        e.jsxs('div', {
            className: p,
            children: [
                e.jsx('div', { className: j }),
                e.jsx('div', { className: u, children: e.jsx('div', { className: b, children: s }) }),
                e.jsx('div', { className: j }),
            ],
        }),
    g = 'CustomContent_background_64384741',
    C = 'CustomContent_tank_61704151',
    v = 'CustomContent_footer_2bfe8c75',
    N = 'CustomContent_messageWrapper_8c5889c7',
    k = 'CustomContent_textWrapper_69b29c66',
    f = 'CustomContent_check_67de302c',
    P = 'CustomContent_text_edf6432',
    w = R.strings.battle_pass.tooltips,
    M = t(() => {
        const { model: s } = x(),
            { isBattlePassPurchased: t } = s.root.get();
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: g }),
                e.jsx('div', { className: C }),
                e.jsx('div', {
                    className: v,
                    children: e.jsx('div', {
                        className: N,
                        children: e.jsx(h, {
                            text: e.jsxs('div', {
                                className: k,
                                children: [
                                    e.jsx('div', {
                                        className: f,
                                        style: {
                                            backgroundImage: `url(${t ? R.images.gui.maps.icons.battlePass.tooltips.double_check() : R.images.gui.maps.icons.battlePass.tooltips.check()})`,
                                        },
                                    }),
                                    e.jsx('div', {
                                        className: P,
                                        children: t ? w.completed.claimRewards() : w.completed.rewardsObtained(),
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            ],
        });
    }),
    T = 'Content_d9cfcd3f',
    y = 'Content_base__noDescription_b474774a',
    O = 'Content_title_22d0441e',
    A = 'Content_subTitle_7bb4259d',
    D = 'Content_tank_dcd7ba89',
    H = 'Content_footer_e0404414',
    I = 'Content_flare_273bab95',
    W = 'Content_messageWrapper_21d573e9',
    B = 'Content_info_a37d477a',
    Y = 'Content_unlock_8083471',
    F = R.strings.battle_pass.tooltips,
    L = t(() => {
        const { model: s } = x(),
            { isBattlePassPurchased: t, notChosenRewardCount: o, isAvailableTankmen: n } = s.root.get(),
            c = o > 0,
            l = s.computes.isHoliday();
        return e.jsxs('div', {
            className: a(T, t && !c && !n && y),
            children: [
                e.jsx('div', { className: O, children: F.completed.title() }),
                e.jsx('div', { className: A, children: l ? F.completed.oneChapterSubTitle() : F.completed.subTitle() }),
                l
                    ? e.jsx(M, {})
                    : e.jsxs(e.Fragment, {
                          children: [
                              e.jsx('div', { className: D }),
                              e.jsxs('div', {
                                  className: H,
                                  children: [
                                      e.jsx('div', { className: I }),
                                      e.jsx('div', {
                                          className: W,
                                          children: e.jsx(h, { text: F.completed.message() }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                e.jsxs('div', {
                    className: B,
                    children: [
                        c &&
                            e.jsx(m, {
                                icon: R.images.gui.maps.icons.battlePass.tooltips.bow_small(),
                                text: o > 1 ? F.claimRewards.multiple() : F.claimRewards.c_1(),
                                className: Y,
                            }),
                        !t &&
                            e.jsx(m, {
                                icon: R.images.gui.maps.icons.battlePass.progression.icon_lock_current_small(),
                                text: F.unlockBattlePass(),
                                className: Y,
                            }),
                        n &&
                            e.jsx(m, {
                                icon: R.images.gui.maps.icons.battlePass.icons.tankmen_small(),
                                text: F.completed.tankmenNotRecieved(),
                                className: a(Y),
                            }),
                    ],
                }),
            ],
        });
    }),
    E = () => e.jsx(c, { children: e.jsx(c.Decorator, { children: e.jsx(L, {}) }) });
d(new l().add(i).addWithProps(_, {}).render(e.jsx(E, {})));
