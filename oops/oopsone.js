// //class
// //object 
// //reference

// //this keyword to set to a particular person

// class Person{
//     setPerson(name,gender,age){
//         this.name=name,
//         this.gender=gender,   //this means pearson has name,person has gender,person has age
//         this.age=age            // reference for unique identification or current class le instance variable ne point cheyyaan
//                             //whole online class is class ie: person then inside online class 
//                             //there are people they are individual objects
 
//   //    this.name=name,this.gender=gender,this.age=age    (instance variable)
//   //    name,age,gender   (local variable)                  
//     }
//     printPerson(){
//         console.log(this.name,this.gender,this.age);
//     }
// }

//var refname=new classname()
// var obj1=new Person()
// obj1.setPerson("kim namjoon","male",27)
// console.log(obj1.name);
// console.log(obj1.gender);

// // obj1.printPerson()

// var obj2=new Person()
// obj2.setPerson("kim seokjin","male",29)
// obj2.printPerson()



//name initialise as name=arun ...etc
//inside class we use this keyword,outside class we use reference name ie: console.log(obj1.name)
//javascript is interpreter type ie:line by line execution
              // compiler means compiling whole source code at one time in to machine language
//now we are working in backend side
   //we can also run code in browser side that is in front end    
// it is the duty of javascript engine to convert js file in to 
                 //machine language.engine is just a program like C ...etc verthe engine create 
                                  //cheyyaan pattilla.ECMA governs it.there are some rules for creating js engine
                 //there are different types of javascript engines eg: chackra,vip,spider monkey ...etc         




//duty of setPerson():   initializing instance variable
           //constructor also does the same duty of setPerson().so just invoke constructor
           //therefore we dont have to expicitely invoke cheyyenda aavshyam illa.it automatically invokes at the time of creating object
//example:-

           class Person{
            constructor(name,gender,age){
                this.name=name,
                this.gender=gender,   
                this.age=age  
            } 
            printPerson(){
                console.log(this.name,this.gender,this.age);
            }
        } 
        
        var obj1=new Person("park jimin","male",26)
        obj1.printPerson()


