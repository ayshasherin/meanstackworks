class Employee {
    constructor(eid, e_name, salary, desig) {
        this.eid = eid
        this.e_name = e_name
        this.salary = salary
        this.desig = desig
    }
}

var emp1 = new Employee(1000, "ram", 25000, "developer")
var emp2 = new Employee(1001, "ravi", 23000, "developer")
var emp3 = new Employee(1002, "raju", 26000, "ba")


// print developer details
// var employees = []
// employees.push(emp1, emp2, emp3)                // inernally already defined as push(...args) so we can add several number of elements
// employees.filter(emp => emp.desig == "developer").forEach(developer => console.log(developer))


// // mutable :- change cheyyaan pattum
// // immutable :- change cheyyaan pattilla 




// // sort employee objects based on salary
// employees.sort((emp1, emp2) => emp1.salary - emp2.salary)
// console.log(employees);



//getMax salary
var high_salary = 0
for (let emp of employees) {
    let empl=
    if (high_salary < emp.salary) {
        high_salary = emp.salary
    }
}
console.log(emp);