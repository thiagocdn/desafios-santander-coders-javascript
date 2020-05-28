function fatorial(number) {
  if(number === 0) return 1;
  return (number * fatorial(number - 1));
}
