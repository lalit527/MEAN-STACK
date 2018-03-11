function greet(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

var foo = new greet('Senthil', 'Anand');
var foo1 = new greet('Senthil1', 'Anand1');

greet.prototype.sayHello = function() {
  console.log('Hello '+ this.fname + ' '+ this.lname);
}

greet.prototype.sayHello = function() {
  console.log('Holla '+ this.fname + ' '+ this.lname);
}

foo.sayHello = function() {
  console.log('Greet '+ this.fname + ' '+ this.lname+' ');
  console.log(this.sayHello);
}
