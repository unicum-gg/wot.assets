import { j as e, k as a, i as s } from '../../../chunks/vendor.js';
import { p as t, g as o, i, N as n, F as r, B as c, r as _, U as d } from '../../../chunks/lib.js';
import { a as p } from '../../../chunks/format.js';
var l = ((e) => (
        (e.DOORS_AVAILABLE = 'doorsAvailable'),
        (e.FIRST_ENTRY = 'firstEntry'),
        (e.POST_EVENT = 'postEvent'),
        e
    ))(l || {}),
    b = ((e) => ((e.AUTUMN = 'autumn'), (e.WINTER = 'winter'), e))(b || {});
const m = {
        root: 'Background_root_26effab7',
        base: 'Background_8bf6276d',
        base__popUp: 'Background_base__popUp_e2773e75',
        base__autumn: 'Background_base__autumn_b2fac302',
        base__winter: 'Background_base__winter_fe2e2aa7',
        border: 'Background_border_96e049c8',
        image: 'Background_image_8d753b88',
    },
    u = {
        [b.AUTUMN]: R.images.advent_calendar.gui.maps.icons.notifications.autumn.background(),
        [b.WINTER]: R.images.advent_calendar.gui.maps.icons.notifications.winter.background(),
    },
    v = ({ theme: s, isPopUp: t }) =>
        e.jsxs('div', {
            className: a(m.base, m[`base__${s}`], t && m.base__popUp),
            children: [
                e.jsx('div', { className: m.border }),
                e.jsx('div', { className: m.image, style: { backgroundImage: `url(${u[s]})` } }),
            ],
        }),
    g = 'CloseButton_6ff70f96',
    h = ({ classNames: s }) =>
        e.jsx('div', {
            className: a(g, null == s ? void 0 : s.base),
            onMouseEnter: () => t.sound(R.sounds.highlight()),
            onClick: () => t.sound(R.sounds.cancelcloseno()),
        }),
    j = 'Decorator_b22d9fdb',
    f = 'Decorator_base__popUp_aeffa563',
    x = 'Decorator_closeButton_81d519e7',
    N = 'Decorator_content_2fd93777',
    k = 'Decorator_backgroundWrapper_f04a7de',
    A = 'Decorator_lipTop_977ea454',
    E = 'Decorator_lipBottom_fc59f66d',
    U = ({ children: s, isPopUp: i, background: n, theme: r, className: c }) => (
        o(() => {
            i && t.sound('adv_notification');
        }),
        e.jsxs('div', {
            className: a(j, i && f, c),
            children: [
                e.jsx('div', { className: N, children: s }),
                i && e.jsx(h, { classNames: { base: x } }),
                e.jsx('div', { className: k, children: n || e.jsx(v, { isPopUp: i, theme: r }) }),
                !i &&
                    e.jsxs(e.Fragment, { children: [e.jsx('div', { className: A }), e.jsx('div', { className: E })] }),
            ],
        })
    ),
    [D, B] = i()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ onClick: e.createCallbackNoArgs('onClick') }),
    ),
    T = {
        root: 'App_root_0',
        base: 'App_32c3a1ef',
        base__popUp: 'App_base__popUp_530eceac',
        titleWrapper: 'App_titleWrapper_790cf5a6',
        title: 'App_title_faf78876',
        rewardImage: 'App_rewardImage_a1e3212f',
        base__withDescription: 'App_base__withDescription_0',
        base__autumn: 'App_base__autumn_0',
        base__winter: 'App_base__winter_0',
        description: 'App_description_be70d06b',
        button: 'App_button_b6edc495',
    },
    w = R.strings.advent_calendar.notification.adventCalendarDoorsAvailable,
    I = {
        [l.FIRST_ENTRY]: { title: w.event.title(), description: w.event.description(), action: w.event.action() },
        [l.DOORS_AVAILABLE]: { title: w.event.title(), action: w.event.action() },
        [l.POST_EVENT]: {
            title: w.postEvent.title(),
            description: w.postEvent.description(),
            action: w.postEvent.action(),
        },
    },
    C = s(() => {
        const { model: s, controls: t } = B(),
            { state: o, theme: i, eventEndDate: _, isPopUp: d, isButtonDisabled: l } = s.root.get(),
            { title: b, description: m, action: u } = I[o],
            v = !!m;
        return e.jsx(n, {
            children: e.jsx(U, {
                isPopUp: d,
                theme: i,
                children: e.jsxs('div', {
                    className: a(T.base, T[`base__${i}`], d && T.base__popUp, v && T.base__withDescription),
                    children: [
                        e.jsx('div', {
                            className: T.titleWrapper,
                            children: e.jsx(r, { text: b, className: T.title }),
                        }),
                        e.jsx('div', { className: T.rewardImage }),
                        v && e.jsx(r, { text: m, className: T.description, params: { date: p(_) } }),
                        e.jsx('div', {
                            children: e.jsx(c, {
                                theme: c.themes.secondary,
                                onClick: t.onClick,
                                size: 'small',
                                className: T.button,
                                disabled: l,
                                children: e.jsx(r, { text: u }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    });
_(e.jsx(d, { children: e.jsx(D, { children: e.jsx(C, {}) }) }));
