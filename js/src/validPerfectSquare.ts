function isPerfectSquare(num: number): boolean {
  let i = 1;
  let l = 0;
  let r = num;
  while (l <= r) {
    const mid = Math.floor((r + l) / 2);

    const midSqr = mid * mid;
    if (midSqr > num) {
      r = mid - 1;
    } else if (midSqr < num) {
      l = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}
