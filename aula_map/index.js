// function soma (){
//      obj = {
//          "nome" : "Antonio",
//          "SobreNome" :"Silva Oliveira"
//      }
//      return obj;
// }

// var dts = Math.floor(Date.now());
// var options = {
//   body: 'Do you like my body?',
//   timestamp: dts
// }

// console.log(options);
// console.log(n.timestamp) // should log original timestamp

// array = ['toni', 'marcos', 'joao', 'maria', 'simone'];
// newarray = array.filter(c, array > array);
// console.log(newarray);
// const precos = [
//   "Crédito",
//   "R$ 200",
//   "R$ 400",
//   "Contas Pagar",
//   "R$ 300",
//   "R$ 400",
//   "Meus dados"
// ];

// const precosFiltro = precos.filter(preco => preco.includes("R$"));
// const precoNumeros = precosFiltro.map(preco =>
//   Number(preco.replace("R$ ", ""))
// );

// const total = precoNumeros.reduce((acc, item) => acc + item);
// console.log(total);

// , 
// const precosFiltro = precos.filter((preco, i) => i);
// function preco (){
//   preco.includes()
// }
// const precoNumeros = precosFiltro.map(preco =>
//   Number(preco.replace("R$ ", ""))
// );

// const total = precoNumeros.reduce((acc, item) => acc + item);
// console.log(precosFiltro);
// const number = [1,2,3];
// const newMap =  number.map((item, index, array)=>{return  index});
// console.log(newMap);

// obj1 = [
//   {nome: 'Antonio', idade: 30}, 
//   {nome: 'Marcos', idade: 40},
//   {nome: 'Joao', idade: 50},
//   {nome: 'Amauri', idade: 90},
//   {nome: 'Ronaldo', idade: 50}, 
//   {nome: 'Valdir', idade: 100}
// ]
// newValor = obj1.map( price =>{
//   if(price.idade >= 50){
//     return {nome: price.nome, preco: price.idade}
//   }
//   return price;
// });

// newFilter = obj1.filter((c) => {
//   if(c.idade <=50){  
//     return {nome: c.nome, idade: c.idade};
//   }
//  });

// const  array  = [2,9,10,25,-2,10,50,3];
//   newFilter = array.map((item) => {
//     for(i = 0; i < item.length; i++){
//         for(j = i + 1; j < item.length; j++){
//             if(item[i] > item[j]){
//               aux = item[j];
//               item[j] = item[i];
//               item[i] = aux;
//             }  
//         }
//         return item[i];
//       }  
//   });

  // for(i = 0; i < array.length; i++){
  //   for(j = i + 1; j < array.length; j++){
  //       if(array[i] > array[j]){
  //         aux = array[j];
  //         array[j] = array[i];
  //         array[i] = aux;
  //       }
        
  //   }
  //   console.log(array[i]);
  // }  

  const obj = [
    {nome: 'Antonio', idade: 35, salario: 6500},
    {nome: 'Marcos', idade: 19, salario: 1000},
    {nome: 'Simone', idade: 10, salario: 500},
    {nome: 'Edna', idade: 28, salario: 5500},
    {nome: 'Luis', idade: 8, salario: 100}
  ] 
  novoSalario = obj.map((item) => {
    if(item.salario > 1000){
        return {nome: item.nome.toUpperCase(), novoSalario: item.salario * 2};
    }
    return item;
  });
  console.log({novoSalario});