

// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, over 60 play a ticket price of 15.

var num = prompt("Enter your age");

if (num < 12) {
    console.log(" ticketPrice = 5");

} else if (num < 18) {
    console.log(" ticketPrice = 10");

} else if (num < 60) {
    console.log(" ticketPrice = 20");

} else {
    console.log(" ticketPrice = 15");
}