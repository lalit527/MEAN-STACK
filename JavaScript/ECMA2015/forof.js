for (var c of "hello") {
	console.log( c );
}

for (var c in "hello") {
	console.log( c );
}

var obj = {
  key: "Value",
  [Symbol]: "value"
}
