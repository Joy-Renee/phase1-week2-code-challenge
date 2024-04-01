
function arrayNumbers([number]){
    const primeNumber = []
    for(let number = 0; number > 1; number ++)
    if(number % 2 === 0 && number % 3 === 0 && number % 5 === 0 && number % 7 === 0){
        return ''
    } 
    else{
        return primeNumber.push([number])
    }

}




console.log(arrayNumbers([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))

