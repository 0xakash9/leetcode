function singleNumber(nums: number[]): number {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  const signleValue = [...set.values()];
  return signleValue[0] as number;
}
