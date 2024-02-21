function calcWordFrequencies() {
    let input = prompt('enter a sentence ')
    let words = input.split(" ")

    const wordFrequenciesMap = new Map()

    for (const word of words){
       const lowerCaseWord = word.toLowerCase()
        
       if(wordFrequenciesMap.has(lowerCaseWord)) {
        //if the word already exits in the map increment its frequency
        wordFrequenciesMap.set(lowerCaseWord, wordFrequenciesMap.get(lowerCaseWord) + 1)
       } else {
        wordFrequenciesMap.set(lowerCaseWord, 1)
       }
    }
    // iterate through the map and print word and its frequency
    for(const [word , frequency] of wordFrequenciesMap) {
        alert(`${word} ${frequency}`);
    }
}

calcWordFrequencies()