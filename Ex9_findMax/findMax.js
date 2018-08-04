function findMax(numbers){
	var max = numbers[0];
	for(n of numbers){
		if(n > max){
			max = n;
		}
	}
	return max;	
}