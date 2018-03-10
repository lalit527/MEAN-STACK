function adder() {
  var value = 0;
  console.log(value);
  return function(){
    console.log(++value);
  }
}

var add = adder();
add();
