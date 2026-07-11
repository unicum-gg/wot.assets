import { o as e, K as s, q as o } from './vendor.js';
import {
    i as t,
    dp as n,
    cr as r,
    cs as a,
    dq as i,
    dd as c,
    dr as l,
    ds as u,
    S as p,
    dt as m,
    du as b,
    dv as d,
    dw as P,
    W as v,
} from './lib.js';
var f = ((e) => ((e.None = 'None'), (e.Core = 'Core'), (e.Pro = 'Pro'), e))(f || {}),
    g = ((e) => ((e.Inactive = 'Inactive'), (e.Active = 'Active'), (e.Cancelled = 'Cancelled'), e))(g || {});
const C = n(
        P((e) => e > 0),
        d(v),
    ),
    k = [
        [i, c],
        [l, u],
        [p, m],
        [b, () => m(1)],
    ];
function A(e) {
    if (e) {
        const s = r(e, a());
        for (const [e, o] of k) {
            const t = Math.ceil(e(s));
            if (t > 0) return o(t);
        }
    }
}
var x = ((e) => ((e.Unlock = 'unlock'), (e.UnlockSteamAndCn = 'unlockSteamAndCn'), (e.UnlockPro = 'unlockPro'), e))(
    x || {},
);
const [y, I] = t('UserAccountProvider')(
    ({ observableModel: t, cleanup: n }) => {
        const r = t.object('userInfo'),
            a = t.object('subscriptions.wotPlus'),
            i = t.object('subscriptions.premiumAccount'),
            c = t.primitives(['isCnRealm', 'isSteamPlatform'], 'subscriptions'),
            l = t.arrayClone('subscriptions.wotPlus.benefits'),
            u = t.arrayClone('subscriptions.wotPlus.proBenefits'),
            p = { basic: e.box(A(C(i.get().expiryTime))), plus: e.box(A(C(a.get().expiryTime))) };
        const m = s(
                () => i.get().expiryTime,
                (e) => {
                    p.basic.set(A(C(e)));
                },
            ),
            b = s(
                () => a.get().expiryTime,
                (e) => {
                    p.plus.set(A(C(e)));
                },
            ),
            d = setInterval(function () {
                o(() => {
                    (p.basic.set(A(C(i.get().expiryTime))), p.plus.set(A(C(a.get().expiryTime))));
                });
            }, 6e4);
        return (
            n(() => {
                (clearInterval(d), m(), b());
            }),
            {
                userInfo: r,
                premiums: p,
                wotPlus: a,
                premiumAccount: i,
                benefits: l,
                proBenefits: u,
                subscriptionPrimitives: c,
                getTooltipVariant: () => {
                    const e = a.get().state,
                        s = a.get().type;
                    return e === g.Inactive && s === f.None && (c.isCnRealm.get() || c.isSteamPlatform.get())
                        ? 'unlockSteamAndCn'
                        : e === g.Inactive && s === f.None
                          ? 'unlock'
                          : e !== g.Inactive && s === f.Core
                            ? 'unlockPro'
                            : 'unlock';
                },
            }
        );
    },
    ({ externalModel: e }) => ({
        openAccountDashboard: e.createCallbackNoArgs('onOpenAccountDashboard'),
        openWotPlusSubscriptionPage: e.createCallbackNoArgs('subscriptions.onOpenWotPlus'),
        openPremiumSubscriptionPage: e.createCallbackNoArgs('subscriptions.onOpenPremium'),
    }),
);
export { x as T, y as U, g as W, f as a, I as u };
