var a = "Hello";

function hello(){
	console.log(a);
	var a = "World";
}
console.log(a);//"Hello"
hello();//"Hello"

console.log(a);//""




var a = "Hello";

function hello(a){
	console.log(a);
	var a = "World";
}
console.log(a);
hello(a);

console.log(a);