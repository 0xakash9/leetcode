import type { ListNode } from "./common/ListNode";
//? Floyd's tortoise & Hare
function hasCycle<T>(head: ListNode<T> | null): boolean {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next as ListNode<T> | null;
    slow = slow?.next as ListNode<T> | null;

    if (fast === slow) return true;
  }

  return false;
}
