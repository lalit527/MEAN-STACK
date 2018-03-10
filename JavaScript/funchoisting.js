var a = b();
var c = d();
console.log(a);
console.log(c);

function b() {
  return c;
}

var d = function(){
  return b;
}

/*
//compilation phase
function b();
var a
var c;
var d;

// Run Phase
a=c as [b()#c];

2 // error[d is not a function]
*/
