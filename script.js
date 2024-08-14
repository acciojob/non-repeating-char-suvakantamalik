function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length;
	for(int i=0; i<n; i++){
		let found = true;
		for(let j=0; j<n; j++){
			if(i !== j && str[i] === str[j]){
				found = false;
				break;
			}
		}
		if(found){
			return i;
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
