import { r as e } from './vendor.js';
import { i as a } from './lib.js';
const t = -1,
    l = 'disabled',
    o = 'paused',
    s = 'readyToSelect',
    i = 'pending',
    n = -1,
    r = 'undamaged',
    u = { ['54033']: 'alpha', ['50705']: 'alpha', ['51201']: 'super', ['56833']: 'super' },
    d = {
        ammoNotFull: 'ammoNotFull',
        crewNotFull: 'crewNotFull',
        exploded: 'exploded',
        destroyed: 'destroyed',
        damaged: 'damaged',
        rentable: 'rentable',
        rentableAgain: 'rentableAgain',
        rentalIsOver: 'rentalIsOver',
        tooHeavy: 'tooHeavy',
        unsuitableToQueue: 'unsuitableToQueue',
        unsuitableToUnit: 'unsuitableToUnit',
        inPrebattle: 'inPrebattle',
        battle: 'battle',
        wot_plus_exclusive_vehicle_disabled: 'wot_plus_exclusive_vehicle_disabled',
    },
    b = {
        [d.ammoNotFull]: 'ammo',
        [d.crewNotFull]: 'crew',
        [d.exploded]: 'repair',
        [d.destroyed]: 'repair',
        [d.damaged]: 'repair',
        [d.rentable]: 'rental',
        [d.rentableAgain]: 'rental',
        [d.rentalIsOver]: 'rental',
        [d.tooHeavy]: 'notSuitable',
        [d.unsuitableToQueue]: 'notSuitable',
        [d.unsuitableToUnit]: 'notSuitable',
        [d.inPrebattle]: 'inPlatoon',
        [d.battle]: 'inBattle',
        [d.wot_plus_exclusive_vehicle_disabled]: 'notSuitable',
    };
function p(e, a, t) {
    return !(!e || a === l || !t) && t.status !== d.unsuitableToQueue && t.maxBpScore > 0;
}
const [m, c, v] = a()(({ observableModel: e }) => ({
        ...e.primitives(['isCrystalEarnEnabled', 'isDailyMultipliedXpEnabled', 'isInfiniteAmmo']),
    })),
    _ = () => e.useContext(v.Context);
export { l as D, n as E, t as N, i as P, s as R, r as U, o as a, u as b, b as c, d, m as e, p as i, _ as u };
