/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// 1) chaining method 
function reverseString(text) {
    // Code goes here
return text.split("").reverse().join("")
}

//another chaining method with sets 
function reverseString(text) {
return [...text].reverse().join("")
}

//2) For-loop way 
function reverseString(text) {
    let result = ""
    for(let i = text.length -1; i>=0; i--){
        result += text[i]
    }
    return result
}

//improved with for ..of
function reverseString(text) {
    let result = "";
    for(let char of text) {
        result = char + result 
    }
    return result 
}



//3 Recursive Way 
function reverseString(text) {
    if (text===""){
        return ""
    }else{
        return reverseString(text.substr(1)) + text[0]
    }
}
// 4 reduce 
function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, "")
}
//ES6 opeartor 

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}


module.exports = reverseString