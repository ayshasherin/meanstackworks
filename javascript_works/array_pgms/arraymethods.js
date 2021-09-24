//map
//filter
//reduce
//sort
//some
//find
//forEach


//filter even number from this array ie: array de ellaa object nte mugalil lum 
      //nmml oru condition apply cheyyunnundengil nmmlkk fikter use cheyyam ie;num %2==0 (condition)
//when there is no condition to apply like in printing sqyares etc...we use map ie; when each and every 
      //element have corresponding output

//examples for filter : add incdentives of 5000 rs for market team,print all employee names whose name starts with a
                        //,print developer names only,print all numbers > 2
//examples of map : print all employee names only,add bonus of 2000 rs for all employees,print squares of each number in array
                    //,print cubes of each number in the array                         





var arr=[2,3,4,5,6];

//squares of each number in the array
// var squares=[];
// for(let num of arr){  //this program using function can be written as follows
//     squares.push((num**2))
// }
// console.log(squares);

function squares(num){
    return num**2    //this program can also be written usin arrow function as follows
}
console.log(squares(2));



var squares=(num)=>num**2
console.log(squares(2));//square program using arrow function                     

