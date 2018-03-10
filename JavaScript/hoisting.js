console.log(a);//
console.log(b);
var a = b;
var b = 2;
console.log(a);
console.log(b);

/*
var a;
var b;
console.log(a);
console.log(b);
a = b;
b = 2;
console.log(a);
console.log(b);
*/

/*
//compilation phase
3->var a;
4->var b;

////Running
1-> a#undefined
2-> b#undefined
3-> a=undefined as [b#undefined]
4-> b=2
5-> a#undefined
6-> b#2
*/
