function criaVetor(maxNumeros) {
  let vetor = [];
  
  for (let i = 1; i < maxNumeros + 1; i++) {
    vetor.push(Math.floor(Math.random() * maxNumeros));
  };

  return vetor;
};
  
function bubbleSort(vetorEmbaralhado) {
  let vetor = vetorEmbaralhado;

  for(let i = vetor.length; i > 0; i--) {

    for(let j = 0; j < i - 1; j++) {
      if(vetor[j] > vetor[j + 1]) {
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
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
// resultado: 1.121ms


// 1000
const vetor2 = criaVetor(1000);
obtemTempoExecucao(_ => bubbleSort(vetor2), "bubbleSort");
// resultado: 3.045ms


// 10000
const vetor3 = criaVetor(10000);
obtemTempoExecucao(_ => bubbleSort(vetor3), "bubbleSort");
// resultado: 135.189ms (0,135189 segundos)


// 100000
const vetor4 = criaVetor(100000);
obtemTempoExecucao(_ => bubbleSort(vetor4), "bubbleSort");
// resultado: 19308.267ms (19,308267 segundos)


// 1000000
const vetor5 = criaVetor(1000000);
obtemTempoExecucao(_ => bubbleSort(vetor5), "bubbleSort");
// resultado: 3540639.688ms (59 minutos)