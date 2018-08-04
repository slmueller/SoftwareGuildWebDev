var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum = 0;

for(var arrayPos = 0; arrayPos < testArray.length; arrayPos++){
	
	sum += testArray[arrayPos];
}

console.log("The sum of " + testArray + " is: " + sum);