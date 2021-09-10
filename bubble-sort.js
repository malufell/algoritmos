function criaVetor(maxNumeros) {
  let vetor = [];
  
  for (let i = 0; i < maxNumeros; i++) {
    vetor.push(Math.floor(Math.random() * maxNumeros));
  };

  return vetor;
};
  
function bubbleSort(vetor) {

  for(let i = 0; i < vetor.length -1 ; i++) {

    for(let j = i + 1; j < vetor.length; j++) {
      if(vetor[i] > vetor[j]) {
        let aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
      };
    };
  };

  return vetor;
};
    
function obtemTempoExecucao(callback, algoritmo) {
  console.log("executando " + algoritmo)
  console.time(algoritmo);
  console.log(callback())
  console.timeEnd(algoritmo);
};
  
  
// 10
const vetor1 = criaVetor(10);
obtemTempoExecucao(_ => bubbleSort(vetor1), "bubbleSort");
// resultado: 1.074ms


// 1000
const vetor2 = criaVetor(1000);
obtemTempoExecucao(_ => bubbleSort(vetor2), "bubbleSort");
// resultado: 4.826ms


// 10000
const vetor3 = criaVetor(10000);
obtemTempoExecucao(_ => bubbleSort(vetor3), "bubbleSort");
// resultado: 155.033ms (0,155033 segundos)


// 100000
const vetor4 = criaVetor(100000);
obtemTempoExecucao(_ => bubbleSort(vetor4), "bubbleSort");
// resultado: 16945.090ms (16,94509 segundos)


// 1000000
const vetor5 = criaVetor(1000000);
obtemTempoExecucao(_ => bubbleSort(vetor5), "bubbleSort");
// resultado: 3063213.567ms (51 minutos)