const tamFila = 5;
let fila = new Array(tamFila);
let inicio = 0;
let fim = 0;
let total = 0;

function estaCheia(){
  return (total == tamFila);
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

    console.log(e + " incluído!");

  } else {
    console.log(e + " não inserido, fila cheia \n");
  }
};

function retirar(){
  const filaVazia = estaVazia();
  
  if(!filaVazia) {
    let elemento = fila[inicio];
    inicio = (inicio + 1) % fila.length;
    total--;

    console.log(elemento+ " retirado!");
    return elemento;

  } else {
    console.log("a fila está vazia! \n");
  };
};

function cancelar(e) {
  let indice = fila.indexOf(e);
  total--;
  
  if(indice == inicio) {
    inicio++;
    return console.log(e+ " cancelado! \n");
  };
  
  if(indice == total) {
    fim = total;
    return console.log(e+ " cancelado! \n");
  };
  
  fila.splice(indice, 1); //remove
  const filaAux = new Array(tamFila);
  
  for(let i=0; i < fila.length; i++) {
    const elemento = retirar(); //diminui total
    total++;
    filaAux[i] = elemento;
  };

  fim = total;
  fila = filaAux;
  console.log(e+ " cancelado!")
};


/*
Você recebe 5 pedidos ao mesmo tempo sendo que a ordem de pedidos que chegaram para você na cozinha foram: 4,3,1,2,5 . Dado esse fila a estrutura de dados para adicionar esses pedidos nessa ordem, depois o pedido 1 cancelou, assim remover o 1 da fila. Por fim, simular o consumo dessa fila 
*/

inserir(4);
inserir(3);
inserir(1);
inserir(2);
inserir(5);

console.log("\n")
console.log("pedidos recebidos:");
console.log(fila);

console.log("\n");
cancelar(1);
console.log(fila);
console.log("\n");

console.log("pedidos atendidos:");
retirar();
retirar();
retirar();
retirar();
retirar();

