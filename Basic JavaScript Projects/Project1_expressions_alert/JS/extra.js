window.alert("Hello, world!");

// Escape Character Assignment
document.write("Hello, world!<br>");
var A = "This is a String";
document.write(A + "<br>");
let text = `Escape Character Assignment!`;
document.write(text + "<br>");
document.write("This section is meant to write a string that contains an 'apostrophe!' and/or \"quotations marks\"<br>");   

// Concatenation Assignment
var B = "Concatenated" + " String";
document.write(B + "<br>"); // Added semicolon and line break

// Concatenating lists
const numbers = Array.from({length: 10}, (_, i) => i + 1);
const letters = Array.from({length: 10}, (_, i) => String.fromCharCode(65 + i));
const colors = ["Blue", "Red", "Green", "Yellow", "Black", "White", "Purple", "Orange", "Pink", "Gray"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];

const result = [
  "Numbers: " + numbers.join(", "),
  "Letters: " + letters.join(", "),
  "Colors: " + colors.join(", "),
  "Months: " + months.join(", ")
].join("<br>");

document.write(result + "<br>");

// Multiple Variables
var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro";
document.write(Dad + "<br>");

// Define month variables
var Month1 = "January", Month2 = "February", Month3 = "March", Month4 = "April", Month5 = "May";
var Month6 = "June", Month7 = "July", Month8 = "August", Month9 = "September", Month10 = "October";
var monthList = [Month1, Month2, Month3, Month4, Month5, Month6, Month7, Month8, Month9, Month10];

// Added braces to for loop
for (let i = 0; i < monthList.length; i++) {
  document.write(monthList[i] + "<br>");
}   