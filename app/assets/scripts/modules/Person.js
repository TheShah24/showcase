function Person(name, color){
	this.name = name;
	this.color = color;
	this.greet = function(){
		console.log("Hi i am" + this.name + " and i like " + this.color + ".");
	}
}