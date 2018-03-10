function sum(value1) {
  console.log(arguments);
  return function(vaue2) {
    return value1 + value2;
  }
}

sum(5)(7)
