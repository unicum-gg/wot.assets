import { ad as t } from './lib.js';
const n = {
        ENTRY_POINT: {
            icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
            shine: { opacityCustom: 0.15, opacityCustomNewBox: 0.4, opacityDiff: 0.15, animationDuration: '40s' },
        },
        HAS_BOXES_VIEW: {
            hasIdle: !0,
            vignette: { isEnabled: !0, opacity: 0.4 },
            tabsGuaranteedCount: 10,
            accentCount: 5,
            hoverZone: { width: '38%', height: '39%', horizontalOffset: '30.8%', verticalOffset: '39%' },
            backgroundColor: '#111',
        },
        INFO_PAGE: { hasDescription: !0 },
        REWARDS: { accentCount: 5 },
    },
    o = {
        DEFAULT_CONFIG: n,
        anniversaryCN: {
            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
            INFO_PAGE: { hasDescription: !0 },
        },
    },
    e = (e, s) => {
        const i = o[t(e)];
        return i
            ? ((t, n) => {
                  const o = (t, n) => {
                      const e = { ...t };
                      for (const s in e)
                          n &&
                              s in n &&
                              ('object' == typeof e[s] ? (e[s] = o(e[s], n[s] ?? e[s])) : (e[s] = n[s] ?? e[s]));
                      return e;
                  };
                  return o(t, n);
              })(n[s], i[s])
            : n[s];
    };
export { e as g };
