package main

import "fmt"

// Remove Element
func main (){
 RemoveELement()
}



func RemoveELement(){
	var nums=[...]int{3,2,3,3}
    var val=3

	var k=0;

	for i:=0; i < len(nums); i++ {
      if nums[i] != val{
		nums[k] = nums[i];
		k++
	  }
	}

	fmt.Println("k",k)
}