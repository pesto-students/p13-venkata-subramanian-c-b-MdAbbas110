function counter() {
    let _counter = 0

    function increment() {
        _counter += 1
    }

    function result() {
        return "Counter =" + _counter
    }

    return {
        increment,
        result
    }

}

const count = counter()
count.increment()
count.increment()

console.log(count.result());