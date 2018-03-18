function sum(value1) {
  return function(vaue2) {
    return value1 + value2;
  }
}

var add = sum(5)
add(7)
add(8)
