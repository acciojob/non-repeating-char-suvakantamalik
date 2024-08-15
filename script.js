function firstNonRepeatedChar(str) {
 // Write your code here
	/*
	let n = str.length;
	for(let i=0; i<n; i++){
		let found = true;
		for(let j=0; j<n; j++){
			if(i !== j && str[i] === str[j]){
				found = false;
				break;
			}
		}
		if(found){
			return str[i];
		}
	}
	*/
	//  * create a frequency map; where we find all the frequency for each character
	const charFreq = {}; // charFreq["Name of Field"] 
	for(let char of str) {
	    charFreq[char] = (charFreq[char] || 0) + 1; // Language Specific || JS 
	}
	 
	//  * Iterate over the string again and check if any character has frequency as 1. 
	//  *              If Yes; immediately return that particular character bcoz; it's was the first one
	for (let char of str) {
	    if(charFreq[char] === 1) {
	        return char
	    }
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
