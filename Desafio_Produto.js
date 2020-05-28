function produto(numberArray){
  let result = 1;
  for (const number of numberArray) {
    result = result * number;
  }
  return result;
}
