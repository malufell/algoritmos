## pilha

- https://www.youtube.com/watch?v=RWzt0Wi52wo&t=1271s
- https://ichi.pro/pt/aprendendo-javascript-a-estrutura-de-dados-da-pilha-175415326175082
- https://www.ime.usp.br/~pf/algoritmos/aulas/pilha.html
- https://sites.google.com/site/ldsicufal/disciplinas/programacao-avancada/balanceamento-de-parenteses

<br>

## bolha

É um dos algoritmos de busca mais fáceis, porém menos eficiente porque percorre a lista inteira:

- leva os elementos "mais pesados" para o final do vetor
- leva os elementos "mais leves" para o início do vetor
- olha os valores de um vetor em duplas
  - se o primeiro elemento for maior do que o segundo, troca eles de posição
  - e assim analisa até o final do vetor
  - em uma iteração, o elemento "mais pesado" vai para o final e os outros continuam desordenados
  - depois deve seguir uma nova iteração para o próximo elemento pesado ir para o penúltimo lugar

Como funciona a troca:

```
  A  =  10   >>     A  = 10   >>    A  =  8*  >>    A  =  8
  B  =   8   >>     B  =  8   >>    B  =  8   >>    B  = 10*
Temp =   ?   >>   Temp = 10*  >>  Temp = 10   >>  Temp = 10
```

- geração de números aleatórios sem repetição: algoritmo Fisher–Yates
  - http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/
  - https://www.horadecodar.com.br/2020/10/26/gerar-varios-numeros-aleatorios-sem-repeticao-em-javascript/
- console.time: https://nodejs.org/api/console.html#console_console_time_label
- Bubble Sort:
  - https://www.youtube.com/watch?v=Q7OHjDHWD5I




