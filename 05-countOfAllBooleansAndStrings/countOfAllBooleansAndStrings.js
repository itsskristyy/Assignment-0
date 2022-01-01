function countOfAllBooleansAndStrings(arr) {
  let counter = 0
	for(var x = 0; x< arr.length; x++){
		if(typeof arr[x] === "string" || typeof arr[x] === "boolean" ){
			counter++
		}
	}
	return counter
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;