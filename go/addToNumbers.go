package main

import "fmt"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

 type ListNode struct {
	    Val int
	    Next *ListNode
 }
 func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    dummyNode := &ListNode{Val: 0}
    currentNode := dummyNode
    carry:=0;
 
    for l1 != nil || l2 != nil || carry > 0  {
        val1:=0;
        val2:=0
        if l1 != nil {
            val1 = l1.Val
        }

        if l2 != nil {
            val2 = l2.Val
        }

        totalSum := val1 + val2 + carry;
        value:= totalSum % 10;
        carry =totalSum / 10
        newNode:= &ListNode{Val:value}
        currentNode.Next =newNode;
        currentNode = currentNode.Next
        if l1 != nil {
         l1 = l1.Next;
        } 

        if l2 != nil {
        l2 = l2.Next
        } 
    }

    if carry != 0 {
        currentNode.Next = &ListNode{Val:carry}
    }
    fmt.Println(dummyNode)

    return dummyNode.Next
}