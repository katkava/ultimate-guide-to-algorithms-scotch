//return the 1st element from the given array that passes the test specified by the provided function. Both the array and functino are passed into the function as arguments as shown. 

//imperative approach 

function arrayFilter(arr, func) {
 for(let elem of arr) {
  if (func(elem)) {
   return elem
  }
 }
 return undefined 
}

//using filter 

function arrayFilter(arr, func) {
 let filteredArray = arr.filter(func)
 return fieredArray[0] ? filteredArray[0] : undefined; 
}

// using find 

function arrayFilter(arr, func) {
 return arr.find(func)
}