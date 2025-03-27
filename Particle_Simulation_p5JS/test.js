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
var addTwoNumbers = function(l1, l2) {
    let v1 = "", v2 = "";

    while(l1.next !== null) {
        v1 += l1.value;
        l1 = l1.next;
    }
    while(l2.next !== null) {
        v2 += l2.value;
        l2 = l2.next;
    }

    let numberStr = (+v1 + +v2) + "";
    let head = new ListNode()

    for (let i = 0; i <= numberStr.length; i++) {
        result.push(i);
    }
    return result;
};