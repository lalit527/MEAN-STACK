var a = {
	x: "hello",
	y: "world",
	z: function() {
		console.log(this.x + " "+ this.world);
	}
}

var b = {
	x: "pallabi",
	y: "das"
}

a.z.call(b);