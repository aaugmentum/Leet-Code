/**
 * @param {number} n
 * @return {number}
 */

const climbStairs = function (n, obj = {}) {
	if (n === 1) return 1;
	if (n === 2) return 2;
	if (obj[n]) return obj[n];

	obj[n] = climbStairs(n - 1, obj) + climbStairs(n - 2, obj);
	return obj[n];
};
