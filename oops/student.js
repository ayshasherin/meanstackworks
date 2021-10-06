class Student{
    setStudent(roll,course,stud_name){
        this.roll=roll
        this.course=course
        this.stud_name=stud_name
    }
    printStudent(){
        console.log(this.roll,this.course,this.stud_name);
    }
}

var student1=new Student()
student1.setStudent("min yunki","male",28)
student1.printStudent()

var student2=new Student()
student2.setStudent("jung hoseok","male",27)
student2.printStudent()                                                