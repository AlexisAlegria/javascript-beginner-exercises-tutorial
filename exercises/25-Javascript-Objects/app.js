var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};



//Enter all your code here:
family.members[0].lucky_numbers[3] = 33;

var person3 = {
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
};

family.members.push("person3");

function addAllFamilyLuckyNumbers(anArray){
    var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  
    //To-Do: loop and add; consider nested loops
    //Hint: use the anArray variable to get all of the lucky numbers
    var sumOfAllLuckyNumbers = person.lucky_numbers.reduce((a,b) => a + b, 0);
    sumOfAllLuckyNumbers += person2.lucky_numbers.reduce((a,b) => a + b, 0);
    sumOfAllLuckyNumbers += person3.lucky_numbers.reduce((a,b) => a + b, 0);
  
  
    return sumOfAllLuckyNumbers;
  }
  
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));