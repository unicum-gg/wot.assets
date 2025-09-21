import { j as s, f as e, s as a, m as r, r as t } from './vendor.js';
import {
    i as d,
    $ as o,
    aT as i,
    p as n,
    s as c,
    T as l,
    E as _,
    aU as u,
    X as g,
    aw as m,
    a5 as p,
    a6 as b,
    a7 as h,
    as as x,
} from './lib.js';
import { K as C, a as k } from './key_icon.js';
import { e as j, g as v, a as B, b as f } from './utils2.js';
const [Q, w] = d()(({ observableModel: s }) => ({ root: s.object(), bonus: s.object('bonus') }), o);
var y = ((s) => ((s.Hidden = 'hidden'), (s.Default = 'default'), (s.Badge = 'badge'), s))(y || {});
const N = 'GswCard_f67d7656',
    I = 'GswCard_base__hovered_90e34911',
    P = 'GswCard_base__active_24c4fe30',
    M = 'GswCard_base__extraLarge_30070465',
    G = 'GswCard_base__fullBorder_e7e89566',
    S = 'GswCard_bg_a2247d08',
    T = 'GswCard_bgHover_d50003c';
function F({
    className: a,
    fullBorder: r,
    disabled: t,
    children: d,
    hovered: o = !1,
    active: c = !1,
    extraLarge: l = !1,
    hoverSound: _ = i.highlight,
    clickSound: u = i.click,
    onClick: g,
    onHover: m,
    onActive: p,
}) {
    return s.jsxs('div', {
        className: e(N, r && G, o && I, c && P, l && M, a),
        onClick: () => {
            t || (n.sound(u), g());
        },
        onMouseEnter: () => {
            t || (n.sound(_), m && m(!0));
        },
        onMouseLeave: () => {
            (m && m(!1), p && p(!1));
        },
        onMouseDown: () => {
            t || (p && p(!0));
        },
        onMouseUp: () => p && p(!1),
        children: [s.jsx('div', { className: S }), s.jsx('div', { className: T }), d],
    });
}
const H = {
        root: 'QuestsCard_root_aa7c2d27',
        progressBar: 'QuestsCard_progressBar_276fd1c4',
        progressBarBackgroundPattern: 'QuestsCard_progressBarBackgroundPattern_65cb92b3',
        progressBarFillStart: 'QuestsCard_progressBarFillStart_788b796a',
        progressBarBackground: 'QuestsCard_progressBarBackground_d0c73aac',
        quest_app: 'QuestsCard_quest_app_fd2a8a62',
        tooltip: 'QuestsCard_tooltip_4b3f56a9',
        content: 'QuestsCard_content_ab78c215',
        completed: 'QuestsCard_completed_a06ca3d8',
        completed__hide: 'QuestsCard_completed__hide_2dd93719',
        bg: 'QuestsCard_bg_6a5d2fdc',
        bg__regular: 'QuestsCard_bg__regular_d17bdb63',
        icon: 'QuestsCard_icon_d1577390',
        icon__hide: 'QuestsCard_icon__hide_2dd93719',
        description: 'QuestsCard_description_d9ecba8a',
        content__badge: 'QuestsCard_content__badge_aa7c2d27',
        description__show: 'QuestsCard_description__show_c8c1f52a',
        keyBlock: 'QuestsCard_keyBlock_d8f6f44b',
        keyBlock__hide: 'QuestsCard_keyBlock__hide_2dd93719',
        keys: 'QuestsCard_keys_6161ef1f',
        keyIconBlock: 'QuestsCard_keyIconBlock_1d6b3b4',
        keyIcon: 'QuestsCard_keyIcon_e6e3a658',
        timer: 'QuestsCard_timer_ac45d8c9',
        timerIcon: 'QuestsCard_timerIcon_eea25ba5',
        progress: 'QuestsCard_progress_d9405742',
        progressValue: 'QuestsCard_progressValue_3a3228e0',
        currentProgress: 'QuestsCard_currentProgress_b51f3fcf',
        reward: 'QuestsCard_reward_26e00868',
    },
    V = a(({ className: e, fullBorder: a = !1, isHangar: t = !1 }) => {
        const { model: d } = w(),
            { breakpoint: i } = c(),
            {
                name: n,
                state: x,
                conditionName: Q,
                isCompleted: N,
                keyBonus: I,
                resetTime: P,
                currentProgress: M,
                maximumProgress: G,
            } = d.root.get(),
            S = d.bonus.get(),
            T = x === y.Badge;
        if (x === y.Hidden) return null;
        return s.jsx(F, {
            fullBorder: a,
            disabled: !0,
            onClick: o,
            children: s.jsxs('div', {
                className: r(H.quest_app, e),
                children: [
                    s.jsx(l, {
                        targetId: R.aliases.last_stand.shared.Quests('resId'),
                        contentId: R.views.last_stand.mono.lobby.tooltips.daily_quests_tooltip('resId'),
                        isEnabled: !N,
                        args: { progressCurrent: M, progressTotal: G },
                        children: s.jsx('div', { className: H.tooltip }),
                    }),
                    s.jsxs('div', {
                        className: r(H.content, H[`content__${x}`]),
                        children: [
                            s.jsx('div', { className: r(H.completed, !N && H.completed__hide) }),
                            !t && s.jsx('div', { className: r(H.bg, !T && H.bg__regular) }),
                            s.jsx('div', {
                                className: r(H.icon, N && H.icon__hide),
                                style: {
                                    backgroundImage: `url('R.images.last_stand.gui.maps.icons.gsw.conditions.${i.weight > g.large.weight ? 'c_48x48' : 'c_36x36'}.${Q}')`,
                                },
                            }),
                            s.jsx(
                                _,
                                {
                                    classMix: r(H.description, !T && (N ? H.description__hide : H.description__show)),
                                    text: n,
                                    isTruncationAvailable: !0,
                                },
                                `description${i.name}`,
                            ),
                            !T &&
                                s.jsx(_, {
                                    classMix: r(H.description, N ? H.description__show : H.description__hide),
                                    text: R.strings.last_stand_lobby.missionWidget.complete(),
                                    isTruncationAvailable: !0,
                                }),
                            T
                                ? s.jsxs(s.Fragment, {
                                      children: [
                                          s.jsxs('div', {
                                              className: H.progress,
                                              children: [
                                                  s.jsx(_, {
                                                      classMix: H.progressValue,
                                                      text: R.strings.last_stand_lobby.common.progress(),
                                                      binding: {
                                                          value: s.jsx('div', {
                                                              className: H.currentProgress,
                                                              children: j(M),
                                                          }),
                                                          maxValue: j(G),
                                                      },
                                                  }),
                                                  s.jsx(m, {
                                                      size: 'small',
                                                      className: H.progressBar,
                                                      classNames: {
                                                          background: H.progressBarBackground,
                                                          backgroundPattern: H.progressBarBackgroundPattern,
                                                      },
                                                      filledClassNames: { pattern: H.progressBarBackgroundPattern },
                                                      value: M,
                                                      maxValue: G,
                                                      children: s.jsx('div', { className: H.progressBarFillStart }),
                                                  }),
                                              ],
                                          }),
                                          s.jsx(p, {
                                              name: S.name,
                                              value: v(S),
                                              className: H.reward,
                                              size: i.weight > g.large.weight ? b.S80x80 : b.Small,
                                              special: S.overlayType,
                                              image: B(S, b.Small),
                                              valueType: h(S.name),
                                              tooltipArgs: f(S, R.aliases.last_stand.shared.Quests('resId')),
                                          }),
                                      ],
                                  })
                                : s.jsxs(s.Fragment, {
                                      children: [
                                          s.jsx('div', {
                                              className: r(H.keyBlock, N && H.keyBlock__hide),
                                              children: s.jsx(l, {
                                                  targetId: R.aliases.last_stand.shared.Quests('resId'),
                                                  contentId:
                                                      R.views.last_stand.mono.lobby.tooltips.key_tooltip('resId'),
                                                  children: s.jsxs('div', {
                                                      className: H.keys,
                                                      children: [
                                                          '+',
                                                          I,
                                                          s.jsx('div', {
                                                              className: H.keyIconBlock,
                                                              children: s.jsx(C, {
                                                                  className: H.keyIcon,
                                                                  size:
                                                                      i.weight > g.large.weight
                                                                          ? k.C70x70
                                                                          : i.weight > g.medium.weight
                                                                            ? k.C60x60
                                                                            : k.C24x24,
                                                                  gray: !0,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                          }),
                                          s.jsx('div', {
                                              className: H.timer,
                                              children: s.jsx(u, {
                                                  start: P,
                                                  format:
                                                      i.weight > g.medium.weight
                                                          ? u.format.default
                                                          : u.format.superCompact,
                                              }),
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                ],
            }),
        });
    }),
    $ = t.memo(function (e) {
        const a = R.aliases.last_stand.shared.Quests('resId'),
            r = t.useMemo(() => ({ rootId: a }), [a]);
        return s.jsx(x, { id: a, children: s.jsx(Q, { options: r, children: s.jsx(V, { ...e }) }) });
    });
export { F as G, $ as Q, y as W, Q as a, w as u };
