# estudo-JS
Estudando Reduce Js 
<hr>
<br>
<h1>Sintaxe</h1><br>
<br>
array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

<h1>Parâmetros</h1><br>

<h2>callback</h2>
<br>
Função que é executada em cada valor no array (exceto no primeiro, se nenhum valorInicial for passado); recebe quatro argumentos:<br>
<h2>acumulador</h2>

O valor retornado na última invocação do callback, ou o argumento valorInicial, se fornecido (exemplo abaixo).
<br><h2>valorAtual<h2><br>
O elemento atual que está sendo processado no array.
<br><h2>index</h2><br>
Opcional. O índice do elemento atual que está sendo processado no array.
<br><h2>array</h2><br>
Opcional. O array ao qual a função reduce() foi chamada.
<br><h2>valorInicial</h2><br>
Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array vazia sem valor inicial retornará um erro.
<br><h2>Valor de retorno</h2><br>
O valor que resulta da redução.
