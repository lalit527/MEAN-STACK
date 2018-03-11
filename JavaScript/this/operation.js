var foo = function(value, value2) {
  var operator = this.opeartion;
  var result = value;
  console.log(eval(`${value} this.opeartion ${value2}`));
  console.log(value);
  console.log(value2);
}

var mul = {
  opeartion: '*',
  name: 'value'
}

var add = {
  opeartion: '*'
}

foo.call(mul, 2, 4)
