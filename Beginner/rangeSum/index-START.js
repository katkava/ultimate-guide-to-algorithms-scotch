// given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them 

//1 For loop 

function rangeSum(arr) {
 let sum = 0;
 for(i = arr[0]; i <= arr[1]; i++){
  sum += i;
 }
 return sum 
}

// arithmetic progression formula

function rangeSum(arr) {
 return ((arr[1] - arr[0] +1) * (arr[0] + arr[1]))/2;
}

//using recursion 

function rangeSum(arr) {
 if (arr[0]== arr[1]) {
  return arr[0];
 }else{
  return rangeSum([arr[0], arr[1]-1])+arr[1]; 
 }
 }

 //using reduce 

 function rangeSum(arr) {
  let arrList = [];
  for(i =arr[0]; i <= arr[i]; i++) {
   arrList.push(i);
  }
  return arrList.reduce((acc, num) => acc +  num, 0);
 }