function verificaPalindromo(palavra) {
  let final = palavra.length-1;
  let meio = (palavra.length-1) / 2;

  for(let i = 0; i < meio; i++, final--) {
    if(palavra[i] !== palavra[final]) {
      return console.log("não é um palíndromo");
    }
  }
  
  return console.log("é um palíndromo");
};

verificaPalindromo('osso');
verificaPalindromo('ovo');
verificaPalindromo('rever');
verificaPalindromo('olho');