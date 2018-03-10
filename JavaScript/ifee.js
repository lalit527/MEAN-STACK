(function IFEE(Jquery) {
  var a = 'bar';

  var b = 'baz';
  console.log(a);
  console.log(b);
  console.log(c);

  function foo() {
    var b = 'Hello';
    console.log(a);
    console.log(b);
    console.log(c);
    function bar() {
      var c = 'World';
      console.log(a);//bar
      console.log(b);//hello
      console.log(c);//World
    }
    bar();
  }

  foo();
  console.log(a);
  console.log(b);
  console.log(c);
}) (JQuery);
Jquery, $

(IFEE) ();
