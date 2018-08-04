function rollDice(min, max){
	return Math.ceil(Math.random() * (1 + max - min));
}

for(var i = 0; i < 100; i++){
	console.log(rollDice(1, 6));
}
