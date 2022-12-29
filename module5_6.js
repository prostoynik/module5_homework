

let myArr = [4, 4, 4, 4];
let first = myArr[0];
let sims = true;


myArr.forEach(function(item, index, array) {
if (item != first) {
  sims = false;
}
});

console.log(sims);

