var student={roll:100,name:"nikil",course:"bca",total:750}

//print student name
console.log(student.name);

//print student course
console.log(student.course);

//update total as 800
console.log(student.total=800);


//check for grade key is present or not
console.log("grade" in student);


//add new key value pair grade:A+
student["grade"]="A+"
console.log(student);


//add 20 marks of bonus
console.log(student.total+=20);
console.log(student);                          