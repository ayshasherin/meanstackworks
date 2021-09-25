var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]


// var employee_names=employees.map((emp)=>emp[1])
// console.log(employee_names);


for (let emp of employees){
    console.log(emp[1]);
}



























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