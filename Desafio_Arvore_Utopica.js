function alturaArvoreUtopica(nCiclos) {
  let altura = 1;
  for (i = 0; i < nCiclos;) {
    altura = altura * 2;
    i++;
    if(i === nCiclos) return altura;
    altura = altura + 1;
    i++;
  }
  return altura;
}
