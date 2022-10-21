/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
	const head = { val: 0, next: null };
	let curr = head;
	const zeroNode = { val: 0, next: null };
	while (l1.next || l2.next) {
		const calc = l1.val + l2.val + curr.val;
		curr.val = calc % 10;
		curr.next = { val: calc / 10 >= 1 ? 1 : 0, next: null };
		curr = curr.next;
		l1 = l1.next === null ? zeroNode : l1.next;
		l2 = l2.next === null ? zeroNode : l2.next;
	}
	const calc = l1.val + l2.val + curr.val;
	curr.val = calc % 10;
	if (calc / 10 >= 1) {
		curr.next = { val: 1, next: null };
	}
	return head;
};
