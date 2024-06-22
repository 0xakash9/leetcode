function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set();
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    if (set.size > k) {
      set.delete(nums[l]);
      l++;
    }
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }

  return false;
}
