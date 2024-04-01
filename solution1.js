
function sentence(str){                               // Create a function.
    let newString = '';                               // Create a variable that will store the new string.
    for(let r = 0; r < str.length; r++ ){             // Create a loop where 'r' is the variable that is being iterated.
       if(str[r] === str[r].toUpperCase()){           // Create an if statement that checks if r is in uppercase then converts it to lowercase and vice versa using else if it is lowercase to convert it to uppercase.
        newString += str[r].toLowerCase()             // We use the += to add the newly converted str[r] to our newArray.
       }
       else{
        newString += str[r].toUpperCase()
       }
    }
    return newString                                  // We use it at the end of the funtion (This is to ensure the loop is completed first) and not inside the loop to ensure that it does not return an incomplete string (it will prematurely exit the loop)
}
let str = 'The Quick Brown Fox' // Here is where you input your string.
console.log(sentence(str))      // Call out the function.



