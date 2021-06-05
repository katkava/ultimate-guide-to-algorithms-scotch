//Receiving a sentence, a word int he sentence and a replacement for that word as arguemnts, perform a serach and replace on the sentence using the arguments provided and return the sentence. 

function searchReplace(str, word, newWord) {
 if(word[0] === word[0].toUpperCase()) {
  newWord = newWord[0].toUpperCase()+newWord.slice(1)
 }
 return str.replace(word, newWord)
}

//regex 

function searchReplace(str, word, newWord) {
 let regex = new RegExp(word, "gi");
 if(/[A-Z]/.test(word[0])) {
  newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
 }
 return str.replace(regex, newWord)
}