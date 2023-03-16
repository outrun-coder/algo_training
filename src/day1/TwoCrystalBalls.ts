export default function two_crystal_balls(breaks: boolean[]): number {

  // find equal increment
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  // First walk
  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // back to last unbroken point
  i -= jmpAmount;

  // walk back to true breaking point
  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  // sentinel
  return -1;
}