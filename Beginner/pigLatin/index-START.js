//Translate the provided string to Pig Latin by following the rules below: 

//For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
// "pig" = "igpay"

// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
// "glove" = "oveglay"

// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
// "explain" = "explainway”

//Imperative approach 

function pigLatin(str) {
 //conver string to lowercase
 str = str.toLowerCase()
 //initialise array of vowels 
 const vowels = ["a", "e", "i", "o", "u"]
 //
 let vowelIndex = 0;

 if (vowels.includes(str[0])) {
  //if the first letter isn't a vowel ie. is a consonant 
  for (let char of str) {
   //loop through until the first vowel is found 
   if(vowels.includes(char)) {
    //store the index at which the first vowel exists 
    vowelIndex = str.indexOf(char);
    break; 
   }
  }
  //compose final string
  return str.slice(vowelIndex)+ str.slice(0, vowelIndex)+ "ay";
 }
}

// declartive approach 

function pigLating(str) {
 return str
 .replace(/^([aeiouy])(._)/, '$1$2way')
 .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}
