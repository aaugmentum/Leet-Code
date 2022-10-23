/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (n) {
	if (n === 0) return 0;
	let root;
	let x = n;

	while (true) {
		root = 0.5 * (x + n / x);
		if (Math.abs(x - root) < 1) {
			return Math.floor(root);
		}
		x = root;
	}
};
