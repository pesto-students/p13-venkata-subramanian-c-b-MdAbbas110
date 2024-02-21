function divideArray (number) {
    let evenNum = []
    let oddNum = []

    for (let num of number){
        if (num % 2 === 0) {
            evenNum.push(num)
        } else {
            oddNum.push(num)
        }
    }
    evenNum.sort((a,b) => a - b)
    oddNum.sort((a,b) => a - b)
    
    console.log('even Numbers :') 
    for (let even of evenNum) {
        console.log(even);
    }

    console.log('odd Number:')
    for( let odd of oddNum) {
        console.log(odd);
    }
}

const arr = [1,2,22,7,29,45,14,31,100]

divideArray(arr);