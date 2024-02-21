function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessCount = 0

    for (let attempt = 0 ; attempt <= totalGuesses ; attempt++ ) {
        let userGuess = prompt('Enter a number form 1 to 100')
        if (userGuess === numToGuess) {
            guessCount = 0
            return alert('correct')
        } else {

        }

        if(userGuess === null || userGuess === "") {
            return 0;
        }
        if (isNaN(userGuess)) {
            continue
        }
        userGuess = Number(userGuess)

        if (userGuess === numToGuess) {
            guessCount = attempt
            break;
        } else if (userGuess < numToGuess) {
            prompt('guess is small you are close')
        } else{
            prompt('guess is to large think again')
        }

        const total = attempt - guessCount;
        console.log(total);

    }
    return guessCount
}

const play = playGuessingGame(12,5)
console.log(play);