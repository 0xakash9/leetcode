function validateStackSequence(
  pushed: Array<number>,
  popped: Array<number>
): boolean {
  let stack = [];

  let i = 0;
  for (let el of pushed) {
    stack.push(el);
    while (
      i < popped.length &&
      stack &&
      popped[i] === stack[stack.length - 1]
    ) {
      stack.pop();
      i++;
    }
  }

  return stack.length === 0;
}

validateStackSequence([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
