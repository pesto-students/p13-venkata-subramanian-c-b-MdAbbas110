function* stringToSymbolIterator(arr) {
    for(let str of arr) {
        const symbol = Symbol(str)
        yield symbol
    }
}

const inputArray = ['hello', 'world', 'test'];
const iterator = stringToSymbolIterator(inputArray);

for (const symbol of iterator) {
    console.log(symbol);
}