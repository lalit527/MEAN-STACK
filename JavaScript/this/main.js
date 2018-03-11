console.log(this);

var a = {
  b: 'foo',
  c: function() {
    console.log(this);
  }
}

// call, apply and bind

var foo = function() {
  console.log(this.name);
}

var b = {
  name: 'MEAN'
}

foo.call(b)


///
var foo = function(value, value2) {
  console.log(this.name);
  console.log(value);
  console.log(value2);
}

var b = {
  name: 'MEAN'
}

var c = 'Stack';

foo.call(b, c, 'Angular')


///apply
var foo = function(value, value2) {
  console.log(this.name);
  console.log(value);
  console.log(value2);
}

var b = {
  name: 'MEAN'
}

var c = ['Stack', 'Angular'];

foo.apply(b, c )


///bind
var foo = function(value) {
  console.log(this.name);
  console.log(value);
}

var b = {
  name: 'MEAN'
}

var c = 'Stack';

var bar = foo.bind(b, c)

//

var name = 'Hello';
var foo = function() {
  console.log(this.name);
}

var b = {
  name: 'MEAN',
  foo: function() {
    console.log(this.name);
  }
}

b.foo()

//constructor

function sum(a, b) {
  this.a = a;
  this.b = b;
  console.log(this.a);
  console.log(this.b);
  console.log(this);
}

var foo = new sum(1, 2);


///
var foo = {
  a: '',
  b: ''
}

var bar = Object.create(foo)
var bar = Object.assign({}, foo);

const foo = 2

const arr = [1,2,3]
arr[0] = 5

const obj = {
  a:'val'
}
