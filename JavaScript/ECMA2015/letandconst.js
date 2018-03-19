var a = 2;

(function IIFE(){
	var a = 3;
	console.log( a );	// 3
})();

console.log( a );

/////let is only scoped in the same block. It will not be hoised
let x = 12;
{
  let x = 15;
  console.log(x);
}
console.log(x);

//No Hoisting
{
	console.log( a );	// undefined
	console.log( b );	// ReferenceError!

	var a;
	let b;
}

//Cannot check typeof befor declaring if the variable is declared with let
{
	// `a` is not declared
	if (typeof a === "undefined") {
		console.log( "cool" );
	}

	// `b` is declared, but in its TDZ
	if (typeof b === "undefined") {		// ReferenceError!
		// ..
	}

	// ..

	let b;
}

///Diff btwn let and var
var funcs = [];

for (var i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log( i );
	} );
}

funcs[3]();
//
var funcs = [];

for (let i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log( i );
	} );
}


funcs[3]();

/////prints i=5
for (var i = 0; i < 5; i++) {
  setTimeOut(function(){
    console.log(i);
  }, 1000);
}
//corrects the value
for (let i = 0; i < 5; i++) {
  setTimeOut(function(){
    console.log(i);
  }, 1000);
}

/*
*const
*/
//can't reassign a to new variable
const a = 3;
a=4;//Error

const a; //Error cannot be declared with undefined
const a = undefined; //Oops!This works

const arr = [1, 2, 3]
arr[0] = 4  //Allows to change array's value

const obj = {
  a: 'Hello',
  b: 'World'
}

obj["c"] = "hey" ///{a: "Hello", b: "World", c: "hey"}
obj.d = 'ok' //{a: "Hello", b: "World", c: "hey", d: "ok"}
