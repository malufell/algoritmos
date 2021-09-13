function insertionSort(vetor) {
  for (let i = 1; i < vetor.length; i++) {

    let elem = vetor[i];
    let elemEsquerda = i - 1;

    while (elemEsquerda >= 0 && vetor[elemEsquerda] > elem) {
      vetor[elemEsquerda + 1] = vetor[elemEsquerda];
      elemEsquerda--;
    }

    vetor[elemEsquerda + 1] = elem;
  };
  return vetor;
};

const vetor = [3, 5, 4, 8, 10, 1];
console.log(insertionSort(vetor));