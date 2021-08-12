function getRandomInt(a,b)
{
	var randomNumber = Math.floor((Math.random() * b) + a);
	return randomNumber;
}
console.log(getRandomInt(1,6));