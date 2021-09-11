function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(n){
	let array = [];
	//your loop here
		for(i=0; i < n; i++){
			exampleColor = Math.floor((Math.random() * 4) + 1);
			array.push(getColor(exampleColor));
		}
	return array;
}
var output = getAllStudentColors(10);
console.log(output);