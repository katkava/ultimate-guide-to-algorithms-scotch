/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



//1 forEach() method 

function capSentence(text) {
   // Code goes here
   let wordsArray = text.toLowerCase().split('')
   let capsArray = []

   wordsArray.forEach(word => {capsArray.push(word[0].toUpperCase() + word.slice(1))})
   return capsArray.join(' ')
}

// 2 Using map() and slice() 
function capSentence(text){
  let wordsArray = text.toLowerCase().split(" ")
  let capsArray = wordsArray.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(" ")
}

//3 Using map and replace 
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word => {
    return word.replace(word[0], word[0].toUpperCase())
  }) //comment 
  return capsArray.join(' ')
}

module.exports = capSentence