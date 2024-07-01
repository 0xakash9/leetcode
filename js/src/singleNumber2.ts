function singleNumber(nums: number[]): number {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const val = map.get(nums[i]);
      map.set(nums[i], val + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  const el = Array.from(map).filter(([key, val]) => val === 1)[0];

  return el[0];
}
