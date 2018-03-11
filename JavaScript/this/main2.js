var name = 'World';
var foo = {
  name: 'Hello',
  func: function() {

    console.log(this.name);
  }
}

var mul = {

}

foo.func()
foo.func.call(mul)

function foo(){
  var name = 'Hello';
  console.log(this.name);
}
