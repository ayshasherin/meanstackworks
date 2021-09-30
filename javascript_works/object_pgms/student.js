// var student={roll:100,name:"nikil",course:"bca",total:750}

// //print student name
// console.log(student.name);

// //print student course
// console.log(student.course);

// //update total as 800
// console.log(student.total=800);


// //check for grade key is present or not
// console.log("grade" in student);


// //add new key value pair grade:A+
// student["grade"]="A+"
// console.log(student);


// //add 20 marks of bonus
// console.log(student.total+=20);
// console.log(student);                          



var students={
    roll:1000,
    student_name:"ram",
    course:"MEARN STACK",
    batch:"python_aug"
}
// if(("batch" in students){
//     console.log("true");
// }
// else{
//     students.batch="mearnstack_aug"
// }
// console.log(students);
// for(let key in students){
//     console.log(key);
//     console.log(students[key]);
// }
if(!("batch" in students)){
    students.batch="meanstack_aug"
}

console.log(students);