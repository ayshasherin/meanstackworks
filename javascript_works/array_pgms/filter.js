var arr=[2,3,4,5,6,7];

// //print even numbers

// var evens=arr.filter(num=>num%2==0)
// console.log(evens);

// //print numbers greater than  3

// var great=arr.filter(num=>num>3)
// console.log(great);




// //print all odd numbers 

// var odd=arr.filter(num=>num%2!=0)
// console.log(odd);


// //print squares of all even numbers

// var even_squares=arr.filter(num=>num%2==0).map(num=>num**2)
// console.log(even_squares);



//   REDUCE


//sum of the whole array

var total=arr.reduce((num1,num2)=>num1+num2)  //2+3=5   5+4=9  9+5=14   14+6=20   20+7=27
console.log(total);

//maximum element in the whole array

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);


//minimum element in the whole array

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);



