console.log(this);

var a = {
  name: 'Hello',
  foo: function(){
    console.log(this);
  }
}

var b = {
  name: 'Hello',
  foo: function(){
       function val() {
        console.log(this);
      }
      val()
  }
}
