
let myArr = [1, 2, 3, 4, 5, 0, 'string'];
let chet = 0;
let nchet = 0;
let nol = 0;


myArr.forEach(function(item, index, array) {
if (item % 2 == 0 && typeof(item) == 'number' && item !=0) {
  chet++;
}
if (item % 2 != 0 && typeof(item) == 'number' && item !=0) {
  nchet++;
}  
if (typeof(item) == 'number' && item ==0) {
  nol++;
}  
});

console.log('четных - ' + chet);
console.log('нечетных - ' + nchet);
console.log('нулей - ' + nol);

