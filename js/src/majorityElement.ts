function majorityElement(nums: number[]): number {
  const validCheck = nums.length / 2;
  const hashMap = new Map();
  let resnum: number;
  for (let i = 0; i < nums.length; i++) {
    const curEl = nums[i];
    if (!hashMap.has(curEl)) {
      hashMap.set(curEl, 1);
    } else {
      const el = hashMap.get(curEl) as number;
      hashMap.set(curEl, el + 1);
    }
  }

  for (let [key, value] of hashMap) {
    if (value > validCheck) {
      return key;
    }
  }
  throw Error("no element found");
}

majorityElement([2, 2, 1, 1, 1, 2, 2]);
