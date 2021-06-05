/* CHALLENGE 
Given a sentence return the longest word 
*/


// 1) for loop 
function longestWord(text) {
    let wordArray = text.split(" ")
    let maxLength = 0 
    let result = ""

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result 
}

//2 using reduce 
function longestWord(text)  {
    var result = text.split("").reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLength.length) {
            return curentWord 
        }else {
            return maxLengthWord 
        }
    }, "")
    return result 
}

//3 Sort 
function longestWord(text) {
    let sortedArray = text.split(" ").sort((wordA, wordB) => wordB.length-wordA.length)
    return sortedArray[0]
}

module.exports = longestWord