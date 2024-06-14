/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // need to Optimisze this solution - use onepass algorithm

  let count = [0, 0, 0]; //r,g,b;

  for (let num of nums) {
    count[num]++;
  }

  let index = 0;
  for (let color = 0; color <= 2; color++) {
    while (count[color] > 0) {
      nums[index++] = color;
      count[color]--;
    }
  }
}
