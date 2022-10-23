/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
	let carry = 0;
	for (let i = digits.length - 1; i >= 0; i--) {
		let digit = digits[i] + carry;
		if (i == digits.length - 1) {
			digit++;
		}
		carry = Math.floor(digit / 10);
		digits[i] = digit % 10;
	}
	if (carry > 0) {
		digits.unshift(1);
	}
	return digits;
};
