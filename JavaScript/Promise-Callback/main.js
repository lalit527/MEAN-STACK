function foo() {
  console.log('Hello');
}

function bar(callback) {
  callback();
}

bar(function() {
  console.log('Hello');
});

///api call to database
   --> foo.then(function(result){
   console.log(result);
 }).catch(function(error){
   console.log(error);
 });

///show popup

var foo = new Promise(function(resolve, reject) {
  if(success) {
    resolve('data');
  }else{
    reject('error');
  }
});
