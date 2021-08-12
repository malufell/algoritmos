- **versão 'agora vai'**:

```javascript
function verificaPalindromo(palavra) {
  let final = palavra.length-1;
  let meio = (palavra.length-1) / 2;

  for(let i = 0; i < meio; i++, final--)
    if(palavra[i] !== palavra[final]) {
      return console.log("não é um palíndromo")
    }
  }
  
  return console.log("é um palíndromo")
}
```

<br>

- **versão 2**:
```javascript
function verificaPalindromoV2(palavra) {
  let final = palavra.length;
  let meio = Math.round((palavra.length) / 2);

  for(let i = 0; meio < final-- ; i++) {
    if(palavra[i] !== palavra[final]) {
      return console.log(`não é um palíndromo: "${palavra[i]}" no ${i} e "${palavra[final]}" no ${final}`)
    } else {
      console.log(`"${palavra[i]}" no ${i} e "${palavra[final]}" no ${final}`)
    }
  }
  
  return console.log("é um palíndromo")
}

verificaPalindromo('osso');
verificaPalindromo('ovo');
verificaPalindromo('rever');
verificaPalindromo('olho');
```

resultado:

```console
"o" no 0 e "o" no 3
"s" no 1 e "s" no 2
é um palíndromo

"o" no 0 e "o" no 2
é um palíndromo

"r" no 0 e "r" no 4
"e" no 1 e "e" no 3
é um palíndromo

"o" no 0 e "o" no 3
não é um palíndromo: "l" no 1 e "h" no 2
```

<br>

- **versão 1**:

```javascript
function verificaPalindromo(palavra) {
  let final = palavra.length-1;
  let meio = (palavra.length-1) / 2;

  for(let i = 0; i < meio; i++) {
    if(palavra[i] !== palavra[final]) {
      return console.log(`não é um palíndromo: "${palavra[i]}" no ${i} e "${palavra[final]}" no ${final}`)
    } else {
      console.log(`"${palavra[i]}" no ${i} e "${palavra[final]}" no ${final}`)
    }
    final--; 
  }
  return console.log("é um palíndromo")
}

verificaPalindromo('osso');
verificaPalindromo('rever');
verificaPalindromo('olho');
```

resultado:

```console
"o" no 0 e "o" no 3
"s" no 1 e "s" no 2
é um palíndromo

"r" no 0 e "r" no 4
"e" no 1 e "e" no 3
é um palíndromo

"o" no 0 e "o" no 3
não é um palíndromo: "l" no 1 e "h" no 2
```

<br>

- versão com métodos JS: 
```javascript
function verificaPalindromo(texto) {
    if(texto == texto.split('').reverse().join('')) {
        console.log("é um palíndromo")
    } else { 
        console.log("não é um palíndromo") 
    }
}
```
