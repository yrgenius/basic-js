const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    let t = 0;
    let current = +sampleActivity;
    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 5730;

    if (
        isNaN(current) ||
        typeof sampleActivity != "string" ||
        typeof sampleActivity == "undefined" ||
        current <= 0 ||
        current > MODERN_ACTIVITY
    )
        return false;

    // t = HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / current);
    // t = HALF_LIFE_PERIOD * 0.693 * (MODERN_ACTIVITY / current);
    t = Math.log(MODERN_ACTIVITY / current) / (0.693 / HALF_LIFE_PERIOD);

    // return Math.abs(Math.ceil(t));
    return t != Infinity ? Math.abs(Math.ceil(t)) : false;
}

module.exports = {
    dateSample,
};