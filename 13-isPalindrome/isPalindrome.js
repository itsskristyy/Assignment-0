function isPalindrome(word) {
	let array = word.split('');
    	let reverseArray = array.reverse();

    	let reverseWord = reverseArray.join('');  
	if(word == reverseWord){
		return true
	} else 
		return false

}

// Do not edit this line;
module.exports = isPalindrome;