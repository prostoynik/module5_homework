

let ages = new Map([

  ["Masha", "10 ���"],

  ["Petr", "15 ���"],

  ["Yura",    "17 ���"]
  
]);

for (let elem of ages.keys()) { // �� �� �����, ��� � recipeMap.entries()

   console.log('���� � ' + elem + ', �������� � ' + ages.get(elem)); 
}