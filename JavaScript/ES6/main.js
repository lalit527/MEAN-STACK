{
	console.log( a );	// undefined
	console.log( b );	// ReferenceError!

	var a;
	let b;
}

{
  var a;
	console.log( a );	// undefined
	console.log( b );	// ReferenceError!

	var a;
	let b;
}

{
	a=2;
  b=4;
  c=6;
  console.log(a);
  console.log(b);
  console.log(c);

	var a;
}

const a = [3];
a=[2];
