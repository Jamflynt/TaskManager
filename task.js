console.log("Hello World!");
// Task Manager Project

let currentYear = 2021;

const hello = `Welcome! 

Would you like go back to 1996?
"YES" - Continue to Palm Pilot Menu
"NO" - Stay in ${currentYear}`;

let input = prompt(hello).toUpperCase();

while (input !== "NO"){
    input = prompt(hello).toUpperCase();
}
alert(`Enjoy the Present`);