package main

func removeDuplicates(nums []int) int{
	myMap:= map[int]int{};

	var k=0;

	for i:=0;i < len(nums); i++ {
		_,ok:= myMap[nums[i]];

		if !ok {
			myMap[nums[i]] = i;
			nums[k] = nums[i];
			k++
		}
	}


	return k
}