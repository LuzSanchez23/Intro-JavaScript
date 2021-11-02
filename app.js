
//00-Introduction to Javascript Homework starts here
var firstName= "Analy";
var pizzaCount= 4;
var totalCost= true;
var IsHungry= pizzaCount * 10.00;

alert ("Welcome to " + firstName + "'s Pizza Restaurant");
alert ("Our current special is buy " + pizzaCount + " pizzas and get one free");
alert ("Sounds like your little one is hungry?");
alert ("The total cost is $" + IsHungry + " for the 4 pizzas and you get one free. Would you take this offer?");
//00-Introduction to Javascript Homework ends here

//Calculate properties of a circle
//Store a radius into a variable
var radius= 10;
//Calculate the circumference based on the radius
var pi= 3.141592;
var diameter= 2 * "radius";
var circumference=  Math.PI * 2 * radius; 
document.getElementById("circumference").innerHTML="The circumference is" + " " + circumference;
//Calculate the area based on the radius
var area=Math.PI * radius * radius;
document.getElementById("area").innerHTML="The area is" + " " + area;

//It's hot out! Let's make a converter
//Store a Celsius temperature into a variable
var celsius= 70;
//Convert it to fahrenheit
var celsiusTofahrenheit= 32 + (celsius * 9 / 5);
document.getElementById("celsius").innerHTML= celsius + "ºC is equal to " + " " + celsiusTofahrenheit + " ºF";
//Convert it to Celsius
var fahrenheit= 100;
var fahrenheitTocelsius= (fahrenheit - 32) * 5 / 9;
document.getElementById("fahrenheit").innerHTML= fahrenheit + " " + "ºF is equal to " + " " + fahrenheitTocelsius + "ºC";

//Want to find out how old you'll be?
//Store your birth year in a variable
var birthYear= 1986;
//Store a future year in a variable
var futureYear= 2025;
var futureYearsecond= 2026;
//Calculate your 2 possible ages
var currentAge= futureYear-birthYear;
var currentAgesecond= futureYearsecond - birthYear;
document.getElementById("birth").innerHTML="I will be either" + " " + currentAge + " " + "or" + " " + currentAgesecond + " " + '\n' +
     " " + "depending on what month it is in 2026";
//Store a future year in a variable twice
var futureYear= 2049;
var futureYearsecond= 2050;
var currentAge= futureYear-birthYear;
var currentAgesecond= futureYearsecond - birthYear;
 document.getElementById("birth2").innerHTML="I will be either" + " " + currentAge + " " + "or" + " " + currentAgesecond + " " + '\n' +
     " " + "depending on what month it is in 2050";

//12 Exercise Solutions

//1 Write an expression that uses at least 3 different arithmetic operators.
//  The expression should equal 42.
//  Hint: +, -, *, /, and % are possible arithmetic operators
//  Your Code:
var students=7;
var chairs=6;
document.getElementById("one").innerHTML= "If" + " " + students + " students carry " + chairs + " chairs to the festival, we will have a total of " + students * chairs + " chairs for the festival.";  

//2 Create three variables a string with the name of your favorite food, a boolen answering if it's good for you, and a number with its calories. The first letter of the string should be capitalized. 
//  Your Code:
var favfood= "shrimp";
var health= true ;
var calories= 500;
//template literal ES6
console.log ("My favorite foos is " + favfood + "Is is healthy? " + health + "calories " + calories)
console.log(`My favorite food is ${favfood} Is it healty? ${health} Calories: ${calories}`)
document.getElementById("two").innerHTML= `My favorite is food ${favfood}, Is it healty? ${health} Calories: ${calories}`

//  3 Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.
// Your Code:
var egFamily= ["Julia", "James", "Luz", "April"];
console.log(egFamily);
console.log(egFamily[2]);
document.getElementById("three").innerHTML=egFamily[2]

// 4 Fix the right side expression so it evaluates to true.
// "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
//  Your Code:
console.log ("ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal")
console.log ("All STRINGS are CrEaTED Equal" != "ALL Strings are CrEaTeD equal")
document.getElementById("three").innerHTML= "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// 5 Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
//   Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
//F = C x 1.8 + 32
//Log the fahrenheit variable to the console.
//  Your Code:
var celsiuss= 12;
var fahrenheitt= celsiuss * 1.8 + 32;
console.log (fahrenheitt);


//6 Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
//  Blowing from the west
//  Fallen leaves gather
//  In the east.
//  Each string should be printed on its own line.
//  Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.
//  Your Code: 

//7 Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,
//  red blue
// where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!
// Your Code:

//8 Create a variable called fullName and assign it your full name as a string
//  Create a variable called age and addign it your age.
// Create a varaibel called quote and assign your favorite quote as a string. 
// Print out the results 
// Your Code:

 //9 Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
// Print the total to the JavaScript console.
// Hint: 15% in decimal form is written as 0.15_._
// TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
// Your Code:

//10 Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
// Your Code:

//11 Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
//'small' variable lowercase and the 'big' variable capital.
//console.log out the results
// Your Code:
var small= "I an as small as a mouse";
var big= "I am a Big as an ELephant";
console.log(small.toLowerCase() + big.toUpperCase());

//12 Create a variable called 'my time' that will display the currenttime using a ' new Date()' method
//Create a variable called 'message' that wil introduce the call.
//Concatinate the two variables together

var message="it is currently..."
var myTime= new Date();
var myTimee= new Date().toLocaleDateString();
console.log(message + myTime);
console.log(message + myTimee);


//functions
//teaching-materials.org/javascript/slides/varsfucntions

function myFunction() {
     var message= "Hello World";
     document.getElementById("botom").innerHTML= message;
}

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.*angument van dentro de los prentesis
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(jobTittle, geoLocation, partner, numKids){
var message= (`You will be a ${jobTittle} in ${geoLocation}, and married to ${partner} with ${numKids} kids.`)
document.getElementById("function").innerHTML= message;
}
tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('Soccer player', 'vegas', 'Jaden', 5);
tellFortune('Fotball player', 'Vegas', 'Sean', 10);

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay){
var maxAge= 104;
var totalNeeded= (amountPerDay * 365) * (maxAge - age);
var message= (`You will need ${totalNeeded} cups of coffee to last you until the ripe old age of ${maxAge}`)
document.getElementById("supply").innerHTML= message;
console.log= message;
}
calculateSupply (30, 4);
calculateSupply (23, 2);
calculateSupply (50, 3);

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

