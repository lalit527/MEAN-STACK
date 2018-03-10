function diff(x, y) {
  if (x > y) {
    var tmp = x;
    x = y;
    y = tmp;
  }
  console.log(tmp);
  return y - x;
}

var x = 10;
var y = 12;

diff(x, y);

//IFEE
function diff(x, y) {
  if (x > y) {

    (function(){
      var tmp = x;
      x = y;
      y = tmp;
    })();
  }
  console.log(tmp);
  return y - x;
}

var x = 10;
var y = 12;

diff(x, y);
