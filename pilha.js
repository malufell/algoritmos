//fazer um algoritmo (programa) que consiga validar que todo ( aberto foi fechado )

function verificaFechamentoParenteses(texto) {
  let pilha = [];
  
  for(let i = 0; i < texto.length; i++) {
    let caractereInformado = texto[i];

    if(caractereInformado == "(") {
      pilha.push(caractereInformado);
      console.log(JSON.stringify(pilha))
    } 
    
    if(caractereInformado == ")") {
      const topo = pilha.pop();
      if(topo !== "(") {
        pilha.push(caractereInformado);
      }
      console.log(JSON.stringify(pilha))
    }
  }

  if(!texto || pilha.length > 0) return console.log("erro")
  if(pilha.length == 0) return console.log("OK")

}

verificaFechamentoParenteses("())");
