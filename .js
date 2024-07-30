//Chapter 1 (Alerts)

//1- Alert these following (individually):
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number
// V. Password
alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");

//2. Correct this statement: alert"You're learning JavaScript!";
alert("You're learning JavaScript!");

//3. Code an alert statement displaying any message you like.
alert("Welcome to JavaScript programming!");

//Chapter 2 (Variables for string)

//1. Declare any variable in the camelCase format.
var myVariable;

//2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
var myString;
myString = "Hello World";
 
//3. Declare the variable teamName and Alert your Team name.
var teamName = "Dream Team";
alert(teamName);

//4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
var bestMan = "Charlie";
bestMan = "John";

//Chapter 3 (Variables for numbers)

//1. Declare a variable “caseQty”
var caseQty;

//2. Assign to the variable caseQty, which has already been declared, the value 144.
caseQty = 144;

//3. Rewrite this statement so the variable can be used in a math operation. var num = "9";
var num = 9;

//4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
var sum;
sum = 5 + 7;

// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
// orderTotal is 110

// 6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.
var number = 20;
number = number + 5;

// Chapter 4 (Variable names Legal and Illegal)

// 1. Correct this statement.
// var product cost = 3.45;
var productCost = 3.45;

// 2. Rewrite this using camelCase.
// var Nameofband;
var nameOfBand;

// 3. In a single statement declare a legally-named variable and assign a
// number to it.
var itemCount = 10;

// 4. Declare a variable that is a combination of your first and last names. Use camelCase.
var alishaIfthikhar;

// 5. List the legal and Illegal Variables.
// Legal: firstName, lastName, age2, _city, $price
// Illegal: 2name, last-name, var, function, @home

// Chapter 5 (Math Expression I)

// 1. What is the name and symbol of the arithmetic operator that
// gives you the remainder when one number is divided by another?
//The modulus operator %

// 2. What is the value of num?
// var num = 20 % 6;
var num = 20 % 6;
// num is 2

// 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
var largeNum = 1000 * 2000;

// 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable
var difference = a - b;

// 5. Assign to a variable the remainder when one number is divided by
// another. The variable hasn't been declared beforehand. Make up
// the variable name.
var remainder = 10 % 3;

// 6. Code an alert that displays the result of a multiplication on 2 numbers.
alert(6 * 7);

// Chapter 6 (Math Expression II)

// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.
x++;
// or
x += 1;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
x--;

// 3. var x = 50;
// var y = x++;
// What is the value of y?
var x = 50;
var y = x++;
// y is 50

// 4. var y = 50;
// var z = --y;
// What is the value of z?
var y = 50;
var z = --y;
// z is 49

// 5. In a single statement, decrement num and assign its original value to newNum.
var num = 10;
var newNum = num--;

// 6. In a single statement add 1 to a variable and assign its original value to another variable.
var num = 10;
var originalNum = num++;

// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert
var num = 5;
num++;
alert(num);

// Chapter 7 (Math Expression III)

// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?
var calculatedNum = 2 + (2 * 6);
// calculatedNum is 14

// 2. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?
var calculatedNum = (2 + 2) * 6;
// calculatedNum is 24

// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?
var calculatedNum = (2 + 2) * (4 + 2);
// calculatedNum is 24

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?
var calculatedNum = ((2 + 2) * 4) + 2;
// calculatedNum is 18

// Note: Try all the above equations yourself.
// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.
var cost = 2 + (2 * 4) + 10;
// cost is 56

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.
var units = (2 + 2) * 4 + 10;
// units is 20

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
// clarified with parentheses, producing 5.
var pressure = 4 / (2 * 4);
// pressure is 0.5

// Chapter 8 (Concatenating Text Strings)

// 1. var num = "2" + "2";
// What is the value of num? Include quotation marks.
var num = "2" + "2";
// num is "22"

// 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement
var message = "Hello," + "Dolly";
// message is "Hello,Dolly"

// 3. alert("33" + 3);
// What message displays in the alert box?
alert("33" + 3);
// Displays "333"

// 4. Write an alert that displays the concatenation of the two parts of
// "Pakistan Zindabad".
alert("Pakistan " + "Zindabad");

// 5. Write a statement that assigns to a variable the concatenation of a string with a number
var strNum = "The answer is " + 42;

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;

// Chapter 9 (Prompts)

// 1. Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
var firstName = prompt("Enter first name");

// 2. Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.
var country = prompt("Country?", "China");

// 3. Correct this statement
// var yourName = prompt(Enter Your Name");
var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a
// default input.
var city = prompt("Enter your city", "New York");

// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.
var message = "Enter your favorite color";
var defaultColor = "Blue";
var userColor = prompt(message, defaultColor);

// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.
var response = prompt("Enter something", "default");
alert(response);

// Chapter 10 (if statments)

// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.
if (x === y) {
    var z = prompt("What is the value of z?");
}

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")
var ZipCode = "10010";
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;
var x = 1;
if (x === 1) {
    x = 2;
}

// Chapter 11 (Comparison Operators)
    
//     1. Code the first line of an if statement that tests whether one
//     variable is unequal to another. (Use !)
if (a !== b) {
    // Code here
}

// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.
if (a >= b) {
    // Code here
}

// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.
var a = 5;
if (a !== 10) {
    a = 10;
}

// 4. Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.
if (5 !== 10) {
    alert("Congratulations!");
}

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says "No
// match"
var firstName = prompt("Enter your first name");
if (firstName !== "John") {
    alert("No match");
}

// Chapter 12 (if...else and else if statements)
    
//     1. Code an if statement that tests whether the value represented by
//     a variable is greater than or equal to the value represented by
//     another variable. If so, display an alert. If not, display a different
//     alert.
if (a >= b) {
    alert("a is greater than or equal to b");
} else {
    alert("a is less than b");
}

// 2. Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)
var marks = prompt("Enter your marks");
var percentage = (marks / 100) * 100;

if (percentage >= 90) {
    alert("Grade: A");
} else if (percentage >= 80) {
    alert("Grade: B");
} else if (percentage >= 70) {
    alert("Grade: C");
} else if (percentage >= 60) {
    alert("Grade: D");
} else {
    alert("Grade: F");
}

// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.
var city = prompt("Enter a city");
if (city === "Karachi") {
    alert("It's Karachi");
} else if (city === "Lahore") {
    alert("It's Lahore");
} else {
    alert("Different city");
}

// Chapter 13 (Testing sets of conditions)
    
//     1. Code the first line of an if statement that tests whether both are
//     true: a has the same value as b and c has the same value as d.
if (a === b && c === d) {
    // Code here
}

// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the
// same value as d.
if (a === b || c !== d) {
    // Code here
}

// 3. Code the first line of an if statement that tests whether
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60.
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    // Code here
}

// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.
var num1 = 10;
var num2 = 20;
if (num1 < num2 || num1 > num2) {
    alert("Numbers are not equal");
}

// 5. Declare 2 variables. Assign one of them your first name and the
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.
var firstName = "John";
var lastName = "Doe";

var inputFirstName = prompt("Enter your first name");
var inputLastName = prompt("Enter your last name");

if (inputFirstName === firstName && inputLastName === lastName) {
    alert("Names match");
}

// Chapter 14 (If statements nested)

// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater
// than 5 then Alert "OK".
var password = prompt("Enter your password");

if (password) {
    if (password.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
}

// 2. Try this statement by yourself
// if (a === 1) {
// if (c === "Max") {
// alert("OK");
// }
// }
if (a === 1 && c === "Max") {
    alert("OK");
}

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) {
// if (c === "Max") {

// alert("OK");
// }
// }
var num1 = 5;
var num2 = 5;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("Numbers are equal and less than or equal to each other");
    }
}

// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether th
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.
var num1 = 10;
var num2 = 10;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("The numbers are equal and num1 is less than or equal to num2");
    }
}

// Chapter 15 (Array I)

// 1. Declare an empty array.
var emptyArray = [];

// 2. Code an array with 1 string element
var singleElementArray = ["hello"];

// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert
// using array index
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total
// length of array.
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabet.length;

// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
var array = ["firstElement"];
array[1] = "secondElement";
alert(array[1]);

// Chapter 16 (Array II)

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.
var array = ["initialElement"];
array.push("newElement");
alert(array[array.length - 1]);

// 2. var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();

// 3. var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(10);

// Chapter 16 (Array III)

// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.
var array = ["firstElement"];
array.unshift("newFirstElement");
alert(array[0]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "parrot", "hamster");

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
