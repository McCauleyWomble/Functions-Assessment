
/*
Define a function named firstLetterName. 
It should take a string name as a parameter and 
alert the message "The name <NAME> starts with the letter <FIRSTLETTEROFNAME>
HINT: to get a single character of a string,
you can use bracket syntax like you used to access array elements
*/
function firstLetterName(name) {
  const firstLetter = name[0];
  alert(`The name ${name} starts with the letter ${firstLetter}.`);
}

/*
Define a function divisibleByTwo. 
It should take a single parameter number and determine whether 
the number input is an even or odd number. 
If it's even, the function should return true. 
If it's odd, the function should return false.
HINT: You'll need to use the % operator.
*/
function divisibleByTwo(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/*
Define a function named largestNum.
It should take an array arr as a parameter and loop
through that array. The function should return the largest number in the array.
After defining all the functions, call each function
at the bottom of the JavaScript file with the appropriate arguments.
example video https://youtu.be/Nvt_ykXYMkk
*/
function largestNum(arr) {
  let largest = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// for the firstLetterName function
console.log("Calling firstLetterName(\"John Doe\")")
firstLetterName("John Doe");
console.log("Calling firstLetterName(\"Kevin McArthur\")")
firstLetterName("Kevin McArthur");

// for the divisibleByTwo function
console.log("divisibleByTwo(3) ", divisibleByTwo(3))
console.log("divisibleByTwo(8) ", divisibleByTwo(8))

// for the largestNum function
console.log("Calling largestNum([1,3,75,34,6,9,3,1])")
console.log(largestNum([1,3,75,34,6,9,3,1]))