# estudo-JS
Estudando Reduce Js 
<h1>A função reducer é alimentada por quatro parâmetros:<h1>

Acumulador (acc)
Valor Atual (cur)
Index Atual (idx)
Array original (src)


O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado,
é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

<h1>Sintaxe</h1>
array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
Parâmetros
callback
Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe quatro argumentos:
acumulador
O valor retornado na última invocação do callback, ou o argumento valorInicial, se fornecido (exemplo abaixo).
valorAtual
O elemento atual que está sendo processado no array.
index
Opcional. O índice do elemento atual que está sendo processado no array.
array
Opcional. O array ao qual a função reduce() foi chamada.
valorInicial
Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. 
Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. 
Chamar reduce() em uma array vazia sem valor inicial retornará um erro.
