console.log('JavaScript-Variables');

// var firstName= "Analy";
// var pizzaCount= 4;
// var totalCost= true;
// var IsHungry= "pizzaCount" * 10.00;

alert ("Welcome to Analy's Pizza Restaurant");
alert ("Our current special is buy 4 pizzas and get one free");
confirm ("Sounds like your little one is hungry?");
prompt ("The total cost is $20.00 for the 4 pizzas and you get one free. Would you take this offer?");

//Calculate properties of a circle
//Store a radius into a variable.
var radius= 10;
//Calculate the circumference based on the radius
var pi= 3.141592;
var diameter= 2 * "radius";
var circumference=  "pi" * 2 * "radius"; 
document.getElementById("circumference").innerHTML="The circumference is" + " " + circumference;
//Calculate the area based on the radius
var area="pi" * "radius" * "radius";
document.getElementById("area").innerHTML="The area is" + " " + area;

//It's hot out! Let's make a converter
//Store a Celsius temperature into a variable
var celsius= 70;
//Convert it to fahrenheit
var celsiusTofahrenheit= "celsius" * 9/5 + 32;
document.getElementById("celsius").innerHTML= celsius + " " + "is" + " " + fahrenheit;
//Convert it to Celsius
var fahrenheit=100;
var fahrenheitTocelsius= "celsius" * 9/5 + 32;
document.getElementById("fahrenheit").innerHTML= fahrenheit + " " + "is" + " " + celsius;

//Want to find out how old you'll be?
//Store your birth year in a variable
var birthYear= 1986;
//Store a future year in a variable
var futureYear= 2020;
var futureYearsecond= 2050;
//Calculate your 2 possible ages
var currentAge= "futureYear" - "birthYear";
var currentAgesecond= "futureYearsecond" - "birthYear";
document.getElementById("birth").innerHTML="I will be either" + " " + currentAge + " " + "or" + " " + currentAgesecond + "," + '\n' +
     " " + "depending on what month it is in 2026;"

