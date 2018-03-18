var arr = [1,2,3];

var it = arr[Symbol.iterator]();

it.next();		// { value: 1, done: false }
it.next();		// { value: 2, done: false }
it.next();		// { value: 3, done: false }

it.next();		// { value: undefined, done: true }

//custom iterator

function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

//for of loop
var a = [1,2,3,4,5];

for(i of a){
  console.log(i);
}
