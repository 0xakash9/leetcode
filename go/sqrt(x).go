package main

import "fmt"

func mySqrt(x int) int {
	var sqrt int
	var l=0;
	var r=x
   for(l <= r){
	  var mid =l + (r - l)/2
	  fmt.Println("mid",mid)
	  if mid * mid > x {
		r = mid - 1
	  }else {
		 sqrt = mid;
		 l = mid + 1
	  }
   }


   return sqrt
}