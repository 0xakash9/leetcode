function arraySign(nums: number[]): number {
  let neg = 0;
  let n = nums;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === 0) {
      return 0;
    } else if (n[i] < 0) {
      neg += 1;
    } else {
      continue;
    }
  }

  return neg % 2 == 0 ? 1 : -1;
}
