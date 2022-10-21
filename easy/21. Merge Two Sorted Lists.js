/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
	const head = { val: -1, next: null };
	let crt = head;
	while (list1 && list2) {
		if (list1.val < list2.val) {
			crt.next = list1;
			list1 = list1.next;
		} else {
			crt.next = list2;
			list2 = list2.next;
		}
		crt = crt.next;
	}
	crt.next = list1 || list2;
	return head.next;
};
