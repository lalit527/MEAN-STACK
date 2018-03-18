var f1 = () => 12;

var f2 = x => x * 2;

var f3 = (x,y) => {
	var z = x * 2 + y;
	y++;
	x *= 3;
	return (x + y + z) / 2;
};


//usage with map
var a = [1,2,3,4,5];

a = a.map( v => v * 2 );

console.log( a );
