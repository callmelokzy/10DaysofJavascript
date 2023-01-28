//Day 3: Arrays
//Complete the getSecondLargest function in the editor below.

//solution

function getSecondLargest(num) {
    // Complete the function
  
    num.sort((a, b) => b - a);
    var maxi = num[0]
    for (let i = 1; i < num.length; i++) {
      if (num[i] != maxi) {
        return num[i];
      }
    }
  }

// let num = [2, 3, 6, 6, 5];
let num = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1]
getSecondLargest(num);

//-------------------------------------------------------------------------------


// Day 3: Try, Catch, and Finally
/* Task 
Try to reverse string s using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's message on a new line.
Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string. */


//solution

function reverseString(s) {
    try {
        s = s.split("").reverse().join("");  

    }
    catch(err) {
        console.log(err.message); //only output the error message
    }
    finally{
      console.log(s);
    }
    
}


let s = "1234"
reverseString(s);



// Day 3: Throw
/* Task  Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string YES.*/ 


//solution

function isPositive(a) {
  if (a == 0){
    throw new Error('Zero Error');
  }
  else if (a < 0){
    throw new Error('Negative Error');
  }
  else {
    return 'YES'
  }
}

a = 0;
isPositive(a)