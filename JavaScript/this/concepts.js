//this in global is window

//this in any object refers to the same object

var a = {
	id: 1,
	print: function(){
		console.log(this.id);
	}
}
a.id // 1
a.print() // 1

//this in case of call, apply and bind will refer to the
//object with which the function is called
var a = {
	id: 1,
	print: function(){
		console.log(this.id);
	}
}

var b = {id:2}

a.print.call(b)

//call


var a = {
	id: 1,
	print: function(a, b){
		console.log(this.id);
    console.log(a, b);
	}
}

a.print(1, 2)

var b = {id:2}

a.print.call(b, 1, 2)

//apply

var a = {
	id: 1,
	print: function(a, b){
		console.log(this.id);
    console.log(a, b);
	}
}

a.print(1, 2)

var b = {id:2}

var arr = [1, 2]

a.print.call(b, arr)

//bind
var a = {
	id: 1,
	print: function(a, b){
		console.log(this.id);
    console.log(a, b);
	}
}

a.print(1, 2)

var b = {id:2}

var arr = [1, 2]

a.print.bind(b, arr)

//function constructor
function Person(name, age){
  this.name = name;
  this.age = age;
}

var person = new Person("Jon", 25);
