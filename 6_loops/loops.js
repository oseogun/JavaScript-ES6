/*
* Application to demostrate Javascript loops.
* Program prints the numbers from 1 to 100.
*  - For multiples of three it prints "Fizz" instead. 
*  - For the multiples of five it prints "Buzz" instead.
*  - For numbers which are multiples of both three and five it prints "FizzBuzz" instead.
*  - For prime numbers (divisible only by itself and one) it print "Prime" instead. 
* Written by Ose Ogun, May-2019.
*/


// Declare app object
const app = {};

// Determine if a number is a prime number
app.primeNumberUnder100 = (num) => {

    // Test 1 - If number is less than one return false
    if(num <= 1){
        return false;
    }

    // Test 2 - if any lower number divides our value with no remainders retuen false 
    for(i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        } 
    }  
      
    // If value passes all our tests return true
    return true
};

// Replace value in our list of numbers with appropriate string label
app.replaceNumber = (value) => {

    if (app.primeNumberUnder100(value)){
       console.log("Prime");
    }
    else if ( (value % 3 == 0) && (value % 5 == 0) ){
       console.log("FizzBuzz");
    }
    else if (value % 5 == 0){
       console.log("Buzz");
    }
    else if (value % 3 == 0){
       console.log("Fizz");
    } 
    else {
        console.log(value);
    }

};

// Loop until a pre-specified number checks are performed 
app.loop = (loopLimit) => {
    let i = 1;

    do {
        
        app.replaceNumber(i);
        i++;

    } while(i <= loopLimit);
}

// Iniialize app
app.init = (limit) => {

    app.loop(limit);

};

// Run app
app.init(100);
