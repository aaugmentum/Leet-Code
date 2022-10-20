/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = new Map();
	for (let i = 0; i < nums.length; i++) {
		const key = target - nums[i];
		if (hash.has(key)) {
			return [i, hash.get(key)];
		} else {
			hash.set(nums[i], i);
		}
	}
};

