

let x;

x = null;

switch (typeof(x)){
  case 'number': 
    console.log('x Ч число');
    break;
  case 'string': 
    console.log('x Ч строка');
    break;  
  case 'boolean': 
    console.log('x Ч логический');
    break;
  default:
    console.log('“ип x не определЄн');
    
}

