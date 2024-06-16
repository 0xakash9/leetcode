package main

import (
	"fmt"
	"strings"
)
func backspaceCompare(s string, t string) bool {
	var stack1 []string
	var stack2 []string
	 fmt.Println(s)
	 
	var s1= strings.Split(s,"")
	var t1= strings.Split(t,"")
	 
 
	for _, el:= range s1 {
		  if el == "#"{
			  if len(stack1) > 0 {
			  stack1 = stack1[:len(stack1)-1]
			  }
		   
		  }else{
		  stack1 = append(stack1,el)
		  }
	 }
	for _, el:= range t1 {
		  if el == "#"{
			  if len(stack2) > 0 {
			   stack2 = stack2[:len(stack2)-1]
			  }
		  }else{
		  stack2 = append(stack2,el)
		  }
	 }
 
	 return strings.Join(stack1,"") == strings.Join(stack2,"")
 }

