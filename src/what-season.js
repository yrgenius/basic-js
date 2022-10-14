const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    let season;
    const allSeasons = {
        winter: [11, 0, 1],
        spring: [2, 3, 4],
        summer: [5, 6, 7],
        autumn: [8, 9, 10],
    };

    if (typeof date == "undefined")
        return "Unable to determine the time of year!";

    if (
        date instanceof Date === false ||
        Object.getOwnPropertyNames(date).length > 0
    ) {
        throw new Error("Invalid date!");
    }

    try {
        let month = date.getMonth();
        for (let s in allSeasons) {
            for (let i of allSeasons[s]) {
                if (i === month) season = s;
            }
        }
    } catch (err) {
        throw new Error("Invalid date!");
    }

    return season;
}

module.exports = {
    getSeason,
};