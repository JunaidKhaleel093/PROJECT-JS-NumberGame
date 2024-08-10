function startGame() {
  while (true) {
    let number = prompt("Guess Number:");
    number = Number(number);

    const randomNumber = Math.ceil(Math.random() * 10);

    if (number === randomNumber) {
      alert("YOU WIN");
      break;
    } else if (number < randomNumber) {
      alert("Too low, try again!");
      console.log(
        "You guessed",
        number,
        "but the correct number was",
        randomNumber
      );
    } else if (number > randomNumber) {
      alert("Too high, try again!");
      console.log(
        "You guessed",
        number,
        "but the correct number was",
        randomNumber
      );
    }
  }
}
