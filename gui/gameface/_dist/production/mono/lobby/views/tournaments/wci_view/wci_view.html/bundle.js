import { j as i } from '../../../../chunks/vendor.js';
import { aA as s, aB as n } from '../../../../chunks/lib.js';
import { T as m, A as a, a as o, b as e, W as t } from '../../../../chunks/winner_glow.js';
import '../../../../chunks/consts.js';
import '../../../../chunks/divine_glow.js';
import '../../../../chunks/animated_background.js';
const c = ({ children: s }) =>
    i.jsx(o.Provider, {
        value: {
            mainBgPath: R.images.comp7.gui.maps.icons.tournaments.wci.bg(),
            blurBgPath: R.images.comp7.gui.maps.icons.tournaments.wci.bg_blurred(),
            prizeFrameBgPath: R.images.comp7.gui.maps.icons.tournaments.wci.prize_frame(),
            topMatchGlowPath: R.images.comp7.gui.maps.icons.tournaments.wci.top_match_glow(),
            winnerGlowPath: R.images.comp7.gui.maps.icons.tournaments.wci.glow(),
            liveBgPath: {
                small: R.images.comp7.gui.maps.icons.tournaments.wci.live_bg_626x263(),
                medium: R.images.comp7.gui.maps.icons.tournaments.wci.live_bg_676x263(),
                large: R.images.comp7.gui.maps.icons.tournaments.wci.live_bg_786x299(),
                extraLarge: R.images.comp7.gui.maps.icons.tournaments.wci.live_bg_866x304(),
            },
            shopFramePath: {
                extraSmall: R.images.comp7.gui.maps.icons.tournaments.wci.shop_frame_626x120(),
                small: R.images.comp7.gui.maps.icons.tournaments.wci.shop_frame_676x130(),
                medium: R.images.comp7.gui.maps.icons.tournaments.wci.shop_frame_780x200(),
                large: R.images.comp7.gui.maps.icons.tournaments.wci.shop_frame_786x200(),
                extraLarge: R.images.comp7.gui.maps.icons.tournaments.wci.shop_frame_866x300(),
            },
            visitShopHeading: R.strings.comp7_ext.tournament.visitShop.heading.wci(),
            currencySign: R.strings.comp7_ext.tournament.cnySign(),
            currencyText: R.strings.comp7_ext.tournament.cny(),
            visitShopDescription: R.strings.comp7_ext.tournament.visitShop.description.wci(),
            roundRobinText: R.strings.comp7_ext.tournament.wci.roundRobin(),
            tournamentName: e.WCI,
            winnerGlowComponent: i.jsx(t, {}),
        },
        children: s,
    });
s(i.jsx(n, { children: i.jsx(c, { children: i.jsx(m, { children: i.jsx(a, {}) }) }) }), { fullScreen: !0 });
