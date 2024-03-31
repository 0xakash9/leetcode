function maxFrequencyElements(nums: number[]): number {
  const hashmap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashmap.get(nums[i])) {
      const val = hashmap.get(nums[i]);
      hashmap.set(nums[i], val + 1);
    } else {
      hashmap.set(nums[i], 1);
    }
  }

  const maxValue = Math.max(...hashmap.values());

  let sum = 0;
  hashmap.forEach((el) => {
    if (el === maxValue) {
      sum += el;
    }
  });

  return sum;
}

maxFrequencyElements([1, 2, 2, 3, 1, 4]);
