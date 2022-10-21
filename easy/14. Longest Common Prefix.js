/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let substr = strs[0];
    let result = "";
    for (let i = 0; i < substr.length; i++) {
        let isCommon = true;
        const prefix = substr.substring(0, substr.length - i);
        for (let k = 0; k < strs.length; k++) {
            if (!strs[k].includes(prefix)) {
                isCommon = false;
                break;
            } 
        }
        if (isCommon) {
            result = prefix;
            break;
        }
    }
    return result;
};