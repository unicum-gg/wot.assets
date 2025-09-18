import { x as e, y as n, j as a, z as t, A as r } from '../../../chunks/vendor.js';
import { i as s, u as o, M as i, F as d, p as m, O as c, a as l, b as g, r as u } from '../../../chunks/lib.js';
import { g as _ } from '../../../chunks/get_time_left.js';
import { I as p } from '../../../chunks/consts.js';
/* empty css                     */ var x = ((e) => (
    (e.Countdown = 'countdown'),
    (e.Live = 'live'),
    (e.DayIsOver = 'dayIsOver'),
    (e.Finished = 'finished'),
    e
))(x || {});
const [b, y] = s()(
        ({ observableModel: e }) => ({ root: e.object() }),
        ({ externalModel: e }) => ({ openComp7GrandTournament: e.createCallbackNoArgs('onOpenComp7GrandTournament') }),
    ),
    j = {
        base: 'App_35a80190',
        layer: 'App_layer_189ce663',
        layer__logo: 'App_layer__logo_86dd5fe3',
        base__large: 'App_base__large_0',
        layer__background: 'App_layer__background_f31b779a',
        textWrapper: 'App_textWrapper_ad2ac7b6',
        timerContainer: 'App_timerContainer_64e7ef0d',
        timer: 'App_timer_333e1eec',
        timerText: 'App_timerText_d9396d6d',
    },
    h = [x.Countdown, x.DayIsOver],
    v = (e) => {
        const n = _(e);
        return e >= c
            ? a.jsx(d, {
                  text: R.strings.comp7_ext.grandTournamentWidget.counter.days(),
                  binding: { days: n.totalDays, hours: n.hours },
              })
            : e >= l
              ? a.jsx(d, { text: R.strings.comp7_ext.grandTournamentWidget.counter.hours(), binding: n })
              : e >= g
                ? a.jsx(d, { text: R.strings.comp7_ext.grandTournamentWidget.counter.minutes(), binding: n })
                : a.jsx(d, { text: R.strings.comp7_ext.grandTournamentWidget.counter.lastMinute() });
    },
    T = (e, n) =>
        e !== x.Countdown || n
            ? `${R.strings.comp7_ext.grandTournamentWidget.$dyn(e)}`
            : R.strings.comp7_ext.grandTournamentWidget.countdownShort(),
    k = e(() => {
        const { model: e, controls: s } = y(),
            { state: c, isExtended: l, timeLeft: g } = e.root.get(),
            { mediaSize: u } = o(),
            _ = u >= i.Medium && l,
            b = `${c === x.Live ? '_live' : ''}${_ ? '_big' : ''}`,
            k = n(p);
        return a.jsxs(t.div, {
            style: k,
            className: r(j.base, c === x.Live && j.base__live, _ && j.base__large),
            onClick: () => {
                (m.click(), s.openComp7GrandTournament());
            },
            onMouseEnter: () => {
                m.highlight();
            },
            children: [
                a.jsx('div', {
                    className: r(j.layer, j.layer__background),
                    style: {
                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.grandTournament.$dyn(`background${b}`)})`,
                    },
                }),
                a.jsx('div', {
                    className: r(j.layer, j.layer__logo),
                    style: {
                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.grandTournament.$dyn(`logo${b}`)})`,
                    },
                }),
                a.jsx('div', {
                    className: j.textWrapper,
                    children: h.includes(c)
                        ? a.jsx(d, {
                              text: T(c, _),
                              binding: {
                                  timer: a.jsx('div', {
                                      className: j.timerContainer,
                                      children: a.jsx('div', { className: j.timer }),
                                  }),
                                  countdown: v(g),
                              },
                              classMix: j.timerText,
                          })
                        : a.jsx('div', { children: `${R.strings.comp7_ext.grandTournamentWidget.$dyn(c)}` }),
                }),
            ],
        });
    });
u(a.jsx(b, { children: a.jsx(k, {}) }));
