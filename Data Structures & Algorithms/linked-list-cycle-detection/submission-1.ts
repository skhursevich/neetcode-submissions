/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let slow  = head;
        let fast = head;

        do {
            if (fast === null) {
                return false;
            } 

            slow = slow.next
            fast = fast.next.next
        } while (slow !== fast)

        return true;
    }
}
