var a = 2;
let b = 3;
const c ;

{
  let z = 5;
}

console.log(z);

function foo() {
  if(true){
    var a =  2;
    let b = 3;
  }
  console.log(a);
  console.log(b);
}
