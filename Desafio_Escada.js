function escada(steps) {
  let result = [];
  const step = '#';
  const blank = ' ';
  for (i = 1; i <= steps; i++){
    let floor = "";
    for (j = 1; j <= (steps - i); j++){
      floor = floor + blank;
    }
    for (j = 1; j <= i; j++){
      floor = floor + step;
    }
    result.push(floor);
  }
  return result;
}
