class ListNode {
  val: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(val?: number, next?: ListNode | null, prev?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

export function ArrayToDoubleLinkedList() {
  const arr = [1, 2, 3, 4, 5];

  const head = new ListNode(arr[0]);
  let temp = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i], null, temp);

    temp.next = newNode;
    temp = newNode;
  }

  console.log("temp", temp);
}

export function DeleteHeadInDoublyLinkedlist(head: ListNode) {
  if (head === null || head.next === null) {
    return null;
  }

  let temp = head;

  temp = head.next;

  head.prev = null;
  temp.next = null;

  return head;
}

console.log("logg");
