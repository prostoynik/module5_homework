

let myArr = [2, 4, 6, 7, 9, 10];
console.log('кол-во элементов в массиве - ' + myArr.length);


myArr.map(function(item, index, array) {
  console.log(index+1 + ' - ' + item);
});

