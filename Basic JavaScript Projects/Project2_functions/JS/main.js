//Project2 Functions Assignment

//a function that uses the += operator
function myFunction() {
    var sentence = "I'm learning"; //creating the variable
    sentence += " a lot from this course!"; //using the += operator to add to the  variable
    document.getElementById("Concatenate").innerHTML = sentence; //using document.getElementById()
}
//Display date button function
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}