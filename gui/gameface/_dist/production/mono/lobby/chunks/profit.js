import { j as _, f as o } from './vendor.js';
import { ap as e, aq as t } from './lib.js';
var r = ((_) => (
    (_.UNDEFINED = 'undefined'),
    (_.MUL = 'mul'),
    (_.ADD = 'add'),
    (_.SUB = 'sub'),
    (_.PROCENT = 'procent'),
    (_.SHOW_NEGATIVE_IMPACT = 'showNegativeImpact'),
    _
))(r || {});
const a = {
        root: 'Profit_root_6b8f37cd',
        'header-h80': 'Profit_header-h80_4fbe3c1b',
        'header-h56': 'Profit_header-h56_f816ee88',
        'header-h40': 'Profit_header-h40_70d6612a',
        'header-h32': 'Profit_header-h32_1efad178',
        'header-h28': 'Profit_header-h28_e4ac8d81',
        'header-h26': 'Profit_header-h26_c037de9a',
        'header-h24': 'Profit_header-h24_5fc8dbf3',
        'header-h22': 'Profit_header-h22_687bfce9',
        'header-h20': 'Profit_header-h20_340c9a1',
        'header-h18': 'Profit_header-h18_1f03576a',
        'header-h16': 'Profit_header-h16_bc48990b',
        'paragraph-p20': 'Profit_paragraph-p20_7a280048',
        'paragraph-p18': 'Profit_paragraph-p18_1f03576a',
        'paragraph-p16': 'Profit_paragraph-p16_bc48990b',
        base: 'Profit_6037941e',
        base__big: 'Profit_base__big_6b8f37cd',
        base__large: 'Profit_base__large_e3f34b22',
        icon: 'Profit_icon_d4118962',
        icon__multyXp: 'Profit_icon__multyXp_7f651fe6',
        icon__multyFreeXp: 'Profit_icon__multyFreeXp_6c936943',
        icon__tankmenXP: 'Profit_icon__tankmenXP_212dfcd5',
        icon__credits: 'Profit_icon__credits_f0891e21',
        icon__gold: 'Profit_icon__gold_64ec9db6',
        icon__crystal: 'Profit_icon__crystal_80e12939',
        icon__xp: 'Profit_icon__xp_16f572af',
        icon__freeXP: 'Profit_icon__freeXP_400cecd0',
        icon__equipCoin: 'Profit_icon__equipCoin_373bcd03',
        icon__stamp: 'Profit_icon__stamp_77c51818',
        icon__wtevent_ticket: 'Profit_icon__wtevent_ticket_394f284a',
        icon__battlePassPoints: 'Profit_icon__battlePassPoints_f46d4120',
        icon__projectionDecal: 'Profit_icon__projectionDecal_f52581cf',
        icon__lootBox_wt: 'Profit_icon__lootBox_wt_e3d5468',
        icon__lootBox_wt_common: 'Profit_icon__lootBox_wt_common_1f47344d',
        icon__lootBox_wt_epic: 'Profit_icon__lootBox_wt_epic_c88aab9',
        icon__lootBox_wt_rare: 'Profit_icon__lootBox_wt_rare_2c82ae05',
        icon__wt2025progression: 'Profit_icon__wt2025progression_da5409b1',
        value: 'Profit_value_c7ab51d6',
        base__small: 'Profit_base__small_6b8f37cd',
        value__notEnough: 'Profit_value__notEnough_1ade341b',
        value__wt2025progression: 'Profit_value__wt2025progression_34473a7a',
    },
    i = { small: 'small', big: 'big', large: 'large' };
var n = ((_) => (
    (_.BattlePassPoints = 'battlePassPoints'),
    (_.Credits = 'credits'),
    (_.Crystal = 'crystal'),
    (_.EquipCoin = 'equipCoin'),
    (_.FreeXP = 'freeXP'),
    (_.Gold = 'gold'),
    (_.MultyFreeXp = 'multyFreeXp'),
    (_.MultyXp = 'multyXp'),
    (_.ProjectionDecal = 'projectionDecal'),
    (_.Stamp = 'stamp'),
    (_.TankmenXP = 'tankmenXP'),
    (_.Wt2025progression = 'wt2025progression'),
    (_.WteventLootBox = 'lootBox_wt'),
    (_.WteventLootBoxCommon = 'lootBox_wt_common'),
    (_.WteventLootBoxRare = 'lootBox_wt_rare'),
    (_.WteventLootBoxEpic = 'lootBox_wt_epic'),
    (_.WteventTicket = 'wtevent_ticket'),
    (_.Xp = 'xp'),
    _
))(n || {});
const c = (_) => Object.values(n).includes(_),
    s = (_, o) => e(o, _),
    f = ({ type: e, value: i, showPlus: n, size: c, modifiers: f = [] }) => {
        const l = s(r.SHOW_NEGATIVE_IMPACT, f),
            P = s(r.ADD, f),
            p = s(r.MUL, f),
            d = s(r.PROCENT, f);
        return _.jsxs('span', {
            className: o(a.base, a[`base__${c}`]),
            children: [
                i > 0 &&
                    _.jsxs('span', {
                        className: o(a.value, a[`value__${e}`], (i < 0 || l) && a.value__notEnough),
                        children: [
                            (n || P) && i > 0 && '+',
                            p && R.strings.common.multiplier(),
                            Number.isInteger(i) ? _.jsx(t, { value: i }) : i,
                            d && R.strings.common.common.percent(),
                        ],
                    }),
                _.jsx('span', { className: o(a.icon, a[`icon__${e}`]) }),
            ],
        });
    };
export { f as P, c as i, i as s };
