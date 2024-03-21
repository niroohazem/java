// Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

var num = prompt("Enter the grade");

if (num >= 90 && num <= 100) {
    console.log("A");

} else if (num >= 80 && num < 90) {
    console.log("B");

} else if (num >= 70 && num < 80) {
    console.log("C");

} else if (num >= 60 && num < 70) {
    console.log("D");

} else if (num >= 0 && num < 60) {
    console.log("F");
} else {
    console.log("Invalid score!");
}