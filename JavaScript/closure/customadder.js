function adder(value) {
  return function(){
    console.log(++value);
  }
}

var add = adder(5);
add();
