// Write a javascript function to print the Fibonacci series of n times.

let n1 = 0, n2 = 1, nextTerm;
function fibonacci(number){
console.log(n1); 
console.log(n2); 

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
}
fibonacci(5);

// function fibonacci(num) 
// { 
//     var num1=0; 
//     var num2=1; 
//     var sum; 
//     var i=0; 
//     for (i = 0; i < num; i++)  
//     { 
//         sum=num1+num2; 
//         num1=num2; 
//         num2=sum; 
//     } 
//     return num2; 
// }

// console.log(fibonacci(8));