import { y as e, z as n, j as t, A as a, x as r } from '../../../chunks/vendor.js';
import { i as s, e as o, M as i, F as d, p as m, O as c, h as l, j as g, r as _ } from '../../../chunks/lib.js';
import { g as p } from '../../../chunks/get_time_left.js';
import { I as u } from '../../../chunks/consts.js';
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
        const n = p(e);
        return e >= c
            ? t.jsx(d, {
                  text: R.strings.comp7_ext.grandTournamentWidget.counter.days(),
                  binding: { days: n.totalDays, hours: n.hours },
              })
            : e >= l
              ? t.jsx(d, { text: R.strings.comp7_ext.grandTournamentWidget.counter.hours(), binding: n })
              : e >= g
                ? t.jsx(d, { text: R.strings.comp7_ext.grandTournamentWidget.counter.minutes(), binding: n })
                : t.jsx(d, { text: R.strings.comp7_ext.grandTournamentWidget.counter.lastMinute() });
    },
    T = (e, n) =>
        e !== x.Countdown || n
            ? `${R.strings.comp7_ext.grandTournamentWidget.$dyn(e)}`
            : R.strings.comp7_ext.grandTournamentWidget.countdownShort(),
    k = e(() => {
        const { model: e, controls: s } = y(),
            { state: c, isExtended: l, timeLeft: g } = e.root.get(),
            { mediaSize: _ } = o(),
            p = _ >= i.Medium && l,
            b = `${c === x.Live ? '_live' : ''}${p ? '_big' : ''}`,
            k = n(u);
        return t.jsxs(a.div, {
            style: k,
            className: r(j.base, c === x.Live && j.base__live, p && j.base__large),
            onClick: () => {
                (m.click(), s.openComp7GrandTournament());
            },
            onMouseEnter: () => {
                m.highlight();
            },
            children: [
                t.jsx('div', {
                    className: r(j.layer, j.layer__background),
                    style: {
                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.grandTournament.$dyn(`background${b}`)})`,
                    },
                }),
                t.jsx('div', {
                    className: r(j.layer, j.layer__logo),
                    style: {
                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.grandTournament.$dyn(`logo${b}`)})`,
                    },
                }),
                t.jsx('div', {
                    className: j.textWrapper,
                    children: h.includes(c)
                        ? t.jsx(d, {
                              text: T(c, p),
                              binding: {
                                  timer: t.jsx('div', {
                                      className: j.timerContainer,
                                      children: t.jsx('div', { className: j.timer }),
                                  }),
                                  countdown: v(g),
                              },
                              classMix: j.timerText,
                          })
                        : t.jsx('div', { children: `${R.strings.comp7_ext.grandTournamentWidget.$dyn(c)}` }),
                }),
            ],
        });
    });
_(t.jsx(b, { children: t.jsx(k, {}) }));
