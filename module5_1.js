
x = prompt('введите значение');
y = +x;
if (typeof(y)=='number' && !isNaN(y)){
 if(x == 0) console.log('вы ввели 0')
  else if(y % 2 === 0) console.log('число '+ y + ' четное')
  else console.log('число '+ y + ' нечетное');
  
}else console.log('”пс, кажетс€, вы ошиблись');


