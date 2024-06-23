class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function arrayToLinkedList() {
  const arr = [1, 2, 3, 4, 5];
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  let cur = head;
  while (cur !== null) {
    console.log("val", cur.val);
    //@ts-ignore
    cur = cur.next;
  }
}

arrayToLinkedList();
