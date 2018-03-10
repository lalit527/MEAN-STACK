var a = {
  foo: function() {
    console.log(this.bar);
  }
}

var b = {
  bar: 'Hello'
}

a.call(b);
