function countOfAllBooleans(arr) {
  let counter = 0
	for(var x = 0; x< arr.length; x++){
		if(arr[x] === true || arr[x]=== false){
			counter++
		}
	}
	return counter
}

// Do not edit this line;
module.exports = countOfAllBooleans;