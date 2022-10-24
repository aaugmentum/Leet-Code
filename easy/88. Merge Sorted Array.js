/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	const arr = [...nums1];
	let k = 0;
	let j = 0;
	for (let i = 0; i < m + n; i++) {
		if (k == m) {
			nums1[i] = nums2[j++];
		} else if (j == n) {
			nums1[i] = arr[k++];
		} else {
			if (arr[k] < nums2[j]) {
				nums1[i] = arr[k++];
			} else {
				nums1[i] = nums2[j++];
			}
		}
	}
};
