// given an integer, return an integer that has the reverse ordering of that which was received 

//reverse a string
function reverseString(text) {
 return [...text].reduce((acc, char) => char + acc, '')
}

//Reverse an integer 
function reverseInteger(num) {
 let reversedNumber = parseInt(reverseString(num.toString()))
 return (reversedNumber + Math.sign(num))
}