function pairSum(nums, target) {
  
if(nums.length <= 1){ 
    throw error
  }
  else{ 

	for(let i = 0; i < nums.length; i++){  
    	for(let x = 0; x < nums.length; x++){ 
      		if(nums[i] + nums[x] === target){ 
        			return true 
      		}
    	}
  	}
  	}
  
		return false



}

// Do not edit this line;
module.exports = pairSum;