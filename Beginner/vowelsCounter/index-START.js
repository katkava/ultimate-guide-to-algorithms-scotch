/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
const Vowels = ["a", "e", "i", "o", "u"]
//Iterative approach 
function vowelsCounter(text) {
    // Code goes here
    //start counter 
    let counter = 0;
    //Loop through text to test if each character is a vowel
    for(let letter of text.toLowerCase()){
        if(Vowels.includes(letter)){
            counter ++ 
        }
    }
    return counter
}

//regular expressions 
function vowelsCounter(text){
    //search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi)
    //check if matching instances exist then calculate length 
    if(matchingInstances){
        return matchingInstances.length}
        else{
            return 0
        }
    }



module.exports = vowelsCounter;
