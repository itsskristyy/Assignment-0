class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  
   binarySearch(nums, target) {
    

	let beginning = 0;
    	let end = nums.length - 1;

    	while (beginning <= end) {
     	 let middle = Math.floor(end / 2);

      		if (nums[middle] === target) {
        			return true;
      		} else if (nums[middle] > target) {
        			end = middle - 1;
			 return this.binarySearch(nums.slice(beginning, middle-1),target)
      		} else {
        			beginning = middle + 1;	
			return this.binarySearch(nums.slice(beginning+1, end), target)
      		}
    	}
	
		return false
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;