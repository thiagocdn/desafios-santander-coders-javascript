function maisMenos(numberArray) {
  let positives = 0;
  let zeros = 0;
  let negatives = 0;
  for (const number of numberArray) {
    if (number > 0) {
      positives++;
      continue;
    }
    if (number === 0) {
      zeros++;
      continue;
    }
    if (number < 0) {
      negatives++;
      continue;
    }
  }
  total = numberArray.length;
  return [positives/total, zeros/total, negatives/total];
}

