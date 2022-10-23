/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
	let result = 0;
	for (let k = 0; k < nums.length - 1; ) {
		let i = k;
		while (nums[i] === nums[i + 1]) i++;
		++result;
		nums[result] = nums[i + 1 < nums.length ? i + 1 : i];
		k = i + 1;
	}
	if (nums[result] !== nums[result - 1]) result++;
	return result;
};
