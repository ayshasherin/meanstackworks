var employee={id:1000,emp_name:"ram",desig:"developer",salary:25000}



//object is case sensitive
//once elements added in object we cannot remove it
//object defined using {}
//key value pairs

//stored using key value pairs
console.log(employee["emp_name"]);   //or we can write this code using dot operator
console.log(employee.emp_name);

console.log(employee["salary"]);   //or
console.log(employee.salary);


//check for gender key in employee
console.log("gender" in employee);

//add gender key in employee
employee["gender"]="male"
console.log(employee);