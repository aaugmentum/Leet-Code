/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        map[arr[arr.length - 1]] === s[i] ? arr.pop() : arr.push(s[i]);
    }
    return arr.length === 0;
};