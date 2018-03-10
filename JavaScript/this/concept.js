var a = {
  foo: 'Hello',
  bar: function() {
    console.log(this);
  }
}

var b = {
  baz: 'Hello',
  tar: 'World'
}

a.call(a, bar);
