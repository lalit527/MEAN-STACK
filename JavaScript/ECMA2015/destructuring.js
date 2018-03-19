function foo() {
	return [1,2,3];
}

function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	};
}

var tmp = bar(),
	x = tmp.x, y = tmp.y, z = tmp.z;

console.log( x, y, z );				// 4 5 6
var x = "hello";
var a = {
	x: x
}
a.x
var a = {
	x
}
a.x
x: x
x
//Object Property
var { x, y, z } = bar();

console.log( x, y, z );				// 4 5 6

/////////
//x: is the object name, bam is the variable name
var { x: bam, y: baz, z: bap } = bar();

console.log( bam, baz, bap );		// 4 5 6
console.log( x, y, z );				// ReferenceError


//even declare and use variables to destructure
var a, b, c, x, y, z;

[a,b,c] = foo();
( { x, y, z } = bar() );

var { x, y, z } = bar();

console.log( a, b, c );				// 1 2 3
console.log( x, y, z );				// 4 5 6


//Nested structuring
var App = {
	model: {
		User: function(){ .. }
	}
};

// instead of:
// var User = App.model.User;

var { model: { User } } = App;

//Concise Methods
var o = {
	x: function(){
		// ..
	},
	y: function(){
		// ..
	}
}

//can be changed to
var o = {
	x() {
		// ..
	},
	y() {
		// ..
	}
}

/*
Set prototype of objects
*/
var o1 = {
	// ..
};

var o2 = {
	__proto__: o1,
	// ..
};

var o1 = {
	// ..
};

var o2 = {
	// ..
};

Object.setPrototypeOf( o2, o1 );

/*
Use Super
*/
var o1 = {
	foo() {
		console.log( "o1:foo" );
	}
};

var o2 = {
	foo() {
		super.foo();
		console.log( "o2:foo" );
	}
};

Object.setPrototypeOf( o2, o1 );

o2.foo();		// o1:foo
				// o2:foo
