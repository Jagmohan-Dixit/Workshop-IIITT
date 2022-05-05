var firstName = prompt("what is your first first Name");
var lastName = prompt("what is your last Name");

var firstLetter = firstName.slice(0,1);

var capitalizeFirstName = firstLetter.toUpperCase() + firstName.slice(1);
alert(capitalizeFirstName+" "+lastName);



//step1:- take the weight from user
var weight = prompt("what is your weight(kg)");
//step2:- take the height from the user
var height = prompt("what is your height(meter)")
//step3:- calculate the bmi
var bmi = weight/Math.pow(height,2);
//bmi = weight/height*height
//alert the user with his/her bmi
var roundedBMI = Math.round(bmi);
alert("Your BMI IS: " + roundedBMI);

//take the user name 
var userName = prompt("what is your name?")
//pass that name into myName function
//initialize

function myName(userName){
    alert(userName);
}
//alert user with his/her name
myName(userName);