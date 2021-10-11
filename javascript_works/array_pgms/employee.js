var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

var op=[]
// for(let employee of employees){
    
    
//     console.log("experienc= ",employee[5]-employee[4]);
//     op.push(employee)
// }
var emp=employees.map(employee=>employee[5]-employee[4])

console.log(emp);



// // var employee_names=employees.map((emp)=>emp[1])
// // console.log(employee_names);


// // for (let emp of employees){
// //     console.log(emp[1]);
// // }


// //print developer details

// var developers=employees.filter(emp=>emp[3]=="developer")
// console.log(developers);


// //print names of each ba

// var analyst=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
// console.log(analyst);


// var developer_names=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
// console.log(developer_names);


// //print developer names whose exp> 6 years
// var exp_developers=employees.filter(emp=>(emp[3]=="developer") & ((emp[5]-emp[4])>6)).map(emp=>emp[1]) //we can do this by using two filters.This is called method chaining.
// console.log(exp_developers);

// // //add bonus of rs 5000 for all developers
// var developer_salary=employees.filter(emp=>(emp[3]=="developer")).map(emp=>emp[2]+5000)
// console.log(developer_salary);



//sort employee experience in ascending and descending order

// var employee_experience=employees.map(emp=>emp[5]-emp[4]).sort((emp1,emp2)=>emp1-emp2)
// console.log(employee_experience);

// var employees_experience=employees.map(emp=>emp[5]-emp[4]).sort((emp1,emp2)=>emp2-emp1)
// console.log(employees_experience);

// var emp_exp



// //sort employees with respect to salary

// employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
// console.log(employees);


// //sot developers with respect to salary

// var developer_salary=employees.filter(emp=>emp[3]=="developer").sort((emp1,emp2)=>emp2[2]-emp1[2])
// console.log(developer_salary);


// console.log(employees[0][1]);
// //print number of employees

// console.log(employees.length);




// //print number of developers

// var developer_count=0;
// for(let employee of employees){
//     //employee=[1000,"ram",15000,"hr",1990,2000]
//     //            0    1     2     3    4    5
//     if(employee[3]=="developer"){
//         developer_count++;
//     }
// }
// console.log("developers=",developer_count);




// //print experience of each employee

// for(let employee of employees){
//     //employee=[1000,"ram",15000,"hr",1990,2000]
//     //            0    1     2     3    4    5
//     console.log("experience",employee[5]-employee[4]);












//print highest salary

// var high_salary=0;
// for(let employee of employees){
//     //employee=[1000,"ram",15000,"hr",1990,2000]...etc
//    //            0    1     2     3    4    5
//    if(high_salary<employee[2]){ //0<15000   15000<25000 ...etc...35000<35000
//     high_salary=employee[2];  //high_salary=0->15000->25000->30000->35000->40000
//    }
// }
// console.log("max salary",high_salary);





//print lowest salary


// var low_salary=employees[0][2];//we get salary of first employee only
// for(let employee of employees){
//     //employee=[1000,"ram",15000,"hr",1990,2000]...etc
//    //            0    1     2     3    4    5
//    if(low_salary>employee[2]){ //15000>15000   15000>25000   15000>3000
//     low_salary=employee[2];  
//    }
// }
// console.log("min salary",low_salary);




//print name of developer who is taking highest salary











//print name of highest experience employee
//print total sum of salary group by developers