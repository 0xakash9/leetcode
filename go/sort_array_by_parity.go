package main

func sortArrayByParity(nums []int) []int {
    k:=0;
    for i:=0;i < len(nums); i++{
      if nums[i] % 2 == 0{
        copy:= nums[k]
       nums[k] = nums[i];
        nums[i] = copy
        k++
      }
    }

    return nums
}