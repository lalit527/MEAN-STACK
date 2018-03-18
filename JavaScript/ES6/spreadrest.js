var arr = [1,2,3,4];
function foo(x,y,...args){
  console.log(x);
  console.log(y);
  console.log(args);
}

foo(...arr)

foo(1, 2, 3, 4)
