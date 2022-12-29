

let ages = new Map([

  ["Masha", "10 лет"],

  ["Petr", "15 лет"],

  ["Yura",    "17 лет"]
  
]);

for (let elem of ages.keys()) { // то же самое, что и recipeMap.entries()

   console.log(' люч Ч ' + elem + ', значение Ч ' + ages.get(elem)); 
}