const max = parseInt(prompt("Enter the max number:"));
const random = Math.floor(Math.random() * max) + 1;
console.log(`Random number is: ${random}`); // For debugging, you can remove this line later.

let guess = parseInt(prompt("Enter your guess (or type 'quit' to exit):"));

while (true) {
    if (guess === "quit") {
        console.log("User quit");
        break;
    }

    guess = parseInt(guess); // Convert guess to integer
    if (guess === random) {
        console.log("You are right! random number was"+random);
        break;
    } else {
        console.log("You are wrong. Please try again.");
        guess = prompt("Enter your guess (or type 'quit' to exit):");
    }
}