
x = prompt('������� ��������');
y = +x;
if (typeof(y)=='number' && !isNaN(y)){
 if(x == 0) console.log('�� ����� 0')
  else if(y % 2 === 0) console.log('����� '+ y + ' ������')
  else console.log('����� '+ y + ' ��������');
  
}else console.log('���, �������, �� ��������');


