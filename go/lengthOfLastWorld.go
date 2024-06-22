package main

import "strings"
func lengthOfLastWord(s string) int {
	str:= strings.TrimSpace(s)
 
   newStr:= strings.Split(str," ");
   
	return len(newStr[len(newStr)-1])
 }
 