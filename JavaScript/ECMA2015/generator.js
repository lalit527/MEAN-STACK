function *next(){
  var x = 5;
  yield x;
  x=6;
  console.log(x);
}

var it = next();

it.next();

//
function *foo() {
	yield 1;
	yield 2;
	yield 3;
}

var it = foo();

it.next();				// { value: 1, done: false }
it.next();				// { value: 2, done: false }
it.next();				// { value: 3, done: false }

it.next();				// { value: undefined, done: true }

function *foo() {
	yield 1;
	yield 2;
	yield 3;
}

var it = foo();

it.next();				// { value: 1, done: false }
it.next();				// { value: 2, done: false }
it.next();				// { value: 3, done: false }

it.next();				// { value: undefined, done: true }


///
function *foo() {
	var x = yield 1;
	var y = yield 2;
	var z = yield 3;
	console.log( x, y, z );
}

var it = foo();
it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }
//log--> (undefined, undefined, undefined)

var it = foo();
it.next(); // { value: 1, done: false }
it.next("Hello2"); // { value: 2, done: false }
it.next("Hello3"); // { value: 3, done: false }
it.next("Hello4"); // { value: undefined, done: true }
//log--> (undefined, undefined, undefined)


//throw Error
function *foo() {
	yield 1;
	yield 2;
	yield 3;
}

var it = foo();

it.next();				// { value: 1, done: false }

try {
	it.throw( "Oops!" );
}
catch (err) {
	console.log( err );	// Exception: Oops!
}

it.next();				// { value: undefined, done: true }

//return
function *foo() {
	yield 1;
	yield 2;
	yield 3;
}

var it = foo();

it.next();				// { value: 1, done: false }

it.return();      //{value:undefined, done: true}

//it.return(4);      //{value:4, done: true}

it.next();				// { value: undefined, done: true }
