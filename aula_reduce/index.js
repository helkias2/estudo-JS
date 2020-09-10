// Criandoo um objeto
const objeto_lista = [
    {nome: 'Antonio', idade: 30, salario: 1000, premium: true},
    {nome: 'Francisca', idade: 45, salario: 2000, premium: false},
    {nome: 'Antonio', idade: 30, salario: 5000, premium: true},
    {nome: 'Lena', idade: 40, salario: 10000, premium: false},
    {nome: 'Antonio', idade: 30, salario: 1900, premium: true},
    {nome: 'Rosa', idade: 60, salario: 5050, premium: false},
]

// 1 - Vamos verificar quanta vezes que aparacem nome Antonio
// 2 - soma a quantidade do salarios que ele recebeu 
const test = objeto_lista.reduce((valor, item)=>{
    if(item.nome === 'Antonio'){
        valor += item.salario
    }
    return valor;
},0);

// console.log(test);



// 1 - soma as idade maior que 30 
const newArray = objeto_lista.reduce((acumulador, item) => {
    
    if(item.idade == 30){
        acumulador += item.idade;
    }
    return acumulador;
}, 0);
console.log(newArray);

// 1 - Criando um matriz 2X3
// 2 - soma as idade maior que 30 
const reduzido = [
                 [0,1], 
                 [2,3], 
                 [4,5]
                ]; // Matriz
const newValor = reduzido.reduce((acumulador, index)=> {
    return acumulador.concat(index);
});

var alpha = ["a", "b", "c"];
var numeric = [1,2,3];

const alphaNumeric = alpha.concat(numeric);
// console.log(alphaNumeric);
