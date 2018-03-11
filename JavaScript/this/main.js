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
  console.log(a);
  console.log(b);
}
