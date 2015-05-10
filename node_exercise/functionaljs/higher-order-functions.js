function repeat(operation, num) {
	if(typeof(num) === "number" && num > 0){
		operation();
	}
};

 // Do not remove the line
 module.exports = repeat;
