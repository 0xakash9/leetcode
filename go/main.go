package main

import "fmt"

// Remove Element
func main() {
	RemoveELement()
	moveZeros()
}

func RemoveELement() {
	var nums = [...]int{3, 2, 3, 3}
	var val = 3

	var k = 0

	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			nums[k] = nums[i]
			k++
		}
	}

	fmt.Println("k", k)
}

func moveZeros() {
	var nums = [...]int{0, 1, 0, 3, 12}

	var k = 0

	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			var copyVal = nums[k]
			nums[k] = nums[i]
			nums[i] = copyVal
			k++
		}
	}

	fmt.Println("nums", nums)
}
