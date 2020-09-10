obj = [
    {nome: 'Antonio', idade: 35, salario: 1000, premium: true},
    {nome: 'Francisca', idade: 45, salario: 2000, premium: false},
    {nome: 'Marco', idade: 30, salario: 5000, premium: true},
    {nome: 'Lena', idade: 40, salario: 10000, premium: false},
    {nome: 'Joao', idade: 23, salario: 1900, premium: true},
    {nome: 'Rosa', idade: 60, salario: 5050, premium: false},
    
]


const newFilter = obj.filter((item, index, array) => {
    return item.premium;
});

console.log(newFilter);