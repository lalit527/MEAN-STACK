function foo() {
  var a = 'Hello';

  function bar() {
    console.log(a);
  }
  baz(bar);
}

function baz(bam) {
  bam();
  /*
  function bar() {
    console.log(a);
  }
  */
}

foo();
