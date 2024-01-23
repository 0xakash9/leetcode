// function middleNode(head: ListNode | null): ListNode | null {
//   let cur = head;
//   let index = 0;
//   let map = new Map();
//   while (cur != null) {
//     map.set(index, cur);
//     index++;
//     cur = cur.next;
//   }
//   const midNodeIdx = Math.floor(map.size / 2);
//   return map.get(midNodeIdx);
// }

import type { ListNode } from "../common/ListNode";

function middleNode<T>(head: ListNode<T> | null): ListNode<T> | null {
  let slowP: ListNode<T> | null = head;
  let fastP: ListNode<T> | null = head;

  while (fastP && fastP.next) {
    fastP = fastP.next.next as ListNode<T> | null;
    slowP = slowP?.next as ListNode<T> | null;
  }
  return slowP;
}
