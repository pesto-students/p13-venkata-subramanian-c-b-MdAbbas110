let counter = 1

function generateTransactionId (){
    let newTran = counter++

    const str = `Transition_ID_${newTran}`

    const unique = Symbol(str)

    return unique
}

const bio = generateTransactionId()
console.log(bio);