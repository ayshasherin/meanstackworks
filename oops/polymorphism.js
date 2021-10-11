//function overloading
//recently implemented function will only work ie: overloading:-same function name but different number of parameters
//overriding:- child should extends Parent ,inhertit cjheyyanam,parent classilum child classilum resolution same aayirikkanamfor overriding
//a class has only one constructor ie: if we give so many constructors inside a class then  only one contructor will work
//add(...args)  if we use spread operator then there is no need for function overloading or method overloading
//if this is under a class then this is called method overloading
//in javascript only one class can be inherited for overcoming multiple inheritance interface concept is there multilevel inheritance



//inheritance
//single inheritance
// class Parent{
//     phone(){
//         console.log("have redmi 10pro max");
//     }
// }

// class Child extends Parent{
    
// }
// var child=new Child()
// child.phone()


//method overriding
// class Parent{
//     phone(){
//         console.log("have redmi 10pro max");
//     }
// }

// class Child extends Parent{

//     phone(){
//         super.phone() //to refer partent class
//         console.log("iphone 12");
//     }
// }
// var child=new Child()
// child.phone()



//multi level inheritance
class Parent{
    //m1()
    m1(){
        console.log("inside parent");
    }
}

class Child extends Parent{
    //m1(),m2()
    m2(){
        console.log("inside m2");
    }
}

class SubChild extends Child{
    //m1(),m2(),m3()
    m3(){
        console.log("inside m3");
    }
}

var sb=new SubChild()
sb.m1()
sb.m2()
sb.m3()

var ch=new Child()
ch.m1()
ch.m2()

var parent=new Parent()
parent.m1()
















