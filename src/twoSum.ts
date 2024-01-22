// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoSum(nums: number[], target: number): number[] {
  let hashMap = new Map();
  let res: Array<number> = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (!hashMap.has(diff)) {
      hashMap.set(nums[i], i);
    } else {
      res = [i, hashMap.get(diff)];
    }
  }
  return res;
}
