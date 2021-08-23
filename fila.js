const fila = new Array(3);
let inicio = 0;
let fim = 0;
let total = 0;

function estaCheia(){
  return (total == fila.length);
};

function estaVazia(){
  return (total == 0);
};

function inserir(e) {
  const filaCheia = estaCheia();

  if (!filaCheia) {
    fila[fim] = e;
    fim = (fim + 1) % fila.length;
    total++;

    console.log("elemento " + e + " incluído! \n");

  } else {
    console.log("elemento " + e + " não inserido, fila cheia \n");
  }
};

function retirar(){
  const filaVazia = estaVazia();

  if(!filaVazia) {
    let elemento = fila[inicio];
    inicio = (inicio + 1) % fila.length;
    total--;

    console.log("elemento " +elemento+ " retirado! \n");

  } else {
    console.log("a fila está vazia! \n");
  };
};


function exibirFila() {
  console.log(fila);
  console.log("inicio: " + inicio);
  console.log("fim: " + fim);
  console.log("total: " + total + "\n");
};

inserir(1);
exibirFila();

inserir(2);
exibirFila();

inserir(3);
exibirFila();

inserir(4);
exibirFila();

retirar();
exibirFila();

inserir(5);
exibirFila();


