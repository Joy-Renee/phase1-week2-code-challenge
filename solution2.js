
// Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

function arrayS(start, end){
    const newArrays = []                            // created an array to store the numbers that will be generated from the loop.
    for(let num = start; num <= end; num ++ ){      // The loop variable is num
        newArrays.push(num)                         // we then use the push method to add every value num iterates to the new list 'newArrays
    };
    return newArrays      
}

arrayS(201, 211) // This is where you input the number that will start and the one that will end respectively. Then it will output the array.
console.log(arrayS(201, 211))