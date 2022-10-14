const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;

    let arr = [...members];
    let out = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "undefined") continue;
        if (typeof arr[i] === "string")
            out.push(arr[i].trim().slice(0, 1).toUpperCase());
    }

    return out.sort().join("");
}

module.exports = {
    createDreamTeam,
};