function criaVetor(maxNumeros) {
    let vetor = [];
    
    for (let i = 1; i < maxNumeros + 1; i++) {
      vetor.push(i);
    };
  
    return vetor;
  };
  
  function embaralhaVetor(vetorOrdenado) {
    let vetor = vetorOrdenado;
    let elementosParaEmbaralhar = vetorOrdenado.length;
  
    while (elementosParaEmbaralhar) {
  
      let numAleatorio = Math.floor(Math.random() * elementosParaEmbaralhar--); //pega o que falta embaralhar
      let temp = vetorOrdenado[elementosParaEmbaralhar];
      vetorOrdenado[elementosParaEmbaralhar] = vetorOrdenado[numAleatorio];
      vetorOrdenado[numAleatorio] = temp;
    };
  
    return vetor;
  };
  
  function bubbleSort(vetorEmbaralhado) {
    let vetor = vetorEmbaralhado;
    
    for (let vezes = 0; vezes < vetor.length; vezes++) { //percorre todos números do array
      
      for(let posicao = 0; posicao < vetor.length - 1; posicao++) { //ordena um número dentro do array
        if(vetor[posicao] > vetor[posicao + 1]) {
          let temp = vetor[posicao];
          vetor[posicao] = vetor[posicao + 1];
          vetor[posicao + 1] = temp;
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
  
  
  //10
  const vetor1 = criaVetor(10);
  const vetorEmbaralhado1 = embaralhaVetor(vetor1);
  obtemTempoExecucao(_ => bubbleSort(vetorEmbaralhado1), "bubbleSort");
  // resultado: 1.121ms
  
  
  // 1000
  const vetor2 = criaVetor(1000);
  const vetorEmbaralhado2 = embaralhaVetor(vetor2);
  obtemTempoExecucao(_ => bubbleSort(vetorEmbaralhado2), "bubbleSort");
  // resultado: 3.045ms
  
  
  // 10000
  const vetor3 = criaVetor(10000);
  const vetorEmbaralhado3 = embaralhaVetor(vetor3);
  obtemTempoExecucao(_ => bubbleSort(vetorEmbaralhado3), "bubbleSort");
  // resultado: 135.189ms (0,135189 segundos)
  
  
  // 100000
  const vetor4 = criaVetor(100000);
  const vetorEmbaralhado4 = embaralhaVetor(vetor4);
  obtemTempoExecucao(_ => bubbleSort(vetorEmbaralhado4), "bubbleSort");
  // resultado: 19308.267ms (19,308267 segundos)
  
  
  // 1000000
  const vetor5 = criaVetor(1000000);
  const vetorEmbaralhado5 = embaralhaVetor(vetor5);
  obtemTempoExecucao(_ => bubbleSort(vetorEmbaralhado5), "bubbleSort");
  // resultado: 3540639.688ms (59 minutos)